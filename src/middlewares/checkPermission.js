import { errorMessages } from "../constants/message.js";
import User from "../models/UserModel.js";
import { verifyToken } from "../ultils/jwt.js";
const checkPermission = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: errorMessages.TOKEN_INVALID });
        const data = verifyToken(token)
        if (!data) {
            return res.status(400).json({
                message: errorMessages.TOKEN_INVALID,
            });
        }
        const user = await User.findById(data._id)
        if (user?.role !== "admin") {
            return res.status(403).json({
              message: errorMessages.PERMISSION_DENIED || "Permission denied!",
            });
          }
        req.user = user;
        next()
    } catch (error) {
        next(error);
    }
}
export default checkPermission