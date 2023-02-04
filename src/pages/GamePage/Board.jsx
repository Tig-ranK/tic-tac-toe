import styled from 'styled-components';
// SVG
import { ReactComponent as BigX } from '../../assets/icon-x.svg';
import { ReactComponent as BigO } from '../../assets/icon-o.svg';

// TODO delete this component, use grid in GamePage
export const Board = () => {
   return (
      <Wrapper>
         <Tile>
            <BigX />
         </Tile>
         <Tile>
            <BigO />
         </Tile>
         <Tile>
            <BigX />
         </Tile>
         <Tile>
            <BigO />
         </Tile>
         <Tile>
            <BigX />
         </Tile>
         <Tile>
            <BigO />
         </Tile>
         <Tile>
            <BigX />
         </Tile>
         <Tile>
            <BigO />
         </Tile>
         <Tile>
            <BigO />
         </Tile>
      </Wrapper>
   );
};

export const Wrapper = styled.div`
   display: grid;
   grid-template: repeat(3, 1fr) / repeat(3, 1fr);
   gap: 2rem; 
`;

const Tile = styled.button`
   aspect-ratio: 1;

   color: var(--silver);
   background-color: var(--semi-dark-navy);
   box-shadow: inset 0px -8px 0px var(--shadow-dark);

   outline-offset: 5px;

   border: none;
   border-radius: 15px;

   touch-action: manipulation;

   display: grid;
   place-items: center;
   padding-bottom: 4px;
`;
