
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/userRoute.js');


const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URL;

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to mongoDB")

    app.use("/", (request, response) => {
        response.send("Hello World")
    } );

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)

    })
}).catch((error) => {
    console.log(error)
})

app.use('/api/users', route);