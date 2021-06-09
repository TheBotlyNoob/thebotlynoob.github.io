const brain = require('brain.js'),
  fetch = require('node-fetch')

async function trainAI() {
    console.log(new brain.recurrent.LSTM().train((await (await fetch('https://raw.githubusercontent.com/dwyl/quotes/master/quotes.json')).json()).map(quote => quote.text), {
      iterations: 2000,
      log: console.log,
      errorThresh: 0.011,
    }));
  }

  trainAI()
