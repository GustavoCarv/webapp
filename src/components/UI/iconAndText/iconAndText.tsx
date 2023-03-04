import { Container } from './iconAndText-styles';

type IconAndTextProps = {
  imageSrc: string
  imageAlt: string
  text: string,
  onClickFn: () => void,
}

const IconAndText = ({ imageSrc, imageAlt, text, onClickFn }: IconAndTextProps) => {
  return (
    <Container onClick={onClickFn}>
      <img src={imageSrc} alt={imageAlt} />
      <p> {text} </p>
    </Container>
  )
}

export default IconAndText
