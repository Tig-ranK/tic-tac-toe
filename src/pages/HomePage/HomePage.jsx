import { useContext } from 'react';
import styled from 'styled-components';
// Components
import { Button } from '../../common/Button';
import { ToggleBtn } from './ToggleBtn';
// SVG
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconX } from '../../assets/icon-x-small.svg';
import { ReactComponent as IconO } from '../../assets/icon-o-small.svg';
// Context
import {
   PlayerContext,
   PlayerDispatchContext,
} from '../../context/PlayerContext';

export const HomePage = () => {
   const { p1 } = useContext(PlayerContext);
   const dispatch = useContext(PlayerDispatchContext);

   const pickX = () => dispatch({ type: 'p1:x' });
   const pickO = () => dispatch({ type: 'p1:o' });

   return (
      <Wrapper>
         <Logo />
         <PickPlayer>
            <Title>PICK PLAYER 1'S MARK</Title>
            <Toggle>
               <ToggleBtn
                  icon={<IconX />}
                  onClick={pickX}
                  active={p1 === 'x'}
               />
               <ToggleBtn
                  icon={<IconO />}
                  onClick={pickO}
                  active={p1 === 'o'}
               />
            </Toggle>
            <Subtitle>REMEMBER : X GOES FIRST</Subtitle>
         </PickPlayer>
         <Button to="/vs-player" type="primary" color="blue">
            NEW GAME (VS PLAYER)
         </Button>
         {/* TODO add VS BOT Mode to the game 
         <Button to="/vs-bot" type="primary" color="yellow" disabled={true}>
            NEW GAME (VS BOT)
         </Button>
         */}
      </Wrapper>
   );
};

const Wrapper = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   max-width: 46rem;
   text-align: center;
`;

const PickPlayer = styled.div`
   background: var(--semi-dark-navy);
   box-shadow: inset 0px -8px 0px var(--shadow-dark);
   border-radius: 1.5rem;

   padding: 2.4rem;

   display: flex;
   flex-direction: column;
   gap: 1.8rem;
`;

const Title = styled.h3`
   font-weight: 700;
   font-size: 1.6rem;
   line-height: 2rem;
   letter-spacing: 1px;
   text-transform: uppercase;
   color: var(--silver);
`;

const Subtitle = styled.p`
   font-weight: 500;
   font-size: 1.4rem;
   line-height: 1.8rem;
   letter-spacing: 0.875px;
   text-transform: uppercase;
   color: var(--silver);
   opacity: 0.5;
`;

const Toggle = styled.div`
   padding: 0.8rem;
   display: flex;
   background: var(--dark-navy);
   border-radius: 1rem;
`;
