const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8745;
require("./dB")
app.use(cors());
app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`);
})
