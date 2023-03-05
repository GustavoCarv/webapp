import { BrowserView, MobileView } from 'react-device-detect'
import { Container, ContainerBenefits, Title } from './benefitsBar-styles'
import BenefitCard from './components/benefitCard'

import Slider from 'react-slick'

import iconFreight from '../../assets/icon-freight.png'
import iconHome from '../../assets/icon-home.png'
import iconWorld from '../../assets/icon-world.png'
import iconChange from '../../assets/icon-change.png'
import iconDiscount from '../../assets/icon-discount.png'

const BenefitsBar: React.FC = () => {
  return (
    <Container>
      <Title> Por que comprar na Maeztra?</Title>
      <BrowserView>
        {' '}
        <ContainerBenefits>
          <BenefitCard
            imageSrc={iconWorld}
            title="Produtos importados"
            text="Produto de Alta Qualidade"
          />
          <BenefitCard
            imageSrc={iconHome}
            title="Estoque no Brazil"
            text="Produtos mais perto de você!"
          />
          <BenefitCard
            imageSrc={iconChange}
            title="Trocas Garantidas"
            text="Trocas em até 48 horas, vejas as regras"
          />
          <BenefitCard
            imageSrc={iconDiscount}
            title="Ganhe 5% off"
            text="Pagando à vista no Cartão"
          />
          <BenefitCard
            imageSrc={iconFreight}
            title="Frete Grátis"
            text="Em compras acima de R$ 499,00"
          />
        </ContainerBenefits>
      </BrowserView>
      <MobileView>
        <Slider slidesToShow={1.05} infinite={false}>
          {' '}
          <BenefitCard
            imageSrc={iconWorld}
            title="Produtos importados"
            text="Produto de Alta Qualidade"
          />
          <BenefitCard
            imageSrc={iconHome}
            title="Estoque no Brazil"
            text="Produtos mais perto de você!"
          />
          <BenefitCard
            imageSrc={iconChange}
            title="Trocas Garantidas"
            text="Trocas em até 48 horas, vejas as regras"
          />
          <BenefitCard
            imageSrc={iconDiscount}
            title="Ganhe 5% off"
            text="Pagando à vista no Cartão"
          />
          <BenefitCard
            imageSrc={iconFreight}
            title="Frete Grátis"
            text="Em compras acima de R$ 499,00"
          />
        </Slider>
      </MobileView>
    </Container>
  )
}

export default BenefitsBar
