import './App.style.scss';
import { Footer } from './features/Footer/Footer';
import { Navbar } from './features/navbar/Navbar';
export const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};
