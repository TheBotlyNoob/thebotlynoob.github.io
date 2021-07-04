require('dotenv').config({ path: `${__dirname}/.env` });

const fs = require('graceful-fs'),
  glob = require('glob-promise'),
  fetch = require('node-fetch'),
  NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

emojis();

// Set webpack config

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()]
  });
};

async function emojis() {
  // Set the emojis
  const emojis = await (
    await fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')
  ).json();

  emojis.map((i) =>
    i.aliases.map(async (j) =>
      (await glob('src/**/*', { nodir: true })).map(async (file) => {
        if (
          ['css', 'js', 'html', 'ts', 'tsx', 'jsx'].includes(
            file.substring(file.lastIndexOf('.') + 1)
          )
        ) {
          fs.writeFileSync(
            file,
            fs
              .readFileSync(file)
              .toString()
              .replace(
                new RegExp(
                  `:${j.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')}:`,
                  'g'
                ),
                `<span role='img' aria-label='${j}'>${i.emoji}</span>`
              )
          );
        }
      })
    )
  );
}
