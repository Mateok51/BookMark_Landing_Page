import React, { useState } from "react"
import Button from "../components/Button"
import Arrow from "../Images/icon-arrow.svg"

const questionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae suscipit ex, rhoncus pharetra purus. Suspendisse feugiat justo a metus placerat tristique. Curabitur rutrum ultrices est ut placerat. Aenean nec ante porttitor, aliquam lorem sed, faucibus arcu. Ut eget lorem scelerisque, facilisis nulla eget, convallis purus. Duis mauris ipsum, scelerisque at sem at, facilisis sodales neque. Phasellus posuere diam sem, sed ornare nibh volutpat quis. Aliquam vulputate tempus tellus at molestie. Mauris dignissim dui ac massa porttitor, quis euismod ex auctor."

const QuestionsSection = () => {
  const [frequentMore, setFrequentMore] = useState({
    text1: null,
    text2: null,
    text3: null,
    text4: null,
  })

  const handleFrequent = (Event) => {
    const question = Event.currentTarget.id
    if (frequentMore[question] !== null) {
      setFrequentMore({ ...frequentMore, [Event.currentTarget.id]: null })
    } else {
      setFrequentMore({
        ...frequentMore,
        [Event.currentTarget.id]: questionText,
      })
    }
  }
  return (
    <div className='questionSection pagePaddingtb'>
      <h2>Frequently asked Questions</h2>
      <p className='questionDesc'>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <ul class='frequentLinkContainer'>
        <li id='text1' onClick={handleFrequent}>
          <div className='frequntlyLink'>
            <p>What is Bookmark?</p>
            <span>
              <img src={Arrow} />
            </span>
          </div>
          <div>
            <p class='frequentMore'>{frequentMore.text1}</p>
          </div>
        </li>
        <li id='text2' onClick={handleFrequent}>
          <div className='frequntlyLink'>
            <p>How can I request a new browser?</p>
            <span>
              <img src={Arrow} />
            </span>
          </div>
          <div class='frequentMore'>
            <p>{frequentMore.text2}</p>
          </div>
        </li>
        <li id='text3' onClick={handleFrequent}>
          <div className='frequntlyLink'>
            <p>Is there a mobile app?</p>
            <span>
              <img src={Arrow} />
            </span>
          </div>
          <div class='frequentMore'>
            <p>{frequentMore.text3}</p>
          </div>
        </li>
        <li id='text4' onClick={handleFrequent}>
          <div className='frequntlyLink'>
            <p>What about other Chromium browsers?</p>
            <span>
              <img src={Arrow} />
            </span>
          </div>
          <div class='frequentMore'>
            <p>{frequentMore.text4}</p>
          </div>
        </li>
      </ul>
      <div className='questionsBtn'>
        <Button btnText='More info' btnClass='button blueButton' />
      </div>
    </div>
  )
}

export default QuestionsSection
