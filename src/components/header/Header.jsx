import React, { useState } from "react";
import "./header.css";
import Heroimg from "../../assets/hero-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <div className="header">
        <img src={Heroimg} alt="" />

        <div className="header-details">
          <div className="headercontent">
            <h1 className="headerTitle">Wanderlust days and cozy nights</h1>
            <p className="headerDesc">Choose from cabins, houses and more</p>
            <button className="headerBtn">Sign in / Register</button>
          </div>
          <div className="headerSearch head">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going ?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem calender ">
            
              <input type="date" className="headerdate" />
            </div>
            <div className="headerSearchItem headerSearch-sm">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>

                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItembtn">
              <button className="headerBtn btn2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
