import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            // text: true
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
        image: {
            type: String,
            default: "https://vimexpo.com.vn/wp-content/uploads/2020/11/4900_anh_chua_cap_nhat.jpg",
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;