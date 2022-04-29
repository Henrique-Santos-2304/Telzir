import * as S from "./styles";

type modalDataProps = {
  children: React.ReactNode;
  closeModal: () => void;
};
const ModalCals = ({ children, closeModal }: modalDataProps) => (
  <S.Container>
    <S.ContentCloseModal onClick={closeModal}>
      <S.IconClose />
    </S.ContentCloseModal>
    {children}
  </S.Container>
);

export default ModalCals;
