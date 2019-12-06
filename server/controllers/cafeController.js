const fetch = require("node-fetch")
require('dotenv').config()

const cafeController = {};

cafeController.getCafes = (req,res,next) => {
    console.log("getting cafes")
    const baseUrl = `https://api.yelp.com/v3/businesses/search?term=coffee&location=LA`;
    fetch(
        baseUrl,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        }
    ).then(res => res.json())
     .then(data => {

         res.locals.coffeeHouses = [];
         for (let cafe of data.businesses){
            //  console.log("cafe", cafe)
             const coffeeShop = {
                 shopId: cafe.id,
                 shopName: cafe.name,
                 shopImg: cafe.image_url
             }
             res.locals.coffeeHouses.push(coffeeShop)
         }
         
         console.log("res.locs", res.locals.coffeeHouses)
     })
     .catch(err => {
        throw(err)
     })

    return next()
}

module.exports = cafeController;