import * as Yup from "yup";

const schemaLogin = Yup.object({
  user_name: Yup.string()
    .required("Por favor digite um nome de usuário")
    .min(3, "O nome deve ter mais de 3 letras"),
  password: Yup.string()
    .required("Por favor digite uma senha")
    .min(3, "A senha deve ter pelo menos 3 caracteres"),
}).required();

export { schemaLogin };
