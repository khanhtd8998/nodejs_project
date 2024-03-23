import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        avatar: {
            type: String
        },
        address: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        role: {
            type: String,
            enum: ["admin", "member"],
            default: "member"
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
const User = mongoose.model('User', UserSchema)
export default User