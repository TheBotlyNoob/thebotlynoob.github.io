import { Octokit } from '@octokit/rest';
import { log } from '.';

export default function octokit (apiKey = process.env.GATSBY_GITHUB_API_KEY, ...data: any[]): Object {
    return new Octokit ({
        userAgent: 'JJ',
        ...data,
        auth: apiKey,
        log,
    })
}
