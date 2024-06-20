import React, { useState, useEffect } from "react";

const ProfileOverview = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // Simulate fetching data from backend
    const mockProfileData = {
      name: "John Doe",
      email: "john.doe@example.com",
      // other profile data
    };
    setProfileData(mockProfileData);
  }, []);

  return (
    <div className="profile-overview">
      <h1>{profileData.name}</h1>
      <p>{profileData.email}</p>
      {/* other profile info */}
    </div>
  );
};

export default ProfileOverview;
