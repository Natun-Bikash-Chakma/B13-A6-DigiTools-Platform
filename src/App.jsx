import './App.css'
import React, { useState } from "react";
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import StatsSection from './components/StatsSection/StatsSection'
import ProductSection from './components/ProductSection/ProductSection'
import GetStarted from './components/GetStarted/GetStarted'
import Pricing from './components/Pricing/Pricing'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <ToastContainer ></ToastContainer>
        <DaisyNav
          cartCount={cart.length}
          setActiveTab={setActiveTab}
        />
        <NavBar></NavBar>
        <StatsSection></StatsSection>
        <ProductSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          setCart={setCart}
        />
        <GetStarted></GetStarted>
        <Pricing></Pricing>
        <CTASection></CTASection>
        <Footer></Footer>
      </header>
      <main>
      </main>
    </>
  )
}
export default App
