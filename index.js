import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = process.env.PORT || 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.2lln3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

// parse application/json
app.use(bodyParser.json({ limit: "7mb" }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "7mb", extended: false }));

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
