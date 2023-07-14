import styled from 'styled-components';

export const StyledLogo = styled.div`
    font-family: "poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.primaryDark};
    text-shadow: 1px 2px 2px rgba(24, 32, 48, 0.22);
`;

export const StyledNav = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 2;`;
