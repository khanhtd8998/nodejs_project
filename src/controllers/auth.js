import User from '../models/UserModel.js'
import bcryptjs from 'bcryptjs'
import { registerSchema, loginSchema } from '../validations/auth.js';
import { validAuth } from '../../ultils/validAuth.js';
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv'
import { errorMessages, successMessages } from '../constants/message.js';
const AuthController = {
    register: async (req, res, next) => {
        try {
            //Kiểm tra dữ liệu đầu vào
            const { email, password } = req.body;
            validAuth(req.body, registerSchema)
            //Kiểm tra email đã tồn tại hay chưa
            const checkEmail = await User.findOne({ email })
            if (checkEmail) return res.status(400).json({ message: errorMessages.INVALID_EMAIL })
            //Mã hóa mật khẩu
            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(password, salt)
            //Tạo user mới
            const user = await User.create({ ...req.body, password: hashPassword })
            user.password = undefined;
            if (!user) return res.status(400).json({
                message: errorMessages.REGISTER_FALL
            });
            return res.status(201).json({
                message: successMessages.REGISTER_SUCCESS,
                user
            })
        } catch (error) {
            next(error)
        }
    },
    login: async (req, res, next) => {
        try {
            //Kiểm tra dữ liệu đầu vào
            const { email, password } = req.body;
            validAuth(req.body, loginSchema)
            //Kiểm tra email đã tồn tại hay chưa
            const user = await User.findOne({ email })
            if (!user) return res.status(400).json({ message: errorMessages.INVALID_EMAIL })
            //Kiểm tra password
            const checkPassword = await bcryptjs.compare(password, user.password)
            if(!checkPassword) return res.status(400).json({ message: errorMessages.INVALID_PASSWORD})
            //Tạo token -> JWT
            const token = jwt.sign({ id: user._id}, process.env.DB_URI ,{ expiresIn: "1h"})
            //Tra token cho client
            user.password = undefined;
            return res.status(200).json({
                message: successMessages.LOGIN_SUCCESS,
                data:{
                    user,
                    token,
                }
            })


        } catch (error) {
            next(error);
        }
    }
}
export default AuthController