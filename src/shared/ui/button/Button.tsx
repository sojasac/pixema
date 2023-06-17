import { type PropsWithChildren } from 'react';

import classNames from 'classnames';

import { ButtonApperance, type ButtonProperties } from './Button.types';
import ButtonStyle from './ButtonStyle.module.scss';
export const Button = ({
  apperance = ButtonApperance.Primary,
  icon = null,
  children,
  ...buttonProperties
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      {...buttonProperties}
      className={classNames({
        [ButtonStyle.btn]: true,
        [ButtonStyle[apperance]]: true
      })}
    >
      {icon && <div className={ButtonStyle.iconWrap}>{icon}</div>}
      {children}
    </button>
  );
};
