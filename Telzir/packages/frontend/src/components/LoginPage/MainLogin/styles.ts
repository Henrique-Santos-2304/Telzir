import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentForm = styled(Container)`
  width: 60rem;
`;

export const AnchorLink = styled.a`
  ${({ theme }) => css`
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.colors.secondaryLight};
    font-size: ${theme.font.sizes.medium};
    transition: 0.3s all linear;

    &:hover {
      opacity: 0.6;
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const CreateUser = styled(Link)``;
