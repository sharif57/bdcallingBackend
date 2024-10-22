import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"

    },
    image: {
        type: String
    }
}, {
    timestamps: true
})


// model create
const User = model("User", UserSchema)

export default User