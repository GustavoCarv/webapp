import ReactModal from 'react-modal'
import './modalNewsletter-styles.css'
import {
  CloseButton,
  ContainerImage,
  Content,
  Title,
  Text,
} from './modalNewsletter-styles'

import backgroundImage from '../../assets/bg-newsletter.png'
import iconEmail from '../../assets/icon-mail.png'
import iconSend from '../../assets/icon-send.png'
import { useState } from 'react'

const ModalNewsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    document?.querySelector('body')?.classList.remove('ReactModal__Body--open')
  }

  const styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      placeContent: 'center',
    },
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      style={styles}
      className="modal-newsletter"
    >
      <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
      <ContainerImage>
        <img src={backgroundImage} alt="Background da Newsletter" />
      </ContainerImage>
      <Content>
        <img src={iconEmail} alt="Ícone de email" width={28} height={29} />
        <Title>Bem vindo à Maeztra</Title>
        <Text>
          Receba em Primeira mão <span> desconto e ofertas exclusivas </span>
        </Text>
        <input type="email" placeholder="Digite seu e-mail" />
        <button type="button">
          Enviar
          <img src={iconSend} />
        </button>
      </Content>
    </ReactModal>
  )
}

export default ModalNewsletter
