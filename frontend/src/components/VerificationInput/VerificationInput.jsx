import { useRef, useState } from "react";
import "./Verification.css";

const InputVerification = ({
  LENGTH = 6,
  type = "text",
  onChange,
  isCodeInvalid
}) => {
  const [values, setValues] = useState([]);
  // const selectedIndex = code.length ? values.length : 0;

  const inputRefs = useRef([]);

  const onInputChange = (index) => {
    return (event) => {
      const boxValue = event.target.value;
      let code;
      setValues((_values) => {
        _values[index] = boxValue;
        code = _values.join("");
        return _values;
      });
      onChange(code);
      if (index === LENGTH - 1) return;
      if (boxValue || boxValue === 0) {
        inputRefs.current[index + 1].focus();
      }
    };
  };

  const onKeyDown = (index) => (event) => {
    if (index === 0) return;
    if (event.key === "Delete" || event.key === "Backspace") {
      if (
        inputRefs.current[index].value ||
        inputRefs.current[index].value === 0
      )
        return;
      inputRefs.current[index - 1].focus();
    }
  };

  const Boxes = new Array(LENGTH).fill(0);

  return (
    <div className={ isCodeInvalid ? "invalid-inputs" : "inputs"}>
      {Boxes.map((_, index) => (
        <input
          autoCorrect="false"
          autoCapitalize="false"
          value={values[index]}
          ref={(el) => (inputRefs.current[index] = el)}
          key={index}
          maxLength={1}
          onChange={onInputChange(index)}
          onKeyDown={onKeyDown(index)}
          type={type}
        />
      ))}
    </div>
  );
};

export default InputVerification;
