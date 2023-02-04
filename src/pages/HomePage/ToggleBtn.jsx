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
   > svg {
      fill: var(--silver);
   }

   ${(props) =>
      props.active &&
      css`
         background-color: var(--silver);

         > svg {
            fill: var(--dark-navy);
         }
      `}
`;
