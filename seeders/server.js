const express = require("express");
const mongoose = require("mongoose");
const APIroutes = require("./routes/api-routes");
const HTMLroutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;





// routes & listener
app.use(APIroutes);
app.use(HTMLroutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})