import React from "react"
import Button from "./Button"

const Card = ({ pictureSrc, dotsSrc, minumumText, headingText }) => {
  return (
    <div className='card'>
      <div className='elementPadding'>
        <img className='card-picture' src={pictureSrc} />
      </div>
      <h3>{headingText}</h3>
      <p className='elementPadding'>{minumumText}</p>
      <img className='elementPadding dots' src={dotsSrc} />
      <div className='elementPadding'>
        <Button
          btnText='Add & Install Extension'
          btnClass='button blueButton'
        />
      </div>
    </div>
  )
}

export default Card
