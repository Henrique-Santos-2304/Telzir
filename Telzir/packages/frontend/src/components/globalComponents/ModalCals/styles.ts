import styled, { css } from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
  `}
`;

export const ContentCloseModal = styled.div`
  position: absolute;
  top: 4rem;
  right: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconClose = styled(AiFillCloseCircle)`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 3.4rem;
    transition: all 0.3s linear;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      font-size: 4.5rem;
    }
  `};
`;
