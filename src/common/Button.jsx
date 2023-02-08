import styled, { css, keyframes } from 'styled-components';

const pressIn = keyframes`
   0% {
      transform: translateY(0px);
   } 
   50% {
      transform: translateY(var(--shadow-size));
   }
   100% {
      transform: translateY(0px);
   }   
`;

const ButtonInner = styled.button`
   position: absolute;
   height: 100%;
   width: 100%;
   bottom: calc(var(--shadow-size));
   left: 0;

   border-radius: inherit;
   border: none;
   background-color: var(--bg-color);
   color: var(--dark-navy);

   font-family: inherit;
   font-size: inherit;
   line-height: inherit;
   letter-spacing: inherit;
   font-weight: 700;
   text-transform: uppercase;

   will-change: transform;

   &:hover {
      background-color: var(--hover-color);
   }

   &:focus {
      animation: 1s ${pressIn} var(--easing);
   }
`;

export const Button = styled.div.attrs((props) => ({
   children: <ButtonInner {...props}>{props.children}</ButtonInner>,
}))`
   --easing: cubic-bezier(0.18, 0.89, 0.32, 1.28);
   width: 100%;
   height: 5rem;

   background-color: var(--shadow-color);
   outline-offset: 5px;

   position: relative;

   touch-action: manipulation;

   transform: translateY(var(--shadow-size)); // to align based on ButtonInner

   ${(props) =>
      props.type === 'primary' &&
      css`
         --shadow-size: 8px;

         border-radius: 15px;

         font-size: 20px;
         line-height: 25px;
         letter-spacing: 1.25px;
      `}
   ${(props) =>
      props.type === 'secondary' &&
      css`
         --shadow-size: 4px;

         border-radius: 10px;

         font-size: 16px;
         line-height: 20px;
         letter-spacing: 1px;
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
