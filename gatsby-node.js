require('dotenv').config({ path: '.env' });

const fs = require('fs'),
  glob = require('glob').sync,
  fetch = require('node-fetch'),
  metaParser = require('markdown-yaml-metadata-parser'),
  NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

trainAI()
emojis()
md()

/* Set WebPack Config */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new NodePolyfillPlugin()
    ]
  })
}

async function emojis() {
  // Set some data for the fonts
  fs.writeFileSync('static/api/fonts.json', JSON.stringify(fs.readdirSync('static/fonts')));

  // Set the emojis
  const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());

  emojis.map(i => i.aliases.map(j => glob('src/**/*', { nodir: true }).map(file => {
    if (['css', 'js', 'html', 'ts', 'tsx', 'jsx'].includes(file.substring(file.lastIndexOf('.') + 1))) {
      fs.writeFileSync(file, fs.readFileSync(file).toString().replace(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g'), `<span role='img' aria-label='${j}'>${i.emoji}</span>`))
    }
  })))
};

function md() {
  var data = [];

  glob('src/posts/**/*').map(file => data.push(metaParser(fs.readFileSync(file, { encoding: 'utf8' })).metadata))
  fs.writeFileSync('static/api/blogs.json', JSON.stringify(data))
}
