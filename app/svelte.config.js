import netlifyAdapter from '@sveltejs/adapter-netlify';
import { preprocess as vitePreprocess } from '@sveltejs/kit/dist/index.js';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: netlifyAdapter(),

        // Other kit options...
    }
};

export default config;
