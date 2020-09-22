_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[113],{"2ZsS":function(n,e){n.exports='---\nfilename: /packages/material-ui-lab/src/LoadingButton/LoadingButton.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# LoadingButton API\n\n<p class="description">The API documentation of the LoadingButton React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport LoadingButton from \'@material-ui/lab/LoadingButton\';\n// or\nimport { LoadingButton } from \'@material-ui/lab\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiLoadingButton` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the button. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the button will be disabled. |\n| <span class="prop-name">pending</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the pending indicator will be shown. |\n| <span class="prop-name">pendingIndicator</span> | <span class="prop-type">node</span> | <span class="prop-default">&lt;CircularProgress color="inherit" size={16} /></span> | Element placed before the children if the button is in pending state. |\n| <span class="prop-name">pendingPosition</span> | <span class="prop-type">\'start\'<br>&#124;&nbsp;\'end\'<br>&#124;&nbsp;\'center\'</span> | <span class="prop-default">\'center\'</span> | The pending indicator can be positioned on the start, end, or the center of the button. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Button](/api/button/)).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiLoadingButton-root</span> | Styles applied to the root element.\n| <span class="prop-name">pending</span> | <span class="prop-name">.MuiLoadingButton-pending</span> | Styles applied to the root element if `pending={true}`.\n| <span class="prop-name">pendingIndicator</span> | <span class="prop-name">.MuiLoadingButton-pendingIndicator</span> | Styles applied to the pendingIndicator element.\n| <span class="prop-name">pendingIndicatorCenter</span> | <span class="prop-name">.MuiLoadingButton-pendingIndicatorCenter</span> | Styles applied to the pendingIndicator element if `pendingPosition="center"`.\n| <span class="prop-name">pendingIndicatorStart</span> | <span class="prop-name">.MuiLoadingButton-pendingIndicatorStart</span> | Styles applied to the pendingIndicator element if `pendingPosition="start"`.\n| <span class="prop-name">pendingIndicatorEnd</span> | <span class="prop-name">.MuiLoadingButton-pendingIndicatorEnd</span> | Styles applied to the pendingIndicator element if `pendingPosition="end"`.\n| <span class="prop-name">endIconPendingEnd</span> | <span class="prop-name">.MuiLoadingButton-endIconPendingEnd</span> | Styles applied to the endIcon element if `pending={true}` and `pendingPosition="end"`.\n| <span class="prop-name">startIconPendingStart</span> | <span class="prop-name">.MuiLoadingButton-startIconPendingStart</span> | Styles applied to the startIcon element if `pending={true}` and `pendingPosition="start"`.\n| <span class="prop-name">labelPendingCenter</span> | <span class="prop-name">.MuiLoadingButton-labelPendingCenter</span> | Styles applied to the label element if `pending={true}` and `pendingPosition="center"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/next/packages/material-ui-lab/src/LoadingButton/LoadingButton.js) for more detail.\n\n## Inheritance\n\nThe props of the [Button](/api/button/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Buttons](/components/buttons/)\n\n'},"4ttX":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/loading-button",function(){return t("A/BI")}])},"A/BI":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var a=t("mXGw"),o=t.n(a),s=t("e+1t"),p=t("kVtE"),i=o.a.createElement,r=t("U/ly");function d(n){var e=n.docs;return i(s.a,{docs:e})}d.getInitialProps=function(){var n=Object(p.a)({pageFilename:"api/loading-button",requireRaw:r});return{demos:n.demos,docs:n.docs}}},"U/ly":function(n,e,t){var a={"./loading-button.md":"2ZsS"};function o(n){var e=s(n);return t(e)}function s(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=s,n.exports=o,o.id="U/ly"}},[["4ttX",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);