import React from 'react';
import { Seo } from "../components";
import '../styles/main.css'

export default function mainPage () {
  return (
    <div id='main'>
      <Seo title="Home"/>
      <footer>
        <span>This Website Is Made In: <a href="https://gatsbyjs.com/">Gatsby.js</a>, And Is Open Source On: <a href="https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/">GitHub</a>!</span>
      </footer>
    </div>
  );
};
