import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  manifest: {
    name: 'Intelligent Text Scraper',
    description: 'A browser extension to intelligently scrape text from web pages',
    version: '1.0.0',
    permissions: ['activeTab'],
  },
  vite: () => ({
    plugins: [vue()],
  }),
});