import { Outlet } from "react-router-dom";
import Navbar from "./shared/components/Navbar/Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
