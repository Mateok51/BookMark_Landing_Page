import React from "react"

// emailButton.addEventListener("click", checkMail())

const Button = ({ btnText, btnClass, btnFunction, buttonRef }) => {
  return (
    <button onClick={btnFunction} ref={buttonRef} className={btnClass}>
      {btnText}
    </button>
  )
}

export default Button
