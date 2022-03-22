import React from "react";
import SlideContextProvider from "./SlideContext";
import SlideHolder from "./SlideHolder";

import "./styles.scss";

const SlideShow = () => {

    return (
        <section className="slideShow">
            <SlideContextProvider>
                <SlideHolder />
            </SlideContextProvider>
        </section>
    );
};
export default SlideShow;