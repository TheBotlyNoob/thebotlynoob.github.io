require('dotenv').config({ path: '.env' });

const fs = require('fs'),
  glob = require('glob').sync,
  fetch = require('node-fetch');

(async () => {
  // Set some data for the fonts
  fs.writeFileSync('static/fonts.json', JSON.stringify(fs.readdirSync('static/fonts')));

  // Set the emojis
  const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());

  emojis.map(i => i.aliases.map(j => glob('src/**/*', { nodir: true }).map(file => {
    if (['css', 'js', 'html', 'ts', 'tsx', 'jsx'].includes(file.substring(file.lastIndexOf('.') + 1))) {
      fs.writeFileSync(file, fs.readFileSync(file).toString().replace(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g'), `<span role='img' aria-label='emoji'>${i.emoji}</span>`))
    }
  })))
})();
