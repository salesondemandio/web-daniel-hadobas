import { agentReady } from '../agent-ready/cloudflare-pages.mjs';

// Serve the markdown copy of a page to AI agents that ask for it (Accept: text/markdown).
// POST requests (the /api/lead form) pass straight through to their function.
export const onRequest = [agentReady];
