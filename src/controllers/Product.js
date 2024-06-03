import { errorMessages, successMessages } from '../constants/message.js';
import Product from '../models/ProductModel.js';
import APIFeatures from '../ultils/APIFeatures.js';
const productController = {
    getAll: async (req, res, next) => {
        try {
            const limit = parseInt(req.query.limit) || 100;
            const features = new APIFeatures(Product.find().populate('category'), req.query)
                .filter()
                .sort()
                .limitFields()
                .paginate()
            const data = await features.query
            const totalDocuments = await Product.countDocuments();
            const totalPages = Math.ceil(totalDocuments / limit);

            if (data.length == 0) {
                return res.status(400).json({ message: errorMessages.NOT_FOUND });
            }
            return res.status(200).json({
                message: successMessages.GET_DATA_SUCCESS,
                results: data.length,
                totalPages,
                data
            });

        } catch (error) {
            next()
        }
    },
    getDetail: async (req, res, next) => {
        try {
            const data = await Product.findById(req.params.id).populate('category');
            if (data) {
                return res.status(200).json({
                    message: successMessages.GET_DATA_SUCCESS,
                    data: data
                });
            }
            return res.status(400).json({
                message: errorMessages.NOT_FOUND,
            });
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const data = await Product.create(req.body);
            // const updateCategory = await Category.findByIdAndUpdate(data.category, {
            //     $push: { products: data._id }
            // }, { new: true })
            if (!data) {
                return res.status(400).json({ message: errorMessages.CREATE_FAIL });
            }
            return res.status(200).json({
                message: successMessages.CREATE_DATA_SUCCESS,
                data: data
            });

        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            // const updateCategory = await Category.findByIdAndUpdate(data.category, {
            //     $push: { products: data._id }
            // }, { new: true })
            // if (!data || !updateCategory) {
            //     return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
            // }
            if (!data) {
                return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
            }
            return res.status(200).json({
                message: successMessages.UPDATE_DATA_SUCCESS,
                data: data
            });

        } catch (error) {
            next(error)
        }
    },
    remove: async (req, res, next) => {
        try {
            const data = await Product.findByIdAndDelete(req.params.id);
            if (data) {
                return res.status(200).json({
                    message: successMessages.DELETE_DATA_SUCCESS,
                    data: data
                });
            }
            return res.status(404).json({
                message: errorMessages.NOT_FOUND,
            });
        } catch (error) {
            next(error);
        }
    },
    softRemove: async (req, res, next) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id,
                {
                    hide: true,
                },
                {
                    new: true
                });
            if (data) {
                return res.status(200).json({
                    message: "HIDE_DATA_SUCCESS",
                    data: data
                });
            }
            return res.status(200).json({
                message: errorMessages.DELETE_FAIL,
            });

        } catch (error) {
            next(error);
        }
    },
    show: async (req, res, next) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id,
                {
                    hide: false,
                },
                {
                    new: true
                });
            if (data) {
                return res.status(200).json({
                    message: "SHOW_DATA_SUCCESS",
                    data: data
                });
            }
            return res.status(404).json({
                message: errorMessages.NOT_FOUND,
            });

        } catch (error) {
            next(error)
        }
    }
}
export default productController;