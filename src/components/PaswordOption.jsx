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
          id={name}
        />
        <span
          onClick={handleClick}
          className="password-option__chekbox--checkmark"
        ></span>
      </div>
        <p for={name}>{optionMessage}</p>
    </div>
  );
};

export default PasswordOption;
