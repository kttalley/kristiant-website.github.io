exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 4668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mock_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7975);





const Footer = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
      className: "py-6 col-span-10 col-start-2 col-end-12 text-center font-light text-gray-500",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "copyright",
        className: "h-4 w-4 inline mx-2",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          fill: "currentColor",
          d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"
        })
      }), "Copyright ", _mock_mock__WEBPACK_IMPORTED_MODULE_2__/* .data.name */ .a.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "mx-2",
        children: new Date().getFullYear()
      })]
    })
  });
};

/***/ }),

/***/ 3934:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": function() { return /* binding */ Navbar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./mock/mock.ts
var mock = __webpack_require__(7975);
;// CONCATENATED MODULE: ./components/ListMobile.tsx







const ListMobile = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.nav, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      className: "md:hidden fixed pt-24 z-10 w-screen h-screen",
      style: {
        backgroundColor: "#f8edeb"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "grid grid-rows-6 gap-6 justify-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/portfolio",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Portfolio"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/bio",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Bio"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/contact",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Contact"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "grid place-items-center py-1 px-2 text-base font-extralight text-gray-700 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: mock/* data.instagram_link */.a.instagram_link,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              className: "fill-current stroke-current text-gray-600 hover:text-gray-900 w-5 h-5",
              role: "img",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                children: "Instagram"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
              })]
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Navbar.tsx









const Navbar = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "py-8 col-span-10 col-start-2 col-end-12 flex flex-row justify-between items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-extralight text-2xl cursor-pointer",
          children: mock/* data.name */.a.name
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "hidden md:flex flex-row items-center gap-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/portfolio",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Portfolio"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-sm font-light text-gray-600 hover:text-gray-900",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/bio",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer",
              children: "Bio"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "py-1 px-2 text-sm font-extralight",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: mock/* data.instagram_link */.a.instagram_link,
            className: "leading-none text-red-500",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              className: "fill-current stroke-current text-gray-600 hover:text-gray-900 w-4 h-4",
              role: "img",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                children: "Instagram"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
              })]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          setIsMobile(!isMobile);
        },
        className: `${isMobile ? "fixed" : "block"} right-6 sm:right-8 md:hidden z-20 h-8 w-8 focus:outline-none`,
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "stroke-current text-gray-600 hover:text-gray-900 h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16m-7 6h7"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      children: isMobile && /*#__PURE__*/jsx_runtime_.jsx(ListMobile, {})
    })]
  });
};

/***/ })

};
;