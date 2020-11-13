// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-coc-js": () => import("./../../../src/pages/coc.js" /* webpackChunkName: "component---src-pages-coc-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-event-template-js": () => import("./../../../src/templates/EventTemplate.js" /* webpackChunkName: "component---src-templates-event-template-js" */)
}

