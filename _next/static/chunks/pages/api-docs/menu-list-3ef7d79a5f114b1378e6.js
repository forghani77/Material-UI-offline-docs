_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[116],{MAqi:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/MenuList/MenuList.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# MenuList API\n\n<p class="description">The API documentation of the MenuList React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport MenuList from \'@material-ui/core/MenuList\';\n// or\nimport { MenuList } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nA permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.\nIt\'s exposed to help customization of the [`Menu`](/api/menu/) component. If you\nuse it separately you need to move focus into the component manually. Once\nthe focus is placed inside the component it is fully keyboard accessible.\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">autoFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, will focus the `[role="menu"]` container and move into tab order. |\n| <span class="prop-name">autoFocusItem</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, will focus the first menuitem if `variant="menu"` or selected item if `variant="selectedMenu"`. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | MenuList contents, normally `MenuItem`s. |\n| <span class="prop-name">disabledItemsFocusable</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, will allow focus on disabled items. |\n| <span class="prop-name">disableListWrap</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the menu items will not wrap focus. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'menu\'<br>&#124;&nbsp;\'selectedMenu\'</span> | <span class="prop-default">\'selectedMenu\'</span> | The variant to use. Use `menu` to prevent selected items from impacting the initial focus and the vertical alignment relative to the anchor element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([List](/api/list/)).\n\n## Inheritance\n\nThe props of the [List](/api/list/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Menus](/components/menus/)\n\n'},Xpk9:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var s=t("mXGw"),a=t.n(s),o=t("e+1t"),i=t("kVtE"),p=a.a.createElement,r=t("ogQu");function u(e){var n=e.docs;return p(o.a,{docs:n})}u.getInitialProps=function(){var e=Object(i.a)({pageFilename:"api/menu-list",requireRaw:r});return{demos:e.demos,docs:e.docs}}},kzVF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/menu-list",function(){return t("Xpk9")}])},ogQu:function(e,n,t){var s={"./menu-list.md":"MAqi"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="ogQu"}},[["kzVF",0,2,1,3,5,4,6,7,8,9,10,11,12,13,15,16,14,17,18,19]]]);