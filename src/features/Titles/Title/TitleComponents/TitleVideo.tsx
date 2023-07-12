import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export const TitleVideo = ({ url }: { url: string }) => {
  return (
    <div>
      <ReactPlayer
        url={url}
        controls={true}
        style={{ maxWidth: '100%', maxHeight: '250px' }}
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
