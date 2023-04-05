import React from 'react';
import ReactDOM from 'react-dom/client';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// MYSQL
const express = require('express');
const {getAllProducts} = require("./dbFiles/dbQueries");
const app = express();

app.use(express.json());

app.get("/", async function (request, response){

  try{
    const [results] = await getAllProducts()
    response.send({success: true, results})
  }
  catch(error){
    response.status(500).send({
      success: false,
      error: "This didn't work",
    })
  }
})

app.listen(5001);