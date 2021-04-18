"use strict";

const fs = require("fs"),
        babel = require("@babel/core"),
        jsmini = require("uglify-js").minify,
        cssmini = require("csso").minify,
        htmlmini = require("html-crush").crush;

const js = babel.transformFileSync("assets/js/script.js").code,
        css = fs.readFileSync("assets/css/styles.css").toString(),
        html = fs.readFileSync("index.dev.html").toString();

const jsMinified = jsmini(js).code.toString(),
      cssMinified = cssmini(css).css.toString(),
      htmlMinified = htmlmini(html).result.toString();

fs.writeFileSync("assets/js/script.min.js", jsMinified);
fs.writeFileSync("assets/css/styles.css", cssMinified);
fs.writeFileSync("index.html", htmlMinified);