import React, {useContext} from "react";
import {SlideContext} from "./SlideContext";
import "./styles.scss";

const SlideDots = (direction) => {
    const {currentSlide, byindex} = useContext(SlideContext);

    return (
        <div className="slideDots">
            <span className={(currentSlide.index === 0) ? "dot active" : "dot"} onClick={() => byindex(0)}></span>
            <span className={(currentSlide.index === 1) ? "dot active" : "dot"} onClick={() => byindex(1)}></span>
            <span className={(currentSlide.index === 2) ? "dot active" : "dot"} onClick={() => byindex(2)}></span>
            <span className={(currentSlide.index === 3) ? "dot active" : "dot"} onClick={() => byindex(3)}></span>
        </div>
    );
}
export default SlideDots;