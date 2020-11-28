(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{626:function(s,a,n){"use strict";n.r(a);var t=n(0),p=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"hooks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[s._v("#")]),s._v(" Hooks "),n("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[s._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Hooks } "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v('"@tsed/core"')])])])]),n("tr",[n("th",[s._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.4/packages/core/src/domain/Hooks.ts#L0-L0"}},[s._v("/packages/core/src/domain/Hooks.ts")])])])])])]),s._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Hooks "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",[n("code",[s._v('/**\n * Listen a hook event\n * @param event\n * @param cb\n */\n<span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> cb<span class="token punctuation">:</span> Function<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n * Remove a listener attached to an event\n * @param event\n * @param cb\n */\n<span class="token function">off</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> cb<span class="token punctuation">:</span> Function<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n * Trigger an event and call listener.\n * @param event\n * @param args\n * @param callThis\n */\n<span class="token function">emit</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> args?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callThis?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * Trigger an event<span class="token punctuation">,</span> listener alter given value and return it.\n * @param event\n * @param value\n * @param args\n * @param callThis\n */\n<span class="token function">alter</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> args?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callThis?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * Trigger an event and call async listener.\n * @param event\n * @param args\n * @param callThis\n */\n<span class="token function">asyncEmit</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> args?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callThis?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n/**\n * Trigger an event<span class="token punctuation">,</span> async listener alter given value and return it.\n * @param event\n * @param value\n * @param args\n * @param callThis\n */\n<span class="token function">asyncAlter</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> args?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callThis?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n')])])]),n("p",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"members"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Listen a hook event")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("off")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Remove a listener attached to an event")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callThis?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Trigger an event and call listener.")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("alter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callThis?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Trigger an event, listener alter given value and return it.")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asyncEmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callThis?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Trigger an event and call async listener.")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asyncAlter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callThis?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Trigger an event, async listener alter given value and return it.")])])])}),[],!1,null,null,null);a.default=p.exports}}]);