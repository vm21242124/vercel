import { RunTaskCommand } from "@aws-sdk/client-ecs";
import { config, ecsClient } from "./awsconfig.js";


export const SpinContainer=async(gitUrl,projectSlug)=>{
   const command= new RunTaskCommand({
        cluster:config.CLUSTER,
        taskDefinition:config.TASK,
        launchType:'FARGATE',
        networkConfiguration:{
            awsvpcConfiguration:{

                assignPublicIp:'ENABLED',
                subnets:config.awsSubnets,
                securityGroups:config.securiryGroups
            }
        },
        overrides:{
            containerOverrides:[
                {
                    name:config.imageName,
                    environment:[
                        {name:'GIT_REPOSITORY_URL',value:gitUrl},
                        {name:'PROJECT_ID',value:projectSlug}
                    ]
                }
            ]
        }
    })
    await ecsClient.send(command);
} 