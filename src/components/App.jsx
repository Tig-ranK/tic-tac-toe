import { Route, Routes } from 'react-router-dom';
// Pages
import { GamePage } from '../pages/GamePage/GamePage';
import { HomePage } from '../pages/HomePage';
// Layout
import { MainLayout } from '../layouts/MainLayout';
// Context
import { PlayerProvider } from '../context/PlayerContext';

export const App = () => {
   return (
      <PlayerProvider>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path="" element={<HomePage />} />
               <Route path="vs-player" element={<GamePage />} />
               <Route path="vs-bot" element={<GamePage />} />
            </Route>
         </Routes>
      </PlayerProvider>
   );
};
