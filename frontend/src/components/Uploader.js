import { useState, useRef } from "react";
import axios from "axios";

const Uploader = () => {
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("Image", images[0]);
      // const res = await fetch('http://localhost:5000/upload', {
      //   method: "POST",
      //   body: formData
      // })
      // const data = await res.json();

      const { data } = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      console.log(data);
      alert(data.message);
      setImages(null);
      inputRef.current.value = "";
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Image Uploader</h1>
      <input
        type="file"
        multiple
        onChange={(event) => setImages(event.target.files)}
        accept="image/*"
        ref={inputRef}
      />
      {images?.length ? (
        <>
          <div className="img-preview">
            {Array.from(images).map((image, index) => (
              <img src={URL.createObjectURL(image)} key={index} alt="" />
            ))}
          </div>
          <div className="actions">
            <button
              disabled={isLoading}
              onClick={() => inputRef.current.click()}
            >
              Change
            </button>
            <button onClick={handleSubmit} disabled={isLoading}>
              Upload
            </button>
          </div>
        </>
      ) : (
        <button onClick={() => inputRef.current.click()}>Chose Images</button>
      )}
    </>
  );
};

export default Uploader;
