
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
    'index.csr.html': {size: 5681, hash: '0c651cfa73d8a97bd625766fdb6e7009b1ffcfcc15f79fc2c3726cf076d2ef4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '13e1cddecb3569c40beb2bdf69032bd26f2967c0875412afd70d41488b2d4605', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 20745, hash: '4a67c562f8f8a0bb3d6b14fcdc1738bb9ea5028807021c0ab74667e725b4c32c', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 27356, hash: '1190d5b233c5172e0efcc8b670be843455d85efa86c3a7d1aca0a81f0c779d5e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 20745, hash: '4a67c562f8f8a0bb3d6b14fcdc1738bb9ea5028807021c0ab74667e725b4c32c', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22269, hash: 'bed4d2113c490d96328dfa36846a12a1f29f6fd3176177eece39c5702405ccf2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 20745, hash: '4a67c562f8f8a0bb3d6b14fcdc1738bb9ea5028807021c0ab74667e725b4c32c', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 20745, hash: '4a67c562f8f8a0bb3d6b14fcdc1738bb9ea5028807021c0ab74667e725b4c32c', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'styles-P23IJURD.css': {size: 47797, hash: 'adM+TFEUMJo', text: () => import('./assets-chunks/styles-P23IJURD_css.mjs').then(m => m.default)}
  },
};
