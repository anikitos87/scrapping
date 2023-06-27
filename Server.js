

import express from "express";
import puppeteer from "puppeteer";
import { fetchPriceCDW } from "./CDW.js";
import { fetchPriceCDWG } from "./CDWG.js";
import { fetchPriceStapels } from "./Stapels.js";
import { fetchPriceDell } from "./Dell.js";
import { cors  } from "cors";

const app = express();
app.use(cors())


app.get('/price', async function(req, res) {
    res.json([
      { value: 1,label:'Cdw',price:"300" },
    { value: 2,label:'$Cdwg',price:"350" },
    { value:3, label:'Dell',price:"$300" },
    { value:4, label:'Staples',price:"300" }])

    debugger;

    // if(req.query.id=="0")
    // {
    //     let cdwPrice="Unable to fetch !";
    //     let cdwgPrice="Unable to fetch !";
    //     let dellPrice="Unable to fetch !";
    //     let staplesPrice="Unable to fetch !";

    //     try{
    //         if(cdwPrice)
    //            cdwPrice=await fetchPriceCDW(req.query.part);

    //     }
    //     catch(e){


    //     }
    //     try{
    //         if(cdwgPrice)
    //            cdwgPrice=await fetchPriceCDWG(req.query.part);

    //     }
    //     catch(e){

            
    //     }
    //     try{
    //         if(dellPrice)
    //            dellPrice=await fetchPriceDell(req.query.part);

    //     }
    //     catch(e){
            
    //     }
    //     try{
    //         if(staplesPrice)
    //             staplesPrice= await fetchPriceStapels(req.query.part);

    //     }
    //     catch(e){
            
            
    //     }
    //     res.status(200).send("CDW "+cdwPrice +" "+"CDWG "+cdwgPrice+ " "+"Staples "+staplesPrice+" Dell "+dellPrice);

    // }
  
    // if(req.query.id=="1")
    // {
    //     console.log("Request")
    //     let price="Unable to fetch.";
    //     try{
    //         price=  await fetchPriceCDW(req.query.part);
    //     }
    //     catch (e)
    //     {
           
    //     }
        
 
       
    //     res.status(200).send(price)
    // }
    // if(req.query.id=="2")
    // {
    //     console.log("Request")
    //     let price="Unable to fetch.";
    //     try{
    //         price=  await fetchPriceCDWG(req.query.part);
    //     }
    //     catch (e)
    //     {
           

    //     }
        
 
       
    //     res.status(200).send(price)

    // }

    // if(req.query.id=="3")
    // {
    //     console.log("Request")
    //     let price="Unable to fetch.";
    //     try{
    //         price=  await fetchPriceStapels(req.query.part);
    //     }
    //     catch (e)
    //     {
           

    //     }
        
 
       
    //     res.status(200).send(price)

    // }

    // if(req.query.id=="4")
    // {
    //     console.log("Request")
    //     let price="Unable to fetch.";
    //     try{
    //         price=  await fetchPriceDell(req.query.part);
    //     }
    //     catch (e)
    //     {
    //         price=e;

    //     }
        
 
       
    //     res.status(200).send(price)

    // }

    
  });


 
app.listen(4000);