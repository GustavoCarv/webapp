import { Container, Content, Title, Text } from './benefitCard-style'

type IconAndTextProps = {
  title: string
  text: string
  imageSrc: string
  imageAlt?: string
}

const BenefitCard = ({ imageSrc, imageAlt, text, title }: IconAndTextProps) => {
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Container>
  )
}

export default BenefitCard
