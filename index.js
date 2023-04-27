const express = require("express");
const route = require("./src/router.js");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


mongoose.set('strictQuery', true)//Deprication error
mongoose
  .connect(
    "mongodb+srv://DeeptirthaMukherjee:QYKI3k8QSKC4I7FZ@cluster1.khatgm1.mongodb.net/project4-db?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);


app.listen(process.env.PORT || 3001, function () {
  console.log("Express is running on port " + (process.env.PORT || 3001))
})
