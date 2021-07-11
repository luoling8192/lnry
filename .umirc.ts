import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  title: '岭南乳业有限公司',
  theme: {
    '@primary-color': 'rgb(239,65,54)',
    '@primary-hover-color': 'rgb(239,65,54)',
    '@primary-active-color': 'rgb(239,65,54)',
  },
  headScripts: [
    {
      src: 'http://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      defer: true,
    },
  ],
  mfsu: {},
  fastRefresh: {},
  manifest: {
    basePath: '/',
  },
  targets: {
    ie: 11,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  routes: routes,
});
