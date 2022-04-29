import Logo from "components/globalComponents/Logo";
import FormValidateLogin from "../FormValidate";
import * as S from "./styles";

const MainLogin = () => (
  <S.Container>
    <Logo />

    <S.ContentForm>
      <FormValidateLogin />
      <S.CreateUser href="/create-user" passHref>
        <S.AnchorLink>Cadastrar Novo Usuario</S.AnchorLink>
      </S.CreateUser>
    </S.ContentForm>
  </S.Container>
);

export default MainLogin;
