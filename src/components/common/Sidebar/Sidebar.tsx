import { Link } from 'react-router-dom';
import { PAGE_ROUTE } from '@/consts';
import * as S from './SidebarStyle';

function Sidebar() {
  return (
    <S.Sidebar>
      <S.SidebarList>
        <li>
          <Link to={PAGE_ROUTE.PAGE_A}> page A</Link>
        </li>
        <li>
          <Link to={PAGE_ROUTE.PAGE_B}>page B</Link>
        </li>
        <li>
          <Link to={PAGE_ROUTE.PAGE_C}>page C</Link>
        </li>
      </S.SidebarList>
    </S.Sidebar>
  );
}

export default Sidebar;
