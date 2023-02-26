import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const MainLayout = styled.div.attrs({
   children: <Outlet />,
})`
   min-height: 100vh;
   height: 100%;
   background-color: var(--dark-navy);
   color: var(--silver);
   display: grid;
   place-items: center;
`;
