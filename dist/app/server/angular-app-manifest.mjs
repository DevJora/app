
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
    'index.csr.html': {size: 7224, hash: '814c2cd3a71638646d8e273d132ec33a32bf8352a026f2a3b22f67f383db940d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '75369134d6cb7cc4b4600e910c638499d31bc0a885e91017342b9debfa0546e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28963, hash: 'e5c3e728ca188d656700f602e86e609886f4ba8238b4c59e7069d48bd879ef16', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 22356, hash: '8151c3e99a288e2999582f71967271f2292fded6906bd5194299b16d511b7d47', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 22356, hash: '8151c3e99a288e2999582f71967271f2292fded6906bd5194299b16d511b7d47', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 22356, hash: '8151c3e99a288e2999582f71967271f2292fded6906bd5194299b16d511b7d47', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23876, hash: '86187580fe51ac7e0124e8da3b9640ea4a0b48593c6a112cc1face2fdab971f2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 22356, hash: '8151c3e99a288e2999582f71967271f2292fded6906bd5194299b16d511b7d47', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'styles-DD7QAYRR.css': {size: 83333, hash: 'P8Auxqbc5BQ', text: () => import('./assets-chunks/styles-DD7QAYRR_css.mjs').then(m => m.default)}
  },
};
