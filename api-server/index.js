import express from 'express'
import userRoute from './routes/UserRoute.js'
import { Checkconnection } from './cofig/dbconfig.js';
import dotenv from 'dotenv'


const app =express();


dotenv.config()


app.use(express.json());


Checkconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.use('/user',userRoute);