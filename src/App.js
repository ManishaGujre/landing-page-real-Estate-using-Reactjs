import React from 'react'
// import Featured from './Components/featured/Featured'
import Best from './Components/best/Best'
import Hero from './Components/hero/Hero'
import Navbar from './Components/navbar/Navbar'
import Featured from './featured/Featured'
// import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      {/* <Footer /> */}
    </>
  );
}

export default App;