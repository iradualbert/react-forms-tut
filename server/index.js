// forms
// save file in the folder in the name

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require("cors");


const app = express();

app.use(fileUpload())
app.use(cors())

app.post('/upload', (req, res) => {
    console.log(req.files)
    // if (req.files === null) {
    //     return res.status(400).json({
    //         msg: 'Files are required'
    //     })
    // }
    const files = req.files
    
    res.json({ status : "ok"})
})

app.listen(5000, () => console.log('Server started....'))