import React from 'react';
import { Seo } from '../components';
import { Octokit, log } from '../utils';
import '../styles/main.css';

const octokit = Octokit();

export default function MainPage () {
  return (
    <div id='main'>
      <Seo title='Home'/>
      <footer>
        <span>This Website Is Made With :heart: In: <a href='https://gatsbyjs.com/'>Gatsby.js</a>, And Is Open Source On: <a href='https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/'>GitHub</a>!</span>
      </footer>
    </div>
  );
};
