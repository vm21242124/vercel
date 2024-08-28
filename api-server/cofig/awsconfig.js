import { ECSClient } from '@aws-sdk/client-ecs'
import dotenv from 'dotenv';

dotenv.config();

export const JWTConfig={
  JWT_SECRET:`${process.env.JWT_SECRET}`
}

export const config = {
  CLUSTER: `${process.env.CLUSTER}`,
  TASK: `${process.env.TASK}`,
  awsSubnets:[`${process.env.SUBNET1}`,`${process.env.SUBNET2}`,`${process.env.SUBNET3}`],
  securiryGroups:[`${process.env.SECURITYGROUP}`],
  imageName:`${process.env.IMAGENAME}`
}

export const ecsClient = new ECSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: `${process.env.ACCESSKEY}`,
    secretAccessKey: `${process.env.SECRETACCESSKEY}`,
  }
})

export const GithubConfig={
  client_id: `${process.env.GITHUB_CLIENT_ID}`,  
  client_secret: `${process.env.GITHUB_CLIENT_SECRET}`
}