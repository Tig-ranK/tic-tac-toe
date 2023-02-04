import styled from 'styled-components';
import { HomePage } from '../pages/HomePage';

export const App = () => {
   return (
      <Wrapper>
         <HomePage />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   min-height: 100vh;
   height: 100%;
   background-color: var(--dark-navy);
   display: grid;
   place-items: center;
   color: var(--silver);
`;

