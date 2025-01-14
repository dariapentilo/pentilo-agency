'use client';

import { useState, useEffect } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import { useSearchParams } from 'next/navigation';
import classNames from 'classnames';

import { notify, sendDataToTelegram } from '@/utils';
import { FORM_DATA_KEY } from '@/constants/form';

import { Field } from '../ui/Field';
import { TextArea } from '../ui/TextArea/TextArea';
import { Countdown } from '../ui/Countdown';
import { Button } from '../ui/Button';
import { Loader } from '../ui/Loader';

import { FormProps, PopUpType, StatusVariants, UtmObject } from './types';
import { schema } from './schema';

import data from '@/data/form.json';
import common from '@/data/common.json';

const { form, timerText, notifications, onLoadingMessage } = data;
const { inputs, textarea } = form;
const { onSuccess, onError } = notifications;

export const Form = ({ className = '' }: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [count, setCount] = useState<number>(0);

  const utmMapping: UtmObject = {
    utm_source: undefined,
    utm_medium: undefined,
    utm_term: undefined,
    utm_content: undefined,
    utm_campaign: undefined,
  };

  useSearchParams().forEach((value, key) => {
    if (key in utmMapping) {
      utmMapping[key] = value;
    }
  });

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as FieldValues | any,
  });

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const textAteaData = watch(textarea.name);

  useEffect(() => {
    setCount(textAteaData?.length || 0);
  }, [textAteaData, watch]);

  useEffect(() => {
    switch (popUpType) {
      case 'default':
        return;
      case 'success':
        notify(onSuccess, popUpType);
        setPopUpType('default');
        return;
      case 'error':
        notify(onError, popUpType);
        setPopUpType('default');
        return;
    }
  }, [popUpType]);

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const status: StatusVariants = await sendDataToTelegram({
        ...formData,
        ...utmMapping,
      });
      setPopUpType(status);
      reset();
    } catch (error) {
      setPopUpType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const formClassName = classNames('md:w-[380px]', className);
  const btnClasses = classNames(
    'btn-transition mx-auto flex items-baseline justify-center gap-[24px] md:w-[328px] xl:w-[279px]',
    { 'bg-opacity-50': isLoading },
  );

  return (
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <ul className="mb-7 flex flex-col gap-10">
        {inputs.map(input => (
          <li key={input.id}>
            <Field {...input} register={register} errors={errors} />
          </li>
        ))}
        <li>
          <TextArea
            {...textarea}
            register={register}
            errors={errors}
            count={count}
          />
        </li>
      </ul>

      <div className="mb-10 flex justify-center gap-1">
        <p>{timerText}</p>
        <Countdown into="form" />
      </div>

      <Button
        tag="button"
        accent={true}
        disabled={isLoading}
        buttonType="submit"
        className={btnClasses}
      >
        {isLoading ? onLoadingMessage : common.buttonsText.v3}
        {isLoading ? <Loader /> : null}
      </Button>
    </form>
  );
};
