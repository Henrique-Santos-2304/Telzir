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

export const Text = styled.h1`
  ${({ theme }) => css`
    margin-bottom: 3rem;
    color: ${theme.colors.lightColor};
  `}
`;
export const TextHistoryChecks = styled.button`
  ${({ theme }) => css`
    margin-top: 2rem;
    color: ${theme.colors.lightColor};
    background: rgba(0, 0, 0, 0.2);

    padding: 0.6rem 1.2rem;
    border-radius: 0.5rem;
    font-size: ${theme.font.sizes.medium};
    transition: all 0.3s linear;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  `}
`;

export const CreateUser = styled(Link)``;
