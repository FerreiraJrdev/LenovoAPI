const express = require('express');
const { getLaptops } = require('./scraper');
const { getOrderedLaptops } = require('./laptopService');  

const app = express();
const port = 3000;

app.get('/laptops', async (req, res) => {
    const laptops = await getLaptops();
    res.json(laptops);
});

app.get('/ordered-laptops', async (req, res) => {
    const laptops = await getOrderedLaptops();
    res.json(laptops);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
