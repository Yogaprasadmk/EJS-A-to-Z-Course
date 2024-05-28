import express  from 'express';
import {homecontroller} from "../controllers/homecontroller.js";
import {aboutcontroller} from "../controllers/aboutcontroller.js";
const router = express.Router();

router.get('/', homecontroller);
router.get('/about',aboutcontroller);

export default router;