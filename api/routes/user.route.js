import express from 'express';
import { test } from '../controllers/user.controller.js ';
import { deleteUser, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/test',test);
router.post('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
export default router; 