(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_UserAuth_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/UserAuth.gql */ "./packages/framework/resources/graphql/UserAuth.gql");
/* harmony import */ var _graphql_UserAuth_gql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphql_UserAuth_gql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isNil */ "./node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: 'loginpost',
    type: String
  },
  data: function data() {
    return {
      loginForm: this.$form.createForm(this),
      loadingSubmitBtn: false
    };
  },
  methods: {
    handleLoginSubmit: function handleLoginSubmit(e) {
      var values, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleLoginSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(e.preventDefault());
              values = this.loginForm.getFieldsValue();
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.authMutation(values));

            case 4:
              result = _context.sent;

              if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(result.data.adminLogin.access_token)) {
                //localStorage.setItem(AUTH_TOKEN, result.auth.access_token);
                //this.$router.push('/')
                alert(result.data.adminLogin.access_token);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    authMutation: function authMutation(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function authMutation$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.$apollo.mutate({
                mutation: _graphql_UserAuth_gql__WEBPACK_IMPORTED_MODULE_2___default.a,
                //clientId: 'auth',
                variables: values
              }).then(function (data) {
                console.log(data);
                window.x = data;
                return data;
              })["catch"](function (error) {
                window.y = error; //console.error(error);
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a-row",
        { attrs: { type: "flex", align: "middle" } },
        [
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c(
                "a-row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "a-col",
                    { attrs: { span: 20, offset: 2 } },
                    [
                      _c(
                        "a-card",
                        { attrs: { title: "Card title" } },
                        [
                          _c(
                            "a-form",
                            {
                              attrs: {
                                form: _vm.loginForm,
                                method: "post",
                                action: "#"
                              },
                              on: { submit: _vm.handleLoginSubmit }
                            },
                            [
                              _c(
                                "a-form-item",
                                { attrs: { label: "Email Address" } },
                                [
                                  _c("a-input", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: [
                                          "email",
                                          {
                                            rules: [
                                              {
                                                required: true,
                                                message:
                                                  "Email Address is required"
                                              }
                                            ]
                                          }
                                        ],
                                        expression:
                                          "[\n                              'email',\n                              {\n                                  rules: [\n                                      {   required: true, \n                                          message: 'Email Address is required' \n                                      }\n                                  ]\n                              }\n                              ]"
                                      }
                                    ],
                                    attrs: { "auto-focus": true, name: "email" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-form-item",
                                { attrs: { label: "Password Label" } },
                                [
                                  _c("a-input", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: [
                                          "password",
                                          {
                                            rules: [
                                              {
                                                required: true,
                                                message: "Password is required"
                                              }
                                            ]
                                          }
                                        ],
                                        expression:
                                          "[\n                                  'password',\n                                  {rules: [{ required: true, message: 'Password is required' }]}\n                                  ]"
                                      }
                                    ],
                                    attrs: {
                                      name: "password",
                                      type: "password"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-form-item",
                                [
                                  _c(
                                    "a-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        loading: _vm.loadingSubmitBtn,
                                        "html-type": "submit"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                  Login Button\n                              "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "ml-1",
                                      attrs: { href: "#forgot-password-url" }
                                    },
                                    [_vm._v("Forgot password?")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c(
                "a-row",
                {
                  staticClass: "h-100 text-center",
                  attrs: { type: "flex", align: "middle" }
                },
                [
                  _c("a-col", { attrs: { span: 24 } }, [
                    _c("img", {
                      staticClass: "height-100",
                      attrs: {
                        src: "/avored-admin/images/avored_admin_login.svg",
                        width: "55%",
                        alt: "AvoRed Admin Login"
                      }
                    })
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./packages/framework/resources/components/system/LoginFields.vue":
/*!************************************************************************!*\
  !*** ./packages/framework/resources/components/system/LoginFields.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginFields.vue?vue&type=template&id=2bcd53e8& */ "./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8&");
/* harmony import */ var _LoginFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginFields.vue?vue&type=script&lang=js& */ "./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/framework/resources/components/system/LoginFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/framework/resources/components/system/LoginFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8&":
/*!*******************************************************************************************************!*\
  !*** ./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginFields.vue?vue&type=template&id=2bcd53e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/framework/resources/components/system/LoginFields.vue?vue&type=template&id=2bcd53e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFields_vue_vue_type_template_id_2bcd53e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./packages/framework/resources/graphql/UserAuth.gql":
/*!***********************************************************!*\
  !*** ./packages/framework/resources/graphql/UserAuth.gql ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"token_type"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":149}};
    doc.loc.source = {"body":"mutation AdminLogin ($email: String!, $password: String!) {\n  adminLogin (email: $email, password: $password) {\n    access_token\n    token_type\n  }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["AdminLogin"] = oneQuery(doc, "AdminLogin");
        


/***/ })

}]);