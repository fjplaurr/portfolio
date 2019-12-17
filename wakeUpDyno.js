const fetch = require('node-fetch');

const wakeUpDyno = (url, interval = 28) => {
  const milliseconds = interval * 60000;
  setTimeout(() => {
    fetch(url).then((res) => console.log(`Fetching ${res}.`));
  }, milliseconds);
};

module.exports = wakeUpDyno;
