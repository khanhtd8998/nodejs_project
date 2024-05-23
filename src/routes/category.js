import express from 'express';
import CategoryController from '../controllers/Category.js';
import validBodyRequest from '../middlewares/validRequestBody.js';
import { CategorytSchema } from '../validations/category.js';
import checkPermission from '../middlewares/checkPermission.js';
const categoryRouter = express.Router();

categoryRouter.get('/', CategoryController.getAll);
categoryRouter.get('/:id', CategoryController.getDetail)
categoryRouter.delete('/:id', CategoryController.remove)
// categoryRouter.use(checkPermission)
categoryRouter.use(validBodyRequest(CategorytSchema))
categoryRouter.put('/hide/:id', CategoryController.softRemove)
categoryRouter.put('/show/:id', CategoryController.show)
categoryRouter.post('/', CategoryController.create)
categoryRouter.put('/:id', CategoryController.update)

export default categoryRouter