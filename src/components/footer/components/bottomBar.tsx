import iconFacebook from '../../../assets/icon-facebook.png'
import iconInstagram from '../../../assets/icon-instagram.png'
import iconLinkedin from '../../../assets/icon-linkedin.png'
import iconYoutube from '../../../assets/icon-youtube.png'
import paymentMethods from '../../../assets/paymentMethods.png'

import SocialMediaIcons from '../../UI/socialMediaIcons/socialMediaIcons'

import { Container } from './bottomBar-style'

const BottomBar = () => {
  return (
    <Container>
      <div>
        <SocialMediaIcons link="#" imageSrc={iconFacebook} />
        <SocialMediaIcons link="#" imageSrc={iconLinkedin} />
        <SocialMediaIcons link="#" imageSrc={iconInstagram} />
        <SocialMediaIcons link="#" imageSrc={iconYoutube} />
      </div>
      <img src={paymentMethods} alt="Métodos de pagamento" />
    </Container>
  )
}

export default BottomBar
