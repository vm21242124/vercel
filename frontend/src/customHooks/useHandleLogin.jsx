import React from 'react'
import { getAccessToken, getDeployementProjects, getUserRepositories, saveUser } from '../services/githubservice';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUser } from '../redux/UserSlice';
import { removeCodeParams } from '../utils/urls';
import { useUserContext } from '../ui/UserDashboard/UserContext';

const useHandleLogin = () => {
    const dispatch = useDispatch();
    const { setLoggedInUser,setUserRepos,
        setUserDeployements } = useUserContext();

    const handleLogin = async (code) => {
        if (code) {
            try {
                const res = await getAccessToken(code);

                if (res.data) {
                    dispatch(setAccessToken(res.data.token));
                    dispatch(setUser(res.data.profile));
                    setLoggedInUser(res.data.profile);

                    const user = {
                        name: res.data.profile.name,
                        email: res.data.profile.email,
                        username: res.data.profile.login,
                    };

                    await saveUser(user);

                    const deploy = await getDeployementProjects(user?.username);
                    deploy.data && setUserDeployements(deploy.data.data);
    
                    if(res.data.token){
                        const userRepos = await getUserRepositories(res.data.token);
                        userRepos.data && setUserRepos(userRepos.data);
                    }
                }
            } catch (error) {
                console.error('Error during login:', error);
            } finally {
                removeCodeParams();
            }
        }
    };

    return handleLogin;
};

export default useHandleLogin;
