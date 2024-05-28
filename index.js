import express from "express";
import route from "./routes/router.js"
const app = express();
app.set('view engine',"ejs");
app.use("/",route);
app.listen(8000,()=> console.log("server up"));
