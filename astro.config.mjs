import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        starlight({
            title: 'Way Proper',
            description: 'wayproper life.',
            logo: {
                src: './src/assets/images/man-alone-leans.png',
                alt: './src/assets/images/isBrandon-logo.png'
            },
            customCss: ['./src/styles/globals.css']
        })
    ],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
