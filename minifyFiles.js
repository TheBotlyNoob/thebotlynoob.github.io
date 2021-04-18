"use strict";

const fs = require("fs"),
        minify = require('minify');

const minifierOptions = {
    html: {
        removeAttributeQuotes: false,
    },
    css: {
        compatibility: '*',
    },
    js: {
        ecma: 5,
    },
};

minify.js('assets/js/script.js', minifierOptions, (error, stream) => {

  var streamWrite = fs.createWriteStream('assets/js/script.min.js');

  if (error)
      throw error.message;
  else
      stream.pipe(streamWrite);
      console.log("Minified Javascript Saved!")
});

minify.css('assets/css/styles.css', minifierOptions, (error, stream) => {

  if (error) throw error.message;

  var streamWrite = fs.createWriteStream('assets/css/styles.min.css');

      stream.pipe(streamWrite);
      console.log("Minified CSS Saved!")
});

minify.html('index.dev.html', minifierOptions, (error, stream) => {

  if (error) throw error.message;

  var streamWrite = fs.createWriteStream('index.html');

      stream.pipe(streamWrite);
      console.log("Minified HTML Saved!")
});
