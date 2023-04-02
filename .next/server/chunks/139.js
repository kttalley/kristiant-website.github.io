exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 7139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vY": function() { return /* binding */ projectStorage; },
/* harmony export */   "H1": function() { return /* binding */ projectFirestore; },
/* harmony export */   "uO": function() { return /* binding */ timeStamp; },
/* harmony export */   "I8": function() { return /* binding */ auth; },
/* harmony export */   "wm": function() { return /* binding */ persistance; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6889);
/* harmony import */ var firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1051);
/* harmony import */ var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8828);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9714);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);





const config = {
  apiKey: "AIzaSyCoMQYWhg0GrfD8OG49QwxQOOMorYGMvS4",
  authDomain: "artist-portfolio-9d6b8.firebaseapp.com",
  projectId: "artist-portfolio-9d6b8",
  storageBucket: "artist-portfolio-9d6b8.appspot.com",
  messagingSenderId: "281662124647",
  appId: "1:281662124647:web:b7e0912ca7f95aebcc1ac2",
  measurementId: "G-5G7QPCK9E6"
};
var firebaseapp = null;

if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
  firebaseapp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);
} else {
  firebaseapp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.serverTimestamp();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
const persistance = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.Auth.Persistence.NONE);


/***/ })

};
;