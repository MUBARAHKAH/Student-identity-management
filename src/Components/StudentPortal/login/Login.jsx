import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

// import email_icon from "../Assets/email.jpg";
// import password_icon from "../Assets/password.png";

function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <h1 className="font-bold">Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Matric_No"
            required
            className="w-[100%] h-[150%] border-solid border-2 border-gray-600 bg-transparent outline-none
            placeholder-[gray] rounded-3xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
          />
          <FaUser className="icon absolute right-5 top-5" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-[100%] h-[150%] bg-transparent border-solid border-2 border-gray-600  outline-none  placeholder-[gray] 
            rounded-3xl"
          />
          <FaLock className="icon absolute right-5 top-5" />
        </div>
        <div className="remember-forgot flex justify-between mt-10 mb-8 t text-[14.5px]">
          {/* <label
            htmlFor=""
            className="flex flex-row right-52 gap text-[#fff] font-light text-base"
          > */}
          <div className="flex flex-row gap-0">
            <input type="checkbox" className="accent-white w-4 h-4 " />
            <p className="mr-8"> Remember me</p>
          </div>
          {/* </label> */}
          <a href="#" className="text-[#fff] no-underline hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submits"
          className="w-[100%] h-[60px] bg-[#000080] border-none outline-none rounded-3xl shadow-lg text-[#fff] font-bold text-2xl"
        >
          Login
        </button>

        <div className="register-link text-[14.5px] text-center mt-8">
          <p>
            Don't have an account?{" "}
            <a href="#" className="font-bold hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
