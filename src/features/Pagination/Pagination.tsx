import { ReactComponent as ArrowLeft } from '~/assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '~/assets/svg/arrow-right.svg';
import { Button } from '~/shared/ui/button/Button';

import Styles from './Pagination.module.scss';
export const PaginationComponent = ({
  onNextPage,
  onPrevPage,
  total,
  currentPage
}: {
  onNextPage: () => void;
  onPrevPage: () => void;
  total: number;
  currentPage: number;
}) => {
  return (
    <div className={Styles.container}>
      <Button
        icon={<ArrowLeft />}
        apperance="secondary"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      />
      <p>
        {currentPage}/{total}
      </p>
      <Button
        icon={<ArrowRight />}
        apperance="secondary"
        onClick={onNextPage}
        disabled={currentPage === total}
      />
    </div>
  );
};
