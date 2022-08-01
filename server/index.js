const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const PORT = process.PORT || 5000;

const app = express();

app.use(fileUpload());
app.use(cors());

const users = [];

const validateUser = (user) => {};

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    // if the user already exists
    // else create a new user
    res.status(201).json({
      username,
      email,
      message: "Account Created Successfully",
    });
  } else {
    const errors = {};
    if (!fullname) {
      errors["username"] = "Enter your username";
      errors["email"] = "Enter your username";
      errors["password"] = "Enter your username";
      errors["check-box"] = "Enter your username";
    }
  }
});

app.post("/upload", (req, res) => {
  if (req.files?.Image === undefined){
    res.status(400).send({ message: "Please upload a file!" });
    return;
  } 
  res.status(200).send({
    message: `${req.files.Image.name}: Uploaded the file successfully`
  });
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
