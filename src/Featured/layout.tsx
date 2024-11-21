import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";

const Layout = () => {
  return (
    <div>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
