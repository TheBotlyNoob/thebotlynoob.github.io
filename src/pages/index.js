import React, { useEffect } from 'react';
import { Seo } from '../components';
import { octokit, log } from '../utils';
import '../styles/main.css';

export default function MainPage () {
  useEffect(()=>{
    log.debug(`User Is: ${octokit().rest.users.getByUsername('TheBotlyNoob').then(i => console.log(i))}`);
  }, [])
  return (
    <div id='main'>
      <Seo title='Home'/>
      <footer>
        <span>This Website Is Made In: <a href='https://gatsbyjs.com/'>Gatsby.js</a>, And Is Open Source On: <a href='https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/'>GitHub</a>!</span>
      </footer>
    </div>
  );
};
