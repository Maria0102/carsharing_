import React, {createContext, useState, useEffect} from "react";
//import {v1 as uuid} from "uuid"; 
import PropTypes from "prop-types";

export const SlideContext = createContext();

const slides = ([
    { name: 'Бесплатная парковка', text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.', img: './img/img1.png', btn: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)" },
    { name: 'Страховка', text: 'Полная страховка страховка автомобиля', img: './img/img2.png', btn: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)"},
    { name: 'Бензин', text: 'Полный бак на любой заправке города за наш счёт', img: './img/img3.png', btn: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"},
    { name: 'Обслуживание', text: 'Автомобиль проходит еженедельное ТО', img: './img/img4.png', btn: "linear-gradient(90deg, #281349 0%, #720C7B 100%)"}
]);

const SlideContextProvider = (props) => {

    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState({ index: 0, name: slides[0].name, text: slides[0].text, btn: slides[0].btn });
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [CurrentSlideStyleButton, setCurrentSlideStyleButton] = useState({});

    useEffect(() => {
        setThumnails(slides);

        setCurrentSlideStyle({
            backgroundImage: "url('"+slides[currentSlide.index].img+"')"
        });
        setCurrentSlideStyleButton({
            background: ""+slides[currentSlide.index].btn+""
        });
    }, [thumbnails, currentSlide]);

    const byindex = i => {
        setCurrentSlide({index: i, name: thumbnails[i].name, text: thumbnails[i].text});
    }

    const next = () => {
        if(currentSlide.index === thumbnails.length-1){
            setCurrentSlide({index: 0, name: thumbnails[0].name, text: thumbnails[0].text});
        }else{
            setCurrentSlide({index: currentSlide.index+1, name: thumbnails[currentSlide.index+1].name, text: thumbnails[currentSlide.index+1].text});
        }
    }

    const previous = () => {
        if ( currentSlide.index > 0 ) {
            setCurrentSlide({index: currentSlide.index-1, name: thumbnails[currentSlide.index-1].name, text: thumbnails[currentSlide.index-1].text});
        } else {
            setCurrentSlide({index: thumbnails.length-1, name: thumbnails[thumbnails.length-1].name, text: thumbnails[thumbnails.length-1].text});
        }
    }

    return (
        <SlideContext.Provider value={{thumbnails, currentSlide, currentSlideStyle, CurrentSlideStyleButton,
        byindex, next, previous }}>
            { props.children }
        </SlideContext.Provider>   
    );
};

SlideContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default SlideContextProvider;