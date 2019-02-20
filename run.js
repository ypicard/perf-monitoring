const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true, typeInterval: 1 });
const { URLS } = require('./urls')

let results = {};
URLS.forEach(el => (results[el.name] = {}));

nightmare
  // login on prod
  .goto('https://mediadashtool.com/#/login')
  .type('input[type=email]', 'yann.picard@ekimetrics.com')
  .type('input[type=password]', 'Testtest21')
  .click('.login-button')
  .wait('#title-dashboard')
  // login on dev
  .goto('https://axamediatool-dev.herokuapp.com/#/login')
  .type('#email', 'yann.picard@ekimetrics.com')
  .type('#password', 'Testtest21')
  .click('.btn.btn-primary')
  .wait('h3')

  // test each page
  .then(async () => {
    for (var i = 0; i < URLS.length; i++) {
      let el = URLS[i];
      console.log(el.name + '...');
      for (var j = 0; j < el.links.length; j++) {
        let link = el.links[j];
        let startTime = new Date();
        await nightmare.goto(link.url).wait(link.wait);
        let timeDiff = new Date() - startTime;
        results[el.name][link.env] = timeDiff;
      }
    }
  })
  .then(async _ => {
    await Object.keys(results).forEach(key => {
      results[key]['diff'] = results[key]['staging'] - results[key]['prod'];
    });

    let table = [];
    for (var key in results) {
      table.push({
        name: key,
        prod: results[key].prod,
        staging: results[key].staging,
        diff: results[key].diff
      });
    }
    table.push({
      name: 'SUMMARY',
      prod: avg(Object.keys(results).map(k => results[k].prod)),
      staging: avg(Object.keys(results).map(k => results[k].staging)),
      diff: avg(Object.keys(results).map(k => results[k].diff))
    });
    console.table(table);
  })
  .catch(error => {
    console.error('Search failed:', error);
  });

function avg(array) {
  return array.reduce((acc, el) => acc + el, 0) / array.length;
}
