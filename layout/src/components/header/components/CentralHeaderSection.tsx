import { isBrowser } from 'react-device-detect'

import logoImage from '../../../assets/logo-maeztra-novo.png'
import iconBag from '../../../assets/icon-bag.png'
import iconMinicart from '../../../assets/icon-minicart.png'
import iconHeart from '../../../assets/icon-heart.png'
import iconUser from '../../../assets/icon-user.png'
import iconMenu from '../../../assets/icon-menu.png'
import iconSearch from '../../../assets/icon-search.png'

import Button from '../../UI/button'
import IconAndText from '../../UI/iconAndText'

import {
  Container,
  Logo,
  SearchBarContainer,
  SearchBarInput,
  RightSideContainer,
  ContainerRightMobile,
  ContainerLeftMobile,
} from './centralHeaderSection-styles'

const CentralHeaderSection = () => {
  return (
    <Container>
      {isBrowser ? (
        <>
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
        </>
      ) : (
        <>
          <ContainerLeftMobile>
            <img src={iconMenu} alt="Ícone do Menu" />
            <img
              src={logoImage}
              alt=" Logo da Maeztra"
              width={110}
              height={12}
            />
          </ContainerLeftMobile>
          <ContainerRightMobile>
            <img src={iconSearch} alt="Ícone do Menu" />
            <img src={iconMinicart} alt="Ícone do Menu" />
          </ContainerRightMobile>
        </>
      )}
    </Container>
  )
}

export default CentralHeaderSection
