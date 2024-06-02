import express from 'express';
import productRouter from './product.js';
import userRouter from './user.js';
import categoryRouter from './category.js';
import authRouter from './auth.js';
// import bidsRouter from './bids.js';

const router = express.Router();

router.use('/products', productRouter)
router.use('/categories', categoryRouter)
router.use('/auth', authRouter)
router.use('/users', userRouter)
// router.use('/bids', bidsRouter)
router.get('/', (req, res) => {
    res.send('Hi guys, Welcome to my API. You can use /products, /categories, /auth, /users, /bids')
})
export default router;

