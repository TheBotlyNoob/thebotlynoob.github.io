"use strict";

const fs = require("fs"),
        babel = require("@babel/core"),
        jsmini = require("javascript-minifier").minify,
        cssmini = require("csso").minify,
        htmlmini = require("html-crush").crush;

const js = babel.transformFileSync("assets/js/script.js").code,
        css = fs.readFileSync("assets/css/styles.css").toString(),
        html = fs.readFileSync("index.dev.html").toString();

const cssMinified = cssmini(css).css,
      htmlMinified = htmlmini(html).result;

jsmini(js).then(code => fs.writeFileSync("assets/js/script.min.js", code))

fs.writeFileSync("assets/css/styles.min.css", cssMinified);
fs.writeFileSync("index.html", htmlMinified);