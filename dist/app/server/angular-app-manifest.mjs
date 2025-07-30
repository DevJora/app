
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/app/home",
    "route": "/app"
  },
  {
    "renderMode": 2,
    "route": "/app/home"
  },
  {
    "renderMode": 2,
    "route": "/app/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/app/hse/home",
    "route": "/app/hse"
  },
  {
    "renderMode": 2,
    "route": "/app/hse/home"
  },
  {
    "renderMode": 2,
    "route": "/app/hse/add"
  },
  {
    "renderMode": 2,
    "redirectTo": "/app/exploitant/home",
    "route": "/app/exploitant"
  },
  {
    "renderMode": 2,
    "route": "/app/exploitant/home"
  },
  {
    "renderMode": 2,
    "route": "/app/exploitant/view"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7228, hash: '231770d981ca50840bd50ec6e6d6dc2ae60639fd2fd6a7a2190ce218c8b26a38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '9f574af957259d6bbb68e60c03516268f4ab1471ea7be2ee1344934db7d226d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 22368, hash: '48e9a2f7c7a653693a2010a6f06fb268e9b4620045ea9a134f0cfd1deed3fb96', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23892, hash: '22af52da85ff28c8d2f99084dd969cc7c99325f9016361bf2f372ae0bc79adf0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28979, hash: 'bd923171faf1e317ef0a47cdb72cb07f403ce0eb2c7a52e98d763fb4fca1ee9b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 22368, hash: '48e9a2f7c7a653693a2010a6f06fb268e9b4620045ea9a134f0cfd1deed3fb96', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 22368, hash: '48e9a2f7c7a653693a2010a6f06fb268e9b4620045ea9a134f0cfd1deed3fb96', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 22368, hash: '48e9a2f7c7a653693a2010a6f06fb268e9b4620045ea9a134f0cfd1deed3fb96', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'styles-DD7QAYRR.css': {size: 83333, hash: 'P8Auxqbc5BQ', text: () => import('./assets-chunks/styles-DD7QAYRR_css.mjs').then(m => m.default)}
  },
};
