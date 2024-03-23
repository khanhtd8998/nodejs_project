import Category from '../models/CategoryModel.js';
const CategoryController = {
    getAll: async(req, res) => {
        try {
            const data = await Category.find();
            if (data.length == 0) {
                return res.status(400).json({ message: "Lay danh sach danh muc that bai" });
            }
            return res.status(200).json({
                message: "Lay danh sach danh muc thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },

    create: async(req, res) => {
        try {
            const data = await Category.create(req.body);
            if (!data) {
                return res.status(400).json({ message: "Them danh muc that bai" });
            }
            return res.status(200).json({
                message: "Them danh muc thanh cong",
                data: data
            });
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    getDetail: async(req, res) => {
        try {
            const data = await Category.findById(req.params.id);
            if (!data) {
                return res.status(400).json({ message: "Lay danh muc that bai" });
            }
            return res.status(200).json({
                message: "Lay danh muc thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    update: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "Cap nhat danh muc that bai" });
            }
            return res.status(200).json({
                message: "Cap nhat danh muc thanh cong",
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
            if (!data) {
                return res.status(400).json({ message: "Xoa danh muc that bai" });
            }
            return res.status(200).json({
                message: "Xoa danh muc thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    softRemove: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, {
                hide: true,
            }, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "An danh muc that bai" });
            }
            return res.status(200).json({
                message: "An danh muc thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    show: async(req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, {
                hide: false,
            }, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "Hien danh muc that bai" });
            }
            return res.status(200).json({
                message: "Hien danh muc thanh cong",
                data: data
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