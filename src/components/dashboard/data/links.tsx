import React from "react";
import { AiFillDashboard, AiOutlineUpload } from "react-icons/ai";

interface MenuLink {
  id: number;
  title: string;
  to: string; // Change this to the appropriate type (e.g., string or your specific routing library's type)
  icon: React.ReactElement;
}

const menuLinks: MenuLink[] = [
  {
    id: 1,
    title: "dashboard",
    to: "/dashboard", // Change this to the appropriate path or URL
    icon: <AiFillDashboard className="text-black w-7 h-7 " />,
  },
  {
    id: 2,
    title: "uploads",
    to: "/upload", // Change this to the appropriate path or URL
    icon: <AiOutlineUpload className="text-black w-7 h-7 " />,
  },
];

export default menuLinks;
