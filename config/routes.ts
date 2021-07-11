export default [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: 'index' },
      { exact: true, path: '/try', component: 'try' },
      { exact: true, path: '/join', component: 'join' },
      { exact: true, path: '/news', component: 'news' },
      { exact: true, path: '/news/:id', component: 'news/$id$' },
    ],
  },
  {
    component: '404',
  },
];
