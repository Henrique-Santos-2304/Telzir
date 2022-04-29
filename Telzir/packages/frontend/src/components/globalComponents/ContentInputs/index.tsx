/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";
import Input from "../Input";
import * as S from "./styles";

type contentInputProps = {
  error: FieldError | undefined;
  label: string;
  colorLabel?: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
};

const ContentInputs = ({
  error,
  label,
  colorLabel,
  id,
  type,
  placeholder,
  register,
}: contentInputProps) => (
  <Input error={error && error.message}>
    <S.ContentIconInput>
      <S.Label colorLabel={colorLabel}>{label}</S.Label>
      <S.Inputs
        id={id}
        type={type}
        placeholder={placeholder.toUpperCase()}
        {...register(id)}
      />
    </S.ContentIconInput>
  </Input>
);

export default ContentInputs;
