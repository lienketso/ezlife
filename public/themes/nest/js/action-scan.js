/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./platform/themes/nest/assets/js/action-scan.js ***!
  \*******************************************************/
$(document).ready(function () {
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log("Code matched = ".concat(decodedText), decodedResult);
  }
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn("Code scan error = ".concat(error));
  }
  function beginScan() {
    var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: {
        width: 250,
        height: 250
      }
    }, /* verbose= */false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }
});
/******/ })()
;