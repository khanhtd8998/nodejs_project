import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        hide: {
            type: Boolean,
            default: false,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;