export default {
  'GET /api/show/about': {
    success: 1,
    data:
      'In the process of internal desktop applications development, many different design specs and\n' +
      '          implementations would be involved, which might cause designers and developers difficulties and\n' +
      '          duplication and reduce the efficiency of development.\n' +
      '          In the process of internal desktop applications development, many different design specs and\n' +
      '          implementations would be involved, which might cause designers and developers difficulties and\n' +
      '          duplication and reduce the efficiency of development.\n' +
      '          In the process of internal desktop applications development, many different design specs and\n' +
      '          implementations would be involved, which might cause designers and developers difficulties and\n' +
      '          duplication and reduce the efficiency of development.',
  },

  'GET /api/show/product': {
    success: 1,
    data: [
      { id: 1, url: 'img1.jpg', title: '鲜羊奶' },
      { id: 2, url: 'img2.jpg', title: '鲜羊奶乳饮品' },
      { id: 3, url: 'img3.jpg', title: '草莓味羊奶饮品' },
      { id: 4, url: 'img4.jpg', title: '麦香羊奶' },
      { id: 5, url: 'img5.jpg', title: '益生菌酸羊奶' },
    ],
  },

  'GET /api/show/site': {
    success: 1,
    data:
      '截止至2020年底，站点遍布广东、福建、浙江、江苏、江西、湖南、四川、上海、重庆九大区域，共计180个配送站点。\n' +
      '2021年预计开拓山东、河南、安徽、湖北、贵州、广西等市场，定下了350家配送站点的年度目标。\n',
  },

  'GET /api/show/news': {
    success: 1,
    data: [
      {
        id: 1,
        title: 'a',
        content: 'Racing car sprays burning fuel into crowd.',
      },
      { id: 2, title: 'a', content: 'Japanese princess to wed commoner.' },
      {
        id: 3,
        title: 'a',
        content: 'Australian walks 100km after outback crash.',
      },
      { id: 4, title: 'a', content: 'Man charged over missing wedding girl.' },
      { id: 5, title: 'a', content: 'Los Angeles battles huge wildfires.' },
    ],
  },
};
