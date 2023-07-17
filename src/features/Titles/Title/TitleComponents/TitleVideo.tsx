import { Link } from 'react-router-dom';

export const TitleVideo = ({ url }: { url: string }) => {
  return (
    <div>
      <iframe
        src={url}
        style={{ margin: '0 auto', display: 'block' }}
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
