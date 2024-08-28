import express from 'express';
import { createUser, getAllUsers, loginUser } from '../controllers/UserController.js';
import { Deploy } from '../controllers/ProjectController.js';


const router=express.Router();

router.post("/register",createUser);
router.post("/login",loginUser);
router.get("/all",getAllUsers);

router.post("/deploy",Deploy)
export default router;