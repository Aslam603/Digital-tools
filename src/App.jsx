import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner'
import Stats from './components/stats'
import Footer from './components/footer'
import FooterSecondary from './components/footersecondary'
import Steps from './components/steps'
import PricingSection from './components/PricingSection'
import Models from './components/models'
import { ToastContainer } from 'react-toastify'

function App() {
  // 1. All state must be inside the function
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0); 

  return (
    <>
      <NavBar cartCount={cartItems.length} />
      
      <main>
        <Banner />
        <Stats />
        
        <Models cartItems={cartItems} setCartItems={setCartItems} />
        <ToastContainer></ToastContainer>
        <Steps />
        <PricingSection />
      </main>

      <Footer />
      <FooterSecondary />
    </>
  )
}

export default App