import BoxResult from "components/CheckPrieceCallsPage/BoxResult";
import Logo from "components/globalComponents/Logo";
import ModalCals from "components/globalComponents/ModalCals";
import { useEffect, useState } from "react";
import ContentsBoxsResults from "../ContentsBoxsResults";
import { mockDataBox } from "../ContentsBoxsResults/utils/mock-data-boxs";
import FormValidateCheckPriece from "../FormValidateCheckPriece";
import {
  boxData,
  populateBox,
  returnDataProps,
} from "./controller/populate-data-box";
import * as S from "./styles";

const MainCheckPrieceCalls = () => {
  const [modalResultCalc, setModalResultCalc] = useState(false);
  const [arrayCalc, setArrayCal] = useState<boxData[]>([] as boxData[]);

  const callbackResultForm = (resultData: returnDataProps) => {
    const arrayResult = populateBox(resultData);
    setArrayCal(arrayResult);
  };

  const closeModal = () => {
    setArrayCal([] as boxData[]);
    setModalResultCalc(false);
  };
  useEffect(() => {
    arrayCalc && arrayCalc.length > 0 && setModalResultCalc(true);
  }, [arrayCalc]);

  return (
    <S.Container>
      <Logo />
      <S.TextHistoryChecks>Ver históricos de cálculos</S.TextHistoryChecks>
      <S.ContentForm>
        <S.Text>Calcular Preço da chamada</S.Text>

        <FormValidateCheckPriece callbackData={callbackResultForm} />
      </S.ContentForm>

      {modalResultCalc && (
        <ModalCals closeModal={closeModal}>
          {" "}
          <ContentsBoxsResults arrayResult={mockDataBox} />{" "}
        </ModalCals>
      )}
    </S.Container>
  );
};

export default MainCheckPrieceCalls;
