import * as S from "./styles";

type inputPros = {
  children: React.ReactNode;
  error: string | undefined;
};

const Input = ({ children, error }: inputPros) => (
  <S.ContentInputs>
    {children}
    {error && (
      <S.Alert role="alert">
        <S.Icon></S.Icon>
        <S.TextAlert>{error}</S.TextAlert>
      </S.Alert>
    )}
  </S.ContentInputs>
);

export default Input;
