import { Container } from './footer-styles';

import BottomBar from './components/bottomBar';
import InstitucionalMenu from './components/institucionalMenu';

const Footer: React.FC = () => {
  return <Container >
    <InstitucionalMenu />
    <BottomBar />
  </Container>;
}

export default Footer;