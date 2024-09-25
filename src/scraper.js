const axios = require('axios');
const cheerio = require('cheerio');

async function getLaptops() {
    const url = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const laptops = [];
    $('div.thumbnail').each((index, element) => {
        const laptop = {};
        laptop.name = $(element).find('h4 > a').text().trim();
        laptop.price = $(element).find('.price').text().trim();
        laptop.description = $(element).find('p').text().trim();
        laptop.image = $(element).find('img').attr('src');
        laptop.url = $(element).find('a').attr('href');
        laptops.push(laptop);
    });

    return laptops;
}

module.exports = { getLaptops };
