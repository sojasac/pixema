import { type InputHTMLAttributes } from 'react';

export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: keyof FormState;
}

export interface FormState {
  email: string;
  new_password: string;
  confirmPassword: string;
}

export type FormErrors = Partial<Record<keyof FormState, string>>;
