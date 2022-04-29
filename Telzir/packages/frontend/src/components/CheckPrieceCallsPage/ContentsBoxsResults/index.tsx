import BoxResult from "../BoxResult";
import * as S from "./styles";
type dataResultsCals = {
  txtKey: string;
  txtValue: string;
};

type arrayResultProps = { arrayResult: dataResultsCals[] };
const ContentsBoxsResults = ({ arrayResult }: arrayResultProps) => {
  const arrayIsNotEmpty = arrayResult && arrayResult.length > 0;
  return (
    <S.Container>
      {arrayIsNotEmpty &&
        arrayResult.map((result) => (
          <BoxResult txtKey={result.txtKey} txtValue={result.txtValue} />
        ))}
    </S.Container>
  );
};

export default ContentsBoxsResults;
