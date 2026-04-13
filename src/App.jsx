import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner'
import Stats from './components/stats'
import Footer from './components/footer'
import FooterSecondary from './components/footersecondary'
import Steps from './components/steps'
import PricingCard from './components/PricingCard'
import PricingSection from './components/PricingSection'
import Models from './components/models'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<NavBar></NavBar>

<main>

<Banner></Banner>

<Stats></Stats>
 
 <Models></Models>

<Steps></Steps>

<PricingSection></PricingSection>
</main>

<Footer></Footer>

<FooterSecondary></FooterSecondary>

    </>
  )
}

export default App
