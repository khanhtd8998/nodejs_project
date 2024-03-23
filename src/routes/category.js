import express from 'express';
import CategoryController from '../controllers/Category.js';
const categoryRouter = express.Router();

categoryRouter.get('/', CategoryController.getAll);
categoryRouter.post('/', CategoryController.create)
categoryRouter.get('/:id', CategoryController.getDetail)
categoryRouter.put('/:id', CategoryController.update)
categoryRouter.put('/hide/:id', CategoryController.softRemove)
categoryRouter.put('/show/:id', CategoryController.show)
categoryRouter.delete('/:id', CategoryController.remove)

export default categoryRouter