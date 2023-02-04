import styled, { css } from 'styled-components';

export const Button = styled.button`
   width: 100%; 
   height: 6rem;

   color: var(--dark-navy);

   border: none;
   text-transform: uppercase;

   display: grid;
   place-items: center;

   font-family: inherit;
   font-weight: 700;

   ${(props) =>
      props.type === 'primary' &&
      css`
         border-radius: 15px;

         font-size: 20px;
         line-height: 25px;
         letter-spacing: 1.25px;

         padding-bottom: 4px; // center w/o inner shadow
      `}

   ${(props) =>
      props.type === 'secondary' &&
      css`
         border-radius: 10px;

         font-size: 16px;
         line-height: 20px;
         letter-spacing: 1px;

         padding-bottom: 2px; // center w/o inner shadow
      `}
   ${(props) =>
      props.color === 'yellow' &&
      css`
         background-color: var(--light-yellow);
         box-shadow: inset 0px -8px 0px var(--shadow-yellow);
         &:hover {
            background-color: var(--light-yellow-hover);
         }
      `}
   ${(props) =>
      props.color === 'blue' &&
      css`
         background-color: var(--light-blue);
         box-shadow: inset 0px -8px 0px var(--shadow-blue);
         &:hover {
            background-color: var(--light-blue-hover);
         }
      `}
   ${(props) =>
      props.color === 'silver' &&
      css`
         background-color: var(--silver);
         box-shadow: inset 0px -8px 0px var(--shadow-silver);
         &:hover {
            background-color: var(--silver-hover);
         }
      `}
`;
