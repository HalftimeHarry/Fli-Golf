import vercelAdapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	kit: {
		adapter: vercelAdapter(),
		
		// other kit options...
	}
};

export default config;
