import express from 'express'
import userRoute from './routes/UserRoute.js'
import { Checkconnection } from './cofig/dbconfig.js';
import dotenv from 'dotenv'
import cors from 'cors'

const app =express();


dotenv.config()

app.use(express.json());
app.use(cors())

Checkconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.use('/user',userRoute);