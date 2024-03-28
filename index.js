import express from "express"
import router from "./src/routes/index.js"
import mongoose from "mongoose"
import { errorHandler, errorHandlerNotFound } from "./ultils/errorHanlde.js"
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI
try {
    mongoose
        .connect(DB_URI)
        .then(() => {
            console.log("Connected to MongoDB successfully");
        })
} catch (error) {
    console.log("Connected failed: " + error);
}


app.use(express.json())
app.use('/api', router)

app.use(errorHandlerNotFound, errorHandler)

app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`)
})