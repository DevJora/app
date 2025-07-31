
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://devjora.github.io/app/',
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
    'index.csr.html': {size: 7359, hash: '3957738a9f3e3c5b581aca68ea4cc257cf08a6c7c18524063c970446686b2e3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '600edcd04e372d87f09913e5ee4b00890b576ad78ffaa3e1bba7db4fb38f4a66', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 22554, hash: '6e09026cb88561b1f6c2d6963836b74e6efb3922852c659328d429b09267d74b', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 22554, hash: '6e09026cb88561b1f6c2d6963836b74e6efb3922852c659328d429b09267d74b', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29190, hash: '480956aa15e42f36c1618290e0391d8e6368da14bcd29a51656e299fd4bb81e5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 22554, hash: '6e09026cb88561b1f6c2d6963836b74e6efb3922852c659328d429b09267d74b', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 22554, hash: '6e09026cb88561b1f6c2d6963836b74e6efb3922852c659328d429b09267d74b', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24103, hash: '2ba2edefa1d336c0c0faaeed739b50d2d8c584370abc5281b22eaa43009fa296', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-ZAKPU6VS.css': {size: 84010, hash: '0sjb3VxY7p4', text: () => import('./assets-chunks/styles-ZAKPU6VS_css.mjs').then(m => m.default)}
  },
};
