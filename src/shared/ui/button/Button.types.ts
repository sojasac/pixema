import { type ReactElement, type ButtonHTMLAttributes } from 'react';

export const ButtonApperance = {
  Primary: 'primary',
  Secondary: 'secondary'
} as const;

export type ButtonApperances =
  (typeof ButtonApperance)[keyof typeof ButtonApperance];

export type ButtonProperties = {
  apperance?: ButtonApperances;
  icon?: ReactElement | null;
} & ButtonHTMLAttributes<HTMLButtonElement>;
