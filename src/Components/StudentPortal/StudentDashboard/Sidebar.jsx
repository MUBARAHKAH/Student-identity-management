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
import logo from "../../Assets/unilorin_logo2.png";
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
          expanded ? "w-96" : "w-20"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            alt="Unilorin Logo"
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={handleToggle}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, openItem, setOpenItem }}>
          <ul className="flex-1 px-3">
            <SidebarItem
              icon={<LayoutDashboard size={50} />}
              text="Student Dashboard"
              alert
              to="/"
              id="student-dashboard"
            />
            <SidebarItem
              icon={<UserCircle size={20} />}
              text="Users"
              // subItems={["Profile Overview", "Edit Profile"]}
              subItems={[
                { name: "Profile Overview", path: "/users/profile-overview" },
                { name: "Edit Profile", path: "/users/edit-profile" },
              ]}
              to="/users"
              id="users"
            />
            <SidebarItem
              icon={
                <img src={identityCardIcon} alt="Identity-Card" width={20} />
              }
              text="Identity-cards"
              // subItems={["View Id card", "Download Id card", "Qr code display"]}
              subItems={[
                { name: "View Id card", path: "/identity-cards/view-id-card" },
                {
                  name: "Download Id card",
                  path: "/identity-cards/download-id-card",
                },
                {
                  name: "Qr code display",
                  path: "/identity-cards/qr-code-display",
                },
              ]}
              to="/identity-cards"
              id="identity-cards"
            />
            <SidebarItem
              icon={
                <img
                  src={registrationIcon}
                  alt="registration-status"
                  width={20}
                />
              }
              text="Registration Status"
              subItems={["Registration progress", "Required actions"]}
              to="/registration-status"
              id="registration-status"
            />
            <SidebarItem
              icon={
                <img src={notificationIcon} alt="Identity Card" width={20} />
              }
              text="Notifications"
              subItems={["Alerts", "Message Center"]}
              to="/notifications"
              id="notifications"
            />
            <SidebarItem
              icon={<img src={documentIcon} alt="Identity Card" width={20} />}
              text="Document Management"
              subItems={["Upload documents", "View Uploaded Document"]}
              to="/document-management"
              id="document-management"
            />
            <SidebarItem
              icon={<LifeBuoy size={20} />}
              text="Help"
              subItems={["FAQs", "Contact Support"]}
              to="/help"
              id="help"
            />
          </ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img src="#" alt="Profile" className="w-10 h-10 rounded-md" />
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              expanded ? "w-96 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4 overflow-hidden">
              <h4 className="font-semibold">Abdulazeez Olayinka</h4>
              <span className="text-xs text-gray-600">
                abdulazeezolayinka1@gmail.com
              </span>
            </div>
            <MoreVertical size={20} className="relative left-96" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, subItems = [], id }) {
  const { expanded, openItem, setOpenItem } = useContext(SidebarContext);
  const isOpen = openItem === id;

  const handleClick = () => {
    setOpenItem(isOpen ? null : id);
  };

  return (
    <>
      <li
        onClick={handleClick}
        className={`
           flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active || isOpen
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
        `}
      >
        <div className="icon-wrapper">{icon}</div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "w-96 ml-3" : "w-0"
          }`}
        >
          <div className="text-base sm:text-lg lg:text-lg font-medium mb-8">
            {text}
          </div>
        </div>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 
            group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
      {isOpen && subItems.length > 0 && (
        <ul className={`ml-6 ${expanded ? "block" : "hidden"}`}>
          {subItems.map((subItem, index) => (
            <li
              key={index}
              className="py-2 px-3 my-1 text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-md cursor-pointer"
            >
              {/* {subItem} */}
              <Link to={subItem.path}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
