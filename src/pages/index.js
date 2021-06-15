import React, { useEffect } from 'react';
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
    </Layout>
  );
};
