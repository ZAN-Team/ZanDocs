import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://a.zan.top/static/favicon.png'],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    footer: 'Powered by ZAN',
    logo: 'https://user-images.githubusercontent.com/1061968/237677290-7040df5e-1764-428f-85d7-4b0ff44ee0b3.png',
  },
  styles: [
    // Special override some styles, if there are more requirements in the future, consider a better maintenance method
    {
      // fix chakra theme background image not work
      content: `
#root {
  background-attachment: fixed;
}
.chakra-ui-light #root {
  background-image: url(https://user-images.githubusercontent.com/1061968/240206867-b1e58356-7e8e-4e1d-89b7-85dca48ab6ce.jpg);
}
.chakra-ui-dark #root {
  background-image: url(https://user-images.githubusercontent.com/1061968/240206853-ccc48f4f-a94f-42ff-8b09-4241e8155095.jpg);
}
    `,
    },
  ],
});
