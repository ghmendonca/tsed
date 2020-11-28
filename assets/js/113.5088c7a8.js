(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{556:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"converterservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#converterservice"}},[s._v("#")]),s._v(" ConverterService "),n("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[s._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { ConverterService } "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),n("tr",[n("th",[s._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.4/packages/common/src/mvc/services/ConverterService.ts#L0-L0"}},[s._v("/packages/common/src/mvc/services/ConverterService.ts")])])])])])]),s._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" ConverterService "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",[n("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injectorService<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> configuration<span class="token punctuation">:</span> <a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * Convert instance to plainObject.\n *\n * @param obj\n * @param options\n */\n<span class="token function">serialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/json-mapper/utils/JsonSerializerOptions.html"><span class="token">JsonSerializerOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * @deprecated Since v6.\n */\n<span class="token function">serialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/mvc/services/ConverterOptions.html"><span class="token">ConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * @deprecated Since v6. <a href="/api/common/mvc/decorators/method/Use.html"><span class="token">Use</span></a> classToPlainObject <span class="token keyword">from</span> @tsed/json-mapper instead\n */\n<span class="token function">serializeClass</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/mvc/services/ConverterOptions.html"><span class="token">ConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n/**\n * Convert a plainObject to targetType.\n *\n * ### <a href="/api/common/mvc/decorators/method/Options.html"><span class="token">Options</span></a>\n *\n * - `ignoreCallback`<span class="token punctuation">:</span> callback called for each object which will be deserialized. The callback can return a <span class="token keyword">boolean</span> to avoid the default converter behavior.\n * - `checkRequiredValue`<span class="token punctuation">:</span> Disable the required check condition.\n *\n * @param obj Object source that will be deserialized\n * @param options Mapping options\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/json-mapper/utils/JsonDeserializerOptions.html"><span class="token">JsonDeserializerOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/mvc/services/ConverterOptions.html"><span class="token">ConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * @deprecated Since v6.\n */\n<span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> collectionType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> baseType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/mvc/services/ConverterOptions.html"><span class="token">ConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),n("p",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"members"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("serialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/json-mapper/utils/JsonSerializerOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSerializerOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("p",[s._v("Convert instance to plainObject.")])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("serialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/services/ConverterOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("ConverterOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("serializeClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/services/ConverterOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("ConverterOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/json-mapper/utils/JsonDeserializerOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonDeserializerOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("Param")]),s._v(" "),n("th",[s._v("Type")]),s._v(" "),n("th",[s._v("Description")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("obj")]),s._v(" "),n("td",[n("code",[s._v("any")])]),s._v(" "),n("td",[s._v("Object source that will be deserialized  options")])])])]),s._v(" "),n("p",[s._v("Convert a plainObject to targetType.")]),s._v(" "),n("h3",{pre:!0,attrs:{id:"options"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("ignoreCallback")]),s._v(": callback called for each object which will be deserialized. The callback can return a boolean to avoid the default converter behavior.")]),s._v(" "),n("li",[n("code",[s._v("checkRequiredValue")]),s._v(": Disable the required check condition.")])])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/services/ConverterOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("ConverterOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),n("hr"),s._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collectionType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" baseType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/services/ConverterOptions.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("ConverterOptions")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);