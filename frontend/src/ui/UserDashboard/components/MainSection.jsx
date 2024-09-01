import React from 'react';
import { useUserContext } from '../UserContext';
import Overview from './Overview';
import YourRepostitories from './YourRepostitories';
import NewDeployment from './NewDeployment';

const MainSection = () => {
    const { selectedTab, setSelectedTab } = useUserContext();

    return (
        <>
            {selectedTab === "overview" && <Overview />}
            {selectedTab === "your deployement" && <YourRepostitories />}
            {selectedTab === "new deployement" && <NewDeployment />}
        </>
    )
}



export default MainSection