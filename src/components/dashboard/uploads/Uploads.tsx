import React from "react";
import Sidebar from "../sidebar/Sidebar";
import FileUpload from "./FileUpload";
import CardPreview from "./CardPreview";

const Uploads: React.FC = () => {
  return (
    <div className="bg w-screen h-screen pl-1 md:pl-1 lg:pl-1 p-2 md:p-3 lg:p-5 flex">
      {/**here is sidebar for all dashboard */}
      <div>
        <Sidebar />
      </div>
      {/**sidebar-end */}
      {/**uploads starts*/}
      <div className={`w-full h-auto bg-white rounded-2xl items-center justify-center`}>
        <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center m-5">
          <div className="flex items-center justify-around rounded-xl my-5 bg-gray-500 p-1 max-w-xs">
            <button className="bg-white py-1 px-5 mx-2 rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all ease-in-out duration-100">
              new upload
            </button>
            <button className="bg-white py-1 px-5 mx-2 rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all ease-in-out duration-100">
              recent file
            </button>
          </div>
          <div className="w-full px-5">
            <FileUpload />
          </div>
          <div className=" m-2 p-2">
            <CardPreview />
          </div>
        </div>
      </div>
      {/**dashboard-end */}
    </div>
  );
};

export default Uploads;
