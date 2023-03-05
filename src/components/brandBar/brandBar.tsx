import { Container, ContainerBenefits, Title } from './brandBar-styles'
import BrandCard from './components/brandCard'

import logoZara from '../../assets/logoZara.png'
import logoMelissa from '../../assets/logoMelissa.png'
import logoForever from '../../assets/logoForever.png'
import logoAnn from '../../assets/logoAnn.png'
import logoComma from '../../assets/logoComma.png'

const BrandBar: React.FC = () => {
  return (
    <Container>
      <Title>Marcas Parceiras</Title>
      <ContainerBenefits>
        <BrandCard imageSrc={logoComma} />
        <BrandCard imageSrc={logoMelissa} />
        <BrandCard imageSrc={logoForever} />
        <BrandCard imageSrc={logoZara} />
        <BrandCard imageSrc={logoAnn} />
      </ContainerBenefits>
    </Container>
  )
}

export default BrandBar
