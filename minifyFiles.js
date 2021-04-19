"use strict";

const htmlminiOpts = {
  "removeRedundantAttributes": true,
  "removeOptionalTags": true,
  "removeComments": true,
  "quoteCharacter": '"',
  "caseSensitive": true,
  "collapseWhitespace": true,
  "continueOnParseError": true,
  "minifyCSS": true,
  "minifyJS": true,
  "minifyURLs": true
};

const fs = require("fs"),
      jsmini = require("uglify-js").minify,
      cssmini = require("csso").minify,
      htmlmini = require("html-minifier").minify;

const getFilesFromPath = (path, extension) => {
  return fs.readdirSync(path).filter(file => file.match(new RegExp(`.*\.(${extension})$`, 'ig')));
},
      readFile = filePath => {
  return fs.readFileSync(filePath).toString();
};

const jsFiles = getFilesFromPath("assets/js", ".js"),
      cssFiles = getFilesFromPath("assets/css", ".css"),
      html = readFile("index.dev.html").toString();

for (var i of jsFiles) {
  if (!i.endsWith(".min.js")) {
    var filePath = `assets/js/${i}`;
    fs.writeFileSync(filePath.replace(".js", ".min.js"), jsmini(readFile(filePath)).code.toString());
  }
}

console.log("Minified JavaScript Saved!");

for (var i of cssFiles) {
    if (!i.endsWith(".min.css")) {
      var filePath = `assets/css/${i}`;
      fs.writeFileSync(filePath.replace(".css", ".min.css"), cssmini(readFile(filePath)).css.toString());
    }
}

console.log("Minified CSS Saved!");

fs.writeFileSync("index.html", htmlmini(html, htmlminiOpts).toString());

console.log("Minified HTML Saved!")
