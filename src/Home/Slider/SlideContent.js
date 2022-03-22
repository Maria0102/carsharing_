import React, {useContext} from "react";
import {SlideContext} from "./SlideContext";
import "./styles.scss";

const SlideContent = () => {
    const {currentSlide, CurrentSlideStyleButton} = useContext(SlideContext);

    return (
        <div className="slideContent">
            <h3 className="slideName">{currentSlide.name}</h3>
            <span className="slideText">{currentSlide.text}</span>
            <input style={CurrentSlideStyleButton} type="button" value="Подробнее"/>
        </div>
    );
}
export default SlideContent;