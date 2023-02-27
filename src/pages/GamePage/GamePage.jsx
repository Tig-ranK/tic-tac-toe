import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
// Components
import { Score } from '../../components/Score';
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
import { PlayerContext } from '../../context/PlayerContext';

const initialTiles = [...Array(9)].map((t, id) => ({ id, mark: null }));

export const GamePage = () => {
   // TODO add new game on pressing 'r/R' key
   const { first } = useContext(PlayerContext);

   const [tiles, setTiles] = useState(initialTiles);
   const [isWin, setWin] = useState(false);
   const [scores, setScores] = useState({ x: 0, tie: 0, o: 0 });
   const [current, setCurrent] = useState(first);

   useEffect(() => {
      const cb = (e) => (e.key === 'r' || e.key === 'R') && handleRestart();

      window.addEventListener('keydown', cb);

      return () => {
         window.removeEventListener('onkeydown', cb);
      };
   }, []);

   const handlePlaceMark = (id) => {
      // TODO refactor me into custom hook
      if (tiles[id].mark) return;

      const newTiles = tiles.map((t) =>
         t.id === id ? { ...t, mark: current } : t
      );

      if (checkForWin(newTiles)) {
         setScores((s) => ({ ...s, [current]: s[current] + 1 }));
         setWin(true);
         alert(`Congrats ${current.toUpperCase()}. GG! WP!`);
      } else if (newTiles.every((t) => t.mark)) {
         setScores((s) => ({ ...s, tie: s.tie + 1 }));
         setWin(true);
         alert(`It's a tie, try again.`);
      }

      setTiles(newTiles);
      setCurrent((cur) => (cur === 'x' ? 'o' : 'x'));
   };

   const handleRestart = () => {
      setCurrent(first);
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
         {/* FIXME hardcoded names */}
         <Score color="blue" name="X (P1)" count={scores.x} />
         <Score color="silver" name="TIES" count={scores.tie} />
         <Score color="yellow" name="O (P2)" count={scores.o} />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: grid;
   grid-template: min-content repeat(3, 1fr) 0.5fr / repeat(3, 1fr);
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
