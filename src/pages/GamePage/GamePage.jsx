import styled from 'styled-components';
import { useState } from 'react';
// Components
import { Button } from '../../common/Button';
import { Board } from './Board';
// SVG
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconRestart } from '../../assets/icon-restart.svg';
import { ReactComponent as SmallX } from '../../assets/icon-x-tiny.svg';
import { ReactComponent as SmallO } from '../../assets/icon-o-tiny.svg';

export const GamePage = () => {
   const [currentPlayer, setCurrentPlayer] = useState('X');

   return (
      <Wrapper>
         <Header>
            <LogoWrapper>
               <Logo />
            </LogoWrapper>
            <Turn>
               {currentPlayer === 'X' ? <SmallX /> : <SmallO />}
               <span>TURN</span>
            </Turn>
            <ButtonRestart type="secondary" color="silver">
               <IconRestart />
            </ButtonRestart>
         </Header>
            <Board />
      </Wrapper>
   );
};

// TODO use big grid on whole component 

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   gap: 3rem;
`;

const Header = styled.div`
   display: flex;
   gap: 5rem;
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
`;
