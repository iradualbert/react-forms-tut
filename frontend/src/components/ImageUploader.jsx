import { useState, useRef } from "react";
import axios from "axios";


// REACT FORM: IMAGE UPLOAD TO THE SERVER 
// make it resuable 
const ImageUploader = ({ value, onChange }) => {
  const [image, setImage] = useState();
  const [files, setFiles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleUpload = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("File", image);
      // data.append("files", files);
      // const req = await axios.post(
      //   "https://jsonplaceholder.typicode.com/posts",
      //   data,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      const res = await fetch("https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(req);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <input
        onChange={(e) => setImage(e.target.files[0])}
        hidden
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
      />
      {image && (
        <img
          style={{
            width: 200,
          }}
          src={URL.createObjectURL(image)}
          alt=""
        />
      )}
      <button onClick={handleClick}>Choose Image</button>
      <button onClick={handleUpload} disabled={isLoading}>
        Upload to the Server
      </button>
    </div>
  );
};

export default ImageUploader;
