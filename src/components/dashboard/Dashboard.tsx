import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className='bg pl-1 md:pl-1 lg:pl-1 p-2 md:p-3 lg:p-5 flex'>
      {/**here is sidebar for all dashboard */}
      <div>
        <Sidebar />
      </div>
      {/**sidebar-end */}
      {/**dashboard starts*/}
      <div className="w-full h-auto bg-white rounded-2xl">
        dashboard
      </div>
      {/**dashboard-end */}
    </div>
  );
};

export default Dashboard;
