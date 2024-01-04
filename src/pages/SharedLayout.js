import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default SharedLayout;
