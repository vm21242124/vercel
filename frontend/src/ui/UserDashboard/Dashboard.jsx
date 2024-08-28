import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setUser } from '../../redux/UserSlice';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Dashboard = () => {
    const [code, setCode] = useState();
    const dispatch=useDispatch();
    const user = useSelector((state) => state.user.user);
    
    const handleLogin = (code) => {
        if(!user){
            axios.post('http://localhost:8080/user/getaccesstoken', {
                code
            }).then(res => {
                console.log(res.data);
                
                dispatch(setAccessToken(res.data.token));
                dispatch(setUser(res.data.profile));
            }).catch(e => {
                console.log(e);
            })
        }

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('code')) {
            urlParams.delete('code'); // Corrected: Just delete the 'code' parameter
            const newUrl = window.location.pathname + '?' + urlParams.toString();
            window.history.replaceState(null, '', newUrl);
        }
    }
    const handleGitHubCallback = () => {

        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        code && setCode(code);
    
    };
    useEffect(()=>{
        if(code ){
            handleLogin(code);
        }
        
    },[code])

    useEffect(() => {
        handleGitHubCallback();
    }, [])

    return (
        <div className="bg-gray-900 min-h-screen">
            <Header username={user?.name}/>
            <section className="bg-gray-800 text-white py-20 min-h-[80vh]">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Deploy. Scale. Innovate.</h1>
                <p className="text-xl mb-12">Instantly deploy your code and scale to millions of users seamlessly.</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg">Get Started</button>
            </div>
        </section>
            <Footer />
        </div>
    )
}

export default Dashboard