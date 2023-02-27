import { useReducer, createContext } from 'react';

export const PlayerContext = createContext(null);

export const PlayerDispatchContext = createContext(null);

export const PlayerProvider = ({ children }) => {
   const [player, dispatch] = useReducer(playerReducer, {
      p1: 'x',
      first: 'x',
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
      case 'p1:x':
         return { ...state, p1: 'x' };
      case 'p1:o':
         return { ...state, p1: 'o' };
      case 'first:toggle':
         return { ...state, next: state.first === 'x' ? 'o' : 'x' };
      default:
         return state;
   }
};
