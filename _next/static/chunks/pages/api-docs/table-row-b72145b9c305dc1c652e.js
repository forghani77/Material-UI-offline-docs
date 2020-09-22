_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[163],{NwkV:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var o=a("mXGw"),t=a.n(o),s=a("e+1t"),p=a("kVtE"),r=t.a.createElement,l=a("zA0W");function i(e){var n=e.docs;return r(s.a,{docs:n})}i.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/table-row",requireRaw:l});return{demos:e.demos,docs:e.docs}}},lVXQ:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/TableRow/TableRow.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# TableRow API\n\n<p class="description">The API documentation of the TableRow React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport TableRow from \'@material-ui/core/TableRow\';\n// or\nimport { TableRow } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nWill automatically set dynamic row height\nbased on the material table element parent (head, body, etc).\n\n## Component name\n\nThe `MuiTableRow` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Should be valid &lt;tr> children such as `TableCell`. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'tr\'</span> | The component used for the root node. Either a string to use a HTML element or a component. |\n| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the table row will shade on hover. |\n| <span class="prop-name">selected</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the table row will have the selected shading. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTableRow-root</span> | Styles applied to the root element.\n| <span class="prop-name">selected</span> | <span class="prop-name">.Mui-selected</span> | Pseudo-class applied to the root element if `selected={true}`.\n| <span class="prop-name">hover</span> | <span class="prop-name">.MuiTableRow-hover</span> | Pseudo-class applied to the root element if `hover={true}`.\n| <span class="prop-name">head</span> | <span class="prop-name">.MuiTableRow-head</span> | Styles applied to the root element if table variant="head".\n| <span class="prop-name">footer</span> | <span class="prop-name">.MuiTableRow-footer</span> | Styles applied to the root element if table variant="footer".\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/TableRow/TableRow.js) for more detail.\n\n## Demos\n\n- [Tables](/components/tables/)\n\n'},mIrJ:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/table-row",function(){return a("NwkV")}])},zA0W:function(e,n,a){var o={"./table-row.md":"lVXQ"};function t(e){var n=s(e);return a(n)}function s(e){if(!a.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}t.keys=function(){return Object.keys(o)},t.resolve=s,e.exports=t,t.id="zA0W"}},[["mIrJ",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);