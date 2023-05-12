import { defineConfig } from 'dumi';

export default defineConfig({
  // TODO remove base after docs.zan.top ready
  base: '/ZanDocs',
  favicons: ['https://a.zan.top/static/favicon.png'],
  locales: [{ id: 'en-US', name: 'English' }],
  runtimePublicPath: {},
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://raw.githubusercontent.com/ZAN-Team/ZanDocs/gh-pages/'
      : '/',
  themeConfig: {
    footer: 'Powered by ZAN',
    logo: 'https://user-images.githubusercontent.com/1061968/237677290-7040df5e-1764-428f-85d7-4b0ff44ee0b3.png',
  },
});
