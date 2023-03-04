import logoImage from '../../../assets/logo-maeztra-novo.png'
import Button from '../../UI/button'
import {
  Container,
  Logo,
  SearchBarContainer,
  RightSideContainer
} from './centralHeaderSection-styles'

const CentralHeaderSection = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImage} alt=" Logo da Maeztra" />
      </Logo>
      <SearchBarContainer>
        <input type="text" /> 
        <Button
          type="submit"
          text="Buscar"
          onClickFn={() => {
            return
          }}
          classes="button-primary"
        />
      </SearchBarContainer>
      <RightSideContainer>

      </RightSideContainer>
    </Container>
  )
}

export default CentralHeaderSection
