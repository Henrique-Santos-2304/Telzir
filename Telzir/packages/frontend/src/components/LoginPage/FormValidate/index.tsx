import ContentInputs from "components/globalComponents/Forms/ContentInputs";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import { schemaLogin } from "./controller/yup-resolver";
import { handleLogin } from "./controller/login-user-service";
import { useRouter } from "next/router";

type FormData = {
  user_name: string;
  password: string;
};

const FormValidateLogin = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schemaLogin) });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = handleSubmit(async (data) => {
    const { user_name, password } = data;
    await handleLogin({ user_name, password });
    router.push("/check-priece-calls");
  });

  const { user_name, password } = errors;
  return (
    <S.Form onSubmit={onSubmit} ref={formRef}>
      <ContentInputs
        error={user_name}
        label="User_Name"
        id="user_name"
        type="text"
        placeholder="Nome de Usuario"
        register={register}
      />

      <ContentInputs
        error={password}
        label="Password"
        id="password"
        type="text"
        placeholder="Senha"
        register={register}
      />

      <S.Button type="submit" value="Enviar" />
    </S.Form>
  );
};

export default FormValidateLogin;
