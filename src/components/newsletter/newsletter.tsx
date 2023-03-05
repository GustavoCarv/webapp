import Button from '../UI/button'
import { Container, Title, InputContainer, Input } from './newsletter-styles'

const Newsletter = () => {
  return (
    <Container>
      <Title>Recebe Nossa Newsletter</Title>
      <InputContainer>
        <Input type="text" placeholder="Digite seu e-mail" />
        <Button
          type="submit"
          text="Buscar"
          onClickFn={() => {
            return
          }}
          classes="button-newsletter"
        />
      </InputContainer>
    </Container>
  )
}

export default Newsletter
