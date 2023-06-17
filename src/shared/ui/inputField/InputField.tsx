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
