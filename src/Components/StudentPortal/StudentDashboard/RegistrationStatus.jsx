import React from "react";
import LatestNews from "./LatestNews";

const IdCardStatus = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold">Id Card Status</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg float-right">
          Re
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg mx-10 p-12 my-6 leading-loose">
        <div className="bg-gray-50 p-4 rounded-lg mb-6 leading-loose">
          <h2 className="text-lg font-semibold mb-2 border-b">Please Note</h2>
          <p className="text-gray-600 leading-relaxed">
            <p> Dear Students,</p>
            Welcome to the ID Card Status Check page. Here you can track the
            progress of your ID card application.{" "}
            <h3 className="font-semibold">Important information</h3>
            <p>
              If your application is under review, please revisit this page
              after 24 hours for updates.
            </p>
            <p>
              Approved ID cards can be collected from the student services
              office during working hours (Monday to Friday, 9 AM to 4PM).{" "}
            </p>
            <p>
              If you encounter any errors or discrepancies, please reach out to
              our support team at 09031239818.
            </p>
          </p>
        </div>
        <div className="border-t p-6 text-2xl">
          <h2>Id Card Status</h2>
        </div>
        <div className="flex justify-between items-center p-20 mb-20 bg-gray-50">
          <div className="flex flex-row ">
            <div className="">
              <div className="w-16 h-16 mb-4 border-8 border-orange-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
              <div className="text-lg font-semibold absolute">Pending</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <div className="w-16 h-16 border-8 mb-4 border-green-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
              <span className="text-lg font-semibold absolute">Success</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <div className="w-16 h-16 border-8 mb-4 border-pink-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
              <span className="text-lg font-semibold absolute">
                Unavailable
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LatestNews />
      </div>
    </div>
  );
};

export default IdCardStatus;
