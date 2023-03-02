import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, PageA, PageB, PageC } from './pages';
import { MainLayout } from '@/components';
import { PAGE_ROUTE } from './consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PAGE_ROUTE.PAGE_A} element={<PageA />} />
          <Route path={PAGE_ROUTE.PAGE_B} element={<PageB />} />
          <Route path={PAGE_ROUTE.PAGE_C} element={<PageC />} />
        </Route>
        <Route path={PAGE_ROUTE.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
