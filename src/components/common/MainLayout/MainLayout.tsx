import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
