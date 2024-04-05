import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    setToggleDrawerSidebar((prevState) => ({
      display: prevState.display === "none" ? "flex" : "none",
    }));
  };

  return (
    <>
      <Router>
        <Navbar toggleDrawer={toggleDrawer} />
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />

        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
