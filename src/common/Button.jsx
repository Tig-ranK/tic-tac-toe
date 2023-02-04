import styled, { css } from 'styled-components';

export const Button = styled.button`
   --easing: cubic-bezier(0.18, 0.89, 0.32, 1.28);
   width: 100%;
   height: 5rem;

   color: var(--dark-navy);
   outline-offset: 5px;

   border: none;
   text-transform: uppercase;

   display: grid;
   place-items: center;

   font-family: inherit;
   font-weight: 700;

   touch-action: manipulation;

   transition: all 0.5s var(--easing);

   background-color: var(--bg-color);

   &:hover {
      background-color: var(--hover-color);
   }

   ${(props) =>
      props.type === 'primary' &&
      css`
         border-radius: 15px;

         font-size: 20px;
         line-height: 25px;
         letter-spacing: 1.25px;

         box-shadow: 0px 8px 0px var(--shadow-color);

         &:active {
            transform: translateY(8px);
            box-shadow: 0px 0px 0px var(--shadow-color);
         }
      `}
   ${(props) =>
      props.type === 'secondary' &&
      css`
         border-radius: 10px;

         font-size: 16px;
         line-height: 20px;
         letter-spacing: 1px;

         box-shadow: 0px 4px 0px var(--shadow-color);

         &:active {
            transform: translateY(4px);
            box-shadow: 0px 0px 0px var(--shadow-color);
         }
      `}
   ${(props) =>
      props.color === 'yellow' &&
      css`
         --bg-color: var(--light-yellow);
         --shadow-color: var(--shadow-yellow);
         --hover-color: var(--light-yellow-hover);
      `}
   ${(props) =>
      props.color === 'blue' &&
      css`
         --bg-color: var(--light-blue);
         --shadow-color: var(--shadow-blue);
         --hover-color: var(--light-blue-hover);
      `}
   ${(props) =>
      props.color === 'silver' &&
      css`
         --bg-color: var(--silver);
         --shadow-color: var(--shadow-silver);
         --hover-color: var(--silver-hover);
      `}
`;
