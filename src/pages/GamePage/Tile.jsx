import styled from 'styled-components';

export const Tile = styled.button.attrs(({ mark }) => ({
   children: mark,
}))`
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
