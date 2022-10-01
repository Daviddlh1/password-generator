import Slider from "./Slider";
import Icon from "./Icon";
import copyIcon from "./icons/copy.svg";
import rightArrow from "./icons/right-arrow.png";
import activeRightArrow from "./icons/active-right-arrow.png";
import PasswordStrength from "./PasswordStrength";
import "./styles/PasswordGenerator.css";
import { useRef, useState } from "react";

const PasswordGenerator = () => {
  const [arrowIcon, setArrowIcon] = useState(rightArrow);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [uppercaseParameter, setUppercaseParameter] = useState(false);
  const [lowercaseParameter, setlowercaseParameter] = useState(false);
  const [numbersParameter, setNumbersParameters] = useState(false);
  const [symbolsParameter, setSymbolsParameter] = useState(false);
  const [result, setResult] = useState("");
  const sliderRef = useRef(null);
  const uppercaseRef = useRef(null);

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=";

  const handdleMouseEnter = () => {
    setArrowIcon(activeRightArrow);
  };

  const handleMouseLeave = () => {
    setArrowIcon(rightArrow);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(result)
  }

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const handleCheckboxClick = (e) => {
    switch (e.target.name) {
      case "uppercase":
        setUppercaseParameter(!uppercaseParameter);
        e.target.checked
          ? setPasswordStrength(passwordStrength + 1)
          : setPasswordStrength(passwordStrength - 1);
        break;
      case "lowercase":
        setlowercaseParameter(!lowercaseParameter);
        e.target.checked
          ? setPasswordStrength(passwordStrength + 1)
          : setPasswordStrength(passwordStrength - 1);
        break;
      case "numbers":
        setNumbersParameters(!numbersParameter);
        e.target.checked
          ? setPasswordStrength(passwordStrength + 1)
          : setPasswordStrength(passwordStrength - 1);
        break;
      case "symbols":
        setSymbolsParameter(!symbolsParameter);
        e.target.checked
          ? setPasswordStrength(passwordStrength + 1)
          : setPasswordStrength(passwordStrength - 1);
        break;
    }
  };

  const generatePassword = () => {
    if (passwordStrength !== 0) {
      let charactersPool = "";
      let response = "";
      if (lowercaseParameter) {
        charactersPool += lowercase;
        response += getRandomCharFromString(lowercase);
      }
      if (uppercaseParameter) {
        charactersPool += uppercase;
        response += getRandomCharFromString(uppercase);
      }
      if (numbersParameter) {
        charactersPool += numbers;
        response += getRandomCharFromString(numbers);
      }
      if (symbolsParameter) {
        charactersPool += symbols;
        response += getRandomCharFromString(symbols);
      }
      for (
        let i = response.length;
        i < Number(sliderRef.current.value) + 10;
        i++
      ) {
        response +=
          charactersPool[Math.floor(Math.random() * charactersPool.length)];
      }
      setResult(response);
    } else {
      console.log("Estoy en else");
    }
  };

  return (
    <div className="password-generator__main-container">
      <h1>Password generator</h1>
      <div className="password-generator__containers password-generator__first-container">
        <input
          className="password-generator__output"
          disabled
          type="text"
          value={result}
        />
        <div className="divHoverEffect" style={{ position: "relative" }}>
          <img src={copyIcon} onClick={copyToClipBoard} className="password-generator__output--icon" />
          <span className="password-generator__output--icon--hover-effect"></span>
        </div>
      </div>
      <div className="password-generator__containers password-generator__second-container">
        <Slider
          minValue={10}
          maxValue={25}
          step={1}
          sliderRef={sliderRef}
          passwordStrength={passwordStrength}
          setPasswordStrength={setPasswordStrength}
        />
        <div className="password-generator__options-main-container">
          <div className="password-generator__option-container">
            <div className="password-generator__chekbox--container">
              <input
                ref={uppercaseRef}
                className="password-generator__chekbox"
                type="checkbox"
                onClick={handleCheckboxClick}
                name="uppercase"
                id="uppercase"
              />
              <span className="password-generator__chekbox--checkmark"></span>
            </div>

            <p>Include Uppercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <div className="password-generator__chekbox--container">
              <input
                className="password-generator__chekbox"
                type="checkbox"
                onClick={handleCheckboxClick}
                name="lowercase"
                id="lowercase"
              />
              <span className="password-generator__chekbox--checkmark"></span>
            </div>
            <p>Include Lowercase Letters</p>
          </div>
          <div className="password-generator__option-container">
            <div className="password-generator__chekbox--container">
              <input
                className="password-generator__chekbox"
                type="checkbox"
                onClick={handleCheckboxClick}
                name="numbers"
                id="numbers"
              />
              <span className="password-generator__chekbox--checkmark"></span>
            </div>
            <p>Include Numbers</p>
          </div>
          <div className="password-generator__option-container">
            <div className="password-generator__chekbox--container">
              <input
                className="password-generator__chekbox"
                onClick={handleCheckboxClick}
                type="checkbox"
                name="symbols"
                id="symbols"
              />
              <span className="password-generator__chekbox--checkmark"></span>
            </div>
            <p>Include Symbols</p>
          </div>
        </div>
        <PasswordStrength strength={passwordStrength} sliderRef={sliderRef} />
        <button
          onClick={() => generatePassword()}
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
