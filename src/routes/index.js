import express from 'express';
import productRouter from './product.js';
import userRouter from './user.js';
import categoryRouter from './category.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/products', productRouter)
router.use('/categories', categoryRouter)
router.use('/auth', authRouter)

// router.use('/users', userRouter)
export default router;

