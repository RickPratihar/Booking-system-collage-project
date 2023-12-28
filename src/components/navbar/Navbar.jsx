import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({type}) => {
  return (
    <div className="navbar">
      <div className="navContainer">
       {/* <Link> <span className="logo">Rss-Booking.com</span></Link> */}
       <Link to="/" className="logo"> <span className="logo">Rss-Booking.com</span></Link>
        <div className="navitems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>


     <div className="nav-header">
        <div className="nav-headerContainer">
          <div className="nav-headerList">

            <div className="headerListItem ">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
