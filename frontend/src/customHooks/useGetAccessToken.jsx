import React from 'react'
import { useSelector } from 'react-redux';

const useGetAccessToken = () => {
    const accessToken= useSelector(state=>state.user.accessToken);
    return accessToken;
}

export default useGetAccessToken