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

   ${(props) =>
      props.type === 'primary' &&
      css`
         border-radius: 15px;

         font-size: 20px;
         line-height: 25px;
         letter-spacing: 1.25px;
      `}

   ${(props) =>
      props.type === 'secondary' &&
      css`
         border-radius: 10px;

         font-size: 16px;
         line-height: 20px;
         letter-spacing: 1px;
      `}
   ${(props) =>
      props.color === 'yellow' &&
      css`
         background-color: var(--light-yellow);
         box-shadow: 0px 8px 0px var(--shadow-yellow);
         &:hover {
            background-color: var(--light-yellow-hover);
         }
         &:active {
            transform: translateY(8px);
            box-shadow: 0px 0px 0px var(--shadow-yellow);
         }
      `}
   ${(props) =>
      props.color === 'blue' &&
      css`
         background-color: var(--light-blue);
         box-shadow: 0px 8px 0px var(--shadow-blue);
         &:hover {
            background-color: var(--light-blue-hover);
         }
         &:active {
            transform: translateY(8px);
            box-shadow: 0px 0px 0px var(--shadow-blue);
         }
      `}
   ${(props) =>
      props.color === 'silver' &&
      css`
         background-color: var(--silver);
         box-shadow: 0px 8px 0px var(--shadow-silver);
         &:hover {
            background-color: var(--silver-hover);
         }
      `}
`;
