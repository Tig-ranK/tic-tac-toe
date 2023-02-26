import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import { GamePage } from '../pages/GamePage/GamePage';
import { HomePage } from '../pages/HomePage';
// Layout
import { MainLayout } from '../layouts/MainLayout';
import { PlayerContext, PlayerDispatchContext } from '../Context';

export const App = () => {
   const [player, dispatch] = useReducer(playerReducer, {
      first: 'x',
      current: 'x',
   });

   return (
      <PlayerContext.Provider value={player}>
         <PlayerDispatchContext.Provider value={dispatch}>
            <Routes>
               <Route element={<MainLayout />}>
                  <Route path="" element={<HomePage />} />
                  <Route path="vs-player" element={<GamePage />} />
                  <Route path="vs-bot" element={<GamePage />} />
               </Route>
            </Routes>
         </PlayerDispatchContext.Provider>
      </PlayerContext.Provider>
   );
};

const playerReducer = (state, action) => {
   switch (action.type) {
      case 'first:x':
         return { ...state, first: 'x' };
      case 'first:o':
         return { ...state, first: 'o' };
      case 'current:x':
         return { ...state, current: 'x' };
      case 'current:o':
         return { ...state, current: 'o' };
      default:
         return state;
   }
};
