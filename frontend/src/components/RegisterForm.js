import { useState } from "react";
import countries from "./countries";
import ImageUpload from "./ImageUploader";

const RegisterForm = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [errors, setErrors] = useState({});

	const handleSubmit = async (event) => {
		event.preventDefault();
        const data = {
            fullname,
            email,
            country,
        };
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users/",
                {
                    method: "post",
                    data,
                    body: JSON.stringify(data)
                }
						);            
        } catch (err) {
            console.log(err);
        }
	};

	const userData = {
		fullname,
		email,
		country,
		termsAccepted,
		errors,
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Create an Account</h1>
			<ImageUpload />
			<label>Full Name:</label>
			<input
				value={fullname}
				onChange={(e) => setFullname(e.target.value)}
				// required
			/>

			<label>Email:</label>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				// required
			/>
			<label>Country:</label>
			<select
				value={country}
				onChange={(e) => setCountry(e.target.value)}
				// required
			>
				<option key=""></option>
				{countries.map((country) => (
					<option key={country}>{country}</option>
				))}
			</select>
			<div>
				<input
					// required
					onChange={() => setTermsAccepted((prev) => !prev)}
					type="checkbox"
					checked={termsAccepted}
				/>
				<span>By registering, I agree to the terms and conditions</span>
			</div>
			<input type="submit" />
			<button type="submit">Register</button>
			<pre>{JSON.stringify(userData, 2, 4)}</pre>
		</form>
	);
};

export default RegisterForm;
