import React from "react";
import { Outlet } from "react-router-dom";

const IdentityCards = () => {
  return (
    <div className="m-5 bg-white p-5 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Your ID Card</h2>
        <Outlet />
        <button className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">
          Request a new One
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <button className="w-full mt-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none">
            Download
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">My ID Card Details</h3>
        <p>
          <strong>Full Name</strong>
          <br />
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <p>
          <strong>Phone Number</strong>
          <br />
          +0123 456 7890
        </p>
        <p>
          <strong>Email</strong>
          <br />
          albert4578@gmail.com
        </p>
      </div>
    </div>
  );
};
export default IdentityCards;
