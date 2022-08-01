import "./App.css";
import Form from "./components/Form";
import RegisterForm from "./components/RegisterForm";
import ImageUploader from "./components/ImageUploader";
import Uploader from "./components/Uploader";

const App = () => {
	return (
		<div className="container">
			{/* <ImageUploader /> */}
			{/* <RegisterForm /> */}
			{/* <ImageUploader /> */}
			<Uploader />
		</div>
	);
};

export default App;
