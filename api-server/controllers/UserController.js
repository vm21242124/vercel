import { UserModel } from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {  JWTConfig } from "../cofig/awsconfig.js";



export const createUser=async(req,res)=>{
    const { email, name, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, name, password:hashedPassword });

    await newUser.save();

    return res.status(201).json({ success: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const token = jwt.sign({ userId: user._id }, JWTConfig.JWT_SECRET, { expiresIn: '1d' });
  
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({ error: "Something went wrong" });
    }
};

export const getAllUsers = async (req, res) => {
  try {
      const users = await UserModel.find();
      return res.status(200).json(users);
  } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
  }
};