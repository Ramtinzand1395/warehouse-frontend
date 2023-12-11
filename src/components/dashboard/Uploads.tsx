import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Uploads: React.FC = () => {
  return (
    <div className="bg-red-500 w-screen h-screen pl-1 md:pl-1 lg:pl-1 p-2 md:p-3 lg:p-5 flex">
      {/**here is sidebar for all dashboard */}
      <div>
        <Sidebar />
      </div>
      {/**sidebar-end */}
      {/**dashboard starts*/}
      <div className="w-full bg-white rounded-2xl">uploads</div>
      {/**dashboard-end */}
    </div>
  );
};

export default Uploads;
