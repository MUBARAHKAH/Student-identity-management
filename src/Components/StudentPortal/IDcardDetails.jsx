import React from "react";

const IdCardDetails = () => {
  return (
    <div className="">
      <div className=" bg-white p-6 shadow-lg w-full lg:w-3/5 absolute top-28 right-5">
        <h2 className="text-xl font-semibold mb-4">My ID Card Details</h2>
        <form className="grid grid-cols-1 gap-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-6">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Level
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter level"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Matric No
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your matric number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md"
          >
            Scan QR Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdCardDetails;
