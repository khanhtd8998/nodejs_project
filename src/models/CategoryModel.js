
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
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

}, {
    versionKey: false,
    timestamps: true,
});
const Category = mongoose.model('Category', CategorySchema);
export default Category;