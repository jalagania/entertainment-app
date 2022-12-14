import Sidebar from "../pages/Sidebar";
import Attribution from "../pages/Attribution";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <Attribution />
    </div>
  );
}

export default SharedLayout;
