import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Uploads from "./components/dashboard/Uploads";

const App: React.FC = () => {
  return (
    <div>
      {/* This component has the whole dashboard and sidebar in it */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Uploads />} />
      </Routes>
    </div>
  );
};

export default App;
