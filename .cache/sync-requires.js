const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/nasirhm/Documents/WTMKolachi/WTM-Kolachi-Website/src/pages/404.js"))),
  "component---src-pages-coc-js": hot(preferDefault(require("/home/nasirhm/Documents/WTMKolachi/WTM-Kolachi-Website/src/pages/coc.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/nasirhm/Documents/WTMKolachi/WTM-Kolachi-Website/src/pages/index.js"))),
  "component---src-templates-event-template-js": hot(preferDefault(require("/home/nasirhm/Documents/WTMKolachi/WTM-Kolachi-Website/src/templates/EventTemplate.js")))
}

