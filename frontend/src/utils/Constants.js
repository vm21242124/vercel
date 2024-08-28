export const GITHUB_CLIENT_ID = `${import.meta.env.VITE_GITHUB_CLIENT_ID}`;
export const GITHUB_CLIENT_SECRET = `${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`;
export const GITHUB_CALLBACK_URL = 'http://your_site.com/auth/github/callback';
export const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;