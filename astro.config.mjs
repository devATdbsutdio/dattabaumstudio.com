import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [react()],
	security: {
		checkOrigin: false,
	},
	adapter: vercel({
		imageService: false,
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
