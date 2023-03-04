import { Container } from './menuItem-styles'

type menuItemProps = {
  text: string
  imageAlt?: string
  imageSrc?: string
  classes?: string
}

const MenuItem = ({ text, imageSrc, imageAlt, classes }: menuItemProps) => {
  return (
    <Container className={classes}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} />}
      <p>{text} </p>
    </Container>
  )
}

export default MenuItem
