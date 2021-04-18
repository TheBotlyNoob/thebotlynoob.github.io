"use strict";

const fs = require("fs"),
        babel = require("@babel/core"),
        jsmini = require("uglify-js").minify,
        cssmini = require("html-crush").crush,
        htmlmini = require("html-crush").crush;

const js = babel.transformFileSync("assets/js/script.js").code,
        css = fs.readFileSync("assets/css/styles.css").toString(),
        html = fs.readFileSync("index.dev.html").toString();

const jsMinified = jsmini(js).toString(),
      cssMinified = cssmini(css, crushOpts).result,
      htmlMinified = htmlmini(html, crushOpts).result;

console.log(jsMinified)
fs.writeFileSync("assets/js/script.min.js", jsMinified);
console.log("Minified JavaScript Saved!");

fs.writeFileSync("assets/css/styles.min.css", cssMinified);
console.log("Minified CSS Saved!");

fs.writeFileSync("index.html", htmlMinified);
console.log("Minified HTML Saved!");
