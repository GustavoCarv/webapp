import { Container } from './brandCard-style'

type IconAndTextProps = {
  imageSrc: string
  imageAlt?: string
}

const BrandCard = ({ imageSrc, imageAlt }: IconAndTextProps) => {
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
    </Container>
  )
}

export default BrandCard
