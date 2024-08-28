// src/components/LoginWithGithub.js
import React, { useEffect } from 'react';
import { githubOAuthURL } from '../../../utils/Constants.js';


const LoginWithGithub = () => {
    
    const loginWithGithub=()=>{
        window.location.href=githubOAuthURL;
    }

   const handleLogin=(provider)=>{
    switch(provider){
        case "GitHub":
            loginWithGithub()
            break;

        default:
            console.log("working");
            break;
    }
   }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Sign in to Vercel</h2>
      <div className="space-y-4">
        <button
          onClick={() => handleLogin('GitHub')}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-72"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a10 10 0 00-3.162 19.496c.5.09.682-.217.682-.482 0-.237-.01-1.019-.014-1.845-2.777.603-3.367-1.34-3.367-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.003.07 1.531 1.03 1.531 1.03.891 1.528 2.34 1.087 2.91.832.09-.646.349-1.087.635-1.338-2.218-.253-4.555-1.109-4.555-4.937 0-1.09.39-1.984 1.03-2.683-.103-.253-.447-1.275.097-2.656 0 0 .84-.27 2.75 1.026A9.566 9.566 0 0112 7.038c.852.004 1.71.114 2.514.334 1.91-1.296 2.75-1.026 2.75-1.026.544 1.38.2 2.402.098 2.655.64.7 1.03 1.593 1.03 2.683 0 3.836-2.34 4.68-4.566 4.93.36.31.678.92.678 1.855 0 1.337-.012 2.417-.012 2.747 0 .267.18.577.688.48A10 10 0 0012 2z" />
          </svg>
          <span>Continue with GitHub</span>
        </button>

        <button
          onClick={() => handleLogin('GitLab')}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-72"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.003 2.001c-.515 0-.99.33-1.16.84l-2.12 6.53H4.87a1.18 1.18 0 00-.93 1.95L12 21.82l8.062-10.5a1.18 1.18 0 00-.93-1.95h-3.85l-2.12-6.53a1.18 1.18 0 00-1.157-.84zM5.118 10.867l1.642 5.039c.159.482.678.625 1.07.314l3.172-2.514L5.117 10.87zM18.885 10.87l-5.88 2.835 3.172 2.514c.39.312.91.17 1.07-.314l1.638-5.038z" />
          </svg>
          <span>Continue with GitLab</span>
        </button>

        <button
          onClick={() => handleLogin('Bitbucket')}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-72"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.092 13.781l-1.92 2.781h-4.8l6.72-9.6 3.36 4.8zM13.44 15.6h4.8l2.4-3.36-1.68-2.4zm-12.72 6.72l7.2-10.32 1.68-2.4 1.92-2.76h9.12L23.76 12l-9.6 13.92H.72z" />
          </svg>
          <span>Continue with Bitbucket</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default LoginWithGithub;
