const axios = require('axios');



async function loadJson(url) { // (1)
  
    let response = await axios(url);
  
    if (response.status == 200) {
      let json = await response; // (3)
      console.log(response)
    };
    // throw new Error(response.status);
  }

loadJson('https://fakestoreapi.com/products/').catch(console.log()); // Error: 404 (4)
