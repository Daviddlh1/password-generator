import Slider from "./Slider";
import Icon from "./Icon"
import copyIcon from "./icons/copy.png"
import rightArrow from "./icons/right-arrow.png"
import activeRightArrow from "./icons/active-right-arrow.png"
import "./styles/PasswordGenerator.css"
import { useState } from "react";

const PasswordGenerator = () => {
  const [arrowIcon, setArrowIcon] = useState(rightArrow)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handdleMouseEnter = () => {
    setArrowIcon(activeRightArrow)
  }

  const handleMouseLeave = () => {
    setArrowIcon(rightArrow)
  }


  return (
      <div className="password-generator__main-container">
        <h1>Password generator</h1>
        <div className="password-generator__containers password-generator__first-container">
          <input className="password-generator__output" disabled type="text" />
          <img src={copyIcon} className="password-generator__output--icon"/>
        </div>
        <div className="password-generator__containers password-generator__second-container">
          <Slider minValue={10} maxValue={25} step={1}/>
          <div>
          <div className="password-generator__option-container">
            <input type="checkbox" name="" id="" />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <input type="checkbox" name="" id="" />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <input type="checkbox" name="" id="" />
            <p>Include Numbers</p>
          </div>
          <div className="password-generator__option-container">
            <input type="checkbox" name="" id="" />
            <p>Include Symbols</p>
          </div>
          </div>
          <button onMouseEnter={() => handdleMouseEnter()} onMouseLeave={()=> handleMouseLeave()} className="password-generator__button" >Generate <Icon icon={arrowIcon}/></button>
        </div>
      </div>
  );
};

export default PasswordGenerator;
