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
  "minifyURLs": true,
}

const fs = require("fs"),
        jsmini = require("uglify-js").minify,
        cssmini = require("csso").minify,
        htmlmini = require("html-minifier").minify;

const js = fs.readFileSync("assets/js/script.js").toString(),
        css = fs.readFileSync("assets/css/styles.css").toString(),
        html = fs.readFileSync("index.dev.html").toString();

const jsMinified = jsmini(js).code.toString(),
      cssMinified = cssmini(css).css.toString(),
      htmlMinified = htmlmini(html, htmlminiOpts).toString();

console.log("Minified JavaScript Contents:");
console.log("---------------");
console.log(jsMinified);
console.log("---------------");
console.log("Minified CSS Contents:");
console.log("---------------");
console.log(cssMinified);
console.log("---------------");
console.log("Minified HTML Contents:");
console.log("---------------");
console.log(htmlMinified);

fs.writeFileSync(fs.openSync("assets/js/script.min.js", "w"), jsMinified);
console.log("Minified JavaScript Saved!");

fs.writeFileSync(fs.openSync("assets/css/styles.min.css", "w"), cssMinified);
console.log("Minified CSS Saved!");

fs.writeFileSync(fs.openSync("index.html", "w"), htmlMinified);
console.log("Minified HTML Saved!");
