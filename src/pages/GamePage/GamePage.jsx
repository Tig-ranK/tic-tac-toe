import styled from 'styled-components';
import { useState } from 'react';
// Components
import { Button } from '../../common/Button';
import { Tile } from './Tile';
// SVG
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconRestart } from '../../assets/icon-restart.svg';
import { ReactComponent as SmallX } from '../../assets/icon-x-tiny.svg';
import { ReactComponent as SmallO } from '../../assets/icon-o-tiny.svg';
import { ReactComponent as BigX } from '../../assets/icon-x.svg';
import { ReactComponent as BigO } from '../../assets/icon-o.svg';

const currentPlayer = {
   mark: 'x',
   win: 32,
};

export const GamePage = () => {
   const [currentPlayer, setCurrentPlayer] = useState('x');
   const [tiles, setTiles] = useState([
      { id: 0, mark: '' },
      { id: 1, mark: '' },
      { id: 2, mark: 'x' },
      { id: 3, mark: '' },
      { id: 4, mark: '' },
      { id: 5, mark: 'x' },
      { id: 6, mark: '' },
      { id: 7, mark: '' },
      { id: 8, mark: '' },
   ]);

   const mapTile = (mark) => {
      switch (mark) {
         case 'x':
            return <BigX />;
         case 'o':
            return <BigO />;
         default:
            return null;
      }
   };

   const handlePlaceMark = (id) => {
      if (tiles[id].mark) return;

      setTiles((prev) => {
         const mark = currentPlayer;
         setCurrentPlayer(mark === 'x' ? 'o' : 'x');
         return prev.map((t) => (t.id === id ? { ...t, mark: mark } : t));
      });
   };

   return (
      <Wrapper>
         <LogoWrapper>
            <Logo />
         </LogoWrapper>
         <Turn>
            {currentPlayer === 'x' ? <SmallX /> : <SmallO />}
            <span>TURN</span>
         </Turn>
         <ButtonRestart type="secondary" color="silver">
            <IconRestart />
         </ButtonRestart>
         {tiles.map((t) => (
            <Tile
               key={t.id}
               mark={mapTile(t.mark)}
               onClick={() => handlePlaceMark(t.id)}
            />
         ))}
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
