import axios from 'axios';
import { FieldValues } from 'react-hook-form';

import { StatusVariants } from '@/components/Form/types';
import data from '@/data/telegramBot.json';

type Response = {
  data: { status: 200 | 500 };
};

export const sendDataToTelegram = async (
  formData: FieldValues,
): Promise<StatusVariants> => {
  const {
    userName,
    socialLink,
    phoneNumber,
    question,
    utm_source,
    utm_campaign,
    utm_content,
    utm_term,
    utm_medium,
  } = formData;
  const { title, name, phone, socials, userQuestion } = data;

  const messageMarkup = `<b>${title}</b>\n
  ${name}${userName}
  ${socials}${socialLink}
  ${phone}${phoneNumber}
  ${userQuestion}${question || 'Не вказано'}
  utm_source: ${utm_source || 'Не вказано'}
  utm_medium: ${utm_medium || 'Не вказано'}
  utm_term: ${utm_term || 'Не вказано'}
  utm_content: ${utm_content || 'Не вказано'}
  utm_campaign: ${utm_campaign || 'Не вказано'}
  `;

  try {
    const response: Response = await axios.post(`/api/telegram`, {
      text: messageMarkup,
    });

    if (response.data.status === 200) return 'success';
  } catch (error) {
    return 'error';
  }

  return 'error';
};
