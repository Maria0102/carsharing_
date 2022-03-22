import React from 'react';
import { Routes, Route, Navigate, Link } from "react-router-dom";

import AuthLayout from "./Layouts/AuthLayout";

import OrderLayout from "./Layouts/OrderLayout";
import Location from "./Order/Location/index";
import Model from "./Order/Model/index";
import Additional from "./Order/Additional/index";
import Total from "./Order/Total/index";

const Home = () => <p>Home <Link className="Link" to={{ pathname: `/order/location` }} >Order</Link></p>;

const Login = () => <p>Login</p>;
const NotFound = () => <h1>Not Found</h1>;

const Layouts = () => {
    console.log(window.location);
  return (
    <Routes>
        {/*<Route path="/" element={<Navigate replace to="/app/home" />} />*/}
      <Route index element={ <Home /> } />
      <Route path="order" element={<OrderLayout />} >
        <Route path="location" element={<Location id="0" />} />
        <Route path="model" element={<Model id="1" />} />
        <Route path="additional" element={<Additional id="2" />} />
        <Route path="total" element={<Total id="3" />} />
      </Route>
      <Route path="/auth" element={<AuthLayout /> } >
        <Route path=":login" element={ <Login /> } />
        <Route path="/auth" element={<Navigate replace to="/auth/login" />} />
      </Route>

      <Route path="*" element={ <NotFound/> } />

    </Routes>
  );
}
export default Layouts;