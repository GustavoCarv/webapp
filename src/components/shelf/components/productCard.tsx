import Button from '../../UI/button'
import {
  Container,
  ContainerColors,
  Description,
  Name,
  Price,
  ColorOption,
  ContainerButton
} from './productCard-styles'

type ProductCardProps = {
  imageSrc: string
  imageAlt?: string
  name: string
  description: string
  price: string
  colors: string[]
  onClickFn: () => void
  buttonCTA: string
}

const ProductCard = ({
  imageSrc,
  imageAlt,
  name,
  description,
  price,
  colors,
  buttonCTA,
  onClickFn,
}: ProductCardProps) => {
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
      <ContainerColors>
        {colors.map((color, index) => {
          return (
            <ColorOption
              style={{
                background: color,
                borderColor: index == 0 ? '#353535' : '',
              }}
            ></ColorOption>
          )
        })}
      </ContainerColors>
      <Price>{price}</Price>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <ContainerButton>
        <Button
          type="button"
          onClickFn={onClickFn}
          text={buttonCTA}
          classes="button-buy"
        />
      </ContainerButton>
    </Container>
  )
}

export default ProductCard
