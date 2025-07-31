
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
    'index.csr.html': {size: 5677, hash: '63ff648207204a3175e1d21a0bd8614184a87130f346dd95df36cb94ec952db8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '2f31e7a7d17c7a19c7f2a46ddb6ba940fe713a8789dd87b7ccb911974d075c70', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hse/home/index.html': {size: 20733, hash: '6049e5c326d15fa21c8fbb6e040c34a73b579d55b070114def27f6a98207fbf3', text: () => import('./assets-chunks/hse_home_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22253, hash: 'afce230469b5cf17cdf050db0e1a01ed61fd91c8cd5017ae52dc9847ef60f709', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 27340, hash: '43ed87991c05289e12e77cb9600f50aa69899bc2cde9905f168a3e17b605807d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'hse/add/index.html': {size: 20733, hash: '6049e5c326d15fa21c8fbb6e040c34a73b579d55b070114def27f6a98207fbf3', text: () => import('./assets-chunks/hse_add_index_html.mjs').then(m => m.default)},
    'exploitant/home/index.html': {size: 20733, hash: '6049e5c326d15fa21c8fbb6e040c34a73b579d55b070114def27f6a98207fbf3', text: () => import('./assets-chunks/exploitant_home_index_html.mjs').then(m => m.default)},
    'exploitant/view/index.html': {size: 20733, hash: '6049e5c326d15fa21c8fbb6e040c34a73b579d55b070114def27f6a98207fbf3', text: () => import('./assets-chunks/exploitant_view_index_html.mjs').then(m => m.default)},
    'styles-ZWYF5ECU.css': {size: 46383, hash: 'kOPIss2wB3U', text: () => import('./assets-chunks/styles-ZWYF5ECU_css.mjs').then(m => m.default)}
  },
};
