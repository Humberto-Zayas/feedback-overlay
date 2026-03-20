import { jsxs as ft, jsx as it, Fragment as St } from "react/jsx-runtime";
import { useRef as vt, useState as Ct, useEffect as At } from "react";
const It = "#1C1C22", jt = "rgba(238,234,227,0.12)", Rt = "#F7F4EF", Bt = "rgba(238,234,227,0.5)";
function bt({ name: q, active: f, onClick: at, title: ot, children: nt }) {
  return /* @__PURE__ */ it(
    "button",
    {
      title: ot,
      onClick: () => at(q),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
        background: f ? jt : "transparent",
        border: "none",
        cursor: "pointer",
        borderRadius: 2,
        color: f ? Rt : Bt,
        transition: "background 0.15s, color 0.15s"
      },
      children: nt
    }
  );
}
function mt({ children: q, ...f }) {
  return /* @__PURE__ */ it(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: 1.8,
      ...f,
      children: q
    }
  );
}
function Ot() {
  return /* @__PURE__ */ it(
    "div",
    {
      style: {
        width: 1,
        height: 22,
        background: "rgba(238,234,227,0.1)",
        margin: "0 4px"
      }
    }
  );
}
function Xt({ activeTool: q, onToolChange: f, onUndo: at, onClear: ot }) {
  return /* @__PURE__ */ ft(
    "div",
    {
      style: {
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1e3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        background: It,
        padding: "6px 8px",
        borderRadius: 2,
        boxShadow: "0 4px 24px rgba(0,0,0,0.22)"
      },
      children: [
        [
          {
            name: "select",
            title: "Select",
            icon: /* @__PURE__ */ it(mt, { children: /* @__PURE__ */ it("path", { d: "M5 3l14 9-7 1-4 7z" }) })
          },
          {
            name: "draw",
            title: "Freehand",
            icon: /* @__PURE__ */ ft(mt, { children: [
              /* @__PURE__ */ it("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" }),
              /* @__PURE__ */ it("path", { d: "M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
            ] })
          },
          {
            name: "arrow",
            title: "Arrow",
            icon: /* @__PURE__ */ ft(mt, { children: [
              /* @__PURE__ */ it("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
              /* @__PURE__ */ it("polyline", { points: "9 5 19 5 19 15" })
            ] })
          },
          {
            name: "box",
            title: "Box",
            icon: /* @__PURE__ */ it(mt, { children: /* @__PURE__ */ it("rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }) })
          },
          {
            name: "circle",
            title: "Circle",
            icon: /* @__PURE__ */ it(mt, { children: /* @__PURE__ */ it("ellipse", { cx: "12", cy: "12", rx: "9", ry: "9" }) })
          },
          {
            name: "text",
            title: "Text",
            icon: /* @__PURE__ */ it(mt, { children: /* @__PURE__ */ it("path", { d: "M4 6h16M12 6v12M8 18h8", strokeLinecap: "round" }) })
          }
        ].map((ut) => /* @__PURE__ */ it(
          bt,
          {
            name: ut.name,
            title: ut.title,
            active: q === ut.name,
            onClick: f,
            children: ut.icon
          },
          ut.name
        )),
        /* @__PURE__ */ it(Ot, {}),
        /* @__PURE__ */ it(bt, { name: "undo", title: "Undo", active: !1, onClick: at, children: /* @__PURE__ */ ft(mt, { children: [
          /* @__PURE__ */ it("polyline", { points: "9 14 4 9 9 4" }),
          /* @__PURE__ */ it("path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" })
        ] }) }),
        /* @__PURE__ */ it(bt, { name: "clear", title: "Clear all", active: !1, onClick: ot, children: /* @__PURE__ */ ft(mt, { children: [
          /* @__PURE__ */ it("polyline", { points: "3 6 5 6 21 6" }),
          /* @__PURE__ */ it("path", { d: "M19 6l-1 14H6L5 6" }),
          /* @__PURE__ */ it("path", { d: "M10 11v6M14 11v6" })
        ] }) }),
        /* @__PURE__ */ it(Ot, {}),
        /* @__PURE__ */ it(
          "span",
          {
            style: {
              fontFamily: "monospace",
              fontSize: 8,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(238,234,227,0.22)",
              padding: "0 6px",
              whiteSpace: "nowrap"
            },
            children: "Esc to exit"
          }
        )
      ]
    }
  );
}
function Yt(q) {
  if (Object.prototype.hasOwnProperty.call(q, "__esModule")) return q;
  var f = q.default;
  if (typeof f == "function") {
    var at = function ot() {
      return this instanceof ot ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    at.prototype = f.prototype;
  } else at = {};
  return Object.defineProperty(at, "__esModule", { value: !0 }), Object.keys(q).forEach(function(ot) {
    var nt = Object.getOwnPropertyDescriptor(q, ot);
    Object.defineProperty(at, ot, nt.get ? nt : {
      enumerable: !0,
      get: function() {
        return q[ot];
      }
    });
  }), at;
}
var xt = {};
const Wt = {}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" })), wt = /* @__PURE__ */ Yt(Ht);
var Pt;
function zt() {
  return Pt || (Pt = 1, (function(q) {
    /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
    var f = f || { version: "5.5.2" };
    if (q.fabric = f, typeof document < "u" && typeof window < "u")
      document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? f.document = document : f.document = document.implementation.createHTMLDocument(""), f.window = window;
    else {
      var at = wt, ot = new at.JSDOM(
        decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),
        {
          features: {
            FetchExternalResources: ["img"]
          },
          resources: "usable"
        }
      ).window;
      f.document = ot.document, f.jsdomImplForWrapper = wt.implForWrapper, f.nodeCanvas = wt.Canvas, f.window = ot, DOMParser = f.window.DOMParser;
    }
    f.isTouchSupported = "ontouchstart" in f.window || "ontouchstart" in f.document || f.window && f.window.navigator && f.window.navigator.maxTouchPoints > 0, f.isLikelyNode = typeof Buffer < "u" && typeof window > "u", f.SHARED_ATTRIBUTES = [
      "display",
      "transform",
      "fill",
      "fill-opacity",
      "fill-rule",
      "opacity",
      "stroke",
      "stroke-dasharray",
      "stroke-linecap",
      "stroke-dashoffset",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "id",
      "paint-order",
      "vector-effect",
      "instantiated_by_use",
      "clip-path"
    ], f.DPI = 96, f.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", f.commaWsp = "(?:\\s+,?\\s*|,\\s*)", f.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/ig, f.reNonWord = /[ \n\.,;!\?\-]/, f.fontPaths = {}, f.iMatrix = [1, 0, 0, 1, 0, 0], f.svgNS = "http://www.w3.org/2000/svg", f.perfLimitSizeTotal = 2097152, f.maxCacheSideLimit = 4096, f.minCacheSideLimit = 256, f.charWidthsCache = {}, f.textureSize = 2048, f.disableStyleCopyPaste = !1, f.enableGLFiltering = !0, f.devicePixelRatio = f.window.devicePixelRatio || f.window.webkitDevicePixelRatio || f.window.mozDevicePixelRatio || 1, f.browserShadowBlurConstant = 1, f.arcToSegmentsCache = {}, f.boundsOfCurveCache = {}, f.cachesBoundsOfCurve = !0, f.forceGLPutImageData = !1, f.initFilterBackend = function() {
      if (f.enableGLFiltering && f.isWebglSupported && f.isWebglSupported(f.textureSize))
        return console.log("max texture size: " + f.maxTextureSize), new f.WebglFilterBackend({ tileSize: f.textureSize });
      if (f.Canvas2dFilterBackend)
        return new f.Canvas2dFilterBackend();
    }, typeof document < "u" && typeof window < "u" && (window.fabric = f), (function() {
      function c(t, n) {
        if (this.__eventListeners[t]) {
          var a = this.__eventListeners[t];
          n ? a[a.indexOf(n)] = !1 : f.util.array.fill(a, !1);
        }
      }
      function s(t, n) {
        if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
          for (var a in t)
            this.on(a, t[a]);
        else
          this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(n);
        return this;
      }
      function h(t, n) {
        var a = (function() {
          n.apply(this, arguments), this.off(t, a);
        }).bind(this);
        this.on(t, a);
      }
      function o(t, n) {
        if (arguments.length === 1)
          for (var a in t)
            h.call(this, a, t[a]);
        else
          h.call(this, t, n);
        return this;
      }
      function i(t, n) {
        if (!this.__eventListeners)
          return this;
        if (arguments.length === 0)
          for (t in this.__eventListeners)
            c.call(this, t);
        else if (arguments.length === 1 && typeof arguments[0] == "object")
          for (var a in t)
            c.call(this, a, t[a]);
        else
          c.call(this, t, n);
        return this;
      }
      function e(t, n) {
        if (!this.__eventListeners)
          return this;
        var a = this.__eventListeners[t];
        if (!a)
          return this;
        for (var r = 0, l = a.length; r < l; r++)
          a[r] && a[r].call(this, n || {});
        return this.__eventListeners[t] = a.filter(function(u) {
          return u !== !1;
        }), this;
      }
      f.Observable = {
        fire: e,
        on: s,
        once: o,
        off: i
      };
    })(), f.Collection = {
      _objects: [],
      /**
       * Adds objects to collection, Canvas or Group, then renders canvas
       * (if `renderOnAddRemove` is not `false`).
       * in case of Group no changes to bounding box are made.
       * Objects should be instances of (or inherit from) fabric.Object
       * Use of this function is highly discouraged for groups.
       * you can add a bunch of objects with the add method but then you NEED
       * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
       * @param {...fabric.Object} object Zero or more fabric instances
       * @return {Self} thisArg
       * @chainable
       */
      add: function() {
        if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
          for (var c = 0, s = arguments.length; c < s; c++)
            this._onObjectAdded(arguments[c]);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      },
      /**
       * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
       * An object should be an instance of (or inherit from) fabric.Object
       * Use of this function is highly discouraged for groups.
       * you can add a bunch of objects with the insertAt method but then you NEED
       * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
       * @param {Object} object Object to insert
       * @param {Number} index Index to insert object at
       * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
       * @return {Self} thisArg
       * @chainable
       */
      insertAt: function(c, s, h) {
        var o = this._objects;
        return h ? o[s] = c : o.splice(s, 0, c), this._onObjectAdded && this._onObjectAdded(c), this.renderOnAddRemove && this.requestRenderAll(), this;
      },
      /**
       * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
       * @param {...fabric.Object} object Zero or more fabric instances
       * @return {Self} thisArg
       * @chainable
       */
      remove: function() {
        for (var c = this._objects, s, h = !1, o = 0, i = arguments.length; o < i; o++)
          s = c.indexOf(arguments[o]), s !== -1 && (h = !0, c.splice(s, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[o]));
        return this.renderOnAddRemove && h && this.requestRenderAll(), this;
      },
      /**
       * Executes given function for each object in this group
       * @param {Function} callback
       *                   Callback invoked with current object as first argument,
       *                   index - as second and an array of all objects - as third.
       *                   Callback is invoked in a context of Global Object (e.g. `window`)
       *                   when no `context` argument is given
       *
       * @param {Object} context Context (aka thisObject)
       * @return {Self} thisArg
       * @chainable
       */
      forEachObject: function(c, s) {
        for (var h = this.getObjects(), o = 0, i = h.length; o < i; o++)
          c.call(s, h[o], o, h);
        return this;
      },
      /**
       * Returns an array of children objects of this instance
       * Type parameter introduced in 1.3.10
       * since 2.3.5 this method return always a COPY of the array;
       * @param {String} [type] When specified, only objects of this type are returned
       * @return {Array}
       */
      getObjects: function(c) {
        return typeof c > "u" ? this._objects.concat() : this._objects.filter(function(s) {
          return s.type === c;
        });
      },
      /**
       * Returns object at specified index
       * @param {Number} index
       * @return {Self} thisArg
       */
      item: function(c) {
        return this._objects[c];
      },
      /**
       * Returns true if collection contains no objects
       * @return {Boolean} true if collection is empty
       */
      isEmpty: function() {
        return this._objects.length === 0;
      },
      /**
       * Returns a size of a collection (i.e: length of an array containing its objects)
       * @return {Number} Collection size
       */
      size: function() {
        return this._objects.length;
      },
      /**
       * Returns true if collection contains an object
       * @param {Object} object Object to check against
       * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
       * @return {Boolean} `true` if collection contains an object
       */
      contains: function(c, s) {
        return this._objects.indexOf(c) > -1 ? !0 : s ? this._objects.some(function(h) {
          return typeof h.contains == "function" && h.contains(c, !0);
        }) : !1;
      },
      /**
       * Returns number representation of a collection complexity
       * @return {Number} complexity
       */
      complexity: function() {
        return this._objects.reduce(function(c, s) {
          return c += s.complexity ? s.complexity() : 0, c;
        }, 0);
      }
    }, f.CommonMethods = {
      /**
       * Sets object's properties from options
       * @param {Object} [options] Options object
       */
      _setOptions: function(c) {
        for (var s in c)
          this.set(s, c[s]);
      },
      /**
       * @private
       * @param {Object} [filler] Options object
       * @param {String} [property] property to set the Gradient to
       */
      _initGradient: function(c, s) {
        c && c.colorStops && !(c instanceof f.Gradient) && this.set(s, new f.Gradient(c));
      },
      /**
       * @private
       * @param {Object} [filler] Options object
       * @param {String} [property] property to set the Pattern to
       * @param {Function} [callback] callback to invoke after pattern load
       */
      _initPattern: function(c, s, h) {
        c && c.source && !(c instanceof f.Pattern) ? this.set(s, new f.Pattern(c, h)) : h && h();
      },
      /**
       * @private
       */
      _setObject: function(c) {
        for (var s in c)
          this._set(s, c[s]);
      },
      /**
       * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
       * @param {String|Object} key Property name or object (if object, iterate over the object properties)
       * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
       * @return {fabric.Object} thisArg
       * @chainable
       */
      set: function(c, s) {
        return typeof c == "object" ? this._setObject(c) : this._set(c, s), this;
      },
      _set: function(c, s) {
        this[c] = s;
      },
      /**
       * Toggles specified property from `true` to `false` or from `false` to `true`
       * @param {String} property Property to toggle
       * @return {fabric.Object} thisArg
       * @chainable
       */
      toggle: function(c) {
        var s = this.get(c);
        return typeof s == "boolean" && this.set(c, !s), this;
      },
      /**
       * Basic getter
       * @param {String} property Property name
       * @return {*} value of a property
       */
      get: function(c) {
        return this[c];
      }
    }, (function(c) {
      var s = Math.sqrt, h = Math.atan2, o = Math.pow, i = Math.PI / 180, e = Math.PI / 2;
      f.util = {
        /**
         * Calculate the cos of an angle, avoiding returning floats for known results
         * @static
         * @memberOf fabric.util
         * @param {Number} angle the angle in radians or in degree
         * @return {Number}
         */
        cos: function(t) {
          if (t === 0)
            return 1;
          t < 0 && (t = -t);
          var n = t / e;
          switch (n) {
            case 1:
            case 3:
              return 0;
            case 2:
              return -1;
          }
          return Math.cos(t);
        },
        /**
         * Calculate the sin of an angle, avoiding returning floats for known results
         * @static
         * @memberOf fabric.util
         * @param {Number} angle the angle in radians or in degree
         * @return {Number}
         */
        sin: function(t) {
          if (t === 0)
            return 0;
          var n = t / e, a = 1;
          switch (t < 0 && (a = -1), n) {
            case 1:
              return a;
            case 2:
              return 0;
            case 3:
              return -a;
          }
          return Math.sin(t);
        },
        /**
         * Removes value from an array.
         * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
         * @static
         * @memberOf fabric.util
         * @param {Array} array
         * @param {*} value
         * @return {Array} original array
         */
        removeFromArray: function(t, n) {
          var a = t.indexOf(n);
          return a !== -1 && t.splice(a, 1), t;
        },
        /**
         * Returns random number between 2 specified ones.
         * @static
         * @memberOf fabric.util
         * @param {Number} min lower limit
         * @param {Number} max upper limit
         * @return {Number} random value (between min and max)
         */
        getRandomInt: function(t, n) {
          return Math.floor(Math.random() * (n - t + 1)) + t;
        },
        /**
         * Transforms degrees to radians.
         * @static
         * @memberOf fabric.util
         * @param {Number} degrees value in degrees
         * @return {Number} value in radians
         */
        degreesToRadians: function(t) {
          return t * i;
        },
        /**
         * Transforms radians to degrees.
         * @static
         * @memberOf fabric.util
         * @param {Number} radians value in radians
         * @return {Number} value in degrees
         */
        radiansToDegrees: function(t) {
          return t / i;
        },
        /**
         * Rotates `point` around `origin` with `radians`
         * @static
         * @memberOf fabric.util
         * @param {fabric.Point} point The point to rotate
         * @param {fabric.Point} origin The origin of the rotation
         * @param {Number} radians The radians of the angle for the rotation
         * @return {fabric.Point} The new rotated point
         */
        rotatePoint: function(t, n, a) {
          var r = new f.Point(t.x - n.x, t.y - n.y), l = f.util.rotateVector(r, a);
          return new f.Point(l.x, l.y).addEquals(n);
        },
        /**
         * Rotates `vector` with `radians`
         * @static
         * @memberOf fabric.util
         * @param {Object} vector The vector to rotate (x and y)
         * @param {Number} radians The radians of the angle for the rotation
         * @return {Object} The new rotated point
         */
        rotateVector: function(t, n) {
          var a = f.util.sin(n), r = f.util.cos(n), l = t.x * r - t.y * a, u = t.x * a + t.y * r;
          return {
            x: l,
            y: u
          };
        },
        /**
         * Creates a vetor from points represented as a point
         * @static
         * @memberOf fabric.util
         *
         * @typedef {Object} Point
         * @property {number} x
         * @property {number} y
         *
         * @param {Point} from
         * @param {Point} to
         * @returns {Point} vector
         */
        createVector: function(t, n) {
          return new f.Point(n.x - t.x, n.y - t.y);
        },
        /**
         * Calculates angle between 2 vectors using dot product
         * @static
         * @memberOf fabric.util
         * @param {Point} a
         * @param {Point} b
         * @returns the angle in radian between the vectors
         */
        calcAngleBetweenVectors: function(t, n) {
          return Math.acos((t.x * n.x + t.y * n.y) / (Math.hypot(t.x, t.y) * Math.hypot(n.x, n.y)));
        },
        /**
         * @static
         * @memberOf fabric.util
         * @param {Point} v
         * @returns {Point} vector representing the unit vector of pointing to the direction of `v`
         */
        getHatVector: function(t) {
          return new f.Point(t.x, t.y).multiply(1 / Math.hypot(t.x, t.y));
        },
        /**
         * @static
         * @memberOf fabric.util
         * @param {Point} A
         * @param {Point} B
         * @param {Point} C
         * @returns {{ vector: Point, angle: number }} vector representing the bisector of A and A's angle
         */
        getBisector: function(t, n, a) {
          var r = f.util.createVector(t, n), l = f.util.createVector(t, a), u = f.util.calcAngleBetweenVectors(r, l), d = f.util.calcAngleBetweenVectors(f.util.rotateVector(r, u), l), g = u * (d === 0 ? 1 : -1) / 2;
          return {
            vector: f.util.getHatVector(f.util.rotateVector(r, g)),
            angle: u
          };
        },
        /**
         * Project stroke width on points returning 2 projections for each point as follows:
         * - `miter`: 2 points corresponding to the outer boundary and the inner boundary of stroke.
         * - `bevel`: 2 points corresponding to the bevel boundaries, tangent to the bisector.
         * - `round`: same as `bevel`
         * Used to calculate object's bounding box
         * @static
         * @memberOf fabric.util
         * @param {Point[]} points
         * @param {Object} options
         * @param {number} options.strokeWidth
         * @param {'miter'|'bevel'|'round'} options.strokeLineJoin
         * @param {number} options.strokeMiterLimit https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
         * @param {boolean} options.strokeUniform
         * @param {number} options.scaleX
         * @param {number} options.scaleY
         * @param {boolean} [openPath] whether the shape is open or not, affects the calculations of the first and last points
         * @returns {fabric.Point[]} array of size 2n/4n of all suspected points
         */
        projectStrokeOnPoints: function(t, n, a) {
          var r = [], l = n.strokeWidth / 2, u = n.strokeUniform ? new f.Point(1 / n.scaleX, 1 / n.scaleY) : new f.Point(1, 1), d = function(g) {
            var m = l / Math.hypot(g.x, g.y);
            return new f.Point(g.x * m * u.x, g.y * m * u.y);
          };
          return t.length <= 1 || t.forEach(function(g, m) {
            var v = new f.Point(g.x, g.y), y, w;
            m === 0 ? (w = t[m + 1], y = a ? d(f.util.createVector(w, v)).addEquals(v) : t[t.length - 1]) : m === t.length - 1 ? (y = t[m - 1], w = a ? d(f.util.createVector(y, v)).addEquals(v) : t[0]) : (y = t[m - 1], w = t[m + 1]);
            var E = f.util.getBisector(v, y, w), L = E.vector, W = E.angle, G, V;
            if (n.strokeLineJoin === "miter" && (G = -l / Math.sin(W / 2), V = new f.Point(
              L.x * G * u.x,
              L.y * G * u.y
            ), Math.hypot(V.x, V.y) / l <= n.strokeMiterLimit)) {
              r.push(v.add(V)), r.push(v.subtract(V));
              return;
            }
            G = -l * Math.SQRT2, V = new f.Point(
              L.x * G * u.x,
              L.y * G * u.y
            ), r.push(v.add(V)), r.push(v.subtract(V));
          }), r;
        },
        /**
         * Apply transform t to point p
         * @static
         * @memberOf fabric.util
         * @param  {fabric.Point} p The point to transform
         * @param  {Array} t The transform
         * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
         * @return {fabric.Point} The transformed point
         */
        transformPoint: function(t, n, a) {
          return a ? new f.Point(
            n[0] * t.x + n[2] * t.y,
            n[1] * t.x + n[3] * t.y
          ) : new f.Point(
            n[0] * t.x + n[2] * t.y + n[4],
            n[1] * t.x + n[3] * t.y + n[5]
          );
        },
        /**
         * Returns coordinates of points's bounding rectangle (left, top, width, height)
         * @param {Array} points 4 points array
         * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
         * @return {Object} Object with left, top, width, height properties
         */
        makeBoundingBoxFromPoints: function(t, n) {
          if (n)
            for (var a = 0; a < t.length; a++)
              t[a] = f.util.transformPoint(t[a], n);
          var r = [t[0].x, t[1].x, t[2].x, t[3].x], l = f.util.array.min(r), u = f.util.array.max(r), d = u - l, g = [t[0].y, t[1].y, t[2].y, t[3].y], m = f.util.array.min(g), v = f.util.array.max(g), y = v - m;
          return {
            left: l,
            top: m,
            width: d,
            height: y
          };
        },
        /**
         * Invert transformation t
         * @static
         * @memberOf fabric.util
         * @param {Array} t The transform
         * @return {Array} The inverted transform
         */
        invertTransform: function(t) {
          var n = 1 / (t[0] * t[3] - t[1] * t[2]), a = [n * t[3], -n * t[1], -n * t[2], n * t[0]], r = f.util.transformPoint({ x: t[4], y: t[5] }, a, !0);
          return a[4] = -r.x, a[5] = -r.y, a;
        },
        /**
         * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
         * @static
         * @memberOf fabric.util
         * @param {Number|String} number number to operate on
         * @param {Number} fractionDigits number of fraction digits to "leave"
         * @return {Number}
         */
        toFixed: function(t, n) {
          return parseFloat(Number(t).toFixed(n));
        },
        /**
         * Converts from attribute value to pixel value if applicable.
         * Returns converted pixels or original value not converted.
         * @param {Number|String} value number to operate on
         * @param {Number} fontSize
         * @return {Number|String}
         */
        parseUnit: function(t, n) {
          var a = /\D{0,2}$/.exec(t), r = parseFloat(t);
          switch (n || (n = f.Text.DEFAULT_SVG_FONT_SIZE), a[0]) {
            case "mm":
              return r * f.DPI / 25.4;
            case "cm":
              return r * f.DPI / 2.54;
            case "in":
              return r * f.DPI;
            case "pt":
              return r * f.DPI / 72;
            // or * 4 / 3
            case "pc":
              return r * f.DPI / 72 * 12;
            // or * 16
            case "em":
              return r * n;
            default:
              return r;
          }
        },
        /**
         * Function which always returns `false`.
         * @static
         * @memberOf fabric.util
         * @return {Boolean}
         */
        falseFunction: function() {
          return !1;
        },
        /**
         * Returns klass "Class" object of given namespace
         * @memberOf fabric.util
         * @param {String} type Type of object (eg. 'circle')
         * @param {String} namespace Namespace to get klass "Class" object from
         * @return {Object} klass "Class"
         */
        getKlass: function(t, n) {
          return t = f.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), f.util.resolveNamespace(n)[t];
        },
        /**
         * Returns array of attributes for given svg that fabric parses
         * @memberOf fabric.util
         * @param {String} type Type of svg element (eg. 'circle')
         * @return {Array} string names of supported attributes
         */
        getSvgAttributes: function(t) {
          var n = [
            "instantiated_by_use",
            "style",
            "id",
            "class"
          ];
          switch (t) {
            case "linearGradient":
              n = n.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
              break;
            case "radialGradient":
              n = n.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
              break;
            case "stop":
              n = n.concat(["offset", "stop-color", "stop-opacity"]);
              break;
          }
          return n;
        },
        /**
         * Returns object of given namespace
         * @memberOf fabric.util
         * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
         * @return {Object} Object for given namespace (default fabric)
         */
        resolveNamespace: function(t) {
          if (!t)
            return f;
          var n = t.split("."), a = n.length, r, l = c || f.window;
          for (r = 0; r < a; ++r)
            l = l[n[r]];
          return l;
        },
        /**
         * Loads image element from given url and passes it to a callback
         * @memberOf fabric.util
         * @param {String} url URL representing an image
         * @param {Function} callback Callback; invoked with loaded image
         * @param {*} [context] Context to invoke callback in
         * @param {Object} [crossOrigin] crossOrigin value to set image element to
         */
        loadImage: function(t, n, a, r) {
          if (!t) {
            n && n.call(a, t);
            return;
          }
          var l = f.util.createImage(), u = function() {
            n && n.call(a, l, !1), l = l.onload = l.onerror = null;
          };
          l.onload = u, l.onerror = function() {
            f.log("Error loading " + l.src), n && n.call(a, null, !0), l = l.onload = l.onerror = null;
          }, t.indexOf("data") !== 0 && r !== void 0 && r !== null && (l.crossOrigin = r), t.substring(0, 14) === "data:image/svg" && (l.onload = null, f.util.loadImageInDom(l, u)), l.src = t;
        },
        /**
         * Attaches SVG image with data: URL to the dom
         * @memberOf fabric.util
         * @param {Object} img Image object with data:image/svg src
         * @param {Function} callback Callback; invoked with loaded image
         * @return {Object} DOM element (div containing the SVG image)
         */
        loadImageInDom: function(t, n) {
          var a = f.document.createElement("div");
          a.style.width = a.style.height = "1px", a.style.left = a.style.top = "-100%", a.style.position = "absolute", a.appendChild(t), f.document.querySelector("body").appendChild(a), t.onload = function() {
            n(), a.parentNode.removeChild(a), a = null;
          };
        },
        /**
         * Creates corresponding fabric instances from their object representations
         * @static
         * @memberOf fabric.util
         * @param {Array} objects Objects to enliven
         * @param {Function} callback Callback to invoke when all objects are created
         * @param {String} namespace Namespace to get klass "Class" object from
         * @param {Function} reviver Method for further parsing of object elements,
         * called after each fabric object created.
         */
        enlivenObjects: function(t, n, a, r) {
          t = t || [];
          var l = [], u = 0, d = t.length;
          function g() {
            ++u === d && n && n(l.filter(function(m) {
              return m;
            }));
          }
          if (!d) {
            n && n(l);
            return;
          }
          t.forEach(function(m, v) {
            if (!m || !m.type) {
              g();
              return;
            }
            var y = f.util.getKlass(m.type, a);
            y.fromObject(m, function(w, E) {
              E || (l[v] = w), r && r(m, w, E), g();
            });
          });
        },
        /**
         * Creates corresponding fabric instances residing in an object, e.g. `clipPath`
         * @see {@link fabric.Object.ENLIVEN_PROPS}
         * @param {Object} object
         * @param {Object} [context] assign enlived props to this object (pass null to skip this)
         * @param {(objects:fabric.Object[]) => void} callback
         */
        enlivenObjectEnlivables: function(t, n, a) {
          var r = f.Object.ENLIVEN_PROPS.filter(function(l) {
            return !!t[l];
          });
          f.util.enlivenObjects(r.map(function(l) {
            return t[l];
          }), function(l) {
            var u = {};
            r.forEach(function(d, g) {
              u[d] = l[g], n && (n[d] = l[g]);
            }), a && a(u);
          });
        },
        /**
         * Create and wait for loading of patterns
         * @static
         * @memberOf fabric.util
         * @param {Array} patterns Objects to enliven
         * @param {Function} callback Callback to invoke when all objects are created
         * called after each fabric object created.
         */
        enlivenPatterns: function(t, n) {
          t = t || [];
          function a() {
            ++l === u && n && n(r);
          }
          var r = [], l = 0, u = t.length;
          if (!u) {
            n && n(r);
            return;
          }
          t.forEach(function(d, g) {
            d && d.source ? new f.Pattern(d, function(m) {
              r[g] = m, a();
            }) : (r[g] = d, a());
          });
        },
        /**
         * Groups SVG elements (usually those retrieved from SVG document)
         * @static
         * @memberOf fabric.util
         * @param {Array} elements SVG elements to group
         * @param {Object} [options] Options object
         * @param {String} path Value to set sourcePath to
         * @return {fabric.Object|fabric.Group}
         */
        groupSVGElements: function(t, n, a) {
          var r;
          return t && t.length === 1 ? (typeof a < "u" && (t[0].sourcePath = a), t[0]) : (n && (n.width && n.height ? n.centerPoint = {
            x: n.width / 2,
            y: n.height / 2
          } : (delete n.width, delete n.height)), r = new f.Group(t, n), typeof a < "u" && (r.sourcePath = a), r);
        },
        /**
         * Populates an object with properties of another object
         * @static
         * @memberOf fabric.util
         * @param {Object} source Source object
         * @param {Object} destination Destination object
         * @return {Array} properties Properties names to include
         */
        populateWithProperties: function(t, n, a) {
          if (a && Array.isArray(a))
            for (var r = 0, l = a.length; r < l; r++)
              a[r] in t && (n[a[r]] = t[a[r]]);
        },
        /**
         * Creates canvas element
         * @static
         * @memberOf fabric.util
         * @return {CanvasElement} initialized canvas element
         */
        createCanvasElement: function() {
          return f.document.createElement("canvas");
        },
        /**
         * Creates a canvas element that is a copy of another and is also painted
         * @param {CanvasElement} canvas to copy size and content of
         * @static
         * @memberOf fabric.util
         * @return {CanvasElement} initialized canvas element
         */
        copyCanvasElement: function(t) {
          var n = f.util.createCanvasElement();
          return n.width = t.width, n.height = t.height, n.getContext("2d").drawImage(t, 0, 0), n;
        },
        /**
         * since 2.6.0 moved from canvas instance to utility.
         * @param {CanvasElement} canvasEl to copy size and content of
         * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
         * @param {Number} quality <= 1 and > 0
         * @static
         * @memberOf fabric.util
         * @return {String} data url
         */
        toDataURL: function(t, n, a) {
          return t.toDataURL("image/" + n, a);
        },
        /**
         * Creates image element (works on client and node)
         * @static
         * @memberOf fabric.util
         * @return {HTMLImageElement} HTML image element
         */
        createImage: function() {
          return f.document.createElement("img");
        },
        /**
         * Multiply matrix A by matrix B to nest transformations
         * @static
         * @memberOf fabric.util
         * @param  {Array} a First transformMatrix
         * @param  {Array} b Second transformMatrix
         * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
         * @return {Array} The product of the two transform matrices
         */
        multiplyTransformMatrices: function(t, n, a) {
          return [
            t[0] * n[0] + t[2] * n[1],
            t[1] * n[0] + t[3] * n[1],
            t[0] * n[2] + t[2] * n[3],
            t[1] * n[2] + t[3] * n[3],
            a ? 0 : t[0] * n[4] + t[2] * n[5] + t[4],
            a ? 0 : t[1] * n[4] + t[3] * n[5] + t[5]
          ];
        },
        /**
         * Decomposes standard 2x3 matrix into transform components
         * @static
         * @memberOf fabric.util
         * @param  {Array} a transformMatrix
         * @return {Object} Components of transform
         */
        qrDecompose: function(t) {
          var n = h(t[1], t[0]), a = o(t[0], 2) + o(t[1], 2), r = s(a), l = (t[0] * t[3] - t[2] * t[1]) / r, u = h(t[0] * t[2] + t[1] * t[3], a);
          return {
            angle: n / i,
            scaleX: r,
            scaleY: l,
            skewX: u / i,
            skewY: 0,
            translateX: t[4],
            translateY: t[5]
          };
        },
        /**
         * Returns a transform matrix starting from an object of the same kind of
         * the one returned from qrDecompose, useful also if you want to calculate some
         * transformations from an object that is not enlived yet
         * @static
         * @memberOf fabric.util
         * @param  {Object} options
         * @param  {Number} [options.angle] angle in degrees
         * @return {Number[]} transform matrix
         */
        calcRotateMatrix: function(t) {
          if (!t.angle)
            return f.iMatrix.concat();
          var n = f.util.degreesToRadians(t.angle), a = f.util.cos(n), r = f.util.sin(n);
          return [a, r, -r, a, 0, 0];
        },
        /**
         * Returns a transform matrix starting from an object of the same kind of
         * the one returned from qrDecompose, useful also if you want to calculate some
         * transformations from an object that is not enlived yet.
         * is called DimensionsTransformMatrix because those properties are the one that influence
         * the size of the resulting box of the object.
         * @static
         * @memberOf fabric.util
         * @param  {Object} options
         * @param  {Number} [options.scaleX]
         * @param  {Number} [options.scaleY]
         * @param  {Boolean} [options.flipX]
         * @param  {Boolean} [options.flipY]
         * @param  {Number} [options.skewX]
         * @param  {Number} [options.skewY]
         * @return {Number[]} transform matrix
         */
        calcDimensionsMatrix: function(t) {
          var n = typeof t.scaleX > "u" ? 1 : t.scaleX, a = typeof t.scaleY > "u" ? 1 : t.scaleY, r = [
            t.flipX ? -n : n,
            0,
            0,
            t.flipY ? -a : a,
            0,
            0
          ], l = f.util.multiplyTransformMatrices, u = f.util.degreesToRadians;
          return t.skewX && (r = l(
            r,
            [1, 0, Math.tan(u(t.skewX)), 1],
            !0
          )), t.skewY && (r = l(
            r,
            [1, Math.tan(u(t.skewY)), 0, 1],
            !0
          )), r;
        },
        /**
         * Returns a transform matrix starting from an object of the same kind of
         * the one returned from qrDecompose, useful also if you want to calculate some
         * transformations from an object that is not enlived yet
         * @static
         * @memberOf fabric.util
         * @param  {Object} options
         * @param  {Number} [options.angle]
         * @param  {Number} [options.scaleX]
         * @param  {Number} [options.scaleY]
         * @param  {Boolean} [options.flipX]
         * @param  {Boolean} [options.flipY]
         * @param  {Number} [options.skewX]
         * @param  {Number} [options.skewX]
         * @param  {Number} [options.translateX]
         * @param  {Number} [options.translateY]
         * @return {Number[]} transform matrix
         */
        composeMatrix: function(t) {
          var n = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0], a = f.util.multiplyTransformMatrices;
          return t.angle && (n = a(n, f.util.calcRotateMatrix(t))), (t.scaleX !== 1 || t.scaleY !== 1 || t.skewX || t.skewY || t.flipX || t.flipY) && (n = a(n, f.util.calcDimensionsMatrix(t))), n;
        },
        /**
         * reset an object transform state to neutral. Top and left are not accounted for
         * @static
         * @memberOf fabric.util
         * @param  {fabric.Object} target object to transform
         */
        resetObjectTransform: function(t) {
          t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0);
        },
        /**
         * Extract Object transform values
         * @static
         * @memberOf fabric.util
         * @param  {fabric.Object} target object to read from
         * @return {Object} Components of transform
         */
        saveObjectTransform: function(t) {
          return {
            scaleX: t.scaleX,
            scaleY: t.scaleY,
            skewX: t.skewX,
            skewY: t.skewY,
            angle: t.angle,
            left: t.left,
            flipX: t.flipX,
            flipY: t.flipY,
            top: t.top
          };
        },
        /**
         * Returns true if context has transparent pixel
         * at specified location (taking tolerance into account)
         * @param {CanvasRenderingContext2D} ctx context
         * @param {Number} x x coordinate
         * @param {Number} y y coordinate
         * @param {Number} tolerance Tolerance
         */
        isTransparent: function(t, n, a, r) {
          r > 0 && (n > r ? n -= r : n = 0, a > r ? a -= r : a = 0);
          var l = !0, u, d, g = t.getImageData(n, a, r * 2 || 1, r * 2 || 1), m = g.data.length;
          for (u = 3; u < m && (d = g.data[u], l = d <= 0, l !== !1); u += 4)
            ;
          return g = null, l;
        },
        /**
         * Parse preserveAspectRatio attribute from element
         * @param {string} attribute to be parsed
         * @return {Object} an object containing align and meetOrSlice attribute
         */
        parsePreserveAspectRatioAttribute: function(t) {
          var n = "meet", a = "Mid", r = "Mid", l = t.split(" "), u;
          return l && l.length && (n = l.pop(), n !== "meet" && n !== "slice" ? (u = n, n = "meet") : l.length && (u = l.pop())), a = u !== "none" ? u.slice(1, 4) : "none", r = u !== "none" ? u.slice(5, 8) : "none", {
            meetOrSlice: n,
            alignX: a,
            alignY: r
          };
        },
        /**
         * Clear char widths cache for the given font family or all the cache if no
         * fontFamily is specified.
         * Use it if you know you are loading fonts in a lazy way and you are not waiting
         * for custom fonts to load properly when adding text objects to the canvas.
         * If a text object is added when its own font is not loaded yet, you will get wrong
         * measurement and so wrong bounding boxes.
         * After the font cache is cleared, either change the textObject text content or call
         * initDimensions() to trigger a recalculation
         * @memberOf fabric.util
         * @param {String} [fontFamily] font family to clear
         */
        clearFabricFontCache: function(t) {
          t = (t || "").toLowerCase(), t ? f.charWidthsCache[t] && delete f.charWidthsCache[t] : f.charWidthsCache = {};
        },
        /**
         * Given current aspect ratio, determines the max width and height that can
         * respect the total allowed area for the cache.
         * @memberOf fabric.util
         * @param {Number} ar aspect ratio
         * @param {Number} maximumArea Maximum area you want to achieve
         * @return {Object.x} Limited dimensions by X
         * @return {Object.y} Limited dimensions by Y
         */
        limitDimsByArea: function(t, n) {
          var a = Math.sqrt(n * t), r = Math.floor(n / a);
          return { x: Math.floor(a), y: r };
        },
        capValue: function(t, n, a) {
          return Math.max(t, Math.min(n, a));
        },
        /**
         * Finds the scale for the object source to fit inside the object destination,
         * keeping aspect ratio intact.
         * respect the total allowed area for the cache.
         * @memberOf fabric.util
         * @param {Object | fabric.Object} source
         * @param {Number} source.height natural unscaled height of the object
         * @param {Number} source.width natural unscaled width of the object
         * @param {Object | fabric.Object} destination
         * @param {Number} destination.height natural unscaled height of the object
         * @param {Number} destination.width natural unscaled width of the object
         * @return {Number} scale factor to apply to source to fit into destination
         */
        findScaleToFit: function(t, n) {
          return Math.min(n.width / t.width, n.height / t.height);
        },
        /**
         * Finds the scale for the object source to cover entirely the object destination,
         * keeping aspect ratio intact.
         * respect the total allowed area for the cache.
         * @memberOf fabric.util
         * @param {Object | fabric.Object} source
         * @param {Number} source.height natural unscaled height of the object
         * @param {Number} source.width natural unscaled width of the object
         * @param {Object | fabric.Object} destination
         * @param {Number} destination.height natural unscaled height of the object
         * @param {Number} destination.width natural unscaled width of the object
         * @return {Number} scale factor to apply to source to cover destination
         */
        findScaleToCover: function(t, n) {
          return Math.max(n.width / t.width, n.height / t.height);
        },
        /**
         * given an array of 6 number returns something like `"matrix(...numbers)"`
         * @memberOf fabric.util
         * @param {Array} transform an array with 6 numbers
         * @return {String} transform matrix for svg
         * @return {Object.y} Limited dimensions by Y
         */
        matrixToSVG: function(t) {
          return "matrix(" + t.map(function(n) {
            return f.util.toFixed(n, f.Object.NUM_FRACTION_DIGITS);
          }).join(" ") + ")";
        },
        /**
         * given an object and a transform, apply the inverse transform to the object,
         * this is equivalent to remove from that object that transformation, so that
         * added in a space with the removed transform, the object will be the same as before.
         * Removing from an object a transform that scale by 2 is like scaling it by 1/2.
         * Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg
         * in the opposite direction.
         * This util is used to add objects inside transformed groups or nested groups.
         * @memberOf fabric.util
         * @param {fabric.Object} object the object you want to transform
         * @param {Array} transform the destination transform
         */
        removeTransformFromObject: function(t, n) {
          var a = f.util.invertTransform(n), r = f.util.multiplyTransformMatrices(a, t.calcOwnMatrix());
          f.util.applyTransformToObject(t, r);
        },
        /**
         * given an object and a transform, apply the transform to the object.
         * this is equivalent to change the space where the object is drawn.
         * Adding to an object a transform that scale by 2 is like scaling it by 2.
         * This is used when removing an object from an active selection for example.
         * @memberOf fabric.util
         * @param {fabric.Object} object the object you want to transform
         * @param {Array} transform the destination transform
         */
        addTransformToObject: function(t, n) {
          f.util.applyTransformToObject(
            t,
            f.util.multiplyTransformMatrices(n, t.calcOwnMatrix())
          );
        },
        /**
         * discard an object transform state and apply the one from the matrix.
         * @memberOf fabric.util
         * @param {fabric.Object} object the object you want to transform
         * @param {Array} transform the destination transform
         */
        applyTransformToObject: function(t, n) {
          var a = f.util.qrDecompose(n), r = new f.Point(a.translateX, a.translateY);
          t.flipX = !1, t.flipY = !1, t.set("scaleX", a.scaleX), t.set("scaleY", a.scaleY), t.skewX = a.skewX, t.skewY = a.skewY, t.angle = a.angle, t.setPositionByOrigin(r, "center", "center");
        },
        /**
         * given a width and height, return the size of the bounding box
         * that can contains the box with width/height with applied transform
         * described in options.
         * Use to calculate the boxes around objects for controls.
         * @memberOf fabric.util
         * @param {Number} width
         * @param {Number} height
         * @param {Object} options
         * @param {Number} options.scaleX
         * @param {Number} options.scaleY
         * @param {Number} options.skewX
         * @param {Number} options.skewY
         * @return {Object.x} width of containing
         * @return {Object.y} height of containing
         */
        sizeAfterTransform: function(t, n, a) {
          var r = t / 2, l = n / 2, u = [
            {
              x: -r,
              y: -l
            },
            {
              x: r,
              y: -l
            },
            {
              x: -r,
              y: l
            },
            {
              x: r,
              y: l
            }
          ], d = f.util.calcDimensionsMatrix(a), g = f.util.makeBoundingBoxFromPoints(u, d);
          return {
            x: g.width,
            y: g.height
          };
        },
        /**
         * Merges 2 clip paths into one visually equal clip path
         *
         * **IMPORTANT**:\
         * Does **NOT** clone the arguments, clone them proir if necessary.
         *
         * Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
         * Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.
         *
         * In order to handle the `inverted` property we follow logic described in the following cases:\
         * **(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
         * **(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
         * **(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.
         *
         * @memberOf fabric.util
         * @param {fabric.Object} c1
         * @param {fabric.Object} c2
         * @returns {fabric.Object} merged clip path
         */
        mergeClipPaths: function(t, n) {
          var a = t, r = n;
          a.inverted && !r.inverted && (a = n, r = t), f.util.applyTransformToObject(
            r,
            f.util.multiplyTransformMatrices(
              f.util.invertTransform(a.calcTransformMatrix()),
              r.calcTransformMatrix()
            )
          );
          var l = a.inverted && r.inverted;
          return l && (a.inverted = r.inverted = !1), new f.Group([a], { clipPath: r, inverted: l });
        },
        /**
         * @memberOf fabric.util
         * @param {Object} prevStyle first style to compare
         * @param {Object} thisStyle second style to compare
         * @param {boolean} forTextSpans whether to check overline, underline, and line-through properties
         * @return {boolean} true if the style changed
         */
        hasStyleChanged: function(t, n, a) {
          return a = a || !1, t.fill !== n.fill || t.stroke !== n.stroke || t.strokeWidth !== n.strokeWidth || t.fontSize !== n.fontSize || t.fontFamily !== n.fontFamily || t.fontWeight !== n.fontWeight || t.fontStyle !== n.fontStyle || t.textBackgroundColor !== n.textBackgroundColor || t.deltaY !== n.deltaY || a && (t.overline !== n.overline || t.underline !== n.underline || t.linethrough !== n.linethrough);
        },
        /**
         * Returns the array form of a text object's inline styles property with styles grouped in ranges
         * rather than per character. This format is less verbose, and is better suited for storage
         * so it is used in serialization (not during runtime).
         * @memberOf fabric.util
         * @param {object} styles per character styles for a text object
         * @param {String} text the text string that the styles are applied to
         * @return {{start: number, end: number, style: object}[]}
         */
        stylesToArray: function(a, n) {
          for (var a = f.util.object.clone(a, !0), r = n.split(`
`), l = -1, u = {}, d = [], g = 0; g < r.length; g++) {
            if (!a[g]) {
              l += r[g].length;
              continue;
            }
            for (var m = 0; m < r[g].length; m++) {
              l++;
              var v = a[g][m];
              if (v && Object.keys(v).length > 0) {
                var y = f.util.hasStyleChanged(u, v, !0);
                y ? d.push({
                  start: l,
                  end: l + 1,
                  style: v
                }) : d[d.length - 1].end++;
              }
              u = v || {};
            }
          }
          return d;
        },
        /**
         * Returns the object form of the styles property with styles that are assigned per
         * character rather than grouped by range. This format is more verbose, and is
         * only used during runtime (not for serialization/storage)
         * @memberOf fabric.util
         * @param {Array} styles the serialized form of a text object's styles
         * @param {String} text the text string that the styles are applied to
         * @return {Object}
         */
        stylesFromArray: function(t, n) {
          if (!Array.isArray(t))
            return t;
          for (var a = n.split(`
`), r = -1, l = 0, u = {}, d = 0; d < a.length; d++)
            for (var g = 0; g < a[d].length; g++)
              r++, t[l] && t[l].start <= r && r < t[l].end && (u[d] = u[d] || {}, u[d][g] = Object.assign({}, t[l].style), r === t[l].end - 1 && l++);
          return u;
        }
      };
    })(q), (function() {
      var c = Array.prototype.join, s = {
        m: 2,
        l: 2,
        h: 1,
        v: 1,
        c: 6,
        s: 4,
        q: 4,
        t: 2,
        a: 7
      }, h = {
        m: "l",
        M: "L"
      };
      function o(p, x, b, S, k, C, _, T, P, F, D) {
        var B = f.util.cos(p), Y = f.util.sin(p), z = f.util.cos(x), A = f.util.sin(x), O = b * k * z - S * C * A + _, j = S * k * z + b * C * A + T, R = F + P * (-b * k * Y - S * C * B), M = D + P * (-S * k * Y + b * C * B), X = O + P * (b * k * A + S * C * z), U = j + P * (S * k * A - b * C * z);
        return [
          "C",
          R,
          M,
          X,
          U,
          O,
          j
        ];
      }
      function i(p, x, b, S, k, C, _) {
        var T = Math.PI, P = _ * T / 180, F = f.util.sin(P), D = f.util.cos(P), B = 0, Y = 0;
        b = Math.abs(b), S = Math.abs(S);
        var z = -D * p * 0.5 - F * x * 0.5, A = -D * x * 0.5 + F * p * 0.5, O = b * b, j = S * S, R = A * A, M = z * z, X = O * j - O * R - j * M, U = 0;
        if (X < 0) {
          var tt = Math.sqrt(1 - X / (O * j));
          b *= tt, S *= tt;
        } else
          U = (k === C ? -1 : 1) * Math.sqrt(X / (O * R + j * M));
        var Q = U * b * A / S, I = -U * S * z / b, Z = D * Q - F * I + p * 0.5, et = F * Q + D * I + x * 0.5, rt = e(1, 0, (z - Q) / b, (A - I) / S), ht = e((z - Q) / b, (A - I) / S, (-z - Q) / b, (-A - I) / S);
        C === 0 && ht > 0 ? ht -= 2 * T : C === 1 && ht < 0 && (ht += 2 * T);
        for (var st = Math.ceil(Math.abs(ht / T * 2)), ct = [], lt = ht / st, pt = 8 / 3 * Math.sin(lt / 4) * Math.sin(lt / 4) / Math.sin(lt / 2), yt = rt + lt, gt = 0; gt < st; gt++)
          ct[gt] = o(rt, yt, D, F, b, S, Z, et, pt, B, Y), B = ct[gt][5], Y = ct[gt][6], rt = yt, yt += lt;
        return ct;
      }
      function e(p, x, b, S) {
        var k = Math.atan2(x, p), C = Math.atan2(S, b);
        return C >= k ? C - k : 2 * Math.PI - (k - C);
      }
      function t(p, x, b, S, k, C, _, T) {
        var P;
        if (f.cachesBoundsOfCurve && (P = c.call(arguments), f.boundsOfCurveCache[P]))
          return f.boundsOfCurveCache[P];
        var F = Math.sqrt, D = Math.min, B = Math.max, Y = Math.abs, z = [], A = [[], []], O, j, R, M, X, U, tt, Q;
        j = 6 * p - 12 * b + 6 * k, O = -3 * p + 9 * b - 9 * k + 3 * _, R = 3 * b - 3 * p;
        for (var I = 0; I < 2; ++I) {
          if (I > 0 && (j = 6 * x - 12 * S + 6 * C, O = -3 * x + 9 * S - 9 * C + 3 * T, R = 3 * S - 3 * x), Y(O) < 1e-12) {
            if (Y(j) < 1e-12)
              continue;
            M = -R / j, 0 < M && M < 1 && z.push(M);
            continue;
          }
          tt = j * j - 4 * R * O, !(tt < 0) && (Q = F(tt), X = (-j + Q) / (2 * O), 0 < X && X < 1 && z.push(X), U = (-j - Q) / (2 * O), 0 < U && U < 1 && z.push(U));
        }
        for (var Z, et, rt = z.length, ht = rt, st; rt--; )
          M = z[rt], st = 1 - M, Z = st * st * st * p + 3 * st * st * M * b + 3 * st * M * M * k + M * M * M * _, A[0][rt] = Z, et = st * st * st * x + 3 * st * st * M * S + 3 * st * M * M * C + M * M * M * T, A[1][rt] = et;
        A[0][ht] = p, A[1][ht] = x, A[0][ht + 1] = _, A[1][ht + 1] = T;
        var ct = [
          {
            x: D.apply(null, A[0]),
            y: D.apply(null, A[1])
          },
          {
            x: B.apply(null, A[0]),
            y: B.apply(null, A[1])
          }
        ];
        return f.cachesBoundsOfCurve && (f.boundsOfCurveCache[P] = ct), ct;
      }
      function n(p, x, b) {
        for (var S = b[1], k = b[2], C = b[3], _ = b[4], T = b[5], P = b[6], F = b[7], D = i(P - p, F - x, S, k, _, T, C), B = 0, Y = D.length; B < Y; B++)
          D[B][1] += p, D[B][2] += x, D[B][3] += p, D[B][4] += x, D[B][5] += p, D[B][6] += x;
        return D;
      }
      function a(p) {
        var x = 0, b = 0, S = p.length, k = 0, C = 0, _, T, P, F = [], D, B, Y;
        for (T = 0; T < S; ++T) {
          switch (P = !1, _ = p[T].slice(0), _[0]) {
            // first letter
            case "l":
              _[0] = "L", _[1] += x, _[2] += b;
            // falls through
            case "L":
              x = _[1], b = _[2];
              break;
            case "h":
              _[1] += x;
            // falls through
            case "H":
              _[0] = "L", _[2] = b, x = _[1];
              break;
            case "v":
              _[1] += b;
            // falls through
            case "V":
              _[0] = "L", b = _[1], _[1] = x, _[2] = b;
              break;
            case "m":
              _[0] = "M", _[1] += x, _[2] += b;
            // falls through
            case "M":
              x = _[1], b = _[2], k = _[1], C = _[2];
              break;
            case "c":
              _[0] = "C", _[1] += x, _[2] += b, _[3] += x, _[4] += b, _[5] += x, _[6] += b;
            // falls through
            case "C":
              B = _[3], Y = _[4], x = _[5], b = _[6];
              break;
            case "s":
              _[0] = "S", _[1] += x, _[2] += b, _[3] += x, _[4] += b;
            // falls through
            case "S":
              D === "C" ? (B = 2 * x - B, Y = 2 * b - Y) : (B = x, Y = b), x = _[3], b = _[4], _[0] = "C", _[5] = _[3], _[6] = _[4], _[3] = _[1], _[4] = _[2], _[1] = B, _[2] = Y, B = _[3], Y = _[4];
              break;
            case "q":
              _[0] = "Q", _[1] += x, _[2] += b, _[3] += x, _[4] += b;
            // falls through
            case "Q":
              B = _[1], Y = _[2], x = _[3], b = _[4];
              break;
            case "t":
              _[0] = "T", _[1] += x, _[2] += b;
            // falls through
            case "T":
              D === "Q" ? (B = 2 * x - B, Y = 2 * b - Y) : (B = x, Y = b), _[0] = "Q", x = _[1], b = _[2], _[1] = B, _[2] = Y, _[3] = x, _[4] = b;
              break;
            case "a":
              _[0] = "A", _[6] += x, _[7] += b;
            // falls through
            case "A":
              P = !0, F = F.concat(n(x, b, _)), x = _[6], b = _[7];
              break;
            case "z":
            case "Z":
              x = k, b = C;
              break;
          }
          P || F.push(_), D = _[0];
        }
        return F;
      }
      function r(p, x, b, S) {
        return Math.sqrt((b - p) * (b - p) + (S - x) * (S - x));
      }
      function l(p) {
        return p * p * p;
      }
      function u(p) {
        return 3 * p * p * (1 - p);
      }
      function d(p) {
        return 3 * p * (1 - p) * (1 - p);
      }
      function g(p) {
        return (1 - p) * (1 - p) * (1 - p);
      }
      function m(p, x, b, S, k, C, _, T) {
        return function(P) {
          var F = l(P), D = u(P), B = d(P), Y = g(P);
          return {
            x: _ * F + k * D + b * B + p * Y,
            y: T * F + C * D + S * B + x * Y
          };
        };
      }
      function v(p, x, b, S, k, C, _, T) {
        return function(P) {
          var F = 1 - P, D = 3 * F * F * (b - p) + 6 * F * P * (k - b) + 3 * P * P * (_ - k), B = 3 * F * F * (S - x) + 6 * F * P * (C - S) + 3 * P * P * (T - C);
          return Math.atan2(B, D);
        };
      }
      function y(p) {
        return p * p;
      }
      function w(p) {
        return 2 * p * (1 - p);
      }
      function E(p) {
        return (1 - p) * (1 - p);
      }
      function L(p, x, b, S, k, C) {
        return function(_) {
          var T = y(_), P = w(_), F = E(_);
          return {
            x: k * T + b * P + p * F,
            y: C * T + S * P + x * F
          };
        };
      }
      function W(p, x, b, S, k, C) {
        return function(_) {
          var T = 1 - _, P = 2 * T * (b - p) + 2 * _ * (k - b), F = 2 * T * (S - x) + 2 * _ * (C - S);
          return Math.atan2(F, P);
        };
      }
      function G(p, x, b) {
        var S = { x, y: b }, k, C = 0, _;
        for (_ = 1; _ <= 100; _ += 1)
          k = p(_ / 100), C += r(S.x, S.y, k.x, k.y), S = k;
        return C;
      }
      function V(p, x) {
        for (var b = 0, S = 0, k = p.iterator, C = { x: p.x, y: p.y }, _, T, P = 0.01, F = p.angleFinder, D; S < x && P > 1e-4; )
          _ = k(b), D = b, T = r(C.x, C.y, _.x, _.y), T + S > x ? (b -= P, P /= 2) : (C = _, b += P, S += T);
        return _.angle = F(D), _;
      }
      function H(p) {
        for (var x = 0, b = p.length, S, k = 0, C = 0, _ = 0, T = 0, P = [], F, D, B, Y = 0; Y < b; Y++) {
          switch (S = p[Y], D = {
            x: k,
            y: C,
            command: S[0]
          }, S[0]) {
            //first letter
            case "M":
              D.length = 0, _ = k = S[1], T = C = S[2];
              break;
            case "L":
              D.length = r(k, C, S[1], S[2]), k = S[1], C = S[2];
              break;
            case "C":
              F = m(
                k,
                C,
                S[1],
                S[2],
                S[3],
                S[4],
                S[5],
                S[6]
              ), B = v(
                k,
                C,
                S[1],
                S[2],
                S[3],
                S[4],
                S[5],
                S[6]
              ), D.iterator = F, D.angleFinder = B, D.length = G(F, k, C), k = S[5], C = S[6];
              break;
            case "Q":
              F = L(
                k,
                C,
                S[1],
                S[2],
                S[3],
                S[4]
              ), B = W(
                k,
                C,
                S[1],
                S[2],
                S[3],
                S[4]
              ), D.iterator = F, D.angleFinder = B, D.length = G(F, k, C), k = S[3], C = S[4];
              break;
            case "Z":
            case "z":
              D.destX = _, D.destY = T, D.length = r(k, C, _, T), k = _, C = T;
              break;
          }
          x += D.length, P.push(D);
        }
        return P.push({ length: x, x: k, y: C }), P;
      }
      function N(p, x, b) {
        b || (b = H(p));
        for (var S = 0; x - b[S].length > 0 && S < b.length - 2; )
          x -= b[S].length, S++;
        var k = b[S], C = x / k.length, _ = k.command, T = p[S], P;
        switch (_) {
          case "M":
            return { x: k.x, y: k.y, angle: 0 };
          case "Z":
          case "z":
            return P = new f.Point(k.x, k.y).lerp(
              new f.Point(k.destX, k.destY),
              C
            ), P.angle = Math.atan2(k.destY - k.y, k.destX - k.x), P;
          case "L":
            return P = new f.Point(k.x, k.y).lerp(
              new f.Point(T[1], T[2]),
              C
            ), P.angle = Math.atan2(T[2] - k.y, T[1] - k.x), P;
          case "C":
            return V(k, x);
          case "Q":
            return V(k, x);
        }
      }
      function K(p) {
        var x = [], b = [], S, k, C = f.rePathCommand, _ = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", T = "(" + _ + ")" + f.commaWsp, P = "([01])" + f.commaWsp + "?", F = T + "?" + T + "?" + T + P + P + T + "?(" + _ + ")", D = new RegExp(F, "g"), B, Y, z;
        if (!p || !p.match)
          return x;
        z = p.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);
        for (var A = 0, O, j = z.length; A < j; A++) {
          S = z[A], Y = S.slice(1).trim(), b.length = 0;
          var R = S.charAt(0);
          if (O = [R], R.toLowerCase() === "a")
            for (var M; M = D.exec(Y); )
              for (var X = 1; X < M.length; X++)
                b.push(M[X]);
          else
            for (; B = C.exec(Y); )
              b.push(B[0]);
          for (var X = 0, U = b.length; X < U; X++)
            k = parseFloat(b[X]), isNaN(k) || O.push(k);
          var tt = s[R.toLowerCase()], Q = h[R] || R;
          if (O.length - 1 > tt)
            for (var I = 1, Z = O.length; I < Z; I += tt)
              x.push([R].concat(O.slice(I, I + tt))), R = Q;
          else
            x.push(O);
        }
        return x;
      }
      function $(p, x) {
        var b = [], S, k = new f.Point(p[0].x, p[0].y), C = new f.Point(p[1].x, p[1].y), _ = p.length, T = 1, P = 0, F = _ > 2;
        for (x = x || 0, F && (T = p[2].x < C.x ? -1 : p[2].x === C.x ? 0 : 1, P = p[2].y < C.y ? -1 : p[2].y === C.y ? 0 : 1), b.push(["M", k.x - T * x, k.y - P * x]), S = 1; S < _; S++) {
          if (!k.eq(C)) {
            var D = k.midPointFrom(C);
            b.push(["Q", k.x, k.y, D.x, D.y]);
          }
          k = p[S], S + 1 < p.length && (C = p[S + 1]);
        }
        return F && (T = k.x > p[S - 2].x ? 1 : k.x === p[S - 2].x ? 0 : -1, P = k.y > p[S - 2].y ? 1 : k.y === p[S - 2].y ? 0 : -1), b.push(["L", k.x + T * x, k.y + P * x]), b;
      }
      function J(p, x, b) {
        return b && (x = f.util.multiplyTransformMatrices(
          x,
          [1, 0, 0, 1, -b.x, -b.y]
        )), p.map(function(S) {
          for (var k = S.slice(0), C = {}, _ = 1; _ < S.length - 1; _ += 2)
            C.x = S[_], C.y = S[_ + 1], C = f.util.transformPoint(C, x), k[_] = C.x, k[_ + 1] = C.y;
          return k;
        });
      }
      f.util.joinPath = function(p) {
        return p.map(function(x) {
          return x.join(" ");
        }).join(" ");
      }, f.util.parsePath = K, f.util.makePathSimpler = a, f.util.getSmoothPathFromPoints = $, f.util.getPathSegmentsInfo = H, f.util.getBoundsOfCurve = t, f.util.getPointOnPath = N, f.util.transformPath = J;
    })(), (function() {
      var c = Array.prototype.slice;
      function s(t, n) {
        for (var a = c.call(arguments, 2), r = [], l = 0, u = t.length; l < u; l++)
          r[l] = a.length ? t[l][n].apply(t[l], a) : t[l][n].call(t[l]);
        return r;
      }
      function h(t, n) {
        return e(t, n, function(a, r) {
          return a >= r;
        });
      }
      function o(t, n) {
        return e(t, n, function(a, r) {
          return a < r;
        });
      }
      function i(t, n) {
        for (var a = t.length; a--; )
          t[a] = n;
        return t;
      }
      function e(t, n, a) {
        if (!(!t || t.length === 0)) {
          var r = t.length - 1, l = n ? t[r][n] : t[r];
          if (n)
            for (; r--; )
              a(t[r][n], l) && (l = t[r][n]);
          else
            for (; r--; )
              a(t[r], l) && (l = t[r]);
          return l;
        }
      }
      f.util.array = {
        fill: i,
        invoke: s,
        min: o,
        max: h
      };
    })(), (function() {
      function c(h, o, i) {
        if (i)
          if (!f.isLikelyNode && o instanceof Element)
            h = o;
          else if (o instanceof Array) {
            h = [];
            for (var e = 0, t = o.length; e < t; e++)
              h[e] = c({}, o[e], i);
          } else if (o && typeof o == "object")
            for (var n in o)
              n === "canvas" || n === "group" ? h[n] = null : o.hasOwnProperty(n) && (h[n] = c({}, o[n], i));
          else
            h = o;
        else
          for (var n in o)
            h[n] = o[n];
        return h;
      }
      function s(h, o) {
        return c({}, h, o);
      }
      f.util.object = {
        extend: c,
        clone: s
      }, f.util.object.extend(f.util, f.Observable);
    })(), (function() {
      function c(e) {
        return e.replace(/-+(.)?/g, function(t, n) {
          return n ? n.toUpperCase() : "";
        });
      }
      function s(e, t) {
        return e.charAt(0).toUpperCase() + (t ? e.slice(1) : e.slice(1).toLowerCase());
      }
      function h(e) {
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      function o(e) {
        var t = 0, n, a = [];
        for (t = 0, n; t < e.length; t++)
          (n = i(e, t)) !== !1 && a.push(n);
        return a;
      }
      function i(e, t) {
        var n = e.charCodeAt(t);
        if (isNaN(n))
          return "";
        if (n < 55296 || n > 57343)
          return e.charAt(t);
        if (55296 <= n && n <= 56319) {
          if (e.length <= t + 1)
            throw "High surrogate without following low surrogate";
          var a = e.charCodeAt(t + 1);
          if (56320 > a || a > 57343)
            throw "High surrogate without following low surrogate";
          return e.charAt(t) + e.charAt(t + 1);
        }
        if (t === 0)
          throw "Low surrogate without preceding high surrogate";
        var r = e.charCodeAt(t - 1);
        if (55296 > r || r > 56319)
          throw "Low surrogate without preceding high surrogate";
        return !1;
      }
      f.util.string = {
        camelize: c,
        capitalize: s,
        escapeXml: h,
        graphemeSplit: o
      };
    })(), (function() {
      var c = Array.prototype.slice, s = function() {
      }, h = (function() {
        for (var n in { toString: 1 })
          if (n === "toString")
            return !1;
        return !0;
      })(), o = function(n, a, r) {
        for (var l in a)
          l in n.prototype && typeof n.prototype[l] == "function" && (a[l] + "").indexOf("callSuper") > -1 ? n.prototype[l] = /* @__PURE__ */ (function(u) {
            return function() {
              var d = this.constructor.superclass;
              this.constructor.superclass = r;
              var g = a[u].apply(this, arguments);
              if (this.constructor.superclass = d, u !== "initialize")
                return g;
            };
          })(l) : n.prototype[l] = a[l], h && (a.toString !== Object.prototype.toString && (n.prototype.toString = a.toString), a.valueOf !== Object.prototype.valueOf && (n.prototype.valueOf = a.valueOf));
      };
      function i() {
      }
      function e(n) {
        for (var a = null, r = this; r.constructor.superclass; ) {
          var l = r.constructor.superclass.prototype[n];
          if (r[n] !== l) {
            a = l;
            break;
          }
          r = r.constructor.superclass.prototype;
        }
        return a ? arguments.length > 1 ? a.apply(this, c.call(arguments, 1)) : a.call(this) : console.log("tried to callSuper " + n + ", method not found in prototype chain", this);
      }
      function t() {
        var n = null, a = c.call(arguments, 0);
        typeof a[0] == "function" && (n = a.shift());
        function r() {
          this.initialize.apply(this, arguments);
        }
        r.superclass = n, r.subclasses = [], n && (i.prototype = n.prototype, r.prototype = new i(), n.subclasses.push(r));
        for (var l = 0, u = a.length; l < u; l++)
          o(r, a[l], n);
        return r.prototype.initialize || (r.prototype.initialize = s), r.prototype.constructor = r, r.prototype.callSuper = e, r;
      }
      f.util.createClass = t;
    })(), (function() {
      var c = !!f.document.createElement("div").attachEvent, s = ["touchstart", "touchmove", "touchend"];
      f.util.addListener = function(o, i, e, t) {
        o && o.addEventListener(i, e, c ? !1 : t);
      }, f.util.removeListener = function(o, i, e, t) {
        o && o.removeEventListener(i, e, c ? !1 : t);
      };
      function h(o) {
        var i = o.changedTouches;
        return i && i[0] ? i[0] : o;
      }
      f.util.getPointer = function(o) {
        var i = o.target, e = f.util.getScrollLeftTop(i), t = h(o);
        return {
          x: t.clientX + e.left,
          y: t.clientY + e.top
        };
      }, f.util.isTouchEvent = function(o) {
        return s.indexOf(o.type) > -1 || o.pointerType === "touch";
      };
    })(), (function() {
      function c(t, n) {
        var a = t.style;
        if (!a)
          return t;
        if (typeof n == "string")
          return t.style.cssText += ";" + n, n.indexOf("opacity") > -1 ? e(t, n.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
        for (var r in n)
          if (r === "opacity")
            e(t, n[r]);
          else {
            var l = r === "float" || r === "cssFloat" ? typeof a.styleFloat > "u" ? "cssFloat" : "styleFloat" : r;
            a.setProperty(l, n[r]);
          }
        return t;
      }
      var s = f.document.createElement("div"), h = typeof s.style.opacity == "string", o = typeof s.style.filter == "string", i = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, e = function(t) {
        return t;
      };
      h ? e = function(t, n) {
        return t.style.opacity = n, t;
      } : o && (e = function(t, n) {
        var a = t.style;
        return t.currentStyle && !t.currentStyle.hasLayout && (a.zoom = 1), i.test(a.filter) ? (n = n >= 0.9999 ? "" : "alpha(opacity=" + n * 100 + ")", a.filter = a.filter.replace(i, n)) : a.filter += " alpha(opacity=" + n * 100 + ")", t;
      }), f.util.setStyle = c;
    })(), (function() {
      var c = Array.prototype.slice;
      function s(g) {
        return typeof g == "string" ? f.document.getElementById(g) : g;
      }
      var h, o = function(g) {
        return c.call(g, 0);
      };
      try {
        h = o(f.document.childNodes) instanceof Array;
      } catch {
      }
      h || (o = function(g) {
        for (var m = new Array(g.length), v = g.length; v--; )
          m[v] = g[v];
        return m;
      });
      function i(g, m) {
        var v = f.document.createElement(g);
        for (var y in m)
          y === "class" ? v.className = m[y] : y === "for" ? v.htmlFor = m[y] : v.setAttribute(y, m[y]);
        return v;
      }
      function e(g, m) {
        g && (" " + g.className + " ").indexOf(" " + m + " ") === -1 && (g.className += (g.className ? " " : "") + m);
      }
      function t(g, m, v) {
        return typeof m == "string" && (m = i(m, v)), g.parentNode && g.parentNode.replaceChild(m, g), m.appendChild(g), m;
      }
      function n(g) {
        for (var m = 0, v = 0, y = f.document.documentElement, w = f.document.body || {
          scrollLeft: 0,
          scrollTop: 0
        }; g && (g.parentNode || g.host) && (g = g.parentNode || g.host, g === f.document ? (m = w.scrollLeft || y.scrollLeft || 0, v = w.scrollTop || y.scrollTop || 0) : (m += g.scrollLeft || 0, v += g.scrollTop || 0), !(g.nodeType === 1 && g.style.position === "fixed")); )
          ;
        return { left: m, top: v };
      }
      function a(g) {
        var m, v = g && g.ownerDocument, y = { left: 0, top: 0 }, w = { left: 0, top: 0 }, E, L = {
          borderLeftWidth: "left",
          borderTopWidth: "top",
          paddingLeft: "left",
          paddingTop: "top"
        };
        if (!v)
          return w;
        for (var W in L)
          w[L[W]] += parseInt(r(g, W), 10) || 0;
        return m = v.documentElement, typeof g.getBoundingClientRect < "u" && (y = g.getBoundingClientRect()), E = n(g), {
          left: y.left + E.left - (m.clientLeft || 0) + w.left,
          top: y.top + E.top - (m.clientTop || 0) + w.top
        };
      }
      var r;
      f.document.defaultView && f.document.defaultView.getComputedStyle ? r = function(g, m) {
        var v = f.document.defaultView.getComputedStyle(g, null);
        return v ? v[m] : void 0;
      } : r = function(g, m) {
        var v = g.style[m];
        return !v && g.currentStyle && (v = g.currentStyle[m]), v;
      }, (function() {
        var g = f.document.documentElement.style, m = "userSelect" in g ? "userSelect" : "MozUserSelect" in g ? "MozUserSelect" : "WebkitUserSelect" in g ? "WebkitUserSelect" : "KhtmlUserSelect" in g ? "KhtmlUserSelect" : "";
        function v(w) {
          return typeof w.onselectstart < "u" && (w.onselectstart = f.util.falseFunction), m ? w.style[m] = "none" : typeof w.unselectable == "string" && (w.unselectable = "on"), w;
        }
        function y(w) {
          return typeof w.onselectstart < "u" && (w.onselectstart = null), m ? w.style[m] = "" : typeof w.unselectable == "string" && (w.unselectable = ""), w;
        }
        f.util.makeElementUnselectable = v, f.util.makeElementSelectable = y;
      })();
      function l(g) {
        var m = f.jsdomImplForWrapper(g);
        return m._canvas || m._image;
      }
      function u(g) {
        if (f.isLikelyNode) {
          var m = f.jsdomImplForWrapper(g);
          m && (m._image = null, m._canvas = null, m._currentSrc = null, m._attributes = null, m._classList = null);
        }
      }
      function d(g, m) {
        g.imageSmoothingEnabled = g.imageSmoothingEnabled || g.webkitImageSmoothingEnabled || g.mozImageSmoothingEnabled || g.msImageSmoothingEnabled || g.oImageSmoothingEnabled, g.imageSmoothingEnabled = m;
      }
      f.util.setImageSmoothing = d, f.util.getById = s, f.util.toArray = o, f.util.addClass = e, f.util.makeElement = i, f.util.wrapElement = t, f.util.getScrollLeftTop = n, f.util.getElementOffset = a, f.util.getNodeCanvas = l, f.util.cleanUpJsdomNode = u;
    })(), (function() {
      function c(o, i) {
        return o + (/\?/.test(o) ? "&" : "?") + i;
      }
      function s() {
      }
      function h(o, i) {
        i || (i = {});
        var e = i.method ? i.method.toUpperCase() : "GET", t = i.onComplete || function() {
        }, n = new f.window.XMLHttpRequest(), a = i.body || i.parameters;
        return n.onreadystatechange = function() {
          n.readyState === 4 && (t(n), n.onreadystatechange = s);
        }, e === "GET" && (a = null, typeof i.parameters == "string" && (o = c(o, i.parameters))), n.open(e, o, !0), (e === "POST" || e === "PUT") && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(a), n;
      }
      f.util.request = h;
    })(), f.log = console.log, f.warn = console.warn, (function() {
      var c = f.util.object.extend, s = f.util.object.clone, h = [];
      f.util.object.extend(h, {
        /**
         * cancel all running animations at the next requestAnimFrame
         * @returns {AnimationContext[]}
         */
        cancelAll: function() {
          var l = this.splice(0);
          return l.forEach(function(u) {
            u.cancel();
          }), l;
        },
        /**
         * cancel all running animations attached to canvas at the next requestAnimFrame
         * @param {fabric.Canvas} canvas
         * @returns {AnimationContext[]}
         */
        cancelByCanvas: function(l) {
          if (!l)
            return [];
          var u = this.filter(function(d) {
            return typeof d.target == "object" && d.target.canvas === l;
          });
          return u.forEach(function(d) {
            d.cancel();
          }), u;
        },
        /**
         * cancel all running animations for target at the next requestAnimFrame
         * @param {*} target
         * @returns {AnimationContext[]}
         */
        cancelByTarget: function(l) {
          var u = this.findAnimationsByTarget(l);
          return u.forEach(function(d) {
            d.cancel();
          }), u;
        },
        /**
         *
         * @param {CancelFunction} cancelFunc the function returned by animate
         * @returns {number}
         */
        findAnimationIndex: function(l) {
          return this.indexOf(this.findAnimation(l));
        },
        /**
         *
         * @param {CancelFunction} cancelFunc the function returned by animate
         * @returns {AnimationContext | undefined} animation's options object
         */
        findAnimation: function(l) {
          return this.find(function(u) {
            return u.cancel === l;
          });
        },
        /**
         *
         * @param {*} target the object that is assigned to the target property of the animation context
         * @returns {AnimationContext[]} array of animation options object associated with target
         */
        findAnimationsByTarget: function(l) {
          return l ? this.filter(function(u) {
            return u.target === l;
          }) : [];
        }
      });
      function o() {
        return !1;
      }
      function i(l, u, d, g) {
        return -d * Math.cos(l / g * (Math.PI / 2)) + d + u;
      }
      function e(l) {
        l || (l = {});
        var u = !1, d, g = function() {
          var m = f.runningAnimations.indexOf(d);
          return m > -1 && f.runningAnimations.splice(m, 1)[0];
        };
        return d = c(s(l), {
          cancel: function() {
            return u = !0, g();
          },
          currentValue: "startValue" in l ? l.startValue : 0,
          completionRate: 0,
          durationRate: 0
        }), f.runningAnimations.push(d), a(function(m) {
          var v = m || +/* @__PURE__ */ new Date(), y = l.duration || 500, w = v + y, E, L = l.onChange || o, W = l.abort || o, G = l.onComplete || o, V = l.easing || i, H = "startValue" in l ? l.startValue.length > 0 : !1, N = "startValue" in l ? l.startValue : 0, K = "endValue" in l ? l.endValue : 100, $ = l.byValue || (H ? N.map(function(J, p) {
            return K[p] - N[p];
          }) : K - N);
          l.onStart && l.onStart(), (function J(p) {
            E = p || +/* @__PURE__ */ new Date();
            var x = E > w ? y : E - v, b = x / y, S = H ? N.map(function(C, _) {
              return V(x, N[_], $[_], y);
            }) : V(x, N, $, y), k = Math.abs(H ? (S[0] - N[0]) / $[0] : (S - N) / $);
            if (d.currentValue = H ? S.slice() : S, d.completionRate = k, d.durationRate = b, !u) {
              if (W(S, k, b)) {
                g();
                return;
              }
              if (E > w) {
                d.currentValue = H ? K.slice() : K, d.completionRate = 1, d.durationRate = 1, L(H ? K.slice() : K, 1, 1), G(K, 1, 1), g();
                return;
              } else
                L(S, k, b), a(J);
            }
          })(v);
        }), d.cancel;
      }
      var t = f.window.requestAnimationFrame || f.window.webkitRequestAnimationFrame || f.window.mozRequestAnimationFrame || f.window.oRequestAnimationFrame || f.window.msRequestAnimationFrame || function(l) {
        return f.window.setTimeout(l, 1e3 / 60);
      }, n = f.window.cancelAnimationFrame || f.window.clearTimeout;
      function a() {
        return t.apply(f.window, arguments);
      }
      function r() {
        return n.apply(f.window, arguments);
      }
      f.util.animate = e, f.util.requestAnimFrame = a, f.util.cancelAnimFrame = r, f.runningAnimations = h;
    })(), (function() {
      function c(h, o, i) {
        var e = "rgba(" + parseInt(h[0] + i * (o[0] - h[0]), 10) + "," + parseInt(h[1] + i * (o[1] - h[1]), 10) + "," + parseInt(h[2] + i * (o[2] - h[2]), 10);
        return e += "," + (h && o ? parseFloat(h[3] + i * (o[3] - h[3])) : 1), e += ")", e;
      }
      function s(h, o, i, e) {
        var t = new f.Color(h).getSource(), n = new f.Color(o).getSource(), a = e.onComplete, r = e.onChange;
        return e = e || {}, f.util.animate(f.util.object.extend(e, {
          duration: i || 500,
          startValue: t,
          endValue: n,
          byValue: n,
          easing: function(l, u, d, g) {
            var m = e.colorEasing ? e.colorEasing(l, g) : 1 - Math.cos(l / g * (Math.PI / 2));
            return c(u, d, m);
          },
          // has to take in account for color restoring;
          onComplete: function(l, u, d) {
            if (a)
              return a(
                c(n, n, 0),
                u,
                d
              );
          },
          onChange: function(l, u, d) {
            if (r) {
              if (Array.isArray(l))
                return r(
                  c(l, l, 0),
                  u,
                  d
                );
              r(l, u, d);
            }
          }
        }));
      }
      f.util.animateColor = s;
    })(), (function() {
      function c(p, x, b, S) {
        return p < Math.abs(x) ? (p = x, S = b / 4) : x === 0 && p === 0 ? S = b / (2 * Math.PI) * Math.asin(1) : S = b / (2 * Math.PI) * Math.asin(x / p), { a: p, c: x, p: b, s: S };
      }
      function s(p, x, b) {
        return p.a * Math.pow(2, 10 * (x -= 1)) * Math.sin((x * b - p.s) * (2 * Math.PI) / p.p);
      }
      function h(p, x, b, S) {
        return b * ((p = p / S - 1) * p * p + 1) + x;
      }
      function o(p, x, b, S) {
        return p /= S / 2, p < 1 ? b / 2 * p * p * p + x : b / 2 * ((p -= 2) * p * p + 2) + x;
      }
      function i(p, x, b, S) {
        return b * (p /= S) * p * p * p + x;
      }
      function e(p, x, b, S) {
        return -b * ((p = p / S - 1) * p * p * p - 1) + x;
      }
      function t(p, x, b, S) {
        return p /= S / 2, p < 1 ? b / 2 * p * p * p * p + x : -b / 2 * ((p -= 2) * p * p * p - 2) + x;
      }
      function n(p, x, b, S) {
        return b * (p /= S) * p * p * p * p + x;
      }
      function a(p, x, b, S) {
        return b * ((p = p / S - 1) * p * p * p * p + 1) + x;
      }
      function r(p, x, b, S) {
        return p /= S / 2, p < 1 ? b / 2 * p * p * p * p * p + x : b / 2 * ((p -= 2) * p * p * p * p + 2) + x;
      }
      function l(p, x, b, S) {
        return -b * Math.cos(p / S * (Math.PI / 2)) + b + x;
      }
      function u(p, x, b, S) {
        return b * Math.sin(p / S * (Math.PI / 2)) + x;
      }
      function d(p, x, b, S) {
        return -b / 2 * (Math.cos(Math.PI * p / S) - 1) + x;
      }
      function g(p, x, b, S) {
        return p === 0 ? x : b * Math.pow(2, 10 * (p / S - 1)) + x;
      }
      function m(p, x, b, S) {
        return p === S ? x + b : b * (-Math.pow(2, -10 * p / S) + 1) + x;
      }
      function v(p, x, b, S) {
        return p === 0 ? x : p === S ? x + b : (p /= S / 2, p < 1 ? b / 2 * Math.pow(2, 10 * (p - 1)) + x : b / 2 * (-Math.pow(2, -10 * --p) + 2) + x);
      }
      function y(p, x, b, S) {
        return -b * (Math.sqrt(1 - (p /= S) * p) - 1) + x;
      }
      function w(p, x, b, S) {
        return b * Math.sqrt(1 - (p = p / S - 1) * p) + x;
      }
      function E(p, x, b, S) {
        return p /= S / 2, p < 1 ? -b / 2 * (Math.sqrt(1 - p * p) - 1) + x : b / 2 * (Math.sqrt(1 - (p -= 2) * p) + 1) + x;
      }
      function L(p, x, b, S) {
        var k = 1.70158, C = 0, _ = b;
        if (p === 0)
          return x;
        if (p /= S, p === 1)
          return x + b;
        C || (C = S * 0.3);
        var T = c(_, b, C, k);
        return -s(T, p, S) + x;
      }
      function W(p, x, b, S) {
        var k = 1.70158, C = 0, _ = b;
        if (p === 0)
          return x;
        if (p /= S, p === 1)
          return x + b;
        C || (C = S * 0.3);
        var T = c(_, b, C, k);
        return T.a * Math.pow(2, -10 * p) * Math.sin((p * S - T.s) * (2 * Math.PI) / T.p) + T.c + x;
      }
      function G(p, x, b, S) {
        var k = 1.70158, C = 0, _ = b;
        if (p === 0)
          return x;
        if (p /= S / 2, p === 2)
          return x + b;
        C || (C = S * (0.3 * 1.5));
        var T = c(_, b, C, k);
        return p < 1 ? -0.5 * s(T, p, S) + x : T.a * Math.pow(2, -10 * (p -= 1)) * Math.sin((p * S - T.s) * (2 * Math.PI) / T.p) * 0.5 + T.c + x;
      }
      function V(p, x, b, S, k) {
        return k === void 0 && (k = 1.70158), b * (p /= S) * p * ((k + 1) * p - k) + x;
      }
      function H(p, x, b, S, k) {
        return k === void 0 && (k = 1.70158), b * ((p = p / S - 1) * p * ((k + 1) * p + k) + 1) + x;
      }
      function N(p, x, b, S, k) {
        return k === void 0 && (k = 1.70158), p /= S / 2, p < 1 ? b / 2 * (p * p * (((k *= 1.525) + 1) * p - k)) + x : b / 2 * ((p -= 2) * p * (((k *= 1.525) + 1) * p + k) + 2) + x;
      }
      function K(p, x, b, S) {
        return b - $(S - p, 0, b, S) + x;
      }
      function $(p, x, b, S) {
        return (p /= S) < 1 / 2.75 ? b * (7.5625 * p * p) + x : p < 2 / 2.75 ? b * (7.5625 * (p -= 1.5 / 2.75) * p + 0.75) + x : p < 2.5 / 2.75 ? b * (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375) + x : b * (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375) + x;
      }
      function J(p, x, b, S) {
        return p < S / 2 ? K(p * 2, 0, b, S) * 0.5 + x : $(p * 2 - S, 0, b, S) * 0.5 + b * 0.5 + x;
      }
      f.util.ease = {
        /**
         * Quadratic easing in
         * @memberOf fabric.util.ease
         */
        easeInQuad: function(p, x, b, S) {
          return b * (p /= S) * p + x;
        },
        /**
         * Quadratic easing out
         * @memberOf fabric.util.ease
         */
        easeOutQuad: function(p, x, b, S) {
          return -b * (p /= S) * (p - 2) + x;
        },
        /**
         * Quadratic easing in and out
         * @memberOf fabric.util.ease
         */
        easeInOutQuad: function(p, x, b, S) {
          return p /= S / 2, p < 1 ? b / 2 * p * p + x : -b / 2 * (--p * (p - 2) - 1) + x;
        },
        /**
         * Cubic easing in
         * @memberOf fabric.util.ease
         */
        easeInCubic: function(p, x, b, S) {
          return b * (p /= S) * p * p + x;
        },
        easeOutCubic: h,
        easeInOutCubic: o,
        easeInQuart: i,
        easeOutQuart: e,
        easeInOutQuart: t,
        easeInQuint: n,
        easeOutQuint: a,
        easeInOutQuint: r,
        easeInSine: l,
        easeOutSine: u,
        easeInOutSine: d,
        easeInExpo: g,
        easeOutExpo: m,
        easeInOutExpo: v,
        easeInCirc: y,
        easeOutCirc: w,
        easeInOutCirc: E,
        easeInElastic: L,
        easeOutElastic: W,
        easeInOutElastic: G,
        easeInBack: V,
        easeOutBack: H,
        easeInOutBack: N,
        easeInBounce: K,
        easeOutBounce: $,
        easeInOutBounce: J
      };
    })(), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, i = s.util.toFixed, e = s.util.parseUnit, t = s.util.multiplyTransformMatrices, n = [
        "path",
        "circle",
        "polygon",
        "polyline",
        "ellipse",
        "rect",
        "line",
        "image",
        "text"
      ], a = ["symbol", "image", "marker", "pattern", "view", "svg"], r = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"], l = ["symbol", "g", "a", "svg", "clipPath", "defs"], u = {
        cx: "left",
        x: "left",
        r: "radius",
        cy: "top",
        y: "top",
        display: "visible",
        visibility: "visible",
        transform: "transformMatrix",
        "fill-opacity": "fillOpacity",
        "fill-rule": "fillRule",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "letter-spacing": "charSpacing",
        "paint-order": "paintFirst",
        "stroke-dasharray": "strokeDashArray",
        "stroke-dashoffset": "strokeDashOffset",
        "stroke-linecap": "strokeLineCap",
        "stroke-linejoin": "strokeLineJoin",
        "stroke-miterlimit": "strokeMiterLimit",
        "stroke-opacity": "strokeOpacity",
        "stroke-width": "strokeWidth",
        "text-decoration": "textDecoration",
        "text-anchor": "textAnchor",
        opacity: "opacity",
        "clip-path": "clipPath",
        "clip-rule": "clipRule",
        "vector-effect": "strokeUniform",
        "image-rendering": "imageSmoothing"
      }, d = {
        stroke: "strokeOpacity",
        fill: "fillOpacity"
      }, g = "font-size", m = "clip-path";
      s.svgValidTagNamesRegEx = w(n), s.svgViewBoxElementsRegEx = w(a), s.svgInvalidAncestorsRegEx = w(r), s.svgValidParentsRegEx = w(l), s.cssRules = {}, s.gradientDefs = {}, s.clipPaths = {};
      function v(C) {
        return C in u ? u[C] : C;
      }
      function y(C, _, T, P) {
        var F = Array.isArray(_), D;
        if ((C === "fill" || C === "stroke") && _ === "none")
          _ = "";
        else {
          if (C === "strokeUniform")
            return _ === "non-scaling-stroke";
          if (C === "strokeDashArray")
            _ === "none" ? _ = null : _ = _.replace(/,/g, " ").split(/\s+/).map(parseFloat);
          else if (C === "transformMatrix")
            T && T.transformMatrix ? _ = t(
              T.transformMatrix,
              s.parseTransformAttribute(_)
            ) : _ = s.parseTransformAttribute(_);
          else if (C === "visible")
            _ = _ !== "none" && _ !== "hidden", T && T.visible === !1 && (_ = !1);
          else if (C === "opacity")
            _ = parseFloat(_), T && typeof T.opacity < "u" && (_ *= T.opacity);
          else if (C === "textAnchor")
            _ = _ === "start" ? "left" : _ === "end" ? "right" : "center";
          else if (C === "charSpacing")
            D = e(_, P) / P * 1e3;
          else if (C === "paintFirst") {
            var B = _.indexOf("fill"), Y = _.indexOf("stroke"), _ = "fill";
            (B > -1 && Y > -1 && Y < B || B === -1 && Y > -1) && (_ = "stroke");
          } else {
            if (C === "href" || C === "xlink:href" || C === "font")
              return _;
            if (C === "imageSmoothing")
              return _ === "optimizeQuality";
            D = F ? _.map(e) : e(_, P);
          }
        }
        return !F && isNaN(D) ? _ : D;
      }
      function w(C) {
        return new RegExp("^(" + C.join("|") + ")\\b", "i");
      }
      function E(C) {
        for (var _ in d)
          if (!(typeof C[d[_]] > "u" || C[_] === "")) {
            if (typeof C[_] > "u") {
              if (!s.Object.prototype[_])
                continue;
              C[_] = s.Object.prototype[_];
            }
            if (C[_].indexOf("url(") !== 0) {
              var T = new s.Color(C[_]);
              C[_] = T.setAlpha(i(T.getAlpha() * C[d[_]], 2)).toRgba();
            }
          }
        return C;
      }
      function L(C, _) {
        var T, P = [], F, D, B;
        for (D = 0, B = _.length; D < B; D++)
          T = _[D], F = C.getElementsByTagName(T), P = P.concat(Array.prototype.slice.call(F));
        return P;
      }
      s.parseTransformAttribute = (function() {
        function C(I, Z) {
          var et = s.util.cos(Z[0]), rt = s.util.sin(Z[0]), ht = 0, st = 0;
          Z.length === 3 && (ht = Z[1], st = Z[2]), I[0] = et, I[1] = rt, I[2] = -rt, I[3] = et, I[4] = ht - (et * ht - rt * st), I[5] = st - (rt * ht + et * st);
        }
        function _(I, Z) {
          var et = Z[0], rt = Z.length === 2 ? Z[1] : Z[0];
          I[0] = et, I[3] = rt;
        }
        function T(I, Z, et) {
          I[et] = Math.tan(s.util.degreesToRadians(Z[0]));
        }
        function P(I, Z) {
          I[4] = Z[0], Z.length === 2 && (I[5] = Z[1]);
        }
        var F = s.iMatrix, D = s.reNum, B = s.commaWsp, Y = "(?:(skewX)\\s*\\(\\s*(" + D + ")\\s*\\))", z = "(?:(skewY)\\s*\\(\\s*(" + D + ")\\s*\\))", A = "(?:(rotate)\\s*\\(\\s*(" + D + ")(?:" + B + "(" + D + ")" + B + "(" + D + "))?\\s*\\))", O = "(?:(scale)\\s*\\(\\s*(" + D + ")(?:" + B + "(" + D + "))?\\s*\\))", j = "(?:(translate)\\s*\\(\\s*(" + D + ")(?:" + B + "(" + D + "))?\\s*\\))", R = "(?:(matrix)\\s*\\(\\s*(" + D + ")" + B + "(" + D + ")" + B + "(" + D + ")" + B + "(" + D + ")" + B + "(" + D + ")" + B + "(" + D + ")\\s*\\))", M = "(?:" + R + "|" + j + "|" + O + "|" + A + "|" + Y + "|" + z + ")", X = "(?:" + M + "(?:" + B + "*" + M + ")*)", U = "^\\s*(?:" + X + "?)\\s*$", tt = new RegExp(U), Q = new RegExp(M, "g");
        return function(I) {
          var Z = F.concat(), et = [];
          if (!I || I && !tt.test(I))
            return Z;
          I.replace(Q, function(ht) {
            var st = new RegExp(M).exec(ht).filter(function(pt) {
              return !!pt;
            }), ct = st[1], lt = st.slice(2).map(parseFloat);
            switch (ct) {
              case "translate":
                P(Z, lt);
                break;
              case "rotate":
                lt[0] = s.util.degreesToRadians(lt[0]), C(Z, lt);
                break;
              case "scale":
                _(Z, lt);
                break;
              case "skewX":
                T(Z, lt, 2);
                break;
              case "skewY":
                T(Z, lt, 1);
                break;
              case "matrix":
                Z = lt;
                break;
            }
            et.push(Z.concat()), Z = F.concat();
          });
          for (var rt = et[0]; et.length > 1; )
            et.shift(), rt = s.util.multiplyTransformMatrices(rt, et[0]);
          return rt;
        };
      })();
      function W(C, _) {
        var T, P;
        C.replace(/;\s*$/, "").split(";").forEach(function(F) {
          var D = F.split(":");
          T = D[0].trim().toLowerCase(), P = D[1].trim(), _[T] = P;
        });
      }
      function G(C, _) {
        var T, P;
        for (var F in C)
          typeof C[F] > "u" || (T = F.toLowerCase(), P = C[F], _[T] = P);
      }
      function V(C, _) {
        var T = {};
        for (var P in s.cssRules[_])
          if (H(C, P.split(" ")))
            for (var F in s.cssRules[_][P])
              T[F] = s.cssRules[_][P][F];
        return T;
      }
      function H(C, _) {
        var T, P = !0;
        return T = K(C, _.pop()), T && _.length && (P = N(C, _)), T && P && _.length === 0;
      }
      function N(C, _) {
        for (var T, P = !0; C.parentNode && C.parentNode.nodeType === 1 && _.length; )
          P && (T = _.pop()), C = C.parentNode, P = K(C, T);
        return _.length === 0;
      }
      function K(C, _) {
        var T = C.nodeName, P = C.getAttribute("class"), F = C.getAttribute("id"), D, B;
        if (D = new RegExp("^" + T, "i"), _ = _.replace(D, ""), F && _.length && (D = new RegExp("#" + F + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(D, "")), P && _.length)
          for (P = P.split(" "), B = P.length; B--; )
            D = new RegExp("\\." + P[B] + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(D, "");
        return _.length === 0;
      }
      function $(C, _) {
        var T;
        if (C.getElementById && (T = C.getElementById(_)), T)
          return T;
        var P, F, D, B = C.getElementsByTagName("*");
        for (F = 0, D = B.length; F < D; F++)
          if (P = B[F], _ === P.getAttribute("id"))
            return P;
      }
      function J(C) {
        for (var _ = L(C, ["use", "svg:use"]), T = 0; _.length && T < _.length; ) {
          var P = _[T], F = P.getAttribute("xlink:href") || P.getAttribute("href");
          if (F === null)
            return;
          var D = F.slice(1), B = P.getAttribute("x") || 0, Y = P.getAttribute("y") || 0, z = $(C, D).cloneNode(!0), A = (z.getAttribute("transform") || "") + " translate(" + B + ", " + Y + ")", O, j = _.length, R, M, X, U, tt = s.svgNS;
          if (x(z), /^svg$/i.test(z.nodeName)) {
            var Q = z.ownerDocument.createElementNS(tt, "g");
            for (M = 0, X = z.attributes, U = X.length; M < U; M++)
              R = X.item(M), Q.setAttributeNS(tt, R.nodeName, R.nodeValue);
            for (; z.firstChild; )
              Q.appendChild(z.firstChild);
            z = Q;
          }
          for (M = 0, X = P.attributes, U = X.length; M < U; M++)
            R = X.item(M), !(R.nodeName === "x" || R.nodeName === "y" || R.nodeName === "xlink:href" || R.nodeName === "href") && (R.nodeName === "transform" ? A = R.nodeValue + " " + A : z.setAttribute(R.nodeName, R.nodeValue));
          z.setAttribute("transform", A), z.setAttribute("instantiated_by_use", "1"), z.removeAttribute("id"), O = P.parentNode, O.replaceChild(z, P), _.length === j && T++;
        }
      }
      var p = new RegExp(
        "^\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*$"
      );
      function x(C) {
        if (!s.svgViewBoxElementsRegEx.test(C.nodeName))
          return {};
        var _ = C.getAttribute("viewBox"), T = 1, P = 1, F = 0, D = 0, B, Y, z, A, O = C.getAttribute("width"), j = C.getAttribute("height"), R = C.getAttribute("x") || 0, M = C.getAttribute("y") || 0, X = C.getAttribute("preserveAspectRatio") || "", U = !_ || !(_ = _.match(p)), tt = !O || !j || O === "100%" || j === "100%", Q = U && tt, I = {}, Z = "", et = 0, rt = 0;
        if (I.width = 0, I.height = 0, I.toBeParsed = Q, U && (R || M) && C.parentNode && C.parentNode.nodeName !== "#document" && (Z = " translate(" + e(R) + " " + e(M) + ") ", z = (C.getAttribute("transform") || "") + Z, C.setAttribute("transform", z), C.removeAttribute("x"), C.removeAttribute("y")), Q)
          return I;
        if (U)
          return I.width = e(O), I.height = e(j), I;
        if (F = -parseFloat(_[1]), D = -parseFloat(_[2]), B = parseFloat(_[3]), Y = parseFloat(_[4]), I.minX = F, I.minY = D, I.viewBoxWidth = B, I.viewBoxHeight = Y, tt ? (I.width = B, I.height = Y) : (I.width = e(O), I.height = e(j), T = I.width / B, P = I.height / Y), X = s.util.parsePreserveAspectRatioAttribute(X), X.alignX !== "none" && (X.meetOrSlice === "meet" && (P = T = T > P ? P : T), X.meetOrSlice === "slice" && (P = T = T > P ? T : P), et = I.width - B * T, rt = I.height - Y * T, X.alignX === "Mid" && (et /= 2), X.alignY === "Mid" && (rt /= 2), X.alignX === "Min" && (et = 0), X.alignY === "Min" && (rt = 0)), T === 1 && P === 1 && F === 0 && D === 0 && R === 0 && M === 0)
          return I;
        if ((R || M) && C.parentNode.nodeName !== "#document" && (Z = " translate(" + e(R) + " " + e(M) + ") "), z = Z + " matrix(" + T + " 0 0 " + P + " " + (F * T + et) + " " + (D * P + rt) + ") ", C.nodeName === "svg") {
          for (A = C.ownerDocument.createElementNS(s.svgNS, "g"); C.firstChild; )
            A.appendChild(C.firstChild);
          C.appendChild(A);
        } else
          A = C, A.removeAttribute("x"), A.removeAttribute("y"), z = A.getAttribute("transform") + z;
        return A.setAttribute("transform", z), I;
      }
      function b(C, _) {
        for (; C && (C = C.parentNode); )
          if (C.nodeName && _.test(C.nodeName.replace("svg:", "")) && !C.getAttribute("instantiated_by_use"))
            return !0;
        return !1;
      }
      s.parseSVGDocument = function(C, _, T, P) {
        if (C) {
          J(C);
          var F = s.Object.__uid++, D, B, Y = x(C), z = s.util.toArray(C.getElementsByTagName("*"));
          if (Y.crossOrigin = P && P.crossOrigin, Y.svgUid = F, z.length === 0 && s.isLikelyNode) {
            z = C.selectNodes('//*[name(.)!="svg"]');
            var A = [];
            for (D = 0, B = z.length; D < B; D++)
              A[D] = z[D];
            z = A;
          }
          var O = z.filter(function(R) {
            return x(R), s.svgValidTagNamesRegEx.test(R.nodeName.replace("svg:", "")) && !b(R, s.svgInvalidAncestorsRegEx);
          });
          if (!O || O && !O.length) {
            _ && _([], {});
            return;
          }
          var j = {};
          z.filter(function(R) {
            return R.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(R) {
            var M = R.getAttribute("id");
            j[M] = s.util.toArray(R.getElementsByTagName("*")).filter(function(X) {
              return s.svgValidTagNamesRegEx.test(X.nodeName.replace("svg:", ""));
            });
          }), s.gradientDefs[F] = s.getGradientDefs(C), s.cssRules[F] = s.getCSSRules(C), s.clipPaths[F] = j, s.parseElements(O, function(R, M) {
            _ && (_(R, Y, M, z), delete s.gradientDefs[F], delete s.cssRules[F], delete s.clipPaths[F]);
          }, o(Y), T, P);
        }
      };
      function S(C, _) {
        var T = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"], P = "xlink:href", F = _.getAttribute(P).slice(1), D = $(C, F);
        if (D && D.getAttribute(P) && S(C, D), T.forEach(function(Y) {
          D && !_.hasAttribute(Y) && D.hasAttribute(Y) && _.setAttribute(Y, D.getAttribute(Y));
        }), !_.children.length)
          for (var B = D.cloneNode(!0); B.firstChild; )
            _.appendChild(B.firstChild);
        _.removeAttribute(P);
      }
      var k = new RegExp(
        "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + s.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + s.reNum + "))?\\s+(.*)"
      );
      h(s, {
        /**
         * Parses a short font declaration, building adding its properties to a style object
         * @static
         * @function
         * @memberOf fabric
         * @param {String} value font declaration
         * @param {Object} oStyle definition
         */
        parseFontDeclaration: function(C, _) {
          var T = C.match(k);
          if (T) {
            var P = T[1], F = T[3], D = T[4], B = T[5], Y = T[6];
            P && (_.fontStyle = P), F && (_.fontWeight = isNaN(parseFloat(F)) ? F : parseFloat(F)), D && (_.fontSize = e(D)), Y && (_.fontFamily = Y), B && (_.lineHeight = B === "normal" ? 1 : B);
          }
        },
        /**
         * Parses an SVG document, returning all of the gradient declarations found in it
         * @static
         * @function
         * @memberOf fabric
         * @param {SVGDocument} doc SVG document to parse
         * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
         */
        getGradientDefs: function(C) {
          var _ = [
            "linearGradient",
            "radialGradient",
            "svg:linearGradient",
            "svg:radialGradient"
          ], T = L(C, _), P, F = 0, D = {};
          for (F = T.length; F--; )
            P = T[F], P.getAttribute("xlink:href") && S(C, P), D[P.getAttribute("id")] = P;
          return D;
        },
        /**
         * Returns an object of attributes' name/value, given element and an array of attribute names;
         * Parses parent "g" nodes recursively upwards.
         * @static
         * @memberOf fabric
         * @param {DOMElement} element Element to parse
         * @param {Array} attributes Array of attributes to parse
         * @return {Object} object containing parsed attributes' names/values
         */
        parseAttributes: function(C, _, T) {
          if (C) {
            var P, F = {}, D, B;
            typeof T > "u" && (T = C.getAttribute("svgUid")), C.parentNode && s.svgValidParentsRegEx.test(C.parentNode.nodeName) && (F = s.parseAttributes(C.parentNode, _, T));
            var Y = _.reduce(function(X, U) {
              return P = C.getAttribute(U), P && (X[U] = P), X;
            }, {}), z = h(
              V(C, T),
              s.parseStyleAttribute(C)
            );
            Y = h(
              Y,
              z
            ), z[m] && C.setAttribute(m, z[m]), D = B = F.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE, Y[g] && (Y[g] = D = e(Y[g], B));
            var A, O, j = {};
            for (var R in Y)
              A = v(R), O = y(A, Y[R], F, D), j[A] = O;
            j && j.font && s.parseFontDeclaration(j.font, j);
            var M = h(F, j);
            return s.svgValidParentsRegEx.test(C.nodeName) ? M : E(M);
          }
        },
        /**
         * Transforms an array of svg elements to corresponding fabric.* instances
         * @static
         * @memberOf fabric
         * @param {Array} elements Array of elements to parse
         * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
         * @param {Object} [options] Options object
         * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
         */
        parseElements: function(C, _, T, P, F) {
          new s.ElementsParser(C, _, T, P, F).parse();
        },
        /**
         * Parses "style" attribute, retuning an object with values
         * @static
         * @memberOf fabric
         * @param {SVGElement} element Element to parse
         * @return {Object} Objects with values parsed from style attribute of an element
         */
        parseStyleAttribute: function(C) {
          var _ = {}, T = C.getAttribute("style");
          return T && (typeof T == "string" ? W(T, _) : G(T, _)), _;
        },
        /**
         * Parses "points" attribute, returning an array of values
         * @static
         * @memberOf fabric
         * @param {String} points points attribute string
         * @return {Array} array of points
         */
        parsePointsAttribute: function(C) {
          if (!C)
            return null;
          C = C.replace(/,/g, " ").trim(), C = C.split(/\s+/);
          var _ = [], T, P;
          for (T = 0, P = C.length; T < P; T += 2)
            _.push({
              x: parseFloat(C[T]),
              y: parseFloat(C[T + 1])
            });
          return _;
        },
        /**
         * Returns CSS rules for a given SVG document
         * @static
         * @function
         * @memberOf fabric
         * @param {SVGDocument} doc SVG document to parse
         * @return {Object} CSS rules of this document
         */
        getCSSRules: function(C) {
          var _ = C.getElementsByTagName("style"), T, P, F = {}, D;
          for (T = 0, P = _.length; T < P; T++) {
            var B = _[T].textContent;
            B = B.replace(/\/\*[\s\S]*?\*\//g, ""), B.trim() !== "" && (D = B.split("}"), D = D.filter(function(Y) {
              return Y.trim();
            }), D.forEach(function(Y) {
              var z = Y.split("{"), A = {}, O = z[1].trim(), j = O.split(";").filter(function(U) {
                return U.trim();
              });
              for (T = 0, P = j.length; T < P; T++) {
                var R = j[T].split(":"), M = R[0].trim(), X = R[1].trim();
                A[M] = X;
              }
              Y = z[0].trim(), Y.split(",").forEach(function(U) {
                U = U.replace(/^svg/i, "").trim(), U !== "" && (F[U] ? s.util.object.extend(F[U], A) : F[U] = s.util.object.clone(A));
              });
            }));
          }
          return F;
        },
        /**
         * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
         * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
         * @memberOf fabric
         * @param {String} url
         * @param {Function} callback
         * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
         * @param {Object} [options] Object containing options for parsing
         * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
         */
        loadSVGFromURL: function(C, _, T, P) {
          C = C.replace(/^\n\s*/, "").trim(), new s.util.request(C, {
            method: "get",
            onComplete: F
          });
          function F(D) {
            var B = D.responseXML;
            if (!B || !B.documentElement)
              return _ && _(null), !1;
            s.parseSVGDocument(B.documentElement, function(Y, z, A, O) {
              _ && _(Y, z, A, O);
            }, T, P);
          }
        },
        /**
         * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
         * @memberOf fabric
         * @param {String} string
         * @param {Function} callback
         * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
         * @param {Object} [options] Object containing options for parsing
         * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
         */
        loadSVGFromString: function(C, _, T, P) {
          var F = new s.window.DOMParser(), D = F.parseFromString(C.trim(), "text/xml");
          s.parseSVGDocument(D.documentElement, function(B, Y, z, A) {
            _(B, Y, z, A);
          }, T, P);
        }
      });
    })(q), f.ElementsParser = function(c, s, h, o, i, e) {
      this.elements = c, this.callback = s, this.options = h, this.reviver = o, this.svgUid = h && h.svgUid || 0, this.parsingOptions = i, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = e;
    }, (function(c) {
      c.parse = function() {
        this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
      }, c.createObjects = function() {
        var s = this;
        this.elements.forEach(function(h, o) {
          h.setAttribute("svgUid", s.svgUid), s.createObject(h, o);
        });
      }, c.findTag = function(s) {
        return f[f.util.string.capitalize(s.tagName.replace("svg:", ""))];
      }, c.createObject = function(s, h) {
        var o = this.findTag(s);
        if (o && o.fromElement)
          try {
            o.fromElement(s, this.createCallback(h, s), this.options);
          } catch (i) {
            f.log(i);
          }
        else
          this.checkIfDone();
      }, c.createCallback = function(s, h) {
        var o = this;
        return function(i) {
          var e;
          o.resolveGradient(i, h, "fill"), o.resolveGradient(i, h, "stroke"), i instanceof f.Image && i._originalElement && (e = i.parsePreserveAspectRatioAttribute(h)), i._removeTransformMatrix(e), o.resolveClipPath(i, h), o.reviver && o.reviver(h, i), o.instances[s] = i, o.checkIfDone();
        };
      }, c.extractPropertyDefinition = function(s, h, o) {
        var i = s[h], e = this.regexUrl;
        if (e.test(i)) {
          e.lastIndex = 0;
          var t = e.exec(i)[1];
          return e.lastIndex = 0, f[o][this.svgUid][t];
        }
      }, c.resolveGradient = function(s, h, o) {
        var i = this.extractPropertyDefinition(s, o, "gradientDefs");
        if (i) {
          var e = h.getAttribute(o + "-opacity"), t = f.Gradient.fromElement(i, s, e, this.options);
          s.set(o, t);
        }
      }, c.createClipPathCallback = function(s, h) {
        return function(o) {
          o._removeTransformMatrix(), o.fillRule = o.clipRule, h.push(o);
        };
      }, c.resolveClipPath = function(s, h) {
        var o = this.extractPropertyDefinition(s, "clipPath", "clipPaths"), i, e, t, n, a, r;
        if (o) {
          n = [], t = f.util.invertTransform(s.calcTransformMatrix());
          for (var l = o[0].parentNode, u = h; u.parentNode && u.getAttribute("clip-path") !== s.clipPath; )
            u = u.parentNode;
          u.parentNode.appendChild(l);
          for (var d = 0; d < o.length; d++)
            i = o[d], e = this.findTag(i), e.fromElement(
              i,
              this.createClipPathCallback(s, n),
              this.options
            );
          n.length === 1 ? o = n[0] : o = new f.Group(n), a = f.util.multiplyTransformMatrices(
            t,
            o.calcTransformMatrix()
          ), o.clipPath && this.resolveClipPath(o, u);
          var r = f.util.qrDecompose(a);
          o.flipX = !1, o.flipY = !1, o.set("scaleX", r.scaleX), o.set("scaleY", r.scaleY), o.angle = r.angle, o.skewX = r.skewX, o.skewY = 0, o.setPositionByOrigin({ x: r.translateX, y: r.translateY }, "center", "center"), s.clipPath = o;
        } else
          delete s.clipPath;
      }, c.checkIfDone = function() {
        --this.numElements === 0 && (this.instances = this.instances.filter(function(s) {
          return s != null;
        }), this.callback(this.instances, this.elements));
      };
    })(f.ElementsParser.prototype), (function(c) {
      var s = c.fabric || (c.fabric = {});
      if (s.Point) {
        s.warn("fabric.Point is already defined");
        return;
      }
      s.Point = h;
      function h(o, i) {
        this.x = o, this.y = i;
      }
      h.prototype = /** @lends fabric.Point.prototype */
      {
        type: "point",
        constructor: h,
        /**
         * Adds another point to this one and returns another one
         * @param {fabric.Point} that
         * @return {fabric.Point} new Point instance with added values
         */
        add: function(o) {
          return new h(this.x + o.x, this.y + o.y);
        },
        /**
         * Adds another point to this one
         * @param {fabric.Point} that
         * @return {fabric.Point} thisArg
         * @chainable
         */
        addEquals: function(o) {
          return this.x += o.x, this.y += o.y, this;
        },
        /**
         * Adds value to this point and returns a new one
         * @param {Number} scalar
         * @return {fabric.Point} new Point with added value
         */
        scalarAdd: function(o) {
          return new h(this.x + o, this.y + o);
        },
        /**
         * Adds value to this point
         * @param {Number} scalar
         * @return {fabric.Point} thisArg
         * @chainable
         */
        scalarAddEquals: function(o) {
          return this.x += o, this.y += o, this;
        },
        /**
         * Subtracts another point from this point and returns a new one
         * @param {fabric.Point} that
         * @return {fabric.Point} new Point object with subtracted values
         */
        subtract: function(o) {
          return new h(this.x - o.x, this.y - o.y);
        },
        /**
         * Subtracts another point from this point
         * @param {fabric.Point} that
         * @return {fabric.Point} thisArg
         * @chainable
         */
        subtractEquals: function(o) {
          return this.x -= o.x, this.y -= o.y, this;
        },
        /**
         * Subtracts value from this point and returns a new one
         * @param {Number} scalar
         * @return {fabric.Point}
         */
        scalarSubtract: function(o) {
          return new h(this.x - o, this.y - o);
        },
        /**
         * Subtracts value from this point
         * @param {Number} scalar
         * @return {fabric.Point} thisArg
         * @chainable
         */
        scalarSubtractEquals: function(o) {
          return this.x -= o, this.y -= o, this;
        },
        /**
         * Multiplies this point by a value and returns a new one
         * TODO: rename in scalarMultiply in 2.0
         * @param {Number} scalar
         * @return {fabric.Point}
         */
        multiply: function(o) {
          return new h(this.x * o, this.y * o);
        },
        /**
         * Multiplies this point by a value
         * TODO: rename in scalarMultiplyEquals in 2.0
         * @param {Number} scalar
         * @return {fabric.Point} thisArg
         * @chainable
         */
        multiplyEquals: function(o) {
          return this.x *= o, this.y *= o, this;
        },
        /**
         * Divides this point by a value and returns a new one
         * TODO: rename in scalarDivide in 2.0
         * @param {Number} scalar
         * @return {fabric.Point}
         */
        divide: function(o) {
          return new h(this.x / o, this.y / o);
        },
        /**
         * Divides this point by a value
         * TODO: rename in scalarDivideEquals in 2.0
         * @param {Number} scalar
         * @return {fabric.Point} thisArg
         * @chainable
         */
        divideEquals: function(o) {
          return this.x /= o, this.y /= o, this;
        },
        /**
         * Returns true if this point is equal to another one
         * @param {fabric.Point} that
         * @return {Boolean}
         */
        eq: function(o) {
          return this.x === o.x && this.y === o.y;
        },
        /**
         * Returns true if this point is less than another one
         * @param {fabric.Point} that
         * @return {Boolean}
         */
        lt: function(o) {
          return this.x < o.x && this.y < o.y;
        },
        /**
         * Returns true if this point is less than or equal to another one
         * @param {fabric.Point} that
         * @return {Boolean}
         */
        lte: function(o) {
          return this.x <= o.x && this.y <= o.y;
        },
        /**
        
        		     * Returns true if this point is greater another one
        		     * @param {fabric.Point} that
        		     * @return {Boolean}
        		     */
        gt: function(o) {
          return this.x > o.x && this.y > o.y;
        },
        /**
         * Returns true if this point is greater than or equal to another one
         * @param {fabric.Point} that
         * @return {Boolean}
         */
        gte: function(o) {
          return this.x >= o.x && this.y >= o.y;
        },
        /**
         * Returns new point which is the result of linear interpolation with this one and another one
         * @param {fabric.Point} that
         * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
         * @return {fabric.Point}
         */
        lerp: function(o, i) {
          return typeof i > "u" && (i = 0.5), i = Math.max(Math.min(1, i), 0), new h(this.x + (o.x - this.x) * i, this.y + (o.y - this.y) * i);
        },
        /**
         * Returns distance from this point and another one
         * @param {fabric.Point} that
         * @return {Number}
         */
        distanceFrom: function(o) {
          var i = this.x - o.x, e = this.y - o.y;
          return Math.sqrt(i * i + e * e);
        },
        /**
         * Returns the point between this point and another one
         * @param {fabric.Point} that
         * @return {fabric.Point}
         */
        midPointFrom: function(o) {
          return this.lerp(o);
        },
        /**
         * Returns a new point which is the min of this and another one
         * @param {fabric.Point} that
         * @return {fabric.Point}
         */
        min: function(o) {
          return new h(Math.min(this.x, o.x), Math.min(this.y, o.y));
        },
        /**
         * Returns a new point which is the max of this and another one
         * @param {fabric.Point} that
         * @return {fabric.Point}
         */
        max: function(o) {
          return new h(Math.max(this.x, o.x), Math.max(this.y, o.y));
        },
        /**
         * Returns string representation of this point
         * @return {String}
         */
        toString: function() {
          return this.x + "," + this.y;
        },
        /**
         * Sets x/y of this point
         * @param {Number} x
         * @param {Number} y
         * @chainable
         */
        setXY: function(o, i) {
          return this.x = o, this.y = i, this;
        },
        /**
         * Sets x of this point
         * @param {Number} x
         * @chainable
         */
        setX: function(o) {
          return this.x = o, this;
        },
        /**
         * Sets y of this point
         * @param {Number} y
         * @chainable
         */
        setY: function(o) {
          return this.y = o, this;
        },
        /**
         * Sets x/y of this point from another point
         * @param {fabric.Point} that
         * @chainable
         */
        setFromPoint: function(o) {
          return this.x = o.x, this.y = o.y, this;
        },
        /**
         * Swaps x/y of this point and another point
         * @param {fabric.Point} that
         */
        swap: function(o) {
          var i = this.x, e = this.y;
          this.x = o.x, this.y = o.y, o.x = i, o.y = e;
        },
        /**
         * return a cloned instance of the point
         * @return {fabric.Point}
         */
        clone: function() {
          return new h(this.x, this.y);
        }
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {});
      if (s.Intersection) {
        s.warn("fabric.Intersection is already defined");
        return;
      }
      function h(o) {
        this.status = o, this.points = [];
      }
      s.Intersection = h, s.Intersection.prototype = /** @lends fabric.Intersection.prototype */
      {
        constructor: h,
        /**
         * Appends a point to intersection
         * @param {fabric.Point} point
         * @return {fabric.Intersection} thisArg
         * @chainable
         */
        appendPoint: function(o) {
          return this.points.push(o), this;
        },
        /**
         * Appends points to intersection
         * @param {Array} points
         * @return {fabric.Intersection} thisArg
         * @chainable
         */
        appendPoints: function(o) {
          return this.points = this.points.concat(o), this;
        }
      }, s.Intersection.intersectLineLine = function(o, i, e, t) {
        var n, a = (t.x - e.x) * (o.y - e.y) - (t.y - e.y) * (o.x - e.x), r = (i.x - o.x) * (o.y - e.y) - (i.y - o.y) * (o.x - e.x), l = (t.y - e.y) * (i.x - o.x) - (t.x - e.x) * (i.y - o.y);
        if (l !== 0) {
          var u = a / l, d = r / l;
          0 <= u && u <= 1 && 0 <= d && d <= 1 ? (n = new h("Intersection"), n.appendPoint(new s.Point(o.x + u * (i.x - o.x), o.y + u * (i.y - o.y)))) : n = new h();
        } else
          a === 0 || r === 0 ? n = new h("Coincident") : n = new h("Parallel");
        return n;
      }, s.Intersection.intersectLinePolygon = function(o, i, e) {
        var t = new h(), n = e.length, a, r, l, u;
        for (u = 0; u < n; u++)
          a = e[u], r = e[(u + 1) % n], l = h.intersectLineLine(o, i, a, r), t.appendPoints(l.points);
        return t.points.length > 0 && (t.status = "Intersection"), t;
      }, s.Intersection.intersectPolygonPolygon = function(o, i) {
        var e = new h(), t = o.length, n;
        for (n = 0; n < t; n++) {
          var a = o[n], r = o[(n + 1) % t], l = h.intersectLinePolygon(a, r, i);
          e.appendPoints(l.points);
        }
        return e.points.length > 0 && (e.status = "Intersection"), e;
      }, s.Intersection.intersectPolygonRectangle = function(o, i, e) {
        var t = i.min(e), n = i.max(e), a = new s.Point(n.x, t.y), r = new s.Point(t.x, n.y), l = h.intersectLinePolygon(t, a, o), u = h.intersectLinePolygon(a, n, o), d = h.intersectLinePolygon(n, r, o), g = h.intersectLinePolygon(r, t, o), m = new h();
        return m.appendPoints(l.points), m.appendPoints(u.points), m.appendPoints(d.points), m.appendPoints(g.points), m.points.length > 0 && (m.status = "Intersection"), m;
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {});
      if (s.Color) {
        s.warn("fabric.Color is already defined.");
        return;
      }
      function h(i) {
        i ? this._tryParsingColor(i) : this.setSource([0, 0, 0, 1]);
      }
      s.Color = h, s.Color.prototype = /** @lends fabric.Color.prototype */
      {
        /**
         * @private
         * @param {String|Array} color Color value to parse
         */
        _tryParsingColor: function(i) {
          var e;
          i in h.colorNameMap && (i = h.colorNameMap[i]), i === "transparent" && (e = [255, 255, 255, 0]), e || (e = h.sourceFromHex(i)), e || (e = h.sourceFromRgb(i)), e || (e = h.sourceFromHsl(i)), e || (e = [0, 0, 0, 1]), e && this.setSource(e);
        },
        /**
         * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
         * @private
         * @param {Number} r Red color value
         * @param {Number} g Green color value
         * @param {Number} b Blue color value
         * @return {Array} Hsl color
         */
        _rgbToHsl: function(i, e, t) {
          i /= 255, e /= 255, t /= 255;
          var n, a, r, l = s.util.array.max([i, e, t]), u = s.util.array.min([i, e, t]);
          if (r = (l + u) / 2, l === u)
            n = a = 0;
          else {
            var d = l - u;
            switch (a = r > 0.5 ? d / (2 - l - u) : d / (l + u), l) {
              case i:
                n = (e - t) / d + (e < t ? 6 : 0);
                break;
              case e:
                n = (t - i) / d + 2;
                break;
              case t:
                n = (i - e) / d + 4;
                break;
            }
            n /= 6;
          }
          return [
            Math.round(n * 360),
            Math.round(a * 100),
            Math.round(r * 100)
          ];
        },
        /**
         * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
         * @return {Array}
         */
        getSource: function() {
          return this._source;
        },
        /**
         * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
         * @param {Array} source
         */
        setSource: function(i) {
          this._source = i;
        },
        /**
         * Returns color representation in RGB format
         * @return {String} ex: rgb(0-255,0-255,0-255)
         */
        toRgb: function() {
          var i = this.getSource();
          return "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")";
        },
        /**
         * Returns color representation in RGBA format
         * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
         */
        toRgba: function() {
          var i = this.getSource();
          return "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + ")";
        },
        /**
         * Returns color representation in HSL format
         * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
         */
        toHsl: function() {
          var i = this.getSource(), e = this._rgbToHsl(i[0], i[1], i[2]);
          return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)";
        },
        /**
         * Returns color representation in HSLA format
         * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
         */
        toHsla: function() {
          var i = this.getSource(), e = this._rgbToHsl(i[0], i[1], i[2]);
          return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + i[3] + ")";
        },
        /**
         * Returns color representation in HEX format
         * @return {String} ex: FF5555
         */
        toHex: function() {
          var i = this.getSource(), e, t, n;
          return e = i[0].toString(16), e = e.length === 1 ? "0" + e : e, t = i[1].toString(16), t = t.length === 1 ? "0" + t : t, n = i[2].toString(16), n = n.length === 1 ? "0" + n : n, e.toUpperCase() + t.toUpperCase() + n.toUpperCase();
        },
        /**
         * Returns color representation in HEXA format
         * @return {String} ex: FF5555CC
         */
        toHexa: function() {
          var i = this.getSource(), e;
          return e = Math.round(i[3] * 255), e = e.toString(16), e = e.length === 1 ? "0" + e : e, this.toHex() + e.toUpperCase();
        },
        /**
         * Gets value of alpha channel for this color
         * @return {Number} 0-1
         */
        getAlpha: function() {
          return this.getSource()[3];
        },
        /**
         * Sets value of alpha channel for this color
         * @param {Number} alpha Alpha value 0-1
         * @return {fabric.Color} thisArg
         */
        setAlpha: function(i) {
          var e = this.getSource();
          return e[3] = i, this.setSource(e), this;
        },
        /**
         * Transforms color to its grayscale representation
         * @return {fabric.Color} thisArg
         */
        toGrayscale: function() {
          var i = this.getSource(), e = parseInt((i[0] * 0.3 + i[1] * 0.59 + i[2] * 0.11).toFixed(0), 10), t = i[3];
          return this.setSource([e, e, e, t]), this;
        },
        /**
         * Transforms color to its black and white representation
         * @param {Number} threshold
         * @return {fabric.Color} thisArg
         */
        toBlackWhite: function(i) {
          var e = this.getSource(), t = (e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11).toFixed(0), n = e[3];
          return i = i || 127, t = Number(t) < Number(i) ? 0 : 255, this.setSource([t, t, t, n]), this;
        },
        /**
         * Overlays color with another color
         * @param {String|fabric.Color} otherColor
         * @return {fabric.Color} thisArg
         */
        overlayWith: function(i) {
          i instanceof h || (i = new h(i));
          var e = [], t = this.getAlpha(), n = 0.5, a = this.getSource(), r = i.getSource(), l;
          for (l = 0; l < 3; l++)
            e.push(Math.round(a[l] * (1 - n) + r[l] * n));
          return e[3] = t, this.setSource(e), this;
        }
      }, s.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, s.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, s.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, s.Color.colorNameMap = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgrey: "#A9A9A9",
        darkgreen: "#006400",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgrey: "#D3D3D3",
        lightgreen: "#90EE90",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };
      function o(i, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * (2 / 3 - t) * 6 : i;
      }
      s.Color.fromRgb = function(i) {
        return h.fromSource(h.sourceFromRgb(i));
      }, s.Color.sourceFromRgb = function(i) {
        var e = i.match(h.reRGBa);
        if (e) {
          var t = parseInt(e[1], 10) / (/%$/.test(e[1]) ? 100 : 1) * (/%$/.test(e[1]) ? 255 : 1), n = parseInt(e[2], 10) / (/%$/.test(e[2]) ? 100 : 1) * (/%$/.test(e[2]) ? 255 : 1), a = parseInt(e[3], 10) / (/%$/.test(e[3]) ? 100 : 1) * (/%$/.test(e[3]) ? 255 : 1);
          return [
            parseInt(t, 10),
            parseInt(n, 10),
            parseInt(a, 10),
            e[4] ? parseFloat(e[4]) : 1
          ];
        }
      }, s.Color.fromRgba = h.fromRgb, s.Color.fromHsl = function(i) {
        return h.fromSource(h.sourceFromHsl(i));
      }, s.Color.sourceFromHsl = function(i) {
        var e = i.match(h.reHSLa);
        if (e) {
          var t = (parseFloat(e[1]) % 360 + 360) % 360 / 360, n = parseFloat(e[2]) / (/%$/.test(e[2]) ? 100 : 1), a = parseFloat(e[3]) / (/%$/.test(e[3]) ? 100 : 1), r, l, u;
          if (n === 0)
            r = l = u = a;
          else {
            var d = a <= 0.5 ? a * (n + 1) : a + n - a * n, g = a * 2 - d;
            r = o(g, d, t + 1 / 3), l = o(g, d, t), u = o(g, d, t - 1 / 3);
          }
          return [
            Math.round(r * 255),
            Math.round(l * 255),
            Math.round(u * 255),
            e[4] ? parseFloat(e[4]) : 1
          ];
        }
      }, s.Color.fromHsla = h.fromHsl, s.Color.fromHex = function(i) {
        return h.fromSource(h.sourceFromHex(i));
      }, s.Color.sourceFromHex = function(i) {
        if (i.match(h.reHex)) {
          var e = i.slice(i.indexOf("#") + 1), t = e.length === 3 || e.length === 4, n = e.length === 8 || e.length === 4, a = t ? e.charAt(0) + e.charAt(0) : e.substring(0, 2), r = t ? e.charAt(1) + e.charAt(1) : e.substring(2, 4), l = t ? e.charAt(2) + e.charAt(2) : e.substring(4, 6), u = n ? t ? e.charAt(3) + e.charAt(3) : e.substring(6, 8) : "FF";
          return [
            parseInt(a, 16),
            parseInt(r, 16),
            parseInt(l, 16),
            parseFloat((parseInt(u, 16) / 255).toFixed(2))
          ];
        }
      }, s.Color.fromSource = function(i) {
        var e = new h();
        return e.setSource(i), e;
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], o = ["ns", "nesw", "ew", "nwse"], i = {}, e = "left", t = "top", n = "right", a = "bottom", r = "center", l = {
        top: a,
        bottom: t,
        left: n,
        right: e,
        center: r
      }, u = s.util.radiansToDegrees, d = Math.sign || function(A) {
        return (A > 0) - (A < 0) || +A;
      };
      function g(A, O) {
        var j = A.angle + u(Math.atan2(O.y, O.x)) + 360;
        return Math.round(j % 360 / 45);
      }
      function m(A, O) {
        var j = O.transform.target, R = j.canvas, M = s.util.object.clone(O);
        M.target = j, R && R.fire("object:" + A, M), j.fire(A, O);
      }
      function v(A, O) {
        var j = O.canvas, R = j.uniScaleKey, M = A[R];
        return j.uniformScaling && !M || !j.uniformScaling && M;
      }
      function y(A) {
        return A.originX === r && A.originY === r;
      }
      function w(A, O, j) {
        var R = A.lockScalingX, M = A.lockScalingY;
        return !!(R && M || !O && (R || M) && j || R && O === "x" || M && O === "y");
      }
      function E(A, O, j) {
        var R = "not-allowed", M = v(A, j), X = "";
        if (O.x !== 0 && O.y === 0 ? X = "x" : O.x === 0 && O.y !== 0 && (X = "y"), w(j, X, M))
          return R;
        var U = g(j, O);
        return h[U] + "-resize";
      }
      function L(A, O, j) {
        var R = "not-allowed";
        if (O.x !== 0 && j.lockSkewingY || O.y !== 0 && j.lockSkewingX)
          return R;
        var M = g(j, O) % 4;
        return o[M] + "-resize";
      }
      function W(A, O, j) {
        return A[j.canvas.altActionKey] ? i.skewCursorStyleHandler(A, O, j) : i.scaleCursorStyleHandler(A, O, j);
      }
      function G(A, O, j) {
        var R = A[j.canvas.altActionKey];
        if (O.x === 0)
          return R ? "skewX" : "scaleY";
        if (O.y === 0)
          return R ? "skewY" : "scaleX";
      }
      function V(A, O, j) {
        return j.lockRotation ? "not-allowed" : O.cursorStyle;
      }
      function H(A, O, j, R) {
        return {
          e: A,
          transform: O,
          pointer: {
            x: j,
            y: R
          }
        };
      }
      function N(A) {
        return function(O, j, R, M) {
          var X = j.target, U = X.getCenterPoint(), tt = X.translateToOriginPoint(U, j.originX, j.originY), Q = A(O, j, R, M);
          return X.setPositionByOrigin(tt, j.originX, j.originY), Q;
        };
      }
      function K(A, O) {
        return function(j, R, M, X) {
          var U = O(j, R, M, X);
          return U && m(A, H(j, R, M, X)), U;
        };
      }
      function $(A, O, j, R, M) {
        var X = A.target, U = X.controls[A.corner], tt = X.canvas.getZoom(), Q = X.padding / tt, I = X.toLocalPoint(new s.Point(R, M), O, j);
        return I.x >= Q && (I.x -= Q), I.x <= -Q && (I.x += Q), I.y >= Q && (I.y -= Q), I.y <= Q && (I.y += Q), I.x -= U.offsetX, I.y -= U.offsetY, I;
      }
      function J(A) {
        return A.flipX !== A.flipY;
      }
      function p(A, O, j, R, M) {
        if (A[O] !== 0) {
          var X = A._getTransformedDimensions()[R], U = M / X * A[j];
          A.set(j, U);
        }
      }
      function x(A, O, j, R) {
        var M = O.target, X = M._getTransformedDimensions(0, M.skewY), U = $(O, O.originX, O.originY, j, R), tt = Math.abs(U.x * 2) - X.x, Q = M.skewX, I;
        tt < 2 ? I = 0 : (I = u(
          Math.atan2(tt / M.scaleX, X.y / M.scaleY)
        ), O.originX === e && O.originY === a && (I = -I), O.originX === n && O.originY === t && (I = -I), J(M) && (I = -I));
        var Z = Q !== I;
        if (Z) {
          var et = M._getTransformedDimensions().y;
          M.set("skewX", I), p(M, "skewY", "scaleY", "y", et);
        }
        return Z;
      }
      function b(A, O, j, R) {
        var M = O.target, X = M._getTransformedDimensions(M.skewX, 0), U = $(O, O.originX, O.originY, j, R), tt = Math.abs(U.y * 2) - X.y, Q = M.skewY, I;
        tt < 2 ? I = 0 : (I = u(
          Math.atan2(tt / M.scaleY, X.x / M.scaleX)
        ), O.originX === e && O.originY === a && (I = -I), O.originX === n && O.originY === t && (I = -I), J(M) && (I = -I));
        var Z = Q !== I;
        if (Z) {
          var et = M._getTransformedDimensions().x;
          M.set("skewY", I), p(M, "skewX", "scaleX", "x", et);
        }
        return Z;
      }
      function S(A, O, j, R) {
        var M = O.target, X = M.skewX, U, tt = O.originY;
        if (M.lockSkewingX)
          return !1;
        if (X === 0) {
          var Q = $(O, r, r, j, R);
          Q.x > 0 ? U = e : U = n;
        } else
          X > 0 && (U = tt === t ? e : n), X < 0 && (U = tt === t ? n : e), J(M) && (U = U === e ? n : e);
        O.originX = U;
        var I = K("skewing", N(x));
        return I(A, O, j, R);
      }
      function k(A, O, j, R) {
        var M = O.target, X = M.skewY, U, tt = O.originX;
        if (M.lockSkewingY)
          return !1;
        if (X === 0) {
          var Q = $(O, r, r, j, R);
          Q.y > 0 ? U = t : U = a;
        } else
          X > 0 && (U = tt === e ? t : a), X < 0 && (U = tt === e ? a : t), J(M) && (U = U === t ? a : t);
        O.originY = U;
        var I = K("skewing", N(b));
        return I(A, O, j, R);
      }
      function C(A, O, j, R) {
        var M = O, X = M.target, U = X.translateToOriginPoint(X.getCenterPoint(), M.originX, M.originY);
        if (X.lockRotation)
          return !1;
        var tt = Math.atan2(M.ey - U.y, M.ex - U.x), Q = Math.atan2(R - U.y, j - U.x), I = u(Q - tt + M.theta), Z = !0;
        if (X.snapAngle > 0) {
          var et = X.snapAngle, rt = X.snapThreshold || et, ht = Math.ceil(I / et) * et, st = Math.floor(I / et) * et;
          Math.abs(I - st) < rt ? I = st : Math.abs(I - ht) < rt && (I = ht);
        }
        return I < 0 && (I = 360 + I), I %= 360, Z = X.angle !== I, X.angle = I, Z;
      }
      function _(A, O, j, R, M) {
        M = M || {};
        var X = O.target, U = X.lockScalingX, tt = X.lockScalingY, Q = M.by, I, Z, et, rt, ht = v(A, X), st = w(X, Q, ht), ct, lt, pt = O.gestureScale;
        if (st)
          return !1;
        if (pt)
          Z = O.scaleX * pt, et = O.scaleY * pt;
        else {
          if (I = $(O, O.originX, O.originY, j, R), ct = Q !== "y" ? d(I.x) : 1, lt = Q !== "x" ? d(I.y) : 1, O.signX || (O.signX = ct), O.signY || (O.signY = lt), X.lockScalingFlip && (O.signX !== ct || O.signY !== lt))
            return !1;
          if (rt = X._getTransformedDimensions(), ht && !Q) {
            var yt = Math.abs(I.x) + Math.abs(I.y), gt = O.original, Mt = Math.abs(rt.x * gt.scaleX / X.scaleX) + Math.abs(rt.y * gt.scaleY / X.scaleY), Tt = yt / Mt;
            Z = gt.scaleX * Tt, et = gt.scaleY * Tt;
          } else
            Z = Math.abs(I.x * X.scaleX / rt.x), et = Math.abs(I.y * X.scaleY / rt.y);
          y(O) && (Z *= 2, et *= 2), O.signX !== ct && Q !== "y" && (O.originX = l[O.originX], Z *= -1, O.signX = ct), O.signY !== lt && Q !== "x" && (O.originY = l[O.originY], et *= -1, O.signY = lt);
        }
        var Ft = X.scaleX, Lt = X.scaleY;
        return Q ? (Q === "x" && X.set("scaleX", Z), Q === "y" && X.set("scaleY", et)) : (!U && X.set("scaleX", Z), !tt && X.set("scaleY", et)), Ft !== X.scaleX || Lt !== X.scaleY;
      }
      function T(A, O, j, R) {
        return _(A, O, j, R);
      }
      function P(A, O, j, R) {
        return _(A, O, j, R, { by: "x" });
      }
      function F(A, O, j, R) {
        return _(A, O, j, R, { by: "y" });
      }
      function D(A, O, j, R) {
        return A[O.target.canvas.altActionKey] ? i.skewHandlerX(A, O, j, R) : i.scalingY(A, O, j, R);
      }
      function B(A, O, j, R) {
        return A[O.target.canvas.altActionKey] ? i.skewHandlerY(A, O, j, R) : i.scalingX(A, O, j, R);
      }
      function Y(A, O, j, R) {
        var M = O.target, X = $(O, O.originX, O.originY, j, R), U = M.strokeWidth / (M.strokeUniform ? M.scaleX : 1), tt = y(O) ? 2 : 1, Q = M.width, I = Math.abs(X.x * tt / M.scaleX) - U;
        return M.set("width", Math.max(I, 0)), Q !== I;
      }
      function z(A, O, j, R) {
        var M = O.target, X = j - O.offsetX, U = R - O.offsetY, tt = !M.get("lockMovementX") && M.left !== X, Q = !M.get("lockMovementY") && M.top !== U;
        return tt && M.set("left", X), Q && M.set("top", U), (tt || Q) && m("moving", H(A, O, j, R)), tt || Q;
      }
      i.scaleCursorStyleHandler = E, i.skewCursorStyleHandler = L, i.scaleSkewCursorStyleHandler = W, i.rotationWithSnapping = K("rotating", N(C)), i.scalingEqually = K("scaling", N(T)), i.scalingX = K("scaling", N(P)), i.scalingY = K("scaling", N(F)), i.scalingYOrSkewingX = D, i.scalingXOrSkewingY = B, i.changeWidth = K("resizing", N(Y)), i.skewHandlerX = S, i.skewHandlerY = k, i.dragHandler = z, i.scaleOrSkewActionName = G, i.rotationStyleHandler = V, i.fireEvent = m, i.wrapWithFixedAnchor = N, i.wrapWithFireEvent = K, i.getLocalPoint = $, s.controlsUtils = i;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.degreesToRadians, o = s.controlsUtils;
      function i(t, n, a, r, l) {
        r = r || {};
        var u = this.sizeX || r.cornerSize || l.cornerSize, d = this.sizeY || r.cornerSize || l.cornerSize, g = typeof r.transparentCorners < "u" ? r.transparentCorners : l.transparentCorners, m = g ? "stroke" : "fill", v = !g && (r.cornerStrokeColor || l.cornerStrokeColor), y = n, w = a, E;
        t.save(), t.fillStyle = r.cornerColor || l.cornerColor, t.strokeStyle = r.cornerStrokeColor || l.cornerStrokeColor, u > d ? (E = u, t.scale(1, d / u), w = a * u / d) : d > u ? (E = d, t.scale(u / d, 1), y = n * d / u) : E = u, t.lineWidth = 1, t.beginPath(), t.arc(y, w, E / 2, 0, 2 * Math.PI, !1), t[m](), v && t.stroke(), t.restore();
      }
      function e(t, n, a, r, l) {
        r = r || {};
        var u = this.sizeX || r.cornerSize || l.cornerSize, d = this.sizeY || r.cornerSize || l.cornerSize, g = typeof r.transparentCorners < "u" ? r.transparentCorners : l.transparentCorners, m = g ? "stroke" : "fill", v = !g && (r.cornerStrokeColor || l.cornerStrokeColor), y = u / 2, w = d / 2;
        t.save(), t.fillStyle = r.cornerColor || l.cornerColor, t.strokeStyle = r.cornerStrokeColor || l.cornerStrokeColor, t.lineWidth = 1, t.translate(n, a), t.rotate(h(l.angle)), t[m + "Rect"](-y, -w, u, d), v && t.strokeRect(-y, -w, u, d), t.restore();
      }
      o.renderCircleControl = i, o.renderSquareControl = e;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {});
      function h(o) {
        for (var i in o)
          this[i] = o[i];
      }
      s.Control = h, s.Control.prototype = /** @lends fabric.Control.prototype */
      {
        /**
         * keep track of control visibility.
         * mainly for backward compatibility.
         * if you do not want to see a control, you can remove it
         * from the controlset.
         * @type {Boolean}
         * @default true
         */
        visible: !0,
        /**
         * Name of the action that the control will likely execute.
         * This is optional. FabricJS uses to identify what the user is doing for some
         * extra optimizations. If you are writing a custom control and you want to know
         * somewhere else in the code what is going on, you can use this string here.
         * you can also provide a custom getActionName if your control run multiple actions
         * depending on some external state.
         * default to scale since is the most common, used on 4 corners by default
         * @type {String}
         * @default 'scale'
         */
        actionName: "scale",
        /**
         * Drawing angle of the control.
         * NOT used for now, but name marked as needed for internal logic
         * example: to reuse the same drawing function for different rotated controls
         * @type {Number}
         * @default 0
         */
        angle: 0,
        /**
         * Relative position of the control. X
         * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
         * of the bounding box.
         * @type {Number}
         * @default 0
         */
        x: 0,
        /**
         * Relative position of the control. Y
         * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
         * of the bounding box.
         * @type {Number}
         * @default 0
         */
        y: 0,
        /**
         * Horizontal offset of the control from the defined position. In pixels
         * Positive offset moves the control to the right, negative to the left.
         * It used when you want to have position of control that does not scale with
         * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
         * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
         * stay 30 pixels no matter how the object is big. Another example is having 2
         * controls in the corner, that stay in the same position when the object scale.
         * of the bounding box.
         * @type {Number}
         * @default 0
         */
        offsetX: 0,
        /**
         * Vertical offset of the control from the defined position. In pixels
         * Positive offset moves the control to the bottom, negative to the top.
         * @type {Number}
         * @default 0
         */
        offsetY: 0,
        /**
         * Sets the length of the control. If null, defaults to object's cornerSize.
         * Expects both sizeX and sizeY to be set when set.
         * @type {?Number}
         * @default null
         */
        sizeX: null,
        /**
         * Sets the height of the control. If null, defaults to object's cornerSize.
         * Expects both sizeX and sizeY to be set when set.
         * @type {?Number}
         * @default null
         */
        sizeY: null,
        /**
         * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
         * Expects both touchSizeX and touchSizeY to be set when set.
         * @type {?Number}
         * @default null
         */
        touchSizeX: null,
        /**
         * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
         * Expects both touchSizeX and touchSizeY to be set when set.
         * @type {?Number}
         * @default null
         */
        touchSizeY: null,
        /**
         * Css cursor style to display when the control is hovered.
         * if the method `cursorStyleHandler` is provided, this property is ignored.
         * @type {String}
         * @default 'crosshair'
         */
        cursorStyle: "crosshair",
        /**
         * If controls has an offsetY or offsetX, draw a line that connects
         * the control to the bounding box
         * @type {Boolean}
         * @default false
         */
        withConnection: !1,
        /**
         * The control actionHandler, provide one to handle action ( control being moved )
         * @param {Event} eventData the native mouse event
         * @param {Object} transformData properties of the current transform
         * @param {Number} x x position of the cursor
         * @param {Number} y y position of the cursor
         * @return {Boolean} true if the action/event modified the object
         */
        actionHandler: function() {
        },
        /**
         * The control handler for mouse down, provide one to handle mouse down on control
         * @param {Event} eventData the native mouse event
         * @param {Object} transformData properties of the current transform
         * @param {Number} x x position of the cursor
         * @param {Number} y y position of the cursor
         * @return {Boolean} true if the action/event modified the object
         */
        mouseDownHandler: function() {
        },
        /**
         * The control mouseUpHandler, provide one to handle an effect on mouse up.
         * @param {Event} eventData the native mouse event
         * @param {Object} transformData properties of the current transform
         * @param {Number} x x position of the cursor
         * @param {Number} y y position of the cursor
         * @return {Boolean} true if the action/event modified the object
         */
        mouseUpHandler: function() {
        },
        /**
         * Returns control actionHandler
         * @param {Event} eventData the native mouse event
         * @param {fabric.Object} fabricObject on which the control is displayed
         * @param {fabric.Control} control control for which the action handler is being asked
         * @return {Function} the action handler
         */
        getActionHandler: function() {
          return this.actionHandler;
        },
        /**
         * Returns control mouseDown handler
         * @param {Event} eventData the native mouse event
         * @param {fabric.Object} fabricObject on which the control is displayed
         * @param {fabric.Control} control control for which the action handler is being asked
         * @return {Function} the action handler
         */
        getMouseDownHandler: function() {
          return this.mouseDownHandler;
        },
        /**
         * Returns control mouseUp handler
         * @param {Event} eventData the native mouse event
         * @param {fabric.Object} fabricObject on which the control is displayed
         * @param {fabric.Control} control control for which the action handler is being asked
         * @return {Function} the action handler
         */
        getMouseUpHandler: function() {
          return this.mouseUpHandler;
        },
        /**
         * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
         * function you can pass one in the constructor
         * the cursorStyle property
         * @param {Event} eventData the native mouse event
         * @param {fabric.Control} control the current control ( likely this)
         * @param {fabric.Object} object on which the control is displayed
         * @return {String}
         */
        cursorStyleHandler: function(o, i) {
          return i.cursorStyle;
        },
        /**
         * Returns the action name. The basic implementation just return the actionName property.
         * @param {Event} eventData the native mouse event
         * @param {fabric.Control} control the current control ( likely this)
         * @param {fabric.Object} object on which the control is displayed
         * @return {String}
         */
        getActionName: function(o, i) {
          return i.actionName;
        },
        /**
         * Returns controls visibility
         * @param {fabric.Object} object on which the control is displayed
         * @param {String} controlKey key where the control is memorized on the
         * @return {Boolean}
         */
        getVisibility: function(o, i) {
          var e = o._controlsVisibility;
          return e && typeof e[i] < "u" ? e[i] : this.visible;
        },
        /**
         * Sets controls visibility
         * @param {Boolean} visibility for the object
         * @return {Void}
         */
        setVisibility: function(o) {
          this.visible = o;
        },
        positionHandler: function(o, i) {
          var e = s.util.transformPoint({
            x: this.x * o.x + this.offsetX,
            y: this.y * o.y + this.offsetY
          }, i);
          return e;
        },
        /**
         * Returns the coords for this control based on object values.
         * @param {Number} objectAngle angle from the fabric object holding the control
         * @param {Number} objectCornerSize cornerSize from the fabric object holding the control (or touchCornerSize if
         *   isTouch is true)
         * @param {Number} centerX x coordinate where the control center should be
         * @param {Number} centerY y coordinate where the control center should be
         * @param {boolean} isTouch true if touch corner, false if normal corner
         */
        calcCornerCoords: function(o, i, e, t, n) {
          var a, r, l, u, d = n ? this.touchSizeX : this.sizeX, g = n ? this.touchSizeY : this.sizeY;
          if (d && g && d !== g) {
            var m = Math.atan2(g, d), v = Math.sqrt(d * d + g * g) / 2, y = m - s.util.degreesToRadians(o), w = Math.PI / 2 - m - s.util.degreesToRadians(o);
            a = v * s.util.cos(y), r = v * s.util.sin(y), l = v * s.util.cos(w), u = v * s.util.sin(w);
          } else {
            var E = d && g ? d : i;
            v = E * 0.7071067812;
            var y = s.util.degreesToRadians(45 - o);
            a = l = v * s.util.cos(y), r = u = v * s.util.sin(y);
          }
          return {
            tl: {
              x: e - u,
              y: t - l
            },
            tr: {
              x: e + a,
              y: t - r
            },
            bl: {
              x: e - a,
              y: t + r
            },
            br: {
              x: e + u,
              y: t + l
            }
          };
        },
        /**
        * Render function for the control.
        * When this function runs the context is unscaled. unrotate. Just retina scaled.
        * all the functions will have to translate to the point left,top before starting Drawing
        * if they want to draw a control where the position is detected.
        * left and top are the result of the positionHandler function
        * @param {RenderingContext2D} ctx the context where the control will be drawn
        * @param {Number} left position of the canvas where we are about to render the control.
        * @param {Number} top position of the canvas where we are about to render the control.
        * @param {Object} styleOverride
        * @param {fabric.Object} fabricObject the object where the control is about to be rendered
        */
        render: function(o, i, e, t, n) {
          switch (t = t || {}, t.cornerStyle || n.cornerStyle) {
            case "circle":
              s.controlsUtils.renderCircleControl.call(this, o, i, e, t, n);
              break;
            default:
              s.controlsUtils.renderSquareControl.call(this, o, i, e, t, n);
          }
        }
      };
    })(q), (function() {
      function c(e, t) {
        var n = e.getAttribute("style"), a = e.getAttribute("offset") || 0, r, l, u, d;
        if (a = parseFloat(a) / (/%$/.test(a) ? 100 : 1), a = a < 0 ? 0 : a > 1 ? 1 : a, n) {
          var g = n.split(/\s*;\s*/);
          for (g[g.length - 1] === "" && g.pop(), d = g.length; d--; ) {
            var m = g[d].split(/\s*:\s*/), v = m[0].trim(), y = m[1].trim();
            v === "stop-color" ? r = y : v === "stop-opacity" && (u = y);
          }
        }
        return r || (r = e.getAttribute("stop-color") || "rgb(0,0,0)"), u || (u = e.getAttribute("stop-opacity")), r = new f.Color(r), l = r.getAlpha(), u = isNaN(parseFloat(u)) ? 1 : parseFloat(u), u *= l * t, {
          offset: a,
          color: r.toRgb(),
          opacity: u
        };
      }
      function s(e) {
        return {
          x1: e.getAttribute("x1") || 0,
          y1: e.getAttribute("y1") || 0,
          x2: e.getAttribute("x2") || "100%",
          y2: e.getAttribute("y2") || 0
        };
      }
      function h(e) {
        return {
          x1: e.getAttribute("fx") || e.getAttribute("cx") || "50%",
          y1: e.getAttribute("fy") || e.getAttribute("cy") || "50%",
          r1: 0,
          x2: e.getAttribute("cx") || "50%",
          y2: e.getAttribute("cy") || "50%",
          r2: e.getAttribute("r") || "50%"
        };
      }
      var o = f.util.object.clone;
      f.Gradient = f.util.createClass(
        /** @lends fabric.Gradient.prototype */
        {
          /**
           * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
           * @type Number
           * @default 0
           */
          offsetX: 0,
          /**
           * Vertical offset for aligning gradients coming from SVG when outside pathgroups
           * @type Number
           * @default 0
           */
          offsetY: 0,
          /**
           * A transform matrix to apply to the gradient before painting.
           * Imported from svg gradients, is not applied with the current transform in the center.
           * Before this transform is applied, the origin point is at the top left corner of the object
           * plus the addition of offsetY and offsetX.
           * @type Number[]
           * @default null
           */
          gradientTransform: null,
          /**
           * coordinates units for coords.
           * If `pixels`, the number of coords are in the same unit of width / height.
           * If set as `percentage` the coords are still a number, but 1 means 100% of width
           * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
           * allowed values pixels or percentage.
           * @type String
           * @default 'pixels'
           */
          gradientUnits: "pixels",
          /**
           * Gradient type linear or radial
           * @type String
           * @default 'pixels'
           */
          type: "linear",
          /**
           * Constructor
           * @param {Object} options Options object with type, coords, gradientUnits and colorStops
           * @param {Object} [options.type] gradient type linear or radial
           * @param {Object} [options.gradientUnits] gradient units
           * @param {Object} [options.offsetX] SVG import compatibility
           * @param {Object} [options.offsetY] SVG import compatibility
           * @param {Object[]} options.colorStops contains the colorstops.
           * @param {Object} options.coords contains the coords of the gradient
           * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
           * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
           * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
           * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
           * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
           * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
           * @return {fabric.Gradient} thisArg
           */
          initialize: function(e) {
            e || (e = {}), e.coords || (e.coords = {});
            var t, n = this;
            Object.keys(e).forEach(function(a) {
              n[a] = e[a];
            }), this.id ? this.id += "_" + f.Object.__uid++ : this.id = f.Object.__uid++, t = {
              x1: e.coords.x1 || 0,
              y1: e.coords.y1 || 0,
              x2: e.coords.x2 || 0,
              y2: e.coords.y2 || 0
            }, this.type === "radial" && (t.r1 = e.coords.r1 || 0, t.r2 = e.coords.r2 || 0), this.coords = t, this.colorStops = e.colorStops.slice();
          },
          /**
           * Adds another colorStop
           * @param {Object} colorStop Object with offset and color
           * @return {fabric.Gradient} thisArg
           */
          addColorStop: function(e) {
            for (var t in e) {
              var n = new f.Color(e[t]);
              this.colorStops.push({
                offset: parseFloat(t),
                color: n.toRgb(),
                opacity: n.getAlpha()
              });
            }
            return this;
          },
          /**
           * Returns object representation of a gradient
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object}
           */
          toObject: function(e) {
            var t = {
              type: this.type,
              coords: this.coords,
              colorStops: this.colorStops,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              gradientUnits: this.gradientUnits,
              gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
            };
            return f.util.populateWithProperties(this, t, e), t;
          },
          /* _TO_SVG_START_ */
          /**
           * Returns SVG representation of an gradient
           * @param {Object} object Object to create a gradient for
           * @return {String} SVG representation of an gradient (linear/radial)
           */
          toSVG: function(e, l) {
            var n = o(this.coords, !0), a, r, l = l || {}, u, d, g = o(this.colorStops, !0), m = n.r1 > n.r2, v = this.gradientTransform ? this.gradientTransform.concat() : f.iMatrix.concat(), y = -this.offsetX, w = -this.offsetY, E = !!l.additionalTransform, L = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
            if (g.sort(function(N, K) {
              return N.offset - K.offset;
            }), L === "objectBoundingBox" ? (y /= e.width, w /= e.height) : (y += e.width / 2, w += e.height / 2), e.type === "path" && this.gradientUnits !== "percentage" && (y -= e.pathOffset.x, w -= e.pathOffset.y), v[4] -= y, v[5] -= w, d = 'id="SVGID_' + this.id + '" gradientUnits="' + L + '"', d += ' gradientTransform="' + (E ? l.additionalTransform + " " : "") + f.util.matrixToSVG(v) + '" ', this.type === "linear" ? u = [
              "<linearGradient ",
              d,
              ' x1="',
              n.x1,
              '" y1="',
              n.y1,
              '" x2="',
              n.x2,
              '" y2="',
              n.y2,
              `">
`
            ] : this.type === "radial" && (u = [
              "<radialGradient ",
              d,
              ' cx="',
              m ? n.x1 : n.x2,
              '" cy="',
              m ? n.y1 : n.y2,
              '" r="',
              m ? n.r1 : n.r2,
              '" fx="',
              m ? n.x2 : n.x1,
              '" fy="',
              m ? n.y2 : n.y1,
              `">
`
            ]), this.type === "radial") {
              if (m)
                for (g = g.concat(), g.reverse(), a = 0, r = g.length; a < r; a++)
                  g[a].offset = 1 - g[a].offset;
              var W = Math.min(n.r1, n.r2);
              if (W > 0) {
                var G = Math.max(n.r1, n.r2), V = W / G;
                for (a = 0, r = g.length; a < r; a++)
                  g[a].offset += V * (1 - g[a].offset);
              }
            }
            for (a = 0, r = g.length; a < r; a++) {
              var H = g[a];
              u.push(
                "<stop ",
                'offset="',
                H.offset * 100 + "%",
                '" style="stop-color:',
                H.color,
                typeof H.opacity < "u" ? ";stop-opacity: " + H.opacity : ";",
                `"/>
`
              );
            }
            return u.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), u.join("");
          },
          /* _TO_SVG_END_ */
          /**
           * Returns an instance of CanvasGradient
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @return {CanvasGradient}
           */
          toLive: function(e) {
            var t, n = f.util.object.clone(this.coords), a, r;
            if (this.type) {
              for (this.type === "linear" ? t = e.createLinearGradient(
                n.x1,
                n.y1,
                n.x2,
                n.y2
              ) : this.type === "radial" && (t = e.createRadialGradient(
                n.x1,
                n.y1,
                n.r1,
                n.x2,
                n.y2,
                n.r2
              )), a = 0, r = this.colorStops.length; a < r; a++) {
                var l = this.colorStops[a].color, u = this.colorStops[a].opacity, d = this.colorStops[a].offset;
                typeof u < "u" && (l = new f.Color(l).setAlpha(u).toRgba()), t.addColorStop(d, l);
              }
              return t;
            }
          }
        }
      ), f.util.object.extend(f.Gradient, {
        /* _FROM_SVG_START_ */
        /**
         * Returns {@link fabric.Gradient} instance from an SVG element
         * @static
         * @memberOf fabric.Gradient
         * @param {SVGGradientElement} el SVG gradient element
         * @param {fabric.Object} instance
         * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
         * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly gradients
         * that uses gradientUnits as 'userSpaceOnUse' and percentages.
         * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
         * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
         * @param {Object.number} width width part of the svg tag if viewBox is not specified
         * @param {Object.number} height height part of the svg tag if viewBox is not specified
         * @return {fabric.Gradient} Gradient instance
         * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
         * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
         */
        fromElement: function(e, t, n, a) {
          var r = parseFloat(n) / (/%$/.test(n) ? 100 : 1);
          r = r < 0 ? 0 : r > 1 ? 1 : r, isNaN(r) && (r = 1);
          var l = e.getElementsByTagName("stop"), u, d = e.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", g = e.getAttribute("gradientTransform") || "", m = [], v, y, w = 0, E = 0, L;
          for (e.nodeName === "linearGradient" || e.nodeName === "LINEARGRADIENT" ? (u = "linear", v = s(e)) : (u = "radial", v = h(e)), y = l.length; y--; )
            m.push(c(l[y], r));
          L = f.parseTransformAttribute(g), i(t, v, a, d), d === "pixels" && (w = -t.left, E = -t.top);
          var W = new f.Gradient({
            id: e.getAttribute("id"),
            type: u,
            coords: v,
            colorStops: m,
            gradientUnits: d,
            gradientTransform: L,
            offsetX: w,
            offsetY: E
          });
          return W;
        }
        /* _FROM_SVG_END_ */
      });
      function i(e, t, n, a) {
        var r, l;
        Object.keys(t).forEach(function(u) {
          r = t[u], r === "Infinity" ? l = 1 : r === "-Infinity" ? l = 0 : (l = parseFloat(t[u], 10), typeof r == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(r) && (l *= 0.01, a === "pixels" && ((u === "x1" || u === "x2" || u === "r2") && (l *= n.viewBoxWidth || n.width), (u === "y1" || u === "y2") && (l *= n.viewBoxHeight || n.height)))), t[u] = l;
        });
      }
    })(), (function() {
      var c = f.util.toFixed;
      f.Pattern = f.util.createClass(
        /** @lends fabric.Pattern.prototype */
        {
          /**
           * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
           * @type String
           * @default
           */
          repeat: "repeat",
          /**
           * Pattern horizontal offset from object's left/top corner
           * @type Number
           * @default
           */
          offsetX: 0,
          /**
           * Pattern vertical offset from object's left/top corner
           * @type Number
           * @default
           */
          offsetY: 0,
          /**
           * crossOrigin value (one of "", "anonymous", "use-credentials")
           * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
           * @type String
           * @default
           */
          crossOrigin: "",
          /**
           * transform matrix to change the pattern, imported from svgs.
           * @type Array
           * @default
           */
          patternTransform: null,
          /**
           * Constructor
           * @param {Object} [options] Options object
           * @param {Function} [callback] function to invoke after callback init.
           * @return {fabric.Pattern} thisArg
           */
          initialize: function(s, h) {
            if (s || (s = {}), this.id = f.Object.__uid++, this.setOptions(s), !s.source || s.source && typeof s.source != "string") {
              h && h(this);
              return;
            } else {
              var o = this;
              this.source = f.util.createImage(), f.util.loadImage(s.source, function(i, e) {
                o.source = i, h && h(o, e);
              }, null, this.crossOrigin);
            }
          },
          /**
           * Returns object representation of a pattern
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of a pattern instance
           */
          toObject: function(s) {
            var h = f.Object.NUM_FRACTION_DIGITS, o, i;
            return typeof this.source.src == "string" ? o = this.source.src : typeof this.source == "object" && this.source.toDataURL && (o = this.source.toDataURL()), i = {
              type: "pattern",
              source: o,
              repeat: this.repeat,
              crossOrigin: this.crossOrigin,
              offsetX: c(this.offsetX, h),
              offsetY: c(this.offsetY, h),
              patternTransform: this.patternTransform ? this.patternTransform.concat() : null
            }, f.util.populateWithProperties(this, i, s), i;
          },
          /* _TO_SVG_START_ */
          /**
           * Returns SVG representation of a pattern
           * @param {fabric.Object} object
           * @return {String} SVG representation of a pattern
           */
          toSVG: function(s) {
            var h = typeof this.source == "function" ? this.source() : this.source, o = h.width / s.width, i = h.height / s.height, e = this.offsetX / s.width, t = this.offsetY / s.height, n = "";
            return (this.repeat === "repeat-x" || this.repeat === "no-repeat") && (i = 1, t && (i += Math.abs(t))), (this.repeat === "repeat-y" || this.repeat === "no-repeat") && (o = 1, e && (o += Math.abs(e))), h.src ? n = h.src : h.toDataURL && (n = h.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + e + '" y="' + t + '" width="' + o + '" height="' + i + `">
<image x="0" y="0" width="` + h.width + '" height="' + h.height + '" xlink:href="' + n + `"></image>
</pattern>
`;
          },
          /* _TO_SVG_END_ */
          setOptions: function(s) {
            for (var h in s)
              this[h] = s[h];
          },
          /**
           * Returns an instance of CanvasPattern
           * @param {CanvasRenderingContext2D} ctx Context to create pattern
           * @return {CanvasPattern}
           */
          toLive: function(s) {
            var h = this.source;
            return !h || typeof h.src < "u" && (!h.complete || h.naturalWidth === 0 || h.naturalHeight === 0) ? "" : s.createPattern(h, this.repeat);
          }
        }
      );
    })(), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.toFixed;
      if (s.Shadow) {
        s.warn("fabric.Shadow is already defined.");
        return;
      }
      s.Shadow = s.util.createClass(
        /** @lends fabric.Shadow.prototype */
        {
          /**
           * Shadow color
           * @type String
           * @default
           */
          color: "rgb(0,0,0)",
          /**
           * Shadow blur
           * @type Number
           */
          blur: 0,
          /**
           * Shadow horizontal offset
           * @type Number
           * @default
           */
          offsetX: 0,
          /**
           * Shadow vertical offset
           * @type Number
           * @default
           */
          offsetY: 0,
          /**
           * Whether the shadow should affect stroke operations
           * @type Boolean
           * @default
           */
          affectStroke: !1,
          /**
           * Indicates whether toObject should include default values
           * @type Boolean
           * @default
           */
          includeDefaultValues: !0,
          /**
           * When `false`, the shadow will scale with the object.
           * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
           * default to false
           * @type Boolean
           * @default
           */
          nonScaling: !1,
          /**
           * Constructor
           * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
           * @return {fabric.Shadow} thisArg
           */
          initialize: function(o) {
            typeof o == "string" && (o = this._parseShadow(o));
            for (var i in o)
              this[i] = o[i];
            this.id = s.Object.__uid++;
          },
          /**
           * @private
           * @param {String} shadow Shadow value to parse
           * @return {Object} Shadow object with color, offsetX, offsetY and blur
           */
          _parseShadow: function(o) {
            var i = o.trim(), e = s.Shadow.reOffsetsAndBlur.exec(i) || [], t = i.replace(s.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
            return {
              color: t.trim(),
              offsetX: parseFloat(e[1], 10) || 0,
              offsetY: parseFloat(e[2], 10) || 0,
              blur: parseFloat(e[3], 10) || 0
            };
          },
          /**
           * Returns a string representation of an instance
           * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
           * @return {String} Returns CSS3 text-shadow declaration
           */
          toString: function() {
            return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
          },
          /* _TO_SVG_START_ */
          /**
           * Returns SVG representation of a shadow
           * @param {fabric.Object} object
           * @return {String} SVG representation of a shadow
           */
          toSVG: function(o) {
            var i = 40, e = 40, t = s.Object.NUM_FRACTION_DIGITS, n = s.util.rotateVector(
              { x: this.offsetX, y: this.offsetY },
              s.util.degreesToRadians(-o.angle)
            ), a = 20, r = new s.Color(this.color);
            return o.width && o.height && (i = h((Math.abs(n.x) + this.blur) / o.width, t) * 100 + a, e = h((Math.abs(n.y) + this.blur) / o.height, t) * 100 + a), o.flipX && (n.x *= -1), o.flipY && (n.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + e + '%" height="' + (100 + 2 * e) + '%" x="-' + i + '%" width="' + (100 + 2 * i) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + h(this.blur ? this.blur / 2 : 0, t) + `"></feGaussianBlur>
	<feOffset dx="` + h(n.x, t) + '" dy="' + h(n.y, t) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + r.toRgb() + '" flood-opacity="' + r.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
          },
          /* _TO_SVG_END_ */
          /**
           * Returns object representation of a shadow
           * @return {Object} Object representation of a shadow instance
           */
          toObject: function() {
            if (this.includeDefaultValues)
              return {
                color: this.color,
                blur: this.blur,
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                affectStroke: this.affectStroke,
                nonScaling: this.nonScaling
              };
            var o = {}, i = s.Shadow.prototype;
            return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(e) {
              this[e] !== i[e] && (o[e] = this[e]);
            }, this), o;
          }
        }
      ), s.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/;
    })(q), (function() {
      if (f.StaticCanvas) {
        f.warn("fabric.StaticCanvas is already defined.");
        return;
      }
      var c = f.util.object.extend, s = f.util.getElementOffset, h = f.util.removeFromArray, o = f.util.toFixed, i = f.util.transformPoint, e = f.util.invertTransform, t = f.util.getNodeCanvas, n = f.util.createCanvasElement, a = new Error("Could not initialize `canvas` element");
      f.StaticCanvas = f.util.createClass(
        f.CommonMethods,
        /** @lends fabric.StaticCanvas.prototype */
        {
          /**
           * Constructor
           * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
           * @param {Object} [options] Options object
           * @return {Object} thisArg
           */
          initialize: function(r, l) {
            l || (l = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(r, l);
          },
          /**
           * Background color of canvas instance.
           * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
           * @type {(String|fabric.Pattern)}
           * @default
           */
          backgroundColor: "",
          /**
           * Background image of canvas instance.
           * since 2.4.0 image caching is active, please when putting an image as background, add to the
           * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
           * vale. As an alternative you can disable image objectCaching
           * @type fabric.Image
           * @default
           */
          backgroundImage: null,
          /**
           * Overlay color of canvas instance.
           * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
           * @since 1.3.9
           * @type {(String|fabric.Pattern)}
           * @default
           */
          overlayColor: "",
          /**
           * Overlay image of canvas instance.
           * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
           * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
           * vale. As an alternative you can disable image objectCaching
           * @type fabric.Image
           * @default
           */
          overlayImage: null,
          /**
           * Indicates whether toObject/toDatalessObject should include default values
           * if set to false, takes precedence over the object value.
           * @type Boolean
           * @default
           */
          includeDefaultValues: !0,
          /**
           * Indicates whether objects' state should be saved
           * @type Boolean
           * @default
           */
          stateful: !1,
          /**
           * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
           * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
           * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
           * since the renders are quequed and executed one per frame.
           * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
           * Left default to true to do not break documentation and old app, fiddles.
           * @type Boolean
           * @default
           */
          renderOnAddRemove: !0,
          /**
           * Indicates whether object controls (borders/controls) are rendered above overlay image
           * @type Boolean
           * @default
           */
          controlsAboveOverlay: !1,
          /**
           * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
           * @type Boolean
           * @default
           */
          allowTouchScrolling: !1,
          /**
           * Indicates whether this canvas will use image smoothing, this is on by default in browsers
           * @type Boolean
           * @default
           */
          imageSmoothingEnabled: !0,
          /**
           * The transformation (a Canvas 2D API transform matrix) which focuses the viewport
           * @type Array
           * @example <caption>Default transform</caption>
           * canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
           * @example <caption>Scale by 70% and translate toward bottom-right by 50, without skewing</caption>
           * canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
           * @default
           */
          viewportTransform: f.iMatrix.concat(),
          /**
           * if set to false background image is not affected by viewport transform
           * @since 1.6.3
           * @type Boolean
           * @default
           */
          backgroundVpt: !0,
          /**
           * if set to false overlya image is not affected by viewport transform
           * @since 1.6.3
           * @type Boolean
           * @default
           */
          overlayVpt: !0,
          /**
           * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
           * @type Boolean
           * @default
           */
          enableRetinaScaling: !0,
          /**
           * Describe canvas element extension over design
           * properties are tl,tr,bl,br.
           * if canvas is not zoomed/panned those points are the four corner of canvas
           * if canvas is viewportTransformed you those points indicate the extension
           * of canvas element in plain untrasformed coordinates
           * The coordinates get updated with @method calcViewportBoundaries.
           * @memberOf fabric.StaticCanvas.prototype
           */
          vptCoords: {},
          /**
           * Based on vptCoords and object.aCoords, skip rendering of objects that
           * are not included in current viewport.
           * May greatly help in applications with crowded canvas and use of zoom/pan
           * If One of the corner of the bounding box of the object is on the canvas
           * the objects get rendered.
           * @memberOf fabric.StaticCanvas.prototype
           * @type Boolean
           * @default
           */
          skipOffscreen: !0,
          /**
           * a fabricObject that, without stroke define a clipping area with their shape. filled in black
           * the clipPath object gets used when the canvas has rendered, and the context is placed in the
           * top left corner of the canvas.
           * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
           * @type fabric.Object
           */
          clipPath: void 0,
          /**
           * @private
           * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
           * @param {Object} [options] Options object
           */
          _initStatic: function(r, l) {
            var u = this.requestRenderAllBound;
            this._objects = [], this._createLowerCanvas(r), this._initOptions(l), this.interactive || this._initRetinaScaling(), l.overlayImage && this.setOverlayImage(l.overlayImage, u), l.backgroundImage && this.setBackgroundImage(l.backgroundImage, u), l.backgroundColor && this.setBackgroundColor(l.backgroundColor, u), l.overlayColor && this.setOverlayColor(l.overlayColor, u), this.calcOffset();
          },
          /**
           * @private
           */
          _isRetinaScaling: function() {
            return f.devicePixelRatio > 1 && this.enableRetinaScaling;
          },
          /**
           * @private
           * @return {Number} retinaScaling if applied, otherwise 1;
           */
          getRetinaScaling: function() {
            return this._isRetinaScaling() ? Math.max(1, f.devicePixelRatio) : 1;
          },
          /**
           * @private
           */
          _initRetinaScaling: function() {
            if (this._isRetinaScaling()) {
              var r = f.devicePixelRatio;
              this.__initRetinaScaling(r, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(r, this.upperCanvasEl, this.contextTop);
            }
          },
          __initRetinaScaling: function(r, l, u) {
            l.setAttribute("width", this.width * r), l.setAttribute("height", this.height * r), u.scale(r, r);
          },
          /**
           * Calculates canvas element offset relative to the document
           * This method is also attached as "resize" event handler of window
           * @return {fabric.Canvas} instance
           * @chainable
           */
          calcOffset: function() {
            return this._offset = s(this.lowerCanvasEl), this;
          },
          /**
           * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
           * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
           * @param {Function} callback callback to invoke when image is loaded and set as an overlay
           * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
           * @return {fabric.Canvas} thisArg
           * @chainable
           * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
           * @example <caption>Normal overlayImage with left/top = 0</caption>
           * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
           *   // Needed to position overlayImage at 0/0
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>overlayImage with different properties</caption>
           * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
           *   opacity: 0.5,
           *   angle: 45,
           *   left: 400,
           *   top: 400,
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
           * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
           *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
           *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
           * });
           * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
           * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
           *   width: canvas.width,
           *   height: canvas.height,
           *   // Needed to position overlayImage at 0/0
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>overlayImage loaded from cross-origin</caption>
           * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
           *   opacity: 0.5,
           *   angle: 45,
           *   left: 400,
           *   top: 400,
           *   originX: 'left',
           *   originY: 'top',
           *   crossOrigin: 'anonymous'
           * });
           */
          setOverlayImage: function(r, l, u) {
            return this.__setBgOverlayImage("overlayImage", r, l, u);
          },
          /**
           * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
           * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
           * @param {Function} callback Callback to invoke when image is loaded and set as background
           * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
           * @return {fabric.Canvas} thisArg
           * @chainable
           * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
           * @example <caption>Normal backgroundImage with left/top = 0</caption>
           * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
           *   // Needed to position backgroundImage at 0/0
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>backgroundImage with different properties</caption>
           * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
           *   opacity: 0.5,
           *   angle: 45,
           *   left: 400,
           *   top: 400,
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
           * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
           *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
           *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
           * });
           * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
           * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
           *   width: canvas.width,
           *   height: canvas.height,
           *   // Needed to position backgroundImage at 0/0
           *   originX: 'left',
           *   originY: 'top'
           * });
           * @example <caption>backgroundImage loaded from cross-origin</caption>
           * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
           *   opacity: 0.5,
           *   angle: 45,
           *   left: 400,
           *   top: 400,
           *   originX: 'left',
           *   originY: 'top',
           *   crossOrigin: 'anonymous'
           * });
           */
          // TODO: fix stretched examples
          setBackgroundImage: function(r, l, u) {
            return this.__setBgOverlayImage("backgroundImage", r, l, u);
          },
          /**
           * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
           * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
           * @param {Function} callback Callback to invoke when foreground color is set
           * @return {fabric.Canvas} thisArg
           * @chainable
           * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
           * @example <caption>Normal overlayColor - color value</caption>
           * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
           * @example <caption>fabric.Pattern used as overlayColor</caption>
           * canvas.setOverlayColor({
           *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
           * }, canvas.renderAll.bind(canvas));
           * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
           * canvas.setOverlayColor({
           *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
           *   repeat: 'repeat',
           *   offsetX: 200,
           *   offsetY: 100
           * }, canvas.renderAll.bind(canvas));
           */
          setOverlayColor: function(r, l) {
            return this.__setBgOverlayColor("overlayColor", r, l);
          },
          /**
           * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
           * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
           * @param {Function} callback Callback to invoke when background color is set
           * @return {fabric.Canvas} thisArg
           * @chainable
           * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
           * @example <caption>Normal backgroundColor - color value</caption>
           * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
           * @example <caption>fabric.Pattern used as backgroundColor</caption>
           * canvas.setBackgroundColor({
           *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
           * }, canvas.renderAll.bind(canvas));
           * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
           * canvas.setBackgroundColor({
           *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
           *   repeat: 'repeat',
           *   offsetX: 200,
           *   offsetY: 100
           * }, canvas.renderAll.bind(canvas));
           */
          setBackgroundColor: function(r, l) {
            return this.__setBgOverlayColor("backgroundColor", r, l);
          },
          /**
           * @private
           * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
           * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
           * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
           * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay. The first argument is the created image, the second argument is a flag indicating whether an error occurred or not.
           * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
           */
          __setBgOverlayImage: function(r, l, u, d) {
            return typeof l == "string" ? f.util.loadImage(l, function(g, m) {
              if (g) {
                var v = new f.Image(g, d);
                this[r] = v, v.canvas = this;
              }
              u && u(g, m);
            }, this, d && d.crossOrigin) : (d && l.setOptions(d), this[r] = l, l && (l.canvas = this), u && u(l, !1)), this;
          },
          /**
           * @private
           * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
           * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
           * @param {(Object|String|null)} color Object with pattern information, color value or null
           * @param {Function} [callback] Callback is invoked when color is set
           */
          __setBgOverlayColor: function(r, l, u) {
            return this[r] = l, this._initGradient(l, r), this._initPattern(l, r, u), this;
          },
          /**
           * @private
           */
          _createCanvasElement: function() {
            var r = n();
            if (!r || (r.style || (r.style = {}), typeof r.getContext > "u"))
              throw a;
            return r;
          },
          /**
           * @private
           * @param {Object} [options] Options object
           */
          _initOptions: function(r) {
            var l = this.lowerCanvasEl;
            this._setOptions(r), this.width = this.width || parseInt(l.width, 10) || 0, this.height = this.height || parseInt(l.height, 10) || 0, this.lowerCanvasEl.style && (l.width = this.width, l.height = this.height, l.style.width = this.width + "px", l.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
          },
          /**
           * Creates a bottom canvas
           * @private
           * @param {HTMLElement} [canvasEl]
           */
          _createLowerCanvas: function(r) {
            r && r.getContext ? this.lowerCanvasEl = r : this.lowerCanvasEl = f.util.getById(r) || this._createCanvasElement(), f.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
          },
          /**
           * Returns canvas width (in px)
           * @return {Number}
           */
          getWidth: function() {
            return this.width;
          },
          /**
           * Returns canvas height (in px)
           * @return {Number}
           */
          getHeight: function() {
            return this.height;
          },
          /**
           * Sets width of this canvas instance
           * @param {Number|String} value                         Value to set width to
           * @param {Object}        [options]                     Options object
           * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
           * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          setWidth: function(r, l) {
            return this.setDimensions({ width: r }, l);
          },
          /**
           * Sets height of this canvas instance
           * @param {Number|String} value                         Value to set height to
           * @param {Object}        [options]                     Options object
           * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
           * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          setHeight: function(r, l) {
            return this.setDimensions({ height: r }, l);
          },
          /**
           * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
           * @param {Object}        dimensions                    Object with width/height properties
           * @param {Number|String} [dimensions.width]            Width of canvas element
           * @param {Number|String} [dimensions.height]           Height of canvas element
           * @param {Object}        [options]                     Options object
           * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
           * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          setDimensions: function(r, l) {
            var u;
            l = l || {};
            for (var d in r)
              u = r[d], l.cssOnly || (this._setBackstoreDimension(d, r[d]), u += "px", this.hasLostContext = !0), l.backstoreOnly || this._setCssDimension(d, u);
            return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), l.cssOnly || this.requestRenderAll(), this;
          },
          /**
           * Helper for setting width/height
           * @private
           * @param {String} prop property (width|height)
           * @param {Number} value value to set property to
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          _setBackstoreDimension: function(r, l) {
            return this.lowerCanvasEl[r] = l, this.upperCanvasEl && (this.upperCanvasEl[r] = l), this.cacheCanvasEl && (this.cacheCanvasEl[r] = l), this[r] = l, this;
          },
          /**
           * Helper for setting css width/height
           * @private
           * @param {String} prop property (width|height)
           * @param {String} value value to set property to
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          _setCssDimension: function(r, l) {
            return this.lowerCanvasEl.style[r] = l, this.upperCanvasEl && (this.upperCanvasEl.style[r] = l), this.wrapperEl && (this.wrapperEl.style[r] = l), this;
          },
          /**
           * Returns canvas zoom level
           * @return {Number}
           */
          getZoom: function() {
            return this.viewportTransform[0];
          },
          /**
           * Sets viewport transformation of this canvas instance
           * @param {Array} vpt a Canvas 2D API transform matrix
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          setViewportTransform: function(r) {
            var l = this._activeObject, u = this.backgroundImage, d = this.overlayImage, g, m, v;
            for (this.viewportTransform = r, m = 0, v = this._objects.length; m < v; m++)
              g = this._objects[m], g.group || g.setCoords(!0);
            return l && l.setCoords(), u && u.setCoords(!0), d && d.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * Sets zoom level of this canvas instance, the zoom centered around point
           * meaning that following zoom to point with the same point will have the visual
           * effect of the zoom originating from that point. The point won't move.
           * It has nothing to do with canvas center or visual center of the viewport.
           * @param {fabric.Point} point to zoom with respect to
           * @param {Number} value to set zoom to, less than 1 zooms out
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          zoomToPoint: function(r, l) {
            var u = r, d = this.viewportTransform.slice(0);
            r = i(r, e(this.viewportTransform)), d[0] = l, d[3] = l;
            var g = i(r, d);
            return d[4] += u.x - g.x, d[5] += u.y - g.y, this.setViewportTransform(d);
          },
          /**
           * Sets zoom level of this canvas instance
           * @param {Number} value to set zoom to, less than 1 zooms out
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          setZoom: function(r) {
            return this.zoomToPoint(new f.Point(0, 0), r), this;
          },
          /**
           * Pan viewport so as to place point at top left corner of canvas
           * @param {fabric.Point} point to move to
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          absolutePan: function(r) {
            var l = this.viewportTransform.slice(0);
            return l[4] = -r.x, l[5] = -r.y, this.setViewportTransform(l);
          },
          /**
           * Pans viewpoint relatively
           * @param {fabric.Point} point (position vector) to move by
           * @return {fabric.Canvas} instance
           * @chainable true
           */
          relativePan: function(r) {
            return this.absolutePan(new f.Point(
              -r.x - this.viewportTransform[4],
              -r.y - this.viewportTransform[5]
            ));
          },
          /**
           * Returns &lt;canvas> element corresponding to this instance
           * @return {HTMLCanvasElement}
           */
          getElement: function() {
            return this.lowerCanvasEl;
          },
          /**
           * @private
           * @param {fabric.Object} obj Object that was added
           */
          _onObjectAdded: function(r) {
            this.stateful && r.setupState(), r._set("canvas", this), r.setCoords(), this.fire("object:added", { target: r }), r.fire("added");
          },
          /**
           * @private
           * @param {fabric.Object} obj Object that was removed
           */
          _onObjectRemoved: function(r) {
            this.fire("object:removed", { target: r }), r.fire("removed"), delete r.canvas;
          },
          /**
           * Clears specified context of canvas element
           * @param {CanvasRenderingContext2D} ctx Context to clear
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          clearContext: function(r) {
            return r.clearRect(0, 0, this.width, this.height), this;
          },
          /**
           * Returns context of canvas where objects are drawn
           * @return {CanvasRenderingContext2D}
           */
          getContext: function() {
            return this.contextContainer;
          },
          /**
           * Clears all contexts (background, main, top) of an instance
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          clear: function() {
            return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * Renders the canvas
           * @return {fabric.Canvas} instance
           * @chainable
           */
          renderAll: function() {
            var r = this.contextContainer;
            return this.renderCanvas(r, this._objects), this;
          },
          /**
           * Function created to be instance bound at initialization
           * used in requestAnimationFrame rendering
           * Let the fabricJS call it. If you call it manually you could have more
           * animationFrame stacking on to of each other
           * for an imperative rendering, use canvas.renderAll
           * @private
           * @return {fabric.Canvas} instance
           * @chainable
           */
          renderAndReset: function() {
            this.isRendering = 0, this.renderAll();
          },
          /**
           * Append a renderAll request to next animation frame.
           * unless one is already in progress, in that case nothing is done
           * a boolean flag will avoid appending more.
           * @return {fabric.Canvas} instance
           * @chainable
           */
          requestRenderAll: function() {
            return this.isRendering || (this.isRendering = f.util.requestAnimFrame(this.renderAndResetBound)), this;
          },
          /**
           * Calculate the position of the 4 corner of canvas with current viewportTransform.
           * helps to determinate when an object is in the current rendering viewport using
           * object absolute coordinates ( aCoords )
           * @return {Object} points.tl
           * @chainable
           */
          calcViewportBoundaries: function() {
            var r = {}, l = this.width, u = this.height, d = e(this.viewportTransform);
            return r.tl = i({ x: 0, y: 0 }, d), r.br = i({ x: l, y: u }, d), r.tr = new f.Point(r.br.x, r.tl.y), r.bl = new f.Point(r.tl.x, r.br.y), this.vptCoords = r, r;
          },
          cancelRequestedRender: function() {
            this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
          },
          /**
           * Renders background, objects, overlay and controls.
           * @param {CanvasRenderingContext2D} ctx
           * @param {Array} objects to render
           * @return {fabric.Canvas} instance
           * @chainable
           */
          renderCanvas: function(r, l) {
            var u = this.viewportTransform, d = this.clipPath;
            this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(r), f.util.setImageSmoothing(r, this.imageSmoothingEnabled), this.fire("before:render", { ctx: r }), this._renderBackground(r), r.save(), r.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._renderObjects(r, l), r.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(r), d && (d.canvas = this, d.shouldCache(), d._transformDone = !0, d.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(r)), this._renderOverlay(r), this.controlsAboveOverlay && this.interactive && this.drawControls(r), this.fire("after:render", { ctx: r });
          },
          /**
           * Paint the cached clipPath on the lowerCanvasEl
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          drawClipPathOnCanvas: function(r) {
            var l = this.viewportTransform, u = this.clipPath;
            r.save(), r.transform(l[0], l[1], l[2], l[3], l[4], l[5]), r.globalCompositeOperation = "destination-in", u.transform(r), r.scale(1 / u.zoomX, 1 / u.zoomY), r.drawImage(u._cacheCanvas, -u.cacheTranslationX, -u.cacheTranslationY), r.restore();
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Array} objects to render
           */
          _renderObjects: function(r, l) {
            var u, d;
            for (u = 0, d = l.length; u < d; ++u)
              l[u] && l[u].render(r);
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {string} property 'background' or 'overlay'
           */
          _renderBackgroundOrOverlay: function(r, l) {
            var u = this[l + "Color"], d = this[l + "Image"], g = this.viewportTransform, m = this[l + "Vpt"];
            if (!(!u && !d)) {
              if (u) {
                r.save(), r.beginPath(), r.moveTo(0, 0), r.lineTo(this.width, 0), r.lineTo(this.width, this.height), r.lineTo(0, this.height), r.closePath(), r.fillStyle = u.toLive ? u.toLive(r, this) : u, m && r.transform(g[0], g[1], g[2], g[3], g[4], g[5]), r.transform(1, 0, 0, 1, u.offsetX || 0, u.offsetY || 0);
                var v = u.gradientTransform || u.patternTransform;
                v && r.transform(v[0], v[1], v[2], v[3], v[4], v[5]), r.fill(), r.restore();
              }
              if (d) {
                r.save();
                var y = this.skipOffscreen;
                this.skipOffscreen = m, m && r.transform(g[0], g[1], g[2], g[3], g[4], g[5]), d.render(r), this.skipOffscreen = y, r.restore();
              }
            }
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderBackground: function(r) {
            this._renderBackgroundOrOverlay(r, "background");
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderOverlay: function(r) {
            this._renderBackgroundOrOverlay(r, "overlay");
          },
          /**
           * Returns coordinates of a center of canvas.
           * Returned value is an object with top and left properties
           * @return {Object} object with "top" and "left" number values
           * @deprecated migrate to `getCenterPoint`
           */
          getCenter: function() {
            return {
              top: this.height / 2,
              left: this.width / 2
            };
          },
          /**
           * Returns coordinates of a center of canvas.
           * @return {fabric.Point} 
           */
          getCenterPoint: function() {
            return new f.Point(this.width / 2, this.height / 2);
          },
          /**
           * Centers object horizontally in the canvas
           * @param {fabric.Object} object Object to center horizontally
           * @return {fabric.Canvas} thisArg
           */
          centerObjectH: function(r) {
            return this._centerObject(r, new f.Point(this.getCenterPoint().x, r.getCenterPoint().y));
          },
          /**
           * Centers object vertically in the canvas
           * @param {fabric.Object} object Object to center vertically
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          centerObjectV: function(r) {
            return this._centerObject(r, new f.Point(r.getCenterPoint().x, this.getCenterPoint().y));
          },
          /**
           * Centers object vertically and horizontally in the canvas
           * @param {fabric.Object} object Object to center vertically and horizontally
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          centerObject: function(r) {
            var l = this.getCenterPoint();
            return this._centerObject(r, l);
          },
          /**
           * Centers object vertically and horizontally in the viewport
           * @param {fabric.Object} object Object to center vertically and horizontally
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          viewportCenterObject: function(r) {
            var l = this.getVpCenter();
            return this._centerObject(r, l);
          },
          /**
           * Centers object horizontally in the viewport, object.top is unchanged
           * @param {fabric.Object} object Object to center vertically and horizontally
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          viewportCenterObjectH: function(r) {
            var l = this.getVpCenter();
            return this._centerObject(r, new f.Point(l.x, r.getCenterPoint().y)), this;
          },
          /**
           * Centers object Vertically in the viewport, object.top is unchanged
           * @param {fabric.Object} object Object to center vertically and horizontally
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          viewportCenterObjectV: function(r) {
            var l = this.getVpCenter();
            return this._centerObject(r, new f.Point(r.getCenterPoint().x, l.y));
          },
          /**
           * Calculate the point in canvas that correspond to the center of actual viewport.
           * @return {fabric.Point} vpCenter, viewport center
           * @chainable
           */
          getVpCenter: function() {
            var r = this.getCenterPoint(), l = e(this.viewportTransform);
            return i(r, l);
          },
          /**
           * @private
           * @param {fabric.Object} object Object to center
           * @param {fabric.Point} center Center point
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          _centerObject: function(r, l) {
            return r.setPositionByOrigin(l, "center", "center"), r.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * Returns dataless JSON representation of canvas
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {String} json string
           */
          toDatalessJSON: function(r) {
            return this.toDatalessObject(r);
          },
          /**
           * Returns object representation of canvas
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(r) {
            return this._toObjectMethod("toObject", r);
          },
          /**
           * Returns dataless object representation of canvas
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toDatalessObject: function(r) {
            return this._toObjectMethod("toDatalessObject", r);
          },
          /**
           * @private
           */
          _toObjectMethod: function(r, l) {
            var u = this.clipPath, d = {
              version: f.version,
              objects: this._toObjects(r, l)
            };
            return u && !u.excludeFromExport && (d.clipPath = this._toObject(this.clipPath, r, l)), c(d, this.__serializeBgOverlay(r, l)), f.util.populateWithProperties(this, d, l), d;
          },
          /**
           * @private
           */
          _toObjects: function(r, l) {
            return this._objects.filter(function(u) {
              return !u.excludeFromExport;
            }).map(function(u) {
              return this._toObject(u, r, l);
            }, this);
          },
          /**
           * @private
           */
          _toObject: function(r, l, u) {
            var d;
            this.includeDefaultValues || (d = r.includeDefaultValues, r.includeDefaultValues = !1);
            var g = r[l](u);
            return this.includeDefaultValues || (r.includeDefaultValues = d), g;
          },
          /**
           * @private
           */
          __serializeBgOverlay: function(r, l) {
            var u = {}, d = this.backgroundImage, g = this.overlayImage, m = this.backgroundColor, v = this.overlayColor;
            return m && m.toObject ? m.excludeFromExport || (u.background = m.toObject(l)) : m && (u.background = m), v && v.toObject ? v.excludeFromExport || (u.overlay = v.toObject(l)) : v && (u.overlay = v), d && !d.excludeFromExport && (u.backgroundImage = this._toObject(d, r, l)), g && !g.excludeFromExport && (u.overlayImage = this._toObject(g, r, l)), u;
          },
          /* _TO_SVG_START_ */
          /**
           * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
           * a zoomed canvas will then produce zoomed SVG output.
           * @type Boolean
           * @default
           */
          svgViewportTransformation: !0,
          /**
           * Returns SVG representation of canvas
           * @function
           * @param {Object} [options] Options object for SVG output
           * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
           * @param {Object} [options.viewBox] SVG viewbox object
           * @param {Number} [options.viewBox.x] x-coordinate of viewbox
           * @param {Number} [options.viewBox.y] y-coordinate of viewbox
           * @param {Number} [options.viewBox.width] Width of viewbox
           * @param {Number} [options.viewBox.height] Height of viewbox
           * @param {String} [options.encoding=UTF-8] Encoding of SVG output
           * @param {String} [options.width] desired width of svg with or without units
           * @param {String} [options.height] desired height of svg with or without units
           * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
           * @return {String} SVG string
           * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
           * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
           * @example <caption>Normal SVG output</caption>
           * var svg = canvas.toSVG();
           * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
           * var svg = canvas.toSVG({suppressPreamble: true});
           * @example <caption>SVG output with viewBox attribute</caption>
           * var svg = canvas.toSVG({
           *   viewBox: {
           *     x: 100,
           *     y: 100,
           *     width: 200,
           *     height: 300
           *   }
           * });
           * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
           * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
           * @example <caption>Modify SVG output with reviver function</caption>
           * var svg = canvas.toSVG(null, function(svg) {
           *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
           * });
           */
          toSVG: function(r, l) {
            r || (r = {}), r.reviver = l;
            var u = [];
            return this._setSVGPreamble(u, r), this._setSVGHeader(u, r), this.clipPath && u.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(u, "background"), this._setSVGBgOverlayImage(u, "backgroundImage", l), this._setSVGObjects(u, l), this.clipPath && u.push(`</g>
`), this._setSVGBgOverlayColor(u, "overlay"), this._setSVGBgOverlayImage(u, "overlayImage", l), u.push("</svg>"), u.join("");
          },
          /**
           * @private
           */
          _setSVGPreamble: function(r, l) {
            l.suppressPreamble || r.push(
              '<?xml version="1.0" encoding="',
              l.encoding || "UTF-8",
              `" standalone="no" ?>
`,
              '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
              `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
            );
          },
          /**
           * @private
           */
          _setSVGHeader: function(r, l) {
            var u = l.width || this.width, d = l.height || this.height, g, m = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', v = f.Object.NUM_FRACTION_DIGITS;
            l.viewBox ? m = 'viewBox="' + l.viewBox.x + " " + l.viewBox.y + " " + l.viewBox.width + " " + l.viewBox.height + '" ' : this.svgViewportTransformation && (g = this.viewportTransform, m = 'viewBox="' + o(-g[4] / g[0], v) + " " + o(-g[5] / g[3], v) + " " + o(this.width / g[0], v) + " " + o(this.height / g[3], v) + '" '), r.push(
              "<svg ",
              'xmlns="http://www.w3.org/2000/svg" ',
              'xmlns:xlink="http://www.w3.org/1999/xlink" ',
              'version="1.1" ',
              'width="',
              u,
              '" ',
              'height="',
              d,
              '" ',
              m,
              `xml:space="preserve">
`,
              "<desc>Created with Fabric.js ",
              f.version,
              `</desc>
`,
              `<defs>
`,
              this.createSVGFontFacesMarkup(),
              this.createSVGRefElementsMarkup(),
              this.createSVGClipPathMarkup(l),
              `</defs>
`
            );
          },
          createSVGClipPathMarkup: function(r) {
            var l = this.clipPath;
            return l ? (l.clipPathId = "CLIPPATH_" + f.Object.__uid++, '<clipPath id="' + l.clipPathId + `" >
` + this.clipPath.toClipPathSVG(r.reviver) + `</clipPath>
`) : "";
          },
          /**
           * Creates markup containing SVG referenced elements like patterns, gradients etc.
           * @return {String}
           */
          createSVGRefElementsMarkup: function() {
            var r = this, l = ["background", "overlay"].map(function(u) {
              var d = r[u + "Color"];
              if (d && d.toLive) {
                var g = r[u + "Vpt"], m = r.viewportTransform, v = {
                  width: r.width / (g ? m[0] : 1),
                  height: r.height / (g ? m[3] : 1)
                };
                return d.toSVG(
                  v,
                  { additionalTransform: g ? f.util.matrixToSVG(m) : "" }
                );
              }
            });
            return l.join("");
          },
          /**
           * Creates markup containing SVG font faces,
           * font URLs for font faces must be collected by developers
           * and are not extracted from the DOM by fabricjs
           * @param {Array} objects Array of fabric objects
           * @return {String}
           */
          createSVGFontFacesMarkup: function() {
            var r = "", l = {}, u, d, g, m, v, y, w, E, L, W = f.fontPaths, G = [];
            for (this._objects.forEach(function H(N) {
              G.push(N), N._objects && N._objects.forEach(H);
            }), E = 0, L = G.length; E < L; E++)
              if (u = G[E], d = u.fontFamily, !(u.type.indexOf("text") === -1 || l[d] || !W[d]) && (l[d] = !0, !!u.styles)) {
                g = u.styles;
                for (v in g) {
                  m = g[v];
                  for (w in m)
                    y = m[w], d = y.fontFamily, !l[d] && W[d] && (l[d] = !0);
                }
              }
            for (var V in l)
              r += [
                `		@font-face {
`,
                "			font-family: '",
                V,
                `';
`,
                "			src: url('",
                W[V],
                `');
`,
                `		}
`
              ].join("");
            return r && (r = [
              '	<style type="text/css">',
              `<![CDATA[
`,
              r,
              "]]>",
              `</style>
`
            ].join("")), r;
          },
          /**
           * @private
           */
          _setSVGObjects: function(r, l) {
            var u, d, g, m = this._objects;
            for (d = 0, g = m.length; d < g; d++)
              u = m[d], !u.excludeFromExport && this._setSVGObject(r, u, l);
          },
          /**
           * @private
           */
          _setSVGObject: function(r, l, u) {
            r.push(l.toSVG(u));
          },
          /**
           * @private
           */
          _setSVGBgOverlayImage: function(r, l, u) {
            this[l] && !this[l].excludeFromExport && this[l].toSVG && r.push(this[l].toSVG(u));
          },
          /**
           * @private
           */
          _setSVGBgOverlayColor: function(r, l) {
            var u = this[l + "Color"], d = this.viewportTransform, g = this.width, m = this.height;
            if (u)
              if (u.toLive) {
                var v = u.repeat, y = f.util.invertTransform(d), w = this[l + "Vpt"], E = w ? f.util.matrixToSVG(y) : "";
                r.push(
                  '<rect transform="' + E + " translate(",
                  g / 2,
                  ",",
                  m / 2,
                  ')"',
                  ' x="',
                  u.offsetX - g / 2,
                  '" y="',
                  u.offsetY - m / 2,
                  '" ',
                  'width="',
                  v === "repeat-y" || v === "no-repeat" ? u.source.width : g,
                  '" height="',
                  v === "repeat-x" || v === "no-repeat" ? u.source.height : m,
                  '" fill="url(#SVGID_' + u.id + ')"',
                  `></rect>
`
                );
              } else
                r.push(
                  '<rect x="0" y="0" width="100%" height="100%" ',
                  'fill="',
                  u,
                  '"',
                  `></rect>
`
                );
          },
          /* _TO_SVG_END_ */
          /**
           * Moves an object or the objects of a multiple selection
           * to the bottom of the stack of drawn objects
           * @param {fabric.Object} object Object to send to back
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          sendToBack: function(r) {
            if (!r)
              return this;
            var l = this._activeObject, u, d, g;
            if (r === l && r.type === "activeSelection")
              for (g = l._objects, u = g.length; u--; )
                d = g[u], h(this._objects, d), this._objects.unshift(d);
            else
              h(this._objects, r), this._objects.unshift(r);
            return this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * Moves an object or the objects of a multiple selection
           * to the top of the stack of drawn objects
           * @param {fabric.Object} object Object to send
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          bringToFront: function(r) {
            if (!r)
              return this;
            var l = this._activeObject, u, d, g;
            if (r === l && r.type === "activeSelection")
              for (g = l._objects, u = 0; u < g.length; u++)
                d = g[u], h(this._objects, d), this._objects.push(d);
            else
              h(this._objects, r), this._objects.push(r);
            return this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * Moves an object or a selection down in stack of drawn objects
           * An optional parameter, intersecting allows to move the object in behind
           * the first intersecting object. Where intersection is calculated with
           * bounding box. If no intersection is found, there will not be change in the
           * stack.
           * @param {fabric.Object} object Object to send
           * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          sendBackwards: function(r, l) {
            if (!r)
              return this;
            var u = this._activeObject, d, g, m, v, y, w = 0;
            if (r === u && r.type === "activeSelection")
              for (y = u._objects, d = 0; d < y.length; d++)
                g = y[d], m = this._objects.indexOf(g), m > 0 + w && (v = m - 1, h(this._objects, g), this._objects.splice(v, 0, g)), w++;
            else
              m = this._objects.indexOf(r), m !== 0 && (v = this._findNewLowerIndex(r, m, l), h(this._objects, r), this._objects.splice(v, 0, r));
            return this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * @private
           */
          _findNewLowerIndex: function(r, l, u) {
            var d, g;
            if (u)
              for (d = l, g = l - 1; g >= 0; --g) {
                var m = r.intersectsWithObject(this._objects[g]) || r.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(r);
                if (m) {
                  d = g;
                  break;
                }
              }
            else
              d = l - 1;
            return d;
          },
          /**
           * Moves an object or a selection up in stack of drawn objects
           * An optional parameter, intersecting allows to move the object in front
           * of the first intersecting object. Where intersection is calculated with
           * bounding box. If no intersection is found, there will not be change in the
           * stack.
           * @param {fabric.Object} object Object to send
           * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          bringForward: function(r, l) {
            if (!r)
              return this;
            var u = this._activeObject, d, g, m, v, y, w = 0;
            if (r === u && r.type === "activeSelection")
              for (y = u._objects, d = y.length; d--; )
                g = y[d], m = this._objects.indexOf(g), m < this._objects.length - 1 - w && (v = m + 1, h(this._objects, g), this._objects.splice(v, 0, g)), w++;
            else
              m = this._objects.indexOf(r), m !== this._objects.length - 1 && (v = this._findNewUpperIndex(r, m, l), h(this._objects, r), this._objects.splice(v, 0, r));
            return this.renderOnAddRemove && this.requestRenderAll(), this;
          },
          /**
           * @private
           */
          _findNewUpperIndex: function(r, l, u) {
            var d, g, m;
            if (u)
              for (d = l, g = l + 1, m = this._objects.length; g < m; ++g) {
                var v = r.intersectsWithObject(this._objects[g]) || r.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(r);
                if (v) {
                  d = g;
                  break;
                }
              }
            else
              d = l + 1;
            return d;
          },
          /**
           * Moves an object to specified level in stack of drawn objects
           * @param {fabric.Object} object Object to send
           * @param {Number} index Position to move to
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          moveTo: function(r, l) {
            return h(this._objects, r), this._objects.splice(l, 0, r), this.renderOnAddRemove && this.requestRenderAll();
          },
          /**
           * Clears a canvas element and dispose objects
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          dispose: function() {
            return this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(r) {
              r.dispose && r.dispose();
            }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), f.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), f.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
          },
          /**
           * Returns a string representation of an instance
           * @return {String} string representation of an instance
           */
          toString: function() {
            return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
          }
        }
      ), c(f.StaticCanvas.prototype, f.Observable), c(f.StaticCanvas.prototype, f.Collection), c(f.StaticCanvas.prototype, f.DataURLExporter), c(
        f.StaticCanvas,
        /** @lends fabric.StaticCanvas */
        {
          /**
           * @static
           * @type String
           * @default
           */
          EMPTY_JSON: '{"objects": [], "background": "white"}',
          /**
           * Provides a way to check support of some of the canvas methods
           * (either those of HTMLCanvasElement itself, or rendering context)
           *
           * @param {String} methodName Method to check support for;
           *                            Could be one of "setLineDash"
           * @return {Boolean | null} `true` if method is supported (or at least exists),
           *                          `null` if canvas element or context can not be initialized
           */
          supports: function(r) {
            var l = n();
            if (!l || !l.getContext)
              return null;
            var u = l.getContext("2d");
            if (!u)
              return null;
            switch (r) {
              case "setLineDash":
                return typeof u.setLineDash < "u";
              default:
                return null;
            }
          }
        }
      ), f.StaticCanvas.prototype.toJSON = f.StaticCanvas.prototype.toObject, f.isLikelyNode && (f.StaticCanvas.prototype.createPNGStream = function() {
        var r = t(this.lowerCanvasEl);
        return r && r.createPNGStream();
      }, f.StaticCanvas.prototype.createJPEGStream = function(r) {
        var l = t(this.lowerCanvasEl);
        return l && l.createJPEGStream(r);
      });
    })(), f.BaseBrush = f.util.createClass(
      /** @lends fabric.BaseBrush.prototype */
      {
        /**
         * Color of a brush
         * @type String
         * @default
         */
        color: "rgb(0, 0, 0)",
        /**
         * Width of a brush, has to be a Number, no string literals
         * @type Number
         * @default
         */
        width: 1,
        /**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
         * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * Line endings style of a brush (one of "butt", "round", "square")
         * @type String
         * @default
         */
        strokeLineCap: "round",
        /**
         * Corner style of a brush (one of "bevel", "round", "miter")
         * @type String
         * @default
         */
        strokeLineJoin: "round",
        /**
         * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
         * @type Number
         * @default
         */
        strokeMiterLimit: 10,
        /**
         * Stroke Dash Array.
         * @type Array
         * @default
         */
        strokeDashArray: null,
        /**
         * When `true`, the free drawing is limited to the whiteboard size. Default to false.
         * @type Boolean
         * @default false
        */
        limitedToCanvasSize: !1,
        /**
         * Sets brush styles
         * @private
         * @param {CanvasRenderingContext2D} ctx
         */
        _setBrushStyles: function(c) {
          c.strokeStyle = this.color, c.lineWidth = this.width, c.lineCap = this.strokeLineCap, c.miterLimit = this.strokeMiterLimit, c.lineJoin = this.strokeLineJoin, c.setLineDash(this.strokeDashArray || []);
        },
        /**
         * Sets the transformation on given context
         * @param {RenderingContext2d} ctx context to render on
         * @private
         */
        _saveAndTransform: function(c) {
          var s = this.canvas.viewportTransform;
          c.save(), c.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
        },
        /**
         * Sets brush shadow styles
         * @private
         */
        _setShadow: function() {
          if (this.shadow) {
            var c = this.canvas, s = this.shadow, h = c.contextTop, o = c.getZoom();
            c && c._isRetinaScaling() && (o *= f.devicePixelRatio), h.shadowColor = s.color, h.shadowBlur = s.blur * o, h.shadowOffsetX = s.offsetX * o, h.shadowOffsetY = s.offsetY * o;
          }
        },
        needsFullRender: function() {
          var c = new f.Color(this.color);
          return c.getAlpha() < 1 || !!this.shadow;
        },
        /**
         * Removes brush shadow styles
         * @private
         */
        _resetShadow: function() {
          var c = this.canvas.contextTop;
          c.shadowColor = "", c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
        },
        /**
         * Check is pointer is outside canvas boundaries
         * @param {Object} pointer
         * @private
        */
        _isOutSideCanvas: function(c) {
          return c.x < 0 || c.x > this.canvas.getWidth() || c.y < 0 || c.y > this.canvas.getHeight();
        }
      }
    ), (function() {
      f.PencilBrush = f.util.createClass(
        f.BaseBrush,
        /** @lends fabric.PencilBrush.prototype */
        {
          /**
           * Discard points that are less than `decimate` pixel distant from each other
           * @type Number
           * @default 0.4
           */
          decimate: 0.4,
          /**
           * Draws a straight line between last recorded point to current pointer
           * Used for `shift` functionality
           *
           * @type boolean
           * @default false
           */
          drawStraightLine: !1,
          /**
           * The event modifier key that makes the brush draw a straight line.
           * If `null` or 'none' or any other string that is not a modifier key the feature is disabled.
           * @type {'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null}
           */
          straightLineKey: "shiftKey",
          /**
           * Constructor
           * @param {fabric.Canvas} canvas
           * @return {fabric.PencilBrush} Instance of a pencil brush
           */
          initialize: function(c) {
            this.canvas = c, this._points = [];
          },
          needsFullRender: function() {
            return this.callSuper("needsFullRender") || this._hasStraightLine;
          },
          /**
           * Invoked inside on mouse down and mouse move
           * @param {Object} pointer
           */
          _drawSegment: function(c, s, h) {
            var o = s.midPointFrom(h);
            return c.quadraticCurveTo(s.x, s.y, o.x, o.y), o;
          },
          /**
           * Invoked on mouse down
           * @param {Object} pointer
           */
          onMouseDown: function(c, s) {
            this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], this._prepareForDrawing(c), this._captureDrawingPath(c), this._render());
          },
          /**
           * Invoked on mouse move
           * @param {Object} pointer
           */
          onMouseMove: function(c, s) {
            if (this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], !(this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c)) && this._captureDrawingPath(c) && this._points.length > 1))
              if (this.needsFullRender())
                this.canvas.clearContext(this.canvas.contextTop), this._render();
              else {
                var h = this._points, o = h.length, i = this.canvas.contextTop;
                this._saveAndTransform(i), this.oldEnd && (i.beginPath(), i.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(i, h[o - 2], h[o - 1], !0), i.stroke(), i.restore();
              }
          },
          /**
           * Invoked on mouse up
           */
          onMouseUp: function(c) {
            return this.canvas._isMainEvent(c.e) ? (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1) : !0;
          },
          /**
           * @private
           * @param {Object} pointer Actual mouse position related to the canvas.
           */
          _prepareForDrawing: function(c) {
            var s = new f.Point(c.x, c.y);
            this._reset(), this._addPoint(s), this.canvas.contextTop.moveTo(s.x, s.y);
          },
          /**
           * @private
           * @param {fabric.Point} point Point to be added to points array
           */
          _addPoint: function(c) {
            return this._points.length > 1 && c.eq(this._points[this._points.length - 1]) ? !1 : (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(c), !0);
          },
          /**
           * Clear points array and set contextTop canvas style.
           * @private
           */
          _reset: function() {
            this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
          },
          /**
           * @private
           * @param {Object} pointer Actual mouse position related to the canvas.
           */
          _captureDrawingPath: function(c) {
            var s = new f.Point(c.x, c.y);
            return this._addPoint(s);
          },
          /**
           * Draw a smooth path on the topCanvas using quadraticCurveTo
           * @private
           * @param {CanvasRenderingContext2D} [ctx]
           */
          _render: function(c) {
            var s, h, o = this._points[0], i = this._points[1];
            if (c = c || this.canvas.contextTop, this._saveAndTransform(c), c.beginPath(), this._points.length === 2 && o.x === i.x && o.y === i.y) {
              var e = this.width / 1e3;
              o = new f.Point(o.x, o.y), i = new f.Point(i.x, i.y), o.x -= e, i.x += e;
            }
            for (c.moveTo(o.x, o.y), s = 1, h = this._points.length; s < h; s++)
              this._drawSegment(c, o, i), o = this._points[s], i = this._points[s + 1];
            c.lineTo(o.x, o.y), c.stroke(), c.restore();
          },
          /**
           * Converts points to SVG path
           * @param {Array} points Array of points
           * @return {(string|number)[][]} SVG path commands
           */
          convertPointsToSVGPath: function(c) {
            var s = this.width / 1e3;
            return f.util.getSmoothPathFromPoints(c, s);
          },
          /**
           * @private
           * @param {(string|number)[][]} pathData SVG path commands
           * @returns {boolean}
           */
          _isEmptySVGPath: function(c) {
            var s = f.util.joinPath(c);
            return s === "M 0 0 Q 0 0 0 0 L 0 0";
          },
          /**
           * Creates fabric.Path object to add on canvas
           * @param {(string|number)[][]} pathData Path data
           * @return {fabric.Path} Path to add on canvas
           */
          createPath: function(c) {
            var s = new f.Path(c, {
              fill: null,
              stroke: this.color,
              strokeWidth: this.width,
              strokeLineCap: this.strokeLineCap,
              strokeMiterLimit: this.strokeMiterLimit,
              strokeLineJoin: this.strokeLineJoin,
              strokeDashArray: this.strokeDashArray
            });
            return this.shadow && (this.shadow.affectStroke = !0, s.shadow = new f.Shadow(this.shadow)), s;
          },
          /**
           * Decimate points array with the decimate value
           */
          decimatePoints: function(c, s) {
            if (c.length <= 2)
              return c;
            var h = this.canvas.getZoom(), o = Math.pow(s / h, 2), i, e = c.length - 1, t = c[0], n = [t], a;
            for (i = 1; i < e - 1; i++)
              a = Math.pow(t.x - c[i].x, 2) + Math.pow(t.y - c[i].y, 2), a >= o && (t = c[i], n.push(t));
            return n.push(c[e]), n;
          },
          /**
           * On mouseup after drawing the path on contextTop canvas
           * we use the points captured to create an new fabric path object
           * and add it to the fabric canvas.
           */
          _finalizeAndAddPath: function() {
            var c = this.canvas.contextTop;
            c.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
            var s = this.convertPointsToSVGPath(this._points);
            if (this._isEmptySVGPath(s)) {
              this.canvas.requestRenderAll();
              return;
            }
            var h = this.createPath(s);
            this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: h }), this.canvas.add(h), this.canvas.requestRenderAll(), h.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: h });
          }
        }
      );
    })(), f.CircleBrush = f.util.createClass(
      f.BaseBrush,
      /** @lends fabric.CircleBrush.prototype */
      {
        /**
         * Width of a brush
         * @type Number
         * @default
         */
        width: 10,
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.CircleBrush} Instance of a circle brush
         */
        initialize: function(c) {
          this.canvas = c, this.points = [];
        },
        /**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
        drawDot: function(c) {
          var s = this.addPoint(c), h = this.canvas.contextTop;
          this._saveAndTransform(h), this.dot(h, s), h.restore();
        },
        dot: function(c, s) {
          c.fillStyle = s.fill, c.beginPath(), c.arc(s.x, s.y, s.radius, 0, Math.PI * 2, !1), c.closePath(), c.fill();
        },
        /**
         * Invoked on mouse down
         */
        onMouseDown: function(c) {
          this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(c);
        },
        /**
         * Render the full state of the brush
         * @private
         */
        _render: function() {
          var c = this.canvas.contextTop, s, h, o = this.points;
          for (this._saveAndTransform(c), s = 0, h = o.length; s < h; s++)
            this.dot(c, o[s]);
          c.restore();
        },
        /**
         * Invoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(c) {
          this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(c), this._render()) : this.drawDot(c));
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function() {
          var c = this.canvas.renderOnAddRemove, s, h;
          this.canvas.renderOnAddRemove = !1;
          var o = [];
          for (s = 0, h = this.points.length; s < h; s++) {
            var i = this.points[s], e = new f.Circle({
              radius: i.radius,
              left: i.x,
              top: i.y,
              originX: "center",
              originY: "center",
              fill: i.fill
            });
            this.shadow && (e.shadow = new f.Shadow(this.shadow)), o.push(e);
          }
          var t = new f.Group(o);
          t.canvas = this.canvas, this.canvas.fire("before:path:created", { path: t }), this.canvas.add(t), this.canvas.fire("path:created", { path: t }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
        },
        /**
         * @param {Object} pointer
         * @return {fabric.Point} Just added pointer point
         */
        addPoint: function(c) {
          var s = new f.Point(c.x, c.y), h = f.util.getRandomInt(
            Math.max(0, this.width - 20),
            this.width + 20
          ) / 2, o = new f.Color(this.color).setAlpha(f.util.getRandomInt(0, 100) / 100).toRgba();
          return s.radius = h, s.fill = o, this.points.push(s), s;
        }
      }
    ), f.SprayBrush = f.util.createClass(
      f.BaseBrush,
      /** @lends fabric.SprayBrush.prototype */
      {
        /**
         * Width of a spray
         * @type Number
         * @default
         */
        width: 10,
        /**
         * Density of a spray (number of dots per chunk)
         * @type Number
         * @default
         */
        density: 20,
        /**
         * Width of spray dots
         * @type Number
         * @default
         */
        dotWidth: 1,
        /**
         * Width variance of spray dots
         * @type Number
         * @default
         */
        dotWidthVariance: 1,
        /**
         * Whether opacity of a dot should be random
         * @type Boolean
         * @default
         */
        randomOpacity: !1,
        /**
         * Whether overlapping dots (rectangles) should be removed (for performance reasons)
         * @type Boolean
         * @default
         */
        optimizeOverlapping: !0,
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.SprayBrush} Instance of a spray brush
         */
        initialize: function(c) {
          this.canvas = c, this.sprayChunks = [];
        },
        /**
         * Invoked on mouse down
         * @param {Object} pointer
         */
        onMouseDown: function(c) {
          this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(c), this.render(this.sprayChunkPoints);
        },
        /**
         * Invoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(c) {
          this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.addSprayChunk(c), this.render(this.sprayChunkPoints));
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function() {
          var c = this.canvas.renderOnAddRemove;
          this.canvas.renderOnAddRemove = !1;
          for (var s = [], h = 0, o = this.sprayChunks.length; h < o; h++)
            for (var i = this.sprayChunks[h], e = 0, t = i.length; e < t; e++) {
              var n = new f.Rect({
                width: i[e].width,
                height: i[e].width,
                left: i[e].x + 1,
                top: i[e].y + 1,
                originX: "center",
                originY: "center",
                fill: this.color
              });
              s.push(n);
            }
          this.optimizeOverlapping && (s = this._getOptimizedRects(s));
          var a = new f.Group(s);
          this.shadow && a.set("shadow", new f.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.fire("path:created", { path: a }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
        },
        /**
         * @private
         * @param {Array} rects
         */
        _getOptimizedRects: function(c) {
          var s = {}, h, o, i;
          for (o = 0, i = c.length; o < i; o++)
            h = c[o].left + "" + c[o].top, s[h] || (s[h] = c[o]);
          var e = [];
          for (h in s)
            e.push(s[h]);
          return e;
        },
        /**
         * Render new chunk of spray brush
         */
        render: function(c) {
          var s = this.canvas.contextTop, h, o;
          for (s.fillStyle = this.color, this._saveAndTransform(s), h = 0, o = c.length; h < o; h++) {
            var i = c[h];
            typeof i.opacity < "u" && (s.globalAlpha = i.opacity), s.fillRect(i.x, i.y, i.width, i.width);
          }
          s.restore();
        },
        /**
         * Render all spray chunks
         */
        _render: function() {
          var c = this.canvas.contextTop, s, h;
          for (c.fillStyle = this.color, this._saveAndTransform(c), s = 0, h = this.sprayChunks.length; s < h; s++)
            this.render(this.sprayChunks[s]);
          c.restore();
        },
        /**
         * @param {Object} pointer
         */
        addSprayChunk: function(c) {
          this.sprayChunkPoints = [];
          var s, h, o, i = this.width / 2, e;
          for (e = 0; e < this.density; e++) {
            s = f.util.getRandomInt(c.x - i, c.x + i), h = f.util.getRandomInt(c.y - i, c.y + i), this.dotWidthVariance ? o = f.util.getRandomInt(
              // bottom clamp width to 1
              Math.max(1, this.dotWidth - this.dotWidthVariance),
              this.dotWidth + this.dotWidthVariance
            ) : o = this.dotWidth;
            var t = new f.Point(s, h);
            t.width = o, this.randomOpacity && (t.opacity = f.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(t);
          }
          this.sprayChunks.push(this.sprayChunkPoints);
        }
      }
    ), f.PatternBrush = f.util.createClass(
      f.PencilBrush,
      /** @lends fabric.PatternBrush.prototype */
      {
        getPatternSrc: function() {
          var c = 20, s = 5, h = f.util.createCanvasElement(), o = h.getContext("2d");
          return h.width = h.height = c + s, o.fillStyle = this.color, o.beginPath(), o.arc(c / 2, c / 2, c / 2, 0, Math.PI * 2, !1), o.closePath(), o.fill(), h;
        },
        getPatternSrcFunction: function() {
          return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
        },
        /**
         * Creates "pattern" instance property
         * @param {CanvasRenderingContext2D} ctx
         */
        getPattern: function(c) {
          return c.createPattern(this.source || this.getPatternSrc(), "repeat");
        },
        /**
         * Sets brush styles
         * @param {CanvasRenderingContext2D} ctx
         */
        _setBrushStyles: function(c) {
          this.callSuper("_setBrushStyles", c), c.strokeStyle = this.getPattern(c);
        },
        /**
         * Creates path
         */
        createPath: function(c) {
          var s = this.callSuper("createPath", c), h = s._getLeftTopCoords().scalarAdd(s.strokeWidth / 2);
          return s.stroke = new f.Pattern({
            source: this.source || this.getPatternSrcFunction(),
            offsetX: -h.x,
            offsetY: -h.y
          }), s;
        }
      }
    ), (function() {
      var c = f.util.getPointer, s = f.util.degreesToRadians, h = f.util.isTouchEvent;
      f.Canvas = f.util.createClass(
        f.StaticCanvas,
        /** @lends fabric.Canvas.prototype */
        {
          /**
           * Constructor
           * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
           * @param {Object} [options] Options object
           * @return {Object} thisArg
           */
          initialize: function(i, e) {
            e || (e = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(i, e), this._initInteractive(), this._createCacheCanvas();
          },
          /**
           * When true, objects can be transformed by one side (unproportionally)
           * when dragged on the corners that normally would not do that.
           * @type Boolean
           * @default
           * @since fabric 4.0 // changed name and default value
           */
          uniformScaling: !0,
          /**
           * Indicates which key switches uniform scaling.
           * values: 'altKey', 'shiftKey', 'ctrlKey'.
           * If `null` or 'none' or any other string that is not a modifier key
           * feature is disabled.
           * totally wrong named. this sounds like `uniform scaling`
           * if Canvas.uniformScaling is true, pressing this will set it to false
           * and viceversa.
           * @since 1.6.2
           * @type String
           * @default
           */
          uniScaleKey: "shiftKey",
          /**
           * When true, objects use center point as the origin of scale transformation.
           * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
           * @since 1.3.4
           * @type Boolean
           * @default
           */
          centeredScaling: !1,
          /**
           * When true, objects use center point as the origin of rotate transformation.
           * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
           * @since 1.3.4
           * @type Boolean
           * @default
           */
          centeredRotation: !1,
          /**
           * Indicates which key enable centered Transform
           * values: 'altKey', 'shiftKey', 'ctrlKey'.
           * If `null` or 'none' or any other string that is not a modifier key
           * feature is disabled feature disabled.
           * @since 1.6.2
           * @type String
           * @default
           */
          centeredKey: "altKey",
          /**
           * Indicates which key enable alternate action on corner
           * values: 'altKey', 'shiftKey', 'ctrlKey'.
           * If `null` or 'none' or any other string that is not a modifier key
           * feature is disabled feature disabled.
           * @since 1.6.2
           * @type String
           * @default
           */
          altActionKey: "shiftKey",
          /**
           * Indicates that canvas is interactive. This property should not be changed.
           * @type Boolean
           * @default
           */
          interactive: !0,
          /**
           * Indicates whether group selection should be enabled
           * @type Boolean
           * @default
           */
          selection: !0,
          /**
           * Indicates which key or keys enable multiple click selection
           * Pass value as a string or array of strings
           * values: 'altKey', 'shiftKey', 'ctrlKey'.
           * If `null` or empty or containing any other string that is not a modifier key
           * feature is disabled.
           * @since 1.6.2
           * @type String|Array
           * @default
           */
          selectionKey: "shiftKey",
          /**
           * Indicates which key enable alternative selection
           * in case of target overlapping with active object
           * values: 'altKey', 'shiftKey', 'ctrlKey'.
           * For a series of reason that come from the general expectations on how
           * things should work, this feature works only for preserveObjectStacking true.
           * If `null` or 'none' or any other string that is not a modifier key
           * feature is disabled.
           * @since 1.6.5
           * @type null|String
           * @default
           */
          altSelectionKey: null,
          /**
           * Color of selection
           * @type String
           * @default
           */
          selectionColor: "rgba(100, 100, 255, 0.3)",
          // blue
          /**
           * Default dash array pattern
           * If not empty the selection border is dashed
           * @type Array
           */
          selectionDashArray: [],
          /**
           * Color of the border of selection (usually slightly darker than color of selection itself)
           * @type String
           * @default
           */
          selectionBorderColor: "rgba(255, 255, 255, 0.3)",
          /**
           * Width of a line used in object/group selection
           * @type Number
           * @default
           */
          selectionLineWidth: 1,
          /**
           * Select only shapes that are fully contained in the dragged selection rectangle.
           * @type Boolean
           * @default
           */
          selectionFullyContained: !1,
          /**
           * Default cursor value used when hovering over an object on canvas
           * @type String
           * @default
           */
          hoverCursor: "move",
          /**
           * Default cursor value used when moving an object on canvas
           * @type String
           * @default
           */
          moveCursor: "move",
          /**
           * Default cursor value used for the entire canvas
           * @type String
           * @default
           */
          defaultCursor: "default",
          /**
           * Cursor value used during free drawing
           * @type String
           * @default
           */
          freeDrawingCursor: "crosshair",
          /**
           * Cursor value used for disabled elements ( corners with disabled action )
           * @type String
           * @since 2.0.0
           * @default
           */
          notAllowedCursor: "not-allowed",
          /**
           * Default element class that's given to wrapper (div) element of canvas
           * @type String
           * @default
           */
          containerClass: "canvas-container",
          /**
           * When true, object detection happens on per-pixel basis rather than on per-bounding-box
           * @type Boolean
           * @default
           */
          perPixelTargetFind: !1,
          /**
           * Number of pixels around target pixel to tolerate (consider active) during object detection
           * @type Number
           * @default
           */
          targetFindTolerance: 0,
          /**
           * When true, target detection is skipped. Target detection will return always undefined.
           * click selection won't work anymore, events will fire with no targets.
           * if something is selected before setting it to true, it will be deselected at the first click.
           * area selection will still work. check the `selection` property too.
           * if you deactivate both, you should look into staticCanvas.
           * @type Boolean
           * @default
           */
          skipTargetFind: !1,
          /**
           * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
           * After mousedown, mousemove creates a shape,
           * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
           * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
           * @type Boolean
           * @default
           */
          isDrawingMode: !1,
          /**
           * Indicates whether objects should remain in current stack position when selected.
           * When false objects are brought to top and rendered as part of the selection group
           * @type Boolean
           * @default
           */
          preserveObjectStacking: !1,
          /**
           * Indicates the angle that an object will lock to while rotating.
           * @type Number
           * @since 1.6.7
           * @default
           */
          snapAngle: 0,
          /**
           * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
           * When `null`, the snapThreshold will default to the snapAngle.
           * @type null|Number
           * @since 1.6.7
           * @default
           */
          snapThreshold: null,
          /**
           * Indicates if the right click on canvas can output the context menu or not
           * @type Boolean
           * @since 1.6.5
           * @default
           */
          stopContextMenu: !1,
          /**
           * Indicates if the canvas can fire right click events
           * @type Boolean
           * @since 1.6.5
           * @default
           */
          fireRightClick: !1,
          /**
           * Indicates if the canvas can fire middle click events
           * @type Boolean
           * @since 1.7.8
           * @default
           */
          fireMiddleClick: !1,
          /**
           * Keep track of the subTargets for Mouse Events
           * @type fabric.Object[]
           */
          targets: [],
          /**
           * When the option is enabled, PointerEvent is used instead of MouseEvent.
           * @type Boolean
           * @default
           */
          enablePointerEvents: !1,
          /**
           * Keep track of the hovered target
           * @type fabric.Object
           * @private
           */
          _hoveredTarget: null,
          /**
           * hold the list of nested targets hovered
           * @type fabric.Object[]
           * @private
           */
          _hoveredTargets: [],
          /**
           * @private
           */
          _initInteractive: function() {
            this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = f.PencilBrush && new f.PencilBrush(this), this.calcOffset();
          },
          /**
           * Divides objects in two groups, one to render immediately
           * and one to render as activeGroup.
           * @return {Array} objects to render immediately and pushes the other in the activeGroup.
           */
          _chooseObjectsToRender: function() {
            var i = this.getActiveObjects(), e, t, n;
            if (i.length > 0 && !this.preserveObjectStacking) {
              t = [], n = [];
              for (var a = 0, r = this._objects.length; a < r; a++)
                e = this._objects[a], i.indexOf(e) === -1 ? t.push(e) : n.push(e);
              i.length > 1 && (this._activeObject._objects = n), t.push.apply(t, n);
            } else
              t = this._objects;
            return t;
          },
          /**
           * Renders both the top canvas and the secondary container canvas.
           * @return {fabric.Canvas} instance
           * @chainable
           */
          renderAll: function() {
            this.contextTopDirty && !this._groupSelector && !this.isDrawingMode && (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
            var i = this.contextContainer;
            return this.renderCanvas(i, this._chooseObjectsToRender()), this;
          },
          renderTopLayer: function(i) {
            i.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(i), this.contextTopDirty = !0), i.restore();
          },
          /**
           * Method to render only the top canvas.
           * Also used to render the group selection box.
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          renderTop: function() {
            var i = this.contextTop;
            return this.clearContext(i), this.renderTopLayer(i), this.fire("after:render"), this;
          },
          /**
           * @private
           */
          _normalizePointer: function(i, e) {
            var t = i.calcTransformMatrix(), n = f.util.invertTransform(t), a = this.restorePointerVpt(e);
            return f.util.transformPoint(a, n);
          },
          /**
           * Returns true if object is transparent at a certain location
           * @param {fabric.Object} target Object to check
           * @param {Number} x Left coordinate
           * @param {Number} y Top coordinate
           * @return {Boolean}
           */
          isTargetTransparent: function(i, e, t) {
            if (i.shouldCache() && i._cacheCanvas && i !== this._activeObject) {
              var n = this._normalizePointer(i, { x: e, y: t }), a = Math.max(i.cacheTranslationX + n.x * i.zoomX, 0), r = Math.max(i.cacheTranslationY + n.y * i.zoomY, 0), g = f.util.isTransparent(
                i._cacheContext,
                Math.round(a),
                Math.round(r),
                this.targetFindTolerance
              );
              return g;
            }
            var l = this.contextCache, u = i.selectionBackgroundColor, d = this.viewportTransform;
            i.selectionBackgroundColor = "", this.clearContext(l), l.save(), l.transform(d[0], d[1], d[2], d[3], d[4], d[5]), i.render(l), l.restore(), i.selectionBackgroundColor = u;
            var g = f.util.isTransparent(
              l,
              e,
              t,
              this.targetFindTolerance
            );
            return g;
          },
          /**
           * takes an event and determines if selection key has been pressed
           * @private
           * @param {Event} e Event object
           */
          _isSelectionKeyPressed: function(i) {
            var e = !1;
            return Array.isArray(this.selectionKey) ? e = !!this.selectionKey.find(function(t) {
              return i[t] === !0;
            }) : e = i[this.selectionKey], e;
          },
          /**
           * @private
           * @param {Event} e Event object
           * @param {fabric.Object} target
           */
          _shouldClearSelection: function(i, e) {
            var t = this.getActiveObjects(), n = this._activeObject;
            return !e || e && n && t.length > 1 && t.indexOf(e) === -1 && n !== e && !this._isSelectionKeyPressed(i) || e && !e.evented || e && !e.selectable && n && n !== e;
          },
          /**
           * centeredScaling from object can't override centeredScaling from canvas.
           * this should be fixed, since object setting should take precedence over canvas.
           * also this should be something that will be migrated in the control properties.
           * as ability to define the origin of the transformation that the control provide.
           * @private
           * @param {fabric.Object} target
           * @param {String} action
           * @param {Boolean} altKey
           */
          _shouldCenterTransform: function(i, e, t) {
            if (i) {
              var n;
              return e === "scale" || e === "scaleX" || e === "scaleY" || e === "resizing" ? n = this.centeredScaling || i.centeredScaling : e === "rotate" && (n = this.centeredRotation || i.centeredRotation), n ? !t : t;
            }
          },
          /**
           * should disappear before release 4.0
           * @private
           */
          _getOriginFromCorner: function(i, e) {
            var t = {
              x: i.originX,
              y: i.originY
            };
            return e === "ml" || e === "tl" || e === "bl" ? t.x = "right" : (e === "mr" || e === "tr" || e === "br") && (t.x = "left"), e === "tl" || e === "mt" || e === "tr" ? t.y = "bottom" : (e === "bl" || e === "mb" || e === "br") && (t.y = "top"), t;
          },
          /**
           * @private
           * @param {Boolean} alreadySelected true if target is already selected
           * @param {String} corner a string representing the corner ml, mr, tl ...
           * @param {Event} e Event object
           * @param {fabric.Object} [target] inserted back to help overriding. Unused
           */
          _getActionFromCorner: function(i, e, t, n) {
            if (!e || !i)
              return "drag";
            var a = n.controls[e];
            return a.getActionName(t, a, n);
          },
          /**
           * @private
           * @param {Event} e Event object
           * @param {fabric.Object} target
           */
          _setupCurrentTransform: function(i, e, t) {
            if (e) {
              var n = this.getPointer(i), a = e.__corner, r = e.controls[a], l = t && a ? r.getActionHandler(i, e, r) : f.controlsUtils.dragHandler, u = this._getActionFromCorner(t, a, i, e), d = this._getOriginFromCorner(e, a), g = i[this.centeredKey], m = {
                target: e,
                action: u,
                actionHandler: l,
                corner: a,
                scaleX: e.scaleX,
                scaleY: e.scaleY,
                skewX: e.skewX,
                skewY: e.skewY,
                // used by transation
                offsetX: n.x - e.left,
                offsetY: n.y - e.top,
                originX: d.x,
                originY: d.y,
                ex: n.x,
                ey: n.y,
                lastX: n.x,
                lastY: n.y,
                // unsure they are useful anymore.
                // left: target.left,
                // top: target.top,
                theta: s(e.angle),
                // end of unsure
                width: e.width * e.scaleX,
                shiftKey: i.shiftKey,
                altKey: g,
                original: f.util.saveObjectTransform(e)
              };
              this._shouldCenterTransform(e, u, g) && (m.originX = "center", m.originY = "center"), m.original.originX = d.x, m.original.originY = d.y, this._currentTransform = m, this._beforeTransform(i);
            }
          },
          /**
           * Set the cursor type of the canvas element
           * @param {String} value Cursor type of the canvas element.
           * @see http://www.w3.org/TR/css3-ui/#cursor
           */
          setCursor: function(i) {
            this.upperCanvasEl.style.cursor = i;
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx to draw the selection on
           */
          _drawSelection: function(i) {
            var e = this._groupSelector, t = new f.Point(e.ex, e.ey), n = f.util.transformPoint(t, this.viewportTransform), a = new f.Point(e.ex + e.left, e.ey + e.top), r = f.util.transformPoint(a, this.viewportTransform), l = Math.min(n.x, r.x), u = Math.min(n.y, r.y), d = Math.max(n.x, r.x), g = Math.max(n.y, r.y), m = this.selectionLineWidth / 2;
            this.selectionColor && (i.fillStyle = this.selectionColor, i.fillRect(l, u, d - l, g - u)), !(!this.selectionLineWidth || !this.selectionBorderColor) && (i.lineWidth = this.selectionLineWidth, i.strokeStyle = this.selectionBorderColor, l += m, u += m, d -= m, g -= m, f.Object.prototype._setLineDash.call(this, i, this.selectionDashArray), i.strokeRect(l, u, d - l, g - u));
          },
          /**
           * Method that determines what object we are clicking on
           * the skipGroup parameter is for internal use, is needed for shift+click action
           * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
           * or the outside part of the corner.
           * @param {Event} e mouse event
           * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
           * @return {fabric.Object} the target found
           */
          findTarget: function(i, e) {
            if (!this.skipTargetFind) {
              var t = !0, n = this.getPointer(i, t), a = this._activeObject, r = this.getActiveObjects(), l, u, d = h(i), g = r.length > 1 && !e || r.length === 1;
              if (this.targets = [], g && a._findTargetCorner(n, d) || r.length > 1 && !e && a === this._searchPossibleTargets([a], n))
                return a;
              if (r.length === 1 && a === this._searchPossibleTargets([a], n))
                if (this.preserveObjectStacking)
                  l = a, u = this.targets, this.targets = [];
                else
                  return a;
              var m = this._searchPossibleTargets(this._objects, n);
              return i[this.altSelectionKey] && m && l && m !== l && (m = l, this.targets = u), m;
            }
          },
          /**
           * Checks point is inside the object.
           * @param {Object} [pointer] x,y object of point coordinates we want to check.
           * @param {fabric.Object} obj Object to test against
           * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
           * @return {Boolean} true if point is contained within an area of given object
           * @private
           */
          _checkTarget: function(i, e, t) {
            if (e && e.visible && e.evented && // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
            // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
            e.containsPoint(i))
              if ((this.perPixelTargetFind || e.perPixelTargetFind) && !e.isEditing) {
                var n = this.isTargetTransparent(e, t.x, t.y);
                if (!n)
                  return !0;
              } else
                return !0;
          },
          /**
           * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
           * @param {Array} [objects] objects array to look into
           * @param {Object} [pointer] x,y object of point coordinates we want to check.
           * @return {fabric.Object} object that contains pointer
           * @private
           */
          _searchPossibleTargets: function(i, e) {
            for (var t, n = i.length, a; n--; ) {
              var r = i[n], l = r.group ? this._normalizePointer(r.group, e) : e;
              if (this._checkTarget(l, r, e)) {
                t = i[n], t.subTargetCheck && t instanceof f.Group && (a = this._searchPossibleTargets(t._objects, e), a && this.targets.push(a));
                break;
              }
            }
            return t;
          },
          /**
           * Returns pointer coordinates without the effect of the viewport
           * @param {Object} pointer with "x" and "y" number values
           * @return {Object} object with "x" and "y" number values
           */
          restorePointerVpt: function(i) {
            return f.util.transformPoint(
              i,
              f.util.invertTransform(this.viewportTransform)
            );
          },
          /**
           * Returns pointer coordinates relative to canvas.
           * Can return coordinates with or without viewportTransform.
           * ignoreZoom false gives back coordinates that represent
           * the point clicked on canvas element.
           * ignoreZoom true gives back coordinates after being processed
           * by the viewportTransform ( sort of coordinates of what is displayed
           * on the canvas where you are clicking.
           * ignoreZoom true = HTMLElement coordinates relative to top,left
           * ignoreZoom false, default = fabric space coordinates, the same used for shape position
           * To interact with your shapes top and left you want to use ignoreZoom true
           * most of the time, while ignoreZoom false will give you coordinates
           * compatible with the object.oCoords system.
           * of the time.
           * @param {Event} e
           * @param {Boolean} ignoreZoom
           * @return {Object} object with "x" and "y" number values
           */
          getPointer: function(i, e) {
            if (this._absolutePointer && !e)
              return this._absolutePointer;
            if (this._pointer && e)
              return this._pointer;
            var t = c(i), n = this.upperCanvasEl, a = n.getBoundingClientRect(), r = a.width || 0, l = a.height || 0, u;
            (!r || !l) && ("top" in a && "bottom" in a && (l = Math.abs(a.top - a.bottom)), "right" in a && "left" in a && (r = Math.abs(a.right - a.left))), this.calcOffset(), t.x = t.x - this._offset.left, t.y = t.y - this._offset.top, e || (t = this.restorePointerVpt(t));
            var d = this.getRetinaScaling();
            return d !== 1 && (t.x /= d, t.y /= d), r === 0 || l === 0 ? u = { width: 1, height: 1 } : u = {
              width: n.width / r,
              height: n.height / l
            }, {
              x: t.x * u.width,
              y: t.y * u.height
            };
          },
          /**
           * @private
           * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
           */
          _createUpperCanvas: function() {
            var i = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), e = this.lowerCanvasEl, t = this.upperCanvasEl;
            t ? t.className = "" : (t = this._createCanvasElement(), this.upperCanvasEl = t), f.util.addClass(t, "upper-canvas " + i), this.wrapperEl.appendChild(t), this._copyCanvasStyle(e, t), this._applyCanvasStyle(t), this.contextTop = t.getContext("2d");
          },
          /**
           * Returns context of top canvas where interactions are drawn
           * @returns {CanvasRenderingContext2D}
           */
          getTopContext: function() {
            return this.contextTop;
          },
          /**
           * @private
           */
          _createCacheCanvas: function() {
            this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
          },
          /**
           * @private
           */
          _initWrapperElement: function() {
            this.wrapperEl = f.util.wrapElement(this.lowerCanvasEl, "div", {
              class: this.containerClass
            }), f.util.setStyle(this.wrapperEl, {
              width: this.width + "px",
              height: this.height + "px",
              position: "relative"
            }), f.util.makeElementUnselectable(this.wrapperEl);
          },
          /**
           * @private
           * @param {HTMLElement} element canvas element to apply styles on
           */
          _applyCanvasStyle: function(i) {
            var e = this.width || i.width, t = this.height || i.height;
            f.util.setStyle(i, {
              position: "absolute",
              width: e + "px",
              height: t + "px",
              left: 0,
              top: 0,
              "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
              "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
            }), i.width = e, i.height = t, f.util.makeElementUnselectable(i);
          },
          /**
           * Copy the entire inline style from one element (fromEl) to another (toEl)
           * @private
           * @param {Element} fromEl Element style is copied from
           * @param {Element} toEl Element copied style is applied to
           */
          _copyCanvasStyle: function(i, e) {
            e.style.cssText = i.style.cssText;
          },
          /**
           * Returns context of canvas where object selection is drawn
           * @return {CanvasRenderingContext2D}
           */
          getSelectionContext: function() {
            return this.contextTop;
          },
          /**
           * Returns &lt;canvas> element on which object selection is drawn
           * @return {HTMLCanvasElement}
           */
          getSelectionElement: function() {
            return this.upperCanvasEl;
          },
          /**
           * Returns currently active object
           * @return {fabric.Object} active object
           */
          getActiveObject: function() {
            return this._activeObject;
          },
          /**
           * Returns an array with the current selected objects
           * @return {fabric.Object} active object
           */
          getActiveObjects: function() {
            var i = this._activeObject;
            return i ? i.type === "activeSelection" && i._objects ? i._objects.slice(0) : [i] : [];
          },
          /**
           * @private
           * @param {fabric.Object} obj Object that was removed
           */
          _onObjectRemoved: function(i) {
            i === this._activeObject && (this.fire("before:selection:cleared", { target: i }), this._discardActiveObject(), this.fire("selection:cleared", { target: i }), i.fire("deselected")), i === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", i);
          },
          /**
           * @private
           * Compares the old activeObject with the current one and fires correct events
           * @param {fabric.Object} obj old activeObject
           */
          _fireSelectionEvents: function(i, e) {
            var t = !1, n = this.getActiveObjects(), a = [], r = [];
            i.forEach(function(l) {
              n.indexOf(l) === -1 && (t = !0, l.fire("deselected", {
                e,
                target: l
              }), r.push(l));
            }), n.forEach(function(l) {
              i.indexOf(l) === -1 && (t = !0, l.fire("selected", {
                e,
                target: l
              }), a.push(l));
            }), i.length > 0 && n.length > 0 ? t && this.fire("selection:updated", {
              e,
              selected: a,
              deselected: r
            }) : n.length > 0 ? this.fire("selection:created", {
              e,
              selected: a
            }) : i.length > 0 && this.fire("selection:cleared", {
              e,
              deselected: r
            });
          },
          /**
           * Sets given object as the only active object on canvas
           * @param {fabric.Object} object Object to set as an active one
           * @param {Event} [e] Event (passed along when firing "object:selected")
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          setActiveObject: function(i, e) {
            var t = this.getActiveObjects();
            return this._setActiveObject(i, e), this._fireSelectionEvents(t, e), this;
          },
          /**
           * This is a private method for now.
           * This is supposed to be equivalent to setActiveObject but without firing
           * any event. There is commitment to have this stay this way.
           * This is the functional part of setActiveObject.
           * @private
           * @param {Object} object to set as active
           * @param {Event} [e] Event (passed along when firing "object:selected")
           * @return {Boolean} true if the selection happened
           */
          _setActiveObject: function(i, e) {
            return this._activeObject === i || !this._discardActiveObject(e, i) || i.onSelect({ e }) ? !1 : (this._activeObject = i, !0);
          },
          /**
           * This is a private method for now.
           * This is supposed to be equivalent to discardActiveObject but without firing
           * any events. There is commitment to have this stay this way.
           * This is the functional part of discardActiveObject.
           * @param {Event} [e] Event (passed along when firing "object:deselected")
           * @param {Object} object to set as active
           * @return {Boolean} true if the selection happened
           * @private
           */
          _discardActiveObject: function(i, e) {
            var t = this._activeObject;
            if (t) {
              if (t.onDeselect({ e: i, object: e }))
                return !1;
              this._activeObject = null;
            }
            return !0;
          },
          /**
           * Discards currently active object and fire events. If the function is called by fabric
           * as a consequence of a mouse event, the event is passed as a parameter and
           * sent to the fire function for the custom events. When used as a method the
           * e param does not have any application.
           * @param {event} e
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          discardActiveObject: function(i) {
            var e = this.getActiveObjects(), t = this.getActiveObject();
            return e.length && this.fire("before:selection:cleared", { target: t, e: i }), this._discardActiveObject(i), this._fireSelectionEvents(e, i), this;
          },
          /**
           * Clears a canvas element and removes all event listeners
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          dispose: function() {
            var i = this.wrapperEl;
            return this.removeListeners(), i.removeChild(this.upperCanvasEl), i.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach((function(e) {
              f.util.cleanUpJsdomNode(this[e]), this[e] = void 0;
            }).bind(this)), i.parentNode && i.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, f.StaticCanvas.prototype.dispose.call(this), this;
          },
          /**
           * Clears all contexts (background, main, top) of an instance
           * @return {fabric.Canvas} thisArg
           * @chainable
           */
          clear: function() {
            return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
          },
          /**
           * Draws objects' controls (borders/controls)
           * @param {CanvasRenderingContext2D} ctx Context to render controls on
           */
          drawControls: function(i) {
            var e = this._activeObject;
            e && e._renderControls(i);
          },
          /**
           * @private
           */
          _toObject: function(i, e, t) {
            var n = this._realizeGroupTransformOnObject(i), a = this.callSuper("_toObject", i, e, t);
            return this._unwindGroupTransformOnObject(i, n), a;
          },
          /**
           * Realises an object's group transformation on it
           * @private
           * @param {fabric.Object} [instance] the object to transform (gets mutated)
           * @returns the original values of instance which were changed
           */
          _realizeGroupTransformOnObject: function(i) {
            if (i.group && i.group.type === "activeSelection" && this._activeObject === i.group) {
              var e = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"], t = {};
              return e.forEach(function(n) {
                t[n] = i[n];
              }), f.util.addTransformToObject(i, this._activeObject.calcOwnMatrix()), t;
            } else
              return null;
          },
          /**
           * Restores the changed properties of instance
           * @private
           * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
           * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
           */
          _unwindGroupTransformOnObject: function(i, e) {
            e && i.set(e);
          },
          /**
           * @private
           */
          _setSVGObject: function(i, e, t) {
            var n = this._realizeGroupTransformOnObject(e);
            this.callSuper("_setSVGObject", i, e, t), this._unwindGroupTransformOnObject(e, n);
          },
          setViewportTransform: function(i) {
            this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), f.StaticCanvas.prototype.setViewportTransform.call(this, i);
          }
        }
      );
      for (var o in f.StaticCanvas)
        o !== "prototype" && (f.Canvas[o] = f.StaticCanvas[o]);
    })(), (function() {
      var c = f.util.addListener, s = f.util.removeListener, h = 3, o = 2, i = 1, e = { passive: !1 };
      function t(n, a) {
        return n.button && n.button === a - 1;
      }
      f.util.object.extend(
        f.Canvas.prototype,
        /** @lends fabric.Canvas.prototype */
        {
          /**
           * Contains the id of the touch event that owns the fabric transform
           * @type Number
           * @private
           */
          mainTouchId: null,
          /**
           * Adds mouse listeners to canvas
           * @private
           */
          _initEventListeners: function() {
            this.removeListeners(), this._bindEvents(), this.addOrRemove(c, "add");
          },
          /**
           * return an event prefix pointer or mouse.
           * @private
           */
          _getEventPrefix: function() {
            return this.enablePointerEvents ? "pointer" : "mouse";
          },
          addOrRemove: function(n, a) {
            var r = this.upperCanvasEl, l = this._getEventPrefix();
            n(f.window, "resize", this._onResize), n(r, l + "down", this._onMouseDown), n(r, l + "move", this._onMouseMove, e), n(r, l + "out", this._onMouseOut), n(r, l + "enter", this._onMouseEnter), n(r, "wheel", this._onMouseWheel), n(r, "contextmenu", this._onContextMenu), n(r, "dblclick", this._onDoubleClick), n(r, "dragover", this._onDragOver), n(r, "dragenter", this._onDragEnter), n(r, "dragleave", this._onDragLeave), n(r, "drop", this._onDrop), this.enablePointerEvents || n(r, "touchstart", this._onTouchStart, e), typeof eventjs < "u" && a in eventjs && (eventjs[a](r, "gesture", this._onGesture), eventjs[a](r, "drag", this._onDrag), eventjs[a](r, "orientation", this._onOrientationChange), eventjs[a](r, "shake", this._onShake), eventjs[a](r, "longpress", this._onLongPress));
          },
          /**
           * Removes all event listeners
           */
          removeListeners: function() {
            this.addOrRemove(s, "remove");
            var n = this._getEventPrefix();
            s(f.document, n + "up", this._onMouseUp), s(f.document, "touchend", this._onTouchEnd, e), s(f.document, n + "move", this._onMouseMove, e), s(f.document, "touchmove", this._onMouseMove, e);
          },
          /**
           * @private
           */
          _bindEvents: function() {
            this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on Event.js gesture
           * @param {Event} [self] Inner Event object
           */
          _onGesture: function(n, a) {
            this.__onTransformGesture && this.__onTransformGesture(n, a);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on Event.js drag
           * @param {Event} [self] Inner Event object
           */
          _onDrag: function(n, a) {
            this.__onDrag && this.__onDrag(n, a);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on wheel event
           */
          _onMouseWheel: function(n) {
            this.__onMouseWheel(n);
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onMouseOut: function(n) {
            var a = this._hoveredTarget;
            this.fire("mouse:out", { target: a, e: n }), this._hoveredTarget = null, a && a.fire("mouseout", { e: n });
            var r = this;
            this._hoveredTargets.forEach(function(l) {
              r.fire("mouse:out", { target: l, e: n }), l && l.fire("mouseout", { e: n });
            }), this._hoveredTargets = [];
          },
          /**
           * @private
           * @param {Event} e Event object fired on mouseenter
           */
          _onMouseEnter: function(n) {
            !this._currentTransform && !this.findTarget(n) && (this.fire("mouse:over", { target: null, e: n }), this._hoveredTarget = null, this._hoveredTargets = []);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on Event.js orientation change
           * @param {Event} [self] Inner Event object
           */
          _onOrientationChange: function(n, a) {
            this.__onOrientationChange && this.__onOrientationChange(n, a);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on Event.js shake
           * @param {Event} [self] Inner Event object
           */
          _onShake: function(n, a) {
            this.__onShake && this.__onShake(n, a);
          },
          /**
           * @private
           * @param {Event} [e] Event object fired on Event.js shake
           * @param {Event} [self] Inner Event object
           */
          _onLongPress: function(n, a) {
            this.__onLongPress && this.__onLongPress(n, a);
          },
          /**
           * prevent default to allow drop event to be fired
           * @private
           * @param {Event} [e] Event object fired on Event.js shake
           */
          _onDragOver: function(n) {
            n.preventDefault();
            var a = this._simpleEventHandler("dragover", n);
            this._fireEnterLeaveEvents(a, n);
          },
          /**
           * `drop:before` is a an event that allow you to schedule logic
           * before the `drop` event. Prefer `drop` event always, but if you need
           * to run some drop-disabling logic on an event, since there is no way
           * to handle event handlers ordering, use `drop:before`
           * @param {Event} e
           */
          _onDrop: function(n) {
            return this._simpleEventHandler("drop:before", n), this._simpleEventHandler("drop", n);
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onContextMenu: function(n) {
            return this.stopContextMenu && (n.stopPropagation(), n.preventDefault()), !1;
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onDoubleClick: function(n) {
            this._cacheTransformEventData(n), this._handleEvent(n, "dblclick"), this._resetTransformEventData(n);
          },
          /**
           * Return a the id of an event.
           * returns either the pointerId or the identifier or 0 for the mouse event
           * @private
           * @param {Event} evt Event object
           */
          getPointerId: function(n) {
            var a = n.changedTouches;
            return a ? a[0] && a[0].identifier : this.enablePointerEvents ? n.pointerId : -1;
          },
          /**
           * Determines if an event has the id of the event that is considered main
           * @private
           * @param {evt} event Event object
           */
          _isMainEvent: function(n) {
            return n.isPrimary === !0 ? !0 : n.isPrimary === !1 ? !1 : n.type === "touchend" && n.touches.length === 0 ? !0 : n.changedTouches ? n.changedTouches[0].identifier === this.mainTouchId : !0;
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onTouchStart: function(n) {
            n.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(n)), this.__onMouseDown(n), this._resetTransformEventData();
            var a = this.upperCanvasEl, r = this._getEventPrefix();
            c(f.document, "touchend", this._onTouchEnd, e), c(f.document, "touchmove", this._onMouseMove, e), s(a, r + "down", this._onMouseDown);
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onMouseDown: function(n) {
            this.__onMouseDown(n), this._resetTransformEventData();
            var a = this.upperCanvasEl, r = this._getEventPrefix();
            s(a, r + "move", this._onMouseMove, e), c(f.document, r + "up", this._onMouseUp), c(f.document, r + "move", this._onMouseMove, e);
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onTouchEnd: function(n) {
            if (!(n.touches.length > 0)) {
              this.__onMouseUp(n), this._resetTransformEventData(), this.mainTouchId = null;
              var a = this._getEventPrefix();
              s(f.document, "touchend", this._onTouchEnd, e), s(f.document, "touchmove", this._onMouseMove, e);
              var r = this;
              this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
                c(r.upperCanvasEl, a + "down", r._onMouseDown), r._willAddMouseDown = 0;
              }, 400);
            }
          },
          /**
           * @private
           * @param {Event} e Event object fired on mouseup
           */
          _onMouseUp: function(n) {
            this.__onMouseUp(n), this._resetTransformEventData();
            var a = this.upperCanvasEl, r = this._getEventPrefix();
            this._isMainEvent(n) && (s(f.document, r + "up", this._onMouseUp), s(f.document, r + "move", this._onMouseMove, e), c(a, r + "move", this._onMouseMove, e));
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousemove
           */
          _onMouseMove: function(n) {
            !this.allowTouchScrolling && n.preventDefault && n.preventDefault(), this.__onMouseMove(n);
          },
          /**
           * @private
           */
          _onResize: function() {
            this.calcOffset();
          },
          /**
           * Decides whether the canvas should be redrawn in mouseup and mousedown events.
           * @private
           * @param {Object} target
           */
          _shouldRender: function(n) {
            var a = this._activeObject;
            return !!a != !!n || a && n && a !== n ? !0 : (a && a.isEditing, !1);
          },
          /**
           * Method that defines the actions when mouse is released on canvas.
           * The method resets the currentTransform parameters, store the image corner
           * position in the image object and render the canvas on top.
           * @private
           * @param {Event} e Event object fired on mouseup
           */
          __onMouseUp: function(n) {
            var a, r = this._currentTransform, l = this._groupSelector, u = !1, d = !l || l.left === 0 && l.top === 0;
            if (this._cacheTransformEventData(n), a = this._target, this._handleEvent(n, "up:before"), t(n, h)) {
              this.fireRightClick && this._handleEvent(n, "up", h, d);
              return;
            }
            if (t(n, o)) {
              this.fireMiddleClick && this._handleEvent(n, "up", o, d), this._resetTransformEventData();
              return;
            }
            if (this.isDrawingMode && this._isCurrentlyDrawing) {
              this._onMouseUpInDrawingMode(n);
              return;
            }
            if (this._isMainEvent(n)) {
              if (r && (this._finalizeCurrentTransform(n), u = r.actionPerformed), !d) {
                var g = a === this._activeObject;
                this._maybeGroupObjects(n), u || (u = this._shouldRender(a) || !g && a === this._activeObject);
              }
              var m, v;
              if (a) {
                if (m = a._findTargetCorner(
                  this.getPointer(n, !0),
                  f.util.isTouchEvent(n)
                ), a.selectable && a !== this._activeObject && a.activeOn === "up")
                  this.setActiveObject(a, n), u = !0;
                else {
                  var y = a.controls[m], w = y && y.getMouseUpHandler(n, a, y);
                  w && (v = this.getPointer(n), w(n, r, v.x, v.y));
                }
                a.isMoving = !1;
              }
              if (r && (r.target !== a || r.corner !== m)) {
                var E = r.target && r.target.controls[r.corner], L = E && E.getMouseUpHandler(n, a, y);
                v = v || this.getPointer(n), L && L(n, r, v.x, v.y);
              }
              this._setCursorFromEvent(n, a), this._handleEvent(n, "up", i, d), this._groupSelector = null, this._currentTransform = null, a && (a.__corner = 0), u ? this.requestRenderAll() : d || this.renderTop();
            }
          },
          /**
           * @private
           * Handle event firing for target and subtargets
           * @param {Event} e event from mouse
           * @param {String} eventType event to fire (up, down or move)
           * @return {Fabric.Object} target return the the target found, for internal reasons.
           */
          _simpleEventHandler: function(n, a) {
            var r = this.findTarget(a), l = this.targets, u = {
              e: a,
              target: r,
              subTargets: l
            };
            if (this.fire(n, u), r && r.fire(n, u), !l)
              return r;
            for (var d = 0; d < l.length; d++)
              l[d].fire(n, u);
            return r;
          },
          /**
           * @private
           * Handle event firing for target and subtargets
           * @param {Event} e event from mouse
           * @param {String} eventType event to fire (up, down or move)
           * @param {fabric.Object} targetObj receiving event
           * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
           * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
           */
          _handleEvent: function(n, a, r, l) {
            var u = this._target, d = this.targets || [], g = {
              e: n,
              target: u,
              subTargets: d,
              button: r || i,
              isClick: l || !1,
              pointer: this._pointer,
              absolutePointer: this._absolutePointer,
              transform: this._currentTransform
            };
            a === "up" && (g.currentTarget = this.findTarget(n), g.currentSubTargets = this.targets), this.fire("mouse:" + a, g), u && u.fire("mouse" + a, g);
            for (var m = 0; m < d.length; m++)
              d[m].fire("mouse" + a, g);
          },
          /**
           * @private
           * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
           */
          _finalizeCurrentTransform: function(n) {
            var a = this._currentTransform, r = a.target, l = {
              e: n,
              target: r,
              transform: a,
              action: a.action
            };
            r._scaling && (r._scaling = !1), r.setCoords(), (a.actionPerformed || this.stateful && r.hasStateChanged()) && this._fire("modified", l);
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          _onMouseDownInDrawingMode: function(n) {
            this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(n).requestRenderAll();
            var a = this.getPointer(n);
            this.freeDrawingBrush.onMouseDown(a, { e: n, pointer: a }), this._handleEvent(n, "down");
          },
          /**
           * @private
           * @param {Event} e Event object fired on mousemove
           */
          _onMouseMoveInDrawingMode: function(n) {
            if (this._isCurrentlyDrawing) {
              var a = this.getPointer(n);
              this.freeDrawingBrush.onMouseMove(a, { e: n, pointer: a });
            }
            this.setCursor(this.freeDrawingCursor), this._handleEvent(n, "move");
          },
          /**
           * @private
           * @param {Event} e Event object fired on mouseup
           */
          _onMouseUpInDrawingMode: function(n) {
            var a = this.getPointer(n);
            this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: n, pointer: a }), this._handleEvent(n, "up");
          },
          /**
           * Method that defines the actions when mouse is clicked on canvas.
           * The method inits the currentTransform parameters and renders all the
           * canvas so the current image can be placed on the top canvas and the rest
           * in on the container one.
           * @private
           * @param {Event} e Event object fired on mousedown
           */
          __onMouseDown: function(n) {
            this._cacheTransformEventData(n), this._handleEvent(n, "down:before");
            var a = this._target;
            if (t(n, h)) {
              this.fireRightClick && this._handleEvent(n, "down", h);
              return;
            }
            if (t(n, o)) {
              this.fireMiddleClick && this._handleEvent(n, "down", o);
              return;
            }
            if (this.isDrawingMode) {
              this._onMouseDownInDrawingMode(n);
              return;
            }
            if (this._isMainEvent(n) && !this._currentTransform) {
              var r = this._pointer;
              this._previousPointer = r;
              var l = this._shouldRender(a), u = this._shouldGroup(n, a);
              if (this._shouldClearSelection(n, a) ? this.discardActiveObject(n) : u && (this._handleGrouping(n, a), a = this._activeObject), this.selection && (!a || !a.selectable && !a.isEditing && a !== this._activeObject) && (this._groupSelector = {
                ex: this._absolutePointer.x,
                ey: this._absolutePointer.y,
                top: 0,
                left: 0
              }), a) {
                var d = a === this._activeObject;
                a.selectable && a.activeOn === "down" && this.setActiveObject(a, n);
                var g = a._findTargetCorner(
                  this.getPointer(n, !0),
                  f.util.isTouchEvent(n)
                );
                if (a.__corner = g, a === this._activeObject && (g || !u)) {
                  this._setupCurrentTransform(n, a, d);
                  var m = a.controls[g], r = this.getPointer(n), v = m && m.getMouseDownHandler(n, a, m);
                  v && v(n, this._currentTransform, r.x, r.y);
                }
              }
              this._handleEvent(n, "down"), (l || u) && this.requestRenderAll();
            }
          },
          /**
           * reset cache form common information needed during event processing
           * @private
           */
          _resetTransformEventData: function() {
            this._target = null, this._pointer = null, this._absolutePointer = null;
          },
          /**
           * Cache common information needed during event processing
           * @private
           * @param {Event} e Event object fired on event
           */
          _cacheTransformEventData: function(n) {
            this._resetTransformEventData(), this._pointer = this.getPointer(n, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(n) || null;
          },
          /**
           * @private
           */
          _beforeTransform: function(n) {
            var a = this._currentTransform;
            this.stateful && a.target.saveState(), this.fire("before:transform", {
              e: n,
              transform: a
            });
          },
          /**
           * Method that defines the actions when mouse is hovering the canvas.
           * The currentTransform parameter will define whether the user is rotating/scaling/translating
           * an image or neither of them (only hovering). A group selection is also possible and would cancel
           * all any other type of action.
           * In case of an image transformation only the top canvas will be rendered.
           * @private
           * @param {Event} e Event object fired on mousemove
           */
          __onMouseMove: function(n) {
            this._handleEvent(n, "move:before"), this._cacheTransformEventData(n);
            var a, r;
            if (this.isDrawingMode) {
              this._onMouseMoveInDrawingMode(n);
              return;
            }
            if (this._isMainEvent(n)) {
              var l = this._groupSelector;
              l ? (r = this._absolutePointer, l.left = r.x - l.ex, l.top = r.y - l.ey, this.renderTop()) : this._currentTransform ? this._transformObject(n) : (a = this.findTarget(n) || null, this._setCursorFromEvent(n, a), this._fireOverOutEvents(a, n)), this._handleEvent(n, "move"), this._resetTransformEventData();
            }
          },
          /**
           * Manage the mouseout, mouseover events for the fabric object on the canvas
           * @param {Fabric.Object} target the target where the target from the mousemove event
           * @param {Event} e Event object fired on mousemove
           * @private
           */
          _fireOverOutEvents: function(n, a) {
            var r = this._hoveredTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
            this.fireSyntheticInOutEvents(n, a, {
              oldTarget: r,
              evtOut: "mouseout",
              canvasEvtOut: "mouse:out",
              evtIn: "mouseover",
              canvasEvtIn: "mouse:over"
            });
            for (var g = 0; g < d; g++)
              this.fireSyntheticInOutEvents(u[g], a, {
                oldTarget: l[g],
                evtOut: "mouseout",
                evtIn: "mouseover"
              });
            this._hoveredTarget = n, this._hoveredTargets = this.targets.concat();
          },
          /**
           * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
           * @param {Fabric.Object} target the target where the target from the onDrag event
           * @param {Event} e Event object fired on ondrag
           * @private
           */
          _fireEnterLeaveEvents: function(n, a) {
            var r = this._draggedoverTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
            this.fireSyntheticInOutEvents(n, a, {
              oldTarget: r,
              evtOut: "dragleave",
              evtIn: "dragenter"
            });
            for (var g = 0; g < d; g++)
              this.fireSyntheticInOutEvents(u[g], a, {
                oldTarget: l[g],
                evtOut: "dragleave",
                evtIn: "dragenter"
              });
            this._draggedoverTarget = n;
          },
          /**
           * Manage the synthetic in/out events for the fabric objects on the canvas
           * @param {Fabric.Object} target the target where the target from the supported events
           * @param {Event} e Event object fired
           * @param {Object} config configuration for the function to work
           * @param {String} config.targetName property on the canvas where the old target is stored
           * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
           * @param {String} config.evtOut name of the event to fire for out
           * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
           * @param {String} config.evtIn name of the event to fire for in
           * @private
           */
          fireSyntheticInOutEvents: function(n, a, r) {
            var l, u, d = r.oldTarget, g, m, v = d !== n, y = r.canvasEvtIn, w = r.canvasEvtOut;
            v && (l = { e: a, target: n, previousTarget: d }, u = { e: a, target: d, nextTarget: n }), m = n && v, g = d && v, g && (w && this.fire(w, u), d.fire(r.evtOut, u)), m && (y && this.fire(y, l), n.fire(r.evtIn, l));
          },
          /**
           * Method that defines actions when an Event Mouse Wheel
           * @param {Event} e Event object fired on mouseup
           */
          __onMouseWheel: function(n) {
            this._cacheTransformEventData(n), this._handleEvent(n, "wheel"), this._resetTransformEventData();
          },
          /**
           * @private
           * @param {Event} e Event fired on mousemove
           */
          _transformObject: function(n) {
            var a = this.getPointer(n), r = this._currentTransform;
            r.reset = !1, r.shiftKey = n.shiftKey, r.altKey = n[this.centeredKey], this._performTransformAction(n, r, a), r.actionPerformed && this.requestRenderAll();
          },
          /**
           * @private
           */
          _performTransformAction: function(n, a, r) {
            var l = r.x, u = r.y, d = a.action, g = !1, m = a.actionHandler;
            m && (g = m(n, a, l, u)), d === "drag" && g && (a.target.isMoving = !0, this.setCursor(a.target.moveCursor || this.moveCursor)), a.actionPerformed = a.actionPerformed || g;
          },
          /**
           * @private
           */
          _fire: f.controlsUtils.fireEvent,
          /**
           * Sets the cursor depending on where the canvas is being hovered.
           * Note: very buggy in Opera
           * @param {Event} e Event object
           * @param {Object} target Object that the mouse is hovering, if so.
           */
          _setCursorFromEvent: function(n, a) {
            if (!a)
              return this.setCursor(this.defaultCursor), !1;
            var r = a.hoverCursor || this.hoverCursor, l = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, u = (!l || !l.contains(a)) && a._findTargetCorner(this.getPointer(n, !0));
            u ? this.setCursor(this.getCornerCursor(u, a, n)) : (a.subTargetCheck && this.targets.concat().reverse().map(function(d) {
              r = d.hoverCursor || r;
            }), this.setCursor(r));
          },
          /**
           * @private
           */
          getCornerCursor: function(n, a, r) {
            var l = a.controls[n];
            return l.cursorStyleHandler(r, l, a);
          }
        }
      );
    })(), (function() {
      var c = Math.min, s = Math.max;
      f.util.object.extend(
        f.Canvas.prototype,
        /** @lends fabric.Canvas.prototype */
        {
          /**
           * @private
           * @param {Event} e Event object
           * @param {fabric.Object} target
           * @return {Boolean}
           */
          _shouldGroup: function(h, o) {
            var i = this._activeObject;
            return i && this._isSelectionKeyPressed(h) && o && o.selectable && this.selection && (i !== o || i.type === "activeSelection") && !o.onSelect({ e: h });
          },
          /**
           * @private
           * @param {Event} e Event object
           * @param {fabric.Object} target
           */
          _handleGrouping: function(h, o) {
            var i = this._activeObject;
            i.__corner || o === i && (o = this.findTarget(h, !0), !o || !o.selectable) || (i && i.type === "activeSelection" ? this._updateActiveSelection(o, h) : this._createActiveSelection(o, h));
          },
          /**
           * @private
           */
          _updateActiveSelection: function(h, o) {
            var i = this._activeObject, e = i._objects.slice(0);
            i.contains(h) ? (i.removeWithUpdate(h), this._hoveredTarget = h, this._hoveredTargets = this.targets.concat(), i.size() === 1 && this._setActiveObject(i.item(0), o)) : (i.addWithUpdate(h), this._hoveredTarget = i, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(e, o);
          },
          /**
           * @private
           */
          _createActiveSelection: function(h, o) {
            var i = this.getActiveObjects(), e = this._createGroup(h);
            this._hoveredTarget = e, this._setActiveObject(e, o), this._fireSelectionEvents(i, o);
          },
          /**
           * @private
           * @param {Object} target
           */
          _createGroup: function(h) {
            var o = this._objects, i = o.indexOf(this._activeObject) < o.indexOf(h), e = i ? [this._activeObject, h] : [h, this._activeObject];
            return this._activeObject.isEditing && this._activeObject.exitEditing(), new f.ActiveSelection(e, {
              canvas: this
            });
          },
          /**
           * @private
           * @param {Event} e mouse event
           */
          _groupSelectedObjects: function(h) {
            var o = this._collectObjects(h), i;
            o.length === 1 ? this.setActiveObject(o[0], h) : o.length > 1 && (i = new f.ActiveSelection(o.reverse(), {
              canvas: this
            }), this.setActiveObject(i, h));
          },
          /**
           * @private
           */
          _collectObjects: function(h) {
            for (var o = [], i, e = this._groupSelector.ex, t = this._groupSelector.ey, n = e + this._groupSelector.left, a = t + this._groupSelector.top, r = new f.Point(c(e, n), c(t, a)), l = new f.Point(s(e, n), s(t, a)), u = !this.selectionFullyContained, d = e === n && t === a, g = this._objects.length; g-- && (i = this._objects[g], !(!(!i || !i.selectable || !i.visible) && (u && i.intersectsWithRect(r, l, !0) || i.isContainedWithinRect(r, l, !0) || u && i.containsPoint(r, null, !0) || u && i.containsPoint(l, null, !0)) && (o.push(i), d))); )
              ;
            return o.length > 1 && (o = o.filter(function(m) {
              return !m.onSelect({ e: h });
            })), o;
          },
          /**
           * @private
           */
          _maybeGroupObjects: function(h) {
            this.selection && this._groupSelector && this._groupSelectedObjects(h), this.setCursor(this.defaultCursor), this._groupSelector = null;
          }
        }
      );
    })(), (function() {
      f.util.object.extend(
        f.StaticCanvas.prototype,
        /** @lends fabric.StaticCanvas.prototype */
        {
          /**
           * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
           * @param {Object} [options] Options object
           * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
           * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
           * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
           * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
           * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
           * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
           * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
           * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
           * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
           * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
           * @example <caption>Generate jpeg dataURL with lower quality</caption>
           * var dataURL = canvas.toDataURL({
           *   format: 'jpeg',
           *   quality: 0.8
           * });
           * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
           * var dataURL = canvas.toDataURL({
           *   format: 'png',
           *   left: 100,
           *   top: 100,
           *   width: 200,
           *   height: 200
           * });
           * @example <caption>Generate double scaled png dataURL</caption>
           * var dataURL = canvas.toDataURL({
           *   format: 'png',
           *   multiplier: 2
           * });
           */
          toDataURL: function(c) {
            c || (c = {});
            var s = c.format || "png", h = c.quality || 1, o = (c.multiplier || 1) * (c.enableRetinaScaling ? this.getRetinaScaling() : 1), i = this.toCanvasElement(o, c);
            return f.util.toDataURL(i, s, h);
          },
          /**
           * Create a new HTMLCanvas element painted with the current canvas content.
           * No need to resize the actual one or repaint it.
           * Will transfer object ownership to a new canvas, paint it, and set everything back.
           * This is an intermediary step used to get to a dataUrl but also it is useful to
           * create quick image copies of a canvas without passing for the dataUrl string
           * @param {Number} [multiplier] a zoom factor.
           * @param {Object} [cropping] Cropping informations
           * @param {Number} [cropping.left] Cropping left offset.
           * @param {Number} [cropping.top] Cropping top offset.
           * @param {Number} [cropping.width] Cropping width.
           * @param {Number} [cropping.height] Cropping height.
           */
          toCanvasElement: function(c, s) {
            c = c || 1, s = s || {};
            var h = (s.width || this.width) * c, o = (s.height || this.height) * c, i = this.getZoom(), e = this.width, t = this.height, n = i * c, a = this.viewportTransform, r = (a[4] - (s.left || 0)) * c, l = (a[5] - (s.top || 0)) * c, u = this.interactive, d = [n, 0, 0, n, r, l], g = this.enableRetinaScaling, m = f.util.createCanvasElement(), v = this.contextTop;
            return m.width = h, m.height = o, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = d, this.width = h, this.height = o, this.calcViewportBoundaries(), this.renderCanvas(m.getContext("2d"), this._objects), this.viewportTransform = a, this.width = e, this.height = t, this.calcViewportBoundaries(), this.interactive = u, this.enableRetinaScaling = g, this.contextTop = v, m;
          }
        }
      );
    })(), f.util.object.extend(
      f.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Populates canvas with data from the specified JSON.
         * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
         * @param {String|Object} json JSON string or object
         * @param {Function} callback Callback, invoked when json is parsed
         *                            and corresponding objects (e.g: {@link fabric.Image})
         *                            are initialized
         * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
         * @return {fabric.Canvas} instance
         * @chainable
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
         * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
         * @example <caption>loadFromJSON</caption>
         * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
         * @example <caption>loadFromJSON with reviver</caption>
         * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
         *   // `o` = json object
         *   // `object` = fabric.Object instance
         *   // ... do some stuff ...
         * });
         */
        loadFromJSON: function(c, s, h) {
          if (c) {
            var o = typeof c == "string" ? JSON.parse(c) : f.util.object.clone(c), i = this, e = o.clipPath, t = this.renderOnAddRemove;
            return this.renderOnAddRemove = !1, delete o.clipPath, this._enlivenObjects(o.objects, function(n) {
              i.clear(), i._setBgOverlay(o, function() {
                e ? i._enlivenObjects([e], function(a) {
                  i.clipPath = a[0], i.__setupCanvas.call(i, o, n, t, s);
                }) : i.__setupCanvas.call(i, o, n, t, s);
              });
            }, h), this;
          }
        },
        /**
         * @private
         * @param {Object} serialized Object with background and overlay information
         * @param {Array} restored canvas objects
         * @param {Function} cached renderOnAddRemove callback
         * @param {Function} callback Invoked after all background and overlay images/patterns loaded
         */
        __setupCanvas: function(c, s, h, o) {
          var i = this;
          s.forEach(function(e, t) {
            i.insertAt(e, t);
          }), this.renderOnAddRemove = h, delete c.objects, delete c.backgroundImage, delete c.overlayImage, delete c.background, delete c.overlay, this._setOptions(c), this.renderAll(), o && o();
        },
        /**
         * @private
         * @param {Object} serialized Object with background and overlay information
         * @param {Function} callback Invoked after all background and overlay images/patterns loaded
         */
        _setBgOverlay: function(c, s) {
          var h = {
            backgroundColor: !1,
            overlayColor: !1,
            backgroundImage: !1,
            overlayImage: !1
          };
          if (!c.backgroundImage && !c.overlayImage && !c.background && !c.overlay) {
            s && s();
            return;
          }
          var o = function() {
            h.backgroundImage && h.overlayImage && h.backgroundColor && h.overlayColor && s && s();
          };
          this.__setBgOverlay("backgroundImage", c.backgroundImage, h, o), this.__setBgOverlay("overlayImage", c.overlayImage, h, o), this.__setBgOverlay("backgroundColor", c.background, h, o), this.__setBgOverlay("overlayColor", c.overlay, h, o);
        },
        /**
         * @private
         * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
         * @param {(Object|String)} value Value to set
         * @param {Object} loaded Set loaded property to true if property is set
         * @param {Object} callback Callback function to invoke after property is set
         */
        __setBgOverlay: function(c, s, h, o) {
          var i = this;
          if (!s) {
            h[c] = !0, o && o();
            return;
          }
          c === "backgroundImage" || c === "overlayImage" ? f.util.enlivenObjects([s], function(e) {
            i[c] = e[0], h[c] = !0, o && o();
          }) : this["set" + f.util.string.capitalize(c, !0)](s, function() {
            h[c] = !0, o && o();
          });
        },
        /**
         * @private
         * @param {Array} objects
         * @param {Function} callback
         * @param {Function} [reviver]
         */
        _enlivenObjects: function(c, s, h) {
          if (!c || c.length === 0) {
            s && s([]);
            return;
          }
          f.util.enlivenObjects(c, function(o) {
            s && s(o);
          }, null, h);
        },
        /**
         * @private
         * @param {String} format
         * @param {Function} callback
         */
        _toDataURL: function(c, s) {
          this.clone(function(h) {
            s(h.toDataURL(c));
          });
        },
        /**
         * @private
         * @param {String} format
         * @param {Number} multiplier
         * @param {Function} callback
         */
        _toDataURLWithMultiplier: function(c, s, h) {
          this.clone(function(o) {
            h(o.toDataURLWithMultiplier(c, s));
          });
        },
        /**
         * Clones canvas instance
         * @param {Object} [callback] Receives cloned instance as a first argument
         * @param {Array} [properties] Array of properties to include in the cloned canvas and children
         */
        clone: function(c, s) {
          var h = JSON.stringify(this.toJSON(s));
          this.cloneWithoutData(function(o) {
            o.loadFromJSON(h, function() {
              c && c(o);
            });
          });
        },
        /**
         * Clones canvas instance without cloning existing data.
         * This essentially copies canvas dimensions, clipping properties, etc.
         * but leaves data empty (so that you can populate it with your own)
         * @param {Object} [callback] Receives cloned instance as a first argument
         */
        cloneWithoutData: function(c) {
          var s = f.util.createCanvasElement();
          s.width = this.width, s.height = this.height;
          var h = new f.Canvas(s);
          this.backgroundImage ? (h.setBackgroundImage(this.backgroundImage.src, function() {
            h.renderAll(), c && c(h);
          }), h.backgroundImageOpacity = this.backgroundImageOpacity, h.backgroundImageStretch = this.backgroundImageStretch) : c && c(h);
        }
      }
    ), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, i = s.util.toFixed, e = s.util.string.capitalize, t = s.util.degreesToRadians, n = !s.isLikelyNode, a = 2;
      s.Object || (s.Object = s.util.createClass(
        s.CommonMethods,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Type of an object (rect, circle, path, etc.).
           * Note that this property is meant to be read-only and not meant to be modified.
           * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
           * @type String
           * @default
           */
          type: "object",
          /**
           * Horizontal origin of transformation of an object (one of "left", "right", "center")
           * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
           * @type String
           * @default
           */
          originX: "left",
          /**
           * Vertical origin of transformation of an object (one of "top", "bottom", "center")
           * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
           * @type String
           * @default
           */
          originY: "top",
          /**
           * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
           * @type Number
           * @default
           */
          top: 0,
          /**
           * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
           * @type Number
           * @default
           */
          left: 0,
          /**
           * Object width
           * @type Number
           * @default
           */
          width: 0,
          /**
           * Object height
           * @type Number
           * @default
           */
          height: 0,
          /**
           * Object scale factor (horizontal)
           * @type Number
           * @default
           */
          scaleX: 1,
          /**
           * Object scale factor (vertical)
           * @type Number
           * @default
           */
          scaleY: 1,
          /**
           * When true, an object is rendered as flipped horizontally
           * @type Boolean
           * @default
           */
          flipX: !1,
          /**
           * When true, an object is rendered as flipped vertically
           * @type Boolean
           * @default
           */
          flipY: !1,
          /**
           * Opacity of an object
           * @type Number
           * @default
           */
          opacity: 1,
          /**
           * Angle of rotation of an object (in degrees)
           * @type Number
           * @default
           */
          angle: 0,
          /**
           * Angle of skew on x axes of an object (in degrees)
           * @type Number
           * @default
           */
          skewX: 0,
          /**
           * Angle of skew on y axes of an object (in degrees)
           * @type Number
           * @default
           */
          skewY: 0,
          /**
           * Size of object's controlling corners (in pixels)
           * @type Number
           * @default
           */
          cornerSize: 13,
          /**
           * Size of object's controlling corners when touch interaction is detected
           * @type Number
           * @default
           */
          touchCornerSize: 24,
          /**
           * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
           * @type Boolean
           * @default
           */
          transparentCorners: !0,
          /**
           * Default cursor value used when hovering over this object on canvas
           * @type String
           * @default
           */
          hoverCursor: null,
          /**
           * Default cursor value used when moving this object on canvas
           * @type String
           * @default
           */
          moveCursor: null,
          /**
           * Padding between object and its controlling borders (in pixels)
           * @type Number
           * @default
           */
          padding: 0,
          /**
           * Color of controlling borders of an object (when it's active)
           * @type String
           * @default
           */
          borderColor: "rgb(178,204,255)",
          /**
           * Array specifying dash pattern of an object's borders (hasBorder must be true)
           * @since 1.6.2
           * @type Array
           */
          borderDashArray: null,
          /**
           * Color of controlling corners of an object (when it's active)
           * @type String
           * @default
           */
          cornerColor: "rgb(178,204,255)",
          /**
           * Color of controlling corners of an object (when it's active and transparentCorners false)
           * @since 1.6.2
           * @type String
           * @default
           */
          cornerStrokeColor: null,
          /**
           * Specify style of control, 'rect' or 'circle'
           * @since 1.6.2
           * @type String
           */
          cornerStyle: "rect",
          /**
           * Array specifying dash pattern of an object's control (hasBorder must be true)
           * @since 1.6.2
           * @type Array
           */
          cornerDashArray: null,
          /**
           * When true, this object will use center point as the origin of transformation
           * when being scaled via the controls.
           * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
           * @since 1.3.4
           * @type Boolean
           * @default
           */
          centeredScaling: !1,
          /**
           * When true, this object will use center point as the origin of transformation
           * when being rotated via the controls.
           * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
           * @since 1.3.4
           * @type Boolean
           * @default
           */
          centeredRotation: !0,
          /**
           * Color of object's fill
           * takes css colors https://www.w3.org/TR/css-color-3/
           * @type String
           * @default
           */
          fill: "rgb(0,0,0)",
          /**
           * Fill rule used to fill an object
           * accepted values are nonzero, evenodd
           * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
           * @type String
           * @default
           */
          fillRule: "nonzero",
          /**
           * Composite rule used for canvas globalCompositeOperation
           * @type String
           * @default
           */
          globalCompositeOperation: "source-over",
          /**
           * Background color of an object.
           * takes css colors https://www.w3.org/TR/css-color-3/
           * @type String
           * @default
           */
          backgroundColor: "",
          /**
           * Selection Background color of an object. colored layer behind the object when it is active.
           * does not mix good with globalCompositeOperation methods.
           * @type String
           * @default
           */
          selectionBackgroundColor: "",
          /**
           * When defined, an object is rendered via stroke and this property specifies its color
           * takes css colors https://www.w3.org/TR/css-color-3/
           * @type String
           * @default
           */
          stroke: null,
          /**
           * Width of a stroke used to render this object
           * @type Number
           * @default
           */
          strokeWidth: 1,
          /**
           * Array specifying dash pattern of an object's stroke (stroke must be defined)
           * @type Array
           */
          strokeDashArray: null,
          /**
           * Line offset of an object's stroke
           * @type Number
           * @default
           */
          strokeDashOffset: 0,
          /**
           * Line endings style of an object's stroke (one of "butt", "round", "square")
           * @type String
           * @default
           */
          strokeLineCap: "butt",
          /**
           * Corner style of an object's stroke (one of "bevel", "round", "miter")
           * @type String
           * @default
           */
          strokeLineJoin: "miter",
          /**
           * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
           * @type Number
           * @default
           */
          strokeMiterLimit: 4,
          /**
           * Shadow object representing shadow of this shape
           * @type fabric.Shadow
           * @default
           */
          shadow: null,
          /**
           * Opacity of object's controlling borders when object is active and moving
           * @type Number
           * @default
           */
          borderOpacityWhenMoving: 0.4,
          /**
           * Scale factor of object's controlling borders
           * bigger number will make a thicker border
           * border is 1, so this is basically a border thickness
           * since there is no way to change the border itself.
           * @type Number
           * @default
           */
          borderScaleFactor: 1,
          /**
           * Minimum allowed scale value of an object
           * @type Number
           * @default
           */
          minScaleLimit: 0,
          /**
           * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
           * But events still fire on it.
           * @type Boolean
           * @default
           */
          selectable: !0,
          /**
           * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
           * @type Boolean
           * @default
           */
          evented: !0,
          /**
           * When set to `false`, an object is not rendered on canvas
           * @type Boolean
           * @default
           */
          visible: !0,
          /**
           * When set to `false`, object's controls are not displayed and can not be used to manipulate object
           * @type Boolean
           * @default
           */
          hasControls: !0,
          /**
           * When set to `false`, object's controlling borders are not rendered
           * @type Boolean
           * @default
           */
          hasBorders: !0,
          /**
           * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
           * @type Boolean
           * @default
           */
          perPixelTargetFind: !1,
          /**
           * When `false`, default object's values are not included in its serialization
           * @type Boolean
           * @default
           */
          includeDefaultValues: !0,
          /**
           * When `true`, object horizontal movement is locked
           * @type Boolean
           * @default
           */
          lockMovementX: !1,
          /**
           * When `true`, object vertical movement is locked
           * @type Boolean
           * @default
           */
          lockMovementY: !1,
          /**
           * When `true`, object rotation is locked
           * @type Boolean
           * @default
           */
          lockRotation: !1,
          /**
           * When `true`, object horizontal scaling is locked
           * @type Boolean
           * @default
           */
          lockScalingX: !1,
          /**
           * When `true`, object vertical scaling is locked
           * @type Boolean
           * @default
           */
          lockScalingY: !1,
          /**
           * When `true`, object horizontal skewing is locked
           * @type Boolean
           * @default
           */
          lockSkewingX: !1,
          /**
           * When `true`, object vertical skewing is locked
           * @type Boolean
           * @default
           */
          lockSkewingY: !1,
          /**
           * When `true`, object cannot be flipped by scaling into negative values
           * @type Boolean
           * @default
           */
          lockScalingFlip: !1,
          /**
           * When `true`, object is not exported in OBJECT/JSON
           * @since 1.6.3
           * @type Boolean
           * @default
           */
          excludeFromExport: !1,
          /**
           * When `true`, object is cached on an additional canvas.
           * When `false`, object is not cached unless necessary ( clipPath )
           * default to true
           * @since 1.7.0
           * @type Boolean
           * @default true
           */
          objectCaching: n,
          /**
           * When `true`, object properties are checked for cache invalidation. In some particular
           * situation you may want this to be disabled ( spray brush, very big, groups)
           * or if your application does not allow you to modify properties for groups child you want
           * to disable it for groups.
           * default to false
           * since 1.7.0
           * @type Boolean
           * @default false
           */
          statefullCache: !1,
          /**
           * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
           * too much and will be redrawn with correct details at the end of scaling.
           * this setting is performance and application dependant.
           * default to true
           * since 1.7.0
           * @type Boolean
           * @default true
           */
          noScaleCache: !0,
          /**
           * When `false`, the stoke width will scale with the object.
           * When `true`, the stroke will always match the exact pixel size entered for stroke width.
           * this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
           * default to false
           * @since 2.6.0
           * @type Boolean
           * @default false
           * @type Boolean
           * @default false
           */
          strokeUniform: !1,
          /**
           * When set to `true`, object's cache will be rerendered next render call.
           * since 1.7.0
           * @type Boolean
           * @default true
           */
          dirty: !0,
          /**
           * keeps the value of the last hovered corner during mouse move.
           * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
           * It should be private, but there is no harm in using it as
           * a read-only property.
           * @type number|string|any
           * @default 0
           */
          __corner: 0,
          /**
           * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
           * @type String
           * @default
           */
          paintFirst: "fill",
          /**
           * When 'down', object is set to active on mousedown/touchstart
           * When 'up', object is set to active on mouseup/touchend
           * Experimental. Let's see if this breaks anything before supporting officially
           * @private
           * since 4.4.0
           * @type String
           * @default 'down'
           */
          activeOn: "down",
          /**
           * List of properties to consider when checking if state
           * of an object is changed (fabric.Object#hasStateChanged)
           * as well as for history (undo/redo) purposes
           * @type Array
           */
          stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
          /**
           * List of properties to consider when checking if cache needs refresh
           * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
           * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
           * and refreshed at the next render
           * @type Array
           */
          cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
          /**
           * List of properties to consider for animating colors.
           * @type Array
           */
          colorProperties: "fill stroke backgroundColor".split(" "),
          /**
           * a fabricObject that, without stroke define a clipping area with their shape. filled in black
           * the clipPath object gets used when the object has rendered, and the context is placed in the center
           * of the object cacheCanvas.
           * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
           * @type fabric.Object
           */
          clipPath: void 0,
          /**
           * Meaningful ONLY when the object is used as clipPath.
           * if true, the clipPath will make the object clip to the outside of the clipPath
           * since 2.4.0
           * @type boolean
           * @default false
           */
          inverted: !1,
          /**
           * Meaningful ONLY when the object is used as clipPath.
           * if true, the clipPath will have its top and left relative to canvas, and will
           * not be influenced by the object transform. This will make the clipPath relative
           * to the canvas, but clipping just a particular object.
           * WARNING this is beta, this feature may change or be renamed.
           * since 2.4.0
           * @type boolean
           * @default false
           */
          absolutePositioned: !1,
          /**
           * Constructor
           * @param {Object} [options] Options object
           */
          initialize: function(r) {
            r && this.setOptions(r);
          },
          /**
           * Create a the canvas used to keep the cached copy of the object
           * @private
           */
          _createCacheCanvas: function() {
            this._cacheProperties = {}, this._cacheCanvas = s.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
          },
          /**
           * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
           * and each side do not cross fabric.cacheSideLimit
           * those numbers are configurable so that you can get as much detail as you want
           * making bargain with performances.
           * @param {Object} dims
           * @param {Object} dims.width width of canvas
           * @param {Object} dims.height height of canvas
           * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
           * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
           * @return {Object}.width width of canvas
           * @return {Object}.height height of canvas
           * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
           * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
           */
          _limitCacheSize: function(r) {
            var l = s.perfLimitSizeTotal, u = r.width, d = r.height, g = s.maxCacheSideLimit, m = s.minCacheSideLimit;
            if (u <= g && d <= g && u * d <= l)
              return u < m && (r.width = m), d < m && (r.height = m), r;
            var v = u / d, y = s.util.limitDimsByArea(v, l), w = s.util.capValue, E = w(m, y.x, g), L = w(m, y.y, g);
            return u > E && (r.zoomX /= u / E, r.width = E, r.capped = !0), d > L && (r.zoomY /= d / L, r.height = L, r.capped = !0), r;
          },
          /**
           * Return the dimension and the zoom level needed to create a cache canvas
           * big enough to host the object to be cached.
           * @private
           * @return {Object}.x width of object to be cached
           * @return {Object}.y height of object to be cached
           * @return {Object}.width width of canvas
           * @return {Object}.height height of canvas
           * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
           * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
           */
          _getCacheCanvasDimensions: function() {
            var r = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), u = l.x * r.scaleX / this.scaleX, d = l.y * r.scaleY / this.scaleY;
            return {
              // for sure this ALIASING_LIMIT is slightly creating problem
              // in situation in which the cache canvas gets an upper limit
              // also objectScale contains already scaleX and scaleY
              width: Math.ceil(u + a),
              height: Math.ceil(d + a),
              zoomX: r.scaleX,
              zoomY: r.scaleY,
              x: u,
              y: d
            };
          },
          /**
           * Update width and height of the canvas for cache
           * returns true or false if canvas needed resize.
           * @private
           * @return {Boolean} true if the canvas has been resized
           */
          _updateCacheCanvas: function() {
            var r = this.canvas;
            if (this.noScaleCache && r && r._currentTransform) {
              var l = r._currentTransform.target, u = r._currentTransform.action;
              if (this === l && u.slice && u.slice(0, 5) === "scale")
                return !1;
            }
            var d = this._cacheCanvas, g = this._limitCacheSize(this._getCacheCanvasDimensions()), m = g.width, v = g.height, y, w, E = g.zoomX, L = g.zoomY, W = m !== this.cacheWidth || v !== this.cacheHeight, G = this.zoomX !== E || this.zoomY !== L, V = W || G;
            return V ? (W ? (d.width = m, d.height = v) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, d.width, d.height)), y = g.x / 2, w = g.y / 2, this.cacheTranslationX = Math.round(d.width / 2 - y) + y, this.cacheTranslationY = Math.round(d.height / 2 - w) + w, this.cacheWidth = m, this.cacheHeight = v, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(E, L), this.zoomX = E, this.zoomY = L, !0) : !1;
          },
          /**
           * Sets object's properties from options
           * @param {Object} [options] Options object
           */
          setOptions: function(r) {
            this._setOptions(r), this._initGradient(r.fill, "fill"), this._initGradient(r.stroke, "stroke"), this._initPattern(r.fill, "fill"), this._initPattern(r.stroke, "stroke");
          },
          /**
           * Transforms context when rendering an object
           * @param {CanvasRenderingContext2D} ctx Context
           */
          transform: function(r) {
            var l = this.group && !this.group._transformDone || this.group && this.canvas && r === this.canvas.contextTop, u = this.calcTransformMatrix(!l);
            r.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
          },
          /**
           * Returns an object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of an instance
           */
          toObject: function(r) {
            var l = s.Object.NUM_FRACTION_DIGITS, u = {
              type: this.type,
              version: s.version,
              originX: this.originX,
              originY: this.originY,
              left: i(this.left, l),
              top: i(this.top, l),
              width: i(this.width, l),
              height: i(this.height, l),
              fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
              stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
              strokeWidth: i(this.strokeWidth, l),
              strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
              strokeLineCap: this.strokeLineCap,
              strokeDashOffset: this.strokeDashOffset,
              strokeLineJoin: this.strokeLineJoin,
              strokeUniform: this.strokeUniform,
              strokeMiterLimit: i(this.strokeMiterLimit, l),
              scaleX: i(this.scaleX, l),
              scaleY: i(this.scaleY, l),
              angle: i(this.angle, l),
              flipX: this.flipX,
              flipY: this.flipY,
              opacity: i(this.opacity, l),
              shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
              visible: this.visible,
              backgroundColor: this.backgroundColor,
              fillRule: this.fillRule,
              paintFirst: this.paintFirst,
              globalCompositeOperation: this.globalCompositeOperation,
              skewX: i(this.skewX, l),
              skewY: i(this.skewY, l)
            };
            return this.clipPath && !this.clipPath.excludeFromExport && (u.clipPath = this.clipPath.toObject(r), u.clipPath.inverted = this.clipPath.inverted, u.clipPath.absolutePositioned = this.clipPath.absolutePositioned), s.util.populateWithProperties(this, u, r), this.includeDefaultValues || (u = this._removeDefaultValues(u)), u;
          },
          /**
           * Returns (dataless) object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of an instance
           */
          toDatalessObject: function(r) {
            return this.toObject(r);
          },
          /**
           * @private
           * @param {Object} object
           */
          _removeDefaultValues: function(r) {
            var l = s.util.getKlass(r.type).prototype, u = l.stateProperties;
            return u.forEach(function(d) {
              d === "left" || d === "top" || (r[d] === l[d] && delete r[d], Array.isArray(r[d]) && Array.isArray(l[d]) && r[d].length === 0 && l[d].length === 0 && delete r[d]);
            }), r;
          },
          /**
           * Returns a string representation of an instance
           * @return {String}
           */
          toString: function() {
            return "#<fabric." + e(this.type) + ">";
          },
          /**
           * Return the object scale factor counting also the group scaling
           * @return {Object} object with scaleX and scaleY properties
           */
          getObjectScaling: function() {
            if (!this.group)
              return {
                scaleX: this.scaleX,
                scaleY: this.scaleY
              };
            var r = s.util.qrDecompose(this.calcTransformMatrix());
            return { scaleX: Math.abs(r.scaleX), scaleY: Math.abs(r.scaleY) };
          },
          /**
           * Return the object scale factor counting also the group scaling, zoom and retina
           * @return {Object} object with scaleX and scaleY properties
           */
          getTotalObjectScaling: function() {
            var r = this.getObjectScaling(), l = r.scaleX, u = r.scaleY;
            if (this.canvas) {
              var d = this.canvas.getZoom(), g = this.canvas.getRetinaScaling();
              l *= d * g, u *= d * g;
            }
            return { scaleX: l, scaleY: u };
          },
          /**
           * Return the object opacity counting also the group property
           * @return {Number}
           */
          getObjectOpacity: function() {
            var r = this.opacity;
            return this.group && (r *= this.group.getObjectOpacity()), r;
          },
          /**
           * @private
           * @param {String} key
           * @param {*} value
           * @return {fabric.Object} thisArg
           */
          _set: function(r, l) {
            var u = r === "scaleX" || r === "scaleY", d = this[r] !== l, g = !1;
            return u && (l = this._constrainScale(l)), r === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : r === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : r === "shadow" && l && !(l instanceof s.Shadow) ? l = new s.Shadow(l) : r === "dirty" && this.group && this.group.set("dirty", l), this[r] = l, d && (g = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(r) > -1 ? (this.dirty = !0, g && this.group.set("dirty", !0)) : g && this.stateProperties.indexOf(r) > -1 && this.group.set("dirty", !0)), this;
          },
          /**
           * This callback function is called by the parent group of an object every
           * time a non-delegated property changes on the group. It is passed the key
           * and value as parameters. Not adding in this function's signature to avoid
           * Travis build error about unused variables.
           */
          setOnGroup: function() {
          },
          /**
           * Retrieves viewportTransform from Object's canvas if possible
           * @method getViewportTransform
           * @memberOf fabric.Object.prototype
           * @return {Array}
           */
          getViewportTransform: function() {
            return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : s.iMatrix.concat();
          },
          /*
           * @private
           * return if the object would be visible in rendering
           * @memberOf fabric.Object.prototype
           * @return {Boolean}
           */
          isNotVisible: function() {
            return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
          },
          /**
           * Renders an object on a specified context
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          render: function(r) {
            this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (r.save(), this._setupCompositeOperation(r), this.drawSelectionBackground(r), this.transform(r), this._setOpacity(r), this._setShadow(r, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(r)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(r), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), r.restore());
          },
          renderCache: function(r) {
            r = r || {}, (!this._cacheCanvas || !this._cacheContext) && this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, r.forClipping), this.dirty = !1);
          },
          /**
           * Remove cacheCanvas and its dimensions from the objects
           */
          _removeCacheCanvas: function() {
            this._cacheCanvas = null, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
          },
          /**
           * return true if the object will draw a stroke
           * Does not consider text styles. This is just a shortcut used at rendering time
           * We want it to be an approximation and be fast.
           * wrote to avoid extra caching, it has to return true when stroke happens,
           * can guess when it will not happen at 100% chance, does not matter if it misses
           * some use case where the stroke is invisible.
           * @since 3.0.0
           * @returns Boolean
           */
          hasStroke: function() {
            return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
          },
          /**
           * return true if the object will draw a fill
           * Does not consider text styles. This is just a shortcut used at rendering time
           * We want it to be an approximation and be fast.
           * wrote to avoid extra caching, it has to return true when fill happens,
           * can guess when it will not happen at 100% chance, does not matter if it misses
           * some use case where the fill is invisible.
           * @since 3.0.0
           * @returns Boolean
           */
          hasFill: function() {
            return this.fill && this.fill !== "transparent";
          },
          /**
           * When set to `true`, force the object to have its own cache, even if it is inside a group
           * it may be needed when your object behave in a particular way on the cache and always needs
           * its own isolated canvas to render correctly.
           * Created to be overridden
           * since 1.7.12
           * @returns Boolean
           */
          needsItsOwnCache: function() {
            return !!(this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow == "object" || this.clipPath);
          },
          /**
           * Decide if the object should cache or not. Create its own cache level
           * objectCaching is a global flag, wins over everything
           * needsItsOwnCache should be used when the object drawing method requires
           * a cache step. None of the fabric classes requires it.
           * Generally you do not cache objects in groups because the group outside is cached.
           * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
           * @return {Boolean}
           */
          shouldCache: function() {
            return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
          },
          /**
           * Check if this object or a child object will cast a shadow
           * used by Group.shouldCache to know if child has a shadow recursively
           * @return {Boolean}
           */
          willDrawShadow: function() {
            return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
          },
          /**
           * Execute the drawing operation for an object clipPath
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {fabric.Object} clipPath
           */
          drawClipPathOnCache: function(r, l) {
            if (r.save(), l.inverted ? r.globalCompositeOperation = "destination-out" : r.globalCompositeOperation = "destination-in", l.absolutePositioned) {
              var u = s.util.invertTransform(this.calcTransformMatrix());
              r.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
            }
            l.transform(r), r.scale(1 / l.zoomX, 1 / l.zoomY), r.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), r.restore();
          },
          /**
           * Execute the drawing operation for an object on a specified context
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          drawObject: function(r, l) {
            var u = this.fill, d = this.stroke;
            l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(r)) : this._renderBackground(r), this._render(r), this._drawClipPath(r, this.clipPath), this.fill = u, this.stroke = d;
          },
          /**
           * Prepare clipPath state and cache and draw it on instance's cache
           * @param {CanvasRenderingContext2D} ctx
           * @param {fabric.Object} clipPath
           */
          _drawClipPath: function(r, l) {
            l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(r, l));
          },
          /**
           * Paint the cached copy of the object on the target context.
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          drawCacheOnCanvas: function(r) {
            r.scale(1 / this.zoomX, 1 / this.zoomY), r.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
          },
          /**
           * Check if cache is dirty
           * @param {Boolean} skipCanvas skip canvas checks because this object is painted
           * on parent canvas.
           */
          isCacheDirty: function(r) {
            if (this.isNotVisible())
              return !1;
            if (this._cacheCanvas && this._cacheContext && !r && this._updateCacheCanvas())
              return !0;
            if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
              if (this._cacheCanvas && this._cacheContext && !r) {
                var l = this.cacheWidth / this.zoomX, u = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect(-l / 2, -u / 2, l, u);
              }
              return !0;
            }
            return !1;
          },
          /**
           * Draws a background for the object big as its untransformed dimensions
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderBackground: function(r) {
            if (this.backgroundColor) {
              var l = this._getNonTransformedDimensions();
              r.fillStyle = this.backgroundColor, r.fillRect(
                -l.x / 2,
                -l.y / 2,
                l.x,
                l.y
              ), this._removeShadow(r);
            }
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _setOpacity: function(r) {
            this.group && !this.group._transformDone ? r.globalAlpha = this.getObjectOpacity() : r.globalAlpha *= this.opacity;
          },
          _setStrokeStyles: function(r, l) {
            var u = l.stroke;
            u && (r.lineWidth = l.strokeWidth, r.lineCap = l.strokeLineCap, r.lineDashOffset = l.strokeDashOffset, r.lineJoin = l.strokeLineJoin, r.miterLimit = l.strokeMiterLimit, u.toLive ? u.gradientUnits === "percentage" || u.gradientTransform || u.patternTransform ? this._applyPatternForTransformedGradient(r, u) : (r.strokeStyle = u.toLive(r, this), this._applyPatternGradientTransform(r, u)) : r.strokeStyle = l.stroke);
          },
          _setFillStyles: function(r, l) {
            var u = l.fill;
            u && (u.toLive ? (r.fillStyle = u.toLive(r, this), this._applyPatternGradientTransform(r, l.fill)) : r.fillStyle = u);
          },
          _setClippingProperties: function(r) {
            r.globalAlpha = 1, r.strokeStyle = "transparent", r.fillStyle = "#000000";
          },
          /**
           * @private
           * Sets line dash
           * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
           * @param {Array} dashArray array representing dashes
           */
          _setLineDash: function(r, l) {
            !l || l.length === 0 || (1 & l.length && l.push.apply(l, l), r.setLineDash(l));
          },
          /**
           * Renders controls and borders for the object
           * the context here is not transformed
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Object} [styleOverride] properties to override the object style
           */
          _renderControls: function(r, l) {
            var u = this.getViewportTransform(), d = this.calcTransformMatrix(), g, m, v;
            l = l || {}, m = typeof l.hasBorders < "u" ? l.hasBorders : this.hasBorders, v = typeof l.hasControls < "u" ? l.hasControls : this.hasControls, d = s.util.multiplyTransformMatrices(u, d), g = s.util.qrDecompose(d), r.save(), r.translate(g.translateX, g.translateY), r.lineWidth = 1 * this.borderScaleFactor, this.group || (r.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (g.angle -= 180), r.rotate(t(this.group ? g.angle : this.angle)), l.forActiveSelection || this.group ? m && this.drawBordersInGroup(r, g, l) : m && this.drawBorders(r, l), v && this.drawControls(r, l), r.restore();
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _setShadow: function(r) {
            if (this.shadow) {
              var l = this.shadow, u = this.canvas, d, g = u && u.viewportTransform[0] || 1, m = u && u.viewportTransform[3] || 1;
              l.nonScaling ? d = { scaleX: 1, scaleY: 1 } : d = this.getObjectScaling(), u && u._isRetinaScaling() && (g *= s.devicePixelRatio, m *= s.devicePixelRatio), r.shadowColor = l.color, r.shadowBlur = l.blur * s.browserShadowBlurConstant * (g + m) * (d.scaleX + d.scaleY) / 4, r.shadowOffsetX = l.offsetX * g * d.scaleX, r.shadowOffsetY = l.offsetY * m * d.scaleY;
            }
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _removeShadow: function(r) {
            this.shadow && (r.shadowColor = "", r.shadowBlur = r.shadowOffsetX = r.shadowOffsetY = 0);
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Object} filler fabric.Pattern or fabric.Gradient
           * @return {Object} offset.offsetX offset for text rendering
           * @return {Object} offset.offsetY offset for text rendering
           */
          _applyPatternGradientTransform: function(r, l) {
            if (!l || !l.toLive)
              return { offsetX: 0, offsetY: 0 };
            var u = l.gradientTransform || l.patternTransform, d = -this.width / 2 + l.offsetX || 0, g = -this.height / 2 + l.offsetY || 0;
            return l.gradientUnits === "percentage" ? r.transform(this.width, 0, 0, this.height, d, g) : r.transform(1, 0, 0, 1, d, g), u && r.transform(u[0], u[1], u[2], u[3], u[4], u[5]), { offsetX: d, offsetY: g };
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderPaintInOrder: function(r) {
            this.paintFirst === "stroke" ? (this._renderStroke(r), this._renderFill(r)) : (this._renderFill(r), this._renderStroke(r));
          },
          /**
           * @private
           * function that actually render something on the context.
           * empty here to allow Obects to work on tests to benchmark fabric functionalites
           * not related to rendering
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function() {
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderFill: function(r) {
            this.fill && (r.save(), this._setFillStyles(r, this), this.fillRule === "evenodd" ? r.fill("evenodd") : r.fill(), r.restore());
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderStroke: function(r) {
            if (!(!this.stroke || this.strokeWidth === 0)) {
              if (this.shadow && !this.shadow.affectStroke && this._removeShadow(r), r.save(), this.strokeUniform && this.group) {
                var l = this.getObjectScaling();
                r.scale(1 / l.scaleX, 1 / l.scaleY);
              } else this.strokeUniform && r.scale(1 / this.scaleX, 1 / this.scaleY);
              this._setLineDash(r, this.strokeDashArray), this._setStrokeStyles(r, this), r.stroke(), r.restore();
            }
          },
          /**
           * This function try to patch the missing gradientTransform on canvas gradients.
           * transforming a context to transform the gradient, is going to transform the stroke too.
           * we want to transform the gradient but not the stroke operation, so we create
           * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
           * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
           * is limited.
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {fabric.Gradient} filler a fabric gradient instance
           */
          _applyPatternForTransformedGradient: function(r, l) {
            var u = this._limitCacheSize(this._getCacheCanvasDimensions()), d = s.util.createCanvasElement(), g, m = this.canvas.getRetinaScaling(), v = u.x / this.scaleX / m, y = u.y / this.scaleY / m;
            d.width = Math.ceil(v), d.height = Math.ceil(y), g = d.getContext("2d"), g.beginPath(), g.moveTo(0, 0), g.lineTo(v, 0), g.lineTo(v, y), g.lineTo(0, y), g.closePath(), g.translate(v / 2, y / 2), g.scale(
              u.zoomX / this.scaleX / m,
              u.zoomY / this.scaleY / m
            ), this._applyPatternGradientTransform(g, l), g.fillStyle = l.toLive(r), g.fill(), r.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), r.scale(
              m * this.scaleX / u.zoomX,
              m * this.scaleY / u.zoomY
            ), r.strokeStyle = g.createPattern(d, "no-repeat");
          },
          /**
           * This function is an helper for svg import. it returns the center of the object in the svg
           * untransformed coordinates
           * @private
           * @return {Object} center point from element coordinates
           */
          _findCenterFromElement: function() {
            return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
          },
          /**
           * This function is an helper for svg import. it decompose the transformMatrix
           * and assign properties to object.
           * untransformed coordinates
           * @private
           * @chainable
           */
          _assignTransformMatrixProps: function() {
            if (this.transformMatrix) {
              var r = s.util.qrDecompose(this.transformMatrix);
              this.flipX = !1, this.flipY = !1, this.set("scaleX", r.scaleX), this.set("scaleY", r.scaleY), this.angle = r.angle, this.skewX = r.skewX, this.skewY = 0;
            }
          },
          /**
           * This function is an helper for svg import. it removes the transform matrix
           * and set to object properties that fabricjs can handle
           * @private
           * @param {Object} preserveAspectRatioOptions
           * @return {thisArg}
           */
          _removeTransformMatrix: function(r) {
            var l = this._findCenterFromElement();
            this.transformMatrix && (this._assignTransformMatrixProps(), l = s.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, r && (this.scaleX *= r.scaleX, this.scaleY *= r.scaleY, this.cropX = r.cropX, this.cropY = r.cropY, l.x += r.offsetLeft, l.y += r.offsetTop, this.width = r.width, this.height = r.height), this.setPositionByOrigin(l, "center", "center");
          },
          /**
           * Clones an instance, using a callback method will work for every object.
           * @param {Function} callback Callback is invoked with a clone as a first argument
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           */
          clone: function(r, l) {
            var u = this.toObject(l);
            this.constructor.fromObject ? this.constructor.fromObject(u, r) : s.Object._fromObject("Object", u, r);
          },
          /**
           * Creates an instance of fabric.Image out of an object
           * makes use of toCanvasElement.
           * Once this method was based on toDataUrl and loadImage, so it also had a quality
           * and format option. toCanvasElement is faster and produce no loss of quality.
           * If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
           * toCanvasElement and then toBlob from the obtained canvas is also a good option.
           * This method is sync now, but still support the callback because we did not want to break.
           * When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.
           * @param {Function} callback callback, invoked with an instance as a first argument
           * @param {Object} [options] for clone as image, passed to toDataURL
           * @param {Number} [options.multiplier=1] Multiplier to scale by
           * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
           * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
           * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
           * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
           * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
           * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
           * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
           * @return {fabric.Object} thisArg
           */
          cloneAsImage: function(r, l) {
            var u = this.toCanvasElement(l);
            return r && r(new s.Image(u)), this;
          },
          /**
           * Converts an object into a HTMLCanvas element
           * @param {Object} options Options object
           * @param {Number} [options.multiplier=1] Multiplier to scale by
           * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
           * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
           * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
           * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
           * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
           * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
           * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
           * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
           */
          toCanvasElement: function(r) {
            r || (r = {});
            var l = s.util, u = l.saveObjectTransform(this), d = this.group, g = this.shadow, m = Math.abs, v = (r.multiplier || 1) * (r.enableRetinaScaling ? s.devicePixelRatio : 1);
            delete this.group, r.withoutTransform && l.resetObjectTransform(this), r.withoutShadow && (this.shadow = null);
            var y = s.util.createCanvasElement(), w = this.getBoundingRect(!0, !0), E = this.shadow, L, W = { x: 0, y: 0 }, G, V, H;
            E && (G = E.blur, E.nonScaling ? L = { scaleX: 1, scaleY: 1 } : L = this.getObjectScaling(), W.x = 2 * Math.round(m(E.offsetX) + G) * m(L.scaleX), W.y = 2 * Math.round(m(E.offsetY) + G) * m(L.scaleY)), V = w.width + W.x, H = w.height + W.y, y.width = Math.ceil(V), y.height = Math.ceil(H);
            var N = new s.StaticCanvas(y, {
              enableRetinaScaling: !1,
              renderOnAddRemove: !1,
              skipOffscreen: !1
            });
            r.format === "jpeg" && (N.backgroundColor = "#fff"), this.setPositionByOrigin(new s.Point(N.width / 2, N.height / 2), "center", "center");
            var K = this.canvas;
            N.add(this);
            var $ = N.toCanvasElement(v || 1, r);
            return this.shadow = g, this.set("canvas", K), d && (this.group = d), this.set(u).setCoords(), N._objects = [], N.dispose(), N = null, $;
          },
          /**
           * Converts an object into a data-url-like string
           * @param {Object} options Options object
           * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
           * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
           * @param {Number} [options.multiplier=1] Multiplier to scale by
           * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
           * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
           * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
           * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
           * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
           * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
           * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
           * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
           */
          toDataURL: function(r) {
            return r || (r = {}), s.util.toDataURL(this.toCanvasElement(r), r.format || "png", r.quality || 1);
          },
          /**
           * Returns true if specified type is identical to the type of an instance
           * @param {String} type Type to check against
           * @return {Boolean}
           */
          isType: function(r) {
            return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === r;
          },
          /**
           * Returns complexity of an instance
           * @return {Number} complexity of this instance (is 1 unless subclassed)
           */
          complexity: function() {
            return 1;
          },
          /**
           * Returns a JSON representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} JSON
           */
          toJSON: function(r) {
            return this.toObject(r);
          },
          /**
           * Sets "angle" of an instance with centered rotation
           * @param {Number} angle Angle value (in degrees)
           * @return {fabric.Object} thisArg
           * @chainable
           */
          rotate: function(r) {
            var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
            return l && this._setOriginToCenter(), this.set("angle", r), l && this._resetOrigin(), this;
          },
          /**
           * Centers object horizontally on canvas to which it was added last.
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          centerH: function() {
            return this.canvas && this.canvas.centerObjectH(this), this;
          },
          /**
           * Centers object horizontally on current viewport of canvas to which it was added last.
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          viewportCenterH: function() {
            return this.canvas && this.canvas.viewportCenterObjectH(this), this;
          },
          /**
           * Centers object vertically on canvas to which it was added last.
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          centerV: function() {
            return this.canvas && this.canvas.centerObjectV(this), this;
          },
          /**
           * Centers object vertically on current viewport of canvas to which it was added last.
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          viewportCenterV: function() {
            return this.canvas && this.canvas.viewportCenterObjectV(this), this;
          },
          /**
           * Centers object vertically and horizontally on canvas to which is was added last
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          center: function() {
            return this.canvas && this.canvas.centerObject(this), this;
          },
          /**
           * Centers object on current viewport of canvas to which it was added last.
           * You might need to call `setCoords` on an object after centering, to update controls area.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          viewportCenter: function() {
            return this.canvas && this.canvas.viewportCenterObject(this), this;
          },
          /**
           * Returns coordinates of a pointer relative to an object
           * @param {Event} e Event to operate upon
           * @param {Object} [pointer] Pointer to operate upon (instead of event)
           * @return {Object} Coordinates of a pointer (x, y)
           */
          getLocalPointer: function(r, l) {
            l = l || this.canvas.getPointer(r);
            var u = new s.Point(l.x, l.y), d = this._getLeftTopCoords();
            return this.angle && (u = s.util.rotatePoint(
              u,
              d,
              t(-this.angle)
            )), {
              x: u.x - d.x,
              y: u.y - d.y
            };
          },
          /**
           * Sets canvas globalCompositeOperation for specific object
           * custom composition operation for the particular object can be specified using globalCompositeOperation property
           * @param {CanvasRenderingContext2D} ctx Rendering canvas context
           */
          _setupCompositeOperation: function(r) {
            this.globalCompositeOperation && (r.globalCompositeOperation = this.globalCompositeOperation);
          },
          /**
           * cancel instance's running animations
           * override if necessary to dispose artifacts such as `clipPath`
           */
          dispose: function() {
            s.runningAnimations && s.runningAnimations.cancelByTarget(this);
          }
        }
      ), s.util.createAccessors && s.util.createAccessors(s.Object), h(s.Object.prototype, s.Observable), s.Object.NUM_FRACTION_DIGITS = 2, s.Object.ENLIVEN_PROPS = ["clipPath"], s.Object._fromObject = function(r, l, u, d) {
        var g = s[r];
        l = o(l, !0), s.util.enlivenPatterns([l.fill, l.stroke], function(m) {
          typeof m[0] < "u" && (l.fill = m[0]), typeof m[1] < "u" && (l.stroke = m[1]), s.util.enlivenObjectEnlivables(l, l, function() {
            var v = d ? new g(l[d], l) : new g(l);
            u && u(v);
          });
        });
      }, s.Object.__uid = 0);
    })(q), (function() {
      var c = f.util.degreesToRadians, s = {
        left: -0.5,
        center: 0,
        right: 0.5
      }, h = {
        top: -0.5,
        center: 0,
        bottom: 0.5
      };
      f.util.object.extend(
        f.Object.prototype,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Translates the coordinates from a set of origin to another (based on the object's dimensions)
           * @param {fabric.Point} point The point which corresponds to the originX and originY params
           * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
           * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
           * @return {fabric.Point}
           */
          translateToGivenOrigin: function(o, i, e, t, n) {
            var a = o.x, r = o.y, l, u, d;
            return typeof i == "string" ? i = s[i] : i -= 0.5, typeof t == "string" ? t = s[t] : t -= 0.5, l = t - i, typeof e == "string" ? e = h[e] : e -= 0.5, typeof n == "string" ? n = h[n] : n -= 0.5, u = n - e, (l || u) && (d = this._getTransformedDimensions(), a = o.x + l * d.x, r = o.y + u * d.y), new f.Point(a, r);
          },
          /**
           * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
           * @param {fabric.Point} point The point which corresponds to the originX and originY params
           * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
           * @return {fabric.Point}
           */
          translateToCenterPoint: function(o, i, e) {
            var t = this.translateToGivenOrigin(o, i, e, "center", "center");
            return this.angle ? f.util.rotatePoint(t, o, c(this.angle)) : t;
          },
          /**
           * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
           * @param {fabric.Point} center The point which corresponds to center of the object
           * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
           * @return {fabric.Point}
           */
          translateToOriginPoint: function(o, i, e) {
            var t = this.translateToGivenOrigin(o, "center", "center", i, e);
            return this.angle ? f.util.rotatePoint(t, o, c(this.angle)) : t;
          },
          /**
           * Returns the real center coordinates of the object
           * @return {fabric.Point}
           */
          getCenterPoint: function() {
            var o = new f.Point(this.left, this.top);
            return this.translateToCenterPoint(o, this.originX, this.originY);
          },
          /**
           * Returns the coordinates of the object based on center coordinates
           * @param {fabric.Point} point The point which corresponds to the originX and originY params
           * @return {fabric.Point}
           */
          // getOriginPoint: function(center) {
          //   return this.translateToOriginPoint(center, this.originX, this.originY);
          // },
          /**
           * Returns the coordinates of the object as if it has a different origin
           * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
           * @return {fabric.Point}
           */
          getPointByOrigin: function(o, i) {
            var e = this.getCenterPoint();
            return this.translateToOriginPoint(e, o, i);
          },
          /**
           * Returns the point in local coordinates
           * @param {fabric.Point} point The point relative to the global coordinate system
           * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
           * @return {fabric.Point}
           */
          toLocalPoint: function(o, i, e) {
            var t = this.getCenterPoint(), n, a;
            return typeof i < "u" && typeof e < "u" ? n = this.translateToGivenOrigin(t, "center", "center", i, e) : n = new f.Point(this.left, this.top), a = new f.Point(o.x, o.y), this.angle && (a = f.util.rotatePoint(a, t, -c(this.angle))), a.subtractEquals(n);
          },
          /**
           * Returns the point in global coordinates
           * @param {fabric.Point} The point relative to the local coordinate system
           * @return {fabric.Point}
           */
          // toGlobalPoint: function(point) {
          //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
          // },
          /**
           * Sets the position of the object taking into consideration the object's origin
           * @param {fabric.Point} pos The new position of the object
           * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
           * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
           * @return {void}
           */
          setPositionByOrigin: function(o, i, e) {
            var t = this.translateToCenterPoint(o, i, e), n = this.translateToOriginPoint(t, this.originX, this.originY);
            this.set("left", n.x), this.set("top", n.y);
          },
          /**
           * @param {String} to One of 'left', 'center', 'right'
           */
          adjustPosition: function(o) {
            var i = c(this.angle), e = this.getScaledWidth(), t = f.util.cos(i) * e, n = f.util.sin(i) * e, a, r;
            typeof this.originX == "string" ? a = s[this.originX] : a = this.originX - 0.5, typeof o == "string" ? r = s[o] : r = o - 0.5, this.left += t * (r - a), this.top += n * (r - a), this.setCoords(), this.originX = o;
          },
          /**
           * Sets the origin/position of the object to it's center point
           * @private
           * @return {void}
           */
          _setOriginToCenter: function() {
            this._originalOriginX = this.originX, this._originalOriginY = this.originY;
            var o = this.getCenterPoint();
            this.originX = "center", this.originY = "center", this.left = o.x, this.top = o.y;
          },
          /**
           * Resets the origin/position of the object to it's original origin
           * @private
           * @return {void}
           */
          _resetOrigin: function() {
            var o = this.translateToOriginPoint(
              this.getCenterPoint(),
              this._originalOriginX,
              this._originalOriginY
            );
            this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = o.x, this.top = o.y, this._originalOriginX = null, this._originalOriginY = null;
          },
          /**
           * @private
           */
          _getLeftTopCoords: function() {
            return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
          }
        }
      );
    })(), (function() {
      function c(e) {
        return [
          new f.Point(e.tl.x, e.tl.y),
          new f.Point(e.tr.x, e.tr.y),
          new f.Point(e.br.x, e.br.y),
          new f.Point(e.bl.x, e.bl.y)
        ];
      }
      var s = f.util, h = s.degreesToRadians, o = s.multiplyTransformMatrices, i = s.transformPoint;
      s.object.extend(
        f.Object.prototype,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Describe object's corner position in canvas element coordinates.
           * properties are depending on control keys and padding the main controls.
           * each property is an object with x, y and corner.
           * The `corner` property contains in a similar manner the 4 points of the
           * interactive area of the corner.
           * The coordinates depends from the controls positionHandler and are used
           * to draw and locate controls
           * @memberOf fabric.Object.prototype
           */
          oCoords: null,
          /**
           * Describe object's corner position in canvas object absolute coordinates
           * properties are tl,tr,bl,br and describe the four main corner.
           * each property is an object with x, y, instance of Fabric.Point.
           * The coordinates depends from this properties: width, height, scaleX, scaleY
           * skewX, skewY, angle, strokeWidth, top, left.
           * Those coordinates are useful to understand where an object is. They get updated
           * with oCoords but they do not need to be updated when zoom or panning change.
           * The coordinates get updated with @method setCoords.
           * You can calculate them without updating with @method calcACoords();
           * @memberOf fabric.Object.prototype
           */
          aCoords: null,
          /**
           * Describe object's corner position in canvas element coordinates.
           * includes padding. Used of object detection.
           * set and refreshed with setCoords.
           * @memberOf fabric.Object.prototype
           */
          lineCoords: null,
          /**
           * storage for object transform matrix
           */
          ownMatrixCache: null,
          /**
           * storage for object full transform matrix
           */
          matrixCache: null,
          /**
           * custom controls interface
           * controls are added by default_controls.js
           */
          controls: {},
          /**
           * return correct set of coordinates for intersection
           * this will return either aCoords or lineCoords.
           * @param {Boolean} absolute will return aCoords if true or lineCoords
           * @return {Object} {tl, tr, br, bl} points
           */
          _getCoords: function(e, t) {
            return t ? e ? this.calcACoords() : this.calcLineCoords() : ((!this.aCoords || !this.lineCoords) && this.setCoords(!0), e ? this.aCoords : this.lineCoords);
          },
          /**
           * return correct set of coordinates for intersection
           * this will return either aCoords or lineCoords.
           * The coords are returned in an array.
           * @return {Array} [tl, tr, br, bl] of points
           */
          getCoords: function(e, t) {
            return c(this._getCoords(e, t));
          },
          /**
           * Checks if object intersects with an area formed by 2 points
           * @param {Object} pointTL top-left point of area
           * @param {Object} pointBR bottom-right point of area
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if object intersects with an area formed by 2 points
           */
          intersectsWithRect: function(e, t, n, a) {
            var r = this.getCoords(n, a), l = f.Intersection.intersectPolygonRectangle(
              r,
              e,
              t
            );
            return l.status === "Intersection";
          },
          /**
           * Checks if object intersects with another object
           * @param {Object} other Object to test
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if object intersects with another object
           */
          intersectsWithObject: function(e, t, n) {
            var a = f.Intersection.intersectPolygonPolygon(
              this.getCoords(t, n),
              e.getCoords(t, n)
            );
            return a.status === "Intersection" || e.isContainedWithinObject(this, t, n) || this.isContainedWithinObject(e, t, n);
          },
          /**
           * Checks if object is fully contained within area of another object
           * @param {Object} other Object to test
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if object is fully contained within area of another object
           */
          isContainedWithinObject: function(e, t, n) {
            for (var a = this.getCoords(t, n), r = t ? e.aCoords : e.lineCoords, l = 0, u = e._getImageLines(r); l < 4; l++)
              if (!e.containsPoint(a[l], u))
                return !1;
            return !0;
          },
          /**
           * Checks if object is fully contained within area formed by 2 points
           * @param {Object} pointTL top-left point of area
           * @param {Object} pointBR bottom-right point of area
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if object is fully contained within area formed by 2 points
           */
          isContainedWithinRect: function(e, t, n, a) {
            var r = this.getBoundingRect(n, a);
            return r.left >= e.x && r.left + r.width <= t.x && r.top >= e.y && r.top + r.height <= t.y;
          },
          /**
           * Checks if point is inside the object
           * @param {fabric.Point} point Point to check against
           * @param {Object} [lines] object returned from @method _getImageLines
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if point is inside the object
           */
          containsPoint: function(e, l, n, a) {
            var r = this._getCoords(n, a), l = l || this._getImageLines(r), u = this._findCrossPoints(e, l);
            return u !== 0 && u % 2 === 1;
          },
          /**
           * Checks if object is contained within the canvas with current viewportTransform
           * the check is done stopping at first point that appears on screen
           * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
           * @return {Boolean} true if object is fully or partially contained within canvas
           */
          isOnScreen: function(e) {
            if (!this.canvas)
              return !1;
            var t = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br, a = this.getCoords(!0, e);
            return a.some(function(r) {
              return r.x <= n.x && r.x >= t.x && r.y <= n.y && r.y >= t.y;
            }) || this.intersectsWithRect(t, n, !0, e) ? !0 : this._containsCenterOfCanvas(t, n, e);
          },
          /**
           * Checks if the object contains the midpoint between canvas extremities
           * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
           * @private
           * @param {Fabric.Point} pointTL Top Left point
           * @param {Fabric.Point} pointBR Top Right point
           * @param {Boolean} calculate use coordinates of current position instead of .oCoords
           * @return {Boolean} true if the object contains the point
           */
          _containsCenterOfCanvas: function(e, t, n) {
            var a = { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
            return !!this.containsPoint(a, null, !0, n);
          },
          /**
           * Checks if object is partially contained within the canvas with current viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
           * @return {Boolean} true if object is partially contained within canvas
           */
          isPartiallyOnScreen: function(e) {
            if (!this.canvas)
              return !1;
            var t = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br;
            if (this.intersectsWithRect(t, n, !0, e))
              return !0;
            var a = this.getCoords(!0, e).every(function(r) {
              return (r.x >= n.x || r.x <= t.x) && (r.y >= n.y || r.y <= t.y);
            });
            return a && this._containsCenterOfCanvas(t, n, e);
          },
          /**
           * Method that returns an object with the object edges in it, given the coordinates of the corners
           * @private
           * @param {Object} oCoords Coordinates of the object corners
           */
          _getImageLines: function(e) {
            var t = {
              topline: {
                o: e.tl,
                d: e.tr
              },
              rightline: {
                o: e.tr,
                d: e.br
              },
              bottomline: {
                o: e.br,
                d: e.bl
              },
              leftline: {
                o: e.bl,
                d: e.tl
              }
            };
            return t;
          },
          /**
           * Helper method to determine how many cross points are between the 4 object edges
           * and the horizontal line determined by a point on canvas
           * @private
           * @param {fabric.Point} point Point to check
           * @param {Object} lines Coordinates of the object being evaluated
           */
          // remove yi, not used but left code here just in case.
          _findCrossPoints: function(e, t) {
            var n, a, r, l, u, d = 0, g;
            for (var m in t)
              if (g = t[m], !(g.o.y < e.y && g.d.y < e.y) && !(g.o.y >= e.y && g.d.y >= e.y) && (g.o.x === g.d.x && g.o.x >= e.x ? u = g.o.x : (n = 0, a = (g.d.y - g.o.y) / (g.d.x - g.o.x), r = e.y - n * e.x, l = g.o.y - a * g.o.x, u = -(r - l) / (n - a)), u >= e.x && (d += 1), d === 2))
                break;
            return d;
          },
          /**
           * Returns coordinates of object's bounding rectangle (left, top, width, height)
           * the box is intended as aligned to axis of canvas.
           * @param {Boolean} [absolute] use coordinates without viewportTransform
           * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
           * @return {Object} Object with left, top, width, height properties
           */
          getBoundingRect: function(e, t) {
            var n = this.getCoords(e, t);
            return s.makeBoundingBoxFromPoints(n);
          },
          /**
           * Returns width of an object's bounding box counting transformations
           * before 2.0 it was named getWidth();
           * @return {Number} width value
           */
          getScaledWidth: function() {
            return this._getTransformedDimensions().x;
          },
          /**
           * Returns height of an object bounding box counting transformations
           * before 2.0 it was named getHeight();
           * @return {Number} height value
           */
          getScaledHeight: function() {
            return this._getTransformedDimensions().y;
          },
          /**
           * Makes sure the scale is valid and modifies it if necessary
           * @private
           * @param {Number} value
           * @return {Number}
           */
          _constrainScale: function(e) {
            return Math.abs(e) < this.minScaleLimit ? e < 0 ? -this.minScaleLimit : this.minScaleLimit : e === 0 ? 1e-4 : e;
          },
          /**
           * Scales an object (equally by x and y)
           * @param {Number} value Scale factor
           * @return {fabric.Object} thisArg
           * @chainable
           */
          scale: function(e) {
            return this._set("scaleX", e), this._set("scaleY", e), this.setCoords();
          },
          /**
           * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
           * @param {Number} value New width value
           * @param {Boolean} absolute ignore viewport
           * @return {fabric.Object} thisArg
           * @chainable
           */
          scaleToWidth: function(e, t) {
            var n = this.getBoundingRect(t).width / this.getScaledWidth();
            return this.scale(e / this.width / n);
          },
          /**
           * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
           * @param {Number} value New height value
           * @param {Boolean} absolute ignore viewport
           * @return {fabric.Object} thisArg
           * @chainable
           */
          scaleToHeight: function(e, t) {
            var n = this.getBoundingRect(t).height / this.getScaledHeight();
            return this.scale(e / this.height / n);
          },
          calcLineCoords: function() {
            var e = this.getViewportTransform(), t = this.padding, n = h(this.angle), a = s.cos(n), r = s.sin(n), l = a * t, u = r * t, d = l + u, g = l - u, m = this.calcACoords(), v = {
              tl: i(m.tl, e),
              tr: i(m.tr, e),
              bl: i(m.bl, e),
              br: i(m.br, e)
            };
            return t && (v.tl.x -= g, v.tl.y -= d, v.tr.x += d, v.tr.y -= g, v.bl.x -= d, v.bl.y += g, v.br.x += g, v.br.y += d), v;
          },
          calcOCoords: function() {
            var e = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), n = this.getViewportTransform(), a = o(n, t), r = o(a, e), r = o(r, [1 / n[0], 0, 0, 1 / n[3], 0, 0]), l = this._calculateCurrentDimensions(), u = {};
            return this.forEachControl(function(d, g, m) {
              u[g] = d.positionHandler(l, r, m);
            }), u;
          },
          calcACoords: function() {
            var e = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), n = o(t, e), a = this._getTransformedDimensions(), r = a.x / 2, l = a.y / 2;
            return {
              // corners
              tl: i({ x: -r, y: -l }, n),
              tr: i({ x: r, y: -l }, n),
              bl: i({ x: -r, y: l }, n),
              br: i({ x: r, y: l }, n)
            };
          },
          /**
           * Sets corner and controls position coordinates based on current angle, width and height, left and top.
           * oCoords are used to find the corners
           * aCoords are used to quickly find an object on the canvas
           * lineCoords are used to quickly find object during pointer events.
           * See {@link https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords} and {@link http://fabricjs.com/fabric-gotchas}
           *
           * @param {Boolean} [skipCorners] skip calculation of oCoords.
           * @return {fabric.Object} thisArg
           * @chainable
           */
          setCoords: function(e) {
            return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), e ? this : (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords(), this);
          },
          /**
           * calculate rotation matrix of an object
           * @return {Array} rotation matrix for the object
           */
          _calcRotateMatrix: function() {
            return s.calcRotateMatrix(this);
          },
          /**
           * calculate the translation matrix for an object transform
           * @return {Array} rotation matrix for the object
           */
          _calcTranslateMatrix: function() {
            var e = this.getCenterPoint();
            return [1, 0, 0, 1, e.x, e.y];
          },
          transformMatrixKey: function(e) {
            var t = "_", n = "";
            return !e && this.group && (n = this.group.transformMatrixKey(e) + t), n + this.top + t + this.left + t + this.scaleX + t + this.scaleY + t + this.skewX + t + this.skewY + t + this.angle + t + this.originX + t + this.originY + t + this.width + t + this.height + t + this.strokeWidth + this.flipX + this.flipY;
          },
          /**
           * calculate transform matrix that represents the current transformations from the
           * object's properties.
           * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
           * There are some situation in which this is useful to avoid the fake rotation.
           * @return {Array} transform matrix for the object
           */
          calcTransformMatrix: function(e) {
            var t = this.calcOwnMatrix();
            if (e || !this.group)
              return t;
            var n = this.transformMatrixKey(e), a = this.matrixCache || (this.matrixCache = {});
            return a.key === n ? a.value : (this.group && (t = o(this.group.calcTransformMatrix(!1), t)), a.key = n, a.value = t, t);
          },
          /**
           * calculate transform matrix that represents the current transformations from the
           * object's properties, this matrix does not include the group transformation
           * @return {Array} transform matrix for the object
           */
          calcOwnMatrix: function() {
            var e = this.transformMatrixKey(!0), t = this.ownMatrixCache || (this.ownMatrixCache = {});
            if (t.key === e)
              return t.value;
            var n = this._calcTranslateMatrix(), a = {
              angle: this.angle,
              translateX: n[4],
              translateY: n[5],
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              skewX: this.skewX,
              skewY: this.skewY,
              flipX: this.flipX,
              flipY: this.flipY
            };
            return t.key = e, t.value = s.composeMatrix(a), t.value;
          },
          /*
           * Calculate object dimensions from its properties
           * @private
           * @return {Object} .x width dimension
           * @return {Object} .y height dimension
           */
          _getNonTransformedDimensions: function() {
            var e = this.strokeWidth, t = this.width + e, n = this.height + e;
            return { x: t, y: n };
          },
          /*
           * Calculate object bounding box dimensions from its properties scale, skew.
           * @param {Number} skewX, a value to override current skewX
           * @param {Number} skewY, a value to override current skewY
           * @private
           * @return {Object} .x width dimension
           * @return {Object} .y height dimension
           */
          _getTransformedDimensions: function(e, t) {
            typeof e > "u" && (e = this.skewX), typeof t > "u" && (t = this.skewY);
            var n, a, r, l = e === 0 && t === 0;
            if (this.strokeUniform ? (a = this.width, r = this.height) : (n = this._getNonTransformedDimensions(), a = n.x, r = n.y), l)
              return this._finalizeDimensions(a * this.scaleX, r * this.scaleY);
            var u = s.sizeAfterTransform(a, r, {
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              skewX: e,
              skewY: t
            });
            return this._finalizeDimensions(u.x, u.y);
          },
          /*
           * Calculate object bounding box dimensions from its properties scale, skew.
           * @param Number width width of the bbox
           * @param Number height height of the bbox
           * @private
           * @return {Object} .x finalized width dimension
           * @return {Object} .y finalized height dimension
           */
          _finalizeDimensions: function(e, t) {
            return this.strokeUniform ? { x: e + this.strokeWidth, y: t + this.strokeWidth } : { x: e, y: t };
          },
          /*
           * Calculate object dimensions for controls box, including padding and canvas zoom.
           * and active selection
           * private
           */
          _calculateCurrentDimensions: function() {
            var e = this.getViewportTransform(), t = this._getTransformedDimensions(), n = i(t, e, !0);
            return n.scalarAdd(2 * this.padding);
          }
        }
      );
    })(), f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Moves an object to the bottom of the stack of drawn objects
         * @return {fabric.Object} thisArg
         * @chainable
         */
        sendToBack: function() {
          return this.group ? f.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
        },
        /**
         * Moves an object to the top of the stack of drawn objects
         * @return {fabric.Object} thisArg
         * @chainable
         */
        bringToFront: function() {
          return this.group ? f.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
        },
        /**
         * Moves an object down in stack of drawn objects
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Object} thisArg
         * @chainable
         */
        sendBackwards: function(c) {
          return this.group ? f.StaticCanvas.prototype.sendBackwards.call(this.group, this, c) : this.canvas && this.canvas.sendBackwards(this, c), this;
        },
        /**
         * Moves an object up in stack of drawn objects
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Object} thisArg
         * @chainable
         */
        bringForward: function(c) {
          return this.group ? f.StaticCanvas.prototype.bringForward.call(this.group, this, c) : this.canvas && this.canvas.bringForward(this, c), this;
        },
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {Number} index New position of object
         * @return {fabric.Object} thisArg
         * @chainable
         */
        moveTo: function(c) {
          return this.group && this.group.type !== "activeSelection" ? f.StaticCanvas.prototype.moveTo.call(this.group, this, c) : this.canvas && this.canvas.moveTo(this, c), this;
        }
      }
    ), (function() {
      function c(h, o) {
        if (o) {
          if (o.toLive)
            return h + ": url(#SVGID_" + o.id + "); ";
          var i = new f.Color(o), e = h + ": " + i.toRgb() + "; ", t = i.getAlpha();
          return t !== 1 && (e += h + "-opacity: " + t.toString() + "; "), e;
        } else return h + ": none; ";
      }
      var s = f.util.toFixed;
      f.util.object.extend(
        f.Object.prototype,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Returns styles-string for svg-export
           * @param {Boolean} skipShadow a boolean to skip shadow filter output
           * @return {String}
           */
          getSvgStyles: function(h) {
            var o = this.fillRule ? this.fillRule : "nonzero", i = this.strokeWidth ? this.strokeWidth : "0", e = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", t = this.strokeDashOffset ? this.strokeDashOffset : "0", n = this.strokeLineCap ? this.strokeLineCap : "butt", a = this.strokeLineJoin ? this.strokeLineJoin : "miter", r = this.strokeMiterLimit ? this.strokeMiterLimit : "4", l = typeof this.opacity < "u" ? this.opacity : "1", u = this.visible ? "" : " visibility: hidden;", d = h ? "" : this.getSvgFilter(), g = c("fill", this.fill), m = c("stroke", this.stroke);
            return [
              m,
              "stroke-width: ",
              i,
              "; ",
              "stroke-dasharray: ",
              e,
              "; ",
              "stroke-linecap: ",
              n,
              "; ",
              "stroke-dashoffset: ",
              t,
              "; ",
              "stroke-linejoin: ",
              a,
              "; ",
              "stroke-miterlimit: ",
              r,
              "; ",
              g,
              "fill-rule: ",
              o,
              "; ",
              "opacity: ",
              l,
              ";",
              d,
              u
            ].join("");
          },
          /**
           * Returns styles-string for svg-export
           * @param {Object} style the object from which to retrieve style properties
           * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
           * @return {String}
           */
          getSvgSpanStyles: function(h, o) {
            var i = "; ", t = h.fontFamily ? "font-family: " + (h.fontFamily.indexOf("'") === -1 && h.fontFamily.indexOf('"') === -1 ? "'" + h.fontFamily + "'" : h.fontFamily) + i : "", e = h.strokeWidth ? "stroke-width: " + h.strokeWidth + i : "", t = t, n = h.fontSize ? "font-size: " + h.fontSize + "px" + i : "", a = h.fontStyle ? "font-style: " + h.fontStyle + i : "", r = h.fontWeight ? "font-weight: " + h.fontWeight + i : "", l = h.fill ? c("fill", h.fill) : "", u = h.stroke ? c("stroke", h.stroke) : "", d = this.getSvgTextDecoration(h), g = h.deltaY ? "baseline-shift: " + -h.deltaY + "; " : "";
            return d && (d = "text-decoration: " + d + i), [
              u,
              e,
              t,
              n,
              a,
              r,
              d,
              l,
              g,
              o ? "white-space: pre; " : ""
            ].join("");
          },
          /**
           * Returns text-decoration property for svg-export
           * @param {Object} style the object from which to retrieve style properties
           * @return {String}
           */
          getSvgTextDecoration: function(h) {
            return ["overline", "underline", "line-through"].filter(function(o) {
              return h[o.replace("-", "")];
            }).join(" ");
          },
          /**
           * Returns filter for svg shadow
           * @return {String}
           */
          getSvgFilter: function() {
            return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
          },
          /**
           * Returns id attribute for svg output
           * @return {String}
           */
          getSvgCommons: function() {
            return [
              this.id ? 'id="' + this.id + '" ' : "",
              this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""
            ].join("");
          },
          /**
           * Returns transform-string for svg-export
           * @param {Boolean} use the full transform or the single object one.
           * @return {String}
           */
          getSvgTransform: function(h, o) {
            var i = h ? this.calcTransformMatrix() : this.calcOwnMatrix(), e = 'transform="' + f.util.matrixToSVG(i);
            return e + (o || "") + '" ';
          },
          _setSVGBg: function(h) {
            if (this.backgroundColor) {
              var o = f.Object.NUM_FRACTION_DIGITS;
              h.push(
                "		<rect ",
                this._getFillAttributes(this.backgroundColor),
                ' x="',
                s(-this.width / 2, o),
                '" y="',
                s(-this.height / 2, o),
                '" width="',
                s(this.width, o),
                '" height="',
                s(this.height, o),
                `"></rect>
`
              );
            }
          },
          /**
           * Returns svg representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toSVG: function(h) {
            return this._createBaseSVGMarkup(this._toSVG(h), { reviver: h });
          },
          /**
           * Returns svg clipPath representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toClipPathSVG: function(h) {
            return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(h), { reviver: h });
          },
          /**
           * @private
           */
          _createBaseClipPathSVGMarkup: function(h, o) {
            o = o || {};
            var i = o.reviver, e = o.additionalTransform || "", t = [
              this.getSvgTransform(!0, e),
              this.getSvgCommons()
            ].join(""), n = h.indexOf("COMMON_PARTS");
            return h[n] = t, i ? i(h.join("")) : h.join("");
          },
          /**
           * @private
           */
          _createBaseSVGMarkup: function(h, o) {
            o = o || {};
            var i = o.noStyle, e = o.reviver, t = i ? "" : 'style="' + this.getSvgStyles() + '" ', n = o.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", a = this.clipPath, r = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", l = a && a.absolutePositioned, u = this.stroke, d = this.fill, g = this.shadow, m, v = [], y, w = h.indexOf("COMMON_PARTS"), E = o.additionalTransform;
            return a && (a.clipPathId = "CLIPPATH_" + f.Object.__uid++, y = '<clipPath id="' + a.clipPathId + `" >
` + a.toClipPathSVG(e) + `</clipPath>
`), l && v.push(
              "<g ",
              n,
              this.getSvgCommons(),
              ` >
`
            ), v.push(
              "<g ",
              this.getSvgTransform(!1),
              l ? "" : n + this.getSvgCommons(),
              ` >
`
            ), m = [
              t,
              r,
              i ? "" : this.addPaintOrder(),
              " ",
              E ? 'transform="' + E + '" ' : ""
            ].join(""), h[w] = m, d && d.toLive && v.push(d.toSVG(this)), u && u.toLive && v.push(u.toSVG(this)), g && v.push(g.toSVG(this)), a && v.push(y), v.push(h.join("")), v.push(`</g>
`), l && v.push(`</g>
`), e ? e(v.join("")) : v.join("");
          },
          addPaintOrder: function() {
            return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
          }
        }
      );
    })(), (function() {
      var c = f.util.object.extend, s = "stateProperties";
      function h(i, e, t) {
        var n = {}, a = !0;
        t.forEach(function(r) {
          n[r] = i[r];
        }), c(i[e], n, a);
      }
      function o(i, e, t) {
        if (i === e)
          return !0;
        if (Array.isArray(i)) {
          if (!Array.isArray(e) || i.length !== e.length)
            return !1;
          for (var n = 0, a = i.length; n < a; n++)
            if (!o(i[n], e[n]))
              return !1;
          return !0;
        } else if (i && typeof i == "object") {
          var r = Object.keys(i), l;
          if (!e || typeof e != "object" || !t && r.length !== Object.keys(e).length)
            return !1;
          for (var n = 0, a = r.length; n < a; n++)
            if (l = r[n], !(l === "canvas" || l === "group") && !o(i[l], e[l]))
              return !1;
          return !0;
        }
      }
      f.util.object.extend(
        f.Object.prototype,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Returns true if object state (one of its state properties) was changed
           * @param {String} [propertySet] optional name for the set of property we want to save
           * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
           */
          hasStateChanged: function(i) {
            i = i || s;
            var e = "_" + i;
            return Object.keys(this[e]).length < this[i].length ? !0 : !o(this[e], this, !0);
          },
          /**
           * Saves state of an object
           * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
           * @return {fabric.Object} thisArg
           */
          saveState: function(i) {
            var e = i && i.propertySet || s, t = "_" + e;
            return this[t] ? (h(this, t, this[e]), i && i.stateProperties && h(this, t, i.stateProperties), this) : this.setupState(i);
          },
          /**
           * Setups state of an object
           * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
           * @return {fabric.Object} thisArg
           */
          setupState: function(i) {
            i = i || {};
            var e = i.propertySet || s;
            return i.propertySet = e, this["_" + e] = {}, this.saveState(i), this;
          }
        }
      );
    })(), (function() {
      var c = f.util.degreesToRadians;
      f.util.object.extend(
        f.Object.prototype,
        /** @lends fabric.Object.prototype */
        {
          /**
           * Determines which corner has been clicked
           * @private
           * @param {Object} pointer The pointer indicating the mouse position
           * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
           */
          _findTargetCorner: function(s, h) {
            if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
              return !1;
            var o = s.x, i = s.y, e, t, n = Object.keys(this.oCoords), a = n.length - 1, r;
            for (this.__corner = 0; a >= 0; a--)
              if (r = n[a], !!this.isControlVisible(r) && (t = this._getImageLines(h ? this.oCoords[r].touchCorner : this.oCoords[r].corner), e = this._findCrossPoints({ x: o, y: i }, t), e !== 0 && e % 2 === 1))
                return this.__corner = r, r;
            return !1;
          },
          /**
           * Calls a function for each control. The function gets called,
           * with the control, the object that is calling the iterator and the control's key
           * @param {Function} fn function to iterate over the controls over
           */
          forEachControl: function(s) {
            for (var h in this.controls)
              s(this.controls[h], h, this);
          },
          /**
           * Sets the coordinates of the draggable boxes in the corners of
           * the image used to scale/rotate it.
           * note: if we would switch to ROUND corner area, all of this would disappear.
           * everything would resolve to a single point and a pythagorean theorem for the distance
           * @private
           */
          _setCornerCoords: function() {
            var s = this.oCoords;
            for (var h in s) {
              var o = this.controls[h];
              s[h].corner = o.calcCornerCoords(
                this.angle,
                this.cornerSize,
                s[h].x,
                s[h].y,
                !1
              ), s[h].touchCorner = o.calcCornerCoords(
                this.angle,
                this.touchCornerSize,
                s[h].x,
                s[h].y,
                !0
              );
            }
          },
          /**
           * Draws a colored layer behind the object, inside its selection borders.
           * Requires public options: padding, selectionBackgroundColor
           * this function is called when the context is transformed
           * has checks to be skipped when the object is on a staticCanvas
           * @param {CanvasRenderingContext2D} ctx Context to draw on
           * @return {fabric.Object} thisArg
           * @chainable
           */
          drawSelectionBackground: function(s) {
            if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
              return this;
            s.save();
            var h = this.getCenterPoint(), o = this._calculateCurrentDimensions(), i = this.canvas.viewportTransform;
            return s.translate(h.x, h.y), s.scale(1 / i[0], 1 / i[3]), s.rotate(c(this.angle)), s.fillStyle = this.selectionBackgroundColor, s.fillRect(-o.x / 2, -o.y / 2, o.x, o.y), s.restore(), this;
          },
          /**
           * Draws borders of an object's bounding box.
           * Requires public properties: width, height
           * Requires public options: padding, borderColor
           * @param {CanvasRenderingContext2D} ctx Context to draw on
           * @param {Object} styleOverride object to override the object style
           * @return {fabric.Object} thisArg
           * @chainable
           */
          drawBorders: function(s, h) {
            h = h || {};
            var o = this._calculateCurrentDimensions(), i = this.borderScaleFactor, e = o.x + i, t = o.y + i, n = typeof h.hasControls < "u" ? h.hasControls : this.hasControls, a = !1;
            return s.save(), s.strokeStyle = h.borderColor || this.borderColor, this._setLineDash(s, h.borderDashArray || this.borderDashArray), s.strokeRect(
              -e / 2,
              -t / 2,
              e,
              t
            ), n && (s.beginPath(), this.forEachControl(function(r, l, u) {
              r.withConnection && r.getVisibility(u, l) && (a = !0, s.moveTo(r.x * e, r.y * t), s.lineTo(
                r.x * e + r.offsetX,
                r.y * t + r.offsetY
              ));
            }), a && s.stroke()), s.restore(), this;
          },
          /**
           * Draws borders of an object's bounding box when it is inside a group.
           * Requires public properties: width, height
           * Requires public options: padding, borderColor
           * @param {CanvasRenderingContext2D} ctx Context to draw on
           * @param {object} options object representing current object parameters
           * @param {Object} styleOverride object to override the object style
           * @return {fabric.Object} thisArg
           * @chainable
           */
          drawBordersInGroup: function(s, h, o) {
            o = o || {};
            var i = f.util.sizeAfterTransform(this.width, this.height, h), e = this.strokeWidth, t = this.strokeUniform, n = this.borderScaleFactor, a = i.x + e * (t ? this.canvas.getZoom() : h.scaleX) + n, r = i.y + e * (t ? this.canvas.getZoom() : h.scaleY) + n;
            return s.save(), this._setLineDash(s, o.borderDashArray || this.borderDashArray), s.strokeStyle = o.borderColor || this.borderColor, s.strokeRect(
              -a / 2,
              -r / 2,
              a,
              r
            ), s.restore(), this;
          },
          /**
           * Draws corners of an object's bounding box.
           * Requires public properties: width, height
           * Requires public options: cornerSize, padding
           * @param {CanvasRenderingContext2D} ctx Context to draw on
           * @param {Object} styleOverride object to override the object style
           * @return {fabric.Object} thisArg
           * @chainable
           */
          drawControls: function(s, h) {
            h = h || {}, s.save();
            var o = 1, i, e;
            return this.canvas && (o = this.canvas.getRetinaScaling()), s.setTransform(o, 0, 0, o, 0, 0), s.strokeStyle = s.fillStyle = h.cornerColor || this.cornerColor, this.transparentCorners || (s.strokeStyle = h.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(s, h.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (i = this.group.calcTransformMatrix()), this.forEachControl(function(t, n, a) {
              e = a.oCoords[n], t.getVisibility(a, n) && (i && (e = f.util.transformPoint(e, i)), t.render(s, e.x, e.y, h, a));
            }), s.restore(), this;
          },
          /**
           * Returns true if the specified control is visible, false otherwise.
           * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
           * @returns {Boolean} true if the specified control is visible, false otherwise
           */
          isControlVisible: function(s) {
            return this.controls[s] && this.controls[s].getVisibility(this, s);
          },
          /**
           * Sets the visibility of the specified control.
           * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
           * @param {Boolean} visible true to set the specified control visible, false otherwise
           * @return {fabric.Object} thisArg
           * @chainable
           */
          setControlVisible: function(s, h) {
            return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[s] = h, this;
          },
          /**
           * Sets the visibility state of object controls.
           * @param {Object} [options] Options object
           * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
           * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
           * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
           * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
           * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
           * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
           * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
           * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
           * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
           * @return {fabric.Object} thisArg
           * @chainable
           */
          setControlsVisibility: function(s) {
            s || (s = {});
            for (var h in s)
              this.setControlVisible(h, s[h]);
            return this;
          },
          /**
           * This callback function is called every time _discardActiveObject or _setActiveObject
           * try to to deselect this object. If the function returns true, the process is cancelled
           * @param {Object} [options] options sent from the upper functions
           * @param {Event} [options.e] event if the process is generated by an event
           */
          onDeselect: function() {
          },
          /**
           * This callback function is called every time _discardActiveObject or _setActiveObject
           * try to to select this object. If the function returns true, the process is cancelled
           * @param {Object} [options] options sent from the upper functions
           * @param {Event} [options.e] event if the process is generated by an event
           */
          onSelect: function() {
          }
        }
      );
    })(), f.util.object.extend(
      f.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Animation duration (in ms) for fx* methods
         * @type Number
         * @default
         */
        FX_DURATION: 500,
        /**
         * Centers object horizontally with animation.
         * @param {fabric.Object} object Object to center
         * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
         * @param {Function} [callbacks.onComplete] Invoked on completion
         * @param {Function} [callbacks.onChange] Invoked on every step of animation
         * @return {fabric.AnimationContext} context
         */
        fxCenterObjectH: function(c, s) {
          s = s || {};
          var h = function() {
          }, o = s.onComplete || h, i = s.onChange || h, e = this;
          return f.util.animate({
            target: this,
            startValue: c.left,
            endValue: this.getCenterPoint().x,
            duration: this.FX_DURATION,
            onChange: function(t) {
              c.set("left", t), e.requestRenderAll(), i();
            },
            onComplete: function() {
              c.setCoords(), o();
            }
          });
        },
        /**
         * Centers object vertically with animation.
         * @param {fabric.Object} object Object to center
         * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
         * @param {Function} [callbacks.onComplete] Invoked on completion
         * @param {Function} [callbacks.onChange] Invoked on every step of animation
         * @return {fabric.AnimationContext} context
         */
        fxCenterObjectV: function(c, s) {
          s = s || {};
          var h = function() {
          }, o = s.onComplete || h, i = s.onChange || h, e = this;
          return f.util.animate({
            target: this,
            startValue: c.top,
            endValue: this.getCenterPoint().y,
            duration: this.FX_DURATION,
            onChange: function(t) {
              c.set("top", t), e.requestRenderAll(), i();
            },
            onComplete: function() {
              c.setCoords(), o();
            }
          });
        },
        /**
         * Same as `fabric.Canvas#remove` but animated
         * @param {fabric.Object} object Object to remove
         * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
         * @param {Function} [callbacks.onComplete] Invoked on completion
         * @param {Function} [callbacks.onChange] Invoked on every step of animation
         * @return {fabric.AnimationContext} context
         */
        fxRemove: function(c, s) {
          s = s || {};
          var h = function() {
          }, o = s.onComplete || h, i = s.onChange || h, e = this;
          return f.util.animate({
            target: this,
            startValue: c.opacity,
            endValue: 0,
            duration: this.FX_DURATION,
            onChange: function(t) {
              c.set("opacity", t), e.requestRenderAll(), i();
            },
            onComplete: function() {
              e.remove(c), o();
            }
          });
        }
      }
    ), f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Animates object's properties
         * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
         * @param {Number|Object} value Value to animate property to (if string was given first) or options object
         * @return {fabric.Object} thisArg
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
         * @return {fabric.AnimationContext | fabric.AnimationContext[]} animation context (or an array if passed multiple properties)
         *
         * As object — multiple properties
         *
         * object.animate({ left: ..., top: ... });
         * object.animate({ left: ..., top: ... }, { duration: ... });
         *
         * As string — one property
         *
         * object.animate('left', ...);
         * object.animate('left', { duration: ... });
         *
         */
        animate: function() {
          if (arguments[0] && typeof arguments[0] == "object") {
            var c = [], s, h, o = [];
            for (s in arguments[0])
              c.push(s);
            for (var i = 0, e = c.length; i < e; i++)
              s = c[i], h = i !== e - 1, o.push(this._animate(s, arguments[0][s], arguments[1], h));
            return o;
          } else
            return this._animate.apply(this, arguments);
        },
        /**
         * @private
         * @param {String} property Property to animate
         * @param {String} to Value to animate to
         * @param {Object} [options] Options object
         * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
         */
        _animate: function(c, s, h, o) {
          var i = this, e;
          s = s.toString(), h ? h = f.util.object.clone(h) : h = {}, ~c.indexOf(".") && (e = c.split("."));
          var t = i.colorProperties.indexOf(c) > -1 || e && i.colorProperties.indexOf(e[1]) > -1, n = e ? this.get(e[0])[e[1]] : this.get(c);
          "from" in h || (h.from = n), t || (~s.indexOf("=") ? s = n + parseFloat(s.replace("=", "")) : s = parseFloat(s));
          var a = {
            target: this,
            startValue: h.from,
            endValue: s,
            byValue: h.by,
            easing: h.easing,
            duration: h.duration,
            abort: h.abort && function(r, l, u) {
              return h.abort.call(i, r, l, u);
            },
            onChange: function(r, l, u) {
              e ? i[e[0]][e[1]] = r : i.set(c, r), !o && h.onChange && h.onChange(r, l, u);
            },
            onComplete: function(r, l, u) {
              o || (i.setCoords(), h.onComplete && h.onComplete(r, l, u));
            }
          };
          return t ? f.util.animateColor(a.startValue, a.endValue, a.duration, a) : f.util.animate(a);
        }
      }
    ), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, i = { x1: 1, x2: 1, y1: 1, y2: 1 };
      if (s.Line) {
        s.warn("fabric.Line is already defined");
        return;
      }
      s.Line = s.util.createClass(
        s.Object,
        /** @lends fabric.Line.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "line",
          /**
           * x value or first line edge
           * @type Number
           * @default
           */
          x1: 0,
          /**
           * y value or first line edge
           * @type Number
           * @default
           */
          y1: 0,
          /**
           * x value or second line edge
           * @type Number
           * @default
           */
          x2: 0,
          /**
           * y value or second line edge
           * @type Number
           * @default
           */
          y2: 0,
          cacheProperties: s.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
          /**
           * Constructor
           * @param {Array} [points] Array of points
           * @param {Object} [options] Options object
           * @return {fabric.Line} thisArg
           */
          initialize: function(t, n) {
            t || (t = [0, 0, 0, 0]), this.callSuper("initialize", n), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(n);
          },
          /**
           * @private
           * @param {Object} [options] Options
           */
          _setWidthHeight: function(t) {
            t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY();
          },
          /**
           * @private
           * @param {String} key
           * @param {*} value
           */
          _set: function(t, n) {
            return this.callSuper("_set", t, n), typeof i[t] < "u" && this._setWidthHeight(), this;
          },
          /**
           * @private
           * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
           */
          _getLeftToOriginX: e(
            {
              // property names
              origin: "originX",
              axis1: "x1",
              axis2: "x2",
              dimension: "width"
            },
            {
              // possible values of origin
              nearest: "left",
              center: "center",
              farthest: "right"
            }
          ),
          /**
           * @private
           * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
           */
          _getTopToOriginY: e(
            {
              // property names
              origin: "originY",
              axis1: "y1",
              axis2: "y2",
              dimension: "height"
            },
            {
              // possible values of origin
              nearest: "top",
              center: "center",
              farthest: "bottom"
            }
          ),
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(t) {
            t.beginPath();
            var n = this.calcLinePoints();
            t.moveTo(n.x1, n.y1), t.lineTo(n.x2, n.y2), t.lineWidth = this.strokeWidth;
            var a = t.strokeStyle;
            t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = a;
          },
          /**
           * This function is an helper for svg import. it returns the center of the object in the svg
           * untransformed coordinates
           * @private
           * @return {Object} center point from element coordinates
           */
          _findCenterFromElement: function() {
            return {
              x: (this.x1 + this.x2) / 2,
              y: (this.y1 + this.y2) / 2
            };
          },
          /**
           * Returns object representation of an instance
           * @method toObject
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(t) {
            return h(this.callSuper("toObject", t), this.calcLinePoints());
          },
          /*
           * Calculate object dimensions from its properties
           * @private
           */
          _getNonTransformedDimensions: function() {
            var t = this.callSuper("_getNonTransformedDimensions");
            return this.strokeLineCap === "butt" && (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)), t;
          },
          /**
           * Recalculates line points given width and height
           * @private
           */
          calcLinePoints: function() {
            var t = this.x1 <= this.x2 ? -1 : 1, n = this.y1 <= this.y2 ? -1 : 1, a = t * this.width * 0.5, r = n * this.height * 0.5, l = t * this.width * -0.5, u = n * this.height * -0.5;
            return {
              x1: a,
              x2: l,
              y1: r,
              y2: u
            };
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var t = this.calcLinePoints();
            return [
              "<line ",
              "COMMON_PARTS",
              'x1="',
              t.x1,
              '" y1="',
              t.y1,
              '" x2="',
              t.x2,
              '" y2="',
              t.y2,
              `" />
`
            ];
          }
          /* _TO_SVG_END_ */
        }
      ), s.Line.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), s.Line.fromElement = function(t, n, a) {
        a = a || {};
        var r = s.parseAttributes(t, s.Line.ATTRIBUTE_NAMES), l = [
          r.x1 || 0,
          r.y1 || 0,
          r.x2 || 0,
          r.y2 || 0
        ];
        n(new s.Line(l, h(r, a)));
      }, s.Line.fromObject = function(t, n) {
        function a(l) {
          delete l.points, n && n(l);
        }
        var r = o(t, !0);
        r.points = [t.x1, t.y1, t.x2, t.y2], s.Object._fromObject("Line", r, a, "points");
      };
      function e(t, n) {
        var a = t.origin, r = t.axis1, l = t.axis2, u = t.dimension, d = n.nearest, g = n.center, m = n.farthest;
        return function() {
          switch (this.get(a)) {
            case d:
              return Math.min(this.get(r), this.get(l));
            case g:
              return Math.min(this.get(r), this.get(l)) + 0.5 * this.get(u);
            case m:
              return Math.max(this.get(r), this.get(l));
          }
        };
      }
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.degreesToRadians;
      if (s.Circle) {
        s.warn("fabric.Circle is already defined.");
        return;
      }
      s.Circle = s.util.createClass(
        s.Object,
        /** @lends fabric.Circle.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "circle",
          /**
           * Radius of this circle
           * @type Number
           * @default
           */
          radius: 0,
          /**
           * degrees of start of the circle.
           * probably will change to degrees in next major version
           * @type Number 0 - 359
           * @default 0
           */
          startAngle: 0,
          /**
           * End angle of the circle
           * probably will change to degrees in next major version
           * @type Number 1 - 360
           * @default 360
           */
          endAngle: 360,
          cacheProperties: s.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
          /**
           * @private
           * @param {String} key
           * @param {*} value
           * @return {fabric.Circle} thisArg
           */
          _set: function(i, e) {
            return this.callSuper("_set", i, e), i === "radius" && this.setRadius(e), this;
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(i) {
            return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(i));
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var i, e = 0, t = 0, n = (this.endAngle - this.startAngle) % 360;
            if (n === 0)
              i = [
                "<circle ",
                "COMMON_PARTS",
                'cx="' + e + '" cy="' + t + '" ',
                'r="',
                this.radius,
                `" />
`
              ];
            else {
              var a = h(this.startAngle), r = h(this.endAngle), l = this.radius, u = s.util.cos(a) * l, d = s.util.sin(a) * l, g = s.util.cos(r) * l, m = s.util.sin(r) * l, v = n > 180 ? "1" : "0";
              i = [
                '<path d="M ' + u + " " + d,
                " A " + l + " " + l,
                " 0 ",
                +v + " 1",
                " " + g + " " + m,
                '" ',
                "COMMON_PARTS",
                ` />
`
              ];
            }
            return i;
          },
          /* _TO_SVG_END_ */
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx context to render on
           */
          _render: function(i) {
            i.beginPath(), i.arc(
              0,
              0,
              this.radius,
              h(this.startAngle),
              h(this.endAngle),
              !1
            ), this._renderPaintInOrder(i);
          },
          /**
           * Returns horizontal radius of an object (according to how an object is scaled)
           * @return {Number}
           */
          getRadiusX: function() {
            return this.get("radius") * this.get("scaleX");
          },
          /**
           * Returns vertical radius of an object (according to how an object is scaled)
           * @return {Number}
           */
          getRadiusY: function() {
            return this.get("radius") * this.get("scaleY");
          },
          /**
           * Sets radius of an object (and updates width accordingly)
           * @return {fabric.Circle} thisArg
           */
          setRadius: function(i) {
            return this.radius = i, this.set("width", i * 2).set("height", i * 2);
          }
        }
      ), s.Circle.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), s.Circle.fromElement = function(i, e) {
        var t = s.parseAttributes(i, s.Circle.ATTRIBUTE_NAMES);
        if (!o(t))
          throw new Error("value of `r` attribute is required and can not be negative");
        t.left = (t.left || 0) - t.radius, t.top = (t.top || 0) - t.radius, e(new s.Circle(t));
      };
      function o(i) {
        return "radius" in i && i.radius >= 0;
      }
      s.Circle.fromObject = function(i, e) {
        s.Object._fromObject("Circle", i, e);
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {});
      if (s.Triangle) {
        s.warn("fabric.Triangle is already defined");
        return;
      }
      s.Triangle = s.util.createClass(
        s.Object,
        /** @lends fabric.Triangle.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "triangle",
          /**
           * Width is set to 100 to compensate the old initialize code that was setting it to 100
           * @type Number
           * @default
           */
          width: 100,
          /**
           * Height is set to 100 to compensate the old initialize code that was setting it to 100
           * @type Number
           * @default
           */
          height: 100,
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(h) {
            var o = this.width / 2, i = this.height / 2;
            h.beginPath(), h.moveTo(-o, i), h.lineTo(0, -i), h.lineTo(o, i), h.closePath(), this._renderPaintInOrder(h);
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var h = this.width / 2, o = this.height / 2, i = [
              -h + " " + o,
              "0 " + -o,
              h + " " + o
            ].join(",");
            return [
              "<polygon ",
              "COMMON_PARTS",
              'points="',
              i,
              '" />'
            ];
          }
          /* _TO_SVG_END_ */
        }
      ), s.Triangle.fromObject = function(h, o) {
        return s.Object._fromObject("Triangle", h, o);
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = Math.PI * 2;
      if (s.Ellipse) {
        s.warn("fabric.Ellipse is already defined.");
        return;
      }
      s.Ellipse = s.util.createClass(
        s.Object,
        /** @lends fabric.Ellipse.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "ellipse",
          /**
           * Horizontal radius
           * @type Number
           * @default
           */
          rx: 0,
          /**
           * Vertical radius
           * @type Number
           * @default
           */
          ry: 0,
          cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"),
          /**
           * Constructor
           * @param {Object} [options] Options object
           * @return {fabric.Ellipse} thisArg
           */
          initialize: function(o) {
            this.callSuper("initialize", o), this.set("rx", o && o.rx || 0), this.set("ry", o && o.ry || 0);
          },
          /**
           * @private
           * @param {String} key
           * @param {*} value
           * @return {fabric.Ellipse} thisArg
           */
          _set: function(o, i) {
            switch (this.callSuper("_set", o, i), o) {
              case "rx":
                this.rx = i, this.set("width", i * 2);
                break;
              case "ry":
                this.ry = i, this.set("height", i * 2);
                break;
            }
            return this;
          },
          /**
           * Returns horizontal radius of an object (according to how an object is scaled)
           * @return {Number}
           */
          getRx: function() {
            return this.get("rx") * this.get("scaleX");
          },
          /**
           * Returns Vertical radius of an object (according to how an object is scaled)
           * @return {Number}
           */
          getRy: function() {
            return this.get("ry") * this.get("scaleY");
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(o) {
            return this.callSuper("toObject", ["rx", "ry"].concat(o));
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            return [
              "<ellipse ",
              "COMMON_PARTS",
              'cx="0" cy="0" ',
              'rx="',
              this.rx,
              '" ry="',
              this.ry,
              `" />
`
            ];
          },
          /* _TO_SVG_END_ */
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx context to render on
           */
          _render: function(o) {
            o.beginPath(), o.save(), o.transform(1, 0, 0, this.ry / this.rx, 0, 0), o.arc(
              0,
              0,
              this.rx,
              0,
              h,
              !1
            ), o.restore(), this._renderPaintInOrder(o);
          }
        }
      ), s.Ellipse.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), s.Ellipse.fromElement = function(o, i) {
        var e = s.parseAttributes(o, s.Ellipse.ATTRIBUTE_NAMES);
        e.left = (e.left || 0) - e.rx, e.top = (e.top || 0) - e.ry, i(new s.Ellipse(e));
      }, s.Ellipse.fromObject = function(o, i) {
        s.Object._fromObject("Ellipse", o, i);
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend;
      if (s.Rect) {
        s.warn("fabric.Rect is already defined");
        return;
      }
      s.Rect = s.util.createClass(
        s.Object,
        /** @lends fabric.Rect.prototype */
        {
          /**
           * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
           * as well as for history (undo/redo) purposes
           * @type Array
           */
          stateProperties: s.Object.prototype.stateProperties.concat("rx", "ry"),
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "rect",
          /**
           * Horizontal border radius
           * @type Number
           * @default
           */
          rx: 0,
          /**
           * Vertical border radius
           * @type Number
           * @default
           */
          ry: 0,
          cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"),
          /**
           * Constructor
           * @param {Object} [options] Options object
           * @return {Object} thisArg
           */
          initialize: function(o) {
            this.callSuper("initialize", o), this._initRxRy();
          },
          /**
           * Initializes rx/ry attributes
           * @private
           */
          _initRxRy: function() {
            this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(o) {
            var i = this.rx ? Math.min(this.rx, this.width / 2) : 0, e = this.ry ? Math.min(this.ry, this.height / 2) : 0, t = this.width, n = this.height, a = -this.width / 2, r = -this.height / 2, l = i !== 0 || e !== 0, u = 1 - 0.5522847498;
            o.beginPath(), o.moveTo(a + i, r), o.lineTo(a + t - i, r), l && o.bezierCurveTo(a + t - u * i, r, a + t, r + u * e, a + t, r + e), o.lineTo(a + t, r + n - e), l && o.bezierCurveTo(a + t, r + n - u * e, a + t - u * i, r + n, a + t - i, r + n), o.lineTo(a + i, r + n), l && o.bezierCurveTo(a + u * i, r + n, a, r + n - u * e, a, r + n - e), o.lineTo(a, r + e), l && o.bezierCurveTo(a, r + u * e, a + u * i, r, a + i, r), o.closePath(), this._renderPaintInOrder(o);
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(o) {
            return this.callSuper("toObject", ["rx", "ry"].concat(o));
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var o = -this.width / 2, i = -this.height / 2;
            return [
              "<rect ",
              "COMMON_PARTS",
              'x="',
              o,
              '" y="',
              i,
              '" rx="',
              this.rx,
              '" ry="',
              this.ry,
              '" width="',
              this.width,
              '" height="',
              this.height,
              `" />
`
            ];
          }
          /* _TO_SVG_END_ */
        }
      ), s.Rect.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), s.Rect.fromElement = function(o, i, e) {
        if (!o)
          return i(null);
        e = e || {};
        var t = s.parseAttributes(o, s.Rect.ATTRIBUTE_NAMES);
        t.left = t.left || 0, t.top = t.top || 0, t.height = t.height || 0, t.width = t.width || 0;
        var n = new s.Rect(h(e ? s.util.object.clone(e) : {}, t));
        n.visible = n.visible && n.width > 0 && n.height > 0, i(n);
      }, s.Rect.fromObject = function(o, i) {
        return s.Object._fromObject("Rect", o, i);
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.array.min, i = s.util.array.max, e = s.util.toFixed, t = s.util.projectStrokeOnPoints;
      if (s.Polyline) {
        s.warn("fabric.Polyline is already defined");
        return;
      }
      s.Polyline = s.util.createClass(
        s.Object,
        /** @lends fabric.Polyline.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "polyline",
          /**
           * Points array
           * @type Array
           * @default
           */
          points: null,
          /**
           * WARNING: Feature in progress
           * Calculate the exact bounding box taking in account strokeWidth on acute angles
           * this will be turned to true by default on fabric 6.0
           * maybe will be left in as an optimization since calculations may be slow
           * @deprecated
           * @type Boolean
           * @default false
           */
          exactBoundingBox: !1,
          cacheProperties: s.Object.prototype.cacheProperties.concat("points"),
          /**
           * Constructor
           * @param {Array} points Array of points (where each point is an object with x and y)
           * @param {Object} [options] Options object
           * @return {fabric.Polyline} thisArg
           * @example
           * var poly = new fabric.Polyline([
           *     { x: 10, y: 10 },
           *     { x: 50, y: 30 },
           *     { x: 40, y: 70 },
           *     { x: 60, y: 50 },
           *     { x: 100, y: 150 },
           *     { x: 40, y: 100 }
           *   ], {
           *   stroke: 'red',
           *   left: 100,
           *   top: 100
           * });
           */
          initialize: function(n, a) {
            a = a || {}, this.points = n || [], this.callSuper("initialize", a), this._setPositionDimensions(a);
          },
          /**
           * @private
           */
          _projectStrokeOnPoints: function() {
            return t(this.points, this, !0);
          },
          _setPositionDimensions: function(n) {
            var a = this._calcDimensions(n), r, l = this.exactBoundingBox ? this.strokeWidth : 0;
            this.width = a.width - l, this.height = a.height - l, n.fromSVG || (r = this.translateToGivenOrigin(
              {
                // this looks bad, but is one way to keep it optional for now.
                x: a.left - this.strokeWidth / 2 + l / 2,
                y: a.top - this.strokeWidth / 2 + l / 2
              },
              "left",
              "top",
              this.originX,
              this.originY
            )), typeof n.left > "u" && (this.left = n.fromSVG ? a.left : r.x), typeof n.top > "u" && (this.top = n.fromSVG ? a.top : r.y), this.pathOffset = {
              x: a.left + this.width / 2 + l / 2,
              y: a.top + this.height / 2 + l / 2
            };
          },
          /**
           * Calculate the polygon min and max point from points array,
           * returning an object with left, top, width, height to measure the
           * polygon size
           * @return {Object} object.left X coordinate of the polygon leftmost point
           * @return {Object} object.top Y coordinate of the polygon topmost point
           * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
           * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
           * @private
           */
          _calcDimensions: function() {
            var n = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, a = o(n, "x") || 0, r = o(n, "y") || 0, l = i(n, "x") || 0, u = i(n, "y") || 0, d = l - a, g = u - r;
            return {
              left: a,
              top: r,
              width: d,
              height: g
            };
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of an instance
           */
          toObject: function(n) {
            return h(this.callSuper("toObject", n), {
              points: this.points.concat()
            });
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            for (var n = [], a = this.pathOffset.x, r = this.pathOffset.y, l = s.Object.NUM_FRACTION_DIGITS, u = 0, d = this.points.length; u < d; u++)
              n.push(
                e(this.points[u].x - a, l),
                ",",
                e(this.points[u].y - r, l),
                " "
              );
            return [
              "<" + this.type + " ",
              "COMMON_PARTS",
              'points="',
              n.join(""),
              `" />
`
            ];
          },
          /* _TO_SVG_END_ */
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          commonRender: function(n) {
            var a, r = this.points.length, l = this.pathOffset.x, u = this.pathOffset.y;
            if (!r || isNaN(this.points[r - 1].y))
              return !1;
            n.beginPath(), n.moveTo(this.points[0].x - l, this.points[0].y - u);
            for (var d = 0; d < r; d++)
              a = this.points[d], n.lineTo(a.x - l, a.y - u);
            return !0;
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(n) {
            this.commonRender(n) && this._renderPaintInOrder(n);
          },
          /**
           * Returns complexity of an instance
           * @return {Number} complexity of this instance
           */
          complexity: function() {
            return this.get("points").length;
          }
        }
      ), s.Polyline.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polyline.fromElementGenerator = function(n) {
        return function(a, r, l) {
          if (!a)
            return r(null);
          l || (l = {});
          var u = s.parsePointsAttribute(a.getAttribute("points")), d = s.parseAttributes(a, s[n].ATTRIBUTE_NAMES);
          d.fromSVG = !0, r(new s[n](u, h(d, l)));
        };
      }, s.Polyline.fromElement = s.Polyline.fromElementGenerator("Polyline"), s.Polyline.fromObject = function(n, a) {
        return s.Object._fromObject("Polyline", n, a, "points");
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.projectStrokeOnPoints;
      if (s.Polygon) {
        s.warn("fabric.Polygon is already defined");
        return;
      }
      s.Polygon = s.util.createClass(
        s.Polyline,
        /** @lends fabric.Polygon.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "polygon",
          /**
           * @private
           */
          _projectStrokeOnPoints: function() {
            return h(this.points, this);
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(o) {
            this.commonRender(o) && (o.closePath(), this._renderPaintInOrder(o));
          }
        }
      ), s.Polygon.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polygon.fromElement = s.Polyline.fromElementGenerator("Polygon"), s.Polygon.fromObject = function(o, i) {
        s.Object._fromObject("Polygon", o, i, "points");
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.array.min, o = s.util.array.max, i = s.util.object.extend, e = s.util.object.clone, t = s.util.toFixed;
      if (s.Path) {
        s.warn("fabric.Path is already defined");
        return;
      }
      s.Path = s.util.createClass(
        s.Object,
        /** @lends fabric.Path.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "path",
          /**
           * Array of path points
           * @type Array
           * @default
           */
          path: null,
          cacheProperties: s.Object.prototype.cacheProperties.concat("path", "fillRule"),
          stateProperties: s.Object.prototype.stateProperties.concat("path"),
          /**
           * Constructor
           * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
           * @param {Object} [options] Options object
           * @return {fabric.Path} thisArg
           */
          initialize: function(n, a) {
            a = e(a || {}), delete a.path, this.callSuper("initialize", a), this._setPath(n || [], a);
          },
          /**
          * @private
          * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
          * @param {Object} [options] Options object
          */
          _setPath: function(n, a) {
            this.path = s.util.makePathSimpler(
              Array.isArray(n) ? n : s.util.parsePath(n)
            ), s.Polyline.prototype._setPositionDimensions.call(this, a || {});
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx context to render path on
           */
          _renderPathCommands: function(n) {
            var a, r = 0, l = 0, u = 0, d = 0, g = 0, m = 0, v = -this.pathOffset.x, y = -this.pathOffset.y;
            n.beginPath();
            for (var w = 0, E = this.path.length; w < E; ++w)
              switch (a = this.path[w], a[0]) {
                // first letter
                case "L":
                  u = a[1], d = a[2], n.lineTo(u + v, d + y);
                  break;
                case "M":
                  u = a[1], d = a[2], r = u, l = d, n.moveTo(u + v, d + y);
                  break;
                case "C":
                  u = a[5], d = a[6], g = a[3], m = a[4], n.bezierCurveTo(
                    a[1] + v,
                    a[2] + y,
                    g + v,
                    m + y,
                    u + v,
                    d + y
                  );
                  break;
                case "Q":
                  n.quadraticCurveTo(
                    a[1] + v,
                    a[2] + y,
                    a[3] + v,
                    a[4] + y
                  ), u = a[3], d = a[4], g = a[1], m = a[2];
                  break;
                case "z":
                case "Z":
                  u = r, d = l, n.closePath();
                  break;
              }
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx context to render path on
           */
          _render: function(n) {
            this._renderPathCommands(n), this._renderPaintInOrder(n);
          },
          /**
           * Returns string representation of an instance
           * @return {String} string representation of an instance
           */
          toString: function() {
            return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(n) {
            return i(this.callSuper("toObject", n), {
              path: this.path.map(function(a) {
                return a.slice();
              })
            });
          },
          /**
           * Returns dataless object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toDatalessObject: function(n) {
            var a = this.toObject(["sourcePath"].concat(n));
            return a.sourcePath && delete a.path, a;
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var n = s.util.joinPath(this.path);
            return [
              "<path ",
              "COMMON_PARTS",
              'd="',
              n,
              '" stroke-linecap="round" ',
              `/>
`
            ];
          },
          _getOffsetTransform: function() {
            var n = s.Object.NUM_FRACTION_DIGITS;
            return " translate(" + t(-this.pathOffset.x, n) + ", " + t(-this.pathOffset.y, n) + ")";
          },
          /**
           * Returns svg clipPath representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toClipPathSVG: function(n) {
            var a = this._getOffsetTransform();
            return "	" + this._createBaseClipPathSVGMarkup(
              this._toSVG(),
              { reviver: n, additionalTransform: a }
            );
          },
          /**
           * Returns svg representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toSVG: function(n) {
            var a = this._getOffsetTransform();
            return this._createBaseSVGMarkup(this._toSVG(), { reviver: n, additionalTransform: a });
          },
          /* _TO_SVG_END_ */
          /**
           * Returns number representation of an instance complexity
           * @return {Number} complexity of this instance
           */
          complexity: function() {
            return this.path.length;
          },
          /**
           * @private
           */
          _calcDimensions: function() {
            for (var n = [], a = [], r, l = 0, u = 0, d = 0, g = 0, m, v = 0, y = this.path.length; v < y; ++v) {
              switch (r = this.path[v], r[0]) {
                // first letter
                case "L":
                  d = r[1], g = r[2], m = [];
                  break;
                case "M":
                  d = r[1], g = r[2], l = d, u = g, m = [];
                  break;
                case "C":
                  m = s.util.getBoundsOfCurve(
                    d,
                    g,
                    r[1],
                    r[2],
                    r[3],
                    r[4],
                    r[5],
                    r[6]
                  ), d = r[5], g = r[6];
                  break;
                case "Q":
                  m = s.util.getBoundsOfCurve(
                    d,
                    g,
                    r[1],
                    r[2],
                    r[1],
                    r[2],
                    r[3],
                    r[4]
                  ), d = r[3], g = r[4];
                  break;
                case "z":
                case "Z":
                  d = l, g = u;
                  break;
              }
              m.forEach(function(H) {
                n.push(H.x), a.push(H.y);
              }), n.push(d), a.push(g);
            }
            var w = h(n) || 0, E = h(a) || 0, L = o(n) || 0, W = o(a) || 0, G = L - w, V = W - E;
            return {
              left: w,
              top: E,
              width: G,
              height: V
            };
          }
        }
      ), s.Path.fromObject = function(n, a) {
        if (typeof n.sourcePath == "string") {
          var r = n.sourcePath;
          s.loadSVGFromURL(r, function(l) {
            var u = l[0];
            u.setOptions(n), n.clipPath ? s.util.enlivenObjects([n.clipPath], function(d) {
              u.clipPath = d[0], a && a(u);
            }) : a && a(u);
          });
        } else
          s.Object._fromObject("Path", n, a, "path");
      }, s.Path.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(["d"]), s.Path.fromElement = function(n, a, r) {
        var l = s.parseAttributes(n, s.Path.ATTRIBUTE_NAMES);
        l.fromSVG = !0, a(new s.Path(l.d, i(l, r)));
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.array.min, o = s.util.array.max;
      s.Group || (s.Group = s.util.createClass(
        s.Object,
        s.Collection,
        /** @lends fabric.Group.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "group",
          /**
           * Width of stroke
           * @type Number
           * @default
           */
          strokeWidth: 0,
          /**
           * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
           * @type Boolean
           * @default
           */
          subTargetCheck: !1,
          /**
           * Groups are container, do not render anything on theyr own, ence no cache properties
           * @type Array
           * @default
           */
          cacheProperties: [],
          /**
           * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
           * available setting this boolean to true.
           * @type Boolean
           * @since 2.0.0
           * @default
           */
          useSetOnGroup: !1,
          /**
           * Constructor
           * @param {Object} objects Group objects
           * @param {Object} [options] Options object
           * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
           * @return {Object} thisArg
           */
          initialize: function(i, e, t) {
            e = e || {}, this._objects = [], t && this.callSuper("initialize", e), this._objects = i || [];
            for (var n = this._objects.length; n--; )
              this._objects[n].group = this;
            if (t)
              this._updateObjectsACoords();
            else {
              var a = e && e.centerPoint;
              e.originX !== void 0 && (this.originX = e.originX), e.originY !== void 0 && (this.originY = e.originY), a || this._calcBounds(), this._updateObjectsCoords(a), delete e.centerPoint, this.callSuper("initialize", e);
            }
            this.setCoords();
          },
          /**
           * @private
           */
          _updateObjectsACoords: function() {
            for (var i = !0, e = this._objects.length; e--; )
              this._objects[e].setCoords(i);
          },
          /**
           * @private
           * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
           */
          _updateObjectsCoords: function(e) {
            for (var e = e || this.getCenterPoint(), t = this._objects.length; t--; )
              this._updateObjectCoords(this._objects[t], e);
          },
          /**
           * @private
           * @param {Object} object
           * @param {fabric.Point} center, current center of group.
           */
          _updateObjectCoords: function(i, e) {
            var t = i.left, n = i.top, a = !0;
            i.set({
              left: t - e.x,
              top: n - e.y
            }), i.group = this, i.setCoords(a);
          },
          /**
           * Returns string represenation of a group
           * @return {String}
           */
          toString: function() {
            return "#<fabric.Group: (" + this.complexity() + ")>";
          },
          /**
           * Adds an object to a group; Then recalculates group's dimension, position.
           * @param {Object} object
           * @return {fabric.Group} thisArg
           * @chainable
           */
          addWithUpdate: function(i) {
            var e = !!this.group;
            return this._restoreObjectsState(), s.util.resetObjectTransform(this), i && (e && s.util.removeTransformFromObject(i, this.group.calcTransformMatrix()), this._objects.push(i), i.group = this, i._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, e ? this.group.addWithUpdate() : this.setCoords(), this;
          },
          /**
           * Removes an object from a group; Then recalculates group's dimension, position.
           * @param {Object} object
           * @return {fabric.Group} thisArg
           * @chainable
           */
          removeWithUpdate: function(i) {
            return this._restoreObjectsState(), s.util.resetObjectTransform(this), this.remove(i), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
          },
          /**
           * @private
           */
          _onObjectAdded: function(i) {
            this.dirty = !0, i.group = this, i._set("canvas", this.canvas);
          },
          /**
           * @private
           */
          _onObjectRemoved: function(i) {
            this.dirty = !0, delete i.group;
          },
          /**
           * @private
           */
          _set: function(i, e) {
            var t = this._objects.length;
            if (this.useSetOnGroup)
              for (; t--; )
                this._objects[t].setOnGroup(i, e);
            if (i === "canvas")
              for (; t--; )
                this._objects[t]._set(i, e);
            s.Object.prototype._set.call(this, i, e);
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toObject: function(i) {
            var e = this.includeDefaultValues, t = this._objects.filter(function(a) {
              return !a.excludeFromExport;
            }).map(function(a) {
              var r = a.includeDefaultValues;
              a.includeDefaultValues = e;
              var l = a.toObject(i);
              return a.includeDefaultValues = r, l;
            }), n = s.Object.prototype.toObject.call(this, i);
            return n.objects = t, n;
          },
          /**
           * Returns object representation of an instance, in dataless mode.
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} object representation of an instance
           */
          toDatalessObject: function(i) {
            var e, t = this.sourcePath;
            if (t)
              e = t;
            else {
              var n = this.includeDefaultValues;
              e = this._objects.map(function(r) {
                var l = r.includeDefaultValues;
                r.includeDefaultValues = n;
                var u = r.toDatalessObject(i);
                return r.includeDefaultValues = l, u;
              });
            }
            var a = s.Object.prototype.toDatalessObject.call(this, i);
            return a.objects = e, a;
          },
          /**
           * Renders instance on a given context
           * @param {CanvasRenderingContext2D} ctx context to render instance on
           */
          render: function(i) {
            this._transformDone = !0, this.callSuper("render", i), this._transformDone = !1;
          },
          /**
           * Decide if the object should cache or not. Create its own cache level
           * needsItsOwnCache should be used when the object drawing method requires
           * a cache step. None of the fabric classes requires it.
           * Generally you do not cache objects in groups because the group is already cached.
           * @return {Boolean}
           */
          shouldCache: function() {
            var i = s.Object.prototype.shouldCache.call(this);
            if (i) {
              for (var e = 0, t = this._objects.length; e < t; e++)
                if (this._objects[e].willDrawShadow())
                  return this.ownCaching = !1, !1;
            }
            return i;
          },
          /**
           * Check if this object or a child object will cast a shadow
           * @return {Boolean}
           */
          willDrawShadow: function() {
            if (s.Object.prototype.willDrawShadow.call(this))
              return !0;
            for (var i = 0, e = this._objects.length; i < e; i++)
              if (this._objects[i].willDrawShadow())
                return !0;
            return !1;
          },
          /**
           * Check if this group or its parent group are caching, recursively up
           * @return {Boolean}
           */
          isOnACache: function() {
            return this.ownCaching || this.group && this.group.isOnACache();
          },
          /**
           * Execute the drawing operation for an object on a specified context
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          drawObject: function(i) {
            for (var e = 0, t = this._objects.length; e < t; e++)
              this._objects[e].render(i);
            this._drawClipPath(i, this.clipPath);
          },
          /**
           * Check if cache is dirty
           */
          isCacheDirty: function(i) {
            if (this.callSuper("isCacheDirty", i))
              return !0;
            if (!this.statefullCache)
              return !1;
            for (var e = 0, t = this._objects.length; e < t; e++)
              if (this._objects[e].isCacheDirty(!0)) {
                if (this._cacheCanvas) {
                  var n = this.cacheWidth / this.zoomX, a = this.cacheHeight / this.zoomY;
                  this._cacheContext.clearRect(-n / 2, -a / 2, n, a);
                }
                return !0;
              }
            return !1;
          },
          /**
           * Restores original state of each of group objects (original state is that which was before group was created).
           * if the nested boolean is true, the original state will be restored just for the
           * first group and not for all the group chain
           * @private
           * @param {Boolean} nested tell the function to restore object state up to the parent group and not more
           * @return {fabric.Group} thisArg
           * @chainable
           */
          _restoreObjectsState: function() {
            var i = this.calcOwnMatrix();
            return this._objects.forEach(function(e) {
              s.util.addTransformToObject(e, i), delete e.group, e.setCoords();
            }), this;
          },
          /**
           * Destroys a group (restoring state of its objects)
           * @return {fabric.Group} thisArg
           * @chainable
           */
          destroy: function() {
            return this._objects.forEach(function(i) {
              i.set("dirty", !0);
            }), this._restoreObjectsState();
          },
          dispose: function() {
            this.callSuper("dispose"), this.forEachObject(function(i) {
              i.dispose && i.dispose();
            }), this._objects = [];
          },
          /**
           * make a group an active selection, remove the group from canvas
           * the group has to be on canvas for this to work.
           * @return {fabric.ActiveSelection} thisArg
           * @chainable
           */
          toActiveSelection: function() {
            if (this.canvas) {
              var i = this._objects, e = this.canvas;
              this._objects = [];
              var t = this.toObject();
              delete t.objects;
              var n = new s.ActiveSelection([]);
              return n.set(t), n.type = "activeSelection", e.remove(this), i.forEach(function(a) {
                a.group = n, a.dirty = !0, e.add(a);
              }), n.canvas = e, n._objects = i, e._activeObject = n, n.setCoords(), n;
            }
          },
          /**
           * Destroys a group (restoring state of its objects)
           * @return {fabric.Group} thisArg
           * @chainable
           */
          ungroupOnCanvas: function() {
            return this._restoreObjectsState();
          },
          /**
           * Sets coordinates of all objects inside group
           * @return {fabric.Group} thisArg
           * @chainable
           */
          setObjectsCoords: function() {
            var i = !0;
            return this.forEachObject(function(e) {
              e.setCoords(i);
            }), this;
          },
          /**
           * @private
           */
          _calcBounds: function(i) {
            for (var e = [], t = [], n, a, r, l = ["tr", "br", "bl", "tl"], u = 0, d = this._objects.length, g, m = l.length; u < d; ++u) {
              for (n = this._objects[u], r = n.calcACoords(), g = 0; g < m; g++)
                a = l[g], e.push(r[a].x), t.push(r[a].y);
              n.aCoords = r;
            }
            this._getBounds(e, t, i);
          },
          /**
           * @private
           */
          _getBounds: function(i, e, t) {
            var n = new s.Point(h(i), h(e)), a = new s.Point(o(i), o(e)), r = n.y || 0, l = n.x || 0, u = a.x - n.x || 0, d = a.y - n.y || 0;
            this.width = u, this.height = d, t || this.setPositionByOrigin({ x: l, y: r }, "left", "top");
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          _toSVG: function(i) {
            for (var e = ["<g ", "COMMON_PARTS", ` >
`], t = 0, n = this._objects.length; t < n; t++)
              e.push("		", this._objects[t].toSVG(i));
            return e.push(`</g>
`), e;
          },
          /**
           * Returns styles-string for svg-export, specific version for group
           * @return {String}
           */
          getSvgStyles: function() {
            var i = typeof this.opacity < "u" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", e = this.visible ? "" : " visibility: hidden;";
            return [
              i,
              this.getSvgFilter(),
              e
            ].join("");
          },
          /**
           * Returns svg clipPath representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toClipPathSVG: function(i) {
            for (var e = [], t = 0, n = this._objects.length; t < n; t++)
              e.push("	", this._objects[t].toClipPathSVG(i));
            return this._createBaseClipPathSVGMarkup(e, { reviver: i });
          }
          /* _TO_SVG_END_ */
        }
      ), s.Group.fromObject = function(i, e) {
        var t = i.objects, n = s.util.object.clone(i, !0);
        if (delete n.objects, typeof t == "string") {
          s.loadSVGFromURL(t, function(a) {
            var r = s.util.groupSVGElements(a, i, t), l = n.clipPath;
            delete n.clipPath, r.set(n), l ? s.util.enlivenObjects([l], function(u) {
              r.clipPath = u[0], e && e(r);
            }) : e && e(r);
          });
          return;
        }
        s.util.enlivenObjects(t, function(a) {
          s.util.enlivenObjectEnlivables(i, n, function() {
            e && e(new s.Group(a, n, !0));
          });
        });
      });
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {});
      s.ActiveSelection || (s.ActiveSelection = s.util.createClass(
        s.Group,
        /** @lends fabric.ActiveSelection.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "activeSelection",
          /**
           * Constructor
           * @param {Object} objects ActiveSelection objects
           * @param {Object} [options] Options object
           * @return {Object} thisArg
           */
          initialize: function(h, o) {
            o = o || {}, this._objects = h || [];
            for (var i = this._objects.length; i--; )
              this._objects[i].group = this;
            o.originX && (this.originX = o.originX), o.originY && (this.originY = o.originY), this._calcBounds(), this._updateObjectsCoords(), s.Object.prototype.initialize.call(this, o), this.setCoords();
          },
          /**
           * Change te activeSelection to a normal group,
           * High level function that automatically adds it to canvas as
           * active object. no events fired.
           * @since 2.0.0
           * @return {fabric.Group}
           */
          toGroup: function() {
            var h = this._objects.concat();
            this._objects = [];
            var o = s.Object.prototype.toObject.call(this), i = new s.Group([]);
            if (delete o.type, i.set(o), h.forEach(function(t) {
              t.canvas.remove(t), t.group = i;
            }), i._objects = h, !this.canvas)
              return i;
            var e = this.canvas;
            return e.add(i), e._activeObject = i, i.setCoords(), i;
          },
          /**
           * If returns true, deselection is cancelled.
           * @since 2.0.0
           * @return {Boolean} [cancel]
           */
          onDeselect: function() {
            return this.destroy(), !1;
          },
          /**
           * Returns string representation of a group
           * @return {String}
           */
          toString: function() {
            return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
          },
          /**
           * Decide if the object should cache or not. Create its own cache level
           * objectCaching is a global flag, wins over everything
           * needsItsOwnCache should be used when the object drawing method requires
           * a cache step. None of the fabric classes requires it.
           * Generally you do not cache objects in groups because the group outside is cached.
           * @return {Boolean}
           */
          shouldCache: function() {
            return !1;
          },
          /**
           * Check if this group or its parent group are caching, recursively up
           * @return {Boolean}
           */
          isOnACache: function() {
            return !1;
          },
          /**
           * Renders controls and borders for the object
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Object} [styleOverride] properties to override the object style
           * @param {Object} [childrenOverride] properties to override the children overrides
           */
          _renderControls: function(h, o, i) {
            h.save(), h.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, i = i || {}, typeof i.hasControls > "u" && (i.hasControls = !1), i.forActiveSelection = !0;
            for (var e = 0, t = this._objects.length; e < t; e++)
              this._objects[e]._renderControls(h, i);
            this.callSuper("_renderControls", h, o), h.restore();
          }
        }
      ), s.ActiveSelection.fromObject = function(h, o) {
        s.util.enlivenObjects(h.objects, function(i) {
          delete h.objects, o && o(new s.ActiveSelection(i, h, !0));
        });
      });
    })(q), (function(c) {
      var s = f.util.object.extend;
      if (c.fabric || (c.fabric = {}), c.fabric.Image) {
        f.warn("fabric.Image is already defined.");
        return;
      }
      f.Image = f.util.createClass(
        f.Object,
        /** @lends fabric.Image.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "image",
          /**
           * Width of a stroke.
           * For image quality a stroke multiple of 2 gives better results.
           * @type Number
           * @default
           */
          strokeWidth: 0,
          /**
           * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
           * This allows for relative urls as image src.
           * @since 2.7.0
           * @type Boolean
           * @default
           */
          srcFromAttribute: !1,
          /**
           * private
           * contains last value of scaleX to detect
           * if the Image got resized after the last Render
           * @type Number
           */
          _lastScaleX: 1,
          /**
           * private
           * contains last value of scaleY to detect
           * if the Image got resized after the last Render
           * @type Number
           */
          _lastScaleY: 1,
          /**
           * private
           * contains last value of scaling applied by the apply filter chain
           * @type Number
           */
          _filterScalingX: 1,
          /**
           * private
           * contains last value of scaling applied by the apply filter chain
           * @type Number
           */
          _filterScalingY: 1,
          /**
           * minimum scale factor under which any resizeFilter is triggered to resize the image
           * 0 will disable the automatic resize. 1 will trigger automatically always.
           * number bigger than 1 are not implemented yet.
           * @type Number
           */
          minimumScaleTrigger: 0.5,
          /**
           * List of properties to consider when checking if
           * state of an object is changed ({@link fabric.Object#hasStateChanged})
           * as well as for history (undo/redo) purposes
           * @type Array
           */
          stateProperties: f.Object.prototype.stateProperties.concat("cropX", "cropY"),
          /**
           * List of properties to consider when checking if cache needs refresh
           * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
           * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
           * and refreshed at the next render
           * @type Array
           */
          cacheProperties: f.Object.prototype.cacheProperties.concat("cropX", "cropY"),
          /**
           * key used to retrieve the texture representing this image
           * @since 2.0.0
           * @type String
           * @default
           */
          cacheKey: "",
          /**
           * Image crop in pixels from original image size.
           * @since 2.0.0
           * @type Number
           * @default
           */
          cropX: 0,
          /**
           * Image crop in pixels from original image size.
           * @since 2.0.0
           * @type Number
           * @default
           */
          cropY: 0,
          /**
           * Indicates whether this canvas will use image smoothing when painting this image.
           * Also influence if the cacheCanvas for this image uses imageSmoothing
           * @since 4.0.0-beta.11
           * @type Boolean
           * @default
           */
          imageSmoothing: !0,
          /**
           * Constructor
           * Image can be initialized with any canvas drawable or a string.
           * The string should be a url and will be loaded as an image.
           * Canvas and Image element work out of the box, while videos require extra code to work.
           * Please check video element events for seeking.
           * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} element Image element
           * @param {Object} [options] Options object
           * @param {function} [callback] callback function to call after eventual filters applied.
           * @return {fabric.Image} thisArg
           */
          initialize: function(h, o) {
            o || (o = {}), this.filters = [], this.cacheKey = "texture" + f.Object.__uid++, this.callSuper("initialize", o), this._initElement(h, o);
          },
          /**
           * Returns image element which this instance if based on
           * @return {HTMLImageElement} Image element
           */
          getElement: function() {
            return this._element || {};
          },
          /**
           * Sets image element for this instance to a specified one.
           * If filters defined they are applied to new image.
           * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
           * @param {HTMLImageElement} element
           * @param {Object} [options] Options object
           * @return {fabric.Image} thisArg
           * @chainable
           */
          setElement: function(h, o) {
            return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = h, this._originalElement = h, this._initConfig(o), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
          },
          /**
           * Delete a single texture if in webgl mode
           */
          removeTexture: function(h) {
            var o = f.filterBackend;
            o && o.evictCachesForKey && o.evictCachesForKey(h);
          },
          /**
           * Delete textures, reference to elements and eventually JSDOM cleanup
           */
          dispose: function() {
            this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((function(h) {
              f.util.cleanUpJsdomNode(this[h]), this[h] = void 0;
            }).bind(this));
          },
          /**
           * Get the crossOrigin value (of the corresponding image element)
           */
          getCrossOrigin: function() {
            return this._originalElement && (this._originalElement.crossOrigin || null);
          },
          /**
           * Returns original size of an image
           * @return {Object} Object with "width" and "height" properties
           */
          getOriginalSize: function() {
            var h = this.getElement();
            return {
              width: h.naturalWidth || h.width,
              height: h.naturalHeight || h.height
            };
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _stroke: function(h) {
            if (!(!this.stroke || this.strokeWidth === 0)) {
              var o = this.width / 2, i = this.height / 2;
              h.beginPath(), h.moveTo(-o, -i), h.lineTo(o, -i), h.lineTo(o, i), h.lineTo(-o, i), h.lineTo(-o, -i), h.closePath();
            }
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of an instance
           */
          toObject: function(h) {
            var o = [];
            this.filters.forEach(function(e) {
              e && o.push(e.toObject());
            });
            var i = s(
              this.callSuper(
                "toObject",
                ["cropX", "cropY"].concat(h)
              ),
              {
                src: this.getSrc(),
                crossOrigin: this.getCrossOrigin(),
                filters: o
              }
            );
            return this.resizeFilter && (i.resizeFilter = this.resizeFilter.toObject()), i;
          },
          /**
           * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
           * @return {Boolean}
           */
          hasCrop: function() {
            return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
          },
          /* _TO_SVG_START_ */
          /**
           * Returns svg representation of an instance
           * @return {Array} an array of strings with the specific svg representation
           * of the instance
           */
          _toSVG: function() {
            var h = [], o = [], i, e = this._element, t = -this.width / 2, n = -this.height / 2, a = "", r = "";
            if (!e)
              return [];
            if (this.hasCrop()) {
              var l = f.Object.__uid++;
              h.push(
                '<clipPath id="imageCrop_' + l + `">
`,
                '	<rect x="' + t + '" y="' + n + '" width="' + this.width + '" height="' + this.height + `" />
`,
                `</clipPath>
`
              ), a = ' clip-path="url(#imageCrop_' + l + ')" ';
            }
            if (this.imageSmoothing || (r = '" image-rendering="optimizeSpeed'), o.push(
              "	<image ",
              "COMMON_PARTS",
              'xlink:href="',
              this.getSvgSrc(!0),
              '" x="',
              t - this.cropX,
              '" y="',
              n - this.cropY,
              // we're essentially moving origin of transformation from top/left corner to the center of the shape
              // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
              // so that object's center aligns with container's left/top
              '" width="',
              e.width || e.naturalWidth,
              '" height="',
              e.height || e.height,
              r,
              '"',
              a,
              `></image>
`
            ), this.stroke || this.strokeDashArray) {
              var u = this.fill;
              this.fill = null, i = [
                "	<rect ",
                'x="',
                t,
                '" y="',
                n,
                '" width="',
                this.width,
                '" height="',
                this.height,
                '" style="',
                this.getSvgStyles(),
                `"/>
`
              ], this.fill = u;
            }
            return this.paintFirst !== "fill" ? h = h.concat(i, o) : h = h.concat(o, i), h;
          },
          /* _TO_SVG_END_ */
          /**
           * Returns source of an image
           * @param {Boolean} filtered indicates if the src is needed for svg
           * @return {String} Source of an image
           */
          getSrc: function(h) {
            var o = h ? this._element : this._originalElement;
            return o ? o.toDataURL ? o.toDataURL() : this.srcFromAttribute ? o.getAttribute("src") : o.src : this.src || "";
          },
          /**
           * Sets source of an image
           * @param {String} src Source string (URL)
           * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
           * @param {Object} [options] Options object
           * @param {String} [options.crossOrigin] crossOrigin value (one of "", "anonymous", "use-credentials")
           * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
           * @return {fabric.Image} thisArg
           * @chainable
           */
          setSrc: function(h, o, i) {
            return f.util.loadImage(h, function(e, t) {
              this.setElement(e, i), this._setWidthHeight(), o && o(this, t);
            }, this, i && i.crossOrigin), this;
          },
          /**
           * Returns string representation of an instance
           * @return {String} String representation of an instance
           */
          toString: function() {
            return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
          },
          applyResizeFilters: function() {
            var h = this.resizeFilter, o = this.minimumScaleTrigger, i = this.getTotalObjectScaling(), e = i.scaleX, t = i.scaleY, n = this._filteredEl || this._originalElement;
            if (this.group && this.set("dirty", !0), !h || e > o && t > o) {
              this._element = n, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = e, this._lastScaleY = t;
              return;
            }
            f.filterBackend || (f.filterBackend = f.initFilterBackend());
            var a = f.util.createCanvasElement(), r = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, l = n.width, u = n.height;
            a.width = l, a.height = u, this._element = a, this._lastScaleX = h.scaleX = e, this._lastScaleY = h.scaleY = t, f.filterBackend.applyFilters(
              [h],
              n,
              l,
              u,
              this._element,
              r
            ), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height;
          },
          /**
           * Applies filters assigned to this image (from "filters" array) or from filter param
           * @method applyFilters
           * @param {Array} filters to be applied
           * @param {Boolean} forResizing specify if the filter operation is a resize operation
           * @return {thisArg} return the fabric.Image object
           * @chainable
           */
          applyFilters: function(h) {
            if (h = h || this.filters || [], h = h.filter(function(n) {
              return n && !n.isNeutralState();
            }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), h.length === 0)
              return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
            var o = this._originalElement, i = o.naturalWidth || o.width, e = o.naturalHeight || o.height;
            if (this._element === this._originalElement) {
              var t = f.util.createCanvasElement();
              t.width = i, t.height = e, this._element = t, this._filteredEl = t;
            } else
              this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, i, e), this._lastScaleX = 1, this._lastScaleY = 1;
            return f.filterBackend || (f.filterBackend = f.initFilterBackend()), f.filterBackend.applyFilters(
              h,
              this._originalElement,
              i,
              e,
              this._element,
              this.cacheKey
            ), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(h) {
            f.util.setImageSmoothing(h, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(h), this._renderPaintInOrder(h);
          },
          /**
           * Paint the cached copy of the object on the target context.
           * it will set the imageSmoothing for the draw operation
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          drawCacheOnCanvas: function(h) {
            f.util.setImageSmoothing(h, this.imageSmoothing), f.Object.prototype.drawCacheOnCanvas.call(this, h);
          },
          /**
           * Decide if the object should cache or not. Create its own cache level
           * needsItsOwnCache should be used when the object drawing method requires
           * a cache step. None of the fabric classes requires it.
           * Generally you do not cache objects in groups because the group outside is cached.
           * This is the special image version where we would like to avoid caching where possible.
           * Essentially images do not benefit from caching. They may require caching, and in that
           * case we do it. Also caching an image usually ends in a loss of details.
           * A full performance audit should be done.
           * @return {Boolean}
           */
          shouldCache: function() {
            return this.needsItsOwnCache();
          },
          _renderFill: function(h) {
            var o = this._element;
            if (o) {
              var i = this._filterScalingX, e = this._filterScalingY, t = this.width, n = this.height, a = Math.min, r = Math.max, l = r(this.cropX, 0), u = r(this.cropY, 0), d = o.naturalWidth || o.width, g = o.naturalHeight || o.height, m = l * i, v = u * e, y = a(t * i, d - m), w = a(n * e, g - v), E = -t / 2, L = -n / 2, W = a(t, d / i - l), G = a(n, g / e - u);
              o && h.drawImage(o, m, v, y, w, E, L, W, G);
            }
          },
          /**
           * needed to check if image needs resize
           * @private
           */
          _needsResize: function() {
            var h = this.getTotalObjectScaling();
            return h.scaleX !== this._lastScaleX || h.scaleY !== this._lastScaleY;
          },
          /**
           * @private
           */
          _resetWidthHeight: function() {
            this.set(this.getOriginalSize());
          },
          /**
           * The Image class's initialization method. This method is automatically
           * called by the constructor.
           * @private
           * @param {HTMLImageElement|String} element The element representing the image
           * @param {Object} [options] Options object
           */
          _initElement: function(h, o) {
            this.setElement(f.util.getById(h), o), f.util.addClass(this.getElement(), f.Image.CSS_CANVAS);
          },
          /**
           * @private
           * @param {Object} [options] Options object
           */
          _initConfig: function(h) {
            h || (h = {}), this.setOptions(h), this._setWidthHeight(h);
          },
          /**
           * @private
           * @param {Array} filters to be initialized
           * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
           */
          _initFilters: function(h, o) {
            h && h.length ? f.util.enlivenObjects(h, function(i) {
              o && o(i);
            }, "fabric.Image.filters") : o && o();
          },
          /**
           * @private
           * Set the width and the height of the image object, using the element or the
           * options.
           * @param {Object} [options] Object with width/height properties
           */
          _setWidthHeight: function(h) {
            h || (h = {});
            var o = this.getElement();
            this.width = h.width || o.naturalWidth || o.width || 0, this.height = h.height || o.naturalHeight || o.height || 0;
          },
          /**
           * Calculate offset for center and scale factor for the image in order to respect
           * the preserveAspectRatio attribute
           * @private
           * @return {Object}
           */
          parsePreserveAspectRatioAttribute: function() {
            var h = f.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), o = this._element.width, i = this._element.height, e = 1, t = 1, n = 0, a = 0, r = 0, l = 0, u, d = this.width, g = this.height, m = { width: d, height: g };
            return h && (h.alignX !== "none" || h.alignY !== "none") ? (h.meetOrSlice === "meet" && (e = t = f.util.findScaleToFit(this._element, m), u = (d - o * e) / 2, h.alignX === "Min" && (n = -u), h.alignX === "Max" && (n = u), u = (g - i * t) / 2, h.alignY === "Min" && (a = -u), h.alignY === "Max" && (a = u)), h.meetOrSlice === "slice" && (e = t = f.util.findScaleToCover(this._element, m), u = o - d / e, h.alignX === "Mid" && (r = u / 2), h.alignX === "Max" && (r = u), u = i - g / t, h.alignY === "Mid" && (l = u / 2), h.alignY === "Max" && (l = u), o = d / e, i = g / t)) : (e = d / o, t = g / i), {
              width: o,
              height: i,
              scaleX: e,
              scaleY: t,
              offsetLeft: n,
              offsetTop: a,
              cropX: r,
              cropY: l
            };
          }
        }
      ), f.Image.CSS_CANVAS = "canvas-img", f.Image.prototype.getSvgSrc = f.Image.prototype.getSrc, f.Image.fromObject = function(h, o) {
        var i = f.util.object.clone(h);
        f.util.loadImage(i.src, function(e, t) {
          if (t) {
            o && o(null, !0);
            return;
          }
          f.Image.prototype._initFilters.call(i, i.filters, function(n) {
            i.filters = n || [], f.Image.prototype._initFilters.call(i, [i.resizeFilter], function(a) {
              i.resizeFilter = a[0], f.util.enlivenObjectEnlivables(i, i, function() {
                var r = new f.Image(e, i);
                o(r, !1);
              });
            });
          });
        }, null, i.crossOrigin);
      }, f.Image.fromURL = function(h, o, i) {
        f.util.loadImage(h, function(e, t) {
          o && o(new f.Image(e, i), t);
        }, null, i && i.crossOrigin);
      }, f.Image.ATTRIBUTE_NAMES = f.SHARED_ATTRIBUTES.concat(
        "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")
      ), f.Image.fromElement = function(h, o, i) {
        var e = f.parseAttributes(h, f.Image.ATTRIBUTE_NAMES);
        f.Image.fromURL(
          e["xlink:href"],
          o,
          s(i ? f.util.object.clone(i) : {}, e)
        );
      };
    })(q), f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * @private
         * @return {Number} angle value
         */
        _getAngleValueForStraighten: function() {
          var c = this.angle % 360;
          return c > 0 ? Math.round((c - 1) / 90) * 90 : Math.round(c / 90) * 90;
        },
        /**
         * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        straighten: function() {
          return this.rotate(this._getAngleValueForStraighten());
        },
        /**
         * Same as {@link fabric.Object.prototype.straighten} but with animation
         * @param {Object} callbacks Object with callback functions
         * @param {Function} [callbacks.onComplete] Invoked on completion
         * @param {Function} [callbacks.onChange] Invoked on every step of animation
         * @return {fabric.Object} thisArg
         */
        fxStraighten: function(c) {
          c = c || {};
          var s = function() {
          }, h = c.onComplete || s, o = c.onChange || s, i = this;
          return f.util.animate({
            target: this,
            startValue: this.get("angle"),
            endValue: this._getAngleValueForStraighten(),
            duration: this.FX_DURATION,
            onChange: function(e) {
              i.rotate(e), o();
            },
            onComplete: function() {
              i.setCoords(), h();
            }
          });
        }
      }
    ), f.util.object.extend(
      f.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Straightens object, then rerenders canvas
         * @param {fabric.Object} object Object to straighten
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        straightenObject: function(c) {
          return c.straighten(), this.requestRenderAll(), this;
        },
        /**
         * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
         * @param {fabric.Object} object Object to straighten
         * @return {fabric.Canvas} thisArg
         */
        fxStraightenObject: function(c) {
          return c.fxStraighten({
            onChange: this.requestRenderAllBound
          });
        }
      }
    ), (function() {
      function c(h, o) {
        var i = "precision " + o + ` float;
void main(){}`, e = h.createShader(h.FRAGMENT_SHADER);
        return h.shaderSource(e, i), h.compileShader(e), !!h.getShaderParameter(e, h.COMPILE_STATUS);
      }
      f.isWebglSupported = function(h) {
        if (f.isLikelyNode)
          return !1;
        h = h || f.WebglFilterBackend.prototype.tileSize;
        var o = document.createElement("canvas"), i = o.getContext("webgl") || o.getContext("experimental-webgl"), e = !1;
        if (i) {
          f.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), e = f.maxTextureSize >= h;
          for (var t = ["highp", "mediump", "lowp"], n = 0; n < 3; n++)
            if (c(i, t[n])) {
              f.webGlPrecision = t[n];
              break;
            }
        }
        return this.isSupported = e, e;
      }, f.WebglFilterBackend = s;
      function s(h) {
        h && h.tileSize && (this.tileSize = h.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
      }
      s.prototype = /** @lends fabric.WebglFilterBackend.prototype */
      {
        tileSize: 2048,
        /**
         * Experimental. This object is a sort of repository of help layers used to avoid
         * of recreating them during frequent filtering. If you are previewing a filter with
         * a slider you probably do not want to create help layers every filter step.
         * in this object there will be appended some canvases, created once, resized sometimes
         * cleared never. Clearing is left to the developer.
         **/
        resources: {},
        /**
         * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
         */
        setupGLContext: function(h, o) {
          this.dispose(), this.createWebGLCanvas(h, o), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(h, o);
        },
        /**
         * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
         * putImageData is faster than drawImage for that specific operation.
         */
        chooseFastestCopyGLTo2DMethod: function(h, o) {
          var i = typeof window.performance < "u", e;
          try {
            new ImageData(1, 1), e = !0;
          } catch {
            e = !1;
          }
          var t = typeof ArrayBuffer < "u", n = typeof Uint8ClampedArray < "u";
          if (i && e && t && n) {
            var a = f.util.createCanvasElement(), r = new ArrayBuffer(h * o * 4);
            if (f.forceGLPutImageData) {
              this.imageBuffer = r, this.copyGLTo2D = dt;
              return;
            }
            var l = {
              imageBuffer: r,
              destinationWidth: h,
              destinationHeight: o,
              targetCanvas: a
            }, u, d, g;
            a.width = h, a.height = o, u = window.performance.now(), ut.call(l, this.gl, l), d = window.performance.now() - u, u = window.performance.now(), dt.call(l, this.gl, l), g = window.performance.now() - u, d > g ? (this.imageBuffer = r, this.copyGLTo2D = dt) : this.copyGLTo2D = ut;
          }
        },
        /**
         * Create a canvas element and associated WebGL context and attaches them as
         * class properties to the GLFilterBackend class.
         */
        createWebGLCanvas: function(h, o) {
          var i = f.util.createCanvasElement();
          i.width = h, i.height = o;
          var e = {
            alpha: !0,
            premultipliedAlpha: !1,
            depth: !1,
            stencil: !1,
            antialias: !1
          }, t = i.getContext("webgl", e);
          t || (t = i.getContext("experimental-webgl", e)), t && (t.clearColor(0, 0, 0, 0), this.canvas = i, this.gl = t);
        },
        /**
         * Attempts to apply the requested filters to the source provided, drawing the filtered output
         * to the provided target canvas.
         *
         * @param {Array} filters The filters to apply.
         * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
         * @param {Number} width The width of the source input.
         * @param {Number} height The height of the source input.
         * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
         * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
         * omitted, caching will be skipped.
         */
        applyFilters: function(h, o, i, e, t, n) {
          var a = this.gl, r;
          n && (r = this.getCachedTexture(n, o));
          var l = {
            originalWidth: o.width || o.originalWidth,
            originalHeight: o.height || o.originalHeight,
            sourceWidth: i,
            sourceHeight: e,
            destinationWidth: i,
            destinationHeight: e,
            context: a,
            sourceTexture: this.createTexture(a, i, e, !r && o),
            targetTexture: this.createTexture(a, i, e),
            originalTexture: r || this.createTexture(a, i, e, !r && o),
            passes: h.length,
            webgl: !0,
            aPosition: this.aPosition,
            programCache: this.programCache,
            pass: 0,
            filterBackend: this,
            targetCanvas: t
          }, u = a.createFramebuffer();
          return a.bindFramebuffer(a.FRAMEBUFFER, u), h.forEach(function(d) {
            d && d.applyTo(l);
          }), nt(l), this.copyGLTo2D(a, l), a.bindTexture(a.TEXTURE_2D, null), a.deleteTexture(l.sourceTexture), a.deleteTexture(l.targetTexture), a.deleteFramebuffer(u), t.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), l;
        },
        /**
         * Detach event listeners, remove references, and clean up caches.
         */
        dispose: function() {
          this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
        },
        /**
         * Wipe out WebGL-related caches.
         */
        clearWebGLCaches: function() {
          this.programCache = {}, this.textureCache = {};
        },
        /**
         * Create a WebGL texture object.
         *
         * Accepts specific dimensions to initialize the texture to or a source image.
         *
         * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
         * @param {Number} width The width to initialize the texture at.
         * @param {Number} height The height to initialize the texture.
         * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
         * @param {Number} filterType gl.NEAREST or gl.LINEAR usually, webgl numeri constants
         * @returns {WebGLTexture}
         */
        createTexture: function(h, o, i, e, t) {
          var n = h.createTexture();
          return h.bindTexture(h.TEXTURE_2D, n), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, t || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, t || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), e ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, o, i, 0, h.RGBA, h.UNSIGNED_BYTE, null), n;
        },
        /**
         * Can be optionally used to get a texture from the cache array
         *
         * If an existing texture is not found, a new texture is created and cached.
         *
         * @param {String} uniqueId A cache key to use to find an existing texture.
         * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
         * texture cache entry if one does not already exist.
         */
        getCachedTexture: function(h, o) {
          if (this.textureCache[h])
            return this.textureCache[h];
          var i = this.createTexture(
            this.gl,
            o.width,
            o.height,
            o
          );
          return this.textureCache[h] = i, i;
        },
        /**
         * Clear out cached resources related to a source image that has been
         * filtered previously.
         *
         * @param {String} cacheKey The cache key provided when the source image was filtered.
         */
        evictCachesForKey: function(h) {
          this.textureCache[h] && (this.gl.deleteTexture(this.textureCache[h]), delete this.textureCache[h]);
        },
        copyGLTo2D: ut,
        /**
         * Attempt to extract GPU information strings from a WebGL context.
         *
         * Useful information when debugging or blacklisting specific GPUs.
         *
         * @returns {Object} A GPU info object with renderer and vendor strings.
         */
        captureGPUInfo: function() {
          if (this.gpuInfo)
            return this.gpuInfo;
          var h = this.gl, o = { renderer: "", vendor: "" };
          if (!h)
            return o;
          var i = h.getExtension("WEBGL_debug_renderer_info");
          if (i) {
            var e = h.getParameter(i.UNMASKED_RENDERER_WEBGL), t = h.getParameter(i.UNMASKED_VENDOR_WEBGL);
            e && (o.renderer = e.toLowerCase()), t && (o.vendor = t.toLowerCase());
          }
          return this.gpuInfo = o, o;
        }
      };
    })();
    function nt(c) {
      var s = c.targetCanvas, h = s.width, o = s.height, i = c.destinationWidth, e = c.destinationHeight;
      (h !== i || o !== e) && (s.width = i, s.height = e);
    }
    function ut(c, s) {
      var h = c.canvas, o = s.targetCanvas, i = o.getContext("2d");
      i.translate(0, o.height), i.scale(1, -1);
      var e = h.height - o.height;
      i.drawImage(
        h,
        0,
        e,
        o.width,
        o.height,
        0,
        0,
        o.width,
        o.height
      );
    }
    function dt(c, s) {
      var h = s.targetCanvas, o = h.getContext("2d"), i = s.destinationWidth, e = s.destinationHeight, t = i * e * 4, n = new Uint8Array(this.imageBuffer, 0, t), a = new Uint8ClampedArray(this.imageBuffer, 0, t);
      c.readPixels(0, 0, i, e, c.RGBA, c.UNSIGNED_BYTE, n);
      var r = new ImageData(a, i, e);
      o.putImageData(r, 0, 0);
    }
    (function() {
      var c = function() {
      };
      f.Canvas2dFilterBackend = s;
      function s() {
      }
      s.prototype = /** @lends fabric.Canvas2dFilterBackend.prototype */
      {
        evictCachesForKey: c,
        dispose: c,
        clearWebGLCaches: c,
        /**
         * Experimental. This object is a sort of repository of help layers used to avoid
         * of recreating them during frequent filtering. If you are previewing a filter with
         * a slider you probably do not want to create help layers every filter step.
         * in this object there will be appended some canvases, created once, resized sometimes
         * cleared never. Clearing is left to the developer.
         **/
        resources: {},
        /**
         * Apply a set of filters against a source image and draw the filtered output
         * to the provided destination canvas.
         *
         * @param {EnhancedFilter} filters The filter to apply.
         * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
         * @param {Number} sourceWidth The width of the source input.
         * @param {Number} sourceHeight The height of the source input.
         * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
         */
        applyFilters: function(h, o, i, e, t) {
          var n = t.getContext("2d");
          n.drawImage(o, 0, 0, i, e);
          var a = n.getImageData(0, 0, i, e), r = n.getImageData(0, 0, i, e), l = {
            sourceWidth: i,
            sourceHeight: e,
            imageData: a,
            originalEl: o,
            originalImageData: r,
            canvasEl: t,
            ctx: n,
            filterBackend: this
          };
          return h.forEach(function(u) {
            u.applyTo(l);
          }), (l.imageData.width !== i || l.imageData.height !== e) && (t.width = l.imageData.width, t.height = l.imageData.height), n.putImageData(l.imageData, 0, 0), l;
        }
      };
    })(), f.Image = f.Image || {}, f.Image.filters = f.Image.filters || {}, f.Image.filters.BaseFilter = f.util.createClass(
      /** @lends fabric.Image.filters.BaseFilter.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "BaseFilter",
        /**
         * Array of attributes to send with buffers. do not modify
         * @private
         */
        vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
        fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(c) {
          c && this.setOptions(c);
        },
        /**
         * Sets filter's properties from options
         * @param {Object} [options] Options object
         */
        setOptions: function(c) {
          for (var s in c)
            this[s] = c[s];
        },
        /**
         * Compile this filter's shader program.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
         * @param {String} fragmentSource fragmentShader source for compilation
         * @param {String} vertexSource vertexShader source for compilation
         */
        createProgram: function(c, s, h) {
          s = s || this.fragmentSource, h = h || this.vertexSource, f.webGlPrecision !== "highp" && (s = s.replace(
            /precision highp float/g,
            "precision " + f.webGlPrecision + " float"
          ));
          var o = c.createShader(c.VERTEX_SHADER);
          if (c.shaderSource(o, h), c.compileShader(o), !c.getShaderParameter(o, c.COMPILE_STATUS))
            throw new Error(
              // eslint-disable-next-line prefer-template
              "Vertex shader compile error for " + this.type + ": " + c.getShaderInfoLog(o)
            );
          var i = c.createShader(c.FRAGMENT_SHADER);
          if (c.shaderSource(i, s), c.compileShader(i), !c.getShaderParameter(i, c.COMPILE_STATUS))
            throw new Error(
              // eslint-disable-next-line prefer-template
              "Fragment shader compile error for " + this.type + ": " + c.getShaderInfoLog(i)
            );
          var e = c.createProgram();
          if (c.attachShader(e, o), c.attachShader(e, i), c.linkProgram(e), !c.getProgramParameter(e, c.LINK_STATUS))
            throw new Error(
              // eslint-disable-next-line prefer-template
              'Shader link error for "${this.type}" ' + c.getProgramInfoLog(e)
            );
          var t = this.getAttributeLocations(c, e), n = this.getUniformLocations(c, e) || {};
          return n.uStepW = c.getUniformLocation(e, "uStepW"), n.uStepH = c.getUniformLocation(e, "uStepH"), {
            program: e,
            attributeLocations: t,
            uniformLocations: n
          };
        },
        /**
         * Return a map of attribute names to WebGLAttributeLocation objects.
         *
         * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
         * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
         * @returns {Object} A map of attribute names to attribute locations.
         */
        getAttributeLocations: function(c, s) {
          return {
            aPosition: c.getAttribLocation(s, "aPosition")
          };
        },
        /**
         * Return a map of uniform names to WebGLUniformLocation objects.
         *
         * Intended to be overridden by subclasses.
         *
         * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
         * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
         * @returns {Object} A map of uniform names to uniform locations.
         */
        getUniformLocations: function() {
          return {};
        },
        /**
         * Send attribute data from this filter to its shader program on the GPU.
         *
         * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
         * @param {Object} attributeLocations A map of shader attribute names to their locations.
         */
        sendAttributeData: function(c, s, h) {
          var o = s.aPosition, i = c.createBuffer();
          c.bindBuffer(c.ARRAY_BUFFER, i), c.enableVertexAttribArray(o), c.vertexAttribPointer(o, 2, c.FLOAT, !1, 0, 0), c.bufferData(c.ARRAY_BUFFER, h, c.STATIC_DRAW);
        },
        _setupFrameBuffer: function(c) {
          var s = c.context, h, o;
          c.passes > 1 ? (h = c.destinationWidth, o = c.destinationHeight, (c.sourceWidth !== h || c.sourceHeight !== o) && (s.deleteTexture(c.targetTexture), c.targetTexture = c.filterBackend.createTexture(s, h, o)), s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_2D,
            c.targetTexture,
            0
          )) : (s.bindFramebuffer(s.FRAMEBUFFER, null), s.finish());
        },
        _swapTextures: function(c) {
          c.passes--, c.pass++;
          var s = c.targetTexture;
          c.targetTexture = c.sourceTexture, c.sourceTexture = s;
        },
        /**
         * Generic isNeutral implementation for one parameter based filters.
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )
         * @param {Object} options
         **/
        isNeutralState: function() {
          var c = this.mainParameter, s = f.Image.filters[this.type].prototype;
          if (c)
            if (Array.isArray(s[c])) {
              for (var h = s[c].length; h--; )
                if (this[c][h] !== s[c][h])
                  return !1;
              return !0;
            } else
              return s[c] === this[c];
          else
            return !1;
        },
        /**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(c) {
          c.webgl ? (this._setupFrameBuffer(c), this.applyToWebGL(c), this._swapTextures(c)) : this.applyTo2d(c);
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(c) {
          return c.programCache.hasOwnProperty(this.type) || (c.programCache[this.type] = this.createProgram(c.context)), c.programCache[this.type];
        },
        /**
         * Apply this filter using webgl.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.originalTexture The texture of the original input image.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyToWebGL: function(c) {
          var s = c.context, h = this.retrieveShader(c);
          c.pass === 0 && c.originalTexture ? s.bindTexture(s.TEXTURE_2D, c.originalTexture) : s.bindTexture(s.TEXTURE_2D, c.sourceTexture), s.useProgram(h.program), this.sendAttributeData(s, h.attributeLocations, c.aPosition), s.uniform1f(h.uniformLocations.uStepW, 1 / c.sourceWidth), s.uniform1f(h.uniformLocations.uStepH, 1 / c.sourceHeight), this.sendUniformData(s, h.uniformLocations), s.viewport(0, 0, c.destinationWidth, c.destinationHeight), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
        },
        bindAdditionalTexture: function(c, s, h) {
          c.activeTexture(h), c.bindTexture(c.TEXTURE_2D, s), c.activeTexture(c.TEXTURE0);
        },
        unbindAdditionalTexture: function(c, s) {
          c.activeTexture(s), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE0);
        },
        getMainParameter: function() {
          return this[this.mainParameter];
        },
        setMainParameter: function(c) {
          this[this.mainParameter] = c;
        },
        /**
         * Send uniform data from this filter to its shader program on the GPU.
         *
         * Intended to be overridden by subclasses.
         *
         * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
         * @param {Object} uniformLocations A map of shader uniform names to their locations.
         */
        sendUniformData: function() {
        },
        /**
         * If needed by a 2d filter, this functions can create an helper canvas to be used
         * remember that options.targetCanvas is available for use till end of chain.
         */
        createHelpLayer: function(c) {
          if (!c.helpLayer) {
            var s = document.createElement("canvas");
            s.width = c.sourceWidth, s.height = c.sourceHeight, c.helpLayer = s;
          }
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          var c = { type: this.type }, s = this.mainParameter;
          return s && (c[s] = this[s]), c;
        },
        /**
         * Returns a JSON representation of an instance
         * @return {Object} JSON
         */
        toJSON: function() {
          return this.toObject();
        }
      }
    ), f.Image.filters.BaseFilter.fromObject = function(c, s) {
      var h = new f.Image.filters[c.type](c);
      return s && s(h), h;
    }, (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.ColorMatrix = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.ColorMatrix.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "ColorMatrix",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`,
          /**
           * Colormatrix for pixels.
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * 0.0039215686 is the part of 1 that get translated to 1 in 2d
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
          matrix: [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          mainParameter: "matrix",
          /**
           * Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
           * to save some calculation
           * @type Boolean
           * @default true
           */
          colorsOnly: !0,
          /**
           * Constructor
           * @param {Object} [options] Options object
           */
          initialize: function(i) {
            this.callSuper("initialize", i), this.matrix = this.matrix.slice(0);
          },
          /**
           * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8Array to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n = t.length, a = this.matrix, r, l, u, d, g, m = this.colorsOnly;
            for (g = 0; g < n; g += 4)
              r = t[g], l = t[g + 1], u = t[g + 2], m ? (t[g] = r * a[0] + l * a[1] + u * a[2] + a[4] * 255, t[g + 1] = r * a[5] + l * a[6] + u * a[7] + a[9] * 255, t[g + 2] = r * a[10] + l * a[11] + u * a[12] + a[14] * 255) : (d = t[g + 3], t[g] = r * a[0] + l * a[1] + u * a[2] + d * a[3] + a[4] * 255, t[g + 1] = r * a[5] + l * a[6] + u * a[7] + d * a[8] + a[9] * 255, t[g + 2] = r * a[10] + l * a[11] + u * a[12] + d * a[13] + a[14] * 255, t[g + 3] = r * a[15] + l * a[16] + u * a[17] + d * a[18] + a[19] * 255);
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uColorMatrix: i.getUniformLocation(e, "uColorMatrix"),
              uConstants: i.getUniformLocation(e, "uConstants")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            var t = this.matrix, n = [
              t[0],
              t[1],
              t[2],
              t[3],
              t[5],
              t[6],
              t[7],
              t[8],
              t[10],
              t[11],
              t[12],
              t[13],
              t[15],
              t[16],
              t[17],
              t[18]
            ], a = [t[4], t[9], t[14], t[19]];
            i.uniformMatrix4fv(e.uColorMatrix, !1, n), i.uniform4fv(e.uConstants, a);
          }
        }
      ), s.Image.filters.ColorMatrix.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Brightness = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Brightness.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Brightness",
          /**
           * Fragment source for the brightness program
           */
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`,
          /**
           * Brightness value, from -1 to 1.
           * translated to -255 to 255 for 2d
           * 0.0039215686 is the part of 1 that get translated to 1 in 2d
           * @param {Number} brightness
           * @default
           */
          brightness: 0,
          /**
           * Describe the property that is the filter parameter
           * @param {String} m
           * @default
           */
          mainParameter: "brightness",
          /**
          * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
          */
          applyTo2d: function(i) {
            if (this.brightness !== 0) {
              var e = i.imageData, t = e.data, n, a = t.length, r = Math.round(this.brightness * 255);
              for (n = 0; n < a; n += 4)
                t[n] = t[n] + r, t[n + 1] = t[n + 1] + r, t[n + 2] = t[n + 2] + r;
            }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uBrightness: i.getUniformLocation(e, "uBrightness")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1f(e.uBrightness, this.brightness);
          }
        }
      ), s.Image.filters.Brightness.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, i = s.util.createClass;
      o.Convolute = i(
        o.BaseFilter,
        /** @lends fabric.Image.filters.Convolute.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Convolute",
          /*
           * Opaque value (true/false)
           */
          opaque: !1,
          /*
           * matrix for the filter, max 9x9
           */
          matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
          /**
           * Fragment source for the brightness program
           */
          fragmentSource: {
            Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`,
            Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
            Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`,
            Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
            Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`,
            Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
            Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`,
            Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`
          },
          /**
           * Constructor
           * @memberOf fabric.Image.filters.Convolute.prototype
           * @param {Object} [options] Options object
           * @param {Boolean} [options.opaque=false] Opaque value (true/false)
           * @param {Array} [options.matrix] Filter matrix
           */
          /**
          * Retrieves the cached shader.
          * @param {Object} options
          * @param {WebGLRenderingContext} options.context The GL context used for rendering.
          * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
          */
          retrieveShader: function(e) {
            var t = Math.sqrt(this.matrix.length), n = this.type + "_" + t + "_" + (this.opaque ? 1 : 0), a = this.fragmentSource[n];
            return e.programCache.hasOwnProperty(n) || (e.programCache[n] = this.createProgram(e.context, a)), e.programCache[n];
          },
          /**
           * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(e) {
            var t = e.imageData, n = t.data, a = this.matrix, r = Math.round(Math.sqrt(a.length)), l = Math.floor(r / 2), u = t.width, d = t.height, g = e.ctx.createImageData(u, d), m = g.data, v = this.opaque ? 1 : 0, y, w, E, L, W, G, V, H, N, K, $, J, p;
            for ($ = 0; $ < d; $++)
              for (K = 0; K < u; K++) {
                for (W = ($ * u + K) * 4, y = 0, w = 0, E = 0, L = 0, p = 0; p < r; p++)
                  for (J = 0; J < r; J++)
                    V = $ + p - l, G = K + J - l, !(V < 0 || V >= d || G < 0 || G >= u) && (H = (V * u + G) * 4, N = a[p * r + J], y += n[H] * N, w += n[H + 1] * N, E += n[H + 2] * N, v || (L += n[H + 3] * N));
                m[W] = y, m[W + 1] = w, m[W + 2] = E, v ? m[W + 3] = n[W + 3] : m[W + 3] = L;
              }
            e.imageData = g;
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(e, t) {
            return {
              uMatrix: e.getUniformLocation(t, "uMatrix"),
              uOpaque: e.getUniformLocation(t, "uOpaque"),
              uHalfSize: e.getUniformLocation(t, "uHalfSize"),
              uSize: e.getUniformLocation(t, "uSize")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(e, t) {
            e.uniform1fv(t.uMatrix, this.matrix);
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return h(this.callSuper("toObject"), {
              opaque: this.opaque,
              matrix: this.matrix
            });
          }
        }
      ), s.Image.filters.Convolute.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Grayscale = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Grayscale.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Grayscale",
          fragmentSource: {
            average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`,
            lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`,
            luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}`
          },
          /**
           * Grayscale mode, between 'average', 'lightness', 'luminosity'
           * @param {String} type
           * @default
           */
          mode: "average",
          mainParameter: "mode",
          /**
           * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8Array to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n, a = t.length, r, l = this.mode;
            for (n = 0; n < a; n += 4)
              l === "average" ? r = (t[n] + t[n + 1] + t[n + 2]) / 3 : l === "lightness" ? r = (Math.min(t[n], t[n + 1], t[n + 2]) + Math.max(t[n], t[n + 1], t[n + 2])) / 2 : l === "luminosity" && (r = 0.21 * t[n] + 0.72 * t[n + 1] + 0.07 * t[n + 2]), t[n] = r, t[n + 1] = r, t[n + 2] = r;
          },
          /**
           * Retrieves the cached shader.
           * @param {Object} options
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          retrieveShader: function(i) {
            var e = this.type + "_" + this.mode;
            if (!i.programCache.hasOwnProperty(e)) {
              var t = this.fragmentSource[this.mode];
              i.programCache[e] = this.createProgram(i.context, t);
            }
            return i.programCache[e];
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uMode: i.getUniformLocation(e, "uMode")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            var t = 1;
            i.uniform1i(e.uMode, t);
          },
          /**
           * Grayscale filter isNeutralState implementation
           * The filter is never neutral
           * on the image
           **/
          isNeutralState: function() {
            return !1;
          }
        }
      ), s.Image.filters.Grayscale.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Invert = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Invert.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Invert",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`,
          /**
           * Filter invert. if false, does nothing
           * @param {Boolean} invert
           * @default
           */
          invert: !0,
          mainParameter: "invert",
          /**
           * Apply the Invert operation to a Uint8Array representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8Array to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n, a = t.length;
            for (n = 0; n < a; n += 4)
              t[n] = 255 - t[n], t[n + 1] = 255 - t[n + 1], t[n + 2] = 255 - t[n + 2];
          },
          /**
           * Invert filter isNeutralState implementation
           * Used only in image applyFilters to discard filters that will not have an effect
           * on the image
           * @param {Object} options
           **/
          isNeutralState: function() {
            return !this.invert;
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uInvert: i.getUniformLocation(e, "uInvert")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1i(e.uInvert, this.invert);
          }
        }
      ), s.Image.filters.Invert.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, i = s.util.createClass;
      o.Noise = i(
        o.BaseFilter,
        /** @lends fabric.Image.filters.Noise.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Noise",
          /**
           * Fragment source for the noise program
           */
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`,
          /**
           * Describe the property that is the filter parameter
           * @param {String} m
           * @default
           */
          mainParameter: "noise",
          /**
           * Noise value, from
           * @param {Number} noise
           * @default
           */
          noise: 0,
          /**
           * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(e) {
            if (this.noise !== 0) {
              var t = e.imageData, n = t.data, a, r = n.length, l = this.noise, u;
              for (a = 0, r = n.length; a < r; a += 4)
                u = (0.5 - Math.random()) * l, n[a] += u, n[a + 1] += u, n[a + 2] += u;
            }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(e, t) {
            return {
              uNoise: e.getUniformLocation(t, "uNoise"),
              uSeed: e.getUniformLocation(t, "uSeed")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(e, t) {
            e.uniform1f(t.uNoise, this.noise / 255), e.uniform1f(t.uSeed, Math.random());
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return h(this.callSuper("toObject"), {
              noise: this.noise
            });
          }
        }
      ), s.Image.filters.Noise.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Pixelate = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Pixelate.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Pixelate",
          blocksize: 4,
          mainParameter: "blocksize",
          /**
           * Fragment source for the Pixelate program
           */
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`,
          /**
           * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n = e.height, a = e.width, r, l, u, d, g, m, v, y, w, E, L;
            for (l = 0; l < n; l += this.blocksize)
              for (u = 0; u < a; u += this.blocksize)
                for (r = l * 4 * a + u * 4, d = t[r], g = t[r + 1], m = t[r + 2], v = t[r + 3], E = Math.min(l + this.blocksize, n), L = Math.min(u + this.blocksize, a), y = l; y < E; y++)
                  for (w = u; w < L; w++)
                    r = y * 4 * a + w * 4, t[r] = d, t[r + 1] = g, t[r + 2] = m, t[r + 3] = v;
          },
          /**
           * Indicate when the filter is not gonna apply changes to the image
           **/
          isNeutralState: function() {
            return this.blocksize === 1;
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uBlocksize: i.getUniformLocation(e, "uBlocksize"),
              uStepW: i.getUniformLocation(e, "uStepW"),
              uStepH: i.getUniformLocation(e, "uStepH")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1f(e.uBlocksize, this.blocksize);
          }
        }
      ), s.Image.filters.Pixelate.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, i = s.util.createClass;
      o.RemoveColor = i(
        o.BaseFilter,
        /** @lends fabric.Image.filters.RemoveColor.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "RemoveColor",
          /**
           * Color to remove, in any format understood by fabric.Color.
           * @param {String} type
           * @default
           */
          color: "#FFFFFF",
          /**
           * Fragment source for the brightness program
           */
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`,
          /**
           * distance to actual color, as value up or down from each r,g,b
           * between 0 and 1
           **/
          distance: 0.02,
          /**
           * For color to remove inside distance, use alpha channel for a smoother deletion
           * NOT IMPLEMENTED YET
           **/
          useAlpha: !1,
          /**
           * Constructor
           * @memberOf fabric.Image.filters.RemoveWhite.prototype
           * @param {Object} [options] Options object
           * @param {Number} [options.color=#RRGGBB] Threshold value
           * @param {Number} [options.distance=10] Distance value
           */
          /**
           * Applies filter to canvas element
           * @param {Object} canvasEl Canvas element to apply filter to
           */
          applyTo2d: function(e) {
            var t = e.imageData, n = t.data, a, r = this.distance * 255, l, u, d, g = new s.Color(this.color).getSource(), m = [
              g[0] - r,
              g[1] - r,
              g[2] - r
            ], v = [
              g[0] + r,
              g[1] + r,
              g[2] + r
            ];
            for (a = 0; a < n.length; a += 4)
              l = n[a], u = n[a + 1], d = n[a + 2], l > m[0] && u > m[1] && d > m[2] && l < v[0] && u < v[1] && d < v[2] && (n[a + 3] = 0);
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(e, t) {
            return {
              uLow: e.getUniformLocation(t, "uLow"),
              uHigh: e.getUniformLocation(t, "uHigh")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(e, t) {
            var n = new s.Color(this.color).getSource(), a = parseFloat(this.distance), r = [
              0 + n[0] / 255 - a,
              0 + n[1] / 255 - a,
              0 + n[2] / 255 - a,
              1
            ], l = [
              n[0] / 255 + a,
              n[1] / 255 + a,
              n[2] / 255 + a,
              1
            ];
            e.uniform4fv(t.uLow, r), e.uniform4fv(t.uHigh, l);
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return h(this.callSuper("toObject"), {
              color: this.color,
              distance: this.distance
            });
          }
        }
      ), s.Image.filters.RemoveColor.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass, i = {
        Brownie: [
          0.5997,
          0.34553,
          -0.27082,
          0,
          0.186,
          -0.0377,
          0.86095,
          0.15059,
          0,
          -0.1449,
          0.24113,
          -0.07441,
          0.44972,
          0,
          -0.02965,
          0,
          0,
          0,
          1,
          0
        ],
        Vintage: [
          0.62793,
          0.32021,
          -0.03965,
          0,
          0.03784,
          0.02578,
          0.64411,
          0.03259,
          0,
          0.02926,
          0.0466,
          -0.08512,
          0.52416,
          0,
          0.02023,
          0,
          0,
          0,
          1,
          0
        ],
        Kodachrome: [
          1.12855,
          -0.39673,
          -0.03992,
          0,
          0.24991,
          -0.16404,
          1.08352,
          -0.05498,
          0,
          0.09698,
          -0.16786,
          -0.56034,
          1.60148,
          0,
          0.13972,
          0,
          0,
          0,
          1,
          0
        ],
        Technicolor: [
          1.91252,
          -0.85453,
          -0.09155,
          0,
          0.04624,
          -0.30878,
          1.76589,
          -0.10601,
          0,
          -0.27589,
          -0.2311,
          -0.75018,
          1.84759,
          0,
          0.12137,
          0,
          0,
          0,
          1,
          0
        ],
        Polaroid: [
          1.438,
          -0.062,
          -0.062,
          0,
          0,
          -0.122,
          1.378,
          -0.122,
          0,
          0,
          -0.016,
          -0.016,
          1.483,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        Sepia: [
          0.393,
          0.769,
          0.189,
          0,
          0,
          0.349,
          0.686,
          0.168,
          0,
          0,
          0.272,
          0.534,
          0.131,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        BlackWhite: [
          1.5,
          1.5,
          1.5,
          0,
          -1,
          1.5,
          1.5,
          1.5,
          0,
          -1,
          1.5,
          1.5,
          1.5,
          0,
          -1,
          0,
          0,
          0,
          1,
          0
        ]
      };
      for (var e in i)
        h[e] = o(
          h.ColorMatrix,
          /** @lends fabric.Image.filters.Sepia.prototype */
          {
            /**
             * Filter type
             * @param {String} type
             * @default
             */
            type: e,
            /**
             * Colormatrix for the effect
             * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
             * outside the -1, 1 range.
             * @param {Array} matrix array of 20 numbers.
             * @default
             */
            matrix: i[e],
            /**
             * Lock the matrix export for this kind of static, parameter less filters.
             */
            mainParameter: !1,
            /**
             * Lock the colormatrix on the color part, skipping alpha
             */
            colorsOnly: !0
          }
        ), s.Image.filters[e].fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric, h = s.Image.filters, o = s.util.createClass;
      h.BlendColor = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Blend.prototype */
        {
          type: "BlendColor",
          /**
           * Color to make the blend operation with. default to a reddish color since black or white
           * gives always strong result.
           * @type String
           * @default
           **/
          color: "#F95C63",
          /**
           * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
           * darken, lighten, overlay, exclusion, tint.
           * @type String
           * @default
           **/
          mode: "multiply",
          /**
           * alpha value. represent the strength of the blend color operation.
           * @type Number
           * @default
           **/
          alpha: 1,
          /**
           * Fragment source for the Multiply program
           */
          fragmentSource: {
            multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
            screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
            add: `gl_FragColor.rgb += uColor.rgb;
`,
            diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
            subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
            lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
            darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
            exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
            overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`,
            tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
`
          },
          /**
           * build the fragment source for the filters, joining the common part with
           * the specific one.
           * @param {String} mode the mode of the filter, a key of this.fragmentSource
           * @return {String} the source to be compiled
           * @private
           */
          buildSource: function(i) {
            return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[i] + `}
}`;
          },
          /**
           * Retrieves the cached shader.
           * @param {Object} options
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          retrieveShader: function(i) {
            var e = this.type + "_" + this.mode, t;
            return i.programCache.hasOwnProperty(e) || (t = this.buildSource(this.mode), i.programCache[e] = this.createProgram(i.context, t)), i.programCache[e];
          },
          /**
           * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n = t.length, a, r, l, u, d, g, m, v = 1 - this.alpha;
            m = new s.Color(this.color).getSource(), a = m[0] * this.alpha, r = m[1] * this.alpha, l = m[2] * this.alpha;
            for (var y = 0; y < n; y += 4)
              switch (u = t[y], d = t[y + 1], g = t[y + 2], this.mode) {
                case "multiply":
                  t[y] = u * a / 255, t[y + 1] = d * r / 255, t[y + 2] = g * l / 255;
                  break;
                case "screen":
                  t[y] = 255 - (255 - u) * (255 - a) / 255, t[y + 1] = 255 - (255 - d) * (255 - r) / 255, t[y + 2] = 255 - (255 - g) * (255 - l) / 255;
                  break;
                case "add":
                  t[y] = u + a, t[y + 1] = d + r, t[y + 2] = g + l;
                  break;
                case "diff":
                case "difference":
                  t[y] = Math.abs(u - a), t[y + 1] = Math.abs(d - r), t[y + 2] = Math.abs(g - l);
                  break;
                case "subtract":
                  t[y] = u - a, t[y + 1] = d - r, t[y + 2] = g - l;
                  break;
                case "darken":
                  t[y] = Math.min(u, a), t[y + 1] = Math.min(d, r), t[y + 2] = Math.min(g, l);
                  break;
                case "lighten":
                  t[y] = Math.max(u, a), t[y + 1] = Math.max(d, r), t[y + 2] = Math.max(g, l);
                  break;
                case "overlay":
                  t[y] = a < 128 ? 2 * u * a / 255 : 255 - 2 * (255 - u) * (255 - a) / 255, t[y + 1] = r < 128 ? 2 * d * r / 255 : 255 - 2 * (255 - d) * (255 - r) / 255, t[y + 2] = l < 128 ? 2 * g * l / 255 : 255 - 2 * (255 - g) * (255 - l) / 255;
                  break;
                case "exclusion":
                  t[y] = a + u - 2 * a * u / 255, t[y + 1] = r + d - 2 * r * d / 255, t[y + 2] = l + g - 2 * l * g / 255;
                  break;
                case "tint":
                  t[y] = a + u * v, t[y + 1] = r + d * v, t[y + 2] = l + g * v;
              }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uColor: i.getUniformLocation(e, "uColor")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            var t = new s.Color(this.color).getSource();
            t[0] = this.alpha * t[0] / 255, t[1] = this.alpha * t[1] / 255, t[2] = this.alpha * t[2] / 255, t[3] = this.alpha, i.uniform4fv(e.uColor, t);
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return {
              type: this.type,
              color: this.color,
              mode: this.mode,
              alpha: this.alpha
            };
          }
        }
      ), s.Image.filters.BlendColor.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric, h = s.Image.filters, o = s.util.createClass;
      h.BlendImage = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.BlendImage.prototype */
        {
          type: "BlendImage",
          /**
           * Color to make the blend operation with. default to a reddish color since black or white
           * gives always strong result.
           **/
          image: null,
          /**
           * Blend mode for the filter (one of "multiply", "mask")
           * @type String
           * @default
           **/
          mode: "multiply",
          /**
           * alpha value. represent the strength of the blend image operation.
           * not implemented.
           **/
          alpha: 1,
          vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
          /**
           * Fragment source for the Multiply program
           */
          fragmentSource: {
            multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`,
            mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}`
          },
          /**
           * Retrieves the cached shader.
           * @param {Object} options
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          retrieveShader: function(i) {
            var e = this.type + "_" + this.mode, t = this.fragmentSource[this.mode];
            return i.programCache.hasOwnProperty(e) || (i.programCache[e] = this.createProgram(i.context, t)), i.programCache[e];
          },
          applyToWebGL: function(i) {
            var e = i.context, t = this.createTexture(i.filterBackend, this.image);
            this.bindAdditionalTexture(e, t, e.TEXTURE1), this.callSuper("applyToWebGL", i), this.unbindAdditionalTexture(e, e.TEXTURE1);
          },
          createTexture: function(i, e) {
            return i.getCachedTexture(e.cacheKey, e._element);
          },
          /**
           * Calculate a transformMatrix to adapt the image to blend over
           * @param {Object} options
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          calculateMatrix: function() {
            var i = this.image, e = i._element.width, t = i._element.height;
            return [
              1 / i.scaleX,
              0,
              0,
              0,
              1 / i.scaleY,
              0,
              -i.left / e,
              -i.top / t,
              1
            ];
          },
          /**
           * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = i.filterBackend.resources, n = e.data, a = n.length, r = e.width, l = e.height, u, d, g, m, v, y, w, E, L, W, G = this.image, V;
            t.blendImage || (t.blendImage = s.util.createCanvasElement()), L = t.blendImage, W = L.getContext("2d"), L.width !== r || L.height !== l ? (L.width = r, L.height = l) : W.clearRect(0, 0, r, l), W.setTransform(G.scaleX, 0, 0, G.scaleY, G.left, G.top), W.drawImage(G._element, 0, 0, r, l), V = W.getImageData(0, 0, r, l).data;
            for (var H = 0; H < a; H += 4)
              switch (v = n[H], y = n[H + 1], w = n[H + 2], E = n[H + 3], u = V[H], d = V[H + 1], g = V[H + 2], m = V[H + 3], this.mode) {
                case "multiply":
                  n[H] = v * u / 255, n[H + 1] = y * d / 255, n[H + 2] = w * g / 255, n[H + 3] = E * m / 255;
                  break;
                case "mask":
                  n[H + 3] = m;
                  break;
              }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uTransformMatrix: i.getUniformLocation(e, "uTransformMatrix"),
              uImage: i.getUniformLocation(e, "uImage")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            var t = this.calculateMatrix();
            i.uniform1i(e.uImage, 1), i.uniformMatrix3fv(e.uTransformMatrix, !1, t);
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return {
              type: this.type,
              image: this.image && this.image.toObject(),
              mode: this.mode,
              alpha: this.alpha
            };
          }
        }
      ), s.Image.filters.BlendImage.fromObject = function(i, e) {
        s.Image.fromObject(i.image, function(t) {
          var n = s.util.object.clone(i);
          n.image = t, e(new s.Image.filters.BlendImage(n));
        });
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = Math.pow, o = Math.floor, i = Math.sqrt, e = Math.abs, t = Math.round, n = Math.sin, a = Math.ceil, r = s.Image.filters, l = s.util.createClass;
      r.Resize = l(
        r.BaseFilter,
        /** @lends fabric.Image.filters.Resize.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Resize",
          /**
           * Resize type
           * for webgl resizeType is just lanczos, for canvas2d can be:
           * bilinear, hermite, sliceHack, lanczos.
           * @param {String} resizeType
           * @default
           */
          resizeType: "hermite",
          /**
           * Scale factor for resizing, x axis
           * @param {Number} scaleX
           * @default
           */
          scaleX: 1,
          /**
           * Scale factor for resizing, y axis
           * @param {Number} scaleY
           * @default
           */
          scaleY: 1,
          /**
           * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
           * @param {Number} lanczosLobes
           * @default
           */
          lanczosLobes: 3,
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(u, d) {
            return {
              uDelta: u.getUniformLocation(d, "uDelta"),
              uTaps: u.getUniformLocation(d, "uTaps")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(u, d) {
            u.uniform2fv(d.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), u.uniform1fv(d.uTaps, this.taps);
          },
          /**
           * Retrieves the cached shader.
           * @param {Object} options
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          retrieveShader: function(u) {
            var d = this.getFilterWindow(), g = this.type + "_" + d;
            if (!u.programCache.hasOwnProperty(g)) {
              var m = this.generateShader(d);
              u.programCache[g] = this.createProgram(u.context, m);
            }
            return u.programCache[g];
          },
          getFilterWindow: function() {
            var u = this.tempScale;
            return Math.ceil(this.lanczosLobes / u);
          },
          getTaps: function() {
            for (var u = this.lanczosCreate(this.lanczosLobes), d = this.tempScale, g = this.getFilterWindow(), m = new Array(g), v = 1; v <= g; v++)
              m[v - 1] = u(v * d);
            return m;
          },
          /**
           * Generate vertex and shader sources from the necessary steps numbers
           * @param {Number} filterWindow
           */
          generateShader: function(m) {
            for (var d = new Array(m), g = this.fragmentSourceTOP, m, v = 1; v <= m; v++)
              d[v - 1] = v + ".0 * uDelta";
            return g += "uniform float uTaps[" + m + `];
`, g += `void main() {
`, g += `  vec4 color = texture2D(uTexture, vTexCoord);
`, g += `  float sum = 1.0;
`, d.forEach(function(y, w) {
              g += "  color += texture2D(uTexture, vTexCoord + " + y + ") * uTaps[" + w + `];
`, g += "  color += texture2D(uTexture, vTexCoord - " + y + ") * uTaps[" + w + `];
`, g += "  sum += 2.0 * uTaps[" + w + `];
`;
            }), g += `  gl_FragColor = color / sum;
`, g += "}", g;
          },
          fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`,
          /**
           * Apply the resize filter to the image
           * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
           *
           * @param {Object} options
           * @param {Number} options.passes The number of filters remaining to be executed
           * @param {Boolean} options.webgl Whether to use webgl to render the filter.
           * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
           * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          applyTo: function(u) {
            u.webgl ? (u.passes++, this.width = u.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = u.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), u.destinationWidth = this.dW, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceWidth = u.destinationWidth, this.height = u.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), u.destinationHeight = this.dH, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceHeight = u.destinationHeight) : this.applyTo2d(u);
          },
          isNeutralState: function() {
            return this.scaleX === 1 && this.scaleY === 1;
          },
          lanczosCreate: function(u) {
            return function(d) {
              if (d >= u || d <= -u)
                return 0;
              if (d < 11920929e-14 && d > -11920929e-14)
                return 1;
              d *= Math.PI;
              var g = d / u;
              return n(d) / d * n(g) / g;
            };
          },
          /**
           * Applies filter to canvas element
           * @memberOf fabric.Image.filters.Resize.prototype
           * @param {Object} canvasEl Canvas element to apply filter to
           * @param {Number} scaleX
           * @param {Number} scaleY
           */
          applyTo2d: function(u) {
            var d = u.imageData, g = this.scaleX, m = this.scaleY;
            this.rcpScaleX = 1 / g, this.rcpScaleY = 1 / m;
            var v = d.width, y = d.height, w = t(v * g), E = t(y * m), L;
            this.resizeType === "sliceHack" ? L = this.sliceByTwo(u, v, y, w, E) : this.resizeType === "hermite" ? L = this.hermiteFastResize(u, v, y, w, E) : this.resizeType === "bilinear" ? L = this.bilinearFiltering(u, v, y, w, E) : this.resizeType === "lanczos" && (L = this.lanczosResize(u, v, y, w, E)), u.imageData = L;
          },
          /**
           * Filter sliceByTwo
           * @param {Object} canvasEl Canvas element to apply filter to
           * @param {Number} oW Original Width
           * @param {Number} oH Original Height
           * @param {Number} dW Destination Width
           * @param {Number} dH Destination Height
           * @returns {ImageData}
           */
          sliceByTwo: function(u, d, g, m, v) {
            var y = u.imageData, w = 0.5, E = !1, L = !1, W = d * w, G = g * w, V = s.filterBackend.resources, H, N, K = 0, $ = 0, J = d, p = 0;
            for (V.sliceByTwo || (V.sliceByTwo = document.createElement("canvas")), H = V.sliceByTwo, (H.width < d * 1.5 || H.height < g) && (H.width = d * 1.5, H.height = g), N = H.getContext("2d"), N.clearRect(0, 0, d * 1.5, g), N.putImageData(y, 0, 0), m = o(m), v = o(v); !E || !L; )
              d = W, g = G, m < o(W * w) ? W = o(W * w) : (W = m, E = !0), v < o(G * w) ? G = o(G * w) : (G = v, L = !0), N.drawImage(H, K, $, d, g, J, p, W, G), K = J, $ = p, p += G;
            return N.getImageData(K, $, m, v);
          },
          /**
           * Filter lanczosResize
           * @param {Object} canvasEl Canvas element to apply filter to
           * @param {Number} oW Original Width
           * @param {Number} oH Original Height
           * @param {Number} dW Destination Width
           * @param {Number} dH Destination Height
           * @returns {ImageData}
           */
          lanczosResize: function(u, d, g, m, v) {
            function y(b) {
              var S, k, C, _, T, P, F, D, B, Y, z;
              for (p.x = (b + 0.5) * G, x.x = o(p.x), S = 0; S < v; S++) {
                for (p.y = (S + 0.5) * V, x.y = o(p.y), T = 0, P = 0, F = 0, D = 0, B = 0, k = x.x - K; k <= x.x + K; k++)
                  if (!(k < 0 || k >= d)) {
                    Y = o(1e3 * e(k - p.x)), J[Y] || (J[Y] = {});
                    for (var A = x.y - $; A <= x.y + $; A++)
                      A < 0 || A >= g || (z = o(1e3 * e(A - p.y)), J[Y][z] || (J[Y][z] = W(i(h(Y * H, 2) + h(z * N, 2)) / 1e3)), C = J[Y][z], C > 0 && (_ = (A * d + k) * 4, T += C, P += C * w[_], F += C * w[_ + 1], D += C * w[_ + 2], B += C * w[_ + 3]));
                  }
                _ = (S * m + b) * 4, L[_] = P / T, L[_ + 1] = F / T, L[_ + 2] = D / T, L[_ + 3] = B / T;
              }
              return ++b < m ? y(b) : E;
            }
            var w = u.imageData.data, E = u.ctx.createImageData(m, v), L = E.data, W = this.lanczosCreate(this.lanczosLobes), G = this.rcpScaleX, V = this.rcpScaleY, H = 2 / this.rcpScaleX, N = 2 / this.rcpScaleY, K = a(G * this.lanczosLobes / 2), $ = a(V * this.lanczosLobes / 2), J = {}, p = {}, x = {};
            return y(0);
          },
          /**
           * bilinearFiltering
           * @param {Object} canvasEl Canvas element to apply filter to
           * @param {Number} oW Original Width
           * @param {Number} oH Original Height
           * @param {Number} dW Destination Width
           * @param {Number} dH Destination Height
           * @returns {ImageData}
           */
          bilinearFiltering: function(u, d, g, m, v) {
            var y, w, E, L, W, G, V, H, N, K, $, J, p = 0, x, b = this.rcpScaleX, S = this.rcpScaleY, k = 4 * (d - 1), C = u.imageData, _ = C.data, T = u.ctx.createImageData(m, v), P = T.data;
            for (V = 0; V < v; V++)
              for (H = 0; H < m; H++)
                for (W = o(b * H), G = o(S * V), N = b * H - W, K = S * V - G, x = 4 * (G * d + W), $ = 0; $ < 4; $++)
                  y = _[x + $], w = _[x + 4 + $], E = _[x + k + $], L = _[x + k + 4 + $], J = y * (1 - N) * (1 - K) + w * N * (1 - K) + E * K * (1 - N) + L * N * K, P[p++] = J;
            return T;
          },
          /**
           * hermiteFastResize
           * @param {Object} canvasEl Canvas element to apply filter to
           * @param {Number} oW Original Width
           * @param {Number} oH Original Height
           * @param {Number} dW Destination Width
           * @param {Number} dH Destination Height
           * @returns {ImageData}
           */
          hermiteFastResize: function(u, d, g, m, v) {
            for (var y = this.rcpScaleX, w = this.rcpScaleY, E = a(y / 2), L = a(w / 2), W = u.imageData, G = W.data, V = u.ctx.createImageData(m, v), H = V.data, N = 0; N < v; N++)
              for (var K = 0; K < m; K++) {
                for (var $ = (K + N * m) * 4, J = 0, p = 0, x = 0, b = 0, S = 0, k = 0, C = 0, _ = (N + 0.5) * w, T = o(N * w); T < (N + 1) * w; T++)
                  for (var P = e(_ - (T + 0.5)) / L, F = (K + 0.5) * y, D = P * P, B = o(K * y); B < (K + 1) * y; B++) {
                    var Y = e(F - (B + 0.5)) / E, z = i(D + Y * Y);
                    z > 1 && z < -1 || (J = 2 * z * z * z - 3 * z * z + 1, J > 0 && (Y = 4 * (B + T * d), C += J * G[Y + 3], x += J, G[Y + 3] < 255 && (J = J * G[Y + 3] / 250), b += J * G[Y], S += J * G[Y + 1], k += J * G[Y + 2], p += J));
                  }
                H[$] = b / p, H[$ + 1] = S / p, H[$ + 2] = k / p, H[$ + 3] = C / x;
              }
            return V;
          },
          /**
           * Returns object representation of an instance
           * @return {Object} Object representation of an instance
           */
          toObject: function() {
            return {
              type: this.type,
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              resizeType: this.resizeType,
              lanczosLobes: this.lanczosLobes
            };
          }
        }
      ), s.Image.filters.Resize.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Contrast = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Contrast.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Contrast",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`,
          /**
           * contrast value, range from -1 to 1.
           * @param {Number} contrast
           * @default 0
           */
          contrast: 0,
          mainParameter: "contrast",
          /**
           * Constructor
           * @memberOf fabric.Image.filters.Contrast.prototype
           * @param {Object} [options] Options object
           * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
           */
          /**
            * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
            *
            * @param {Object} options
            * @param {ImageData} options.imageData The Uint8Array to be filtered.
            */
          applyTo2d: function(i) {
            if (this.contrast !== 0) {
              var e = i.imageData, t, a, n = e.data, a = n.length, r = Math.floor(this.contrast * 255), l = 259 * (r + 255) / (255 * (259 - r));
              for (t = 0; t < a; t += 4)
                n[t] = l * (n[t] - 128) + 128, n[t + 1] = l * (n[t + 1] - 128) + 128, n[t + 2] = l * (n[t + 2] - 128) + 128;
            }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uContrast: i.getUniformLocation(e, "uContrast")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1f(e.uContrast, this.contrast);
          }
        }
      ), s.Image.filters.Contrast.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Saturation = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Saturation.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Saturation",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`,
          /**
           * Saturation value, from -1 to 1.
           * Increases/decreases the color saturation.
           * A value of 0 has no effect.
           * 
           * @param {Number} saturation
           * @default
           */
          saturation: 0,
          mainParameter: "saturation",
          /**
           * Constructor
           * @memberOf fabric.Image.filters.Saturate.prototype
           * @param {Object} [options] Options object
           * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
           */
          /**
           * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(i) {
            if (this.saturation !== 0) {
              var e = i.imageData, t = e.data, n = t.length, a = -this.saturation, r, l;
              for (r = 0; r < n; r += 4)
                l = Math.max(t[r], t[r + 1], t[r + 2]), t[r] += l !== t[r] ? (l - t[r]) * a : 0, t[r + 1] += l !== t[r + 1] ? (l - t[r + 1]) * a : 0, t[r + 2] += l !== t[r + 2] ? (l - t[r + 2]) * a : 0;
            }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uSaturation: i.getUniformLocation(e, "uSaturation")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1f(e.uSaturation, -this.saturation);
          }
        }
      ), s.Image.filters.Saturation.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Vibrance = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Vibrance.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Vibrance",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`,
          /**
           * Vibrance value, from -1 to 1.
           * Increases/decreases the saturation of more muted colors with less effect on saturated colors.
           * A value of 0 has no effect.
           * 
           * @param {Number} vibrance
           * @default
           */
          vibrance: 0,
          mainParameter: "vibrance",
          /**
           * Constructor
           * @memberOf fabric.Image.filters.Vibrance.prototype
           * @param {Object} [options] Options object
           * @param {Number} [options.vibrance=0] Vibrance value for the image (between -1 and 1)
           */
          /**
           * Apply the Vibrance operation to a Uint8ClampedArray representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
           */
          applyTo2d: function(i) {
            if (this.vibrance !== 0) {
              var e = i.imageData, t = e.data, n = t.length, a = -this.vibrance, r, l, u, d;
              for (r = 0; r < n; r += 4)
                l = Math.max(t[r], t[r + 1], t[r + 2]), u = (t[r] + t[r + 1] + t[r + 2]) / 3, d = Math.abs(l - u) * 2 / 255 * a, t[r] += l !== t[r] ? (l - t[r]) * d : 0, t[r + 1] += l !== t[r + 1] ? (l - t[r + 1]) * d : 0, t[r + 2] += l !== t[r + 2] ? (l - t[r + 2]) * d : 0;
            }
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uVibrance: i.getUniformLocation(e, "uVibrance")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform1f(e.uVibrance, -this.vibrance);
          }
        }
      ), s.Image.filters.Vibrance.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Blur = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Blur.prototype */
        {
          type: "Blur",
          /*
          'gl_FragColor = vec4(0.0);',
          'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
          'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
          'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
          'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
          'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
          'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
          'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
          'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
          'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
          'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
          'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
          'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
          'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
          'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
          'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
          */
          /* eslint-disable max-len */
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`,
          /* eslint-enable max-len */
          /**
           * blur value, in percentage of image dimensions.
           * specific to keep the image blur constant at different resolutions
           * range between 0 and 1.
           * @type Number
           * @default
           */
          blur: 0,
          mainParameter: "blur",
          applyTo: function(i) {
            i.webgl ? (this.aspectRatio = i.sourceWidth / i.sourceHeight, i.passes++, this._setupFrameBuffer(i), this.horizontal = !0, this.applyToWebGL(i), this._swapTextures(i), this._setupFrameBuffer(i), this.horizontal = !1, this.applyToWebGL(i), this._swapTextures(i)) : this.applyTo2d(i);
          },
          applyTo2d: function(i) {
            i.imageData = this.simpleBlur(i);
          },
          simpleBlur: function(i) {
            var e = i.filterBackend.resources, t, n, a = i.imageData.width, r = i.imageData.height;
            e.blurLayer1 || (e.blurLayer1 = s.util.createCanvasElement(), e.blurLayer2 = s.util.createCanvasElement()), t = e.blurLayer1, n = e.blurLayer2, (t.width !== a || t.height !== r) && (n.width = t.width = a, n.height = t.height = r);
            var l = t.getContext("2d"), u = n.getContext("2d"), d = 15, g, m, v, y, w = this.blur * 0.06 * 0.5;
            for (l.putImageData(i.imageData, 0, 0), u.clearRect(0, 0, a, r), y = -d; y <= d; y++)
              g = (Math.random() - 0.5) / 4, m = y / d, v = w * m * a + g, u.globalAlpha = 1 - Math.abs(m), u.drawImage(t, v, g), l.drawImage(n, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, n.width, n.height);
            for (y = -d; y <= d; y++)
              g = (Math.random() - 0.5) / 4, m = y / d, v = w * m * r + g, u.globalAlpha = 1 - Math.abs(m), u.drawImage(t, g, v), l.drawImage(n, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, n.width, n.height);
            i.ctx.drawImage(t, 0, 0);
            var E = i.ctx.getImageData(0, 0, t.width, t.height);
            return l.globalAlpha = 1, l.clearRect(0, 0, t.width, t.height), E;
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              delta: i.getUniformLocation(e, "uDelta")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            var t = this.chooseRightDelta();
            i.uniform2fv(e.delta, t);
          },
          /**
           * choose right value of image percentage to blur with
           * @returns {Array} a numeric array with delta values
           */
          chooseRightDelta: function() {
            var i = 1, e = [0, 0], t;
            return this.horizontal ? this.aspectRatio > 1 && (i = 1 / this.aspectRatio) : this.aspectRatio < 1 && (i = this.aspectRatio), t = i * this.blur * 0.12, this.horizontal ? e[0] = t : e[1] = t, e;
          }
        }
      ), h.Blur.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Gamma = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Gamma.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "Gamma",
          fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`,
          /**
           * Gamma array value, from 0.01 to 2.2.
           * @param {Array} gamma
           * @default
           */
          gamma: [1, 1, 1],
          /**
           * Describe the property that is the filter parameter
           * @param {String} m
           * @default
           */
          mainParameter: "gamma",
          /**
           * Constructor
           * @param {Object} [options] Options object
           */
          initialize: function(i) {
            this.gamma = [1, 1, 1], h.BaseFilter.prototype.initialize.call(this, i);
          },
          /**
           * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
           *
           * @param {Object} options
           * @param {ImageData} options.imageData The Uint8Array to be filtered.
           */
          applyTo2d: function(i) {
            var e = i.imageData, t = e.data, n = this.gamma, a = t.length, r = 1 / n[0], l = 1 / n[1], u = 1 / n[2], d;
            for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), d = 0, a = 256; d < a; d++)
              this.rVals[d] = Math.pow(d / 255, r) * 255, this.gVals[d] = Math.pow(d / 255, l) * 255, this.bVals[d] = Math.pow(d / 255, u) * 255;
            for (d = 0, a = t.length; d < a; d += 4)
              t[d] = this.rVals[t[d]], t[d + 1] = this.gVals[t[d + 1]], t[d + 2] = this.bVals[t[d + 2]];
          },
          /**
           * Return WebGL uniform locations for this filter's shader.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {WebGLShaderProgram} program This filter's compiled shader program.
           */
          getUniformLocations: function(i, e) {
            return {
              uGamma: i.getUniformLocation(e, "uGamma")
            };
          },
          /**
           * Send data from this filter to its shader program's uniforms.
           *
           * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
           * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
           */
          sendUniformData: function(i, e) {
            i.uniform3fv(e.uGamma, this.gamma);
          }
        }
      ), s.Image.filters.Gamma.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.Composed = o(
        h.BaseFilter,
        /** @lends fabric.Image.filters.Composed.prototype */
        {
          type: "Composed",
          /**
           * A non sparse array of filters to apply
           */
          subFilters: [],
          /**
           * Constructor
           * @param {Object} [options] Options object
           */
          initialize: function(i) {
            this.callSuper("initialize", i), this.subFilters = this.subFilters.slice(0);
          },
          /**
           * Apply this container's filters to the input image provided.
           *
           * @param {Object} options
           * @param {Number} options.passes The number of filters remaining to be applied.
           */
          applyTo: function(i) {
            i.passes += this.subFilters.length - 1, this.subFilters.forEach(function(e) {
              e.applyTo(i);
            });
          },
          /**
           * Serialize this filter into JSON.
           *
           * @returns {Object} A JSON representation of this filter.
           */
          toObject: function() {
            return s.util.object.extend(this.callSuper("toObject"), {
              subFilters: this.subFilters.map(function(i) {
                return i.toObject();
              })
            });
          },
          isNeutralState: function() {
            return !this.subFilters.some(function(i) {
              return !i.isNeutralState();
            });
          }
        }
      ), s.Image.filters.Composed.fromObject = function(i, e) {
        var t = i.subFilters || [], n = t.map(function(r) {
          return new s.Image.filters[r.type](r);
        }), a = new s.Image.filters.Composed({ subFilters: n });
        return e && e(a), a;
      };
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
      h.HueRotation = o(
        h.ColorMatrix,
        /** @lends fabric.Image.filters.HueRotation.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: "HueRotation",
          /**
           * HueRotation value, from -1 to 1.
           * the unit is radians
           * @param {Number} myParameter
           * @default
           */
          rotation: 0,
          /**
           * Describe the property that is the filter parameter
           * @param {String} m
           * @default
           */
          mainParameter: "rotation",
          calculateMatrix: function() {
            var i = this.rotation * Math.PI, e = s.util.cos(i), t = s.util.sin(i), n = 1 / 3, a = Math.sqrt(n) * t, r = 1 - e;
            this.matrix = [
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0
            ], this.matrix[0] = e + r / 3, this.matrix[1] = n * r - a, this.matrix[2] = n * r + a, this.matrix[5] = n * r + a, this.matrix[6] = e + n * r, this.matrix[7] = n * r - a, this.matrix[10] = n * r - a, this.matrix[11] = n * r + a, this.matrix[12] = e + n * r;
          },
          /**
           * HueRotation isNeutralState implementation
           * Used only in image applyFilters to discard filters that will not have an effect
           * on the image
           * @param {Object} options
           **/
          isNeutralState: function(i) {
            return this.calculateMatrix(), h.BaseFilter.prototype.isNeutralState.call(this, i);
          },
          /**
           * Apply this filter to the input image data provided.
           *
           * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
           *
           * @param {Object} options
           * @param {Number} options.passes The number of filters remaining to be executed
           * @param {Boolean} options.webgl Whether to use webgl to render the filter.
           * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
           * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
           * @param {WebGLRenderingContext} options.context The GL context used for rendering.
           * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
           */
          applyTo: function(i) {
            this.calculateMatrix(), h.BaseFilter.prototype.applyTo.call(this, i);
          }
        }
      ), s.Image.filters.HueRotation.fromObject = s.Image.filters.BaseFilter.fromObject;
    })(q), (function(c) {
      var s = c.fabric || (c.fabric = {}), h = s.util.object.clone;
      if (s.Text) {
        s.warn("fabric.Text is already defined");
        return;
      }
      var o = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
      s.Text = s.util.createClass(
        s.Object,
        /** @lends fabric.Text.prototype */
        {
          /**
           * Properties which when set cause object to change dimensions
           * @type Array
           * @private
           */
          _dimensionAffectingProps: [
            "fontSize",
            "fontWeight",
            "fontFamily",
            "fontStyle",
            "lineHeight",
            "text",
            "charSpacing",
            "textAlign",
            "styles",
            "path",
            "pathStartOffset",
            "pathSide",
            "pathAlign"
          ],
          /**
           * @private
           */
          _reNewline: /\r?\n/,
          /**
           * Use this regular expression to filter for whitespaces that is not a new line.
           * Mostly used when text is 'justify' aligned.
           * @private
           */
          _reSpacesAndTabs: /[ \t\r]/g,
          /**
           * Use this regular expression to filter for whitespace that is not a new line.
           * Mostly used when text is 'justify' aligned.
           * @private
           */
          _reSpaceAndTab: /[ \t\r]/,
          /**
           * Use this regular expression to filter consecutive groups of non spaces.
           * Mostly used when text is 'justify' aligned.
           * @private
           */
          _reWords: /\S+/g,
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "text",
          /**
           * Font size (in pixels)
           * @type Number
           * @default
           */
          fontSize: 40,
          /**
           * Font weight (e.g. bold, normal, 400, 600, 800)
           * @type {(Number|String)}
           * @default
           */
          fontWeight: "normal",
          /**
           * Font family
           * @type String
           * @default
           */
          fontFamily: "Times New Roman",
          /**
           * Text decoration underline.
           * @type Boolean
           * @default
           */
          underline: !1,
          /**
           * Text decoration overline.
           * @type Boolean
           * @default
           */
          overline: !1,
          /**
           * Text decoration linethrough.
           * @type Boolean
           * @default
           */
          linethrough: !1,
          /**
           * Text alignment. Possible values: "left", "center", "right", "justify",
           * "justify-left", "justify-center" or "justify-right".
           * @type String
           * @default
           */
          textAlign: "left",
          /**
           * Font style . Possible values: "", "normal", "italic" or "oblique".
           * @type String
           * @default
           */
          fontStyle: "normal",
          /**
           * Line height
           * @type Number
           * @default
           */
          lineHeight: 1.16,
          /**
           * Superscript schema object (minimum overlap)
           * @type {Object}
           * @default
           */
          superscript: {
            size: 0.6,
            // fontSize factor
            baseline: -0.35
            // baseline-shift factor (upwards)
          },
          /**
           * Subscript schema object (minimum overlap)
           * @type {Object}
           * @default
           */
          subscript: {
            size: 0.6,
            // fontSize factor
            baseline: 0.11
            // baseline-shift factor (downwards)
          },
          /**
           * Background color of text lines
           * @type String
           * @default
           */
          textBackgroundColor: "",
          /**
           * List of properties to consider when checking if
           * state of an object is changed ({@link fabric.Object#hasStateChanged})
           * as well as for history (undo/redo) purposes
           * @type Array
           */
          stateProperties: s.Object.prototype.stateProperties.concat(o),
          /**
           * List of properties to consider when checking if cache needs refresh
           * @type Array
           */
          cacheProperties: s.Object.prototype.cacheProperties.concat(o),
          /**
           * When defined, an object is rendered via stroke and this property specifies its color.
           * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
           * @type String
           * @default
           */
          stroke: null,
          /**
           * Shadow object representing shadow of this shape.
           * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
           * @type fabric.Shadow
           * @default
           */
          shadow: null,
          /**
           * fabric.Path that the text should follow.
           * since 4.6.0 the path will be drawn automatically.
           * if you want to make the path visible, give it a stroke and strokeWidth or fill value
           * if you want it to be hidden, assign visible = false to the path.
           * This feature is in BETA, and SVG import/export is not yet supported.
           * @type fabric.Path
           * @example
           * var textPath = new fabric.Text('Text on a path', {
           *     top: 150,
           *     left: 150,
           *     textAlign: 'center',
           *     charSpacing: -50,
           *     path: new fabric.Path('M 0 0 C 50 -100 150 -100 200 0', {
           *         strokeWidth: 1,
           *         visible: false
           *     }),
           *     pathSide: 'left',
           *     pathStartOffset: 0
           * });
           * @default
           */
          path: null,
          /**
           * Offset amount for text path starting position
           * Only used when text has a path
           * @type Number
           * @default
           */
          pathStartOffset: 0,
          /**
           * Which side of the path the text should be drawn on.
           * Only used when text has a path
           * @type {String} 'left|right'
           * @default
           */
          pathSide: "left",
          /**
           * How text is aligned to the path. This property determines
           * the perpendicular position of each character relative to the path.
           * (one of "baseline", "center", "ascender", "descender")
           * This feature is in BETA, and its behavior may change
           * @type String
           * @default
           */
          pathAlign: "baseline",
          /**
           * @private
           */
          _fontSizeFraction: 0.222,
          /**
           * @private
           */
          offsets: {
            underline: 0.1,
            linethrough: -0.315,
            overline: -0.88
          },
          /**
           * Text Line proportion to font Size (in pixels)
           * @type Number
           * @default
           */
          _fontSizeMult: 1.13,
          /**
           * additional space between characters
           * expressed in thousands of em unit
           * @type Number
           * @default
           */
          charSpacing: 0,
          /**
           * Object containing character styles - top-level properties -> line numbers,
           * 2nd-level properties - character numbers
           * @type Object
           * @default
           */
          styles: null,
          /**
           * Reference to a context to measure text char or couple of chars
           * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
           * once created it will be referenced on fabric._measuringContext to avoid creating a canvas for every
           * text object created.
           * @type {CanvasRenderingContext2D}
           * @default
           */
          _measuringContext: null,
          /**
           * Baseline shift, styles only, keep at 0 for the main text object
           * @type {Number}
           * @default
           */
          deltaY: 0,
          /**
           * WARNING: EXPERIMENTAL. NOT SUPPORTED YET
           * determine the direction of the text.
           * This has to be set manually together with textAlign and originX for proper
           * experience.
           * some interesting link for the future
           * https://www.w3.org/International/questions/qa-bidi-unicode-controls
           * @since 4.5.0
           * @type {String} 'ltr|rtl'
           * @default
           */
          direction: "ltr",
          /**
           * Array of properties that define a style unit (of 'styles').
           * @type {Array}
           * @default
           */
          _styleProperties: [
            "stroke",
            "strokeWidth",
            "fill",
            "fontFamily",
            "fontSize",
            "fontWeight",
            "fontStyle",
            "underline",
            "overline",
            "linethrough",
            "deltaY",
            "textBackgroundColor"
          ],
          /**
           * contains characters bounding boxes
           */
          __charBounds: [],
          /**
           * use this size when measuring text. To avoid IE11 rounding errors
           * @type {Number}
           * @default
           * @readonly
           * @private
           */
          CACHE_FONT_SIZE: 400,
          /**
           * contains the min text width to avoid getting 0
           * @type {Number}
           * @default
           */
          MIN_TEXT_WIDTH: 2,
          /**
           * Constructor
           * @param {String} text Text string
           * @param {Object} [options] Options object
           * @return {fabric.Text} thisArg
           */
          initialize: function(i, e) {
            this.styles = e ? e.styles || {} : {}, this.text = i, this.__skipDimension = !0, this.callSuper("initialize", e), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
          },
          /**
           * If text has a path, it will add the extra information needed
           * for path and text calculations
           * @return {fabric.Text} thisArg
           */
          setPathInfo: function() {
            var i = this.path;
            i && (i.segmentsInfo = s.util.getPathSegmentsInfo(i.path));
          },
          /**
           * Return a context for measurement of text string.
           * if created it gets stored for reuse
           * this is for internal use, please do not use it
           * @private
           * @param {String} text Text string
           * @param {Object} [options] Options object
           * @return {fabric.Text} thisArg
           */
          getMeasuringContext: function() {
            return s._measuringContext || (s._measuringContext = this.canvas && this.canvas.contextCache || s.util.createCanvasElement().getContext("2d")), s._measuringContext;
          },
          /**
           * @private
           * Divides text into lines of text and lines of graphemes.
           */
          _splitText: function() {
            var i = this._splitTextIntoLines(this.text);
            return this.textLines = i.lines, this._textLines = i.graphemeLines, this._unwrappedTextLines = i._unwrappedLines, this._text = i.graphemeText, i;
          },
          /**
           * Initialize or update text dimensions.
           * Updates this.width and this.height with the proper values.
           * Does not return dimensions.
           */
          initDimensions: function() {
            if (!this.__skipDimension) {
              if (this._splitText(), this._clearCache(), this.path) {
                var i = this.getHeightOfLine(0) * 1.1;
                this.width = this.path.width + i, this.height = this.path.height + i;
              } else
                this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight();
              this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" });
            }
          },
          /**
           * Enlarge space boxes and shift the others
           */
          enlargeSpaces: function() {
            for (var i, e, t, n, a, r, l, u = 0, d = this._textLines.length; u < d; u++)
              if (!(this.textAlign !== "justify" && (u === d - 1 || this.isEndOfWrapping(u))) && (n = 0, a = this._textLines[u], e = this.getLineWidth(u), e < this.width && (l = this.textLines[u].match(this._reSpacesAndTabs)))) {
                t = l.length, i = (this.width - e) / t;
                for (var g = 0, m = a.length; g <= m; g++)
                  r = this.__charBounds[u][g], this._reSpaceAndTab.test(a[g]) ? (r.width += i, r.kernedWidth += i, r.left += n, n += i) : r.left += n;
              }
          },
          /**
           * Detect if the text line is ended with an hard break
           * text and itext do not have wrapping, return false
           * @return {Boolean}
           */
          isEndOfWrapping: function(i) {
            return i === this._textLines.length - 1;
          },
          /**
           * Detect if a line has a linebreak and so we need to account for it when moving
           * and counting style.
           * It return always for text and Itext.
           * @return Number
           */
          missingNewlineOffset: function() {
            return 1;
          },
          /**
           * Returns string representation of an instance
           * @return {String} String representation of text object
           */
          toString: function() {
            return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
          },
          /**
           * Return the dimension and the zoom level needed to create a cache canvas
           * big enough to host the object to be cached.
           * @private
           * @param {Object} dim.x width of object to be cached
           * @param {Object} dim.y height of object to be cached
           * @return {Object}.width width of canvas
           * @return {Object}.height height of canvas
           * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
           * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
           */
          _getCacheCanvasDimensions: function() {
            var i = this.callSuper("_getCacheCanvasDimensions"), e = this.fontSize;
            return i.width += e * i.zoomX, i.height += e * i.zoomY, i;
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(i) {
            var e = this.path;
            e && !e.isNotVisible() && e._render(i), this._setTextStyles(i), this._renderTextLinesBackground(i), this._renderTextDecoration(i, "underline"), this._renderText(i), this._renderTextDecoration(i, "overline"), this._renderTextDecoration(i, "linethrough");
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderText: function(i) {
            this.paintFirst === "stroke" ? (this._renderTextStroke(i), this._renderTextFill(i)) : (this._renderTextFill(i), this._renderTextStroke(i));
          },
          /**
           * Set the font parameter of the context with the object properties or with charStyle
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Object} [charStyle] object with font style properties
           * @param {String} [charStyle.fontFamily] Font Family
           * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
           * @param {String} [charStyle.fontWeight] Font weight
           * @param {String} [charStyle.fontStyle] Font style (italic|normal)
           */
          _setTextStyles: function(i, e, t) {
            if (i.textBaseline = "alphabetic", this.path)
              switch (this.pathAlign) {
                case "center":
                  i.textBaseline = "middle";
                  break;
                case "ascender":
                  i.textBaseline = "top";
                  break;
                case "descender":
                  i.textBaseline = "bottom";
                  break;
              }
            i.font = this._getFontDeclaration(e, t);
          },
          /**
           * calculate and return the text Width measuring each line.
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @return {Number} Maximum width of fabric.Text object
           */
          calcTextWidth: function() {
            for (var i = this.getLineWidth(0), e = 1, t = this._textLines.length; e < t; e++) {
              var n = this.getLineWidth(e);
              n > i && (i = n);
            }
            return i;
          },
          /**
           * @private
           * @param {String} method Method name ("fillText" or "strokeText")
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {String} line Text to render
           * @param {Number} left Left position of text
           * @param {Number} top Top position of text
           * @param {Number} lineIndex Index of a line in a text
           */
          _renderTextLine: function(i, e, t, n, a, r) {
            this._renderChars(i, e, t, n, a, r);
          },
          /**
           * Renders the text background for lines, taking care of style
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderTextLinesBackground: function(i) {
            if (!(!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))) {
              for (var e, t, n = i.fillStyle, a, r, l = this._getLeftOffset(), u = this._getTopOffset(), d = 0, g = 0, m, v, y = this.path, w, E = 0, L = this._textLines.length; E < L; E++) {
                if (e = this.getHeightOfLine(E), !this.textBackgroundColor && !this.styleHas("textBackgroundColor", E)) {
                  u += e;
                  continue;
                }
                a = this._textLines[E], t = this._getLineLeftOffset(E), g = 0, d = 0, r = this.getValueOfPropertyAt(E, 0, "textBackgroundColor");
                for (var W = 0, G = a.length; W < G; W++)
                  m = this.__charBounds[E][W], v = this.getValueOfPropertyAt(E, W, "textBackgroundColor"), y ? (i.save(), i.translate(m.renderLeft, m.renderTop), i.rotate(m.angle), i.fillStyle = v, v && i.fillRect(
                    -m.width / 2,
                    -e / this.lineHeight * (1 - this._fontSizeFraction),
                    m.width,
                    e / this.lineHeight
                  ), i.restore()) : v !== r ? (w = l + t + d, this.direction === "rtl" && (w = this.width - w - g), i.fillStyle = r, r && i.fillRect(
                    w,
                    u,
                    g,
                    e / this.lineHeight
                  ), d = m.left, g = m.width, r = v) : g += m.kernedWidth;
                v && !y && (w = l + t + d, this.direction === "rtl" && (w = this.width - w - g), i.fillStyle = v, i.fillRect(
                  w,
                  u,
                  g,
                  e / this.lineHeight
                )), u += e;
              }
              i.fillStyle = n, this._removeShadow(i);
            }
          },
          /**
           * @private
           * @param {Object} decl style declaration for cache
           * @param {String} decl.fontFamily fontFamily
           * @param {String} decl.fontStyle fontStyle
           * @param {String} decl.fontWeight fontWeight
           * @return {Object} reference to cache
           */
          getFontCache: function(i) {
            var e = i.fontFamily.toLowerCase();
            s.charWidthsCache[e] || (s.charWidthsCache[e] = {});
            var t = s.charWidthsCache[e], n = i.fontStyle.toLowerCase() + "_" + (i.fontWeight + "").toLowerCase();
            return t[n] || (t[n] = {}), t[n];
          },
          /**
           * measure and return the width of a single character.
           * possibly overridden to accommodate different measure logic or
           * to hook some external lib for character measurement
           * @private
           * @param {String} _char, char to be measured
           * @param {Object} charStyle style of char to be measured
           * @param {String} [previousChar] previous char
           * @param {Object} [prevCharStyle] style of previous char
           */
          _measureChar: function(i, e, t, n) {
            var a = this.getFontCache(e), r = this._getFontDeclaration(e), l = this._getFontDeclaration(n), u = t + i, d = r === l, g, m, v, y = e.fontSize / this.CACHE_FONT_SIZE, w;
            if (t && a[t] !== void 0 && (v = a[t]), a[i] !== void 0 && (w = g = a[i]), d && a[u] !== void 0 && (m = a[u], w = m - v), g === void 0 || v === void 0 || m === void 0) {
              var E = this.getMeasuringContext();
              this._setTextStyles(E, e, !0);
            }
            return g === void 0 && (w = g = E.measureText(i).width, a[i] = g), v === void 0 && d && t && (v = E.measureText(t).width, a[t] = v), d && m === void 0 && (m = E.measureText(u).width, a[u] = m, w = m - v), { width: g * y, kernedWidth: w * y };
          },
          /**
           * Computes height of character at given position
           * @param {Number} line the line index number
           * @param {Number} _char the character index number
           * @return {Number} fontSize of the character
           */
          getHeightOfChar: function(i, e) {
            return this.getValueOfPropertyAt(i, e, "fontSize");
          },
          /**
           * measure a text line measuring all characters.
           * @param {Number} lineIndex line number
           * @return {Number} Line width
           */
          measureLine: function(i) {
            var e = this._measureLine(i);
            return this.charSpacing !== 0 && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e;
          },
          /**
           * measure every grapheme of a line, populating __charBounds
           * @param {Number} lineIndex
           * @return {Object} object.width total width of characters
           * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
           */
          _measureLine: function(i) {
            var e = 0, t, n, a = this._textLines[i], r, l, u = 0, d = new Array(a.length), g = 0, m, v, y = this.path, w = this.pathSide === "right";
            for (this.__charBounds[i] = d, t = 0; t < a.length; t++)
              n = a[t], l = this._getGraphemeBox(n, i, t, r), d[t] = l, e += l.kernedWidth, r = n;
            if (d[t] = {
              left: l ? l.left + l.width : 0,
              width: 0,
              kernedWidth: 0,
              height: this.fontSize
            }, y) {
              switch (v = y.segmentsInfo[y.segmentsInfo.length - 1].length, m = s.util.getPointOnPath(y.path, 0, y.segmentsInfo), m.x += y.pathOffset.x, m.y += y.pathOffset.y, this.textAlign) {
                case "left":
                  g = w ? v - e : 0;
                  break;
                case "center":
                  g = (v - e) / 2;
                  break;
                case "right":
                  g = w ? 0 : v - e;
                  break;
              }
              for (g += this.pathStartOffset * (w ? -1 : 1), t = w ? a.length - 1 : 0; w ? t >= 0 : t < a.length; w ? t-- : t++)
                l = d[t], g > v ? g %= v : g < 0 && (g += v), this._setGraphemeOnPath(g, l, m), g += l.kernedWidth;
            }
            return { width: e, numOfSpaces: u };
          },
          /**
           * Calculate the angle  and the left,top position of the char that follow a path.
           * It appends it to graphemeInfo to be reused later at rendering
           * @private
           * @param {Number} positionInPath to be measured
           * @param {Object} graphemeInfo current grapheme box information
           * @param {Object} startingPoint position of the point
           */
          _setGraphemeOnPath: function(i, e, t) {
            var n = i + e.kernedWidth / 2, a = this.path, r = s.util.getPointOnPath(a.path, n, a.segmentsInfo);
            e.renderLeft = r.x - t.x, e.renderTop = r.y - t.y, e.angle = r.angle + (this.pathSide === "right" ? Math.PI : 0);
          },
          /**
           * Measure and return the info of a single grapheme.
           * needs the the info of previous graphemes already filled
           * @private
           * @param {String} grapheme to be measured
           * @param {Number} lineIndex index of the line where the char is
           * @param {Number} charIndex position in the line
           * @param {String} [prevGrapheme] character preceding the one to be measured
           */
          _getGraphemeBox: function(i, e, t, n, a) {
            var r = this.getCompleteStyleDeclaration(e, t), l = n ? this.getCompleteStyleDeclaration(e, t - 1) : {}, u = this._measureChar(i, r, n, l), d = u.kernedWidth, g = u.width, m;
            this.charSpacing !== 0 && (m = this._getWidthOfCharSpacing(), g += m, d += m);
            var v = {
              width: g,
              left: 0,
              height: r.fontSize,
              kernedWidth: d,
              deltaY: r.deltaY
            };
            if (t > 0 && !a) {
              var y = this.__charBounds[e][t - 1];
              v.left = y.left + y.width + u.kernedWidth - u.width;
            }
            return v;
          },
          /**
           * Calculate height of line at 'lineIndex'
           * @param {Number} lineIndex index of line to calculate
           * @return {Number}
           */
          getHeightOfLine: function(i) {
            if (this.__lineHeights[i])
              return this.__lineHeights[i];
            for (var e = this._textLines[i], t = this.getHeightOfChar(i, 0), n = 1, a = e.length; n < a; n++)
              t = Math.max(this.getHeightOfChar(i, n), t);
            return this.__lineHeights[i] = t * this.lineHeight * this._fontSizeMult;
          },
          /**
           * Calculate text box height
           */
          calcTextHeight: function() {
            for (var i, e = 0, t = 0, n = this._textLines.length; t < n; t++)
              i = this.getHeightOfLine(t), e += t === n - 1 ? i / this.lineHeight : i;
            return e;
          },
          /**
           * @private
           * @return {Number} Left offset
           */
          _getLeftOffset: function() {
            return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
          },
          /**
           * @private
           * @return {Number} Top offset
           */
          _getTopOffset: function() {
            return -this.height / 2;
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {String} method Method name ("fillText" or "strokeText")
           */
          _renderTextCommon: function(i, e) {
            i.save();
            for (var t = 0, n = this._getLeftOffset(), a = this._getTopOffset(), r = 0, l = this._textLines.length; r < l; r++) {
              var u = this.getHeightOfLine(r), d = u / this.lineHeight, g = this._getLineLeftOffset(r);
              this._renderTextLine(
                e,
                i,
                this._textLines[r],
                n + g,
                a + t + d,
                r
              ), t += u;
            }
            i.restore();
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderTextFill: function(i) {
            !this.fill && !this.styleHas("fill") || this._renderTextCommon(i, "fillText");
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderTextStroke: function(i) {
            (!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(i), i.save(), this._setLineDash(i, this.strokeDashArray), i.beginPath(), this._renderTextCommon(i, "strokeText"), i.closePath(), i.restore());
          },
          /**
           * @private
           * @param {String} method fillText or strokeText.
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Array} line Content of the line, splitted in an array by grapheme
           * @param {Number} left
           * @param {Number} top
           * @param {Number} lineIndex
           */
          _renderChars: function(i, e, t, n, a, r) {
            var l = this.getHeightOfLine(r), u = this.textAlign.indexOf("justify") !== -1, d, g, m = "", v, y = 0, w, E = this.path, L = !u && this.charSpacing === 0 && this.isEmptyStyles(r) && !E, W = this.direction === "ltr", G = this.direction === "ltr" ? 1 : -1, V, H = e.canvas.getAttribute("dir");
            if (e.save(), H !== this.direction && (e.canvas.setAttribute("dir", W ? "ltr" : "rtl"), e.direction = W ? "ltr" : "rtl", e.textAlign = W ? "left" : "right"), a -= l * this._fontSizeFraction / this.lineHeight, L) {
              this._renderChar(i, e, r, 0, t.join(""), n, a, l), e.restore();
              return;
            }
            for (var N = 0, K = t.length - 1; N <= K; N++)
              w = N === K || this.charSpacing || E, m += t[N], v = this.__charBounds[r][N], y === 0 ? (n += G * (v.kernedWidth - v.width), y += v.width) : y += v.kernedWidth, u && !w && this._reSpaceAndTab.test(t[N]) && (w = !0), w || (d = d || this.getCompleteStyleDeclaration(r, N), g = this.getCompleteStyleDeclaration(r, N + 1), w = s.util.hasStyleChanged(d, g, !1)), w && (E ? (e.save(), e.translate(v.renderLeft, v.renderTop), e.rotate(v.angle), this._renderChar(i, e, r, N, m, -y / 2, 0, l), e.restore()) : (V = n, this._renderChar(i, e, r, N, m, V, a, l)), m = "", d = g, n += G * y, y = 0);
            e.restore();
          },
          /**
           * This function try to patch the missing gradientTransform on canvas gradients.
           * transforming a context to transform the gradient, is going to transform the stroke too.
           * we want to transform the gradient but not the stroke operation, so we create
           * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
           * this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
           * is limited.
           * @private
           * @param {fabric.Gradient} filler a fabric gradient instance
           * @return {CanvasPattern} a pattern to use as fill/stroke style
           */
          _applyPatternGradientTransformText: function(i) {
            var e = s.util.createCanvasElement(), t, n = this.width + this.strokeWidth, a = this.height + this.strokeWidth;
            return e.width = n, e.height = a, t = e.getContext("2d"), t.beginPath(), t.moveTo(0, 0), t.lineTo(n, 0), t.lineTo(n, a), t.lineTo(0, a), t.closePath(), t.translate(n / 2, a / 2), t.fillStyle = i.toLive(t), this._applyPatternGradientTransform(t, i), t.fill(), t.createPattern(e, "no-repeat");
          },
          handleFiller: function(i, e, t) {
            var n, a;
            return t.toLive ? t.gradientUnits === "percentage" || t.gradientTransform || t.patternTransform ? (n = -this.width / 2, a = -this.height / 2, i.translate(n, a), i[e] = this._applyPatternGradientTransformText(t), { offsetX: n, offsetY: a }) : (i[e] = t.toLive(i, this), this._applyPatternGradientTransform(i, t)) : (i[e] = t, { offsetX: 0, offsetY: 0 });
          },
          _setStrokeStyles: function(i, e) {
            return i.lineWidth = e.strokeWidth, i.lineCap = this.strokeLineCap, i.lineDashOffset = this.strokeDashOffset, i.lineJoin = this.strokeLineJoin, i.miterLimit = this.strokeMiterLimit, this.handleFiller(i, "strokeStyle", e.stroke);
          },
          _setFillStyles: function(i, e) {
            return this.handleFiller(i, "fillStyle", e.fill);
          },
          /**
           * @private
           * @param {String} method
           * @param {CanvasRenderingContext2D} ctx Context to render on
           * @param {Number} lineIndex
           * @param {Number} charIndex
           * @param {String} _char
           * @param {Number} left Left coordinate
           * @param {Number} top Top coordinate
           * @param {Number} lineHeight Height of the line
           */
          _renderChar: function(i, e, t, n, a, r, l) {
            var u = this._getStyleDeclaration(t, n), d = this.getCompleteStyleDeclaration(t, n), g = i === "fillText" && d.fill, m = i === "strokeText" && d.stroke && d.strokeWidth, v, y;
            !m && !g || (e.save(), g && (v = this._setFillStyles(e, d)), m && (y = this._setStrokeStyles(e, d)), e.font = this._getFontDeclaration(d), u && u.textBackgroundColor && this._removeShadow(e), u && u.deltaY && (l += u.deltaY), g && e.fillText(a, r - v.offsetX, l - v.offsetY), m && e.strokeText(a, r - y.offsetX, l - y.offsetY), e.restore());
          },
          /**
           * Turns the character into a 'superior figure' (i.e. 'superscript')
           * @param {Number} start selection start
           * @param {Number} end selection end
           * @returns {fabric.Text} thisArg
           * @chainable
           */
          setSuperscript: function(i, e) {
            return this._setScript(i, e, this.superscript);
          },
          /**
           * Turns the character into an 'inferior figure' (i.e. 'subscript')
           * @param {Number} start selection start
           * @param {Number} end selection end
           * @returns {fabric.Text} thisArg
           * @chainable
           */
          setSubscript: function(i, e) {
            return this._setScript(i, e, this.subscript);
          },
          /**
           * Applies 'schema' at given position
           * @private
           * @param {Number} start selection start
           * @param {Number} end selection end
           * @param {Number} schema
           * @returns {fabric.Text} thisArg
           * @chainable
           */
          _setScript: function(i, e, t) {
            var n = this.get2DCursorLocation(i, !0), a = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "fontSize"), r = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "deltaY"), l = { fontSize: a * t.size, deltaY: r + a * t.baseline };
            return this.setSelectionStyles(l, i, e), this;
          },
          /**
           * @private
           * @param {Number} lineIndex index text line
           * @return {Number} Line left offset
           */
          _getLineLeftOffset: function(i) {
            var e = this.getLineWidth(i), t = this.width - e, n = this.textAlign, a = this.direction, l, r = 0, l = this.isEndOfWrapping(i);
            return n === "justify" || n === "justify-center" && !l || n === "justify-right" && !l || n === "justify-left" && !l ? 0 : (n === "center" && (r = t / 2), n === "right" && (r = t), n === "justify-center" && (r = t / 2), n === "justify-right" && (r = t), a === "rtl" && (r -= t), r);
          },
          /**
           * @private
           */
          _clearCache: function() {
            this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
          },
          /**
           * @private
           */
          _shouldClearDimensionCache: function() {
            var i = this._forceClearCache;
            return i || (i = this.hasStateChanged("_dimensionAffectingProps")), i && (this.dirty = !0, this._forceClearCache = !1), i;
          },
          /**
           * Measure a single line given its index. Used to calculate the initial
           * text bounding box. The values are calculated and stored in __lineWidths cache.
           * @private
           * @param {Number} lineIndex line number
           * @return {Number} Line width
           */
          getLineWidth: function(i) {
            if (this.__lineWidths[i] !== void 0)
              return this.__lineWidths[i];
            var e = this.measureLine(i), t = e.width;
            return this.__lineWidths[i] = t, t;
          },
          _getWidthOfCharSpacing: function() {
            return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
          },
          /**
           * Retrieves the value of property at given character position
           * @param {Number} lineIndex the line number
           * @param {Number} charIndex the character number
           * @param {String} property the property name
           * @returns the value of 'property'
           */
          getValueOfPropertyAt: function(i, e, t) {
            var n = this._getStyleDeclaration(i, e);
            return n && typeof n[t] < "u" ? n[t] : this[t];
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _renderTextDecoration: function(i, e) {
            if (!(!this[e] && !this.styleHas(e))) {
              i.save(), (e === "overline" || e === "linethrough") && this._removeShadow(i);
              for (var t, n, a, r, l, u, d, g, m = this._getLeftOffset(), v = this._getTopOffset(), y, w, E, L, W, G, V, H, N = this.path, K = this._getWidthOfCharSpacing(), $ = this.offsets[e], J = 0, p = this._textLines.length; J < p; J++) {
                if (t = this.getHeightOfLine(J), !this[e] && !this.styleHas(e, J)) {
                  v += t;
                  continue;
                }
                d = this._textLines[J], G = t / this.lineHeight, r = this._getLineLeftOffset(J), w = 0, E = 0, g = this.getValueOfPropertyAt(J, 0, e), H = this.getValueOfPropertyAt(J, 0, "fill"), y = v + G * (1 - this._fontSizeFraction), n = this.getHeightOfChar(J, 0), l = this.getValueOfPropertyAt(J, 0, "deltaY");
                for (var x = 0, b = d.length; x < b; x++)
                  if (L = this.__charBounds[J][x], W = this.getValueOfPropertyAt(J, x, e), V = this.getValueOfPropertyAt(J, x, "fill"), a = this.getHeightOfChar(J, x), u = this.getValueOfPropertyAt(J, x, "deltaY"), N && W && V)
                    i.save(), i.fillStyle = H, i.translate(L.renderLeft, L.renderTop), i.rotate(L.angle), i.fillRect(
                      -L.kernedWidth / 2,
                      $ * a + u,
                      L.kernedWidth,
                      this.fontSize / 15
                    ), i.restore();
                  else if ((W !== g || V !== H || a !== n || u !== l) && E > 0) {
                    var S = m + r + w;
                    this.direction === "rtl" && (S = this.width - S - E), g && H && (i.fillStyle = H, i.fillRect(
                      S,
                      y + $ * n + l,
                      E,
                      this.fontSize / 15
                    )), w = L.left, E = L.width, g = W, H = V, n = a, l = u;
                  } else
                    E += L.kernedWidth;
                var S = m + r + w;
                this.direction === "rtl" && (S = this.width - S - E), i.fillStyle = V, W && V && i.fillRect(
                  S,
                  y + $ * n + l,
                  E - K,
                  this.fontSize / 15
                ), v += t;
              }
              i.restore();
            }
          },
          /**
           * return font declaration string for canvas context
           * @param {Object} [styleObject] object
           * @returns {String} font declaration formatted for canvas context.
           */
          _getFontDeclaration: function(i, e) {
            var t = i || this, n = this.fontFamily, a = s.Text.genericFonts.indexOf(n.toLowerCase()) > -1, r = n === void 0 || n.indexOf("'") > -1 || n.indexOf(",") > -1 || n.indexOf('"') > -1 || a ? t.fontFamily : '"' + t.fontFamily + '"';
            return [
              // node-canvas needs "weight style", while browsers need "style weight"
              // verify if this can be fixed in JSDOM
              s.isLikelyNode ? t.fontWeight : t.fontStyle,
              s.isLikelyNode ? t.fontStyle : t.fontWeight,
              e ? this.CACHE_FONT_SIZE + "px" : t.fontSize + "px",
              r
            ].join(" ");
          },
          /**
           * Renders text instance on a specified context
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          render: function(i) {
            this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", i)));
          },
          /**
           * Returns the text as an array of lines.
           * @param {String} text text to split
           * @returns {Array} Lines in the text
           */
          _splitTextIntoLines: function(i) {
            for (var e = i.split(this._reNewline), t = new Array(e.length), n = [`
`], a = [], r = 0; r < e.length; r++)
              t[r] = s.util.string.graphemeSplit(e[r]), a = a.concat(t[r], n);
            return a.pop(), { _unwrappedLines: t, lines: e, graphemeText: a, graphemeLines: t };
          },
          /**
           * Returns object representation of an instance
           * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
           * @return {Object} Object representation of an instance
           */
          toObject: function(i) {
            var e = o.concat(i), t = this.callSuper("toObject", e);
            return t.styles = s.util.stylesToArray(this.styles, this.text), t.path && (t.path = this.path.toObject()), t;
          },
          /**
           * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
           * @param {String|Object} key Property name or object (if object, iterate over the object properties)
           * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
           * @return {fabric.Object} thisArg
           * @chainable
           */
          set: function(i, e) {
            this.callSuper("set", i, e);
            var t = !1, n = !1;
            if (typeof i == "object")
              for (var a in i)
                a === "path" && this.setPathInfo(), t = t || this._dimensionAffectingProps.indexOf(a) !== -1, n = n || a === "path";
            else
              t = this._dimensionAffectingProps.indexOf(i) !== -1, n = i === "path";
            return n && this.setPathInfo(), t && (this.initDimensions(), this.setCoords()), this;
          },
          /**
           * Returns complexity of an instance
           * @return {Number} complexity
           */
          complexity: function() {
            return 1;
          }
        }
      ), s.Text.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(
        "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")
      ), s.Text.DEFAULT_SVG_FONT_SIZE = 16, s.Text.fromElement = function(i, e, t) {
        if (!i)
          return e(null);
        var n = s.parseAttributes(i, s.Text.ATTRIBUTE_NAMES), a = n.textAnchor || "left";
        if (t = s.util.object.extend(t ? h(t) : {}, n), t.top = t.top || 0, t.left = t.left || 0, n.textDecoration) {
          var r = n.textDecoration;
          r.indexOf("underline") !== -1 && (t.underline = !0), r.indexOf("overline") !== -1 && (t.overline = !0), r.indexOf("line-through") !== -1 && (t.linethrough = !0), delete t.textDecoration;
        }
        "dx" in n && (t.left += n.dx), "dy" in n && (t.top += n.dy), "fontSize" in t || (t.fontSize = s.Text.DEFAULT_SVG_FONT_SIZE);
        var l = "";
        "textContent" in i ? l = i.textContent : "firstChild" in i && i.firstChild !== null && "data" in i.firstChild && i.firstChild.data !== null && (l = i.firstChild.data), l = l.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var u = t.strokeWidth;
        t.strokeWidth = 0;
        var d = new s.Text(l, t), g = d.getScaledHeight() / d.height, m = (d.height + d.strokeWidth) * d.lineHeight - d.height, v = m * g, y = d.getScaledHeight() + v, w = 0;
        a === "center" && (w = d.getScaledWidth() / 2), a === "right" && (w = d.getScaledWidth()), d.set({
          left: d.left - w,
          top: d.top - (y - d.fontSize * (0.07 + d._fontSizeFraction)) / d.lineHeight,
          strokeWidth: typeof u < "u" ? u : 1
        }), e(d);
      }, s.Text.fromObject = function(i, e) {
        var t = h(i), n = i.path;
        return delete t.path, s.Object._fromObject("Text", t, function(a) {
          a.styles = s.util.stylesFromArray(i.styles, i.text), n ? s.Object._fromObject("Path", n, function(r) {
            a.set("path", r), e(a);
          }, "path") : e(a);
        }, "text");
      }, s.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], s.util.createAccessors && s.util.createAccessors(s.Text);
    })(q), (function() {
      f.util.object.extend(
        f.Text.prototype,
        /** @lends fabric.Text.prototype */
        {
          /**
           * Returns true if object has no styling or no styling in a line
           * @param {Number} lineIndex , lineIndex is on wrapped lines.
           * @return {Boolean}
           */
          isEmptyStyles: function(c) {
            if (!this.styles || typeof c < "u" && !this.styles[c])
              return !0;
            var s = typeof c > "u" ? this.styles : { line: this.styles[c] };
            for (var h in s)
              for (var o in s[h])
                for (var i in s[h][o])
                  return !1;
            return !0;
          },
          /**
           * Returns true if object has a style property or has it ina specified line
           * This function is used to detect if a text will use a particular property or not.
           * @param {String} property to check for
           * @param {Number} lineIndex to check the style on
           * @return {Boolean}
           */
          styleHas: function(c, s) {
            if (!this.styles || !c || c === "" || typeof s < "u" && !this.styles[s])
              return !1;
            var h = typeof s > "u" ? this.styles : { 0: this.styles[s] };
            for (var o in h)
              for (var i in h[o])
                if (typeof h[o][i][c] < "u")
                  return !0;
            return !1;
          },
          /**
           * Check if characters in a text have a value for a property
           * whose value matches the textbox's value for that property.  If so,
           * the character-level property is deleted.  If the character
           * has no other properties, then it is also deleted.  Finally,
           * if the line containing that character has no other characters
           * then it also is deleted.
           *
           * @param {string} property The property to compare between characters and text.
           */
          cleanStyle: function(c) {
            if (!this.styles || !c || c === "")
              return !1;
            var s = this.styles, h = 0, o, i, e = !0, t = 0, n;
            for (var a in s) {
              o = 0;
              for (var r in s[a]) {
                var n = s[a][r], l = n.hasOwnProperty(c);
                h++, l ? (i ? n[c] !== i && (e = !1) : i = n[c], n[c] === this[c] && delete n[c]) : e = !1, Object.keys(n).length !== 0 ? o++ : delete s[a][r];
              }
              o === 0 && delete s[a];
            }
            for (var u = 0; u < this._textLines.length; u++)
              t += this._textLines[u].length;
            e && h === t && (this[c] = i, this.removeStyle(c));
          },
          /**
           * Remove a style property or properties from all individual character styles
           * in a text object.  Deletes the character style object if it contains no other style
           * props.  Deletes a line style object if it contains no other character styles.
           *
           * @param {String} props The property to remove from character styles.
           */
          removeStyle: function(c) {
            if (!(!this.styles || !c || c === "")) {
              var s = this.styles, h, o, i;
              for (o in s) {
                h = s[o];
                for (i in h)
                  delete h[i][c], Object.keys(h[i]).length === 0 && delete h[i];
                Object.keys(h).length === 0 && delete s[o];
              }
            }
          },
          /**
           * @private
           */
          _extendStyles: function(c, s) {
            var h = this.get2DCursorLocation(c);
            this._getLineStyle(h.lineIndex) || this._setLineStyle(h.lineIndex), this._getStyleDeclaration(h.lineIndex, h.charIndex) || this._setStyleDeclaration(h.lineIndex, h.charIndex, {}), f.util.object.extend(this._getStyleDeclaration(h.lineIndex, h.charIndex), s);
          },
          /**
           * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
           * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
           * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. useful to manage styles.
           */
          get2DCursorLocation: function(c, s) {
            typeof c > "u" && (c = this.selectionStart);
            for (var h = s ? this._unwrappedTextLines : this._textLines, o = h.length, i = 0; i < o; i++) {
              if (c <= h[i].length)
                return {
                  lineIndex: i,
                  charIndex: c
                };
              c -= h[i].length + this.missingNewlineOffset(i, s);
            }
            return {
              lineIndex: i - 1,
              charIndex: h[i - 1].length < c ? h[i - 1].length : c
            };
          },
          /**
           * Gets style of a current selection/cursor (at the start position)
           * if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.
           * @param {Number} [startIndex] Start index to get styles at
           * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
           * @param {Boolean} [complete] get full style or not
           * @return {Array} styles an array with one, zero or more Style objects
           */
          getSelectionStyles: function(c, s, h) {
            typeof c > "u" && (c = this.selectionStart || 0), typeof s > "u" && (s = this.selectionEnd || c);
            for (var o = [], i = c; i < s; i++)
              o.push(this.getStyleAtPosition(i, h));
            return o;
          },
          /**
           * Gets style of a current selection/cursor position
           * @param {Number} position  to get styles at
           * @param {Boolean} [complete] full style if true
           * @return {Object} style Style object at a specified index
           * @private
           */
          getStyleAtPosition: function(c, s) {
            var h = this.get2DCursorLocation(c), o = s ? this.getCompleteStyleDeclaration(h.lineIndex, h.charIndex) : this._getStyleDeclaration(h.lineIndex, h.charIndex);
            return o || {};
          },
          /**
           * Sets style of a current selection, if no selection exist, do not set anything.
           * @param {Object} [styles] Styles object
           * @param {Number} [startIndex] Start index to get styles at
           * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
           * @return {fabric.IText} thisArg
           * @chainable
           */
          setSelectionStyles: function(c, s, h) {
            typeof s > "u" && (s = this.selectionStart || 0), typeof h > "u" && (h = this.selectionEnd || s);
            for (var o = s; o < h; o++)
              this._extendStyles(o, c);
            return this._forceClearCache = !0, this;
          },
          /**
           * get the reference, not a clone, of the style object for a given character
           * @param {Number} lineIndex
           * @param {Number} charIndex
           * @return {Object} style object
           */
          _getStyleDeclaration: function(c, s) {
            var h = this.styles && this.styles[c];
            return h ? h[s] : null;
          },
          /**
           * return a new object that contains all the style property for a character
           * the object returned is newly created
           * @param {Number} lineIndex of the line where the character is
           * @param {Number} charIndex position of the character on the line
           * @return {Object} style object
           */
          getCompleteStyleDeclaration: function(c, s) {
            for (var h = this._getStyleDeclaration(c, s) || {}, o = {}, i, e = 0; e < this._styleProperties.length; e++)
              i = this._styleProperties[e], o[i] = typeof h[i] > "u" ? this[i] : h[i];
            return o;
          },
          /**
           * @param {Number} lineIndex
           * @param {Number} charIndex
           * @param {Object} style
           * @private
           */
          _setStyleDeclaration: function(c, s, h) {
            this.styles[c][s] = h;
          },
          /**
           *
           * @param {Number} lineIndex
           * @param {Number} charIndex
           * @private
           */
          _deleteStyleDeclaration: function(c, s) {
            delete this.styles[c][s];
          },
          /**
           * @param {Number} lineIndex
           * @return {Boolean} if the line exists or not
           * @private
           */
          _getLineStyle: function(c) {
            return !!this.styles[c];
          },
          /**
           * Set the line style to an empty object so that is initialized
           * @param {Number} lineIndex
           * @private
           */
          _setLineStyle: function(c) {
            this.styles[c] = {};
          },
          /**
           * @param {Number} lineIndex
           * @private
           */
          _deleteLineStyle: function(c) {
            delete this.styles[c];
          }
        }
      );
    })(), (function() {
      function c(s) {
        s.textDecoration && (s.textDecoration.indexOf("underline") > -1 && (s.underline = !0), s.textDecoration.indexOf("line-through") > -1 && (s.linethrough = !0), s.textDecoration.indexOf("overline") > -1 && (s.overline = !0), delete s.textDecoration);
      }
      f.IText = f.util.createClass(
        f.Text,
        f.Observable,
        /** @lends fabric.IText.prototype */
        {
          /**
           * Type of an object
           * @type String
           * @default
           */
          type: "i-text",
          /**
           * Index where text selection starts (or where cursor is when there is no selection)
           * @type Number
           * @default
           */
          selectionStart: 0,
          /**
           * Index where text selection ends
           * @type Number
           * @default
           */
          selectionEnd: 0,
          /**
           * Color of text selection
           * @type String
           * @default
           */
          selectionColor: "rgba(17,119,255,0.3)",
          /**
           * Indicates whether text is in editing mode
           * @type Boolean
           * @default
           */
          isEditing: !1,
          /**
           * Indicates whether a text can be edited
           * @type Boolean
           * @default
           */
          editable: !0,
          /**
           * Border color of text object while it's in editing mode
           * @type String
           * @default
           */
          editingBorderColor: "rgba(102,153,255,0.25)",
          /**
           * Width of cursor (in px)
           * @type Number
           * @default
           */
          cursorWidth: 2,
          /**
           * Color of text cursor color in editing mode.
           * if not set (default) will take color from the text.
           * if set to a color value that fabric can understand, it will
           * be used instead of the color of the text at the current position.
           * @type String
           * @default
           */
          cursorColor: "",
          /**
           * Delay between cursor blink (in ms)
           * @type Number
           * @default
           */
          cursorDelay: 1e3,
          /**
           * Duration of cursor fadein (in ms)
           * @type Number
           * @default
           */
          cursorDuration: 600,
          /**
           * Indicates whether internal text char widths can be cached
           * @type Boolean
           * @default
           */
          caching: !0,
          /**
           * DOM container to append the hiddenTextarea.
           * An alternative to attaching to the document.body.
           * Useful to reduce laggish redraw of the full document.body tree and
           * also with modals event capturing that won't let the textarea take focus.
           * @type HTMLElement
           * @default
           */
          hiddenTextareaContainer: null,
          /**
           * @private
           */
          _reSpace: /\s|\n/,
          /**
           * @private
           */
          _currentCursorOpacity: 0,
          /**
           * @private
           */
          _selectionDirection: null,
          /**
           * @private
           */
          _abortCursorAnimation: !1,
          /**
           * @private
           */
          __widthOfSpace: [],
          /**
           * Helps determining when the text is in composition, so that the cursor
           * rendering is altered.
           */
          inCompositionMode: !1,
          /**
           * Constructor
           * @param {String} text Text string
           * @param {Object} [options] Options object
           * @return {fabric.IText} thisArg
           */
          initialize: function(s, h) {
            this.callSuper("initialize", s, h), this.initBehavior();
          },
          /**
           * Sets selection start (left boundary of a selection)
           * @param {Number} index Index to set selection start to
           */
          setSelectionStart: function(s) {
            s = Math.max(s, 0), this._updateAndFire("selectionStart", s);
          },
          /**
           * Sets selection end (right boundary of a selection)
           * @param {Number} index Index to set selection end to
           */
          setSelectionEnd: function(s) {
            s = Math.min(s, this.text.length), this._updateAndFire("selectionEnd", s);
          },
          /**
           * @private
           * @param {String} property 'selectionStart' or 'selectionEnd'
           * @param {Number} index new position of property
           */
          _updateAndFire: function(s, h) {
            this[s] !== h && (this._fireSelectionChanged(), this[s] = h), this._updateTextarea();
          },
          /**
           * Fires the even of selection changed
           * @private
           */
          _fireSelectionChanged: function() {
            this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
          },
          /**
           * Initialize text dimensions. Render all text on given context
           * or on a offscreen canvas to get the text width with measureText.
           * Updates this.width and this.height with the proper values.
           * Does not return dimensions.
           * @private
           */
          initDimensions: function() {
            this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          render: function(s) {
            this.clearContextTop(), this.callSuper("render", s), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
          },
          /**
           * @private
           * @param {CanvasRenderingContext2D} ctx Context to render on
           */
          _render: function(s) {
            this.callSuper("_render", s);
          },
          /**
           * Prepare and clean the contextTop
           */
          clearContextTop: function(s) {
            if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
              var h = this.canvas.contextTop, o = this.canvas.viewportTransform;
              h.save(), h.transform(o[0], o[1], o[2], o[3], o[4], o[5]), this.transform(h), this._clearTextArea(h), s || h.restore();
            }
          },
          /**
           * Renders cursor or selection (depending on what exists)
           * it does on the contextTop. If contextTop is not available, do nothing.
           */
          renderCursorOrSelection: function() {
            if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
              var s = this._getCursorBoundaries(), h = this.canvas.contextTop;
              this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(s, h) : this.renderSelection(s, h), h.restore();
            }
          },
          _clearTextArea: function(s) {
            var h = this.width + 4, o = this.height + 4;
            s.clearRect(-h / 2, -o / 2, h, o);
          },
          /**
           * Returns cursor boundaries (left, top, leftOffset, topOffset)
           * @private
           * @param {Array} chars Array of characters
           * @param {String} typeOfBoundaries
           */
          _getCursorBoundaries: function(s) {
            typeof s > "u" && (s = this.selectionStart);
            var h = this._getLeftOffset(), o = this._getTopOffset(), i = this._getCursorBoundariesOffsets(s);
            return {
              left: h,
              top: o,
              leftOffset: i.left,
              topOffset: i.top
            };
          },
          /**
           * @private
           */
          _getCursorBoundariesOffsets: function(s) {
            if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
              return this.cursorOffsetCache;
            var h, o, i, e = 0, t = 0, n, a = this.get2DCursorLocation(s);
            i = a.charIndex, o = a.lineIndex;
            for (var r = 0; r < o; r++)
              e += this.getHeightOfLine(r);
            h = this._getLineLeftOffset(o);
            var l = this.__charBounds[o][i];
            return l && (t = l.left), this.charSpacing !== 0 && i === this._textLines[o].length && (t -= this._getWidthOfCharSpacing()), n = {
              top: e,
              left: h + (t > 0 ? t : 0)
            }, this.direction === "rtl" && (n.left *= -1), this.cursorOffsetCache = n, this.cursorOffsetCache;
          },
          /**
           * Renders cursor
           * @param {Object} boundaries
           * @param {CanvasRenderingContext2D} ctx transformed context to draw on
           */
          renderCursor: function(s, h) {
            var o = this.get2DCursorLocation(), i = o.lineIndex, e = o.charIndex > 0 ? o.charIndex - 1 : 0, t = this.getValueOfPropertyAt(i, e, "fontSize"), n = this.scaleX * this.canvas.getZoom(), a = this.cursorWidth / n, r = s.topOffset, l = this.getValueOfPropertyAt(i, e, "deltaY");
            r += (1 - this._fontSizeFraction) * this.getHeightOfLine(i) / this.lineHeight - t * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(s, h), h.fillStyle = this.cursorColor || this.getValueOfPropertyAt(i, e, "fill"), h.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, h.fillRect(
              s.left + s.leftOffset - a / 2,
              r + s.top + l,
              a,
              t
            );
          },
          /**
           * Renders text selection
           * @param {Object} boundaries Object with left/top/leftOffset/topOffset
           * @param {CanvasRenderingContext2D} ctx transformed context to draw on
           */
          renderSelection: function(s, h) {
            for (var o = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, i = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, e = this.textAlign.indexOf("justify") !== -1, t = this.get2DCursorLocation(o), n = this.get2DCursorLocation(i), a = t.lineIndex, r = n.lineIndex, l = t.charIndex < 0 ? 0 : t.charIndex, u = n.charIndex < 0 ? 0 : n.charIndex, d = a; d <= r; d++) {
              var g = this._getLineLeftOffset(d) || 0, m = this.getHeightOfLine(d), v = 0, y = 0, w = 0;
              if (d === a && (y = this.__charBounds[a][l].left), d >= a && d < r)
                w = e && !this.isEndOfWrapping(d) ? this.width : this.getLineWidth(d) || 5;
              else if (d === r)
                if (u === 0)
                  w = this.__charBounds[r][u].left;
                else {
                  var E = this._getWidthOfCharSpacing();
                  w = this.__charBounds[r][u - 1].left + this.__charBounds[r][u - 1].width - E;
                }
              v = m, (this.lineHeight < 1 || d === r && this.lineHeight > 1) && (m /= this.lineHeight);
              var L = s.left + g + y, W = w - y, G = m, V = 0;
              this.inCompositionMode ? (h.fillStyle = this.compositionColor || "black", G = 1, V = m) : h.fillStyle = this.selectionColor, this.direction === "rtl" && (L = this.width - L - W), h.fillRect(
                L,
                s.top + s.topOffset + V,
                W,
                G
              ), s.topOffset += v;
            }
          },
          /**
           * High level function to know the height of the cursor.
           * the currentChar is the one that precedes the cursor
           * Returns fontSize of char at the current cursor
           * Unused from the library, is for the end user
           * @return {Number} Character font size
           */
          getCurrentCharFontSize: function() {
            var s = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(s.l, s.c, "fontSize");
          },
          /**
           * High level function to know the color of the cursor.
           * the currentChar is the one that precedes the cursor
           * Returns color (fill) of char at the current cursor
           * if the text object has a pattern or gradient for filler, it will return that.
           * Unused by the library, is for the end user
           * @return {String | fabric.Gradient | fabric.Pattern} Character color (fill)
           */
          getCurrentCharColor: function() {
            var s = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(s.l, s.c, "fill");
          },
          /**
           * Returns the cursor position for the getCurrent.. functions
           * @private
           */
          _getCurrentCharIndex: function() {
            var s = this.get2DCursorLocation(this.selectionStart, !0), h = s.charIndex > 0 ? s.charIndex - 1 : 0;
            return { l: s.lineIndex, c: h };
          }
        }
      ), f.IText.fromObject = function(s, h) {
        var o = f.util.stylesFromArray(s.styles, s.text), i = Object.assign({}, s, { styles: o });
        if (delete i.path, c(i), i.styles)
          for (var e in i.styles)
            for (var t in i.styles[e])
              c(i.styles[e][t]);
        f.Object._fromObject("IText", i, function(n) {
          s.path ? f.Object._fromObject("Path", s.path, function(a) {
            n.set("path", a), h(n);
          }, "path") : h(n);
        }, "text");
      };
    })(), (function() {
      var c = f.util.object.clone;
      f.util.object.extend(
        f.IText.prototype,
        /** @lends fabric.IText.prototype */
        {
          /**
           * Initializes all the interactive behavior of IText
           */
          initBehavior: function() {
            this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
          },
          onDeselect: function() {
            this.isEditing && this.exitEditing(), this.selected = !1;
          },
          /**
           * Initializes "added" event handler
           */
          initAddedHandler: function() {
            var s = this;
            this.on("added", function() {
              var h = s.canvas;
              h && (h._hasITextHandlers || (h._hasITextHandlers = !0, s._initCanvasHandlers(h)), h._iTextInstances = h._iTextInstances || [], h._iTextInstances.push(s));
            });
          },
          initRemovedHandler: function() {
            var s = this;
            this.on("removed", function() {
              var h = s.canvas;
              h && (h._iTextInstances = h._iTextInstances || [], f.util.removeFromArray(h._iTextInstances, s), h._iTextInstances.length === 0 && (h._hasITextHandlers = !1, s._removeCanvasHandlers(h)));
            });
          },
          /**
           * register canvas event to manage exiting on other instances
           * @private
           */
          _initCanvasHandlers: function(s) {
            s._mouseUpITextHandler = function() {
              s._iTextInstances && s._iTextInstances.forEach(function(h) {
                h.__isMousedown = !1;
              });
            }, s.on("mouse:up", s._mouseUpITextHandler);
          },
          /**
           * remove canvas event to manage exiting on other instances
           * @private
           */
          _removeCanvasHandlers: function(s) {
            s.off("mouse:up", s._mouseUpITextHandler);
          },
          /**
           * @private
           */
          _tick: function() {
            this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
          },
          /**
           * @private
           */
          _animateCursor: function(s, h, o, i) {
            var e;
            return e = {
              isAborted: !1,
              abort: function() {
                this.isAborted = !0;
              }
            }, s.animate("_currentCursorOpacity", h, {
              duration: o,
              onComplete: function() {
                e.isAborted || s[i]();
              },
              onChange: function() {
                s.canvas && s.selectionStart === s.selectionEnd && s.renderCursorOrSelection();
              },
              abort: function() {
                return e.isAborted;
              }
            }), e;
          },
          /**
           * @private
           */
          _onTickComplete: function() {
            var s = this;
            this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
              s._currentTickCompleteState = s._animateCursor(s, 0, this.cursorDuration / 2, "_tick");
            }, 100);
          },
          /**
           * Initializes delayed cursor
           */
          initDelayedCursor: function(s) {
            var h = this, o = s ? 0 : this.cursorDelay;
            this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
              h._tick();
            }, o);
          },
          /**
           * Aborts cursor animation and clears all timeouts
           */
          abortCursorAnimation: function() {
            var s = this._currentTickState || this._currentTickCompleteState, h = this.canvas;
            this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, s && h && h.clearContext(h.contextTop || h.contextContainer);
          },
          /**
           * Selects entire text
           * @return {fabric.IText} thisArg
           * @chainable
           */
          selectAll: function() {
            return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
          },
          /**
           * Returns selected text
           * @return {String}
           */
          getSelectedText: function() {
            return this._text.slice(this.selectionStart, this.selectionEnd).join("");
          },
          /**
           * Find new selection index representing start of current word according to current selection index
           * @param {Number} startFrom Current selection index
           * @return {Number} New selection index
           */
          findWordBoundaryLeft: function(s) {
            var h = 0, o = s - 1;
            if (this._reSpace.test(this._text[o]))
              for (; this._reSpace.test(this._text[o]); )
                h++, o--;
            for (; /\S/.test(this._text[o]) && o > -1; )
              h++, o--;
            return s - h;
          },
          /**
           * Find new selection index representing end of current word according to current selection index
           * @param {Number} startFrom Current selection index
           * @return {Number} New selection index
           */
          findWordBoundaryRight: function(s) {
            var h = 0, o = s;
            if (this._reSpace.test(this._text[o]))
              for (; this._reSpace.test(this._text[o]); )
                h++, o++;
            for (; /\S/.test(this._text[o]) && o < this._text.length; )
              h++, o++;
            return s + h;
          },
          /**
           * Find new selection index representing start of current line according to current selection index
           * @param {Number} startFrom Current selection index
           * @return {Number} New selection index
           */
          findLineBoundaryLeft: function(s) {
            for (var h = 0, o = s - 1; !/\n/.test(this._text[o]) && o > -1; )
              h++, o--;
            return s - h;
          },
          /**
           * Find new selection index representing end of current line according to current selection index
           * @param {Number} startFrom Current selection index
           * @return {Number} New selection index
           */
          findLineBoundaryRight: function(s) {
            for (var h = 0, o = s; !/\n/.test(this._text[o]) && o < this._text.length; )
              h++, o++;
            return s + h;
          },
          /**
           * Finds index corresponding to beginning or end of a word
           * @param {Number} selectionStart Index of a character
           * @param {Number} direction 1 or -1
           * @return {Number} Index of the beginning or end of a word
           */
          searchWordBoundary: function(s, h) {
            for (var o = this._text, i = this._reSpace.test(o[s]) ? s - 1 : s, e = o[i], t = f.reNonWord; !t.test(e) && i > 0 && i < o.length; )
              i += h, e = o[i];
            return t.test(e) && (i += h === 1 ? 0 : 1), i;
          },
          /**
           * Selects a word based on the index
           * @param {Number} selectionStart Index of a character
           */
          selectWord: function(s) {
            s = s || this.selectionStart;
            var h = this.searchWordBoundary(s, -1), o = this.searchWordBoundary(s, 1);
            this.selectionStart = h, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
          },
          /**
           * Selects a line based on the index
           * @param {Number} selectionStart Index of a character
           * @return {fabric.IText} thisArg
           * @chainable
           */
          selectLine: function(s) {
            s = s || this.selectionStart;
            var h = this.findLineBoundaryLeft(s), o = this.findLineBoundaryRight(s);
            return this.selectionStart = h, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this;
          },
          /**
           * Enters editing state
           * @return {fabric.IText} thisArg
           * @chainable
           */
          enterEditing: function(s) {
            if (!(this.isEditing || !this.editable))
              return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(s), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
          },
          exitEditingOnOthers: function(s) {
            s._iTextInstances && s._iTextInstances.forEach(function(h) {
              h.selected = !1, h.isEditing && h.exitEditing();
            });
          },
          /**
           * Initializes "mousemove" event handler
           */
          initMouseMoveHandler: function() {
            this.canvas.on("mouse:move", this.mouseMoveHandler);
          },
          /**
           * @private
           */
          mouseMoveHandler: function(s) {
            if (!(!this.__isMousedown || !this.isEditing)) {
              document.activeElement !== this.hiddenTextarea && this.hiddenTextarea.focus();
              var h = this.getSelectionStartFromPointer(s.e), o = this.selectionStart, i = this.selectionEnd;
              (h !== this.__selectionStartOnMouseDown || o === i) && (o === h || i === h) || (h > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = h) : (this.selectionStart = h, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== o || this.selectionEnd !== i) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
            }
          },
          /**
           * @private
           */
          _setEditingProps: function() {
            this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
          },
          /**
           * convert from textarea to grapheme indexes
           */
          fromStringToGraphemeSelection: function(s, h, o) {
            var i = o.slice(0, s), e = f.util.string.graphemeSplit(i).length;
            if (s === h)
              return { selectionStart: e, selectionEnd: e };
            var t = o.slice(s, h), n = f.util.string.graphemeSplit(t).length;
            return { selectionStart: e, selectionEnd: e + n };
          },
          /**
           * convert from fabric to textarea values
           */
          fromGraphemeToStringSelection: function(s, h, o) {
            var i = o.slice(0, s), e = i.join("").length;
            if (s === h)
              return { selectionStart: e, selectionEnd: e };
            var t = o.slice(s, h), n = t.join("").length;
            return { selectionStart: e, selectionEnd: e + n };
          },
          /**
           * @private
           */
          _updateTextarea: function() {
            if (this.cursorOffsetCache = {}, !!this.hiddenTextarea) {
              if (!this.inCompositionMode) {
                var s = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                this.hiddenTextarea.selectionStart = s.selectionStart, this.hiddenTextarea.selectionEnd = s.selectionEnd;
              }
              this.updateTextareaPosition();
            }
          },
          /**
           * @private
           */
          updateFromTextArea: function() {
            if (this.hiddenTextarea) {
              this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
              var s = this.fromStringToGraphemeSelection(
                this.hiddenTextarea.selectionStart,
                this.hiddenTextarea.selectionEnd,
                this.hiddenTextarea.value
              );
              this.selectionEnd = this.selectionStart = s.selectionEnd, this.inCompositionMode || (this.selectionStart = s.selectionStart), this.updateTextareaPosition();
            }
          },
          /**
           * @private
           */
          updateTextareaPosition: function() {
            if (this.selectionStart === this.selectionEnd) {
              var s = this._calcTextareaPosition();
              this.hiddenTextarea.style.left = s.left, this.hiddenTextarea.style.top = s.top;
            }
          },
          /**
           * @private
           * @return {Object} style contains style for hiddenTextarea
           */
          _calcTextareaPosition: function() {
            if (!this.canvas)
              return { x: 1, y: 1 };
            var s = this.inCompositionMode ? this.compositionStart : this.selectionStart, h = this._getCursorBoundaries(s), o = this.get2DCursorLocation(s), i = o.lineIndex, e = o.charIndex, t = this.getValueOfPropertyAt(i, e, "fontSize") * this.lineHeight, n = h.leftOffset, a = this.calcTransformMatrix(), r = {
              x: h.left + n,
              y: h.top + h.topOffset + t
            }, l = this.canvas.getRetinaScaling(), u = this.canvas.upperCanvasEl, d = u.width / l, g = u.height / l, m = d - t, v = g - t, y = u.clientWidth / d, w = u.clientHeight / g;
            return r = f.util.transformPoint(r, a), r = f.util.transformPoint(r, this.canvas.viewportTransform), r.x *= y, r.y *= w, r.x < 0 && (r.x = 0), r.x > m && (r.x = m), r.y < 0 && (r.y = 0), r.y > v && (r.y = v), r.x += this.canvas._offset.left, r.y += this.canvas._offset.top, { left: r.x + "px", top: r.y + "px", fontSize: t + "px", charHeight: t };
          },
          /**
           * @private
           */
          _saveEditingProps: function() {
            this._savedProps = {
              hasControls: this.hasControls,
              borderColor: this.borderColor,
              lockMovementX: this.lockMovementX,
              lockMovementY: this.lockMovementY,
              hoverCursor: this.hoverCursor,
              selectable: this.selectable,
              defaultCursor: this.canvas && this.canvas.defaultCursor,
              moveCursor: this.canvas && this.canvas.moveCursor
            };
          },
          /**
           * @private
           */
          _restoreEditingProps: function() {
            this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
          },
          /**
           * Exits from editing state
           * @return {fabric.IText} thisArg
           * @chainable
           */
          exitEditing: function() {
            var s = this._textBeforeEdit !== this.text, h = this.hiddenTextarea;
            return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, h && (h.blur && h.blur(), h.parentNode && h.parentNode.removeChild(h)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), s && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), s && this.canvas.fire("object:modified", { target: this })), this;
          },
          /**
           * @private
           */
          _removeExtraneousStyles: function() {
            for (var s in this.styles)
              this._textLines[s] || delete this.styles[s];
          },
          /**
           * remove and reflow a style block from start to end.
           * @param {Number} start linear start position for removal (included in removal)
           * @param {Number} end linear end position for removal ( excluded from removal )
           */
          removeStyleFromTo: function(s, h) {
            var o = this.get2DCursorLocation(s, !0), i = this.get2DCursorLocation(h, !0), e = o.lineIndex, t = o.charIndex, n = i.lineIndex, a = i.charIndex, r, l;
            if (e !== n) {
              if (this.styles[e])
                for (r = t; r < this._unwrappedTextLines[e].length; r++)
                  delete this.styles[e][r];
              if (this.styles[n])
                for (r = a; r < this._unwrappedTextLines[n].length; r++)
                  l = this.styles[n][r], l && (this.styles[e] || (this.styles[e] = {}), this.styles[e][t + r - a] = l);
              for (r = e + 1; r <= n; r++)
                delete this.styles[r];
              this.shiftLineStyles(n, e - n);
            } else if (this.styles[e]) {
              l = this.styles[e];
              var u = a - t, d, g;
              for (r = t; r < a; r++)
                delete l[r];
              for (g in this.styles[e])
                d = parseInt(g, 10), d >= a && (l[d - u] = l[g], delete l[g]);
            }
          },
          /**
           * Shifts line styles up or down
           * @param {Number} lineIndex Index of a line
           * @param {Number} offset Can any number?
           */
          shiftLineStyles: function(s, h) {
            var o = c(this.styles);
            for (var i in this.styles) {
              var e = parseInt(i, 10);
              e > s && (this.styles[e + h] = o[e], o[e - h] || delete this.styles[e]);
            }
          },
          restartCursorIfNeeded: function() {
            (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
          },
          /**
           * Handle insertion of more consecutive style lines for when one or more
           * newlines gets added to the text. Since current style needs to be shifted
           * first we shift the current style of the number lines needed, then we add
           * new lines from the last to the first.
           * @param {Number} lineIndex Index of a line
           * @param {Number} charIndex Index of a char
           * @param {Number} qty number of lines to add
           * @param {Array} copiedStyle Array of objects styles
           */
          insertNewlineStyleObject: function(s, h, o, i) {
            var e, t = {}, n = !1, a = this._unwrappedTextLines[s].length, r = a === h;
            o || (o = 1), this.shiftLineStyles(s, o), this.styles[s] && (e = this.styles[s][h === 0 ? h : h - 1]);
            for (var l in this.styles[s]) {
              var u = parseInt(l, 10);
              u >= h && (n = !0, t[u - h] = this.styles[s][l], r && h === 0 || delete this.styles[s][l]);
            }
            var d = !1;
            for (n && !r && (this.styles[s + o] = t, d = !0), (d || a > h) && o--; o > 0; )
              i && i[o - 1] ? this.styles[s + o] = { 0: c(i[o - 1]) } : e ? this.styles[s + o] = { 0: c(e) } : delete this.styles[s + o], o--;
            this._forceClearCache = !0;
          },
          /**
           * Inserts style object for a given line/char index
           * @param {Number} lineIndex Index of a line
           * @param {Number} charIndex Index of a char
           * @param {Number} quantity number Style object to insert, if given
           * @param {Array} copiedStyle array of style objects
           */
          insertCharStyleObject: function(s, h, o, i) {
            this.styles || (this.styles = {});
            var e = this.styles[s], t = e ? c(e) : {};
            o || (o = 1);
            for (var n in t) {
              var a = parseInt(n, 10);
              a >= h && (e[a + o] = t[a], t[a - o] || delete e[a]);
            }
            if (this._forceClearCache = !0, i) {
              for (; o--; )
                Object.keys(i[o]).length && (this.styles[s] || (this.styles[s] = {}), this.styles[s][h + o] = c(i[o]));
              return;
            }
            if (e)
              for (var r = e[h ? h - 1 : 1]; r && o--; )
                this.styles[s][h + o] = c(r);
          },
          /**
           * Inserts style object(s)
           * @param {Array} insertedText Characters at the location where style is inserted
           * @param {Number} start cursor index for inserting style
           * @param {Array} [copiedStyle] array of style objects to insert.
           */
          insertNewStyleBlock: function(s, h, o) {
            for (var i = this.get2DCursorLocation(h, !0), e = [0], t = 0, n = 0; n < s.length; n++)
              s[n] === `
` ? (t++, e[t] = 0) : e[t]++;
            e[0] > 0 && (this.insertCharStyleObject(i.lineIndex, i.charIndex, e[0], o), o = o && o.slice(e[0] + 1)), t && this.insertNewlineStyleObject(
              i.lineIndex,
              i.charIndex + e[0],
              t
            );
            for (var n = 1; n < t; n++)
              e[n] > 0 ? this.insertCharStyleObject(i.lineIndex + n, 0, e[n], o) : o && this.styles[i.lineIndex + n] && o[0] && (this.styles[i.lineIndex + n][0] = o[0]), o = o && o.slice(e[n] + 1);
            e[n] > 0 && this.insertCharStyleObject(i.lineIndex + n, 0, e[n], o);
          },
          /**
           * Set the selectionStart and selectionEnd according to the new position of cursor
           * mimic the key - mouse navigation when shift is pressed.
           */
          setSelectionStartEndWithShift: function(s, h, o) {
            o <= s ? (h === s ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = s), this.selectionStart = o) : o > s && o < h ? this._selectionDirection === "right" ? this.selectionEnd = o : this.selectionStart = o : (h === s ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = h), this.selectionEnd = o);
          },
          setSelectionInBoundaries: function() {
            var s = this.text.length;
            this.selectionStart > s ? this.selectionStart = s : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > s ? this.selectionEnd = s : this.selectionEnd < 0 && (this.selectionEnd = 0);
          }
        }
      );
    })(), f.util.object.extend(
      f.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes "dbclick" event handler
         */
        initDoubleClickSimulation: function() {
          this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
        },
        /**
         * Default event handler to simulate triple click
         * @private
         */
        onMouseDown: function(c) {
          if (this.canvas) {
            this.__newClickTime = +/* @__PURE__ */ new Date();
            var s = c.pointer;
            this.isTripleClick(s) && (this.fire("tripleclick", c), this._stopEvent(c.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = s, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
          }
        },
        isTripleClick: function(c) {
          return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === c.x && this.__lastPointer.y === c.y;
        },
        /**
         * @private
         */
        _stopEvent: function(c) {
          c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation();
        },
        /**
         * Initializes event handlers related to cursor or selection
         */
        initCursorSelectionHandlers: function() {
          this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
        },
        /**
         * Default handler for double click, select a word
         */
        doubleClickHandler: function(c) {
          this.isEditing && this.selectWord(this.getSelectionStartFromPointer(c.e));
        },
        /**
         * Default handler for triple click, select a line
         */
        tripleClickHandler: function(c) {
          this.isEditing && this.selectLine(this.getSelectionStartFromPointer(c.e));
        },
        /**
         * Initializes double and triple click event handlers
         */
        initClicks: function() {
          this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
        },
        /**
         * Default event handler for the basic functionalities needed on _mouseDown
         * can be overridden to do something different.
         * Scope of this implementation is: find the click position, set selectionStart
         * find selectionEnd, initialize the drawing of either cursor or selection area
         * initializing a mousedDown on a text area will cancel fabricjs knowledge of
         * current compositionMode. It will be set to false.
         */
        _mouseDownHandler: function(c) {
          !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(c.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
        },
        /**
         * Default event handler for the basic functionalities needed on mousedown:before
         * can be overridden to do something different.
         * Scope of this implementation is: verify the object is already selected when mousing down
         */
        _mouseDownHandlerBefore: function(c) {
          !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
        },
        /**
         * Initializes "mousedown" event handler
         */
        initMousedownHandler: function() {
          this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
        },
        /**
         * Initializes "mouseup" event handler
         */
        initMouseupHandler: function() {
          this.on("mouseup", this.mouseUpHandler);
        },
        /**
         * standard handler for mouse up, overridable
         * @private
         */
        mouseUpHandler: function(c) {
          if (this.__isMousedown = !1, !(!this.editable || this.group || c.transform && c.transform.actionPerformed || c.e.button && c.e.button !== 1)) {
            if (this.canvas) {
              var s = this.canvas._activeObject;
              if (s && s !== this)
                return;
            }
            this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(c.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
          }
        },
        /**
         * Changes cursor location in a text depending on passed pointer (x/y) object
         * @param {Event} e Event object
         */
        setCursorByClick: function(c) {
          var s = this.getSelectionStartFromPointer(c), h = this.selectionStart, o = this.selectionEnd;
          c.shiftKey ? this.setSelectionStartEndWithShift(h, o, s) : (this.selectionStart = s, this.selectionEnd = s), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
        },
        /**
         * Returns index of a character corresponding to where an object was clicked
         * @param {Event} e Event object
         * @return {Number} Index of a character
         */
        getSelectionStartFromPointer: function(c) {
          for (var s = this.getLocalPointer(c), h = 0, o = 0, i = 0, e = 0, t = 0, n, a, r = 0, l = this._textLines.length; r < l && i <= s.y; r++)
            i += this.getHeightOfLine(r) * this.scaleY, t = r, r > 0 && (e += this._textLines[r - 1].length + this.missingNewlineOffset(r - 1));
          n = this._getLineLeftOffset(t), o = n * this.scaleX, a = this._textLines[t], this.direction === "rtl" && (s.x = this.width * this.scaleX - s.x + o);
          for (var u = 0, d = a.length; u < d && (h = o, o += this.__charBounds[t][u].kernedWidth * this.scaleX, o <= s.x); u++)
            e++;
          return this._getNewSelectionStartFromOffset(s, h, o, e, d);
        },
        /**
         * @private
         */
        _getNewSelectionStartFromOffset: function(c, s, h, o, i) {
          var e = c.x - s, t = h - c.x, n = t > e || t < 0 ? 0 : 1, a = o + n;
          return this.flipX && (a = i - a), a > this._text.length && (a = this._text.length), a;
        }
      }
    ), f.util.object.extend(
      f.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes hidden textarea (needed to bring up keyboard in iOS)
         */
        initHiddenTextarea: function() {
          this.hiddenTextarea = f.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
          var c = this._calcTextareaPosition();
          this.hiddenTextarea.style.cssText = "position: absolute; top: " + c.top + "; left: " + c.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + c.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : f.document.body.appendChild(this.hiddenTextarea), f.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), f.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), f.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), f.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (f.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
        },
        /**
         * For functionalities on keyDown
         * Map a special key to a function of the instance/prototype
         * If you need different behaviour for ESC or TAB or arrows, you have to change
         * this map setting the name of a function that you build on the fabric.Itext or
         * your prototype.
         * the map change will affect all Instances unless you need for only some text Instances
         * in that case you have to clone this object and assign your Instance.
         * this.keysMap = fabric.util.object.clone(this.keysMap);
         * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
         */
        keysMap: {
          9: "exitEditing",
          27: "exitEditing",
          33: "moveCursorUp",
          34: "moveCursorDown",
          35: "moveCursorRight",
          36: "moveCursorLeft",
          37: "moveCursorLeft",
          38: "moveCursorUp",
          39: "moveCursorRight",
          40: "moveCursorDown"
        },
        keysMapRtl: {
          9: "exitEditing",
          27: "exitEditing",
          33: "moveCursorUp",
          34: "moveCursorDown",
          35: "moveCursorLeft",
          36: "moveCursorRight",
          37: "moveCursorRight",
          38: "moveCursorUp",
          39: "moveCursorLeft",
          40: "moveCursorDown"
        },
        /**
         * For functionalities on keyUp + ctrl || cmd
         */
        ctrlKeysMapUp: {
          67: "copy",
          88: "cut"
        },
        /**
         * For functionalities on keyDown + ctrl || cmd
         */
        ctrlKeysMapDown: {
          65: "selectAll"
        },
        onClick: function() {
          this.hiddenTextarea && this.hiddenTextarea.focus();
        },
        /**
         * Handles keydown event
         * only used for arrows and combination of modifier keys.
         * @param {Event} e Event object
         */
        onKeyDown: function(c) {
          if (this.isEditing) {
            var s = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
            if (c.keyCode in s)
              this[s[c.keyCode]](c);
            else if (c.keyCode in this.ctrlKeysMapDown && (c.ctrlKey || c.metaKey))
              this[this.ctrlKeysMapDown[c.keyCode]](c);
            else
              return;
            c.stopImmediatePropagation(), c.preventDefault(), c.keyCode >= 33 && c.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
          }
        },
        /**
         * Handles keyup event
         * We handle KeyUp because ie11 and edge have difficulties copy/pasting
         * if a copy/cut event fired, keyup is dismissed
         * @param {Event} e Event object
         */
        onKeyUp: function(c) {
          if (!this.isEditing || this._copyDone || this.inCompositionMode) {
            this._copyDone = !1;
            return;
          }
          if (c.keyCode in this.ctrlKeysMapUp && (c.ctrlKey || c.metaKey))
            this[this.ctrlKeysMapUp[c.keyCode]](c);
          else
            return;
          c.stopImmediatePropagation(), c.preventDefault(), this.canvas && this.canvas.requestRenderAll();
        },
        /**
         * Handles onInput event
         * @param {Event} e Event object
         */
        onInput: function(c) {
          var s = this.fromPaste;
          if (this.fromPaste = !1, c && c.stopPropagation(), !!this.isEditing) {
            var h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, o = this._text.length, i = h.length, e, t, n = i - o, a = this.selectionStart, r = this.selectionEnd, l = a !== r, u, d, g;
            if (this.hiddenTextarea.value === "") {
              this.styles = {}, this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
              return;
            }
            var m = this.fromStringToGraphemeSelection(
              this.hiddenTextarea.selectionStart,
              this.hiddenTextarea.selectionEnd,
              this.hiddenTextarea.value
            ), v = a > m.selectionStart;
            l ? (e = this._text.slice(a, r), n += r - a) : i < o && (v ? e = this._text.slice(r + n, r) : e = this._text.slice(a, a - n)), t = h.slice(m.selectionEnd - n, m.selectionEnd), e && e.length && (t.length && (u = this.getSelectionStyles(a, a + 1, !1), u = t.map(function() {
              return u[0];
            })), l ? (d = a, g = r) : v ? (d = r - e.length, g = r) : (d = r, g = r + e.length), this.removeStyleFromTo(d, g)), t.length && (s && t.join("") === f.copiedText && !f.disableStyleCopyPaste && (u = f.copiedTextStyle), this.insertNewStyleBlock(t, a, u)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
          }
        },
        /**
         * Composition start
         */
        onCompositionStart: function() {
          this.inCompositionMode = !0;
        },
        /**
         * Composition end
         */
        onCompositionEnd: function() {
          this.inCompositionMode = !1;
        },
        // /**
        //  * Composition update
        //  */
        onCompositionUpdate: function(c) {
          this.compositionStart = c.target.selectionStart, this.compositionEnd = c.target.selectionEnd, this.updateTextareaPosition();
        },
        /**
         * Copies selected text
         * @param {Event} e Event object
         */
        copy: function() {
          this.selectionStart !== this.selectionEnd && (f.copiedText = this.getSelectedText(), f.disableStyleCopyPaste ? f.copiedTextStyle = null : f.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
        },
        /**
         * Pastes text
         * @param {Event} e Event object
         */
        paste: function() {
          this.fromPaste = !0;
        },
        /**
         * @private
         * @param {Event} e Event object
         * @return {Object} Clipboard data object
         */
        _getClipboardData: function(c) {
          return c && c.clipboardData || f.window.clipboardData;
        },
        /**
         * Finds the width in pixels before the cursor on the same line
         * @private
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Number} widthBeforeCursor width before cursor
         */
        _getWidthBeforeCursor: function(c, s) {
          var h = this._getLineLeftOffset(c), o;
          return s > 0 && (o = this.__charBounds[c][s - 1], h += o.left + o.width), h;
        },
        /**
         * Gets start offset of a selection
         * @param {Event} e Event object
         * @param {Boolean} isRight
         * @return {Number}
         */
        getDownCursorOffset: function(c, s) {
          var h = this._getSelectionForOffset(c, s), o = this.get2DCursorLocation(h), i = o.lineIndex;
          if (i === this._textLines.length - 1 || c.metaKey || c.keyCode === 34)
            return this._text.length - h;
          var e = o.charIndex, t = this._getWidthBeforeCursor(i, e), n = this._getIndexOnLine(i + 1, t), a = this._textLines[i].slice(e);
          return a.length + n + 1 + this.missingNewlineOffset(i);
        },
        /**
         * private
         * Helps finding if the offset should be counted from Start or End
         * @param {Event} e Event object
         * @param {Boolean} isRight
         * @return {Number}
         */
        _getSelectionForOffset: function(c, s) {
          return c.shiftKey && this.selectionStart !== this.selectionEnd && s ? this.selectionEnd : this.selectionStart;
        },
        /**
         * @param {Event} e Event object
         * @param {Boolean} isRight
         * @return {Number}
         */
        getUpCursorOffset: function(c, s) {
          var h = this._getSelectionForOffset(c, s), o = this.get2DCursorLocation(h), i = o.lineIndex;
          if (i === 0 || c.metaKey || c.keyCode === 33)
            return -h;
          var e = o.charIndex, t = this._getWidthBeforeCursor(i, e), n = this._getIndexOnLine(i - 1, t), a = this._textLines[i].slice(0, e), r = this.missingNewlineOffset(i - 1);
          return -this._textLines[i - 1].length + n - a.length + (1 - r);
        },
        /**
         * for a given width it founds the matching character.
         * @private
         */
        _getIndexOnLine: function(c, s) {
          for (var h = this._textLines[c], o = this._getLineLeftOffset(c), i = o, e = 0, t, n, a = 0, r = h.length; a < r; a++)
            if (t = this.__charBounds[c][a].width, i += t, i > s) {
              n = !0;
              var l = i - t, u = i, d = Math.abs(l - s), g = Math.abs(u - s);
              e = g < d ? a : a - 1;
              break;
            }
          return n || (e = h.length - 1), e;
        },
        /**
         * Moves cursor down
         * @param {Event} e Event object
         */
        moveCursorDown: function(c) {
          this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", c);
        },
        /**
         * Moves cursor up
         * @param {Event} e Event object
         */
        moveCursorUp: function(c) {
          this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", c);
        },
        /**
         * Moves cursor up or down, fires the events
         * @param {String} direction 'Up' or 'Down'
         * @param {Event} e Event object
         */
        _moveCursorUpOrDown: function(c, s) {
          var h = "get" + c + "CursorOffset", o = this[h](s, this._selectionDirection === "right");
          s.shiftKey ? this.moveCursorWithShift(o) : this.moveCursorWithoutShift(o), o !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
        },
        /**
         * Moves cursor with shift
         * @param {Number} offset
         */
        moveCursorWithShift: function(c) {
          var s = this._selectionDirection === "left" ? this.selectionStart + c : this.selectionEnd + c;
          return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, s), c !== 0;
        },
        /**
         * Moves cursor up without shift
         * @param {Number} offset
         */
        moveCursorWithoutShift: function(c) {
          return c < 0 ? (this.selectionStart += c, this.selectionEnd = this.selectionStart) : (this.selectionEnd += c, this.selectionStart = this.selectionEnd), c !== 0;
        },
        /**
         * Moves cursor left
         * @param {Event} e Event object
         */
        moveCursorLeft: function(c) {
          this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", c);
        },
        /**
         * @private
         * @return {Boolean} true if a change happened
         */
        _move: function(c, s, h) {
          var o;
          if (c.altKey)
            o = this["findWordBoundary" + h](this[s]);
          else if (c.metaKey || c.keyCode === 35 || c.keyCode === 36)
            o = this["findLineBoundary" + h](this[s]);
          else
            return this[s] += h === "Left" ? -1 : 1, !0;
          if (typeof o < "u" && this[s] !== o)
            return this[s] = o, !0;
        },
        /**
         * @private
         */
        _moveLeft: function(c, s) {
          return this._move(c, s, "Left");
        },
        /**
         * @private
         */
        _moveRight: function(c, s) {
          return this._move(c, s, "Right");
        },
        /**
         * Moves cursor left without keeping selection
         * @param {Event} e
         */
        moveCursorLeftWithoutShift: function(c) {
          var s = !0;
          return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (s = this._moveLeft(c, "selectionStart")), this.selectionEnd = this.selectionStart, s;
        },
        /**
         * Moves cursor left while keeping selection
         * @param {Event} e
         */
        moveCursorLeftWithShift: function(c) {
          if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd)
            return this._moveLeft(c, "selectionEnd");
          if (this.selectionStart !== 0)
            return this._selectionDirection = "left", this._moveLeft(c, "selectionStart");
        },
        /**
         * Moves cursor right
         * @param {Event} e Event object
         */
        moveCursorRight: function(c) {
          this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", c);
        },
        /**
         * Moves cursor right or Left, fires event
         * @param {String} direction 'Left', 'Right'
         * @param {Event} e Event object
         */
        _moveCursorLeftOrRight: function(c, s) {
          var h = "moveCursor" + c + "With";
          this._currentCursorOpacity = 1, s.shiftKey ? h += "Shift" : h += "outShift", this[h](s) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
        },
        /**
         * Moves cursor right while keeping selection
         * @param {Event} e
         */
        moveCursorRightWithShift: function(c) {
          if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd)
            return this._moveRight(c, "selectionStart");
          if (this.selectionEnd !== this._text.length)
            return this._selectionDirection = "right", this._moveRight(c, "selectionEnd");
        },
        /**
         * Moves cursor right without keeping selection
         * @param {Event} e Event object
         */
        moveCursorRightWithoutShift: function(c) {
          var s = !0;
          return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (s = this._moveRight(c, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, s;
        },
        /**
         * Removes characters from start/end
         * start/end ar per grapheme position in _text array.
         *
         * @param {Number} start
         * @param {Number} end default to start + 1
         */
        removeChars: function(c, s) {
          typeof s > "u" && (s = c + 1), this.removeStyleFromTo(c, s), this._text.splice(c, s - c), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
        },
        /**
         * insert characters at start position, before start position.
         * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
         * if style array is provided, it must be as the same length of text in graphemes
         * if end is provided and is bigger than start, old text is replaced.
         * start/end ar per grapheme position in _text array.
         *
         * @param {String} text text to insert
         * @param {Array} style array of style objects
         * @param {Number} start
         * @param {Number} end default to start + 1
         */
        insertChars: function(c, s, h, o) {
          typeof o > "u" && (o = h), o > h && this.removeStyleFromTo(h, o);
          var i = f.util.string.graphemeSplit(c);
          this.insertNewStyleBlock(i, h, s), this._text = [].concat(this._text.slice(0, h), i, this._text.slice(o)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
        }
      }
    ), (function() {
      var c = f.util.toFixed, s = f.util.radiansToDegrees, h = f.util.calcRotateMatrix, o = f.util.transformPoint, i = /  +/g;
      f.util.object.extend(
        f.Text.prototype,
        /** @lends fabric.Text.prototype */
        {
          /**
           * Returns SVG representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          _toSVG: function() {
            var e = this._getSVGLeftTopOffsets(), t = this._getSVGTextAndBg(e.textTop, e.textLeft);
            return this._wrapSVGTextAndBg(t);
          },
          /**
           * Returns svg representation of an instance
           * @param {Function} [reviver] Method for further parsing of svg representation.
           * @return {String} svg representation of an instance
           */
          toSVG: function(e) {
            var t = this._createBaseSVGMarkup(
              this._toSVG(),
              { reviver: e, noStyle: !0, withShadow: !0 }
            ), n = this.path;
            return n ? t + n._createBaseSVGMarkup(n._toSVG(), {
              reviver: e,
              withShadow: !0
            }) : t;
          },
          /**
           * @private
           */
          _getSVGLeftTopOffsets: function() {
            return {
              textLeft: -this.width / 2,
              textTop: -this.height / 2,
              lineTop: this.getHeightOfLine(0)
            };
          },
          /**
           * @private
           */
          _wrapSVGTextAndBg: function(e) {
            var t = !0, n = this.getSvgTextDecoration(this);
            return [
              e.textBgRects.join(""),
              '		<text xml:space="preserve" ',
              this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
              this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
              this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
              this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
              n ? 'text-decoration="' + n + '" ' : "",
              'style="',
              this.getSvgStyles(t),
              '"',
              this.addPaintOrder(),
              " >",
              e.textSpans.join(""),
              `</text>
`
            ];
          },
          /**
           * @private
           * @param {Number} textTopOffset Text top offset
           * @param {Number} textLeftOffset Text left offset
           * @return {Object}
           */
          _getSVGTextAndBg: function(e, t) {
            var n = [], a = [], r = e, l;
            this._setSVGBg(a);
            for (var u = 0, d = this._textLines.length; u < d; u++)
              l = this._getLineLeftOffset(u), (this.textBackgroundColor || this.styleHas("textBackgroundColor", u)) && this._setSVGTextLineBg(a, u, t + l, r), this._setSVGTextLineText(n, u, t + l, r), r += this.getHeightOfLine(u);
            return {
              textSpans: n,
              textBgRects: a
            };
          },
          /**
           * @private
           */
          _createTextCharSpan: function(e, t, n, a, r) {
            var l = e !== e.trim() || e.match(i), u = this.getSvgSpanStyles(t, l), d = u ? 'style="' + u + '"' : "", g = t.deltaY, m = "", v = f.Object.NUM_FRACTION_DIGITS, y = "";
            if (g && (m = ' dy="' + c(g, v) + '" '), r.renderLeft !== void 0) {
              var w = r.angle;
              y = ' rotate="' + c(s(w), f.Object.NUM_FRACTION_DIGITS) + '" ';
              var E = r.width / 2, L = h({ angle: s(w) });
              L[4] = r.renderLeft, L[5] = r.renderTop;
              var W = o({ x: -E, y: 0 }, L);
              n = W.x, a = W.y;
            }
            return [
              '<tspan x="',
              c(n, v),
              '" y="',
              c(a, v),
              '" ',
              m,
              d,
              y,
              ">",
              f.util.string.escapeXml(e),
              "</tspan>"
            ].join("");
          },
          _setSVGTextLineText: function(e, t, n, a) {
            var r = this.getHeightOfLine(t), l = this.textAlign.indexOf("justify") !== -1, u, d, g = "", m, v, y = 0, w = this._textLines[t], E;
            a += r * (1 - this._fontSizeFraction) / this.lineHeight;
            for (var L = 0, W = w.length - 1; L <= W; L++)
              E = L === W || this.charSpacing || this.path, g += w[L], m = this.__charBounds[t][L], y === 0 ? (n += m.kernedWidth - m.width, y += m.width) : y += m.kernedWidth, l && !E && this._reSpaceAndTab.test(w[L]) && (E = !0), E || (u = u || this.getCompleteStyleDeclaration(t, L), d = this.getCompleteStyleDeclaration(t, L + 1), E = f.util.hasStyleChanged(u, d, !0)), E && (v = this._getStyleDeclaration(t, L) || {}, e.push(this._createTextCharSpan(g, v, n, a, m)), g = "", u = d, n += y, y = 0);
          },
          _pushTextBgRect: function(e, t, n, a, r, l) {
            var u = f.Object.NUM_FRACTION_DIGITS;
            e.push(
              "		<rect ",
              this._getFillAttributes(t),
              ' x="',
              c(n, u),
              '" y="',
              c(a, u),
              '" width="',
              c(r, u),
              '" height="',
              c(l, u),
              `"></rect>
`
            );
          },
          _setSVGTextLineBg: function(e, t, n, a) {
            for (var r = this._textLines[t], l = this.getHeightOfLine(t) / this.lineHeight, u = 0, d = 0, g, m, v = this.getValueOfPropertyAt(t, 0, "textBackgroundColor"), y = 0, w = r.length; y < w; y++)
              g = this.__charBounds[t][y], m = this.getValueOfPropertyAt(t, y, "textBackgroundColor"), m !== v ? (v && this._pushTextBgRect(
                e,
                v,
                n + d,
                a,
                u,
                l
              ), d = g.left, u = g.width, v = m) : u += g.kernedWidth;
            m && this._pushTextBgRect(
              e,
              m,
              n + d,
              a,
              u,
              l
            );
          },
          /**
           * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
           * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
           *
           * @private
           * @param {*} value
           * @return {String}
           */
          _getFillAttributes: function(e) {
            var t = e && typeof e == "string" ? new f.Color(e) : "";
            return !t || !t.getSource() || t.getAlpha() === 1 ? 'fill="' + e + '"' : 'opacity="' + t.getAlpha() + '" fill="' + t.setAlpha(1).toRgb() + '"';
          },
          /**
           * @private
           */
          _getSVGLineTopOffset: function(e) {
            for (var t = 0, n = 0, a = 0; a < e; a++)
              t += this.getHeightOfLine(a);
            return n = this.getHeightOfLine(a), {
              lineTop: t,
              offset: (this._fontSizeMult - this._fontSizeFraction) * n / (this.lineHeight * this._fontSizeMult)
            };
          },
          /**
           * Returns styles-string for svg-export
           * @param {Boolean} skipShadow a boolean to skip shadow filter output
           * @return {String}
           */
          getSvgStyles: function(e) {
            var t = f.Object.prototype.getSvgStyles.call(this, e);
            return t + " white-space: pre;";
          }
        }
      );
    })(), (function(c) {
      var s = c.fabric || (c.fabric = {});
      s.Textbox = s.util.createClass(s.IText, s.Observable, {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "textbox",
        /**
         * Minimum width of textbox, in pixels.
         * @type Number
         * @default
         */
        minWidth: 20,
        /**
         * Minimum calculated width of a textbox, in pixels.
         * fixed to 2 so that an empty textbox cannot go to 0
         * and is still selectable without text.
         * @type Number
         * @default
         */
        dynamicMinWidth: 2,
        /**
         * Cached array of text wrapping.
         * @type Array
         */
        __cachedLines: null,
        /**
         * Override standard Object class values
         */
        lockScalingFlip: !0,
        /**
         * Override standard Object class values
         * Textbox needs this on false
         */
        noScaleCache: !1,
        /**
         * Properties which when set cause object to change dimensions
         * @type Object
         * @private
         */
        _dimensionAffectingProps: s.Text.prototype._dimensionAffectingProps.concat("width"),
        /**
         * Use this regular expression to split strings in breakable lines
         * @private
         */
        _wordJoiners: /[ \t\r]/,
        /**
         * Use this boolean property in order to split strings that have no white space concept.
         * this is a cheap way to help with chinese/japanese
         * @type Boolean
         * @since 2.6.0
         */
        splitByGrapheme: !1,
        /**
         * Unlike superclass's version of this function, Textbox does not update
         * its width.
         * @private
         * @override
         */
        initDimensions: function() {
          this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
        },
        /**
         * Generate an object that translates the style object so that it is
         * broken up by visual lines (new lines and automatic wrapping).
         * The original text styles object is broken up by actual lines (new lines only),
         * which is only sufficient for Text / IText
         * @private
         */
        _generateStyleMap: function(h) {
          for (var o = 0, i = 0, e = 0, t = {}, n = 0; n < h.graphemeLines.length; n++)
            h.graphemeText[e] === `
` && n > 0 ? (i = 0, e++, o++) : !this.splitByGrapheme && this._reSpaceAndTab.test(h.graphemeText[e]) && n > 0 && (i++, e++), t[n] = { line: o, offset: i }, e += h.graphemeLines[n].length, i += h.graphemeLines[n].length;
          return t;
        },
        /**
         * Returns true if object has a style property or has it on a specified line
         * @param {Number} lineIndex
         * @return {Boolean}
         */
        styleHas: function(h, o) {
          if (this._styleMap && !this.isWrapping) {
            var i = this._styleMap[o];
            i && (o = i.line);
          }
          return s.Text.prototype.styleHas.call(this, h, o);
        },
        /**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
        isEmptyStyles: function(h) {
          if (!this.styles)
            return !0;
          var o = 0, i = h + 1, e, t, n = !1, a = this._styleMap[h], r = this._styleMap[h + 1];
          a && (h = a.line, o = a.offset), r && (i = r.line, n = i === h, e = r.offset), t = typeof h > "u" ? this.styles : { line: this.styles[h] };
          for (var l in t)
            for (var u in t[l])
              if (u >= o && (!n || u < e))
                for (var d in t[l][u])
                  return !1;
          return !0;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _getStyleDeclaration: function(h, o) {
          if (this._styleMap && !this.isWrapping) {
            var i = this._styleMap[h];
            if (!i)
              return null;
            h = i.line, o = i.offset + o;
          }
          return this.callSuper("_getStyleDeclaration", h, o);
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
        _setStyleDeclaration: function(h, o, i) {
          var e = this._styleMap[h];
          h = e.line, o = e.offset + o, this.styles[h][o] = i;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _deleteStyleDeclaration: function(h, o) {
          var i = this._styleMap[h];
          h = i.line, o = i.offset + o, delete this.styles[h][o];
        },
        /**
         * probably broken need a fix
         * Returns the real style line that correspond to the wrapped lineIndex line
         * Used just to verify if the line does exist or not.
         * @param {Number} lineIndex
         * @returns {Boolean} if the line exists or not
         * @private
         */
        _getLineStyle: function(h) {
          var o = this._styleMap[h];
          return !!this.styles[o.line];
        },
        /**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @param {Object} style
         * @private
         */
        _setLineStyle: function(h) {
          var o = this._styleMap[h];
          this.styles[o.line] = {};
        },
        /**
         * Wraps text using the 'width' property of Textbox. First this function
         * splits text on newlines, so we preserve newlines entered by the user.
         * Then it wraps each line using the width of the Textbox by calling
         * _wrapLine().
         * @param {Array} lines The string array of text that is split into lines
         * @param {Number} desiredWidth width you want to wrap to
         * @returns {Array} Array of lines
         */
        _wrapText: function(h, o) {
          var i = [], e;
          for (this.isWrapping = !0, e = 0; e < h.length; e++)
            i = i.concat(this._wrapLine(h[e], e, o));
          return this.isWrapping = !1, i;
        },
        /**
         * Helper function to measure a string of text, given its lineIndex and charIndex offset
         * it gets called when charBounds are not available yet.
         * @param {CanvasRenderingContext2D} ctx
         * @param {String} text
         * @param {number} lineIndex
         * @param {number} charOffset
         * @returns {number}
         * @private
         */
        _measureWord: function(h, o, i) {
          var e = 0, t, n = !0;
          i = i || 0;
          for (var a = 0, r = h.length; a < r; a++) {
            var l = this._getGraphemeBox(h[a], o, a + i, t, n);
            e += l.kernedWidth, t = h[a];
          }
          return e;
        },
        /**
         * Wraps a line of text using the width of the Textbox and a context.
         * @param {Array} line The grapheme array that represent the line
         * @param {Number} lineIndex
         * @param {Number} desiredWidth width you want to wrap the line to
         * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
         * @returns {Array} Array of line(s) into which the given text is wrapped
         * to.
         */
        _wrapLine: function(h, o, i, L) {
          var t = 0, n = this.splitByGrapheme, a = [], r = [], l = n ? s.util.string.graphemeSplit(h) : h.split(this._wordJoiners), u = "", d = 0, g = n ? "" : " ", m = 0, v = 0, y = 0, w = !0, E = this._getWidthOfCharSpacing(), L = L || 0;
          l.length === 0 && l.push([]), i -= L;
          for (var W = 0; W < l.length; W++)
            u = n ? l[W] : s.util.string.graphemeSplit(l[W]), m = this._measureWord(u, o, d), d += u.length, t += v + m - E, t > i && !w ? (a.push(r), r = [], t = m, w = !0) : t += E, !w && !n && r.push(g), r = r.concat(u), v = n ? 0 : this._measureWord([g], o, d), d++, w = !1, m > y && (y = m);
          return W && a.push(r), y + L > this.dynamicMinWidth && (this.dynamicMinWidth = y - E + L), a;
        },
        /**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @param {Number} lineIndex text to split
         * @return {Boolean}
         */
        isEndOfWrapping: function(h) {
          return !this._styleMap[h + 1] || this._styleMap[h + 1].line !== this._styleMap[h].line;
        },
        /**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * This is important only for splitByGrapheme at the end of wrapping.
         * If we are not wrapping the offset is always 1
         * @return Number
         */
        missingNewlineOffset: function(h, o) {
          return this.splitByGrapheme && !o ? this.isEndOfWrapping(h) ? 1 : 0 : 1;
        },
        /**
        * Gets lines of text to render in the Textbox. This function calculates
        * text wrapping on the fly every time it is called.
        * @param {String} text text to split
        * @returns {Array} Array of lines in the Textbox.
        * @override
        */
        _splitTextIntoLines: function(h) {
          for (var o = s.Text.prototype._splitTextIntoLines.call(this, h), i = this._wrapText(o.lines, this.width), e = new Array(i.length), t = 0; t < i.length; t++)
            e[t] = i[t].join("");
          return o.lines = e, o.graphemeLines = i, o;
        },
        getMinWidth: function() {
          return Math.max(this.minWidth, this.dynamicMinWidth);
        },
        _removeExtraneousStyles: function() {
          var h = {};
          for (var o in this._styleMap)
            this._textLines[o] && (h[this._styleMap[o].line] = 1);
          for (var o in this.styles)
            h[o] || delete this.styles[o];
        },
        /**
         * Returns object representation of an instance
         * @method toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(h) {
          return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(h));
        }
      }), s.Textbox.fromObject = function(h, o) {
        var i = s.util.stylesFromArray(h.styles, h.text), e = Object.assign({}, h, { styles: i });
        return delete e.path, s.Object._fromObject("Textbox", e, function(t) {
          h.path ? s.Object._fromObject("Path", h.path, function(n) {
            t.set("path", n), o(t);
          }, "path") : o(t);
        }, "text");
      };
    })(q), (function() {
      var c = f.controlsUtils, s = c.scaleSkewCursorStyleHandler, h = c.scaleCursorStyleHandler, o = c.scalingEqually, i = c.scalingYOrSkewingX, e = c.scalingXOrSkewingY, t = c.scaleOrSkewActionName, n = f.Object.prototype.controls;
      if (n.ml = new f.Control({
        x: -0.5,
        y: 0,
        cursorStyleHandler: s,
        actionHandler: e,
        getActionName: t
      }), n.mr = new f.Control({
        x: 0.5,
        y: 0,
        cursorStyleHandler: s,
        actionHandler: e,
        getActionName: t
      }), n.mb = new f.Control({
        x: 0,
        y: 0.5,
        cursorStyleHandler: s,
        actionHandler: i,
        getActionName: t
      }), n.mt = new f.Control({
        x: 0,
        y: -0.5,
        cursorStyleHandler: s,
        actionHandler: i,
        getActionName: t
      }), n.tl = new f.Control({
        x: -0.5,
        y: -0.5,
        cursorStyleHandler: h,
        actionHandler: o
      }), n.tr = new f.Control({
        x: 0.5,
        y: -0.5,
        cursorStyleHandler: h,
        actionHandler: o
      }), n.bl = new f.Control({
        x: -0.5,
        y: 0.5,
        cursorStyleHandler: h,
        actionHandler: o
      }), n.br = new f.Control({
        x: 0.5,
        y: 0.5,
        cursorStyleHandler: h,
        actionHandler: o
      }), n.mtr = new f.Control({
        x: 0,
        y: -0.5,
        actionHandler: c.rotationWithSnapping,
        cursorStyleHandler: c.rotationStyleHandler,
        offsetY: -40,
        withConnection: !0,
        actionName: "rotate"
      }), f.Textbox) {
        var a = f.Textbox.prototype.controls = {};
        a.mtr = n.mtr, a.tr = n.tr, a.br = n.br, a.tl = n.tl, a.bl = n.bl, a.mt = n.mt, a.mb = n.mb, a.mr = new f.Control({
          x: 0.5,
          y: 0,
          actionHandler: c.changeWidth,
          cursorStyleHandler: s,
          actionName: "resizing"
        }), a.ml = new f.Control({
          x: -0.5,
          y: 0,
          actionHandler: c.changeWidth,
          cursorStyleHandler: s,
          actionName: "resizing"
        });
      }
    })();
  })(xt)), xt;
}
var _t = zt();
function Et(q) {
  const f = document.documentElement.scrollWidth, at = document.documentElement.scrollHeight;
  q.setWidth(f), q.setHeight(at), q.renderAll();
}
function Ut() {
  const q = vt(null), f = vt(null), at = vt("draw"), ot = vt([]), nt = vt(null), [ut, dt] = Ct("draw");
  At(() => {
    const e = new _t.fabric.Canvas(q.current, {
      isDrawingMode: !0,
      selection: !1,
      backgroundColor: "transparent"
    });
    f.current = e, Et(e), e.freeDrawingBrush.color = "#FF2020", e.freeDrawingBrush.width = 2, ot.current = [e.toJSON()], e.on("path:created", (n) => {
      n.path.set({ selectable: !0, evented: !0 }), ot.current.push(e.toJSON());
    }), e.on("text:editing:exited", () => {
      ot.current.push(e.toJSON());
    });
    const t = () => Et(e);
    return window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t), e.dispose();
    };
  }, []);
  function c() {
    const e = f.current;
    e && (e.off("mouse:down"), e.off("mouse:move"), e.off("mouse:up"), e.isDrawingMode = !1, e.selection = !1);
  }
  function s(e) {
    const t = f.current;
    if (t)
      switch (c(), at.current = e, dt(e), e) {
        case "draw":
          t.isDrawingMode = !0, t.freeDrawingBrush.color = "#FF2020", t.freeDrawingBrush.width = 2;
          break;
        case "select":
          t.selection = !0, t.getObjects().forEach((n) => n.set({ selectable: !0, evented: !0 })), t.renderAll();
          break;
        case "arrow": {
          t.on("mouse:down", (n) => {
            if (at.current !== "arrow") return;
            const a = t.getPointer(n.e), r = new _t.fabric.Line([a.x, a.y, a.x, a.y], {
              stroke: "#FF2020",
              strokeWidth: 2,
              selectable: !1,
              evented: !1
            });
            t.add(r), nt.current = { start: a, obj: r, arrowHead: null };
          }), t.on("mouse:move", (n) => {
            if (!nt.current || at.current !== "arrow") return;
            const a = t.getPointer(n.e), { start: r, obj: l, arrowHead: u } = nt.current;
            l.set({ x2: a.x, y2: a.y }), u && t.remove(u);
            const d = a.x - r.x, g = a.y - r.y, m = Math.atan2(g, d) * 180 / Math.PI, v = new _t.fabric.Triangle({
              left: a.x,
              top: a.y,
              width: 12,
              height: 14,
              fill: "#FF2020",
              angle: m + 90,
              originX: "center",
              originY: "center",
              selectable: !1,
              evented: !1
            });
            t.add(v), nt.current.arrowHead = v, t.renderAll();
          }), t.on("mouse:up", () => {
            at.current === "arrow" && (nt.current && (nt.current.obj.set({ selectable: !0, evented: !0 }), nt.current.arrowHead && nt.current.arrowHead.set({ selectable: !0, evented: !0 }), nt.current = null), ot.current.push(t.toJSON()));
          });
          break;
        }
        case "box": {
          t.on("mouse:down", (n) => {
            if (at.current !== "box") return;
            const a = t.getPointer(n.e), r = new _t.fabric.Rect({
              left: a.x,
              top: a.y,
              width: 0,
              height: 0,
              fill: "transparent",
              stroke: "#FF2020",
              strokeWidth: 2,
              selectable: !1,
              evented: !1
            });
            t.add(r), nt.current = { start: a, obj: r };
          }), t.on("mouse:move", (n) => {
            if (!nt.current || at.current !== "box") return;
            const a = t.getPointer(n.e), { start: r, obj: l } = nt.current, u = a.x - r.x, d = a.y - r.y;
            l.set({
              width: Math.abs(u),
              height: Math.abs(d),
              left: u < 0 ? a.x : r.x,
              top: d < 0 ? a.y : r.y
            }), t.renderAll();
          }), t.on("mouse:up", () => {
            at.current === "box" && (nt.current && (nt.current.obj.set({ selectable: !0, evented: !0 }), nt.current = null), ot.current.push(t.toJSON()));
          });
          break;
        }
        case "circle": {
          t.on("mouse:down", (n) => {
            if (at.current !== "circle") return;
            const a = t.getPointer(n.e), r = new _t.fabric.Ellipse({
              left: a.x,
              top: a.y,
              rx: 0,
              ry: 0,
              fill: "transparent",
              stroke: "#FF2020",
              strokeWidth: 2,
              selectable: !1,
              evented: !1
            });
            t.add(r), nt.current = { start: a, obj: r };
          }), t.on("mouse:move", (n) => {
            if (!nt.current || at.current !== "circle") return;
            const a = t.getPointer(n.e), { start: r, obj: l } = nt.current, u = a.x - r.x, d = a.y - r.y;
            l.set({
              rx: Math.abs(u) / 2,
              ry: Math.abs(d) / 2,
              left: u < 0 ? a.x : r.x,
              top: d < 0 ? a.y : r.y
            }), t.renderAll();
          }), t.on("mouse:up", () => {
            at.current === "circle" && (nt.current && (nt.current.obj.set({ selectable: !0, evented: !0 }), nt.current = null), ot.current.push(t.toJSON()));
          });
          break;
        }
        case "text": {
          t.on("mouse:down", (n) => {
            if (at.current !== "text" || n.target) return;
            const a = t.getPointer(n.e), r = new _t.fabric.IText("Type here", {
              left: a.x,
              top: a.y,
              fontFamily: "monospace",
              fontSize: 14,
              fill: "#FF2020",
              editable: !0,
              selectable: !0
            });
            t.add(r), t.setActiveObject(r), r.enterEditing(), t.renderAll();
          });
          break;
        }
      }
  }
  function h() {
    const e = f.current;
    if (!e || ot.current.length <= 1) return;
    ot.current.pop();
    const t = ot.current[ot.current.length - 1];
    e.loadFromJSON(t, () => e.renderAll());
  }
  function o() {
    const e = f.current;
    e && (e.clear(), e.backgroundColor = "transparent", ot.current = [e.toJSON()], e.renderAll());
  }
  async function i(e) {
    const t = f.current;
    if (!t) return { success: !1 };
    e.forEach((n) => n && (n.style.visibility = "hidden"));
    try {
      const { toCanvas: n } = await import("./index-xEu3GZzD.mjs"), a = await n(document.body, {
        useCORS: !0,
        pixelRatio: window.devicePixelRatio || 1,
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      }), r = t.toDataURL({
        format: "png",
        multiplier: window.devicePixelRatio || 1
      }), l = document.createElement("canvas");
      l.width = a.width, l.height = a.height;
      const u = l.getContext("2d");
      u.drawImage(a, 0, 0), await new Promise((v) => {
        const y = new Image();
        y.onload = () => {
          u.drawImage(y, 0, 0, l.width, l.height), v();
        }, y.src = r;
      });
      const d = document.createElement("a"), m = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace("T", "-").replace(":", "");
      return d.download = `feedback-${m}.png`, d.href = l.toDataURL("image/png"), d.click(), { success: !0 };
    } catch (n) {
      return console.error("[feedback-overlay] saveImage error:", n), { success: !1 };
    } finally {
      e.forEach((n) => n && (n.style.visibility = ""));
    }
  }
  return {
    canvasElRef: q,
    fabricRef: f,
    activeTool: ut,
    setTool: s,
    undo: h,
    clearAll: o,
    saveImage: i
  };
}
const kt = "#1C1C22", Nt = "#2B4FC7", Gt = "#B54A2A", Dt = "#EEEAE3";
function Kt({ enabled: q }) {
  if (!q) return null;
  const [f, at] = Ct(!1), [ot, nt] = Ct(!1), [ut, dt] = Ct(""), c = vt(null), s = vt(null), h = vt(null), { canvasElRef: o, activeTool: i, setTool: e, undo: t, clearAll: n, saveImage: a } = Ut();
  At(() => {
    if (!f) return;
    const m = (v) => {
      v.key === "Escape" && l();
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [f]);
  function r() {
    at(!0), e("draw");
  }
  function l() {
    at(!1);
  }
  async function u() {
    if (ot) return;
    nt(!0), dt("Capturing…"), (await a([
      c.current,
      s.current,
      h.current
    ])).success ? dt("Saved ✓") : dt("Error — try again"), setTimeout(() => {
      dt(""), nt(!1);
    }, 1200);
  }
  return /* @__PURE__ */ ft(St, { children: [
    /* @__PURE__ */ it("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 900,
      pointerEvents: f ? "all" : "none"
    }, children: /* @__PURE__ */ it("canvas", { ref: o, style: {
      position: "absolute",
      inset: 0
    } }) }),
    f && /* @__PURE__ */ it("div", { ref: h, children: /* @__PURE__ */ it(
      Xt,
      {
        activeTool: i,
        onToolChange: e,
        onUndo: () => t(),
        onClear: () => n()
      }
    ) }),
    f && /* @__PURE__ */ ft(
      "button",
      {
        ref: s,
        onClick: u,
        disabled: ot,
        style: {
          position: "fixed",
          bottom: 28,
          right: 152,
          zIndex: 1e3,
          background: Nt,
          color: "#F7F4EF",
          border: "none",
          cursor: ot ? "default" : "pointer",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "monospace",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          boxShadow: "0 2px 16px rgba(43,79,199,0.3)"
        },
        children: [
          /* @__PURE__ */ ft(
            "svg",
            {
              viewBox: "0 0 24 24",
              width: 14,
              height: 14,
              stroke: "currentColor",
              fill: "none",
              strokeWidth: 1.8,
              children: [
                /* @__PURE__ */ it("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
                /* @__PURE__ */ it("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          ),
          "Save Image"
        ]
      }
    ),
    /* @__PURE__ */ it(
      "button",
      {
        ref: c,
        onClick: f ? l : r,
        style: {
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 1e3,
          background: f ? Gt : kt,
          color: Dt,
          border: "none",
          cursor: "pointer",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "monospace",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
        },
        children: f ? /* @__PURE__ */ ft(St, { children: [
          /* @__PURE__ */ ft(
            "svg",
            {
              viewBox: "0 0 24 24",
              width: 14,
              height: 14,
              stroke: "currentColor",
              fill: "none",
              strokeWidth: 1.8,
              children: [
                /* @__PURE__ */ it("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ it("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ]
            }
          ),
          "Exit"
        ] }) : /* @__PURE__ */ ft(St, { children: [
          /* @__PURE__ */ it(
            "svg",
            {
              viewBox: "0 0 24 24",
              width: 14,
              height: 14,
              stroke: "currentColor",
              fill: "none",
              strokeWidth: 1.8,
              children: /* @__PURE__ */ it("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
            }
          ),
          "Feedback"
        ] })
      }
    ),
    ut && /* @__PURE__ */ it(
      "div",
      {
        style: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: kt,
          color: Dt,
          fontFamily: "monospace",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          padding: "14px 28px",
          zIndex: 2e3,
          pointerEvents: "none"
        },
        children: ut
      }
    )
  ] });
}
export {
  Kt as FeedbackOverlay
};
