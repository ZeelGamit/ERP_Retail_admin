import styled from 'styled-components';

export const StyledBurger = styled.button`
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  padding-right: 3rem;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 1.7rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(53deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translate(0)')}
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-53deg)' : 'rotate(0)')};
    }
  }
`;
