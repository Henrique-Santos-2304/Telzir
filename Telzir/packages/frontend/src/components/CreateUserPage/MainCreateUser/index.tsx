import Logo from "components/globalComponents/Logo";
import FormValidateCreateUser from "../FormValidateCreateUser";
import * as S from "./styles";

const MainCreateUser = () => (
  <S.Container>
    <Logo />

    <S.ContentForm>
      <FormValidateCreateUser />
      <S.CreateUser href="/" passHref>
        <S.AnchorLink>Fazer Login</S.AnchorLink>
      </S.CreateUser>
    </S.ContentForm>
  </S.Container>
);

export { MainCreateUser };
