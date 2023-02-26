import { useReducer, createContext } from 'react';

export const PlayerContext = createContext(null);

export const PlayerDispatchContext = createContext(null);

export const PlayerProvider = ({ children }) => {
   const [player, dispatch] = useReducer(playerReducer, {
      first: 'x',
      current: 'x',
   });

   return (
      <PlayerContext.Provider value={player}>
         <PlayerDispatchContext.Provider value={dispatch}>
            {children}
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
