import express from 'express';
import ProductController from '../controllers/Product.js';
const productRouter = express.Router();

productRouter.get('/', ProductController.getAll);
productRouter.post('/', ProductController.create)
productRouter.get('/:id', ProductController.getDetail)
productRouter.put('/:id', ProductController.update)
productRouter.put('/hide/:id', ProductController.softRemove)
productRouter.put('/show/:id', ProductController.show)
productRouter.delete('/:id', ProductController.remove)

export default productRouter