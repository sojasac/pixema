import { type InputHTMLAttributes, type ReactElement } from 'react';

export type InputFieldProperties = {
  label?: string;
  id?: string;
  error?: string;
  shouldFitContainer?: boolean;
  btn?: ReactElement | null;
} & InputHTMLAttributes<HTMLInputElement>;
