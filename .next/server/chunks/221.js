exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 3221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* binding */ Showcase; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./backend/firebase-config.ts
var firebase_config = __webpack_require__(7139);
;// CONCATENATED MODULE: ./hooks/useDatabase.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useDatabase = (collection, limit) => {
  const {
    0: images,
    1: setImages
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const unsubscribe = firebase_config/* projectFirestore.collection */.H1.collection(collection).onSnapshot(snap => {
      let documents = [];
      snap.forEach(doc => {
        documents.push(_objectSpread({}, doc.data()));
      });

      if (limit) {
        documents = documents.filter(doc => doc.forShowcase === true);
      }

      setImages(documents);
    });
    return () => unsubscribe();
  }, [collection]);
  return images;
};

/* harmony default export */ var hooks_useDatabase = (useDatabase);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/ImageComponent.tsx





const firebaseLoader = props => {
  return props.src.toString();
};

const ImageComponent = ImageComponentProps => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "group relative m-0 p-0",
      onClick: () => {
        ImageComponentProps.open();
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        loader: firebaseLoader,
        src: ImageComponentProps.url,
        alt: ImageComponentProps.label,
        width: 600,
        height: 600,
        className: "cursor-pointer object-cover w-full filter brightness-90 hover:brightness-110 transition-all duration-200",
        placeholder: "blur",
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/NXOmzdpgwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      })
    })
  });
};
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(4074);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./components/Gallery.tsx









external_swiper_default().use([external_swiper_.Pagination, external_swiper_.Navigation, external_swiper_.Keyboard, external_swiper_.Lazy]);

const Gallery_firebaseLoader = props => {
  return props.src.toString();
};

const Gallery = GalleryProps => {
  const {
    0: imageDimensions,
    1: setImageDimensions
  } = (0,external_react_.useState)([0, 0]);
  external_react_.useEffect(() => {
    setImageDimensions(handleDimensionChange()); // to get initial image dimensions

    function handleResize() {
      setImageDimensions(handleDimensionChange());
    }

    if (false) {}
  }, [setImageDimensions]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.main, {
      initial: {
        scale: 0,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      transition: {
        duration: 0.5
      },
      className: "fixed w-full z-30 h-screen col-span-12 col-start-1 col-end-13",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "fixed top-0 z-50 w-full flex flex-row justify-end p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            GalleryProps.close();
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-6 h-6 md:h-8 md:w-8 text-gray-600",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
              clipRule: "evenodd"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Swiper, {
        className: "w-full h-full",
        slidesPerView: 1,
        navigation: true,
        pagination: {
          clickable: true,
          dynamicBullets: true
        },
        keyboard: {
          enabled: true
        },
        loop: true,
        zoom: true,
        lazy: true,
        speed: 250,
        initialSlide: GalleryProps.currentIndex,
        children: GalleryProps.list.map((img, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.SwiperSlide, {
            className: "relative bg-gray-50 bg-opacity-95 w-full h-full grid place-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              loader: Gallery_firebaseLoader,
              src: img.url,
              alt: img.label,
              width: imageDimensions[0],
              height: imageDimensions[1],
              className: "cursor-pointer object-cover w-full filter brightness-90 hover:brightness-110 transition-all duration-200",
              placeholder: "blur",
              blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center py-2 top-0 absolute w-full",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "my-2 font-light text-lg",
                children: img.label
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center py-2 bottom-4 absolute w-full",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "my-2 font-light text-sm",
                children: img.description
              })
            })]
          }, index);
        })
      })]
    })
  });
};

function handleDimensionChange() {
  var dimensions = [0, 0];
  var width = 0;
  var height = 0; // for browsers that support window like new ones

  if (typeof window.innerWidth != "undefined") {
    width = window.innerWidth, height = window.innerHeight;
  } // for internet explorer 6 in compatible mode
  else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
      width = document.documentElement.clientWidth, height = document.documentElement.clientHeight;
    } // for old browsers no one uses
    else {
        width = document.getElementsByTagName("body")[0].clientWidth, height = document.getElementsByTagName("body")[0].clientHeight;
      }

  if (height > width) {
    var dimensions = [width - width / 10, width - width / 10];
  } else {
    var dimensions = [height - height / 4, height - height / 4];
  }

  return dimensions;
}
;// CONCATENATED MODULE: ./components/Showcase.tsx








const Showcase = ShowcaseProps => {
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,external_react_.useState)(0);
  const {
    0: isGalleryOpen,
    1: setIsGalleryOpen
  } = (0,external_react_.useState)(false);
  const images = hooks_useDatabase("images", ShowcaseProps.limit);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "py-8 col-span-10 col-start-2 col-end-12",
      children: [ShowcaseProps.limit && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row items-center my-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-full h-0.5 bg-gray-400 mr-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-4xl font-light text-gray-700",
          children: "Showcase"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-full h-0.5 bg-gray-400 ml-4"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto",
        children: images.map((img, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(ImageComponent, {
            open: () => {
              setIsGalleryOpen(true);
              setCurrentIndex(index);
            },
            url: img.url,
            label: img.label,
            description: img.description
          }, index);
        })
      })]
    }), isGalleryOpen && /*#__PURE__*/jsx_runtime_.jsx(Gallery, {
      currentIndex: currentIndex,
      close: () => {
        setIsGalleryOpen(false);
      },
      list: images
    })]
  });
};

/***/ })

};
;