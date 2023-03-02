import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@/components';
import * as S from './MainLayoutStyle';

function MainLayout() {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Sidebar />
        <Outlet />
      </S.MainContainer>
    </S.Container>
  );
}

export default MainLayout;
