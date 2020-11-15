import React from "react"
import ChromeLogo from "../Images/logo-chrome.svg"
import FirefoxLogo from "../Images/logo-firefox.svg"
import OperaLogo from "../Images/logo-opera.svg"
import Dots from "../Images/bg-dots.svg"
import Button from "./Button"
import Card from "./Card"

const DownloadSection = () => {
  return (
    <div className='downloadSection pagePaddingtb'>
      <h2>Download the extension</h2>
      <p className='downloadDesc'>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className='cardsContainer'>
        <Card
          pictureSrc={ChromeLogo}
          minumumText='Minimum version 62'
          dotsSrc={Dots}
          headingText='Add to Chrome'
        />
        <Card
          pictureSrc={FirefoxLogo}
          minumumText='Minimum version 55'
          dotsSrc={Dots}
          headingText='Add to Firefox'
        />
        <Card
          pictureSrc={OperaLogo}
          minumumText='Minimum version 46'
          dotsSrc={Dots}
          headingText='Add to Opera'
        />
      </div>
    </div>
  )
}

export default DownloadSection
