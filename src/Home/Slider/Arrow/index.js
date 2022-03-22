import React from "react";
import ArrowLeft from "./ArrowLeft.svg";
import ArrowRight from "./ArrowRight.svg";
import "./styles.scss";

const Arrow = (direction) => {

    return (
        <span className={(direction.direction === "left") ? "arrowLeft" : "arrowRight" } onClick={direction.handleClick}>
            <div className="background"></div>
            <div className="arrowBox" >
                <img src={(direction.direction === "left") ? ArrowLeft : ArrowRight } alt="" />
            </div>
        </span>
    );
}
export default Arrow;