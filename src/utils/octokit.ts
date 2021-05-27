import { Octokit } from '@octokit/rest';
import { log } from '.';

export default function octokit (apiKey = process.env.GATSBY_GITHUB_API_KEY) {
    return new Octokit ({
        auth: apiKey,
        userAgent: 'JJ',
        log,
    })
}
