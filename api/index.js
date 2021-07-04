const app = require('express')(),
  glob = require('glob-promise'),
  metaParser = require('markdown-yaml-metadata-parser');

app.get('/api/blogs', async (req, res) => {
  var data = [];

  (await glob('../src/posts/**/*')).map(async (file) =>
    data.push(metaParser(fs.readFileSync(file, { encoding: 'utf8' })).metadata)
  );

  res.json(data);
});

app.get('/api/fonts', async (req, res) => {
  const fonts = (await glob('../static/fonts/*/')).map((font) =>
    font.replace('../static/fonts/', '')
  );

  fs.writeFileSync(
    '../src/styles/fonts.css',
    fonts
      .map((font) => `@import url('../../static/fonts/${font}index.min.css')`)
      .join(';')
  );
  fs.writeFileSync(
    '../static/fonts/fonts.css',
    fonts.map((font) => `@import url('./${font}index.min.css')`).join(';')
  );

  res.json(fonts);
});

app.get('/api/pages', (req, res) => {
  const pages = (await glob('../src/pages/**/*', { nodir: true }))
    .map((page) => page.replace('../src/pages', '').replace('.js', ''))
    .filter(
      (page) =>
        !(page.includes('{') || page.includes('index') || page.includes('404'))
    );

  res.json(pages);
});

module.exports = app;
