import { BrowserView, MobileView } from 'react-device-detect'
import { Container, ContainerBenefits, Title } from './brandBar-styles'
import BrandCard from './components/brandCard'

import Slider from 'react-slick'

import logoZara from '../../assets/logoZara.png'
import logoMelissa from '../../assets/logoMelissa.png'
import logoForever from '../../assets/logoForever.png'
import logoAnn from '../../assets/logoAnn.png'
import logoComma from '../../assets/logoComma.png'

const BrandBar: React.FC = () => {
  return (
    <Container>
      <Title>Marcas Parceiras</Title>
      <BrowserView>
        <ContainerBenefits>
          <BrandCard imageSrc={logoComma} />
          <BrandCard imageSrc={logoMelissa} />
          <BrandCard imageSrc={logoForever} />
          <BrandCard imageSrc={logoZara} />
          <BrandCard imageSrc={logoAnn} />
        </ContainerBenefits>
      </BrowserView>
      <MobileView>
        <Slider slidesToShow={1.05} infinite={false}>
          <BrandCard imageSrc={logoForever} />
          <BrandCard imageSrc={logoComma} />
          <BrandCard imageSrc={logoMelissa} />
          <BrandCard imageSrc={logoZara} />
          <BrandCard imageSrc={logoAnn} />
        </Slider>
      </MobileView>
    </Container>
  )
}

export default BrandBar
