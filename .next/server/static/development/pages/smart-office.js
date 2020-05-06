module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/smart-office.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layouts/DefaultStyle.js":
/*!********************************************!*\
  !*** ./components/Layouts/DefaultStyle.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ActiveLink */ "./components/common/ActiveLink.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class DefaultStyle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    let {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let {
      pathname
    } = this.props.router;
    let layOutCls = '';

    if (pathname == '/home-three') {
      layOutCls = 'p-relative';
    }

    return __jsx("header", {
      id: "header"
    }, __jsx("div", {
      id: "navbar",
      className: `startp-nav ${layOutCls}`
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand",
      onClick: () => window.location.refresh()
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/alai_logo.png */ "./static/images/alai_logo.png"),
      alt: "logo",
      width: "150px"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "navbar-toggler-icon"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav nav ml-auto"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      onClick: () => window.location.refresh(),
      href: "/?style=brink-pink",
      className: "nav-link"
    }, "Home")), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Futuristic Solutions ", __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["ChevronDown"], null))), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/smart-office"
    }, __jsx("a", {
      className: "nav-link"
    }, "Smart Offices"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/smart-property"
    }, __jsx("a", {
      className: "nav-link"
    }, "Smart Properties"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/smart-city"
    }, __jsx("a", {
      className: "nav-link"
    }, "Smart Cities"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/smart-hospital"
    }, __jsx("a", {
      className: "nav-link"
    }, "Smart Healthcare"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/smart-port"
    }, __jsx("a", {
      className: "nav-link"
    }, "Smart Container Terminals"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/sw-development"
    }, __jsx("a", {
      className: "nav-link"
    }, "Software Services"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/products"
    }, __jsx("a", {
      className: "nav-link"
    }, "Products"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/about"
    }, __jsx("a", {
      className: "nav-link"
    }, "About"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/"
    }, __jsx("a", {
      className: "nav-link"
    }, "\xA0")))))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(DefaultStyle)));

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer-area bg-f7fafd"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/alai_logo.png */ "./static/images/alai_logo.png"),
      alt: "logo",
      width: "150px"
    })))), __jsx("p", null, "ALAI Labs is an IoT Technology company based in Singapore with a development center in India. ", __jsx("br", null), "At ALAI Labs, we are passionate about developing next-generation ingenious solutions. Our Products are affordable without compromising on the capability / quality."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "India Address"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], null), "24, A3, Subhagraha apartments, ", __jsx("br", null), "Balraman St,", __jsx("br", null), "Baktavatsalam Nagar, Adyar, Chennai, India"), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], null), "Email: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "info@alai-labs.com"))), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["PhoneCall"], null), "Phone: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "+91-44-4851-8350")))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Singapore Address"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], null), "10 Anson Road, ", __jsx("br", null), "#28-01 International Plaza, ", __jsx("br", null), "Singapore \u2013 079903"), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], null), "Email: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "info@alai-labs.com"))), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["PhoneCall"], null), "Phone: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "+65-8233-6313")))), __jsx("ul", {
      className: "social-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "facebook"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Facebook"], null)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "twitter"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Twitter"], null)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "instagram"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Instagram"], null)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "linkedin"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Linkedin"], null))))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "copyright-area"
    }, __jsx("p", null, "Copyright @2020 Alai Technology Labs. All rights reserved"))))), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/map.png */ "./static/images/map.png"),
      className: "map",
      alt: "map"
    }), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape1.png */ "./static/images/shape1.png"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape2.svg */ "./static/images/shape2.svg"),
      alt: "shape"
    })));
  }

}

/***/ }),

/***/ "./components/Layouts/GoTop.js":
/*!*************************************!*\
  !*** ./components/Layouts/GoTop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GoTop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onScrollStep", () => {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    _defineProperty(this, "scrollToTop", () => {
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    _defineProperty(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return __jsx("div", {
          className: "go-top",
          onClick: this.scrollToTop
        }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ArrowUp"], null));
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderGoTopIcon());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/Layouts/Header.js":
/*!**************************************!*\
  !*** ./components/Layouts/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultStyle */ "./components/Layouts/DefaultStyle.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx(_DefaultStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/ActiveLink.js":
/*!*****************************************!*\
  !*** ./components/common/ActiveLink.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/home-five/Cta.js":
/*!*************************************!*\
  !*** ./components/home-five/Cta.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Cta extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-cta-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "cta-repair-content"
    }, __jsx("h3", null, "Reach us to discover new possibilities"), __jsx("p", null, "The solutions we have developed till now are just the tip of the iceberg. The possibilities IoT offers are limitless. our team with a very diversified skillset can offer you simple and realistic solutions to your needs. Please reach out to us to see how we can be of assistance. You would sure not regret it."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Contact Us")))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/meetus.jpg */ "./static/images/meetus.jpg")
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./components/home-five/Feedback.js":
/*!******************************************!*\
  !*** ./components/home-five/Feedback.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const NextArrow = props => {
  const {
    onClick
  } = props;
  return __jsx("button", {
    className: "next-arrow slick-arrow",
    onClick: onClick
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null));
};

const PrevArrow = props => {
  const {
    onClick
  } = props;
  return __jsx("button", {
    className: "prev-arrow slick-arrow",
    onClick: onClick
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowLeft"], null));
};

class Feedback extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      imagesSlider: null,
      thumbnailsSlider: null,
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0
    });

    _defineProperty(this, "renderSliderFullContent", () => {
      return DEFAULT_PROPS.map(({
        name,
        profession,
        image,
        content
      }) => {
        return __jsx("div", {
          key: name
        }, __jsx("div", {
          className: "item"
        }, __jsx("div", {
          className: "single-repair-feedback"
        }, __jsx("div", {
          className: "client-img"
        }, __jsx("img", {
          src: image,
          alt: "image"
        }), __jsx("h3", null, name), __jsx("span", null, profession)), __jsx("p", null, content))));
      });
    });

    _defineProperty(this, "renderSliderImages", () => {
      return DEFAULT_PROPS.map(({
        name,
        image
      }) => {
        return __jsx("div", {
          key: name
        }, __jsx("div", {
          className: "item"
        }, __jsx("div", {
          className: "img-fill"
        }, __jsx("img", {
          src: image,
          alt: "client"
        }))));
      });
    });
  }

  componentDidMount() {
    this.setState({
      imagesSlider: this.slider1,
      thumbnailsSlider: this.slider2
    });
  }

  render() {
    const sliderSettings1 = {
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      fade: true,
      autoplay: true,
      draggable: true,
      asNavFor: this.state.thumbnailsSlider,
      draggable: false,
      arrows: false,
      nextArrow: false,
      prevArrow: false
    };
    const sliderSettings2 = {
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: 'linear',
      autoplay: true,
      centerMode: true,
      draggable: false,
      focusOnSelect: true,
      asNavFor: this.state.imagesSlider,
      nextArrow: __jsx(NextArrow, null),
      prevArrow: __jsx(PrevArrow, null),
      beforeChange: (current, next) => this.setState({
        oldSlide: current,
        activeSlide: next
      }),
      afterChange: current => this.setState({
        activeSlide2: current
      })
    };
    return __jsx("section", {
      className: "feedback-area ptb-80 bg-f7fafd"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "What users Saying"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "feedback-slides"
    }, __jsx("div", {
      className: "client-feedback"
    }, __jsx("div", null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
      ref: slider => this.slider1 = slider
    }, sliderSettings1), this.renderSliderFullContent()))), __jsx("div", {
      className: "client-thumbnails"
    }, __jsx("div", null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
      ref: slider => this.slider2 = slider
    }, sliderSettings2), this.renderSliderImages()))))), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape1.png */ "./static/images/shape1.png"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape2 rotateme"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape2.svg */ "./static/images/shape2.svg"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape4"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape4.svg */ "./static/images/shape4.svg"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape5"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape5.png */ "./static/images/shape5.png"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape6 rotateme"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape4.svg */ "./static/images/shape4.svg"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape7"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape4.svg */ "./static/images/shape4.svg"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/shape2.svg */ "./static/images/shape2.svg"),
      alt: "shape"
    })));
  }

}

const DEFAULT_PROPS = [{
  name: 'David Gale',
  profession: 'Web Developer',
  image: __webpack_require__(/*! ../../static/images/client-image/client2.jpg */ "./static/images/client-image/client2.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Matt Damon',
  profession: 'Software Engineer',
  image: __webpack_require__(/*! ../../static/images/client-image/client4.jpg */ "./static/images/client-image/client4.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Nicky Parsons',
  profession: 'Fictional Character',
  image: __webpack_require__(/*! ../../static/images/client-image/client1.jpg */ "./static/images/client-image/client1.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Jason Momoa',
  profession: 'American Actor',
  image: __webpack_require__(/*! ../../static/images/client-image/client5.jpg */ "./static/images/client-image/client5.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Gennady Korotkevich',
  profession: 'Sport Programmer',
  image: __webpack_require__(/*! ../../static/images/client-image/client3.jpg */ "./static/images/client-image/client3.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Petr Mitrichev',
  profession: 'Russian Programmer',
  image: __webpack_require__(/*! ../../static/images/client-image/client2.jpg */ "./static/images/client-image/client2.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Reid W. Barton',
  profession: 'Mathematics',
  image: __webpack_require__(/*! ../../static/images/client-image/client5.jpg */ "./static/images/client-image/client5.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  name: 'Lisa Sauermann',
  profession: 'Mathematician',
  image: __webpack_require__(/*! ../../static/images/client-image/client1.jpg */ "./static/images/client-image/client1.jpg"),
  content: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}];
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ }),

/***/ "./components/home-five/Team.js":
/*!**************************************!*\
  !*** ./components/home-five/Team.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Team extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "team-area iot-team-area ptb-80 bg-f9f6f6"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our Partners and Clients"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./components/home-one/Funfacts.js":
/*!*****************************************!*\
  !*** ./components/home-one/Funfacts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! odometer/themes/odometer-theme-default.css */ "./node_modules/odometer/themes/odometer-theme-default.css");
/* harmony import */ var odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Odometer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-odometerjs */ "react-odometerjs", 7)), {
  ssr: false,
  loading: () => 0,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-odometerjs */ "react-odometerjs")],
    modules: ['react-odometerjs']
  }
});


class Funfacts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      download: 0,
      feedback: 0,
      worker: 0,
      contributor: 0
    });
  }

  componentDidMount() {
    this.setState({
      download: 600,
      feedback: 250,
      worker: 333,
      contributor: 474
    });
  }

  render() {
    const {
      download,
      feedback,
      worker,
      contributor
    } = this.state;
    return __jsx("section", {
      className: "funfacts-area ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "We always try to understand users expectation"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx(Odometer, {
      format: "d",
      duration: 500,
      value: download
    }), "K"), __jsx("p", null, "Downloaded"))), __jsx("div", {
      className: "col-lg-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx(Odometer, {
      format: "d",
      duration: "500",
      value: feedback
    }), "K"), __jsx("p", null, "Feedback"))), __jsx("div", {
      className: "col-lg-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx(Odometer, {
      format: "d",
      duration: "500",
      value: worker
    }), "K"), __jsx("p", null, "Workers"))), __jsx("div", {
      className: "col-lg-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx(Odometer, {
      format: "d",
      duration: "500",
      value: contributor
    }), "K"), __jsx("p", null, "Contributors")))), __jsx("div", {
      className: "contact-cta-box"
    }, __jsx("h3", null, "Have any question about us?"), __jsx("p", null, "Don't hesitate to contact us"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Contact Us"))), __jsx("div", {
      className: "map-bg"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/map.png */ "./static/images/map.png"),
      alt: "map"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Funfacts);

/***/ }),

/***/ "./components/smart-office/About.js":
/*!******************************************!*\
  !*** ./components/smart-office/About.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "repair-about-area ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-about-content"
    }, __jsx("span", {
      className: "sub-title"
    }, "About Us"), __jsx("h2", null, "We have 35 years of experience in repair services"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("ul", null, __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Experienced Professionals")), __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Expert Technical Skills")), __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Excellent Reputation")), __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Friendly Service")), __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Trustworthy See Reviews")), __jsx("li", null, __jsx("span", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], null), " Affordable Diagnosis"))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-about-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "fadeInDown"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about1.jpg */ "./static/images/about1.jpg"),
      className: "wow fadeInDown",
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about2.jpg */ "./static/images/about2.jpg"),
      className: "wow zoomIn",
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about3.jpg */ "./static/images/about3.jpg"),
      className: "wow fadeInUp",
      alt: "image"
    })), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about-shape1.png */ "./static/images/about-shape1.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/about-shape2.png */ "./static/images/about-shape2.png"),
      alt: "image"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/smart-office/Blog.js":
/*!*****************************************!*\
  !*** ./components/smart-office/Blog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Blog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "blog-area ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "The News from Our Blog"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/blog-image/blog1.jpg */ "./static/images/blog-image/blog1.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Calendar"], null), " March 15, 2019")), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "The security risks of changing package owners"))), __jsx("span", null, "By", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      href: "#"
    }, "admin"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more-btn"
    }, "Read More ", __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null)))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/blog-image/blog2.jpg */ "./static/images/blog-image/blog2.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Calendar"], null), " March 17, 2019")), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Tips to Protecting Your Business and Family"))), __jsx("span", null, "By", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "smith"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more-btn"
    }, "Read More ", __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null)))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/blog-image/blog3.jpg */ "./static/images/blog-image/blog3.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Calendar"], null), " March 19, 2019")), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Protect Your Workplace from Cyber Attacks"))), __jsx("span", null, "By", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "john"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more-btn"
    }, "Read More ", __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null)))))))));
  }

}

/***/ }),

/***/ "./components/smart-office/MainBanner.js":
/*!***********************************************!*\
  !*** ./components/smart-office/MainBanner.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MainBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "repair-main-banner"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "repair-banner-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/office-banner-1.jpg */ "./static/images/office-banner-1.jpg"),
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "image"
    }))))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null)), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "repair-banner-content"
    }, __jsx("p", null, "We at ALAI Labs, have built solutions for smart offices based on wireless, vision and sound based modules. Our systems can control all the utilities in office premises. Implement biometric access based on face recognition, automated temperature checks and social distancing which is the new norm after Covid 19 scenario. Make utilities like lockers and bins intelligent. Automate facility reservation. Build the office of the future. ")))), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-content"
    }, __jsx("h3", null, "Smart Lockers"), __jsx("p", null, "Hi Tech lockers that open and close based on face recognition. Register up to 1000 users with a single installation. No more headaches with lost locker keys or pins"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/smartlocker.jpg */ "./static/images/smartlocker.jpg"),
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "image"
    }))))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null)), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/thermal.png */ "./static/images/thermal.png"),
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-content"
    }, __jsx("h3", null, "Biometric Access Control + Thermal Scanning"), __jsx("ul", null, __jsx("li", null, "Enable access to your employees using face recognition"), __jsx("li", null, "Automatically check temperature on entry and stop access if temperature is beyond threshold"), __jsx("li", null, "Automatically check for sickness based on emotions and alert accordingly")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started"))))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null)), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("br", null), __jsx("br", null))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-content"
    }, __jsx("h3", null, "Facility Booking and Access System"), __jsx("ul", null, __jsx("li", null, "Select and reserve meeting rooms based on availability"), __jsx("li", null, "Enable access based on QR Code / Biometrics"), __jsx("li", null, "Automatically turn on / off utilities in meeting room based on schedule")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "repair-banner-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/reserve.jpg */ "./static/images/reserve.jpg"),
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "image"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/odometer/themes/odometer-theme-default.css":
/*!*****************************************************************!*\
  !*** ./node_modules/odometer/themes/odometer-theme-default.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/smart-office.js":
/*!*******************************!*\
  !*** ./pages/smart-office.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-preloading-screen */ "react-preloading-screen");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/Header */ "./components/Layouts/Header.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layouts/GoTop */ "./components/Layouts/GoTop.js");
/* harmony import */ var _components_smart_office_MainBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/smart-office/MainBanner */ "./components/smart-office/MainBanner.js");
/* harmony import */ var _components_smart_office_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/smart-office/About */ "./components/smart-office/About.js");
/* harmony import */ var _components_home_five_Cta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-five/Cta */ "./components/home-five/Cta.js");
/* harmony import */ var _components_home_one_Funfacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home-one/Funfacts */ "./components/home-one/Funfacts.js");
/* harmony import */ var _components_home_five_Team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home-five/Team */ "./components/home-five/Team.js");
/* harmony import */ var _components_home_five_Feedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home-five/Feedback */ "./components/home-five/Feedback.js");
/* harmony import */ var _components_smart_office_Blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/smart-office/Blog */ "./components/smart-office/Blog.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Preloader"], null, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], null, __jsx("div", {
  className: "preloader"
}, __jsx("div", {
  className: "spinner"
}))), __jsx(_components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_smart_office_MainBanner__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_home_five_Cta__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
  scrollStepInPx: "50",
  delayInMs: "16.66"
}))));

/***/ }),

/***/ "./static/images/about-shape1.png":
/*!****************************************!*\
  !*** ./static/images/about-shape1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-shape1-e71b41368bb41ac764696421e06fa98a.png";

/***/ }),

/***/ "./static/images/about-shape2.png":
/*!****************************************!*\
  !*** ./static/images/about-shape2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-shape2-724fe494707877d149a155b9f554dd0b.png";

/***/ }),

/***/ "./static/images/about1.jpg":
/*!**********************************!*\
  !*** ./static/images/about1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgApQEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqG7uBa27Sldx6Ko7mgCais77ZeQMjXUEYiYgZQ8rn1qW6upUmW3tow8xG47jwo96ALlFVbW4mkkeG4iCSpg/L0Ye1VY7rU508yGGAxknaTn1x60AalFMiLmJDIAHwNwHTNPoAKKKRmCqWY4AGST2oAWiqUOoJcX5giKtGE3FvfNTXdz9miDBS7sQqKO5NAE9FUYrm7SeOO6hRVk4VkPQ+hps1zem7kitY4mWMDJfOefxoA0KKgtWuWjJukRXzwE6YqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqOWFJwokGQrBhz3FSVT1NpBabYkdi7BW2DJx3oAgupv7Qb7Hbjcu4eZJ2UA/wA6jeO4n1W6SGXygAm5+4GOg/z2p8V80EYjj024VR0AQ1LP51peNcRQtNHIoDqvUEdDQA20kuYpprSZ/MdU3xv6jpVeOy1GG1VludjIOIh0qzBFPcSzXMimFmj8uMHqo9T+NRi7vRB5BtJDPjbv/hPvmgC9aT/abSObGCw5+veoNSgZ4RPFxNCd6n1HcVPaQfZrWOHOSo5+tQah5sqJbRK3704dwOFXvzQBFYlr65N664VRsiX09TWiQGBBAIPBBrPt4nsb5oURzbSjcpAJCN71o0AZ6xpHrgCIqj7PnCjH8VN1PzTdWaw43ktgnoDgc/hUpR/7ZEm1tnkY3Y4zu6Zp19FKfKngXdJC2Qv94HgigCsv2uwuoRLcGeKVthz1BPSh7K8ku7h0n8hGYEEclsDFODT39xDut3hhibed/BLDpinNPdWk8qvBLPGzbkZOcD0oAfp80ziWC4IaWFsFh3HartU7CKVfOnnXbJM2dvoB0FXKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAr3cnliH995Ss+GfjptJ78dQKjiuZD8iYmYsdrE7QVGOenqcVZeMO0bHOUbcPyI/rSSwiQq25kZejL1/WgCMXQ2o7LtU7gxJ+6V6j9D+VC3asm/aQoj8xvVfb9D+VK1rG0CxHdtU568k98/Xn86ctvGpl4JEv3gen0/n+dAEdveLPJs+Tdt3DZIG49/TrTBesLZJpI0QSY2BpPUZ5OOKsRxGM8yyOMYAYjj9P5037OggjiBYCMAKwPIwMZoAjS8EkQKKrOX2AK+RnGevpiltCzPcl12t5vIzn+FaebfdGFaSQsG3B8jIP5Y/SlhhEIfDMxdtxLHnOAP6UAVxM8M103l7o1cFm3YIGxc4Hep3uBG8iuMbV3D/aH/6/5imtaK8kjGSTEhBdARg4AH9KJIjNdRlkwkXIYkfMf8/yFADp5HSylkHyyLGW9cHFRy3Y2qEEoYugy0TAYLAHkj0qeWMSxPG2QHUqce9EkYkUKc4DBuPYg/0oAgRZftbIbmUqqq2CF5yT7e1RpdyIJvM+Ylm8oY64Yrt/l+dWxGBK0nOWUKfwz/jSLBGoA2hsMWBYZIJJPH50AV4ZZfLtw77mMzoxwOQN3+Aq5UDWwKKFkdCrlwwxnJznqPc09YmG3dNI5Vs5OBnjGDgDigCKDzZkSYzEBsMECjGPT1zQfNmmkVJTGsZC8KCScA9+3NPW2CN8ssipnOwEY/ln9aJLcO5dZJI2Iw2wjn8xQBWa6lBhfI2qHMoA67WCk/qTUkc8kl9gN+5KsFGOpBXJ/Uj8KmW3jUpgcIpQDtg4zn8qUQoroyjbsUqFHAwcf4UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z"

/***/ }),

/***/ "./static/images/about2.jpg":
/*!**********************************!*\
  !*** ./static/images/about2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBVAH5AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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KKKACiiigBGVXXayhgexGaYlvBG25IY1PqqgVJRQAUUUUAFFFFABUbwQyNueKNm9WUE1JRQAAYGB0ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikDAkgEEg4PtQAtFIGBJAIJBwfaloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooArXjAeQGMgUyYby92T8rf3efSo45JgREmRuLMplBJCjH49TVtkVipIyVOR7HBH9TSSQpKBvB4OQQSCPxFAEH2srGkjgBfmVseoz0/I/pSLdsUZymPLiLOvcNzx+h/SpzBEYljKDYpBA9MUqxIpchRlzlvegCC3uJJJNrqcFd2RGyge3PWoxdTi1ilcJum27QqMduQT25NWo4I4jlAemOWJwPbPSjyI/JWLb8igADPTHTmgCBbmVo1G0CRpNgLIVB4znB56frTrTfvufM27vN529PurUn2eLy/LIJGc5LEnPrnrSxQxwhhGuNx3HknJ/GgCqZJYpLuRdnlo4ZgQcn5Fzj0qaW5MMjKwByuY8fxHpj8yPzpzWsLSGQp8zEE/McHHTI/ChomkuUdwuyPlOckk9z+tACXJdbCZicOIicrxzjtUc08mxR5EseZEG4lf7w9DVl0WSNkYZVgQR7UOiuMMMjIP4g5FAFZIVF4675cKiMAZWPOW9/YVCk8kXmAsWMruIsnOGDEY+nQ/nV8IokLgfMQAT7DOP5mhEVBhRgZJ/EnJoApwl1jtlMjN+/dSSeSBv6/kKvVE1vEyBSGADFxtYggnOeR9TSrAi7fvHa24FnLYOMdz6GgCG3QyxRztJJvbDEBjge2OntS7DcTyhpJFEZAUIxXsDnjr1/SpPs0Qk3hSDnOAxxn1x0okt4pW3OpzjGVYjI98daAKbSykwyB2OxZCwHRwrAZx9MmpIZGlvhIHPlOjhFzwQCvP6n8KtCJFZSFAKqVXHYHH+ApSimQOR8wBAPscZ/kKAHUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q=="

/***/ }),

/***/ "./static/images/about3.jpg":
/*!**********************************!*\
  !*** ./static/images/about3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgApQEJAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqG7uBa27Sldx6Ko7mgCais77ZeQMjXUEYiYgZQ8rn1qW6upUmW3tow8xG47jwo96ALlFVbW4mkkeG4iCSpg/L0Ye1VY7rU508yGGAxknaTn1x60AalFMiLmJDIAHwNwHTNPoAKKKRmCqWY4AGST2oAWiqUOoJcX5giKtGE3FvfNTXdz9miDBS7sQqKO5NAE9FUYrm7SeOO6hRVk4VkPQ+hps1zem7kitY4mWMDJfOefxoA0KKgtWuWjJukRXzwE6YqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqOWFJwokGQrBhz3FSVT1NpBabYkdi7BW2DJx3oAgupv7Qb7Hbjcu4eZJ2UA/wA6jeO4n1W6SGXygAm5+4GOg/z2p8V80EYjj024VR0AQ1LP51peNcRQtNHIoDqvUEdDQA20kuYpprSZ/MdU3xv6jpVeOy1GG1VludjIOIh0qzBFPcSzXMimFmj8uMHqo9T+NRi7vRB5BtJDPjbv/hPvmgC9aT/abSObGCw5+veoNSgZ4RPFxNCd6n1HcVPaQfZrWOHOSo5+tQah5sqJbRK3704dwOFXvzQBFYlr65N664VRsiX09TWiQGBBAIPBBrPt4nsb5oURzbSjcpAJCN71o0AZ6xpHrgCIqj7PnCjH8VN1PzTdWaw43ktgnoDgc/hUpR/7ZEm1tnkY3Y4zu6Zp19FKfKngXdJC2Qv94HgigCsv2uwuoRLcGeKVthz1BPSh7K8ku7h0n8hGYEEclsDFODT39xDut3hhibed/BLDpinNPdWk8qvBLPGzbkZOcD0oAfp80ziWC4IaWFsFh3HartU7CKVfOnnXbJM2dvoB0FXKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAr3cnliH995Ss+GfjptJ78dQKjiuZD8iYmYsdrE7QVGOenqcVZeMO0bHOUbcPyI/rSSwiQq25kZejL1/WgCMXQ2o7LtU7gxJ+6V6j9D+VC3asm/aQoj8xvVfb9D+VK1rG0CxHdtU568k98/Xn86ctvGpl4JEv3gen0/n+dAEdveLPJs+Tdt3DZIG49/TrTBesLZJpI0QSY2BpPUZ5OOKsRxGM8yyOMYAYjj9P5037OggjiBYCMAKwPIwMZoAjS8EkQKKrOX2AK+RnGevpiltCzPcl12t5vIzn+FaebfdGFaSQsG3B8jIP5Y/SlhhEIfDMxdtxLHnOAP6UAVxM8M103l7o1cFm3YIGxc4Hep3uBG8iuMbV3D/aH/6/5imtaK8kjGSTEhBdARg4AH9KJIjNdRlkwkXIYkfMf8/yFADp5HSylkHyyLGW9cHFRy3Y2qEEoYugy0TAYLAHkj0qeWMSxPG2QHUqce9EkYkUKc4DBuPYg/0oAgRZftbIbmUqqq2CF5yT7e1RpdyIJvM+Ylm8oY64Yrt/l+dWxGBK0nOWUKfwz/jSLBGoA2hsMWBYZIJJPH50AV4ZZfLtw77mMzoxwOQN3+Aq5UDWwKKFkdCrlwwxnJznqPc09YmG3dNI5Vs5OBnjGDgDigCKDzZkSYzEBsMECjGPT1zQfNmmkVJTGsZC8KCScA9+3NPW2CN8ssipnOwEY/ln9aJLcO5dZJI2Iw2wjn8xQBWa6lBhfI2qHMoA67WCk/qTUkc8kl9gN+5KsFGOpBXJ/Uj8KmW3jUpgcIpQDtg4zn8qUQoroyjbsUqFHAwcf4UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z"

/***/ }),

/***/ "./static/images/alai_logo.png":
/*!*************************************!*\
  !*** ./static/images/alai_logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alai_logo-f49327dec228e11d2f7c1768453728e6.png";

/***/ }),

/***/ "./static/images/blog-image/blog1.jpg":
/*!********************************************!*\
  !*** ./static/images/blog-image/blog1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./static/images/blog-image/blog2.jpg":
/*!********************************************!*\
  !*** ./static/images/blog-image/blog2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAA1wAAAK8CAAAAADeveEuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AABDoSURBVHja7d39k111Ycfxb5INC/IQgQJFeaoJFih2yvhQbWcMUETLk6PVsYVqETIdZmhVRm0YrVgdaKdFWyMPhcEnxoKtEkJ9IJGIAi2ixgmSaiQQEK1ASNj7N/Scc/c+bPbu3rkz97Nsyuv1S875nrt7vj9837Pnnnt2U1pARHmhJwD/X4kLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LENbqnP3PeMftPHP2ma385Y3j3Fy44ZvnkiRffN2N040Wv2G/ihD/dMBWc0I7LZ7lm/vMvxKwQ18g+f3iZ9tLr+4a/tbIzfPGz3cGd53cGz3osN6Mflll+b77zL8ysENeoPtq/hj/YHb5pojd69p7pwZ2v7A2uzK3jOeMafP4FmhXiGtHt9ZI8/bpN99x4Vr116/TwhqWlLDn3lnvWXzZZjV7VHpw6u9o+8mN3bfzkb9Y/JWLXYAPiesvc51+oWSGu0UxVF39Lrmtv37SklBOebzafflkpB9zWbH7vkFJe8mSzeVu1eE/dUW/tfFW1edsCzfG7y8ohj8x9/hdoVi9C4hrNvdVy/IvOzsXVzsZm6xPVVucN2A3V9j81W68tZb8t7cGt1Q+01yzMFHedUspN85z/hZnVi5G4RvOpqpxNnZ1N1c7f1xvPv7xapJ3rq91HlfKmemNLfXOj89pLqp0fLcgUP1zKeVNzn/8FmtWLkbhGs7ZajT/r7Py82vmbeuOb1cYXuq/57Jo1zeg11ei3O4P3VDuf7PtGD9/4t1fd/HBghvdPlBWPtuY+/wszqxclcY2mvv77r87OA9XO39UbV5Qy8atZrz23lIM69w1be1aU8sf1xqpS7m49dEb7vsPr21eVrfeWsvQ7nZdeXx24bsZ3GnK43/OvLuWz851/fLNiCHGNZkO1xNZ2duofY3fWG39Yymtnv/bYUt7Y21tdynH1v/Uy/sr+nbt6S5o4W7+qXnvSrvYLH60W/Jtn3sMbcrjfp0t53fPznX98s2IIcY1m92+XcsDm9vZ3Dihl5e5666WlvHvWS59dUsp7e7uXVmu2XqjVMr5msvpJd9pZv9Ms5Guboxs6V5it1vmlHProXt9ryOGeHSvKkvvmO/84Z8X8xDWiBw4pZfL9DzzzzP3vrxbjQd+rx56q1uDHW7tvOefoickT3z19TdXaWo1+tPeFH6t26xvk1TKuvvCS+sPbh88r3Tt31SXYxH/XG7fOeP/WMeRw13tKuWje8491VsxLXKN6sPuYU/Vzq/32q/4Qd92PTu1+gNt8iNTctf9M7+vWVbt1iqtK36fM9d26P2k260uw06ofg08eWcrbZ591yOHu5JaWyZ9Obw8+/1hnxbzENbLvH9yp6NAftke+Xb8RO7zX3PH/U4/+Z+l83tT4XLX7jVZ7Gb+h8+ZlV3WVOfF4s3lXNf6JVuvCUo7cOeCsQw5PO7OUyzvbg88/3lkxH3GN6p8nexXtv64Zqt+aTJTy8rV3bP63S+rDpz1Xja6vNr7U+7r6wmp9q72M13dHb672bmhvVj8vJrfUX/SVgecdcrhxdzWlHZ2dwecf86yYh7hGdGW1zg6+YvPjj2/+wEGdty93NKW9p/0w/JYTpu8HrO979LDyxd4yPqx7K7z19GT3iY//Pa6U1x/be8+0lyGHG6eXsqa7M/j8Y54V8xDXaP6jWownb2tvP3JStfPVVnvBlnM7F1UPLi/lFVPtC7DP977yX6vdr7eaZXxm3zd8dbV2pzfvaho95pdznHrI4VbzkfCSH3f3Bp9/3LNibuIaydQrSzlwW2fvJy8p5aQqo69Xq2/ZT7ovele1+2D71kHfp67/Uu3e22qW8cV93/GdpfxWZ/vSehnfNefJhxxutd5aytm9vcHnH/usmJO4RlIvzb/q7V7evtd2X303oDd6a/sp3odnPlpU/x7Y1lazjN/X9x3XlHJEZ3v7kmpN757z5EMOt366rJTbe7uDzz/2WTEncY3k2motfrO3+41q91Ot1s+qfy7tjdZ35j/Sau2qFuVlvdFLqmu2+l1ZtYz/uu87/nkpR3a2Lyp7Peo305DDrQ9VRfRFMPj8Y58VcxLXSOoHnrb1dre1H4bas9+Mpbl9+rmG46efjm/7o96DRn/W9x3PKWXV9Oa/N+9uJrfMce4hh5tH8y/rHxh8/jHPirmJayQfqdZZ30PjW9s/o1q/O2Npfr8arf9AzHmlHNV9Gm/qsFLOrTdWdf/ARePYUs5obz1xVClvO7SUP3h+4KmHHG4/mr+pf2Dw+cc7K+YhrpHUj4Z/rbf71enPg/6ylJW90RumX1T/cscPOoMPTRdXL+OlvT9cUV9Cvq+9+Y5Sjn7qxu5zfXsbcrj51c0jZhQw+PzjnRXzENdIflBmfOJTvx2pn9K4s9S/sdGxupTlT1X//rga/VBn8IrpOwfNx7VXdV+7ptrb0GzVt0Fub02dXsqBjww485DD1VXhkaVcOGNk8PnHOivmI66RTJ1SysS9nb17l5VySn2Jtae6jHpV5w+q1X+j4vxm6/dLOfQX7cHH6yurZqtexods6/sORzc3IXYc3n6eb+v+pZw5+1c7hhyufLf6vrfMHBp4/nHOinmJazT1s3hH3NPe3nhE9wPZ+uOis9or9o4Dqyus+5vN+l7ABc1zD7vO6V5PNo/Intx+unbzb1Tb/1BvTVVvhQ5rrsuuLr0/x9E15HCtfnRk+8yhgecf46yYn7hGM3Vu/buEF9y06e7r65U5/dcqWnteU0f34Tvv+Vz9+xqdy66pt1Tbqzfu+sX61/VeWr+7KeXgD2zY/KV3Lu08h9g8zXdzc3z3aaWs+Plepx1yuPaG6ft+/ZMddP4xzor5iWtEv15d+qz+9fTwtmP6Ri/q3FfYeWJv8OQn22PVMl5zam/42OYJ+u0ren9B8IFlfc9StQ05XHt2v1LetvfgoPOPb1YMIa5RPXdl97H4ySuf6w5v70Z30D/21uBjZ3ZGz35ieqhaxh988s2d4TOanwZTZ/U/VXXFzMf/hh5u1DfiPz5rdMD5xzYrhhHX6B67+oyjJiaOOv3qGX8KeuquC1dOLj38jdc8MWP0jrcfu3z5ce/o/ZcH9TJuTX3trS9btvz4d00P71y3bt23ul/zTLX35f5vMuRwY/PatWsfmj3X2ecf26wYRlwLbVX/X5hfNBbnrPZx4lpoi3MZL85Z7ePEtdAW5zJenLPax4lroS3OZbw4Z7WPE9dCW5zLeHHOah8nroW2OJfx4pzVPk5cC21xLuPFOat9nLgW2uJcxotzVvs4cUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQIi4IEReEiAtCxAUh4oIQcUGIuCBEXBAiLggRF4SIC0LEBSHighBxQYi4IERcECIuCBEXhIgLQsQFIeKCEHFBiLggRFwQ8n/N1E3+IntCRQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/blog-image/blog3.jpg":
/*!********************************************!*\
  !*** ./static/images/blog-image/blog3.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./static/images/client-image/client1.jpg":
/*!************************************************!*\
  !*** ./static/images/client-image/client1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./static/images/client-image/client2.jpg":
/*!************************************************!*\
  !*** ./static/images/client-image/client2.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./static/images/client-image/client3.jpg":
/*!************************************************!*\
  !*** ./static/images/client-image/client3.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./static/images/client-image/client4.jpg":
/*!************************************************!*\
  !*** ./static/images/client-image/client4.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./static/images/client-image/client5.jpg":
/*!************************************************!*\
  !*** ./static/images/client-image/client5.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./static/images/map.png":
/*!*******************************!*\
  !*** ./static/images/map.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-caeeab2fb5d346ea94236e9df14bfff0.png";

/***/ }),

/***/ "./static/images/meetus.jpg":
/*!**********************************!*\
  !*** ./static/images/meetus.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meetus-da8594c9abc3b7d750e3c85c2a0df59f.jpg";

/***/ }),

/***/ "./static/images/office-banner-1.jpg":
/*!*******************************************!*\
  !*** ./static/images/office-banner-1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/office-banner-1-6247738fcb9d6ab57195e7677a54a4c3.jpg";

/***/ }),

/***/ "./static/images/reserve.jpg":
/*!***********************************!*\
  !*** ./static/images/reserve.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reserve-83a7079d1a48b13a948295d26fc865a6.jpg";

/***/ }),

/***/ "./static/images/shape1.png":
/*!**********************************!*\
  !*** ./static/images/shape1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/shape2.svg":
/*!**********************************!*\
  !*** ./static/images/shape2.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/images/shape4.svg":
/*!**********************************!*\
  !*** ./static/images/shape4.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzICg3MjUyMCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+UGF0aCA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MTAwNzIlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEU5MkIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJNYWluLUZpbGVzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjY1ODU5Mzc1Ij4KICAgICAgICA8ZyBpZD0iMDFfaW5kZXgtQWdlbmN5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzLjAwMDAwMCwgLTU2Mi4wMDAwMDApIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxnIGlkPSJCYW5uZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4wMDAwMDAsIDM1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjUwMDAwMCwgMzI5LjUwMDAwMCkgcm90YXRlKC0yMjguMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjUwMDAwMCwgLTMyOS41MDAwMDApICIgcG9pbnRzPSIyIDMyMyAxMi41OTgzNjA3IDMzNiAyMyAzMjMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./static/images/shape5.png":
/*!**********************************!*\
  !*** ./static/images/shape5.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACSCAYAAADozTAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1MUE5OUFCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1MUE5OTlCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./static/images/smartlocker.jpg":
/*!***************************************!*\
  !*** ./static/images/smartlocker.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/smartlocker-7c2d140e3ab2fe3c09c0977dd7bc0763.jpg";

/***/ }),

/***/ "./static/images/thermal.png":
/*!***********************************!*\
  !*** ./static/images/thermal.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/thermal-2f14ca44f6396a5ab19207b5847e2e0f.png";

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/smart-office.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/murali/Downloads/alai-website-static/default/alai-ws-mp/pages/smart-office.js */"./pages/smart-office.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-odometerjs":
/*!***********************************!*\
  !*** external "react-odometerjs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-odometerjs");

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=smart-office.js.map