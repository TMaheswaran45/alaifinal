webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/products/Items.js":
/*!**************************************!*\
  !*** ./components/products/Items.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _QuickView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./QuickView */ "./components/products/QuickView.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Items = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Items, _Component);

  var _super = _createSuper(Items);

  function Items() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Items);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleAddToCart", function (id) {
      _this.props.addToCart(id);

      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "closeModal", function () {
      _this.setState({
        modalOpen: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleModalData", function (image, price, id) {
      _this.setState({
        modalImage: image,
        price: price,
        idd: id
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Items, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.props.products;
      var modalOpen = this.state.modalOpen;
      return __jsx("section", {
        className: "shop-area ptb-80"
      }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], null), __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "woocommerce-topbar"
      }, __jsx("div", {
        className: "row align-items-center"
      }, __jsx("div", {
        className: "col-lg-9 col-md-7"
      }, __jsx("div", {
        className: "woocommerce-result-count"
      }, __jsx("p", null, "Showing 1-5 of 5 results"))), __jsx("div", {
        className: "col-lg-3 col-md-5"
      }, __jsx("div", {
        className: "woocommerce-topbar-ordering"
      }, __jsx("select", {
        className: "form-control"
      }, __jsx("option", {
        value: "1"
      }, "Sort by Popularity"), __jsx("option", {
        value: "2"
      }, "Sort by Average Rating"), __jsx("option", {
        value: "0"
      }, "Sort by Latest"), __jsx("option", {
        value: "3"
      }, "Sort by price: Low to High"), __jsx("option", {
        value: "4"
      }, "Sort by price: High to Low"), __jsx("option", {
        value: "5"
      }, "Sort by New")))))), __jsx("div", {
        className: "row"
      }, products.map(function (data, idx) {
        return __jsx("div", {
          className: "col-lg-3 col-md-6",
          key: idx
        }, __jsx("div", {
          className: "single-products"
        }, __jsx("div", {
          className: "products-image"
        }, __jsx("img", {
          src: data.image,
          alt: "image"
        }), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#"
        }, __jsx("a", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.openModal();

            _this2.handleModalData(data.image, data.price, data.id);
          }
        }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_10__["Search"], null)))), __jsx("li", null, __jsx("a", {
          href: "#"
        }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_10__["Heart"], null))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/product-details"
        }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_10__["Link"], null)))))), __jsx("div", {
          className: "products-content"
        }, __jsx("h3", null, __jsx("a", {
          href: "#"
        }, data.title)), __jsx("span", null, "$", data.price), __jsx("ul", null, __jsx("li", null, __jsx("i", {
          className: "flaticon-star-1"
        })), __jsx("li", null, __jsx("i", {
          className: "flaticon-star-1"
        })), __jsx("li", null, __jsx("i", {
          className: "flaticon-star-1"
        })), __jsx("li", null, __jsx("i", {
          className: "flaticon-star-1"
        })), __jsx("li", null, __jsx("i", {
          className: "flaticon-star-1"
        }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#"
        }, __jsx("a", {
          className: "add-to-cart-btn",
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.handleAddToCart(data.id);
          }
        }, "Add to Cart")))));
      }))), modalOpen ? __jsx(_QuickView__WEBPACK_IMPORTED_MODULE_14__["default"], {
        closeModal: this.closeModal,
        idd: this.state.idd,
        image: this.state.modalImage,
        price: this.state.price
      }) : '');
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(id) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_13__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Items));

/***/ })

})
//# sourceMappingURL=products.js.d2021f0beb126b85a4c5.hot-update.js.map