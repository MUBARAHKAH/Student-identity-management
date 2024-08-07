// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import StudentPortal from "./Components/StudentPortal/StudentPortal";
import Login from "./Components/StudentPortal/login/Login.jsx";
import Layout from "./Components/StudentPortal/StudentDashboard/Layout";
import Dashboard from "./Components/StudentPortal/StudentDashboard/Dashboard.jsx";
import Header from "./Components/StudentPortal/StudentDashboard/Header.jsx";
import Sidebar from "./Components/StudentPortal/StudentDashboard/Sidebar.jsx";
//import Users from "./Components/StudentPortal/StudentDashboard/Users";
import IdentityCards from "./Components/StudentPortal/StudentDashboard/IdentityCards";
import RegistrationStatus from "./Components/StudentPortal/StudentDashboard/RegistrationStatus";
import Notifications from "./Components/StudentPortal/StudentDashboard/Notifications";
import DocumentManagement from "./Components/StudentPortal/StudentDashboard/DocumentManagement";
import Help from "./Components/StudentPortal/StudentDashboard/Help";
import ProfileOverview from "./Components/StudentPortal/StudentDashboard/ProfileOverview";
import EditProfile from "./Components/StudentPortal/StudentDashboard/EditProfile";
import ViewIdCard from "./Components/StudentPortal/StudentDashboard/ViewIdCard";
import DownloadIdCard from "./Components/StudentPortal/StudentDashboard/DownloadIdCard";
import QrCodeDisplay from "./Components/StudentPortal/StudentDashboard/QrCodeDisplay";
import IdCardDetails from "./Components/StudentPortal/IDcardDetails.jsx";

export default function App() {
  const initialUserData = {
    name: "Ajeigbe Sarat",
    matric: "20/52HL120",
    department: "Information Technology",
    faculty: "CIS",
    level: 400,
    email: "ajeigbe@gmail.com",
    phoneNumber: +2349031239818,
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/StudentPortal" element={<StudentPortal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h2>Error 404 page not found</h2>} />

        {/* New Layout Routes */}
        <Route
          index
          element={
            <>
              <Sidebar />
            </>
          }
        />

        <Route path="/" element={<Layout />}>
          {/* Include Header and Sidebar here */}

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/identity-cards" element={<IdentityCards />}>
            {/* <Route path="/" element={<QrCodeDisplay />} /> */}
            <Route path="qr-code-display" element={<QrCodeDisplay />} />
          </Route>

          <Route path="/registration-status" element={<RegistrationStatus />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="document-management" element={<DocumentManagement />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route
          path="/profile-overview"
          element={<ProfileOverview userData={initialUserData} />}
        />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
