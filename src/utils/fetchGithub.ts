import fetch from 'sync-fetch';

/**
 * 
 * @param method The Method To Fetch The GitHub API
 * @param url 
 * @param data 
 * @param apiKey 
 * @returns 
 */
export default function fetchGithub (method: String, url: String, data: Object, apiKey = process.env.githubApiKey) {
    return fetch(`https://api.github.com/${url}`, { 
        method, 
        headers: {
            'Authorization': `Token ${apiKey}`
        }, 
        ...data})
}
