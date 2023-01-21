// import "./App.css";
import { useState, useRef } from "react";
// import Uploader from "./components/Uploader";
// import ImageUploader from "./components/ImageUploader";
import CodeVerification from "./components/VerificationInput/VerificationInput";

const App = () => {
  const [code, setCode] = useState("");
  const [isCodeInvalid, setIsCodeInvalid] = useState(false);
  const formRef = useRef();
  const LENGTH = 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code !== "234224") {
      setIsCodeInvalid(true);
    }
  };

  const handleChange = value => {
    setCode(value);
    setIsCodeInvalid(false);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} ref={formRef}>
        <h2 style={{ textAlign: "center" }}>Verification Code</h2>
        <CodeVerification
          formRef={formRef}
          isCodeInvalid={isCodeInvalid}
          code={code}
          LENGTH={6}
          onChange={handleChange}
        />
        <button type="submit" disabled={code.length < LENGTH}>
          Verify
        </button>
      </form>
      {/* <Uploader /> */}
      {/* <ImageUploader /> */}
    </div>
  );
};

export default App;
