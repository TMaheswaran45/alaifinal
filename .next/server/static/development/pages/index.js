module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
      href: "/contact"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact")))))))));
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
      className: "col-lg-3 col-md-6"
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
    })))), __jsx("p", null, "ALAI Labs is an IoT Technology company based in Singapore with a development center in India. ", __jsx("br", null), "At ALAI Labs, we are passionate about developing next-generation Smart property solutions. Our Products are smart and affordable with cognitive capabilities."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Company"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/features"
    }, __jsx("a", null, "Features"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/pricing"
    }, __jsx("a", null, "Our Pricing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Latest News")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "India Address"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], null), "24, A3, Subhagraha apartments, ", __jsx("br", null), "Balraman St,", __jsx("br", null), "Baktavatsalam Nagar, Adyar, Chennai, India"), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], null), "Email: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "info@alai-labs.com"))), __jsx("li", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["PhoneCall"], null), "Phone: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "+91-44-4851-8350")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
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

/***/ "./components/home-five/Blog.js":
/*!**************************************!*\
  !*** ./components/home-five/Blog.js ***!
  \**************************************/
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
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Cta extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "iot-cta-area bg-0f054b"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "cta-iot-img"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/iot-banner-image/technology.jpg */ "./static/images/iot-banner-image/technology.jpg"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "cta-iot-content"
    }, __jsx("h3", null, "Connect and Manage your IoT at Scale"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started!")))))), __jsx("div", {
      className: "circle-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/circle.png */ "./static/images/circle.png"),
      alt: "image"
    })), __jsx("div", {
      className: "cta-shape"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/cta-shape.png */ "./static/images/cta-shape.png"),
      alt: "image"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./components/home-five/Features.js":
/*!******************************************!*\
  !*** ./components/home-five/Features.js ***!
  \******************************************/
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




class Features extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "iot-features-area ptb-80 bg-f7fafd"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 iot-features-content"
    }, __jsx("h3", null, "App Development for Connected Devices"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus."), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Explore More"))), __jsx("div", {
      className: "col-lg-6 iot-features-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/iot-features-image/iot-feature-image1.png */ "./static/images/iot-features-image/iot-feature-image1.png"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "image"
    })))))), __jsx("section", {
      className: "iot-features-area ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 iot-features-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.6s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/iot-features-image/iot-feature-image2.png */ "./static/images/iot-features-image/iot-feature-image2.png"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 iot-features-content"
    }, __jsx("h3", null, "How Can Your City Use IoT Technology?"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus."), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Explore More")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Features);

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

/***/ "./components/home-five/Funfacts.js":
/*!******************************************!*\
  !*** ./components/home-five/Funfacts.js ***!
  \******************************************/
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

/***/ "./components/home-five/MainBanner.js":
/*!********************************************!*\
  !*** ./components/home-five/MainBanner.js ***!
  \********************************************/
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
      className: "ml-main-banner"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("h1", null, "NextGen Solutions for a connected world"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started"))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "ml-banner-single-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.5s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/ml-banner-image/ml-main-pic.png */ "./static/images/ml-banner-image/ml-main-pic.png"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.5s",
      alt: "image"
    }))))), __jsx("div", {
      className: "animate-border"
    }, __jsx("span", null), __jsx("span", null), __jsx("span", null), __jsx("span", null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/home-five/Partner.js":
/*!*****************************************!*\
  !*** ./components/home-five/Partner.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel3 */ "react-owl-carousel3");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "iot-partner-area bg-f9fafb"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
      className: "repair-partner-slides owl-theme"
    }, options), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/phenomq.png */ "./static/images/partner-img/phenomq.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover1.png */ "./static/images/partner-img/partner-hover1.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/elegante.png */ "./static/images/partner-img/elegante.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover2.png */ "./static/images/partner-img/partner-hover2.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/cpib.png */ "./static/images/partner-img/cpib.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover1.png */ "./static/images/partner-img/partner-hover1.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/cirruslogic.png */ "./static/images/partner-img/cirruslogic.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover10.png */ "./static/images/partner-img/partner-hover10.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/sutd.jpg */ "./static/images/partner-img/sutd.jpg"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover1.png */ "./static/images/partner-img/partner-hover1.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/alltrace.png */ "./static/images/partner-img/alltrace.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover1.png */ "./static/images/partner-img/partner-hover1.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "single-repair-partner"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/wizard.png */ "./static/images/partner-img/wizard.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/partner-img/partner-hover1.png */ "./static/images/partner-img/partner-hover1.png"),
      alt: "image"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./components/home-five/Services.js":
/*!******************************************!*\
  !*** ./components/home-five/Services.js ***!
  \******************************************/
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




class Services extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "iot-services-area ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Futuristic Solutions we have delivered"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "The last 4 years our team has been at work on creating top of the class solutions for multiple domains and deployed across the world ")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg1"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-software"
    })), __jsx("h3", null, "Smart Offices"), __jsx("p", null, "Attendance, Meeting room booking based on Face recognition, QR Code"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/smart-office?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg2"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-gear"
    })), __jsx("h3", null, "Smart Property"), __jsx("p", null, "Smart homes, Visitor Management, Security Cameras"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/smart-property?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg3"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-skyline"
    })), __jsx("h3", null, "Smart City"), __jsx("p", null, "Smart Bin, Smart Lockers, Traffic signal Management"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/smart-city?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg4"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-car-insurance"
    })), __jsx("h3", null, "Smart Hospitals"), __jsx("p", null, "Automatic Attendance and Body temperature check"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/smart-hospital?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg5"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-factory"
    })), __jsx("h3", null, "Smart Port"), __jsx("p", null, "Container and Vehicle movement, Productivity measurement"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/smart-port?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-repair-services bg6"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-chip"
    })), __jsx("h3", null, "Software Development"), __jsx("p", null, "App Development, Data analytics, Machine Learning"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sw-development?style=default"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Services);

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
    }, __jsx("h2", null, "Our Awesome Team"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "team-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/team-image/team1.jpg */ "./static/images/team-image/team1.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "team-content"
    }, __jsx("div", {
      className: "team-info"
    }, __jsx("h3", null, "Lakshmana Prabhu"), __jsx("span", null, "CEO & Founder")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Linkedin"], null))))), __jsx("p", null, "Passionate about solving real world problems. Avid Learner")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "team-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/team-image/team1.jpg */ "./static/images/team-image/team1.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "team-content"
    }, __jsx("div", {
      className: "team-info"
    }, __jsx("h3", null, "T K Viswanathan"), __jsx("span", null, "Director & Head of Technology")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Twitter"], null)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Linkedin"], null))))), __jsx("p", null, "Passionate about solving real world problems. Avid Learner")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "team-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/team-image/team1.jpg */ "./static/images/team-image/team1.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "team-content"
    }, __jsx("div", {
      className: "team-info"
    }, __jsx("h3", null, "Dr. Thiru Kanagasabapathy"), __jsx("span", null, "Partner & Advisor")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Facebook"], null)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Linkedin"], null))))), __jsx("p", null, "Passionate about solving real world problems. Avid Learner")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./components/home-five/WhyChoose.js":
/*!*******************************************!*\
  !*** ./components/home-five/WhyChoose.js ***!
  \*******************************************/
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




class WhyChoose extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "iot-why-choose-us ptb-80 pb-0"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Why We Are Best From Others"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-iot-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/icon1.png */ "./static/images/icon1.png"),
      alt: "image"
    })), __jsx("h3", null, "Digital Technology"), __jsx("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-iot-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/icon2.png */ "./static/images/icon2.png"),
      alt: "image"
    })), __jsx("h3", null, "Business Protection"), __jsx("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "single-iot-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../static/images/icon3.png */ "./static/images/icon3.png"),
      alt: "image"
    })), __jsx("h3", null, "Data Analysis"), __jsx("p", null, "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WhyChoose);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_home_five_MainBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home-five/MainBanner */ "./components/home-five/MainBanner.js");
/* harmony import */ var _components_home_five_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home-five/Partner */ "./components/home-five/Partner.js");
/* harmony import */ var _components_home_five_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-five/Services */ "./components/home-five/Services.js");
/* harmony import */ var _components_home_five_Cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home-five/Cta */ "./components/home-five/Cta.js");
/* harmony import */ var _components_home_five_Funfacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home-five/Funfacts */ "./components/home-five/Funfacts.js");
/* harmony import */ var _components_home_five_Features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home-five/Features */ "./components/home-five/Features.js");
/* harmony import */ var _components_home_five_Team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home-five/Team */ "./components/home-five/Team.js");
/* harmony import */ var _components_home_five_Feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home-five/Feedback */ "./components/home-five/Feedback.js");
/* harmony import */ var _components_home_five_WhyChoose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/home-five/WhyChoose */ "./components/home-five/WhyChoose.js");
/* harmony import */ var _components_home_five_Blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/home-five/Blog */ "./components/home-five/Blog.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Preloader"], null, __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], null, __jsx("div", {
  className: "preloader"
}, __jsx("div", {
  className: "spinner"
}))), __jsx(_components_Layouts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_home_five_MainBanner__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_home_five_Partner__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_home_five_Services__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_home_five_Cta__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_home_five_Team__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_components_home_five_Feedback__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
  scrollStepInPx: "50",
  delayInMs: "16.66"
}))));

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

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./static/images/blog-image/blog3.jpg":
/*!********************************************!*\
  !*** ./static/images/blog-image/blog3.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./static/images/circle.png":
/*!**********************************!*\
  !*** ./static/images/circle.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/circle-1c6521092255ec036985980094fb56b8.png";

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

/***/ "./static/images/cta-shape.png":
/*!*************************************!*\
  !*** ./static/images/cta-shape.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cta-shape-1db2a22eef1c435539f1f87747b128c4.png";

/***/ }),

/***/ "./static/images/icon1.png":
/*!*********************************!*\
  !*** ./static/images/icon1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNCOUY0N0JBNDY1MTFFOUFFOEU5QUM4QjQ5NDFGODQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNCOUY0N0FBNDY1MTFFOUFFOEU5QUM4QjQ5NDFGODQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGRmMmZhZDMtNmQzMy1lZDRjLTk4ZmMtNjE2YmIyMjdhZmVkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./static/images/icon2.png":
/*!*********************************!*\
  !*** ./static/images/icon2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAA3CAYAAABXefekAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzhFODE3NzdBNDY1MTFFOTgxQjE4NjJDNzVBNUNENTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhFODE3NzZBNDY1MTFFOTgxQjE4NjJDNzVBNUNENTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGRmMmZhZDMtNmQzMy1lZDRjLTk4ZmMtNjE2YmIyMjdhZmVkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./static/images/icon3.png":
/*!*********************************!*\
  !*** ./static/images/icon3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAA7CAYAAAAguzffAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODhBMjVENkZBNDY1MTFFOUI4OThDNzhEODQ0RTMwMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODhBMjVENkVBNDY1MTFFOUI4OThDNzhEODQ0RTMwMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGRmMmZhZDMtNmQzMy1lZDRjLTk4ZmMtNjE2YmIyMjdhZmVkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkchJ64AAA9lSURBVHja1FoJXFTVGj+zMMMMywAiKIIKaGqIK5b5zLTN5ysrX+bLtSyzsqdZ72X+sszM0qxeWi+ztNeiqdmiZeZWuaWCigIq4sY+gAjDgDDMPu//jefqdYDhjgVN5zff79w59557z/nf73zL/1zGrqF8u/PIEEgPfvwZxAU5KDqvYn/CIrsGIL5ANc5cbz6acTjjg8ioyNkKhSJBGaCs0BfqRw28eeAQnH8K8uTfh/X7/s8EhtLXDmaz2V6UX8QqL1T2xd+PKsorhFORkL0AyBWfGC/TheuW4H+TYMTeOTMIVRiktnj7kuo/DRjQhraoPi4uKF6XcShjuFew6s2yk8dPslBd6G7eNwAaYsPkk/D3AcgwSB9IqAgYO6pjkAPUBbILADn8cpnQ0rDb7eOy0rOY1WoVmrMhb0B+glAj2ZAnaAkJF3RO7Ly/XUy7njhMnLHw88WoJ0sc1znIAsiq1gRF6jLJhVa4AIQA3ibImMVzp5lF1+wlmTV/2Q+oya7IiguLB0W1i2JyuXwm/i/3AYxEyCeQx6E1kwDImdYAQy7lotS9qYvKSsqEiRdDxnoAcbmgfS0qshfMbrOzMn0Zqf9aTIi8TaaP4xsISQcgf/ULMLBE5nfp3mUrDjW86UNMuK6Zbm8KB4X5hdmwGSf43w+uYYwhpCUAJNgfNONeh90xWPT/YHMdAFYp1yAGm3E/AC2BkO1YQ97DxzGWQe6EZtX6Axi0XitF/51SbqwN0qqSeieRESW71B6ixoQuckCklgLIzeh3zC+WCVR8dN7ZvAdFTTc112fNj/ufS+6bHBUSGuKp7r4slVOQwQDibGt5Eyk2Q5tyU8oIeAQXb3oSHiPEy/UvB2oCF8tkDbz2/W7ru31JBqpDzTz2KNeIYn5Ptb94kxilUvlMVPsoYXak8usAiNbzwk27909HNa+J+0zCpIL48XIvz9tHgRmAuMCBoPvtaI18R2rQtRpBV8qRtCOhTqezPW8m9V0E2Qkx3dHz7Ji+CTVv7iwbr1KodU3dagqW3cfwDARkCcTzwu2QUQDChGfS2N6BPM3PvYu+T//hcQbKQ2PuuKE71P++gIAAISLsAllJ0aJc5ipN6lC+NExdqbqn4zKmtJxr6j6P86VioujS49w3kJEcCAWF/yIgqExH+w1SBguw5ZAwqlssa8Vg5tpstlcK8wrZhfMXnAKY/TuXsPsHnLjq2tO1N2fn1A4lwDzVOwVvOJ3nKsd526ekNRR68+VAEezoRobwM/re3sjk26D6B+RvEEogY0Sn9ZDDEIqV1uMZht8LDHrI+5CErCNZdyEZeweGdfTY3t+xNlpjg+sN1jj9fsMkpZPJo0XNKzChqXwSFMIfgczEIIkT0fJEzVsy2Bv9s3h/SvbmklEnby5hCnXcXs3H82p+M5/BQVFiQHbU04MUhkW3tX2/yYFYnEHmPZVTcusdodfzJgqeYtD/IibTGYPK5/ck+0F5zeBmHv86+s5B30E4/pIwEZ1zcW07CannUTMlkD095lpEuRWenfqbwRAX+8lRM1At9XaNC485bBx9pNTcvR9vegoTWuZBEZAa95PwyKPIgOdxIAJ5WznkbVpumGB5I8somieJz0La8mYC60Fc//3vCQYZ0UclhZP1fXMyq++OI08EMPpwIOjN7oB0l5Y+l9uXrNpKRlyIPQiUx8UEEfdE7SA1eE6dCJRwvkzGiAC5VdCQa6H9dJygodC6dmS7BQtlzDVMav8ae3TF3srJJocrgAxeBQeisySWzWJjr634jlVfNAlNb2Ais0XjojhnA4TimTRIHsBI4HlRIY5rAIiM8zDPCbkkLSNKFZQSJn8LR/gobyLy5rKKW53aIrW8TjKYocrzkcOj/mNPLxk0wyDrP8Qm13aQ2nfrvkwxEOsFIHh5q662bkpxQfGj1cZqGUXMCqWi/ezXln+G9nuCgoNqMZdhmMdZAPI8fwHEvHWEzIHMVnoB4WZUr0IIjHP4352MptlsjpGRQuGHmIM5XUqzL5pVb5U5//2FLlNhPND3/cHLo82KsOwSzQBTQdAtnYyqzm2bUlZTvYXtTT91KTiSyQxOl+sJPk5abvbM9ExXvameCVqG4JAhUCSbMunY0WMsJjbG1TG+YwmPc1wAhPrfBomA/BP/35B5ASMXVbzL5WJVhipWlF+UjofR+ha7STZ5yFFL1+gKSbnDlkztuZmrIjUWmywmpa1Rv2F42lVa4ZQpKowBCfkFwbdo9ZobutrkQQHCuV+PnGLrt6W5j4O1ga/lbFz0InfFJ/SF+o5FBUVCgHWIB4N5nDGbymMPFtEmYuN1119HvMhdeLFWADCH04tUnvC2TD4yGowL83PzieR1x1aNXVRsCFEDDK8gnK9W1E3+MOpMtl7V5zJJYVKHNwiHXY7ICOuZyAjDGYx+pdOi0OWUBfatzQseFpeTW3L5JdSazMIyDTDVmUqKC4s7CcQTearFc6cJUfIO5FAfcaP5GF7qfRaLhanVasrCP4d8JgJjhEykCQoe7OxI3ZvqxJp7D6r2ZHNv+/oO5WzCoMbZPCe8/tKtYVnvbdMl4PgqpipQ4WBnxv4keXmlfDPUeb5eLY8MVlRnfPt2GB9z0MF9B+dinLM475IEIGyefQFIAI89EsMjwn/ultTtXsHLQDtyUHWD5Itjd7LEm8mPq1SqzV6AIFq/CuIOOc+URTKLvaGCZRQEVqfMiTu9dKuulycQbs/gUFCEVC8VDAKCap28pkDsrUNCQ2bx43WNAcGZNxt3wcxkMlEUPUJ0WuBLOsk5wvGoXnOrfUFxktVqbSwc3sRvosPNIyCk5tE2h3zq6bI2VZdV2CJn0z7pxEa9E60z1Mmv8zZB9K2S5FIdiiuJRl1gtljBHI7LOwkVzdzGzdbhRVNE+j9R+0Uh5hJe6USK7evq6pi+SN8gxYBMwOS3NII4RXsrXsock4q3nPFVWhv5gg06VlMvbavD5FDUqhTNs4i0pJAZY9nJCBhx2h8Jt7mesl1aIs2taPeM5TKa4B5Re5ig8cIyWQh5uSivyEnewwO1oY0BcRWf13v9sYc+iHpz1ppgyUC4tciqlLxMYrRm4cbiSLVXXOe4vvx4PGxDx8b6op3c7Vi3NlpsxIuME50WQMyTc57TBqO52lhl9Mz//wUgJJGxe3I087mRklwqLSqbxEudCD9+5cfxMHpd+HFwu5h2sQGqACePOrdg4t09gCCNoJepValVruR+yS/BLERz40nXxgmsvxInKLNTp/2adr+HVpzl/lpSIVIGN79bJpMdwn0ipPQpr1dLVaOni2s1VTwApPIY5Hm8xF8w/qmBmsByu82+Hs+liZ8AALt4ZkoTHcp5F3PidYlF8JLH0e+86D5C+YEuIlamCgHJYk+SG1rh8uVNA5BcDGiIRqW0StoQMallzWoEvJxs0sn/ot4o2rKgiDGOa/WKpF5J2Um9k2QarcbFJ34rsXO8llN7fJf4+bowXQ9huaB/J86DCMZ3I3Vs4+YdEIw0wlD7XADIiduTY9fEhAc1e22JKTDA22l3IHQJCLovxQXCC6PIczUmJLBoZcEhwat69eu1C5o5HKF3NZYP7d2sSuiasK53/94sun20HMA5IBbe7wt2ZZdwEe5vJm8SKsTyHqWKXWMJ0ahKhyZ1YIUVF1lWQSWMauOKoq/TBDbBRhEACwGE53cbS3ii2BtCH8WsxcTGElEkphGwdDbxJfIin8dLlKBxjSAgvoL8hV9OTNu7dEBgfM3J3e4iskS86XMtxU2gdIwMYXEQR4CWFRlq2fEzxXUXTebLKlNqUgvHNXyLgCaxFiAYm9A6yifSOBjuVUK2G20P41yOaONrokfXixyIHjwEHyBaHqPR123Iib57gFvd9TylFcpATsNdS+krZo+6xbdngwe68flkxsLPX+Rps6baGkDRLO2llgKAZu0TJrOIJ17iciMkC+dWs0ufMRzA5OyiPvTCB3GmawK78hkGGdE7cG1eA6Zr9oLlz2GpiI0o8f3dREmPpMJd21UuVqlUJqXclEI2oBrg+2SUofIR6GPgQDwvBK+QaZBHWMPtTopdcrmxpU+r4kW2QSj7yZACiMIG+yZ44KMwPs94dEjkD/O1vHEVySqTnX79han0WYLRFyCIuYKQi6xcsWGPHmm7GAhS7ZWcPJ7K03WhaHggNYRHnRqPFzyFXdq6LGzAjhPynFBV5BzPYQi8roqYScWgHZkStWK6YIyE0imhU3X7Du0nA4gNUoHIPvR2XK5p4AarU3OZNii9YGTvrdluQ/o+WkziCptGPJ4Q9k0o4lTwpLKAcxxEOO9BX6fXfRMAQrtXj5jqTIxYIY/gi3KTiQDkRy8g0IPncet9JaeAsyC3xjehBwCQw1I0IkF78EgHzbGEVMMEZnNd4Y2qa01HJ48c3I+1UBGMySs0YfjlyrCIsIyqyirxZ0OkOZsx4c2cPNkNYGo4CLH8bczk+xPi5cEQ8QlApEmJW7bs2RmeHPrlmRM1d7ZRyGxsYMRqJgZEF6yNZy1YxOQOTSYfOQrRWrQPOt5LPyMHsqlPi5wIclYi6nuA5wz9oRXHJbDu22M1x27oEbyT7QcIMYEnIdnsQNV4Ip7dCSXu80KLgyEuX/98eHRRftFXpfpSn2+I2N8Or0RfAm7ABKNoKxITSJUCBMS9sQxAmBiQWM1xts8wcQkAedZXb/SbwOAbMPSRSEx1VTUjDpSzzs2W8Ihw+myJqQPV/URbC83ZiLacYRtwlVEUAdJGVbg2ZeAj41gLlwZb9hx5IksdunAdGUAjbMnDFBkiXqhvsHPI2KnItpHn4JpZt6RuBAST6pI5EL94AuGONuuT2cnaYaxr8L5drQGE1x01DJRcFO2hLgNA63jb9w6HYyR930mGEV7nxrEjbjrId6yyuCsjSu1V9NFLBKKnt5gF95nNWqn4+knCjx5kaqwwaZwj6i0T/wt90Ai/AeJawHAbRO4hKK/Z5usD/RUIn8H4rcWfgWhVMPwdCMbj91YBYnDEp7kX7W1jzc5QvwSiVcA4efit7kqZdXe5tUvUgPBvmMHakTUCyB8ORIuDQRphc2l+6h+2MfGCJYHpzT1ZI4D4BRAtCgb/hHGPxRmcRED0D/+WNQKI3wDRaAT6O5Y+XFiNPQrZ5ziWHLqFYcmwdOMo1lmbvtufgGhpMHI4v8kEQPYbJrKeodvgwpwfx/ebN5T5WZG1sM1I5u40UmgLUhjeGj7k9ueYH5aW1AxK+miflna1iCAmnuRZfwWCyv8FGAC4jY6HuTqVuAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/iot-banner-image/technology.jpg":
/*!*******************************************************!*\
  !*** ./static/images/iot-banner-image/technology.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/technology-f0b2c9028dcde5d082a4ab685b80f0ee.jpg";

/***/ }),

/***/ "./static/images/iot-features-image/iot-feature-image1.png":
/*!*****************************************************************!*\
  !*** ./static/images/iot-features-image/iot-feature-image1.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/iot-features-image/iot-feature-image2.png":
/*!*****************************************************************!*\
  !*** ./static/images/iot-features-image/iot-feature-image2.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/map.png":
/*!*******************************!*\
  !*** ./static/images/map.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-caeeab2fb5d346ea94236e9df14bfff0.png";

/***/ }),

/***/ "./static/images/ml-banner-image/ml-main-pic.png":
/*!*******************************************************!*\
  !*** ./static/images/ml-banner-image/ml-main-pic.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ml-main-pic-710b4e5dfb2853e21598caf06b4cec3a.png";

/***/ }),

/***/ "./static/images/partner-img/alltrace.png":
/*!************************************************!*\
  !*** ./static/images/partner-img/alltrace.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alltrace-89a2383f6bc3573d455ec9bb066fba6c.png";

/***/ }),

/***/ "./static/images/partner-img/cirruslogic.png":
/*!***************************************************!*\
  !*** ./static/images/partner-img/cirruslogic.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/partner-img/cpib.png":
/*!********************************************!*\
  !*** ./static/images/partner-img/cpib.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/partner-img/elegante.png":
/*!************************************************!*\
  !*** ./static/images/partner-img/elegante.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/partner-img/partner-hover1.png":
/*!******************************************************!*\
  !*** ./static/images/partner-img/partner-hover1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAhBAMAAAA2bqi7AAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAi0lEQVQ4je2QsQ6DMBBD3aATGbvQGQlF3fmC8AeBPyBLd4bODCDls2siZnSdyYsl+wZLlwMKhfthUL8Ru5xpZ7qmGpDs2sY80M50jcxw4vyIZIL4kdKs98CTb8OUOGxZylL9gnUAjVKVnLQhwjYALWj+xFKyu+8xfSC+p3Qlnnzp8DXhsEVz8kLhf379yRN1r7ShdwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/partner-img/partner-hover10.png":
/*!*******************************************************!*\
  !*** ./static/images/partner-img/partner-hover10.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAhBAMAAAA2bqi7AAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAi0lEQVQ4je2QsQ6DMBBD3aATGbvQGQlF3fmC8AeBPyBLd4bODCDls2siZnSdyYsl+wZLlwMKhfthUL8Ru5xpZ7qmGpDs2sY80M50jcxw4vyIZIL4kdKs98CTb8OUOGxZylL9gnUAjVKVnLQhwjYALWj+xFKyu+8xfSC+p3Qlnnzp8DXhsEVz8kLhf379yRN1r7ShdwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/partner-img/partner-hover2.png":
/*!******************************************************!*\
  !*** ./static/images/partner-img/partner-hover2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAhBAMAAAA2bqi7AAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAi0lEQVQ4je2QsQ6DMBBD3aATGbvQGQlF3fmC8AeBPyBLd4bODCDls2siZnSdyYsl+wZLlwMKhfthUL8Ru5xpZ7qmGpDs2sY80M50jcxw4vyIZIL4kdKs98CTb8OUOGxZylL9gnUAjVKVnLQhwjYALWj+xFKyu+8xfSC+p3Qlnnzp8DXhsEVz8kLhf379yRN1r7ShdwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/partner-img/phenomq.png":
/*!***********************************************!*\
  !*** ./static/images/partner-img/phenomq.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/partner-img/sutd.jpg":
/*!********************************************!*\
  !*** ./static/images/partner-img/sutd.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sutd-2622c802aca715958a6971dd985eeea3.jpg";

/***/ }),

/***/ "./static/images/partner-img/wizard.png":
/*!**********************************************!*\
  !*** ./static/images/partner-img/wizard.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wizard-01343f4d2cf1e4ffbcbde19809079861.png";

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

/***/ "./static/images/team-image/team1.jpg":
/*!********************************************!*\
  !*** ./static/images/team-image/team1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAfQB9AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiop5/J2fIzbmC5HQZIHP50w3Lq+TFiLfs3Fuc5x09M0AWKKrWt0bnJAjCgfwybj+IxxUvnxmTZu+bdtxg9cZoAkoqKSfZPFFsY+YSN3YcE/0piXLs8YeLYsmdh3c9M8jtwKALFFVrW6NzkgRhQP4ZNx/EY4qzQAUUUUAFFFFABRRRQAUUUUARzxmSMKMZDq3PswP9KgEVwbgu6xMN3ykuflHsMdat0UAVoIJFlDyCMbU2Dy+/Tn26dKBBIL03GU5+Qj/Z7fjmrNFAEckZeSFhjCPuP/AHyR/WoIIrhZN8yxFjnLhySPoMVbooArQQSLKHkEY2psHl9+nPt06VZoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q=="

/***/ }),

/***/ 11:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/murali/Downloads/alai-website-static/default/alai-ws-mp/pages/index.js */"./pages/index.js");


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

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

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
//# sourceMappingURL=index.js.map