import ContentInputs from "components/globalComponents/Forms/ContentInputs";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { schemaCreateUser } from "./controller/yup-resolver";
import { handleCreateUser } from "./controller/create-user-service";

type FormData = {
  user_name: string;
  password: string;
  telephone: string;
  age: string;
};

const FormValidateCreateUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schemaCreateUser) });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = handleSubmit(async (data) => {
    const { user_name, password, telephone, age } = data;
    await handleCreateUser({
      user_name,
      password,
      telephone,
      age,
    });
  });

  const { age, password, telephone, user_name } = errors;

  return (
    <S.Form onSubmit={onSubmit} ref={formRef}>
      <ContentInputs
        error={user_name}
        label="User Name"
        id="user_name"
        type="text"
        placeholder="Digite um nome de usuario"
        register={register}
      />

      <ContentInputs
        error={password}
        label="SENHA"
        id="password"
        type="text"
        placeholder="Digite uma senha"
        register={register}
      />

      <ContentInputs
        error={telephone}
        label="Telefone"
        id="telephone"
        type="number"
        placeholder="Ex: 11911111111"
        register={register}
      />
      <ContentInputs
        error={age}
        label="Idade"
        id="age"
        type="number"
        placeholder="Digite sua Idade"
        register={register}
      />

      <S.Button type="submit" value="Enviar" />
    </S.Form>
  );
};

export default FormValidateCreateUser;
