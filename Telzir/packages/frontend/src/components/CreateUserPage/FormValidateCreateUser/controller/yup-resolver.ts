import * as Yup from "yup";

const schemaCreateUser = Yup.object({
  user_name: Yup.string()
    .required("Por favor digite um nome de usuário")
    .min(3, "O nome deve ter mais de 3 letras"),
  password: Yup.string()
    .required("Por favor digite uma senha")
    .min(3, "A senha deve ter pelo menos 3 caracteres"),
  telephone: Yup.string()
    .required("Por favor digite seu telefone celular com DDD")
    .min(
      10,
      "Numero de telefone deve conter minimo de 10 números, 2 DDD, 8 ou 9 digitos do celular"
    ),
  age: Yup.string().required("Por favor digite sua idade"),
}).required();

export { schemaCreateUser };
