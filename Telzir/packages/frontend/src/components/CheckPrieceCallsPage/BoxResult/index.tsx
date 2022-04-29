import * as S from "./styles";

type boxDataProps = {
  txtKey: string;
  txtValue: string;
};
const BoxResult = ({ txtKey, txtValue }: boxDataProps) => {
  return (
    <S.Container>
      <S.Text>{txtKey}</S.Text>
      <S.Divider />
      <S.Value>{txtValue}</S.Value>
    </S.Container>
  );
};

export default BoxResult;
