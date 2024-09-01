import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getCodeFromParams } from '../../utils/urls';
import MainSection from './components/MainSection';
import HeaderOptions from './components/HeaderOptions';

import useHandleLogin from '../../customHooks/useHandleLogin';

const Dashboard = () => {
    const [code, setCode] = useState();
    const handleLogin = useHandleLogin();

    const handleGitHubCallback = () => {
        const code=getCodeFromParams();
        code && setCode(code);
    };

    useEffect(()=>{
        if(code){
            handleLogin(code);
        } 
    },[code])

    useEffect(() => {
        handleGitHubCallback();
    }, [])

    return (
    

        <div className="bg-gray-900 min-h-screen">
            <Header/>
            <HeaderOptions />
            <MainSection/>
            <Footer />
        </div>

    )
}

export default Dashboard