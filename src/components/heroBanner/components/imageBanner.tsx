import { Container, Content } from './imageBanner-styles'
import Button from '../../UI/button'

type ImageBannerProps = {
  title: string
  text: string
  buttonCTAtext: string
  isFirst: boolean
  imageSrc: string
  imageAlt?: string
}

const ImageBanner = ({
  title,
  text,
  buttonCTAtext,
  isFirst,
  imageSrc,
  imageAlt,
}: ImageBannerProps) => {
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
      <Content>
        {isFirst ? <h1> {title} </h1> : <h2> {title} </h2>}
        <p>{text}</p>
        <Button
          text={buttonCTAtext}
          type="button"
          onClickFn={() => {
            return
          }}
          classes='button-CTA'
        />
      </Content>
    </Container>
  )
}

export default ImageBanner
