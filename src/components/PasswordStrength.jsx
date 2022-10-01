import { useEffect, useState } from "react";
import "./styles/PasswordStrength.css";

const PasswordStrength = ({ strength, sliderRef }) => {
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState("-----");
  const [barsLevel, setBarsLevel] = useState(0);

  useEffect(() => {
    calculateStrengthLevel();
  }, [strength, sliderRef]);

  const calculateStrengthLevel = () => {
    switch (strength) {
      case 1:
        setPasswordStrengthLevel("Weak");
        setBarsLevel(0);
        break;
      case 2:
        setPasswordStrengthLevel("Medium");
        setBarsLevel(1);
        break;
      case 3:
        setPasswordStrengthLevel("Strong");
        setBarsLevel(2);
        break;
      case 4:
        setPasswordStrengthLevel("Super Strong");
        setBarsLevel(3);
        break;
      case 5:
        setPasswordStrengthLevel("Extremely Strong");
        setBarsLevel(4);
        break;
      default:
        setPasswordStrengthLevel("-----");
        break;
    }
  };

  return (
    <div>
      <div className="password-strength__main-container">
        <p>Strength</p>
        <div className="password-strength__level-bars-container">
          <p>{passwordStrengthLevel}</p>
          {[...Array(5)].map((level, index) => {
            return (
              <span
                className={
                  passwordStrengthLevel === "-----"
                    ? "password-strength__level-bar"
                    : index <= barsLevel
                    ? "password-strength__level-bar active"
                    : "password-strength__level-bar"
                }
                key={index}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
