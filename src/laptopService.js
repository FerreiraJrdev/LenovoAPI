const { getLaptops } = require('./scraper');

async function getOrderedLaptops() {
    const laptops = await getLaptops();
    laptops.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    return laptops;
}

module.exports = { getOrderedLaptops };
