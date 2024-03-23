import Product from '../models/ProductModel.js';
const ProductController = {
    getAll: async (req, res) => {
        try {
            const data = await Product.find();
            if (data.length == 0) {
                return res.status(400).json({ message: "Lay danh sach san pham that bai" });
            }
            return res.status(200).json({
                message: "Lay danh sach san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },

    create: async (req, res) => {
        try {
            const data = await Product.create(req.body);
            if (!data) {
                return res.status(400).json({ message: "Them san pham that bai" });
            }
            return res.status(200).json({
                message: "Them san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    getDetail: async (req, res) => {
        try {
            const data = await Product.findById(req.params.id);
            if (!data) {
                return res.status(400).json({ message: "Lay san pham that bai" });
            }
            return res.status(200).json({
                message: "Lay san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "Cap nhat san pham that bai" });
            }
            return res.status(200).json({
                message: "Cap nhat san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    remove: async (req, res) => {
        try {
            const data = await Product.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(400).json({ message: "Xoa san pham that bai" });
            }
            return res.status(200).json({
                message: "Xoa san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    softRemove: async (req, res) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id,
                {
                    hide: true,
                },
                {
                    new: true
                });
            if (!data) {
                return res.status(400).json({ message: "An san pham that bai" });
            }
            return res.status(200).json({
                message: "An san pham thanh cong",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
    },
    show: async (req, res) => {
        try {
            const data = await Product.findByIdAndUpdate(req.params.id,
                {
                    hide: false,
                },
                {
                    new: true
                });
            if (!data) {
                return res.status(400).json({ message: "Hien san pham that bai" });
            }
            return res.status(200).json({
                message: "Hien san pham thanh cong",
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
export default ProductController;