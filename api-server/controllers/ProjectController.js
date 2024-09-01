import { UserModel } from '../models/UserModel.js';
import { ProjectModel } from '../models/ProjectModel.js';
import { SpinContainer } from '../cofig/EcsClient.js';

export const Deploy=async(req,res)=>{
    const {gitUrl,slug,email}=req.body;
    try {
        const user=await UserModel.findOne({email});

        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        const projectSlug= slug ;

        const isexist = await ProjectModel.find({projectName:projectSlug});

        if(isexist){
            return res.status(400).json({message:"project already exist"});
        }
        
        await SpinContainer(gitUrl,projectSlug);

        const newProject=new ProjectModel({
            projectName:projectSlug,
            user,
            url:gitUrl
        });
        const savedProject=await newProject.save();

        return res.status(200).json({ status: 'queued', data: { projectSlug, url: `http://${projectSlug}.localhost:8000` } ,savedProject})
    } catch (error) {
        return res.status(500).json(error);   
    }
};

export const getDeployedProject =async(req,res)=>{
    const {username}=req.params;
    try {
        const user=await UserModel.findOne({username:username});
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        const projects=await ProjectModel.find({user});
        return res.status(200).json({ status: 'success', data: projects });
    } catch (error) {
        
    }
};