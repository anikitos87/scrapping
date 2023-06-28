

import express from "express";
import puppeteer from "puppeteer";
import { fetchPriceCDW } from "./CDW.js";
import { fetchPriceCDWG } from "./CDWG.js";
import { fetchPriceStapels } from "./Stapels.js";
import { fetchPriceDell } from "./Dell.js";
import cors from 'cors'



const app = express();
app.use(cors())


app.get('/price', async function (req, res) {
  // res.json([
  //   { value: 1,label:'Cdw',price:"300" },
  // { value: 2,label:'$Cdwg',price:"350" },
  // { value:3, label:'Dell',price:"$300" },
  // { value:4, label:'Staples',price:"300" }])

  // debugger;



  if (req.query.id == "1") {
    console.log("Request")
    let cdwPrice = "Unable to fetch.";

    cdwPrice = await fetchPriceCDW(req.query.part);
    res.json({ value: 1, label: 'Cdw', price: cdwPrice })







  }
  if (req.query.id == "2") {
    console.log("Request")
    let cdwgPrice = "Unable to fetch.";

    cdwgPrice = await fetchPriceCDW(req.query.part);
    res.json({ value: 2, label: 'Cdwg', price: cdwgPrice })

  }






});



app.listen(4000);