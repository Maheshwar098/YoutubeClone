import React from "react";
import "./Navbar.css";
import logo from "./YouTube-icon.ico";
import Searchbar from "./Searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "../../App.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import { login } from "../../actions/auth.js";
function Navbar({ toggleDrawer }) {
  const CurrentUser = null;
  // const CurrentUser = {
  //   result: {
  //     email: "avantikaharale81@gmail.com",
  //     joinedOn: "2022-07-29",
  //   },
  // };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "768744350890-vk5ldk1amhpav5nnaecjei55ith1aeul.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const dispatch = useDispatch();
  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };
  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/"} className="logo_div_navbar">
          <img src={logo} alt="" />
          <p className="logo_title_navbar">Youtube</p>
        </Link>
      </div>
      <Searchbar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
        <p className="app_Box"></p>
      </div>

      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
            <div className="Channel_logo_App">
              <p className="fstChar_logo_App">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <GoogleLogin
              clientId={
                "768744350890-vk5ldk1amhpav5nnaecjei55ith1aeul.apps.googleusercontent.com"
              }
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
            <p className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
