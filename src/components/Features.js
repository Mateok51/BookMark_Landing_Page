import React, { useState } from "react"
import Button from "./Button"
import FeaturesPic1 from "../Images/illustration-features-tab-1.svg"
import FeaturesPic2 from "../Images/illustration-features-tab-2.svg"
import FeaturesPic3 from "../Images/illustration-features-tab-3.svg"

const featureContent = [
  {
    heading: "Bookmark in one click",
    text:
      "Organize your bookmarks however you like. Our simple drag-and-dropinterface gives you complete control over how you manage your favourite sites.",
    picture: FeaturesPic1,
  },
  {
    heading: "Intelligent search",
    text:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl throught all of your bookmarks",
    picture: FeaturesPic2,
  },
  {
    heading: "Share your bookmarks",
    text:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    picture: FeaturesPic3,
  },
]

const Features = () => {
  const [tabNumber, setTabNumber] = useState(0)
  const changeTab = (Event) => {
    setTabNumber(Event.currentTarget.id)
    let activeLink = document.getElementById([Event.currentTarget.id])
    let simpleBookmarking = document.getElementById(0)
    let speedySearch = document.getElementById(1)
    let easySharing = document.getElementById(2)
    if (Event.currentTarget.id == 0) {
      activeLink.classList.add("activeTab")
      speedySearch.classList.remove("activeTab")
      easySharing.classList.remove("activeTab")
    } else if (Event.currentTarget.id == 1) {
      activeLink.classList.add("activeTab")
      simpleBookmarking.classList.remove("activeTab")
      easySharing.classList.remove("activeTab")
    } else if (Event.currentTarget.id == 2) {
      activeLink.classList.add("activeTab")
      simpleBookmarking.classList.remove("activeTab")
      speedySearch.classList.remove("activeTab")
    }
  }
  return (
    <div className='featuresSection pagePaddingtb'>
      <h2>Features</h2>
      <p className='featuresDesc'>
        Our aim is to make it quick and easy for you to access your favoruite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul className='featuresLinkContainer'>
        <li id='0' onClick={changeTab} className='featureLinkTab activeTab'>
          <a>Simple Bookmarking</a>
        </li>
        <li id='1' onClick={changeTab} className='featureLinkTab'>
          <a>Speedy Searching</a>
        </li>
        <li id='2' onClick={changeTab} className='featureLinkTab'>
          <a>Easy Sharing</a>
        </li>
      </ul>
      <div className='featureTabContainer'>
        <div className='featureTabContent pagePadding'>
          <div className='featurePicContainer'>
            <img
              className='featurePicture'
              src={featureContent[tabNumber].picture}
            />
          </div>
          <div className='featuresInfo'>
            <h2>{featureContent[tabNumber].heading}</h2>
            <p className='elementPadding'>{featureContent[tabNumber].text}</p>
            <div className='buttonContainer elementPadding featuresBtn'>
              <Button btnText='More info' btnClass='blueButton button' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
