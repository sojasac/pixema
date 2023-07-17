import notFound from '~/assets/layouts/notFound.png';
export const NotFound = ({ message }: { message?: string }) => {
  return (
    <div>
      <div>
        <img
          src={notFound}
          alt={'Not Found'}
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>
      {message && <p style={{ textAlign: 'center' }}>{message}</p>}
    </div>
  );
};
