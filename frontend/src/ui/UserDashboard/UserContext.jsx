import React, { createContext, useContext, useState} from 'react';

const UserContenxt = createContext();

export const useUserContext = () => {
  return useContext(UserContenxt);
};

export const UserSectionProvider = ({ children }) => {
    const [selectedTab,setSelectedTab]=useState("overview");
    const [loggedInUser,setLoggedInUser]=useState(null);
    const [userRepos,setUserRepos]=useState(null);
    const [userDeployements,setUserDeployements]=useState(null);

  return (
    <UserContenxt.Provider
      value={{
     selectedTab,setSelectedTab,
     loggedInUser,setLoggedInUser,
     userRepos,setUserRepos,
     userDeployements,setUserDeployements
      }}
    >
      {children}
    </UserContenxt.Provider>
  );
};