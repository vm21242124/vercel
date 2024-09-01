import axios from "axios";
import { GithubConfig } from "../cofig/awsconfig.js";

export async function getAccessToken(code){ 
  try {
    const response= await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: GithubConfig.client_id,
        client_secret: GithubConfig.client_secret,
        code:code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response;

  } catch (error) {
    throw error;
  }
   
}

export const getUserProfile=async(accessToken)=>{
  try {
    
    const profileResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    return profileResponse;
  } catch (error) {
    throw error;
  }
}
export const getUserRepos= async(accessToken)=>{
  try {
    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: {
          Authorization: `Bearer ${accessToken}`,
      },
  });

  return reposResponse;
  } catch (error) {
    throw error;
  }
}