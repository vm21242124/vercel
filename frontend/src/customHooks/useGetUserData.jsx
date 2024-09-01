import React from 'react'
import { useSelector } from 'react-redux'

const useGetUserData = () => {
    const user= useSelector(state=>state.user.user)
  return user;
}

export default useGetUserData