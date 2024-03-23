import joi from 'joi';

export const registerSchema = new joi.object({
    username: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    phoneNumber: joi.number().min(10).max(11),
    address: joi.string(),
    avatar: joi.string(),
})