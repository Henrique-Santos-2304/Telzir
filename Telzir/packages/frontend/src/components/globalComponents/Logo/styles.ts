import styled, { css } from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => css`
    width: max-content;

    padding: 0.4rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-top: 1.5rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.6rem;
  `}
`;
export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Icon = styled(BsFillTelephoneFill)`
  margin-left: 1.4rem;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.colors.lightColor};
`;
