import mongoose from "mongoose"
import app from "./app.js"
const port = 5000

const main = async () => {

    // mongoose
    // restaurant
    // Rqo99ZB45LVraY8k

    const uri = "mongodb+srv://mongoose:Rqo99ZB45LVraY8k@cluster0.cwjeixv.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0";

    try {
        await mongoose.connect(uri)
        console.log("connected")

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()