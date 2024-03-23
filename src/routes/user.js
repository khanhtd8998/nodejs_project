import express from 'express';
import UserController from '../controllers/User.js';
const userRouter = express.Router();

userRouter.get('/', UserController.getAll);
userRouter.post('/', UserController.create)
userRouter.get('/:id', UserController.getDetail)
userRouter.put('/:id', UserController.update)
userRouter.put('/hide/:id', UserController.softRemove)
userRouter.put('/show/:id', UserController.show)
userRouter.delete('/:id', UserController.remove)

export default userRouter