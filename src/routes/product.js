import express from 'express';
import ProductController from '../controllers/Product.js';
import { ProductSchema } from '../validations/product.js'; 
import  validBodyRequest  from '../middlewares/validRequestBody.js';
import checkPermission from '../middlewares/checkPermission.js';
const productRouter = express.Router();
productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getDetail)

productRouter.use(checkPermission)
productRouter.delete('/:id', ProductController.remove)
productRouter.use(validBodyRequest(ProductSchema))
productRouter.put('/hide/:id', ProductController.softRemove)
productRouter.put('/show/:id', ProductController.show)
productRouter.post('/',  ProductController.create)
productRouter.put('/:id', ProductController.update)

export default productRouter