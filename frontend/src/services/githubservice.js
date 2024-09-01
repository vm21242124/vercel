import axios from 'axios';
export const getAccessToken=async(code)=>{
    const res=await axios.post('http://localhost:8080/user/getaccesstoken', {
        code
    })
    return res;
}
export const getUserRepositories=async(accessToken)=>{
    const res=await axios.post('http://localhost:8080/user/userrepos',{accessToken})
    return res;
}
export const saveUser=async(user)=>{
    await axios.post('http://localhost:8080/user/register', user)
}
export const deployProject=(project)=>{
    const res=axios.post('http://localhost:8080/user/deploy',project)
    return res;
}
export const getDeployementProjects=(username)=>{
    const res=axios.get('http://localhost:8080/user/yourdeployment/'+username)
    return res;
}