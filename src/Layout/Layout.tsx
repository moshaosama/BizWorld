import { Outlet } from "react-router";
import { Footer, Navbar } from "../Components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
