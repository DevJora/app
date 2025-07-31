
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
    'index.csr.html': {size: 7228, hash: 'c0bd1d17537b2e7476094962a91440b24ba65986a7c44b2b824d4bedc46dc4e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '24a30cb7c50cc2bd84b0ee66f46836f95a768d184cf113544064e98a43f1b6c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28979, hash: '4371fb4e0349d087189423ecdf8444d83bf6681528ac55ff925bbccc5e4aa291', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 22368, hash: '6894ff0cc9bf00ab5bda6c0e986c2a7579c073567a1c4a3cba4768c0327a977c', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 22368, hash: '6894ff0cc9bf00ab5bda6c0e986c2a7579c073567a1c4a3cba4768c0327a977c', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23892, hash: '7493aa5ec3acdd71e9f6a1f40a1286f02ea61352815019ab29bcd16c53ee0965', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 22368, hash: '6894ff0cc9bf00ab5bda6c0e986c2a7579c073567a1c4a3cba4768c0327a977c', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 22368, hash: '6894ff0cc9bf00ab5bda6c0e986c2a7579c073567a1c4a3cba4768c0327a977c', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'styles-LZ4XTR7P.css': {size: 85809, hash: '4hYjp083b2M', text: () => import('./assets-chunks/styles-LZ4XTR7P_css.mjs').then(m => m.default)}
  },
};
