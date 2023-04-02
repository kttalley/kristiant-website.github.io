exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 8870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mock_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7975);



 // Using require as normal import causes typescript error

const Fade = __webpack_require__(7206);


const Contact = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fade, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-8 col-span-10 col-start-2 col-end-12 bg-yellow-500 grid grid-cols-1 md:grid-cols-2 gap-4 px-4",
        style: {
          backgroundColor: "#fcd5ce"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-4xl font-light my-8 text-gray-700",
            children: "Contact"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: "text-lg font-extralight my-4 text-gray-600",
            children: _mock_mock__WEBPACK_IMPORTED_MODULE_2__/* .data.email */ .a.email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          className: "grid grid-rows-6 gap-6",
          action: "https://formsubmit.co/talleykristian@gmail.com",
          method: "POST",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "hidden",
            name: "_subject",
            value: "Someone wants to contact you from website"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "hidden",
            name: "_captcha",
            value: "false"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "name",
              className: "block row-span-1 text-sm font-light text-gray-600",
              children: "Name*"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "text",
              name: "name",
              id: "name",
              className: "row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light",
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "email",
              className: "block row-span-1 text-sm font-light text-gray-600",
              children: "E-Mail*"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "email",
              name: "email",
              id: "email",
              className: "row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light",
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "phone",
              className: "block row-span-1 text-sm font-light text-gray-600",
              children: "Phone"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "tel",
              name: "phone",
              id: "phone",
              className: "row-span-2 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row-span-2 w-full h-36 grid grid-rows-5 grid-cols-1 gap-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "message",
              className: "block row-span-1 text-sm font-light text-gray-600",
              children: "Message*"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
              name: "message",
              id: "message",
              className: "row-span-4 h-full w-full bg-transparent border focus:outline-none border-gray-500 p-2 text-sm text-gray-600 font-light resize-none",
              required: true
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row-span-1 w-full h-16 grid grid-rows-3 grid-cols-1 gap-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "submit",
              name: "submit",
              id: "submit",
              value: "Submit",
              className: "cursor-pointer hover:bg-gray-800 transittion-all duration-300 row-start-2 row-span-2 h-full w-full max-w-xs mx-auto bg-gray-600 text-gray-100 border focus:outline-none border-gray-500"
            })
          })]
        })]
      })
    })
  });
};

/***/ })

};
;