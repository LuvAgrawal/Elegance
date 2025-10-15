import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
