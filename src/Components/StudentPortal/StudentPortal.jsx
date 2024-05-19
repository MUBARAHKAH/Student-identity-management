import React from "react";
import { useRef, useState } from "react";
import "./StudentPortal.css";

import logo from "../Assets/unilorin_logo2.png";
import photo from "../Assets/photo.png";

function StudentPortal() {
  // This is still on review
  const [action, setAction] = useState("Registration Form");

  const inputRef = useRef(null);
  const [image, setImage] = useState();
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <div className="header flex flex-col items-center gap-2.25 mt-7.5">
        <img src={logo} className="logo sw-56 h-56" alt="" />
        <div className="text text-[#000080] text-5xl font-bold mb-8 my-6">
          {action}
        </div>
      </div>

      {/* The student form details */}

      {/* image upload  */}
      <div
        onClick={handleImageClick}
        className="flex justify-center items-center"
      >
        {image ? (
          <img src={URL.createObjectURL(image)} alt="" />
        ) : (
          <img
            src={photo}
            alt="upload"
            className="form_image object-cover w-full h-full relative"
          />
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="inputs grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        {/*div for the firstname and lasname*/}
        <div className="input relative">
          <input
            type="text"
            placeholder="Full name"
            className="peer text-gray-900 font-semibold text-xl md:text-2xl"
          />
          <label htmlFor="fullName" className="">
            Full name
          </label>
        </div>

        <div className="input relative">
          <img src="{}" alt="" />
          <input type="text" placeholder="Matric number" />
          <label htmlFor="matric">Matric Number</label>
        </div>
        {/*div for Department*/}

        <div className="input relative">
          <img src="" alt="" />
          <input type="text" placeholder="Department" />
          <label htmlFor="department">Department</label>
        </div>
        {/*div for faculty*/}
        <div className="input relative">
          <img src="" alt="" />
          <input type="text" placeholder="Faculty" />
          <label htmlFor="faculty">Faculty</label>
        </div>

        {/*div for email*/}
        <div className="input relative">
          <img src="" alt="" />
          <input type="email" placeholder="Email_id" />
          <label htmlFor="fullName">Email</label>
        </div>

        {/*div for password*/}
        <div className="input relative">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
          <label htmlFor="fullName">Password</label>
        </div>

        <div className="input relative">
          <select
            className=".form-select"
            aria-label="Select gender"
            name="gender"
            id="gender"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="gender" className=" label-select">
            Gender
          </label>
        </div>

        <div className="input relative">
          <select
            className=".form-select"
            aria-label="Select gender"
            name="gender"
            id="gender"
          >
            <option value="">Select level</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select>
          <label htmlFor="level" className=" label-level">
            Level
          </label>
        </div>
      </div>
      <div className="forgot-password pl-4 md:pl-16  text-[#000080] text-xl md:text-2xl pb-24">
        forgot password?{" "}
        <span className="click-here text-[#000080] cursor-pointer">
          Click here
        </span>
      </div>
      <div className="submit-container flex flex-col sm:flex-row gap-8 my-15 mx-auto">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Register");
          }}
        >
          {" "}
          Register
        </div>
        <div
          className={action === "Register" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default StudentPortal;
