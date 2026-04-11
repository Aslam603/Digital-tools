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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<NavBar></NavBar>

<Banner></Banner>

<Stats></Stats>

<Steps></Steps>

<Footer></Footer>

<FooterSecondary></FooterSecondary>

    </>
  )
}

export default App
