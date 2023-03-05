import './App.css'
import BenefitsBar from './components/benefitsBar'
import BrandBar from './components/brandBar'
import Header from './components/header'
import HeroBanner from './components/heroBanner'
import InfoCard from './components/infoCard'

function App() {

  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <BenefitsBar />
      <BrandBar />
      <InfoCard />
    </div>
  )
}

export default App
