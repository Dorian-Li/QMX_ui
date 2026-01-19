import {c as dl, g as fl, _ as cs, d as Ei, o as us, a as hs, p as fo, b as po, e as zt, r as As, f as Cs} from "./Preplanet";
var Ji = {}
  , pl = {
  get exports() {
    return Ji
  },
  set exports(r) {
    Ji = r
  }
};
(function(r, e) {
    (function(t, n) {
        n(r, e)
      }
    )(dl, function(t, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var i, s;
      function o(S, y) {
        if (!(S instanceof y))
          throw new TypeError("Cannot call a class as a function")
      }
      var a = function() {
        function S(y, b) {
          for (var L = 0; L < b.length; L++) {
            var _ = b[L];
            _.enumerable = _.enumerable || !1,
              _.configurable = !0,
            "value"in _ && (_.writable = !0),
              Object.defineProperty(y, _.key, _)
          }
        }
        return function(y, b, L) {
          return b && S(y.prototype, b),
          L && S(y, L),
            y
        }
      }();
      function c(S, y) {
        return y.indexOf(S) >= 0
      }
      function l(S, y) {
        for (var b in y)
          if (S[b] == null) {
            var L = y[b];
            S[b] = L
          }
        return S
      }
      function u(S) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(S)
      }
      function d(S) {
        var y = arguments.length <= 1 || arguments[1] === void 0 ? !1 : arguments[1]
          , b = arguments.length <= 2 || arguments[2] === void 0 ? !1 : arguments[2]
          , L = arguments.length <= 3 || arguments[3] === void 0 ? null : arguments[3]
          , _ = void 0;
        return document.createEvent != null ? (_ = document.createEvent("CustomEvent"),
          _.initCustomEvent(S, y, b, L)) : document.createEventObject != null ? (_ = document.createEventObject(),
          _.eventType = S) : _.eventName = S,
          _
      }
      function p(S, y) {
        S.dispatchEvent != null ? S.dispatchEvent(y) : y in (S != null) ? S[y]() : "on" + y in (S != null) && S["on" + y]()
      }
      function m(S, y, b) {
        S.addEventListener != null ? S.addEventListener(y, b, !1) : S.attachEvent != null ? S.attachEvent("on" + y, b) : S[y] = b
      }
      function g(S, y, b) {
        S.removeEventListener != null ? S.removeEventListener(y, b, !1) : S.detachEvent != null ? S.detachEvent("on" + y, b) : delete S[y]
      }
      function h() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
      }
      var f = window.WeakMap || window.MozWeakMap || function() {
        function S() {
          o(this, S),
            this.keys = [],
            this.values = []
        }
        return a(S, [{
          key: "get",
          value: function(b) {
            for (var L = 0; L < this.keys.length; L++) {
              var _ = this.keys[L];
              if (_ === b)
                return this.values[L]
            }
          }
        }, {
          key: "set",
          value: function(b, L) {
            for (var _ = 0; _ < this.keys.length; _++) {
              var A = this.keys[_];
              if (A === b)
                return this.values[_] = L,
                  this
            }
            return this.keys.push(b),
              this.values.push(L),
              this
          }
        }]),
          S
      }()
        , v = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (s = i = function() {
        function S() {
          o(this, S),
          typeof console < "u" && console !== null && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return a(S, [{
          key: "observe",
          value: function() {}
        }]),
          S
      }(),
        i.notSupported = !0,
        s)
        , w = window.getComputedStyle || function(y) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function(_) {
            _ === "float" && (_ = "styleFloat"),
            b.test(_) && _.replace(b, function(P, G) {
              return G.toUpperCase()
            });
            var A = y.currentStyle;
            return (A != null ? A[_] : void 0) || null
          }
        }
      }
        , x = function() {
        function S() {
          var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          o(this, S),
            this.defaults = {
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !0,
              live: !0,
              callback: null,
              scrollContainer: null
            },
            this.animate = function() {
              return "requestAnimationFrame"in window ? function(L) {
                  return window.requestAnimationFrame(L)
                }
                : function(L) {
                  return L()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = l(y, this.defaults),
          y.scrollContainer != null && (this.config.scrollContainer = document.querySelector(y.scrollContainer)),
            this.animationNameCache = new f,
            this.wowEvent = d(this.config.boxClass)
        }
        return a(S, [{
          key: "init",
          value: function() {
            this.element = window.document.documentElement,
              c(document.readyState, ["interactive", "complete"]) ? this.start() : m(document, "DOMContentLoaded", this.start),
              this.finished = []
          }
        }, {
          key: "start",
          value: function() {
            var b = this;
            if (this.stopped = !1,
              this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
              this.all = this.boxes.slice(0),
              this.boxes.length)
              if (this.disabled())
                this.resetStyle();
              else
                for (var L = 0; L < this.boxes.length; L++) {
                  var _ = this.boxes[L];
                  this.applyStyle(_, !0)
                }
            if (this.disabled() || (m(this.config.scrollContainer || window, "scroll", this.scrollHandler),
              m(window, "resize", this.scrollHandler),
              this.interval = setInterval(this.scrollCallback, 50)),
              this.config.live) {
              var A = new v(function(P) {
                  for (var G = 0; G < P.length; G++)
                    for (var K = P[G], z = 0; z < K.addedNodes.length; z++) {
                      var F = K.addedNodes[z];
                      b.doSync(F)
                    }
                }
              );
              A.observe(document.body, {
                childList: !0,
                subtree: !0
              })
            }
          }
        }, {
          key: "stop",
          value: function() {
            this.stopped = !0,
              g(this.config.scrollContainer || window, "scroll", this.scrollHandler),
              g(window, "resize", this.scrollHandler),
            this.interval != null && clearInterval(this.interval)
          }
        }, {
          key: "sync",
          value: function() {
            v.notSupported && this.doSync(this.element)
          }
        }, {
          key: "doSync",
          value: function(b) {
            if ((typeof b > "u" || b === null) && (b = this.element),
            b.nodeType === 1) {
              b = b.parentNode || b;
              for (var L = b.querySelectorAll("." + this.config.boxClass), _ = 0; _ < L.length; _++) {
                var A = L[_];
                c(A, this.all) || (this.boxes.push(A),
                  this.all.push(A),
                  this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(A, !0),
                  this.scrolled = !0)
              }
            }
          }
        }, {
          key: "show",
          value: function(b) {
            return this.applyStyle(b),
              b.className = b.className + " " + this.config.animateClass,
            this.config.callback != null && this.config.callback(b),
              p(b, this.wowEvent),
              m(b, "animationend", this.resetAnimation),
              m(b, "oanimationend", this.resetAnimation),
              m(b, "webkitAnimationEnd", this.resetAnimation),
              m(b, "MSAnimationEnd", this.resetAnimation),
              b
          }
        }, {
          key: "applyStyle",
          value: function(b, L) {
            var _ = this
              , A = b.getAttribute("data-wow-duration")
              , P = b.getAttribute("data-wow-delay")
              , G = b.getAttribute("data-wow-iteration");
            return this.animate(function() {
              return _.customStyle(b, L, A, P, G)
            })
          }
        }, {
          key: "resetStyle",
          value: function() {
            for (var b = 0; b < this.boxes.length; b++) {
              var L = this.boxes[b];
              L.style.visibility = "visible"
            }
          }
        }, {
          key: "resetAnimation",
          value: function(b) {
            if (b.type.toLowerCase().indexOf("animationend") >= 0) {
              var L = b.target || b.srcElement;
              L.className = L.className.replace(this.config.animateClass, "").trim()
            }
          }
        }, {
          key: "customStyle",
          value: function(b, L, _, A, P) {
            return L && this.cacheAnimationName(b),
              b.style.visibility = L ? "hidden" : "visible",
            _ && this.vendorSet(b.style, {
              animationDuration: _
            }),
            A && this.vendorSet(b.style, {
              animationDelay: A
            }),
            P && this.vendorSet(b.style, {
              animationIterationCount: P
            }),
              this.vendorSet(b.style, {
                animationName: L ? "none" : this.cachedAnimationName(b)
              }),
              b
          }
        }, {
          key: "vendorSet",
          value: function(b, L) {
            for (var _ in L)
              if (L.hasOwnProperty(_)) {
                var A = L[_];
                b["" + _] = A;
                for (var P = 0; P < this.vendors.length; P++) {
                  var G = this.vendors[P];
                  b["" + G + _.charAt(0).toUpperCase() + _.substr(1)] = A
                }
              }
          }
        }, {
          key: "vendorCSS",
          value: function(b, L) {
            for (var _ = w(b), A = _.getPropertyCSSValue(L), P = 0; P < this.vendors.length; P++) {
              var G = this.vendors[P];
              A = A || _.getPropertyCSSValue("-" + G + "-" + L)
            }
            return A
          }
        }, {
          key: "animationName",
          value: function(b) {
            var L = void 0;
            try {
              L = this.vendorCSS(b, "animation-name").cssText
            } catch {
              L = w(b).getPropertyValue("animation-name")
            }
            return L === "none" ? "" : L
          }
        }, {
          key: "cacheAnimationName",
          value: function(b) {
            return this.animationNameCache.set(b, this.animationName(b))
          }
        }, {
          key: "cachedAnimationName",
          value: function(b) {
            return this.animationNameCache.get(b)
          }
        }, {
          key: "scrollHandler",
          value: function() {
            this.scrolled = !0
          }
        }, {
          key: "scrollCallback",
          value: function() {
            if (this.scrolled) {
              this.scrolled = !1;
              for (var b = [], L = 0; L < this.boxes.length; L++) {
                var _ = this.boxes[L];
                if (_) {
                  if (this.isVisible(_)) {
                    this.show(_);
                    continue
                  }
                  b.push(_)
                }
              }
              this.boxes = b,
              !this.boxes.length && !this.config.live && this.stop()
            }
          }
        }, {
          key: "offsetTop",
          value: function(b) {
            for (; b.offsetTop === void 0; )
              b = b.parentNode;
            for (var L = b.offsetTop; b.offsetParent; )
              b = b.offsetParent,
                L += b.offsetTop;
            return L
          }
        }, {
          key: "isVisible",
          value: function(b) {
            var L = b.getAttribute("data-wow-offset") || this.config.offset
              , _ = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
              , A = _ + Math.min(this.element.clientHeight, h()) - L
              , P = this.offsetTop(b)
              , G = P + b.clientHeight;
            return P <= A && G >= _
          }
        }, {
          key: "disabled",
          value: function() {
            return !this.config.mobile && u(navigator.userAgent)
          }
        }]),
          S
      }();
      n.default = x,
        t.exports = n.default
    })
  }
)(pl, Ji);
const mo = fl(Ji);
const ml = {
  name: "header",
  data() {
    return {
      date: Ei().format("YYYY-MM-DD"),
      time: Ei().format("HH:mm:ss")
    }
  },
  props: {
    title: {
      type: String,
      default() {
        return "数据统计可视化大屏"
      }
    }
  },
  computed: {
    week() {
      var r = Ei().day()
        , e = ["日", "一", "二", "三", "四", "五", "六"];
      return e[r]
    }
  },
  watch: {},
  mounted() {
    var r = this
      , e = new mo({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function(t) {},
      scrollContainer: null,
      resetAnimation: !0
    });
    e.init(),
      setInterval(function() {
        r.time = Ei().format("HH:mm:ss")
      }, 1e3)
  }
}
  , gl = r=>(fo("data-v-257e7187"),
  r = r(),
  po(),
  r)
  , _l = {
  class: "header wow fadeInDown"
}
  , xl = gl(()=>zt("div", {
  class: "headerTitle"
}, null, -1))
  , vl = [xl];
function yl(r, e, t, n, i, s) {
  return us(),
    hs("div", _l, vl)
}
const Ml = cs(ml, [["render", yl], ["__scopeId", "data-v-257e7187"]]);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ds = "150"
  , Cn = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2
}
  , Ln = {
  ROTATE: 0,
  PAN: 1,
  DOLLY_PAN: 2,
  DOLLY_ROTATE: 3
}
  , Sl = 0
  , Ls = 1
  , bl = 2
  , go = 1
  , wl = 2
  , hi = 3
  , ln = 0
  , Mt = 1
  , sn = 2
  , on = 0
  , Xn = 1
  , Rs = 2
  , Ps = 3
  , Ds = 4
  , El = 5
  , Wn = 100
  , Tl = 101
  , Al = 102
  , Is = 103
  , Ns = 104
  , Cl = 200
  , Ll = 201
  , Rl = 202
  , Pl = 203
  , _o = 204
  , xo = 205
  , Dl = 206
  , Il = 207
  , Nl = 208
  , Fl = 209
  , Ol = 210
  , Ul = 0
  , zl = 1
  , Bl = 2
  , Jr = 3
  , kl = 4
  , Gl = 5
  , Vl = 6
  , Hl = 7
  , vo = 0
  , Wl = 1
  , ql = 2
  , Zt = 0
  , Xl = 1
  , jl = 2
  , Yl = 3
  , $l = 4
  , Zl = 5
  , yo = 300
  , $n = 301
  , Zn = 302
  , Qr = 303
  , es = 304
  , tr = 306
  , ts = 1e3
  , Rt = 1001
  , ns = 1002
  , ft = 1003
  , Fs = 1004
  , fr = 1005
  , Et = 1006
  , Kl = 1007
  , mi = 1008
  , Sn = 1009
  , Jl = 1010
  , Ql = 1011
  , Mo = 1012
  , ec = 1013
  , vn = 1014
  , yn = 1015
  , gi = 1016
  , tc = 1017
  , nc = 1018
  , jn = 1020
  , ic = 1021
  , Pt = 1023
  , rc = 1024
  , sc = 1025
  , Mn = 1026
  , Kn = 1027
  , ac = 1028
  , oc = 1029
  , lc = 1030
  , cc = 1031
  , uc = 1033
  , pr = 33776
  , mr = 33777
  , gr = 33778
  , _r = 33779
  , Os = 35840
  , Us = 35841
  , zs = 35842
  , Bs = 35843
  , hc = 36196
  , ks = 37492
  , Gs = 37496
  , Vs = 37808
  , Hs = 37809
  , Ws = 37810
  , qs = 37811
  , Xs = 37812
  , js = 37813
  , Ys = 37814
  , $s = 37815
  , Zs = 37816
  , Ks = 37817
  , Js = 37818
  , Qs = 37819
  , ea = 37820
  , ta = 37821
  , xr = 36492
  , dc = 36283
  , na = 36284
  , ia = 36285
  , ra = 36286
  , bn = 3e3
  , ke = 3001
  , fc = 3200
  , pc = 3201
  , mc = 0
  , gc = 1
  , Ut = "srgb"
  , _i = "srgb-linear"
  , So = "display-p3"
  , vr = 7680
  , _c = 519
  , sa = 35044
  , aa = "300 es"
  , is = 1035;
class An {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []),
    n[e].indexOf(t) === -1 && n[e].push(t)
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1)
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null
    }
  }
}
const rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
  , yr = Math.PI / 180
  , oa = 180 / Math.PI;
function vi() {
  const r = Math.random() * 4294967295 | 0
    , e = Math.random() * 4294967295 | 0
    , t = Math.random() * 4294967295 | 0
    , n = Math.random() * 4294967295 | 0;
  return (rt[r & 255] + rt[r >> 8 & 255] + rt[r >> 16 & 255] + rt[r >> 24 & 255] + "-" + rt[e & 255] + rt[e >> 8 & 255] + "-" + rt[e >> 16 & 15 | 64] + rt[e >> 24 & 255] + "-" + rt[t & 63 | 128] + rt[t >> 8 & 255] + "-" + rt[t >> 16 & 255] + rt[t >> 24 & 255] + rt[n & 255] + rt[n >> 8 & 255] + rt[n >> 16 & 255] + rt[n >> 24 & 255]).toLowerCase()
}
function at(r, e, t) {
  return Math.max(e, Math.min(t, r))
}
function xc(r, e) {
  return (r % e + e) % e
}
function Mr(r, e, t) {
  return (1 - t) * r + t * e
}
function la(r) {
  return (r & r - 1) === 0 && r !== 0
}
function vc(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2))
}
function Ti(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.")
  }
}
function xt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.")
  }
}
class we {
  constructor(e=0, t=0) {
    we.prototype.isVector2 = !0,
      this.x = e,
      this.y = t
  }
  get width() {
    return this.x
  }
  set width(e) {
    this.x = e
  }
  get height() {
    return this.y
  }
  set height(e) {
    this.y = e
  }
  set(e, t) {
    return this.x = e,
      this.y = t,
      this
  }
  setScalar(e) {
    return this.x = e,
      this.y = e,
      this
  }
  setX(e) {
    return this.x = e,
      this
  }
  setY(e) {
    return this.y = e,
      this
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e)
    }
  }
  clone() {
    return new this.constructor(this.x,this.y)
  }
  copy(e) {
    return this.x = e.x,
      this.y = e.y,
      this
  }
  add(e) {
    return this.x += e.x,
      this.y += e.y,
      this
  }
  addScalar(e) {
    return this.x += e,
      this.y += e,
      this
  }
  addVectors(e, t) {
    return this.x = e.x + t.x,
      this.y = e.y + t.y,
      this
  }
  addScaledVector(e, t) {
    return this.x += e.x * t,
      this.y += e.y * t,
      this
  }
  sub(e) {
    return this.x -= e.x,
      this.y -= e.y,
      this
  }
  subScalar(e) {
    return this.x -= e,
      this.y -= e,
      this
  }
  subVectors(e, t) {
    return this.x = e.x - t.x,
      this.y = e.y - t.y,
      this
  }
  multiply(e) {
    return this.x *= e.x,
      this.y *= e.y,
      this
  }
  multiplyScalar(e) {
    return this.x *= e,
      this.y *= e,
      this
  }
  divide(e) {
    return this.x /= e.x,
      this.y /= e.y,
      this
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e)
  }
  applyMatrix3(e) {
    const t = this.x
      , n = this.y
      , i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6],
      this.y = i[1] * t + i[4] * n + i[7],
      this
  }
  min(e) {
    return this.x = Math.min(this.x, e.x),
      this.y = Math.min(this.y, e.y),
      this
  }
  max(e) {
    return this.x = Math.max(this.x, e.x),
      this.y = Math.max(this.y, e.y),
      this
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)),
      this.y = Math.max(e.y, Math.min(t.y, this.y)),
      this
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)),
      this.y = Math.max(e, Math.min(t, this.y)),
      this
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  }
  floor() {
    return this.x = Math.floor(this.x),
      this.y = Math.floor(this.y),
      this
  }
  ceil() {
    return this.x = Math.ceil(this.x),
      this.y = Math.ceil(this.y),
      this
  }
  round() {
    return this.x = Math.round(this.x),
      this.y = Math.round(this.y),
      this
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
      this
  }
  negate() {
    return this.x = -this.x,
      this.y = -this.y,
      this
  }
  dot(e) {
    return this.x * e.x + this.y * e.y
  }
  cross(e) {
    return this.x * e.y - this.y * e.x
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y)
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e))
  }
  distanceToSquared(e) {
    const t = this.x - e.x
      , n = this.y - e.y;
    return t * t + n * n
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e)
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t,
      this.y += (e.y - this.y) * t,
      this
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n,
      this.y = e.y + (t.y - e.y) * n,
      this
  }
  equals(e) {
    return e.x === this.x && e.y === this.y
  }
  fromArray(e, t=0) {
    return this.x = e[t],
      this.y = e[t + 1],
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this.x,
      e[t + 1] = this.y,
      e
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t),
      this.y = e.getY(t),
      this
  }
  rotateAround(e, t) {
    const n = Math.cos(t)
      , i = Math.sin(t)
      , s = this.x - e.x
      , o = this.y - e.y;
    return this.x = s * n - o * i + e.x,
      this.y = s * i + o * n + e.y,
      this
  }
  random() {
    return this.x = Math.random(),
      this.y = Math.random(),
      this
  }
  *[Symbol.iterator]() {
    yield this.x,
      yield this.y
  }
}
class pt {
  constructor() {
    pt.prototype.isMatrix3 = !0,
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
  }
  set(e, t, n, i, s, o, a, c, l) {
    const u = this.elements;
    return u[0] = e,
      u[1] = i,
      u[2] = a,
      u[3] = t,
      u[4] = s,
      u[5] = c,
      u[6] = n,
      u[7] = o,
      u[8] = l,
      this
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
      this
  }
  copy(e) {
    const t = this.elements
      , n = e.elements;
    return t[0] = n[0],
      t[1] = n[1],
      t[2] = n[2],
      t[3] = n[3],
      t[4] = n[4],
      t[5] = n[5],
      t[6] = n[6],
      t[7] = n[7],
      t[8] = n[8],
      this
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
  }
  multiply(e) {
    return this.multiplyMatrices(this, e)
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this)
  }
  multiplyMatrices(e, t) {
    const n = e.elements
      , i = t.elements
      , s = this.elements
      , o = n[0]
      , a = n[3]
      , c = n[6]
      , l = n[1]
      , u = n[4]
      , d = n[7]
      , p = n[2]
      , m = n[5]
      , g = n[8]
      , h = i[0]
      , f = i[3]
      , v = i[6]
      , w = i[1]
      , x = i[4]
      , S = i[7]
      , y = i[2]
      , b = i[5]
      , L = i[8];
    return s[0] = o * h + a * w + c * y,
      s[3] = o * f + a * x + c * b,
      s[6] = o * v + a * S + c * L,
      s[1] = l * h + u * w + d * y,
      s[4] = l * f + u * x + d * b,
      s[7] = l * v + u * S + d * L,
      s[2] = p * h + m * w + g * y,
      s[5] = p * f + m * x + g * b,
      s[8] = p * v + m * S + g * L,
      this
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e,
      t[3] *= e,
      t[6] *= e,
      t[1] *= e,
      t[4] *= e,
      t[7] *= e,
      t[2] *= e,
      t[5] *= e,
      t[8] *= e,
      this
  }
  determinant() {
    const e = this.elements
      , t = e[0]
      , n = e[1]
      , i = e[2]
      , s = e[3]
      , o = e[4]
      , a = e[5]
      , c = e[6]
      , l = e[7]
      , u = e[8];
    return t * o * u - t * a * l - n * s * u + n * a * c + i * s * l - i * o * c
  }
  invert() {
    const e = this.elements
      , t = e[0]
      , n = e[1]
      , i = e[2]
      , s = e[3]
      , o = e[4]
      , a = e[5]
      , c = e[6]
      , l = e[7]
      , u = e[8]
      , d = u * o - a * l
      , p = a * c - u * s
      , m = l * s - o * c
      , g = t * d + n * p + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const h = 1 / g;
    return e[0] = d * h,
      e[1] = (i * l - u * n) * h,
      e[2] = (a * n - i * o) * h,
      e[3] = p * h,
      e[4] = (u * t - i * c) * h,
      e[5] = (i * s - a * t) * h,
      e[6] = m * h,
      e[7] = (n * c - l * t) * h,
      e[8] = (o * t - n * s) * h,
      this
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1],
      t[1] = t[3],
      t[3] = e,
      e = t[2],
      t[2] = t[6],
      t[6] = e,
      e = t[5],
      t[5] = t[7],
      t[7] = e,
      this
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose()
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0],
      e[1] = t[3],
      e[2] = t[6],
      e[3] = t[1],
      e[4] = t[4],
      e[5] = t[7],
      e[6] = t[2],
      e[7] = t[5],
      e[8] = t[8],
      this
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const c = Math.cos(s)
      , l = Math.sin(s);
    return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -i * l, i * c, -i * (-l * o + c * a) + a + t, 0, 0, 1),
      this
  }
  scale(e, t) {
    return this.premultiply(Sr.makeScale(e, t)),
      this
  }
  rotate(e) {
    return this.premultiply(Sr.makeRotation(-e)),
      this
  }
  translate(e, t) {
    return this.premultiply(Sr.makeTranslation(e, t)),
      this
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
  }
  makeRotation(e) {
    const t = Math.cos(e)
      , n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
      this
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
      this
  }
  equals(e) {
    const t = this.elements
      , n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0
  }
  fromArray(e, t=0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this
  }
  toArray(e=[], t=0) {
    const n = this.elements;
    return e[t] = n[0],
      e[t + 1] = n[1],
      e[t + 2] = n[2],
      e[t + 3] = n[3],
      e[t + 4] = n[4],
      e[t + 5] = n[5],
      e[t + 6] = n[6],
      e[t + 7] = n[7],
      e[t + 8] = n[8],
      e
  }
  clone() {
    return new this.constructor().fromArray(this.elements)
  }
}
const Sr = new pt;
function bo(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1
}
function Qi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r)
}
class wn {
  constructor(e=0, t=0, n=0, i=1) {
    this.isQuaternion = !0,
      this._x = e,
      this._y = t,
      this._z = n,
      this._w = i
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let c = n[i + 0]
      , l = n[i + 1]
      , u = n[i + 2]
      , d = n[i + 3];
    const p = s[o + 0]
      , m = s[o + 1]
      , g = s[o + 2]
      , h = s[o + 3];
    if (a === 0) {
      e[t + 0] = c,
        e[t + 1] = l,
        e[t + 2] = u,
        e[t + 3] = d;
      return
    }
    if (a === 1) {
      e[t + 0] = p,
        e[t + 1] = m,
        e[t + 2] = g,
        e[t + 3] = h;
      return
    }
    if (d !== h || c !== p || l !== m || u !== g) {
      let f = 1 - a;
      const v = c * p + l * m + u * g + d * h
        , w = v >= 0 ? 1 : -1
        , x = 1 - v * v;
      if (x > Number.EPSILON) {
        const y = Math.sqrt(x)
          , b = Math.atan2(y, v * w);
        f = Math.sin(f * b) / y,
          a = Math.sin(a * b) / y
      }
      const S = a * w;
      if (c = c * f + p * S,
        l = l * f + m * S,
        u = u * f + g * S,
        d = d * f + h * S,
      f === 1 - a) {
        const y = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= y,
          l *= y,
          u *= y,
          d *= y
      }
    }
    e[t] = c,
      e[t + 1] = l,
      e[t + 2] = u,
      e[t + 3] = d
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i]
      , c = n[i + 1]
      , l = n[i + 2]
      , u = n[i + 3]
      , d = s[o]
      , p = s[o + 1]
      , m = s[o + 2]
      , g = s[o + 3];
    return e[t] = a * g + u * d + c * m - l * p,
      e[t + 1] = c * g + u * p + l * d - a * m,
      e[t + 2] = l * g + u * m + a * p - c * d,
      e[t + 3] = u * g - a * d - c * p - l * m,
      e
  }
  get x() {
    return this._x
  }
  set x(e) {
    this._x = e,
      this._onChangeCallback()
  }
  get y() {
    return this._y
  }
  set y(e) {
    this._y = e,
      this._onChangeCallback()
  }
  get z() {
    return this._z
  }
  set z(e) {
    this._z = e,
      this._onChangeCallback()
  }
  get w() {
    return this._w
  }
  set w(e) {
    this._w = e,
      this._onChangeCallback()
  }
  set(e, t, n, i) {
    return this._x = e,
      this._y = t,
      this._z = n,
      this._w = i,
      this._onChangeCallback(),
      this
  }
  clone() {
    return new this.constructor(this._x,this._y,this._z,this._w)
  }
  copy(e) {
    return this._x = e.x,
      this._y = e.y,
      this._z = e.z,
      this._w = e.w,
      this._onChangeCallback(),
      this
  }
  setFromEuler(e, t) {
    const n = e._x
      , i = e._y
      , s = e._z
      , o = e._order
      , a = Math.cos
      , c = Math.sin
      , l = a(n / 2)
      , u = a(i / 2)
      , d = a(s / 2)
      , p = c(n / 2)
      , m = c(i / 2)
      , g = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = p * u * d + l * m * g,
          this._y = l * m * d - p * u * g,
          this._z = l * u * g + p * m * d,
          this._w = l * u * d - p * m * g;
        break;
      case "YXZ":
        this._x = p * u * d + l * m * g,
          this._y = l * m * d - p * u * g,
          this._z = l * u * g - p * m * d,
          this._w = l * u * d + p * m * g;
        break;
      case "ZXY":
        this._x = p * u * d - l * m * g,
          this._y = l * m * d + p * u * g,
          this._z = l * u * g + p * m * d,
          this._w = l * u * d - p * m * g;
        break;
      case "ZYX":
        this._x = p * u * d - l * m * g,
          this._y = l * m * d + p * u * g,
          this._z = l * u * g - p * m * d,
          this._w = l * u * d + p * m * g;
        break;
      case "YZX":
        this._x = p * u * d + l * m * g,
          this._y = l * m * d + p * u * g,
          this._z = l * u * g - p * m * d,
          this._w = l * u * d - p * m * g;
        break;
      case "XZY":
        this._x = p * u * d - l * m * g,
          this._y = l * m * d - p * u * g,
          this._z = l * u * g + p * m * d,
          this._w = l * u * d + p * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
    }
    return t !== !1 && this._onChangeCallback(),
      this
  }
  setFromAxisAngle(e, t) {
    const n = t / 2
      , i = Math.sin(n);
    return this._x = e.x * i,
      this._y = e.y * i,
      this._z = e.z * i,
      this._w = Math.cos(n),
      this._onChangeCallback(),
      this
  }
  setFromRotationMatrix(e) {
    const t = e.elements
      , n = t[0]
      , i = t[4]
      , s = t[8]
      , o = t[1]
      , a = t[5]
      , c = t[9]
      , l = t[2]
      , u = t[6]
      , d = t[10]
      , p = n + a + d;
    if (p > 0) {
      const m = .5 / Math.sqrt(p + 1);
      this._w = .25 / m,
        this._x = (u - c) * m,
        this._y = (s - l) * m,
        this._z = (o - i) * m
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - c) / m,
        this._x = .25 * m,
        this._y = (i + o) / m,
        this._z = (s + l) / m
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (s - l) / m,
        this._x = (i + o) / m,
        this._y = .25 * m,
        this._z = (c + u) / m
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - i) / m,
        this._x = (s + l) / m,
        this._y = (c + u) / m,
        this._z = .25 * m
    }
    return this._onChangeCallback(),
      this
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0,
      Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
      this._y = e.z * t.x - e.x * t.z,
      this._z = e.x * t.y - e.y * t.x,
      this._w = n),
      this.normalize()
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(at(this.dot(e), -1, 1)))
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i),
      this
  }
  identity() {
    return this.set(0, 0, 0, 1)
  }
  invert() {
    return this.conjugate()
  }
  conjugate() {
    return this._x *= -1,
      this._y *= -1,
      this._z *= -1,
      this._onChangeCallback(),
      this
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0,
      this._y = 0,
      this._z = 0,
      this._w = 1) : (e = 1 / e,
      this._x = this._x * e,
      this._y = this._y * e,
      this._z = this._z * e,
      this._w = this._w * e),
      this._onChangeCallback(),
      this
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e)
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this)
  }
  multiplyQuaternions(e, t) {
    const n = e._x
      , i = e._y
      , s = e._z
      , o = e._w
      , a = t._x
      , c = t._y
      , l = t._z
      , u = t._w;
    return this._x = n * u + o * a + i * l - s * c,
      this._y = i * u + o * c + s * a - n * l,
      this._z = s * u + o * l + n * c - i * a,
      this._w = o * u - n * a - i * c - s * l,
      this._onChangeCallback(),
      this
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x
      , i = this._y
      , s = this._z
      , o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w,
      this._x = -e._x,
      this._y = -e._y,
      this._z = -e._z,
      a = -a) : this.copy(e),
    a >= 1)
      return this._w = o,
        this._x = n,
        this._y = i,
        this._z = s,
        this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w,
        this._x = m * n + t * this._x,
        this._y = m * i + t * this._y,
        this._z = m * s + t * this._z,
        this.normalize(),
        this._onChangeCallback(),
        this
    }
    const l = Math.sqrt(c)
      , u = Math.atan2(l, a)
      , d = Math.sin((1 - t) * u) / l
      , p = Math.sin(t * u) / l;
    return this._w = o * d + this._w * p,
      this._x = n * d + this._x * p,
      this._y = i * d + this._y * p,
      this._z = s * d + this._z * p,
      this._onChangeCallback(),
      this
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n)
  }
  random() {
    const e = Math.random()
      , t = Math.sqrt(1 - e)
      , n = Math.sqrt(e)
      , i = 2 * Math.PI * Math.random()
      , s = 2 * Math.PI * Math.random();
    return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i))
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
  }
  fromArray(e, t=0) {
    return this._x = e[t],
      this._y = e[t + 1],
      this._z = e[t + 2],
      this._w = e[t + 3],
      this._onChangeCallback(),
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this._x,
      e[t + 1] = this._y,
      e[t + 2] = this._z,
      e[t + 3] = this._w,
      e
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t),
      this._y = e.getY(t),
      this._z = e.getZ(t),
      this._w = e.getW(t),
      this
  }
  _onChange(e) {
    return this._onChangeCallback = e,
      this
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x,
      yield this._y,
      yield this._z,
      yield this._w
  }
}
class D {
  constructor(e=0, t=0, n=0) {
    D.prototype.isVector3 = !0,
      this.x = e,
      this.y = t,
      this.z = n
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z),
      this.x = e,
      this.y = t,
      this.z = n,
      this
  }
  setScalar(e) {
    return this.x = e,
      this.y = e,
      this.z = e,
      this
  }
  setX(e) {
    return this.x = e,
      this
  }
  setY(e) {
    return this.y = e,
      this
  }
  setZ(e) {
    return this.z = e,
      this
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e)
    }
  }
  clone() {
    return new this.constructor(this.x,this.y,this.z)
  }
  copy(e) {
    return this.x = e.x,
      this.y = e.y,
      this.z = e.z,
      this
  }
  add(e) {
    return this.x += e.x,
      this.y += e.y,
      this.z += e.z,
      this
  }
  addScalar(e) {
    return this.x += e,
      this.y += e,
      this.z += e,
      this
  }
  addVectors(e, t) {
    return this.x = e.x + t.x,
      this.y = e.y + t.y,
      this.z = e.z + t.z,
      this
  }
  addScaledVector(e, t) {
    return this.x += e.x * t,
      this.y += e.y * t,
      this.z += e.z * t,
      this
  }
  sub(e) {
    return this.x -= e.x,
      this.y -= e.y,
      this.z -= e.z,
      this
  }
  subScalar(e) {
    return this.x -= e,
      this.y -= e,
      this.z -= e,
      this
  }
  subVectors(e, t) {
    return this.x = e.x - t.x,
      this.y = e.y - t.y,
      this.z = e.z - t.z,
      this
  }
  multiply(e) {
    return this.x *= e.x,
      this.y *= e.y,
      this.z *= e.z,
      this
  }
  multiplyScalar(e) {
    return this.x *= e,
      this.y *= e,
      this.z *= e,
      this
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x,
      this.y = e.y * t.y,
      this.z = e.z * t.z,
      this
  }
  applyEuler(e) {
    return this.applyQuaternion(ca.setFromEuler(e))
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ca.setFromAxisAngle(e, t))
  }
  applyMatrix3(e) {
    const t = this.x
      , n = this.y
      , i = this.z
      , s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i,
      this.y = s[1] * t + s[4] * n + s[7] * i,
      this.z = s[2] * t + s[5] * n + s[8] * i,
      this
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize()
  }
  applyMatrix4(e) {
    const t = this.x
      , n = this.y
      , i = this.z
      , s = e.elements
      , o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o,
      this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o,
      this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o,
      this
  }
  applyQuaternion(e) {
    const t = this.x
      , n = this.y
      , i = this.z
      , s = e.x
      , o = e.y
      , a = e.z
      , c = e.w
      , l = c * t + o * i - a * n
      , u = c * n + a * t - s * i
      , d = c * i + s * n - o * t
      , p = -s * t - o * n - a * i;
    return this.x = l * c + p * -s + u * -a - d * -o,
      this.y = u * c + p * -o + d * -s - l * -a,
      this.z = d * c + p * -a + l * -o - u * -s,
      this
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
  }
  transformDirection(e) {
    const t = this.x
      , n = this.y
      , i = this.z
      , s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i,
      this.y = s[1] * t + s[5] * n + s[9] * i,
      this.z = s[2] * t + s[6] * n + s[10] * i,
      this.normalize()
  }
  divide(e) {
    return this.x /= e.x,
      this.y /= e.y,
      this.z /= e.z,
      this
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e)
  }
  min(e) {
    return this.x = Math.min(this.x, e.x),
      this.y = Math.min(this.y, e.y),
      this.z = Math.min(this.z, e.z),
      this
  }
  max(e) {
    return this.x = Math.max(this.x, e.x),
      this.y = Math.max(this.y, e.y),
      this.z = Math.max(this.z, e.z),
      this
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)),
      this.y = Math.max(e.y, Math.min(t.y, this.y)),
      this.z = Math.max(e.z, Math.min(t.z, this.z)),
      this
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)),
      this.y = Math.max(e, Math.min(t, this.y)),
      this.z = Math.max(e, Math.min(t, this.z)),
      this
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  }
  floor() {
    return this.x = Math.floor(this.x),
      this.y = Math.floor(this.y),
      this.z = Math.floor(this.z),
      this
  }
  ceil() {
    return this.x = Math.ceil(this.x),
      this.y = Math.ceil(this.y),
      this.z = Math.ceil(this.z),
      this
  }
  round() {
    return this.x = Math.round(this.x),
      this.y = Math.round(this.y),
      this.z = Math.round(this.z),
      this
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
      this
  }
  negate() {
    return this.x = -this.x,
      this.y = -this.y,
      this.z = -this.z,
      this
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e)
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t,
      this.y += (e.y - this.y) * t,
      this.z += (e.z - this.z) * t,
      this
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n,
      this.y = e.y + (t.y - e.y) * n,
      this.z = e.z + (t.z - e.z) * n,
      this
  }
  cross(e) {
    return this.crossVectors(this, e)
  }
  crossVectors(e, t) {
    const n = e.x
      , i = e.y
      , s = e.z
      , o = t.x
      , a = t.y
      , c = t.z;
    return this.x = i * c - s * a,
      this.y = s * o - n * c,
      this.z = n * a - i * o,
      this
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n)
  }
  projectOnPlane(e) {
    return br.copy(this).projectOnVector(e),
      this.sub(br)
  }
  reflect(e) {
    return this.sub(br.copy(e).multiplyScalar(2 * this.dot(e)))
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1))
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e))
  }
  distanceToSquared(e) {
    const t = this.x - e.x
      , n = this.y - e.y
      , i = this.z - e.z;
    return t * t + n * n + i * i
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n),
      this.y = Math.cos(t) * e,
      this.z = i * Math.cos(n),
      this
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t),
      this.y = n,
      this.z = e * Math.cos(t),
      this
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12],
      this.y = t[13],
      this.z = t[14],
      this
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length()
      , n = this.setFromMatrixColumn(e, 1).length()
      , i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t,
      this.y = n,
      this.z = i,
      this
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4)
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3)
  }
  setFromEuler(e) {
    return this.x = e._x,
      this.y = e._y,
      this.z = e._z,
      this
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z
  }
  fromArray(e, t=0) {
    return this.x = e[t],
      this.y = e[t + 1],
      this.z = e[t + 2],
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this.x,
      e[t + 1] = this.y,
      e[t + 2] = this.z,
      e
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t),
      this.y = e.getY(t),
      this.z = e.getZ(t),
      this
  }
  random() {
    return this.x = Math.random(),
      this.y = Math.random(),
      this.z = Math.random(),
      this
  }
  randomDirection() {
    const e = (Math.random() - .5) * 2
      , t = Math.random() * Math.PI * 2
      , n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t),
      this.y = n * Math.sin(t),
      this.z = e,
      this
  }
  *[Symbol.iterator]() {
    yield this.x,
      yield this.y,
      yield this.z
  }
}
const br = new D
  , ca = new wn;
function Yn(r) {
  return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4)
}
function wr(r) {
  return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055
}
const yc = new pt().fromArray([.8224621, .0331941, .0170827, .177538, .9668058, .0723974, -1e-7, 1e-7, .9105199])
  , Mc = new pt().fromArray([1.2249401, -.0420569, -.0196376, -.2249404, 1.0420571, -.0786361, 1e-7, 0, 1.0982735])
  , an = new D;
function Sc(r) {
  return r.convertSRGBToLinear(),
    an.set(r.r, r.g, r.b).applyMatrix3(Mc),
    r.setRGB(an.x, an.y, an.z)
}
function bc(r) {
  return an.set(r.r, r.g, r.b).applyMatrix3(yc),
    r.setRGB(an.x, an.y, an.z).convertLinearToSRGB()
}
const wc = {
  [_i]: r=>r,
  [Ut]: r=>r.convertSRGBToLinear(),
  [So]: Sc
}
  , Ec = {
  [_i]: r=>r,
  [Ut]: r=>r.convertLinearToSRGB(),
  [So]: bc
}
  , ht = {
  enabled: !1,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),
      !this.enabled
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),
      this.enabled = !r
  },
  get workingColorSpace() {
    return _i
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = wc[e]
      , i = Ec[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(r))
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e)
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace)
  }
};
let Rn;
class wo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Rn === void 0 && (Rn = Qi("canvas")),
        Rn.width = e.width,
        Rn.height = e.height;
      const n = Rn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
        t = Rn
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
      t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Qi("canvas");
      t.width = e.width,
        t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height)
        , s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Yn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0),
        t
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Yn(t[n] / 255) * 255) : t[n] = Yn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      }
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
        e
  }
}
class Eo {
  constructor(e=null) {
    this.isSource = !0,
      this.uuid = vi(),
      this.data = e,
      this.version = 0
  }
  set needsUpdate(e) {
    e === !0 && this.version++
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }
      , i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(Er(i[o].image)) : s.push(Er(i[o]))
      } else
        s = Er(i);
      n.url = s
    }
    return t || (e.images[this.uuid] = n),
      n
  }
}
function Er(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? wo.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let Tc = 0;
class St extends An {
  constructor(e=St.DEFAULT_IMAGE, t=St.DEFAULT_MAPPING, n=Rt, i=Rt, s=Et, o=mi, a=Pt, c=Sn, l=St.DEFAULT_ANISOTROPY, u=bn) {
    super(),
      this.isTexture = !0,
      Object.defineProperty(this, "id", {
        value: Tc++
      }),
      this.uuid = vi(),
      this.name = "",
      this.source = new Eo(e),
      this.mipmaps = [],
      this.mapping = t,
      this.wrapS = n,
      this.wrapT = i,
      this.magFilter = s,
      this.minFilter = o,
      this.anisotropy = l,
      this.format = a,
      this.internalFormat = null,
      this.type = c,
      this.offset = new we(0,0),
      this.repeat = new we(1,1),
      this.center = new we(0,0),
      this.rotation = 0,
      this.matrixAutoUpdate = !0,
      this.matrix = new pt,
      this.generateMipmaps = !0,
      this.premultiplyAlpha = !1,
      this.flipY = !0,
      this.unpackAlignment = 4,
      this.encoding = u,
      this.userData = {},
      this.version = 0,
      this.onUpdate = null,
      this.isRenderTargetTexture = !1,
      this.needsPMREMUpdate = !1
  }
  get image() {
    return this.source.data
  }
  set image(e=null) {
    this.source.data = e
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    return this.name = e.name,
      this.source = e.source,
      this.mipmaps = e.mipmaps.slice(0),
      this.mapping = e.mapping,
      this.wrapS = e.wrapS,
      this.wrapT = e.wrapT,
      this.magFilter = e.magFilter,
      this.minFilter = e.minFilter,
      this.anisotropy = e.anisotropy,
      this.format = e.format,
      this.internalFormat = e.internalFormat,
      this.type = e.type,
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      this.rotation = e.rotation,
      this.matrixAutoUpdate = e.matrixAutoUpdate,
      this.matrix.copy(e.matrix),
      this.generateMipmaps = e.generateMipmaps,
      this.premultiplyAlpha = e.premultiplyAlpha,
      this.flipY = e.flipY,
      this.unpackAlignment = e.unpackAlignment,
      this.encoding = e.encoding,
      this.userData = JSON.parse(JSON.stringify(e.userData)),
      this.needsUpdate = !0,
      this
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
    t || (e.textures[this.uuid] = n),
      n
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
  transformUv(e) {
    if (this.mapping !== yo)
      return e;
    if (e.applyMatrix3(this.matrix),
    e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ts:
          e.x = e.x - Math.floor(e.x);
          break;
        case Rt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ns:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ts:
          e.y = e.y - Math.floor(e.y);
          break;
        case Rt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ns:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break
      }
    return this.flipY && (e.y = 1 - e.y),
      e
  }
  set needsUpdate(e) {
    e === !0 && (this.version++,
      this.source.needsUpdate = !0)
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = yo;
St.DEFAULT_ANISOTROPY = 1;
class nt {
  constructor(e=0, t=0, n=0, i=1) {
    nt.prototype.isVector4 = !0,
      this.x = e,
      this.y = t,
      this.z = n,
      this.w = i
  }
  get width() {
    return this.z
  }
  set width(e) {
    this.z = e
  }
  get height() {
    return this.w
  }
  set height(e) {
    this.w = e
  }
  set(e, t, n, i) {
    return this.x = e,
      this.y = t,
      this.z = n,
      this.w = i,
      this
  }
  setScalar(e) {
    return this.x = e,
      this.y = e,
      this.z = e,
      this.w = e,
      this
  }
  setX(e) {
    return this.x = e,
      this
  }
  setY(e) {
    return this.y = e,
      this
  }
  setZ(e) {
    return this.z = e,
      this
  }
  setW(e) {
    return this.w = e,
      this
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e)
    }
  }
  clone() {
    return new this.constructor(this.x,this.y,this.z,this.w)
  }
  copy(e) {
    return this.x = e.x,
      this.y = e.y,
      this.z = e.z,
      this.w = e.w !== void 0 ? e.w : 1,
      this
  }
  add(e) {
    return this.x += e.x,
      this.y += e.y,
      this.z += e.z,
      this.w += e.w,
      this
  }
  addScalar(e) {
    return this.x += e,
      this.y += e,
      this.z += e,
      this.w += e,
      this
  }
  addVectors(e, t) {
    return this.x = e.x + t.x,
      this.y = e.y + t.y,
      this.z = e.z + t.z,
      this.w = e.w + t.w,
      this
  }
  addScaledVector(e, t) {
    return this.x += e.x * t,
      this.y += e.y * t,
      this.z += e.z * t,
      this.w += e.w * t,
      this
  }
  sub(e) {
    return this.x -= e.x,
      this.y -= e.y,
      this.z -= e.z,
      this.w -= e.w,
      this
  }
  subScalar(e) {
    return this.x -= e,
      this.y -= e,
      this.z -= e,
      this.w -= e,
      this
  }
  subVectors(e, t) {
    return this.x = e.x - t.x,
      this.y = e.y - t.y,
      this.z = e.z - t.z,
      this.w = e.w - t.w,
      this
  }
  multiply(e) {
    return this.x *= e.x,
      this.y *= e.y,
      this.z *= e.z,
      this.w *= e.w,
      this
  }
  multiplyScalar(e) {
    return this.x *= e,
      this.y *= e,
      this.z *= e,
      this.w *= e,
      this
  }
  applyMatrix4(e) {
    const t = this.x
      , n = this.y
      , i = this.z
      , s = this.w
      , o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s,
      this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s,
      this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s,
      this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s,
      this
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e)
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1,
      this.y = 0,
      this.z = 0) : (this.x = e.x / t,
      this.y = e.y / t,
      this.z = e.z / t),
      this
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements
      , l = c[0]
      , u = c[4]
      , d = c[8]
      , p = c[1]
      , m = c[5]
      , g = c[9]
      , h = c[2]
      , f = c[6]
      , v = c[10];
    if (Math.abs(u - p) < .01 && Math.abs(d - h) < .01 && Math.abs(g - f) < .01) {
      if (Math.abs(u + p) < .1 && Math.abs(d + h) < .1 && Math.abs(g + f) < .1 && Math.abs(l + m + v - 3) < .1)
        return this.set(1, 0, 0, 0),
          this;
      t = Math.PI;
      const x = (l + 1) / 2
        , S = (m + 1) / 2
        , y = (v + 1) / 2
        , b = (u + p) / 4
        , L = (d + h) / 4
        , _ = (g + f) / 4;
      return x > S && x > y ? x < .01 ? (n = 0,
        i = .707106781,
        s = .707106781) : (n = Math.sqrt(x),
        i = b / n,
        s = L / n) : S > y ? S < .01 ? (n = .707106781,
        i = 0,
        s = .707106781) : (i = Math.sqrt(S),
        n = b / i,
        s = _ / i) : y < .01 ? (n = .707106781,
        i = .707106781,
        s = 0) : (s = Math.sqrt(y),
        n = L / s,
        i = _ / s),
        this.set(n, i, s, t),
        this
    }
    let w = Math.sqrt((f - g) * (f - g) + (d - h) * (d - h) + (p - u) * (p - u));
    return Math.abs(w) < .001 && (w = 1),
      this.x = (f - g) / w,
      this.y = (d - h) / w,
      this.z = (p - u) / w,
      this.w = Math.acos((l + m + v - 1) / 2),
      this
  }
  min(e) {
    return this.x = Math.min(this.x, e.x),
      this.y = Math.min(this.y, e.y),
      this.z = Math.min(this.z, e.z),
      this.w = Math.min(this.w, e.w),
      this
  }
  max(e) {
    return this.x = Math.max(this.x, e.x),
      this.y = Math.max(this.y, e.y),
      this.z = Math.max(this.z, e.z),
      this.w = Math.max(this.w, e.w),
      this
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)),
      this.y = Math.max(e.y, Math.min(t.y, this.y)),
      this.z = Math.max(e.z, Math.min(t.z, this.z)),
      this.w = Math.max(e.w, Math.min(t.w, this.w)),
      this
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)),
      this.y = Math.max(e, Math.min(t, this.y)),
      this.z = Math.max(e, Math.min(t, this.z)),
      this.w = Math.max(e, Math.min(t, this.w)),
      this
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  }
  floor() {
    return this.x = Math.floor(this.x),
      this.y = Math.floor(this.y),
      this.z = Math.floor(this.z),
      this.w = Math.floor(this.w),
      this
  }
  ceil() {
    return this.x = Math.ceil(this.x),
      this.y = Math.ceil(this.y),
      this.z = Math.ceil(this.z),
      this.w = Math.ceil(this.w),
      this
  }
  round() {
    return this.x = Math.round(this.x),
      this.y = Math.round(this.y),
      this.z = Math.round(this.z),
      this.w = Math.round(this.w),
      this
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
      this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
      this
  }
  negate() {
    return this.x = -this.x,
      this.y = -this.y,
      this.z = -this.z,
      this.w = -this.w,
      this
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e)
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t,
      this.y += (e.y - this.y) * t,
      this.z += (e.z - this.z) * t,
      this.w += (e.w - this.w) * t,
      this
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n,
      this.y = e.y + (t.y - e.y) * n,
      this.z = e.z + (t.z - e.z) * n,
      this.w = e.w + (t.w - e.w) * n,
      this
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
  }
  fromArray(e, t=0) {
    return this.x = e[t],
      this.y = e[t + 1],
      this.z = e[t + 2],
      this.w = e[t + 3],
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this.x,
      e[t + 1] = this.y,
      e[t + 2] = this.z,
      e[t + 3] = this.w,
      e
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t),
      this.y = e.getY(t),
      this.z = e.getZ(t),
      this.w = e.getW(t),
      this
  }
  random() {
    return this.x = Math.random(),
      this.y = Math.random(),
      this.z = Math.random(),
      this.w = Math.random(),
      this
  }
  *[Symbol.iterator]() {
    yield this.x,
      yield this.y,
      yield this.z,
      yield this.w
  }
}
class En extends An {
  constructor(e=1, t=1, n={}) {
    super(),
      this.isWebGLRenderTarget = !0,
      this.width = e,
      this.height = t,
      this.depth = 1,
      this.scissor = new nt(0,0,e,t),
      this.scissorTest = !1,
      this.viewport = new nt(0,0,e,t);
    const i = {
      width: e,
      height: t,
      depth: 1
    };
    this.texture = new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
      this.texture.isRenderTargetTexture = !0,
      this.texture.flipY = !1,
      this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1,
      this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null,
      this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Et,
      this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0,
      this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1,
      this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null,
      this.samples = n.samples !== void 0 ? n.samples : 0
  }
  setSize(e, t, n=1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e,
      this.height = t,
      this.depth = n,
      this.texture.image.width = e,
      this.texture.image.height = t,
      this.texture.image.depth = n,
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t)
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    this.width = e.width,
      this.height = e.height,
      this.depth = e.depth,
      this.viewport.copy(e.viewport),
      this.texture = e.texture.clone(),
      this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Eo(t),
      this.depthBuffer = e.depthBuffer,
      this.stencilBuffer = e.stencilBuffer,
    e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      this.samples = e.samples,
      this
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
}
class To extends St {
  constructor(e=null, t=1, n=1, i=1) {
    super(null),
      this.isDataArrayTexture = !0,
      this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      },
      this.magFilter = ft,
      this.minFilter = ft,
      this.wrapR = Rt,
      this.generateMipmaps = !1,
      this.flipY = !1,
      this.unpackAlignment = 1
  }
}
class Ac extends St {
  constructor(e=null, t=1, n=1, i=1) {
    super(null),
      this.isData3DTexture = !0,
      this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      },
      this.magFilter = ft,
      this.minFilter = ft,
      this.wrapR = Rt,
      this.generateMipmaps = !1,
      this.flipY = !1,
      this.unpackAlignment = 1
  }
}
class yi {
  constructor(e=new D(1 / 0,1 / 0,1 / 0), t=new D(-1 / 0,-1 / 0,-1 / 0)) {
    this.isBox3 = !0,
      this.min = e,
      this.max = t
  }
  set(e, t) {
    return this.min.copy(e),
      this.max.copy(t),
      this
  }
  setFromArray(e) {
    let t = 1 / 0
      , n = 1 / 0
      , i = 1 / 0
      , s = -1 / 0
      , o = -1 / 0
      , a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const u = e[c]
        , d = e[c + 1]
        , p = e[c + 2];
      u < t && (t = u),
      d < n && (n = d),
      p < i && (i = p),
      u > s && (s = u),
      d > o && (o = d),
      p > a && (a = p)
    }
    return this.min.set(t, n, i),
      this.max.set(s, o, a),
      this
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0
      , n = 1 / 0
      , i = 1 / 0
      , s = -1 / 0
      , o = -1 / 0
      , a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const u = e.getX(c)
        , d = e.getY(c)
        , p = e.getZ(c);
      u < t && (t = u),
      d < n && (n = d),
      p < i && (i = p),
      u > s && (s = u),
      d > o && (o = d),
      p > a && (a = p)
    }
    return this.min.set(t, n, i),
      this.max.set(s, o, a),
      this
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this
  }
  setFromCenterAndSize(e, t) {
    const n = fn.copy(t).multiplyScalar(.5);
    return this.min.copy(e).sub(n),
      this.max.copy(e).add(n),
      this
  }
  setFromObject(e, t=!1) {
    return this.makeEmpty(),
      this.expandByObject(e, t)
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    return this.min.copy(e.min),
      this.max.copy(e.max),
      this
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0,
      this.max.x = this.max.y = this.max.z = -1 / 0,
      this
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
  }
  expandByPoint(e) {
    return this.min.min(e),
      this.max.max(e),
      this
  }
  expandByVector(e) {
    return this.min.sub(e),
      this.max.add(e),
      this
  }
  expandByScalar(e) {
    return this.min.addScalar(-e),
      this.max.addScalar(e),
      this
  }
  expandByObject(e, t=!1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, a = s.count; o < a; o++)
          fn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(fn)
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Tr.copy(n.boundingBox),
          Tr.applyMatrix4(e.matrixWorld),
          this.union(Tr);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++)
      this.expandByObject(i[s], t);
    return this
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, fn),
    fn.distanceToSquared(e.center) <= e.radius * e.radius
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
      n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
      n = e.normal.x * this.min.x),
      e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
      e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
    t <= -e.constant && n >= -e.constant
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ii),
      Ai.subVectors(this.max, ii),
      Pn.subVectors(e.a, ii),
      Dn.subVectors(e.b, ii),
      In.subVectors(e.c, ii),
      Qt.subVectors(Dn, Pn),
      en.subVectors(In, Dn),
      pn.subVectors(Pn, In);
    let t = [0, -Qt.z, Qt.y, 0, -en.z, en.y, 0, -pn.z, pn.y, Qt.z, 0, -Qt.x, en.z, 0, -en.x, pn.z, 0, -pn.x, -Qt.y, Qt.x, 0, -en.y, en.x, 0, -pn.y, pn.x, 0];
    return !Ar(t, Pn, Dn, In, Ai) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      !Ar(t, Pn, Dn, In, Ai)) ? !1 : (Ci.crossVectors(Qt, en),
      t = [Ci.x, Ci.y, Ci.z],
      Ar(t, Pn, Dn, In, Ai))
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max)
  }
  distanceToPoint(e) {
    return this.clampPoint(e, fn).distanceTo(e)
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
      e.radius = this.getSize(fn).length() * .5),
      e
  }
  intersect(e) {
    return this.min.max(e.min),
      this.max.min(e.max),
    this.isEmpty() && this.makeEmpty(),
      this
  }
  union(e) {
    return this.min.min(e.min),
      this.max.max(e.max),
      this
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
      Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
      Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
      Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
      Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
      Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
      Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
      Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
      this.setFromPoints(Wt),
      this)
  }
  translate(e) {
    return this.min.add(e),
      this.max.add(e),
      this
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max)
  }
}
const Wt = [new D, new D, new D, new D, new D, new D, new D, new D]
  , fn = new D
  , Tr = new yi
  , Pn = new D
  , Dn = new D
  , In = new D
  , Qt = new D
  , en = new D
  , pn = new D
  , ii = new D
  , Ai = new D
  , Ci = new D
  , mn = new D;
function Ar(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    mn.fromArray(r, s);
    const a = i.x * Math.abs(mn.x) + i.y * Math.abs(mn.y) + i.z * Math.abs(mn.z)
      , c = e.dot(mn)
      , l = t.dot(mn)
      , u = n.dot(mn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
      return !1
  }
  return !0
}
const Cc = new yi
  , ri = new D
  , Cr = new D;
class nr {
  constructor(e=new D, t=-1) {
    this.center = e,
      this.radius = t
  }
  set(e, t) {
    return this.center.copy(e),
      this.radius = t,
      this
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Cc.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i),
      this
  }
  copy(e) {
    return this.center.copy(e.center),
      this.radius = e.radius,
      this
  }
  isEmpty() {
    return this.radius < 0
  }
  makeEmpty() {
    return this.center.set(0, 0, 0),
      this.radius = -1,
      this
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t
  }
  intersectsBox(e) {
    return e.intersectsSphere(this)
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e),
    n > this.radius * this.radius && (t.sub(this.center).normalize(),
      t.multiplyScalar(this.radius).add(this.center)),
      t
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(),
      e) : (e.set(this.center, this.center),
      e.expandByScalar(this.radius),
      e)
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e),
      this.radius = this.radius * e.getMaxScaleOnAxis(),
      this
  }
  translate(e) {
    return this.center.add(e),
      this
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e),
        this.radius = 0,
        this;
    ri.subVectors(e, this.center);
    const t = ri.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t)
        , i = (n - this.radius) * .5;
      this.center.addScaledVector(ri, i / n),
        this.radius += i
    }
    return this
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
      this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Cr.subVectors(e.center, this.center).setLength(e.radius),
      this.expandByPoint(ri.copy(e.center).add(Cr)),
      this.expandByPoint(ri.copy(e.center).sub(Cr))),
      this)
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const qt = new D
  , Lr = new D
  , Li = new D
  , tn = new D
  , Rr = new D
  , Ri = new D
  , Pr = new D;
class Ao {
  constructor(e=new D, t=new D(0,0,-1)) {
    this.origin = e,
      this.direction = t
  }
  set(e, t) {
    return this.origin.copy(e),
      this.direction.copy(t),
      this
  }
  copy(e) {
    return this.origin.copy(e.origin),
      this.direction.copy(e.direction),
      this
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e)
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(),
      this
  }
  recast(e) {
    return this.origin.copy(this.at(e, qt)),
      this
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e))
  }
  distanceSqToPoint(e) {
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (qt.copy(this.origin).addScaledVector(this.direction, t),
      qt.distanceToSquared(e))
  }
  distanceSqToSegment(e, t, n, i) {
    Lr.copy(e).add(t).multiplyScalar(.5),
      Li.copy(t).sub(e).normalize(),
      tn.copy(this.origin).sub(Lr);
    const s = e.distanceTo(t) * .5
      , o = -this.direction.dot(Li)
      , a = tn.dot(this.direction)
      , c = -tn.dot(Li)
      , l = tn.lengthSq()
      , u = Math.abs(1 - o * o);
    let d, p, m, g;
    if (u > 0)
      if (d = o * c - a,
        p = o * a - c,
        g = s * u,
      d >= 0)
        if (p >= -g)
          if (p <= g) {
            const h = 1 / u;
            d *= h,
              p *= h,
              m = d * (d + o * p + 2 * a) + p * (o * d + p + 2 * c) + l
          } else
            p = s,
              d = Math.max(0, -(o * p + a)),
              m = -d * d + p * (p + 2 * c) + l;
        else
          p = -s,
            d = Math.max(0, -(o * p + a)),
            m = -d * d + p * (p + 2 * c) + l;
      else
        p <= -g ? (d = Math.max(0, -(-o * s + a)),
          p = d > 0 ? -s : Math.min(Math.max(-s, -c), s),
          m = -d * d + p * (p + 2 * c) + l) : p <= g ? (d = 0,
          p = Math.min(Math.max(-s, -c), s),
          m = p * (p + 2 * c) + l) : (d = Math.max(0, -(o * s + a)),
          p = d > 0 ? s : Math.min(Math.max(-s, -c), s),
          m = -d * d + p * (p + 2 * c) + l);
    else
      p = o > 0 ? -s : s,
        d = Math.max(0, -(o * p + a)),
        m = -d * d + p * (p + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d),
    i && i.copy(Lr).addScaledVector(Li, p),
      m
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction)
      , i = qt.dot(qt) - n * n
      , s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i)
      , a = n - o
      , c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t)
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t)
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0
  }
  intersectBox(e, t) {
    let n, i, s, o, a, c;
    const l = 1 / this.direction.x
      , u = 1 / this.direction.y
      , d = 1 / this.direction.z
      , p = this.origin;
    return l >= 0 ? (n = (e.min.x - p.x) * l,
      i = (e.max.x - p.x) * l) : (n = (e.max.x - p.x) * l,
      i = (e.min.x - p.x) * l),
      u >= 0 ? (s = (e.min.y - p.y) * u,
        o = (e.max.y - p.y) * u) : (s = (e.max.y - p.y) * u,
        o = (e.min.y - p.y) * u),
      n > o || s > i || ((s > n || isNaN(n)) && (n = s),
      (o < i || isNaN(i)) && (i = o),
        d >= 0 ? (a = (e.min.z - p.z) * d,
          c = (e.max.z - p.z) * d) : (a = (e.max.z - p.z) * d,
          c = (e.min.z - p.z) * d),
      n > c || a > i) || ((a > n || n !== n) && (n = a),
      (c < i || i !== i) && (i = c),
      i < 0) ? null : this.at(n >= 0 ? n : i, t)
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null
  }
  intersectTriangle(e, t, n, i, s) {
    Rr.subVectors(t, e),
      Ri.subVectors(n, e),
      Pr.crossVectors(Rr, Ri);
    let o = this.direction.dot(Pr), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1
    } else if (o < 0)
      a = -1,
        o = -o;
    else
      return null;
    tn.subVectors(this.origin, e);
    const c = a * this.direction.dot(Ri.crossVectors(tn, Ri));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Rr.cross(tn));
    if (l < 0 || c + l > o)
      return null;
    const u = -a * tn.dot(Pr);
    return u < 0 ? null : this.at(u / o, s)
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction)
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
class Ve {
  constructor() {
    Ve.prototype.isMatrix4 = !0,
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  }
  set(e, t, n, i, s, o, a, c, l, u, d, p, m, g, h, f) {
    const v = this.elements;
    return v[0] = e,
      v[4] = t,
      v[8] = n,
      v[12] = i,
      v[1] = s,
      v[5] = o,
      v[9] = a,
      v[13] = c,
      v[2] = l,
      v[6] = u,
      v[10] = d,
      v[14] = p,
      v[3] = m,
      v[7] = g,
      v[11] = h,
      v[15] = f,
      this
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
      this
  }
  clone() {
    return new Ve().fromArray(this.elements)
  }
  copy(e) {
    const t = this.elements
      , n = e.elements;
    return t[0] = n[0],
      t[1] = n[1],
      t[2] = n[2],
      t[3] = n[3],
      t[4] = n[4],
      t[5] = n[5],
      t[6] = n[6],
      t[7] = n[7],
      t[8] = n[8],
      t[9] = n[9],
      t[10] = n[10],
      t[11] = n[11],
      t[12] = n[12],
      t[13] = n[13],
      t[14] = n[14],
      t[15] = n[15],
      this
  }
  copyPosition(e) {
    const t = this.elements
      , n = e.elements;
    return t[12] = n[12],
      t[13] = n[13],
      t[14] = n[14],
      this
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
      this
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
      this
  }
  extractRotation(e) {
    const t = this.elements
      , n = e.elements
      , i = 1 / Nn.setFromMatrixColumn(e, 0).length()
      , s = 1 / Nn.setFromMatrixColumn(e, 1).length()
      , o = 1 / Nn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i,
      t[1] = n[1] * i,
      t[2] = n[2] * i,
      t[3] = 0,
      t[4] = n[4] * s,
      t[5] = n[5] * s,
      t[6] = n[6] * s,
      t[7] = 0,
      t[8] = n[8] * o,
      t[9] = n[9] * o,
      t[10] = n[10] * o,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      this
  }
  makeRotationFromEuler(e) {
    const t = this.elements
      , n = e.x
      , i = e.y
      , s = e.z
      , o = Math.cos(n)
      , a = Math.sin(n)
      , c = Math.cos(i)
      , l = Math.sin(i)
      , u = Math.cos(s)
      , d = Math.sin(s);
    if (e.order === "XYZ") {
      const p = o * u
        , m = o * d
        , g = a * u
        , h = a * d;
      t[0] = c * u,
        t[4] = -c * d,
        t[8] = l,
        t[1] = m + g * l,
        t[5] = p - h * l,
        t[9] = -a * c,
        t[2] = h - p * l,
        t[6] = g + m * l,
        t[10] = o * c
    } else if (e.order === "YXZ") {
      const p = c * u
        , m = c * d
        , g = l * u
        , h = l * d;
      t[0] = p + h * a,
        t[4] = g * a - m,
        t[8] = o * l,
        t[1] = o * d,
        t[5] = o * u,
        t[9] = -a,
        t[2] = m * a - g,
        t[6] = h + p * a,
        t[10] = o * c
    } else if (e.order === "ZXY") {
      const p = c * u
        , m = c * d
        , g = l * u
        , h = l * d;
      t[0] = p - h * a,
        t[4] = -o * d,
        t[8] = g + m * a,
        t[1] = m + g * a,
        t[5] = o * u,
        t[9] = h - p * a,
        t[2] = -o * l,
        t[6] = a,
        t[10] = o * c
    } else if (e.order === "ZYX") {
      const p = o * u
        , m = o * d
        , g = a * u
        , h = a * d;
      t[0] = c * u,
        t[4] = g * l - m,
        t[8] = p * l + h,
        t[1] = c * d,
        t[5] = h * l + p,
        t[9] = m * l - g,
        t[2] = -l,
        t[6] = a * c,
        t[10] = o * c
    } else if (e.order === "YZX") {
      const p = o * c
        , m = o * l
        , g = a * c
        , h = a * l;
      t[0] = c * u,
        t[4] = h - p * d,
        t[8] = g * d + m,
        t[1] = d,
        t[5] = o * u,
        t[9] = -a * u,
        t[2] = -l * u,
        t[6] = m * d + g,
        t[10] = p - h * d
    } else if (e.order === "XZY") {
      const p = o * c
        , m = o * l
        , g = a * c
        , h = a * l;
      t[0] = c * u,
        t[4] = -d,
        t[8] = l * u,
        t[1] = p * d + h,
        t[5] = o * u,
        t[9] = m * d - g,
        t[2] = g * d - m,
        t[6] = a * u,
        t[10] = h * d + p
    }
    return t[3] = 0,
      t[7] = 0,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      this
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Lc, e, Rc)
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return vt.subVectors(e, t),
    vt.lengthSq() === 0 && (vt.z = 1),
      vt.normalize(),
      nn.crossVectors(n, vt),
    nn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? vt.x += 1e-4 : vt.z += 1e-4,
      vt.normalize(),
      nn.crossVectors(n, vt)),
      nn.normalize(),
      Pi.crossVectors(vt, nn),
      i[0] = nn.x,
      i[4] = Pi.x,
      i[8] = vt.x,
      i[1] = nn.y,
      i[5] = Pi.y,
      i[9] = vt.y,
      i[2] = nn.z,
      i[6] = Pi.z,
      i[10] = vt.z,
      this
  }
  multiply(e) {
    return this.multiplyMatrices(this, e)
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this)
  }
  multiplyMatrices(e, t) {
    const n = e.elements
      , i = t.elements
      , s = this.elements
      , o = n[0]
      , a = n[4]
      , c = n[8]
      , l = n[12]
      , u = n[1]
      , d = n[5]
      , p = n[9]
      , m = n[13]
      , g = n[2]
      , h = n[6]
      , f = n[10]
      , v = n[14]
      , w = n[3]
      , x = n[7]
      , S = n[11]
      , y = n[15]
      , b = i[0]
      , L = i[4]
      , _ = i[8]
      , A = i[12]
      , P = i[1]
      , G = i[5]
      , K = i[9]
      , z = i[13]
      , F = i[2]
      , W = i[6]
      , J = i[10]
      , ee = i[14]
      , j = i[3]
      , Y = i[7]
      , Q = i[11]
      , pe = i[15];
    return s[0] = o * b + a * P + c * F + l * j,
      s[4] = o * L + a * G + c * W + l * Y,
      s[8] = o * _ + a * K + c * J + l * Q,
      s[12] = o * A + a * z + c * ee + l * pe,
      s[1] = u * b + d * P + p * F + m * j,
      s[5] = u * L + d * G + p * W + m * Y,
      s[9] = u * _ + d * K + p * J + m * Q,
      s[13] = u * A + d * z + p * ee + m * pe,
      s[2] = g * b + h * P + f * F + v * j,
      s[6] = g * L + h * G + f * W + v * Y,
      s[10] = g * _ + h * K + f * J + v * Q,
      s[14] = g * A + h * z + f * ee + v * pe,
      s[3] = w * b + x * P + S * F + y * j,
      s[7] = w * L + x * G + S * W + y * Y,
      s[11] = w * _ + x * K + S * J + y * Q,
      s[15] = w * A + x * z + S * ee + y * pe,
      this
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e,
      t[4] *= e,
      t[8] *= e,
      t[12] *= e,
      t[1] *= e,
      t[5] *= e,
      t[9] *= e,
      t[13] *= e,
      t[2] *= e,
      t[6] *= e,
      t[10] *= e,
      t[14] *= e,
      t[3] *= e,
      t[7] *= e,
      t[11] *= e,
      t[15] *= e,
      this
  }
  determinant() {
    const e = this.elements
      , t = e[0]
      , n = e[4]
      , i = e[8]
      , s = e[12]
      , o = e[1]
      , a = e[5]
      , c = e[9]
      , l = e[13]
      , u = e[2]
      , d = e[6]
      , p = e[10]
      , m = e[14]
      , g = e[3]
      , h = e[7]
      , f = e[11]
      , v = e[15];
    return g * (+s * c * d - i * l * d - s * a * p + n * l * p + i * a * m - n * c * m) + h * (+t * c * m - t * l * p + s * o * p - i * o * m + i * l * u - s * c * u) + f * (+t * l * d - t * a * m - s * o * d + n * o * m + s * a * u - n * l * u) + v * (-i * a * u - t * c * d + t * a * p + i * o * d - n * o * p + n * c * u)
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1],
      e[1] = e[4],
      e[4] = t,
      t = e[2],
      e[2] = e[8],
      e[8] = t,
      t = e[6],
      e[6] = e[9],
      e[9] = t,
      t = e[3],
      e[3] = e[12],
      e[12] = t,
      t = e[7],
      e[7] = e[13],
      e[13] = t,
      t = e[11],
      e[11] = e[14],
      e[14] = t,
      this
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x,
      i[13] = e.y,
      i[14] = e.z) : (i[12] = e,
      i[13] = t,
      i[14] = n),
      this
  }
  invert() {
    const e = this.elements
      , t = e[0]
      , n = e[1]
      , i = e[2]
      , s = e[3]
      , o = e[4]
      , a = e[5]
      , c = e[6]
      , l = e[7]
      , u = e[8]
      , d = e[9]
      , p = e[10]
      , m = e[11]
      , g = e[12]
      , h = e[13]
      , f = e[14]
      , v = e[15]
      , w = d * f * l - h * p * l + h * c * m - a * f * m - d * c * v + a * p * v
      , x = g * p * l - u * f * l - g * c * m + o * f * m + u * c * v - o * p * v
      , S = u * h * l - g * d * l + g * a * m - o * h * m - u * a * v + o * d * v
      , y = g * d * c - u * h * c - g * a * p + o * h * p + u * a * f - o * d * f
      , b = t * w + n * x + i * S + s * y;
    if (b === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / b;
    return e[0] = w * L,
      e[1] = (h * p * s - d * f * s - h * i * m + n * f * m + d * i * v - n * p * v) * L,
      e[2] = (a * f * s - h * c * s + h * i * l - n * f * l - a * i * v + n * c * v) * L,
      e[3] = (d * c * s - a * p * s - d * i * l + n * p * l + a * i * m - n * c * m) * L,
      e[4] = x * L,
      e[5] = (u * f * s - g * p * s + g * i * m - t * f * m - u * i * v + t * p * v) * L,
      e[6] = (g * c * s - o * f * s - g * i * l + t * f * l + o * i * v - t * c * v) * L,
      e[7] = (o * p * s - u * c * s + u * i * l - t * p * l - o * i * m + t * c * m) * L,
      e[8] = S * L,
      e[9] = (g * d * s - u * h * s - g * n * m + t * h * m + u * n * v - t * d * v) * L,
      e[10] = (o * h * s - g * a * s + g * n * l - t * h * l - o * n * v + t * a * v) * L,
      e[11] = (u * a * s - o * d * s - u * n * l + t * d * l + o * n * m - t * a * m) * L,
      e[12] = y * L,
      e[13] = (u * h * i - g * d * i + g * n * p - t * h * p - u * n * f + t * d * f) * L,
      e[14] = (g * a * i - o * h * i - g * n * c + t * h * c + o * n * f - t * a * f) * L,
      e[15] = (o * d * i - u * a * i + u * n * c - t * d * c - o * n * p + t * a * p) * L,
      this
  }
  scale(e) {
    const t = this.elements
      , n = e.x
      , i = e.y
      , s = e.z;
    return t[0] *= n,
      t[4] *= i,
      t[8] *= s,
      t[1] *= n,
      t[5] *= i,
      t[9] *= s,
      t[2] *= n,
      t[6] *= i,
      t[10] *= s,
      t[3] *= n,
      t[7] *= i,
      t[11] *= s,
      this
  }
  getMaxScaleOnAxis() {
    const e = this.elements
      , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
      , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
      , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i))
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
  }
  makeRotationX(e) {
    const t = Math.cos(e)
      , n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
      this
  }
  makeRotationY(e) {
    const t = Math.cos(e)
      , n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
      this
  }
  makeRotationZ(e) {
    const t = Math.cos(e)
      , n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
      this
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t)
      , i = Math.sin(t)
      , s = 1 - n
      , o = e.x
      , a = e.y
      , c = e.z
      , l = s * o
      , u = s * a;
    return this.set(l * o + n, l * a - i * c, l * c + i * a, 0, l * a + i * c, u * a + n, u * c - i * o, 0, l * c - i * a, u * c + i * o, s * c * c + n, 0, 0, 0, 0, 1),
      this
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
      this
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1),
      this
  }
  compose(e, t, n) {
    const i = this.elements
      , s = t._x
      , o = t._y
      , a = t._z
      , c = t._w
      , l = s + s
      , u = o + o
      , d = a + a
      , p = s * l
      , m = s * u
      , g = s * d
      , h = o * u
      , f = o * d
      , v = a * d
      , w = c * l
      , x = c * u
      , S = c * d
      , y = n.x
      , b = n.y
      , L = n.z;
    return i[0] = (1 - (h + v)) * y,
      i[1] = (m + S) * y,
      i[2] = (g - x) * y,
      i[3] = 0,
      i[4] = (m - S) * b,
      i[5] = (1 - (p + v)) * b,
      i[6] = (f + w) * b,
      i[7] = 0,
      i[8] = (g + x) * L,
      i[9] = (f - w) * L,
      i[10] = (1 - (p + h)) * L,
      i[11] = 0,
      i[12] = e.x,
      i[13] = e.y,
      i[14] = e.z,
      i[15] = 1,
      this
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Nn.set(i[0], i[1], i[2]).length();
    const o = Nn.set(i[4], i[5], i[6]).length()
      , a = Nn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      e.x = i[12],
      e.y = i[13],
      e.z = i[14],
      Tt.copy(this);
    const l = 1 / s
      , u = 1 / o
      , d = 1 / a;
    return Tt.elements[0] *= l,
      Tt.elements[1] *= l,
      Tt.elements[2] *= l,
      Tt.elements[4] *= u,
      Tt.elements[5] *= u,
      Tt.elements[6] *= u,
      Tt.elements[8] *= d,
      Tt.elements[9] *= d,
      Tt.elements[10] *= d,
      t.setFromRotationMatrix(Tt),
      n.x = s,
      n.y = o,
      n.z = a,
      this
  }
  makePerspective(e, t, n, i, s, o) {
    const a = this.elements
      , c = 2 * s / (t - e)
      , l = 2 * s / (n - i)
      , u = (t + e) / (t - e)
      , d = (n + i) / (n - i)
      , p = -(o + s) / (o - s)
      , m = -2 * o * s / (o - s);
    return a[0] = c,
      a[4] = 0,
      a[8] = u,
      a[12] = 0,
      a[1] = 0,
      a[5] = l,
      a[9] = d,
      a[13] = 0,
      a[2] = 0,
      a[6] = 0,
      a[10] = p,
      a[14] = m,
      a[3] = 0,
      a[7] = 0,
      a[11] = -1,
      a[15] = 0,
      this
  }
  makeOrthographic(e, t, n, i, s, o) {
    const a = this.elements
      , c = 1 / (t - e)
      , l = 1 / (n - i)
      , u = 1 / (o - s)
      , d = (t + e) * c
      , p = (n + i) * l
      , m = (o + s) * u;
    return a[0] = 2 * c,
      a[4] = 0,
      a[8] = 0,
      a[12] = -d,
      a[1] = 0,
      a[5] = 2 * l,
      a[9] = 0,
      a[13] = -p,
      a[2] = 0,
      a[6] = 0,
      a[10] = -2 * u,
      a[14] = -m,
      a[3] = 0,
      a[7] = 0,
      a[11] = 0,
      a[15] = 1,
      this
  }
  equals(e) {
    const t = this.elements
      , n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0
  }
  fromArray(e, t=0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this
  }
  toArray(e=[], t=0) {
    const n = this.elements;
    return e[t] = n[0],
      e[t + 1] = n[1],
      e[t + 2] = n[2],
      e[t + 3] = n[3],
      e[t + 4] = n[4],
      e[t + 5] = n[5],
      e[t + 6] = n[6],
      e[t + 7] = n[7],
      e[t + 8] = n[8],
      e[t + 9] = n[9],
      e[t + 10] = n[10],
      e[t + 11] = n[11],
      e[t + 12] = n[12],
      e[t + 13] = n[13],
      e[t + 14] = n[14],
      e[t + 15] = n[15],
      e
  }
}
const Nn = new D
  , Tt = new Ve
  , Lc = new D(0,0,0)
  , Rc = new D(1,1,1)
  , nn = new D
  , Pi = new D
  , vt = new D
  , ua = new Ve
  , ha = new wn;
class ir {
  constructor(e=0, t=0, n=0, i=ir.DEFAULT_ORDER) {
    this.isEuler = !0,
      this._x = e,
      this._y = t,
      this._z = n,
      this._order = i
  }
  get x() {
    return this._x
  }
  set x(e) {
    this._x = e,
      this._onChangeCallback()
  }
  get y() {
    return this._y
  }
  set y(e) {
    this._y = e,
      this._onChangeCallback()
  }
  get z() {
    return this._z
  }
  set z(e) {
    this._z = e,
      this._onChangeCallback()
  }
  get order() {
    return this._order
  }
  set order(e) {
    this._order = e,
      this._onChangeCallback()
  }
  set(e, t, n, i=this._order) {
    return this._x = e,
      this._y = t,
      this._z = n,
      this._order = i,
      this._onChangeCallback(),
      this
  }
  clone() {
    return new this.constructor(this._x,this._y,this._z,this._order)
  }
  copy(e) {
    return this._x = e._x,
      this._y = e._y,
      this._z = e._z,
      this._order = e._order,
      this._onChangeCallback(),
      this
  }
  setFromRotationMatrix(e, t=this._order, n=!0) {
    const i = e.elements
      , s = i[0]
      , o = i[4]
      , a = i[8]
      , c = i[1]
      , l = i[5]
      , u = i[9]
      , d = i[2]
      , p = i[6]
      , m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(at(a, -1, 1)),
          Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, m),
            this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, l),
            this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-at(u, -1, 1)),
          Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, m),
            this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s),
            this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(at(p, -1, 1)),
          Math.abs(p) < .9999999 ? (this._y = Math.atan2(-d, m),
            this._z = Math.atan2(-o, l)) : (this._y = 0,
            this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-at(d, -1, 1)),
          Math.abs(d) < .9999999 ? (this._x = Math.atan2(p, m),
            this._z = Math.atan2(c, s)) : (this._x = 0,
            this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(at(c, -1, 1)),
          Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l),
            this._y = Math.atan2(-d, s)) : (this._x = 0,
            this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-at(o, -1, 1)),
          Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, l),
            this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m),
            this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
    }
    return this._order = t,
    n === !0 && this._onChangeCallback(),
      this
  }
  setFromQuaternion(e, t, n) {
    return ua.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(ua, t, n)
  }
  setFromVector3(e, t=this._order) {
    return this.set(e.x, e.y, e.z, t)
  }
  reorder(e) {
    return ha.setFromEuler(this),
      this.setFromQuaternion(ha, e)
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
  }
  fromArray(e) {
    return this._x = e[0],
      this._y = e[1],
      this._z = e[2],
    e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this._x,
      e[t + 1] = this._y,
      e[t + 2] = this._z,
      e[t + 3] = this._order,
      e
  }
  _onChange(e) {
    return this._onChangeCallback = e,
      this
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x,
      yield this._y,
      yield this._z,
      yield this._order
  }
}
ir.DEFAULT_ORDER = "XYZ";
class Co {
  constructor() {
    this.mask = 1
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0
  }
  enable(e) {
    this.mask |= 1 << e | 0
  }
  enableAll() {
    this.mask = -1
  }
  toggle(e) {
    this.mask ^= 1 << e | 0
  }
  disable(e) {
    this.mask &= ~(1 << e | 0)
  }
  disableAll() {
    this.mask = 0
  }
  test(e) {
    return (this.mask & e.mask) !== 0
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0
  }
}
let Pc = 0;
const da = new D
  , Fn = new wn
  , Xt = new Ve
  , Di = new D
  , si = new D
  , Dc = new D
  , Ic = new wn
  , fa = new D(1,0,0)
  , pa = new D(0,1,0)
  , ma = new D(0,0,1)
  , Nc = {
  type: "added"
}
  , ga = {
  type: "removed"
};
class it extends An {
  constructor() {
    super(),
      this.isObject3D = !0,
      Object.defineProperty(this, "id", {
        value: Pc++
      }),
      this.uuid = vi(),
      this.name = "",
      this.type = "Object3D",
      this.parent = null,
      this.children = [],
      this.up = it.DEFAULT_UP.clone();
    const e = new D
      , t = new ir
      , n = new wn
      , i = new D(1,1,1);
    function s() {
      n.setFromEuler(t, !1)
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1)
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i
        },
        modelViewMatrix: {
          value: new Ve
        },
        normalMatrix: {
          value: new pt
        }
      }),
      this.matrix = new Ve,
      this.matrixWorld = new Ve,
      this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE,
      this.matrixWorldNeedsUpdate = !1,
      this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
      this.layers = new Co,
      this.visible = !0,
      this.castShadow = !1,
      this.receiveShadow = !1,
      this.frustumCulled = !0,
      this.renderOrder = 0,
      this.animations = [],
      this.userData = {}
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale)
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e),
      this
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t)
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0)
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e)
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e)
  }
  rotateOnAxis(e, t) {
    return Fn.setFromAxisAngle(e, t),
      this.quaternion.multiply(Fn),
      this
  }
  rotateOnWorldAxis(e, t) {
    return Fn.setFromAxisAngle(e, t),
      this.quaternion.premultiply(Fn),
      this
  }
  rotateX(e) {
    return this.rotateOnAxis(fa, e)
  }
  rotateY(e) {
    return this.rotateOnAxis(pa, e)
  }
  rotateZ(e) {
    return this.rotateOnAxis(ma, e)
  }
  translateOnAxis(e, t) {
    return da.copy(e).applyQuaternion(this.quaternion),
      this.position.add(da.multiplyScalar(t)),
      this
  }
  translateX(e) {
    return this.translateOnAxis(fa, e)
  }
  translateY(e) {
    return this.translateOnAxis(pa, e)
  }
  translateZ(e) {
    return this.translateOnAxis(ma, e)
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(this.matrixWorld)
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Xt.copy(this.matrixWorld).invert())
  }
  lookAt(e, t, n) {
    e.isVector3 ? Di.copy(e) : Di.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      si.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ? Xt.lookAt(si, Di, this.up) : Xt.lookAt(Di, si, this.up),
      this.quaternion.setFromRotationMatrix(Xt),
    i && (Xt.extractRotation(i.matrixWorld),
      Fn.setFromRotationMatrix(Xt),
      this.quaternion.premultiply(Fn.invert()))
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
      this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e),
      e.parent = this,
      this.children.push(e),
      e.dispatchEvent(Nc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
      this)
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null,
      this.children.splice(t, 1),
      e.dispatchEvent(ga)),
      this
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this),
      this
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null,
        t.dispatchEvent(ga)
    }
    return this.children.length = 0,
      this
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1),
      Xt.copy(this.matrixWorld).invert(),
    e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
      Xt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Xt),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e)
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e)
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o))
    }
    return n
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(si, e, Dc),
      e
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(si, Ic, e),
      e
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize()
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e)
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e)
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t),
      t.traverseAncestors(e))
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      this.matrixWorldNeedsUpdate = !0
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
    (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
      this.matrixWorldNeedsUpdate = !1,
      e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e)
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
    this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
    t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0)
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string"
      , n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    },
      n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
    const i = {};
    i.uuid = this.uuid,
      i.type = this.type,
    this.name !== "" && (i.name = this.name),
    this.castShadow === !0 && (i.castShadow = !0),
    this.receiveShadow === !0 && (i.receiveShadow = !0),
    this.visible === !1 && (i.visible = !1),
    this.frustumCulled === !1 && (i.frustumCulled = !1),
    this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
    Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      i.layers = this.layers.mask,
      i.matrix = this.matrix.toArray(),
    this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
    this.isInstancedMesh && (i.type = "InstancedMesh",
      i.count = this.count,
      i.instanceMatrix = this.instanceMatrix.toJSON(),
    this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)),
        c.uuid
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
      this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            s(e.shapes, d)
          }
        else
          s(e.shapes, c)
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
      i.bindMatrix = this.bindMatrix.toArray(),
    this.skeleton !== void 0 && (s(e.skeletons, this.skeleton),
      i.skeleton = this.skeleton.uuid)),
    this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object)
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c))
      }
    }
    if (t) {
      const a = o(e.geometries)
        , c = o(e.materials)
        , l = o(e.textures)
        , u = o(e.images)
        , d = o(e.shapes)
        , p = o(e.skeletons)
        , m = o(e.animations)
        , g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
      c.length > 0 && (n.materials = c),
      l.length > 0 && (n.textures = l),
      u.length > 0 && (n.images = u),
      d.length > 0 && (n.shapes = d),
      p.length > 0 && (n.skeletons = p),
      m.length > 0 && (n.animations = m),
      g.length > 0 && (n.nodes = g)
    }
    return n.object = i,
      n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata,
          c.push(u)
      }
      return c
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e)
  }
  copy(e, t=!0) {
    if (this.name = e.name,
      this.up.copy(e.up),
      this.position.copy(e.position),
      this.rotation.order = e.rotation.order,
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      this.matrixAutoUpdate = e.matrixAutoUpdate,
      this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
      this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
      this.layers.mask = e.layers.mask,
      this.visible = e.visible,
      this.castShadow = e.castShadow,
      this.receiveShadow = e.receiveShadow,
      this.frustumCulled = e.frustumCulled,
      this.renderOrder = e.renderOrder,
      this.userData = JSON.parse(JSON.stringify(e.userData)),
    t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone())
      }
    return this
  }
}
it.DEFAULT_UP = new D(0,1,0);
it.DEFAULT_MATRIX_AUTO_UPDATE = !0;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const At = new D
  , jt = new D
  , Dr = new D
  , Yt = new D
  , On = new D
  , Un = new D
  , _a = new D
  , Ir = new D
  , Nr = new D
  , Fr = new D;
class $t {
  constructor(e=new D, t=new D, n=new D) {
    this.a = e,
      this.b = t,
      this.c = n
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t),
      At.subVectors(e, t),
      i.cross(At);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0)
  }
  static getBarycoord(e, t, n, i, s) {
    At.subVectors(i, t),
      jt.subVectors(n, t),
      Dr.subVectors(e, t);
    const o = At.dot(At)
      , a = At.dot(jt)
      , c = At.dot(Dr)
      , l = jt.dot(jt)
      , u = jt.dot(Dr)
      , d = o * l - a * a;
    if (d === 0)
      return s.set(-2, -1, -1);
    const p = 1 / d
      , m = (l * c - a * u) * p
      , g = (o * u - a * c) * p;
    return s.set(1 - m - g, g, m)
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Yt),
    Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1
  }
  static getUV(e, t, n, i, s, o, a, c) {
    return this.getBarycoord(e, t, n, i, Yt),
      c.set(0, 0),
      c.addScaledVector(s, Yt.x),
      c.addScaledVector(o, Yt.y),
      c.addScaledVector(a, Yt.z),
      c
  }
  static isFrontFacing(e, t, n, i) {
    return At.subVectors(n, t),
      jt.subVectors(e, t),
    At.cross(jt).dot(i) < 0
  }
  set(e, t, n) {
    return this.a.copy(e),
      this.b.copy(t),
      this.c.copy(n),
      this
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]),
      this.b.copy(e[n]),
      this.c.copy(e[i]),
      this
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    return this.a.copy(e.a),
      this.b.copy(e.b),
      this.c.copy(e.c),
      this
  }
  getArea() {
    return At.subVectors(this.c, this.b),
      jt.subVectors(this.a, this.b),
    At.cross(jt).length() * .5
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
  }
  getNormal(e) {
    return $t.getNormal(this.a, this.b, this.c, e)
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c)
  }
  getBarycoord(e, t) {
    return $t.getBarycoord(e, this.a, this.b, this.c, t)
  }
  getUV(e, t, n, i, s) {
    return $t.getUV(e, this.a, this.b, this.c, t, n, i, s)
  }
  containsPoint(e) {
    return $t.containsPoint(e, this.a, this.b, this.c)
  }
  isFrontFacing(e) {
    return $t.isFrontFacing(this.a, this.b, this.c, e)
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this)
  }
  closestPointToPoint(e, t) {
    const n = this.a
      , i = this.b
      , s = this.c;
    let o, a;
    On.subVectors(i, n),
      Un.subVectors(s, n),
      Ir.subVectors(e, n);
    const c = On.dot(Ir)
      , l = Un.dot(Ir);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Nr.subVectors(e, i);
    const u = On.dot(Nr)
      , d = Un.dot(Nr);
    if (u >= 0 && d <= u)
      return t.copy(i);
    const p = c * d - u * l;
    if (p <= 0 && c >= 0 && u <= 0)
      return o = c / (c - u),
        t.copy(n).addScaledVector(On, o);
    Fr.subVectors(e, s);
    const m = On.dot(Fr)
      , g = Un.dot(Fr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const h = m * l - c * g;
    if (h <= 0 && l >= 0 && g <= 0)
      return a = l / (l - g),
        t.copy(n).addScaledVector(Un, a);
    const f = u * g - m * d;
    if (f <= 0 && d - u >= 0 && m - g >= 0)
      return _a.subVectors(s, i),
        a = (d - u) / (d - u + (m - g)),
        t.copy(i).addScaledVector(_a, a);
    const v = 1 / (f + h + p);
    return o = h * v,
      a = p * v,
      t.copy(n).addScaledVector(On, o).addScaledVector(Un, a)
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
  }
}
let Fc = 0;
class Mi extends An {
  constructor() {
    super(),
      this.isMaterial = !0,
      Object.defineProperty(this, "id", {
        value: Fc++
      }),
      this.uuid = vi(),
      this.name = "",
      this.type = "Material",
      this.blending = Xn,
      this.side = ln,
      this.vertexColors = !1,
      this.opacity = 1,
      this.transparent = !1,
      this.blendSrc = _o,
      this.blendDst = xo,
      this.blendEquation = Wn,
      this.blendSrcAlpha = null,
      this.blendDstAlpha = null,
      this.blendEquationAlpha = null,
      this.depthFunc = Jr,
      this.depthTest = !0,
      this.depthWrite = !0,
      this.stencilWriteMask = 255,
      this.stencilFunc = _c,
      this.stencilRef = 0,
      this.stencilFuncMask = 255,
      this.stencilFail = vr,
      this.stencilZFail = vr,
      this.stencilZPass = vr,
      this.stencilWrite = !1,
      this.clippingPlanes = null,
      this.clipIntersection = !1,
      this.clipShadows = !1,
      this.shadowSide = null,
      this.colorWrite = !0,
      this.precision = null,
      this.polygonOffset = !1,
      this.polygonOffsetFactor = 0,
      this.polygonOffsetUnits = 0,
      this.dithering = !1,
      this.alphaToCoverage = !1,
      this.premultipliedAlpha = !1,
      this.forceSinglePass = !1,
      this.visible = !0,
      this.toneMapped = !0,
      this.userData = {},
      this.version = 0,
      this._alphaTest = 0
  }
  get alphaTest() {
    return this._alphaTest
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++,
      this._alphaTest = e
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString()
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid,
      n.type = this.type,
    this.name !== "" && (n.name = this.name),
    this.color && this.color.isColor && (n.color = this.color.getHex()),
    this.roughness !== void 0 && (n.roughness = this.roughness),
    this.metalness !== void 0 && (n.metalness = this.metalness),
    this.sheen !== void 0 && (n.sheen = this.sheen),
    this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
    this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
    this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
    this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
    this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
    this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
    this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
    this.shininess !== void 0 && (n.shininess = this.shininess),
    this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
    this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
    this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
    this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
    this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
      n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
    this.iridescence !== void 0 && (n.iridescence = this.iridescence),
    this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
    this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
    this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
    this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
    this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
    this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
    this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
    this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
      n.lightMapIntensity = this.lightMapIntensity),
    this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
      n.aoMapIntensity = this.aoMapIntensity),
    this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
      n.bumpScale = this.bumpScale),
    this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
      n.normalMapType = this.normalMapType,
      n.normalScale = this.normalScale.toArray()),
    this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
      n.displacementScale = this.displacementScale,
      n.displacementBias = this.displacementBias),
    this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
    this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
    this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
    this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
    this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
    this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
    this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
    this.combine !== void 0 && (n.combine = this.combine)),
    this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
    this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
    this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
    this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
    this.transmission !== void 0 && (n.transmission = this.transmission),
    this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
    this.thickness !== void 0 && (n.thickness = this.thickness),
    this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
    this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
    this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
    this.size !== void 0 && (n.size = this.size),
    this.shadowSide !== null && (n.shadowSide = this.shadowSide),
    this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
    this.blending !== Xn && (n.blending = this.blending),
    this.side !== ln && (n.side = this.side),
    this.vertexColors && (n.vertexColors = !0),
    this.opacity < 1 && (n.opacity = this.opacity),
    this.transparent === !0 && (n.transparent = this.transparent),
      n.depthFunc = this.depthFunc,
      n.depthTest = this.depthTest,
      n.depthWrite = this.depthWrite,
      n.colorWrite = this.colorWrite,
      n.stencilWrite = this.stencilWrite,
      n.stencilWriteMask = this.stencilWriteMask,
      n.stencilFunc = this.stencilFunc,
      n.stencilRef = this.stencilRef,
      n.stencilFuncMask = this.stencilFuncMask,
      n.stencilFail = this.stencilFail,
      n.stencilZFail = this.stencilZFail,
      n.stencilZPass = this.stencilZPass,
    this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
    this.polygonOffset === !0 && (n.polygonOffset = !0),
    this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
    this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
    this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
    this.dashSize !== void 0 && (n.dashSize = this.dashSize),
    this.gapSize !== void 0 && (n.gapSize = this.gapSize),
    this.scale !== void 0 && (n.scale = this.scale),
    this.dithering === !0 && (n.dithering = !0),
    this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
    this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
    this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
    this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
    this.wireframe === !0 && (n.wireframe = this.wireframe),
    this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
    this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
    this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
    this.flatShading === !0 && (n.flatShading = this.flatShading),
    this.visible === !1 && (n.visible = !1),
    this.toneMapped === !1 && (n.toneMapped = !1),
    this.fog === !1 && (n.fog = !1),
    Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata,
          o.push(c)
      }
      return o
    }
    if (t) {
      const s = i(e.textures)
        , o = i(e.images);
      s.length > 0 && (n.textures = s),
      o.length > 0 && (n.images = o)
    }
    return n
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    this.name = e.name,
      this.blending = e.blending,
      this.side = e.side,
      this.vertexColors = e.vertexColors,
      this.opacity = e.opacity,
      this.transparent = e.transparent,
      this.blendSrc = e.blendSrc,
      this.blendDst = e.blendDst,
      this.blendEquation = e.blendEquation,
      this.blendSrcAlpha = e.blendSrcAlpha,
      this.blendDstAlpha = e.blendDstAlpha,
      this.blendEquationAlpha = e.blendEquationAlpha,
      this.depthFunc = e.depthFunc,
      this.depthTest = e.depthTest,
      this.depthWrite = e.depthWrite,
      this.stencilWriteMask = e.stencilWriteMask,
      this.stencilFunc = e.stencilFunc,
      this.stencilRef = e.stencilRef,
      this.stencilFuncMask = e.stencilFuncMask,
      this.stencilFail = e.stencilFail,
      this.stencilZFail = e.stencilZFail,
      this.stencilZPass = e.stencilZPass,
      this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone()
    }
    return this.clippingPlanes = n,
      this.clipIntersection = e.clipIntersection,
      this.clipShadows = e.clipShadows,
      this.shadowSide = e.shadowSide,
      this.colorWrite = e.colorWrite,
      this.precision = e.precision,
      this.polygonOffset = e.polygonOffset,
      this.polygonOffsetFactor = e.polygonOffsetFactor,
      this.polygonOffsetUnits = e.polygonOffsetUnits,
      this.dithering = e.dithering,
      this.alphaTest = e.alphaTest,
      this.alphaToCoverage = e.alphaToCoverage,
      this.premultipliedAlpha = e.premultipliedAlpha,
      this.forceSinglePass = e.forceSinglePass,
      this.visible = e.visible,
      this.toneMapped = e.toneMapped,
      this.userData = JSON.parse(JSON.stringify(e.userData)),
      this
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
  set needsUpdate(e) {
    e === !0 && this.version++
  }
}
const Lo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}
  , Ct = {
  h: 0,
  s: 0,
  l: 0
}
  , Ii = {
  h: 0,
  s: 0,
  l: 0
};
function Or(r, e, t) {
  return t < 0 && (t += 1),
  t > 1 && (t -= 1),
    t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r
}
class Ue {
  constructor(e, t, n) {
    return this.isColor = !0,
      this.r = 1,
      this.g = 1,
      this.b = 1,
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e),
      this
  }
  setScalar(e) {
    return this.r = e,
      this.g = e,
      this.b = e,
      this
  }
  setHex(e, t=Ut) {
    return e = Math.floor(e),
      this.r = (e >> 16 & 255) / 255,
      this.g = (e >> 8 & 255) / 255,
      this.b = (e & 255) / 255,
      ht.toWorkingColorSpace(this, t),
      this
  }
  setRGB(e, t, n, i=ht.workingColorSpace) {
    return this.r = e,
      this.g = t,
      this.b = n,
      ht.toWorkingColorSpace(this, i),
      this
  }
  setHSL(e, t, n, i=ht.workingColorSpace) {
    if (e = xc(e, 1),
      t = at(t, 0, 1),
      n = at(n, 0, 1),
    t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= .5 ? n * (1 + t) : n + t - n * t
        , o = 2 * n - s;
      this.r = Or(o, s, e + 1 / 3),
        this.g = Or(o, s, e),
        this.b = Or(o, s, e - 1 / 3)
    }
    return ht.toWorkingColorSpace(this, i),
      this
  }
  setStyle(e, t=Ut) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1]
        , a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255,
              this.g = Math.min(255, parseInt(s[2], 10)) / 255,
              this.b = Math.min(255, parseInt(s[3], 10)) / 255,
              ht.toWorkingColorSpace(this, t),
              n(s[4]),
              this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100,
              this.g = Math.min(100, parseInt(s[2], 10)) / 100,
              this.b = Math.min(100, parseInt(s[3], 10)) / 100,
              ht.toWorkingColorSpace(this, t),
              n(s[4]),
              this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const c = parseFloat(s[1]) / 360
              , l = parseFloat(s[2]) / 100
              , u = parseFloat(s[3]) / 100;
            return n(s[4]),
              this.setHSL(c, l, u, t)
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e)
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1]
        , o = s.length;
      if (o === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255,
          this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255,
          this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255,
          ht.toWorkingColorSpace(this, t),
          this;
      if (o === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255,
          this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255,
          this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255,
          ht.toWorkingColorSpace(this, t),
          this;
      console.warn("THREE.Color: Invalid hex color " + e)
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this
  }
  setColorName(e, t=Ut) {
    const n = Lo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
      this
  }
  clone() {
    return new this.constructor(this.r,this.g,this.b)
  }
  copy(e) {
    return this.r = e.r,
      this.g = e.g,
      this.b = e.b,
      this
  }
  copySRGBToLinear(e) {
    return this.r = Yn(e.r),
      this.g = Yn(e.g),
      this.b = Yn(e.b),
      this
  }
  copyLinearToSRGB(e) {
    return this.r = wr(e.r),
      this.g = wr(e.g),
      this.b = wr(e.b),
      this
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this),
      this
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this),
      this
  }
  getHex(e=Ut) {
    return ht.fromWorkingColorSpace(st.copy(this), e),
    at(st.r * 255, 0, 255) << 16 ^ at(st.g * 255, 0, 255) << 8 ^ at(st.b * 255, 0, 255) << 0
  }
  getHexString(e=Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6)
  }
  getHSL(e, t=ht.workingColorSpace) {
    ht.fromWorkingColorSpace(st.copy(this), t);
    const n = st.r
      , i = st.g
      , s = st.b
      , o = Math.max(n, i, s)
      , a = Math.min(n, i, s);
    let c, l;
    const u = (a + o) / 2;
    if (a === o)
      c = 0,
        l = 0;
    else {
      const d = o - a;
      switch (l = u <= .5 ? d / (o + a) : d / (2 - o - a),
        o) {
        case n:
          c = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - i) / d + 4;
          break
      }
      c /= 6
    }
    return e.h = c,
      e.s = l,
      e.l = u,
      e
  }
  getRGB(e, t=ht.workingColorSpace) {
    return ht.fromWorkingColorSpace(st.copy(this), t),
      e.r = st.r,
      e.g = st.g,
      e.b = st.b,
      e
  }
  getStyle(e=Ut) {
    ht.fromWorkingColorSpace(st.copy(this), e);
    const t = st.r
      , n = st.g
      , i = st.b;
    return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${t * 255 | 0},${n * 255 | 0},${i * 255 | 0})`
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ct),
      Ct.h += e,
      Ct.s += t,
      Ct.l += n,
      this.setHSL(Ct.h, Ct.s, Ct.l),
      this
  }
  add(e) {
    return this.r += e.r,
      this.g += e.g,
      this.b += e.b,
      this
  }
  addColors(e, t) {
    return this.r = e.r + t.r,
      this.g = e.g + t.g,
      this.b = e.b + t.b,
      this
  }
  addScalar(e) {
    return this.r += e,
      this.g += e,
      this.b += e,
      this
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r),
      this.g = Math.max(0, this.g - e.g),
      this.b = Math.max(0, this.b - e.b),
      this
  }
  multiply(e) {
    return this.r *= e.r,
      this.g *= e.g,
      this.b *= e.b,
      this
  }
  multiplyScalar(e) {
    return this.r *= e,
      this.g *= e,
      this.b *= e,
      this
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t,
      this.g += (e.g - this.g) * t,
      this.b += (e.b - this.b) * t,
      this
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n,
      this.g = e.g + (t.g - e.g) * n,
      this.b = e.b + (t.b - e.b) * n,
      this
  }
  lerpHSL(e, t) {
    this.getHSL(Ct),
      e.getHSL(Ii);
    const n = Mr(Ct.h, Ii.h, t)
      , i = Mr(Ct.s, Ii.s, t)
      , s = Mr(Ct.l, Ii.l, t);
    return this.setHSL(n, i, s),
      this
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b
  }
  fromArray(e, t=0) {
    return this.r = e[t],
      this.g = e[t + 1],
      this.b = e[t + 2],
      this
  }
  toArray(e=[], t=0) {
    return e[t] = this.r,
      e[t + 1] = this.g,
      e[t + 2] = this.b,
      e
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t),
      this.g = e.getY(t),
      this.b = e.getZ(t),
      this
  }
  toJSON() {
    return this.getHex()
  }
  *[Symbol.iterator]() {
    yield this.r,
      yield this.g,
      yield this.b
  }
}
const st = new Ue;
Ue.NAMES = Lo;
class fi extends Mi {
  constructor(e) {
    super(),
      this.isMeshBasicMaterial = !0,
      this.type = "MeshBasicMaterial",
      this.color = new Ue(16777215),
      this.map = null,
      this.lightMap = null,
      this.lightMapIntensity = 1,
      this.aoMap = null,
      this.aoMapIntensity = 1,
      this.specularMap = null,
      this.alphaMap = null,
      this.envMap = null,
      this.combine = vo,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinecap = "round",
      this.wireframeLinejoin = "round",
      this.fog = !0,
      this.setValues(e)
  }
  copy(e) {
    return super.copy(e),
      this.color.copy(e.color),
      this.map = e.map,
      this.lightMap = e.lightMap,
      this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap,
      this.aoMapIntensity = e.aoMapIntensity,
      this.specularMap = e.specularMap,
      this.alphaMap = e.alphaMap,
      this.envMap = e.envMap,
      this.combine = e.combine,
      this.reflectivity = e.reflectivity,
      this.refractionRatio = e.refractionRatio,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.wireframeLinecap = e.wireframeLinecap,
      this.wireframeLinejoin = e.wireframeLinejoin,
      this.fog = e.fog,
      this
  }
}
const Xe = new D
  , Ni = new we;
class Gt {
  constructor(e, t, n=!1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0,
      this.name = "",
      this.array = e,
      this.itemSize = t,
      this.count = e !== void 0 ? e.length / t : 0,
      this.normalized = n,
      this.usage = sa,
      this.updateRange = {
        offset: 0,
        count: -1
      },
      this.version = 0
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++
  }
  setUsage(e) {
    return this.usage = e,
      this
  }
  copy(e) {
    return this.name = e.name,
      this.array = new e.array.constructor(e.array),
      this.itemSize = e.itemSize,
      this.count = e.count,
      this.normalized = e.normalized,
      this.usage = e.usage,
      this
  }
  copyAt(e, t, n) {
    e *= this.itemSize,
      n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this
  }
  copyArray(e) {
    return this.array.set(e),
      this
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ni.fromBufferAttribute(this, t),
          Ni.applyMatrix3(e),
          this.setXY(t, Ni.x, Ni.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Xe.fromBufferAttribute(this, t),
          Xe.applyMatrix3(e),
          this.setXYZ(t, Xe.x, Xe.y, Xe.z);
    return this
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Xe.fromBufferAttribute(this, t),
        Xe.applyMatrix4(e),
        this.setXYZ(t, Xe.x, Xe.y, Xe.z);
    return this
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Xe.fromBufferAttribute(this, t),
        Xe.applyNormalMatrix(e),
        this.setXYZ(t, Xe.x, Xe.y, Xe.z);
    return this
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Xe.fromBufferAttribute(this, t),
        Xe.transformDirection(e),
        this.setXYZ(t, Xe.x, Xe.y, Xe.z);
    return this
  }
  set(e, t=0) {
    return this.array.set(e, t),
      this
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ti(t, this.array)),
      t
  }
  setX(e, t) {
    return this.normalized && (t = xt(t, this.array)),
      this.array[e * this.itemSize] = t,
      this
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ti(t, this.array)),
      t
  }
  setY(e, t) {
    return this.normalized && (t = xt(t, this.array)),
      this.array[e * this.itemSize + 1] = t,
      this
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ti(t, this.array)),
      t
  }
  setZ(e, t) {
    return this.normalized && (t = xt(t, this.array)),
      this.array[e * this.itemSize + 2] = t,
      this
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ti(t, this.array)),
      t
  }
  setW(e, t) {
    return this.normalized && (t = xt(t, this.array)),
      this.array[e * this.itemSize + 3] = t,
      this
  }
  setXY(e, t, n) {
    return e *= this.itemSize,
    this.normalized && (t = xt(t, this.array),
      n = xt(n, this.array)),
      this.array[e + 0] = t,
      this.array[e + 1] = n,
      this
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize,
    this.normalized && (t = xt(t, this.array),
      n = xt(n, this.array),
      i = xt(i, this.array)),
      this.array[e + 0] = t,
      this.array[e + 1] = n,
      this.array[e + 2] = i,
      this
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize,
    this.normalized && (t = xt(t, this.array),
      n = xt(n, this.array),
      i = xt(i, this.array),
      s = xt(s, this.array)),
      this.array[e + 0] = t,
      this.array[e + 1] = n,
      this.array[e + 2] = i,
      this.array[e + 3] = s,
      this
  }
  onUpload(e) {
    return this.onUploadCallback = e,
      this
  }
  clone() {
    return new this.constructor(this.array,this.itemSize).copy(this)
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name),
    this.usage !== sa && (e.usage = this.usage),
    (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange),
      e
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
  }
}
class Ro extends Gt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n)
  }
}
class Po extends Gt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n)
  }
}
class It extends Gt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n)
  }
}
let Oc = 0;
const wt = new Ve
  , Ur = new it
  , zn = new D
  , yt = new yi
  , ai = new yi
  , tt = new D;
class Vt extends An {
  constructor() {
    super(),
      this.isBufferGeometry = !0,
      Object.defineProperty(this, "id", {
        value: Oc++
      }),
      this.uuid = vi(),
      this.name = "",
      this.type = "BufferGeometry",
      this.index = null,
      this.attributes = {},
      this.morphAttributes = {},
      this.morphTargetsRelative = !1,
      this.groups = [],
      this.boundingBox = null,
      this.boundingSphere = null,
      this.drawRange = {
        start: 0,
        count: 1 / 0
      },
      this.userData = {}
  }
  getIndex() {
    return this.index
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (bo(e) ? Po : Ro)(e,1) : this.index = e,
      this
  }
  getAttribute(e) {
    return this.attributes[e]
  }
  setAttribute(e, t) {
    return this.attributes[e] = t,
      this
  }
  deleteAttribute(e) {
    return delete this.attributes[e],
      this
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0
  }
  addGroup(e, t, n=0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    })
  }
  clearGroups() {
    this.groups = []
  }
  setDrawRange(e, t) {
    this.drawRange.start = e,
      this.drawRange.count = t
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e),
      t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new pt().getNormalMatrix(e);
      n.applyNormalMatrix(s),
        n.needsUpdate = !0
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e),
      i.needsUpdate = !0),
    this.boundingBox !== null && this.computeBoundingBox(),
    this.boundingSphere !== null && this.computeBoundingSphere(),
      this
  }
  applyQuaternion(e) {
    return wt.makeRotationFromQuaternion(e),
      this.applyMatrix4(wt),
      this
  }
  rotateX(e) {
    return wt.makeRotationX(e),
      this.applyMatrix4(wt),
      this
  }
  rotateY(e) {
    return wt.makeRotationY(e),
      this.applyMatrix4(wt),
      this
  }
  rotateZ(e) {
    return wt.makeRotationZ(e),
      this.applyMatrix4(wt),
      this
  }
  translate(e, t, n) {
    return wt.makeTranslation(e, t, n),
      this.applyMatrix4(wt),
      this
  }
  scale(e, t, n) {
    return wt.makeScale(e, t, n),
      this.applyMatrix4(wt),
      this
  }
  lookAt(e) {
    return Ur.lookAt(e),
      Ur.updateMatrix(),
      this.applyMatrix4(Ur.matrix),
      this
  }
  center() {
    return this.computeBoundingBox(),
      this.boundingBox.getCenter(zn).negate(),
      this.translate(zn.x, zn.y, zn.z),
      this
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0)
    }
    return this.setAttribute("position", new It(t,3)),
      this
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new yi);
    const e = this.attributes.position
      , t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
        this.boundingBox.set(new D(-1 / 0,-1 / 0,-1 / 0), new D(1 / 0,1 / 0,1 / 0));
      return
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e),
        t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          yt.setFromBufferAttribute(s),
            this.morphTargetsRelative ? (tt.addVectors(this.boundingBox.min, yt.min),
              this.boundingBox.expandByPoint(tt),
              tt.addVectors(this.boundingBox.max, yt.max),
              this.boundingBox.expandByPoint(tt)) : (this.boundingBox.expandByPoint(yt.min),
              this.boundingBox.expandByPoint(yt.max))
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new nr);
    const e = this.attributes.position
      , t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
        this.boundingSphere.set(new D, 1 / 0);
      return
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (yt.setFromBufferAttribute(e),
        t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ai.setFromBufferAttribute(a),
            this.morphTargetsRelative ? (tt.addVectors(yt.min, ai.min),
              yt.expandByPoint(tt),
              tt.addVectors(yt.max, ai.max),
              yt.expandByPoint(tt)) : (yt.expandByPoint(ai.min),
              yt.expandByPoint(ai.max))
        }
      yt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        tt.fromBufferAttribute(e, s),
          i = Math.max(i, n.distanceToSquared(tt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s]
            , c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++)
            tt.fromBufferAttribute(a, l),
            c && (zn.fromBufferAttribute(e, l),
              tt.add(zn)),
              i = Math.max(i, n.distanceToSquared(tt))
        }
      this.boundingSphere.radius = Math.sqrt(i),
      isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
    }
  }
  computeTangents() {
    const e = this.index
      , t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return
    }
    const n = e.array
      , i = t.position.array
      , s = t.normal.array
      , o = t.uv.array
      , a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Gt(new Float32Array(4 * a),4));
    const c = this.getAttribute("tangent").array
      , l = []
      , u = [];
    for (let P = 0; P < a; P++)
      l[P] = new D,
        u[P] = new D;
    const d = new D
      , p = new D
      , m = new D
      , g = new we
      , h = new we
      , f = new we
      , v = new D
      , w = new D;
    function x(P, G, K) {
      d.fromArray(i, P * 3),
        p.fromArray(i, G * 3),
        m.fromArray(i, K * 3),
        g.fromArray(o, P * 2),
        h.fromArray(o, G * 2),
        f.fromArray(o, K * 2),
        p.sub(d),
        m.sub(d),
        h.sub(g),
        f.sub(g);
      const z = 1 / (h.x * f.y - f.x * h.y);
      isFinite(z) && (v.copy(p).multiplyScalar(f.y).addScaledVector(m, -h.y).multiplyScalar(z),
        w.copy(m).multiplyScalar(h.x).addScaledVector(p, -f.x).multiplyScalar(z),
        l[P].add(v),
        l[G].add(v),
        l[K].add(v),
        u[P].add(w),
        u[G].add(w),
        u[K].add(w))
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: n.length
    }]);
    for (let P = 0, G = S.length; P < G; ++P) {
      const K = S[P]
        , z = K.start
        , F = K.count;
      for (let W = z, J = z + F; W < J; W += 3)
        x(n[W + 0], n[W + 1], n[W + 2])
    }
    const y = new D
      , b = new D
      , L = new D
      , _ = new D;
    function A(P) {
      L.fromArray(s, P * 3),
        _.copy(L);
      const G = l[P];
      y.copy(G),
        y.sub(L.multiplyScalar(L.dot(G))).normalize(),
        b.crossVectors(_, G);
      const z = b.dot(u[P]) < 0 ? -1 : 1;
      c[P * 4] = y.x,
        c[P * 4 + 1] = y.y,
        c[P * 4 + 2] = y.z,
        c[P * 4 + 3] = z
    }
    for (let P = 0, G = S.length; P < G; ++P) {
      const K = S[P]
        , z = K.start
        , F = K.count;
      for (let W = z, J = z + F; W < J; W += 3)
        A(n[W + 0]),
          A(n[W + 1]),
          A(n[W + 2])
    }
  }
  computeVertexNormals() {
    const e = this.index
      , t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Gt(new Float32Array(t.count * 3),3),
          this.setAttribute("normal", n);
      else
        for (let p = 0, m = n.count; p < m; p++)
          n.setXYZ(p, 0, 0, 0);
      const i = new D
        , s = new D
        , o = new D
        , a = new D
        , c = new D
        , l = new D
        , u = new D
        , d = new D;
      if (e)
        for (let p = 0, m = e.count; p < m; p += 3) {
          const g = e.getX(p + 0)
            , h = e.getX(p + 1)
            , f = e.getX(p + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, h),
            o.fromBufferAttribute(t, f),
            u.subVectors(o, s),
            d.subVectors(i, s),
            u.cross(d),
            a.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, h),
            l.fromBufferAttribute(n, f),
            a.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(h, c.x, c.y, c.z),
            n.setXYZ(f, l.x, l.y, l.z)
        }
      else
        for (let p = 0, m = t.count; p < m; p += 3)
          i.fromBufferAttribute(t, p + 0),
            s.fromBufferAttribute(t, p + 1),
            o.fromBufferAttribute(t, p + 2),
            u.subVectors(o, s),
            d.subVectors(i, s),
            u.cross(d),
            n.setXYZ(p + 0, u.x, u.y, u.z),
            n.setXYZ(p + 1, u.x, u.y, u.z),
            n.setXYZ(p + 2, u.x, u.y, u.z);
      this.normalizeNormals(),
        n.needsUpdate = !0
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),
      this
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      tt.fromBufferAttribute(e, t),
        tt.normalize(),
        e.setXYZ(t, tt.x, tt.y, tt.z)
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array
        , u = a.itemSize
        , d = a.normalized
        , p = new l.constructor(c.length * u);
      let m = 0
        , g = 0;
      for (let h = 0, f = c.length; h < f; h++) {
        a.isInterleavedBufferAttribute ? m = c[h] * a.data.stride + a.offset : m = c[h] * u;
        for (let v = 0; v < u; v++)
          p[g++] = l[m++]
      }
      return new Gt(p,u,d)
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
        this;
    const t = new Vt
      , n = this.index.array
      , i = this.attributes;
    for (const a in i) {
      const c = i[a]
        , l = e(c, n);
      t.setAttribute(a, l)
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = []
        , l = s[a];
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u]
          , m = e(p, n);
        c.push(m)
      }
      t.morphAttributes[a] = c
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex)
    }
    return t
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid,
      e.type = this.type,
    this.name !== "" && (e.name = this.name),
    Object.keys(this.userData).length > 0 && (e.userData = this.userData),
    this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e
    }
    e.data = {
      attributes: {}
    };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data)
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c]
        , u = [];
      for (let d = 0, p = l.length; d < p; d++) {
        const m = l[d];
        u.push(m.toJSON(e.data))
      }
      u.length > 0 && (i[c] = u,
        s = !0)
    }
    s && (e.data.morphAttributes = i,
      e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }),
      e
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    this.index = null,
      this.attributes = {},
      this.morphAttributes = {},
      this.groups = [],
      this.boundingBox = null,
      this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t))
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = []
        , d = s[l];
      for (let p = 0, m = d.length; p < m; p++)
        u.push(d[p].clone(t));
      this.morphAttributes[l] = u
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const d = o[l];
      this.addGroup(d.start, d.count, d.materialIndex)
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()),
      this.drawRange.start = e.drawRange.start,
      this.drawRange.count = e.drawRange.count,
      this.userData = e.userData,
      this
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
}
const xa = new Ve
  , Ot = new Ao
  , Fi = new nr
  , va = new D
  , oi = new D
  , li = new D
  , ci = new D
  , zr = new D
  , Oi = new D
  , Ui = new we
  , zi = new we
  , Bi = new we
  , Br = new D
  , ki = new D;
class Dt extends it {
  constructor(e=new Vt, t=new fi) {
    super(),
      this.isMesh = !0,
      this.type = "Mesh",
      this.geometry = e,
      this.material = t,
      this.updateMorphTargets()
  }
  copy(e, t) {
    return super.copy(e, t),
    e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
    e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
      this.material = e.material,
      this.geometry = e.geometry,
      this
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes
      , n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [],
          this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            this.morphTargetDictionary[a] = s
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry
      , i = n.attributes.position
      , s = n.morphAttributes.position
      , o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Oi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = a[c]
          , d = s[c];
        u !== 0 && (zr.fromBufferAttribute(d, e),
          o ? Oi.addScaledVector(zr, u) : Oi.addScaledVector(zr.sub(t), u))
      }
      t.add(Oi)
    }
    return this.isSkinnedMesh && this.boneTransform(e, t),
      t
  }
  raycast(e, t) {
    const n = this.geometry
      , i = this.material
      , s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(),
      Fi.copy(n.boundingSphere),
      Fi.applyMatrix4(s),
      Ot.copy(e.ray).recast(e.near),
    Fi.containsPoint(Ot.origin) === !1 && (Ot.intersectSphere(Fi, va) === null || Ot.origin.distanceToSquared(va) > (e.far - e.near) ** 2)) || (xa.copy(s).invert(),
      Ot.copy(e.ray).applyMatrix4(xa),
    n.boundingBox !== null && Ot.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const a = n.index
      , c = n.attributes.position
      , l = n.attributes.uv
      , u = n.attributes.uv2
      , d = n.groups
      , p = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let m = 0, g = d.length; m < g; m++) {
          const h = d[m]
            , f = i[h.materialIndex]
            , v = Math.max(h.start, p.start)
            , w = Math.min(a.count, Math.min(h.start + h.count, p.start + p.count));
          for (let x = v, S = w; x < S; x += 3) {
            const y = a.getX(x)
              , b = a.getX(x + 1)
              , L = a.getX(x + 2);
            o = Gi(this, f, e, Ot, l, u, y, b, L),
            o && (o.faceIndex = Math.floor(x / 3),
              o.face.materialIndex = h.materialIndex,
              t.push(o))
          }
        }
      else {
        const m = Math.max(0, p.start)
          , g = Math.min(a.count, p.start + p.count);
        for (let h = m, f = g; h < f; h += 3) {
          const v = a.getX(h)
            , w = a.getX(h + 1)
            , x = a.getX(h + 2);
          o = Gi(this, i, e, Ot, l, u, v, w, x),
          o && (o.faceIndex = Math.floor(h / 3),
            t.push(o))
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = d.length; m < g; m++) {
          const h = d[m]
            , f = i[h.materialIndex]
            , v = Math.max(h.start, p.start)
            , w = Math.min(c.count, Math.min(h.start + h.count, p.start + p.count));
          for (let x = v, S = w; x < S; x += 3) {
            const y = x
              , b = x + 1
              , L = x + 2;
            o = Gi(this, f, e, Ot, l, u, y, b, L),
            o && (o.faceIndex = Math.floor(x / 3),
              o.face.materialIndex = h.materialIndex,
              t.push(o))
          }
        }
      else {
        const m = Math.max(0, p.start)
          , g = Math.min(c.count, p.start + p.count);
        for (let h = m, f = g; h < f; h += 3) {
          const v = h
            , w = h + 1
            , x = h + 2;
          o = Gi(this, i, e, Ot, l, u, v, w, x),
          o && (o.faceIndex = Math.floor(h / 3),
            t.push(o))
        }
      }
  }
}
function Uc(r, e, t, n, i, s, o, a) {
  let c;
  if (e.side === Mt ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, e.side === ln, a),
  c === null)
    return null;
  ki.copy(a),
    ki.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(ki);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: ki.clone(),
    object: r
  }
}
function Gi(r, e, t, n, i, s, o, a, c) {
  r.getVertexPosition(o, oi),
    r.getVertexPosition(a, li),
    r.getVertexPosition(c, ci);
  const l = Uc(r, e, t, n, oi, li, ci, Br);
  if (l) {
    i && (Ui.fromBufferAttribute(i, o),
      zi.fromBufferAttribute(i, a),
      Bi.fromBufferAttribute(i, c),
      l.uv = $t.getUV(Br, oi, li, ci, Ui, zi, Bi, new we)),
    s && (Ui.fromBufferAttribute(s, o),
      zi.fromBufferAttribute(s, a),
      Bi.fromBufferAttribute(s, c),
      l.uv2 = $t.getUV(Br, oi, li, ci, Ui, zi, Bi, new we));
    const u = {
      a: o,
      b: a,
      c,
      normal: new D,
      materialIndex: 0
    };
    $t.getNormal(oi, li, ci, u.normal),
      l.face = u
  }
  return l
}
class Si extends Vt {
  constructor(e=1, t=1, n=1, i=1, s=1, o=1) {
    super(),
      this.type = "BoxGeometry",
      this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: o
      };
    const a = this;
    i = Math.floor(i),
      s = Math.floor(s),
      o = Math.floor(o);
    const c = []
      , l = []
      , u = []
      , d = [];
    let p = 0
      , m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new It(l,3)),
      this.setAttribute("normal", new It(u,3)),
      this.setAttribute("uv", new It(d,2));
    function g(h, f, v, w, x, S, y, b, L, _, A) {
      const P = S / L
        , G = y / _
        , K = S / 2
        , z = y / 2
        , F = b / 2
        , W = L + 1
        , J = _ + 1;
      let ee = 0
        , j = 0;
      const Y = new D;
      for (let Q = 0; Q < J; Q++) {
        const pe = Q * G - z;
        for (let B = 0; B < W; B++) {
          const $ = B * P - K;
          Y[h] = $ * w,
            Y[f] = pe * x,
            Y[v] = F,
            l.push(Y.x, Y.y, Y.z),
            Y[h] = 0,
            Y[f] = 0,
            Y[v] = b > 0 ? 1 : -1,
            u.push(Y.x, Y.y, Y.z),
            d.push(B / L),
            d.push(1 - Q / _),
            ee += 1
        }
      }
      for (let Q = 0; Q < _; Q++)
        for (let pe = 0; pe < L; pe++) {
          const B = p + pe + W * Q
            , $ = p + pe + W * (Q + 1)
            , re = p + (pe + 1) + W * (Q + 1)
            , O = p + (pe + 1) + W * Q;
          c.push(B, $, O),
            c.push($, re, O),
            j += 6
        }
      a.addGroup(m, j, A),
        m += j,
        p += ee
    }
  }
  copy(e) {
    return super.copy(e),
      this.parameters = Object.assign({}, e.parameters),
      this
  }
  static fromJSON(e) {
    return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
  }
}
function Jn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
    }
  }
  return e
}
function dt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Jn(r[t]);
    for (const i in n)
      e[i] = n[i]
  }
  return e
}
function zc(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e
}
function Do(r) {
  return r.getRenderTarget() === null && r.outputEncoding === ke ? Ut : _i
}
const Bc = {
  clone: Jn,
  merge: dt
};
var kc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , Gc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Tn extends Mi {
  constructor(e) {
    super(),
      this.isShaderMaterial = !0,
      this.type = "ShaderMaterial",
      this.defines = {},
      this.uniforms = {},
      this.uniformsGroups = [],
      this.vertexShader = kc,
      this.fragmentShader = Gc,
      this.linewidth = 1,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.fog = !1,
      this.lights = !1,
      this.clipping = !1,
      this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
      },
      this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
      },
      this.index0AttributeName = void 0,
      this.uniformsNeedUpdate = !1,
      this.glslVersion = null,
    e !== void 0 && this.setValues(e)
  }
  copy(e) {
    return super.copy(e),
      this.fragmentShader = e.fragmentShader,
      this.vertexShader = e.vertexShader,
      this.uniforms = Jn(e.uniforms),
      this.uniformsGroups = zc(e.uniformsGroups),
      this.defines = Object.assign({}, e.defines),
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.fog = e.fog,
      this.lights = e.lights,
      this.clipping = e.clipping,
      this.extensions = Object.assign({}, e.extensions),
      this.glslVersion = e.glslVersion,
      this
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion,
      t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      }
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      t.vertexShader = this.vertexShader,
      t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n),
      t
  }
}
class Io extends it {
  constructor() {
    super(),
      this.isCamera = !0,
      this.type = "Camera",
      this.matrixWorldInverse = new Ve,
      this.projectionMatrix = new Ve,
      this.projectionMatrixInverse = new Ve
  }
  copy(e, t) {
    return super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize()
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert()
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert()
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
class Lt extends Io {
  constructor(e=50, t=1, n=.1, i=2e3) {
    super(),
      this.isPerspectiveCamera = !0,
      this.type = "PerspectiveCamera",
      this.fov = e,
      this.zoom = 1,
      this.near = n,
      this.far = i,
      this.focus = 10,
      this.aspect = t,
      this.view = null,
      this.filmGauge = 35,
      this.filmOffset = 0,
      this.updateProjectionMatrix()
  }
  copy(e, t) {
    return super.copy(e, t),
      this.fov = e.fov,
      this.zoom = e.zoom,
      this.near = e.near,
      this.far = e.far,
      this.focus = e.focus,
      this.aspect = e.aspect,
      this.view = e.view === null ? null : Object.assign({}, e.view),
      this.filmGauge = e.filmGauge,
      this.filmOffset = e.filmOffset,
      this
  }
  setFocalLength(e) {
    const t = .5 * this.getFilmHeight() / e;
    this.fov = oa * 2 * Math.atan(t),
      this.updateProjectionMatrix()
  }
  getFocalLength() {
    const e = Math.tan(yr * .5 * this.fov);
    return .5 * this.getFilmHeight() / e
  }
  getEffectiveFOV() {
    return oa * 2 * Math.atan(Math.tan(yr * .5 * this.fov) / this.zoom)
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1)
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1)
  }
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t,
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }),
      this.view.enabled = !0,
      this.view.fullWidth = e,
      this.view.fullHeight = t,
      this.view.offsetX = n,
      this.view.offsetY = i,
      this.view.width = s,
      this.view.height = o,
      this.updateProjectionMatrix()
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix()
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(yr * .5 * this.fov) / this.zoom
      , n = 2 * t
      , i = this.aspect * n
      , s = -.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth
        , l = o.fullHeight;
      s += o.offsetX * i / c,
        t -= o.offsetY * n / l,
        i *= o.width / c,
        n *= o.height / l
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov,
      t.object.zoom = this.zoom,
      t.object.near = this.near,
      t.object.far = this.far,
      t.object.focus = this.focus,
      t.object.aspect = this.aspect,
    this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t.object.filmGauge = this.filmGauge,
      t.object.filmOffset = this.filmOffset,
      t
  }
}
const Bn = -90
  , kn = 1;
class Vc extends it {
  constructor(e, t, n) {
    super(),
      this.type = "CubeCamera",
      this.renderTarget = n;
    const i = new Lt(Bn,kn,e,t);
    i.layers = this.layers,
      i.up.set(0, 1, 0),
      i.lookAt(1, 0, 0),
      this.add(i);
    const s = new Lt(Bn,kn,e,t);
    s.layers = this.layers,
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const o = new Lt(Bn,kn,e,t);
    o.layers = this.layers,
      o.up.set(0, 0, -1),
      o.lookAt(0, 1, 0),
      this.add(o);
    const a = new Lt(Bn,kn,e,t);
    a.layers = this.layers,
      a.up.set(0, 0, 1),
      a.lookAt(0, -1, 0),
      this.add(a);
    const c = new Lt(Bn,kn,e,t);
    c.layers = this.layers,
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, 1),
      this.add(c);
    const l = new Lt(Bn,kn,e,t);
    l.layers = this.layers,
      l.up.set(0, 1, 0),
      l.lookAt(0, 0, -1),
      this.add(l)
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget
      , [i,s,o,a,c,l] = this.children
      , u = e.getRenderTarget()
      , d = e.toneMapping
      , p = e.xr.enabled;
    e.toneMapping = Zt,
      e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1,
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      n.texture.generateMipmaps = m,
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(u),
      e.toneMapping = d,
      e.xr.enabled = p,
      n.texture.needsPMREMUpdate = !0
  }
}
class No extends St {
  constructor(e, t, n, i, s, o, a, c, l, u) {
    e = e !== void 0 ? e : [],
      t = t !== void 0 ? t : $n,
      super(e, t, n, i, s, o, a, c, l, u),
      this.isCubeTexture = !0,
      this.flipY = !1
  }
  get images() {
    return this.image
  }
  set images(e) {
    this.image = e
  }
}
class Hc extends En {
  constructor(e=1, t={}) {
    super(e, e, t),
      this.isWebGLCubeRenderTarget = !0;
    const n = {
      width: e,
      height: e,
      depth: 1
    }
      , i = [n, n, n, n, n, n];
    this.texture = new No(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
      this.texture.isRenderTargetTexture = !0,
      this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
      this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Et
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type,
      this.texture.encoding = t.encoding,
      this.texture.generateMipmaps = t.generateMipmaps,
      this.texture.minFilter = t.minFilter,
      this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }
      , i = new Si(5,5,5)
      , s = new Tn({
      name: "CubemapFromEquirect",
      uniforms: Jn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Mt,
      blending: on
    });
    s.uniforms.tEquirect.value = t;
    const o = new Dt(i,s)
      , a = t.minFilter;
    return t.minFilter === mi && (t.minFilter = Et),
      new Vc(1,10,this).update(e, o),
      t.minFilter = a,
      o.geometry.dispose(),
      o.material.dispose(),
      this
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o),
        e.clear(t, n, i);
    e.setRenderTarget(s)
  }
}
const kr = new D
  , Wc = new D
  , qc = new pt;
class gn {
  constructor(e=new D(1,0,0), t=0) {
    this.isPlane = !0,
      this.normal = e,
      this.constant = t
  }
  set(e, t) {
    return this.normal.copy(e),
      this.constant = t,
      this
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n),
      this.constant = i,
      this
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e),
      this.constant = -t.dot(this.normal),
      this
  }
  setFromCoplanarPoints(e, t, n) {
    const i = kr.subVectors(n, t).cross(Wc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e),
      this
  }
  copy(e) {
    return this.normal.copy(e.normal),
      this.constant = e.constant,
      this
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e),
      this.constant *= e,
      this
  }
  negate() {
    return this.constant *= -1,
      this.normal.negate(),
      this
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
  }
  intersectLine(e, t) {
    const n = e.delta(kr)
      , i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s)
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start)
      , n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0
  }
  intersectsBox(e) {
    return e.intersectsPlane(this)
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this)
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant)
  }
  applyMatrix4(e, t) {
    const n = t || qc.getNormalMatrix(e)
      , i = this.coplanarPoint(kr).applyMatrix4(e)
      , s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s),
      this
  }
  translate(e) {
    return this.constant -= e.dot(this.normal),
      this
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const Gn = new nr
  , Vi = new D;
class fs {
  constructor(e=new gn, t=new gn, n=new gn, i=new gn, s=new gn, o=new gn) {
    this.planes = [e, t, n, i, s, o]
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(s),
      a[5].copy(o),
      this
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this
  }
  setFromProjectionMatrix(e) {
    const t = this.planes
      , n = e.elements
      , i = n[0]
      , s = n[1]
      , o = n[2]
      , a = n[3]
      , c = n[4]
      , l = n[5]
      , u = n[6]
      , d = n[7]
      , p = n[8]
      , m = n[9]
      , g = n[10]
      , h = n[11]
      , f = n[12]
      , v = n[13]
      , w = n[14]
      , x = n[15];
    return t[0].setComponents(a - i, d - c, h - p, x - f).normalize(),
      t[1].setComponents(a + i, d + c, h + p, x + f).normalize(),
      t[2].setComponents(a + s, d + l, h + m, x + v).normalize(),
      t[3].setComponents(a - s, d - l, h - m, x - v).normalize(),
      t[4].setComponents(a - o, d - u, h - g, x - w).normalize(),
      t[5].setComponents(a + o, d + u, h + g, x + w).normalize(),
      this
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(),
      Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Gn)
  }
  intersectsSprite(e) {
    return Gn.center.set(0, 0, 0),
      Gn.radius = .7071067811865476,
      Gn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Gn)
  }
  intersectsSphere(e) {
    const t = this.planes
      , n = e.center
      , i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Vi.x = i.normal.x > 0 ? e.max.x : e.min.x,
        Vi.y = i.normal.y > 0 ? e.max.y : e.min.y,
        Vi.z = i.normal.z > 0 ? e.max.z : e.min.z,
      i.distanceToPoint(Vi) < 0)
        return !1
    }
    return !0
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
function Fo() {
  let r = null
    , e = !1
    , t = null
    , n = null;
  function i(s, o) {
    t(s, o),
      n = r.requestAnimationFrame(i)
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i),
        e = !0)
    },
    stop: function() {
      r.cancelAnimationFrame(n),
        e = !1
    },
    setAnimationLoop: function(s) {
      t = s
    },
    setContext: function(s) {
      r = s
    }
  }
}
function Xc(r, e) {
  const t = e.isWebGL2
    , n = new WeakMap;
  function i(l, u) {
    const d = l.array
      , p = l.usage
      , m = r.createBuffer();
    r.bindBuffer(u, m),
      r.bufferData(u, d, p),
      l.onUploadCallback();
    let g;
    if (d instanceof Float32Array)
      g = 5126;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (d instanceof Int16Array)
      g = 5122;
    else if (d instanceof Uint32Array)
      g = 5125;
    else if (d instanceof Int32Array)
      g = 5124;
    else if (d instanceof Int8Array)
      g = 5120;
    else if (d instanceof Uint8Array)
      g = 5121;
    else if (d instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version
    }
  }
  function s(l, u, d) {
    const p = u.array
      , m = u.updateRange;
    r.bindBuffer(d, l),
      m.count === -1 ? r.bufferSubData(d, 0, p) : (t ? r.bufferSubData(d, m.offset * p.BYTES_PER_ELEMENT, p, m.offset, m.count) : r.bufferSubData(d, m.offset * p.BYTES_PER_ELEMENT, p.subarray(m.offset, m.offset + m.count)),
        m.count = -1),
      u.onUploadCallback()
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data),
      n.get(l)
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (r.deleteBuffer(u.buffer),
      n.delete(l))
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const p = n.get(l);
      (!p || p.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0 ? n.set(l, i(l, u)) : d.version < l.version && (s(d.buffer, l, u),
      d.version = l.version)
  }
  return {
    get: o,
    remove: a,
    update: c
  }
}
class ps extends Vt {
  constructor(e=1, t=1, n=1, i=1) {
    super(),
      this.type = "PlaneGeometry",
      this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
    const s = e / 2
      , o = t / 2
      , a = Math.floor(n)
      , c = Math.floor(i)
      , l = a + 1
      , u = c + 1
      , d = e / a
      , p = t / c
      , m = []
      , g = []
      , h = []
      , f = [];
    for (let v = 0; v < u; v++) {
      const w = v * p - o;
      for (let x = 0; x < l; x++) {
        const S = x * d - s;
        g.push(S, -w, 0),
          h.push(0, 0, 1),
          f.push(x / a),
          f.push(1 - v / c)
      }
    }
    for (let v = 0; v < c; v++)
      for (let w = 0; w < a; w++) {
        const x = w + l * v
          , S = w + l * (v + 1)
          , y = w + 1 + l * (v + 1)
          , b = w + 1 + l * v;
        m.push(x, S, b),
          m.push(S, y, b)
      }
    this.setIndex(m),
      this.setAttribute("position", new It(g,3)),
      this.setAttribute("normal", new It(h,3)),
      this.setAttribute("uv", new It(f,2))
  }
  copy(e) {
    return super.copy(e),
      this.parameters = Object.assign({}, e.parameters),
      this
  }
  static fromJSON(e) {
    return new ps(e.width,e.height,e.widthSegments,e.heightSegments)
  }
}
var jc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`
  , Yc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , $c = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`
  , Zc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , Kc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , Jc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , Qc = "vec3 transformed = vec3( position );"
  , eu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , tu = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`
  , nu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , iu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , ru = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`
  , su = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , au = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , ou = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , lu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , cu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , uu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
  , hu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
  , du = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`
  , fu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , pu = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , mu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , gu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`
  , _u = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , xu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , vu = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , yu = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , Mu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , Su = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`
  , bu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , wu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , Eu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , Tu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , Au = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , Cu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Lu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Ru = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , Pu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`
  , Du = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , Iu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , Nu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Fu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Ou = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`
  , Uu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , zu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Bu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , ku = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , Gu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`
  , Vu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Hu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Wu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , qu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`
  , Xu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , ju = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Yu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`
  , $u = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`
  , Zu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , Ku = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , Ju = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Qu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , eh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , th = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , nh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , ih = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
  , rh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
  , sh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
  , ah = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`
  , oh = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , lh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , ch = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , uh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , hh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`
  , dh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`
  , fh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`
  , ph = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`
  , mh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , gh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , _h = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`
  , xh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , vh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , yh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , Mh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Sh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , bh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , wh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`
  , Eh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , Th = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Ah = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Ch = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Lh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`
  , Rh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , Ph = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , Dh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Ih = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , Nh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Fh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , Oh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`
  , Uh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`
  , zh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`
  , Bh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`
  , kh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`
  , Gh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`
  , Vh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`
  , Hh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`
  , Wh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const qh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Xh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , jh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Yh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , $h = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Zh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , Kh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , Jh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`
  , Qh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , ed = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , td = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , nd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , id = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , rd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , sd = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , ad = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , od = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , ld = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , cd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , ud = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , hd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , dd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , fd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , pd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , md = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , gd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , _d = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , xd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , vd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , yd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Md = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Sd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`
  , bd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , wd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`
  , be = {
  alphamap_fragment: jc,
  alphamap_pars_fragment: Yc,
  alphatest_fragment: $c,
  alphatest_pars_fragment: Zc,
  aomap_fragment: Kc,
  aomap_pars_fragment: Jc,
  begin_vertex: Qc,
  beginnormal_vertex: eu,
  bsdfs: tu,
  iridescence_fragment: nu,
  bumpmap_pars_fragment: iu,
  clipping_planes_fragment: ru,
  clipping_planes_pars_fragment: su,
  clipping_planes_pars_vertex: au,
  clipping_planes_vertex: ou,
  color_fragment: lu,
  color_pars_fragment: cu,
  color_pars_vertex: uu,
  color_vertex: hu,
  common: du,
  cube_uv_reflection_fragment: fu,
  defaultnormal_vertex: pu,
  displacementmap_pars_vertex: mu,
  displacementmap_vertex: gu,
  emissivemap_fragment: _u,
  emissivemap_pars_fragment: xu,
  encodings_fragment: vu,
  encodings_pars_fragment: yu,
  envmap_fragment: Mu,
  envmap_common_pars_fragment: Su,
  envmap_pars_fragment: bu,
  envmap_pars_vertex: wu,
  envmap_physical_pars_fragment: Ou,
  envmap_vertex: Eu,
  fog_vertex: Tu,
  fog_pars_vertex: Au,
  fog_fragment: Cu,
  fog_pars_fragment: Lu,
  gradientmap_pars_fragment: Ru,
  lightmap_fragment: Pu,
  lightmap_pars_fragment: Du,
  lights_lambert_fragment: Iu,
  lights_lambert_pars_fragment: Nu,
  lights_pars_begin: Fu,
  lights_toon_fragment: Uu,
  lights_toon_pars_fragment: zu,
  lights_phong_fragment: Bu,
  lights_phong_pars_fragment: ku,
  lights_physical_fragment: Gu,
  lights_physical_pars_fragment: Vu,
  lights_fragment_begin: Hu,
  lights_fragment_maps: Wu,
  lights_fragment_end: qu,
  logdepthbuf_fragment: Xu,
  logdepthbuf_pars_fragment: ju,
  logdepthbuf_pars_vertex: Yu,
  logdepthbuf_vertex: $u,
  map_fragment: Zu,
  map_pars_fragment: Ku,
  map_particle_fragment: Ju,
  map_particle_pars_fragment: Qu,
  metalnessmap_fragment: eh,
  metalnessmap_pars_fragment: th,
  morphcolor_vertex: nh,
  morphnormal_vertex: ih,
  morphtarget_pars_vertex: rh,
  morphtarget_vertex: sh,
  normal_fragment_begin: ah,
  normal_fragment_maps: oh,
  normal_pars_fragment: lh,
  normal_pars_vertex: ch,
  normal_vertex: uh,
  normalmap_pars_fragment: hh,
  clearcoat_normal_fragment_begin: dh,
  clearcoat_normal_fragment_maps: fh,
  clearcoat_pars_fragment: ph,
  iridescence_pars_fragment: mh,
  output_fragment: gh,
  packing: _h,
  premultiplied_alpha_fragment: xh,
  project_vertex: vh,
  dithering_fragment: yh,
  dithering_pars_fragment: Mh,
  roughnessmap_fragment: Sh,
  roughnessmap_pars_fragment: bh,
  shadowmap_pars_fragment: wh,
  shadowmap_pars_vertex: Eh,
  shadowmap_vertex: Th,
  shadowmask_pars_fragment: Ah,
  skinbase_vertex: Ch,
  skinning_pars_vertex: Lh,
  skinning_vertex: Rh,
  skinnormal_vertex: Ph,
  specularmap_fragment: Dh,
  specularmap_pars_fragment: Ih,
  tonemapping_fragment: Nh,
  tonemapping_pars_fragment: Fh,
  transmission_fragment: Oh,
  transmission_pars_fragment: Uh,
  uv_pars_fragment: zh,
  uv_pars_vertex: Bh,
  uv_vertex: kh,
  uv2_pars_fragment: Gh,
  uv2_pars_vertex: Vh,
  uv2_vertex: Hh,
  worldpos_vertex: Wh,
  background_vert: qh,
  background_frag: Xh,
  backgroundCube_vert: jh,
  backgroundCube_frag: Yh,
  cube_vert: $h,
  cube_frag: Zh,
  depth_vert: Kh,
  depth_frag: Jh,
  distanceRGBA_vert: Qh,
  distanceRGBA_frag: ed,
  equirect_vert: td,
  equirect_frag: nd,
  linedashed_vert: id,
  linedashed_frag: rd,
  meshbasic_vert: sd,
  meshbasic_frag: ad,
  meshlambert_vert: od,
  meshlambert_frag: ld,
  meshmatcap_vert: cd,
  meshmatcap_frag: ud,
  meshnormal_vert: hd,
  meshnormal_frag: dd,
  meshphong_vert: fd,
  meshphong_frag: pd,
  meshphysical_vert: md,
  meshphysical_frag: gd,
  meshtoon_vert: _d,
  meshtoon_frag: xd,
  points_vert: vd,
  points_frag: yd,
  shadow_vert: Md,
  shadow_frag: Sd,
  sprite_vert: bd,
  sprite_frag: wd
}
  , ie = {
  common: {
    diffuse: {
      value: new Ue(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new pt
    },
    uv2Transform: {
      value: new pt
    },
    alphaMap: {
      value: null
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: .98
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalScale: {
      value: new we(1,1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 25e-5
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2e3
    },
    fogColor: {
      value: new Ue(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotShadowMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new Ue(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new pt
    }
  },
  sprite: {
    diffuse: {
      value: new Ue(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new we(.5,.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new pt
    }
  }
}
  , Bt = {
  basic: {
    uniforms: dt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]),
    vertexShader: be.meshbasic_vert,
    fragmentShader: be.meshbasic_frag
  },
  lambert: {
    uniforms: dt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, {
      emissive: {
        value: new Ue(0)
      }
    }]),
    vertexShader: be.meshlambert_vert,
    fragmentShader: be.meshlambert_frag
  },
  phong: {
    uniforms: dt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, {
      emissive: {
        value: new Ue(0)
      },
      specular: {
        value: new Ue(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: be.meshphong_vert,
    fragmentShader: be.meshphong_frag
  },
  standard: {
    uniforms: dt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, {
      emissive: {
        value: new Ue(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: be.meshphysical_vert,
    fragmentShader: be.meshphysical_frag
  },
  toon: {
    uniforms: dt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, {
      emissive: {
        value: new Ue(0)
      }
    }]),
    vertexShader: be.meshtoon_vert,
    fragmentShader: be.meshtoon_frag
  },
  matcap: {
    uniforms: dt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: be.meshmatcap_vert,
    fragmentShader: be.meshmatcap_frag
  },
  points: {
    uniforms: dt([ie.points, ie.fog]),
    vertexShader: be.points_vert,
    fragmentShader: be.points_frag
  },
  dashed: {
    uniforms: dt([ie.common, ie.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: be.linedashed_vert,
    fragmentShader: be.linedashed_frag
  },
  depth: {
    uniforms: dt([ie.common, ie.displacementmap]),
    vertexShader: be.depth_vert,
    fragmentShader: be.depth_frag
  },
  normal: {
    uniforms: dt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: be.meshnormal_vert,
    fragmentShader: be.meshnormal_frag
  },
  sprite: {
    uniforms: dt([ie.sprite, ie.fog]),
    vertexShader: be.sprite_vert,
    fragmentShader: be.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new pt
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: be.background_vert,
    fragmentShader: be.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: be.backgroundCube_vert,
    fragmentShader: be.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: be.cube_vert,
    fragmentShader: be.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: be.equirect_vert,
    fragmentShader: be.equirect_frag
  },
  distanceRGBA: {
    uniforms: dt([ie.common, ie.displacementmap, {
      referencePosition: {
        value: new D
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1e3
      }
    }]),
    vertexShader: be.distanceRGBA_vert,
    fragmentShader: be.distanceRGBA_frag
  },
  shadow: {
    uniforms: dt([ie.lights, ie.fog, {
      color: {
        value: new Ue(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: be.shadow_vert,
    fragmentShader: be.shadow_frag
  }
};
Bt.physical = {
  uniforms: dt([Bt.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatNormalScale: {
      value: new we(1,1)
    },
    clearcoatNormalMap: {
      value: null
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new Ue(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionSamplerSize: {
      value: new we
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new Ue(0)
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularColor: {
      value: new Ue(1,1,1)
    },
    specularColorMap: {
      value: null
    }
  }]),
  vertexShader: be.meshphysical_vert,
  fragmentShader: be.meshphysical_frag
};
const Hi = {
  r: 0,
  b: 0,
  g: 0
};
function Ed(r, e, t, n, i, s, o) {
  const a = new Ue(0);
  let c = s === !0 ? 0 : 1, l, u, d = null, p = 0, m = null;
  function g(f, v) {
    let w = !1
      , x = v.isScene === !0 ? v.background : null;
    x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x));
    const S = r.xr
      , y = S.getSession && S.getSession();
    y && y.environmentBlendMode === "additive" && (x = null),
      x === null ? h(a, c) : x && x.isColor && (h(x, 1),
        w = !0),
    (r.autoClear || w) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      x && (x.isCubeTexture || x.mapping === tr) ? (u === void 0 && (u = new Dt(new Si(1,1,1),new Tn({
        name: "BackgroundCubeMaterial",
        uniforms: Jn(Bt.backgroundCube.uniforms),
        vertexShader: Bt.backgroundCube.vertexShader,
        fragmentShader: Bt.backgroundCube.fragmentShader,
        side: Mt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })),
        u.geometry.deleteAttribute("normal"),
        u.geometry.deleteAttribute("uv"),
        u.onBeforeRender = function(b, L, _) {
          this.matrixWorld.copyPosition(_.matrixWorld)
        }
        ,
        Object.defineProperty(u.material, "envMap", {
          get: function() {
            return this.uniforms.envMap.value
          }
        }),
        i.update(u)),
        u.material.uniforms.envMap.value = x,
        u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1,
        u.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness,
        u.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        u.material.toneMapped = x.encoding !== ke,
      (d !== x || p !== x.version || m !== r.toneMapping) && (u.material.needsUpdate = !0,
        d = x,
        p = x.version,
        m = r.toneMapping),
        u.layers.enableAll(),
        f.unshift(u, u.geometry, u.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new Dt(new ps(2,2),new Tn({
        name: "BackgroundMaterial",
        uniforms: Jn(Bt.background.uniforms),
        vertexShader: Bt.background.vertexShader,
        fragmentShader: Bt.background.fragmentShader,
        side: ln,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })),
        l.geometry.deleteAttribute("normal"),
        Object.defineProperty(l.material, "map", {
          get: function() {
            return this.uniforms.t2D.value
          }
        }),
        i.update(l)),
        l.material.uniforms.t2D.value = x,
        l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        l.material.toneMapped = x.encoding !== ke,
      x.matrixAutoUpdate === !0 && x.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(x.matrix),
      (d !== x || p !== x.version || m !== r.toneMapping) && (l.material.needsUpdate = !0,
        d = x,
        p = x.version,
        m = r.toneMapping),
        l.layers.enableAll(),
        f.unshift(l, l.geometry, l.material, 0, 0, null))
  }
  function h(f, v) {
    f.getRGB(Hi, Do(r)),
      n.buffers.color.setClear(Hi.r, Hi.g, Hi.b, v, o)
  }
  return {
    getClearColor: function() {
      return a
    },
    setClearColor: function(f, v=1) {
      a.set(f),
        c = v,
        h(a, c)
    },
    getClearAlpha: function() {
      return c
    },
    setClearAlpha: function(f) {
      c = f,
        h(a, c)
    },
    render: g
  }
}
function Td(r, e, t, n) {
  const i = r.getParameter(34921)
    , s = n.isWebGL2 ? null : e.get("OES_vertex_array_object")
    , o = n.isWebGL2 || s !== null
    , a = {}
    , c = f(null);
  let l = c
    , u = !1;
  function d(F, W, J, ee, j) {
    let Y = !1;
    if (o) {
      const Q = h(ee, J, W);
      l !== Q && (l = Q,
        m(l.object)),
        Y = v(F, ee, J, j),
      Y && w(F, ee, J, j)
    } else {
      const Q = W.wireframe === !0;
      (l.geometry !== ee.id || l.program !== J.id || l.wireframe !== Q) && (l.geometry = ee.id,
        l.program = J.id,
        l.wireframe = Q,
        Y = !0)
    }
    j !== null && t.update(j, 34963),
    (Y || u) && (u = !1,
      _(F, W, J, ee),
    j !== null && r.bindBuffer(34963, t.get(j).buffer))
  }
  function p() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES()
  }
  function m(F) {
    return n.isWebGL2 ? r.bindVertexArray(F) : s.bindVertexArrayOES(F)
  }
  function g(F) {
    return n.isWebGL2 ? r.deleteVertexArray(F) : s.deleteVertexArrayOES(F)
  }
  function h(F, W, J) {
    const ee = J.wireframe === !0;
    let j = a[F.id];
    j === void 0 && (j = {},
      a[F.id] = j);
    let Y = j[W.id];
    Y === void 0 && (Y = {},
      j[W.id] = Y);
    let Q = Y[ee];
    return Q === void 0 && (Q = f(p()),
      Y[ee] = Q),
      Q
  }
  function f(F) {
    const W = []
      , J = []
      , ee = [];
    for (let j = 0; j < i; j++)
      W[j] = 0,
        J[j] = 0,
        ee[j] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: W,
      enabledAttributes: J,
      attributeDivisors: ee,
      object: F,
      attributes: {},
      index: null
    }
  }
  function v(F, W, J, ee) {
    const j = l.attributes
      , Y = W.attributes;
    let Q = 0;
    const pe = J.getAttributes();
    for (const B in pe)
      if (pe[B].location >= 0) {
        const re = j[B];
        let O = Y[B];
        if (O === void 0 && (B === "instanceMatrix" && F.instanceMatrix && (O = F.instanceMatrix),
        B === "instanceColor" && F.instanceColor && (O = F.instanceColor)),
        re === void 0 || re.attribute !== O || O && re.data !== O.data)
          return !0;
        Q++
      }
    return l.attributesNum !== Q || l.index !== ee
  }
  function w(F, W, J, ee) {
    const j = {}
      , Y = W.attributes;
    let Q = 0;
    const pe = J.getAttributes();
    for (const B in pe)
      if (pe[B].location >= 0) {
        let re = Y[B];
        re === void 0 && (B === "instanceMatrix" && F.instanceMatrix && (re = F.instanceMatrix),
        B === "instanceColor" && F.instanceColor && (re = F.instanceColor));
        const O = {};
        O.attribute = re,
        re && re.data && (O.data = re.data),
          j[B] = O,
          Q++
      }
    l.attributes = j,
      l.attributesNum = Q,
      l.index = ee
  }
  function x() {
    const F = l.newAttributes;
    for (let W = 0, J = F.length; W < J; W++)
      F[W] = 0
  }
  function S(F) {
    y(F, 0)
  }
  function y(F, W) {
    const J = l.newAttributes
      , ee = l.enabledAttributes
      , j = l.attributeDivisors;
    J[F] = 1,
    ee[F] === 0 && (r.enableVertexAttribArray(F),
      ee[F] = 1),
    j[F] !== W && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](F, W),
      j[F] = W)
  }
  function b() {
    const F = l.newAttributes
      , W = l.enabledAttributes;
    for (let J = 0, ee = W.length; J < ee; J++)
      W[J] !== F[J] && (r.disableVertexAttribArray(J),
        W[J] = 0)
  }
  function L(F, W, J, ee, j, Y) {
    n.isWebGL2 === !0 && (J === 5124 || J === 5125) ? r.vertexAttribIPointer(F, W, J, j, Y) : r.vertexAttribPointer(F, W, J, ee, j, Y)
  }
  function _(F, W, J, ee) {
    if (n.isWebGL2 === !1 && (F.isInstancedMesh || ee.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const j = ee.attributes
      , Y = J.getAttributes()
      , Q = W.defaultAttributeValues;
    for (const pe in Y) {
      const B = Y[pe];
      if (B.location >= 0) {
        let$ = j[pe];
        if ($ === void 0 && (pe === "instanceMatrix" && F.instanceMatrix && ($ = F.instanceMatrix),
        pe === "instanceColor" && F.instanceColor && ($ = F.instanceColor)),
        $ !== void 0) {
          const re = $.normalized
            , O = $.itemSize
            , ce = t.get($);
          if (ce === void 0)
            continue;
          const ue = ce.buffer
            , de = ce.type
            , he = ce.bytesPerElement;
          if ($.isInterleavedBufferAttribute) {
            const ye = $.data
              , Se = ye.stride
              , Ee = $.offset;
            if (ye.isInstancedInterleavedBuffer) {
              for (let De = 0; De < B.locationSize; De++)
                y(B.location + De, ye.meshPerAttribute);
              F.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = ye.meshPerAttribute * ye.count)
            } else
              for (let De = 0; De < B.locationSize; De++)
                S(B.location + De);
            r.bindBuffer(34962, ue);
            for (let De = 0; De < B.locationSize; De++)
              L(B.location + De, O / B.locationSize, de, re, Se * he, (Ee + O / B.locationSize * De) * he)
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let ye = 0; ye < B.locationSize; ye++)
                y(B.location + ye, $.meshPerAttribute);
              F.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = $.meshPerAttribute * $.count)
            } else
              for (let ye = 0; ye < B.locationSize; ye++)
                S(B.location + ye);
            r.bindBuffer(34962, ue);
            for (let ye = 0; ye < B.locationSize; ye++)
              L(B.location + ye, O / B.locationSize, de, re, O * he, O / B.locationSize * ye * he)
          }
        } else if (Q !== void 0) {
          const re = Q[pe];
          if (re !== void 0)
            switch (re.length) {
              case 2:
                r.vertexAttrib2fv(B.location, re);
                break;
              case 3:
                r.vertexAttrib3fv(B.location, re);
                break;
              case 4:
                r.vertexAttrib4fv(B.location, re);
                break;
              default:
                r.vertexAttrib1fv(B.location, re)
            }
        }
      }
    }
    b()
  }
  function A() {
    K();
    for (const F in a) {
      const W = a[F];
      for (const J in W) {
        const ee = W[J];
        for (const j in ee)
          g(ee[j].object),
            delete ee[j];
        delete W[J]
      }
      delete a[F]
    }
  }
  function P(F) {
    if (a[F.id] === void 0)
      return;
    const W = a[F.id];
    for (const J in W) {
      const ee = W[J];
      for (const j in ee)
        g(ee[j].object),
          delete ee[j];
      delete W[J]
    }
    delete a[F.id]
  }
  function G(F) {
    for (const W in a) {
      const J = a[W];
      if (J[F.id] === void 0)
        continue;
      const ee = J[F.id];
      for (const j in ee)
        g(ee[j].object),
          delete ee[j];
      delete J[F.id]
    }
  }
  function K() {
    z(),
      u = !0,
    l !== c && (l = c,
      m(l.object))
  }
  function z() {
    c.geometry = null,
      c.program = null,
      c.wireframe = !1
  }
  return {
    setup: d,
    reset: K,
    resetDefaultState: z,
    dispose: A,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: G,
    initAttributes: x,
    enableAttribute: S,
    disableUnusedAttributes: b
  }
}
function Ad(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l
  }
  function a(l, u) {
    r.drawArrays(s, l, u),
      t.update(u, s, 1)
  }
  function c(l, u, d) {
    if (d === 0)
      return;
    let p, m;
    if (i)
      p = r,
        m = "drawArraysInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"),
      m = "drawArraysInstancedANGLE",
    p === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return
    }
    p[m](s, l, u, d),
      t.update(u, s, d)
  }
  this.setMode = o,
    this.render = a,
    this.renderInstances = c
}
function Cd(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const L = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
    } else
      n = 0;
    return n
  }
  function s(L) {
    if (L === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      L = "mediump"
    }
    return L === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
  }
  const o = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."),
    a = c);
  const l = o || e.has("WEBGL_draw_buffers")
    , u = t.logarithmicDepthBuffer === !0
    , d = r.getParameter(34930)
    , p = r.getParameter(35660)
    , m = r.getParameter(3379)
    , g = r.getParameter(34076)
    , h = r.getParameter(34921)
    , f = r.getParameter(36347)
    , v = r.getParameter(36348)
    , w = r.getParameter(36349)
    , x = p > 0
    , S = o || e.has("OES_texture_float")
    , y = x && S
    , b = o ? r.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: p,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: h,
    maxVertexUniforms: f,
    maxVaryings: v,
    maxFragmentUniforms: w,
    vertexTextures: x,
    floatFragmentTextures: S,
    floatVertexTextures: y,
    maxSamples: b
  }
}
function Ld(r) {
  const e = this;
  let t = null
    , n = 0
    , i = !1
    , s = !1;
  const o = new gn
    , a = new pt
    , c = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = c,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(d, p) {
      const m = d.length !== 0 || p || n !== 0 || i;
      return i = p,
        n = d.length,
        m
    }
    ,
    this.beginShadows = function() {
      s = !0,
        u(null)
    }
    ,
    this.endShadows = function() {
      s = !1
    }
    ,
    this.setGlobalState = function(d, p) {
      t = u(d, p, 0)
    }
    ,
    this.setState = function(d, p, m) {
      const g = d.clippingPlanes
        , h = d.clipIntersection
        , f = d.clipShadows
        , v = r.get(d);
      if (!i || g === null || g.length === 0 || s && !f)
        s ? u(null) : l();
      else {
        const w = s ? 0 : n
          , x = w * 4;
        let S = v.clippingState || null;
        c.value = S,
          S = u(g, p, x, m);
        for (let y = 0; y !== x; ++y)
          S[y] = t[y];
        v.clippingState = S,
          this.numIntersection = h ? this.numPlanes : 0,
          this.numPlanes += w
      }
    }
  ;
  function l() {
    c.value !== t && (c.value = t,
      c.needsUpdate = n > 0),
      e.numPlanes = n,
      e.numIntersection = 0
  }
  function u(d, p, m, g) {
    const h = d !== null ? d.length : 0;
    let f = null;
    if (h !== 0) {
      if (f = c.value,
      g !== !0 || f === null) {
        const v = m + h * 4
          , w = p.matrixWorldInverse;
        a.getNormalMatrix(w),
        (f === null || f.length < v) && (f = new Float32Array(v));
        for (let x = 0, S = m; x !== h; ++x,
          S += 4)
          o.copy(d[x]).applyMatrix4(w, a),
            o.normal.toArray(f, S),
            f[S + 3] = o.constant
      }
      c.value = f,
        c.needsUpdate = !0
    }
    return e.numPlanes = h,
      e.numIntersection = 0,
      f
  }
}
function Rd(r) {
  let e = new WeakMap;
  function t(o, a) {
    return a === Qr ? o.mapping = $n : a === es && (o.mapping = Zn),
      o
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Qr || a === es)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping)
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Hc(c.height / 2);
            return l.fromEquirectangularTexture(r, o),
              e.set(o, l),
              o.addEventListener("dispose", i),
              t(l.texture, o.mapping)
          } else
            return null
        }
    }
    return o
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a),
      c.dispose())
  }
  function s() {
    e = new WeakMap
  }
  return {
    get: n,
    dispose: s
  }
}
class ms extends Io {
  constructor(e=-1, t=1, n=1, i=-1, s=.1, o=2e3) {
    super(),
      this.isOrthographicCamera = !0,
      this.type = "OrthographicCamera",
      this.zoom = 1,
      this.view = null,
      this.left = e,
      this.right = t,
      this.top = n,
      this.bottom = i,
      this.near = s,
      this.far = o,
      this.updateProjectionMatrix()
  }
  copy(e, t) {
    return super.copy(e, t),
      this.left = e.left,
      this.right = e.right,
      this.top = e.top,
      this.bottom = e.bottom,
      this.near = e.near,
      this.far = e.far,
      this.zoom = e.zoom,
      this.view = e.view === null ? null : Object.assign({}, e.view),
      this
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }),
      this.view.enabled = !0,
      this.view.fullWidth = e,
      this.view.fullHeight = t,
      this.view.offsetX = n,
      this.view.offsetY = i,
      this.view.width = s,
      this.view.height = o,
      this.updateProjectionMatrix()
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix()
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom)
      , t = (this.top - this.bottom) / (2 * this.zoom)
      , n = (this.right + this.left) / 2
      , i = (this.top + this.bottom) / 2;
    let s = n - e
      , o = n + e
      , a = i + t
      , c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom
        , u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX,
        o = s + l * this.view.width,
        a -= u * this.view.offsetY,
        c = a - u * this.view.height
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom,
      t.object.left = this.left,
      t.object.right = this.right,
      t.object.top = this.top,
      t.object.bottom = this.bottom,
      t.object.near = this.near,
      t.object.far = this.far,
    this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
  }
}
const qn = 4
  , ya = [.125, .215, .35, .446, .526, .582]
  , xn = 20
  , Gr = new ms
  , Ma = new Ue;
let Vr = null;
const _n = (1 + Math.sqrt(5)) / 2
  , Vn = 1 / _n
  , Sa = [new D(1,1,1), new D(-1,1,1), new D(1,1,-1), new D(-1,1,-1), new D(0,_n,Vn), new D(0,_n,-Vn), new D(Vn,0,_n), new D(-Vn,0,_n), new D(_n,Vn,0), new D(-_n,Vn,0)];
class ba {
  constructor(e) {
    this._renderer = e,
      this._pingPongRenderTarget = null,
      this._lodMax = 0,
      this._cubeSize = 0,
      this._lodPlanes = [],
      this._sizeLods = [],
      this._sigmas = [],
      this._blurMaterial = null,
      this._cubemapMaterial = null,
      this._equirectMaterial = null,
      this._compileMaterial(this._blurMaterial)
  }
  fromScene(e, t=0, n=.1, i=100) {
    Vr = this._renderer.getRenderTarget(),
      this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0,
      this._sceneToCubeUV(e, n, i, s),
    t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
  }
  fromEquirectangular(e, t=null) {
    return this._fromTexture(e, t)
  }
  fromCubemap(e, t=null) {
    return this._fromTexture(e, t)
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ta(),
      this._compileMaterial(this._cubemapMaterial))
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ea(),
      this._compileMaterial(this._equirectMaterial))
  }
  dispose() {
    this._dispose(),
    this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
    this._equirectMaterial !== null && this._equirectMaterial.dispose()
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)),
      this._cubeSize = Math.pow(2, this._lodMax)
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
    this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose()
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Vr),
      e.scissorTest = !1,
      Wi(e, 0, 0, e.width, e.height)
  }
  _fromTexture(e, t) {
    e.mapping === $n || e.mapping === Zn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
      Vr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112)
      , t = 4 * this._cubeSize
      , n = {
      magFilter: Et,
      minFilter: Et,
      generateMipmaps: !1,
      type: gi,
      format: Pt,
      encoding: bn,
      depthBuffer: !1
    }
      , i = wa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(),
        this._pingPongRenderTarget = wa(e, t, n);
      const {_lodMax: s} = this;
      ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = Pd(s)),
        this._blurMaterial = Dd(s, e, t)
    }
    return i
  }
  _compileMaterial(e) {
    const t = new Dt(this._lodPlanes[0],e);
    this._renderer.compile(t, Gr)
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Lt(90,1,t,n)
      , c = [1, -1, 1, 1, 1, 1]
      , l = [1, 1, 1, -1, -1, -1]
      , u = this._renderer
      , d = u.autoClear
      , p = u.toneMapping;
    u.getClearColor(Ma),
      u.toneMapping = Zt,
      u.autoClear = !1;
    const m = new fi({
      name: "PMREM.Background",
      side: Mt,
      depthWrite: !1,
      depthTest: !1
    })
      , g = new Dt(new Si,m);
    let h = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f),
      e.background = null,
      h = !0) : (m.color.copy(Ma),
      h = !0);
    for (let v = 0; v < 6; v++) {
      const w = v % 3;
      w === 0 ? (a.up.set(0, c[v], 0),
        a.lookAt(l[v], 0, 0)) : w === 1 ? (a.up.set(0, 0, c[v]),
        a.lookAt(0, l[v], 0)) : (a.up.set(0, c[v], 0),
        a.lookAt(0, 0, l[v]));
      const x = this._cubeSize;
      Wi(i, w * x, v > 2 ? x : 0, x, x),
        u.setRenderTarget(i),
      h && u.render(g, a),
        u.render(e, a)
    }
    g.geometry.dispose(),
      g.material.dispose(),
      u.toneMapping = p,
      u.autoClear = d,
      e.background = f
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer
      , i = e.mapping === $n || e.mapping === Zn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ta()),
      this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ea());
    const s = i ? this._cubemapMaterial : this._equirectMaterial
      , o = new Dt(this._lodPlanes[0],s)
      , a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Wi(t, 0, 0, 3 * c, 2 * c),
      n.setRenderTarget(t),
      n.render(o, Gr)
  }
  _applyPMREM(e) {
    const t = this._renderer
      , n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1])
        , o = Sa[(i - 1) % Sa.length];
      this._blur(e, i - 1, i, s, o)
    }
    t.autoClear = n
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", s),
      this._halfBlur(o, e, n, n, i, "longitudinal", s)
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const c = this._renderer
      , l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3
      , d = new Dt(this._lodPlanes[i],l)
      , p = l.uniforms
      , m = this._sizeLods[n] - 1
      , g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * xn - 1)
      , h = s / g
      , f = isFinite(s) ? 1 + Math.floor(u * h) : xn;
    f > xn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xn}`);
    const v = [];
    let w = 0;
    for (let L = 0; L < xn; ++L) {
      const _ = L / h
        , A = Math.exp(-_ * _ / 2);
      v.push(A),
        L === 0 ? w += A : L < f && (w += 2 * A)
    }
    for (let L = 0; L < v.length; L++)
      v[L] = v[L] / w;
    p.envMap.value = e.texture,
      p.samples.value = f,
      p.weights.value = v,
      p.latitudinal.value = o === "latitudinal",
    a && (p.poleAxis.value = a);
    const {_lodMax: x} = this;
    p.dTheta.value = g,
      p.mipInt.value = x - n;
    const S = this._sizeLods[i]
      , y = 3 * S * (i > x - qn ? i - x + qn : 0)
      , b = 4 * (this._cubeSize - S);
    Wi(t, y, b, 3 * S, 2 * S),
      c.setRenderTarget(t),
      c.render(d, Gr)
  }
}
function Pd(r) {
  const e = []
    , t = []
    , n = [];
  let i = r;
  const s = r - qn + 1 + ya.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > r - qn ? c = ya[o - r + qn - 1] : o === 0 && (c = 0),
      n.push(c);
    const l = 1 / (a - 2)
      , u = -l
      , d = 1 + l
      , p = [u, u, d, u, d, d, u, u, d, d, u, d]
      , m = 6
      , g = 6
      , h = 3
      , f = 2
      , v = 1
      , w = new Float32Array(h * g * m)
      , x = new Float32Array(f * g * m)
      , S = new Float32Array(v * g * m);
    for (let b = 0; b < m; b++) {
      const L = b % 3 * 2 / 3 - 1
        , _ = b > 2 ? 0 : -1
        , A = [L, _, 0, L + 2 / 3, _, 0, L + 2 / 3, _ + 1, 0, L, _, 0, L + 2 / 3, _ + 1, 0, L, _ + 1, 0];
      w.set(A, h * g * b),
        x.set(p, f * g * b);
      const P = [b, b, b, b, b, b];
      S.set(P, v * g * b)
    }
    const y = new Vt;
    y.setAttribute("position", new Gt(w,h)),
      y.setAttribute("uv", new Gt(x,f)),
      y.setAttribute("faceIndex", new Gt(S,v)),
      e.push(y),
    i > qn && i--
  }
  return {
    lodPlanes: e,
    sizeLods: t,
    sigmas: n
  }
}
function wa(r, e, t) {
  const n = new En(r,e,t);
  return n.texture.mapping = tr,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function Wi(r, e, t, n, i) {
  r.viewport.set(e, t, n, i),
    r.scissor.set(e, t, n, i)
}
function Dd(r, e, t) {
  const n = new Float32Array(xn)
    , i = new D(0,1,0);
  return new Tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: xn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      samples: {
        value: 1
      },
      weights: {
        value: n
      },
      latitudinal: {
        value: !1
      },
      dTheta: {
        value: 0
      },
      mipInt: {
        value: 0
      },
      poleAxis: {
        value: i
      }
    },
    vertexShader: gs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: on,
    depthTest: !1,
    depthWrite: !1
  })
}
function Ea() {
  return new Tn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null
      }
    },
    vertexShader: gs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: on,
    depthTest: !1,
    depthWrite: !1
  })
}
function Ta() {
  return new Tn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      }
    },
    vertexShader: gs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: on,
    depthTest: !1,
    depthWrite: !1
  })
}
function gs() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Id(r) {
  let e = new WeakMap
    , t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping
        , l = c === Qr || c === es
        , u = c === $n || c === Zn;
      if (l || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new ba(r)),
            d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d),
            e.set(a, d),
            d.texture
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (l && d && d.height > 0 || u && d && i(d)) {
              t === null && (t = new ba(r));
              const p = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, p),
                a.addEventListener("dispose", s),
                p.texture
            } else
              return null
          }
        }
    }
    return a
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      a[u] !== void 0 && c++;
    return c === l
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c),
      l.dispose())
  }
  function o() {
    e = new WeakMap,
    t !== null && (t.dispose(),
      t = null)
  }
  return {
    get: n,
    dispose: o
  }
}
function Nd(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n)
    }
    return e[n] = i,
      i
  }
  return {
    has: function(n) {
      return t(n) !== null
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"),
        t("OES_texture_float"),
        t("OES_texture_half_float"),
        t("OES_texture_half_float_linear"),
        t("OES_standard_derivatives"),
        t("OES_element_index_uint"),
        t("OES_vertex_array_object"),
        t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture")
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
        i
    }
  }
}
function Fd(r, e, t, n) {
  const i = {}
    , s = new WeakMap;
  function o(d) {
    const p = d.target;
    p.index !== null && e.remove(p.index);
    for (const g in p.attributes)
      e.remove(p.attributes[g]);
    p.removeEventListener("dispose", o),
      delete i[p.id];
    const m = s.get(p);
    m && (e.remove(m),
      s.delete(p)),
      n.releaseStatesOfGeometry(p),
    p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount,
      t.memory.geometries--
  }
  function a(d, p) {
    return i[p.id] === !0 || (p.addEventListener("dispose", o),
      i[p.id] = !0,
      t.memory.geometries++),
      p
  }
  function c(d) {
    const p = d.attributes;
    for (const g in p)
      e.update(p[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const h = m[g];
      for (let f = 0, v = h.length; f < v; f++)
        e.update(h[f], 34962)
    }
  }
  function l(d) {
    const p = []
      , m = d.index
      , g = d.attributes.position;
    let h = 0;
    if (m !== null) {
      const w = m.array;
      h = m.version;
      for (let x = 0, S = w.length; x < S; x += 3) {
        const y = w[x + 0]
          , b = w[x + 1]
          , L = w[x + 2];
        p.push(y, b, b, L, L, y)
      }
    } else {
      const w = g.array;
      h = g.version;
      for (let x = 0, S = w.length / 3 - 1; x < S; x += 3) {
        const y = x + 0
          , b = x + 1
          , L = x + 2;
        p.push(y, b, b, L, L, y)
      }
    }
    const f = new (bo(p) ? Po : Ro)(p,1);
    f.version = h;
    const v = s.get(d);
    v && e.remove(v),
      s.set(d, f)
  }
  function u(d) {
    const p = s.get(d);
    if (p) {
      const m = d.index;
      m !== null && p.version < m.version && l(d)
    } else
      l(d);
    return s.get(d)
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: u
  }
}
function Od(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(p) {
    s = p
  }
  let a, c;
  function l(p) {
    a = p.type,
      c = p.bytesPerElement
  }
  function u(p, m) {
    r.drawElements(s, m, a, p * c),
      t.update(m, s, 1)
  }
  function d(p, m, g) {
    if (g === 0)
      return;
    let h, f;
    if (i)
      h = r,
        f = "drawElementsInstanced";
    else if (h = e.get("ANGLE_instanced_arrays"),
      f = "drawElementsInstancedANGLE",
    h === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return
    }
    h[f](s, m, a, p * c, g),
      t.update(m, s, g)
  }
  this.setMode = o,
    this.setIndex = l,
    this.render = u,
    this.renderInstances = d
}
function Ud(r) {
  const e = {
    geometries: 0,
    textures: 0
  }
    , t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++,
      o) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break
    }
  }
  function i() {
    t.frame++,
      t.calls = 0,
      t.triangles = 0,
      t.points = 0,
      t.lines = 0
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  }
}
function zd(r, e) {
  return r[0] - e[0]
}
function Bd(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1])
}
function kd(r, e, t) {
  const n = {}
    , i = new Float32Array(8)
    , s = new WeakMap
    , o = new nt
    , a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, u, d) {
    const p = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color
        , g = m !== void 0 ? m.length : 0;
      let h = s.get(u);
      if (h === void 0 || h.count !== g) {
        let F = function() {
          K.dispose(),
            s.delete(u),
            u.removeEventListener("dispose", F)
        };
        h !== void 0 && h.texture.dispose();
        const w = u.morphAttributes.position !== void 0
          , x = u.morphAttributes.normal !== void 0
          , S = u.morphAttributes.color !== void 0
          , y = u.morphAttributes.position || []
          , b = u.morphAttributes.normal || []
          , L = u.morphAttributes.color || [];
        let _ = 0;
        w === !0 && (_ = 1),
        x === !0 && (_ = 2),
        S === !0 && (_ = 3);
        let A = u.attributes.position.count * _
          , P = 1;
        A > e.maxTextureSize && (P = Math.ceil(A / e.maxTextureSize),
          A = e.maxTextureSize);
        const G = new Float32Array(A * P * 4 * g)
          , K = new To(G,A,P,g);
        K.type = yn,
          K.needsUpdate = !0;
        const z = _ * 4;
        for (let W = 0; W < g; W++) {
          const J = y[W]
            , ee = b[W]
            , j = L[W]
            , Y = A * P * 4 * W;
          for (let Q = 0; Q < J.count; Q++) {
            const pe = Q * z;
            w === !0 && (o.fromBufferAttribute(J, Q),
              G[Y + pe + 0] = o.x,
              G[Y + pe + 1] = o.y,
              G[Y + pe + 2] = o.z,
              G[Y + pe + 3] = 0),
            x === !0 && (o.fromBufferAttribute(ee, Q),
              G[Y + pe + 4] = o.x,
              G[Y + pe + 5] = o.y,
              G[Y + pe + 6] = o.z,
              G[Y + pe + 7] = 0),
            S === !0 && (o.fromBufferAttribute(j, Q),
              G[Y + pe + 8] = o.x,
              G[Y + pe + 9] = o.y,
              G[Y + pe + 10] = o.z,
              G[Y + pe + 11] = j.itemSize === 4 ? o.w : 1)
          }
        }
        h = {
          count: g,
          texture: K,
          size: new we(A,P)
        },
          s.set(u, h),
          u.addEventListener("dispose", F)
      }
      let f = 0;
      for (let w = 0; w < p.length; w++)
        f += p[w];
      const v = u.morphTargetsRelative ? 1 : 1 - f;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", v),
        d.getUniforms().setValue(r, "morphTargetInfluences", p),
        d.getUniforms().setValue(r, "morphTargetsTexture", h.texture, t),
        d.getUniforms().setValue(r, "morphTargetsTextureSize", h.size)
    } else {
      const m = p === void 0 ? 0 : p.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let x = 0; x < m; x++)
          g[x] = [x, 0];
        n[u.id] = g
      }
      for (let x = 0; x < m; x++) {
        const S = g[x];
        S[0] = x,
          S[1] = p[x]
      }
      g.sort(Bd);
      for (let x = 0; x < 8; x++)
        x < m && g[x][1] ? (a[x][0] = g[x][0],
          a[x][1] = g[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER,
          a[x][1] = 0);
      a.sort(zd);
      const h = u.morphAttributes.position
        , f = u.morphAttributes.normal;
      let v = 0;
      for (let x = 0; x < 8; x++) {
        const S = a[x]
          , y = S[0]
          , b = S[1];
        y !== Number.MAX_SAFE_INTEGER && b ? (h && u.getAttribute("morphTarget" + x) !== h[y] && u.setAttribute("morphTarget" + x, h[y]),
        f && u.getAttribute("morphNormal" + x) !== f[y] && u.setAttribute("morphNormal" + x, f[y]),
          i[x] = b,
          v += b) : (h && u.hasAttribute("morphTarget" + x) === !0 && u.deleteAttribute("morphTarget" + x),
        f && u.hasAttribute("morphNormal" + x) === !0 && u.deleteAttribute("morphNormal" + x),
          i[x] = 0)
      }
      const w = u.morphTargetsRelative ? 1 : 1 - v;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", w),
        d.getUniforms().setValue(r, "morphTargetInfluences", i)
    }
  }
  return {
    update: c
  }
}
function Gd(r, e, t, n) {
  let i = new WeakMap;
  function s(c) {
    const l = n.render.frame
      , u = c.geometry
      , d = e.get(c, u);
    return i.get(d) !== l && (e.update(d),
      i.set(d, l)),
    c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a),
      t.update(c.instanceMatrix, 34962),
    c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      d
  }
  function o() {
    i = new WeakMap
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a),
      t.remove(l.instanceMatrix),
    l.instanceColor !== null && t.remove(l.instanceColor)
  }
  return {
    update: s,
    dispose: o
  }
}
const Oo = new St
  , Uo = new To
  , zo = new Ac
  , Bo = new No
  , Aa = []
  , Ca = []
  , La = new Float32Array(16)
  , Ra = new Float32Array(9)
  , Pa = new Float32Array(4);
function ei(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = Aa[i];
  if (s === void 0 && (s = new Float32Array(i),
    Aa[i] = s),
  e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t,
        r[o].toArray(s, a)
  }
  return s
}
function je(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0
}
function Ye(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t]
}
function rr(r, e) {
  let t = Ca[e];
  t === void 0 && (t = new Int32Array(e),
    Ca[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t
}
function Vd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e),
    t[0] = e)
}
function Hd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y),
      t[0] = e.x,
      t[1] = e.y);
  else {
    if (je(t, e))
      return;
    r.uniform2fv(this.addr, e),
      Ye(t, e)
  }
}
function Wd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b),
      t[0] = e.r,
      t[1] = e.g,
      t[2] = e.b);
  else {
    if (je(t, e))
      return;
    r.uniform3fv(this.addr, e),
      Ye(t, e)
  }
}
function qd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z,
      t[3] = e.w);
  else {
    if (je(t, e))
      return;
    r.uniform4fv(this.addr, e),
      Ye(t, e)
  }
}
function Xd(r, e) {
  const t = this.cache
    , n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e),
      Ye(t, e)
  } else {
    if (je(t, n))
      return;
    Pa.set(n),
      r.uniformMatrix2fv(this.addr, !1, Pa),
      Ye(t, n)
  }
}
function jd(r, e) {
  const t = this.cache
    , n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e),
      Ye(t, e)
  } else {
    if (je(t, n))
      return;
    Ra.set(n),
      r.uniformMatrix3fv(this.addr, !1, Ra),
      Ye(t, n)
  }
}
function Yd(r, e) {
  const t = this.cache
    , n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e),
      Ye(t, e)
  } else {
    if (je(t, n))
      return;
    La.set(n),
      r.uniformMatrix4fv(this.addr, !1, La),
      Ye(t, n)
  }
}
function $d(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e),
    t[0] = e)
}
function Zd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y),
      t[0] = e.x,
      t[1] = e.y);
  else {
    if (je(t, e))
      return;
    r.uniform2iv(this.addr, e),
      Ye(t, e)
  }
}
function Kd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z);
  else {
    if (je(t, e))
      return;
    r.uniform3iv(this.addr, e),
      Ye(t, e)
  }
}
function Jd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z,
      t[3] = e.w);
  else {
    if (je(t, e))
      return;
    r.uniform4iv(this.addr, e),
      Ye(t, e)
  }
}
function Qd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e),
    t[0] = e)
}
function ef(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y),
      t[0] = e.x,
      t[1] = e.y);
  else {
    if (je(t, e))
      return;
    r.uniform2uiv(this.addr, e),
      Ye(t, e)
  }
}
function tf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z);
  else {
    if (je(t, e))
      return;
    r.uniform3uiv(this.addr, e),
      Ye(t, e)
  }
}
function nf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      t[0] = e.x,
      t[1] = e.y,
      t[2] = e.z,
      t[3] = e.w);
  else {
    if (je(t, e))
      return;
    r.uniform4uiv(this.addr, e),
      Ye(t, e)
  }
}
function rf(r, e, t) {
  const n = this.cache
    , i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTexture2D(e || Oo, i)
}
function sf(r, e, t) {
  const n = this.cache
    , i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTexture3D(e || zo, i)
}
function af(r, e, t) {
  const n = this.cache
    , i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTextureCube(e || Bo, i)
}
function of(r, e, t) {
  const n = this.cache
    , i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTexture2DArray(e || Uo, i)
}
function lf(r) {
  switch (r) {
    case 5126:
      return Vd;
    case 35664:
      return Hd;
    case 35665:
      return Wd;
    case 35666:
      return qd;
    case 35674:
      return Xd;
    case 35675:
      return jd;
    case 35676:
      return Yd;
    case 5124:
    case 35670:
      return $d;
    case 35667:
    case 35671:
      return Zd;
    case 35668:
    case 35672:
      return Kd;
    case 35669:
    case 35673:
      return Jd;
    case 5125:
      return Qd;
    case 36294:
      return ef;
    case 36295:
      return tf;
    case 36296:
      return nf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rf;
    case 35679:
    case 36299:
    case 36307:
      return sf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return af;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return of
  }
}
function cf(r, e) {
  r.uniform1fv(this.addr, e)
}
function uf(r, e) {
  const t = ei(e, this.size, 2);
  r.uniform2fv(this.addr, t)
}
function hf(r, e) {
  const t = ei(e, this.size, 3);
  r.uniform3fv(this.addr, t)
}
function df(r, e) {
  const t = ei(e, this.size, 4);
  r.uniform4fv(this.addr, t)
}
function ff(r, e) {
  const t = ei(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t)
}
function pf(r, e) {
  const t = ei(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t)
}
function mf(r, e) {
  const t = ei(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t)
}
function gf(r, e) {
  r.uniform1iv(this.addr, e)
}
function _f(r, e) {
  r.uniform2iv(this.addr, e)
}
function xf(r, e) {
  r.uniform3iv(this.addr, e)
}
function vf(r, e) {
  r.uniform4iv(this.addr, e)
}
function yf(r, e) {
  r.uniform1uiv(this.addr, e)
}
function Mf(r, e) {
  r.uniform2uiv(this.addr, e)
}
function Sf(r, e) {
  r.uniform3uiv(this.addr, e)
}
function bf(r, e) {
  r.uniform4uiv(this.addr, e)
}
function wf(r, e, t) {
  const n = this.cache
    , i = e.length
    , s = rr(t, i);
  je(n, s) || (r.uniform1iv(this.addr, s),
    Ye(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || Oo, s[o])
}
function Ef(r, e, t) {
  const n = this.cache
    , i = e.length
    , s = rr(t, i);
  je(n, s) || (r.uniform1iv(this.addr, s),
    Ye(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || zo, s[o])
}
function Tf(r, e, t) {
  const n = this.cache
    , i = e.length
    , s = rr(t, i);
  je(n, s) || (r.uniform1iv(this.addr, s),
    Ye(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || Bo, s[o])
}
function Af(r, e, t) {
  const n = this.cache
    , i = e.length
    , s = rr(t, i);
  je(n, s) || (r.uniform1iv(this.addr, s),
    Ye(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Uo, s[o])
}
function Cf(r) {
  switch (r) {
    case 5126:
      return cf;
    case 35664:
      return uf;
    case 35665:
      return hf;
    case 35666:
      return df;
    case 35674:
      return ff;
    case 35675:
      return pf;
    case 35676:
      return mf;
    case 5124:
    case 35670:
      return gf;
    case 35667:
    case 35671:
      return _f;
    case 35668:
    case 35672:
      return xf;
    case 35669:
    case 35673:
      return vf;
    case 5125:
      return yf;
    case 36294:
      return Mf;
    case 36295:
      return Sf;
    case 36296:
      return bf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return wf;
    case 35679:
    case 36299:
    case 36307:
      return Ef;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Tf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Af
  }
}
class Lf {
  constructor(e, t, n) {
    this.id = e,
      this.addr = n,
      this.cache = [],
      this.setValue = lf(t.type)
  }
}
class Rf {
  constructor(e, t, n) {
    this.id = e,
      this.addr = n,
      this.cache = [],
      this.size = t.size,
      this.setValue = Cf(t.type)
  }
}
class Pf {
  constructor(e) {
    this.id = e,
      this.seq = [],
      this.map = {}
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n)
    }
  }
}
const Hr = /(\w+)(\])?(\[|\.)?/g;
function Da(r, e) {
  r.seq.push(e),
    r.map[e.id] = e
}
function Df(r, e, t) {
  const n = r.name
    , i = n.length;
  for (Hr.lastIndex = 0; ; ) {
    const s = Hr.exec(n)
      , o = Hr.lastIndex;
    let a = s[1];
    const c = s[2] === "]"
      , l = s[3];
    if (c && (a = a | 0),
    l === void 0 || l === "[" && o + 2 === i) {
      Da(t, l === void 0 ? new Lf(a,r,e) : new Rf(a,r,e));
      break
    } else {
      let d = t.map[a];
      d === void 0 && (d = new Pf(a),
        Da(t, d)),
        t = d
    }
  }
}
class ji {
  constructor(e, t) {
    this.seq = [],
      this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i)
        , o = e.getUniformLocation(t, s.name);
      Df(s, o, this)
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i)
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i)
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s]
        , c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i)
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o)
    }
    return n
  }
}
function Ia(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t),
    r.compileShader(n),
    n
}
let If = 0;
function Nf(r, e) {
  const t = r.split(`
`)
    , n = []
    , i = Math.max(e - 6, 0)
    , s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`)
  }
  return n.join(`
`)
}
function Ff(r) {
  switch (r) {
    case bn:
      return ["Linear", "( value )"];
    case ke:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", r),
        ["Linear", "( value )"]
  }
}
function Na(r, e, t) {
  const n = r.getShaderParameter(e, 35713)
    , i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Nf(r.getShaderSource(e), o)
  } else
    return i
}
function Of(r, e) {
  const t = Ff(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
}
function Uf(r, e) {
  let t;
  switch (e) {
    case Xl:
      t = "Linear";
      break;
    case jl:
      t = "Reinhard";
      break;
    case Yl:
      t = "OptimizedCineon";
      break;
    case $l:
      t = "ACESFilmic";
      break;
    case Zl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        t = "Linear"
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
function zf(r) {
  return [r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(di).join(`
`)
}
function Bf(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n)
  }
  return e.join(`
`)
}
function kf(r, e) {
  const t = {}
    , n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i)
      , o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2),
    s.type === 35675 && (a = 3),
    s.type === 35676 && (a = 4),
      t[o] = {
        type: s.type,
        location: r.getAttribLocation(e, o),
        locationSize: a
      }
  }
  return t
}
function di(r) {
  return r !== ""
}
function Fa(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function Oa(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Gf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function rs(r) {
  return r.replace(Gf, Vf)
}
function Vf(r, e) {
  const t = be[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return rs(t)
}
const Hf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ua(r) {
  return r.replace(Hf, Wf)
}
function Wf(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i
}
function za(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
function qf(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === go ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === wl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === hi && (e = "SHADOWMAP_TYPE_VSM"),
    e
}
function Xf(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case $n:
      case Zn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case tr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break
    }
  return e
}
function jf(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Zn:
        e = "ENVMAP_MODE_REFRACTION";
        break
    }
  return e
}
function Yf(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case vo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Wl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ql:
        e = "ENVMAP_BLENDING_ADD";
        break
    }
  return e
}
function $f(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2
    , n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t
  }
}
function Zf(r, e, t, n) {
  const i = r.getContext()
    , s = t.defines;
  let o = t.vertexShader
    , a = t.fragmentShader;
  const c = qf(t)
    , l = Xf(t)
    , u = jf(t)
    , d = Yf(t)
    , p = $f(t)
    , m = t.isWebGL2 ? "" : zf(t)
    , g = Bf(s)
    , h = i.createProgram();
  let f, v, w = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [g].filter(di).join(`
`),
  f.length > 0 && (f += `
`),
    v = [m, g].filter(di).join(`
`),
  v.length > 0 && (v += `
`)) : (f = [za(t), "#define SHADER_NAME " + t.shaderName, g, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(di).join(`
`),
    v = [m, za(t), "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + d : "", p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "", p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "", p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Zt ? "#define TONE_MAPPING" : "", t.toneMapping !== Zt ? be.tonemapping_pars_fragment : "", t.toneMapping !== Zt ? Uf("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", be.encodings_pars_fragment, Of("linearToOutputTexel", t.outputEncoding), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(di).join(`
`)),
    o = rs(o),
    o = Fa(o, t),
    o = Oa(o, t),
    a = rs(a),
    a = Fa(a, t),
    a = Oa(a, t),
    o = Ua(o),
    a = Ua(a),
  t.isWebGL2 && t.isRawShaderMaterial !== !0 && (w = `#version 300 es
`,
    f = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + f,
    v = ["#define varying in", t.glslVersion === aa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === aa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + v);
  const x = w + f + o
    , S = w + v + a
    , y = Ia(i, 35633, x)
    , b = Ia(i, 35632, S);
  if (i.attachShader(h, y),
    i.attachShader(h, b),
    t.index0AttributeName !== void 0 ? i.bindAttribLocation(h, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(h, 0, "position"),
    i.linkProgram(h),
    r.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(h).trim()
      , P = i.getShaderInfoLog(y).trim()
      , G = i.getShaderInfoLog(b).trim();
    let K = !0
      , z = !0;
    if (i.getProgramParameter(h, 35714) === !1) {
      K = !1;
      const F = Na(i, y, "vertex")
        , W = Na(i, b, "fragment");
      console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, 35715) + `

Program Info Log: ` + A + `
` + F + `
` + W)
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (P === "" || G === "") && (z = !1);
    z && (this.diagnostics = {
      runnable: K,
      programLog: A,
      vertexShader: {
        log: P,
        prefix: f
      },
      fragmentShader: {
        log: G,
        prefix: v
      }
    })
  }
  i.deleteShader(y),
    i.deleteShader(b);
  let L;
  this.getUniforms = function() {
    return L === void 0 && (L = new ji(i,h)),
      L
  }
  ;
  let _;
  return this.getAttributes = function() {
    return _ === void 0 && (_ = kf(i, h)),
      _
  }
    ,
    this.destroy = function() {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(h),
        this.program = void 0
    }
    ,
    this.name = t.shaderName,
    this.id = If++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = h,
    this.vertexShader = y,
    this.fragmentShader = b,
    this
}
let Kf = 0;
class Jf {
  constructor() {
    this.shaderCache = new Map,
      this.materialCache = new Map
  }
  update(e) {
    const t = e.vertexShader
      , n = e.fragmentShader
      , i = this._getShaderStage(t)
      , s = this._getShaderStage(n)
      , o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i),
      i.usedTimes++),
    o.has(s) === !1 && (o.add(s),
      s.usedTimes++),
      this
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--,
      n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e),
      this
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id
  }
  dispose() {
    this.shaderCache.clear(),
      this.materialCache.clear()
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = new Set,
      t.set(e, n)),
      n
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Qf(e),
      t.set(e, n)),
      n
  }
}
class Qf {
  constructor(e) {
    this.id = Kf++,
      this.code = e,
      this.usedTimes = 0
  }
}
function ep(r, e, t, n, i, s, o) {
  const a = new Co
    , c = new Jf
    , l = []
    , u = i.isWebGL2
    , d = i.logarithmicDepthBuffer
    , p = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function h(_, A, P, G, K) {
    const z = G.fog
      , F = K.geometry
      , W = _.isMeshStandardMaterial ? G.environment : null
      , J = (_.isMeshStandardMaterial ? t : e).get(_.envMap || W)
      , ee = J && J.mapping === tr ? J.image.height : null
      , j = g[_.type];
    _.precision !== null && (m = i.getMaxPrecision(_.precision),
    m !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", m, "instead."));
    const Y = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color
      , Q = Y !== void 0 ? Y.length : 0;
    let pe = 0;
    F.morphAttributes.position !== void 0 && (pe = 1),
    F.morphAttributes.normal !== void 0 && (pe = 2),
    F.morphAttributes.color !== void 0 && (pe = 3);
    let B, $, re, O;
    if (j) {
      const Se = Bt[j];
      B = Se.vertexShader,
        $ = Se.fragmentShader
    } else
      B = _.vertexShader,
        $ = _.fragmentShader,
        c.update(_),
        re = c.getVertexShaderID(_),
        O = c.getFragmentShaderID(_);
    const ce = r.getRenderTarget()
      , ue = _.alphaTest > 0
      , de = _.clearcoat > 0
      , he = _.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: j,
      shaderName: _.type,
      vertexShader: B,
      fragmentShader: $,
      defines: _.defines,
      customVertexShaderID: re,
      customFragmentShaderID: O,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: m,
      instancing: K.isInstancedMesh === !0,
      instancingColor: K.isInstancedMesh === !0 && K.instanceColor !== null,
      supportsVertexTextures: p,
      outputEncoding: ce === null ? r.outputEncoding : ce.isXRRenderTarget === !0 ? ce.texture.encoding : bn,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!J,
      envMapMode: J && J.mapping,
      envMapCubeUVHeight: ee,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === gc,
      tangentSpaceNormalMap: _.normalMapType === mc,
      decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === ke,
      clearcoat: de,
      clearcoatMap: de && !!_.clearcoatMap,
      clearcoatRoughnessMap: de && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!_.clearcoatNormalMap,
      iridescence: he,
      iridescenceMap: he && !!_.iridescenceMap,
      iridescenceThicknessMap: he && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === Xn,
      alphaMap: !!_.alphaMap,
      alphaTest: ue,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!F.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
      vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.iridescenceMap || !!_.iridescenceThicknessMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap,
      uvsVertexOnly: !(_.map || _.bumpMap || _.normalMap || _.specularMap || _.alphaMap || _.emissiveMap || _.roughnessMap || _.metalnessMap || _.clearcoatNormalMap || _.iridescenceMap || _.iridescenceThicknessMap || _.transmission > 0 || _.transmissionMap || _.thicknessMap || _.specularIntensityMap || _.specularColorMap || _.sheen > 0 || _.sheenColorMap || _.sheenRoughnessMap) && !!_.displacementMap,
      fog: !!z,
      useFog: _.fog === !0,
      fogExp2: z && z.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: K.isSkinnedMesh === !0,
      morphTargets: F.morphAttributes.position !== void 0,
      morphNormals: F.morphAttributes.normal !== void 0,
      morphColors: F.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
      morphTextureStride: pe,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: r.shadowMap.enabled && P.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: _.toneMapped ? r.toneMapping : Zt,
      useLegacyLights: r.useLegacyLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === sn,
      flipSided: _.side === Mt,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey()
    }
  }
  function f(_) {
    const A = [];
    if (_.shaderID ? A.push(_.shaderID) : (A.push(_.customVertexShaderID),
      A.push(_.customFragmentShaderID)),
    _.defines !== void 0)
      for (const P in _.defines)
        A.push(P),
          A.push(_.defines[P]);
    return _.isRawShaderMaterial === !1 && (v(A, _),
      w(A, _),
      A.push(r.outputEncoding)),
      A.push(_.customProgramCacheKey),
      A.join()
  }
  function v(_, A) {
    _.push(A.precision),
      _.push(A.outputEncoding),
      _.push(A.envMapMode),
      _.push(A.envMapCubeUVHeight),
      _.push(A.combine),
      _.push(A.vertexUvs),
      _.push(A.fogExp2),
      _.push(A.sizeAttenuation),
      _.push(A.morphTargetsCount),
      _.push(A.morphAttributeCount),
      _.push(A.numDirLights),
      _.push(A.numPointLights),
      _.push(A.numSpotLights),
      _.push(A.numSpotLightMaps),
      _.push(A.numHemiLights),
      _.push(A.numRectAreaLights),
      _.push(A.numDirLightShadows),
      _.push(A.numPointLightShadows),
      _.push(A.numSpotLightShadows),
      _.push(A.numSpotLightShadowsWithMaps),
      _.push(A.shadowMapType),
      _.push(A.toneMapping),
      _.push(A.numClippingPlanes),
      _.push(A.numClipIntersection),
      _.push(A.depthPacking)
  }
  function w(_, A) {
    a.disableAll(),
    A.isWebGL2 && a.enable(0),
    A.supportsVertexTextures && a.enable(1),
    A.instancing && a.enable(2),
    A.instancingColor && a.enable(3),
    A.map && a.enable(4),
    A.matcap && a.enable(5),
    A.envMap && a.enable(6),
    A.lightMap && a.enable(7),
    A.aoMap && a.enable(8),
    A.emissiveMap && a.enable(9),
    A.bumpMap && a.enable(10),
    A.normalMap && a.enable(11),
    A.objectSpaceNormalMap && a.enable(12),
    A.tangentSpaceNormalMap && a.enable(13),
    A.clearcoat && a.enable(14),
    A.clearcoatMap && a.enable(15),
    A.clearcoatRoughnessMap && a.enable(16),
    A.clearcoatNormalMap && a.enable(17),
    A.iridescence && a.enable(18),
    A.iridescenceMap && a.enable(19),
    A.iridescenceThicknessMap && a.enable(20),
    A.displacementMap && a.enable(21),
    A.specularMap && a.enable(22),
    A.roughnessMap && a.enable(23),
    A.metalnessMap && a.enable(24),
    A.gradientMap && a.enable(25),
    A.alphaMap && a.enable(26),
    A.alphaTest && a.enable(27),
    A.vertexColors && a.enable(28),
    A.vertexAlphas && a.enable(29),
    A.vertexUvs && a.enable(30),
    A.vertexTangents && a.enable(31),
    A.uvsVertexOnly && a.enable(32),
      _.push(a.mask),
      a.disableAll(),
    A.fog && a.enable(0),
    A.useFog && a.enable(1),
    A.flatShading && a.enable(2),
    A.logarithmicDepthBuffer && a.enable(3),
    A.skinning && a.enable(4),
    A.morphTargets && a.enable(5),
    A.morphNormals && a.enable(6),
    A.morphColors && a.enable(7),
    A.premultipliedAlpha && a.enable(8),
    A.shadowMapEnabled && a.enable(9),
    A.useLegacyLights && a.enable(10),
    A.doubleSided && a.enable(11),
    A.flipSided && a.enable(12),
    A.useDepthPacking && a.enable(13),
    A.dithering && a.enable(14),
    A.specularIntensityMap && a.enable(15),
    A.specularColorMap && a.enable(16),
    A.transmission && a.enable(17),
    A.transmissionMap && a.enable(18),
    A.thicknessMap && a.enable(19),
    A.sheen && a.enable(20),
    A.sheenColorMap && a.enable(21),
    A.sheenRoughnessMap && a.enable(22),
    A.decodeVideoTexture && a.enable(23),
    A.opaque && a.enable(24),
      _.push(a.mask)
  }
  function x(_) {
    const A = g[_.type];
    let P;
    if (A) {
      const G = Bt[A];
      P = Bc.clone(G.uniforms)
    } else
      P = _.uniforms;
    return P
  }
  function S(_, A) {
    let P;
    for (let G = 0, K = l.length; G < K; G++) {
      const z = l[G];
      if (z.cacheKey === A) {
        P = z,
          ++P.usedTimes;
        break
      }
    }
    return P === void 0 && (P = new Zf(r,A,_,s),
      l.push(P)),
      P
  }
  function y(_) {
    if (--_.usedTimes === 0) {
      const A = l.indexOf(_);
      l[A] = l[l.length - 1],
        l.pop(),
        _.destroy()
    }
  }
  function b(_) {
    c.remove(_)
  }
  function L() {
    c.dispose()
  }
  return {
    getParameters: h,
    getProgramCacheKey: f,
    getUniforms: x,
    acquireProgram: S,
    releaseProgram: y,
    releaseShaderCache: b,
    programs: l,
    dispose: L
  }
}
function tp() {
  let r = new WeakMap;
  function e(s) {
    let o = r.get(s);
    return o === void 0 && (o = {},
      r.set(s, o)),
      o
  }
  function t(s) {
    r.delete(s)
  }
  function n(s, o, a) {
    r.get(s)[o] = a
  }
  function i() {
    r = new WeakMap
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  }
}
function np(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id
}
function Ba(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id
}
function ka() {
  const r = [];
  let e = 0;
  const t = []
    , n = []
    , i = [];
  function s() {
    e = 0,
      t.length = 0,
      n.length = 0,
      i.length = 0
  }
  function o(d, p, m, g, h, f) {
    let v = r[e];
    return v === void 0 ? (v = {
      id: d.id,
      object: d,
      geometry: p,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: h,
      group: f
    },
      r[e] = v) : (v.id = d.id,
      v.object = d,
      v.geometry = p,
      v.material = m,
      v.groupOrder = g,
      v.renderOrder = d.renderOrder,
      v.z = h,
      v.group = f),
      e++,
      v
  }
  function a(d, p, m, g, h, f) {
    const v = o(d, p, m, g, h, f);
    m.transmission > 0 ? n.push(v) : m.transparent === !0 ? i.push(v) : t.push(v)
  }
  function c(d, p, m, g, h, f) {
    const v = o(d, p, m, g, h, f);
    m.transmission > 0 ? n.unshift(v) : m.transparent === !0 ? i.unshift(v) : t.unshift(v)
  }
  function l(d, p) {
    t.length > 1 && t.sort(d || np),
    n.length > 1 && n.sort(p || Ba),
    i.length > 1 && i.sort(p || Ba)
  }
  function u() {
    for (let d = e, p = r.length; d < p; d++) {
      const m = r[d];
      if (m.id === null)
        break;
      m.id = null,
        m.object = null,
        m.geometry = null,
        m.material = null,
        m.group = null
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: u,
    sort: l
  }
}
function ip() {
  let r = new WeakMap;
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new ka,
      r.set(n, [o])) : i >= s.length ? (o = new ka,
      s.push(o)) : o = s[i],
      o
  }
  function t() {
    r = new WeakMap
  }
  return {
    get: e,
    dispose: t
  }
}
function rp() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D,
            color: new Ue
          };
          break;
        case "SpotLight":
          t = {
            position: new D,
            direction: new D,
            color: new Ue,
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D,
            color: new Ue,
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D,
            skyColor: new Ue,
            groundColor: new Ue
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ue,
            position: new D,
            halfWidth: new D,
            halfHeight: new D
          };
          break
      }
      return r[e.id] = t,
        t
    }
  }
}
function sp() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we,
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break
      }
      return r[e.id] = t,
        t
    }
  }
}
let ap = 0;
function op(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0)
}
function lp(r, e) {
  const t = new rp
    , n = sp()
    , i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    i.probe.push(new D);
  const s = new D
    , o = new Ve
    , a = new Ve;
  function c(u, d) {
    let p = 0
      , m = 0
      , g = 0;
    for (let G = 0; G < 9; G++)
      i.probe[G].set(0, 0, 0);
    let h = 0
      , f = 0
      , v = 0
      , w = 0
      , x = 0
      , S = 0
      , y = 0
      , b = 0
      , L = 0
      , _ = 0;
    u.sort(op);
    const A = d === !0 ? Math.PI : 1;
    for (let G = 0, K = u.length; G < K; G++) {
      const z = u[G]
        , F = z.color
        , W = z.intensity
        , J = z.distance
        , ee = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
      if (z.isAmbientLight)
        p += F.r * W * A,
          m += F.g * W * A,
          g += F.b * W * A;
      else if (z.isLightProbe)
        for (let j = 0; j < 9; j++)
          i.probe[j].addScaledVector(z.sh.coefficients[j], W);
      else if (z.isDirectionalLight) {
        const j = t.get(z);
        if (j.color.copy(z.color).multiplyScalar(z.intensity * A),
          z.castShadow) {
          const Y = z.shadow
            , Q = n.get(z);
          Q.shadowBias = Y.bias,
            Q.shadowNormalBias = Y.normalBias,
            Q.shadowRadius = Y.radius,
            Q.shadowMapSize = Y.mapSize,
            i.directionalShadow[h] = Q,
            i.directionalShadowMap[h] = ee,
            i.directionalShadowMatrix[h] = z.shadow.matrix,
            S++
        }
        i.directional[h] = j,
          h++
      } else if (z.isSpotLight) {
        const j = t.get(z);
        j.position.setFromMatrixPosition(z.matrixWorld),
          j.color.copy(F).multiplyScalar(W * A),
          j.distance = J,
          j.coneCos = Math.cos(z.angle),
          j.penumbraCos = Math.cos(z.angle * (1 - z.penumbra)),
          j.decay = z.decay,
          i.spot[v] = j;
        const Y = z.shadow;
        if (z.map && (i.spotLightMap[L] = z.map,
          L++,
          Y.updateMatrices(z),
        z.castShadow && _++),
          i.spotLightMatrix[v] = Y.matrix,
          z.castShadow) {
          const Q = n.get(z);
          Q.shadowBias = Y.bias,
            Q.shadowNormalBias = Y.normalBias,
            Q.shadowRadius = Y.radius,
            Q.shadowMapSize = Y.mapSize,
            i.spotShadow[v] = Q,
            i.spotShadowMap[v] = ee,
            b++
        }
        v++
      } else if (z.isRectAreaLight) {
        const j = t.get(z);
        j.color.copy(F).multiplyScalar(W),
          j.halfWidth.set(z.width * .5, 0, 0),
          j.halfHeight.set(0, z.height * .5, 0),
          i.rectArea[w] = j,
          w++
      } else if (z.isPointLight) {
        const j = t.get(z);
        if (j.color.copy(z.color).multiplyScalar(z.intensity * A),
          j.distance = z.distance,
          j.decay = z.decay,
          z.castShadow) {
          const Y = z.shadow
            , Q = n.get(z);
          Q.shadowBias = Y.bias,
            Q.shadowNormalBias = Y.normalBias,
            Q.shadowRadius = Y.radius,
            Q.shadowMapSize = Y.mapSize,
            Q.shadowCameraNear = Y.camera.near,
            Q.shadowCameraFar = Y.camera.far,
            i.pointShadow[f] = Q,
            i.pointShadowMap[f] = ee,
            i.pointShadowMatrix[f] = z.shadow.matrix,
            y++
        }
        i.point[f] = j,
          f++
      } else if (z.isHemisphereLight) {
        const j = t.get(z);
        j.skyColor.copy(z.color).multiplyScalar(W * A),
          j.groundColor.copy(z.groundColor).multiplyScalar(W * A),
          i.hemi[x] = j,
          x++
      }
    }
    w > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1,
      i.rectAreaLTC2 = ie.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1,
      i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
      i.ambient[0] = p,
      i.ambient[1] = m,
      i.ambient[2] = g;
    const P = i.hash;
    (P.directionalLength !== h || P.pointLength !== f || P.spotLength !== v || P.rectAreaLength !== w || P.hemiLength !== x || P.numDirectionalShadows !== S || P.numPointShadows !== y || P.numSpotShadows !== b || P.numSpotMaps !== L) && (i.directional.length = h,
      i.spot.length = v,
      i.rectArea.length = w,
      i.point.length = f,
      i.hemi.length = x,
      i.directionalShadow.length = S,
      i.directionalShadowMap.length = S,
      i.pointShadow.length = y,
      i.pointShadowMap.length = y,
      i.spotShadow.length = b,
      i.spotShadowMap.length = b,
      i.directionalShadowMatrix.length = S,
      i.pointShadowMatrix.length = y,
      i.spotLightMatrix.length = b + L - _,
      i.spotLightMap.length = L,
      i.numSpotLightShadowsWithMaps = _,
      P.directionalLength = h,
      P.pointLength = f,
      P.spotLength = v,
      P.rectAreaLength = w,
      P.hemiLength = x,
      P.numDirectionalShadows = S,
      P.numPointShadows = y,
      P.numSpotShadows = b,
      P.numSpotMaps = L,
      i.version = ap++)
  }
  function l(u, d) {
    let p = 0
      , m = 0
      , g = 0
      , h = 0
      , f = 0;
    const v = d.matrixWorldInverse;
    for (let w = 0, x = u.length; w < x; w++) {
      const S = u[w];
      if (S.isDirectionalLight) {
        const y = i.directional[p];
        y.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(v),
          p++
      } else if (S.isSpotLight) {
        const y = i.spot[g];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(v),
          y.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(v),
          g++
      } else if (S.isRectAreaLight) {
        const y = i.rectArea[h];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(v),
          a.identity(),
          o.copy(S.matrixWorld),
          o.premultiply(v),
          a.extractRotation(o),
          y.halfWidth.set(S.width * .5, 0, 0),
          y.halfHeight.set(0, S.height * .5, 0),
          y.halfWidth.applyMatrix4(a),
          y.halfHeight.applyMatrix4(a),
          h++
      } else if (S.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(S.matrixWorld),
          y.position.applyMatrix4(v),
          m++
      } else if (S.isHemisphereLight) {
        const y = i.hemi[f];
        y.direction.setFromMatrixPosition(S.matrixWorld),
          y.direction.transformDirection(v),
          f++
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  }
}
function Ga(r, e) {
  const t = new lp(r,e)
    , n = []
    , i = [];
  function s() {
    n.length = 0,
      i.length = 0
  }
  function o(d) {
    n.push(d)
  }
  function a(d) {
    i.push(d)
  }
  function c(d) {
    t.setup(n, d)
  }
  function l(d) {
    t.setupView(n, d)
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  }
}
function cp(r, e) {
  let t = new WeakMap;
  function n(s, o=0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Ga(r,e),
      t.set(s, [c])) : o >= a.length ? (c = new Ga(r,e),
      a.push(c)) : c = a[o],
      c
  }
  function i() {
    t = new WeakMap
  }
  return {
    get: n,
    dispose: i
  }
}
class up extends Mi {
  constructor(e) {
    super(),
      this.isMeshDepthMaterial = !0,
      this.type = "MeshDepthMaterial",
      this.depthPacking = fc,
      this.map = null,
      this.alphaMap = null,
      this.displacementMap = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.setValues(e)
  }
  copy(e) {
    return super.copy(e),
      this.depthPacking = e.depthPacking,
      this.map = e.map,
      this.alphaMap = e.alphaMap,
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this
  }
}
class hp extends Mi {
  constructor(e) {
    super(),
      this.isMeshDistanceMaterial = !0,
      this.type = "MeshDistanceMaterial",
      this.referencePosition = new D,
      this.nearDistance = 1,
      this.farDistance = 1e3,
      this.map = null,
      this.alphaMap = null,
      this.displacementMap = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.setValues(e)
  }
  copy(e) {
    return super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      this.nearDistance = e.nearDistance,
      this.farDistance = e.farDistance,
      this.map = e.map,
      this.alphaMap = e.alphaMap,
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this
  }
}
const dp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , fp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function pp(r, e, t) {
  let n = new fs;
  const i = new we
    , s = new we
    , o = new nt
    , a = new up({
    depthPacking: pc
  })
    , c = new hp
    , l = {}
    , u = t.maxTextureSize
    , d = {
    [ln]: Mt,
    [Mt]: ln,
    [sn]: sn
  }
    , p = new Tn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new we
      },
      radius: {
        value: 4
      }
    },
    vertexShader: dp,
    fragmentShader: fp
  })
    , m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Vt;
  g.setAttribute("position", new Gt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
  const h = new Dt(g,p)
    , f = this;
  this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = go,
    this.render = function(S, y, b) {
      if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || S.length === 0)
        return;
      const L = r.getRenderTarget()
        , _ = r.getActiveCubeFace()
        , A = r.getActiveMipmapLevel()
        , P = r.state;
      P.setBlending(on),
        P.buffers.color.setClear(1, 1, 1, 1),
        P.buffers.depth.setTest(!0),
        P.setScissorTest(!1);
      for (let G = 0, K = S.length; G < K; G++) {
        const z = S[G]
          , F = z.shadow;
        if (F === void 0) {
          console.warn("THREE.WebGLShadowMap:", z, "has no shadow.");
          continue
        }
        if (F.autoUpdate === !1 && F.needsUpdate === !1)
          continue;
        i.copy(F.mapSize);
        const W = F.getFrameExtents();
        if (i.multiply(W),
          s.copy(F.mapSize),
        (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / W.x),
          i.x = s.x * W.x,
          F.mapSize.x = s.x),
        i.y > u && (s.y = Math.floor(u / W.y),
          i.y = s.y * W.y,
          F.mapSize.y = s.y)),
        F.map === null) {
          const ee = this.type !== hi ? {
            minFilter: ft,
            magFilter: ft
          } : {};
          F.map = new En(i.x,i.y,ee),
            F.map.texture.name = z.name + ".shadowMap",
            F.camera.updateProjectionMatrix()
        }
        r.setRenderTarget(F.map),
          r.clear();
        const J = F.getViewportCount();
        for (let ee = 0; ee < J; ee++) {
          const j = F.getViewport(ee);
          o.set(s.x * j.x, s.y * j.y, s.x * j.z, s.y * j.w),
            P.viewport(o),
            F.updateMatrices(z, ee),
            n = F.getFrustum(),
            x(y, b, F.camera, z, this.type)
        }
        F.isPointLightShadow !== !0 && this.type === hi && v(F, b),
          F.needsUpdate = !1
      }
      f.needsUpdate = !1,
        r.setRenderTarget(L, _, A)
    }
  ;
  function v(S, y) {
    const b = e.update(h);
    p.defines.VSM_SAMPLES !== S.blurSamples && (p.defines.VSM_SAMPLES = S.blurSamples,
      m.defines.VSM_SAMPLES = S.blurSamples,
      p.needsUpdate = !0,
      m.needsUpdate = !0),
    S.mapPass === null && (S.mapPass = new En(i.x,i.y)),
      p.uniforms.shadow_pass.value = S.map.texture,
      p.uniforms.resolution.value = S.mapSize,
      p.uniforms.radius.value = S.radius,
      r.setRenderTarget(S.mapPass),
      r.clear(),
      r.renderBufferDirect(y, null, b, p, h, null),
      m.uniforms.shadow_pass.value = S.mapPass.texture,
      m.uniforms.resolution.value = S.mapSize,
      m.uniforms.radius.value = S.radius,
      r.setRenderTarget(S.map),
      r.clear(),
      r.renderBufferDirect(y, null, b, m, h, null)
  }
  function w(S, y, b, L, _, A) {
    let P = null;
    const G = b.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (G !== void 0)
      P = G;
    else if (P = b.isPointLight === !0 ? c : a,
    r.localClippingEnabled && y.clipShadows === !0 && Array.isArray(y.clippingPlanes) && y.clippingPlanes.length !== 0 || y.displacementMap && y.displacementScale !== 0 || y.alphaMap && y.alphaTest > 0 || y.map && y.alphaTest > 0) {
      const K = P.uuid
        , z = y.uuid;
      let F = l[K];
      F === void 0 && (F = {},
        l[K] = F);
      let W = F[z];
      W === void 0 && (W = P.clone(),
        F[z] = W),
        P = W
    }
    return P.visible = y.visible,
      P.wireframe = y.wireframe,
      A === hi ? P.side = y.shadowSide !== null ? y.shadowSide : y.side : P.side = y.shadowSide !== null ? y.shadowSide : d[y.side],
      P.alphaMap = y.alphaMap,
      P.alphaTest = y.alphaTest,
      P.map = y.map,
      P.clipShadows = y.clipShadows,
      P.clippingPlanes = y.clippingPlanes,
      P.clipIntersection = y.clipIntersection,
      P.displacementMap = y.displacementMap,
      P.displacementScale = y.displacementScale,
      P.displacementBias = y.displacementBias,
      P.wireframeLinewidth = y.wireframeLinewidth,
      P.linewidth = y.linewidth,
    b.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(b.matrixWorld),
      P.nearDistance = L,
      P.farDistance = _),
      P
  }
  function x(S, y, b, L, _) {
    if (S.visible === !1)
      return;
    if (S.layers.test(y.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && _ === hi) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, S.matrixWorld);
      const G = e.update(S)
        , K = S.material;
      if (Array.isArray(K)) {
        const z = G.groups;
        for (let F = 0, W = z.length; F < W; F++) {
          const J = z[F]
            , ee = K[J.materialIndex];
          if (ee && ee.visible) {
            const j = w(S, ee, L, b.near, b.far, _);
            r.renderBufferDirect(b, null, G, j, S, J)
          }
        }
      } else if (K.visible) {
        const z = w(S, K, L, b.near, b.far, _);
        r.renderBufferDirect(b, null, G, z, S, null)
      }
    }
    const P = S.children;
    for (let G = 0, K = P.length; G < K; G++)
      x(P[G], y, b, L, _)
  }
}
function mp(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let R = !1;
    const H = new nt;
    let Z = null;
    const le = new nt(0,0,0,0);
    return {
      setMask: function(fe) {
        Z !== fe && !R && (r.colorMask(fe, fe, fe, fe),
          Z = fe)
      },
      setLocked: function(fe) {
        R = fe
      },
      setClear: function(fe, Be, Qe, ct, Nt) {
        Nt === !0 && (fe *= ct,
          Be *= ct,
          Qe *= ct),
          H.set(fe, Be, Qe, ct),
        le.equals(H) === !1 && (r.clearColor(fe, Be, Qe, ct),
          le.copy(H))
      },
      reset: function() {
        R = !1,
          Z = null,
          le.set(-1, 0, 0, 0)
      }
    }
  }
  function s() {
    let R = !1
      , H = null
      , Z = null
      , le = null;
    return {
      setTest: function(fe) {
        fe ? ue(2929) : de(2929)
      },
      setMask: function(fe) {
        H !== fe && !R && (r.depthMask(fe),
          H = fe)
      },
      setFunc: function(fe) {
        if (Z !== fe) {
          switch (fe) {
            case Ul:
              r.depthFunc(512);
              break;
            case zl:
              r.depthFunc(519);
              break;
            case Bl:
              r.depthFunc(513);
              break;
            case Jr:
              r.depthFunc(515);
              break;
            case kl:
              r.depthFunc(514);
              break;
            case Gl:
              r.depthFunc(518);
              break;
            case Vl:
              r.depthFunc(516);
              break;
            case Hl:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515)
          }
          Z = fe
        }
      },
      setLocked: function(fe) {
        R = fe
      },
      setClear: function(fe) {
        le !== fe && (r.clearDepth(fe),
          le = fe)
      },
      reset: function() {
        R = !1,
          H = null,
          Z = null,
          le = null
      }
    }
  }
  function o() {
    let R = !1
      , H = null
      , Z = null
      , le = null
      , fe = null
      , Be = null
      , Qe = null
      , ct = null
      , Nt = null;
    return {
      setTest: function(He) {
        R || (He ? ue(2960) : de(2960))
      },
      setMask: function(He) {
        H !== He && !R && (r.stencilMask(He),
          H = He)
      },
      setFunc: function(He, bt, Ft) {
        (Z !== He || le !== bt || fe !== Ft) && (r.stencilFunc(He, bt, Ft),
          Z = He,
          le = bt,
          fe = Ft)
      },
      setOp: function(He, bt, Ft) {
        (Be !== He || Qe !== bt || ct !== Ft) && (r.stencilOp(He, bt, Ft),
          Be = He,
          Qe = bt,
          ct = Ft)
      },
      setLocked: function(He) {
        R = He
      },
      setClear: function(He) {
        Nt !== He && (r.clearStencil(He),
          Nt = He)
      },
      reset: function() {
        R = !1,
          H = null,
          Z = null,
          le = null,
          fe = null,
          Be = null,
          Qe = null,
          ct = null,
          Nt = null
      }
    }
  }
  const a = new i
    , c = new s
    , l = new o
    , u = new WeakMap
    , d = new WeakMap;
  let p = {}
    , m = {}
    , g = new WeakMap
    , h = []
    , f = null
    , v = !1
    , w = null
    , x = null
    , S = null
    , y = null
    , b = null
    , L = null
    , _ = null
    , A = !1
    , P = null
    , G = null
    , K = null
    , z = null
    , F = null;
  const W = r.getParameter(35661);
  let J = !1
    , ee = 0;
  const j = r.getParameter(7938);
  j.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(j)[1]),
    J = ee >= 1) : j.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),
    J = ee >= 2);
  let Y = null
    , Q = {};
  const pe = r.getParameter(3088)
    , B = r.getParameter(2978)
    , $ = new nt().fromArray(pe)
    , re = new nt().fromArray(B);
  function O(R, H, Z) {
    const le = new Uint8Array(4)
      , fe = r.createTexture();
    r.bindTexture(R, fe),
      r.texParameteri(R, 10241, 9728),
      r.texParameteri(R, 10240, 9728);
    for (let Be = 0; Be < Z; Be++)
      r.texImage2D(H + Be, 0, 6408, 1, 1, 0, 6408, 5121, le);
    return fe
  }
  const ce = {};
  ce[3553] = O(3553, 3553, 1),
    ce[34067] = O(34067, 34069, 6),
    a.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    ue(2929),
    c.setFunc(Jr),
    Ke(!1),
    Je(Ls),
    ue(2884),
    Ze(on);
  function ue(R) {
    p[R] !== !0 && (r.enable(R),
      p[R] = !0)
  }
  function de(R) {
    p[R] !== !1 && (r.disable(R),
      p[R] = !1)
  }
  function he(R, H) {
    return m[R] !== H ? (r.bindFramebuffer(R, H),
      m[R] = H,
    n && (R === 36009 && (m[36160] = H),
    R === 36160 && (m[36009] = H)),
      !0) : !1
  }
  function ye(R, H) {
    let Z = h
      , le = !1;
    if (R)
      if (Z = g.get(H),
      Z === void 0 && (Z = [],
        g.set(H, Z)),
        R.isWebGLMultipleRenderTargets) {
        const fe = R.texture;
        if (Z.length !== fe.length || Z[0] !== 36064) {
          for (let Be = 0, Qe = fe.length; Be < Qe; Be++)
            Z[Be] = 36064 + Be;
          Z.length = fe.length,
            le = !0
        }
      } else
        Z[0] !== 36064 && (Z[0] = 36064,
          le = !0);
    else
      Z[0] !== 1029 && (Z[0] = 1029,
        le = !0);
    le && (t.isWebGL2 ? r.drawBuffers(Z) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))
  }
  function Se(R) {
    return f !== R ? (r.useProgram(R),
      f = R,
      !0) : !1
  }
  const Ee = {
    [Wn]: 32774,
    [Tl]: 32778,
    [Al]: 32779
  };
  if (n)
    Ee[Is] = 32775,
      Ee[Ns] = 32776;
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && (Ee[Is] = R.MIN_EXT,
      Ee[Ns] = R.MAX_EXT)
  }
  const De = {
    [Cl]: 0,
    [Ll]: 1,
    [Rl]: 768,
    [_o]: 770,
    [Ol]: 776,
    [Nl]: 774,
    [Dl]: 772,
    [Pl]: 769,
    [xo]: 771,
    [Fl]: 775,
    [Il]: 773
  };
  function Ze(R, H, Z, le, fe, Be, Qe, ct) {
    if (R === on) {
      v === !0 && (de(3042),
        v = !1);
      return
    }
    if (v === !1 && (ue(3042),
      v = !0),
    R !== El) {
      if (R !== w || ct !== A) {
        if ((x !== Wn || b !== Wn) && (r.blendEquation(32774),
          x = Wn,
          b = Wn),
          ct)
          switch (R) {
            case Xn:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Rs:
              r.blendFunc(1, 1);
              break;
            case Ps:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ds:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break
          }
        else
          switch (R) {
            case Xn:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Rs:
              r.blendFunc(770, 1);
              break;
            case Ps:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ds:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break
          }
        S = null,
          y = null,
          L = null,
          _ = null,
          w = R,
          A = ct
      }
      return
    }
    fe = fe || H,
      Be = Be || Z,
      Qe = Qe || le,
    (H !== x || fe !== b) && (r.blendEquationSeparate(Ee[H], Ee[fe]),
      x = H,
      b = fe),
    (Z !== S || le !== y || Be !== L || Qe !== _) && (r.blendFuncSeparate(De[Z], De[le], De[Be], De[Qe]),
      S = Z,
      y = le,
      L = Be,
      _ = Qe),
      w = R,
      A = !1
  }
  function ot(R, H) {
    R.side === sn ? de(2884) : ue(2884);
    let Z = R.side === Mt;
    H && (Z = !Z),
      Ke(Z),
      R.blending === Xn && R.transparent === !1 ? Ze(on) : Ze(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.premultipliedAlpha),
      c.setFunc(R.depthFunc),
      c.setTest(R.depthTest),
      c.setMask(R.depthWrite),
      a.setMask(R.colorWrite);
    const le = R.stencilWrite;
    l.setTest(le),
    le && (l.setMask(R.stencilWriteMask),
      l.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
      l.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      ze(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0 ? ue(32926) : de(32926)
  }
  function Ke(R) {
    P !== R && (R ? r.frontFace(2304) : r.frontFace(2305),
      P = R)
  }
  function Je(R) {
    R !== Sl ? (ue(2884),
    R !== G && (R === Ls ? r.cullFace(1029) : R === bl ? r.cullFace(1028) : r.cullFace(1032))) : de(2884),
      G = R
  }
  function Ge(R) {
    R !== K && (J && r.lineWidth(R),
      K = R)
  }
  function ze(R, H, Z) {
    R ? (ue(32823),
    (z !== H || F !== Z) && (r.polygonOffset(H, Z),
      z = H,
      F = Z)) : de(32823)
  }
  function mt(R) {
    R ? ue(3089) : de(3089)
  }
  function lt(R) {
    R === void 0 && (R = 33984 + W - 1),
    Y !== R && (r.activeTexture(R),
      Y = R)
  }
  function T(R, H, Z) {
    Z === void 0 && (Y === null ? Z = 33984 + W - 1 : Z = Y);
    let le = Q[Z];
    le === void 0 && (le = {
      type: void 0,
      texture: void 0
    },
      Q[Z] = le),
    (le.type !== R || le.texture !== H) && (Y !== Z && (r.activeTexture(Z),
      Y = Z),
      r.bindTexture(R, H || ce[R]),
      le.type = R,
      le.texture = H)
  }
  function M() {
    const R = Q[Y];
    R !== void 0 && R.type !== void 0 && (r.bindTexture(R.type, null),
      R.type = void 0,
      R.texture = void 0)
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function te() {
    try {
      r.compressedTexImage3D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function ne() {
    try {
      r.texSubImage2D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function ae() {
    try {
      r.texSubImage3D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function xe() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function C() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function I() {
    try {
      r.texStorage2D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function oe() {
    try {
      r.texStorage3D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function se() {
    try {
      r.texImage2D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function me() {
    try {
      r.texImage3D.apply(r, arguments)
    } catch (R) {
      console.error("THREE.WebGLState:", R)
    }
  }
  function _e(R) {
    $.equals(R) === !1 && (r.scissor(R.x, R.y, R.z, R.w),
      $.copy(R))
  }
  function ge(R) {
    re.equals(R) === !1 && (r.viewport(R.x, R.y, R.z, R.w),
      re.copy(R))
  }
  function Ce(R, H) {
    let Z = d.get(H);
    Z === void 0 && (Z = new WeakMap,
      d.set(H, Z));
    let le = Z.get(R);
    le === void 0 && (le = r.getUniformBlockIndex(H, R.name),
      Z.set(R, le))
  }
  function Ie(R, H) {
    const le = d.get(H).get(R);
    u.get(H) !== le && (r.uniformBlockBinding(H, le, R.__bindingPointIndex),
      u.set(H, le))
  }
  function Oe() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
    n === !0 && (r.bindFramebuffer(36009, null),
      r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      p = {},
      Y = null,
      Q = {},
      m = {},
      g = new WeakMap,
      h = [],
      f = null,
      v = !1,
      w = null,
      x = null,
      S = null,
      y = null,
      b = null,
      L = null,
      _ = null,
      A = !1,
      P = null,
      G = null,
      K = null,
      z = null,
      F = null,
      $.set(0, 0, r.canvas.width, r.canvas.height),
      re.set(0, 0, r.canvas.width, r.canvas.height),
      a.reset(),
      c.reset(),
      l.reset()
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: ue,
    disable: de,
    bindFramebuffer: he,
    drawBuffers: ye,
    useProgram: Se,
    setBlending: Ze,
    setMaterial: ot,
    setFlipSided: Ke,
    setCullFace: Je,
    setLineWidth: Ge,
    setPolygonOffset: ze,
    setScissorTest: mt,
    activeTexture: lt,
    bindTexture: T,
    unbindTexture: M,
    compressedTexImage2D: V,
    compressedTexImage3D: te,
    texImage2D: se,
    texImage3D: me,
    updateUBOMapping: Ce,
    uniformBlockBinding: Ie,
    texStorage2D: I,
    texStorage3D: oe,
    texSubImage2D: ne,
    texSubImage3D: ae,
    compressedTexSubImage2D: xe,
    compressedTexSubImage3D: C,
    scissor: _e,
    viewport: ge,
    reset: Oe
  }
}
function gp(r, e, t, n, i, s, o) {
  const a = i.isWebGL2
    , c = i.maxTextures
    , l = i.maxCubemapSize
    , u = i.maxTextureSize
    , d = i.maxSamples
    , p = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
    , m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
    , g = new WeakMap;
  let h;
  const f = new WeakMap;
  let v = !1;
  try {
    v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
  } catch {}
  function w(T, M) {
    return v ? new OffscreenCanvas(T,M) : Qi("canvas")
  }
  function x(T, M, V, te) {
    let ne = 1;
    if ((T.width > te || T.height > te) && (ne = te / Math.max(T.width, T.height)),
    ne < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const ae = M ? vc : Math.floor
          , xe = ae(ne * T.width)
          , C = ae(ne * T.height);
        h === void 0 && (h = w(xe, C));
        const I = V ? w(xe, C) : h;
        return I.width = xe,
          I.height = C,
          I.getContext("2d").drawImage(T, 0, 0, xe, C),
          console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + xe + "x" + C + ")."),
          I
      } else
        return "data"in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."),
          T;
    return T
  }
  function S(T) {
    return la(T.width) && la(T.height)
  }
  function y(T) {
    return a ? !1 : T.wrapS !== Rt || T.wrapT !== Rt || T.minFilter !== ft && T.minFilter !== Et
  }
  function b(T, M) {
    return T.generateMipmaps && M && T.minFilter !== ft && T.minFilter !== Et
  }
  function L(T) {
    r.generateMipmap(T)
  }
  function _(T, M, V, te, ne=!1) {
    if (a === !1)
      return M;
    if (T !== null) {
      if (r[T] !== void 0)
        return r[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'")
    }
    let ae = M;
    return M === 6403 && (V === 5126 && (ae = 33326),
    V === 5131 && (ae = 33325),
    V === 5121 && (ae = 33321)),
    M === 33319 && (V === 5126 && (ae = 33328),
    V === 5131 && (ae = 33327),
    V === 5121 && (ae = 33323)),
    M === 6408 && (V === 5126 && (ae = 34836),
    V === 5131 && (ae = 34842),
    V === 5121 && (ae = te === ke && ne === !1 ? 35907 : 32856),
    V === 32819 && (ae = 32854),
    V === 32820 && (ae = 32855)),
    (ae === 33325 || ae === 33326 || ae === 33327 || ae === 33328 || ae === 34842 || ae === 34836) && e.get("EXT_color_buffer_float"),
      ae
  }
  function A(T, M, V) {
    return b(T, V) === !0 || T.isFramebufferTexture && T.minFilter !== ft && T.minFilter !== Et ? Math.log2(Math.max(M.width, M.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? M.mipmaps.length : 1
  }
  function P(T) {
    return T === ft || T === Fs || T === fr ? 9728 : 9729
  }
  function G(T) {
    const M = T.target;
    M.removeEventListener("dispose", G),
      z(M),
    M.isVideoTexture && g.delete(M)
  }
  function K(T) {
    const M = T.target;
    M.removeEventListener("dispose", K),
      W(M)
  }
  function z(T) {
    const M = n.get(T);
    if (M.__webglInit === void 0)
      return;
    const V = T.source
      , te = f.get(V);
    if (te) {
      const ne = te[M.__cacheKey];
      ne.usedTimes--,
      ne.usedTimes === 0 && F(T),
      Object.keys(te).length === 0 && f.delete(V)
    }
    n.remove(T)
  }
  function F(T) {
    const M = n.get(T);
    r.deleteTexture(M.__webglTexture);
    const V = T.source
      , te = f.get(V);
    delete te[M.__cacheKey],
      o.memory.textures--
  }
  function W(T) {
    const M = T.texture
      , V = n.get(T)
      , te = n.get(M);
    if (te.__webglTexture !== void 0 && (r.deleteTexture(te.__webglTexture),
      o.memory.textures--),
    T.depthTexture && T.depthTexture.dispose(),
      T.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        r.deleteFramebuffer(V.__webglFramebuffer[ne]),
        V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer[ne]);
    else {
      if (r.deleteFramebuffer(V.__webglFramebuffer),
      V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer),
      V.__webglMultisampledFramebuffer && r.deleteFramebuffer(V.__webglMultisampledFramebuffer),
        V.__webglColorRenderbuffer)
        for (let ne = 0; ne < V.__webglColorRenderbuffer.length; ne++)
          V.__webglColorRenderbuffer[ne] && r.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);
      V.__webglDepthRenderbuffer && r.deleteRenderbuffer(V.__webglDepthRenderbuffer)
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let ne = 0, ae = M.length; ne < ae; ne++) {
        const xe = n.get(M[ne]);
        xe.__webglTexture && (r.deleteTexture(xe.__webglTexture),
          o.memory.textures--),
          n.remove(M[ne])
      }
    n.remove(M),
      n.remove(T)
  }
  let J = 0;
  function ee() {
    J = 0
  }
  function j() {
    const T = J;
    return T >= c && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + c),
      J += 1,
      T
  }
  function Y(T) {
    const M = [];
    return M.push(T.wrapS),
      M.push(T.wrapT),
      M.push(T.wrapR || 0),
      M.push(T.magFilter),
      M.push(T.minFilter),
      M.push(T.anisotropy),
      M.push(T.internalFormat),
      M.push(T.format),
      M.push(T.type),
      M.push(T.generateMipmaps),
      M.push(T.premultiplyAlpha),
      M.push(T.flipY),
      M.push(T.unpackAlignment),
      M.push(T.encoding),
      M.join()
  }
  function Q(T, M) {
    const V = n.get(T);
    if (T.isVideoTexture && mt(T),
    T.isRenderTargetTexture === !1 && T.version > 0 && V.__version !== T.version) {
      const te = T.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        de(V, T, M);
        return
      }
    }
    t.bindTexture(3553, V.__webglTexture, 33984 + M)
  }
  function pe(T, M) {
    const V = n.get(T);
    if (T.version > 0 && V.__version !== T.version) {
      de(V, T, M);
      return
    }
    t.bindTexture(35866, V.__webglTexture, 33984 + M)
  }
  function B(T, M) {
    const V = n.get(T);
    if (T.version > 0 && V.__version !== T.version) {
      de(V, T, M);
      return
    }
    t.bindTexture(32879, V.__webglTexture, 33984 + M)
  }
  function $(T, M) {
    const V = n.get(T);
    if (T.version > 0 && V.__version !== T.version) {
      he(V, T, M);
      return
    }
    t.bindTexture(34067, V.__webglTexture, 33984 + M)
  }
  const re = {
    [ts]: 10497,
    [Rt]: 33071,
    [ns]: 33648
  }
    , O = {
    [ft]: 9728,
    [Fs]: 9984,
    [fr]: 9986,
    [Et]: 9729,
    [Kl]: 9985,
    [mi]: 9987
  };
  function ce(T, M, V) {
    if (V ? (r.texParameteri(T, 10242, re[M.wrapS]),
      r.texParameteri(T, 10243, re[M.wrapT]),
    (T === 32879 || T === 35866) && r.texParameteri(T, 32882, re[M.wrapR]),
      r.texParameteri(T, 10240, O[M.magFilter]),
      r.texParameteri(T, 10241, O[M.minFilter])) : (r.texParameteri(T, 10242, 33071),
      r.texParameteri(T, 10243, 33071),
    (T === 32879 || T === 35866) && r.texParameteri(T, 32882, 33071),
    (M.wrapS !== Rt || M.wrapT !== Rt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
      r.texParameteri(T, 10240, P(M.magFilter)),
      r.texParameteri(T, 10241, P(M.minFilter)),
    M.minFilter !== ft && M.minFilter !== Et && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
    e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (M.magFilter === ft || M.minFilter !== fr && M.minFilter !== mi || M.type === yn && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === gi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (r.texParameterf(T, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())),
        n.get(M).__currentAnisotropy = M.anisotropy)
    }
  }
  function ue(T, M) {
    let V = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0,
      M.addEventListener("dispose", G));
    const te = M.source;
    let ne = f.get(te);
    ne === void 0 && (ne = {},
      f.set(te, ne));
    const ae = Y(M);
    if (ae !== T.__cacheKey) {
      ne[ae] === void 0 && (ne[ae] = {
        texture: r.createTexture(),
        usedTimes: 0
      },
        o.memory.textures++,
        V = !0),
        ne[ae].usedTimes++;
      const xe = ne[T.__cacheKey];
      xe !== void 0 && (ne[T.__cacheKey].usedTimes--,
      xe.usedTimes === 0 && F(M)),
        T.__cacheKey = ae,
        T.__webglTexture = ne[ae].texture
    }
    return V
  }
  function de(T, M, V) {
    let te = 3553;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (te = 35866),
    M.isData3DTexture && (te = 32879);
    const ne = ue(T, M)
      , ae = M.source;
    t.bindTexture(te, T.__webglTexture, 33984 + V);
    const xe = n.get(ae);
    if (ae.version !== xe.__version || ne === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, M.flipY),
        r.pixelStorei(37441, M.premultiplyAlpha),
        r.pixelStorei(3317, M.unpackAlignment),
        r.pixelStorei(37443, 0);
      const C = y(M) && S(M.image) === !1;
      let I = x(M.image, C, !1, u);
      I = lt(M, I);
      const oe = S(I) || a
        , se = s.convert(M.format, M.encoding);
      let me = s.convert(M.type)
        , _e = _(M.internalFormat, se, me, M.encoding, M.isVideoTexture);
      ce(te, M, oe);
      let ge;
      const Ce = M.mipmaps
        , Ie = a && M.isVideoTexture !== !0
        , Oe = xe.__version === void 0 || ne === !0
        , R = A(M, I, oe);
      if (M.isDepthTexture)
        _e = 6402,
          a ? M.type === yn ? _e = 36012 : M.type === vn ? _e = 33190 : M.type === jn ? _e = 35056 : _e = 33189 : M.type === yn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
        M.format === Mn && _e === 6402 && M.type !== Mo && M.type !== vn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
          M.type = vn,
          me = s.convert(M.type)),
        M.format === Kn && _e === 6402 && (_e = 34041,
        M.type !== jn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
          M.type = jn,
          me = s.convert(M.type))),
        Oe && (Ie ? t.texStorage2D(3553, 1, _e, I.width, I.height) : t.texImage2D(3553, 0, _e, I.width, I.height, 0, se, me, null));
      else if (M.isDataTexture)
        if (Ce.length > 0 && oe) {
          Ie && Oe && t.texStorage2D(3553, R, _e, Ce[0].width, Ce[0].height);
          for (let H = 0, Z = Ce.length; H < Z; H++)
            ge = Ce[H],
              Ie ? t.texSubImage2D(3553, H, 0, 0, ge.width, ge.height, se, me, ge.data) : t.texImage2D(3553, H, _e, ge.width, ge.height, 0, se, me, ge.data);
          M.generateMipmaps = !1
        } else
          Ie ? (Oe && t.texStorage2D(3553, R, _e, I.width, I.height),
            t.texSubImage2D(3553, 0, 0, 0, I.width, I.height, se, me, I.data)) : t.texImage2D(3553, 0, _e, I.width, I.height, 0, se, me, I.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Ie && Oe && t.texStorage3D(35866, R, _e, Ce[0].width, Ce[0].height, I.depth);
          for (let H = 0, Z = Ce.length; H < Z; H++)
            ge = Ce[H],
              M.format !== Pt ? se !== null ? Ie ? t.compressedTexSubImage3D(35866, H, 0, 0, 0, ge.width, ge.height, I.depth, se, ge.data, 0, 0) : t.compressedTexImage3D(35866, H, _e, ge.width, ge.height, I.depth, 0, ge.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? t.texSubImage3D(35866, H, 0, 0, 0, ge.width, ge.height, I.depth, se, me, ge.data) : t.texImage3D(35866, H, _e, ge.width, ge.height, I.depth, 0, se, me, ge.data)
        } else {
          Ie && Oe && t.texStorage2D(3553, R, _e, Ce[0].width, Ce[0].height);
          for (let H = 0, Z = Ce.length; H < Z; H++)
            ge = Ce[H],
              M.format !== Pt ? se !== null ? Ie ? t.compressedTexSubImage2D(3553, H, 0, 0, ge.width, ge.height, se, ge.data) : t.compressedTexImage2D(3553, H, _e, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? t.texSubImage2D(3553, H, 0, 0, ge.width, ge.height, se, me, ge.data) : t.texImage2D(3553, H, _e, ge.width, ge.height, 0, se, me, ge.data)
        }
      else if (M.isDataArrayTexture)
        Ie ? (Oe && t.texStorage3D(35866, R, _e, I.width, I.height, I.depth),
          t.texSubImage3D(35866, 0, 0, 0, 0, I.width, I.height, I.depth, se, me, I.data)) : t.texImage3D(35866, 0, _e, I.width, I.height, I.depth, 0, se, me, I.data);
      else if (M.isData3DTexture)
        Ie ? (Oe && t.texStorage3D(32879, R, _e, I.width, I.height, I.depth),
          t.texSubImage3D(32879, 0, 0, 0, 0, I.width, I.height, I.depth, se, me, I.data)) : t.texImage3D(32879, 0, _e, I.width, I.height, I.depth, 0, se, me, I.data);
      else if (M.isFramebufferTexture) {
        if (Oe)
          if (Ie)
            t.texStorage2D(3553, R, _e, I.width, I.height);
          else {
            let H = I.width
              , Z = I.height;
            for (let le = 0; le < R; le++)
              t.texImage2D(3553, le, _e, H, Z, 0, se, me, null),
                H >>= 1,
                Z >>= 1
          }
      } else if (Ce.length > 0 && oe) {
        Ie && Oe && t.texStorage2D(3553, R, _e, Ce[0].width, Ce[0].height);
        for (let H = 0, Z = Ce.length; H < Z; H++)
          ge = Ce[H],
            Ie ? t.texSubImage2D(3553, H, 0, 0, se, me, ge) : t.texImage2D(3553, H, _e, se, me, ge);
        M.generateMipmaps = !1
      } else
        Ie ? (Oe && t.texStorage2D(3553, R, _e, I.width, I.height),
          t.texSubImage2D(3553, 0, 0, 0, se, me, I)) : t.texImage2D(3553, 0, _e, se, me, I);
      b(M, oe) && L(te),
        xe.__version = ae.version,
      M.onUpdate && M.onUpdate(M)
    }
    T.__version = M.version
  }
  function he(T, M, V) {
    if (M.image.length !== 6)
      return;
    const te = ue(T, M)
      , ne = M.source;
    t.bindTexture(34067, T.__webglTexture, 33984 + V);
    const ae = n.get(ne);
    if (ne.version !== ae.__version || te === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, M.flipY),
        r.pixelStorei(37441, M.premultiplyAlpha),
        r.pixelStorei(3317, M.unpackAlignment),
        r.pixelStorei(37443, 0);
      const xe = M.isCompressedTexture || M.image[0].isCompressedTexture
        , C = M.image[0] && M.image[0].isDataTexture
        , I = [];
      for (let H = 0; H < 6; H++)
        !xe && !C ? I[H] = x(M.image[H], !1, !0, l) : I[H] = C ? M.image[H].image : M.image[H],
          I[H] = lt(M, I[H]);
      const oe = I[0]
        , se = S(oe) || a
        , me = s.convert(M.format, M.encoding)
        , _e = s.convert(M.type)
        , ge = _(M.internalFormat, me, _e, M.encoding)
        , Ce = a && M.isVideoTexture !== !0
        , Ie = ae.__version === void 0 || te === !0;
      let Oe = A(M, oe, se);
      ce(34067, M, se);
      let R;
      if (xe) {
        Ce && Ie && t.texStorage2D(34067, Oe, ge, oe.width, oe.height);
        for (let H = 0; H < 6; H++) {
          R = I[H].mipmaps;
          for (let Z = 0; Z < R.length; Z++) {
            const le = R[Z];
            M.format !== Pt ? me !== null ? Ce ? t.compressedTexSubImage2D(34069 + H, Z, 0, 0, le.width, le.height, me, le.data) : t.compressedTexImage2D(34069 + H, Z, ge, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ce ? t.texSubImage2D(34069 + H, Z, 0, 0, le.width, le.height, me, _e, le.data) : t.texImage2D(34069 + H, Z, ge, le.width, le.height, 0, me, _e, le.data)
          }
        }
      } else {
        R = M.mipmaps,
        Ce && Ie && (R.length > 0 && Oe++,
          t.texStorage2D(34067, Oe, ge, I[0].width, I[0].height));
        for (let H = 0; H < 6; H++)
          if (C) {
            Ce ? t.texSubImage2D(34069 + H, 0, 0, 0, I[H].width, I[H].height, me, _e, I[H].data) : t.texImage2D(34069 + H, 0, ge, I[H].width, I[H].height, 0, me, _e, I[H].data);
            for (let Z = 0; Z < R.length; Z++) {
              const fe = R[Z].image[H].image;
              Ce ? t.texSubImage2D(34069 + H, Z + 1, 0, 0, fe.width, fe.height, me, _e, fe.data) : t.texImage2D(34069 + H, Z + 1, ge, fe.width, fe.height, 0, me, _e, fe.data)
            }
          } else {
            Ce ? t.texSubImage2D(34069 + H, 0, 0, 0, me, _e, I[H]) : t.texImage2D(34069 + H, 0, ge, me, _e, I[H]);
            for (let Z = 0; Z < R.length; Z++) {
              const le = R[Z];
              Ce ? t.texSubImage2D(34069 + H, Z + 1, 0, 0, me, _e, le.image[H]) : t.texImage2D(34069 + H, Z + 1, ge, me, _e, le.image[H])
            }
          }
      }
      b(M, se) && L(34067),
        ae.__version = ne.version,
      M.onUpdate && M.onUpdate(M)
    }
    T.__version = M.version
  }
  function ye(T, M, V, te, ne) {
    const ae = s.convert(V.format, V.encoding)
      , xe = s.convert(V.type)
      , C = _(V.internalFormat, ae, xe, V.encoding);
    n.get(M).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, C, M.width, M.height, M.depth, 0, ae, xe, null) : t.texImage2D(ne, 0, C, M.width, M.height, 0, ae, xe, null)),
      t.bindFramebuffer(36160, T),
      ze(M) ? p.framebufferTexture2DMultisampleEXT(36160, te, ne, n.get(V).__webglTexture, 0, Ge(M)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && r.framebufferTexture2D(36160, te, ne, n.get(V).__webglTexture, 0),
      t.bindFramebuffer(36160, null)
  }
  function Se(T, M, V) {
    if (r.bindRenderbuffer(36161, T),
    M.depthBuffer && !M.stencilBuffer) {
      let te = 33189;
      if (V || ze(M)) {
        const ne = M.depthTexture;
        ne && ne.isDepthTexture && (ne.type === yn ? te = 36012 : ne.type === vn && (te = 33190));
        const ae = Ge(M);
        ze(M) ? p.renderbufferStorageMultisampleEXT(36161, ae, te, M.width, M.height) : r.renderbufferStorageMultisample(36161, ae, te, M.width, M.height)
      } else
        r.renderbufferStorage(36161, te, M.width, M.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, T)
    } else if (M.depthBuffer && M.stencilBuffer) {
      const te = Ge(M);
      V && ze(M) === !1 ? r.renderbufferStorageMultisample(36161, te, 35056, M.width, M.height) : ze(M) ? p.renderbufferStorageMultisampleEXT(36161, te, 35056, M.width, M.height) : r.renderbufferStorage(36161, 34041, M.width, M.height),
        r.framebufferRenderbuffer(36160, 33306, 36161, T)
    } else {
      const te = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let ne = 0; ne < te.length; ne++) {
        const ae = te[ne]
          , xe = s.convert(ae.format, ae.encoding)
          , C = s.convert(ae.type)
          , I = _(ae.internalFormat, xe, C, ae.encoding)
          , oe = Ge(M);
        V && ze(M) === !1 ? r.renderbufferStorageMultisample(36161, oe, I, M.width, M.height) : ze(M) ? p.renderbufferStorageMultisampleEXT(36161, oe, I, M.width, M.height) : r.renderbufferStorage(36161, I, M.width, M.height)
      }
    }
    r.bindRenderbuffer(36161, null)
  }
  function Ee(T, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, T),
      !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width,
      M.depthTexture.image.height = M.height,
      M.depthTexture.needsUpdate = !0),
      Q(M.depthTexture, 0);
    const te = n.get(M.depthTexture).__webglTexture
      , ne = Ge(M);
    if (M.depthTexture.format === Mn)
      ze(M) ? p.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, te, 0, ne) : r.framebufferTexture2D(36160, 36096, 3553, te, 0);
    else if (M.depthTexture.format === Kn)
      ze(M) ? p.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, te, 0, ne) : r.framebufferTexture2D(36160, 33306, 3553, te, 0);
    else
      throw new Error("Unknown depthTexture format")
  }
  function De(T) {
    const M = n.get(T)
      , V = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Ee(M.__webglFramebuffer, T)
    } else if (V) {
      M.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(36160, M.__webglFramebuffer[te]),
          M.__webglDepthbuffer[te] = r.createRenderbuffer(),
          Se(M.__webglDepthbuffer[te], T, !1)
    } else
      t.bindFramebuffer(36160, M.__webglFramebuffer),
        M.__webglDepthbuffer = r.createRenderbuffer(),
        Se(M.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(36160, null)
  }
  function Ze(T, M, V) {
    const te = n.get(T);
    M !== void 0 && ye(te.__webglFramebuffer, T, T.texture, 36064, 3553),
    V !== void 0 && De(T)
  }
  function ot(T) {
    const M = T.texture
      , V = n.get(T)
      , te = n.get(M);
    T.addEventListener("dispose", K),
    T.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = r.createTexture()),
      te.__version = M.version,
      o.memory.textures++);
    const ne = T.isWebGLCubeRenderTarget === !0
      , ae = T.isWebGLMultipleRenderTargets === !0
      , xe = S(T) || a;
    if (ne) {
      V.__webglFramebuffer = [];
      for (let C = 0; C < 6; C++)
        V.__webglFramebuffer[C] = r.createFramebuffer()
    } else {
      if (V.__webglFramebuffer = r.createFramebuffer(),
        ae)
        if (i.drawBuffers) {
          const C = T.texture;
          for (let I = 0, oe = C.length; I < oe; I++) {
            const se = n.get(C[I]);
            se.__webglTexture === void 0 && (se.__webglTexture = r.createTexture(),
              o.memory.textures++)
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && T.samples > 0 && ze(T) === !1) {
        const C = ae ? M : [M];
        V.__webglMultisampledFramebuffer = r.createFramebuffer(),
          V.__webglColorRenderbuffer = [],
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let I = 0; I < C.length; I++) {
          const oe = C[I];
          V.__webglColorRenderbuffer[I] = r.createRenderbuffer(),
            r.bindRenderbuffer(36161, V.__webglColorRenderbuffer[I]);
          const se = s.convert(oe.format, oe.encoding)
            , me = s.convert(oe.type)
            , _e = _(oe.internalFormat, se, me, oe.encoding, T.isXRRenderTarget === !0)
            , ge = Ge(T);
          r.renderbufferStorageMultisample(36161, ge, _e, T.width, T.height),
            r.framebufferRenderbuffer(36160, 36064 + I, 36161, V.__webglColorRenderbuffer[I])
        }
        r.bindRenderbuffer(36161, null),
        T.depthBuffer && (V.__webglDepthRenderbuffer = r.createRenderbuffer(),
          Se(V.__webglDepthRenderbuffer, T, !0)),
          t.bindFramebuffer(36160, null)
      }
    }
    if (ne) {
      t.bindTexture(34067, te.__webglTexture),
        ce(34067, M, xe);
      for (let C = 0; C < 6; C++)
        ye(V.__webglFramebuffer[C], T, M, 36064, 34069 + C);
      b(M, xe) && L(34067),
        t.unbindTexture()
    } else if (ae) {
      const C = T.texture;
      for (let I = 0, oe = C.length; I < oe; I++) {
        const se = C[I]
          , me = n.get(se);
        t.bindTexture(3553, me.__webglTexture),
          ce(3553, se, xe),
          ye(V.__webglFramebuffer, T, se, 36064 + I, 3553),
        b(se, xe) && L(3553)
      }
      t.unbindTexture()
    } else {
      let C = 3553;
      (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (a ? C = T.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),
        t.bindTexture(C, te.__webglTexture),
        ce(C, M, xe),
        ye(V.__webglFramebuffer, T, M, 36064, C),
      b(M, xe) && L(C),
        t.unbindTexture()
    }
    T.depthBuffer && De(T)
  }
  function Ke(T) {
    const M = S(T) || a
      , V = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let te = 0, ne = V.length; te < ne; te++) {
      const ae = V[te];
      if (b(ae, M)) {
        const xe = T.isWebGLCubeRenderTarget ? 34067 : 3553
          , C = n.get(ae).__webglTexture;
        t.bindTexture(xe, C),
          L(xe),
          t.unbindTexture()
      }
    }
  }
  function Je(T) {
    if (a && T.samples > 0 && ze(T) === !1) {
      const M = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture]
        , V = T.width
        , te = T.height;
      let ne = 16384;
      const ae = []
        , xe = T.stencilBuffer ? 33306 : 36096
        , C = n.get(T)
        , I = T.isWebGLMultipleRenderTargets === !0;
      if (I)
        for (let oe = 0; oe < M.length; oe++)
          t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + oe, 36161, null),
            t.bindFramebuffer(36160, C.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + oe, 3553, null, 0);
      t.bindFramebuffer(36008, C.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, C.__webglFramebuffer);
      for (let oe = 0; oe < M.length; oe++) {
        ae.push(36064 + oe),
        T.depthBuffer && ae.push(xe);
        const se = C.__ignoreDepthValues !== void 0 ? C.__ignoreDepthValues : !1;
        if (se === !1 && (T.depthBuffer && (ne |= 256),
        T.stencilBuffer && (ne |= 1024)),
        I && r.framebufferRenderbuffer(36008, 36064, 36161, C.__webglColorRenderbuffer[oe]),
        se === !0 && (r.invalidateFramebuffer(36008, [xe]),
          r.invalidateFramebuffer(36009, [xe])),
          I) {
          const me = n.get(M[oe]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, me, 0)
        }
        r.blitFramebuffer(0, 0, V, te, 0, 0, V, te, ne, 9728),
        m && r.invalidateFramebuffer(36008, ae)
      }
      if (t.bindFramebuffer(36008, null),
        t.bindFramebuffer(36009, null),
        I)
        for (let oe = 0; oe < M.length; oe++) {
          t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + oe, 36161, C.__webglColorRenderbuffer[oe]);
          const se = n.get(M[oe]).__webglTexture;
          t.bindFramebuffer(36160, C.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + oe, 3553, se, 0)
        }
      t.bindFramebuffer(36009, C.__webglMultisampledFramebuffer)
    }
  }
  function Ge(T) {
    return Math.min(d, T.samples)
  }
  function ze(T) {
    const M = n.get(T);
    return a && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1
  }
  function mt(T) {
    const M = o.render.frame;
    g.get(T) !== M && (g.set(T, M),
      T.update())
  }
  function lt(T, M) {
    const V = T.encoding
      , te = T.format
      , ne = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || T.format === is || V !== bn && (V === ke ? a === !1 ? e.has("EXT_sRGB") === !0 && te === Pt ? (T.format = is,
      T.minFilter = Et,
      T.generateMipmaps = !1) : M = wo.sRGBToLinear(M) : (te !== Pt || ne !== Sn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", V)),
      M
  }
  this.allocateTextureUnit = j,
    this.resetTextureUnits = ee,
    this.setTexture2D = Q,
    this.setTexture2DArray = pe,
    this.setTexture3D = B,
    this.setTextureCube = $,
    this.rebindTextures = Ze,
    this.setupRenderTarget = ot,
    this.updateRenderTargetMipmap = Ke,
    this.updateMultisampleRenderTarget = Je,
    this.setupDepthRenderbuffer = De,
    this.setupFrameBufferTexture = ye,
    this.useMultisampledRTT = ze
}
function _p(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o=null) {
    let a;
    if (s === Sn)
      return 5121;
    if (s === tc)
      return 32819;
    if (s === nc)
      return 32820;
    if (s === Jl)
      return 5120;
    if (s === Ql)
      return 5122;
    if (s === Mo)
      return 5123;
    if (s === ec)
      return 5124;
    if (s === vn)
      return 5125;
    if (s === yn)
      return 5126;
    if (s === gi)
      return n ? 5131 : (a = e.get("OES_texture_half_float"),
        a !== null ? a.HALF_FLOAT_OES : null);
    if (s === ic)
      return 6406;
    if (s === Pt)
      return 6408;
    if (s === rc)
      return 6409;
    if (s === sc)
      return 6410;
    if (s === Mn)
      return 6402;
    if (s === Kn)
      return 34041;
    if (s === is)
      return a = e.get("EXT_sRGB"),
        a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === ac)
      return 6403;
    if (s === oc)
      return 36244;
    if (s === lc)
      return 33319;
    if (s === cc)
      return 33320;
    if (s === uc)
      return 36249;
    if (s === pr || s === mr || s === gr || s === _r)
      if (o === ke)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"),
        a !== null) {
          if (s === pr)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === mr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === gr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === _r)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"),
      a !== null) {
        if (s === pr)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === mr)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === gr)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === _r)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
      } else
        return null;
    if (s === Os || s === Us || s === zs || s === Bs)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"),
      a !== null) {
        if (s === Os)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Us)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === zs)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Bs)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
      } else
        return null;
    if (s === hc)
      return a = e.get("WEBGL_compressed_texture_etc1"),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === ks || s === Gs)
      if (a = e.get("WEBGL_compressed_texture_etc"),
      a !== null) {
        if (s === ks)
          return o === ke ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Gs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
      } else
        return null;
    if (s === Vs || s === Hs || s === Ws || s === qs || s === Xs || s === js || s === Ys || s === $s || s === Zs || s === Ks || s === Js || s === Qs || s === ea || s === ta)
      if (a = e.get("WEBGL_compressed_texture_astc"),
      a !== null) {
        if (s === Vs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Hs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ws)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === qs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Xs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === js)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ys)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === $s)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Zs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ks)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Js)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Qs)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ea)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === ta)
          return o === ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
      } else
        return null;
    if (s === xr)
      if (a = e.get("EXT_texture_compression_bptc"),
      a !== null) {
        if (s === xr)
          return o === ke ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
      } else
        return null;
    if (s === dc || s === na || s === ia || s === ra)
      if (a = e.get("EXT_texture_compression_rgtc"),
      a !== null) {
        if (s === xr)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === na)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ia)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ra)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
      } else
        return null;
    return s === jn ? n ? 34042 : (a = e.get("WEBGL_depth_texture"),
      a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null
  }
  return {
    convert: i
  }
}
class xp extends Lt {
  constructor(e=[]) {
    super(),
      this.isArrayCamera = !0,
      this.cameras = e
  }
}
class qi extends it {
  constructor() {
    super(),
      this.isGroup = !0,
      this.type = "Group"
  }
}
const vp = {
  type: "move"
};
class Wr {
  constructor() {
    this._targetRay = null,
      this._grip = null,
      this._hand = null
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new qi,
      this._hand.matrixAutoUpdate = !1,
      this._hand.visible = !1,
      this._hand.joints = {},
      this._hand.inputState = {
        pinching: !1
      }),
      this._hand
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new qi,
      this._targetRay.matrixAutoUpdate = !1,
      this._targetRay.visible = !1,
      this._targetRay.hasLinearVelocity = !1,
      this._targetRay.linearVelocity = new D,
      this._targetRay.hasAngularVelocity = !1,
      this._targetRay.angularVelocity = new D),
      this._targetRay
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new qi,
      this._grip.matrixAutoUpdate = !1,
      this._grip.visible = !1,
      this._grip.hasLinearVelocity = !1,
      this._grip.linearVelocity = new D,
      this._grip.hasAngularVelocity = !1,
      this._grip.angularVelocity = new D),
      this._grip
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e),
    this._grip !== null && this._grip.dispatchEvent(e),
    this._hand !== null && this._hand.dispatchEvent(e),
      this
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n)
    }
    return this.dispatchEvent({
      type: "connected",
      data: e
    }),
      this
  }
  disconnect(e) {
    return this.dispatchEvent({
      type: "disconnected",
      data: e
    }),
    this._targetRay !== null && (this._targetRay.visible = !1),
    this._grip !== null && (this._grip.visible = !1),
    this._hand !== null && (this._hand.visible = !1),
      this
  }
  update(e, t, n) {
    let i = null
      , s = null
      , o = null;
    const a = this._targetRay
      , c = this._grip
      , l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const h of e.hand.values()) {
          const f = t.getJointPose(h, n)
            , v = this._getHandJoint(l, h);
          f !== null && (v.matrix.fromArray(f.transform.matrix),
            v.matrix.decompose(v.position, v.rotation, v.scale),
            v.jointRadius = f.radius),
            v.visible = f !== null
        }
        const u = l.joints["index-finger-tip"]
          , d = l.joints["thumb-tip"]
          , p = u.position.distanceTo(d.position)
          , m = .02
          , g = .005;
        l.inputState.pinching && p > m + g ? (l.inputState.pinching = !1,
          this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !l.inputState.pinching && p <= m - g && (l.inputState.pinching = !0,
          this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }))
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n),
        s !== null && (c.matrix.fromArray(s.transform.matrix),
          c.matrix.decompose(c.position, c.rotation, c.scale),
          s.linearVelocity ? (c.hasLinearVelocity = !0,
            c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1,
          s.angularVelocity ? (c.hasAngularVelocity = !0,
            c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n),
      i === null && s !== null && (i = s),
      i !== null && (a.matrix.fromArray(i.transform.matrix),
        a.matrix.decompose(a.position, a.rotation, a.scale),
        i.linearVelocity ? (a.hasLinearVelocity = !0,
          a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1,
        i.angularVelocity ? (a.hasAngularVelocity = !0,
          a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1,
        this.dispatchEvent(vp)))
    }
    return a !== null && (a.visible = i !== null),
    c !== null && (c.visible = s !== null),
    l !== null && (l.visible = o !== null),
      this
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new qi;
      n.matrixAutoUpdate = !1,
        n.visible = !1,
        e.joints[t.jointName] = n,
        e.add(n)
    }
    return e.joints[t.jointName]
  }
}
class yp extends St {
  constructor(e, t, n, i, s, o, a, c, l, u) {
    if (u = u !== void 0 ? u : Mn,
    u !== Mn && u !== Kn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Mn && (n = vn),
    n === void 0 && u === Kn && (n = jn),
      super(null, i, s, o, a, c, u, n, l),
      this.isDepthTexture = !0,
      this.image = {
        width: e,
        height: t
      },
      this.magFilter = a !== void 0 ? a : ft,
      this.minFilter = c !== void 0 ? c : ft,
      this.flipY = !1,
      this.generateMipmaps = !1
  }
}
class Mp extends An {
  constructor(e, t) {
    super();
    const n = this;
    let i = null
      , s = 1
      , o = null
      , a = "local-floor"
      , c = 1
      , l = null
      , u = null
      , d = null
      , p = null
      , m = null
      , g = null;
    const h = t.getContextAttributes();
    let f = null
      , v = null;
    const w = []
      , x = []
      , S = new Set
      , y = new Map
      , b = new Lt;
    b.layers.enable(1),
      b.viewport = new nt;
    const L = new Lt;
    L.layers.enable(2),
      L.viewport = new nt;
    const _ = [b, L]
      , A = new xp;
    A.layers.enable(1),
      A.layers.enable(2);
    let P = null
      , G = null;
    this.cameraAutoUpdate = !0,
      this.enabled = !1,
      this.isPresenting = !1,
      this.getController = function(B) {
        let$ = w[B];
        return $ === void 0 && ($ = new Wr,
          w[B] = $),
          $.getTargetRaySpace()
      }
      ,
      this.getControllerGrip = function(B) {
        let$ = w[B];
        return $ === void 0 && ($ = new Wr,
          w[B] = $),
          $.getGripSpace()
      }
      ,
      this.getHand = function(B) {
        let$ = w[B];
        return $ === void 0 && ($ = new Wr,
          w[B] = $),
          $.getHandSpace()
      }
    ;
    function K(B) {
      const $ = x.indexOf(B.inputSource);
      if ($ === -1)
        return;
      const re = w[$];
      re !== void 0 && re.dispatchEvent({
        type: B.type,
        data: B.inputSource
      })
    }
    function z() {
      i.removeEventListener("select", K),
        i.removeEventListener("selectstart", K),
        i.removeEventListener("selectend", K),
        i.removeEventListener("squeeze", K),
        i.removeEventListener("squeezestart", K),
        i.removeEventListener("squeezeend", K),
        i.removeEventListener("end", z),
        i.removeEventListener("inputsourceschange", F);
      for (let B = 0; B < w.length; B++) {
        const $ = x[B];
        $ !== null && (x[B] = null,
          w[B].disconnect($))
      }
      P = null,
        G = null,
        e.setRenderTarget(f),
        m = null,
        p = null,
        d = null,
        i = null,
        v = null,
        pe.stop(),
        n.isPresenting = !1,
        n.dispatchEvent({
          type: "sessionend"
        })
    }
    this.setFramebufferScaleFactor = function(B) {
      s = B,
      n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
    }
      ,
      this.setReferenceSpaceType = function(B) {
        a = B,
        n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
      }
      ,
      this.getReferenceSpace = function() {
        return l || o
      }
      ,
      this.setReferenceSpace = function(B) {
        l = B
      }
      ,
      this.getBaseLayer = function() {
        return p !== null ? p : m
      }
      ,
      this.getBinding = function() {
        return d
      }
      ,
      this.getFrame = function() {
        return g
      }
      ,
      this.getSession = function() {
        return i
      }
      ,
      this.setSession = async function(B) {
        if (i = B,
        i !== null) {
          if (f = e.getRenderTarget(),
            i.addEventListener("select", K),
            i.addEventListener("selectstart", K),
            i.addEventListener("selectend", K),
            i.addEventListener("squeeze", K),
            i.addEventListener("squeezestart", K),
            i.addEventListener("squeezeend", K),
            i.addEventListener("end", z),
            i.addEventListener("inputsourceschange", F),
          h.xrCompatible !== !0 && await t.makeXRCompatible(),
          i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
            const $ = {
              antialias: i.renderState.layers === void 0 ? h.antialias : !0,
              alpha: h.alpha,
              depth: h.depth,
              stencil: h.stencil,
              framebufferScaleFactor: s
            };
            m = new XRWebGLLayer(i,t,$),
              i.updateRenderState({
                baseLayer: m
              }),
              v = new En(m.framebufferWidth,m.framebufferHeight,{
                format: Pt,
                type: Sn,
                encoding: e.outputEncoding,
                stencilBuffer: h.stencil
              })
          } else {
            let$ = null
              , re = null
              , O = null;
            h.depth && (O = h.stencil ? 35056 : 33190,
              $ = h.stencil ? Kn : Mn,
              re = h.stencil ? jn : vn);
            const ce = {
              colorFormat: 32856,
              depthFormat: O,
              scaleFactor: s
            };
            d = new XRWebGLBinding(i,t),
              p = d.createProjectionLayer(ce),
              i.updateRenderState({
                layers: [p]
              }),
              v = new En(p.textureWidth,p.textureHeight,{
                format: Pt,
                type: Sn,
                depthTexture: new yp(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),
                stencilBuffer: h.stencil,
                encoding: e.outputEncoding,
                samples: h.antialias ? 4 : 0
              });
            const ue = e.properties.get(v);
            ue.__ignoreDepthValues = p.ignoreDepthValues
          }
          v.isXRRenderTarget = !0,
            this.setFoveation(c),
            l = null,
            o = await i.requestReferenceSpace(a),
            pe.setContext(i),
            pe.start(),
            n.isPresenting = !0,
            n.dispatchEvent({
              type: "sessionstart"
            })
        }
      }
    ;
    function F(B) {
      for (let$ = 0; $ < B.removed.length; $++) {
        const re = B.removed[$]
          , O = x.indexOf(re);
        O >= 0 && (x[O] = null,
          w[O].disconnect(re))
      }
      for (let$ = 0; $ < B.added.length; $++) {
        const re = B.added[$];
        let O = x.indexOf(re);
        if (O === -1) {
          for (let ue = 0; ue < w.length; ue++)
            if (ue >= x.length) {
              x.push(re),
                O = ue;
              break
            } else if (x[ue] === null) {
              x[ue] = re,
                O = ue;
              break
            }
          if (O === -1)
            break
        }
        const ce = w[O];
        ce && ce.connect(re)
      }
    }
    const W = new D
      , J = new D;
    function ee(B, $, re) {
      W.setFromMatrixPosition($.matrixWorld),
        J.setFromMatrixPosition(re.matrixWorld);
      const O = W.distanceTo(J)
        , ce = $.projectionMatrix.elements
        , ue = re.projectionMatrix.elements
        , de = ce[14] / (ce[10] - 1)
        , he = ce[14] / (ce[10] + 1)
        , ye = (ce[9] + 1) / ce[5]
        , Se = (ce[9] - 1) / ce[5]
        , Ee = (ce[8] - 1) / ce[0]
        , De = (ue[8] + 1) / ue[0]
        , Ze = de * Ee
        , ot = de * De
        , Ke = O / (-Ee + De)
        , Je = Ke * -Ee;
      $.matrixWorld.decompose(B.position, B.quaternion, B.scale),
        B.translateX(Je),
        B.translateZ(Ke),
        B.matrixWorld.compose(B.position, B.quaternion, B.scale),
        B.matrixWorldInverse.copy(B.matrixWorld).invert();
      const Ge = de + Ke
        , ze = he + Ke
        , mt = Ze - Je
        , lt = ot + (O - Je)
        , T = ye * he / ze * Ge
        , M = Se * he / ze * Ge;
      B.projectionMatrix.makePerspective(mt, lt, T, M, Ge, ze)
    }
    function j(B, $) {
      $ === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices($.matrixWorld, B.matrix),
        B.matrixWorldInverse.copy(B.matrixWorld).invert()
    }
    this.updateCamera = function(B) {
      if (i === null)
        return;
      A.near = L.near = b.near = B.near,
        A.far = L.far = b.far = B.far,
      (P !== A.near || G !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }),
        P = A.near,
        G = A.far);
      const $ = B.parent
        , re = A.cameras;
      j(A, $);
      for (let ce = 0; ce < re.length; ce++)
        j(re[ce], $);
      A.matrixWorld.decompose(A.position, A.quaternion, A.scale),
        B.matrix.copy(A.matrix),
        B.matrix.decompose(B.position, B.quaternion, B.scale);
      const O = B.children;
      for (let ce = 0, ue = O.length; ce < ue; ce++)
        O[ce].updateMatrixWorld(!0);
      re.length === 2 ? ee(A, b, L) : A.projectionMatrix.copy(b.projectionMatrix)
    }
      ,
      this.getCamera = function() {
        return A
      }
      ,
      this.getFoveation = function() {
        if (!(p === null && m === null))
          return c
      }
      ,
      this.setFoveation = function(B) {
        c = B,
        p !== null && (p.fixedFoveation = B),
        m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = B)
      }
      ,
      this.getPlanes = function() {
        return S
      }
    ;
    let Y = null;
    function Q(B, $) {
      if (u = $.getViewerPose(l || o),
        g = $,
      u !== null) {
        const re = u.views;
        m !== null && (e.setRenderTargetFramebuffer(v, m.framebuffer),
          e.setRenderTarget(v));
        let O = !1;
        re.length !== A.cameras.length && (A.cameras.length = 0,
          O = !0);
        for (let ce = 0; ce < re.length; ce++) {
          const ue = re[ce];
          let de = null;
          if (m !== null)
            de = m.getViewport(ue);
          else {
            const ye = d.getViewSubImage(p, ue);
            de = ye.viewport,
            ce === 0 && (e.setRenderTargetTextures(v, ye.colorTexture, p.ignoreDepthValues ? void 0 : ye.depthStencilTexture),
              e.setRenderTarget(v))
          }
          let he = _[ce];
          he === void 0 && (he = new Lt,
            he.layers.enable(ce),
            he.viewport = new nt,
            _[ce] = he),
            he.matrix.fromArray(ue.transform.matrix),
            he.projectionMatrix.fromArray(ue.projectionMatrix),
            he.viewport.set(de.x, de.y, de.width, de.height),
          ce === 0 && A.matrix.copy(he.matrix),
          O === !0 && A.cameras.push(he)
        }
      }
      for (let re = 0; re < w.length; re++) {
        const O = x[re]
          , ce = w[re];
        O !== null && ce !== void 0 && ce.update(O, $, l || o)
      }
      if (Y && Y(B, $),
        $.detectedPlanes) {
        n.dispatchEvent({
          type: "planesdetected",
          data: $.detectedPlanes
        });
        let re = null;
        for (const O of S)
          $.detectedPlanes.has(O) || (re === null && (re = []),
            re.push(O));
        if (re !== null)
          for (const O of re)
            S.delete(O),
              y.delete(O),
              n.dispatchEvent({
                type: "planeremoved",
                data: O
              });
        for (const O of $.detectedPlanes)
          if (!S.has(O))
            S.add(O),
              y.set(O, $.lastChangedTime),
              n.dispatchEvent({
                type: "planeadded",
                data: O
              });
          else {
            const ce = y.get(O);
            O.lastChangedTime > ce && (y.set(O, O.lastChangedTime),
              n.dispatchEvent({
                type: "planechanged",
                data: O
              }))
          }
      }
      g = null
    }
    const pe = new Fo;
    pe.setAnimationLoop(Q),
      this.setAnimationLoop = function(B) {
        Y = B
      }
      ,
      this.dispose = function() {}
  }
}
function Sp(r, e) {
  function t(h, f) {
    f.color.getRGB(h.fogColor.value, Do(r)),
      f.isFog ? (h.fogNear.value = f.near,
        h.fogFar.value = f.far) : f.isFogExp2 && (h.fogDensity.value = f.density)
  }
  function n(h, f, v, w, x) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(h, f) : f.isMeshToonMaterial ? (i(h, f),
      u(h, f)) : f.isMeshPhongMaterial ? (i(h, f),
      l(h, f)) : f.isMeshStandardMaterial ? (i(h, f),
      d(h, f),
    f.isMeshPhysicalMaterial && p(h, f, x)) : f.isMeshMatcapMaterial ? (i(h, f),
      m(h, f)) : f.isMeshDepthMaterial ? i(h, f) : f.isMeshDistanceMaterial ? (i(h, f),
      g(h, f)) : f.isMeshNormalMaterial ? i(h, f) : f.isLineBasicMaterial ? (s(h, f),
    f.isLineDashedMaterial && o(h, f)) : f.isPointsMaterial ? a(h, f, v, w) : f.isSpriteMaterial ? c(h, f) : f.isShadowMaterial ? (h.color.value.copy(f.color),
      h.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1)
  }
  function i(h, f) {
    h.opacity.value = f.opacity,
    f.color && h.diffuse.value.copy(f.color),
    f.emissive && h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
    f.map && (h.map.value = f.map),
    f.alphaMap && (h.alphaMap.value = f.alphaMap),
    f.bumpMap && (h.bumpMap.value = f.bumpMap,
      h.bumpScale.value = f.bumpScale,
    f.side === Mt && (h.bumpScale.value *= -1)),
    f.displacementMap && (h.displacementMap.value = f.displacementMap,
      h.displacementScale.value = f.displacementScale,
      h.displacementBias.value = f.displacementBias),
    f.emissiveMap && (h.emissiveMap.value = f.emissiveMap),
    f.normalMap && (h.normalMap.value = f.normalMap,
      h.normalScale.value.copy(f.normalScale),
    f.side === Mt && h.normalScale.value.negate()),
    f.specularMap && (h.specularMap.value = f.specularMap),
    f.alphaTest > 0 && (h.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (v && (h.envMap.value = v,
      h.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1,
      h.reflectivity.value = f.reflectivity,
      h.ior.value = f.ior,
      h.refractionRatio.value = f.refractionRatio),
      f.lightMap) {
      h.lightMap.value = f.lightMap;
      const S = r.useLegacyLights === !0 ? Math.PI : 1;
      h.lightMapIntensity.value = f.lightMapIntensity * S
    }
    f.aoMap && (h.aoMap.value = f.aoMap,
      h.aoMapIntensity.value = f.aoMapIntensity);
    let w;
    f.map ? w = f.map : f.specularMap ? w = f.specularMap : f.displacementMap ? w = f.displacementMap : f.normalMap ? w = f.normalMap : f.bumpMap ? w = f.bumpMap : f.roughnessMap ? w = f.roughnessMap : f.metalnessMap ? w = f.metalnessMap : f.alphaMap ? w = f.alphaMap : f.emissiveMap ? w = f.emissiveMap : f.clearcoatMap ? w = f.clearcoatMap : f.clearcoatNormalMap ? w = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? w = f.clearcoatRoughnessMap : f.iridescenceMap ? w = f.iridescenceMap : f.iridescenceThicknessMap ? w = f.iridescenceThicknessMap : f.specularIntensityMap ? w = f.specularIntensityMap : f.specularColorMap ? w = f.specularColorMap : f.transmissionMap ? w = f.transmissionMap : f.thicknessMap ? w = f.thicknessMap : f.sheenColorMap ? w = f.sheenColorMap : f.sheenRoughnessMap && (w = f.sheenRoughnessMap),
    w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture),
    w.matrixAutoUpdate === !0 && w.updateMatrix(),
      h.uvTransform.value.copy(w.matrix));
    let x;
    f.aoMap ? x = f.aoMap : f.lightMap && (x = f.lightMap),
    x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture),
    x.matrixAutoUpdate === !0 && x.updateMatrix(),
      h.uv2Transform.value.copy(x.matrix))
  }
  function s(h, f) {
    h.diffuse.value.copy(f.color),
      h.opacity.value = f.opacity
  }
  function o(h, f) {
    h.dashSize.value = f.dashSize,
      h.totalSize.value = f.dashSize + f.gapSize,
      h.scale.value = f.scale
  }
  function a(h, f, v, w) {
    h.diffuse.value.copy(f.color),
      h.opacity.value = f.opacity,
      h.size.value = f.size * v,
      h.scale.value = w * .5,
    f.map && (h.map.value = f.map),
    f.alphaMap && (h.alphaMap.value = f.alphaMap),
    f.alphaTest > 0 && (h.alphaTest.value = f.alphaTest);
    let x;
    f.map ? x = f.map : f.alphaMap && (x = f.alphaMap),
    x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(),
      h.uvTransform.value.copy(x.matrix))
  }
  function c(h, f) {
    h.diffuse.value.copy(f.color),
      h.opacity.value = f.opacity,
      h.rotation.value = f.rotation,
    f.map && (h.map.value = f.map),
    f.alphaMap && (h.alphaMap.value = f.alphaMap),
    f.alphaTest > 0 && (h.alphaTest.value = f.alphaTest);
    let v;
    f.map ? v = f.map : f.alphaMap && (v = f.alphaMap),
    v !== void 0 && (v.matrixAutoUpdate === !0 && v.updateMatrix(),
      h.uvTransform.value.copy(v.matrix))
  }
  function l(h, f) {
    h.specular.value.copy(f.specular),
      h.shininess.value = Math.max(f.shininess, 1e-4)
  }
  function u(h, f) {
    f.gradientMap && (h.gradientMap.value = f.gradientMap)
  }
  function d(h, f) {
    h.roughness.value = f.roughness,
      h.metalness.value = f.metalness,
    f.roughnessMap && (h.roughnessMap.value = f.roughnessMap),
    f.metalnessMap && (h.metalnessMap.value = f.metalnessMap),
    e.get(f).envMap && (h.envMapIntensity.value = f.envMapIntensity)
  }
  function p(h, f, v) {
    h.ior.value = f.ior,
    f.sheen > 0 && (h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
      h.sheenRoughness.value = f.sheenRoughness,
    f.sheenColorMap && (h.sheenColorMap.value = f.sheenColorMap),
    f.sheenRoughnessMap && (h.sheenRoughnessMap.value = f.sheenRoughnessMap)),
    f.clearcoat > 0 && (h.clearcoat.value = f.clearcoat,
      h.clearcoatRoughness.value = f.clearcoatRoughness,
    f.clearcoatMap && (h.clearcoatMap.value = f.clearcoatMap),
    f.clearcoatRoughnessMap && (h.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
    f.clearcoatNormalMap && (h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
      h.clearcoatNormalMap.value = f.clearcoatNormalMap,
    f.side === Mt && h.clearcoatNormalScale.value.negate())),
    f.iridescence > 0 && (h.iridescence.value = f.iridescence,
      h.iridescenceIOR.value = f.iridescenceIOR,
      h.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0],
      h.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1],
    f.iridescenceMap && (h.iridescenceMap.value = f.iridescenceMap),
    f.iridescenceThicknessMap && (h.iridescenceThicknessMap.value = f.iridescenceThicknessMap)),
    f.transmission > 0 && (h.transmission.value = f.transmission,
      h.transmissionSamplerMap.value = v.texture,
      h.transmissionSamplerSize.value.set(v.width, v.height),
    f.transmissionMap && (h.transmissionMap.value = f.transmissionMap),
      h.thickness.value = f.thickness,
    f.thicknessMap && (h.thicknessMap.value = f.thicknessMap),
      h.attenuationDistance.value = f.attenuationDistance,
      h.attenuationColor.value.copy(f.attenuationColor)),
      h.specularIntensity.value = f.specularIntensity,
      h.specularColor.value.copy(f.specularColor),
    f.specularIntensityMap && (h.specularIntensityMap.value = f.specularIntensityMap),
    f.specularColorMap && (h.specularColorMap.value = f.specularColorMap)
  }
  function m(h, f) {
    f.matcap && (h.matcap.value = f.matcap)
  }
  function g(h, f) {
    h.referencePosition.value.copy(f.referencePosition),
      h.nearDistance.value = f.nearDistance,
      h.farDistance.value = f.farDistance
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  }
}
function bp(r, e, t, n) {
  let i = {}
    , s = {}
    , o = [];
  const a = t.isWebGL2 ? r.getParameter(35375) : 0;
  function c(w, x) {
    const S = x.program;
    n.uniformBlockBinding(w, S)
  }
  function l(w, x) {
    let S = i[w.id];
    S === void 0 && (g(w),
      S = u(w),
      i[w.id] = S,
      w.addEventListener("dispose", f));
    const y = x.program;
    n.updateUBOMapping(w, y);
    const b = e.render.frame;
    s[w.id] !== b && (p(w),
      s[w.id] = b)
  }
  function u(w) {
    const x = d();
    w.__bindingPointIndex = x;
    const S = r.createBuffer()
      , y = w.__size
      , b = w.usage;
    return r.bindBuffer(35345, S),
      r.bufferData(35345, y, b),
      r.bindBuffer(35345, null),
      r.bindBufferBase(35345, x, S),
      S
  }
  function d() {
    for (let w = 0; w < a; w++)
      if (o.indexOf(w) === -1)
        return o.push(w),
          w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
      0
  }
  function p(w) {
    const x = i[w.id]
      , S = w.uniforms
      , y = w.__cache;
    r.bindBuffer(35345, x);
    for (let b = 0, L = S.length; b < L; b++) {
      const _ = S[b];
      if (m(_, b, y) === !0) {
        const A = _.__offset
          , P = Array.isArray(_.value) ? _.value : [_.value];
        let G = 0;
        for (let K = 0; K < P.length; K++) {
          const z = P[K]
            , F = h(z);
          typeof z == "number" ? (_.__data[0] = z,
            r.bufferSubData(35345, A + G, _.__data)) : z.isMatrix3 ? (_.__data[0] = z.elements[0],
            _.__data[1] = z.elements[1],
            _.__data[2] = z.elements[2],
            _.__data[3] = z.elements[0],
            _.__data[4] = z.elements[3],
            _.__data[5] = z.elements[4],
            _.__data[6] = z.elements[5],
            _.__data[7] = z.elements[0],
            _.__data[8] = z.elements[6],
            _.__data[9] = z.elements[7],
            _.__data[10] = z.elements[8],
            _.__data[11] = z.elements[0]) : (z.toArray(_.__data, G),
            G += F.storage / Float32Array.BYTES_PER_ELEMENT)
        }
        r.bufferSubData(35345, A, _.__data)
      }
    }
    r.bindBuffer(35345, null)
  }
  function m(w, x, S) {
    const y = w.value;
    if (S[x] === void 0) {
      if (typeof y == "number")
        S[x] = y;
      else {
        const b = Array.isArray(y) ? y : [y]
          , L = [];
        for (let _ = 0; _ < b.length; _++)
          L.push(b[_].clone());
        S[x] = L
      }
      return !0
    } else if (typeof y == "number") {
      if (S[x] !== y)
        return S[x] = y,
          !0
    } else {
      const b = Array.isArray(S[x]) ? S[x] : [S[x]]
        , L = Array.isArray(y) ? y : [y];
      for (let _ = 0; _ < b.length; _++) {
        const A = b[_];
        if (A.equals(L[_]) === !1)
          return A.copy(L[_]),
            !0
      }
    }
    return !1
  }
  function g(w) {
    const x = w.uniforms;
    let S = 0;
    const y = 16;
    let b = 0;
    for (let L = 0, _ = x.length; L < _; L++) {
      const A = x[L]
        , P = {
        boundary: 0,
        storage: 0
      }
        , G = Array.isArray(A.value) ? A.value : [A.value];
      for (let K = 0, z = G.length; K < z; K++) {
        const F = G[K]
          , W = h(F);
        P.boundary += W.boundary,
          P.storage += W.storage
      }
      if (A.__data = new Float32Array(P.storage / Float32Array.BYTES_PER_ELEMENT),
        A.__offset = S,
      L > 0) {
        b = S % y;
        const K = y - b;
        b !== 0 && K - P.boundary < 0 && (S += y - b,
          A.__offset = S)
      }
      S += P.storage
    }
    return b = S % y,
    b > 0 && (S += y - b),
      w.__size = S,
      w.__cache = {},
      this
  }
  function h(w) {
    const x = {
      boundary: 0,
      storage: 0
    };
    return typeof w == "number" ? (x.boundary = 4,
      x.storage = 4) : w.isVector2 ? (x.boundary = 8,
      x.storage = 8) : w.isVector3 || w.isColor ? (x.boundary = 16,
      x.storage = 12) : w.isVector4 ? (x.boundary = 16,
      x.storage = 16) : w.isMatrix3 ? (x.boundary = 48,
      x.storage = 48) : w.isMatrix4 ? (x.boundary = 64,
      x.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w),
      x
  }
  function f(w) {
    const x = w.target;
    x.removeEventListener("dispose", f);
    const S = o.indexOf(x.__bindingPointIndex);
    o.splice(S, 1),
      r.deleteBuffer(i[x.id]),
      delete i[x.id],
      delete s[x.id]
  }
  function v() {
    for (const w in i)
      r.deleteBuffer(i[w]);
    o = [],
      i = {},
      s = {}
  }
  return {
    bind: c,
    update: l,
    dispose: v
  }
}
function wp() {
  const r = Qi("canvas");
  return r.style.display = "block",
    r
}
function _s(r={}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : wp()
    , t = r.context !== void 0 ? r.context : null
    , n = r.depth !== void 0 ? r.depth : !0
    , i = r.stencil !== void 0 ? r.stencil : !0
    , s = r.antialias !== void 0 ? r.antialias : !1
    , o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0
    , a = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1
    , c = r.powerPreference !== void 0 ? r.powerPreference : "default"
    , l = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = r.alpha !== void 0 ? r.alpha : !1;
  let d = null
    , p = null;
  const m = []
    , g = [];
  this.domElement = e,
    this.debug = {
      checkShaderErrors: !0
    },
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.outputEncoding = bn,
    this.useLegacyLights = !0,
    this.toneMapping = Zt,
    this.toneMappingExposure = 1;
  const h = this;
  let f = !1
    , v = 0
    , w = 0
    , x = null
    , S = -1
    , y = null;
  const b = new nt
    , L = new nt;
  let _ = null
    , A = e.width
    , P = e.height
    , G = 1
    , K = null
    , z = null;
  const F = new nt(0,0,A,P)
    , W = new nt(0,0,A,P);
  let J = !1;
  const ee = new fs;
  let j = !1
    , Y = !1
    , Q = null;
  const pe = new Ve
    , B = new D
    , $ = {
    background: null,
    fog: null,
    environment: null,
    overrideMaterial: null,
    isScene: !0
  };
  function re() {
    return x === null ? G : 1
  }
  let O = t;
  function ce(E, U) {
    for (let k = 0; k < E.length; k++) {
      const N = E[k]
        , q = e.getContext(N, U);
      if (q !== null)
        return q
    }
    return null
  }
  try {
    const E = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute"in e && e.setAttribute("data-engine", `three.js r${ds}`),
      e.addEventListener("webglcontextlost", me, !1),
      e.addEventListener("webglcontextrestored", _e, !1),
      e.addEventListener("webglcontextcreationerror", ge, !1),
    O === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (h.isWebGL1Renderer === !0 && U.shift(),
        O = ce(U, E),
      O === null)
        throw ce(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
    }
    O.getShaderPrecisionFormat === void 0 && (O.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      }
    )
  } catch (E) {
    throw console.error("THREE.WebGLRenderer: " + E.message),
      E
  }
  let ue, de, he, ye, Se, Ee, De, Ze, ot, Ke, Je, Ge, ze, mt, lt, T, M, V, te, ne, ae, xe, C, I;
  function oe() {
    ue = new Nd(O),
      de = new Cd(O,ue,r),
      ue.init(de),
      xe = new _p(O,ue,de),
      he = new mp(O,ue,de),
      ye = new Ud,
      Se = new tp,
      Ee = new gp(O,ue,he,Se,de,xe,ye),
      De = new Rd(h),
      Ze = new Id(h),
      ot = new Xc(O,de),
      C = new Td(O,ue,ot,de),
      Ke = new Fd(O,ot,ye,C),
      Je = new Gd(O,Ke,ot,ye),
      te = new kd(O,de,Ee),
      T = new Ld(Se),
      Ge = new ep(h,De,Ze,ue,de,C,T),
      ze = new Sp(h,Se),
      mt = new ip,
      lt = new cp(ue,de),
      V = new Ed(h,De,Ze,he,Je,u,o),
      M = new pp(h,Je,de),
      I = new bp(O,ye,de,he),
      ne = new Ad(O,ue,ye,de),
      ae = new Od(O,ue,ye,de),
      ye.programs = Ge.programs,
      h.capabilities = de,
      h.extensions = ue,
      h.properties = Se,
      h.renderLists = mt,
      h.shadowMap = M,
      h.state = he,
      h.info = ye
  }
  oe();
  const se = new Mp(h,O);
  this.xr = se,
    this.getContext = function() {
      return O
    }
    ,
    this.getContextAttributes = function() {
      return O.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
      const E = ue.get("WEBGL_lose_context");
      E && E.loseContext()
    }
    ,
    this.forceContextRestore = function() {
      const E = ue.get("WEBGL_lose_context");
      E && E.restoreContext()
    }
    ,
    this.getPixelRatio = function() {
      return G
    }
    ,
    this.setPixelRatio = function(E) {
      E !== void 0 && (G = E,
        this.setSize(A, P, !1))
    }
    ,
    this.getSize = function(E) {
      return E.set(A, P)
    }
    ,
    this.setSize = function(E, U, k=!0) {
      if (se.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return
      }
      A = E,
        P = U,
        e.width = Math.floor(E * G),
        e.height = Math.floor(U * G),
      k === !0 && (e.style.width = E + "px",
        e.style.height = U + "px"),
        this.setViewport(0, 0, E, U)
    }
    ,
    this.getDrawingBufferSize = function(E) {
      return E.set(A * G, P * G).floor()
    }
    ,
    this.setDrawingBufferSize = function(E, U, k) {
      A = E,
        P = U,
        G = k,
        e.width = Math.floor(E * k),
        e.height = Math.floor(U * k),
        this.setViewport(0, 0, E, U)
    }
    ,
    this.getCurrentViewport = function(E) {
      return E.copy(b)
    }
    ,
    this.getViewport = function(E) {
      return E.copy(F)
    }
    ,
    this.setViewport = function(E, U, k, N) {
      E.isVector4 ? F.set(E.x, E.y, E.z, E.w) : F.set(E, U, k, N),
        he.viewport(b.copy(F).multiplyScalar(G).floor())
    }
    ,
    this.getScissor = function(E) {
      return E.copy(W)
    }
    ,
    this.setScissor = function(E, U, k, N) {
      E.isVector4 ? W.set(E.x, E.y, E.z, E.w) : W.set(E, U, k, N),
        he.scissor(L.copy(W).multiplyScalar(G).floor())
    }
    ,
    this.getScissorTest = function() {
      return J
    }
    ,
    this.setScissorTest = function(E) {
      he.setScissorTest(J = E)
    }
    ,
    this.setOpaqueSort = function(E) {
      K = E
    }
    ,
    this.setTransparentSort = function(E) {
      z = E
    }
    ,
    this.getClearColor = function(E) {
      return E.copy(V.getClearColor())
    }
    ,
    this.setClearColor = function() {
      V.setClearColor.apply(V, arguments)
    }
    ,
    this.getClearAlpha = function() {
      return V.getClearAlpha()
    }
    ,
    this.setClearAlpha = function() {
      V.setClearAlpha.apply(V, arguments)
    }
    ,
    this.clear = function(E=!0, U=!0, k=!0) {
      let N = 0;
      E && (N |= 16384),
      U && (N |= 256),
      k && (N |= 1024),
        O.clear(N)
    }
    ,
    this.clearColor = function() {
      this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
      this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
      this.clear(!1, !1, !0)
    }
    ,
    this.dispose = function() {
      e.removeEventListener("webglcontextlost", me, !1),
        e.removeEventListener("webglcontextrestored", _e, !1),
        e.removeEventListener("webglcontextcreationerror", ge, !1),
        mt.dispose(),
        lt.dispose(),
        Se.dispose(),
        De.dispose(),
        Ze.dispose(),
        Je.dispose(),
        C.dispose(),
        I.dispose(),
        Ge.dispose(),
        se.dispose(),
        se.removeEventListener("sessionstart", Z),
        se.removeEventListener("sessionend", le),
      Q && (Q.dispose(),
        Q = null),
        fe.stop()
    }
  ;
  function me(E) {
    E.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      f = !0
  }
  function _e() {
    console.log("THREE.WebGLRenderer: Context Restored."),
      f = !1;
    const E = ye.autoReset
      , U = M.enabled
      , k = M.autoUpdate
      , N = M.needsUpdate
      , q = M.type;
    oe(),
      ye.autoReset = E,
      M.enabled = U,
      M.autoUpdate = k,
      M.needsUpdate = N,
      M.type = q
  }
  function ge(E) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage)
  }
  function Ce(E) {
    const U = E.target;
    U.removeEventListener("dispose", Ce),
      Ie(U)
  }
  function Ie(E) {
    Oe(E),
      Se.remove(E)
  }
  function Oe(E) {
    const U = Se.get(E).programs;
    U !== void 0 && (U.forEach(function(k) {
      Ge.releaseProgram(k)
    }),
    E.isShaderMaterial && Ge.releaseShaderCache(E))
  }
  this.renderBufferDirect = function(E, U, k, N, q, ve) {
    U === null && (U = $);
    const Me = q.isMesh && q.matrixWorld.determinant() < 0
      , Te = ll(E, U, k, N, q);
    he.setMaterial(N, Me);
    let Ae = k.index
      , Fe = 1;
    N.wireframe === !0 && (Ae = Ke.getWireframeAttribute(k),
      Fe = 2);
    const Le = k.drawRange
      , Re = k.attributes.position;
    let We = Le.start * Fe
      , gt = (Le.start + Le.count) * Fe;
    ve !== null && (We = Math.max(We, ve.start * Fe),
      gt = Math.min(gt, (ve.start + ve.count) * Fe)),
      Ae !== null ? (We = Math.max(We, 0),
        gt = Math.min(gt, Ae.count)) : Re != null && (We = Math.max(We, 0),
        gt = Math.min(gt, Re.count));
    const Ht = gt - We;
    if (Ht < 0 || Ht === 1 / 0)
      return;
    C.setup(q, N, Te, k, Ae);
    let un, qe = ne;
    if (Ae !== null && (un = ot.get(Ae),
      qe = ae,
      qe.setIndex(un)),
      q.isMesh)
      N.wireframe === !0 ? (he.setLineWidth(N.wireframeLinewidth * re()),
        qe.setMode(1)) : qe.setMode(4);
    else if (q.isLine) {
      let Pe = N.linewidth;
      Pe === void 0 && (Pe = 1),
        he.setLineWidth(Pe * re()),
        q.isLineSegments ? qe.setMode(1) : q.isLineLoop ? qe.setMode(2) : qe.setMode(3)
    } else
      q.isPoints ? qe.setMode(0) : q.isSprite && qe.setMode(4);
    if (q.isInstancedMesh)
      qe.renderInstances(We, Ht, q.count);
    else if (k.isInstancedBufferGeometry) {
      const Pe = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0
        , cr = Math.min(k.instanceCount, Pe);
      qe.renderInstances(We, Ht, cr)
    } else
      qe.render(We, Ht)
  }
    ,
    this.compile = function(E, U) {
      function k(N, q, ve) {
        N.transparent === !0 && N.side === sn && N.forceSinglePass === !1 ? (N.side = Mt,
          N.needsUpdate = !0,
          bt(N, q, ve),
          N.side = ln,
          N.needsUpdate = !0,
          bt(N, q, ve),
          N.side = sn) : bt(N, q, ve)
      }
      p = lt.get(E),
        p.init(),
        g.push(p),
        E.traverseVisible(function(N) {
          N.isLight && N.layers.test(U.layers) && (p.pushLight(N),
          N.castShadow && p.pushShadow(N))
        }),
        p.setupLights(h.useLegacyLights),
        E.traverse(function(N) {
          const q = N.material;
          if (q)
            if (Array.isArray(q))
              for (let ve = 0; ve < q.length; ve++) {
                const Me = q[ve];
                k(Me, E, N)
              }
            else
              k(q, E, N)
        }),
        g.pop(),
        p = null
    }
  ;
  let R = null;
  function H(E) {
    R && R(E)
  }
  function Z() {
    fe.stop()
  }
  function le() {
    fe.start()
  }
  const fe = new Fo;
  fe.setAnimationLoop(H),
  typeof self < "u" && fe.setContext(self),
    this.setAnimationLoop = function(E) {
      R = E,
        se.setAnimationLoop(E),
        E === null ? fe.stop() : fe.start()
    }
    ,
    se.addEventListener("sessionstart", Z),
    se.addEventListener("sessionend", le),
    this.render = function(E, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return
      }
      if (f === !0)
        return;
      E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
      U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(),
      se.enabled === !0 && se.isPresenting === !0 && (se.cameraAutoUpdate === !0 && se.updateCamera(U),
        U = se.getCamera()),
      E.isScene === !0 && E.onBeforeRender(h, E, U, x),
        p = lt.get(E, g.length),
        p.init(),
        g.push(p),
        pe.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
        ee.setFromProjectionMatrix(pe),
        Y = this.localClippingEnabled,
        j = T.init(this.clippingPlanes, Y),
        d = mt.get(E, m.length),
        d.init(),
        m.push(d),
        Be(E, U, 0, h.sortObjects),
        d.finish(),
      h.sortObjects === !0 && d.sort(K, z),
      j === !0 && T.beginShadows();
      const k = p.state.shadowsArray;
      if (M.render(k, E, U),
      j === !0 && T.endShadows(),
      this.info.autoReset === !0 && this.info.reset(),
        V.render(d, E),
        p.setupLights(h.useLegacyLights),
        U.isArrayCamera) {
        const N = U.cameras;
        for (let q = 0, ve = N.length; q < ve; q++) {
          const Me = N[q];
          Qe(d, E, Me, Me.viewport)
        }
      } else
        Qe(d, E, U);
      x !== null && (Ee.updateMultisampleRenderTarget(x),
        Ee.updateRenderTargetMipmap(x)),
      E.isScene === !0 && E.onAfterRender(h, E, U),
        C.resetDefaultState(),
        S = -1,
        y = null,
        g.pop(),
        g.length > 0 ? p = g[g.length - 1] : p = null,
        m.pop(),
        m.length > 0 ? d = m[m.length - 1] : d = null
    }
  ;
  function Be(E, U, k, N) {
    if (E.visible === !1)
      return;
    if (E.layers.test(U.layers)) {
      if (E.isGroup)
        k = E.renderOrder;
      else if (E.isLOD)
        E.autoUpdate === !0 && E.update(U);
      else if (E.isLight)
        p.pushLight(E),
        E.castShadow && p.pushShadow(E);
      else if (E.isSprite) {
        if (!E.frustumCulled || ee.intersectsSprite(E)) {
          N && B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);
          const Me = Je.update(E)
            , Te = E.material;
          Te.visible && d.push(E, Me, Te, k, B.z, null)
        }
      } else if ((E.isMesh || E.isLine || E.isPoints) && (E.isSkinnedMesh && E.skeleton.frame !== ye.render.frame && (E.skeleton.update(),
        E.skeleton.frame = ye.render.frame),
      !E.frustumCulled || ee.intersectsObject(E))) {
        N && B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);
        const Me = Je.update(E)
          , Te = E.material;
        if (Array.isArray(Te)) {
          const Ae = Me.groups;
          for (let Fe = 0, Le = Ae.length; Fe < Le; Fe++) {
            const Re = Ae[Fe]
              , We = Te[Re.materialIndex];
            We && We.visible && d.push(E, Me, We, k, B.z, Re)
          }
        } else
          Te.visible && d.push(E, Me, Te, k, B.z, null)
      }
    }
    const ve = E.children;
    for (let Me = 0, Te = ve.length; Me < Te; Me++)
      Be(ve[Me], U, k, N)
  }
  function Qe(E, U, k, N) {
    const q = E.opaque
      , ve = E.transmissive
      , Me = E.transparent;
    p.setupLightsView(k),
    j === !0 && T.setGlobalState(h.clippingPlanes, k),
    ve.length > 0 && ct(q, U, k),
    N && he.viewport(b.copy(N)),
    q.length > 0 && Nt(q, U, k),
    ve.length > 0 && Nt(ve, U, k),
    Me.length > 0 && Nt(Me, U, k),
      he.buffers.depth.setTest(!0),
      he.buffers.depth.setMask(!0),
      he.buffers.color.setMask(!0),
      he.setPolygonOffset(!1)
  }
  function ct(E, U, k) {
    const N = de.isWebGL2;
    Q === null && (Q = new En(1024,1024,{
      generateMipmaps: !0,
      type: ue.has("EXT_color_buffer_half_float") ? gi : Sn,
      minFilter: mi,
      samples: N && s === !0 ? 4 : 0
    }));
    const q = h.getRenderTarget();
    h.setRenderTarget(Q),
      h.clear();
    const ve = h.toneMapping;
    h.toneMapping = Zt,
      Nt(E, U, k),
      h.toneMapping = ve,
      Ee.updateMultisampleRenderTarget(Q),
      Ee.updateRenderTargetMipmap(Q),
      h.setRenderTarget(q)
  }
  function Nt(E, U, k) {
    const N = U.isScene === !0 ? U.overrideMaterial : null;
    for (let q = 0, ve = E.length; q < ve; q++) {
      const Me = E[q]
        , Te = Me.object
        , Ae = Me.geometry
        , Fe = N === null ? Me.material : N
        , Le = Me.group;
      Te.layers.test(k.layers) && He(Te, U, k, Ae, Fe, Le)
    }
  }
  function He(E, U, k, N, q, ve) {
    E.onBeforeRender(h, U, k, N, q, ve),
      E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, E.matrixWorld),
      E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
      q.onBeforeRender(h, U, k, N, E, ve),
      q.transparent === !0 && q.side === sn && q.forceSinglePass === !1 ? (q.side = Mt,
        q.needsUpdate = !0,
        h.renderBufferDirect(k, U, N, q, E, ve),
        q.side = ln,
        q.needsUpdate = !0,
        h.renderBufferDirect(k, U, N, q, E, ve),
        q.side = sn) : h.renderBufferDirect(k, U, N, q, E, ve),
      E.onAfterRender(h, U, k, N, q, ve)
  }
  function bt(E, U, k) {
    U.isScene !== !0 && (U = $);
    const N = Se.get(E)
      , q = p.state.lights
      , ve = p.state.shadowsArray
      , Me = q.state.version
      , Te = Ge.getParameters(E, q.state, ve, U, k)
      , Ae = Ge.getProgramCacheKey(Te);
    let Fe = N.programs;
    N.environment = E.isMeshStandardMaterial ? U.environment : null,
      N.fog = U.fog,
      N.envMap = (E.isMeshStandardMaterial ? Ze : De).get(E.envMap || N.environment),
    Fe === void 0 && (E.addEventListener("dispose", Ce),
      Fe = new Map,
      N.programs = Fe);
    let Le = Fe.get(Ae);
    if (Le !== void 0) {
      if (N.currentProgram === Le && N.lightsStateVersion === Me)
        return Ft(E, Te),
          Le
    } else
      Te.uniforms = Ge.getUniforms(E),
        E.onBuild(k, Te, h),
        E.onBeforeCompile(Te, h),
        Le = Ge.acquireProgram(Te, Ae),
        Fe.set(Ae, Le),
        N.uniforms = Te.uniforms;
    const Re = N.uniforms;
    (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Re.clippingPlanes = T.uniform),
      Ft(E, Te),
      N.needsLights = ul(E),
      N.lightsStateVersion = Me,
    N.needsLights && (Re.ambientLightColor.value = q.state.ambient,
      Re.lightProbe.value = q.state.probe,
      Re.directionalLights.value = q.state.directional,
      Re.directionalLightShadows.value = q.state.directionalShadow,
      Re.spotLights.value = q.state.spot,
      Re.spotLightShadows.value = q.state.spotShadow,
      Re.rectAreaLights.value = q.state.rectArea,
      Re.ltc_1.value = q.state.rectAreaLTC1,
      Re.ltc_2.value = q.state.rectAreaLTC2,
      Re.pointLights.value = q.state.point,
      Re.pointLightShadows.value = q.state.pointShadow,
      Re.hemisphereLights.value = q.state.hemi,
      Re.directionalShadowMap.value = q.state.directionalShadowMap,
      Re.directionalShadowMatrix.value = q.state.directionalShadowMatrix,
      Re.spotShadowMap.value = q.state.spotShadowMap,
      Re.spotLightMatrix.value = q.state.spotLightMatrix,
      Re.spotLightMap.value = q.state.spotLightMap,
      Re.pointShadowMap.value = q.state.pointShadowMap,
      Re.pointShadowMatrix.value = q.state.pointShadowMatrix);
    const We = Le.getUniforms()
      , gt = ji.seqWithValue(We.seq, Re);
    return N.currentProgram = Le,
      N.uniformsList = gt,
      Le
  }
  function Ft(E, U) {
    const k = Se.get(E);
    k.outputEncoding = U.outputEncoding,
      k.instancing = U.instancing,
      k.skinning = U.skinning,
      k.morphTargets = U.morphTargets,
      k.morphNormals = U.morphNormals,
      k.morphColors = U.morphColors,
      k.morphTargetsCount = U.morphTargetsCount,
      k.numClippingPlanes = U.numClippingPlanes,
      k.numIntersection = U.numClipIntersection,
      k.vertexAlphas = U.vertexAlphas,
      k.vertexTangents = U.vertexTangents,
      k.toneMapping = U.toneMapping
  }
  function ll(E, U, k, N, q) {
    U.isScene !== !0 && (U = $),
      Ee.resetTextureUnits();
    const ve = U.fog
      , Me = N.isMeshStandardMaterial ? U.environment : null
      , Te = x === null ? h.outputEncoding : x.isXRRenderTarget === !0 ? x.texture.encoding : bn
      , Ae = (N.isMeshStandardMaterial ? Ze : De).get(N.envMap || Me)
      , Fe = N.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4
      , Le = !!N.normalMap && !!k.attributes.tangent
      , Re = !!k.morphAttributes.position
      , We = !!k.morphAttributes.normal
      , gt = !!k.morphAttributes.color
      , Ht = N.toneMapped ? h.toneMapping : Zt
      , un = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color
      , qe = un !== void 0 ? un.length : 0
      , Pe = Se.get(N)
      , cr = p.state.lights;
    if (j === !0 && (Y === !0 || E !== y)) {
      const _t = E === y && N.id === S;
      T.setState(N, E, _t)
    }
    let et = !1;
    N.version === Pe.__version ? (Pe.needsLights && Pe.lightsStateVersion !== cr.state.version || Pe.outputEncoding !== Te || q.isInstancedMesh && Pe.instancing === !1 || !q.isInstancedMesh && Pe.instancing === !0 || q.isSkinnedMesh && Pe.skinning === !1 || !q.isSkinnedMesh && Pe.skinning === !0 || Pe.envMap !== Ae || N.fog === !0 && Pe.fog !== ve || Pe.numClippingPlanes !== void 0 && (Pe.numClippingPlanes !== T.numPlanes || Pe.numIntersection !== T.numIntersection) || Pe.vertexAlphas !== Fe || Pe.vertexTangents !== Le || Pe.morphTargets !== Re || Pe.morphNormals !== We || Pe.morphColors !== gt || Pe.toneMapping !== Ht || de.isWebGL2 === !0 && Pe.morphTargetsCount !== qe) && (et = !0) : (et = !0,
      Pe.__version = N.version);
    let hn = Pe.currentProgram;
    et === !0 && (hn = bt(N, U, q));
    let Es = !1
      , ni = !1
      , ur = !1;
    const ut = hn.getUniforms()
      , dn = Pe.uniforms;
    if (he.useProgram(hn.program) && (Es = !0,
      ni = !0,
      ur = !0),
    N.id !== S && (S = N.id,
      ni = !0),
    Es || y !== E) {
      if (ut.setValue(O, "projectionMatrix", E.projectionMatrix),
      de.logarithmicDepthBuffer && ut.setValue(O, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)),
      y !== E && (y = E,
        ni = !0,
        ur = !0),
      N.isShaderMaterial || N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshStandardMaterial || N.envMap) {
        const _t = ut.map.cameraPosition;
        _t !== void 0 && _t.setValue(O, B.setFromMatrixPosition(E.matrixWorld))
      }
      (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial) && ut.setValue(O, "isOrthographic", E.isOrthographicCamera === !0),
      (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial || N.isShadowMaterial || q.isSkinnedMesh) && ut.setValue(O, "viewMatrix", E.matrixWorldInverse)
    }
    if (q.isSkinnedMesh) {
      ut.setOptional(O, q, "bindMatrix"),
        ut.setOptional(O, q, "bindMatrixInverse");
      const _t = q.skeleton;
      _t && (de.floatVertexTextures ? (_t.boneTexture === null && _t.computeBoneTexture(),
        ut.setValue(O, "boneTexture", _t.boneTexture, Ee),
        ut.setValue(O, "boneTextureSize", _t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
    }
    const hr = k.morphAttributes;
    if ((hr.position !== void 0 || hr.normal !== void 0 || hr.color !== void 0 && de.isWebGL2 === !0) && te.update(q, k, hn),
    (ni || Pe.receiveShadow !== q.receiveShadow) && (Pe.receiveShadow = q.receiveShadow,
      ut.setValue(O, "receiveShadow", q.receiveShadow)),
    N.isMeshGouraudMaterial && N.envMap !== null && (dn.envMap.value = Ae,
      dn.flipEnvMap.value = Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1),
    ni && (ut.setValue(O, "toneMappingExposure", h.toneMappingExposure),
    Pe.needsLights && cl(dn, ur),
    ve && N.fog === !0 && ze.refreshFogUniforms(dn, ve),
      ze.refreshMaterialUniforms(dn, N, G, P, Q),
      ji.upload(O, Pe.uniformsList, dn, Ee)),
    N.isShaderMaterial && N.uniformsNeedUpdate === !0 && (ji.upload(O, Pe.uniformsList, dn, Ee),
      N.uniformsNeedUpdate = !1),
    N.isSpriteMaterial && ut.setValue(O, "center", q.center),
      ut.setValue(O, "modelViewMatrix", q.modelViewMatrix),
      ut.setValue(O, "normalMatrix", q.normalMatrix),
      ut.setValue(O, "modelMatrix", q.matrixWorld),
    N.isShaderMaterial || N.isRawShaderMaterial) {
      const _t = N.uniformsGroups;
      for (let dr = 0, hl = _t.length; dr < hl; dr++)
        if (de.isWebGL2) {
          const Ts = _t[dr];
          I.update(Ts, hn),
            I.bind(Ts, hn)
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
    }
    return hn
  }
  function cl(E, U) {
    E.ambientLightColor.needsUpdate = U,
      E.lightProbe.needsUpdate = U,
      E.directionalLights.needsUpdate = U,
      E.directionalLightShadows.needsUpdate = U,
      E.pointLights.needsUpdate = U,
      E.pointLightShadows.needsUpdate = U,
      E.spotLights.needsUpdate = U,
      E.spotLightShadows.needsUpdate = U,
      E.rectAreaLights.needsUpdate = U,
      E.hemisphereLights.needsUpdate = U
  }
  function ul(E) {
    return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0
  }
  this.getActiveCubeFace = function() {
    return v
  }
    ,
    this.getActiveMipmapLevel = function() {
      return w
    }
    ,
    this.getRenderTarget = function() {
      return x
    }
    ,
    this.setRenderTargetTextures = function(E, U, k) {
      Se.get(E.texture).__webglTexture = U,
        Se.get(E.depthTexture).__webglTexture = k;
      const N = Se.get(E);
      N.__hasExternalTextures = !0,
      N.__hasExternalTextures && (N.__autoAllocateDepthBuffer = k === void 0,
      N.__autoAllocateDepthBuffer || ue.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
        N.__useRenderToTexture = !1))
    }
    ,
    this.setRenderTargetFramebuffer = function(E, U) {
      const k = Se.get(E);
      k.__webglFramebuffer = U,
        k.__useDefaultFramebuffer = U === void 0
    }
    ,
    this.setRenderTarget = function(E, U=0, k=0) {
      x = E,
        v = U,
        w = k;
      let N = !0
        , q = null
        , ve = !1
        , Me = !1;
      if (E) {
        const Ae = Se.get(E);
        Ae.__useDefaultFramebuffer !== void 0 ? (he.bindFramebuffer(36160, null),
          N = !1) : Ae.__webglFramebuffer === void 0 ? Ee.setupRenderTarget(E) : Ae.__hasExternalTextures && Ee.rebindTextures(E, Se.get(E.texture).__webglTexture, Se.get(E.depthTexture).__webglTexture);
        const Fe = E.texture;
        (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (Me = !0);
        const Le = Se.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (q = Le[U],
          ve = !0) : de.isWebGL2 && E.samples > 0 && Ee.useMultisampledRTT(E) === !1 ? q = Se.get(E).__webglMultisampledFramebuffer : q = Le,
          b.copy(E.viewport),
          L.copy(E.scissor),
          _ = E.scissorTest
      } else
        b.copy(F).multiplyScalar(G).floor(),
          L.copy(W).multiplyScalar(G).floor(),
          _ = J;
      if (he.bindFramebuffer(36160, q) && de.drawBuffers && N && he.drawBuffers(E, q),
        he.viewport(b),
        he.scissor(L),
        he.setScissorTest(_),
        ve) {
        const Ae = Se.get(E.texture);
        O.framebufferTexture2D(36160, 36064, 34069 + U, Ae.__webglTexture, k)
      } else if (Me) {
        const Ae = Se.get(E.texture)
          , Fe = U || 0;
        O.framebufferTextureLayer(36160, 36064, Ae.__webglTexture, k || 0, Fe)
      }
      S = -1
    }
    ,
    this.readRenderTargetPixels = function(E, U, k, N, q, ve, Me) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return
      }
      let Te = Se.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && Me !== void 0 && (Te = Te[Me]),
        Te) {
        he.bindFramebuffer(36160, Te);
        try {
          const Ae = E.texture
            , Fe = Ae.format
            , Le = Ae.type;
          if (Fe !== Pt && xe.convert(Fe) !== O.getParameter(35739)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return
          }
          const Re = Le === gi && (ue.has("EXT_color_buffer_half_float") || de.isWebGL2 && ue.has("EXT_color_buffer_float"));
          if (Le !== Sn && xe.convert(Le) !== O.getParameter(35738) && !(Le === yn && (de.isWebGL2 || ue.has("OES_texture_float") || ue.has("WEBGL_color_buffer_float"))) && !Re) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return
          }
          U >= 0 && U <= E.width - N && k >= 0 && k <= E.height - q && O.readPixels(U, k, N, q, xe.convert(Fe), xe.convert(Le), ve)
        } finally {
          const Ae = x !== null ? Se.get(x).__webglFramebuffer : null;
          he.bindFramebuffer(36160, Ae)
        }
      }
    }
    ,
    this.copyFramebufferToTexture = function(E, U, k=0) {
      const N = Math.pow(2, -k)
        , q = Math.floor(U.image.width * N)
        , ve = Math.floor(U.image.height * N);
      Ee.setTexture2D(U, 0),
        O.copyTexSubImage2D(3553, k, 0, 0, E.x, E.y, q, ve),
        he.unbindTexture()
    }
    ,
    this.copyTextureToTexture = function(E, U, k, N=0) {
      const q = U.image.width
        , ve = U.image.height
        , Me = xe.convert(k.format)
        , Te = xe.convert(k.type);
      Ee.setTexture2D(k, 0),
        O.pixelStorei(37440, k.flipY),
        O.pixelStorei(37441, k.premultiplyAlpha),
        O.pixelStorei(3317, k.unpackAlignment),
        U.isDataTexture ? O.texSubImage2D(3553, N, E.x, E.y, q, ve, Me, Te, U.image.data) : U.isCompressedTexture ? O.compressedTexSubImage2D(3553, N, E.x, E.y, U.mipmaps[0].width, U.mipmaps[0].height, Me, U.mipmaps[0].data) : O.texSubImage2D(3553, N, E.x, E.y, Me, Te, U.image),
      N === 0 && k.generateMipmaps && O.generateMipmap(3553),
        he.unbindTexture()
    }
    ,
    this.copyTextureToTexture3D = function(E, U, k, N, q=0) {
      if (h.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return
      }
      const ve = E.max.x - E.min.x + 1
        , Me = E.max.y - E.min.y + 1
        , Te = E.max.z - E.min.z + 1
        , Ae = xe.convert(N.format)
        , Fe = xe.convert(N.type);
      let Le;
      if (N.isData3DTexture)
        Ee.setTexture3D(N, 0),
          Le = 32879;
      else if (N.isDataArrayTexture)
        Ee.setTexture2DArray(N, 0),
          Le = 35866;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return
      }
      O.pixelStorei(37440, N.flipY),
        O.pixelStorei(37441, N.premultiplyAlpha),
        O.pixelStorei(3317, N.unpackAlignment);
      const Re = O.getParameter(3314)
        , We = O.getParameter(32878)
        , gt = O.getParameter(3316)
        , Ht = O.getParameter(3315)
        , un = O.getParameter(32877)
        , qe = k.isCompressedTexture ? k.mipmaps[0] : k.image;
      O.pixelStorei(3314, qe.width),
        O.pixelStorei(32878, qe.height),
        O.pixelStorei(3316, E.min.x),
        O.pixelStorei(3315, E.min.y),
        O.pixelStorei(32877, E.min.z),
        k.isDataTexture || k.isData3DTexture ? O.texSubImage3D(Le, q, U.x, U.y, U.z, ve, Me, Te, Ae, Fe, qe.data) : k.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
          O.compressedTexSubImage3D(Le, q, U.x, U.y, U.z, ve, Me, Te, Ae, qe.data)) : O.texSubImage3D(Le, q, U.x, U.y, U.z, ve, Me, Te, Ae, Fe, qe),
        O.pixelStorei(3314, Re),
        O.pixelStorei(32878, We),
        O.pixelStorei(3316, gt),
        O.pixelStorei(3315, Ht),
        O.pixelStorei(32877, un),
      q === 0 && N.generateMipmaps && O.generateMipmap(Le),
        he.unbindTexture()
    }
    ,
    this.initTexture = function(E) {
      E.isCubeTexture ? Ee.setTextureCube(E, 0) : E.isData3DTexture ? Ee.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? Ee.setTexture2DArray(E, 0) : Ee.setTexture2D(E, 0),
        he.unbindTexture()
    }
    ,
    this.resetState = function() {
      v = 0,
        w = 0,
        x = null,
        he.reset(),
        C.reset()
    }
    ,
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
    detail: this
  }))
}
Object.defineProperties(_s.prototype, {
  physicallyCorrectLights: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),
        !this.useLegacyLights
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),
        this.useLegacyLights = !r
    }
  }
});
class Ep extends _s {
}
Ep.prototype.isWebGL1Renderer = !0;
class Tp extends it {
  constructor() {
    super(),
      this.isScene = !0,
      this.type = "Scene",
      this.background = null,
      this.environment = null,
      this.fog = null,
      this.backgroundBlurriness = 0,
      this.backgroundIntensity = 1,
      this.overrideMaterial = null,
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
      detail: this
    }))
  }
  copy(e, t) {
    return super.copy(e, t),
    e.background !== null && (this.background = e.background.clone()),
    e.environment !== null && (this.environment = e.environment.clone()),
    e.fog !== null && (this.fog = e.fog.clone()),
      this.backgroundBlurriness = e.backgroundBlurriness,
      this.backgroundIntensity = e.backgroundIntensity,
    e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
      this.matrixAutoUpdate = e.matrixAutoUpdate,
      this
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()),
    this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
    this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
      t
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),
      this.matrixWorldAutoUpdate
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),
      this.matrixWorldAutoUpdate = e
  }
}
class ko extends Mi {
  constructor(e) {
    super(),
      this.isLineBasicMaterial = !0,
      this.type = "LineBasicMaterial",
      this.color = new Ue(16777215),
      this.linewidth = 1,
      this.linecap = "round",
      this.linejoin = "round",
      this.fog = !0,
      this.setValues(e)
  }
  copy(e) {
    return super.copy(e),
      this.color.copy(e.color),
      this.linewidth = e.linewidth,
      this.linecap = e.linecap,
      this.linejoin = e.linejoin,
      this.fog = e.fog,
      this
  }
}
const Va = new D
  , Ha = new D
  , Wa = new Ve
  , qr = new Ao
  , Xi = new nr;
class Ap extends it {
  constructor(e=new Vt, t=new ko) {
    super(),
      this.isLine = !0,
      this.type = "Line",
      this.geometry = e,
      this.material = t,
      this.updateMorphTargets()
  }
  copy(e, t) {
    return super.copy(e, t),
      this.material = e.material,
      this.geometry = e.geometry,
      this
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position
        , n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        Va.fromBufferAttribute(t, i - 1),
          Ha.fromBufferAttribute(t, i),
          n[i] = n[i - 1],
          n[i] += Va.distanceTo(Ha);
      e.setAttribute("lineDistance", new It(n,1))
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this
  }
  raycast(e, t) {
    const n = this.geometry
      , i = this.matrixWorld
      , s = e.params.Line.threshold
      , o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(),
      Xi.copy(n.boundingSphere),
      Xi.applyMatrix4(i),
      Xi.radius += s,
    e.ray.intersectsSphere(Xi) === !1)
      return;
    Wa.copy(i).invert(),
      qr.copy(e.ray).applyMatrix4(Wa);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
      , c = a * a
      , l = new D
      , u = new D
      , d = new D
      , p = new D
      , m = this.isLineSegments ? 2 : 1
      , g = n.index
      , f = n.attributes.position;
    if (g !== null) {
      const v = Math.max(0, o.start)
        , w = Math.min(g.count, o.start + o.count);
      for (let x = v, S = w - 1; x < S; x += m) {
        const y = g.getX(x)
          , b = g.getX(x + 1);
        if (l.fromBufferAttribute(f, y),
          u.fromBufferAttribute(f, b),
        qr.distanceSqToSegment(l, u, p, d) > c)
          continue;
        p.applyMatrix4(this.matrixWorld);
        const _ = e.ray.origin.distanceTo(p);
        _ < e.near || _ > e.far || t.push({
          distance: _,
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        })
      }
    } else {
      const v = Math.max(0, o.start)
        , w = Math.min(f.count, o.start + o.count);
      for (let x = v, S = w - 1; x < S; x += m) {
        if (l.fromBufferAttribute(f, x),
          u.fromBufferAttribute(f, x + 1),
        qr.distanceSqToSegment(l, u, p, d) > c)
          continue;
        p.applyMatrix4(this.matrixWorld);
        const b = e.ray.origin.distanceTo(p);
        b < e.near || b > e.far || t.push({
          distance: b,
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        })
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes
      , n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [],
          this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            this.morphTargetDictionary[a] = s
        }
      }
    }
  }
}
class Cp extends Ap {
  constructor(e, t) {
    super(e, t),
      this.isLineLoop = !0,
      this.type = "LineLoop"
  }
}
class Lp {
  constructor() {
    this.type = "Curve",
      this.arcLengthDivisions = 200
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."),
      null
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t)
  }
  getPoints(e=5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t
  }
  getSpacedPoints(e=5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1]
  }
  getLengths(e=this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e),
        s += n.distanceTo(i),
        t.push(s),
        i = n;
    return this.cacheArcLengths = t,
      t
  }
  updateArcLengths() {
    this.needsUpdate = !0,
      this.getLengths()
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (i = Math.floor(a + (c - a) / 2),
        l = n[i] - o,
      l < 0)
        a = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break
      }
    if (i = c,
    n[i] === o)
      return i / (s - 1);
    const u = n[i]
      , p = n[i + 1] - u
      , m = (o - u) / p;
    return (i + m) / (s - 1)
  }
  getTangent(e, t) {
    let i = e - 1e-4
      , s = e + 1e-4;
    i < 0 && (i = 0),
    s > 1 && (s = 1);
    const o = this.getPoint(i)
      , a = this.getPoint(s)
      , c = t || (o.isVector2 ? new we : new D);
    return c.copy(a).sub(o).normalize(),
      c
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t)
  }
  computeFrenetFrames(e, t) {
    const n = new D
      , i = []
      , s = []
      , o = []
      , a = new D
      , c = new Ve;
    for (let m = 0; m <= e; m++) {
      const g = m / e;
      i[m] = this.getTangentAt(g, new D)
    }
    s[0] = new D,
      o[0] = new D;
    let l = Number.MAX_VALUE;
    const u = Math.abs(i[0].x)
      , d = Math.abs(i[0].y)
      , p = Math.abs(i[0].z);
    u <= l && (l = u,
      n.set(1, 0, 0)),
    d <= l && (l = d,
      n.set(0, 1, 0)),
    p <= l && n.set(0, 0, 1),
      a.crossVectors(i[0], n).normalize(),
      s[0].crossVectors(i[0], a),
      o[0].crossVectors(i[0], s[0]);
    for (let m = 1; m <= e; m++) {
      if (s[m] = s[m - 1].clone(),
        o[m] = o[m - 1].clone(),
        a.crossVectors(i[m - 1], i[m]),
      a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(at(i[m - 1].dot(i[m]), -1, 1));
        s[m].applyMatrix4(c.makeRotationAxis(a, g))
      }
      o[m].crossVectors(i[m], s[m])
    }
    if (t === !0) {
      let m = Math.acos(at(s[0].dot(s[e]), -1, 1));
      m /= e,
      i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (m = -m);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(c.makeRotationAxis(i[g], m * g)),
          o[g].crossVectors(i[g], s[g])
    }
    return {
      tangents: i,
      normals: s,
      binormals: o
    }
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions,
      this
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions,
      e.type = this.type,
      e
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions,
      this
  }
}
class Rp extends Lp {
  constructor(e=0, t=0, n=1, i=1, s=0, o=Math.PI * 2, a=!1, c=0) {
    super(),
      this.isEllipseCurve = !0,
      this.type = "EllipseCurve",
      this.aX = e,
      this.aY = t,
      this.xRadius = n,
      this.yRadius = i,
      this.aStartAngle = s,
      this.aEndAngle = o,
      this.aClockwise = a,
      this.aRotation = c
  }
  getPoint(e, t) {
    const n = t || new we
      , i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; )
      s += i;
    for (; s > i; )
      s -= i;
    s < Number.EPSILON && (o ? s = 0 : s = i),
    this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a)
      , l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation)
        , d = Math.sin(this.aRotation)
        , p = c - this.aX
        , m = l - this.aY;
      c = p * u - m * d + this.aX,
        l = p * d + m * u + this.aY
    }
    return n.set(c, l)
  }
  copy(e) {
    return super.copy(e),
      this.aX = e.aX,
      this.aY = e.aY,
      this.xRadius = e.xRadius,
      this.yRadius = e.yRadius,
      this.aStartAngle = e.aStartAngle,
      this.aEndAngle = e.aEndAngle,
      this.aClockwise = e.aClockwise,
      this.aRotation = e.aRotation,
      this
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX,
      e.aY = this.aY,
      e.xRadius = this.xRadius,
      e.yRadius = this.yRadius,
      e.aStartAngle = this.aStartAngle,
      e.aEndAngle = this.aEndAngle,
      e.aClockwise = this.aClockwise,
      e.aRotation = this.aRotation,
      e
  }
  fromJSON(e) {
    return super.fromJSON(e),
      this.aX = e.aX,
      this.aY = e.aY,
      this.xRadius = e.xRadius,
      this.yRadius = e.yRadius,
      this.aStartAngle = e.aStartAngle,
      this.aEndAngle = e.aEndAngle,
      this.aClockwise = e.aClockwise,
      this.aRotation = e.aRotation,
      this
  }
}
class Pp extends Rp {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, n, i, s, o),
      this.isArcCurve = !0,
      this.type = "ArcCurve"
  }
}
class pi extends Vt {
  constructor(e=1, t=32, n=16, i=0, s=Math.PI * 2, o=0, a=Math.PI) {
    super(),
      this.type = "SphereGeometry",
      this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: o,
        thetaLength: a
      },
      t = Math.max(3, Math.floor(t)),
      n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const u = []
      , d = new D
      , p = new D
      , m = []
      , g = []
      , h = []
      , f = [];
    for (let v = 0; v <= n; v++) {
      const w = []
        , x = v / n;
      let S = 0;
      v == 0 && o == 0 ? S = .5 / t : v == n && c == Math.PI && (S = -.5 / t);
      for (let y = 0; y <= t; y++) {
        const b = y / t;
        d.x = -e * Math.cos(i + b * s) * Math.sin(o + x * a),
          d.y = e * Math.cos(o + x * a),
          d.z = e * Math.sin(i + b * s) * Math.sin(o + x * a),
          g.push(d.x, d.y, d.z),
          p.copy(d).normalize(),
          h.push(p.x, p.y, p.z),
          f.push(b + S, 1 - x),
          w.push(l++)
      }
      u.push(w)
    }
    for (let v = 0; v < n; v++)
      for (let w = 0; w < t; w++) {
        const x = u[v][w + 1]
          , S = u[v][w]
          , y = u[v + 1][w]
          , b = u[v + 1][w + 1];
        (v !== 0 || o > 0) && m.push(x, S, b),
        (v !== n - 1 || c < Math.PI) && m.push(S, y, b)
      }
    this.setIndex(m),
      this.setAttribute("position", new It(g,3)),
      this.setAttribute("normal", new It(h,3)),
      this.setAttribute("uv", new It(f,2))
  }
  copy(e) {
    return super.copy(e),
      this.parameters = Object.assign({}, e.parameters),
      this
  }
  static fromJSON(e) {
    return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)
  }
}
class Go extends it {
  constructor(e, t=1) {
    super(),
      this.isLight = !0,
      this.type = "Light",
      this.color = new Ue(e),
      this.intensity = t
  }
  dispose() {}
  copy(e, t) {
    return super.copy(e, t),
      this.color.copy(e.color),
      this.intensity = e.intensity,
      this
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(),
      t.object.intensity = this.intensity,
    this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
    this.distance !== void 0 && (t.object.distance = this.distance),
    this.angle !== void 0 && (t.object.angle = this.angle),
    this.decay !== void 0 && (t.object.decay = this.decay),
    this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
    this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
  }
}
const Xr = new Ve
  , qa = new D
  , Xa = new D;
class Dp {
  constructor(e) {
    this.camera = e,
      this.bias = 0,
      this.normalBias = 0,
      this.radius = 1,
      this.blurSamples = 8,
      this.mapSize = new we(512,512),
      this.map = null,
      this.mapPass = null,
      this.matrix = new Ve,
      this.autoUpdate = !0,
      this.needsUpdate = !1,
      this._frustum = new fs,
      this._frameExtents = new we(1,1),
      this._viewportCount = 1,
      this._viewports = [new nt(0,0,1,1)]
  }
  getViewportCount() {
    return this._viewportCount
  }
  getFrustum() {
    return this._frustum
  }
  updateMatrices(e) {
    const t = this.camera
      , n = this.matrix;
    qa.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(qa),
      Xa.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Xa),
      t.updateMatrixWorld(),
      Xr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Xr),
      n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
      n.multiply(Xr)
  }
  getViewport(e) {
    return this._viewports[e]
  }
  getFrameExtents() {
    return this._frameExtents
  }
  dispose() {
    this.map && this.map.dispose(),
    this.mapPass && this.mapPass.dispose()
  }
  copy(e) {
    return this.camera = e.camera.clone(),
      this.bias = e.bias,
      this.radius = e.radius,
      this.mapSize.copy(e.mapSize),
      this
  }
  clone() {
    return new this.constructor().copy(this)
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias),
    this.normalBias !== 0 && (e.normalBias = this.normalBias),
    this.radius !== 1 && (e.radius = this.radius),
    (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
      e.camera = this.camera.toJSON(!1).object,
      delete e.camera.matrix,
      e
  }
}
class Ip extends Dp {
  constructor() {
    super(new ms(-5,5,5,-5,.5,500)),
      this.isDirectionalLightShadow = !0
  }
}
class ja extends Go {
  constructor(e, t) {
    super(e, t),
      this.isDirectionalLight = !0,
      this.type = "DirectionalLight",
      this.position.copy(it.DEFAULT_UP),
      this.updateMatrix(),
      this.target = new it,
      this.shadow = new Ip
  }
  dispose() {
    this.shadow.dispose()
  }
  copy(e) {
    return super.copy(e),
      this.target = e.target.clone(),
      this.shadow = e.shadow.clone(),
      this
  }
}
class Np extends Go {
  constructor(e, t) {
    super(e, t),
      this.isAmbientLight = !0,
      this.type = "AmbientLight"
  }
}
class Ya {
  constructor(e=1, t=0, n=0) {
    return this.radius = e,
      this.phi = t,
      this.theta = n,
      this
  }
  set(e, t, n) {
    return this.radius = e,
      this.phi = t,
      this.theta = n,
      this
  }
  copy(e) {
    return this.radius = e.radius,
      this.phi = e.phi,
      this.theta = e.theta,
      this
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
      this
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z)
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n),
      this.radius === 0 ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e, n),
        this.phi = Math.acos(at(t / this.radius, -1, 1))),
      this
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
  detail: {
    revision: ds
  }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ds);
const $a = {
  type: "change"
}
  , jr = {
  type: "start"
}
  , Za = {
  type: "end"
};
class Ka extends An {
  constructor(e, t) {
    super(),
      this.object = e,
      this.domElement = t,
      this.domElement.style.touchAction = "none",
      this.enabled = !0,
      this.target = new D,
      this.minDistance = 0,
      this.maxDistance = 1 / 0,
      this.minZoom = 0,
      this.maxZoom = 1 / 0,
      this.minPolarAngle = 0,
      this.maxPolarAngle = Math.PI,
      this.minAzimuthAngle = -1 / 0,
      this.maxAzimuthAngle = 1 / 0,
      this.enableDamping = !1,
      this.dampingFactor = .05,
      this.enableZoom = !0,
      this.zoomSpeed = 1,
      this.enableRotate = !0,
      this.rotateSpeed = 1,
      this.enablePan = !0,
      this.panSpeed = 1,
      this.screenSpacePanning = !0,
      this.keyPanSpeed = 7,
      this.autoRotate = !1,
      this.autoRotateSpeed = 2,
      this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      },
      this.mouseButtons = {
        LEFT: Cn.ROTATE,
        MIDDLE: Cn.DOLLY,
        RIGHT: Cn.PAN
      },
      this.touches = {
        ONE: Ln.ROTATE,
        TWO: Ln.DOLLY_PAN
      },
      this.target0 = this.target.clone(),
      this.position0 = this.object.position.clone(),
      this.zoom0 = this.object.zoom,
      this._domElementKeyEvents = null,
      this.getPolarAngle = function() {
        return a.phi
      }
      ,
      this.getAzimuthalAngle = function() {
        return a.theta
      }
      ,
      this.getDistance = function() {
        return this.object.position.distanceTo(this.target)
      }
      ,
      this.listenToKeyEvents = function(C) {
        C.addEventListener("keydown", lt),
          this._domElementKeyEvents = C
      }
      ,
      this.stopListenToKeyEvents = function() {
        this._domElementKeyEvents.removeEventListener("keydown", lt),
          this._domElementKeyEvents = null
      }
      ,
      this.saveState = function() {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          n.zoom0 = n.object.zoom
      }
      ,
      this.reset = function() {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          n.object.zoom = n.zoom0,
          n.object.updateProjectionMatrix(),
          n.dispatchEvent($a),
          n.update(),
          s = i.NONE
      }
      ,
      this.update = function() {
        const C = new D
          , I = new wn().setFromUnitVectors(e.up, new D(0,1,0))
          , oe = I.clone().invert()
          , se = new D
          , me = new wn
          , _e = 2 * Math.PI;
        return function() {
          const Ce = n.object.position;
          C.copy(Ce).sub(n.target),
            C.applyQuaternion(I),
            a.setFromVector3(C),
          n.autoRotate && s === i.NONE && A(L()),
            n.enableDamping ? (a.theta += c.theta * n.dampingFactor,
              a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta,
              a.phi += c.phi);
          let Ie = n.minAzimuthAngle
            , Oe = n.maxAzimuthAngle;
          return isFinite(Ie) && isFinite(Oe) && (Ie < -Math.PI ? Ie += _e : Ie > Math.PI && (Ie -= _e),
            Oe < -Math.PI ? Oe += _e : Oe > Math.PI && (Oe -= _e),
            Ie <= Oe ? a.theta = Math.max(Ie, Math.min(Oe, a.theta)) : a.theta = a.theta > (Ie + Oe) / 2 ? Math.max(Ie, a.theta) : Math.min(Oe, a.theta)),
            a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)),
            a.makeSafe(),
            a.radius *= l,
            a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)),
            n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u),
            C.setFromSpherical(a),
            C.applyQuaternion(oe),
            Ce.copy(n.target).add(C),
            n.object.lookAt(n.target),
            n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor,
              c.phi *= 1 - n.dampingFactor,
              u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0),
              u.set(0, 0, 0)),
            l = 1,
            d || se.distanceToSquared(n.object.position) > o || 8 * (1 - me.dot(n.object.quaternion)) > o ? (n.dispatchEvent($a),
              se.copy(n.object.position),
              me.copy(n.object.quaternion),
              d = !1,
              !0) : !1
        }
      }(),
      this.dispose = function() {
        n.domElement.removeEventListener("contextmenu", V),
          n.domElement.removeEventListener("pointerdown", Ze),
          n.domElement.removeEventListener("pointercancel", Je),
          n.domElement.removeEventListener("wheel", mt),
          n.domElement.removeEventListener("pointermove", ot),
          n.domElement.removeEventListener("pointerup", Ke),
        n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", lt),
          n._domElementKeyEvents = null)
      }
    ;
    const n = this
      , i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const o = 1e-6
      , a = new Ya
      , c = new Ya;
    let l = 1;
    const u = new D;
    let d = !1;
    const p = new we
      , m = new we
      , g = new we
      , h = new we
      , f = new we
      , v = new we
      , w = new we
      , x = new we
      , S = new we
      , y = []
      , b = {};
    function L() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed
    }
    function _() {
      return Math.pow(.95, n.zoomSpeed)
    }
    function A(C) {
      c.theta -= C
    }
    function P(C) {
      c.phi -= C
    }
    const G = function() {
      const C = new D;
      return function(oe, se) {
        C.setFromMatrixColumn(se, 0),
          C.multiplyScalar(-oe),
          u.add(C)
      }
    }()
      , K = function() {
      const C = new D;
      return function(oe, se) {
        n.screenSpacePanning === !0 ? C.setFromMatrixColumn(se, 1) : (C.setFromMatrixColumn(se, 0),
          C.crossVectors(n.object.up, C)),
          C.multiplyScalar(oe),
          u.add(C)
      }
    }()
      , z = function() {
      const C = new D;
      return function(oe, se) {
        const me = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const _e = n.object.position;
          C.copy(_e).sub(n.target);
          let ge = C.length();
          ge *= Math.tan(n.object.fov / 2 * Math.PI / 180),
            G(2 * oe * ge / me.clientHeight, n.object.matrix),
            K(2 * se * ge / me.clientHeight, n.object.matrix)
        } else
          n.object.isOrthographicCamera ? (G(oe * (n.object.right - n.object.left) / n.object.zoom / me.clientWidth, n.object.matrix),
            K(se * (n.object.top - n.object.bottom) / n.object.zoom / me.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            n.enablePan = !1)
      }
    }();
    function F(C) {
      n.object.isPerspectiveCamera ? l /= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * C)),
        n.object.updateProjectionMatrix(),
        d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        n.enableZoom = !1)
    }
    function W(C) {
      n.object.isPerspectiveCamera ? l *= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / C)),
        n.object.updateProjectionMatrix(),
        d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        n.enableZoom = !1)
    }
    function J(C) {
      p.set(C.clientX, C.clientY)
    }
    function ee(C) {
      w.set(C.clientX, C.clientY)
    }
    function j(C) {
      h.set(C.clientX, C.clientY)
    }
    function Y(C) {
      m.set(C.clientX, C.clientY),
        g.subVectors(m, p).multiplyScalar(n.rotateSpeed);
      const I = n.domElement;
      A(2 * Math.PI * g.x / I.clientHeight),
        P(2 * Math.PI * g.y / I.clientHeight),
        p.copy(m),
        n.update()
    }
    function Q(C) {
      x.set(C.clientX, C.clientY),
        S.subVectors(x, w),
        S.y > 0 ? F(_()) : S.y < 0 && W(_()),
        w.copy(x),
        n.update()
    }
    function pe(C) {
      f.set(C.clientX, C.clientY),
        v.subVectors(f, h).multiplyScalar(n.panSpeed),
        z(v.x, v.y),
        h.copy(f),
        n.update()
    }
    function B(C) {
      C.deltaY < 0 ? W(_()) : C.deltaY > 0 && F(_()),
        n.update()
    }
    function $(C) {
      let I = !1;
      switch (C.code) {
        case n.keys.UP:
          C.ctrlKey || C.metaKey || C.shiftKey ? P(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : z(0, n.keyPanSpeed),
            I = !0;
          break;
        case n.keys.BOTTOM:
          C.ctrlKey || C.metaKey || C.shiftKey ? P(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : z(0, -n.keyPanSpeed),
            I = !0;
          break;
        case n.keys.LEFT:
          C.ctrlKey || C.metaKey || C.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : z(n.keyPanSpeed, 0),
            I = !0;
          break;
        case n.keys.RIGHT:
          C.ctrlKey || C.metaKey || C.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : z(-n.keyPanSpeed, 0),
            I = !0;
          break
      }
      I && (C.preventDefault(),
        n.update())
    }
    function re() {
      if (y.length === 1)
        p.set(y[0].pageX, y[0].pageY);
      else {
        const C = .5 * (y[0].pageX + y[1].pageX)
          , I = .5 * (y[0].pageY + y[1].pageY);
        p.set(C, I)
      }
    }
    function O() {
      if (y.length === 1)
        h.set(y[0].pageX, y[0].pageY);
      else {
        const C = .5 * (y[0].pageX + y[1].pageX)
          , I = .5 * (y[0].pageY + y[1].pageY);
        h.set(C, I)
      }
    }
    function ce() {
      const C = y[0].pageX - y[1].pageX
        , I = y[0].pageY - y[1].pageY
        , oe = Math.sqrt(C * C + I * I);
      w.set(0, oe)
    }
    function ue() {
      n.enableZoom && ce(),
      n.enablePan && O()
    }
    function de() {
      n.enableZoom && ce(),
      n.enableRotate && re()
    }
    function he(C) {
      if (y.length == 1)
        m.set(C.pageX, C.pageY);
      else {
        const oe = xe(C)
          , se = .5 * (C.pageX + oe.x)
          , me = .5 * (C.pageY + oe.y);
        m.set(se, me)
      }
      g.subVectors(m, p).multiplyScalar(n.rotateSpeed);
      const I = n.domElement;
      A(2 * Math.PI * g.x / I.clientHeight),
        P(2 * Math.PI * g.y / I.clientHeight),
        p.copy(m)
    }
    function ye(C) {
      if (y.length === 1)
        f.set(C.pageX, C.pageY);
      else {
        const I = xe(C)
          , oe = .5 * (C.pageX + I.x)
          , se = .5 * (C.pageY + I.y);
        f.set(oe, se)
      }
      v.subVectors(f, h).multiplyScalar(n.panSpeed),
        z(v.x, v.y),
        h.copy(f)
    }
    function Se(C) {
      const I = xe(C)
        , oe = C.pageX - I.x
        , se = C.pageY - I.y
        , me = Math.sqrt(oe * oe + se * se);
      x.set(0, me),
        S.set(0, Math.pow(x.y / w.y, n.zoomSpeed)),
        F(S.y),
        w.copy(x)
    }
    function Ee(C) {
      n.enableZoom && Se(C),
      n.enablePan && ye(C)
    }
    function De(C) {
      n.enableZoom && Se(C),
      n.enableRotate && he(C)
    }
    function Ze(C) {
      n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(C.pointerId),
        n.domElement.addEventListener("pointermove", ot),
        n.domElement.addEventListener("pointerup", Ke)),
        te(C),
        C.pointerType === "touch" ? T(C) : Ge(C))
    }
    function ot(C) {
      n.enabled !== !1 && (C.pointerType === "touch" ? M(C) : ze(C))
    }
    function Ke(C) {
      ne(C),
      y.length === 0 && (n.domElement.releasePointerCapture(C.pointerId),
        n.domElement.removeEventListener("pointermove", ot),
        n.domElement.removeEventListener("pointerup", Ke)),
        n.dispatchEvent(Za),
        s = i.NONE
    }
    function Je(C) {
      ne(C)
    }
    function Ge(C) {
      let I;
      switch (C.button) {
        case 0:
          I = n.mouseButtons.LEFT;
          break;
        case 1:
          I = n.mouseButtons.MIDDLE;
          break;
        case 2:
          I = n.mouseButtons.RIGHT;
          break;
        default:
          I = -1
      }
      switch (I) {
        case Cn.DOLLY:
          if (n.enableZoom === !1)
            return;
          ee(C),
            s = i.DOLLY;
          break;
        case Cn.ROTATE:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enablePan === !1)
              return;
            j(C),
              s = i.PAN
          } else {
            if (n.enableRotate === !1)
              return;
            J(C),
              s = i.ROTATE
          }
          break;
        case Cn.PAN:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enableRotate === !1)
              return;
            J(C),
              s = i.ROTATE
          } else {
            if (n.enablePan === !1)
              return;
            j(C),
              s = i.PAN
          }
          break;
        default:
          s = i.NONE
      }
      s !== i.NONE && n.dispatchEvent(jr)
    }
    function ze(C) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          Y(C);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          Q(C);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          pe(C);
          break
      }
    }
    function mt(C) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (C.preventDefault(),
        n.dispatchEvent(jr),
        B(C),
        n.dispatchEvent(Za))
    }
    function lt(C) {
      n.enabled === !1 || n.enablePan === !1 || $(C)
    }
    function T(C) {
      switch (ae(C),
        y.length) {
        case 1:
          switch (n.touches.ONE) {
            case Ln.ROTATE:
              if (n.enableRotate === !1)
                return;
              re(),
                s = i.TOUCH_ROTATE;
              break;
            case Ln.PAN:
              if (n.enablePan === !1)
                return;
              O(),
                s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Ln.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              ue(),
                s = i.TOUCH_DOLLY_PAN;
              break;
            case Ln.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              de(),
                s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE
          }
          break;
        default:
          s = i.NONE
      }
      s !== i.NONE && n.dispatchEvent(jr)
    }
    function M(C) {
      switch (ae(C),
        s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          he(C),
            n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          ye(C),
            n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          Ee(C),
            n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          De(C),
            n.update();
          break;
        default:
          s = i.NONE
      }
    }
    function V(C) {
      n.enabled !== !1 && C.preventDefault()
    }
    function te(C) {
      y.push(C)
    }
    function ne(C) {
      delete b[C.pointerId];
      for (let I = 0; I < y.length; I++)
        if (y[I].pointerId == C.pointerId) {
          y.splice(I, 1);
          return
        }
    }
    function ae(C) {
      let I = b[C.pointerId];
      I === void 0 && (I = new we,
        b[C.pointerId] = I),
        I.set(C.pageX, C.pageY)
    }
    function xe(C) {
      const I = C.pointerId === y[0].pointerId ? y[1] : y[0];
      return b[I.pointerId]
    }
    n.domElement.addEventListener("contextmenu", V),
      n.domElement.addEventListener("pointerdown", Ze),
      n.domElement.addEventListener("pointercancel", Je),
      n.domElement.addEventListener("wheel", mt, {
        passive: !1
      }),
      this.update()
  }
}
class Fp extends it {
  constructor(e=document.createElement("div")) {
    super(),
      this.isCSS2DObject = !0,
      this.element = e,
      this.element.style.position = "absolute",
      this.element.style.userSelect = "none",
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function() {
        this.traverse(function(t) {
          t.element instanceof Element && t.element.parentNode !== null && t.element.parentNode.removeChild(t.element)
        })
      })
  }
  copy(e, t) {
    return super.copy(e, t),
      this.element = e.element.cloneNode(!0),
      this
  }
}
const Hn = new D
  , Ja = new Ve
  , Qa = new Ve
  , eo = new D
  , to = new D;
class Op {
  constructor(e={}) {
    const t = this;
    let n, i, s, o;
    const a = {
      objects: new WeakMap
    }
      , c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden",
      this.domElement = c,
      this.getSize = function() {
        return {
          width: n,
          height: i
        }
      }
      ,
      this.render = function(m, g) {
        m.matrixWorldAutoUpdate === !0 && m.updateMatrixWorld(),
        g.parent === null && g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(),
          Ja.copy(g.matrixWorldInverse),
          Qa.multiplyMatrices(g.projectionMatrix, Ja),
          l(m, m, g),
          p(m)
      }
      ,
      this.setSize = function(m, g) {
        n = m,
          i = g,
          s = n / 2,
          o = i / 2,
          c.style.width = m + "px",
          c.style.height = g + "px"
      }
    ;
    function l(m, g, h) {
      if (m.isCSS2DObject) {
        Hn.setFromMatrixPosition(m.matrixWorld),
          Hn.applyMatrix4(Qa);
        const f = m.visible === !0 && Hn.z >= -1 && Hn.z <= 1 && m.layers.test(h.layers) === !0;
        if (m.element.style.display = f === !0 ? "" : "none",
        f === !0) {
          m.onBeforeRender(t, g, h);
          const w = m.element;
          w.style.transform = "translate(-50%,-50%) translate(" + (Hn.x * s + s) + "px," + (-Hn.y * o + o) + "px)",
          w.parentNode !== c && c.appendChild(w),
            m.onAfterRender(t, g, h)
        }
        const v = {
          distanceToCameraSquared: u(h, m)
        };
        a.objects.set(m, v)
      }
      for (let f = 0, v = m.children.length; f < v; f++)
        l(m.children[f], g, h)
    }
    function u(m, g) {
      return eo.setFromMatrixPosition(m.matrixWorld),
        to.setFromMatrixPosition(g.matrixWorld),
        eo.distanceToSquared(to)
    }
    function d(m) {
      const g = [];
      return m.traverse(function(h) {
        h.isCSS2DObject && g.push(h)
      }),
        g
    }
    function p(m) {
      const g = d(m).sort(function(f, v) {
        if (f.renderOrder !== v.renderOrder)
          return v.renderOrder - f.renderOrder;
        const w = a.objects.get(f).distanceToCameraSquared
          , x = a.objects.get(v).distanceToCameraSquared;
        return w - x
      })
        , h = g.length;
      for (let f = 0, v = g.length; f < v; f++)
        g[f].element.style.zIndex = h - f
    }
  }
}
function Vo(r, e) {
  return function() {
    return r.apply(e, arguments)
  }
}
const {toString: Ho} = Object.prototype
  , {getPrototypeOf: xs} = Object
  , vs = (r=>e=>{
    const t = Ho.call(e);
    return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
  }
)(Object.create(null))
  , Jt = r=>(r = r.toLowerCase(),
  e=>vs(e) === r)
  , sr = r=>e=>typeof e === r
  , {isArray: ti} = Array
  , xi = sr("undefined");
function Up(r) {
  return r !== null && !xi(r) && r.constructor !== null && !xi(r.constructor) && cn(r.constructor.isBuffer) && r.constructor.isBuffer(r)
}
const Wo = Jt("ArrayBuffer");
function zp(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && Wo(r.buffer),
    e
}
const Bp = sr("string")
  , cn = sr("function")
  , qo = sr("number")
  , ys = r=>r !== null && typeof r == "object"
  , kp = r=>r === !0 || r === !1
  , Yi = r=>{
  if (vs(r) !== "object")
    return !1;
  const e = xs(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r)
}
  , Gp = Jt("Date")
  , Vp = Jt("File")
  , Hp = Jt("Blob")
  , Wp = Jt("FileList")
  , qp = r=>ys(r) && cn(r.pipe)
  , Xp = r=>{
  const e = "[object FormData]";
  return r && (typeof FormData == "function" && r instanceof FormData || Ho.call(r) === e || cn(r.toString) && r.toString() === e)
}
  , jp = Jt("URLSearchParams")
  , Yp = r=>r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bi(r, e, {allOwnKeys: t=!1}={}) {
  if (r === null || typeof r > "u")
    return;
  let n, i;
  if (typeof r != "object" && (r = [r]),
    ti(r))
    for (n = 0,
           i = r.length; n < i; n++)
      e.call(null, r[n], n, r);
  else {
    const s = t ? Object.getOwnPropertyNames(r) : Object.keys(r)
      , o = s.length;
    let a;
    for (n = 0; n < o; n++)
      a = s[n],
        e.call(null, r[a], a, r)
  }
}
function Xo(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n],
    e === i.toLowerCase())
      return i;
  return null
}
const jo = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , Yo = r=>!xi(r) && r !== jo;
function ss() {
  const {caseless: r} = Yo(this) && this || {}
    , e = {}
    , t = (n,i)=>{
      const s = r && Xo(e, i) || i;
      Yi(e[s]) && Yi(n) ? e[s] = ss(e[s], n) : Yi(n) ? e[s] = ss({}, n) : ti(n) ? e[s] = n.slice() : e[s] = n
    }
  ;
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && bi(arguments[n], t);
  return e
}
const $p = (r,e,t,{allOwnKeys: n}={})=>(bi(e, (i,s)=>{
      t && cn(i) ? r[s] = Vo(i, t) : r[s] = i
    }
    , {
      allOwnKeys: n
    }),
    r)
  , Zp = r=>(r.charCodeAt(0) === 65279 && (r = r.slice(1)),
    r)
  , Kp = (r,e,t,n)=>{
    r.prototype = Object.create(e.prototype, n),
      r.prototype.constructor = r,
      Object.defineProperty(r, "super", {
        value: e.prototype
      }),
    t && Object.assign(r.prototype, t)
  }
  , Jp = (r,e,t,n)=>{
    let i, s, o;
    const a = {};
    if (e = e || {},
    r == null)
      return e;
    do {
      for (i = Object.getOwnPropertyNames(r),
             s = i.length; s-- > 0; )
        o = i[s],
        (!n || n(o, r, e)) && !a[o] && (e[o] = r[o],
          a[o] = !0);
      r = t !== !1 && xs(r)
    } while (r && (!t || t(r, e)) && r !== Object.prototype);
    return e
  }
  , Qp = (r,e,t)=>{
    r = String(r),
    (t === void 0 || t > r.length) && (t = r.length),
      t -= e.length;
    const n = r.indexOf(e, t);
    return n !== -1 && n === t
  }
  , em = r=>{
    if (!r)
      return null;
    if (ti(r))
      return r;
    let e = r.length;
    if (!qo(e))
      return null;
    const t = new Array(e);
    for (; e-- > 0; )
      t[e] = r[e];
    return t
  }
  , tm = (r=>e=>r && e instanceof r)(typeof Uint8Array < "u" && xs(Uint8Array))
  , nm = (r,e)=>{
    const n = (r && r[Symbol.iterator]).call(r);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const s = i.value;
      e.call(r, s[0], s[1])
    }
  }
  , im = (r,e)=>{
    let t;
    const n = [];
    for (; (t = r.exec(e)) !== null; )
      n.push(t);
    return n
  }
  , rm = Jt("HTMLFormElement")
  , sm = r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, i) {
    return n.toUpperCase() + i
  })
  , no = (({hasOwnProperty: r})=>(e,t)=>r.call(e, t))(Object.prototype)
  , am = Jt("RegExp")
  , $o = (r,e)=>{
    const t = Object.getOwnPropertyDescriptors(r)
      , n = {};
    bi(t, (i,s)=>{
        e(i, s, r) !== !1 && (n[s] = i)
      }
    ),
      Object.defineProperties(r, n)
  }
  , om = r=>{
    $o(r, (e,t)=>{
        if (cn(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
          return !1;
        const n = r[t];
        if (cn(n)) {
          if (e.enumerable = !1,
          "writable"in e) {
            e.writable = !1;
            return
          }
          e.set || (e.set = ()=>{
              throw Error("Can not rewrite read-only method '" + t + "'")
            }
          )
        }
      }
    )
  }
  , lm = (r,e)=>{
    const t = {}
      , n = i=>{
        i.forEach(s=>{
            t[s] = !0
          }
        )
      }
    ;
    return ti(r) ? n(r) : n(String(r).split(e)),
      t
  }
  , cm = ()=>{}
  , um = (r,e)=>(r = +r,
    Number.isFinite(r) ? r : e)
  , Yr = "abcdefghijklmnopqrstuvwxyz"
  , io = "0123456789"
  , Zo = {
    DIGIT: io,
    ALPHA: Yr,
    ALPHA_DIGIT: Yr + Yr.toUpperCase() + io
  }
  , hm = (r=16,e=Zo.ALPHA_DIGIT)=>{
    let t = "";
    const {length: n} = e;
    for (; r--; )
      t += e[Math.random() * n | 0];
    return t
  }
;
function dm(r) {
  return !!(r && cn(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator])
}
const fm = r=>{
  const e = new Array(10)
    , t = (n,i)=>{
      if (ys(n)) {
        if (e.indexOf(n) >= 0)
          return;
        if (!("toJSON"in n)) {
          e[i] = n;
          const s = ti(n) ? [] : {};
          return bi(n, (o,a)=>{
              const c = t(o, i + 1);
              !xi(c) && (s[a] = c)
            }
          ),
            e[i] = void 0,
            s
        }
      }
      return n
    }
  ;
  return t(r, 0)
}
  , X = {
  isArray: ti,
  isArrayBuffer: Wo,
  isBuffer: Up,
  isFormData: Xp,
  isArrayBufferView: zp,
  isString: Bp,
  isNumber: qo,
  isBoolean: kp,
  isObject: ys,
  isPlainObject: Yi,
  isUndefined: xi,
  isDate: Gp,
  isFile: Vp,
  isBlob: Hp,
  isRegExp: am,
  isFunction: cn,
  isStream: qp,
  isURLSearchParams: jp,
  isTypedArray: tm,
  isFileList: Wp,
  forEach: bi,
  merge: ss,
  extend: $p,
  trim: Yp,
  stripBOM: Zp,
  inherits: Kp,
  toFlatObject: Jp,
  kindOf: vs,
  kindOfTest: Jt,
  endsWith: Qp,
  toArray: em,
  forEachEntry: nm,
  matchAll: im,
  isHTMLForm: rm,
  hasOwnProperty: no,
  hasOwnProp: no,
  reduceDescriptors: $o,
  freezeMethods: om,
  toObjectSet: lm,
  toCamelCase: sm,
  noop: cm,
  toFiniteNumber: um,
  findKey: Xo,
  global: jo,
  isContextDefined: Yo,
  ALPHABET: Zo,
  generateString: hm,
  isSpecCompliantForm: dm,
  toJSONObject: fm
};
function Ne(r, e, t, n, i) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = r,
    this.name = "AxiosError",
  e && (this.code = e),
  t && (this.config = t),
  n && (this.request = n),
  i && (this.response = i)
}
X.inherits(Ne, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
});
const Ko = Ne.prototype
  , Jo = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(r=>{
    Jo[r] = {
      value: r
    }
  }
);
Object.defineProperties(Ne, Jo);
Object.defineProperty(Ko, "isAxiosError", {
  value: !0
});
Ne.from = (r,e,t,n,i,s)=>{
  const o = Object.create(Ko);
  return X.toFlatObject(r, o, function(c) {
    return c !== Error.prototype
  }, a=>a !== "isAxiosError"),
    Ne.call(o, r.message, e, t, n, i),
    o.cause = r,
    o.name = r.name,
  s && Object.assign(o, s),
    o
}
;
const pm = null;
function as(r) {
  return X.isPlainObject(r) || X.isArray(r)
}
function Qo(r) {
  return X.endsWith(r, "[]") ? r.slice(0, -2) : r
}
function ro(r, e, t) {
  return r ? r.concat(e).map(function(i, s) {
    return i = Qo(i),
      !t && s ? "[" + i + "]" : i
  }).join(t ? "." : "") : e
}
function mm(r) {
  return X.isArray(r) && !r.some(as)
}
const gm = X.toFlatObject(X, {}, null, function(e) {
  return /^is[A-Z]/.test(e)
});
function ar(r, e, t) {
  if (!X.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData,
    t = X.toFlatObject(t, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(h, f) {
      return !X.isUndefined(f[h])
    });
  const n = t.metaTokens
    , i = t.visitor || u
    , s = t.dots
    , o = t.indexes
    , c = (t.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(e);
  if (!X.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null)
      return "";
    if (X.isDate(g))
      return g.toISOString();
    if (!c && X.isBlob(g))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(g) || X.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
  }
  function u(g, h, f) {
    let v = g;
    if (g && !f && typeof g == "object") {
      if (X.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2),
          g = JSON.stringify(g);
      else if (X.isArray(g) && mm(g) || (X.isFileList(g) || X.endsWith(h, "[]")) && (v = X.toArray(g)))
        return h = Qo(h),
          v.forEach(function(x, S) {
            !(X.isUndefined(x) || x === null) && e.append(o === !0 ? ro([h], S, s) : o === null ? h : h + "[]", l(x))
          }),
          !1
    }
    return as(g) ? !0 : (e.append(ro(f, h, s), l(g)),
      !1)
  }
  const d = []
    , p = Object.assign(gm, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: as
  });
  function m(g, h) {
    if (!X.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g),
        X.forEach(g, function(v, w) {
          (!(X.isUndefined(v) || v === null) && i.call(e, v, X.isString(w) ? w.trim() : w, h, p)) === !0 && m(v, h ? h.concat(w) : [w])
        }),
        d.pop()
    }
  }
  if (!X.isObject(r))
    throw new TypeError("data must be an object");
  return m(r),
    e
}
function so(r) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n]
  })
}
function Ms(r, e) {
  this._pairs = [],
  r && ar(r, this, e)
}
const el = Ms.prototype;
el.append = function(e, t) {
  this._pairs.push([e, t])
}
;
el.toString = function(e) {
  const t = e ? function(n) {
      return e.call(this, n, so)
    }
    : so;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1])
  }, "").join("&")
}
;
function _m(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function tl(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || _m
    , i = t && t.serialize;
  let s;
  if (i ? s = i(e, t) : s = X.isURLSearchParams(e) ? e.toString() : new Ms(e,t).toString(n),
    s) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)),
      r += (r.indexOf("?") === -1 ? "?" : "&") + s
  }
  return r
}
class xm {
  constructor() {
    this.handlers = []
  }
  use(e, t, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }),
    this.handlers.length - 1
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(e) {
    X.forEach(this.handlers, function(n) {
      n !== null && e(n)
    })
  }
}
const ao = xm
  , nl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}
  , vm = typeof URLSearchParams < "u" ? URLSearchParams : Ms
  , ym = typeof FormData < "u" ? FormData : null
  , Mm = typeof Blob < "u" ? Blob : null
  , Sm = (()=>{
    let r;
    return typeof navigator < "u" && ((r = navigator.product) === "ReactNative" || r === "NativeScript" || r === "NS") ? !1 : typeof window < "u" && typeof document < "u"
  }
)()
  , bm = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , kt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vm,
    FormData: ym,
    Blob: Mm
  },
  isStandardBrowserEnv: Sm,
  isStandardBrowserWebWorkerEnv: bm,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function wm(r, e) {
  return ar(r, new kt.classes.URLSearchParams, Object.assign({
    visitor: function(t, n, i, s) {
      return kt.isNode && X.isBuffer(t) ? (this.append(n, t.toString("base64")),
        !1) : s.defaultVisitor.apply(this, arguments)
    }
  }, e))
}
function Em(r) {
  return X.matchAll(/\w+|\[(\w*)]/g, r).map(e=>e[0] === "[]" ? "" : e[1] || e[0])
}
function Tm(r) {
  const e = {}
    , t = Object.keys(r);
  let n;
  const i = t.length;
  let s;
  for (n = 0; n < i; n++)
    s = t[n],
      e[s] = r[s];
  return e
}
function il(r) {
  function e(t, n, i, s) {
    let o = t[s++];
    const a = Number.isFinite(+o)
      , c = s >= t.length;
    return o = !o && X.isArray(i) ? i.length : o,
      c ? (X.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n,
        !a) : ((!i[o] || !X.isObject(i[o])) && (i[o] = []),
      e(t, n, i[o], s) && X.isArray(i[o]) && (i[o] = Tm(i[o])),
        !a)
  }
  if (X.isFormData(r) && X.isFunction(r.entries)) {
    const t = {};
    return X.forEachEntry(r, (n,i)=>{
        e(Em(n), i, t, 0)
      }
    ),
      t
  }
  return null
}
const Am = {
  "Content-Type": void 0
};
function Cm(r, e, t) {
  if (X.isString(r))
    try {
      return (e || JSON.parse)(r),
        X.trim(r)
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n
    }
  return (t || JSON.stringify)(r)
}
const or = {
  transitional: nl,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || ""
      , i = n.indexOf("application/json") > -1
      , s = X.isObject(e);
    if (s && X.isHTMLForm(e) && (e = new FormData(e)),
      X.isFormData(e))
      return i && i ? JSON.stringify(il(e)) : e;
    if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e))
      return e;
    if (X.isArrayBufferView(e))
      return e.buffer;
    if (X.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
        e.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return wm(e, this.formSerializer).toString();
      if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ar(a ? {
          "files[]": e
        } : e, c && new c, this.formSerializer)
      }
    }
    return s || i ? (t.setContentType("application/json", !1),
      Cm(e)) : e
  }
  ],
  transformResponse: [function(e) {
    const t = this.transitional || or.transitional
      , n = t && t.forcedJSONParsing
      , i = this.responseType === "json";
    if (e && X.isString(e) && (n && !this.responseType || i)) {
      const o = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(e)
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? Ne.from(a, Ne.ERR_BAD_RESPONSE, this, null, this.response) : a
      }
    }
    return e
  }
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: kt.classes.FormData,
    Blob: kt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
X.forEach(["delete", "get", "head"], function(e) {
  or.headers[e] = {}
});
X.forEach(["post", "put", "patch"], function(e) {
  or.headers[e] = X.merge(Am)
});
const Ss = or
  , Lm = X.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Rm = r=>{
  const e = {};
  let t, n, i;
  return r && r.split(`
`).forEach(function(o) {
    i = o.indexOf(":"),
      t = o.substring(0, i).trim().toLowerCase(),
      n = o.substring(i + 1).trim(),
    !(!t || e[t] && Lm[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n)
  }),
    e
}
  , oo = Symbol("internals");
function ui(r) {
  return r && String(r).trim().toLowerCase()
}
function $i(r) {
  return r === !1 || r == null ? r : X.isArray(r) ? r.map($i) : String(r)
}
function Pm(r) {
  const e = Object.create(null)
    , t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e
}
function Dm(r) {
  return /^[-_a-zA-Z]+$/.test(r.trim())
}
function $r(r, e, t, n, i) {
  if (X.isFunction(n))
    return n.call(this, e, t);
  if (i && (e = t),
    !!X.isString(e)) {
    if (X.isString(n))
      return e.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(e)
  }
}
function Im(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e,t,n)=>t.toUpperCase() + n)
}
function Nm(r, e) {
  const t = X.toCamelCase(" " + e);
  ["get", "set", "has"].forEach(n=>{
      Object.defineProperty(r, n + t, {
        value: function(i, s, o) {
          return this[n].call(this, e, i, s, o)
        },
        configurable: !0
      })
    }
  )
}
class lr {
  constructor(e) {
    e && this.set(e)
  }
  set(e, t, n) {
    const i = this;
    function s(a, c, l) {
      const u = ui(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = X.findKey(i, u);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || c] = $i(a))
    }
    const o = (a,c)=>X.forEach(a, (l,u)=>s(l, u, c));
    return X.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : X.isString(e) && (e = e.trim()) && !Dm(e) ? o(Rm(e), t) : e != null && s(t, e, n),
      this
  }
  get(e, t) {
    if (e = ui(e),
      e) {
      const n = X.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return Pm(i);
        if (X.isFunction(t))
          return t.call(this, i, n);
        if (X.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(e, t) {
    if (e = ui(e),
      e) {
      const n = X.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || $r(this, this[n], n, t)))
    }
    return !1
  }
  delete(e, t) {
    const n = this;
    let i = !1;
    function s(o) {
      if (o = ui(o),
        o) {
        const a = X.findKey(n, o);
        a && (!t || $r(n, n[a], a, t)) && (delete n[a],
          i = !0)
      }
    }
    return X.isArray(e) ? e.forEach(s) : s(e),
      i
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length
      , i = !1;
    for (; n--; ) {
      const s = t[n];
      (!e || $r(this, this[s], s, e, !0)) && (delete this[s],
        i = !0)
    }
    return i
  }
  normalize(e) {
    const t = this
      , n = {};
    return X.forEach(this, (i,s)=>{
        const o = X.findKey(n, s);
        if (o) {
          t[o] = $i(i),
            delete t[s];
          return
        }
        const a = e ? Im(s) : String(s).trim();
        a !== s && delete t[s],
          t[a] = $i(i),
          n[a] = !0
      }
    ),
      this
  }
  concat(...e) {
    return this.constructor.concat(this, ...e)
  }
  toJSON(e) {
    const t = Object.create(null);
    return X.forEach(this, (n,i)=>{
        n != null && n !== !1 && (t[i] = e && X.isArray(n) ? n.join(", ") : n)
      }
    ),
      t
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e,t])=>e + ": " + t).join(`
`)
  }
  get[Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(e) {
    return e instanceof this ? e : new this(e)
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach(i=>n.set(i)),
      n
  }
  static accessor(e) {
    const n = (this[oo] = this[oo] = {
      accessors: {}
    }).accessors
      , i = this.prototype;
    function s(o) {
      const a = ui(o);
      n[a] || (Nm(i, o),
        n[a] = !0)
    }
    return X.isArray(e) ? e.forEach(s) : s(e),
      this
  }
}
lr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.freezeMethods(lr.prototype);
X.freezeMethods(lr);
const Kt = lr;
function Zr(r, e) {
  const t = this || Ss
    , n = e || t
    , i = Kt.from(n.headers);
  let s = n.data;
  return X.forEach(r, function(a) {
    s = a.call(t, s, i.normalize(), e ? e.status : void 0)
  }),
    i.normalize(),
    s
}
function rl(r) {
  return !!(r && r.__CANCEL__)
}
function wi(r, e, t) {
  Ne.call(this, r ?? "canceled", Ne.ERR_CANCELED, e, t),
    this.name = "CanceledError"
}
X.inherits(wi, Ne, {
  __CANCEL__: !0
});
function Fm(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new Ne("Request failed with status code " + t.status,[Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],t.config,t.request,t))
}
const Om = kt.isStandardBrowserEnv ? function() {
  return {
    write: function(t, n, i, s, o, a) {
      const c = [];
      c.push(t + "=" + encodeURIComponent(n)),
      X.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()),
      X.isString(s) && c.push("path=" + s),
      X.isString(o) && c.push("domain=" + o),
      a === !0 && c.push("secure"),
        document.cookie = c.join("; ")
    },
    read: function(t) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null
    },
    remove: function(t) {
      this.write(t, "", Date.now() - 864e5)
    }
  }
}() : function() {
  return {
    write: function() {},
    read: function() {
      return null
    },
    remove: function() {}
  }
}();
function Um(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}
function zm(r, e) {
  return e ? r.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : r
}
function sl(r, e) {
  return r && !Um(e) ? zm(r, e) : e
}
const Bm = kt.isStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent)
    , t = document.createElement("a");
  let n;
  function i(s) {
    let o = s;
    return e && (t.setAttribute("href", o),
      o = t.href),
      t.setAttribute("href", o),
      {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      }
  }
  return n = i(window.location.href),
    function(o) {
      const a = X.isString(o) ? i(o) : o;
      return a.protocol === n.protocol && a.host === n.host
    }
}() : function() {
  return function() {
    return !0
  }
}();
function km(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || ""
}
function Gm(r, e) {
  r = r || 10;
  const t = new Array(r)
    , n = new Array(r);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3,
    function(c) {
      const l = Date.now()
        , u = n[s];
      o || (o = l),
        t[i] = c,
        n[i] = l;
      let d = s
        , p = 0;
      for (; d !== i; )
        p += t[d++],
          d = d % r;
      if (i = (i + 1) % r,
      i === s && (s = (s + 1) % r),
      l - o < e)
        return;
      const m = u && l - u;
      return m ? Math.round(p * 1e3 / m) : void 0
    }
}
function lo(r, e) {
  let t = 0;
  const n = Gm(50, 250);
  return i=>{
    const s = i.loaded
      , o = i.lengthComputable ? i.total : void 0
      , a = s - t
      , c = n(a)
      , l = s <= o;
    t = s;
    const u = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && l ? (o - s) / c : void 0,
      event: i
    };
    u[e ? "download" : "upload"] = !0,
      r(u)
  }
}
const Vm = typeof XMLHttpRequest < "u"
  , Hm = Vm && function(r) {
  return new Promise(function(t, n) {
      let i = r.data;
      const s = Kt.from(r.headers).normalize()
        , o = r.responseType;
      let a;
      function c() {
        r.cancelToken && r.cancelToken.unsubscribe(a),
        r.signal && r.signal.removeEventListener("abort", a)
      }
      X.isFormData(i) && (kt.isStandardBrowserEnv || kt.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
      let l = new XMLHttpRequest;
      if (r.auth) {
        const m = r.auth.username || ""
          , g = r.auth.password ? unescape(encodeURIComponent(r.auth.password)) : "";
        s.set("Authorization", "Basic " + btoa(m + ":" + g))
      }
      const u = sl(r.baseURL, r.url);
      l.open(r.method.toUpperCase(), tl(u, r.params, r.paramsSerializer), !0),
        l.timeout = r.timeout;
      function d() {
        if (!l)
          return;
        const m = Kt.from("getAllResponseHeaders"in l && l.getAllResponseHeaders())
          , h = {
          data: !o || o === "text" || o === "json" ? l.responseText : l.response,
          status: l.status,
          statusText: l.statusText,
          headers: m,
          config: r,
          request: l
        };
        Fm(function(v) {
          t(v),
            c()
        }, function(v) {
          n(v),
            c()
        }, h),
          l = null
      }
      if ("onloadend"in l ? l.onloadend = d : l.onreadystatechange = function() {
        !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d)
      }
        ,
        l.onabort = function() {
          l && (n(new Ne("Request aborted",Ne.ECONNABORTED,r,l)),
            l = null)
        }
        ,
        l.onerror = function() {
          n(new Ne("Network Error",Ne.ERR_NETWORK,r,l)),
            l = null
        }
        ,
        l.ontimeout = function() {
          let g = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
          const h = r.transitional || nl;
          r.timeoutErrorMessage && (g = r.timeoutErrorMessage),
            n(new Ne(g,h.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,r,l)),
            l = null
        }
        ,
        kt.isStandardBrowserEnv) {
        const m = (r.withCredentials || Bm(u)) && r.xsrfCookieName && Om.read(r.xsrfCookieName);
        m && s.set(r.xsrfHeaderName, m)
      }
      i === void 0 && s.setContentType(null),
      "setRequestHeader"in l && X.forEach(s.toJSON(), function(g, h) {
        l.setRequestHeader(h, g)
      }),
      X.isUndefined(r.withCredentials) || (l.withCredentials = !!r.withCredentials),
      o && o !== "json" && (l.responseType = r.responseType),
      typeof r.onDownloadProgress == "function" && l.addEventListener("progress", lo(r.onDownloadProgress, !0)),
      typeof r.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", lo(r.onUploadProgress)),
      (r.cancelToken || r.signal) && (a = m=>{
        l && (n(!m || m.type ? new wi(null,r,l) : m),
          l.abort(),
          l = null)
      }
        ,
      r.cancelToken && r.cancelToken.subscribe(a),
      r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
      const p = km(u);
      if (p && kt.protocols.indexOf(p) === -1) {
        n(new Ne("Unsupported protocol " + p + ":",Ne.ERR_BAD_REQUEST,r));
        return
      }
      l.send(i || null)
    }
  )
}
  , Zi = {
  http: pm,
  xhr: Hm
};
X.forEach(Zi, (r,e)=>{
    if (r) {
      try {
        Object.defineProperty(r, "name", {
          value: e
        })
      } catch {}
      Object.defineProperty(r, "adapterName", {
        value: e
      })
    }
  }
);
const Wm = {
  getAdapter: r=>{
    r = X.isArray(r) ? r : [r];
    const {length: e} = r;
    let t, n;
    for (let i = 0; i < e && (t = r[i],
      !(n = X.isString(t) ? Zi[t.toLowerCase()] : t)); i++)
      ;
    if (!n)
      throw n === !1 ? new Ne(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(X.hasOwnProp(Zi, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`);
    if (!X.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n
  }
  ,
  adapters: Zi
};
function Kr(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(),
  r.signal && r.signal.aborted)
    throw new wi(null,r)
}
function co(r) {
  return Kr(r),
    r.headers = Kt.from(r.headers),
    r.data = Zr.call(r, r.transformRequest),
  ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Wm.getAdapter(r.adapter || Ss.adapter)(r).then(function(n) {
      return Kr(r),
        n.data = Zr.call(r, r.transformResponse, n),
        n.headers = Kt.from(n.headers),
        n
    }, function(n) {
      return rl(n) || (Kr(r),
      n && n.response && (n.response.data = Zr.call(r, r.transformResponse, n.response),
        n.response.headers = Kt.from(n.response.headers))),
        Promise.reject(n)
    })
}
const uo = r=>r instanceof Kt ? r.toJSON() : r;
function Qn(r, e) {
  e = e || {};
  const t = {};
  function n(l, u, d) {
    return X.isPlainObject(l) && X.isPlainObject(u) ? X.merge.call({
      caseless: d
    }, l, u) : X.isPlainObject(u) ? X.merge({}, u) : X.isArray(u) ? u.slice() : u
  }
  function i(l, u, d) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(l))
        return n(void 0, l, d)
    } else
      return n(l, u, d)
  }
  function s(l, u) {
    if (!X.isUndefined(u))
      return n(void 0, u)
  }
  function o(l, u) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(l))
        return n(void 0, l)
    } else
      return n(void 0, u)
  }
  function a(l, u, d) {
    if (d in e)
      return n(l, u);
    if (d in r)
      return n(void 0, l)
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l,u)=>i(uo(l), uo(u), !0)
  };
  return X.forEach(Object.keys(r).concat(Object.keys(e)), function(u) {
    const d = c[u] || i
      , p = d(r[u], e[u], u);
    X.isUndefined(p) && d !== a || (t[u] = p)
  }),
    t
}
const al = "1.3.4"
  , bs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r,e)=>{
    bs[r] = function(n) {
      return typeof n === r || "a" + (e < 1 ? "n " : " ") + r
    }
  }
);
const ho = {};
bs.transitional = function(e, t, n) {
  function i(s, o) {
    return "[Axios v" + al + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "")
  }
  return (s,o,a)=>{
    if (e === !1)
      throw new Ne(i(o, " has been removed" + (t ? " in " + t : "")),Ne.ERR_DEPRECATED);
    return t && !ho[o] && (ho[o] = !0,
      console.warn(i(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
      e ? e(s, o, a) : !0
  }
}
;
function qm(r, e, t) {
  if (typeof r != "object")
    throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i]
      , o = e[s];
    if (o) {
      const a = r[s]
        , c = a === void 0 || o(a, s, r);
      if (c !== !0)
        throw new Ne("option " + s + " must be " + c,Ne.ERR_BAD_OPTION_VALUE);
      continue
    }
    if (t !== !0)
      throw new Ne("Unknown option " + s,Ne.ERR_BAD_OPTION)
  }
}
const os = {
  assertOptions: qm,
  validators: bs
}
  , rn = os.validators;
class er {
  constructor(e) {
    this.defaults = e,
      this.interceptors = {
        request: new ao,
        response: new ao
      }
  }
  request(e, t) {
    typeof e == "string" ? (t = t || {},
      t.url = e) : t = e || {},
      t = Qn(this.defaults, t);
    const {transitional: n, paramsSerializer: i, headers: s} = t;
    n !== void 0 && os.assertOptions(n, {
      silentJSONParsing: rn.transitional(rn.boolean),
      forcedJSONParsing: rn.transitional(rn.boolean),
      clarifyTimeoutError: rn.transitional(rn.boolean)
    }, !1),
    i !== void 0 && os.assertOptions(i, {
      encode: rn.function,
      serialize: rn.function
    }, !0),
      t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o;
    o = s && X.merge(s.common, s[t.method]),
    o && X.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g=>{
        delete s[g]
      }
    ),
      t.headers = Kt.concat(o, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(t) === !1 || (c = c && h.synchronous,
        a.unshift(h.fulfilled, h.rejected))
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected)
    });
    let u, d = 0, p;
    if (!c) {
      const g = [co.bind(this), void 0];
      for (g.unshift.apply(g, a),
             g.push.apply(g, l),
             p = g.length,
             u = Promise.resolve(t); d < p; )
        u = u.then(g[d++], g[d++]);
      return u
    }
    p = a.length;
    let m = t;
    for (d = 0; d < p; ) {
      const g = a[d++]
        , h = a[d++];
      try {
        m = g(m)
      } catch (f) {
        h.call(this, f);
        break
      }
    }
    try {
      u = co.call(this, m)
    } catch (g) {
      return Promise.reject(g)
    }
    for (d = 0,
           p = l.length; d < p; )
      u = u.then(l[d++], l[d++]);
    return u
  }
  getUri(e) {
    e = Qn(this.defaults, e);
    const t = sl(e.baseURL, e.url);
    return tl(t, e.params, e.paramsSerializer)
  }
}
X.forEach(["delete", "get", "head", "options"], function(e) {
  er.prototype[e] = function(t, n) {
    return this.request(Qn(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }))
  }
});
X.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(s, o, a) {
      return this.request(Qn(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }))
    }
  }
  er.prototype[e] = t(),
    er.prototype[e + "Form"] = t(!0)
});
const Ki = er;
class ws {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(s) {
        t = s
      }
    );
    const n = this;
    this.promise.then(i=>{
        if (!n._listeners)
          return;
        let s = n._listeners.length;
        for (; s-- > 0; )
          n._listeners[s](i);
        n._listeners = null
      }
    ),
      this.promise.then = i=>{
        let s;
        const o = new Promise(a=>{
            n.subscribe(a),
              s = a
          }
        ).then(i);
        return o.cancel = function() {
          n.unsubscribe(s)
        }
          ,
          o
      }
      ,
      e(function(s, o, a) {
        n.reason || (n.reason = new wi(s,o,a),
          t(n.reason))
      })
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e]
  }
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1)
  }
  static source() {
    let e;
    return {
      token: new ws(function(i) {
          e = i
        }
      ),
      cancel: e
    }
  }
}
const Xm = ws;
function jm(r) {
  return function(t) {
    return r.apply(null, t)
  }
}
function Ym(r) {
  return X.isObject(r) && r.isAxiosError === !0
}
const ls = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ls).forEach(([r,e])=>{
    ls[e] = r
  }
);
const $m = ls;
function ol(r) {
  const e = new Ki(r)
    , t = Vo(Ki.prototype.request, e);
  return X.extend(t, Ki.prototype, e, {
    allOwnKeys: !0
  }),
    X.extend(t, e, null, {
      allOwnKeys: !0
    }),
    t.create = function(i) {
      return ol(Qn(r, i))
    }
    ,
    t
}
const $e = ol(Ss);
$e.Axios = Ki;
$e.CanceledError = wi;
$e.CancelToken = Xm;
$e.isCancel = rl;
$e.VERSION = al;
$e.toFormData = ar;
$e.AxiosError = Ne;
$e.Cancel = $e.CanceledError;
$e.all = function(e) {
  return Promise.all(e)
}
;
$e.spread = jm;
$e.isAxiosError = Ym;
$e.mergeConfig = Qn;
$e.AxiosHeaders = Kt;
$e.formToJSON = r=>il(X.isHTMLForm(r) ? new FormData(r) : r);
$e.HttpStatusCode = $m;
$e.default = $e;
const Zm = $e;
const Km = {
  name: "model",
  data() {
    return {
      isRoll: [!0, !0, !0],
      listMesh: [],
      list2Mesh: [],
      list3Mesh: [],
      listAngle: [],
      list2Angle: [],
      list3Angle: [],
      width: 0,
      height: 0,
      listLabel: [],
      list2Label: [],
      list3Label: [],
      list: [],
      list2: [],
      list3: [],
      speed: [],
      huanList: []
    }
  },
  created: function() {},
  watch: {},
  mounted: function() {
    this.getData()
  },
  methods: {
    getData() {
      var r = this;
      Zm({
        method: "get",
        url: "data.json?" + Math.round(new Date / 1e3),
        timeout: 1e3
      }).then(function(e) {
        console.log(e.data),
          r.list = e.data.list,
          r.list2 = e.data.list2,
          r.list3 = e.data.list3,
          r.huanList = e.data.huanList,
          r.speed = e.data.speed,
          r.getPage()
      })
    },
    tag(r, e, t) {
      var n = this
        , i = document.createElement("div");
      i.innerHTML = `<a class="point" href="${e.url}" target="_blank">
          <span>${e.title}</span>
        </a>`,
        i.addEventListener("mouseover", function(o) {
          n.isRoll[t] = !1
        }),
        i.addEventListener("mouseout", function(o) {
          n.isRoll[t] = !0
        }),
        i.classList.add("tag");
      var s = new Fp(i);
      return i.style.pointerEvents = "none",
        s
    },
    getPage() {
      var r = this;
      this.width = this.$refs.canvasGLTF.offsetWidth,
        this.height = this.$refs.canvasGLTF.offsetHeight;
      var e = new Tp
        , t = new Op;
      t.setSize(document.getElementById("canvasGLTFFactory").clientWidth, document.getElementById("canvasGLTFFactory").clientHeight),
        t.domElement.style.position = "absolute",
        t.domElement.style.top = "0px",
        t.domElement.style.left = "0px",
        t.domElement.style.pointerEvents = "none",
        this.list.forEach((g,h)=>{
            var f = new pi(1,0,10)
              , v = new fi({
              color: 65535,
              transparent: !0,
              opacity: 0
            })
              , w = new Dt(f,v);
            w.name = g.title,
              e.add(w);
            var x = e.getObjectByName(g.title)
              , S = r.tag(x.title, g, 0)
              , y = new D;
            x.getWorldPosition(y),
              S.position.copy(y),
              e.add(S),
              this.listLabel.push(S),
              this.listMesh.push(w)
          }
        ),
        this.list2.forEach(g=>{
            var h = new pi(10,25,25)
              , f = new fi({
              color: 65535,
              transparent: !0,
              opacity: 0
            })
              , v = new Dt(h,f);
            v.name = g.title,
              e.add(v);
            var w = e.getObjectByName(g.title)
              , x = r.tag(w.title, g, 1)
              , S = new D;
            w.getWorldPosition(S),
              x.position.copy(S),
              e.add(x),
              this.list2Label.push(x),
              this.list2Mesh.push(v)
          }
        ),
        this.list3.forEach(g=>{
            var h = new pi(10,25,25)
              , f = new fi({
              color: 65535,
              transparent: !0,
              opacity: 0
            })
              , v = new Dt(h,f);
            v.name = g.title,
              e.add(v);
            var w = e.getObjectByName(g.title)
              , x = r.tag(w.title, g, 2)
              , S = new D;
            w.getWorldPosition(S),
              x.position.copy(S),
              e.add(x),
              this.list3Label.push(x),
              this.list3Mesh.push(v)
          }
        );
      var n = new ja(16777215,.9);
      n.position.set(400, 200, 300),
        e.add(n);
      var i = new ja(16777215,.9);
      i.position.set(-400, -200, -300),
        e.add(i);
      var s = new Np(16777215,.6);
      e.add(s);
      var o = r.width
        , a = r.height
        , c = o / a
        , l = 140
        , u = new ms(-l * c,l * c,l,-l,1,1e3);
      u.position.set(302.3330805676746, 134.65765865298852, 245.89026690895125),
        u.lookAt(e.position);
      var d = new _s({
        antialias: !0,
        alpha: !0
      });
      new Ka(u,d.domElement),
        d.setSize(r.width, r.height),
        r.$refs.canvasGLTF.appendChild(d.domElement),
        r.$refs.canvasGLTF.appendChild(t.domElement),
        r.huanList.forEach(g=>{
            m(g.R)
          }
        ),
        r.list.forEach((g,h)=>{
            r.listAngle.push(Math.PI / 5 * h)
          }
        ),
        r.list2.forEach((g,h)=>{
            r.list2Angle.push(Math.PI / 1.5 * h)
          }
        ),
        r.list3.forEach((g,h)=>{
            r.list3Angle.push(Math.PI / 1.5 * h)
          }
        );
      function p() {
        d.render(e, u),
          t.render(e, u),
          r.listMesh.forEach((g,h)=>{
              r.listAngle[h] -= r.isRoll[0] ? r.speed[0].num : 0;
              var f = r.huanList[0].R * Math.sin(r.listAngle[h])
                , v = r.huanList[0].R * Math.cos(r.listAngle[h]);
              g.position.set(f, 0, v);
              var w = new D;
              g.getWorldPosition(w),
                r.listLabel[h].position.copy(w)
            }
          ),
          r.list2Mesh.forEach((g,h)=>{
              r.list2Angle[h] -= r.isRoll[1] ? r.speed[1].num : 0;
              var f = r.huanList[2].R * Math.sin(r.list2Angle[h])
                , v = r.huanList[2].R * Math.cos(r.list2Angle[h]);
              g.position.set(f, 0, v);
              var w = new D;
              g.getWorldPosition(w),
                r.list2Label[h].position.copy(w)
            }
          ),
          r.list3Mesh.forEach((g,h)=>{
              r.list3Angle[h] -= r.isRoll[2] ? r.speed[1].num : 0;
              var f = r.huanList[4].R * Math.sin(r.list3Angle[h])
                , v = r.huanList[4].R * Math.cos(r.list3Angle[h]);
              g.position.set(f, 0, v);
              var w = new D;
              g.getWorldPosition(w),
                r.list3Label[h].position.copy(w)
            }
          ),
          requestAnimationFrame(p)
      }
      p(),
        new Ka(u,d.domElement);
      function m(g) {
        var h = new Pp(0,0,g,0,2 * Math.PI,!0)
          , f = h.getPoints(100)
          , v = new Vt;
        v.setFromPoints(f);
        var w = new ko({
          color: 1001860,
          linewidth: 1
        })
          , x = new Cp(v,w);
        x.rotateX(Math.PI / 2),
          e.add(x)
      }
    }
  }
}
  , Jm = {
  className: "canvasGLTFBody"
}
  , Qm = {
  ref: "canvasGLTF",
  class: "canvasGLTF",
  id: "canvasGLTFFactory"
};
function eg(r, e, t, n, i, s) {
  return us(),
    hs("div", Jm, [zt("div", Qm, null, 512)])
}
const tg = cs(Km, [["render", eg], ["__scopeId", "data-v-32acb7da"]]);
const ng = {
  name: "home",
  components: {
    Top: Ml,
    model: tg
  },
  props: {
    id: {
      type: String,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      checked2: !1,
      value2: !1
    }
  },
  mounted() {
    var r = new mo({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function(e) {},
      scrollContainer: null,
      resetAnimation: !0
    });
    r.init()
  },
  computed: {},
  watch: {},
  methods: {
    getHide() {
      this.show = !1
    }
  }
}
  , ig = r=>(fo("data-v-677219a8"),
  r = r(),
  po(),
  r)
  , rg = {
  class: "home"
}
  , sg = {
  class: "homeMain"
}
  , ag = ig(()=>zt("div", {
  class: "popLeft wow fadeInLeft"
}, [zt("div", {
  class: "title"
}, "简介"), zt("div", {
  class: "desc"
}, [zt("p", null, "滁州职业技术学院智慧校园综合指挥中心建成于2022年12月，总建筑面积303.43平方米，分为门厅、指挥中心、会商室、控制室、值班室等功能区域。 "), zt("p", null, " 智慧校园综合指挥中心集成智慧校园管控平台、校园安防大脑系统、BIM建模展示、智慧校园大数据展示与分析、在线巡课系统等功能模块，构建“一中心、多系统、全场景、泛应用”的综合平台。 "), zt("p", null, " 智慧校园综合采用云计算、物联网、大数据、人工智能等先进技术，建立集通信、指挥和调度一体化、智能化的指挥系统，做到统一平台、统一通信、统一部署、统一指挥、统一调度，以信息化推进学校治理体系和治理能力现代化。 ")])], -1))
  , og = {
  class: "quan"
};
function lg(r, e, t, n, i, s) {
  const o = As("Top")
    , a = As("model");
  return us(),
    hs("div", rg, [Cs(o), zt("div", sg, [ag, zt("div", og, [Cs(a)])])])
}
const ug = cs(ng, [["render", lg], ["__scopeId", "data-v-677219a8"]]);
export {ug as default};
