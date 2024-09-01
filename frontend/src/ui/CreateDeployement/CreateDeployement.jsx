import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUserContext } from '../UserDashboard/UserContext';
import useGetUserData from '../../customHooks/useGetUserData';
import { deployProject } from '../../services/githubservice';

const CreateDeployement = ({ repository }) => {
    const [isReactRepo, setIsReactRepo] = useState(false);
    const [isAlreadyDeployed, setIsAlreadyDeployed ] = useState(false);
    const [folders, setFolders] = useState([]);
    const {setSelectedTab}=useUserContext();
    const user=useGetUserData();

    const checkIfReactRepo = async (folder) => {
        try {
            const response = await axios.get(`${repository.contents_url.replace("/{+path}", `${folder}/package.json`)}`);
            const packageJson = response.data;
            const packageJsonContent = JSON.parse(atob(packageJson.content));
            const dependencies = packageJsonContent.dependencies || {};
            const devDependencies = packageJsonContent.devDependencies || {};
            if (dependencies.react || devDependencies.react) {
                setIsReactRepo(true);
            } else {
                setIsReactRepo(false);
                fetchFolders();
            }
        } catch (error) {
            console.error('Error fetching package.json:', error);
            setIsReactRepo(false);
            fetchFolders();
        }
    };

    const handleFolderChange = (event) => {
        const selectedFolder = "/"+event.target.value;
        checkIfReactRepo(selectedFolder);
    };

    const fetchFolders = async () => {
        try {
            const response = await axios.get(`${repository.contents_url.replace("{+path}", "")}`);
            const data = response.data;
            const folders = data.filter(item => item.type === 'dir');
            setFolders(folders);
        } catch (error) {
            console.error('Error fetching repository contents:', error);
        }
    };

    useEffect(() => {
        checkIfReactRepo("/");
    }, []);
    const deploy=async(e)=>{
        e.preventDefault();
        try {
            const data={
                email:user.email,
                gitUrl:`${user.html_url}/${repository.name}`,
                slug:user.login+"-"+repository.name
            }
           const res=await deployProject(data);
           if(res.status===200){
               setSelectedTab("your deployements");
           }
        } catch (error) {
            if(error.response.status===400){
                setIsAlreadyDeployed(true);
            }
            
        }
        
    }

    return (
        <section className="bg-gray-800 text-white py-20 min-h-[80vh] flex justify-center items-center">
        <div className="flex flex-col p-8 gap-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-3xl font-bold">Configure Project</h2>
            <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Root Directory</span>
                <select className="bg-gray-700 text-white p-2 rounded-md" onChange={handleFolderChange}>
                    {folders.map((folder) => (
                        <option key={folder.name}>{folder.name}</option>
                    ))}
                </select>
            </div>
            {!isReactRepo && <span className=" font-medium text-red-400">This is not react repo please select another</span>}
            {!isAlreadyDeployed && <span className=" font-medium text-red-400">This repo is deployed already...</span>}
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${isReactRepo?"bg-blue-500 hover:bg-blue-600 text-white":"bg-gray-50 text-black"}`} disabled={!isReactRepo} onClick={deploy}>Deploy</button>
        </div>
    </section>
    );
}

export default CreateDeployement