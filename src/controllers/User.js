import User from '../models/UserModel.js';
const UserController = {
    getAll: async(req, res) => {
        try {
            const data = await User.find();
            if (data.length == 0) {
                return res.status(400).json({ message: "Lay danh sach nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Lay danh sach nguoi dung thanh cong",
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
            const data = await User.create(req.body);
            if (!data) {
                return res.status(400).json({ message: "Them nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Them nguoi dung thanh cong",
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
            const data = await User.findById(req.params.id);
            if (!data) {
                return res.status(400).json({ message: "Lay nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Lay nguoi dung thanh cong",
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
            const data = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "Cap nhat nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Cap nhat nguoi dung thanh cong",
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
            const data = await User.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(400).json({ message: "Xoa nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Xoa nguoi dung thanh cong",
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
            const data = await User.findByIdAndUpdate(req.params.id, {
                hide: true,
            }, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "An nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "An nguoi dung thanh cong",
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
            const data = await User.findByIdAndUpdate(req.params.id, {
                hide: false,
            }, {
                new: true
            });
            if (!data) {
                return res.status(400).json({ message: "Hien nguoi dung that bai" });
            }
            return res.status(200).json({
                message: "Hien nguoi dung thanh cong",
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
export default UserController;