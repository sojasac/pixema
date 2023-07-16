import { type PropsWithChildren } from 'react';

import { type InputFieldProperties } from './InputField.types';
import InputFieldStyle from './InputFieldStyle.module.scss';
export const InputField = ({
  label,
  id,
  error,
  shouldFitContainer,
  children,
  ...inputProperties
}: PropsWithChildren<InputFieldProperties>) => {
  return (
    <div
      className={InputFieldStyle.container}
      style={shouldFitContainer ? { width: '100%' } : undefined}
    >
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        {...inputProperties}
      />
      {error && <div>{error}</div>}
      {children}
    </div>
  );
};
export const RadioInput = ({
  value,
  name,
  ...inputProperties
}: { name: string; value: string } & InputFieldProperties) => {
  return (
    <label className={InputFieldStyle['radio']}>
      <input
        {...inputProperties}
        type="radio"
        name="radio"
        value={value}
      />
      <span className={InputFieldStyle['name']}>{name}</span>
    </label>
  );
};
export interface SelectOptions {
  name: string;
  slug: string;
}
export const OptionInput = ({ name }: { name: string }) => {
  return <option value={name}>{name}</option>;
};
