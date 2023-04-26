require("dotenv").config();

require("./db/conn");
const express = require("express");
const app = express();
const cors = require('cors');
const getmovie=require("./routes/movies");
const register=require("./routes/Authentication");
const userRoute = require("./routes/subscribers");
const listRoute = require("./routes/lists");

const PORT = 8000;


app.use(cors());
app.use(express.json());
app.use('/api/movies', getmovie);
app.use('/api/auth', register)  ;
app.use('/api/users', userRoute);
app.use('/api/lists', listRoute);



app.listen(PORT, () => {
    console.log(`Server start at Port No :${PORT}`)
})