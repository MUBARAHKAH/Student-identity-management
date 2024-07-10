import React from "react";
import IdCardDetails from "../IDcardDetails";
import QRCode from "./QrCodeDisplay";
import { Outlet } from "react-router-dom";
import QrCodeDisplay from "./QrCodeDisplay";

const IdentityCards = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-10">
        <h2 className="text-xl font-semibold">Your ID Card</h2>
        <button className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">
          Request a new One
        </button>
      </div>
      <div className=" bg-white p-5 rounded-lg flex flex-row mt-2">
        <div className="flex flex-row">
          <QrCodeDisplay />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">
              Download or Scan the QR Code
            </h2>
            <p>Student</p>
          </div>
        </div>
        <div className="relative top-28 left-80 ">
          <button className=" p-10  bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none">
            Download
          </button>
        </div>
      </div>

      <div className="relative w-[170%] ml-32 right-3/4 -top-20 py-20">
        <IdCardDetails />
      </div>
    </div>
  );
};
export default IdentityCards;
