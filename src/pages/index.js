import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components';
import { Layout } from '../components';
import { Octokit, log } from '../utils';
import '../styles/main.css';

const octokit = Octokit();

export default function MainPage () {
  useEffect(() => {
    octokit.rest.rateLimit.get().then(i => i.data.resources.core.limit ? log.info(`Requests: ${i.data.resources.core.limit}`) : log.error('Your Out Of GitHub Requests! Some Things Will Not Work!'));
  })
  return (
    <Layout>
      <Seo title='Home'/>
        <h1>
          Hi, I'm Jay!
        </h1>
        <h3>
          I am a passionate developer, I like to use web technologies like React, CSS, And JavaScript. I've Worked On Many Projects, Here are my current ones:
        </h3>
        <ul>
          <li>Freedom App - A Social Media Platform - <Link to="https://git.opensrc.services/molai.dev/freedom-app">Git Repository</Link></li>
          <li>MolaiBOT - A Discord Bot - <Link to="https://github.com/mtgsquad/molaibot">Git Repository</Link></li>
        </ul>
    </Layout>
  );
};
