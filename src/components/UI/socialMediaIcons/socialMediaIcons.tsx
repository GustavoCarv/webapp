import { Container } from './socialMediaIcons-styles'

type SocialMediaIconsProps = {
  link: string
  imageSrc: string
  imageAlt?: string
}

const SocialMediaIcons = ({
  link,
  imageSrc,
  imageAlt,
}: SocialMediaIconsProps) => {
  return (
    <Container href={link}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} />}
    </Container>
  )
}

export default SocialMediaIcons
