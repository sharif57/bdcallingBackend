import { model, Schema } from "mongoose";


const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    price: {
        type: String,
        required: [true, "price is required"]
    },
    image: {
        type: String,
    },
  
    description: {
        type: String
    }
}, {
    timestamps: true
})


// model create
const Product = model("Product", ProductSchema)

export default Product