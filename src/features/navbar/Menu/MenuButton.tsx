import { ReactComponent as CloseMenuButton } from '~/assets/svg/Close.svg';
import { ReactComponent as MenuButton_ } from '~/assets/svg/Menu.svg';
import { Button } from '~/shared/ui/button/Button';

import MenuStyles from './Menu.module.scss';

export const MenuButton = ({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className={MenuStyles.burger}>
      <Button
        apperance="primary"
        icon={isOpen ? <CloseMenuButton /> : <MenuButton_ />}
        onClick={toggle}
        style={{ width: '56px' }}
      />
    </div>
  );
};
