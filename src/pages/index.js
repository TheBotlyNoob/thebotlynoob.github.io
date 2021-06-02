import React, { useEffect } from 'react';
import { Seo } from '../components';
import { Octokit, log } from '../utils';
import '../styles/main.css';

const octokit = Octokit();

export default function MainPage () {
  useEffect(() => {
    octokit.rest.rateLimit.get().then(i => log.debug(`Requests:`, i.data.resources.core.limit));
  })
  return (
    <div id='main'>
      <Seo title='Home'/>
    </div>
  );
};
