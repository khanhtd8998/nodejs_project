import mongoose, { Schema } from "mongoose";

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
        image: {
            type: String,
            default: "https://vimexpo.com.vn/wp-content/uploads/2020/11/4900_anh_chua_cap_nhat.jpg",
        },
        startAt: { type: Date },
        endAt: { type: Date },
        bidTime: { type: Number },
        bids: {
            type: [Schema.Types.ObjectId],
            ref: 'Bid',
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;