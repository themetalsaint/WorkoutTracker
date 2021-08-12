const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(morgan("dev"));


app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI||"mongodb+srv://themetalsaint:fu5566le@cluster0.z5xhc.mongodb.net/Workout?retryWrites=true&w=majority"||"mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// routes & listener

const mainRoutes = require('./routes/apiRoutes')
app.use(mainRoutes);
const pageRoutes = require('./routes/htmlRoutes')
app.use(pageRoutes);



app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
})

