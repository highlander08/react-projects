import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper-show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({links, page}, index) => {
            return (
              <article key={index}>
                <h4>{page}</h4>

                <div className="sidebar-sublinks">
                  {links.map(({url, icon, label}, index) => {
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
