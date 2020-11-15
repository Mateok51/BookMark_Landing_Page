import React, { useRef, useState } from "react"
import Button from "./Button"

const Prefooter = () => {
  const [inputValue, setInputValue] = useState("")
  const [warningMessage, setWarningMessage] = useState("")

  const buttonRef = useRef()
  const searchRef = useRef()

  const checkMail = () => {
    let value = searchRef.current.value
    let warningMsg = document.getElementById("warningMsg")
    let searchInput = document.getElementById("emailInput")
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      warningMsg.classList.add("warningMsgNull")
      searchInput.classList.remove("placeholder-red")
    } else {
      warningMsg.classList.remove("warningMsgNull")
      setInputValue("example@email/com")
      searchInput.classList.add("placeholder-red")
      setWarningMessage("Whoops, make sure it's an email")
    }
  }
  const handleEmailOnChange = (Event) => {
    setInputValue(Event.target.value)
  }

  return (
    <div className='preeFooterContainer'>
      <div className='preFooterContent'>
        <p>35,000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div className='elementPadding searchContainer'>
          <div className='inputContainer'>
            <input
              id='emailInput'
              ref={searchRef}
              placeholder='Enter your email address'
              required
              class='inputMail'
              value={inputValue}
              onChange={handleEmailOnChange}></input>
            <div id='warningContainer'>
              <p class='warningMsgNull' id='warningMsg'>
                {warningMessage}
              </p>
            </div>
          </div>
          <div className='contactBtnCon'>
            <Button
              btnText='Contact us'
              type='email'
              btnClass='button redButton redWhiteBtn contactBtn'
              btnFunction={checkMail}
              buttonRef={buttonRef}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prefooter
