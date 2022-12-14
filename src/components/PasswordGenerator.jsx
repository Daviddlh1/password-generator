import Slider from "./Slider";
import PasswordOption from "./PaswordOption";
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
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=";

  const hasAnOption = () => {
    return [uppercaseParameter, lowercaseParameter, numbersParameter, symbolsParameter].includes(true)
  }

  const handdleMouseEnter = () => {
    setArrowIcon(activeRightArrow);
  };

  const handleMouseLeave = () => {
    setArrowIcon(rightArrow);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(result);
  };

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
        response += getRandomCharFromString(charactersPool);
      }
      setResult(response);
    }
  };

  return (
    <div className="password-generator__main-container">
      <h1>Password Generator</h1>
      <div className="password-generator__containers password-generator__first-container">
        <input
          className="password-generator__output"
          disabled
          type="text"
          value={result}
        />
        <div className="divHoverEffect" style={{ position: "relative" }}>
          <img
            src={copyIcon}
            onClick={copyToClipBoard}
            className="password-generator__output--icon"
          />
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
          <PasswordOption 
          handleClick={handleCheckboxClick} 
          name="uppercase"
          optionMessage="Include Uppercase Letters"
          />
          <PasswordOption
          handleClick={handleCheckboxClick}
          name="lowercase"
          optionMessage="Include Lowercase Letters"
          />
          <PasswordOption
          handleClick={handleCheckboxClick}
          name="numbers"
          optionMessage="Include Numbers"
          />
          <PasswordOption
          handleClick={handleCheckboxClick}
          name="symbols"
          optionMessage="Include Symbols"
          />
        </div>
        <PasswordStrength hasAnOption={hasAnOption} strength={passwordStrength} sliderRef={sliderRef} />
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
