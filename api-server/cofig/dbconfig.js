import mongoose from "mongoose";

export async function Checkconnection() {
  const uri =`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.sasx6k8.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("connected")).catch(e=>console.log(e.message));
}