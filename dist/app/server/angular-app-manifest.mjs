
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
    'index.csr.html': {size: 5677, hash: 'a60f96574042ebcb035f1bb5358d95c020d1716845ed49f9e0e165777b13cffe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: 'b97d76b399e916a649a58751bd5ded71f28abe83c866c00fbcee815abf87ef3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22253, hash: 'ce79b221174161839cdfd3449a1fb9802347d24990d5de2c383bb1332f5c4803', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 20733, hash: '3d80df27f911ae629539899b61fa584db26b4a30aef51d3a650f68dbaa3b8c0e', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 27340, hash: '41853d7f9d394490eb4d747de44292d68f1621702bf8a7405dd5ca657da5fd6e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 20733, hash: '3d80df27f911ae629539899b61fa584db26b4a30aef51d3a650f68dbaa3b8c0e', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 20733, hash: '3d80df27f911ae629539899b61fa584db26b4a30aef51d3a650f68dbaa3b8c0e', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 20733, hash: '3d80df27f911ae629539899b61fa584db26b4a30aef51d3a650f68dbaa3b8c0e', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'styles-P23IJURD.css': {size: 47797, hash: 'adM+TFEUMJo', text: () => import('./assets-chunks/styles-P23IJURD_css.mjs').then(m => m.default)}
  },
};
