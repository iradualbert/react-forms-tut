import { useState } from "react";


// REACT FORM: FILES UPLOAD TO THE SERVER

const Form = () => {
	const [name, setName] = useState("");
	const [image, setImage] = useState();
	const [pdf, setPdf] = useState();
	const [otherFiles, setOtherFiles] = useState();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		
		formData.append("name", name);
		formData.append("image", image);
		formData.append("pdf", pdf);
		formData.append("otherFiles", otherFiles);
		// console.log(formData.entries())
		try {
			const res = await fetch("http://localhost:5000/upload", {
				method: "post",
				body: formData,
			});
			console.log(res)
		} catch (err) {
			console.log(err)
		}
		

		
	}

	return (
		<form onSubmit={handleSubmit}>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			<input
				onChange={(event) => setImage(event.target.files[0])}
				type="file"
				accept="image/png, image/gif, image/jpeg"
			/>
			{/* <input onChange={(event) => setPdf(event.target.files[0])} type="file" /> */}
			<input
				type="file"
				multiple
				accept="image/png, image/gif, image/jpeg"
				onChange={(event) => setOtherFiles(event.target.files)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
