import styled, { css } from 'styled-components';

export const ToggleBtn = styled.button.attrs(({ icon }) => ({
   children: icon,
}))`
   background-color: var(--dark-navy);
   border-radius: 10px;
   border: none;

   display: grid;
   place-items: center;
   padding: 0.5em 6em;

   transition: all 0.2s ease-in-out;

   > svg {
      fill: var(--silver);
      scale: 1;
      transition: all 0.2s ease-in-out;
   }

   &:active {
      > svg {
         scale: 0.8;
      }
   }

   ${(props) =>
      props.active
         ? css`
              background-color: var(--silver);

              > svg {
                 fill: var(--dark-navy);
              }
           `
         : css`
              &:hover {
                 background-color: var(--silver-dark);
              }
           `}
`;
