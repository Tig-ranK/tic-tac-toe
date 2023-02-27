import styled, { css } from 'styled-components';

const Name = styled.span`
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;
   letter-spacing: 0.875px;
   text-align: center;
`;

const Count = styled.span`
   font-weight: 700;
   font-size: 24px;
   line-height: 30px;
   letter-spacing: 1.5px;
   text-align: center;
`;

export const Score = styled.div.attrs(({ name, count }) => ({
   children: (
      <>
         <Name>{name}</Name>
         <Count>{count}</Count>
      </>
   ),
}))`
   display: grid;
   place-content: center;

   border-radius: 15px;
   border: none;
   outline-offset: 5px;

   background-color: var(--bg-color);
   color: var(--dark-navy);

   font-family: inherit;
   font-size: inherit;
   font-weight: 700;
   text-transform: uppercase;
   text-decoration: none;

   ${(props) =>
      props.color === 'yellow' &&
      css`
         --bg-color: var(--light-yellow);
      `}
   ${(props) =>
      props.color === 'blue' &&
      css`
         --bg-color: var(--light-blue);
      `}
   ${(props) =>
      props.color === 'silver' &&
      css`
         --bg-color: var(--silver);
      `}
`;
