import { useState } from 'react';
import vercellogo from '../../../assets/vercellogo.svg';
import globe from '../../../assets/globe.svg';
import github from '../../../assets/github.svg';

const Repository = ({ repo }) => {
    const [showLogs, setShowLogs] = useState(false);

    const toggleLogs = () => {
        setShowLogs(prevState => !prevState);
    };

    return (
        <div className="flex flex-col p-4 justify-center bg-gray-900 rounded-lg border border-gray-700 shadow-lg min-w-[330px] ">
            <div className="flex justify-between p-4 flex-wrap">

                <div className='flex gap-4 items-center'>

                    <div className='p-1'>
                        <img className='w-10 h-10' src={vercellogo} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className='font-bold capitalize'>{repo?.projectName}</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>

                    <button onClick={toggleLogs} className=" bg-blue-500 text-white p-2 rounded-lg">
                        {showLogs ? 'Hide Logs' : 'Show Logs'}
                    </button>
                    <div className='p-2'><img className='w-8 h-8' src={globe} alt="" /></div>
                </div>
            </div>
            {/* <div className="flex p-4 justify-center bg-gray-800">
                <img className='w-8 h-8 p-2' src={globe} alt="" />
                {repo?.projectName}.localhost.8080
            </div> */}

            {showLogs && (
                <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg">
                    <p>Log entry 1...</p>
                    <p>Log entry 2...</p>
                    <p>Log entry 3...</p>
                </div>
            )}
        </div>
    );
};

export default Repository;
