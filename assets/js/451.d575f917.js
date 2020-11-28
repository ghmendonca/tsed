(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{891:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"openspecbasejsonschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openspecbasejsonschema"}},[t._v("#")]),t._v(" OpenSpecBaseJsonSchema "),e("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { OpenSpecBaseJsonSchema } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/openspec"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.11.4/packages/openspec/src/common/OpenSpecJsonSchema.ts#L0-L0"}},[t._v("/packages/openspec/src/common/OpenSpecJsonSchema.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" OpenSpecBaseJsonSchema "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $ref?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * This attribute is a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" that provides a short description of the instance property.\n     *\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2\n     */\n    title?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Must be strictly greater than 0.\n     * A numeric instance is valid only if division by this keyword's value results in an integer.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.1\n     */\n    multipleOf?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Representing an inclusive upper limit for a numeric instance.\n     * This keyword validates only if the instance is less than or exactly equal to "maximum".\n     * @see https'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.2\n     */\n    maximum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Representing an exclusive upper limit for a numeric instance.\n     * This keyword validates only if the instance is strictly less than "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(' to "exclusiveMaximum".\n     * @see https'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.3\n     */\n    exclusiveMaximum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Representing an inclusive lower limit for a numeric instance.\n     * This keyword validates only if the instance is greater than or exactly equal to "minimum".\n     * @see https'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.4\n     */\n    minimum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Representing an exclusive lower limit for a numeric instance.\n     * This keyword validates only if the instance is strictly greater than "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(' to "exclusiveMinimum".\n     * @see https'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.5\n     */\n    exclusiveMinimum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Must be a non-negative integer.\n     * A "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" instance is valid against this keyword if its length is less than"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.6\n     */\n    maxLength?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Must be a non-negative integer.\n     * A "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" instance is valid against this keyword if its length is greater than"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * Omitting this keyword has the same behavior "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a value of 0.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.7\n     */\n    minLength?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Should be a valid regular expression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" according to the ECMA 262 regular expression dialect.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.8\n     */\n    pattern?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Must be a non-negative integer.\n     * An array instance is valid against "maxItems" if its size is less than'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.11\n     */\n    maxItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Must be a non-negative integer.\n     * An array instance is valid against "maxItems" if its size is greater than'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * Omitting this keyword has the same behavior "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a value of 0.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.12\n     */\n    minItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * If this keyword has "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" value false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the instance validates successfully.\n     * If it has "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" value true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the instance validates successfully if all of its elements are unique.\n     * Omitting this keyword has the same behavior "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a value of false.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.13\n     */\n    uniqueItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Must be a non-negative integer.\n     * An object instance is valid against "maxProperties" if its '),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" of properties is less than"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.15\n     */\n    maxProperties?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n    /**\n     * Must be a non-negative integer.\n     * An object instance is valid against "maxProperties" if its '),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" of properties is greater than"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     * or equal to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the value of this keyword.\n     * Omitting this keyword has the same behavior "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a value of 0.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.16\n     */\n    minProperties?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * This provides an enumeration of all possible values that are valid\n     * for the instance property. This MUST be an array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and each item in\n     * the array represents a possible value for the instance value. If\n     * this attribute is defined"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the instance value MUST be one of the\n     * values in the array in order for the schema to be valid.\n     *\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.23\n     */\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * This attribute is a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" that provides a full description of the of purpose the instance property.\n     *\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2\n     */\n    description?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * This keyword can be used to supply a default JSON value associated with a particular schema.\n     * It is RECOMMENDED that a default value be valid against the associated schema.\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.3\n     */\n    default?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-8\n     */\n    format?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A single type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or a union of simple types\n     * @see https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.25\n     */\n    type?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTypes.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecTypes")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),e("h2",{attrs:{id:"members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("$ref?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("title?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("This attribute is a string that provides a short description of the instance property.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("multipleOf?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Must be strictly greater than 0.\nA numeric instance is valid only if division by this keyword's value results in an integer.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maximum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Representing an inclusive upper limit for a numeric instance.\nThis keyword validates only if the instance is less than or exactly equal to "maximum".')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("exclusiveMaximum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Representing an exclusive upper limit for a numeric instance.\nThis keyword validates only if the instance is strictly less than (not equal to) to "exclusiveMaximum".')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("minimum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Representing an inclusive lower limit for a numeric instance.\nThis keyword validates only if the instance is greater than or exactly equal to "minimum".')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("exclusiveMinimum?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Representing an exclusive lower limit for a numeric instance.\nThis keyword validates only if the instance is strictly greater than (not equal to) to "exclusiveMinimum".')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maxLength?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Must be a non-negative integer.\nA string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("minLength?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Must be a non-negative integer.\nA string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.\nOmitting this keyword has the same behavior as a value of 0.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("pattern?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Should be a valid regular expression, according to the ECMA 262 regular expression dialect.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maxItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Must be a non-negative integer.\nAn array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword.')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("minItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Must be a non-negative integer.\nAn array instance is valid against "maxItems" if its size is greater than, or equal to, the value of this keyword.\nOmitting this keyword has the same behavior as a value of 0.')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("uniqueItems?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("If this keyword has boolean value false, the instance validates successfully.\nIf it has boolean value true, the instance validates successfully if all of its elements are unique.\nOmitting this keyword has the same behavior as a value of false.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maxProperties?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Must be a non-negative integer.\nAn object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword.')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("minProperties?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v('Must be a non-negative integer.\nAn object instance is valid against "maxProperties" if its number of properties is greater than,\nor equal to, the value of this keyword.\nOmitting this keyword has the same behavior as a value of 0.')])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("This provides an enumeration of all possible values that are valid\nfor the instance property. This MUST be an array, and each item in\nthe array represents a possible value for the instance value. If\nthis attribute is defined, the instance value MUST be one of the\nvalues in the array in order for the schema to be valid.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("description?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("This attribute is a string that provides a full description of the of purpose the instance property.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("default?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("This keyword can be used to supply a default JSON value associated with a particular schema.\nIt is RECOMMENDED that a default value be valid against the associated schema.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("format?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecTypes.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecTypes")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("A single type, or a union of simple types")])])])}),[],!1,null,null,null);s.default=n.exports}}]);