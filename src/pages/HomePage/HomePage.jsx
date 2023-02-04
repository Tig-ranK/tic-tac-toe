import styled from 'styled-components';
import { useState } from 'react';
// Components
import { Button } from '../../common/Button';
import { ToggleBtn } from './ToggleBtn';
// SVG
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconX } from '../../assets/icon-x-small.svg';
import { ReactComponent as IconO } from '../../assets/icon-o-small.svg';

export const HomePage = () => {
   const [activeMark, setActiveMark] = useState('X');

   const pickX = () => setActiveMark('X');
   const pickO = () => setActiveMark('O');

   return (
      <Wrapper>
         <Logo />
         <PickPlayer>
            <Title>PICK PLAYER 1’S MARK</Title>
            <Toggle>
               <ToggleBtn
                  icon={<IconX />}
                  onClick={pickX}
                  active={activeMark === 'X'}
               />
               <ToggleBtn
                  icon={<IconO />}
                  onClick={pickO}
                  active={activeMark === 'O'}
               />
            </Toggle>
            <Subtitle>REMEMBER : X GOES FIRST</Subtitle>
         </PickPlayer>
      </Wrapper>
   );
};

const Wrapper = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   max-width: 46rem;
`;

const PickPlayer = styled.div`
   background: var(--semi-dark-navy);
   box-shadow: inset 0px -8px 0px var(--shadow-dark);
   border-radius: 1.5rem;

   padding: 2.4rem;
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
   color: var(--silver);
`;

const Toggle = styled.div`
   padding: 0.8rem;
   display: flex;
   background: var(--dark-navy);
   border-radius: 1rem;
`;

// const NewGameCpu = styled(Button);

// const NewGamePlayer = styled(Button);
