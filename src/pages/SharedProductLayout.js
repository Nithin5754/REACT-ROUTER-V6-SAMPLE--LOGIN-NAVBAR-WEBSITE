import {  Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SharedProductLayout = () => {
  return (
    <>
    
<h1>products</h1>
      <section className="section">
        <Outlet />
      </section>
  
    </>
  );
};
export default SharedProductLayout;
