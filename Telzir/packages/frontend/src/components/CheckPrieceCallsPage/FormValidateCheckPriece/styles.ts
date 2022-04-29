import styled, { css } from "styled-components";
import { BiUser, BiLock } from "react-icons/bi";

export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentSelect = styled.div`
  margin-left: 1.5rem;
`;

export const Inputs = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    font-size: 1.4rem;
    background: ${theme.colors.lightColor};
    border-radius: 0.7rem;
    text-align: start;
    color: ${theme.colors.primary};
    transition: all 0.3s linear;
    ::placeholder {
      color: rgba(155, 155, 155, 0.95);
    }
    @media (min-width: ${theme.media.xmedium}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Button = styled.input`
  ${({ theme }) => css`
    width: 30%;

    margin-bottom: 0.3rem;
    margin-top: 0.5rem;
    padding: 0.7rem ${theme.spacings.xsmall};
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    font-weight: 700;
    border-radius: 1rem;
    transition: all 0.2s linear;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      font-size: 1.8rem;
    }
  `}
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 2rem;
`;
export const ContentIconInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconUser = styled(BiUser)`
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
`;
export const IconPassword = styled(BiLock)`
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
`;
