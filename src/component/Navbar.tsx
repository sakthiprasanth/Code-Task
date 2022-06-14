import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../Images/Stratforge.png";
import "./css/Home.css";

const Navbar = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#dfdfdf26",
        }}
      >
        <h3>
          <img src={Image} alt="" className="stratforge-icon" />
          <span className="heading" onClick={() => gotohome()}>
            Stratforge
          </span>
        </h3>
        <h3 className="Navbar_Heading">
          <Link to="/rocket">Rockets</Link>
        </h3>
        <h3 className="Navbar_Heading">
          <Link to="/launche">Launches</Link>
        </h3>
        <h3 className="Navbar_Heading">
          <Link to="/history">History</Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
