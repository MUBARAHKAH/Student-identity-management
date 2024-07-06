import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initialUserData } from "../../data";
const ProfileOverview = ({ userData }) => {
  const [user, setUser] = useState(initialUserData);

  // useEffect(() => {
  //   if (!userData) {
  //     // Simulating an API call to fetch user data if userData is not provided
  //     async function fetchUserData() {
  //       try {
  //         const response = await fetch("https://api.example.com/user/1"); // Replace with your API endpoint
  //         const data = await response.json();
  //         setUser(data);
  //       } catch (error) {
  //         console.error("Failed to fetch user data:", error);
  //       }
  //     }

  //     fetchUserData();
  //   }
  // }, [userData]);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className=" w-1/3 p-8  bg-white shadow-lg">
      <div className="text-center mb-8 ">
        <img
          src={user.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto"
        />
        <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
      </div>
      <div className="">
        <p className="text-sm text-gray-600  mb-6">
          <strong>Matric No:</strong> {user.matric}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Department:</strong> {user.department}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Faculty:</strong> {user.faculty}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Level:</strong> {user.level}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 ">
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
      </div>
      {/* <div className="mt-4">
        <Link to="/dashboard" className="block text-blue-500 hover:underline">
          Dashboard
        </Link>
      </div> */}
    </div>
  );
};

export default ProfileOverview;
