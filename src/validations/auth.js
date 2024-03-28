import joi from 'joi';

export const registerSchema = new joi.object({
    username: joi.string(),
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email không được để trống"
    }),
    password: joi.string().min(6).required(),
    phoneNumber: joi.number().min(10).max(11),
    address: joi.string(),
    avatar: joi.string(),
})

export const loginSchema = new joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email không được để trống"
    }),
    password: joi.string().min(6).required().messages({
        "any.required": "Password không được để trống"
    })
})