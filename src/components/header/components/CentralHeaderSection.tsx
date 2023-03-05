import logoImage from '../../../assets/logo-maeztra-novo.png'
import iconBag from '../../../assets/icon-bag.png'
import iconHeart from '../../../assets/icon-heart.png'
import iconUser from '../../../assets/icon-user.png'

import Button from '../../UI/button'
import IconAndText from '../../UI/iconAndText'

import {
  Container,
  Logo,
  SearchBarContainer,
  SearchBarInput,
  RightSideContainer,
} from './centralHeaderSection-styles'

const CentralHeaderSection = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImage} alt=" Logo da Maeztra" />
      </Logo>
      <SearchBarContainer>
        <SearchBarInput type="text" placeholder="O que você busca?" />
        <Button
          type="button"
          text="Buscar"
          onClickFn={() => {
            return
          }}
          classes="button-primary"
        />
      </SearchBarContainer>
      <RightSideContainer>
        <IconAndText
          text="Minha Conta"
          onClickFn={() => {
            return
          }}
          imageSrc={iconUser}
        />
        <IconAndText
          text="Minha Conta"
          onClickFn={() => {
            return
          }}
          imageSrc={iconHeart}
        />
        <IconAndText
          text="Meu Carrinho"
          onClickFn={() => {
            return
          }}
          imageSrc={iconBag}
          classes="is-active"
        />
      </RightSideContainer>
    </Container>
  )
}

export default CentralHeaderSection
