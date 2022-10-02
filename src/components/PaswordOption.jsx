import "./styles/PasswordOption.css";

const PasswordOption = ({ handleClick, name, optionMessage }) => {
  return (
    <div className="password-option__option-container">
      <div className="password-option__chekbox--container">
        <input
          className="password-option__chekbox"
          type="checkbox"
          onClick={handleClick}
          name={name}
        />
        <span className="password-option__chekbox--checkmark"></span>
      </div>
      <p>{optionMessage}</p>
    </div>
  );
};

export default PasswordOption;
