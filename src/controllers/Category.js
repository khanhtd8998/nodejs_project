import { errorMessages, successMessages } from '../constants/message.js';
import Category from '../models/CategoryModel.js';
const CategoryController = {
    getAll: async(req, res, next) => {
        try {
            const data = await Category.find();
            if (data.length == 0) {
                return res.status(400).json({ message: errorMessages.NOT_FOUND });
            }
            return res.status(200).json({
                message: successMessages.GET_PRODUCT_SUCCESS,
                data: data
            });

        } catch (error) {
            next(error)
        }
    },

    create: async(req, res, next) => {
        try {
            const data = await Category.create(req.body);
            if (!data) {
                return res.status(400).json({ message: errorMessages.CREATE_FAIL });
            }
            return res.status(200).json({
                message: successMessages.CREATE_PRODUCT_SUCCESS,
                data: data
            });
        } catch (error) {
            next(error)
        }
    },
    getDetail: async(req, res, next) => {
        try {
            const data = await Category.findById(req.params.id);
            if (data) {
                return res.status(200).json({
                    message: successMessages.GET_PRODUCT_SUCCESS,
                    data: data
                });
            }
            return res.status(400).json({
                message: errorMessages.NOT_FOUND,
            });

        } catch (error) {
            next(error)
        }
    },
    update: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
            }
            return res.status(200).json({
                message: successMessages.UPDATE_PRODUCT_SUCCESS,
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    remove: async(req, res) => {
        try {
            const data = await Category.findByIdAndDelete(req.params.id);
            if (data) {
                return res.status(200).json({
                    message: successMessages.DELETE_PRODUCT_SUCCESS,
                    data: data
                });
            }
            return res.status(404).json({
                message: errorMessages.NOT_FOUND,
            });
        } catch (error) {
            next(error)
        }
    },
    softRemove: async(req, res, next) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, {
                hide: true,
            }, {
                new: true
            });
            if (data) {
                return res.status(200).json({
                    message: "HIDE_PRODUCT_SUCCESS",
                    data: data
                });
            }
            return res.status(200).json({
                message: errorMessages.DELETE_FAIL,
            });
        } catch (error) {
            next(error)
        }
    },
    show: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, {
                hide: false,
            }, {
                new: true
            });
            if (data) {
                return res.status(200).json({
                    message: "SHOW_PRODUCT_SUCCESS",
                    data: data
                });
            }
            return res.status(404).json({
                message: errorMessages.NOT_FOUND,
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    }
}
export default CategoryController;