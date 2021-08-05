const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
//do I need morgan yet?

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(morgan("dev"));


app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
   useNewUrlParser: true, 
    useFindAndModify: false
})

// routes & listener
app.use("./routes/apiRoutes.js");
app.use("./routes/htmlRoutes.js");




app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
})