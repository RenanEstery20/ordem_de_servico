import Modal from 'react-modal'
import { Container, Context } from './styles'
import closeImg from '../../assets/close.svg'
import { Input } from '../Form/Input'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewClientModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar novo cliente</h2>
        <Context>
          <Input field="Nome" placeholder="Apenas letras" />
          <Input field="Sobrenome" placeholder="Apenas letras" />
          <Input field="CPF" placeholder="Apenas letras" />
          <Input field="CNPJ" placeholder="Apenas letras" />
          <Input field="E-mail" placeholder="Apenas letras" />
          <Input field="Telefone(Fixo)" placeholder="Apenas letras" />
          <Input field="Telefone(Celular)" placeholder="Apenas letras" />
          <Input field="CEP" placeholder="Apenas letras" />
          <Input field="Estado" placeholder="Apenas letras" />
          <Input field="Cidade" placeholder="Apenas letras" />
          <Input field="Bairro" placeholder="Apenas letras" />
          <Input field="Rua" placeholder="Apenas letras" />
          <Input field="Nº" placeholder="Apenas letras" />
          <Input field="Complemento" placeholder="Apenas letras" />
        </Context>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
