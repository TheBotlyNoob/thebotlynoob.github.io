import { Octokit } from '@octokit/rest';
import { log } from '.';

export default function octokit (apiKey = process.env.githubApiKey) {
    log.debug(`Api Key Is: ${apiKey}`)
    if (!apiKey) {
        return new Octokit ({
            userAgent: 'JJ',
            log,
        })
    } else {
        return new Octokit ({
            auth: apiKey,
            userAgent: 'JJ',
            log,
        })
    }
}
