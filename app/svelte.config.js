import vercelAdapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: vercelAdapter({
            // specify the runtime version
            runtime: 'nodejs16.x' // or 'nodejs18.x' if you prefer
        }),

        // other kit options...
    }
};

export default config;
