_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{SwRo:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/badge",function(){return e("xF7f")}])},lpt6:function(a,n,e){var o={"./badge.md":"vqRp"};function s(a){var n=p(a);return e(n)}function p(a){if(!e.o(o,a)){var n=new Error("Cannot find module '"+a+"'");throw n.code="MODULE_NOT_FOUND",n}return o[a]}s.keys=function(){return Object.keys(o)},s.resolve=p,a.exports=s,s.id="lpt6"},vqRp:function(a,n){a.exports='---\nfilename: /packages/material-ui/src/Badge/Badge.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Badge API\n\n<p class="description">The API documentation of the Badge React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Badge from \'@material-ui/core/Badge\';\n// or\nimport { Badge } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiBadge` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">anchorOrigin</span> | <span class="prop-type">{ horizontal: \'left\'<br>&#124;&nbsp;\'right\', vertical: \'bottom\'<br>&#124;&nbsp;\'top\' }</span> | <span class="prop-default">{  vertical: \'top\',  horizontal: \'right\',}</span> | The anchor of the badge. |\n| <span class="prop-name">badgeContent</span> | <span class="prop-type">node</span> |  | The content rendered within the badge. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The badge will be added relative to this node. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'default\'<br>&#124;&nbsp;\'error\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'</span> | <span class="prop-default">\'default\'</span> | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'span\'</span> | The component used for the root node. Either a string to use a HTML element or a component. |\n| <span class="prop-name">invisible</span> | <span class="prop-type">bool</span> |  | If `true`, the badge will be invisible. |\n| <span class="prop-name">max</span> | <span class="prop-type">number</span> | <span class="prop-default">99</span> | Max count to show. |\n| <span class="prop-name">overlap</span> | <span class="prop-type">\'circular\'<br>&#124;&nbsp;\'rectangular\'</span> | <span class="prop-default">\'rectangular\'</span> | Wrapped shape the badge should overlap. |\n| <span class="prop-name">showZero</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Controls whether the badge is hidden when `badgeContent` is zero. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'dot\'<br>&#124;&nbsp;\'standard\'<br>&#124;&nbsp;string</span> | <span class="prop-default">\'standard\'</span> | The variant to use. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiBadge-root</span> | Styles applied to the root element.\n| <span class="prop-name">badge</span> | <span class="prop-name">.MuiBadge-badge</span> | Styles applied to the badge `span` element.\n| <span class="prop-name">colorPrimary</span> | <span class="prop-name">.MuiBadge-colorPrimary</span> | Styles applied to the root element if `color="primary"`.\n| <span class="prop-name">colorSecondary</span> | <span class="prop-name">.MuiBadge-colorSecondary</span> | Styles applied to the root element if `color="secondary"`.\n| <span class="prop-name">colorError</span> | <span class="prop-name">.MuiBadge-colorError</span> | Styles applied to the root element if `color="error"`.\n| <span class="prop-name">dot</span> | <span class="prop-name">.MuiBadge-dot</span> | Styles applied to the root element if `variant="dot"`.\n| <span class="prop-name">standard</span> | <span class="prop-name">.MuiBadge-standard</span> | Styles applied to the root element if `variant="standard"`.\n| <span class="prop-name">anchorOriginTopRightRectangular</span> | <span class="prop-name">.MuiBadge-anchorOriginTopRightRectangular</span> | Styles applied to the root element if `anchorOrigin={{ \'top\', \'right\' }} overlap="rectangular"`.\n| <span class="prop-name">anchorOriginBottomRightRectangular</span> | <span class="prop-name">.MuiBadge-anchorOriginBottomRightRectangular</span> | Styles applied to the root element if `anchorOrigin={{ \'bottom\', \'right\' }} overlap="rectangular"`.\n| <span class="prop-name">anchorOriginTopLeftRectangular</span> | <span class="prop-name">.MuiBadge-anchorOriginTopLeftRectangular</span> | Styles applied to the root element if `anchorOrigin={{ \'top\', \'left\' }} overlap="rectangular"`.\n| <span class="prop-name">anchorOriginBottomLeftRectangular</span> | <span class="prop-name">.MuiBadge-anchorOriginBottomLeftRectangular</span> | Styles applied to the root element if `anchorOrigin={{ \'bottom\', \'left\' }} overlap="rectangular"`.\n| <span class="prop-name">anchorOriginTopRightCircular</span> | <span class="prop-name">.MuiBadge-anchorOriginTopRightCircular</span> | Styles applied to the root element if `anchorOrigin={{ \'top\', \'right\' }} overlap="circular"`.\n| <span class="prop-name">anchorOriginBottomRightCircular</span> | <span class="prop-name">.MuiBadge-anchorOriginBottomRightCircular</span> | Styles applied to the root element if `anchorOrigin={{ \'bottom\', \'right\' }} overlap="circular"`.\n| <span class="prop-name">anchorOriginTopLeftCircular</span> | <span class="prop-name">.MuiBadge-anchorOriginTopLeftCircular</span> | Styles applied to the root element if `anchorOrigin={{ \'top\', \'left\' }} overlap="circular"`.\n| <span class="prop-name">anchorOriginBottomLeftCircular</span> | <span class="prop-name">.MuiBadge-anchorOriginBottomLeftCircular</span> | Styles applied to the root element if `anchorOrigin={{ \'bottom\', \'left\' }} overlap="circular"`.\n| <span class="prop-name">invisible</span> | <span class="prop-name">.MuiBadge-invisible</span> | Pseudo-class to the badge `span` element if `invisible={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Badge/Badge.js) for more detail.\n\n## Demos\n\n- [Avatars](/components/avatars/)\n- [Badges](/components/badges/)\n\n'},xF7f:function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var o=e("mXGw"),s=e.n(o),p=e("e+1t"),t=e("kVtE"),r=s.a.createElement,i=e("lpt6");function l(a){var n=a.docs;return r(p.a,{docs:n})}l.getInitialProps=function(){var a=Object(t.a)({pageFilename:"api/badge",requireRaw:i});return{demos:a.demos,docs:a.docs}}}},[["SwRo",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);