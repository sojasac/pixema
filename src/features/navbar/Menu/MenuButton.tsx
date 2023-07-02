import { ReactComponent as CloseMenuButton } from '~/assets/svg/Close.svg';
import { ReactComponent as MenuButton_ } from '~/assets/svg/Menu.svg';
import { Button } from '~/shared/ui/button/Button';

export const MenuButton = ({
  isOpen,
  toogle
}: {
  isOpen: boolean;
  toogle: () => void;
}) => {
  return (
    <Button
      apperance="primary"
      icon={isOpen ? <CloseMenuButton /> : <MenuButton_ />}
      onClick={toogle}
      style={{ width: '56px' }}
    />
  );
};
