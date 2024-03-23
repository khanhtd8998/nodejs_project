import User from '../models/UserModel.js'
import bcryptjs from 'bcryptjs'
import { registerSchema } from '../validations/auth.js';
const AuthController = {
    register: async(req, res) => {
        try {
            //Kiểm tra dữ liệu đầu vào
            const { email, password } = req.body;
            const { error } = registerSchema.validate(req.body, { abortEarly: false });
            if (error) {
                const errors = error.details.map(err => err.message)
                return res.status(400).json({ message: errors })

            }
            //Kiểm tra email đã tồn tại hay chưa
            const checkEmail = await User.findOne({ email })
            if (checkEmail) return res.status(400).json({ message: "Email đã tồn tại" })
                //Mã hóa mật khẩu
            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(password, salt)
                //Tạo user mới
            const user = await User.create({...req.body, password: hashPassword })
            user.password = undefined;
            if (!user) return res.status(400).json({
                message: "Đăng ký tài khoản thất bại"
            });
            return res.status(201).json({
                message: "Đăng ký tài khoản thành công",
                user
            })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message
            })
        }
    }
}
export default AuthController