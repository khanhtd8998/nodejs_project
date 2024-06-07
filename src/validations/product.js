import joi from 'joi';

export const ProductSchema = new joi.object({
    name: joi.string().required().min(3).max(255).empty(),
    price: joi.number().required().min(0),
    description: joi.string().required().min(3).max(255).empty(),
    hide: joi.boolean(),
    discountPercentage: joi.number().min(0).max(100),
    rating: joi.number().min(0).max(5),
    stock: joi.number().min(0),
    brand: joi.string().min(3).max(255),
    category: joi.string().min(3).max(255),
    image: joi.string(),
    bidTime: joi.number().allow(null, ''),
    startAt: joi.date().allow(null, ''),
    endAt: joi.date().allow(null, '')
})