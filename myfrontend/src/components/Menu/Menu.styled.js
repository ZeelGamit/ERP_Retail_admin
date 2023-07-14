import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  padding: 5rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  transition: transform 0.3 ease-in-out;
  box-shadow: 0 1rem 1rem rgb(0 0 0 / 50%) !important;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.2rem;
    text-transform: capetalized;
    padding: 1rem 0;
    font-weight: bold;
    font-family: "poppins";
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3 linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
    &:last-child {
      color: red;
    }
  }
`;
