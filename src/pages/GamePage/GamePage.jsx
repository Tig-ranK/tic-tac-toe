import styled from 'styled-components';
import { useContext, useState } from 'react';
// Components
import { Button } from '../../common/Button';
import { Tile } from './Tile';
// SVG
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconRestart } from '../../assets/icon-restart.svg';
import { ReactComponent as SmallX } from '../../assets/icon-x-tiny.svg';
import { ReactComponent as SmallO } from '../../assets/icon-o-tiny.svg';
// Helpers
import { checkForWin } from '../../helpers/checkForWin';
import { mapTile } from '../../helpers/mapTile';
// Context
import { PlayerContext, PlayerDispatchContext } from '../../context/PlayerContext';

const initialTiles = [
   { id: 0, mark: null },
   { id: 1, mark: null },
   { id: 2, mark: null },
   { id: 3, mark: null },
   { id: 4, mark: null },
   { id: 5, mark: null },
   { id: 6, mark: null },
   { id: 7, mark: null },
   { id: 8, mark: null },
];

export const GamePage = () => {
   const { current, first } = useContext(PlayerContext);
   const dispatch = useContext(PlayerDispatchContext);

   const [tiles, setTiles] = useState(initialTiles);
   const [isWin, setWin] = useState(false);

   const handlePlaceMark = (id) => {
      if (tiles[id].mark) return;

      setTiles((prev) => {
         const newTiles = prev.map((t) =>
            t.id === id ? { ...t, mark: current } : t
         );

         if (checkForWin(newTiles)) {
            setWin(true);
            alert(`Congrats ${current.toUpperCase()}. GG! WP!`);
         }

         return newTiles;
      });

      dispatch({ type: `current:${current === 'x' ? 'o' : 'x'}` });
   };

   const handleRestart = () => {
      dispatch({ type: `current:${first}` });
      setTiles(initialTiles);
      setWin(false);
   };

   const Tiles = () => (
      <>
         {tiles.map((t) => (
            <Tile
               disabled={isWin}
               key={t.id}
               mark={mapTile(t.mark)}
               onClick={() => {
                  handlePlaceMark(t.id);
               }}
            />
         ))}
      </>
   );

   return (
      <Wrapper>
         <LogoWrapper>
            <Logo />
         </LogoWrapper>
         <Turn>
            {current === 'x' ? <SmallX /> : <SmallO />}
            <span>TURN</span>
         </Turn>
         <ButtonRestart type="secondary" color="silver" onClick={handleRestart}>
            <IconRestart />
         </ButtonRestart>
         <Tiles />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: grid;
   grid-template: min-content repeat(3, 1fr) / repeat(3, 1fr);
   gap: 2rem;
`;

const LogoWrapper = styled.div`
   display: flex;
   align-items: center;
`;

const Turn = styled.div`
   height: 5rem;
   padding-inline: 32px;

   color: var(--silver);
   background-color: var(--semi-dark-navy);
   box-shadow: 0px 4px 0px var(--shadow-dark);

   border-radius: 10px;

   font-family: inherit;
   font-size: 16px;
   font-weight: 700;
   line-height: 20px;
   letter-spacing: 1px;
   text-transform: uppercase;

   touch-action: manipulation;
   user-select: none;

   display: flex;
   gap: 1rem;
   align-items: center;
`;

const ButtonRestart = styled(Button)`
   aspect-ratio: 1;
   will-change: transform, background-color;
   width: unset;
   align-self: end;
   justify-self: end;
`;
