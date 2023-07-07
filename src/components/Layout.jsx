import React from "react";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { req } from "../methods";
import Footer from "./Footer/Footer";

const Layout = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      req("https://rickandmortyapi.com/api").then((info) => {
        setData(info);
      });
    }, []);
  return (
    <>
      <Navigation data={data}/>

      <Outlet/>

      <Footer/>
    </>
  );
};
export {Layout};