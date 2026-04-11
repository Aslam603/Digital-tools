import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner'
import Stats from './components/stats'
import Footer from './components/footer'
import FooterSecondary from './components/footersecondary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<NavBar></NavBar>

<Banner></Banner>

<Stats></Stats>

<Footer></Footer>

<FooterSecondary></FooterSecondary>

    </>
  )
}

export default App
