import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// Pages
import { GamePage } from '../pages/GamePage/GamePage';
import { HomePage } from '../pages/HomePage';

export const App = () => {
   return (
      <Routes>
         <Route element={<MainLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="game" element={<GamePage />} />
         </Route>
      </Routes>
   );
};

const MainLayout = styled.div.attrs({
   children: <Outlet />,
})`
   min-height: 100vh;
   height: 100%;
   background-color: var(--dark-navy);
   display: grid;
   place-items: center;
   color: var(--silver);
`;
