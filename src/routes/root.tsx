import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation';

const Root = () => (
  <main>
		<Navigation />
		<Outlet />
	</main>
);

export default Root;