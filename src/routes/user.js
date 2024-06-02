import express from 'express';
import UserController from '../controllers/User.js';
import checkPermission from '../middlewares/checkPermission.js';
import validBodyRequest from '../middlewares/validRequestBody.js';
import { registerSchema } from '../validations/auth.js';
const userRouter = express.Router();
// userRouter.use(checkPermission)
userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getDetail)
userRouter.put('/hide/:id', UserController.softRemove)
userRouter.put('/show/:id', UserController.show)
userRouter.delete('/:id', UserController.remove)
// userRouter.use(validBodyRequest(registerSchema))
userRouter.post('/', UserController.create)
userRouter.put('/:id', UserController.update)

export default userRouter