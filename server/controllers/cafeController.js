const fetch = require('node-fetch');
require('dotenv').config();

const cafeController = {};

cafeController.getCafes = (req, res, next) => {
  console.log('getting cafes');
  const baseUrl = 'https://api.yelp.com/v3/businesses/search?term=coffee&location=LA';
  fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.businesses);
      res.locals.coffeeHouses = [];
      for (const cafe of data.businesses) {
        //  console.log("cafe", cafe)
        const coffeeShop = {
          shopId: cafe.id,
          shopName: cafe.name,
          shopImg: cafe.image_url,
          shopAddress: cafe.location.address1,
          shopCity: cafe.location.city,
          shopZip: cafe.location.zip_code,
          shopPhone: cafe.phone,
        };
        res.locals.coffeeHouses.push(coffeeShop);
      }
      console.log('res.locs', res.locals.coffeeHouses);
      return next();
    })
    .catch((err) => next({ err: 'There is an error in the get Cafes handler' }));
};

module.exports = cafeController;
