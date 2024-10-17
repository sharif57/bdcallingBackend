import mongoose from "mongoose"
import app from "./app.js"
const port = 5000

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/restaurant")
        console.log("connected")

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()