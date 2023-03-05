import { Container } from './heroBanner-styles'
import 'flickity/css/flickity.css'

import Flickity from 'react-flickity-component'
import bannerImage_1 from '../../assets/imageBannerDesktop.png'

import ImageBanner from './components/imageBanner'

const HeroBanner = () => {
  return (
    <Container>
      <Flickity>
        <ImageBanner
          title="Promoções de Outono"
          text="Confiras os melhores looks para combinar com você nesse Outono"
          buttonCTAtext='Conferir'  
          isFirst
          imageSrc={bannerImage_1}
        />
        <ImageBanner
          title="Promoções de Inverno"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          buttonCTAtext='Conferir'  
          isFirst={false}
          imageSrc={bannerImage_1}
        />
      </Flickity>
    </Container>
  )
}

export default HeroBanner
