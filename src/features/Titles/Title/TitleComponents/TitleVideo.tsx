import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import VideoStyles from './TitleComponents.module.scss';

export const TitleVideo = ({ url }: { url: string }) => {
  return (
    <div className={VideoStyles.videoWrap}>
      <ReactPlayer
        url={url}
        controls={true}
        style={{ maxWidth: '100%' }}
        height={200}
      />
      <p style={{ textAlign: 'center' }}>
        {`If the video doesn't play, click `}
        <Link
          to={url}
          target="_blank"
        >
          here
        </Link>
      </p>
    </div>
  );
};
