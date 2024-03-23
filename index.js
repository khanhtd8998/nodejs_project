import express from "express"
import router from "./src/routes/index.js"
import mongoose from "mongoose"

const app = express()
const PORT = 8000
try {
    mongoose
        .connect("mongodb://127.0.0.1:27017/nodejs_tutor_hoangnm")
        .then(() => {
            console.log("Connected to MongoDB nodejs_tutor_hoangnm");
        })
} catch (error) {
    console.log("Connected failed: " + error);
}


app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`)
})