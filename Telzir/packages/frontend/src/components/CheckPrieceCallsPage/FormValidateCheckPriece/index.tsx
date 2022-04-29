import * as S from "./styles";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ContentInputs from "components/globalComponents/Forms/ContentInputs";
import { schemaCheckPriece } from "./controller/yup-resolver";
import {
  formCalcs,
  handleCheckPriece,
} from "./controller/check-priece-service";
import SelectOptions from "components/globalComponents/Forms/SelectOptions";
import { optionsDDDs, optionsPlains } from "./utils/optionSelectMock";
import { returnDataProps } from "../MainCheckPrieceCalls/controller/populate-data-box";

type formProps = {
  callbackData: (resultData: returnDataProps) => void;
};
const FormValidateCheckPriece = ({ callbackData }: formProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formCalcs>({ resolver: yupResolver(schemaCheckPriece) });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = handleSubmit(async (data) => {
    const { origin, destiny, time, plain } = data;

    const resultData = await handleCheckPriece({
      origin,
      destiny,
      time,
      plain,
    });

    resultData && callbackData(resultData);
  });

  return (
    <S.Form onSubmit={onSubmit} ref={formRef}>
      <S.ContentBlock>
        <SelectOptions
          label="DDD de origem"
          id="origin"
          register={register}
          options={optionsDDDs}
        />

        <S.ContentSelect>
          <SelectOptions
            label="DDD de destino"
            id="destiny"
            register={register}
            options={optionsDDDs}
          />
        </S.ContentSelect>

        <S.ContentSelect>
          <SelectOptions
            label="Plano"
            id="plain"
            register={register}
            options={optionsPlains}
          />
        </S.ContentSelect>
      </S.ContentBlock>
      <S.ContentBlock>
        <ContentInputs
          error={errors.time}
          label="TEMPO DE CHAMADA"
          id="time"
          type="number"
          placeholder="Tempo de chamada"
          register={register}
        />
      </S.ContentBlock>

      <S.Button type="submit" value="Calcular" />
    </S.Form>
  );
};

export default FormValidateCheckPriece;
