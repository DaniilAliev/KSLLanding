import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/Footer';

const Root = () => (
  <main>
    <Navigation />
    <Outlet />
    <Footer />
  </main>
);

export default Root;