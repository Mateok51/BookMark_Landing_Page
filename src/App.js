import React from "react"
import Mainbanner from "./components/Mainbanner"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import DownloadSection from "./components/DownloadSection"
import QuestionsSection from "./components/QuestionsSection"
import Footer from "./components/Footer"
import Prefooter from "./components/Prefooter"

const App = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <Mainbanner />
      <Features />
      <DownloadSection />
      <QuestionsSection />
      <Prefooter />
      <Footer />
    </div>
  )
}

export default App
