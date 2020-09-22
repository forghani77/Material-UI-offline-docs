_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[238],{"3xfA":function(e,n){e.exports='---\ntitle: No SSR React component\ncomponents: NoSsr\n---\n\n# No SSR\n\n<p class="description">NoSsr\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff08SSR\uff09\u306e\u5bfe\u8c61\u304b\u3089\u610f\u56f3\u7684\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002</p>\n\n\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u72b6\u6cc1\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002\n\n- SSR\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u58ca\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u306e\u30cf\u30c3\u30c1\u30f3\u30b0\u3092\u30a8\u30b9\u30b1\u30fc\u30d7\u3057\u307e\u3059\u3002\n- \u30b9\u30af\u30ed\u30fc\u30eb\u305b\u305a\u306b\u898b\u3048\u308b\u7bc4\u56f2\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3060\u3051\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u306e\u6700\u521d\u306e\u30da\u30a4\u30f3\u30c8\u307e\u3067\u306e\u6642\u9593\u3092\u6539\u5584\u3057\u307e\u3059\u3002\n- \u30b5\u30fc\u30d0\u30fc\u3067\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u3092\u77ed\u7e2e\u3057\u307e\u3059\u3002\n- \u30b5\u30fc\u30d0\u30fc\u306e\u8ca0\u8377\u304c\u9ad8\u3059\u304e\u308b\u5834\u5408\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u4f4e\u4e0b\u3092\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002\n- \u91cd\u8981\u306a\u3082\u306e\u3060\u3051\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u5bfe\u8a71\u307e\u3067\u306e\u6642\u9593\u3092\u6539\u5584\u3057\u307e\u3059\uff08 `defer` \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\uff09\u3002\n\n## \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u9045\u5ef6\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## \u30d5\u30ec\u30fc\u30e0\u5ef6\u671f\n\n\u4e2d\u6838\u3068\u306a\u308bNoSsr\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u76ee\u7684\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092 **\u9045\u5ef6\u3059\u308b\u3053\u3068\u3067\u3059**\u3002 \u524d\u306e\u30c7\u30e2\u3067\u793a\u3057\u305f\u3088\u3046\u306b\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3078\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5ef6\u671f\u3067\u304d\u307e\u3059\u3002\n\n\u305f\u3060\u3057\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u81ea\u4f53\u5185\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5ef6\u671f\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u5b50\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u306b\u306f\u3001 `defer` \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30d5\u30ec\u30fc\u30e0** \u3092 **\u5f85\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 React\u306f1\u3067\u306f\u306a\u304f [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) \u3092\u884c\u3046\u3002\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},"5Uc4":function(e,n){e.exports='import * as React from \'react\';\nimport NoSsr from \'@material-ui/core/NoSsr\';\nimport Box from \'@material-ui/core/Box\';\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box p={2} bgcolor="primary.main" color="primary.contrastText">\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box p={2} bgcolor="secondary.main" color="primary.contrastText">\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n'},CFD9:function(e,n){e.exports='---\ntitle: No SSR React component\ncomponents: NoSsr\n---\n\n# No SSR\n\n<p class="description">NoSsr purposely removes components from the subject of Server Side Rendering (SSR).</p>\n\nThis component can be useful in a variety of situations:\n\n- Escape hatch for broken dependencies not supporting SSR.\n- Improve the time-to-first paint on the client by only rendering above the fold.\n- Reduce the rendering time on the server.\n- Under too heavy server load, you can turn on service degradation.\n- Improve the time-to-interactive by only rendering what\'s important (with the `defer` property).\n\n{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}\n\n## Client side deferring\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Frame deferring\n\nAt its core, the NoSsr component\'s purpose is to **defer rendering**.\nAs it\'s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.\n\nBut you can also use it to defer the rendering within the client itself.\nYou can **wait a screen frame** with the `defer` property to render the children.\nReact does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}\n'},E6dq:function(e,n,r){var t={"./FrameDeferring.js":"u+Ml","./FrameDeferring.tsx":"nXcY","./SimpleNoSsr.js":"QiLq","./SimpleNoSsr.tsx":"K9PR"};function o(e){var n=s(e);return r(n)}function s(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=s,e.exports=o,o.id="E6dq"},FRID:function(e,n){e.exports='---\ntitle: No SSR React component\ncomponents: NoSsr\n---\n\n# No SSR\n\n<p class="description">NoSsr \u043f\u0440\u0435\u0434\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u0437 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (SSR).</p>\n\n\u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445:\n\n- Escape hatch for broken dependencies not supporting SSR.\n- Improve the time-to-first paint on the client by only rendering above the fold.\n- \u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.\n- Under too heavy server load, you can turn on service degradation.\n- Improve the time-to-interactive by only rendering what\'s important (with the `defer` property).\n\n## \u041e\u0442\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Frame deferring\n\nIn it\'s core, the NoSsr component purpose is to **defer rendering**. As it\'s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.\n\nBut you can also use it to defer the rendering within the client itself. You can **wait a screen frame** with the `defer` property to render the children. React does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},"G/pX":function(e,n){e.exports='import * as React from \'react\';\nimport NoSsr from \'@material-ui/core/NoSsr\';\nimport Box from \'@material-ui/core/Box\';\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box p={2} bgcolor="primary.main" color="primary.contrastText">\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box p={2} bgcolor="secondary.main" color="primary.contrastText">\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n'},H6cO:function(e,n){e.exports='---\ntitle: No SSR React component\ncomponents: NoSsr\n---\n\n# Pas de SSR\n\n<p class="description">NoSsr supprime intentionnellement des composants du rendu c\xf4t\xe9 serveur (SSR).</p>\n\nCe composant peut \xeatre utile dans diverses situations:\n\n- Trappe d\'\xe9vacuation pour les d\xe9pendances qui ne supportent pas le SSR.\n- Am\xe9liorer le temps n\xe9cessaire pour peindre le client en rendant uniquement le rendu visible \xe0 l\'\xe9cran.\n- R\xe9duire le temps de rendu sur le serveur.\n- Si la charge du serveur est trop importante, vous pouvez activer une d\xe9gradation du service.\n- Am\xe9liorez le temps d\'interactivit\xe9 en ne rendant que ce qui est important (avec la propri\xe9t\xe9 `defer`).\n\n## Report du c\xf4t\xe9 client\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Report d\'une frame\n\nIn it\'s core, the NoSsr component purpose is to **defer rendering**. As it\'s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.\n\nBut you can also use it to defer the rendering within the client itself. You can **wait a screen frame** with the `defer` property to render the children. React does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},Hm86:function(e,n,r){var t={"./FrameDeferring.js":"LbkO","./FrameDeferring.tsx":"LMnn","./SimpleNoSsr.js":"G/pX","./SimpleNoSsr.tsx":"5Uc4","./no-ssr-de.md":"t2xM","./no-ssr-es.md":"dTXB","./no-ssr-fr.md":"H6cO","./no-ssr-ja.md":"3xfA","./no-ssr-pt.md":"HsBK","./no-ssr-ru.md":"FRID","./no-ssr-zh.md":"hAqQ","./no-ssr.md":"CFD9"};function o(e){var n=s(e);return r(n)}function s(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=s,e.exports=o,o.id="Hm86"},HsBK:function(e,n){e.exports='---\ntitle: Componente React Sem SSR\ncomponents: NoSsr\n---\n\n# Sem SSR\n\n<p class="description">O NoSsr remove intencionalmente componentes do contexto de Server Side Rendering (SSR).</p>\n\nEsse componente pode ser \xfatil em v\xe1rias situa\xe7\xf5es:\n\n- V\xe1lvula de escape para depend\xeancias quebradas que n\xe3o suportam SSR.\n- Melhorar o tempo para a primeira pintura no cliente renderizando somente a primeira parte da p\xe1gina (above the fold).\n- Reduzir o tempo de renderiza\xe7\xe3o no servidor.\n- Sob carga de servidor muito pesada, voc\xea pode ativar a degrada\xe7\xe3o do servi\xe7o.\n- Melhorar o tempo de intera\xe7\xe3o apenas renderizando o que \xe9 importante (com a propriedade `defer`).\n\n## Adiamento do lado do cliente\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Adiamento de quadros\n\nEm sua ess\xeancia, o objetivo do componente NoSsr \xe9 **adiar a renderiza\xe7\xe3o**. Como est\xe1 ilustrado na demonstra\xe7\xe3o anterior, voc\xea pode us\xe1-lo para adiar a renderiza\xe7\xe3o do servidor para o cliente.\n\nMas voc\xea tamb\xe9m pode us\xe1-lo para adiar a renderiza\xe7\xe3o dentro do pr\xf3prio cliente. Voc\xea pode **aguardar um quadro de tela** com a propriedade `defer` para renderizar o children. React faz [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) em vez de 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},K9PR:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return d}));var t=r("mXGw"),o=r("WKBU"),s=r("xWBm"),i=t.createElement,a=i("div",null,i(s.a,{p:2,bgcolor:"primary.main",color:"primary.contrastText"},"Server and Client"),i(o.a,null,i(s.a,{p:2,bgcolor:"secondary.main",color:"primary.contrastText"},"Client only")));function d(){return a}},LMnn:function(e,n){e.exports="import * as React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport NoSsr from '@material-ui/core/NoSsr';\n\nconst useStyles = makeStyles({\n  container: {\n    width: 300,\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n});\n\nfunction LargeTree(): any {\n  return Array.from(new Array(5000)).map((_, index) => (\n    <span key={index}>.</span>\n  ));\n}\n\nexport default function FrameDeferring() {\n  const classes = useStyles();\n  const [state, setState] = React.useState({\n    open: false,\n    defer: false,\n  });\n\n  return (\n    <div>\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"false\"'}\n      </button>\n      <br />\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"true\"'}\n      </button>\n      <br />\n      <br />\n      <div className={classes.container}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </div>\n    </div>\n  );\n}\n"},LbkO:function(e,n){e.exports="import * as React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport NoSsr from '@material-ui/core/NoSsr';\n\nconst useStyles = makeStyles({\n  container: {\n    width: 300,\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n});\n\nfunction LargeTree() {\n  return Array.from(new Array(5000)).map((_, index) => (\n    <span key={index}>.</span>\n  ));\n}\n\nexport default function FrameDeferring() {\n  const classes = useStyles();\n  const [state, setState] = React.useState({\n    open: false,\n    defer: false,\n  });\n\n  return (\n    <div>\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"false\"'}\n      </button>\n      <br />\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"true\"'}\n      </button>\n      <br />\n      <br />\n      <div className={classes.container}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </div>\n    </div>\n  );\n}\n"},QiLq:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return d}));var t=r("mXGw"),o=r("WKBU"),s=r("xWBm"),i=t.createElement,a=i("div",null,i(s.a,{p:2,bgcolor:"primary.main",color:"primary.contrastText"},"Server and Client"),i(o.a,null,i(s.a,{p:2,bgcolor:"secondary.main",color:"primary.contrastText"},"Client only")));function d(){return a}},a7ym:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return p}));var t=r("mXGw"),o=r.n(t),s=r("e+1t"),i=r("kVtE"),a=o.a.createElement,d=r("E6dq"),c=r("Hm86");function p(e){var n=e.demos,r=e.docs;return a(s.a,{demos:n,docs:r,requireDemo:d})}p.getInitialProps=function(){var e=Object(i.a)({pageFilename:"components/no-ssr",requireRaw:c});return{demos:e.demos,docs:e.docs}}},dTXB:function(e,n){e.exports='---\ntitle: No SSR React component\ncomponents: NoSsr\n---\n\n# No SSR\n\n<p class="description">NoSsr purposely removes components from the subject of Server Side Rendering (SSR).</p>\n\nThis component can be useful in a variety of situations:\n\n- Escape hatch for broken dependencies not supporting SSR.\n- Improve the time-to-first paint on the client by only rendering above the fold.\n- Reduce the rendering time on the server.\n- Under too heavy server load, you can turn on service degradation.\n- Improve the time-to-interactive by only rendering what\'s important (with the `defer` property).\n\n## Client side deferring\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Frame deferring\n\nIn it\'s core, the NoSsr component purpose is to **defer rendering**. As it\'s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.\n\nBut you can also use it to defer the rendering within the client itself. You can **wait a screen frame** with the `defer` property to render the children. React does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},egiY:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/no-ssr",function(){return r("a7ym")}])},hAqQ:function(e,n){e.exports='---\ntitle: \u975eSSR React\u7ec4\u4ef6\ncomponents: NoSsr\n---\n\n# No SSR \u975eSSR\n\n<p class="description">NoSsr \u6545\u610f\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\uff08SSR\uff09\u6a21\u5f0f\u4e2d\u5220\u9664\u7ec4\u4ef6\u3002</p>\n\n\u8be5\u7ec4\u4ef6\u53ef\u7528\u4e8e\u5404\u79cd\u60c5\u51b5\uff1a\n\n- \u5bf9\u4e8e\u4e0d\u652f\u6301SSR\u7684\u4f9d\u8d56\u9879\u8fdb\u884c\u8bed\u4e49\u586b\u5145\u3002\n- \u901a\u8fc7\u4ec5\u5728\u9996\u5c4f\u4e0a\u5448\u73b0\u6765\u6539\u5584\u5ba2\u6237\u7aef\u4e0a\u7684\u9996\u6b21\u7ed8\u5236\u65f6\u95f4\u3002\n- \u51cf\u5c11\u670d\u52a1\u5668\u4e0a\u7684\u6e32\u67d3\u65f6\u95f4\u3002\n- \u5728\u8fc7\u91cd\u7684\u670d\u52a1\u5668\u8d1f\u8f7d\u4e0b\uff0c\u60a8\u53ef\u4ee5\u6253\u5f00\u670d\u52a1\u964d\u7ea7\u3002\n- \u901a\u8fc7\u4ec5\u6e32\u67d3\u91cd\u8981\u5185\u5bb9\uff08\u4f7f\u7528 `defer` \u5c5e\u6027\uff09\u6765\u6539\u5584\u4ea4\u4e92\u65f6\u95f4\u3002\n\n## \u5ba2\u6237\u7aef\u63a8\u8fdf\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## \u5e27\u63a8\u8fdf\n\n\u5728\u5176\u6838\u5fc3\u4e2d\uff0cNoSr \u7ec4\u4ef6\u7684\u76ee\u7684\u662f **\u63a8\u8fdf\u6e32\u67d3**\u3002 \u6b63\u5982\u5728\u524d\u4e00\u4e2a\u6f14\u793a\u4e2d\u6240\u5c55\u793a\u7684\u90a3\u6837\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u5c06\u6e32\u67d3\u4ece\u670d\u52a1\u5668\u63a8\u8fdf\u5230\u5ba2\u6237\u7aef\u3002\n\n\u4f46\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u63a8\u8fdf\u5ba2\u6237\u7aef\u7684\u6e32\u67d3\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 `defer` \u5c5e\u6027\u6765 **\u7b49\u5f85\u4e00\u4e2a\u5c4f\u5e55\u5e27** \u540e\u6e32\u67d3\u5b50\u7ec4\u4ef6\u3002 React \u4f1a\u505a [2 \u6b21\u63d0\u4ea4](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) \u800c\u4e0d\u662f 1 \u6b21\u3002\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},nXcY:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return S}));var t=r("8ET1"),o=r.n(t),s=r("mXGw"),i=r("yZEQ"),a=r("WKBU"),d=s.createElement,c=Object(i.a)({container:{width:300,display:"flex",flexWrap:"wrap"}});var p=d("br",null),m=d("br",null),u=d("br",null),l=d("div",null,"Outside NoSsr"),f=d((function(){return o()(new Array(5e3)).map((function(e,n){return d("span",{key:n},".")}))}),null);function S(){var e=c(),n=s.useState({open:!1,defer:!1}),r=n[0],t=n[1];return d("div",null,d("button",{type:"button",onClick:function(){return t({open:!r.open,defer:!1})}},'Render NoSsr defer="false"'),p,d("button",{type:"button",onClick:function(){return t({open:!r.open,defer:!0})}},'Render NoSsr defer="true"'),m,u,d("div",{className:e.container},r.open?d(s.Fragment,null,l,d(a.a,{defer:r.defer},".....Inside NoSsr",f)):null))}},t2xM:function(e,n){e.exports='---\ntitle: NoSSR React-Komponente\ncomponents: NoSsr\n---\n\n# NoSSR\n\n<p class="description">NoSSR entfernt absichtlich Komponenten aus dem Server Side Rendering (SSR) Theme.</p>\n\nDiese Komponente kann in verschiedenen Situationen n\xfctzlich sein:\n\n- Notluke f\xfcr gebrochene Abh\xe4ngigkeiten, die SSR nicht unterst\xfctzen.\n- Verbessern Sie die Zeit bis zum ersten Rednern beim Client, indem Sie nur \xfcber der Klappe rendern.\n- Reduzieren Sie die Renderzeit auf dem Server.\n- Bei zu starker Serverlast k\xf6nnen Sie die Dienstverschlechterung aktivieren.\n- Verbessern Sie die Zeit bis zur Interaktion, indem Sie nur das ausgeben, was wichtig ist (mit der `defer` Eigenschaft).\n\n## Aufschiebung der Client-Seite\n\n{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}\n\n## Rahmen Verz\xf6gerung\n\nIn it\'s core, the NoSsr component purpose is to **defer rendering**. As it\'s illustrated in the previous demo, you can use it to defer the rendering from the server to the client.\n\nSie k\xf6nnen es aber auch verwenden, um das Rendern im Client selbst zu verschieben. Sie k\xf6nnen **einen Frame** mit der `defer` Eigenschaft warten, um die Kinder zu erzeugen. React macht [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) anstatt 1.\n\n{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}'},"u+Ml":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return S}));var t=r("8ET1"),o=r.n(t),s=r("mXGw"),i=r("yZEQ"),a=r("WKBU"),d=s.createElement,c=Object(i.a)({container:{width:300,display:"flex",flexWrap:"wrap"}});var p=d("br",null),m=d("br",null),u=d("br",null),l=d("div",null,"Outside NoSsr"),f=d((function(){return o()(new Array(5e3)).map((function(e,n){return d("span",{key:n},".")}))}),null);function S(){var e=c(),n=s.useState({open:!1,defer:!1}),r=n[0],t=n[1];return d("div",null,d("button",{type:"button",onClick:function(){return t({open:!r.open,defer:!1})}},'Render NoSsr defer="false"'),p,d("button",{type:"button",onClick:function(){return t({open:!r.open,defer:!0})}},'Render NoSsr defer="true"'),m,u,d("div",{className:e.container},r.open?d(s.Fragment,null,l,d(a.a,{defer:r.defer},".....Inside NoSsr",f)):null))}}},[["egiY",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);