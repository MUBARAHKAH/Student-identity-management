import React from "react";
import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import IdCardDetails from "../IDcardDetails";
import LatestNews from "./LatestNews";

const Dashboard = () => {
  return (
    <div>
      <ProfileOverview />
      <IdCardDetails />
      <LatestNews />
      <Outlet />
    </div>
  );
};

export default Dashboard;
