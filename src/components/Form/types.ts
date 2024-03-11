export interface FormProps {
  className?: string;
}

export type PopUpType = 'default' | 'success' | 'error';

export type StatusVariants = 'success' | 'error';

export interface UtmObject {
  utm_source?: string;
  utm_medium?: string;
  utm_term?: string;
  utm_content?: string;
  utm_campaign?: string;
}
