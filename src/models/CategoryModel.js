
import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
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
    image: {
        type: String,
        default: "https://vimexpo.com.vn/wp-content/uploads/2020/11/4900_anh_chua_cap_nhat.jpg",
    },
    // products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

}, {
    versionKey: false,
    timestamps: true,
});
const Category = mongoose.model('Category', CategorySchema);
export default Category;