import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
function Main() {
  return (
    <main>
      <h1>Каршеринг</h1>
      <h2>Need for drive</h2>
      <p>Поминутная аренда авто твоего города</p>
      <Link to={{ pathname: `order/location` }}>
          <input type="button" value="Забронировать"/>
      </Link>
    </main>
  );
}
export default Main;