import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Header() {
  return (
    <header>
        <div className="content">
          <Link to="/">Need for drive</Link>
          <p href="#">Ульяновск</p>
        </div>
    </header>
  );
}
export default Header;