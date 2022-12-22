//import liraries
import React, { Component } from 'react';
import Home from '../screens/driver/Home';
// import HomeNormal from "../../src/Screens/homenormal";
// import HomeNewUser from "../../src/Screens/homenewuser";
// import HomePost from "../../src/Screens/homepost";
// import Sidebar from "../../src/Screens/sidebar";
// import AccountSettings from "../../src/Screens/accountsettings";
// import Bookmarks from "../../src/Screens/bookmarks";
// import UserProfile from "../../src/Screens/userprofile";
// import CommunitiesHome from "../../src/Screens/communitieshome";
// import SearchCommunity from "../../src/Screens/searchcommunity";
// import CommunityDescription from "../../src/Screens/communitydescription";
// import CommunityStandards from "../../src/Screens/communitystandards";
// import CommunityProfileOwn from "../../src/Screens/communityprofileown";
// import CommunityProfileUserView from "../../src/Screens/communityprofileuserView";
// import CommunityPost from "../../src/Screens/communitypost";
// import Messages from "../../src/Screens/message";
// import Conversation from "../../src/Screens/conversation";
// import ReportStart from "../../src/Screens/Reportstart";
// import ReportProcess1 from "../../src/Screens/reportprocess1";
// import ReportProcess2A from "../../src/Screens/reportprocess2a";
// import ReportProcess2B from "../../src/Screens/reportprocess2b";
// import ReportProcess2C from "../../src/Screens/reportprocess2c";
// import ReportProcess3A from "../../src/Screens/reportprocess3c";
// import ReportProcess3B from "../../src/Screens/reportprocess3b";
// import ReportProcess3C from "../../src/Screens/reportprocess3c";
// import Complaintent from "../../src/Screens/complaintent";
// import InvitePeople from "../../src/Screens/invitepeople";
// import MakeAdmin from "../../src/Screens/makeadmin";
// import NewCommunity1 from '../../src/Screens/newcommunity1';
// import CommunityType from "../../src/Screens/communitytype";
// import CommunityLocation from "../../src/Screens/communitylocation";
// import CustomDrawer from "../Components/CustomDrawer";
// import News from '../Screens/news';
// import Notifications from "../Screens/notifications";
//Drawer
// create a component
const Mainstack = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Mainstack;
