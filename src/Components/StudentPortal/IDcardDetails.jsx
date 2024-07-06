import React from "react";

const IdCardDetails = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className=" bg-white p-10 shadow-lg w-2/4 absolute top-2 right-5 ">
        <h2 className="text-xl font-semibold mb-4">My ID Card Details</h2>
        <form className="grid grid-cols-1 gap-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-6">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value="457 Washington Ave. Manchester, Kentucky 39405"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Level
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value="+0123 456 7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Matric No
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value="albatt4578@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value="+0123 456 7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-6">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value="albatt4578@gmail.com"
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
