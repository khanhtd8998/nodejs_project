import joi from 'joi';

export const CategorytSchema = new joi.object({
    name: joi.string().required().min(3).max(255).empty(),
    slug: joi.string().required().min(3).max(255).empty(),
    description: joi.string().required().min(3).empty(),
    hide: joi.boolean()
})  