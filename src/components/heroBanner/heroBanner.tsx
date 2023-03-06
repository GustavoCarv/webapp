import { Container } from './heroBanner-styles'

import Flickity from 'react-flickity-component'
import bannerImage_1 from '../../assets/imageBannerDesktop.png'
import bannerImageMobile from '../../assets/imageBannerMobile.png'

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
          imageSrcMobile={bannerImageMobile}
        />
        <ImageBanner
          title="Promoções de Inverno"
          text="Confiras os melhores looks para combinar com você nesse Outono"
          buttonCTAtext='Conferir'  
          isFirst={false}
          imageSrc={bannerImage_1}
          imageSrcMobile={bannerImageMobile}
        />
      </Flickity>
    </Container>
  )
}

export default HeroBanner
