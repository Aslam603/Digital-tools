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

function App() {
  // 1. All state must be inside the function
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0); // Kept from your original vite template

  return (
    <>
      {/* 2. Pass the cart length to NavBar */}
      <NavBar cartCount={cartItems.length} />
      
      <main>
        <Banner />
        <Stats />
        
        {/* 3. Pass both items and setter to Models */}
        <Models cartItems={cartItems} setCartItems={setCartItems} />
        
        <Steps />
        <PricingSection />
      </main>

      <Footer />
      <FooterSecondary />
    </>
  )
}

export default App