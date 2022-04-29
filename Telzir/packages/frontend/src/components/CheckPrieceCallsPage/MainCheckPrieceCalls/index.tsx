import BoxResult from "components/CheckPrieceCallsPage/BoxResult";
import Logo from "components/globalComponents/Logo";
import ContentsBoxsResults from "../ContentsBoxsResults";
import { mockDataBox } from "../ContentsBoxsResults/utils/mock-data-boxs";
import FormValidateCheckPriece from "../FormValidateCheckPriece";
import * as S from "./styles";

const MainCheckPrieceCalls = () => (
  <S.Container>
    <Logo />
    <ContentsBoxsResults arrayResult={mockDataBox} />
    <S.TextHistoryChecks>Ver históricos de cálculos</S.TextHistoryChecks>
    <S.ContentForm>
      <S.Text>Calcular Preço da chamada</S.Text>

      <FormValidateCheckPriece />
    </S.ContentForm>
  </S.Container>
);

export default MainCheckPrieceCalls;
