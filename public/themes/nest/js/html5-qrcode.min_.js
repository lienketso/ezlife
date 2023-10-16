/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ./platform/themes/nest/assets/js/html5-qrcode.min_.js ***!
  \*************************************************************/
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e212) { throw _e212; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e213) { didErr = true; err = _e213; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*! For license information please see html5-qrcode.min.js.LICENSE.txt */
var __Html5QrcodeLibrary__;
(function () {
  var t = {
      449: function _(t, e, r) {
        !function (t) {
          "use strict";

          var e = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          };
          var n,
            i = function (t) {
              function r(e) {
                var r,
                  n,
                  i,
                  o = this.constructor,
                  s = t.call(this, e) || this;
                return Object.defineProperty(s, "name", {
                  value: o.name,
                  enumerable: !1
                }), r = s, n = o.prototype, (i = Object.setPrototypeOf) ? i(r, n) : r.__proto__ = n, function (t, e) {
                  void 0 === e && (e = t.constructor);
                  var r = Error.captureStackTrace;
                  r && r(t, e);
                }(s), s;
              }
              return function (t, r) {
                function n() {
                  this.constructor = t;
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
              }(r, t), r;
            }(Error);
          var o = /*#__PURE__*/function (_i) {
            _inherits(o, _i);
            var _super = _createSuper(o);
            function o(t) {
              var _this;
              _classCallCheck(this, o);
              _this = _super.call(this, t), _this.message = t;
              return _this;
            }
            _createClass(o, [{
              key: "getKind",
              value: function getKind() {
                return this.constructor.kind;
              }
            }]);
            return o;
          }(i);
          o.kind = "Exception";
          var s = /*#__PURE__*/function (_o) {
            _inherits(s, _o);
            var _super2 = _createSuper(s);
            function s() {
              _classCallCheck(this, s);
              return _super2.apply(this, arguments);
            }
            return _createClass(s);
          }(o);
          s.kind = "ArgumentException";
          var a = /*#__PURE__*/function (_o2) {
            _inherits(a, _o2);
            var _super3 = _createSuper(a);
            function a() {
              _classCallCheck(this, a);
              return _super3.apply(this, arguments);
            }
            return _createClass(a);
          }(o);
          a.kind = "IllegalArgumentException";
          var l = /*#__PURE__*/function () {
            function l(t) {
              _classCallCheck(this, l);
              if (this.binarizer = t, null === t) throw new a("Binarizer must be non-null.");
            }
            _createClass(l, [{
              key: "getWidth",
              value: function getWidth() {
                return this.binarizer.getWidth();
              }
            }, {
              key: "getHeight",
              value: function getHeight() {
                return this.binarizer.getHeight();
              }
            }, {
              key: "getBlackRow",
              value: function getBlackRow(t, e) {
                return this.binarizer.getBlackRow(t, e);
              }
            }, {
              key: "getBlackMatrix",
              value: function getBlackMatrix() {
                return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return this.binarizer.getLuminanceSource().isCropSupported();
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                var i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
                return new l(this.binarizer.createBinarizer(i));
              }
            }, {
              key: "isRotateSupported",
              value: function isRotateSupported() {
                return this.binarizer.getLuminanceSource().isRotateSupported();
              }
            }, {
              key: "rotateCounterClockwise",
              value: function rotateCounterClockwise() {
                var t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                return new l(this.binarizer.createBinarizer(t));
              }
            }, {
              key: "rotateCounterClockwise45",
              value: function rotateCounterClockwise45() {
                var t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                return new l(this.binarizer.createBinarizer(t));
              }
            }, {
              key: "toString",
              value: function toString() {
                try {
                  return this.getBlackMatrix().toString();
                } catch (t) {
                  return "";
                }
              }
            }]);
            return l;
          }();
          var c = /*#__PURE__*/function (_o3) {
            _inherits(c, _o3);
            var _super4 = _createSuper(c);
            function c() {
              _classCallCheck(this, c);
              return _super4.apply(this, arguments);
            }
            _createClass(c, null, [{
              key: "getChecksumInstance",
              value: function getChecksumInstance() {
                return new c();
              }
            }]);
            return c;
          }(o);
          c.kind = "ChecksumException";
          var h = /*#__PURE__*/function () {
            function h(t) {
              _classCallCheck(this, h);
              this.source = t;
            }
            _createClass(h, [{
              key: "getLuminanceSource",
              value: function getLuminanceSource() {
                return this.source;
              }
            }, {
              key: "getWidth",
              value: function getWidth() {
                return this.source.getWidth();
              }
            }, {
              key: "getHeight",
              value: function getHeight() {
                return this.source.getHeight();
              }
            }]);
            return h;
          }();
          var u = /*#__PURE__*/function () {
            function u() {
              _classCallCheck(this, u);
            }
            _createClass(u, null, [{
              key: "arraycopy",
              value: function arraycopy(t, e, r, n, i) {
                for (; i--;) r[n++] = t[e++];
              }
            }, {
              key: "currentTimeMillis",
              value: function currentTimeMillis() {
                return Date.now();
              }
            }]);
            return u;
          }();
          var d = /*#__PURE__*/function (_o4) {
            _inherits(d, _o4);
            var _super5 = _createSuper(d);
            function d() {
              _classCallCheck(this, d);
              return _super5.apply(this, arguments);
            }
            return _createClass(d);
          }(o);
          d.kind = "IndexOutOfBoundsException";
          var g = /*#__PURE__*/function (_d) {
            _inherits(g, _d);
            var _super6 = _createSuper(g);
            function g(t, e) {
              var _this2;
              _classCallCheck(this, g);
              _this2 = _super6.call(this, e), _this2.index = t, _this2.message = e;
              return _this2;
            }
            return _createClass(g);
          }(d);
          g.kind = "ArrayIndexOutOfBoundsException";
          var f = /*#__PURE__*/function () {
            function f() {
              _classCallCheck(this, f);
            }
            _createClass(f, null, [{
              key: "fill",
              value: function fill(t, e) {
                for (var _r2 = 0, _n = t.length; _r2 < _n; _r2++) t[_r2] = e;
              }
            }, {
              key: "fillWithin",
              value: function fillWithin(t, e, r, n) {
                f.rangeCheck(t.length, e, r);
                for (var _i2 = e; _i2 < r; _i2++) t[_i2] = n;
              }
            }, {
              key: "rangeCheck",
              value: function rangeCheck(t, e, r) {
                if (e > r) throw new a("fromIndex(" + e + ") > toIndex(" + r + ")");
                if (e < 0) throw new g(e);
                if (r > t) throw new g(r);
              }
            }, {
              key: "asList",
              value: function asList() {
                for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                  t[_key] = arguments[_key];
                }
                return t;
              }
            }, {
              key: "create",
              value: function create(t, e, r) {
                return Array.from({
                  length: t
                }).map(function (t) {
                  return Array.from({
                    length: e
                  }).fill(r);
                });
              }
            }, {
              key: "createInt32Array",
              value: function createInt32Array(t, e, r) {
                return Array.from({
                  length: t
                }).map(function (t) {
                  return Int32Array.from({
                    length: e
                  }).fill(r);
                });
              }
            }, {
              key: "equals",
              value: function equals(t, e) {
                if (!t) return !1;
                if (!e) return !1;
                if (!t.length) return !1;
                if (!e.length) return !1;
                if (t.length !== e.length) return !1;
                for (var _r3 = 0, _n2 = t.length; _r3 < _n2; _r3++) if (t[_r3] !== e[_r3]) return !1;
                return !0;
              }
            }, {
              key: "hashCode",
              value: function hashCode(t) {
                if (null === t) return 0;
                var e = 1;
                var _iterator = _createForOfIteratorHelper(t),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _r4 = _step.value;
                    e = 31 * e + _r4;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return e;
              }
            }, {
              key: "fillUint8Array",
              value: function fillUint8Array(t, e) {
                for (var _r5 = 0; _r5 !== t.length; _r5++) t[_r5] = e;
              }
            }, {
              key: "copyOf",
              value: function copyOf(t, e) {
                return t.slice(0, e);
              }
            }, {
              key: "copyOfUint8Array",
              value: function copyOfUint8Array(t, e) {
                if (t.length <= e) {
                  var _r6 = new Uint8Array(e);
                  return _r6.set(t), _r6;
                }
                return t.slice(0, e);
              }
            }, {
              key: "copyOfRange",
              value: function copyOfRange(t, e, r) {
                var n = r - e,
                  i = new Int32Array(n);
                return u.arraycopy(t, e, i, 0, n), i;
              }
            }, {
              key: "binarySearch",
              value: function binarySearch(t, e, r) {
                void 0 === r && (r = f.numberComparator);
                var n = 0,
                  i = t.length - 1;
                for (; n <= i;) {
                  var _o5 = i + n >> 1,
                    _s = r(e, t[_o5]);
                  if (_s > 0) n = _o5 + 1;else {
                    if (!(_s < 0)) return _o5;
                    i = _o5 - 1;
                  }
                }
                return -n - 1;
              }
            }, {
              key: "numberComparator",
              value: function numberComparator(t, e) {
                return t - e;
              }
            }]);
            return f;
          }();
          var w = /*#__PURE__*/function () {
            function w() {
              _classCallCheck(this, w);
            }
            _createClass(w, null, [{
              key: "numberOfTrailingZeros",
              value: function numberOfTrailingZeros(t) {
                var e;
                if (0 === t) return 32;
                var r = 31;
                return e = t << 16, 0 !== e && (r -= 16, t = e), e = t << 8, 0 !== e && (r -= 8, t = e), e = t << 4, 0 !== e && (r -= 4, t = e), e = t << 2, 0 !== e && (r -= 2, t = e), r - (t << 1 >>> 31);
              }
            }, {
              key: "numberOfLeadingZeros",
              value: function numberOfLeadingZeros(t) {
                if (0 === t) return 32;
                var e = 1;
                return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e -= t >>> 31, e;
              }
            }, {
              key: "toHexString",
              value: function toHexString(t) {
                return t.toString(16);
              }
            }, {
              key: "toBinaryString",
              value: function toBinaryString(t) {
                return String(parseInt(String(t), 2));
              }
            }, {
              key: "bitCount",
              value: function bitCount(t) {
                return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16);
              }
            }, {
              key: "truncDivision",
              value: function truncDivision(t, e) {
                return Math.trunc(t / e);
              }
            }, {
              key: "parseInt",
              value: function (_parseInt) {
                function parseInt(_x, _x2) {
                  return _parseInt.apply(this, arguments);
                }
                parseInt.toString = function () {
                  return _parseInt.toString();
                };
                return parseInt;
              }(function (t, e) {
                return parseInt(t, e);
              })
            }]);
            return w;
          }();
          w.MIN_VALUE_32_BITS = -2147483648, w.MAX_VALUE = Number.MAX_SAFE_INTEGER;
          var A = /*#__PURE__*/function () {
            function A(t, e) {
              _classCallCheck(this, A);
              void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? A.makeArray(t) : e);
            }
            _createClass(A, [{
              key: "getSize",
              value: function getSize() {
                return this.size;
              }
            }, {
              key: "getSizeInBytes",
              value: function getSizeInBytes() {
                return Math.floor((this.size + 7) / 8);
              }
            }, {
              key: "ensureCapacity",
              value: function ensureCapacity(t) {
                if (t > 32 * this.bits.length) {
                  var _e2 = A.makeArray(t);
                  u.arraycopy(this.bits, 0, _e2, 0, this.bits.length), this.bits = _e2;
                }
              }
            }, {
              key: "get",
              value: function get(t) {
                return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t));
              }
            }, {
              key: "set",
              value: function set(t) {
                this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
              }
            }, {
              key: "flip",
              value: function flip(t) {
                this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
              }
            }, {
              key: "getNextSet",
              value: function getNextSet(t) {
                var e = this.size;
                if (t >= e) return e;
                var r = this.bits;
                var n = Math.floor(t / 32),
                  i = r[n];
                i &= ~((1 << (31 & t)) - 1);
                var o = r.length;
                for (; 0 === i;) {
                  if (++n === o) return e;
                  i = r[n];
                }
                var s = 32 * n + w.numberOfTrailingZeros(i);
                return s > e ? e : s;
              }
            }, {
              key: "getNextUnset",
              value: function getNextUnset(t) {
                var e = this.size;
                if (t >= e) return e;
                var r = this.bits;
                var n = Math.floor(t / 32),
                  i = ~r[n];
                i &= ~((1 << (31 & t)) - 1);
                var o = r.length;
                for (; 0 === i;) {
                  if (++n === o) return e;
                  i = ~r[n];
                }
                var s = 32 * n + w.numberOfTrailingZeros(i);
                return s > e ? e : s;
              }
            }, {
              key: "setBulk",
              value: function setBulk(t, e) {
                this.bits[Math.floor(t / 32)] = e;
              }
            }, {
              key: "setRange",
              value: function setRange(t, e) {
                if (e < t || t < 0 || e > this.size) throw new a();
                if (e === t) return;
                e--;
                var r = Math.floor(t / 32),
                  n = Math.floor(e / 32),
                  i = this.bits;
                for (var _o6 = r; _o6 <= n; _o6++) {
                  var _s2 = (2 << (_o6 < n ? 31 : 31 & e)) - (1 << (_o6 > r ? 0 : 31 & t));
                  i[_o6] |= _s2;
                }
              }
            }, {
              key: "clear",
              value: function clear() {
                var t = this.bits.length,
                  e = this.bits;
                for (var _r7 = 0; _r7 < t; _r7++) e[_r7] = 0;
              }
            }, {
              key: "isRange",
              value: function isRange(t, e, r) {
                if (e < t || t < 0 || e > this.size) throw new a();
                if (e === t) return !0;
                e--;
                var n = Math.floor(t / 32),
                  i = Math.floor(e / 32),
                  o = this.bits;
                for (var _s3 = n; _s3 <= i; _s3++) {
                  var _a = (2 << (_s3 < i ? 31 : 31 & e)) - (1 << (_s3 > n ? 0 : 31 & t)) & 4294967295;
                  if ((o[_s3] & _a) !== (r ? _a : 0)) return !1;
                }
                return !0;
              }
            }, {
              key: "appendBit",
              value: function appendBit(t) {
                this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++;
              }
            }, {
              key: "appendBits",
              value: function appendBits(t, e) {
                if (e < 0 || e > 32) throw new a("Num bits must be between 0 and 32");
                this.ensureCapacity(this.size + e);
                for (var _r8 = e; _r8 > 0; _r8--) this.appendBit(1 == (t >> _r8 - 1 & 1));
              }
            }, {
              key: "appendBitArray",
              value: function appendBitArray(t) {
                var e = t.size;
                this.ensureCapacity(this.size + e);
                for (var _r9 = 0; _r9 < e; _r9++) this.appendBit(t.get(_r9));
              }
            }, {
              key: "xor",
              value: function xor(t) {
                if (this.size !== t.size) throw new a("Sizes don't match");
                var e = this.bits;
                for (var _r10 = 0, _n3 = e.length; _r10 < _n3; _r10++) e[_r10] ^= t.bits[_r10];
              }
            }, {
              key: "toBytes",
              value: function toBytes(t, e, r, n) {
                for (var _i3 = 0; _i3 < n; _i3++) {
                  var _n4 = 0;
                  for (var _e3 = 0; _e3 < 8; _e3++) this.get(t) && (_n4 |= 1 << 7 - _e3), t++;
                  e[r + _i3] = _n4;
                }
              }
            }, {
              key: "getBitArray",
              value: function getBitArray() {
                return this.bits;
              }
            }, {
              key: "reverse",
              value: function reverse() {
                var t = new Int32Array(this.bits.length),
                  e = Math.floor((this.size - 1) / 32),
                  r = e + 1,
                  n = this.bits;
                for (var _i4 = 0; _i4 < r; _i4++) {
                  var _r11 = n[_i4];
                  _r11 = _r11 >> 1 & 1431655765 | (1431655765 & _r11) << 1, _r11 = _r11 >> 2 & 858993459 | (858993459 & _r11) << 2, _r11 = _r11 >> 4 & 252645135 | (252645135 & _r11) << 4, _r11 = _r11 >> 8 & 16711935 | (16711935 & _r11) << 8, _r11 = _r11 >> 16 & 65535 | (65535 & _r11) << 16, t[e - _i4] = _r11;
                }
                if (this.size !== 32 * r) {
                  var _e4 = 32 * r - this.size;
                  var _n5 = t[0] >>> _e4;
                  for (var _i5 = 1; _i5 < r; _i5++) {
                    var _r12 = t[_i5];
                    _n5 |= _r12 << 32 - _e4, t[_i5 - 1] = _n5, _n5 = _r12 >>> _e4;
                  }
                  t[r - 1] = _n5;
                }
                this.bits = t;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof A)) return !1;
                var e = t;
                return this.size === e.size && f.equals(this.bits, e.bits);
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return 31 * this.size + f.hashCode(this.bits);
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = "";
                for (var _e5 = 0, _r13 = this.size; _e5 < _r13; _e5++) 0 == (7 & _e5) && (t += " "), t += this.get(_e5) ? "X" : ".";
                return t;
              }
            }, {
              key: "clone",
              value: function clone() {
                return new A(this.size, this.bits.slice());
              }
            }], [{
              key: "makeArray",
              value: function makeArray(t) {
                return new Int32Array(Math.floor((t + 31) / 32));
              }
            }]);
            return A;
          }();
          !function (t) {
            t[t.OTHER = 0] = "OTHER", t[t.PURE_BARCODE = 1] = "PURE_BARCODE", t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t[t.TRY_HARDER = 3] = "TRY_HARDER", t[t.CHARACTER_SET = 4] = "CHARACTER_SET", t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t[t.ASSUME_GS1 = 7] = "ASSUME_GS1", t[t.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t[t.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t[t.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS";
          }(n || (n = {}));
          var m,
            E = n;
          var C = /*#__PURE__*/function (_o7) {
            _inherits(C, _o7);
            var _super7 = _createSuper(C);
            function C() {
              _classCallCheck(this, C);
              return _super7.apply(this, arguments);
            }
            _createClass(C, null, [{
              key: "getFormatInstance",
              value: function getFormatInstance() {
                return new C();
              }
            }]);
            return C;
          }(o);
          C.kind = "FormatException", function (t) {
            t[t.Cp437 = 0] = "Cp437", t[t.ISO8859_1 = 1] = "ISO8859_1", t[t.ISO8859_2 = 2] = "ISO8859_2", t[t.ISO8859_3 = 3] = "ISO8859_3", t[t.ISO8859_4 = 4] = "ISO8859_4", t[t.ISO8859_5 = 5] = "ISO8859_5", t[t.ISO8859_6 = 6] = "ISO8859_6", t[t.ISO8859_7 = 7] = "ISO8859_7", t[t.ISO8859_8 = 8] = "ISO8859_8", t[t.ISO8859_9 = 9] = "ISO8859_9", t[t.ISO8859_10 = 10] = "ISO8859_10", t[t.ISO8859_11 = 11] = "ISO8859_11", t[t.ISO8859_13 = 12] = "ISO8859_13", t[t.ISO8859_14 = 13] = "ISO8859_14", t[t.ISO8859_15 = 14] = "ISO8859_15", t[t.ISO8859_16 = 15] = "ISO8859_16", t[t.SJIS = 16] = "SJIS", t[t.Cp1250 = 17] = "Cp1250", t[t.Cp1251 = 18] = "Cp1251", t[t.Cp1252 = 19] = "Cp1252", t[t.Cp1256 = 20] = "Cp1256", t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t[t.UTF8 = 22] = "UTF8", t[t.ASCII = 23] = "ASCII", t[t.Big5 = 24] = "Big5", t[t.GB18030 = 25] = "GB18030", t[t.EUC_KR = 26] = "EUC_KR";
          }(m || (m = {}));
          var I = /*#__PURE__*/function () {
            function I(t, e, r) {
              _classCallCheck(this, I);
              for (var _len2 = arguments.length, n = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
                n[_key2 - 3] = arguments[_key2];
              }
              this.valueIdentifier = t, this.name = r, this.values = "number" == typeof e ? Int32Array.from([e]) : e, this.otherEncodingNames = n, I.VALUE_IDENTIFIER_TO_ECI.set(t, this), I.NAME_TO_ECI.set(r, this);
              var i = this.values;
              for (var _t2 = 0, _e6 = i.length; _t2 !== _e6; _t2++) {
                var _e7 = i[_t2];
                I.VALUES_TO_ECI.set(_e7, this);
              }
              for (var _i6 = 0, _n6 = n; _i6 < _n6.length; _i6++) {
                var _t3 = _n6[_i6];
                I.NAME_TO_ECI.set(_t3, this);
              }
            }
            _createClass(I, [{
              key: "getValueIdentifier",
              value: function getValueIdentifier() {
                return this.valueIdentifier;
              }
            }, {
              key: "getName",
              value: function getName() {
                return this.name;
              }
            }, {
              key: "getValue",
              value: function getValue() {
                return this.values[0];
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof I)) return !1;
                var e = t;
                return this.getName() === e.getName();
              }
            }], [{
              key: "getCharacterSetECIByValue",
              value: function getCharacterSetECIByValue(t) {
                if (t < 0 || t >= 900) throw new C("incorect value");
                var e = I.VALUES_TO_ECI.get(t);
                if (void 0 === e) throw new C("incorect value");
                return e;
              }
            }, {
              key: "getCharacterSetECIByName",
              value: function getCharacterSetECIByName(t) {
                var e = I.NAME_TO_ECI.get(t);
                if (void 0 === e) throw new C("incorect value");
                return e;
              }
            }]);
            return I;
          }();
          I.VALUE_IDENTIFIER_TO_ECI = new Map(), I.VALUES_TO_ECI = new Map(), I.NAME_TO_ECI = new Map(), I.Cp437 = new I(m.Cp437, Int32Array.from([0, 2]), "Cp437"), I.ISO8859_1 = new I(m.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), I.ISO8859_2 = new I(m.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), I.ISO8859_3 = new I(m.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), I.ISO8859_4 = new I(m.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), I.ISO8859_5 = new I(m.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), I.ISO8859_6 = new I(m.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), I.ISO8859_7 = new I(m.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), I.ISO8859_8 = new I(m.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), I.ISO8859_9 = new I(m.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), I.ISO8859_10 = new I(m.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), I.ISO8859_11 = new I(m.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), I.ISO8859_13 = new I(m.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), I.ISO8859_14 = new I(m.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), I.ISO8859_15 = new I(m.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), I.ISO8859_16 = new I(m.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), I.SJIS = new I(m.SJIS, 20, "SJIS", "Shift_JIS"), I.Cp1250 = new I(m.Cp1250, 21, "Cp1250", "windows-1250"), I.Cp1251 = new I(m.Cp1251, 22, "Cp1251", "windows-1251"), I.Cp1252 = new I(m.Cp1252, 23, "Cp1252", "windows-1252"), I.Cp1256 = new I(m.Cp1256, 24, "Cp1256", "windows-1256"), I.UnicodeBigUnmarked = new I(m.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), I.UTF8 = new I(m.UTF8, 26, "UTF8", "UTF-8"), I.ASCII = new I(m.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), I.Big5 = new I(m.Big5, 28, "Big5"), I.GB18030 = new I(m.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), I.EUC_KR = new I(m.EUC_KR, 30, "EUC_KR", "EUC-KR");
          var p = /*#__PURE__*/function (_o8) {
            _inherits(p, _o8);
            var _super8 = _createSuper(p);
            function p() {
              _classCallCheck(this, p);
              return _super8.apply(this, arguments);
            }
            return _createClass(p);
          }(o);
          p.kind = "UnsupportedOperationException";
          var S = /*#__PURE__*/function () {
            function S() {
              _classCallCheck(this, S);
            }
            _createClass(S, null, [{
              key: "decode",
              value: function decode(t, e) {
                var r = this.encodingName(e);
                return this.customDecoder ? this.customDecoder(t, r) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t);
              }
            }, {
              key: "shouldDecodeOnFallback",
              value: function shouldDecodeOnFallback(t) {
                return !S.isBrowser() && "ISO-8859-1" === t;
              }
            }, {
              key: "encode",
              value: function encode(t, e) {
                var r = this.encodingName(e);
                return this.customEncoder ? this.customEncoder(t, r) : "undefined" == typeof TextEncoder ? this.encodeFallback(t) : new TextEncoder().encode(t);
              }
            }, {
              key: "isBrowser",
              value: function isBrowser() {
                return "undefined" != typeof window && "[object Window]" === {}.toString.call(window);
              }
            }, {
              key: "encodingName",
              value: function encodingName(t) {
                return "string" == typeof t ? t : t.getName();
              }
            }, {
              key: "encodingCharacterSet",
              value: function encodingCharacterSet(t) {
                return t instanceof I ? t : I.getCharacterSetECIByName(t);
              }
            }, {
              key: "decodeFallback",
              value: function decodeFallback(t, e) {
                var r = this.encodingCharacterSet(e);
                if (S.isDecodeFallbackSupported(r)) {
                  var _e8 = "";
                  for (var _r14 = 0, _n7 = t.length; _r14 < _n7; _r14++) {
                    var _n8 = t[_r14].toString(16);
                    _n8.length < 2 && (_n8 = "0" + _n8), _e8 += "%" + _n8;
                  }
                  return decodeURIComponent(_e8);
                }
                if (r.equals(I.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
                throw new p("Encoding ".concat(this.encodingName(e), " not supported by fallback."));
              }
            }, {
              key: "isDecodeFallbackSupported",
              value: function isDecodeFallbackSupported(t) {
                return t.equals(I.UTF8) || t.equals(I.ISO8859_1) || t.equals(I.ASCII);
              }
            }, {
              key: "encodeFallback",
              value: function encodeFallback(t) {
                var e = btoa(unescape(encodeURIComponent(t))).split(""),
                  r = [];
                for (var _t4 = 0; _t4 < e.length; _t4++) r.push(e[_t4].charCodeAt(0));
                return new Uint8Array(r);
              }
            }]);
            return S;
          }();
          var _ = /*#__PURE__*/function () {
            function _() {
              _classCallCheck(this, _);
            }
            _createClass(_, null, [{
              key: "castAsNonUtf8Char",
              value: function castAsNonUtf8Char(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r = e ? e.getName() : this.ISO88591;
                return S.decode(new Uint8Array([t]), r);
              }
            }, {
              key: "guessEncoding",
              value: function guessEncoding(t, e) {
                if (null != e && void 0 !== e.get(E.CHARACTER_SET)) return e.get(E.CHARACTER_SET).toString();
                var r = t.length;
                var n = !0,
                  i = !0,
                  o = !0,
                  s = 0,
                  a = 0,
                  l = 0,
                  c = 0,
                  h = 0,
                  u = 0,
                  d = 0,
                  g = 0,
                  f = 0,
                  w = 0,
                  A = 0;
                var m = t.length > 3 && 239 === t[0] && 187 === t[1] && 191 === t[2];
                for (var _e9 = 0; _e9 < r && (n || i || o); _e9++) {
                  var _r15 = 255 & t[_e9];
                  o && (s > 0 ? 0 == (128 & _r15) ? o = !1 : s-- : 0 != (128 & _r15) && (0 == (64 & _r15) ? o = !1 : (s++, 0 == (32 & _r15) ? a++ : (s++, 0 == (16 & _r15) ? l++ : (s++, 0 == (8 & _r15) ? c++ : o = !1))))), n && (_r15 > 127 && _r15 < 160 ? n = !1 : _r15 > 159 && (_r15 < 192 || 215 === _r15 || 247 === _r15) && A++), i && (h > 0 ? _r15 < 64 || 127 === _r15 || _r15 > 252 ? i = !1 : h-- : 128 === _r15 || 160 === _r15 || _r15 > 239 ? i = !1 : _r15 > 160 && _r15 < 224 ? (u++, g = 0, d++, d > f && (f = d)) : _r15 > 127 ? (h++, d = 0, g++, g > w && (w = g)) : (d = 0, g = 0));
                }
                return o && s > 0 && (o = !1), i && h > 0 && (i = !1), o && (m || a + l + c > 0) ? _.UTF8 : i && (_.ASSUME_SHIFT_JIS || f >= 3 || w >= 3) ? _.SHIFT_JIS : n && i ? 2 === f && 2 === u || 10 * A >= r ? _.SHIFT_JIS : _.ISO88591 : n ? _.ISO88591 : i ? _.SHIFT_JIS : o ? _.UTF8 : _.PLATFORM_DEFAULT_ENCODING;
              }
            }, {
              key: "format",
              value: function format(t) {
                for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                  e[_key3 - 1] = arguments[_key3];
                }
                var r = -1;
                return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, o, s, a) {
                  if ("%%" === t) return "%";
                  if (void 0 === e[++r]) return;
                  t = o ? parseInt(o.substr(1)) : void 0;
                  var l,
                    c = s ? parseInt(s.substr(1)) : void 0;
                  switch (a) {
                    case "s":
                      l = e[r];
                      break;
                    case "c":
                      l = e[r][0];
                      break;
                    case "f":
                      l = parseFloat(e[r]).toFixed(t);
                      break;
                    case "p":
                      l = parseFloat(e[r]).toPrecision(t);
                      break;
                    case "e":
                      l = parseFloat(e[r]).toExponential(t);
                      break;
                    case "x":
                      l = parseInt(e[r]).toString(c || 16);
                      break;
                    case "d":
                      l = parseFloat(parseInt(e[r], c || 10).toPrecision(t)).toFixed(0);
                  }
                  l = "object" == _typeof(l) ? JSON.stringify(l) : (+l).toString(c);
                  var h = parseInt(i),
                    u = i && i[0] + "" == "0" ? "0" : " ";
                  for (; l.length < h;) l = void 0 !== n ? l + u : u + l;
                  return l;
                });
              }
            }, {
              key: "getBytes",
              value: function getBytes(t, e) {
                return S.encode(t, e);
              }
            }, {
              key: "getCharCode",
              value: function getCharCode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return t.charCodeAt(e);
              }
            }, {
              key: "getCharAt",
              value: function getCharAt(t) {
                return String.fromCharCode(t);
              }
            }]);
            return _;
          }();
          _.SHIFT_JIS = I.SJIS.getName(), _.GB2312 = "GB2312", _.ISO88591 = I.ISO8859_1.getName(), _.EUC_JP = "EUC_JP", _.UTF8 = I.UTF8.getName(), _.PLATFORM_DEFAULT_ENCODING = _.UTF8, _.ASSUME_SHIFT_JIS = !1;
          var T = /*#__PURE__*/function () {
            function T() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              _classCallCheck(this, T);
              this.value = t;
            }
            _createClass(T, [{
              key: "enableDecoding",
              value: function enableDecoding(t) {
                return this.encoding = t, this;
              }
            }, {
              key: "append",
              value: function append(t) {
                return "string" == typeof t ? this.value += t.toString() : this.encoding ? this.value += _.castAsNonUtf8Char(t, this.encoding) : this.value += String.fromCharCode(t), this;
              }
            }, {
              key: "appendChars",
              value: function appendChars(t, e, r) {
                for (var _n9 = e; e < e + r; _n9++) this.append(t[_n9]);
                return this;
              }
            }, {
              key: "length",
              value: function length() {
                return this.value.length;
              }
            }, {
              key: "charAt",
              value: function charAt(t) {
                return this.value.charAt(t);
              }
            }, {
              key: "deleteCharAt",
              value: function deleteCharAt(t) {
                this.value = this.value.substr(0, t) + this.value.substring(t + 1);
              }
            }, {
              key: "setCharAt",
              value: function setCharAt(t, e) {
                this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
              }
            }, {
              key: "substring",
              value: function substring(t, e) {
                return this.value.substring(t, e);
              }
            }, {
              key: "setLengthToZero",
              value: function setLengthToZero() {
                this.value = "";
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.value;
              }
            }, {
              key: "insert",
              value: function insert(t, e) {
                this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length);
              }
            }]);
            return T;
          }();
          var y = /*#__PURE__*/function () {
            function y(t, e, r, n) {
              _classCallCheck(this, y);
              if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new a("Both dimensions must be greater than 0");
              null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height));
            }
            _createClass(y, [{
              key: "get",
              value: function get(t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                return 0 != (this.bits[r] >>> (31 & t) & 1);
              }
            }, {
              key: "set",
              value: function set(t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] |= 1 << (31 & t) & 4294967295;
              }
            }, {
              key: "unset",
              value: function unset(t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] &= ~(1 << (31 & t) & 4294967295);
              }
            }, {
              key: "flip",
              value: function flip(t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] ^= 1 << (31 & t) & 4294967295;
              }
            }, {
              key: "xor",
              value: function xor(t) {
                if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new a("input matrix dimensions do not match");
                var e = new A(Math.floor(this.width / 32) + 1),
                  r = this.rowSize,
                  n = this.bits;
                for (var _i7 = 0, _o9 = this.height; _i7 < _o9; _i7++) {
                  var _o10 = _i7 * r,
                    _s4 = t.getRow(_i7, e).getBitArray();
                  for (var _t5 = 0; _t5 < r; _t5++) n[_o10 + _t5] ^= _s4[_t5];
                }
              }
            }, {
              key: "clear",
              value: function clear() {
                var t = this.bits,
                  e = t.length;
                for (var _r16 = 0; _r16 < e; _r16++) t[_r16] = 0;
              }
            }, {
              key: "setRegion",
              value: function setRegion(t, e, r, n) {
                if (e < 0 || t < 0) throw new a("Left and top must be nonnegative");
                if (n < 1 || r < 1) throw new a("Height and width must be at least 1");
                var i = t + r,
                  o = e + n;
                if (o > this.height || i > this.width) throw new a("The region must fit inside the matrix");
                var s = this.rowSize,
                  l = this.bits;
                for (var _r17 = e; _r17 < o; _r17++) {
                  var _e10 = _r17 * s;
                  for (var _r18 = t; _r18 < i; _r18++) l[_e10 + Math.floor(_r18 / 32)] |= 1 << (31 & _r18) & 4294967295;
                }
              }
            }, {
              key: "getRow",
              value: function getRow(t, e) {
                null == e || e.getSize() < this.width ? e = new A(this.width) : e.clear();
                var r = this.rowSize,
                  n = this.bits,
                  i = t * r;
                for (var _t6 = 0; _t6 < r; _t6++) e.setBulk(32 * _t6, n[i + _t6]);
                return e;
              }
            }, {
              key: "setRow",
              value: function setRow(t, e) {
                u.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize);
              }
            }, {
              key: "rotate180",
              value: function rotate180() {
                var t = this.getWidth(),
                  e = this.getHeight();
                var r = new A(t),
                  n = new A(t);
                for (var _t7 = 0, _i8 = Math.floor((e + 1) / 2); _t7 < _i8; _t7++) r = this.getRow(_t7, r), n = this.getRow(e - 1 - _t7, n), r.reverse(), n.reverse(), this.setRow(_t7, n), this.setRow(e - 1 - _t7, r);
              }
            }, {
              key: "getEnclosingRectangle",
              value: function getEnclosingRectangle() {
                var t = this.width,
                  e = this.height,
                  r = this.rowSize,
                  n = this.bits;
                var i = t,
                  o = e,
                  s = -1,
                  a = -1;
                for (var _t8 = 0; _t8 < e; _t8++) for (var _e11 = 0; _e11 < r; _e11++) {
                  var _l = n[_t8 * r + _e11];
                  if (0 !== _l) {
                    if (_t8 < o && (o = _t8), _t8 > a && (a = _t8), 32 * _e11 < i) {
                      var _t9 = 0;
                      for (; 0 == (_l << 31 - _t9 & 4294967295);) _t9++;
                      32 * _e11 + _t9 < i && (i = 32 * _e11 + _t9);
                    }
                    if (32 * _e11 + 31 > s) {
                      var _t10 = 31;
                      for (; _l >>> _t10 == 0;) _t10--;
                      32 * _e11 + _t10 > s && (s = 32 * _e11 + _t10);
                    }
                  }
                }
                return s < i || a < o ? null : Int32Array.from([i, o, s - i + 1, a - o + 1]);
              }
            }, {
              key: "getTopLeftOnBit",
              value: function getTopLeftOnBit() {
                var t = this.rowSize,
                  e = this.bits;
                var r = 0;
                for (; r < e.length && 0 === e[r];) r++;
                if (r === e.length) return null;
                var n = r / t;
                var i = r % t * 32;
                var o = e[r];
                var s = 0;
                for (; 0 == (o << 31 - s & 4294967295);) s++;
                return i += s, Int32Array.from([i, n]);
              }
            }, {
              key: "getBottomRightOnBit",
              value: function getBottomRightOnBit() {
                var t = this.rowSize,
                  e = this.bits;
                var r = e.length - 1;
                for (; r >= 0 && 0 === e[r];) r--;
                if (r < 0) return null;
                var n = Math.floor(r / t);
                var i = 32 * Math.floor(r % t);
                var o = e[r];
                var s = 31;
                for (; o >>> s == 0;) s--;
                return i += s, Int32Array.from([i, n]);
              }
            }, {
              key: "getWidth",
              value: function getWidth() {
                return this.width;
              }
            }, {
              key: "getHeight",
              value: function getHeight() {
                return this.height;
              }
            }, {
              key: "getRowSize",
              value: function getRowSize() {
                return this.rowSize;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof y)) return !1;
                var e = t;
                return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && f.equals(this.bits, e.bits);
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                var t = this.width;
                return t = 31 * t + this.width, t = 31 * t + this.height, t = 31 * t + this.rowSize, t = 31 * t + f.hashCode(this.bits), t;
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "X ";
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "  ";
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "\n";
                return this.buildToString(t, e, r);
              }
            }, {
              key: "buildToString",
              value: function buildToString(t, e, r) {
                var n = new T();
                for (var _i9 = 0, _o11 = this.height; _i9 < _o11; _i9++) {
                  for (var _r19 = 0, _o12 = this.width; _r19 < _o12; _r19++) n.append(this.get(_r19, _i9) ? t : e);
                  n.append(r);
                }
                return n.toString();
              }
            }, {
              key: "clone",
              value: function clone() {
                return new y(this.width, this.height, this.rowSize, this.bits.slice());
              }
            }], [{
              key: "parseFromBooleanArray",
              value: function parseFromBooleanArray(t) {
                var e = t.length,
                  r = t[0].length,
                  n = new y(r, e);
                for (var _i10 = 0; _i10 < e; _i10++) {
                  var _e12 = t[_i10];
                  for (var _t11 = 0; _t11 < r; _t11++) _e12[_t11] && n.set(_t11, _i10);
                }
                return n;
              }
            }, {
              key: "parseFromString",
              value: function parseFromString(t, e, r) {
                if (null === t) throw new a("stringRepresentation cannot be null");
                var n = new Array(t.length);
                var i = 0,
                  o = 0,
                  s = -1,
                  l = 0,
                  c = 0;
                for (; c < t.length;) if ("\n" === t.charAt(c) || "\r" === t.charAt(c)) {
                  if (i > o) {
                    if (-1 === s) s = i - o;else if (i - o !== s) throw new a("row lengths do not match");
                    o = i, l++;
                  }
                  c++;
                } else if (t.substring(c, c + e.length) === e) c += e.length, n[i] = !0, i++;else {
                  if (t.substring(c, c + r.length) !== r) throw new a("illegal character encountered: " + t.substring(c));
                  c += r.length, n[i] = !1, i++;
                }
                if (i > o) {
                  if (-1 === s) s = i - o;else if (i - o !== s) throw new a("row lengths do not match");
                  l++;
                }
                var h = new y(s, l);
                for (var _t12 = 0; _t12 < i; _t12++) n[_t12] && h.set(Math.floor(_t12 % s), Math.floor(_t12 / s));
                return h;
              }
            }]);
            return y;
          }();
          var N = /*#__PURE__*/function (_o13) {
            _inherits(N, _o13);
            var _super9 = _createSuper(N);
            function N() {
              _classCallCheck(this, N);
              return _super9.apply(this, arguments);
            }
            _createClass(N, null, [{
              key: "getNotFoundInstance",
              value: function getNotFoundInstance() {
                return new N();
              }
            }]);
            return N;
          }(o);
          N.kind = "NotFoundException";
          var M = /*#__PURE__*/function (_h) {
            _inherits(M, _h);
            var _super10 = _createSuper(M);
            function M(t) {
              var _this3;
              _classCallCheck(this, M);
              _this3 = _super10.call(this, t), _this3.luminances = M.EMPTY, _this3.buckets = new Int32Array(M.LUMINANCE_BUCKETS);
              return _this3;
            }
            _createClass(M, [{
              key: "getBlackRow",
              value: function getBlackRow(t, e) {
                var r = this.getLuminanceSource(),
                  n = r.getWidth();
                null == e || e.getSize() < n ? e = new A(n) : e.clear(), this.initArrays(n);
                var i = r.getRow(t, this.luminances),
                  o = this.buckets;
                for (var _t13 = 0; _t13 < n; _t13++) o[(255 & i[_t13]) >> M.LUMINANCE_SHIFT]++;
                var s = M.estimateBlackPoint(o);
                if (n < 3) for (var _t14 = 0; _t14 < n; _t14++) (255 & i[_t14]) < s && e.set(_t14);else {
                  var _t15 = 255 & i[0],
                    _r20 = 255 & i[1];
                  for (var _o14 = 1; _o14 < n - 1; _o14++) {
                    var _n10 = 255 & i[_o14 + 1];
                    (4 * _r20 - _t15 - _n10) / 2 < s && e.set(_o14), _t15 = _r20, _r20 = _n10;
                  }
                }
                return e;
              }
            }, {
              key: "getBlackMatrix",
              value: function getBlackMatrix() {
                var t = this.getLuminanceSource(),
                  e = t.getWidth(),
                  r = t.getHeight(),
                  n = new y(e, r);
                this.initArrays(e);
                var i = this.buckets;
                for (var _n11 = 1; _n11 < 5; _n11++) {
                  var _o15 = Math.floor(r * _n11 / 5),
                    _s5 = t.getRow(_o15, this.luminances),
                    _a2 = Math.floor(4 * e / 5);
                  for (var _t16 = Math.floor(e / 5); _t16 < _a2; _t16++) i[(255 & _s5[_t16]) >> M.LUMINANCE_SHIFT]++;
                }
                var o = M.estimateBlackPoint(i),
                  s = t.getMatrix();
                for (var _t17 = 0; _t17 < r; _t17++) {
                  var _r21 = _t17 * e;
                  for (var _i11 = 0; _i11 < e; _i11++) (255 & s[_r21 + _i11]) < o && n.set(_i11, _t17);
                }
                return n;
              }
            }, {
              key: "createBinarizer",
              value: function createBinarizer(t) {
                return new M(t);
              }
            }, {
              key: "initArrays",
              value: function initArrays(t) {
                this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                var e = this.buckets;
                for (var _t18 = 0; _t18 < M.LUMINANCE_BUCKETS; _t18++) e[_t18] = 0;
              }
            }], [{
              key: "estimateBlackPoint",
              value: function estimateBlackPoint(t) {
                var e = t.length;
                var r = 0,
                  n = 0,
                  i = 0;
                for (var _o16 = 0; _o16 < e; _o16++) t[_o16] > i && (n = _o16, i = t[_o16]), t[_o16] > r && (r = t[_o16]);
                var o = 0,
                  s = 0;
                for (var _r22 = 0; _r22 < e; _r22++) {
                  var _e13 = _r22 - n,
                    _i12 = t[_r22] * _e13 * _e13;
                  _i12 > s && (o = _r22, s = _i12);
                }
                if (n > o) {
                  var _t19 = n;
                  n = o, o = _t19;
                }
                if (o - n <= e / 16) throw new N();
                var a = o - 1,
                  l = -1;
                for (var _e14 = o - 1; _e14 > n; _e14--) {
                  var _i13 = _e14 - n,
                    _s6 = _i13 * _i13 * (o - _e14) * (r - t[_e14]);
                  _s6 > l && (a = _e14, l = _s6);
                }
                return a << M.LUMINANCE_SHIFT;
              }
            }]);
            return M;
          }(h);
          M.LUMINANCE_BITS = 5, M.LUMINANCE_SHIFT = 8 - M.LUMINANCE_BITS, M.LUMINANCE_BUCKETS = 1 << M.LUMINANCE_BITS, M.EMPTY = Uint8ClampedArray.from([0]);
          var D = /*#__PURE__*/function (_M) {
            _inherits(D, _M);
            var _super11 = _createSuper(D);
            function D(t) {
              var _this4;
              _classCallCheck(this, D);
              _this4 = _super11.call(this, t), _this4.matrix = null;
              return _this4;
            }
            _createClass(D, [{
              key: "getBlackMatrix",
              value: function getBlackMatrix() {
                if (null !== this.matrix) return this.matrix;
                var t = this.getLuminanceSource(),
                  e = t.getWidth(),
                  r = t.getHeight();
                if (e >= D.MINIMUM_DIMENSION && r >= D.MINIMUM_DIMENSION) {
                  var _n12 = t.getMatrix();
                  var _i14 = e >> D.BLOCK_SIZE_POWER;
                  0 != (e & D.BLOCK_SIZE_MASK) && _i14++;
                  var _o17 = r >> D.BLOCK_SIZE_POWER;
                  0 != (r & D.BLOCK_SIZE_MASK) && _o17++;
                  var _s7 = D.calculateBlackPoints(_n12, _i14, _o17, e, r),
                    _a3 = new y(e, r);
                  D.calculateThresholdForBlock(_n12, _i14, _o17, e, r, _s7, _a3), this.matrix = _a3;
                } else this.matrix = _get(_getPrototypeOf(D.prototype), "getBlackMatrix", this).call(this);
                return this.matrix;
              }
            }, {
              key: "createBinarizer",
              value: function createBinarizer(t) {
                return new D(t);
              }
            }], [{
              key: "calculateThresholdForBlock",
              value: function calculateThresholdForBlock(t, e, r, n, i, o, s) {
                var a = i - D.BLOCK_SIZE,
                  l = n - D.BLOCK_SIZE;
                for (var _i15 = 0; _i15 < r; _i15++) {
                  var _c = _i15 << D.BLOCK_SIZE_POWER;
                  _c > a && (_c = a);
                  var _h2 = D.cap(_i15, 2, r - 3);
                  for (var _r23 = 0; _r23 < e; _r23++) {
                    var _i16 = _r23 << D.BLOCK_SIZE_POWER;
                    _i16 > l && (_i16 = l);
                    var _a4 = D.cap(_r23, 2, e - 3);
                    var _u = 0;
                    for (var _t20 = -2; _t20 <= 2; _t20++) {
                      var _e15 = o[_h2 + _t20];
                      _u += _e15[_a4 - 2] + _e15[_a4 - 1] + _e15[_a4] + _e15[_a4 + 1] + _e15[_a4 + 2];
                    }
                    var _d2 = _u / 25;
                    D.thresholdBlock(t, _i16, _c, _d2, n, s);
                  }
                }
              }
            }, {
              key: "cap",
              value: function cap(t, e, r) {
                return t < e ? e : t > r ? r : t;
              }
            }, {
              key: "thresholdBlock",
              value: function thresholdBlock(t, e, r, n, i, o) {
                for (var _s8 = 0, _a5 = r * i + e; _s8 < D.BLOCK_SIZE; _s8++, _a5 += i) for (var _i17 = 0; _i17 < D.BLOCK_SIZE; _i17++) (255 & t[_a5 + _i17]) <= n && o.set(e + _i17, r + _s8);
              }
            }, {
              key: "calculateBlackPoints",
              value: function calculateBlackPoints(t, e, r, n, i) {
                var o = i - D.BLOCK_SIZE,
                  s = n - D.BLOCK_SIZE,
                  a = new Array(r);
                for (var _i18 = 0; _i18 < r; _i18++) {
                  a[_i18] = new Int32Array(e);
                  var _r24 = _i18 << D.BLOCK_SIZE_POWER;
                  _r24 > o && (_r24 = o);
                  for (var _o18 = 0; _o18 < e; _o18++) {
                    var _e16 = _o18 << D.BLOCK_SIZE_POWER;
                    _e16 > s && (_e16 = s);
                    var _l2 = 0,
                      _c2 = 255,
                      _h3 = 0;
                    for (var _i19 = 0, _o19 = _r24 * n + _e16; _i19 < D.BLOCK_SIZE; _i19++, _o19 += n) {
                      for (var _e17 = 0; _e17 < D.BLOCK_SIZE; _e17++) {
                        var _r25 = 255 & t[_o19 + _e17];
                        _l2 += _r25, _r25 < _c2 && (_c2 = _r25), _r25 > _h3 && (_h3 = _r25);
                      }
                      if (_h3 - _c2 > D.MIN_DYNAMIC_RANGE) for (_i19++, _o19 += n; _i19 < D.BLOCK_SIZE; _i19++, _o19 += n) for (var _e18 = 0; _e18 < D.BLOCK_SIZE; _e18++) _l2 += 255 & t[_o19 + _e18];
                    }
                    var _u2 = _l2 >> 2 * D.BLOCK_SIZE_POWER;
                    if (_h3 - _c2 <= D.MIN_DYNAMIC_RANGE && (_u2 = _c2 / 2, _i18 > 0 && _o18 > 0)) {
                      var _t21 = (a[_i18 - 1][_o18] + 2 * a[_i18][_o18 - 1] + a[_i18 - 1][_o18 - 1]) / 4;
                      _c2 < _t21 && (_u2 = _t21);
                    }
                    a[_i18][_o18] = _u2;
                  }
                }
                return a;
              }
            }]);
            return D;
          }(M);
          D.BLOCK_SIZE_POWER = 3, D.BLOCK_SIZE = 1 << D.BLOCK_SIZE_POWER, D.BLOCK_SIZE_MASK = D.BLOCK_SIZE - 1, D.MINIMUM_DIMENSION = 5 * D.BLOCK_SIZE, D.MIN_DYNAMIC_RANGE = 24;
          var R = /*#__PURE__*/function () {
            function R(t, e) {
              _classCallCheck(this, R);
              this.width = t, this.height = e;
            }
            _createClass(R, [{
              key: "getWidth",
              value: function getWidth() {
                return this.width;
              }
            }, {
              key: "getHeight",
              value: function getHeight() {
                return this.height;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return !1;
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                throw new p("This luminance source does not support cropping.");
              }
            }, {
              key: "isRotateSupported",
              value: function isRotateSupported() {
                return !1;
              }
            }, {
              key: "rotateCounterClockwise",
              value: function rotateCounterClockwise() {
                throw new p("This luminance source does not support rotation by 90 degrees.");
              }
            }, {
              key: "rotateCounterClockwise45",
              value: function rotateCounterClockwise45() {
                throw new p("This luminance source does not support rotation by 45 degrees.");
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = new Uint8ClampedArray(this.width);
                var e = new T();
                for (var _r26 = 0; _r26 < this.height; _r26++) {
                  var _n13 = this.getRow(_r26, t);
                  for (var _t22 = 0; _t22 < this.width; _t22++) {
                    var _r27 = 255 & _n13[_t22];
                    var _i20 = void 0;
                    _i20 = _r27 < 64 ? "#" : _r27 < 128 ? "+" : _r27 < 192 ? "." : " ", e.append(_i20);
                  }
                  e.append("\n");
                }
                return e.toString();
              }
            }]);
            return R;
          }();
          var O = /*#__PURE__*/function (_R) {
            _inherits(O, _R);
            var _super12 = _createSuper(O);
            function O(t) {
              var _this5;
              _classCallCheck(this, O);
              _this5 = _super12.call(this, t.getWidth(), t.getHeight()), _this5.delegate = t;
              return _this5;
            }
            _createClass(O, [{
              key: "getRow",
              value: function getRow(t, e) {
                var r = this.delegate.getRow(t, e),
                  n = this.getWidth();
                for (var _t23 = 0; _t23 < n; _t23++) r[_t23] = 255 - (255 & r[_t23]);
                return r;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                var t = this.delegate.getMatrix(),
                  e = this.getWidth() * this.getHeight(),
                  r = new Uint8ClampedArray(e);
                for (var _n14 = 0; _n14 < e; _n14++) r[_n14] = 255 - (255 & t[_n14]);
                return r;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return this.delegate.isCropSupported();
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                return new O(this.delegate.crop(t, e, r, n));
              }
            }, {
              key: "isRotateSupported",
              value: function isRotateSupported() {
                return this.delegate.isRotateSupported();
              }
            }, {
              key: "invert",
              value: function invert() {
                return this.delegate;
              }
            }, {
              key: "rotateCounterClockwise",
              value: function rotateCounterClockwise() {
                return new O(this.delegate.rotateCounterClockwise());
              }
            }, {
              key: "rotateCounterClockwise45",
              value: function rotateCounterClockwise45() {
                return new O(this.delegate.rotateCounterClockwise45());
              }
            }]);
            return O;
          }(R);
          var b = /*#__PURE__*/function (_R2) {
            _inherits(b, _R2);
            var _super13 = _createSuper(b);
            function b(t) {
              var _this6;
              _classCallCheck(this, b);
              _this6 = _super13.call(this, t.width, t.height), _this6.canvas = t, _this6.tempCanvasElement = null, _this6.buffer = b.makeBufferFromCanvasImageData(t);
              return _this6;
            }
            _createClass(b, [{
              key: "getRow",
              value: function getRow(t, e) {
                if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                var r = this.getWidth(),
                  n = t * r;
                return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                return this.buffer;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return !0;
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                return _get(_getPrototypeOf(b.prototype), "crop", this).call(this, t, e, r, n), this;
              }
            }, {
              key: "isRotateSupported",
              value: function isRotateSupported() {
                return !0;
              }
            }, {
              key: "rotateCounterClockwise",
              value: function rotateCounterClockwise() {
                return this.rotate(-90), this;
              }
            }, {
              key: "rotateCounterClockwise45",
              value: function rotateCounterClockwise45() {
                return this.rotate(-45), this;
              }
            }, {
              key: "getTempCanvasElement",
              value: function getTempCanvasElement() {
                if (null === this.tempCanvasElement) {
                  var _t24 = this.canvas.ownerDocument.createElement("canvas");
                  _t24.width = this.canvas.width, _t24.height = this.canvas.height, this.tempCanvasElement = _t24;
                }
                return this.tempCanvasElement;
              }
            }, {
              key: "rotate",
              value: function rotate(t) {
                var e = this.getTempCanvasElement(),
                  r = e.getContext("2d"),
                  n = t * b.DEGREE_TO_RADIANS,
                  i = this.canvas.width,
                  o = this.canvas.height,
                  s = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * o),
                  a = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * o);
                return e.width = s, e.height = a, r.translate(s / 2, a / 2), r.rotate(n), r.drawImage(this.canvas, i / -2, o / -2), this.buffer = b.makeBufferFromCanvasImageData(e), this;
              }
            }, {
              key: "invert",
              value: function invert() {
                return new O(this);
              }
            }], [{
              key: "makeBufferFromCanvasImageData",
              value: function makeBufferFromCanvasImageData(t) {
                var e = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                return b.toGrayscaleBuffer(e.data, t.width, t.height);
              }
            }, {
              key: "toGrayscaleBuffer",
              value: function toGrayscaleBuffer(t, e, r) {
                var n = new Uint8ClampedArray(e * r);
                for (var _e19 = 0, _r28 = 0, _i21 = t.length; _e19 < _i21; _e19 += 4, _r28++) {
                  var _i22 = void 0;
                  _i22 = 0 === t[_e19 + 3] ? 255 : 306 * t[_e19] + 601 * t[_e19 + 1] + 117 * t[_e19 + 2] + 512 >> 10, n[_r28] = _i22;
                }
                return n;
              }
            }]);
            return b;
          }(R);
          b.DEGREE_TO_RADIANS = Math.PI / 180;
          var L = /*#__PURE__*/function () {
            function L(t, e, r) {
              _classCallCheck(this, L);
              this.deviceId = t, this.label = e, this.kind = "videoinput", this.groupId = r || void 0;
            }
            _createClass(L, [{
              key: "toJSON",
              value: function toJSON() {
                return {
                  kind: this.kind,
                  groupId: this.groupId,
                  deviceId: this.deviceId,
                  label: this.label
                };
              }
            }]);
            return L;
          }();
          var B,
            P = (globalThis || r.g || self || window ? (globalThis || r.g || self || window || void 0).__awaiter : void 0) || function (t, e, r, n) {
              return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                  try {
                    l(n.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    l(n["throw"](t));
                  } catch (t) {
                    o(t);
                  }
                }
                function l(t) {
                  var e;
                  t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
                    t(e);
                  })).then(s, a);
                }
                l((n = n.apply(t, e || [])).next());
              });
            };
          var v = /*#__PURE__*/function () {
            function v(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
              var r = arguments.length > 2 ? arguments[2] : undefined;
              _classCallCheck(this, v);
              this.reader = t, this.timeBetweenScansMillis = e, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
            }
            _createClass(v, [{
              key: "hasNavigator",
              get: function get() {
                return "undefined" != typeof navigator;
              }
            }, {
              key: "isMediaDevicesSuported",
              get: function get() {
                return this.hasNavigator && !!navigator.mediaDevices;
              }
            }, {
              key: "canEnumerateDevices",
              get: function get() {
                return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
              }
            }, {
              key: "timeBetweenDecodingAttempts",
              get: function get() {
                return this._timeBetweenDecodingAttempts;
              },
              set: function set(t) {
                this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
              }
            }, {
              key: "hints",
              get: function get() {
                return this._hints;
              },
              set: function set(t) {
                this._hints = t || null;
              }
            }, {
              key: "listVideoInputDevices",
              value: function listVideoInputDevices() {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var t, e, _iterator2, _step2, _r29, _t25, _n15;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (this.hasNavigator) {
                          _context.next = 2;
                          break;
                        }
                        throw new Error("Can't enumerate devices, navigator is not present.");
                      case 2:
                        if (this.canEnumerateDevices) {
                          _context.next = 4;
                          break;
                        }
                        throw new Error("Can't enumerate devices, method not supported.");
                      case 4:
                        _context.next = 6;
                        return navigator.mediaDevices.enumerateDevices();
                      case 6:
                        t = _context.sent;
                        e = [];
                        _iterator2 = _createForOfIteratorHelper(t);
                        _context.prev = 9;
                        _iterator2.s();
                      case 11:
                        if ((_step2 = _iterator2.n()).done) {
                          _context.next = 20;
                          break;
                        }
                        _r29 = _step2.value;
                        _t25 = "video" === _r29.kind ? "videoinput" : _r29.kind;
                        if (!("videoinput" !== _t25)) {
                          _context.next = 16;
                          break;
                        }
                        return _context.abrupt("continue", 18);
                      case 16:
                        _n15 = {
                          deviceId: _r29.deviceId || _r29.id,
                          label: _r29.label || "Video device ".concat(e.length + 1),
                          kind: _t25,
                          groupId: _r29.groupId
                        };
                        e.push(_n15);
                      case 18:
                        _context.next = 11;
                        break;
                      case 20:
                        _context.next = 25;
                        break;
                      case 22:
                        _context.prev = 22;
                        _context.t0 = _context["catch"](9);
                        _iterator2.e(_context.t0);
                      case 25:
                        _context.prev = 25;
                        _iterator2.f();
                        return _context.finish(25);
                      case 28:
                        return _context.abrupt("return", e);
                      case 29:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this, [[9, 22, 25, 28]]);
                }));
              }
            }, {
              key: "getVideoInputDevices",
              value: function getVideoInputDevices() {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return this.listVideoInputDevices();
                      case 2:
                        return _context2.abrupt("return", _context2.sent.map(function (t) {
                          return new L(t.deviceId, t.label);
                        }));
                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, this);
                }));
              }
            }, {
              key: "findDeviceById",
              value: function findDeviceById(t) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var e;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this.listVideoInputDevices();
                      case 2:
                        e = _context3.sent;
                        return _context3.abrupt("return", e ? e.find(function (e) {
                          return e.deviceId === t;
                        }) : null);
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, this);
                }));
              }
            }, {
              key: "decodeFromInputVideoDevice",
              value: function decodeFromInputVideoDevice(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return this.decodeOnceFromVideoDevice(t, e);
                      case 2:
                        return _context4.abrupt("return", _context4.sent);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4, this);
                }));
              }
            }, {
              key: "decodeOnceFromVideoDevice",
              value: function decodeOnceFromVideoDevice(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var r, n;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        this.reset(), r = t ? {
                          deviceId: {
                            exact: t
                          }
                        } : {
                          facingMode: "environment"
                        };
                        n = {
                          video: r
                        };
                        _context5.next = 4;
                        return this.decodeOnceFromConstraints(n, e);
                      case 4:
                        return _context5.abrupt("return", _context5.sent);
                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, this);
                }));
              }
            }, {
              key: "decodeOnceFromConstraints",
              value: function decodeOnceFromConstraints(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return navigator.mediaDevices.getUserMedia(t);
                      case 2:
                        r = _context6.sent;
                        _context6.next = 5;
                        return this.decodeOnceFromStream(r, e);
                      case 5:
                        return _context6.abrupt("return", _context6.sent);
                      case 6:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, this);
                }));
              }
            }, {
              key: "decodeOnceFromStream",
              value: function decodeOnceFromStream(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        this.reset();
                        _context7.next = 3;
                        return this.attachStreamToVideo(t, e);
                      case 3:
                        r = _context7.sent;
                        _context7.next = 6;
                        return this.decodeOnce(r);
                      case 6:
                        return _context7.abrupt("return", _context7.sent);
                      case 7:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7, this);
                }));
              }
            }, {
              key: "decodeFromInputVideoDeviceContinuously",
              value: function decodeFromInputVideoDeviceContinuously(t, e, r) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.decodeFromVideoDevice(t, e, r);
                      case 2:
                        return _context8.abrupt("return", _context8.sent);
                      case 3:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8, this);
                }));
              }
            }, {
              key: "decodeFromVideoDevice",
              value: function decodeFromVideoDevice(t, e, r) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                  var n, i;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        n = t ? {
                          deviceId: {
                            exact: t
                          }
                        } : {
                          facingMode: "environment"
                        };
                        i = {
                          video: n
                        };
                        _context9.next = 4;
                        return this.decodeFromConstraints(i, e, r);
                      case 4:
                        return _context9.abrupt("return", _context9.sent);
                      case 5:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9, this);
                }));
              }
            }, {
              key: "decodeFromConstraints",
              value: function decodeFromConstraints(t, e, r) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                  var n;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return navigator.mediaDevices.getUserMedia(t);
                      case 2:
                        n = _context10.sent;
                        _context10.next = 5;
                        return this.decodeFromStream(n, e, r);
                      case 5:
                        return _context10.abrupt("return", _context10.sent);
                      case 6:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10, this);
                }));
              }
            }, {
              key: "decodeFromStream",
              value: function decodeFromStream(t, e, r) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                  var n;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        this.reset();
                        _context11.next = 3;
                        return this.attachStreamToVideo(t, e);
                      case 3:
                        n = _context11.sent;
                        _context11.next = 6;
                        return this.decodeContinuously(n, r);
                      case 6:
                        return _context11.abrupt("return", _context11.sent);
                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, this);
                }));
              }
            }, {
              key: "stopAsyncDecode",
              value: function stopAsyncDecode() {
                this._stopAsyncDecode = !0;
              }
            }, {
              key: "stopContinuousDecode",
              value: function stopContinuousDecode() {
                this._stopContinuousDecode = !0;
              }
            }, {
              key: "attachStreamToVideo",
              value: function attachStreamToVideo(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        r = this.prepareVideoElement(e);
                        this.addVideoSource(r, t);
                        this.videoElement = r;
                        this.stream = t;
                        _context12.next = 6;
                        return this.playVideoOnLoadAsync(r);
                      case 6:
                        return _context12.abrupt("return", r);
                      case 7:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12, this);
                }));
              }
            }, {
              key: "playVideoOnLoadAsync",
              value: function playVideoOnLoadAsync(t) {
                var _this7 = this;
                return new Promise(function (e, r) {
                  return _this7.playVideoOnLoad(t, function () {
                    return e();
                  });
                });
              }
            }, {
              key: "playVideoOnLoad",
              value: function playVideoOnLoad(t, e) {
                var _this8 = this;
                this.videoEndedListener = function () {
                  return _this8.stopStreams();
                }, this.videoCanPlayListener = function () {
                  return _this8.tryPlayVideo(t);
                }, t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener("playing", e), this.tryPlayVideo(t);
              }
            }, {
              key: "isVideoPlaying",
              value: function isVideoPlaying(t) {
                return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2;
              }
            }, {
              key: "tryPlayVideo",
              value: function tryPlayVideo(t) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!this.isVideoPlaying(t)) {
                          _context13.next = 4;
                          break;
                        }
                        console.warn("Trying to play video that is already playing.");
                        _context13.next = 12;
                        break;
                      case 4:
                        _context13.prev = 4;
                        _context13.next = 7;
                        return t.play();
                      case 7:
                        _context13.next = 12;
                        break;
                      case 9:
                        _context13.prev = 9;
                        _context13.t0 = _context13["catch"](4);
                        console.warn("It was not possible to play the video.");
                      case 12:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13, this, [[4, 9]]);
                }));
              }
            }, {
              key: "getMediaElement",
              value: function getMediaElement(t, e) {
                var r = document.getElementById(t);
                if (!r) throw new s("element with id '".concat(t, "' not found"));
                if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new s("element with id '".concat(t, "' must be an ").concat(e, " element"));
                return r;
              }
            }, {
              key: "decodeFromImage",
              value: function decodeFromImage(t, e) {
                if (!t && !e) throw new s("either imageElement with a src set or an url must be provided");
                return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t);
              }
            }, {
              key: "decodeFromVideo",
              value: function decodeFromVideo(t, e) {
                if (!t && !e) throw new s("Either an element with a src set or an URL must be provided");
                return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t);
              }
            }, {
              key: "decodeFromVideoContinuously",
              value: function decodeFromVideoContinuously(t, e, r) {
                if (void 0 === t && void 0 === e) throw new s("Either an element with a src set or an URL must be provided");
                return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r);
              }
            }, {
              key: "decodeFromImageElement",
              value: function decodeFromImageElement(t) {
                if (!t) throw new s("An image element must be provided.");
                this.reset();
                var e = this.prepareImageElement(t);
                var r;
                return this.imageElement = e, r = this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e), r;
              }
            }, {
              key: "decodeFromVideoElement",
              value: function decodeFromVideoElement(t) {
                var e = this._decodeFromVideoElementSetup(t);
                return this._decodeOnLoadVideo(e);
              }
            }, {
              key: "decodeFromVideoElementContinuously",
              value: function decodeFromVideoElementContinuously(t, e) {
                var r = this._decodeFromVideoElementSetup(t);
                return this._decodeOnLoadVideoContinuously(r, e);
              }
            }, {
              key: "_decodeFromVideoElementSetup",
              value: function _decodeFromVideoElementSetup(t) {
                if (!t) throw new s("A video element must be provided.");
                this.reset();
                var e = this.prepareVideoElement(t);
                return this.videoElement = e, e;
              }
            }, {
              key: "decodeFromImageUrl",
              value: function decodeFromImageUrl(t) {
                if (!t) throw new s("An URL must be provided.");
                this.reset();
                var e = this.prepareImageElement();
                this.imageElement = e;
                var r = this._decodeOnLoadImage(e);
                return e.src = t, r;
              }
            }, {
              key: "decodeFromVideoUrl",
              value: function decodeFromVideoUrl(t) {
                if (!t) throw new s("An URL must be provided.");
                this.reset();
                var e = this.prepareVideoElement(),
                  r = this.decodeFromVideoElement(e);
                return e.src = t, r;
              }
            }, {
              key: "decodeFromVideoUrlContinuously",
              value: function decodeFromVideoUrlContinuously(t, e) {
                if (!t) throw new s("An URL must be provided.");
                this.reset();
                var r = this.prepareVideoElement(),
                  n = this.decodeFromVideoElementContinuously(r, e);
                return r.src = t, n;
              }
            }, {
              key: "_decodeOnLoadImage",
              value: function _decodeOnLoadImage(t) {
                var _this9 = this;
                return new Promise(function (e, r) {
                  _this9.imageLoadedListener = function () {
                    return _this9.decodeOnce(t, !1, !0).then(e, r);
                  }, t.addEventListener("load", _this9.imageLoadedListener);
                });
              }
            }, {
              key: "_decodeOnLoadVideo",
              value: function _decodeOnLoadVideo(t) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this.playVideoOnLoadAsync(t);
                      case 2:
                        _context14.next = 4;
                        return this.decodeOnce(t);
                      case 4:
                        return _context14.abrupt("return", _context14.sent);
                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }, _callee14, this);
                }));
              }
            }, {
              key: "_decodeOnLoadVideoContinuously",
              value: function _decodeOnLoadVideoContinuously(t, e) {
                return P(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return this.playVideoOnLoadAsync(t);
                      case 2:
                        this.decodeContinuously(t, e);
                      case 3:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15, this);
                }));
              }
            }, {
              key: "isImageLoaded",
              value: function isImageLoaded(t) {
                return !!t.complete && 0 !== t.naturalWidth;
              }
            }, {
              key: "prepareImageElement",
              value: function prepareImageElement(t) {
                var e;
                return void 0 === t && (e = document.createElement("img"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "img")), t instanceof HTMLImageElement && (e = t), e;
              }
            }, {
              key: "prepareVideoElement",
              value: function prepareVideoElement(t) {
                var e;
                return t || "undefined" == typeof document || (e = document.createElement("video"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (e = t), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e;
              }
            }, {
              key: "decodeOnce",
              value: function decodeOnce(t) {
                var _this10 = this;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                this._stopAsyncDecode = !1;
                var n = function n(i, o) {
                  if (_this10._stopAsyncDecode) return o(new N("Video stream has ended before any code could be detected.")), void (_this10._stopAsyncDecode = void 0);
                  try {
                    i(_this10.decode(t));
                  } catch (t) {
                    var _s9 = (t instanceof c || t instanceof C) && r;
                    if (e && t instanceof N || _s9) return setTimeout(n, _this10._timeBetweenDecodingAttempts, i, o);
                    o(t);
                  }
                };
                return new Promise(function (t, e) {
                  return n(t, e);
                });
              }
            }, {
              key: "decodeContinuously",
              value: function decodeContinuously(t, e) {
                var _this11 = this;
                this._stopContinuousDecode = !1;
                var r = function r() {
                  if (_this11._stopContinuousDecode) _this11._stopContinuousDecode = void 0;else try {
                    var _n16 = _this11.decode(t);
                    e(_n16, null), setTimeout(r, _this11.timeBetweenScansMillis);
                  } catch (t) {
                    e(null, t);
                    var _n17 = t instanceof N;
                    (t instanceof c || t instanceof C || _n17) && setTimeout(r, _this11._timeBetweenDecodingAttempts);
                  }
                };
                r();
              }
            }, {
              key: "decode",
              value: function decode(t) {
                var e = this.createBinaryBitmap(t);
                return this.decodeBitmap(e);
              }
            }, {
              key: "createBinaryBitmap",
              value: function createBinaryBitmap(t) {
                var e = this.getCaptureCanvasContext(t);
                this.drawImageOnCanvas(e, t);
                var r = this.getCaptureCanvas(t),
                  n = new b(r),
                  i = new D(n);
                return new l(i);
              }
            }, {
              key: "getCaptureCanvasContext",
              value: function getCaptureCanvasContext(t) {
                if (!this.captureCanvasContext) {
                  var _e20 = this.getCaptureCanvas(t).getContext("2d");
                  this.captureCanvasContext = _e20;
                }
                return this.captureCanvasContext;
              }
            }, {
              key: "getCaptureCanvas",
              value: function getCaptureCanvas(t) {
                if (!this.captureCanvas) {
                  var _e21 = this.createCaptureCanvas(t);
                  this.captureCanvas = _e21;
                }
                return this.captureCanvas;
              }
            }, {
              key: "drawImageOnCanvas",
              value: function drawImageOnCanvas(t, e) {
                t.drawImage(e, 0, 0);
              }
            }, {
              key: "decodeBitmap",
              value: function decodeBitmap(t) {
                return this.reader.decode(t, this._hints);
              }
            }, {
              key: "createCaptureCanvas",
              value: function createCaptureCanvas(t) {
                if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
                var e = document.createElement("canvas");
                var r, n;
                return void 0 !== t && (t instanceof HTMLVideoElement ? (r = t.videoWidth, n = t.videoHeight) : t instanceof HTMLImageElement && (r = t.naturalWidth || t.width, n = t.naturalHeight || t.height)), e.style.width = r + "px", e.style.height = n + "px", e.width = r, e.height = n, e;
              }
            }, {
              key: "stopStreams",
              value: function stopStreams() {
                this.stream && (this.stream.getVideoTracks().forEach(function (t) {
                  return t.stop();
                }), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode();
              }
            }, {
              key: "reset",
              value: function reset() {
                this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
              }
            }, {
              key: "_destroyVideoElement",
              value: function _destroyVideoElement() {
                this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
              }
            }, {
              key: "_destroyImageElement",
              value: function _destroyImageElement() {
                this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
              }
            }, {
              key: "_destroyCaptureCanvas",
              value: function _destroyCaptureCanvas() {
                this.captureCanvasContext = void 0, this.captureCanvas = void 0;
              }
            }, {
              key: "addVideoSource",
              value: function addVideoSource(t, e) {
                try {
                  t.srcObject = e;
                } catch (r) {
                  t.src = URL.createObjectURL(e);
                }
              }
            }, {
              key: "cleanVideoSource",
              value: function cleanVideoSource(t) {
                try {
                  t.srcObject = null;
                } catch (e) {
                  t.src = "";
                }
                this.videoElement.removeAttribute("src");
              }
            }]);
            return v;
          }();
          var F = /*#__PURE__*/function () {
            function F(t, e) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null == e ? 0 : 8 * e.length;
              var n = arguments.length > 3 ? arguments[3] : undefined;
              var i = arguments.length > 4 ? arguments[4] : undefined;
              var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : u.currentTimeMillis();
              _classCallCheck(this, F);
              this.text = t, this.rawBytes = e, this.numBits = r, this.resultPoints = n, this.format = i, this.timestamp = o, this.text = t, this.rawBytes = e, this.numBits = null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = n, this.format = i, this.resultMetadata = null, this.timestamp = null == o ? u.currentTimeMillis() : o;
            }
            _createClass(F, [{
              key: "getText",
              value: function getText() {
                return this.text;
              }
            }, {
              key: "getRawBytes",
              value: function getRawBytes() {
                return this.rawBytes;
              }
            }, {
              key: "getNumBits",
              value: function getNumBits() {
                return this.numBits;
              }
            }, {
              key: "getResultPoints",
              value: function getResultPoints() {
                return this.resultPoints;
              }
            }, {
              key: "getBarcodeFormat",
              value: function getBarcodeFormat() {
                return this.format;
              }
            }, {
              key: "getResultMetadata",
              value: function getResultMetadata() {
                return this.resultMetadata;
              }
            }, {
              key: "putMetadata",
              value: function putMetadata(t, e) {
                null === this.resultMetadata && (this.resultMetadata = new Map()), this.resultMetadata.set(t, e);
              }
            }, {
              key: "putAllMetadata",
              value: function putAllMetadata(t) {
                null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t));
              }
            }, {
              key: "addResultPoints",
              value: function addResultPoints(t) {
                var e = this.resultPoints;
                if (null === e) this.resultPoints = t;else if (null !== t && t.length > 0) {
                  var _r30 = new Array(e.length + t.length);
                  u.arraycopy(e, 0, _r30, 0, e.length), u.arraycopy(t, 0, _r30, e.length, t.length), this.resultPoints = _r30;
                }
              }
            }, {
              key: "getTimestamp",
              value: function getTimestamp() {
                return this.timestamp;
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.text;
              }
            }]);
            return F;
          }();
          !function (t) {
            t[t.AZTEC = 0] = "AZTEC", t[t.CODABAR = 1] = "CODABAR", t[t.CODE_39 = 2] = "CODE_39", t[t.CODE_93 = 3] = "CODE_93", t[t.CODE_128 = 4] = "CODE_128", t[t.DATA_MATRIX = 5] = "DATA_MATRIX", t[t.EAN_8 = 6] = "EAN_8", t[t.EAN_13 = 7] = "EAN_13", t[t.ITF = 8] = "ITF", t[t.MAXICODE = 9] = "MAXICODE", t[t.PDF_417 = 10] = "PDF_417", t[t.QR_CODE = 11] = "QR_CODE", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
          }(B || (B = {}));
          var x,
            k = B;
          !function (t) {
            t[t.OTHER = 0] = "OTHER", t[t.ORIENTATION = 1] = "ORIENTATION", t[t.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t[t.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t[t.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t[t.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t[t.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t[t.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t[t.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t[t.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t[t.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
          }(x || (x = {}));
          var U,
            H,
            V,
            z,
            G,
            Y,
            X = x;
          var W = /*#__PURE__*/function () {
            function W(t, e, r, n) {
              var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
              var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
              _classCallCheck(this, W);
              this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = i, this.structuredAppendParity = o, this.numBits = null == t ? 0 : 8 * t.length;
            }
            _createClass(W, [{
              key: "getRawBytes",
              value: function getRawBytes() {
                return this.rawBytes;
              }
            }, {
              key: "getNumBits",
              value: function getNumBits() {
                return this.numBits;
              }
            }, {
              key: "setNumBits",
              value: function setNumBits(t) {
                this.numBits = t;
              }
            }, {
              key: "getText",
              value: function getText() {
                return this.text;
              }
            }, {
              key: "getByteSegments",
              value: function getByteSegments() {
                return this.byteSegments;
              }
            }, {
              key: "getECLevel",
              value: function getECLevel() {
                return this.ecLevel;
              }
            }, {
              key: "getErrorsCorrected",
              value: function getErrorsCorrected() {
                return this.errorsCorrected;
              }
            }, {
              key: "setErrorsCorrected",
              value: function setErrorsCorrected(t) {
                this.errorsCorrected = t;
              }
            }, {
              key: "getErasures",
              value: function getErasures() {
                return this.erasures;
              }
            }, {
              key: "setErasures",
              value: function setErasures(t) {
                this.erasures = t;
              }
            }, {
              key: "getOther",
              value: function getOther() {
                return this.other;
              }
            }, {
              key: "setOther",
              value: function setOther(t) {
                this.other = t;
              }
            }, {
              key: "hasStructuredAppend",
              value: function hasStructuredAppend() {
                return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
              }
            }, {
              key: "getStructuredAppendParity",
              value: function getStructuredAppendParity() {
                return this.structuredAppendParity;
              }
            }, {
              key: "getStructuredAppendSequenceNumber",
              value: function getStructuredAppendSequenceNumber() {
                return this.structuredAppendSequenceNumber;
              }
            }]);
            return W;
          }();
          var j = /*#__PURE__*/function () {
            function j() {
              _classCallCheck(this, j);
            }
            _createClass(j, [{
              key: "exp",
              value: function exp(t) {
                return this.expTable[t];
              }
            }, {
              key: "log",
              value: function log(t) {
                if (0 === t) throw new a();
                return this.logTable[t];
              }
            }], [{
              key: "addOrSubtract",
              value: function addOrSubtract(t, e) {
                return t ^ e;
              }
            }]);
            return j;
          }();
          var Z = /*#__PURE__*/function () {
            function Z(t, e) {
              _classCallCheck(this, Z);
              if (0 === e.length) throw new a();
              this.field = t;
              var r = e.length;
              if (r > 1 && 0 === e[0]) {
                var _t26 = 1;
                for (; _t26 < r && 0 === e[_t26];) _t26++;
                _t26 === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - _t26), u.arraycopy(e, _t26, this.coefficients, 0, this.coefficients.length));
              } else this.coefficients = e;
            }
            _createClass(Z, [{
              key: "getCoefficients",
              value: function getCoefficients() {
                return this.coefficients;
              }
            }, {
              key: "getDegree",
              value: function getDegree() {
                return this.coefficients.length - 1;
              }
            }, {
              key: "isZero",
              value: function isZero() {
                return 0 === this.coefficients[0];
              }
            }, {
              key: "getCoefficient",
              value: function getCoefficient(t) {
                return this.coefficients[this.coefficients.length - 1 - t];
              }
            }, {
              key: "evaluateAt",
              value: function evaluateAt(t) {
                if (0 === t) return this.getCoefficient(0);
                var e = this.coefficients;
                var r;
                if (1 === t) {
                  r = 0;
                  for (var _t27 = 0, _n18 = e.length; _t27 !== _n18; _t27++) {
                    var _n19 = e[_t27];
                    r = j.addOrSubtract(r, _n19);
                  }
                  return r;
                }
                r = e[0];
                var n = e.length,
                  i = this.field;
                for (var _o20 = 1; _o20 < n; _o20++) r = j.addOrSubtract(i.multiply(t, r), e[_o20]);
                return r;
              }
            }, {
              key: "addOrSubtract",
              value: function addOrSubtract(t) {
                if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                if (this.isZero()) return t;
                if (t.isZero()) return this;
                var e = this.coefficients,
                  r = t.coefficients;
                if (e.length > r.length) {
                  var _t28 = e;
                  e = r, r = _t28;
                }
                var n = new Int32Array(r.length);
                var i = r.length - e.length;
                u.arraycopy(r, 0, n, 0, i);
                for (var _t29 = i; _t29 < r.length; _t29++) n[_t29] = j.addOrSubtract(e[_t29 - i], r[_t29]);
                return new Z(this.field, n);
              }
            }, {
              key: "multiply",
              value: function multiply(t) {
                if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                if (this.isZero() || t.isZero()) return this.field.getZero();
                var e = this.coefficients,
                  r = e.length,
                  n = t.coefficients,
                  i = n.length,
                  o = new Int32Array(r + i - 1),
                  s = this.field;
                for (var _t30 = 0; _t30 < r; _t30++) {
                  var _r31 = e[_t30];
                  for (var _e22 = 0; _e22 < i; _e22++) o[_t30 + _e22] = j.addOrSubtract(o[_t30 + _e22], s.multiply(_r31, n[_e22]));
                }
                return new Z(s, o);
              }
            }, {
              key: "multiplyScalar",
              value: function multiplyScalar(t) {
                if (0 === t) return this.field.getZero();
                if (1 === t) return this;
                var e = this.coefficients.length,
                  r = this.field,
                  n = new Int32Array(e),
                  i = this.coefficients;
                for (var _o21 = 0; _o21 < e; _o21++) n[_o21] = r.multiply(i[_o21], t);
                return new Z(r, n);
              }
            }, {
              key: "multiplyByMonomial",
              value: function multiplyByMonomial(t, e) {
                if (t < 0) throw new a();
                if (0 === e) return this.field.getZero();
                var r = this.coefficients,
                  n = r.length,
                  i = new Int32Array(n + t),
                  o = this.field;
                for (var _t31 = 0; _t31 < n; _t31++) i[_t31] = o.multiply(r[_t31], e);
                return new Z(o, i);
              }
            }, {
              key: "divide",
              value: function divide(t) {
                if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                if (t.isZero()) throw new a("Divide by 0");
                var e = this.field;
                var r = e.getZero(),
                  n = this;
                var i = t.getCoefficient(t.getDegree()),
                  o = e.inverse(i);
                for (; n.getDegree() >= t.getDegree() && !n.isZero();) {
                  var _i23 = n.getDegree() - t.getDegree(),
                    _s10 = e.multiply(n.getCoefficient(n.getDegree()), o),
                    _a6 = t.multiplyByMonomial(_i23, _s10),
                    _l3 = e.buildMonomial(_i23, _s10);
                  r = r.addOrSubtract(_l3), n = n.addOrSubtract(_a6);
                }
                return [r, n];
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = "";
                for (var _e23 = this.getDegree(); _e23 >= 0; _e23--) {
                  var _r32 = this.getCoefficient(_e23);
                  if (0 !== _r32) {
                    if (_r32 < 0 ? (t += " - ", _r32 = -_r32) : t.length > 0 && (t += " + "), 0 === _e23 || 1 !== _r32) {
                      var _e24 = this.field.log(_r32);
                      0 === _e24 ? t += "1" : 1 === _e24 ? t += "a" : (t += "a^", t += _e24);
                    }
                    0 !== _e23 && (1 === _e23 ? t += "x" : (t += "x^", t += _e23));
                  }
                }
                return t;
              }
            }]);
            return Z;
          }();
          var Q = /*#__PURE__*/function (_o22) {
            _inherits(Q, _o22);
            var _super14 = _createSuper(Q);
            function Q() {
              _classCallCheck(this, Q);
              return _super14.apply(this, arguments);
            }
            return _createClass(Q);
          }(o);
          Q.kind = "ArithmeticException";
          var K = /*#__PURE__*/function (_j) {
            _inherits(K, _j);
            var _super15 = _createSuper(K);
            function K(t, e, r) {
              var _this12;
              _classCallCheck(this, K);
              _this12 = _super15.call(this), _this12.primitive = t, _this12.size = e, _this12.generatorBase = r;
              var n = new Int32Array(e);
              var i = 1;
              for (var _r33 = 0; _r33 < e; _r33++) n[_r33] = i, i *= 2, i >= e && (i ^= t, i &= e - 1);
              _this12.expTable = n;
              var o = new Int32Array(e);
              for (var _t32 = 0; _t32 < e - 1; _t32++) o[n[_t32]] = _t32;
              _this12.logTable = o, _this12.zero = new Z(_assertThisInitialized(_this12), Int32Array.from([0])), _this12.one = new Z(_assertThisInitialized(_this12), Int32Array.from([1]));
              return _this12;
            }
            _createClass(K, [{
              key: "getZero",
              value: function getZero() {
                return this.zero;
              }
            }, {
              key: "getOne",
              value: function getOne() {
                return this.one;
              }
            }, {
              key: "buildMonomial",
              value: function buildMonomial(t, e) {
                if (t < 0) throw new a();
                if (0 === e) return this.zero;
                var r = new Int32Array(t + 1);
                return r[0] = e, new Z(this, r);
              }
            }, {
              key: "inverse",
              value: function inverse(t) {
                if (0 === t) throw new Q();
                return this.expTable[this.size - this.logTable[t] - 1];
              }
            }, {
              key: "multiply",
              value: function multiply(t, e) {
                return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)];
              }
            }, {
              key: "getSize",
              value: function getSize() {
                return this.size;
              }
            }, {
              key: "getGeneratorBase",
              value: function getGeneratorBase() {
                return this.generatorBase;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "GF(0x" + w.toHexString(this.primitive) + "," + this.size + ")";
              }
            }, {
              key: "equals",
              value: function equals(t) {
                return t === this;
              }
            }]);
            return K;
          }(j);
          K.AZTEC_DATA_12 = new K(4201, 4096, 1), K.AZTEC_DATA_10 = new K(1033, 1024, 1), K.AZTEC_DATA_6 = new K(67, 64, 1), K.AZTEC_PARAM = new K(19, 16, 1), K.QR_CODE_FIELD_256 = new K(285, 256, 0), K.DATA_MATRIX_FIELD_256 = new K(301, 256, 1), K.AZTEC_DATA_8 = K.DATA_MATRIX_FIELD_256, K.MAXICODE_FIELD_64 = K.AZTEC_DATA_6;
          var q = /*#__PURE__*/function (_o23) {
            _inherits(q, _o23);
            var _super16 = _createSuper(q);
            function q() {
              _classCallCheck(this, q);
              return _super16.apply(this, arguments);
            }
            return _createClass(q);
          }(o);
          q.kind = "ReedSolomonException";
          var J = /*#__PURE__*/function (_o24) {
            _inherits(J, _o24);
            var _super17 = _createSuper(J);
            function J() {
              _classCallCheck(this, J);
              return _super17.apply(this, arguments);
            }
            return _createClass(J);
          }(o);
          J.kind = "IllegalStateException";
          var $ = /*#__PURE__*/function () {
            function $(t) {
              _classCallCheck(this, $);
              this.field = t;
            }
            _createClass($, [{
              key: "decode",
              value: function decode(t, e) {
                var r = this.field,
                  n = new Z(r, t),
                  i = new Int32Array(e);
                var o = !0;
                for (var _t33 = 0; _t33 < e; _t33++) {
                  var _e25 = n.evaluateAt(r.exp(_t33 + r.getGeneratorBase()));
                  i[i.length - 1 - _t33] = _e25, 0 !== _e25 && (o = !1);
                }
                if (o) return;
                var s = new Z(r, i),
                  a = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), s, e),
                  l = a[0],
                  c = a[1],
                  h = this.findErrorLocations(l),
                  u = this.findErrorMagnitudes(c, h);
                for (var _e26 = 0; _e26 < h.length; _e26++) {
                  var _n20 = t.length - 1 - r.log(h[_e26]);
                  if (_n20 < 0) throw new q("Bad error location");
                  t[_n20] = K.addOrSubtract(t[_n20], u[_e26]);
                }
              }
            }, {
              key: "runEuclideanAlgorithm",
              value: function runEuclideanAlgorithm(t, e, r) {
                if (t.getDegree() < e.getDegree()) {
                  var _r34 = t;
                  t = e, e = _r34;
                }
                var n = this.field;
                var i = t,
                  o = e,
                  s = n.getZero(),
                  a = n.getOne();
                for (; o.getDegree() >= (r / 2 | 0);) {
                  var _t34 = i,
                    _e27 = s;
                  if (i = o, s = a, i.isZero()) throw new q("r_{i-1} was zero");
                  o = _t34;
                  var _r35 = n.getZero();
                  var _l4 = i.getCoefficient(i.getDegree()),
                    _c3 = n.inverse(_l4);
                  for (; o.getDegree() >= i.getDegree() && !o.isZero();) {
                    var _t35 = o.getDegree() - i.getDegree(),
                      _e28 = n.multiply(o.getCoefficient(o.getDegree()), _c3);
                    _r35 = _r35.addOrSubtract(n.buildMonomial(_t35, _e28)), o = o.addOrSubtract(i.multiplyByMonomial(_t35, _e28));
                  }
                  if (a = _r35.multiply(s).addOrSubtract(_e27), o.getDegree() >= i.getDegree()) throw new J("Division algorithm failed to reduce polynomial?");
                }
                var l = a.getCoefficient(0);
                if (0 === l) throw new q("sigmaTilde(0) was zero");
                var c = n.inverse(l);
                return [a.multiplyScalar(c), o.multiplyScalar(c)];
              }
            }, {
              key: "findErrorLocations",
              value: function findErrorLocations(t) {
                var e = t.getDegree();
                if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
                var r = new Int32Array(e);
                var n = 0;
                var i = this.field;
                for (var _o25 = 1; _o25 < i.getSize() && n < e; _o25++) 0 === t.evaluateAt(_o25) && (r[n] = i.inverse(_o25), n++);
                if (n !== e) throw new q("Error locator degree does not match number of roots");
                return r;
              }
            }, {
              key: "findErrorMagnitudes",
              value: function findErrorMagnitudes(t, e) {
                var r = e.length,
                  n = new Int32Array(r),
                  i = this.field;
                for (var _o26 = 0; _o26 < r; _o26++) {
                  var _s11 = i.inverse(e[_o26]);
                  var _a7 = 1;
                  for (var _t36 = 0; _t36 < r; _t36++) if (_o26 !== _t36) {
                    var _r36 = i.multiply(e[_t36], _s11),
                      _n21 = 0 == (1 & _r36) ? 1 | _r36 : -2 & _r36;
                    _a7 = i.multiply(_a7, _n21);
                  }
                  n[_o26] = i.multiply(t.evaluateAt(_s11), i.inverse(_a7)), 0 !== i.getGeneratorBase() && (n[_o26] = i.multiply(n[_o26], _s11));
                }
                return n;
              }
            }]);
            return $;
          }();
          !function (t) {
            t[t.UPPER = 0] = "UPPER", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.DIGIT = 3] = "DIGIT", t[t.PUNCT = 4] = "PUNCT", t[t.BINARY = 5] = "BINARY";
          }(U || (U = {}));
          var tt = /*#__PURE__*/function () {
            function tt() {
              _classCallCheck(this, tt);
            }
            _createClass(tt, [{
              key: "decode",
              value: function decode(t) {
                this.ddata = t;
                var e = t.getBits(),
                  r = this.extractBits(e),
                  n = this.correctBits(r),
                  i = tt.convertBoolArrayToByteArray(n),
                  o = tt.getEncodedData(n),
                  s = new W(i, o, null, null);
                return s.setNumBits(n.length), s;
              }
            }, {
              key: "correctBits",
              value: function correctBits(t) {
                var e, r;
                this.ddata.getNbLayers() <= 2 ? (r = 6, e = K.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, e = K.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (r = 10, e = K.AZTEC_DATA_10) : (r = 12, e = K.AZTEC_DATA_12);
                var n = this.ddata.getNbDatablocks(),
                  i = t.length / r;
                if (i < n) throw new C();
                var o = t.length % r,
                  s = new Int32Array(i);
                for (var _e29 = 0; _e29 < i; _e29++, o += r) s[_e29] = tt.readCode(t, o, r);
                try {
                  new $(e).decode(s, i - n);
                } catch (t) {
                  throw new C(t);
                }
                var a = (1 << r) - 1,
                  l = 0;
                for (var _t37 = 0; _t37 < n; _t37++) {
                  var _e30 = s[_t37];
                  if (0 === _e30 || _e30 === a) throw new C();
                  1 !== _e30 && _e30 !== a - 1 || l++;
                }
                var c = new Array(n * r - l),
                  h = 0;
                for (var _t38 = 0; _t38 < n; _t38++) {
                  var _e31 = s[_t38];
                  if (1 === _e31 || _e31 === a - 1) c.fill(_e31 > 1, h, h + r - 1), h += r - 1;else for (var _t39 = r - 1; _t39 >= 0; --_t39) c[h++] = 0 != (_e31 & 1 << _t39);
                }
                return c;
              }
            }, {
              key: "extractBits",
              value: function extractBits(t) {
                var e = this.ddata.isCompact(),
                  r = this.ddata.getNbLayers(),
                  n = (e ? 11 : 14) + 4 * r,
                  i = new Int32Array(n),
                  o = new Array(this.totalBitsInLayer(r, e));
                if (e) for (var _t40 = 0; _t40 < i.length; _t40++) i[_t40] = _t40;else {
                  var _t41 = n + 1 + 2 * w.truncDivision(w.truncDivision(n, 2) - 1, 15),
                    _e32 = n / 2,
                    _r37 = w.truncDivision(_t41, 2);
                  for (var _t42 = 0; _t42 < _e32; _t42++) {
                    var _n22 = _t42 + w.truncDivision(_t42, 15);
                    i[_e32 - _t42 - 1] = _r37 - _n22 - 1, i[_e32 + _t42] = _r37 + _n22 + 1;
                  }
                }
                for (var _s12 = 0, _a8 = 0; _s12 < r; _s12++) {
                  var _l5 = 4 * (r - _s12) + (e ? 9 : 12),
                    _c4 = 2 * _s12,
                    _h4 = n - 1 - _c4;
                  for (var _e33 = 0; _e33 < _l5; _e33++) {
                    var _r38 = 2 * _e33;
                    for (var _n23 = 0; _n23 < 2; _n23++) o[_a8 + _r38 + _n23] = t.get(i[_c4 + _n23], i[_c4 + _e33]), o[_a8 + 2 * _l5 + _r38 + _n23] = t.get(i[_c4 + _e33], i[_h4 - _n23]), o[_a8 + 4 * _l5 + _r38 + _n23] = t.get(i[_h4 - _n23], i[_h4 - _e33]), o[_a8 + 6 * _l5 + _r38 + _n23] = t.get(i[_h4 - _e33], i[_c4 + _n23]);
                  }
                  _a8 += 8 * _l5;
                }
                return o;
              }
            }, {
              key: "totalBitsInLayer",
              value: function totalBitsInLayer(t, e) {
                return ((e ? 88 : 112) + 16 * t) * t;
              }
            }], [{
              key: "highLevelDecode",
              value: function highLevelDecode(t) {
                return this.getEncodedData(t);
              }
            }, {
              key: "getEncodedData",
              value: function getEncodedData(t) {
                var e = t.length,
                  r = U.UPPER,
                  n = U.UPPER,
                  i = "",
                  o = 0;
                for (; o < e;) if (n === U.BINARY) {
                  if (e - o < 5) break;
                  var _s13 = tt.readCode(t, o, 5);
                  if (o += 5, 0 === _s13) {
                    if (e - o < 11) break;
                    _s13 = tt.readCode(t, o, 11) + 31, o += 11;
                  }
                  for (var _r39 = 0; _r39 < _s13; _r39++) {
                    if (e - o < 8) {
                      o = e;
                      break;
                    }
                    var _r40 = tt.readCode(t, o, 8);
                    i += _.castAsNonUtf8Char(_r40), o += 8;
                  }
                  n = r;
                } else {
                  var _s14 = n === U.DIGIT ? 4 : 5;
                  if (e - o < _s14) break;
                  var _a9 = tt.readCode(t, o, _s14);
                  o += _s14;
                  var _l6 = tt.getCharacter(n, _a9);
                  _l6.startsWith("CTRL_") ? (r = n, n = tt.getTable(_l6.charAt(5)), "L" === _l6.charAt(6) && (r = n)) : (i += _l6, n = r);
                }
                return i;
              }
            }, {
              key: "getTable",
              value: function getTable(t) {
                switch (t) {
                  case "L":
                    return U.LOWER;
                  case "P":
                    return U.PUNCT;
                  case "M":
                    return U.MIXED;
                  case "D":
                    return U.DIGIT;
                  case "B":
                    return U.BINARY;
                  case "U":
                  default:
                    return U.UPPER;
                }
              }
            }, {
              key: "getCharacter",
              value: function getCharacter(t, e) {
                switch (t) {
                  case U.UPPER:
                    return tt.UPPER_TABLE[e];
                  case U.LOWER:
                    return tt.LOWER_TABLE[e];
                  case U.MIXED:
                    return tt.MIXED_TABLE[e];
                  case U.PUNCT:
                    return tt.PUNCT_TABLE[e];
                  case U.DIGIT:
                    return tt.DIGIT_TABLE[e];
                  default:
                    throw new J("Bad table");
                }
              }
            }, {
              key: "readCode",
              value: function readCode(t, e, r) {
                var n = 0;
                for (var _i24 = e; _i24 < e + r; _i24++) n <<= 1, t[_i24] && (n |= 1);
                return n;
              }
            }, {
              key: "readByte",
              value: function readByte(t, e) {
                var r = t.length - e;
                return r >= 8 ? tt.readCode(t, e, 8) : tt.readCode(t, e, r) << 8 - r;
              }
            }, {
              key: "convertBoolArrayToByteArray",
              value: function convertBoolArrayToByteArray(t) {
                var e = new Uint8Array((t.length + 7) / 8);
                for (var _r41 = 0; _r41 < e.length; _r41++) e[_r41] = tt.readByte(t, 8 * _r41);
                return e;
              }
            }]);
            return tt;
          }();
          tt.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], tt.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], tt.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], tt.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], tt.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
          var et = /*#__PURE__*/function () {
            function et() {
              _classCallCheck(this, et);
            }
            _createClass(et, null, [{
              key: "round",
              value: function round(t) {
                return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0;
              }
            }, {
              key: "distance",
              value: function distance(t, e, r, n) {
                var i = t - r,
                  o = e - n;
                return Math.sqrt(i * i + o * o);
              }
            }, {
              key: "sum",
              value: function sum(t) {
                var e = 0;
                for (var _r42 = 0, _n24 = t.length; _r42 !== _n24; _r42++) e += t[_r42];
                return e;
              }
            }]);
            return et;
          }();
          var rt = /*#__PURE__*/function () {
            function rt() {
              _classCallCheck(this, rt);
            }
            _createClass(rt, null, [{
              key: "floatToIntBits",
              value: function floatToIntBits(t) {
                return t;
              }
            }]);
            return rt;
          }();
          rt.MAX_VALUE = Number.MAX_SAFE_INTEGER;
          var nt = /*#__PURE__*/function () {
            function nt(t, e) {
              _classCallCheck(this, nt);
              this.x = t, this.y = e;
            }
            _createClass(nt, [{
              key: "getX",
              value: function getX() {
                return this.x;
              }
            }, {
              key: "getY",
              value: function getY() {
                return this.y;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (t instanceof nt) {
                  var _e34 = t;
                  return this.x === _e34.x && this.y === _e34.y;
                }
                return !1;
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return 31 * rt.floatToIntBits(this.x) + rt.floatToIntBits(this.y);
              }
            }, {
              key: "toString",
              value: function toString() {
                return "(" + this.x + "," + this.y + ")";
              }
            }], [{
              key: "orderBestPatterns",
              value: function orderBestPatterns(t) {
                var e = this.distance(t[0], t[1]),
                  r = this.distance(t[1], t[2]),
                  n = this.distance(t[0], t[2]);
                var i, o, s;
                if (r >= e && r >= n ? (o = t[0], i = t[1], s = t[2]) : n >= r && n >= e ? (o = t[1], i = t[0], s = t[2]) : (o = t[2], i = t[0], s = t[1]), this.crossProductZ(i, o, s) < 0) {
                  var _t43 = i;
                  i = s, s = _t43;
                }
                t[0] = i, t[1] = o, t[2] = s;
              }
            }, {
              key: "distance",
              value: function distance(t, e) {
                return et.distance(t.x, t.y, e.x, e.y);
              }
            }, {
              key: "crossProductZ",
              value: function crossProductZ(t, e, r) {
                var n = e.x,
                  i = e.y;
                return (r.x - n) * (t.y - i) - (r.y - i) * (t.x - n);
              }
            }]);
            return nt;
          }();
          var it = /*#__PURE__*/function () {
            function it(t, e) {
              _classCallCheck(this, it);
              this.bits = t, this.points = e;
            }
            _createClass(it, [{
              key: "getBits",
              value: function getBits() {
                return this.bits;
              }
            }, {
              key: "getPoints",
              value: function getPoints() {
                return this.points;
              }
            }]);
            return it;
          }();
          var ot = /*#__PURE__*/function (_it) {
            _inherits(ot, _it);
            var _super18 = _createSuper(ot);
            function ot(t, e, r, n, i) {
              var _this13;
              _classCallCheck(this, ot);
              _this13 = _super18.call(this, t, e), _this13.compact = r, _this13.nbDatablocks = n, _this13.nbLayers = i;
              return _this13;
            }
            _createClass(ot, [{
              key: "getNbLayers",
              value: function getNbLayers() {
                return this.nbLayers;
              }
            }, {
              key: "getNbDatablocks",
              value: function getNbDatablocks() {
                return this.nbDatablocks;
              }
            }, {
              key: "isCompact",
              value: function isCompact() {
                return this.compact;
              }
            }]);
            return ot;
          }(it);
          var st = /*#__PURE__*/function () {
            function st(t, e, r, n) {
              _classCallCheck(this, st);
              this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), null == e && (e = st.INIT_SIZE), null == r && (r = t.getWidth() / 2 | 0), null == n && (n = t.getHeight() / 2 | 0);
              var i = e / 2 | 0;
              if (this.leftInit = r - i, this.rightInit = r + i, this.upInit = n - i, this.downInit = n + i, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new N();
            }
            _createClass(st, [{
              key: "detect",
              value: function detect() {
                var t = this.leftInit,
                  e = this.rightInit,
                  r = this.upInit,
                  n = this.downInit,
                  i = !1,
                  o = !0,
                  s = !1,
                  a = !1,
                  l = !1,
                  c = !1,
                  h = !1;
                var u = this.width,
                  d = this.height;
                for (; o;) {
                  o = !1;
                  var _g = !0;
                  for (; (_g || !a) && e < u;) _g = this.containsBlackPoint(r, n, e, !1), _g ? (e++, o = !0, a = !0) : a || e++;
                  if (e >= u) {
                    i = !0;
                    break;
                  }
                  var _f = !0;
                  for (; (_f || !l) && n < d;) _f = this.containsBlackPoint(t, e, n, !0), _f ? (n++, o = !0, l = !0) : l || n++;
                  if (n >= d) {
                    i = !0;
                    break;
                  }
                  var _w = !0;
                  for (; (_w || !c) && t >= 0;) _w = this.containsBlackPoint(r, n, t, !1), _w ? (t--, o = !0, c = !0) : c || t--;
                  if (t < 0) {
                    i = !0;
                    break;
                  }
                  var _A = !0;
                  for (; (_A || !h) && r >= 0;) _A = this.containsBlackPoint(t, e, r, !0), _A ? (r--, o = !0, h = !0) : h || r--;
                  if (r < 0) {
                    i = !0;
                    break;
                  }
                  o && (s = !0);
                }
                if (!i && s) {
                  var _i25 = e - t;
                  var _o27 = null;
                  for (var _e35 = 1; null === _o27 && _e35 < _i25; _e35++) _o27 = this.getBlackPointOnSegment(t, n - _e35, t + _e35, n);
                  if (null == _o27) throw new N();
                  var _s15 = null;
                  for (var _e36 = 1; null === _s15 && _e36 < _i25; _e36++) _s15 = this.getBlackPointOnSegment(t, r + _e36, t + _e36, r);
                  if (null == _s15) throw new N();
                  var _a10 = null;
                  for (var _t44 = 1; null === _a10 && _t44 < _i25; _t44++) _a10 = this.getBlackPointOnSegment(e, r + _t44, e - _t44, r);
                  if (null == _a10) throw new N();
                  var _l7 = null;
                  for (var _t45 = 1; null === _l7 && _t45 < _i25; _t45++) _l7 = this.getBlackPointOnSegment(e, n - _t45, e - _t45, n);
                  if (null == _l7) throw new N();
                  return this.centerEdges(_l7, _o27, _a10, _s15);
                }
                throw new N();
              }
            }, {
              key: "getBlackPointOnSegment",
              value: function getBlackPointOnSegment(t, e, r, n) {
                var i = et.round(et.distance(t, e, r, n)),
                  o = (r - t) / i,
                  s = (n - e) / i,
                  a = this.image;
                for (var _r43 = 0; _r43 < i; _r43++) {
                  var _n25 = et.round(t + _r43 * o),
                    _i26 = et.round(e + _r43 * s);
                  if (a.get(_n25, _i26)) return new nt(_n25, _i26);
                }
                return null;
              }
            }, {
              key: "centerEdges",
              value: function centerEdges(t, e, r, n) {
                var i = t.getX(),
                  o = t.getY(),
                  s = e.getX(),
                  a = e.getY(),
                  l = r.getX(),
                  c = r.getY(),
                  h = n.getX(),
                  u = n.getY(),
                  d = st.CORR;
                return i < this.width / 2 ? [new nt(h - d, u + d), new nt(s + d, a + d), new nt(l - d, c - d), new nt(i + d, o - d)] : [new nt(h + d, u + d), new nt(s + d, a - d), new nt(l - d, c + d), new nt(i - d, o - d)];
              }
            }, {
              key: "containsBlackPoint",
              value: function containsBlackPoint(t, e, r, n) {
                var i = this.image;
                if (n) {
                  for (var _n26 = t; _n26 <= e; _n26++) if (i.get(_n26, r)) return !0;
                } else for (var _n27 = t; _n27 <= e; _n27++) if (i.get(r, _n27)) return !0;
                return !1;
              }
            }]);
            return st;
          }();
          st.INIT_SIZE = 10, st.CORR = 1;
          var at = /*#__PURE__*/function () {
            function at() {
              _classCallCheck(this, at);
            }
            _createClass(at, null, [{
              key: "checkAndNudgePoints",
              value: function checkAndNudgePoints(t, e) {
                var r = t.getWidth(),
                  n = t.getHeight();
                var i = !0;
                for (var _t46 = 0; _t46 < e.length && i; _t46 += 2) {
                  var _o28 = Math.floor(e[_t46]),
                    _s16 = Math.floor(e[_t46 + 1]);
                  if (_o28 < -1 || _o28 > r || _s16 < -1 || _s16 > n) throw new N();
                  i = !1, -1 === _o28 ? (e[_t46] = 0, i = !0) : _o28 === r && (e[_t46] = r - 1, i = !0), -1 === _s16 ? (e[_t46 + 1] = 0, i = !0) : _s16 === n && (e[_t46 + 1] = n - 1, i = !0);
                }
                i = !0;
                for (var _t47 = e.length - 2; _t47 >= 0 && i; _t47 -= 2) {
                  var _o29 = Math.floor(e[_t47]),
                    _s17 = Math.floor(e[_t47 + 1]);
                  if (_o29 < -1 || _o29 > r || _s17 < -1 || _s17 > n) throw new N();
                  i = !1, -1 === _o29 ? (e[_t47] = 0, i = !0) : _o29 === r && (e[_t47] = r - 1, i = !0), -1 === _s17 ? (e[_t47 + 1] = 0, i = !0) : _s17 === n && (e[_t47 + 1] = n - 1, i = !0);
                }
              }
            }]);
            return at;
          }();
          var lt = /*#__PURE__*/function () {
            function lt(t, e, r, n, i, o, s, a, l) {
              _classCallCheck(this, lt);
              this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = i, this.a32 = o, this.a13 = s, this.a23 = a, this.a33 = l;
            }
            _createClass(lt, [{
              key: "transformPoints",
              value: function transformPoints(t) {
                var e = t.length,
                  r = this.a11,
                  n = this.a12,
                  i = this.a13,
                  o = this.a21,
                  s = this.a22,
                  a = this.a23,
                  l = this.a31,
                  c = this.a32,
                  h = this.a33;
                for (var _u3 = 0; _u3 < e; _u3 += 2) {
                  var _e37 = t[_u3],
                    _d3 = t[_u3 + 1],
                    _g2 = i * _e37 + a * _d3 + h;
                  t[_u3] = (r * _e37 + o * _d3 + l) / _g2, t[_u3 + 1] = (n * _e37 + s * _d3 + c) / _g2;
                }
              }
            }, {
              key: "transformPointsWithValues",
              value: function transformPointsWithValues(t, e) {
                var r = this.a11,
                  n = this.a12,
                  i = this.a13,
                  o = this.a21,
                  s = this.a22,
                  a = this.a23,
                  l = this.a31,
                  c = this.a32,
                  h = this.a33,
                  u = t.length;
                for (var _d4 = 0; _d4 < u; _d4++) {
                  var _u4 = t[_d4],
                    _g3 = e[_d4],
                    _f2 = i * _u4 + a * _g3 + h;
                  t[_d4] = (r * _u4 + o * _g3 + l) / _f2, e[_d4] = (n * _u4 + s * _g3 + c) / _f2;
                }
              }
            }, {
              key: "buildAdjoint",
              value: function buildAdjoint() {
                return new lt(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
              }
            }, {
              key: "times",
              value: function times(t) {
                return new lt(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33);
              }
            }], [{
              key: "quadrilateralToQuadrilateral",
              value: function quadrilateralToQuadrilateral(t, e, r, n, i, o, s, a, l, c, h, u, d, g, f, w) {
                var A = lt.quadrilateralToSquare(t, e, r, n, i, o, s, a);
                return lt.squareToQuadrilateral(l, c, h, u, d, g, f, w).times(A);
              }
            }, {
              key: "squareToQuadrilateral",
              value: function squareToQuadrilateral(t, e, r, n, i, o, s, a) {
                var l = t - r + i - s,
                  c = e - n + o - a;
                if (0 === l && 0 === c) return new lt(r - t, i - r, t, n - e, o - n, e, 0, 0, 1);
                {
                  var _h5 = r - i,
                    _u5 = s - i,
                    _d5 = n - o,
                    _g4 = a - o,
                    _f3 = _h5 * _g4 - _u5 * _d5,
                    _w2 = (l * _g4 - _u5 * c) / _f3,
                    _A2 = (_h5 * c - l * _d5) / _f3;
                  return new lt(r - t + _w2 * r, s - t + _A2 * s, t, n - e + _w2 * n, a - e + _A2 * a, e, _w2, _A2, 1);
                }
              }
            }, {
              key: "quadrilateralToSquare",
              value: function quadrilateralToSquare(t, e, r, n, i, o, s, a) {
                return lt.squareToQuadrilateral(t, e, r, n, i, o, s, a).buildAdjoint();
              }
            }]);
            return lt;
          }();
          var ct = /*#__PURE__*/function (_at) {
            _inherits(ct, _at);
            var _super19 = _createSuper(ct);
            function ct() {
              _classCallCheck(this, ct);
              return _super19.apply(this, arguments);
            }
            _createClass(ct, [{
              key: "sampleGrid",
              value: function sampleGrid(t, e, r, n, i, o, s, a, l, c, h, u, d, g, f, w, A, m, E) {
                var C = lt.quadrilateralToQuadrilateral(n, i, o, s, a, l, c, h, u, d, g, f, w, A, m, E);
                return this.sampleGridWithTransform(t, e, r, C);
              }
            }, {
              key: "sampleGridWithTransform",
              value: function sampleGridWithTransform(t, e, r, n) {
                if (e <= 0 || r <= 0) throw new N();
                var i = new y(e, r),
                  o = new Float32Array(2 * e);
                for (var _e38 = 0; _e38 < r; _e38++) {
                  var _r44 = o.length,
                    _s18 = _e38 + .5;
                  for (var _t48 = 0; _t48 < _r44; _t48 += 2) o[_t48] = _t48 / 2 + .5, o[_t48 + 1] = _s18;
                  n.transformPoints(o), at.checkAndNudgePoints(t, o);
                  try {
                    for (var _n28 = 0; _n28 < _r44; _n28 += 2) t.get(Math.floor(o[_n28]), Math.floor(o[_n28 + 1])) && i.set(_n28 / 2, _e38);
                  } catch (t) {
                    throw new N();
                  }
                }
                return i;
              }
            }]);
            return ct;
          }(at);
          var ht = /*#__PURE__*/function () {
            function ht() {
              _classCallCheck(this, ht);
            }
            _createClass(ht, null, [{
              key: "setGridSampler",
              value: function setGridSampler(t) {
                ht.gridSampler = t;
              }
            }, {
              key: "getInstance",
              value: function getInstance() {
                return ht.gridSampler;
              }
            }]);
            return ht;
          }();
          ht.gridSampler = new ct();
          var ut = /*#__PURE__*/function () {
            function ut(t, e) {
              _classCallCheck(this, ut);
              this.x = t, this.y = e;
            }
            _createClass(ut, [{
              key: "toResultPoint",
              value: function toResultPoint() {
                return new nt(this.getX(), this.getY());
              }
            }, {
              key: "getX",
              value: function getX() {
                return this.x;
              }
            }, {
              key: "getY",
              value: function getY() {
                return this.y;
              }
            }]);
            return ut;
          }();
          var dt = /*#__PURE__*/function () {
            function dt(t) {
              _classCallCheck(this, dt);
              this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t;
            }
            _createClass(dt, [{
              key: "detect",
              value: function detect() {
                return this.detectMirror(!1);
              }
            }, {
              key: "detectMirror",
              value: function detectMirror(t) {
                var e = this.getMatrixCenter(),
                  r = this.getBullsEyeCorners(e);
                if (t) {
                  var _t49 = r[0];
                  r[0] = r[2], r[2] = _t49;
                }
                this.extractParameters(r);
                var n = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
                  i = this.getMatrixCornerPoints(r);
                return new ot(n, i, this.compact, this.nbDataBlocks, this.nbLayers);
              }
            }, {
              key: "extractParameters",
              value: function extractParameters(t) {
                if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new N();
                var e = 2 * this.nbCenterLayers,
                  r = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(t[3], t[0], e)]);
                this.shift = this.getRotation(r, e);
                var n = 0;
                for (var _t50 = 0; _t50 < 4; _t50++) {
                  var _e39 = r[(this.shift + _t50) % 4];
                  this.compact ? (n <<= 7, n += _e39 >> 1 & 127) : (n <<= 10, n += (_e39 >> 2 & 992) + (_e39 >> 1 & 31));
                }
                var i = this.getCorrectedParameterData(n, this.compact);
                this.compact ? (this.nbLayers = 1 + (i >> 6), this.nbDataBlocks = 1 + (63 & i)) : (this.nbLayers = 1 + (i >> 11), this.nbDataBlocks = 1 + (2047 & i));
              }
            }, {
              key: "getRotation",
              value: function getRotation(t, e) {
                var r = 0;
                t.forEach(function (t, n, i) {
                  r = (t >> e - 2 << 1) + (1 & t) + (r << 3);
                }), r = ((1 & r) << 11) + (r >> 1);
                for (var _t51 = 0; _t51 < 4; _t51++) if (w.bitCount(r ^ this.EXPECTED_CORNER_BITS[_t51]) <= 2) return _t51;
                throw new N();
              }
            }, {
              key: "getCorrectedParameterData",
              value: function getCorrectedParameterData(t, e) {
                var r, n;
                e ? (r = 7, n = 2) : (r = 10, n = 4);
                var i = r - n,
                  o = new Int32Array(r);
                for (var _e40 = r - 1; _e40 >= 0; --_e40) o[_e40] = 15 & t, t >>= 4;
                try {
                  new $(K.AZTEC_PARAM).decode(o, i);
                } catch (t) {
                  throw new N();
                }
                var s = 0;
                for (var _t52 = 0; _t52 < n; _t52++) s = (s << 4) + o[_t52];
                return s;
              }
            }, {
              key: "getBullsEyeCorners",
              value: function getBullsEyeCorners(t) {
                var e = t,
                  r = t,
                  n = t,
                  i = t,
                  o = !0;
                for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                  var _t53 = this.getFirstDifferent(e, o, 1, -1),
                    _s19 = this.getFirstDifferent(r, o, 1, 1),
                    _a11 = this.getFirstDifferent(n, o, -1, 1),
                    _l8 = this.getFirstDifferent(i, o, -1, -1);
                  if (this.nbCenterLayers > 2) {
                    var _r45 = this.distancePoint(_l8, _t53) * this.nbCenterLayers / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
                    if (_r45 < .75 || _r45 > 1.25 || !this.isWhiteOrBlackRectangle(_t53, _s19, _a11, _l8)) break;
                  }
                  e = _t53, r = _s19, n = _a11, i = _l8, o = !o;
                }
                if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new N();
                this.compact = 5 === this.nbCenterLayers;
                var s = new nt(e.getX() + .5, e.getY() - .5),
                  a = new nt(r.getX() + .5, r.getY() + .5),
                  l = new nt(n.getX() - .5, n.getY() + .5),
                  c = new nt(i.getX() - .5, i.getY() - .5);
                return this.expandSquare([s, a, l, c], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
              }
            }, {
              key: "getMatrixCenter",
              value: function getMatrixCenter() {
                var t, e, r, n;
                try {
                  var _i27 = new st(this.image).detect();
                  t = _i27[0], e = _i27[1], r = _i27[2], n = _i27[3];
                } catch (i) {
                  var _o30 = this.image.getWidth() / 2,
                    _s20 = this.image.getHeight() / 2;
                  t = this.getFirstDifferent(new ut(_o30 + 7, _s20 - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new ut(_o30 + 7, _s20 + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new ut(_o30 - 7, _s20 + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new ut(_o30 - 7, _s20 - 7), !1, -1, -1).toResultPoint();
                }
                var i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
                  o = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
                try {
                  var _s21 = new st(this.image, 15, i, o).detect();
                  t = _s21[0], e = _s21[1], r = _s21[2], n = _s21[3];
                } catch (s) {
                  t = this.getFirstDifferent(new ut(i + 7, o - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new ut(i + 7, o + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new ut(i - 7, o + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new ut(i - 7, o - 7), !1, -1, -1).toResultPoint();
                }
                return i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4), o = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4), new ut(i, o);
              }
            }, {
              key: "getMatrixCornerPoints",
              value: function getMatrixCornerPoints(t) {
                return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension());
              }
            }, {
              key: "sampleGrid",
              value: function sampleGrid(t, e, r, n, i) {
                var o = ht.getInstance(),
                  s = this.getDimension(),
                  a = s / 2 - this.nbCenterLayers,
                  l = s / 2 + this.nbCenterLayers;
                return o.sampleGrid(t, s, s, a, a, l, a, l, l, a, l, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), i.getX(), i.getY());
              }
            }, {
              key: "sampleLine",
              value: function sampleLine(t, e, r) {
                var n = 0,
                  i = this.distanceResultPoint(t, e),
                  o = i / r,
                  s = t.getX(),
                  a = t.getY(),
                  l = o * (e.getX() - t.getX()) / i,
                  c = o * (e.getY() - t.getY()) / i;
                for (var _t54 = 0; _t54 < r; _t54++) this.image.get(et.round(s + _t54 * l), et.round(a + _t54 * c)) && (n |= 1 << r - _t54 - 1);
                return n;
              }
            }, {
              key: "isWhiteOrBlackRectangle",
              value: function isWhiteOrBlackRectangle(t, e, r, n) {
                t = new ut(t.getX() - 3, t.getY() + 3), e = new ut(e.getX() - 3, e.getY() - 3), r = new ut(r.getX() + 3, r.getY() - 3), n = new ut(n.getX() + 3, n.getY() + 3);
                var i = this.getColor(n, t);
                if (0 === i) return !1;
                var o = this.getColor(t, e);
                return o === i && (o = this.getColor(e, r), o === i && (o = this.getColor(r, n), o === i));
              }
            }, {
              key: "getColor",
              value: function getColor(t, e) {
                var r = this.distancePoint(t, e),
                  n = (e.getX() - t.getX()) / r,
                  i = (e.getY() - t.getY()) / r,
                  o = 0,
                  s = t.getX(),
                  a = t.getY(),
                  l = this.image.get(t.getX(), t.getY()),
                  c = Math.ceil(r);
                for (var _t55 = 0; _t55 < c; _t55++) s += n, a += i, this.image.get(et.round(s), et.round(a)) !== l && o++;
                var h = o / r;
                return h > .1 && h < .9 ? 0 : h <= .1 === l ? 1 : -1;
              }
            }, {
              key: "getFirstDifferent",
              value: function getFirstDifferent(t, e, r, n) {
                var i = t.getX() + r,
                  o = t.getY() + n;
                for (; this.isValid(i, o) && this.image.get(i, o) === e;) i += r, o += n;
                for (i -= r, o -= n; this.isValid(i, o) && this.image.get(i, o) === e;) i += r;
                for (i -= r; this.isValid(i, o) && this.image.get(i, o) === e;) o += n;
                return o -= n, new ut(i, o);
              }
            }, {
              key: "expandSquare",
              value: function expandSquare(t, e, r) {
                var n = r / (2 * e),
                  i = t[0].getX() - t[2].getX(),
                  o = t[0].getY() - t[2].getY(),
                  s = (t[0].getX() + t[2].getX()) / 2,
                  a = (t[0].getY() + t[2].getY()) / 2,
                  l = new nt(s + n * i, a + n * o),
                  c = new nt(s - n * i, a - n * o);
                return i = t[1].getX() - t[3].getX(), o = t[1].getY() - t[3].getY(), s = (t[1].getX() + t[3].getX()) / 2, a = (t[1].getY() + t[3].getY()) / 2, [l, new nt(s + n * i, a + n * o), c, new nt(s - n * i, a - n * o)];
              }
            }, {
              key: "isValid",
              value: function isValid(t, e) {
                return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight();
              }
            }, {
              key: "isValidPoint",
              value: function isValidPoint(t) {
                var e = et.round(t.getX()),
                  r = et.round(t.getY());
                return this.isValid(e, r);
              }
            }, {
              key: "distancePoint",
              value: function distancePoint(t, e) {
                return et.distance(t.getX(), t.getY(), e.getX(), e.getY());
              }
            }, {
              key: "distanceResultPoint",
              value: function distanceResultPoint(t, e) {
                return et.distance(t.getX(), t.getY(), e.getX(), e.getY());
              }
            }, {
              key: "getDimension",
              value: function getDimension() {
                return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (w.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
              }
            }]);
            return dt;
          }();
          var gt = /*#__PURE__*/function () {
            function gt() {
              _classCallCheck(this, gt);
            }
            _createClass(gt, [{
              key: "decode",
              value: function decode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r = null,
                  n = new dt(t.getBlackMatrix()),
                  i = null,
                  o = null;
                try {
                  var _t56 = n.detectMirror(!1);
                  i = _t56.getPoints(), this.reportFoundResultPoints(e, i), o = new tt().decode(_t56);
                } catch (t) {
                  r = t;
                }
                if (null == o) try {
                  var _t57 = n.detectMirror(!0);
                  i = _t57.getPoints(), this.reportFoundResultPoints(e, i), o = new tt().decode(_t57);
                } catch (t) {
                  if (null != r) throw r;
                  throw t;
                }
                var s = new F(o.getText(), o.getRawBytes(), o.getNumBits(), i, k.AZTEC, u.currentTimeMillis()),
                  a = o.getByteSegments();
                null != a && s.putMetadata(X.BYTE_SEGMENTS, a);
                var l = o.getECLevel();
                return null != l && s.putMetadata(X.ERROR_CORRECTION_LEVEL, l), s;
              }
            }, {
              key: "reportFoundResultPoints",
              value: function reportFoundResultPoints(t, e) {
                if (null != t) {
                  var _r46 = t.get(E.NEED_RESULT_POINT_CALLBACK);
                  null != _r46 && e.forEach(function (t, e, n) {
                    _r46.foundPossibleResultPoint(t);
                  });
                }
              }
            }, {
              key: "reset",
              value: function reset() {}
            }]);
            return gt;
          }();
          var ft = /*#__PURE__*/function () {
            function ft() {
              _classCallCheck(this, ft);
            }
            _createClass(ft, [{
              key: "decode",
              value: function decode(t, e) {
                try {
                  return this.doDecode(t, e);
                } catch (r) {
                  if (e && !0 === e.get(E.TRY_HARDER) && t.isRotateSupported()) {
                    var _r47 = t.rotateCounterClockwise(),
                      _n29 = this.doDecode(_r47, e),
                      _i28 = _n29.getResultMetadata();
                    var _o31 = 270;
                    null !== _i28 && !0 === _i28.get(X.ORIENTATION) && (_o31 += _i28.get(X.ORIENTATION) % 360), _n29.putMetadata(X.ORIENTATION, _o31);
                    var _s22 = _n29.getResultPoints();
                    if (null !== _s22) {
                      var _t58 = _r47.getHeight();
                      for (var _e41 = 0; _e41 < _s22.length; _e41++) _s22[_e41] = new nt(_t58 - _s22[_e41].getY() - 1, _s22[_e41].getX());
                    }
                    return _n29;
                  }
                  throw new N();
                }
              }
            }, {
              key: "reset",
              value: function reset() {}
            }, {
              key: "doDecode",
              value: function doDecode(t, e) {
                var _this14 = this;
                var r = t.getWidth(),
                  n = t.getHeight();
                var i = new A(r);
                var o = e && !0 === e.get(E.TRY_HARDER),
                  s = Math.max(1, n >> (o ? 8 : 5));
                var a;
                a = o ? n : 15;
                var l = Math.trunc(n / 2);
                for (var _o32 = 0; _o32 < a; _o32++) {
                  var _a12 = Math.trunc((_o32 + 1) / 2),
                    _c5 = l + s * (0 == (1 & _o32) ? _a12 : -_a12);
                  if (_c5 < 0 || _c5 >= n) break;
                  try {
                    i = t.getBlackRow(_c5, i);
                  } catch (t) {
                    continue;
                  }
                  var _loop = function _loop() {
                    if (1 === _t59 && (i.reverse(), e && !0 === e.get(E.NEED_RESULT_POINT_CALLBACK))) {
                      var _t60 = new Map();
                      e.forEach(function (e, r) {
                        return _t60.set(r, e);
                      }), _t60["delete"](E.NEED_RESULT_POINT_CALLBACK), e = _t60;
                    }
                    try {
                      var _n30 = _this14.decodeRow(_c5, i, e);
                      if (1 === _t59) {
                        _n30.putMetadata(X.ORIENTATION, 180);
                        var _t61 = _n30.getResultPoints();
                        null !== _t61 && (_t61[0] = new nt(r - _t61[0].getX() - 1, _t61[0].getY()), _t61[1] = new nt(r - _t61[1].getX() - 1, _t61[1].getY()));
                      }
                      return {
                        v: _n30
                      };
                    } catch (t) {}
                  };
                  for (var _t59 = 0; _t59 < 2; _t59++) {
                    var _ret = _loop();
                    if (_typeof(_ret) === "object") return _ret.v;
                  }
                }
                throw new N();
              }
            }], [{
              key: "recordPattern",
              value: function recordPattern(t, e, r) {
                var n = r.length;
                for (var _t62 = 0; _t62 < n; _t62++) r[_t62] = 0;
                var i = t.getSize();
                if (e >= i) throw new N();
                var o = !t.get(e),
                  s = 0,
                  a = e;
                for (; a < i;) {
                  if (t.get(a) !== o) r[s]++;else {
                    if (++s === n) break;
                    r[s] = 1, o = !o;
                  }
                  a++;
                }
                if (s !== n && (s !== n - 1 || a !== i)) throw new N();
              }
            }, {
              key: "recordPatternInReverse",
              value: function recordPatternInReverse(t, e, r) {
                var n = r.length,
                  i = t.get(e);
                for (; e > 0 && n >= 0;) t.get(--e) !== i && (n--, i = !i);
                if (n >= 0) throw new N();
                ft.recordPattern(t, e + 1, r);
              }
            }, {
              key: "patternMatchVariance",
              value: function patternMatchVariance(t, e, r) {
                var n = t.length;
                var i = 0,
                  o = 0;
                for (var _r48 = 0; _r48 < n; _r48++) i += t[_r48], o += e[_r48];
                if (i < o) return Number.POSITIVE_INFINITY;
                var s = i / o;
                r *= s;
                var a = 0;
                for (var _i29 = 0; _i29 < n; _i29++) {
                  var _n31 = t[_i29],
                    _o33 = e[_i29] * s,
                    _l9 = _n31 > _o33 ? _n31 - _o33 : _o33 - _n31;
                  if (_l9 > r) return Number.POSITIVE_INFINITY;
                  a += _l9;
                }
                return a / i;
              }
            }]);
            return ft;
          }();
          var wt = /*#__PURE__*/function (_ft) {
            _inherits(wt, _ft);
            var _super20 = _createSuper(wt);
            function wt() {
              _classCallCheck(this, wt);
              return _super20.apply(this, arguments);
            }
            _createClass(wt, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = r && !0 === r.get(E.ASSUME_GS1),
                  i = wt.findStartPattern(e),
                  o = i[2];
                var s = 0;
                var a = new Uint8Array(20);
                var l;
                switch (a[s++] = o, o) {
                  case wt.CODE_START_A:
                    l = wt.CODE_CODE_A;
                    break;
                  case wt.CODE_START_B:
                    l = wt.CODE_CODE_B;
                    break;
                  case wt.CODE_START_C:
                    l = wt.CODE_CODE_C;
                    break;
                  default:
                    throw new C();
                }
                var h = !1,
                  u = !1,
                  d = "",
                  g = i[0],
                  f = i[1];
                var w = Int32Array.from([0, 0, 0, 0, 0, 0]);
                var A = 0,
                  m = 0,
                  I = o,
                  p = 0,
                  S = !0,
                  _ = !1,
                  T = !1;
                for (; !h;) {
                  var _t63 = u;
                  switch (u = !1, A = m, m = wt.decodeCode(e, w, f), a[s++] = m, m !== wt.CODE_STOP && (S = !0), m !== wt.CODE_STOP && (p++, I += p * m), g = f, f += w.reduce(function (t, e) {
                    return t + e;
                  }, 0), m) {
                    case wt.CODE_START_A:
                    case wt.CODE_START_B:
                    case wt.CODE_START_C:
                      throw new C();
                  }
                  switch (l) {
                    case wt.CODE_CODE_A:
                      if (m < 64) d += T === _ ? String.fromCharCode(" ".charCodeAt(0) + m) : String.fromCharCode(" ".charCodeAt(0) + m + 128), T = !1;else if (m < 96) d += T === _ ? String.fromCharCode(m - 64) : String.fromCharCode(m + 64), T = !1;else switch (m !== wt.CODE_STOP && (S = !1), m) {
                        case wt.CODE_FNC_1:
                          n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                          break;
                        case wt.CODE_FNC_2:
                        case wt.CODE_FNC_3:
                          break;
                        case wt.CODE_FNC_4_A:
                          !_ && T ? (_ = !0, T = !1) : _ && T ? (_ = !1, T = !1) : T = !0;
                          break;
                        case wt.CODE_SHIFT:
                          u = !0, l = wt.CODE_CODE_B;
                          break;
                        case wt.CODE_CODE_B:
                          l = wt.CODE_CODE_B;
                          break;
                        case wt.CODE_CODE_C:
                          l = wt.CODE_CODE_C;
                          break;
                        case wt.CODE_STOP:
                          h = !0;
                      }
                      break;
                    case wt.CODE_CODE_B:
                      if (m < 96) d += T === _ ? String.fromCharCode(" ".charCodeAt(0) + m) : String.fromCharCode(" ".charCodeAt(0) + m + 128), T = !1;else switch (m !== wt.CODE_STOP && (S = !1), m) {
                        case wt.CODE_FNC_1:
                          n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                          break;
                        case wt.CODE_FNC_2:
                        case wt.CODE_FNC_3:
                          break;
                        case wt.CODE_FNC_4_B:
                          !_ && T ? (_ = !0, T = !1) : _ && T ? (_ = !1, T = !1) : T = !0;
                          break;
                        case wt.CODE_SHIFT:
                          u = !0, l = wt.CODE_CODE_A;
                          break;
                        case wt.CODE_CODE_A:
                          l = wt.CODE_CODE_A;
                          break;
                        case wt.CODE_CODE_C:
                          l = wt.CODE_CODE_C;
                          break;
                        case wt.CODE_STOP:
                          h = !0;
                      }
                      break;
                    case wt.CODE_CODE_C:
                      if (m < 100) m < 10 && (d += "0"), d += m;else switch (m !== wt.CODE_STOP && (S = !1), m) {
                        case wt.CODE_FNC_1:
                          n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                          break;
                        case wt.CODE_CODE_A:
                          l = wt.CODE_CODE_A;
                          break;
                        case wt.CODE_CODE_B:
                          l = wt.CODE_CODE_B;
                          break;
                        case wt.CODE_STOP:
                          h = !0;
                      }
                  }
                  _t63 && (l = l === wt.CODE_CODE_A ? wt.CODE_CODE_B : wt.CODE_CODE_A);
                }
                var y = f - g;
                if (f = e.getNextUnset(f), !e.isRange(f, Math.min(e.getSize(), f + (f - g) / 2), !1)) throw new N();
                if (I -= p * A, I % 103 !== A) throw new c();
                var M = d.length;
                if (0 === M) throw new N();
                M > 0 && S && (d = l === wt.CODE_CODE_C ? d.substring(0, M - 2) : d.substring(0, M - 1));
                var D = (i[1] + i[0]) / 2,
                  R = g + y / 2,
                  O = a.length,
                  b = new Uint8Array(O);
                for (var _t64 = 0; _t64 < O; _t64++) b[_t64] = a[_t64];
                var L = [new nt(D, t), new nt(R, t)];
                return new F(d, b, 0, L, k.CODE_128, new Date().getTime());
              }
            }], [{
              key: "findStartPattern",
              value: function findStartPattern(t) {
                var e = t.getSize(),
                  r = t.getNextSet(0);
                var n = 0,
                  i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                  o = r,
                  s = !1;
                for (var _a13 = r; _a13 < e; _a13++) if (t.get(_a13) !== s) i[n]++;else {
                  if (5 === n) {
                    var _e42 = wt.MAX_AVG_VARIANCE,
                      _r49 = -1;
                    for (var _t65 = wt.CODE_START_A; _t65 <= wt.CODE_START_C; _t65++) {
                      var _n32 = ft.patternMatchVariance(i, wt.CODE_PATTERNS[_t65], wt.MAX_INDIVIDUAL_VARIANCE);
                      _n32 < _e42 && (_e42 = _n32, _r49 = _t65);
                    }
                    if (_r49 >= 0 && t.isRange(Math.max(0, o - (_a13 - o) / 2), o, !1)) return Int32Array.from([o, _a13, _r49]);
                    o += i[0] + i[1], i = i.slice(2, i.length - 1), i[n - 1] = 0, i[n] = 0, n--;
                  } else n++;
                  i[n] = 1, s = !s;
                }
                throw new N();
              }
            }, {
              key: "decodeCode",
              value: function decodeCode(t, e, r) {
                ft.recordPattern(t, r, e);
                var n = wt.MAX_AVG_VARIANCE,
                  i = -1;
                for (var _t66 = 0; _t66 < wt.CODE_PATTERNS.length; _t66++) {
                  var _r50 = wt.CODE_PATTERNS[_t66],
                    _o34 = this.patternMatchVariance(e, _r50, wt.MAX_INDIVIDUAL_VARIANCE);
                  _o34 < n && (n = _o34, i = _t66);
                }
                if (i >= 0) return i;
                throw new N();
              }
            }]);
            return wt;
          }(ft);
          wt.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], wt.MAX_AVG_VARIANCE = .25, wt.MAX_INDIVIDUAL_VARIANCE = .7, wt.CODE_SHIFT = 98, wt.CODE_CODE_C = 99, wt.CODE_CODE_B = 100, wt.CODE_CODE_A = 101, wt.CODE_FNC_1 = 102, wt.CODE_FNC_2 = 97, wt.CODE_FNC_3 = 96, wt.CODE_FNC_4_A = 101, wt.CODE_FNC_4_B = 100, wt.CODE_START_A = 103, wt.CODE_START_B = 104, wt.CODE_START_C = 105, wt.CODE_STOP = 106;
          var At = /*#__PURE__*/function (_ft2) {
            _inherits(At, _ft2);
            var _super21 = _createSuper(At);
            function At() {
              var _this15;
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              _classCallCheck(this, At);
              _this15 = _super21.call(this), _this15.usingCheckDigit = t, _this15.extendedMode = e, _this15.decodeRowResult = "", _this15.counters = new Int32Array(9);
              return _this15;
            }
            _createClass(At, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = this.counters;
                n.fill(0), this.decodeRowResult = "";
                var i,
                  o,
                  s = At.findAsteriskPattern(e, n),
                  a = e.getNextSet(s[1]),
                  l = e.getSize();
                do {
                  At.recordPattern(e, a, n);
                  var _t67 = At.toNarrowWidePattern(n);
                  if (_t67 < 0) throw new N();
                  i = At.patternToChar(_t67), this.decodeRowResult += i, o = a;
                  var _iterator3 = _createForOfIteratorHelper(n),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _t68 = _step3.value;
                      a += _t68;
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  a = e.getNextSet(a);
                } while ("*" !== i);
                this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                var h,
                  u = 0;
                var _iterator4 = _createForOfIteratorHelper(n),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _t70 = _step4.value;
                    u += _t70;
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                if (a !== l && 2 * (a - o - u) < u) throw new N();
                if (this.usingCheckDigit) {
                  var _t69 = this.decodeRowResult.length - 1,
                    _e43 = 0;
                  for (var _r51 = 0; _r51 < _t69; _r51++) _e43 += At.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(_r51));
                  if (this.decodeRowResult.charAt(_t69) !== At.ALPHABET_STRING.charAt(_e43 % 43)) throw new c();
                  this.decodeRowResult = this.decodeRowResult.substring(0, _t69);
                }
                if (0 === this.decodeRowResult.length) throw new N();
                h = this.extendedMode ? At.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                var d = (s[1] + s[0]) / 2,
                  g = o + u / 2;
                return new F(h, null, 0, [new nt(d, t), new nt(g, t)], k.CODE_39, new Date().getTime());
              }
            }], [{
              key: "findAsteriskPattern",
              value: function findAsteriskPattern(t, e) {
                var r = t.getSize(),
                  n = t.getNextSet(0),
                  i = 0,
                  o = n,
                  s = !1,
                  a = e.length;
                for (var _l10 = n; _l10 < r; _l10++) if (t.get(_l10) !== s) e[i]++;else {
                  if (i === a - 1) {
                    if (this.toNarrowWidePattern(e) === At.ASTERISK_ENCODING && t.isRange(Math.max(0, o - Math.floor((_l10 - o) / 2)), o, !1)) return [o, _l10];
                    o += e[0] + e[1], e.copyWithin(0, 2, 2 + i - 1), e[i - 1] = 0, e[i] = 0, i--;
                  } else i++;
                  e[i] = 1, s = !s;
                }
                throw new N();
              }
            }, {
              key: "toNarrowWidePattern",
              value: function toNarrowWidePattern(t) {
                var e,
                  r = t.length,
                  n = 0;
                do {
                  var _i30 = 2147483647;
                  var _iterator5 = _createForOfIteratorHelper(t),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _e44 = _step5.value;
                      _e44 < _i30 && _e44 > n && (_i30 = _e44);
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  n = _i30, e = 0;
                  var _o35 = 0,
                    _s23 = 0;
                  for (var _i31 = 0; _i31 < r; _i31++) {
                    var _a14 = t[_i31];
                    _a14 > n && (_s23 |= 1 << r - 1 - _i31, e++, _o35 += _a14);
                  }
                  if (3 === e) {
                    for (var _i32 = 0; _i32 < r && e > 0; _i32++) {
                      var _r52 = t[_i32];
                      if (_r52 > n && (e--, 2 * _r52 >= _o35)) return -1;
                    }
                    return _s23;
                  }
                } while (e > 3);
                return -1;
              }
            }, {
              key: "patternToChar",
              value: function patternToChar(t) {
                for (var _e45 = 0; _e45 < At.CHARACTER_ENCODINGS.length; _e45++) if (At.CHARACTER_ENCODINGS[_e45] === t) return At.ALPHABET_STRING.charAt(_e45);
                if (t === At.ASTERISK_ENCODING) return "*";
                throw new N();
              }
            }, {
              key: "decodeExtended",
              value: function decodeExtended(t) {
                var e = t.length,
                  r = "";
                for (var _n33 = 0; _n33 < e; _n33++) {
                  var _e46 = t.charAt(_n33);
                  if ("+" === _e46 || "$" === _e46 || "%" === _e46 || "/" === _e46) {
                    var _i33 = t.charAt(_n33 + 1),
                      _o36 = "\0";
                    switch (_e46) {
                      case "+":
                        if (!(_i33 >= "A" && _i33 <= "Z")) throw new C();
                        _o36 = String.fromCharCode(_i33.charCodeAt(0) + 32);
                        break;
                      case "$":
                        if (!(_i33 >= "A" && _i33 <= "Z")) throw new C();
                        _o36 = String.fromCharCode(_i33.charCodeAt(0) - 64);
                        break;
                      case "%":
                        if (_i33 >= "A" && _i33 <= "E") _o36 = String.fromCharCode(_i33.charCodeAt(0) - 38);else if (_i33 >= "F" && _i33 <= "J") _o36 = String.fromCharCode(_i33.charCodeAt(0) - 11);else if (_i33 >= "K" && _i33 <= "O") _o36 = String.fromCharCode(_i33.charCodeAt(0) + 16);else if (_i33 >= "P" && _i33 <= "T") _o36 = String.fromCharCode(_i33.charCodeAt(0) + 43);else if ("U" === _i33) _o36 = "\0";else if ("V" === _i33) _o36 = "@";else if ("W" === _i33) _o36 = "`";else {
                          if ("X" !== _i33 && "Y" !== _i33 && "Z" !== _i33) throw new C();
                          _o36 = "";
                        }
                        break;
                      case "/":
                        if (_i33 >= "A" && _i33 <= "O") _o36 = String.fromCharCode(_i33.charCodeAt(0) - 32);else {
                          if ("Z" !== _i33) throw new C();
                          _o36 = ":";
                        }
                    }
                    r += _o36, _n33++;
                  } else r += _e46;
                }
                return r;
              }
            }]);
            return At;
          }(ft);
          At.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", At.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], At.ASTERISK_ENCODING = 148;
          var mt = /*#__PURE__*/function (_ft3) {
            _inherits(mt, _ft3);
            var _super22 = _createSuper(mt);
            function mt() {
              var _this16;
              _classCallCheck(this, mt);
              _this16 = _super22.apply(this, arguments), _this16.narrowLineWidth = -1;
              return _this16;
            }
            _createClass(mt, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = this.decodeStart(e),
                  i = this.decodeEnd(e),
                  o = new T();
                mt.decodeMiddle(e, n[1], i[0], o);
                var s = o.toString(),
                  a = null;
                null != r && (a = r.get(E.ALLOWED_LENGTHS)), null == a && (a = mt.DEFAULT_ALLOWED_LENGTHS);
                var l = s.length,
                  c = !1,
                  h = 0;
                var _iterator6 = _createForOfIteratorHelper(a),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _t71 = _step6.value;
                    if (l === _t71) {
                      c = !0;
                      break;
                    }
                    _t71 > h && (h = _t71);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                if (!c && l > h && (c = !0), !c) throw new C();
                var u = [new nt(n[1], t), new nt(i[0], t)];
                return new F(s, null, 0, u, k.ITF, new Date().getTime());
              }
            }, {
              key: "decodeStart",
              value: function decodeStart(t) {
                var e = mt.skipWhiteSpace(t),
                  r = mt.findGuardPattern(t, e, mt.START_PATTERN);
                return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(t, r[0]), r;
              }
            }, {
              key: "validateQuietZone",
              value: function validateQuietZone(t, e) {
                var r = 10 * this.narrowLineWidth;
                r = r < e ? r : e;
                for (var _n34 = e - 1; r > 0 && _n34 >= 0 && !t.get(_n34); _n34--) r--;
                if (0 !== r) throw new N();
              }
            }, {
              key: "decodeEnd",
              value: function decodeEnd(t) {
                t.reverse();
                try {
                  var _e47,
                    _r53 = mt.skipWhiteSpace(t);
                  try {
                    _e47 = mt.findGuardPattern(t, _r53, mt.END_PATTERN_REVERSED[0]);
                  } catch (n) {
                    n instanceof N && (_e47 = mt.findGuardPattern(t, _r53, mt.END_PATTERN_REVERSED[1]));
                  }
                  this.validateQuietZone(t, _e47[0]);
                  var _n35 = _e47[0];
                  return _e47[0] = t.getSize() - _e47[1], _e47[1] = t.getSize() - _n35, _e47;
                } finally {
                  t.reverse();
                }
              }
            }], [{
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r, n) {
                var i = new Int32Array(10),
                  o = new Int32Array(5),
                  s = new Int32Array(5);
                for (i.fill(0), o.fill(0), s.fill(0); e < r;) {
                  ft.recordPattern(t, e, i);
                  for (var _t72 = 0; _t72 < 5; _t72++) {
                    var _e48 = 2 * _t72;
                    o[_t72] = i[_e48], s[_t72] = i[_e48 + 1];
                  }
                  var _r54 = mt.decodeDigit(o);
                  n.append(_r54.toString()), _r54 = this.decodeDigit(s), n.append(_r54.toString()), i.forEach(function (t) {
                    e += t;
                  });
                }
              }
            }, {
              key: "skipWhiteSpace",
              value: function skipWhiteSpace(t) {
                var e = t.getSize(),
                  r = t.getNextSet(0);
                if (r === e) throw new N();
                return r;
              }
            }, {
              key: "findGuardPattern",
              value: function findGuardPattern(t, e, r) {
                var n = r.length,
                  i = new Int32Array(n),
                  o = t.getSize(),
                  s = !1,
                  a = 0,
                  l = e;
                i.fill(0);
                for (var _c6 = e; _c6 < o; _c6++) if (t.get(_c6) !== s) i[a]++;else {
                  if (a === n - 1) {
                    if (ft.patternMatchVariance(i, r, mt.MAX_INDIVIDUAL_VARIANCE) < mt.MAX_AVG_VARIANCE) return [l, _c6];
                    l += i[0] + i[1], u.arraycopy(i, 2, i, 0, a - 1), i[a - 1] = 0, i[a] = 0, a--;
                  } else a++;
                  i[a] = 1, s = !s;
                }
                throw new N();
              }
            }, {
              key: "decodeDigit",
              value: function decodeDigit(t) {
                var e = mt.MAX_AVG_VARIANCE,
                  r = -1,
                  n = mt.PATTERNS.length;
                for (var _i34 = 0; _i34 < n; _i34++) {
                  var _n36 = mt.PATTERNS[_i34],
                    _o37 = ft.patternMatchVariance(t, _n36, mt.MAX_INDIVIDUAL_VARIANCE);
                  _o37 < e ? (e = _o37, r = _i34) : _o37 === e && (r = -1);
                }
                if (r >= 0) return r % 10;
                throw new N();
              }
            }]);
            return mt;
          }(ft);
          mt.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], mt.MAX_AVG_VARIANCE = .38, mt.MAX_INDIVIDUAL_VARIANCE = .5, mt.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], mt.START_PATTERN = Int32Array.from([1, 1, 1, 1]), mt.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])];
          var Et = /*#__PURE__*/function (_ft4) {
            _inherits(Et, _ft4);
            var _super23 = _createSuper(Et);
            function Et() {
              var _this17;
              _classCallCheck(this, Et);
              _this17 = _super23.apply(this, arguments), _this17.decodeRowStringBuffer = "";
              return _this17;
            }
            _createClass(Et, null, [{
              key: "findStartGuardPattern",
              value: function findStartGuardPattern(t) {
                var e,
                  r = !1,
                  n = 0,
                  i = Int32Array.from([0, 0, 0]);
                for (; !r;) {
                  i = Int32Array.from([0, 0, 0]), e = Et.findGuardPattern(t, n, !1, this.START_END_PATTERN, i);
                  var _o38 = e[0];
                  n = e[1];
                  var _s24 = _o38 - (n - _o38);
                  _s24 >= 0 && (r = t.isRange(_s24, _o38, !1));
                }
                return e;
              }
            }, {
              key: "checkChecksum",
              value: function checkChecksum(t) {
                return Et.checkStandardUPCEANChecksum(t);
              }
            }, {
              key: "checkStandardUPCEANChecksum",
              value: function checkStandardUPCEANChecksum(t) {
                var e = t.length;
                if (0 === e) return !1;
                var r = parseInt(t.charAt(e - 1), 10);
                return Et.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
              }
            }, {
              key: "getStandardUPCEANChecksum",
              value: function getStandardUPCEANChecksum(t) {
                var e = t.length,
                  r = 0;
                for (var _n37 = e - 1; _n37 >= 0; _n37 -= 2) {
                  var _e49 = t.charAt(_n37).charCodeAt(0) - "0".charCodeAt(0);
                  if (_e49 < 0 || _e49 > 9) throw new C();
                  r += _e49;
                }
                r *= 3;
                for (var _n38 = e - 2; _n38 >= 0; _n38 -= 2) {
                  var _e50 = t.charAt(_n38).charCodeAt(0) - "0".charCodeAt(0);
                  if (_e50 < 0 || _e50 > 9) throw new C();
                  r += _e50;
                }
                return (1e3 - r) % 10;
              }
            }, {
              key: "decodeEnd",
              value: function decodeEnd(t, e) {
                return Et.findGuardPattern(t, e, !1, Et.START_END_PATTERN, new Int32Array(Et.START_END_PATTERN.length).fill(0));
              }
            }, {
              key: "findGuardPatternWithoutCounters",
              value: function findGuardPatternWithoutCounters(t, e, r, n) {
                return this.findGuardPattern(t, e, r, n, new Int32Array(n.length));
              }
            }, {
              key: "findGuardPattern",
              value: function findGuardPattern(t, e, r, n, i) {
                var o = t.getSize(),
                  s = 0,
                  a = e = r ? t.getNextUnset(e) : t.getNextSet(e),
                  l = n.length,
                  c = r;
                for (var _r55 = e; _r55 < o; _r55++) if (t.get(_r55) !== c) i[s]++;else {
                  if (s === l - 1) {
                    if (ft.patternMatchVariance(i, n, Et.MAX_INDIVIDUAL_VARIANCE) < Et.MAX_AVG_VARIANCE) return Int32Array.from([a, _r55]);
                    a += i[0] + i[1];
                    var _t73 = i.slice(2, i.length - 1);
                    for (var _e51 = 0; _e51 < s - 1; _e51++) i[_e51] = _t73[_e51];
                    i[s - 1] = 0, i[s] = 0, s--;
                  } else s++;
                  i[s] = 1, c = !c;
                }
                throw new N();
              }
            }, {
              key: "decodeDigit",
              value: function decodeDigit(t, e, r, n) {
                this.recordPattern(t, r, e);
                var i = this.MAX_AVG_VARIANCE,
                  o = -1,
                  s = n.length;
                for (var _t74 = 0; _t74 < s; _t74++) {
                  var _r56 = n[_t74],
                    _s25 = ft.patternMatchVariance(e, _r56, Et.MAX_INDIVIDUAL_VARIANCE);
                  _s25 < i && (i = _s25, o = _t74);
                }
                if (o >= 0) return o;
                throw new N();
              }
            }]);
            return Et;
          }(ft);
          Et.MAX_AVG_VARIANCE = .48, Et.MAX_INDIVIDUAL_VARIANCE = .7, Et.START_END_PATTERN = Int32Array.from([1, 1, 1]), Et.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), Et.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Et.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
          var Ct = /*#__PURE__*/function () {
            function Ct() {
              _classCallCheck(this, Ct);
              this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
            }
            _createClass(Ct, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = this.decodeRowStringBuffer,
                  i = this.decodeMiddle(e, r, n),
                  o = n.toString(),
                  s = Ct.parseExtensionString(o),
                  a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                  l = new F(o, null, 0, a, k.UPC_EAN_EXTENSION, new Date().getTime());
                return null != s && l.putAllMetadata(s), l;
              }
            }, {
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i = t.getSize(),
                  o = e[1],
                  s = 0;
                for (var _e52 = 0; _e52 < 5 && o < i; _e52++) {
                  var _i35 = Et.decodeDigit(t, n, o, Et.L_AND_G_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _i35 % 10);
                  var _iterator7 = _createForOfIteratorHelper(n),
                    _step7;
                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var _t75 = _step7.value;
                      o += _t75;
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }
                  _i35 >= 10 && (s |= 1 << 4 - _e52), 4 !== _e52 && (o = t.getNextSet(o), o = t.getNextUnset(o));
                }
                if (5 !== r.length) throw new N();
                var a = this.determineCheckDigit(s);
                if (Ct.extensionChecksum(r.toString()) !== a) throw new N();
                return o;
              }
            }, {
              key: "determineCheckDigit",
              value: function determineCheckDigit(t) {
                for (var _e53 = 0; _e53 < 10; _e53++) if (t === this.CHECK_DIGIT_ENCODINGS[_e53]) return _e53;
                throw new N();
              }
            }], [{
              key: "extensionChecksum",
              value: function extensionChecksum(t) {
                var e = t.length,
                  r = 0;
                for (var _n39 = e - 2; _n39 >= 0; _n39 -= 2) r += t.charAt(_n39).charCodeAt(0) - "0".charCodeAt(0);
                r *= 3;
                for (var _n40 = e - 1; _n40 >= 0; _n40 -= 2) r += t.charAt(_n40).charCodeAt(0) - "0".charCodeAt(0);
                return r *= 3, r % 10;
              }
            }, {
              key: "parseExtensionString",
              value: function parseExtensionString(t) {
                if (5 !== t.length) return null;
                var e = Ct.parseExtension5String(t);
                return null == e ? null : new Map([[X.SUGGESTED_PRICE, e]]);
              }
            }, {
              key: "parseExtension5String",
              value: function parseExtension5String(t) {
                var e;
                switch (t.charAt(0)) {
                  case "0":
                    e = "£";
                    break;
                  case "5":
                    e = "$";
                    break;
                  case "9":
                    switch (t) {
                      case "90000":
                        return null;
                      case "99991":
                        return "0.00";
                      case "99990":
                        return "Used";
                    }
                    e = "";
                    break;
                  default:
                    e = "";
                }
                var r = parseInt(t.substring(1)),
                  n = r % 100;
                return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString());
              }
            }]);
            return Ct;
          }();
          var It = /*#__PURE__*/function () {
            function It() {
              _classCallCheck(this, It);
              this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
            }
            _createClass(It, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = this.decodeRowStringBuffer,
                  i = this.decodeMiddle(e, r, n),
                  o = n.toString(),
                  s = It.parseExtensionString(o),
                  a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                  l = new F(o, null, 0, a, k.UPC_EAN_EXTENSION, new Date().getTime());
                return null != s && l.putAllMetadata(s), l;
              }
            }, {
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i = t.getSize(),
                  o = e[1],
                  s = 0;
                for (var _e54 = 0; _e54 < 2 && o < i; _e54++) {
                  var _i36 = Et.decodeDigit(t, n, o, Et.L_AND_G_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _i36 % 10);
                  var _iterator8 = _createForOfIteratorHelper(n),
                    _step8;
                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _t76 = _step8.value;
                      o += _t76;
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                  _i36 >= 10 && (s |= 1 << 1 - _e54), 1 !== _e54 && (o = t.getNextSet(o), o = t.getNextUnset(o));
                }
                if (2 !== r.length) throw new N();
                if (parseInt(r.toString()) % 4 !== s) throw new N();
                return o;
              }
            }], [{
              key: "parseExtensionString",
              value: function parseExtensionString(t) {
                return 2 !== t.length ? null : new Map([[X.ISSUE_NUMBER, parseInt(t)]]);
              }
            }]);
            return It;
          }();
          var pt = /*#__PURE__*/function () {
            function pt() {
              _classCallCheck(this, pt);
            }
            _createClass(pt, null, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = Et.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
                try {
                  return new Ct().decodeRow(t, e, n);
                } catch (r) {
                  return new It().decodeRow(t, e, n);
                }
              }
            }]);
            return pt;
          }();
          pt.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
          var St = /*#__PURE__*/function (_Et) {
            _inherits(St, _Et);
            var _super24 = _createSuper(St);
            function St() {
              var _this18;
              _classCallCheck(this, St);
              _this18 = _super24.call(this), _this18.decodeRowStringBuffer = "", St.L_AND_G_PATTERNS = St.L_PATTERNS.map(function (t) {
                return Int32Array.from(t);
              });
              for (var _t77 = 10; _t77 < 20; _t77++) {
                var _e55 = St.L_PATTERNS[_t77 - 10],
                  _r57 = new Int32Array(_e55.length);
                for (var _t78 = 0; _t78 < _e55.length; _t78++) _r57[_t78] = _e55[_e55.length - _t78 - 1];
                St.L_AND_G_PATTERNS[_t77] = _r57;
              }
              return _this18;
            }
            _createClass(St, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = St.findStartGuardPattern(e),
                  i = null == r ? null : r.get(E.NEED_RESULT_POINT_CALLBACK);
                if (null != i) {
                  var _e56 = new nt((n[0] + n[1]) / 2, t);
                  i.foundPossibleResultPoint(_e56);
                }
                var o = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
                  s = o.rowOffset,
                  a = o.resultString;
                if (null != i) {
                  var _e57 = new nt(s, t);
                  i.foundPossibleResultPoint(_e57);
                }
                var l = St.decodeEnd(e, s);
                if (null != i) {
                  var _e58 = new nt((l[0] + l[1]) / 2, t);
                  i.foundPossibleResultPoint(_e58);
                }
                var h = l[1],
                  u = h + (h - l[0]);
                if (u >= e.getSize() || !e.isRange(h, u, !1)) throw new N();
                var d = a.toString();
                if (d.length < 8) throw new C();
                if (!St.checkChecksum(d)) throw new c();
                var g = (n[1] + n[0]) / 2,
                  f = (l[1] + l[0]) / 2,
                  w = this.getBarcodeFormat(),
                  A = [new nt(g, t), new nt(f, t)],
                  m = new F(d, null, 0, A, w, new Date().getTime()),
                  I = 0;
                try {
                  var _r58 = pt.decodeRow(t, e, l[1]);
                  m.putMetadata(X.UPC_EAN_EXTENSION, _r58.getText()), m.putAllMetadata(_r58.getResultMetadata()), m.addResultPoints(_r58.getResultPoints()), I = _r58.getText().length;
                } catch (t) {}
                var p = null == r ? null : r.get(E.ALLOWED_EAN_EXTENSIONS);
                if (null != p) {
                  var _t79 = !1;
                  for (var _e59 in p) if (I.toString() === _e59) {
                    _t79 = !0;
                    break;
                  }
                  if (!_t79) throw new N();
                }
                return w === k.EAN_13 || k.UPC_A, m;
              }
            }], [{
              key: "checkChecksum",
              value: function checkChecksum(t) {
                return St.checkStandardUPCEANChecksum(t);
              }
            }, {
              key: "checkStandardUPCEANChecksum",
              value: function checkStandardUPCEANChecksum(t) {
                var e = t.length;
                if (0 === e) return !1;
                var r = parseInt(t.charAt(e - 1), 10);
                return St.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
              }
            }, {
              key: "getStandardUPCEANChecksum",
              value: function getStandardUPCEANChecksum(t) {
                var e = t.length,
                  r = 0;
                for (var _n41 = e - 1; _n41 >= 0; _n41 -= 2) {
                  var _e60 = t.charAt(_n41).charCodeAt(0) - "0".charCodeAt(0);
                  if (_e60 < 0 || _e60 > 9) throw new C();
                  r += _e60;
                }
                r *= 3;
                for (var _n42 = e - 2; _n42 >= 0; _n42 -= 2) {
                  var _e61 = t.charAt(_n42).charCodeAt(0) - "0".charCodeAt(0);
                  if (_e61 < 0 || _e61 > 9) throw new C();
                  r += _e61;
                }
                return (1e3 - r) % 10;
              }
            }, {
              key: "decodeEnd",
              value: function decodeEnd(t, e) {
                return St.findGuardPattern(t, e, !1, St.START_END_PATTERN, new Int32Array(St.START_END_PATTERN.length).fill(0));
              }
            }]);
            return St;
          }(Et);
          var _t = /*#__PURE__*/function (_St) {
            _inherits(_t, _St);
            var _super25 = _createSuper(_t);
            function _t() {
              var _this19;
              _classCallCheck(this, _t);
              _this19 = _super25.call(this), _this19.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
              return _this19;
            }
            _createClass(_t, [{
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i = t.getSize(),
                  o = e[1],
                  s = 0;
                for (var _e62 = 0; _e62 < 6 && o < i; _e62++) {
                  var _i37 = St.decodeDigit(t, n, o, St.L_AND_G_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _i37 % 10);
                  var _iterator9 = _createForOfIteratorHelper(n),
                    _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var _t80 = _step9.value;
                      o += _t80;
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                  _i37 >= 10 && (s |= 1 << 5 - _e62);
                }
                r = _t.determineFirstDigit(r, s), o = St.findGuardPattern(t, o, !0, St.MIDDLE_PATTERN, new Int32Array(St.MIDDLE_PATTERN.length).fill(0))[1];
                for (var _e63 = 0; _e63 < 6 && o < i; _e63++) {
                  var _e64 = St.decodeDigit(t, n, o, St.L_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _e64);
                  var _iterator10 = _createForOfIteratorHelper(n),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _t81 = _step10.value;
                      o += _t81;
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                }
                return {
                  rowOffset: o,
                  resultString: r
                };
              }
            }, {
              key: "getBarcodeFormat",
              value: function getBarcodeFormat() {
                return k.EAN_13;
              }
            }], [{
              key: "determineFirstDigit",
              value: function determineFirstDigit(t, e) {
                for (var _r59 = 0; _r59 < 10; _r59++) if (e === this.FIRST_DIGIT_ENCODINGS[_r59]) return String.fromCharCode("0".charCodeAt(0) + _r59) + t;
                throw new N();
              }
            }]);
            return _t;
          }(St);
          _t.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
          var Tt = /*#__PURE__*/function (_St2) {
            _inherits(Tt, _St2);
            var _super26 = _createSuper(Tt);
            function Tt() {
              var _this20;
              _classCallCheck(this, Tt);
              _this20 = _super26.call(this), _this20.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
              return _this20;
            }
            _createClass(Tt, [{
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i = t.getSize(),
                  o = e[1];
                for (var _e65 = 0; _e65 < 4 && o < i; _e65++) {
                  var _e66 = St.decodeDigit(t, n, o, St.L_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _e66);
                  var _iterator11 = _createForOfIteratorHelper(n),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _t82 = _step11.value;
                      o += _t82;
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                }
                o = St.findGuardPattern(t, o, !0, St.MIDDLE_PATTERN, new Int32Array(St.MIDDLE_PATTERN.length).fill(0))[1];
                for (var _e67 = 0; _e67 < 4 && o < i; _e67++) {
                  var _e68 = St.decodeDigit(t, n, o, St.L_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _e68);
                  var _iterator12 = _createForOfIteratorHelper(n),
                    _step12;
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var _t83 = _step12.value;
                      o += _t83;
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                }
                return {
                  rowOffset: o,
                  resultString: r
                };
              }
            }, {
              key: "getBarcodeFormat",
              value: function getBarcodeFormat() {
                return k.EAN_8;
              }
            }]);
            return Tt;
          }(St);
          var yt = /*#__PURE__*/function (_St3) {
            _inherits(yt, _St3);
            var _super27 = _createSuper(yt);
            function yt() {
              var _this21;
              _classCallCheck(this, yt);
              _this21 = _super27.apply(this, arguments), _this21.ean13Reader = new _t();
              return _this21;
            }
            _createClass(yt, [{
              key: "getBarcodeFormat",
              value: function getBarcodeFormat() {
                return k.UPC_A;
              }
            }, {
              key: "decode",
              value: function decode(t, e) {
                return this.maybeReturnResult(this.ean13Reader.decode(t));
              }
            }, {
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
              }
            }, {
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                return this.ean13Reader.decodeMiddle(t, e, r);
              }
            }, {
              key: "maybeReturnResult",
              value: function maybeReturnResult(t) {
                var e = t.getText();
                if ("0" === e.charAt(0)) {
                  var _r60 = new F(e.substring(1), null, null, t.getResultPoints(), k.UPC_A);
                  return null != t.getResultMetadata() && _r60.putAllMetadata(t.getResultMetadata()), _r60;
                }
                throw new N();
              }
            }, {
              key: "reset",
              value: function reset() {
                this.ean13Reader.reset();
              }
            }]);
            return yt;
          }(St);
          var Nt = /*#__PURE__*/function (_St4) {
            _inherits(Nt, _St4);
            var _super28 = _createSuper(Nt);
            function Nt() {
              var _this22;
              _classCallCheck(this, Nt);
              _this22 = _super28.call(this), _this22.decodeMiddleCounters = new Int32Array(4);
              return _this22;
            }
            _createClass(Nt, [{
              key: "decodeMiddle",
              value: function decodeMiddle(t, e, r) {
                var n = this.decodeMiddleCounters.map(function (t) {
                  return t;
                });
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i = t.getSize();
                var o = e[1],
                  s = 0;
                for (var _e69 = 0; _e69 < 6 && o < i; _e69++) {
                  var _i38 = Nt.decodeDigit(t, n, o, Nt.L_AND_G_PATTERNS);
                  r += String.fromCharCode("0".charCodeAt(0) + _i38 % 10);
                  var _iterator13 = _createForOfIteratorHelper(n),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _t84 = _step13.value;
                      o += _t84;
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  _i38 >= 10 && (s |= 1 << 5 - _e69);
                }
                return Nt.determineNumSysAndCheckDigit(new T(r), s), o;
              }
            }, {
              key: "decodeEnd",
              value: function decodeEnd(t, e) {
                return Nt.findGuardPatternWithoutCounters(t, e, !0, Nt.MIDDLE_END_PATTERN);
              }
            }, {
              key: "checkChecksum",
              value: function checkChecksum(t) {
                return St.checkChecksum(Nt.convertUPCEtoUPCA(t));
              }
            }, {
              key: "getBarcodeFormat",
              value: function getBarcodeFormat() {
                return k.UPC_E;
              }
            }], [{
              key: "determineNumSysAndCheckDigit",
              value: function determineNumSysAndCheckDigit(t, e) {
                for (var _r61 = 0; _r61 <= 1; _r61++) for (var _n43 = 0; _n43 < 10; _n43++) if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[_r61][_n43]) return t.insert(0, "0" + _r61), void t.append("0" + _n43);
                throw N.getNotFoundInstance();
              }
            }, {
              key: "convertUPCEtoUPCA",
              value: function convertUPCEtoUPCA(t) {
                var e = t.slice(1, 7).split("").map(function (t) {
                    return t.charCodeAt(0);
                  }),
                  r = new T();
                r.append(t.charAt(0));
                var n = e[5];
                switch (n) {
                  case 0:
                  case 1:
                  case 2:
                    r.appendChars(e, 0, 2), r.append(n), r.append("0000"), r.appendChars(e, 2, 3);
                    break;
                  case 3:
                    r.appendChars(e, 0, 3), r.append("00000"), r.appendChars(e, 3, 2);
                    break;
                  case 4:
                    r.appendChars(e, 0, 4), r.append("00000"), r.append(e[4]);
                    break;
                  default:
                    r.appendChars(e, 0, 5), r.append("0000"), r.append(n);
                }
                return t.length >= 8 && r.append(t.charAt(7)), r.toString();
              }
            }]);
            return Nt;
          }(St);
          Nt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Nt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])];
          var Mt = /*#__PURE__*/function (_ft5) {
            _inherits(Mt, _ft5);
            var _super29 = _createSuper(Mt);
            function Mt(t) {
              var _this23;
              _classCallCheck(this, Mt);
              _this23 = _super29.call(this);
              var e = null == t ? null : t.get(E.POSSIBLE_FORMATS),
                r = [];
              null != e && (e.indexOf(k.EAN_13) > -1 ? r.push(new _t()) : e.indexOf(k.UPC_A) > -1 && r.push(new yt()), e.indexOf(k.EAN_8) > -1 && r.push(new Tt()), e.indexOf(k.UPC_E) > -1 && r.push(new Nt())), 0 === r.length && (r.push(new _t()), r.push(new Tt()), r.push(new Nt())), _this23.readers = r;
              return _this23;
            }
            _createClass(Mt, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var _iterator14 = _createForOfIteratorHelper(this.readers),
                  _step14;
                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var _n44 = _step14.value;
                    try {
                      var _i39 = _n44.decodeRow(t, e, r),
                        _o39 = _i39.getBarcodeFormat() === k.EAN_13 && "0" === _i39.getText().charAt(0),
                        _s26 = null == r ? null : r.get(E.POSSIBLE_FORMATS),
                        _a15 = null == _s26 || _s26.includes(k.UPC_A);
                      if (_o39 && _a15) {
                        var _t85 = _i39.getRawBytes(),
                          _e70 = new F(_i39.getText().substring(1), _t85, _t85.length, _i39.getResultPoints(), k.UPC_A);
                        return _e70.putAllMetadata(_i39.getResultMetadata()), _e70;
                      }
                      return _i39;
                    } catch (t) {}
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
                throw new N();
              }
            }, {
              key: "reset",
              value: function reset() {
                var _iterator15 = _createForOfIteratorHelper(this.readers),
                  _step15;
                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _t86 = _step15.value;
                    _t86.reset();
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
            }]);
            return Mt;
          }(ft);
          var Dt = /*#__PURE__*/function (_ft6) {
            _inherits(Dt, _ft6);
            var _super30 = _createSuper(Dt);
            function Dt() {
              var _this24;
              _classCallCheck(this, Dt);
              _this24 = _super30.call(this), _this24.decodeFinderCounters = new Int32Array(4), _this24.dataCharacterCounters = new Int32Array(8), _this24.oddRoundingErrors = new Array(4), _this24.evenRoundingErrors = new Array(4), _this24.oddCounts = new Array(_this24.dataCharacterCounters.length / 2), _this24.evenCounts = new Array(_this24.dataCharacterCounters.length / 2);
              return _this24;
            }
            _createClass(Dt, [{
              key: "getDecodeFinderCounters",
              value: function getDecodeFinderCounters() {
                return this.decodeFinderCounters;
              }
            }, {
              key: "getDataCharacterCounters",
              value: function getDataCharacterCounters() {
                return this.dataCharacterCounters;
              }
            }, {
              key: "getOddRoundingErrors",
              value: function getOddRoundingErrors() {
                return this.oddRoundingErrors;
              }
            }, {
              key: "getEvenRoundingErrors",
              value: function getEvenRoundingErrors() {
                return this.evenRoundingErrors;
              }
            }, {
              key: "getOddCounts",
              value: function getOddCounts() {
                return this.oddCounts;
              }
            }, {
              key: "getEvenCounts",
              value: function getEvenCounts() {
                return this.evenCounts;
              }
            }, {
              key: "parseFinderValue",
              value: function parseFinderValue(t, e) {
                for (var _r62 = 0; _r62 < e.length; _r62++) if (ft.patternMatchVariance(t, e[_r62], Dt.MAX_INDIVIDUAL_VARIANCE) < Dt.MAX_AVG_VARIANCE) return _r62;
                throw new N();
              }
            }], [{
              key: "count",
              value: function count(t) {
                return et.sum(new Int32Array(t));
              }
            }, {
              key: "increment",
              value: function increment(t, e) {
                var r = 0,
                  n = e[0];
                for (var _i40 = 1; _i40 < t.length; _i40++) e[_i40] > n && (n = e[_i40], r = _i40);
                t[r]++;
              }
            }, {
              key: "decrement",
              value: function decrement(t, e) {
                var r = 0,
                  n = e[0];
                for (var _i41 = 1; _i41 < t.length; _i41++) e[_i41] < n && (n = e[_i41], r = _i41);
                t[r]--;
              }
            }, {
              key: "isFinderPattern",
              value: function isFinderPattern(t) {
                var e = t[0] + t[1],
                  r = e / (e + t[2] + t[3]);
                if (r >= Dt.MIN_FINDER_PATTERN_RATIO && r <= Dt.MAX_FINDER_PATTERN_RATIO) {
                  var _e71 = Number.MAX_SAFE_INTEGER,
                    _r63 = Number.MIN_SAFE_INTEGER;
                  var _iterator16 = _createForOfIteratorHelper(t),
                    _step16;
                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _n45 = _step16.value;
                      _n45 > _r63 && (_r63 = _n45), _n45 < _e71 && (_e71 = _n45);
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                  return _r63 < 10 * _e71;
                }
                return !1;
              }
            }]);
            return Dt;
          }(ft);
          Dt.MAX_AVG_VARIANCE = .2, Dt.MAX_INDIVIDUAL_VARIANCE = .45, Dt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, Dt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
          var Rt = /*#__PURE__*/function () {
            function Rt(t, e) {
              _classCallCheck(this, Rt);
              this.value = t, this.checksumPortion = e;
            }
            _createClass(Rt, [{
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "getChecksumPortion",
              value: function getChecksumPortion() {
                return this.checksumPortion;
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.value + "(" + this.checksumPortion + ")";
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof Rt)) return !1;
                var e = t;
                return this.value === e.value && this.checksumPortion === e.checksumPortion;
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return this.value ^ this.checksumPortion;
              }
            }]);
            return Rt;
          }();
          var Ot = /*#__PURE__*/function () {
            function Ot(t, e, r, n, i) {
              _classCallCheck(this, Ot);
              this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array(), this.resultPoints.push(new nt(r, i)), this.resultPoints.push(new nt(n, i));
            }
            _createClass(Ot, [{
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "getStartEnd",
              value: function getStartEnd() {
                return this.startEnd;
              }
            }, {
              key: "getResultPoints",
              value: function getResultPoints() {
                return this.resultPoints;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof Ot)) return !1;
                var e = t;
                return this.value === e.value;
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return this.value;
              }
            }]);
            return Ot;
          }();
          var bt = /*#__PURE__*/function () {
            function bt() {
              _classCallCheck(this, bt);
            }
            _createClass(bt, null, [{
              key: "getRSSvalue",
              value: function getRSSvalue(t, e, r) {
                var n = 0;
                var _iterator17 = _createForOfIteratorHelper(t),
                  _step17;
                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var _e72 = _step17.value;
                    n += _e72;
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
                var i = 0,
                  o = 0,
                  s = t.length;
                for (var _a16 = 0; _a16 < s - 1; _a16++) {
                  var _l11 = void 0;
                  for (_l11 = 1, o |= 1 << _a16; _l11 < t[_a16]; _l11++, o &= ~(1 << _a16)) {
                    var _t87 = bt.combins(n - _l11 - 1, s - _a16 - 2);
                    if (r && 0 === o && n - _l11 - (s - _a16 - 1) >= s - _a16 - 1 && (_t87 -= bt.combins(n - _l11 - (s - _a16), s - _a16 - 2)), s - _a16 - 1 > 1) {
                      var _r64 = 0;
                      for (var _t88 = n - _l11 - (s - _a16 - 2); _t88 > e; _t88--) _r64 += bt.combins(n - _l11 - _t88 - 1, s - _a16 - 3);
                      _t87 -= _r64 * (s - 1 - _a16);
                    } else n - _l11 > e && _t87--;
                    i += _t87;
                  }
                  n -= _l11;
                }
                return i;
              }
            }, {
              key: "combins",
              value: function combins(t, e) {
                var r, n;
                t - e > e ? (n = e, r = t - e) : (n = t - e, r = e);
                var i = 1,
                  o = 1;
                for (var _e73 = t; _e73 > r; _e73--) i *= _e73, o <= n && (i /= o, o++);
                for (; o <= n;) i /= o, o++;
                return i;
              }
            }]);
            return bt;
          }();
          var Lt = /*#__PURE__*/function () {
            function Lt(t, e) {
              _classCallCheck(this, Lt);
              e ? this.decodedInformation = null : (this.finished = t, this.decodedInformation = e);
            }
            _createClass(Lt, [{
              key: "getDecodedInformation",
              value: function getDecodedInformation() {
                return this.decodedInformation;
              }
            }, {
              key: "isFinished",
              value: function isFinished() {
                return this.finished;
              }
            }]);
            return Lt;
          }();
          var Bt = /*#__PURE__*/function () {
            function Bt(t) {
              _classCallCheck(this, Bt);
              this.newPosition = t;
            }
            _createClass(Bt, [{
              key: "getNewPosition",
              value: function getNewPosition() {
                return this.newPosition;
              }
            }]);
            return Bt;
          }();
          var Pt = /*#__PURE__*/function (_Bt) {
            _inherits(Pt, _Bt);
            var _super31 = _createSuper(Pt);
            function Pt(t, e) {
              var _this25;
              _classCallCheck(this, Pt);
              _this25 = _super31.call(this, t), _this25.value = e;
              return _this25;
            }
            _createClass(Pt, [{
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "isFNC1",
              value: function isFNC1() {
                return this.value === Pt.FNC1;
              }
            }]);
            return Pt;
          }(Bt);
          Pt.FNC1 = "$";
          var vt = /*#__PURE__*/function (_Bt2) {
            _inherits(vt, _Bt2);
            var _super32 = _createSuper(vt);
            function vt(t, e, r) {
              var _this26;
              _classCallCheck(this, vt);
              _this26 = _super32.call(this, t), r ? (_this26.remaining = !0, _this26.remainingValue = _this26.remainingValue) : (_this26.remaining = !1, _this26.remainingValue = 0), _this26.newString = e;
              return _this26;
            }
            _createClass(vt, [{
              key: "getNewString",
              value: function getNewString() {
                return this.newString;
              }
            }, {
              key: "isRemaining",
              value: function isRemaining() {
                return this.remaining;
              }
            }, {
              key: "getRemainingValue",
              value: function getRemainingValue() {
                return this.remainingValue;
              }
            }]);
            return vt;
          }(Bt);
          var Ft = /*#__PURE__*/function (_Bt3) {
            _inherits(Ft, _Bt3);
            var _super33 = _createSuper(Ft);
            function Ft(t, e, r) {
              var _this27;
              _classCallCheck(this, Ft);
              if (_this27 = _super33.call(this, t), e < 0 || e > 10 || r < 0 || r > 10) throw new C();
              _this27.firstDigit = e, _this27.secondDigit = r;
              return _possibleConstructorReturn(_this27);
            }
            _createClass(Ft, [{
              key: "getFirstDigit",
              value: function getFirstDigit() {
                return this.firstDigit;
              }
            }, {
              key: "getSecondDigit",
              value: function getSecondDigit() {
                return this.secondDigit;
              }
            }, {
              key: "getValue",
              value: function getValue() {
                return 10 * this.firstDigit + this.secondDigit;
              }
            }, {
              key: "isFirstDigitFNC1",
              value: function isFirstDigitFNC1() {
                return this.firstDigit === Ft.FNC1;
              }
            }, {
              key: "isSecondDigitFNC1",
              value: function isSecondDigitFNC1() {
                return this.secondDigit === Ft.FNC1;
              }
            }, {
              key: "isAnyFNC1",
              value: function isAnyFNC1() {
                return this.firstDigit === Ft.FNC1 || this.secondDigit === Ft.FNC1;
              }
            }]);
            return Ft;
          }(Bt);
          Ft.FNC1 = 10;
          var xt = /*#__PURE__*/function () {
            function xt() {
              _classCallCheck(this, xt);
            }
            _createClass(xt, null, [{
              key: "parseFieldsInGeneralPurpose",
              value: function parseFieldsInGeneralPurpose(t) {
                if (!t) return null;
                if (t.length < 2) throw new N();
                var e = t.substring(0, 2);
                var _iterator18 = _createForOfIteratorHelper(xt.TWO_DIGIT_DATA_LENGTH),
                  _step18;
                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                    var _r65 = _step18.value;
                    if (_r65[0] === e) return _r65[1] === xt.VARIABLE_LENGTH ? xt.processVariableAI(2, _r65[2], t) : xt.processFixedAI(2, _r65[1], t);
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }
                if (t.length < 3) throw new N();
                var r = t.substring(0, 3);
                var _iterator19 = _createForOfIteratorHelper(xt.THREE_DIGIT_DATA_LENGTH),
                  _step19;
                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _e74 = _step19.value;
                    if (_e74[0] === r) return _e74[1] === xt.VARIABLE_LENGTH ? xt.processVariableAI(3, _e74[2], t) : xt.processFixedAI(3, _e74[1], t);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
                var _iterator20 = _createForOfIteratorHelper(xt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH),
                  _step20;
                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _e75 = _step20.value;
                    if (_e75[0] === r) return _e75[1] === xt.VARIABLE_LENGTH ? xt.processVariableAI(4, _e75[2], t) : xt.processFixedAI(4, _e75[1], t);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
                if (t.length < 4) throw new N();
                var n = t.substring(0, 4);
                var _iterator21 = _createForOfIteratorHelper(xt.FOUR_DIGIT_DATA_LENGTH),
                  _step21;
                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _e76 = _step21.value;
                    if (_e76[0] === n) return _e76[1] === xt.VARIABLE_LENGTH ? xt.processVariableAI(4, _e76[2], t) : xt.processFixedAI(4, _e76[1], t);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
                throw new N();
              }
            }, {
              key: "processFixedAI",
              value: function processFixedAI(t, e, r) {
                if (r.length < t) throw new N();
                var n = r.substring(0, t);
                if (r.length < t + e) throw new N();
                var i = r.substring(t, t + e),
                  o = r.substring(t + e),
                  s = "(" + n + ")" + i,
                  a = xt.parseFieldsInGeneralPurpose(o);
                return null == a ? s : s + a;
              }
            }, {
              key: "processVariableAI",
              value: function processVariableAI(t, e, r) {
                var n,
                  i = r.substring(0, t);
                n = r.length < t + e ? r.length : t + e;
                var o = r.substring(t, n),
                  s = r.substring(n),
                  a = "(" + i + ")" + o,
                  l = xt.parseFieldsInGeneralPurpose(s);
                return null == l ? a : a + l;
              }
            }]);
            return xt;
          }();
          xt.VARIABLE_LENGTH = [], xt.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", xt.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", xt.VARIABLE_LENGTH, 20], ["22", xt.VARIABLE_LENGTH, 29], ["30", xt.VARIABLE_LENGTH, 8], ["37", xt.VARIABLE_LENGTH, 8], ["90", xt.VARIABLE_LENGTH, 30], ["91", xt.VARIABLE_LENGTH, 30], ["92", xt.VARIABLE_LENGTH, 30], ["93", xt.VARIABLE_LENGTH, 30], ["94", xt.VARIABLE_LENGTH, 30], ["95", xt.VARIABLE_LENGTH, 30], ["96", xt.VARIABLE_LENGTH, 30], ["97", xt.VARIABLE_LENGTH, 3], ["98", xt.VARIABLE_LENGTH, 30], ["99", xt.VARIABLE_LENGTH, 30]], xt.THREE_DIGIT_DATA_LENGTH = [["240", xt.VARIABLE_LENGTH, 30], ["241", xt.VARIABLE_LENGTH, 30], ["242", xt.VARIABLE_LENGTH, 6], ["250", xt.VARIABLE_LENGTH, 30], ["251", xt.VARIABLE_LENGTH, 30], ["253", xt.VARIABLE_LENGTH, 17], ["254", xt.VARIABLE_LENGTH, 20], ["400", xt.VARIABLE_LENGTH, 30], ["401", xt.VARIABLE_LENGTH, 30], ["402", 17], ["403", xt.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", xt.VARIABLE_LENGTH, 20], ["421", xt.VARIABLE_LENGTH, 15], ["422", 3], ["423", xt.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]], xt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", xt.VARIABLE_LENGTH, 15], ["391", xt.VARIABLE_LENGTH, 18], ["392", xt.VARIABLE_LENGTH, 15], ["393", xt.VARIABLE_LENGTH, 18], ["703", xt.VARIABLE_LENGTH, 30]], xt.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", xt.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", xt.VARIABLE_LENGTH, 20], ["8003", xt.VARIABLE_LENGTH, 30], ["8004", xt.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", xt.VARIABLE_LENGTH, 30], ["8008", xt.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", xt.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", xt.VARIABLE_LENGTH, 70], ["8200", xt.VARIABLE_LENGTH, 70]];
          var kt = /*#__PURE__*/function () {
            function kt(t) {
              _classCallCheck(this, kt);
              this.buffer = new T(), this.information = t;
            }
            _createClass(kt, [{
              key: "decodeAllCodes",
              value: function decodeAllCodes(t, e) {
                var r = e,
                  n = null;
                for (;;) {
                  var _e77 = this.decodeGeneralPurposeField(r, n),
                    _i42 = xt.parseFieldsInGeneralPurpose(_e77.getNewString());
                  if (null != _i42 && t.append(_i42), n = _e77.isRemaining() ? "" + _e77.getRemainingValue() : null, r === _e77.getNewPosition()) break;
                  r = _e77.getNewPosition();
                }
                return t.toString();
              }
            }, {
              key: "isStillNumeric",
              value: function isStillNumeric(t) {
                if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
                for (var _e78 = t; _e78 < t + 3; ++_e78) if (this.information.get(_e78)) return !0;
                return this.information.get(t + 3);
              }
            }, {
              key: "decodeNumeric",
              value: function decodeNumeric(t) {
                if (t + 7 > this.information.getSize()) {
                  var _e79 = this.extractNumericValueFromBitArray(t, 4);
                  return new Ft(this.information.getSize(), 0 === _e79 ? Ft.FNC1 : _e79 - 1, Ft.FNC1);
                }
                var e = this.extractNumericValueFromBitArray(t, 7);
                return new Ft(t + 7, (e - 8) / 11, (e - 8) % 11);
              }
            }, {
              key: "extractNumericValueFromBitArray",
              value: function extractNumericValueFromBitArray(t, e) {
                return kt.extractNumericValueFromBitArray(this.information, t, e);
              }
            }, {
              key: "decodeGeneralPurposeField",
              value: function decodeGeneralPurposeField(t, e) {
                this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
                var r = this.parseBlocks();
                return null != r && r.isRemaining() ? new vt(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new vt(this.current.getPosition(), this.buffer.toString());
              }
            }, {
              key: "parseBlocks",
              value: function parseBlocks() {
                var t, e;
                do {
                  var _r66 = this.current.getPosition();
                  if (this.current.isAlpha() ? (e = this.parseAlphaBlock(), t = e.isFinished()) : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block(), t = e.isFinished()) : (e = this.parseNumericBlock(), t = e.isFinished()), _r66 === this.current.getPosition() && !t) break;
                } while (!t);
                return e.getDecodedInformation();
              }
            }, {
              key: "parseNumericBlock",
              value: function parseNumericBlock() {
                for (; this.isStillNumeric(this.current.getPosition());) {
                  var _t89 = this.decodeNumeric(this.current.getPosition());
                  if (this.current.setPosition(_t89.getNewPosition()), _t89.isFirstDigitFNC1()) {
                    var _e80 = void 0;
                    return _e80 = _t89.isSecondDigitFNC1() ? new vt(this.current.getPosition(), this.buffer.toString()) : new vt(this.current.getPosition(), this.buffer.toString(), _t89.getSecondDigit()), new Lt(!0, _e80);
                  }
                  if (this.buffer.append(_t89.getFirstDigit()), _t89.isSecondDigitFNC1()) {
                    var _t90 = new vt(this.current.getPosition(), this.buffer.toString());
                    return new Lt(!0, _t90);
                  }
                  this.buffer.append(_t89.getSecondDigit());
                }
                return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Lt(!1);
              }
            }, {
              key: "parseIsoIec646Block",
              value: function parseIsoIec646Block() {
                for (; this.isStillIsoIec646(this.current.getPosition());) {
                  var _t91 = this.decodeIsoIec646(this.current.getPosition());
                  if (this.current.setPosition(_t91.getNewPosition()), _t91.isFNC1()) {
                    var _t92 = new vt(this.current.getPosition(), this.buffer.toString());
                    return new Lt(!0, _t92);
                  }
                  this.buffer.append(_t91.getValue());
                }
                return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Lt(!1);
              }
            }, {
              key: "parseAlphaBlock",
              value: function parseAlphaBlock() {
                for (; this.isStillAlpha(this.current.getPosition());) {
                  var _t93 = this.decodeAlphanumeric(this.current.getPosition());
                  if (this.current.setPosition(_t93.getNewPosition()), _t93.isFNC1()) {
                    var _t94 = new vt(this.current.getPosition(), this.buffer.toString());
                    return new Lt(!0, _t94);
                  }
                  this.buffer.append(_t93.getValue());
                }
                return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Lt(!1);
              }
            }, {
              key: "isStillIsoIec646",
              value: function isStillIsoIec646(t) {
                if (t + 5 > this.information.getSize()) return !1;
                var e = this.extractNumericValueFromBitArray(t, 5);
                if (e >= 5 && e < 16) return !0;
                if (t + 7 > this.information.getSize()) return !1;
                var r = this.extractNumericValueFromBitArray(t, 7);
                if (r >= 64 && r < 116) return !0;
                if (t + 8 > this.information.getSize()) return !1;
                var n = this.extractNumericValueFromBitArray(t, 8);
                return n >= 232 && n < 253;
              }
            }, {
              key: "decodeIsoIec646",
              value: function decodeIsoIec646(t) {
                var e = this.extractNumericValueFromBitArray(t, 5);
                if (15 === e) return new Pt(t + 5, Pt.FNC1);
                if (e >= 5 && e < 15) return new Pt(t + 5, "0" + (e - 5));
                var r,
                  n = this.extractNumericValueFromBitArray(t, 7);
                if (n >= 64 && n < 90) return new Pt(t + 7, "" + (n + 1));
                if (n >= 90 && n < 116) return new Pt(t + 7, "" + (n + 7));
                switch (this.extractNumericValueFromBitArray(t, 8)) {
                  case 232:
                    r = "!";
                    break;
                  case 233:
                    r = '"';
                    break;
                  case 234:
                    r = "%";
                    break;
                  case 235:
                    r = "&";
                    break;
                  case 236:
                    r = "'";
                    break;
                  case 237:
                    r = "(";
                    break;
                  case 238:
                    r = ")";
                    break;
                  case 239:
                    r = "*";
                    break;
                  case 240:
                    r = "+";
                    break;
                  case 241:
                    r = ",";
                    break;
                  case 242:
                    r = "-";
                    break;
                  case 243:
                    r = ".";
                    break;
                  case 244:
                    r = "/";
                    break;
                  case 245:
                    r = ":";
                    break;
                  case 246:
                    r = ";";
                    break;
                  case 247:
                    r = "<";
                    break;
                  case 248:
                    r = "=";
                    break;
                  case 249:
                    r = ">";
                    break;
                  case 250:
                    r = "?";
                    break;
                  case 251:
                    r = "_";
                    break;
                  case 252:
                    r = " ";
                    break;
                  default:
                    throw new C();
                }
                return new Pt(t + 8, r);
              }
            }, {
              key: "isStillAlpha",
              value: function isStillAlpha(t) {
                if (t + 5 > this.information.getSize()) return !1;
                var e = this.extractNumericValueFromBitArray(t, 5);
                if (e >= 5 && e < 16) return !0;
                if (t + 6 > this.information.getSize()) return !1;
                var r = this.extractNumericValueFromBitArray(t, 6);
                return r >= 16 && r < 63;
              }
            }, {
              key: "decodeAlphanumeric",
              value: function decodeAlphanumeric(t) {
                var e = this.extractNumericValueFromBitArray(t, 5);
                if (15 === e) return new Pt(t + 5, Pt.FNC1);
                if (e >= 5 && e < 15) return new Pt(t + 5, "0" + (e - 5));
                var r,
                  n = this.extractNumericValueFromBitArray(t, 6);
                if (n >= 32 && n < 58) return new Pt(t + 6, "" + (n + 33));
                switch (n) {
                  case 58:
                    r = "*";
                    break;
                  case 59:
                    r = ",";
                    break;
                  case 60:
                    r = "-";
                    break;
                  case 61:
                    r = ".";
                    break;
                  case 62:
                    r = "/";
                    break;
                  default:
                    throw new J("Decoding invalid alphanumeric value: " + n);
                }
                return new Pt(t + 6, r);
              }
            }, {
              key: "isAlphaTo646ToAlphaLatch",
              value: function isAlphaTo646ToAlphaLatch(t) {
                if (t + 1 > this.information.getSize()) return !1;
                for (var _e81 = 0; _e81 < 5 && _e81 + t < this.information.getSize(); ++_e81) if (2 === _e81) {
                  if (!this.information.get(t + 2)) return !1;
                } else if (this.information.get(t + _e81)) return !1;
                return !0;
              }
            }, {
              key: "isAlphaOr646ToNumericLatch",
              value: function isAlphaOr646ToNumericLatch(t) {
                if (t + 3 > this.information.getSize()) return !1;
                for (var _e82 = t; _e82 < t + 3; ++_e82) if (this.information.get(_e82)) return !1;
                return !0;
              }
            }, {
              key: "isNumericToAlphaNumericLatch",
              value: function isNumericToAlphaNumericLatch(t) {
                if (t + 1 > this.information.getSize()) return !1;
                for (var _e83 = 0; _e83 < 4 && _e83 + t < this.information.getSize(); ++_e83) if (this.information.get(t + _e83)) return !1;
                return !0;
              }
            }], [{
              key: "extractNumericValueFromBitArray",
              value: function extractNumericValueFromBitArray(t, e, r) {
                var n = 0;
                for (var _i43 = 0; _i43 < r; ++_i43) t.get(e + _i43) && (n |= 1 << r - _i43 - 1);
                return n;
              }
            }]);
            return kt;
          }();
          var Ut = /*#__PURE__*/function () {
            function Ut(t) {
              _classCallCheck(this, Ut);
              this.information = t, this.generalDecoder = new kt(t);
            }
            _createClass(Ut, [{
              key: "getInformation",
              value: function getInformation() {
                return this.information;
              }
            }, {
              key: "getGeneralDecoder",
              value: function getGeneralDecoder() {
                return this.generalDecoder;
              }
            }]);
            return Ut;
          }();
          var Ht = /*#__PURE__*/function (_Ut) {
            _inherits(Ht, _Ut);
            var _super34 = _createSuper(Ht);
            function Ht(t) {
              _classCallCheck(this, Ht);
              return _super34.call(this, t);
            }
            _createClass(Ht, [{
              key: "encodeCompressedGtin",
              value: function encodeCompressedGtin(t, e) {
                t.append("(01)");
                var r = t.length();
                t.append("9"), this.encodeCompressedGtinWithoutAI(t, e, r);
              }
            }, {
              key: "encodeCompressedGtinWithoutAI",
              value: function encodeCompressedGtinWithoutAI(t, e, r) {
                for (var _r67 = 0; _r67 < 4; ++_r67) {
                  var _n46 = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * _r67, 10);
                  _n46 / 100 == 0 && t.append("0"), _n46 / 10 == 0 && t.append("0"), t.append(_n46);
                }
                Ht.appendCheckDigit(t, r);
              }
            }], [{
              key: "appendCheckDigit",
              value: function appendCheckDigit(t, e) {
                var r = 0;
                for (var _n47 = 0; _n47 < 13; _n47++) {
                  var _i44 = t.charAt(_n47 + e).charCodeAt(0) - "0".charCodeAt(0);
                  r += 0 == (1 & _n47) ? 3 * _i44 : _i44;
                }
                r = 10 - r % 10, 10 === r && (r = 0), t.append(r);
              }
            }]);
            return Ht;
          }(Ut);
          Ht.GTIN_SIZE = 40;
          var Vt = /*#__PURE__*/function (_Ht) {
            _inherits(Vt, _Ht);
            var _super35 = _createSuper(Vt);
            function Vt(t) {
              _classCallCheck(this, Vt);
              return _super35.call(this, t);
            }
            _createClass(Vt, [{
              key: "parseInformation",
              value: function parseInformation() {
                var t = new T();
                t.append("(01)");
                var e = t.length(),
                  r = this.getGeneralDecoder().extractNumericValueFromBitArray(Vt.HEADER_SIZE, 4);
                return t.append(r), this.encodeCompressedGtinWithoutAI(t, Vt.HEADER_SIZE + 4, e), this.getGeneralDecoder().decodeAllCodes(t, Vt.HEADER_SIZE + 44);
              }
            }]);
            return Vt;
          }(Ht);
          Vt.HEADER_SIZE = 4;
          var zt = /*#__PURE__*/function (_Ut2) {
            _inherits(zt, _Ut2);
            var _super36 = _createSuper(zt);
            function zt(t) {
              _classCallCheck(this, zt);
              return _super36.call(this, t);
            }
            _createClass(zt, [{
              key: "parseInformation",
              value: function parseInformation() {
                var t = new T();
                return this.getGeneralDecoder().decodeAllCodes(t, zt.HEADER_SIZE);
              }
            }]);
            return zt;
          }(Ut);
          zt.HEADER_SIZE = 5;
          var Gt = /*#__PURE__*/function (_Ht2) {
            _inherits(Gt, _Ht2);
            var _super37 = _createSuper(Gt);
            function Gt(t) {
              _classCallCheck(this, Gt);
              return _super37.call(this, t);
            }
            _createClass(Gt, [{
              key: "encodeCompressedWeight",
              value: function encodeCompressedWeight(t, e, r) {
                var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
                this.addWeightCode(t, n);
                var i = this.checkWeight(n),
                  o = 1e5;
                for (var _e84 = 0; _e84 < 5; ++_e84) i / o == 0 && t.append("0"), o /= 10;
                t.append(i);
              }
            }]);
            return Gt;
          }(Ht);
          var Yt = /*#__PURE__*/function (_Gt) {
            _inherits(Yt, _Gt);
            var _super38 = _createSuper(Yt);
            function Yt(t) {
              _classCallCheck(this, Yt);
              return _super38.call(this, t);
            }
            _createClass(Yt, [{
              key: "parseInformation",
              value: function parseInformation() {
                if (this.getInformation().getSize() != Yt.HEADER_SIZE + Gt.GTIN_SIZE + Yt.WEIGHT_SIZE) throw new N();
                var t = new T();
                return this.encodeCompressedGtin(t, Yt.HEADER_SIZE), this.encodeCompressedWeight(t, Yt.HEADER_SIZE + Gt.GTIN_SIZE, Yt.WEIGHT_SIZE), t.toString();
              }
            }]);
            return Yt;
          }(Gt);
          Yt.HEADER_SIZE = 5, Yt.WEIGHT_SIZE = 15;
          var Xt = /*#__PURE__*/function (_Yt) {
            _inherits(Xt, _Yt);
            var _super39 = _createSuper(Xt);
            function Xt(t) {
              _classCallCheck(this, Xt);
              return _super39.call(this, t);
            }
            _createClass(Xt, [{
              key: "addWeightCode",
              value: function addWeightCode(t, e) {
                t.append("(3103)");
              }
            }, {
              key: "checkWeight",
              value: function checkWeight(t) {
                return t;
              }
            }]);
            return Xt;
          }(Yt);
          var Wt = /*#__PURE__*/function (_Yt2) {
            _inherits(Wt, _Yt2);
            var _super40 = _createSuper(Wt);
            function Wt(t) {
              _classCallCheck(this, Wt);
              return _super40.call(this, t);
            }
            _createClass(Wt, [{
              key: "addWeightCode",
              value: function addWeightCode(t, e) {
                e < 1e4 ? t.append("(3202)") : t.append("(3203)");
              }
            }, {
              key: "checkWeight",
              value: function checkWeight(t) {
                return t < 1e4 ? t : t - 1e4;
              }
            }]);
            return Wt;
          }(Yt);
          var jt = /*#__PURE__*/function (_Ht3) {
            _inherits(jt, _Ht3);
            var _super41 = _createSuper(jt);
            function jt(t) {
              _classCallCheck(this, jt);
              return _super41.call(this, t);
            }
            _createClass(jt, [{
              key: "parseInformation",
              value: function parseInformation() {
                if (this.getInformation().getSize() < jt.HEADER_SIZE + Ht.GTIN_SIZE) throw new N();
                var t = new T();
                this.encodeCompressedGtin(t, jt.HEADER_SIZE);
                var e = this.getGeneralDecoder().extractNumericValueFromBitArray(jt.HEADER_SIZE + Ht.GTIN_SIZE, jt.LAST_DIGIT_SIZE);
                t.append("(392"), t.append(e), t.append(")");
                var r = this.getGeneralDecoder().decodeGeneralPurposeField(jt.HEADER_SIZE + Ht.GTIN_SIZE + jt.LAST_DIGIT_SIZE, null);
                return t.append(r.getNewString()), t.toString();
              }
            }]);
            return jt;
          }(Ht);
          jt.HEADER_SIZE = 8, jt.LAST_DIGIT_SIZE = 2;
          var Zt = /*#__PURE__*/function (_Ht4) {
            _inherits(Zt, _Ht4);
            var _super42 = _createSuper(Zt);
            function Zt(t) {
              _classCallCheck(this, Zt);
              return _super42.call(this, t);
            }
            _createClass(Zt, [{
              key: "parseInformation",
              value: function parseInformation() {
                if (this.getInformation().getSize() < Zt.HEADER_SIZE + Ht.GTIN_SIZE) throw new N();
                var t = new T();
                this.encodeCompressedGtin(t, Zt.HEADER_SIZE);
                var e = this.getGeneralDecoder().extractNumericValueFromBitArray(Zt.HEADER_SIZE + Ht.GTIN_SIZE, Zt.LAST_DIGIT_SIZE);
                t.append("(393"), t.append(e), t.append(")");
                var r = this.getGeneralDecoder().extractNumericValueFromBitArray(Zt.HEADER_SIZE + Ht.GTIN_SIZE + Zt.LAST_DIGIT_SIZE, Zt.FIRST_THREE_DIGITS_SIZE);
                r / 100 == 0 && t.append("0"), r / 10 == 0 && t.append("0"), t.append(r);
                var n = this.getGeneralDecoder().decodeGeneralPurposeField(Zt.HEADER_SIZE + Ht.GTIN_SIZE + Zt.LAST_DIGIT_SIZE + Zt.FIRST_THREE_DIGITS_SIZE, null);
                return t.append(n.getNewString()), t.toString();
              }
            }]);
            return Zt;
          }(Ht);
          Zt.HEADER_SIZE = 8, Zt.LAST_DIGIT_SIZE = 2, Zt.FIRST_THREE_DIGITS_SIZE = 10;
          var Qt = /*#__PURE__*/function (_Gt2) {
            _inherits(Qt, _Gt2);
            var _super43 = _createSuper(Qt);
            function Qt(t, e, r) {
              var _this28;
              _classCallCheck(this, Qt);
              _this28 = _super43.call(this, t), _this28.dateCode = r, _this28.firstAIdigits = e;
              return _this28;
            }
            _createClass(Qt, [{
              key: "parseInformation",
              value: function parseInformation() {
                if (this.getInformation().getSize() != Qt.HEADER_SIZE + Qt.GTIN_SIZE + Qt.WEIGHT_SIZE + Qt.DATE_SIZE) throw new N();
                var t = new T();
                return this.encodeCompressedGtin(t, Qt.HEADER_SIZE), this.encodeCompressedWeight(t, Qt.HEADER_SIZE + Qt.GTIN_SIZE, Qt.WEIGHT_SIZE), this.encodeCompressedDate(t, Qt.HEADER_SIZE + Qt.GTIN_SIZE + Qt.WEIGHT_SIZE), t.toString();
              }
            }, {
              key: "encodeCompressedDate",
              value: function encodeCompressedDate(t, e) {
                var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, Qt.DATE_SIZE);
                if (38400 == r) return;
                t.append("("), t.append(this.dateCode), t.append(")");
                var n = r % 32;
                r /= 32;
                var i = r % 12 + 1;
                r /= 12;
                var o = r;
                o / 10 == 0 && t.append("0"), t.append(o), i / 10 == 0 && t.append("0"), t.append(i), n / 10 == 0 && t.append("0"), t.append(n);
              }
            }, {
              key: "addWeightCode",
              value: function addWeightCode(t, e) {
                t.append("("), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(")");
              }
            }, {
              key: "checkWeight",
              value: function checkWeight(t) {
                return t % 1e5;
              }
            }]);
            return Qt;
          }(Gt);
          Qt.HEADER_SIZE = 8, Qt.WEIGHT_SIZE = 20, Qt.DATE_SIZE = 16;
          var Kt = /*#__PURE__*/function () {
            function Kt(t, e, r, n) {
              _classCallCheck(this, Kt);
              this.leftchar = t, this.rightchar = e, this.finderpattern = r, this.maybeLast = n;
            }
            _createClass(Kt, [{
              key: "mayBeLast",
              value: function mayBeLast() {
                return this.maybeLast;
              }
            }, {
              key: "getLeftChar",
              value: function getLeftChar() {
                return this.leftchar;
              }
            }, {
              key: "getRightChar",
              value: function getRightChar() {
                return this.rightchar;
              }
            }, {
              key: "getFinderPattern",
              value: function getFinderPattern() {
                return this.finderpattern;
              }
            }, {
              key: "mustBeLast",
              value: function mustBeLast() {
                return null == this.rightchar;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]";
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
              }
            }], [{
              key: "equals",
              value: function equals(t, e) {
                return t instanceof Kt && Kt.equalsOrNull(t.leftchar, e.leftchar) && Kt.equalsOrNull(t.rightchar, e.rightchar) && Kt.equalsOrNull(t.finderpattern, e.finderpattern);
              }
            }, {
              key: "equalsOrNull",
              value: function equalsOrNull(t, e) {
                return null === t ? null === e : Kt.equals(t, e);
              }
            }]);
            return Kt;
          }();
          var qt = /*#__PURE__*/function () {
            function qt(t, e, r) {
              _classCallCheck(this, qt);
              this.pairs = t, this.rowNumber = e, this.wasReversed = r;
            }
            _createClass(qt, [{
              key: "getPairs",
              value: function getPairs() {
                return this.pairs;
              }
            }, {
              key: "getRowNumber",
              value: function getRowNumber() {
                return this.rowNumber;
              }
            }, {
              key: "isReversed",
              value: function isReversed() {
                return this.wasReversed;
              }
            }, {
              key: "isEquivalent",
              value: function isEquivalent(t) {
                return this.checkEqualitity(this, t);
              }
            }, {
              key: "toString",
              value: function toString() {
                return "{ " + this.pairs + " }";
              }
            }, {
              key: "equals",
              value: function equals(t, e) {
                return t instanceof qt && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed;
              }
            }, {
              key: "checkEqualitity",
              value: function checkEqualitity(t, e) {
                if (!t || !e) return;
                var r;
                return t.forEach(function (t, n) {
                  e.forEach(function (e) {
                    t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() && t.getFinderPatter().getValue() === e.getFinderPatter().getValue() && (r = !0);
                  });
                }), r;
              }
            }]);
            return qt;
          }();
          var Jt = /*#__PURE__*/function (_Dt) {
            _inherits(Jt, _Dt);
            var _super44 = _createSuper(Jt);
            function Jt(t) {
              var _this29;
              _classCallCheck(this, Jt);
              _this29 = _super44.apply(this, arguments), _this29.pairs = new Array(Jt.MAX_PAIRS), _this29.rows = new Array(), _this29.startEnd = [2], _this29.verbose = !0 === t;
              return _this29;
            }
            _createClass(Jt, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                this.pairs.length = 0, this.startFromEven = !1;
                try {
                  return Jt.constructResult(this.decodeRow2pairs(t, e));
                } catch (t) {
                  this.verbose && console.log(t);
                }
                return this.pairs.length = 0, this.startFromEven = !0, Jt.constructResult(this.decodeRow2pairs(t, e));
              }
            }, {
              key: "reset",
              value: function reset() {
                this.pairs.length = 0, this.rows.length = 0;
              }
            }, {
              key: "decodeRow2pairs",
              value: function decodeRow2pairs(t, e) {
                var r,
                  n = !1;
                for (; !n;) try {
                  this.pairs.push(this.retrieveNextPair(e, this.pairs, t));
                } catch (t) {
                  if (t instanceof N) {
                    if (!this.pairs.length) throw new N();
                    n = !0;
                  }
                }
                if (this.checkChecksum()) return this.pairs;
                if (r = !!this.rows.length, this.storeRow(t, !1), r) {
                  var _t95 = this.checkRowsBoolean(!1);
                  if (null != _t95) return _t95;
                  if (_t95 = this.checkRowsBoolean(!0), null != _t95) return _t95;
                }
                throw new N();
              }
            }, {
              key: "checkRowsBoolean",
              value: function checkRowsBoolean(t) {
                if (this.rows.length > 25) return this.rows.length = 0, null;
                this.pairs.length = 0, t && (this.rows = this.rows.reverse());
                var e = null;
                try {
                  e = this.checkRows(new Array(), 0);
                } catch (t) {
                  this.verbose && console.log(t);
                }
                return t && (this.rows = this.rows.reverse()), e;
              }
            }, {
              key: "checkRows",
              value: function checkRows(t, e) {
                for (var _r68 = e; _r68 < this.rows.length; _r68++) {
                  var _e85 = this.rows[_r68];
                  this.pairs.length = 0;
                  var _iterator22 = _createForOfIteratorHelper(t),
                    _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _e86 = _step22.value;
                      this.pairs.push(_e86.getPairs());
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                  if (this.pairs.push(_e85.getPairs()), !Jt.isValidSequence(this.pairs)) continue;
                  if (this.checkChecksum()) return this.pairs;
                  var _n48 = new Array(t);
                  _n48.push(_e85);
                  try {
                    return this.checkRows(_n48, _r68 + 1);
                  } catch (t) {
                    this.verbose && console.log(t);
                  }
                }
                throw new N();
              }
            }, {
              key: "storeRow",
              value: function storeRow(t, e) {
                var r = 0,
                  n = !1,
                  i = !1;
                for (; r < this.rows.length;) {
                  var _e87 = this.rows[r];
                  if (_e87.getRowNumber() > t) {
                    i = _e87.isEquivalent(this.pairs);
                    break;
                  }
                  n = _e87.isEquivalent(this.pairs), r++;
                }
                i || n || Jt.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new qt(this.pairs, t, e)), this.removePartialRows(this.pairs, this.rows));
              }
            }, {
              key: "removePartialRows",
              value: function removePartialRows(t, e) {
                var _iterator23 = _createForOfIteratorHelper(e),
                  _step23;
                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var _r69 = _step23.value;
                    if (_r69.getPairs().length !== t.length) {
                      var _iterator24 = _createForOfIteratorHelper(_r69.getPairs()),
                        _step24;
                      try {
                        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                          var _e88 = _step24.value;
                          var _iterator25 = _createForOfIteratorHelper(t),
                            _step25;
                          try {
                            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                              var _r70 = _step25.value;
                              if (Kt.equals(_e88, _r70)) break;
                            }
                          } catch (err) {
                            _iterator25.e(err);
                          } finally {
                            _iterator25.f();
                          }
                        }
                      } catch (err) {
                        _iterator24.e(err);
                      } finally {
                        _iterator24.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }
              }
            }, {
              key: "getRows",
              value: function getRows() {
                return this.rows;
              }
            }, {
              key: "checkChecksum",
              value: function checkChecksum() {
                var t = this.pairs.get(0),
                  e = t.getLeftChar(),
                  r = t.getRightChar();
                if (null == r) return !1;
                var n = r.getChecksumPortion(),
                  i = 2;
                for (var _t96 = 1; _t96 < this.pairs.size(); ++_t96) {
                  var _e89 = this.pairs.get(_t96);
                  n += _e89.getLeftChar().getChecksumPortion(), i++;
                  var _r71 = _e89.getRightChar();
                  null != _r71 && (n += _r71.getChecksumPortion(), i++);
                }
                return n %= 211, 211 * (i - 4) + n == e.getValue();
              }
            }, {
              key: "retrieveNextPair",
              value: function retrieveNextPair(t, e, r) {
                var n,
                  i = e.length % 2 == 0;
                this.startFromEven && (i = !i);
                var o = !0,
                  s = -1;
                do {
                  this.findNextPair(t, e, s), n = this.parseFoundFinderPattern(t, r, i), null == n ? s = Jt.getNextSecondBar(t, this.startEnd[0]) : o = !1;
                } while (o);
                var a,
                  l = this.decodeDataCharacter(t, n, i, !0);
                if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new N();
                try {
                  a = this.decodeDataCharacter(t, n, i, !1);
                } catch (t) {
                  a = null, this.verbose && console.log(t);
                }
                return new Kt(l, a, n, !0);
              }
            }, {
              key: "isEmptyPair",
              value: function isEmptyPair(t) {
                return 0 === t.length;
              }
            }, {
              key: "findNextPair",
              value: function findNextPair(t, e, r) {
                var n = this.getDecodeFinderCounters();
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                var i,
                  o = t.getSize();
                i = r >= 0 ? r : this.isEmptyPair(e) ? 0 : e[e.length - 1].getFinderPattern().getStartEnd()[1];
                var s = e.length % 2 != 0;
                this.startFromEven && (s = !s);
                var a = !1;
                for (; i < o && (a = !t.get(i), a);) i++;
                var l = 0,
                  c = i;
                for (var _e90 = i; _e90 < o; _e90++) if (t.get(_e90) != a) n[l]++;else {
                  if (3 == l) {
                    if (s && Jt.reverseCounters(n), Jt.isFinderPattern(n)) return this.startEnd[0] = c, void (this.startEnd[1] = _e90);
                    s && Jt.reverseCounters(n), c += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, l--;
                  } else l++;
                  n[l] = 1, a = !a;
                }
                throw new N();
              }
            }, {
              key: "parseFoundFinderPattern",
              value: function parseFoundFinderPattern(t, e, r) {
                var n, i, o;
                if (r) {
                  var _e91 = this.startEnd[0] - 1;
                  for (; _e91 >= 0 && !t.get(_e91);) _e91--;
                  _e91++, n = this.startEnd[0] - _e91, i = _e91, o = this.startEnd[1];
                } else i = this.startEnd[0], o = t.getNextUnset(this.startEnd[1] + 1), n = o - this.startEnd[1];
                var s,
                  a = this.getDecodeFinderCounters();
                u.arraycopy(a, 0, a, 1, a.length - 1), a[0] = n;
                try {
                  s = this.parseFinderValue(a, Jt.FINDER_PATTERNS);
                } catch (t) {
                  return null;
                }
                return new Ot(s, [i, o], i, o, e);
              }
            }, {
              key: "decodeDataCharacter",
              value: function decodeDataCharacter(t, e, r, n) {
                var i = this.getDataCharacterCounters();
                for (var _t97 = 0; _t97 < i.length; _t97++) i[_t97] = 0;
                if (n) Jt.recordPatternInReverse(t, e.getStartEnd()[0], i);else {
                  Jt.recordPattern(t, e.getStartEnd()[1], i);
                  for (var _t98 = 0, _e92 = i.length - 1; _t98 < _e92; _t98++, _e92--) {
                    var _r72 = i[_t98];
                    i[_t98] = i[_e92], i[_e92] = _r72;
                  }
                }
                var o = et.sum(new Int32Array(i)) / 17,
                  s = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
                if (Math.abs(o - s) / s > .3) throw new N();
                var a = this.getOddCounts(),
                  l = this.getEvenCounts(),
                  c = this.getOddRoundingErrors(),
                  h = this.getEvenRoundingErrors();
                for (var _t99 = 0; _t99 < i.length; _t99++) {
                  var _e93 = 1 * i[_t99] / o,
                    _r73 = _e93 + .5;
                  if (_r73 < 1) {
                    if (_e93 < .3) throw new N();
                    _r73 = 1;
                  } else if (_r73 > 8) {
                    if (_e93 > 8.7) throw new N();
                    _r73 = 8;
                  }
                  var _n49 = _t99 / 2;
                  0 == (1 & _t99) ? (a[_n49] = _r73, c[_n49] = _e93 - _r73) : (l[_n49] = _r73, h[_n49] = _e93 - _r73);
                }
                this.adjustOddEvenCounts(17);
                var u = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
                  d = 0,
                  g = 0;
                for (var _t100 = a.length - 1; _t100 >= 0; _t100--) {
                  if (Jt.isNotA1left(e, r, n)) {
                    var _e94 = Jt.WEIGHTS[u][2 * _t100];
                    g += a[_t100] * _e94;
                  }
                  d += a[_t100];
                }
                var f = 0;
                for (var _t101 = l.length - 1; _t101 >= 0; _t101--) if (Jt.isNotA1left(e, r, n)) {
                  var _e95 = Jt.WEIGHTS[u][2 * _t101 + 1];
                  f += l[_t101] * _e95;
                }
                var w = g + f;
                if (0 != (1 & d) || d > 13 || d < 4) throw new N();
                var A = (13 - d) / 2,
                  m = Jt.SYMBOL_WIDEST[A],
                  E = 9 - m,
                  C = bt.getRSSvalue(a, m, !0),
                  I = bt.getRSSvalue(l, E, !1),
                  p = Jt.EVEN_TOTAL_SUBSET[A],
                  S = Jt.GSUM[A];
                return new Rt(C * p + I + S, w);
              }
            }, {
              key: "adjustOddEvenCounts",
              value: function adjustOddEvenCounts(t) {
                var e = et.sum(new Int32Array(this.getOddCounts())),
                  r = et.sum(new Int32Array(this.getEvenCounts())),
                  n = !1,
                  i = !1;
                e > 13 ? i = !0 : e < 4 && (n = !0);
                var o = !1,
                  s = !1;
                r > 13 ? s = !0 : r < 4 && (o = !0);
                var a = e + r - t,
                  l = 1 == (1 & e),
                  c = 0 == (1 & r);
                if (1 == a) {
                  if (l) {
                    if (c) throw new N();
                    i = !0;
                  } else {
                    if (!c) throw new N();
                    s = !0;
                  }
                } else if (-1 == a) {
                  if (l) {
                    if (c) throw new N();
                    n = !0;
                  } else {
                    if (!c) throw new N();
                    o = !0;
                  }
                } else {
                  if (0 != a) throw new N();
                  if (l) {
                    if (!c) throw new N();
                    e < r ? (n = !0, s = !0) : (i = !0, o = !0);
                  } else if (c) throw new N();
                }
                if (n) {
                  if (i) throw new N();
                  Jt.increment(this.getOddCounts(), this.getOddRoundingErrors());
                }
                if (i && Jt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o) {
                  if (s) throw new N();
                  Jt.increment(this.getEvenCounts(), this.getOddRoundingErrors());
                }
                s && Jt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
              }
            }], [{
              key: "isValidSequence",
              value: function isValidSequence(t) {
                var _iterator26 = _createForOfIteratorHelper(Jt.FINDER_PATTERN_SEQUENCES),
                  _step26;
                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _e96 = _step26.value;
                    if (t.length > _e96.length) continue;
                    var _r74 = !0;
                    for (var _n50 = 0; _n50 < t.length; _n50++) if (t[_n50].getFinderPattern().getValue() != _e96[_n50]) {
                      _r74 = !1;
                      break;
                    }
                    if (_r74) return !0;
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }
                return !1;
              }
            }, {
              key: "isPartialRow",
              value: function isPartialRow(t, e) {
                var _iterator27 = _createForOfIteratorHelper(e),
                  _step27;
                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var _r75 = _step27.value;
                    var _e97 = !0;
                    var _iterator28 = _createForOfIteratorHelper(t),
                      _step28;
                    try {
                      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        var _n51 = _step28.value;
                        var _t102 = !1;
                        var _iterator29 = _createForOfIteratorHelper(_r75.getPairs()),
                          _step29;
                        try {
                          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                            var _e98 = _step29.value;
                            if (_n51.equals(_e98)) {
                              _t102 = !0;
                              break;
                            }
                          }
                        } catch (err) {
                          _iterator29.e(err);
                        } finally {
                          _iterator29.f();
                        }
                        if (!_t102) {
                          _e97 = !1;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator28.e(err);
                    } finally {
                      _iterator28.f();
                    }
                    if (_e97) return !0;
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }
                return !1;
              }
            }, {
              key: "constructResult",
              value: function constructResult(t) {
                var e = function (t) {
                    try {
                      if (t.get(1)) return new Vt(t);
                      if (!t.get(2)) return new zt(t);
                      switch (kt.extractNumericValueFromBitArray(t, 1, 4)) {
                        case 4:
                          return new Xt(t);
                        case 5:
                          return new Wt(t);
                      }
                      switch (kt.extractNumericValueFromBitArray(t, 1, 5)) {
                        case 12:
                          return new jt(t);
                        case 13:
                          return new Zt(t);
                      }
                      switch (kt.extractNumericValueFromBitArray(t, 1, 7)) {
                        case 56:
                          return new Qt(t, "310", "11");
                        case 57:
                          return new Qt(t, "320", "11");
                        case 58:
                          return new Qt(t, "310", "13");
                        case 59:
                          return new Qt(t, "320", "13");
                        case 60:
                          return new Qt(t, "310", "15");
                        case 61:
                          return new Qt(t, "320", "15");
                        case 62:
                          return new Qt(t, "310", "17");
                        case 63:
                          return new Qt(t, "320", "17");
                      }
                    } catch (e) {
                      throw console.log(e), new J("unknown decoder: " + t);
                    }
                  }( /*#__PURE__*/function () {
                    function _class() {
                      _classCallCheck(this, _class);
                    }
                    _createClass(_class, null, [{
                      key: "buildBitArray",
                      value: function buildBitArray(t) {
                        var e = 2 * t.length - 1;
                        null == t[t.length - 1].getRightChar() && (e -= 1);
                        var r = new A(12 * e),
                          n = 0,
                          i = t[0].getRightChar().getValue();
                        for (var _t103 = 11; _t103 >= 0; --_t103) 0 != (i & 1 << _t103) && r.set(n), n++;
                        for (var _e99 = 1; _e99 < t.length; ++_e99) {
                          var _i45 = t[_e99],
                            _o40 = _i45.getLeftChar().getValue();
                          for (var _t104 = 11; _t104 >= 0; --_t104) 0 != (_o40 & 1 << _t104) && r.set(n), n++;
                          if (null != _i45.getRightChar()) {
                            var _t105 = _i45.getRightChar().getValue();
                            for (var _e100 = 11; _e100 >= 0; --_e100) 0 != (_t105 & 1 << _e100) && r.set(n), n++;
                          }
                        }
                        return r;
                      }
                    }]);
                    return _class;
                  }().buildBitArray(t)).parseInformation(),
                  r = t[0].getFinderPattern().getResultPoints(),
                  n = t[t.length - 1].getFinderPattern().getResultPoints(),
                  i = [r[0], r[1], n[0], n[1]];
                return new F(e, null, null, i, k.RSS_EXPANDED, null);
              }
            }, {
              key: "getNextSecondBar",
              value: function getNextSecondBar(t, e) {
                var r;
                return t.get(e) ? (r = t.getNextUnset(e), r = t.getNextSet(r)) : (r = t.getNextSet(e), r = t.getNextUnset(r)), r;
              }
            }, {
              key: "reverseCounters",
              value: function reverseCounters(t) {
                var e = t.length;
                for (var _r76 = 0; _r76 < e / 2; ++_r76) {
                  var _n52 = t[_r76];
                  t[_r76] = t[e - _r76 - 1], t[e - _r76 - 1] = _n52;
                }
              }
            }, {
              key: "isNotA1left",
              value: function isNotA1left(t, e, r) {
                return !(0 == t.getValue() && e && r);
              }
            }]);
            return Jt;
          }(Dt);
          Jt.SYMBOL_WIDEST = [7, 5, 4, 3, 1], Jt.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], Jt.GSUM = [0, 348, 1388, 2948, 3988], Jt.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], Jt.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]], Jt.FINDER_PAT_A = 0, Jt.FINDER_PAT_B = 1, Jt.FINDER_PAT_C = 2, Jt.FINDER_PAT_D = 3, Jt.FINDER_PAT_E = 4, Jt.FINDER_PAT_F = 5, Jt.FINDER_PATTERN_SEQUENCES = [[Jt.FINDER_PAT_A, Jt.FINDER_PAT_A], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_C, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_E, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D, Jt.FINDER_PAT_C], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_E, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D, Jt.FINDER_PAT_D, Jt.FINDER_PAT_F], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_E, Jt.FINDER_PAT_B, Jt.FINDER_PAT_D, Jt.FINDER_PAT_E, Jt.FINDER_PAT_F, Jt.FINDER_PAT_F], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B, Jt.FINDER_PAT_C, Jt.FINDER_PAT_C, Jt.FINDER_PAT_D, Jt.FINDER_PAT_D], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B, Jt.FINDER_PAT_C, Jt.FINDER_PAT_C, Jt.FINDER_PAT_D, Jt.FINDER_PAT_E, Jt.FINDER_PAT_E], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B, Jt.FINDER_PAT_C, Jt.FINDER_PAT_C, Jt.FINDER_PAT_D, Jt.FINDER_PAT_E, Jt.FINDER_PAT_F, Jt.FINDER_PAT_F], [Jt.FINDER_PAT_A, Jt.FINDER_PAT_A, Jt.FINDER_PAT_B, Jt.FINDER_PAT_B, Jt.FINDER_PAT_C, Jt.FINDER_PAT_D, Jt.FINDER_PAT_D, Jt.FINDER_PAT_E, Jt.FINDER_PAT_E, Jt.FINDER_PAT_F, Jt.FINDER_PAT_F]], Jt.MAX_PAIRS = 11;
          var $t = /*#__PURE__*/function (_Rt) {
            _inherits($t, _Rt);
            var _super45 = _createSuper($t);
            function $t(t, e, r) {
              var _this30;
              _classCallCheck(this, $t);
              _this30 = _super45.call(this, t, e), _this30.count = 0, _this30.finderPattern = r;
              return _this30;
            }
            _createClass($t, [{
              key: "getFinderPattern",
              value: function getFinderPattern() {
                return this.finderPattern;
              }
            }, {
              key: "getCount",
              value: function getCount() {
                return this.count;
              }
            }, {
              key: "incrementCount",
              value: function incrementCount() {
                this.count++;
              }
            }]);
            return $t;
          }(Rt);
          var te = /*#__PURE__*/function (_Dt2) {
            _inherits(te, _Dt2);
            var _super46 = _createSuper(te);
            function te() {
              var _this31;
              _classCallCheck(this, te);
              _this31 = _super46.apply(this, arguments), _this31.possibleLeftPairs = [], _this31.possibleRightPairs = [];
              return _this31;
            }
            _createClass(te, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                var n = this.decodePair(e, !1, t, r);
                te.addOrTally(this.possibleLeftPairs, n), e.reverse();
                var i = this.decodePair(e, !0, t, r);
                te.addOrTally(this.possibleRightPairs, i), e.reverse();
                var _iterator30 = _createForOfIteratorHelper(this.possibleLeftPairs),
                  _step30;
                try {
                  for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                    var _t106 = _step30.value;
                    if (_t106.getCount() > 1) {
                      var _iterator31 = _createForOfIteratorHelper(this.possibleRightPairs),
                        _step31;
                      try {
                        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                          var _e101 = _step31.value;
                          if (_e101.getCount() > 1 && te.checkChecksum(_t106, _e101)) return te.constructResult(_t106, _e101);
                        }
                      } catch (err) {
                        _iterator31.e(err);
                      } finally {
                        _iterator31.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator30.e(err);
                } finally {
                  _iterator30.f();
                }
                throw new N();
              }
            }, {
              key: "reset",
              value: function reset() {
                this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
              }
            }, {
              key: "decodePair",
              value: function decodePair(t, e, r, n) {
                try {
                  var _i46 = this.findFinderPattern(t, e),
                    _o41 = this.parseFoundFinderPattern(t, r, e, _i46),
                    _s27 = null == n ? null : n.get(E.NEED_RESULT_POINT_CALLBACK);
                  if (null != _s27) {
                    var _n53 = (_i46[0] + _i46[1]) / 2;
                    e && (_n53 = t.getSize() - 1 - _n53), _s27.foundPossibleResultPoint(new nt(_n53, r));
                  }
                  var _a17 = this.decodeDataCharacter(t, _o41, !0),
                    _l12 = this.decodeDataCharacter(t, _o41, !1);
                  return new $t(1597 * _a17.getValue() + _l12.getValue(), _a17.getChecksumPortion() + 4 * _l12.getChecksumPortion(), _o41);
                } catch (t) {
                  return null;
                }
              }
            }, {
              key: "decodeDataCharacter",
              value: function decodeDataCharacter(t, e, r) {
                var n = this.getDataCharacterCounters();
                for (var _t107 = 0; _t107 < n.length; _t107++) n[_t107] = 0;
                if (r) ft.recordPatternInReverse(t, e.getStartEnd()[0], n);else {
                  ft.recordPattern(t, e.getStartEnd()[1] + 1, n);
                  for (var _t108 = 0, _e102 = n.length - 1; _t108 < _e102; _t108++, _e102--) {
                    var _r77 = n[_t108];
                    n[_t108] = n[_e102], n[_e102] = _r77;
                  }
                }
                var i = r ? 16 : 15,
                  o = et.sum(new Int32Array(n)) / i,
                  s = this.getOddCounts(),
                  a = this.getEvenCounts(),
                  l = this.getOddRoundingErrors(),
                  c = this.getEvenRoundingErrors();
                for (var _t109 = 0; _t109 < n.length; _t109++) {
                  var _e103 = n[_t109] / o,
                    _r78 = Math.floor(_e103 + .5);
                  _r78 < 1 ? _r78 = 1 : _r78 > 8 && (_r78 = 8);
                  var _i47 = Math.floor(_t109 / 2);
                  0 == (1 & _t109) ? (s[_i47] = _r78, l[_i47] = _e103 - _r78) : (a[_i47] = _r78, c[_i47] = _e103 - _r78);
                }
                this.adjustOddEvenCounts(r, i);
                var h = 0,
                  u = 0;
                for (var _t110 = s.length - 1; _t110 >= 0; _t110--) u *= 9, u += s[_t110], h += s[_t110];
                var d = 0,
                  g = 0;
                for (var _t111 = a.length - 1; _t111 >= 0; _t111--) d *= 9, d += a[_t111], g += a[_t111];
                var f = u + 3 * d;
                if (r) {
                  if (0 != (1 & h) || h > 12 || h < 4) throw new N();
                  var _t112 = (12 - h) / 2,
                    _e104 = te.OUTSIDE_ODD_WIDEST[_t112],
                    _r79 = 9 - _e104,
                    _n54 = bt.getRSSvalue(s, _e104, !1),
                    _i48 = bt.getRSSvalue(a, _r79, !0),
                    _o42 = te.OUTSIDE_EVEN_TOTAL_SUBSET[_t112],
                    _l13 = te.OUTSIDE_GSUM[_t112];
                  return new Rt(_n54 * _o42 + _i48 + _l13, f);
                }
                {
                  if (0 != (1 & g) || g > 10 || g < 4) throw new N();
                  var _t113 = (10 - g) / 2,
                    _e105 = te.INSIDE_ODD_WIDEST[_t113],
                    _r80 = 9 - _e105,
                    _n55 = bt.getRSSvalue(s, _e105, !0),
                    _i49 = bt.getRSSvalue(a, _r80, !1),
                    _o43 = te.INSIDE_ODD_TOTAL_SUBSET[_t113],
                    _l14 = te.INSIDE_GSUM[_t113];
                  return new Rt(_i49 * _o43 + _n55 + _l14, f);
                }
              }
            }, {
              key: "findFinderPattern",
              value: function findFinderPattern(t, e) {
                var r = this.getDecodeFinderCounters();
                r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
                var n = t.getSize(),
                  i = !1,
                  o = 0;
                for (; o < n && (i = !t.get(o), e !== i);) o++;
                var s = 0,
                  a = o;
                for (var _e106 = o; _e106 < n; _e106++) if (t.get(_e106) !== i) r[s]++;else {
                  if (3 === s) {
                    if (Dt.isFinderPattern(r)) return [a, _e106];
                    a += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, s--;
                  } else s++;
                  r[s] = 1, i = !i;
                }
                throw new N();
              }
            }, {
              key: "parseFoundFinderPattern",
              value: function parseFoundFinderPattern(t, e, r, n) {
                var i = t.get(n[0]),
                  o = n[0] - 1;
                for (; o >= 0 && i !== t.get(o);) o--;
                o++;
                var s = n[0] - o,
                  a = this.getDecodeFinderCounters(),
                  l = new Int32Array(a.length);
                u.arraycopy(a, 0, l, 1, a.length - 1), l[0] = s;
                var c = this.parseFinderValue(l, te.FINDER_PATTERNS);
                var h = o,
                  d = n[1];
                return r && (h = t.getSize() - 1 - h, d = t.getSize() - 1 - d), new Ot(c, [o, n[1]], h, d, e);
              }
            }, {
              key: "adjustOddEvenCounts",
              value: function adjustOddEvenCounts(t, e) {
                var r = et.sum(new Int32Array(this.getOddCounts())),
                  n = et.sum(new Int32Array(this.getEvenCounts())),
                  i = !1,
                  o = !1,
                  s = !1,
                  a = !1;
                t ? (r > 12 ? o = !0 : r < 4 && (i = !0), n > 12 ? a = !0 : n < 4 && (s = !0)) : (r > 11 ? o = !0 : r < 5 && (i = !0), n > 10 ? a = !0 : n < 4 && (s = !0));
                var l = r + n - e,
                  c = (1 & r) == (t ? 1 : 0),
                  h = 1 == (1 & n);
                if (1 === l) {
                  if (c) {
                    if (h) throw new N();
                    o = !0;
                  } else {
                    if (!h) throw new N();
                    a = !0;
                  }
                } else if (-1 === l) {
                  if (c) {
                    if (h) throw new N();
                    i = !0;
                  } else {
                    if (!h) throw new N();
                    s = !0;
                  }
                } else {
                  if (0 !== l) throw new N();
                  if (c) {
                    if (!h) throw new N();
                    r < n ? (i = !0, a = !0) : (o = !0, s = !0);
                  } else if (h) throw new N();
                }
                if (i) {
                  if (o) throw new N();
                  Dt.increment(this.getOddCounts(), this.getOddRoundingErrors());
                }
                if (o && Dt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s) {
                  if (a) throw new N();
                  Dt.increment(this.getEvenCounts(), this.getOddRoundingErrors());
                }
                a && Dt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
              }
            }], [{
              key: "addOrTally",
              value: function addOrTally(t, e) {
                if (null == e) return;
                var r = !1;
                var _iterator32 = _createForOfIteratorHelper(t),
                  _step32;
                try {
                  for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                    var _n56 = _step32.value;
                    if (_n56.getValue() === e.getValue()) {
                      _n56.incrementCount(), r = !0;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator32.e(err);
                } finally {
                  _iterator32.f();
                }
                r || t.push(e);
              }
            }, {
              key: "constructResult",
              value: function constructResult(t, e) {
                var r = 4537077 * t.getValue() + e.getValue(),
                  n = new String(r).toString(),
                  i = new T();
                for (var _t114 = 13 - n.length; _t114 > 0; _t114--) i.append("0");
                i.append(n);
                var o = 0;
                for (var _t115 = 0; _t115 < 13; _t115++) {
                  var _e107 = i.charAt(_t115).charCodeAt(0) - "0".charCodeAt(0);
                  o += 0 == (1 & _t115) ? 3 * _e107 : _e107;
                }
                o = 10 - o % 10, 10 === o && (o = 0), i.append(o.toString());
                var s = t.getFinderPattern().getResultPoints(),
                  a = e.getFinderPattern().getResultPoints();
                return new F(i.toString(), null, 0, [s[0], s[1], a[0], a[1]], k.RSS_14, new Date().getTime());
              }
            }, {
              key: "checkChecksum",
              value: function checkChecksum(t, e) {
                var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                  n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                return n > 72 && n--, n > 8 && n--, r === n;
              }
            }]);
            return te;
          }(Dt);
          te.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], te.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], te.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], te.INSIDE_GSUM = [0, 336, 1036, 1516], te.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], te.INSIDE_ODD_WIDEST = [2, 4, 6, 8], te.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])];
          var ee = /*#__PURE__*/function (_ft7) {
            _inherits(ee, _ft7);
            var _super47 = _createSuper(ee);
            function ee(t, e) {
              var _this32;
              _classCallCheck(this, ee);
              _this32 = _super47.call(this), _this32.readers = [], _this32.verbose = !0 === e;
              var r = t ? t.get(E.POSSIBLE_FORMATS) : null,
                n = t && void 0 !== t.get(E.ASSUME_CODE_39_CHECK_DIGIT);
              r && ((r.includes(k.EAN_13) || r.includes(k.UPC_A) || r.includes(k.EAN_8) || r.includes(k.UPC_E)) && _this32.readers.push(new Mt(t)), r.includes(k.CODE_39) && _this32.readers.push(new At(n)), r.includes(k.CODE_128) && _this32.readers.push(new wt()), r.includes(k.ITF) && _this32.readers.push(new mt()), r.includes(k.RSS_14) && _this32.readers.push(new te()), r.includes(k.RSS_EXPANDED) && _this32.readers.push(new Jt(_this32.verbose))), 0 === _this32.readers.length && (_this32.readers.push(new Mt(t)), _this32.readers.push(new At()), _this32.readers.push(new Mt(t)), _this32.readers.push(new wt()), _this32.readers.push(new mt()), _this32.readers.push(new te()), _this32.readers.push(new Jt(_this32.verbose)));
              return _this32;
            }
            _createClass(ee, [{
              key: "decodeRow",
              value: function decodeRow(t, e, r) {
                for (var _n57 = 0; _n57 < this.readers.length; _n57++) try {
                  return this.readers[_n57].decodeRow(t, e, r);
                } catch (t) {}
                throw new N();
              }
            }, {
              key: "reset",
              value: function reset() {
                this.readers.forEach(function (t) {
                  return t.reset();
                });
              }
            }]);
            return ee;
          }(ft);
          var re = /*#__PURE__*/function () {
            function re(t, e, r) {
              _classCallCheck(this, re);
              this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r);
            }
            _createClass(re, [{
              key: "getECCodewords",
              value: function getECCodewords() {
                return this.ecCodewords;
              }
            }, {
              key: "getECBlocks",
              value: function getECBlocks() {
                return this.ecBlocks;
              }
            }]);
            return re;
          }();
          var ne = /*#__PURE__*/function () {
            function ne(t, e) {
              _classCallCheck(this, ne);
              this.count = t, this.dataCodewords = e;
            }
            _createClass(ne, [{
              key: "getCount",
              value: function getCount() {
                return this.count;
              }
            }, {
              key: "getDataCodewords",
              value: function getDataCodewords() {
                return this.dataCodewords;
              }
            }]);
            return ne;
          }();
          var ie = /*#__PURE__*/function () {
            function ie(t, e, r, n, i, o) {
              _classCallCheck(this, ie);
              this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = i, this.ecBlocks = o;
              var s = 0;
              var a = o.getECCodewords(),
                l = o.getECBlocks();
              var _iterator33 = _createForOfIteratorHelper(l),
                _step33;
              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var _t116 = _step33.value;
                  s += _t116.getCount() * (_t116.getDataCodewords() + a);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
              this.totalCodewords = s;
            }
            _createClass(ie, [{
              key: "getVersionNumber",
              value: function getVersionNumber() {
                return this.versionNumber;
              }
            }, {
              key: "getSymbolSizeRows",
              value: function getSymbolSizeRows() {
                return this.symbolSizeRows;
              }
            }, {
              key: "getSymbolSizeColumns",
              value: function getSymbolSizeColumns() {
                return this.symbolSizeColumns;
              }
            }, {
              key: "getDataRegionSizeRows",
              value: function getDataRegionSizeRows() {
                return this.dataRegionSizeRows;
              }
            }, {
              key: "getDataRegionSizeColumns",
              value: function getDataRegionSizeColumns() {
                return this.dataRegionSizeColumns;
              }
            }, {
              key: "getTotalCodewords",
              value: function getTotalCodewords() {
                return this.totalCodewords;
              }
            }, {
              key: "getECBlocks",
              value: function getECBlocks() {
                return this.ecBlocks;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "" + this.versionNumber;
              }
            }], [{
              key: "getVersionForDimensions",
              value: function getVersionForDimensions(t, e) {
                if (0 != (1 & t) || 0 != (1 & e)) throw new C();
                var _iterator34 = _createForOfIteratorHelper(ie.VERSIONS),
                  _step34;
                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    var _r81 = _step34.value;
                    if (_r81.symbolSizeRows === t && _r81.symbolSizeColumns === e) return _r81;
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }
                throw new C();
              }
            }, {
              key: "buildVersions",
              value: function buildVersions() {
                return [new ie(1, 10, 10, 8, 8, new re(5, new ne(1, 3))), new ie(2, 12, 12, 10, 10, new re(7, new ne(1, 5))), new ie(3, 14, 14, 12, 12, new re(10, new ne(1, 8))), new ie(4, 16, 16, 14, 14, new re(12, new ne(1, 12))), new ie(5, 18, 18, 16, 16, new re(14, new ne(1, 18))), new ie(6, 20, 20, 18, 18, new re(18, new ne(1, 22))), new ie(7, 22, 22, 20, 20, new re(20, new ne(1, 30))), new ie(8, 24, 24, 22, 22, new re(24, new ne(1, 36))), new ie(9, 26, 26, 24, 24, new re(28, new ne(1, 44))), new ie(10, 32, 32, 14, 14, new re(36, new ne(1, 62))), new ie(11, 36, 36, 16, 16, new re(42, new ne(1, 86))), new ie(12, 40, 40, 18, 18, new re(48, new ne(1, 114))), new ie(13, 44, 44, 20, 20, new re(56, new ne(1, 144))), new ie(14, 48, 48, 22, 22, new re(68, new ne(1, 174))), new ie(15, 52, 52, 24, 24, new re(42, new ne(2, 102))), new ie(16, 64, 64, 14, 14, new re(56, new ne(2, 140))), new ie(17, 72, 72, 16, 16, new re(36, new ne(4, 92))), new ie(18, 80, 80, 18, 18, new re(48, new ne(4, 114))), new ie(19, 88, 88, 20, 20, new re(56, new ne(4, 144))), new ie(20, 96, 96, 22, 22, new re(68, new ne(4, 174))), new ie(21, 104, 104, 24, 24, new re(56, new ne(6, 136))), new ie(22, 120, 120, 18, 18, new re(68, new ne(6, 175))), new ie(23, 132, 132, 20, 20, new re(62, new ne(8, 163))), new ie(24, 144, 144, 22, 22, new re(62, new ne(8, 156), new ne(2, 155))), new ie(25, 8, 18, 6, 16, new re(7, new ne(1, 5))), new ie(26, 8, 32, 6, 14, new re(11, new ne(1, 10))), new ie(27, 12, 26, 10, 24, new re(14, new ne(1, 16))), new ie(28, 12, 36, 10, 16, new re(18, new ne(1, 22))), new ie(29, 16, 36, 14, 16, new re(24, new ne(1, 32))), new ie(30, 16, 48, 14, 22, new re(28, new ne(1, 49)))];
              }
            }]);
            return ie;
          }();
          ie.VERSIONS = ie.buildVersions();
          var oe = /*#__PURE__*/function () {
            function oe(t) {
              _classCallCheck(this, oe);
              var e = t.getHeight();
              if (e < 8 || e > 144 || 0 != (1 & e)) throw new C();
              this.version = oe.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new y(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
            }
            _createClass(oe, [{
              key: "getVersion",
              value: function getVersion() {
                return this.version;
              }
            }, {
              key: "readCodewords",
              value: function readCodewords() {
                var t = new Int8Array(this.version.getTotalCodewords());
                var e = 0,
                  r = 4,
                  n = 0;
                var i = this.mappingBitMatrix.getHeight(),
                  o = this.mappingBitMatrix.getWidth();
                var s = !1,
                  a = !1,
                  l = !1,
                  c = !1;
                do {
                  if (r !== i || 0 !== n || s) {
                    if (r !== i - 2 || 0 !== n || 0 == (3 & o) || a) {
                      if (r !== i + 4 || 2 !== n || 0 != (7 & o) || l) {
                        if (r !== i - 2 || 0 !== n || 4 != (7 & o) || c) {
                          do {
                            r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r -= 2, n += 2;
                          } while (r >= 0 && n < o);
                          r += 1, n += 3;
                          do {
                            r >= 0 && n < o && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r += 2, n -= 2;
                          } while (r < i && n >= 0);
                          r += 3, n += 1;
                        } else t[e++] = 255 & this.readCorner4(i, o), r -= 2, n += 2, c = !0;
                      } else t[e++] = 255 & this.readCorner3(i, o), r -= 2, n += 2, l = !0;
                    } else t[e++] = 255 & this.readCorner2(i, o), r -= 2, n += 2, a = !0;
                  } else t[e++] = 255 & this.readCorner1(i, o), r -= 2, n += 2, s = !0;
                } while (r < i || n < o);
                if (e !== this.version.getTotalCodewords()) throw new C();
                return t;
              }
            }, {
              key: "readModule",
              value: function readModule(t, e, r, n) {
                return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix.get(e, t);
              }
            }, {
              key: "readUtah",
              value: function readUtah(t, e, r, n) {
                var i = 0;
                return this.readModule(t - 2, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 2, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t, e, r, n) && (i |= 1), i;
              }
            }, {
              key: "readCorner1",
              value: function readCorner1(t, e) {
                var r = 0;
                return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r;
              }
            }, {
              key: "readCorner2",
              value: function readCorner2(t, e) {
                var r = 0;
                return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r;
              }
            }, {
              key: "readCorner3",
              value: function readCorner3(t, e) {
                var r = 0;
                return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r;
              }
            }, {
              key: "readCorner4",
              value: function readCorner4(t, e) {
                var r = 0;
                return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r;
              }
            }, {
              key: "extractDataRegion",
              value: function extractDataRegion(t) {
                var e = this.version.getSymbolSizeRows(),
                  r = this.version.getSymbolSizeColumns();
                if (t.getHeight() !== e) throw new a("Dimension of bitMatrix must match the version size");
                var n = this.version.getDataRegionSizeRows(),
                  i = this.version.getDataRegionSizeColumns(),
                  o = e / n | 0,
                  s = r / i | 0,
                  l = new y(s * i, o * n);
                for (var _e108 = 0; _e108 < o; ++_e108) {
                  var _r82 = _e108 * n;
                  for (var _o44 = 0; _o44 < s; ++_o44) {
                    var _s28 = _o44 * i;
                    for (var _a18 = 0; _a18 < n; ++_a18) {
                      var _c7 = _e108 * (n + 2) + 1 + _a18,
                        _h6 = _r82 + _a18;
                      for (var _e109 = 0; _e109 < i; ++_e109) {
                        var _r83 = _o44 * (i + 2) + 1 + _e109;
                        if (t.get(_r83, _c7)) {
                          var _t117 = _s28 + _e109;
                          l.set(_t117, _h6);
                        }
                      }
                    }
                  }
                }
                return l;
              }
            }], [{
              key: "readVersion",
              value: function readVersion(t) {
                var e = t.getHeight(),
                  r = t.getWidth();
                return ie.getVersionForDimensions(e, r);
              }
            }]);
            return oe;
          }();
          var se = /*#__PURE__*/function () {
            function se(t, e) {
              _classCallCheck(this, se);
              this.numDataCodewords = t, this.codewords = e;
            }
            _createClass(se, [{
              key: "getNumDataCodewords",
              value: function getNumDataCodewords() {
                return this.numDataCodewords;
              }
            }, {
              key: "getCodewords",
              value: function getCodewords() {
                return this.codewords;
              }
            }], [{
              key: "getDataBlocks",
              value: function getDataBlocks(t, e) {
                var r = e.getECBlocks();
                var n = 0;
                var i = r.getECBlocks();
                var _iterator35 = _createForOfIteratorHelper(i),
                  _step35;
                try {
                  for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                    var _t118 = _step35.value;
                    n += _t118.getCount();
                  }
                } catch (err) {
                  _iterator35.e(err);
                } finally {
                  _iterator35.f();
                }
                var o = new Array(n);
                var s = 0;
                var _iterator36 = _createForOfIteratorHelper(i),
                  _step36;
                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var _t119 = _step36.value;
                    for (var _e113 = 0; _e113 < _t119.getCount(); _e113++) {
                      var _e114 = _t119.getDataCodewords(),
                        _n59 = r.getECCodewords() + _e114;
                      o[s++] = new se(_e114, new Uint8Array(_n59));
                    }
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }
                var l = o[0].codewords.length - r.getECCodewords(),
                  c = l - 1;
                var h = 0;
                for (var _e110 = 0; _e110 < c; _e110++) for (var _r84 = 0; _r84 < s; _r84++) o[_r84].codewords[_e110] = t[h++];
                var u = 24 === e.getVersionNumber(),
                  d = u ? 8 : s;
                for (var _e111 = 0; _e111 < d; _e111++) o[_e111].codewords[l - 1] = t[h++];
                var g = o[0].codewords.length;
                for (var _e112 = l; _e112 < g; _e112++) for (var _r85 = 0; _r85 < s; _r85++) {
                  var _n58 = u ? (_r85 + 8) % s : _r85,
                    _i50 = u && _n58 > 7 ? _e112 - 1 : _e112;
                  o[_n58].codewords[_i50] = t[h++];
                }
                if (h !== t.length) throw new a();
                return o;
              }
            }]);
            return se;
          }();
          var ae = /*#__PURE__*/function () {
            function ae(t) {
              _classCallCheck(this, ae);
              this.bytes = t, this.byteOffset = 0, this.bitOffset = 0;
            }
            _createClass(ae, [{
              key: "getBitOffset",
              value: function getBitOffset() {
                return this.bitOffset;
              }
            }, {
              key: "getByteOffset",
              value: function getByteOffset() {
                return this.byteOffset;
              }
            }, {
              key: "readBits",
              value: function readBits(t) {
                if (t < 1 || t > 32 || t > this.available()) throw new a("" + t);
                var e = 0,
                  r = this.bitOffset,
                  n = this.byteOffset;
                var i = this.bytes;
                if (r > 0) {
                  var _o45 = 8 - r,
                    _s29 = t < _o45 ? t : _o45,
                    _a19 = _o45 - _s29,
                    _l15 = 255 >> 8 - _s29 << _a19;
                  e = (i[n] & _l15) >> _a19, t -= _s29, r += _s29, 8 === r && (r = 0, n++);
                }
                if (t > 0) {
                  for (; t >= 8;) e = e << 8 | 255 & i[n], n++, t -= 8;
                  if (t > 0) {
                    var _o46 = 8 - t,
                      _s30 = 255 >> _o46 << _o46;
                    e = e << t | (i[n] & _s30) >> _o46, r += t;
                  }
                }
                return this.bitOffset = r, this.byteOffset = n, e;
              }
            }, {
              key: "available",
              value: function available() {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
              }
            }]);
            return ae;
          }();
          !function (t) {
            t[t.PAD_ENCODE = 0] = "PAD_ENCODE", t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE", t[t.C40_ENCODE = 2] = "C40_ENCODE", t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE", t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE";
          }(H || (H = {}));
          var le = /*#__PURE__*/function () {
            function le() {
              _classCallCheck(this, le);
            }
            _createClass(le, null, [{
              key: "decode",
              value: function decode(t) {
                var e = new ae(t),
                  r = new T(),
                  n = new T(),
                  i = new Array();
                var o = H.ASCII_ENCODE;
                do {
                  if (o === H.ASCII_ENCODE) o = this.decodeAsciiSegment(e, r, n);else {
                    switch (o) {
                      case H.C40_ENCODE:
                        this.decodeC40Segment(e, r);
                        break;
                      case H.TEXT_ENCODE:
                        this.decodeTextSegment(e, r);
                        break;
                      case H.ANSIX12_ENCODE:
                        this.decodeAnsiX12Segment(e, r);
                        break;
                      case H.EDIFACT_ENCODE:
                        this.decodeEdifactSegment(e, r);
                        break;
                      case H.BASE256_ENCODE:
                        this.decodeBase256Segment(e, r, i);
                        break;
                      default:
                        throw new C();
                    }
                    o = H.ASCII_ENCODE;
                  }
                } while (o !== H.PAD_ENCODE && e.available() > 0);
                return n.length() > 0 && r.append(n.toString()), new W(t, r.toString(), 0 === i.length ? null : i, null);
              }
            }, {
              key: "decodeAsciiSegment",
              value: function decodeAsciiSegment(t, e, r) {
                var n = !1;
                do {
                  var _i51 = t.readBits(8);
                  if (0 === _i51) throw new C();
                  if (_i51 <= 128) return n && (_i51 += 128), e.append(String.fromCharCode(_i51 - 1)), H.ASCII_ENCODE;
                  if (129 === _i51) return H.PAD_ENCODE;
                  if (_i51 <= 229) {
                    var _t120 = _i51 - 130;
                    _t120 < 10 && e.append("0"), e.append("" + _t120);
                  } else switch (_i51) {
                    case 230:
                      return H.C40_ENCODE;
                    case 231:
                      return H.BASE256_ENCODE;
                    case 232:
                      e.append(String.fromCharCode(29));
                      break;
                    case 233:
                    case 234:
                      break;
                    case 235:
                      n = !0;
                      break;
                    case 236:
                      e.append("[)>05"), r.insert(0, "");
                      break;
                    case 237:
                      e.append("[)>06"), r.insert(0, "");
                      break;
                    case 238:
                      return H.ANSIX12_ENCODE;
                    case 239:
                      return H.TEXT_ENCODE;
                    case 240:
                      return H.EDIFACT_ENCODE;
                    case 241:
                      break;
                    default:
                      if (254 !== _i51 || 0 !== t.available()) throw new C();
                  }
                } while (t.available() > 0);
                return H.ASCII_ENCODE;
              }
            }, {
              key: "decodeC40Segment",
              value: function decodeC40Segment(t, e) {
                var r = !1;
                var n = [];
                var i = 0;
                do {
                  if (8 === t.available()) return;
                  var _o47 = t.readBits(8);
                  if (254 === _o47) return;
                  this.parseTwoBytes(_o47, t.readBits(8), n);
                  for (var _t121 = 0; _t121 < 3; _t121++) {
                    var _o48 = n[_t121];
                    switch (i) {
                      case 0:
                        if (_o48 < 3) i = _o48 + 1;else {
                          if (!(_o48 < this.C40_BASIC_SET_CHARS.length)) throw new C();
                          {
                            var _t122 = this.C40_BASIC_SET_CHARS[_o48];
                            r ? (e.append(String.fromCharCode(_t122.charCodeAt(0) + 128)), r = !1) : e.append(_t122);
                          }
                        }
                        break;
                      case 1:
                        r ? (e.append(String.fromCharCode(_o48 + 128)), r = !1) : e.append(String.fromCharCode(_o48)), i = 0;
                        break;
                      case 2:
                        if (_o48 < this.C40_SHIFT2_SET_CHARS.length) {
                          var _t123 = this.C40_SHIFT2_SET_CHARS[_o48];
                          r ? (e.append(String.fromCharCode(_t123.charCodeAt(0) + 128)), r = !1) : e.append(_t123);
                        } else switch (_o48) {
                          case 27:
                            e.append(String.fromCharCode(29));
                            break;
                          case 30:
                            r = !0;
                            break;
                          default:
                            throw new C();
                        }
                        i = 0;
                        break;
                      case 3:
                        r ? (e.append(String.fromCharCode(_o48 + 224)), r = !1) : e.append(String.fromCharCode(_o48 + 96)), i = 0;
                        break;
                      default:
                        throw new C();
                    }
                  }
                } while (t.available() > 0);
              }
            }, {
              key: "decodeTextSegment",
              value: function decodeTextSegment(t, e) {
                var r = !1,
                  n = [],
                  i = 0;
                do {
                  if (8 === t.available()) return;
                  var _o49 = t.readBits(8);
                  if (254 === _o49) return;
                  this.parseTwoBytes(_o49, t.readBits(8), n);
                  for (var _t124 = 0; _t124 < 3; _t124++) {
                    var _o50 = n[_t124];
                    switch (i) {
                      case 0:
                        if (_o50 < 3) i = _o50 + 1;else {
                          if (!(_o50 < this.TEXT_BASIC_SET_CHARS.length)) throw new C();
                          {
                            var _t125 = this.TEXT_BASIC_SET_CHARS[_o50];
                            r ? (e.append(String.fromCharCode(_t125.charCodeAt(0) + 128)), r = !1) : e.append(_t125);
                          }
                        }
                        break;
                      case 1:
                        r ? (e.append(String.fromCharCode(_o50 + 128)), r = !1) : e.append(String.fromCharCode(_o50)), i = 0;
                        break;
                      case 2:
                        if (_o50 < this.TEXT_SHIFT2_SET_CHARS.length) {
                          var _t126 = this.TEXT_SHIFT2_SET_CHARS[_o50];
                          r ? (e.append(String.fromCharCode(_t126.charCodeAt(0) + 128)), r = !1) : e.append(_t126);
                        } else switch (_o50) {
                          case 27:
                            e.append(String.fromCharCode(29));
                            break;
                          case 30:
                            r = !0;
                            break;
                          default:
                            throw new C();
                        }
                        i = 0;
                        break;
                      case 3:
                        if (!(_o50 < this.TEXT_SHIFT3_SET_CHARS.length)) throw new C();
                        {
                          var _t127 = this.TEXT_SHIFT3_SET_CHARS[_o50];
                          r ? (e.append(String.fromCharCode(_t127.charCodeAt(0) + 128)), r = !1) : e.append(_t127), i = 0;
                        }
                        break;
                      default:
                        throw new C();
                    }
                  }
                } while (t.available() > 0);
              }
            }, {
              key: "decodeAnsiX12Segment",
              value: function decodeAnsiX12Segment(t, e) {
                var r = [];
                do {
                  if (8 === t.available()) return;
                  var _n60 = t.readBits(8);
                  if (254 === _n60) return;
                  this.parseTwoBytes(_n60, t.readBits(8), r);
                  for (var _t128 = 0; _t128 < 3; _t128++) {
                    var _n61 = r[_t128];
                    switch (_n61) {
                      case 0:
                        e.append("\r");
                        break;
                      case 1:
                        e.append("*");
                        break;
                      case 2:
                        e.append(">");
                        break;
                      case 3:
                        e.append(" ");
                        break;
                      default:
                        if (_n61 < 14) e.append(String.fromCharCode(_n61 + 44));else {
                          if (!(_n61 < 40)) throw new C();
                          e.append(String.fromCharCode(_n61 + 51));
                        }
                    }
                  }
                } while (t.available() > 0);
              }
            }, {
              key: "parseTwoBytes",
              value: function parseTwoBytes(t, e, r) {
                var n = (t << 8) + e - 1,
                  i = Math.floor(n / 1600);
                r[0] = i, n -= 1600 * i, i = Math.floor(n / 40), r[1] = i, r[2] = n - 40 * i;
              }
            }, {
              key: "decodeEdifactSegment",
              value: function decodeEdifactSegment(t, e) {
                do {
                  if (t.available() <= 16) return;
                  for (var _r86 = 0; _r86 < 4; _r86++) {
                    var _r87 = t.readBits(6);
                    if (31 === _r87) {
                      var _e115 = 8 - t.getBitOffset();
                      return void (8 !== _e115 && t.readBits(_e115));
                    }
                    0 == (32 & _r87) && (_r87 |= 64), e.append(String.fromCharCode(_r87));
                  }
                } while (t.available() > 0);
              }
            }, {
              key: "decodeBase256Segment",
              value: function decodeBase256Segment(t, e, r) {
                var n = 1 + t.getByteOffset();
                var i = this.unrandomize255State(t.readBits(8), n++);
                var o;
                if (o = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), n++), o < 0) throw new C();
                var s = new Uint8Array(o);
                for (var _e116 = 0; _e116 < o; _e116++) {
                  if (t.available() < 8) throw new C();
                  s[_e116] = this.unrandomize255State(t.readBits(8), n++);
                }
                r.push(s);
                try {
                  e.append(S.decode(s, _.ISO88591));
                } catch (t) {
                  throw new J("Platform does not support required encoding: " + t.message);
                }
              }
            }, {
              key: "unrandomize255State",
              value: function unrandomize255State(t, e) {
                var r = t - (149 * e % 255 + 1);
                return r >= 0 ? r : r + 256;
              }
            }]);
            return le;
          }();
          le.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], le.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], le.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], le.TEXT_SHIFT2_SET_CHARS = le.C40_SHIFT2_SET_CHARS, le.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)];
          var ce = /*#__PURE__*/function () {
            function ce() {
              _classCallCheck(this, ce);
              this.rsDecoder = new $(K.DATA_MATRIX_FIELD_256);
            }
            _createClass(ce, [{
              key: "decode",
              value: function decode(t) {
                var e = new oe(t),
                  r = e.getVersion(),
                  n = e.readCodewords(),
                  i = se.getDataBlocks(n, r);
                var o = 0;
                var _iterator37 = _createForOfIteratorHelper(i),
                  _step37;
                try {
                  for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                    var _t130 = _step37.value;
                    o += _t130.getNumDataCodewords();
                  }
                } catch (err) {
                  _iterator37.e(err);
                } finally {
                  _iterator37.f();
                }
                var s = new Uint8Array(o),
                  a = i.length;
                for (var _t129 = 0; _t129 < a; _t129++) {
                  var _e117 = i[_t129],
                    _r88 = _e117.getCodewords(),
                    _n62 = _e117.getNumDataCodewords();
                  this.correctErrors(_r88, _n62);
                  for (var _e118 = 0; _e118 < _n62; _e118++) s[_e118 * a + _t129] = _r88[_e118];
                }
                return le.decode(s);
              }
            }, {
              key: "correctErrors",
              value: function correctErrors(t, e) {
                var r = new Int32Array(t);
                try {
                  this.rsDecoder.decode(r, t.length - e);
                } catch (t) {
                  throw new c();
                }
                for (var _n63 = 0; _n63 < e; _n63++) t[_n63] = r[_n63];
              }
            }]);
            return ce;
          }();
          var he = /*#__PURE__*/function () {
            function he(t) {
              _classCallCheck(this, he);
              this.image = t, this.rectangleDetector = new st(this.image);
            }
            _createClass(he, [{
              key: "detect",
              value: function detect() {
                var t = this.rectangleDetector.detect();
                var e = this.detectSolid1(t);
                if (e = this.detectSolid2(e), e[3] = this.correctTopRight(e), !e[3]) throw new N();
                e = this.shiftToModuleCenter(e);
                var r = e[0],
                  n = e[1],
                  i = e[2],
                  o = e[3];
                var s = this.transitionsBetween(r, o) + 1,
                  a = this.transitionsBetween(i, o) + 1;
                1 == (1 & s) && (s += 1), 1 == (1 & a) && (a += 1), 4 * s < 7 * a && 4 * a < 7 * s && (s = a = Math.max(s, a));
                var l = he.sampleGrid(this.image, r, n, i, o, s, a);
                return new it(l, [r, n, i, o]);
              }
            }, {
              key: "detectSolid1",
              value: function detectSolid1(t) {
                var e = t[0],
                  r = t[1],
                  n = t[3],
                  i = t[2],
                  o = this.transitionsBetween(e, r),
                  s = this.transitionsBetween(r, n),
                  a = this.transitionsBetween(n, i),
                  l = this.transitionsBetween(i, e),
                  c = o,
                  h = [i, e, r, n];
                return c > s && (c = s, h[0] = e, h[1] = r, h[2] = n, h[3] = i), c > a && (c = a, h[0] = r, h[1] = n, h[2] = i, h[3] = e), c > l && (h[0] = n, h[1] = i, h[2] = e, h[3] = r), h;
              }
            }, {
              key: "detectSolid2",
              value: function detectSolid2(t) {
                var e = t[0],
                  r = t[1],
                  n = t[2],
                  i = t[3],
                  o = this.transitionsBetween(e, i),
                  s = he.shiftPoint(r, n, 4 * (o + 1)),
                  a = he.shiftPoint(n, r, 4 * (o + 1));
                return this.transitionsBetween(s, e) < this.transitionsBetween(a, i) ? (t[0] = e, t[1] = r, t[2] = n, t[3] = i) : (t[0] = r, t[1] = n, t[2] = i, t[3] = e), t;
              }
            }, {
              key: "correctTopRight",
              value: function correctTopRight(t) {
                var e = t[0],
                  r = t[1],
                  n = t[2],
                  i = t[3],
                  o = this.transitionsBetween(e, i),
                  s = this.transitionsBetween(r, i),
                  a = he.shiftPoint(e, r, 4 * (s + 1)),
                  l = he.shiftPoint(n, r, 4 * (o + 1));
                o = this.transitionsBetween(a, i), s = this.transitionsBetween(l, i);
                var c = new nt(i.getX() + (n.getX() - r.getX()) / (o + 1), i.getY() + (n.getY() - r.getY()) / (o + 1)),
                  h = new nt(i.getX() + (e.getX() - r.getX()) / (s + 1), i.getY() + (e.getY() - r.getY()) / (s + 1));
                return this.isValid(c) ? this.isValid(h) ? this.transitionsBetween(a, c) + this.transitionsBetween(l, c) > this.transitionsBetween(a, h) + this.transitionsBetween(l, h) ? c : h : c : this.isValid(h) ? h : null;
              }
            }, {
              key: "shiftToModuleCenter",
              value: function shiftToModuleCenter(t) {
                var e = t[0],
                  r = t[1],
                  n = t[2],
                  i = t[3],
                  o = this.transitionsBetween(e, i) + 1,
                  s = this.transitionsBetween(n, i) + 1,
                  a = he.shiftPoint(e, r, 4 * s),
                  l = he.shiftPoint(n, r, 4 * o);
                o = this.transitionsBetween(a, i) + 1, s = this.transitionsBetween(l, i) + 1, 1 == (1 & o) && (o += 1), 1 == (1 & s) && (s += 1);
                var c,
                  h,
                  u = (e.getX() + r.getX() + n.getX() + i.getX()) / 4,
                  d = (e.getY() + r.getY() + n.getY() + i.getY()) / 4;
                return e = he.moveAway(e, u, d), r = he.moveAway(r, u, d), n = he.moveAway(n, u, d), i = he.moveAway(i, u, d), a = he.shiftPoint(e, r, 4 * s), a = he.shiftPoint(a, i, 4 * o), c = he.shiftPoint(r, e, 4 * s), c = he.shiftPoint(c, n, 4 * o), l = he.shiftPoint(n, i, 4 * s), l = he.shiftPoint(l, r, 4 * o), h = he.shiftPoint(i, n, 4 * s), h = he.shiftPoint(h, e, 4 * o), [a, c, l, h];
              }
            }, {
              key: "isValid",
              value: function isValid(t) {
                return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight();
              }
            }, {
              key: "transitionsBetween",
              value: function transitionsBetween(t, e) {
                var r = Math.trunc(t.getX()),
                  n = Math.trunc(t.getY()),
                  i = Math.trunc(e.getX()),
                  o = Math.trunc(e.getY()),
                  s = Math.abs(o - n) > Math.abs(i - r);
                if (s) {
                  var _t131 = r;
                  r = n, n = _t131, _t131 = i, i = o, o = _t131;
                }
                var a = Math.abs(i - r),
                  l = Math.abs(o - n),
                  c = -a / 2,
                  h = n < o ? 1 : -1,
                  u = r < i ? 1 : -1,
                  d = 0,
                  g = this.image.get(s ? n : r, s ? r : n);
                for (var _t132 = r, _e119 = n; _t132 !== i; _t132 += u) {
                  var _r89 = this.image.get(s ? _e119 : _t132, s ? _t132 : _e119);
                  if (_r89 !== g && (d++, g = _r89), c += l, c > 0) {
                    if (_e119 === o) break;
                    _e119 += h, c -= a;
                  }
                }
                return d;
              }
            }], [{
              key: "shiftPoint",
              value: function shiftPoint(t, e, r) {
                var n = (e.getX() - t.getX()) / (r + 1),
                  i = (e.getY() - t.getY()) / (r + 1);
                return new nt(t.getX() + n, t.getY() + i);
              }
            }, {
              key: "moveAway",
              value: function moveAway(t, e, r) {
                var n = t.getX(),
                  i = t.getY();
                return n < e ? n -= 1 : n += 1, i < r ? i -= 1 : i += 1, new nt(n, i);
              }
            }, {
              key: "sampleGrid",
              value: function sampleGrid(t, e, r, n, i, o, s) {
                return ht.getInstance().sampleGrid(t, o, s, .5, .5, o - .5, .5, o - .5, s - .5, .5, s - .5, e.getX(), e.getY(), i.getX(), i.getY(), n.getX(), n.getY(), r.getX(), r.getY());
              }
            }]);
            return he;
          }();
          var ue = /*#__PURE__*/function () {
            function ue() {
              _classCallCheck(this, ue);
              this.decoder = new ce();
            }
            _createClass(ue, [{
              key: "decode",
              value: function decode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r, n;
                if (null != e && e.has(E.PURE_BARCODE)) {
                  var _e120 = ue.extractPureBits(t.getBlackMatrix());
                  r = this.decoder.decode(_e120), n = ue.NO_POINTS;
                } else {
                  var _e121 = new he(t.getBlackMatrix()).detect();
                  r = this.decoder.decode(_e121.getBits()), n = _e121.getPoints();
                }
                var i = r.getRawBytes(),
                  o = new F(r.getText(), i, 8 * i.length, n, k.DATA_MATRIX, u.currentTimeMillis()),
                  s = r.getByteSegments();
                null != s && o.putMetadata(X.BYTE_SEGMENTS, s);
                var a = r.getECLevel();
                return null != a && o.putMetadata(X.ERROR_CORRECTION_LEVEL, a), o;
              }
            }, {
              key: "reset",
              value: function reset() {}
            }], [{
              key: "extractPureBits",
              value: function extractPureBits(t) {
                var e = t.getTopLeftOnBit(),
                  r = t.getBottomRightOnBit();
                if (null == e || null == r) throw new N();
                var n = this.moduleSize(e, t);
                var i = e[1];
                var o = r[1];
                var s = e[0];
                var a = (r[0] - s + 1) / n,
                  l = (o - i + 1) / n;
                if (a <= 0 || l <= 0) throw new N();
                var c = n / 2;
                i += c, s += c;
                var h = new y(a, l);
                for (var _e122 = 0; _e122 < l; _e122++) {
                  var _r90 = i + _e122 * n;
                  for (var _i52 = 0; _i52 < a; _i52++) t.get(s + _i52 * n, _r90) && h.set(_i52, _e122);
                }
                return h;
              }
            }, {
              key: "moduleSize",
              value: function moduleSize(t, e) {
                var r = e.getWidth();
                var n = t[0];
                var i = t[1];
                for (; n < r && e.get(n, i);) n++;
                if (n === r) throw new N();
                var o = n - t[0];
                if (0 === o) throw new N();
                return o;
              }
            }]);
            return ue;
          }();
          ue.NO_POINTS = [];
          !function (t) {
            t[t.L = 0] = "L", t[t.M = 1] = "M", t[t.Q = 2] = "Q", t[t.H = 3] = "H";
          }(V || (V = {}));
          var de = /*#__PURE__*/function () {
            function de(t, e, r) {
              _classCallCheck(this, de);
              this.value = t, this.stringValue = e, this.bits = r, de.FOR_BITS.set(r, this), de.FOR_VALUE.set(t, this);
            }
            _createClass(de, [{
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "getBits",
              value: function getBits() {
                return this.bits;
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.stringValue;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof de)) return !1;
                var e = t;
                return this.value === e.value;
              }
            }], [{
              key: "fromString",
              value: function fromString(t) {
                switch (t) {
                  case "L":
                    return de.L;
                  case "M":
                    return de.M;
                  case "Q":
                    return de.Q;
                  case "H":
                    return de.H;
                  default:
                    throw new s(t + "not available");
                }
              }
            }, {
              key: "forBits",
              value: function forBits(t) {
                if (t < 0 || t >= de.FOR_BITS.size) throw new a();
                return de.FOR_BITS.get(t);
              }
            }]);
            return de;
          }();
          de.FOR_BITS = new Map(), de.FOR_VALUE = new Map(), de.L = new de(V.L, "L", 1), de.M = new de(V.M, "M", 0), de.Q = new de(V.Q, "Q", 3), de.H = new de(V.H, "H", 2);
          var ge = /*#__PURE__*/function () {
            function ge(t) {
              _classCallCheck(this, ge);
              this.errorCorrectionLevel = de.forBits(t >> 3 & 3), this.dataMask = 7 & t;
            }
            _createClass(ge, [{
              key: "getErrorCorrectionLevel",
              value: function getErrorCorrectionLevel() {
                return this.errorCorrectionLevel;
              }
            }, {
              key: "getDataMask",
              value: function getDataMask() {
                return this.dataMask;
              }
            }, {
              key: "hashCode",
              value: function hashCode() {
                return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof ge)) return !1;
                var e = t;
                return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask;
              }
            }], [{
              key: "numBitsDiffering",
              value: function numBitsDiffering(t, e) {
                return w.bitCount(t ^ e);
              }
            }, {
              key: "decodeFormatInformation",
              value: function decodeFormatInformation(t, e) {
                var r = ge.doDecodeFormatInformation(t, e);
                return null !== r ? r : ge.doDecodeFormatInformation(t ^ ge.FORMAT_INFO_MASK_QR, e ^ ge.FORMAT_INFO_MASK_QR);
              }
            }, {
              key: "doDecodeFormatInformation",
              value: function doDecodeFormatInformation(t, e) {
                var r = Number.MAX_SAFE_INTEGER,
                  n = 0;
                var _iterator38 = _createForOfIteratorHelper(ge.FORMAT_INFO_DECODE_LOOKUP),
                  _step38;
                try {
                  for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                    var _i53 = _step38.value;
                    var _o51 = _i53[0];
                    if (_o51 === t || _o51 === e) return new ge(_i53[1]);
                    var _s31 = ge.numBitsDiffering(t, _o51);
                    _s31 < r && (n = _i53[1], r = _s31), t !== e && (_s31 = ge.numBitsDiffering(e, _o51), _s31 < r && (n = _i53[1], r = _s31));
                  }
                } catch (err) {
                  _iterator38.e(err);
                } finally {
                  _iterator38.f();
                }
                return r <= 3 ? new ge(n) : null;
              }
            }]);
            return ge;
          }();
          ge.FORMAT_INFO_MASK_QR = 21522, ge.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
          var fe = /*#__PURE__*/function () {
            function fe(t) {
              _classCallCheck(this, fe);
              for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                e[_key4 - 1] = arguments[_key4];
              }
              this.ecCodewordsPerBlock = t, this.ecBlocks = e;
            }
            _createClass(fe, [{
              key: "getECCodewordsPerBlock",
              value: function getECCodewordsPerBlock() {
                return this.ecCodewordsPerBlock;
              }
            }, {
              key: "getNumBlocks",
              value: function getNumBlocks() {
                var t = 0;
                var e = this.ecBlocks;
                var _iterator39 = _createForOfIteratorHelper(e),
                  _step39;
                try {
                  for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                    var _r91 = _step39.value;
                    t += _r91.getCount();
                  }
                } catch (err) {
                  _iterator39.e(err);
                } finally {
                  _iterator39.f();
                }
                return t;
              }
            }, {
              key: "getTotalECCodewords",
              value: function getTotalECCodewords() {
                return this.ecCodewordsPerBlock * this.getNumBlocks();
              }
            }, {
              key: "getECBlocks",
              value: function getECBlocks() {
                return this.ecBlocks;
              }
            }]);
            return fe;
          }();
          var we = /*#__PURE__*/function () {
            function we(t, e) {
              _classCallCheck(this, we);
              this.count = t, this.dataCodewords = e;
            }
            _createClass(we, [{
              key: "getCount",
              value: function getCount() {
                return this.count;
              }
            }, {
              key: "getDataCodewords",
              value: function getDataCodewords() {
                return this.dataCodewords;
              }
            }]);
            return we;
          }();
          var Ae = /*#__PURE__*/function () {
            function Ae(t, e) {
              _classCallCheck(this, Ae);
              for (var _len5 = arguments.length, r = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
                r[_key5 - 2] = arguments[_key5];
              }
              this.versionNumber = t, this.alignmentPatternCenters = e, this.ecBlocks = r;
              var n = 0;
              var i = r[0].getECCodewordsPerBlock(),
                o = r[0].getECBlocks();
              var _iterator40 = _createForOfIteratorHelper(o),
                _step40;
              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var _t133 = _step40.value;
                  n += _t133.getCount() * (_t133.getDataCodewords() + i);
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
              this.totalCodewords = n;
            }
            _createClass(Ae, [{
              key: "getVersionNumber",
              value: function getVersionNumber() {
                return this.versionNumber;
              }
            }, {
              key: "getAlignmentPatternCenters",
              value: function getAlignmentPatternCenters() {
                return this.alignmentPatternCenters;
              }
            }, {
              key: "getTotalCodewords",
              value: function getTotalCodewords() {
                return this.totalCodewords;
              }
            }, {
              key: "getDimensionForVersion",
              value: function getDimensionForVersion() {
                return 17 + 4 * this.versionNumber;
              }
            }, {
              key: "getECBlocksForLevel",
              value: function getECBlocksForLevel(t) {
                return this.ecBlocks[t.getValue()];
              }
            }, {
              key: "buildFunctionPattern",
              value: function buildFunctionPattern() {
                var t = this.getDimensionForVersion(),
                  e = new y(t);
                e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
                var r = this.alignmentPatternCenters.length;
                for (var _t134 = 0; _t134 < r; _t134++) {
                  var _n64 = this.alignmentPatternCenters[_t134] - 2;
                  for (var _i54 = 0; _i54 < r; _i54++) 0 === _t134 && (0 === _i54 || _i54 === r - 1) || _t134 === r - 1 && 0 === _i54 || e.setRegion(this.alignmentPatternCenters[_i54] - 2, _n64, 5, 5);
                }
                return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)), e;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "" + this.versionNumber;
              }
            }], [{
              key: "getProvisionalVersionForDimension",
              value: function getProvisionalVersionForDimension(t) {
                if (t % 4 != 1) throw new C();
                try {
                  return this.getVersionForNumber((t - 17) / 4);
                } catch (t) {
                  throw new C();
                }
              }
            }, {
              key: "getVersionForNumber",
              value: function getVersionForNumber(t) {
                if (t < 1 || t > 40) throw new a();
                return Ae.VERSIONS[t - 1];
              }
            }, {
              key: "decodeVersionInformation",
              value: function decodeVersionInformation(t) {
                var e = Number.MAX_SAFE_INTEGER,
                  r = 0;
                for (var _n65 = 0; _n65 < Ae.VERSION_DECODE_INFO.length; _n65++) {
                  var _i55 = Ae.VERSION_DECODE_INFO[_n65];
                  if (_i55 === t) return Ae.getVersionForNumber(_n65 + 7);
                  var _o52 = ge.numBitsDiffering(t, _i55);
                  _o52 < e && (r = _n65 + 7, e = _o52);
                }
                return e <= 3 ? Ae.getVersionForNumber(r) : null;
              }
            }]);
            return Ae;
          }();
          Ae.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), Ae.VERSIONS = [new Ae(1, new Int32Array(0), new fe(7, new we(1, 19)), new fe(10, new we(1, 16)), new fe(13, new we(1, 13)), new fe(17, new we(1, 9))), new Ae(2, Int32Array.from([6, 18]), new fe(10, new we(1, 34)), new fe(16, new we(1, 28)), new fe(22, new we(1, 22)), new fe(28, new we(1, 16))), new Ae(3, Int32Array.from([6, 22]), new fe(15, new we(1, 55)), new fe(26, new we(1, 44)), new fe(18, new we(2, 17)), new fe(22, new we(2, 13))), new Ae(4, Int32Array.from([6, 26]), new fe(20, new we(1, 80)), new fe(18, new we(2, 32)), new fe(26, new we(2, 24)), new fe(16, new we(4, 9))), new Ae(5, Int32Array.from([6, 30]), new fe(26, new we(1, 108)), new fe(24, new we(2, 43)), new fe(18, new we(2, 15), new we(2, 16)), new fe(22, new we(2, 11), new we(2, 12))), new Ae(6, Int32Array.from([6, 34]), new fe(18, new we(2, 68)), new fe(16, new we(4, 27)), new fe(24, new we(4, 19)), new fe(28, new we(4, 15))), new Ae(7, Int32Array.from([6, 22, 38]), new fe(20, new we(2, 78)), new fe(18, new we(4, 31)), new fe(18, new we(2, 14), new we(4, 15)), new fe(26, new we(4, 13), new we(1, 14))), new Ae(8, Int32Array.from([6, 24, 42]), new fe(24, new we(2, 97)), new fe(22, new we(2, 38), new we(2, 39)), new fe(22, new we(4, 18), new we(2, 19)), new fe(26, new we(4, 14), new we(2, 15))), new Ae(9, Int32Array.from([6, 26, 46]), new fe(30, new we(2, 116)), new fe(22, new we(3, 36), new we(2, 37)), new fe(20, new we(4, 16), new we(4, 17)), new fe(24, new we(4, 12), new we(4, 13))), new Ae(10, Int32Array.from([6, 28, 50]), new fe(18, new we(2, 68), new we(2, 69)), new fe(26, new we(4, 43), new we(1, 44)), new fe(24, new we(6, 19), new we(2, 20)), new fe(28, new we(6, 15), new we(2, 16))), new Ae(11, Int32Array.from([6, 30, 54]), new fe(20, new we(4, 81)), new fe(30, new we(1, 50), new we(4, 51)), new fe(28, new we(4, 22), new we(4, 23)), new fe(24, new we(3, 12), new we(8, 13))), new Ae(12, Int32Array.from([6, 32, 58]), new fe(24, new we(2, 92), new we(2, 93)), new fe(22, new we(6, 36), new we(2, 37)), new fe(26, new we(4, 20), new we(6, 21)), new fe(28, new we(7, 14), new we(4, 15))), new Ae(13, Int32Array.from([6, 34, 62]), new fe(26, new we(4, 107)), new fe(22, new we(8, 37), new we(1, 38)), new fe(24, new we(8, 20), new we(4, 21)), new fe(22, new we(12, 11), new we(4, 12))), new Ae(14, Int32Array.from([6, 26, 46, 66]), new fe(30, new we(3, 115), new we(1, 116)), new fe(24, new we(4, 40), new we(5, 41)), new fe(20, new we(11, 16), new we(5, 17)), new fe(24, new we(11, 12), new we(5, 13))), new Ae(15, Int32Array.from([6, 26, 48, 70]), new fe(22, new we(5, 87), new we(1, 88)), new fe(24, new we(5, 41), new we(5, 42)), new fe(30, new we(5, 24), new we(7, 25)), new fe(24, new we(11, 12), new we(7, 13))), new Ae(16, Int32Array.from([6, 26, 50, 74]), new fe(24, new we(5, 98), new we(1, 99)), new fe(28, new we(7, 45), new we(3, 46)), new fe(24, new we(15, 19), new we(2, 20)), new fe(30, new we(3, 15), new we(13, 16))), new Ae(17, Int32Array.from([6, 30, 54, 78]), new fe(28, new we(1, 107), new we(5, 108)), new fe(28, new we(10, 46), new we(1, 47)), new fe(28, new we(1, 22), new we(15, 23)), new fe(28, new we(2, 14), new we(17, 15))), new Ae(18, Int32Array.from([6, 30, 56, 82]), new fe(30, new we(5, 120), new we(1, 121)), new fe(26, new we(9, 43), new we(4, 44)), new fe(28, new we(17, 22), new we(1, 23)), new fe(28, new we(2, 14), new we(19, 15))), new Ae(19, Int32Array.from([6, 30, 58, 86]), new fe(28, new we(3, 113), new we(4, 114)), new fe(26, new we(3, 44), new we(11, 45)), new fe(26, new we(17, 21), new we(4, 22)), new fe(26, new we(9, 13), new we(16, 14))), new Ae(20, Int32Array.from([6, 34, 62, 90]), new fe(28, new we(3, 107), new we(5, 108)), new fe(26, new we(3, 41), new we(13, 42)), new fe(30, new we(15, 24), new we(5, 25)), new fe(28, new we(15, 15), new we(10, 16))), new Ae(21, Int32Array.from([6, 28, 50, 72, 94]), new fe(28, new we(4, 116), new we(4, 117)), new fe(26, new we(17, 42)), new fe(28, new we(17, 22), new we(6, 23)), new fe(30, new we(19, 16), new we(6, 17))), new Ae(22, Int32Array.from([6, 26, 50, 74, 98]), new fe(28, new we(2, 111), new we(7, 112)), new fe(28, new we(17, 46)), new fe(30, new we(7, 24), new we(16, 25)), new fe(24, new we(34, 13))), new Ae(23, Int32Array.from([6, 30, 54, 78, 102]), new fe(30, new we(4, 121), new we(5, 122)), new fe(28, new we(4, 47), new we(14, 48)), new fe(30, new we(11, 24), new we(14, 25)), new fe(30, new we(16, 15), new we(14, 16))), new Ae(24, Int32Array.from([6, 28, 54, 80, 106]), new fe(30, new we(6, 117), new we(4, 118)), new fe(28, new we(6, 45), new we(14, 46)), new fe(30, new we(11, 24), new we(16, 25)), new fe(30, new we(30, 16), new we(2, 17))), new Ae(25, Int32Array.from([6, 32, 58, 84, 110]), new fe(26, new we(8, 106), new we(4, 107)), new fe(28, new we(8, 47), new we(13, 48)), new fe(30, new we(7, 24), new we(22, 25)), new fe(30, new we(22, 15), new we(13, 16))), new Ae(26, Int32Array.from([6, 30, 58, 86, 114]), new fe(28, new we(10, 114), new we(2, 115)), new fe(28, new we(19, 46), new we(4, 47)), new fe(28, new we(28, 22), new we(6, 23)), new fe(30, new we(33, 16), new we(4, 17))), new Ae(27, Int32Array.from([6, 34, 62, 90, 118]), new fe(30, new we(8, 122), new we(4, 123)), new fe(28, new we(22, 45), new we(3, 46)), new fe(30, new we(8, 23), new we(26, 24)), new fe(30, new we(12, 15), new we(28, 16))), new Ae(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new fe(30, new we(3, 117), new we(10, 118)), new fe(28, new we(3, 45), new we(23, 46)), new fe(30, new we(4, 24), new we(31, 25)), new fe(30, new we(11, 15), new we(31, 16))), new Ae(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new fe(30, new we(7, 116), new we(7, 117)), new fe(28, new we(21, 45), new we(7, 46)), new fe(30, new we(1, 23), new we(37, 24)), new fe(30, new we(19, 15), new we(26, 16))), new Ae(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new fe(30, new we(5, 115), new we(10, 116)), new fe(28, new we(19, 47), new we(10, 48)), new fe(30, new we(15, 24), new we(25, 25)), new fe(30, new we(23, 15), new we(25, 16))), new Ae(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new fe(30, new we(13, 115), new we(3, 116)), new fe(28, new we(2, 46), new we(29, 47)), new fe(30, new we(42, 24), new we(1, 25)), new fe(30, new we(23, 15), new we(28, 16))), new Ae(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new fe(30, new we(17, 115)), new fe(28, new we(10, 46), new we(23, 47)), new fe(30, new we(10, 24), new we(35, 25)), new fe(30, new we(19, 15), new we(35, 16))), new Ae(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new fe(30, new we(17, 115), new we(1, 116)), new fe(28, new we(14, 46), new we(21, 47)), new fe(30, new we(29, 24), new we(19, 25)), new fe(30, new we(11, 15), new we(46, 16))), new Ae(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new fe(30, new we(13, 115), new we(6, 116)), new fe(28, new we(14, 46), new we(23, 47)), new fe(30, new we(44, 24), new we(7, 25)), new fe(30, new we(59, 16), new we(1, 17))), new Ae(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new fe(30, new we(12, 121), new we(7, 122)), new fe(28, new we(12, 47), new we(26, 48)), new fe(30, new we(39, 24), new we(14, 25)), new fe(30, new we(22, 15), new we(41, 16))), new Ae(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new fe(30, new we(6, 121), new we(14, 122)), new fe(28, new we(6, 47), new we(34, 48)), new fe(30, new we(46, 24), new we(10, 25)), new fe(30, new we(2, 15), new we(64, 16))), new Ae(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new fe(30, new we(17, 122), new we(4, 123)), new fe(28, new we(29, 46), new we(14, 47)), new fe(30, new we(49, 24), new we(10, 25)), new fe(30, new we(24, 15), new we(46, 16))), new Ae(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new fe(30, new we(4, 122), new we(18, 123)), new fe(28, new we(13, 46), new we(32, 47)), new fe(30, new we(48, 24), new we(14, 25)), new fe(30, new we(42, 15), new we(32, 16))), new Ae(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new fe(30, new we(20, 117), new we(4, 118)), new fe(28, new we(40, 47), new we(7, 48)), new fe(30, new we(43, 24), new we(22, 25)), new fe(30, new we(10, 15), new we(67, 16))), new Ae(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new fe(30, new we(19, 118), new we(6, 119)), new fe(28, new we(18, 47), new we(31, 48)), new fe(30, new we(34, 24), new we(34, 25)), new fe(30, new we(20, 15), new we(61, 16)))], function (t) {
            t[t.DATA_MASK_000 = 0] = "DATA_MASK_000", t[t.DATA_MASK_001 = 1] = "DATA_MASK_001", t[t.DATA_MASK_010 = 2] = "DATA_MASK_010", t[t.DATA_MASK_011 = 3] = "DATA_MASK_011", t[t.DATA_MASK_100 = 4] = "DATA_MASK_100", t[t.DATA_MASK_101 = 5] = "DATA_MASK_101", t[t.DATA_MASK_110 = 6] = "DATA_MASK_110", t[t.DATA_MASK_111 = 7] = "DATA_MASK_111";
          }(z || (z = {}));
          var me = /*#__PURE__*/function () {
            function me(t, e) {
              _classCallCheck(this, me);
              this.value = t, this.isMasked = e;
            }
            _createClass(me, [{
              key: "unmaskBitMatrix",
              value: function unmaskBitMatrix(t, e) {
                for (var _r92 = 0; _r92 < e; _r92++) for (var _n66 = 0; _n66 < e; _n66++) this.isMasked(_r92, _n66) && t.flip(_n66, _r92);
              }
            }]);
            return me;
          }();
          me.values = new Map([[z.DATA_MASK_000, new me(z.DATA_MASK_000, function (t, e) {
            return 0 == (t + e & 1);
          })], [z.DATA_MASK_001, new me(z.DATA_MASK_001, function (t, e) {
            return 0 == (1 & t);
          })], [z.DATA_MASK_010, new me(z.DATA_MASK_010, function (t, e) {
            return e % 3 == 0;
          })], [z.DATA_MASK_011, new me(z.DATA_MASK_011, function (t, e) {
            return (t + e) % 3 == 0;
          })], [z.DATA_MASK_100, new me(z.DATA_MASK_100, function (t, e) {
            return 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1);
          })], [z.DATA_MASK_101, new me(z.DATA_MASK_101, function (t, e) {
            return t * e % 6 == 0;
          })], [z.DATA_MASK_110, new me(z.DATA_MASK_110, function (t, e) {
            return t * e % 6 < 3;
          })], [z.DATA_MASK_111, new me(z.DATA_MASK_111, function (t, e) {
            return 0 == (t + e + t * e % 3 & 1);
          })]]);
          var Ee = /*#__PURE__*/function () {
            function Ee(t) {
              _classCallCheck(this, Ee);
              var e = t.getHeight();
              if (e < 21 || 1 != (3 & e)) throw new C();
              this.bitMatrix = t;
            }
            _createClass(Ee, [{
              key: "readFormatInformation",
              value: function readFormatInformation() {
                if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                var t = 0;
                for (var _e123 = 0; _e123 < 6; _e123++) t = this.copyBit(_e123, 8, t);
                t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
                for (var _e124 = 5; _e124 >= 0; _e124--) t = this.copyBit(8, _e124, t);
                var e = this.bitMatrix.getHeight();
                var r = 0;
                var n = e - 7;
                for (var _t135 = e - 1; _t135 >= n; _t135--) r = this.copyBit(8, _t135, r);
                for (var _t136 = e - 8; _t136 < e; _t136++) r = this.copyBit(_t136, 8, r);
                if (this.parsedFormatInfo = ge.decodeFormatInformation(t, r), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                throw new C();
              }
            }, {
              key: "readVersion",
              value: function readVersion() {
                if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                var t = this.bitMatrix.getHeight(),
                  e = Math.floor((t - 17) / 4);
                if (e <= 6) return Ae.getVersionForNumber(e);
                var r = 0;
                var n = t - 11;
                for (var _e125 = 5; _e125 >= 0; _e125--) for (var _i56 = t - 9; _i56 >= n; _i56--) r = this.copyBit(_i56, _e125, r);
                var i = Ae.decodeVersionInformation(r);
                if (null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                r = 0;
                for (var _e126 = 5; _e126 >= 0; _e126--) for (var _i57 = t - 9; _i57 >= n; _i57--) r = this.copyBit(_e126, _i57, r);
                if (i = Ae.decodeVersionInformation(r), null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                throw new C();
              }
            }, {
              key: "copyBit",
              value: function copyBit(t, e, r) {
                return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1;
              }
            }, {
              key: "readCodewords",
              value: function readCodewords() {
                var t = this.readFormatInformation(),
                  e = this.readVersion(),
                  r = me.values.get(t.getDataMask()),
                  n = this.bitMatrix.getHeight();
                r.unmaskBitMatrix(this.bitMatrix, n);
                var i = e.buildFunctionPattern();
                var o = !0;
                var s = new Uint8Array(e.getTotalCodewords());
                var a = 0,
                  l = 0,
                  c = 0;
                for (var _t137 = n - 1; _t137 > 0; _t137 -= 2) {
                  6 === _t137 && _t137--;
                  for (var _e127 = 0; _e127 < n; _e127++) {
                    var _r93 = o ? n - 1 - _e127 : _e127;
                    for (var _e128 = 0; _e128 < 2; _e128++) i.get(_t137 - _e128, _r93) || (c++, l <<= 1, this.bitMatrix.get(_t137 - _e128, _r93) && (l |= 1), 8 === c && (s[a++] = l, c = 0, l = 0));
                  }
                  o = !o;
                }
                if (a !== e.getTotalCodewords()) throw new C();
                return s;
              }
            }, {
              key: "remask",
              value: function remask() {
                if (null === this.parsedFormatInfo) return;
                var t = me.values[this.parsedFormatInfo.getDataMask()],
                  e = this.bitMatrix.getHeight();
                t.unmaskBitMatrix(this.bitMatrix, e);
              }
            }, {
              key: "setMirror",
              value: function setMirror(t) {
                this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t;
              }
            }, {
              key: "mirror",
              value: function mirror() {
                var t = this.bitMatrix;
                for (var _e129 = 0, _r94 = t.getWidth(); _e129 < _r94; _e129++) for (var _r95 = _e129 + 1, _n67 = t.getHeight(); _r95 < _n67; _r95++) t.get(_e129, _r95) !== t.get(_r95, _e129) && (t.flip(_r95, _e129), t.flip(_e129, _r95));
              }
            }]);
            return Ee;
          }();
          var Ce = /*#__PURE__*/function () {
            function Ce(t, e) {
              _classCallCheck(this, Ce);
              this.numDataCodewords = t, this.codewords = e;
            }
            _createClass(Ce, [{
              key: "getNumDataCodewords",
              value: function getNumDataCodewords() {
                return this.numDataCodewords;
              }
            }, {
              key: "getCodewords",
              value: function getCodewords() {
                return this.codewords;
              }
            }], [{
              key: "getDataBlocks",
              value: function getDataBlocks(t, e, r) {
                if (t.length !== e.getTotalCodewords()) throw new a();
                var n = e.getECBlocksForLevel(r);
                var i = 0;
                var o = n.getECBlocks();
                var _iterator41 = _createForOfIteratorHelper(o),
                  _step41;
                try {
                  for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                    var _t138 = _step41.value;
                    i += _t138.getCount();
                  }
                } catch (err) {
                  _iterator41.e(err);
                } finally {
                  _iterator41.f();
                }
                var s = new Array(i);
                var l = 0;
                var _iterator42 = _createForOfIteratorHelper(o),
                  _step42;
                try {
                  for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                    var _t139 = _step42.value;
                    for (var _e133 = 0; _e133 < _t139.getCount(); _e133++) {
                      var _e134 = _t139.getDataCodewords(),
                        _r98 = n.getECCodewordsPerBlock() + _e134;
                      s[l++] = new Ce(_e134, new Uint8Array(_r98));
                    }
                  }
                } catch (err) {
                  _iterator42.e(err);
                } finally {
                  _iterator42.f();
                }
                var c = s[0].codewords.length;
                var h = s.length - 1;
                for (; h >= 0 && s[h].codewords.length !== c;) h--;
                h++;
                var u = c - n.getECCodewordsPerBlock();
                var d = 0;
                for (var _e130 = 0; _e130 < u; _e130++) for (var _r96 = 0; _r96 < l; _r96++) s[_r96].codewords[_e130] = t[d++];
                for (var _e131 = h; _e131 < l; _e131++) s[_e131].codewords[u] = t[d++];
                var g = s[0].codewords.length;
                for (var _e132 = u; _e132 < g; _e132++) for (var _r97 = 0; _r97 < l; _r97++) {
                  var _n68 = _r97 < h ? _e132 : _e132 + 1;
                  s[_r97].codewords[_n68] = t[d++];
                }
                return s;
              }
            }]);
            return Ce;
          }();
          !function (t) {
            t[t.TERMINATOR = 0] = "TERMINATOR", t[t.NUMERIC = 1] = "NUMERIC", t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC", t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t[t.BYTE = 4] = "BYTE", t[t.ECI = 5] = "ECI", t[t.KANJI = 6] = "KANJI", t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t[t.HANZI = 9] = "HANZI";
          }(G || (G = {}));
          var Ie = /*#__PURE__*/function () {
            function Ie(t, e, r, n) {
              _classCallCheck(this, Ie);
              this.value = t, this.stringValue = e, this.characterCountBitsForVersions = r, this.bits = n, Ie.FOR_BITS.set(n, this), Ie.FOR_VALUE.set(t, this);
            }
            _createClass(Ie, [{
              key: "getCharacterCountBits",
              value: function getCharacterCountBits(t) {
                var e = t.getVersionNumber();
                var r;
                return r = e <= 9 ? 0 : e <= 26 ? 1 : 2, this.characterCountBitsForVersions[r];
              }
            }, {
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "getBits",
              value: function getBits() {
                return this.bits;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof Ie)) return !1;
                var e = t;
                return this.value === e.value;
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.stringValue;
              }
            }], [{
              key: "forBits",
              value: function forBits(t) {
                var e = Ie.FOR_BITS.get(t);
                if (void 0 === e) throw new a();
                return e;
              }
            }]);
            return Ie;
          }();
          Ie.FOR_BITS = new Map(), Ie.FOR_VALUE = new Map(), Ie.TERMINATOR = new Ie(G.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), Ie.NUMERIC = new Ie(G.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), Ie.ALPHANUMERIC = new Ie(G.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), Ie.STRUCTURED_APPEND = new Ie(G.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), Ie.BYTE = new Ie(G.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), Ie.ECI = new Ie(G.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), Ie.KANJI = new Ie(G.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), Ie.FNC1_FIRST_POSITION = new Ie(G.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), Ie.FNC1_SECOND_POSITION = new Ie(G.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), Ie.HANZI = new Ie(G.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
          var pe = /*#__PURE__*/function () {
            function pe() {
              _classCallCheck(this, pe);
            }
            _createClass(pe, null, [{
              key: "decode",
              value: function decode(t, e, r, n) {
                var i = new ae(t);
                var o = new T();
                var s = new Array();
                var a = -1,
                  l = -1;
                try {
                  var _t140,
                    _r99 = null,
                    _c8 = !1;
                  do {
                    if (i.available() < 4) _t140 = Ie.TERMINATOR;else {
                      var _e135 = i.readBits(4);
                      _t140 = Ie.forBits(_e135);
                    }
                    switch (_t140) {
                      case Ie.TERMINATOR:
                        break;
                      case Ie.FNC1_FIRST_POSITION:
                      case Ie.FNC1_SECOND_POSITION:
                        _c8 = !0;
                        break;
                      case Ie.STRUCTURED_APPEND:
                        if (i.available() < 16) throw new C();
                        a = i.readBits(8), l = i.readBits(8);
                        break;
                      case Ie.ECI:
                        var _h7 = pe.parseECIValue(i);
                        if (_r99 = I.getCharacterSetECIByValue(_h7), null === _r99) throw new C();
                        break;
                      case Ie.HANZI:
                        var _u6 = i.readBits(4),
                          _d6 = i.readBits(_t140.getCharacterCountBits(e));
                        _u6 === pe.GB2312_SUBSET && pe.decodeHanziSegment(i, o, _d6);
                        break;
                      default:
                        var _g5 = i.readBits(_t140.getCharacterCountBits(e));
                        switch (_t140) {
                          case Ie.NUMERIC:
                            pe.decodeNumericSegment(i, o, _g5);
                            break;
                          case Ie.ALPHANUMERIC:
                            pe.decodeAlphanumericSegment(i, o, _g5, _c8);
                            break;
                          case Ie.BYTE:
                            pe.decodeByteSegment(i, o, _g5, _r99, s, n);
                            break;
                          case Ie.KANJI:
                            pe.decodeKanjiSegment(i, o, _g5);
                            break;
                          default:
                            throw new C();
                        }
                    }
                  } while (_t140 !== Ie.TERMINATOR);
                } catch (t) {
                  throw new C();
                }
                return new W(t, o.toString(), 0 === s.length ? null : s, null === r ? null : r.toString(), a, l);
              }
            }, {
              key: "decodeHanziSegment",
              value: function decodeHanziSegment(t, e, r) {
                if (13 * r > t.available()) throw new C();
                var n = new Uint8Array(2 * r);
                var i = 0;
                for (; r > 0;) {
                  var _e136 = t.readBits(13);
                  var _o53 = _e136 / 96 << 8 & 4294967295 | _e136 % 96;
                  _o53 += _o53 < 959 ? 41377 : 42657, n[i] = _o53 >> 8 & 255, n[i + 1] = 255 & _o53, i += 2, r--;
                }
                try {
                  e.append(S.decode(n, _.GB2312));
                } catch (t) {
                  throw new C(t);
                }
              }
            }, {
              key: "decodeKanjiSegment",
              value: function decodeKanjiSegment(t, e, r) {
                if (13 * r > t.available()) throw new C();
                var n = new Uint8Array(2 * r);
                var i = 0;
                for (; r > 0;) {
                  var _e137 = t.readBits(13);
                  var _o54 = _e137 / 192 << 8 & 4294967295 | _e137 % 192;
                  _o54 += _o54 < 7936 ? 33088 : 49472, n[i] = _o54 >> 8, n[i + 1] = _o54, i += 2, r--;
                }
                try {
                  e.append(S.decode(n, _.SHIFT_JIS));
                } catch (t) {
                  throw new C(t);
                }
              }
            }, {
              key: "decodeByteSegment",
              value: function decodeByteSegment(t, e, r, n, i, o) {
                if (8 * r > t.available()) throw new C();
                var s = new Uint8Array(r);
                for (var _e138 = 0; _e138 < r; _e138++) s[_e138] = t.readBits(8);
                var a;
                a = null === n ? _.guessEncoding(s, o) : n.getName();
                try {
                  e.append(S.decode(s, a));
                } catch (t) {
                  throw new C(t);
                }
                i.push(s);
              }
            }, {
              key: "toAlphaNumericChar",
              value: function toAlphaNumericChar(t) {
                if (t >= pe.ALPHANUMERIC_CHARS.length) throw new C();
                return pe.ALPHANUMERIC_CHARS[t];
              }
            }, {
              key: "decodeAlphanumericSegment",
              value: function decodeAlphanumericSegment(t, e, r, n) {
                var i = e.length();
                for (; r > 1;) {
                  if (t.available() < 11) throw new C();
                  var _n69 = t.readBits(11);
                  e.append(pe.toAlphaNumericChar(Math.floor(_n69 / 45))), e.append(pe.toAlphaNumericChar(_n69 % 45)), r -= 2;
                }
                if (1 === r) {
                  if (t.available() < 6) throw new C();
                  e.append(pe.toAlphaNumericChar(t.readBits(6)));
                }
                if (n) for (var _t141 = i; _t141 < e.length(); _t141++) "%" === e.charAt(_t141) && (_t141 < e.length() - 1 && "%" === e.charAt(_t141 + 1) ? e.deleteCharAt(_t141 + 1) : e.setCharAt(_t141, String.fromCharCode(29)));
              }
            }, {
              key: "decodeNumericSegment",
              value: function decodeNumericSegment(t, e, r) {
                for (; r >= 3;) {
                  if (t.available() < 10) throw new C();
                  var _n70 = t.readBits(10);
                  if (_n70 >= 1e3) throw new C();
                  e.append(pe.toAlphaNumericChar(Math.floor(_n70 / 100))), e.append(pe.toAlphaNumericChar(Math.floor(_n70 / 10) % 10)), e.append(pe.toAlphaNumericChar(_n70 % 10)), r -= 3;
                }
                if (2 === r) {
                  if (t.available() < 7) throw new C();
                  var _r100 = t.readBits(7);
                  if (_r100 >= 100) throw new C();
                  e.append(pe.toAlphaNumericChar(Math.floor(_r100 / 10))), e.append(pe.toAlphaNumericChar(_r100 % 10));
                } else if (1 === r) {
                  if (t.available() < 4) throw new C();
                  var _r101 = t.readBits(4);
                  if (_r101 >= 10) throw new C();
                  e.append(pe.toAlphaNumericChar(_r101));
                }
              }
            }, {
              key: "parseECIValue",
              value: function parseECIValue(t) {
                var e = t.readBits(8);
                if (0 == (128 & e)) return 127 & e;
                if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
                if (192 == (224 & e)) return (31 & e) << 16 & 4294967295 | t.readBits(16);
                throw new C();
              }
            }]);
            return pe;
          }();
          pe.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", pe.GB2312_SUBSET = 1;
          var Se = /*#__PURE__*/function () {
            function Se(t) {
              _classCallCheck(this, Se);
              this.mirrored = t;
            }
            _createClass(Se, [{
              key: "isMirrored",
              value: function isMirrored() {
                return this.mirrored;
              }
            }, {
              key: "applyMirroredCorrection",
              value: function applyMirroredCorrection(t) {
                if (!this.mirrored || null === t || t.length < 3) return;
                var e = t[0];
                t[0] = t[2], t[2] = e;
              }
            }]);
            return Se;
          }();
          var _e = /*#__PURE__*/function () {
            function _e() {
              _classCallCheck(this, _e);
              this.rsDecoder = new $(K.QR_CODE_FIELD_256);
            }
            _createClass(_e, [{
              key: "decodeBooleanArray",
              value: function decodeBooleanArray(t, e) {
                return this.decodeBitMatrix(y.parseFromBooleanArray(t), e);
              }
            }, {
              key: "decodeBitMatrix",
              value: function decodeBitMatrix(t, e) {
                var r = new Ee(t);
                var n = null;
                try {
                  return this.decodeBitMatrixParser(r, e);
                } catch (t) {
                  n = t;
                }
                try {
                  r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                  var _t142 = this.decodeBitMatrixParser(r, e);
                  return _t142.setOther(new Se(!0)), _t142;
                } catch (t) {
                  if (null !== n) throw n;
                  throw t;
                }
              }
            }, {
              key: "decodeBitMatrixParser",
              value: function decodeBitMatrixParser(t, e) {
                var r = t.readVersion(),
                  n = t.readFormatInformation().getErrorCorrectionLevel(),
                  i = t.readCodewords(),
                  o = Ce.getDataBlocks(i, r, n);
                var s = 0;
                var _iterator43 = _createForOfIteratorHelper(o),
                  _step43;
                try {
                  for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                    var _t143 = _step43.value;
                    s += _t143.getNumDataCodewords();
                  }
                } catch (err) {
                  _iterator43.e(err);
                } finally {
                  _iterator43.f();
                }
                var a = new Uint8Array(s);
                var l = 0;
                var _iterator44 = _createForOfIteratorHelper(o),
                  _step44;
                try {
                  for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                    var _t144 = _step44.value;
                    var _e139 = _t144.getCodewords(),
                      _r102 = _t144.getNumDataCodewords();
                    this.correctErrors(_e139, _r102);
                    for (var _t145 = 0; _t145 < _r102; _t145++) a[l++] = _e139[_t145];
                  }
                } catch (err) {
                  _iterator44.e(err);
                } finally {
                  _iterator44.f();
                }
                return pe.decode(a, r, n, e);
              }
            }, {
              key: "correctErrors",
              value: function correctErrors(t, e) {
                var r = new Int32Array(t);
                try {
                  this.rsDecoder.decode(r, t.length - e);
                } catch (t) {
                  throw new c();
                }
                for (var _n71 = 0; _n71 < e; _n71++) t[_n71] = r[_n71];
              }
            }]);
            return _e;
          }();
          var Te = /*#__PURE__*/function (_nt) {
            _inherits(Te, _nt);
            var _super48 = _createSuper(Te);
            function Te(t, e, r) {
              var _this33;
              _classCallCheck(this, Te);
              _this33 = _super48.call(this, t, e), _this33.estimatedModuleSize = r;
              return _this33;
            }
            _createClass(Te, [{
              key: "aboutEquals",
              value: function aboutEquals(t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                  var _e140 = Math.abs(t - this.estimatedModuleSize);
                  return _e140 <= 1 || _e140 <= this.estimatedModuleSize;
                }
                return !1;
              }
            }, {
              key: "combineEstimate",
              value: function combineEstimate(t, e, r) {
                var n = (this.getX() + e) / 2,
                  i = (this.getY() + t) / 2,
                  o = (this.estimatedModuleSize + r) / 2;
                return new Te(n, i, o);
              }
            }]);
            return Te;
          }(nt);
          var ye = /*#__PURE__*/function () {
            function ye(t, e, r, n, i, o, s) {
              _classCallCheck(this, ye);
              this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = i, this.moduleSize = o, this.resultPointCallback = s, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
            }
            _createClass(ye, [{
              key: "find",
              value: function find() {
                var t = this.startX,
                  e = this.height,
                  r = t + this.width,
                  n = this.startY + e / 2,
                  i = new Int32Array(3),
                  o = this.image;
                for (var _s32 = 0; _s32 < e; _s32++) {
                  var _e141 = n + (0 == (1 & _s32) ? Math.floor((_s32 + 1) / 2) : -Math.floor((_s32 + 1) / 2));
                  i[0] = 0, i[1] = 0, i[2] = 0;
                  var _a20 = t;
                  for (; _a20 < r && !o.get(_a20, _e141);) _a20++;
                  var _l16 = 0;
                  for (; _a20 < r;) {
                    if (o.get(_a20, _e141)) {
                      if (1 === _l16) i[1]++;else if (2 === _l16) {
                        if (this.foundPatternCross(i)) {
                          var _t146 = this.handlePossibleCenter(i, _e141, _a20);
                          if (null !== _t146) return _t146;
                        }
                        i[0] = i[2], i[1] = 1, i[2] = 0, _l16 = 1;
                      } else i[++_l16]++;
                    } else 1 === _l16 && _l16++, i[_l16]++;
                    _a20++;
                  }
                  if (this.foundPatternCross(i)) {
                    var _t147 = this.handlePossibleCenter(i, _e141, r);
                    if (null !== _t147) return _t147;
                  }
                }
                if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                throw new N();
              }
            }, {
              key: "foundPatternCross",
              value: function foundPatternCross(t) {
                var e = this.moduleSize,
                  r = e / 2;
                for (var _n72 = 0; _n72 < 3; _n72++) if (Math.abs(e - t[_n72]) >= r) return !1;
                return !0;
              }
            }, {
              key: "crossCheckVertical",
              value: function crossCheckVertical(t, e, r, n) {
                var i = this.image,
                  o = i.getHeight(),
                  s = this.crossCheckStateCount;
                s[0] = 0, s[1] = 0, s[2] = 0;
                var a = t;
                for (; a >= 0 && i.get(e, a) && s[1] <= r;) s[1]++, a--;
                if (a < 0 || s[1] > r) return NaN;
                for (; a >= 0 && !i.get(e, a) && s[0] <= r;) s[0]++, a--;
                if (s[0] > r) return NaN;
                for (a = t + 1; a < o && i.get(e, a) && s[1] <= r;) s[1]++, a++;
                if (a === o || s[1] > r) return NaN;
                for (; a < o && !i.get(e, a) && s[2] <= r;) s[2]++, a++;
                if (s[2] > r) return NaN;
                var l = s[0] + s[1] + s[2];
                return 5 * Math.abs(l - n) >= 2 * n ? NaN : this.foundPatternCross(s) ? ye.centerFromEnd(s, a) : NaN;
              }
            }, {
              key: "handlePossibleCenter",
              value: function handlePossibleCenter(t, e, r) {
                var n = t[0] + t[1] + t[2],
                  i = ye.centerFromEnd(t, r),
                  o = this.crossCheckVertical(e, i, 2 * t[1], n);
                if (!isNaN(o)) {
                  var _e142 = (t[0] + t[1] + t[2]) / 3;
                  var _iterator45 = _createForOfIteratorHelper(this.possibleCenters),
                    _step45;
                  try {
                    for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                      var _t148 = _step45.value;
                      if (_t148.aboutEquals(_e142, o, i)) return _t148.combineEstimate(o, i, _e142);
                    }
                  } catch (err) {
                    _iterator45.e(err);
                  } finally {
                    _iterator45.f();
                  }
                  var _r103 = new Te(i, o, _e142);
                  this.possibleCenters.push(_r103), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(_r103);
                }
                return null;
              }
            }], [{
              key: "centerFromEnd",
              value: function centerFromEnd(t, e) {
                return e - t[2] - t[1] / 2;
              }
            }]);
            return ye;
          }();
          var Ne = /*#__PURE__*/function (_nt2) {
            _inherits(Ne, _nt2);
            var _super49 = _createSuper(Ne);
            function Ne(t, e, r, n) {
              var _this34;
              _classCallCheck(this, Ne);
              _this34 = _super49.call(this, t, e), _this34.estimatedModuleSize = r, _this34.count = n, void 0 === n && (_this34.count = 1);
              return _this34;
            }
            _createClass(Ne, [{
              key: "getEstimatedModuleSize",
              value: function getEstimatedModuleSize() {
                return this.estimatedModuleSize;
              }
            }, {
              key: "getCount",
              value: function getCount() {
                return this.count;
              }
            }, {
              key: "aboutEquals",
              value: function aboutEquals(t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                  var _e143 = Math.abs(t - this.estimatedModuleSize);
                  return _e143 <= 1 || _e143 <= this.estimatedModuleSize;
                }
                return !1;
              }
            }, {
              key: "combineEstimate",
              value: function combineEstimate(t, e, r) {
                var n = this.count + 1,
                  i = (this.count * this.getX() + e) / n,
                  o = (this.count * this.getY() + t) / n,
                  s = (this.count * this.estimatedModuleSize + r) / n;
                return new Ne(i, o, s, n);
              }
            }]);
            return Ne;
          }(nt);
          var Me = /*#__PURE__*/function () {
            function Me(t) {
              _classCallCheck(this, Me);
              this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2];
            }
            _createClass(Me, [{
              key: "getBottomLeft",
              value: function getBottomLeft() {
                return this.bottomLeft;
              }
            }, {
              key: "getTopLeft",
              value: function getTopLeft() {
                return this.topLeft;
              }
            }, {
              key: "getTopRight",
              value: function getTopRight() {
                return this.topRight;
              }
            }]);
            return Me;
          }();
          var De = /*#__PURE__*/function () {
            function De(t, e) {
              _classCallCheck(this, De);
              this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e;
            }
            _createClass(De, [{
              key: "getImage",
              value: function getImage() {
                return this.image;
              }
            }, {
              key: "getPossibleCenters",
              value: function getPossibleCenters() {
                return this.possibleCenters;
              }
            }, {
              key: "find",
              value: function find(t) {
                var e = null != t && void 0 !== t.get(E.TRY_HARDER),
                  r = null != t && void 0 !== t.get(E.PURE_BARCODE),
                  n = this.image,
                  i = n.getHeight(),
                  o = n.getWidth();
                var s = Math.floor(3 * i / (4 * De.MAX_MODULES));
                (s < De.MIN_SKIP || e) && (s = De.MIN_SKIP);
                var a = !1;
                var l = new Int32Array(5);
                for (var _t149 = s - 1; _t149 < i && !a; _t149 += s) {
                  l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
                  var _e144 = 0;
                  for (var _i58 = 0; _i58 < o; _i58++) if (n.get(_i58, _t149)) 1 == (1 & _e144) && _e144++, l[_e144]++;else if (0 == (1 & _e144)) {
                    if (4 === _e144) {
                      if (De.foundPatternCross(l)) {
                        if (!0 !== this.handlePossibleCenter(l, _t149, _i58, r)) {
                          l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, _e144 = 3;
                          continue;
                        }
                        if (s = 2, !0 === this.hasSkipped) a = this.haveMultiplyConfirmedCenters();else {
                          var _e145 = this.findRowSkip();
                          _e145 > l[2] && (_t149 += _e145 - l[2] - s, _i58 = o - 1);
                        }
                        _e144 = 0, l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
                      } else l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, _e144 = 3;
                    } else l[++_e144]++;
                  } else l[_e144]++;
                  De.foundPatternCross(l) && !0 === this.handlePossibleCenter(l, _t149, o, r) && (s = l[0], this.hasSkipped && (a = this.haveMultiplyConfirmedCenters()));
                }
                var c = this.selectBestPatterns();
                return nt.orderBestPatterns(c), new Me(c);
              }
            }, {
              key: "getCrossCheckStateCount",
              value: function getCrossCheckStateCount() {
                var t = this.crossCheckStateCount;
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t;
              }
            }, {
              key: "crossCheckDiagonal",
              value: function crossCheckDiagonal(t, e, r, n) {
                var i = this.getCrossCheckStateCount();
                var o = 0;
                var s = this.image;
                for (; t >= o && e >= o && s.get(e - o, t - o);) i[2]++, o++;
                if (t < o || e < o) return !1;
                for (; t >= o && e >= o && !s.get(e - o, t - o) && i[1] <= r;) i[1]++, o++;
                if (t < o || e < o || i[1] > r) return !1;
                for (; t >= o && e >= o && s.get(e - o, t - o) && i[0] <= r;) i[0]++, o++;
                if (i[0] > r) return !1;
                var a = s.getHeight(),
                  l = s.getWidth();
                for (o = 1; t + o < a && e + o < l && s.get(e + o, t + o);) i[2]++, o++;
                if (t + o >= a || e + o >= l) return !1;
                for (; t + o < a && e + o < l && !s.get(e + o, t + o) && i[3] < r;) i[3]++, o++;
                if (t + o >= a || e + o >= l || i[3] >= r) return !1;
                for (; t + o < a && e + o < l && s.get(e + o, t + o) && i[4] < r;) i[4]++, o++;
                if (i[4] >= r) return !1;
                var c = i[0] + i[1] + i[2] + i[3] + i[4];
                return Math.abs(c - n) < 2 * n && De.foundPatternCross(i);
              }
            }, {
              key: "crossCheckVertical",
              value: function crossCheckVertical(t, e, r, n) {
                var i = this.image,
                  o = i.getHeight(),
                  s = this.getCrossCheckStateCount();
                var a = t;
                for (; a >= 0 && i.get(e, a);) s[2]++, a--;
                if (a < 0) return NaN;
                for (; a >= 0 && !i.get(e, a) && s[1] <= r;) s[1]++, a--;
                if (a < 0 || s[1] > r) return NaN;
                for (; a >= 0 && i.get(e, a) && s[0] <= r;) s[0]++, a--;
                if (s[0] > r) return NaN;
                for (a = t + 1; a < o && i.get(e, a);) s[2]++, a++;
                if (a === o) return NaN;
                for (; a < o && !i.get(e, a) && s[3] < r;) s[3]++, a++;
                if (a === o || s[3] >= r) return NaN;
                for (; a < o && i.get(e, a) && s[4] < r;) s[4]++, a++;
                if (s[4] >= r) return NaN;
                var l = s[0] + s[1] + s[2] + s[3] + s[4];
                return 5 * Math.abs(l - n) >= 2 * n ? NaN : De.foundPatternCross(s) ? De.centerFromEnd(s, a) : NaN;
              }
            }, {
              key: "crossCheckHorizontal",
              value: function crossCheckHorizontal(t, e, r, n) {
                var i = this.image,
                  o = i.getWidth(),
                  s = this.getCrossCheckStateCount();
                var a = t;
                for (; a >= 0 && i.get(a, e);) s[2]++, a--;
                if (a < 0) return NaN;
                for (; a >= 0 && !i.get(a, e) && s[1] <= r;) s[1]++, a--;
                if (a < 0 || s[1] > r) return NaN;
                for (; a >= 0 && i.get(a, e) && s[0] <= r;) s[0]++, a--;
                if (s[0] > r) return NaN;
                for (a = t + 1; a < o && i.get(a, e);) s[2]++, a++;
                if (a === o) return NaN;
                for (; a < o && !i.get(a, e) && s[3] < r;) s[3]++, a++;
                if (a === o || s[3] >= r) return NaN;
                for (; a < o && i.get(a, e) && s[4] < r;) s[4]++, a++;
                if (s[4] >= r) return NaN;
                var l = s[0] + s[1] + s[2] + s[3] + s[4];
                return 5 * Math.abs(l - n) >= n ? NaN : De.foundPatternCross(s) ? De.centerFromEnd(s, a) : NaN;
              }
            }, {
              key: "handlePossibleCenter",
              value: function handlePossibleCenter(t, e, r, n) {
                var i = t[0] + t[1] + t[2] + t[3] + t[4];
                var o = De.centerFromEnd(t, r),
                  s = this.crossCheckVertical(e, Math.floor(o), t[2], i);
                if (!isNaN(s) && (o = this.crossCheckHorizontal(Math.floor(o), Math.floor(s), t[2], i), !isNaN(o) && (!n || this.crossCheckDiagonal(Math.floor(s), Math.floor(o), t[2], i)))) {
                  var _t150 = i / 7;
                  var _e146 = !1;
                  var _r104 = this.possibleCenters;
                  for (var _n73 = 0, _i59 = _r104.length; _n73 < _i59; _n73++) {
                    var _i60 = _r104[_n73];
                    if (_i60.aboutEquals(_t150, s, o)) {
                      _r104[_n73] = _i60.combineEstimate(s, o, _t150), _e146 = !0;
                      break;
                    }
                  }
                  if (!_e146) {
                    var _e147 = new Ne(o, s, _t150);
                    _r104.push(_e147), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(_e147);
                  }
                  return !0;
                }
                return !1;
              }
            }, {
              key: "findRowSkip",
              value: function findRowSkip() {
                if (this.possibleCenters.length <= 1) return 0;
                var t = null;
                var _iterator46 = _createForOfIteratorHelper(this.possibleCenters),
                  _step46;
                try {
                  for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                    var _e148 = _step46.value;
                    if (_e148.getCount() >= De.CENTER_QUORUM) {
                      if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.getX() - _e148.getX()) - Math.abs(t.getY() - _e148.getY())) / 2);
                      t = _e148;
                    }
                  }
                } catch (err) {
                  _iterator46.e(err);
                } finally {
                  _iterator46.f();
                }
                return 0;
              }
            }, {
              key: "haveMultiplyConfirmedCenters",
              value: function haveMultiplyConfirmedCenters() {
                var t = 0,
                  e = 0;
                var r = this.possibleCenters.length;
                var _iterator47 = _createForOfIteratorHelper(this.possibleCenters),
                  _step47;
                try {
                  for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                    var _r105 = _step47.value;
                    _r105.getCount() >= De.CENTER_QUORUM && (t++, e += _r105.getEstimatedModuleSize());
                  }
                } catch (err) {
                  _iterator47.e(err);
                } finally {
                  _iterator47.f();
                }
                if (t < 3) return !1;
                var n = e / r;
                var i = 0;
                var _iterator48 = _createForOfIteratorHelper(this.possibleCenters),
                  _step48;
                try {
                  for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                    var _t151 = _step48.value;
                    i += Math.abs(_t151.getEstimatedModuleSize() - n);
                  }
                } catch (err) {
                  _iterator48.e(err);
                } finally {
                  _iterator48.f();
                }
                return i <= .05 * e;
              }
            }, {
              key: "selectBestPatterns",
              value: function selectBestPatterns() {
                var t = this.possibleCenters.length;
                if (t < 3) throw new N();
                var e = this.possibleCenters;
                var r;
                if (t > 3) {
                  var _n74 = 0,
                    _i61 = 0;
                  var _iterator49 = _createForOfIteratorHelper(this.possibleCenters),
                    _step49;
                  try {
                    for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                      var _t153 = _step49.value;
                      var _e149 = _t153.getEstimatedModuleSize();
                      _n74 += _e149, _i61 += _e149 * _e149;
                    }
                  } catch (err) {
                    _iterator49.e(err);
                  } finally {
                    _iterator49.f();
                  }
                  r = _n74 / t;
                  var _o55 = Math.sqrt(_i61 / t - r * r);
                  e.sort(function (t, e) {
                    var n = Math.abs(e.getEstimatedModuleSize() - r),
                      i = Math.abs(t.getEstimatedModuleSize() - r);
                    return n < i ? -1 : n > i ? 1 : 0;
                  });
                  var _s33 = Math.max(.2 * r, _o55);
                  for (var _t152 = 0; _t152 < e.length && e.length > 3; _t152++) {
                    var _n75 = e[_t152];
                    Math.abs(_n75.getEstimatedModuleSize() - r) > _s33 && (e.splice(_t152, 1), _t152--);
                  }
                }
                if (e.length > 3) {
                  var _t154 = 0;
                  var _iterator50 = _createForOfIteratorHelper(e),
                    _step50;
                  try {
                    for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                      var _r106 = _step50.value;
                      _t154 += _r106.getEstimatedModuleSize();
                    }
                  } catch (err) {
                    _iterator50.e(err);
                  } finally {
                    _iterator50.f();
                  }
                  r = _t154 / e.length, e.sort(function (t, e) {
                    if (e.getCount() === t.getCount()) {
                      var _n76 = Math.abs(e.getEstimatedModuleSize() - r),
                        _i62 = Math.abs(t.getEstimatedModuleSize() - r);
                      return _n76 < _i62 ? 1 : _n76 > _i62 ? -1 : 0;
                    }
                    return e.getCount() - t.getCount();
                  }), e.splice(3);
                }
                return [e[0], e[1], e[2]];
              }
            }], [{
              key: "centerFromEnd",
              value: function centerFromEnd(t, e) {
                return e - t[4] - t[3] - t[2] / 2;
              }
            }, {
              key: "foundPatternCross",
              value: function foundPatternCross(t) {
                var e = 0;
                for (var _r107 = 0; _r107 < 5; _r107++) {
                  var _n77 = t[_r107];
                  if (0 === _n77) return !1;
                  e += _n77;
                }
                if (e < 7) return !1;
                var r = e / 7,
                  n = r / 2;
                return Math.abs(r - t[0]) < n && Math.abs(r - t[1]) < n && Math.abs(3 * r - t[2]) < 3 * n && Math.abs(r - t[3]) < n && Math.abs(r - t[4]) < n;
              }
            }]);
            return De;
          }();
          De.CENTER_QUORUM = 2, De.MIN_SKIP = 3, De.MAX_MODULES = 57;
          var Re = /*#__PURE__*/function () {
            function Re(t) {
              _classCallCheck(this, Re);
              this.image = t;
            }
            _createClass(Re, [{
              key: "getImage",
              value: function getImage() {
                return this.image;
              }
            }, {
              key: "getResultPointCallback",
              value: function getResultPointCallback() {
                return this.resultPointCallback;
              }
            }, {
              key: "detect",
              value: function detect(t) {
                this.resultPointCallback = null == t ? null : t.get(E.NEED_RESULT_POINT_CALLBACK);
                var e = new De(this.image, this.resultPointCallback).find(t);
                return this.processFinderPatternInfo(e);
              }
            }, {
              key: "processFinderPatternInfo",
              value: function processFinderPatternInfo(t) {
                var e = t.getTopLeft(),
                  r = t.getTopRight(),
                  n = t.getBottomLeft(),
                  i = this.calculateModuleSize(e, r, n);
                if (i < 1) throw new N("No pattern found in proccess finder.");
                var o = Re.computeDimension(e, r, n, i),
                  s = Ae.getProvisionalVersionForDimension(o),
                  a = s.getDimensionForVersion() - 7;
                var l = null;
                if (s.getAlignmentPatternCenters().length > 0) {
                  var _t155 = r.getX() - e.getX() + n.getX(),
                    _o56 = r.getY() - e.getY() + n.getY(),
                    _s34 = 1 - 3 / a,
                    _c9 = Math.floor(e.getX() + _s34 * (_t155 - e.getX())),
                    _h8 = Math.floor(e.getY() + _s34 * (_o56 - e.getY()));
                  for (var _t156 = 4; _t156 <= 16; _t156 <<= 1) try {
                    l = this.findAlignmentInRegion(i, _c9, _h8, _t156);
                    break;
                  } catch (t) {
                    if (!(t instanceof N)) throw t;
                  }
                }
                var c = Re.createTransform(e, r, n, l, o),
                  h = Re.sampleGrid(this.image, c, o);
                var u;
                return u = null === l ? [n, e, r] : [n, e, r, l], new it(h, u);
              }
            }, {
              key: "calculateModuleSize",
              value: function calculateModuleSize(t, e, r) {
                return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2;
              }
            }, {
              key: "calculateModuleSizeOneWay",
              value: function calculateModuleSizeOneWay(t, e) {
                var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                  n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
                return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14;
              }
            }, {
              key: "sizeOfBlackWhiteBlackRunBothWays",
              value: function sizeOfBlackWhiteBlackRunBothWays(t, e, r, n) {
                var i = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                  o = 1,
                  s = t - (r - t);
                s < 0 ? (o = t / (t - s), s = 0) : s >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - t) / (s - t), s = this.image.getWidth() - 1);
                var a = Math.floor(e - (n - e) * o);
                return o = 1, a < 0 ? (o = e / (e - a), a = 0) : a >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - e) / (a - e), a = this.image.getHeight() - 1), s = Math.floor(t + (s - t) * o), i += this.sizeOfBlackWhiteBlackRun(t, e, s, a), i - 1;
              }
            }, {
              key: "sizeOfBlackWhiteBlackRun",
              value: function sizeOfBlackWhiteBlackRun(t, e, r, n) {
                var i = Math.abs(n - e) > Math.abs(r - t);
                if (i) {
                  var _i63 = t;
                  t = e, e = _i63, _i63 = r, r = n, n = _i63;
                }
                var o = Math.abs(r - t),
                  s = Math.abs(n - e);
                var a = -o / 2;
                var l = t < r ? 1 : -1,
                  c = e < n ? 1 : -1;
                var h = 0;
                var u = r + l;
                for (var _r108 = t, _d7 = e; _r108 !== u; _r108 += l) {
                  var _l17 = i ? _d7 : _r108,
                    _u7 = i ? _r108 : _d7;
                  if (1 === h === this.image.get(_l17, _u7)) {
                    if (2 === h) return et.distance(_r108, _d7, t, e);
                    h++;
                  }
                  if (a += s, a > 0) {
                    if (_d7 === n) break;
                    _d7 += c, a -= o;
                  }
                }
                return 2 === h ? et.distance(r + l, n, t, e) : NaN;
              }
            }, {
              key: "findAlignmentInRegion",
              value: function findAlignmentInRegion(t, e, r, n) {
                var i = Math.floor(n * t),
                  o = Math.max(0, e - i),
                  s = Math.min(this.image.getWidth() - 1, e + i);
                if (s - o < 3 * t) throw new N("Alignment top exceeds estimated module size.");
                var a = Math.max(0, r - i),
                  l = Math.min(this.image.getHeight() - 1, r + i);
                if (l - a < 3 * t) throw new N("Alignment bottom exceeds estimated module size.");
                return new ye(this.image, o, a, s - o, l - a, t, this.resultPointCallback).find();
              }
            }], [{
              key: "createTransform",
              value: function createTransform(t, e, r, n, i) {
                var o = i - 3.5;
                var s, a, l, c;
                return null !== n ? (s = n.getX(), a = n.getY(), l = o - 3, c = l) : (s = e.getX() - t.getX() + r.getX(), a = e.getY() - t.getY() + r.getY(), l = o, c = o), lt.quadrilateralToQuadrilateral(3.5, 3.5, o, 3.5, l, c, 3.5, o, t.getX(), t.getY(), e.getX(), e.getY(), s, a, r.getX(), r.getY());
              }
            }, {
              key: "sampleGrid",
              value: function sampleGrid(t, e, r) {
                return ht.getInstance().sampleGridWithTransform(t, r, r, e);
              }
            }, {
              key: "computeDimension",
              value: function computeDimension(t, e, r, n) {
                var i = et.round(nt.distance(t, e) / n),
                  o = et.round(nt.distance(t, r) / n);
                var s = Math.floor((i + o) / 2) + 7;
                switch (3 & s) {
                  case 0:
                    s++;
                    break;
                  case 2:
                    s--;
                    break;
                  case 3:
                    throw new N("Dimensions could be not found.");
                }
                return s;
              }
            }]);
            return Re;
          }();
          var Oe = /*#__PURE__*/function () {
            function Oe() {
              _classCallCheck(this, Oe);
              this.decoder = new _e();
            }
            _createClass(Oe, [{
              key: "getDecoder",
              value: function getDecoder() {
                return this.decoder;
              }
            }, {
              key: "decode",
              value: function decode(t, e) {
                var r, n;
                if (null != e && void 0 !== e.get(E.PURE_BARCODE)) {
                  var _i64 = Oe.extractPureBits(t.getBlackMatrix());
                  r = this.decoder.decodeBitMatrix(_i64, e), n = Oe.NO_POINTS;
                } else {
                  var _i65 = new Re(t.getBlackMatrix()).detect(e);
                  r = this.decoder.decodeBitMatrix(_i65.getBits(), e), n = _i65.getPoints();
                }
                r.getOther() instanceof Se && r.getOther().applyMirroredCorrection(n);
                var i = new F(r.getText(), r.getRawBytes(), void 0, n, k.QR_CODE, void 0),
                  o = r.getByteSegments();
                null !== o && i.putMetadata(X.BYTE_SEGMENTS, o);
                var s = r.getECLevel();
                return null !== s && i.putMetadata(X.ERROR_CORRECTION_LEVEL, s), r.hasStructuredAppend() && (i.putMetadata(X.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), i.putMetadata(X.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), i;
              }
            }, {
              key: "reset",
              value: function reset() {}
            }], [{
              key: "extractPureBits",
              value: function extractPureBits(t) {
                var e = t.getTopLeftOnBit(),
                  r = t.getBottomRightOnBit();
                if (null === e || null === r) throw new N();
                var n = this.moduleSize(e, t);
                var i = e[1],
                  o = r[1],
                  s = e[0],
                  a = r[0];
                if (s >= a || i >= o) throw new N();
                if (o - i != a - s && (a = s + (o - i), a >= t.getWidth())) throw new N();
                var l = Math.round((a - s + 1) / n),
                  c = Math.round((o - i + 1) / n);
                if (l <= 0 || c <= 0) throw new N();
                if (c !== l) throw new N();
                var h = Math.floor(n / 2);
                i += h, s += h;
                var u = s + Math.floor((l - 1) * n) - a;
                if (u > 0) {
                  if (u > h) throw new N();
                  s -= u;
                }
                var d = i + Math.floor((c - 1) * n) - o;
                if (d > 0) {
                  if (d > h) throw new N();
                  i -= d;
                }
                var g = new y(l, c);
                for (var _e150 = 0; _e150 < c; _e150++) {
                  var _r109 = i + Math.floor(_e150 * n);
                  for (var _i66 = 0; _i66 < l; _i66++) t.get(s + Math.floor(_i66 * n), _r109) && g.set(_i66, _e150);
                }
                return g;
              }
            }, {
              key: "moduleSize",
              value: function moduleSize(t, e) {
                var r = e.getHeight(),
                  n = e.getWidth();
                var i = t[0],
                  o = t[1],
                  s = !0,
                  a = 0;
                for (; i < n && o < r;) {
                  if (s !== e.get(i, o)) {
                    if (5 == ++a) break;
                    s = !s;
                  }
                  i++, o++;
                }
                if (i === n || o === r) throw new N();
                return (i - t[0]) / 7;
              }
            }]);
            return Oe;
          }();
          Oe.NO_POINTS = new Array();
          var be = /*#__PURE__*/function () {
            function be() {
              _classCallCheck(this, be);
            }
            _createClass(be, [{
              key: "PDF417Common",
              value: function PDF417Common() {}
            }], [{
              key: "getBitCountSum",
              value: function getBitCountSum(t) {
                return et.sum(t);
              }
            }, {
              key: "toIntArray",
              value: function toIntArray(t) {
                if (null == t || !t.length) return be.EMPTY_INT_ARRAY;
                var e = new Int32Array(t.length);
                var r = 0;
                var _iterator51 = _createForOfIteratorHelper(t),
                  _step51;
                try {
                  for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                    var _n78 = _step51.value;
                    e[r++] = _n78;
                  }
                } catch (err) {
                  _iterator51.e(err);
                } finally {
                  _iterator51.f();
                }
                return e;
              }
            }, {
              key: "getCodeword",
              value: function getCodeword(t) {
                var e = f.binarySearch(be.SYMBOL_TABLE, 262143 & t);
                return e < 0 ? -1 : (be.CODEWORD_TABLE[e] - 1) % be.NUMBER_OF_CODEWORDS;
              }
            }]);
            return be;
          }();
          be.NUMBER_OF_CODEWORDS = 929, be.MAX_CODEWORDS_IN_BARCODE = be.NUMBER_OF_CODEWORDS - 1, be.MIN_ROWS_IN_BARCODE = 3, be.MAX_ROWS_IN_BARCODE = 90, be.MODULES_IN_CODEWORD = 17, be.MODULES_IN_STOP_PATTERN = 18, be.BARS_IN_MODULE = 8, be.EMPTY_INT_ARRAY = new Int32Array([]), be.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), be.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]);
          var Le = /*#__PURE__*/function () {
            function Le(t, e) {
              _classCallCheck(this, Le);
              this.bits = t, this.points = e;
            }
            _createClass(Le, [{
              key: "getBits",
              value: function getBits() {
                return this.bits;
              }
            }, {
              key: "getPoints",
              value: function getPoints() {
                return this.points;
              }
            }]);
            return Le;
          }();
          var Be = /*#__PURE__*/function () {
            function Be() {
              _classCallCheck(this, Be);
            }
            _createClass(Be, null, [{
              key: "detectMultiple",
              value: function detectMultiple(t, e, r) {
                var n = t.getBlackMatrix(),
                  i = Be.detect(r, n);
                return i.length || (n = n.clone(), n.rotate180(), i = Be.detect(r, n)), new Le(n, i);
              }
            }, {
              key: "detect",
              value: function detect(t, e) {
                var r = new Array();
                var n = 0,
                  i = 0,
                  o = !1;
                for (; n < e.getHeight();) {
                  var _s35 = Be.findVertices(e, n, i);
                  if (null != _s35[0] || null != _s35[3]) {
                    if (o = !0, r.push(_s35), !t) break;
                    null != _s35[2] ? (i = Math.trunc(_s35[2].getX()), n = Math.trunc(_s35[2].getY())) : (i = Math.trunc(_s35[4].getX()), n = Math.trunc(_s35[4].getY()));
                  } else {
                    if (!o) break;
                    o = !1, i = 0;
                    var _iterator52 = _createForOfIteratorHelper(r),
                      _step52;
                    try {
                      for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                        var _t157 = _step52.value;
                        null != _t157[1] && (n = Math.trunc(Math.max(n, _t157[1].getY()))), null != _t157[3] && (n = Math.max(n, Math.trunc(_t157[3].getY())));
                      }
                    } catch (err) {
                      _iterator52.e(err);
                    } finally {
                      _iterator52.f();
                    }
                    n += Be.ROW_STEP;
                  }
                }
                return r;
              }
            }, {
              key: "findVertices",
              value: function findVertices(t, e, r) {
                var n = t.getHeight(),
                  i = t.getWidth(),
                  o = new Array(8);
                return Be.copyToResult(o, Be.findRowsWithPattern(t, n, i, e, r, Be.START_PATTERN), Be.INDEXES_START_PATTERN), null != o[4] && (r = Math.trunc(o[4].getX()), e = Math.trunc(o[4].getY())), Be.copyToResult(o, Be.findRowsWithPattern(t, n, i, e, r, Be.STOP_PATTERN), Be.INDEXES_STOP_PATTERN), o;
              }
            }, {
              key: "copyToResult",
              value: function copyToResult(t, e, r) {
                for (var _n79 = 0; _n79 < r.length; _n79++) t[r[_n79]] = e[_n79];
              }
            }, {
              key: "findRowsWithPattern",
              value: function findRowsWithPattern(t, e, r, n, i, o) {
                var s = new Array(4);
                var a = !1;
                var l = new Int32Array(o.length);
                for (; n < e; n += Be.ROW_STEP) {
                  var _e151 = Be.findGuardPattern(t, i, n, r, !1, o, l);
                  if (null != _e151) {
                    for (; n > 0;) {
                      var _s36 = Be.findGuardPattern(t, i, --n, r, !1, o, l);
                      if (null == _s36) {
                        n++;
                        break;
                      }
                      _e151 = _s36;
                    }
                    s[0] = new nt(_e151[0], n), s[1] = new nt(_e151[1], n), a = !0;
                    break;
                  }
                }
                var c = n + 1;
                if (a) {
                  var _n80 = 0,
                    _i67 = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]);
                  for (; c < e; c++) {
                    var _e152 = Be.findGuardPattern(t, _i67[0], c, r, !1, o, l);
                    if (null != _e152 && Math.abs(_i67[0] - _e152[0]) < Be.MAX_PATTERN_DRIFT && Math.abs(_i67[1] - _e152[1]) < Be.MAX_PATTERN_DRIFT) _i67 = _e152, _n80 = 0;else {
                      if (_n80 > Be.SKIPPED_ROW_COUNT_MAX) break;
                      _n80++;
                    }
                  }
                  c -= _n80 + 1, s[2] = new nt(_i67[0], c), s[3] = new nt(_i67[1], c);
                }
                return c - n < Be.BARCODE_MIN_HEIGHT && f.fill(s, null), s;
              }
            }, {
              key: "findGuardPattern",
              value: function findGuardPattern(t, e, r, n, i, o, s) {
                f.fillWithin(s, 0, s.length, 0);
                var a = e,
                  l = 0;
                for (; t.get(a, r) && a > 0 && l++ < Be.MAX_PIXEL_DRIFT;) a--;
                var c = a,
                  h = 0,
                  d = o.length;
                for (var _e153 = i; c < n; c++) if (t.get(c, r) !== _e153) s[h]++;else {
                  if (h === d - 1) {
                    if (Be.patternMatchVariance(s, o, Be.MAX_INDIVIDUAL_VARIANCE) < Be.MAX_AVG_VARIANCE) return new Int32Array([a, c]);
                    a += s[0] + s[1], u.arraycopy(s, 2, s, 0, h - 1), s[h - 1] = 0, s[h] = 0, h--;
                  } else h++;
                  s[h] = 1, _e153 = !_e153;
                }
                return h === d - 1 && Be.patternMatchVariance(s, o, Be.MAX_INDIVIDUAL_VARIANCE) < Be.MAX_AVG_VARIANCE ? new Int32Array([a, c - 1]) : null;
              }
            }, {
              key: "patternMatchVariance",
              value: function patternMatchVariance(t, e, r) {
                var n = t.length,
                  i = 0,
                  o = 0;
                for (var _r110 = 0; _r110 < n; _r110++) i += t[_r110], o += e[_r110];
                if (i < o) return 1 / 0;
                var s = i / o;
                r *= s;
                var a = 0;
                for (var _i68 = 0; _i68 < n; _i68++) {
                  var _n81 = t[_i68],
                    _o57 = e[_i68] * s,
                    _l18 = _n81 > _o57 ? _n81 - _o57 : _o57 - _n81;
                  if (_l18 > r) return 1 / 0;
                  a += _l18;
                }
                return a / i;
              }
            }]);
            return Be;
          }();
          Be.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), Be.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), Be.MAX_AVG_VARIANCE = .42, Be.MAX_INDIVIDUAL_VARIANCE = .8, Be.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), Be.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), Be.MAX_PIXEL_DRIFT = 3, Be.MAX_PATTERN_DRIFT = 5, Be.SKIPPED_ROW_COUNT_MAX = 25, Be.ROW_STEP = 5, Be.BARCODE_MIN_HEIGHT = 10;
          var Pe = /*#__PURE__*/function () {
            function Pe(t, e) {
              _classCallCheck(this, Pe);
              if (0 === e.length) throw new a();
              this.field = t;
              var r = e.length;
              if (r > 1 && 0 === e[0]) {
                var _t158 = 1;
                for (; _t158 < r && 0 === e[_t158];) _t158++;
                _t158 === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - _t158), u.arraycopy(e, _t158, this.coefficients, 0, this.coefficients.length));
              } else this.coefficients = e;
            }
            _createClass(Pe, [{
              key: "getCoefficients",
              value: function getCoefficients() {
                return this.coefficients;
              }
            }, {
              key: "getDegree",
              value: function getDegree() {
                return this.coefficients.length - 1;
              }
            }, {
              key: "isZero",
              value: function isZero() {
                return 0 === this.coefficients[0];
              }
            }, {
              key: "getCoefficient",
              value: function getCoefficient(t) {
                return this.coefficients[this.coefficients.length - 1 - t];
              }
            }, {
              key: "evaluateAt",
              value: function evaluateAt(t) {
                if (0 === t) return this.getCoefficient(0);
                if (1 === t) {
                  var _t159 = 0;
                  var _iterator53 = _createForOfIteratorHelper(this.coefficients),
                    _step53;
                  try {
                    for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                      var _e154 = _step53.value;
                      _t159 = this.field.add(_t159, _e154);
                    }
                  } catch (err) {
                    _iterator53.e(err);
                  } finally {
                    _iterator53.f();
                  }
                  return _t159;
                }
                var e = this.coefficients[0],
                  r = this.coefficients.length;
                for (var _n82 = 1; _n82 < r; _n82++) e = this.field.add(this.field.multiply(t, e), this.coefficients[_n82]);
                return e;
              }
            }, {
              key: "add",
              value: function add(t) {
                if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                if (this.isZero()) return t;
                if (t.isZero()) return this;
                var e = this.coefficients,
                  r = t.coefficients;
                if (e.length > r.length) {
                  var _t160 = e;
                  e = r, r = _t160;
                }
                var n = new Int32Array(r.length),
                  i = r.length - e.length;
                u.arraycopy(r, 0, n, 0, i);
                for (var _t161 = i; _t161 < r.length; _t161++) n[_t161] = this.field.add(e[_t161 - i], r[_t161]);
                return new Pe(this.field, n);
              }
            }, {
              key: "subtract",
              value: function subtract(t) {
                if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                return t.isZero() ? this : this.add(t.negative());
              }
            }, {
              key: "multiply",
              value: function multiply(t) {
                return t instanceof Pe ? this.multiplyOther(t) : this.multiplyScalar(t);
              }
            }, {
              key: "multiplyOther",
              value: function multiplyOther(t) {
                if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                if (this.isZero() || t.isZero()) return new Pe(this.field, new Int32Array([0]));
                var e = this.coefficients,
                  r = e.length,
                  n = t.coefficients,
                  i = n.length,
                  o = new Int32Array(r + i - 1);
                for (var _t162 = 0; _t162 < r; _t162++) {
                  var _r111 = e[_t162];
                  for (var _e155 = 0; _e155 < i; _e155++) o[_t162 + _e155] = this.field.add(o[_t162 + _e155], this.field.multiply(_r111, n[_e155]));
                }
                return new Pe(this.field, o);
              }
            }, {
              key: "negative",
              value: function negative() {
                var t = this.coefficients.length,
                  e = new Int32Array(t);
                for (var _r112 = 0; _r112 < t; _r112++) e[_r112] = this.field.subtract(0, this.coefficients[_r112]);
                return new Pe(this.field, e);
              }
            }, {
              key: "multiplyScalar",
              value: function multiplyScalar(t) {
                if (0 === t) return new Pe(this.field, new Int32Array([0]));
                if (1 === t) return this;
                var e = this.coefficients.length,
                  r = new Int32Array(e);
                for (var _n83 = 0; _n83 < e; _n83++) r[_n83] = this.field.multiply(this.coefficients[_n83], t);
                return new Pe(this.field, r);
              }
            }, {
              key: "multiplyByMonomial",
              value: function multiplyByMonomial(t, e) {
                if (t < 0) throw new a();
                if (0 === e) return new Pe(this.field, new Int32Array([0]));
                var r = this.coefficients.length,
                  n = new Int32Array(r + t);
                for (var _t163 = 0; _t163 < r; _t163++) n[_t163] = this.field.multiply(this.coefficients[_t163], e);
                return new Pe(this.field, n);
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = new T();
                for (var _e156 = this.getDegree(); _e156 >= 0; _e156--) {
                  var _r113 = this.getCoefficient(_e156);
                  0 !== _r113 && (_r113 < 0 ? (t.append(" - "), _r113 = -_r113) : t.length() > 0 && t.append(" + "), 0 !== _e156 && 1 === _r113 || t.append(_r113), 0 !== _e156 && (1 === _e156 ? t.append("x") : (t.append("x^"), t.append(_e156))));
                }
                return t.toString();
              }
            }]);
            return Pe;
          }();
          var ve = /*#__PURE__*/function (_ref) {
            _inherits(ve, _ref);
            var _super50 = _createSuper(ve);
            function ve(t, e) {
              var _this35;
              _classCallCheck(this, ve);
              _this35 = _super50.call(this), _this35.modulus = t, _this35.expTable = new Int32Array(t), _this35.logTable = new Int32Array(t);
              var r = 1;
              for (var _n84 = 0; _n84 < t; _n84++) _this35.expTable[_n84] = r, r = r * e % t;
              for (var _e157 = 0; _e157 < t - 1; _e157++) _this35.logTable[_this35.expTable[_e157]] = _e157;
              _this35.zero = new Pe(_assertThisInitialized(_this35), new Int32Array([0])), _this35.one = new Pe(_assertThisInitialized(_this35), new Int32Array([1]));
              return _this35;
            }
            _createClass(ve, [{
              key: "getZero",
              value: function getZero() {
                return this.zero;
              }
            }, {
              key: "getOne",
              value: function getOne() {
                return this.one;
              }
            }, {
              key: "buildMonomial",
              value: function buildMonomial(t, e) {
                if (t < 0) throw new a();
                if (0 === e) return this.zero;
                var r = new Int32Array(t + 1);
                return r[0] = e, new Pe(this, r);
              }
            }]);
            return ve;
          }( /*#__PURE__*/function () {
            function _class2() {
              _classCallCheck(this, _class2);
            }
            _createClass(_class2, [{
              key: "add",
              value: function add(t, e) {
                return (t + e) % this.modulus;
              }
            }, {
              key: "subtract",
              value: function subtract(t, e) {
                return (this.modulus + t - e) % this.modulus;
              }
            }, {
              key: "exp",
              value: function exp(t) {
                return this.expTable[t];
              }
            }, {
              key: "log",
              value: function log(t) {
                if (0 === t) throw new a();
                return this.logTable[t];
              }
            }, {
              key: "inverse",
              value: function inverse(t) {
                if (0 === t) throw new Q();
                return this.expTable[this.modulus - this.logTable[t] - 1];
              }
            }, {
              key: "multiply",
              value: function multiply(t, e) {
                return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)];
              }
            }, {
              key: "getSize",
              value: function getSize() {
                return this.modulus;
              }
            }, {
              key: "equals",
              value: function equals(t) {
                return t === this;
              }
            }]);
            return _class2;
          }());
          ve.PDF417_GF = new ve(be.NUMBER_OF_CODEWORDS, 3);
          var Fe = /*#__PURE__*/function () {
            function Fe() {
              _classCallCheck(this, Fe);
              this.field = ve.PDF417_GF;
            }
            _createClass(Fe, [{
              key: "decode",
              value: function decode(t, e, r) {
                var n = new Pe(this.field, t),
                  i = new Int32Array(e),
                  o = !1;
                for (var _t164 = e; _t164 > 0; _t164--) {
                  var _r114 = n.evaluateAt(this.field.exp(_t164));
                  i[e - _t164] = _r114, 0 !== _r114 && (o = !0);
                }
                if (!o) return 0;
                var s = this.field.getOne();
                if (null != r) {
                  var _iterator54 = _createForOfIteratorHelper(r),
                    _step54;
                  try {
                    for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                      var _e158 = _step54.value;
                      var _r115 = this.field.exp(t.length - 1 - _e158),
                        _n85 = new Pe(this.field, new Int32Array([this.field.subtract(0, _r115), 1]));
                      s = s.multiply(_n85);
                    }
                  } catch (err) {
                    _iterator54.e(err);
                  } finally {
                    _iterator54.f();
                  }
                }
                var a = new Pe(this.field, i),
                  l = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), a, e),
                  h = l[0],
                  u = l[1],
                  d = this.findErrorLocations(h),
                  g = this.findErrorMagnitudes(u, h, d);
                for (var _e159 = 0; _e159 < d.length; _e159++) {
                  var _r116 = t.length - 1 - this.field.log(d[_e159]);
                  if (_r116 < 0) throw c.getChecksumInstance();
                  t[_r116] = this.field.subtract(t[_r116], g[_e159]);
                }
                return d.length;
              }
            }, {
              key: "runEuclideanAlgorithm",
              value: function runEuclideanAlgorithm(t, e, r) {
                if (t.getDegree() < e.getDegree()) {
                  var _r117 = t;
                  t = e, e = _r117;
                }
                var n = t,
                  i = e,
                  o = this.field.getZero(),
                  s = this.field.getOne();
                for (; i.getDegree() >= Math.round(r / 2);) {
                  var _t165 = n,
                    _e160 = o;
                  if (n = i, o = s, n.isZero()) throw c.getChecksumInstance();
                  i = _t165;
                  var _r118 = this.field.getZero(),
                    _a21 = n.getCoefficient(n.getDegree()),
                    _l19 = this.field.inverse(_a21);
                  for (; i.getDegree() >= n.getDegree() && !i.isZero();) {
                    var _t166 = i.getDegree() - n.getDegree(),
                      _e161 = this.field.multiply(i.getCoefficient(i.getDegree()), _l19);
                    _r118 = _r118.add(this.field.buildMonomial(_t166, _e161)), i = i.subtract(n.multiplyByMonomial(_t166, _e161));
                  }
                  s = _r118.multiply(o).subtract(_e160).negative();
                }
                var a = s.getCoefficient(0);
                if (0 === a) throw c.getChecksumInstance();
                var l = this.field.inverse(a);
                return [s.multiply(l), i.multiply(l)];
              }
            }, {
              key: "findErrorLocations",
              value: function findErrorLocations(t) {
                var e = t.getDegree(),
                  r = new Int32Array(e),
                  n = 0;
                for (var _i69 = 1; _i69 < this.field.getSize() && n < e; _i69++) 0 === t.evaluateAt(_i69) && (r[n] = this.field.inverse(_i69), n++);
                if (n !== e) throw c.getChecksumInstance();
                return r;
              }
            }, {
              key: "findErrorMagnitudes",
              value: function findErrorMagnitudes(t, e, r) {
                var n = e.getDegree(),
                  i = new Int32Array(n);
                for (var _t167 = 1; _t167 <= n; _t167++) i[n - _t167] = this.field.multiply(_t167, e.getCoefficient(_t167));
                var o = new Pe(this.field, i),
                  s = r.length,
                  a = new Int32Array(s);
                for (var _e162 = 0; _e162 < s; _e162++) {
                  var _n86 = this.field.inverse(r[_e162]),
                    _i70 = this.field.subtract(0, t.evaluateAt(_n86)),
                    _s37 = this.field.inverse(o.evaluateAt(_n86));
                  a[_e162] = this.field.multiply(_i70, _s37);
                }
                return a;
              }
            }]);
            return Fe;
          }();
          var xe = /*#__PURE__*/function () {
            function xe(t, e, r, n, i) {
              _classCallCheck(this, xe);
              t instanceof xe ? this.constructor_2(t) : this.constructor_1(t, e, r, n, i);
            }
            _createClass(xe, [{
              key: "constructor_1",
              value: function constructor_1(t, e, r, n, i) {
                var o = null == e || null == r,
                  s = null == n || null == i;
                if (o && s) throw new N();
                o ? (e = new nt(0, n.getY()), r = new nt(0, i.getY())) : s && (n = new nt(t.getWidth() - 1, e.getY()), i = new nt(t.getWidth() - 1, r.getY())), this.image = t, this.topLeft = e, this.bottomLeft = r, this.topRight = n, this.bottomRight = i, this.minX = Math.trunc(Math.min(e.getX(), r.getX())), this.maxX = Math.trunc(Math.max(n.getX(), i.getX())), this.minY = Math.trunc(Math.min(e.getY(), n.getY())), this.maxY = Math.trunc(Math.max(r.getY(), i.getY()));
              }
            }, {
              key: "constructor_2",
              value: function constructor_2(t) {
                this.image = t.image, this.topLeft = t.getTopLeft(), this.bottomLeft = t.getBottomLeft(), this.topRight = t.getTopRight(), this.bottomRight = t.getBottomRight(), this.minX = t.getMinX(), this.maxX = t.getMaxX(), this.minY = t.getMinY(), this.maxY = t.getMaxY();
              }
            }, {
              key: "addMissingRows",
              value: function addMissingRows(t, e, r) {
                var n = this.topLeft,
                  i = this.bottomLeft,
                  o = this.topRight,
                  s = this.bottomRight;
                if (t > 0) {
                  var _e163 = r ? this.topLeft : this.topRight,
                    _i71 = Math.trunc(_e163.getY() - t);
                  _i71 < 0 && (_i71 = 0);
                  var _s38 = new nt(_e163.getX(), _i71);
                  r ? n = _s38 : o = _s38;
                }
                if (e > 0) {
                  var _t168 = r ? this.bottomLeft : this.bottomRight,
                    _n87 = Math.trunc(_t168.getY() + e);
                  _n87 >= this.image.getHeight() && (_n87 = this.image.getHeight() - 1);
                  var _o58 = new nt(_t168.getX(), _n87);
                  r ? i = _o58 : s = _o58;
                }
                return new xe(this.image, n, i, o, s);
              }
            }, {
              key: "getMinX",
              value: function getMinX() {
                return this.minX;
              }
            }, {
              key: "getMaxX",
              value: function getMaxX() {
                return this.maxX;
              }
            }, {
              key: "getMinY",
              value: function getMinY() {
                return this.minY;
              }
            }, {
              key: "getMaxY",
              value: function getMaxY() {
                return this.maxY;
              }
            }, {
              key: "getTopLeft",
              value: function getTopLeft() {
                return this.topLeft;
              }
            }, {
              key: "getTopRight",
              value: function getTopRight() {
                return this.topRight;
              }
            }, {
              key: "getBottomLeft",
              value: function getBottomLeft() {
                return this.bottomLeft;
              }
            }, {
              key: "getBottomRight",
              value: function getBottomRight() {
                return this.bottomRight;
              }
            }], [{
              key: "merge",
              value: function merge(t, e) {
                return null == t ? e : null == e ? t : new xe(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight);
              }
            }]);
            return xe;
          }();
          var ke = /*#__PURE__*/function () {
            function ke(t, e, r, n) {
              _classCallCheck(this, ke);
              this.columnCount = t, this.errorCorrectionLevel = n, this.rowCountUpperPart = e, this.rowCountLowerPart = r, this.rowCount = e + r;
            }
            _createClass(ke, [{
              key: "getColumnCount",
              value: function getColumnCount() {
                return this.columnCount;
              }
            }, {
              key: "getErrorCorrectionLevel",
              value: function getErrorCorrectionLevel() {
                return this.errorCorrectionLevel;
              }
            }, {
              key: "getRowCount",
              value: function getRowCount() {
                return this.rowCount;
              }
            }, {
              key: "getRowCountUpperPart",
              value: function getRowCountUpperPart() {
                return this.rowCountUpperPart;
              }
            }, {
              key: "getRowCountLowerPart",
              value: function getRowCountLowerPart() {
                return this.rowCountLowerPart;
              }
            }]);
            return ke;
          }();
          var Ue = /*#__PURE__*/function () {
            function Ue() {
              _classCallCheck(this, Ue);
              this.buffer = "";
            }
            _createClass(Ue, [{
              key: "format",
              value: function format(t) {
                for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                  e[_key6 - 1] = arguments[_key6];
                }
                this.buffer += Ue.form(t, e);
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.buffer;
              }
            }], [{
              key: "form",
              value: function form(t, e) {
                var r = -1;
                return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, o, s, a) {
                  if ("%%" === t) return "%";
                  if (void 0 === e[++r]) return;
                  t = o ? parseInt(o.substr(1)) : void 0;
                  var l,
                    c = s ? parseInt(s.substr(1)) : void 0;
                  switch (a) {
                    case "s":
                      l = e[r];
                      break;
                    case "c":
                      l = e[r][0];
                      break;
                    case "f":
                      l = parseFloat(e[r]).toFixed(t);
                      break;
                    case "p":
                      l = parseFloat(e[r]).toPrecision(t);
                      break;
                    case "e":
                      l = parseFloat(e[r]).toExponential(t);
                      break;
                    case "x":
                      l = parseInt(e[r]).toString(c || 16);
                      break;
                    case "d":
                      l = parseFloat(parseInt(e[r], c || 10).toPrecision(t)).toFixed(0);
                  }
                  l = "object" == _typeof(l) ? JSON.stringify(l) : (+l).toString(c);
                  var h = parseInt(i),
                    u = i && i[0] + "" == "0" ? "0" : " ";
                  for (; l.length < h;) l = void 0 !== n ? l + u : u + l;
                  return l;
                });
              }
            }]);
            return Ue;
          }();
          var He = /*#__PURE__*/function () {
            function He(t) {
              _classCallCheck(this, He);
              this.boundingBox = new xe(t), this.codewords = new Array(t.getMaxY() - t.getMinY() + 1);
            }
            _createClass(He, [{
              key: "getCodewordNearby",
              value: function getCodewordNearby(t) {
                var e = this.getCodeword(t);
                if (null != e) return e;
                for (var _r119 = 1; _r119 < He.MAX_NEARBY_DISTANCE; _r119++) {
                  var _n88 = this.imageRowToCodewordIndex(t) - _r119;
                  if (_n88 >= 0 && (e = this.codewords[_n88], null != e)) return e;
                  if (_n88 = this.imageRowToCodewordIndex(t) + _r119, _n88 < this.codewords.length && (e = this.codewords[_n88], null != e)) return e;
                }
                return null;
              }
            }, {
              key: "imageRowToCodewordIndex",
              value: function imageRowToCodewordIndex(t) {
                return t - this.boundingBox.getMinY();
              }
            }, {
              key: "setCodeword",
              value: function setCodeword(t, e) {
                this.codewords[this.imageRowToCodewordIndex(t)] = e;
              }
            }, {
              key: "getCodeword",
              value: function getCodeword(t) {
                return this.codewords[this.imageRowToCodewordIndex(t)];
              }
            }, {
              key: "getBoundingBox",
              value: function getBoundingBox() {
                return this.boundingBox;
              }
            }, {
              key: "getCodewords",
              value: function getCodewords() {
                return this.codewords;
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = new Ue();
                var e = 0;
                var _iterator55 = _createForOfIteratorHelper(this.codewords),
                  _step55;
                try {
                  for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                    var _r120 = _step55.value;
                    null != _r120 ? t.format("%3d: %3d|%3d%n", e++, _r120.getRowNumber(), _r120.getValue()) : t.format("%3d:    |   %n", e++);
                  }
                } catch (err) {
                  _iterator55.e(err);
                } finally {
                  _iterator55.f();
                }
                return t.toString();
              }
            }]);
            return He;
          }();
          He.MAX_NEARBY_DISTANCE = 5;
          var Ve = /*#__PURE__*/function () {
            function Ve() {
              _classCallCheck(this, Ve);
              this.values = new Map();
            }
            _createClass(Ve, [{
              key: "setValue",
              value: function setValue(t) {
                t = Math.trunc(t);
                var e = this.values.get(t);
                null == e && (e = 0), e++, this.values.set(t, e);
              }
            }, {
              key: "getValue",
              value: function getValue() {
                var t = -1,
                  e = new Array();
                var _iterator56 = _createForOfIteratorHelper(this.values.entries()),
                  _step56;
                try {
                  var _loop2 = function _loop2() {
                    var _step56$value = _slicedToArray(_step56.value, 2),
                      r = _step56$value[0],
                      n = _step56$value[1];
                    var i = {
                      getKey: function getKey() {
                        return r;
                      },
                      getValue: function getValue() {
                        return n;
                      }
                    };
                    i.getValue() > t ? (t = i.getValue(), e = [], e.push(i.getKey())) : i.getValue() === t && e.push(i.getKey());
                  };
                  for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator56.e(err);
                } finally {
                  _iterator56.f();
                }
                return be.toIntArray(e);
              }
            }, {
              key: "getConfidence",
              value: function getConfidence(t) {
                return this.values.get(t);
              }
            }]);
            return Ve;
          }();
          var ze = /*#__PURE__*/function (_He) {
            _inherits(ze, _He);
            var _super51 = _createSuper(ze);
            function ze(t, e) {
              var _this36;
              _classCallCheck(this, ze);
              _this36 = _super51.call(this, t), _this36._isLeft = e;
              return _this36;
            }
            _createClass(ze, [{
              key: "setRowNumbers",
              value: function setRowNumbers() {
                var _iterator57 = _createForOfIteratorHelper(this.getCodewords()),
                  _step57;
                try {
                  for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                    var _t169 = _step57.value;
                    null != _t169 && _t169.setRowNumberAsRowIndicatorColumn();
                  }
                } catch (err) {
                  _iterator57.e(err);
                } finally {
                  _iterator57.f();
                }
              }
            }, {
              key: "adjustCompleteIndicatorColumnRowNumbers",
              value: function adjustCompleteIndicatorColumnRowNumbers(t) {
                var e = this.getCodewords();
                this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
                var r = this.getBoundingBox(),
                  n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
                  i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
                  o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                  s = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
                  a = -1,
                  l = 1,
                  c = 0;
                for (var _r121 = o; _r121 < s; _r121++) {
                  if (null == e[_r121]) continue;
                  var _n89 = e[_r121],
                    _i72 = _n89.getRowNumber() - a;
                  if (0 === _i72) c++;else if (1 === _i72) l = Math.max(l, c), c = 1, a = _n89.getRowNumber();else if (_i72 < 0 || _n89.getRowNumber() >= t.getRowCount() || _i72 > _r121) e[_r121] = null;else {
                    var _t170 = void 0;
                    _t170 = l > 2 ? (l - 2) * _i72 : _i72;
                    var _o59 = _t170 >= _r121;
                    for (var _n90 = 1; _n90 <= _t170 && !_o59; _n90++) _o59 = null != e[_r121 - _n90];
                    _o59 ? e[_r121] = null : (a = _n89.getRowNumber(), c = 1);
                  }
                }
              }
            }, {
              key: "getRowHeights",
              value: function getRowHeights() {
                var t = this.getBarcodeMetadata();
                if (null == t) return null;
                this.adjustIncompleteIndicatorColumnRowNumbers(t);
                var e = new Int32Array(t.getRowCount());
                var _iterator58 = _createForOfIteratorHelper(this.getCodewords()),
                  _step58;
                try {
                  for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                    var _t171 = _step58.value;
                    if (null != _t171) {
                      var _r122 = _t171.getRowNumber();
                      if (_r122 >= e.length) continue;
                      e[_r122]++;
                    }
                  }
                } catch (err) {
                  _iterator58.e(err);
                } finally {
                  _iterator58.f();
                }
                return e;
              }
            }, {
              key: "adjustIncompleteIndicatorColumnRowNumbers",
              value: function adjustIncompleteIndicatorColumnRowNumbers(t) {
                var e = this.getBoundingBox(),
                  r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                  n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                  i = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                  o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                  s = this.getCodewords(),
                  a = -1;
                for (var _e164 = i; _e164 < o; _e164++) {
                  if (null == s[_e164]) continue;
                  var _r123 = s[_e164];
                  _r123.setRowNumberAsRowIndicatorColumn();
                  var _n91 = _r123.getRowNumber() - a;
                  0 === _n91 || (1 === _n91 ? a = _r123.getRowNumber() : _r123.getRowNumber() >= t.getRowCount() ? s[_e164] = null : a = _r123.getRowNumber());
                }
              }
            }, {
              key: "getBarcodeMetadata",
              value: function getBarcodeMetadata() {
                var t = this.getCodewords(),
                  e = new Ve(),
                  r = new Ve(),
                  n = new Ve(),
                  i = new Ve();
                var _iterator59 = _createForOfIteratorHelper(t),
                  _step59;
                try {
                  for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                    var _o60 = _step59.value;
                    if (null == _o60) continue;
                    _o60.setRowNumberAsRowIndicatorColumn();
                    var _t172 = _o60.getValue() % 30,
                      _s39 = _o60.getRowNumber();
                    switch (this._isLeft || (_s39 += 2), _s39 % 3) {
                      case 0:
                        r.setValue(3 * _t172 + 1);
                        break;
                      case 1:
                        i.setValue(_t172 / 3), n.setValue(_t172 % 3);
                        break;
                      case 2:
                        e.setValue(_t172 + 1);
                    }
                  }
                } catch (err) {
                  _iterator59.e(err);
                } finally {
                  _iterator59.f();
                }
                if (0 === e.getValue().length || 0 === r.getValue().length || 0 === n.getValue().length || 0 === i.getValue().length || e.getValue()[0] < 1 || r.getValue()[0] + n.getValue()[0] < be.MIN_ROWS_IN_BARCODE || r.getValue()[0] + n.getValue()[0] > be.MAX_ROWS_IN_BARCODE) return null;
                var o = new ke(e.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
                return this.removeIncorrectCodewords(t, o), o;
              }
            }, {
              key: "removeIncorrectCodewords",
              value: function removeIncorrectCodewords(t, e) {
                for (var _r124 = 0; _r124 < t.length; _r124++) {
                  var _n92 = t[_r124];
                  if (null == t[_r124]) continue;
                  var _i73 = _n92.getValue() % 30,
                    _o61 = _n92.getRowNumber();
                  if (_o61 > e.getRowCount()) t[_r124] = null;else switch (this._isLeft || (_o61 += 2), _o61 % 3) {
                    case 0:
                      3 * _i73 + 1 !== e.getRowCountUpperPart() && (t[_r124] = null);
                      break;
                    case 1:
                      Math.trunc(_i73 / 3) === e.getErrorCorrectionLevel() && _i73 % 3 === e.getRowCountLowerPart() || (t[_r124] = null);
                      break;
                    case 2:
                      _i73 + 1 !== e.getColumnCount() && (t[_r124] = null);
                  }
                }
              }
            }, {
              key: "isLeft",
              value: function isLeft() {
                return this._isLeft;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "IsLeft: " + this._isLeft + "\n" + _get(_getPrototypeOf(ze.prototype), "toString", this).call(this);
              }
            }]);
            return ze;
          }(He);
          var Ge = /*#__PURE__*/function () {
            function Ge(t, e) {
              _classCallCheck(this, Ge);
              this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t, this.barcodeColumnCount = t.getColumnCount(), this.boundingBox = e, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
            }
            _createClass(Ge, [{
              key: "getDetectionResultColumns",
              value: function getDetectionResultColumns() {
                this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
                var t,
                  e = be.MAX_CODEWORDS_IN_BARCODE;
                do {
                  t = e, e = this.adjustRowNumbersAndGetCount();
                } while (e > 0 && e < t);
                return this.detectionResultColumns;
              }
            }, {
              key: "adjustIndicatorColumnRowNumbers",
              value: function adjustIndicatorColumnRowNumbers(t) {
                null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
              }
            }, {
              key: "adjustRowNumbersAndGetCount",
              value: function adjustRowNumbersAndGetCount() {
                var t = this.adjustRowNumbersByRow();
                if (0 === t) return 0;
                for (var _t173 = 1; _t173 < this.barcodeColumnCount + 1; _t173++) {
                  var _e165 = this.detectionResultColumns[_t173].getCodewords();
                  for (var _r125 = 0; _r125 < _e165.length; _r125++) null != _e165[_r125] && (_e165[_r125].hasValidRowNumber() || this.adjustRowNumbers(_t173, _r125, _e165));
                }
                return t;
              }
            }, {
              key: "adjustRowNumbersByRow",
              value: function adjustRowNumbersByRow() {
                return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
              }
            }, {
              key: "adjustRowNumbersFromBothRI",
              value: function adjustRowNumbersFromBothRI() {
                if (null == this.detectionResultColumns[0] || null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return;
                var t = this.detectionResultColumns[0].getCodewords(),
                  e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                for (var _r126 = 0; _r126 < t.length; _r126++) if (null != t[_r126] && null != e[_r126] && t[_r126].getRowNumber() === e[_r126].getRowNumber()) for (var _e166 = 1; _e166 <= this.barcodeColumnCount; _e166++) {
                  var _n93 = this.detectionResultColumns[_e166].getCodewords()[_r126];
                  null != _n93 && (_n93.setRowNumber(t[_r126].getRowNumber()), _n93.hasValidRowNumber() || (this.detectionResultColumns[_e166].getCodewords()[_r126] = null));
                }
              }
            }, {
              key: "adjustRowNumbersFromRRI",
              value: function adjustRowNumbersFromRRI() {
                if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
                var t = 0,
                  e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                for (var _r127 = 0; _r127 < e.length; _r127++) {
                  if (null == e[_r127]) continue;
                  var _n94 = e[_r127].getRowNumber(),
                    _i74 = 0;
                  for (var _e167 = this.barcodeColumnCount + 1; _e167 > 0 && _i74 < this.ADJUST_ROW_NUMBER_SKIP; _e167--) {
                    var _o62 = this.detectionResultColumns[_e167].getCodewords()[_r127];
                    null != _o62 && (_i74 = Ge.adjustRowNumberIfValid(_n94, _i74, _o62), _o62.hasValidRowNumber() || t++);
                  }
                }
                return t;
              }
            }, {
              key: "adjustRowNumbersFromLRI",
              value: function adjustRowNumbersFromLRI() {
                if (null == this.detectionResultColumns[0]) return 0;
                var t = 0,
                  e = this.detectionResultColumns[0].getCodewords();
                for (var _r128 = 0; _r128 < e.length; _r128++) {
                  if (null == e[_r128]) continue;
                  var _n95 = e[_r128].getRowNumber(),
                    _i75 = 0;
                  for (var _e168 = 1; _e168 < this.barcodeColumnCount + 1 && _i75 < this.ADJUST_ROW_NUMBER_SKIP; _e168++) {
                    var _o63 = this.detectionResultColumns[_e168].getCodewords()[_r128];
                    null != _o63 && (_i75 = Ge.adjustRowNumberIfValid(_n95, _i75, _o63), _o63.hasValidRowNumber() || t++);
                  }
                }
                return t;
              }
            }, {
              key: "adjustRowNumbers",
              value: function adjustRowNumbers(t, e, r) {
                var n = r[e],
                  i = this.detectionResultColumns[t - 1].getCodewords(),
                  o = i;
                null != this.detectionResultColumns[t + 1] && (o = this.detectionResultColumns[t + 1].getCodewords());
                var s = new Array(14);
                s[2] = i[e], s[3] = o[e], e > 0 && (s[0] = r[e - 1], s[4] = i[e - 1], s[5] = o[e - 1]), e > 1 && (s[8] = r[e - 2], s[10] = i[e - 2], s[11] = o[e - 2]), e < r.length - 1 && (s[1] = r[e + 1], s[6] = i[e + 1], s[7] = o[e + 1]), e < r.length - 2 && (s[9] = r[e + 2], s[12] = i[e + 2], s[13] = o[e + 2]);
                for (var _i76 = 0, _s40 = s; _i76 < _s40.length; _i76++) {
                  var _t174 = _s40[_i76];
                  if (Ge.adjustRowNumber(n, _t174)) return;
                }
              }
            }, {
              key: "getBarcodeColumnCount",
              value: function getBarcodeColumnCount() {
                return this.barcodeColumnCount;
              }
            }, {
              key: "getBarcodeRowCount",
              value: function getBarcodeRowCount() {
                return this.barcodeMetadata.getRowCount();
              }
            }, {
              key: "getBarcodeECLevel",
              value: function getBarcodeECLevel() {
                return this.barcodeMetadata.getErrorCorrectionLevel();
              }
            }, {
              key: "setBoundingBox",
              value: function setBoundingBox(t) {
                this.boundingBox = t;
              }
            }, {
              key: "getBoundingBox",
              value: function getBoundingBox() {
                return this.boundingBox;
              }
            }, {
              key: "setDetectionResultColumn",
              value: function setDetectionResultColumn(t, e) {
                this.detectionResultColumns[t] = e;
              }
            }, {
              key: "getDetectionResultColumn",
              value: function getDetectionResultColumn(t) {
                return this.detectionResultColumns[t];
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = this.detectionResultColumns[0];
                null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
                var e = new Ue();
                for (var _r129 = 0; _r129 < t.getCodewords().length; _r129++) {
                  e.format("CW %3d:", _r129);
                  for (var _t175 = 0; _t175 < this.barcodeColumnCount + 2; _t175++) {
                    if (null == this.detectionResultColumns[_t175]) {
                      e.format("    |   ");
                      continue;
                    }
                    var _n96 = this.detectionResultColumns[_t175].getCodewords()[_r129];
                    null != _n96 ? e.format(" %3d|%3d", _n96.getRowNumber(), _n96.getValue()) : e.format("    |   ");
                  }
                  e.format("%n");
                }
                return e.toString();
              }
            }], [{
              key: "adjustRowNumberIfValid",
              value: function adjustRowNumberIfValid(t, e, r) {
                return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), e = 0) : ++e), e;
              }
            }, {
              key: "adjustRowNumber",
              value: function adjustRowNumber(t, e) {
                return !(null == e || !e.hasValidRowNumber() || e.getBucket() !== t.getBucket() || (t.setRowNumber(e.getRowNumber()), 0));
              }
            }]);
            return Ge;
          }();
          var Ye = /*#__PURE__*/function () {
            function Ye(t, e, r, n) {
              _classCallCheck(this, Ye);
              this.rowNumber = Ye.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(t), this.endX = Math.trunc(e), this.bucket = Math.trunc(r), this.value = Math.trunc(n);
            }
            _createClass(Ye, [{
              key: "hasValidRowNumber",
              value: function hasValidRowNumber() {
                return this.isValidRowNumber(this.rowNumber);
              }
            }, {
              key: "isValidRowNumber",
              value: function isValidRowNumber(t) {
                return t !== Ye.BARCODE_ROW_UNKNOWN && this.bucket === t % 3 * 3;
              }
            }, {
              key: "setRowNumberAsRowIndicatorColumn",
              value: function setRowNumberAsRowIndicatorColumn() {
                this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
              }
            }, {
              key: "getWidth",
              value: function getWidth() {
                return this.endX - this.startX;
              }
            }, {
              key: "getStartX",
              value: function getStartX() {
                return this.startX;
              }
            }, {
              key: "getEndX",
              value: function getEndX() {
                return this.endX;
              }
            }, {
              key: "getBucket",
              value: function getBucket() {
                return this.bucket;
              }
            }, {
              key: "getValue",
              value: function getValue() {
                return this.value;
              }
            }, {
              key: "getRowNumber",
              value: function getRowNumber() {
                return this.rowNumber;
              }
            }, {
              key: "setRowNumber",
              value: function setRowNumber(t) {
                this.rowNumber = t;
              }
            }, {
              key: "toString",
              value: function toString() {
                return this.rowNumber + "|" + this.value;
              }
            }]);
            return Ye;
          }();
          Ye.BARCODE_ROW_UNKNOWN = -1;
          var Xe = /*#__PURE__*/function () {
            function Xe() {
              _classCallCheck(this, Xe);
            }
            _createClass(Xe, null, [{
              key: "initialize",
              value: function initialize() {
                for (var _t176 = 0; _t176 < be.SYMBOL_TABLE.length; _t176++) {
                  var _e169 = be.SYMBOL_TABLE[_t176],
                    _r130 = 1 & _e169;
                  for (var _n97 = 0; _n97 < be.BARS_IN_MODULE; _n97++) {
                    var _i77 = 0;
                    for (; (1 & _e169) === _r130;) _i77 += 1, _e169 >>= 1;
                    _r130 = 1 & _e169, Xe.RATIOS_TABLE[_t176] || (Xe.RATIOS_TABLE[_t176] = new Array(be.BARS_IN_MODULE)), Xe.RATIOS_TABLE[_t176][be.BARS_IN_MODULE - _n97 - 1] = Math.fround(_i77 / be.MODULES_IN_CODEWORD);
                  }
                }
                this.bSymbolTableReady = !0;
              }
            }, {
              key: "getDecodedValue",
              value: function getDecodedValue(t) {
                var e = Xe.getDecodedCodewordValue(Xe.sampleBitCounts(t));
                return -1 !== e ? e : Xe.getClosestDecodedValue(t);
              }
            }, {
              key: "sampleBitCounts",
              value: function sampleBitCounts(t) {
                var e = et.sum(t),
                  r = new Int32Array(be.BARS_IN_MODULE),
                  n = 0,
                  i = 0;
                for (var _o64 = 0; _o64 < be.MODULES_IN_CODEWORD; _o64++) {
                  var _s41 = e / (2 * be.MODULES_IN_CODEWORD) + _o64 * e / be.MODULES_IN_CODEWORD;
                  i + t[n] <= _s41 && (i += t[n], n++), r[n]++;
                }
                return r;
              }
            }, {
              key: "getDecodedCodewordValue",
              value: function getDecodedCodewordValue(t) {
                var e = Xe.getBitValue(t);
                return -1 === be.getCodeword(e) ? -1 : e;
              }
            }, {
              key: "getBitValue",
              value: function getBitValue(t) {
                var e = 0;
                for (var _r131 = 0; _r131 < t.length; _r131++) for (var _n98 = 0; _n98 < t[_r131]; _n98++) e = e << 1 | (_r131 % 2 == 0 ? 1 : 0);
                return Math.trunc(e);
              }
            }, {
              key: "getClosestDecodedValue",
              value: function getClosestDecodedValue(t) {
                var e = et.sum(t),
                  r = new Array(be.BARS_IN_MODULE);
                if (e > 1) for (var _n99 = 0; _n99 < r.length; _n99++) r[_n99] = Math.fround(t[_n99] / e);
                var n = rt.MAX_VALUE,
                  i = -1;
                this.bSymbolTableReady || Xe.initialize();
                for (var _t177 = 0; _t177 < Xe.RATIOS_TABLE.length; _t177++) {
                  var _e170 = 0,
                    _o65 = Xe.RATIOS_TABLE[_t177];
                  for (var _t178 = 0; _t178 < be.BARS_IN_MODULE; _t178++) {
                    var _i78 = Math.fround(_o65[_t178] - r[_t178]);
                    if (_e170 += Math.fround(_i78 * _i78), _e170 >= n) break;
                  }
                  _e170 < n && (n = _e170, i = be.SYMBOL_TABLE[_t177]);
                }
                return i;
              }
            }]);
            return Xe;
          }();
          Xe.bSymbolTableReady = !1, Xe.RATIOS_TABLE = new Array(be.SYMBOL_TABLE.length).map(function (t) {
            return new Array(be.BARS_IN_MODULE);
          });
          var We = /*#__PURE__*/function () {
            function We() {
              _classCallCheck(this, We);
              this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
            }
            _createClass(We, [{
              key: "getSegmentIndex",
              value: function getSegmentIndex() {
                return this.segmentIndex;
              }
            }, {
              key: "setSegmentIndex",
              value: function setSegmentIndex(t) {
                this.segmentIndex = t;
              }
            }, {
              key: "getFileId",
              value: function getFileId() {
                return this.fileId;
              }
            }, {
              key: "setFileId",
              value: function setFileId(t) {
                this.fileId = t;
              }
            }, {
              key: "getOptionalData",
              value: function getOptionalData() {
                return this.optionalData;
              }
            }, {
              key: "setOptionalData",
              value: function setOptionalData(t) {
                this.optionalData = t;
              }
            }, {
              key: "isLastSegment",
              value: function isLastSegment() {
                return this.lastSegment;
              }
            }, {
              key: "setLastSegment",
              value: function setLastSegment(t) {
                this.lastSegment = t;
              }
            }, {
              key: "getSegmentCount",
              value: function getSegmentCount() {
                return this.segmentCount;
              }
            }, {
              key: "setSegmentCount",
              value: function setSegmentCount(t) {
                this.segmentCount = t;
              }
            }, {
              key: "getSender",
              value: function getSender() {
                return this.sender || null;
              }
            }, {
              key: "setSender",
              value: function setSender(t) {
                this.sender = t;
              }
            }, {
              key: "getAddressee",
              value: function getAddressee() {
                return this.addressee || null;
              }
            }, {
              key: "setAddressee",
              value: function setAddressee(t) {
                this.addressee = t;
              }
            }, {
              key: "getFileName",
              value: function getFileName() {
                return this.fileName;
              }
            }, {
              key: "setFileName",
              value: function setFileName(t) {
                this.fileName = t;
              }
            }, {
              key: "getFileSize",
              value: function getFileSize() {
                return this.fileSize;
              }
            }, {
              key: "setFileSize",
              value: function setFileSize(t) {
                this.fileSize = t;
              }
            }, {
              key: "getChecksum",
              value: function getChecksum() {
                return this.checksum;
              }
            }, {
              key: "setChecksum",
              value: function setChecksum(t) {
                this.checksum = t;
              }
            }, {
              key: "getTimestamp",
              value: function getTimestamp() {
                return this.timestamp;
              }
            }, {
              key: "setTimestamp",
              value: function setTimestamp(t) {
                this.timestamp = t;
              }
            }]);
            return We;
          }();
          var je = /*#__PURE__*/function () {
            function je() {
              _classCallCheck(this, je);
            }
            _createClass(je, null, [{
              key: "parseLong",
              value: function parseLong(t, e) {
                return parseInt(t, e);
              }
            }]);
            return je;
          }();
          var Ze = /*#__PURE__*/function (_o66) {
            _inherits(Ze, _o66);
            var _super52 = _createSuper(Ze);
            function Ze() {
              _classCallCheck(this, Ze);
              return _super52.apply(this, arguments);
            }
            return _createClass(Ze);
          }(o);
          Ze.kind = "NullPointerException";
          var Qe = /*#__PURE__*/function (_o67) {
            _inherits(Qe, _o67);
            var _super53 = _createSuper(Qe);
            function Qe() {
              _classCallCheck(this, Qe);
              return _super53.apply(this, arguments);
            }
            return _createClass(Qe);
          }(o);
          var Ke = /*#__PURE__*/function (_ref2) {
            _inherits(Ke, _ref2);
            var _super54 = _createSuper(Ke);
            function Ke() {
              var _this37;
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
              _classCallCheck(this, Ke);
              if (_this37 = _super54.call(this), _this37.count = 0, t < 0) throw new a("Negative initial size: " + t);
              _this37.buf = new Uint8Array(t);
              return _possibleConstructorReturn(_this37);
            }
            _createClass(Ke, [{
              key: "ensureCapacity",
              value: function ensureCapacity(t) {
                t - this.buf.length > 0 && this.grow(t);
              }
            }, {
              key: "grow",
              value: function grow(t) {
                var e = this.buf.length << 1;
                if (e - t < 0 && (e = t), e < 0) {
                  if (t < 0) throw new Qe();
                  e = w.MAX_VALUE;
                }
                this.buf = f.copyOfUint8Array(this.buf, e);
              }
            }, {
              key: "write",
              value: function write(t) {
                this.ensureCapacity(this.count + 1), this.buf[this.count] = t, this.count += 1;
              }
            }, {
              key: "writeBytesOffset",
              value: function writeBytesOffset(t, e, r) {
                if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) throw new d();
                this.ensureCapacity(this.count + r), u.arraycopy(t, e, this.buf, this.count, r), this.count += r;
              }
            }, {
              key: "writeTo",
              value: function writeTo(t) {
                t.writeBytesOffset(this.buf, 0, this.count);
              }
            }, {
              key: "reset",
              value: function reset() {
                this.count = 0;
              }
            }, {
              key: "toByteArray",
              value: function toByteArray() {
                return f.copyOfUint8Array(this.buf, this.count);
              }
            }, {
              key: "size",
              value: function size() {
                return this.count;
              }
            }, {
              key: "toString",
              value: function toString(t) {
                return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void();
              }
            }, {
              key: "toString_void",
              value: function toString_void() {
                return new String(this.buf).toString();
              }
            }, {
              key: "toString_string",
              value: function toString_string(t) {
                return new String(this.buf).toString();
              }
            }, {
              key: "toString_number",
              value: function toString_number(t) {
                return new String(this.buf).toString();
              }
            }, {
              key: "close",
              value: function close() {}
            }]);
            return Ke;
          }( /*#__PURE__*/function () {
            function _class3() {
              _classCallCheck(this, _class3);
            }
            _createClass(_class3, [{
              key: "writeBytes",
              value: function writeBytes(t) {
                this.writeBytesOffset(t, 0, t.length);
              }
            }, {
              key: "writeBytesOffset",
              value: function writeBytesOffset(t, e, r) {
                if (null == t) throw new Ze();
                if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new d();
                if (0 !== r) for (var _n100 = 0; _n100 < r; _n100++) this.write(t[e + _n100]);
              }
            }, {
              key: "flush",
              value: function flush() {}
            }, {
              key: "close",
              value: function close() {}
            }]);
            return _class3;
          }());
          function qe() {
            if ("undefined" != typeof window) return window.BigInt || null;
            if (void 0 !== r.g) return r.g.BigInt || null;
            if ("undefined" != typeof self) return self.BigInt || null;
            throw new Error("Can't search globals for BigInt!");
          }
          var Je;
          function $e(t) {
            if (void 0 === Je && (Je = qe()), null === Je) throw new Error("BigInt is not supported!");
            return Je(t);
          }
          !function (t) {
            t[t.ALPHA = 0] = "ALPHA", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.PUNCT = 3] = "PUNCT", t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
          }(Y || (Y = {}));
          var tr = /*#__PURE__*/function () {
            function tr() {
              _classCallCheck(this, tr);
            }
            _createClass(tr, null, [{
              key: "decode",
              value: function decode(t, e) {
                var r = new T(""),
                  n = I.ISO8859_1;
                r.enableDecoding(n);
                var i = 1,
                  o = t[i++],
                  s = new We();
                for (; i < t[0];) {
                  switch (o) {
                    case tr.TEXT_COMPACTION_MODE_LATCH:
                      i = tr.textCompaction(t, i, r);
                      break;
                    case tr.BYTE_COMPACTION_MODE_LATCH:
                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                      i = tr.byteCompaction(o, t, n, i, r);
                      break;
                    case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      r.append(t[i++]);
                      break;
                    case tr.NUMERIC_COMPACTION_MODE_LATCH:
                      i = tr.numericCompaction(t, i, r);
                      break;
                    case tr.ECI_CHARSET:
                      I.getCharacterSetECIByValue(t[i++]);
                      break;
                    case tr.ECI_GENERAL_PURPOSE:
                      i += 2;
                      break;
                    case tr.ECI_USER_DEFINED:
                      i++;
                      break;
                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      i = tr.decodeMacroBlock(t, i, s);
                      break;
                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case tr.MACRO_PDF417_TERMINATOR:
                      throw new C();
                    default:
                      i--, i = tr.textCompaction(t, i, r);
                  }
                  if (!(i < t.length)) throw C.getFormatInstance();
                  o = t[i++];
                }
                if (0 === r.length()) throw C.getFormatInstance();
                var a = new W(null, r.toString(), null, e);
                return a.setOther(s), a;
              }
            }, {
              key: "decodeMacroBlock",
              value: function decodeMacroBlock(t, e, r) {
                if (e + tr.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw C.getFormatInstance();
                var n = new Int32Array(tr.NUMBER_OF_SEQUENCE_CODEWORDS);
                for (var _r132 = 0; _r132 < tr.NUMBER_OF_SEQUENCE_CODEWORDS; _r132++, e++) n[_r132] = t[e];
                r.setSegmentIndex(w.parseInt(tr.decodeBase900toBase10(n, tr.NUMBER_OF_SEQUENCE_CODEWORDS)));
                var i = new T();
                e = tr.textCompaction(t, e, i), r.setFileId(i.toString());
                var o = -1;
                for (t[e] === tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (o = e + 1); e < t[0];) switch (t[e]) {
                  case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    switch (t[++e]) {
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                        var _n101 = new T();
                        e = tr.textCompaction(t, e + 1, _n101), r.setFileName(_n101.toString());
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                        var _i79 = new T();
                        e = tr.textCompaction(t, e + 1, _i79), r.setSender(_i79.toString());
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                        var _o68 = new T();
                        e = tr.textCompaction(t, e + 1, _o68), r.setAddressee(_o68.toString());
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                        var _s42 = new T();
                        e = tr.numericCompaction(t, e + 1, _s42), r.setSegmentCount(w.parseInt(_s42.toString()));
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                        var _a22 = new T();
                        e = tr.numericCompaction(t, e + 1, _a22), r.setTimestamp(je.parseLong(_a22.toString()));
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                        var _l20 = new T();
                        e = tr.numericCompaction(t, e + 1, _l20), r.setChecksum(w.parseInt(_l20.toString()));
                        break;
                      case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                        var _c10 = new T();
                        e = tr.numericCompaction(t, e + 1, _c10), r.setFileSize(je.parseLong(_c10.toString()));
                        break;
                      default:
                        throw C.getFormatInstance();
                    }
                    break;
                  case tr.MACRO_PDF417_TERMINATOR:
                    e++, r.setLastSegment(!0);
                    break;
                  default:
                    throw C.getFormatInstance();
                }
                if (-1 !== o) {
                  var _n102 = e - o;
                  r.isLastSegment() && _n102--, r.setOptionalData(f.copyOfRange(t, o, o + _n102));
                }
                return e;
              }
            }, {
              key: "textCompaction",
              value: function textCompaction(t, e, r) {
                var n = new Int32Array(2 * (t[0] - e)),
                  i = new Int32Array(2 * (t[0] - e)),
                  o = 0,
                  s = !1;
                for (; e < t[0] && !s;) {
                  var _r133 = t[e++];
                  if (_r133 < tr.TEXT_COMPACTION_MODE_LATCH) n[o] = _r133 / 30, n[o + 1] = _r133 % 30, o += 2;else switch (_r133) {
                    case tr.TEXT_COMPACTION_MODE_LATCH:
                      n[o++] = tr.TEXT_COMPACTION_MODE_LATCH;
                      break;
                    case tr.BYTE_COMPACTION_MODE_LATCH:
                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                    case tr.NUMERIC_COMPACTION_MODE_LATCH:
                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case tr.MACRO_PDF417_TERMINATOR:
                      e--, s = !0;
                      break;
                    case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n[o] = tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, _r133 = t[e++], i[o] = _r133, o++;
                  }
                }
                return tr.decodeTextCompaction(n, i, o, r), e;
              }
            }, {
              key: "decodeTextCompaction",
              value: function decodeTextCompaction(t, e, r, n) {
                var i = Y.ALPHA,
                  o = Y.ALPHA,
                  s = 0;
                for (; s < r;) {
                  var _r134 = t[s],
                    _a23 = "";
                  switch (i) {
                    case Y.ALPHA:
                      if (_r134 < 26) _a23 = String.fromCharCode(65 + _r134);else switch (_r134) {
                        case 26:
                          _a23 = " ";
                          break;
                        case tr.LL:
                          i = Y.LOWER;
                          break;
                        case tr.ML:
                          i = Y.MIXED;
                          break;
                        case tr.PS:
                          o = i, i = Y.PUNCT_SHIFT;
                          break;
                        case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          n.append(e[s]);
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                      break;
                    case Y.LOWER:
                      if (_r134 < 26) _a23 = String.fromCharCode(97 + _r134);else switch (_r134) {
                        case 26:
                          _a23 = " ";
                          break;
                        case tr.AS:
                          o = i, i = Y.ALPHA_SHIFT;
                          break;
                        case tr.ML:
                          i = Y.MIXED;
                          break;
                        case tr.PS:
                          o = i, i = Y.PUNCT_SHIFT;
                          break;
                        case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          n.append(e[s]);
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                      break;
                    case Y.MIXED:
                      if (_r134 < tr.PL) _a23 = tr.MIXED_CHARS[_r134];else switch (_r134) {
                        case tr.PL:
                          i = Y.PUNCT;
                          break;
                        case 26:
                          _a23 = " ";
                          break;
                        case tr.LL:
                          i = Y.LOWER;
                          break;
                        case tr.AL:
                          i = Y.ALPHA;
                          break;
                        case tr.PS:
                          o = i, i = Y.PUNCT_SHIFT;
                          break;
                        case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          n.append(e[s]);
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                      break;
                    case Y.PUNCT:
                      if (_r134 < tr.PAL) _a23 = tr.PUNCT_CHARS[_r134];else switch (_r134) {
                        case tr.PAL:
                          i = Y.ALPHA;
                          break;
                        case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          n.append(e[s]);
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                      break;
                    case Y.ALPHA_SHIFT:
                      if (i = o, _r134 < 26) _a23 = String.fromCharCode(65 + _r134);else switch (_r134) {
                        case 26:
                          _a23 = " ";
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                      break;
                    case Y.PUNCT_SHIFT:
                      if (i = o, _r134 < tr.PAL) _a23 = tr.PUNCT_CHARS[_r134];else switch (_r134) {
                        case tr.PAL:
                          i = Y.ALPHA;
                          break;
                        case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          n.append(e[s]);
                          break;
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                          i = Y.ALPHA;
                      }
                  }
                  "" !== _a23 && n.append(_a23), s++;
                }
              }
            }, {
              key: "byteCompaction",
              value: function byteCompaction(t, e, r, n, i) {
                var o = new Ke(),
                  s = 0,
                  a = 0,
                  l = !1;
                switch (t) {
                  case tr.BYTE_COMPACTION_MODE_LATCH:
                    var _t179 = new Int32Array(6),
                      _r135 = e[n++];
                    for (; n < e[0] && !l;) switch (_t179[s++] = _r135, a = 900 * a + _r135, _r135 = e[n++], _r135) {
                      case tr.TEXT_COMPACTION_MODE_LATCH:
                      case tr.BYTE_COMPACTION_MODE_LATCH:
                      case tr.NUMERIC_COMPACTION_MODE_LATCH:
                      case tr.BYTE_COMPACTION_MODE_LATCH_6:
                      case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                      case tr.MACRO_PDF417_TERMINATOR:
                        n--, l = !0;
                        break;
                      default:
                        if (s % 5 == 0 && s > 0) {
                          for (var _t180 = 0; _t180 < 6; ++_t180) o.write(Number($e(a) >> $e(8 * (5 - _t180))));
                          a = 0, s = 0;
                        }
                    }
                    n === e[0] && _r135 < tr.TEXT_COMPACTION_MODE_LATCH && (_t179[s++] = _r135);
                    for (var _e171 = 0; _e171 < s; _e171++) o.write(_t179[_e171]);
                    break;
                  case tr.BYTE_COMPACTION_MODE_LATCH_6:
                    for (; n < e[0] && !l;) {
                      var _t181 = e[n++];
                      if (_t181 < tr.TEXT_COMPACTION_MODE_LATCH) s++, a = 900 * a + _t181;else switch (_t181) {
                        case tr.TEXT_COMPACTION_MODE_LATCH:
                        case tr.BYTE_COMPACTION_MODE_LATCH:
                        case tr.NUMERIC_COMPACTION_MODE_LATCH:
                        case tr.BYTE_COMPACTION_MODE_LATCH_6:
                        case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case tr.MACRO_PDF417_TERMINATOR:
                          n--, l = !0;
                      }
                      if (s % 5 == 0 && s > 0) {
                        for (var _t182 = 0; _t182 < 6; ++_t182) o.write(Number($e(a) >> $e(8 * (5 - _t182))));
                        a = 0, s = 0;
                      }
                    }
                }
                return i.append(S.decode(o.toByteArray(), r)), n;
              }
            }, {
              key: "numericCompaction",
              value: function numericCompaction(t, e, r) {
                var n = 0,
                  i = !1,
                  o = new Int32Array(tr.MAX_NUMERIC_CODEWORDS);
                for (; e < t[0] && !i;) {
                  var _s43 = t[e++];
                  if (e === t[0] && (i = !0), _s43 < tr.TEXT_COMPACTION_MODE_LATCH) o[n] = _s43, n++;else switch (_s43) {
                    case tr.TEXT_COMPACTION_MODE_LATCH:
                    case tr.BYTE_COMPACTION_MODE_LATCH:
                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case tr.MACRO_PDF417_TERMINATOR:
                      e--, i = !0;
                  }
                  (n % tr.MAX_NUMERIC_CODEWORDS == 0 || _s43 === tr.NUMERIC_COMPACTION_MODE_LATCH || i) && n > 0 && (r.append(tr.decodeBase900toBase10(o, n)), n = 0);
                }
                return e;
              }
            }, {
              key: "decodeBase900toBase10",
              value: function decodeBase900toBase10(t, e) {
                var r = $e(0);
                for (var _n103 = 0; _n103 < e; _n103++) r += tr.EXP900[e - _n103 - 1] * $e(t[_n103]);
                var n = r.toString();
                if ("1" !== n.charAt(0)) throw new C();
                return n.substring(1);
              }
            }]);
            return tr;
          }();
          tr.TEXT_COMPACTION_MODE_LATCH = 900, tr.BYTE_COMPACTION_MODE_LATCH = 901, tr.NUMERIC_COMPACTION_MODE_LATCH = 902, tr.BYTE_COMPACTION_MODE_LATCH_6 = 924, tr.ECI_USER_DEFINED = 925, tr.ECI_GENERAL_PURPOSE = 926, tr.ECI_CHARSET = 927, tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, tr.MACRO_PDF417_TERMINATOR = 922, tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, tr.MAX_NUMERIC_CODEWORDS = 15, tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, tr.PL = 25, tr.LL = 27, tr.AS = 27, tr.ML = 28, tr.AL = 28, tr.PS = 29, tr.PAL = 29, tr.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", tr.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", tr.EXP900 = qe() ? function () {
            var t = [];
            t[0] = $e(1);
            var e = $e(900);
            t[1] = e;
            for (var _r136 = 2; _r136 < 16; _r136++) t[_r136] = t[_r136 - 1] * e;
            return t;
          }() : [], tr.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
          var er = /*#__PURE__*/function () {
            function er() {
              _classCallCheck(this, er);
            }
            _createClass(er, null, [{
              key: "decode",
              value: function decode(t, e, r, n, i, o, s) {
                var a,
                  l = new xe(t, e, r, n, i),
                  c = null,
                  h = null;
                for (var _r137 = !0;; _r137 = !1) {
                  if (null != e && (c = er.getRowIndicatorColumn(t, l, e, !0, o, s)), null != n && (h = er.getRowIndicatorColumn(t, l, n, !1, o, s)), a = er.merge(c, h), null == a) throw N.getNotFoundInstance();
                  var _i80 = a.getBoundingBox();
                  if (!_r137 || null == _i80 || !(_i80.getMinY() < l.getMinY() || _i80.getMaxY() > l.getMaxY())) break;
                  l = _i80;
                }
                a.setBoundingBox(l);
                var u = a.getBarcodeColumnCount() + 1;
                a.setDetectionResultColumn(0, c), a.setDetectionResultColumn(u, h);
                var d = null != c;
                for (var _e172 = 1; _e172 <= u; _e172++) {
                  var _r138 = void 0,
                    _n104 = d ? _e172 : u - _e172;
                  if (void 0 !== a.getDetectionResultColumn(_n104)) continue;
                  _r138 = 0 === _n104 || _n104 === u ? new ze(l, 0 === _n104) : new He(l), a.setDetectionResultColumn(_n104, _r138);
                  var _i81 = -1,
                    _c11 = _i81;
                  for (var _e173 = l.getMinY(); _e173 <= l.getMaxY(); _e173++) {
                    if (_i81 = er.getStartColumn(a, _n104, _e173, d), _i81 < 0 || _i81 > l.getMaxX()) {
                      if (-1 === _c11) continue;
                      _i81 = _c11;
                    }
                    var _h9 = er.detectCodeword(t, l.getMinX(), l.getMaxX(), d, _i81, _e173, o, s);
                    null != _h9 && (_r138.setCodeword(_e173, _h9), _c11 = _i81, o = Math.min(o, _h9.getWidth()), s = Math.max(s, _h9.getWidth()));
                  }
                }
                return er.createDecoderResult(a);
              }
            }, {
              key: "merge",
              value: function merge(t, e) {
                if (null == t && null == e) return null;
                var r = er.getBarcodeMetadata(t, e);
                if (null == r) return null;
                var n = xe.merge(er.adjustBoundingBox(t), er.adjustBoundingBox(e));
                return new Ge(r, n);
              }
            }, {
              key: "adjustBoundingBox",
              value: function adjustBoundingBox(t) {
                if (null == t) return null;
                var e = t.getRowHeights();
                if (null == e) return null;
                var r = er.getMax(e),
                  n = 0;
                var _iterator60 = _createForOfIteratorHelper(e),
                  _step60;
                try {
                  for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                    var _t186 = _step60.value;
                    if (n += r - _t186, _t186 > 0) break;
                  }
                } catch (err) {
                  _iterator60.e(err);
                } finally {
                  _iterator60.f();
                }
                var i = t.getCodewords();
                for (var _t183 = 0; n > 0 && null == i[_t183]; _t183++) n--;
                var o = 0;
                for (var _t184 = e.length - 1; _t184 >= 0 && (o += r - e[_t184], !(e[_t184] > 0)); _t184--);
                for (var _t185 = i.length - 1; o > 0 && null == i[_t185]; _t185--) o--;
                return t.getBoundingBox().addMissingRows(n, o, t.isLeft());
              }
            }, {
              key: "getMax",
              value: function getMax(t) {
                var e = -1;
                var _iterator61 = _createForOfIteratorHelper(t),
                  _step61;
                try {
                  for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                    var _r139 = _step61.value;
                    e = Math.max(e, _r139);
                  }
                } catch (err) {
                  _iterator61.e(err);
                } finally {
                  _iterator61.f();
                }
                return e;
              }
            }, {
              key: "getBarcodeMetadata",
              value: function getBarcodeMetadata(t, e) {
                var r, n;
                return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (n = e.getBarcodeMetadata()) ? r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !== n.getRowCount() ? null : r;
              }
            }, {
              key: "getRowIndicatorColumn",
              value: function getRowIndicatorColumn(t, e, r, n, i, o) {
                var s = new ze(e, n);
                for (var _a24 = 0; _a24 < 2; _a24++) {
                  var _l21 = 0 === _a24 ? 1 : -1,
                    _c12 = Math.trunc(Math.trunc(r.getX()));
                  for (var _a25 = Math.trunc(Math.trunc(r.getY())); _a25 <= e.getMaxY() && _a25 >= e.getMinY(); _a25 += _l21) {
                    var _e174 = er.detectCodeword(t, 0, t.getWidth(), n, _c12, _a25, i, o);
                    null != _e174 && (s.setCodeword(_a25, _e174), _c12 = n ? _e174.getStartX() : _e174.getEndX());
                  }
                }
                return s;
              }
            }, {
              key: "adjustCodewordCount",
              value: function adjustCodewordCount(t, e) {
                var r = e[0][1],
                  n = r.getValue(),
                  i = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - er.getNumberOfECCodeWords(t.getBarcodeECLevel());
                if (0 === n.length) {
                  if (i < 1 || i > be.MAX_CODEWORDS_IN_BARCODE) throw N.getNotFoundInstance();
                  r.setValue(i);
                } else n[0] !== i && r.setValue(i);
              }
            }, {
              key: "createDecoderResult",
              value: function createDecoderResult(t) {
                var e = er.createBarcodeMatrix(t);
                er.adjustCodewordCount(t, e);
                var r = new Array(),
                  n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()),
                  i = [],
                  o = new Array();
                for (var _s44 = 0; _s44 < t.getBarcodeRowCount(); _s44++) for (var _a26 = 0; _a26 < t.getBarcodeColumnCount(); _a26++) {
                  var _l22 = e[_s44][_a26 + 1].getValue(),
                    _c13 = _s44 * t.getBarcodeColumnCount() + _a26;
                  0 === _l22.length ? r.push(_c13) : 1 === _l22.length ? n[_c13] = _l22[0] : (o.push(_c13), i.push(_l22));
                }
                var s = new Array(i.length);
                for (var _t187 = 0; _t187 < s.length; _t187++) s[_t187] = i[_t187];
                return er.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, be.toIntArray(r), be.toIntArray(o), s);
              }
            }, {
              key: "createDecoderResultFromAmbiguousValues",
              value: function createDecoderResultFromAmbiguousValues(t, e, r, n, i) {
                var o = new Int32Array(n.length),
                  s = 100;
                for (; s-- > 0;) {
                  for (var _t188 = 0; _t188 < o.length; _t188++) e[n[_t188]] = i[_t188][o[_t188]];
                  try {
                    return er.decodeCodewords(e, t, r);
                  } catch (t) {
                    if (!(t instanceof c)) throw t;
                  }
                  if (0 === o.length) throw c.getChecksumInstance();
                  for (var _t189 = 0; _t189 < o.length; _t189++) {
                    if (o[_t189] < i[_t189].length - 1) {
                      o[_t189]++;
                      break;
                    }
                    if (o[_t189] = 0, _t189 === o.length - 1) throw c.getChecksumInstance();
                  }
                }
                throw c.getChecksumInstance();
              }
            }, {
              key: "createBarcodeMatrix",
              value: function createBarcodeMatrix(t) {
                var e = Array.from({
                  length: t.getBarcodeRowCount()
                }, function () {
                  return new Array(t.getBarcodeColumnCount() + 2);
                });
                for (var _t190 = 0; _t190 < e.length; _t190++) for (var _r140 = 0; _r140 < e[_t190].length; _r140++) e[_t190][_r140] = new Ve();
                var r = 0;
                var _iterator62 = _createForOfIteratorHelper(t.getDetectionResultColumns()),
                  _step62;
                try {
                  for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                    var _n105 = _step62.value;
                    if (null != _n105) {
                      var _iterator63 = _createForOfIteratorHelper(_n105.getCodewords()),
                        _step63;
                      try {
                        for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                          var _t191 = _step63.value;
                          if (null != _t191) {
                            var _n106 = _t191.getRowNumber();
                            if (_n106 >= 0) {
                              if (_n106 >= e.length) continue;
                              e[_n106][r].setValue(_t191.getValue());
                            }
                          }
                        }
                      } catch (err) {
                        _iterator63.e(err);
                      } finally {
                        _iterator63.f();
                      }
                    }
                    r++;
                  }
                } catch (err) {
                  _iterator62.e(err);
                } finally {
                  _iterator62.f();
                }
                return e;
              }
            }, {
              key: "isValidBarcodeColumn",
              value: function isValidBarcodeColumn(t, e) {
                return e >= 0 && e <= t.getBarcodeColumnCount() + 1;
              }
            }, {
              key: "getStartColumn",
              value: function getStartColumn(t, e, r, n) {
                var i = n ? 1 : -1,
                  o = null;
                if (er.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodeword(r)), null != o) return n ? o.getEndX() : o.getStartX();
                if (o = t.getDetectionResultColumn(e).getCodewordNearby(r), null != o) return n ? o.getStartX() : o.getEndX();
                if (er.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodewordNearby(r)), null != o) return n ? o.getEndX() : o.getStartX();
                var s = 0;
                for (; er.isValidBarcodeColumn(t, e - i);) {
                  e -= i;
                  var _iterator64 = _createForOfIteratorHelper(t.getDetectionResultColumn(e).getCodewords()),
                    _step64;
                  try {
                    for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                      var _r141 = _step64.value;
                      if (null != _r141) return (n ? _r141.getEndX() : _r141.getStartX()) + i * s * (_r141.getEndX() - _r141.getStartX());
                    }
                  } catch (err) {
                    _iterator64.e(err);
                  } finally {
                    _iterator64.f();
                  }
                  s++;
                }
                return n ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX();
              }
            }, {
              key: "detectCodeword",
              value: function detectCodeword(t, e, r, n, i, o, s, a) {
                i = er.adjustCodewordStartColumn(t, e, r, n, i, o);
                var l,
                  c = er.getModuleBitCount(t, e, r, n, i, o);
                if (null == c) return null;
                var h = et.sum(c);
                if (n) l = i + h;else {
                  for (var _t192 = 0; _t192 < c.length / 2; _t192++) {
                    var _e175 = c[_t192];
                    c[_t192] = c[c.length - 1 - _t192], c[c.length - 1 - _t192] = _e175;
                  }
                  l = i, i = l - h;
                }
                if (!er.checkCodewordSkew(h, s, a)) return null;
                var u = Xe.getDecodedValue(c),
                  d = be.getCodeword(u);
                return -1 === d ? null : new Ye(i, l, er.getCodewordBucketNumber(u), d);
              }
            }, {
              key: "getModuleBitCount",
              value: function getModuleBitCount(t, e, r, n, i, o) {
                var s = i,
                  a = new Int32Array(8),
                  l = 0,
                  c = n ? 1 : -1,
                  h = n;
                for (; (n ? s < r : s >= e) && l < a.length;) t.get(s, o) === h ? (a[l]++, s += c) : (l++, h = !h);
                return l === a.length || s === (n ? r : e) && l === a.length - 1 ? a : null;
              }
            }, {
              key: "getNumberOfECCodeWords",
              value: function getNumberOfECCodeWords(t) {
                return 2 << t;
              }
            }, {
              key: "adjustCodewordStartColumn",
              value: function adjustCodewordStartColumn(t, e, r, n, i, o) {
                var s = i,
                  a = n ? -1 : 1;
                for (var _l23 = 0; _l23 < 2; _l23++) {
                  for (; (n ? s >= e : s < r) && n === t.get(s, o);) {
                    if (Math.abs(i - s) > er.CODEWORD_SKEW_SIZE) return i;
                    s += a;
                  }
                  a = -a, n = !n;
                }
                return s;
              }
            }, {
              key: "checkCodewordSkew",
              value: function checkCodewordSkew(t, e, r) {
                return e - er.CODEWORD_SKEW_SIZE <= t && t <= r + er.CODEWORD_SKEW_SIZE;
              }
            }, {
              key: "decodeCodewords",
              value: function decodeCodewords(t, e, r) {
                if (0 === t.length) throw C.getFormatInstance();
                var n = 1 << e + 1,
                  i = er.correctErrors(t, r, n);
                er.verifyCodewordCount(t, n);
                var o = tr.decode(t, "" + e);
                return o.setErrorsCorrected(i), o.setErasures(r.length), o;
              }
            }, {
              key: "correctErrors",
              value: function correctErrors(t, e, r) {
                if (null != e && e.length > r / 2 + er.MAX_ERRORS || r < 0 || r > er.MAX_EC_CODEWORDS) throw c.getChecksumInstance();
                return er.errorCorrection.decode(t, r, e);
              }
            }, {
              key: "verifyCodewordCount",
              value: function verifyCodewordCount(t, e) {
                if (t.length < 4) throw C.getFormatInstance();
                var r = t[0];
                if (r > t.length) throw C.getFormatInstance();
                if (0 === r) {
                  if (!(e < t.length)) throw C.getFormatInstance();
                  t[0] = t.length - e;
                }
              }
            }, {
              key: "getBitCountForCodeword",
              value: function getBitCountForCodeword(t) {
                var e = new Int32Array(8),
                  r = 0,
                  n = e.length - 1;
                for (; !((1 & t) !== r && (r = 1 & t, n--, n < 0));) e[n]++, t >>= 1;
                return e;
              }
            }, {
              key: "getCodewordBucketNumber",
              value: function getCodewordBucketNumber(t) {
                return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t);
              }
            }, {
              key: "getCodewordBucketNumber_number",
              value: function getCodewordBucketNumber_number(t) {
                return er.getCodewordBucketNumber(er.getBitCountForCodeword(t));
              }
            }, {
              key: "getCodewordBucketNumber_Int32Array",
              value: function getCodewordBucketNumber_Int32Array(t) {
                return (t[0] - t[2] + t[4] - t[6] + 9) % 9;
              }
            }, {
              key: "toString",
              value: function toString(t) {
                var e = new Ue();
                for (var _r142 = 0; _r142 < t.length; _r142++) {
                  e.format("Row %2d: ", _r142);
                  for (var _n107 = 0; _n107 < t[_r142].length; _n107++) {
                    var _i82 = t[_r142][_n107];
                    0 === _i82.getValue().length ? e.format("        ", null) : e.format("%4d(%2d)", _i82.getValue()[0], _i82.getConfidence(_i82.getValue()[0]));
                  }
                  e.format("%n");
                }
                return e.toString();
              }
            }]);
            return er;
          }();
          er.CODEWORD_SKEW_SIZE = 2, er.MAX_ERRORS = 3, er.MAX_EC_CODEWORDS = 512, er.errorCorrection = new Fe();
          var rr = /*#__PURE__*/function () {
            function rr() {
              _classCallCheck(this, rr);
            }
            _createClass(rr, [{
              key: "decode",
              value: function decode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r = rr.decode(t, e, !1);
                if (null == r || 0 === r.length || null == r[0]) throw N.getNotFoundInstance();
                return r[0];
              }
            }, {
              key: "decodeMultiple",
              value: function decodeMultiple(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                try {
                  return rr.decode(t, e, !0);
                } catch (t) {
                  if (t instanceof C || t instanceof c) throw N.getNotFoundInstance();
                  throw t;
                }
              }
            }, {
              key: "reset",
              value: function reset() {}
            }], [{
              key: "decode",
              value: function decode(t, e, r) {
                var n = new Array(),
                  i = Be.detectMultiple(t, e, r);
                var _iterator65 = _createForOfIteratorHelper(i.getPoints()),
                  _step65;
                try {
                  for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                    var _t193 = _step65.value;
                    var _e176 = er.decode(i.getBits(), _t193[4], _t193[5], _t193[6], _t193[7], rr.getMinCodewordWidth(_t193), rr.getMaxCodewordWidth(_t193)),
                      _r143 = new F(_e176.getText(), _e176.getRawBytes(), void 0, _t193, k.PDF_417);
                    _r143.putMetadata(X.ERROR_CORRECTION_LEVEL, _e176.getECLevel());
                    var _o69 = _e176.getOther();
                    null != _o69 && _r143.putMetadata(X.PDF417_EXTRA_METADATA, _o69), n.push(_r143);
                  }
                } catch (err) {
                  _iterator65.e(err);
                } finally {
                  _iterator65.f();
                }
                return n.map(function (t) {
                  return t;
                });
              }
            }, {
              key: "getMaxWidth",
              value: function getMaxWidth(t, e) {
                return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()));
              }
            }, {
              key: "getMinWidth",
              value: function getMinWidth(t, e) {
                return null == t || null == e ? w.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()));
              }
            }, {
              key: "getMaxCodewordWidth",
              value: function getMaxCodewordWidth(t) {
                return Math.floor(Math.max(Math.max(rr.getMaxWidth(t[0], t[4]), rr.getMaxWidth(t[6], t[2]) * be.MODULES_IN_CODEWORD / be.MODULES_IN_STOP_PATTERN), Math.max(rr.getMaxWidth(t[1], t[5]), rr.getMaxWidth(t[7], t[3]) * be.MODULES_IN_CODEWORD / be.MODULES_IN_STOP_PATTERN)));
              }
            }, {
              key: "getMinCodewordWidth",
              value: function getMinCodewordWidth(t) {
                return Math.floor(Math.min(Math.min(rr.getMinWidth(t[0], t[4]), rr.getMinWidth(t[6], t[2]) * be.MODULES_IN_CODEWORD / be.MODULES_IN_STOP_PATTERN), Math.min(rr.getMinWidth(t[1], t[5]), rr.getMinWidth(t[7], t[3]) * be.MODULES_IN_CODEWORD / be.MODULES_IN_STOP_PATTERN)));
              }
            }]);
            return rr;
          }();
          var nr = /*#__PURE__*/function (_o70) {
            _inherits(nr, _o70);
            var _super55 = _createSuper(nr);
            function nr() {
              _classCallCheck(this, nr);
              return _super55.apply(this, arguments);
            }
            return _createClass(nr);
          }(o);
          nr.kind = "ReaderException";
          var ir = /*#__PURE__*/function () {
            function ir(t, e) {
              _classCallCheck(this, ir);
              this.verbose = !0 === t, e && this.setHints(e);
            }
            _createClass(ir, [{
              key: "decode",
              value: function decode(t, e) {
                return e && this.setHints(e), this.decodeInternal(t);
              }
            }, {
              key: "decodeWithState",
              value: function decodeWithState(t) {
                return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t);
              }
            }, {
              key: "setHints",
              value: function setHints(t) {
                this.hints = t;
                var e = null != t && void 0 !== t.get(E.TRY_HARDER),
                  r = null == t ? null : t.get(E.POSSIBLE_FORMATS),
                  n = new Array();
                if (null != r) {
                  var _i83 = r.some(function (t) {
                    return t === k.UPC_A || t === k.UPC_E || t === k.EAN_13 || t === k.EAN_8 || t === k.CODABAR || t === k.CODE_39 || t === k.CODE_93 || t === k.CODE_128 || t === k.ITF || t === k.RSS_14 || t === k.RSS_EXPANDED;
                  });
                  _i83 && !e && n.push(new ee(t, this.verbose)), r.includes(k.QR_CODE) && n.push(new Oe()), r.includes(k.DATA_MATRIX) && n.push(new ue()), r.includes(k.AZTEC) && n.push(new gt()), r.includes(k.PDF_417) && n.push(new rr()), _i83 && e && n.push(new ee(t, this.verbose));
                }
                0 === n.length && (e || n.push(new ee(t, this.verbose)), n.push(new Oe()), n.push(new ue()), n.push(new gt()), n.push(new rr()), e && n.push(new ee(t, this.verbose))), this.readers = n;
              }
            }, {
              key: "reset",
              value: function reset() {
                if (null !== this.readers) {
                  var _iterator66 = _createForOfIteratorHelper(this.readers),
                    _step66;
                  try {
                    for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                      var _t194 = _step66.value;
                      _t194.reset();
                    }
                  } catch (err) {
                    _iterator66.e(err);
                  } finally {
                    _iterator66.f();
                  }
                }
              }
            }, {
              key: "decodeInternal",
              value: function decodeInternal(t) {
                if (null === this.readers) throw new nr("No readers where selected, nothing can be read.");
                var _iterator67 = _createForOfIteratorHelper(this.readers),
                  _step67;
                try {
                  for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                    var _e177 = _step67.value;
                    try {
                      return _e177.decode(t, this.hints);
                    } catch (t) {
                      if (t instanceof nr) continue;
                    }
                  }
                } catch (err) {
                  _iterator67.e(err);
                } finally {
                  _iterator67.f();
                }
                throw new N("No MultiFormat Readers were able to detect the code.");
              }
            }]);
            return ir;
          }();
          var or;
          !function (t) {
            t[t.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t[t.CHARACTER_SET = 1] = "CHARACTER_SET", t[t.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t[t.MIN_SIZE = 3] = "MIN_SIZE", t[t.MAX_SIZE = 4] = "MAX_SIZE", t[t.MARGIN = 5] = "MARGIN", t[t.PDF417_COMPACT = 6] = "PDF417_COMPACT", t[t.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", t[t.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", t[t.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", t[t.QR_VERSION = 10] = "QR_VERSION";
          }(or || (or = {}));
          var sr = or;
          var ar = /*#__PURE__*/function () {
            function ar(t) {
              _classCallCheck(this, ar);
              this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new Z(t, Int32Array.from([1])));
            }
            _createClass(ar, [{
              key: "buildGenerator",
              value: function buildGenerator(t) {
                var e = this.cachedGenerators;
                if (t >= e.length) {
                  var _r144 = e[e.length - 1];
                  var _n108 = this.field;
                  for (var _i84 = e.length; _i84 <= t; _i84++) {
                    var _t195 = _r144.multiply(new Z(_n108, Int32Array.from([1, _n108.exp(_i84 - 1 + _n108.getGeneratorBase())])));
                    e.push(_t195), _r144 = _t195;
                  }
                }
                return e[t];
              }
            }, {
              key: "encode",
              value: function encode(t, e) {
                if (0 === e) throw new a("No error correction bytes");
                var r = t.length - e;
                if (r <= 0) throw new a("No data bytes provided");
                var n = this.buildGenerator(e),
                  i = new Int32Array(r);
                u.arraycopy(t, 0, i, 0, r);
                var o = new Z(this.field, i);
                o = o.multiplyByMonomial(e, 1);
                var s = o.divide(n)[1].getCoefficients(),
                  l = e - s.length;
                for (var _e178 = 0; _e178 < l; _e178++) t[r + _e178] = 0;
                u.arraycopy(s, 0, t, r + l, s.length);
              }
            }]);
            return ar;
          }();
          var lr = /*#__PURE__*/function () {
            function lr() {
              _classCallCheck(this, lr);
            }
            _createClass(lr, null, [{
              key: "applyMaskPenaltyRule1",
              value: function applyMaskPenaltyRule1(t) {
                return lr.applyMaskPenaltyRule1Internal(t, !0) + lr.applyMaskPenaltyRule1Internal(t, !1);
              }
            }, {
              key: "applyMaskPenaltyRule2",
              value: function applyMaskPenaltyRule2(t) {
                var e = 0;
                var r = t.getArray(),
                  n = t.getWidth(),
                  i = t.getHeight();
                for (var _t196 = 0; _t196 < i - 1; _t196++) {
                  var _i85 = r[_t196];
                  for (var _o71 = 0; _o71 < n - 1; _o71++) {
                    var _n109 = _i85[_o71];
                    _n109 === _i85[_o71 + 1] && _n109 === r[_t196 + 1][_o71] && _n109 === r[_t196 + 1][_o71 + 1] && e++;
                  }
                }
                return lr.N2 * e;
              }
            }, {
              key: "applyMaskPenaltyRule3",
              value: function applyMaskPenaltyRule3(t) {
                var e = 0;
                var r = t.getArray(),
                  n = t.getWidth(),
                  i = t.getHeight();
                for (var _t197 = 0; _t197 < i; _t197++) for (var _o72 = 0; _o72 < n; _o72++) {
                  var _s45 = r[_t197];
                  _o72 + 6 < n && 1 === _s45[_o72] && 0 === _s45[_o72 + 1] && 1 === _s45[_o72 + 2] && 1 === _s45[_o72 + 3] && 1 === _s45[_o72 + 4] && 0 === _s45[_o72 + 5] && 1 === _s45[_o72 + 6] && (lr.isWhiteHorizontal(_s45, _o72 - 4, _o72) || lr.isWhiteHorizontal(_s45, _o72 + 7, _o72 + 11)) && e++, _t197 + 6 < i && 1 === r[_t197][_o72] && 0 === r[_t197 + 1][_o72] && 1 === r[_t197 + 2][_o72] && 1 === r[_t197 + 3][_o72] && 1 === r[_t197 + 4][_o72] && 0 === r[_t197 + 5][_o72] && 1 === r[_t197 + 6][_o72] && (lr.isWhiteVertical(r, _o72, _t197 - 4, _t197) || lr.isWhiteVertical(r, _o72, _t197 + 7, _t197 + 11)) && e++;
                }
                return e * lr.N3;
              }
            }, {
              key: "isWhiteHorizontal",
              value: function isWhiteHorizontal(t, e, r) {
                e = Math.max(e, 0), r = Math.min(r, t.length);
                for (var _n110 = e; _n110 < r; _n110++) if (1 === t[_n110]) return !1;
                return !0;
              }
            }, {
              key: "isWhiteVertical",
              value: function isWhiteVertical(t, e, r, n) {
                r = Math.max(r, 0), n = Math.min(n, t.length);
                for (var _i86 = r; _i86 < n; _i86++) if (1 === t[_i86][e]) return !1;
                return !0;
              }
            }, {
              key: "applyMaskPenaltyRule4",
              value: function applyMaskPenaltyRule4(t) {
                var e = 0;
                var r = t.getArray(),
                  n = t.getWidth(),
                  i = t.getHeight();
                for (var _t198 = 0; _t198 < i; _t198++) {
                  var _i87 = r[_t198];
                  for (var _t199 = 0; _t199 < n; _t199++) 1 === _i87[_t199] && e++;
                }
                var o = t.getHeight() * t.getWidth();
                return Math.floor(10 * Math.abs(2 * e - o) / o) * lr.N4;
              }
            }, {
              key: "getDataMaskBit",
              value: function getDataMaskBit(t, e, r) {
                var n, i;
                switch (t) {
                  case 0:
                    n = r + e & 1;
                    break;
                  case 1:
                    n = 1 & r;
                    break;
                  case 2:
                    n = e % 3;
                    break;
                  case 3:
                    n = (r + e) % 3;
                    break;
                  case 4:
                    n = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                    break;
                  case 5:
                    i = r * e, n = (1 & i) + i % 3;
                    break;
                  case 6:
                    i = r * e, n = (1 & i) + i % 3 & 1;
                    break;
                  case 7:
                    i = r * e, n = i % 3 + (r + e & 1) & 1;
                    break;
                  default:
                    throw new a("Invalid mask pattern: " + t);
                }
                return 0 === n;
              }
            }, {
              key: "applyMaskPenaltyRule1Internal",
              value: function applyMaskPenaltyRule1Internal(t, e) {
                var r = 0;
                var n = e ? t.getHeight() : t.getWidth(),
                  i = e ? t.getWidth() : t.getHeight(),
                  o = t.getArray();
                for (var _t200 = 0; _t200 < n; _t200++) {
                  var _n111 = 0,
                    _s46 = -1;
                  for (var _a27 = 0; _a27 < i; _a27++) {
                    var _i88 = e ? o[_t200][_a27] : o[_a27][_t200];
                    _i88 === _s46 ? _n111++ : (_n111 >= 5 && (r += lr.N1 + (_n111 - 5)), _n111 = 1, _s46 = _i88);
                  }
                  _n111 >= 5 && (r += lr.N1 + (_n111 - 5));
                }
                return r;
              }
            }]);
            return lr;
          }();
          lr.N1 = 3, lr.N2 = 3, lr.N3 = 40, lr.N4 = 10;
          var cr = /*#__PURE__*/function () {
            function cr(t, e) {
              _classCallCheck(this, cr);
              this.width = t, this.height = e;
              var r = new Array(e);
              for (var _n112 = 0; _n112 !== e; _n112++) r[_n112] = new Uint8Array(t);
              this.bytes = r;
            }
            _createClass(cr, [{
              key: "getHeight",
              value: function getHeight() {
                return this.height;
              }
            }, {
              key: "getWidth",
              value: function getWidth() {
                return this.width;
              }
            }, {
              key: "get",
              value: function get(t, e) {
                return this.bytes[e][t];
              }
            }, {
              key: "getArray",
              value: function getArray() {
                return this.bytes;
              }
            }, {
              key: "setNumber",
              value: function setNumber(t, e, r) {
                this.bytes[e][t] = r;
              }
            }, {
              key: "setBoolean",
              value: function setBoolean(t, e, r) {
                this.bytes[e][t] = r ? 1 : 0;
              }
            }, {
              key: "clear",
              value: function clear(t) {
                var _iterator68 = _createForOfIteratorHelper(this.bytes),
                  _step68;
                try {
                  for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                    var _e179 = _step68.value;
                    f.fill(_e179, t);
                  }
                } catch (err) {
                  _iterator68.e(err);
                } finally {
                  _iterator68.f();
                }
              }
            }, {
              key: "equals",
              value: function equals(t) {
                if (!(t instanceof cr)) return !1;
                var e = t;
                if (this.width !== e.width) return !1;
                if (this.height !== e.height) return !1;
                for (var _t201 = 0, _r145 = this.height; _t201 < _r145; ++_t201) {
                  var _r146 = this.bytes[_t201],
                    _n113 = e.bytes[_t201];
                  for (var _t202 = 0, _e180 = this.width; _t202 < _e180; ++_t202) if (_r146[_t202] !== _n113[_t202]) return !1;
                }
                return !0;
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = new T();
                for (var _e181 = 0, _r147 = this.height; _e181 < _r147; ++_e181) {
                  var _r148 = this.bytes[_e181];
                  for (var _e182 = 0, _n114 = this.width; _e182 < _n114; ++_e182) switch (_r148[_e182]) {
                    case 0:
                      t.append(" 0");
                      break;
                    case 1:
                      t.append(" 1");
                      break;
                    default:
                      t.append("  ");
                  }
                  t.append("\n");
                }
                return t.toString();
              }
            }]);
            return cr;
          }();
          var hr = /*#__PURE__*/function () {
            function hr() {
              _classCallCheck(this, hr);
              this.maskPattern = -1;
            }
            _createClass(hr, [{
              key: "getMode",
              value: function getMode() {
                return this.mode;
              }
            }, {
              key: "getECLevel",
              value: function getECLevel() {
                return this.ecLevel;
              }
            }, {
              key: "getVersion",
              value: function getVersion() {
                return this.version;
              }
            }, {
              key: "getMaskPattern",
              value: function getMaskPattern() {
                return this.maskPattern;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                return this.matrix;
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = new T();
                return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString();
              }
            }, {
              key: "setMode",
              value: function setMode(t) {
                this.mode = t;
              }
            }, {
              key: "setECLevel",
              value: function setECLevel(t) {
                this.ecLevel = t;
              }
            }, {
              key: "setVersion",
              value: function setVersion(t) {
                this.version = t;
              }
            }, {
              key: "setMaskPattern",
              value: function setMaskPattern(t) {
                this.maskPattern = t;
              }
            }, {
              key: "setMatrix",
              value: function setMatrix(t) {
                this.matrix = t;
              }
            }], [{
              key: "isValidMaskPattern",
              value: function isValidMaskPattern(t) {
                return t >= 0 && t < hr.NUM_MASK_PATTERNS;
              }
            }]);
            return hr;
          }();
          hr.NUM_MASK_PATTERNS = 8;
          var ur = /*#__PURE__*/function (_o73) {
            _inherits(ur, _o73);
            var _super56 = _createSuper(ur);
            function ur() {
              _classCallCheck(this, ur);
              return _super56.apply(this, arguments);
            }
            return _createClass(ur);
          }(o);
          ur.kind = "WriterException";
          var dr = /*#__PURE__*/function () {
            function dr() {
              _classCallCheck(this, dr);
            }
            _createClass(dr, null, [{
              key: "clearMatrix",
              value: function clearMatrix(t) {
                t.clear(255);
              }
            }, {
              key: "buildMatrix",
              value: function buildMatrix(t, e, r, n, i) {
                dr.clearMatrix(i), dr.embedBasicPatterns(r, i), dr.embedTypeInfo(e, n, i), dr.maybeEmbedVersionInfo(r, i), dr.embedDataBits(t, n, i);
              }
            }, {
              key: "embedBasicPatterns",
              value: function embedBasicPatterns(t, e) {
                dr.embedPositionDetectionPatternsAndSeparators(e), dr.embedDarkDotAtLeftBottomCorner(e), dr.maybeEmbedPositionAdjustmentPatterns(t, e), dr.embedTimingPatterns(e);
              }
            }, {
              key: "embedTypeInfo",
              value: function embedTypeInfo(t, e, r) {
                var n = new A();
                dr.makeTypeInfoBits(t, e, n);
                for (var _t203 = 0, _e183 = n.getSize(); _t203 < _e183; ++_t203) {
                  var _e184 = n.get(n.getSize() - 1 - _t203),
                    _i89 = dr.TYPE_INFO_COORDINATES[_t203],
                    _o74 = _i89[0],
                    _s47 = _i89[1];
                  if (r.setBoolean(_o74, _s47, _e184), _t203 < 8) {
                    var _n115 = r.getWidth() - _t203 - 1,
                      _i90 = 8;
                    r.setBoolean(_n115, _i90, _e184);
                  } else {
                    var _n116 = 8,
                      _i91 = r.getHeight() - 7 + (_t203 - 8);
                    r.setBoolean(_n116, _i91, _e184);
                  }
                }
              }
            }, {
              key: "maybeEmbedVersionInfo",
              value: function maybeEmbedVersionInfo(t, e) {
                if (t.getVersionNumber() < 7) return;
                var r = new A();
                dr.makeVersionInfoBits(t, r);
                var n = 17;
                for (var _t204 = 0; _t204 < 6; ++_t204) for (var _i92 = 0; _i92 < 3; ++_i92) {
                  var _o75 = r.get(n);
                  n--, e.setBoolean(_t204, e.getHeight() - 11 + _i92, _o75), e.setBoolean(e.getHeight() - 11 + _i92, _t204, _o75);
                }
              }
            }, {
              key: "embedDataBits",
              value: function embedDataBits(t, e, r) {
                var n = 0,
                  i = -1,
                  o = r.getWidth() - 1,
                  s = r.getHeight() - 1;
                for (; o > 0;) {
                  for (6 === o && (o -= 1); s >= 0 && s < r.getHeight();) {
                    for (var _i93 = 0; _i93 < 2; ++_i93) {
                      var _a28 = o - _i93;
                      if (!dr.isEmpty(r.get(_a28, s))) continue;
                      var _l24 = void 0;
                      n < t.getSize() ? (_l24 = t.get(n), ++n) : _l24 = !1, 255 !== e && lr.getDataMaskBit(e, _a28, s) && (_l24 = !_l24), r.setBoolean(_a28, s, _l24);
                    }
                    s += i;
                  }
                  i = -i, s += i, o -= 2;
                }
                if (n !== t.getSize()) throw new ur("Not all bits consumed: " + n + "/" + t.getSize());
              }
            }, {
              key: "findMSBSet",
              value: function findMSBSet(t) {
                return 32 - w.numberOfLeadingZeros(t);
              }
            }, {
              key: "calculateBCHCode",
              value: function calculateBCHCode(t, e) {
                if (0 === e) throw new a("0 polynomial");
                var r = dr.findMSBSet(e);
                for (t <<= r - 1; dr.findMSBSet(t) >= r;) t ^= e << dr.findMSBSet(t) - r;
                return t;
              }
            }, {
              key: "makeTypeInfoBits",
              value: function makeTypeInfoBits(t, e, r) {
                if (!hr.isValidMaskPattern(e)) throw new ur("Invalid mask pattern");
                var n = t.getBits() << 3 | e;
                r.appendBits(n, 5);
                var i = dr.calculateBCHCode(n, dr.TYPE_INFO_POLY);
                r.appendBits(i, 10);
                var o = new A();
                if (o.appendBits(dr.TYPE_INFO_MASK_PATTERN, 15), r.xor(o), 15 !== r.getSize()) throw new ur("should not happen but we got: " + r.getSize());
              }
            }, {
              key: "makeVersionInfoBits",
              value: function makeVersionInfoBits(t, e) {
                e.appendBits(t.getVersionNumber(), 6);
                var r = dr.calculateBCHCode(t.getVersionNumber(), dr.VERSION_INFO_POLY);
                if (e.appendBits(r, 12), 18 !== e.getSize()) throw new ur("should not happen but we got: " + e.getSize());
              }
            }, {
              key: "isEmpty",
              value: function isEmpty(t) {
                return 255 === t;
              }
            }, {
              key: "embedTimingPatterns",
              value: function embedTimingPatterns(t) {
                for (var _e185 = 8; _e185 < t.getWidth() - 8; ++_e185) {
                  var _r149 = (_e185 + 1) % 2;
                  dr.isEmpty(t.get(_e185, 6)) && t.setNumber(_e185, 6, _r149), dr.isEmpty(t.get(6, _e185)) && t.setNumber(6, _e185, _r149);
                }
              }
            }, {
              key: "embedDarkDotAtLeftBottomCorner",
              value: function embedDarkDotAtLeftBottomCorner(t) {
                if (0 === t.get(8, t.getHeight() - 8)) throw new ur();
                t.setNumber(8, t.getHeight() - 8, 1);
              }
            }, {
              key: "embedHorizontalSeparationPattern",
              value: function embedHorizontalSeparationPattern(t, e, r) {
                for (var _n117 = 0; _n117 < 8; ++_n117) {
                  if (!dr.isEmpty(r.get(t + _n117, e))) throw new ur();
                  r.setNumber(t + _n117, e, 0);
                }
              }
            }, {
              key: "embedVerticalSeparationPattern",
              value: function embedVerticalSeparationPattern(t, e, r) {
                for (var _n118 = 0; _n118 < 7; ++_n118) {
                  if (!dr.isEmpty(r.get(t, e + _n118))) throw new ur();
                  r.setNumber(t, e + _n118, 0);
                }
              }
            }, {
              key: "embedPositionAdjustmentPattern",
              value: function embedPositionAdjustmentPattern(t, e, r) {
                for (var _n119 = 0; _n119 < 5; ++_n119) {
                  var _i94 = dr.POSITION_ADJUSTMENT_PATTERN[_n119];
                  for (var _o76 = 0; _o76 < 5; ++_o76) r.setNumber(t + _o76, e + _n119, _i94[_o76]);
                }
              }
            }, {
              key: "embedPositionDetectionPattern",
              value: function embedPositionDetectionPattern(t, e, r) {
                for (var _n120 = 0; _n120 < 7; ++_n120) {
                  var _i95 = dr.POSITION_DETECTION_PATTERN[_n120];
                  for (var _o77 = 0; _o77 < 7; ++_o77) r.setNumber(t + _o77, e + _n120, _i95[_o77]);
                }
              }
            }, {
              key: "embedPositionDetectionPatternsAndSeparators",
              value: function embedPositionDetectionPatternsAndSeparators(t) {
                var e = dr.POSITION_DETECTION_PATTERN[0].length;
                dr.embedPositionDetectionPattern(0, 0, t), dr.embedPositionDetectionPattern(t.getWidth() - e, 0, t), dr.embedPositionDetectionPattern(0, t.getWidth() - e, t);
                dr.embedHorizontalSeparationPattern(0, 7, t), dr.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t), dr.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t);
                dr.embedVerticalSeparationPattern(7, 0, t), dr.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t), dr.embedVerticalSeparationPattern(7, t.getHeight() - 7, t);
              }
            }, {
              key: "maybeEmbedPositionAdjustmentPatterns",
              value: function maybeEmbedPositionAdjustmentPatterns(t, e) {
                if (t.getVersionNumber() < 2) return;
                var r = t.getVersionNumber() - 1,
                  n = dr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
                for (var _t205 = 0, _r150 = n.length; _t205 !== _r150; _t205++) {
                  var _i96 = n[_t205];
                  if (_i96 >= 0) for (var _t206 = 0; _t206 !== _r150; _t206++) {
                    var _r151 = n[_t206];
                    _r151 >= 0 && dr.isEmpty(e.get(_r151, _i96)) && dr.embedPositionAdjustmentPattern(_r151 - 2, _i96 - 2, e);
                  }
                }
              }
            }]);
            return dr;
          }();
          dr.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), dr.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), dr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), dr.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), dr.VERSION_INFO_POLY = 7973, dr.TYPE_INFO_POLY = 1335, dr.TYPE_INFO_MASK_PATTERN = 21522;
          var gr = /*#__PURE__*/function () {
            function gr(t, e) {
              _classCallCheck(this, gr);
              this.dataBytes = t, this.errorCorrectionBytes = e;
            }
            _createClass(gr, [{
              key: "getDataBytes",
              value: function getDataBytes() {
                return this.dataBytes;
              }
            }, {
              key: "getErrorCorrectionBytes",
              value: function getErrorCorrectionBytes() {
                return this.errorCorrectionBytes;
              }
            }]);
            return gr;
          }();
          var fr = /*#__PURE__*/function () {
            function fr() {
              _classCallCheck(this, fr);
            }
            _createClass(fr, null, [{
              key: "calculateMaskPenalty",
              value: function calculateMaskPenalty(t) {
                return lr.applyMaskPenaltyRule1(t) + lr.applyMaskPenaltyRule2(t) + lr.applyMaskPenaltyRule3(t) + lr.applyMaskPenaltyRule4(t);
              }
            }, {
              key: "encode",
              value: function encode(t, e) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = fr.DEFAULT_BYTE_MODE_ENCODING;
                var i = null !== r && void 0 !== r.get(sr.CHARACTER_SET);
                i && (n = r.get(sr.CHARACTER_SET).toString());
                var o = this.chooseMode(t, n),
                  s = new A();
                if (o === Ie.BYTE && (i || fr.DEFAULT_BYTE_MODE_ENCODING !== n)) {
                  var _t207 = I.getCharacterSetECIByName(n);
                  void 0 !== _t207 && this.appendECI(_t207, s);
                }
                this.appendModeInfo(o, s);
                var a = new A();
                var l;
                if (this.appendBytes(t, o, a, n), null !== r && void 0 !== r.get(sr.QR_VERSION)) {
                  var _t208 = Number.parseInt(r.get(sr.QR_VERSION).toString(), 10);
                  l = Ae.getVersionForNumber(_t208);
                  var _n121 = this.calculateBitsNeeded(o, s, a, l);
                  if (!this.willFit(_n121, l, e)) throw new ur("Data too big for requested version");
                } else l = this.recommendVersion(e, o, s, a);
                var c = new A();
                c.appendBitArray(s);
                var h = o === Ie.BYTE ? a.getSizeInBytes() : t.length;
                this.appendLengthInfo(h, l, o, c), c.appendBitArray(a);
                var u = l.getECBlocksForLevel(e),
                  d = l.getTotalCodewords() - u.getTotalECCodewords();
                this.terminateBits(d, c);
                var g = this.interleaveWithECBytes(c, l.getTotalCodewords(), d, u.getNumBlocks()),
                  f = new hr();
                f.setECLevel(e), f.setMode(o), f.setVersion(l);
                var w = l.getDimensionForVersion(),
                  m = new cr(w, w),
                  E = this.chooseMaskPattern(g, e, l, m);
                return f.setMaskPattern(E), dr.buildMatrix(g, e, l, E, m), f.setMatrix(m), f;
              }
            }, {
              key: "recommendVersion",
              value: function recommendVersion(t, e, r, n) {
                var i = this.calculateBitsNeeded(e, r, n, Ae.getVersionForNumber(1)),
                  o = this.chooseVersion(i, t),
                  s = this.calculateBitsNeeded(e, r, n, o);
                return this.chooseVersion(s, t);
              }
            }, {
              key: "calculateBitsNeeded",
              value: function calculateBitsNeeded(t, e, r, n) {
                return e.getSize() + t.getCharacterCountBits(n) + r.getSize();
              }
            }, {
              key: "getAlphanumericCode",
              value: function getAlphanumericCode(t) {
                return t < fr.ALPHANUMERIC_TABLE.length ? fr.ALPHANUMERIC_TABLE[t] : -1;
              }
            }, {
              key: "chooseMode",
              value: function chooseMode(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (I.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return Ie.KANJI;
                var r = !1,
                  n = !1;
                for (var _e186 = 0, _i97 = t.length; _e186 < _i97; ++_e186) {
                  var _i98 = t.charAt(_e186);
                  if (fr.isDigit(_i98)) r = !0;else {
                    if (-1 === this.getAlphanumericCode(_i98.charCodeAt(0))) return Ie.BYTE;
                    n = !0;
                  }
                }
                return n ? Ie.ALPHANUMERIC : r ? Ie.NUMERIC : Ie.BYTE;
              }
            }, {
              key: "isOnlyDoubleByteKanji",
              value: function isOnlyDoubleByteKanji(t) {
                var e;
                try {
                  e = S.encode(t, I.SJIS);
                } catch (t) {
                  return !1;
                }
                var r = e.length;
                if (r % 2 != 0) return !1;
                for (var _t209 = 0; _t209 < r; _t209 += 2) {
                  var _r152 = 255 & e[_t209];
                  if ((_r152 < 129 || _r152 > 159) && (_r152 < 224 || _r152 > 235)) return !1;
                }
                return !0;
              }
            }, {
              key: "chooseMaskPattern",
              value: function chooseMaskPattern(t, e, r, n) {
                var i = Number.MAX_SAFE_INTEGER,
                  o = -1;
                for (var _s48 = 0; _s48 < hr.NUM_MASK_PATTERNS; _s48++) {
                  dr.buildMatrix(t, e, r, _s48, n);
                  var _a29 = this.calculateMaskPenalty(n);
                  _a29 < i && (i = _a29, o = _s48);
                }
                return o;
              }
            }, {
              key: "chooseVersion",
              value: function chooseVersion(t, e) {
                for (var _r153 = 1; _r153 <= 40; _r153++) {
                  var _n122 = Ae.getVersionForNumber(_r153);
                  if (fr.willFit(t, _n122, e)) return _n122;
                }
                throw new ur("Data too big");
              }
            }, {
              key: "willFit",
              value: function willFit(t, e, r) {
                return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8;
              }
            }, {
              key: "terminateBits",
              value: function terminateBits(t, e) {
                var r = 8 * t;
                if (e.getSize() > r) throw new ur("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                for (var _t210 = 0; _t210 < 4 && e.getSize() < r; ++_t210) e.appendBit(!1);
                var n = 7 & e.getSize();
                if (n > 0) for (var _t211 = n; _t211 < 8; _t211++) e.appendBit(!1);
                var i = t - e.getSizeInBytes();
                for (var _t212 = 0; _t212 < i; ++_t212) e.appendBits(0 == (1 & _t212) ? 236 : 17, 8);
                if (e.getSize() !== r) throw new ur("Bits size does not equal capacity");
              }
            }, {
              key: "getNumDataBytesAndNumECBytesForBlockID",
              value: function getNumDataBytesAndNumECBytesForBlockID(t, e, r, n, i, o) {
                if (n >= r) throw new ur("Block ID too large");
                var s = t % r,
                  a = r - s,
                  l = Math.floor(t / r),
                  c = l + 1,
                  h = Math.floor(e / r),
                  u = h + 1,
                  d = l - h,
                  g = c - u;
                if (d !== g) throw new ur("EC bytes mismatch");
                if (r !== a + s) throw new ur("RS blocks mismatch");
                if (t !== (h + d) * a + (u + g) * s) throw new ur("Total bytes mismatch");
                n < a ? (i[0] = h, o[0] = d) : (i[0] = u, o[0] = g);
              }
            }, {
              key: "interleaveWithECBytes",
              value: function interleaveWithECBytes(t, e, r, n) {
                if (t.getSizeInBytes() !== r) throw new ur("Number of bits and data bytes does not match");
                var i = 0,
                  o = 0,
                  s = 0;
                var a = new Array();
                for (var _l25 = 0; _l25 < n; ++_l25) {
                  var _c14 = new Int32Array(1),
                    _h10 = new Int32Array(1);
                  fr.getNumDataBytesAndNumECBytesForBlockID(e, r, n, _l25, _c14, _h10);
                  var _u8 = _c14[0],
                    _d8 = new Uint8Array(_u8);
                  t.toBytes(8 * i, _d8, 0, _u8);
                  var _g6 = fr.generateECBytes(_d8, _h10[0]);
                  a.push(new gr(_d8, _g6)), o = Math.max(o, _u8), s = Math.max(s, _g6.length), i += _c14[0];
                }
                if (r !== i) throw new ur("Data bytes does not match offset");
                var l = new A();
                for (var _t213 = 0; _t213 < o; ++_t213) {
                  var _iterator69 = _createForOfIteratorHelper(a),
                    _step69;
                  try {
                    for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                      var _e187 = _step69.value;
                      var _r154 = _e187.getDataBytes();
                      _t213 < _r154.length && l.appendBits(_r154[_t213], 8);
                    }
                  } catch (err) {
                    _iterator69.e(err);
                  } finally {
                    _iterator69.f();
                  }
                }
                for (var _t214 = 0; _t214 < s; ++_t214) {
                  var _iterator70 = _createForOfIteratorHelper(a),
                    _step70;
                  try {
                    for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                      var _e188 = _step70.value;
                      var _r155 = _e188.getErrorCorrectionBytes();
                      _t214 < _r155.length && l.appendBits(_r155[_t214], 8);
                    }
                  } catch (err) {
                    _iterator70.e(err);
                  } finally {
                    _iterator70.f();
                  }
                }
                if (e !== l.getSizeInBytes()) throw new ur("Interleaving error: " + e + " and " + l.getSizeInBytes() + " differ.");
                return l;
              }
            }, {
              key: "generateECBytes",
              value: function generateECBytes(t, e) {
                var r = t.length,
                  n = new Int32Array(r + e);
                for (var _e189 = 0; _e189 < r; _e189++) n[_e189] = 255 & t[_e189];
                new ar(K.QR_CODE_FIELD_256).encode(n, e);
                var i = new Uint8Array(e);
                for (var _t215 = 0; _t215 < e; _t215++) i[_t215] = n[r + _t215];
                return i;
              }
            }, {
              key: "appendModeInfo",
              value: function appendModeInfo(t, e) {
                e.appendBits(t.getBits(), 4);
              }
            }, {
              key: "appendLengthInfo",
              value: function appendLengthInfo(t, e, r, n) {
                var i = r.getCharacterCountBits(e);
                if (t >= 1 << i) throw new ur(t + " is bigger than " + ((1 << i) - 1));
                n.appendBits(t, i);
              }
            }, {
              key: "appendBytes",
              value: function appendBytes(t, e, r, n) {
                switch (e) {
                  case Ie.NUMERIC:
                    fr.appendNumericBytes(t, r);
                    break;
                  case Ie.ALPHANUMERIC:
                    fr.appendAlphanumericBytes(t, r);
                    break;
                  case Ie.BYTE:
                    fr.append8BitBytes(t, r, n);
                    break;
                  case Ie.KANJI:
                    fr.appendKanjiBytes(t, r);
                    break;
                  default:
                    throw new ur("Invalid mode: " + e);
                }
              }
            }, {
              key: "getDigit",
              value: function getDigit(t) {
                return t.charCodeAt(0) - 48;
              }
            }, {
              key: "isDigit",
              value: function isDigit(t) {
                var e = fr.getDigit(t);
                return e >= 0 && e <= 9;
              }
            }, {
              key: "appendNumericBytes",
              value: function appendNumericBytes(t, e) {
                var r = t.length;
                var n = 0;
                for (; n < r;) {
                  var _i99 = fr.getDigit(t.charAt(n));
                  if (n + 2 < r) {
                    var _r156 = fr.getDigit(t.charAt(n + 1)),
                      _o78 = fr.getDigit(t.charAt(n + 2));
                    e.appendBits(100 * _i99 + 10 * _r156 + _o78, 10), n += 3;
                  } else if (n + 1 < r) {
                    var _r157 = fr.getDigit(t.charAt(n + 1));
                    e.appendBits(10 * _i99 + _r157, 7), n += 2;
                  } else e.appendBits(_i99, 4), n++;
                }
              }
            }, {
              key: "appendAlphanumericBytes",
              value: function appendAlphanumericBytes(t, e) {
                var r = t.length;
                var n = 0;
                for (; n < r;) {
                  var _i100 = fr.getAlphanumericCode(t.charCodeAt(n));
                  if (-1 === _i100) throw new ur();
                  if (n + 1 < r) {
                    var _r158 = fr.getAlphanumericCode(t.charCodeAt(n + 1));
                    if (-1 === _r158) throw new ur();
                    e.appendBits(45 * _i100 + _r158, 11), n += 2;
                  } else e.appendBits(_i100, 6), n++;
                }
              }
            }, {
              key: "append8BitBytes",
              value: function append8BitBytes(t, e, r) {
                var n;
                try {
                  n = S.encode(t, r);
                } catch (t) {
                  throw new ur(t);
                }
                for (var _t216 = 0, _r159 = n.length; _t216 !== _r159; _t216++) {
                  var _r160 = n[_t216];
                  e.appendBits(_r160, 8);
                }
              }
            }, {
              key: "appendKanjiBytes",
              value: function appendKanjiBytes(t, e) {
                var r;
                try {
                  r = S.encode(t, I.SJIS);
                } catch (t) {
                  throw new ur(t);
                }
                var n = r.length;
                for (var _t217 = 0; _t217 < n; _t217 += 2) {
                  var _n123 = (255 & r[_t217]) << 8 & 4294967295 | 255 & r[_t217 + 1];
                  var _i101 = -1;
                  if (_n123 >= 33088 && _n123 <= 40956 ? _i101 = _n123 - 33088 : _n123 >= 57408 && _n123 <= 60351 && (_i101 = _n123 - 49472), -1 === _i101) throw new ur("Invalid byte sequence");
                  var _o79 = 192 * (_i101 >> 8) + (255 & _i101);
                  e.appendBits(_o79, 13);
                }
              }
            }, {
              key: "appendECI",
              value: function appendECI(t, e) {
                e.appendBits(Ie.ECI.getBits(), 4), e.appendBits(t.getValue(), 8);
              }
            }]);
            return fr;
          }();
          fr.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), fr.DEFAULT_BYTE_MODE_ENCODING = I.UTF8.getName();
          var wr = /*#__PURE__*/function () {
            function wr() {
              _classCallCheck(this, wr);
            }
            _createClass(wr, [{
              key: "write",
              value: function write(t, e, r) {
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                if (0 === t.length) throw new a("Found empty contents");
                if (e < 0 || r < 0) throw new a("Requested dimensions are too small: " + e + "x" + r);
                var i = de.L,
                  o = wr.QUIET_ZONE_SIZE;
                null !== n && (void 0 !== n.get(sr.ERROR_CORRECTION) && (i = de.fromString(n.get(sr.ERROR_CORRECTION).toString())), void 0 !== n.get(sr.MARGIN) && (o = Number.parseInt(n.get(sr.MARGIN).toString(), 10)));
                var s = fr.encode(t, i, n);
                return this.renderResult(s, e, r, o);
              }
            }, {
              key: "writeToDom",
              value: function writeToDom(t, e, r, n) {
                var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                "string" == typeof t && (t = document.querySelector(t));
                var o = this.write(e, r, n, i);
                t && t.appendChild(o);
              }
            }, {
              key: "renderResult",
              value: function renderResult(t, e, r, n) {
                var i = t.getMatrix();
                if (null === i) throw new J();
                var o = i.getWidth(),
                  s = i.getHeight(),
                  a = o + 2 * n,
                  l = s + 2 * n,
                  c = Math.max(e, a),
                  h = Math.max(r, l),
                  u = Math.min(Math.floor(c / a), Math.floor(h / l)),
                  d = Math.floor((c - o * u) / 2),
                  g = Math.floor((h - s * u) / 2),
                  f = this.createSVGElement(c, h);
                for (var _t218 = 0, _e190 = g; _t218 < s; _t218++, _e190 += u) for (var _r161 = 0, _n124 = d; _r161 < o; _r161++, _n124 += u) if (1 === i.get(_r161, _t218)) {
                  var _t219 = this.createSvgRectElement(_n124, _e190, u, u);
                  f.appendChild(_t219);
                }
                return f;
              }
            }, {
              key: "createSVGElement",
              value: function createSVGElement(t, e) {
                var r = document.createElementNS(wr.SVG_NS, "svg");
                return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", e.toString()), r;
              }
            }, {
              key: "createSvgRectElement",
              value: function createSvgRectElement(t, e, r, n) {
                var i = document.createElementNS(wr.SVG_NS, "rect");
                return i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", e.toString()), i.setAttributeNS(null, "height", r.toString()), i.setAttributeNS(null, "width", n.toString()), i.setAttributeNS(null, "fill", "#000000"), i;
              }
            }]);
            return wr;
          }();
          wr.QUIET_ZONE_SIZE = 4, wr.SVG_NS = "http://www.w3.org/2000/svg";
          var Ar = /*#__PURE__*/function () {
            function Ar() {
              _classCallCheck(this, Ar);
            }
            _createClass(Ar, [{
              key: "encode",
              value: function encode(t, e, r, n, i) {
                if (0 === t.length) throw new a("Found empty contents");
                if (e !== k.QR_CODE) throw new a("Can only encode QR_CODE, but got " + e);
                if (r < 0 || n < 0) throw new a("Requested dimensions are too small: ".concat(r, "x").concat(n));
                var o = de.L,
                  s = Ar.QUIET_ZONE_SIZE;
                null !== i && (void 0 !== i.get(sr.ERROR_CORRECTION) && (o = de.fromString(i.get(sr.ERROR_CORRECTION).toString())), void 0 !== i.get(sr.MARGIN) && (s = Number.parseInt(i.get(sr.MARGIN).toString(), 10)));
                var l = fr.encode(t, o, i);
                return Ar.renderResult(l, r, n, s);
              }
            }], [{
              key: "renderResult",
              value: function renderResult(t, e, r, n) {
                var i = t.getMatrix();
                if (null === i) throw new J();
                var o = i.getWidth(),
                  s = i.getHeight(),
                  a = o + 2 * n,
                  l = s + 2 * n,
                  c = Math.max(e, a),
                  h = Math.max(r, l),
                  u = Math.min(Math.floor(c / a), Math.floor(h / l)),
                  d = Math.floor((c - o * u) / 2),
                  g = Math.floor((h - s * u) / 2),
                  f = new y(c, h);
                for (var _t220 = 0, _e191 = g; _t220 < s; _t220++, _e191 += u) for (var _r162 = 0, _n125 = d; _r162 < o; _r162++, _n125 += u) 1 === i.get(_r162, _t220) && f.setRegion(_n125, _e191, u, u);
                return f;
              }
            }]);
            return Ar;
          }();
          Ar.QUIET_ZONE_SIZE = 4;
          var mr = /*#__PURE__*/function (_R3) {
            _inherits(mr, _R3);
            var _super57 = _createSuper(mr);
            function mr(t, e, r, n, i, o, s, l) {
              var _this38;
              _classCallCheck(this, mr);
              if (_this38 = _super57.call(this, o, s), _this38.yuvData = t, _this38.dataWidth = e, _this38.dataHeight = r, _this38.left = n, _this38.top = i, n + o > e || i + s > r) throw new a("Crop rectangle does not fit within image data.");
              l && _this38.reverseHorizontal(o, s);
              return _possibleConstructorReturn(_this38);
            }
            _createClass(mr, [{
              key: "getRow",
              value: function getRow(t, e) {
                if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                var r = this.getWidth();
                (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                var n = (t + this.top) * this.dataWidth + this.left;
                return u.arraycopy(this.yuvData, n, e, 0, r), e;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                var t = this.getWidth(),
                  e = this.getHeight();
                if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
                var r = t * e,
                  n = new Uint8ClampedArray(r);
                var i = this.top * this.dataWidth + this.left;
                if (t === this.dataWidth) return u.arraycopy(this.yuvData, i, n, 0, r), n;
                for (var _r163 = 0; _r163 < e; _r163++) {
                  var _e192 = _r163 * t;
                  u.arraycopy(this.yuvData, i, n, _e192, t), i += this.dataWidth;
                }
                return n;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return !0;
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                return new mr(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1);
              }
            }, {
              key: "renderThumbnail",
              value: function renderThumbnail() {
                var t = this.getWidth() / mr.THUMBNAIL_SCALE_FACTOR,
                  e = this.getHeight() / mr.THUMBNAIL_SCALE_FACTOR,
                  r = new Int32Array(t * e),
                  n = this.yuvData;
                var i = this.top * this.dataWidth + this.left;
                for (var _o80 = 0; _o80 < e; _o80++) {
                  var _e193 = _o80 * t;
                  for (var _o81 = 0; _o81 < t; _o81++) {
                    var _t221 = 255 & n[i + _o81 * mr.THUMBNAIL_SCALE_FACTOR];
                    r[_e193 + _o81] = 4278190080 | 65793 * _t221;
                  }
                  i += this.dataWidth * mr.THUMBNAIL_SCALE_FACTOR;
                }
                return r;
              }
            }, {
              key: "getThumbnailWidth",
              value: function getThumbnailWidth() {
                return this.getWidth() / mr.THUMBNAIL_SCALE_FACTOR;
              }
            }, {
              key: "getThumbnailHeight",
              value: function getThumbnailHeight() {
                return this.getHeight() / mr.THUMBNAIL_SCALE_FACTOR;
              }
            }, {
              key: "reverseHorizontal",
              value: function reverseHorizontal(t, e) {
                var r = this.yuvData;
                for (var _n126 = 0, _i102 = this.top * this.dataWidth + this.left; _n126 < e; _n126++, _i102 += this.dataWidth) {
                  var _e194 = _i102 + t / 2;
                  for (var _n127 = _i102, _o82 = _i102 + t - 1; _n127 < _e194; _n127++, _o82--) {
                    var _t222 = r[_n127];
                    r[_n127] = r[_o82], r[_o82] = _t222;
                  }
                }
              }
            }, {
              key: "invert",
              value: function invert() {
                return new O(this);
              }
            }]);
            return mr;
          }(R);
          mr.THUMBNAIL_SCALE_FACTOR = 2;
          var Er = /*#__PURE__*/function (_R4) {
            _inherits(Er, _R4);
            var _super58 = _createSuper(Er);
            function Er(t, e, r, n, i, o, s) {
              var _this39;
              _classCallCheck(this, Er);
              if (_this39 = _super58.call(this, e, r), _this39.dataWidth = n, _this39.dataHeight = i, _this39.left = o, _this39.top = s, 4 === t.BYTES_PER_ELEMENT) {
                var _n128 = e * r,
                  _i103 = new Uint8ClampedArray(_n128);
                for (var _e195 = 0; _e195 < _n128; _e195++) {
                  var _r164 = t[_e195],
                    _n129 = _r164 >> 16 & 255,
                    _o83 = _r164 >> 7 & 510,
                    _s49 = 255 & _r164;
                  _i103[_e195] = (_n129 + _o83 + _s49) / 4 & 255;
                }
                _this39.luminances = _i103;
              } else _this39.luminances = t;
              if (void 0 === n && (_this39.dataWidth = e), void 0 === i && (_this39.dataHeight = r), void 0 === o && (_this39.left = 0), void 0 === s && (_this39.top = 0), _this39.left + e > _this39.dataWidth || _this39.top + r > _this39.dataHeight) throw new a("Crop rectangle does not fit within image data.");
              return _possibleConstructorReturn(_this39);
            }
            _createClass(Er, [{
              key: "getRow",
              value: function getRow(t, e) {
                if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                var r = this.getWidth();
                (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                var n = (t + this.top) * this.dataWidth + this.left;
                return u.arraycopy(this.luminances, n, e, 0, r), e;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                var t = this.getWidth(),
                  e = this.getHeight();
                if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
                var r = t * e,
                  n = new Uint8ClampedArray(r);
                var i = this.top * this.dataWidth + this.left;
                if (t === this.dataWidth) return u.arraycopy(this.luminances, i, n, 0, r), n;
                for (var _r165 = 0; _r165 < e; _r165++) {
                  var _e196 = _r165 * t;
                  u.arraycopy(this.luminances, i, n, _e196, t), i += this.dataWidth;
                }
                return n;
              }
            }, {
              key: "isCropSupported",
              value: function isCropSupported() {
                return !0;
              }
            }, {
              key: "crop",
              value: function crop(t, e, r, n) {
                return new Er(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e);
              }
            }, {
              key: "invert",
              value: function invert() {
                return new O(this);
              }
            }]);
            return Er;
          }(R);
          var Cr = /*#__PURE__*/function (_I) {
            _inherits(Cr, _I);
            var _super59 = _createSuper(Cr);
            function Cr() {
              _classCallCheck(this, Cr);
              return _super59.apply(this, arguments);
            }
            _createClass(Cr, null, [{
              key: "forName",
              value: function forName(t) {
                return this.getCharacterSetECIByName(t);
              }
            }]);
            return Cr;
          }(I);
          var Ir = /*#__PURE__*/_createClass(function Ir() {
            _classCallCheck(this, Ir);
          });
          Ir.ISO_8859_1 = I.ISO8859_1;
          var pr = /*#__PURE__*/function () {
            function pr() {
              _classCallCheck(this, pr);
            }
            _createClass(pr, [{
              key: "isCompact",
              value: function isCompact() {
                return this.compact;
              }
            }, {
              key: "setCompact",
              value: function setCompact(t) {
                this.compact = t;
              }
            }, {
              key: "getSize",
              value: function getSize() {
                return this.size;
              }
            }, {
              key: "setSize",
              value: function setSize(t) {
                this.size = t;
              }
            }, {
              key: "getLayers",
              value: function getLayers() {
                return this.layers;
              }
            }, {
              key: "setLayers",
              value: function setLayers(t) {
                this.layers = t;
              }
            }, {
              key: "getCodeWords",
              value: function getCodeWords() {
                return this.codeWords;
              }
            }, {
              key: "setCodeWords",
              value: function setCodeWords(t) {
                this.codeWords = t;
              }
            }, {
              key: "getMatrix",
              value: function getMatrix() {
                return this.matrix;
              }
            }, {
              key: "setMatrix",
              value: function setMatrix(t) {
                this.matrix = t;
              }
            }]);
            return pr;
          }();
          var Sr = /*#__PURE__*/function () {
            function Sr() {
              _classCallCheck(this, Sr);
            }
            _createClass(Sr, null, [{
              key: "singletonList",
              value: function singletonList(t) {
                return [t];
              }
            }, {
              key: "min",
              value: function min(t, e) {
                return t.sort(e)[0];
              }
            }]);
            return Sr;
          }();
          var _r = /*#__PURE__*/function (_ref3) {
            _inherits(_r, _ref3);
            var _super60 = _createSuper(_r);
            function _r(t, e, r) {
              var _this40;
              _classCallCheck(this, _r);
              _this40 = _super60.call(this, t), _this40.value = e, _this40.bitCount = r;
              return _this40;
            }
            _createClass(_r, [{
              key: "appendTo",
              value: function appendTo(t, e) {
                t.appendBits(this.value, this.bitCount);
              }
            }, {
              key: "add",
              value: function add(t, e) {
                return new _r(this, t, e);
              }
            }, {
              key: "addBinaryShift",
              value: function addBinaryShift(t, e) {
                return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new _r(this, t, e);
              }
            }, {
              key: "toString",
              value: function toString() {
                var t = this.value & (1 << this.bitCount) - 1;
                return t |= 1 << this.bitCount, "<" + w.toBinaryString(t | 1 << this.bitCount).substring(1) + ">";
              }
            }]);
            return _r;
          }( /*#__PURE__*/function () {
            function _class4(t) {
              _classCallCheck(this, _class4);
              this.previous = t;
            }
            _createClass(_class4, [{
              key: "getPrevious",
              value: function getPrevious() {
                return this.previous;
              }
            }]);
            return _class4;
          }());
          var Tr = /*#__PURE__*/function (_r166) {
            _inherits(Tr, _r166);
            var _super61 = _createSuper(Tr);
            function Tr(t, e, r) {
              var _this41;
              _classCallCheck(this, Tr);
              _this41 = _super61.call(this, t, 0, 0), _this41.binaryShiftStart = e, _this41.binaryShiftByteCount = r;
              return _this41;
            }
            _createClass(Tr, [{
              key: "appendTo",
              value: function appendTo(t, e) {
                for (var _r167 = 0; _r167 < this.binaryShiftByteCount; _r167++) (0 === _r167 || 31 === _r167 && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === _r167 ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(e[this.binaryShiftStart + _r167], 8);
              }
            }, {
              key: "addBinaryShift",
              value: function addBinaryShift(t, e) {
                return new Tr(this, t, e);
              }
            }, {
              key: "toString",
              value: function toString() {
                return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
              }
            }]);
            return Tr;
          }(_r);
          function yr(t, e, r) {
            return new _r(t, e, r);
          }
          var Nr = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
            Mr = new _r(null, 0, 0),
            Dr = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])];
          var Rr = function (t) {
            var _iterator71 = _createForOfIteratorHelper(t),
              _step71;
            try {
              for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                var _e197 = _step71.value;
                f.fill(_e197, -1);
              }
            } catch (err) {
              _iterator71.e(err);
            } finally {
              _iterator71.f();
            }
            return t[0][4] = 0, t[1][4] = 0, t[1][0] = 28, t[3][4] = 0, t[2][4] = 0, t[2][0] = 15, t;
          }(f.createInt32Array(6, 6));
          var Or = /*#__PURE__*/function () {
            function Or(t, e, r, n) {
              _classCallCheck(this, Or);
              this.token = t, this.mode = e, this.binaryShiftByteCount = r, this.bitCount = n;
            }
            _createClass(Or, [{
              key: "getMode",
              value: function getMode() {
                return this.mode;
              }
            }, {
              key: "getToken",
              value: function getToken() {
                return this.token;
              }
            }, {
              key: "getBinaryShiftByteCount",
              value: function getBinaryShiftByteCount() {
                return this.binaryShiftByteCount;
              }
            }, {
              key: "getBitCount",
              value: function getBitCount() {
                return this.bitCount;
              }
            }, {
              key: "latchAndAppend",
              value: function latchAndAppend(t, e) {
                var r = this.bitCount,
                  n = this.token;
                if (t !== this.mode) {
                  var _e198 = Dr[this.mode][t];
                  n = yr(n, 65535 & _e198, _e198 >> 16), r += _e198 >> 16;
                }
                var i = 2 === t ? 4 : 5;
                return n = yr(n, e, i), new Or(n, t, 0, r + i);
              }
            }, {
              key: "shiftAndAppend",
              value: function shiftAndAppend(t, e) {
                var r = this.token,
                  n = 2 === this.mode ? 4 : 5;
                return r = yr(r, Rr[this.mode][t], n), r = yr(r, e, 5), new Or(r, this.mode, 0, this.bitCount + n + 5);
              }
            }, {
              key: "addBinaryShiftChar",
              value: function addBinaryShiftChar(t) {
                var e = this.token,
                  r = this.mode,
                  n = this.bitCount;
                if (4 === this.mode || 2 === this.mode) {
                  var _t223 = Dr[r][0];
                  e = yr(e, 65535 & _t223, _t223 >> 16), n += _t223 >> 16, r = 0;
                }
                var i = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8,
                  o = new Or(e, r, this.binaryShiftByteCount + 1, n + i);
                return 2078 === o.binaryShiftByteCount && (o = o.endBinaryShift(t + 1)), o;
              }
            }, {
              key: "endBinaryShift",
              value: function endBinaryShift(t) {
                if (0 === this.binaryShiftByteCount) return this;
                var e = this.token;
                return e = function (t, e, r) {
                  return new Tr(t, e, r);
                }(e, t - this.binaryShiftByteCount, this.binaryShiftByteCount), new Or(e, this.mode, 0, this.bitCount);
              }
            }, {
              key: "isBetterThanOrEqualTo",
              value: function isBetterThanOrEqualTo(t) {
                var e = this.bitCount + (Dr[this.mode][t.mode] >> 16);
                return this.binaryShiftByteCount < t.binaryShiftByteCount ? e += Or.calculateBinaryShiftCost(t) - Or.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (e += 10), e <= t.bitCount;
              }
            }, {
              key: "toBitArray",
              value: function toBitArray(t) {
                var e = [];
                for (var _r168 = this.endBinaryShift(t.length).token; null !== _r168; _r168 = _r168.getPrevious()) e.unshift(_r168);
                var r = new A();
                for (var _i104 = 0, _e199 = e; _i104 < _e199.length; _i104++) {
                  var _n130 = _e199[_i104];
                  _n130.appendTo(r, t);
                }
                return r;
              }
            }, {
              key: "toString",
              value: function toString() {
                return _.format("%s bits=%d bytes=%d", Nr[this.mode], this.bitCount, this.binaryShiftByteCount);
              }
            }], [{
              key: "calculateBinaryShiftCost",
              value: function calculateBinaryShiftCost(t) {
                return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0;
              }
            }]);
            return Or;
          }();
          Or.INITIAL_STATE = new Or(Mr, 0, 0, 0);
          var br = function (t) {
            var e = _.getCharCode(" "),
              r = _.getCharCode("."),
              n = _.getCharCode(",");
            t[0][e] = 1;
            var i = _.getCharCode("Z"),
              o = _.getCharCode("A");
            for (var _e200 = o; _e200 <= i; _e200++) t[0][_e200] = _e200 - o + 2;
            t[1][e] = 1;
            var s = _.getCharCode("z"),
              a = _.getCharCode("a");
            for (var _e201 = a; _e201 <= s; _e201++) t[1][_e201] = _e201 - a + 2;
            t[2][e] = 1;
            var l = _.getCharCode("9"),
              c = _.getCharCode("0");
            for (var _e202 = c; _e202 <= l; _e202++) t[2][_e202] = _e202 - c + 2;
            t[2][n] = 12, t[2][r] = 13;
            var h = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""];
            for (var _e203 = 0; _e203 < h.length; _e203++) t[3][_.getCharCode(h[_e203])] = _e203;
            var u = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
            for (var _e204 = 0; _e204 < u.length; _e204++) _.getCharCode(u[_e204]) > 0 && (t[4][_.getCharCode(u[_e204])] = _e204);
            return t;
          }(f.createInt32Array(5, 256));
          var Lr = /*#__PURE__*/function () {
            function Lr(t) {
              _classCallCheck(this, Lr);
              this.text = t;
            }
            _createClass(Lr, [{
              key: "encode",
              value: function encode() {
                var t = _.getCharCode(" "),
                  e = _.getCharCode("\n");
                var r = Sr.singletonList(Or.INITIAL_STATE);
                for (var _n131 = 0; _n131 < this.text.length; _n131++) {
                  var _i105 = void 0,
                    _o84 = _n131 + 1 < this.text.length ? this.text[_n131 + 1] : 0;
                  switch (this.text[_n131]) {
                    case _.getCharCode("\r"):
                      _i105 = _o84 === e ? 2 : 0;
                      break;
                    case _.getCharCode("."):
                      _i105 = _o84 === t ? 3 : 0;
                      break;
                    case _.getCharCode(","):
                      _i105 = _o84 === t ? 4 : 0;
                      break;
                    case _.getCharCode(":"):
                      _i105 = _o84 === t ? 5 : 0;
                      break;
                    default:
                      _i105 = 0;
                  }
                  _i105 > 0 ? (r = Lr.updateStateListForPair(r, _n131, _i105), _n131++) : r = this.updateStateListForChar(r, _n131);
                }
                return Sr.min(r, function (t, e) {
                  return t.getBitCount() - e.getBitCount();
                }).toBitArray(this.text);
              }
            }, {
              key: "updateStateListForChar",
              value: function updateStateListForChar(t, e) {
                var r = [];
                var _iterator72 = _createForOfIteratorHelper(t),
                  _step72;
                try {
                  for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
                    var _n132 = _step72.value;
                    this.updateStateForChar(_n132, e, r);
                  }
                } catch (err) {
                  _iterator72.e(err);
                } finally {
                  _iterator72.f();
                }
                return Lr.simplifyStates(r);
              }
            }, {
              key: "updateStateForChar",
              value: function updateStateForChar(t, e, r) {
                var n = 255 & this.text[e],
                  i = br[t.getMode()][n] > 0,
                  o = null;
                for (var _s50 = 0; _s50 <= 4; _s50++) {
                  var _a30 = br[_s50][n];
                  if (_a30 > 0) {
                    if (null == o && (o = t.endBinaryShift(e)), !i || _s50 === t.getMode() || 2 === _s50) {
                      var _t224 = o.latchAndAppend(_s50, _a30);
                      r.push(_t224);
                    }
                    if (!i && Rr[t.getMode()][_s50] >= 0) {
                      var _t225 = o.shiftAndAppend(_s50, _a30);
                      r.push(_t225);
                    }
                  }
                }
                if (t.getBinaryShiftByteCount() > 0 || 0 === br[t.getMode()][n]) {
                  var _n133 = t.addBinaryShiftChar(e);
                  r.push(_n133);
                }
              }
            }], [{
              key: "updateStateListForPair",
              value: function updateStateListForPair(t, e, r) {
                var n = [];
                var _iterator73 = _createForOfIteratorHelper(t),
                  _step73;
                try {
                  for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
                    var _i106 = _step73.value;
                    this.updateStateForPair(_i106, e, r, n);
                  }
                } catch (err) {
                  _iterator73.e(err);
                } finally {
                  _iterator73.f();
                }
                return this.simplifyStates(n);
              }
            }, {
              key: "updateStateForPair",
              value: function updateStateForPair(t, e, r, n) {
                var i = t.endBinaryShift(e);
                if (n.push(i.latchAndAppend(4, r)), 4 !== t.getMode() && n.push(i.shiftAndAppend(4, r)), 3 === r || 4 === r) {
                  var _t226 = i.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
                  n.push(_t226);
                }
                if (t.getBinaryShiftByteCount() > 0) {
                  var _r169 = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
                  n.push(_r169);
                }
              }
            }, {
              key: "simplifyStates",
              value: function simplifyStates(t) {
                var e = [];
                var _iterator74 = _createForOfIteratorHelper(t),
                  _step74;
                try {
                  for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
                    var _r170 = _step74.value;
                    var _t227 = !0;
                    var _iterator75 = _createForOfIteratorHelper(e),
                      _step75;
                    try {
                      var _loop3 = function _loop3() {
                        var n = _step75.value;
                        if (n.isBetterThanOrEqualTo(_r170)) {
                          _t227 = !1;
                          return "break";
                        }
                        _r170.isBetterThanOrEqualTo(n) && (e = e.filter(function (t) {
                          return t !== n;
                        }));
                      };
                      for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
                        var _ret2 = _loop3();
                        if (_ret2 === "break") break;
                      }
                    } catch (err) {
                      _iterator75.e(err);
                    } finally {
                      _iterator75.f();
                    }
                    _t227 && e.push(_r170);
                  }
                } catch (err) {
                  _iterator74.e(err);
                } finally {
                  _iterator74.f();
                }
                return e;
              }
            }]);
            return Lr;
          }();
          var Br = /*#__PURE__*/function () {
            function Br() {
              _classCallCheck(this, Br);
            }
            _createClass(Br, null, [{
              key: "encodeBytes",
              value: function encodeBytes(t) {
                return Br.encode(t, Br.DEFAULT_EC_PERCENT, Br.DEFAULT_AZTEC_LAYERS);
              }
            }, {
              key: "encode",
              value: function encode(t, e, r) {
                var n,
                  i,
                  o,
                  s,
                  l,
                  c = new Lr(t).encode(),
                  h = w.truncDivision(c.getSize() * e, 100) + 11,
                  u = c.getSize() + h;
                if (r !== Br.DEFAULT_AZTEC_LAYERS) {
                  if (n = r < 0, i = Math.abs(r), i > (n ? Br.MAX_NB_BITS_COMPACT : Br.MAX_NB_BITS)) throw new a(_.format("Illegal value %s for layers", r));
                  o = Br.totalBitsInLayer(i, n), s = Br.WORD_SIZE[i];
                  var _t228 = o - o % s;
                  if (l = Br.stuffBits(c, s), l.getSize() + h > _t228) throw new a("Data to large for user specified layer");
                  if (n && l.getSize() > 64 * s) throw new a("Data to large for user specified layer");
                } else {
                  s = 0, l = null;
                  for (var _t229 = 0;; _t229++) {
                    if (_t229 > Br.MAX_NB_BITS) throw new a("Data too large for an Aztec code");
                    if (n = _t229 <= 3, i = n ? _t229 + 1 : _t229, o = Br.totalBitsInLayer(i, n), u > o) continue;
                    null != l && s === Br.WORD_SIZE[i] || (s = Br.WORD_SIZE[i], l = Br.stuffBits(c, s));
                    var _e205 = o - o % s;
                    if (!(n && l.getSize() > 64 * s) && l.getSize() + h <= _e205) break;
                  }
                }
                var d,
                  g = Br.generateCheckWords(l, o, s),
                  f = l.getSize() / s,
                  A = Br.generateModeMessage(n, i, f),
                  m = (n ? 11 : 14) + 4 * i,
                  E = new Int32Array(m);
                if (n) {
                  d = m;
                  for (var _t230 = 0; _t230 < E.length; _t230++) E[_t230] = _t230;
                } else {
                  d = m + 1 + 2 * w.truncDivision(w.truncDivision(m, 2) - 1, 15);
                  var _t231 = w.truncDivision(m, 2),
                    _e206 = w.truncDivision(d, 2);
                  for (var _r171 = 0; _r171 < _t231; _r171++) {
                    var _n134 = _r171 + w.truncDivision(_r171, 15);
                    E[_t231 - _r171 - 1] = _e206 - _n134 - 1, E[_t231 + _r171] = _e206 + _n134 + 1;
                  }
                }
                var C = new y(d);
                for (var _t232 = 0, _e207 = 0; _t232 < i; _t232++) {
                  var _r172 = 4 * (i - _t232) + (n ? 9 : 12);
                  for (var _n135 = 0; _n135 < _r172; _n135++) {
                    var _i107 = 2 * _n135;
                    for (var _o85 = 0; _o85 < 2; _o85++) g.get(_e207 + _i107 + _o85) && C.set(E[2 * _t232 + _o85], E[2 * _t232 + _n135]), g.get(_e207 + 2 * _r172 + _i107 + _o85) && C.set(E[2 * _t232 + _n135], E[m - 1 - 2 * _t232 - _o85]), g.get(_e207 + 4 * _r172 + _i107 + _o85) && C.set(E[m - 1 - 2 * _t232 - _o85], E[m - 1 - 2 * _t232 - _n135]), g.get(_e207 + 6 * _r172 + _i107 + _o85) && C.set(E[m - 1 - 2 * _t232 - _n135], E[2 * _t232 + _o85]);
                  }
                  _e207 += 8 * _r172;
                }
                if (Br.drawModeMessage(C, n, d, A), n) Br.drawBullsEye(C, w.truncDivision(d, 2), 5);else {
                  Br.drawBullsEye(C, w.truncDivision(d, 2), 7);
                  for (var _t233 = 0, _e208 = 0; _t233 < w.truncDivision(m, 2) - 1; _t233 += 15, _e208 += 16) for (var _t234 = 1 & w.truncDivision(d, 2); _t234 < d; _t234 += 2) C.set(w.truncDivision(d, 2) - _e208, _t234), C.set(w.truncDivision(d, 2) + _e208, _t234), C.set(_t234, w.truncDivision(d, 2) - _e208), C.set(_t234, w.truncDivision(d, 2) + _e208);
                }
                var I = new pr();
                return I.setCompact(n), I.setSize(d), I.setLayers(i), I.setCodeWords(f), I.setMatrix(C), I;
              }
            }, {
              key: "drawBullsEye",
              value: function drawBullsEye(t, e, r) {
                for (var _n136 = 0; _n136 < r; _n136 += 2) for (var _r173 = e - _n136; _r173 <= e + _n136; _r173++) t.set(_r173, e - _n136), t.set(_r173, e + _n136), t.set(e - _n136, _r173), t.set(e + _n136, _r173);
                t.set(e - r, e - r), t.set(e - r + 1, e - r), t.set(e - r, e - r + 1), t.set(e + r, e - r), t.set(e + r, e - r + 1), t.set(e + r, e + r - 1);
              }
            }, {
              key: "generateModeMessage",
              value: function generateModeMessage(t, e, r) {
                var n = new A();
                return t ? (n.appendBits(e - 1, 2), n.appendBits(r - 1, 6), n = Br.generateCheckWords(n, 28, 4)) : (n.appendBits(e - 1, 5), n.appendBits(r - 1, 11), n = Br.generateCheckWords(n, 40, 4)), n;
              }
            }, {
              key: "drawModeMessage",
              value: function drawModeMessage(t, e, r, n) {
                var i = w.truncDivision(r, 2);
                if (e) for (var _e209 = 0; _e209 < 7; _e209++) {
                  var _r174 = i - 3 + _e209;
                  n.get(_e209) && t.set(_r174, i - 5), n.get(_e209 + 7) && t.set(i + 5, _r174), n.get(20 - _e209) && t.set(_r174, i + 5), n.get(27 - _e209) && t.set(i - 5, _r174);
                } else for (var _e210 = 0; _e210 < 10; _e210++) {
                  var _r175 = i - 5 + _e210 + w.truncDivision(_e210, 5);
                  n.get(_e210) && t.set(_r175, i - 7), n.get(_e210 + 10) && t.set(i + 7, _r175), n.get(29 - _e210) && t.set(_r175, i + 7), n.get(39 - _e210) && t.set(i - 7, _r175);
                }
              }
            }, {
              key: "generateCheckWords",
              value: function generateCheckWords(t, e, r) {
                var n = t.getSize() / r,
                  i = new ar(Br.getGF(r)),
                  o = w.truncDivision(e, r),
                  s = Br.bitsToWords(t, r, o);
                i.encode(s, o - n);
                var a = e % r,
                  l = new A();
                l.appendBits(0, a);
                for (var _i108 = 0, _Array$from = Array.from(s); _i108 < _Array$from.length; _i108++) {
                  var _t235 = _Array$from[_i108];
                  l.appendBits(_t235, r);
                }
                return l;
              }
            }, {
              key: "bitsToWords",
              value: function bitsToWords(t, e, r) {
                var n,
                  i,
                  o = new Int32Array(r);
                for (n = 0, i = t.getSize() / e; n < i; n++) {
                  var _r176 = 0;
                  for (var _i109 = 0; _i109 < e; _i109++) _r176 |= t.get(n * e + _i109) ? 1 << e - _i109 - 1 : 0;
                  o[n] = _r176;
                }
                return o;
              }
            }, {
              key: "getGF",
              value: function getGF(t) {
                switch (t) {
                  case 4:
                    return K.AZTEC_PARAM;
                  case 6:
                    return K.AZTEC_DATA_6;
                  case 8:
                    return K.AZTEC_DATA_8;
                  case 10:
                    return K.AZTEC_DATA_10;
                  case 12:
                    return K.AZTEC_DATA_12;
                  default:
                    throw new a("Unsupported word size " + t);
                }
              }
            }, {
              key: "stuffBits",
              value: function stuffBits(t, e) {
                var r = new A(),
                  n = t.getSize(),
                  i = (1 << e) - 2;
                for (var _o86 = 0; _o86 < n; _o86 += e) {
                  var _s51 = 0;
                  for (var _r177 = 0; _r177 < e; _r177++) (_o86 + _r177 >= n || t.get(_o86 + _r177)) && (_s51 |= 1 << e - 1 - _r177);
                  (_s51 & i) === i ? (r.appendBits(_s51 & i, e), _o86--) : 0 == (_s51 & i) ? (r.appendBits(1 | _s51, e), _o86--) : r.appendBits(_s51, e);
                }
                return r;
              }
            }, {
              key: "totalBitsInLayer",
              value: function totalBitsInLayer(t, e) {
                return ((e ? 88 : 112) + 16 * t) * t;
              }
            }]);
            return Br;
          }();
          Br.DEFAULT_EC_PERCENT = 33, Br.DEFAULT_AZTEC_LAYERS = 0, Br.MAX_NB_BITS = 32, Br.MAX_NB_BITS_COMPACT = 4, Br.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
          var Pr = /*#__PURE__*/function () {
            function Pr() {
              _classCallCheck(this, Pr);
            }
            _createClass(Pr, [{
              key: "encode",
              value: function encode(t, e, r, n) {
                return this.encodeWithHints(t, e, r, n, null);
              }
            }, {
              key: "encodeWithHints",
              value: function encodeWithHints(t, e, r, n, i) {
                var o = Ir.ISO_8859_1,
                  s = Br.DEFAULT_EC_PERCENT,
                  a = Br.DEFAULT_AZTEC_LAYERS;
                return null != i && (i.has(sr.CHARACTER_SET) && (o = Cr.forName(i.get(sr.CHARACTER_SET).toString())), i.has(sr.ERROR_CORRECTION) && (s = w.parseInt(i.get(sr.ERROR_CORRECTION).toString())), i.has(sr.AZTEC_LAYERS) && (a = w.parseInt(i.get(sr.AZTEC_LAYERS).toString()))), Pr.encodeLayers(t, e, r, n, o, s, a);
              }
            }], [{
              key: "encodeLayers",
              value: function encodeLayers(t, e, r, n, i, o, s) {
                if (e !== k.AZTEC) throw new a("Can only encode AZTEC, but got " + e);
                var l = Br.encode(_.getBytes(t, i), o, s);
                return Pr.renderResult(l, r, n);
              }
            }, {
              key: "renderResult",
              value: function renderResult(t, e, r) {
                var n = t.getMatrix();
                if (null == n) throw new J();
                var i = n.getWidth(),
                  o = n.getHeight(),
                  s = Math.max(e, i),
                  a = Math.max(r, o),
                  l = Math.min(s / i, a / o),
                  c = (s - i * l) / 2,
                  h = (a - o * l) / 2,
                  u = new y(s, a);
                for (var _t236 = 0, _e211 = h; _t236 < o; _t236++, _e211 += l) for (var _r178 = 0, _o87 = c; _r178 < i; _r178++, _o87 += l) n.get(_r178, _t236) && u.setRegion(_o87, _e211, l, l);
                return u;
              }
            }]);
            return Pr;
          }();
          t.ArgumentException = s, t.ArithmeticException = Q, t.AztecCode = pr, t.AztecCodeReader = gt, t.AztecCodeWriter = Pr, t.AztecDecoder = tt, t.AztecDetector = dt, t.AztecDetectorResult = ot, t.AztecEncoder = Br, t.AztecHighLevelEncoder = Lr, t.AztecPoint = ut, t.BarcodeFormat = k, t.Binarizer = h, t.BinaryBitmap = l, t.BitArray = A, t.BitMatrix = y, t.BitSource = ae, t.BrowserAztecCodeReader = /*#__PURE__*/function (_v) {
            _inherits(_class5, _v);
            var _super62 = _createSuper(_class5);
            function _class5() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
              _classCallCheck(this, _class5);
              return _super62.call(this, new gt(), t);
            }
            return _createClass(_class5);
          }(v), t.BrowserBarcodeReader = /*#__PURE__*/function (_v2) {
            _inherits(_class6, _v2);
            var _super63 = _createSuper(_class6);
            function _class6() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class6);
              return _super63.call(this, new ee(e), t, e);
            }
            return _createClass(_class6);
          }(v), t.BrowserCodeReader = v, t.BrowserDatamatrixCodeReader = /*#__PURE__*/function (_v3) {
            _inherits(_class7, _v3);
            var _super64 = _createSuper(_class7);
            function _class7() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
              _classCallCheck(this, _class7);
              return _super64.call(this, new ue(), t);
            }
            return _createClass(_class7);
          }(v), t.BrowserMultiFormatReader = /*#__PURE__*/function (_v4) {
            _inherits(_class8, _v4);
            var _super65 = _createSuper(_class8);
            function _class8() {
              var _this42;
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
              _classCallCheck(this, _class8);
              var r = new ir();
              r.setHints(t), _this42 = _super65.call(this, r, e);
              return _this42;
            }
            _createClass(_class8, [{
              key: "decodeBitmap",
              value: function decodeBitmap(t) {
                return this.reader.decodeWithState(t);
              }
            }]);
            return _class8;
          }(v), t.BrowserPDF417Reader = /*#__PURE__*/function (_v5) {
            _inherits(_class9, _v5);
            var _super66 = _createSuper(_class9);
            function _class9() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
              _classCallCheck(this, _class9);
              return _super66.call(this, new rr(), t);
            }
            return _createClass(_class9);
          }(v), t.BrowserQRCodeReader = /*#__PURE__*/function (_v6) {
            _inherits(_class10, _v6);
            var _super67 = _createSuper(_class10);
            function _class10() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
              _classCallCheck(this, _class10);
              return _super67.call(this, new Oe(), t);
            }
            return _createClass(_class10);
          }(v), t.BrowserQRCodeSvgWriter = wr, t.CharacterSetECI = I, t.ChecksumException = c, t.Code128Reader = wt, t.Code39Reader = At, t.DataMatrixDecodedBitStreamParser = le, t.DataMatrixReader = ue, t.DecodeHintType = E, t.DecoderResult = W, t.DefaultGridSampler = ct, t.DetectorResult = it, t.EAN13Reader = _t, t.EncodeHintType = sr, t.Exception = o, t.FormatException = C, t.GenericGF = K, t.GenericGFPoly = Z, t.GlobalHistogramBinarizer = M, t.GridSampler = at, t.GridSamplerInstance = ht, t.HTMLCanvasElementLuminanceSource = b, t.HybridBinarizer = D, t.ITFReader = mt, t.IllegalArgumentException = a, t.IllegalStateException = J, t.InvertedLuminanceSource = O, t.LuminanceSource = R, t.MathUtils = et, t.MultiFormatOneDReader = ee, t.MultiFormatReader = ir, t.MultiFormatWriter = /*#__PURE__*/function () {
            function _class11() {
              _classCallCheck(this, _class11);
            }
            _createClass(_class11, [{
              key: "encode",
              value: function encode(t, e, r, n, i) {
                var o;
                switch (e) {
                  case k.QR_CODE:
                    o = new Ar();
                    break;
                  default:
                    throw new a("No encoder available for format " + e);
                }
                return o.encode(t, e, r, n, i);
              }
            }]);
            return _class11;
          }(), t.NotFoundException = N, t.OneDReader = ft, t.PDF417DecodedBitStreamParser = tr, t.PDF417DecoderErrorCorrection = Fe, t.PDF417Reader = rr, t.PDF417ResultMetadata = We, t.PerspectiveTransform = lt, t.PlanarYUVLuminanceSource = mr, t.QRCodeByteMatrix = cr, t.QRCodeDataMask = me, t.QRCodeDecodedBitStreamParser = pe, t.QRCodeDecoderErrorCorrectionLevel = de, t.QRCodeDecoderFormatInformation = ge, t.QRCodeEncoder = fr, t.QRCodeEncoderQRCode = hr, t.QRCodeMaskUtil = lr, t.QRCodeMatrixUtil = dr, t.QRCodeMode = Ie, t.QRCodeReader = Oe, t.QRCodeVersion = Ae, t.QRCodeWriter = Ar, t.RGBLuminanceSource = Er, t.RSS14Reader = te, t.RSSExpandedReader = Jt, t.ReaderException = nr, t.ReedSolomonDecoder = $, t.ReedSolomonEncoder = ar, t.ReedSolomonException = q, t.Result = F, t.ResultMetadataType = X, t.ResultPoint = nt, t.StringUtils = _, t.UnsupportedOperationException = p, t.VideoInputDevice = L, t.WhiteRectangleDetector = st, t.WriterException = ur, t.ZXingArrays = f, t.ZXingCharset = Cr, t.ZXingInteger = w, t.ZXingStandardCharsets = Ir, t.ZXingStringBuilder = T, t.ZXingStringEncoding = S, t.ZXingSystem = u, Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }(e);
      }
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = e[n] = {
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.exports;
  }
  r.d = function (t, e) {
    for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    });
  }, r.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  };
  var n = {};
  (function () {
    "use strict";

    var t;
    r.r(n), r.d(n, {
      Html5Qrcode: function Html5Qrcode() {
        return L;
      },
      Html5QrcodeScanType: function Html5QrcodeScanType() {
        return i;
      },
      Html5QrcodeScanner: function Html5QrcodeScanner() {
        return V;
      },
      Html5QrcodeScannerState: function Html5QrcodeScannerState() {
        return f;
      },
      Html5QrcodeSupportedFormats: function Html5QrcodeSupportedFormats() {
        return t;
      }
    }), function (t) {
      t[t.QR_CODE = 0] = "QR_CODE", t[t.AZTEC = 1] = "AZTEC", t[t.CODABAR = 2] = "CODABAR", t[t.CODE_39 = 3] = "CODE_39", t[t.CODE_93 = 4] = "CODE_93", t[t.CODE_128 = 5] = "CODE_128", t[t.DATA_MATRIX = 6] = "DATA_MATRIX", t[t.MAXICODE = 7] = "MAXICODE", t[t.ITF = 8] = "ITF", t[t.EAN_13 = 9] = "EAN_13", t[t.EAN_8 = 10] = "EAN_8", t[t.PDF_417 = 11] = "PDF_417", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
    }(t || (t = {}));
    var e,
      i,
      o = new Map([[t.QR_CODE, "QR_CODE"], [t.AZTEC, "AZTEC"], [t.CODABAR, "CODABAR"], [t.CODE_39, "CODE_39"], [t.CODE_93, "CODE_93"], [t.CODE_128, "CODE_128"], [t.DATA_MATRIX, "DATA_MATRIX"], [t.MAXICODE, "MAXICODE"], [t.ITF, "ITF"], [t.EAN_13, "EAN_13"], [t.EAN_8, "EAN_8"], [t.PDF_417, "PDF_417"], [t.RSS_14, "RSS_14"], [t.RSS_EXPANDED, "RSS_EXPANDED"], [t.UPC_A, "UPC_A"], [t.UPC_E, "UPC_E"], [t.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]]);
    function s(e) {
      return Object.values(t).includes(e);
    }
    !function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.URL = 1] = "URL";
    }(e || (e = {})), function (t) {
      t[t.SCAN_TYPE_CAMERA = 0] = "SCAN_TYPE_CAMERA", t[t.SCAN_TYPE_FILE = 1] = "SCAN_TYPE_FILE";
    }(i || (i = {}));
    var a,
      l = function () {
        function t() {}
        return t.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode", t.SCAN_DEFAULT_FPS = 2, t.DEFAULT_DISABLE_FLIP = !1, t.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0, t.DEFAULT_SUPPORTED_SCAN_TYPE = [i.SCAN_TYPE_CAMERA, i.SCAN_TYPE_FILE], t;
      }(),
      c = function () {
        function t(t, e) {
          this.format = t, this.formatName = e;
        }
        return t.prototype.toString = function () {
          return this.formatName;
        }, t.create = function (e) {
          if (!o.has(e)) throw e + " not in html5QrcodeSupportedFormatsTextMap";
          return new t(e, o.get(e));
        }, t;
      }(),
      h = function () {
        function t() {}
        return t.createFromText = function (t) {
          return {
            decodedText: t,
            result: {
              text: t
            }
          };
        }, t.createFromQrcodeResult = function (t) {
          return {
            decodedText: t.text,
            result: t
          };
        }, t;
      }();
    !function (t) {
      t[t.UNKWOWN_ERROR = 0] = "UNKWOWN_ERROR", t[t.IMPLEMENTATION_ERROR = 1] = "IMPLEMENTATION_ERROR", t[t.NO_CODE_FOUND_ERROR = 2] = "NO_CODE_FOUND_ERROR";
    }(a || (a = {}));
    var u = function () {
        function t() {}
        return t.createFrom = function (t) {
          return {
            errorMessage: t,
            type: a.UNKWOWN_ERROR
          };
        }, t;
      }(),
      d = function () {
        function t(t) {
          this.verbose = t;
        }
        return t.prototype.log = function (t) {
          this.verbose && console.log(t);
        }, t.prototype.warn = function (t) {
          this.verbose && console.warn(t);
        }, t.prototype.logError = function (t, e) {
          (this.verbose || !0 === e) && console.error(t);
        }, t.prototype.logErrors = function (t) {
          if (0 === t.length) throw "Logger#logError called without arguments";
          this.verbose && console.error(t);
        }, t;
      }();
    function g(t) {
      return null == t;
    }
    var f,
      w = function () {
        function t() {}
        return t.codeParseError = function (t) {
          return "QR code parse error, error = " + t;
        }, t.errorGettingUserMedia = function (t) {
          return "Error getting userMedia, error = " + t;
        }, t.onlyDeviceSupportedError = function () {
          return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string).";
        }, t.cameraStreamingNotSupported = function () {
          return "Camera streaming not supported by the browser.";
        }, t.unableToQuerySupportedDevices = function () {
          return "Unable to query supported devices, unknown error.";
        }, t.insecureContextCameraQueryError = function () {
          return "Camera access is only supported in secure context like https or localhost.";
        }, t;
      }(),
      A = function () {
        function t() {}
        return t.scanningStatus = function () {
          return "Scanning";
        }, t.idleStatus = function () {
          return "Idle";
        }, t.errorStatus = function () {
          return "Error";
        }, t.permissionStatus = function () {
          return "Permission";
        }, t.noCameraFoundErrorStatus = function () {
          return "No Cameras";
        }, t.lastMatch = function (t) {
          return "Last Match: " + t;
        }, t.codeScannerTitle = function () {
          return "Code Scanner";
        }, t.cameraPermissionTitle = function () {
          return "Request Camera Permissions";
        }, t.cameraPermissionRequesting = function () {
          return "Requesting camera permissions...";
        }, t.noCameraFound = function () {
          return "No camera found";
        }, t.scanButtonStopScanningText = function () {
          return "Stop Scanning";
        }, t.scanButtonStartScanningText = function () {
          return "Start Scanning";
        }, t.scanButtonScanningStarting = function () {
          return "Launching Camera...";
        }, t.textIfCameraScanSelected = function () {
          return "Scan an Image File";
        }, t.textIfFileScanSelected = function () {
          return "Scan using camera directly";
        }, t.selectCamera = function () {
          return "Select Camera";
        }, t;
      }(),
      m = function () {
        function t() {}
        return t.builtUsing = function () {
          return "Built using ";
        }, t.reportIssues = function () {
          return "Report issues";
        }, t;
      }(),
      E = function () {
        function t() {}
        return t.isMediaStreamConstraintsValid = function (t, e) {
          if ("object" != _typeof(t)) {
            var r = _typeof(t);
            return e.logError("videoConstraints should be of type object, the object passed is of type " + r + ".", !0), !1;
          }
          for (var n = new Set(["autoGainControl", "channelCount", "echoCancellation", "latency", "noiseSuppression", "sampleRate", "sampleSize", "volume"]), i = 0, o = Object.keys(t); i < o.length; i++) {
            var s = o[i];
            if (n.has(s)) return e.logError(s + " is not supported videoConstaints.", !0), !1;
          }
          return !0;
        }, t;
      }(),
      C = r(449),
      I = function () {
        function e(e, r, n) {
          if (this.formatMap = new Map([[t.QR_CODE, C.BarcodeFormat.QR_CODE], [t.AZTEC, C.BarcodeFormat.AZTEC], [t.CODABAR, C.BarcodeFormat.CODABAR], [t.CODE_39, C.BarcodeFormat.CODE_39], [t.CODE_93, C.BarcodeFormat.CODE_93], [t.CODE_128, C.BarcodeFormat.CODE_128], [t.DATA_MATRIX, C.BarcodeFormat.DATA_MATRIX], [t.MAXICODE, C.BarcodeFormat.MAXICODE], [t.ITF, C.BarcodeFormat.ITF], [t.EAN_13, C.BarcodeFormat.EAN_13], [t.EAN_8, C.BarcodeFormat.EAN_8], [t.PDF_417, C.BarcodeFormat.PDF_417], [t.RSS_14, C.BarcodeFormat.RSS_14], [t.RSS_EXPANDED, C.BarcodeFormat.RSS_EXPANDED], [t.UPC_A, C.BarcodeFormat.UPC_A], [t.UPC_E, C.BarcodeFormat.UPC_E], [t.UPC_EAN_EXTENSION, C.BarcodeFormat.UPC_EAN_EXTENSION]]), this.reverseFormatMap = this.createReverseFormatMap(), !C) throw "Use html5qrcode.min.js without edit, ZXing not found.";
          this.verbose = r, this.logger = n;
          var i = this.createZXingFormats(e),
            o = new Map();
          o.set(C.DecodeHintType.POSSIBLE_FORMATS, i), this.hints = o;
        }
        return e.prototype.decodeAsync = function (t) {
          var e = this;
          return new Promise(function (r, n) {
            try {
              r(e.decode(t));
            } catch (t) {
              n(t);
            }
          });
        }, e.prototype.decode = function (t) {
          var e = new C.MultiFormatReader(this.verbose, this.hints),
            r = new C.HTMLCanvasElementLuminanceSource(t),
            n = new C.BinaryBitmap(new C.HybridBinarizer(r)),
            i = e.decode(n);
          return {
            text: i.text,
            format: c.create(this.toHtml5QrcodeSupportedFormats(i.format))
          };
        }, e.prototype.createReverseFormatMap = function () {
          var t = new Map();
          return this.formatMap.forEach(function (e, r, n) {
            t.set(e, r);
          }), t;
        }, e.prototype.toHtml5QrcodeSupportedFormats = function (t) {
          if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have " + t;
          return this.reverseFormatMap.get(t);
        }, e.prototype.createZXingFormats = function (t) {
          for (var e = [], r = 0, n = t; r < n.length; r++) {
            var i = n[r];
            this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.logError(i + " is not supported byZXingHtml5QrcodeShim");
          }
          return e;
        }, e;
      }(),
      p = function () {
        function e(r, n, i) {
          if (this.formatMap = new Map([[t.QR_CODE, "qr_code"], [t.AZTEC, "aztec"], [t.CODABAR, "codabar"], [t.CODE_39, "code_39"], [t.CODE_93, "code_93"], [t.CODE_128, "code_128"], [t.DATA_MATRIX, "data_matrix"], [t.ITF, "itf"], [t.EAN_13, "ean_13"], [t.EAN_8, "ean_8"], [t.PDF_417, "pdf417"], [t.UPC_A, "upc_a"], [t.UPC_E, "upc_e"]]), this.reverseFormatMap = this.createReverseFormatMap(), !e.isSupported()) throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
          this.verbose = n, this.logger = i;
          var o = this.createBarcodeDetectorFormats(r);
          if (this.detector = new BarcodeDetector(o), !this.detector) throw "BarcodeDetector detector not supported";
        }
        return e.isSupported = function () {
          return "BarcodeDetector" in window && void 0 !== new BarcodeDetector({
            formats: ["qr_code"]
          });
        }, e.prototype.decodeAsync = function (t) {
          return e = this, r = void 0, i = function i() {
            var e, r;
            return function (t, e) {
              var r,
                n,
                i,
                o,
                s = {
                  label: 0,
                  sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: []
                };
              return o = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
              }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this;
              }), o;
              function a(o) {
                return function (a) {
                  return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                      if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                      switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, {
                            value: o[1],
                            done: !1
                          };
                        case 5:
                          s.label++, n = o[1], o = [0];
                          continue;
                        case 7:
                          o = s.ops.pop(), s.trys.pop();
                          continue;
                        default:
                          if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            s.label = i[1], i = o;
                            break;
                          }
                          if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = e.call(t, s);
                    } catch (t) {
                      o = [6, t], n = 0;
                    } finally {
                      r = i = 0;
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                      value: o[0] ? o[1] : void 0,
                      done: !0
                    };
                  }([o, a]);
                };
              }
            }(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.detector.detect(t)];
                case 1:
                  if (!(e = n.sent()) || 0 === e.length) throw "No barcode or QR code detected.";
                  return [2, {
                    text: (r = this.selectLargestBarcode(e)).rawValue,
                    format: c.create(this.toHtml5QrcodeSupportedFormats(r.format))
                  }];
              }
            });
          }, new ((n = void 0) || (n = Promise))(function (t, o) {
            function s(t) {
              try {
                l(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                l(i["throw"](t));
              } catch (t) {
                o(t);
              }
            }
            function l(e) {
              var r;
              e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function (t) {
                t(r);
              })).then(s, a);
            }
            l((i = i.apply(e, r || [])).next());
          });
          var e, r, n, i;
        }, e.prototype.selectLargestBarcode = function (t) {
          for (var e = null, r = 0, n = 0, i = t; n < i.length; n++) {
            var o = i[n],
              s = o.boundingBox.width * o.boundingBox.height;
            s > r && (r = s, e = o);
          }
          if (!e) throw "No largest barcode found";
          return e;
        }, e.prototype.createBarcodeDetectorFormats = function (t) {
          for (var e = [], r = 0, n = t; r < n.length; r++) {
            var i = n[r];
            this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.warn(i + " is not supported byBarcodeDetectorDelegate");
          }
          return {
            formats: e
          };
        }, e.prototype.toHtml5QrcodeSupportedFormats = function (t) {
          if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have " + t;
          return this.reverseFormatMap.get(t);
        }, e.prototype.createReverseFormatMap = function () {
          var t = new Map();
          return this.formatMap.forEach(function (e, r, n) {
            t.set(e, r);
          }), t;
        }, e;
      }(),
      S = function () {
        function t(t, e, r, n) {
          this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100, this.executions = 0, this.executionResults = [], this.verbose = e, !0 === n.useBarCodeDetectorIfSupported && p.isSupported() ? this.decoder = new p(t, e, r) : this.decoder = new I(t, e, r);
        }
        return t.prototype.decodeAsync = function (t) {
          var e = this,
            r = performance.now();
          return this.decoder.decodeAsync(t)["finally"](function () {
            if (e.verbose) {
              var t = performance.now() - r;
              e.executionResults.push(t), e.executions++, e.possiblyFlushPerformanceReport();
            }
          });
        }, t.prototype.possiblyFlushPerformanceReport = function () {
          if (!(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)) {
            for (var t = 0, e = 0, r = this.executionResults; e < r.length; e++) t += r[e];
            var n = t / this.executionResults.length;
            console.log(n + " ms for " + this.executionResults.length + " last runs."), this.executions = 0, this.executionResults = [];
          }
        }, t;
      }(),
      _ = function () {
        function t() {}
        return t.createExperimentalFeaturesConfig = function (t) {
          return t ? (!0 !== t.useBarCodeDetectorIfSupported && (t.useBarCodeDetectorIfSupported = !1), t) : {
            useBarCodeDetectorIfSupported: !1
          };
        }, t;
      }();
    !function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NOT_STARTED = 1] = "NOT_STARTED", t[t.SCANNING = 2] = "SCANNING", t[t.PAUSED = 3] = "PAUSED";
    }(f || (f = {}));
    var _T,
      y,
      N = function () {
        function t() {
          this.state = f.NOT_STARTED, this.onGoingTransactionNewState = f.UNKNOWN;
        }
        return t.prototype.directTransition = function (t) {
          this.failIfTransitionOngoing(), this.validateTransition(t), this.state = t;
        }, t.prototype.startTransition = function (t) {
          return this.failIfTransitionOngoing(), this.validateTransition(t), this.onGoingTransactionNewState = t, this;
        }, t.prototype.execute = function () {
          if (this.onGoingTransactionNewState === f.UNKNOWN) throw "Transaction is already cancelled, cannot execute().";
          var t = this.onGoingTransactionNewState;
          this.onGoingTransactionNewState = f.UNKNOWN, this.directTransition(t);
        }, t.prototype.cancel = function () {
          if (this.onGoingTransactionNewState === f.UNKNOWN) throw "Transaction is already cancelled, cannot cancel().";
          this.onGoingTransactionNewState = f.UNKNOWN;
        }, t.prototype.getState = function () {
          return this.state;
        }, t.prototype.failIfTransitionOngoing = function () {
          if (this.onGoingTransactionNewState !== f.UNKNOWN) throw "Cannnot transition to a new state, already under transition";
        }, t.prototype.validateTransition = function (t) {
          switch (this.state) {
            case f.UNKNOWN:
              throw "Transition from unknown is not allowed";
            case f.NOT_STARTED:
              this.failIfNewStateIs(t, [f.PAUSED]);
              break;
            case f.SCANNING:
            case f.PAUSED:
          }
        }, t.prototype.failIfNewStateIs = function (t, e) {
          for (var r = 0, n = e; r < n.length; r++) if (t === n[r]) throw "Cannot transition from " + this.state + " to " + t;
        }, t;
      }(),
      M = function () {
        function t(t) {
          this.stateManager = t;
        }
        return t.prototype.startTransition = function (t) {
          return this.stateManager.startTransition(t);
        }, t.prototype.directTransition = function (t) {
          this.stateManager.directTransition(t);
        }, t.prototype.getState = function () {
          return this.stateManager.getState();
        }, t.prototype.canScanFile = function () {
          return this.stateManager.getState() === f.NOT_STARTED;
        }, t.prototype.isScanning = function () {
          return this.stateManager.getState() !== f.NOT_STARTED;
        }, t.prototype.isStrictlyScanning = function () {
          return this.stateManager.getState() === f.SCANNING;
        }, t.prototype.isPaused = function () {
          return this.stateManager.getState() === f.PAUSED;
        }, t;
      }(),
      D = function () {
        function t() {}
        return t.create = function () {
          return new M(new N());
        }, t;
      }(),
      R = (_T = function T(t, e) {
        return (_T = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        })(t, e);
      }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        _T(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
      O = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return R(e, t), e.DEFAULT_WIDTH = 300, e.DEFAULT_WIDTH_OFFSET = 2, e.FILE_SCAN_MIN_HEIGHT = 300, e.MIN_QR_BOX_SIZE = 50, e.SHADED_LEFT = 1, e.SHADED_RIGHT = 2, e.SHADED_TOP = 3, e.SHADED_BOTTOM = 4, e.SHADED_REGION_ELEMENT_ID = "qr-shaded-region", e.VERBOSE = !1, e.BORDER_SHADER_DEFAULT_COLOR = "#ffffff", e.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)", e;
      }(l),
      b = function () {
        function t(t, e) {
          this.logger = e, this.fps = O.SCAN_DEFAULT_FPS, t ? (t.fps && (this.fps = t.fps), this.disableFlip = !0 === t.disableFlip, this.qrbox = t.qrbox, this.aspectRatio = t.aspectRatio, this.videoConstraints = t.videoConstraints) : this.disableFlip = O.DEFAULT_DISABLE_FLIP;
        }
        return t.prototype.isMediaStreamConstraintsValid = function () {
          return this.videoConstraints ? E.isMediaStreamConstraintsValid(this.videoConstraints, this.logger) : (this.logger.logError("Empty videoConstraints", !0), !1);
        }, t.prototype.isShadedBoxEnabled = function () {
          return !g(this.qrbox);
        }, t.create = function (e, r) {
          return new t(e, r);
        }, t;
      }(),
      L = function () {
        function e(t, e) {
          if (this.element = null, this.canvasElement = null, this.scannerPausedUiElement = null, this.hasBorderShaders = null, this.borderShaders = null, this.qrMatch = null, this.videoElement = null, this.localMediaStream = null, this.qrRegion = null, this.context = null, this.lastScanImageFile = null, this.isScanning = !1, !document.getElementById(t)) throw "HTML Element with id=" + t + " not found";
          var r;
          this.elementId = t, this.verbose = !1, "boolean" == typeof e ? this.verbose = !0 === e : e && (this.verbose = !0 === e.verbose, r = e.experimentalFeatures), this.logger = new d(this.verbose), this.qrcode = new S(this.getSupportedFormats(e), this.verbose, this.logger, _.createExperimentalFeaturesConfig(r)), this.foreverScanTimeout, this.localMediaStream, this.shouldScan = !0, this.stateManagerProxy = D.create();
        }
        return e.prototype.start = function (t, e, r, n) {
          if (!t) throw "cameraIdOrConfig is required";
          if (!r || "function" != typeof r) throw "qrCodeSuccessCallback is required and should be a function.";
          n || (n = this.verbose ? this.logger.log : function () {});
          var i = b.create(e, this.logger);
          this.clearElement();
          var o = !1;
          i.videoConstraints && (i.isMediaStreamConstraintsValid() ? o = !0 : this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", !0));
          var s = o,
            a = (i.isShadedBoxEnabled(), document.getElementById(this.elementId)),
            l = a.clientWidth ? a.clientWidth : O.DEFAULT_WIDTH;
          a.style.position = "relative", this.shouldScan = !0, this.element = a;
          var c = this,
            h = this.stateManagerProxy.startTransition(f.SCANNING);
          return new Promise(function (e, o) {
            var a = s ? i.videoConstraints : c.createVideoConstraints(t);
            if (!a) return h.cancel(), void o("videoConstraints should be defined");
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
              audio: !1,
              video: a
            }).then(function (t) {
              c.onMediaStreamReceived(t, i, s, l, r, n).then(function (t) {
                h.execute(), c.isScanning = !0, e(null);
              })["catch"](function (t) {
                h.cancel(), o(t);
              });
            })["catch"](function (t) {
              h.cancel(), o(w.errorGettingUserMedia(t));
            }) : (h.cancel(), o(w.cameraStreamingNotSupported()));
          });
        }, e.prototype.pause = function (t) {
          if (!this.stateManagerProxy.isStrictlyScanning()) throw "Cannot pause, scanner is not scanning.";
          this.stateManagerProxy.directTransition(f.PAUSED), this.showPausedState(), (g(t) || !0 !== t) && (t = !1), t && this.videoElement && this.videoElement.pause();
        }, e.prototype.resume = function () {
          if (!this.stateManagerProxy.isPaused()) throw "Cannot result, scanner is not paused.";
          if (!this.videoElement) throw "VideoElement doesn't exist while trying resume()";
          var t = this,
            e = function e() {
              t.stateManagerProxy.directTransition(f.SCANNING), t.hidePausedState();
            };
          if (this.videoElement.paused) {
            var r = function r() {
              var n;
              setTimeout(e, 200), null === (n = t.videoElement) || void 0 === n || n.removeEventListener("playing", r);
            };
            this.videoElement.addEventListener("playing", r), this.videoElement.play();
          } else e();
        }, e.prototype.getState = function () {
          return this.stateManagerProxy.getState();
        }, e.prototype.stop = function () {
          var t = this;
          if (!this.stateManagerProxy.isScanning()) throw "Cannot stop, scanner is not running or paused.";
          var e = this.stateManagerProxy.startTransition(f.NOT_STARTED);
          return this.shouldScan = !1, this.foreverScanTimeout && clearTimeout(this.foreverScanTimeout), new Promise(function (r, n) {
            var i = function i() {
              t.localMediaStream = null, t.element && (t.element.removeChild(t.videoElement), t.element.removeChild(t.canvasElement)), function () {
                if (t.element) {
                  var e = document.getElementById(O.SHADED_REGION_ELEMENT_ID);
                  e && t.element.removeChild(e);
                }
              }(), t.qrRegion && (t.qrRegion = null), t.context && (t.context = null), e.execute(), t.hidePausedState(), t.isScanning = !1, r();
            };
            t.localMediaStream || i();
            var o = t.localMediaStream.getVideoTracks().length,
              s = 0;
            t.localMediaStream.getVideoTracks().forEach(function (e) {
              t.localMediaStream.removeTrack(e), e.stop(), ++s >= o && i();
            });
          });
        }, e.prototype.scanFile = function (t, e) {
          return this.scanFileV2(t, e).then(function (t) {
            return t.decodedText;
          });
        }, e.prototype.scanFileV2 = function (t, e) {
          var r = this;
          if (!(t && t instanceof File)) throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
          if (g(e) && (e = !0), !this.stateManagerProxy.canScanFile()) throw "Cannot start file scan - ongoing camera scan";
          return new Promise(function (n, i) {
            r.possiblyCloseLastScanImageFile(), r.clearElement(), r.lastScanImageFile = URL.createObjectURL(t);
            var o = new Image();
            o.onload = function () {
              var t = o.width,
                s = o.height,
                a = document.getElementById(r.elementId),
                l = a.clientWidth ? a.clientWidth : O.DEFAULT_WIDTH,
                c = Math.max(a.clientHeight ? a.clientHeight : s, O.FILE_SCAN_MIN_HEIGHT),
                u = r.computeCanvasDrawConfig(t, s, l, c);
              if (e) {
                var d = r.createCanvasElement(l, c, "qr-canvas-visible");
                d.style.display = "inline-block", a.appendChild(d);
                var g = d.getContext("2d");
                if (!g) throw "Unable to get 2d context from canvas";
                g.canvas.width = l, g.canvas.height = c, g.drawImage(o, 0, 0, t, s, u.x, u.y, u.width, u.height);
              }
              var f = r.createCanvasElement(u.width, u.height);
              a.appendChild(f);
              var w = f.getContext("2d");
              if (!w) throw "Unable to get 2d context from canvas";
              w.canvas.width = u.width, w.canvas.height = u.height, w.drawImage(o, 0, 0, t, s, 0, 0, u.width, u.height);
              try {
                r.qrcode.decodeAsync(f).then(function (t) {
                  n(h.createFromQrcodeResult(t));
                })["catch"](i);
              } catch (t) {
                i("QR code parse error, error = " + t);
              }
            }, o.onerror = i, o.onabort = i, o.onstalled = i, o.onsuspend = i, o.src = URL.createObjectURL(t);
          });
        }, e.prototype.clear = function () {
          this.clearElement();
        }, e.getCameras = function () {
          if (navigator.mediaDevices) return e.getCamerasFromMediaDevices();
          var t = MediaStreamTrack;
          if (MediaStreamTrack && t.getSources) return e.getCamerasFromMediaStreamTrack();
          var r = w.unableToQuerySupportedDevices();
          return function () {
            if ("https:" === location.protocol) return !0;
            var t = location.host.split(":")[0];
            return "127.0.0.1" === t || "localhost" === t;
          }() || (r = w.insecureContextCameraQueryError()), Promise.reject(r);
        }, e.prototype.getRunningTrackCapabilities = function () {
          if (null == this.localMediaStream) throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
          if (0 === this.localMediaStream.getVideoTracks().length) throw "No video tracks found";
          return this.localMediaStream.getVideoTracks()[0].getCapabilities();
        }, e.prototype.applyVideoConstraints = function (t) {
          var e = this;
          if (!t) throw "videoConstaints is required argument.";
          if (!E.isMediaStreamConstraintsValid(t, this.logger)) throw "invalid videoConstaints passed, check logs for more details";
          if (null === this.localMediaStream) throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
          if (0 === this.localMediaStream.getVideoTracks().length) throw "No video tracks found";
          return new Promise(function (r, n) {
            "aspectRatio" in t ? n("Chaning 'aspectRatio' in run-time is not yet supported.") : e.localMediaStream.getVideoTracks()[0].applyConstraints(t).then(function (t) {
              r(t);
            })["catch"](function (t) {
              n(t);
            });
          });
        }, e.getCamerasFromMediaDevices = function () {
          return new Promise(function (t, e) {
            navigator.mediaDevices.getUserMedia({
              audio: !1,
              video: !0
            }).then(function (r) {
              navigator.mediaDevices.enumerateDevices().then(function (e) {
                for (var n = [], i = 0, o = e; i < o.length; i++) {
                  var s = o[i];
                  "videoinput" === s.kind && n.push({
                    id: s.deviceId,
                    label: s.label
                  });
                }
                !function (t) {
                  for (var e = 0, r = t.getVideoTracks(); e < r.length; e++) {
                    var n = r[e];
                    n.enabled = !1, n.stop(), t.removeTrack(n);
                  }
                }(r), t(n);
              })["catch"](function (t) {
                e(t.name + " : " + t.message);
              });
            })["catch"](function (t) {
              e(t.name + " : " + t.message);
            });
          });
        }, e.getCamerasFromMediaStreamTrack = function () {
          return new Promise(function (t, e) {
            MediaStreamTrack.getSources(function (e) {
              for (var r = [], n = 0, i = e; n < i.length; n++) {
                var o = i[n];
                "video" === o.kind && r.push({
                  id: o.id,
                  label: o.label
                });
              }
              t(r);
            });
          });
        }, e.prototype.getSupportedFormats = function (e) {
          var r = [t.QR_CODE, t.AZTEC, t.CODABAR, t.CODE_39, t.CODE_93, t.CODE_128, t.DATA_MATRIX, t.MAXICODE, t.ITF, t.EAN_13, t.EAN_8, t.PDF_417, t.RSS_14, t.RSS_EXPANDED, t.UPC_A, t.UPC_E, t.UPC_EAN_EXTENSION];
          if (!e || "boolean" == typeof e) return r;
          if (!e.formatsToSupport) return r;
          if (!Array.isArray(e.formatsToSupport)) throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
          if (0 === e.formatsToSupport.length) throw "Atleast 1 formatsToSupport is needed.";
          for (var n = [], i = 0, o = e.formatsToSupport; i < o.length; i++) {
            var a = o[i];
            s(a) ? n.push(a) : this.logger.warn("Invalid format: " + a + " passed in config, ignoring.");
          }
          if (0 === n.length) throw "None of formatsToSupport match supported values.";
          return n;
        }, e.prototype.validateQrboxSize = function (t, e, r) {
          var n = r.qrbox;
          this.validateQrboxConfig(n);
          var i,
            o = this.toQrdimensions(t, e, n),
            s = function s(t) {
              if (t < O.MIN_QR_BOX_SIZE) throw "minimum size of 'config.qrbox' dimension value is " + O.MIN_QR_BOX_SIZE + "px.";
            };
          s(o.width), s(o.height), o.width = ((i = o.width) > t && (this.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."), i = t), i);
        }, e.prototype.validateQrboxConfig = function (t) {
          if ("number" != typeof t && "function" != typeof t && (void 0 === t.width || void 0 === t.height)) throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set.";
        }, e.prototype.toQrdimensions = function (t, e, r) {
          if ("number" == typeof r) return {
            width: r,
            height: r
          };
          if ("function" == typeof r) try {
            return r(t, e);
          } catch (t) {
            throw new Error("qrbox config was passed as a function but it failed with unknown error" + t);
          }
          return r;
        }, e.prototype.setupUi = function (t, e, r) {
          r.isShadedBoxEnabled() && this.validateQrboxSize(t, e, r);
          var n = g(r.qrbox) ? {
            width: t,
            height: e
          } : r.qrbox;
          this.validateQrboxConfig(n);
          var i = this.toQrdimensions(t, e, n);
          i.height > e && this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
          var o = r.isShadedBoxEnabled() && i.height <= e,
            s = {
              x: 0,
              y: 0,
              width: t,
              height: e
            },
            a = o ? this.getShadedRegionBounds(t, e, i) : s,
            l = this.createCanvasElement(a.width, a.height),
            c = l.getContext("2d");
          c.canvas.width = a.width, c.canvas.height = a.height, this.element.append(l), o && this.possiblyInsertShadingElement(this.element, t, e, i), this.createScannerPausedUiElement(this.element), this.qrRegion = a, this.context = c, this.canvasElement = l;
        }, e.prototype.createScannerPausedUiElement = function (t) {
          var e = document.createElement("div");
          e.innerText = "Scanner paused", e.style.display = "none", e.style.position = "absolute", e.style.top = "0px", e.style.zIndex = "1", e.style.background = "yellow", e.style.textAlign = "center", e.style.width = "100%", t.appendChild(e), this.scannerPausedUiElement = e;
        }, e.prototype.scanContext = function (t, e) {
          var r = this;
          return this.stateManagerProxy.isPaused() ? Promise.resolve(!1) : this.qrcode.decodeAsync(this.canvasElement).then(function (e) {
            return t(e.text, h.createFromQrcodeResult(e)), r.possiblyUpdateShaders(!0), !0;
          })["catch"](function (t) {
            r.possiblyUpdateShaders(!1);
            var n = w.codeParseError(t);
            return e(n, u.createFrom(n)), !1;
          });
        }, e.prototype.foreverScan = function (t, e, r) {
          var n = this;
          if (this.shouldScan && this.localMediaStream) {
            var i = this.videoElement,
              o = i.videoWidth / i.clientWidth,
              s = i.videoHeight / i.clientHeight;
            if (!this.qrRegion) throw "qrRegion undefined when localMediaStream is ready.";
            var a = this.qrRegion.width * o,
              l = this.qrRegion.height * s,
              c = this.qrRegion.x * o,
              h = this.qrRegion.y * s;
            this.context.drawImage(i, c, h, a, l, 0, 0, this.qrRegion.width, this.qrRegion.height);
            var u = function u() {
              n.foreverScanTimeout = setTimeout(function () {
                n.foreverScan(t, e, r);
              }, n.getTimeoutFps(t.fps));
            };
            this.scanContext(e, r).then(function (i) {
              i || !0 === t.disableFlip ? u() : (n.context.translate(n.context.canvas.width, 0), n.context.scale(-1, 1), n.scanContext(e, r)["finally"](function () {
                u();
              }));
            })["catch"](function (t) {
              n.logger.logError("Error happend while scanning context", t), u();
            });
          }
        }, e.prototype.onMediaStreamReceived = function (t, e, r, n, i, o) {
          var s = this,
            a = this;
          return new Promise(function (l, c) {
            var h = function h() {
              var r = s.createVideoElement(n);
              a.element.append(r), r.onabort = c, r.onerror = c;
              var h = function h() {
                var t = r.clientWidth,
                  n = r.clientHeight;
                a.setupUi(t, n, e), a.foreverScan(e, i, o), r.removeEventListener("playing", h), l(null);
              };
              r.addEventListener("playing", h), r.srcObject = t, r.play(), a.videoElement = r;
            };
            if (a.localMediaStream = t, r || !e.aspectRatio) h();else {
              var u = {
                aspectRatio: e.aspectRatio
              };
              t.getVideoTracks()[0].applyConstraints(u).then(function (t) {
                return h();
              })["catch"](function (t) {
                a.logger.logErrors(["[Html5Qrcode] Constriants could not be satisfied, ignoring constraints", t]), h();
              });
            }
          });
        }, e.prototype.createVideoConstraints = function (t) {
          if ("string" == typeof t) return {
            deviceId: {
              exact: t
            }
          };
          if ("object" == _typeof(t)) {
            var e = "facingMode",
              r = {
                user: !0,
                environment: !0
              },
              n = "exact",
              i = function i(t) {
                if (t in r) return !0;
                throw "config has invalid 'facingMode' value = '" + t + "'";
              },
              o = Object.keys(t);
            if (1 !== o.length) throw "'cameraIdOrConfig' object should have exactly 1 key, if passed as an object, found " + o.length + " keys";
            var s = Object.keys(t)[0];
            if (s !== e && "deviceId" !== s) throw "Only 'facingMode' and 'deviceId'  are supported for 'cameraIdOrConfig'";
            if (s !== e) {
              var a = t.deviceId;
              if ("string" == typeof a) return {
                deviceId: a
              };
              if ("object" == _typeof(a)) {
                if (n in a) return {
                  deviceId: {
                    exact: a.exact
                  }
                };
                throw "'deviceId' should be string or object with exact as key.";
              }
              throw "Invalid type of 'deviceId' = " + _typeof(a);
            }
            var l = t.facingMode;
            if ("string" == typeof l) {
              if (i(l)) return {
                facingMode: l
              };
            } else {
              if ("object" != _typeof(l)) throw "Invalid type of 'facingMode' = " + _typeof(l);
              if (!(n in l)) throw "'facingMode' should be string or object with exact as key.";
              if (i(l.exact)) return {
                facingMode: {
                  exact: l.exact
                }
              };
            }
          }
          throw "Invalid type of 'cameraIdOrConfig' = " + _typeof(t);
        }, e.prototype.computeCanvasDrawConfig = function (t, e, r, n) {
          if (t <= r && e <= n) return {
            x: (r - t) / 2,
            y: (n - e) / 2,
            width: t,
            height: e
          };
          var i = t,
            o = e;
          return t > r && (e *= r / t, t = r), e > n && (t *= n / e, e = n), this.logger.log("Image downsampled from " + i + "X" + o + " to " + t + "X" + e + "."), this.computeCanvasDrawConfig(t, e, r, n);
        }, e.prototype.clearElement = function () {
          if (this.stateManagerProxy.isScanning()) throw "Cannot clear while scan is ongoing, close it first.";
          var t = document.getElementById(this.elementId);
          t && (t.innerHTML = "");
        }, e.prototype.createVideoElement = function (t) {
          var e = document.createElement("video");
          return e.style.width = t + "px", e.muted = !0, e.setAttribute("muted", "true"), e.playsInline = !0, e;
        }, e.prototype.possiblyUpdateShaders = function (t) {
          this.qrMatch !== t && (this.hasBorderShaders && this.borderShaders && this.borderShaders.length && this.borderShaders.forEach(function (e) {
            e.style.backgroundColor = t ? O.BORDER_SHADER_MATCH_COLOR : O.BORDER_SHADER_DEFAULT_COLOR;
          }), this.qrMatch = t);
        }, e.prototype.possiblyCloseLastScanImageFile = function () {
          this.lastScanImageFile && (URL.revokeObjectURL(this.lastScanImageFile), this.lastScanImageFile = null);
        }, e.prototype.createCanvasElement = function (t, e, r) {
          var n = t,
            i = e,
            o = document.createElement("canvas");
          return o.style.width = n + "px", o.style.height = i + "px", o.style.display = "none", o.id = g(r) ? "qr-canvas" : r, o;
        }, e.prototype.getShadedRegionBounds = function (t, e, r) {
          if (r.width > t || r.height > e) throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
          return {
            x: (t - r.width) / 2,
            y: (e - r.height) / 2,
            width: r.width,
            height: r.height
          };
        }, e.prototype.possiblyInsertShadingElement = function (t, e, r, n) {
          if (!(e - n.width < 1 || r - n.height < 1)) {
            var i = document.createElement("div");
            i.style.position = "absolute";
            var o = (e - n.width) / 2,
              s = (r - n.height) / 2;
            if (i.style.borderLeft = o + "px solid #0000007a", i.style.borderRight = o + "px solid #0000007a", i.style.borderTop = s + "px solid #0000007a", i.style.borderBottom = s + "px solid #0000007a", i.style.boxSizing = "border-box", i.style.top = "0px", i.style.bottom = "0px", i.style.left = "0px", i.style.right = "0px", i.id = "" + O.SHADED_REGION_ELEMENT_ID, e - n.width < 11 || r - n.height < 11) this.hasBorderShaders = !1;else {
              var a = 40;
              this.insertShaderBorders(i, a, 5, -5, 0, !0), this.insertShaderBorders(i, a, 5, -5, 0, !1), this.insertShaderBorders(i, a, 5, n.height + 5, 0, !0), this.insertShaderBorders(i, a, 5, n.height + 5, 0, !1), this.insertShaderBorders(i, 5, 45, -5, -5, !0), this.insertShaderBorders(i, 5, 45, n.height + 5 - a, -5, !0), this.insertShaderBorders(i, 5, 45, -5, -5, !1), this.insertShaderBorders(i, 5, 45, n.height + 5 - a, -5, !1), this.hasBorderShaders = !0;
            }
            t.append(i);
          }
        }, e.prototype.insertShaderBorders = function (t, e, r, n, i, o) {
          var s = document.createElement("div");
          s.style.position = "absolute", s.style.backgroundColor = O.BORDER_SHADER_DEFAULT_COLOR, s.style.width = e + "px", s.style.height = r + "px", s.style.top = n + "px", o ? s.style.left = i + "px" : s.style.right = i + "px", this.borderShaders || (this.borderShaders = []), this.borderShaders.push(s), t.appendChild(s);
        }, e.prototype.showPausedState = function () {
          if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
          this.scannerPausedUiElement.style.display = "block";
        }, e.prototype.hidePausedState = function () {
          if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
          this.scannerPausedUiElement.style.display = "none";
        }, e.prototype.getTimeoutFps = function (t) {
          return 1e3 / t;
        }, e;
      }(),
      B = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+",
      P = function () {
        function t() {}
        return t.createDefault = function () {
          return {
            hasPermission: !1,
            lastUsedCameraId: null
          };
        }, t;
      }(),
      v = function () {
        function t() {
          this.data = P.createDefault();
          var e = localStorage.getItem(t.LOCAL_STORAGE_KEY);
          e ? this.data = JSON.parse(e) : this.reset();
        }
        return t.prototype.hasCameraPermissions = function () {
          return this.data.hasPermission;
        }, t.prototype.getLastUsedCameraId = function () {
          return this.data.lastUsedCameraId;
        }, t.prototype.setHasPermission = function (t) {
          this.data.hasPermission = t, this.flush();
        }, t.prototype.setLastUsedCameraId = function (t) {
          this.data.lastUsedCameraId = t, this.flush();
        }, t.prototype.resetLastUsedCameraId = function () {
          this.data.lastUsedCameraId = null, this.flush();
        }, t.prototype.reset = function () {
          this.data = P.createDefault(), this.flush();
        }, t.prototype.flush = function () {
          localStorage.setItem(t.LOCAL_STORAGE_KEY, JSON.stringify(this.data));
        }, t.LOCAL_STORAGE_KEY = "HTML5_QRCODE_DATA", t;
      }(),
      F = function () {
        function t() {
          this.infoDiv = document.createElement("div");
        }
        return t.prototype.renderInto = function (t) {
          this.infoDiv.style.position = "absolute", this.infoDiv.style.top = "10px", this.infoDiv.style.right = "10px", this.infoDiv.style.zIndex = "2", this.infoDiv.style.display = "none", this.infoDiv.style.padding = "5pt", this.infoDiv.style.border = "1px solid silver", this.infoDiv.style.fontSize = "10pt", this.infoDiv.style.background = "rgb(248 248 248)", this.infoDiv.innerText = m.builtUsing();
          var e = document.createElement("a");
          e.innerText = "html5-qrcode", e.href = "https://github.com/mebjas/html5-qrcode", e.target = "new", this.infoDiv.appendChild(e);
          var r = document.createElement("br"),
            n = document.createElement("br");
          this.infoDiv.appendChild(r), this.infoDiv.appendChild(n);
          var i = document.createElement("a");
          i.innerText = m.reportIssues(), i.href = "https://github.com/mebjas/html5-qrcode/issues", i.target = "new", this.infoDiv.appendChild(i), t.appendChild(this.infoDiv);
        }, t.prototype.show = function () {
          this.infoDiv.style.display = "block";
        }, t.prototype.hide = function () {
          this.infoDiv.style.display = "none";
        }, t;
      }(),
      x = function () {
        function t(t, e) {
          this.isShowingInfoIcon = !0, this.onTapIn = t, this.onTapOut = e, this.infoIcon = document.createElement("img");
        }
        return t.prototype.renderInto = function (t) {
          var e = this;
          this.infoIcon.alt = "Info icon", this.infoIcon.src = B, this.infoIcon.style.position = "absolute", this.infoIcon.style.top = "4px", this.infoIcon.style.right = "4px", this.infoIcon.style.opacity = "0.6", this.infoIcon.style.cursor = "pointer", this.infoIcon.style.zIndex = "2", this.infoIcon.style.width = "16px", this.infoIcon.style.height = "16px", this.infoIcon.onmouseover = function (t) {
            return e.onHoverIn();
          }, this.infoIcon.onmouseout = function (t) {
            return e.onHoverOut();
          }, this.infoIcon.onclick = function (t) {
            return e.onClick();
          }, t.appendChild(this.infoIcon);
        }, t.prototype.onHoverIn = function () {
          this.isShowingInfoIcon && (this.infoIcon.style.opacity = "1");
        }, t.prototype.onHoverOut = function () {
          this.isShowingInfoIcon && (this.infoIcon.style.opacity = "0.6");
        }, t.prototype.onClick = function () {
          this.isShowingInfoIcon ? (this.isShowingInfoIcon = !1, this.onTapIn(), this.infoIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=", this.infoIcon.style.opacity = "1") : (this.isShowingInfoIcon = !0, this.onTapOut(), this.infoIcon.src = B, this.infoIcon.style.opacity = "0.6");
        }, t;
      }(),
      k = function () {
        function t() {
          var t = this;
          this.infoDiv = new F(), this.infoIcon = new x(function () {
            t.infoDiv.show();
          }, function () {
            t.infoDiv.hide();
          });
        }
        return t.prototype.renderInto = function (t) {
          this.infoDiv.renderInto(t), this.infoIcon.renderInto(t);
        }, t;
      }(),
      U = function () {
        function t() {}
        return t.hasCameraPermissions = function () {
          return new Promise(function (t, e) {
            navigator.mediaDevices.enumerateDevices().then(function (e) {
              e.forEach(function (e) {
                "videoinput" === e.kind && e.label && t(!0);
              }), t(!1);
            });
          });
        }, t;
      }(),
      H = function () {
        function t(t) {
          this.supportedScanTypes = this.validateAndReturnScanTypes(t);
        }
        return t.prototype.getDefaultScanType = function () {
          return this.supportedScanTypes[0];
        }, t.prototype.hasMoreThanOneScanType = function () {
          return this.supportedScanTypes.length > 1;
        }, t.prototype.isCameraScanRequired = function () {
          for (var e = 0, r = this.supportedScanTypes; e < r.length; e++) {
            var n = r[e];
            if (t.isCameraScanType(n)) return !0;
          }
          return !1;
        }, t.isCameraScanType = function (t) {
          return t === i.SCAN_TYPE_CAMERA;
        }, t.isFileScanType = function (t) {
          return t === i.SCAN_TYPE_FILE;
        }, t.prototype.validateAndReturnScanTypes = function (t) {
          if (!t || 0 === t.length) return l.DEFAULT_SUPPORTED_SCAN_TYPE;
          var e = l.DEFAULT_SUPPORTED_SCAN_TYPE.length;
          if (t.length > e) throw "Max " + e + " values expected for supportedScanTypes";
          for (var r = 0, n = t; r < n.length; r++) {
            var i = n[r];
            if (!l.DEFAULT_SUPPORTED_SCAN_TYPE.includes(i)) throw "Unsupported scan type " + i;
          }
          return t;
        }, t;
      }();
    !function (t) {
      t[t.STATUS_DEFAULT = 0] = "STATUS_DEFAULT", t[t.STATUS_SUCCESS = 1] = "STATUS_SUCCESS", t[t.STATUS_WARNING = 2] = "STATUS_WARNING", t[t.STATUS_REQUESTING_PERMISSION = 3] = "STATUS_REQUESTING_PERMISSION";
    }(y || (y = {}));
    var V = function () {
      function t(t, e, r) {
        if (this.lastMatchFound = null, this.cameraScanImage = null, this.fileScanImage = null, this.elementId = t, this.config = this.createConfig(e), this.verbose = !0 === r, !document.getElementById(t)) throw "HTML Element with id=" + t + " not found";
        this.scanTypeSelector = new H(this.config.supportedScanTypes), this.currentScanType = this.scanTypeSelector.getDefaultScanType(), this.sectionSwapAllowed = !0, this.logger = new d(this.verbose), this.persistedDataManager = new v(), !0 !== e.rememberLastUsedCamera && this.persistedDataManager.reset();
      }
      return t.prototype.render = function (t, e) {
        var r = this;
        this.lastMatchFound = null, this.qrCodeSuccessCallback = function (e, n) {
          if (t) t(e, n);else {
            if (r.lastMatchFound === e) return;
            r.lastMatchFound = e, r.setHeaderMessage(A.lastMatch(e), y.STATUS_SUCCESS);
          }
        }, this.qrCodeErrorCallback = function (t, r) {
          e && e(t, r);
        };
        var n,
          i,
          o = document.getElementById(this.elementId);
        if (!o) throw "HTML Element with id=" + this.elementId + " not found";
        o.innerHTML = "", this.createBasicLayout(o), this.html5Qrcode = new L(this.getScanRegionId(), (n = this.config, i = this.verbose, {
          formatsToSupport: n.formatsToSupport,
          experimentalFeatures: n.experimentalFeatures,
          verbose: i
        }));
      }, t.prototype.pause = function (t) {
        if (!this.html5Qrcode) throw "Code scanner not initialized.";
        (g(t) || !0 !== t) && (t = !1), this.html5Qrcode.pause(t);
      }, t.prototype.resume = function () {
        if (!this.html5Qrcode) throw "Code scanner not initialized.";
        this.html5Qrcode.resume();
      }, t.prototype.getState = function () {
        if (!this.html5Qrcode) throw "Code scanner not initialized.";
        return this.html5Qrcode.getState();
      }, t.prototype.clear = function () {
        var t = this,
          e = function e() {
            var e = document.getElementById(t.elementId);
            e && (e.innerHTML = "", t.resetBasicLayout(e));
          };
        return this.html5Qrcode ? new Promise(function (r, n) {
          t.html5Qrcode ? t.html5Qrcode.isScanning ? t.html5Qrcode.stop().then(function (n) {
            t.html5Qrcode ? (t.html5Qrcode.clear(), e(), r()) : r();
          })["catch"](function (e) {
            t.verbose && t.logger.logError("Unable to stop qrcode scanner", e), n(e);
          }) : (t.html5Qrcode.clear(), e()) : r();
        }) : Promise.resolve();
      }, t.prototype.getRunningTrackCapabilities = function () {
        if (!this.html5Qrcode) throw "Code scanner not initialized.";
        return this.html5Qrcode.getRunningTrackCapabilities();
      }, t.prototype.applyVideoConstraints = function (t) {
        if (!this.html5Qrcode) throw "Code scanner not initialized.";
        return this.html5Qrcode.applyVideoConstraints(t);
      }, t.prototype.createConfig = function (t) {
        return t ? (t.fps || (t.fps = l.SCAN_DEFAULT_FPS), t.rememberLastUsedCamera !== !l.DEFAULT_REMEMBER_LAST_CAMERA_USED && (t.rememberLastUsedCamera = l.DEFAULT_REMEMBER_LAST_CAMERA_USED), t) : {
          fps: l.SCAN_DEFAULT_FPS,
          rememberLastUsedCamera: l.DEFAULT_REMEMBER_LAST_CAMERA_USED,
          supportedScanTypes: l.DEFAULT_SUPPORTED_SCAN_TYPE
        };
      }, t.prototype.createBasicLayout = function (t) {
        t.style.position = "relative", t.style.padding = "0px", t.style.border = "1px solid silver", this.createHeader(t);
        var e = document.createElement("div"),
          r = this.getScanRegionId();
        e.id = r, e.style.width = "100%", e.style.minHeight = "100px", e.style.textAlign = "center", t.appendChild(e), H.isCameraScanType(this.currentScanType) ? this.insertCameraScanImageToScanRegion() : this.insertFileScanImageToScanRegion();
        var n = document.createElement("div"),
          i = this.getDashboardId();
        n.id = i, n.style.width = "100%", t.appendChild(n), this.setupInitialDashboard(n);
      }, t.prototype.resetBasicLayout = function (t) {
        t.style.border = "none";
      }, t.prototype.setupInitialDashboard = function (t) {
        this.createSection(t), this.createSectionControlPanel(), this.scanTypeSelector.hasMoreThanOneScanType() && this.createSectionSwap();
      }, t.prototype.createHeader = function (t) {
        var e = document.createElement("div");
        e.style.textAlign = "left", e.style.margin = "0px", t.appendChild(e), new k().renderInto(e);
        var r = document.createElement("div");
        r.id = this.getHeaderMessageContainerId(), r.style.display = "none", r.style.textAlign = "center", r.style.fontSize = "14px", r.style.padding = "2px 10px", r.style.margin = "4px", r.style.borderTop = "1px solid #f6f6f6", e.appendChild(r);
      }, t.prototype.createSection = function (t) {
        var e = document.createElement("div");
        e.id = this.getDashboardSectionId(), e.style.width = "100%", e.style.padding = "10px 0px 10px 0px", e.style.textAlign = "left", t.appendChild(e);
      }, t.prototype.createCameraListUi = function (t, e, r) {
        var n = this;
        n.setHeaderMessage(A.cameraPermissionRequesting());
        var i = function i() {
          r || n.createPermissionButton(t, e);
        };
        L.getCameras().then(function (r) {
          n.persistedDataManager.setHasPermission(!0), n.resetHeaderMessage(), r && r.length > 0 ? (t.removeChild(e), n.renderCameraSelection(r)) : (n.setHeaderMessage(A.noCameraFound(), y.STATUS_WARNING), i());
        })["catch"](function (t) {
          n.persistedDataManager.setHasPermission(!1), r ? r.disabled = !1 : i(), n.setHeaderMessage(t, y.STATUS_WARNING);
        });
      }, t.prototype.createPermissionButton = function (t, e) {
        var r = this,
          n = document.createElement("button");
        n.id = this.getCameraPermissionButtonId(), n.innerText = A.cameraPermissionTitle(), n.addEventListener("click", function () {
          n.disabled = !0, r.createCameraListUi(t, e, n);
        }), e.appendChild(n);
      }, t.prototype.createPermissionsUi = function (t, e) {
        var r = this;
        H.isCameraScanType(this.currentScanType) && this.persistedDataManager.hasCameraPermissions() ? U.hasCameraPermissions().then(function (n) {
          n ? r.createCameraListUi(t, e) : (r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e));
        })["catch"](function (n) {
          r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e);
        }) : this.createPermissionButton(t, e);
      }, t.prototype.createSectionControlPanel = function () {
        var t = document.getElementById(this.getDashboardSectionId()),
          e = document.createElement("div");
        t.appendChild(e);
        var r = document.createElement("div");
        r.id = this.getDashboardSectionCameraScanRegionId(), r.style.display = H.isCameraScanType(this.currentScanType) ? "block" : "none", e.appendChild(r);
        var n = document.createElement("div");
        n.style.textAlign = "center", r.appendChild(n), this.scanTypeSelector.isCameraScanRequired() && this.createPermissionsUi(r, n), this.renderFileScanUi(e);
      }, t.prototype.renderFileScanUi = function (t) {
        var e = this,
          r = document.createElement("div");
        r.id = this.getDashboardSectionFileScanRegionId(), r.style.textAlign = "center", r.style.display = H.isCameraScanType(this.currentScanType) ? "none" : "block", t.appendChild(r);
        var n = document.createElement("input");
        n.id = this.getFileScanInputId(), n.accept = "image/*", n.type = "file", n.style.width = "200px", n.disabled = H.isCameraScanType(this.currentScanType);
        var i = document.createElement("span");
        i.innerText = " Select Image", r.appendChild(n), r.appendChild(i), n.addEventListener("change", function (t) {
          if (!e.html5Qrcode) throw "html5Qrcode not defined";
          if (null != t && null != t.target && H.isFileScanType(e.currentScanType) && 0 !== t.target.files.length) {
            var r = t.target.files[0];
            e.html5Qrcode.scanFileV2(r, !0).then(function (t) {
              e.resetHeaderMessage(), e.qrCodeSuccessCallback(t.decodedText, t);
            })["catch"](function (t) {
              e.setHeaderMessage(t, y.STATUS_WARNING), e.qrCodeErrorCallback(t, u.createFrom(t));
            });
          }
        });
      }, t.prototype.renderCameraSelection = function (t) {
        var e = this,
          r = this,
          n = document.getElementById(this.getDashboardSectionCameraScanRegionId());
        n.style.textAlign = "center";
        var i = document.createElement("span");
        i.style.marginRight = "10px";
        var o = t.length,
          s = document.createElement("select");
        if (1 === o) s.style.display = "none";else {
          var a = A.selectCamera();
          i.innerText = a + " (" + t.length + ")  ";
        }
        s.id = this.getCameraSelectionId();
        for (var l = [], c = 0, h = t; c < h.length; c++) {
          var u = h[c],
            d = u.id,
            g = null == u.label ? d : u.label;
          (_ = document.createElement("option")).value = d, _.innerText = g, l.push(_), s.appendChild(_);
        }
        i.appendChild(s), n.appendChild(i);
        var f = document.createElement("span"),
          w = document.createElement("button");
        w.innerText = A.scanButtonStartScanningText(), f.appendChild(w);
        var m = document.createElement("button");
        m.innerText = A.scanButtonStopScanningText(), m.style.display = "none", m.disabled = !0, f.appendChild(m), n.appendChild(f);
        var E = function E(t) {
          t || (w.style.display = "none"), w.innerText = A.scanButtonStartScanningText(), w.style.opacity = "1", w.disabled = !1, t && (w.style.display = "inline-block");
        };
        if (w.addEventListener("click", function (t) {
          w.innerText = A.scanButtonScanningStarting(), s.disabled = !0, w.disabled = !0, w.style.opacity = "0.5", e.scanTypeSelector.hasMoreThanOneScanType() && r.showHideScanTypeSwapLink(!1), r.resetHeaderMessage();
          var n,
            i = s.value;
          r.persistedDataManager.setLastUsedCameraId(i), r.html5Qrcode.start(i, (n = r.config, {
            fps: n.fps,
            qrbox: n.qrbox,
            aspectRatio: n.aspectRatio,
            disableFlip: n.disableFlip,
            videoConstraints: n.videoConstraints
          }), r.qrCodeSuccessCallback, r.qrCodeErrorCallback).then(function (t) {
            m.disabled = !1, m.style.display = "inline-block", E(!1);
          })["catch"](function (t) {
            r.showHideScanTypeSwapLink(!0), s.disabled = !1, E(!0), r.setHeaderMessage(t, y.STATUS_WARNING);
          });
        }), 1 === o && w.click(), m.addEventListener("click", function (t) {
          if (!r.html5Qrcode) throw "html5Qrcode not defined";
          m.disabled = !0, r.html5Qrcode.stop().then(function (t) {
            e.scanTypeSelector.hasMoreThanOneScanType() && r.showHideScanTypeSwapLink(!0), s.disabled = !1, w.disabled = !1, m.style.display = "none", w.style.display = "inline-block", r.insertCameraScanImageToScanRegion();
          })["catch"](function (t) {
            m.disabled = !1, r.setHeaderMessage(t, y.STATUS_WARNING);
          });
        }), r.persistedDataManager.getLastUsedCameraId()) {
          for (var C = r.persistedDataManager.getLastUsedCameraId(), I = !1, p = 0, S = l; p < S.length; p++) {
            var _;
            if ((_ = S[p]).value === C) {
              I = !0;
              break;
            }
          }
          I ? (s.value = C, w.click()) : r.persistedDataManager.resetLastUsedCameraId();
        }
      }, t.prototype.createSectionSwap = function () {
        var t = this,
          e = A.textIfCameraScanSelected(),
          r = A.textIfFileScanSelected(),
          n = document.getElementById(this.getDashboardSectionId()),
          o = document.createElement("div");
        o.style.textAlign = "center";
        var s = document.createElement("a");
        s.style.textDecoration = "underline", s.id = this.getDashboardSectionSwapLinkId(), s.innerText = H.isCameraScanType(this.currentScanType) ? e : r, s.addEventListener("click", function () {
          t.sectionSwapAllowed ? (t.resetHeaderMessage(), t.getFileScanInput().value = "", t.sectionSwapAllowed = !1, H.isCameraScanType(t.currentScanType) ? (t.clearScanRegion(), t.getFileScanInput().disabled = !1, t.getCameraScanRegion().style.display = "none", t.getFileScanRegion().style.display = "block", s.innerText = r, t.currentScanType = i.SCAN_TYPE_FILE, t.insertFileScanImageToScanRegion()) : (t.clearScanRegion(), t.getFileScanInput().disabled = !0, t.getCameraScanRegion().style.display = "block", t.getFileScanRegion().style.display = "none", s.innerText = e, t.currentScanType = i.SCAN_TYPE_CAMERA, t.insertCameraScanImageToScanRegion(), t.startCameraScanIfPermissionExistsOnSwap()), t.sectionSwapAllowed = !0) : t.verbose && t.logger.logError("Section swap called when not allowed");
        }), o.appendChild(s), n.appendChild(o);
      }, t.prototype.startCameraScanIfPermissionExistsOnSwap = function () {
        var t = this,
          e = this;
        this.persistedDataManager.hasCameraPermissions() && U.hasCameraPermissions().then(function (r) {
          if (r) {
            var n = document.getElementById(e.getCameraPermissionButtonId());
            if (!n) throw t.logger.logError("Permission button not found, fail;"), "Permission button not found";
            n.click();
          } else e.persistedDataManager.setHasPermission(!1);
        })["catch"](function (t) {
          e.persistedDataManager.setHasPermission(!1);
        });
      }, t.prototype.resetHeaderMessage = function () {
        document.getElementById(this.getHeaderMessageContainerId()).style.display = "none";
      }, t.prototype.setHeaderMessage = function (t, e) {
        e || (e = y.STATUS_DEFAULT);
        var r = this.getHeaderMessageDiv();
        switch (r.innerText = t, r.style.display = "block", e) {
          case y.STATUS_SUCCESS:
            r.style.background = "#6aaf5042", r.style.color = "#477735";
            break;
          case y.STATUS_WARNING:
            r.style.background = "#cb243124", r.style.color = "#cb2431";
            break;
          case y.STATUS_DEFAULT:
          default:
            r.style.background = "#00000000", r.style.color = "rgb(17, 17, 17)";
        }
      }, t.prototype.showHideScanTypeSwapLink = function (t) {
        !0 !== t && (t = !1), this.sectionSwapAllowed = t, this.getDashboardSectionSwapLink().style.display = t ? "inline-block" : "none";
      }, t.prototype.insertCameraScanImageToScanRegion = function () {
        var t = this,
          e = document.getElementById(this.getScanRegionId());
        if (this.cameraScanImage) return e.innerHTML = "<br>", void e.appendChild(this.cameraScanImage);
        this.cameraScanImage = new Image(), this.cameraScanImage.onload = function (r) {
          e.innerHTML = "<br>", e.appendChild(t.cameraScanImage);
        }, this.cameraScanImage.width = 64, this.cameraScanImage.style.opacity = "0.8", this.cameraScanImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg==";
      }, t.prototype.insertFileScanImageToScanRegion = function () {
        var t = this,
          e = document.getElementById(this.getScanRegionId());
        if (this.fileScanImage) return e.innerHTML = "<br>", void e.appendChild(this.fileScanImage);
        this.fileScanImage = new Image(), this.fileScanImage.onload = function (r) {
          e.innerHTML = "<br>", e.appendChild(t.fileScanImage);
        }, this.fileScanImage.width = 64, this.fileScanImage.style.opacity = "0.8", this.fileScanImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4=";
      }, t.prototype.clearScanRegion = function () {
        document.getElementById(this.getScanRegionId()).innerHTML = "";
      }, t.prototype.getDashboardSectionId = function () {
        return this.elementId + "__dashboard_section";
      }, t.prototype.getDashboardSectionCameraScanRegionId = function () {
        return this.elementId + "__dashboard_section_csr";
      }, t.prototype.getDashboardSectionFileScanRegionId = function () {
        return this.elementId + "__dashboard_section_fsr";
      }, t.prototype.getDashboardSectionSwapLinkId = function () {
        return this.elementId + "__dashboard_section_swaplink";
      }, t.prototype.getScanRegionId = function () {
        return this.elementId + "__scan_region";
      }, t.prototype.getDashboardId = function () {
        return this.elementId + "__dashboard";
      }, t.prototype.getFileScanInputId = function () {
        return this.elementId + "__filescan_input";
      }, t.prototype.getStatusSpanId = function () {
        return this.elementId + "__status_span";
      }, t.prototype.getHeaderMessageContainerId = function () {
        return this.elementId + "__header_message";
      }, t.prototype.getCameraSelectionId = function () {
        return this.elementId + "__camera_selection";
      }, t.prototype.getCameraPermissionButtonId = function () {
        return this.elementId + "__camera_permission_button";
      }, t.prototype.getCameraScanRegion = function () {
        return document.getElementById(this.getDashboardSectionCameraScanRegionId());
      }, t.prototype.getFileScanRegion = function () {
        return document.getElementById(this.getDashboardSectionFileScanRegionId());
      }, t.prototype.getFileScanInput = function () {
        return document.getElementById(this.getFileScanInputId());
      }, t.prototype.getDashboardSectionSwapLink = function () {
        return document.getElementById(this.getDashboardSectionSwapLinkId());
      }, t.prototype.getHeaderMessageDiv = function () {
        return document.getElementById(this.getHeaderMessageContainerId());
      }, t;
    }();
  })(), __Html5QrcodeLibrary__ = n;
})(); /** Append the libary components to globals for backwards compatibility. */
if (window) {
  if (!Html5QrcodeScanner) {
    var Html5QrcodeScanner = window.__Html5QrcodeLibrary__.Html5QrcodeScanner;
  }
  if (!Html5Qrcode) {
    var Html5Qrcode = window.__Html5QrcodeLibrary__.Html5Qrcode;
  }
  if (!Html5QrcodeSupportedFormats) {
    var Html5QrcodeSupportedFormats = window.__Html5QrcodeLibrary__.Html5QrcodeSupportedFormats;
  }
  if (!Html5QrcodeScannerState) {
    var Html5QrcodeScannerState = window.__Html5QrcodeLibrary__.Html5QrcodeScannerState;
  }
  if (!Html5QrcodeScanType) {
    var Html5QrcodeScanType = window.__Html5QrcodeLibrary__.Html5QrcodeScanType;
  }
}
/******/ })()
;