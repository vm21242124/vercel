import React, { useEffect } from 'react'
import Repository from './Repository';
import { useUserContext } from '../UserContext';
import { getDeployementProjects } from '../../../services/githubservice';

const YourRepostitories = () => {

    const { userDeployements,setUserDeployements } = useUserContext();

    return (
        <section className="bg-gray-800 text-white py-20 min-h-[80vh]">
            <div className="flex flex-col gap-4 p-4 flex-wrap justify-center">
                {userDeployements && userDeployements?.map((item,key)=>(
                    <Repository key={key} repo={item}/>
                ))}
            </div>

        </section>

    )
}

export default YourRepostitories