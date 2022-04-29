import * as Yup from "yup";

const schemaCheckPriece = Yup.object({
  origin: Yup.string().required("Por favor digite DDD de origem"),
  destiny: Yup.string().required("Por favor digite DDD de destino"),
  time: Yup.string().required("Por favor digite a duração da chamada"),
  plain: Yup.string().required("Por favor digite o plano"),
}).required();

export { schemaCheckPriece };
