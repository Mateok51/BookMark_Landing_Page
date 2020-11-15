import React from "react"
import Button from "./Button"
import BannerPicture from "../Images/illustration-hero.svg"

const Mainbanner = () => {
  return (
    <div className='mainBanner pagePadding displayHalf'>
      <div className='halfPage mainBannerContent'>
        <h1 class='mainHeading elementPadding'>A Simple Bookmark Manager</h1>
        <p className='elementPadding mainBannerText'>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Tri it for free.
        </p>
        <div className='buttonContainer elementPadding'>
          <Button
            btnText='Get it on Chrome'
            btnClass='button blueButton firstButton'
          />
          <Button btnText='Get it on Firefox' btnClass='button greyButton' />
        </div>
      </div>
      <div className='halfPage pictureContainerAlign mainBannerPic'>
        <img src={BannerPicture} />
      </div>
    </div>
  )
}

export default Mainbanner
