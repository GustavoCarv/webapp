import banner from '../../assets/infoCardBanner.png'
import bannerMobile from '../../assets/infocardBannerMobile.png'

import {
  Container,
  Content,
  Title,
  Text,
  ImageContainer,
} from './infoCard-styles'

const InfoCard = () => {
  return (
    <Container>
      <Content>
        <Title>Lorem Ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </Text>
      </Content>
      <ImageContainer>
        <picture>
          <source media="(max-width: 650px)" srcSet={bannerMobile} />
          <img src={banner} alt="Banner" />
        </picture>
      
      </ImageContainer>
    </Container>
  )
}

export default InfoCard
