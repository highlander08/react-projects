import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import {  useGlobalContext } from "./context";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  // OU const { openSidebar, openModal } = useContext(AppContext)
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        mostrar Modal
      </button>
    </main>
  );
};

export default Home;
