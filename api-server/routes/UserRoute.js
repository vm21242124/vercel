import express from 'express';
import { createUser, getAllUsers, getUserAccessToken, getUserRepositories, loginUser } from '../controllers/UserController.js';
import { Deploy, getDeployedProject } from '../controllers/ProjectController.js';


const router=express.Router();

router.post("/register",createUser);
router.post("/login",loginUser);
router.get("/all",getAllUsers);

router.post("/deploy",Deploy);
router.post("/getaccesstoken",getUserAccessToken);
router.get("/yourdeployment/:username",getDeployedProject)
router.post("/userrepos",getUserRepositories);

export default router;