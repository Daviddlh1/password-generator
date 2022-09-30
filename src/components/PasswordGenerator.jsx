import Slider from "./Slider";
import Icon from "./Icon";
import copyIcon from "./icons/copy.png";
import rightArrow from "./icons/right-arrow.png";
import activeRightArrow from "./icons/active-right-arrow.png";
import "./styles/PasswordGenerator.css";
import { useRef, useState } from "react";

// const initialParameters = {
//   lenght: 10,
//   uppercase: false,
//   lowercase: false,
//   numbers: false,
//   symbols: false,
// };

const PasswordGenerator = () => {
  const [arrowIcon, setArrowIcon] = useState(rightArrow);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(10);
  const [uppercaseParameter, setUppercaseParameter] = useState(false);
  const [lowercaseParameter, setlowercaseParameter] = useState(false);
  const [numbersParameter, setNumbersParameters] = useState(false);
  const [symbolsParameter, setSymbolsParameter] = useState(false);
  const [result, setResult] = useState("");
  const sliderRef = useRef();
  //const [passwordParameters, setPasswordParameters] = useState(initialParameters);

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=";

  const handdleMouseEnter = () => {
    setArrowIcon(activeRightArrow);
  };

  const getLength = () => {};
  const handleMouseLeave = () => {
    setArrowIcon(rightArrow);
  };

  const charactersLength = async (length) => {
    console.log(length);
    await setPasswordLength(length);
    console.log("passwordLength", passwordLength);
  };

  const generatePassword = () => {
    let charactersPool = "";
    let response = "";
    if (lowercaseParameter) {
      charactersPool += lowercase;
    }
    if (uppercaseParameter) {
      charactersPool += uppercase;
    }
    if (numbersParameter) {
      charactersPool += numbers;
    }
    if (symbolsParameter) {
      charactersPool += symbols;
    }
    console.log("passwordLength", passwordLength);
    for (let i = 0; i <= passwordLength; i++) {
      response +=
        charactersPool[Math.floor(Math.random() * (25 - 10 + 1) + 10)];
    }
    console.log(response);
    return response;
  };

  return (
    <div className="password-generator__main-container">
      <h1>Password generator</h1>
      <div className="password-generator__containers password-generator__first-container">
        <input className="password-generator__output" disabled type="text" />
        <img src={copyIcon} className="password-generator__output--icon" />
      </div>
      <div className="password-generator__containers password-generator__second-container">
        <Slider
          minValue={10}
          maxValue={25}
          step={1}
          charactersLength={charactersLength}
          sliderRef={sliderRef}
        />
        <div>
          <div className="password-generator__option-container">
            <input
              type="checkbox"
              onClick={() => setUppercaseParameter(!uppercaseParameter)}
              name="upercaseParameter"
              id="upercaseParameter"
            />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <input
              type="checkbox"
              onClick={() => setlowercaseParameter(!lowercaseParameter)}
              name="lowercase"
              id="lowercase"
            />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <input
              type="checkbox"
              onClick={() => setNumbersParameters(!numbersParameter)}
              name="numbers"
              id="number"
            />
            <p>Include Numbers</p>
          </div>
          <div className="password-generator__option-container">
            <input
              onClick={() => setSymbolsParameter(!symbolsParameter)}
              type="checkbox"
              name="symbols"
              id="symbols"
            />
            <p>Include Symbols</p>
          </div>
        </div>
        <button
          onClick={() => setResult(generatePassword())}
          onMouseEnter={() => handdleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className="password-generator__button"
        >
          Generate <Icon icon={arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
