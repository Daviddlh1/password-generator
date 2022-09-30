import { useState, useRef } from "react";
import "./styles/Slider.css";

const Slider = ({ minValue, maxValue, step, sliderRef }) => {
  const [value, setValue] = useState(0);
  const rangeInput = useRef(null);
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / (maxValue - minValue)}% 100%` };
  };

  const setProgressBar = () => {
    console.log(sliderRef.current.value)
    setValue(Math.floor(sliderRef.current.value));
  };

  return (
    <div className="slider__main-container">
      <div className="slider__first-container">
        <p>Character length</p>
        <input
          className="slider__value-output"
          type="text"
          value={value + minValue}
          disabled
        />
      </div>
      <div>
        <input
          type="range"
          className="slider__slider"
          ref={sliderRef}
          onChange={setProgressBar}
          onClick={setProgressBar}
          min={0}
          max={maxValue - minValue}
          defaultValue={0}
          step={step}
          style={getBackgroundSize()}
        />
      </div>
    </div>
  );
};

export default Slider;
