import styled, { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    width: 14rem;
    padding: 0.6rem 1.2rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.8rem;
    margin-top: 5rem;
    margin-left: 0.3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
export const Divider = styled.div`
  width: 100%;
  height: 1.2px;
  background: ${({ theme }) => theme.colors.secondary};
`;
export const Text = styled.p`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Value = styled.p`
  align-self: flex-start;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.lightColor};
`;
