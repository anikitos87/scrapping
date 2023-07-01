

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

  let hCodedPart = [
    { partNo="P582-006", cdwPrice="21.99", cdwgPrice="21.94" },
    { partNo="P582-006-V2", cdwPrice="28.99", cdwgPrice="28.92" },
    { partNo="PA-BT-002", cdwPrice="133.99", cdwgPrice="133.66" },
    { partNo="UCSB-MLOM-40G-04", cdwPrice="814.99", cdwgPrice="812.95" },
    { partNo="UCSB-MLOM-40G-03", cdwPrice="848.99", cdwgPrice="846.87" }]


  for (let i = 0; i < hCodedPart.length; i++) {
    let part = req.query.part;
    if (part == hCodedPart[i].partNo) {
      res.json([{ value: 1, label: 'Cdw', price: hCodedPart[i].cdwPrice },
      { value: 2, label: 'Cdwg', price: hCodedPart[i].cdwgPrice }])
      return

    }

  }


  console.log("Request")
  let cdwPrice = "Unable to fetch.";
  let cdwgPrice = "Unable to fetch.";

  try {
    cdwPrice = await fetchPriceCDW(req.query.part);
  }
  catch (e) {
    console.log(e)

  }
  try {
    cdwgPrice = await fetchPriceCDWG(req.query.part);
  }
  catch (e) {
    console.log(e)
  }

  res.json([{ value: 1, label: 'Cdw', price: cdwPrice },
  { value: 2, label: 'Cdwg', price: cdwgPrice }])




  





});



app.listen(4000);