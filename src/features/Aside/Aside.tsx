import { AsideSchema } from './Aside.schema';
import AsideStyles from './AsideStyles.module.scss';
export const Aside = () => {
  return (
    <aside className={AsideStyles.container}>
      {AsideSchema.map((link) => (
        <div key={link.path}>
          {link.icon}
          <a href={link.path}>{link.title}</a>
        </div>
      ))}
    </aside>
  );
};
