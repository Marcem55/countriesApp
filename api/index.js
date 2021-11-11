//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    let aux = Country.findAll();
    if(!aux.length) {
      const apiCountries = (await axios.get('https://restcountries.com/v3/all')).data;
      // console.log(apiCountries);
      const allCountries = apiCountries.map(c => ({
        id: c.cca3,
        name: c.name.common,
        image: c.flags[0],
        capital: c.capital ? c.capital.join(', ') : '',
        continent: c.continents[0],
        subregion: c.subregion,
        area: c.area,
        population: c.population
      }));

      await Country.bulkCreate(allCountries);
      // console.log(allCountries);
    }
    console.log('Preloaded Countries');
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});
