
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/hse/home",
    "route": "/hse"
  },
  {
    "renderMode": 2,
    "route": "/hse/home"
  },
  {
    "renderMode": 2,
    "route": "/hse/add"
  },
  {
    "renderMode": 2,
    "redirectTo": "/exploitant/home",
    "route": "/exploitant"
  },
  {
    "renderMode": 2,
    "route": "/exploitant/home"
  },
  {
    "renderMode": 2,
    "route": "/exploitant/view"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7330, hash: '11946b40f713f004b39eb32b8355ff999ebb48f00fd59872ff63810f29189f1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '0f43ed45815d098cc6d5e160764a5a6584e82cf6b906dcdf28aedb0c2a2f64de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29074, hash: '96142d988404d22dbc0056a077d79072334d98a300960fd7f3834185bbb1dd73', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 22467, hash: 'f6880c2779388550c487203f0618723a726a1b7fb34674f93bb3c8e52961464f', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 22467, hash: 'f6880c2779388550c487203f0618723a726a1b7fb34674f93bb3c8e52961464f', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 22467, hash: 'f6880c2779388550c487203f0618723a726a1b7fb34674f93bb3c8e52961464f', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23987, hash: 'f26a968d6a75d8e021cf74281afbb43aa7b1039fcf1921ce5989024766dc7a55', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 22467, hash: 'f6880c2779388550c487203f0618723a726a1b7fb34674f93bb3c8e52961464f', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'styles-ZAKPU6VS.css': {size: 84010, hash: '0sjb3VxY7p4', text: () => import('./assets-chunks/styles-ZAKPU6VS_css.mjs').then(m => m.default)}
  },
};
