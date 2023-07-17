import { Link } from 'react-router-dom';
import './404.scss';

export const PageNotFound = () => {
  return (
    <div className="bodyNotFound">
      <div className="content">
        <Link to={'/'}>Перейти к главной странице</Link>
      </div>
    </div>
  );
};
