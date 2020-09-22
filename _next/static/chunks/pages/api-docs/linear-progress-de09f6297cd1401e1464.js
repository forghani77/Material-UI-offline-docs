_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[104],{"2L5n":function(e,a){e.exports='---\nfilename: /packages/material-ui/src/LinearProgress/LinearProgress.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# LinearProgress API\n\n<p class="description">The API documentation of the LinearProgress React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport LinearProgress from \'@material-ui/core/LinearProgress\';\n// or\nimport { LinearProgress } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n## ARIA\n\nIf the progress bar is describing the loading progress of a particular region of a page,\nyou should use `aria-describedby` to point to the progress bar, and set the `aria-busy`\nattribute to `true` on that region until it has finished loading.\n\n## Component name\n\nThe `MuiLinearProgress` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'primary\'<br>&#124;&nbsp;\'secondary\'</span> | <span class="prop-default">\'primary\'</span> | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">value</span> | <span class="prop-type">number</span> |  | The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. |\n| <span class="prop-name">valueBuffer</span> | <span class="prop-type">number</span> |  | The value for the buffer variant. Value between 0 and 100. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'buffer\'<br>&#124;&nbsp;\'determinate\'<br>&#124;&nbsp;\'indeterminate\'<br>&#124;&nbsp;\'query\'</span> | <span class="prop-default">\'indeterminate\'</span> | The variant to use. Use indeterminate or query when there is no progress value. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiLinearProgress-root</span> | Styles applied to the root element.\n| <span class="prop-name">colorPrimary</span> | <span class="prop-name">.MuiLinearProgress-colorPrimary</span> | Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`.\n| <span class="prop-name">colorSecondary</span> | <span class="prop-name">.MuiLinearProgress-colorSecondary</span> | Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`.\n| <span class="prop-name">determinate</span> | <span class="prop-name">.MuiLinearProgress-determinate</span> | Styles applied to the root element if `variant="determinate"`.\n| <span class="prop-name">indeterminate</span> | <span class="prop-name">.MuiLinearProgress-indeterminate</span> | Styles applied to the root element if `variant="indeterminate"`.\n| <span class="prop-name">buffer</span> | <span class="prop-name">.MuiLinearProgress-buffer</span> | Styles applied to the root element if `variant="buffer"`.\n| <span class="prop-name">query</span> | <span class="prop-name">.MuiLinearProgress-query</span> | Styles applied to the root element if `variant="query"`.\n| <span class="prop-name">dashed</span> | <span class="prop-name">.MuiLinearProgress-dashed</span> | Styles applied to the additional bar element if `variant="buffer"`.\n| <span class="prop-name">dashedColorPrimary</span> | <span class="prop-name">.MuiLinearProgress-dashedColorPrimary</span> | Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`.\n| <span class="prop-name">dashedColorSecondary</span> | <span class="prop-name">.MuiLinearProgress-dashedColorSecondary</span> | Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`.\n| <span class="prop-name">bar</span> | <span class="prop-name">.MuiLinearProgress-bar</span> | Styles applied to the layered bar1 and bar2 elements.\n| <span class="prop-name">barColorPrimary</span> | <span class="prop-name">.MuiLinearProgress-barColorPrimary</span> | Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer".\n| <span class="prop-name">barColorSecondary</span> | <span class="prop-name">.MuiLinearProgress-barColorSecondary</span> | Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer".\n| <span class="prop-name">bar1Indeterminate</span> | <span class="prop-name">.MuiLinearProgress-bar1Indeterminate</span> | Styles applied to the bar1 element if `variant="indeterminate or query"`.\n| <span class="prop-name">bar1Determinate</span> | <span class="prop-name">.MuiLinearProgress-bar1Determinate</span> | Styles applied to the bar1 element if `variant="determinate"`.\n| <span class="prop-name">bar1Buffer</span> | <span class="prop-name">.MuiLinearProgress-bar1Buffer</span> | Styles applied to the bar1 element if `variant="buffer"`.\n| <span class="prop-name">bar2Indeterminate</span> | <span class="prop-name">.MuiLinearProgress-bar2Indeterminate</span> | Styles applied to the bar2 element if `variant="indeterminate or query"`.\n| <span class="prop-name">bar2Buffer</span> | <span class="prop-name">.MuiLinearProgress-bar2Buffer</span> | Styles applied to the bar2 element if `variant="buffer"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/LinearProgress/LinearProgress.js) for more detail.\n\n## Demos\n\n- [Progress](/components/progress/)\n\n'},Ddze:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/linear-progress",function(){return n("si82")}])},Xpu7:function(e,a,n){var r={"./linear-progress.md":"2L5n"};function s(e){var a=o(e);return n(a)}function o(e){if(!n.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="Xpu7"},si82:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return l}));var r=n("mXGw"),s=n.n(r),o=n("e+1t"),t=n("kVtE"),p=s.a.createElement,i=n("Xpu7");function l(e){var a=e.docs;return p(o.a,{docs:a})}l.getInitialProps=function(){var e=Object(t.a)({pageFilename:"api/linear-progress",requireRaw:i});return{demos:e.demos,docs:e.docs}}}},[["Ddze",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);