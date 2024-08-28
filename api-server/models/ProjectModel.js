import mongoose from "mongoose";

const projectSchema=mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    url:{
        type:String,
        required:true
    }
})

export const ProjectModel=mongoose.model("Project",projectSchema);