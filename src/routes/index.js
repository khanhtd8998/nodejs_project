import express from 'express';
import productRouter from './product.js';
import userRouter from './user.js';
import categoryRouter from './category.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/auth', authRouter)

export default router;

