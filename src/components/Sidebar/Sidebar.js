import React, { useState } from "react";
import "./Sidebar.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/services",
    name: "Servicehome",
    icon: <FaHome />,
  },
  {
    path: "/services",
    name: "servicehome",
    icon: <FaHome />,
  },
  {
    path: "/ser",
    name: "h",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
];
const Sidebar = ({ children }) => {
  console.log(children);
  const [isopen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isopen);
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isopen ? "250px" : "37px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar"
      >
        <div className="top-section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div>
          {isopen && (
            <h3 className="salon-name">
              Monsoon salon Monsoon salon Monsoon salon Monsoon salon Monsoon
              salon Monsoon salon Monsoon salon Monsoon salon Monsoon salon
              Monsoon salon Monsoon salon Monsoon salon
            </h3>
          )}
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{route.icon}</div>
              <div className="link-text">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
