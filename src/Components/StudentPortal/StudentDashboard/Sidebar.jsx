// src/student-dashboard/Sidebar.jsx
import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronFirst,
  ChevronLast,
  MoreVertical,
  LifeBuoy,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";
import logo from "../../Assets/sdm2_logo.png";
import identityCardIcon from "../../Assets/id-card.png";
import registrationIcon from "../../Assets/contact-form.png";
import documentIcon from "../../Assets/manage.png";
import notificationIcon from "../../Assets/notification.png";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [openItem, setOpenItem] = useState(null); // State to keep track of the currently open item

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Adjusted placement to top-right corner */}
          <button
            onClick={handleToggle}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ml-auto"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded, openItem, setOpenItem }}>
          <ul className="flex-1 px-3">
            <SidebarItem
              icon={<LayoutDashboard size={24} />}
              text="Dashboard"
              to="/"
              id="dashboard"
            />
            <SidebarItem
              icon={
                <img src={identityCardIcon} alt="Id Card" className="w-5" />
              }
              text="ID Card"
              to="/id-card"
              id="id-card"
            />
            <SidebarItem
              icon={<UserCircle size={24} />}
              text="Status"
              to="/status"
              id="status"
            />
            <SidebarItem
              icon={
                <img
                  src={documentIcon}
                  alt="Document Management"
                  className="w-5"
                />
              }
              text="Edit Profile"
              to="/edit-profile"
              id="edit-profile"
            />
          </ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 items-center">
          <img src="#" alt="Profile" className="w-10 h-10 rounded-full" />
          <div
            className={`flex flex-col ml-3 transition-all duration-300 ${
              expanded ? "block" : "hidden"
            }`}
          >
            <h4 className="font-semibold">Hawkins Maru</h4>
            <span className="text-xs text-gray-600">Company Manager</span>
          </div>
          <MoreVertical size={20} className="ml-auto" />
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, to, id }) {
  const { expanded, openItem, setOpenItem } = useContext(SidebarContext);
  const isOpen = openItem === id;

  const handleClick = () => {
    setOpenItem(isOpen ? null : id);
  };

  return (
    <>
      <li
        onClick={handleClick}
        className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          isOpen
            ? "bg-[#000080] text-white"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        <div className="icon-wrapper">{icon}</div>
        <div
          className={`ml-3 transition-all duration-300 ${
            expanded ? "block" : "hidden"
          }`}
        >
          {text}
        </div>
        {!expanded && (
          <div className="ml-3 text-sm bg-indigo-100 text-indigo-800 p-1 rounded absolute left-full transform -translate-x-3 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {text}
          </div>
        )}
      </li>
    </>
  );
}
