import joi from 'joi';

export const ProductSchema = new joi.object({
    name: joi.string().required().min(3).max(255).empty(),
    price: joi.number().required().min(0),
    description: joi.string().required().min(3).max(255).empty(),
    hide: joi.boolean()
})