import "./PasswordField.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImCheckboxChecked, ImRadioUnchecked } from "react-icons/im";

const lowerReg = /(?=.*?[a-z])/;
const upperReg = /(?=.*?[A-Z])/;
const numberReg = /(?=.*?[0-9])/;
const specialReg = /(?=.*?[#?!@$%^&*-])/;
const lengthReg = /.{8,}/;

const Validation = ({ isChecked, message }) => {
  return (
    <li className={isChecked ? "valid-condition" : ""}>
      {isChecked ? (
        <ImCheckboxChecked style={{ color: "green" }} />
      ) : (
        <ImRadioUnchecked />
      )}
      {message}
    </li>
  );
};

const PasswordField = ({ value, setIsPasswordValid, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [_value, _setValue] = useState(value);

  const handleChange = (event) => {
    onChange(event);
    const newValue = event.target.value;
    _setValue(newValue);

    const isValid =
      lowerReg.test(newValue) &&
      upperReg.test(newValue) &&
      numberReg.test(newValue) &&
      specialReg.test(newValue) &&
      lengthReg.test(newValue);

    setIsPasswordValid(isValid);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="password-field">
      <div className="input-box">
        <input
          value={_value}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          required
          {...props}
        />
        <span onClick={toggleShowPassword}>
          {showPassword ? (
            <FaEyeSlash color="#9e9e9e" />
          ) : (
            <FaEye color="#9e9e9e" />
          )}
        </span>
      </div>
      <div className="validation">
        <Validation
          isChecked={lowerReg.test(_value)}
          message="At least one lower case"
        />
        <Validation
          isChecked={upperReg.test(_value)}
          message="At least one upper case"
        />
        <Validation
          isChecked={numberReg.test(_value)}
          message="At least one number"
        />
        <Validation
          isChecked={specialReg.test(_value)}
          message="At least one special character"
        />
        <Validation
          isChecked={lengthReg.test(_value)}
          message="At least one 8 characters"
        />
      </div>
    </div>
  );
};

PasswordField.defaultProps = {
  onChange: function () {},
};

export default PasswordField;
