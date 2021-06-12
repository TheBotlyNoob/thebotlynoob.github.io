require('dotenv').config({ path: '.env' });

const fs = require('graceful-fs'),
  glob = require('glob-promise'),
  fetch = require('node-fetch'),
  metaParser = require('markdown-yaml-metadata-parser'),
  NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

emojis()
md()
fonts()

/* Set WebPack Config */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new NodePolyfillPlugin()
    ]
  })
}

async function emojis() {
  // Set the emojis
  const emojis = (await (await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')).json());

  emojis.map(i => i.aliases.map(async j => (await glob('src/**/*', { nodir: true })).map(async file => {
    if (['css', 'js', 'html', 'ts', 'tsx', 'jsx'].includes(file.substring(file.lastIndexOf('.') + 1))) {
      fs.writeFileSync(file, fs.readFileSync(file).toString().replace(new RegExp(`:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`, 'g'), `<span role='img' aria-label='${j}'>${i.emoji}</span>`))
    }
  })))
};

async function md() {
  var data = [];

  (await glob('src/posts/**/*')).map(async file => data.push(metaParser(fs.readFileSync(file, { encoding: 'utf8' })).metadata))
  fs.writeFileSync('static/api/blogs.json', JSON.stringify(data))
}

async function fonts() {
    // Set some data for the fonts
    const fonts = await glob('static/fonts/*/');
    fs.writeFileSync('static/api/fonts.json', JSON.stringify(fonts));
    fs.writeFileSync('src/styles/fonts.css', fonts.map(font => `@import url('../../static/fonts/${font}/index.min.css')`).join(';'));
}
