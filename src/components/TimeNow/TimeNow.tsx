'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { getFormattedTimeNow } from '@/utils/getFormattedTimeNow';
import { TimeNowProps } from './types';

const ONE_SECOND = 1000;

export const TimeNow: React.FC<TimeNowProps> = ({ className }) => {
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateNow(new Date());
    }, ONE_SECOND);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeNowClasses = classNames(
    'text-sm font-medium text-purple-light',
    className,
  );

  return <div className={timeNowClasses}>{getFormattedTimeNow(dateNow)}</div>;
};