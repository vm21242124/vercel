import { useState } from "react"

export const useLocalStorage=()=>{
    const [user,setUser]=useState();
    return [user,setUser];
}