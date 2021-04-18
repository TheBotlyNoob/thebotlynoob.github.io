"use strict";

const fs = require("fs"),
        babel = require("@babel/core"),
        jsmini = require("uglify-js").minify,
        cssmini = require("csso").minify,
        htmlmini = require("html-crush").crush;

const js = babel.transformFileSync("assets/js/script.js").code,
        css = fs.readFileSync("assets/css/styles.css").toString(),
        html = fs.readFileSync("index.dev.html").toString();

console.log(js);
console.log("----");
console.log(css);
console.log("----");
console.log(html);

const jsMinified = jsmini(js).code,
      cssMinified = cssmini(css).css,
      htmlMinified = htmlmini(html).result;

fs.writeFileSync("assets/js/script.min.js", jsMinified);
fs.writeFileSync("assets/css/styles.css", cssMinified);
fs.writeFileSync("index.html", htmlMinified);