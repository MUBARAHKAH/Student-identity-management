import React from "react";
import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import IdCardDetails from "../IDcardDetails";
import LatestNews from "./LatestNews";
// import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <ProfileOverview />
      <IdCardDetails />
      <LatestNews />
      <Outlet />
    </div>
  );
};

export default Dashboard;
