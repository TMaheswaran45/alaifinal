webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./static/images/shop-image/hidden_switch.png":
/*!****************************************************!*\
  !*** ./static/images/shop-image/hidden_switch.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hidden_switch-d9e42e8ff4632f3201537049f618b5dc.png";

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var initState = {
  products: [{
    id: 1,
    title: "Concealed Smart Switch",
    price: 10.50,
    image: __webpack_require__(/*! ../../static/images/shop-image/hidden_switch.png */ "./static/images/shop-image/hidden_switch.png")
  }, {
    id: 2,
    title: "T-Shirt",
    price: 120,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image2.jpg */ "./static/images/shop-image/shop-image2.jpg")
  }, {
    id: 3,
    title: "Casual Shoe",
    price: 160,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image3.jpg */ "./static/images/shop-image/shop-image3.jpg")
  }, {
    id: 4,
    title: "Coffee Bag",
    price: 130,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image4.jpg */ "./static/images/shop-image/shop-image4.jpg")
  }, {
    id: 5,
    title: "Single Chair",
    price: 90,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image5.jpg */ "./static/images/shop-image/shop-image5.jpg")
  }, {
    id: 6,
    title: "Business Card",
    price: 180,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image6.jpg */ "./static/images/shop-image/shop-image6.jpg")
  }, {
    id: 7,
    title: "Book Cover",
    price: 330,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image7.jpg */ "./static/images/shop-image/shop-image7.jpg")
  }, {
    id: 8,
    title: "Wall Watch",
    price: 140,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image8.jpg */ "./static/images/shop-image/shop-image8.jpg")
  }, {
    id: 9,
    title: "Wood Pencil",
    price: 430,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image1.jpg */ "./static/images/shop-image/shop-image1.jpg")
  }, {
    id: 10,
    title: "T-Shirt",
    price: 650,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image2.jpg */ "./static/images/shop-image/shop-image2.jpg")
  }, {
    id: 11,
    title: "Casual Shoe",
    price: 230,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image3.jpg */ "./static/images/shop-image/shop-image3.jpg")
  }, {
    id: 12,
    title: "Coffee Bag",
    price: 670,
    image: __webpack_require__(/*! ../../static/images/shop-image/shop-image4.jpg */ "./static/images/shop-image/shop-image4.jpg")
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_TO_CART"]) {
    var addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY_WITH_NUMBER"]) {
    var _addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems


    var _existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (_existed_item) {
      _addedItem.quantity += action.qty;
      return _objectSpread({}, state, {
        total: state.total + _addedItem.price * action.qty
      });
    } else {
      _addedItem.quantity = action.qty; //calculating the total

      var _newTotal = state.total + _addedItem.price * action.qty;

      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [_addedItem]),
        total: _newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["REMOVE_ITEM"]) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;

    return _objectSpread({}, state, {
      addedItems: new_items,
      total: _newTotal2
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY"]) {
    var _addedItem2 = state.products.find(function (item) {
      return item.id === action.id;
    });

    _addedItem2.quantity += 1;

    var _newTotal3 = state.total + _addedItem2.price;

    return _objectSpread({}, state, {
      total: _newTotal3
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["SUB_QUANTITY"]) {
    var _addedItem3 = state.products.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem3.quantity === 1) {
      var _new_items = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal4 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        addedItems: _new_items,
        total: _newTotal4
      });
    } else {
      _addedItem3.quantity -= 1;

      var _newTotal5 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        total: _newTotal5
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_SHIPPING"]) {
    return _objectSpread({}, state, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread({}, state, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["RESET_CART"]) {
    return _objectSpread({}, state, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
};

/***/ })

})
//# sourceMappingURL=_app.js.5d26a0af329717b3e666.hot-update.js.map