import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import {createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-family: 'Roboto';
}
:root{
  font-family: 'Karla';
  font-weight: 700;
}

`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
