import { Container } from './iconAndText-styles'

type IconAndTextProps = {
  imageSrc: string
  imageAlt?: string
  text: string
  onClickFn: () => void
  classes?: string
}

const IconAndText = ({
  imageSrc,
  imageAlt,
  text,
  onClickFn,
  classes,
}: IconAndTextProps) => {
  return (
    <Container onClick={onClickFn} className={classes}>
      <img src={imageSrc} alt={imageAlt} />
      <p> {text} </p>
    </Container>
  )
}

export default IconAndText
