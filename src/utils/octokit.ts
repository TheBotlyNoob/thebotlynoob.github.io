import { Octokit } from '@octokit/rest';
import { log } from '.';

export default function octokit(...data: any[]): Object {
  return new Octokit({
    userAgent: 'JJ',
    auth: process.env.GATSBY_GITHUB_API_KEY,
    ...data,
    log
  });
}
