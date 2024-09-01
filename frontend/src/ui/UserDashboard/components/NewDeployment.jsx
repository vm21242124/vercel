import React, { useEffect, useState } from 'react';
import github from '../../../assets/github.svg'
import { useUserContext } from '../UserContext';
import CreateDeployement from '../../CreateDeployement/CreateDeployement';

const NewDeployment = () => {
    const { userRepos } = useUserContext();
    const [repos, setRepos] = useState();
    const [showRepo, setShowRepo] = useState(null);
    
    useEffect(() => {
        if (userRepos) {
            userRepos.length <= 5 ? setRepos(userRepos) : setRepos(userRepos.slice(0, 5));
        }
    }, [])

    const searchrepo = (e) => {
        console.log(e.target.value);
        const searchValue = e.target.value.toLowerCase();
        const filteredRepos = userRepos.filter(repo => repo.name.toLowerCase().includes(searchValue));
        filteredRepos.length <= 5 ? setRepos(filteredRepos) : setRepos(filteredRepos.slice(0, 5))
    }
    return (
        <section className="bg-gray-800 text-white py-20 min-h-[80vh] ">
            {showRepo === null ? <div className="mx-auto px-4 flex flex-col ">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Deploy Your React or Vite App</h1>

                </div>

                <div className="flex justify-center">
                    <div className="flex p-4 justify-center items-center bg-gray-900 border border-gray-700 rounded-lg mr-4"><img className='w-12 h-12 p-2' src={github} alt="" />
                        <span className='font-bold '>vm21242124</span>
                    </div>
                    <input
                        onChange={searchrepo}
                        type="text"
                        placeholder="Search repositories..."
                        className="w-full max-w-md p-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                    />
                </div>

                <div className="flex gap-4 p-4 flex-wrap justify-center">
                    <div className="flex flex-col justify-center bg-gray-900 rounded-lg border border-gray-700 shadow-lg min-w-[330px] w-[40%]">
                        {repos?.map((item, key) => (

                            <div className="flex justify-between items-center p-4" key={key}>
                                <span>{item?.name}</span>
                                <button className="bg-white text-black py-1 px-3 rounded-lg" onClick={() => setShowRepo(item)}>deploy</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div> :
                <CreateDeployement repository={showRepo}/>
            }
        </section>
    )
}

export default NewDeployment;