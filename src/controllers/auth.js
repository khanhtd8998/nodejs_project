import { comparePassword, hashPassword } from '../ultils/hashPassword.js';
import { generateToken } from '../ultils/jwt.js';
import { errorMessages, successMessages } from '../constants/message.js';
import User from '../models/UserModel.js';
const AuthController = {
    register: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const checkEmail = await User.findOne({ email })
            if (checkEmail) return res.status(400).json({ message: errorMessages.EMAIL_EXISTED })

            const hashPass = await hashPassword(password)
            const user = await User.create({ ...req.body, password: hashPass })

            if (!user) return res.status(400).json({
                message: errorMessages.REGISTER_FAILED
            });
            user.password = undefined;
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
            const { email, password } = req.body;

            const user = await User.findOne({ email })
            if (!user) return res.status(400).json({ message: errorMessages.INVALID_EMAIL })
            
            if (!(await comparePassword(password, user.password))) {
                return res.status(400).json({ message: errorMessages.INVALID_PASSWORD });
            }
            
            const token = generateToken({_id: user._id}, "10d")
            user.password = undefined;
            return res.status(200).json({
                message: successMessages.LOGIN_SUCCESS,
                token,
                data: user
            })
        } catch (error) {
            next(error);
        }
    }
}
export default AuthController