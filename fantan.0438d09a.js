"use strict";
(() => {
    var t, e, i, s, n, o, r, a = {
        332390: (t, e, i) => {
            i(584481)
        }
        ,
        92894: (t, e, i) => {
            i.d(e, {
                FY: () => o.F,
                Pi: () => r.P
            }),
                i(705191);
            var s = i(15644)
                , n = i(925999)
                , o = (i(584481),
                    i(72433))
                , r = i(789369);
            i(332390),
                i(907069),
                i(414503),
                i(195481),
                i(482886),
                n.z0(s.m)
        }
        ,
        789369: (t, e, i) => {
            i.d(e, {
                P: () => l
            });
            var s = i(989526)
                , n = i(72433)
                , o = i(584481)
                , r = "function" == typeof Symbol && Symbol.for
                , a = r ? Symbol.for("react.forward_ref") : "function" == typeof s.forwardRef && s.forwardRef((function (t) {
                    return null
                }
                )).$$typeof
                , c = r ? Symbol.for("react.memo") : "function" == typeof s.memo && s.memo((function (t) {
                    return null
                }
                )).$$typeof;
            function l(t, e) {
                var i;
                if (c && t.$$typeof === c)
                    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
                if (n.F())
                    return t;
                var r = null !== (i = null == e ? void 0 : e.forwardRef) && void 0 !== i && i
                    , l = t
                    , u = t.displayName || t.name;
                if (a && t.$$typeof === a && (r = !0,
                    "function" != typeof (l = t.render)))
                    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
                var d, p, m = function (t, e) {
                    return o.S((function () {
                        return l(t, e)
                    }
                    ), u)
                };
                return "" !== u && (m.displayName = u),
                    t.contextTypes && (m.contextTypes = t.contextTypes),
                    r && (m = s.forwardRef(m)),
                    m = s.memo(m),
                    d = t,
                    p = m,
                    Object.keys(d).forEach((function (t) {
                        h[t] || Object.defineProperty(p, t, Object.getOwnPropertyDescriptor(d, t))
                    }
                    )),
                    m
            }
            var h = {
                $$typeof: !0,
                render: !0,
                compare: !0,
                type: !0,
                displayName: !0
            }
        }
        ,
        72433: (t, e, i) => {
            i.d(e, {
                F: () => n
            });
            var s = !1;
            function n() {
                return s
            }
        }
        ,
        195481: (t, e, i) => {
            i(989526)
        }
        ,
        907069: (t, e, i) => {
            i(989526)
        }
        ,
        414503: (t, e, i) => {
            i(989526),
                i(195481)
        }
        ,
        584481: (t, e, i) => {
            i.d(e, {
                S: () => d
            });
            var s = i(559621)
                , n = i(989526)
                , o = i(881224)
                , r = i(482886)
                , a = i(72433)
                , c = function (t, e) {
                    var i = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!i)
                        return t;
                    var s, n, o = i.call(t), r = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(s = o.next()).done;)
                            r.push(s.value)
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (i = o.return) && i.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return r
                };
            function l(t) {
                return "observer".concat(t)
            }
            var h = function () { };
            function u() {
                return new h
            }
            function d(t, e) {
                if (void 0 === e && (e = "observed"),
                    a.F())
                    return t();
                var i = c(n.useState(u), 1)[0]
                    , h = c(n.useState(), 2)[1]
                    , d = function () {
                        return h([])
                    }
                    , p = n.useRef(null);
                if (!p.current)
                    var m = new s.le(l(e), (function () {
                        b.mounted ? d() : b.changedBeforeMount = !0
                    }
                    ))
                        , b = r.bb(p, m, i);
                var f, g, v = p.current.reaction;
                if (n.useDebugValue(v, o.e),
                    n.useEffect((function () {
                        return r.GZ(p),
                            p.current ? (p.current.mounted = !0,
                                p.current.changedBeforeMount && (p.current.changedBeforeMount = !1,
                                    d())) : (p.current = {
                                        reaction: new s.le(l(e), (function () {
                                            d()
                                        }
                                        )),
                                        mounted: !0,
                                        changedBeforeMount: !1,
                                        cleanAt: 1 / 0
                                    },
                                        d()),
                            function () {
                                p.current.reaction.dispose(),
                                    p.current = null
                            }
                    }
                    ), []),
                    v.track((function () {
                        try {
                            f = t()
                        } catch (t) {
                            g = t
                        }
                    }
                    )),
                    g)
                    throw g;
                return f
            }
        }
        ,
        566650: (t, e, i) => {
            i.d(e, {
                H: () => s
            });
            var s = "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry
        }
        ,
        705191: (t, e, i) => {
            var s = i(559621);
            if (!i(989526).useState)
                throw new Error("mobx-react-lite requires React with Hooks support");
            if (!s.rC)
                throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available")
        }
        ,
        883722: (t, e, i) => {
            i.d(e, {
                G: () => n
            });
            var s = i(263143);
            function n(t) {
                var e = new Map
                    , i = 1
                    , n = new t((function (t) {
                        var i = e.get(t);
                        i && (i.reaction.dispose(),
                            e.delete(t))
                    }
                    ));
                return {
                    addReactionToTrack: function (t, o, r) {
                        var a = i++;
                        return n.register(r, a, t),
                            t.current = s.Uy(o),
                            t.current.finalizationRegistryCleanupToken = a,
                            e.set(a, t.current),
                            t.current
                    },
                    recordReactionAsCommitted: function (t) {
                        n.unregister(t),
                            t.current && t.current.finalizationRegistryCleanupToken && e.delete(t.current.finalizationRegistryCleanupToken)
                    },
                    forceCleanupTimerToRunNowForTests: function () { },
                    resetCleanupScheduleForTests: function () { }
                }
            }
        }
        ,
        248125: (t, e, i) => {
            i.d(e, {
                V: () => o
            });
            var s = i(263143)
                , n = function (t) {
                    var e = "function" == typeof Symbol && Symbol.iterator
                        , i = e && t[e]
                        , s = 0;
                    if (i)
                        return i.call(t);
                    if (t && "number" == typeof t.length)
                        return {
                            next: function () {
                                return t && s >= t.length && (t = void 0),
                                {
                                    value: t && t[s++],
                                    done: !t
                                }
                            }
                        };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                };
            function o() {
                var t, e = new Set;
                function i() {
                    void 0 === t && (t = setTimeout(o, s.Qs))
                }
                function o() {
                    t = void 0;
                    var s = Date.now();
                    e.forEach((function (t) {
                        var i = t.current;
                        i && s >= i.cleanAt && (i.reaction.dispose(),
                            t.current = null,
                            e.delete(t))
                    }
                    )),
                        e.size > 0 && i()
                }
                return {
                    addReactionToTrack: function (t, n, o) {
                        var r;
                        return t.current = s.Uy(n),
                            r = t,
                            e.add(r),
                            i(),
                            t.current
                    },
                    recordReactionAsCommitted: function (t) {
                        e.delete(t)
                    },
                    forceCleanupTimerToRunNowForTests: function () {
                        t && (clearTimeout(t),
                            o())
                    },
                    resetCleanupScheduleForTests: function () {
                        var i, s;
                        if (e.size > 0) {
                            try {
                                for (var o = n(e), r = o.next(); !r.done; r = o.next()) {
                                    var a = r.value
                                        , c = a.current;
                                    c && (c.reaction.dispose(),
                                        a.current = null)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    r && !r.done && (s = o.return) && s.call(o)
                                } finally {
                                    if (i)
                                        throw i.error
                                }
                            }
                            e.clear()
                        }
                        t && (clearTimeout(t),
                            t = void 0)
                    }
                }
            }
        }
        ,
        925999: (t, e, i) => {
            i.d(e, {
                z0: () => o
            });
            var s = i(559621);
            function n(t) {
                t()
            }
            function o(t) {
                t || (t = n),
                    s.jQ({
                        reactionScheduler: t
                    })
            }
        }
        ,
        881224: (t, e, i) => {
            i.d(e, {
                e: () => n
            });
            var s = i(559621);
            function n(t) {
                return s.Gf(t)
            }
        }
        ,
        15644: (t, e, i) => {
            i.d(e, {
                m: () => s.unstable_batchedUpdates
            });
            var s = i(573961)
        }
        ,
        482886: (t, e, i) => {
            i.d(e, {
                GZ: () => c,
                bb: () => a
            });
            var s = i(566650)
                , n = i(883722)
                , o = i(248125)
                , r = s.H ? n.G(s.H) : o.V()
                , a = r.addReactionToTrack
                , c = r.recordReactionAsCommitted;
            r.resetCleanupScheduleForTests,
                r.forceCleanupTimerToRunNowForTests
        }
        ,
        263143: (t, e, i) => {
            function s(t) {
                return {
                    reaction: t,
                    mounted: !1,
                    changedBeforeMount: !1,
                    cleanAt: Date.now() + n
                }
            }
            i.d(e, {
                Qs: () => o,
                Uy: () => s
            });
            var n = 1e4
                , o = 1e4
        }
        ,
        188464: (t, e, i) => {
            i.d(e, {
                Pi: () => O
            });
            var s = i(559621)
                , n = i(989526)
                , o = i(92894)
                , r = 0
                , a = {};
            function c(t) {
                return a[t] || (a[t] = function (t) {
                    if ("function" == typeof Symbol)
                        return Symbol(t);
                    var e = "__$mobx-react " + t + " (" + r + ")";
                    return r++,
                        e
                }(t)),
                    a[t]
            }
            function l(t, e) {
                if (h(t, e))
                    return !0;
                if ("object" != typeof t || null === t || "object" != typeof e || null === e)
                    return !1;
                var i = Object.keys(t)
                    , s = Object.keys(e);
                if (i.length !== s.length)
                    return !1;
                for (var n = 0; n < i.length; n++)
                    if (!Object.hasOwnProperty.call(e, i[n]) || !h(t[i[n]], e[i[n]]))
                        return !1;
                return !0
            }
            function h(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            function u(t, e, i) {
                Object.hasOwnProperty.call(t, e) ? t[e] = i : Object.defineProperty(t, e, {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: i
                })
            }
            var d = c("patchMixins")
                , p = c("patchedDefinition");
            function m(t, e) {
                for (var i = this, s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++)
                    n[o - 2] = arguments[o];
                e.locks++;
                try {
                    var r;
                    return null != t && (r = t.apply(this, n)),
                        r
                } finally {
                    e.locks--,
                        0 === e.locks && e.methods.forEach((function (t) {
                            t.apply(i, n)
                        }
                        ))
                }
            }
            function b(t, e) {
                return function () {
                    for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                        s[n] = arguments[n];
                    m.call.apply(m, [this, t, e].concat(s))
                }
            }
            function f(t, e, i) {
                var s = function (t, e) {
                    var i = t[d] = t[d] || {}
                        , s = i[e] = i[e] || {};
                    return s.locks = s.locks || 0,
                        s.methods = s.methods || [],
                        s
                }(t, e);
                s.methods.indexOf(i) < 0 && s.methods.push(i);
                var n = Object.getOwnPropertyDescriptor(t, e);
                if (!n || !n[p]) {
                    var o = t[e]
                        , r = g(t, e, n ? n.enumerable : void 0, s, o);
                    Object.defineProperty(t, e, r)
                }
            }
            function g(t, e, i, s, n) {
                var o, r = b(n, s);
                return (o = {})[p] = !0,
                    o.get = function () {
                        return r
                    }
                    ,
                    o.set = function (n) {
                        if (this === t)
                            r = b(n, s);
                        else {
                            var o = g(this, e, i, s, n);
                            Object.defineProperty(this, e, o)
                        }
                    }
                    ,
                    o.configurable = !0,
                    o.enumerable = i,
                    o
            }
            var v = s.so || "$mobx"
                , y = c("isMobXReactObserver")
                , S = c("isUnmounted")
                , w = c("skipRender")
                , x = c("isForcingUpdate");
            function C(t) {
                var e = t.prototype;
                if (t[y]) {
                    var i = A(e);
                    console.warn("The provided component class (" + i + ")\n                has already been declared as an observer component.")
                } else
                    t[y] = !0;
                if (e.componentWillReact)
                    throw new Error("The componentWillReact life-cycle event is no longer supported");
                if (t.__proto__ !== n.PureComponent)
                    if (e.shouldComponentUpdate) {
                        if (e.shouldComponentUpdate !== _)
                            throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")
                    } else
                        e.shouldComponentUpdate = _;
                P(e, "props"),
                    P(e, "state"),
                    t.contextType && P(e, "context");
                var s = e.render;
                if ("function" != typeof s) {
                    var r = A(e);
                    throw new Error("[mobx-react] class component (" + r + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")
                }
                return e.render = function () {
                    return B.call(this, s)
                }
                    ,
                    f(e, "componentWillUnmount", (function () {
                        var t;
                        if (!0 !== o.FY() && (null == (t = this.render[v]) || t.dispose(),
                            this[S] = !0,
                            !this.render[v])) {
                            var e = A(this);
                            console.warn("The reactive render of an observer class component (" + e + ")\n                was overriden after MobX attached. This may result in a memory leak if the\n                overriden reactive render was not properly disposed.")
                        }
                    }
                    )),
                    t
            }
            function A(t) {
                return t.displayName || t.name || t.constructor && (t.constructor.displayName || t.constructor.name) || "<component>"
            }
            function B(t) {
                var e = this;
                if (!0 === o.FY())
                    return t.call(this);
                u(this, w, !1),
                    u(this, x, !1);
                var i = A(this)
                    , r = t.bind(this)
                    , a = !1
                    , c = new s.le(i + ".render()", (function () {
                        if (!a && (a = !0,
                            !0 !== e[S])) {
                            var t = !0;
                            try {
                                u(e, x, !0),
                                    e[w] || n.Component.prototype.forceUpdate.call(e),
                                    t = !1
                            } finally {
                                u(e, x, !1),
                                    t && c.dispose()
                            }
                        }
                    }
                    ));
                function l() {
                    a = !1;
                    var t = void 0
                        , e = void 0;
                    if (c.track((function () {
                        try {
                            e = s.$$(!1, r)
                        } catch (e) {
                            t = e
                        }
                    }
                    )),
                        t)
                        throw t;
                    return e
                }
                return c.reactComponent = this,
                    l[v] = c,
                    this.render = l,
                    l.call(this)
            }
            function _(t, e) {
                return o.FY() && console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),
                    this.state !== e || !l(this.props, t)
            }
            function P(t, e) {
                var i = c("reactProp_" + e + "_valueHolder")
                    , n = c("reactProp_" + e + "_atomHolder");
                function o() {
                    return this[n] || u(this, n, s.cp("reactive " + e)),
                        this[n]
                }
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        var t = !1;
                        return s.wM && s.mJ && (t = s.wM(!0)),
                            o.call(this).reportObserved(),
                            s.wM && s.mJ && s.mJ(t),
                            this[i]
                    },
                    set: function (t) {
                        this[x] || l(this[i], t) ? u(this, i, t) : (u(this, i, t),
                            u(this, w, !0),
                            o.call(this).reportChanged(),
                            u(this, w, !1))
                    }
                })
            }
            function O(t) {
                return !0 === t.isMobxInjector && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),
                    Object.prototype.isPrototypeOf.call(n.Component, t) || Object.prototype.isPrototypeOf.call(n.PureComponent, t) ? C(t) : o.Pi(t)
            }
            if (!n.Component)
                throw new Error("mobx-react requires React to be available");
            if (!s.LO)
                throw new Error("mobx-react requires mobx to be available")
        }
        ,
        559621: (t, e, i) => {
            function s(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                    i[s - 1] = arguments[s];
                throw new Error("number" == typeof t ? "[MobX] minified error nr: " + t + (i.length ? " " + i.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + t)
            }
            i.d(e, {
                $$: () => zt,
                Ei: () => ji,
                Fl: () => kt,
                Gf: () => Ke,
                LG: () => Le,
                LJ: () => Di,
                LO: () => Pt,
                M5: () => ii,
                N7: () => ri,
                PS: () => ai,
                Pb: () => Xi,
                SW: () => Qt,
                U5: () => Ie,
                XP: () => oi,
                aD: () => je,
                cp: () => K,
                dw: () => Ue,
                eJ: () => si,
                jQ: () => We,
                kS: () => ns,
                le: () => ge,
                mJ: () => ne,
                pA: () => ze,
                rC: () => fi,
                rg: () => te,
                so: () => H,
                vP: () => Ii,
                wM: () => se,
                z: () => Ee
            });
            var n = {};
            function o() {
                return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window || "undefined" != typeof window ? window : "undefined" != typeof self ? self : n
            }
            var r = Object.assign
                , a = Object.getOwnPropertyDescriptor
                , c = Object.defineProperty
                , l = Object.prototype
                , h = [];
            Object.freeze(h);
            var u = {};
            Object.freeze(u);
            var d = "undefined" != typeof Proxy
                , p = Object.toString();
            function m() {
                d || s("Proxy not available")
            }
            function b(t) {
                var e = !1;
                return function () {
                    if (!e)
                        return e = !0,
                            t.apply(this, arguments)
                }
            }
            var f = function () { };
            function g(t) {
                return "function" == typeof t
            }
            function v(t) {
                switch (typeof t) {
                    case "string":
                    case "symbol":
                    case "number":
                        return !0
                }
                return !1
            }
            function y(t) {
                return null !== t && "object" == typeof t
            }
            function S(t) {
                if (!y(t))
                    return !1;
                var e = Object.getPrototypeOf(t);
                if (null == e)
                    return !0;
                var i = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
                return "function" == typeof i && i.toString() === p
            }
            function w(t) {
                var e = null == t ? void 0 : t.constructor;
                return !!e && ("GeneratorFunction" === e.name || "GeneratorFunction" === e.displayName)
            }
            function x(t, e, i) {
                c(t, e, {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: i
                })
            }
            function C(t, e, i) {
                c(t, e, {
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                    value: i
                })
            }
            function A(t, e) {
                var i = "isMobX" + t;
                return e.prototype[i] = !0,
                    function (t) {
                        return y(t) && !0 === t[i]
                    }
            }
            function B(t) {
                return t instanceof Map
            }
            function _(t) {
                return t instanceof Set
            }
            var P = void 0 !== Object.getOwnPropertySymbols
                , O = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : P ? function (t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                }
                    : Object.getOwnPropertyNames;
            function T(t) {
                return null === t ? null : "object" == typeof t ? "" + t : t
            }
            function j(t, e) {
                return l.hasOwnProperty.call(t, e)
            }
            var k = Object.getOwnPropertyDescriptors || function (t) {
                var e = {};
                return O(t).forEach((function (i) {
                    e[i] = a(t, i)
                }
                )),
                    e
            }
                ;
            function E(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1,
                        s.configurable = !0,
                        "value" in s && (s.writable = !0),
                        Object.defineProperty(t, s.key, s)
                }
            }
            function L(t, e, i) {
                return e && E(t.prototype, e),
                    i && E(t, i),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    t
            }
            function R() {
                return R = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i)
                            Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                    }
                    return t
                }
                    ,
                    R.apply(this, arguments)
            }
            function M(t, e) {
                t.prototype = Object.create(e.prototype),
                    t.prototype.constructor = t,
                    I(t, e)
            }
            function I(t, e) {
                return I = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e,
                        t
                }
                    ,
                    I(t, e)
            }
            function D(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            function N(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++)
                    s[i] = t[i];
                return s
            }
            function z(t, e) {
                var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (i)
                    return (i = i.call(t)).next.bind(i);
                if (Array.isArray(t) || (i = function (t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return N(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name),
                            "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? N(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var s = 0;
                    return function () {
                        return s >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[s++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var G = Symbol("mobx-stored-annotations");
            function F(t) {
                return Object.assign((function (e, i) {
                    V(e, i, t)
                }
                ), t)
            }
            function V(t, e, i) {
                j(t, G) || x(t, G, R({}, t[G])),
                    function (t) {
                        return t.annotationType_ === q
                    }(i) || (t[G][e] = i)
            }
            var H = Symbol("mobx administration")
                , W = function () {
                    function t(t) {
                        void 0 === t && (t = "Atom"),
                            this.name_ = void 0,
                            this.isPendingUnobservation_ = !1,
                            this.isBeingObserved_ = !1,
                            this.observers_ = new Set,
                            this.diffValue_ = 0,
                            this.lastAccessedBy_ = 0,
                            this.lowestObserverState_ = Wt.NOT_TRACKING_,
                            this.onBOL = void 0,
                            this.onBUOL = void 0,
                            this.name_ = t
                    }
                    var e = t.prototype;
                    return e.onBO = function () {
                        this.onBOL && this.onBOL.forEach((function (t) {
                            return t()
                        }
                        ))
                    }
                        ,
                        e.onBUO = function () {
                            this.onBUOL && this.onBUOL.forEach((function (t) {
                                return t()
                            }
                            ))
                        }
                        ,
                        e.reportObserved = function () {
                            return be(this)
                        }
                        ,
                        e.reportChanged = function () {
                            pe(),
                                fe(this),
                                me()
                        }
                        ,
                        e.toString = function () {
                            return this.name_
                        }
                        ,
                        t
                }()
                , U = A("Atom", W);
            function K(t, e, i) {
                void 0 === e && (e = f),
                    void 0 === i && (i = f);
                var s = new W(t);
                return e !== f && Ge(De, s, e, undefined),
                    i !== f && ze(s, i),
                    s
            }
            var X = {
                identity: function (t, e) {
                    return t === e
                },
                structural: function (t, e) {
                    return as(t, e)
                },
                default: function (t, e) {
                    return Object.is ? Object.is(t, e) : t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
                },
                shallow: function (t, e) {
                    return as(t, e, 1)
                }
            };
            function Z(t, e, i) {
                return ni(t) ? t : Array.isArray(t) ? Pt.array(t, {
                    name: i
                }) : S(t) ? Pt.object(t, void 0, {
                    name: i
                }) : B(t) ? Pt.map(t, {
                    name: i
                }) : _(t) ? Pt.set(t, {
                    name: i
                }) : "function" != typeof t || Le(t) || ti(t) ? t : w(t) ? $e(t) : ke(i, t)
            }
            function Y(t) {
                return t
            }
            var q = "override";
            function Q(t, e) {
                return {
                    annotationType_: t,
                    options_: e,
                    make_: $,
                    extend_: J
                }
            }
            function $(t, e, i, s) {
                var n;
                if (null != (n = this.options_) && n.bound)
                    return null === this.extend_(t, e, i, !1) ? 0 : 1;
                if (s === t.target_)
                    return null === this.extend_(t, e, i, !1) ? 0 : 2;
                if (Le(i.value))
                    return 1;
                var o = tt(t, this, e, i, !1);
                return c(s, e, o),
                    2
            }
            function J(t, e, i, s) {
                var n = tt(t, this, e, i);
                return t.defineProperty_(e, n, s)
            }
            function tt(t, e, i, s, n) {
                var o, r, a, c, l, h, u, d;
                void 0 === n && (n = le.safeDescriptors),
                    d = s,
                    e.annotationType_,
                    d.value;
                var p, m = s.value;
                return null != (o = e.options_) && o.bound && (m = m.bind(null != (p = t.proxy_) ? p : t.target_)),
                {
                    value: Dt(null != (r = null == (a = e.options_) ? void 0 : a.name) ? r : i.toString(), m, null != (c = null == (l = e.options_) ? void 0 : l.autoAction) && c, null != (h = e.options_) && h.bound ? null != (u = t.proxy_) ? u : t.target_ : void 0),
                    configurable: !n || t.isPlainObject_,
                    enumerable: !1,
                    writable: !n
                }
            }
            function et(t, e) {
                return {
                    annotationType_: t,
                    options_: e,
                    make_: it,
                    extend_: st
                }
            }
            function it(t, e, i, s) {
                var n;
                if (s === t.target_)
                    return null === this.extend_(t, e, i, !1) ? 0 : 2;
                if (null != (n = this.options_) && n.bound && (!j(t.target_, e) || !ti(t.target_[e])) && null === this.extend_(t, e, i, !1))
                    return 0;
                if (ti(i.value))
                    return 1;
                var o = nt(t, this, 0, i, !1, !1);
                return c(s, e, o),
                    2
            }
            function st(t, e, i, s) {
                var n, o = nt(t, this, 0, i, null == (n = this.options_) ? void 0 : n.bound);
                return t.defineProperty_(e, o, s)
            }
            function nt(t, e, i, s, n, o) {
                var r;
                void 0 === o && (o = le.safeDescriptors),
                    r = s,
                    e.annotationType_,
                    r.value;
                var a, c = s.value;
                return ti(c) || (c = $e(c)),
                    n && ((c = c.bind(null != (a = t.proxy_) ? a : t.target_)).isMobXFlow = !0),
                {
                    value: c,
                    configurable: !o || t.isPlainObject_,
                    enumerable: !1,
                    writable: !o
                }
            }
            function ot(t, e) {
                return {
                    annotationType_: t,
                    options_: e,
                    make_: rt,
                    extend_: at
                }
            }
            function rt(t, e, i) {
                return null === this.extend_(t, e, i, !1) ? 0 : 1
            }
            function at(t, e, i, s) {
                return n = i,
                    this.annotationType_,
                    n.get,
                    t.defineComputedProperty_(e, R({}, this.options_, {
                        get: i.get,
                        set: i.set
                    }), s);
                var n
            }
            function ct(t, e) {
                return {
                    annotationType_: t,
                    options_: e,
                    make_: lt,
                    extend_: ht
                }
            }
            function lt(t, e, i) {
                return null === this.extend_(t, e, i, !1) ? 0 : 1
            }
            function ht(t, e, i, s) {
                var n, o;
                return this.annotationType_,
                    t.defineObservableProperty_(e, i.value, null != (n = null == (o = this.options_) ? void 0 : o.enhancer) ? n : Z, s)
            }
            var ut = "true"
                , dt = pt();
            function pt(t) {
                return {
                    annotationType_: ut,
                    options_: t,
                    make_: mt,
                    extend_: bt
                }
            }
            function mt(t, e, i, s) {
                var n, o, r, a;
                if (i.get)
                    return kt.make_(t, e, i, s);
                if (i.set) {
                    var l = Dt(e.toString(), i.set);
                    return s === t.target_ ? null === t.defineProperty_(e, {
                        configurable: !le.safeDescriptors || t.isPlainObject_,
                        set: l
                    }) ? 0 : 2 : (c(s, e, {
                        configurable: !0,
                        set: l
                    }),
                        2)
                }
                if (s !== t.target_ && "function" == typeof i.value)
                    return w(i.value) ? (null != (a = this.options_) && a.autoBind ? $e.bound : $e).make_(t, e, i, s) : (null != (r = this.options_) && r.autoBind ? ke.bound : ke).make_(t, e, i, s);
                var h, u = !1 === (null == (n = this.options_) ? void 0 : n.deep) ? Pt.ref : Pt;
                return "function" == typeof i.value && null != (o = this.options_) && o.autoBind && (i.value = i.value.bind(null != (h = t.proxy_) ? h : t.target_)),
                    u.make_(t, e, i, s)
            }
            function bt(t, e, i, s) {
                var n, o, r;
                return i.get ? kt.extend_(t, e, i, s) : i.set ? t.defineProperty_(e, {
                    configurable: !le.safeDescriptors || t.isPlainObject_,
                    set: Dt(e.toString(), i.set)
                }, s) : ("function" == typeof i.value && null != (n = this.options_) && n.autoBind && (i.value = i.value.bind(null != (r = t.proxy_) ? r : t.target_)),
                    (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Pt.ref : Pt).extend_(t, e, i, s))
            }
            var ft = {
                deep: !0,
                name: void 0,
                defaultDecorator: void 0,
                proxy: !0
            };
            function gt(t) {
                return t || ft
            }
            Object.freeze(ft);
            var vt = ct("observable")
                , yt = ct("observable.ref", {
                    enhancer: Y
                })
                , St = ct("observable.shallow", {
                    enhancer: function (t, e, i) {
                        return null == t || Xi(t) || ji(t) || Di(t) || Gi(t) ? t : Array.isArray(t) ? Pt.array(t, {
                            name: i,
                            deep: !1
                        }) : S(t) ? Pt.object(t, void 0, {
                            name: i,
                            deep: !1
                        }) : B(t) ? Pt.map(t, {
                            name: i,
                            deep: !1
                        }) : _(t) ? Pt.set(t, {
                            name: i,
                            deep: !1
                        }) : void 0
                    }
                })
                , wt = ct("observable.struct", {
                    enhancer: function (t, e) {
                        return as(t, e) ? e : t
                    }
                })
                , xt = F(vt);
            function Ct(t) {
                return !0 === t.deep ? Z : !1 === t.deep ? Y : (e = t.defaultDecorator) && null != (i = null == (s = e.options_) ? void 0 : s.enhancer) ? i : Z;
                var e, i, s
            }
            function At(t, e, i) {
                if (!v(e))
                    return ni(t) ? t : S(t) ? Pt.object(t, e, i) : Array.isArray(t) ? Pt.array(t, e) : B(t) ? Pt.map(t, e) : _(t) ? Pt.set(t, e) : "object" == typeof t && null !== t ? t : Pt.box(t, e);
                V(t, e, vt)
            }
            Object.assign(At, xt);
            var Bt, _t, Pt = r(At, {
                box: function (t, e) {
                    var i = gt(e);
                    return new Ht(t, Ct(i), i.name, !0, i.equals)
                },
                array: function (t, e) {
                    var i = gt(e);
                    return (!1 === le.useProxies || !1 === i.proxy ? is : wi)(t, Ct(i), i.name)
                },
                map: function (t, e) {
                    var i = gt(e);
                    return new Ii(t, Ct(i), i.name)
                },
                set: function (t, e) {
                    var i = gt(e);
                    return new zi(t, Ct(i), i.name)
                },
                object: function (t, e, i) {
                    return Ue(!1 === le.useProxies || !1 === (null == i ? void 0 : i.proxy) ? Wi({}, i) : function (t, e) {
                        var i, s;
                        return m(),
                            null != (s = (i = (t = Wi(t, e))[H]).proxy_) ? s : i.proxy_ = new Proxy(t, li)
                    }({}, i), t, e)
                },
                ref: F(yt),
                shallow: F(St),
                deep: xt,
                struct: F(wt)
            }), Ot = "computed", Tt = ot(Ot), jt = ot("computed.struct", {
                equals: X.structural
            }), kt = function (t, e) {
                if (v(e))
                    return V(t, e, Tt);
                if (S(t))
                    return F(ot(Ot, t));
                var i = S(e) ? e : {};
                return i.get = t,
                    i.name || (i.name = t.name || ""),
                    new Kt(i)
            };
            Object.assign(kt, Tt),
                kt.struct = F(jt);
            var Et, Lt = 0, Rt = 1, Mt = null != (Bt = null == (_t = a((function () { }
            ), "name")) ? void 0 : _t.configurable) && Bt, It = {
                value: "action",
                configurable: !0,
                writable: !1,
                enumerable: !1
            };
            function Dt(t, e, i, s) {
                function n() {
                    return Nt(0, i, e, s || this, arguments)
                }
                return void 0 === i && (i = !1),
                    n.isMobxAction = !0,
                    Mt && (It.value = t,
                        Object.defineProperty(n, "name", It)),
                    n
            }
            function Nt(t, e, i, n, o) {
                var r = function (t, e, i, s) {
                    var n = le.trackingDerivation
                        , o = !e || !n;
                    pe();
                    var r = le.allowStateChanges;
                    o && (ee(),
                        r = Gt(!0));
                    var a = {
                        runAsAction_: o,
                        prevDerivation_: n,
                        prevAllowStateChanges_: r,
                        prevAllowStateReads_: se(!0),
                        notifySpy_: !1,
                        startTime_: 0,
                        actionId_: Rt++,
                        parentActionId_: Lt
                    };
                    return Lt = a.actionId_,
                        a
                }(0, e);
                try {
                    return i.apply(n, o)
                } catch (t) {
                    throw r.error_ = t,
                    t
                } finally {
                    (function (t) {
                        Lt !== t.actionId_ && s(30),
                            Lt = t.parentActionId_,
                            void 0 !== t.error_ && (le.suppressReactionErrors = !0),
                            Ft(t.prevAllowStateChanges_),
                            ne(t.prevAllowStateReads_),
                            me(),
                            t.runAsAction_ && ie(t.prevDerivation_),
                            le.suppressReactionErrors = !1
                    }
                    )(r)
                }
            }
            function zt(t, e) {
                var i = Gt(t);
                try {
                    return e()
                } finally {
                    Ft(i)
                }
            }
            function Gt(t) {
                var e = le.allowStateChanges;
                return le.allowStateChanges = t,
                    e
            }
            function Ft(t) {
                le.allowStateChanges = t
            }
            Et = Symbol.toPrimitive;
            var Vt, Ht = function (t) {
                function e(e, i, s, n, o) {
                    var r;
                    return void 0 === s && (s = "ObservableValue"),
                        void 0 === n && (n = !0),
                        void 0 === o && (o = X.default),
                        (r = t.call(this, s) || this).enhancer = void 0,
                        r.name_ = void 0,
                        r.equals = void 0,
                        r.hasUnreportedChange_ = !1,
                        r.interceptors_ = void 0,
                        r.changeListeners_ = void 0,
                        r.value_ = void 0,
                        r.dehancer = void 0,
                        r.enhancer = i,
                        r.name_ = s,
                        r.equals = o,
                        r.value_ = i(e, void 0, s),
                        r
                }
                M(e, t);
                var i = e.prototype;
                return i.dehanceValue = function (t) {
                    return void 0 !== this.dehancer ? this.dehancer(t) : t
                }
                    ,
                    i.set = function (t) {
                        this.value_,
                            (t = this.prepareNewValue_(t)) !== le.UNCHANGED && this.setNewValue_(t)
                    }
                    ,
                    i.prepareNewValue_ = function (t) {
                        if (hi(this)) {
                            var e = di(this, {
                                object: this,
                                type: vi,
                                newValue: t
                            });
                            if (!e)
                                return le.UNCHANGED;
                            t = e.newValue
                        }
                        return t = this.enhancer(t, this.value_, this.name_),
                            this.equals(this.value_, t) ? le.UNCHANGED : t
                    }
                    ,
                    i.setNewValue_ = function (t) {
                        var e = this.value_;
                        this.value_ = t,
                            this.reportChanged(),
                            pi(this) && bi(this, {
                                type: vi,
                                object: this,
                                newValue: t,
                                oldValue: e
                            })
                    }
                    ,
                    i.get = function () {
                        return this.reportObserved(),
                            this.dehanceValue(this.value_)
                    }
                    ,
                    i.intercept_ = function (t) {
                        return ui(this, t)
                    }
                    ,
                    i.observe_ = function (t, e) {
                        return e && t({
                            observableKind: "value",
                            debugObjectName: this.name_,
                            object: this,
                            type: vi,
                            newValue: this.value_,
                            oldValue: void 0
                        }),
                            mi(this, t)
                    }
                    ,
                    i.raw = function () {
                        return this.value_
                    }
                    ,
                    i.toJSON = function () {
                        return this.get()
                    }
                    ,
                    i.toString = function () {
                        return this.name_ + "[" + this.value_ + "]"
                    }
                    ,
                    i.valueOf = function () {
                        return T(this.get())
                    }
                    ,
                    i[Et] = function () {
                        return this.valueOf()
                    }
                    ,
                    e
            }(W);
            Vt = Symbol.toPrimitive;
            var Wt, Ut, Kt = function () {
                function t(t) {
                    this.dependenciesState_ = Wt.NOT_TRACKING_,
                        this.observing_ = [],
                        this.newObserving_ = null,
                        this.isBeingObserved_ = !1,
                        this.isPendingUnobservation_ = !1,
                        this.observers_ = new Set,
                        this.diffValue_ = 0,
                        this.runId_ = 0,
                        this.lastAccessedBy_ = 0,
                        this.lowestObserverState_ = Wt.UP_TO_DATE_,
                        this.unboundDepsCount_ = 0,
                        this.value_ = new Zt(null),
                        this.name_ = void 0,
                        this.triggeredBy_ = void 0,
                        this.isComputing_ = !1,
                        this.isRunningSetter_ = !1,
                        this.derivation = void 0,
                        this.setter_ = void 0,
                        this.isTracing_ = Ut.NONE,
                        this.scope_ = void 0,
                        this.equals_ = void 0,
                        this.requiresReaction_ = void 0,
                        this.keepAlive_ = void 0,
                        this.onBOL = void 0,
                        this.onBUOL = void 0,
                        t.get || s(31),
                        this.derivation = t.get,
                        this.name_ = t.name || "ComputedValue",
                        t.set && (this.setter_ = Dt("ComputedValue-setter", t.set)),
                        this.equals_ = t.equals || (t.compareStructural || t.struct ? X.structural : X.default),
                        this.scope_ = t.context,
                        this.requiresReaction_ = t.requiresReaction,
                        this.keepAlive_ = !!t.keepAlive
                }
                var e = t.prototype;
                return e.onBecomeStale_ = function () {
                    (function (t) {
                        t.lowestObserverState_ === Wt.UP_TO_DATE_ && (t.lowestObserverState_ = Wt.POSSIBLY_STALE_,
                            t.observers_.forEach((function (t) {
                                t.dependenciesState_ === Wt.UP_TO_DATE_ && (t.dependenciesState_ = Wt.POSSIBLY_STALE_,
                                    t.onBecomeStale_())
                            }
                            )))
                    }
                    )(this)
                }
                    ,
                    e.onBO = function () {
                        this.onBOL && this.onBOL.forEach((function (t) {
                            return t()
                        }
                        ))
                    }
                    ,
                    e.onBUO = function () {
                        this.onBUOL && this.onBUOL.forEach((function (t) {
                            return t()
                        }
                        ))
                    }
                    ,
                    e.get = function () {
                        if (this.isComputing_ && s(32, this.name_, this.derivation),
                            0 !== le.inBatch || 0 !== this.observers_.size || this.keepAlive_) {
                            if (be(this),
                                qt(this)) {
                                var t = le.trackingContext;
                                this.keepAlive_ && !t && (le.trackingContext = this),
                                    this.trackAndCompute() && function (t) {
                                        t.lowestObserverState_ !== Wt.STALE_ && (t.lowestObserverState_ = Wt.STALE_,
                                            t.observers_.forEach((function (e) {
                                                e.dependenciesState_ === Wt.POSSIBLY_STALE_ ? e.dependenciesState_ = Wt.STALE_ : e.dependenciesState_ === Wt.UP_TO_DATE_ && (t.lowestObserverState_ = Wt.UP_TO_DATE_)
                                            }
                                            )))
                                    }(this),
                                    le.trackingContext = t
                            }
                        } else
                            qt(this) && (this.warnAboutUntrackedRead_(),
                                pe(),
                                this.value_ = this.computeValue_(!1),
                                me());
                        var e = this.value_;
                        if (Yt(e))
                            throw e.cause;
                        return e
                    }
                    ,
                    e.set = function (t) {
                        if (this.setter_) {
                            this.isRunningSetter_ && s(33, this.name_),
                                this.isRunningSetter_ = !0;
                            try {
                                this.setter_.call(this.scope_, t)
                            } finally {
                                this.isRunningSetter_ = !1
                            }
                        } else
                            s(34, this.name_)
                    }
                    ,
                    e.trackAndCompute = function () {
                        var t = this.value_
                            , e = this.dependenciesState_ === Wt.NOT_TRACKING_
                            , i = this.computeValue_(!0)
                            , s = e || Yt(t) || Yt(i) || !this.equals_(t, i);
                        return s && (this.value_ = i),
                            s
                    }
                    ,
                    e.computeValue_ = function (t) {
                        this.isComputing_ = !0;
                        var e, i = Gt(!1);
                        if (t)
                            e = $t(this, this.derivation, this.scope_);
                        else if (!0 === le.disableErrorBoundaries)
                            e = this.derivation.call(this.scope_);
                        else
                            try {
                                e = this.derivation.call(this.scope_)
                            } catch (t) {
                                e = new Zt(t)
                            }
                        return Ft(i),
                            this.isComputing_ = !1,
                            e
                    }
                    ,
                    e.suspend_ = function () {
                        this.keepAlive_ || (Jt(this),
                            this.value_ = void 0)
                    }
                    ,
                    e.observe_ = function (t, e) {
                        var i = this
                            , s = !0
                            , n = void 0;
                        return function (t, e) {
                            var i, s;
                            void 0 === e && (e = u);
                            var n, o = null != (i = null == (s = e) ? void 0 : s.name) ? i : "Autorun";
                            if (e.scheduler || e.delay) {
                                var r = Me(e)
                                    , a = !1;
                                n = new ge(o, (function () {
                                    a || (a = !0,
                                        r((function () {
                                            a = !1,
                                                n.isDisposed_ || n.track(c)
                                        }
                                        )))
                                }
                                ), e.onError, e.requiresObservable)
                            } else
                                n = new ge(o, (function () {
                                    this.track(c)
                                }
                                ), e.onError, e.requiresObservable);
                            function c() {
                                t(n)
                            }
                            return n.schedule_(),
                                n.getDisposer_()
                        }((function () {
                            var o = i.get();
                            if (!s || e) {
                                var r = ee();
                                t({
                                    observableKind: "computed",
                                    debugObjectName: i.name_,
                                    type: vi,
                                    object: i,
                                    newValue: o,
                                    oldValue: n
                                }),
                                    ie(r)
                            }
                            s = !1,
                                n = o
                        }
                        ))
                    }
                    ,
                    e.warnAboutUntrackedRead_ = function () { }
                    ,
                    e.toString = function () {
                        return this.name_ + "[" + this.derivation.toString() + "]"
                    }
                    ,
                    e.valueOf = function () {
                        return T(this.get())
                    }
                    ,
                    e[Vt] = function () {
                        return this.valueOf()
                    }
                    ,
                    t
            }(), Xt = A("ComputedValue", Kt);
            (function (t) {
                t[t.NOT_TRACKING_ = -1] = "NOT_TRACKING_",
                    t[t.UP_TO_DATE_ = 0] = "UP_TO_DATE_",
                    t[t.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_",
                    t[t.STALE_ = 2] = "STALE_"
            }
            )(Wt || (Wt = {})),
                function (t) {
                    t[t.NONE = 0] = "NONE",
                        t[t.LOG = 1] = "LOG",
                        t[t.BREAK = 2] = "BREAK"
                }(Ut || (Ut = {}));
            var Zt = function (t) {
                this.cause = void 0,
                    this.cause = t
            };
            function Yt(t) {
                return t instanceof Zt
            }
            function qt(t) {
                switch (t.dependenciesState_) {
                    case Wt.UP_TO_DATE_:
                        return !1;
                    case Wt.NOT_TRACKING_:
                    case Wt.STALE_:
                        return !0;
                    case Wt.POSSIBLY_STALE_:
                        for (var e = se(!0), i = ee(), s = t.observing_, n = s.length, o = 0; o < n; o++) {
                            var r = s[o];
                            if (Xt(r)) {
                                if (le.disableErrorBoundaries)
                                    r.get();
                                else
                                    try {
                                        r.get()
                                    } catch (t) {
                                        return ie(i),
                                            ne(e),
                                            !0
                                    }
                                if (t.dependenciesState_ === Wt.STALE_)
                                    return ie(i),
                                        ne(e),
                                        !0
                            }
                        }
                        return oe(t),
                            ie(i),
                            ne(e),
                            !1
                }
            }
            function Qt() {
                return null !== le.trackingDerivation
            }
            function $t(t, e, i) {
                var s = se(!0);
                oe(t),
                    t.newObserving_ = new Array(t.observing_.length + 100),
                    t.unboundDepsCount_ = 0,
                    t.runId_ = ++le.runId;
                var n, o = le.trackingDerivation;
                if (le.trackingDerivation = t,
                    le.inBatch++,
                    !0 === le.disableErrorBoundaries)
                    n = e.call(i);
                else
                    try {
                        n = e.call(i)
                    } catch (t) {
                        n = new Zt(t)
                    }
                return le.inBatch--,
                    le.trackingDerivation = o,
                    function (t) {
                        for (var e = t.observing_, i = t.observing_ = t.newObserving_, s = Wt.UP_TO_DATE_, n = 0, o = t.unboundDepsCount_, r = 0; r < o; r++) {
                            var a = i[r];
                            0 === a.diffValue_ && (a.diffValue_ = 1,
                                n !== r && (i[n] = a),
                                n++),
                                a.dependenciesState_ > s && (s = a.dependenciesState_)
                        }
                        for (i.length = n,
                            t.newObserving_ = null,
                            o = e.length; o--;) {
                            var c = e[o];
                            0 === c.diffValue_ && ue(c, t),
                                c.diffValue_ = 0
                        }
                        for (; n--;) {
                            var l = i[n];
                            1 === l.diffValue_ && (l.diffValue_ = 0,
                                he(l, t))
                        }
                        s !== Wt.UP_TO_DATE_ && (t.dependenciesState_ = s,
                            t.onBecomeStale_())
                    }(t),
                    ne(s),
                    n
            }
            function Jt(t) {
                var e = t.observing_;
                t.observing_ = [];
                for (var i = e.length; i--;)
                    ue(e[i], t);
                t.dependenciesState_ = Wt.NOT_TRACKING_
            }
            function te(t) {
                var e = ee();
                try {
                    return t()
                } finally {
                    ie(e)
                }
            }
            function ee() {
                var t = le.trackingDerivation;
                return le.trackingDerivation = null,
                    t
            }
            function ie(t) {
                le.trackingDerivation = t
            }
            function se(t) {
                var e = le.allowStateReads;
                return le.allowStateReads = t,
                    e
            }
            function ne(t) {
                le.allowStateReads = t
            }
            function oe(t) {
                if (t.dependenciesState_ !== Wt.UP_TO_DATE_) {
                    t.dependenciesState_ = Wt.UP_TO_DATE_;
                    for (var e = t.observing_, i = e.length; i--;)
                        e[i].lowestObserverState_ = Wt.UP_TO_DATE_
                }
            }
            var re = function () {
                this.version = 6,
                    this.UNCHANGED = {},
                    this.trackingDerivation = null,
                    this.trackingContext = null,
                    this.runId = 0,
                    this.mobxGuid = 0,
                    this.inBatch = 0,
                    this.pendingUnobservations = [],
                    this.pendingReactions = [],
                    this.isRunningReactions = !1,
                    this.allowStateChanges = !1,
                    this.allowStateReads = !0,
                    this.enforceActions = !0,
                    this.spyListeners = [],
                    this.globalReactionErrorHandlers = [],
                    this.computedRequiresReaction = !1,
                    this.reactionRequiresObservable = !1,
                    this.observableRequiresReaction = !1,
                    this.disableErrorBoundaries = !1,
                    this.suppressReactionErrors = !1,
                    this.useProxies = !0,
                    this.verifyProxies = !1,
                    this.safeDescriptors = !0
            }
                , ae = !0
                , ce = !1
                , le = function () {
                    var t = o();
                    return t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (ae = !1),
                        t.__mobxGlobals && t.__mobxGlobals.version !== (new re).version && (ae = !1),
                        ae ? t.__mobxGlobals ? (t.__mobxInstanceCount += 1,
                            t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}),
                            t.__mobxGlobals) : (t.__mobxInstanceCount = 1,
                                t.__mobxGlobals = new re) : (setTimeout((function () {
                                    ce || s(35)
                                }
                                ), 1),
                                    new re)
                }();
            function he(t, e) {
                t.observers_.add(e),
                    t.lowestObserverState_ > e.dependenciesState_ && (t.lowestObserverState_ = e.dependenciesState_)
            }
            function ue(t, e) {
                t.observers_.delete(e),
                    0 === t.observers_.size && de(t)
            }
            function de(t) {
                !1 === t.isPendingUnobservation_ && (t.isPendingUnobservation_ = !0,
                    le.pendingUnobservations.push(t))
            }
            function pe() {
                le.inBatch++
            }
            function me() {
                if (0 == --le.inBatch) {
                    Se();
                    for (var t = le.pendingUnobservations, e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.isPendingUnobservation_ = !1,
                            0 === i.observers_.size && (i.isBeingObserved_ && (i.isBeingObserved_ = !1,
                                i.onBUO()),
                                i instanceof Kt && i.suspend_())
                    }
                    le.pendingUnobservations = []
                }
            }
            function be(t) {
                var e = le.trackingDerivation;
                return null !== e ? (e.runId_ !== t.lastAccessedBy_ && (t.lastAccessedBy_ = e.runId_,
                    e.newObserving_[e.unboundDepsCount_++] = t,
                    !t.isBeingObserved_ && le.trackingContext && (t.isBeingObserved_ = !0,
                        t.onBO())),
                    !0) : (0 === t.observers_.size && le.inBatch > 0 && de(t),
                        !1)
            }
            function fe(t) {
                t.lowestObserverState_ !== Wt.STALE_ && (t.lowestObserverState_ = Wt.STALE_,
                    t.observers_.forEach((function (t) {
                        t.dependenciesState_ === Wt.UP_TO_DATE_ && t.onBecomeStale_(),
                            t.dependenciesState_ = Wt.STALE_
                    }
                    )))
            }
            var ge = function () {
                function t(t, e, i, s) {
                    void 0 === t && (t = "Reaction"),
                        this.name_ = void 0,
                        this.onInvalidate_ = void 0,
                        this.errorHandler_ = void 0,
                        this.requiresObservable_ = void 0,
                        this.observing_ = [],
                        this.newObserving_ = [],
                        this.dependenciesState_ = Wt.NOT_TRACKING_,
                        this.diffValue_ = 0,
                        this.runId_ = 0,
                        this.unboundDepsCount_ = 0,
                        this.isDisposed_ = !1,
                        this.isScheduled_ = !1,
                        this.isTrackPending_ = !1,
                        this.isRunning_ = !1,
                        this.isTracing_ = Ut.NONE,
                        this.name_ = t,
                        this.onInvalidate_ = e,
                        this.errorHandler_ = i,
                        this.requiresObservable_ = s
                }
                var e = t.prototype;
                return e.onBecomeStale_ = function () {
                    this.schedule_()
                }
                    ,
                    e.schedule_ = function () {
                        this.isScheduled_ || (this.isScheduled_ = !0,
                            le.pendingReactions.push(this),
                            Se())
                    }
                    ,
                    e.isScheduled = function () {
                        return this.isScheduled_
                    }
                    ,
                    e.runReaction_ = function () {
                        if (!this.isDisposed_) {
                            pe(),
                                this.isScheduled_ = !1;
                            var t = le.trackingContext;
                            if (le.trackingContext = this,
                                qt(this)) {
                                this.isTrackPending_ = !0;
                                try {
                                    this.onInvalidate_()
                                } catch (t) {
                                    this.reportExceptionInDerivation_(t)
                                }
                            }
                            le.trackingContext = t,
                                me()
                        }
                    }
                    ,
                    e.track = function (t) {
                        if (!this.isDisposed_) {
                            pe(),
                                this.isRunning_ = !0;
                            var e = le.trackingContext;
                            le.trackingContext = this;
                            var i = $t(this, t, void 0);
                            le.trackingContext = e,
                                this.isRunning_ = !1,
                                this.isTrackPending_ = !1,
                                this.isDisposed_ && Jt(this),
                                Yt(i) && this.reportExceptionInDerivation_(i.cause),
                                me()
                        }
                    }
                    ,
                    e.reportExceptionInDerivation_ = function (t) {
                        var e = this;
                        if (this.errorHandler_)
                            this.errorHandler_(t, this);
                        else {
                            if (le.disableErrorBoundaries)
                                throw t;
                            var i = "[mobx] uncaught error in '" + this + "'";
                            le.suppressReactionErrors || console.error(i, t),
                                le.globalReactionErrorHandlers.forEach((function (i) {
                                    return i(t, e)
                                }
                                ))
                        }
                    }
                    ,
                    e.dispose = function () {
                        this.isDisposed_ || (this.isDisposed_ = !0,
                            this.isRunning_ || (pe(),
                                Jt(this),
                                me()))
                    }
                    ,
                    e.getDisposer_ = function () {
                        var t = this.dispose.bind(this);
                        return t[H] = this,
                            t
                    }
                    ,
                    e.toString = function () {
                        return "Reaction[" + this.name_ + "]"
                    }
                    ,
                    e.trace = function (t) {
                        void 0 === t && (t = !1),
                            function () {
                                s("trace() is not available in production builds");
                                for (var t = !1, e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                                    i[n] = arguments[n];
                                "boolean" == typeof i[i.length - 1] && (t = i.pop());
                                var o = function (t) {
                                    switch (t.length) {
                                        case 0:
                                            return le.trackingDerivation;
                                        case 1:
                                            return ss(t[0]);
                                        case 2:
                                            return ss(t[0], t[1])
                                    }
                                }(i);
                                if (!o)
                                    return s("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
                                o.isTracing_ === Ut.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"),
                                    o.isTracing_ = t ? Ut.BREAK : Ut.LOG
                            }(this, t)
                    }
                    ,
                    t
            }()
                , ve = 100
                , ye = function (t) {
                    return t()
                };
            function Se() {
                le.inBatch > 0 || le.isRunningReactions || ye(we)
            }
            function we() {
                le.isRunningReactions = !0;
                for (var t = le.pendingReactions, e = 0; t.length > 0;) {
                    ++e === ve && (console.error("[mobx] cycle in reaction: " + t[0]),
                        t.splice(0));
                    for (var i = t.splice(0), s = 0, n = i.length; s < n; s++)
                        i[s].runReaction_()
                }
                le.isRunningReactions = !1
            }
            var xe = A("Reaction", ge)
                , Ce = "action"
                , Ae = "autoAction"
                , Be = Q(Ce)
                , _e = Q("action.bound", {
                    bound: !0
                })
                , Pe = Q(Ae, {
                    autoAction: !0
                })
                , Oe = Q("autoAction.bound", {
                    autoAction: !0,
                    bound: !0
                });
            function Te(t) {
                return function (e, i) {
                    return g(e) ? Dt(e.name || "<unnamed action>", e, t) : g(i) ? Dt(e, i, t) : v(i) ? V(e, i, t ? Pe : Be) : v(e) ? F(Q(t ? Ae : Ce, {
                        name: e,
                        autoAction: t
                    })) : void 0
                }
            }
            var je = Te(!1);
            Object.assign(je, Be);
            var ke = Te(!0);
            function Ee(t) {
                return Nt(t.name, !1, t, this, void 0)
            }
            function Le(t) {
                return g(t) && !0 === t.isMobxAction
            }
            Object.assign(ke, Pe),
                je.bound = F(_e),
                ke.bound = F(Oe);
            var Re = function (t) {
                return t()
            };
            function Me(t) {
                return t.scheduler ? t.scheduler : t.delay ? function (e) {
                    return setTimeout(e, t.delay)
                }
                    : Re
            }
            function Ie(t, e, i) {
                var s;
                void 0 === i && (i = u);
                var n, o, r, a, c = null != (s = i.name) ? s : "Reaction", l = je(c, i.onError ? (n = i.onError,
                    o = e,
                    function () {
                        try {
                            return o.apply(this, arguments)
                        } catch (t) {
                            n.call(this, t)
                        }
                    }
                ) : e), h = !i.scheduler && !i.delay, d = Me(i), p = !0, m = !1, b = i.compareStructural ? X.structural : i.equals || X.default, f = new ge(c, (function () {
                    p || h ? g() : m || (m = !0,
                        d(g))
                }
                ), i.onError, i.requiresObservable);
                function g() {
                    if (m = !1,
                        !f.isDisposed_) {
                        var e = !1;
                        f.track((function () {
                            var i = zt(!1, (function () {
                                return t(f)
                            }
                            ));
                            e = p || !b(r, i),
                                a = r,
                                r = i
                        }
                        )),
                            (p && i.fireImmediately || !p && e) && l(r, a, f),
                            p = !1
                    }
                }
                return f.schedule_(),
                    f.getDisposer_()
            }
            var De = "onBO"
                , Ne = "onBUO";
            function ze(t, e, i) {
                return Ge(Ne, t, e, i)
            }
            function Ge(t, e, i, s) {
                var n = "function" == typeof s ? ss(e, i) : ss(e)
                    , o = g(s) ? s : i
                    , r = t + "L";
                return n[r] ? n[r].add(o) : n[r] = new Set([o]),
                    function () {
                        var t = n[r];
                        t && (t.delete(o),
                            0 === t.size && delete n[r])
                    }
            }
            var Fe = "never"
                , Ve = "always"
                , He = "observed";
            function We(t) {
                !0 === t.isolateGlobalState && function () {
                    if ((le.pendingReactions.length || le.inBatch || le.isRunningReactions) && s(36),
                        ce = !0,
                        ae) {
                        var t = o();
                        0 == --t.__mobxInstanceCount && (t.__mobxGlobals = void 0),
                            le = new re
                    }
                }();
                var e, i, n = t.useProxies, r = t.enforceActions;
                if (void 0 !== n && (le.useProxies = n === Ve || n !== Fe && "undefined" != typeof Proxy),
                    "ifavailable" === n && (le.verifyProxies = !0),
                    void 0 !== r) {
                    var a = r === Ve ? Ve : r === He;
                    le.enforceActions = a,
                        le.allowStateChanges = !0 !== a && a !== Ve
                }
                ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach((function (e) {
                    e in t && (le[e] = !!t[e])
                }
                )),
                    le.allowStateReads = !le.observableRequiresReaction,
                    t.reactionScheduler && (e = t.reactionScheduler,
                        i = ye,
                        ye = function (t) {
                            return e((function () {
                                return i(t)
                            }
                            ))
                        }
                    )
            }
            function Ue(t, e, i, s) {
                var n = k(e)
                    , o = Wi(t, s)[H];
                pe();
                try {
                    O(n).forEach((function (t) {
                        o.extend_(t, n[t], !i || !(t in i) || i[t])
                    }
                    ))
                } finally {
                    me()
                }
                return t
            }
            function Ke(t, e) {
                return Xe(ss(t, e))
            }
            function Xe(t) {
                var e, i = {
                    name: t.name_
                };
                return t.observing_ && t.observing_.length > 0 && (i.dependencies = (e = t.observing_,
                    Array.from(new Set(e))).map(Xe)),
                    i
            }
            var Ze = 0;
            function Ye() {
                this.message = "FLOW_CANCELLED"
            }
            Ye.prototype = Object.create(Error.prototype);
            var qe = et("flow")
                , Qe = et("flow.bound", {
                    bound: !0
                })
                , $e = Object.assign((function (t, e) {
                    if (v(e))
                        return V(t, e, qe);
                    var i = t
                        , s = i.name || "<unnamed flow>"
                        , n = function () {
                            var t, e = arguments, n = ++Ze, o = je(s + " - runid: " + n + " - init", i).apply(this, e), r = void 0, a = new Promise((function (e, i) {
                                var a = 0;
                                function c(t) {
                                    var e;
                                    r = void 0;
                                    try {
                                        e = je(s + " - runid: " + n + " - yield " + a++, o.next).call(o, t)
                                    } catch (t) {
                                        return i(t)
                                    }
                                    h(e)
                                }
                                function l(t) {
                                    var e;
                                    r = void 0;
                                    try {
                                        e = je(s + " - runid: " + n + " - yield " + a++, o.throw).call(o, t)
                                    } catch (t) {
                                        return i(t)
                                    }
                                    h(e)
                                }
                                function h(t) {
                                    if (!g(null == t ? void 0 : t.then))
                                        return t.done ? e(t.value) : (r = Promise.resolve(t.value)).then(c, l);
                                    t.then(h, i)
                                }
                                t = i,
                                    c(void 0)
                            }
                            ));
                            return a.cancel = je(s + " - runid: " + n + " - cancel", (function () {
                                try {
                                    r && Je(r);
                                    var e = o.return(void 0)
                                        , i = Promise.resolve(e.value);
                                    i.then(f, f),
                                        Je(i),
                                        t(new Ye)
                                } catch (e) {
                                    t(e)
                                }
                            }
                            )),
                                a
                        };
                    return n.isMobXFlow = !0,
                        n
                }
                ), qe);
            function Je(t) {
                g(t.cancel) && t.cancel()
            }
            function ti(t) {
                return !0 === (null == t ? void 0 : t.isMobXFlow)
            }
            function ei(t, e) {
                if (void 0 === e)
                    return Xt(t);
                if (!1 === Xi(t))
                    return !1;
                if (!t[H].values_.has(e))
                    return !1;
                var i = ss(t, e);
                return Xt(i)
            }
            function ii(t) {
                return ei(t)
            }
            function si(t, e) {
                return ei(t, e)
            }
            function ni(t) {
                return function (t, e) {
                    return !!t && (void 0 !== e ? !!Xi(t) && t[H].values_.has(e) : Xi(t) || !!t[H] || U(t) || xe(t) || Xt(t))
                }(t)
            }
            function oi(t) {
                return Xi(t) ? t[H].keys_() : Di(t) || Gi(t) ? Array.from(t.keys()) : ji(t) ? t.map((function (t, e) {
                    return e
                }
                )) : void s(5)
            }
            function ri(t, e, i, s) {
                return g(i) ? function (t, e, i, s) {
                    return ns(t, e).observe_(i, s)
                }(t, e, i, s) : function (t, e, i) {
                    return ns(t).observe_(e, i)
                }(t, e, i)
            }
            function ai(t, e) {
                void 0 === e && (e = void 0),
                    pe();
                try {
                    return t.apply(e)
                } finally {
                    me()
                }
            }
            function ci(t) {
                return t[H]
            }
            $e.bound = F(Qe);
            var li = {
                has: function (t, e) {
                    return ci(t).has_(e)
                },
                get: function (t, e) {
                    return ci(t).get_(e)
                },
                set: function (t, e, i) {
                    var s;
                    return !!v(e) && (null == (s = ci(t).set_(e, i, !0)) || s)
                },
                deleteProperty: function (t, e) {
                    var i;
                    return !!v(e) && (null == (i = ci(t).delete_(e, !0)) || i)
                },
                defineProperty: function (t, e, i) {
                    var s;
                    return null == (s = ci(t).defineProperty_(e, i)) || s
                },
                ownKeys: function (t) {
                    return ci(t).ownKeys_()
                },
                preventExtensions: function (t) {
                    s(13)
                }
            };
            function hi(t) {
                return void 0 !== t.interceptors_ && t.interceptors_.length > 0
            }
            function ui(t, e) {
                var i = t.interceptors_ || (t.interceptors_ = []);
                return i.push(e),
                    b((function () {
                        var t = i.indexOf(e);
                        -1 !== t && i.splice(t, 1)
                    }
                    ))
            }
            function di(t, e) {
                var i = ee();
                try {
                    for (var n = [].concat(t.interceptors_ || []), o = 0, r = n.length; o < r && ((e = n[o](e)) && !e.type && s(14),
                        e); o++)
                        ;
                    return e
                } finally {
                    ie(i)
                }
            }
            function pi(t) {
                return void 0 !== t.changeListeners_ && t.changeListeners_.length > 0
            }
            function mi(t, e) {
                var i = t.changeListeners_ || (t.changeListeners_ = []);
                return i.push(e),
                    b((function () {
                        var t = i.indexOf(e);
                        -1 !== t && i.splice(t, 1)
                    }
                    ))
            }
            function bi(t, e) {
                var i = ee()
                    , s = t.changeListeners_;
                if (s) {
                    for (var n = 0, o = (s = s.slice()).length; n < o; n++)
                        s[n](e);
                    ie(i)
                }
            }
            function fi(t, e, i) {
                var s = Wi(t, i)[H];
                pe();
                try {
                    null != e || (e = function (t) {
                        return j(t, G) || x(t, G, R({}, t[G])),
                            t[G]
                    }(t)),
                        O(e).forEach((function (t) {
                            return s.make_(t, e[t])
                        }
                        ))
                } finally {
                    me()
                }
                return t
            }
            var gi = "splice"
                , vi = "update"
                , yi = {
                    get: function (t, e) {
                        var i = t[H];
                        return e === H ? i : "length" === e ? i.getArrayLength_() : "string" != typeof e || isNaN(e) ? j(xi, e) ? xi[e] : t[e] : i.get_(parseInt(e))
                    },
                    set: function (t, e, i) {
                        var s = t[H];
                        return "length" === e && s.setArrayLength_(i),
                            "symbol" == typeof e || isNaN(e) ? t[e] = i : s.set_(parseInt(e), i),
                            !0
                    },
                    preventExtensions: function () {
                        s(15)
                    }
                }
                , Si = function () {
                    function t(t, e, i, s) {
                        void 0 === t && (t = "ObservableArray"),
                            this.owned_ = void 0,
                            this.legacyMode_ = void 0,
                            this.atom_ = void 0,
                            this.values_ = [],
                            this.interceptors_ = void 0,
                            this.changeListeners_ = void 0,
                            this.enhancer_ = void 0,
                            this.dehancer = void 0,
                            this.proxy_ = void 0,
                            this.lastKnownLength_ = 0,
                            this.owned_ = i,
                            this.legacyMode_ = s,
                            this.atom_ = new W(t),
                            this.enhancer_ = function (t, i) {
                                return e(t, i, "ObservableArray[..]")
                            }
                    }
                    var e = t.prototype;
                    return e.dehanceValue_ = function (t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }
                        ,
                        e.dehanceValues_ = function (t) {
                            return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t
                        }
                        ,
                        e.intercept_ = function (t) {
                            return ui(this, t)
                        }
                        ,
                        e.observe_ = function (t, e) {
                            return void 0 === e && (e = !1),
                                e && t({
                                    observableKind: "array",
                                    object: this.proxy_,
                                    debugObjectName: this.atom_.name_,
                                    type: "splice",
                                    index: 0,
                                    added: this.values_.slice(),
                                    addedCount: this.values_.length,
                                    removed: [],
                                    removedCount: 0
                                }),
                                mi(this, t)
                        }
                        ,
                        e.getArrayLength_ = function () {
                            return this.atom_.reportObserved(),
                                this.values_.length
                        }
                        ,
                        e.setArrayLength_ = function (t) {
                            ("number" != typeof t || isNaN(t) || t < 0) && s("Out of range: " + t);
                            var e = this.values_.length;
                            if (t !== e)
                                if (t > e) {
                                    for (var i = new Array(t - e), n = 0; n < t - e; n++)
                                        i[n] = void 0;
                                    this.spliceWithArray_(e, 0, i)
                                } else
                                    this.spliceWithArray_(t, e - t)
                        }
                        ,
                        e.updateArrayLength_ = function (t, e) {
                            t !== this.lastKnownLength_ && s(16),
                                this.lastKnownLength_ += e,
                                this.legacyMode_ && e > 0 && es(t + e + 1)
                        }
                        ,
                        e.spliceWithArray_ = function (t, e, i) {
                            var s = this;
                            this.atom_;
                            var n = this.values_.length;
                            if (void 0 === t ? t = 0 : t > n ? t = n : t < 0 && (t = Math.max(0, n + t)),
                                e = 1 === arguments.length ? n - t : null == e ? 0 : Math.max(0, Math.min(e, n - t)),
                                void 0 === i && (i = h),
                                hi(this)) {
                                var o = di(this, {
                                    object: this.proxy_,
                                    type: gi,
                                    index: t,
                                    removedCount: e,
                                    added: i
                                });
                                if (!o)
                                    return h;
                                e = o.removedCount,
                                    i = o.added
                            }
                            if (i = 0 === i.length ? i : i.map((function (t) {
                                return s.enhancer_(t, void 0)
                            }
                            )),
                                this.legacyMode_) {
                                var r = i.length - e;
                                this.updateArrayLength_(n, r)
                            }
                            var a = this.spliceItemsIntoValues_(t, e, i);
                            return 0 === e && 0 === i.length || this.notifyArraySplice_(t, i, a),
                                this.dehanceValues_(a)
                        }
                        ,
                        e.spliceItemsIntoValues_ = function (t, e, i) {
                            var s;
                            if (i.length < 1e4)
                                return (s = this.values_).splice.apply(s, [t, e].concat(i));
                            var n = this.values_.slice(t, t + e)
                                , o = this.values_.slice(t + e);
                            this.values_.length += i.length - e;
                            for (var r = 0; r < i.length; r++)
                                this.values_[t + r] = i[r];
                            for (var a = 0; a < o.length; a++)
                                this.values_[t + i.length + a] = o[a];
                            return n
                        }
                        ,
                        e.notifyArrayChildUpdate_ = function (t, e, i) {
                            var s = !this.owned_ && !1
                                , n = pi(this)
                                , o = n || s ? {
                                    observableKind: "array",
                                    object: this.proxy_,
                                    type: vi,
                                    debugObjectName: this.atom_.name_,
                                    index: t,
                                    newValue: e,
                                    oldValue: i
                                } : null;
                            this.atom_.reportChanged(),
                                n && bi(this, o)
                        }
                        ,
                        e.notifyArraySplice_ = function (t, e, i) {
                            var s = !this.owned_ && !1
                                , n = pi(this)
                                , o = n || s ? {
                                    observableKind: "array",
                                    object: this.proxy_,
                                    debugObjectName: this.atom_.name_,
                                    type: gi,
                                    index: t,
                                    removed: i,
                                    added: e,
                                    removedCount: i.length,
                                    addedCount: e.length
                                } : null;
                            this.atom_.reportChanged(),
                                n && bi(this, o)
                        }
                        ,
                        e.get_ = function (t) {
                            if (t < this.values_.length)
                                return this.atom_.reportObserved(),
                                    this.dehanceValue_(this.values_[t]);
                            console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                        }
                        ,
                        e.set_ = function (t, e) {
                            var i = this.values_;
                            if (t < i.length) {
                                this.atom_;
                                var n = i[t];
                                if (hi(this)) {
                                    var o = di(this, {
                                        type: vi,
                                        object: this.proxy_,
                                        index: t,
                                        newValue: e
                                    });
                                    if (!o)
                                        return;
                                    e = o.newValue
                                }
                                (e = this.enhancer_(e, n)) !== n && (i[t] = e,
                                    this.notifyArrayChildUpdate_(t, e, n))
                            } else
                                t === i.length ? this.spliceWithArray_(t, 0, [e]) : s(17, t, i.length)
                        }
                        ,
                        t
                }();
            function wi(t, e, i, s) {
                void 0 === i && (i = "ObservableArray"),
                    void 0 === s && (s = !1),
                    m();
                var n = new Si(i, e, s, !1);
                C(n.values_, H, n);
                var o = new Proxy(n.values_, yi);
                if (n.proxy_ = o,
                    t && t.length) {
                    var r = Gt(!0);
                    n.spliceWithArray_(0, 0, t),
                        Ft(r)
                }
                return o
            }
            var xi = {
                clear: function () {
                    return this.splice(0)
                },
                replace: function (t) {
                    var e = this[H];
                    return e.spliceWithArray_(0, e.values_.length, t)
                },
                toJSON: function () {
                    return this.slice()
                },
                splice: function (t, e) {
                    for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++)
                        s[n - 2] = arguments[n];
                    var o = this[H];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return o.spliceWithArray_(t);
                        case 2:
                            return o.spliceWithArray_(t, e)
                    }
                    return o.spliceWithArray_(t, e, s)
                },
                spliceWithArray: function (t, e, i) {
                    return this[H].spliceWithArray_(t, e, i)
                },
                push: function () {
                    for (var t = this[H], e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                        i[s] = arguments[s];
                    return t.spliceWithArray_(t.values_.length, 0, i),
                        t.values_.length
                },
                pop: function () {
                    return this.splice(Math.max(this[H].values_.length - 1, 0), 1)[0]
                },
                shift: function () {
                    return this.splice(0, 1)[0]
                },
                unshift: function () {
                    for (var t = this[H], e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                        i[s] = arguments[s];
                    return t.spliceWithArray_(0, 0, i),
                        t.values_.length
                },
                reverse: function () {
                    return le.trackingDerivation && s(37, "reverse"),
                        this.replace(this.slice().reverse()),
                        this
                },
                sort: function () {
                    le.trackingDerivation && s(37, "sort");
                    var t = this.slice();
                    return t.sort.apply(t, arguments),
                        this.replace(t),
                        this
                },
                remove: function (t) {
                    var e = this[H]
                        , i = e.dehanceValues_(e.values_).indexOf(t);
                    return i > -1 && (this.splice(i, 1),
                        !0)
                }
            };
            function Ci(t, e) {
                "function" == typeof Array.prototype[t] && (xi[t] = e(t))
            }
            function Ai(t) {
                return function () {
                    var e = this[H];
                    e.atom_.reportObserved();
                    var i = e.dehanceValues_(e.values_);
                    return i[t].apply(i, arguments)
                }
            }
            function Bi(t) {
                return function (e, i) {
                    var s = this
                        , n = this[H];
                    return n.atom_.reportObserved(),
                        n.dehanceValues_(n.values_)[t]((function (t, n) {
                            return e.call(i, t, n, s)
                        }
                        ))
                }
            }
            function _i(t) {
                return function () {
                    var e = this
                        , i = this[H];
                    i.atom_.reportObserved();
                    var s = i.dehanceValues_(i.values_)
                        , n = arguments[0];
                    return arguments[0] = function (t, i, s) {
                        return n(t, i, s, e)
                    }
                        ,
                        s[t].apply(s, arguments)
                }
            }
            Ci("concat", Ai),
                Ci("flat", Ai),
                Ci("includes", Ai),
                Ci("indexOf", Ai),
                Ci("join", Ai),
                Ci("lastIndexOf", Ai),
                Ci("slice", Ai),
                Ci("toString", Ai),
                Ci("toLocaleString", Ai),
                Ci("every", Bi),
                Ci("filter", Bi),
                Ci("find", Bi),
                Ci("findIndex", Bi),
                Ci("flatMap", Bi),
                Ci("forEach", Bi),
                Ci("map", Bi),
                Ci("some", Bi),
                Ci("reduce", _i),
                Ci("reduceRight", _i);
            var Pi, Oi, Ti = A("ObservableArrayAdministration", Si);
            function ji(t) {
                return y(t) && Ti(t[H])
            }
            var ki = {}
                , Ei = "add"
                , Li = "delete";
            Pi = Symbol.iterator,
                Oi = Symbol.toStringTag;
            var Ri, Mi, Ii = function () {
                function t(t, e, i) {
                    var n = this;
                    void 0 === e && (e = Z),
                        void 0 === i && (i = "ObservableMap"),
                        this.enhancer_ = void 0,
                        this.name_ = void 0,
                        this[H] = ki,
                        this.data_ = void 0,
                        this.hasMap_ = void 0,
                        this.keysAtom_ = void 0,
                        this.interceptors_ = void 0,
                        this.changeListeners_ = void 0,
                        this.dehancer = void 0,
                        this.enhancer_ = e,
                        this.name_ = i,
                        g(Map) || s(18),
                        this.keysAtom_ = K("ObservableMap.keys()"),
                        this.data_ = new Map,
                        this.hasMap_ = new Map,
                        zt(!0, (function () {
                            n.merge(t)
                        }
                        ))
                }
                var e = t.prototype;
                return e.has_ = function (t) {
                    return this.data_.has(t)
                }
                    ,
                    e.has = function (t) {
                        var e = this;
                        if (!le.trackingDerivation)
                            return this.has_(t);
                        var i = this.hasMap_.get(t);
                        if (!i) {
                            var s = i = new Ht(this.has_(t), Y, "ObservableMap.key?", !1);
                            this.hasMap_.set(t, s),
                                ze(s, (function () {
                                    return e.hasMap_.delete(t)
                                }
                                ))
                        }
                        return i.get()
                    }
                    ,
                    e.set = function (t, e) {
                        var i = this.has_(t);
                        if (hi(this)) {
                            var s = di(this, {
                                type: i ? vi : Ei,
                                object: this,
                                newValue: e,
                                name: t
                            });
                            if (!s)
                                return this;
                            e = s.newValue
                        }
                        return i ? this.updateValue_(t, e) : this.addValue_(t, e),
                            this
                    }
                    ,
                    e.delete = function (t) {
                        var e = this;
                        if (this.keysAtom_,
                            hi(this) && !di(this, {
                                type: Li,
                                object: this,
                                name: t
                            }))
                            return !1;
                        if (this.has_(t)) {
                            var i = pi(this)
                                , s = i ? {
                                    observableKind: "map",
                                    debugObjectName: this.name_,
                                    type: Li,
                                    object: this,
                                    oldValue: this.data_.get(t).value_,
                                    name: t
                                } : null;
                            return ai((function () {
                                var i;
                                e.keysAtom_.reportChanged(),
                                    null == (i = e.hasMap_.get(t)) || i.setNewValue_(!1),
                                    e.data_.get(t).setNewValue_(void 0),
                                    e.data_.delete(t)
                            }
                            )),
                                i && bi(this, s),
                                !0
                        }
                        return !1
                    }
                    ,
                    e.updateValue_ = function (t, e) {
                        var i = this.data_.get(t);
                        if ((e = i.prepareNewValue_(e)) !== le.UNCHANGED) {
                            var s = pi(this)
                                , n = s ? {
                                    observableKind: "map",
                                    debugObjectName: this.name_,
                                    type: vi,
                                    object: this,
                                    oldValue: i.value_,
                                    name: t,
                                    newValue: e
                                } : null;
                            i.setNewValue_(e),
                                s && bi(this, n)
                        }
                    }
                    ,
                    e.addValue_ = function (t, e) {
                        var i = this;
                        this.keysAtom_,
                            ai((function () {
                                var s, n = new Ht(e, i.enhancer_, "ObservableMap.key", !1);
                                i.data_.set(t, n),
                                    e = n.value_,
                                    null == (s = i.hasMap_.get(t)) || s.setNewValue_(!0),
                                    i.keysAtom_.reportChanged()
                            }
                            ));
                        var s = pi(this)
                            , n = s ? {
                                observableKind: "map",
                                debugObjectName: this.name_,
                                type: Ei,
                                object: this,
                                name: t,
                                newValue: e
                            } : null;
                        s && bi(this, n)
                    }
                    ,
                    e.get = function (t) {
                        return this.has(t) ? this.dehanceValue_(this.data_.get(t).get()) : this.dehanceValue_(void 0)
                    }
                    ,
                    e.dehanceValue_ = function (t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }
                    ,
                    e.keys = function () {
                        return this.keysAtom_.reportObserved(),
                            this.data_.keys()
                    }
                    ,
                    e.values = function () {
                        var t = this
                            , e = this.keys();
                        return hs({
                            next: function () {
                                var i = e.next()
                                    , s = i.done
                                    , n = i.value;
                                return {
                                    done: s,
                                    value: s ? void 0 : t.get(n)
                                }
                            }
                        })
                    }
                    ,
                    e.entries = function () {
                        var t = this
                            , e = this.keys();
                        return hs({
                            next: function () {
                                var i = e.next()
                                    , s = i.done
                                    , n = i.value;
                                return {
                                    done: s,
                                    value: s ? void 0 : [n, t.get(n)]
                                }
                            }
                        })
                    }
                    ,
                    e[Pi] = function () {
                        return this.entries()
                    }
                    ,
                    e.forEach = function (t, e) {
                        for (var i, s = z(this); !(i = s()).done;) {
                            var n = i.value
                                , o = n[0]
                                , r = n[1];
                            t.call(e, r, o, this)
                        }
                    }
                    ,
                    e.merge = function (t) {
                        var e = this;
                        return Di(t) && (t = new Map(t)),
                            ai((function () {
                                S(t) ? function (t) {
                                    var e = Object.keys(t);
                                    if (!P)
                                        return e;
                                    var i = Object.getOwnPropertySymbols(t);
                                    return i.length ? [].concat(e, i.filter((function (e) {
                                        return l.propertyIsEnumerable.call(t, e)
                                    }
                                    ))) : e
                                }(t).forEach((function (i) {
                                    return e.set(i, t[i])
                                }
                                )) : Array.isArray(t) ? t.forEach((function (t) {
                                    var i = t[0]
                                        , s = t[1];
                                    return e.set(i, s)
                                }
                                )) : B(t) ? (t.constructor !== Map && s(19, t),
                                    t.forEach((function (t, i) {
                                        return e.set(i, t)
                                    }
                                    ))) : null != t && s(20, t)
                            }
                            )),
                            this
                    }
                    ,
                    e.clear = function () {
                        var t = this;
                        ai((function () {
                            te((function () {
                                for (var e, i = z(t.keys()); !(e = i()).done;) {
                                    var s = e.value;
                                    t.delete(s)
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    e.replace = function (t) {
                        var e = this;
                        return ai((function () {
                            for (var i, n = function (t) {
                                if (B(t) || Di(t))
                                    return t;
                                if (Array.isArray(t))
                                    return new Map(t);
                                if (S(t)) {
                                    var e = new Map;
                                    for (var i in t)
                                        e.set(i, t[i]);
                                    return e
                                }
                                return s(21, t)
                            }(t), o = new Map, r = !1, a = z(e.data_.keys()); !(i = a()).done;) {
                                var c = i.value;
                                if (!n.has(c))
                                    if (e.delete(c))
                                        r = !0;
                                    else {
                                        var l = e.data_.get(c);
                                        o.set(c, l)
                                    }
                            }
                            for (var h, u = z(n.entries()); !(h = u()).done;) {
                                var d = h.value
                                    , p = d[0]
                                    , m = d[1]
                                    , b = e.data_.has(p);
                                if (e.set(p, m),
                                    e.data_.has(p)) {
                                    var f = e.data_.get(p);
                                    o.set(p, f),
                                        b || (r = !0)
                                }
                            }
                            if (!r)
                                if (e.data_.size !== o.size)
                                    e.keysAtom_.reportChanged();
                                else
                                    for (var g = e.data_.keys(), v = o.keys(), y = g.next(), w = v.next(); !y.done;) {
                                        if (y.value !== w.value) {
                                            e.keysAtom_.reportChanged();
                                            break
                                        }
                                        y = g.next(),
                                            w = v.next()
                                    }
                            e.data_ = o
                        }
                        )),
                            this
                    }
                    ,
                    e.toString = function () {
                        return "[object ObservableMap]"
                    }
                    ,
                    e.toJSON = function () {
                        return Array.from(this)
                    }
                    ,
                    e.observe_ = function (t, e) {
                        return mi(this, t)
                    }
                    ,
                    e.intercept_ = function (t) {
                        return ui(this, t)
                    }
                    ,
                    L(t, [{
                        key: "size",
                        get: function () {
                            return this.keysAtom_.reportObserved(),
                                this.data_.size
                        }
                    }, {
                        key: Oi,
                        get: function () {
                            return "Map"
                        }
                    }]),
                    t
            }(), Di = A("ObservableMap", Ii), Ni = {};
            Ri = Symbol.iterator,
                Mi = Symbol.toStringTag;
            var zi = function () {
                function t(t, e, i) {
                    void 0 === e && (e = Z),
                        void 0 === i && (i = "ObservableSet"),
                        this.name_ = void 0,
                        this[H] = Ni,
                        this.data_ = new Set,
                        this.atom_ = void 0,
                        this.changeListeners_ = void 0,
                        this.interceptors_ = void 0,
                        this.dehancer = void 0,
                        this.enhancer_ = void 0,
                        this.name_ = i,
                        g(Set) || s(22),
                        this.atom_ = K(this.name_),
                        this.enhancer_ = function (t, s) {
                            return e(t, s, i)
                        }
                        ,
                        t && this.replace(t)
                }
                var e = t.prototype;
                return e.dehanceValue_ = function (t) {
                    return void 0 !== this.dehancer ? this.dehancer(t) : t
                }
                    ,
                    e.clear = function () {
                        var t = this;
                        ai((function () {
                            te((function () {
                                for (var e, i = z(t.data_.values()); !(e = i()).done;) {
                                    var s = e.value;
                                    t.delete(s)
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    e.forEach = function (t, e) {
                        for (var i, s = z(this); !(i = s()).done;) {
                            var n = i.value;
                            t.call(e, n, n, this)
                        }
                    }
                    ,
                    e.add = function (t) {
                        var e = this;
                        if (this.atom_,
                            hi(this) && !di(this, {
                                type: Ei,
                                object: this,
                                newValue: t
                            }))
                            return this;
                        if (!this.has(t)) {
                            ai((function () {
                                e.data_.add(e.enhancer_(t, void 0)),
                                    e.atom_.reportChanged()
                            }
                            ));
                            var i = pi(this)
                                , s = i ? {
                                    observableKind: "set",
                                    debugObjectName: this.name_,
                                    type: Ei,
                                    object: this,
                                    newValue: t
                                } : null;
                            i && bi(this, s)
                        }
                        return this
                    }
                    ,
                    e.delete = function (t) {
                        var e = this;
                        if (hi(this) && !di(this, {
                            type: Li,
                            object: this,
                            oldValue: t
                        }))
                            return !1;
                        if (this.has(t)) {
                            var i = pi(this)
                                , s = i ? {
                                    observableKind: "set",
                                    debugObjectName: this.name_,
                                    type: Li,
                                    object: this,
                                    oldValue: t
                                } : null;
                            return ai((function () {
                                e.atom_.reportChanged(),
                                    e.data_.delete(t)
                            }
                            )),
                                i && bi(this, s),
                                !0
                        }
                        return !1
                    }
                    ,
                    e.has = function (t) {
                        return this.atom_.reportObserved(),
                            this.data_.has(this.dehanceValue_(t))
                    }
                    ,
                    e.entries = function () {
                        var t = 0
                            , e = Array.from(this.keys())
                            , i = Array.from(this.values());
                        return hs({
                            next: function () {
                                var s = t;
                                return t += 1,
                                    s < i.length ? {
                                        value: [e[s], i[s]],
                                        done: !1
                                    } : {
                                        done: !0
                                    }
                            }
                        })
                    }
                    ,
                    e.keys = function () {
                        return this.values()
                    }
                    ,
                    e.values = function () {
                        this.atom_.reportObserved();
                        var t = this
                            , e = 0
                            , i = Array.from(this.data_.values());
                        return hs({
                            next: function () {
                                return e < i.length ? {
                                    value: t.dehanceValue_(i[e++]),
                                    done: !1
                                } : {
                                    done: !0
                                }
                            }
                        })
                    }
                    ,
                    e.replace = function (t) {
                        var e = this;
                        return Gi(t) && (t = new Set(t)),
                            ai((function () {
                                Array.isArray(t) || _(t) ? (e.clear(),
                                    t.forEach((function (t) {
                                        return e.add(t)
                                    }
                                    ))) : null != t && s("Cannot initialize set from " + t)
                            }
                            )),
                            this
                    }
                    ,
                    e.observe_ = function (t, e) {
                        return mi(this, t)
                    }
                    ,
                    e.intercept_ = function (t) {
                        return ui(this, t)
                    }
                    ,
                    e.toJSON = function () {
                        return Array.from(this)
                    }
                    ,
                    e.toString = function () {
                        return "[object ObservableSet]"
                    }
                    ,
                    e[Ri] = function () {
                        return this.values()
                    }
                    ,
                    L(t, [{
                        key: "size",
                        get: function () {
                            return this.atom_.reportObserved(),
                                this.data_.size
                        }
                    }, {
                        key: Mi,
                        get: function () {
                            return "Set"
                        }
                    }]),
                    t
            }()
                , Gi = A("ObservableSet", zi)
                , Fi = Object.create(null)
                , Vi = "remove"
                , Hi = function () {
                    function t(t, e, i, s) {
                        void 0 === e && (e = new Map),
                            void 0 === s && (s = dt),
                            this.target_ = void 0,
                            this.values_ = void 0,
                            this.name_ = void 0,
                            this.defaultAnnotation_ = void 0,
                            this.keysAtom_ = void 0,
                            this.changeListeners_ = void 0,
                            this.interceptors_ = void 0,
                            this.proxy_ = void 0,
                            this.isPlainObject_ = void 0,
                            this.appliedAnnotations_ = void 0,
                            this.pendingKeys_ = void 0,
                            this.target_ = t,
                            this.values_ = e,
                            this.name_ = i,
                            this.defaultAnnotation_ = s,
                            this.keysAtom_ = new W("ObservableObject.keys"),
                            this.isPlainObject_ = S(this.target_)
                    }
                    var e = t.prototype;
                    return e.getObservablePropValue_ = function (t) {
                        return this.values_.get(t).get()
                    }
                        ,
                        e.setObservablePropValue_ = function (t, e) {
                            var i = this.values_.get(t);
                            if (i instanceof Kt)
                                return i.set(e),
                                    !0;
                            if (hi(this)) {
                                var s = di(this, {
                                    type: vi,
                                    object: this.proxy_ || this.target_,
                                    name: t,
                                    newValue: e
                                });
                                if (!s)
                                    return null;
                                e = s.newValue
                            }
                            if ((e = i.prepareNewValue_(e)) !== le.UNCHANGED) {
                                var n = pi(this)
                                    , o = n ? {
                                        type: vi,
                                        observableKind: "object",
                                        debugObjectName: this.name_,
                                        object: this.proxy_ || this.target_,
                                        oldValue: i.value_,
                                        name: t,
                                        newValue: e
                                    } : null;
                                i.setNewValue_(e),
                                    n && bi(this, o)
                            }
                            return !0
                        }
                        ,
                        e.get_ = function (t) {
                            return le.trackingDerivation && !j(this.target_, t) && this.has_(t),
                                this.target_[t]
                        }
                        ,
                        e.set_ = function (t, e, i) {
                            return void 0 === i && (i = !1),
                                j(this.target_, t) ? this.values_.has(t) ? this.setObservablePropValue_(t, e) : i ? Reflect.set(this.target_, t, e) : (this.target_[t] = e,
                                    !0) : this.extend_(t, {
                                        value: e,
                                        enumerable: !0,
                                        writable: !0,
                                        configurable: !0
                                    }, this.defaultAnnotation_, i)
                        }
                        ,
                        e.has_ = function (t) {
                            if (!le.trackingDerivation)
                                return t in this.target_;
                            this.pendingKeys_ || (this.pendingKeys_ = new Map);
                            var e = this.pendingKeys_.get(t);
                            return e || (e = new Ht(t in this.target_, Y, "ObservableObject.key?", !1),
                                this.pendingKeys_.set(t, e)),
                                e.get()
                        }
                        ,
                        e.make_ = function (t, e) {
                            if (!0 === e && (e = this.defaultAnnotation_),
                                !1 !== e) {
                                if (!(t in this.target_)) {
                                    var i;
                                    if (null != (i = this.target_[G]) && i[t])
                                        return;
                                    s(1, e.annotationType_, this.name_ + "." + t.toString())
                                }
                                for (var n = this.target_; n && n !== l;) {
                                    var o = a(n, t);
                                    if (o) {
                                        var r = e.make_(this, t, o, n);
                                        if (0 === r)
                                            return;
                                        if (1 === r)
                                            break
                                    }
                                    n = Object.getPrototypeOf(n)
                                }
                                Zi(this, 0, t)
                            }
                        }
                        ,
                        e.extend_ = function (t, e, i, s) {
                            if (void 0 === s && (s = !1),
                                !0 === i && (i = this.defaultAnnotation_),
                                !1 === i)
                                return this.defineProperty_(t, e, s);
                            var n = i.extend_(this, t, e, s);
                            return n && Zi(this, 0, t),
                                n
                        }
                        ,
                        e.defineProperty_ = function (t, e, i) {
                            void 0 === i && (i = !1);
                            try {
                                pe();
                                var s = this.delete_(t);
                                if (!s)
                                    return s;
                                if (hi(this)) {
                                    var n = di(this, {
                                        object: this.proxy_ || this.target_,
                                        name: t,
                                        type: Ei,
                                        newValue: e.value
                                    });
                                    if (!n)
                                        return null;
                                    var o = n.newValue;
                                    e.value !== o && (e = R({}, e, {
                                        value: o
                                    }))
                                }
                                if (i) {
                                    if (!Reflect.defineProperty(this.target_, t, e))
                                        return !1
                                } else
                                    c(this.target_, t, e);
                                this.notifyPropertyAddition_(t, e.value)
                            } finally {
                                me()
                            }
                            return !0
                        }
                        ,
                        e.defineObservableProperty_ = function (t, e, i, s) {
                            void 0 === s && (s = !1);
                            try {
                                pe();
                                var n = this.delete_(t);
                                if (!n)
                                    return n;
                                if (hi(this)) {
                                    var o = di(this, {
                                        object: this.proxy_ || this.target_,
                                        name: t,
                                        type: Ei,
                                        newValue: e
                                    });
                                    if (!o)
                                        return null;
                                    e = o.newValue
                                }
                                var r = Ki(t)
                                    , a = {
                                        configurable: !le.safeDescriptors || this.isPlainObject_,
                                        enumerable: !0,
                                        get: r.get,
                                        set: r.set
                                    };
                                if (s) {
                                    if (!Reflect.defineProperty(this.target_, t, a))
                                        return !1
                                } else
                                    c(this.target_, t, a);
                                var l = new Ht(e, i, "ObservableObject.key", !1);
                                this.values_.set(t, l),
                                    this.notifyPropertyAddition_(t, l.value_)
                            } finally {
                                me()
                            }
                            return !0
                        }
                        ,
                        e.defineComputedProperty_ = function (t, e, i) {
                            void 0 === i && (i = !1);
                            try {
                                pe();
                                var s = this.delete_(t);
                                if (!s)
                                    return s;
                                if (hi(this) && !di(this, {
                                    object: this.proxy_ || this.target_,
                                    name: t,
                                    type: Ei,
                                    newValue: void 0
                                }))
                                    return null;
                                e.name || (e.name = "ObservableObject.key"),
                                    e.context = this.proxy_ || this.target_;
                                var n = Ki(t)
                                    , o = {
                                        configurable: !le.safeDescriptors || this.isPlainObject_,
                                        enumerable: !1,
                                        get: n.get,
                                        set: n.set
                                    };
                                if (i) {
                                    if (!Reflect.defineProperty(this.target_, t, o))
                                        return !1
                                } else
                                    c(this.target_, t, o);
                                this.values_.set(t, new Kt(e)),
                                    this.notifyPropertyAddition_(t, void 0)
                            } finally {
                                me()
                            }
                            return !0
                        }
                        ,
                        e.delete_ = function (t, e) {
                            if (void 0 === e && (e = !1),
                                !j(this.target_, t))
                                return !0;
                            if (hi(this) && !di(this, {
                                object: this.proxy_ || this.target_,
                                name: t,
                                type: Vi
                            }))
                                return null;
                            try {
                                var i, s;
                                pe();
                                var n, o = pi(this), r = this.values_.get(t), c = void 0;
                                if (!r && o && (c = null == (n = a(this.target_, t)) ? void 0 : n.value),
                                    e) {
                                    if (!Reflect.deleteProperty(this.target_, t))
                                        return !1
                                } else
                                    delete this.target_[t];
                                if (r && (this.values_.delete(t),
                                    r instanceof Ht && (c = r.value_),
                                    fe(r)),
                                    this.keysAtom_.reportChanged(),
                                    null == (i = this.pendingKeys_) || null == (s = i.get(t)) || s.set(t in this.target_),
                                    o) {
                                    var l = {
                                        type: Vi,
                                        observableKind: "object",
                                        object: this.proxy_ || this.target_,
                                        debugObjectName: this.name_,
                                        oldValue: c,
                                        name: t
                                    };
                                    o && bi(this, l)
                                }
                            } finally {
                                me()
                            }
                            return !0
                        }
                        ,
                        e.observe_ = function (t, e) {
                            return mi(this, t)
                        }
                        ,
                        e.intercept_ = function (t) {
                            return ui(this, t)
                        }
                        ,
                        e.notifyPropertyAddition_ = function (t, e) {
                            var i, s, n = pi(this);
                            if (n) {
                                var o = n ? {
                                    type: Ei,
                                    observableKind: "object",
                                    debugObjectName: this.name_,
                                    object: this.proxy_ || this.target_,
                                    name: t,
                                    newValue: e
                                } : null;
                                n && bi(this, o)
                            }
                            null == (i = this.pendingKeys_) || null == (s = i.get(t)) || s.set(!0),
                                this.keysAtom_.reportChanged()
                        }
                        ,
                        e.ownKeys_ = function () {
                            return this.keysAtom_.reportObserved(),
                                O(this.target_)
                        }
                        ,
                        e.keys_ = function () {
                            return this.keysAtom_.reportObserved(),
                                Object.keys(this.target_)
                        }
                        ,
                        t
                }();
            function Wi(t, e) {
                var i;
                if (j(t, H))
                    return t;
                var s = null != (i = null == e ? void 0 : e.name) ? i : "ObservableObject"
                    , n = new Hi(t, new Map, String(s), function (t) {
                        var e;
                        return t ? null != (e = t.defaultDecorator) ? e : pt(t) : void 0
                    }(e));
                return x(t, H, n),
                    t
            }
            var Ui = A("ObservableObjectAdministration", Hi);
            function Ki(t) {
                return Fi[t] || (Fi[t] = {
                    get: function () {
                        return this[H].getObservablePropValue_(t)
                    },
                    set: function (e) {
                        return this[H].setObservablePropValue_(t, e)
                    }
                })
            }
            function Xi(t) {
                return !!y(t) && Ui(t[H])
            }
            function Zi(t, e, i) {
                var s;
                null == (s = t.target_[G]) || delete s[i]
            }
            var Yi, qi, Qi = 0, $i = function () { };
            Yi = $i,
                qi = Array.prototype,
                Object.setPrototypeOf ? Object.setPrototypeOf(Yi.prototype, qi) : void 0 !== Yi.prototype.__proto__ ? Yi.prototype.__proto__ = qi : Yi.prototype = qi;
            var Ji = function (t, e, i) {
                function s(e, i, s, n) {
                    var o;
                    void 0 === s && (s = "ObservableArray"),
                        void 0 === n && (n = !1),
                        o = t.call(this) || this;
                    var r = new Si(s, i, n, !0);
                    if (r.proxy_ = D(o),
                        C(D(o), H, r),
                        e && e.length) {
                        var a = Gt(!0);
                        o.spliceWithArray(0, 0, e),
                            Ft(a)
                    }
                    return o
                }
                M(s, t);
                var n = s.prototype;
                return n.concat = function () {
                    this[H].atom_.reportObserved();
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    return Array.prototype.concat.apply(this.slice(), e.map((function (t) {
                        return ji(t) ? t.slice() : t
                    }
                    )))
                }
                    ,
                    n[i] = function () {
                        var t = this
                            , e = 0;
                        return hs({
                            next: function () {
                                return e < t.length ? {
                                    value: t[e++],
                                    done: !1
                                } : {
                                    done: !0,
                                    value: void 0
                                }
                            }
                        })
                    }
                    ,
                    L(s, [{
                        key: "length",
                        get: function () {
                            return this[H].getArrayLength_()
                        },
                        set: function (t) {
                            this[H].setArrayLength_(t)
                        }
                    }, {
                        key: e,
                        get: function () {
                            return "Array"
                        }
                    }]),
                    s
            }($i, Symbol.toStringTag, Symbol.iterator);
            function ts(t) {
                c(Ji.prototype, "" + t, function (t) {
                    return {
                        enumerable: !1,
                        configurable: !0,
                        get: function () {
                            return this[H].get_(t)
                        },
                        set: function (e) {
                            this[H].set_(t, e)
                        }
                    }
                }(t))
            }
            function es(t) {
                if (t > Qi) {
                    for (var e = Qi; e < t + 100; e++)
                        ts(e);
                    Qi = t
                }
            }
            function is(t, e, i) {
                return new Ji(t, e, i)
            }
            function ss(t, e) {
                if ("object" == typeof t && null !== t) {
                    if (ji(t))
                        return void 0 !== e && s(23),
                            t[H].atom_;
                    if (Gi(t))
                        return t[H];
                    if (Di(t)) {
                        if (void 0 === e)
                            return t.keysAtom_;
                        var i = t.data_.get(e) || t.hasMap_.get(e);
                        return i || s(25, e, os(t)),
                            i
                    }
                    if (Xi(t)) {
                        if (!e)
                            return s(26);
                        var n = t[H].values_.get(e);
                        return n || s(27, e, os(t)),
                            n
                    }
                    if (U(t) || Xt(t) || xe(t))
                        return t
                } else if (g(t) && xe(t[H]))
                    return t[H];
                s(28)
            }
            function ns(t, e) {
                return t || s(29),
                    void 0 !== e ? ns(ss(t, e)) : U(t) || Xt(t) || xe(t) || Di(t) || Gi(t) ? t : t[H] ? t[H] : void s(24, t)
            }
            function os(t, e) {
                var i;
                if (void 0 !== e)
                    i = ss(t, e);
                else {
                    if (Le(t))
                        return t.name;
                    i = Xi(t) || Di(t) || Gi(t) ? ns(t) : ss(t)
                }
                return i.name_
            }
            Object.entries(xi).forEach((function (t) {
                var e = t[0]
                    , i = t[1];
                "concat" !== e && x(Ji.prototype, e, i)
            }
            )),
                es(1e3);
            var rs = l.toString;
            function as(t, e, i) {
                return void 0 === i && (i = -1),
                    cs(t, e, i)
            }
            function cs(t, e, i, s, n) {
                if (t === e)
                    return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e)
                    return !1;
                if (t != t)
                    return e != e;
                var o = typeof t;
                if ("function" !== o && "object" !== o && "object" != typeof e)
                    return !1;
                var r = rs.call(t);
                if (r !== rs.call(e))
                    return !1;
                switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e;
                    case "[object Symbol]":
                        return "undefined" != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(e);
                    case "[object Map]":
                    case "[object Set]":
                        i >= 0 && i++
                }
                t = ls(t),
                    e = ls(e);
                var a = "[object Array]" === r;
                if (!a) {
                    if ("object" != typeof t || "object" != typeof e)
                        return !1;
                    var c = t.constructor
                        , l = e.constructor;
                    if (c !== l && !(g(c) && c instanceof c && g(l) && l instanceof l) && "constructor" in t && "constructor" in e)
                        return !1
                }
                if (0 === i)
                    return !1;
                i < 0 && (i = -1),
                    n = n || [];
                for (var h = (s = s || []).length; h--;)
                    if (s[h] === t)
                        return n[h] === e;
                if (s.push(t),
                    n.push(e),
                    a) {
                    if ((h = t.length) !== e.length)
                        return !1;
                    for (; h--;)
                        if (!cs(t[h], e[h], i - 1, s, n))
                            return !1
                } else {
                    var u, d = Object.keys(t);
                    if (h = d.length,
                        Object.keys(e).length !== h)
                        return !1;
                    for (; h--;)
                        if (!j(e, u = d[h]) || !cs(t[u], e[u], i - 1, s, n))
                            return !1
                }
                return s.pop(),
                    n.pop(),
                    !0
            }
            function ls(t) {
                return ji(t) ? t.slice() : B(t) || Di(t) || _(t) || Gi(t) ? Array.from(t.entries()) : t
            }
            function hs(t) {
                return t[Symbol.iterator] = us,
                    t
            }
            function us() {
                return this
            }
            ["Symbol", "Map", "Set"].forEach((function (t) {
                void 0 === o()[t] && s("MobX requires global '" + t + "' to be available or polyfilled")
            }
            )),
                "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                    spy: function (t) {
                        return console.warn("[mobx.spy] Is a no-op in production builds"),
                            function () { }
                    },
                    extras: {
                        getDebugName: os
                    },
                    $mobx: H
                })
        }
        ,
        26540: (t, e, i) => {
            i.d(e, {
                D4: () => a,
                UE: () => r,
                Yw: () => o,
                sp: () => n
            });
            const s = 1.70158;
            function n(t, e = 1e3) {
                const i = t % e / e;
                return Math.sin(i * Math.PI)
            }
            function o(t, e = s) {
                return t >= 1 ? t : t * t * ((e + 1) * t - e)
            }
            function r(t, e = s) {
                if (t >= 1)
                    return t;
                const i = t - 1;
                return i * i * ((e + 1) * i + e) + 1
            }
            function a(t, e) {
                return e * Math.cos(t) - e
            }
        }
        ,
        621898: (t, e, i) => {
            i.d(e, {
                $$: () => r,
                FS: () => n,
                LE: () => c,
                PH: () => o,
                c9: () => a,
                rh: () => l
            });
            var s = i(869676);
            const n = t => `rgba(230, 200, 167, ${t})`
                , o = t => [`rgba(108, 5, 8, ${t})`, `rgba(80, 1, 3, ${t})`]
                , r = [{
                    offset: 0,
                    color: "rgba(177, 108, 33, 1)"
                }, {
                    offset: .29,
                    color: "rgba(207, 141, 54, 1)"
                }, {
                    offset: .58,
                    color: "rgba(251, 218, 181, 1)"
                }, {
                    offset: .8,
                    color: "rgba(244, 188, 100, 1)"
                }, {
                    offset: 1,
                    color: "rgba(177, 108, 33, 1)"
                }]
                , a = r[0].color;
            function c(t) {
                return `500 ${t}px ${s.LZ}`
            }
            const l = .7
        }
        ,
        30830: (t, e, i) => {
            i.d(e, {
                A: () => B
            });
            var s = i(26540)
                , n = i(947639)
                , o = i(234894)
                , r = i(22345);
            class a {
                static create(t, e, i, s, n, o, r, a, c, l) {
                    return this.general2DProjection(0, 0, i, s, t, 0, n, o, 0, e, r, a, t, e, c, l)
                }
                static createScaled(t, e, i, s) {
                    return this.create(t, e, s[0] * i, s[1] * i, s[2] * i, s[3] * i, s[4] * i, s[5] * i, s[6] * i, s[7] * i)
                }
                static bounds(t, e, i) {
                    const s = a.project(t, 0, 0)
                        , n = a.project(t, e, 0)
                        , o = a.project(t, 0, i)
                        , r = a.project(t, e, i)
                        , c = Math.min(s[0], n[0], o[0], r[0])
                        , l = Math.min(s[1], n[1], o[1], r[1]);
                    return {
                        x: c,
                        y: l,
                        width: Math.max(s[0], n[0], o[0], r[0]) - c,
                        height: Math.max(s[1], n[1], o[1], r[1]) - l
                    }
                }
                static circleBounds(t, e, i = e, s = e) {
                    let n = 1 / 0
                        , o = -1 / 0
                        , r = 1 / 0
                        , a = -1 / 0;
                    const c = Math.PI / 64;
                    for (let l = 0; l < 2 * Math.PI; l += c) {
                        const [c, h] = this.project(t, i + e * Math.cos(l), s + e * Math.sin(l));
                        n = Math.min(c, n),
                            o = Math.max(c, o),
                            r = Math.min(h, r),
                            a = Math.max(h, a)
                    }
                    return {
                        x: n,
                        y: r,
                        width: o - n,
                        height: a - r
                    }
                }
                static project(t, e, i) {
                    const s = this.multiplyVector(t, [e, i, 1]);
                    return [s[0] / s[2], s[1] / s[2]]
                }
                static resize(t, e) {
                    const i = Math.min(t[0], t[2], t[4], t[6])
                        , s = Math.min(t[1], t[3], t[5], t[7])
                        , n = Math.max(t[1], t[3], t[5], t[7])
                        , o = null === e ? 1 : e / (n - s);
                    if (1 === o && 0 === i && 0 === s)
                        return t;
                    const r = t.slice();
                    for (let t = 0; t < 8; t += 2)
                        r[t] = Math.floor((r[t] - i) * o),
                            r[t + 1] = Math.floor((r[t + 1] - s) * o);
                    return r
                }
                static adjugate(t) {
                    return [t[4] * t[8] - t[5] * t[7], t[2] * t[7] - t[1] * t[8], t[1] * t[5] - t[2] * t[4], t[5] * t[6] - t[3] * t[8], t[0] * t[8] - t[2] * t[6], t[2] * t[3] - t[0] * t[5], t[3] * t[7] - t[4] * t[6], t[1] * t[6] - t[0] * t[7], t[0] * t[4] - t[1] * t[3]]
                }
                static multiplyMatrix(t, e) {
                    const i = new Array(9);
                    for (let s = 0; 3 !== s; ++s)
                        for (let n = 0; 3 !== n; ++n) {
                            let o = 0;
                            for (let i = 0; 3 !== i; ++i)
                                o += t[3 * s + i] * e[3 * i + n];
                            i[3 * s + n] = o
                        }
                    return i
                }
                static multiplyVector(t, e) {
                    return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2], t[3] * e[0] + t[4] * e[1] + t[5] * e[2], t[6] * e[0] + t[7] * e[1] + t[8] * e[2]]
                }
                static basisToPoints(t, e, i, s, n, o, r, a) {
                    const c = [t, i, n, e, s, o, 1, 1, 1]
                        , l = this.multiplyVector(this.adjugate(c), [r, a, 1]);
                    return this.multiplyMatrix(c, [l[0], 0, 0, 0, l[1], 0, 0, 0, l[2]])
                }
                static general2DProjection(t, e, i, s, n, o, r, a, c, l, h, u, d, p, m, b) {
                    const f = this.basisToPoints(t, e, n, o, c, l, d, p)
                        , g = this.basisToPoints(i, s, r, a, h, u, m, b);
                    return this.multiplyMatrix(g, this.adjugate(f))
                }
            }
            class c {
                constructor(t, e) {
                    this.context = t,
                        this.matrix = e,
                        this.offsetX = 0,
                        this.offsetY = 0,
                        this.offsetAngle = 0,
                        this.offsetAngleX = 0,
                        this.offsetAngleY = 0
                }
                beginPath() {
                    this.context.beginPath()
                }
                closePath() {
                    this.context.closePath()
                }
                setOffset(t, e) {
                    this.offsetX = t,
                        this.offsetY = e
                }
                setRotation(t, e, i) {
                    this.offsetAngle = t,
                        this.offsetAngleX = e,
                        this.offsetAngleY = i
                }
                moveTo(t, e, i) {
                    const s = this.project(t, e, i);
                    this.context.moveTo(s[0], s[1])
                }
                lineTo(t, e, i) {
                    const s = this.project(t, e, i);
                    this.context.lineTo(s[0], s[1])
                }
                moveToAngle(t, e, i, s) {
                    s += this.offsetAngle;
                    const n = t + i * Math.cos(s)
                        , o = e + i * Math.sin(s);
                    this.moveTo(n, o, !0)
                }
                lineToAngle(t, e, i, s) {
                    s += this.offsetAngle;
                    const n = t + i * Math.cos(s)
                        , o = e + i * Math.sin(s);
                    this.lineTo(n, o, !0)
                }
                arcTo(t, e, i, s, n, o = !1) {
                    const r = Math.PI / 90;
                    if (o) {
                        for (; n >= s;)
                            n -= 2 * Math.PI;
                        for (let o = s; o > n; o -= r)
                            this.lineToAngle(t, e, i, o)
                    } else {
                        for (; n <= s;)
                            n += 2 * Math.PI;
                        for (let o = s; o < n; o += r)
                            this.lineToAngle(t, e, i, o)
                    }
                    this.lineToAngle(t, e, i, n)
                }
                tracePolygon(t, e, i, s = 1) {
                    let n = 0;
                    for (const o of t) {
                        this.moveTo(e + o[0] * s, i + o[1] * s);
                        for (let t = 2; t < o.length; t += 2)
                            n = Math.max(n, o[t]),
                                this.lineTo(e + o[t] * s, i + o[t + 1] * s);
                        this.closePath()
                    }
                    return n * s
                }
                fill(t) {
                    this.context.fillStyle = t,
                        this.context.fill()
                }
                fillWithShadow(t, e) {
                    const i = this.context;
                    i.shadowBlur = 1,
                        i.shadowColor = t,
                        i.shadowOffsetX = 0,
                        i.shadowOffsetY = e,
                        i.fillStyle = t,
                        i.fill(),
                        i.shadowColor = "transparent",
                        i.shadowBlur = 0
                }
                projectOnAngle(t, e, i, s) {
                    s += this.offsetAngle;
                    const n = t + i * Math.cos(s)
                        , o = e + i * Math.sin(s);
                    return this.project(n, o, !0)
                }
                project(t, e, i) {
                    if (!i && this.offsetAngle) {
                        const i = e - this.offsetAngleY
                            , s = t - this.offsetAngleX
                            , n = this.offsetAngle + Math.atan2(i, s)
                            , o = Math.sqrt(i * i + s * s);
                        t = this.offsetAngleX + o * Math.cos(n),
                            e = this.offsetAngleY + o * Math.sin(n)
                    }
                    const s = a.project(this.matrix, t, e);
                    return s[0] += this.offsetX,
                        s[1] += this.offsetY,
                        s
                }
            }
            var l, h = i(272270);
            (function (t) {
                const e = "Inter, Arial, sans-serif"
                    , i = {
                        0: [[100, -149, 85, -146, 72, -141, 56, -133, 43, -122, 32, -111, 22, -96, 13, -78, 8, -62, 3, -35, 0, 0, 1, 26, 3, 38, 8, 64, 13, 80, 22, 97, 29, 108, 44, 125, 56, 135, 67, 142, 81, 147, 101, 152, 135, 152, 155, 148, 174, 139, 184, 133, 194, 125, 206, 111, 214, 99, 222, 84, 229, 64, 233, 50, 235, 30, 237, 8, 237, -8, 235, -30, 232, -50, 229, -64, 222, -82, 214, -98, 206, -109, 196, -121, 181, -133, 169, -140, 153, -146, 137, -149, 119, -150], [125, -98, 141, -91, 154, -79, 161, -68, 167, -52, 171, -26, 173, 6, 171, 28, 167, 54, 161, 70, 152, 83, 144, 91, 129, 98, 104, 97, 86, 85, 80, 76, 72, 58, 67, 38, 65, 26, 65, -24, 67, -36, 72, -56, 80, -74, 92, -88, 108, -97]],
                        1: [[73, -145, 1, -99, 1, -45, 68, -84, 69, 146, 130, 146, 131, -143]],
                        2: [[83, -146, 56, -138, 34, -125, 22, -114, 14, -103, 8, -91, 4, -79, 1, -67, 1, -53, 60, -52, 64, -71, 76, -87, 91, -95, 103, -97, 122, -94, 134, -86, 142, -77, 147, -62, 147, -45, 142, -34, 136, -24, 128, -14, 108, 6, 4, 104, 4, 149, 212, 148, 212, 98, 92, 96, 160, 30, 176, 12, 186, 0, 194, -12, 201, -23, 207, -39, 209, -54, 208, -77, 202, -94, 191, -112, 173, -128, 159, -137, 143, -143, 131, -145]],
                        3: [[95, -149, 75, -145, 59, -139, 47, -132, 36, -124, 28, -116, 20, -106, 13, -95, 8, -79, 8, -63, 67, -65, 83, -90, 94, -96, 113, -99, 130, -96, 142, -88, 150, -75, 151, -54, 140, -36, 125, -28, 105, -25, 80, -25, 80, 21, 107, 21, 123, 23, 136, 28, 146, 34, 154, 43, 159, 59, 156, 76, 146, 88, 131, 96, 113, 99, 93, 96, 78, 88, 70, 79, 64, 64, 2, 64, 1, 75, 8, 96, 16, 110, 32, 126, 43, 134, 55, 140, 73, 147, 86, 149, 135, 150, 159, 145, 171, 140, 182, 134, 194, 126, 210, 110, 219, 96, 225, 75, 224, 53, 219, 34, 204, 15, 187, 4, 175, -1, 160, -4, 171, -7, 188, -16, 201, -28, 212, -47, 214, -67, 213, -83, 208, -97, 202, -108, 194, -118, 180, -130, 167, -138, 143, -147, 131, -149]],
                        4: [[122, -144, 1, 47, 2, 94, 140, 97, 142, 146, 201, 146, 202, 97, 237, 95, 237, 46, 202, 44, 201, -144, 125, -145], [141, -74, 141, 44, 66, 44, 140, -74]],
                        5: [[21, -142, 19, -123, 17, -106, 15, -84, 13, -62, 11, -40, 8, 6, 37, 13, 56, 16, 81, 4, 93, -1, 107, -2, 121, 0, 136, 9, 148, 22, 154, 35, 154, 62, 145, 80, 132, 92, 119, 98, 99, 99, 86, 95, 73, 85, 64, 70, 2, 62, 1, 73, 7, 94, 16, 108, 24, 118, 39, 130, 58, 140, 77, 147, 93, 149, 128, 148, 151, 142, 164, 136, 174, 130, 186, 120, 194, 112, 202, 101, 208, 89, 214, 73, 217, 49, 215, 25, 209, 6, 198, -13, 190, -22, 176, -34, 161, -42, 149, -47, 137, -49, 106, -48, 89, -42, 72, -31, 68, -43, 70, -62, 71, -77, 74, -95, 199, -97, 200, -147, 23, -147]],
                        6: [[107, -149, 89, -146, 70, -138, 56, -129, 42, -118, 34, -108, 26, -96, 20, -86, 13, -71, 9, -59, 5, -37, 2, -11, 1, 27, 3, 40, 6, 57, 11, 77, 16, 88, 21, 99, 28, 109, 38, 120, 52, 132, 66, 140, 83, 147, 103, 151, 140, 150, 162, 144, 176, 138, 188, 130, 198, 122, 206, 114, 214, 102, 221, 89, 226, 72, 228, 49, 227, 31, 222, 13, 216, 0, 205, -16, 189, -30, 175, -38, 159, -44, 137, -46, 121, -45, 105, -40, 92, -34, 80, -26, 67, -11, 65, -31, 67, -43, 72, -57, 77, -69, 86, -80, 96, -88, 107, -93, 124, -95, 138, -92, 150, -84, 160, -70, 224, -63, 223, -77, 214, -98, 206, -110, 186, -129, 167, -140, 149, -147, 137, -149], [127, 1, 138, 4, 152, 14, 160, 26, 165, 37, 167, 51, 163, 70, 152, 86, 143, 94, 129, 100, 111, 101, 98, 97, 84, 86, 73, 70, 69, 49, 73, 32, 84, 16, 93, 8, 105, 2]],
                        7: [[2, -144, 2, -94, 140, -92, 22, 146, 87, 146, 207, -93, 206, -145, 3, -145]],
                        8: [[97, -149, 77, -145, 56, -136, 35, -121, 22, -105, 14, -88, 12, -71, 13, -57, 17, -44, 26, -29, 34, -20, 46, -12, 58, -6, 49, 0, 34, 8, 20, 20, 10, 34, 4, 47, 1, 64, 3, 85, 7, 97, 16, 111, 24, 120, 34, 128, 44, 134, 56, 140, 67, 145, 83, 149, 99, 151, 131, 151, 147, 149, 163, 145, 175, 140, 187, 134, 196, 128, 206, 120, 218, 105, 227, 82, 229, 59, 222, 38, 210, 20, 193, 6, 172, -4, 180, -10, 194, -19, 208, -35, 216, -51, 218, -71, 217, -85, 212, -98, 202, -114, 190, -126, 178, -134, 165, -141, 145, -147, 133, -149], [123, -101, 136, -96, 147, -87, 156, -69, 155, -53, 147, -40, 132, -29, 114, -26, 100, -28, 83, -40, 75, -59, 77, -78, 90, -93, 107, -101], [119, 21, 134, 24, 150, 34, 158, 45, 163, 62, 160, 77, 153, 88, 141, 99, 129, 103, 115, 104, 101, 103, 89, 98, 80, 92, 71, 80, 68, 58, 77, 38, 89, 28, 104, 22]],
                        9: [[87, -148, 65, -142, 52, -136, 42, -130, 30, -120, 22, -112, 14, -100, 8, -88, 2, -70, 0, -47, 1, -31, 6, -13, 12, 1, 18, 10, 26, 20, 40, 32, 55, 40, 74, 46, 93, 47, 115, 44, 134, 36, 146, 28, 156, 18, 164, 8, 162, 40, 156, 59, 151, 71, 142, 82, 132, 90, 121, 95, 107, 97, 88, 93, 74, 81, 67, 68, 3, 65, 10, 90, 18, 106, 26, 118, 42, 131, 61, 143, 84, 149, 123, 151, 139, 147, 158, 140, 172, 131, 186, 120, 194, 110, 202, 98, 209, 87, 215, 73, 223, 40, 227, 11, 226, -31, 224, -47, 214, -81, 206, -98, 196, -112, 180, -127, 162, -138, 137, -147, 121, -149], [117, -99, 131, -94, 144, -84, 152, -74, 157, -63, 159, -47, 155, -30, 144, -14, 133, -6, 118, 0, 101, 0, 86, -6, 76, -14, 68, -25, 63, -37, 62, -51, 63, -63, 68, -74, 76, -84, 85, -92, 98, -98]],
                        M: [[2, -144, 2, 147, 62, 146, 63, -40, 140, 145, 180, 145, 256, -40, 258, 146, 318, 147, 318, -145, 242, -144, 161, 48, 79, -144, 3, -145]],
                        k: [[1, -144, 1, 146, 62, 147, 63, 78, 78, 61, 136, 146, 209, 146, 126, 23, 204, -71, 134, -72, 64, 9, 62, -145, 3, -145]],
                        "?": [[85, 82, 74, 86, 58, 106, 58, 128, 66, 140, 77, 148, 101, 150, 116, 140, 124, 127, 122, 100, 105, 84], [83, -149, 61, -145, 50, -140, 34, -131, 17, -114, 8, -99, 3, -85, 2, -65, 60, -64, 65, -80, 76, -92, 87, -98, 107, -98, 120, -90, 128, -80, 130, -65, 122, -46, 112, -36, 94, -22, 80, -10, 72, 2, 64, 24, 63, 59, 117, 59, 119, 39, 124, 27, 135, 13, 164, -9, 179, -24, 188, -38, 193, -51, 195, -69, 192, -89, 189, -101, 182, -112, 174, -122, 159, -134, 147, -140, 132, -145, 115, -149]],
                        "+": [[77, -70, 76, 3, 3, 4, 2, 55, 76, 57, 78, 130, 128, 131, 130, 57, 203, 56, 204, 5, 130, 3, 128, -71, 79, -71]],
                        ".": [[31, 79, 20, 84, 6, 98, 1, 113, 6, 131, 16, 142, 27, 148, 48, 147, 64, 135, 71, 119, 68, 100, 57, 86, 46, 80]],
                        ",": [[19, 71, 17, 95, 15, 115, 8, 151, 1, 181, 41, 181, 52, 153, 61, 127, 66, 101, 68, 89, 69, 71]]
                    }
                    , s = {};
                for (const t of Object.keys(i)) {
                    let e = 0;
                    for (const s of i[t])
                        for (let t = 0; t < s.length; t += 2)
                            e = Math.max(e, s[t]);
                    s[t] = e / 2.5
                }
                t.drawProjected = function (t, e, n, o, r, a, c) {
                    let l = 16 * (e.length - 1);
                    for (let t = 0; t < e.length; t++) {
                        const i = e.charAt(t);
                        l += s[i] || s["?"]
                    }
                    "1" === e && (l = s["?"]);
                    const h = n / l
                        , u = o / 160
                        , d = Math.min(1, h, u);
                    l *= d;
                    let p = r - l / 2;
                    const m = a;
                    t.beginPath();
                    for (let n = 0; n < e.length; n++) {
                        const o = e.charAt(n)
                            , r = i[o] || i["?"];
                        t.tracePolygon(r, p, m, d / 2.5),
                            p += (16 + s[o]) * d
                    }
                    t.fill(c)
                }
                    ,
                    t.drawSystem = function (t, i, s, n, o, r, a) {
                        t.textAlign = "center",
                            t.textBaseline = "middle",
                            t.font = `600 160px ${e}`;
                        const c = s / t.measureText(i).width
                            , l = n / 160
                            , h = Math.min(1, c, l);
                        t.font = `600 ${Math.max(8, Math.round(160 * h))}px ${e}`,
                            t.fillStyle = a,
                            t.fillText(i, Math.round(o), Math.ceil(r))
                    }
                    ;
                let n = null
                    , o = Date.now();
                t.resetIsFontLoaded = function () {
                    n = null,
                        o = Date.now()
                }
                    ;
                const r = "Inter";
                t.isFontLoaded = function () {
                    if (n)
                        return !0;
                    if (null !== n && Date.now() - o > 5e3) {
                        n = !0;
                        const t = "isFontLoaded() was not able to detect Inter font";
                        console.error(t)
                    } else
                        null === n && (n = h.Qo(r, "600"),
                            n || h.mx(r, "600").then((() => {
                                n = !0
                            }
                            )));
                    return n
                }
            }
            )(l || (l = {}));
            var u = i(103356);
            const d = 50
                , p = 100
                , m = [{
                    canvasHeight: 200,
                    sizeCoef: 1.2,
                    radiusAcoef: .99,
                    radiusBcoef: .99,
                    radiusCcoef: .99,
                    radiusDcoef: .99,
                    textSize: .9,
                    textPlain: !0
                }, {
                    canvasHeight: 320,
                    sizeCoef: 1.1,
                    radiusAcoef: .98,
                    radiusBcoef: .85,
                    radiusCcoef: .85,
                    radiusDcoef: .85,
                    textSize: .78,
                    textPlain: !0
                }, {
                    canvasHeight: 600,
                    sizeCoef: 1.1,
                    radiusAcoef: .98,
                    radiusBcoef: .85,
                    radiusCcoef: .85,
                    radiusDcoef: .85,
                    textSize: .6,
                    textPlain: !0
                }, {
                    canvasHeight: 760,
                    sizeCoef: 1,
                    radiusAcoef: .98,
                    radiusBcoef: .75,
                    radiusCcoef: .69,
                    radiusDcoef: .67,
                    textSize: .6,
                    textPlain: !0
                }, {
                    canvasHeight: 760,
                    sizeCoef: 1,
                    radiusAcoef: .98,
                    radiusBcoef: .75,
                    radiusCcoef: .69,
                    radiusDcoef: .67,
                    textSize: .47,
                    textPlain: !1
                }]
                , b = "#EBEBEB"
                , f = Math.PI / 64
                , g = f + Math.PI / 16
                , v = Math.PI / 8
                , y = Math.PI / 4 - v / 2
                , S = Math.PI / 4 + v / 2
                , w = r.Mn(b, .8);
            let x = m[0];
            function C(t) {
                const e = u.x_();
                if (e > 1 && (t = t / e * (e + 1) / 2),
                    x.canvasHeight === t)
                    return x;
                const i = m.length;
                if (t <= m[0].canvasHeight)
                    return x = Object.assign(Object.assign({}, m[0]), {
                        canvasHeight: t
                    }),
                        x;
                if (t >= m[i - 1].canvasHeight)
                    return x = Object.assign(Object.assign({}, m[i - 1]), {
                        canvasHeight: t
                    }),
                        x;
                for (let e = 1; e < i; e++) {
                    const i = m[e];
                    if (i.canvasHeight >= t) {
                        const s = m[e - 1]
                            , n = (t - s.canvasHeight) / (i.canvasHeight - s.canvasHeight);
                        return x = {
                            canvasHeight: t,
                            sizeCoef: s.sizeCoef + n * (i.sizeCoef - s.sizeCoef),
                            radiusBcoef: s.radiusBcoef + n * (i.radiusBcoef - s.radiusBcoef),
                            radiusCcoef: s.radiusCcoef + n * (i.radiusCcoef - s.radiusCcoef),
                            radiusDcoef: s.radiusDcoef + n * (i.radiusDcoef - s.radiusDcoef),
                            radiusAcoef: s.radiusAcoef + n * (i.radiusAcoef - s.radiusAcoef),
                            textSize: s.textSize + n * (i.textSize - s.textSize),
                            textPlain: s.textPlain
                        },
                            x
                    }
                }
                return x
            }
            class A {
                static drawChip(t, e, i, s, n, o, r, a) {
                    const c = s * a.radiusAcoef
                        , l = s * a.radiusBcoef
                        , h = s * a.radiusCcoef
                        , u = s * a.radiusDcoef;
                    t.beginPath(),
                        t.arcTo(e, i, c, 0, 2 * Math.PI),
                        t.fill(n),
                        this.drawChipOuterSegments(t, e, i, s, l, n, o),
                        this.fillLine(t, e, i, s, c, o),
                        t.beginPath(),
                        t.arcTo(e, i, u, 0, 2 * Math.PI),
                        t.fill(r),
                        h !== u && this.fillLine(t, e, i, h, u, o)
                }
                static drawChipWithDepth(t, e, i, s, n, o, a, c) {
                    o = Math.min(o, 100);
                    const l = r.Mn(n);
                    c && (t.setOffset(0, o),
                        this.drawChipShadow(t, e, i, s));
                    for (let n = o; n > 0; n--)
                        t.setOffset(0, n),
                            this.drawChipOuterSegments(t, e, i, s, 0, l, w);
                    t.setOffset(0, 0),
                        this.drawChip(t, e, i, s, n, b, "rgba(0,0,0,0.2)", a)
                }
                static drawChipShadow(t, e, i, s) {
                    const n = a.circleBounds(t.matrix, s, e, i);
                    t.beginPath(),
                        t.arcTo(e, i, s, 0, 2 * Math.PI),
                        t.fillWithShadow("rgba(0,0,0,0.7)", n.height / 30)
                }
                static drawChipOuterSegments(t, e, i, s, n, o, r) {
                    for (let a = 0; a < 2 * Math.PI; a += Math.PI / 2)
                        0 === n && (this.fillSector(t, e, i, s, n, a - f, a + f, o),
                            this.fillSector(t, e, i, s, n, a + g, a + y, o),
                            this.fillSector(t, e, i, s, n, a + S, a + Math.PI / 2 - g, o)),
                            this.fillSector(t, e, i, s, n, a - g, a - f, r),
                            this.fillSector(t, e, i, s, n, a + f, a + g, r),
                            this.fillSector(t, e, i, s, n, a + y, a + S, r)
                }
                static fillLine(t, e, i, s, n, o = b) {
                    t.beginPath(),
                        t.moveTo(e + s, i),
                        t.arcTo(e, i, s, 0, 2 * Math.PI),
                        t.closePath(),
                        t.moveTo(e + n, i),
                        t.arcTo(e, i, n, 2 * Math.PI, 0, !0),
                        t.closePath(),
                        t.fill(o)
                }
                static fillSector(t, e, i, s, n, o, r, a) {
                    t.beginPath(),
                        t.moveToAngle(e, i, n, o),
                        t.lineToAngle(e, i, s, o),
                        t.arcTo(e, i, s, o, r),
                        t.lineToAngle(e, i, n, r),
                        0 !== n && t.arcTo(e, i, n, r, o, !0),
                        t.fill(a)
                }
                constructor(t, e, i, s = 1) {
                    var n;
                    this.scaleFactor = s,
                        this.opacity = 1,
                        this.animateOpacity = null,
                        this.shadow = !0,
                        this.canSkipFrame = !1,
                        this.x = t.x,
                        this.y = t.y,
                        this.size = t.size,
                        this.depth = t.depth,
                        this.name = t.name,
                        this.rotation = null !== (n = t.rotation) && void 0 !== n ? n : 0,
                        this.color = e,
                        this.value = i,
                        this.cacheKey = "",
                        this.projection = a.resize(t.projection, p),
                        this.matrixId = this.projection.join(",")
                }
                getConfig() {
                    return {
                        name: this.name,
                        projection: this.projection,
                        x: this.x,
                        y: this.y,
                        size: this.size,
                        depth: this.depth,
                        rotation: this.rotation
                    }
                }
                draw(t, e, i) {
                    let s = this.opacity;
                    if (null !== this.animateOpacity && !n.xb()) {
                        const e = t.time % 1e3 / 1e3;
                        s += (this.animateOpacity - s) * n.mZ(2 * (e < .5 ? e : 1 - e))
                    }
                    if (0 === s)
                        return null !== this.animateOpacity;
                    if (C(t.height * this.scaleFactor).textPlain && !l.isFontLoaded())
                        return !0;
                    this.ensureCacheKey(t.height);
                    const o = t.cache.get(this.cacheKey, this.canSkipFrame, (() => this.createCacheImage(t.height, this.color, this.value)));
                    if (null === o)
                        return !0;
                    if (o.width < 1)
                        return !1;
                    const r = null == e ? 0 | Math.round(this.x * t.width - o.width / 2) : e + Number(o.getAttribute("data-x-offset"))
                        , a = null == i ? 0 | Math.round(this.y * t.height - o.height / 2) : i + Number(o.getAttribute("data-y-offset"));
                    return this.drawImage(t.context, o, r, a, s),
                        null !== this.animateOpacity
                }
                warmUpCache(t, e, i) {
                    t.cache.registerHeater(this.createCacheKey(t.height, e, i), (() => this.createCacheImage(t.height, e, i)))
                }
                createTransformationMatrix(t) {
                    const e = this.getTransformationScale(t)
                        , i = C(t * this.scaleFactor);
                    return a.createScaled(p, p, e * i.sizeCoef, this.projection)
                }
                getCacheImageBounds(t, e = 50) {
                    const i = a.circleBounds(t, e)
                        , s = Math.max(i.height, i.width);
                    if (s > 20 * e)
                        return null;
                    const n = s * this.depth | 0;
                    return {
                        x: 0 | i.x,
                        y: 0 | i.y,
                        padding: 2,
                        width: Math.ceil(i.width + 2 + 2),
                        height: Math.ceil(1.03 * i.height + n + 2 + 2),
                        chipWidth: i.width,
                        chipHeight: i.height,
                        depth: n
                    }
                }
                createCacheImage(t, e, i) {
                    const s = this.createTransformationMatrix(t)
                        , n = document.createElement("canvas")
                        , r = this.getCacheImageBounds(s);
                    if (null === r)
                        return n.width = 1,
                            n.height = 1,
                            n;
                    n.width = r.width,
                        n.height = r.height,
                        n.setAttribute("data-x-offset", (r.x - r.padding).toString()),
                        n.setAttribute("data-y-offset", (r.y - r.padding).toString());
                    const h = n.getContext("2d");
                    h.setTransform(1, 0, 0, 1, r.padding - r.x, r.padding - r.y);
                    const u = new c(h, s);
                    u.setRotation(this.rotation * Math.PI * 2, d, d);
                    const p = C(t * this.scaleFactor);
                    A.drawChipWithDepth(u, d, d, d, e, r.depth, p, this.shadow);
                    const m = o.r(i);
                    if (p.textPlain) {
                        const t = a.project(s, d, d);
                        l.drawSystem(h, m, r.chipWidth * p.textSize, r.chipHeight * p.textSize, t[0], t[1], "#ffffff")
                    } else {
                        const t = d * p.textSize * 2;
                        l.drawProjected(u, m, t, t, d, d, "#ffffff")
                    }
                    return n
                }
                drawImage(t, e, i, s, n) {
                    let o;
                    1 !== n && (o = t.globalAlpha,
                        t.globalAlpha = o * n),
                        t.drawImage(e, 0, 0, e.width, e.height, i, s, e.width, e.height),
                        void 0 !== o && (t.globalAlpha = o)
                }
                getTransformationScale(t) {
                    return Math.floor(t * this.size) / p
                }
                createCacheKey(t, e, i) {
                    const s = this.getTransformationScale(t);
                    return this.rotation + "/" + this.depth + "/" + this.size + "/" + s + "/" + e + "/" + i + "/" + this.matrixId + "/" + t
                }
                ensureCacheKey(t) {
                    const e = this.createCacheKey(t, this.color, this.value);
                    this.cacheKey !== e && (this.cacheKey = e)
                }
            }
            class B extends A {
                constructor() {
                    super(...arguments),
                        this.highlight = !1
                }
                toggleWinningChip(t) {
                    this.highlight = t
                }
                draw(t, e, i) {
                    if (this.highlight && !n.xb()) {
                        const n = t.cache.get(`${this.cacheKey}-highlight`, this.canSkipFrame, (() => this.createCacheHighlight(t.height)));
                        if (!n)
                            return !0;
                        const o = null == e ? 0 | Math.round(this.x * t.width - n.width / 2) : e + Number(n.getAttribute("data-x-offset"))
                            , r = null == i ? 0 | Math.round(this.y * t.height - n.height / 2) : i + Number(n.getAttribute("data-y-offset"))
                            , a = s.sp(t.time);
                        this.drawImage(t.context, n, o, r, a)
                    }
                    return super.draw(t, e, i) || this.highlight
                }
                createCacheHighlight(t) {
                    const e = this.createTransformationMatrix(t)
                        , i = document.createElement("canvas")
                        , s = 56.00000000000001
                        , n = this.getCacheImageBounds(e, s);
                    if (!n)
                        return i.width = 1,
                            i.height = 1,
                            i;
                    i.width = n.width,
                        i.height = n.height,
                        i.setAttribute("data-x-offset", (n.x - n.padding).toString()),
                        i.setAttribute("data-y-offset", (n.y - n.padding).toString());
                    const o = i.getContext("2d");
                    o.setTransform(1, 0, 0, 1, n.padding - n.x, n.padding - n.y);
                    const r = new c(o, e);
                    return r.setRotation(this.rotation * Math.PI * 2, s, s),
                        r.beginPath(),
                        r.arcTo(s, s, s, 0, 2 * Math.PI),
                        r.fillWithShadow("rgba(255, 250, 0, 0.6)", n.height / 30),
                        i
                }
            }
        }
        ,
        653106: (t, e, i) => {
            i.d(e, {
                W: () => h,
                n: () => c
            });
            var s = i(116614)
                , n = i(790259)
                , o = i(962525)
                , r = i(38281)
                , a = i(30830);
            const c = {
                depth: 0,
                projection: [0, 0, 1, 0, 0, 1, 1, 1]
            };
            function l(t, e, i) {
                const o = n.Z(t, i)
                    , r = n.Z(e, i);
                return s.Z(o, r)
            }
            class h {
                constructor() {
                    this.chips = {},
                        this.prevProps = void 0,
                        this.flyingUnsubscribers = {}
                }
                updateChips(t) {
                    var e, i, n;
                    const { bet: h, payoutBet: u, chipRects: d, canvas: p, chipScaleFactor: m, bettingGridConfig: b, chipColors: f, flyingChipsProcessor: g } = t
                        , v = !this.prevProps || !l(this.prevProps, t, ["chipScaleFactor", "dragged"]) || !l(this.prevProps.bettingGridConfig, b, ["chipSize"])
                        , y = !this.prevProps || s.Z(Object.keys(null === (e = this.prevProps) || void 0 === e ? void 0 : e.bet), Object.keys(h)) || v;
                    for (const t of o.tz) {
                        const e = u[t] || h[t] || 0
                            , s = !b.isAdvanced && !o.jU.includes(t)
                            , l = d[t];
                        0 !== e && !s && l ? (this.chips[t] ? (this.chips[t].value = e,
                            this.chips[t].color = r.ai(e, f),
                            this.chips[t].size = l.height) : (this.chips[t] = new a.A(Object.assign(Object.assign({}, c), {
                                size: l.height,
                                name: t,
                                x: 0,
                                y: 0
                            }), r.ai(e, f), e, m),
                                y ? p.addElement(this.chips[t]) : this.flyingUnsubscribers[t] = g.subscribeOnFinishAnimation((({ bets: e }) => {
                                    var i, s;
                                    e[t] && (p.addElement(this.chips[t]),
                                        p.scheduleDraw(),
                                        null === (s = (i = this.flyingUnsubscribers)[t]) || void 0 === s || s.call(i))
                                }
                                ))),
                            this.chips[t].x = l.x,
                            this.chips[t].y = l.y,
                            this.chips[t].toggleWinningChip(!!u[t])) : this.chips[t] && (p.removeElement(this.chips[t]),
                                delete this.chips[t],
                                null === (n = (i = this.flyingUnsubscribers)[t]) || void 0 === n || n.call(i))
                    }
                    p.scheduleDraw(),
                        this.prevProps = t
                }
                dispose(t) {
                    Object.values(this.chips).forEach((e => t.removeElement(e))),
                        Object.values(this.flyingUnsubscribers).forEach((t => t()))
                }
            }
        }
        ,
        505455: (t, e, i) => {
            function s(t, e) {
                return Math.max(t.width, t.height) / e
            }
            i.d(e, {
                G: () => s
            })
        }
        ,
        289307: (t, e, i) => {
            i.d(e, {
                $_: () => s,
                EU: () => c,
                SJ: () => o,
                V1: () => a,
                jx: () => r,
                pD: () => n
            });
            const s = 2
                , n = "rgba(74, 3, 2, 1)"
                , o = "rgb(39, 60, 17)"
                , r = "rgb(101, 70, 17)"
                , a = "rgb(38, 44, 67)"
                , c = "rgb(85, 15, 13)"
        }
        ,
        961471: (t, e, i) => {
            function s(t, e, i) {
                const { context: s, width: n, height: o } = i;
                if (t || e) {
                    s.globalCompositeOperation = "destination-out";
                    const i = s.createLinearGradient(0, 0, n, 0)
                        , r = "#fff"
                        , a = "transparent";
                    i.addColorStop(0, t ? r : a),
                        i.addColorStop(.1, a),
                        i.addColorStop(.9, a),
                        i.addColorStop(1, e ? r : a),
                        s.fillStyle = i,
                        s.fillRect(0, 0, n, o),
                        s.globalCompositeOperation = "source-over"
                }
            }
            i.d(e, {
                T: () => s
            })
        }
        ,
        964965: (t, e, i) => {
            i.d(e, {
                P: () => o
            });
            var s = i(289307)
                , n = i(29485);
            function o(t) {
                const { context: e, image: i, betCode: o, highlight: r, sizeValues: a } = t
                    , c = function (t, e, i) {
                        const { itemSize: n, x: o, y: r } = i
                            , a = e ? s.$_ : 1;
                        return t.save(),
                            t.lineWidth = a,
                            t.beginPath(),
                            t.arc(o, r, .5 * n, 0, 2 * Math.PI),
                            t.fill(),
                            t.stroke(),
                            t.closePath(),
                            t.restore(),
                        {
                            x: o,
                            y: r
                        }
                    }(e, r, a)
                    , l = i.getFrameData(o)
                    , h = l.width / l.height;
                let u = 0
                    , d = 0;
                d = .55 * a.itemSize,
                    u = d * h,
                    n.LN({
                        context: e,
                        spriteSheet: i,
                        frame: o,
                        size: {
                            x: u,
                            y: d
                        },
                        position: {
                            x: c.x - .5 * u,
                            y: c.y - .5 * d
                        }
                    })
            }
        }
        ,
        641430: (t, e, i) => {
            i.d(e, {
                DL: () => g,
                KL: () => a,
                Pt: () => v,
                Qq: () => d,
                W$: () => p,
                YP: () => h,
                cd: () => f,
                k8: () => c,
                kf: () => m,
                sU: () => r,
                uj: () => b,
                zr: () => u
            });
            var s = i(289307)
                , n = i(898831)
                , o = i(962525);
            function r(t) {
                return Math.floor((t.areaWidth - 2 * t.padding + t.itemsOffset) / (t.itemSize + t.itemsOffset))
            }
            function a(t) {
                const e = {
                    [n.$.One]: 0,
                    [n.$.Two]: 0,
                    [n.$.Three]: 0,
                    [n.$.Four]: 0,
                    [n.$.Odd]: 0,
                    [n.$.Even]: 0,
                    [n.$.Big]: 0,
                    [n.$.Small]: 0
                };
                for (const i of t)
                    i === o.vm.One && (e[n.$.One]++,
                        e[n.$.Odd]++,
                        e[n.$.Small]++),
                        i === o.vm.Two && (e[n.$.Two]++,
                            e[n.$.Even]++,
                            e[n.$.Small]++),
                        i === o.vm.Three && (e[n.$.Three]++,
                            e[n.$.Odd]++,
                            e[n.$.Big]++),
                        i === o.vm.Four && (e[n.$.Four]++,
                            e[n.$.Even]++,
                            e[n.$.Big]++);
                return e
            }
            function c(t, e, i) {
                return !(t + e < 0 || t > i)
            }
            function l(t, e, i) {
                return {
                    code: t,
                    col: e,
                    row: i
                }
            }
            const h = 6;
            function u(t, e) {
                const i = [];
                let s = 0
                    , n = 0
                    , o = null
                    , r = !1;
                for (let a = t.length - 1; a >= 0; a--) {
                    const c = t[a];
                    if (0 === i.length)
                        i.push(l(c, 0, 0));
                    else {
                        if (e(t[t.length - i.length], c)) {
                            const t = i.find((t => t.col === s && t.row === n + 1));
                            n === h - 1 || t ? (o || (o = s),
                                r = !0) : r = !1,
                                r ? s += 1 : n += 1
                        } else {
                            if (r = !1,
                                null !== o)
                                for (0 !== n && (s = o + 1),
                                    o = null; i.find((t => 0 === t.row && t.col === s));)
                                    s += 1;
                            else
                                s += 1;
                            n = 0
                        }
                        i.push(l(c, s, n))
                    }
                }
                return i
            }
            function d(t) {
                return t.reduce(((t, e) => Math.max(t, e.col)), 0)
            }
            function p(t, e) {
                return t === e
            }
            function m(t, e) {
                const i = [o.vm.One, o.vm.Two];
                return !(!i.includes(t) || !i.includes(e)) || !i.includes(t) && !i.includes(e)
            }
            function b(t, e) {
                const i = [o.vm.One, o.vm.Three];
                return !(!i.includes(t) || !i.includes(e)) || !i.includes(t) && !i.includes(e)
            }
            function f() {
                return s.pD
            }
            function g(t) {
                return [o.vm.One, o.vm.Two].includes(t) ? s.SJ : s.jx
            }
            function v(t) {
                return [o.vm.One, o.vm.Three].includes(t) ? s.V1 : s.EU
            }
        }
        ,
        917528: (t, e, i) => {
            function s(t, e, i) {
                const s = [...t];
                s.push([e, Date.now()]);
                const n = s.length - i;
                return n > 0 && s.splice(0, n),
                    s
            }
            i.d(e, {
                Y: () => a
            });
            var n = i(18985);
            const o = {
                startEvent: "touchstart",
                moveEvent: "touchmove",
                endEvent: "touchend"
            }
                , r = {
                    startEvent: "mousedown",
                    moveEvent: "mousemove",
                    endEvent: "mouseup"
                };
            class a {
                constructor(t) {
                    var e, i, n, a;
                    this.actualScrollX = 0,
                        this.lastScrollX = 0,
                        this.scrollStartX = 0,
                        this.uiTouchPoints = [],
                        this.subscribedToMoveListener = !1,
                        this.resetScrollOnClickOutside = !1,
                        this.startListener = t => {
                            this.subscribeToMoveEvents(),
                                this.lastScrollX = this.actualScrollX,
                                this.stopScrollAnimation(),
                                this.scrollStartX = this.getEvenX(t),
                                this.uiTouchPoints.length = 0,
                                this.uiTouchPoints = s(this.uiTouchPoints, this.scrollStartX, 100)
                        }
                        ,
                        this.moveListener = t => {
                            const e = this.getEvenX(t)
                                , i = (e - this.scrollStartX) * this.invertedScroll;
                            this.uiTouchPoints = s(this.uiTouchPoints, e, 100),
                                this.updateScroll(this.lastScrollX + i)
                        }
                        ,
                        this.interactionEndListener = () => {
                            var t;
                            if (this.unsubscribeFromMoveEvents(),
                                this.lastScrollX = this.actualScrollX,
                                this.uiTouchPoints.length < 1 || 0 === this.actualScrollX)
                                return;
                            const e = function (t, e) {
                                const i = function (t, e) {
                                    return t.find((t => t[1] >= e))
                                }(t, Date.now() - 200);
                                if (!i || t.length < 2)
                                    return 0;
                                const s = function (t) {
                                    return t[t.length - 1][1]
                                }(t) - i[1];
                                if (0 === s)
                                    return 0;
                                const n = i[0]
                                    , o = function (t) {
                                        return t[t.length - 1][0]
                                    }(t);
                                return (n - o) / s
                            }(this.uiTouchPoints);
                            this.uiTouchPoints.length = 0,
                                this.performAutoScrollAnimation(e * this.invertedScroll, .001),
                                null === (t = this.onScrollEnd) || void 0 === t || t.call(this)
                        }
                        ,
                        this.clickOutsideListener = t => {
                            t.target === this.container || this.container.contains(t.target) || 0 !== this.actualScrollX && (this.uiTouchPoints.length = 0,
                                this.lastScrollX = this.actualScrollX,
                                this.resetScrollOnClickOutside && this.performAutoScrollAnimation(-1, 0))
                        }
                        ,
                        this.onScrollLimitsChange = () => {
                            this.actualScrollX && this.updateScroll(this.actualScrollX)
                        }
                        ,
                        this.onScrollEnd = t.onScrollEnd,
                        this.container = t.container,
                        this.scrollable = t.scrollable,
                        null === (i = (e = this.scrollable).onScrollLimitsChangeCallback) || void 0 === i || i.call(e, this.onScrollLimitsChange),
                        this.scrollableAreaWidth = null !== (n = t.scrollableAreaWidth) && void 0 !== n ? n : 0,
                        this.invertedScroll = t.invertedScroll ? -1 : 1,
                        this.interactionEventsSet = t.useTouchEvents ? o : r,
                        this.resetScrollOnClickOutside = null !== (a = t.resetScrollOnClickOutside) && void 0 !== a && a,
                        this.addEventListeners()
                }
                reset() {
                    0 === this.actualScrollX || this.isScrolling() || this.performAutoScrollAnimation(-1, 0)
                }
                dispose() {
                    this.removeEventListeners(),
                        this.uiTouchPoints.length = 0,
                        this.stopScrollAnimation()
                }
                addEventListeners() {
                    this.container.style.touchAction = "manipulation",
                        this.container.addEventListener(this.interactionEventsSet.startEvent, this.startListener),
                        document.addEventListener(this.interactionEventsSet.startEvent, this.clickOutsideListener),
                        document.addEventListener(this.interactionEventsSet.endEvent, this.interactionEndListener)
                }
                removeEventListeners() {
                    this.container.removeEventListener(this.interactionEventsSet.startEvent, this.startListener),
                        document.removeEventListener(this.interactionEventsSet.startEvent, this.clickOutsideListener),
                        document.removeEventListener(this.interactionEventsSet.endEvent, this.interactionEndListener),
                        this.unsubscribeFromMoveEvents()
                }
                getEvenX(t) {
                    return "touches" in t ? t.touches[0].clientX : t.clientX
                }
                subscribeToMoveEvents() {
                    this.subscribedToMoveListener || (this.container.addEventListener(this.interactionEventsSet.moveEvent, this.moveListener),
                        this.subscribedToMoveListener = !0)
                }
                unsubscribeFromMoveEvents() {
                    this.subscribedToMoveListener && (this.container.removeEventListener(this.interactionEventsSet.moveEvent, this.moveListener),
                        this.subscribedToMoveListener = !1)
                }
                isScrolling() {
                    return this.uiTouchPoints.length > 0
                }
                updateScroll(t) {
                    const e = this.getScrollRightLimit()
                        , i = n.uZ(t, e, 0);
                    i !== this.actualScrollX && (this.actualScrollX = i,
                        this.scrollable.setScrollX(Math.round(this.scrollScale() * this.actualScrollX)))
                }
                scrollScale() {
                    return this.scrollableAreaWidth ? this.scrollable.visibleAreaWidth() / this.scrollableAreaWidth : 1
                }
                getScrollRightLimit() {
                    return (this.scrollable.visibleAreaWidth() - this.scrollable.contentWidth()) / this.scrollScale()
                }
                performAutoScrollAnimation(t, e) {
                    this.stopScrollAnimation();
                    const i = t >= 0 ? -1 : 1;
                    let s = Math.abs(t)
                        , n = Date.now();
                    const o = () => {
                        const t = Date.now()
                            , r = t - n;
                        n = t;
                        const a = i * s * r;
                        i < 0 && this.actualScrollX <= this.getScrollRightLimit() || (this.updateScroll(this.actualScrollX + a),
                            s -= r * e,
                            s > 0 && this.actualScrollX < 0 && (this.animationFrameRef = window.requestAnimationFrame(o)))
                    }
                        ;
                    this.animationFrameRef = window.requestAnimationFrame(o)
                }
                stopScrollAnimation() {
                    this.animationFrameRef && (window.cancelAnimationFrame(this.animationFrameRef),
                        this.animationFrameRef = void 0)
                }
            }
        }
        ,
        898831: (t, e, i) => {
            var s;
            i.d(e, {
                $: () => s
            }),
                function (t) {
                    t.One = "one",
                        t.Two = "two",
                        t.Three = "three",
                        t.Four = "four",
                        t.Odd = "odd",
                        t.Even = "even",
                        t.Big = "big",
                        t.Small = "small"
                }(s || (s = {}))
        }
        ,
        29485: (t, e, i) => {
            i.d(e, {
                LN: () => o,
                MC: () => a,
                yU: () => r
            });
            var s = i(621898)
                , n = i(962525);
            function o(t) {
                const e = t.spriteSheet.getFrameData(t.frame);
                e && t.context.drawImage(t.spriteSheet.getImage(), e.x, e.y, e.width, e.height, t.position.x, t.position.y, t.size.x, t.size.y)
            }
            function r(t) {
                const { context: e, fontSize: i, textColor: o, text: r, point: a, horizontalTextAlignment: c, verticalTextAlignment: l } = t;
                e.save(),
                    e.font = s.LE(i),
                    e.fillStyle = o;
                const h = .75 * i
                    , u = e.measureText(r).width;
                let d = a.x
                    , p = a.y;
                return c === n.Kx.Center && (d -= .5 * u),
                    c === n.Kx.Right && (d -= u),
                    l === n.Q4.Center && (p += .5 * h),
                    l === n.Q4.Top && (p += h),
                    e.fillText(r, d, p),
                    e.restore(),
                {
                    x: d,
                    y: p,
                    width: u,
                    height: h
                }
            }
            function a(t) {
                const { context: e, points: i, createPath: s = !0 } = t;
                s && e.beginPath();
                for (let t = 0; t < i.length; t++) {
                    const n = i[t];
                    if (0 !== t) {
                        if (e.lineTo(n.x, n.y),
                            t === i.length - 1 && s) {
                            const t = i[0];
                            e.lineTo(t.x, t.y)
                        }
                    } else
                        e.moveTo(n.x, n.y)
                }
                s && e.closePath()
            }
        }
        ,
        423777: (t, e, i) => {
            i.d(e, {
                vl: () => G,
                cr: () => F
            });
            var s = i(567557)
                , n = i(540712)
                , o = i(188464)
                , r = i(989526)
                , a = i(641430)
                , c = i(898831)
                , l = i(937402)
                , h = i(153360);
            const u = t => {
                const e = Array.from({
                    length: Number(t.betCode)
                })
                    , i = r.useRef(null)
                    , n = function (t) {
                        t = Math.floor(t);
                        const e = Math.floor(1.4 * t);
                        return {
                            width: `${e}px`,
                            height: `${t}px`,
                            borderRadius: `${e}px / ${t}px`
                        }
                    }(h.Iy(i));
                return s.jsx("div", {
                    className: "circles--287fc",
                    ref: i,
                    children: e.map(((t, e) => s.jsx("div", {
                        className: "circle--f7734",
                        style: n
                    }, e)))
                })
            }
                ;
            var d = i(962525);
            const p = {
                [c.$.One]: d.vm.One,
                [c.$.Two]: d.vm.Two,
                [c.$.Three]: d.vm.Three,
                [c.$.Four]: d.vm.Four
            }
                , m = t => {
                    const { ratio: e, backgroundColor: i, category: o, label: r } = t
                        , a = !!p[o] && e >= 10
                        , c = !a && e >= 10;
                    return s.jsx("div", {
                        "data-role": `ratio-bar-section-test-id-${o}`,
                        className: n.Z("section--81aa8"),
                        style: {
                            width: `${e > 0 ? Math.max(4, e) : 0}%`,
                            backgroundColor: i
                        },
                        children: s.jsxs("div", {
                            className: n.Z("sectionContent--3505f", {
                                "withCircles--698f2": a
                            }),
                            children: [c && s.jsxs("span", {
                                className: "label--aef9b",
                                children: [r, " "]
                            }), a && s.jsx("div", {
                                className: "beadCircles--45a33",
                                children: s.jsx(u, {
                                    betCode: p[o]
                                })
                            }), s.jsxs("span", {
                                className: "ratio--bb455",
                                children: [e, "%"]
                            })]
                        })
                    })
                }
                ;
            var b = i(945590)
                , f = i(2435)
                , g = i(271121);
            const v = {
                [c.$.Odd]: b.Tb.Odd,
                [c.$.Even]: b.Tb.Even,
                [c.$.Big]: b.Tb.Big,
                [c.$.Small]: b.Tb.Small
            };
            function y(t) {
                return t.totalItemsCount && t.itemsCount ? g.RW(t.itemsCount / t.totalItemsCount * 100, 0) : 0
            }
            const S = {
                [c.$.One]: "rgba(121,26,28, 0.9)",
                [c.$.Two]: "rgba(112, 5, 8, 0.9)",
                [c.$.Three]: "rgb(121, 26, 28, 0.9)",
                [c.$.Four]: "rgb(112, 5, 8, 0.9)",
                [c.$.Odd]: "rgb(38, 44, 67, 0.9)",
                [c.$.Even]: "rgb(85, 15, 13, 0.9)",
                [c.$.Big]: "rgb(101, 70, 17, 0.9)",
                [c.$.Small]: "rgb(39, 60, 17, 0.9)"
            }
                , w = t => {
                    const { itemsPerCategory: e, itemsCount: i, categories: n } = t;
                    if (0 === i)
                        return null;
                    const o = function (t) {
                        const { itemsPerCategory: e, itemsCount: i, categories: s } = t
                            , n = [];
                        for (const t of s) {
                            const s = y({
                                itemsCount: e[t],
                                totalItemsCount: i
                            })
                                , o = v[t];
                            n.push({
                                ratio: s,
                                category: t,
                                label: o ? f.Iu(o) : ""
                            })
                        }
                        return function (t) {
                            const e = t.reduce(((t, e) => t + e.ratio), 0)
                                , i = t.map((t => Object.assign({}, t)))
                                , s = 100 - e;
                            if (0 === s)
                                return i;
                            for (const t of i)
                                if (0 !== t.ratio)
                                    return t.ratio += s,
                                        i;
                            return i
                        }(n)
                    }({
                        itemsPerCategory: e,
                        itemsCount: i,
                        categories: n
                    }).map(((t, e) => !!t.ratio && s.jsx(m, {
                        ratio: t.ratio,
                        backgroundColor: S[t.category],
                        category: t.category,
                        label: t.label
                    }, e)));
                    return s.jsx("div", {
                        className: "ratioBar--1e698",
                        "data-role": "ratio-bar",
                        children: o
                    })
                }
                ;
            var x = i(961471)
                , C = i(964965);
            class A {
                constructor(t, e) {
                    this.items = t,
                        this.colorsFn = e,
                        this.canvas = null,
                        this.lastCanvasWidth = 0,
                        this.lastContentWidth = 0,
                        this.scrollX = 0,
                        this.renderedColumns = 0,
                        this.columnFitOnScreen = 0
                }
                contentWidth() {
                    return Math.max(this.visibleAreaWidth(), this.lastCanvasWidth * (this.renderedColumns / this.columnFitOnScreen))
                }
                visibleAreaWidth() {
                    return this.lastCanvasWidth
                }
                onScrollLimitsChangeCallback(t) {
                    this.scrollLimitsChangeCallback = t
                }
                setScrollX(t) {
                    var e;
                    this.scrollX = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                init(t) {
                    this.canvas = t,
                        this.canvas.addElement(this)
                }
                updateItems(t) {
                    var e;
                    this.items = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                setBetNumberImage(t) {
                    var e;
                    this.betNumberImage = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                draw(t) {
                    var e;
                    if (!this.betNumberImage)
                        return !1;
                    this.lastCanvasWidth = t.width;
                    const i = t.height / a.YP
                        , s = i + t.width % i / Math.floor(t.width / i)
                        , n = a.Qq(this.items) + 1;
                    this.renderedColumns = n + 4;
                    const o = t.width / s;
                    this.columnFitOnScreen = o;
                    const r = Math.min(0, (o - n - 4) * s)
                        , c = .8 * i;
                    this.lastContentWidth !== this.contentWidth() && (this.lastContentWidth = this.contentWidth(),
                        null === (e = this.scrollLimitsChangeCallback) || void 0 === e || e.call(this)),
                        this.drawBackgroundCircles({
                            context: t.context,
                            rows: a.YP,
                            columns: Math.max(o, this.renderedColumns),
                            rowHeight: i,
                            columnWidth: s,
                            size: .1 * c,
                            leftOffsetX: r,
                            areaWidth: t.width
                        }),
                        t.context.strokeStyle = "rgb(255, 191, 122)";
                    for (const e of this.items) {
                        t.context.fillStyle = this.colorsFn(e.code);
                        const n = r + s * e.col + .5 * s - this.scrollX;
                        a.k8(n, c, t.width) && C.P({
                            image: this.betNumberImage,
                            betCode: e.code,
                            context: t.context,
                            highlight: !1,
                            sizeValues: {
                                itemSize: c,
                                x: n,
                                y: i * e.row + .5 * i
                            }
                        })
                    }
                    return this.contentWidth() > this.visibleAreaWidth() && x.T(this.scrollX > Math.round(-(this.contentWidth() - this.visibleAreaWidth())), 0 !== this.scrollX, t),
                        !1
                }
                dispose() {
                    var t;
                    null === (t = this.canvas) || void 0 === t || t.removeElement(this),
                        this.scrollLimitsChangeCallback = void 0
                }
                drawBackgroundCircles(t) {
                    const { context: e, areaWidth: i } = t;
                    e.fillStyle = "rgba(255, 191, 122, 0.3)";
                    for (let s = 0; s < t.rows; s++)
                        for (let n = 0; n < t.columns; n++) {
                            const o = t.columnWidth * n + .5 * t.columnWidth + t.leftOffsetX - this.scrollX
                                , r = t.size;
                            a.k8(o, r, i) && (e.beginPath(),
                                e.arc(o, t.rowHeight * s + .5 * t.rowHeight, r, 0, 2 * Math.PI),
                                e.fill(),
                                e.closePath())
                        }
                }
            }
            var B = i(917528)
                , _ = i(563708)
                , P = i(725262)
                , O = i(988161);
            const T = {
                [d.kM.BetCode]: a.W$,
                [d.kM.BigSmall]: a.kf,
                [d.kM.OddEven]: a.uj
            }
                , j = {
                    [d.kM.BetCode]: a.cd,
                    [d.kM.BigSmall]: a.DL,
                    [d.kM.OddEven]: a.Pt
                };
            class k {
                constructor(t) {
                    this.props = t,
                        this.historyGrid = new A(this.prepareItems(this.props.historyItems, this.props.type), j[this.props.type])
                }
                init(t) {
                    this.historyGrid.init(t),
                        this.scrollHandler = new B.Y({
                            container: t.canvas,
                            scrollable: this.historyGrid,
                            scrollableAreaWidth: t.canvas.clientWidth,
                            invertedScroll: !0,
                            useTouchEvents: this.props.useTouchEvents,
                            onScrollEnd: () => {
                                this.props.log(O.AD(this.props.type))
                            }
                        }),
                        this.props.gameAssetsPromise.then((t => {
                            const e = new P.V(t.betNumbersIcons, _.a);
                            this.historyGrid.setBetNumberImage(e)
                        }
                        ))
                }
                updateHistoryItems(t) {
                    this.historyGrid.updateItems(this.prepareItems(t, this.props.type))
                }
                dispose() {
                    var t;
                    null === (t = this.scrollHandler) || void 0 === t || t.dispose(),
                        this.historyGrid.dispose()
                }
                prepareItems(t, e) {
                    return a.zr(t, T[e])
                }
            }
            var E = i(390634);
            class L extends r.PureComponent {
                constructor(t) {
                    super(t),
                        this.canvas = null,
                        this.updateRef = t => {
                            this.clearCanvas(),
                                t && (this.canvas = new E.X(t),
                                    this.historyGridIntegration.init(this.canvas))
                        }
                        ,
                        this.historyGridIntegration = new k({
                            historyItems: t.historyItems,
                            type: t.gridType,
                            useTouchEvents: !t.isDesktop,
                            log: t.log,
                            gameAssetsPromise: t.gameAssetsPromise
                        })
                }
                componentDidUpdate(t) {
                    this.props.historyItems !== t.historyItems && this.historyGridIntegration.updateHistoryItems(this.props.historyItems)
                }
                render() {
                    return s.jsx("div", {
                        className: "historyStatisticsGrid--86e15",
                        ref: this.updateRef,
                        "data-interactive": "true"
                    })
                }
                clearCanvas() {
                    this.canvas && (this.historyGridIntegration.dispose(),
                        this.canvas.destroy(),
                        this.canvas = null)
                }
            }
            const R = t => {
                const { itemsPerCategory: e, itemsToShow: i, categories: o, showGrid: r, showRatioBar: a, gridType: c, isDesktop: l, log: h, gameAssetsPromise: u } = t;
                return s.jsxs("div", {
                    className: n.Z("sectionContainer--f5165", {
                        "desktop--1ac31": l
                    }),
                    children: [s.jsx("div", {
                        className: "flexContainer--95e40",
                        children: a && s.jsx("div", {
                            className: "ratioBarContainer--2338b",
                            children: s.jsx(w, {
                                itemsPerCategory: e,
                                categories: o,
                                itemsCount: i.length
                            })
                        })
                    }), r && s.jsx("div", {
                        className: "gridContainer--cca50",
                        children: s.jsx(L, {
                            historyItems: i,
                            gridType: c,
                            isDesktop: l,
                            log: h,
                            gameAssetsPromise: u
                        })
                    })]
                })
            }
                ;
            var M = i(517720)
                , I = i(834180)
                , D = i(922402);
            var N;
            (function (t) {
                t.BetCode = "BetCode",
                    t.OddEven = "OddEven",
                    t.BigSmall = "BigSmall"
            }
            )(N || (N = {}));
            const z = t => t
                , G = t => {
                    const { history: e, itemsCount: i, isExpanded: o, isDesktop: h, log: u, isClassicLayout: p, gameAssetsPromise: m } = t
                        , g = e.slice(0, i)
                        , v = a.KL(g)
                        , y = !h || p
                        , S = o || !h || p
                        , w = (A = p,
                            B = R,
                            t => s.jsxs("div", {
                                className: "tabContent--28183",
                                children: [A && s.jsx("div", {
                                    className: "latestHistoryStatistics--94dbd",
                                    children: s.jsx(l.n, {})
                                }), s.jsx(B, Object.assign({}, t))]
                            }))
                        , x = {
                            itemsToShow: g,
                            itemsPerCategory: v,
                            showGrid: S,
                            isDesktop: h,
                            log: u,
                            gameAssetsPromise: m
                        }
                        , C = [{
                            component: w,
                            props: Object.assign(Object.assign({}, x), {
                                categories: [c.$.One, c.$.Two, c.$.Three, c.$.Four],
                                showRatioBar: !0,
                                gridType: d.kM.BetCode
                            }),
                            labelTranslationId: "1 / 2 / 3 / 4",
                            translateFn: z,
                            tabId: N.BetCode
                        }, {
                            component: w,
                            props: Object.assign(Object.assign({}, x), {
                                categories: [c.$.Odd, c.$.Even],
                                showRatioBar: !0,
                                gridType: d.kM.OddEven
                            }),
                            labelTranslationId: f.Iu(b.FL.OddEven),
                            translateFn: z,
                            tabId: N.BetCode
                        }, {
                            component: w,
                            props: Object.assign(Object.assign({}, x), {
                                categories: [c.$.Big, c.$.Small],
                                showRatioBar: S,
                                gridType: d.kM.BigSmall
                            }),
                            labelTranslationId: f.Iu(b.FL.BigSmall),
                            translateFn: z,
                            tabId: N.BigSmall
                        }];
                    var A, B;
                    return s.jsx("div", {
                        className: "advancedHistoryStatistics--b8463",
                        children: y ? s.jsx("div", {
                            className: n.Z("tabsContainer--b80d4", {
                                "mobile--f27e2": !h
                            }),
                            children: s.jsx(I.m, {
                                type: "line",
                                gameTheme: D.J.Default,
                                isCentered: !0,
                                isMobile: !h,
                                muteAnimation: !0,
                                tabs: C,
                                showTabBarForSingleTab: !0,
                                isRtl: f.Pz()
                            })
                        }) : C.map(((t, e) => {
                            const i = o && e !== C.length - 1;
                            return s.jsxs(r.Fragment, {
                                children: [s.jsx(R, Object.assign({}, t.props)), i && s.jsx("div", {
                                    className: "separator--cf9ac"
                                })]
                            }, e)
                        }
                        ))
                    })
                }
                , F = o.Pi((() => {
                    const t = M.oR()
                        , e = {
                            history: t.history.history,
                            itemsCount: t.history.advancedStatisticsItemsCount,
                            isExpanded: t.history.isExpanded,
                            isDesktop: t.layout.isDesktop,
                            log: t.logProcessor.log,
                            isClassicLayout: t.layout.isClassicLayout,
                            gameAssetsPromise: t.preloader.gameAssetsPromise
                        };
                    return s.jsx(G, Object.assign({}, e))
                }
                ))
        }
        ,
        455737: (t, e, i) => {
            i.d(e, {
                M: () => B
            });
            var s = i(567557)
                , n = i(989526)
                , o = i(869676)
                , r = i(98753)
                , a = i(2435);
            function c(t) {
                return `${o.ol[t]}:1`
            }
            var l = i(962525)
                , h = i(540712)
                , u = i(721982)
                , d = i(741454)
                , p = i(919536)
                , m = i(357114)
                , b = i(954474)
                , f = i(933721);
            function g(t, e, i, n) {
                return s.jsx("use", {
                    xlinkHref: t,
                    x: e,
                    y: i,
                    height: n
                })
            }
            f.F();
            const v = n.memo((({ rank: t, suit: e }) => {
                let i;
                switch (t) {
                    case "2":
                    case "6":
                        i = "36";
                        break;
                    case "3":
                    case "9":
                        i = "35";
                        break;
                    case "4":
                        i = "34";
                        break;
                    case "5":
                    case "J":
                        i = "38";
                        break;
                    case "7":
                        i = "40";
                        break;
                    case "8":
                        i = "39";
                        break;
                    case "10":
                        i = "0";
                        break;
                    case "Q":
                    case "A":
                        i = "19";
                        break;
                    default:
                        i = "17"
                }
                const n = [b.hE.D, b.hE.H].includes(e) ? "red--bd740" : "black--2da37"
                    , o = g(`#rank-${t}`, i, "10", "86")
                    , r = g(`#suit-${b.hE[e]}`, "100", "0", "106");
                return s.jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 184 106",
                    preserveAspectRatio: "xMidYMid meet",
                    className: n,
                    children: [o, r]
                })
            }
            ));
            v.displayName = "RankAndSuit";
            const y = "betLimits--9d73b"
                , S = "topPadding--3b321"
                , w = "cellContent--cad63"
                , x = n.memo((t => {
                    const { betKey: e, betTitle: i, min: o, max: c, payout: l, isIndented: f = !1, areLimitsInlined: g, cards: x, middleComponent: C, hasBottomBorder: A = !0, isMobile: B = !1, currencySymbol: _ = "", fixedColumnWidths: P = !0, showPayouts: O = !0, isSectionHeader: T = !1, hasSectionPadding: j = !1, disabled: k = !1, legacyMenuMode: E } = t
                        , L = f && j
                        , R = h.Z({
                            "indented--5f9e6": !L && (f || j),
                            "doubleIndented--8a1be": L
                        })
                        , M = void 0 === i && e ? s.jsx(d.Q, {
                            className: R,
                            "data-role": "title",
                            children: e
                        }) : s.jsx("span", {
                            "data-role": "title",
                            className: R,
                            children: null != i ? i : String.fromCharCode(8203)
                        })
                        , I = n.useMemo((() => {
                            if (o && c)
                                return m.w({
                                    lowerLimit: o,
                                    upperLimit: c,
                                    currencySymbol: _
                                });
                            const t = null != o ? o : c;
                            return t ? r.dN(t, {
                                currencySymbol: _
                            }) : void 0
                        }
                        ), [o, c, _])
                        , D = n.useMemo((() => null == x ? void 0 : x.map(((t, e) => function (t, e) {
                            const i = t.slice(0, -1);
                            let n = null;
                            switch (t.slice(-1)) {
                                case "C":
                                    n = b.hE.C;
                                    break;
                                case "D":
                                    n = b.hE.D;
                                    break;
                                case "H":
                                    n = b.hE.H;
                                    break;
                                case "S":
                                    n = b.hE.S
                            }
                            return "|" === t ? s.jsx("span", {
                                className: "cardsDelimiter--5cd4d",
                                children: t
                            }) : i && null !== n ? s.jsx(v, {
                                rank: i,
                                suit: n
                            }, e) : null
                        }(t, e)))), [x])
                        , N = !!(i || e || I || D || C || l);
                    return s.jsxs("tr", {
                        "data-role": `bet-limits_${e}`,
                        className: h.Z({
                            "mobile--61af7": B,
                            "disabled--22bc4": k,
                            "hasContent--a58e8": N,
                            "hasBottomBorder--813e5": A,
                            "fixedColumnWidths--59694": P,
                            "hasNotch--d5ed5": u.DS.HAS_NOTCH,
                            "hasIncreasedNotch--6332d": u.DS.IS_IPHONE14_PRO
                        }),
                        children: [s.jsx("td", {
                            className: h.Z("bet--5c40e", {
                                "bold--afbc2": !f && !B,
                                [S]: g,
                                "sectionHeader--262b9": T
                            }),
                            colSpan: g ? 2 : 1,
                            children: s.jsxs("div", {
                                className: w,
                                children: [M, g && !!I && s.jsxs("span", {
                                    className: y,
                                    "data-min": o,
                                    "data-max": c,
                                    "data-role": "limits",
                                    children: [p.L4, I]
                                })]
                            })
                        }), !g && s.jsx("td", {
                            className: "middleDataCell--22467",
                            children: s.jsx("div", {
                                className: w,
                                children: D ? s.jsxs("div", {
                                    "data-role": "ranks-and-suits",
                                    className: h.Z("ranksAndSuits--3b0fd", {
                                        "mobileRanksAndSuits--d53e2": B
                                    }),
                                    children: [...D]
                                }) : C || !g && s.jsx("div", {
                                    "data-role": "min-max",
                                    className: y,
                                    "data-min": o,
                                    "data-max": c,
                                    children: I
                                })
                            })
                        }), O && s.jsx("td", {
                            className: h.Z("payout--2e3a0", {
                                [S]: g
                            }),
                            children: s.jsx("div", {
                                className: h.Z(w, {
                                    "legacyMenuMode--c2969": E,
                                    "rtl--0bf7e": a.Pz()
                                }),
                                "data-role": "payout",
                                children: l
                            })
                        })]
                    })
                }
                ));
            x.displayName = "BetLimitsAndPayoutsRow";
            const C = n.memo((({ children: t, isMobile: e }) => s.jsx("tr", {
                "data-role": "bet-limits-footer",
                children: s.jsx("td", {
                    colSpan: 3,
                    className: h.Z("footerContentWrapper--bdce2", {
                        "mobile--b5c99": e
                    }),
                    children: t
                })
            })));
            C.displayName = "BetLimitsAndPayoutsFooter";
            const A = Object.values(l.jb)
                , B = t => {
                    const { getMinBetGroupLimit: e, getMaxBetGroupLimit: i, currencySymbol: n, payoutLimit: l, isMobile: h } = t
                        , u = A.map((t => s.jsx(x, {
                            betKey: t,
                            max: i(t),
                            min: e(t),
                            betTitle: a.Iu(o.YN[t]),
                            isMobile: h,
                            payout: c(t),
                            currencySymbol: n
                        }, t)))
                        , d = function (t, e) {
                            const i = r.dN(t, {
                                currencySymbol: e
                            });
                            return `${a.Iu("limitPlate.payoutLimit")} ${i}`
                        }(l, n);
                    return s.jsxs("tbody", {
                        "data-role": "bet-limits-test-id",
                        children: [u, !!l && s.jsx(C, {
                            isMobile: h,
                            children: d
                        })]
                    })
                }
        }
        ,
        295954: (t, e, i) => {
            i.d(e, {
                dM: () => ut,
                Zx: () => dt
            });
            var s = i(333940)
                , n = i(567557)
                , o = i(188464)
                , r = i(989526)
                , a = i(517720)
                , c = i(721982)
                , l = i(79092)
                , h = i(234894)
                , u = i(38281)
                , d = i(183454);
            const p = "d09GRgABAAAAABXoABAAAAAAMJgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAV0AAAABgAAAAcbSQnBEdERUYAABSoAAAAHAAAAB4AJwAZR1BPUwAAFaQAAAAsAAAAMNgy3xZHU1VCAAAUxAAAAN8AAAI+Mgo7HE9TLzIAAAHgAAAAUwAAAGBpEIGGY21hcAAAAngAAAB0AAABchdgIJtjdnQgAAAC7AAAAAQAAAAEACECeWdhc3AAABSgAAAACAAAAAj//wADZ2x5ZgAAAxgAAAQpAAAFDOBM1NtoZWFkAAABbAAAADIAAAA2+ftpyWhoZWEAAAGgAAAAHgAAACQG/wKbaG10eAAAAjQAAABDAAAATCk1BB1sb2NhAAAC8AAAACgAAAAoCmYLsm1heHAAAAHAAAAAHwAAACAAWABibmFtZQAAB0QAAA0hAAAkulmPAy9wb3N0AAAUaAAAADcAAABIAGQBPXicY2BkYGAA4vd/V8XG89t8ZZBnfgEUYTi9R5gRTsv/f8dsyPQFyOVgYAKJAgBpXAwVAAB4nGNgZGBgPv2fCUi2MzD8/8dsyAAUQQHCAHOYBKAAAHicY2BkYGAQZjBkYGYAASYgZmQAiTkw6IEEAAouALsAeJxjYGZKZzzEwMrAwrSHqYuBgaEHQjPeZTBi+MXAwMTNxswEAixANj8DEvDx9PMHUtoMuUxf/vMwnGA+zfBPgYFhOkiO8RbTESClwMACAMLzD3MAeJxjzGFQZAACRl8GBqZZDG6MLAz2TMEMFkAcDcQ2QKwBxPJArA/EJkDsABU3Y5rMEMbczhDGxM8QzFzO4AsAZl8KdgB4nGNgYGBmgGAZBkYGEMgB8hjBfBaGACAtAIQgeW0GPQZLBm8GX4Zshtz//6EiBgiR/zf+X/t/9f+R/4f/L/u/FGoaCmBkY4ALMzIBCSZ0BSg8oK0sDKxs7BycXNw8vHwYxvEDXYYPCDII4ZUfEAAAgIAWIwAhAnkAAAAqACoAKgBAAFIAggCUALwA+AEWAUIBcAGEAcwB/AIaAjgCUgKGeJxVVG9MG2UYf9734G4g/0o5QEhh7U0OMAPau2sL3CiUAjJYVwq0XdcWkD+xIMzINGNkqOg0BGIyo19Qsygh8YtRyL5sMUuMXdAPupgoRiUNiUbNjIsmyz6YcfhcC9nM5e59773n/T2/3+953gMKZgBSS1eBAQ7qNgjUq5tcBvxl22Azd9RNhuIUNhh9OVNf3uRY8kDdJPq6ZDAbRMkgmEnWH1tbdHVvwkxDCAedUE0HqB0ewxde4gVeUARFUsiLyaQ/maR2/elPAuixrv1/4RZcgiMA9iLWUqXIdtst0SmKzqBdFMvKRaDg3L9Ly+k25EAlQKGtgvBFrJAKdVjyKF9UQSVbC5Xr6I8fnrPOXZibs35e22zKzTU119akR7o9sTa1fvv2+tQa74xEbVIk4nBEomPRiBM5nEUi8zQBLI4GwcCJDjI/8nrjVzSxp1Lvc+1rGKMC0GzkUALwBG9WiF2RqwQLy4ktRLIVI6F8QrM1GynzPmVXurKGchfCscUm52/BYJSU+jrtHo+jwD85OdQy4tjVdVejJhbxqgGMimRLwz1E4/hDlaKjghx8/76y40y3HLaEymZ7opc6Ha2+lZHAgilccNreNBDvJid9DpfcFqxs7Z4IN4fyaG60fXzW662ob+xq9bh0v6nuIK1BrdmQp6tNVwf1GA0CQ76YmIhpN8jxx+kuTWh1/VevhsjXWh0Z1d7XOdcj5yO4t1yvq5mzp6n+n6OFM5I72g5bpTxzeWWq77wpZDhZ7xoc6vL3ZNNE4EbuxfHpN3rdwpPyYHvvaZFcQE4y4poQtyCFzJQ8BFZkh5EpKj6AZsn6TXLUGXtpOT653HH9Pf9in6/N7Ueqv1DjwnD81dfGI9PkmFboCg662/r7dc6tqJc5qC1PBGJWKKP9eo6I2gc0Edp7m84E0BcGVORQgvUohWPQgLGPNplSR/S2TNVFLCo+VMoyj8zJlabepbHxpd4mqzp/7aJq/dlta/B4GmzuklMtqternvCSF/Kfbh+efX7EM1xADQONgal4oDFY8K7V3Y5hbdorak+P2tTbk6qTHR+VyKcQTACSUWS5AzYpbzjGKFdZWD5F4JObJL+snEdbJuPLHt0Wfx/aghKyMjN1Wy6PnZ3Rdsjd1mAgbQv6gqrpO+hLDvafQSJSFnojYPNfp0Rd0j4i029q1+goWvslcWqfaS+TGe0tDD/cy1jxJR+gnEhG/AVg8+CF49/f0W9XR+mfrjt0GI/PLj2KR8i392nqTuBezE5z6L2DvA6JMwoitqBhg9laSP6zuM3E6D2t9JsftL379zEsle8U5qshv4OAe/QDUpI+JZhORucPRxPyl0WpmP/Y6JMna0oDUjAci6tqbEzuiGWcySAr1dLQcduzg9pPhLsSbtkHUrYQ6HxAzp+oaaiA/wAJuTsFAAAAeJztWc9vHLcVpmJbsh07TYrUKXpICQWNEmS9khwhsRWggCJIjpNYNmw5RY7cGe4urdnhhuTsegX00L+gl/aaY4ugf0CvRdF7L0UL9JZTD7310kMvfe/xcXZHu5KVpoceKmF3ORzy/eIj+X2kEGJ16UuxJOhv6esLf+Dykrhx6U9cfkGsXPoXly+It5d/wuWL4tXl33D5kri2/FcuL4tXV17h8or4+eV9Ll8W1y//g8tXxBtXPuLy1Ysff/cFLr8oXrvxUy5fEz+68TWXr1/44+u/5vJL4oerv+Xyy+I7q//k8iti+Y3vgYVLF6+Aob8na7G8JFqXfsXlF8RLl/7O5Qvi0fIFLl8Uby3/jMuXxPeXf8flZaj/G5dXll5feZPLl8UPLv+Zy1fE/pWk6+rlX1wpuPyiaN+4z+Vr4uMbv+Ty9ZUvX1vh8kvix6tjLr8sXl/9C5dfEdfeWBG7woqhmAgnjOiJvghCiq/gc0tswP+7ULrJT5vwLcWn0K6EPgH6DIWGmrtiIDriI9GC8pj+26I40aotMngawK8UO/C2gN+pRk9PGn41/I7gO6eWh/DW0Nsu9C7JNg+lLpTGQlEfCVIVaJGsT4ItmuUN4duCrAq0o8wWtcYaAzJMXZeTlgyssmRDDnUW+kqQ50B6CbVdss3x2zH0CGCdBdmB2vVJqxbPSCv64qmdo5YBakp4VvA2WjWCckF6umdGNUZsRP0N2RQjomrrcng3oGgcnUNejEyPpATyKXpkyL7kxxPQ+5h0PwTJ0fpAWktqfbhA8wPQjFHNSEJqmUZnOiqn6c6oJkD7+GzZGvT5KcTZUb+cNAT4tjQuzTxJ/nZBSrQj1lvONpQc465I15jeTOO2A/KxpSIL9qFcka4e25G82oE+hmIgxSfQt0NeKtCFliSbNOUW5gJKKOeiETMBI5HR9+mxOMt/sWuHE2d6/SC/krc2Nt6VN+Fn85b81JQ2TIZa3h10PmrJ8XjcLriqndlBW+4UhaSOXjrttRvpvC0P+8bLri2D9LYbxsppOVATCf1kR0O7obN5lem8JQc2N12Dpdz4rLBe59I6GZwqfVc7B49jE/q2CjL0tdTPhqDFy7EzIehSqiGIGqlC2m7TVDBspEvjJBiiUFyuB8odzbUDY3rGB42KTEk6nrQft+VDBeKDVGUuD+vOD7pdk2mqRHfIldnemXZBwa8FMU4+rZzxucmCsaXnmKDergIZULYQNlOC7cqFsY227eTOqFLuuyqYHshAVTtHxin5ie2oifJ9g5K0zLU3vTKZAUEIOgtNK5r6xYkV4IDWGZyPu7RyS3GfssdAlgygcYzegX4W5O7Eyfs6NxXUP6LJV0H6Y/KLR7pXFQoKpy8W299I8Xa9TYjGOG0vNmgbk7TpWpIfpd9c5BYKARk3k1Of0UzxPB8kqG/TziU+085D9ORme2PjW2v5/wp85gr0PzZfz0rpZmqK/9KKL84x+Z+va3av0Ky1mXcxw++I2/DfIuu6PI4SrNGUCb7OwT48j6hXjz2JMtLIe8qoKNUzzpGMwgxJOLmfxv32HmOZprwRIarxDDqanwUtskqzPkM+xmfEV0Wd4ZIiXFAsVJ1raI+d21NxRCLejP7P+tKcU2m2mhmJMVJ78KbDvdOI79PoVNSnRfMnYT1LrQrConF+HZH8imKXZDYxYYwpjmVzdnqKTcEzEmdW9G9E8UBsPuC57+ckI36J71ByjHjGNWj3pIFEItaZz6oBxS3Gaw3kJ681PKUI7tMz2t6fsb3Po+/ZJtXAwvNYzJK9Mccs6U0eGZYyzaaIosOC0Z8dF/TvQx6XCtpgHONYnBy9RSt4YgxD9regdRJnY7Qu0Jhl4gO2MM4o7DnilRLfRjzpqbUl7c14JJ4SKF4ZtXB1i9n87DNOPWa2E3OsVc+JVahfbchu+qHIF5TeZUyJ+YAeI7fRtaSYd1Fb3FniaqOIBWlqEXfVaf7EzC4hUopzOO6BZmb/KHhv6cCnoIhNZjTimxFJaY6F4rg64mYljXbF0pOtmvLT0JoQZ8+QPFXMzzJeQyJr6/DOJcm7Z5xb06zVtAqkNWN2TYusd0ucnwmczPbIJh3HP9rzfERw9u4Sd+3EVXRD78lYRqsy6qFqVrG49RTOpcildg8JJAayGGGRpHOCgqI/3ftj3NIegjlW8dosKbJjGrsB5XFBVuG4xYyO7+OMm9/3AsVb87xTNFbZzFzIOW/iqcKQ7AqcoVFvzIvezBqTkc0551Li8XrmFGKea08jNMV8I54bMT5FvZvN75648g2ozYQsd5x5k5mIRzDea+wJs149E4knPuXYx/MQR21iruOq4+v1MUVSsdS0X+Uzq5ZnVNCeRy6RnQDISqAOIPSd27dbUnUBfMmJVs4jtOurkSl7AHSgBaIyH7CpB+4ngUqabs2XgD/dK+t2I6PHRAtrbNiSAAS9Mjn+dnWBSFDaTmF6CuGcDDYxJiWBv4L+qIUhJOJNQw3BqD3XURF87VehcqolO8g+rVSFtwAkj7SsvMaWzEjBUl0yzvRhUgDCNBnoG+nCDgcAS31qHMbwZDQYnkGhcpNI5oD91aEaaLRrrYuq9RoauO9Aep+k9w0KC30V2XDNJu1YQ8TsgKwywccwAVUOtfvRl7b8EHypysKAF8m9KfJGgj4EvcVE9jSIC85kH4BAGCgvR4CWTQZ81QdnjzTbgdw+9E12BOMKFTGefeC2x0D/IWItHIlVuxpbsw4lIWhdYKwyMy4rdCvGDroBioe0UR7ikwP5ovhAsMtKQYSBGhgC7gXA+I4pTJhQx54Z6eSFAlvdwJbGVj5K1aU3nULjWQGMO8qRXetkB1C/DMDRYrO+VjlmRsy0WxsbWwvJeAq7zI0D+0HOHEM5AdmBcyC717FvshJEZU6r0KwmdovGYd3DAgavrAZy1xaFJloCtuEMyYoKslmWMAv8QBWFzNQQAg3PMHD13Auu0jB2qjCZjwFWMrODYaGDpr4Qix5lTGYh2CUevYw1HeW0GwYRJYPR92BPoWenZ1cNTDFpgYsqn5DhhXK9OBOiqmd4NvEUrPey6+wAom6PPOYjGqmgKc6rnFLLw1IAa0mfjjqHYlusw//zDoNFP4Th9vr6yYOpbypnvT4ebm4kuEifpmMdT7g43A6aHQB5PoTNbB8+u7AJYPkB1CKp3qfNG+v3oOYxfOM2cVc8gtKeuE+1h+K6uEqfzwm+JPIVt59OTaqn2/HzD7Y106hEDqewouAtJG0CZ0GLtLFb2g6m8qYkbV5zznTEEeSqahjRIb2W/DgN1qyRXwUfQ8StNoKsFKHzHevPbriKoIWagX+e5IZzgCvc1J8QNUiH8pO5EdIzpDjB2bRtom1Dirvhw5WT3knaah35mciapBrF5CwS8KQXt+JZEqrmrkNadWscqXlaed7ooZ0D0pTyzjYkJ0jpTxCtBE6mLZG6lbUtGNOU5yevXzK+UEqZtyiXzudFhJfdhSOGkUUdXxBM9GJ6HJWOuBSR3Wbs3YKxi+M+4KhH0KX4HUqaHmskcHye0U8WxxmrmfrMXh1N5c37nWbKXSZnjnPkdNun4LEiMNpj+2ev2DImM/EgMPmVqF8Qz7++Wz9hwSJLNdOEOCePqf6YdKbRqBiYx3yKVh9QZhzzO89x63O2dKlnzn0ek+Wxbzr8+s8tf1hnxpBWGU85u0Zy4jwYzMwNLxKRiIelJc9xyT5nnM2OI4qSKiYKpiYNcZbllCEFrcyG1hdNo5yLeDlka5tjbmIGVSQJdR3X2jyd6adIRO8dZ5bhCOI4d75VnM7aY5qZlWKgZq610O/tmR0APW1DjRTvAN2+I94C2v22eE9sivfpmnlL3IbPTfhsQkkcPDi8t39vd+fw3oMD+WBffnpvd+/g8Z7cuftob+/+3sHh9avXr35uK2QlAIs6eDRM8GzuLksbOjCOEBAgFyGbJghEDGd7mtoRU6k750APnAFKAbI7E2lLPQsh1zzwkwzBGCBRNGjBVVrEY6qoFMFa73VYcP/1pCzwpmySHNJlOvdGyCX9UGemCzyF1UnVc1ojW5E9AIYBeRn2VXlkRipd87Ww2k0p0CLzCjMwBG1tbIwA2DMXQZRIlXZcopS2xJin68HMDicYvGmUFqgAGNydOqbKifyiAu6I5/Z4wq9czta72jvwfQCmAyJVHq8BiEIiyp53HwXDwGogFfHykdrVunFQ7gJLcRCRhnRCvZVHUMsXohmwh46WqAtJTZi7Pl1nAVOhGqA+jOSxLo87Gt2oAKNDnED0QRWO4cmDbX0IS9cgaJePDdBRHNqzhT/EYAwL4ET5milhDAYqxguwf6ZdCSMOrAqfgAsHaAScB4hsHLK8koXtmczoAuiFHFqUDNEc6cqAvcfYzVcFGgHqIQU8jD5wic7ZNjVnDAcLLVB0lanCNk0AXbS35Ttbd97aePu9zfdvya3bWze3Nm9/c4TfXJVORfVs4vMuTE9ekYrmHSDf+v0bl3yA7QAAAHicY2BiAIP/gQxGDNiAMBAzMjAx8DEIAtkiDKIMYgziDBIMkgxSDNIMMgx6DAYMfgwBAHqlA6EAAAAAAf//AAJ4nGNgZGBg4AFiMSBmYmAEQiEgZgHzGAAEZABBeJyNkU0KglAUhc/1PwmRBhHRQBy7iSCapBnSBkRoJBJqg3bQAhq0mBbTTuz6tBIUcvCuj3O+d967VxAAExEySMk1T2GlcZlhBYV1VBUk/hBcqOvtzoEbhD7Xvb/hGoUB12NU6x1WOuVxAqu4nAvMWWlU4UCGwawHTdzq4YASDzzxIoU88ikVjkQ53ZozdOczxDkEm5cjcggqZ9XVarOHGG0Eo49gjBGMOYKZ9hjwlGdY8LTdetptZ9TZ1VUWrM15y0FqyNe+/uSPr4u3znhZrfvroK9S838+fbwBx2UcewB4nGNgZGBg4GLQYdBjYEquLMph4MtJLMljkGBgAYoz/P8PJBAsIAAAskMH+3icY2BgYGQAgqtrGMH06T3CcBoANaYEuw=="
                , m = {
                    [l.T.Large]: {
                        fontSize: 30,
                        dy: 10
                    },
                    [l.T.Medium]: {
                        fontSize: 24,
                        dy: 8
                    },
                    [l.T.Small]: {
                        fontSize: 18,
                        dy: 5
                    },
                    [l.T.Tiny]: {
                        fontSize: 14,
                        dy: 4
                    }
                }
                , b = .87
                , f = () => c.DS.IS_IOS || c.DS.IS_ANDROID5_0_0_PLUS || !c.DS.IS_NATIVE_ANDROID_BROWSER
                , g = 14
                , v = 85;
            function y(t) {
                return t ? "" : `<defs><style>@font-face{font-family: 'Inter'; src: url('data:application/x-font-woff;charset=utf-8;base64,${p}');}</style></defs>`
            }
            function S(t) {
                return t ? "Arial, sans-serif" : "Inter, Arial, sans-serif"
            }
            let w = {};
            const x = c.DS.IS_SAFARI || c.DS.IS_IOS
                , C = Object.freeze({
                    pixelRatio: 1,
                    shadow: !1,
                    nativeFonts: x
                });
            async function A(t, e, i, s, n, o = {}) {
                var r;
                const a = Object.assign(Object.assign({}, C), o);
                if (null === (r = w[s]) || void 0 === r ? void 0 : r[e])
                    return w[s][e];
                const p = await function (t, e, i, s, n, o) {
                    return new Promise(((r, a) => {
                        const p = new Image;
                        p.onload = () => {
                            r(p)
                        }
                            ,
                            p.onerror = () => {
                                const r = `getCompiledSVG(${t}, ${e}, ${JSON.stringify(i)}, ${s}, ${n}, ${JSON.stringify(o)})`
                                    , c = new Error(`Error while image source loading: function ${r} returns ${p.src}`);
                                return a(c)
                            }
                            ,
                            p.src = function (t, e, i, s, n, o) {
                                const { pixelRatio: r, shadow: a, nativeFonts: p } = o
                                    , w = t === l.x.SlingshotPerspective ? v : 78
                                    , x = s * r
                                    , C = n * r
                                    , A = u.ai(e, i)
                                    , B = d.H(A, -.2)
                                    , _ = h.r(e)
                                    , P = u.A_(_)
                                    , O = m[P]
                                    , T = window.devicePixelRatio > 1 || c.DS.IS_IOS ? O.fontSize : function (t, e, i) {
                                        const s = e / i
                                            , n = Math.round(t * s);
                                        return (2 * Math.ceil(n / 2) - e % 2) / s
                                    }(O.fontSize, n, w)
                                    , j = f() ? `transform: scale(1, ${b})` : ""
                                    , k = a ? g : 0
                                    , E = a ? '<radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" spreadMethod="pad"><stop offset="79%" style="stop-color:rgb(0,0,0); stop-opacity:.2" /><stop offset="84%" style="stop-color:rgb(0,0,0); stop-opacity:.4" /><stop offset="90%" style="stop-color:rgb(0,0,0);stop-opacity:0.2" /><stop offset="97%" style="stop-color:rgb(0,0,0);stop-opacity:0.02" /><stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0" /></radialGradient>' : ""
                                    , L = a ? '<circle fill="url(#grad1)" cx="39.019" cy="38.999" r="46.5"></circle>' : "";
                                return t === l.x.SlingshotPerspective ? `data:image/svg+xml;charset=utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 ${w}" width="${x}" height="${C}">${y(p)}<g style="fill: ${A};${j};"><circle cx="39.019" cy="45" r="38.5" fill="${B}"></circle><circle cx="39.019" cy="38.999" r="38.5"></circle><path d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z" ></path><circle fill="#000" opacity="0.2" cx="39" cy="38.997" r="25.5"></circle><path fill="#ebebeb" d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"></path><path d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z" fill="white"></path><text style="font-family: ${S(p)}; font-weight: 600;" x="50%" y="50%" font-size="${T}" dy="-2.4" fill="white" text-anchor="middle" dominant-baseline="central">${_}</text></g></svg>`)}` : `data:image/svg+xml;charset=utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${78 + k} ${w + k}" width="${x + k}" height="${C + k}">${E}${y(p)}<g transform="translate(${k / 2} ${k / 2})">${L}<circle fill="${A}" cx="39.019" cy="38.999" r="38.5"></circle><path fill="#ebebeb" d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"></path><circle fill="#000" opacity="0.2" cx="39" cy="38.997" r="25.5"></circle><path fill="#ebebeb" d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"></path></g><text style="font-family: ${S(p)}; font-weight: 600;" x="50%" y="50%" dY="${O.dy}" font-size="${T}" fill="#fff" text-anchor="middle" dominant-baseline="central">${_}</text></svg>`)}`
                            }(t, e, i, s, n, o)
                    }
                    ))
                }(t, e, i, s, n, a);
                return w[s] ? (w[s][e] = p,
                    p) : (w[s] = {
                        [e]: p
                    },
                        p)
            }
            class B extends r.PureComponent {
                constructor() {
                    super(...arguments),
                        this.imgEl = null,
                        this.divEl = null,
                        this.pendingPromises = [],
                        this.setEl = t => {
                            this.divEl = t
                        }
                }
                componentDidMount() {
                    this.setImage()
                }
                componentDidUpdate() {
                    this.setImage()
                }
                render() {
                    return n.jsx("div", {
                        className: "chip--fb6e5",
                        ref: this.setEl
                    })
                }
                setImage() {
                    const { chipType: t, amount: e, size: i, chipColors: s } = this.props;
                    this.pendingPromises.push(A(t, e, s, i || 78, i || 78)),
                        Promise.all(this.pendingPromises).then((t => {
                            const e = t.pop();
                            e && (this.imgEl && this.divEl === this.imgEl.parentNode && this.imgEl.remove(),
                                this.imgEl = e.cloneNode(),
                                this.imgEl.style.width = `${i}px`,
                                this.imgEl.style.height = `${i}px`,
                                this.divEl && this.divEl.appendChild(this.imgEl))
                        }
                        )).then((() => {
                            this.pendingPromises = []
                        }
                        ))
                }
            }
            const _ = r.memo((function (t) {
                const { amount: e, startPosition: i, chipColors: s, chipSize: o, containerRef: a } = t
                    , c = r.useRef(null)
                    , h = r.useRef(null)
                    , u = r.useCallback(((t, e) => {
                        if (c.current && h.current && a.current) {
                            const i = h.current.width / a.current.offsetWidth
                                , s = (t - h.current.x) / i
                                , n = (e - h.current.y) / i;
                            c.current.setAttribute("style", `transform: translateX(${s}px) translateY(${n}px);`)
                        }
                    }
                    ), [c, a, h])
                    , d = r.useCallback((t => {
                        u(t.clientX, t.clientY)
                    }
                    ), [u])
                    , p = r.useCallback((t => {
                        u(t.changedTouches[0].clientX, t.changedTouches[0].clientY)
                    }
                    ), [u]);
                r.useEffect((() => (document.body.addEventListener("mousemove", d),
                    document.body.addEventListener("touchmove", p),
                    () => {
                        document.body.removeEventListener("mousemove", d),
                            document.body.removeEventListener("touchmove", p)
                    }
                )), [d, p]);
                const m = r.useCallback((t => {
                    c.current = t,
                        a.current && (h.current = a.current.getBoundingClientRect()),
                        u(i.x, i.y)
                }
                ), [a]);
                return n.jsx("div", {
                    className: "draggableChip--42252",
                    ref: m,
                    children: n.jsx(B, {
                        chipType: l.x.Default,
                        amount: e,
                        size: o,
                        chipColors: s
                    })
                })
            }
            ));
            var P = i(190351)
                , O = i(776454)
                , T = i(962525);
            var j = i(28253)
                , k = i(26540)
                , E = i(621898)
                , L = i(869676)
                , R = i(98753);
            const M = .8333;
            var I, D = i(29485), N = i(563707), z = i(2435), G = i(947639);
            (function (t) {
                t.Default = "default",
                    t.Pointer = "pointer"
            }
            )(I || (I = {}));
            const F = ["rgba(132, 2, 5, 0.8)", "rgba(95, 1, 3, 0.7)"]
                , V = ["rgba(134, 13, 17, 0.8)", "rgba(107, 2, 5, 0.7)"];
            class H {
                constructor(t) {
                    this.canvas = null,
                        this.sizeRatio = 1,
                        this.bettingStatistics = {
                            amount: 0,
                            players: 0
                        },
                        this.betSpotShape = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            type: T.pw.Rect
                        },
                        this.enabled = !1,
                        this.highlight = !1,
                        this.hover = !1,
                        this.hasChips = !1,
                        this.showPayout = !1,
                        this.onClick = () => (this.onClickHandler(this.betSpotCode),
                            I.Default),
                        this.onMove = () => I.Pointer,
                        this.onHover = (t, e) => {
                            var i;
                            let s = e;
                            this.isOutsideCanvas(t) && (s = !1),
                                this.enabled && this.onHoverHandler(this.betSpotCode),
                                this.hover = s,
                                null === (i = this.canvas) || void 0 === i || i.scheduleDraw()
                        }
                        ,
                        this.betSpotCode = t.betSpotCode,
                        this._layout = t.layout,
                        this.onClickHandler = t.onClickHandler,
                        this.onHoverHandler = t.onHoverHandler,
                        this.payoutRate = t.payoutRate,
                        this.currencySymbol = t.currencySymbol
                }
                init(t) {
                    this.canvas = t,
                        t.addElement(this)
                }
                setLayout(t) {
                    this._layout = t
                }
                setBetNumberImage(t) {
                    var e;
                    this.betNumberImage = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                setPlayerIconImage(t) {
                    var e;
                    this.playerIconImage = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                setBettingStatistics(t) {
                    var e;
                    this.bettingStatistics = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                setHasChips(t) {
                    var e;
                    this.hasChips = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                toggleEnable(t) {
                    var e;
                    this.enabled = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                toggleWinningBetSpot(t) {
                    var e;
                    this.highlight = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                setShowPayout(t) {
                    var e;
                    this.showPayout = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                draw(t) {
                    if (!this._layout.isAdvanced && !T.jU.includes(this.betSpotCode))
                        return !1;
                    const { context: e } = t;
                    return e.save(),
                        this.enabled || (e.globalAlpha *= E.rh),
                        this._layout.updateActualAreaSize(t.width),
                        this.betSpotShape = N.V(this.betSpotCode, this._layout),
                        e.beginPath(),
                        this.drawShape(e),
                        e.closePath(),
                        this.drawBackgroundFill(e),
                        this._layout.isAdvanced && T.D$.includes(this.betSpotCode) || this.drawBorder(e),
                        this.hover && this.enabled && this.drawHover(e),
                        this.highlight && !G.xb() && this.drawHighlightPulse(t),
                        T.D$.includes(this.betSpotCode) ? this.drawNumericBetSpotContent(e) : this.drawNonNumericBetSpotContent(e),
                        e.restore(),
                        this.shouldRedraw()
                }
                setSizeRatio(t) {
                    this.sizeRatio = t
                }
                setupHitTesting(t) {
                    this._layout.updateActualAreaSize(t.width),
                        this.betSpotShape = N.V(this.betSpotCode, this._layout),
                        t.context.save(),
                        t.context.beginPath(),
                        t.context.scale(1, t.height / t.width * this.sizeRatio),
                        this.drawShape(t.context),
                        t.fillWithCallback({
                            onPointerMove: this.onMove,
                            onClick: this.onClick,
                            onHover: this.onHover
                        }),
                        t.context.closePath(),
                        t.context.restore()
                }
                dispose() {
                    this.canvas && this.canvas.removeElement(this)
                }
                isOutsideCanvas(t) {
                    var e;
                    return (null == t ? void 0 : t.offsetX) < 0 || (null == t ? void 0 : t.offsetX) > ((null === (e = this.canvas) || void 0 === e ? void 0 : e.container.offsetWidth) || 0)
                }
                drawShape(t) {
                    this.betSpotShape.type === T.pw.Rect ? t.rect(this.betSpotShape.x, this.betSpotShape.y, this.betSpotShape.width, this.betSpotShape.height) : this.betSpotShape.type === T.pw.Poly && D.MC({
                        context: t,
                        points: this.betSpotShape.points
                    })
                }
                drawBackgroundFill(t) {
                    const e = this.hasChips ? F : E.PH(.7);
                    t.fillStyle = this.getShapeGradient(t, [{
                        offset: 0,
                        color: e[0]
                    }, {
                        offset: 1,
                        color: e[1]
                    }]),
                        t.fill()
                }
                drawBorder(t) {
                    var e, i;
                    t.save(),
                        t.strokeStyle = this.getShapeGradient(t, E.$$, (i = this.betSpotCode,
                            !(null !== (e = this._layout.isAdvanced) && void 0 !== e && e ? i === T.vm.One || i === T.vm.Three : i === T.vm.Small || i === T.vm.Big))),
                        t.lineWidth = T.jU.includes(this.betSpotCode) ? this._layout.strokeWidth : .75 * this._layout.strokeWidth,
                        t.stroke(),
                        t.restore()
                }
                drawHover(t) {
                    t.fillStyle = "rgba(240, 196, 147, 0.10)",
                        t.fill()
                }
                drawHighlightPulse(t) {
                    const e = t.cache.get(`${this.getCacheKey()}-highlight`, !1, (() => this.createCacheHighlight(t.width, t.height)));
                    if (e) {
                        const i = k.sp(t.time);
                        this.drawImage(t.context, e, 0, 0, i)
                    }
                }
                drawNonNumericBetSpotContent(t) {
                    this._layout.isAdvanced || this.drawInnerBorderForRectangleBetSpot(t);
                    const e = z.Iu(L.yx[this.betSpotCode])
                        , i = this.calculateBetSpotTextValueRect(t, e);
                    t.font = this.getBetSpotTextValueFont(this._layout),
                        t.fillStyle = `rgba(244, 188, 100, ${T.jU.includes(this.betSpotCode) ? .9 : .7})`,
                        t.rotate(i.rotation);
                    const s = this._layout.spotPayoutFontSize
                        , n = this._layout.percentagePixels(.6);
                    if (t.fillText(e, i.x, this.showPayout ? i.y - n - .5 * s : i.y),
                        this.showPayout) {
                        const e = {
                            horizontalAlignment: T.Kx.Center,
                            verticalAlignment: T.Q4.Center,
                            position: {
                                x: i.x + .5 * i.width,
                                y: i.y + n
                            }
                        }
                            , s = E.FS(T.jU.includes(this.betSpotCode) ? .8 : .5);
                        this.drawBetSpotPayout(t, e, s)
                    }
                }
                drawInnerBorderForRectangleBetSpot(t) {
                    if (this.betSpotShape.type !== T.pw.Rect)
                        return;
                    const e = 5 * this._layout.scale;
                    t.beginPath(),
                        t.rect(this.betSpotShape.x + e, this.betSpotShape.y + e, this.betSpotShape.width - 2 * e, this.betSpotShape.height - 2 * e),
                        t.lineWidth = .75 * this._layout.strokeWidth,
                        t.strokeStyle = "rgba(225, 191, 122, 0.5)",
                        t.stroke()
                }
                calculateBetSpotTextValueRect(t, e) {
                    t.font = this.getBetSpotTextValueFont(this._layout);
                    const i = t.measureText(e).width;
                    let s = 0;
                    this._layout.isAdvanced || (this.betSpotCode === T.vm.Odd ? s = -Math.PI / 2 : this.betSpotCode === T.vm.Even && (s = Math.PI / 2));
                    const n = function (t) {
                        const { betSpotShape: e, sizes: i, textWidth: s, rotate: n, strokeWidth: o } = t;
                        let r = 0
                            , a = 0;
                        return n > 0 ? (r = e.y + .5 * (e.height - 2 * o - s),
                            a = -e.x - .5 * (e.width + 2 * o - i.fontSize)) : n < 0 ? (r = -e.y - .5 * (e.height - 2 * o + s),
                                a = e.x + .5 * (e.width - 2 * o + i.fontSize)) : (r = e.x + .5 * (e.width - 2 * o - s),
                                    a = e.y + .5 * (e.height - 2 * o + i.fontSize)),
                        {
                            x: r,
                            y: a
                        }
                    }({
                        betSpotShape: this.betSpotShape,
                        sizes: this._layout,
                        textWidth: i,
                        rotate: s,
                        strokeWidth: T.jU.includes(this.betSpotCode) ? this._layout.strokeWidth : .75 * this._layout.strokeWidth
                    });
                    return Object.assign(Object.assign({}, n), {
                        width: i,
                        rotation: s
                    })
                }
                drawBetSpotPayout(t, e, i) {
                    const { horizontalAlignment: s, verticalAlignment: n, position: o } = e;
                    D.yU({
                        context: t,
                        fontSize: this._layout.spotPayoutFontSize,
                        horizontalTextAlignment: s,
                        verticalTextAlignment: n,
                        textColor: i,
                        text: `${this.payoutRate} : 1`,
                        point: o
                    })
                }
                drawNumericBetSpotContent(t) {
                    this._layout.isAdvanced ? this.drawNumericBetSpotContentForAdvancedGrid(t) : this.drawNumericBetSpotContentForSimpleGrid(t)
                }
                drawNumericBetSpotContentForSimpleGrid(t) {
                    if (this.drawNumericBetSpotImage(t),
                        this.showPayout) {
                        const e = this.calculateNumericBetSpotPayoutLocationForSimpleGrid();
                        this.drawBetSpotPayout(t, e, E.FS(.8))
                    }
                    (function (t) {
                        const { context: e, playerIconImage: i, betCode: s, layout: n, betSpotShape: o, bettingStatistics: r, currencySymbol: a } = t;
                        if (!i)
                            return;
                        e.save(),
                            e.fillStyle = E.FS(1);
                        const c = s === T.vm.Two || s === T.vm.Four
                            , l = s === T.vm.One || s === T.vm.Two
                            , h = n.percentagePixels(n.rawConfig.playerIconSizeRatio)
                            , u = h * M
                            , d = n.percentagePixels(1.2)
                            , p = R.dN(r.players)
                            , m = R.dN(r.amount)
                            , b = n.bettingStatisticsFontSize
                            , f = E.LE(b)
                            , g = `800 ${b}px ${L.LZ}`;
                        e.font = g;
                        const v = e.measureText(a).width;
                        e.font = f;
                        const y = n.bettingStatisticsFontSize
                            , S = n.percentagePixels(.4);
                        let w = o.y + d;
                        l && (w = o.y + o.height - h - S - y - d);
                        const x = w + .8 * y
                            , C = w + h + y + S;
                        if (c)
                            e.drawImage(i, o.x + d, w, u, h),
                                e.fillText(p, o.x + d + u + S, x),
                                e.font = g,
                                e.fillText(a, o.x + d, C),
                                e.font = f,
                                e.fillText(m, o.x + d + v + S, C);
                        else {
                            const t = e.measureText(p).width
                                , s = o.x + o.width - t - d
                                , n = e.measureText(m).width
                                , r = o.x + o.width - n - d;
                            e.fillText(p, s, x),
                                e.drawImage(i, s - u - S, w, u, h),
                                e.fillText(m, r, C),
                                e.font = g,
                                e.fillText(a, r - S - v, C),
                                e.font = f
                        }
                        e.restore()
                    }
                    )({
                        context: t,
                        playerIconImage: this.playerIconImage,
                        betCode: this.betSpotCode,
                        layout: this._layout,
                        betSpotShape: this.betSpotShape,
                        bettingStatistics: this.bettingStatistics,
                        currencySymbol: this.currencySymbol
                    })
                }
                drawNumericBetSpotContentForAdvancedGrid(t) {
                    const e = this.calculateBetSpotImageRect();
                    this.drawNumericBetSpotImage(t);
                    const i = this._layout.percentagePixels(1)
                        , s = this.calculateStatisticsPositionForAdvancedGrid(e, i);
                    (function (t, e, i) {
                        const { context: s, playerIconImage: n, layout: o, bettingStatistics: r } = t;
                        if (!n)
                            return;
                        s.save(),
                            s.fillStyle = E.FS(1);
                        const a = o.percentagePixels(o.rawConfig.playerIconSizeRatio)
                            , c = a * M
                            , l = R.dN(r.players)
                            , h = o.bettingStatisticsFontSize
                            , u = E.LE(h);
                        s.font = u;
                        const d = o.percentagePixels(1.2)
                            , p = h
                            , m = o.percentagePixels(.4)
                            , b = c + d + s.measureText(l).width;
                        let f;
                        switch (i) {
                            case T.Kx.Left:
                                f = 0;
                                break;
                            case T.Kx.Center:
                                f = .5 * -b;
                                break;
                            case T.Kx.Right:
                                f = -b
                        }
                        s.drawImage(n, e.x + f, e.y - .8 * p, c, a),
                            s.fillText(l, e.x + f + c + m, e.y),
                            s.restore()
                    }
                    )({
                        context: t,
                        playerIconImage: this.playerIconImage,
                        layout: this._layout,
                        bettingStatistics: this.bettingStatistics,
                        currencySymbol: this.currencySymbol
                    }, s.position, s.horizontalAlignment),
                        this.showPayout && this.drawBetSpotPayout(t, {
                            position: {
                                x: s.position.x,
                                y: s.position.y + i
                            },
                            horizontalAlignment: s.horizontalAlignment,
                            verticalAlignment: s.verticalAlignment
                        }, E.FS(.8))
                }
                calculateBetSpotImageRect() {
                    if (!this.betNumberImage)
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                    const t = this.betNumberImage.getFrameData(this.betSpotCode)
                        , e = t.width / t.height
                        , i = this._layout.overallHeight * this._layout.numericImageHeight
                        , s = i * e
                        , n = (r = s,
                            a = i,
                        {
                            x: (o = this.betSpotShape).x + .5 * o.width - .5 * r,
                            y: o.y + .5 * o.height - .5 * a
                        });
                    var o, r, a;
                    return Object.assign(Object.assign({}, n), {
                        width: s,
                        height: i
                    })
                }
                drawNumericBetSpotImage(t) {
                    if (!this.betNumberImage)
                        return;
                    const e = this.calculateBetSpotImageRect();
                    D.LN({
                        context: t,
                        spriteSheet: this.betNumberImage,
                        frame: this.betSpotCode,
                        size: {
                            x: e.width,
                            y: e.height
                        },
                        position: {
                            x: e.x,
                            y: e.y
                        }
                    })
                }
                calculateNumericBetSpotPayoutLocationForSimpleGrid() {
                    const t = this._layout.percentagePixels(1.2);
                    let e = {
                        x: 0,
                        y: 0
                    }
                        , i = T.Kx.Left
                        , s = T.Q4.Top;
                    switch (this.betSpotCode) {
                        case T.vm.One:
                            e = {
                                x: this.betSpotShape.x + t,
                                y: this.betSpotShape.y + t
                            };
                            break;
                        case T.vm.Two:
                            e = {
                                x: this.betSpotShape.x + this.betSpotShape.width - t,
                                y: this.betSpotShape.y + t
                            },
                                i = T.Kx.Right;
                            break;
                        case T.vm.Three:
                            e = {
                                x: this.betSpotShape.x + t,
                                y: this.betSpotShape.y + this.betSpotShape.height - t
                            },
                                s = T.Q4.Bottom;
                            break;
                        case T.vm.Four:
                            e = {
                                x: this.betSpotShape.x + this.betSpotShape.width - t,
                                y: this.betSpotShape.y + this.betSpotShape.height - t
                            },
                                i = T.Kx.Right,
                                s = T.Q4.Bottom
                    }
                    return {
                        position: e,
                        horizontalAlignment: i,
                        verticalAlignment: s
                    }
                }
                calculateStatisticsPositionForAdvancedGrid(t, e) {
                    let i = 0
                        , s = 0
                        , n = T.Kx.Left
                        , o = T.Q4.Top;
                    switch (this.betSpotCode) {
                        case T.vm.Two:
                        case T.vm.Four:
                            {
                                const e = this._layout.percentagePixels(3.5);
                                i = t.x + .5 * t.width,
                                    s = t.y + t.height + e,
                                    n = T.Kx.Center,
                                    o = T.Q4.Top;
                                break
                            }
                        case T.vm.One:
                        case T.vm.Three:
                            {
                                const r = this._layout.percentagePixels(2);
                                i = t.x + t.width + r,
                                    s = t.y + .5 * t.height - .5 * e,
                                    n = T.Kx.Left,
                                    o = T.Q4.Top;
                                break
                            }
                    }
                    return {
                        position: {
                            x: i,
                            y: s
                        },
                        horizontalAlignment: n,
                        verticalAlignment: o
                    }
                }
                drawImage(t, e, i, s, n) {
                    let o;
                    1 !== n && (o = t.globalAlpha,
                        t.globalAlpha = o * n),
                        t.drawImage(e, 0, 0, e.width, e.height, i, s, e.width, e.height),
                        void 0 !== o && (t.globalAlpha = o)
                }
                getCacheKey() {
                    return this.betSpotCode + "/" + this.betSpotShape.x + "/" + this.betSpotShape.y + "/" + this.betSpotShape.width + "/" + this.betSpotShape.height
                }
                createCacheHighlight(t, e) {
                    const i = document.createElement("canvas");
                    i.width = t,
                        i.height = e;
                    const s = i.getContext("2d");
                    return this.drawShape(s),
                        s.fillStyle = this.getShapeGradient(s, [{
                            offset: 0,
                            color: V[0]
                        }, {
                            offset: 1,
                            color: V[1]
                        }]),
                        s.fill(),
                        i
                }
                getShapeGradient(t, e, i = !0) {
                    const s = this.betSpotShape.x
                        , n = this.betSpotShape.y
                        , o = i ? this.betSpotShape.x : this.betSpotShape.x + this.betSpotShape.width
                        , r = i ? this.betSpotShape.y + this.betSpotShape.height : this.betSpotShape.y
                        , a = t.createLinearGradient(s, n, o, r);
                    for (const t of e)
                        a.addColorStop(t.offset, t.color);
                    return a
                }
                getBetSpotTextValueFont(t) {
                    return `600 ${t.fontSize}px ${L.LZ}`
                }
                shouldRedraw() {
                    return this.highlight
                }
            }
            var W;
            (function (t) {
                t.LeftTop = "DecorationPosition.LeftTop",
                    t.RightTop = "DecorationPosition.RightTop",
                    t.RightBottom = "DecorationPosition.RightBottom",
                    t.LeftBottom = "DecorationPosition.LeftBottom"
            }
            )(W || (W = {}));
            const U = [W.LeftTop, W.RightTop, W.RightBottom, W.LeftBottom]
                , K = {
                    [W.LeftTop]: 0,
                    [W.RightTop]: .5 * Math.PI,
                    [W.LeftBottom]: 3 * Math.PI * .5,
                    [W.RightBottom]: Math.PI
                };
            function X(t, e) {
                const i = t.width / 3
                    , s = e;
                return [[{
                    x: t.x + t.width,
                    y: t.y
                }, {
                    x: t.x + t.width - i,
                    y: t.y
                }, {
                    x: t.x + t.width - i,
                    y: t.y + i - s
                }], [{
                    x: t.x + t.width - i,
                    y: t.y + i + s
                }, {
                    x: t.x + t.width - i,
                    y: t.y + t.height
                }, {
                    x: t.x + i,
                    y: t.y + t.height
                }, {
                    x: t.x + i,
                    y: t.y + 2 * i + s
                }], [{
                    x: t.x + i,
                    y: t.y + 2 * i - s
                }, {
                    x: t.x + i,
                    y: t.y
                }, {
                    x: t.x,
                    y: t.y
                }, {
                    x: t.x,
                    y: t.y + i
                }, {
                    x: t.x + i - s,
                    y: t.y + i
                }], [{
                    x: t.x + i + s,
                    y: t.y + i
                }, {
                    x: t.x + t.width,
                    y: t.y + i
                }, {
                    x: t.x + t.width,
                    y: t.y + 2 * i
                }, {
                    x: t.x + t.width - i + s,
                    y: t.y + 2 * i
                }], [{
                    x: t.x + t.width - i - s,
                    y: t.y + 2 * i
                }, {
                    x: t.x,
                    y: t.y + 2 * i
                }, {
                    x: t.x,
                    y: t.y + t.height
                }]]
            }
            const Z = [{
                offset: 0,
                color: "rgb(177, 108, 33)"
            }, {
                offset: .2,
                color: "rgb(244, 188, 100)"
            }, {
                offset: .42,
                color: "rgb(251, 218, 181)"
            }, {
                offset: .7,
                color: "rgb(207, 141, 54)"
            }, {
                offset: 1,
                color: "rgb(177, 108, 33)"
            }];
            class Y {
                constructor() {
                    this.canvas = null,
                        this.enabled = !1
                }
                init(t) {
                    this.canvas = t,
                        t.addElement(this)
                }
                setLayout(t) {
                    this._layout = t
                }
                toggleEnable(t) {
                    var e;
                    this.enabled = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                draw(t) {
                    var e;
                    if (!(null === (e = this._layout) || void 0 === e ? void 0 : e.isAdvanced))
                        return !1;
                    const { context: i } = t;
                    return this._layout.updateActualAreaSize(t.width),
                        i.save(),
                        this.enabled || (i.globalAlpha *= E.rh),
                        this.drawCenterOrnamets(i),
                        this.drawSingleGradientBorderLines(i),
                        i.restore(),
                        !1
                }
                dispose() {
                    this.canvas && this.canvas.removeElement(this)
                }
                drawCenterOrnamets(t) {
                    const e = this.calculateOrnamentRects()
                        , i = this.calculateOrnamentBorderLines(e)
                        , s = this.calculateDiagonallyOrnamentBorderLines(e);
                    for (const i of e) {
                        const e = {
                            x: i.x + .5 * i.width,
                            y: i.y + .5 * i.height
                        };
                        t.translate(e.x, e.y),
                            t.rotate(K[i.position]),
                            t.translate(-e.x, -e.y),
                            this.drawOrnament(t, i),
                            t.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    for (const e of s)
                        this.drawLine(t, e);
                    for (const e of i)
                        this.drawLine(t, e)
                }
                drawOrnament(t, e) {
                    var i, s;
                    t.strokeStyle = E.c9;
                    const n = null !== (s = null === (i = this._layout) || void 0 === i ? void 0 : i.strokeWidth) && void 0 !== s ? s : 0;
                    t.lineWidth = n,
                        t.beginPath();
                    const o = X(e, n);
                    for (const e of o)
                        D.MC({
                            context: t,
                            points: e,
                            createPath: !1
                        });
                    t.stroke()
                }
                drawLine(t, e) {
                    t.beginPath(),
                        t.moveTo(e.from.x, e.from.y),
                        t.lineTo(e.to.x, e.to.y),
                        t.lineWidth = e.width,
                        "string" == typeof e.color ? t.strokeStyle = e.color : t.strokeStyle = this.getLineGradient(t, e.color, e),
                        t.stroke()
                }
                calculateOrnamentRects() {
                    if (!this._layout)
                        return [];
                    const t = this._layout.betSpotSizeData(T.vm.One)
                        , e = this._layout.betSpotSizeData(T.vm.Three);
                    if (!t || !e)
                        return [];
                    const i = []
                        , s = this._layout.ornamentOffset + this._layout.strokeWidth
                        , n = .4 * t.height;
                    for (const o of U) {
                        let r;
                        switch (o) {
                            case W.LeftTop:
                                r = {
                                    x: t.x + s,
                                    y: t.y + s
                                };
                                break;
                            case W.RightTop:
                                r = {
                                    x: t.x + t.width - n - s,
                                    y: t.y + s
                                };
                                break;
                            case W.LeftBottom:
                                r = {
                                    x: e.x + s,
                                    y: e.y + e.height - n - s
                                };
                                break;
                            case W.RightBottom:
                                r = {
                                    x: e.x + e.width - n - s,
                                    y: e.y + e.height - n - s
                                }
                        }
                        i.push({
                            x: Math.round(r.x),
                            y: Math.round(r.y),
                            width: Math.round(n),
                            height: Math.round(n),
                            position: o,
                            color: E.c9
                        })
                    }
                    return i
                }
                calculateOrnamentBorderLines(t) {
                    var e, i;
                    const s = [];
                    for (let n = 0; n < t.length; n++) {
                        const o = t[n];
                        let r, a, c;
                        switch (r = n === t.length - 1 ? t[0] : t[n + 1],
                        o.position) {
                            case W.LeftTop:
                                a = {
                                    x: o.x + o.width,
                                    y: o.y
                                },
                                    c = {
                                        x: r.x,
                                        y: r.y
                                    };
                                break;
                            case W.RightTop:
                                a = {
                                    x: o.x + o.width,
                                    y: o.y + o.height
                                },
                                    c = {
                                        x: r.x + r.width,
                                        y: r.y
                                    };
                                break;
                            case W.LeftBottom:
                                a = {
                                    x: o.x,
                                    y: o.y
                                },
                                    c = {
                                        x: r.x,
                                        y: r.y + o.height
                                    };
                                break;
                            case W.RightBottom:
                                a = {
                                    x: o.x,
                                    y: o.y + o.height
                                },
                                    c = {
                                        x: r.x + r.width,
                                        y: r.y + r.height
                                    }
                        }
                        s.push({
                            from: a,
                            to: c,
                            color: Z,
                            width: null !== (i = null === (e = this._layout) || void 0 === e ? void 0 : e.strokeWidth) && void 0 !== i ? i : 1
                        })
                    }
                    return s
                }
                calculateDiagonallyOrnamentBorderLines(t) {
                    if (!this._layout)
                        return [];
                    const e = []
                        , i = 1.1 * this._layout.scale;
                    for (const s of t) {
                        let t, n;
                        switch (s.position) {
                            case W.LeftTop:
                                {
                                    const e = this._layout.betSpotSizeData(T.vm.Small);
                                    if (!e)
                                        continue;
                                    t = {
                                        x: e.x,
                                        y: e.y
                                    },
                                        n = {
                                            x: s.x + s.width - i,
                                            y: s.y + s.width - i
                                        };
                                    break
                                }
                            case W.RightTop:
                                {
                                    const e = this._layout.betSpotSizeData(T.vm.Big);
                                    if (!e)
                                        continue;
                                    t = {
                                        x: e.x + e.width,
                                        y: e.y
                                    },
                                        n = {
                                            x: s.x + i,
                                            y: s.y + s.width - i
                                        };
                                    break
                                }
                            case W.LeftBottom:
                                {
                                    const e = this._layout.betSpotSizeData(T.vm.Odd);
                                    if (!e)
                                        continue;
                                    t = {
                                        x: e.x,
                                        y: e.y + e.height
                                    },
                                        n = {
                                            x: s.x + s.width - i,
                                            y: s.y + i
                                        };
                                    break
                                }
                            case W.RightBottom:
                                {
                                    const e = this._layout.betSpotSizeData(T.vm.Even);
                                    if (!e)
                                        continue;
                                    t = {
                                        x: e.x + e.width,
                                        y: e.y + e.height
                                    },
                                        n = {
                                            x: s.x + i,
                                            y: s.y + i
                                        };
                                    break
                                }
                        }
                        e.push({
                            from: t,
                            to: n,
                            color: E.c9,
                            width: this._layout.strokeWidth
                        })
                    }
                    return e
                }
                getLineGradient(t, e, i) {
                    const s = i.from.x
                        , n = i.from.y
                        , o = i.to.x
                        , r = i.to.y
                        , a = t.createLinearGradient(s, n, o, r);
                    for (const t of e)
                        a.addColorStop(t.offset, t.color);
                    return a
                }
                drawSingleGradientBorderLines(t) {
                    const e = [...this.getBetspotBorderLineConfig(T.vm.Kwok12, T.vm.Kwok23), ...this.getBetspotBorderLineConfig(T.vm.Kwok41, T.vm.Kwok34)];
                    for (const i of e)
                        this.drawLine(t, i)
                }
                getBetspotBorderLineConfig(t, e) {
                    if (!this._layout)
                        return [];
                    const i = this._layout.betSpotSizeData(t)
                        , s = this._layout.betSpotSizeData(e)
                        , n = .75 * this._layout.strokeWidth;
                    return [{
                        from: {
                            x: i.x,
                            y: i.y
                        },
                        to: {
                            x: s.x,
                            y: s.y + s.height
                        },
                        color: Z,
                        width: n
                    }, {
                        from: {
                            x: i.x + i.width,
                            y: i.y
                        },
                        to: {
                            x: s.x + s.width,
                            y: s.y + s.height
                        },
                        color: Z,
                        width: n
                    }]
                }
            }
            class q {
                constructor(t) {
                    this.position = t,
                        this.canvas = null,
                        this.ornamentSizeRatio = .4,
                        this.enabled = !1
                }
                init(t) {
                    this.canvas = t,
                        t.addElement(this)
                }
                setLayout(t) {
                    this._layout = t
                }
                toggleEnable(t) {
                    var e;
                    this.enabled = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                draw(t) {
                    if (!this._layout || this._layout.isAdvanced)
                        return !1;
                    const { context: e } = t;
                    e.save(),
                        this.enabled || (e.globalAlpha *= E.rh),
                        this._layout.updateActualAreaSize(t.width);
                    const i = this.calculateRect(this.position)
                        , s = {
                            x: i.x + .5 * i.width,
                            y: i.y + .5 * i.height
                        };
                    return e.translate(s.x, s.y),
                        e.rotate(K[this.position]),
                        e.translate(-s.x, -s.y),
                        this.drawGradientBackground(e, i),
                        this.drawDecorations(e, i),
                        e.setTransform(1, 0, 0, 1, 0, 0),
                        e.restore(),
                        !1
                }
                dispose() {
                    this.canvas && this.canvas.removeElement(this)
                }
                drawGradientBackground(t, e) {
                    const i = t.createLinearGradient(e.x, e.y, e.x, e.y + e.height)
                        , s = E.PH(.3);
                    i.addColorStop(0, s[0]),
                        i.addColorStop(1, s[1]),
                        t.fillStyle = i,
                        D.MC({
                            context: t,
                            points: this.calculateBackgroundPath(e)
                        }),
                        t.fill()
                }
                drawDecorations(t, e) {
                    var i, s;
                    t.strokeStyle = E.c9;
                    const n = null !== (s = null === (i = this._layout) || void 0 === i ? void 0 : i.strokeWidth) && void 0 !== s ? s : 0;
                    t.lineWidth = n,
                        t.beginPath();
                    const o = this.calculateDecorationLinesPaths(e, n);
                    for (const e of o)
                        D.MC({
                            context: t,
                            points: e,
                            createPath: !1
                        });
                    t.stroke()
                }
                calculateRect(t) {
                    const e = this._layout;
                    if (!e)
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                    let i, s;
                    switch (t) {
                        case W.LeftTop:
                            i = e.betSpotSizeData(T.vm.Small),
                                s = e.betSpotSizeData(T.vm.Odd);
                            break;
                        case W.RightTop:
                            i = e.betSpotSizeData(T.vm.Small),
                                s = e.betSpotSizeData(T.vm.Even);
                            break;
                        case W.LeftBottom:
                            i = e.betSpotSizeData(T.vm.Big),
                                s = e.betSpotSizeData(T.vm.Odd);
                            break;
                        case W.RightBottom:
                            i = e.betSpotSizeData(T.vm.Big),
                                s = e.betSpotSizeData(T.vm.Even)
                    }
                    return {
                        x: s.x,
                        y: i.y,
                        width: s.width,
                        height: i.height
                    }
                }
                calculateBackgroundPath(t) {
                    return [{
                        x: t.x + t.width * this.ornamentSizeRatio,
                        y: t.y
                    }, {
                        x: t.x + t.width,
                        y: t.y
                    }, {
                        x: t.x + t.width,
                        y: t.y + t.height
                    }, {
                        x: t.x,
                        y: t.y + t.height
                    }, {
                        x: t.x,
                        y: t.y + t.height * this.ornamentSizeRatio
                    }, {
                        x: t.x + t.width * this.ornamentSizeRatio,
                        y: t.y + t.height * this.ornamentSizeRatio
                    }]
                }
                calculateDecorationLinesPaths(t, e) {
                    if (!this._layout)
                        return [];
                    const i = t.width * this.ornamentSizeRatio;
                    return [...X(Object.assign(Object.assign({}, t), {
                        width: t.width - i,
                        height: t.height - i
                    }), e), [{
                        x: t.x + t.width - i,
                        y: t.y
                    }, {
                        x: t.x + t.width,
                        y: t.y
                    }], [{
                        x: t.x,
                        y: t.y + t.height
                    }, {
                        x: t.x,
                        y: t.y + t.height - i
                    }]]
                }
            }
            var Q = i(517109)
                , $ = i(563708)
                , J = i(725262)
                , tt = i(250930);
            const et = 640
                , it = 360;
            function st(t) {
                if (void 0 === t.offsetX) {
                    const e = t.target.getBoundingClientRect();
                    Object.defineProperties(t, {
                        offsetX: {
                            writable: !1,
                            value: t.pageX - Math.round(e.left)
                        },
                        offsetY: {
                            writable: !1,
                            value: t.pageY - Math.round(e.top)
                        }
                    })
                }
            }
            class nt {
                constructor(t, e, i = []) {
                    this.currentCursor = "default",
                        this.currentHoverIdx = -1,
                        this.moveListener = t => {
                            var e;
                            st(t);
                            for (const e of this.overlayComponents) {
                                const i = e.onPointerMove(t);
                                if (null != i)
                                    return void (i !== this.currentCursor && (this.currentCursor = i,
                                        this.container.style.cursor = i))
                            }
                            const i = this.getCallbackIndex(t)
                                , s = this.callbacks[i];
                            if (i > -1 && s) {
                                const n = s.onPointerMove(t);
                                null !== n && n !== this.currentCursor && (this.currentCursor = n,
                                    this.container.style.cursor = this.currentCursor),
                                    i !== this.currentHoverIdx && (this.clearHover(t),
                                        null === (e = s.onHover) || void 0 === e || e.call(s, t, !0),
                                        this.currentHoverIdx = i)
                            } else
                                "default" !== this.currentCursor && (this.currentCursor = "default",
                                    this.container.style.cursor = this.currentCursor),
                                    this.clearHover(t)
                        }
                        ,
                        this.clickListener = t => {
                            st(t);
                            for (const e of this.overlayComponents)
                                if (!0 === e.onClick(t))
                                    return;
                            const e = this.getCallbackIndex(t);
                            e > -1 && (0,
                                this.callbacks[e].onClick)(t)
                        }
                        ,
                        this.leaveListener = t => {
                            st(t),
                                this.clearHover(t)
                        }
                        ,
                        this.container = t;
                    const s = this.initPixels(e);
                    this.callbackIndices = s.callbackIndices,
                        this.firstPixelIndex = s.firstIndex,
                        this.callbacks = s.callbacks,
                        this.overlayComponents = i.slice().reverse(),
                        this.addEventListeners()
                }
                destroy() {
                    this.removeEventListeners()
                }
                clearHover(t) {
                    var e;
                    if (this.currentHoverIdx > -1) {
                        const i = null === (e = this.callbacks[this.currentHoverIdx]) || void 0 === e ? void 0 : e.onHover;
                        null == i || i(t, !1),
                            this.currentHoverIdx = -1
                    }
                }
                getCallbackIndex(t) {
                    const e = t.offsetX
                        , i = t.offsetY
                        , s = Math.round(e / this.container.clientWidth * et)
                        , n = Math.round(i / this.container.clientHeight * it) * et + s - this.firstPixelIndex;
                    if (n < 0)
                        return -1;
                    const o = this.callbackIndices[n];
                    return (void 0 !== o ? o : 0) - 1
                }
                addEventListeners() {
                    this.container.style.touchAction = "manipulation",
                        "undefined" != typeof PointerEvent ? (this.container.addEventListener("pointermove", this.moveListener),
                            this.container.addEventListener("pointerleave", this.leaveListener)) : (this.container.addEventListener("mousemove", this.moveListener),
                                this.container.addEventListener("mouseleave", this.leaveListener)),
                        this.container.addEventListener("click", this.clickListener)
                }
                removeEventListeners() {
                    this.container.removeEventListener("pointermove", this.moveListener),
                        this.container.removeEventListener("pointerleave", this.leaveListener),
                        this.container.removeEventListener("mousemove", this.moveListener),
                        this.container.removeEventListener("mouseleave", this.leaveListener),
                        this.container.removeEventListener("click", this.clickListener)
                }
                initPixels(t) {
                    const e = document.createElement("canvas");
                    e.width = et,
                        e.height = it;
                    const i = e.getContext("2d");
                    i.fillStyle = "rgba(0,0,0,0)",
                        i.fillRect(0, 0, et, it);
                    const s = []
                        , n = 10485760;
                    let o = n;
                    const r = {
                        width: et,
                        height: it,
                        context: i,
                        fillWithCallback: t => {
                            s.push(t),
                                o += 4271,
                                i.fillStyle = `#${o.toString(16)}`,
                                i.fill()
                        }
                    };
                    for (const e of t)
                        e.setupHitTesting(r);
                    const a = i.getImageData(0, 0, et, it).data;
                    return Object.assign({
                        callbacks: s
                    }, this.extractPixels(a, n, 4271))
                }
                extractPixels(t, e, i) {
                    const s = 230400;
                    let n, o = 230401;
                    for (let r = 0; r < t.length; r += 4) {
                        const a = 256 * (256 * t[r] + t[r + 1]) + t[r + 2];
                        if (0 !== a) {
                            void 0 === n && (o = Math.floor(r / 4),
                                n = "undefined" != typeof Uint8Array ? new Uint8Array(s - o) : new Array(s - o));
                            const t = Math.floor(r / 4) - o
                                , c = (a - e) / i;
                            Math.abs(Math.round(c) - c) < .1 / i && (n[t] = Math.round(c))
                        }
                    }
                    return {
                        firstIndex: o,
                        callbackIndices: void 0 !== n ? n : []
                    }
                }
            }
            class ot {
                constructor(t) {
                    this.props = t,
                        this.hitTesting = null,
                        this.betSpots = {},
                        this.simpleDecorations = [],
                        this.onClickListeners = [],
                        this.bets = {},
                        this.onBetSpotClick = t => {
                            for (const e of this.onClickListeners)
                                e(t)
                        }
                        ,
                        this.layout = new Q.f(this.props.bettingGridConfig);
                    for (const e of T.tz)
                        this.betSpots[e] = new H({
                            betSpotCode: e,
                            layout: this.layout,
                            onClickHandler: this.onBetSpotClick,
                            payoutRate: L.ol[L.Tb[e]],
                            currencySymbol: this.props.currencySymbol,
                            onHoverHandler: this.onHoverHandler(t.tooltipProcessor, t.isLowRisk)
                        });
                    for (const t of U)
                        this.simpleDecorations.push(new q(t));
                    this.advancedDecoration = new Y
                }
                init(t, e = 1) {
                    for (const e of this.simpleDecorations)
                        e.init(t);
                    this.updateSimpleDecorations(this.layout);
                    for (const i of T.tz)
                        this.betSpots[i].init(t),
                            this.betSpots[i].setSizeRatio(e);
                    this.advancedDecoration.init(t),
                        this.advancedDecoration.setLayout(this.layout),
                        this.updateHitTesting(t, this.layout.isAdvanced),
                        this.props.gameAssetsPromise.then((t => {
                            const e = new J.V(t.betNumbersIcons, $.a);
                            for (const i of T.D$) {
                                const s = this.betSpots[i];
                                s.setBetNumberImage(e),
                                    s.setPlayerIconImage(t.playerIcon)
                            }
                        }
                        ))
                }
                addOnClickListener(t) {
                    this.onClickListeners.push(t)
                }
                toggleEnable(t) {
                    for (const e of T.tz)
                        this.betSpots[e].toggleEnable(t);
                    this.advancedDecoration.toggleEnable(t);
                    for (const e of this.simpleDecorations)
                        e.toggleEnable(t)
                }
                toggleWinningBetSpots(t) {
                    for (const e of T.tz)
                        this.betSpots[e].toggleWinningBetSpot(!!t[e])
                }
                setShowPayouts(t) {
                    for (const e of T.tz)
                        this.betSpots[e].setShowPayout(t)
                }
                updateBettingGridConfig(t, e) {
                    this.layout = new Q.f(e);
                    for (const t of T.tz)
                        this.betSpots[t].setLayout(this.layout);
                    this.updateSimpleDecorations(this.layout),
                        this.advancedDecoration.setLayout(this.layout),
                        this.updateHitTesting(t, this.layout.isAdvanced),
                        t.scheduleDraw()
                }
                updateBettingStatistics(t) {
                    if (t)
                        for (const e of T.D$)
                            this.betSpots[e].setBettingStatistics(t[e]);
                    else
                        for (const t of T.D$)
                            this.betSpots[t].setBettingStatistics({
                                amount: 0,
                                players: 0
                            })
                }
                updateChips(t) {
                    for (const e of T.tz) {
                        const i = void 0 !== t.bet[e] || void 0 !== t.payoutBet[e];
                        this.betSpots[e].setHasChips(i)
                    }
                }
                updateRatio(t, e) {
                    for (const t of T.tz)
                        this.betSpots[t].setSizeRatio(e);
                    this.updateHitTesting(t, this.layout.isAdvanced)
                }
                updateBets(t) {
                    this.bets = t
                }
                dispose() {
                    this.hitTesting && this.hitTesting.destroy(),
                        this.onClickListeners.length = 0;
                    for (const t of T.tz)
                        this.betSpots[t] && this.betSpots[t].dispose();
                    for (const t of this.simpleDecorations)
                        t.dispose();
                    this.advancedDecoration.dispose()
                }
                updateSimpleDecorations(t) {
                    for (const e of this.simpleDecorations)
                        e.setLayout(t)
                }
                updateHitTesting(t, e) {
                    const i = [];
                    for (const t of T.tz)
                        (e || T.jU.includes(t)) && i.push(this.betSpots[t]);
                    this.applyHitTesting(t, i)
                }
                applyHitTesting(t, e) {
                    this.hitTesting && (this.hitTesting.destroy(),
                        this.hitTesting = null),
                        this.hitTesting = new nt(t.canvas, e)
                }
                onHoverHandler(t, e) {
                    return i => {
                        e && O.aL(i, this.bets) && (null == t || t.showBetSpotValidationTooltip({
                            type: tt.XM.Warning,
                            betCode: i,
                            betCodeValue: this.bets[i] || 0,
                            payload: {
                                code: tt.QE.OppositeBets
                            }
                        }))
                    }
                }
            }
            var rt = i(653106)
                , at = i(505455)
                , ct = i(994373)
                , lt = i(390634);
            const ht = c.DS.IS_DESKTOP ? 15 : 0
                , ut = t => {
                    var e, { stackToTop: i } = t, o = s._T(t, ["stackToTop"]);
                    let a = 0;
                    const l = r.useRef(null)
                        , { updateChips: h, updateRef: u, canvasRef: d } = function ({ bet: t, payoutBet: e, chipRects: i, chipColors: s, containerSize: n, isBettingEnabled: o, bettingGridConfig: a, gameHeight: c, gameWidth: l, currencySymbol: h, gameAssetsPromise: u, showPayouts: d, setReactReference: p, bettingStatistics: m, tooltipProcessor: b, isLowRisk: f, flyingChipsProcessor: g }) {
                            const v = r.useRef(null)
                                , y = r.useRef(null)
                                , S = r.useRef(null);
                            r.useEffect((() => (S.current || (S.current = new rt.W),
                                () => {
                                    y.current && v.current && S.current && (v.current.dispose(),
                                        S.current.dispose(y.current),
                                        y.current.destroy(),
                                        y.current = null)
                                }
                            )), []);
                            const w = r.useCallback((o => {
                                if (!v.current || !S.current || !y.current)
                                    return;
                                const r = (null == o ? void 0 : o.betSpot) ? j.Z(t, null == o ? void 0 : o.betSpot) : t;
                                S.current.updateChips({
                                    dragged: !!(null == o ? void 0 : o.betSpot),
                                    bet: r,
                                    payoutBet: e,
                                    chipRects: i,
                                    chipColors: s,
                                    canvas: y.current,
                                    bettingGridConfig: a,
                                    chipScaleFactor: at.G({
                                        width: l,
                                        height: c
                                    }, n.y),
                                    flyingChipsProcessor: g
                                }),
                                    v.current.updateChips({
                                        bet: r,
                                        payoutBet: e
                                    })
                            }
                            ), [t, a, s, i, n.y, c, l, e])
                                , x = r.useCallback((() => {
                                    v.current = new ot({
                                        bettingGridConfig: a,
                                        currencySymbol: h,
                                        gameAssetsPromise: u,
                                        tooltipProcessor: b,
                                        isLowRisk: f
                                    }),
                                        v.current.toggleEnable(o),
                                        v.current.toggleWinningBetSpots(e),
                                        v.current.setShowPayouts(d)
                                }
                                ), [a, h, u, o, e, d])
                                , C = r.useCallback((t => {
                                    if (v.current || x(),
                                        t && !y.current && v.current) {
                                        y.current = new lt.X(t);
                                        const e = n.x / n.y;
                                        v.current.init(y.current, e),
                                            v.current.updateBettingStatistics(m),
                                            w(),
                                            p(ct.w.BettingGrid, t)
                                    }
                                }
                                ), [m, n.x, n.y, x, p, w]);
                            return r.useEffect((() => {
                                y.current && v.current && (v.current.updateBettingGridConfig(y.current, a),
                                    w())
                            }
                            ), [a, w]),
                                r.useEffect((() => {
                                    if (v.current && y.current) {
                                        const t = n.x / n.y;
                                        v.current.updateRatio(y.current, t),
                                            y.current.forceResize()
                                    }
                                }
                                ), [n.x, n.y]),
                                r.useEffect((() => {
                                    var t;
                                    null === (t = v.current) || void 0 === t || t.updateBettingStatistics(m)
                                }
                                ), [m]),
                                r.useEffect((() => {
                                    var t;
                                    null === (t = v.current) || void 0 === t || t.toggleEnable(o)
                                }
                                ), [o]),
                                r.useEffect((() => {
                                    var t;
                                    null === (t = v.current) || void 0 === t || t.toggleWinningBetSpots(e)
                                }
                                ), [e]),
                                r.useEffect((() => {
                                    var t;
                                    null === (t = v.current) || void 0 === t || t.setShowPayouts(d)
                                }
                                ), [d]),
                                r.useEffect((() => {
                                    var e;
                                    null === (e = v.current) || void 0 === e || e.updateBets(t)
                                }
                                ), [t]),
                            {
                                updateChips: w,
                                updateRef: C,
                                canvasRef: y
                            }
                        }(o)
                        , { bettingGridConfig: p, containerSize: m, bet: b, chipColors: f } = o
                        , g = {
                            width: `${m.x}px`,
                            height: "100%"
                        };
                    if (!i) {
                        const t = p.overallWidth / p.overallHeight;
                        a = Math.max(0, m.y - m.x / t - ht),
                            g.marginTop = `${a}px`
                    }
                    const { draggedBetSpot: v, isDragAndDropEnabled: y } = function ({ bettingGridConfig: t, gridContainerRef: e, canvasRef: i, marginTop: s, updateChips: n, bet: o, gamePhase: a, betProcessor: l, isLowRisk: h, bets: u }) {
                        const [d, p] = r.useState(null)
                            , m = r.useRef(!1)
                            , b = r.useRef(!1)
                            , f = r.useRef(null)
                            , g = r.useRef(null)
                            , v = r.useRef(null)
                            , y = r.useCallback((t => {
                                var e;
                                return (null == a ? void 0 : a.currentPhase) === T.rY.BetsOpen && (!t || t === (null === (e = i.current) || void 0 === e ? void 0 : e.canvas))
                            }
                            ), [i, null == a ? void 0 : a.currentPhase])
                            , S = r.useCallback(((i, n) => {
                                if (!e.current)
                                    return;
                                const { betSpots: o, overallWidth: r } = t;
                                return function (t, e, i, s, n, o) {
                                    const r = i.getBoundingClientRect()
                                        , a = s / r.width;
                                    return function (t, e, i) {
                                        const s = Object.keys(i).filter((s => {
                                            const n = i[s];
                                            if (n)
                                                return "Poly" === (null == n ? void 0 : n.type) ? function (t, e) {
                                                    const i = t[0]
                                                        , s = t[1];
                                                    let n = !1;
                                                    for (let t = 0, o = e.length - 1; t < e.length; o = t++) {
                                                        const r = e[t][0]
                                                            , a = e[t][1]
                                                            , c = e[o][0]
                                                            , l = e[o][1];
                                                        a > s != l > s && i < (c - r) * (s - a) / (l - a) + r && (n = !n)
                                                    }
                                                    return n
                                                }([t, e], n.points.map((({ x: t, y: e }) => [t, e]))) : function (t, e, i) {
                                                    return i.x <= t && t <= i.x + i.width && i.y <= e && e <= i.y + i.height
                                                }(t, e, n)
                                        }
                                        ));
                                        return Object.values(T.vm).find((t => s.includes(t)))
                                    }((t - r.x) * a, (e - r.y - n) * a, o)
                                }(i, n, e.current, r, s, o)
                            }
                            ), [t, e, s])
                            , w = r.useCallback((({ x: t, y: e, target: i }) => {
                                if (!y(i))
                                    return;
                                const s = S(t, e);
                                s && (f.current && n(),
                                    v.current = {
                                        startPosition: {
                                            x: t,
                                            y: e
                                        },
                                        betSpot: s,
                                        amount: P.Z(o, s)
                                    },
                                    m.current = !1,
                                    b.current = !1,
                                    f.current = Date.now())
                            }
                            ), [o, S, y, n])
                            , x = r.useCallback((({ clientX: t, clientY: e, target: i }) => {
                                w({
                                    x: t,
                                    y: e,
                                    target: i
                                })
                            }
                            ), [w])
                            , C = r.useCallback((({ changedTouches: t }) => {
                                const { clientX: e, clientY: i, target: s } = t[0];
                                w({
                                    x: e,
                                    y: i,
                                    target: s
                                })
                            }
                            ), [w])
                            , A = r.useCallback(((t, e, s) => {
                                const { placeChip: o, moveChip: r, removeChip: a } = l;
                                if (t && i.current) {
                                    if (!e && s)
                                        return a(t);
                                    if (t !== e && e && s) {
                                        const i = O.kb(e)
                                            , s = null == i ? void 0 : i.includes(t);
                                        return h && O.aL(e, u) && !s ? n() : r(e)
                                    }
                                    if (t === e && g.current && f.current) {
                                        if (g.current - f.current < 200 && !m.current || !m.current)
                                            return o(e);
                                        n()
                                    }
                                }
                            }
                            ), [l, u, i, h, n])
                            , B = r.useCallback((({ x: t, y: e }) => {
                                var i, s;
                                if (!y())
                                    return;
                                const { endDrag: n } = l
                                    , o = S(t, e);
                                g.current = Date.now();
                                const r = null === (i = v.current) || void 0 === i ? void 0 : i.betSpot
                                    , a = null === (s = v.current) || void 0 === s ? void 0 : s.amount;
                                A(r, o, a),
                                    n(),
                                    m.current = !1,
                                    p(null),
                                    v.current = null
                            }
                            ), [S, y, A, l])
                            , _ = r.useCallback((({ clientX: t, clientY: e }) => {
                                B({
                                    x: t,
                                    y: e
                                })
                            }
                            ), [B])
                            , j = r.useCallback((({ changedTouches: t }) => {
                                const { clientX: e, clientY: i } = t[0];
                                B({
                                    x: e,
                                    y: i
                                })
                            }
                            ), [B])
                            , k = r.useCallback((({ clientX: t, clientY: e }) => {
                                (e <= 0 || t <= 0 || t >= window.innerWidth || e >= window.innerHeight) && B({
                                    x: t,
                                    y: e
                                })
                            }
                            ), [B])
                            , E = r.useCallback((() => {
                                var t;
                                if (b.current || !i.current || !y() || !v.current || !(null === (t = v.current) || void 0 === t ? void 0 : t.amount))
                                    return;
                                const { startDrag: e } = l;
                                m.current = !0,
                                    b.current = !0,
                                    p(v.current),
                                    e(v.current.betSpot),
                                    n(v.current)
                            }
                            ), [i, y, l, n]);
                        return r.useEffect((() => {
                            var t;
                            if ((null == a ? void 0 : a.currentPhase) !== T.rY.BetsOpen) {
                                const e = null === (t = i.current) || void 0 === t ? void 0 : t.canvas
                                    , { endDrag: s, placeChip: n } = l
                                    , o = ({ clientX: t, clientY: e }) => {
                                        const i = S(t, e);
                                        i && n(i)
                                    }
                                    ;
                                return s(),
                                    m.current = !1,
                                    p(null),
                                    v.current = null,
                                    e && e.addEventListener("click", o),
                                    () => {
                                        null == e || e.removeEventListener("click", o)
                                    }
                            }
                            return c.DS.IS_DESKTOP && document.body.addEventListener("mousedown", x),
                                document.body.addEventListener("touchstart", C),
                                document.body.addEventListener("mousemove", E),
                                document.body.addEventListener("touchmove", E),
                                document.body.addEventListener("mouseup", _),
                                document.body.addEventListener("mouseout", k),
                                document.body.addEventListener("touchend", j),
                                document.body.addEventListener("touchcancel", j),
                                () => {
                                    document.body.removeEventListener("mousedown", x),
                                        document.body.removeEventListener("touchstart", C),
                                        document.body.removeEventListener("mousemove", E),
                                        document.body.removeEventListener("touchmove", E),
                                        document.body.removeEventListener("mouseup", _),
                                        document.body.removeEventListener("mouseout", k),
                                        document.body.removeEventListener("touchend", j),
                                        document.body.removeEventListener("touchcancel", j)
                                }
                        }
                        ), [i, null == a ? void 0 : a.currentPhase, S, E, x, k, _, j, C, l]),
                        {
                            draggedBetSpot: d,
                            isDragAndDropEnabled: y
                        }
                    }({
                        bet: b,
                        canvasRef: d,
                        marginTop: a,
                        updateChips: h,
                        gridContainerRef: l,
                        bettingGridConfig: p,
                        gamePhase: o.gamePhase,
                        betProcessor: o.betProcessor,
                        isLowRisk: o.isLowRisk,
                        bets: o.bets
                    })
                        , S = (null === (e = l.current) || void 0 === e ? void 0 : e.offsetWidth) || 0
                        , w = Math.round(S * p.chipSize);
                    return n.jsx("div", {
                        className: "bettingContainer--4e280",
                        style: {
                            height: `${m.y}px`
                        },
                        children: n.jsxs("div", {
                            ref: l,
                            children: [d.current && v && (null == v ? void 0 : v.amount) && y() && n.jsx(_, {
                                chipSize: w,
                                chipColors: f,
                                amount: null == v ? void 0 : v.amount,
                                containerRef: l,
                                startPosition: v.startPosition
                            }), n.jsx("div", {
                                style: g,
                                ref: u,
                                className: "bettingContainerLayer--62fb5",
                                "data-role": "canvas-hit-testing"
                            })]
                        })
                    })
                }
                , dt = o.Pi((() => {
                    var t;
                    const e = a.oR();
                    return n.jsx(ut, {
                        containerSize: e.bettingGrid.size,
                        isBettingEnabled: e.betProcessor.isBettingEnabled,
                        bet: e.bets.bet,
                        payoutBet: e.result.payoutBet,
                        bettingGridConfig: e.bettingGrid.config,
                        gameHeight: e.agSubscriber.gameDimension.containerHeight,
                        gameWidth: e.agSubscriber.gameDimension.containerWidth,
                        setReactReference: e.references.setReactReference,
                        bettingStatistics: e.bettingStatistics.statistics,
                        currencySymbol: e.agSubscriber.currencySymbol,
                        chipColors: e.agSubscriber.chipColors,
                        showPayouts: e.layout.showPayoutsOnBetSpots,
                        stackToTop: e.layout.isPhone && !e.layout.isLandscape,
                        chipRects: e.bettingGrid.chipRects,
                        gameAssetsPromise: e.preloader.gameAssetsPromise,
                        gamePhase: e.gamePhase,
                        betProcessor: e.betProcessor,
                        tooltipProcessor: e.tooltipProcessor,
                        isLowRisk: null === (t = e.settings) || void 0 === t ? void 0 : t.isLowRisk,
                        bets: e.bets.bet,
                        flyingChipsProcessor: e.flyingChipsProcessor
                    })
                }
                ))
        }
        ,
        517109: (t, e, i) => {
            i.d(e, {
                f: () => n
            });
            var s = i(962525);
            class n {
                constructor(t) {
                    this.config = t,
                        this._scale = 1
                }
                updateActualAreaSize(t) {
                    this._scale = t / this.config.overallWidth
                }
                get scale() {
                    return this._scale
                }
                get strokeWidth() {
                    return Math.min(this.config.strokeWidth * this.scale, 2 * this.config.strokeWidth)
                }
                get overallWidth() {
                    return this.config.overallWidth * this.scale
                }
                get overallHeight() {
                    return this.config.overallHeight * this.scale
                }
                get fontSize() {
                    return this.config.fontSize * this.scale
                }
                get bettingStatisticsFontSize() {
                    return this.config.bettingStatisticsFontSize * this.scale
                }
                get spotPayoutFontSize() {
                    return this.config.spotPayoutFontSize * this.scale
                }
                get numericImageHeight() {
                    return this.config.numericImageHeight
                }
                get chipSize() {
                    return this.config.chipSize
                }
                get rawConfig() {
                    return this.config
                }
                get isAdvanced() {
                    return this.config.isAdvanced
                }
                get ornamentOffset() {
                    var t;
                    return this.percentagePixels(null !== (t = this.config.ornamentOffset) && void 0 !== t ? t : 0)
                }
                betSpotSizeData(t) {
                    const e = this.config.betSpots[t];
                    if (!e)
                        return {
                            type: s.pw.Rect,
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                    if (e.type === s.pw.Rect)
                        return Object.assign(Object.assign({}, e), {
                            x: e.x * this.scale,
                            y: e.y * this.scale,
                            width: e.width * this.scale,
                            height: e.height * this.scale
                        });
                    let i = 0
                        , n = 0
                        , o = 0
                        , r = 0;
                    for (let t = 0; t < e.points.length; t++) {
                        const s = {
                            x: e.points[t].x,
                            y: e.points[t].y
                        };
                        0 === t ? (i = s.x,
                            n = s.y,
                            o = s.x,
                            r = s.y) : (i = Math.min(i, s.x),
                                n = Math.min(n, s.y),
                                o = Math.max(o, s.x),
                                r = Math.max(r, s.y))
                    }
                    return Object.assign(Object.assign({}, e), {
                        x: i * this.scale,
                        y: n * this.scale,
                        width: (o - i) * this.scale,
                        height: (r - n) * this.scale,
                        points: e.points.map((t => ({
                            x: t.x * this.scale,
                            y: t.y * this.scale
                        })))
                    })
                }
                percentagePixels(t) {
                    return this.rawConfig.overallWidth * t * .01 * this._scale
                }
            }
        }
        ,
        179645: (t, e, i) => {
            i.d(e, {
                p: () => s
            });
            const s = {
                strokeWidth: 2,
                overallWidth: 589,
                overallHeight: 416,
                fontSize: 16,
                bettingStatisticsFontSize: 10,
                spotPayoutFontSize: 10,
                numericImageHeight: .1,
                chipSize: .06,
                playerIconSizeRatio: 1.6,
                isAdvanced: !0,
                ornamentOffset: .8,
                betSpots: i(808446).H({
                    contentWidth: 589,
                    contentHeight: 416,
                    outerBetSpotSize: {
                        kwokHeight: .13,
                        nimHeight: .208,
                        sshHeight: .116
                    },
                    innerBetSpotScale: {
                        width: .535,
                        height: .41
                    },
                    chipPlacementMargins: {
                        horizontal: .03,
                        vertical: .035,
                        bottom: .008
                    },
                    strokeWidth: 1.5,
                    padding: 1.75
                })
            }
        }
        ,
        808446: (t, e, i) => {
            i.d(e, {
                H: () => n
            });
            var s = i(962525);
            function n(t) {
                const { contentWidth: e, contentHeight: i, outerBetSpotSize: n, chipPlacementMargins: o, strokeWidth: r, innerBetSpotScale: a, padding: c = 0 } = t
                    , l = e - 2 * c - r
                    , h = i - 2 * c - r
                    , u = h * n.kwokHeight
                    , d = h * n.nimHeight
                    , p = h * n.sshHeight
                    , m = .2 * l
                    , b = .25 * l
                    , f = 3 * m
                    , g = 3 * d
                    , v = f * a.width
                    , y = g * a.height
                    , S = m + .5 * (f - v)
                    , w = u + .5 * (g - y)
                    , x = .5 * r + c;
                return {
                    [s.vm.Kwok12]: {
                        type: s.pw.Rect,
                        x,
                        y: x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim12]: {
                        type: s.pw.Rect,
                        x: m + x,
                        y: x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim13]: {
                        type: s.pw.Rect,
                        x: 2 * m + x,
                        y: x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim14]: {
                        type: s.pw.Rect,
                        x: 3 * m + x,
                        y: x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Kwok41]: {
                        type: s.pw.Rect,
                        x: 4 * m + x,
                        y: x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.One]: {
                        type: s.pw.Poly,
                        points: [{
                            x: m + x,
                            y: u + x
                        }, {
                            x: m + f + x,
                            y: u + x
                        }, {
                            x: S + v + x,
                            y: w + x
                        }, {
                            x: S + x,
                            y: w + x
                        }],
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Center,
                                margin: -o.horizontal
                            }
                        }
                    },
                    [s.vm.Two]: {
                        type: s.pw.Poly,
                        points: [{
                            x: m + x,
                            y: u + x
                        }, {
                            x: S + x,
                            y: w + x
                        }, {
                            x: S + x,
                            y: w + y + x
                        }, {
                            x: m + x,
                            y: u + g + x
                        }],
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Center,
                                margin: -o.vertical
                            }
                        }
                    },
                    [s.vm.Three]: {
                        type: s.pw.Poly,
                        points: [{
                            x: m + x,
                            y: u + g + x
                        }, {
                            x: S + x,
                            y: w + y + x
                        }, {
                            x: S + v + x,
                            y: w + y + x
                        }, {
                            x: m + f + x,
                            y: u + g + x
                        }],
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Center,
                                margin: -o.horizontal
                            }
                        }
                    },
                    [s.vm.Four]: {
                        type: s.pw.Poly,
                        points: [{
                            x: m + f + x,
                            y: u + x
                        }, {
                            x: m + f + x,
                            y: u + g + x
                        }, {
                            x: S + v + x,
                            y: w + y + x
                        }, {
                            x: S + v + x,
                            y: w + x
                        }],
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Center,
                                margin: -o.vertical
                            }
                        }
                    },
                    [s.vm.Small]: {
                        type: s.pw.Rect,
                        x: S + x,
                        y: w + x,
                        width: .5 * v,
                        height: .5 * y
                    },
                    [s.vm.Big]: {
                        type: s.pw.Rect,
                        x: S + .5 * v + x,
                        y: w + x,
                        width: .5 * v,
                        height: .5 * y
                    },
                    [s.vm.Odd]: {
                        type: s.pw.Rect,
                        x: S + x,
                        y: w + .5 * y + x,
                        width: .5 * v,
                        height: .5 * y
                    },
                    [s.vm.Even]: {
                        type: s.pw.Rect,
                        x: S + .5 * v + x,
                        y: w + .5 * y + x,
                        width: .5 * v,
                        height: .5 * y
                    },
                    [s.vm.Nim21]: {
                        type: s.pw.Rect,
                        x,
                        y: u + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim23]: {
                        type: s.pw.Rect,
                        x,
                        y: u + d + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim24]: {
                        type: s.pw.Rect,
                        x,
                        y: u + 2 * d + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim41]: {
                        type: s.pw.Rect,
                        x: 4 * m + x,
                        y: u + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim42]: {
                        type: s.pw.Rect,
                        x: 4 * m + x,
                        y: u + d + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim43]: {
                        type: s.pw.Rect,
                        x: 4 * m + x,
                        y: u + 2 * d + x,
                        width: m,
                        height: d,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Kwok23]: {
                        type: s.pw.Rect,
                        x,
                        y: u + 3 * d + x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim31]: {
                        type: s.pw.Rect,
                        x: m + x,
                        y: u + 3 * d + x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim32]: {
                        type: s.pw.Rect,
                        x: 2 * m + +x,
                        y: u + 3 * d + x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Nim34]: {
                        type: s.pw.Rect,
                        x: 3 * m + +x,
                        y: u + 3 * d + x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Kwok34]: {
                        type: s.pw.Rect,
                        x: 4 * m + x,
                        y: u + 3 * d + x,
                        width: m,
                        height: u,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.bottom
                            }
                        }
                    },
                    [s.vm.Ssh321]: {
                        type: s.pw.Rect,
                        x,
                        y: 2 * u + 3 * d + x,
                        width: b,
                        height: p
                    },
                    [s.vm.Ssh214]: {
                        type: s.pw.Rect,
                        x: b + x,
                        y: 2 * u + 3 * d + x,
                        width: b,
                        height: p
                    },
                    [s.vm.Ssh432]: {
                        type: s.pw.Rect,
                        x: 2 * b + x,
                        y: 2 * u + 3 * d + x,
                        width: b,
                        height: p
                    },
                    [s.vm.Ssh143]: {
                        type: s.pw.Rect,
                        x: 3 * b + x,
                        y: 2 * u + 3 * d + x,
                        width: b,
                        height: p
                    }
                }
            }
        }
        ,
        773160: (t, e, i) => {
            i.d(e, {
                y: () => s
            });
            const s = {
                strokeWidth: 2,
                overallWidth: 588,
                overallHeight: 330,
                fontSize: 19,
                bettingStatisticsFontSize: 13,
                spotPayoutFontSize: 13,
                numericImageHeight: .14,
                chipSize: .07,
                playerIconSizeRatio: 2,
                isAdvanced: !1,
                betSpots: i(106627).i({
                    contentWidth: 588,
                    contentHeight: 330,
                    sideBetSizeWidth: .8,
                    chipPlacementMargins: {
                        side: .015,
                        center: .06
                    },
                    strokeWidth: 2,
                    padding: 2
                })
            }
        }
        ,
        106627: (t, e, i) => {
            i.d(e, {
                i: () => n
            });
            var s = i(962525);
            function n(t) {
                const { contentWidth: e, contentHeight: i, sideBetSizeWidth: n, chipPlacementMargins: o, strokeWidth: r, padding: a = 0 } = t
                    , c = e - 2 * a - r
                    , l = i - 2 * a - r
                    , h = c * n
                    , u = .5 * (c - h)
                    , d = u
                    , p = u
                    , m = l - 2 * u
                    , b = .5 * h
                    , f = .5 * m
                    , g = .5 * r + a;
                return {
                    [s.vm.Small]: {
                        type: s.pw.Rect,
                        x: p + g,
                        y: g,
                        width: h,
                        height: d,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Center,
                                margin: o.center
                            }
                        }
                    },
                    [s.vm.Odd]: {
                        type: s.pw.Rect,
                        x: g,
                        y: d + g,
                        width: p,
                        height: m,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Center,
                                margin: -o.center
                            }
                        }
                    },
                    [s.vm.Even]: {
                        type: s.pw.Rect,
                        x: c - p + g,
                        y: d + g,
                        width: p,
                        height: m,
                        chipPosition: {
                            y: {
                                anchor: s.Q4.Center,
                                margin: o.center
                            }
                        }
                    },
                    [s.vm.Big]: {
                        type: s.pw.Rect,
                        x: p + g,
                        y: l - d + g,
                        width: h,
                        height: d,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Center,
                                margin: o.center
                            }
                        }
                    },
                    [s.vm.One]: {
                        type: s.pw.Rect,
                        x: p + g,
                        y: d + g,
                        width: b,
                        height: f,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Left,
                                margin: o.side
                            },
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.side
                            }
                        }
                    },
                    [s.vm.Two]: {
                        type: s.pw.Rect,
                        x: c - p - b + g,
                        y: d + g,
                        width: b,
                        height: f,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Right,
                                margin: o.side
                            },
                            y: {
                                anchor: s.Q4.Bottom,
                                margin: o.side
                            }
                        }
                    },
                    [s.vm.Three]: {
                        type: s.pw.Rect,
                        x: p + g,
                        y: d + g + f,
                        width: b,
                        height: f,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Left,
                                margin: o.side
                            },
                            y: {
                                anchor: s.Q4.Top,
                                margin: o.side
                            }
                        }
                    },
                    [s.vm.Four]: {
                        type: s.pw.Rect,
                        x: c - p - b + g,
                        y: d + g + f,
                        width: b,
                        height: f,
                        chipPosition: {
                            x: {
                                anchor: s.Kx.Right,
                                margin: o.side
                            },
                            y: {
                                anchor: s.Q4.Top,
                                margin: o.side
                            }
                        }
                    }
                }
            }
        }
        ,
        563707: (t, e, i) => {
            function s(t, e) {
                return e.betSpotSizeData(t)
            }
            i.d(e, {
                V: () => s
            })
        }
        ,
        226717: (t, e, i) => {
            i.d(e, {
                hk: () => Y
            });
            var s = i(567557)
                , n = i(188464)
                , o = i(989526)
                , r = i(41678)
                , a = i(994373)
                , c = i(38281)
                , l = i(473898)
                , h = i(30830)
                , u = i(653106)
                , d = i(505455)
                , p = i(869676)
                , m = i(721982);
            function b(t, e, i) {
                const s = t.x * e.width
                    , n = t.y * e.height
                    , o = s + e.x - i.left
                    , r = n + e.y - i.top
                    , a = {
                        x: o / i.width,
                        y: r / i.height
                    }
                    , c = e.height / i.height;
                return {
                    x: a.x,
                    y: a.y,
                    width: t.width * c,
                    height: t.height * c
                }
            }
            function f(t, e, i, s) {
                const n = t.getBoundingClientRect()
                    , o = m.DS.IS_PHONE ? s * i.height / e.height : n.width / e.width
                    , r = m.DS.IS_PHONE ? s * i.height / e.height : n.height / e.height
                    , a = m.DS.IS_PHONE ? 1 : .5;
                return {
                    x: (n.left - e.left) / e.width + o * a,
                    y: (n.top - e.top) / e.height + r * a,
                    width: o,
                    height: r
                }
            }
            var g = i(390634)
                , v = i(947639);
            class y {
                constructor(t) {
                    this.params = t,
                        this.finished = !1,
                        this.startTime = 0;
                    const { startRect: e, startOpacity: i } = t;
                    this.startRect = e,
                        this.startOpacity = i
                }
                draw(t) {
                    if (0 === this.startTime && (this.startTime = t.time),
                        this.startTime > t.time)
                        return !0;
                    const { chip: e, duration: i, target: s, opacity: n, onComplete: o, animation: r = v.Vv } = this.params;
                    if (!this.finished) {
                        const a = r((t.time - this.startTime) / i);
                        if (a < 1)
                            return e.x = this.startRect.x + (s.x - this.startRect.x) * a,
                                e.y = this.startRect.y + (s.y - this.startRect.y) * a,
                                e.size = this.startRect.height + (s.height - this.startRect.height) * a,
                                e.opacity = this.startOpacity + (n - this.startOpacity) * a,
                                !0;
                        e.x = s.x,
                            e.y = s.y,
                            e.size = s.height,
                            e.opacity = n,
                            this.finished = !0,
                            window.setTimeout((() => {
                                o()
                            }
                            ))
                    }
                    return !1
                }
            }
            function S(t) {
                const { canvas: e, chip: i, opacity: s, target: n, duration: o, animation: r, startRect: a, startOpacity: c } = t
                    , l = new y({
                        chip: i,
                        opacity: s,
                        target: n,
                        duration: o,
                        animation: r,
                        startRect: a,
                        startOpacity: c,
                        onComplete: () => {
                            var s;
                            e.removeElement(i, g.s.Overlay),
                                e.removeElement(l, g.s.Animator),
                                e.scheduleDraw(),
                                null === (s = t.onComplete) || void 0 === s || s.call(t)
                        }
                    });
                return e.addElement(i, g.s.Overlay),
                    e.addElement(l, g.s.Animator),
                    e.scheduleDraw(),
                    () => {
                        l.finished || (e.removeElement(i, g.s.Overlay),
                            e.removeElement(l, g.s.Animator))
                    }
            }
            const w = {
                [r.X.StackToChip]: function (t) {
                    const { chipSize: e, chipstack: i, gameDimensions: s, bettingGridRect: n } = t;
                    return C(Object.assign({
                        opacity: .8,
                        target: t => b(t, n, s),
                        startOpacity: 0,
                        startRect: () => f(i, s, n, e),
                        duration: p.Rr
                    }, t))
                },
                [r.X.ChipToStack]: function (t) {
                    const { chipSize: e, chipstack: i, gameDimensions: s, bettingGridRect: n } = t;
                    return C(Object.assign({
                        opacity: 0,
                        target: () => f(i, s, n, e),
                        startOpacity: 1,
                        startRect: t => ({
                            x: t.x,
                            y: t.y,
                            width: t.size,
                            height: t.size
                        }),
                        duration: p.k9
                    }, t))
                },
                [r.X.ChipToChip]: function (t) {
                    const { to: e, from: i, chipRects: s, bettingGridRect: n, gameDimensions: o } = t;
                    return e && i ? C(Object.assign({
                        opacity: .8,
                        target: () => b(s[e], n, o),
                        startOpacity: 0,
                        startRect: () => b(s[i], n, o),
                        duration: p.Rr
                    }, t)) : l.Z
                }
            };
            function x(t, e, i, s, n, o) {
                const r = d.G({
                    width: n.width,
                    height: n.height
                }, o.height);
                return new h.A(Object.assign(Object.assign({}, u.n), {
                    size: t.width,
                    name: `flying-chip-${e}`,
                    x: t.x,
                    y: t.y
                }), s, i, r)
            }
            function C(t) {
                const { bets: e, chipRects: i, bettingGridRect: s, gameDimensions: n, chipColor: o } = t
                    , r = [];
                for (const a of Object.keys(e)) {
                    const c = e[a];
                    if (!c || !i[a])
                        continue;
                    const l = x(b(i[a], s, n), a, c, o(c), n, s)
                        , h = l.getConfig()
                        , u = t.target(i[a])
                        , d = t.startRect(h);
                    r.push(S(Object.assign(Object.assign({}, t), {
                        chip: l,
                        target: u,
                        startRect: d
                    })))
                }
                return () => {
                    for (const t of r)
                        t()
                }
            }
            class A {
                constructor(t) {
                    this.params = t,
                        this.chipColors = [],
                        this.chipRects = {},
                        this.activeAnimationDispose = {
                            [r.T.Winning]: [],
                            [r.T.Place]: [],
                            [r.T.Undo]: [],
                            [r.T.UndoAll]: []
                        },
                        this.startAnimation = t => {
                            switch (t.type) {
                                case r.T.Winning:
                                    this.stopAnimation(r.T.Winning),
                                        this.runAnimation(t);
                                    break;
                                case r.T.Place:
                                case r.T.Undo:
                                case r.T.UndoAll:
                                    this.runAnimation(t)
                            }
                        }
                        ,
                        this.stopAnimation = t => {
                            this.activeAnimationDispose[t].forEach((t => t())),
                                this.activeAnimationDispose[t].length = 0
                        }
                        ,
                        t.flyingChipsProcessor.subscribeOnStartAnimation(this.startAnimation),
                        t.flyingChipsProcessor.subscribeOnStopAnimation(this.stopAnimation)
                }
                updateDimensions(t) {
                    this.gameDimensions = t
                }
                updateBettingGridChipRects(t) {
                    this.chipRects = t
                }
                updateChipColors(t) {
                    this.chipColors = t
                }
                dispose() {
                    for (const t of Object.keys(this.activeAnimationDispose))
                        this.stopAnimation(t)
                }
                runAnimation(t) {
                    const e = this.params.references.reactReferences[a.w.BettingGrid]
                        , i = this.params.references.reactReferences[a.w.FlyingChipsChipstack];
                    if (!(e && i && this.gameDimensions && w[t.animation]))
                        return;
                    const s = {
                        to: t.to,
                        from: t.from,
                        bets: t.bets,
                        chipstack: i,
                        canvas: this.params.canvas,
                        chipRects: this.chipRects,
                        chipSize: this.params.chipSize,
                        gameDimensions: this.gameDimensions,
                        bettingGridRect: e.getBoundingClientRect(),
                        chipColor: t => c.ai(t, this.chipColors),
                        onComplete: () => {
                            this.params.flyingChipsProcessor.finishAnimation({
                                type: t.type,
                                bets: t.bets
                            })
                        }
                    }
                        , n = w[t.animation];
                    this.activeAnimationDispose[t.type].push(n(s))
                }
            }
            var B = i(26540);
            var _ = i(962525);
            const P = {
                [_.qi.DesktopImmersive]: .2,
                [_.qi.DesktopClassic]: .2,
                [_.qi.MobilePortrait]: .7,
                [_.qi.MobileLandscape]: .3,
                [_.qi.Tablet]: .3
            }
                , O = {
                    [_.qi.DesktopImmersive]: 1,
                    [_.qi.DesktopClassic]: 1,
                    [_.qi.MobilePortrait]: .9,
                    [_.qi.MobileLandscape]: .7,
                    [_.qi.Tablet]: .7
                }
                , T = 8e-4 * Math.PI
                , j = [{
                    offset: 0,
                    color: "#ec7"
                }, {
                    offset: .5,
                    color: "#fd9"
                }, {
                    offset: 1,
                    color: "#a84"
                }]
                , k = p.LZ;
            var E, L;
            (function (t) {
                t[t.Top = 0] = "Top",
                    t[t.Bottom = 1] = "Bottom",
                    t[t.Left = 2] = "Left",
                    t[t.Right = 3] = "Right"
            }
            )(E || (E = {})),
                function (t) {
                    t[t.Left = 0] = "Left",
                        t[t.Center = 1] = "Center",
                        t[t.Right = 2] = "Right"
                }(L || (L = {}));
            const R = /\s|，|。|！|？|、|でなければ|について|かしら|くらい|けれど|なのか|ばかり|ながら|ことよ|こそ|こと|さえ|しか|した|たり|だけ|だに|だの|つつ|ても|てよ|でも|とも|から|など|なり|ので|のに|ほど|まで|もの|やら|より|って|で|と|な|に|ね|の|も|は|ば|へ|や|わ|を|か|が|さ|し|ぞ|て/g;
            function M(t) {
                return t.match(R) || []
            }
            function I(t) {
                return t.split(R).filter(Boolean)
            }
            function D(t, e, i) {
                return t + .5 * (i - e)
            }
            var N, z = i(18985);
            (function (t) {
                t[t.Hide = 0] = "Hide",
                    t[t.Show = 1] = "Show",
                    t[t.Visible = 2] = "Visible"
            }
            )(N || (N = {}));
            class G {
                constructor() {
                    this.state = N.Show,
                        this.props = null,
                        this.positionMap = new Map,
                        this.initialCanvasSize = null,
                        this.visibilityAnimationDuration = 600,
                        this.swingAnimationSpeed = T,
                        this.animationStartTime = 0,
                        this.swingDisplacement = 0,
                        this.layout = _.qi.DesktopImmersive
                }
                show(t) {
                    this.props = t,
                        this.state = N.Show
                }
                hide() {
                    this.state = N.Hide,
                        this.animationStartTime = 0
                }
                setComponentLayout(t) {
                    this.layout = t,
                        this.initialCanvasSize = null
                }
                draw(t) {
                    if (this.props) {
                        const { context: e, width: i, height: s, cache: n, time: o } = t
                            , r = function (t, e, i) {
                                const { id: s, elementPosition: n, text: o } = t;
                                let r = `${s}/${e}/${i}/${n.x}/${n.y}`;
                                return r += `/${o}`,
                                    r
                            }(this.props, i, s)
                            , a = n.get(r, !0, (() => this.drawBubble(r, t)));
                        if (a) {
                            0 === this.animationStartTime && (this.animationStartTime = o);
                            const t = o - this.animationStartTime
                                , i = this.getCachedPosition(r)
                                , s = this.state === N.Show
                                , n = this.state === N.Hide;
                            if (s || n) {
                                const n = z.uZ(t / this.visibilityAnimationDuration, 0, 1)
                                    , o = s ? B.UE(n) : B.Yw(n)
                                    , r = s ? o : 1 - o;
                                return e.drawImage(a, i.x + .5 * a.width * (1 - r), i.y + .5 * a.height * (1 - r) + this.swingDisplacement, a.width * r, a.height * r),
                                    s ? (n >= 1 && (this.state = N.Visible,
                                        this.animationStartTime = 0),
                                        !0) : !(n >= 1 && (this.props = null,
                                            this.initialCanvasSize = null,
                                            this.animationStartTime = 0,
                                            this.swingDisplacement = 0,
                                            1))
                            }
                            return this.swingDisplacement = B.D4(t * this.swingAnimationSpeed, .05 * a.height),
                                e.drawImage(a, i.x, i.y + this.swingDisplacement),
                                !0
                        }
                    }
                    return !1
                }
                drawBubble(t, e) {
                    var i, s;
                    const n = document.createElement("canvas")
                        , o = n.getContext("2d");
                    if (o && this.props) {
                        const { width: r, height: a, context: c } = e
                            , l = function (t, e) {
                                return t / parseFloat(getComputedStyle(e).width)
                            }(r, c.canvas)
                            , h = l * (parseFloat(getComputedStyle(document.documentElement).fontSize) / 12)
                            , u = 18 * h * O[this.layout]
                            , d = 1.5 * u
                            , p = P[this.layout] * r;
                        o.font = `400 ${u}px ${k}`;
                        const m = function (t, e, i, s, n) {
                            const o = {
                                width: 0,
                                height: s
                            }
                                , r = M(e)
                                , a = I(e);
                            let c = ""
                                , l = 0;
                            for (let e = 0; e < a.length; e++) {
                                const s = r.shift() || " "
                                    , h = c + a[e] + s
                                    , u = t.measureText(h).width;
                                u > i && e > 0 ? (o.width = i,
                                    o.height += n,
                                    c = a[e] + s) : (c = h,
                                        l = u)
                            }
                            return o.width = Math.max(l, o.width),
                                o
                        }(o, this.props.text, p, u, d)
                            , b = Math.round(1.5 * u)
                            , f = .8 * b
                            , g = .6 * u
                            , v = .5 * u
                            , y = 1.5 * h
                            , S = null !== (i = this.props.position) && void 0 !== i ? i : E.Top
                            , w = null !== (s = this.props.arrowAlignment) && void 0 !== s ? s : L.Center
                            , x = m.width + 2 * b
                            , C = m.height + b + f
                            , A = y
                            , B = y + (S === E.Top ? 0 : g);
                        n.width = x + 2 * y,
                            n.height = C + g + 2 * y;
                        const { x: T, y: R } = this.getActualElementPosition(this.props.elementPosition, r, a)
                            , N = {
                                x: 0,
                                y: R * l + n.height * (S === E.Top ? -1.05 : .1)
                            };
                        let z = 0;
                        switch (w) {
                            case L.Left:
                                N.x = T * l - 25 * l,
                                    z = 25 * l;
                                break;
                            case L.Center:
                                N.x = T * l - .5 * n.width,
                                    z = .5 * x;
                                break;
                            case L.Right:
                                N.x = T * l - n.width + 25 * l,
                                    z = x - 25 * l
                        }
                        const G = this.layout === _.qi.MobileLandscape || this.layout === _.qi.Tablet ? 100 * h : 0;
                        N.x < G ? (z += N.x - G,
                            N.x = G) : N.x + n.width > r && (z += N.x + n.width - r,
                                N.x = r - n.width),
                            this.positionMap.set(t, N);
                        const F = o.createLinearGradient(A, B, A + x, B + C);
                        for (const t of j)
                            F.addColorStop(t.offset, t.color);
                        o.lineWidth = y,
                            o.strokeStyle = F,
                            o.fillStyle = "rgba(0, 0, 0, 0.6)",
                            o.beginPath(),
                            o.moveTo(A, B + v),
                            o.arcTo(A, B, A + v, B, v),
                            S === E.Bottom && (o.lineTo(A + z - g, B),
                                o.lineTo(A + z, B - g),
                                o.lineTo(A + z + g, B)),
                            o.arcTo(A + x, B, A + x, B + C + v, v),
                            o.arcTo(A + x, B + C, A + x - v, B + C, v),
                            S === E.Top && (o.lineTo(A + z + g, B + C),
                                o.lineTo(A + z, B + C + g),
                                o.lineTo(A + z - g, B + C)),
                            o.arcTo(A, B + C, A, B + C - v, v),
                            o.closePath(),
                            o.fill(),
                            o.stroke();
                        const V = A + b
                            , H = B + u + f;
                        o.fillStyle = "#fff",
                            o.font = `400 ${u}px ${k}`,
                            function (t, e, i, s, n, o) {
                                const r = M(e)
                                    , a = I(e);
                                let c = ""
                                    , l = 0;
                                for (let e = 0; e < a.length; e++) {
                                    const h = r.shift() || " "
                                        , u = c + a[e] + h
                                        , d = t.measureText(u).width;
                                    d > n && e > 0 ? (t.fillText(c, D(i, l, n), s),
                                        c = a[e] + h,
                                        s += o) : (c = u,
                                            l = d)
                                }
                                t.fillText(c, D(i, t.measureText(c).width, n), s)
                            }(o, this.props.text, V, H, m.width, d)
                    }
                    return n
                }
                getCachedPosition(t) {
                    return this.positionMap.get(t) || {
                        x: 0,
                        y: 0
                    }
                }
                getInitialCanvasSize(t, e) {
                    return this.initialCanvasSize || (this.initialCanvasSize = {
                        width: t,
                        height: e
                    }),
                        this.initialCanvasSize
                }
                getActualElementPosition(t, e, i) {
                    const s = this.getInitialCanvasSize(e, i);
                    return {
                        x: t.x * (e / s.width),
                        y: t.y * (i / s.height)
                    }
                }
            }
            var F = i(789085);
            function V(t, e) {
                if (t && e) {
                    const i = F.P(e)
                        , s = F.I(t.getBoundingClientRect(), e.reverseScale);
                    return {
                        x: Math.round(s.x + s.width / 2 - i.left),
                        y: s.y - i.top
                    }
                }
                return {
                    x: 0,
                    y: 0
                }
            }
            var H = i(990125)
                , W = i(930480);
            const U = "layout";
            class K {
                constructor(t) {
                    this.dimensions = null,
                        this.disposeBag = [],
                        this.lastBubbleAction = null,
                        this.delay = W.y(new Set([U])),
                        this.onShow = t => {
                            switch (t.id) {
                                case H.c.AdvancedBettingGrid:
                                    this.showAdvancedBettingGridOnboardingBubble(t);
                                    break;
                                case H.c.Statistics:
                                    this.showStatisticsOnboardingBubble(t)
                            }
                        }
                        ,
                        this.onHide = () => {
                            this.lastBubbleAction = null,
                                this.delay.clear(U),
                                this.onboardingBubble.hide(),
                                this.canvas.scheduleDraw()
                        }
                        ;
                    const { canvas: e, onboardingBubbleProcessor: i, references: s } = t;
                    this.onboardingBubble = new G,
                        this.canvas = e,
                        this.canvas.addElement(this.onboardingBubble, g.s.Overlay),
                        this.references = s,
                        this.disposeBag.push(i.subscribeOnShow(this.onShow), i.subscribeOnHide(this.onHide))
                }
                dispose() {
                    for (const t of this.disposeBag)
                        t();
                    this.disposeBag.length = 0,
                        this.lastBubbleAction = null,
                        this.delay.dispose(),
                        this.onboardingBubble.hide(),
                        this.canvas && (this.canvas.removeElement(this.onboardingBubble),
                            this.canvas.scheduleDraw())
                }
                updateDimensions(t) {
                    this.dimensions = t
                }
                setComponentLayout(t) {
                    this.onboardingBubble.setComponentLayout(t),
                        this.delay.clear(U),
                        this.lastBubbleAction && this.delay.add({
                            type: U,
                            timeout: this.lastBubbleAction.layoutDelay,
                            callback: () => this.scheduleDraw()
                        })
                }
                scheduleDraw() {
                    this.delay.clear(U),
                        this.lastBubbleAction && (this.lastBubbleAction.showBubble(),
                            this.canvas.scheduleDraw())
                }
                showAdvancedBettingGridOnboardingBubble(t) {
                    const { id: e, text: i } = t;
                    this.lastBubbleAction = {
                        showBubble: () => {
                            this.onboardingBubble.show({
                                id: e,
                                text: i,
                                elementPosition: V(this.references.reactReferences[a.w.AdvancedBettingGridButton], this.dimensions),
                                arrowAlignment: L.Center
                            })
                        }
                        ,
                        layoutDelay: 500
                    },
                        this.scheduleDraw()
                }
                showStatisticsOnboardingBubble(t) {
                    const { id: e, text: i } = t;
                    this.lastBubbleAction = {
                        showBubble: () => {
                            this.onboardingBubble.show({
                                id: e,
                                text: i,
                                elementPosition: V(this.references.reactReferences[a.w.StatisticsButton], this.dimensions),
                                arrowAlignment: L.Center
                            })
                        }
                        ,
                        layoutDelay: 500
                    },
                        this.scheduleDraw()
                }
            }
            var X = i(517720);
            class Z extends o.PureComponent {
                constructor() {
                    super(...arguments),
                        this.canvas = null,
                        this.onboardingBubbleIntegration = null,
                        this.flyingChipsIntegration = null,
                        this.updateRef = t => {
                            this.clearCanvas(),
                                t && (this.canvas = new g.X(t),
                                    this.onboardingBubbleIntegration = new K({
                                        canvas: this.canvas,
                                        onboardingBubbleProcessor: this.props.onboardingBubbleProcessor,
                                        references: this.props.references
                                    }),
                                    this.flyingChipsIntegration = new A({
                                        canvas: this.canvas,
                                        chipSize: this.props.chipSize,
                                        references: this.props.references,
                                        flyingChipsProcessor: this.props.flyingChipsProcessor
                                    }),
                                    this.updateProps())
                        }
                }
                render() {
                    return s.jsx("div", {
                        className: "overlay--ea8a5",
                        ref: this.updateRef,
                        "data-role": "canvas-overlay"
                    })
                }
                componentDidUpdate() {
                    this.canvas && (this.updateProps(),
                        this.canvas.scheduleDraw())
                }
                componentWillUnmount() {
                    this.clearCanvas()
                }
                updateProps() {
                    var t, e, i, s, n;
                    null === (t = this.onboardingBubbleIntegration) || void 0 === t || t.updateDimensions(this.props.dimensions),
                        null === (e = this.onboardingBubbleIntegration) || void 0 === e || e.setComponentLayout(this.props.layout),
                        null === (i = this.flyingChipsIntegration) || void 0 === i || i.updateDimensions(this.props.dimensions),
                        null === (s = this.flyingChipsIntegration) || void 0 === s || s.updateBettingGridChipRects(this.props.chipRects),
                        null === (n = this.flyingChipsIntegration) || void 0 === n || n.updateChipColors(this.props.chipColors)
                }
                clearCanvas() {
                    this.onboardingBubbleIntegration && (this.onboardingBubbleIntegration.dispose(),
                        this.onboardingBubbleIntegration = null),
                        this.flyingChipsIntegration && (this.flyingChipsIntegration.dispose(),
                            this.flyingChipsIntegration = null),
                        this.canvas && (this.canvas.destroy(),
                            this.canvas = null)
                }
            }
            const Y = n.Pi((() => {
                const t = X.oR();
                return s.jsx(Z, {
                    onboardingBubbleProcessor: t.onboardingBubbleProcessor,
                    references: t.references,
                    dimensions: t.agSubscriber.gameDimension,
                    layout: t.layout.componentLayout,
                    flyingChipsProcessor: t.flyingChipsProcessor,
                    chipRects: t.bettingGrid.chipRects,
                    chipSize: t.bettingGrid.config.chipSize,
                    chipColors: t.agSubscriber.chipColors
                })
            }
            ))
        }
        ,
        57960: (t, e, i) => {
            i.d(e, {
                u: () => o
            });
            const s = "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.75) 50%, #000000 100%)"
                , n = "linear-gradient(180deg, rgba(143,16,18,0.00) 0%, rgba(55,2,2,0.75) 81%, #280203 100%)";
            function o(t) {
                return t ? s : n
            }
        }
        ,
        298907: (t, e, i) => {
            i.d(e, {
                H: () => v
            });
            var s = i(567557)
                , n = i(540712)
                , o = i(188464)
                , r = i(989526)
                , a = i(962525);
            const c = {
                [a.vm.One]: "one--9aeb9",
                [a.vm.Two]: "two--0397d",
                [a.vm.Three]: "three--0afa5",
                [a.vm.Four]: "four--822d2"
            }
                , l = t => t.result ? s.jsx("div", {
                    className: "container--0449e",
                    children: s.jsxs("div", {
                        className: "header--3c1a1",
                        children: [s.jsx("div", {
                            className: n.Z("icon--8dd22", c[t.result])
                        }), s.jsx("div", {
                            className: "topLine--560af"
                        }), s.jsx("div", {
                            className: "bottomLine--60e07"
                        }), t.withLights && s.jsx("div", {
                            className: "topLight--202f6"
                        }), t.withLights && s.jsx("div", {
                            className: "bottomLight--e2298"
                        })]
                    })
                }) : null
                , h = () => s.jsx("div", {
                    className: "background--7f049"
                })
                , u = t => {
                    const { title: e, formattedAmount: i } = t;
                    return s.jsxs("div", {
                        className: "youWinText--9371f",
                        children: [s.jsx("div", {
                            className: "title--32b56",
                            children: e
                        }), s.jsx("div", {
                            className: "amount--37bf7",
                            children: i
                        })]
                    })
                }
                ;
            var d = i(945590)
                , p = i(2435)
                , m = i(98753);
            const b = t => {
                const { visible: e, amount: i, currency: n, currencyDecimals: o } = t;
                if (!e)
                    return null;
                const r = p.Iu(d.B2.YouWin)
                    , a = m.dN(i, {
                        maximumDecimalCount: o,
                        currencySymbol: n
                    });
                return s.jsxs("div", {
                    className: "youWin--4c006",
                    children: [s.jsx(h, {}), s.jsx(u, {
                        title: r,
                        formattedAmount: a
                    })]
                })
            }
                ;
            var f = i(517720);
            const g = t => {
                const { visible: e, amount: i, result: o, isDesktop: a, isClassicLayout: c, isLandscape: h, isTablet: u, winningAnimationStarted: d, currency: p, currencyDecimals: m } = t
                    , f = e && i > 0
                    , g = r.useCallback((t => {
                        "opacity" === t.propertyName && e && f && d()
                    }
                    ), [d, e, f]);
                return s.jsxs("div", {
                    className: n.Z("gameResult--be2b2", {
                        "desktop--ab205": a,
                        "classic--1b5f0": c,
                        "landscape--f5358": !a && h,
                        "tablet--62496": u,
                        "visible--1732e": e
                    }),
                    onTransitionEnd: g,
                    "data-role": "winning-message",
                    children: [s.jsx(l, {
                        result: o,
                        withLights: f
                    }), s.jsx(b, {
                        visible: f,
                        amount: i,
                        currency: p,
                        currencyDecimals: m
                    })]
                })
            }
                , v = o.Pi((() => {
                    const t = f.oR()
                        , e = {
                            visible: t.layout.youWinVisible,
                            isDesktop: t.layout.isDesktop,
                            isLandscape: t.layout.isLandscape,
                            isClassicLayout: t.layout.isClassicLayout,
                            isTablet: t.layout.isTablet,
                            amount: t.result.currentPlayerTotalPayout,
                            result: t.result.result,
                            winningAnimationStarted: t.result.winningAnimationStarted,
                            currency: t.agSubscriber.currencySymbol,
                            currencyDecimals: t.settings.currencyDecimals
                        };
                    return s.jsx(g, Object.assign({}, e))
                }
                ))
        }
        ,
        937402: (t, e, i) => {
            i.d(e, {
                A: () => v,
                n: () => y
            });
            var s = i(567557)
                , n = i(188464)
                , o = i(989526)
                , r = i(289307)
                , a = i(961471)
                , c = i(964965)
                , l = i(641430)
                , h = i(18985);
            class u {
                constructor(t) {
                    this.props = t,
                        this.canvas = null,
                        this.circleItemsOffset = 0,
                        this.itemSize = 0,
                        this.visibleItemsAmount = 0,
                        this.lastCanvasSize = {
                            width: 0,
                            height: 0
                        },
                        this.scrollX = 0
                }
                contentWidth() {
                    return Math.round(r.$_ + this.circleItemsOffset * (this.amountOfRenderedItems() - 1) + this.itemSize * this.amountOfRenderedItems() + r.$_)
                }
                visibleAreaWidth() {
                    return this.lastCanvasSize.width
                }
                setScrollX(t) {
                    var e;
                    this.scrollX = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                init(t) {
                    this.canvas = t,
                        this.canvas.addElement(this)
                }
                setBetNumberImage(t) {
                    var e;
                    this.betNumberImage = t,
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                updateHistoryItems(t) {
                    var e;
                    this.props.items = t,
                        this.setVisibleItemsAmount(),
                        null === (e = this.canvas) || void 0 === e || e.scheduleDraw()
                }
                draw(t) {
                    const e = this.lastCanvasSize.width !== t.width || this.lastCanvasSize.height !== t.height;
                    if (this.lastCanvasSize = {
                        width: t.width,
                        height: t.height
                    },
                        this.circleItemsOffset = -.01 * t.width,
                        this.itemSize = .9 * t.height,
                        e && this.setVisibleItemsAmount(),
                        !this.betNumberImage || !this.props.items || this.props.items.length < 1)
                        return !1;
                    const i = t.width
                        , s = .5 * (t.width - i) + this.scrollX;
                    for (let e = this.amountOfRenderedItems() - 1; e >= 0; e--) {
                        const i = s + r.$_ + .5 * this.itemSize + e * (this.itemSize + this.circleItemsOffset);
                        l.k8(i - .5 * this.itemSize, this.itemSize, t.width) && (t.context.strokeStyle = 0 === e ? "rgba(225, 190, 122, 1)" : "rgba(255, 191, 122, 1)",
                            t.context.fillStyle = 0 === e ? "rgba(106, 1, 2, 1)" : "rgba(74, 3, 2, 1)",
                            c.P({
                                image: this.betNumberImage,
                                betCode: this.props.items[e],
                                context: t.context,
                                highlight: 0 === e,
                                sizeValues: {
                                    itemSize: this.itemSize,
                                    x: i,
                                    y: .5 * t.height
                                }
                            }))
                    }
                    return this.amountOfRenderedItems() > this.visibleItemsAmount && a.T(0 !== this.scrollX, this.scrollX > -(this.contentWidth() - this.visibleAreaWidth()), t),
                        !1
                }
                dispose() {
                    var t;
                    null === (t = this.canvas) || void 0 === t || t.removeElement(this)
                }
                setVisibleItemsAmount() {
                    const t = l.sU({
                        areaWidth: this.lastCanvasSize.width,
                        padding: r.$_,
                        itemsOffset: this.circleItemsOffset,
                        itemSize: this.itemSize || 1
                    });
                    this.visibleItemsAmount = Math.min(this.props.items.length, t)
                }
                amountOfRenderedItems() {
                    return h.uZ(this.props.scrollableColumnCount, this.visibleItemsAmount, this.props.items.length)
                }
            }
            var d = i(917528)
                , p = i(563708)
                , m = i(725262);
            class b {
                constructor(t) {
                    this.props = t;
                    const { items: e, scrollableColumnCount: i } = this.props;
                    this.historyItems = new u({
                        items: e,
                        scrollableColumnCount: i
                    })
                }
                init(t) {
                    this.historyItems.init(t),
                        this.scrollHandler = new d.Y({
                            container: t.canvas,
                            scrollable: this.historyItems,
                            scrollableAreaWidth: t.canvas.clientWidth,
                            useTouchEvents: !0,
                            resetScrollOnClickOutside: !0
                        }),
                        this.props.gameAssetsPromise.then((t => {
                            const e = new m.V(t.betNumbersIcons, p.a);
                            this.historyItems.setBetNumberImage(e)
                        }
                        ))
                }
                updateHistory(t) {
                    var e;
                    this.historyItems.updateHistoryItems(t),
                        null === (e = this.scrollHandler) || void 0 === e || e.reset()
                }
                dispose() {
                    var t;
                    this.historyItems.dispose(),
                        null === (t = this.scrollHandler) || void 0 === t || t.dispose()
                }
            }
            var f = i(517720)
                , g = i(390634);
            class v extends o.PureComponent {
                constructor(t) {
                    super(t),
                        this.canvas = null,
                        this.updateRef = t => {
                            this.clearCanvas(),
                                t && (this.canvas = new g.X(t),
                                    this.historyIntegration.init(this.canvas))
                        }
                        ,
                        this.historyIntegration = new b({
                            items: t.history,
                            scrollableColumnCount: t.scrollableColumnCount,
                            gameAssetsPromise: t.gameAssetsPromise
                        })
                }
                componentDidUpdate(t) {
                    this.props.history !== t.history && this.historyIntegration.updateHistory(this.props.history)
                }
                render() {
                    return s.jsx("div", {
                        className: "container--1456a",
                        "data-role": "history-statistics",
                        ref: this.updateRef
                    })
                }
                componentWillUnmount() {
                    this.clearCanvas()
                }
                clearCanvas() {
                    this.canvas && (this.historyIntegration.dispose(),
                        this.canvas.destroy(),
                        this.canvas = null)
                }
            }
            const y = n.Pi((() => {
                const t = f.oR()
                    , e = {
                        history: t.history.history,
                        scrollableColumnCount: t.history.scrollableColumnsCount,
                        gameAssetsPromise: t.preloader.gameAssetsPromise
                    };
                return s.jsx(v, Object.assign({}, e))
            }
            ))
        }
        ,
        153360: (t, e, i) => {
            i.d(e, {
                Iy: () => a,
                bs: () => r
            });
            var s = i(989526)
                , n = i(208822);
            function o(t) {
                s.useEffect((() => (n.kp(t),
                    () => n.Sd(t))), [t])
            }
            function r(t) {
                const [e, i] = s.useState(0)
                    , n = s.useCallback((() => {
                        if (t.current) {
                            const e = parseFloat(getComputedStyle(t.current).width);
                            i(Number.isNaN(e) ? 0 : e)
                        }
                    }
                    ), [t]);
                return s.useEffect((() => {
                    n()
                }
                ), []),
                    o(n),
                    e
            }
            function a(t) {
                const [e, i] = s.useState(0)
                    , n = s.useCallback((() => {
                        if (t.current) {
                            const e = parseFloat(getComputedStyle(t.current).height);
                            i(Number.isNaN(e) ? 0 : e)
                        }
                    }
                    ), [t]);
                return s.useEffect((() => {
                    n()
                }
                ), []),
                    o(n),
                    e
            }
        }
        ,
        916476: (t, e, i) => {
            i.d(e, {
                P: () => n
            });
            var s = i(989526);
            function n(t, e) {
                return s.useCallback((i => {
                    e(t, i)
                }
                ), [e])
            }
        }
        ,
        149477: (t, e, i) => {
            i.d(e, {
                C: () => m
            });
            var s = i(567557)
                , n = (i(989526),
                    i(540712))
                , o = i(188464)
                , r = i(916476)
                , a = i(517720)
                , c = i(994373)
                , l = i(962525);
            const h = "desktop--becfc"
                , u = {
                    [l.qi.MobilePortrait]: "portrait--557cc",
                    [l.qi.MobileLandscape]: "landscape--5291e",
                    [l.qi.DesktopImmersive]: h,
                    [l.qi.DesktopClassic]: h,
                    [l.qi.Tablet]: "tablet--8b38d"
                }
                , d = t => {
                    const e = r.P(c.w.FlyingChipsChipstack, t.setReactReference);
                    return s.jsx("div", {
                        className: n.Z("chipstack--4468d", u[t.componentLayout], {
                            "hasNotch--76158": t.hasNotch
                        }),
                        ref: e
                    })
                }
                , p = o.Pi((() => {
                    const t = a.oR()
                        , e = {
                            setReactReference: t.references.setReactReference,
                            componentLayout: t.layout.componentLayout,
                            hasNotch: t.settings.DS.HAS_NOTCH
                        };
                    return s.jsx(d, Object.assign({}, e))
                }
                ))
                , m = () => s.jsx("div", {
                    className: "placeholders--9f1c0",
                    children: s.jsx(p, {})
                })
        }
        ,
        854677: (t, e, i) => {
            i.d(e, {
                i: () => b,
                _: () => f
            });
            var s = i(567557)
                , n = i(540712)
                , o = i(188464)
                , r = i(989526)
                , a = i(869676)
                , c = i(517720)
                , l = i(988161)
                , h = i(945590)
                , u = i(2435)
                , d = i(328402)
                , p = i(922402);
            const m = "rtl--4ff78"
                , b = ({ setAdvancedStatisticsItemsCount: t, isDesktop: e, statisticsItemsCount: i, log: o }) => {
                    const c = (i - a.X) / (a.j5 - a.X)
                        , b = u.Pz() && !e
                        , f = r.useCallback((e => {
                            const i = (s = e,
                                Math.round(a.X + (a.j5 - a.X) * s));
                            var s;
                            o(l.Zj(i)),
                                t(i)
                        }
                        ), [t, o]);
                    return s.jsxs("div", {
                        className: n.Z("slider--76726", {
                            "desktop--b7345": e,
                            [m]: b
                        }),
                        children: [s.jsx("div", {
                            className: "label--f361d",
                            children: u.Iu(h.B2.LastNRounds, [i])
                        }), s.jsxs("div", {
                            className: "wrapper--332a7",
                            children: [s.jsx("div", {
                                className: "bar--a1206",
                                "data-interactive": "true",
                                children: s.jsx(d.iR, {
                                    value: c,
                                    onChange: f,
                                    theme: e ? d.G$.Desktop : d.G$.Mobile,
                                    gameTheme: p.J.Default,
                                    isRtl: b
                                })
                            }), s.jsx("div", {
                                className: n.Z("badge--75665", {
                                    [m]: b
                                }),
                                children: i
                            })]
                        })]
                    })
                }
                , f = o.Pi((() => {
                    const t = c.oR()
                        , e = {
                            log: t.logProcessor.log,
                            setAdvancedStatisticsItemsCount: t.history.setAdvancedStatisticsItemsCount,
                            isDesktop: t.layout.isDesktop,
                            statisticsItemsCount: t.history.advancedStatisticsItemsCount
                        };
                    return s.jsx(b, Object.assign({}, e))
                }
                ))
        }
        ,
        242129: (t, e, i) => {
            i.d(e, {
                g: () => y,
                J: () => v
            });
            var s = i(567557)
                , n = i(188464)
                , o = i(989526)
                , r = i(916476)
                , a = i(988161);
            function c(t) {
                return () => {
                    (function (t) {
                        t.logProcessor.log(a.u4(t.history.isExpanded)),
                            t.history.toggleExpandedMode(),
                            t.onboardingBubbleProcessor.hideStatisticsPromo()
                    }
                    )(t)
                }
            }
            var l = i(517720)
                , h = i(994373)
                , u = i(945590)
                , d = i(559634)
                , p = i(333940)
                , m = i(894176)
                , b = i(358800)
                , f = i(584434);
            const g = t => {
                var { state: e } = t
                    , i = p._T(t, ["state"]);
                return s.jsx(f.F, Object.assign({}, i, {
                    role: "statistics-button",
                    state: e,
                    iconComponent: s.jsx(b.g, {
                        state: e
                    }),
                    soundToPlay: m.k6.ClickUIButton
                }))
            }
                ;
            g.defaultProps = {
                tooltip: "tooltip.statistics"
            };
            const v = t => {
                const { onClick: e, isExpanded: i, setReactReference: n, isVisible: a } = t
                    , c = i ? d.BN.Activated : d.BN.Default
                    , l = o.useCallback((() => {
                        e()
                    }
                    ), [e])
                    , p = r.P(h.w.StatisticsButton, n);
                return a ? s.jsx(g, {
                    buttonRef: p,
                    onClick: l,
                    state: c,
                    tooltip: u.B2.Statistics,
                    withTooltip: !0
                }) : null
            }
                , y = n.Pi((() => {
                    const t = l.oR()
                        , e = {
                            isExpanded: t.history.isExpanded,
                            onClick: c(t),
                            setReactReference: t.references.setReactReference,
                            isVisible: !t.layout.isClassicLayout
                        };
                    return s.jsx(v, Object.assign({}, e))
                }
                ))
        }
        ,
        517720: (t, e, i) => {
            i.d(e, {
                nX: () => r,
                oR: () => a
            });
            var s = i(567557)
                , n = i(989526);
            const o = n.createContext(null);
            function r(t, e) {
                return s.jsx(o.Provider, {
                    value: t,
                    children: s.jsx(e, {})
                })
            }
            function a() {
                const t = n.useContext(o);
                if (!t)
                    throw new Error("Store should be provided to StoreContext");
                return t
            }
        }
        ,
        490796: (t, e, i) => {
            i.d(e, {
                A2: () => y,
                OG: () => v
            });
            var s = i(567557)
                , n = i(188464)
                , o = i(989526)
                , r = i(916476)
                , a = i(517720)
                , c = i(988161);
            function l(t) {
                return e => {
                    (function (t, e) {
                        e.preferences.setAdvancedBettingGrid(t),
                            e.logProcessor.log(c.UQ(t)),
                            e.onboardingBubbleProcessor.hideAdvancedBettingGridPromo()
                    }
                    )(e, t)
                }
            }
            const h = "icon--5f084"
                , u = () => s.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: h,
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-role": "simple-icon",
                    children: s.jsx("path", {
                        d: "m20 6v5h-7v-6h6c.2652 0 .5196.10537.7072.29291.1875.18753.2928.44187.2928.70709zm-16 12v-5h7v6h-6c-.26522 0-.51962-.1054-.70715-.2929-.18754-.1875-.29285-.4419-.29285-.7071zm7-13h-6c-.26522 0-.51962.10537-.70715.29291-.18754.18753-.29285.44187-.29285.70709v5h7zm8 14h-6v-6h7v5c0 .2652-.1053.5196-.2928.7071-.1876.1875-.442.2929-.7072.2929z"
                    })
                })
                , d = () => s.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: h,
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-role": "advanced-icon",
                    children: s.jsx("path", {
                        d: "m6.01 4h12l-.72 1.46c-.17.34-.52.56-.9.56h-8.76c-.38 0-.73-.21-.9-.55l-.73-1.46zm12 16.02h-11.99999l.72-1.46c.17-.34.52-.56.9-.56h8.75999c.38 0 .73.21.9.55l.73 1.46zm2.01-2.01v-12l-.01-.01-1.46.73c-.34.17-.55.52-.55.9v8.76c0 .38.22.73.56.9zm-16.02 0v-11.99999l1.46.72c.34.17.56.52.56.9v8.75999c0 .38-.21.73-.55.9zm4.01001-9.99999h7.99999v7.99999h-7.99999z"
                    })
                })
                , p = o.memo((t => {
                    const { isAdvancedBettingMode: e } = t
                        , i = e ? u : d;
                    return s.jsx(i, {})
                }
                ));
            var m = i(994373)
                , b = i(945590)
                , f = i(894176)
                , g = i(584434);
            const v = t => {
                const { isAdvancedBettingMode: e, onClick: i, state: n, withTooltip: a, setReactReference: c } = t
                    , l = o.useCallback((() => {
                        i(!e)
                    }
                    ), [i, e])
                    , h = r.P(m.w.AdvancedBettingGridButton, c);
                return s.jsx(g.F, {
                    onClick: l,
                    buttonRef: h,
                    role: "switch-betting-grid-button",
                    iconComponent: s.jsx(p, {
                        isAdvancedBettingMode: e
                    }),
                    tooltip: e ? b.B2.LessBets : b.B2.MoreBets,
                    withTooltip: a,
                    soundToPlay: f.k6.ClickUIButton,
                    state: n
                })
            }
                , y = n.Pi((() => {
                    const t = a.oR()
                        , e = {
                            onClick: l(t),
                            state: t.layout.switchBettingGridButtonState,
                            isAdvancedBettingMode: t.bets.isAdvancedBettingMode,
                            withTooltip: t.layout.isDesktop,
                            setReactReference: t.references.setReactReference
                        };
                    return s.jsx(v, Object.assign({}, e))
                }
                ))
        }
        ,
        898439: (t, e, i) => {
            i.d(e, {
                $: () => c
            });
            var s = i(567557)
                , n = i(329645)
                , o = i(2435)
                , r = i(254679)
                , a = i(585504);
            const c = {
                HelpComponentListCreator: async (t, e, { currencySymbol: a, customizableButton: c }) => {
                    const { GameObjectiveChapter: l, GameRulesChapter: h, GameViewChapter: u, BetTypesChapter: d, PayoutsChapter: p, ReturnToPlayerChapter: m, BetStatisticsChapter: b, RecentGameResultsChapter: f } = await i.e(32406).then(i.bind(i, 744827))
                        , { PlaceBetsChapter: g } = await i.e(32406).then(i.bind(i, 375207))
                        , { ChatChapter: v } = await i.e(28335).then(i.bind(i, 813214))
                        , y = e.minTableLimit() || 0
                        , S = e.maxTableLimit() || 0
                        , w = e.getTableName()
                        , x = e.getChipAmounts()
                        , C = t === n.t4.Desktop
                        , A = e.useRedesignedDrawerHelp()
                        , B = !C && A
                        , _ = {
                            id: "GameObjective",
                            title: o.Iu("help.gameObjective.title"),
                            content: s.jsx(l, {
                                tableName: w
                            })
                        }
                        , P = {
                            id: "GameRules",
                            title: o.Iu("help.gameRules.title"),
                            content: s.jsx(h, {})
                        }
                        , O = {
                            id: "GameView",
                            title: o.Iu("help.gameView.title"),
                            content: s.jsx(u, {})
                        }
                        , T = {
                            id: "BetTypes",
                            title: o.Iu("help.betTypes.title"),
                            content: s.jsx(d, {})
                        }
                        , j = {
                            id: "Payouts",
                            title: o.Iu("help.payouts.title"),
                            content: s.jsx(p, {
                                isHelpRedesigned: B
                            })
                        }
                        , k = {
                            id: "ReturnToPlayer",
                            title: o.Iu("help.returnToPlayer.title"),
                            content: s.jsx(m, {})
                        }
                        , E = {
                            id: "BetStatistics",
                            title: o.Iu("help.betStatistics.title"),
                            content: s.jsx(b, {})
                        }
                        , L = {
                            id: "RecentGameResults",
                            title: o.Iu("help.recentGameResults.title"),
                            content: s.jsx(f, {})
                        }
                        , R = {
                            id: "PlaceBets",
                            title: o.Iu("help.placeBets.title"),
                            content: s.jsx(g, {
                                tableName: w,
                                currencySymbol: a,
                                maxLimit: S,
                                minLimit: y,
                                platform: t,
                                chipAmounts: x,
                                customizableButton: c
                            })
                        }
                        , M = {
                            id: "Chat",
                            title: o.Iu("help.chat.title"),
                            content: s.jsx(v, {
                                platform: t,
                                suppressChat: e.suppressChat(),
                                gameType: e.getGameType(),
                                dealerType: "GamePresenter",
                                customizableButton: c,
                                isHelpRedesigned: A
                            })
                        };
                    return [_, P, O, T, j, k, R, r.o.LiveSupport, E, L, M, r.o.Tipping, r.o.GameNumber, r.o.Sound, r.o.GameHistory, r.o.SettingsWithoutSideBets, r.o.DepositAndWithdraw, r.o.ResponsibleGaming, r.o.InformazioniAams, r.o.ErrorHandling, r.o.DisconnectionPolicy, r.o.AutomatedDecision, r.o.MoreGames, r.o.MultiGamePlay, r.o.ShortcutKeys, r.o.Home]
                }
                ,
                HelpCreator: async ({ settings: t, currencySymbol: e, customizableButton: r }) => {
                    const { GameObjectiveChapter: c, GameRulesChapter: l, GameViewChapter: h, BetTypesChapter: u, PayoutsChapter: d, ReturnToPlayerChapter: p, BetStatisticsChapter: m, RecentGameResultsChapter: b } = await i.e(32406).then(i.bind(i, 744827))
                        , { PlaceBetsChapter: f } = await i.e(32406).then(i.bind(i, 375207))
                        , g = t.DeviceSupport.PLATFORM
                        , v = t.minTableLimit() || 0
                        , y = t.maxTableLimit() || 0
                        , S = t.getTableName()
                        , w = t.getChipAmounts()
                        , x = !(g === n.t4.Desktop) && t.useRedesignedDrawerHelp();
                    return {
                        customChapters: {
                            gameDetails: [{
                                chapters: [{
                                    id: "GameObjective",
                                    title: o.Iu("help.gameObjective.title"),
                                    content: s.jsx(c, {
                                        tableName: S
                                    })
                                }, {
                                    id: "GameRules",
                                    title: o.Iu("help.gameRules.title"),
                                    content: s.jsx(l, {})
                                }, {
                                    id: "GameView",
                                    title: o.Iu("help.gameView.title"),
                                    content: s.jsx(h, {})
                                }, {
                                    id: "BetTypes",
                                    title: o.Iu("help.betTypes.title"),
                                    content: s.jsx(u, {})
                                }, {
                                    id: "Payouts",
                                    title: o.Iu("help.payouts.title"),
                                    content: s.jsx(d, {
                                        isHelpRedesigned: x
                                    })
                                }, {
                                    id: "ReturnToPlayer",
                                    title: o.Iu("help.returnToPlayer.title"),
                                    content: s.jsx(p, {})
                                }, {
                                    id: "PlaceBets",
                                    title: o.Iu("help.placeBets.title"),
                                    content: s.jsx(f, {
                                        tableName: S,
                                        currencySymbol: e,
                                        maxLimit: y,
                                        minLimit: v,
                                        platform: g,
                                        chipAmounts: w,
                                        customizableButton: r
                                    })
                                }, {
                                    id: "BetStatistics",
                                    title: o.Iu("help.betStatistics.title"),
                                    content: s.jsx(m, {})
                                }, {
                                    id: "RecentGameResults",
                                    title: o.Iu("help.recentGameResults.title"),
                                    content: s.jsx(b, {})
                                }]
                            }]
                        },
                        filterMap: {
                            overrideDefault: {
                                [a.X.SpeedMode]: !1
                            }
                        }
                    }
                }
            }
        }
        ,
        869676: (t, e, i) => {
            i.d(e, {
                LZ: () => o,
                Rr: () => p,
                Tb: () => l,
                X: () => u,
                YN: () => c,
                j5: () => h,
                k9: () => d,
                ol: () => r,
                yx: () => a
            });
            var s = i(945590)
                , n = i(962525);
            const o = `${["Inter", "Arial"].join(", ")}, sans-serif`
                , r = {
                    [n.jb.Numbers]: "2.85",
                    [n.jb.BigSmall]: "0.95",
                    [n.jb.OddEven]: "0.95",
                    [n.jb.Kwok]: "0.95",
                    [n.jb.Nim]: "1.90",
                    [n.jb.Ssh]: "0.316667"
                }
                , a = {
                    [n.vm.One]: s.Tb.One,
                    [n.vm.Two]: s.Tb.Two,
                    [n.vm.Three]: s.Tb.Three,
                    [n.vm.Four]: s.Tb.Four,
                    [n.vm.Big]: s.Tb.Big,
                    [n.vm.Even]: s.Tb.Even,
                    [n.vm.Small]: s.Tb.Small,
                    [n.vm.Odd]: s.Tb.Odd,
                    [n.vm.Kwok12]: s.Tb.Kwok12,
                    [n.vm.Kwok41]: s.Tb.Kwok41,
                    [n.vm.Kwok23]: s.Tb.Kwok23,
                    [n.vm.Kwok34]: s.Tb.Kwok34,
                    [n.vm.Nim12]: s.Tb.Nim12,
                    [n.vm.Nim13]: s.Tb.Nim13,
                    [n.vm.Nim14]: s.Tb.Nim14,
                    [n.vm.Nim21]: s.Tb.Nim21,
                    [n.vm.Nim23]: s.Tb.Nim23,
                    [n.vm.Nim24]: s.Tb.Nim24,
                    [n.vm.Nim31]: s.Tb.Nim31,
                    [n.vm.Nim32]: s.Tb.Nim32,
                    [n.vm.Nim34]: s.Tb.Nim34,
                    [n.vm.Nim41]: s.Tb.Nim41,
                    [n.vm.Nim42]: s.Tb.Nim42,
                    [n.vm.Nim43]: s.Tb.Nim43,
                    [n.vm.Ssh321]: s.Tb.Ssh321,
                    [n.vm.Ssh214]: s.Tb.Ssh214,
                    [n.vm.Ssh432]: s.Tb.Ssh432,
                    [n.vm.Ssh143]: s.Tb.Ssh143
                }
                , c = {
                    [n.jb.Numbers]: s.FL.Numbers,
                    [n.jb.OddEven]: s.FL.OddEven,
                    [n.jb.BigSmall]: s.FL.BigSmall,
                    [n.jb.Kwok]: s.FL.Kwok,
                    [n.jb.Ssh]: s.FL.Ssh,
                    [n.jb.Nim]: s.FL.Nim
                }
                , l = {
                    [n.vm.One]: n.jb.Numbers,
                    [n.vm.Two]: n.jb.Numbers,
                    [n.vm.Three]: n.jb.Numbers,
                    [n.vm.Four]: n.jb.Numbers,
                    [n.vm.Big]: n.jb.BigSmall,
                    [n.vm.Even]: n.jb.OddEven,
                    [n.vm.Small]: n.jb.BigSmall,
                    [n.vm.Odd]: n.jb.OddEven,
                    [n.vm.Kwok12]: n.jb.Kwok,
                    [n.vm.Kwok41]: n.jb.Kwok,
                    [n.vm.Kwok23]: n.jb.Kwok,
                    [n.vm.Kwok34]: n.jb.Kwok,
                    [n.vm.Nim12]: n.jb.Nim,
                    [n.vm.Nim13]: n.jb.Nim,
                    [n.vm.Nim14]: n.jb.Nim,
                    [n.vm.Nim21]: n.jb.Nim,
                    [n.vm.Nim23]: n.jb.Nim,
                    [n.vm.Nim24]: n.jb.Nim,
                    [n.vm.Nim31]: n.jb.Nim,
                    [n.vm.Nim32]: n.jb.Nim,
                    [n.vm.Nim34]: n.jb.Nim,
                    [n.vm.Nim41]: n.jb.Nim,
                    [n.vm.Nim42]: n.jb.Nim,
                    [n.vm.Nim43]: n.jb.Nim,
                    [n.vm.Ssh321]: n.jb.Ssh,
                    [n.vm.Ssh214]: n.jb.Ssh,
                    [n.vm.Ssh432]: n.jb.Ssh,
                    [n.vm.Ssh143]: n.jb.Ssh
                }
                , h = 500
                , u = 50
                , d = 1e3
                , p = 500
        }
        ,
        367444: (t, e, i) => {
            i.d(e, {
                Q: () => ts
            });
            var s, n = i(156828), o = i(517720), r = i(859002), a = i(990125);
            (function (t) {
                t.AdvancedBettingGrid = "advancedBettingGrid",
                    t.AdvancedBettingGridOnboardingBubbleCount = "advancedBettingGridBubbleCount",
                    t.StatisticsOnboardingBubbleCount = "statisticsBubbleCount"
            }
            )(s || (s = {}));
            const c = "fantan.common."
                , l = {
                    [a.c.AdvancedBettingGrid]: s.AdvancedBettingGridOnboardingBubbleCount,
                    [a.c.Statistics]: s.StatisticsOnboardingBubbleCount
                }
                , h = t => ({
                    [s.AdvancedBettingGrid]: {
                        storageKey: c + t.getTableId() + s.AdvancedBettingGrid,
                        isValidValue: t => "boolean" == typeof t,
                        getDefaultValue: () => !1
                    },
                    [s.AdvancedBettingGridOnboardingBubbleCount]: {
                        storageKey: c + s.AdvancedBettingGridOnboardingBubbleCount,
                        isValidValue: t => r.Z(t) && t >= 0,
                        getDefaultValue: () => 0
                    },
                    [s.StatisticsOnboardingBubbleCount]: {
                        storageKey: c + s.StatisticsOnboardingBubbleCount,
                        isValidValue: t => r.Z(t) && t >= 0,
                        getDefaultValue: () => 0
                    }
                });
            var u = i(962525);
            function d(t) {
                const e = e => {
                    const i = `bet_${e}_min_limit`;
                    return Number(t.rawConfig[i] || 0)
                }
                    , i = e => {
                        const i = `bet_${e}_max_limit`;
                        return Number(t.rawConfig[i] || 0)
                    }
                    , s = Object.values(u.jb)
                    , n = Math.min(...s.map((t => e(t))))
                    , o = Math.max(...s.map((t => i(t))));
                return {
                    getMaxBetGroupLimit: i,
                    getMinBetGroupLimit: e,
                    minTableLimit: () => n,
                    maxTableLimit: () => o,
                    historyScrollableColumnCount: t.rawConfig.historyScrollableColumnCount
                }
            }
            var p = i(559621)
                , m = i(329645)
                , b = i(707900)
                , f = i(721391)
                , g = i(216079);
            class v {
                get isLowBalance() {
                    return !this.reservedBet && this.balance < this.settings.minBetAmount
                }
                constructor(t) {
                    this.settings = t,
                        this.balance = 0,
                        this.reservedBet = 0,
                        this.lastSelectedChip = 0,
                        this.chipColors = [],
                        this.videoQuality = void 0,
                        this.videoPlayerName = "NONE",
                        this.autoPlayHovered = !1,
                        this.platform = m.t4.Desktop,
                        this.layout = f.m.ImmersiveV2,
                        this.gameDimension = {
                            containerHeight: 0,
                            containerWidth: 0,
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0,
                            boxHeight: 0,
                            boxWidth: 0
                        },
                        this.streamForCurrentLayout = g.VideoPlaylist.Default,
                        this.orientation = b.i.Landscape,
                        this.isFullscreen = !1,
                        this.mobileMenuActiveButton = void 0,
                        this.currencySymbol = "",
                        this.preferences = {
                            [s.AdvancedBettingGrid]: !1,
                            [s.AdvancedBettingGridOnboardingBubbleCount]: 0,
                            [s.StatisticsOnboardingBubbleCount]: 0,
                            preferencesAreLoaded: !1
                        },
                        this.disposers = [],
                        p.rC(this, {
                            balance: p.LO,
                            reservedBet: p.LO,
                            lastSelectedChip: p.LO,
                            chipColors: p.LO,
                            videoQuality: p.LO,
                            videoPlayerName: p.LO,
                            autoPlayHovered: p.LO,
                            layout: p.LO,
                            gameDimension: p.LO.struct,
                            streamForCurrentLayout: p.LO,
                            orientation: p.LO,
                            isFullscreen: p.LO,
                            mobileMenuActiveButton: p.LO,
                            currencySymbol: p.LO,
                            isLowBalance: p.Fl,
                            preferences: p.LO.struct,
                            serverBalance: p.Fl
                        })
                }
                bindToAbstractGame(t, e, i) {
                    this.platform = t.platform,
                        this.disposers.push(t.gameDimensions.subscribe(p.aD((t => {
                            this.gameDimension = t
                        }
                        ))), t.orientation.subscribe(p.aD((t => {
                            this.orientation = t
                        }
                        ))), t.fullscreen.isInFullscreen.subscribe(p.aD((t => {
                            this.isFullscreen = t
                        }
                        ))), t.balance.available.subscribe(p.aD((t => {
                            this.balance = t || 0
                        }
                        ))), t.balance.reserved.subscribe(p.aD((t => {
                            this.reservedBet = t || 0
                        }
                        ))), t.betAmounts.lastSelectedAmount.subscribe(p.aD((t => {
                            this.lastSelectedChip = t
                        }
                        ))), t.chipstack.chipColors.subscribe(p.aD((t => {
                            this.chipColors = [...t]
                        }
                        ))), t.video.quality.subscribe(p.aD((t => {
                            this.videoQuality = t
                        }
                        ))), t.video.streamForCurrentLayout.subscribe(p.aD((t => {
                            this.streamForCurrentLayout = t
                        }
                        ))), t.video.playerName.subscribe(p.aD((t => {
                            this.videoPlayerName = t || "NONE"
                        }
                        ))), t.betting.undo.subscribe(e.undo), t.betting.undoAll.subscribe(e.undoAll), t.betting.repeat.subscribe(e.repeat), t.betting.double.subscribe(e.double), t.preferences.values.subscribe(p.aD((t => {
                            i.setIsAdvancedBettingMode(t[s.AdvancedBettingGrid]),
                                this.preferences = t
                        }
                        ))), t.mobileMenu.activeButton.subscribe(p.aD((t => {
                            this.mobileMenuActiveButton = t
                        }
                        ))), t.layout.current.subscribe(p.aD((t => {
                            this.layout = t
                        }
                        ))), t.currencySymbol.subscribe(p.aD((t => {
                            this.currencySymbol = t
                        }
                        ))))
                }
                get serverBalance() {
                    return this.balance + this.reservedBet
                }
                dispose() {
                    for (const t of this.disposers)
                        t();
                    this.disposers.length = 0
                }
            }
            var y = i(517109)
                , S = i(563707)
                , w = i(179645);
            const x = {
                strokeWidth: 2,
                overallWidth: 320,
                overallHeight: 305,
                fontSize: 11,
                bettingStatisticsFontSize: 7,
                spotPayoutFontSize: 7,
                numericImageHeight: .095,
                chipSize: .092,
                playerIconSizeRatio: 1.85,
                isAdvanced: !0,
                ornamentOffset: 1.1,
                betSpots: i(808446).H({
                    contentWidth: 320,
                    contentHeight: 305,
                    outerBetSpotSize: {
                        kwokHeight: .122,
                        nimHeight: .214,
                        sshHeight: .114
                    },
                    innerBetSpotScale: {
                        width: .48,
                        height: .48
                    },
                    chipPlacementMargins: {
                        horizontal: .03,
                        vertical: .045,
                        bottom: .008
                    },
                    strokeWidth: 1.5
                })
            };
            var C = i(773160);
            const A = {
                strokeWidth: 2,
                overallWidth: 322,
                overallHeight: 305,
                fontSize: 14,
                bettingStatisticsFontSize: 10,
                spotPayoutFontSize: 8,
                numericImageHeight: .153,
                chipSize: .11,
                playerIconSizeRatio: 2,
                isAdvanced: !1,
                betSpots: i(106627).i({
                    contentWidth: 322,
                    contentHeight: 305,
                    sideBetSizeWidth: .7,
                    chipPlacementMargins: {
                        side: .015,
                        center: .065
                    },
                    strokeWidth: 2
                })
            };
            function B(t, e, i) {
                return t || e ? i ? w.p : C.y : i ? x : A
            }
            var _;
            (function (t) {
                t.BetSpotValidation = "BetSpotValidation"
            }
            )(_ || (_ = {}));
            let P = {};
            var O = i(922871)
                , T = i(380338)
                , j = i(398259);
            function k(t, e) {
                return p.U5((() => e.decisionTimerProps), (e => {
                    e.hidden ? t.decisionTimer.hide() : t.decisionTimer.show(),
                        t.decisionTimer.setIsCountdown(!0),
                        t.decisionTimer.setCountdownFromSeconds(e.countdownFromSeconds),
                        t.decisionTimer.setStartTime(e.timerStartTimeMs),
                        e.freezeTimeSeconds && t.decisionTimer.setSecondsRemaining(e.freezeTimeSeconds)
                }
                ))
            }
            function E(t, e) {
                return p.U5((() => e.chipstackVisible), (e => {
                    e ? t.chipstack.show() : t.chipstack.hide(),
                        e ? t.layout.immersive.footer.expand() : t.layout.immersive.footer.collapse()
                }
                ), {
                    fireImmediately: !0
                })
            }
            function L(t, e) {
                return p.U5((() => ({
                    isDesktop: e.isDesktop,
                    isLandscape: e.isLandscape
                })), (e => {
                    e.isDesktop || e.isLandscape ? t.chipstack.labels.show() : t.chipstack.labels.hide()
                }
                ), {
                    fireImmediately: !0
                })
            }
            function R(t, e) {
                return p.U5((() => e.currentPhase), (e => {
                    switch (e) {
                        case u.rY.BetsOpen:
                            t.balance.setTotalBet(0),
                                t.balance.reserveBet(0),
                                t.lifecycle.openBets();
                            break;
                        case u.rY.BetsClosed:
                            t.balance.pauseBalanceUpdate(),
                                t.lifecycle.closeBets(),
                                t.winnersList.hide();
                            break;
                        case u.rY.Dealing:
                            t.balance.pauseBalanceUpdate();
                            break;
                        case u.rY.Resolved:
                            t.balance.reserveBet(0),
                                t.lifecycle.resolveGame({
                                    resetTotalBet: !1
                                }),
                                t.balance.pauseBalanceUpdate();
                            break;
                        case u.rY.Cancelled:
                            const e = t.balance.available.value + t.balance.totalBet.value;
                            t.balance.setTotalBet(0),
                                t.balance.reserveBet(0),
                                t.balance.setServerBalance(e),
                                t.lifecycle.resolveGame(),
                                t.winnersList.hide(),
                                t.toasts.show(T.Gz()),
                                t.balance.resumeBalanceUpdate();
                            break;
                        case u.rY.Cleared:
                            t.balance.resumeBalanceUpdate()
                    }
                }
                ))
            }
            function M(t, e) {
                return p.U5((() => t.betStatus), (t => {
                    if (t === u.zp.Accepted && void 0 !== e.balance.server.value) {
                        const t = e.balance.available.value;
                        e.balance.reserveBet(0),
                            e.balance.setServerBalance(t)
                    }
                }
                ))
            }
            function I(t, e) {
                return p.U5((() => e.isUndoEnabled), (e => {
                    e ? t.betting.undo.enable() : t.betting.undo.disable()
                }
                ))
            }
            function D(t, e) {
                return p.U5((() => e.isRepeatEnabled), (e => {
                    e ? t.betting.repeat.enable() : t.betting.repeat.disable()
                }
                ))
            }
            function N(t, e) {
                return p.U5((() => e.isDoubleEnabled), (e => {
                    e ? t.betting.double.enable() : t.betting.double.disable()
                }
                ))
            }
            function z(t, e) {
                return p.U5((() => e.winnerListRows), (e => {
                    e.length > 0 && t.winnersList.show(e)
                }
                ))
            }
            function G(t, e) {
                return e.subscribe((e => {
                    switch (e.type) {
                        case j.p.ErrorMessageToast:
                            t.handleError({
                                errorId: e.errorId
                            });
                            break;
                        case j.p.GenericToast:
                            t.toasts.show(e)
                    }
                }
                ))
            }
            function F(t, e) {
                return p.U5((() => e.isLowBalance), (e => {
                    e ? t.balance.setLow() : t.balance.setEnough()
                }
                ), {
                    fireImmediately: !0
                })
            }
            function V(t) {
                return t.tooltipProcessor.subscribeOnShow((e => {
                    const i = function (t) {
                        if (t.tooltip.id === _.BetSpotValidation)
                            return function (t) {
                                const e = t.references.reactReferences.BettingGrid;
                                if (!e)
                                    return;
                                const i = e.getBoundingClientRect()
                                    , s = t.bets.isAdvancedBettingMode
                                    , n = `${t.bets.isAdvancedBettingMode}/${t.layout.isLandscape}`;
                                P[n] || (P[n] = new y.f(B(t.platform === m.t4.Desktop, t.layout.isLandscape, s))),
                                    P[n].updateActualAreaSize(i.width);
                                const o = S.V(t.tooltip.betCode, P[n]);
                                return {
                                    id: t.tooltip.betCode,
                                    label: t.tooltip.text,
                                    left: Math.round(i.left + o.x + .5 * o.width - t.gameDimension.left),
                                    top: Math.round(i.top + o.y - t.gameDimension.top),
                                    type: t.tooltip.id
                                }
                            }(t)
                    }({
                        references: t.references,
                        gameDimension: t.agSubscriber.gameDimension,
                        platform: t.agSubscriber.platform,
                        tooltip: e,
                        bets: t.bets,
                        layout: t.layout
                    });
                    i && (void 0 !== i.type && t.ag.tooltips.hideByType(`${i.type}`),
                        t.ag.tooltips.add(i))
                }
                ))
            }
            function H(t) {
                return t.tooltipProcessor.subscribeOnHide((e => {
                    t.ag.tooltips.hideByType(e)
                }
                ))
            }
            function W(t, e) {
                return e.subscribeOnDealer((e => {
                    t.setDealer(e)
                }
                ))
            }
            function U(t, e) {
                return p.U5((() => e.gameInfo), (e => {
                    t.setGameRoundId(e.gameId),
                        t.setGameTime(e.gameNumber)
                }
                ))
            }
            function K(t, e) {
                return e.subscribe((e => {
                    t.preferences.setPreferences(e)
                }
                ))
            }
            function X(t, e) {
                return e.subscribeLastSelectedChip((e => {
                    t.betAmounts.selectBetAmount(e)
                }
                ))
            }
            function Z(t, e) {
                return e.subscribe((e => {
                    t.log(e)
                }
                ))
            }
            function Y(t, e) {
                return e.subscribeOnWinningAnimationStarted((() => {
                    t.lifecycle.winningAnimationStarted()
                }
                ))
            }
            function q(t, e) {
                return p.U5((() => e.currentPlayerTotalPayout), (e => {
                    if (e > 0) {
                        t.gameResult.setAmount(e);
                        const i = t.balance.server.value;
                        void 0 !== i && t.balance.setServerBalance(i + e)
                    }
                }
                ))
            }
            function Q(t) {
                return p.U5((() => t.layout.videoScale), (e => {
                    t.layout.isDesktop || t.ag.video.mobile.setScale(e)
                }
                ), {
                    fireImmediately: !0
                })
            }
            function $(t) {
                const { layout: e, ag: i } = t;
                return p.U5((() => ({
                    isDesktop: e.isDesktop,
                    isLandscape: e.isLandscape
                })), (({ isDesktop: t, isLandscape: e }) => {
                    t || i.layout.setCircleTimerPosition(e ? O.v.ExtraSpaceFromTop : O.v.Default)
                }
                ), {
                    fireImmediately: !0
                })
            }
            function J(t) {
                const { trafficLightProcessor: e, ag: i, layout: s } = t;
                return p.U5((() => ({
                    trafficLightProps: e.trafficLightProps,
                    isClassicLayout: s.isClassicLayout
                })), (({ trafficLightProps: t, isClassicLayout: e }) => {
                    e && i.statusBar.setProps(t)
                }
                ), {
                    fireImmediately: !0
                })
            }
            function tt(t) {
                const { ag: e, gamePhase: i } = t;
                return i.subscribeOnRestoreTimestamp((t => {
                    e.video.sync.skipPastEvents(t)
                }
                ))
            }
            var et, it = i(194231), st = i(178011), nt = i(190351), ot = i(140252), rt = i(771879), at = i(975638), ct = i(790259), lt = i(28253), ht = i(125514), ut = i(776454), dt = i(250930), pt = i(249210), mt = i(988161);
            (function (t) {
                t.PlaceChips = "fantan.placeChips"
            }
            )(et || (et = {}));
            var bt = i(161246);
            function ft(t, e, i) {
                return {
                    type: et.PlaceChips,
                    payload: {
                        chips: i.bet,
                        history: i.history,
                        gameId: t,
                        replyId: bt.x(et.PlaceChips),
                        betTags: e
                    }
                }
            }
            var gt = i(707318)
                , vt = i(959660);
            function yt(t) {
                const { openMwTables: e, mwLayout: i } = vt.K();
                return {
                    btMiniGame: gt.D.FanTan,
                    btVideoQuality: t.videoQuality,
                    btTableView: t.streamForCurrentLayout,
                    orientation: t.orientation,
                    videoProtocol: t.videoPlayerName,
                    openMwTables: String(e),
                    mwLayout: String(i)
                }
            }
            var St = i(302377)
                , wt = i(41678);
            class xt {
                constructor(t) {
                    this.props = t,
                        this.lastSelectedChipEmitter = St.z(),
                        this.dragChip = null,
                        this.placeChip = t => {
                            const e = {
                                [t]: this.props.agSubscriber.lastSelectedChip
                            }
                                , i = {
                                    [t]: pt.nN(this.props.bets.bet, t)
                                }
                                , s = pt.ej(i, e)
                                , n = this.processBet(s, pt.Xr(pt.ej(this.props.bets.bet, e), this.props.settings.getMaxBetLimit));
                            if (pt.u1(i, n))
                                return;
                            this.props.flyingChipsProcessor.runAnimation({
                                bets: e,
                                type: wt.T.Place,
                                animation: wt.X.StackToChip
                            });
                            const o = this.props.bets.bet
                                , r = pt.i3(this.props.bets.bet, n);
                            this.props.bets.add(r),
                                this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                    type: dt.W7.PlaceChip,
                                    bet: this.props.bets.bet,
                                    history: this.props.bets.history
                                })),
                                this.lastSelectedChipEmitter.notify(this.props.agSubscriber.lastSelectedChip),
                                this.props.logProcessor.log(mt.Qw({
                                    previousBet: o,
                                    newBet: this.props.bets.bet,
                                    betType: dt.W7.PlaceChip,
                                    isAdvanced: this.props.bets.isAdvancedBettingMode
                                }))
                        }
                        ,
                        this.repeatAuto = () => {
                            this.repeat(!0)
                        }
                        ,
                        this.repeat = (t = !1) => {
                            const e = this.processBet(this.props.bets.repeatBet);
                            if (!pt.u1(this.props.bets.bet, e)) {
                                this.props.flyingChipsProcessor.runAnimation({
                                    bets: e,
                                    type: wt.T.Place,
                                    animation: wt.X.StackToChip
                                });
                                const i = this.props.bets.bet;
                                this.props.bets.add(e),
                                    this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                        type: dt.W7.Repeat,
                                        bet: e,
                                        history: this.props.bets.history
                                    })),
                                    t || this.props.logProcessor.log(mt.Qw({
                                        previousBet: i,
                                        newBet: this.props.bets.bet,
                                        betType: dt.W7.Repeat,
                                        isAdvanced: this.props.bets.isAdvancedBettingMode
                                    }))
                            }
                        }
                        ,
                        this.double = () => {
                            const t = this.processBet(pt.xh(this.props.bets.bet));
                            if (!pt.u1(this.props.bets.bet, t)) {
                                const e = this.props.bets.bet;
                                this.props.bets.add(t),
                                    this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                        type: dt.W7.Double,
                                        bet: t,
                                        history: this.props.bets.history
                                    })),
                                    this.props.logProcessor.log(mt.Qw({
                                        previousBet: e,
                                        newBet: t,
                                        betType: dt.W7.Double,
                                        isAdvanced: this.props.bets.isAdvancedBettingMode
                                    }))
                            }
                        }
                        ,
                        this.undo = () => {
                            var t;
                            if (this.isUndoEnabled) {
                                const e = this.props.bets.bet;
                                this.props.bets.undo();
                                const i = this.props.bets.bet
                                    , s = it.Z(e, ((t, e, s) => st.Z(i, s) && nt.Z(i, s) === e ? t : {
                                        [s]: e
                                    }), {})
                                    , n = it.Z(i, ((t, i, s) => st.Z(e, s) ? t : s.toString()), "")
                                    , o = null === (t = ot.Z(rt.Z(s))) || void 0 === t ? void 0 : t.toString();
                                let r = {};
                                n ? r = {
                                    [n]: nt.Z(i, n)
                                } : o && (r = {
                                    [o]: nt.Z(s, o) - nt.Z(i, o, 0)
                                });
                                const a = at.Z(e) > at.Z(i) || !n ? wt.X.ChipToStack : wt.X.ChipToChip;
                                this.props.flyingChipsProcessor.runAnimation({
                                    to: n,
                                    bets: r,
                                    from: o,
                                    animation: a,
                                    type: wt.T.Undo
                                }),
                                    this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                        type: dt.W7.Undo,
                                        bet: this.props.bets.bet,
                                        history: this.props.bets.history
                                    })),
                                    this.props.logProcessor.log(mt.Qw({
                                        previousBet: e,
                                        newBet: this.props.bets.bet,
                                        betType: dt.W7.Undo,
                                        isAdvanced: this.props.bets.isAdvancedBettingMode
                                    }))
                            }
                        }
                        ,
                        this.undoAll = () => {
                            if (this.isUndoEnabled) {
                                const t = this.props.bets.bet;
                                this.props.flyingChipsProcessor.runAnimation({
                                    bets: t,
                                    type: wt.T.UndoAll,
                                    animation: wt.X.ChipToStack
                                }),
                                    this.props.bets.undoAll(),
                                    this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                        type: dt.W7.UndoAll,
                                        bet: pt.T,
                                        history: this.props.bets.history
                                    })),
                                    this.props.logProcessor.log(mt.Qw({
                                        previousBet: t,
                                        newBet: this.props.bets.bet,
                                        betType: dt.W7.UndoAll,
                                        isAdvanced: this.props.bets.isAdvancedBettingMode
                                    }))
                            }
                        }
                        ,
                        this.startDrag = t => {
                            const e = ct.Z(this.props.bets.bet, t);
                            this.dragChip = {
                                bet: e,
                                betCode: t
                            }
                        }
                        ,
                        this.endDrag = () => {
                            this.dragChip = null
                        }
                        ,
                        this.removeChip = t => {
                            const e = this.props.bets.bet
                                , i = lt.Z(this.props.bets.bet, t);
                            this.props.bets.remove(i),
                                this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                    type: dt.W7.RemoveChip,
                                    bet: this.props.bets.bet,
                                    history: this.props.bets.history
                                })),
                                this.lastSelectedChipEmitter.notify(this.props.agSubscriber.lastSelectedChip),
                                this.props.logProcessor.log(mt.Qw({
                                    previousBet: e,
                                    newBet: i,
                                    betType: dt.W7.RemoveChip,
                                    isAdvanced: this.props.bets.isAdvancedBettingMode
                                }))
                        }
                        ,
                        this.moveChip = t => {
                            if (!t || !this.dragChip)
                                return;
                            const e = this.props.bets.bet
                                , i = nt.Z(this.props.bets.bet, t) || 0
                                , s = nt.Z(this.dragChip.bet, this.dragChip.betCode) || 0
                                , n = ht.Z(lt.Z(this.props.bets.bet, this.dragChip.betCode), t, s + i);
                            this.props.bets.move(n),
                                this.props.transport.sendMessage(ft(this.props.gameInfo.gameInfo.gameId, yt(this.props.agSubscriber), {
                                    type: dt.W7.MoveChip,
                                    bet: this.props.bets.bet,
                                    history: this.props.bets.history
                                })),
                                this.lastSelectedChipEmitter.notify(this.props.agSubscriber.lastSelectedChip),
                                this.props.logProcessor.log(mt.Qw({
                                    previousBet: e,
                                    newBet: n,
                                    betType: dt.W7.MoveChip,
                                    isAdvanced: this.props.bets.isAdvancedBettingMode
                                }))
                        }
                        ,
                        p.rC(this, {
                            isBalanceSufficientForMinBet: p.Fl,
                            isBettingEnabled: p.Fl,
                            isUndoEnabled: p.Fl,
                            isRepeatEnabled: p.Fl,
                            isDoubleEnabled: p.Fl,
                            isRepeatVisible: p.Fl,
                            isDoubleVisible: p.Fl
                        }),
                        this.betValidators = [ut.Pj, ut.rB, ut.gI, ut.iY, ut.mX, ut.kQ]
                }
                get isBalanceSufficientForMinBet() {
                    return this.props.agSubscriber.serverBalance >= this.props.settings.minBetAmount
                }
                get isBettingEnabled() {
                    return this.props.bets.isBettingAllowed && this.isBalanceSufficientForMinBet
                }
                get isUndoEnabled() {
                    return this.isBettingEnabled && this.props.bets.hasBetHistory
                }
                get isRepeatEnabled() {
                    return this.isBettingEnabled && this.props.bets.hasRepeatBet && !this.props.bets.totalBet && this.props.agSubscriber.serverBalance >= pt.wf(this.props.bets.repeatBet)
                }
                get isDoubleEnabled() {
                    return this.isBettingEnabled && pt.mv(this.props.bets.bet, this.props.settings.getMaxBetLimit) && this.props.agSubscriber.serverBalance >= pt.Qr(this.props.bets.bet, this.props.settings.getMaxBetLimit)
                }
                get isRepeatVisible() {
                    return this.isRepeatEnabled
                }
                get isDoubleVisible() {
                    return !this.isRepeatVisible && this.isBettingEnabled
                }
                subscribeLastSelectedChip(t) {
                    return this.lastSelectedChipEmitter.subscribe(t)
                }
                processBet(t, e) {
                    var i;
                    const s = Object.keys(t)
                        , n = null != e ? e : pt.Xr(t, this.props.settings.getMaxBetLimit)
                        , o = {};
                    for (const e of s) {
                        const s = this.validateBetCode({
                            betCode: e,
                            betCodeValue: pt.nN(t, e),
                            totalBetValue: n,
                            currentBetCodeValue: this.props.bets.getBetCodeBet(e),
                            balance: this.props.agSubscriber.serverBalance,
                            isBettingAllowed: this.props.bets.isBettingAllowed,
                            getMaxBetLimit: this.props.settings.getMaxBetLimit,
                            getMinBetLimit: this.props.settings.getMinBetLimit,
                            bets: this.props.bets.bet,
                            isLowRisk: this.props.settings.isLowRisk
                        });
                        switch (o[e] = s.betCodeValue,
                        s.type) {
                            case dt.XM.Ok:
                                break;
                            case dt.XM.Warning:
                                this.props.tooltipProcessor.showBetSpotValidationTooltip(s);
                                break;
                            case dt.XM.Error:
                                this.props.tooltipProcessor.showBetSpotValidationTooltip(s),
                                    (null === (i = s.payload) || void 0 === i ? void 0 : i.code) === dt.QE.WaitingForNextGame && this.props.logProcessor.log(mt.vL(t))
                        }
                    }
                    return o
                }
                validateBetCode(t) {
                    let e = {
                        type: dt.XM.Ok,
                        betCode: t.betCode,
                        betCodeValue: t.betCodeValue
                    };
                    for (const i of this.betValidators) {
                        const s = i(Object.assign(Object.assign({}, t), {
                            betCode: e.betCode,
                            betCodeValue: e.betCodeValue
                        }));
                        switch (s.type) {
                            case dt.XM.Ok:
                                e.type !== dt.XM.Warning && (e = s);
                                break;
                            case dt.XM.Warning:
                                e = s;
                                break;
                            case dt.XM.Error:
                                return s
                        }
                    }
                    return e
                }
            }
            function Ct(t, e) {
                void 0 === e && (e = "Illegal state"),
                    t || function (t) {
                        throw new Error("[mobx-utils] " + t)
                    }(e)
            }
            var At = function (t) {
                return t && t !== Object.prototype && Object.getOwnPropertyNames(t).concat(At(Object.getPrototypeOf(t)) || [])
            }
                , Bt = function (t) {
                    return function (t) {
                        var e = At(t);
                        return e.filter((function (t, i) {
                            return e.indexOf(t) === i
                        }
                        ))
                    }(t).filter((function (t) {
                        return "constructor" !== t && !~t.indexOf("__")
                    }
                    ))
                }
                , _t = "pending"
                , Pt = "fulfilled"
                , Ot = "rejected";
            function Tt(t) {
                switch (this.state) {
                    case _t:
                        return t.pending && t.pending(this.value);
                    case Ot:
                        return t.rejected && t.rejected(this.value);
                    case Pt:
                        return t.fulfilled ? t.fulfilled(this.value) : this.value
                }
            }
            function jt(t, e) {
                if (Ct(arguments.length <= 2, "fromPromise expects up to two arguments"),
                    Ct("function" == typeof t || "object" == typeof t && t && "function" == typeof t.then, "Please pass a promise or function to fromPromise"),
                    !0 === t.isPromiseBasedObservable)
                    return t;
                "function" == typeof t && (t = new Promise(t));
                var i = t;
                t.then(p.aD("observableFromPromise-resolve", (function (t) {
                    i.value = t,
                        i.state = Pt
                }
                )), p.aD("observableFromPromise-reject", (function (t) {
                    i.value = t,
                        i.state = Ot
                }
                ))),
                    i.isPromiseBasedObservable = !0,
                    i.case = Tt;
                var s = e && e.state === Pt ? e.value : void 0;
                return p.dw(i, {
                    value: s,
                    state: _t
                }, {}, {
                    deep: !1
                }),
                    i
            }
            (function (t) {
                t.reject = p.aD("fromPromise.reject", (function (e) {
                    var i = t(Promise.reject(e));
                    return i.state = Ot,
                        i.value = e,
                        i
                }
                )),
                    t.resolve = p.aD("fromPromise.resolve", (function (e) {
                        void 0 === e && (e = void 0);
                        var i = t(Promise.resolve(e));
                        return i.state = Pt,
                            i.value = e,
                            i
                    }
                    ))
            }
            )(jt || (jt = {}));
            var kt = function (t, e, i, s) {
                var n, o = arguments.length, r = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, i, s);
                else
                    for (var a = t.length - 1; a >= 0; a--)
                        (n = t[a]) && (r = (o < 3 ? n(r) : o > 3 ? n(e, i, r) : n(e, i)) || r);
                return o > 3 && r && Object.defineProperty(e, i, r),
                    r
            };
            (function () {
                function t(t, e) {
                    var i = this;
                    Object.defineProperty(this, "current", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }),
                        Object.defineProperty(this, "subscription", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }),
                        p.rC(this),
                        p.z((function () {
                            i.current = e,
                                i.subscription = t.subscribe(i)
                        }
                        ))
                }
                Object.defineProperty(t.prototype, "dispose", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        this.subscription && this.subscription.unsubscribe()
                    }
                }),
                    Object.defineProperty(t.prototype, "next", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            this.current = t
                        }
                    }),
                    Object.defineProperty(t.prototype, "complete", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.dispose()
                        }
                    }),
                    Object.defineProperty(t.prototype, "error", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            this.current = t,
                                this.dispose()
                        }
                    }),
                    kt([p.LO.ref], t.prototype, "current", void 0),
                    kt([p.aD.bound], t.prototype, "next", null),
                    kt([p.aD.bound], t.prototype, "complete", null),
                    kt([p.aD.bound], t.prototype, "error", null)
            }
            )();
            var Et = function () {
                return Et = Object.assign || function (t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var n in e = arguments[i])
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }
                    ,
                    Et.apply(this, arguments)
            }
                , Lt = function (t, e, i, s) {
                    var n, o = arguments.length, r = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                        r = Reflect.decorate(t, e, i, s);
                    else
                        for (var a = t.length - 1; a >= 0; a--)
                            (n = t[a]) && (r = (o < 3 ? n(r) : o > 3 ? n(e, i, r) : n(e, i)) || r);
                    return o > 3 && r && Object.defineProperty(e, i, r),
                        r
                }
                , Rt = ["model", "reset", "submit", "isDirty", "isPropertyDirty", "resetProperty"];
            (function () {
                function t(t) {
                    var e = this;
                    Object.defineProperty(this, "model", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    }),
                        Object.defineProperty(this, "localValues", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: p.LO.map({})
                        }),
                        Object.defineProperty(this, "localComputedValues", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: p.LO.map({})
                        }),
                        Object.defineProperty(this, "isPropertyDirty", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return e.localValues.has(t)
                            }
                        }),
                        p.rC(this),
                        Ct(p.Pb(t), "createViewModel expects an observable object");
                    var i = Bt(this);
                    Bt(t).forEach((function (s) {
                        var n;
                        if (!i.includes(s) && s !== p.so && "__mobxDidRunLazyInitializers" !== s) {
                            if (Ct(-1 === Rt.indexOf(s), "The propertyname " + s + " is reserved and cannot be used with viewModels"),
                                p.eJ(t, s)) {
                                var o = p.kS(t, s)
                                    , r = o.derivation.bind(e)
                                    , a = null === (n = o.setter_) || void 0 === n ? void 0 : n.bind(e);
                                e.localComputedValues.set(s, p.Fl(r, {
                                    set: a
                                }))
                            }
                            var c = Object.getOwnPropertyDescriptor(t, s)
                                , l = c ? {
                                    enumerable: c.enumerable
                                } : {};
                            Object.defineProperty(e, s, Et(Et({}, l), {
                                configurable: !0,
                                get: function () {
                                    return p.eJ(t, s) ? e.localComputedValues.get(s).get() : e.isPropertyDirty(s) ? e.localValues.get(s) : e.model[s]
                                },
                                set: p.aD((function (i) {
                                    p.eJ(t, s) ? e.localComputedValues.get(s).set(i) : i !== e.model[s] ? e.localValues.set(s, i) : e.localValues.delete(s)
                                }
                                ))
                            }))
                        }
                    }
                    ))
                }
                Object.defineProperty(t.prototype, "isDirty", {
                    get: function () {
                        return this.localValues.size > 0
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                    Object.defineProperty(t.prototype, "changedValues", {
                        get: function () {
                            return new Map(this.localValues)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "submit", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            var t = this;
                            p.XP(this.localValues).forEach((function (e) {
                                var i = t.localValues.get(e)
                                    , s = t.model[e];
                                p.Ei(s) ? s.replace(i) : p.LJ(s) ? (s.clear(),
                                    s.merge(i)) : p.M5(i) || (t.model[e] = i)
                            }
                            )),
                                this.localValues.clear()
                        }
                    }),
                    Object.defineProperty(t.prototype, "reset", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.localValues.clear()
                        }
                    }),
                    Object.defineProperty(t.prototype, "resetProperty", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            this.localValues.delete(t)
                        }
                    }),
                    Lt([p.Fl], t.prototype, "isDirty", null),
                    Lt([p.Fl], t.prototype, "changedValues", null),
                    Lt([p.aD.bound], t.prototype, "submit", null),
                    Lt([p.aD.bound], t.prototype, "reset", null),
                    Lt([p.aD.bound], t.prototype, "resetProperty", null)
            }
            )();
            var Mt, It = (Mt = function (t, e) {
                return Mt = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (t, e) {
                    t.__proto__ = e
                }
                    || function (t, e) {
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }
                    ,
                    Mt(t, e)
            }
                ,
                function (t, e) {
                    function i() {
                        this.constructor = t
                    }
                    Mt(t, e),
                        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                            new i)
                }
            ), Dt = (function (t) {
                function e(e, i, s) {
                    var n = void 0 === s ? {} : s
                        , o = n.name
                        , r = void 0 === o ? "ogm" + (1e3 * Math.random() | 0) : o
                        , a = n.keyToName
                        , c = void 0 === a ? function (t) {
                            return "" + t
                        }
                            : a
                        , l = t.call(this) || this;
                    Object.defineProperty(l, "_base", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }),
                        Object.defineProperty(l, "_ogmInfoKey", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }),
                        Object.defineProperty(l, "_groupBy", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }),
                        Object.defineProperty(l, "_keyToName", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }),
                        Object.defineProperty(l, "_disposeBaseObserver", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }),
                        l._keyToName = c,
                        l._groupBy = i,
                        l._ogmInfoKey = Symbol("ogmInfo" + r),
                        l._base = e;
                    for (var h = 0; h < e.length; h++)
                        l._addItem(e[h]);
                    return l._disposeBaseObserver = p.N7(l._base, (function (t) {
                        if ("splice" === t.type)
                            p.PS((function () {
                                for (var e = 0, i = t.removed; e < i.length; e++) {
                                    var s = i[e];
                                    l._removeItem(s)
                                }
                                for (var n = 0, o = t.added; n < o.length; n++) {
                                    var r = o[n];
                                    l._addItem(r)
                                }
                            }
                            ));
                        else {
                            if ("update" !== t.type)
                                throw new Error("illegal state");
                            p.PS((function () {
                                l._removeItem(t.oldValue),
                                    l._addItem(t.newValue)
                            }
                            ))
                        }
                    }
                    )),
                        l
                }
                It(e, t),
                    Object.defineProperty(e.prototype, "clear", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            throw new Error("not supported")
                        }
                    }),
                    Object.defineProperty(e.prototype, "delete", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            throw new Error("not supported")
                        }
                    }),
                    Object.defineProperty(e.prototype, "set", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t, e) {
                            throw new Error("not supported")
                        }
                    }),
                    Object.defineProperty(e.prototype, "dispose", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this._disposeBaseObserver();
                            for (var t = 0; t < this._base.length; t++) {
                                var e = this._base[t];
                                e[this._ogmInfoKey].reaction(),
                                    delete e[this._ogmInfoKey]
                            }
                        }
                    }),
                    Object.defineProperty(e.prototype, "_getGroupArr", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var i = t.prototype.get.call(this, e);
                            return void 0 === i && (i = p.LO([], {
                                name: "GroupArray[" + this._keyToName(e) + "]",
                                deep: !1
                            }),
                                t.prototype.set.call(this, e, i)),
                                i
                        }
                    }),
                    Object.defineProperty(e.prototype, "_removeFromGroupArr", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e, i) {
                            var s = t.prototype.get.call(this, e);
                            1 === s.length ? t.prototype.delete.call(this, e) : (i === s.length - 1 || (s[i] = s[s.length - 1],
                                s[i][this._ogmInfoKey].groupArrIndex = i),
                                s.length--)
                        }
                    }),
                    Object.defineProperty(e.prototype, "_addItem", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            var e = this
                                , i = this._groupBy(t)
                                , s = this._getGroupArr(i)
                                , n = {
                                    groupByValue: i,
                                    groupArrIndex: s.length,
                                    reaction: p.U5((function () {
                                        return e._groupBy(t)
                                    }
                                    ), (function (i, s) {
                                        var n = t[e._ogmInfoKey];
                                        e._removeFromGroupArr(n.groupByValue, n.groupArrIndex);
                                        var o = e._getGroupArr(i)
                                            , r = o.length;
                                        o.push(t),
                                            n.groupByValue = i,
                                            n.groupArrIndex = r
                                    }
                                    ))
                                };
                            Object.defineProperty(t, this._ogmInfoKey, {
                                configurable: !0,
                                enumerable: !1,
                                value: n
                            }),
                                s.push(t)
                        }
                    }),
                    Object.defineProperty(e.prototype, "_removeItem", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            var e = t[this._ogmInfoKey];
                            this._removeFromGroupArr(e.groupByValue, e.groupArrIndex),
                                e.reaction(),
                                delete t[this._ogmInfoKey]
                        }
                    })
            }(p.vP),
                function () {
                    function t(t, e) {
                        Object.defineProperty(this, "base", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        }),
                            Object.defineProperty(this, "args", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            }),
                            Object.defineProperty(this, "root", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0
                            }),
                            Object.defineProperty(this, "closest", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0
                            }),
                            Object.defineProperty(this, "closestIdx", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 0
                            }),
                            Object.defineProperty(this, "isDisposed", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: !1
                            });
                        for (var i = this.closest = this.root = t, s = 0; s < this.args.length - 1 && (i = i.get(e[s])); s++)
                            this.closest = i;
                        this.closestIdx = s
                    }
                    return Object.defineProperty(t.prototype, "exists", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.assertNotDisposed();
                            var t = this.args.length;
                            return this.closestIdx >= t - 1 && this.closest.has(this.args[t - 1])
                        }
                    }),
                        Object.defineProperty(t.prototype, "get", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (this.assertNotDisposed(),
                                    !this.exists())
                                    throw new Error("Entry doesn't exist");
                                return this.closest.get(this.args[this.args.length - 1])
                            }
                        }),
                        Object.defineProperty(t.prototype, "set", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                this.assertNotDisposed();
                                for (var e = this.args.length, i = this.closest, s = this.closestIdx; s < e - 1; s++) {
                                    var n = new Map;
                                    i.set(this.args[s], n),
                                        i = n
                                }
                                this.closestIdx = e - 1,
                                    this.closest = i,
                                    i.set(this.args[e - 1], t)
                            }
                        }),
                        Object.defineProperty(t.prototype, "delete", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (this.assertNotDisposed(),
                                    !this.exists())
                                    throw new Error("Entry doesn't exist");
                                var t = this.args.length;
                                this.closest.delete(this.args[t - 1]);
                                for (var e = this.root, i = [e], s = 0; s < t - 1; s++)
                                    e = e.get(this.args[s]),
                                        i.push(e);
                                for (s = i.length - 1; s > 0; s--)
                                    0 === i[s].size && i[s - 1].delete(this.args[s - 1]);
                                this.isDisposed = !0
                            }
                        }),
                        Object.defineProperty(t.prototype, "assertNotDisposed", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                if (this.isDisposed)
                                    throw new Error("Concurrent modification exception")
                            }
                        }),
                        t
                }()), Nt = function () {
                    function t() {
                        Object.defineProperty(this, "store", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Map
                        }),
                            Object.defineProperty(this, "argsLength", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: -1
                            }),
                            Object.defineProperty(this, "last", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0
                            })
                    }
                    return Object.defineProperty(t.prototype, "entry", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            if (-1 === this.argsLength)
                                this.argsLength = t.length;
                            else if (this.argsLength !== t.length)
                                throw new Error("DeepMap should be used with functions with a consistent length, expected: " + this.argsLength + ", got: " + t.length);
                            return this.last && (this.last.isDisposed = !0),
                                this.last = new Dt(this.store, t)
                        }
                    }),
                        t
                }(), zt = function () {
                    return zt = Object.assign || function (t) {
                        for (var e, i = 1, s = arguments.length; i < s; i++)
                            for (var n in e = arguments[i])
                                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }
                        ,
                        zt.apply(this, arguments)
                };
            class Gt {
                get repeatBet() {
                    return !this.isAdvancedBettingMode && pt.vC(this.serverRepeatBet) ? pt.VW(this.serverRepeatBet) : this.serverRepeatBet
                }
                constructor(t, e) {
                    this.gamePhase = t,
                        this.timer = e,
                        this.bet = pt.T,
                        this.history = [],
                        this.betStatus = u.zp.Idle,
                        this.getBetCodeBet = function (t, e) {
                            if (void 0 === e && (e = !1),
                                p.LG(t))
                                throw new Error("computedFn shouldn't be used on actions");
                            var i = !1
                                , s = 0
                                , n = "boolean" == typeof e ? {
                                    keepAlive: e
                                } : e
                                , o = new Nt;
                            return function () {
                                for (var e = this, r = [], a = 0; a < arguments.length; a++)
                                    r[a] = arguments[a];
                                var c, l = o.entry(r);
                                if (l.exists())
                                    return l.get().get();
                                if (!n.keepAlive && !p.SW())
                                    return i || (console.warn("invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set"),
                                        i = !0),
                                        t.apply(this, r);
                                var h = p.Fl((function () {
                                    return c = t.apply(e, r)
                                }
                                ), zt(zt({}, n), {
                                    name: "computedFn(" + (n.name || t.name) + "#" + ++s + ")"
                                }));
                                return l.set(h),
                                    n.keepAlive || p.pA(h, (function () {
                                        o.entry(r).delete(),
                                            n.onCleanup && n.onCleanup.apply(n, function () {
                                                for (var t = 0, e = 0, i = arguments.length; e < i; e++)
                                                    t += arguments[e].length;
                                                var s = Array(t)
                                                    , n = 0;
                                                for (e = 0; e < i; e++)
                                                    for (var o = arguments[e], r = 0, a = o.length; r < a; r++,
                                                        n++)
                                                        s[n] = o[r];
                                                return s
                                            }([c], r)),
                                            c = void 0
                                    }
                                    )),
                                    h.get()
                            }
                        }((t => this.bet[t] || 0)),
                        this.isAdvancedBettingMode = !1,
                        this.serverRepeatBet = pt.T,
                        this.add = t => {
                            this.history.push(this.bet),
                                this.bet = t
                        }
                        ,
                        this.undo = () => {
                            this.bet = pt.lq(this.history),
                                this.history.pop()
                        }
                        ,
                        this.undoAll = () => {
                            this.reset()
                        }
                        ,
                        this.remove = t => {
                            this.history.push(this.bet),
                                this.bet = t
                        }
                        ,
                        this.move = t => {
                            this.history.push(this.bet),
                                this.bet = t
                        }
                        ,
                        this.reset = () => {
                            this.bet = {},
                                this.history = []
                        }
                        ,
                        this.updateActualBet = t => {
                            this.bet = t
                        }
                        ,
                        this.updateRepeatBet = t => {
                            this.serverRepeatBet = t
                        }
                        ,
                        this.updateHistory = t => {
                            this.history = t
                        }
                        ,
                        this.setIsAdvancedBettingMode = t => {
                            this.isAdvancedBettingMode = t
                        }
                        ,
                        p.rC(this, {
                            bet: p.LO,
                            history: p.LO,
                            repeatBet: p.Fl,
                            betStatus: p.LO,
                            isAdvancedBettingMode: p.LO,
                            serverRepeatBet: p.LO,
                            add: p.aD,
                            isBettingAllowed: p.Fl,
                            totalBet: p.Fl,
                            repeatBetAmount: p.Fl,
                            hasBets: p.Fl,
                            hasAdvancedBets: p.Fl,
                            hasBetHistory: p.Fl,
                            hasRepeatBet: p.Fl,
                            setBetStatus: p.aD,
                            undo: p.aD,
                            undoAll: p.aD,
                            remove: p.aD,
                            move: p.aD,
                            reset: p.aD,
                            updateActualBet: p.aD,
                            updateRepeatBet: p.aD,
                            updateHistory: p.aD,
                            setIsAdvancedBettingMode: p.aD
                        })
                }
                get isBettingAllowed() {
                    return this.gamePhase.currentPhase === u.rY.BetsOpen && this.timer.totalTimeRemainingSec > 0
                }
                get totalBet() {
                    return pt.wf(this.bet)
                }
                get repeatBetAmount() {
                    return pt.wf(this.repeatBet)
                }
                get hasBets() {
                    return this.totalBet > 0
                }
                get hasAdvancedBets() {
                    return pt.vC(this.bet)
                }
                get hasBetHistory() {
                    return this.history.length > 0
                }
                get hasRepeatBet() {
                    return this.repeatBetAmount > 0
                }
                setBetStatus(t) {
                    this.betStatus = t
                }
            }
            var Ft = i(789085)
                , Vt = i(271121);
            class Ht {
                constructor(t) {
                    this.props = t,
                        p.rC(this, {
                            config: p.Fl,
                            size: p.Fl,
                            chipRects: p.Fl
                        })
                }
                get config() {
                    return B(this.props.layout.isDesktop, this.props.layout.isLandscape, this.props.bets.isAdvancedBettingMode)
                }
                get size() {
                    const { layout: t, agSubscriber: e } = this.props
                        , { containerWidth: i, containerHeight: s, boxWidth: n } = Ft.P(e.gameDimension);
                    if (t.isClassicLayout) {
                        let t;
                        t = this.config.isAdvanced ? .28 : .355;
                        const e = Vt.RW(n * t, 2)
                            , i = this.config.overallWidth / this.config.overallHeight;
                        return {
                            x: e,
                            y: Vt.RW(e / i, 2)
                        }
                    }
                    if (t.isDesktop || t.isTablet || t.isLandscape) {
                        let e;
                        e = t.isDesktop ? .32 : t.isTablet ? .46 : .58;
                        const i = Vt.RW(n * e, 2);
                        return {
                            x: i,
                            y: Vt.RW(.71 * i, 2)
                        }
                    }
                    const o = i - 20
                        , r = Vt.RW(Math.min(.5 * s, o), 2);
                    return {
                        x: r,
                        y: r
                    }
                }
                get chipRects() {
                    return pt.cV(this.config, this.size)
                }
            }
            class Wt {
                constructor() {
                    this.statistics = void 0,
                        p.rC(this, {
                            statistics: p.LO,
                            updateStatistics: p.aD,
                            reset: p.aD
                        })
                }
                updateStatistics(t) {
                    this.statistics = t
                }
                reset() {
                    this.statistics = void 0
                }
            }
            class Ut {
                constructor(t) {
                    this.props = t,
                        p.rC(this, {
                            chipstackVisible: p.Fl
                        })
                }
                get chipstackVisible() {
                    const t = this.props.layout.isPhone && !this.props.layout.isLandscape && this.props.history.isExpanded;
                    return this.props.bets.isBettingAllowed && !t
                }
            }
            class Kt {
                constructor(t) {
                    this.settings = t,
                        p.rC(this, {
                            historyScrollableColumnCount: p.Fl
                        })
                }
                get historyScrollableColumnCount() {
                    return Number(this.settings.gameSettings.historyScrollableColumnCount) || 0
                }
            }
            var Xt = i(621594);
            class Zt {
                constructor() {
                    this.gameInfo = {
                        gameId: "",
                        gameNumber: ""
                    },
                        this.dealerEmitter = St.z(),
                        this.setGameInfo = t => {
                            this.gameInfo = t
                        }
                        ,
                        this.setDealer = t => {
                            this.dealerEmitter.notify(t)
                        }
                        ,
                        p.rC(this, {
                            gameInfo: p.LO.struct,
                            setGameInfo: p.aD
                        })
                }
                subscribeOnDealer(t) {
                    return this.dealerEmitter.subscribe(t)
                }
            }
            class Yt {
                constructor() {
                    this.isRestore = !0,
                        this.currentPhase = u.rY.Init,
                        this.prevPhaseName = null,
                        this.restoreTimestampEmitter = St.z(),
                        this.setRestore = t => {
                            this.isRestore = t
                        }
                        ,
                        this.setPhase = t => {
                            this.prevPhaseName = this.currentPhase,
                                this.currentPhase = t
                        }
                        ,
                        this.subscribeOnRestoreTimestamp = t => this.restoreTimestampEmitter.subscribe(t),
                        this.updateRestoreTimestamp = t => {
                            this.restoreTimestampEmitter.notify(t)
                        }
                        ,
                        p.rC(this, {
                            isRestore: p.LO,
                            currentPhase: p.LO,
                            prevPhaseName: p.LO,
                            setRestore: p.aD,
                            setPhase: p.aD
                        })
                }
            }
            var qt = i(869676);
            class Qt {
                constructor(t, e) {
                    this.layout = t,
                        this.featureFlags = e,
                        this.history = [],
                        this.isExpanded = !1,
                        this.advancedStatisticsItemsCount = qt.X,
                        this.setAdvancedStatisticsItemsCount = t => {
                            this.advancedStatisticsItemsCount = t
                        }
                        ,
                        this.toggleExpandedMode = () => {
                            this.isExpanded = !this.isExpanded
                        }
                        ,
                        p.rC(this, {
                            history: p.LO,
                            isExpanded: p.LO,
                            advancedStatisticsItemsCount: p.LO,
                            setHistory: p.aD,
                            setAdvancedStatisticsItemsCount: p.aD,
                            toggleExpandedMode: p.aD,
                            scrollableColumnsCount: p.Fl
                        })
                }
                setHistory(t) {
                    this.history = t
                }
                get scrollableColumnsCount() {
                    return this.layout.isDesktop ? 0 : this.featureFlags.historyScrollableColumnCount
                }
            }
            var $t = i(559634);
            class Jt {
                constructor(t) {
                    this.props = t,
                        this.isBettingGridExpanded = !1,
                        this.setIsBettingGridExpanded = t => {
                            this.isBettingGridExpanded = t
                        }
                        ,
                        p.rC(this, {
                            isBettingGridExpanded: p.LO,
                            decisionTimerProps: p.Fl,
                            youWinVisible: p.Fl,
                            switchBettingGridButtonState: p.Fl,
                            showPayoutsOnBetSpots: p.Fl,
                            videoScale: p.Fl,
                            videoHeight: p.Fl,
                            componentLayout: p.Fl,
                            setIsBettingGridExpanded: p.aD,
                            isBettingTimerVisible: p.Fl
                        })
                }
                get decisionTimerProps() {
                    return {
                        countdownFromSeconds: this.props.timer.totalTimeRemainingSec,
                        timerStartTimeMs: this.props.timer.timerStartTimeMs,
                        hidden: !this.isBettingTimerVisible,
                        freezeTimeSeconds: void 0
                    }
                }
                get youWinVisible() {
                    return this.props.gamePhase.currentPhase === u.rY.Resolved && void 0 !== this.props.result.result
                }
                get switchBettingGridButtonState() {
                    return this.props.bets.hasAdvancedBets ? $t.BN.Disabled : $t.BN.Default
                }
                get isLandscape() {
                    return this.props.agSubscriber.orientation === b.i.Landscape
                }
                get isDesktop() {
                    return this.props.agSubscriber.platform === m.t4.Desktop
                }
                get isPhone() {
                    return this.props.agSubscriber.platform === m.t4.Phone
                }
                get isTablet() {
                    return this.props.agSubscriber.platform === m.t4.Tablet
                }
                get isClassicLayout() {
                    return this.props.agSubscriber.layout === f.m.Classic
                }
                get isCompactMode() {
                    return !this.isDesktop && !!this.isLandscape && this.props.agSubscriber.gameDimension.containerHeight < 350
                }
                get showPayoutsOnBetSpots() {
                    return this.props.bets.isBettingAllowed
                }
                get videoScale() {
                    if (this.props.agSubscriber.platform === m.t4.Desktop)
                        return 1;
                    if (this.isLandscape) {
                        const { gameDimension: t } = this.props.agSubscriber;
                        return Math.max(t.containerWidth / t.boxWidth, t.containerHeight / t.boxHeight, 1)
                    }
                    return this.props.bets.isBettingAllowed ? 1 : 1.31
                }
                get videoHeight() {
                    return this.props.agSubscriber.gameDimension.boxHeight * this.videoScale
                }
                get componentLayout() {
                    return this.isDesktop ? this.isClassicLayout ? u.qi.DesktopClassic : u.qi.DesktopImmersive : this.isTablet ? u.qi.Tablet : this.isLandscape ? u.qi.MobileLandscape : u.qi.MobilePortrait
                }
                get isBettingTimerVisible() {
                    return this.isDesktop ? this.isBettingGridExpanded && this.props.bets.isBettingAllowed : this.props.bets.isBettingAllowed
                }
            }
            class te {
                constructor() {
                    this.logEmitter = St.z(),
                        this.log = t => {
                            this.logEmitter.notify(this.enhanceLog(t))
                        }
                }
                subscribe(t) {
                    return this.logEmitter.subscribe(t)
                }
                dispose() {
                    this.logEmitter.dispose()
                }
                enhanceLog(t) {
                    var e;
                    const i = t;
                    return (null === (e = t.enhancers) || void 0 === e ? void 0 : e.length) || (t.enhancers = ["bets", "balance", "currency", "gameType", "gameTime"]),
                        i
                }
            }
            function ee(t) {
                return p.U5((() => t.bets.isBettingAllowed), (e => {
                    t.preferences.preferencesAreLoaded && e && !t.bets.isAdvancedBettingMode && t.preferences.getOnboardingBubbleCount(a.c.AdvancedBettingGrid) < t.settings.clientTutorialShowLimit && (t.onboardingBubbleProcessor.showAdvancedBettingGridPromo(),
                        t.preferences.incrementOnboardingBubbleCount(a.c.AdvancedBettingGrid))
                }
                ))
            }
            function ie(t) {
                return p.U5((() => t.gamePhase.currentPhase), (e => {
                    t.preferences.preferencesAreLoaded && e === u.rY.BetsClosed && t.preferences.getOnboardingBubbleCount(a.c.Statistics) < t.settings.clientTutorialShowLimit && (t.onboardingBubbleProcessor.showStatisticsPromo(),
                        t.preferences.incrementOnboardingBubbleCount(a.c.Statistics))
                }
                ))
            }
            var se = i(945590)
                , ne = i(930480)
                , oe = i(2435);
            class re {
                constructor() {
                    this.lastShownOnboardingBubble = null,
                        this.showEmitter = St.z(),
                        this.hideEmitter = St.z(),
                        this.delay = ne.y(new Set(Object.values(a.c))),
                        this.hideOnClick = () => {
                            this.hideLastShownBubble()
                        }
                }
                showAdvancedBettingGridPromo() {
                    this.show({
                        id: a.c.AdvancedBettingGrid,
                        text: oe.Iu(se.B2.OnboardingBubbleAdvancedBettingGrid)
                    })
                }
                hideAdvancedBettingGridPromo() {
                    this.hide(a.c.AdvancedBettingGrid)
                }
                showStatisticsPromo() {
                    this.show({
                        id: a.c.Statistics,
                        text: oe.Iu(se.B2.OnboardingBubbleStatistics)
                    })
                }
                hideStatisticsPromo() {
                    this.hide(a.c.Statistics)
                }
                subscribeOnShow(t) {
                    return this.showEmitter.subscribe(t)
                }
                subscribeOnHide(t) {
                    return this.hideEmitter.subscribe(t)
                }
                dispose() {
                    this.lastShownOnboardingBubble && this.hide(this.lastShownOnboardingBubble),
                        this.showEmitter.dispose(),
                        this.hideEmitter.dispose(),
                        this.delay.dispose()
                }
                show(t) {
                    this.showEmitter.notify(t),
                        this.lastShownOnboardingBubble = t.id,
                        this.addHideDelay(t.id),
                        this.addHideClick()
                }
                hide(t) {
                    t === this.lastShownOnboardingBubble && (this.lastShownOnboardingBubble = null,
                        this.delay.clear(t),
                        this.removeHideClick(),
                        this.hideEmitter.notify(t))
                }
                addHideDelay(t) {
                    this.delay.clear(t),
                        this.delay.add({
                            type: t,
                            timeout: 1e4,
                            callback: () => this.hide(t)
                        })
                }
                hideLastShownBubble() {
                    this.lastShownOnboardingBubble && this.hide(this.lastShownOnboardingBubble)
                }
                addHideClick() {
                    document.addEventListener("click", this.hideOnClick)
                }
                removeHideClick() {
                    document.removeEventListener("click", this.hideOnClick)
                }
            }
            class ae {
                get preferencesAreLoaded() {
                    return this.props.agSubscriber.preferences.preferencesAreLoaded
                }
                constructor(t) {
                    this.props = t,
                        this.emitter = St.z(),
                        this.setAdvancedBettingGrid = t => {
                            this.emitter.notify({
                                key: s.AdvancedBettingGrid,
                                value: t
                            })
                        }
                        ,
                        p.rC(this, {
                            preferencesAreLoaded: p.Fl
                        })
                }
                subscribe(t) {
                    return this.emitter.subscribe(t)
                }
                getOnboardingBubbleCount(t) {
                    return this.props.agSubscriber.preferences[l[t]]
                }
                incrementOnboardingBubbleCount(t) {
                    this.preferencesAreLoaded && this.emitter.notify({
                        key: l[t],
                        value: this.getOnboardingBubbleCount(t) + 1
                    })
                }
                dispose() {
                    this.emitter.dispose()
                }
            }
            var ce = i(732690);
            class le {
                constructor() {
                    this._gameAssetsPromise = null
                }
                get gameAssetsPromise() {
                    if (!this._gameAssetsPromise)
                        throw new Error("Game assets loading is not initiated");
                    return this._gameAssetsPromise
                }
                preload() {
                    this._gameAssetsPromise = ce.wF()
                }
                dispose() {
                    this._gameAssetsPromise = null
                }
            }
            var he = i(994373);
            const ue = Object.keys(he.w).reduce(((t, e) => (t[e] = null,
                t)), {});
            class de {
                constructor() {
                    this.reactReferences = Object.assign({}, ue),
                        this.setReactReference = (t, e) => {
                            this.reactReferences[t] = e
                        }
                        ,
                        p.rC(this, {
                            reactReferences: p.LO.shallow,
                            setReactReference: p.aD,
                            dispose: p.aD
                        })
                }
                dispose() {
                    this.reactReferences = Object.assign({}, ue)
                }
            }
            var pe = i(262408);
            function me(t) {
                pe.hY({
                    src: t
                })
            }
            var be = i(894176);
            function fe(t) {
                const { resultStore: e, flyingChipsProcessor: i } = t;
                e.hasPayoutBet && (me(be.k6.Chipstack),
                    i.runAnimation({
                        bets: e.payoutBet,
                        type: wt.T.Winning,
                        animation: wt.X.ChipToStack
                    }),
                    e.setPayoutBet(pt.T))
            }
            function ge(t) {
                const { gamePhaseStore: e, layoutStore: i, resultStore: s, flyingChipsProcessor: n } = t;
                return p.U5((() => ({
                    phase: e.currentPhase,
                    isBettingGridExpanded: i.isBettingGridExpanded
                })), (({ phase: t, isBettingGridExpanded: e }) => {
                    t !== u.rY.BetsOpen || i.isDesktop && !i.isClassicLayout ? t === u.rY.BetsOpen && i.isDesktop && e && fe({
                        resultStore: s,
                        flyingChipsProcessor: n
                    }) : fe({
                        resultStore: s,
                        flyingChipsProcessor: n
                    })
                }
                ), {
                    fireImmediately: !0
                })
            }
            function ve(t) {
                const { gamePhaseStore: e, resultStore: i, betsStore: s, flyingChipsProcessor: n } = t;
                return p.U5((() => ({
                    phase: e.currentPhase,
                    hasBets: s.hasBets
                })), (({ phase: t, hasBets: s }) => {
                    t === u.rY.BetsOpen && (s || e.isRestore) && i.hasPayoutBet && (i.setPayoutBet(pt.T),
                        n.stopAnimation(wt.T.Winning))
                }
                ), {
                    fireImmediately: !0
                })
            }
            var ye = i(69155)
                , Se = i(769333);
            class we {
                get hasPayoutBet() {
                    var t;
                    return (null !== (t = Object.values(this.payoutBet).reduce(((t, e) => (null != t ? t : 0) + (null != e ? e : 0)), 0)) && void 0 !== t ? t : 0) > 0
                }
                constructor(t) {
                    this.agSubscriber = t,
                        this.result = void 0,
                        this.totalPayout = 0,
                        this.currentPlayerTotalPayout = 0,
                        this.winnersCount = 0,
                        this.winners = [],
                        this.payoutBet = pt.T,
                        this.winningAnimationStartedEmitter = St.z(),
                        this.winningAnimationStarted = () => {
                            this.winningAnimationStartedEmitter.notify()
                        }
                        ,
                        p.rC(this, {
                            result: p.LO,
                            totalPayout: p.LO,
                            currentPlayerTotalPayout: p.LO,
                            winnersCount: p.LO,
                            winners: p.LO,
                            payoutBet: p.LO,
                            hasPayoutBet: p.Fl,
                            setResult: p.aD,
                            setTotalPayout: p.aD,
                            setCurrentPlayerTotalPayout: p.aD,
                            setWinnersCount: p.aD,
                            setWinners: p.aD,
                            winnerListRows: p.Fl,
                            setPayoutBet: p.aD,
                            reset: p.aD
                        })
                }
                setResult(t) {
                    this.result = t
                }
                setTotalPayout(t) {
                    this.totalPayout = t
                }
                setCurrentPlayerTotalPayout(t) {
                    this.currentPlayerTotalPayout = t
                }
                setWinnersCount(t) {
                    this.winnersCount = t
                }
                setWinners(t) {
                    this.winners = t
                }
                get winnerListRows() {
                    return function (t) {
                        const { winners: e, totalPayout: i, winnersCount: s } = t;
                        if (s && e.length > 0 && i) {
                            const t = [ye.Gx(s, i)];
                            return e.forEach((e => {
                                const { payout: i, screenName: s } = e;
                                t.push({
                                    type: Se.x.Winner,
                                    screenName: s,
                                    win: `${i}`
                                })
                            }
                            )),
                                t
                        }
                        return []
                    }({
                        winners: this.winners,
                        totalPayout: this.totalPayout,
                        winnersCount: this.winnersCount,
                        currencySymbol: this.agSubscriber.currencySymbol
                    })
                }
                subscribeOnWinningAnimationStarted(t) {
                    return this.winningAnimationStartedEmitter.subscribe(t)
                }
                setPayoutBet(t) {
                    this.payoutBet = t
                }
                reset() {
                    this.result = void 0,
                        this.totalPayout = 0,
                        this.currentPlayerTotalPayout = 0,
                        this.winnersCount = 0,
                        this.winners = []
                }
            }
            const xe = {
                dark: "49,4,1",
                light: "73,3,3"
            };
            var Ce = i(537442);
            class Ae {
                constructor() {
                    this.internalSettings = null,
                        this.getMaxBetLimit = t => this.gameSettings.getMaxBetGroupLimit(qt.Tb[t]),
                        this.getMinBetLimit = t => this.gameSettings.getMinBetGroupLimit(qt.Tb[t])
                }
                addSettings(t) {
                    this.internalSettings = t
                }
                get gameSettings() {
                    if (!this.internalSettings)
                        throw new Error("Settings should be provided");
                    return this.internalSettings
                }
                get minBetAmount() {
                    return this.gameSettings.minTableLimit()
                }
                get currencyDecimals() {
                    return this.gameSettings.getCurrencyDecimals()
                }
                get DS() {
                    return this.gameSettings.DeviceSupport
                }
                get tableLogo() {
                    const t = `immersive_logo_${oe.FH().immersiveLogo || this.gameSettings.rawSetup.lang}`
                        , e = this.gameSettings.rawConfig[t];
                    return Ce.U(e || this.gameSettings.rawConfig.immersive_logo)
                }
                get portraitGradientColors() {
                    return this.gameSettings.brandedClothGradient() || xe
                }
                get clientTutorialShowLimit() {
                    return this.gameSettings.clientTutorialShowLimit()
                }
                get betsClosingTime() {
                    return this.gameSettings.betsClosingTime()
                }
                get showCountDownTimer() {
                    return this.gameSettings.showCountDownTimer()
                }
                get isLowRisk() {
                    return this.gameSettings.isLowRisk()
                }
            }
            function Be(t) {
                return t / 1e3
            }
            function _e(t) {
                return t % 1e3 || 1e3
            }
            class Pe {
                constructor() {
                    this.totalTimeRemainingSec = 0,
                        this.timeRemainingSec = 0,
                        this.timerStartTimeMs = 0,
                        this.setTimeRemainingMs = t => {
                            this.stopTimer();
                            const e = Be(t);
                            this.finishTime = Date.now() + t,
                                this.totalTimeRemainingSec = e,
                                this.timeRemainingSec = e,
                                e > 0 && (this.timerStartTimeMs = Date.now(),
                                    this.startTimer(_e(t)))
                        }
                        ,
                        this.stopTimer = () => {
                            this.timeoutId && window.clearTimeout(this.timeoutId),
                                this.totalTimeRemainingSec = 0,
                                this.timeRemainingSec = 0,
                                this.timerStartTimeMs = 0
                        }
                        ,
                        this.stopTimerAt = t => {
                            this.stopTimer();
                            const e = Be(t);
                            this.totalTimeRemainingSec = e,
                                this.timeRemainingSec = e,
                                this.timerStartTimeMs = 0
                        }
                        ,
                        this.startTimer = t => {
                            this.tickTimer(t)
                        }
                        ,
                        this.tickTimer = t => {
                            this.timeoutId = window.setTimeout((() => {
                                const t = (e = this.finishTime || 0,
                                    Math.max(0, e - Date.now()));
                                var e;
                                const i = Be(t);
                                p.z((() => {
                                    this.timeRemainingSec = i
                                }
                                )),
                                    i > 0 && this.tickTimer(_e(t))
                            }
                            ), t)
                        }
                        ,
                        p.rC(this, {
                            totalTimeRemainingSec: p.LO,
                            timeRemainingSec: p.LO,
                            timerStartTimeMs: p.LO,
                            setTimeRemainingMs: p.aD,
                            stopTimer: p.aD,
                            stopTimerAt: p.aD
                        })
                }
                dispose() {
                    this.stopTimer()
                }
            }
            var Oe = i(98753);
            class Te {
                constructor(t) {
                    this.agSubscriber = t,
                        this.emitter = St.z()
                }
                subscribe(t) {
                    return this.emitter.subscribe(t)
                }
                showErrorToast(t) {
                    this.emitter.notify({
                        type: j.p.ErrorMessageToast,
                        errorId: t
                    })
                }
                showPartiallyAcceptedBetsToast(t) {
                    this.emitter.notify({
                        type: j.p.GenericToast,
                        props: {
                            title: oe.Iu("betsPartiallyAccepted"),
                            description: oe.Iu("trafficlight.acceptedAmount.new", {
                                amount: Oe.dN(t, {
                                    currencySymbol: this.agSubscriber.currencySymbol
                                })
                            })
                        }
                    })
                }
                dispose() {
                    this.emitter.dispose()
                }
            }
            class je {
                constructor() {
                    this.showEmitter = St.z(),
                        this.hideEmitter = St.z()
                }
                subscribeOnShow(t) {
                    return this.showEmitter.subscribe(t)
                }
                subscribeOnHide(t) {
                    return this.hideEmitter.subscribe(t)
                }
                show(t) {
                    this.showEmitter.notify(t)
                }
                hide(t) {
                    this.hideEmitter.notify(t)
                }
                showBetSpotValidationTooltip(t) {
                    const e = pt.Jb(t);
                    e && (this.hideBetSpotValidationTooltip(t.betCode),
                        t.type === dt.XM.Error && me(be.k6.ClickingFail),
                        this.show({
                            id: _.BetSpotValidation,
                            betCode: t.betCode,
                            text: e
                        }))
                }
                hideBetSpotValidationTooltip(t) {
                    this.hide(t)
                }
                dispose() {
                    this.showEmitter.dispose(),
                        this.hideEmitter.dispose()
                }
            }
            class ke {
                constructor(t) {
                    this.props = t,
                        p.rC(this, {
                            trafficLightProps: p.Fl
                        })
                }
                get trafficLightProps() {
                    var t;
                    if (this.props.gamePhase.currentPhase === u.rY.Cancelled)
                        return {
                            text: oe.Iu(se.B2.GameCancelled),
                            color: "grey"
                        };
                    if (this.props.gamePhase.currentPhase === u.rY.Resolved || this.props.gamePhase.currentPhase === u.rY.Cleared)
                        return {
                            text: oe.Iu("result", {
                                number: null !== (t = this.props.result.result) && void 0 !== t ? t : "",
                                color: ""
                            }),
                            customColors: {
                                type: "flat",
                                fill: "rgb(125, 15, 21)",
                                stroke: "rgba(184,26,22,0.8)"
                            }
                        };
                    if (this.props.gamePhase.currentPhase === u.rY.Dealing)
                        return {
                            text: oe.Iu(se.B2.Dealing),
                            color: "grey"
                        };
                    if (this.props.bets.betStatus === u.zp.Accepted)
                        return {
                            text: oe.Iu(se.B2.TrafficLightBetsAccepted),
                            color: "grey"
                        };
                    if (this.props.bets.betStatus === u.zp.Rejected)
                        return {
                            text: oe.Iu(se.B2.TrafficLightBetsRejected),
                            color: "red"
                        };
                    switch (this.props.gamePhase.currentPhase) {
                        case u.rY.BetsOpen:
                            {
                                const t = 1e3 * this.props.timer.timeRemainingSec <= this.props.settings.betsClosingTime
                                    , e = this.props.settings.showCountDownTimer
                                    , i = t ? "yellow" : "green";
                                return {
                                    text: (t ? oe.Iu(se.B2.TrafficLightBetsClosing) : oe.Iu(se.B2.TrafficLightPlaceYourBets)) + (e ? ` ${Math.ceil(this.props.timer.timeRemainingSec)}` : ""),
                                    color: i
                                }
                            }
                        case u.rY.BetsClosed:
                            return {
                                text: oe.Iu(se.B2.TrafficLightBetsClosed),
                                color: "red"
                            };
                        default:
                            return {
                                text: oe.Iu(se.B2.WaitingForNextGame),
                                color: "grey"
                            }
                    }
                }
            }
            class Ee {
                constructor() {
                    this.transport = null
                }
                addAgTransport(t, e) {
                    this.transport = t,
                        t.incomingMessages.onValue(e)
                }
                sendMessage(t) {
                    var e;
                    null === (e = this.transport) || void 0 === e || e.sendStandardMessage(null, t)
                }
                get agTransport() {
                    if (!this.transport)
                        throw new Error("EnhancedTransport should be provided");
                    return this.transport
                }
            }
            class Le {
                constructor(t) {
                    this.callback = null,
                        this.frameId = null,
                        this.startDelayTime = 0,
                        this.tick = () => {
                            var t;
                            Date.now() - this.startDelayTime >= this.delay ? (null === (t = this.callback) || void 0 === t || t.call(this),
                                this.clear()) : this.scheduleFrame()
                        }
                        ,
                        this.delay = t
                }
                throttle(t) {
                    this.callback = t,
                        this.frameId || this.startThrottling()
                }
                clear() {
                    this.frameId && window.cancelAnimationFrame(this.frameId),
                        this.frameId = null,
                        this.callback = null
                }
                startThrottling() {
                    this.startDelayTime = Date.now(),
                        this.scheduleFrame()
                }
                scheduleFrame() {
                    this.frameId = window.requestAnimationFrame(this.tick)
                }
            }
            var Re, Me = i(368646);
            p.jQ({
                enforceActions: "always"
            });
            class Ie {
                constructor(t) {
                    this.disposeBag = new Me.$;
                    const { agSubscriber: e, gamePhase: i, gameInfo: s, references: n, timer: o, transport: r, settings: a, layout: c, bets: l, bettingGrid: h, betProcessor: u, result: d, toasts: p, tooltipProcessor: m, bettingStatistics: b, preferences: f, logProcessor: g, history: v, featureFlags: y, chips: S, onboardingBubbleProcessor: w, flyingChipsProcessor: x, trafficLightProcessor: C, preloader: A } = t;
                    this.agSubscriber = e,
                        this.gamePhase = i,
                        this.gameInfo = s,
                        this.timer = this.disposeBag.addDisposable(o),
                        this.transport = r,
                        this.settings = a,
                        this.layout = c,
                        this.bets = l,
                        this.bettingGrid = h,
                        this.betProcessor = u,
                        this.result = d,
                        this.toasts = this.disposeBag.addDisposable(p),
                        this.tooltipProcessor = this.disposeBag.addDisposable(m),
                        this.references = this.disposeBag.addDisposable(n),
                        this.bettingStatistics = b,
                        this.preferences = this.disposeBag.addDisposable(f),
                        this.logProcessor = g,
                        this.history = v,
                        this.featureFlags = y,
                        this.chips = S,
                        this.onboardingBubbleProcessor = this.disposeBag.addDisposable(w),
                        this.flyingChipsProcessor = this.disposeBag.addDisposable(x),
                        this.trafficLightProcessor = C,
                        this.preloader = this.disposeBag.addDisposable(A),
                        this.bindStoreSideEffects()
                }
                addSettings(t) {
                    this.settings.addSettings(t)
                }
                addAgTransport(t, e) {
                    this.transport.addAgTransport(t, e)
                }
                bindToAbstractGame(t) {
                    const e = function (t = 50) {
                        return new Le(t)
                    }();
                    var i;
                    this.agSubscriber.bindToAbstractGame(t, this.betProcessor, this.bets),
                        this.disposeBag.addDisposables([R(t, this.gamePhase), k(t, this.layout), E(t, this.chips), (i = {
                            ag: t,
                            agSubscriber: this.agSubscriber,
                            bets: this.bets,
                            betProcessor: this.betProcessor,
                            gamePhase: this.gamePhase
                        },
                            p.U5((() => ({
                                totalBet: i.bets.totalBet,
                                isBettingEnabled: i.betProcessor.isBettingEnabled
                            })), (t => {
                                if (i.gamePhase.currentPhase === u.rY.Resolved)
                                    return;
                                const { reservedBet: e } = i.agSubscriber;
                                i.ag.balance.setTotalBet(t.totalBet),
                                    (t.isBettingEnabled || e && e !== t.totalBet) && i.ag.balance.reserveBet(t.totalBet),
                                    t.totalBet > 0 && i.ag.gameResult.amount.value > 0 && i.ag.gameResult.setAmount(0)
                            }
                            ))), M(this.bets, t), I(t, this.betProcessor), D(t, this.betProcessor), N(t, this.betProcessor), z(t, this.result), G(t, this.toasts), F(t, this.agSubscriber), V({
                                ag: t,
                                tooltipProcessor: this.tooltipProcessor,
                                references: this.references,
                                agSubscriber: this.agSubscriber,
                                bets: this.bets,
                                layout: this.layout
                            }), H({
                                ag: t,
                                tooltipProcessor: this.tooltipProcessor
                            }), W(t, this.gameInfo), K(t, this.preferences), X(t, this.betProcessor), Z(t, this.logProcessor), L(t, this.layout), U(t, this.gameInfo), Y(t, this.result), q(t, this.result), Q({
                                ag: t,
                                layout: this.layout
                            }), $({
                                ag: t,
                                layout: this.layout
                            }), J({
                                ag: t,
                                layout: this.layout,
                                trafficLightProcessor: this.trafficLightProcessor
                            }), tt({
                                ag: t,
                                gamePhase: this.gamePhase
                            }), () => e.clear()])
                }
                dispose() {
                    this.disposeBag.dispose(),
                        P && (P = {})
                }
                bindStoreSideEffects() {
                    this.disposeBag.addDisposables([ge({
                        gamePhaseStore: this.gamePhase,
                        resultStore: this.result,
                        layoutStore: this.layout,
                        flyingChipsProcessor: this.flyingChipsProcessor
                    }), ve({
                        gamePhaseStore: this.gamePhase,
                        resultStore: this.result,
                        betsStore: this.bets,
                        flyingChipsProcessor: this.flyingChipsProcessor
                    }), ...(this,
                        [ee(this), ie(this)])])
                }
            }
            (function (t) {
                t.Bets = "fantan.bets",
                    t.BetsOpen = "fantan.betsOpen",
                    t.BetsClosed = "fantan.betsClosed"
            }
            )(Re || (Re = {}));
            var De, Ne, ze, Ge, Fe, Ve, He, We = i(431011);
            function Ue(t, e) {
                switch (t) {
                    case u.zp.Accepted:
                    case u.zp.Rejected:
                        return function (t) {
                            return Object.keys(t).reduce(((e, i) => {
                                var s, n;
                                if (t[i]) {
                                    const o = null === (n = null === (s = t[i]) || void 0 === s ? void 0 : s.error) || void 0 === n ? void 0 : n.code;
                                    void 0 !== o && (e[i] = o)
                                }
                                return e
                            }
                            ), {})
                        }(e);
                    default:
                        return pt.YZ
                }
            }
            function Ke(t) {
                const e = [];
                for (const i of Object.keys(t)) {
                    const s = t[i];
                    void 0 !== s && e.push(s)
                }
                return e
            }
            function Xe(t) {
                return Object.keys(t).reduce(((e, i) => {
                    var s;
                    if (t[i]) {
                        const n = null === (s = t[i].error) || void 0 === s ? void 0 : s.code
                            , o = t[i].amount;
                        e[i] = {
                            amount: o
                        },
                            n && (e[i].error = n)
                    }
                    return e
                }
                ), {})
            }
            function Ze(t, e) {
                const { state: i } = t.payload
                    , s = e.gamePhase.currentPhase === u.rY.Resolved ? pt.T : function (t) {
                        const { status: e, chips: i, acceptedBets: s } = t;
                        switch (e) {
                            case u.zp.Open:
                                return i;
                            case u.zp.Accepted:
                            case u.zp.Rejected:
                                return function (t, e) {
                                    return Object.keys(t).reduce(((e, i) => {
                                        var s;
                                        const n = null === (s = t[i]) || void 0 === s ? void 0 : s.amount;
                                        return n && (e[i] = n),
                                            e
                                    }
                                    ), {})
                                }(s);
                            default:
                                return pt.T
                        }
                    }(i)
                    , n = function (t) {
                        const e = Ue(t.status, t.invalidBets)
                            , i = Ue(t.status, t.rejectedBets)
                            , s = [...Ke(e), ...Ke(i)];
                        return t.errorCode && s.push(t.errorCode),
                            We.Z(s)
                    }(i);
                if (i.status === u.zp.Rejected) {
                    for (const t of n)
                        e.toasts.showErrorToast(`error_${t}`);
                    e.logProcessor.log(mt.VP(e.bets.bet, Xe(i.invalidBets), Xe(i.rejectedBets)))
                } else if (n.length > 0) {
                    const t = function (t) {
                        const { acceptedBets: e } = t;
                        return Object.keys(e).reduce(((t, i) => {
                            var s;
                            if (e[i]) {
                                const n = null === (s = e[i]) || void 0 === s ? void 0 : s.amount;
                                n && (t += n)
                            }
                            return t
                        }
                        ), 0)
                    }(i);
                    t && (e.toasts.showPartiallyAcceptedBetsToast(t),
                        e.logProcessor.log(mt.fP({
                            originalBet: e.bets.bet,
                            confirmed: i.acceptedBets,
                            invalid: Xe(i.invalidBets),
                            rejected: Xe(i.rejectedBets)
                        })))
                } else
                    i.status === u.zp.Accepted && e.logProcessor.log(mt.Ts(e.bets.bet, i.acceptedBets));
                p.z((() => {
                    e.bets.updateActualBet(s),
                        e.bets.updateRepeatBet(i.repeatChips),
                        e.bets.updateHistory(i.history),
                        e.bets.setBetStatus(i.status)
                }
                ))
            }
            function Ye(t, e) {
                if (e.gamePhase.isRestore)
                    return !1;
                switch (t.type) {
                    case Ge.RestoreBegin:
                    case Ge.RestoreEnd:
                    case Re.Bets:
                    case Re.BetsClosed:
                    case Ve.BettingStatistics:
                        return !1;
                    default:
                        return !0
                }
            }
            function qe(t) {
                var e;
                return null !== (e = t.timestamp) && void 0 !== e ? e : 0
            }
            function Qe(t, e, i) {
                switch (t.type) {
                    case He.Table:
                        (function (t, e) {
                            const { currentGame: i, dealer: s, history: n } = t.payload;
                            i && e.gameInfo.setGameInfo({
                                gameId: i.gameId,
                                gameNumber: i.gameNumber
                            }),
                                s && e.gameInfo.setDealer(s.screenName),
                                n && e.history.setHistory(n)
                        }
                        )(t, i);
                        break;
                    case Ge.RestoreBegin:
                        (function (t, e) {
                            var i;
                            e.gamePhase.updateRestoreTimestamp(null !== (i = t.timestamp) && void 0 !== i ? i : 0),
                                e.gamePhase.setRestore(!0)
                        }
                        )(t, i);
                        break;
                    case Ge.RestoreEnd:
                        (function (t) {
                            t.gamePhase.setRestore(!1)
                        }
                        )(i);
                        break;
                    case Re.Bets:
                        Ze(t, i);
                        break;
                    case Re.BetsOpen:
                        (function (t, e, i) {
                            p.z((() => {
                                e.bets.reset(),
                                    e.result.reset(),
                                    e.bettingStatistics.reset(),
                                    e.gameInfo.setGameInfo({
                                        gameId: t.payload.gameId,
                                        gameNumber: t.payload.gameNumber
                                    }),
                                    t.payload.timeRemaining - i > 0 && (e.gamePhase.setPhase(u.rY.BetsOpen),
                                        e.bets.setBetStatus(u.zp.Open),
                                        e.timer.setTimeRemainingMs(t.payload.timeRemaining - i))
                            }
                            ))
                        }
                        )(t, i, e);
                        break;
                    case Re.BetsClosed:
                        (function (t) {
                            t.gamePhase.setPhase(u.rY.BetsClosed),
                                t.result.reset(),
                                t.timer.stopTimer(),
                                t.result.setPayoutBet(pt.T),
                                t.flyingChipsProcessor.stopAnimation(wt.T.Winning)
                        }
                        )(i);
                        break;
                    case ze.Dealing:
                        (function (t, e) {
                            e.gamePhase.setPhase(u.rY.Dealing)
                        }
                        )(0, i);
                        break;
                    case De.Cancelled:
                        (function (t, e) {
                            p.z((() => {
                                e.timer.stopTimer(),
                                    e.gamePhase.setPhase(u.rY.Cancelled),
                                    e.bets.reset(),
                                    e.bettingStatistics.reset(),
                                    e.gameInfo.setGameInfo({
                                        gameId: t.payload.gameId,
                                        gameNumber: t.payload.gameNumber
                                    })
                            }
                            ))
                        }
                        )(t, i);
                        break;
                    case Fe.Winners:
                        (function (t, e) {
                            p.z((() => {
                                t.payload.winners && (e.result.setTotalPayout(t.payload.totalAmount),
                                    e.result.setWinnersCount(t.payload.winnersCount),
                                    e.result.setWinners(t.payload.winners))
                            }
                            ))
                        }
                        )(t, i);
                        break;
                    case Fe.GameResolved:
                        (function (t, e) {
                            p.z((() => {
                                e.gamePhase.setPhase(u.rY.Resolved),
                                    e.result.setResult(t.payload.result),
                                    t.payload.bets && (e.result.setCurrentPlayerTotalPayout(t.payload.bets.totalPayout),
                                        e.result.setPayoutBet(t.payload.bets.payouts)),
                                    e.bets.updateActualBet(pt.T),
                                    e.history.setHistory(t.payload.history)
                            }
                            ))
                        }
                        )(t, i);
                        break;
                    case Ve.BettingStatistics:
                        (function (t, e) {
                            p.z((() => {
                                t.payload.statistics && e.bettingStatistics.updateStatistics(t.payload.statistics)
                            }
                            ))
                        }
                        )(t, i);
                        break;
                    case Ne.Cleared:
                        (function (t, e) {
                            p.z((() => {
                                e.gameInfo.gameInfo.gameId && e.gameInfo.gameInfo.gameId !== t.payload.gameId || (e.timer.stopTimer(),
                                    e.gamePhase.setPhase(u.rY.Cleared),
                                    e.bets.reset(),
                                    e.result.reset(),
                                    e.bettingStatistics.reset())
                            }
                            ))
                        }
                        )(t, i)
                }
            }
            (function (t) {
                t.Cancelled = "fantan.gameCancelled"
            }
            )(De || (De = {})),
                function (t) {
                    t.Cleared = "fantan.gameCleared"
                }(Ne || (Ne = {})),
                function (t) {
                    t.Dealing = "fantan.dealing"
                }(ze || (ze = {})),
                function (t) {
                    t.RestoreBegin = "fantan.restore.begin",
                        t.RestoreEnd = "fantan.restore.end"
                }(Ge || (Ge = {})),
                function (t) {
                    t.Winners = "fantan.winners",
                        t.GameResolved = "fantan.gameResolved"
                }(Fe || (Fe = {})),
                function (t) {
                    t.BettingStatistics = "fantan.bettingStatistics"
                }(Ve || (Ve = {})),
                function (t) {
                    t.Table = "fantan.table"
                }(He || (He = {}));
            var $e = i(567557)
                , Je = i(989526)
                , ti = i(853451)
                , ei = i(234894)
                , ii = i(492465);
            const si = Symbol("evo-fan-tan");
            function ni(t, e) {
                ii.mS(si, t, e)
            }
            var oi = i(540712)
                , ri = i(188464)
                , ai = i(57960);
            const ci = t => {
                const { isBettingEnabled: e, isVisible: i } = t;
                if (!i)
                    return null;
                const s = ai.u(e);
                return $e.jsx("div", {
                    "data-role": "footer-gradient",
                    className: oi.Z("footer--099b4", {
                        "isBettingGridCollapsed--09e63": !e
                    }),
                    style: {
                        background: s
                    }
                })
            }
                , li = ri.Pi((() => {
                    const t = o.oR();
                    return $e.jsx(ci, {
                        isBettingEnabled: t.bets.isBettingAllowed,
                        isVisible: t.layout.isDesktop && !t.layout.isClassicLayout
                    })
                }
                ));
            var hi = i(613953)
                , ui = i(10919)
                , di = i(133142)
                , pi = i(943060)
                , mi = i(597986)
                , bi = i(706779)
                , fi = i(998507)
                , gi = i(932292)
                , vi = i(470942)
                , yi = i(368251)
                , Si = i(288384)
                , wi = i(914631)
                , xi = i(532582)
                , Ci = i(333940)
                , Ai = i(473898)
                , Bi = i(647979)
                , _i = i(613471)
                , Pi = i(551190)
                , Oi = i(967549);
            const Ti = Bi.s.Save
                , ji = "screenNameInput"
                , ki = Je.memo((t => {
                    const [e, i] = Je.useState("")
                        , [s, n] = Je.useState(!1)
                        , [[o], r] = Je.useState([Ai.Z])
                        , { isMobile: a, InputComponent: c } = t
                        , l = Ci._T(t, ["isMobile", "InputComponent"])
                        , h = a || l.theme === xi.jb.Mobile
                        , u = a ? xi.q$.Mobile : xi.q$.Desktop
                        , d = Je.useCallback((t => {
                            n(Oi.vK(t))
                        }
                        ), [])
                        , p = Je.useCallback((() => {
                            t.close(t.id)
                        }
                        ), [t.close, t.id])
                        , m = Je.useMemo((() => s ? l.buttons : function (t) {
                            return null == t ? void 0 : t.map((t => t.id === Ti ? Object.assign(Object.assign({}, t), {
                                state: $t.BN.Disabled
                            }) : t))
                        }(l.buttons)), [l.buttons, s]);
                    return $e.jsx("div", {
                        className: oi.Z({
                            "themeMobile--8de23": h
                        }),
                        "data-role": "screen-name",
                        children: $e.jsxs(_i.G, Object.assign({}, l, {
                            buttons: m,
                            callback: o,
                            popupVersion: u,
                            children: [$e.jsxs("div", {
                                className: "inputContainer--01f2e",
                                children: [$e.jsx(Pi.z, {
                                    className: "label--794aa",
                                    htmlFor: ji,
                                    children: oe.Iu("screennamelabel")
                                }), $e.jsx("div", {
                                    className: "inputWrapper--86e1b",
                                    children: $e.jsx(c, {
                                        onSuccess: p,
                                        handleNotification: i,
                                        inputId: ji,
                                        setSubmitHandler: r,
                                        isMobile: h,
                                        onChange: d
                                    })
                                })]
                            }), $e.jsx("div", {
                                "data-role": "screen-name-popup-notification-wrapper",
                                className: "notificationWrapper--2afa4",
                                children: $e.jsx(Oi.Lq, {
                                    notification: e,
                                    isMobile: a
                                })
                            })]
                        }))
                    })
                }
                ));
            ki.displayName = "ScreenNamePopup";
            var Ei = i(229858)
                , Li = i(301877)
                , Ri = i(383384);
            var Mi = i(721982)
                , Ii = i(832165)
                , Di = i(312221)
                , Ni = i(469513)
                , zi = i(922402)
                , Gi = i(622057)
                , Fi = i(443657)
                , Vi = i(191403)
                , Hi = i(346388)
                , Wi = i(875984)
                , Ui = i(650275)
                , Ki = i(343053)
                , Xi = i(756465)
                , Zi = i(756063)
                , Yi = i(923796);
            const qi = Hi._C((({ state: t }) => {
                const e = Zi.Ow(t)
                    , { Layouts: i, desktopGameLayerWithoutScaling: s, DesktopVideo: n } = Xi.mu();
                return {
                    SelectedLayout: i[e],
                    CustomVideo: n,
                    DesktopGameLayerWithoutScaling: s,
                    DefaultVideo: Ki.Q,
                    currentView: e
                }
            }
            ))((({ SelectedLayout: t, CustomVideo: e, DefaultVideo: i, currentView: s, DesktopGameLayerWithoutScaling: n, children: o }) => {
                const r = null !== e
                    , a = e || i;
                return $e.jsx("div", {
                    className: Yi.Z.app,
                    "data-role": `current-view-${s.toLowerCase()}`,
                    children: $e.jsxs(Ui.C, {
                        unscaledChildren: n,
                        children: [r && $e.jsx(a, {}), $e.jsx(t, {
                            children: o
                        }), $e.jsx(Wi.S, {})]
                    })
                })
            }
            ))
                , Qi = Je.memo((t => $e.jsx(Vi.F, {
                    DesktopComponent: qi,
                    children: t.children
                })));
            var $i = i(666660);
            function Ji(t, e) {
                const { params: i, lobby: s, deviceSupport: o = Mi.DS, mockBalanceManager: r, transports: a, menuButtonsConfig: c } = t;
                oe.uC(i.i18nData, i.tableConfig.game);
                const l = o.IS_DESKTOP
                    , u = l ? {
                        [f.m.ImmersiveV2]: {
                            videoStream: g.VideoPlaylist.Default,
                            labelTranslationId: "view",
                            isFooterGradientVisible: !1
                        },
                        [f.m.Classic]: {
                            videoStream: g.VideoPlaylist.Classic,
                            labelTranslationId: g.VideoPlaylist.Classic
                        }
                    } : {
                        [f.m.PhoneV2]: {
                            videoStream: g.VideoPlaylist.Default
                        }
                    };
                return function (t, e, i) {
                    var s, n, o, r, a, c, l, h, u;
                    const { config: d, settings: p } = t
                        , m = Ni.e()
                        , b = null !== (s = d.videoSyncDelay) && void 0 !== s ? s : p.videoSyncMaxDelay()
                        , f = new Ii.R(b)
                        , g = Object.assign(Object.assign({}, t), {
                            config: Object.assign(Object.assign({
                                enabledChats: {
                                    public: p.isPublicChatEnabled(),
                                    support: p.isSupportChatEnabled()
                                }
                            }, t.config), {
                                soundSettings: {
                                    studio: null === (o = null === (n = t.config.soundSettings) || void 0 === n ? void 0 : n.studio) || void 0 === o || o,
                                    music: null !== (a = null === (r = t.config.soundSettings) || void 0 === r ? void 0 : r.music) && void 0 !== a && a
                                }
                            }),
                            game: Object.assign(Object.assign({
                                theme: zi.J.Default,
                                videoSync: f
                            }, t.game), {
                                soundsToPreload: t.game.soundsToPreload ? [...Di.f, ...t.game.soundsToPreload] : Di.f,
                                aamsOptions: {
                                    onSessionInfo: ({ dispatch: t, getState: e }) => {
                                        Gi.w5(e()) || t(Fi.aP(!0))
                                    }
                                }
                            })
                        })
                        , { store: v, ag: y, transport: S, chatTransport: w, getReactRoot: x, dispose: C, multiwindowProvider: A } = pi.W({
                            coreGameOptions: Object.assign(Object.assign({}, g), {
                                game: Object.assign(Object.assign({}, g.game), {
                                    GameRoot: Qi,
                                    gameFamily: "live",
                                    mockTransports: e
                                })
                            }),
                            applicationOptions: {
                                horizon: !1,
                                layoutOptions: {
                                    hasVideo: !0,
                                    enhanceWithBrandingColors: !0
                                },
                                delayedConnectionMessageEnabled: !1,
                                redux: {
                                    reducers: {
                                        app3D: !!d.app3DEnabled,
                                        tipping: !0,
                                        footer: !0,
                                        winnersList: !0,
                                        screenName: !0,
                                        dealer: !0,
                                        videoWrapper: !0,
                                        video: !0
                                    },
                                    middlewares: {
                                        freeGames: (null === (c = d.promotions) || void 0 === c ? void 0 : c.usePromotionsApi) ? "none" : "live",
                                        idleGames: !0,
                                        videoSync: !0,
                                        layout: !0,
                                        tipping: !0
                                    }
                                },
                                componentsOptions: {
                                    hasUkgcFrequencyPreference: t.settings.isUKGC(),
                                    showOnboardingHintsOptionInSettings: !!g.config.showOnboardingHintsOptionInSettings,
                                    hasAutoplayDesktopDrawer: g.settings.autoplayApiEnabled() && "desktop" !== (null === (h = null === (l = t.config) || void 0 === l ? void 0 : l.layout.autoplay) || void 0 === h ? void 0 : h.disableControls),
                                    hasChatFilter: g.config.enabledChats.public && !m && !g.settings.suppressChat(),
                                    isScreenNameChangeEnabled: !!(null === (u = g.settings.screenNameChanges()) || void 0 === u ? void 0 : u.enabled) && !m
                                }
                            }
                        });
                    var B;
                    ui.q(S, v),
                        m || v.dispatch((B = !Mi.DS.IS_DESKTOP,
                            t => function () {
                                const t = gi.yZ(yi.X_);
                                return vi.lC(t, "json").catch((t => (401 !== (null == t ? void 0 : t.status) && fi.H(new fi.tE(`Error in fetching screen-name ${yi.X_}. ${t.status ? t.status : t}`)),
                                    Promise.reject(t))))
                            }().then((e => {
                                Si.t(e) ? t(Ri.Xf(e.screenName)) : t(Ei.Mw(function ({ isMobile: t, InputComponent: e }) {
                                    return new xi.OT({
                                        id: xi.eg.SCREEN_NAME
                                    }).addButtons([wi.r9(Ti)]).addTitle(oe.Iu("screenname")).setHasGameNumber(!1).setIsAutoClosing(!1).addPriority(xi.UL.Highest).addFactory((i => $e.jsx(ki, {
                                        id: i.data.id,
                                        buttons: i.data.buttons,
                                        close: i.close,
                                        isAnimated: i.animated,
                                        autoClose: i.data.autoClose,
                                        theme: i.theme,
                                        onAnimationEnd: i.onAnimationEnd,
                                        title: i.data.title,
                                        isMobile: t,
                                        InputComponent: e
                                    })))
                                }({
                                    isMobile: B,
                                    InputComponent: Li.t
                                })))
                            }
                            )).catch((() => { }
                            )))),
                        Mi.DS.IS_DESKTOP || di.wJ(v.dispatch),
                        S.incomingMessages.onValue((t => {
                            switch (t.type) {
                                case bi.C.ConnectionKickout:
                                    v.dispatch(Fi.aP(!1));
                                    break;
                                case bi.C.Dealer:
                                    "string" == typeof t.payload && v.dispatch(mi.Uo(t.payload))
                            }
                        }
                        ));
                    const _ = {
                        transport: S,
                        chatTransport: w,
                        dispose: C,
                        ag: y,
                        getReactRoot: x,
                        multiwindowProvider: A
                    };
                    return Object.assign(Object.assign({}, _), {
                        store: v
                    })
                }({
                    config: {
                        layout: {
                            initialLayout: t.initialLayout ? t.initialLayout : l ? f.m.ImmersiveV2 : f.m.PhoneV2,
                            layoutClassicIsHidden: !1,
                            layouts: u,
                            hasHelpSupportChatButton: !0,
                            winnersChatOneLineType: {
                                landscape: n.K.TopLeft
                            }
                        },
                        chipstack: {
                            position: {
                                tablet: hi.wd.Left,
                                phonePortrait: hi.aO.BottomCentered,
                                phoneLandscape: hi.KJ.Left
                            }
                        },
                        helpNamespace: i.gameType,
                        tableLimits: {
                            min: e.minTableLimit(),
                            max: e.maxTableLimit()
                        },
                        minBalance: e.minTableLimit(),
                        videoSyncDelay: e.videoSyncMaxDelay()
                    },
                    settings: e,
                    game: {
                        realityCheckOptions: {
                            videoSyncDisabled: !0
                        },
                        loader: i,
                        mockBalanceManager: r,
                        menuButtonsConfig: c,
                        preferenceConfiguration: h(e)
                    },
                    lobby: s
                }, a)
            }
            function ts(t) {
                var e;
                $i.settings._init(t.params.setup, t.params.styles, t.params.tableConfig, null !== (e = t.deviceSupport) && void 0 !== e ? e : Mi.DS);
                const i = $i.settings._extend(d)
                    , { dispose: s, getReactRoot: n, ag: r, transport: a } = Ji(t, i)
                    , c = function (t = {}) {
                        return p.z((() => new Ie(Object.assign(Object.assign({}, function () {
                            const t = new de
                                , e = new Ae
                                , i = function (t) {
                                    return new Kt(t)
                                }(e)
                                , s = new v(e)
                                , n = new Pe
                                , o = new Yt
                                , r = new Zt
                                , a = new Ee
                                , c = function (t, e) {
                                    return new Gt(t, e)
                                }(o, n)
                                , l = new je
                                , h = new te
                                , u = new Xt.E
                                , d = new xt({
                                    game: o,
                                    gameInfo: r,
                                    bets: c,
                                    transport: a,
                                    settings: e,
                                    agSubscriber: s,
                                    tooltipProcessor: l,
                                    logProcessor: h,
                                    flyingChipsProcessor: u
                                })
                                , p = function (t) {
                                    return new we(t)
                                }(s)
                                , m = new Jt({
                                    agSubscriber: s,
                                    bets: c,
                                    timer: n,
                                    settings: e,
                                    result: p,
                                    gamePhase: o,
                                    betProcessor: d
                                })
                                , b = function (t, e) {
                                    return new Qt(t, e)
                                }(m, i)
                                , f = (A = {
                                    history: b,
                                    layout: m,
                                    bets: c
                                },
                                    new Ut(A))
                                , g = function (t) {
                                    return new Ht(t)
                                }({
                                    agSubscriber: s,
                                    layout: m,
                                    bets: c
                                })
                                , y = function (t) {
                                    return new Te(t)
                                }(s)
                                , S = new Wt
                                , w = function (t) {
                                    return new ae(t)
                                }({
                                    agSubscriber: s
                                })
                                , x = new re
                                , C = function (t) {
                                    return new ke(t)
                                }({
                                    bets: c,
                                    timer: n,
                                    settings: e,
                                    result: p,
                                    gamePhase: o
                                });
                            var A;
                            return {
                                agSubscriber: s,
                                gamePhase: o,
                                gameInfo: r,
                                timer: n,
                                transport: a,
                                settings: e,
                                layout: m,
                                bets: c,
                                bettingGrid: g,
                                betProcessor: d,
                                result: p,
                                toasts: y,
                                tooltipProcessor: l,
                                references: t,
                                bettingStatistics: S,
                                preferences: w,
                                logProcessor: h,
                                history: b,
                                featureFlags: i,
                                chips: f,
                                onboardingBubbleProcessor: x,
                                flyingChipsProcessor: u,
                                trafficLightProcessor: C,
                                preloader: new le
                            }
                        }()), t))))
                    }();
                c.preloader.preload();
                const l = (h = c,
                    u = r.video.sync,
                    function (t, e, i, s, n) {
                        return function (o) {
                            const r = o;
                            if (!s(r, t))
                                return void i(r, 0, t);
                            const a = e.getVideoTime() + e.getMaxEventVideoTimeDiff()
                                , c = Math.min(n(r), a);
                            e.wait(c).then((e => {
                                i(r, e, t)
                            }
                            )).catch((t => {
                                console.warn("VideoSync error:", t)
                            }
                            ))
                        }
                    }(h, u, Qe, Ye, qe));
                var h, u;
                c.addSettings(i),
                    c.bindToAbstractGame(r),
                    c.addAgTransport(a, l);
                const m = n(t.componentsMap)
                    , b = (f = m,
                        g = [li],
                        () => $e.jsx(f, {
                            children: g.map(((t, e) => $e.jsx(t, {}, `${t.displayName}-${e}`)))
                        }));
                var f, g;
                const y = o.nX(c, b);
                return i.enableTestingAPI() && function (t, e) {
                    (function (t) {
                        ni("bettingGrid", {
                            getBettingGridState: () => t.betProcessor.isBettingEnabled ? "expanded" : "collapsed",
                            isAdvancedBettingMode: () => t.bets.isAdvancedBettingMode,
                            getChipValue: e => {
                                const i = t.result.payoutBet[e] || t.bets.bet[e] || 0;
                                return ei.r(i)
                            }
                            ,
                            getBettors: e => {
                                var i, s;
                                return (null === (s = null === (i = t.bettingStatistics.statistics) || void 0 === i ? void 0 : i[e]) || void 0 === s ? void 0 : s.players) || 0
                            }
                            ,
                            getStakes: e => {
                                var i, s;
                                return Oe.dN((null === (s = null === (i = t.bettingStatistics.statistics) || void 0 === i ? void 0 : i[e]) || void 0 === s ? void 0 : s.amount) || 0)
                            }
                            ,
                            placeChip: e => {
                                t.betProcessor.placeChip(e)
                            }
                        })
                    }
                    )(e),
                        function (t) {
                            ni("history", {
                                getHistory: () => t.history.history.slice()
                            })
                        }(e),
                        ni("translation", {
                            getTranslation: t => oe.Iu(t)
                        }),
                        function (t) {
                            ni("timer", {
                                remaining: () => {
                                    const e = t.timer.timerStartTimeMs > 0 ? ti.XL(Date.now() - t.timer.timerStartTimeMs) : 0;
                                    return Math.ceil(t.timer.totalTimeRemainingSec - e)
                                }
                                ,
                                stop: e => {
                                    t.timer.stopTimerAt(e)
                                }
                            })
                        }(e),
                        function (t) {
                            ni("registerIncomingMessageListener", (e => {
                                t.incomingMessages.onValue(e),
                                    window.console.info("[Incoming] WS Message listener registered successfully")
                            }
                            ))
                        }(t),
                        function (t) {
                            ni("registerOutgoingMessageListener", (e => {
                                t.onSendMessage((t => {
                                    e("string" == typeof t ? t : JSON.stringify(t))
                                }
                                )),
                                    window.console.info("[Outgoing] WS Message listener registered successfully")
                            }
                            ))
                        }(t),
                        ii.eK(si)
                }(a, c),
                {
                    layout: y,
                    storeCreated: r.preferences.initialization,
                    videoIsReady: r.video.ready,
                    dispose: async () => {
                        c.dispose(),
                            await s()
                    }
                }
            }
        }
        ,
        725262: (t, e, i) => {
            i.d(e, {
                V: () => s
            });
            class s {
                constructor(t, e) {
                    this.image = t,
                        this.config = e
                }
                getFrameData(t) {
                    return this.config[t]
                }
                getImage() {
                    return this.image
                }
            }
        }
        ,
        563708: (t, e, i) => {
            i.d(e, {
                a: () => n
            });
            var s = i(962525);
            const n = {
                [s.vm.One]: {
                    x: 68,
                    y: 4,
                    width: 120,
                    height: 248
                },
                [s.vm.Two]: {
                    x: 298,
                    y: 4,
                    width: 172,
                    height: 248
                },
                [s.vm.Three]: {
                    x: 41,
                    y: 261,
                    width: 174,
                    height: 252
                },
                [s.vm.Four]: {
                    x: 286,
                    y: 261,
                    width: 195,
                    height: 252
                }
            }
        }
        ,
        776454: (t, e, i) => {
            i.d(e, {
                Pj: () => u,
                aL: () => b,
                gI: () => c,
                iY: () => l,
                kQ: () => d,
                kb: () => m,
                mX: () => h,
                rB: () => a
            });
            var s = i(585857)
                , n = i(250930)
                , o = i(962525)
                , r = i(271121);
            function a(t) {
                const { betCode: e, betCodeValue: i, isBettingAllowed: s, currentBetCodeValue: o } = t;
                return s ? {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                } : {
                    type: n.XM.Error,
                    payload: {
                        code: n.QE.WaitingForNextGame
                    },
                    betCode: e,
                    betCodeValue: o
                }
            }
            function c(t) {
                const { betCode: e, betCodeValue: i, currentBetCodeValue: s, getMaxBetLimit: o } = t
                    , a = o(e)
                    , c = r.RW(a - s, 2);
                return i <= a ? {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                } : c > 0 ? {
                    type: n.XM.Warning,
                    payload: {
                        code: n.QE.MaxBetSpotValue,
                        limit: a
                    },
                    betCode: e,
                    betCodeValue: a
                } : {
                    type: n.XM.Error,
                    payload: {
                        code: n.QE.MaxBetSpotValue,
                        limit: a
                    },
                    betCode: e,
                    betCodeValue: s
                }
            }
            function l(t) {
                const { betCode: e, betCodeValue: i, getMinBetLimit: s } = t
                    , o = s(e);
                return i >= o ? {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                } : {
                    type: n.XM.Warning,
                    payload: {
                        code: n.QE.MinBetSpotValue,
                        limit: o
                    },
                    betCode: e,
                    betCodeValue: i
                }
            }
            function h(t) {
                const { betCode: e, betCodeValue: i, currentBetCodeValue: s, totalBetValue: o, balance: r } = t;
                return r >= o ? {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                } : {
                    type: n.XM.Error,
                    payload: {
                        code: n.QE.NotEnoughMoney
                    },
                    betCode: e,
                    betCodeValue: s
                }
            }
            function u(t) {
                const { betCode: e, betCodeValue: i, currentBetCodeValue: s, getMinBetLimit: o, balance: r } = t;
                return r >= o(e) ? {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                } : {
                    type: n.XM.Error,
                    payload: {
                        code: n.QE.BalanceTooLow
                    },
                    betCode: e,
                    betCodeValue: s
                }
            }
            function d(t) {
                const { betCode: e, betCodeValue: i, currentBetCodeValue: s, bets: o, isLowRisk: r } = t;
                return r && b(e, o) ? {
                    type: n.XM.Error,
                    payload: {
                        code: n.QE.OppositeBets
                    },
                    betCode: e,
                    betCodeValue: s
                } : {
                    type: n.XM.Ok,
                    betCode: e,
                    betCodeValue: i
                }
            }
            const p = [[o.vm.One, o.vm.Two, o.vm.Three, o.vm.Four], [o.vm.Big, o.vm.Small], [o.vm.Odd, o.vm.Even]]
                , m = t => p.find((e => e.includes(t)));
            function b(t, e = {}) {
                const i = m(t);
                return !!(null == i ? void 0 : i.every((i => i === t || !s.Z(e[i]))))
            }
        }
        ,
        250930: (t, e, i) => {
            var s, n, o;
            i.d(e, {
                QE: () => n,
                W7: () => o,
                XM: () => s
            }),
                function (t) {
                    t.Ok = "Ok",
                        t.Warning = "Warning",
                        t.Error = "Error"
                }(s || (s = {})),
                function (t) {
                    t.WaitingForNextGame = "WaitingForNextGame",
                        t.MaxBetSpotValue = "MaxBetSpotValue",
                        t.MinBetSpotValue = "MinBetSpotValue",
                        t.NotEnoughMoney = "NotEnoughMoney",
                        t.BalanceTooLow = "BalanceTooLow",
                        t.OppositeBets = "OppositeBets"
                }(n || (n = {})),
                function (t) {
                    t.PlaceChip = "PlaceChip",
                        t.Repeat = "Repeat",
                        t.Double = "Double",
                        t.Undo = "Undo",
                        t.UndoAll = "UndoAll",
                        t.AutoPlay = "AutoPlay",
                        t.MoveChip = "MoveChip",
                        t.RemoveChip = "RemoveChip"
                }(o || (o = {}))
        }
        ,
        249210: (t, e, i) => {
            i.d(e, {
                u1: () => w,
                MS: () => T,
                LX: () => j,
                cV: () => L,
                Qr: () => A,
                wf: () => x,
                Xr: () => S,
                T: () => f,
                YZ: () => g,
                Jb: () => P,
                nN: () => v,
                xh: () => _,
                lq: () => B,
                vC: () => k,
                mv: () => C,
                ej: () => y,
                VW: () => E,
                i3: () => O
            });
            var s = i(517657)
                , n = i(563707)
                , o = i(962525);
            function r(t, e, i, s) {
                var o;
                const r = n.V(t, e)
                    , h = {
                        x: c(r.x + .5 * r.width),
                        y: l(r.y + .5 * r.height, s)
                    }
                    , u = null === (o = e.rawConfig.betSpots[t]) || void 0 === o ? void 0 : o.chipPosition;
                return u && ("x" in u && (h.x = a(u.x, r, i, s)),
                    "y" in u && (h.y = a(u.y, r, i, s))),
                    h
            }
            function a(t, e, i, s) {
                const n = .5 * i;
                switch (t.anchor) {
                    case o.Q4.Top:
                        return l(e.y, s) + n * s + t.margin * s;
                    case o.Q4.Bottom:
                        return l(e.y + e.height, s) - n * s - t.margin * s;
                    case o.Kx.Left:
                        return c(e.x) + n + t.margin;
                    case o.Kx.Right:
                        return c(e.x + e.width) - n - t.margin;
                    case o.Kx.Center:
                        {
                            let i = 0;
                            return t.margin > 0 ? i = n : t.margin < 0 && (i = -n),
                                c(e.x + .5 * e.width) + i + t.margin
                        }
                    case o.Q4.Center:
                        {
                            let i = 0;
                            return t.margin > 0 ? i = n : t.margin < 0 && (i = -n),
                                l(e.y + .5 * e.height, s) + i * s + t.margin * s
                        }
                }
            }
            function c(t) {
                return .01 * t
            }
            function l(t, e) {
                return .01 * t * e
            }
            var h = i(517109)
                , u = i(250930)
                , d = i(945590)
                , p = i(98753)
                , m = i(271121)
                , b = i(2435);
            const f = {}
                , g = {};
            function v(t, e) {
                return t[e] || 0
            }
            function y(t, e) {
                const i = {};
                for (const s of o.tz) {
                    const n = m.RW(v(t, s) + v(e, s), 2);
                    n > 0 && (i[s] = n)
                }
                return i
            }
            function S(t, e) {
                return Object.keys(t).reduce(((i, s) => m.RW(i + Math.min(v(t, s), e(s)), 2)), 0)
            }
            function w(t, e) {
                for (const i of o.tz)
                    if (v(t, i) !== v(e, i))
                        return !1;
                return !0
            }
            function x(t) {
                return Object.keys(t).reduce(((e, i) => m.RW(e + t[i], 2)), 0)
            }
            function C(t, e) {
                const i = Object.keys(t);
                for (const s of i) {
                    const i = v(t, s);
                    if (i > 0 && i < e(s))
                        return !0
                }
                return !1
            }
            function A(t, e) {
                return Object.keys(t).reduce(((i, s) => {
                    const n = v(t, s);
                    return m.RW(i + n + Math.min(n, e(s) - n), 2)
                }
                ), 0)
            }
            function B(t) {
                return t.length > 0 ? t[t.length - 1] : f
            }
            function _(t) {
                return Object.keys(t).reduce(((e, i) => (e[i] = m.RW(2 * v(t, i), 2),
                    e)), {})
            }
            function P(t) {
                if (t.type !== u.XM.Ok)
                    switch (t.payload.code) {
                        case u.QE.NotEnoughMoney:
                        case u.QE.BalanceTooLow:
                            return b.Iu(d.B2.BalanceTooLow);
                        case u.QE.WaitingForNextGame:
                            return b.Iu(d.B2.WaitingForNextGame);
                        case u.QE.MaxBetSpotValue:
                            return b.Iu(d.B2.MaxBetSpotValue, {
                                amount: p.dN(t.payload.limit)
                            });
                        case u.QE.MinBetSpotValue:
                            return b.Iu(d.B2.MinBetSpotValue, {
                                amount: p.dN(t.payload.limit)
                            });
                        case u.QE.OppositeBets:
                            return b.Iu(d.B2.BetRestrictionsApply)
                    }
            }
            function O(t, e) {
                const i = Object.assign({}, t);
                for (const t of o.tz) {
                    const s = m.RW(v(e, t), 2);
                    s > 0 && (i[t] = s)
                }
                return i
            }
            function T(t) {
                return Object.keys(t).reduce(((e, i) => (e[o.Wt[i]] = t[i],
                    e)), {})
            }
            function j(t, e) {
                const i = {};
                for (const s of o.XV)
                    if (t[s] || e[s]) {
                        const n = t[s] || 0
                            , o = e[s] || 0;
                        n !== o && (i[s] = m.RW(o - n, 2))
                    }
                return i
            }
            function k(t) {
                return Object.keys(t).some((t => !o.jU.includes(t)))
            }
            function E(t) {
                return s.Z(t, ((t, e) => !o.jU.includes(e)))
            }
            function L(t, e) {
                const i = {}
                    , s = new h.f(t);
                s.updateActualAreaSize(100);
                const n = e.x / e.y
                    , a = s.chipSize * n;
                for (const t of o.tz) {
                    const e = r(t, s, s.chipSize, n);
                    i[t] = Object.assign(Object.assign({}, e), {
                        width: a,
                        height: a
                    })
                }
                return i
            }
        }
        ,
        621594: (t, e, i) => {
            i.d(e, {
                E: () => n
            });
            var s = i(302377);
            class n {
                constructor() {
                    this.startEmitter = s.z(),
                        this.stopEmitter = s.z(),
                        this.finishEmitter = s.z()
                }
                runAnimation(t) {
                    this.startEmitter.notify(t)
                }
                stopAnimation(t) {
                    this.stopEmitter.notify(t)
                }
                finishAnimation(t) {
                    this.finishEmitter.notify(t)
                }
                subscribeOnStartAnimation(t) {
                    return this.startEmitter.subscribe(t)
                }
                subscribeOnStopAnimation(t) {
                    return this.stopEmitter.subscribe(t)
                }
                subscribeOnFinishAnimation(t) {
                    return this.finishEmitter.subscribe(t)
                }
                dispose() {
                    this.startEmitter.dispose(),
                        this.stopEmitter.dispose(),
                        this.finishEmitter.dispose()
                }
            }
        }
        ,
        41678: (t, e, i) => {
            var s, n;
            i.d(e, {
                T: () => s,
                X: () => n
            }),
                function (t) {
                    t.Winning = "FlyingChipsAnimationType.Winning",
                        t.Place = "FlyingChipsAnimationType.Place",
                        t.Undo = "FlyingChipsAnimationType.Undo",
                        t.UndoAll = "FlyingChipsAnimationType.UndoAll"
                }(s || (s = {})),
                function (t) {
                    t.StackToChip = "StackToChip",
                        t.ChipToStack = "ChipToStack",
                        t.ChipToChip = "ChipToChip"
                }(n || (n = {}))
        }
        ,
        988161: (t, e, i) => {
            i.d(e, {
                Ts: () => b,
                fP: () => m,
                Qw: () => l,
                VP: () => f,
                UQ: () => p,
                AD: () => d,
                vL: () => g,
                Zj: () => u,
                u4: () => h
            });
            var s, n, o, r, a = i(249210);
            (r = s || (s = {})).ClientBetChip = "CLIENT_BET_CHIP",
                r.ClientPressedStatistics = "CLIENT_PRESSED_STATISTICS",
                r.ClientPressedStatisticsClose = "CLIENT_PRESSED_STATISTICS_CLOSE",
                r.ClientPressedRecentNumbersSlider = "CLIENT_PRESSED_RECENT_NUMBERS_SLIDER",
                r.ClientFantStatisticsScroll = "CLIENT_FANT_STATISTICS_SCROLL",
                r.ClientFantGridChange = "CLIENT_FANT_GRID_CHANGE",
                r.ClientBetAccepted = "CLIENT_BET_ACCEPTED",
                r.ClientBetAcceptedPartial = "CLIENT_BET_ACCEPTED_PARTIAL",
                r.ClientBetRejected = "CLIENT_BET_REJECTED",
                r.ClientPressedOnBetsOutOfBettingTime = "CLIENT_PRESSED_ON_BETS_OUT_OF_BETTING_TIME",
                r.ClientInteractedWithDrawer = "CLIENT_INTERACTED_WITH_DRAWER",
                function (t) {
                    t.Single = "single",
                        t.OddOrEven = "odd/even",
                        t.BigOrSmall = "big/small"
                }(n || (n = {})),
                function (t) {
                    t.Default = "default",
                        t.Advanced = "advanced"
                }(o || (o = {}));
            var c = i(962525);
            function l(t) {
                const { previousBet: e, newBet: i, betType: n, isAdvanced: o } = t
                    , r = a.LX(a.MS(e), a.MS(i))
                    , c = a.wf(r);
                return {
                    type: s.ClientBetChip,
                    payload: {
                        amount: c,
                        codes: r,
                        type: n,
                        gridView: v(o)
                    },
                    enhancers: ["bets", "currency", "gameType", "gameTime"]
                }
            }
            function h(t) {
                return {
                    type: t ? s.ClientPressedStatisticsClose : s.ClientPressedStatistics
                }
            }
            function u(t) {
                return {
                    type: s.ClientPressedRecentNumbersSlider,
                    payload: {
                        currentValue: t
                    }
                }
            }
            function d(t) {
                let e;
                switch (t) {
                    case c.kM.BetCode:
                        e = n.Single;
                        break;
                    case c.kM.OddEven:
                        e = n.OddOrEven;
                        break;
                    case c.kM.BigSmall:
                        e = n.BigOrSmall
                }
                return {
                    type: s.ClientFantStatisticsScroll,
                    payload: {
                        scrolledRoad: e
                    }
                }
            }
            function p(t) {
                return {
                    type: s.ClientFantGridChange,
                    payload: {
                        gridView: v(t)
                    }
                }
            }
            function m(t) {
                return {
                    type: s.ClientBetAcceptedPartial,
                    payload: t
                }
            }
            function b(t, e) {
                return {
                    type: s.ClientBetAccepted,
                    payload: {
                        originalBet: t,
                        confirmed: e
                    }
                }
            }
            function f(t, e, i) {
                return {
                    type: s.ClientBetRejected,
                    payload: {
                        originalBet: t,
                        invalid: e,
                        rejected: i
                    }
                }
            }
            function g(t) {
                return {
                    type: s.ClientPressedOnBetsOutOfBettingTime,
                    payload: {
                        bet: t
                    }
                }
            }
            function v(t) {
                return t ? o.Advanced : o.Default
            }
        }
        ,
        990125: (t, e, i) => {
            var s;
            i.d(e, {
                c: () => s
            }),
                function (t) {
                    t.AdvancedBettingGrid = "AdvancedBettingGrid",
                        t.Statistics = "Statistics"
                }(s || (s = {}))
        }
        ,
        732690: (t, e, i) => {
            i.d(e, {
                wF: () => o
            });
            const s = {
                betNumbersIcons: i.p + "images/betnumbers.b0478c83.png",
                playerIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAhFBMVEUAAADmyKbmyKfkxaTkx6bmyKbmx6blx6blyKfmyKblx6bew5vmyKflx6bmx6blyKflyKbmyKbkyKflx6bkxqflx6fkxqbexKPkv5/myKfmx6blyKblx6bmyKfmx6blyKbmx6bkxqXjxKbjwKHWqXnlx6flx6bkyKbjxKXkyKbiyKbmyKdBdGKzAAAAK3RSTlMA9NcdOvifQPvwbgzirJXp0beIX1hUSxIHsKeMZMrAeXYsJBcFu5lbMoEitcIPwQAAAXZJREFUOMu1lNmSgyAQRRtFMi5xiRo1Zt9n+P//m4BUIqabeZmcF6r0FGLfq/B5eOox5qUc3DSdNHSNy/MT+STxaa/N5Yi8JcW9tNiTYmKLCeXd5YQ7IdZTsSbEciqWhDibijNCjAPbC2IgWNniCiiOgbXhEUhuY/EGDiomDawCJ75gWhM+/EXLq4q38D/EUS5q/Uy/FnlEjfG8C4exZNkwpnB3RgP05BseEmIkUaKpd5UEV9tbSJLF2FtLB+tRHMwlsldIc+lkDgYuFV+IYi7ycV+7At2sGDU4VifMYoGJaaPSYkOYy2EIPSZ+Q6qW5WuGHPZ4MGYbRaEO3eKzrKBRS6FFT6VvToB82Ym+rQiHUXFMPAwPDLWoZtUDHDHxBPptvrRo2tRg4qO5O7VqkZn/FhJNaH5d7PkyqskJ0nAzZu9ZicNjzd/FzdAEU4tZv9VNuryL3ePyIdz29qcjkKgB5Sfajht2WftAcirFJguCbCPKE3yYX3h5jUbezowYAAAAAElFTkSuQmCC"
            };
            var n = i(388934);
            function o() {
                return t = s,
                    new Promise(((e, i) => {
                        let s = 0;
                        const o = () => {
                            s++,
                                function (t) {
                                    const e = {}
                                        , i = []
                                        , s = Object.keys(t);
                                    for (const o of s) {
                                        const s = t[o]
                                            , r = n.p(s);
                                        i.push(r),
                                            r.then((t => {
                                                e[o] = t
                                            }
                                            )).catch((() => { }
                                            ))
                                    }
                                    return Promise.all(i).then((() => Promise.resolve(e))).catch((() => Promise.reject(new Error("Images not preloaded"))))
                                }(t).then((t => e(t))).catch((() => {
                                    s < 3 ? o() : i(new Error("Images preloading is failed"))
                                }
                                ))
                        }
                            ;
                        o()
                    }
                    ));
                var t
            }
        }
        ,
        994373: (t, e, i) => {
            var s;
            i.d(e, {
                w: () => s
            }),
                function (t) {
                    t.BettingGrid = "BettingGrid",
                        t.AdvancedBettingGridButton = "AdvancedBettingGridButton",
                        t.StatisticsButton = "StatisticsButton",
                        t.FlyingChipsChipstack = "FlyingChipsChipstack"
                }(s || (s = {}))
        }
        ,
        945590: (t, e, i) => {
            var s, n, o;
            i.d(e, {
                B2: () => s,
                FL: () => o,
                Tb: () => n
            }),
                function (t) {
                    t.BalanceTooLow = "tooltip.balanceTooLow",
                        t.MaxBetSpotValue = "tooltip.maxBetIs",
                        t.MinBetSpotValue = "tooltip.minBetIs",
                        t.WaitingForNextGame = "tooltip.waitForNextGame",
                        t.BetRestrictionsApply = "tooltip.betRestrictionsApply",
                        t.YouWin = "youWin",
                        t.TotalBet = "bet",
                        t.LastWin = "lastWin",
                        t.Balance = "balance",
                        t.Cashier = "cashier",
                        t.SlowConnectionTitle = "SlowConnectionTitle",
                        t.MessageViewAutomaticallyMinimized = "message.viewAutomaticallyMinimized",
                        t.SwitchBack = "switchBack",
                        t.PFFmode = "PFFmode",
                        t.GameInPFFmode = "gameInPFFmode",
                        t.ChatSupportOpen = "chat.support.open",
                        t.MoreBets = "tooltip.moreBets",
                        t.LessBets = "tooltip.lessBets",
                        t.Statistics = "tooltip.statistics",
                        t.LastNRounds = "statistics.lastNRounds",
                        t.OnboardingBubbleAdvancedBettingGrid = "bubble.bettingOptions",
                        t.OnboardingBubbleStatistics = "bubble.statistics",
                        t.TrafficLightPlaceYourBets = "placebets",
                        t.TrafficLightBetsClosing = "betsclosing",
                        t.TrafficLightBetsClosed = "nomorebets",
                        t.TrafficLightLowBalance = "trafficlight.lowbalance",
                        t.TrafficLightBetsAccepted = "betsaccepted",
                        t.TrafficLightBetsRejected = "betsrejected",
                        t.GameCancelled = "gamecancelled",
                        t.Dealing = "dealing"
                }(s || (s = {})),
                function (t) {
                    t.One = "betCodeOne",
                        t.Two = "betCodeTwo",
                        t.Three = "betCodeThree",
                        t.Four = "betCodeFour",
                        t.Big = "betCodeBig",
                        t.Even = "betCodeEven",
                        t.Small = "betCodeSmall",
                        t.Odd = "betCodeOdd",
                        t.Kwok12 = "betCodeKwok12",
                        t.Kwok41 = "betCodeKwok41",
                        t.Kwok23 = "betCodeKwok23",
                        t.Kwok34 = "betCodeKwok34",
                        t.Nim12 = "betCodeNim12",
                        t.Nim13 = "betCodeNim13",
                        t.Nim14 = "betCodeNim14",
                        t.Nim21 = "betCodeNim21",
                        t.Nim23 = "betCodeNim23",
                        t.Nim24 = "betCodeNim24",
                        t.Nim31 = "betCodeNim31",
                        t.Nim32 = "betCodeNim32",
                        t.Nim34 = "betCodeNim34",
                        t.Nim41 = "betCodeNim41",
                        t.Nim42 = "betCodeNim42",
                        t.Nim43 = "betCodeNim43",
                        t.Ssh321 = "betCodeSsh321",
                        t.Ssh214 = "betCodeSsh214",
                        t.Ssh432 = "betCodeSsh432",
                        t.Ssh143 = "betCodeSsh143"
                }(n || (n = {})),
                function (t) {
                    t.Numbers = "betLimitGroup.1234",
                        t.OddEven = "betLimitGroup.oddEven",
                        t.BigSmall = "betLimitGroup.bigSmall",
                        t.Kwok = "betLimitGroup.kwok",
                        t.Ssh = "betLimitGroup.ssh",
                        t.Nim = "betLimitGroup.nim"
                }(o || (o = {}))
        }
        ,
        962525: (t, e, i) => {
            var s, n, o, r;
            i.d(e, {
                D$: () => u,
                Kx: () => m,
                Q4: () => b,
                Wt: () => c,
                XV: () => a,
                jU: () => h,
                jb: () => g,
                kM: () => p,
                pw: () => d,
                qi: () => f,
                rY: () => s,
                tz: () => l,
                vm: () => o,
                zp: () => n
            }),
                function (t) {
                    t.Init = "fantan.init",
                        t.BetsOpen = "fantan.betsOpen",
                        t.BetsClosed = "fantan.betsClosed",
                        t.Dealing = "fantan.dealing",
                        t.Resolved = "fantan.resolved",
                        t.Cancelled = "fantan.cancelled",
                        t.Cleared = "fantan.cleared"
                }(s || (s = {})),
                function (t) {
                    t.Idle = "Idle",
                        t.Open = "Open",
                        t.Accepted = "Accepted",
                        t.Rejected = "Rejected",
                        t.Settled = "Settled"
                }(n || (n = {})),
                function (t) {
                    t.One = "1",
                        t.Two = "2",
                        t.Three = "3",
                        t.Four = "4",
                        t.Big = "big",
                        t.Small = "small",
                        t.Even = "even",
                        t.Odd = "odd",
                        t.Kwok12 = "kwok12",
                        t.Kwok23 = "kwok23",
                        t.Kwok34 = "kwok34",
                        t.Kwok41 = "kwok41",
                        t.Nim12 = "1nim2",
                        t.Nim13 = "1nim3",
                        t.Nim14 = "1nim4",
                        t.Nim21 = "2nim1",
                        t.Nim23 = "2nim3",
                        t.Nim24 = "2nim4",
                        t.Nim31 = "3nim1",
                        t.Nim32 = "3nim2",
                        t.Nim34 = "3nim4",
                        t.Nim41 = "4nim1",
                        t.Nim42 = "4nim2",
                        t.Nim43 = "4nim3",
                        t.Ssh321 = "ssh321",
                        t.Ssh432 = "ssh432",
                        t.Ssh214 = "ssh214",
                        t.Ssh143 = "ssh143"
                }(o || (o = {})),
                function (t) {
                    t.One = "FT_1",
                        t.Two = "FT_2",
                        t.Three = "FT_3",
                        t.Four = "FT_4",
                        t.Big = "FT_Big",
                        t.Small = "FT_Small",
                        t.Even = "FT_Even",
                        t.Odd = "FT_Odd",
                        t.Kwok12 = "FT_Kwok_1_2",
                        t.Kwok23 = "FT_Kwok_2_3",
                        t.Kwok34 = "FT_Kwok_3_4",
                        t.Kwok41 = "FT_Kwok_4_1",
                        t.Nim12 = "FT_1_Nim_2",
                        t.Nim13 = "FT_1_Nim_3",
                        t.Nim14 = "FT_1_Nim_4",
                        t.Nim21 = "FT_2_Nim_1",
                        t.Nim23 = "FT_2_Nim_3",
                        t.Nim24 = "FT_2_Nim_4",
                        t.Nim31 = "FT_3_Nim_1",
                        t.Nim32 = "FT_3_Nim_2",
                        t.Nim34 = "FT_3_Nim_4",
                        t.Nim41 = "FT_4_Nim_1",
                        t.Nim42 = "FT_4_Nim_2",
                        t.Nim43 = "FT_4_Nim_3",
                        t.Ssh321 = "FT_Ssh_3_2_1",
                        t.Ssh432 = "FT_Ssh_4_3_2",
                        t.Ssh214 = "FT_Ssh_2_1_4",
                        t.Ssh143 = "FT_Ssh_1_4_3"
                }(r || (r = {}));
            const a = Object.values(r)
                , c = {
                    [o.One]: r.One,
                    [o.Two]: r.Two,
                    [o.Three]: r.Three,
                    [o.Four]: r.Four,
                    [o.Big]: r.Big,
                    [o.Small]: r.Small,
                    [o.Even]: r.Even,
                    [o.Odd]: r.Odd,
                    [o.Kwok12]: r.Kwok12,
                    [o.Kwok23]: r.Kwok23,
                    [o.Kwok34]: r.Kwok34,
                    [o.Kwok41]: r.Kwok41,
                    [o.Nim12]: r.Nim12,
                    [o.Nim13]: r.Nim13,
                    [o.Nim14]: r.Nim14,
                    [o.Nim21]: r.Nim21,
                    [o.Nim23]: r.Nim23,
                    [o.Nim24]: r.Nim24,
                    [o.Nim31]: r.Nim31,
                    [o.Nim32]: r.Nim32,
                    [o.Nim34]: r.Nim34,
                    [o.Nim41]: r.Nim41,
                    [o.Nim42]: r.Nim42,
                    [o.Nim43]: r.Nim43,
                    [o.Ssh321]: r.Ssh321,
                    [o.Ssh432]: r.Ssh432,
                    [o.Ssh214]: r.Ssh214,
                    [o.Ssh143]: r.Ssh143
                }
                , l = Object.values(o)
                , h = [o.One, o.Two, o.Three, o.Four, o.Big, o.Small, o.Even, o.Odd]
                , u = (o.Ssh143,
                    o.Ssh214,
                    o.Ssh321,
                    o.Ssh432,
                    [o.One, o.Two, o.Three, o.Four]);
            var d, p, m, b, f, g;
            (function (t) {
                t.Rect = "Rect",
                    t.Poly = "Poly"
            }
            )(d || (d = {})),
                function (t) {
                    t.BetCode = "BetCode",
                        t.OddEven = "OddEven",
                        t.BigSmall = "BigSmall"
                }(p || (p = {})),
                function (t) {
                    t.Left = "HorizontalAlignment.Left",
                        t.Right = "HorizontalAlignment.Right",
                        t.Center = "HorizontalAlignment.Center"
                }(m || (m = {})),
                function (t) {
                    t.Top = "VerticalAlignment.Top",
                        t.Bottom = "VerticalAlignment.Bottom",
                        t.Center = "VerticalAlignment.Center"
                }(b || (b = {})),
                function (t) {
                    t.DesktopImmersive = "DesktopImmersive",
                        t.DesktopClassic = "DesktopClassic",
                        t.MobilePortrait = "MobilePortrait",
                        t.MobileLandscape = "MobileLandscape",
                        t.Tablet = "Tablet"
                }(f || (f = {})),
                function (t) {
                    t.Numbers = "1234",
                        t.OddEven = "oddEven",
                        t.BigSmall = "bigSmall",
                        t.Kwok = "kwok",
                        t.Nim = "nim",
                        t.Ssh = "ssh"
                }(g || (g = {}))
        }
        ,
        789085: (t, e, i) => {
            function s(t, e = 1) {
                return {
                    x: t.x / e,
                    y: t.y / e,
                    width: t.width / e,
                    height: t.height / e
                }
            }
            function n(t) {
                const e = t.reverseScale || 1;
                return Object.assign(Object.assign({}, t), {
                    top: t.top / e,
                    left: t.left / e,
                    width: t.width / e,
                    height: t.height / e,
                    boxWidth: t.boxWidth / e,
                    boxHeight: t.boxHeight / e
                })
            }
            i.d(e, {
                I: () => s,
                P: () => n
            })
        }
        ,
        930480: (t, e, i) => {
            i.d(e, {
                y: () => n
            });
            var s = i(161246);
            function n(t) {
                return new o(t)
            }
            class o {
                constructor(t) {
                    this.delayMap = Array.from(t).reduce(((t, e) => (t[e] = [],
                        t)), {})
                }
                add(t) {
                    const e = s.x(t.type)
                        , i = window.setTimeout((() => {
                            t.callback(),
                                this.delayMap[t.type] = this.delayMap[t.type].filter((({ uniqueId: t }) => t !== e))
                        }
                        ), t.timeout);
                    this.delayMap[t.type].push(Object.assign(Object.assign({}, t), {
                        uniqueId: e,
                        timeoutId: i
                    }))
                }
                clear(t) {
                    this.delayMap[t].forEach((t => {
                        t.timeoutId && window.clearTimeout(t.timeoutId)
                    }
                    )),
                        this.delayMap[t].length = 0
                }
                executeImmediately(t) {
                    this.delayMap[t].forEach((t => {
                        t.timeoutId && window.clearTimeout(t.timeoutId),
                            t.callback()
                    }
                    )),
                        this.delayMap[t].length = 0
                }
                dispose() {
                    Object.keys(this.delayMap).forEach((t => this.clear(t)))
                }
            }
        }
        ,
        302377: (t, e, i) => {
            function s() {
                return new n
            }
            i.d(e, {
                z: () => s
            });
            class n {
                constructor() {
                    this.listeners = []
                }
                subscribe(t) {
                    return this.listeners.push(t),
                        () => this.unsubscribe(t)
                }
                unsubscribe(t) {
                    this.listeners = this.listeners.filter((e => e !== t))
                }
                notify(t) {
                    this.listeners.forEach((e => e(t)))
                }
                dispose() {
                    this.listeners.length = 0
                }
            }
        }
        ,
        161246: (t, e, i) => {
            function s(t) {
                return `${t}-${Math.floor(1e9 * Math.random())}-${+new Date}`
            }
            i.d(e, {
                x: () => s
            })
        }
        ,
        505817: (t, e, i) => {
            var s = i(424470)
                , n = i(367444)
                , o = i(298907)
                , r = i(242129)
                , a = i(490796)
                , c = i(898439)
                , l = i(567557)
                , h = i(188464)
                , u = i(989526)
                , d = i(455737)
                , p = i(517720);
            const m = h.Pi((() => {
                const t = p.oR()
                    , e = {
                        getMinBetGroupLimit: t.settings.gameSettings.getMinBetGroupLimit,
                        getMaxBetGroupLimit: t.settings.gameSettings.getMaxBetGroupLimit,
                        payoutLimit: t.settings.gameSettings.payoutLimit(),
                        currencySymbol: t.agSubscriber.currencySymbol,
                        isMobile: !1
                    };
                return l.jsx(d.M, Object.assign({}, e))
            }
            ));
            var b = i(540712);
            const f = i.p + "images/logo.96a65c07.svg"
                , g = ({ tableLogo: t }) => {
                    const [e, i] = u.useState(!1)
                        , s = u.useCallback((() => {
                            i(!0)
                        }
                        ), [i]);
                    return l.jsx("div", {
                        className: b.Z("logoContainer--c1c2c", {
                            "visible--cc6f6": e
                        }),
                        "data-role": "footer-left-logo-container",
                        children: l.jsx("img", {
                            "data-role": "footer-left-logo-image",
                            src: t || f,
                            onLoad: s
                        })
                    })
                }
                , v = h.Pi((() => {
                    const t = {
                        tableLogo: p.oR().settings.tableLogo
                    };
                    return l.jsx(g, Object.assign({}, t))
                }
                ));
            var y = i(295954);
            const S = ({ isExpanded: t, onTransitionEnd: e }) => (u.useEffect((() => {
                e(t)
            }
            ), []),
                u.useEffect((() => {
                    const i = window.setTimeout((() => {
                        e(t)
                    }
                    ), 400);
                    return () => window.clearTimeout(i)
                }
                ), [t]),
                l.jsx("div", {
                    className: "centerContainer--93559",
                    children: l.jsx("div", {
                        className: b.Z("content--ed1c0", {
                            "collapsed--63ca2": !t
                        }),
                        children: l.jsx(y.Zx, {})
                    })
                }))
                , w = h.Pi((() => {
                    const t = p.oR()
                        , e = u.useCallback((e => {
                            t.layout.setIsBettingGridExpanded(e)
                        }
                        ), [t]);
                    return l.jsx(S, {
                        isExpanded: t.bets.isBettingAllowed,
                        onTransitionEnd: e
                    })
                }
                ));
            var x = i(423777)
                , C = i(854677);
            const A = ({ showHistory: t }) => t ? l.jsxs("div", {
                className: "historyStatisticContainer--1d63f",
                children: [l.jsx(x.cr, {}), l.jsx("div", {
                    className: "sliderContainer--1dfb4",
                    children: l.jsx(C._, {})
                })]
            }) : null
                , B = h.Pi((() => {
                    const t = {
                        showHistory: 0 !== p.oR().history.history.length
                    };
                    return l.jsx(A, Object.assign({}, t))
                }
                ));
            var _ = i(226717)
                , P = i(149477);
            const O = ({ isBettingGridEnabled: t }) => l.jsxs("div", {
                "data-role": "classic-game-overlay",
                className: "classicGameOverlay--46e3b",
                children: [l.jsx("div", {
                    className: b.Z("bettingContainer--a780b", {
                        "collapsed--00d6a": !t
                    }),
                    children: l.jsx(y.Zx, {})
                }), l.jsx(P.C, {}), ";", l.jsx(_.hk, {})]
            })
                , T = h.Pi((() => {
                    const t = {
                        isBettingGridEnabled: p.oR().bets.isBettingAllowed
                    };
                    return l.jsx(O, Object.assign({}, t))
                }
                ));
            var j = i(937402);
            const k = u.memo((({ isHistoryExpanded: t }) => l.jsxs("div", {
                className: b.Z("expandable--d8db5", "historyContainer--905f3", {
                    "historyExpanded--1e1a3": t
                }),
                children: [l.jsx("div", {
                    className: "latestHistoryStatistics--ac02b",
                    children: l.jsx(j.n, {})
                }), l.jsx(x.cr, {}), l.jsx("div", {
                    className: "sliderContainer--8a07d",
                    children: l.jsx(C._, {})
                })]
            })))
                , E = h.Pi((() => {
                    const t = p.oR();
                    return l.jsx(k, {
                        isHistoryExpanded: t.history.isExpanded
                    })
                }
                ))
                , L = () => l.jsxs("div", {
                    "data-role": "immersive-game-overlay",
                    className: "immersiveGameOverlay--f0a32",
                    children: [l.jsx(o.H, {}), l.jsx(E, {}), l.jsx(P.C, {}), l.jsx(_.hk, {})]
                })
                , R = t => {
                    const { isClassicLayout: e } = t;
                    return e ? l.jsx(T, {}) : l.jsx(L, {})
                }
                , M = h.Pi((() => {
                    const t = {
                        isClassicLayout: p.oR().layout.isClassicLayout
                    };
                    return l.jsx(R, Object.assign({}, t))
                }
                ))
                , I = Object.assign(Object.assign({}, c.$), {
                    LayoutImmersiveFooterLeftComponent: v,
                    LayoutImmersiveFooterBettingGrid: w,
                    GameOverlays: M,
                    LayoutBetLimitsBody: m,
                    LayoutBottomRightButtons: [a.A2, r.g],
                    LayoutClassicTopRightComponent: B,
                    LayoutClassicVideoOverlayComponent: o.H
                });
            var D = i(402973)
                , N = i(921557);
            window.EVO_LOADER.publishApplication("/frontend/evo/r2/", "fanTan.desktop", {
                initialize: async function (t) {
                    const e = N.z({
                        gameLoaderParams: t
                    })
                        , { layout: i, storeCreated: o, videoIsReady: r, dispose: a } = function (t, e) {
                            return n.Q({
                                params: t,
                                componentsMap: I,
                                lobby: e
                            })
                        }(t, e);
                    await o;
                    const c = s.s(t.getRoot());
                    return c.render(i),
                        await r,
                    {
                        abstractGameDispose: a,
                        root: c
                    }
                },
                dispose: D.C,
                applicationType: "game"
            })
        }
        ,
        738503: (t, e, i) => {
            var s = i(424470)
                , n = i(367444)
                , o = i(898439)
                , r = i(567557)
                , a = i(540712)
                , c = i(188464)
                , l = i(989526)
                , h = i(517720)
                , u = i(57960);
            function d(t) {
                const { portraitColors: e, isLandscape: i, videoHeight: s, isBettingEnabled: n } = t;
                let o;
                return o = i ? u.u(n) : function (t) {
                    const { light: e, dark: i } = t;
                    return `linear-gradient(180deg, rgba(${e}, 0) 0%, 28%, rgb(${i}) 45%, rgb(${i}) 55%, rgba(${i}, 0) 100%)`
                }(e),
                {
                    background: o,
                    transform: `translate(0px,${s}px) translateZ(0px)`
                }
            }
            const p = t => {
                const { isLandscape: e, isBettingEnabled: i } = t
                    , [s, n] = l.useState(!1);
                return l.useEffect((() => {
                    n(!1);
                    const t = requestAnimationFrame((() => {
                        n(!0)
                    }
                    ));
                    return () => {
                        cancelAnimationFrame(t)
                    }
                }
                ), [e]),
                    r.jsx("div", {
                        style: d(t),
                        className: a.Z("footerGradient--78b1c", {
                            "landscape--08dc3": e,
                            "portrait--61e21": !e,
                            "isBettingEnabled--d6b63": i,
                            "animate--d3ad6": s
                        })
                    })
            }
                , m = c.Pi((() => {
                    const t = h.oR();
                    return r.jsx(p, {
                        portraitColors: t.settings.portraitGradientColors,
                        isLandscape: t.layout.isLandscape,
                        videoHeight: t.layout.videoHeight,
                        isBettingEnabled: t.betProcessor.isBettingEnabled
                    })
                }
                ));
            var b = i(873662)
                , f = i(455737)
                , g = i(2435)
                , v = i(357114)
                , y = i(75385)
                , S = i(363628)
                , w = i(834371);
            const x = ({ betMinLimit: t, betMaxLimit: e, currencySymbol: i, tableMinLimit: s, tableMaxLimit: n, tableName: o, tBodyComponent: c, preSection: h, areLimitsInlined: u = !1, hideTitle: d = !1, isTablet: p = !1, showPayouts: m, legacyMenuMode: b }) => {
                const f = l.useMemo((() => v.w({
                    lowerLimit: t,
                    upperLimit: e,
                    currencySymbol: i
                })), [t, e, i])
                    , x = l.useMemo((() => {
                        if (n && s)
                            return v.w({
                                lowerLimit: s,
                                upperLimit: n,
                                currencySymbol: i
                            })
                    }
                    ), [s, n, i]);
                return r.jsxs(r.Fragment, {
                    children: [r.jsx(y.R, {
                        className: w.Z.container,
                        useMobileScrollable: !0,
                        dataRole: b ? void 0 : "drawer-scrollable",
                        hasContentFadeOut: !b,
                        children: r.jsxs("div", {
                            className: w.Z.scrollContainer,
                            children: [!d && r.jsxs("div", {
                                className: a.Z(w.Z.tableInfo, {
                                    [w.Z.tablet]: p
                                }),
                                children: [r.jsxs("div", {
                                    children: [`${g.Iu("table")}: `, r.jsx("span", {
                                        className: w.Z.tableName,
                                        children: o
                                    })]
                                }), r.jsxs("div", {
                                    children: [r.jsx("span", {
                                        children: g.Iu("betlimits3")
                                    }), " ", r.jsx("span", {
                                        className: w.Z.limits,
                                        children: f
                                    })]
                                }), !!x && r.jsxs("div", {
                                    "data-role": "table-limits",
                                    children: [r.jsx("span", {
                                        children: g.Iu("tableLimits3")
                                    }), " ", r.jsx("span", {
                                        className: w.Z.limits,
                                        children: x
                                    })]
                                })]
                            }), h, r.jsxs("table", {
                                className: w.Z.table,
                                children: [r.jsx(S.S, {
                                    isMobile: !0,
                                    areLimitsInlined: u,
                                    showPayouts: m,
                                    legacyMenuMode: b
                                }), c]
                            })]
                        })
                    }), b && r.jsx("div", {
                        className: a.Z(w.Z.shadow, {
                            [w.Z.tablet]: p
                        })
                    })]
                })
            }
                ;
            x.displayName = "MobileBetLimitsAndPayoutsTable";
            const C = t => {
                const { currencySymbol: e, isTablet: i, tableName: s, tableBetMinLimit: n, tableBetMaxLimit: o } = t;
                return r.jsx(x, {
                    currencySymbol: e,
                    betMinLimit: n,
                    betMaxLimit: o,
                    isTablet: i,
                    tableName: s,
                    tBodyComponent: r.jsx(f.M, Object.assign({}, t))
                })
            }
                , A = c.Pi((() => {
                    const t = h.oR()
                        , e = {
                            getMinBetGroupLimit: t.settings.gameSettings.getMinBetGroupLimit,
                            getMaxBetGroupLimit: t.settings.gameSettings.getMaxBetGroupLimit,
                            tableBetMinLimit: t.settings.gameSettings.minTableLimit(),
                            tableBetMaxLimit: t.settings.gameSettings.maxTableLimit(),
                            payoutLimit: t.settings.gameSettings.payoutLimit(),
                            currencySymbol: t.agSubscriber.currencySymbol,
                            isTablet: t.layout.isTablet,
                            tableName: t.settings.gameSettings.getTableName(),
                            isMobile: !0
                        };
                    return r.jsx(C, Object.assign({}, e))
                }
                ));
            var B = i(423777)
                , _ = i(854677);
            const P = c.Pi((() => {
                const t = h.oR();
                return r.jsxs("div", {
                    className: a.Z("statistics--06341", {
                        "landscape--8af11": t.layout.isLandscape
                    }),
                    children: [r.jsx("div", {
                        className: "sections--b4c60",
                        children: r.jsx(B.cr, {})
                    }), r.jsx("div", {
                        className: "slider--980b3",
                        children: r.jsx(_._, {})
                    })]
                })
            }
            ));
            var O = i(226717)
                , T = i(298907)
                , j = i(149477)
                , k = i(490796);
            const E = ({ isTablet: t, isPhone: e, isLandscape: i }) => {
                const s = {
                    "isTablet--dafa7": t,
                    "isPhone--86c7f": e,
                    "isLandscape--cc218": i
                };
                return r.jsx("div", {
                    className: a.Z("container--1f364", s),
                    "data-role": "bottom-left-buttons",
                    children: r.jsx(k.A2, {})
                })
            }
                , L = () => {
                    const t = h.oR()
                        , e = {
                            isTablet: t.layout.isTablet,
                            isPhone: t.layout.isPhone,
                            isLandscape: t.layout.isLandscape
                        };
                    return r.jsx(E, Object.assign({}, e))
                }
                ;
            var R = i(295954)
                , M = i(937402);
            const I = ({ isExpanded: t, bettingGridWidth: e }) => {
                const i = l.useRef(null)
                    , [s, n] = l.useState("");
                return l.useEffect((() => {
                    i.current && n(function (t, e, i) {
                        return t ? `translateX(${.5 * (e - i)}px) scale(1)` : "scale(0.5)"
                    }(t, i.current.clientWidth, e))
                }
                ), [i, t, e]),
                    r.jsx("div", {
                        "data-role": "landscape-overlay-test-id",
                        className: "landscapeGameOverlay--6cba7",
                        children: r.jsxs("div", {
                            className: "content--aa9c6",
                            children: [r.jsx("div", {
                                className: "historyContainer--87878",
                                children: r.jsx(M.n, {})
                            }), r.jsx("div", {
                                className: "bottomContainer--c31e8",
                                ref: i,
                                children: r.jsx("div", {
                                    className: "bettingContainer--c1e4b",
                                    style: {
                                        transform: s
                                    },
                                    children: r.jsx(R.Zx, {})
                                })
                            })]
                        })
                    })
            }
                , D = c.Pi((() => {
                    const t = h.oR();
                    return r.jsx(I, {
                        isExpanded: t.bets.isBettingAllowed,
                        bettingGridWidth: t.bettingGrid.size.x
                    })
                }
                ));
            var N = i(271121);
            const z = "animated--34a24"
                , G = ({ videoHeight: t, containerHeight: e, bettingGridSize: i, isBettingAllowed: s }) => {
                    const n = l.useRef(null)
                        , [o, c] = l.useState(1)
                        , [h, u] = l.useState(0)
                        , [d, p] = l.useState(!1)
                        , m = .5 * (i.y - i.y * o);
                    return l.useEffect((() => {
                        if (n.current) {
                            const t = parseFloat(getComputedStyle(n.current).bottom);
                            u(Number.isNaN(t) ? 0 : t)
                        }
                    }
                    ), [n]),
                        l.useEffect((() => {
                            if (!h)
                                return;
                            const n = e - (t + h)
                                , o = i.y + 28 + 8
                                , r = s ? 1 : .8
                                , a = N.RW(Math.min(r, n / o), 2);
                            c(a)
                        }
                        ), [h, t, e, s]),
                        l.useLayoutEffect((() => {
                            d || window.requestAnimationFrame((() => {
                                p(!0)
                            }
                            ))
                        }
                        ), [o]),
                        r.jsx("div", {
                            "data-role": "portrait-overlay-test-id",
                            className: "portraitGameOverlay--cf962",
                            children: r.jsxs("div", {
                                className: "content--2c3ed",
                                ref: n,
                                style: {
                                    top: t
                                },
                                children: [r.jsx("div", {
                                    className: a.Z("historyContainer--77c0c", {
                                        [z]: d
                                    }),
                                    style: {
                                        height: "28px",
                                        marginBottom: 8,
                                        transform: `translate(0, ${m}px`
                                    },
                                    children: r.jsx(M.n, {})
                                }), r.jsx("div", {
                                    className: a.Z("bettingContainer--b29e2", {
                                        [z]: d
                                    }),
                                    style: {
                                        transform: `scale(${o})`
                                    },
                                    children: r.jsx(R.Zx, {})
                                })]
                            })
                        })
                }
                , F = c.Pi((() => {
                    const t = h.oR();
                    return r.jsx(G, {
                        videoHeight: t.layout.videoHeight,
                        containerHeight: t.agSubscriber.gameDimension.containerHeight,
                        bettingGridSize: t.bettingGrid.size,
                        isBettingAllowed: t.bets.isBettingAllowed
                    })
                }
                ));
            var V = i(17601);
            const H = ({ isLandscape: t, isRng: e }) => r.jsxs(r.Fragment, {
                children: [r.jsxs(V.P, {
                    isRng: e,
                    children: [r.jsx(T.H, {}), !t && r.jsx(F, {}), t && r.jsx(D, {}), r.jsx(L, {}), r.jsx(j.C, {})]
                }), r.jsx(O.hk, {})]
            })
                , W = c.Pi((() => {
                    const t = {
                        isLandscape: h.oR().layout.isLandscape,
                        isRng: !1
                    };
                    return r.jsx(H, Object.assign({}, t))
                }
                ))
                , U = Object.assign(Object.assign({}, o.$), {
                    MobileGameOverlayContainer: W,
                    MobileMenuNavigationMap: {
                        betLimits: A,
                        statistics: () => r.jsx(b.iM, {
                            children: r.jsx(P, {})
                        })
                    },
                    MobileVideoGradients: [m]
                });
            var K = i(400967)
                , X = i(402973)
                , Z = i(921557)
                , Y = i(391053)
                , q = i(853112);
            window.EVO_LOADER.publishApplication("/frontend/evo/r2/", "fanTan.mobile", {
                initialize: async function (t) {
                    const e = Z.z({
                        animation: Y.jF.FromLeftToRight,
                        backgroundGradientColor: q.NW(t),
                        gameLoaderParams: t
                    })
                        , { layout: i, storeCreated: o, dispose: r } = await function (t, e) {
                            return n.Q({
                                params: t,
                                componentsMap: U,
                                lobby: e,
                                menuButtonsConfig: {
                                    customButtons: [{
                                        id: K.G.Statistics
                                    }]
                                }
                            })
                        }(t, e);
                    await o;
                    const a = s.s(t.getRoot());
                    return a.render(i),
                    {
                        abstractGameDispose: r,
                        root: a
                    }
                },
                dispose: X.C,
                applicationType: "game"
            })
        }
        ,
        954474: (t, e, i) => {
            var s, n, o;
            i.d(e, {
                Q2: () => s,
                eL: () => n,
                hE: () => o
            }),
                function (t) {
                    t[t.Default = 0] = "Default",
                        t[t.Small = 1] = "Small"
                }(s || (s = {})),
                function (t) {
                    t[t.Default = 0] = "Default",
                        t[t.Dark = 1] = "Dark",
                        t[t.ThickRedBorderDarkBg = 2] = "ThickRedBorderDarkBg",
                        t[t.ThickRedBorder = 3] = "ThickRedBorder",
                        t[t.ThickGoldBorderDarkBg = 4] = "ThickGoldBorderDarkBg",
                        t[t.ThickGoldBorder = 5] = "ThickGoldBorder",
                        t[t.Gold = 6] = "Gold",
                        t[t.MetalGold = 7] = "MetalGold",
                        t[t.ShinyBorderGold = 8] = "ShinyBorderGold",
                        t[t.PaleGold = 9] = "PaleGold"
                }(n || (n = {})),
                function (t) {
                    t[t.C = 0] = "C",
                        t[t.D = 1] = "D",
                        t[t.H = 2] = "H",
                        t[t.S = 3] = "S"
                }(o || (o = {}))
        }
        ,
        933721: (t, e, i) => {
            i.d(e, {
                F: () => o
            });
            const s = t => `\n    <svg style="visibility: hidden; height: 0; width: 0; position: absolute;">\n        <defs>\n            <linearGradient id="card-bg-light-default" x1="90" y1="250" x2="90" gradientUnits="userSpaceOnUse">\n                <stop offset="0" stop-color="#e6e6e6" />\n                <stop offset="1" stop-color="#fff" />\n            </linearGradient>\n            <linearGradient id="card-bg-dark" x1="90" y1="250" x2="90" gradientUnits="userSpaceOnUse">\n                <stop offset="0" stop-color="#121212" />\n                <stop offset="1" stop-color="#272727" />\n            </linearGradient>\n            <linearGradient id="card-bg-gold" x1="90" y1="250" x2="90" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#FFB600" offset="0"></stop>\n                <stop stop-color="#FFB600" offset="0.15"></stop>\n                <stop stop-color="#FFB600" offset="0.2"></stop>\n                <stop stop-color="#FFD264" offset="0.3"></stop>\n                <stop stop-color="#FFB600" offset="0.45"></stop>\n                <stop stop-color="#FFB600" offset="0.6"></stop>\n                <stop stop-color="#FFD874" offset="0.8"></stop>\n                <stop stop-color="#FFB600" offset="1"></stop>\n            </linearGradient>\n            <linearGradient id="card-bg-metal-gold" x1="75.978" y1="-17.192" x2="105.5943" y2="342.5" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#F7B81D"/>\n                <stop offset="0.034" stop-color="#F6BC26"/>\n                <stop offset="0.091" stop-color="#F6C741"/>\n                <stop offset="0.164" stop-color="#F5D96C"/>\n                <stop offset="0.241" stop-color="#F5EFA1"/>\n                <stop offset="0.295" stop-color="#F5EA94"/>\n                <stop offset="0.397" stop-color="#F5DE72"/>\n                <stop offset="0.527" stop-color="#F7CB3E"/>\n                <stop offset="0.57" stop-color="#F6D04D"/>\n                <stop offset="0.803" stop-color="#F5EFA1"/>\n                <stop offset="0.829" stop-color="#EFE697"/>\n                <stop offset="0.873" stop-color="#E2CF7F"/>\n                <stop offset="0.929" stop-color="#CBAB56"/>\n                <stop offset="0.994" stop-color="#AD781F"/>\n                <stop offset="1" stop-color="#AA731A"/>\n            </linearGradient>\n            <linearGradient id="card-bg-gradient-grey" x1="90" y1="0" x2="90" y2="250" gradientUnits="userSpaceOnUse">\n                <stop stop-color="white"/>\n                <stop offset="1" stop-color="#C8C8C8"/>\n            </linearGradient>\n            <linearGradient id="card-bg-pale-gold" x1="0" y1="70" x2="190" y2="20" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#CFA032"></stop>\n                <stop offset="0.253" stop-color="#FFED6C"></stop>\n                <stop offset="0.585" stop-color="#CFA032"></stop>\n                <stop offset="0.798" stop-color="#FEEC6C"></stop>\n                <stop offset="1" stop-color="#CFA031"></stop>\n            </linearGradient>\n            <linearGradient id="card-border-metal-gold" x1="0" y1="125" x2="180" y2="125" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#CFA032"/>\n                <stop offset="0.253" stop-color="#FFED6C"/>\n                <stop offset="0.585" stop-color="#CFA032"/>\n                <stop offset="0.798" stop-color="#FEEC6C"/>\n                <stop offset="1" stop-color="#CFA031"/>\n            </linearGradient>\n            <linearGradient id="card-border-gold-gradient" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#DAC7A8"/>\n                <stop offset="1" stop-color="#795E3D"/>\n            </linearGradient>\n            <linearGradient id="card-border-red-gradient" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">\n                <stop stop-color="#DAA8A8"/>\n                <stop offset="1" stop-color="#793D3D"/>\n            </linearGradient>\n            <linearGradient id="card-border-default" x1="90" y1="250" x2="90" gradientUnits="userSpaceOnUse">\n                <stop offset="0" stop-color="#fff" />\n                <stop offset="1" stop-color="#bfbfbf" />\n            </linearGradient>\n            <linearGradient id="card-border-dark" x1="90" y1="250" x2="90" gradientUnits="userSpaceOnUse">\n                <stop offset="0" stop-color="#dac7a8" />\n                <stop offset="1" stop-color="#7a5f3e" />\n            </linearGradient>\n            <symbol id="card-background" viewBox="0 0 180 250">\n                <path d="M180 233.037c-.039 9.406-7.694 17-17.1 16.963H17.1c-9.406.037-17.06-7.557-17.1-16.963V16.963C.04 7.557 7.694-.037 17.1 0h145.8c9.406-.037 17.061 7.557 17.1 16.963v216.074z" />\n            </symbol>\n            <symbol id="card-border" viewBox="0 0 180 250">\n                <path d="M162.9 1c8.85-.027 16.052 7.114 16.1 15.963v216.074c-.048 8.85-7.25 15.99-16.1 15.963H17.1c-8.85.027-16.051-7.113-16.1-15.963V16.963C1.049 8.114 8.25.973 17.1 1h145.8m0-1H17.1C7.694-.036.04 7.558 0 16.963v216.074c.04 9.406 7.694 17 17.1 16.963h145.8c9.406.037 17.061-7.557 17.1-16.963V16.963c-.039-9.406-7.694-17-17.1-16.963z" />\n            </symbol>\n            <symbol id="card-border-thick" viewBox="0 0 180 250">\n                <path d="M 159.953 8.777 L 20.439 8.777 C 17.011 8.601 14.507 9.7 12.363 12.083 C 9.98 14.245 8.738 16.84 8.879 20.313 L 8.544 229.657 C 8.395 233.133 9.5 235.628 11.868 237.78 C 14.014 240.166 16.567 241.389 19.987 241.21 L 159.566 241.209 C 162.979 241.39 165.472 240.256 167.67 237.874 C 170.047 235.666 171.274 233.136 171.127 229.677 L 171.464 20.329 C 171.611 16.852 170.509 14.358 168.139 12.208 C 165.991 9.822 163.436 8.597 160.019 8.776 Z M 180.162 20.345 L 180 120.693 L 180 233.037 C 179.961 242.443 172.306 250.037 162.9 250 L 17.1 250 C 7.694 250.037 0.04 242.443 0 233.037 L 0 231.613 C -0.081 230.95 -0.133 230.291 -0.156 229.641 L 0 132.723 L 0 16.963 C 0.04 7.558 7.694 -0.036 17.1 0 L 162.9 0 C 172.306 -0.037 179.961 7.557 180 16.963 L 180 18.317 C 180.085 19 180.139 19.678 180.162 20.345 Z" />\n            </symbol>\n            <symbol id="suit-C" viewBox="0 0 68 86" preserveAspectRatio="xMinYMax">\n                <path d="M49.82 33.72a15 15 0 00-3.58.43 15.56 15.56 0 00-3.13 1.14 14.68 14.68 0 004.58-6.21 14.38 14.38 0 001-5.22 14.82 14.82 0 00-15-14.69c-8.181-.067-14.869 6.509-14.94 14.69a14.38 14.38 0 001 5.22 14.68 14.68 0 004.58 6.21 16 16 0 00-3.13-1.14 15.12 15.12 0 00-3.58-.43c-7.711-.112-14.192 5.765-14.833 13.45-.64 7.686 4.78 14.555 12.403 15.72a15.81 15.81 0 003.4.38 14.58 14.58 0 0013.07-7.81c.21-.4.41-.81.58-1.23-.08.46-.15.9-.22 1.33a43.41 43.41 0 01-1.48 7.8c-.12.39-.24.78-.38 1.2-2.56 7.32-7.81 9.65-7.81 9.65v2.41h22.68v-2.41s-5.25-2.33-7.81-9.65c-.25-.73-.45-1.38-.62-2a48.63 48.63 0 01-1.24-7c-.07-.44-.14-.88-.22-1.34a14.62 14.62 0 0013.68 9.04 15.89 15.89 0 003.4-.38c7.623-1.165 13.043-8.034 12.403-15.72-.64-7.685-7.122-13.562-14.833-13.45l.03.01z" />\n            </symbol>\n            <symbol id="suit-D" viewBox="0 0 68 86" preserveAspectRatio="xMinYMax">\n                <path d="M33.73 7.46L7.24 42.9l26.49 35.43 26.5-35.43z" />\n            </symbol>\n            <symbol id="suit-H" viewBox="0 0 68 86" preserveAspectRatio="xMinYMax">\n                <path d="M48.4 11.17c-6.33 0-11.82 6.14-14.6 12.15-2.79-6-8.27-12.15-14.6-12.15-9.14 0-15.56 7-15.56 17.47a21.05 21.05 0 003.71 11.91 43.94 43.94 0 003.47 5.2l23 28.88 23-28.88a44.88 44.88 0 003.48-5.2A21 21 0 0064 28.64c0-10.5-6.45-17.47-15.6-17.47z" />\n            </symbol>\n            <symbol id="suit-S" viewBox="0 0 68 86" preserveAspectRatio="xMinYMax">\n                <path d="M50.9 26.45C41.92 16.33 33.73 8 33.73 8s-8.18 8.33-17.16 18.45C10.01 33.85 3.7 39.88 3.69 48.81c-.004.558.023 1.115.08 1.67.8 8.13 7.6 12.24 15.87 12.25h1.12c5-.34 8.85-3.1 11.53-7.29-.58 3.06-.53 5.33-1.71 9.14-.11.38-.23.77-.38 1.19-2.55 7.32-7.81 9.66-7.81 9.66v2.37h22.68v-2.41s-5.25-2.34-7.8-9.66c-.26-.72-.45-1.38-.63-2-.93-3.33-.93-5.48-1.46-8.32 2.67 4.19 6.52 6.95 11.53 7.29h1.11c8.28 0 15.08-4.12 15.88-12.25.05-.54.08-1.1.08-1.67-.02-8.9-6.32-14.93-12.88-22.33z" />\n            </symbol>\n            <symbol id="rank-2" viewBox="0 0 59 86" preserveAspectRatio="xMinYMax">\n                <path d="M43.79 69.24H26.54l12.31-13.32a119.72 119.72 0 0013-16.39 24.3 24.3 0 004-13.64c0-7.35-2.13-13.19-7-17.62-4.87-4.43-11.58-6.64-20-6.64S13.43 4.23 8.37 9.37A25 25 0 001 28.28v.15l.05.14.11.33.23.68h17.2v-1c0-3.9.9-7 2.66-9.34 1.76-2.34 4.2-3.34 7.58-3.34a8.47 8.47 0 016.89 2.83 11.33 11.33 0 012.47 7.56A16.53 16.53 0 0136 34a61.57 61.57 0 01-7.8 10.56L2.54 71.36l-.27.28v12.53h56.2V69.24H43.79z" />\n            </symbol>\n            <symbol id="rank-3" viewBox="0 0 60 86" preserveAspectRatio="xMinYMax">\n                <path d="M57.25 47.7a16.55 16.55 0 00-5.55-6.42 21.28 21.28 0 00-6.36-2.65A22.49 22.49 0 0053 31.32 17.52 17.52 0 0055.57 22a19.05 19.05 0 00-6.26-14.57C45.103 3.57 38.333 1.637 29 1.63c-8.153 0-14.453 1.77-18.9 5.31-4.45 3.54-7.9 9.48-8.53 17.9l17.32-.11.15-.85c.49-2.51 1.15-4.65 2.65-6.25a8.53 8.53 0 016.53-2.69 11.17 11.17 0 016.87 2.58c.16.14.33.27.48.41a10.34 10.34 0 012.69 6.83 10.5 10.5 0 01-3 7.48 9.81 9.81 0 01-7.45 3.15 19.06 19.06 0 01-2.5-.24l-.07 10.53a17.12 17.12 0 014.35 0c3.45.49 6.33 1 8.25 3.31s2.88 5.46 2.88 9.58-1 5.35-3 7.77a6.84 6.84 0 01-3 2 18.76 18.76 0 01-5.66.91c-4.37.18-6.55-2-8.37-3.91-1.41-1.51-2.3-3.89-2.31-9.39L0 55.61c.73 11.45 2.95 15.46 5.38 18.73 2.43 3.27 5.75 5.17 9.51 6.86a36.36 36.36 0 0015.22 3 33.87 33.87 0 0016.4-3.85A23.12 23.12 0 0056 70.51a28.68 28.68 0 003.27-13.3 21.08 21.08 0 00-2.02-9.51z" />\n            </symbol>\n            <symbol id="rank-4" viewBox="0 0 61 86" preserveAspectRatio="xMinYMax">\n                <path d="M51.35 48.61V34.26H35l-1.29 14.35H20.22L50.23 2.17H31.24L.03 49.7v13.24h33.43v20.68h17.89V62.94h8.93V48.61z" />\n            </symbol>\n            <symbol id="rank-5" viewBox="0 0 57 86" preserveAspectRatio="xMinYMax">\n                <path d="M48.76 36.33c-4.2-4.75-10.15-7.15-17.68-7.15h-.52a22.82 22.82 0 00-7.07 1.15c-.53.18-1 .38-1.51.59V16.33h31.18V2.17H5.49v41.85h13l.33-.12c1.4-.29 1.4-.45 3.23-.87 2.85-.38 6.4-1 10.83 1.07a9.55 9.55 0 013 2c2.89 3 3.08 7.05 3.15 9.4a18.32 18.32 0 01-.95 6.33 10.74 10.74 0 01-2.52 4.53 9.48 9.48 0 01-2.35 1.72 11.65 11.65 0 01-5.4 1.51A11.25 11.25 0 0123.9 69a9 9 0 01-1.46-.72A8.32 8.32 0 0120.79 67a10.23 10.23 0 01-3.34-7.4v-1h-.46l-14.9.75-1 .05L1 60.54A20.66 20.66 0 003.8 72a19.71 19.71 0 005 5.54 28.81 28.81 0 003.61 2.33c6.95 3.83 15.41 3.75 15.41 3.75 26.61.22 28.4-21.64 28.48-28.08a26.07 26.07 0 00-7.54-19.21z" />\n            </symbol>\n            <symbol id="rank-6" viewBox="0 0 59 86" preserveAspectRatio="xMinYMax">\n                <path d="M32.11 28.53H32L50.1 2.22H29.57l-25 37.94A28.46 28.46 0 000 56c0 16.26 12 27.62 29.07 27.62S58.16 72.29 58.16 56c0-15.19-10.47-26.24-26.05-27.47zM41.77 56c0 8.08-6.38 12.31-12.69 12.31-7.47.03-12.68-5.03-12.68-12.31s5.21-12.31 12.68-12.31C35.39 43.72 41.77 48 41.77 56z" />\n            </symbol>\n            <symbol id="rank-7" viewBox="0 0 55 86" preserveAspectRatio="xMinYMax">\n                <path d="M.01 2.19v14.17h38.04L8.53 83.65h18.36l28.03-66.98.16-.38V2.19z" />\n            </symbol>\n            <symbol id="rank-8" viewBox="0 0 56 86" preserveAspectRatio="xMinYMax">\n                <path d="M42.26 39.88C49 35.67 52.71 29.44 52.71 22.17c0-9.88-7.4-20.52-23.63-20.52H29c-14.67 0-25.32 9.29-25.32 22.08 0 7.07 3.76 13.33 10.38 17.39C5.5 45.82 1 53 1 61.82c0 10.74 8.41 22.31 26.87 22.31 16.17 0 27.47-9.86 27.47-24 .01-8.64-4.74-15.94-13.08-20.25zM28.39 72.56h-.12a10.47 10.47 0 01-7.69-3.09 12.35 12.35 0 01-3.32-8.89c0-6.12 3.52-10.93 9.67-13.27 8.3 3 12.34 7.58 12.34 14.13 0 6.55-4.37 11.12-10.88 11.12zm1.27-38.07c-7.13-2.52-10.6-6.33-10.6-11.66 0-4.46 2.4-9.66 9.17-9.66h.12c8.39 0 9 7.77 9 10.15a12.35 12.35 0 01-7.69 11.17z" />\n            </symbol>\n            <symbol id="rank-9" viewBox="0 0 60 86" preserveAspectRatio="xMinYMax">\n                <path d="M27.33 57.52h.12L9.09 84.22H29.9l25.34-38.49a28.88 28.88 0 004.65-16.11c0-16.49-12.13-28-29.49-28S.9 13.14.9 29.62c0 15.44 10.62 26.65 26.43 27.9zm-9.8-27.9c0-8.2 6.47-12.49 12.87-12.49 7.57 0 12.87 5.14 12.87 12.49 0 7.35-5.27 12.49-12.87 12.49-6.4 0-12.87-4.29-12.87-12.49z" />\n            </symbol>\n            <symbol id="rank-10" viewBox="0 0 95 86" preserveAspectRatio="xMinYMax">\n                <path d="M65.19 1.55A30.85 30.85 0 0176.41 3.4a23.58 23.58 0 018 5.14A25.18 25.18 0 0189.6 16a41.47 41.47 0 012.85 8.7 60.54 60.54 0 011.24 9.22 143.599 143.599 0 010 17.92 61.22 61.22 0 01-1.24 9.22 42.78 42.78 0 01-2.81 8.68 24.38 24.38 0 01-5.16 7.45 23.67 23.67 0 01-8.08 5.1 31 31 0 01-11.24 1.85 31.24 31.24 0 01-11.31-1.85 23.3 23.3 0 01-13.18-12.54 43.75 43.75 0 01-2.81-8.67 62.89 62.89 0 01-1.24-9.26c-.18-3.08-.28-6.11-.28-9 0-2.89.1-5.92.28-9a62.75 62.75 0 011.24-9.25 40.82 40.82 0 012.86-8.67 25 25 0 015.19-7.4 24 24 0 018-5.1 31 31 0 0111.28-1.85zM33.18 2.62v80.5H16.09V20.35l-5.5 4.54L.57 14.12l15.39-11.5h17.22zm33.032 11.902l-.352.008a8.87 8.87 0 00-5.07 1.34 11.36 11.36 0 00-3.42 3.73 20 20 0 00-2.1 5.59 49 49 0 00-1 6.67c-.18 2.25-.27 4.47-.27 6.61v10.89a60.45 60.45 0 00.29 6.21 50.55 50.55 0 001.07 6.36 18.15 18.15 0 002.08 5.29 10.63 10.63 0 003.37 3.55 9 9 0 005 1.27 8.76 8.76 0 005-1.31 10.69 10.69 0 003.34-3.68 21.7 21.7 0 002.11-5.54 51.75 51.75 0 001.1-6.53c.22-2.2.33-4.37.33-6.37V37.92l-.02-.02c0-2.02-.11-4.16-.33-6.36a53.14 53.14 0 00-1.1-6.54 20.65 20.65 0 00-2.04-5.5 10.9 10.9 0 00-3.34-3.66 8.76 8.76 0 00-5-1.31z" />\n            </symbol>\n            <symbol id="rank-J" viewBox="0 0 57 86" preserveAspectRatio="xMinYMax">\n                <path d="M25.47 2.17h-1v11.28l.79.17 6.63 1.44v43.83c.06 5.38-.41 10.64-6.76 10.75h-.22c-6.56 0-7.47-5.21-7.47-10.85v-1H1.28l-.13.86c-.06.44-1.51 11 6.07 18.77 4.41 4.52 9.51 6.28 18.18 6.28 7 0 11.86-1.6 16.64-5.52 6.54-5.34 7.51-14.91 7.51-20.14v-43l6.63-1.44.78-.17V2.17H25.47z" />\n            </symbol>\n            <symbol id="rank-Q" viewBox="0 0 76 86" preserveAspectRatio="xMinYMax">\n                <path d="M69.49 71.24a11.84 11.84 0 01-7.78-3.1 38.59 38.59 0 004-7.14 47.21 47.21 0 003.58-18.61v-1.18c0-11.333-3.197-20.767-9.59-28.3C53.307 5.377 44.94 1.623 34.6 1.65c-10.273 0-18.56 3.753-24.86 11.26C3.44 20.417.29 29.85.29 41.21v1.18c0 11.44 3.16 20.893 9.48 28.36C16.09 78.217 24.387 81.967 34.66 82a31.6 31.6 0 004.1-.27 20.82 20.82 0 004.1-.7 28.9 28.9 0 009.67-3.73c4.4 3.91 9.93 6.89 16.92 6.89H76V71.24h-6.51zm-34.85-1.45c-6.233 0-10.9-2.51-14-7.53A29.61 29.61 0 0117 52.72h4.43c7.71.18 13.72 1.14 20.7 11.65.59.9 1.24 1.87 1.94 2.88a16.82 16.82 0 01-9.43 2.54zm19-27.4a44.76 44.76 0 01-1.8 13.34C41.7 41.47 30.93 40 21.59 39.82H16c.16-7.55 1.68-13.71 4.59-18.44 3.087-5.007 7.753-7.51 14-7.51s10.983 2.52 14.21 7.56c3.2 5.047 4.8 11.607 4.8 19.68l.04 1.28z" />\n            </symbol>\n            <symbol id="rank-K" viewBox="0 0 78 86" preserveAspectRatio="xMinYMax">\n                <path d="M68.77 70.78L47.5 40.35l18.86-25.18 7.24-1.4.82-.16V2.16h-31.5v11.47l.83.14 2.14.38-14.08 20.48h-5.39V15.22l6.29-1.46.79-.18V2.16H1v11.43l.79.18 6.67 1.46v55.39L1.8 72.08l-.79.18v11.37H33.5V72.27l-.79-.18-6.29-1.46V50.46h7.34l14.12 21.22-2.37.39-.85.15v11.41h32.51V72.22l-.84-.14z" />\n            </symbol>\n            <symbol id="rank-A" viewBox="0 0 76 86" preserveAspectRatio="xMinYMax">\n                <path d="M75 72.1l-4-.72L47.13 2.87l-.23-.68H29.15l-.24.68-24 68.51-4.09.72-.84.14v11.41h27.11V72.28l-.79-.17-3.43-.75 2.93-9.15h24.28L53 71.36l-3.43.75-.79.17v11.37h27.09V72.24L75 72.1zM30.59 50.19L38.32 26 46 50.19H30.59z" />\n            </symbol>\n            <symbol id="back-of-card_small" viewBox="0 0 180 250">\n                <path fill="#e6e6e6" d="M180,233.037A17.033,17.033,0,0,1,162.9,250H17.1A17.033,17.033,0,0,1,0,233.037V16.963A17.034,17.034,0,0,1,17.1,0H162.9A17.034,17.034,0,0,1,180,16.963V233.037Z" />\n                <rect fill="#999" x="15" y="15" width="150" height="220" />\n                <ellipse fill="#e6e6e6" cx="90" cy="125" rx="52.768" ry="52.336" />\n                <path fill="#999" d="M65.173,93.226c21.983-11.643,50.373.637,52.507,30.273C76.91,126.676,72,108.47,65.173,93.226Z" />\n                <path fill="#999" d="M65.173,156.772c21.983,11.645,50.373-.634,52.507-30.272C76.91,123.327,72,141.532,65.173,156.772Z" />\n            </symbol>\n            <symbol id="back-of-card_default" viewBox="0 0 180 250">\n                <path fill="#e6e6e6" d="M180,233.037A17.033,17.033,0,0,1,162.9,250H17.1A17.033,17.033,0,0,1,0,233.037V16.963A17.034,17.034,0,0,1,17.1,0H162.9A17.034,17.034,0,0,1,180,16.963V233.037Z" />\n                <path fill="url(${t}#card-border-light)" d="M162.9,1A16.051,16.051,0,0,1,179,16.963V233.037A16.051,16.051,0,0,1,162.9,249H17.1A16.052,16.052,0,0,1,1,233.037V16.963A16.052,16.052,0,0,1,17.1,1H162.9m0-1H17.1A17.034,17.034,0,0,0,0,16.963V233.037A17.034,17.034,0,0,0,17.1,250H162.9A17.033,17.033,0,0,0,180,233.037V16.963A17.033,17.033,0,0,0,162.9,0h0Z" />\n                <rect fill="#999" x="15" y="15" width="150" height="220" />\n                <ellipse fill="#e6e6e6" cx="90" cy="125" rx="52.768" ry="52.336" />\n                <path fill="#999" d="M65.173,93.226c21.983-11.643,50.373.637,52.507,30.273C76.91,126.676,72,108.47,65.173,93.226Z" />\n                <path fill="#999" d="M65.173,156.772c21.983,11.645,50.373-.634,52.507-30.272C76.91,123.327,72,141.532,65.173,156.772Z" />\n            </symbol>\n        </defs>\n    </svg>\n`;
            s.displayName = "SvgSprite";
            const n = "SVG-Cards-Sprite";
            function o(t = window) {
                let e = t.document.getElementById(n);
                if (!e) {
                    e = t.document.createElement("div"),
                        e.setAttribute("id", n),
                        e.setAttribute("data-sandbox", "ignore");
                    const i = "about:blank" === t.location.href ? "about:blank" : "";
                    e.innerHTML = s(i),
                        t.document.body.appendChild(e)
                }
            }
        }
        ,
        87679: (t, e, i) => {
            i.d(e, {
                Z: () => s
            });
            const s = function (t, e, i, s) {
                var n = -1
                    , o = null == t ? 0 : t.length;
                for (s && o && (i = t[++n]); ++n < o;)
                    i = e(i, t[n], n, t);
                return i
            }
        }
        ,
        826026: (t, e, i) => {
            i.d(e, {
                Z: () => s
            });
            const s = function (t, e, i, s, n) {
                return n(t, (function (t, n, o) {
                    i = s ? (s = !1,
                        t) : e(i, t, n, o)
                }
                )),
                    i
            }
        }
        ,
        178011: (t, e, i) => {
            i.d(e, {
                Z: () => r
            });
            var s = Object.prototype.hasOwnProperty;
            const n = function (t, e) {
                return null != t && s.call(t, e)
            };
            var o = i(898874);
            const r = function (t, e) {
                return null != t && o.Z(t, e, n)
            }
        }
        ,
        140252: (t, e, i) => {
            i.d(e, {
                Z: () => s
            });
            const s = function (t) {
                return t && t.length ? t[0] : void 0
            }
        }
        ,
        859002: (t, e, i) => {
            i.d(e, {
                Z: () => o
            });
            var s = i(948460)
                , n = i(325197);
            const o = function (t) {
                return "number" == typeof t || n.Z(t) && "[object Number]" == s.Z(t)
            }
        }
        ,
        194231: (t, e, i) => {
            i.d(e, {
                Z: () => c
            });
            var s = i(87679)
                , n = i(794830)
                , o = i(981257)
                , r = i(826026)
                , a = i(792170);
            const c = function (t, e, i) {
                var c = a.Z(t) ? s.Z : r.Z
                    , l = arguments.length < 3;
                return c(t, o.Z(e, 4), i, l, n.Z)
            }
        }
        ,
        125514: (t, e, i) => {
            i.d(e, {
                Z: () => n
            });
            var s = i(489395);
            const n = function (t, e, i) {
                return null == t ? t : s.Z(t, e, i)
            }
        }
    }, c = {};
    function l(t) {
        var e = c[t];
        if (void 0 !== e)
            return e.exports;
        var i = c[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return a[t].call(i.exports, i, i.exports, l),
            i.loaded = !0,
            i.exports
    }
    l.m = a,
        t = [],
        l.O = (e, i, s, n) => {
            if (!i) {
                var o = 1 / 0;
                for (h = 0; h < t.length; h++) {
                    for (var [i, s, n] = t[h], r = !0, a = 0; a < i.length; a++)
                        (!1 & n || o >= n) && Object.keys(l.O).every((t => l.O[t](i[a]))) ? i.splice(a--, 1) : (r = !1,
                            n < o && (o = n));
                    if (r) {
                        t.splice(h--, 1);
                        var c = s();
                        void 0 !== c && (e = c)
                    }
                }
                return e
            }
            n = n || 0;
            for (var h = t.length; h > 0 && t[h - 1][2] > n; h--)
                t[h] = t[h - 1];
            t[h] = [i, s, n]
        }
        ,
        l.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return l.d(e, {
                a: e
            }),
                e
        }
        ,
        i = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__,
        l.t = function (t, s) {
            if (1 & s && (t = this(t)),
                8 & s)
                return t;
            if ("object" == typeof t && t) {
                if (4 & s && t.__esModule)
                    return t;
                if (16 & s && "function" == typeof t.then)
                    return t
            }
            var n = Object.create(null);
            l.r(n);
            var o = {};
            e = e || [null, i({}), i([]), i(i)];
            for (var r = 2 & s && t; "object" == typeof r && !~e.indexOf(r); r = i(r))
                Object.getOwnPropertyNames(r).forEach((e => o[e] = () => t[e]));
            return o.default = () => t,
                l.d(n, o),
                n
        }
        ,
        l.d = (t, e) => {
            for (var i in e)
                l.o(e, i) && !l.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }
        ,
        l.f = {},
        l.e = t => Promise.all(Object.keys(l.f).reduce(((e, i) => (l.f[i](t, e),
            e)), [])),
        l.u = t => "js/" + ({
            575: "native-utilities",
            6285: "evo-promotions.giftsWheel",
            8656: "evo-promotions.spinGifts",
            10020: "evo-game.mobileChat",
            10861: "gameTestToolsSafeAreaPlugin",
            28335: "help.common",
            32406: "help.fantan",
            43384: "evo-game.chat",
            43844: "evo-promotions.cashGifts",
            65116: "history.roundView",
            71543: "testTools",
            76985: "testTools.why-did-you-render",
            82451: "gameTestToolsPlugins",
            99830: "video-lib-local"
        }[t] || t) + "." + {
            575: "7c1d3201",
            6285: "cf17b18a",
            8656: "7da624b8",
            10020: "89da69f9",
            10861: "8c398693",
            28335: "303dcb83",
            32406: "b2ba783b",
            43384: "c43a6425",
            43844: "dbec49e6",
            65116: "4394535f",
            71543: "4e63b8ff",
            76985: "d16ce4e0",
            81568: "088c2a7d",
            82451: "0b171b9e",
            99830: "dd7c7e3a"
        }[t] + ".js",
        l.miniCssF = t => 71543 === t ? "styles/testtools.4e63b8ff.css" : 28335 === t ? "styles/help.common.303dcb83.css" : 65116 === t ? "styles/history.roundview.4394535f.css" : 82451 === t ? "styles/gametestto.0b171b9e.css" : 43844 === t ? "styles/evopromoti.cashgifts.dbec49e6.css" : 8656 === t ? "styles/evopromoti.spingifts.7da624b8.css" : 43384 === t ? "styles/evogame.chat.c43a6425.css" : 32406 === t ? "styles/help.fantan.b2ba783b.css" : 10861 === t ? "styles/gametestto.8c398693.css" : 6285 === t ? "styles/evopromoti.giftswheel.cf17b18a.css" : void 0,
        l.hmd = t => ((t = Object.create(t)).children || (t.children = []),
            Object.defineProperty(t, "exports", {
                enumerable: !0,
                set: () => {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
                }
            }),
            t),
        l.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        s = {},
        n = "/frontend/evo/r2/:",
        l.l = (t, e, i, o) => {
            if (s[t])
                s[t].push(e);
            else {
                var r, a;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), h = 0; h < c.length; h++) {
                        var u = c[h];
                        if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == n + i) {
                            r = u;
                            break
                        }
                    }
                r || (a = !0,
                    (r = document.createElement("script")).charset = "utf-8",
                    r.timeout = NaN,
                    l.nc && r.setAttribute("nonce", l.nc),
                    r.setAttribute("data-webpack", n + i),
                    r.src = t),
                    s[t] = [e];
                var d = (e, i) => {
                    r.onerror = r.onload = null,
                        clearTimeout(p);
                    var n = s[t];
                    if (delete s[t],
                        r.parentNode && r.parentNode.removeChild(r),
                        n && n.forEach((t => t(i))),
                        e)
                        return e(i)
                }
                    , p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: r
                    }), window.EVO_CDN ? 15e3 : 6e4);
                r.onerror = d.bind(null, r.onerror),
                    r.onload = d.bind(null, r.onload),
                    a && document.head.appendChild(r)
            }
        }
        ,
        l.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        l.nmd = t => (t.paths = [],
            t.children || (t.children = []),
            t),
        l.j = 70236,
        l.p = (globalThis.EVO_CDN || "") + "/frontend/evo/r2/",
        o = t => new Promise(((e, i) => {
            var s = l.miniCssF(t)
                , n = l.p + s;
            if (((t, e) => {
                for (var i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                    var n = (r = i[s]).getAttribute("data-href") || r.getAttribute("href");
                    if ("stylesheet" === r.rel && (n === t || n === e))
                        return r
                }
                var o = document.getElementsByTagName("style");
                for (s = 0; s < o.length; s++) {
                    var r;
                    if ((n = (r = o[s]).getAttribute("data-href")) === t || n === e)
                        return r
                }
            }
            )(s, n))
                return e();
            ((t, e, i, s) => {
                var n = document.createElement("link");
                n.setAttribute("data-sandbox", "ignore"),
                    n.rel = "stylesheet",
                    n.type = "text/css",
                    n.onerror = n.onload = o => {
                        if (n.onerror = n.onload = null,
                            "load" === o.type)
                            i();
                        else {
                            var r = o && ("load" === o.type ? "missing" : o.type)
                                , a = o && o.target && o.target.href || e
                                , c = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                            c.code = "CSS_CHUNK_LOAD_FAILED",
                                c.type = r,
                                c.request = a,
                                n.parentNode.removeChild(n),
                                s(c)
                        }
                    }
                    ,
                    n.href = e,
                    document.head.appendChild(n)
            }
            )(t, n, e, i)
        }
        )),
        r = {
            70236: 0
        },
        l.f.miniCss = (t, e) => {
            r[t] ? e.push(r[t]) : 0 !== r[t] && {
                6285: 1,
                8656: 1,
                10861: 1,
                28335: 1,
                32406: 1,
                43384: 1,
                43844: 1,
                65116: 1,
                71543: 1,
                82451: 1
            }[t] && e.push(r[t] = o(t).then((() => {
                r[t] = 0
            }
            ), (e => {
                throw delete r[t],
                e
            }
            )))
        }
        ,
        (() => {
            var t = {
                70236: 0
            };
            l.f.j = (e, i) => {
                var s = l.o(t, e) ? t[e] : void 0;
                if (0 !== s)
                    if (s)
                        i.push(s[2]);
                    else {
                        var n = new Promise(((i, n) => s = t[e] = [i, n]));
                        i.push(s[2] = n);
                        var o = l.p + l.u(e)
                            , r = new Error;
                        l.l(o, (i => {
                            if (l.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0),
                                s)) {
                                var n = i && ("load" === i.type ? "missing" : i.type)
                                    , o = i && i.target && i.target.src;
                                r.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")",
                                    r.name = "ChunkLoadError",
                                    r.type = n,
                                    r.request = o,
                                    s[1](r)
                            }
                        }
                        ), "chunk-" + e, e)
                    }
            }
                ,
                l.O.j = e => 0 === t[e];
            var e = (e, i) => {
                var s, n, [o, r, a] = i, c = 0;
                if (o.some((e => 0 !== t[e]))) {
                    for (s in r)
                        l.o(r, s) && (l.m[s] = r[s]);
                    if (a)
                        var h = a(l)
                }
                for (e && e(i); c < o.length; c++)
                    n = o[c],
                        l.o(t, n) && t[n] && t[n][0](),
                        t[n] = 0;
                return l.O(h)
            }
                , i = self.webpackChunk_frontend_evo_r2_ = self.webpackChunk_frontend_evo_r2_ || [];
            i.forEach(e.bind(null, 0)),
                i.push = e.bind(null, i.push.bind(i))
        }
        )(),
        l.O(void 0, [58555, 8233], (() => l(510257))),
        l.O(void 0, [58555, 8233], (() => l(505817)));
    var h = l.O(void 0, [58555, 8233], (() => l(738503)));
    h = l.O(h)
}
)();
//# sourceMappingURL=https://sourcemaps.egcdn.com/frontend/evo/r2/js/fantan.0438d09a.js.map
