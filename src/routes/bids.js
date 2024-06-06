import { Router } from "express";
import BidController from "../controllers/Bid.js";
const bidsRouter = Router()
bidsRouter.get('/', BidController.getAll)
bidsRouter.post('/', BidController.createBid)

export default bidsRouter