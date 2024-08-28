import { generateSlug } from 'random-word-slugs';

import { UserModel } from '../models/UserModel.js';
import { ProjectModel } from '../models/ProjectModel.js';
import { SpinContainer } from '../cofig/EcsClient.js';


export const Deploy=async(req,res)=>{
    const {gitUrl,slug,userId}=req.body;
    try {
        const user=await UserModel.findById(userId);

        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        const projectSlug= slug ?slug:generateSlug();
        
        console.log("before spin container");
        await SpinContainer(gitUrl,projectSlug);

        console.log("spin container");
        

        const newProject=new ProjectModel({
            projectName:projectSlug,
            user,
            url:gitUrl
        });
        console.log("new project");

        const savedProject=await newProject.save();
        console.log("after new project");

        return res.status(200).json({ status: 'queued', data: { projectSlug, url: `http://${projectSlug}.localhost:8000` } ,savedProject})
    } catch (error) {
        return res.status(500).json(error);   
    }
      
}