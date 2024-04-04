import express from "express"
import router from "./src/routes/index.js"
import connect  from "./src/ultils/connect.js"
import { errorHandler, errorHandlerNotFound } from "./src/ultils/errorHanlder.js"
import { PORT } from "./src/ultils/env.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect()
app.use('/api', router)
app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT, () => {
    console.log("Connecting to port " + PORT);
})