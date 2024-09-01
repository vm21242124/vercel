import React from 'react'
import { useUserContext } from '../UserContext';
const options=["overview","your deployement","new deployement"];


const HeaderOptions = () => {
  const {selectedTab,setSelectedTab} =useUserContext();
  return (
    <div className="flex gap-3 p-4 text-white border-b border-x-gray-900">
        {options.map((item,key)=>(
            <span className={`font-bold capitalize cursor-pointer p-4 ${selectedTab===item && 'text-blue-800 border-b border-blue-800'}`} key={key} onClick={()=>setSelectedTab(item)}>{item}</span>
        ))}
    </div>
  )
}

export default HeaderOptions