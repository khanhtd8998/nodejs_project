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
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            default: "660ff7d29305fb9669b05844",
            ref: "Category",
        },
        discountPercentage: {
            type: Number,
            default: 0,
        },
        rating: {
            type: Number,
            default: 5,
        },
        stock: {
            type: Number,
            default: 0,
        },
        brand: {
            type: String,
            default: "No brand",
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;