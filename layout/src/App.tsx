import './App.css'
import 'flickity/css/flickity.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import BenefitsBar from './components/benefitsBar'
import BrandBar from './components/brandBar'
import Footer from './components/footer'
import Header from './components/header'
import HeroBanner from './components/heroBanner'
import InfoCard from './components/infoCard'
import Newsletter from './components/newsletter'
import ModalNewsletter from './components/modalNewsletter';
import Shelf from './components/shelf';

function App() {

  return (
    <div className="App">
      <ModalNewsletter /> 
      <Header />
      <HeroBanner />
      <BenefitsBar />
      <BrandBar />
      <Shelf />
      <InfoCard />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
