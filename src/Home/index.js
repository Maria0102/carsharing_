import React from "react";
import Nav from "./Nav/index";
import Header from "./CentralPart/Header/index";
import Footer from "./CentralPart/Footer/index";
import Main from "./CentralPart/Main/index";
import SlideShow from "./Slider/index";

import "./styles.scss";

const data = [
  { name: 'Бесплатная парковка', text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.', img: '/img/img1.png', btn: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)" },
  { name: 'Страховка', text: 'Полная страховка страховка автомобиля', img: '/img/img2.png', btn: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)"},
  { name: 'Бензин', text: 'Полный бак на любой заправке города за наш счёт', img: '/img/img3.png', btn: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"},
  { name: 'Обслуживание', text: 'Автомобиль проходит еженедельное ТО', img: '/img/img4.png', btn: "linear-gradient(90deg, #281349 0%, #720C7B 100%)"}
]

function MainPage() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Main />
      <div id="br"></div>
      <Footer />
      <SlideShow slides={data} />
    </div>
  );
}
export default MainPage;
