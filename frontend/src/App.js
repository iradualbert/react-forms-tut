// import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import RegisterForm from "./components/RegisterForm";
import ImageUploader from "./components/ImageUploader";
import Uploader from "./components/Uploader";
import PasswordField from "./components/fields/PasswordField";

const lowerReg = /(?=.*?[a-z])/;
const upperReg = /(?=.*?[A-Z])/;
const numberReg = /(?=.*?[0-9])/;
const specialReg = /(?=.*?[#?!@$%^&*-])/;
const lengthReg = /.{8,}/;

const App = () => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [username, setUsername] = useState("");


  return (
    <div className="container">
      <form>
        <input
          name="name"
          placeholder="Username"
		  value={username}
		  onChange={event => setUsername(event.target.value)}
          style={{ marginBottom: 20 }}
        />
        <PasswordField
          value={password}
          setIsPasswordValid={setIsPasswordValid}
		  onChange={(event) => setPassword(event.target.value)}
        />
		<button type="submit" disabled={!isPasswordValid || !username}>
			Submit
		</button>
      </form>
    </div>
  );
};

export default App;
