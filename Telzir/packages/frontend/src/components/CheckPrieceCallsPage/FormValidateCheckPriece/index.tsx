import * as S from "./styles";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ContentInputs from "components/globalComponents/Forms/ContentInputs";
import { schemaCheckPriece } from "./controller/yup-resolver";
import { handleCheckPriece } from "./controller/check-priece-service";
import SelectOptions from "components/globalComponents/Forms/SelectOptions";
import { optionsDDDs, optionsPlains } from "./utils/optionSelectMock";

type FormData = {
  origin: string;
  destiny: string;
  time: string;
  plain: string;
};

const FormValidateCheckPriece = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schemaCheckPriece) });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = handleSubmit(async (data) => {
    const { origin, destiny, time, plain } = data;
    await handleCheckPriece({
      origin,
      destiny,
      time,
      plain,
    });
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
            id="destiny"
            register={register}
            options={optionsPlains}
          />
        </S.ContentSelect>
      </S.ContentBlock>
      <S.ContentBlock>
        <ContentInputs
          error={errors.time}
          label="TEMPO DE CHAMADA"
          id="destiny"
          type="text"
          placeholder="Tempo de chamada"
          register={register}
        />
      </S.ContentBlock>

      <S.Button type="submit" value="Calcular" />
    </S.Form>
  );
};

export default FormValidateCheckPriece;
