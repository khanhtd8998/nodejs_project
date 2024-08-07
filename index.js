import express from "express"
import router from "./src/routes/index.js"
import connect  from "./src/ultils/connect.js"
import { errorHandler, errorHandlerNotFound } from "./src/ultils/errorHanlder.js"
import { PORT } from "./src/ultils/env.js";
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect()
app.use('/', router)
app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT, () => {
    console.log("Connecting to port " + PORT);
})