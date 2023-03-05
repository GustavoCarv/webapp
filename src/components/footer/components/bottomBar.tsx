import iconFacebook from '../../../assets/icon-facebook.png'
import iconInstagram from '../../../assets/icon-instagram.png'
import iconLinkedin from '../../../assets/icon-linkedin.png'
import iconYoutube from '../../../assets/icon-youtube.png'
import paymentMethods from '../../../assets/paymentMethods.png'
import logoMaeztra from '../../../assets/logoMaeztraFooter.png'
import logoVtex from '../../../assets/logoVtex.png'

import SocialMediaIcons from '../../UI/socialMediaIcons/socialMediaIcons'

import {
  Container,
  ContainerSocialMedia,
  ContainerCompanies,
  ContentCompany
} from './bottomBar-style'

const BottomBar = () => {
  return (
    <Container>
      <ContainerSocialMedia>
        <SocialMediaIcons link="#" imageSrc={iconFacebook} />
        <SocialMediaIcons link="#" imageSrc={iconLinkedin} />
        <SocialMediaIcons link="#" imageSrc={iconInstagram} />
        <SocialMediaIcons link="#" imageSrc={iconYoutube} />
      </ContainerSocialMedia>
      <img src={paymentMethods} alt="Métodos de pagamento" />
      <ContainerCompanies>
        <ContentCompany>
          <span> Powered by</span>
          <img src={logoVtex} />
        </ContentCompany>
        <ContentCompany>
          <span> Developed by</span>
          <img src={logoMaeztra} />
        </ContentCompany>
      </ContainerCompanies>
    </Container>
  )
}

export default BottomBar
