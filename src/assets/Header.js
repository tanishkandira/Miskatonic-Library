import React from "react";
import GithubLogo from "../img/Github.svg";
import "../styles/style.css";
const Header = () => {
  
  return (
    <>
      <div className="header">
        <a
          className="github-icon"
          href="https://github.com/tanishkandira"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "5rem",
              width: "5rem",
              padding: "3px",
              cursor: "pointer",
              color: "#db4437",
            }}
            src={GithubLogo}
            alt="github-icon"
          />
        </a>
        <strong>
          <h2   
            className="heading-name"
            style={{
              marginBottom: 50,
              textAlign: "center",
              textShadow: "3px 3px 3px #444"
            }}
          >
            📖 Miskatonic-Library of Wicca 
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
