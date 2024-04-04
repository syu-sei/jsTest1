/* version: 13.52.2_13.20240327.131108_efde613f */
defineEvoVideo("videojs", [], (() => (() => {
    var e = {
        5351: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.lastValueFrom = void 0;
            var s = i(4015);
            Object.defineProperty(t, "lastValueFrom", {
                enumerable: !0,
                get: function () {
                    return s.lastValueFrom
                }
            })
        }
        ,
        4015: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.lastValueFrom = void 0,
                t.lastValueFrom = function (e) {
                    let t;
                    return new Promise(((i, s) => {
                        e.subscribe((e => {
                            t = e
                        }
                        ), (e => s(e)), (() => {
                            if (!t)
                                throw new Error("Observable never emitted value");
                            i(t)
                        }
                        ))
                    }
                    ))
                }
        }
        ,
        8817: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.combineLatest = void 0;
            const s = i(8374);
            t.combineLatest = function (e, t) {
                return (0,
                    s.scopedObservable)(((i, r) => {
                        const n = new s.Subject
                            , a = [];
                        n.subscribe((([i, s]) => {
                            a[i] = s;
                            const n = a.filter((() => !0));
                            if (n.length < e.length)
                                return;
                            const o = t(n);
                            r.onNext(o)
                        }
                        )).closeBy(i),
                            e.forEach(((e, t) => {
                                e.subscribe((e => n.next([t, e])), r.onError, r.onComplete).closeBy(i)
                            }
                            ))
                    }
                    ))
            }
        }
        ,
        8759: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.concat = void 0;
            const s = i(8374);
            t.concat = function (...e) {
                return new s.Observable((t => {
                    let i;
                    return function e(s) {
                        const r = s.shift();
                        r ? i = r.subscribe((e => t.onNext(e)), (e => t.onError(e)), (() => e(s))) : t.onComplete()
                    }(e),
                        (0,
                            s.closable)((() => null == i ? void 0 : i.close()))
                }
                ))
            }
        }
        ,
        8263: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.error = void 0;
            const s = i(8374);
            t.error = function (e) {
                return new s.Observable((t => {
                    const i = "string" == typeof e ? new Error(e) : e;
                    return t.onError(i),
                        t.onComplete(),
                        (0,
                            s.closable)()
                }
                ))
            }
        }
        ,
        7003: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.fromArray = void 0;
            const s = i(8374);
            t.fromArray = function (e) {
                return new s.Observable((t => {
                    for (const i of e)
                        t.onNext(i);
                    return t.onComplete(),
                        (0,
                            s.closable)()
                }
                ))
            }
        }
        ,
        9036: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.fromEvent = void 0;
            const s = i(8374);
            t.fromEvent = function (e, t) {
                return new s.Observable((i => {
                    function r(e) {
                        i.onNext(e)
                    }
                    return e.addEventListener(t, r),
                        (0,
                            s.closable)((() => e.removeEventListener(t, r)))
                }
                ))
            }
        }
        ,
        7212: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.fromPromise = void 0;
            const s = i(8374);
            t.fromPromise = function (e) {
                return new s.Observable((t => {
                    let i = !1;
                    return e.then((e => {
                        i || (i = !0,
                            t.onNext(e),
                            t.onComplete())
                    }
                    )).catch((e => {
                        i || (i = !0,
                            t.onError(e),
                            t.onComplete())
                    }
                    )),
                        (0,
                            s.closable)((() => {
                                i = !0
                            }
                            ))
                }
                ))
            }
        }
        ,
        5571: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.fromRange = void 0;
            const s = i(8374);
            t.fromRange = function (e, t, i = 1) {
                return new s.Observable((r => {
                    for (let s = e; s <= t; s += i)
                        r.onNext(s);
                    return r.onComplete(),
                        (0,
                            s.closable)()
                }
                ))
            }
        }
        ,
        8898: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.fromValue = void 0;
            const s = i(8374);
            t.fromValue = function (e) {
                return new s.Observable((t => (t.onNext(e),
                    t.onComplete(),
                    (0,
                        s.closable)())))
            }
        }
        ,
        1407: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(8263), t),
                r(i(8898), t),
                r(i(7003), t),
                r(i(9036), t),
                r(i(7212), t),
                r(i(5571), t),
                r(i(8817), t),
                r(i(7524), t),
                r(i(5517), t),
                r(i(9344), t),
                r(i(8759), t)
        },
        9344: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.merge = void 0;
            const s = i(8374);
            t.merge = function (...e) {
                return (0,
                    s.scopedObservable)(((t, i) => {
                        const s = new Map;
                        e.forEach(((e, t) => s.set(t))),
                            e.forEach(((e, r) => {
                                e.subscribe((e => i.onNext(e)), (e => {
                                    s.size > 0 || i.onError(e)
                                }
                                ), (() => {
                                    s.delete(r),
                                        s.size > 0 || i.onComplete()
                                }
                                )).closeBy(t)
                            }
                            ))
                    }
                    ))
            }
        }
        ,
        7524: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.withInterval = void 0;
            const s = i(8374);
            t.withInterval = function (e) {
                return new s.Observable((t => {
                    t.onNext();
                    const i = setInterval((() => t.onNext()), e);
                    return (0,
                        s.closable)((() => clearInterval(i)))
                }
                ))
            }
        }
        ,
        5517: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.zip = void 0;
            const s = i(8374);
            t.zip = function (e, t) {
                return (0,
                    s.scopedObservable)(((i, s) => {
                        const r = new Map
                            , n = [];
                        e.forEach(((e, t) => r.set(t))),
                            e.forEach(((a, o) => {
                                a.subscribe((i => {
                                    n[o] = i;
                                    const r = n.filter((() => !0));
                                    if (r.length < e.length)
                                        return;
                                    const a = n.splice(0, r.length)
                                        , l = t(a);
                                    s.onNext(l)
                                }
                                ), s.onError, (() => {
                                    r.delete(o),
                                        r.size > 0 || (n.splice(0, n.length),
                                            s.onComplete())
                                }
                                )).closeBy(i)
                            }
                            ))
                    }
                    ))
            }
        }
        ,
        482: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(1407), t),
                r(i(8374), t),
                r(i(4735), t),
                r(i(5351), t),
                r(i(646), t)
        },
        646: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        5371: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.BehaviorSubject = void 0;
            const s = i(3170)
                , r = i(4368);
            class n extends r.Subject {
                constructor(e) {
                    super(),
                        this.value = e
                }
                next(e) {
                    this.value = e,
                        super.next(e)
                }
                subscribe(e, t, i) {
                    const r = (0,
                        s.makeObserver)(e, t, i)
                        , n = super.connectAndSubscribe(r);
                    return r.onNext(this.value),
                        n
                }
            }
            t.BehaviorSubject = n
        }
        ,
        4701: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.closable = void 0,
                t.closable = function (e = (() => { }
                )) {
                    let t = !1;
                    return {
                        isClosed: () => t,
                        close() {
                            t || (t = !0,
                                e())
                        },
                        closeBy(e) {
                            e.add(this)
                        }
                    }
                }
        }
        ,
        3048: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Observable = void 0;
            const s = i(3170);
            t.Observable = class {
                constructor(e) {
                    this.observe = e
                }
                pipe(...e) {
                    return e.reduce(((e, t) => t(e)), this)
                }
                subscribe(e, t, i) {
                    return this.observe((0,
                        s.makeObserver)(e, t, i))
                }
            }
        }
        ,
        846: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        9961: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.ReplaySubject = void 0;
            const s = i(3170)
                , r = i(4368);
            class n extends r.Subject {
                constructor(e) {
                    super(),
                        this.size = e,
                        this.cache = []
                }
                next(e) {
                    this.cache.push(e),
                        this.cache.length > this.size && this.cache.shift(),
                        super.next(e)
                }
                subscribe(e, t, i) {
                    const r = (0,
                        s.makeObserver)(e, t, i)
                        , n = super.connectAndSubscribe(r);
                    return this.cache.forEach((e => r.onNext(e))),
                        n
                }
            }
            t.ReplaySubject = n
        }
        ,
        3513: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Scope = void 0,
                t.Scope = class {
                    constructor() {
                        this.disposables = []
                    }
                    add(e) {
                        this.disposables.push(e)
                    }
                    close() {
                        this.disposables.splice(0, this.disposables.length).reverse().filter((e => !e.isClosed())).forEach((e => e.close()))
                    }
                }
        }
        ,
        4368: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Subject = void 0;
            const s = i(4701)
                , r = i(3170)
                , n = i(3048);
            class a extends n.Observable {
                constructor() {
                    super((() => (0,
                        s.closable)())),
                        this.observers = []
                }
                next(e) {
                    this.subscription && this.onNext(e)
                }
                error(e) {
                    this.subscription && this.onError(e)
                }
                complete() {
                    this.subscription && (this.onComplete(),
                        this.disconnect())
                }
                onComplete() {
                    for (const e of this.observers.slice())
                        e.onComplete()
                }
                onError(e) {
                    for (const t of this.observers.slice())
                        t.onError(e)
                }
                onNext(e) {
                    for (const t of this.observers.slice())
                        t.onNext(e)
                }
                subscribe(e, t, i) {
                    return this.connectAndSubscribe((0,
                        r.makeObserver)(e, t, i))
                }
                connect() {
                    this.subscription = this.observe((0,
                        r.makeObserver)(this.next, this.error, this.complete))
                }
                disconnect() {
                    var e;
                    this.observers = [],
                        null === (e = this.subscription) || void 0 === e || e.close(),
                        this.subscription = void 0
                }
                connectAndSubscribe(e) {
                    return this.subscription || this.connect(),
                        this.observers.push(e),
                        (0,
                            s.closable)((() => {
                                const t = this.observers.indexOf(e);
                                -1 !== t && (this.observers.splice(t, 1),
                                    this.observers.length > 0 || this.disconnect())
                            }
                            ))
                }
            }
            t.Subject = a
        }
        ,
        8374: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(846), t),
                r(i(3048), t),
                r(i(4701), t),
                r(i(3513), t),
                r(i(4368), t),
                r(i(5371), t),
                r(i(9961), t),
                r(i(5806), t)
        },
        3170: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.makeObserver = void 0,
                t.makeObserver = function (e, t, i) {
                    let s = !1
                        , r = t => {
                            if (!s)
                                try {
                                    null == e || e(t)
                                } catch (i) {
                                    if (i instanceof Error)
                                        return void (null == n || n(i));
                                    throw new Error(`Invalid error thrown - ${i}`)
                                }
                        }
                        , n = e => {
                            s || (null == t || t(e),
                                null == a || a())
                        }
                        , a = () => {
                            s || (s = !0,
                                null == i || i())
                        }
                        ;
                    return {
                        onNext(e) {
                            null == r || r(e)
                        },
                        onError(e) {
                            null == n || n(e)
                        },
                        onComplete() {
                            null == a || a(),
                                r = void 0,
                                n = void 0,
                                a = void 0
                        }
                    }
                }
        }
        ,
        5806: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.scopedObservable = void 0;
            const s = i(4701)
                , r = i(3048)
                , n = i(3513);
            t.scopedObservable = function (e, t = new n.Scope) {
                return new r.Observable((i => {
                    function r() {
                        i.onComplete(),
                            t.close()
                    }
                    const n = {
                        onNext: i.onNext,
                        onError: function (e) {
                            i.onError(e),
                                r()
                        },
                        onComplete: r
                    };
                    return e(t, n),
                        (0,
                            s.closable)((() => t.close()))
                }
                ))
            }
        }
        ,
        1613: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.bufferCount = void 0;
            const s = i(8374);
            t.bufferCount = (e, t = e, i = !1) => r => new s.Observable((s => {
                let n = [];
                return r.subscribe((r => {
                    n.push(r),
                        n.length > e && (n = n.slice(t)),
                        (n.length === e || i) && s.onNext(n.slice())
                }
                ), s.onError, s.onComplete)
            }
            ))
        }
        ,
        9541: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.bufferUntil = void 0;
            const s = i(8374);
            t.bufferUntil = e => t => new s.Observable((i => {
                const s = [];
                return t.subscribe((t => {
                    e(t, s.slice()) || i.onNext(s.splice(0, s.length)),
                        s.push(t)
                }
                ), i.onError, i.onComplete)
            }
            ))
        }
        ,
        5824: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.concatMap = void 0;
            const s = i(8374)
                , r = i(3476);
            t.concatMap = e => t => new s.Observable((i => {
                const n = [];
                let a, o = !1, l = !1;
                function c() {
                    n.splice(0, n.length)
                }
                function u() {
                    null == a || a.close(),
                        a = void 0
                }
                function d(t) {
                    o = !0,
                        a = e(t).subscribe((e => i.onNext(e)), (e => {
                            c(),
                                i.onError(e)
                        }
                        ), (() => {
                            o = !1,
                                u();
                            const e = (0,
                                r.shift)(n);
                            e.isValid ? d(e.item) : l && i.onComplete()
                        }
                        ))
                }
                const A = t.subscribe((e => {
                    if (n.push(e),
                        !o) {
                        const e = (0,
                            r.shift)(n);
                        if (!e.isValid)
                            return;
                        d(e.item)
                    }
                }
                ), (e => {
                    c(),
                        i.onError(e)
                }
                ), (() => {
                    l = !0,
                        o || (c(),
                            u(),
                            i.onComplete())
                }
                ));
                return (0,
                    s.closable)((() => {
                        c(),
                            u(),
                            A.close()
                    }
                    ))
            }
            ))
        }
        ,
        5106: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.debug = void 0;
            const s = i(2098);
            t.debug = () => e => e.pipe((0,
                s.onEach)((e => console.log(e))))
        }
        ,
        3658: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.delay = void 0;
            const s = i(8374);
            t.delay = e => t => (0,
                s.scopedObservable)(((i, r) => {
                    const n = new Map;
                    let a = 0
                        , o = !1;
                    t.subscribe((t => {
                        if (o)
                            return;
                        const i = window.setTimeout((e => {
                            n.delete(e),
                                r.onNext(t),
                                o && 0 === n.size && r.onComplete()
                        }
                        ), e, a);
                        n.set(a, i),
                            a++
                    }
                    ), r.onError, (() => {
                        n.size > 0 ? o = !0 : r.onComplete()
                    }
                    )).closeBy(i),
                        (0,
                            s.closable)((() => n.forEach((e => clearTimeout(e))))).closeBy(i)
                }
                ))
        }
        ,
        1933: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.dematerialize = void 0;
            const s = i(8374);
            t.dematerialize = () => e => new s.Observable((t => e.subscribe((e => {
                "next" === e.type && t.onNext(e.value),
                    "error" === e.type && t.onError(e.error),
                    "complete" === e.type && t.onComplete()
            }
            ), t.onError, t.onComplete)))
        }
        ,
        7546: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.distinct = void 0;
            const s = i(8374);
            t.distinct = (e = ((e, t) => e === t)) => t => new s.Observable((i => {
                let s, r = !1;
                return t.subscribe((t => {
                    if (!r)
                        return r = !0,
                            s = t,
                            void i.onNext(t);
                    r && !e(t, s) && i.onNext(t),
                        s = t
                }
                ), i.onError, i.onComplete)
            }
            ))
        }
        ,
        3881: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.filter = void 0;
            const s = i(8374);
            t.filter = e => t => new s.Observable((i => t.subscribe((t => {
                e(t) && i.onNext(t)
            }
            ), i.onError, i.onComplete)))
        }
        ,
        4735: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.repeat = t.dematerialize = t.materialize = t.concatMap = t.skip = t.delay = t.switchMap = t.multicast = t.throttle = t.debug = t.scan = t.bufferUntil = t.bufferCount = t.withLatestFrom = t.distinct = t.last = t.mapNotNull = t.takeUntil = t.take = t.onEach = t.map = t.filter = void 0;
            var s = i(3881);
            Object.defineProperty(t, "filter", {
                enumerable: !0,
                get: function () {
                    return s.filter
                }
            });
            var r = i(5725);
            Object.defineProperty(t, "map", {
                enumerable: !0,
                get: function () {
                    return r.map
                }
            });
            var n = i(2098);
            Object.defineProperty(t, "onEach", {
                enumerable: !0,
                get: function () {
                    return n.onEach
                }
            });
            var a = i(1936);
            Object.defineProperty(t, "take", {
                enumerable: !0,
                get: function () {
                    return a.take
                }
            });
            var o = i(3243);
            Object.defineProperty(t, "takeUntil", {
                enumerable: !0,
                get: function () {
                    return o.takeUntil
                }
            });
            var l = i(3276);
            Object.defineProperty(t, "mapNotNull", {
                enumerable: !0,
                get: function () {
                    return l.mapNotNull
                }
            });
            var c = i(9538);
            Object.defineProperty(t, "last", {
                enumerable: !0,
                get: function () {
                    return c.last
                }
            });
            var u = i(7546);
            Object.defineProperty(t, "distinct", {
                enumerable: !0,
                get: function () {
                    return u.distinct
                }
            });
            var d = i(1292);
            Object.defineProperty(t, "withLatestFrom", {
                enumerable: !0,
                get: function () {
                    return d.withLatestFrom
                }
            });
            var A = i(1613);
            Object.defineProperty(t, "bufferCount", {
                enumerable: !0,
                get: function () {
                    return A.bufferCount
                }
            });
            var h = i(9541);
            Object.defineProperty(t, "bufferUntil", {
                enumerable: !0,
                get: function () {
                    return h.bufferUntil
                }
            });
            var p = i(6754);
            Object.defineProperty(t, "scan", {
                enumerable: !0,
                get: function () {
                    return p.scan
                }
            });
            var f = i(5106);
            Object.defineProperty(t, "debug", {
                enumerable: !0,
                get: function () {
                    return f.debug
                }
            });
            var m = i(4559);
            Object.defineProperty(t, "throttle", {
                enumerable: !0,
                get: function () {
                    return m.throttle
                }
            });
            var b = i(1741);
            Object.defineProperty(t, "multicast", {
                enumerable: !0,
                get: function () {
                    return b.multicast
                }
            });
            var v = i(7401);
            Object.defineProperty(t, "switchMap", {
                enumerable: !0,
                get: function () {
                    return v.switchMap
                }
            });
            var y = i(3658);
            Object.defineProperty(t, "delay", {
                enumerable: !0,
                get: function () {
                    return y.delay
                }
            });
            var g = i(9736);
            Object.defineProperty(t, "skip", {
                enumerable: !0,
                get: function () {
                    return g.skip
                }
            });
            var w = i(5824);
            Object.defineProperty(t, "concatMap", {
                enumerable: !0,
                get: function () {
                    return w.concatMap
                }
            });
            var S = i(6840);
            Object.defineProperty(t, "materialize", {
                enumerable: !0,
                get: function () {
                    return S.materialize
                }
            });
            var E = i(1933);
            Object.defineProperty(t, "dematerialize", {
                enumerable: !0,
                get: function () {
                    return E.dematerialize
                }
            });
            var P = i(3433);
            Object.defineProperty(t, "repeat", {
                enumerable: !0,
                get: function () {
                    return P.repeat
                }
            })
        }
        ,
        9538: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.last = void 0;
            const s = i(8374);
            t.last = () => e => new s.Observable((t => {
                let i;
                return e.subscribe((e => {
                    i = e
                }
                ), t.onError, (() => {
                    void 0 === i ? t.onError(new Error("Never emitted value")) : t.onNext(i),
                        t.onComplete()
                }
                ))
            }
            ))
        }
        ,
        5725: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.map = void 0;
            const s = i(8374);
            t.map = e => t => new s.Observable((i => t.subscribe((t => i.onNext(e(t))), i.onError, i.onComplete)))
        }
        ,
        3276: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.mapNotNull = void 0;
            const s = i(8374);
            t.mapNotNull = e => t => new s.Observable((i => t.subscribe((t => {
                const s = e(t);
                null != s && i.onNext(s)
            }
            ), i.onError, i.onComplete)))
        }
        ,
        6840: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.materialize = void 0;
            const s = i(8374);
            t.materialize = () => e => new s.Observable((t => e.subscribe((e => t.onNext({
                type: "next",
                value: e
            })), (e => {
                t.onNext({
                    type: "error",
                    error: e
                }),
                    t.onNext({
                        type: "complete"
                    }),
                    t.onError(e)
            }
            ), (() => {
                t.onNext({
                    type: "complete"
                }),
                    t.onComplete()
            }
            ))))
        }
        ,
        1741: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.multicast = void 0;
            const s = i(8374);
            t.multicast = (e = (() => new s.Subject)) => t => {
                const i = e();
                let r, n = 0;
                return {
                    pipe: i.pipe,
                    subscribe(e, a, o) {
                        const l = i.subscribe(e, a, o);
                        return n++,
                            r || (r = t.subscribe((e => i.next(e)), (e => i.error(e)), (() => i.complete()))),
                            (0,
                                s.closable)((() => {
                                    l.close(),
                                        n--,
                                        0 === n && (null == r || r.close(),
                                            r = void 0)
                                }
                                ))
                    }
                }
            }
        }
        ,
        2098: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.onEach = void 0;
            const s = i(8374);
            t.onEach = e => t => new s.Observable((i => t.subscribe((t => {
                e(t),
                    i.onNext(t)
            }
            ), i.onError, i.onComplete)))
        }
        ,
        3433: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.repeat = void 0;
            const s = i(8374);
            t.repeat = (e = 1 / 0) => t => new s.Observable((i => {
                let s, r = 0;
                return function n() {
                    r >= e ? i.onComplete() : (null == s || s.close(),
                        s = t.subscribe(i.onNext, i.onError, (() => setTimeout(n))),
                        r++)
                }(),
                    s
            }
            ))
        }
        ,
        6754: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.scan = void 0;
            const s = i(8374);
            t.scan = (e, t) => i => new s.Observable((s => {
                let r = t;
                return i.subscribe((t => {
                    r = e(r, t),
                        s.onNext(r)
                }
                ), s.onError, s.onComplete)
            }
            ))
        }
        ,
        9736: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.skip = void 0;
            const s = i(8374);
            t.skip = e => t => new s.Observable((i => {
                let s = 0;
                return t.subscribe((t => {
                    s < e ? s++ : i.onNext(t)
                }
                ), i.onError, i.onComplete)
            }
            ))
        }
        ,
        7401: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.switchMap = void 0;
            const s = i(8374);
            t.switchMap = e => t => new s.Observable((i => {
                let s, r = !1, n = !1;
                return t.subscribe((t => {
                    null == s || s.close(),
                        s = e(t).subscribe((e => {
                            r || (r = !0),
                                i.onNext(e),
                                n && (null == s || s.close(),
                                    s = void 0,
                                    i.onComplete())
                        }
                        ), (e => i.onError(e)), (() => {
                            null == s || s.close(),
                                s = void 0,
                                n && i.onComplete()
                        }
                        ))
                }
                ), i.onError, (() => {
                    r ? (null == s || s.close(),
                        s = void 0,
                        i.onComplete()) : n = !0
                }
                ))
            }
            ))
        }
        ,
        1936: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.take = void 0;
            const s = i(8374);
            t.take = e => t => new s.Observable((i => {
                let s = 0
                    , r = !1;
                const n = [];
                return t.subscribe((t => {
                    n.push(t),
                        r || function () {
                            for (r = !0; n.length > 0;) {
                                s++;
                                const t = n.splice(0, 1)[0];
                                if (i.onNext(t),
                                    s === e) {
                                    i.onComplete(),
                                        r = !1,
                                        n.splice(0, n.length);
                                    break
                                }
                            }
                            r = !1
                        }()
                }
                ), i.onError, i.onComplete)
            }
            ))
        }
        ,
        3243: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.takeUntil = void 0;
            const s = i(8374);
            t.takeUntil = e => t => new s.Observable((i => {
                let s = !1;
                return t.subscribe((t => {
                    s || (i.onNext(t),
                        s = e(t),
                        s && i.onComplete())
                }
                ), i.onError, (() => {
                    s || (s = !0,
                        i.onComplete())
                }
                ))
            }
            ))
        }
        ,
        4559: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.throttle = void 0;
            const s = i(8374);
            t.throttle = (e, t = (() => performance.now())) => i => new s.Observable((s => {
                let r, n = -1;
                return i.subscribe((i => {
                    r = i;
                    const a = t();
                    (-1 === n || a - n >= e) && (n = a,
                        s.onNext(r))
                }
                ), s.onError, s.onComplete)
            }
            ))
        }
        ,
        1292: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.withLatestFrom = void 0;
            const s = i(8374)
                , r = (e, ...t) => [e, ...t];
            t.withLatestFrom = (...e) => t => {
                const i = e[e.length - 1]
                    , n = "function" == typeof i
                    , a = n ? i : r
                    , o = e.slice(0, e.length - (n ? 1 : 0));
                return (0,
                    s.scopedObservable)(((e, i) => {
                        const s = [];
                        o.forEach(((t, r) => {
                            t.subscribe((e => {
                                s[r] = e
                            }
                            ), i.onError, (() => {
                                s.splice(0, s.length),
                                    i.onComplete()
                            }
                            )).closeBy(e)
                        }
                        )),
                            t.subscribe((e => {
                                const t = s.filter((() => !0));
                                if (t.length < o.length)
                                    return;
                                const [r, ...n] = t
                                    , l = a(e, r, ...n);
                                i.onNext(l)
                            }
                            ), i.onError, (() => {
                                s.splice(0, s.length),
                                    i.onComplete()
                            }
                            )).closeBy(e)
                    }
                    ))
            }
        }
        ,
        3476: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.shift = void 0;
            var s = i(9130);
            Object.defineProperty(t, "shift", {
                enumerable: !0,
                get: function () {
                    return s.shift
                }
            })
        }
        ,
        9130: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.shift = void 0,
                t.shift = function (e) {
                    return e.length > 0 ? {
                        isValid: !0,
                        item: e.shift()
                    } : {
                        isValid: !1
                    }
                }
        }
        ,
        5569: (e, t) => {
            var i, s, r = r || function (e, t) {
                var i = {}
                    , s = i.lib = {}
                    , r = function () { }
                    , n = s.Base = {
                        extend: function (e) {
                            r.prototype = this;
                            var t = new r;
                            return e && t.mixIn(e),
                                t.hasOwnProperty("init") || (t.init = function () {
                                    t.$super.init.apply(this, arguments)
                                }
                                ),
                                t.init.prototype = t,
                                t.$super = this,
                                t
                        },
                        create: function () {
                            var e = this.extend();
                            return e.init.apply(e, arguments),
                                e
                        },
                        init: function () { },
                        mixIn: function (e) {
                            for (var t in e)
                                e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function () {
                            return this.init.prototype.extend(this)
                        }
                    }
                    , a = s.WordArray = n.extend({
                        init: function (e, t) {
                            e = this.words = e || [],
                                this.sigBytes = null != t ? t : 4 * e.length
                        },
                        toString: function (e) {
                            return (e || l).stringify(this)
                        },
                        concat: function (e) {
                            var t = this.words
                                , i = e.words
                                , s = this.sigBytes;
                            if (e = e.sigBytes,
                                this.clamp(),
                                s % 4)
                                for (var r = 0; r < e; r++)
                                    t[s + r >>> 2] |= (i[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (s + r) % 4 * 8;
                            else if (65535 < i.length)
                                for (r = 0; r < e; r += 4)
                                    t[s + r >>> 2] = i[r >>> 2];
                            else
                                t.push.apply(t, i);
                            return this.sigBytes += e,
                                this
                        },
                        clamp: function () {
                            var t = this.words
                                , i = this.sigBytes;
                            t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                                t.length = e.ceil(i / 4)
                        },
                        clone: function () {
                            var e = n.clone.call(this);
                            return e.words = this.words.slice(0),
                                e
                        },
                        random: function (t) {
                            for (var i = [], s = 0; s < t; s += 4)
                                i.push(4294967296 * e.random() | 0);
                            return new a.init(i, t)
                        }
                    })
                    , o = i.enc = {}
                    , l = o.Hex = {
                        stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var i = [], s = 0; s < e; s++) {
                                var r = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                i.push((r >>> 4).toString(16)),
                                    i.push((15 & r).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, i = [], s = 0; s < t; s += 2)
                                i[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
                            return new a.init(i, t / 2)
                        }
                    }
                    , c = o.Latin1 = {
                        stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var i = [], s = 0; s < e; s++)
                                i.push(String.fromCharCode(t[s >>> 2] >>> 24 - s % 4 * 8 & 255));
                            return i.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, i = [], s = 0; s < t; s++)
                                i[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
                            return new a.init(i, t)
                        }
                    }
                    , u = o.Utf8 = {
                        stringify: function (e) {
                            try {
                                return decodeURIComponent(escape(c.stringify(e)))
                            } catch (t) {
                                throw Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (e) {
                            return c.parse(unescape(encodeURIComponent(e)))
                        }
                    }
                    , d = s.BufferedBlockAlgorithm = n.extend({
                        reset: function () {
                            this._data = new a.init,
                                this._nDataBytes = 0
                        },
                        _append: function (e) {
                            "string" == typeof e && (e = u.parse(e)),
                                this._data.concat(e),
                                this._nDataBytes += e.sigBytes
                        },
                        _process: function (t) {
                            var i = this._data
                                , s = i.words
                                , r = i.sigBytes
                                , n = this.blockSize
                                , o = r / (4 * n);
                            if (t = (o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0)) * n,
                                r = e.min(4 * t, r),
                                t) {
                                for (var l = 0; l < t; l += n)
                                    this._doProcessBlock(s, l);
                                l = s.splice(0, t),
                                    i.sigBytes -= r
                            }
                            return new a.init(l, r)
                        },
                        clone: function () {
                            var e = n.clone.call(this);
                            return e._data = this._data.clone(),
                                e
                        },
                        _minBufferSize: 0
                    });
                s.Hasher = d.extend({
                    cfg: n.extend(),
                    init: function (e) {
                        this.cfg = this.cfg.extend(e),
                            this.reset()
                    },
                    reset: function () {
                        d.reset.call(this),
                            this._doReset()
                    },
                    update: function (e) {
                        return this._append(e),
                            this._process(),
                            this
                    },
                    finalize: function (e) {
                        return e && this._append(e),
                            this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (e) {
                        return function (t, i) {
                            return new e.init(i).finalize(t)
                        }
                    },
                    _createHmacHelper: function (e) {
                        return function (t, i) {
                            return new A.HMAC.init(e, i).finalize(t)
                        }
                    }
                });
                var A = i.algo = {};
                return i
            }(Math);
            !function (e) {
                for (var t = r, i = (n = t.lib).WordArray, s = n.Hasher, n = t.algo, a = [], o = [], l = function (e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }, c = 2, u = 0; 64 > u;) {
                    var d;
                    e: {
                        d = c;
                        for (var A = e.sqrt(d), h = 2; h <= A; h++)
                            if (!(d % h)) {
                                d = !1;
                                break e
                            }
                        d = !0
                    }
                    d && (8 > u && (a[u] = l(e.pow(c, .5))),
                        o[u] = l(e.pow(c, 1 / 3)),
                        u++),
                        c++
                }
                var p = [];
                n = n.SHA256 = s.extend({
                    _doReset: function () {
                        this._hash = new i.init(a.slice(0))
                    },
                    _doProcessBlock: function (e, t) {
                        for (var i = this._hash.words, s = i[0], r = i[1], n = i[2], a = i[3], l = i[4], c = i[5], u = i[6], d = i[7], A = 0; 64 > A; A++) {
                            if (16 > A)
                                p[A] = 0 | e[t + A];
                            else {
                                var h = p[A - 15]
                                    , f = p[A - 2];
                                p[A] = ((h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3) + p[A - 7] + ((f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10) + p[A - 16]
                            }
                            h = d + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + (l & c ^ ~l & u) + o[A] + p[A],
                                f = ((s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22)) + (s & r ^ s & n ^ r & n),
                                d = u,
                                u = c,
                                c = l,
                                l = a + h | 0,
                                a = n,
                                n = r,
                                r = s,
                                s = h + f | 0
                        }
                        i[0] = i[0] + s | 0,
                            i[1] = i[1] + r | 0,
                            i[2] = i[2] + n | 0,
                            i[3] = i[3] + a | 0,
                            i[4] = i[4] + l | 0,
                            i[5] = i[5] + c | 0,
                            i[6] = i[6] + u | 0,
                            i[7] = i[7] + d | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , i = t.words
                            , s = 8 * this._nDataBytes
                            , r = 8 * t.sigBytes;
                        return i[r >>> 5] |= 128 << 24 - r % 32,
                            i[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296),
                            i[15 + (r + 64 >>> 9 << 4)] = s,
                            t.sigBytes = 4 * i.length,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var e = s.clone.call(this);
                        return e._hash = this._hash.clone(),
                            e
                    }
                }),
                    t.SHA256 = s._createHelper(n),
                    t.HmacSHA256 = s._createHmacHelper(n)
            }(Math),
                s = (i = r).enc.Utf8,
                i.algo.HMAC = i.lib.Base.extend({
                    init: function (e, t) {
                        e = this._hasher = new e.init,
                            "string" == typeof t && (t = s.parse(t));
                        var i = e.blockSize
                            , r = 4 * i;
                        t.sigBytes > r && (t = e.finalize(t)),
                            t.clamp();
                        for (var n = this._oKey = t.clone(), a = this._iKey = t.clone(), o = n.words, l = a.words, c = 0; c < i; c++)
                            o[c] ^= 1549556828,
                                l[c] ^= 909522486;
                        n.sigBytes = a.sigBytes = r,
                            this.reset()
                    },
                    reset: function () {
                        var e = this._hasher;
                        e.reset(),
                            e.update(this._iKey)
                    },
                    update: function (e) {
                        return this._hasher.update(e),
                            this
                    },
                    finalize: function (e) {
                        var t = this._hasher;
                        return e = t.finalize(e),
                            t.reset(),
                            t.finalize(this._oKey.clone().concat(e))
                    }
                }),
                function () {
                    var e = r
                        , t = e.lib.WordArray;
                    e.enc.Base64 = {
                        stringify: function (e) {
                            var t = e.words
                                , i = e.sigBytes
                                , s = this._map;
                            e.clamp(),
                                e = [];
                            for (var r = 0; r < i; r += 3)
                                for (var n = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < i; a++)
                                    e.push(s.charAt(n >>> 6 * (3 - a) & 63));
                            if (t = s.charAt(64))
                                for (; e.length % 4;)
                                    e.push(t);
                            return e.join("")
                        },
                        parse: function (e) {
                            var i = e.length
                                , s = this._map;
                            (r = s.charAt(64)) && -1 != (r = e.indexOf(r)) && (i = r);
                            for (var r = [], n = 0, a = 0; a < i; a++)
                                if (a % 4) {
                                    var o = s.indexOf(e.charAt(a - 1)) << a % 4 * 2
                                        , l = s.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                                    r[n >>> 2] |= (o | l) << 24 - n % 4 * 8,
                                        n++
                                }
                            return t.create(r, n)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(),
                function (e) {
                    for (var t = r, i = (n = t.lib).WordArray, s = n.Hasher, n = t.algo, a = [], o = [], l = function (e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }, c = 2, u = 0; 64 > u;) {
                        var d;
                        e: {
                            d = c;
                            for (var A = e.sqrt(d), h = 2; h <= A; h++)
                                if (!(d % h)) {
                                    d = !1;
                                    break e
                                }
                            d = !0
                        }
                        d && (8 > u && (a[u] = l(e.pow(c, .5))),
                            o[u] = l(e.pow(c, 1 / 3)),
                            u++),
                            c++
                    }
                    var p = [];
                    n = n.SHA256 = s.extend({
                        _doReset: function () {
                            this._hash = new i.init(a.slice(0))
                        },
                        _doProcessBlock: function (e, t) {
                            for (var i = this._hash.words, s = i[0], r = i[1], n = i[2], a = i[3], l = i[4], c = i[5], u = i[6], d = i[7], A = 0; 64 > A; A++) {
                                if (16 > A)
                                    p[A] = 0 | e[t + A];
                                else {
                                    var h = p[A - 15]
                                        , f = p[A - 2];
                                    p[A] = ((h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3) + p[A - 7] + ((f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10) + p[A - 16]
                                }
                                h = d + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + (l & c ^ ~l & u) + o[A] + p[A],
                                    f = ((s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22)) + (s & r ^ s & n ^ r & n),
                                    d = u,
                                    u = c,
                                    c = l,
                                    l = a + h | 0,
                                    a = n,
                                    n = r,
                                    r = s,
                                    s = h + f | 0
                            }
                            i[0] = i[0] + s | 0,
                                i[1] = i[1] + r | 0,
                                i[2] = i[2] + n | 0,
                                i[3] = i[3] + a | 0,
                                i[4] = i[4] + l | 0,
                                i[5] = i[5] + c | 0,
                                i[6] = i[6] + u | 0,
                                i[7] = i[7] + d | 0
                        },
                        _doFinalize: function () {
                            var t = this._data
                                , i = t.words
                                , s = 8 * this._nDataBytes
                                , r = 8 * t.sigBytes;
                            return i[r >>> 5] |= 128 << 24 - r % 32,
                                i[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296),
                                i[15 + (r + 64 >>> 9 << 4)] = s,
                                t.sigBytes = 4 * i.length,
                                this._process(),
                                this._hash
                        },
                        clone: function () {
                            var e = s.clone.call(this);
                            return e._hash = this._hash.clone(),
                                e
                        }
                    }),
                        t.SHA256 = s._createHelper(n),
                        t.HmacSHA256 = s._createHmacHelper(n)
                }(Math),
                t.enc = {
                    Base64: r.enc.Base64,
                    Utf8: r.enc.Utf8,
                    Latin1: r.enc.Latin1
                },
                t.SHA256 = r.SHA256,
                t.HmacSHA256 = r.HmacSHA256
        }
        ,
        3818: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.parseAudioMeta = void 0;
            const s = i(659)
                , r = i(4802)
                , n = i(187);
            t.parseAudioMeta = function (e) {
                var t, i, a, o;
                const [l] = null !== (t = (0,
                    n.findAtom)(e.data, ["mdia", "hdlr"])) && void 0 !== t ? t : [];
                if (!l)
                    return;
                if ("soun" !== (0,
                    n.getTrackType)(l))
                    return;
                const [c] = null !== (i = (0,
                    n.findAtom)(e.data, ["tkhd"])) && void 0 !== i ? i : [];
                if (!c)
                    return;
                const [u] = null !== (a = (0,
                    n.findAtom)(e.data, ["mdia", "mdhd"])) && void 0 !== a ? a : [];
                if (!u)
                    return;
                const [d] = null !== (o = (0,
                    n.findAtom)(e.data, ["mdia", "minf", "stbl", "stsd"])) && void 0 !== o ? o : [];
                if (!d)
                    return;
                const A = d.data.slice(8)
                    , h = (0,
                        n.toString)(A.slice(4, 8))
                    , p = "mp4a" === h ? "mp4a.40.2" : "opus"
                    , f = "mp4a" === h ? (0,
                        s.mp4a)(d.data.slice(8)) : "Opus" === h ? (0,
                            r.Opus)(d.data.slice(8)) : void 0;
                if (!f)
                    return;
                const m = 0 === (0,
                    n.toInt)(c.data.slice(0, 1)) ? (0,
                        n.toInt)(c.data.slice(12, 16)) : (0,
                            n.toInt)(c.data.slice(20, 24))
                    , b = (0,
                        n.getTimescale)(u);
                return Object.assign({
                    id: m,
                    timeScale: b,
                    codec: p
                }, f)
            }
        }
        ,
        4802: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Opus = void 0;
            const s = i(187);
            t.Opus = function (e) {
                if ("Opus" === (0,
                    s.toString)(e.slice(4, 8)))
                    return {
                        numberOfChannels: (0,
                            s.toInt)(e.slice(25, 26)),
                        sampleRate: (0,
                            s.toInt)(e.slice(32, 34))
                    }
            }
        }
        ,
        1269: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.parseVideoMeta = void 0;
            const s = i(187);
            t.parseVideoMeta = function (e) {
                var t, i, r, n;
                const [a] = null !== (t = (0,
                    s.findAtom)(e.data, ["mdia", "hdlr"])) && void 0 !== t ? t : [];
                if (!a)
                    return;
                if ("vide" !== (0,
                    s.getTrackType)(a))
                    return;
                const [o] = null !== (i = (0,
                    s.findAtom)(e.data, ["tkhd"])) && void 0 !== i ? i : [];
                if (!o)
                    return;
                const [l] = null !== (r = (0,
                    s.findAtom)(e.data, ["mdia", "mdhd"])) && void 0 !== r ? r : [];
                if (!l)
                    return;
                const [c] = null !== (n = (0,
                    s.findAtom)(e.data, ["mdia", "minf", "stbl", "stsd"])) && void 0 !== n ? n : [];
                if (!c)
                    return;
                const u = (0,
                    s.extractAtoms)(c.data.slice(8))[0];
                if (!u)
                    return;
                const d = (0,
                    s.toInt)(u.data.slice(24, 26))
                    , A = (0,
                        s.toInt)(u.data.slice(26, 28))
                    , h = u.data.slice(86);
                let p;
                if ("avc1" === u.name)
                    p = "avc1.64001f";
                else {
                    if ("av01" !== u.name)
                        return;
                    p = "av01.0.04M.08"
                }
                return {
                    id: 0 === (0,
                        s.toInt)(o.data.slice(0, 1)) ? (0,
                            s.toInt)(o.data.slice(12, 16)) : (0,
                                s.toInt)(o.data.slice(20, 24)),
                    codedWidth: d,
                    codedHeight: A,
                    timeScale: (0,
                        s.getTimescale)(l),
                    description: h,
                    codec: p
                }
            }
        }
        ,
        5450: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.makeBufferWithEgwc = t.parseVideoMeta = t.parseAudioMeta = void 0,
                r(i(187), t);
            var n = i(3818);
            Object.defineProperty(t, "parseAudioMeta", {
                enumerable: !0,
                get: function () {
                    return n.parseAudioMeta
                }
            });
            var a = i(1269);
            Object.defineProperty(t, "parseVideoMeta", {
                enumerable: !0,
                get: function () {
                    return a.parseVideoMeta
                }
            });
            var o = i(6868);
            Object.defineProperty(t, "makeBufferWithEgwc", {
                enumerable: !0,
                get: function () {
                    return o.makeBufferWithEgwc
                }
            })
        },
        6868: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.makeBufferWithEgwc = void 0;
            const i = {
                data: [],
                pts: Date.now(),
                wallclock: Date.now(),
                edgeWallclock: Date.now()
            };
            function s(e, t = 8) {
                const i = new Array(t).fill(0);
                let s = e
                    , r = 1;
                for (; s > 0;)
                    i[i.length - r] = s % 256,
                        s = Math.floor(s / 256),
                        r++;
                return i
            }
            t.makeBufferWithEgwc = function (e = i) {
                const { data: t, pts: r, wallclock: n, edgeWallclock: a } = Object.assign(Object.assign({}, i), e)
                    , o = Array.isArray(r) ? r : s(r)
                    , l = Array.isArray(n) ? n : s(n)
                    , c = Array.isArray(a) ? a : s(a);
                return new Uint8Array([...s(t.length + 8, 4), 109, 100, 97, 116, ...t, 0, 0, 0, 32, 101, 103, 119, 99, ...o, ...l, ...c]).buffer
            }
        }
        ,
        659: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.mp4a = void 0;
            const s = i(187);
            t.mp4a = function (e) {
                if ("mp4a" === (0,
                    s.toString)(e.slice(4, 8)))
                    return {
                        numberOfChannels: (0,
                            s.toInt)(e.slice(24, 26)),
                        sampleRate: (0,
                            s.toInt)(e.slice(32, 34))
                    }
            }
        }
        ,
        187: (e, t) => {
            "use strict";
            function i(e) {
                return e.reduce(((e, t) => 256 * e + t))
            }
            function s(e) {
                const t = new Uint8Array(4);
                for (let i = 0; i < 4; i++)
                    t[3 - i] = 255 & e,
                        e >>>= 8;
                return t
            }
            function r(e) {
                return String.fromCharCode(...e)
            }
            function n(e) {
                const t = new Uint8Array(4);
                for (let i = 0; i < 4; i++)
                    t[i] = i < e.length ? e.charCodeAt(i) : 0;
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.atomsToBuffer = t.getTrackType = t.getSampleRate = t.getTimescale = t.getEgwc = t.findAtom = t.extractAtoms = t.strToUint8 = t.toString = t.toUint8 = t.toInt = void 0,
                t.toInt = i,
                t.toUint8 = s,
                t.toString = r,
                t.strToUint8 = n;
            const a = /\w{4}\[(\d)]/;
            function o(e) {
                const t = [];
                for (let s = 0; s < e.length;) {
                    const n = i(e.slice(s, s + 4))
                        , a = r(e.slice(s + 4, s + 8))
                        , o = e.slice(s + 8, s + n);
                    t.push({
                        size: n,
                        name: a,
                        data: o
                    }),
                        s += n
                }
                return t
            }
            t.extractAtoms = o,
                t.findAtom = function e(t, i) {
                    const s = o(t)
                        , r = i[0]
                        , n = r.match(a)
                        , l = n && n[1] ? parseInt(n[1]) : void 0
                        , c = r.split("[")[0]
                        , u = s.filter((e => e.name === c)).filter(((e, t) => void 0 === l || l === t));
                    if (0 !== u.length)
                        return i.length - 1 == 0 ? u : e(u[0].data, i.slice(1))
                }
                ,
                t.getEgwc = function (e) {
                    const { data: t } = e;
                    return {
                        pts: i(t.slice(0, 8)),
                        wallclock: Math.floor(i(t.slice(8, 16)) / 1e3),
                        edgeWallclock: i(t.slice(16, 24))
                    }
                }
                ,
                t.getTimescale = function (e) {
                    const { data: t } = e;
                    return i(t.slice(12, 16))
                }
                ,
                t.getSampleRate = function (e) {
                    const { data: t } = e;
                    return i(t.slice(40, 42))
                }
                ,
                t.getTrackType = function (e) {
                    return r(e.data.slice(8, 12))
                }
                ,
                t.atomsToBuffer = function (e) {
                    const t = e.map((e => e.size)).reduce(((e, t) => e + t))
                        , i = new ArrayBuffer(t)
                        , r = new Uint8Array(i);
                    let a = 0;
                    for (const o of e)
                        r.set(s(o.size), a + 0),
                            r.set(n(o.name), a + 4),
                            r.set(o.data, a + 8),
                            a += o.size;
                    return i
                }
        }
        ,
        1172: e => {
            (() => {
                var t = {
                    932: (e, t, i) => {
                        e.exports = i(717)('(()=>{"use strict";var t;!function(t){t.OnSufficientBuffer="OnSufficientBuffer",t.OnPts="OnPts",t.OnSilent="OnSilent",t.PushFrame="PushFrame",t.DropOldFrames="DropOldFrames",t.SetPlaybackRate="SetPlaybackRate",t.Destroy="Destroy"}(t||(t={}));class e{constructor(){this.frames=[],this.availableSamples=0}push(t){this.frames.push(t),this.availableSamples+=t.numSamples}trim(t){this.frames=this.frames.slice(t),this.availableSamples=this.frames.reduce(((t,e)=>t+e.numSamples),0)}dropOldFrames(t){for(var e;this.frames.length&&this.frames[0].pts<t;){const t=this.frames.shift();this.availableSamples-=null!==(e=null==t?void 0:t.numSamples)&&void 0!==e?e:0}}get length(){return this.availableSamples}}class s{constructor(t,e=0){this.buffer=t,this.index=e,this.frameIndex=0,this.move(e)}available(){let t=this.index;for(let e=0;e<this.frameIndex;e++)t+=this.buffer.frames[e].numSamples;return this.buffer.length-t}trim(){this.buffer.trim(this.frameIndex),this.frameIndex=0}pts(t,e=0){const s=this.buffer.frames[this.frameIndex];if(s)return s.pts+(this.index+e)/t*1e3}get(t){const e=this.currentFrame();return e?e.buffers[t][this.index]:void 0}getNext(t){const e=this.currentFrame();if(e){if(this.index+1>=e.numSamples){const e=this.buffer.frames[this.frameIndex+1];return e?e.buffers[t][0]:void 0}return e.buffers[t][this.index+1]}}currentFrame(){return this.buffer.frames[this.frameIndex]}hasFrame(){return this.frameIndex<this.buffer.frames.length}hasSample(){const t=this.currentFrame();return!!(t&&this.index<t.numSamples)}hasNext(){return this.hasNextFrame()||this.hasFrameNextSample()}next(){this.index++,this.hasSample()||(this.frameIndex++,this.index=0)}move(t){this.index+=t;let e=this.currentFrame();for(;e&&!this.hasSample();)this.index-=e.numSamples,this.frameIndex++,e=this.currentFrame()}copyTo(t,e){let s=e;for(;s>0;){const i=this.currentFrame();if(!i)break;const a=Math.min(s,i.numSamples-this.index),r=e-s;t.forEach(((t,e)=>{for(let s=this.index,n=r;s<a+this.index;s++,n++)t[n]=i.buffers[e][s]})),s-=a,this.index+=a,this.index>=i.numSamples&&(this.index=0,this.frameIndex++)}}hasFrameNextSample(){const t=this.currentFrame();return!!t&&this.index+1<t.numSamples}hasNextFrame(){return this.frameIndex+1<this.buffer.frames.length}}class i extends AudioWorkletProcessor{constructor(i){var a,r,n,l,h,o,u,m,f,p,c,d;super(i),this.samples=new e,this.sampleIterator=new s(this.samples),this.isSufficientBuffer=!1,this.lastPtsReport=0,this.silentDuration=0,this.isDestroy=!1,this.sampleRateRatio=1,this.sampleFraction=0,this.playbackRate=1,this.channelCount=null!==(r=null===(a=null==i?void 0:i.outputChannelCount)||void 0===a?void 0:a[0])&&void 0!==r?r:2,this.playbackRate=null!==(l=null===(n=null==i?void 0:i.parameterData)||void 0===n?void 0:n.playbackRate)&&void 0!==l?l:this.playbackRate,this.sampleRateRatio=null!==(o=null===(h=null==i?void 0:i.parameterData)||void 0===h?void 0:h.sampleRateRatio)&&void 0!==o?o:this.sampleRateRatio,this.initBufferLength=null!==(m=null===(u=null==i?void 0:i.parameterData)||void 0===u?void 0:u.initBufferLength)&&void 0!==m?m:500,this.inputSampleRate=null!==(p=null===(f=null==i?void 0:i.parameterData)||void 0===f?void 0:f.inputSampleRate)&&void 0!==p?p:44100,this.outputSampleRate=null!==(d=null===(c=null==i?void 0:i.parameterData)||void 0===c?void 0:c.outputSampleRate)&&void 0!==d?d:44100,this.port.onmessage=e=>{switch(e.data.type){case t.PushFrame:this.samples.push(e.data.frame),this.bufferCheck();break;case t.DropOldFrames:this.dropOldFrames(e.data.pts);break;case t.SetPlaybackRate:this.setPlaybackRate(e.data.playbackRate);break;case t.Destroy:this.isDestroy=!0}}}process(t,e){if(this.isDestroy)return!1;const s=e[0],i=s[0].length,a=this.sampleRateRatio*this.playbackRate,r=Math.floor(this.sampleIterator.available()/a)-1,n=Math.min(r,i);return this.reportPts(),!this.isSufficientBuffer||r<i?(this.silentDuration+=i/this.inputSampleRate*1e3,this.reportSilent(),function(t,e=0){t.forEach((t=>{t.fill(0,e)}))}(s,i),!0):(1===a?this.copyToOutput(s,n):this.interpolateToOutput(s,n,a),this.sampleIterator.trim(),!0)}reportSilent(){this.silentDuration<100||(this.port.postMessage({type:t.OnSilent,duration:this.silentDuration}),this.silentDuration=0)}copyToOutput(t,e){this.sampleFraction=0,this.sampleIterator.copyTo(t,e)}interpolateToOutput(t,e,s){var i,a,r,n,l;for(let h=0;h<e;h++){for(let e=0;e<this.channelCount;e++){const s=null!==(i=this.sampleIterator.get(e))&&void 0!==i?i:0,o=null!==(a=this.sampleIterator.getNext(e))&&void 0!==a?a:s;t[e][h]=(r=s,n=o,l=this.sampleFraction,r+(n-r)*(l=.5*(1-Math.cos(l*Math.PI))))}for(this.sampleFraction+=s;this.sampleFraction>=1;)this.sampleIterator.next(),this.sampleFraction-=1}}bufferCheck(){this.isSufficientBuffer||this.samples.length/this.inputSampleRate*1e3>=this.initBufferLength&&(this.isSufficientBuffer=!0,this.port.postMessage({type:t.OnSufficientBuffer}))}dropOldFrames(t){this.samples.dropOldFrames(t)}setPlaybackRate(t){this.playbackRate=t}reportPts(){var e;if(!this.isSufficientBuffer)return;const s=1e3*currentTime;if(s-this.lastPtsReport<200)return;const i=Math.round(null!==(e=this.sampleIterator.pts(this.outputSampleRate))&&void 0!==e?e:0);this.lastPtsReport=s,this.port.postMessage({type:t.OnPts,pts:i})}}registerProcessor("bufferProcessor",i)})();')
                    }
                    ,
                    717: e => {
                        "use strict";
                        var t = window.URL || window.webkitURL;
                        e.exports = function (e) {
                            try {
                                var i;
                                try {
                                    (i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(e),
                                        i = i.getBlob("application/javascript; charset=utf-8")
                                } catch (t) {
                                    i = new Blob([e], {
                                        type: "application/javascript; charset=utf-8"
                                    })
                                }
                                return t.createObjectURL(i)
                            } catch (t) {
                                return "data:application/javascript," + encodeURIComponent(e)
                            }
                        }
                    }
                }
                    , i = {};
                function s(e) {
                    var r = i[e];
                    if (void 0 !== r)
                        return r.exports;
                    var n = i[e] = {
                        exports: {}
                    };
                    return t[e](n, n.exports, s),
                        n.exports
                }
                s.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return s.d(t, {
                        a: t
                    }),
                        t
                }
                    ,
                    s.d = (e, t) => {
                        for (var i in t)
                            s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                                enumerable: !0,
                                get: t[i]
                            })
                    }
                    ,
                    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                    s.r = e => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                    }
                    ;
                var r = {};
                (() => {
                    "use strict";
                    s.r(r),
                        s.d(r, {
                            AudioSampleBuffer: () => e,
                            AudioSampleIterator: () => t,
                            ScriptProcessorBuffer: () => i,
                            WorkletBuffer: () => c,
                            createAudioPlayer: () => u
                        });
                    class e {
                        constructor() {
                            this.frames = [],
                                this.availableSamples = 0
                        }
                        push(e) {
                            this.frames.push(e),
                                this.availableSamples += e.numSamples
                        }
                        trim(e) {
                            this.frames = this.frames.slice(e),
                                this.availableSamples = this.frames.reduce(((e, t) => e + t.numSamples), 0)
                        }
                        dropOldFrames(e) {
                            for (var t; this.frames.length && this.frames[0].pts < e;) {
                                const e = this.frames.shift();
                                this.availableSamples -= null !== (t = null == e ? void 0 : e.numSamples) && void 0 !== t ? t : 0
                            }
                        }
                        get length() {
                            return this.availableSamples
                        }
                    }
                    class t {
                        constructor(e, t = 0) {
                            this.buffer = e,
                                this.index = t,
                                this.frameIndex = 0,
                                this.move(t)
                        }
                        available() {
                            let e = this.index;
                            for (let t = 0; t < this.frameIndex; t++)
                                e += this.buffer.frames[t].numSamples;
                            return this.buffer.length - e
                        }
                        trim() {
                            this.buffer.trim(this.frameIndex),
                                this.frameIndex = 0
                        }
                        pts(e, t = 0) {
                            const i = this.buffer.frames[this.frameIndex];
                            if (i)
                                return i.pts + (this.index + t) / e * 1e3
                        }
                        get(e) {
                            const t = this.currentFrame();
                            return t ? t.buffers[e][this.index] : void 0
                        }
                        getNext(e) {
                            const t = this.currentFrame();
                            if (t) {
                                if (this.index + 1 >= t.numSamples) {
                                    const t = this.buffer.frames[this.frameIndex + 1];
                                    return t ? t.buffers[e][0] : void 0
                                }
                                return t.buffers[e][this.index + 1]
                            }
                        }
                        currentFrame() {
                            return this.buffer.frames[this.frameIndex]
                        }
                        hasFrame() {
                            return this.frameIndex < this.buffer.frames.length
                        }
                        hasSample() {
                            const e = this.currentFrame();
                            return !!(e && this.index < e.numSamples)
                        }
                        hasNext() {
                            return this.hasNextFrame() || this.hasFrameNextSample()
                        }
                        next() {
                            this.index++,
                                this.hasSample() || (this.frameIndex++,
                                    this.index = 0)
                        }
                        move(e) {
                            this.index += e;
                            let t = this.currentFrame();
                            for (; t && !this.hasSample();)
                                this.index -= t.numSamples,
                                    this.frameIndex++,
                                    t = this.currentFrame()
                        }
                        copyTo(e, t) {
                            let i = t;
                            for (; i > 0;) {
                                const s = this.currentFrame();
                                if (!s)
                                    break;
                                const r = Math.min(i, s.numSamples - this.index)
                                    , n = t - i;
                                e.forEach(((e, t) => {
                                    for (let i = this.index, a = n; i < r + this.index; i++,
                                        a++)
                                        e[a] = s.buffers[t][i]
                                }
                                )),
                                    i -= r,
                                    this.index += r,
                                    this.index >= s.numSamples && (this.index = 0,
                                        this.frameIndex++)
                            }
                        }
                        hasFrameNextSample() {
                            const e = this.currentFrame();
                            return !!e && this.index + 1 < e.numSamples
                        }
                        hasNextFrame() {
                            return this.frameIndex + 1 < this.buffer.frames.length
                        }
                    }
                    class i {
                        constructor(i, s, r, n, a, o, l, c, u) {
                            this.audioContext = i,
                                this.initBufferLength = s,
                                this.inputSampleRate = r,
                                this.channelCount = n,
                                this.playbackRate = a,
                                this.sampleRateRatio = o,
                                this.reportPts = l,
                                this.onSilent = c,
                                this.getReferencePoint = u,
                                this.samples = new e,
                                this.sampleIterator = new t(this.samples),
                                this.isSufficient = !1,
                                this.sampleFraction = 0,
                                this.bufferSize = 1024,
                                this.sampleRateRatio = r / i.sampleRate,
                                this.sourceNode = this.audioContext.createOscillator(),
                                this.gainNode = this.audioContext.createGain(),
                                this.scriptNode = i.createScriptProcessor(this.bufferSize, 0, this.channelCount),
                                this.scriptNode.onaudioprocess = this.onAudioProcess.bind(this),
                                this.sourceNode.connect(this.scriptNode),
                                this.scriptNode.connect(this.gainNode),
                                this.gainNode.connect(this.audioContext.destination),
                                this.sourceNode.start(0)
                        }
                        onAudioFrame(e) {
                            this.samples.push(e),
                                this.bufferCheck()
                        }
                        isSufficientBuffer() {
                            return this.isSufficient
                        }
                        getReferencePts() {
                            var e;
                            return (null === (e = this.samples.frames[0]) || void 0 === e ? void 0 : e.pts) || 0
                        }
                        dropOldFrames(e) {
                            this.samples.dropOldFrames(e)
                        }
                        setPlaybackRate(e) {
                            this.playbackRate = e
                        }
                        setVolume(e) {
                            this.gainNode.gain.value = e
                        }
                        destroy() {
                            this.sourceNode.stop(0),
                                this.sourceNode.disconnect(),
                                this.gainNode.disconnect(),
                                this.scriptNode.disconnect()
                        }
                        onAudioProcess(e) {
                            const { referencePts: t, referenceTime: i } = this.getReferencePoint()
                                , s = function (e, t) {
                                    return Array.from({
                                        length: t
                                    }, ((t, i) => e.outputBuffer.getChannelData(i)))
                                }(e, this.channelCount)
                                , r = s[0].length;
                            let a = this.sampleRateRatio * this.playbackRate;
                            const o = Math.floor(this.sampleIterator.available() / a) - 1
                                , l = Math.min(o, e.outputBuffer.length);
                            if (!this.isSufficient || o < r) {
                                const e = r / this.inputSampleRate * 1e3;
                                return this.onSilent(e),
                                    void n(s, r)
                            }
                            const c = t + (performance.now() - i)
                                , u = this.sampleIterator.pts(this.inputSampleRate, l);
                            if (u) {
                                const e = c - u;
                                e > 50 && (a *= 1.05),
                                    e < -50 && (a *= .95)
                            }
                            u && this.reportPts(u),
                                1 === a ? this.copyToOutput(s, l) : this.interpolateToOutput(s, l, a),
                                this.sampleIterator.trim(),
                                l < e.outputBuffer.length && n(s, l)
                        }
                        copyToOutput(e, t) {
                            this.sampleFraction = 0,
                                this.sampleIterator.copyTo(e, t)
                        }
                        interpolateToOutput(e, t, i) {
                            var s, r, n, a, o;
                            for (let l = 0; l < t; l++) {
                                for (let t = 0; t < this.channelCount; t++) {
                                    const i = null !== (s = this.sampleIterator.get(t)) && void 0 !== s ? s : 0
                                        , c = null !== (r = this.sampleIterator.getNext(t)) && void 0 !== r ? r : i;
                                    e[t][l] = (n = i,
                                        a = c,
                                        o = this.sampleFraction,
                                        n + (a - n) * (o = .5 * (1 - Math.cos(o * Math.PI))))
                                }
                                for (this.sampleFraction += i; this.sampleFraction >= 1;)
                                    this.sampleIterator.next(),
                                        this.sampleFraction -= 1
                            }
                        }
                        bufferCheck() {
                            this.isSufficient || this.samples.length / this.inputSampleRate * 1e3 >= this.initBufferLength && (this.isSufficient = !0)
                        }
                    }
                    function n(e, t = 0) {
                        e.forEach((e => {
                            e.fill(0, t)
                        }
                        ))
                    }
                    var a;
                    !function (e) {
                        e.OnSufficientBuffer = "OnSufficientBuffer",
                            e.OnPts = "OnPts",
                            e.OnSilent = "OnSilent",
                            e.PushFrame = "PushFrame",
                            e.DropOldFrames = "DropOldFrames",
                            e.SetPlaybackRate = "SetPlaybackRate",
                            e.Destroy = "Destroy"
                    }(a || (a = {}));
                    var o = s(932)
                        , l = s.n(o);
                    class c {
                        constructor(e, t, i, s, r, n, o, c) {
                            this.audioContext = e,
                                this.reportPts = o,
                                this.onSilent = c,
                                this.isSufficient = !1,
                                this.referencePts = 0,
                                this.onWorkletMessage = e => {
                                    switch (e.data.type) {
                                        case a.OnSufficientBuffer:
                                            this.isSufficient = !0;
                                            break;
                                        case a.OnPts:
                                            this.reportPts(e.data.pts);
                                            break;
                                        case a.OnSilent:
                                            this.onSilent(e.data.duration)
                                    }
                                }
                                ,
                                this.sourceNode = this.audioContext.createOscillator(),
                                this.gainNode = this.audioContext.createGain(),
                                e.audioWorklet.addModule(l()).then((() => {
                                    this.worklet = new AudioWorkletNode(e, "bufferProcessor", {
                                        outputChannelCount: [s],
                                        parameterData: {
                                            initBufferLength: t,
                                            playbackRate: r,
                                            inputSampleRate: i,
                                            outputSampleRate: e.sampleRate,
                                            sampleRateRatio: n
                                        }
                                    }),
                                        this.worklet.port.onmessage = this.onWorkletMessage,
                                        this.sourceNode.connect(this.worklet),
                                        this.worklet.connect(this.gainNode),
                                        this.gainNode.connect(this.audioContext.destination),
                                        this.sourceNode.start(0)
                                }
                                ))
                        }
                        onAudioFrame(e) {
                            var t;
                            null === (t = this.worklet) || void 0 === t || t.port.postMessage({
                                type: a.PushFrame,
                                frame: e
                            }, e.buffers.map((e => e.buffer))),
                                this.referencePts || (this.referencePts = e.pts)
                        }
                        isSufficientBuffer() {
                            return this.isSufficient
                        }
                        setVolume(e) {
                            this.gainNode.gain.value = e
                        }
                        getReferencePts() {
                            return this.referencePts
                        }
                        dropOldFrames(e) {
                            var t;
                            null === (t = this.worklet) || void 0 === t || t.port.postMessage({
                                type: a.DropOldFrames,
                                pts: e
                            })
                        }
                        setPlaybackRate(e) {
                            var t;
                            null === (t = this.worklet) || void 0 === t || t.port.postMessage({
                                type: a.SetPlaybackRate,
                                playbackRate: e
                            })
                        }
                        destroy() {
                            var e, t;
                            null === (e = this.worklet) || void 0 === e || e.port.postMessage({
                                type: a.Destroy
                            }),
                                this.sourceNode.stop(0),
                                null === (t = this.worklet) || void 0 === t || t.disconnect(),
                                this.sourceNode.disconnect(),
                                this.gainNode.disconnect()
                        }
                    }
                    function u(e, t, s, r, n, a, o) {
                        let l = !1
                            , u = 0
                            , d = 0
                            , A = [];
                        const h = new (AudioWorklet ? c : i)(e, t, s, r, o, s / e.sampleRate, (function (e) {
                            u = e,
                                d = performance.now(),
                                A.forEach((t => t(e)))
                        }
                        ), (function (e) {
                            u -= e
                        }
                        ), (function () {
                            return {
                                referencePts: u,
                                referenceTime: d
                            }
                        }
                        ));
                        return h.setVolume(n),
                            a && "closed" !== e.state && e.suspend(),
                        {
                            pushFrame: t => {
                                h.onAudioFrame(t),
                                    l || (l = h.isSufficientBuffer(),
                                        l && (u = h.getReferencePts(),
                                            d = performance.now(),
                                            l = !0,
                                            a ? A.forEach((e => e(u))) : e.resume())),
                                    function (e = performance.now()) {
                                        if (l && a) {
                                            const t = u + e - d;
                                            h.dropOldFrames(t)
                                        }
                                    }()
                            }
                            ,
                            pts: {
                                subscribe: e => {
                                    A.push(e)
                                }
                                ,
                                unsubscribe: e => {
                                    A = A.filter((t => t !== e))
                                }
                            },
                            volume: {
                                get: () => n,
                                set: e => {
                                    n = e,
                                        h.setVolume(n)
                                }
                            },
                            mute: {
                                get: () => a,
                                set: t => {
                                    (a = t) ? e.suspend() : e.resume()
                                }
                            },
                            playbackRate: {
                                get: () => o,
                                set: e => {
                                    o = e,
                                        h.setPlaybackRate(o)
                                }
                            },
                            destroy: () => {
                                h.destroy(),
                                    A.length = 0
                            }
                        }
                    }
                }
                )(),
                    e.exports = r
            }
            )()
        }
        ,
        5796: e => {
            (() => {
                "use strict";
                var t = {};
                (() => {
                    var e = t;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.cd = void 0;
                    const i = 4194304
                        , s = new Uint8Array([30, 158, 90, 33, 244, 57, 83, 165, 2, 70, 35, 87, 215, 231, 226, 108]);
                    function r(e) {
                        return e.reduce(((e, t) => 256 * e + t))
                    }
                    e.cd = function (e) {
                        const t = s.slice().reverse();
                        let n, a, l = 0, c = 0, u = 1 / 0, d = !1, A = !1;
                        return function (s) {
                            if (!n && l > 50)
                                return s;
                            if (l++,
                                A)
                                return s;
                            const h = new Uint8Array(s);
                            if (d) {
                                if (!(c < u))
                                    return a && n ? (a.set(h, i),
                                        n.parse(null, i, h.byteLength),
                                        a.slice(i, i + h.byteLength).buffer) : (e(new Error("video_error_2")),
                                            A = !0,
                                            s);
                                o(h) && c++
                            } else {
                                const i = function (e, t) {
                                    const i = function (e, t) {
                                        for (let i = 0; i < e.byteLength - t.length; i++)
                                            for (let s = 0; s < t.length && e[i + s] === t[s]; s++)
                                                if (s === t.length - 1)
                                                    return i;
                                        return null
                                    }(e, t);
                                    if (i) {
                                        const t = r(e.slice(i + 16, i + 16 + 8));
                                        return [t, r(e.slice(i + 24, i + 24 + 8)), function (e) {
                                            return e.map((e => ~e))
                                        }(e.slice(i + 32, i + 32 + t))]
                                    }
                                    return null
                                }(h, t);
                                if (!i)
                                    return s;
                                const l = function (e) {
                                    try {
                                        if ("object" != typeof WebAssembly || "function" != typeof WebAssembly.instantiate)
                                            throw null;
                                        {
                                            const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                                            if (!(e instanceof WebAssembly.Module && new WebAssembly.Instance(e) instanceof WebAssembly.Instance))
                                                throw null
                                        }
                                    } catch (e) {
                                        return new Error("video_error_4")
                                    }
                                    let t;
                                    try {
                                        t = {
                                            env: {
                                                __handle_stack_overflow: () => e(new Error("video_error_1")),
                                                memory: new WebAssembly.Memory({
                                                    initial: 256,
                                                    maximum: 256
                                                })
                                            }
                                        }
                                    } catch (e) {
                                        return new Error("video_error_5")
                                    }
                                    return t
                                }(e);
                                if (l instanceof Error)
                                    return e(l),
                                        A = !0,
                                        s;
                                d = !0,
                                    u = i[1],
                                    o(h) && c++,
                                    WebAssembly.instantiate(i[2], l).then((t => {
                                        if (!function (e) {
                                            return "function" == typeof e.parse && "object" == typeof e.memory
                                        }(t.instance.exports))
                                            return e(new Error("video_error_3")),
                                                void (A = !0);
                                        n = t.instance.exports,
                                            a = new Uint8Array(n.memory.buffer)
                                    }
                                    )).catch((t => {
                                        e(new Error("video_error_6")),
                                            A = !0
                                    }
                                    ))
                            }
                            return s
                        }
                    }
                        ;
                    const n = [101, 103, 119, 99]
                        , a = 28;
                    function o(e) {
                        const t = e.length - a
                            , i = e.slice(t, t + n.length);
                        return n.every(((e, t) => e === i[t]))
                    }
                }
                )(),
                    e.exports = t
            }
            )()
        }
        ,
        7214: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(1659), t)
        },
        9531: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createFMP4Player = void 0;
            const s = i(4359);
            t.createFMP4Player = function (e, t) {
                return new s.FMP4Player(e, t)
            }
        }
        ,
        5601: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.FMP4Error = void 0;
            class i extends Error {
                constructor(e, t, s) {
                    super(t),
                        this.type = e,
                        this.code = s,
                        this.name = "Fmp4Error",
                        Object.setPrototypeOf(this, i.prototype)
                }
            }
            t.FMP4Error = i
        }
        ,
        4359: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.FMP4Player = void 0;
            const s = i(5450)
                , r = i(482)
                , n = i(3408)
                , a = i(7599)
                , o = i(5432)
                , l = i(7699)
                , c = i(8579)
                , u = i(2667);
            t.FMP4Player = class {
                constructor(e, t) {
                    this.scope = e,
                        this._state = new r.BehaviorSubject({
                            state: "IDLE",
                            context: {
                                scope: e,
                                config: (0,
                                    n.createConfig)(t)
                            }
                        })
                }
                get state() {
                    return this._state.pipe((0,
                        r.map)((e => "FAILED" !== e.state ? {
                            state: e.state
                        } : {
                            state: e.state,
                            error: e.error
                        })))
                }
                get volume() {
                    return this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.concatMap)((e => e.audio.volume)))
                }
                setVolume(e) {
                    this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.take)(1), (0,
                                r.onEach)((t => t.audio.setVolume(e)))).subscribe()
                }
                get muted() {
                    return this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.concatMap)((e => e.audio.muted)))
                }
                mute(e) {
                    this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.take)(1), (0,
                                r.onEach)((t => t.audio.mute(e)))).subscribe()
                }
                setPlaybackRate(e) {
                    this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.take)(1), (0,
                                r.onEach)((t => t.renderer.setPlaybackRate(e)))).subscribe()
                }
                get playbackRate() {
                    return this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.concatMap)((e => e.renderer.playbackRate)))
                }
                play() {
                    return this._state.pipe((0,
                        r.take)(1), (0,
                            r.concatMap)((e => {
                                if ("IDLE" !== e.state)
                                    return (0,
                                        r.fromValue)(void 0);
                                const { scope: t, config: i } = e.context;
                                return i.transport(t, i.stream.url).pipe((0,
                                    r.onEach)((e => e.state.pipe((0,
                                        r.mapNotNull)((e => "closed" === e.type ? e.error : null))).subscribe((e => this._state.next({
                                            state: "FAILED",
                                            error: e
                                        }))).closeBy(t))), (0,
                                            r.map)((e => {
                                                const n = e.messages.pipe((0,
                                                    r.mapNotNull)((e => "binary" === e.type ? e.buffer : null)), (0,
                                                        r.multicast)())
                                                    , l = n.pipe((0,
                                                        r.mapNotNull)((e => {
                                                            var t;
                                                            for (const i of null !== (t = (0,
                                                                s.findAtom)(new Uint8Array(e), ["moov", "trak"])) && void 0 !== t ? t : []) {
                                                                const e = (0,
                                                                    s.parseVideoMeta)(i);
                                                                if (e)
                                                                    return e
                                                            }
                                                        }
                                                        )), (0,
                                                            r.multicast)((() => new r.ReplaySubject(1))))
                                                    , d = n.pipe((0,
                                                        r.mapNotNull)((e => {
                                                            var t;
                                                            const [i] = null !== (t = (0,
                                                                s.findAtom)(new Uint8Array(e), ["egwc"])) && void 0 !== t ? t : [];
                                                            return i ? (0,
                                                                s.getEgwc)(i) : null
                                                        }
                                                        )), o.zeroBasedPts)
                                                    , A = (0,
                                                        r.combineLatest)([l, d], (e => e)).pipe((0,
                                                            r.map)((([{ timeScale: e }, t]) => Object.assign(Object.assign({}, t), {
                                                                pts: 1e3 * t.pts / e
                                                            }))), (0,
                                                                r.multicast)())
                                                    , h = (0,
                                                        a.createBufferCollector)(t, n)
                                                    , p = i.renderer(t, this._state, h)
                                                    , f = i.audio(t)
                                                    , m = p.pts.pipe((0,
                                                        r.withLatestFrom)(A, c.measureWallclock))
                                                    , b = (0,
                                                        r.combineLatest)([m, e.stats.serverTime, (0,
                                                            r.withInterval)(1e3)], (([e, t]) => (0,
                                                                c.measureLatency)(e, t)))
                                                    , v = (0,
                                                        c.measureBufferLength)(p.pts, A.pipe((0,
                                                            r.map)((e => e.pts))))
                                                    , y = (0,
                                                        u.createStreamSwitcher)(t, i.stream.streamName, e.send, v, p.pts);
                                                return {
                                                    scope: t,
                                                    config: i,
                                                    transport: e,
                                                    audio: f,
                                                    bufferLength: v,
                                                    wallclock: m,
                                                    latency: b,
                                                    renderer: p,
                                                    streamSwitcher: y
                                                }
                                            }
                                            )), (0,
                                                r.onEach)((e => this._state.next({
                                                    state: "LOADING",
                                                    context: e
                                                })))).pipe((0,
                                                    r.concatMap)((e => e.transport.send({
                                                        eventType: "PLAY",
                                                        stream: i.stream.streamName
                                                    }).pipe((0,
                                                        r.map)((() => e))))), (0,
                                                            r.concatMap)((e => e.bufferLength.pipe((0,
                                                                r.takeUntil)((t => t > e.config.initBufferLength)), (0,
                                                                    r.last)(), (0,
                                                                        r.map)((() => e))))), (0,
                                                                            r.concatMap)((e => e.renderer.render().pipe((0,
                                                                                r.map)((() => e)))))).pipe((0,
                                                                                    r.onEach)((e => this._state.next({
                                                                                        state: "PLAYING",
                                                                                        context: e
                                                                                    }))), (0,
                                                                                        r.onEach)((e => {
                                                                                            e.renderer.buffering.subscribe((t => this._state.next(t ? {
                                                                                                state: "BUFFERING",
                                                                                                context: e
                                                                                            } : {
                                                                                                state: "PLAYING",
                                                                                                context: e
                                                                                            }))).closeBy(t)
                                                                                        }
                                                                                        )), (0,
                                                                                            r.map)((() => { }
                                                                                            )))
                            }
                            )))
                }
                get stream() {
                    return this._state.pipe((0,
                        r.mapNotNull)(l.readyState), (0,
                            r.concatMap)((e => e.streamSwitcher.stream)))
                }
                switchStream(e) {
                    this._state.pipe((0,
                        r.mapNotNull)(l.playingState), (0,
                            r.take)(1), (0,
                                r.onEach)((t => t.streamSwitcher.switch(e)))).subscribe()
                }
                get stats() {
                    return {
                        latency: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.latency))),
                        wallclock: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.wallclock))),
                        bufferLength: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.bufferLength))),
                        bitrate: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.transport.stats.bitrate))),
                        droppedFrames: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.renderer.droppedFrames))),
                        fps: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.renderer.fps))),
                        bandwidth: this._state.pipe((0,
                            r.mapNotNull)(l.playingState), (0,
                                r.distinct)(), (0,
                                    r.switchMap)((e => e.transport.stats.bandwidth)))
                    }
                }
                destroy() {
                    this.scope.close()
                }
            }
        }
        ,
        7699: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.playingState = t.readyState = void 0,
                t.readyState = function (e) {
                    return "LOADING" === e.state || "PLAYING" === e.state || "BUFFERING" === e.state ? e.context : null
                }
                ,
                t.playingState = function (e) {
                    return "PLAYING" === e.state || "BUFFERING" === e.state ? e.context : null
                }
        }
        ,
        8586: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createAudioPlayer = void 0;
            const s = i(482);
            t.createAudioPlayer = function (e, t = 1, i = !1) {
                return r => {
                    const n = new s.BehaviorSubject(t)
                        , a = new s.BehaviorSubject(i);
                    return n.subscribe((t => e.volume = t)).closeBy(r),
                        a.subscribe((t => e.muted = t)).closeBy(r),
                    {
                        volume: n,
                        setVolume: e => n.next(e),
                        muted: a,
                        mute: e => a.next(e)
                    }
                }
            }
        }
        ,
        8680: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createConfig = void 0,
                t.createConfig = function (e) {
                    return Object.assign({
                        initBufferLength: 500
                    }, e)
                }
        }
        ,
        3408: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createConfig = void 0;
            var s = i(8680);
            Object.defineProperty(t, "createConfig", {
                enumerable: !0,
                get: function () {
                    return s.createConfig
                }
            })
        }
        ,
        1659: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createAudioPlayer = t.FMP4Error = t.createFMP4Player = t.mseRenderer = void 0;
            var s = i(3252);
            Object.defineProperty(t, "mseRenderer", {
                enumerable: !0,
                get: function () {
                    return s.mseRenderer
                }
            });
            var r = i(9531);
            Object.defineProperty(t, "createFMP4Player", {
                enumerable: !0,
                get: function () {
                    return r.createFMP4Player
                }
            });
            var n = i(5601);
            Object.defineProperty(t, "FMP4Error", {
                enumerable: !0,
                get: function () {
                    return n.FMP4Error
                }
            });
            var a = i(8586);
            Object.defineProperty(t, "createAudioPlayer", {
                enumerable: !0,
                get: function () {
                    return a.createAudioPlayer
                }
            })
        }
        ,
        5309: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createBufferCollector = void 0;
            const s = i(5450)
                , r = i(482);
            t.createBufferCollector = function (e, t) {
                const i = []
                    , n = new r.BehaviorSubject(0);
                return t.pipe((0,
                    r.map)((e => void 0 !== (0,
                        s.findAtom)(new Uint8Array(e), ["egwc"]) ? e.slice(0, e.byteLength - 32) : e))).subscribe((e => i.push(e))).closeBy(e),
                    function (e) {
                        return e.pipe((0,
                            r.mapNotNull)((e => {
                                var t, i;
                                const [r] = null !== (t = (0,
                                    s.findAtom)(new Uint8Array(e), ["egwc"])) && void 0 !== t ? t : [];
                                return r ? null === (i = (0,
                                    s.getEgwc)(r)) || void 0 === i ? void 0 : i.wallclock : null
                            }
                            )), (0,
                                r.bufferCount)(2, 1), (0,
                                    r.filter)((([e, t]) => e > 0 && t > 0)), (0,
                                        r.mapNotNull)((([e, t]) => t > e ? t - e : null)))
                    }(t).subscribe((e => n.next(n.value + e))).closeBy(e),
                {
                    bufferLength: n,
                    pop: () => {
                        const e = i.splice(0, i.length);
                        return n.next(0),
                            (0,
                                r.fromArray)(e)
                    }
                }
            }
        }
        ,
        2755: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createBufferCollector = void 0;
            var s = i(5309);
            Object.defineProperty(t, "createBufferCollector", {
                enumerable: !0,
                get: function () {
                    return s.createBufferCollector
                }
            })
        }
        ,
        7599: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(2755), t)
        },
        5432: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.zeroBasedPts = void 0;
            var s = i(8818);
            Object.defineProperty(t, "zeroBasedPts", {
                enumerable: !0,
                get: function () {
                    return s.zeroBasedPts
                }
            })
        }
        ,
        8818: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.zeroBasedPts = void 0;
            const s = i(482);
            t.zeroBasedPts = function (e) {
                let t;
                return e.pipe((0,
                    s.map)((e => (void 0 === t && (t = e.pts),
                    {
                        pts: e.pts - t,
                        wallclock: e.wallclock,
                        edgeWallclock: e.edgeWallclock
                    }))))
            }
        }
        ,
        4450: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.mseRenderer = t.toFmp4Error = void 0;
            const s = i(482)
                , r = i(1659)
                , n = i(8090)
                , a = i(3705)
                , o = new Map([[1, "MEDIA_ERR_ABORTED"], [2, "MEDIA_ERR_NETWORK"], [3, "MEDIA_ERR_DECODE"], [4, "MEDIA_ERR_SRC_NOT_SUPPORTED"]]);
            function l(e) {
                var t;
                const i = e.code
                    , s = (null !== (t = o.get(i)) && void 0 !== t ? t : "MEDIA_ERR_UNKNOWN") + "" + (e.message ? ` - ${e.message}` : "");
                return new r.FMP4Error("MEDIA_ERROR", s, i)
            }
            t.toFmp4Error = l,
                t.mseRenderer = function (e, t) {
                    return (i, o, c) => {
                        const u = new s.Subject
                            , d = new s.Subject
                            , A = (0,
                                s.withInterval)(1e3).pipe((0,
                                    s.multicast)())
                            , h = A.pipe((0,
                                s.map)((() => (0,
                                    n.getDroppedFrames)(e))))
                            , p = A.pipe((0,
                                s.map)((() => (0,
                                    n.getDecodedFrames)(e))))
                            , f = (0,
                                a.measureFps)(p, h)
                            , m = (0,
                                a.measurePts)(e);
                        (0,
                            s.fromEvent)(e, "error").pipe((0,
                                s.mapNotNull)((() => e.error))).subscribe((e => o.next({
                                    state: "FAILED",
                                    error: l(e)
                                }))).closeBy(i),
                            function (e) {
                                return new s.Observable((t => {
                                    const i = "ManagedMediaSource" in window ? new window.ManagedMediaSource : new window.MediaSource
                                        , r = (0,
                                            s.closable)((() => {
                                                if ("open" !== i.readyState)
                                                    return;
                                                const e = i.sourceBuffers[0];
                                                e && (e.updating ? e.addEventListener("updateend", (function t() {
                                                    e.removeEventListener("updateend", t),
                                                        "open" === i.readyState && i.endOfStream()
                                                }
                                                )) : i.endOfStream())
                                            }
                                            ));
                                    return e.add(r),
                                        t.onNext(i),
                                        t.onComplete(),
                                        (0,
                                            s.closable)()
                                }
                                ))
                            }(i).pipe((0,
                                s.onEach)(function (e, t) {
                                    return i => {
                                        function r() {
                                            t.onNext({
                                                type: "open",
                                                mediaSource: i
                                            })
                                        }
                                        i.addEventListener("sourceopen", r),
                                            i.addEventListener("sourceended", t.complete),
                                            i.addEventListener("sourceclose", t.complete);
                                        const n = (0,
                                            s.closable)((() => {
                                                i.removeEventListener("sourceopen", r),
                                                    i.removeEventListener("sourceended", t.complete),
                                                    i.removeEventListener("sourceclose", t.complete)
                                            }
                                            ));
                                        e.add(n)
                                    }
                                }(i, u)), (0,
                                    s.onEach)(function (e, t) {
                                        return i => {
                                            t.src = "",
                                                t.load();
                                            const r = URL.createObjectURL(i);
                                            t.src = r,
                                                t.disableRemotePlayback = !0;
                                            const n = (0,
                                                s.closable)((() => {
                                                    t.src = "",
                                                        t.load(),
                                                        URL.revokeObjectURL(r)
                                                }
                                                ));
                                            e.add(n)
                                        }
                                    }(i, e))).subscribe((() => { }
                                    ), (e => o.next({
                                        state: "FAILED",
                                        error: new r.FMP4Error("MEDIA_ERROR", `MediaSource failed - error: ${e.message}`)
                                    }))).closeBy(i),
                            u.pipe((0,
                                s.takeUntil)((e => "open" === e.type)), (0,
                                    s.concatMap)((e => function (e, t, i) {
                                        return new s.Observable((r => {
                                            const n = t.addSourceBuffer(i);
                                            n.mode = "sequence";
                                            const a = (0,
                                                s.closable)((() => {
                                                    "open" === t.readyState && n.abort()
                                                }
                                                ));
                                            return e.add(a),
                                                r.onNext(n),
                                                r.onComplete(),
                                                (0,
                                                    s.closable)()
                                        }
                                        ))
                                    }(i, e.mediaSource, t))), (0,
                                        s.onEach)(function (e, t) {
                                            return i => {
                                                function n() {
                                                    t.onNext({
                                                        type: "updateend"
                                                    })
                                                }
                                                function a(e) {
                                                    t.onError(new r.FMP4Error("MEDIA_ERROR", `SourceBuffer failed - reason: ${e.type}`)),
                                                        t.onComplete()
                                                }
                                                i.addEventListener("updateend", n),
                                                    i.addEventListener("abort", a),
                                                    i.addEventListener("error", a);
                                                const o = (0,
                                                    s.closable)((() => {
                                                        i.removeEventListener("updateend", n),
                                                            i.removeEventListener("abort", a),
                                                            i.removeEventListener("error", a)
                                                    }
                                                    ));
                                                e.add(o)
                                            }
                                        }(i, d)), (0,
                                            s.concatMap)(function (e, t) {
                                                return i => e.bufferLength.pipe((0,
                                                    s.filter)((e => e > 0)), (0,
                                                        s.concatMap)((() => e.pop())), (0,
                                                            s.concatMap)((e => (0,
                                                                n.append)(t, i, e))))
                                            }(c, e))).subscribe((() => { }
                                            ), (e => o.next({
                                                state: "FAILED",
                                                error: new r.FMP4Error("MEDIA_ERROR", `SourceBuffer failed - error: ${e.message}`)
                                            }))).closeBy(i),
                            d.subscribe((() => { }
                            ), (e => o.next({
                                state: "FAILED",
                                error: e
                            }))).closeBy(i),
                            function (e, t, i) {
                                return e.pipe((0,
                                    s.bufferCount)(2, 1, !0), (0,
                                        s.switchMap)((([e, r]) => {
                                            if (!r)
                                                return (0,
                                                    s.fromValue)(e);
                                            const n = 1e3 * i.buffered.end(e);
                                            return t.pipe((0,
                                                s.takeUntil)((e => n - e < 200)), (0,
                                                    s.last)(), (0,
                                                        s.map)((() => r)))
                                        }
                                        )), (0,
                                            s.onEach)((e => i.currentTime = i.buffered.start(e))))
                            }(d.pipe((0,
                                s.mapNotNull)((() => {
                                    const t = e.buffered.length - 1;
                                    return t >= 0 ? t : null
                                }
                                )), (0,
                                    s.distinct)()), m, e).subscribe().closeBy(i),
                            (0,
                                n.safariPauseFix)(e, (0,
                                    s.fromEvent)(e, "pause").pipe((0,
                                        s.map)((() => { }
                                        )))).subscribe().closeBy(i);
                        const b = new s.BehaviorSubject(e.playbackRate);
                        return b.subscribe((t => e.playbackRate = t)).closeBy(i),
                        {
                            pts: m,
                            fps: f,
                            decodedFrames: p,
                            droppedFrames: h,
                            buffering: (0,
                                s.merge)((0,
                                    s.fromEvent)(e, "playing").pipe((0,
                                        s.map)((() => !1))), (0,
                                            s.fromEvent)(e, "waiting").pipe((0,
                                                s.map)((() => !0)))).pipe((0,
                                                    s.multicast)()),
                            render: () => (0,
                                n.play)(e),
                            playbackRate: b,
                            setPlaybackRate: e => b.next(e)
                        }
                    }
                }
        }
        ,
        3252: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.mseRenderer = void 0;
            var s = i(4450);
            Object.defineProperty(t, "mseRenderer", {
                enumerable: !0,
                get: function () {
                    return s.mseRenderer
                }
            })
        }
        ,
        6673: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.append = void 0;
            const s = i(482);
            t.append = function (e, t, i) {
                return new s.Observable((r => {
                    if (e.error)
                        return r.onError(new Error(`SourceBuffer failed - error: ${e.error.message}, code: ${e.error.code}`)),
                            r.onComplete(),
                            (0,
                                s.closable)();
                    function n() {
                        t.removeEventListener("updateend", n),
                            r.onNext(),
                            r.onComplete()
                    }
                    t.addEventListener("updateend", n);
                    try {
                        t.appendBuffer(i)
                    } catch (a) {
                        t.removeEventListener("updateend", n),
                            r.onError(a),
                            r.onComplete()
                    }
                    return (0,
                        s.closable)((() => t.removeEventListener("updateend", n)))
                }
                ))
            }
        }
        ,
        9712: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getCurrentPts = void 0,
                t.getCurrentPts = function (e) {
                    const t = e.buffered.length - 1;
                    if (t < 0)
                        return 0;
                    const i = e.buffered.end(t);
                    if (e.currentTime > i)
                        return i;
                    if (1 === e.buffered.length) {
                        const t = e.buffered.start(0);
                        if (t > e.currentTime)
                            return t
                    }
                    return e.currentTime
                }
        }
        ,
        8330: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getDecodedFrames = void 0,
                t.getDecodedFrames = function (e) {
                    return "getVideoPlaybackQuality" in e ? e.getVideoPlaybackQuality().totalVideoFrames : "webkitDecodedFrameCount" in e ? e.webkitDecodedFrameCount : 0
                }
        }
        ,
        2077: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getDroppedFrames = void 0,
                t.getDroppedFrames = function (e) {
                    return "getVideoPlaybackQuality" in e ? e.getVideoPlaybackQuality().droppedVideoFrames : "webkitDroppedFrameCount" in e ? e.webkitDroppedFrameCount : 0
                }
        }
        ,
        8090: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.safariPauseFix = t.getCurrentPts = t.getDecodedFrames = t.getDroppedFrames = t.append = t.play = void 0;
            var s = i(8244);
            Object.defineProperty(t, "play", {
                enumerable: !0,
                get: function () {
                    return s.play
                }
            });
            var r = i(6673);
            Object.defineProperty(t, "append", {
                enumerable: !0,
                get: function () {
                    return r.append
                }
            });
            var n = i(2077);
            Object.defineProperty(t, "getDroppedFrames", {
                enumerable: !0,
                get: function () {
                    return n.getDroppedFrames
                }
            });
            var a = i(8330);
            Object.defineProperty(t, "getDecodedFrames", {
                enumerable: !0,
                get: function () {
                    return a.getDecodedFrames
                }
            });
            var o = i(9712);
            Object.defineProperty(t, "getCurrentPts", {
                enumerable: !0,
                get: function () {
                    return o.getCurrentPts
                }
            });
            var l = i(775);
            Object.defineProperty(t, "safariPauseFix", {
                enumerable: !0,
                get: function () {
                    return l.safariPauseFix
                }
            })
        }
        ,
        8244: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.play = void 0;
            const s = i(482);
            t.play = function (e) {
                const t = e.play();
                return t ? (0,
                    s.fromPromise)(t) : (0,
                        s.fromValue)(void 0)
            }
        }
        ,
        775: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.safariPauseFix = void 0;
            const s = i(482);
            t.safariPauseFix = function (e, t) {
                return t.pipe((0,
                    s.mapNotNull)((() => {
                        const t = e.buffered.length - 1;
                        return t >= 0 ? t : null
                    }
                    )), (0,
                        s.onEach)((t => {
                            const i = e.buffered.end(t);
                            e.currentTime > i && (e.currentTime = i)
                        }
                        )), (0,
                            s.delay)(0), (0,
                                s.switchMap)((() => (0,
                                    s.fromPromise)(e.play()))))
            }
        }
        ,
        3705: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureFps = t.measurePts = void 0;
            var s = i(8625);
            Object.defineProperty(t, "measurePts", {
                enumerable: !0,
                get: function () {
                    return s.measurePts
                }
            });
            var r = i(8765);
            Object.defineProperty(t, "measureFps", {
                enumerable: !0,
                get: function () {
                    return r.measureFps
                }
            })
        }
        ,
        8765: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureFps = void 0;
            const s = i(482);
            t.measureFps = function (e, t, i = (() => performance.now())) {
                return (0,
                    s.zip)([e, t], (e => e)).pipe((0,
                        s.mapNotNull)((([e, t]) => {
                            const s = e - t;
                            return s > 0 ? [i(), s] : null
                        }
                        )), (0,
                            s.bufferCount)(2, 1), (0,
                                s.mapNotNull)((([[e, t], [i, s]]) => {
                                    const r = s - t;
                                    if (r <= 0)
                                        return null;
                                    const n = i - e;
                                    return n <= 0 ? null : r / n * 1e3
                                }
                                )))
            }
        }
        ,
        8625: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measurePts = void 0;
            const s = i(482)
                , r = i(8090);
            t.measurePts = function (e) {
                let t;
                return (0,
                    s.fromEvent)(e, "timeupdate").pipe((0,
                        s.mapNotNull)((() => {
                            const i = 1e3 * (0,
                                r.getCurrentPts)(e);
                            return i < 0 ? null : (void 0 === t && (t = i),
                                i - t)
                        }
                        )), (0,
                            s.multicast)((() => new s.BehaviorSubject(0))), (0,
                                s.distinct)())
            }
        }
        ,
        8579: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureBufferLength = t.measureWallclock = t.measureLatency = void 0;
            var s = i(2929);
            Object.defineProperty(t, "measureLatency", {
                enumerable: !0,
                get: function () {
                    return s.measureLatency
                }
            });
            var r = i(3586);
            Object.defineProperty(t, "measureWallclock", {
                enumerable: !0,
                get: function () {
                    return r.measureWallclock
                }
            });
            var n = i(1688);
            Object.defineProperty(t, "measureBufferLength", {
                enumerable: !0,
                get: function () {
                    return n.measureBufferLength
                }
            })
        }
        ,
        1688: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureBufferLength = void 0;
            const s = i(482);
            t.measureBufferLength = (e, t) => (0,
                s.combineLatest)([e, t], (([e, t]) => Math.max(0, t - e))).pipe((0,
                    s.multicast)())
        }
        ,
        2929: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureLatency = void 0,
                t.measureLatency = function (e, t, i = Math.round(performance.now())) {
                    return t.serverTime + (i - t.clientTime) - e
                }
        }
        ,
        3586: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureWallclock = void 0,
                t.measureWallclock = function (e, t) {
                    return Math.trunc(e + (t.wallclock - t.pts))
                }
        }
        ,
        7101: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createStreamSwitcher = void 0;
            const s = i(482);
            t.createStreamSwitcher = function (e, t, i, r, n) {
                const a = new s.BehaviorSubject(t)
                    , o = new s.Subject;
                return function (e, t, i, r, n) {
                    return e.pipe((0,
                        s.concatMap)((e => (0,
                            s.fromValue)(e).pipe((0,
                                s.withLatestFrom)(t), (0,
                                    s.switchMap)((([e, t]) => e === t ? (0,
                                        s.fromValue)(void 0) : function (e, t, i, r) {
                                            return t({
                                                eventType: "SWITCH_REQUEST",
                                                stream: e
                                            }).pipe((0,
                                                s.mapNotNull)((([, e]) => {
                                                    var t;
                                                    if ("SWITCH_COMPLETED" !== e.eventType)
                                                        return null;
                                                    if (!e.success)
                                                        throw new Error(`Failed to switch stream - reason: ${null !== (t = e.description) && void 0 !== t ? t : "unknown"}`);
                                                    return e.toStream
                                                }
                                                )), (0,
                                                    s.withLatestFrom)(i, r), (0,
                                                        s.switchMap)((([e, t, i]) => r.pipe((0,
                                                            s.takeUntil)((e => e > i + t)), (0,
                                                                s.last)(), (0,
                                                                    s.map)((() => e))))))
                                        }(e, i, r, n))), (0,
                                            s.mapNotNull)((e => e)), (0,
                                                s.withLatestFrom)(t)))))
                }(o, a, i, r, n).subscribe((([e]) => a.next(e))).closeBy(e),
                {
                    stream: a,
                    switch: e => o.next(e)
                }
            }
        }
        ,
        2667: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createStreamSwitcher = void 0;
            var s = i(7101);
            Object.defineProperty(t, "createStreamSwitcher", {
                enumerable: !0,
                get: function () {
                    return s.createStreamSwitcher
                }
            })
        }
        ,
        8267: (e, t) => {
            "use strict";
            t.r = void 0,
                t.r = class {
                    constructor() {
                        this.rafId = void 0,
                            this.listeners = [],
                            this.referencePts = void 0,
                            this.ptsShift = 0,
                            this.loop = () => {
                                this.update(),
                                    this.rafId = requestAnimationFrame(this.loop)
                            }
                            ,
                            this.loop()
                    }
                    getPts() {
                        const e = performance.now();
                        return this.referencePts ? this.referencePts + e + this.ptsShift : void 0
                    }
                    update() {
                        const e = this.getPts();
                        this.listeners.forEach((t => {
                            t(e)
                        }
                        ))
                    }
                    setPts(e) {
                        const t = performance.now();
                        this.referencePts || (this.referencePts = e - t);
                        const i = this.getPts();
                        i && Math.abs(e - i) > 50 && (this.ptsShift += e > i ? 20 : -20),
                            this.update()
                    }
                    addListener(e) {
                        this.listeners.includes(e) || this.listeners.push(e)
                    }
                    removeListener(e) {
                        const t = this.listeners.indexOf(e);
                        -1 !== t && this.listeners.splice(t, 1)
                    }
                    destroy() {
                        this.rafId && window.cancelAnimationFrame(this.rafId),
                            this.listeners = []
                    }
                }
        }
        ,
        6463: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        2817: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.transportDescrambler = void 0;
            const s = i(5796)
                , r = i(482);
            t.transportDescrambler = function (e = console.warn) {
                return t => {
                    const i = (0,
                        s.cd)(e)
                        , n = (0,
                            r.map)((e => "binary" === e.type ? {
                                type: "binary",
                                buffer: i(e.buffer),
                                received: e.received
                            } : e));
                    return Object.assign(Object.assign({}, t), {
                        messages: t.messages.pipe(n, (0,
                            r.multicast)())
                    })
                }
            }
        }
        ,
        787: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.transportDump = void 0;
            const s = i(482);
            t.transportDump = function (e, t, i) {
                const r = [];
                let n;
                return a => (t.pipe((0,
                    s.filter)((e => e)), (0,
                        s.onEach)((() => {
                            n = a.messages.pipe((0,
                                s.mapNotNull)((e => "binary" === e.type ? e.buffer : null))).subscribe((e => r.push(e)))
                        }
                        ))).subscribe().closeBy(e),
                    t.pipe((0,
                        s.filter)((e => !e && r.length > 0)), (0,
                            s.onEach)((() => null == n ? void 0 : n.close())), (0,
                                s.map)((() => r.splice(0, r.length))), (0,
                                    s.onEach)(i)).subscribe().closeBy(e),
                    e.add((0,
                        s.closable)((() => r.splice(0, r.length)))),
                    a)
            }
        }
        ,
        3864: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.TransportError = void 0;
            class i extends Error {
                constructor(e, t) {
                    super(t),
                        this.type = e,
                        this.name = "TransportError",
                        Object.setPrototypeOf(this, i.prototype)
                }
            }
            t.TransportError = i
        }
        ,
        7692: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createTransportSender = void 0;
            const s = i(482);
            t.createTransportSender = function (e, t, i = (() => performance.now())) {
                let r = 0;
                return n => (0,
                    s.scopedObservable)(((a, o) => {
                        const l = r++
                            , c = Object.assign(Object.assign({}, n), {
                                requestId: l,
                                requestTimestamp: Math.round(i())
                            });
                        t.pipe((0,
                            s.filter)((e => l === e.inReplyTo)), (0,
                                s.take)(1)).subscribe((e => o.onNext([c, e])), o.onError, o.onComplete).closeBy(a),
                            e.next(c)
                    }
                    ))
            }
        }
        ,
        160: function (e, t, i) {
            "use strict";
            var s = this && this.__awaiter || function (e, t, i, s) {
                return new (i || (i = Promise))((function (r, n) {
                    function a(e) {
                        try {
                            l(s.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }
                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }
                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                            t instanceof i ? t : new i((function (e) {
                                e(t)
                            }
                            ))).then(a, o)
                    }
                    l((s = s.apply(e, t || [])).next())
                }
                ))
            }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createArrayBufferTransport = void 0;
            const r = i(482)
                , n = i(9331);
            t.createArrayBufferTransport = function (e) {
                const t = new r.BehaviorSubject({
                    type: "open"
                })
                    , i = new r.Subject
                    , a = new r.Subject;
                let o = 0;
                return a.pipe((0,
                    r.concatMap)((() => e)), (0,
                        r.concatMap)((e => {
                            let t = {
                                start: 0,
                                consumed: 0,
                                buffer: new Uint8Array(e)
                            };
                            return (0,
                                r.fromPromise)(function () {
                                    return s(this, void 0, void 0, (function* () {
                                        for (; t.consumed < t.buffer.byteLength;) {
                                            yield new Promise((e => setTimeout(e)));
                                            const [e, s] = (0,
                                                n.consume)(t);
                                            e && i.next(e),
                                                t = s
                                        }
                                    }
                                    ))
                                }())
                        }
                        ))).subscribe((() => { }
                        ), console.error),
                    (0,
                        r.fromValue)({
                            state: t,
                            messages: i,
                            send: e => {
                                const t = Object.assign(Object.assign({}, e), {
                                    requestId: o++,
                                    requestTimestamp: performance.now()
                                });
                                switch (e.eventType) {
                                    case "PLAY":
                                        {
                                            const e = {
                                                eventType: "PLAY_STATUS",
                                                success: !0,
                                                timeStamp: t.requestTimestamp + 10,
                                                inReplyTo: t.requestId
                                            };
                                            return a.next(),
                                                (0,
                                                    r.fromValue)([t, e])
                                        }
                                    case "SWITCH_REQUEST":
                                        {
                                            const i = {
                                                eventType: "SWITCH_COMPLETED",
                                                fromStream: "",
                                                toStream: e.stream,
                                                description: "",
                                                success: !0,
                                                timeStamp: t.requestTimestamp + 10,
                                                inReplyTo: t.requestId
                                            };
                                            return (0,
                                                r.fromValue)([t, i])
                                        }
                                    case "PING":
                                        {
                                            const e = {
                                                eventType: "PONG",
                                                success: !0,
                                                timeStamp: t.requestTimestamp + 10,
                                                inReplyTo: t.requestId
                                            };
                                            return (0,
                                                r.fromValue)([t, e])
                                        }
                                }
                            }
                            ,
                            stats: {
                                bitrate: new r.BehaviorSubject(0),
                                bandwidth: new r.BehaviorSubject(0),
                                serverTime: new r.BehaviorSubject({
                                    serverTime: 0,
                                    clientTime: 0,
                                    ping: 0
                                })
                            }
                        })
            }
        },
        9331: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.consume = void 0,
                t.consume = function ({ start: e, consumed: t, buffer: i }) {
                    const s = i.slice(t, t + 4).reduce(((e, t) => 256 * e + t), 0)
                        , r = String.fromCharCode(...i.slice(t + 4, t + 8));
                    return "moov" === r || "egwc" === r ? [{
                        type: "binary",
                        buffer: i.slice(e, t + s).buffer,
                        received: performance.now()
                    }, {
                        start: t + s,
                        consumed: t + s,
                        buffer: i
                    }] : [void 0, {
                        start: e,
                        consumed: t + s,
                        buffer: i
                    }]
                }
        }
        ,
        1399: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createTransport = t.createArrayBufferTransport = t.createWebSocketTransport = t.createTransportSender = t.TransportError = t.transportDump = t.transportDescrambler = void 0;
            const n = i(482)
                , a = i(2817)
                , o = i(7257);
            r(i(6463), t);
            var l = i(2817);
            Object.defineProperty(t, "transportDescrambler", {
                enumerable: !0,
                get: function () {
                    return l.transportDescrambler
                }
            });
            var c = i(787);
            Object.defineProperty(t, "transportDump", {
                enumerable: !0,
                get: function () {
                    return c.transportDump
                }
            });
            var u = i(3864);
            Object.defineProperty(t, "TransportError", {
                enumerable: !0,
                get: function () {
                    return u.TransportError
                }
            });
            var d = i(7692);
            Object.defineProperty(t, "createTransportSender", {
                enumerable: !0,
                get: function () {
                    return d.createTransportSender
                }
            });
            var A = i(7257);
            Object.defineProperty(t, "createWebSocketTransport", {
                enumerable: !0,
                get: function () {
                    return A.createWebSocketTransport
                }
            });
            var h = i(160);
            Object.defineProperty(t, "createArrayBufferTransport", {
                enumerable: !0,
                get: function () {
                    return h.createArrayBufferTransport
                }
            }),
                t.createTransport = function (e, t, i = {
                    implementation: o.createWebSocketTransport,
                    plugins: [(0,
                        a.transportDescrambler)()]
                }) {
                    return i.implementation(e, t).pipe((0,
                        n.map)((e => i.plugins.reduce(((e, t) => t(e)), e))))
                }
        },
        8210: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureServerTime = t.measureBandwidth = t.measureBitrate = void 0;
            var s = i(9711);
            Object.defineProperty(t, "measureBitrate", {
                enumerable: !0,
                get: function () {
                    return s.measureBitrate
                }
            });
            var r = i(1595);
            Object.defineProperty(t, "measureBandwidth", {
                enumerable: !0,
                get: function () {
                    return r.measureBandwidth
                }
            });
            var n = i(8466);
            Object.defineProperty(t, "measureServerTime", {
                enumerable: !0,
                get: function () {
                    return n.measureServerTime
                }
            })
        }
        ,
        1595: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureBandwidth = void 0;
            const s = i(5450)
                , r = i(482)
                , n = i(130);
            t.measureBandwidth = function (e, t) {
                return e.pipe((0,
                    r.withLatestFrom)(t), (0,
                        r.mapNotNull)((([e, t]) => {
                            var i;
                            const [r] = null !== (i = (0,
                                s.findAtom)(new Uint8Array(e.buffer), ["egwc"])) && void 0 !== i ? i : [];
                            if (!r)
                                return null;
                            const n = (0,
                                s.getEgwc)(r);
                            return n ? {
                                edgeWallclock: t.clientTime + (n.edgeWallclock - t.serverTime),
                                bytes: e.buffer.byteLength,
                                received: e.received
                            } : null
                        }
                        ))).pipe((0,
                            r.bufferUntil)(((e, t) => {
                                const i = t[0];
                                return !i || e.edgeWallclock - i.edgeWallclock < 35
                            }
                            )), (0,
                                r.mapNotNull)((e => {
                                    const t = e[e.length - 1].received - e[0].edgeWallclock;
                                    if (t <= 1e-4)
                                        return null;
                                    const i = e.reduce(((e, t) => e + t.bytes), 0);
                                    return i <= 0 ? null : 8 * i / t
                                }
                                ))).pipe((0,
                                    n.ewma)(.1), (0,
                                        r.multicast)())
            }
        }
        ,
        9711: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureBitrate = void 0;
            const s = i(5450)
                , r = i(482)
                , n = i(130);
            t.measureBitrate = function (e, t = 2 / 101) {
                return e.pipe((0,
                    r.mapNotNull)((e => {
                        var t;
                        const [i] = null !== (t = (0,
                            s.findAtom)(new Uint8Array(e), ["egwc"])) && void 0 !== t ? t : [];
                        if (!i)
                            return null;
                        const r = (0,
                            s.getEgwc)(i);
                        return r ? [r.wallclock, e.byteLength] : null
                    }
                    )), (0,
                        r.bufferCount)(2, 1), (0,
                            r.mapNotNull)((([[e, t], [i]]) => i - e <= 0 ? null : 8 * t / (i - e))), (0,
                                n.ewma)(t), (0,
                                    r.multicast)((() => new r.BehaviorSubject(0))))
            }
        }
        ,
        8466: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.measureServerTime = void 0;
            const s = i(482);
            t.measureServerTime = function (e, t = (() => performance.now())) {
                return (0,
                    s.fromValue)(0).pipe((0,
                        s.delay)(1500), (0,
                            s.concatMap)((() => e({
                                eventType: "PING"
                            }))), (0,
                                s.map)((([{ requestTimestamp: e }, { timeStamp: i }]) => {
                                    const s = t();
                                    return {
                                        serverTime: i,
                                        clientTime: s,
                                        ping: (s - e) / 2
                                    }
                                }
                                )), (0,
                                    s.repeat)()).pipe((0,
                                        s.scan)(((e, t) => t.ping < e.ping ? t : e), {
                                            serverTime: 0,
                                            clientTime: 0,
                                            ping: Number.MAX_VALUE
                                        }), (0,
                                            s.distinct)(((e, t) => e.serverTime === t.serverTime)), (0,
                                                s.multicast)())
            }
        }
        ,
        4175: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.arraysEqual = void 0,
                t.arraysEqual = function (e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t[i])
                            return !1;
                    return !0
                }
        }
        ,
        1387: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.ewma = void 0;
            const s = i(482);
            t.ewma = e => (0,
                s.scan)(((t, i) => i * e + t * (1 - e)), 0)
        }
        ,
        5133: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getBytes = void 0,
                t.getBytes = function (e, t, i) {
                    const s = [];
                    for (let r = t; r < i; r++)
                        s.push(e.getUint8(r));
                    return s
                }
        }
        ,
        130: function (e, t, i) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, i, s) {
                void 0 === s && (s = i);
                var r = Object.getOwnPropertyDescriptor(t, i);
                r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                }),
                    Object.defineProperty(e, s, r)
            }
                : function (e, t, i, s) {
                    void 0 === s && (s = i),
                        e[s] = t[i]
                }
            )
                , r = this && this.__exportStar || function (e, t) {
                    for (var i in e)
                        "default" === i || Object.prototype.hasOwnProperty.call(t, i) || s(t, e, i)
                }
                ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                r(i(4175), t),
                r(i(5133), t),
                r(i(1387), t)
        },
        7257: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createWebSocketTransport = void 0;
            const s = i(482)
                , r = i(8210)
                , n = i(3864)
                , a = i(7692);
            t.createWebSocketTransport = function (e, t, i = (e => new WebSocket(e))) {
                return new s.Observable((o => {
                    const l = new s.ReplaySubject(1)
                        , c = new s.Subject
                        , u = new s.Subject
                        , d = c.pipe((0,
                            s.mapNotNull)((e => {
                                try {
                                    return "text" !== e.type ? null : JSON.parse(e.raw)
                                } catch (t) {
                                    return null
                                }
                            }
                            )), (0,
                                s.multicast)())
                        , A = d.pipe((0,
                            s.mapNotNull)((e => "STREAM_SHUTDOWN" !== e.eventType ? e : null)))
                        , h = (0,
                            a.createTransportSender)(u, A)
                        , p = i(t);
                    function f(e) {
                        c.next("string" == typeof e.data ? {
                            type: "text",
                            raw: e.data
                        } : {
                            type: "binary",
                            buffer: e.data,
                            received: performance.now()
                        })
                    }
                    function m() {
                        l.next({
                            type: "closed",
                            error: new Error("Websocket closed")
                        }),
                            l.complete(),
                            o.onError(new Error("Websocket closed"))
                    }
                    function b(e) {
                        const t = (() => {
                            if (1e3 === e.code)
                                return;
                            if (1006 === e.code)
                                return new n.TransportError("NETWORK_ERROR", `WebSocket closed - code: ${e.code}, reason: slow consumer`);
                            const t = `WebSocket closed - code: ${e.code}, reason: ${e.reason || "unknown"}`;
                            return 4e3 === e.code ? new n.TransportError("STREAM_SECURITY_ERROR", t) : new Error(t)
                        }
                        )();
                        l.next({
                            type: "closed",
                            error: t
                        }),
                            l.complete()
                    }
                    function v() {
                        p.removeEventListener("message", f),
                            p.removeEventListener("error", m),
                            p.removeEventListener("close", b),
                            p.close(),
                            c.complete(),
                            u.complete()
                    }
                    return p.binaryType = "arraybuffer",
                        l.pipe((0,
                            s.filter)((e => "open" !== e.type))).subscribe(v).closeBy(e),
                        u.pipe((0,
                            s.map)((e => JSON.stringify(e)))).subscribe((e => {
                                if (1 !== p.readyState)
                                    return l.next({
                                        type: "closed",
                                        error: new Error("Unable to send message - invalid websocket state")
                                    }),
                                        void l.complete();
                                p.send(e)
                            }
                            ), (e => {
                                l.next({
                                    type: "closed",
                                    error: e
                                }),
                                    l.complete()
                            }
                            )).closeBy(e),
                        (0,
                            s.closable)(v).closeBy(e),
                        d.pipe((0,
                            s.mapNotNull)((e => "STREAM_SHUTDOWN" === e.eventType ? e : null))).subscribe((() => {
                                l.next({
                                    type: "closed",
                                    error: new n.TransportError("STREAM_SHUTDOWN", "Stream shutdown")
                                }),
                                    l.complete()
                            }
                            ), (e => {
                                l.next({
                                    type: "closed",
                                    error: e
                                }),
                                    l.complete()
                            }
                            )).closeBy(e),
                        p.addEventListener("message", f),
                        p.addEventListener("error", m),
                        p.addEventListener("close", b),
                        p.addEventListener("open", (function e() {
                            p.removeEventListener("open", e),
                                l.next({
                                    type: "open"
                                });
                            const t = c.pipe((0,
                                s.mapNotNull)((e => "binary" === e.type ? e : null)), (0,
                                    s.multicast)())
                                , i = (0,
                                    r.measureServerTime)(h);
                            o.onNext({
                                state: l,
                                messages: c,
                                send: h,
                                stats: {
                                    serverTime: i,
                                    bitrate: (0,
                                        r.measureBitrate)(t.pipe((0,
                                            s.map)((e => e.buffer)))),
                                    bandwidth: (0,
                                        r.measureBandwidth)(t, i)
                                }
                            }),
                                o.onComplete()
                        }
                        )),
                        (0,
                            s.closable)()
                }
                ))
            }
        }
        ,
        9433: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.VideoDecoderError = void 0;
            class i extends Error {
                constructor(e) {
                    super(e),
                        this.name = "VideoDecoderError",
                        Object.setPrototypeOf(this, i.prototype)
                }
            }
            t.VideoDecoderError = i
        }
        ,
        7255: (e, t, i) => {
            "use strict";
            t.$4 = void 0;
            var s = i(9931);
            Object.defineProperty(t, "$4", {
                enumerable: !0,
                get: function () {
                    return s.createWebCodecVideoDecoder
                }
            });
            i(9433)
        }
        ,
        5113: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createWebCodecVideoDecoder = void 0;
            const s = i(5450)
                , r = i(9433)
                , n = i(4117);
            t.createWebCodecVideoDecoder = function (e) {
                let t, i;
                const a = [];
                function o(t) {
                    try {
                        const i = {
                            x: 0,
                            y: 0,
                            width: t.codedWidth,
                            height: t.codedHeight
                        }
                            , s = t.allocationSize({
                                rect: i
                            })
                            , n = new ArrayBuffer(s);
                        t.copyTo(n, {
                            rect: i
                        }).then((s => {
                            const o = a.shift();
                            if (!o)
                                return t.close(),
                                    void e(new r.VideoDecoderError(`No wallclock for video frame - pts: ${t.timestamp}`));
                            e({
                                pts: t.timestamp,
                                wallclock: o,
                                codedWidth: t.codedWidth,
                                codedHeight: t.codedHeight,
                                format: t.format,
                                visibleRect: i,
                                data: n,
                                layout: s
                            }),
                                t.close()
                        }
                        )).catch((i => {
                            t.close(),
                                e(i)
                        }
                        ))
                    } catch (i) {
                        t.close(),
                            e(new r.VideoDecoderError("Out of memory"))
                    }
                }
                function l(t) {
                    if ("EncodingError" === t.name)
                        return console.error(t),
                            void u();
                    e(t)
                }
                function c(e) {
                    var i;
                    const r = null !== (i = (0,
                        s.findAtom)(e.data, ["trak"])) && void 0 !== i ? i : [];
                    for (const n of r) {
                        const e = (0,
                            s.parseVideoMeta)(n);
                        e && (t = e)
                    }
                }
                function u() {
                    t && (i && i.close(),
                        i = new VideoDecoder({
                            output: o,
                            error: l
                        }),
                        i.configure({
                            codec: t.codec,
                            codedWidth: t.codedWidth,
                            codedHeight: t.codedHeight,
                            description: t.description
                        }))
                }
                function d(e, r, o) {
                    if (!t)
                        return;
                    const l = (0,
                        n.createVideoChunk)(t, e, r);
                    if (!l)
                        return;
                    if (!i)
                        return;
                    const { wallclock: c } = (0,
                        s.getEgwc)(o);
                    a.push(c),
                        i.decode(l)
                }
                return {
                    push: function (e) {
                        const t = (0,
                            s.extractAtoms)(new Uint8Array(e));
                        let i = 0;
                        for (; i < t.length;) {
                            const e = t[i];
                            "moov" !== e.name ? "moof" !== e.name ? i += 1 : (d(e, t[i + 1], t[t.length - 1]),
                                i += 2) : (c(e),
                                    u(),
                                    i += 1)
                        }
                    },
                    close: function () {
                        i && "closed" !== i.state && (a.splice(0),
                            i.close()),
                            i = void 0,
                            t = void 0
                    }
                }
            }
        }
        ,
        4117: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createVideoChunk = void 0;
            const s = i(5450);
            t.createVideoChunk = function (e, t, i) {
                var r, n;
                const [a] = null !== (r = (0,
                    s.findAtom)(t.data, ["traf", "tfhd"])) && void 0 !== r ? r : [];
                if (!a)
                    return;
                const [o] = null !== (n = (0,
                    s.findAtom)(t.data, ["traf", "tfdt"])) && void 0 !== n ? n : [];
                if (!o)
                    return;
                if ((0,
                    s.toInt)(a.data.slice(4, 8)) !== e.id)
                    return;
                const l = (0,
                    s.toInt)(o.data.slice(0, 1))
                    , c = (0,
                        s.toInt)(o.data.slice(4, 0 === l ? 8 : 16));
                return new EncodedVideoChunk({
                    type: "key",
                    timestamp: 1e3 * c / e.timeScale,
                    data: i.data
                })
            }
        }
        ,
        9931: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.createWebCodecVideoDecoder = void 0;
            var s = i(5113);
            Object.defineProperty(t, "createWebCodecVideoDecoder", {
                enumerable: !0,
                get: function () {
                    return s.createWebCodecVideoDecoder
                }
            })
        }
        ,
        3738: (e, t, i) => {
            "use strict";
            i.d(t, {
                version: () => s
            });
            const s = "13.52.2_13.20240327.131108_efde613f"
        }
    }
        , t = {};
    function i(s) {
        var r = t[s];
        if (void 0 !== r)
            return r.exports;
        var n = t[s] = {
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i),
            n.exports
    }
    i.d = (e, t) => {
        for (var s in t)
            i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            })
    }
        ,
        i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        i.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ;
    var s = {};
    return (() => {
        "use strict";
        i.r(s),
            i.d(s, {
                BrowserFeatures: () => e.BrowserFeatures,
                EvoError: () => be,
                EvoPlayerReactiveProps: () => l.EvoPlayerReactiveProps,
                EvoPlayerSubscribers: () => l.EvoPlayerSubscribers,
                EvoVideoComponentError: () => t.EvoVideoComponentError,
                EvoVideoPlayerAPI: () => l.EvoVideoPlayerAPI,
                FullTableSettings: () => n.FullTableSettings,
                GlobalConfig: () => l.GlobalConfig,
                LoadingMetrics: () => o.LoadingMetrics,
                ManifestFetchStats: () => o.ManifestFetchStats,
                ManifestLogic: () => W,
                MediaPlayerEventData: () => a.MediaPlayerEventData,
                PlaybackAttemptEvent: () => o.PlaybackAttemptEvent,
                PlaybackData: () => a.PlaybackData,
                PlaybackError: () => ee,
                PlayerName: () => V,
                PlayerStats: () => o.PlayerStats,
                Publisher: () => r.Publisher,
                Quality: () => L,
                QualityIndex: () => D,
                QualityMode: () => j,
                QualityResolution: () => F,
                RawConfig: () => l.RawConfig,
                SecurityError: () => J,
                Statistics: () => o.Statistics,
                Stats: () => o.Stats,
                StatsCallbacks: () => o.StatsCallbacks,
                StatsClientData: () => o.StatsClientData,
                StatsComponentData: () => o.StatsComponentData,
                StatsDeviceData: () => o.StatsDeviceData,
                StatsError: () => o.StatsError,
                StatsHeartbeat: () => o.StatsHeartbeat,
                StatsHeartbeatLogicData: () => o.StatsHeartbeatLogicData,
                StatsInfo: () => o.StatsInfo,
                StatsInfoData: () => o.StatsInfoData,
                StatsInitialized: () => o.StatsInitialized,
                StatsInitializedMetrics: () => o.StatsInitializedMetrics,
                StatsInitializedSessionData: () => o.StatsInitializedSessionData,
                StatsLogicData: () => o.StatsLogicData,
                StatsMessageMap: () => o.StatsMessageMap,
                StatsMetricsData: () => o.StatsMetricsData,
                StatsPlaybackAttempt: () => o.StatsPlaybackAttempt,
                StatsPlaybackAttemptLogicData: () => o.StatsPlaybackAttemptLogicData,
                StatsPlaybackStarted: () => o.StatsPlaybackStarted,
                StatsPlaybackStartedLogicData: () => o.StatsPlaybackStartedLogicData,
                StatsSessionData: () => o.StatsSessionData,
                StatsVideoData: () => o.StatsVideoData,
                StreamProviderErrorTypes: () => te,
                StreamTemplateProps: () => l.StreamTemplateProps,
                Subscriber: () => r.Subscriber,
                SubscriberFn: () => l.SubscriberFn,
                SupportError: () => ie,
                TableSettings: () => n.TableSettings,
                TableSettingsKeyPrefix: () => n.TableSettingsKeyPrefix,
                UnknownError: () => se,
                VideoPlaylist: () => z,
                VideoQualityString: () => U,
                WithGetter: () => l.WithGetter,
                WithSetGet: () => l.WithSetGet,
                WithSetter: () => l.WithSetter,
                WithSubUnsub: () => l.WithSubUnsub,
                createEvoPlayer: () => en,
                defaultReactiveProps: () => ne,
                defaultTableSettings: () => ai,
                detectBrowserFeatures: () => w,
                version: () => vt.version
            });
        var e = {};
        i.r(e),
            i.d(e, {
                g: () => w
            });
        var t = {};
        i.r(t),
            i.d(t, {
                zY: () => H,
                _P: () => W,
                OD: () => $,
                Q3: () => ee,
                dl: () => q,
                Rj: () => V,
                aF: () => K,
                nJ: () => L,
                BA: () => D,
                U9: () => j,
                o4: () => F,
                _B: () => J,
                Ji: () => te,
                OW: () => ie,
                qz: () => Z,
                Ko: () => se,
                L6: () => z,
                Bl: () => U,
                GF: () => re,
                $s: () => ne,
                _e: () => G,
                DJ: () => Y,
                AS: () => X
            });
        var r = {};
        i.r(r),
            i.d(r, {
                a: () => zt
            });
        var n = {};
        i.r(n),
            i.d(n, {
                L: () => ai,
                O: () => oi
            });
        var a = {};
        i.r(a);
        var o = {};
        i.r(o);
        var l = {};
        function c(e, t, i) {
            let s = !1
                , r = t => {
                    if (!s)
                        try {
                            null == e || e(t)
                        } catch (i) {
                            if (i instanceof Error)
                                return void (null == n || n(i));
                            throw new Error(`Invalid error thrown - ${i}`)
                        }
                }
                , n = e => {
                    s || (null == t || t(e),
                        null == a || a())
                }
                , a = () => {
                    s || (s = !0,
                        null == i || i())
                }
                ;
            return {
                onNext(e) {
                    null == r || r(e)
                },
                onError(e) {
                    null == n || n(e)
                },
                onComplete() {
                    null == a || a(),
                        r = void 0,
                        n = void 0,
                        a = void 0
                }
            }
        }
        i.r(l);
        class u {
            constructor(e) {
                this.observe = e
            }
            pipe(...e) {
                return e.reduce(((e, t) => t(e)), this)
            }
            subscribe(e, t, i) {
                return this.observe(c(e, t, i))
            }
        }
        const d = (e = ((e, t) => e === t)) => t => new u((i => {
            let s, r = !1;
            return t.subscribe((t => {
                if (!r)
                    return r = !0,
                        s = t,
                        void i.onNext(t);
                r && !e(t, s) && i.onNext(t),
                    s = t
            }
            ), i.onError, i.onComplete)
        }
        ));
        function A() {
            const e = document.createElement("canvas");
            return !!window.WebGLRenderingContext && e && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
        }
        function h() {
            const e = document.createElement("canvas");
            return !!window.HTMLCanvasElement && !!(e && e.getContext && e.getContext("2d"))
        }
        function p() {
            const e = window.OffscreenCanvas;
            return !!e && !!new e(10, 10).getContext("webgl")
        }
        function f() {
            const e = document.createElement("video");
            return !(!e.canPlayType || !e.canPlayType("application/vnd.apple.mpegURL"))
        }
        function m() {
            const e = window.ManagedMediaSource || window.MediaSource;
            return !!e && (!(!window.ManagedSourceBuffer && !window.SourceBuffer) && {
                h264: ['video/mp4; codecs="avc1.64001e,mp4a.40.2"', 'video/mp4; codecs="avc1.64001f,mp4a.40.2"', 'video/mp4; codecs="avc1.640028,mp4a.40.2"'].every((t => e.isTypeSupported(t))),
                av1: ['video/mp4; codecs="avc1.640028,mp4a.40.2"'].every((t => e.isTypeSupported(t)))
            })
        }
        function b() {
            try {
                if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                    const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (e instanceof WebAssembly.Module)
                        return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                }
            } catch (e) { }
            return !1
        }
        function v() {
            try {
                if (b() && window.SharedArrayBuffer)
                    return !!new window.SharedArrayBuffer(1)
            } catch (e) { }
            return !1
        }
        function y() {
            if ("VideoDecoder" in window) {
                const e = [{
                    codec: "avc1.64001e"
                }, {
                    codec: "avc1.64001f"
                }, {
                    codec: "avc1.640028"
                }]
                    , t = [{
                        codec: "av01.0.04M.08"
                    }]
                    , i = Promise.all(e.map((e => window.VideoDecoder.isConfigSupported(e)))).then((e => e.every((({ supported: e }) => e)))).catch((() => !1))
                    , s = Promise.all(t.map((e => window.VideoDecoder.isConfigSupported(e)))).then((e => e.every((({ supported: e }) => e)))).catch((() => !1));
                return Promise.all([i, s]).then((([e, t]) => ({
                    h264: e,
                    av1: t
                })))
            }
            return Promise.resolve(!1)
        }
        function g() {
            if ("AudioDecoder" in window) {
                const e = [{
                    codec: "mp4a.40.2",
                    numberOfChannels: 2,
                    sampleRate: 48e3
                }, {
                    codec: "opus",
                    numberOfChannels: 2,
                    sampleRate: 48e3
                }];
                return Promise.all(e.map((e => window.AudioDecoder.isConfigSupported(e)))).then((([{ supported: e }, { supported: t }]) => ({
                    aac: e,
                    opus: t
                })))
            }
            return Promise.resolve(!1)
        }
        function w() {
            const e = Promise.resolve({
                hls: f()
            })
                , t = Promise.resolve({
                    mse: m()
                })
                , i = Promise.all([b(), v()]).then((([e, t]) => e ? {
                    webAssembly: {
                        threads: t
                    }
                } : {
                    webAssembly: !1
                }))
                , s = [e, t, Promise.all([y(), g()]).then((([e, t]) => ({
                    webCodec: {
                        video: e,
                        audio: t
                    }
                }))), Promise.resolve({
                    webAudio: "probably" === window.document.createElement("audio").canPlayType('audio/mp4; codecs="mp4a.40.2"')
                }), i, new Promise((e => {
                    const t = new Image;
                    t.onload = () => e(!0),
                        t.onerror = () => e(!1),
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
                }
                )).then((e => ({
                    webP: e
                }))), Promise.resolve({
                    audioWorklet: "AudioWorklet" in window
                }), Promise.resolve({
                    audioContext: ["AudioContext", "webkitAudioContext"].some((e => e in window))
                }), Promise.resolve({
                    canvas: {
                        context2d: h(),
                        contextWebGl: A(),
                        offscreen: p()
                    }
                })];
            return Promise.all(s).then((e => e.reduce(((e, t) => Object.assign(Object.assign({}, e), t)), {}))).then((e => e))
        }
        function S(e, t) {
            return t >= e.length || "" === e[t] ? 0 : parseInt(e[t], 10)
        }
        function E(e = "", t) {
            const i = e.split(/[._]/i)
                , s = t.split(/[._]/i);
            for (let r = 0; r < Math.max(i.length, s.length); r += 1) {
                const e = S(i, r)
                    , t = S(s, r);
                if (e > t)
                    return 1;
                if (e < t)
                    return -1
            }
            return 0
        }
        var P;
        !function (e) {
            e[e.Phone = 0] = "Phone",
                e[e.Tablet = 1] = "Tablet",
                e[e.Desktop = 2] = "Desktop"
        }(P || (P = {}));
        const T = {
            [P.Phone]: "mobile",
            [P.Tablet]: "mobile",
            [P.Desktop]: "desktop"
        };
        var I, M, O, C, x;
        !function (e) {
            e[e.Android = 0] = "Android",
                e[e.Ios = 1] = "Ios",
                e[e.Windows = 2] = "Windows",
                e[e.Macosx = 3] = "Macosx",
                e[e.Linux = 4] = "Linux",
                e[e.Other = 5] = "Other",
                e[e.IpadOs = 6] = "IpadOs"
        }(I || (I = {})),
            function (e) {
                e[e.Other = 0] = "Other",
                    e[e.Chrome = 1] = "Chrome",
                    e[e.Safari = 2] = "Safari",
                    e[e.Edge = 3] = "Edge",
                    e[e.IE = 4] = "IE",
                    e[e.Firefox = 5] = "Firefox",
                    e[e.UCBrowser = 6] = "UCBrowser",
                    e[e.UCBrowserChina = 7] = "UCBrowserChina",
                    e[e.MiBrowser = 8] = "MiBrowser",
                    e[e.HuaweiBrowser = 9] = "HuaweiBrowser",
                    e[e.OppoBrowser = 10] = "OppoBrowser",
                    e[e.MeizuBrowser = 11] = "MeizuBrowser",
                    e[e.QQBrowser = 12] = "QQBrowser",
                    e[e.Opera = 13] = "Opera",
                    e[e.YandexBrowser = 14] = "YandexBrowser",
                    e[e.AtomBrowser = 15] = "AtomBrowser",
                    e[e.SamsungBrowser = 16] = "SamsungBrowser",
                    e[e.Sogou = 17] = "Sogou",
                    e[e.Maxthon = 18] = "Maxthon",
                    e[e.Threesixty = 19] = "Threesixty",
                    e[e.VivoBrowser = 20] = "VivoBrowser",
                    e[e.WhaleBrowser = 21] = "WhaleBrowser",
                    e[e.CocCocBrowser = 22] = "CocCocBrowser",
                    e[e.LiebaoBrowser = 23] = "LiebaoBrowser",
                    e[e.BaiduBrowser = 24] = "BaiduBrowser"
            }(M || (M = {})),
            function (e) {
                e.IpadNonRetina = "ipad-non-retina",
                    e.IpadRetina = "ipad-retina",
                    e.IpadPro = "ipad-pro",
                    e.IpadPro11inch = "ipad-pro-11inch",
                    e.Ipad7 = "ipad7-9",
                    e.Ipad4 = "ipad4-5-10",
                    e.Ipad2 = "ipad2-3",
                    e.Ipad6Mini = "ipad-6-mini"
            }(O || (O = {})),
            function (e) {
                e.Iphone4 = "iphone4",
                    e.Iphone5 = "iphone5",
                    e.Iphone6 = "iphone6-8",
                    e.IphonePlusZoomed = "iphone-plus-zoomed",
                    e.Iphone6Plus = "iphone6Plus",
                    e.Iphone10 = "iphone10-11",
                    e.Iphone10Zoomed = "iphone10Zoomed",
                    e.Iphone10ProMax = "iphone10ProMax",
                    e.Iphone10R = "iphone10R",
                    e.Iphone10RZoomed = "iphone10RZoomed",
                    e.Iphone12 = "iphone12-13",
                    e.Iphone12ProMax = "iphone12ProMax",
                    e.Iphone14 = "iphone14-15"
            }(C || (C = {})),
            function (e) {
                e.UNKNOWN = "UNKNOWN",
                    e.iPAD = "iPAD",
                    e.iPHONE = "iPHONE"
            }(x || (x = {}));
        const _ = [{
            min: 320,
            max: 480,
            ratio: 2,
            type: C.Iphone4
        }, {
            min: 320,
            max: 568,
            ratio: 2,
            type: C.Iphone5
        }, {
            min: 375,
            max: 667,
            ratio: 2,
            type: C.Iphone6
        }, {
            min: 375,
            max: 667,
            ratio: 3,
            type: C.Iphone6
        }, {
            min: 414,
            max: 736,
            ratio: 3,
            type: C.Iphone6
        }, {
            min: 375,
            max: 812,
            ratio: 3,
            type: C.Iphone10
        }, {
            min: 320,
            max: 693,
            ratio: 3,
            type: C.Iphone10
        }, {
            min: 414,
            max: 896,
            ratio: 3,
            type: C.Iphone10
        }, {
            min: 414,
            max: 896,
            ratio: 2,
            type: C.Iphone10
        }, {
            min: 375,
            max: 812,
            ratio: 2,
            type: C.Iphone10
        }, {
            min: 390,
            max: 844,
            ratio: 3,
            type: C.Iphone12
        }, {
            min: 428,
            max: 926,
            ratio: 3,
            type: C.Iphone12
        }, {
            min: 393,
            max: 852,
            ratio: 3,
            type: C.Iphone14
        }, {
            min: 430,
            max: 932,
            ratio: 3,
            type: C.Iphone14
        }, {
            min: 768,
            max: 1024,
            ratio: 1,
            type: O.IpadNonRetina
        }, {
            min: 768,
            max: 1024,
            ratio: 2,
            type: O.IpadRetina
        }, {
            min: 834,
            max: 1194,
            ratio: 2,
            type: O.IpadPro11inch
        }, {
            min: 1024,
            max: 1366,
            ratio: 2,
            type: O.IpadPro
        }, {
            min: 810,
            max: 1080,
            ratio: 2,
            type: O.Ipad7
        }, {
            min: 820,
            max: 1180,
            ratio: 2,
            type: O.Ipad4
        }, {
            min: 834,
            max: 1112,
            ratio: 2,
            type: O.Ipad2
        }, {
            min: 744,
            max: 1133,
            ratio: 2,
            type: O.Ipad6Mini
        }]
            , R = [M.Chrome, M.Safari, M.Firefox, M.Opera, M.QQBrowser, M.YandexBrowser, M.UCBrowser, M.Sogou, M.Maxthon, M.Threesixty, M.BaiduBrowser];
        var k = function (e, t) {
            var i = {};
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (s = Object.getOwnPropertySymbols(e); r < s.length; r++)
                    t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (i[s[r]] = e[s[r]])
            }
            return i
        };
        const B = {
            name: "unknown",
            codeName: x.UNKNOWN
        }
            , N = [{
                name: "iPad",
                codeName: x.iPAD,
                userAgentMask: /iPad|Intel Mac OS X/i
            }, {
                name: "iPhone",
                codeName: x.iPHONE,
                userAgentMask: /iPhone|iPod/i
            }]
            , L = {
                "4K": "4K",
                "2K": "2K",
                "HD+": "HD+",
                HD: "HD",
                HIGH: "HIGH",
                MEDIUM: "MEDIUM",
                LOW: "LOW",
                LOWEST: "LOWEST"
            }
            , D = {
                LOWEST: 0,
                LOW: 1,
                MEDIUM: 2,
                HIGH: 3,
                HD: 4,
                "HD+": 5,
                "2K": 6,
                "4K": 7
            }
            , F = {
                [L.LOWEST]: "234p",
                [L.LOW]: "360p",
                [L.MEDIUM]: "486p",
                [L.HIGH]: "720p",
                [L.HD]: "1080p",
                [L["HD+"]]: "1080p",
                [L["2K"]]: "1440p",
                [L["4K"]]: "2160p"
            };
        var j, U, W, V, Q;
        !function (e) {
            e.AUTO = "AUTO",
                e.MANUAL = "MANUAL",
                e.INTERNAL = "INTERNAL"
        }(j || (j = {})),
            function (e) {
                e["4K"] = "4k",
                    e["2K"] = "2k",
                    e["HD+"] = "hd2",
                    e.HD = "hd",
                    e.HIGH = "hi",
                    e.MEDIUM = "med",
                    e.LOW = "low",
                    e.LOWEST = "slow",
                    e.AUTO = "auto"
            }(U || (U = {})),
            function (e) {
                e[e.BROWSER = 0] = "BROWSER",
                    e[e.MANUAL = 1] = "MANUAL",
                    e[e.WEBSOCKET = 2] = "WEBSOCKET"
            }(W || (W = {})),
            function (e) {
                e.Fmp4 = "fmp4",
                    e.WebCodec = "webcodec",
                    e.Wasm = "wasm",
                    e.Hls = "hls",
                    e.Flipbook = "flipbook",
                    e.None = "NONE"
            }(V || (V = {})),
            function (e) {
                e.AUDIO = "AUDIO",
                    e.VIDEO = "VIDEO",
                    e.AUDIOVIDEO = "AUDIO_VIDEO"
            }(Q || (Q = {}));
        const H = "Failed to fetch"
            , G = {
                LOG: "log",
                LOADING: "loading",
                PLAYING: "playing",
                FLVJSERROR: "flvJsError",
                MEDIAERROR: "mediaError",
                ERROR: "error"
            }
            , Y = {
                UPGRADE: "UPGRADE",
                DOWNGRADE: "DOWNGRADE",
                MANUAL_CHANGE: "MANUAL_CHANGE",
                PLAYER_ATTEMPT: "PLAYER_ATTEMPT",
                PLAYER_STARTED: "PLAYER_STARTED",
                PLAYER_FAILED: "PLAYER_FAILED",
                RECONNECT: "RECONNECT",
                MANIFEST_STATS: "MANIFEST_STATS",
                QUALITY_MODE_CHANGED: "QUALITY_MODE_CHANGED",
                PLAYING: "PLAYING",
                WAITING: "WAITING",
                STREAM_ID_CHANGED: "STREAM_ID_CHANGED",
                WARNING: "WARNING"
            };
        var q, z;
        !function (e) {
            e.ManualChange = "MANUAL_CHANGE",
                e.InsufficientBandwidth = "INSUFFICIENT_BANDWIDTH",
                e.SufficientBandwidth = "SUFFICIENT_BANDWIDTH",
                e.MultiplePlayerFailureCalls = "MULTIPLE_PLAYER_FAILURE_CALLS",
                e.MediaTimeout = "MEDIA_TIMEOUT",
                e.InternalOverride = "INTERNAL_OVERRIDE",
                e.SwitchToAuto = "SWITCH_TO_AUTO",
                e.StreamIdChangeRequested = "STREAM_ID_CHANGE_REQUESTED",
                e.UnknownReason = "UNKNOWN_REASON"
        }(q || (q = {})),
            function (e) {
                e.Default = "view1",
                    e.Classic = "view2",
                    e.Classic3 = "view3",
                    e.Classic4 = "view4",
                    e.Immersive = "hd1",
                    e.Single = "hd2",
                    e.SlingshotRoulette = "slingshot",
                    e.Static1 = "view1-static",
                    e.Static2 = "view2-static"
            }(z || (z = {}));
        const X = {
            IDLE: "IDLE",
            LOADING: "LOADING",
            PLAYING: "PLAYING",
            STOPPING: "STOPPING",
            DESTROYED: "DESTROYED"
        };
        var $;
        !function (e) {
            e[e.MEDIA_NOT_ALLOWED = 0] = "MEDIA_NOT_ALLOWED",
                e[e.MEDIA_ERR_ABORTED = 1] = "MEDIA_ERR_ABORTED",
                e[e.MEDIA_ERR_NETWORK = 2] = "MEDIA_ERR_NETWORK",
                e[e.MEDIA_ERR_DECODE = 3] = "MEDIA_ERR_DECODE",
                e[e.MEDIA_ERR_SRC_NOT_SUPPORTED = 9] = "MEDIA_ERR_SRC_NOT_SUPPORTED"
        }($ || ($ = {}));
        const Z = {
            STREAM_HOST: "video.stream.host",
            VIDEO_MASTER_HOST: "video-master-host",
            FLIPBOOK_VIDEO_HOST: "video.flipbook.video.host",
            FLIPBOOK_STREAM_HOST: "flipbook_stream_host",
            FLIPBOOK_STREAM_URL: "flipbook_stream_url",
            TABLE_ID: "table_id",
            GAME_TYPE: "game_type",
            VIEW1_DESKTOP: "view1-desktop",
            VIEW2_DESKTOP: "view2-desktop",
            VIEW3_DESKTOP: "view3-desktop",
            VIEW4_DESKTOP: "view4-desktop",
            VIEW1_MOBILE: "view1-mobile",
            VIEW2_MOBILE: "view2-mobile",
            VIEW3_MOBILE: "view3-mobile",
            VIEW4_MOBILE: "view4-mobile",
            AB_TEST_TICKET: "video_ab_test",
            ENABLE_MUTED_AUTO_PLAY_SUPPORT: "enable_muted_auto_play_support",
            ENABLE_AUTO_PLAY_SUPPORT: "enable_auto_play_support",
            ENABLE_CDN_SKIP: "enable_cdn_skip",
            ENABLE_PLATFORM_EXCEPTIONS: "enable_platform_exceptions",
            ENABLE_HLS_IN_WEBVIEW: "enable_hls_in_webview",
            ENABLE_CUSTOM_REDIRECT: "enable_custom_redirect",
            ENABLE_ERROR_DEBUG: "enable_error_debug",
            LIMITATION: "limitation",
            STREAM_BASE_NAME: "streamBaseName",
            FMP4_ENABLE: "video.fmp4.enable",
            FLIPBOOK_ENABLE: "video.flipbook.enable",
            HLS_ENABLE: "video.hls.enable",
            WASM_ENABLE: "video.wasm.enable"
        };
        var K, J, ee, te, ie;
        !function (e) {
            e.AcceptableAverageMsBetweenFrames = "ACCEPTABLE_AVERAGE_MS_BETWEEN_FRAMES"
        }(K || (K = {})),
            function (e) {
                e.SecurityReauthFailed = "SECURITY_REAUTH_FAILED",
                    e.StreamSecurityError = "STREAM_SECURITY_ERROR",
                    e.InvalidConfig = "INVALID_CONFIGURATION"
            }(J || (J = {})),
            function (e) {
                e.WrongMediaElement = "WRONG_MEDIA_ELEMENT",
                    e.SourceBufferFull = "SOURCE_BUFFER_FULL",
                    e.MediaEnded = "MEDIA_ENDED",
                    e.StreamShutdown = "STREAM_SHUTDOWN",
                    e.MediaError = "MEDIA_ERROR",
                    e.PermissionError = "PERMISSION_ERROR",
                    e.MaxLatencyReached = "MAX_LATENCY_REACHED",
                    e.NetworkError = "NETWORK_ERROR",
                    e.ChunklistStalling = "CHUNKLIST_STALLING",
                    e.MaxStallingErrors = "MAX_STALLING_ERRORS",
                    e.ValidationTimeout = "VALIDATION_TIMEOUT",
                    e.MediaStalledCritical = "MEDIA_STALLED_CRITICAL",
                    e.MediaStalled = "MEDIA_STALLED",
                    e.ManifestNotFound = "MANIFEST_NOT_FOUND",
                    e.ManifestDataError = "MANIFEST_DATA_ERROR",
                    e.MediaErrorAborted = "MEDIA_ERROR_ABORTED",
                    e.MediaErrorUnsupported = "MEDIA_ERROR_UNSUPPORTED",
                    e.InvalidConfig = "INVALID_CONFIGURATION",
                    e.NoAvailablePlayers = "NO_AVAILABLE_PLAYERS",
                    e.PerformanceError = "PERFORMANCE_ERROR",
                    e.DecodeError = "DECODE_ERROR"
            }(ee || (ee = {})),
            function (e) {
                e.QualityChangeFailed = "QUALITY_CHANGE_FAILED",
                    e.SettingNotFound = "SETTING_NOT_FOUND",
                    e.WrongPlaylistFormat = "WRONG_PLAYLIST_FORMAT",
                    e.CannotResolveUrl = "CANNOT_RESOLVE_URL",
                    e.FailedLoadingManifest = "FAILED_LOADING_MANIFEST",
                    e.StreamUnavailable = "STREAM_UNAVAILABLE",
                    e.UnknownStream = "UNKNOWN_STREAM",
                    e.ManifestManagerError = "MANIFEST_MANAGER_ERROR",
                    e.PlaylistNotDefined = "PLAYLIST_NOT_DEFINED",
                    e.SocketError = "SOCKET_ERROR",
                    e.NoQualitiesAvailable = "NO_QUALITIES_AVAILABLE"
            }(te || (te = {})),
            function (e) {
                e.NotSupported = "NOT_SUPPORTED"
            }(ie || (ie = {}));
        const se = "UNKNOWN_ERROR";
        var re;
        !function (e) {
            e[e.EnableV2 = 6] = "EnableV2",
                e[e.Off = 11] = "Off"
        }(re || (re = {}));
        const ne = {
            quality: L.MEDIUM,
            qualityMode: j.AUTO,
            volume: 1,
            muted: !0,
            showInfo: !1,
            streamId: 0,
            enableVideo: !0,
            aspectRatio: "16:9"
        }
            , ae = {
                width: 1920,
                height: 1080
            }
            , oe = L["HD+"]
            , le = L.HIGH
            , ce = [{
                quality: L["4K"],
                width: 3840,
                height: 2160
            }, {
                quality: L["2K"],
                width: 2560,
                height: 1440
            }, {
                quality: L["HD+"],
                width: 1920,
                height: 1080
            }, {
                quality: L.HD,
                width: 1920,
                height: 1080
            }, {
                quality: L.HIGH,
                width: 1280,
                height: 720
            }, {
                quality: L.MEDIUM,
                width: 864,
                height: 486
            }, {
                quality: L.LOW,
                width: 640,
                height: 360
            }, {
                quality: L.LOWEST,
                width: 416,
                height: 234
            }]
            , ue = /\b(WOW64|Win64|x64|x86_64|Windows NT|Intel Mac OS X|CrOS aarch64|X11.*Linux)\b/i;
        function de() {
            return window ? window.navigator.userAgent : ""
        }
        function Ae() {
            var e, t, i, s;
            return window ? {
                width: null !== (t = null === (e = window.screen) || void 0 === e ? void 0 : e.width) && void 0 !== t ? t : window.innerWidth,
                height: null !== (s = null === (i = window.screen) || void 0 === i ? void 0 : i.height) && void 0 !== s ? s : window.innerHeight
            } : {
                width: 0,
                height: 0
            }
        }
        function he() {
            return window && window.devicePixelRatio || 1
        }
        function pe(e, t) {
            for (const [i, s] of Object.entries(t))
                Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0
                });
            return e
        }
        function fe(e, t) {
            const i = function (e) {
                return function () {
                    const e = void 0 !== window.orientation
                        , t = navigator.maxTouchPoints > 1;
                    return !!window.navigator.userAgent.match(/(Intel Mac OS X)/i) && e && t
                }() ? P.Tablet : window ? ue.test(e) || !window.matchMedia ? P.Desktop : window.matchMedia("(min-width: 1024px) and (min-height: 600px) and (orientation: landscape), (min-width: 768px) and (orientation: portrait)").matches ? P.Tablet : P.Phone : P.Desktop
            }(t)
                , s = function (e, t) {
                    if (e === P.Desktop)
                        return B;
                    for (const i of N)
                        if (i.userAgentMask.test(t)) {
                            const { userAgentMask: e } = i;
                            return k(i, ["userAgentMask"])
                        }
                    return B
                }(i, t)
                , r = function (e, t) {
                    const i = [[I.Ios, /(?:iPhone|iPad).*(?:CPU[^;)]+?OS) ([0-9._]+)/], [I.Macosx, /(?:Mac OS X) ([0-9._]+)/], [I.Windows, /(?:Windows NT|Windows Phone) ([0-9._]+)/], [I.Android, /(?:Android) ([0-9._]*)/], [I.Linux, /(?:Linux)/]];
                    for (const s of i) {
                        const i = e.match(s[1]);
                        if (i) {
                            let e = s[0];
                            const r = (i[1] || "").replace(/_/g, ".");
                            return e === I.Macosx && t === P.Tablet && (e = I.IpadOs),
                            {
                                os: e,
                                osVersion: r
                            }
                        }
                    }
                    return {
                        os: I.Other,
                        osVersion: ""
                    }
                }(t, i)
                , n = function (e, t) {
                    const i = [[M.Edge, /Edge?\/([0-9._]*)/i], [M.Edge, /EdgA\/([0-9._]*)/i], [M.Opera, /OPR\/([0-9._]*)/i], [M.UCBrowser, /UCBrowser\/([0-9._]+) \(UCMini\)/i], [M.UCBrowser, / UC?Browser\/([0-9._]*)/i], [M.QQBrowser, / M?QQBrowser\/([0-9._]*)|MttCustomUA/i], [M.SamsungBrowser, /SamsungBrowser\/([0-9._]*)/i], [M.VivoBrowser, /VivoBrowser\/([0-9._]*)/i], [M.HuaweiBrowser, /HuaweiBrowser\/([0-9._]*)/i], [M.MiBrowser, /MiuiBrowser\/([0-9._]*)/i], [M.OppoBrowser, /OppoBrowser\/([0-9._]*)/i], [M.MeizuBrowser, /MZBrowser\/([0-9._]*)/i], [M.WhaleBrowser, /Whale\/([0-9._]*)/i], [M.YandexBrowser, /YaBrowser\/([0-9._]*)/i], [M.AtomBrowser, /Atom\/([0-9._]*)/i], [M.CocCocBrowser, /coc_coc_browser\/([0-9._]*)/i], [M.CocCocBrowser, /CoRom\/([0-9._]*)/i], [M.LiebaoBrowser, /LieBaoFast\/([0-9._]*)/i], [M.LiebaoBrowser, /LieBao\/([0-9._]*)/i], [M.BaiduBrowser, /baidubrowser\/([0-9._]*)/i], [M.BaiduBrowser, /bdbrowser\/([0-9._]*)/i], [M.BaiduBrowser, /BIDUBrowser\/([0-9._]*)/i], [M.BaiduBrowser, /baiduboxapp\/([0-9._]*)/i]]
                        , s = [[M.Sogou, /MetaSr ([0-9\\.]+)/], [M.Sogou, /SogouMobileBrowser\/([0-9._]*)/], [M.Sogou, /SogouMSE\/([0-9._]*)/], [M.Maxthon, /(MXiOS|Maxthon)\/([0-9._]*)/], [M.Chrome, /Chrome\/([0-9._]*)/i, i], [M.Chrome, /CriOS\/([0-9._]*)/i], [M.QQBrowser, / M?QQBrowser\/([0-9._]*)|MttCustomUA/i], [M.UCBrowserChina, /AliApp/i], [M.UCBrowser, / UC?Browser\/([0-9._]*)/i], [M.Firefox, /Firefox\/([0-9\\.]+)/i], [M.Firefox, /FxiOS\/([0-9\\.]+)/i], [M.Opera, /OPT\/([0-9._]*)/i], [M.Edge, /EdgiOS\/([0-9._]*)/i], [M.Safari, /Version\/([0-9._]+).*?Safari\/[0-9._]*/i], [M.IE, /Trident\/[0-9._]*.*rv:([0-9._]*)/i], [M.IE, /IEMobile\/([0-9._]*)/i], [M.Threesixty, /QihooBrowserHD\/([0-9._]*)|QihooBrowser\/([0-9._]*)/i], [M.BaiduBrowser, /baiduboxapp\/([0-9._]*)/i]];
                    let r, n, a = M.Other, o = "";
                    for (const c of s) {
                        const t = e.match(c[1]);
                        if (t) {
                            a = c[0],
                                o = t[1],
                                r = c[2];
                            break
                        }
                    }
                    let l = "";
                    if (r)
                        for (const c of r) {
                            const t = e.match(c[1]);
                            if (t) {
                                n = c[0],
                                    l = t[1];
                                break
                            }
                        }
                    return function (e, t, i) {
                        let s = window;
                        try {
                            for (; s !== s.parent && s.location.origin === s.parent.location.origin;)
                                s = s.parent
                        } catch (r) { }
                        return e === M.Chrome && t === I.Android && (!!i.match(/(wv\))/) || !!i.match(/(Chrome\/\d+\.0\.0\.0)/)) && "A3RunInPage" in s
                    }(a, t, e) && (a = M.Threesixty),
                    {
                        browser: a,
                        browserVersion: o,
                        browserFork: n,
                        browserForkVersion: l
                    }
                }(t, r.os)
                , a = navigator.hardwareConcurrency || null
                , o = function (e, t, i) {
                    var s;
                    if (e === P.Desktop)
                        return;
                    const r = i ? {
                        width: i.width * t,
                        height: i.height * t
                    } : ae
                        , n = r.width > r.height ? r.width : r.height
                        , a = r.width > r.height ? r.height : r.width
                        , o = ce.find((e => n >= e.width && a >= e.height))
                        , l = null !== (s = null == o ? void 0 : o.quality) && void 0 !== s ? s : oe;
                    return D[l] > D[le] ? void 0 : le
                }(i, he(), e)
                , l = Object.assign(Object.assign(Object.assign(Object.assign({}, s), n), r), {
                    platform: i,
                    threads: a,
                    maxSupportedQuality: o
                });
            return l.os !== I.Ios && l.os !== I.IpadOs || (l.appleScreenType = function (e) {
                var t, i, s, r;
                const n = null !== (i = null === (t = window.screen) || void 0 === t ? void 0 : t.width) && void 0 !== i ? i : window.innerWidth
                    , a = null !== (r = null === (s = window.screen) || void 0 === s ? void 0 : s.height) && void 0 !== r ? r : window.innerHeight
                    , o = window.devicePixelRatio || 1
                    , l = Math.min(n, a)
                    , c = Math.max(n, a);
                for (const u of _)
                    if (u.min === l && u.max === c && u.ratio === o)
                        return u.type;
                return `iphone_${l}x${c}_${o}`
            }()),
                l
        }
        const me = function () {
            let e;
            return (t = de(), i = Ae()) => (e || (e = function (e = de(), t = Ae()) {
                const i = fe(t, e)
                    , s = pe({}, {
                        OS: I,
                        Device: x,
                        Browser: M,
                        userAgent: e,
                        getDevicePixelRatio: he,
                        DeviceProperties: i,
                        IS_PHONE: i.platform === P.Phone,
                        IS_TABLET: i.platform === P.Tablet,
                        IS_DESKTOP: i.platform === P.Desktop,
                        IS_IN_IFRAME: (() => {
                            try {
                                return window.top !== window
                            } catch (e) {
                                return !0
                            }
                        }
                        )(),
                        IS_MACOSX: i.os === I.Macosx,
                        IS_ANDROID: i.os === I.Android,
                        IS_CHROME: i.browser === M.Chrome,
                        IS_SAFARI: i.browser === M.Safari,
                        IS_IE: i.browser === M.IE,
                        IS_EDGE: i.browser === M.Edge || i.browserFork === M.Edge,
                        IS_FIREFOX: i.browser === M.Firefox,
                        IS_SOGOU: i.browser === M.Sogou,
                        IS_MAXTHON: i.browser === M.Maxthon,
                        IS_UCBROWSER: i.browser === M.UCBrowser || i.browserFork === M.UCBrowser,
                        IS_UCBROWSER_CHINA: i.browser === M.UCBrowserChina,
                        IS_QQBROWSER: i.browser === M.QQBrowser || i.browserFork === M.QQBrowser || void 0 !== window.x5mtt,
                        IS_COCCOCBROWSER: i.browserFork === M.CocCocBrowser,
                        IS_LIEBAOBROWSER: i.browserFork === M.LiebaoBrowser,
                        IS_MIBROWSER: i.browserFork === M.MiBrowser,
                        IS_OPPOBROWSER: i.browserFork === M.OppoBrowser,
                        IS_YANDEXBROWSER: i.browserFork === M.YandexBrowser,
                        IS_ATOMBROWSER: i.browserFork === M.AtomBrowser,
                        IS_SAMSUNGBROWSER: i.browserFork === M.SamsungBrowser,
                        IS_HUAWEIBROWSER: i.browserFork === M.HuaweiBrowser,
                        IS_VIVOBROWSER: i.browserFork === M.VivoBrowser,
                        IS_WHALEBROWSER: i.browserFork === M.WhaleBrowser,
                        IS_MEIZUBROWSER: i.browserFork === M.MeizuBrowser,
                        IS_OPERA: i.browser === M.Opera || i.browserFork === M.Opera,
                        IS_BAIDUBROWSER: i.browser === M.BaiduBrowser || i.browserFork === M.BaiduBrowser,
                        IS_IPAD: i.codeName === x.iPAD,
                        IS_IPHONE: i.codeName === x.iPHONE
                    })
                    , r = pe(s, {
                        IS_IOS: s.IS_IPAD || s.IS_IPHONE,
                        IS_IPAD_PRO: s.IS_IPAD && i.appleScreenType === O.IpadPro
                    })
                    , n = pe(r, {
                        IS_IN_IOS_WEB_VIEW: r.IS_IOS && !R.includes(i.browser),
                        IS_IN_ANDROID_WEB_VIEW: s.IS_ANDROID && (!!s.userAgent.match(/(wv\))/) || !!s.userAgent.match(/(Chrome\/\d+\.0\.0\.0)/)),
                        IS_IOS15_OR_GREATER: r.IS_IOS && E(i.osVersion, "15") >= 0,
                        IS_NATIVE_ANDROID_BROWSER: (() => {
                            if (!s.IS_ANDROID)
                                return !1;
                            if (s.IS_FIREFOX || s.IS_UCBROWSER || s.IS_QQBROWSER || s.IS_OPERA)
                                return !1;
                            if (!s.IS_CHROME || s.IS_SAMSUNGBROWSER || s.IS_MIBROWSER || s.IS_MEIZUBROWSER || s.IS_OPPOBROWSER)
                                return !0;
                            const { browserVersion: e } = i;
                            return E(e, "35.0.0") < 0
                        }
                        )(),
                        IS_ADAPTIVE_HLS_SUPPORTED: !s.IS_ANDROID
                    })
                    , a = pe(n, {
                        IS_SAMSUNG_NATIVE_BROWSER: s.userAgent.indexOf("SamsungBrowser") >= 0,
                        IS_THREESIXTY: i.browser === M.Threesixty,
                        DEVICE_NAME: (() => {
                            const { name: e, os: t, osVersion: r } = i;
                            return `${s.IS_DESKTOP ? "desktop" : e} ${void 0 !== t ? I[t] : I[I.Other]} ${r}`
                        }
                        )()
                    });
                return pe(a, {
                    BROWSER_NAME: (() => {
                        const { browser: e, browserVersion: t, browserFork: s, browserForkVersion: r } = i;
                        return n.IS_NATIVE_ANDROID_BROWSER && a.IS_SAMSUNG_NATIVE_BROWSER ? "Android native" : void 0 !== s ? `${M[s]} ${r}` : `${void 0 !== e ? M[e] : M[M.Other]} ${t}`
                    }
                    )()
                })
            }(t, i)),
                e)
        }();
        class be extends Error {
            constructor(e, t, i = !1) {
                var s;
                super(t),
                    this.type = e,
                    this.isCritical = i,
                    Object.setPrototypeOf(this, be.prototype),
                    null === (s = Error.captureStackTrace) || void 0 === s || s.call(Error, this, be),
                    this.name = "EvoError",
                    be.enableErrorDebug && console.error(this.toString())
            }
            toString() {
                return ye(this.name, this.type, this.message, this.code, this.stack)
            }
        }
        function ve(e, t) {
            const i = !(e instanceof DOMException) && e && e.code;
            let s;
            switch (s = "string" == typeof e ? new Error(e) : e instanceof Error ? e : new Error("Unknown error with type: " + typeof e),
            Object.setPrototypeOf(s, be.prototype),
            s.type = t,
            i) {
                case $.MEDIA_NOT_ALLOWED:
                    s.type = ee.PermissionError;
                    break;
                case $.MEDIA_ERR_DECODE:
                    s.type = ee.DecodeError
            }
            return s.name = "EvoError",
                s.toString = () => ye(s.name, s.type, s.message, s.code, s.stack),
                be.enableErrorDebug && console.error(s.toString()),
                s
        }
        function ye(e, t, i, s, r) {
            return `[${e}] ${t}: ${Number.isInteger(s) ? `(code: ${s}) ` : ""}${i}${r ? ` ${r.replace(/.*/, "")}` : ""}`
        }
        function ge(e, t) {
            const { IS_IOS: i, IS_IN_IOS_WEB_VIEW: s } = e;
            return !(!i || s && !t.video.hls.enableInWebView)
        }
        function we(e) {
            const { IS_ANDROID: t, IS_IOS: i, IS_QQBROWSER: s } = e;
            return !((t || i) && s)
        }
        function Se(e) {
            return !e.IS_BAIDUBROWSER
        }
        function Ee(e) {
            const { IS_UCBROWSER: t, IS_UCBROWSER_CHINA: i } = e;
            return !(t || i)
        }
        function Pe(e) {
            return !e.IS_OPPOBROWSER
        }
        function Te(e) {
            return !e.IS_MEIZUBROWSER
        }
        function Ie(e) {
            return [Te, Ee, Pe, we, Se].every((t => t(e)))
        }
        function Me(e) {
            return [Ee, we, Se].every((t => t(e)))
        }
        be.enableErrorDebug = !1;
        const Oe = {
            name: V.None,
            factory: (e, t) => {
                throw new Error("Unable to create None player")
            }
        };
        function Ce(e, t) {
            if (e.name === V.None)
                return t[0];
            const i = t.findIndex((t => t.name === e.name));
            return t[(i + 1) % t.length]
        }
        function xe(e, t, i, s) {
            let r = function (e, t) {
                return e.filter((({ name: e }) => {
                    switch (e) {
                        case V.Fmp4:
                            return t.video.fmp4.enable;
                        case V.WebCodec:
                            return t.video.webcodec.enable;
                        case V.Wasm:
                            return t.video.wasm.enable;
                        case V.Hls:
                            return t.video.hls.enable;
                        case V.Flipbook:
                            return t.video.flipbook.enable;
                        default:
                            return !1
                    }
                }
                ))
            }(e, t);
            return t.video.debug.enableAllPlayers || (r = function (e, t, i) {
                return e.filter((({ name: e }) => {
                    switch (e) {
                        case V.Hls:
                            return function (e, t) {
                                return [ge, Me].every((i => i(e, t)))
                            }(t, i);
                        case V.Fmp4:
                            return function (e) {
                                return !!e.IS_DESKTOP || [Ie].every((t => t(e)))
                            }(t);
                        default:
                            return !0
                    }
                }
                ))
            }(r, i, t),
                r = function (e, t) {
                    return e.filter((e => {
                        switch (e.name) {
                            case V.WebCodec:
                                return t.webCodec.video && t.webCodec.audio && t.webCodec.audio.aac;
                            case V.Fmp4:
                                return t.mse;
                            case V.Hls:
                                return t.hls;
                            default:
                                return !0
                        }
                    }
                    ))
                }(r, s)),
                r
        }
        class _e {
            constructor() {
                this.disposables = []
            }
            add(e) {
                this.disposables.push(e)
            }
            close() {
                this.disposables.splice(0, this.disposables.length).reverse().filter((e => !e.isClosed())).forEach((e => e.close()))
            }
        }
        function Re(e = (() => { }
        )) {
            let t = !1;
            return {
                isClosed: () => t,
                close() {
                    t || (t = !0,
                        e())
                },
                closeBy(e) {
                    e.add(this)
                }
            }
        }
        class ke extends u {
            constructor() {
                super((() => Re())),
                    this.observers = []
            }
            next(e) {
                this.subscription && this.onNext(e)
            }
            error(e) {
                this.subscription && this.onError(e)
            }
            complete() {
                this.subscription && (this.onComplete(),
                    this.disconnect())
            }
            onComplete() {
                for (const e of this.observers.slice())
                    e.onComplete()
            }
            onError(e) {
                for (const t of this.observers.slice())
                    t.onError(e)
            }
            onNext(e) {
                for (const t of this.observers.slice())
                    t.onNext(e)
            }
            subscribe(e, t, i) {
                return this.connectAndSubscribe(c(e, t, i))
            }
            connect() {
                this.subscription = this.observe(c(this.next, this.error, this.complete))
            }
            disconnect() {
                var e;
                this.observers = [],
                    null === (e = this.subscription) || void 0 === e || e.close(),
                    this.subscription = void 0
            }
            connectAndSubscribe(e) {
                return this.subscription || this.connect(),
                    this.observers.push(e),
                    Re((() => {
                        const t = this.observers.indexOf(e);
                        -1 !== t && (this.observers.splice(t, 1),
                            this.observers.length > 0 || this.disconnect())
                    }
                    ))
            }
        }
        class Be extends ke {
            constructor(e) {
                super(),
                    this.value = e
            }
            next(e) {
                this.value = e,
                    super.next(e)
            }
            subscribe(e, t, i) {
                const s = c(e, t, i)
                    , r = super.connectAndSubscribe(s);
                return s.onNext(this.value),
                    r
            }
        }
        function Ne(e, t = new _e) {
            return new u((i => {
                function s() {
                    i.onComplete(),
                        t.close()
                }
                const r = {
                    onNext: i.onNext,
                    onError: function (e) {
                        i.onError(e),
                            s()
                    },
                    onComplete: s
                };
                return e(t, r),
                    Re((() => t.close()))
            }
            ))
        }
        function Le(e, t) {
            return Ne(((i, s) => {
                const r = new ke
                    , n = [];
                r.subscribe((([i, r]) => {
                    n[i] = r;
                    const a = n.filter((() => !0));
                    if (a.length < e.length)
                        return;
                    const o = t(a);
                    s.onNext(o)
                }
                )).closeBy(i),
                    e.forEach(((e, t) => {
                        e.subscribe((e => r.next([t, e])), s.onError, s.onComplete).closeBy(i)
                    }
                    ))
            }
            ))
        }
        const De = (e = (() => new ke)) => t => {
            const i = e();
            let s, r = 0;
            return {
                pipe: i.pipe,
                subscribe(e, n, a) {
                    const o = i.subscribe(e, n, a);
                    return r++,
                        s || (s = t.subscribe((e => i.next(e)), (e => i.error(e)), (() => i.complete()))),
                        Re((() => {
                            o.close(),
                                r--,
                                0 === r && (null == s || s.close(),
                                    s = void 0)
                        }
                        ))
                }
            }
        }
            ;
        class Fe extends ke {
            constructor(e) {
                super(),
                    this.size = e,
                    this.cache = []
            }
            next(e) {
                this.cache.push(e),
                    this.cache.length > this.size && this.cache.shift(),
                    super.next(e)
            }
            subscribe(e, t, i) {
                const s = c(e, t, i)
                    , r = super.connectAndSubscribe(s);
                return this.cache.forEach((e => s.onNext(e))),
                    r
            }
        }
        const je = e => t => new u((i => t.subscribe((t => {
            e(t) && i.onNext(t)
        }
        ), i.onError, i.onComplete)));
        function Ue(e) {
            return new u((t => (t.onNext(e),
                t.onComplete(),
                Re())))
        }
        const We = (e, ...t) => [e, ...t]
            , Ve = (...e) => t => {
                const i = e[e.length - 1]
                    , s = "function" == typeof i
                    , r = s ? i : We
                    , n = e.slice(0, e.length - (s ? 1 : 0));
                return Ne(((e, i) => {
                    const s = [];
                    n.forEach(((t, r) => {
                        t.subscribe((e => {
                            s[r] = e
                        }
                        ), i.onError, (() => {
                            s.splice(0, s.length),
                                i.onComplete()
                        }
                        )).closeBy(e)
                    }
                    )),
                        t.subscribe((e => {
                            const t = s.filter((() => !0));
                            if (t.length < n.length)
                                return;
                            const [a, ...o] = t
                                , l = r(e, a, ...o);
                            i.onNext(l)
                        }
                        ), i.onError, (() => {
                            s.splice(0, s.length),
                                i.onComplete()
                        }
                        )).closeBy(e)
                }
                ))
            }
            , Qe = e => t => new u((i => {
                let s = 0
                    , r = !1;
                const n = [];
                return t.subscribe((t => {
                    n.push(t),
                        r || function () {
                            for (r = !0; n.length > 0;) {
                                s++;
                                const t = n.splice(0, 1)[0];
                                if (i.onNext(t),
                                    s === e) {
                                    i.onComplete(),
                                        r = !1,
                                        n.splice(0, n.length);
                                    break
                                }
                            }
                            r = !1
                        }()
                }
                ), i.onError, i.onComplete)
            }
            ));
        function He(e) {
            return e.length > 0 ? {
                isValid: !0,
                item: e.shift()
            } : {
                isValid: !1
            }
        }
        const Ge = e => t => new u((i => {
            const s = [];
            let r, n = !1, a = !1;
            function o() {
                s.splice(0, s.length)
            }
            function l() {
                null == r || r.close(),
                    r = void 0
            }
            function c(t) {
                n = !0,
                    r = e(t).subscribe((e => i.onNext(e)), (e => {
                        o(),
                            i.onError(e)
                    }
                    ), (() => {
                        n = !1,
                            l();
                        const e = He(s);
                        e.isValid ? c(e.item) : a && i.onComplete()
                    }
                    ))
            }
            const u = t.subscribe((e => {
                if (s.push(e),
                    !n) {
                    const e = He(s);
                    if (!e.isValid)
                        return;
                    c(e.item)
                }
            }
            ), (e => {
                o(),
                    i.onError(e)
            }
            ), (() => {
                a = !0,
                    n || (o(),
                        l(),
                        i.onComplete())
            }
            ));
            return Re((() => {
                o(),
                    l(),
                    u.close()
            }
            ))
        }
        ));
        function Ye(e) {
            return new u((t => {
                let i = !1;
                return e.then((e => {
                    i || (i = !0,
                        t.onNext(e),
                        t.onComplete())
                }
                )).catch((e => {
                    i || (i = !0,
                        t.onError(e),
                        t.onComplete())
                }
                )),
                    Re((() => {
                        i = !0
                    }
                    ))
            }
            ))
        }
        const qe = e => t => new u((i => t.subscribe((t => {
            e(t),
                i.onNext(t)
        }
        ), i.onError, i.onComplete)))
            , ze = e => t => new u((i => t.subscribe((t => i.onNext(e(t))), i.onError, i.onComplete)))
            , Xe = (e, t = e, i = !1) => s => new u((r => {
                let n = [];
                return s.subscribe((s => {
                    n.push(s),
                        n.length > e && (n = n.slice(t)),
                        (n.length === e || i) && r.onNext(n.slice())
                }
                ), r.onError, r.onComplete)
            }
            ));
        function $e(e) {
            const t = Object.assign(Object.assign({}, e), {
                preload: "none",
                controls: !1,
                "data-current-player": !0,
                disablePictureInPicture: !0,
                playsinline: !0,
                "webkit-playsinline": !0
            })
                , i = document.createElement("video");
            return Object.entries(t).forEach((([e, t]) => {
                !1 === t ? i.removeAttribute(e) : i.setAttribute(e, t.toString())
            }
            )),
                Object.assign(i.style, t.style),
                i
        }
        const Ze = {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            height: "100%",
            width: "auto",
            "pointer-events": "none",
            "object-fit": "fill"
        }
            , Ke = {
                width: "100%",
                height: "100%",
                "pointer-events": "none"
            };
        function Je(e, t) {
            return e.filter((e => D[e] <= D[t]))
        }
        const et = {
            NONE: null,
            flipbook: te.UnknownStream,
            fmp4: ee.StreamShutdown,
            webcodec: ee.StreamShutdown,
            wasm: ee.StreamShutdown,
            hls: null
        }
            , tt = [H, te.FailedLoadingManifest, te.UnknownStream, ee.ManifestNotFound, ee.NetworkError, J.StreamSecurityError];
        function it(...e) { }
        const st = window.navigator;
        class rt {
            constructor(e) {
                this.deviceSupport = e,
                    this.isCriticalErrorDetected = !1,
                    this.updateState = (e, t) => {
                        this.activePlayer = t,
                            [ee.MediaError, ee.PermissionError].map((e => e.toString())).includes(e.eventType) && (this.isCriticalErrorDetected = !0)
                    }
                    ,
                    this.skipFlipbookAfterPrimaryPlayer = () => {
                        var e;
                        if (!this.activePlayer)
                            return !1;
                        let t = !1;
                        return (null === (e = this.deviceSupport) || void 0 === e ? void 0 : e.IS_DESKTOP) && !this.isCriticalErrorDetected && this.activePlayer.name !== V.Flipbook && (t = !0),
                            this.isCriticalErrorDetected = !1,
                            t
                    }
                    ,
                    this.rules = [this.skipFlipbookAfterPrimaryPlayer]
            }
        }
        class nt {
            constructor() {
                this.isNetworkErrorDetected = !1,
                    this.isFMP4inAvailablePlayers = !1,
                    this.updateState = e => {
                        e.eventType === ee.NetworkError && (this.isNetworkErrorDetected = !0),
                            e.playerName === V.Fmp4 && (this.isFMP4inAvailablePlayers = !0)
                    }
                    ,
                    this.removeAfterNetworkError = () => this.isNetworkErrorDetected,
                    this.removeAfterFMP4Started = () => this.isFMP4inAvailablePlayers,
                    this.rules = [this.removeAfterNetworkError, this.removeAfterFMP4Started]
            }
        }
        class at {
            constructor(e) {
                this.filter = e => e.filter((e => {
                    var t;
                    const i = !(null === (t = this.filters[e.name]) || void 0 === t ? void 0 : t.rules.some((e => e())));
                    return null == i || i
                }
                )),
                    this.updateState = (e, t) => {
                        Object.entries(this.filters).forEach((([, i]) => i.updateState(e, t)))
                    }
                    ,
                    this.filters = {
                        [V.Hls]: new nt,
                        [V.Flipbook]: new rt(e)
                    }
            }
        }
        const ot = () => Promise.resolve(!1);
        function lt(e = function (e) {
            const t = document.createElement("video");
            return t.setAttribute("playsinline", ""),
                t.setAttribute("webkit-playsinline", ""),
                t.setAttribute("height", "0"),
                t.setAttribute("width", "0"),
                t.playsinline = !0,
                t.webkitPlaysinline = !0,
                t.style.position = "fixed",
                t.style.top = "0",
                t.style.width = "0",
                t.style.height = "0",
                t.style.opacity = "0",
                t.src = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=",
                t
        }(), t = document.body) {
            return t.appendChild(e),
                e.play().then((() => (e.remove(),
                    !0))).catch((() => (e.remove(),
                        !1)))
        }
        class ct {
            constructor(e, t, i) {
                this.lifeCycleScope = e,
                    this.config = t,
                    this.videoStats = {},
                    this.successfulPlayers = [],
                    this.lastFlipbookUpgrade = 0,
                    this.mediaContainer = document.createElement("div"),
                    this.mediaTag = null,
                    this.videoTagPipe = new Be(null),
                    this.isQualityModeManual = !1,
                    this.audioContext = new AudioContext,
                    this.onMediaPlayerSuccess = () => {
                        this.firstRetryThrottlingErrorTime = void 0,
                            this.successfulPlayers.includes(this.state.activePlayer.value.name) || this.successfulPlayers.push(this.state.activePlayer.value.name),
                            this.config.publishers.onPlay.emit(!0),
                            this.config.stats.onPlaybackStarted(this.state.activePlayer.value.name)
                    }
                    ,
                    this.onMediaPlayerStop = () => {
                        this.config.publishers.onPlay.emit(!1),
                            this.config.stats.onStop(!1)
                    }
                    ,
                    this.onMediaPlayerStats = e => {
                        if (e.playerName = this.state.activePlayer.value.name,
                            this.config.stats.onStats(e),
                            e.currentQuality) {
                            const t = this.videoStats.currentQuality
                                , i = e.currentQuality;
                            t !== i && this.onQualityChanged(i)
                        }
                        e.availableQualities && Ue(e.availableQualities).pipe(Ve(this.observables.maxAutoQuality), Qe(1)).subscribe((([e, t]) => {
                            const { returnAllAvailableQualities: i } = this.config.settings.video.stream
                                , s = i || !t ? e : Je(e, t);
                            this.config.publishers.onAvailableQualities.emit(s)
                        }
                        )),
                            e.currentQuality && (this.videoStats.currentQuality = e.currentQuality),
                            void 0 !== e.bufferLength && (this.videoStats.bufferLength = e.bufferLength),
                            void 0 !== e.latency && (this.videoStats.latency = e.latency),
                            void 0 !== e.wallclock && (this.videoStats.wallclock = e.wallclock),
                            void 0 !== e.latency && void 0 !== this.videoStats.latency && void 0 !== this.videoStats.bufferLength && void 0 !== this.videoStats.wallclock && this.config.publishers.onVideoWallclock.emit({
                                wallclock: this.videoStats.wallclock,
                                bufferLength: this.videoStats.bufferLength,
                                latency: this.videoStats.latency
                            }),
                            void 0 !== e.streamId && this.config.publishers.onStreamId.emit(e.streamId)
                    }
                    ,
                    this.onMediaPlayerFailure = e => {
                        if (e.type === ee.PermissionError && console.warn(e.type, e.message),
                            this.config.stats.onError(e),
                            e.isCritical)
                            if (this.successfulPlayers.includes(this.state.activePlayer.value.name) && function (e, t) {
                                const i = et[t];
                                return null !== i && e.type === i
                            }(e, this.state.activePlayer.value.name)) {
                                const e = 1e4 + 1e4 * Math.random();
                                this.schedulePlayerRestart(e, !1)
                            } else if (this.state.activePlayer.value.name !== V.None) {
                                const t = this.runtimeFilter.filter(this.config.availablePlayers)
                                    , i = Ce(this.state.activePlayer.value, t)
                                    , s = 0 === t.findIndex((e => e.name === i.name)) ? Oe : i;
                                this.state.videoProps.next(this.getInitialMediaElementProps()),
                                    this.state.allowPlay.next(!1),
                                    this.state.activePlayer.next(s),
                                    this.state.allowPlay.next(!0),
                                    this.config.stats.onStats({
                                        playerName: s.name
                                    }),
                                    s.name === V.None && this.onAllPlayersFailed(e)
                            } else
                                this.onPlaybackEvent({
                                    eventType: Y.PLAYER_FAILED,
                                    eventReason: q.MultiplePlayerFailureCalls
                                })
                    }
                    ,
                    this.onPlaybackAttempt = e => {
                        e.playerName = this.state.activePlayer.value.name,
                            this.config.stats.onPlaybackAttempt(e),
                            this.videoStats.latency = void 0,
                            this.videoStats.bufferLength = void 0,
                            this.videoStats.wallclock = void 0
                    }
                    ,
                    this.onMediaPlayerEvent = e => {
                        e.playerName = this.state.activePlayer.value.name,
                            this.runtimeFilter.updateState(e, this.state.activePlayer.value),
                            this.config.publishers.onMediaPlayerEvent.emit(e)
                    }
                    ,
                    this.onPlaybackEvent = ({ eventType: e, eventReason: t, data: i = {} }) => {
                        this.config.stats.onPlaybackEvent({
                            eventType: e,
                            eventReason: t,
                            data: i,
                            playerName: this.state.activePlayer.value.name
                        }, this.config.settings.video.session.videoSessionId),
                            i.qualityModeChanged && this.config.stats.onStats({
                                qualityMode: i.qualityModeChanged.next
                            }),
                            i.qualityChanged && (t === q.ManualChange ? this.config.stats.onStats({
                                manualQuality: i.qualityChanged.next
                            }) : this.onQualityChanged(i.qualityChanged.next))
                    }
                    ,
                    this.onPlayerCanUpgrade = e => {
                        this.runtimeFilter.filter(this.config.availablePlayers).length <= 1 || e.emitter !== V.Flipbook || this.config.settings.video.flipbook.networkMeter.enable && this.flipbookCanUpgrade(e)
                    }
                    ,
                    this.onPlayerUrlResolved = e => {
                        this.config.stats.onStats({
                            url: e,
                            videoSessionId: this.config.settings.video.session.videoSessionId
                        })
                    }
                    ;
                const s = t.availablePlayers.length ? Ce(Oe, t.availablePlayers) : Oe;
                this.state = {
                    activePlayer: new Be(s),
                    videoProps: new Be(this.getInitialMediaElementProps()),
                    allowPlay: new Be(!0)
                },
                    this.runtimeFilter = new at(t.deviceSupport),
                    t.stats.onStats({
                        playerName: s.name,
                        videoSessionId: t.settings.video.session.videoSessionId
                    }),
                    "mediaSession" in st && st.mediaSession && st.mediaSession.setActionHandler("play", it),
                    this.observables = this.createPlayerObservables(i),
                    this.subscribeToStateObservables(i),
                    this.subscribeToParentObservables(i)
            }
            getContainer() {
                return this.mediaContainer
            }
            createPlayerObservables(e) {
                return {
                    quality: e.quality,
                    qualityMode: e.qualityMode,
                    mediaTag: this.videoTagPipe,
                    play: this.state.allowPlay.pipe(je((e => e)), Ge((() => e.play))),
                    volume: e.volume,
                    streamId: e.streamId,
                    maxAutoQuality: e.maxAutoQuality,
                    aspectRatio: e.aspectRatio,
                    muted: e.muted,
                    isBackgroundMode: e.isBackgroundMode
                }
            }
            subscribeToStateObservables(e) {
                this.state.activePlayer.pipe(Ge((e => Ye(this.config.deviceSupport.IS_SAFARI ? ot() : lt()).pipe(qe((e => {
                    e || this.config.publishers.onUserInteractionRequired.emit(!0)
                }
                )), ze((() => e)))))).subscribe((e => this.initNewActivePlayer(e))).closeBy(this.lifeCycleScope),
                    this.state.activePlayer.subscribe((e => this.handleActivePlayerChange(e))).closeBy(this.lifeCycleScope),
                    this.state.videoProps.pipe(d()).subscribe((e => {
                        var t;
                        const i = this.state.activePlayer.value.name !== V.None
                            , s = Object.assign({}, i ? Object.assign({}, e) : this.getInitialMediaElementProps());
                        !this.mediaTag && [V.Hls].includes(this.state.activePlayer.value.name) && (this.mediaTag = $e({
                            muted: !0,
                            style: Object.assign(Object.assign({}, Ze), {
                                width: "100%"
                            })
                        }),
                            this.mediaContainer.appendChild(this.mediaTag),
                            this.mediaTag.addEventListener("enterpictureinpicture", this.exitPIP),
                            this.mediaTag.setAttribute("disablePictureInPicture", "true"),
                            this.mediaTag.setAttribute("playsinline", "true"),
                            this.mediaTag.setAttribute("webkit-playsinline", "true")),
                            s.src || null === (t = this.mediaTag) || void 0 === t || t.removeAttribute("src"),
                            Object.entries(s).forEach((([e, t]) => {
                                var i, s;
                                t ? null === (s = this.mediaTag) || void 0 === s || s.setAttribute(e, t.toString()) : null === (i = this.mediaTag) || void 0 === i || i.removeAttribute(e)
                            }
                            )),
                            s.style && this.mediaTag && Object.assign(this.mediaTag.style, s.style),
                            this.videoTagPipe.next(this.mediaTag)
                    }
                    )).closeBy(this.lifeCycleScope)
            }
            subscribeToParentObservables(e) {
                e.play.pipe(Xe(2, 1), je((([e, t]) => e && !t))).subscribe((() => {
                    this.config.stats.onStop(!0)
                }
                )).closeBy(this.lifeCycleScope),
                    e.streamId.pipe(Qe(1), Ve(this.state.activePlayer)).subscribe((e => this.publishStreamCountChange(e[1]))).closeBy(this.lifeCycleScope),
                    Le([e.volume, e.muted], (([e, t]) => ({
                        volume: e,
                        muted: t
                    }))).pipe(ze((({ volume: e, muted: t }) => t ? 0 : e)), d()).subscribe((e => this.config.stats.onStats({
                        volume: e
                    }))).closeBy(this.lifeCycleScope),
                    e.multiwindowCount.subscribe((e => this.config.stats.onStats({
                        multiwindowCount: e
                    }))).closeBy(this.lifeCycleScope),
                    e.qualityMode.subscribe((e => this.isQualityModeManual = e === j.MANUAL)).closeBy(this.lifeCycleScope)
            }
            initNewActivePlayer(e) {
                var t, i;
                const s = null === (t = this.player) || void 0 === t ? void 0 : t.getPlayerContainer();
                if (s && this.mediaContainer.contains(s) && this.mediaContainer.removeChild(s),
                    null === (i = this.player) || void 0 === i || i.destroy(),
                    this.player = void 0,
                    0 !== this.config.availablePlayers.length)
                    if (e.name !== V.None) {
                        const t = this.getPlayerConfig(e.name);
                        this.player = e.factory(t, this.observables);
                        const i = this.player.getPlayerContainer();
                        this.mediaContainer.appendChild(i)
                    } else
                        this.mediaTag && (this.mediaTag.id = this.getInitialMediaElementProps().id);
                else
                    this.config.stats.onStop(!1)
            }
            exitPIP() {
                var e, t;
                null === (t = (e = document).exitPictureInPicture) || void 0 === t || t.call(e)
            }
            destroy() {
                var e, t;
                this.videoTagPipe.complete(),
                    null === (e = this.mediaTag) || void 0 === e || e.removeEventListener("enterpictureinpicture", this.exitPIP),
                    null === (t = this.player) || void 0 === t || t.destroy(),
                    this.audioContext.close(),
                    this.lifeCycleScope.close()
            }
            getPlayerConfig(e) {
                const t = this.config.settings.video
                    , i = t[e];
                return {
                    scheduler: this.config.scheduler,
                    onPlaybackAttempt: this.onPlaybackAttempt,
                    onSuccess: this.onMediaPlayerSuccess,
                    onStop: this.onMediaPlayerStop,
                    onFailure: this.onMediaPlayerFailure,
                    onEvent: this.onMediaPlayerEvent,
                    onStats: this.onMediaPlayerStats,
                    onPlaybackEvent: this.onPlaybackEvent,
                    onPlayerCanUpgrade: this.onPlayerCanUpgrade,
                    deviceSupport: this.config.deviceSupport,
                    browserFeatures: this.config.browserFeatures,
                    onMediaUrlResolved: this.onPlayerUrlResolved,
                    settings: Object.assign(Object.assign({}, i), {
                        abtest: t.abtest,
                        debug: t.debug,
                        stream: t.stream,
                        session: t.session
                    }),
                    videoContainer: this.mediaContainer,
                    audioContext: this.audioContext
                }
            }
            onAllPlayersFailed(e) {
                this.schedulePlayerRestart(this.getRestartTime(e))
            }
            getRestartTime(e) {
                if (function (e) {
                    return tt.some((t => e.type.includes(t) || e.message.includes(t)))
                }(e)) {
                    const e = window.performance.now();
                    return this.firstRetryThrottlingErrorTime || (this.firstRetryThrottlingErrorTime = e),
                        (e - this.firstRetryThrottlingErrorTime > 6e4 ? 59e3 : 5e3) + 5e3 * Math.random()
                }
                return 3e3
            }
            flipbookCanUpgrade(e) {
                const t = this.lastFlipbookUpgrade + 12e4 < window.performance.now() || 0 === this.lastFlipbookUpgrade;
                !this.isQualityModeManual && t && e.reason === K.AcceptableAverageMsBetweenFrames && (this.schedulePlayerRestart(),
                    this.lastFlipbookUpgrade = window.performance.now())
            }
            onQualityChanged(e) {
                this.config.publishers.onQuality.emit(e),
                    this.config.stats.onStats({
                        currentQuality: e
                    })
            }
            schedulePlayerRestart(e = 3e3, t = !0) {
                this.retryPlayersTimeout || (this.retryPlayersTimeout = this.config.scheduler.schedule((() => {
                    this.retryPlayersTimeout = void 0;
                    const e = this.runtimeFilter.filter(this.config.availablePlayers)
                        , i = t ? Ce(Oe, e) : this.state.activePlayer.value;
                    this.state.activePlayer.next(i),
                        this.config.stats.onStats({
                            playerName: i.name
                        })
                }
                ), e))
            }
            publishStreamCountChange(e) {
                const t = function (e, t, i) {
                    return e ? i.IS_DESKTOP ? 1 : t.video.fmp4.urls.filter((e => !!e)).length : 0
                }(e, this.config.settings, this.config.deviceSupport);
                this.config.publishers.onStreamCount.emit(t)
            }
            getInitialMediaElementProps() {
                return {
                    id: "empty-video"
                }
            }
            handleActivePlayerChange(e) {
                this.publishStreamCountChange(e)
            }
        }
        function ut(e) {
            return (t, i, s) => {
                const r = function (...e) {
                    return new u((t => {
                        let i;
                        return function e(s) {
                            const r = s.shift();
                            r ? i = r.subscribe((e => t.onNext(e)), (e => t.onError(e)), (() => e(s))) : t.onComplete()
                        }(e),
                            Re((() => null == i ? void 0 : i.close()))
                    }
                    ))
                }(Ye(e()).pipe(ze((e => !e)), Ve(i.muted), ze((([e, t]) => !!t || !!e)), qe((e => {
                    s.stats.onStats({
                        userInteractionRequired: e
                    }),
                        s.publishers.onUserInteractionRequired.emit(e)
                }
                ))), i.muted).pipe(De((() => new Be(!0))));
                return Object.assign(Object.assign({}, i), {
                    muted: r
                })
            }
        }
        class dt {
            static getDocumentHiddenAttr() {
                const e = document;
                let t, i;
                if (void 0 !== e.hidden)
                    t = "hidden",
                        i = "visibilitychange";
                else if (void 0 !== e.msHidden)
                    t = "msHidden",
                        i = "msvisibilitychange";
                else {
                    if (void 0 === e.webkitHidden)
                        return null;
                    t = "webkitHidden",
                        i = "webkitvisibilitychange"
                }
                return {
                    hiddenAttribute: t,
                    visibilityChangeEvent: i
                }
            }
            constructor(e, t) {
                this.isWindowHidden = () => !!document[this.hiddenAttribute];
                const { hiddenAttribute: i, visibilityChangeEvent: s } = t;
                this.hiddenAttribute = i,
                    this.visibilityChangeEvent = s,
                    this.visibilityChangeCallback = () => e(this.isWindowHidden()),
                    document.addEventListener(this.visibilityChangeEvent, this.visibilityChangeCallback)
            }
            destroy() {
                document.removeEventListener(this.visibilityChangeEvent, this.visibilityChangeCallback)
            }
        }
        class At {
            constructor(e, t = 500) {
                this.isHidden = !1,
                    this.timeoutId = 0,
                    this.animationFrameId = 0,
                    this.isWindowHidden = () => this.isHidden,
                    this.runTimers = () => {
                        const e = performance.now();
                        this.timeoutId = window.setTimeout(this.onTimeout, this.visibilityCheckTimeout),
                            this.animationFrameId = window.requestAnimationFrame(this.requestAnimationFrameCallback(e))
                    }
                    ,
                    this.onTimeout = () => {
                        this.isHidden || (this.isHidden = !0,
                            this.visibilityChangeCallback && this.visibilityChangeCallback(this.isHidden)),
                            this.stopTimers(),
                            this.runTimers()
                    }
                    ,
                    this.requestAnimationFrameCallback = e => t => {
                        this.isHidden && t - e > 0 && (this.isHidden = !1,
                            this.visibilityChangeCallback && this.visibilityChangeCallback(this.isHidden)),
                            this.stopTimers(),
                            this.runTimers()
                    }
                    ,
                    this.onDocumentFocus = () => {
                        this.stopCheck(),
                            this.isHidden = !1,
                            this.visibilityChangeCallback && this.visibilityChangeCallback(this.isHidden)
                    }
                    ,
                    this.onDocumentBlur = () => {
                        this.runTimers()
                    }
                    ,
                    this.visibilityChangeCallback = () => e(this.isWindowHidden()),
                    this.startCheck(),
                    this.visibilityCheckTimeout = t
            }
            startCheck() {
                window.addEventListener("blur", this.onDocumentBlur),
                    window.addEventListener("focus", this.onDocumentFocus)
            }
            stopCheck() {
                this.stopTimers(),
                    this.isHidden = !1
            }
            destroy() {
                window.removeEventListener("blur", this.onDocumentBlur),
                    window.removeEventListener("focus", this.onDocumentFocus),
                    this.stopCheck()
            }
            stopTimers() {
                window.clearTimeout(this.timeoutId),
                    window.cancelAnimationFrame(this.animationFrameId)
            }
        }
        const ht = (e, t, i) => {
            let s;
            const r = new Be(!1)
                , n = new Be(!1)
                , a = function (e) {
                    const t = dt.getDocumentHiddenAttr();
                    return t ? new dt(e, t) : new At(e)
                }((e => n.next(e)));
            return e.add(Re((() => {
                a.destroy()
            }
            ))),
                n.pipe(Ve(t.enableVideo)).subscribe((([e, t]) => {
                    if (e) {
                        if (!t)
                            return;
                        r.next(!0),
                            i.scheduler.deschedule(s)
                    } else
                        s = i.scheduler.schedule((() => r.next(!1)), 500)
                }
                )).closeBy(e),
                Object.assign(Object.assign({}, t), {
                    isBackgroundMode: r.pipe(d())
                })
        }
            , pt = (e, t, i) => {
                let s;
                const r = new Be(!1);
                t.isBackgroundMode.subscribe((e => (e => {
                    if (i.deviceSupport.IS_DESKTOP)
                        if (e) {
                            const e = () => {
                                s = void 0,
                                    r.next(!0)
                            }
                                ;
                            s = i.scheduler.schedule(e, 1e4)
                        } else
                            r.next(!1),
                                s && (i.scheduler.deschedule(s),
                                    s = void 0)
                }
                )(e))).closeBy(e);
                const n = Le([t.qualityMode, r], (e => e)).pipe(ze((([e, t]) => t ? j.INTERNAL : e)), d(), De((() => new Fe(1))));
                return Object.assign(Object.assign({}, t), {
                    qualityMode: n.pipe(d())
                })
            }
            , ft = (e, t, i) => {
                const s = Le([t.enableVideo, t.isBackgroundMode], (e => e)).pipe(ze((([e, t]) => {
                    const s = t && !i.deviceSupport.IS_DESKTOP;
                    return e && !s
                }
                )), d(), De((() => new Fe(1))));
                return Object.assign(Object.assign({}, t), {
                    play: s
                })
            }
            ;
        function mt(e) {
            var t, i;
            if (-1 !== e.indexOf("version"))
                return "dev";
            const s = e.split("_");
            return 1 === s.length ? e : null !== (i = null === (t = s.shift()) || void 0 === t ? void 0 : t.replace("v", "")) && void 0 !== i ? i : ""
        }
        function bt(e) {
            var t;
            return -1 !== e.indexOf("version") ? "dev" : 1 === e.split("_").length ? "bundled app" : null !== (t = e.split("_").pop()) && void 0 !== t ? t : ""
        }
        var vt = i(3738);
        const yt = {
            limit: 10,
            backgroundColor: "#000",
            fontSize: 12,
            gridYCount: 5,
            gridXCount: 15
        }
            , gt = Object.assign(Object.assign({}, yt), {
                type: "line",
                values: [],
                label: "Line Chart",
                color: "#0f0"
            })
            , wt = Object.assign(Object.assign({}, yt), {
                type: "multiline",
                values: [],
                labels: ["Line Chart1", "Line Chart2", "Line Chart3"],
                colors: ["#f00", "#0f0", "#00f"]
            })
            , St = 50;
        class Et {
            constructor(e) {
                this.selectedMultiLineIndex = 0,
                    this.update = e => {
                        "multiline" === this.chartState.type ? this.chartState.values = this.chartState.values.map(((t, i) => (t.push(e[i]),
                            t.length > this.chartState.limit && t.shift(),
                            t))) : (this.chartState.values.push(...e),
                                this.chartState.values.length > this.chartState.limit && this.chartState.values.shift()),
                            this.draw()
                    }
                    ,
                    this.clear = () => {
                        const { width: e, height: t } = this.canvas
                            , { backgroundColor: i } = this.chartState;
                        return this.ctx.beginPath(),
                            this.ctx.rect(0, 0, e, t),
                            this.ctx.fillStyle = i,
                            this.ctx.fill(),
                            this
                    }
                    ,
                    this.drawLabel = () => {
                        const { width: e } = this.canvas
                            , { fontSize: t } = this.chartState
                            , i = e / 2;
                        if ("multiline" === this.chartState.type) {
                            const { labels: e, colors: s } = this.chartState;
                            return this.ctx.font = `${t}px Arial`,
                                e.forEach(((e, r) => {
                                    if (!this.ctx)
                                        return this;
                                    this.ctx.fillStyle = r === this.selectedMultiLineIndex ? "#ddd" : "#555",
                                        this.ctx.fillText(e, i - 60 + 60 * r, t),
                                        this.ctx.beginPath(),
                                        this.ctx.strokeStyle = (null == s ? void 0 : s[r]) || "#555",
                                        this.ctx.arc(i - 65 + 60 * r, t - 4, 2, 0, 2 * Math.PI),
                                        this.ctx.stroke()
                                }
                                )),
                                this
                        }
                        {
                            const { label: e, color: s } = this.chartState;
                            return this.ctx.font = `${t}px Arial`,
                                this.ctx.fillStyle = "#ddd",
                                this.ctx.fillText(e, i - 30, t),
                                this.ctx.beginPath(),
                                this.ctx.strokeStyle = s || "#555",
                                this.ctx.arc(i - 35, t - 4, 2, 0, 2 * Math.PI),
                                this.ctx.stroke(),
                                this
                        }
                    }
                    ,
                    this.drawGrid = e => {
                        const t = "x" === e
                            , { width: i, height: s } = this.canvas
                            , { gridYCount: r, gridXCount: n, fontSize: a } = this.chartState
                            , o = t ? i / n : (s - 15) / r
                            , l = t ? n : r;
                        this.ctx.strokeStyle = "#111",
                            this.ctx.beginPath(),
                            this.ctx.lineWidth = 1;
                        for (let c = 0; c < l; c++)
                            if (this.ctx.font = `${a}px Arial`,
                                this.ctx.fillStyle = "#ddd",
                                t)
                                this.ctx.moveTo(i - c * o, 0),
                                    this.ctx.lineTo(i - c * o, s);
                            else {
                                const e = "line" === this.chartState.type && this.chartState.valueToString ? this.chartState.valueToString.get(Math.round(c * o / this.pixelPerValue.y)) || "" : (c * o / this.pixelPerValue.y).toFixed(0);
                                this.ctx.moveTo(0, s - c * o),
                                    this.ctx.lineTo(i, s - c * o),
                                    this.ctx.stroke();
                                const t = 3;
                                this.ctx.fillText(e, t, s - c * o - t)
                            }
                        return this
                    }
                    ,
                    this.drawLines = () => {
                        const { height: e } = this.canvas;
                        if ("multiline" === this.chartState.type) {
                            const { colors: t } = this.chartState;
                            this.chartState.values.forEach(((i, s) => {
                                if (!this.ctx)
                                    return this;
                                this.ctx.strokeStyle = (null == t ? void 0 : t[s]) || "#f00",
                                    this.ctx.beginPath(),
                                    this.ctx.moveTo(St, i.length > 0 ? e - i[0] * this.pixelPerValue.y : e),
                                    i.forEach(((t, i) => {
                                        var s;
                                        null === (s = this.ctx) || void 0 === s || s.lineTo(50 + i * this.pixelPerValue.x, e - t * this.pixelPerValue.y)
                                    }
                                    )),
                                    this.ctx.stroke()
                            }
                            ))
                        } else {
                            const { color: t } = this.chartState;
                            this.ctx.strokeStyle = t || "#f00",
                                this.ctx.beginPath(),
                                this.ctx.moveTo(St, this.chartState.values.length > 0 ? e - this.chartState.values[0] * this.pixelPerValue.y : e),
                                this.chartState.values.forEach(((t, i) => {
                                    var s;
                                    null === (s = this.ctx) || void 0 === s || s.lineTo(St + i * this.pixelPerValue.x, e - t * this.pixelPerValue.y)
                                }
                                )),
                                this.ctx.stroke()
                        }
                        return this
                    }
                    ,
                    this.drawTooltip = e => {
                        this.draw();
                        const { fontSize: t } = this.chartState
                            , { height: i, width: s } = this.canvas
                            , r = this.canvas.getBoundingClientRect()
                            , n = e.clientX - r.left
                            , a = e.clientY - r.top
                            , o = Math.round((n - St) / this.pixelPerValue.x);
                        let l, c = "", u = 0;
                        if ("multiline" === this.chartState.type) {
                            const { labels: e, colors: t } = this.chartState;
                            if (this.ctx.fillStyle = this.ctx.strokeStyle = (null == t ? void 0 : t[this.selectedMultiLineIndex]) || "#f00",
                                l = this.chartState.values[this.selectedMultiLineIndex][o],
                                void 0 === l)
                                return;
                            c = `${e[this.selectedMultiLineIndex]}: ${this.chartState.values[this.selectedMultiLineIndex][o]}`,
                                u = i - this.chartState.values[this.selectedMultiLineIndex][o] * this.pixelPerValue.y
                        } else {
                            const { label: e, valueToString: t } = this.chartState;
                            if (l = this.chartState.values[o],
                                void 0 === l)
                                return;
                            c = t ? `${e}: ${t.get(l) || ""}` : `${e}: ${l}`,
                                u = i - this.chartState.values[o] * this.pixelPerValue.y
                        }
                        this.ctx.beginPath(),
                            this.ctx.font = `${t}px Arial`,
                            this.ctx.fillStyle = "#aaa";
                        const d = n > s / 2 ? -100 : 10;
                        this.ctx.fillText(c, n + d, a),
                            this.ctx.stroke(),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(n, 0),
                            this.ctx.lineTo(n, this.canvas.height),
                            this.ctx.stroke(),
                            this.ctx.beginPath(),
                            this.ctx.arc(St + o * this.pixelPerValue.x, u, 3, 0, 2 * Math.PI),
                            this.ctx.stroke()
                    }
                    ,
                    this.selectChart = e => {
                        this.selectedMultiLineIndex++,
                            this.selectedMultiLineIndex >= this.chartState.values.length && (this.selectedMultiLineIndex = 0),
                            this.draw()
                    }
                    ,
                    this.getMaxValue = (e, t, i) => {
                        if (i)
                            if (i.includes("max+")) {
                                const s = parseInt(i.replace("max+", ""));
                                e = Math.max(...t) + s + 1
                            } else
                                e = parseInt(i);
                        return e
                    }
                    ,
                    this.draw = () => {
                        const e = this.ctx;
                        this.canvas && e && this.clear().drawLabel().drawGrid("y").drawGrid("x").drawLines()
                    }
                    ,
                    "multiline" === e.type ? this.chartState = Object.assign(Object.assign({}, wt), e) : this.chartState = Object.assign(Object.assign({}, gt), e),
                    this.canvas = document.createElement("canvas"),
                    this.canvas.style.display = "block",
                    this.canvas.style.position = "relative",
                    this.canvas.style.margin = "0",
                    this.canvas.style.borderLeft = "5px solid #000",
                    this.canvas.style.borderTop = "1px solid #000",
                    this.canvas.style.borderBottom = "5px solid #000",
                    this.canvas.style.opacity = "0.7",
                    this.canvas.style.filter = "saturate(2)",
                    this.canvas.width = 240,
                    this.canvas.height = 100,
                    this.canvas.addEventListener("mousemove", this.drawTooltip),
                    this.canvas.addEventListener("click", this.selectChart);
                const t = this.canvas.getContext("2d");
                if (!this.canvas || !t)
                    throw new be(se, "Chart Error. Canvas is not supported");
                this.ctx = t
            }
            destroy() {
                this.canvas.removeEventListener("mousemove", this.drawTooltip),
                    this.canvas.removeEventListener("click", this.selectChart)
            }
            getCanvas() {
                return this.canvas
            }
            get pixelPerValue() {
                var e;
                const { width: t, height: i } = this.canvas
                    , { limit: s } = this.chartState;
                let r = 0;
                switch (this.chartState.type) {
                    case "line":
                        if (r = this.getMaxValue(Math.max(...this.chartState.values) + 1, this.chartState.values, this.chartState.maxY),
                            this.chartState.valueToString && (r = this.chartState.valueToString.size),
                            this.chartState.valueToString)
                            return {
                                x: (t - St) / (s - 1),
                                y: (i - 15) / r
                            };
                        break;
                    case "multiline":
                        r = this.getMaxValue(Math.max(...this.chartState.values.map((e => Math.max(...e)))) + 1, this.chartState.values[this.selectedMultiLineIndex], null === (e = this.chartState.maxY) || void 0 === e ? void 0 : e[this.selectedMultiLineIndex])
                }
                const n = Math.log10(r)
                    , a = Math.ceil(isFinite(n) ? n : 0);
                return r = (Math.floor(r / Math.pow(10, a - 1)) + 1) * Math.pow(10, Math.ceil(a - 1)),
                {
                    x: (t - St) / (s - 1),
                    y: (i - 15) / r
                }
            }
        }
        class Pt {
            constructor() {
                this.valueToQuality = new Map,
                    this.isAvailableQualityRceived = !1,
                    this.lastDroppedFrames = 0,
                    this.container = document.createElement("div")
            }
            getContainer() {
                return this.container
            }
            update(e) {
                var t, i, s, r, n, a, o;
                if (!this.isAvailableQualityRceived && e.availableQualities.length > 0) {
                    this.isAvailableQualityRceived = !0,
                        this.qualityToValue = new Map(null === (t = e.availableQualities) || void 0 === t ? void 0 : t.map(((e, t) => [e, t]))),
                        this.qualityToValue.forEach(((e, t) => {
                            this.valueToQuality.set(e, t)
                        }
                        ));
                    try {
                        this.chartQuality = new Et({
                            label: "Quality",
                            type: "line",
                            gridYCount: null === (i = e.availableQualities) || void 0 === i ? void 0 : i.length,
                            limit: 60,
                            values: [],
                            valueToString: this.valueToQuality
                        }),
                            this.chartLatencyBitrate = new Et({
                                labels: ["Latency", "Buf.Len"],
                                type: "multiline",
                                colors: ["#09f", "#f09"],
                                limit: 60,
                                values: [[], []]
                            }),
                            this.chartDroppedFrames = new Et({
                                label: "Dropped frames",
                                type: "line",
                                color: "#f9f",
                                limit: 60,
                                values: []
                            }),
                            this.chartBandwidth = new Et({
                                labels: ["Bitrate", "Bandwidth"],
                                type: "multiline",
                                colors: ["#ff0", "#f90"],
                                limit: 60,
                                values: [[], []],
                                maxY: ["max+1000"]
                            }),
                            this.container.appendChild(this.chartQuality.getCanvas()),
                            this.container.appendChild(this.chartLatencyBitrate.getCanvas()),
                            this.container.appendChild(this.chartDroppedFrames.getCanvas()),
                            this.container.appendChild(this.chartBandwidth.getCanvas())
                    } catch (p) { }
                }
                const { currentQuality: l, latency: c, playbackBitrate: u, droppedFrames: d, bandwidth: A, bufferLength: h } = e;
                l && (null === (s = this.chartQuality) || void 0 === s || s.update([null !== (r = this.qualityToValue.get(l)) && void 0 !== r ? r : -1])),
                    null === (n = this.chartLatencyBitrate) || void 0 === n || n.update([null != c ? c : 0, null != h ? h : 0]),
                    null === (a = this.chartDroppedFrames) || void 0 === a || a.update([(null != d ? d : 0) - this.lastDroppedFrames]),
                    null === (o = this.chartBandwidth) || void 0 === o || o.update([null != u ? u : 0, null != A ? A : 0]),
                    this.lastDroppedFrames = null != d ? d : 0
            }
            destroy() {
                var e, t, i, s;
                this.container.innerHTML = "",
                    null === (e = this.chartLatencyBitrate) || void 0 === e || e.destroy(),
                    null === (t = this.chartDroppedFrames) || void 0 === t || t.destroy(),
                    null === (i = this.chartBandwidth) || void 0 === i || i.destroy(),
                    null === (s = this.chartQuality) || void 0 === s || s.destroy()
            }
        }
        function Tt(e) {
            return ("0" + e).slice(-2)
        }
        function It(e) {
            if (!e)
                return "";
            const t = new Date(e);
            return `${Tt(t.getHours())}:${Tt(t.getMinutes())}:${Tt(t.getSeconds())}`
        }
        const Mt = {
            background: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            position: "fixed",
            top: 0,
            left: 0,
            "z-index": 1100,
            margin: 0,
            "text-align": "left",
            "font-size": "12px",
            "line-height": "130%",
            display: "flex",
            overflow: "auto",
            width: "100%",
            "max-width": "fit-content",
            "pointer-events": "none"
        }
            , Ot = {
                padding: "20px",
                "min-width": "300px",
                "list-style-type": "none"
            }
            , Ct = {
                "font-size": "1.2em",
                "text-shadow": "0 0 5px black"
            };
        class xt {
            constructor(e) {
                this.initialProps = e,
                    this.onClick = e => {
                        e.stopPropagation(),
                            this.initialProps.onClick()
                    }
                    ,
                    this.container = document.createElement("div"),
                    this.container.id = "video-statistics",
                    Object.assign(this.container.style, Mt),
                    this.tableContainer = document.createElement("ul"),
                    Object.assign(this.tableContainer.style, Ot),
                    this.tableContainer.addEventListener("click", this.onClick),
                    this.charts = new Pt,
                    this.container.appendChild(this.tableContainer),
                    this.container.appendChild(this.charts.getContainer()),
                    this.update(this.initialProps)
            }
            update(e) {
                var t, i, s, r, n, a, o, l, c, u, d;
                const A = [{
                    label: "Player",
                    class: "player",
                    value: e.playerName || ""
                }, {
                    label: "Version",
                    class: "version",
                    value: mt(vt.version)
                }, {
                    label: "Version hash",
                    class: "version-hash",
                    value: bt(vt.version)
                }, {
                    label: "Host",
                    class: "host",
                    value: e.streamHost || ""
                }, {
                    label: "Stream ID",
                    class: "stream-id",
                    value: null !== (t = e.streamId) && void 0 !== t ? t : ""
                }, {
                    label: "Stream",
                    class: "stream",
                    value: e.streamName || ""
                }, {
                    label: "Video loading time (ms)",
                    class: "loading-time",
                    value: (null === (i = e.videoInitTime) || void 0 === i ? void 0 : i.toFixed()) || ""
                }, {
                    label: "Droped frames",
                    class: "drop-frm",
                    style: {
                        color: "#f9f"
                    },
                    value: (null === (s = e.droppedFrames) || void 0 === s ? void 0 : s.toFixed()) || ""
                }, {
                    label: "FPS",
                    class: "fps",
                    value: (null === (r = e.fps) || void 0 === r ? void 0 : r.toFixed(2)) || ""
                }, {
                    label: "Bitrate (kbps)",
                    class: "bitrate",
                    style: {
                        color: "#ff0"
                    },
                    value: (null === (n = e.playbackBitrate) || void 0 === n ? void 0 : n.toFixed(2)) || ""
                }, {
                    label: "Qualities",
                    class: "qualities",
                    value: (null === (a = e.availableQualities) || void 0 === a ? void 0 : a.join(" | ")) || ""
                }, {
                    label: "Current quality",
                    class: "cur-quality",
                    style: {
                        color: "lime"
                    },
                    value: null !== (o = e.currentQuality) && void 0 !== o ? o : ""
                }, {
                    label: "Quality mode",
                    class: "quality-mode",
                    value: null !== (l = e.qualityMode) && void 0 !== l ? l : ""
                }, {
                    label: "Latency (ms)",
                    class: "latency",
                    style: {
                        color: "#09f"
                    },
                    value: (null === (c = e.latency) || void 0 === c ? void 0 : c.toFixed(2)) || ""
                }, {
                    label: "Wallclock (time)",
                    class: "wallclock-time",
                    value: It(e.wallclock)
                }, {
                    label: "Wallclock (ms)",
                    class: "wallclock-ms",
                    value: e.wallclock || ""
                }, {
                    label: "BufferLength (ms)",
                    class: "buffer",
                    style: {
                        color: "#f09"
                    },
                    value: (null === (u = e.bufferLength) || void 0 === u ? void 0 : u.toFixed(2)) || ""
                }, {
                    label: "Bandwidth (kbps)",
                    class: "bandwidth",
                    style: {
                        color: "#f90"
                    },
                    value: (null === (d = e.bandwidth) || void 0 === d ? void 0 : d.toFixed(2)) || ""
                }];
                this.tableContainer.innerHTML = "";
                const h = document.createElement("li");
                h.innerHTML = "<h3 style='font-weight: 600; font-size: 130%; margin-bottom: 0.4em'>Player Info</h3>",
                    this.tableContainer.appendChild(h),
                    A.forEach((e => {
                        const t = document.createElement("li");
                        t.className = e.class,
                            t.innerHTML = `<strong style='font-weight: 600;'>${e.label}</strong>: ${e.value}`,
                            Object.assign(t.style, Object.assign(Object.assign({}, Ct), e.style)),
                            this.tableContainer.appendChild(t)
                    }
                    )),
                    this.charts.update(e)
            }
            getContainer() {
                return this.container
            }
            destroy() {
                this.tableContainer.removeEventListener("click", this.onClick),
                    this.charts.destroy()
            }
        }
        class _t {
            constructor() {
                this.runnables = [],
                    this.runnablesCheckTimeout = 0,
                    this.nextCheckTimestamp = 0,
                    this.runInProgress = !1,
                    this.run = () => {
                        this.runInProgress = !0;
                        const e = this.now();
                        this.runnables.forEach((t => this.processRunnable(t, e))),
                            this.addedRunnables && this.addedRunnables.length && this.addedRunnables.sort(((e, t) => e.timestamp - t.timestamp)).forEach((t => this.processRunnable(t, e))),
                            this.updateRunnables(),
                            this.scheduleNextCheck(),
                            this.runInProgress = !1
                    }
            }
            schedule(e, t, i = {}) {
                const s = i.name ? i.name : this.generateUUID()
                    , r = !!i.repeat
                    , n = this.now() + t
                    , a = {
                        name: s,
                        callback: e,
                        repeat: r,
                        timeout: t,
                        timestamp: n
                    };
                return this.runInProgress ? (this.addedRunnables || (this.addedRunnables = []),
                    this.addedRunnables.push(a)) : this.runnables.push(a),
                    (!this.nextCheckTimestamp || this.nextCheckTimestamp > n) && this.scheduleNextCheck(),
                    s
            }
            deschedule(e) {
                e && ((this.addedRunnables && this.addedRunnables.length ? this.runnables.concat(this.addedRunnables) : this.runnables).forEach((t => {
                    const i = t.name;
                    (e === i || "string" != typeof e && -1 !== e.indexOf(i)) && (this.removedRunnables || (this.removedRunnables = []),
                        this.removedRunnables.push(t))
                }
                )),
                    this.runInProgress || this.updateRunnables())
            }
            reschedule(e, t, i, s = {}) {
                e && this.deschedule(e),
                    this.schedule(t, i, Object.assign(Object.assign({}, s), {
                        name: e
                    }))
            }
            destroy() {
                window.clearTimeout(this.runnablesCheckTimeout),
                    this.nextCheckTimestamp = 0,
                    this.addedRunnables = void 0,
                    this.removedRunnables = void 0,
                    this.runnables = []
            }
            now() {
                return window.performance.now()
            }
            scheduleNextCheck() {
                const e = this.addedRunnables && this.addedRunnables.length ? this.runnables.concat(this.addedRunnables) : this.runnables;
                if (window.clearTimeout(this.runnablesCheckTimeout),
                    !e.length)
                    return void (this.nextCheckTimestamp = 0);
                const t = this.now()
                    , i = e.sort(((e, t) => e.timestamp - t.timestamp));
                this.nextCheckTimestamp = i[0].timestamp,
                    this.runnablesCheckTimeout = window.setTimeout(this.run, Math.ceil(this.nextCheckTimestamp - t))
            }
            processRunnable(e, t) {
                if ((!this.removedRunnables || -1 === this.removedRunnables.indexOf(e)) && t >= e.timestamp) {
                    try {
                        e.callback()
                    } catch (i) { }
                    e.repeat ? e.timestamp += e.timeout : (this.removedRunnables || (this.removedRunnables = []),
                        this.removedRunnables.push(e))
                }
            }
            updateRunnables() {
                const e = this.addedRunnables
                    , t = this.removedRunnables;
                t && (this.runnables = this.runnables.filter((e => -1 === t.indexOf(e)))),
                    e && (this.runnables = this.runnables.concat(e.filter((e => !t || -1 === t.indexOf(e))))),
                    this.runnables = this.runnables.sort(((e, t) => e.timestamp - t.timestamp)),
                    this.runnables.length || (this.nextCheckTimestamp = 0),
                    this.removedRunnables = void 0,
                    this.addedRunnables = void 0
            }
            generateUUID() {
                return `${window.performance.now()}-${Math.random().toString(36).substr(2, 10)}`
            }
        }
        class Rt {
            constructor(e) {
                this.onShowPlayerInfoChange = e,
                    this.playerStats = {
                        playerName: V.None,
                        bandwidth: 0,
                        isPlaying: !1,
                        fps: 0,
                        droppedFrames: 0,
                        availableQualities: [],
                        soundVolume: 0,
                        videoSessionId: ""
                    },
                    this.startLoadingTime = 0,
                    this.scheduler = new _t,
                    this.updateToken = (...e) => { }
                    ,
                    this.getInfoTableStats = () => {
                        const { latency: e, playbackBitrate: t, wallclock: i, bufferLength: s, streamHost: r, streamName: n, streamId: a, availableQualities: o, currentQuality: l, qualityMode: c, fps: u, droppedFrames: d, videoInitTime: A, playerName: h, bandwidth: p } = this.playerStats;
                        return {
                            onClick: this.onClick,
                            latency: e,
                            playbackBitrate: t,
                            wallclock: i,
                            bufferLength: s,
                            streamHost: r,
                            streamName: n,
                            streamId: a,
                            availableQualities: o,
                            currentQuality: l,
                            qualityMode: c,
                            fps: u,
                            droppedFrames: d,
                            videoInitTime: A,
                            playerName: h,
                            bandwidth: p
                        }
                    }
                    ,
                    this.resetPlayerStats = () => {
                        this.playerStats = {
                            playerName: V.None,
                            isPlaying: !1,
                            bandwidth: 0,
                            fps: 0,
                            droppedFrames: 0,
                            availableQualities: [],
                            soundVolume: 0,
                            videoSessionId: ""
                        },
                            this.startLoadingTime = 0
                    }
                    ,
                    this.onClick = () => {
                        this.onShowPlayerInfoChange(!1)
                    }
                    ,
                    this.playerInfoTable = new xt(this.getInfoTableStats())
            }
            showInfo(e) {
                e && !this.renderTimeout && (this.renderTimeout = this.scheduler.schedule((() => {
                    this.playerInfoTable.update(this.getInfoTableStats())
                }
                ), 1e3, {
                    repeat: !0
                })),
                    !e && this.renderTimeout && (this.scheduler.deschedule(this.renderTimeout),
                        this.renderTimeout = void 0)
            }
            onVolumeUpdate(e, t) { }
            onPlaybackAttempt(e) {
                this.playerStats.playerName = e.playerName,
                    this.playerStats.videoSessionId = e.videoSessionId,
                    this.playerStats.videoInitTime = void 0,
                    this.startLoadingTime = window.performance.now()
            }
            onPlaybackStarted(e) {
                this.playerStats.videoInitTime || (this.playerStats = Object.assign(Object.assign({}, this.playerStats), {
                    playerName: e,
                    fps: 0,
                    droppedFrames: 0,
                    isPlaying: !0,
                    videoInitTime: Math.round(window.performance.now() - this.startLoadingTime)
                }))
            }
            onPlaybackEvent() { }
            onStats(e) {
                Object.assign(this.playerStats, e)
            }
            onStop(e) {
                this.playerStats.isPlaying = !1
            }
            onError(e) {
                this.resetPlayerStats()
            }
            destroy() {
                this.scheduler.deschedule(this.renderTimeout),
                    this.playerInfoTable.destroy()
            }
            getContainer() {
                return this.playerInfoTable.getContainer()
            }
        }
        class kt {
            constructor(e) {
                this.onStatsPublisher = e,
                    this.onVolumeUpdate = (...e) => {
                        this.onStatsPublisher.emit(["onVolumeUpdate", e])
                    }
                    ,
                    this.onPlaybackAttempt = (...e) => {
                        this.onStatsPublisher.emit(["onPlaybackAttempt", e])
                    }
                    ,
                    this.onPlaybackStarted = (...e) => {
                        this.onStatsPublisher.emit(["onPlaybackStarted", e])
                    }
                    ,
                    this.onPlaybackEvent = (...e) => {
                        this.onStatsPublisher.emit(["onPlaybackEvent", e])
                    }
                    ,
                    this.onStats = (...e) => {
                        this.onStatsPublisher.emit(["onStats", e])
                    }
                    ,
                    this.onStop = (...e) => {
                        this.onStatsPublisher.emit(["onStop", e])
                    }
                    ,
                    this.onError = (...e) => {
                        this.onStatsPublisher.emit(["onError", e])
                    }
                    ,
                    this.updateToken = (...e) => {
                        this.onStatsPublisher.emit(["updateToken", e])
                    }
            }
            destroy() {
                this.onStatsPublisher.emit(["destroy", []])
            }
        }
        var Bt;
        !function (e) {
            e.AppSwitchStarted = "evoAppSwitchStarted",
                e.ComponentMounted = "evoVideoComponentMounted"
        }(Bt || (Bt = {}));
        const Nt = {
            wrapperInitToLibLoadingStartedTime: null,
            libLoadingTime: null,
            libLoadedToMountedTime: null
        }
            , Lt = /video_(?!version)[^./]+\.js/;
        function Dt(e) {
            var t;
            const i = t => function (e, t) {
                const i = t.find((t => t.name === e));
                return i ? i.startTime : null
            }(t, e)
                , s = i(Bt.ComponentMounted);
            if (!s || 0 === e.length)
                return Nt;
            const r = null !== (t = i(Bt.AppSwitchStarted)) && void 0 !== t ? t : e[0].startTime
                , n = e.find((e => Lt.test(e.name)))
                , a = n ? n.startTime : r
                , o = n ? n.startTime + n.duration : r;
            return {
                wrapperInitToLibLoadingStartedTime: Math.round(a - r),
                libLoadingTime: Math.round(o - a),
                libLoadedToMountedTime: Math.round(s - o)
            }
        }
        function Ft(e) {
            let t = null;
            return {
                push: function (i) {
                    const s = e(i);
                    s && (null == t || t > s) && (t = s)
                },
                clean: function () {
                    t = null
                },
                aggregate: function () {
                    return t
                }
            }
        }
        function jt(e) {
            let t = null;
            return {
                push: function (i) {
                    const s = e(i);
                    s && (null == t || t < s) && (t = s)
                },
                clean: function () {
                    t = null
                },
                aggregate: function () {
                    return t
                }
            }
        }
        function Ut(e) {
            let t = [];
            return {
                push: function (i) {
                    const s = e(i);
                    s && t.push(s)
                },
                clean: function () {
                    t.splice(0, t.length)
                },
                aggregate: function () {
                    return 0 === t.length ? null : t.reduce(((e, t) => e + t), 0) / t.length
                }
            }
        }
        const Wt = mt(vt.version);
        function Vt(e, t, i, s, r = {
            valid: 1
        }) {
            const { videoSessionId: n, publishers: { stats: a }, gameType: o, abtest: l } = e
                , c = {
                    info: s,
                    logic: {
                        currentPlayer: t
                    },
                    client: {
                        pointInTime: i,
                        timestamp: Date.now()
                    },
                    session: {
                        videoSessionId: n,
                        gameType: o,
                        scenario: l
                    },
                    metrics: r,
                    v: Wt
                };
            a.emit(["CLIENT_VIDEO_V2_INFO", c])
        }
        function Qt(e) {
            return e.appleScreenType ? e.appleScreenType : "unknown" === e.name ? null : e.name
        }
        const Ht = 15e3;
        class Gt {
            constructor(e, t, i) {
                this.playerStats = {
                    playerName: V.None,
                    isPlaying: !1,
                    fps: 0,
                    droppedFrames: 0,
                    availableQualities: [],
                    soundVolume: 0,
                    videoSessionId: ""
                },
                    this.localStats = {
                        fpsMin: 0,
                        bufferLengthMin: 0,
                        bufferLengthMax: 0,
                        droppedFramesLastHeartbeat: 0
                    },
                    this.scheduler = new _t,
                    this.startLoadingTime = 0,
                    this.wasVideoLoadingTimeSent = !1,
                    this.lastHeartbeatTimestamp = 0,
                    this.initTime = window.performance.now(),
                    this.attemptCount = 0,
                    this.wasFirstStarted = !1,
                    this.fallbackCount = 0,
                    this.bufferingDuration = 0,
                    this.currentToken = null,
                    this.onVolumeUpdate = (e, t) => {
                        this.playerStats.soundVolume = e ? 0 : t
                    }
                    ,
                    this.updateToken = e => {
                        this.currentToken = e
                    }
                    ,
                    this.onPlaybackAttempt = e => {
                        e.playerName !== this.playerStats.playerName && this.playerStats.playerName !== V.None && this.fallbackCount++,
                            this.playerStats.playerName = e.playerName,
                            this.attemptCount++,
                            this.startLoadingTime = window.performance.now(),
                            void 0 === this.playbackAttemptTime && (this.playbackAttemptTime = window.performance.now());
                        const { publishers: { stats: t }, videoSessionId: i, gameType: s, abtest: r } = this.staticStats
                            , n = {
                                behaviour: {
                                    autoPlayAllowed: !this.playerStats.userInteractionRequired
                                },
                                logic: {
                                    currentPlayer: this.playerStats.playerName,
                                    tableBaseName: e.tableBaseName,
                                    currentToken: this.currentToken
                                },
                                client: {
                                    pointInTime: Math.round(window.performance.now() - this.initTime),
                                    timestamp: Date.now()
                                },
                                session: {
                                    videoSessionId: i,
                                    gameType: s,
                                    scenario: r
                                },
                                v: Wt
                            };
                        t.emit(["CLIENT_VIDEO_V2_PLAYBACK_ATTEMPT", n]),
                            this.wasVideoLoadingTimeSent = !1,
                            this.playerStats.userInteractionRequired = !1,
                            this.playerStats.currentQuality = void 0,
                            this.playerStats.latency = void 0
                    }
                    ,
                    this.onPlaybackStarted = e => {
                        if (this.aggregator.clean(),
                            this.resetStoredStats(),
                            !this.wasVideoLoadingTimeSent) {
                            performance && performance.mark && performance.mark("evoVideoPlaying"),
                                this.playerStats.playerName = e,
                                this.playerStats.fps = 0,
                                this.playerStats.droppedFrames = 0,
                                this.playerStats.isPlaying = !0,
                                this.playerStats.videoInitTime = Math.round(window.performance.now() - this.startLoadingTime),
                                this.localStats.bufferLengthMin = 0,
                                this.localStats.bufferLengthMax = 0,
                                this.startLoadingTime = 0,
                                this.wasVideoLoadingTimeSent = !0;
                            const t = void 0 !== this.playbackAttemptTime ? Math.round(window.performance.now() - this.playbackAttemptTime) : void 0
                                , i = Math.round(window.performance.now() - this.initTime)
                                , { videoSessionId: s, gameType: r, publishers: { stats: n }, abtest: a } = this.staticStats
                                , o = (() => {
                                    const { streamName: e = "" } = this.playerStats;
                                    return e.slice(0, e.lastIndexOf("_"))
                                }
                                )()
                                , l = {
                                    logic: {
                                        currentPlayer: e,
                                        currentQuality: this.playerStats.currentQuality,
                                        attemptCount: this.attemptCount,
                                        firstTime: !this.wasFirstStarted,
                                        fallbackCount: this.fallbackCount,
                                        streamBaseName: o
                                    },
                                    video: {
                                        streamHost: this.playerStats.streamHost
                                    },
                                    client: {
                                        pointInTime: i,
                                        timestamp: Date.now()
                                    },
                                    session: {
                                        videoSessionId: s,
                                        scenario: a,
                                        gameType: r
                                    },
                                    metrics: {
                                        timeToVideo: t
                                    },
                                    v: Wt
                                };
                            n.emit(["CLIENT_VIDEO_V2_PLAYBACK_STARTED", l]),
                                this.playbackAttemptTime = void 0,
                                this.attemptCount = 0,
                                this.wasFirstStarted = !0,
                                this.fallbackCount = 0
                        }
                        this.bufferingTime = void 0,
                            this.bufferingDuration = 0,
                            this.scheduler.deschedule(this.heartbeatTimeout),
                            this.heartbeatTimeout = this.scheduler.schedule(this.sendHeartbeat, Ht, {
                                repeat: !0
                            })
                    }
                    ,
                    this.onPlaybackEvent = e => {
                        const t = e.playerName || this.playerStats.playerName;
                        let i, s = {
                            valid: 1
                        };
                        const { data: r } = e;
                        switch (e.eventType) {
                            case Y.UPGRADE:
                            case Y.DOWNGRADE:
                            case Y.MANUAL_CHANGE:
                                {
                                    if (!r || !r.qualityChanged)
                                        break;
                                    const { prev: e, next: t } = r.qualityChanged;
                                    i = {
                                        prev: e,
                                        next: t
                                    },
                                        this.playerStats.currentQuality = t;
                                    break
                                }
                            case Y.QUALITY_MODE_CHANGED:
                                {
                                    if (!r || !r.qualityModeChanged)
                                        break;
                                    const { prev: e, next: t, quality: s } = r.qualityModeChanged;
                                    i = {
                                        prev: e,
                                        next: t,
                                        quality: s
                                    },
                                        this.playerStats.currentQuality = s;
                                    break
                                }
                            case Y.MANIFEST_STATS:
                                if (!r || !r.manifestFetchStats)
                                    break;
                                const { manifestFetchStats: t } = r;
                                i = {
                                    streamHost: r.streamHost
                                };
                                let n = t.manifestLoadingTime;
                                const a = t.cdnDecisionTime;
                                a && n && (n += a),
                                    s = Object.assign(Object.assign({}, s), {
                                        manifestLoadingTime: n,
                                        cdnDecisionTime: a,
                                        availableQualities: r.manifestFetchStats.availableQualities
                                    });
                                break;
                            case Y.WAITING:
                                void 0 === this.bufferingTime && (this.bufferingTime = performance.now());
                                break;
                            case Y.PLAYING:
                                this.bufferingTime && (this.bufferingDuration += Math.round(performance.now() - this.bufferingTime),
                                    this.bufferingTime = void 0);
                                break;
                            case Y.STREAM_ID_CHANGED:
                                if (!r || !r.streamIdChanged)
                                    break;
                                const { streamIdChanged: o } = r;
                                i = {
                                    prev: o.prev.toString(),
                                    next: o.next.toString()
                                };
                                break;
                            case Y.WARNING:
                                i = {
                                    type: e.eventType,
                                    reason: e.eventReason
                                }
                        }
                        if (e.eventReason === ee.MaxLatencyReached && (i = {
                            latency: (null == r ? void 0 : r.latency) || this.playerStats.latency
                        }),
                            i) {
                            const r = Math.round(window.performance.now() - this.initTime);
                            i.type = e.eventType,
                                i.reason = e.eventReason,
                                Vt(this.staticStats, t, r, i, s)
                        }
                    }
                    ,
                    this.onStats = e => {
                        const { fps: t, bufferLength: i } = e
                            , { fpsMin: s } = this.localStats;
                        if (t && (!s || t < s) && (this.localStats.fpsMin = t),
                            i) {
                            const { bufferLengthMin: e, bufferLengthMax: t } = this.localStats;
                            (!e || i < e) && (this.localStats.bufferLengthMin = i),
                                (!t || i > t) && (this.localStats.bufferLengthMax = i)
                        }
                        e.streamName && (this.playerStats.streamName = e.streamName),
                            Object.assign(this.playerStats, e),
                            this.aggregator.push(e)
                    }
                    ,
                    this.onStop = e => {
                        if (this.playerStats.isPlaying = !1,
                            this.scheduler.deschedule(this.heartbeatTimeout),
                            e) {
                            const e = {
                                type: "PLAYBACK_STOPPED"
                            }
                                , t = Math.round(window.performance.now() - this.initTime);
                            Vt(this.staticStats, this.playerStats.playerName, t, e)
                        }
                    }
                    ,
                    this.onError = e => {
                        const { videoSessionId: t, gameType: i, publishers: { stats: s }, abtest: r } = this.staticStats
                            , n = {
                                error: {
                                    type: e.isCritical ? Y.PLAYER_FAILED : Y.RECONNECT,
                                    reason: e.type,
                                    hasPlayerFailed: e.isCritical,
                                    description: e.message
                                },
                                logic: {
                                    currentPlayer: this.playerStats.playerName
                                },
                                client: {
                                    timestamp: Date.now(),
                                    pointInTime: Math.round(window.performance.now() - this.initTime)
                                },
                                session: {
                                    videoSessionId: t,
                                    scenario: r,
                                    gameType: i
                                },
                                v: Wt
                            };
                        s.emit(["CLIENT_VIDEO_V2_ERROR", n])
                    }
                    ,
                    this.resetStoredStats = () => {
                        this.playerStats = Object.assign(Object.assign({}, this.playerStats), {
                            isPlaying: !1,
                            fps: 0,
                            droppedFrames: 0,
                            availableQualities: [],
                            videoSessionId: "",
                            userInteractionRequired: !1,
                            latency: void 0
                        }),
                            this.localStats = {
                                fpsMin: 0,
                                bufferLengthMin: 0,
                                bufferLengthMax: 0,
                                droppedFramesLastHeartbeat: 0
                            }
                    }
                    ,
                    this.sendHeartbeat = () => {
                        const e = performance.now();
                        if (e - this.lastHeartbeatTimestamp < 14e3)
                            return;
                        this.lastHeartbeatTimestamp = e,
                            this.bufferingTime && (this.bufferingDuration += Math.round(e - this.bufferingTime));
                        const t = this.bufferingDuration > Ht ? Ht : this.bufferingDuration
                            , { publishers: { stats: i }, gameType: s, videoSessionId: r } = this.staticStats
                            , { droppedFrames: n } = this.playerStats
                            , { fpsMin: a, bufferLengthMin: o, bufferLengthMax: l, droppedFramesLastHeartbeat: c } = this.localStats
                            , u = this.aggregator.aggregate()
                            , d = {
                                metrics: {
                                    droppedFrames: Math.round(n - c),
                                    observedLowFps: Math.round(100 * a) / 100,
                                    observedMinBuffer: Math.round(o),
                                    observedMaxBuffer: Math.round(l),
                                    observedMinLatency: u.observedMinLatency,
                                    observedMaxLatency: u.observedMaxLatency,
                                    observedAverageLatency: u.observedAverageLatency ? Math.round(u.observedAverageLatency) : null,
                                    observedMinBandwidth: u.observedMinBandwidth,
                                    observedMaxBandwidth: u.observedMaxBandwidth,
                                    observedAverageBandwidth: u.observedAverageBandwidth ? Math.round(u.observedAverageBandwidth) : null,
                                    bufferTime: t,
                                    volume: this.playerStats.soundVolume
                                },
                                logic: {
                                    currentPlayer: this.playerStats.playerName,
                                    currentQuality: this.playerStats.currentQuality,
                                    currentToken: this.currentToken
                                },
                                client: {
                                    timestamp: Date.now(),
                                    pointInTime: Math.round(e - this.initTime)
                                },
                                session: {
                                    videoSessionId: r,
                                    gameType: s,
                                    scenario: this.staticStats.abtest
                                },
                                v: Wt
                            };
                        i.emit(["CLIENT_VIDEO_V2_HEARTBEAT", d]),
                            this.localStats.droppedFramesLastHeartbeat = n,
                            this.playerStats.userInteractionRequired = !1,
                            this.bufferingTime = this.bufferingTime ? e : void 0,
                            this.bufferingDuration = 0,
                            this.aggregator.clean(),
                            this.localStats.bufferLengthMin = 0,
                            this.localStats.bufferLengthMax = 0,
                            this.localStats.fpsMin = 0
                    }
                    ,
                    this.sendSessionEndEvent = () => {
                        const e = Math.round(window.performance.now() - this.initTime);
                        Vt(this.staticStats, this.playerStats.playerName, e, {
                            type: "SESSION_END"
                        })
                    }
                    ,
                    this.staticStats = e,
                    function (e, t) {
                        var i, s, r;
                        const { deviceSupport: n, publishers: { stats: a }, videoSessionId: o, abtest: l, gameType: c } = e
                            , { DeviceProperties: u, Browser: d, OS: A, userAgent: h } = n
                            , { browser: p, browserVersion: f, browserForkVersion: m, browserFork: b } = u;
                        let v;
                        v = d ? b ? d[b] : void 0 !== p ? d[p] : d[d.Other] : "";
                        const y = u.reportedScreenSize
                            , g = {
                                userAgent: h,
                                screenSize: y && y.width && y.height ? `${y.width}x${y.height}` : null,
                                type: T[u.platform],
                                name: Qt(u),
                                browser: {
                                    family: v,
                                    version: f,
                                    forkVersion: m
                                },
                                os: {
                                    family: A[u.os],
                                    version: u.osVersion
                                },
                                threads: u.threads || null,
                                maxSupportedQuality: null !== (i = u.maxSupportedQuality) && void 0 !== i ? i : null
                            }
                            , w = {
                                pointInTime: 0,
                                timestamp: Date.now()
                            }
                            , S = {
                                videoSessionId: o,
                                gameType: c,
                                scenario: l,
                                referer: window.location.hostname
                            }
                            , E = {
                                device: g,
                                client: w,
                                component: {
                                    version: vt.version,
                                    scenario: l
                                },
                                video: {
                                    masterHost: e.masterHost
                                },
                                session: S,
                                metrics: Object.assign(Object.assign({}, Dt(null !== (r = null === (s = performance.getEntries) || void 0 === s ? void 0 : s.call(performance)) && void 0 !== r ? r : [])), {
                                    isSupportedAudioWorklet: t.audioWorklet,
                                    isSupportedWebP: t.webP,
                                    isSupportedVideoDecoder: t.webCodec.video && t.webCodec.video.h264,
                                    isSupportedAv1: t.webCodec.video && t.webCodec.video.av1,
                                    isSupportedMseAv1: t.mse && t.mse.av1,
                                    isSupportedAudioDecoder: !1 !== t.webCodec.audio,
                                    isSupportedOffscreenCanvas: t.canvas.offscreen
                                }),
                                v: Wt
                            };
                        a.emit(["CLIENT_VIDEO_V2_INITIALIZED", E])
                    }(e, i),
                    this.aggregator = (() => {
                        const e = e => e.latency ? Math.round(e.latency) : void 0
                            , i = e => e.bandwidth ? Math.round(e.bandwidth) : void 0;
                        return s = {
                            observedMinLatency: Ft(e),
                            observedMaxLatency: jt(e),
                            observedAverageLatency: Ut((e => {
                                var i;
                                if (!e.latency)
                                    return;
                                const s = null === (i = Object.entries(t.video).find((([e]) => e === this.playerStats.playerName))) || void 0 === i ? void 0 : i.pop();
                                return s && e.latency >= 0 && e.latency <= s.latency.max ? Math.round(e.latency) : void 0
                            }
                            )),
                            observedMinBandwidth: Ft(i),
                            observedMaxBandwidth: jt(i),
                            observedAverageBandwidth: Ut(i)
                        },
                        {
                            push: e => Object.values(s).forEach((t => t.push(e))),
                            clean: () => Object.values(s).forEach((e => e.clean())),
                            aggregate: () => Object.entries(s).reduce(((e, [t, i]) => Object.assign(e, {
                                [t]: i.aggregate()
                            })), {})
                        };
                        var s
                    }
                    )(),
                    window.addEventListener("beforeunload", (() => {
                        this.sendSessionEndEvent()
                    }
                    ))
            }
            destroy() {
                this.scheduler.deschedule(this.heartbeatTimeout)
            }
        }
        function Yt(e) {
            return t => {
                const [i, s] = t;
                e[i].apply(e, s)
            }
        }
        class qt {
            constructor(e, t, i) {
                this.config = e,
                    this.container = i,
                    this.scheduler = new _t,
                    this.lifeScope = new _e,
                    this.onStats = e => {
                        this.statistics.onStats(e)
                    }
                    ;
                const { publishers: s, deviceSupport: r, settings: n, features: a } = this.config
                    , { video: { session: o, stream: l, abtest: c, debug: u } } = n
                    , A = {
                        gameType: o.gameType,
                        publishers: s,
                        masterHost: l.host,
                        deviceSupport: r,
                        soundVolume: ne.muted ? 0 : ne.volume,
                        videoSessionId: o.videoSessionId,
                        abtest: c
                    };
                this.videoInfo = new Rt(this.config.publishers.onShowPlayerInfo.emit);
                const h = new Gt(A, n, a);
                this.config.publishers.onStats.subscribe(Yt(this.videoInfo)),
                    this.config.publishers.onStats.subscribe(Yt(h)),
                    this.statistics = new kt(this.config.publishers.onStats),
                    performance.mark(Bt.ComponentMounted),
                    be.enableErrorDebug = u.enableErrorLog,
                    this.observables = {
                        muted: t.muted,
                        volume: t.volume,
                        quality: t.quality,
                        streamId: t.streamId,
                        maxAutoQuality: t.maxAutoQuality,
                        qualityMode: t.qualityMode,
                        aspectRatio: t.aspectRatio,
                        enableVideo: t.enableVideo,
                        multiwindowCount: t.multiwindowCount,
                        play: new Be(!1),
                        loading: new Be(!1),
                        shouldPlay: new Be(!1),
                        isBackgroundMode: new Be(!1)
                    },
                    this.playerController = function (e, t) {
                        const i = new _e
                            , s = [ht, ft, pt, ut(e.deviceSupport.IS_SAFARI ? ot : lt)].reduce(((t, s) => s(i, t, e)), t);
                        return new ct(i, e, s)
                    }(Object.assign(Object.assign({}, this.config), {
                        scheduler: this.scheduler,
                        stats: this.statistics
                    }), this.observables),
                    this.container.appendChild(this.playerController.getContainer());
                const { muted: p, volume: f, showInfo: m } = t;
                Le([p, f], (e => e)).pipe(De((() => new Fe(1)))).subscribe((e => this.statistics.onVolumeUpdate(...e))).closeBy(this.lifeScope),
                    m.pipe(je((e => e))).subscribe((() => {
                        const e = this.videoInfo.getContainer();
                        this.container.contains(e) || this.container.appendChild(e)
                    }
                    )).closeBy(this.lifeScope),
                    m.pipe(je((e => !e))).subscribe((() => {
                        const e = this.videoInfo.getContainer();
                        this.container.contains(e) && this.container.removeChild(e)
                    }
                    )).closeBy(this.lifeScope),
                    m.pipe(d()).subscribe((e => this.videoInfo.showInfo(e))).closeBy(this.lifeScope)
            }
            destroy() {
                this.statistics.destroy(),
                    this.scheduler.destroy(),
                    this.playerController.destroy(),
                    this.videoInfo.destroy(),
                    this.container.remove()
            }
        }
        function zt() {
            const e = [];
            return {
                subscribe: function (t) {
                    e.includes(t) || e.push(t)
                },
                unsubscribe: function (t) {
                    const i = e.indexOf(t);
                    -1 !== i && e.splice(i, 1)
                },
                emit: function (t) {
                    e.slice().forEach((e => e(t)))
                },
                clear: function () {
                    e.splice(0, e.length)
                }
            }
        }
        const Xt = Math.pow(2, 24)
            , $t = Math.pow(2, 32);
        function Zt(e) {
            let t, i = "";
            for (let s = 7; s >= 0; --s)
                t = e >>> (s << 2) & 15,
                    i += t.toString(16);
            return i
        }
        function Kt(e, t) {
            return e << t | e >>> 32 - t
        }
        class Jt {
            constructor(e) {
                this.bytes = new Uint8Array(e << 2)
            }
            get(e) {
                return e <<= 2,
                    this.bytes[e] * Xt + (this.bytes[e + 1] << 16 | this.bytes[e + 2] << 8 | this.bytes[e + 3])
            }
            set(e, t) {
                const i = Math.floor(t / Xt)
                    , s = t - i * Xt;
                e <<= 2,
                    this.bytes[e] = i,
                    this.bytes[e + 1] = s >> 16,
                    this.bytes[e + 2] = s >> 8 & 255,
                    this.bytes[e + 3] = 255 & s
            }
        }
        const ei = i(5569)
            , ti = {
                alg: "HS256"
            };
        function ii(e) {
            return ei.enc.Base64.stringify(e).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
        function si(e) {
            return ii(ei.enc.Utf8.parse(JSON.stringify(e)))
        }
        function ri(e, t) {
            return e ? t ? D[e] < D[t] ? e : t : e : t
        }
        function ni(e) {
            if (e)
                return L[e] ? e : void 0
        }
        const ai = {
            "fmp4.enable": !0,
            "fmp4.adaptive.bitrateRule.enable": !1,
            "fmp4.adaptive.bitrateRule.fadeCoefficient": .95,
            "fmp4.adaptive.bitrateRule.switchCoefficient": 10,
            "fmp4.buffer.init": 1e3,
            "fmp4.buffer.slowMoMin": 500,
            "fmp4.buffer.slowMoMax": 1500,
            "fmp4.buffer.fastForwardMin": 3e3,
            "fmp4.buffer.fastForwardMax": 6e3,
            "fmp4.latency.warning": 7e3,
            "fmp4.latency.warningDuration": 3e3,
            "fmp4.latency.max": 9e3,
            "fmp4.playback.attempts": 3,
            "fmp4.playback.validTime": 25e3,
            "webcodec.enable": !1,
            "webcodec.adaptive.bitrateRule.enable": !1,
            "webcodec.adaptive.bitrateRule.fadeCoefficient": .95,
            "webcodec.adaptive.bitrateRule.switchCoefficient": 10,
            "webcodec.buffer.init": 1e3,
            "webcodec.buffer.slowMoMin": 500,
            "webcodec.buffer.slowMoMax": 1500,
            "webcodec.buffer.fastForwardMin": 3e3,
            "webcodec.buffer.fastForwardMax": 6e3,
            "webcodec.latency.warning": 7e3,
            "webcodec.latency.warningDuration": 3e3,
            "webcodec.latency.max": 9e3,
            "webcodec.playback.attempts": 3,
            "webcodec.playback.validTime": 25e3,
            "flipbook.enable": !0,
            "flipbook.buffer.init": 1e3,
            "flipbook.buffer.slowMoMin": 500,
            "flipbook.buffer.slowMoMax": 1500,
            "flipbook.buffer.fastForwardMin": 3e3,
            "flipbook.buffer.fastForwardMax": 6e3,
            "flipbook.latency.warning": 7e3,
            "flipbook.latency.warningDuration": 3e3,
            "flipbook.latency.max": 9e3,
            "flipbook.networkMeter.enable": !0,
            "flipbook.video.host": "live1-ufb.egcvi.com",
            "flipbook.playback.attempts": 3,
            "flipbook.playback.validTime": 25e3,
            "hls.enable": !0,
            "hls.enableInWebView": !0,
            "hls.buffer.init": 1e3,
            "hls.buffer.slowMoMin": 500,
            "hls.buffer.slowMoMax": 1500,
            "hls.buffer.fastForwardMin": 3e3,
            "hls.buffer.fastForwardMax": 6e3,
            "hls.latency.warning": 7e3,
            "hls.latency.warningDuration": 3e3,
            "hls.latency.max": 9e3,
            "hls.playback.attempts": 2,
            "hls.playback.validTime": 25e3,
            "hls.maxVideoTimeDiff": 2,
            "hls.validationTimeout": 11e3,
            "wasm.enable": !1,
            "wasm.buffer.init": 1e3,
            "wasm.buffer.slowMoMin": 500,
            "wasm.buffer.slowMoMax": 1500,
            "wasm.buffer.fastForwardMin": 3e3,
            "wasm.buffer.fastForwardMax": 6e3,
            "wasm.latency.warning": 7e3,
            "wasm.latency.warningDuration": 3e3,
            "wasm.latency.max": 9e3,
            "wasm.playback.attempts": 3,
            "wasm.playback.validTime": 25e3,
            "stream.baseName": "streamBaseName",
            "stream.manifestLogic": W.MANUAL,
            "stream.host": "live1.egcvi.com",
            "stream.enableCdn": !0,
            "stream.minQuality": void 0,
            "stream.maxQuality": void 0,
            "stream.initialQuality": L.MEDIUM,
            "stream.name": "",
            "stream.returnAllAvailableQualities": !1,
            "stream.audioCodec": "aac",
            "stream.videoCodec": "h264",
            "debug.enableErrorLog": !1,
            "debug.enableAllPlayers": !1,
            "debug.url": "",
            "debug.flipbook.url": ""
        }
            , oi = "video.";
        function li(e, t) {
            const { rawConfig: i } = t
                , s = `${e}_${t.geoCountry()}`;
            let r;
            if (i && (r = i[s] || i[e]),
                e in ci)
                return function (e, t) {
                    return t || ci[e]
                }(e, r);
            if (e in ui)
                return function (e, t) {
                    const i = Number(t);
                    return !t || isNaN(i) ? ui[e] : i
                }(e, r);
            if (e in di)
                return function (e, t) {
                    return t ? t.split(",") : di[e]
                }(e, r);
            if (e in Ai)
                return function (e, t) {
                    return void 0 === t ? Ai[e] : "true" === t
                }(e, r);
            throw new Error("Unknown property passed")
        }
        const ci = {
            table_id: "",
            game_type: "",
            flipbook_stream_host: void 0,
            "view1-desktop": void 0,
            "view2-desktop": void 0,
            "view3-desktop": void 0,
            "view4-desktop": void 0,
            "view1-mobile": void 0,
            "view2-mobile": void 0,
            "view3-mobile": void 0,
            "view4-mobile": void 0,
            streamBaseName: void 0,
            "video-master-host": void 0
        }
            , ui = {
                limitation: re.EnableV2
            }
            , di = {
                flipbook_stream_url: [],
                audio_flv_stream: []
            }
            , Ai = {
                enable_cdn_skip: void 0,
                enable_fmp4: void 0,
                enable_wasm: void 0,
                enable_hls_native: void 0,
                enable_platform_exceptions: void 0,
                enable_hls_in_webview: void 0,
                enable_custom_redirect: void 0,
                enable_error_debug: void 0
            };
        function hi(e, t) {
            const i = t[`${oi}${e}`];
            if ("" !== i && void 0 !== i && "undefined" !== i)
                switch (typeof ai[e]) {
                    case "boolean":
                        return "true" === i;
                    case "number":
                        return Number(i);
                    case "string":
                        return i;
                    default:
                        return
                }
        }
        function pi(e) {
            return ai[e]
        }
        function fi(e, t) {
            const i = t[`${oi}${e}`];
            if ("" !== i && void 0 !== i && "undefined" !== i)
                return ni(i)
        }
        function mi(e, t, i) {
            const { manifestLogic: s, videoSessionId: r, videoToken: n, streamId: a, minQuality: o, maxQuality: l, audioCodec: c, videoCodec: u, audioOnly: d } = t
                , A = d ? e.replace(/auto\/manifest-ws2.json/, "med_audioonly/manifest-ws2.json") : e
                , h = new URL(A)
                , p = new URLSearchParams;
            r && p.set("videoSessionId", r),
                n && p.set("videoToken", n),
                l && p.set("maxQuality", l),
                o && p.set("minQuality", o),
                s === W.MANUAL && p.set("noredirect", "1"),
                Number.isInteger(a) && p.set("streamid", `${a}`),
                p.set("ac", c);
            const f = d ? "off" : u;
            if (p.set("vc", f),
                i) {
                const e = new URL(i);
                for (let [t, i] of e.searchParams.entries())
                    p.set(t, i)
            }
            return h.search = p.toString(),
                h.href
        }
        const bi = "video.abtest.";
        const vi = Object.values(V).filter((e => e !== V.None));
        function yi(e, t, i) {
            const s = t.split(".")
                , r = s.slice(2, s.length).join(".");
            i.forEach((i => {
                const s = `${oi}${i}.${r}`;
                vi.includes(i) && !e[s] && (e[s] = e[t])
            }
            ))
        }
        const gi = "video.iphone."
            , wi = "video.mobile."
            , Si = 864e5;
        function Ei(e, t) {
            const i = new URL(e);
            return i.host = t,
                i.href
        }
        function Pi(e, t, i, s, r, n, a) {
            var o, l, c, u, d, A, h, p, f, m, b, v, y, g, w, S, E, P, T, I, M, O, C, x, _, R, k, B, N, L, D, F, j, U, Q, H, G, Y, q, z, X, $, Z, K, J;
            const ee = e => function (e, t) {
                return t ? e.replace(new RegExp("{locale}", "g"), t) : e
            }(e, a)
                , te = e.geoCountry()
                , { rawConfig: ie } = e
                , [se, ne, ae] = function (e, t = (Math.random() < .5 ? "A" : "B")) {
                    const i = Object.assign({}, e)
                        , s = function (e) {
                            for (const t in e)
                                if (t.startsWith(bi))
                                    return [t, e[t]];
                            return null
                        }(i);
                    if (!s)
                        return [i, null, null];
                    const [r, n] = s
                        , a = r.replace(bi, "");
                    if (!(a in ai))
                        return [i, null, null];
                    const o = oi + a;
                    return "B" === t && (i[o] = n),
                        [i, t, o]
                }(ie)
                , oe = ne && ae ? `${ae}_${ne}` : null
                , le = function (e, t) {
                    if (!t)
                        return e;
                    const i = Object.assign({}, e);
                    for (const s in i) {
                        if (!s.startsWith(oi))
                            continue;
                        const e = s.split(".")
                            , r = e.splice(1, 1)[0]
                            , n = e.join(".");
                        if (r !== t) {
                            if (r.startsWith("[") && r.endsWith("]") && r.length > 2) {
                                if (e.splice(1, 0, t),
                                    i[e.join(".")])
                                    continue;
                                if (r.slice(1, -1).split(";").map((e => e.trim())).includes(t)) {
                                    i[n] = i[s];
                                    continue
                                }
                            }
                        } else
                            i[n] = i[s]
                    }
                    return i
                }(se, te)
                , ce = i ? function (e) {
                    const t = Object.assign({}, e);
                    for (const i in e)
                        i.startsWith(wi) && (t[oi + i.split(".").slice(2).join(".")] = t[i]);
                    return t
                }(le) : le
                , ue = s ? function (e) {
                    const t = Object.assign({}, e);
                    for (const i in e)
                        i.startsWith(gi) && (t[oi + i.split(".").slice(2).join(".")] = t[i]);
                    return t
                }(ce) : ce
                , de = function (e) {
                    const t = Object.assign({}, e);
                    for (const i in t) {
                        if (!i.startsWith(oi))
                            continue;
                        const e = i.split(".")[1];
                        e.startsWith("[") && e.endsWith("]") && e.length > 2 && yi(t, i, e.slice(1, -1).split(";").map((e => e.trim())))
                    }
                    for (const i in t)
                        i.startsWith(oi) && "*" === i.split(".")[1] && yi(t, i, vi);
                    return t
                }(ue)
                , Ae = null !== (l = null !== (o = hi("stream.host", de)) && void 0 !== o ? o : li("video-master-host", e)) && void 0 !== l ? l : ai["stream.host"]
                , he = null !== (u = null !== (c = hi("stream.baseName", de)) && void 0 !== c ? c : li("streamBaseName", e)) && void 0 !== u ? u : ai["stream.baseName"]
                , pe = li("enable_cdn_skip", e)
                , fe = null !== (A = null !== (d = hi("stream.enableCdn", de)) && void 0 !== d ? d : void 0 === pe ? void 0 : !pe) && void 0 !== A ? A : ai["stream.enableCdn"]
                , [me, be] = i ? function (e) {
                    if (!e)
                        return [void 0, void 0];
                    const t = new URL(e)
                        , i = t.searchParams.get("maxBitrate")
                        , s = t.searchParams.get("minBitrate");
                    return [ni(null != i ? i : ""), ni(null != s ? s : "")]
                }(li("view1-mobile", e)) : [void 0, void 0]
                , ve = null === (p = null !== (h = hi("debug.url", de)) && void 0 !== h ? h : "") || void 0 === p ? void 0 : p.split(",").filter((e => !!e))
                , ye = a ? `_${a}` : ""
                , ge = (null !== (f = hi("stream.name", de)) && void 0 !== f ? f : "").split(",")
                , we = ge.map((e => {
                    const [t, i, s] = e.split("/");
                    return t && i && s ? `https://${Ae}/${fe ? "cdn/" : ""}${t}/${i}/amlst:${s}${ye}_auto/manifest-ws2.json` : ""
                }
                )).filter((e => !!e))
                , Se = function (e, t) {
                    var i, s, r, n;
                    const a = t ? "mobile" : "desktop";
                    return [null !== (i = li(`view1-${a}`, e)) && void 0 !== i ? i : "", null !== (s = li(`view2-${a}`, e)) && void 0 !== s ? s : "", null !== (r = li(`view3-${a}`, e)) && void 0 !== r ? r : "", null !== (n = li(`view4-${a}`, e)) && void 0 !== n ? n : ""]
                }(e, i).map(ee).map((function (e) {
                    return fe ? e : e.replace("/cdn/", "/")
                }
                )).map((e => e ? Ei(e, Ae) : "")).map((e => e.replace("manifest-ws.json", "manifest-ws2.json"))).map((e => e.split("?")[0]))
                , Ee = [ve, we, Se].find((e => e.length > 0)) || []
                , Pe = (Ce = li("limitation", e),
                    xe = re.EnableV2,
                    Ce === xe || xe === re.EnableV2 && ![re.Off].includes(Ce))
                , Te = li("table_id", e)
                , Ie = Math.round((Date.now() + Si) / 1e3)
                , Me = function (e, t, i, s, r) {
                    return e && t && i ? `${e}-${t}-${i}-${function (e) {
                        lett;
                        t = einstanceof ArrayBuffer ? e : function (e) {
                            e = e.replace(/[\u0080-\u07ff]/g, (function (e) {
                                const t = e.charCodeAt(0);
                                return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
                            }
                            )),
                                e = e.replace(/[\u0080-\uffff]/g, (function (e) {
                                    const t = e.charCodeAt(0);
                                    return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
                                }
                                ));
                            const t = e.length
                                , i = new Uint8Array(t);
                            for (lets = 0; s < t; ++s)
                                i[s] = e.charCodeAt(s);
                            return i.buffer
                        }(String(e));
                        leti, s, r = 1732584193, n = 4023233417, a = 2562383102, o = 271733878, l = 3285377520, c = t.byteLength, u = c << 3, d = u + 65, A = Math.ceil(d / 512) << 9 >>> 3 >>> 2, h = new Jt(A), p = h.bytes, f = new Uint32Array(80), m = new Uint8Array(t);
                        for (i = 0; i < c; ++i)
                            p[i] = m[i];
                        for (p[c] = 128,
                            h.set(A - 2, Math.floor(u / $t)),
                            h.set(A - 1, 4294967295 & u),
                            i = 0; i < A; i += 16) {
                            for (s = 0; s < 16; ++s)
                                f[s] = h.get(i + s);
                            for (; s < 80; ++s)
                                f[s] = Kt(f[s - 3] ^ f[s - 8] ^ f[s - 14] ^ f[s - 16], 1);
                            lete, t, c, u = r, d = n, A = a, p = o, m = l;
                            for (s = 0; s < 80; ++s)
                                s < 20 ? (e = d & A | ~d & p,
                                    t = 1518500249) : s < 40 ? (e = d ^ A ^ p,
                                        t = 1859775393) : s < 60 ? (e = d & A ^ d & p ^ A & p,
                                            t = 2400959708) : (e = d ^ A ^ p,
                                                t = 3395469782),
                                    c = Kt(u, 5) + e + m + t + f[s] & 4294967295,
                                    m = p,
                                    p = A,
                                    A = Kt(d, 30),
                                    d = u,
                                    u = c;
                            r = r + u & 4294967295,
                                n = n + d & 4294967295,
                                a = a + A & 4294967295,
                                o = o + p & 4294967295,
                                l = l + m & 4294967295
                        }
                        return Zt(r) + Zt(n) + Zt(a) + Zt(o) + Zt(l)
                    }(`${e}-${t}-${i}-${s}-${r}`).substring(0, 6)}` : ""
                }(t.userId, t.sessionId, Te, he, Ie)
                , Oe = Pe ? function (e, t, i, s) {
                    return function (e, t, i = {}) {
                        const s = si(Object.assign(ti, i))
                            , r = si(e);
                        let n = `${s}.${r}`;
                        return n = ei.HmacSHA256(n, t),
                            n = ii(n),
                            `${s}.${r}.${n}`
                    }({
                        sub: e,
                        exp: t,
                        iss: s
                    }, i)
                }(he, Ie, Me, t.tokenIssuer) : void 0;
            var Ce, xe;
            let _e;
            switch (li("enable_custom_redirect", e)) {
                case !0:
                    _e = W.MANUAL;
                    break;
                case !1:
                    _e = W.BROWSER;
                    break;
                default:
                    _e = void 0
            }
            const Re = null !== (b = null !== (m = hi("stream.manifestLogic", de)) && void 0 !== m ? m : _e) && void 0 !== b ? b : ai["stream.manifestLogic"]
                , ke = null !== (y = null !== (v = fi("stream.minQuality", de)) && void 0 !== v ? v : be) && void 0 !== y ? y : ai["stream.minQuality"]
                , Be = null !== (w = null !== (g = ri(fi("stream.maxQuality", de), n)) && void 0 !== g ? g : ri(me, n)) && void 0 !== w ? w : ai["stream.maxQuality"]
                , Ne = null !== (S = hi("stream.audioCodec", de)) && void 0 !== S ? S : ai["stream.audioCodec"]
                , Le = null !== (E = hi("stream.videoCodec", de)) && void 0 !== E ? E : ai["stream.videoCodec"]
                , De = {
                    streamId: r,
                    manifestLogic: Re,
                    videoSessionId: Me,
                    videoToken: Oe,
                    minQuality: ke,
                    maxQuality: Be,
                    audioCodec: Ne,
                    videoCodec: Le
                }
                , Fe = Ee.map(((e, t) => e ? mi(e, De, ve[t]) : ""))
                , je = null === (T = null !== (P = hi("debug.flipbook.url", de)) && void 0 !== P ? P : "") || void 0 === T ? void 0 : T.split(",").filter((e => !!e))
                , Ue = null !== (M = null !== (I = hi("flipbook.video.host", de)) && void 0 !== I ? I : li("flipbook_stream_host", e)) && void 0 !== M ? M : ai["flipbook.video.host"]
                , We = ge.map((e => {
                    const [t, i, s] = e.split("/");
                    return t && i && s ? `wss://${Ue}/ws/video/${i}/${s}${ye}_med` : ""
                }
                )).filter((e => !!e))
                , Ve = li("flipbook_stream_host", e)
                , Qe = [je, We, li("flipbook_stream_url", e).map(ee).map((e => Ve ? Ei(e, Ve) : e))].find((e => e.length > 0)) || [];
            Fe.forEach(((e, t) => {
                Qe[t] || (Qe[t] = e ? Qe[0] : "")
            }
            ));
            const He = li("enable_platform_exceptions", e)
                , Ge = {
                    gameSessionId: t.sessionId,
                    videoSessionId: Me,
                    videoTokenIssuer: t.tokenIssuer,
                    tableId: Te,
                    gameType: li("game_type", e),
                    videoToken: Oe
                }
                , Ye = Fe.map((e => e.replace(/manifest-ws2.json/, "playlist.m3u8")));
            return {
                video: {
                    [V.Fmp4]: {
                        player: V.Fmp4,
                        enable: null !== (C = null !== (O = hi(`${V.Fmp4}.enable`, de)) && void 0 !== O ? O : li("enable_fmp4", e)) && void 0 !== C ? C : ai["fmp4.enable"],
                        buffer: Ti(V.Fmp4, de),
                        latency: Ii(V.Fmp4, de),
                        playback: Mi(V.Fmp4, de),
                        adaptive: {
                            bitrateRule: {
                                enable: null !== (x = hi(`${V.Fmp4}.adaptive.bitrateRule.enable`, de)) && void 0 !== x ? x : ai["fmp4.adaptive.bitrateRule.enable"],
                                fadeCoefficient: null !== (_ = hi(`${V.Fmp4}.adaptive.bitrateRule.fadeCoefficient`, de)) && void 0 !== _ ? _ : ai["fmp4.adaptive.bitrateRule.fadeCoefficient"],
                                switchCoefficient: null !== (R = hi(`${V.Fmp4}.adaptive.bitrateRule.switchCoefficient`, de)) && void 0 !== R ? R : ai["fmp4.adaptive.bitrateRule.switchCoefficient"]
                            }
                        },
                        urls: Fe
                    },
                    [V.WebCodec]: {
                        player: V.WebCodec,
                        enable: null !== (k = hi(`${V.WebCodec}.enable`, de)) && void 0 !== k ? k : ai["webcodec.enable"],
                        buffer: Ti(V.WebCodec, de),
                        latency: Ii(V.WebCodec, de),
                        playback: Mi(V.WebCodec, de),
                        adaptive: {
                            bitrateRule: {
                                enable: null !== (B = hi(`${V.WebCodec}.adaptive.bitrateRule.enable`, de)) && void 0 !== B ? B : ai["webcodec.adaptive.bitrateRule.enable"],
                                fadeCoefficient: null !== (N = hi(`${V.WebCodec}.adaptive.bitrateRule.fadeCoefficient`, de)) && void 0 !== N ? N : ai["webcodec.adaptive.bitrateRule.fadeCoefficient"],
                                switchCoefficient: null !== (L = hi(`${V.WebCodec}.adaptive.bitrateRule.switchCoefficient`, de)) && void 0 !== L ? L : ai["webcodec.adaptive.bitrateRule.switchCoefficient"]
                            }
                        },
                        urls: Fe
                    },
                    [V.Flipbook]: {
                        player: V.Flipbook,
                        enable: null !== (D = hi(`${V.Flipbook}.enable`, de)) && void 0 !== D ? D : ai["flipbook.enable"],
                        buffer: Ti(V.Flipbook, de),
                        latency: Ii(V.Flipbook, de),
                        playback: Mi(V.Flipbook, de),
                        networkMeter: {
                            enable: null !== (F = hi(`${V.Flipbook}.networkMeter.enable`, de)) && void 0 !== F ? F : ai["flipbook.networkMeter.enable"]
                        },
                        video: {
                            urls: Qe
                        },
                        audio: {
                            urls: Ee.map((e => e ? mi(e, Object.assign(Object.assign({}, De), {
                                audioOnly: !0
                            })) : ""))
                        }
                    },
                    [V.Hls]: {
                        player: V.Hls,
                        enable: null !== (U = null !== (j = hi(`${V.Hls}.enable`, de)) && void 0 !== j ? j : li("enable_hls_native", e)) && void 0 !== U ? U : ai["hls.enable"],
                        enableInWebView: null !== (H = null !== (Q = hi(`${V.Hls}.enableInWebView`, de)) && void 0 !== Q ? Q : li("enable_hls_in_webview", e)) && void 0 !== H ? H : ai["hls.enableInWebView"],
                        buffer: Ti(V.Hls, de),
                        latency: Ii(V.Hls, de),
                        playback: Mi(V.Hls, de),
                        maxVideoTimeDiff: null !== (G = hi(`${V.Hls}.maxVideoTimeDiff`, de)) && void 0 !== G ? G : ai["hls.maxVideoTimeDiff"],
                        validationTimeout: null !== (Y = hi(`${V.Hls}.validationTimeout`, de)) && void 0 !== Y ? Y : ai["hls.validationTimeout"],
                        urls: Ye
                    },
                    [V.Wasm]: {
                        player: V.Wasm,
                        enable: null !== (z = null !== (q = hi(`${V.Wasm}.enable`, de)) && void 0 !== q ? q : li("enable_wasm", e)) && void 0 !== z ? z : ai["wasm.enable"],
                        buffer: Ti(V.Wasm, de),
                        latency: Ii(V.Wasm, de),
                        playback: Mi(V.Wasm, de),
                        urls: Fe
                    },
                    abtest: oe,
                    stream: {
                        baseName: he,
                        host: Ae,
                        enableCdn: fe,
                        manifestLogic: Re,
                        minQuality: ke,
                        maxQuality: Be,
                        initialQuality: null !== (X = hi("stream.initialQuality", de)) && void 0 !== X ? X : ai["stream.initialQuality"],
                        returnAllAvailableQualities: null !== ($ = hi("stream.returnAllAvailableQualities", de)) && void 0 !== $ ? $ : ai["stream.returnAllAvailableQualities"],
                        audioCodec: Ne,
                        videoCodec: Le
                    },
                    debug: {
                        enableErrorLog: null !== (K = null !== (Z = hi("debug.enableErrorLog", de)) && void 0 !== Z ? Z : li("enable_error_debug", e)) && void 0 !== K ? K : ai["debug.enableErrorLog"],
                        enableAllPlayers: (null !== (J = hi("debug.enableAllPlayers", de)) && void 0 !== J ? J : void 0 !== He) ? !He : ai["debug.enableAllPlayers"]
                    },
                    session: Ge
                }
            }
        }
        function Ti(e, t) {
            var i, s, r, n, a;
            return {
                init: null !== (i = hi(`${e}.buffer.init`, t)) && void 0 !== i ? i : pi(`${e}.buffer.init`),
                slowMoMin: null !== (s = hi(`${e}.buffer.slowMoMin`, t)) && void 0 !== s ? s : pi(`${e}.buffer.slowMoMin`),
                slowMoMax: null !== (r = hi(`${e}.buffer.slowMoMax`, t)) && void 0 !== r ? r : pi(`${e}.buffer.slowMoMax`),
                fastForwardMin: null !== (n = hi(`${e}.buffer.fastForwardMin`, t)) && void 0 !== n ? n : pi(`${e}.buffer.fastForwardMin`),
                fastForwardMax: null !== (a = hi(`${e}.buffer.fastForwardMax`, t)) && void 0 !== a ? a : pi(`${e}.buffer.fastForwardMax`)
            }
        }
        function Ii(e, t) {
            var i, s, r;
            return {
                warning: null !== (i = hi(`${e}.latency.warning`, t)) && void 0 !== i ? i : pi(`${e}.latency.warning`),
                warningDuration: null !== (s = hi(`${e}.latency.warningDuration`, t)) && void 0 !== s ? s : pi(`${e}.latency.warningDuration`),
                max: null !== (r = hi(`${e}.latency.max`, t)) && void 0 !== r ? r : pi(`${e}.latency.max`)
            }
        }
        function Mi(e, t) {
            var i, s;
            return {
                attempts: null !== (i = hi(`${e}.playback.attempts`, t)) && void 0 !== i ? i : pi(`${e}.playback.attempts`),
                validTime: null !== (s = hi(`${e}.playback.validTime`, t)) && void 0 !== s ? s : pi(`${e}.playback.validTime`)
            }
        }
        function Oi(e, t, i, s, r) {
            const n = function (e) {
                const t = e.sessionId()
                    , i = e.userId()
                    , { tokenIssuer: s } = e
                    , r = "Missing '%s' or type not string in video GlobalConfig";
                return t && "string" == typeof t ? i && "string" == typeof i ? s && "string" == typeof s ? {
                    sessionId: t,
                    userId: i,
                    tokenIssuer: s
                } : new be("SETTINGS_ERROR", r.replace("%s", "tokenIssuer")) : new be("SETTINGS_ERROR", r.replace("%s", "userId")) : new be("SETTINGS_ERROR", r.replace("%s", "sessionId"))
            }(e);
            if (n instanceof be)
                return n;
            const a = function (e) {
                if (!e)
                    return new be("SETTINGS_ERROR", "No table settings provided");
                if ("object" != typeof e || Array.isArray(e))
                    return new be("SETTINGS_ERROR", "Incorrect format of table settings");
                if (!e["video.stream.baseName"] && !e.streamBaseName)
                    return new be("SETTINGS_ERROR", "Missing table setting: video.stream.baseName");
                const t = e["video.stream.name"];
                if (!["string", "undefined"].includes(typeof t) || "string" == typeof t && !t.split(",").every((e => /^(app|ezs)\/\d+\/([\w()-]+)$/.test(e))))
                    return new be("SETTINGS_ERROR", "Invalid host format in table setting: 'video.stream.name'");
                const i = t ? [Z.TABLE_ID] : [Z.VIEW1_MOBILE, Z.VIEW1_DESKTOP, Z.TABLE_ID];
                t || i.push(Z.FLIPBOOK_STREAM_URL);
                for (const n of i)
                    if (!e[n])
                        return new be("SETTINGS_ERROR", "Missing table setting: " + n);
                const s = [Z.VIEW1_MOBILE, Z.VIEW2_MOBILE, Z.VIEW3_MOBILE, Z.VIEW4_MOBILE, Z.VIEW1_DESKTOP, Z.VIEW2_DESKTOP, Z.VIEW3_DESKTOP, Z.VIEW4_DESKTOP].map((t => e[t] && function (e, t) {
                    let i;
                    try {
                        i = new URL(e)
                    } catch (s) {
                        return new be("SETTINGS_ERROR", `Invalid url in table setting: '${t}'`)
                    }
                    return "https:" !== i.protocol ? new be("SETTINGS_ERROR", `Invalid table setting: '${t}'. Protocol should be https:`) : /\/(app|ezs)\/[0-9]+\//.test(i.pathname) ? /\/amlst:/.test(i.pathname) ? /\/manifest-ws2?.json/.test(i.pathname) ? void 0 : new be("SETTINGS_ERROR", `Table setting: '${t}' url must include 'manifest-ws2.json'`) : new be("SETTINGS_ERROR", `Table setting: '${t}' url must include '/amlst:'`) : new be("SETTINGS_ERROR", `Table setting: '${t}' url must include '/{application name}/{integer}/'`)
                }(e[t], t))).filter((e => !!e));
                if (s.length)
                    return s[0];
                const r = [Z.STREAM_HOST, Z.VIDEO_MASTER_HOST, Z.FLIPBOOK_VIDEO_HOST, Z.FLIPBOOK_STREAM_HOST].map((t => e[t] && function (e, t) {
                    if (!/^[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]+)?$/i.test(e))
                        return new be("SETTINGS_ERROR", `Invalid host format in table setting: '${t}'`)
                }(e[t], t))).filter((e => !!e));
                return r.length ? r[0] : void 0
            }(e.rawConfig);
            return a instanceof be ? a : Pi(e, n, t.IS_PHONE || t.IS_IPHONE || t.IS_TABLET, t.IS_IPHONE, i, s, r)
        }
        function Ci(e) {
            const t = Object.assign({}, e);
            let i;
            for (i in t)
                void 0 === t[i] && delete t[i];
            return t
        }
        function xi(e, t, i, s = me()) {
            var r, n, a, o, l, c, u;
            return o = this,
                l = void 0,
                u = function* () {
                    const o = yield w()
                        , { maxSupportedQuality: l } = s.DeviceProperties
                        , c = null !== (r = t.language) && void 0 !== r ? r : null === (n = t.streamTemplateProps) || void 0 === n ? void 0 : n.locale
                        , u = Oi(e, s, null !== (a = t.streamId) && void 0 !== a ? a : ne.streamId, l, c);
                    if (u instanceof be)
                        throw u;
                    const A = u
                        , h = (b = Object.assign(Object.assign(Object.assign({}, ne), Ci({
                            quality: A.video.stream.initialQuality
                        })), Ci(t)),
                        {
                            muted: new Be(b.muted),
                            volume: new Be(b.volume),
                            quality: new Be(b.quality),
                            showInfo: new Be(b.showInfo),
                            streamId: new Be(b.streamId),
                            maxAutoQuality: new Be(b.maxQuality),
                            aspectRatio: new Be(b.aspectRatio),
                            qualityMode: new Be(b.qualityMode),
                            enableVideo: new Be(b.enableVideo),
                            multiwindowCount: new Be(b.multiwindowCount)
                        })
                        , p = {
                            onPlay: zt(),
                            onQuality: zt(),
                            onStreamId: zt(),
                            onStreamCount: zt(),
                            onVideoEnable: zt(),
                            onShowPlayerInfo: zt(),
                            onAvailableQualities: zt(),
                            onUserInteractionRequired: zt(),
                            onMediaPlayerEvent: zt(),
                            onVideoWallclock: zt(),
                            stats: zt(),
                            onStats: zt()
                        }
                        , f = {
                            muted: h.muted.pipe(d()),
                            volume: h.volume.pipe(d()),
                            quality: h.quality.pipe(d()),
                            showInfo: h.showInfo.pipe(d()),
                            streamId: h.streamId.pipe(d()),
                            maxAutoQuality: h.maxAutoQuality.pipe(d()),
                            qualityMode: h.qualityMode.pipe(d()),
                            aspectRatio: h.aspectRatio.pipe(d()),
                            enableVideo: h.enableVideo.pipe(d()),
                            multiwindowCount: h.multiwindowCount.pipe(d())
                        }
                        , m = xe(i, A, s, o);
                    var b;
                    if (0 === m.length)
                        throw new Error("No video players available");
                    const v = {
                        publishers: p,
                        availablePlayers: m,
                        deviceSupport: s,
                        browserFeatures: o,
                        settings: A,
                        features: o
                    };
                    let y;
                    const g = document.createElement("div");
                    return setTimeout((() => {
                        y = new qt(v, f, g)
                    }
                    )),
                    {
                        quality: {
                            set: e => {
                                Object.keys(L).includes(e) && h.quality.next(e)
                            }
                            ,
                            get: () => h.quality.value,
                            subscribe: p.onQuality.subscribe,
                            unsubscribe: p.onQuality.unsubscribe
                        },
                        qualityMode: {
                            set: e => h.qualityMode.next(e),
                            get: () => h.qualityMode.value
                        },
                        maxQuality: {
                            set: e => h.maxAutoQuality.next(e),
                            get: () => h.maxAutoQuality.value
                        },
                        availableQualities: {
                            subscribe: p.onAvailableQualities.subscribe,
                            unsubscribe: p.onAvailableQualities.unsubscribe
                        },
                        volume: {
                            set: e => h.volume.next(e),
                            get: () => h.volume.value
                        },
                        muted: {
                            set: e => h.muted.next(e),
                            get: () => h.muted.value
                        },
                        multiwindowCount: {
                            set: e => h.multiwindowCount.next(e),
                            get: () => h.multiwindowCount.value
                        },
                        showInfo: {
                            set: e => h.showInfo.next(e),
                            get: () => h.showInfo.value,
                            subscribe: p.onShowPlayerInfo.subscribe,
                            unsubscribe: p.onShowPlayerInfo.unsubscribe
                        },
                        streamId: {
                            set: e => h.streamId.next(e),
                            get: () => h.streamId.value,
                            subscribe: p.onStreamId.subscribe,
                            unsubscribe: p.onStreamId.unsubscribe
                        },
                        play: {
                            subscribe: p.onPlay.subscribe,
                            unsubscribe: p.onPlay.unsubscribe
                        },
                        enableVideo: {
                            set: e => h.enableVideo.next(e),
                            get: () => h.enableVideo.value,
                            subscribe: p.onVideoEnable.subscribe,
                            unsubscribe: p.onVideoEnable.unsubscribe
                        },
                        isUserInteractionRequired: {
                            subscribe: p.onUserInteractionRequired.subscribe,
                            unsubscribe: p.onUserInteractionRequired.unsubscribe
                        },
                        streamCount: {
                            subscribe: p.onStreamCount.subscribe,
                            unsubscribe: p.onStreamCount.unsubscribe
                        },
                        aspectRatio: {
                            set: e => h.aspectRatio.next(e),
                            get: () => h.aspectRatio.value
                        },
                        wallclock: {
                            subscribe: p.onVideoWallclock.subscribe,
                            unsubscribe: p.onVideoWallclock.unsubscribe
                        },
                        mediaPlayerEvent: {
                            subscribe: p.onMediaPlayerEvent.subscribe,
                            unsubscribe: p.onMediaPlayerEvent.unsubscribe
                        },
                        stats: {
                            subscribe: p.stats.subscribe,
                            unsubscribe: p.stats.unsubscribe
                        },
                        rawStats: {
                            subscribe: p.onStats.subscribe,
                            unsubscribe: p.onStats.unsubscribe
                        },
                        container: {
                            get: () => g
                        },
                        destroy: () => {
                            Object.entries(p).forEach((([, e]) => e.clear())),
                                null == y || y.destroy()
                        }
                    }
                }
                ,
                new ((c = void 0) || (c = Promise))((function (e, t) {
                    function i(e) {
                        try {
                            r(u.next(e))
                        } catch (i) {
                            t(i)
                        }
                    }
                    function s(e) {
                        try {
                            r(u.throw(e))
                        } catch (i) {
                            t(i)
                        }
                    }
                    function r(t) {
                        var r;
                        t.done ? e(t.value) : (r = t.value,
                            r instanceof c ? r : new c((function (e) {
                                e(r)
                            }
                            ))).then(i, s)
                    }
                    r((u = u.apply(o, l || [])).next())
                }
                ))
        }
        class _i {
            constructor(e, t) {
                this.parser = e,
                    this.fetcher = t,
                    this.currentManifestId = 0
            }
            get isManifestAvailable() {
                return void 0 !== this.masterManifest
            }
            get isInMultiStreamMode() {
                return !!this.masterManifest && this.masterManifest.mediaManifests.length > 1
            }
            get manifest() {
                if (!this.masterManifest)
                    throw new be(te.ManifestManagerError, "No cached manifest");
                const e = this.masterManifest.mediaManifests.find((e => e.id === this.currentManifestId));
                if (!e)
                    throw new be(te.ManifestManagerError, "Invalid current manifest id");
                return e
            }
            getMasterManifest() {
                return this.masterManifest
            }
            clear() {
                this.masterManifest = void 0,
                    this.currentManifestId = 0
            }
            fetch(e) {
                return this.fetcher(e).pipe(ze((e => {
                    const t = e.slice(0, e.length - 1)
                        , i = e[e.length - 1]
                        , s = []
                        , r = i.elapsed;
                    s.push(r);
                    const n = t.reduce(((e, { elapsed: t }) => e + t), 0);
                    return n > 0 && s.push(n),
                        this.masterManifest = this.parser(i.text, i.url),
                        [this.masterManifest, s, i]
                }
                )))
            }
            switch(e) {
                return this.masterManifest && this.isInMultiStreamMode ? (this.currentManifestId = this.masterManifest.mediaManifests.some((t => t.id === e)) ? e : 0,
                    this.currentManifestId) : this.currentManifestId
            }
        }
        function Ri(e, t) {
            const i = [];
            for (const s of e)
                i.push(...t(s));
            return i
        }
        function ki(e) {
            let t = 1;
            const i = {};
            for (e.indexOf("+") > -1 && (e = e.replace(/\+/g, " ")); t < e.length;) {
                let s = e.indexOf("&", t);
                -1 === s && (s = e.length);
                let r = e.indexOf("=", t);
                -1 === r && (r = s);
                const n = decodeURIComponent(e.substring(t, r))
                    , a = decodeURIComponent(e.substring(r + 1, s))
                    , o = i[n];
                void 0 === o ? i[n] = a : Array.isArray(o) ? o.push(a) : i[n] = [o, a],
                    t = s + 1
            }
            return i
        }
        const Bi = document.createElement("a");
        function Ni(e) {
            Bi.href = e;
            let t = Bi.pathname || "";
            "/" !== t.charAt(0) && (t = "/" + t);
            const i = Bi.protocol || location.protocol;
            let s = Bi.hostname
                , r = Bi.port;
            return s || (s = location.hostname,
                r = location.port),
            {
                hashParams: ki(Bi.hash),
                hostname: s,
                pathname: t,
                port: r,
                protocol: i,
                searchParams: ki(Bi.search),
                toString: function () {
                    return this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + n("?", this.searchParams) + n("#", this.hashParams)
                },
                paramsToString: n,
                getParam: function (e) {
                    let t = this.searchParams[e];
                    return void 0 === t && (t = this.hashParams[e],
                        void 0 === t) ? null : Array.isArray(t) ? t[0] : t
                },
                setSearchParam: function (e, t) {
                    this.searchParams[e] = t
                }
            };
            function n(e, t) {
                let i = "";
                for (const s of Object.keys(t)) {
                    const e = t[s]
                        , r = encodeURIComponent(s);
                    if (Array.isArray(e))
                        for (const t of e)
                            i && (i += "&"),
                                i += r + "=" + encodeURIComponent(t);
                    else
                        void 0 !== e && (i && (i += "&"),
                            i += r + "=" + encodeURIComponent(e))
                }
                return i ? e + i : i
            }
        }
        function Li(e, t) {
            const i = JSON.parse(e)
                , s = Ni(t)
                , r = s.getParam("videoSessionId")
                , n = s.getParam("videoToken");
            return [(a = n,
                o = r,
                e => {
                    const t = Object.assign({}, e);
                    return Ri(t.mediaManifests, (e => e.streams)).forEach((e => {
                        const t = Ni(e.url);
                        o && t.setSearchParam("videoSessionId", o),
                            a && t.setSearchParam("videoToken", a),
                            e.url = t.toString()
                    }
                    )),
                        t
                }
            )].reduce(((e, t) => t(e)), function (e, t) {
                var i;
                return {
                    mediaManifests: ((i = t) && i.streams && Array.isArray(i.streams) ? [{
                        id: 0,
                        streams: t.streams
                    }] : t).map((e => {
                        return {
                            id: "number" == typeof e.id ? e.id : parseInt(e.id, 10),
                            url: "",
                            streams: (t = e,
                                t.streams.map((e => {
                                    const t = "number" == typeof e.bitrate ? e.bitrate : parseInt(e.bitrate, 10);
                                    return {
                                        streamName: e.streamName,
                                        url: e.url,
                                        bitrate: t,
                                        quality: e.streamId
                                    }
                                }
                                )))
                        };
                        var t
                    }
                    ))
                }
            }(0, i));
            var a, o
        }
        function Di(e) {
            return e[e.length - 1]
        }
        function Fi(e = new Map([[401, J.StreamSecurityError]])) {
            return t => function (e) {
                return new u((t => {
                    const i = function (e, t) {
                        const i = [];
                        let s;
                        return s = ji(e, (function e(r) {
                            i.push(r),
                                r.status >= 200 && r.status <= 299 ? 0 !== r.text.indexOf("http") ? t(i) : s = ji(r.text, e) : t(i)
                        }
                        )),
                            s
                    }(e, (e => {
                        t.onNext(e),
                            t.onComplete()
                    }
                    ));
                    return Re(i.abort)
                }
                ))
            }(t).pipe(ze((t => {
                const i = Di(t)
                    , s = e.get(i.status);
                if (s)
                    throw new be(s, `Request failed with status code: ${i.status}`);
                if (200 !== i.status)
                    throw new be(te.FailedLoadingManifest, `Request failed with status code: ${i.status}`);
                return t
            }
            )))
        }
        function ji(e, t) {
            const i = new XMLHttpRequest;
            function s() {
                t({
                    url: e,
                    status: this.status,
                    text: "",
                    elapsed: Math.round(performance.now() - n)
                })
            }
            function r() {
                t({
                    url: e,
                    status: this.status,
                    text: this.response,
                    elapsed: Math.round(performance.now() - n)
                })
            }
            i.open("GET", e, !0),
                "localhost" !== location.hostname && "127.0.0.1" !== location.hostname && (i.withCredentials = !0),
                i.addEventListener("error", s),
                i.addEventListener("abort", s),
                i.addEventListener("load", r);
            const n = performance.now();
            return i.send(),
            {
                abort: () => {
                    i.removeEventListener("error", s),
                        i.removeEventListener("abort", s),
                        i.removeEventListener("load", r),
                        i.abort()
                }
            }
        }
        function Ui(...e) {
            return Ne(((t, i) => {
                const s = new Map;
                e.forEach(((e, t) => s.set(t))),
                    e.forEach(((e, r) => {
                        e.subscribe((e => i.onNext(e)), (e => {
                            s.size > 0 || i.onError(e)
                        }
                        ), (() => {
                            s.delete(r),
                                s.size > 0 || i.onComplete()
                        }
                        )).closeBy(t)
                    }
                    ))
            }
            ))
        }
        function Wi(e, t) {
            return new u((i => {
                function s(e) {
                    i.onNext(e)
                }
                return e.addEventListener(t, s),
                    Re((() => e.removeEventListener(t, s)))
            }
            ))
        }
        var Vi = function (e, t, i, s) {
            return new (i || (i = Promise))((function (r, n) {
                function a(e) {
                    try {
                        l(s.next(e))
                    } catch (t) {
                        n(t)
                    }
                }
                function o(e) {
                    try {
                        l(s.throw(e))
                    } catch (t) {
                        n(t)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                        t instanceof i ? t : new i((function (e) {
                            e(t)
                        }
                        ))).then(a, o)
                }
                l((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class Qi {
            constructor(e, t) {
                this.deviceSupport = e,
                    this.videoContainer = t,
                    this.release = void 0,
                    this.antiRaceFlag = !1
            }
            on() {
                return Vi(this, void 0, void 0, (function* () {
                    return this.release ? Promise.resolve() : this.wakeLockStrategy().catch((() => this.videoStrategy())).then((e => {
                        this.release = e
                    }
                    )).catch((() => { }
                    ))
                }
                ))
            }
            off() {
                return Vi(this, void 0, void 0, (function* () {
                    return this.release ? this.release().catch((() => { }
                    )).then((() => {
                        this.release = void 0
                    }
                    )) : Promise.resolve()
                }
                ))
            }
            wakeLockStrategy() {
                var e;
                return (null === (e = window.navigator.wakeLock) || void 0 === e ? void 0 : e.request) ? window.navigator.wakeLock.request("screen").then((e => e.release)) : Promise.reject()
            }
            videoStrategy() {
                if (this.antiRaceFlag)
                    return Promise.reject();
                const e = document.createElement("video");
                e.setAttribute("title", "Live Casino"),
                    e.setAttribute("playsinline", "");
                const t = document.createElement("source");
                t.src = "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw",
                    t.type = "video/mp4",
                    e.appendChild(t);
                const i = () => {
                    e.currentTime > .5 && (e.currentTime = .1)
                }
                    ;
                return e.addEventListener("timeupdate", i),
                    e.play().then((() => new Promise(((t, i) => {
                        if (this.antiRaceFlag)
                            return i();
                        this.antiRaceFlag = !0,
                            e.style.position = "absolute",
                            e.style.top = "0",
                            e.style.left = "0",
                            e.style.width = "100%",
                            e.style.height = "100%";
                        const s = this.videoContainer;
                        !this.release && this.deviceSupport.IS_IOS && (null == s || s.insertBefore(e, this.videoContainer.firstChild)),
                            t(e)
                    }
                    )))).then((t => () => {
                        this.antiRaceFlag = !1,
                            e.pause(),
                            e.removeEventListener("timeupdate", i);
                        const s = t.parentNode;
                        return (null == s ? void 0 : s.contains(t)) && (null == s || s.removeChild(t)),
                            Promise.resolve()
                    }
                    ))
            }
        }
        const Hi = (e, t) => e => (i, s) => {
            const r = new Qi(i.deviceSupport, i.videoContainer)
                , { muted: n, volume: a, play: o, url: l, isBackgroundMode: c } = s;
            return t.add(Re((() => r.off()))),
                c.pipe(je((e => e))).subscribe((() => r.off())).closeBy(t),
                Le([n, a, o, l, c], (e => e)).pipe(je((([e, t, i, s, r]) => i && !!s && !r))).subscribe((() => r.on())).closeBy(t),
                Ui(Wi(window, "click"), Wi(window, "resize"), Wi(window, "touchstart")).subscribe((() => r.on())).closeBy(t),
                e(i, s)
        }
            , Gi = (e, t) => i => new u((s => {
                let r = t;
                return i.subscribe((t => {
                    r = e(r, t),
                        s.onNext(r)
                }
                ), s.onError, s.onComplete)
            }
            ))
            , Yi = (e, t, i, s, r = (() => performance.now())) => n => (a, o) => {
                const l = new ke
                    , c = Object.assign(Object.assign({}, a), {
                        onStats: e => {
                            e.latency && l.next(e.latency),
                                a.onStats(e)
                        }
                    })
                    , { warning: u, warningDuration: A, max: h } = i
                    , p = l.pipe(d());
                return Ui(p.pipe(Gi(((e, t) => {
                    const [i, s] = e;
                    if (t >= u) {
                        if (-1 === s)
                            return [0, r()];
                        const e = r();
                        return [i + (e - s), e]
                    }
                    return [0, -1]
                }
                ), [0, -1]), je((([e]) => e >= A)), ze((() => { }
                ))), p.pipe(je((e => e >= h)), ze((() => { }
                )))).pipe(Ve(t), je((([, e]) => e))).subscribe((() => s(new be(ee.MaxLatencyReached, "Critical latency reached"))), (e => a.onFailure(ve(e, se)))).closeBy(e),
                    n(c, o)
            }
            , qi = e => t => new u((i => t.subscribe((t => {
                const s = e(t);
                null != s && i.onNext(s)
            }
            ), i.onError, i.onComplete)))
            , zi = {
                bufferCheckInterval: 2e3,
                normalPlaybackRate: 1,
                fasterPlaybackRate: 1.15,
                slowerPlaybackRate: .9
            };
        function Xi(e, t) {
            return Ui(t.pipe(qi((t => function (e, t, i) {
                return Math.abs(t - i.normalPlaybackRate) <= .05 && e >= i.fastForwardMax ? i.fasterPlaybackRate : Math.abs(t - i.fasterPlaybackRate) <= .05 && e <= i.fastForwardMin ? i.normalPlaybackRate : void 0
            }(...t, e)))), t.pipe(qi((t => function (e, t, i) {
                return Math.abs(t - i.normalPlaybackRate) <= .05 && e <= i.slowMoMin ? i.slowerPlaybackRate : Math.abs(t - i.slowerPlaybackRate) <= .05 && e >= i.slowMoMax ? i.normalPlaybackRate : void 0
            }(...t, e)))))
        }
        const $i = (e, t, i = Xi) => s => (r, n) => {
            const a = Object.assign(Object.assign({}, zi), t)
                , o = new ke
                , l = Object.assign(Object.assign({}, r), {
                    onStats: e => {
                        o.next(e),
                            r.onStats(e)
                    }
                })
                , c = new Fe(1);
            n.playbackRate.pipe(Qe(1)).subscribe((e => c.next(e))).closeBy(e);
            const A = Object.assign(Object.assign({}, n), {
                playbackRate: Ui(n.playbackRate, c.pipe((1,
                    e => new u((t => {
                        let i = 0;
                        return e.subscribe((e => {
                            i < 1 ? i++ : t.onNext(e)
                        }
                        ), t.onError, t.onComplete)
                    }
                    )))))
            });
            const h = o.pipe(qi((e => e.bufferLength)), Ve(c), ((e, t = (() => performance.now())) => i => new u((s => {
                let r, n = -1;
                return i.subscribe((i => {
                    r = i;
                    const a = t();
                    (-1 === n || a - n >= e) && (n = a,
                        s.onNext(r))
                }
                ), s.onError, s.onComplete)
            }
            )))(a.bufferCheckInterval), De());
            return i(a, h).pipe(d()).subscribe((e => c.next(e))).closeBy(e),
                s(l, A)
        }
            , Zi = (e, t, i) => i => (s, r) => (t.subscribe((e => {
                switch (e.state) {
                    case X.LOADING:
                        s.onEvent({
                            eventType: G.LOADING
                        });
                        break;
                    case X.PLAYING:
                        s.onEvent({
                            eventType: G.PLAYING
                        }),
                            s.onSuccess();
                        break;
                    case X.STOPPING:
                        e.error && (s.onEvent({
                            eventType: G.ERROR,
                            eventReason: e.error.message
                        }),
                            s.onFailure(e.error)),
                            s.onStop()
                }
            }
            )).closeBy(e),
                i(s, r));
        var Ki = i(5450);
        function Ji() {
            const e = new ke;
            let t, i;
            function s(e, t) {
                const i = [];
                for (let s = 0; s < e; s++)
                    i.push(new Float32Array(t).fill(0));
                return i
            }
            return {
                push: function (r) {
                    const n = (0,
                        Ki.extractAtoms)(new Uint8Array(r));
                    if (n.filter((e => "moov" === e.name)).reduce(((e, t) => [...e, ...(0,
                        Ki.extractAtoms)(t.data)]), []).filter((e => "trak" === e.name)).forEach((e => {
                            const t = (0,
                                Ki.parseAudioMeta)(e);
                            t && (i = t)
                        }
                        )),
                        "ftyp" === n[0].name)
                        return;
                    const a = n[n.length - 1];
                    if ("egwc" !== a.name)
                        return;
                    const o = (0,
                        Ki.getEgwc)(a);
                    if (!t)
                        return void (t = o.pts);
                    if (!i)
                        return;
                    const l = Math.ceil((o.pts - t) * i.sampleRate / 1e3);
                    t = o.pts;
                    const c = {
                        pts: o.pts,
                        numChannels: i.numberOfChannels,
                        numSamples: l,
                        buffers: s(i.numberOfChannels, l)
                    };
                    e.next(c)
                },
                frames: e,
                destroy: function () {
                    e.complete()
                }
            }
        }
        const es = (e, t) => {
            const i = Math.round(t.length / e.totalPacketCount)
                , s = e.beforePacketCount * i * 4
                , r = e.middlePacketCount * i;
            return new Float32Array(t.buffer, s, r)
        }
            , ts = (e, t) => {
                const i = 150 * e.totalPacketCount
                    , s = Math.round(i / 2)
                    , r = new Float32Array(t.length + i);
                r.set(t, s);
                const n = r.length / e.totalPacketCount
                    , a = 4 * Math.floor(e.beforePacketCount * n)
                    , o = Math.ceil(e.middlePacketCount * n);
                return new Float32Array(r.buffer, a, o)
            }
            ;
        function is(e, t) {
            const i = new ke
                , s = {
                    middlePacketCount: e.windowSize,
                    beforePacketCount: e.windowOffset,
                    afterPacketCount: e.windowOffset,
                    totalPacketCount: e.windowSize + 2 * e.windowOffset
                }
                , r = []
                , n = e.audioContext;
            function a(e) {
                const n = r.shift();
                if (!n)
                    return i.error(new Error("No MP4 file"));
                const a = new Array(n.numChannels).fill(0).map(((t, i) => e.getChannelData(i)));
                if (!(null == n ? void 0 : n.pts))
                    return i.error(new Error("PTS is not defined"));
                const o = function (e, i) {
                    const r = e.map((e => t(s, e)))
                        , n = r[0].length;
                    return {
                        buffers: r,
                        pts: i.pts,
                        numChannels: i.numChannels,
                        numSamples: n
                    }
                }(a, n);
                i.next(o),
                    r.length && l()
            }
            function o(e) {
                i.error(new Error(e.message))
            }
            function l() {
                n.decodeAudioData(r[0].buffer).then(a).catch(o)
            }
            return {
                frames: i,
                push: e => {
                    r.push(e),
                        1 === r.length && l()
                }
                ,
                destroy: () => {
                    i.complete()
                }
            }
        }
        const ss = new Map(["ftyp", "moov", "mvhd", "trak", "tkhd", "mdia", "mdhd", "hdlr", "minf", "smhd", "dinf", "dref", "stbl", "stsd", "mp4a", "esds", "stts", "stsc", "stsz", "stco", "mdat"].map((e => [e, [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]])));
        class rs {
            static generate(e) {
                e.offset = rs.ftyp(e).byteLength + rs.moov(e).byteLength + 8;
                const t = rs.ftyp(e)
                    , i = rs.moov(e)
                    , s = rs.mdat(e)
                    , r = new Uint8Array(t.byteLength + i.byteLength + s.byteLength);
                return r.set(t, 0),
                    r.set(i, t.byteLength),
                    r.set(s, t.byteLength + i.byteLength),
                    r.buffer
            }
            static ftyp(e) {
                const t = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]);
                return rs.box(ss.get("ftyp"), t)
            }
            static mdat(e) {
                const t = e.samples;
                let i = 0
                    , s = 0;
                for (const n of e.samples)
                    s += n.byteLength;
                const r = new Uint8Array(s);
                for (const n of t) {
                    const e = n;
                    r.set(e, i),
                        i += e.byteLength
                }
                return rs.box(ss.get("mdat"), new Uint8Array(r))
            }
            static moov(e) {
                const t = rs.mvhd(e)
                    , i = rs.trak(e);
                return rs.box(ss.get("moov"), t, i)
            }
            static mvhd(e) {
                const t = e.timescale
                    , i = 1024 * e.samples.length / e.audioSampleRate
                    , s = (i >> 0).toString(16)
                    , r = parseInt(s.substr(-8), 16)
                    , n = r === i ? 0 : parseInt(s.substr(0, s.length - 8), 16);
                return rs.box(ss.get("mvhd"), new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
            }
            static trak(e) {
                return rs.box(ss.get("trak"), rs.tkhd(e), rs.mdia(e))
            }
            static tkhd(e) {
                const t = 1024 * e.samples.length / e.audioSampleRate;
                return rs.box(ss.get("tkhd"), new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
            }
            static mdia(e) {
                return rs.box(ss.get("mdia"), rs.mdhd(e), rs.hdlr(e), rs.minf(e))
            }
            static mdhd(e) {
                const t = e.timescale
                    , i = 1024 * e.samples.length / e.audioSampleRate
                    , s = (i >> 0).toString(16)
                    , r = parseInt(s.substr(-8), 16)
                    , n = r === i ? 0 : parseInt(s.substr(0, s.length - 8), 16);
                return rs.box(ss.get("mdhd"), new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 85, 196, 0, 0]))
            }
            static hdlr(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                return rs.box(ss.get("hdlr"), t)
            }
            static minf(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
                    , i = rs.box(ss.get("smhd"), t);
                return rs.box(ss.get("minf"), i, rs.dinf(e), rs.stbl(e))
            }
            static dinf(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                    , i = rs.box(ss.get("dref"), t);
                return rs.box(ss.get("dinf"), i)
            }
            static stbl(e) {
                return rs.box(ss.get("stbl"), rs.stsd(e), rs.stts(e), rs.stsc(e), rs.stsz(e), rs.stco(e))
            }
            static stsc(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, e.samples.length >>> 24 & 255, e.samples.length >>> 16 & 255, e.samples.length >>> 8 & 255, 255 & e.samples.length, 0, 0, 0, 1]);
                return rs.box(ss.get("stsc"), t)
            }
            static stts(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, e.samples.length >>> 24 & 255, e.samples.length >>> 16 & 255, e.samples.length >>> 8 & 255, 255 & e.samples.length, 0, 0, 4, 0]);
                return rs.box(ss.get("stts"), t)
            }
            static stco(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, e.offset >>> 24 & 255, e.offset >>> 16 & 255, e.offset >>> 8 & 255, 255 & e.offset]);
                return rs.box(ss.get("stco"), t)
            }
            static stsz(e) {
                const t = [0, 0, 0, 0, 0, 0, 0, 0, e.samples.length >>> 24 & 255, e.samples.length >>> 16 & 255, e.samples.length >>> 8 & 255, 255 & e.samples.length];
                for (const i of e.samples)
                    t.push(i.byteLength >> 24 & 255, i.byteLength >> 16 & 255, i.byteLength >> 8 & 255, 255 & i.byteLength);
                return rs.box(ss.get("stsz"), new Uint8Array(t))
            }
            static stsd(e) {
                const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                return rs.box(ss.get("stsd"), t, rs.mp4a(e))
            }
            static mp4a(e) {
                const t = e.channelCount
                    , i = e.audioSampleRate
                    , s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                return rs.box(ss.get("mp4a"), s, rs.esds(e))
            }
            static esds(e) {
                const t = e.streamDescriptor
                    , i = t.length
                    , s = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(t).concat([6, 1, 2]));
                return rs.box(ss.get("esds"), s)
            }
            static box(e, ...t) {
                if (!e)
                    throw new Error("Type cannot be undefined");
                const i = Array.prototype.slice.call(arguments, 1)
                    , s = i.length;
                let r = 8;
                for (let o = 0; o < s; o++)
                    r += i[o].byteLength;
                const n = new Uint8Array(r);
                n[0] = r >>> 24 & 255,
                    n[1] = r >>> 16 & 255,
                    n[2] = r >>> 8 & 255,
                    n[3] = 255 & r,
                    n.set(e, 4);
                let a = 8;
                for (let o = 0; o < s; o++)
                    n.set(i[o], a),
                        a += i[o].byteLength;
                return n
            }
        }
        function ns(e) {
            return new u((t => {
                for (const i of e)
                    t.onNext(i);
                return t.onComplete(),
                    Re()
            }
            ))
        }
        function as(e) {
            const t = [];
            for (let i = 0; i < e.numberOfChannels; i++) {
                const s = {
                    format: "f32-planar",
                    planeIndex: i
                }
                    , r = e.allocationSize(s)
                    , n = new ArrayBuffer(r);
                e.copyTo(n, s),
                    t.push(new Float32Array(n))
            }
            return {
                pts: e.timestamp / 1e3,
                numChannels: e.numberOfChannels,
                numSamples: e.numberOfFrames,
                buffers: t
            }
        }
        function os() {
            const e = new ke
                , t = new ke
                , i = t.pipe(ze((e => new Uint8Array(e))), qi(Ki.extractAtoms), Ge(ns), De())
                , s = i.pipe(qi((e => "moov" === e.name ? (0,
                    Ki.extractAtoms)(e.data) : null)), Ge(ns), je((e => "trak" === e.name)), qi(Ki.parseAudioMeta), De())
                , r = s.pipe(ze((t => {
                    const i = new AudioDecoder({
                        output: t => e.next(t),
                        error: t => {
                            e.error(t),
                                e.complete(),
                                i.close()
                        }
                    });
                    return i.configure(t),
                        i
                }
                )));
            return i.pipe(je((e => "moof" === e.name || "mdat" === e.name)), Xe(2), Ve(s, (([e, t], i) => [i, e, t])), qi((e => function (e, t, i) {
                var s, r;
                const [n] = null !== (s = (0,
                    Ki.findAtom)(t.data, ["traf", "tfhd"])) && void 0 !== s ? s : [];
                if (!n)
                    return;
                const [a] = null !== (r = (0,
                    Ki.findAtom)(t.data, ["traf", "tfdt"])) && void 0 !== r ? r : [];
                if (!a)
                    return;
                if ((0,
                    Ki.toInt)(n.data.slice(4, 8)) !== e.id)
                    return;
                const o = (0,
                    Ki.toInt)(a.data.slice(0, 1))
                    , l = (0,
                        Ki.toInt)(a.data.slice(4, 0 === o ? 8 : 16));
                return new EncodedAudioChunk({
                    type: "key",
                    timestamp: l / e.timeScale * 1e6,
                    data: i.data
                })
            }(...e)))).pipe(Ve(r)).subscribe((([e, t]) => t.decode(e))),
            {
                push: e => {
                    t.next(e)
                }
                ,
                frames: e.pipe(ze(as)),
                destroy: () => {
                    e.complete(),
                        t.complete()
                }
            }
        }
        function ls(e, t) {
            return Ne(((i, s) => {
                const r = new Map
                    , n = [];
                e.forEach(((e, t) => r.set(t))),
                    e.forEach(((a, o) => {
                        a.subscribe((i => {
                            n[o] = i;
                            const r = n.filter((() => !0));
                            if (r.length < e.length)
                                return;
                            const a = n.splice(0, r.length)
                                , l = t(a);
                            s.onNext(l)
                        }
                        ), s.onError, (() => {
                            r.delete(o),
                                r.size > 0 || (n.splice(0, n.length),
                                    s.onComplete())
                        }
                        )).closeBy(i)
                    }
                    ))
            }
            ))
        }
        const cs = e => t => new u((i => {
            let s, r = !1, n = !1;
            return t.subscribe((t => {
                null == s || s.close(),
                    s = e(t).subscribe((e => {
                        r || (r = !0),
                            i.onNext(e),
                            n && (null == s || s.close(),
                                s = void 0,
                                i.onComplete())
                    }
                    ), (e => i.onError(e)), (() => {
                        null == s || s.close(),
                            s = void 0,
                            n && i.onComplete()
                    }
                    ))
            }
            ), i.onError, (() => {
                r ? (null == s || s.close(),
                    s = void 0,
                    i.onComplete()) : n = !0
            }
            ))
        }
        ));
        var us = i(1172)
            , ds = i(8267)
            , As = i(1399);
        class hs {
            constructor(e, t) {
                this.onBufferLength = e,
                    this.getLastReceivedPTS = t,
                    this.buffer = []
            }
            push(e) {
                this.buffer.push(e),
                    this.buffer.length > 1 && this.onBufferLength(this.lengthInMs)
            }
            getFrame(e) {
                if (!this.isRequestedPtsBehindFirstFrame(e))
                    return this.dropFramesBeforePTS(e),
                        this.buffer.shift()
            }
            get length() {
                return this.buffer.length
            }
            get lengthInMs() {
                return this.buffer.length < 2 ? 0 : (this.getLastReceivedPTS() || this.buffer[this.buffer.length - 1].metadata.pts) - this.buffer[0].metadata.pts
            }
            destroy() {
                this.buffer = []
            }
            dropFramesBeforePTS(e) {
                if (0 === this.buffer.length)
                    return;
                const t = function (e) {
                    const t = e.reduce(((e, t) => Math.abs(e) > Math.abs(t) ? t : e));
                    return e.findIndex((e => e === t))
                }(this.buffer.map((t => t.metadata.pts - e)));
                t > 0 && this.buffer.splice(0, t - 1)
            }
            isRequestedPtsBehindFirstFrame(e) {
                var t;
                const i = null === (t = this.buffer[0]) || void 0 === t ? void 0 : t.metadata.pts;
                return !!i && i > e
            }
        }
        class ps extends Error {
            constructor(e) {
                var t;
                super(e),
                    Object.setPrototypeOf(this, ps.prototype),
                    null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, ps),
                    this.name = "FlipbookError"
            }
            toString() {
                var e;
                return `[${this.name}]: ${this.message} ${null === (e = this.stack) || void 0 === e ? void 0 : e.replace(/.*/, "")}`
            }
        }
        function fs(e) {
            if (e instanceof ps)
                return e;
            e instanceof Error || (e = new Error("string" == typeof e ? e : "Unknown error with type: " + typeof e));
            const t = e;
            return Object.setPrototypeOf(t, ps.prototype),
                t.name = "FlipbookError",
                t.toString = () => {
                    var e;
                    return `[${t.name}]: ${t.message} ${null === (e = t.stack) || void 0 === e ? void 0 : e.replace(/.*/, "")}`
                }
                ,
                t
        }
        const ms = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
            , bs = new Float32Array([-1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1])
            , vs = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            , ys = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        let gs = null
            , ws = null
            , Ss = 0;
        const Es = {
            vertexShaderSource: "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    varying vec2 v_texCoord;\n    void main() {\n        gl_Position = a_position;\n        v_texCoord = a_texCoord;\n    }\n",
            fragmentShaderSource: "\n    precision mediump float;\n    uniform sampler2D u_image;\n    varying vec2 v_texCoord;\n\n    void main() {\n        gl_FragColor = texture2D(u_image, v_texCoord);\n    }\n",
            init: function (e, t, i) {
                i(),
                    gs = e.createBuffer();
                const s = e.getAttribLocation(t, "a_position");
                e.enableVertexAttribArray(s),
                    e.bindBuffer(e.ARRAY_BUFFER, gs),
                    e.vertexAttribPointer(s, 2, e.FLOAT, !1, 0, 0),
                    ws = e.createBuffer();
                const r = e.getAttribLocation(t, "a_texCoord");
                e.enableVertexAttribArray(r),
                    e.bindBuffer(e.ARRAY_BUFFER, ws),
                    e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0)
            },
            render: function (e, t, i) {
                var s;
                !function (e, t, i) {
                    e.bindBuffer(e.ARRAY_BUFFER, ws),
                        e.bufferData(e.ARRAY_BUFFER, ms, e.STATIC_DRAW),
                        e.bindBuffer(e.ARRAY_BUFFER, gs),
                        e.bufferData(e.ARRAY_BUFFER, bs, e.STATIC_DRAW),
                        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i),
                        e.drawArrays(e.TRIANGLES, 0, 6)
                }(e, 0, i[0]),
                    (s = i[1].metadata).fid === s.rfid && (Ss = i[1].metadata.rfid),
                    Ss === i[1].metadata.rfid && function (e, t, i) {
                        const s = t.width
                            , r = t.height;
                        for (let n = 1; n < i.metadata.x.length; n++) {
                            const t = i.image.width
                                , a = i.image.height
                                , o = i.metadata.w[n]
                                , l = i.metadata.h[n]
                                , c = i.metadata.x[0] + i.metadata.x[n]
                                , u = i.metadata.y[0] + i.metadata.y[n]
                                , d = i.metadata.x[n]
                                , A = i.metadata.y[n]
                                , h = o / s * 2 - 1
                                , p = -(l / r * 2 - 1)
                                , f = c / s * 2 - 1
                                , m = -(u / r * 2 - 1);
                            vs[0] = vs[4] = vs[6] = f,
                                vs[1] = vs[3] = vs[9] = m,
                                vs[2] = vs[8] = vs[10] = h + 1 + f,
                                vs[5] = vs[7] = vs[11] = p - (1 - m),
                                e.bindBuffer(e.ARRAY_BUFFER, gs),
                                e.bufferData(e.ARRAY_BUFFER, vs, e.STATIC_DRAW);
                            const b = d / t
                                , v = A / a
                                , y = (d + o) / t
                                , g = (A + l) / a;
                            ys[0] = ys[4] = ys[6] = b,
                                ys[1] = ys[3] = ys[9] = v,
                                ys[2] = ys[8] = ys[10] = y,
                                ys[5] = ys[7] = ys[11] = g,
                                e.bindBuffer(e.ARRAY_BUFFER, ws),
                                e.bufferData(e.ARRAY_BUFFER, ys, e.STATIC_DRAW),
                                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i.image),
                                e.drawArrays(e.TRIANGLES, 0, 6)
                        }
                    }(e, t, i[1])
            }
        }
            , Ps = {
                vertexShaderSource: "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    varying vec2 v_texCoord;\n    void main() {\n        gl_Position = a_position;\n        v_texCoord = a_texCoord;\n    }\n",
                fragmentShaderSource: "\n    precision mediump float;\n    uniform sampler2D u_image;\n    varying vec2 v_texCoord;\n\n    void main() {\n        gl_FragColor = texture2D(u_image, v_texCoord);\n    }\n",
                init: function (e, t, i) {
                    i();
                    const s = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, s),
                        e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1]), e.STATIC_DRAW);
                    const r = e.getAttribLocation(t, "a_position");
                    e.enableVertexAttribArray(r),
                        e.bindBuffer(e.ARRAY_BUFFER, s),
                        e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0);
                    const n = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, n),
                        e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), e.STATIC_DRAW);
                    const a = e.getAttribLocation(t, "a_texCoord");
                    e.enableVertexAttribArray(a),
                        e.bindBuffer(e.ARRAY_BUFFER, n),
                        e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0)
                },
                render: function (e, t, i) {
                    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i),
                        e.drawArrays(e.TRIANGLES, 0, 6)
                }
            };
        function Ts(e, t, i) {
            const s = e.createShader(i);
            if (!s)
                return new Error("Failed to copile shader");
            if (e.shaderSource(s, t),
                e.compileShader(s),
                !e.getShaderParameter(s, e.COMPILE_STATUS)) {
                const t = e.getShaderInfoLog(s);
                return e.deleteShader(s),
                    new Error(`WebGl could not compile shader${t}`)
            }
            return s
        }
        function Is(e, t) {
            const i = {
                preserveDrawingBuffer: !0
            }
                , s = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
            if (!s)
                return new Error("WebGL not supported");
            s.pixelStorei(s.UNPACK_ALIGNMENT, 1);
            const r = Ts(s, t.vertexShaderSource, s.VERTEX_SHADER);
            if (r instanceof Error)
                return r;
            const n = Ts(s, t.fragmentShaderSource, s.FRAGMENT_SHADER);
            if (n instanceof Error)
                return n;
            const a = function (e, t, i) {
                const s = e.createProgram();
                return s ? (e.attachShader(s, t),
                    e.attachShader(s, i),
                    e.linkProgram(s),
                    e.useProgram(s),
                    e.getProgramParameter(s, e.LINK_STATUS) ? s : new Error(`WebGl program fail to link ${e.getShaderInfoLog(s)}`)) : new Error("Failed to create WebGl program")
            }(s, r, n);
            return t.init(s, a, (() => function (e) {
                const t = e.createTexture();
                return t ? (e.bindTexture(e.TEXTURE_2D, t),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
                    t) : new Error("Failed to create WebGl texture")
            }(s))),
                s.clearColor(0, 0, 0, 0),
                s.clear(s.COLOR_BUFFER_BIT),
                s.useProgram(a),
            {
                setSize: function (t, i) {
                    s && (e.height = i,
                        e.width = t,
                        s.viewport(0, 0, s.canvas.width, s.canvas.height))
                },
                render: function (i) {
                    s && t.render(s, e, i)
                },
                destroy: function () {
                    s && s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT | s.STENCIL_BUFFER_BIT)
                }
            }
        }
        class Ms {
            constructor(e, t = (() => { }
            )) {
                this.dateQueue = [],
                    this.valueQueue = [],
                    this.onMeasure = () => {
                        this.onMetric(this.getMetric())
                    }
                    ,
                    this.duration = e,
                    this.onMetric = t,
                    this.intervalId = window.setInterval(this.onMeasure, e)
            }
            add(e) {
                this.dropOutdated(),
                    this.dateQueue.push(window.performance.now()),
                    this.valueQueue.push(e)
            }
            getMetric() {
                return this.dropOutdated(),
                    this.valueQueue.reduce(((e, t) => e + t), 0) / this.duration * 1e3
            }
            destroy() {
                for (window.clearInterval(this.intervalId); this.dateQueue.length;)
                    this.valueQueue.shift(),
                        this.dateQueue.shift()
            }
            dropOutdated() {
                const e = window.performance.now() - this.duration;
                for (; this.dateQueue.length && this.dateQueue[0] < e;)
                    this.valueQueue.shift(),
                        this.dateQueue.shift()
            }
        }
        var Os, Cs, xs;
        function _s(e, t, i) {
            const s = function (e) {
                let t = 0;
                return {
                    calc: e => (t = .5 * t + .5 * e,
                        t),
                    last: () => t
                }
            }();
            let r = 0
                , n = 0;
            const a = new Ms(1e3, (t => {
                e(Math.trunc(s.calc(8 * t / 1024)))
            }
            ));
            return new u((e => {
                const s = new WebSocket(i)
                    , r = new ke;
                function n() {
                    s.onerror = null,
                        s.onclose = null,
                        s.onmessage = null,
                        s.close()
                }
                return s.onmessage = e => {
                    r.next(e)
                }
                    ,
                    s.onerror = t => {
                        e.onError(fs(t.message))
                    }
                    ,
                    s.onclose = () => {
                        e.onError(fs("Socket closed"))
                    }
                    ,
                    s.onopen = () => {
                        s.onopen = null,
                            e.onNext([s, r])
                    }
                    ,
                    t.add(Re(n)),
                    Re(n)
            }
            )).pipe(cs((([e, i]) => new u((s => {
                const o = new ke
                    , l = new ke;
                let c, u = 0;
                const d = function (t) {
                    let i = !1;
                    return function (...t) {
                        if (!i)
                            return i = !0,
                                (() => e.send(Os.SetWallclockMode))(...t)
                    }
                }()
                    , A = () => {
                        if (!u)
                            return;
                        const t = Math.round(1e3 * window.performance.now()) - u;
                        e.send(t.toString())
                    }
                    ;
                return i.subscribe((t => t.data instanceof Blob ? (e => {
                    d(),
                        c && 0 !== r && (o.next({
                            blob: e.data,
                            metadata: Object.assign(Object.assign({}, c), {
                                serverSyncWallclock: r,
                                clientSyncTimestamp: n
                            })
                        }),
                            A(),
                            c = void 0,
                            a.add(e.data.size))
                }
                )(t) : "string" == typeof t.data ? (t => {
                    const i = JSON.parse(t.data);
                    switch (i.result) {
                        case Cs.OK:
                            i.name ? l.next({
                                action: xs.SwitchStream,
                                value: i.name
                            }) : (e.send(Os.RequestWallclock),
                                l.next({
                                    action: xs.Play,
                                    value: !0
                                }));
                            break;
                        case Cs.Wallclock:
                            r = i.timestamp,
                                n = performance.now(),
                                u = 1e3 * window.performance.now() - i.timestamp,
                                A();
                            break;
                        case Cs.NotSupported:
                            s.onError(new ps("Bad message sent"));
                            break;
                        default:
                            i.wallclock && (c = i),
                                i.error && s.onError(fs(i.error))
                    }
                    a.add(new Blob([t.data]).size)
                }
                )(t) : void s.onError(new ps("Unknown socket message type")))).closeBy(t),
                    s.onNext([e, o, l]),
                    Re()
            }
            )))), cs((([e, t, i]) => new u((s => (s.onNext({
                play: () => (e.send(Os.Start),
                    i.pipe(qi((e => e.action === xs.Play ? e.value : void 0)))),
                switchStream: t => (e.send(Os.SwitchStreamPrefix + t),
                    i.pipe(qi((e => e.action === xs.SwitchStream ? e.value : void 0)))),
                blob: t
            }),
                Re((() => {
                    e.close()
                }
                ))))))))
        }
        !function (e) {
            e.RequestWallclock = "wc",
                e.SetWallclockMode = "wallclock",
                e.SwitchStreamPrefix = "switch_stream:",
                e.Start = "0"
        }(Os || (Os = {})),
            function (e) {
                e.OK = "ok",
                    e.Wallclock = "wallclock",
                    e.NotSupported = "not_supported"
            }(Cs || (Cs = {})),
            function (e) {
                e.Play = "PLAY",
                    e.SwitchStream = "SWITCH_STREAM"
            }(xs || (xs = {}));
        class Rs {
            constructor(e) {
                this.onLatency = e,
                    this.lastFrameData = {
                        wallclock: 0,
                        serverSyncWallclock: 0,
                        clientSyncTimestamp: 0
                    }
            }
            update(e) {
                const { serverSyncWallclock: t, clientSyncTimestamp: i, wallclock: s } = e.metadata;
                this.lastFrameData.wallclock = s,
                    this.lastFrameData.serverSyncWallclock = t,
                    this.lastFrameData.clientSyncTimestamp = i,
                    this.onLatency(this.getLatency())
            }
            getLatency() {
                const { serverSyncWallclock: e, clientSyncTimestamp: t, wallclock: i } = this.lastFrameData;
                return 0 !== e && 0 !== t ? Math.trunc(e / 1e3 + performance.now() - t - i / 1e3) : 0
            }
        }
        class ks {
            constructor(e) {
                this.canUpgrade = e,
                    this.lastReceivedFrameMs = 0,
                    this.frameIntervals = [],
                    this.lastEventTime = 0,
                    this.EVENT_INTERVAL = 6e4
            }
            update() {
                if (window.performance.now() > this.lastEventTime + this.EVENT_INTERVAL || 0 === this.lastEventTime) {
                    const e = window.performance.now() - this.lastReceivedFrameMs;
                    if (this.lastReceivedFrameMs = window.performance.now(),
                        this.frameIntervals.push(e),
                        this.frameIntervals.length > 75) {
                        this.frameIntervals.shift();
                        const e = this.frameIntervals.reduce(((e, t) => t + e)) / this.frameIntervals.length;
                        400 >= e && (this.canUpgrade({
                            averageMs: e
                        }),
                            this.lastEventTime = window.performance.now(),
                            this.frameIntervals = [])
                    }
                }
            }
        }
        function Bs(e) {
            return new u((t => {
                if (!e)
                    return t.onNext(void 0),
                        t.onComplete(),
                        Re((() => { }
                        ));
                const i = e.subscribe((e => {
                    t.onNext(e)
                }
                ), (() => {
                    t.onNext(void 0)
                }
                ), (() => {
                    t.onComplete()
                }
                ));
                return Re((() => {
                    i.close()
                }
                ))
            }
            ))
        }
        function Ns(e, t) {
            const i = new ke
                , s = new ke
                , r = new ke
                , n = new ke
                , a = new ke
                , o = e => {
                    r.next(e)
                }
                , l = e => {
                    s.next(e)
                }
                , c = e => {
                    n.next(e)
                }
                ;
            return ls([_s((e => {
                i.next(e)
            }
            ), e, t.videoUrl), Bs((0,
                As.createWebSocketTransport)(e, t.audioUrl))], (e => e)).pipe(cs((([u, A]) => {
                    const h = new ds.r;
                    e.add(Re((() => {
                        h.destroy()
                    }
                    )));
                    const p = new ke;
                    h.addListener((e => e && p.next(e)));
                    const f = new _e
                        , m = new ke;
                    let b;
                    f.add(Re((() => {
                        m.next()
                    }
                    ))),
                        e.add(Re((() => {
                            f.close()
                        }
                        ))),
                        e.add(Re((() => {
                            i.complete(),
                                s.complete(),
                                r.complete(),
                                n.complete(),
                                a.complete()
                        }
                        )));
                    e: try {
                        const { audioContext: i, volume: s, muted: r, initBufferLength: n } = t;
                        if (!i || !A)
                            break e;
                        const a = A.messages.pipe(qi((e => "binary" === e.type ? e.buffer : null)), De((() => new ke)))
                            , o = a.pipe(Qe(1), qi((e => {
                                const t = (0,
                                    Ki.findAtom)(new Uint8Array(e), ["moov", "trak", "mdia", "minf", "stbl", "stsd"]);
                                if (t)
                                    return (0,
                                        Ki.getSampleRate)(t[0])
                            }
                            )), De((() => new Fe(1)))).pipe(ze((e => (0,
                                us.createAudioPlayer)(i, n, e, 1, s, r, 1))), qe((e => e.pts.subscribe((e => {
                                    h.setPts(e)
                                }
                                )))), De((() => new Fe(1))))
                            , l = t.audioDecoderFactory();
                        f.add(Re((() => {
                            l.destroy()
                        }
                        ))),
                            a.subscribe((e => {
                                l.push(e)
                            }
                            )).closeBy(e),
                            l.frames.subscribe((e => null == b ? void 0 : b.pushFrame(e)), (e => {
                                console.warn(e),
                                    f.close()
                            }
                            )).closeBy(f),
                            o.subscribe((e => {
                                b = e,
                                    f.add(Re((() => {
                                        e.destroy()
                                    }
                                    )))
                            }
                            ), (e => {
                                console.warn(e),
                                    f.close()
                            }
                            )).closeBy(f)
                    } catch (O) {
                        console.warn(O),
                            f.close()
                    }
                    const v = function () {
                        const e = new ke;
                        let t = 0;
                        return {
                            frames: e,
                            push: i => {
                                t = i.metadata.pts;
                                const s = new Image
                                    , r = URL.createObjectURL(i.blob);
                                s.onload = () => {
                                    e.next(Object.assign(Object.assign({}, i), {
                                        image: s
                                    })),
                                        URL.revokeObjectURL(s.src)
                                }
                                    ,
                                    s.src = r,
                                    s.onerror = t => {
                                        e.error(fs(t))
                                    }
                            }
                            ,
                            getLastReceivedPTS: () => t,
                            destroy: () => {
                                e.complete()
                            }
                        }
                    }()
                        , y = new hs(o, v.getLastReceivedPTS);
                    e.add(Re((() => {
                        y.destroy(),
                            v.destroy()
                    }
                    ))),
                        u.blob.subscribe((e => v.push(e))).closeBy(e);
                    const g = v.frames;
                    m.pipe(cs((() => g)), Qe(1)).subscribe((e => {
                        h.setPts(e.metadata.pts - t.initBufferLength)
                    }
                    )).closeBy(e),
                        g.subscribe((e => y.push(e))).closeBy(e);
                    const w = p.pipe(qi((e => y.getFrame(e))), De((() => new Fe(1))))
                        , S = function (e, t) {
                            let i = new Image
                                , s = !1;
                            const r = function (e) {
                                return Is(e, Es)
                            }(t);
                            if (r instanceof Error)
                                return fs(r);
                            const n = new Ms(1e3, (t => {
                                e(t)
                            }
                            ));
                            return {
                                render: e => {
                                    var t;
                                    (t = e.metadata).rfid === t.fid && (i = e.image,
                                        s || (r.setSize(e.metadata.w[0], e.metadata.h[0]),
                                            s = !0)),
                                        n.add(1),
                                        r.render([i, e])
                                }
                                ,
                                destroy: () => {
                                    r.destroy()
                                }
                            }
                        }(l, t.canvas);
                    if (S instanceof ps)
                        throw S;
                    e.add(Re((() => S.destroy()))),
                        w.subscribe((e => S.render(e))).closeBy(e);
                    const E = new Rs(c);
                    w.subscribe((e => E.update(e))).closeBy(e);
                    const P = new ke
                        , T = new ks((e => P.next(e)));
                    w.subscribe((() => T.update())).closeBy(e),
                        w.subscribe((e => {
                            a.next(Math.trunc(e.metadata.wallclock / 1e3))
                        }
                        )).closeBy(e);
                    const I = new ke;
                    w.pipe(ze((e => e.metadata.name)), d(((e, t) => !e || !t || e === t))).subscribe((() => {
                        I.next()
                    }
                    )).closeBy(e);
                    const M = e => e.pipe(Ve(w), ze((e => e[0])), De((() => new ke)));
                    return Ue({
                        play: e => ls([u.play(), Bs(null == A ? void 0 : A.send({
                            eventType: "PLAY",
                            stream: e + "_audioonly"
                        })), w.pipe(Qe(1))], (e => e[0])),
                        switchStream: e => ls([u.switchStream(e), Bs(null == A ? void 0 : A.send({
                            eventType: "SWITCH_REQUEST",
                            stream: e + "_audioonly"
                        })), I], (e => e[0])),
                        setVolume: e => {
                            null == b || b.mute.set(0 === e),
                                null == b || b.volume.set(e)
                        }
                        ,
                        setPlaybackRate: e => {
                            null == b || b.playbackRate.set(e)
                        }
                        ,
                        canUpgrade: () => P,
                        stats: {
                            bandwidth: () => i.pipe(M),
                            fps: () => s.pipe(M),
                            buffer: () => r.pipe(M),
                            latency: () => n.pipe(M),
                            wallclock: () => a.pipe(M)
                        }
                    })
                }
                )))
        }
        const Ls = /\(.*\)/;
        function Ds(e) {
            var t;
            return Ls.test(null !== (t = e[0]) && void 0 !== t ? t : "")
        }
        const Fs = /\/([0-9].*\/[\S]*\(\d+-\d+\)_[\S]*)/
            , js = /\/([0-9].*\/[\S]*(\(\d+-\d+\))?_[\S]*)/
            , Us = /\((\d+)-(\d+)\)/
            , Ws = /^(\d+):(\d+)$/;
        class Vs {
            constructor(e) {
                var t, i;
                this.element = e,
                    this.listeners = [],
                    this.attachListener = e => {
                        this.listeners.push(e)
                    }
                    ,
                    this.detachListener = e => {
                        const t = this.listeners.indexOf(e);
                        -1 !== t && this.listeners.splice(t, 1)
                    }
                    ,
                    this.destroy = () => {
                        var e, t;
                        this.listeners = [],
                            null === (t = null === (e = this.element.__hiddenResizeTrigger__) || void 0 === e ? void 0 : e.remove) || void 0 === t || t.call(e),
                            this.element.__hiddenResizeTrigger__ = void 0
                    }
                    ,
                    this.emitEvent = e => {
                        this.listeners.forEach((t => t(e)))
                    }
                    ,
                    "static" === getComputedStyle(e).position && (e.style.position = "relative");
                const s = e.__hiddenResizeTrigger__ = document.createElement("object");
                s.style.display = "block",
                    s.style.position = "absolute",
                    s.style.top = "0",
                    s.style.left = "0",
                    s.style.height = "100%",
                    s.style.width = "100%",
                    s.style.overflow = "hidden",
                    s.style.setProperty("pointer-events", "none"),
                    s.style.setProperty("z-index", "-1");
                const r = this.emitEvent;
                s.type = "text/html",
                    this.element.appendChild(s),
                    null === (i = null === (t = s.contentDocument) || void 0 === t ? void 0 : t.defaultView) || void 0 === i || i.addEventListener("resize", r)
            }
        }
        const Qs = {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            height: "100%",
            width: "100%"
        };
        class Hs {
            constructor(e, t) {
                this.state = {
                    width: void 0
                },
                    this.parentElement = null,
                    this.resizeDetector = void 0,
                    this.resize = () => {
                        this.parentElement && this.setWidth(this.parentElement)
                    }
                    ,
                    this.canvasElement = e,
                    null == t || t.pipe(qe((e => this.aspectRatio = e)), qi((() => this.parentElement))).subscribe((e => this.setWidth(e)))
            }
            destroy() {
                var e;
                window.removeEventListener("resize", this.resize),
                    null === (e = this.resizeDetector) || void 0 === e || e.destroy()
            }
            setParentElement(e) {
                this.parentElement = e,
                    this.parentElement && (Object.assign(this.parentElement.style, Qs),
                        this.parentElement.appendChild(this.canvasElement),
                        this.setWidth(this.parentElement),
                        window.addEventListener("resize", this.resize),
                        this.resizeDetector = new Vs(this.parentElement),
                        this.resizeDetector.attachListener(this.resize))
            }
            setWidth(e) {
                const t = e.offsetHeight * function (e = "") {
                    const t = Ws.exec(e);
                    if (!t)
                        return 1.7777777777777777;
                    const [, i, s] = t.map((e => parseInt(e, 10)));
                    return i / s
                }(this.aspectRatio);
                this.parentElement.style.width = `${t}px`
            }
        }
        class Gs {
            urlToStream(e, t) {
                var i;
                return null !== (i = function (e, t = 0) {
                    var i;
                    const s = e.match(Fs);
                    if (!s)
                        return null === (i = e.match(js)) || void 0 === i ? void 0 : i[1];
                    const r = s[1].match(Us);
                    if (!r)
                        return;
                    let n = t;
                    return (n < Number(r[1]) || n > Number(r[2])) && (n = Number(r[1])),
                        s[1].replace(Us, n.toString())
                }(e, t)) && void 0 !== i ? i : ""
            }
            multiUrlToSingleUrl(e, t) {
                return e.replace(Us, t.toString())
            }
            chooseAudioDecoder(e, t, i) {
                var s, r;
                return e.webCodec.audio && null !== (r = null === (s = Object.entries(e.webCodec.audio).find((([e]) => e === this.config.settings.stream.audioCodec))) || void 0 === s ? void 0 : s[1]) && void 0 !== r && r ? os : e.webAudio && "aac" === this.config.settings.stream.audioCodec ? () => function (e) {
                    const t = function (e) {
                        const t = new ke;
                        let i = [];
                        const { windowSize: s, windowOffset: r } = e
                            , n = 2 * r
                            , a = s + n;
                        let o;
                        return {
                            samples: t,
                            push: e => {
                                if (function (e) {
                                    const t = (0,
                                        Ki.extractAtoms)(e);
                                    t.filter((e => "moov" === e.name)).reduce(((e, t) => [...e, ...(0,
                                        Ki.extractAtoms)(t.data)]), []).filter((e => "trak" === e.name)).forEach((e => {
                                            const t = (0,
                                                Ki.parseAudioMeta)(e);
                                            t && (o = t)
                                        }
                                        ));
                                    let s = 0;
                                    const r = t.filter((e => "moof" === e.name || "mdat" === e.name)).reduce(((e, t) => {
                                        let i = e[e.length - 1];
                                        return i && 2 !== i.length || (i = [],
                                            e.push(i)),
                                            i.push(t),
                                            e
                                    }
                                    ), []).reduce((n = ([e, t]) => {
                                        var i, r;
                                        const [n] = null !== (i = (0,
                                            Ki.findAtom)(e.data, ["traf", "tfhd"])) && void 0 !== i ? i : [];
                                        if (!n)
                                            return;
                                        const [a] = null !== (r = (0,
                                            Ki.findAtom)(e.data, ["traf", "tfdt"])) && void 0 !== r ? r : [];
                                        if (!a)
                                            return;
                                        if ((0,
                                            Ki.toInt)(n.data.slice(4, 8)) !== o.id)
                                            return;
                                        const l = (0,
                                            Ki.toInt)(a.data.slice(0, 1));
                                        return s = (0,
                                            Ki.toInt)(a.data.slice(4, 0 === l ? 8 : 16)),
                                            t.data
                                    }
                                        ,
                                        (e, t) => {
                                            const i = e.slice()
                                                , s = n(t);
                                            return s && i.push(s),
                                                i
                                        }
                                    ), []);
                                    var n;
                                    const a = t.find((e => "egwc" === e.name));
                                    if (!a)
                                        return;
                                    const l = (0,
                                        Ki.getEgwc)(a);
                                    l && i.push(...r.map((e => [e, l, s])))
                                }(new Uint8Array(e)),
                                    o && i.length >= a) {
                                    const e = i.slice(0, a).map((e => e[0]));
                                    t.next({
                                        samples: e,
                                        timescale: o.timeScale,
                                        timestamp: i[r][2],
                                        egwc: i[r][1],
                                        sampleRate: o.sampleRate,
                                        numChannels: o.numberOfChannels
                                    });
                                    const s = i.length - a;
                                    i = [...i.slice(-n - s)]
                                }
                            }
                            ,
                            destroy: () => {
                                t.complete()
                            }
                        }
                    }(e)
                        , i = function (e) {
                            return null !== navigator.userAgent.match(/iPhone|iPod/i) ? is(e, ts) : is(e, es)
                        }(e);
                    return t.samples.subscribe((e => {
                        i.push(function (e) {
                            const t = {
                                channelCount: e.numChannels,
                                timescale: e.timescale,
                                audioSampleRate: e.sampleRate,
                                samples: e.samples,
                                streamDescriptor: [42, 528, 136, 0],
                                offset: 0
                            };
                            return {
                                buffer: rs.generate(t),
                                pts: Math.round(1e3 * e.timestamp / e.timescale),
                                egwc: e.egwc,
                                sampleRate: t.audioSampleRate,
                                numChannels: t.channelCount
                            }
                        }(e))
                    }
                    )),
                    {
                        push: e => {
                            t.push(e)
                        }
                        ,
                        frames: i.frames,
                        destroy: () => {
                            t.destroy(),
                                i.destroy()
                        }
                    }
                }({
                    audioContext: i,
                    windowSize: 10,
                    windowOffset: 2
                }) : Ji
            }
            constructor(e, t, i, s, r) {
                this.config = e,
                    this.observables = t,
                    this.scope = i,
                    this.state = s,
                    this.failPlayer = r,
                    this.parentDiv = document.createElement("div"),
                    this.canvas = document.createElement("canvas"),
                    this.canvas.innerText = "Canvas is not supported",
                    this.canvas.id = "flipbook-fmp4-video",
                    Object.assign(this.canvas.style, Ke),
                    this.canvas.width = 400,
                    this.canvas.height = 200;
                const { aspectRatio: n } = t;
                this.aspectRatioWrapper = new Hs(this.canvas, n);
                const a = t.streamId.pipe(qi((t => {
                    const i = (r = t,
                        (s = e.settings.video.urls)[Ds(s) ? 0 : r]);
                    var s, r;
                    return e.onStats({
                        streamHost: new URL(i).host
                    }),
                        i || null
                }
                )), d(), De((() => new Fe(1))))
                    , o = new _e;
                i.add(Re((() => o.close()))),
                    Le([t.play.pipe(d()), t.url], (e => e[0])).pipe(Ve(s, ((e, t) => [e, t])), qi((([e, t]) => e && "IDLE" === t.state ? e : null))).subscribe((() => {
                        this.prepareForPlay(t, a, o)
                    }
                    )).closeBy(i),
                    t.play.pipe(Xe(2, 1), je((([e, t]) => e !== t && !t))).subscribe((() => {
                        o.close()
                    }
                    )).closeBy(i),
                    ls([a, t.url.pipe(qi((e => e)), d())], (e => e)).pipe(Xe(2, 1), je((([[e, t], [i, s]]) => e !== i && t !== s))).subscribe((() => {
                        o.close(),
                            this.prepareForPlay(t, a, o)
                    }
                    )).closeBy(i),
                    i.add(Re((() => {
                        this.config.onStop(),
                            this.state.next({
                                state: "STOPPING"
                            }),
                            this.state.next({
                                state: "IDLE"
                            }),
                            this.state.next({
                                state: "DESTROYED"
                            })
                    }
                    ))),
                    this.failPlayer.subscribe((e => {
                        this.config.onFailure(e),
                            o.close()
                    }
                    )).closeBy(i)
            }
            prepareForPlay(e, t, i) {
                const { url: s, volume: r, muted: n, play: a, streamId: o } = e;
                this.state.next({
                    state: "LOADING"
                });
                const l = Le([s, o, t], (e => e)).pipe(qi((e => {
                    const [, t, i] = e;
                    return this.urlToStream(i, t)
                }
                )), qe((e => this.config.onStats({
                    streamName: e.split("/")[1]
                }))), d(), De((() => new Fe(1))));
                Le([s, r, n, a, o, t], (e => e)).pipe(je((([, , , e]) => e)), qi((e => {
                    const [t, s, r, , n, a] = e;
                    return t ? {
                        videoUrl: this.multiUrlToSingleUrl(a, n),
                        audioUrl: this.multiUrlToSingleUrl(t, n),
                        canvas: this.canvas,
                        audioContext: this.config.audioContext,
                        volume: s,
                        muted: r,
                        initBufferLength: this.config.settings.buffer.init,
                        audioDecoderFactory: this.chooseAudioDecoder(this.config.browserFeatures, i, this.config.audioContext)
                    } : null
                }
                )), d((() => !0)), qe((() => {
                    this.aspectRatioWrapper.setParentElement(this.parentDiv),
                        i.add(Re((() => {
                            this.aspectRatioWrapper.destroy(),
                                this.canvas.remove()
                        }
                        )))
                }
                )), cs((e => Ns(i, e)))).subscribe((e => {
                    l.pipe(Ve(this.state, ((e, t) => [e, t])), qi((([e, t]) => e && "PLAYING" === t.state ? e : null)), Ve(o), cs((([t, i]) => e.switchStream(t).pipe(ze((e => [e, i])))))).subscribe((([e, t]) => {
                        this.config.onStats({
                            streamName: e.split("/")[1],
                            streamId: t
                        })
                    }
                    )).closeBy(i),
                        l.pipe(Qe(1), cs((t => e.play(t).pipe(ze((() => t))))), Ve(o)).subscribe((([e, t]) => {
                            this.state.next({
                                state: "PLAYING"
                            }),
                                this.config.onStats({
                                    streamName: e.split("/")[1],
                                    streamId: t
                                })
                        }
                        )).closeBy(i),
                        Le([r, n], (e => e)).subscribe((t => {
                            const [i, s] = t;
                            e.setVolume(s ? 0 : i)
                        }
                        )).closeBy(i),
                        i.add(Re((() => {
                            this.state.next({
                                state: "STOPPING"
                            }),
                                this.state.next({
                                    state: "IDLE"
                                })
                        }
                        ))),
                        this.config.onStats({
                            qualityMode: j.MANUAL,
                            currentQuality: L.LOW,
                            availableQualities: [L.LOW]
                        }),
                        e.stats.bandwidth().subscribe((e => this.config.onStats({
                            bandwidth: e,
                            playbackBitrate: e
                        }))).closeBy(i),
                        e.stats.latency().subscribe((e => this.config.onStats({
                            latency: e
                        }))).closeBy(i),
                        e.stats.buffer().subscribe((e => this.config.onStats({
                            bufferLength: e
                        }))).closeBy(i),
                        e.stats.fps().subscribe((e => this.config.onStats({
                            fps: e
                        }))).closeBy(i),
                        e.stats.wallclock().subscribe((e => this.config.onStats({
                            wallclock: e
                        }))).closeBy(i),
                        e.canUpgrade().subscribe((e => {
                            this.config.onPlayerCanUpgrade({
                                emitter: V.Flipbook,
                                reason: K.AcceptableAverageMsBetweenFrames,
                                metrics: e
                            })
                        }
                        )).closeBy(i),
                        this.observables.playbackRate.subscribe((t => e.setPlaybackRate(t))).closeBy(i)
                }
                ), (e => this.config.onFailure(ve(e, ee.MediaError)))).closeBy(i)
            }
            getPlayerContainer() {
                return this.parentDiv
            }
            destroy() {
                this.aspectRatioWrapper.destroy(),
                    this.scope.close()
            }
        }
        function Ys(e, t) {
            const i = new _e
                , s = new Be({
                    state: "IDLE"
                })
                , r = new ke;
            return [Hi(t, i), Yi(i, s.pipe(ze((e => "PLAYING" === e.state))), e.settings.latency, (e => r.next(e))), $i(i, e.settings.buffer), Zi(i, s, V.Flipbook)].reduce(((e, t) => t(e)), ((e, t) => new Gs(e, t, i, s, r)))(e, t)
        }
        function qs(e, t) {
            if (t.includes(e))
                return e;
            if (0 === t.length)
                return null;
            const i = (e, t) => Math.abs(D[e] - D[t]);
            return t.reduce(((t, s) => i(s, e) < i(t, e) ? s : t))
        }
        const zs = [te.FailedLoadingManifest, J.StreamSecurityError];
        class Xs {
            constructor(e, t) {
                var i;
                this.config = e,
                    this.playbackAttempts = 0,
                    this.availableQualities = new Be([]),
                    this.playbackStartTime = 0,
                    this.destroyScope = new _e,
                    this.triggerRestart = new ke,
                    this.triggerResolve = new ke,
                    this.restartPlayer = () => {
                        this.triggerResolve.next()
                    }
                    ,
                    this.subjects = (i = this.getObservablesProps(),
                    {
                        manifest: new Fe(1),
                        url: new Be(i.url),
                        playbackRate: new Be(1),
                        firstLatency: new Be(i.firstLatency),
                        serverClientDeltaTime: new Be(i.serverClientDeltaTime)
                    });
                const s = Le([t.quality, this.availableQualities.pipe(je((e => e.length > 0)), d(((e, t) => e.every(((e, i) => t[i] === e))))), t.qualityMode, t.maxAutoQuality], (e => e)).pipe(ze((([e, t, i, s]) => [e, i === j.AUTO && void 0 !== s ? Je(t, e) : t])), qi((([e, t]) => qs(e, t))), De((() => new Fe(1))))
                    , r = Le([this.subjects.manifest, t.qualityMode, t.maxAutoQuality], (e => e)).pipe(ze((([e, t, i]) => t === j.AUTO && void 0 !== i ? {
                        mediaManifests: e.mediaManifests.map((e => Object.assign(Object.assign({}, e), {
                            streams: e.streams.filter((e => t !== j.AUTO || void 0 === i || D[e.quality] <= D[i]))
                        })))
                    } : e))).pipe(Ve(t.play, ((e, t) => [e, t])), qi((([e, t]) => t ? e : null)), d());
                this.observables = {
                    mediaTag: t.mediaTag.pipe(qi((e => e))),
                    play: t.play.pipe(d()),
                    maxAutoQuality: t.maxAutoQuality.pipe(d()),
                    qualityMode: t.qualityMode.pipe(d()),
                    volume: t.volume,
                    muted: t.muted,
                    aspectRatio: t.aspectRatio,
                    quality: s,
                    url: this.subjects.url.pipe(d()),
                    manifest: r.pipe(De((() => new Fe(1)))),
                    streamId: t.streamId,
                    firstLatency: this.subjects.firstLatency.pipe(d()),
                    serverClientDeltaTime: this.subjects.serverClientDeltaTime,
                    playbackRate: this.subjects.playbackRate,
                    isBackgroundMode: t.isBackgroundMode
                },
                    this.observables = this.mapObservables(this.observables),
                    this.playerContainer = document.createElement("div");
                const n = this.getMediaPlayer();
                this.mediaPlayer = n(this.getMediaPlayerConfig(), this.observables);
                const a = this.mediaPlayer.getPlayerContainer();
                a && this.playerContainer.appendChild(a),
                    this.playbackAttempts = 1,
                    this.playbackStartTime = window.performance.now();
                const o = () => this.destroy();
                window.addEventListener("beforeunload", (function e() {
                    o(),
                        window.removeEventListener("beforeunload", e)
                }
                ))
            }
            destroy() {
                this.destroyScope.close(),
                    this.completeSubjects(),
                    this.mediaPlayer.destroy()
            }
            getPlayerContainer() {
                return this.playerContainer
            }
            mapObservables(e) {
                return e
            }
            getObservablesProps() {
                return {
                    url: void 0,
                    serverClientDeltaTime: void 0,
                    firstLatency: void 0,
                    playbackRate: 1
                }
            }
            getMediaPlayerConfig() {
                const { scheduler: e, deviceSupport: t, browserFeatures: i, videoContainer: s, onStop: r, onPlayerCanUpgrade: n } = this.config;
                return {
                    scheduler: e,
                    deviceSupport: t,
                    browserFeatures: i,
                    videoContainer: s,
                    onSuccess: this.onSuccess.bind(this),
                    onStop: r,
                    onStats: this.onStats.bind(this),
                    onPlaybackEvent: this.onPlaybackEvent.bind(this),
                    onFailure: this.onFailure.bind(this),
                    onEvent: this.onEvent.bind(this),
                    onPlayerCanUpgrade: n,
                    settings: this.config.settings,
                    audioContext: this.config.audioContext
                }
            }
            shouldResolveUrls(e) {
                return e.pipe(je((([e, t]) => e.streamId !== t.streamId)), ze((() => { }
                )))
            }
            resolveUrlOnFailure() {
                return !1
            }
            onSuccess() {
                this.playbackStartTime = window.performance.now(),
                    this.config.onSuccess()
            }
            onEvent(e) {
                this.config.onEvent(e)
            }
            completeSubjects() {
                Object.entries(this.subjects).forEach((([, e]) => e.complete()))
            }
            onFailure(e) {
                const t = window.performance.now();
                let i = this.playbackAttempts;
                const { attempts: s, validTime: r } = this.config.settings.playback;
                t - this.playbackStartTime < r && i++,
                    e.isCritical = this.isFailureCritical(e) || i > s,
                    e.isCritical ? (this.destroyScope.close(),
                        this.config.onEvent({
                            eventType: e.type,
                            eventReason: `${e.type}: ${e.message}`
                        }),
                        this.logPlayerFailure(e)) : (this.logPlayerFailure(e),
                            this.playbackAttempts = i,
                            this.playbackStartTime = t,
                            this.resolveUrlOnFailure() && this.subjects.url.next(void 0))
            }
            onPlaybackEvent(e) {
                this.config.onPlaybackEvent(e)
            }
            isFailureCritical(e) {
                return zs.includes(e.type) || e.message === H
            }
            onUrlResolved(e) {
                return this.config.onMediaUrlResolved(e),
                    e
            }
            onStats(e) {
                this.config.onStats(e)
            }
            reportManifestStats(e, t) {
                const i = e.streams.map((e => e.quality));
                this.availableQualities.next(i);
                const [s, r] = t
                    , n = {
                        cdnDecisionTime: r,
                        manifestLoadingTime: s,
                        availableQualities: i
                    }
                    , a = new URL(e.streams[0].url).host;
                this.config.onPlaybackEvent({
                    eventType: Y.MANIFEST_STATS,
                    eventReason: Y.MANIFEST_STATS,
                    data: {
                        manifestFetchStats: n,
                        streamHost: a
                    }
                })
            }
            subscribeToObservables(e) {
                this.subscribeResolveTrigger(e),
                    this.subscribeToPlay(e),
                    this.subscribeToStreamId(e),
                    this.subscribeToMediaUrlsResolve(e)
            }
            subscribeToMediaUrlsResolve(e) {
                const { play: t, streamId: i, quality: s, qualityMode: r, maxAutoQuality: n } = e
                    , a = Le([t, s, r, n, i, this.subjects.url], (([e, t, i, s, r, n]) => ({
                        play: e,
                        quality: t,
                        qualityMode: i,
                        maxQuality: s,
                        streamId: r,
                        url: n
                    })))
                    , o = t.pipe(je((e => e))).pipe(Ge((() => a)), je((e => e.play)), Xe(2, 1), De((() => new Fe(1))));
                this.shouldResolveUrls(o).subscribe((() => this.triggerResolve.next())).closeBy(this.destroyScope)
            }
            subscribeToPlay(e) {
                const { play: t } = e;
                t.pipe(je((e => e))).subscribe((() => {
                    this.triggerResolve.next()
                }
                )).closeBy(this.destroyScope),
                    t.pipe(d(((e, t) => !(t && !e)))).subscribe((() => {
                        const e = this.subjects.url.value;
                        e && Object.keys(e).length && this.subjects.url.next(void 0)
                    }
                    )).closeBy(this.destroyScope)
            }
            subscribeToStreamId(e) {
                const { streamId: t } = e;
                t.subscribe((() => {
                    this.availableQualities.next([])
                }
                )).closeBy(this.destroyScope),
                    t.pipe(Xe(2, 1)).subscribe((([e, t]) => {
                        this.config.onPlaybackEvent({
                            eventType: Y.STREAM_ID_CHANGED,
                            eventReason: q.StreamIdChangeRequested,
                            data: {
                                streamIdChanged: {
                                    prev: e,
                                    next: t
                                }
                            }
                        })
                    }
                    )).closeBy(this.destroyScope)
            }
            subscribeResolveTrigger(e) {
                const { quality: t, qualityMode: i, streamId: s } = e
                    , { settings: r } = this.config;
                this.triggerResolve.pipe(Ve(t, i, s, ((e, t, i, s) => ({
                    quality: t,
                    qualityMode: i,
                    streamId: s
                }))), cs((e => {
                    const t = {
                        streamId: e.streamId,
                        quality: e.quality,
                        qualityMode: e.qualityMode
                    }
                        , i = r.player === V.Flipbook ? r.audio.urls : r.urls;
                    return this.resolveUrl(i, t)
                }
                ))).subscribe((e => this.subjects.url.next(e)), (e => {
                    const t = e instanceof be ? e : ve(e, te.FailedLoadingManifest);
                    this.onFailure(t)
                }
                )).closeBy(this.destroyScope)
            }
            resolveUrl(e, t) {
                const { settings: { session: i, stream: s } } = this.config;
                this.config.onPlaybackAttempt({
                    videoSessionId: i.videoSessionId,
                    pressedStart: !1,
                    tableBaseName: s.baseName
                }),
                    this.availableQualities.next([]);
                const r = Ds(e) ? e[0] : e[t.streamId];
                if (!r)
                    return n = new Error("video url is not defined"),
                        new u((e => {
                            const t = "string" == typeof n ? new Error(n) : n;
                            return e.onError(t),
                                e.onComplete(),
                                Re()
                        }
                        ));
                var n;
                const a = new URL(r);
                return a.searchParams.set("streamid", `${t.streamId}`),
                    this.resolveMediaStreamUrl(a.toString(), t)
            }
            logPlayerFailure(e) {
                this.config.onFailure(e);
                const t = e.isCritical ? Y.PLAYER_FAILED : Y.RECONNECT;
                this.config.onPlaybackEvent({
                    eventType: t,
                    eventReason: `${e.type}: ${e.message}`
                })
            }
        }
        const $s = [ee.StreamShutdown, ee.PermissionError];
        class Zs extends Xs {
            get manifestManager() {
                return this.config.manifestManager
            }
            constructor(e, t) {
                super(e, t),
                    this.subscribeToObservables(t)
            }
            subscribeToPlay(e) {
                super.subscribeToPlay(e);
                const { play: t } = e;
                t.pipe(d(((e, t) => !(e && !t)))).subscribe((e => {
                    this.manifestManager.clear()
                }
                )),
                    t.subscribe((() => {
                        const e = this.manifestManager.getMasterManifest();
                        e && this.subjects.manifest.next(e)
                    }
                    ))
            }
            shouldResolveUrls(e) {
                const t = this.triggerRestart.pipe(je((() => !this.manifestManager.isManifestAvailable)), ze((() => { }
                )));
                return Ui(e.pipe(je((([e, t]) => !(this.manifestManager.isManifestAvailable && this.manifestManager.isInMultiStreamMode || e.streamId === t.streamId))), ze((() => { }
                ))), t)
            }
            resolveMediaStreamUrl(e, t) {
                return this.manifestManager.fetch(e).pipe(qe((([, e]) => this.reportManifestStats(this.manifestManager.manifest, e))), qi((([e]) => {
                    var i, s, r;
                    const n = e.mediaManifests.length > 1 ? t.streamId : 0
                        , a = e.mediaManifests[n];
                    if (!a)
                        return null;
                    const o = null !== (r = null === (s = null === (i = null == a ? void 0 : a.streams) || void 0 === i ? void 0 : i.find((e => e.quality === t.quality))) || void 0 === s ? void 0 : s.url) && void 0 !== r ? r : null == a ? void 0 : a.streams[0].url;
                    return o ? (this.emitAvailableQualities(a),
                        this.subjects.manifest.next(e),
                        o) : null
                }
                )), qe((e => this.onUrlResolved(e))))
            }
            onFailure(e) {
                this.manifestManager.clear(),
                    super.onFailure(e),
                    this.restartPlayer()
            }
            getMediaPlayer() {
                return this.config.mediaPlayerFactory
            }
            isFailureCritical(e) {
                return super.isFailureCritical(e) || $s.includes(e.type)
            }
            emitAvailableQualities(e) {
                const t = e.streams.map((e => e.quality));
                this.onStats({
                    availableQualities: t
                })
            }
        }
        function Ks(e, t) {
            const i = Object.assign(Object.assign({}, e), {
                manifestManager: new _i(Li, Fi()),
                mediaPlayerFactory: Ys
            });
            return new Zs(i, t)
        }
        const Js = (e, t, i = 25e3) => s => (r, n) => {
            const a = new ke
                , o = Object.assign(Object.assign({}, r), {
                    onPlaybackEvent: e => {
                        e.eventType === Y.PLAYING && a.next(!1),
                            e.eventType === Y.WAITING && a.next(!0),
                            r.onPlaybackEvent(e)
                    }
                });
            return a.pipe(cs((e => {
                return e ? Ue(e).pipe((t = i,
                    e => Ne(((i, s) => {
                        const r = new Map;
                        let n = 0
                            , a = !1;
                        e.subscribe((e => {
                            if (a)
                                return;
                            const i = window.setTimeout((t => {
                                r.delete(t),
                                    s.onNext(e),
                                    a && 0 === r.size && s.onComplete()
                            }
                            ), t, n);
                            r.set(n, i),
                                n++
                        }
                        ), s.onError, (() => {
                            r.size > 0 ? a = !0 : s.onComplete()
                        }
                        )).closeBy(i),
                            Re((() => r.forEach((e => clearTimeout(e))))).closeBy(i)
                    }
                    )))) : Ue(e);
                var t
            }
            )), je((e => e))).subscribe((() => t(new be("NETWORK_ERROR", "High buffering time"))), (e => r.onFailure(ve(e, se)))).closeBy(e),
                s(o, n)
        }
            , er = new Map([[j.MANUAL, q.ManualChange], [j.INTERNAL, q.InternalOverride]])
            , tr = new Map([[Y.UPGRADE, q.SufficientBandwidth], [Y.DOWNGRADE, q.InsufficientBandwidth]])
            , ir = (e, t = new Be([])) => i => (s, r) => {
                const n = function () {
                    let e = !1;
                    return (t, i) => {
                        if (i.length <= 1)
                            return i[0] !== j.AUTO ? q.ManualChange : tr.get(t);
                        const [, s] = i;
                        return s !== j.AUTO ? (e = !1,
                            er.get(s)) : s !== j.AUTO || e ? s === j.AUTO && e ? tr.get(t) : q.UnknownReason : (e = !0,
                                q.SwitchToAuto)
                    }
                }()
                    , a = new Fe(1)
                    , o = new Fe(1)
                    , l = Object.assign(Object.assign({}, s), {
                        onStats: e => {
                            e.currentQuality && a.next(e.currentQuality),
                                e.qualityMode && o.next(e.qualityMode),
                                s.onStats(e)
                        }
                    });
                return o.pipe(d(), Xe(2, 1), Ve(a)).subscribe((([[e, t], i]) => {
                    const r = e === j.INTERNAL || t === j.INTERNAL ? q.InternalOverride : q.ManualChange;
                    s.onPlaybackEvent({
                        eventType: Y.QUALITY_MODE_CHANGED,
                        eventReason: r,
                        data: {
                            qualityModeChanged: {
                                prev: e,
                                next: t,
                                quality: i
                            }
                        }
                    })
                }
                )).closeBy(e),
                    a.pipe(d(), Xe(2, 1), Ve(o.pipe(d(), Xe(2, 1, !0)), t), ze((([[e, t], i, s]) => {
                        const r = function (e, t) {
                            return D[t] > D[e]
                        }(e, t) ? Y.UPGRADE : Y.DOWNGRADE
                            , a = n(r, i)
                            , o = {
                                eventType: r,
                                eventReason: null != a ? a : q.UnknownReason,
                                data: {
                                    qualityChanged: {
                                        prev: e,
                                        next: t
                                    }
                                }
                            };
                        if (i[i.length - 1] === j.AUTO) {
                            const i = s.find((i => i.from === e && i.to === t));
                            if (i)
                                return Object.assign(Object.assign({}, o), {
                                    eventReason: i.reason
                                })
                        }
                        return o
                    }
                    ))).subscribe(s.onPlaybackEvent).closeBy(e),
                    i(l, r)
            }
            ;
        function sr(e) {
            return new u((t => {
                t.onNext();
                const i = setInterval((() => t.onNext()), e);
                return Re((() => clearInterval(i)))
            }
            ))
        }
        const rr = {
            setItem: (e, t) => {
                try {
                    localStorage.setItem(e, t)
                } catch (i) { }
            }
            ,
            getItem: e => {
                try {
                    return localStorage.getItem(e)
                } catch (t) {
                    return null
                }
            }
            ,
            removeItem: e => {
                try {
                    localStorage.removeItem(e)
                } catch (t) { }
            }
        };
        var nr;
        !function (e) {
            e.Bandwidth = "evo.video.bandwidth",
                e.Session = "evo.video.sessionId"
        }(nr || (nr = {}));
        const ar = (e, t = 6e4, i = rr) => s => (r, n) => {
            const a = new ke
                , o = Object.assign(Object.assign({}, r), {
                    onStats: e => {
                        a.next(e),
                            r.onStats(e)
                    }
                });
            Le([n.manifest.pipe(qi((e => e))), n.streamId], (e => e)).pipe(qi((e => function (e, t) {
                var i;
                return null === (i = e.mediaManifests.find((e => e.id === t))) || void 0 === i ? void 0 : i.streams.sort(((e, t) => e.bitrate - t.bitrate)).map((e => [e.bitrate, e.quality]))
            }(...e))), Qe(1), Ve(n.qualityMode), qi((([e, t]) => t !== j.MANUAL ? e : null)), qi((e => function (e, t, i) {
                if (e.getItem(nr.Session) !== t)
                    return null;
                const s = e.getItem(nr.Bandwidth);
                if (!s)
                    return null;
                const r = parseFloat(s);
                if (!r)
                    return null;
                const n = i.filter((([e]) => r > e)).pop();
                return n ? n[1] : null
            }(i, r.settings.session.gameSessionId, e)))).subscribe((e => n.quality.next(e))).closeBy(e);
            const l = a.pipe(qi((e => e.qualityMode)))
                , c = a.pipe(qi((e => e.bandwidth)));
            return Ui(sr(t).pipe(ze((() => { }
            ))), n.quality.pipe(ze((() => { }
            )))).pipe(Ve(l, c), je((([, e]) => e === j.AUTO))).subscribe((([, , e]) => {
                i.setItem(nr.Session, r.settings.session.gameSessionId),
                    i.setItem(nr.Bandwidth, e.toString())
            }
            )).closeBy(e),
                s(o, n)
        }
            , or = (e, t, i) => {
                i.pipe(qi((e => e.qualityMode)), Xe(2, 1), Ve(t), qi((([[, e], t]) => e === j.AUTO ? t : null))).subscribe((e => t.next(e))).closeBy(e)
            }
            ;
        function lr(e, t, i, s, r, n) {
            return Ne(((a, o) => {
                let l = 0;
                s.subscribe((e => {
                    e || (l = 0)
                }
                ), o.onError, o.onComplete).closeBy(a),
                    e.pipe(Ve(s), qi((([e, t]) => t ? e : null))).pipe(qe((() => {
                        l = Math.round(l * r * 100) / 100
                    }
                    )), je((e => (t(e) && (l += 1),
                        l >= n))), ze((e => i(e, l)))).subscribe(o.onNext, o.onError, o.onComplete).closeBy(a)
            }
            ))
        }
        function cr(e, t, i, s = .95, r = 4) {
            return lr(e, (e => e < t), (() => ({
                timestamp: performance.now(),
                reason: "BUFFER RULE",
                direction: "down"
            })), i, s, r)
        }
        function ur(e, t, i, s = .95, r = 10) {
            return lr(e.pipe(Ve(t)), (([e, t]) => e < t), (() => ({
                timestamp: performance.now(),
                reason: "BITRATE RULE",
                direction: "down"
            })), i, s, r)
        }
        function dr(e, t, i, s = .95, r = 5) {
            return lr(e.pipe(Ve(t)), (([e, t]) => e > t), (() => ({
                timestamp: performance.now(),
                reason: "THROUGHPUT RULE",
                direction: "up"
            })), i, s, r)
        }
        function Ar(e, t, i) {
            const s = t.pipe(qi((e => e.bufferLength)), d())
                , r = t.pipe(qi((e => e.bandwidth)), d())
                , n = t.pipe(qi((e => e.playbackBitrate)), d())
                , a = Le([t.pipe(qi((e => e.currentQuality))), i], (e => e)).pipe(ze((([e, t]) => {
                    const i = t.findIndex((([, t]) => t === e));
                    if (i + 1 >= t.length)
                        return Number.MAX_VALUE;
                    const [s] = t[i + 1];
                    return 1.15 * s
                }
                )));
            return Ui(cr(s, 400, e), ur(r, n, e), dr(r, a, e))
        }
        const hr = (e, t = Ar, i = [or], s = new Be([])) => r => (n, a) => {
            const o = new ke
                , l = Object.assign(Object.assign({}, n), {
                    onStats: e => {
                        o.next(e),
                            n.onStats(e)
                    }
                })
                , c = new ke;
            c.subscribe((e => a.quality.next(e))).closeBy(e);
            const u = o.pipe(qi((e => e.currentQuality)), De((() => new Fe(1))))
                , d = Le([Ui(c, a.quality), u], (([e, t]) => e !== t)).pipe(De((() => new Fe(1))))
                , A = Le([a.qualityMode.pipe(ze((e => e === j.AUTO))), d], (([e, t]) => e && !t)).pipe(De((() => new Fe(1))))
                , h = Le([a.manifest.pipe(qi((e => e))), a.streamId], (e => e)).pipe(qi((e => function (e, t) {
                    var i;
                    return (null !== (i = e.mediaManifests.find((e => e.id === t))) && void 0 !== i ? i : e.mediaManifests[0]).streams.sort(((e, t) => e.bitrate - t.bitrate)).map((e => [e.bitrate, e.quality]))
                }(...e))), De((() => new Fe(1))));
            t(A, o, h).pipe(Ve(h, u), qi((([e, t, i]) => {
                const s = t.findIndex((([, e]) => e === i)) + ("up" === e.direction ? 1 : -1);
                if (s < 0 || s >= t.length)
                    return null;
                const [, r] = t[s];
                return Object.assign(Object.assign({}, e), {
                    from: i,
                    to: r
                })
            }
            ))).pipe(Ve(s.pipe((50,
                3e4,
                e => e.pipe(Gi(((e, t) => {
                    const i = performance.now();
                    return e.concat(t).filter((e => i - e.timestamp < 3e4)).slice(-50)
                }
                ), []))))), qi((([e, t]) => {
                    if ("down" === e.direction)
                        return e;
                    const i = t.filter((e => "down" === e.direction))
                        , s = Di(i);
                    return s ? e.timestamp - s.timestamp > function (e, t = 4, i = 6) {
                        return 1e3 * Math.pow(2, Math.min(e + t, i))
                    }(i.length) ? e : null : e
                }
                )), qe((e => s.next([e])))).subscribe((e => c.next(e.to))).closeBy(e);
            for (const t of i)
                t(e, c, o, h);
            return r(l, a)
        }
            ;
        function pr(e, t) {
            return t.pipe(Ve(e), je((([, e]) => e)), ze((() => ({
                reason: "RESTART RULE",
                direction: "down",
                timestamp: performance.now()
            }))))
        }
        const fr = e => t => (i, s) => {
            const r = new Fe(1)
                , n = s.qualityMode.pipe(Xe(2, 1), De());
            return n.pipe(je((([, e]) => e === j.INTERNAL)), Ve(s.quality, ((e, t) => t)), qe((e => r.next(e))), qi((e => D[e] > D.MEDIUM ? L.MEDIUM : e))).subscribe((e => s.quality.next(e))).closeBy(e),
                n.pipe(je((([e, t]) => e === j.INTERNAL && t === j.MANUAL)), Ve(r, ((e, t) => t))).subscribe((e => s.quality.next(e))).closeBy(e),
                t(i, s)
        }
            ;
        var mr = i(7214);
        class br {
            constructor(e, t, i, s = new Be({
                state: "IDLE"
            }), r = new ke) {
                this.lifeCycleScope = e,
                    this.config = t,
                    this.fmp4State = s,
                    this.transition = r,
                    this.videoTag = $e({
                        id: "fmp4-video",
                        style: Ze
                    }),
                    this.handleTransportWarnings = e => {
                        this.config.onPlaybackEvent({
                            eventType: Y.WARNING,
                            eventReason: e.message
                        })
                    }
                    ,
                    this.getPlayerContainer = () => this.videoTag;
                const n = Le([i.manifest, i.streamId, i.quality], (e => e)).pipe(qi((([{ mediaManifests: e }, t, i]) => {
                    var s, r;
                    const n = (null !== (s = e.find((e => e.id === t))) && void 0 !== s ? s : e[0]).streams;
                    return null !== (r = n.find((e => e.quality === i))) && void 0 !== r ? r : n[n.length - 1]
                }
                )), De((() => new Fe(1))));
                this.handleStateTransitions(i),
                    this.handleManifestChange(n, i),
                    this.handlePlayChange(i.play),
                    this.handleStreamChange(n),
                    this.handlePlaybackRateChange(i.playbackRate),
                    this.handleMuted(i),
                    this.handleVolumeChange(i.volume)
            }
            destroy() {
                this.transition.next({
                    action: "DESTROY"
                }),
                    this.lifeCycleScope.close()
            }
            handleStateTransitions(e) {
                this.transition.pipe(ze((t => {
                    switch (t.action) {
                        case "INIT":
                            return this.processInit(e, t.config);
                        case "PLAY":
                            return this.processPlay(e);
                        case "DESTROY":
                            return this.processDestroy(t.error);
                        default:
                            throw new Error("Invalid action")
                    }
                }
                )), Ge((e => e()))).subscribe((() => { }
                ), (e => {
                    const t = new be("NotAllowedError" === e.name ? ee.PermissionError : ee.MediaError, e.message);
                    this.transition.next({
                        action: "DESTROY",
                        error: t
                    })
                }
                )).closeBy(this.lifeCycleScope)
            }
            processInit(e, t) {
                return () => this.fmp4State.pipe(Qe(1), ze((i => {
                    if ("IDLE" !== i.state)
                        return;
                    this.fmp4State.next({
                        state: "LOADING"
                    });
                    const s = new _e
                        , r = (0,
                            mr.createFMP4Player)(s, t);
                    this.wireFailures(s, r),
                        this.wireStats(s, r, e),
                        r.state.subscribe((({ state: e }) => {
                            const t = "PLAYING" === e ? Y.PLAYING : "BUFFERING" === e ? Y.WAITING : null;
                            t && this.config.onPlaybackEvent({
                                eventType: t,
                                eventReason: t
                            })
                        }
                        )).closeBy(s),
                        Re((() => s.close())).closeBy(this.lifeCycleScope),
                        this.fmp4State.next({
                            state: "READY",
                            fmp4: r,
                            scope: s
                        })
                }
                )))
            }
            processPlay(e) {
                return () => this.fmp4State.pipe(Qe(1), Ge((t => "READY" !== t.state ? Ue(void 0) : e.play.pipe(je((e => e)), Qe(1), Ge((() => t.fmp4.play())), qe((() => this.fmp4State.next(Object.assign(Object.assign({}, t), {
                    state: "PLAYING"
                })))), ze((() => { }
                ))))))
            }
            processDestroy(e) {
                return () => this.fmp4State.pipe(Qe(1), ze((t => {
                    "READY" !== t.state && "PLAYING" !== t.state || (this.fmp4State.next({
                        state: "STOPPING",
                        error: e
                    }),
                        t.scope.close(),
                        this.fmp4State.next({
                            state: "IDLE"
                        }))
                }
                )))
            }
            handleManifestChange(e, t) {
                t.manifest.pipe(Ve(e, t.muted, t.volume), ze((([, e, t, i]) => ({
                    action: "INIT",
                    config: {
                        transport: (e, t) => (0,
                            As.createTransport)(e, t, {
                                implementation: As.createWebSocketTransport,
                                plugins: [(0,
                                    As.transportDescrambler)(this.handleTransportWarnings)]
                            }),
                        audio: (0,
                            mr.createAudioPlayer)(this.videoTag, i, t || 0 === i),
                        renderer: (0,
                            mr.mseRenderer)(this.videoTag, "aac" === this.config.settings.stream.audioCodec ? 'video/mp4; codecs="avc1.640028, mp4a.40.2"' : 'video/mp4; codecs="avc1.640028, opus'),
                        stream: e,
                        initBufferLength: this.config.settings.buffer.init
                    }
                })))).pipe(Ve(this.fmp4State, t.play), ze((([e, t, i]) => {
                    const s = [];
                    return "READY" !== t.state && "PLAYING" !== t.state || s.push({
                        action: "DESTROY"
                    }),
                        s.push(e),
                        i && s.push({
                            action: "PLAY"
                        }),
                        s
                }
                )), cs((e => ns(e)))).subscribe((e => this.transition.next(e))).closeBy(this.lifeCycleScope)
            }
            handlePlayChange(e) {
                e.pipe(ze((e => e ? {
                    action: "PLAY"
                } : {
                    action: "DESTROY"
                }))).subscribe((e => this.transition.next(e))).closeBy(this.lifeCycleScope)
            }
            handleStreamChange(e) {
                e.pipe(vr(this.fmp4State)).subscribe((([e, t]) => t.switchStream(e.streamName))).closeBy(this.lifeCycleScope)
            }
            handlePlaybackRateChange(e) {
                e.pipe(vr(this.fmp4State)).subscribe((([e, t]) => t.setPlaybackRate(e))).closeBy(this.lifeCycleScope)
            }
            handleMuted(e) {
                Le([e.muted, e.volume], (([e, t]) => e || 0 === t)).pipe(vr(this.fmp4State)).subscribe((([e, t]) => t.mute(e))).closeBy(this.lifeCycleScope)
            }
            handleVolumeChange(e) {
                e.pipe(vr(this.fmp4State)).subscribe((([e, t]) => t.setVolume(e))).closeBy(this.lifeCycleScope)
            }
            wireFailures(e, t) {
                t.state.pipe(qi((e => "FAILED" === e.state ? e.error : null)), ze((e => ({
                    action: "DESTROY",
                    error: ve(e, e instanceof mr.FMP4Error || e instanceof As.TransportError ? function (e) {
                        switch (e) {
                            case "MEDIA_ERROR":
                                return "MEDIA_ERROR";
                            case "STREAM_SHUTDOWN":
                                return ee.StreamShutdown;
                            case "NETWORK_ERROR":
                                return ee.NetworkError;
                            case "STREAM_SECURITY_ERROR":
                                return J.StreamSecurityError;
                            default:
                                return se
                        }
                    }(e.type) : se)
                })))).subscribe((e => this.transition.next(e))).closeBy(e)
            }
            wireStats(e, t, i) {
                t.stats.latency.subscribe((e => this.config.onStats({
                    latency: e
                }))).closeBy(e),
                    t.stats.wallclock.subscribe((e => this.config.onStats({
                        wallclock: e
                    }))).closeBy(e),
                    t.stats.bufferLength.subscribe((e => this.config.onStats({
                        bufferLength: e
                    }))).closeBy(e),
                    t.stats.bitrate.subscribe((e => this.config.onStats({
                        playbackBitrate: e
                    }))).closeBy(e),
                    t.stats.droppedFrames.subscribe((e => this.config.onStats({
                        droppedFrames: e
                    }))).closeBy(e),
                    t.stats.fps.subscribe((e => this.config.onStats({
                        fps: e
                    }))).closeBy(e),
                    t.stats.bandwidth.subscribe((e => this.config.onStats({
                        bandwidth: e
                    }))).closeBy(e);
                const s = i.manifest.pipe(qi((e => e))).pipe(ze((e => Ri(e.mediaManifests, (e => e.streams)))));
                t.stream.pipe(Ve(s), qi((([e, t]) => t.find((t => t.streamName === e)))), Ve(i.streamId)).subscribe((([e, t]) => this.config.onStats({
                    currentQuality: e.quality,
                    streamName: e.streamName,
                    streamHost: new URL(e.url).host,
                    streamId: t
                }))).closeBy(e),
                    i.qualityMode.subscribe((e => this.config.onStats({
                        qualityMode: e
                    }))).closeBy(e)
            }
        }
        function vr(e) {
            return t => t.pipe(Ge((t => e.pipe(qi((e => "READY" === e.state || "PLAYING" === e.state ? e.fmp4 : void 0)), Qe(1), ze((e => [t, e]))))))
        }
        function yr(e, t) {
            const i = new _e
                , s = new Be({
                    state: "IDLE"
                })
                , r = new ke
                , n = s.pipe(ze((e => "PLAYING" === e.state)))
                , a = s.pipe(je((e => {
                    var t;
                    return "STOPPING" === e.state && (null === (t = e.error) || void 0 === t ? void 0 : t.type) === ee.MaxLatencyReached
                }
                )), ze((() => { }
                )))
                , o = new Be([])
                , l = [Yi(i, n, e.settings.latency, (e => r.next({
                    action: "DESTROY",
                    error: e
                }))), Js(i, (e => r.next({
                    action: "DESTROY",
                    error: e
                }))), ir(i, o), Zi(i, s, V.Fmp4), $i(i, e.settings.buffer), ar(i, 1e4), hr(i, ((t, i, s) => {
                    const r = []
                        , n = i.pipe(qi((e => e.bandwidth)), d())
                        , o = i.pipe(qi((e => e.bufferLength)), d());
                    if (e.settings.adaptive.bitrateRule.enable) {
                        const s = i.pipe(qi((e => e.playbackBitrate)), d());
                        r.push(ur(n, s, t, e.settings.adaptive.bitrateRule.fadeCoefficient, e.settings.adaptive.bitrateRule.switchCoefficient))
                    }
                    const l = Le([i.pipe(qi((e => e.currentQuality))), s], (e => e)).pipe(ze((([e, t]) => {
                        const i = t.findIndex((([, t]) => t === e));
                        if (i + 1 >= t.length)
                            return Number.MAX_VALUE;
                        const [s] = t[i + 1];
                        return 1.15 * s
                    }
                    )));
                    return Ui(...r, cr(o, 400, t), pr(t, a), dr(n, l, t))
                }
                ), [or], o), fr(i)].reduce(((e, t) => t(e)), ((e, t) => new br(i, e, t, s, r)))
                , c = (() => {
                    const e = new Fe(1);
                    return t.quality.subscribe((t => e.next(t))).closeBy(i),
                        e
                }
                )();
            return l(e, Object.assign(Object.assign({}, t), {
                quality: c
            }))
        }
        function gr(e, t) {
            const i = Object.assign(Object.assign({}, e), {
                manifestManager: new _i(Li, Fi()),
                mediaPlayerFactory: yr
            });
            return new Zs(i, t)
        }
        function wr(e, t, i) {
            if (-1 === e.indexOf("#EXTM3U"))
                throw new Error(`Supplied data is not an HLS manifest: ${e}`);
            return -1 !== e.indexOf("#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID") ? function (e, t) {
                const i = [];
                let s, r = 0;
                const n = t(e)
                    , a = e.split("\n");
                for (; r < a.length;) {
                    const e = a[r];
                    if (-1 === e.indexOf("EXT-X-MEDIA:TYPE=VIDEO")) {
                        r += 1;
                        continue
                    }
                    const t = Number(Ir(e, "NAME"));
                    s && (null == s ? void 0 : s.id) === t || (s = {
                        id: t,
                        url: n,
                        streams: []
                    },
                        i.push(s));
                    const o = "YES" === Ir(e, "DEFAULT")
                        , l = o ? Sr(a.slice(r, r + 3)) : Er(e);
                    s.streams.push(l),
                        r += o ? 3 : 1
                }
                return {
                    mediaManifests: i
                }
            }(e, i) : function (e, t, i) {
                const s = e.split("\n");
                let r = {
                    id: 0,
                    url: i(e),
                    streams: []
                }
                    , n = 0;
                for (; n < s.length;) {
                    if (-1 === s[n].indexOf("EXT-X-STREAM-INF")) {
                        n += 1;
                        continue
                    }
                    const e = Pr(s.slice(n, n + 2));
                    r.streams.push(e),
                        n += 2
                }
                return 0 === r.streams.length && r.streams.push({
                    url: t,
                    streamName: "",
                    quality: L.MEDIUM,
                    bitrate: 0
                }),
                {
                    mediaManifests: [r]
                }
            }(e, t, i)
        }
        function Sr(e) {
            const t = Ir(e[0], "GROUP-ID")
                , i = e[2]
                , s = Tr(i, t);
            return {
                quality: t,
                bitrate: Number(Ir(e[1], "BANDWIDTH")),
                url: i,
                streamName: s
            }
        }
        function Er(e) {
            var t;
            const i = Ir(e, "GROUP-ID")
                , s = null !== (t = Ir(e, "URI")) && void 0 !== t ? t : ""
                , r = Tr(s, i)
                , n = function (e) {
                    const t = e.split("/");
                    if (0 === t.length)
                        return 0;
                    const i = t[t.length - 1]
                        , s = i.indexOf("_b") + 2
                        , r = i.indexOf("_", s);
                    return Number(i.slice(s, r))
                }(s);
            return {
                quality: i,
                bitrate: n,
                url: s,
                streamName: r
            }
        }
        function Pr(e) {
            var t;
            const i = null !== (t = Ir(e[0], "NAME")) && void 0 !== t ? t : L.MEDIUM
                , s = e[1]
                , r = Tr(s, i);
            return {
                quality: i,
                bitrate: Number(Ir(e[0], "BANDWIDTH")),
                url: s,
                streamName: r
            }
        }
        function Tr(e, t) {
            var i, s, r;
            return null !== (r = null === (s = null === (i = e.split("/").find((e => e.startsWith("amlst")))) || void 0 === i ? void 0 : i.replace("amlst:", "")) || void 0 === s ? void 0 : s.replace("_auto", `_${U[t]}`)) && void 0 !== r ? r : ""
        }
        function Ir(e, t) {
            const i = e.indexOf(t);
            if (-1 === i)
                return;
            const s = i + t.length + 1
                , r = e.indexOf(",", s)
                , n = -1 !== r ? r : e.length
                , a = e.slice(s, n);
            return '"' === a[0] ? a.slice(1, a.length - 1) : a
        }
        const Mr = "data:application/vnd.apple.mpegurl;base64,";
        function Or(e) {
            return `${Mr}${btoa(e)}`
        }
        class Cr {
            constructor() {
                this.patterns = {}
            }
            addPattern(e, t) {
                return "string" == typeof e ? this.patterns[e.toLowerCase()] = t : e.forEach((e => this.patterns[e.toLowerCase()] = t)),
                    this
            }
            checkPatterns(e) {
                const t = e.join(",").toLowerCase();
                var i;
                (i = this.patterns,
                    Object.keys(i).map((e => [e, i[e]]))).forEach((([e, i]) => {
                        t.includes(e) && i()
                    }
                    ))
            }
        }
        class xr {
            constructor(e, t) {
                this.mediaTag = e,
                    this.dispatchWallclock = t,
                    this.lastValidWallclock = -1,
                    this.enableMetadataTrack = () => {
                        let e = this.cacheTextTrack;
                        const t = this.mediaTag.textTracks;
                        let i;
                        if (t && t.length) {
                            for (const e of t)
                                "metadata" === e.kind && (i = e),
                                    e.mode = "disabled";
                            e && (e.removeEventListener("cuechange", this.onTextTrackCueChange),
                                e = void 0),
                                i && "function" == typeof i.addEventListener && "function" == typeof i.removeEventListener && (e = i,
                                    e.mode = "showing",
                                    e.addEventListener("cuechange", this.onTextTrackCueChange))
                        }
                        return e
                    }
                    ,
                    this.onTextTrackCueChange = e => {
                        const t = e.currentTarget.activeCues;
                        if (!t || !t.length)
                            return;
                        if (this.mediaTag.currentTime < 1)
                            return;
                        const i = t[t.length - 1]
                            , s = i.value ? i.value.data : void 0
                            , r = s ? s.substr(0, s.length - 3) : i.text
                            , n = this.mediaTag.currentTime - i.startTime
                            , a = parseInt(r, 10) + Math.round(1e3 * n);
                        a <= this.lastValidWallclock || (this.lastValidWallclock = a,
                            this.dispatchWallclock(a))
                    }
            }
            enableWallclock(e) {
                if (!(this.mediaTag instanceof HTMLVideoElement))
                    return e;
                e = this.disableWallclock(e);
                const t = this.mediaTag.textTracks;
                return t ? (t.length && (this.cacheTextTrack = e,
                    e = this.enableMetadataTrack()),
                    "function" == typeof t.addEventListener && (this.cacheTextTrack = e,
                        t.addEventListener("addtrack", this.enableMetadataTrack)),
                    e) : e
            }
            disableWallclock(e) {
                if (this.mediaTag.textTracks && "function" == typeof this.mediaTag.textTracks.removeEventListener && this.mediaTag.textTracks.removeEventListener("addtrack", this.enableMetadataTrack),
                    !e)
                    return e;
                e.removeEventListener("cuechange", this.onTextTrackCueChange);
                const t = e.cues;
                if (t)
                    try {
                        for (let i = t.length; i > 0; i--)
                            null == e || e.removeCue(t[0])
                    } catch (i) { }
            }
        }
        function _r(e) {
            const t = e.match(/_t64(.+)_/);
            if (t && t[1]) {
                const [e] = atob(t[1]).split(".");
                return e
            }
        }
        function Rr(e) {
            const t = e.match(/amlst:(.+)\//);
            if (t && t[1])
                return t[1]
        }
        const kr = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "waiting"];
        var Br;
        !function (e) {
            e[e.InitSuspendEventPatterns = 0] = "InitSuspendEventPatterns",
                e[e.IdleMediaPlayer = 1] = "IdleMediaPlayer",
                e[e.LoadMediaPlayer = 2] = "LoadMediaPlayer",
                e[e.StopMediaPlayer = 3] = "StopMediaPlayer",
                e[e.ReloadMediaPlayer = 4] = "ReloadMediaPlayer",
                e[e.DestroyMediaPlayer = 5] = "DestroyMediaPlayer",
                e[e.StartMediaPlayback = 6] = "StartMediaPlayback",
                e[e.ProgressEvent = 7] = "ProgressEvent",
                e[e.SetMediaUrl = 8] = "SetMediaUrl",
                e[e.PushBufferLength = 9] = "PushBufferLength",
                e[e.AttachEmptiedListener = 10] = "AttachEmptiedListener",
                e[e.CheckVideoCurrentTime = 11] = "CheckVideoCurrentTime",
                e[e.FixIosMicroStutter = 12] = "FixIosMicroStutter",
                e[e.ResumeOnPause = 13] = "ResumeOnPause",
                e[e.ChromeVideoStalled = 14] = "ChromeVideoStalled",
                e[e.CheckVideoTimeDifference = 15] = "CheckVideoTimeDifference",
                e[e.FailPlayerWhenStalled = 16] = "FailPlayerWhenStalled",
                e[e.HandleNotSupportedError = 17] = "HandleNotSupportedError",
                e[e.CanPlayThroughEvent = 18] = "CanPlayThroughEvent",
                e[e.OnPlayerPlayingEvent = 19] = "OnPlayerPlayingEvent",
                e[e.ErrorEvent = 20] = "ErrorEvent",
                e[e.PauseEvent = 21] = "PauseEvent"
        }(Br || (Br = {}));
        class Nr {
            constructor(e, t, i, s, r) {
                this.lifeCycleScope = e,
                    this.config = t,
                    this.state = s,
                    this.failPlayerPipe = r,
                    this.patternEvents = [],
                    this.patternStackSize = 10,
                    this.patternAnalyzeOn = !0,
                    this.patternAnalyzer = new Cr,
                    this.lastVideoTime = 0,
                    this.hadPlayingEvent = !1,
                    this.hadWaitingEvent = !1,
                    this.isStopped = !0,
                    this.actionsPipe = new ke,
                    this.reloadMediaPlayer = ({ mediaTag: e }) => {
                        e.removeEventListener("pause", this.eventListener),
                            e.addEventListener("pause", this.resumeOnPause),
                            e.pause()
                    }
                    ,
                    this.subscribeAction = (e, t, i) => {
                        this.actionsPipe.pipe(je((e => e === t)), Ve(e.mediaTag), qi((([e, t]) => t)), Ve(e.url, e.play, ((e, t, i) => ({
                            mediaTag: e,
                            url: t,
                            play: i
                        })))).subscribe(i).closeBy(this.lifeCycleScope)
                    }
                    ,
                    this.progressEvent = ({ play: e }) => {
                        const { deviceSupport: t } = this.config;
                        e && t.IS_IOS && this.actionsPipe.next(Br.StartMediaPlayback)
                    }
                    ,
                    this.pushBufferLength = ({ mediaTag: e }) => {
                        const t = function (e) {
                            const { buffered: t } = e;
                            if (!t || !t.length)
                                return;
                            if (e.currentTime < 1)
                                return;
                            const i = t.end(t.length - 1) - e.currentTime;
                            return i > 0 ? i : 0
                        }(e);
                        void 0 !== t && this.config.onStats({
                            bufferLength: 1e3 * t
                        })
                    }
                    ,
                    this.resumeOnPause = () => {
                        this.actionsPipe.next(Br.ResumeOnPause)
                    }
                    ,
                    this.resumeOnPauseAction = ({ mediaTag: e }) => {
                        e.removeEventListener("pause", this.resumeOnPause),
                            e.addEventListener("pause", this.eventListener),
                            this.actionsPipe.next(Br.StartMediaPlayback)
                    }
                    ,
                    this.eventListener = ({ type: e }) => {
                        switch (this.config.onEvent({
                            eventType: e
                        }),
                        this.analyzeEvent(e),
                        e) {
                            case "playing":
                                this.hadPlayingEvent = !0,
                                    this.hadWaitingEvent = !1;
                                break;
                            case "durationchange":
                            case "timeupdate":
                                this.hadPlayingEvent && (this.onPlayerPlaying(),
                                    this.hadPlayingEvent = !1),
                                    this.isStopped && (this.isStopped = !1,
                                        this.config.onSuccess()),
                                    this.hadWaitingEvent && this.actionsPipe.next(Br.FixIosMicroStutter);
                                break;
                            case "canplaythrough":
                                "PLAYING" !== this.state.value.state && this.actionsPipe.next(Br.CanPlayThroughEvent);
                                break;
                            case "error":
                                this.actionsPipe.next(Br.ErrorEvent);
                                break;
                            case "waiting":
                                this.hadWaitingEvent = !0
                        }
                    }
                    ,
                    this.fixIosMicroStutter = ({ mediaTag: e }) => {
                        e.dispatchEvent(new Event("playing"))
                    }
                    ,
                    this.handleNotSupportedError = () => {
                        this.config.onFailure(new be(ie.NotSupported, "Not supported"))
                    }
                    ,
                    this.idleMediaPlayer = ({ url: e, play: t, mediaTag: i }) => {
                        this.detachEmptiedListener(i),
                            this.state.next({
                                state: "IDLE"
                            }),
                            t && e ? this.setMediaUrl(e, t) : i.pause()
                    }
                    ,
                    this.startMediaPlayback = ({ mediaTag: e }) => {
                        e.play().catch((e => {
                            const t = new be("NotAllowedError" === e.name ? ee.PermissionError : ee.MediaError, e.message);
                            this.failPlayer(t)
                        }
                        ))
                    }
                    ,
                    this.onMediaEmptied = () => {
                        this.actionsPipe.next(Br.IdleMediaPlayer)
                    }
                    ,
                    this.attachEmptiedListener = ({ mediaTag: e }) => {
                        e.addEventListener("emptied", this.onMediaEmptied),
                            this.emptiedTimeout = this.config.scheduler.schedule(this.onMediaEmptied, 500)
                    }
                    ,
                    this.stopMediaPlayer = ({ play: e }) => {
                        this.stopTimeUpdateValidation(),
                            this.state.next({
                                state: "STOPPING"
                            }),
                            this.setMediaUrl(void 0, e)
                    }
                    ,
                    this.checkVideoCurrentTime = ({ mediaTag: e }) => {
                        const t = Math.floor(e.currentTime || 0);
                        t > 0 && t === this.lastVideoTime ? this.failPlayer(new be(ee.NetworkError, "hls Time check failed")) : this.lastVideoTime = t
                    }
                    ,
                    this.errorEvent = ({ mediaTag: e, url: t }) => {
                        const { error: i, src: s } = e;
                        i && i.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED ? this.actionsPipe.next(Br.HandleNotSupportedError) : "" !== s && this.failPlayer(new be(ee.NetworkError, `hls Error loading remote source: ${t}`))
                    }
                    ,
                    this.getPlayerContainer = () => null,
                    this.initEventPatterns(),
                    this.analyzeEvent = this.analyzeEvent.bind(this),
                    this.subscribeToActions(i),
                    this.subscribeObservables(i),
                    r.subscribe((e => this.failPlayer(e))).closeBy(this.lifeCycleScope)
            }
            destroy() {
                this.actionsPipe.next(Br.DestroyMediaPlayer),
                    this.lifeCycleScope.close()
            }
            destroyMediaPlayer({ mediaTag: e }) {
                kr.forEach((t => {
                    e.removeEventListener(t, this.eventListener)
                }
                )),
                    e.removeEventListener("pause", this.resumeOnPause),
                    e.removeEventListener("emptied", this.onMediaEmptied),
                    this.actionsPipe.next(Br.StopMediaPlayer),
                    e.removeAttribute("src"),
                    e.load(),
                    this.config.scheduler.deschedule([this.emptiedTimeout, this.scheduledValidation, this.timeUpdateInterval])
            }
            initEventPatterns() { }
            analyzeEvent(e) {
                this.pushPatternEvent(e),
                    this.patternAnalyzeOn && this.patternAnalyzer.checkPatterns(this.patternEvents)
            }
            onPlayerPlaying() {
                ["LOADING", "IDLE"].includes(this.state.value.state) && (this.state.next({
                    state: "PLAYING"
                }),
                    this.actionsPipe.next(Br.OnPlayerPlayingEvent))
            }
            playerPlaying({ mediaTag: e }) {
                this.stopTimeoutValidation(),
                    this.startTimeUpdateValidation(e)
            }
            failPlayer(e) {
                this.actionsPipe.next(Br.StopMediaPlayer),
                    this.config.onFailure(e)
            }
            reload() {
                this.actionsPipe.next(Br.StopMediaPlayer)
            }
            getMediaElementProps() {
                return {
                    id: ""
                }
            }
            subscribeToActions(e) {
                this.subscribeAction(e, Br.IdleMediaPlayer, this.idleMediaPlayer),
                    this.subscribeAction(e, Br.LoadMediaPlayer, this.loadMediaPlayer.bind(this)),
                    this.subscribeAction(e, Br.StopMediaPlayer, this.stopMediaPlayer),
                    this.subscribeAction(e, Br.ReloadMediaPlayer, this.reloadMediaPlayer),
                    this.subscribeAction(e, Br.DestroyMediaPlayer, this.destroyMediaPlayer.bind(this)),
                    this.subscribeAction(e, Br.StartMediaPlayback, this.startMediaPlayback),
                    this.subscribeAction(e, Br.ProgressEvent, this.progressEvent),
                    this.subscribeAction(e, Br.PushBufferLength, this.pushBufferLength),
                    this.subscribeAction(e, Br.AttachEmptiedListener, this.attachEmptiedListener),
                    this.subscribeAction(e, Br.CheckVideoCurrentTime, this.checkVideoCurrentTime),
                    this.subscribeAction(e, Br.FixIosMicroStutter, this.fixIosMicroStutter),
                    this.subscribeAction(e, Br.ResumeOnPause, this.resumeOnPauseAction),
                    this.subscribeAction(e, Br.HandleNotSupportedError, this.handleNotSupportedError),
                    this.subscribeAction(e, Br.CanPlayThroughEvent, this.canPlayThroughEvent.bind(this)),
                    this.subscribeAction(e, Br.OnPlayerPlayingEvent, this.playerPlaying.bind(this)),
                    this.subscribeAction(e, Br.ErrorEvent, this.errorEvent)
            }
            loadMediaPlayer({ play: e, url: t, mediaTag: i }) {
                const s = this.state.value.state
                    , r = e && i.src === t && "IDLE" === s
                    , n = !i.src && "STOPPING" === s;
                return !(!r && !n || (i.load(),
                    r && (this.detachEmptiedListener(i),
                        this.state.next({
                            state: "LOADING"
                        }),
                        this.scheduledValidation || this.startTimeoutValidation(),
                        0)))
            }
            canPlayThroughEvent(e) {
                this.actionsPipe.next(Br.StartMediaPlayback)
            }
            subscribeObservables(e) {
                this.subscribeToMediaTag(e),
                    this.subscribeToUrl(e),
                    this.subscribeToPlay(e),
                    this.subscribeToVolume(e),
                    this.subscribeToMuted(e)
            }
            subscribeToPlay(e) {
                const { play: t, url: i, mediaTag: s } = e;
                Le([t, i, s], (e => e)).subscribe((([e, t, i]) => {
                    e && t ? (i.pause(),
                        i.src = t,
                        i.load(),
                        this.actionsPipe.next(Br.LoadMediaPlayer)) : e || (i.pause(),
                            i.removeAttribute("src"))
                }
                )).closeBy(this.lifeCycleScope),
                    t.pipe(Xe(2, 1), je((([e, t]) => !t && e))).subscribe((() => {
                        this.actionsPipe.next(Br.StopMediaPlayer),
                            this.actionsPipe.next(Br.LoadMediaPlayer)
                    }
                    )).closeBy(this.lifeCycleScope)
            }
            subscribeToMediaTag(e) {
                const { mediaTag: t } = e;
                t.pipe(d(((e, t) => e.src !== t.src))).subscribe((e => {
                    this.actionsPipe.next(Br.LoadMediaPlayer)
                }
                )).closeBy(this.lifeCycleScope),
                    t.pipe(Qe(1)).subscribe((e => {
                        kr.forEach((t => {
                            e.addEventListener(t, this.eventListener)
                        }
                        ))
                    }
                    )).closeBy(this.lifeCycleScope)
            }
            subscribeToUrl(e) {
                const { url: t, play: i } = e
                    , s = t.pipe(d());
                s.pipe(Ve(this.state), je((([e, { state: t }]) => "PLAYING" === t || "LOADING" === t))).subscribe((() => {
                    this.actionsPipe.next(Br.StopMediaPlayer)
                }
                )).closeBy(this.lifeCycleScope),
                    s.pipe(Ve(this.state), qi((([e, { state: t }]) => "IDLE" === t ? e : null)), Ve(i, ((e, t) => [e, t]))).subscribe((e => {
                        this.setMediaUrl(...e)
                    }
                    )).closeBy(this.lifeCycleScope)
            }
            subscribeToVolume(e) {
                e.volume.pipe(Ve(e.mediaTag)).subscribe((([e, t]) => {
                    t.volume = e
                }
                )).closeBy(this.lifeCycleScope)
            }
            subscribeToMuted(e) {
                Le([e.volume, e.muted], (e => e)).pipe(ze((([e, t]) => t || 0 === e)), Ve(e.mediaTag)).subscribe((([e, t]) => t.muted = e)).closeBy(this.lifeCycleScope)
            }
            pushPatternEvent(e) {
                this.patternEvents.length >= this.patternStackSize && this.patternEvents.shift(),
                    this.patternEvents.push(e)
            }
            setMediaUrl(e, t) {
                void 0 === e && void 0 === this.emptiedTimeout && this.actionsPipe.next(Br.AttachEmptiedListener),
                    this.isStopped = !0,
                    this.config.onStop()
            }
            detachEmptiedListener(e) {
                e.removeEventListener("emptied", this.onMediaEmptied),
                    this.config.scheduler.deschedule(this.emptiedTimeout),
                    this.emptiedTimeout = void 0
            }
            startTimeoutValidation() {
                this.scheduledValidation = this.config.scheduler.schedule((() => {
                    this.failPlayer(new be(ee.ValidationTimeout, "hls player failed on validation timeout"))
                }
                ), this.config.settings.validationTimeout)
            }
            stopTimeoutValidation() {
                this.config.scheduler.deschedule(this.scheduledValidation),
                    this.scheduledValidation = void 0
            }
            startTimeUpdateValidation(e) {
                this.timeUpdateInterval || (this.lastVideoTime = Math.floor(e.currentTime || 0),
                    this.timeUpdateInterval = this.config.scheduler.schedule((() => this.actionsPipe.next(Br.CheckVideoCurrentTime)), 4e3, {
                        repeat: !0
                    }))
            }
            stopTimeUpdateValidation() {
                this.config.scheduler.deschedule(this.timeUpdateInterval),
                    this.timeUpdateInterval = void 0,
                    this.lastVideoTime = 0
            }
        }
        class Lr extends Nr {
            constructor(e, t, i, s, r) {
                super(e, t, i, s, r),
                    this.lifeCycleScope = e,
                    this.config = t,
                    this.state = s,
                    this.failPlayerPipe = r,
                    this.pxIteration = 0,
                    this.firstSavedVideoTimestamp = -1,
                    this.referenceVideoTimestamp = -1,
                    this.referenceSystemTimestamp = -1,
                    this.timeDiffCheckOn = !1,
                    this.suspendPatternAnalyzer = new Cr,
                    this.durationChangePatternAnalyzer = new Cr,
                    this.canPlayPatternAnalyzer = new Cr,
                    this.durationChangePatternAnalyzerOn = !1,
                    this.stallingStartTimestamp = 0,
                    this.serverClientDeltaTime = void 0,
                    this.firstLatency = void 0,
                    this.lastWallclock = 0,
                    this.videoTrackList = new Fe(1),
                    this.startMeasuringLatency = () => {
                        this.latencySchedulerId || (this.latencySchedulerId = this.config.scheduler.schedule(this.measureLatency, 300, {
                            repeat: !0
                        }))
                    }
                    ,
                    this.stopMeasuringLatency = () => {
                        this.config.scheduler.deschedule(this.latencySchedulerId),
                            this.latencySchedulerId = void 0,
                            this.lastWallclock = 0
                    }
                    ,
                    this.measureLatency = () => {
                        if (!this.serverClientDeltaTime || !this.firstLatency || !this.lastWallclock)
                            return;
                        const e = performance.now() - this.lastWallclock - this.serverClientDeltaTime;
                        this.config.onStats({
                            latency: Math.round(this.firstLatency + e)
                        })
                    }
                    ,
                    this.pauseEvent = ({ play: e }) => {
                        e && "PLAYING" === this.state.value.state && this.actionsPipe.next(Br.StartMediaPlayback)
                    }
                    ,
                    this.failPlayerWhenStalled = ({ play: e }) => {
                        e && this.stallingStartTimestamp && this.stallingStartTimestamp < performance.now() - 1e4 && (this.config.scheduler.deschedule(this.stallingTimeout),
                            this.failPlayer(new be(ee.MediaStalledCritical, "Stalling detected")))
                    }
                    ,
                    this.checkVideoTimeDifference = ({ mediaTag: e }) => {
                        if ("PLAYING" !== this.state.value.state)
                            return;
                        if (e.currentTime < 1)
                            return;
                        const t = window.performance.now()
                            , i = e.currentTime;
                        if (-1 === this.firstSavedVideoTimestamp ? this.firstSavedVideoTimestamp = i : -1 === this.referenceVideoTimestamp && i - this.firstSavedVideoTimestamp > 1 && (this.referenceVideoTimestamp = i,
                            this.referenceSystemTimestamp = t),
                            -1 === this.referenceVideoTimestamp)
                            return;
                        const s = (t - this.referenceSystemTimestamp) / 1e3
                            , r = i - this.referenceVideoTimestamp;
                        Math.abs(s - r) > this.config.settings.maxVideoTimeDiff + .5 && this.reloadVideo()
                    }
                    ,
                    this.handleChromeVideoStalled = () => {
                        this.actionsPipe.next(Br.ChromeVideoStalled)
                    }
                    ,
                    this.handleChromeVideoStalledAction = ({ mediaTag: e }) => {
                        e.removeEventListener("stalled", this.handleChromeVideoStalled),
                            this.chromeStalledTimeout = this.config.scheduler.schedule((() => {
                                this.actionsPipe.next(Br.StartMediaPlayback),
                                    this.onPlayerPlaying()
                            }
                            ), 1e3)
                    }
                    ,
                    this.initSuspendEventPatterns = ({ mediaTag: e }) => {
                        this.suspendPatternAnalyzer.addPattern(["abort,emptied,loadstart,progress,suspend", "abort,emptied,ratechange,loadstart,progress,suspend", "abort,emptied,timeupdate,loadstart,suspend", "abort,emptied,loadstart,suspend"], (() => {
                            e.removeEventListener("suspend", this.analyseSuspendPatterns),
                                this.reload()
                        }
                        ))
                    }
                    ,
                    this.analyseSuspendPatterns = () => {
                        this.suspendPatternAnalyzer.checkPatterns(this.patternEvents)
                    }
                    ,
                    this.subscribeToVideoActions(i),
                    this.initCanPlayPatterns(),
                    this.isChrome68() && (this.durationChangePatternAnalyzerOn = !0,
                        this.initDurationChangeEventPatterns()),
                    i.mediaTag.pipe(qi((e => e)), Qe(1)).subscribe((() => this.actionsPipe.next(Br.InitSuspendEventPatterns))).closeBy(this.lifeCycleScope),
                    i.mediaTag.pipe(d(), ze((e => e.videoTracks)), cs((e => Ui(Wi(e, "addtrack"), Wi(e, "removetrack")).pipe(ze((() => e)))))).subscribe((e => this.videoTrackList.next(e))).closeBy(this.lifeCycleScope),
                    i.playbackRate.pipe(Ve(i.mediaTag)).subscribe((([e, t]) => t.playbackRate = e)).closeBy(this.lifeCycleScope)
            }
            destroyMediaPlayer(e) {
                e.mediaTag.removeEventListener("stalled", this.handleChromeVideoStalled),
                    e.mediaTag.removeEventListener("suspend", this.analyseSuspendPatterns),
                    this.disableWallclock(),
                    this.config.scheduler.deschedule([this.delayedReloadTimeout, this.chromeStalledTimeout, this.stallingTimeout, this.latencySchedulerId]),
                    super.destroyMediaPlayer(e)
            }
            reloadVideo() {
                this.timeDiffCheckOn = !1,
                    this.reload()
            }
            subscribeToVideoActions(e) {
                this.subscribeAction(e, Br.InitSuspendEventPatterns, this.initSuspendEventPatterns),
                    this.subscribeAction(e, Br.ChromeVideoStalled, this.handleChromeVideoStalledAction),
                    this.subscribeAction(e, Br.CheckVideoTimeDifference, this.checkVideoTimeDifference),
                    this.subscribeAction(e, Br.FailPlayerWhenStalled, this.failPlayerWhenStalled),
                    this.subscribeAction(e, Br.PauseEvent, this.pauseEvent),
                    this.subscribeAction(e, Br.StartMediaPlayback, this.startMeasuringLatency),
                    this.subscribeAction(e, Br.StopMediaPlayer, this.stopMeasuringLatency),
                    this.subscribeAction(e, Br.StopMediaPlayer, this.disableWallclock.bind(this)),
                    this.wireStats(this.lifeCycleScope, e)
            }
            dispatchWallclock(e) {
                this.lastWallclock = e,
                    this.config.onStats({
                        wallclock: e
                    })
            }
            initEventPatterns() {
                this.patternAnalyzer.addPattern("timeupdate,timeupdate", (() => {
                    this.patternAnalyzeOn = !1,
                        this.onPlayerPlaying()
                }
                )).addPattern(["durationchange,play,playing,stalled", "canplaythrough,play,playing,timeupdate,stalled", "durationchange,loadedmetadata,stalled"], (() => this.actionsPipe.next(Br.StartMediaPlayback))).addPattern(["canplaythrough,play,playing,stalled", "canplay,canplaythrough,play,playing,timeupdate,stalled"], (() => {
                    this.onPlayerPlaying()
                }
                )).addPattern(["progress,progress,timeupdate,progress,stalled", "playing,durationchange,timeupdate,pause,stalled", "playing,durationchange,pause,stalled", "play,playing,timeupdate,durationchange,timeupdate,stalled"], (() => this.onPlayerPlaying())).addPattern(["progress,progress"], (() => {
                    this.actionsPipe.next(Br.ProgressEvent)
                }
                )).addPattern(["pause,ended,stalled,play,playing", "timeupdate,pause,ended,stalled", "stalled,timeupdate,pause,ended"], (() => {
                    this.actionsPipe.next(Br.StartMediaPlayback),
                        this.onPlayerPlaying()
                }
                ))
            }
            playerPlaying(e) {
                super.playerPlaying(e),
                    this.wallclockManager = new xr(e.mediaTag, this.dispatchWallclock.bind(this)),
                    this.wallclockTextTrack = this.wallclockManager.enableWallclock(this.wallclockTextTrack),
                    this.stalledChromeRestartTimeout && this.config.scheduler.deschedule(this.stalledChromeRestartTimeout),
                    this.patternAnalyzeOn = !0,
                    this.isChrome68() && (this.durationChangePatternAnalyzerOn = !1),
                    e.mediaTag.addEventListener("suspend", this.analyseSuspendPatterns)
            }
            analyzeEvent(e) {
                switch (e) {
                    case "timeupdate":
                        this.timeDiffCheckOn && this.actionsPipe.next(Br.CheckVideoTimeDifference),
                            this.actionsPipe.next(Br.PushBufferLength),
                            this.stallingStartTimestamp = performance.now();
                        break;
                    case "pause":
                        this.actionsPipe.next(Br.PauseEvent);
                        break;
                    case "canplay":
                        this.canPlayPatternAnalyzer.checkPatterns(this.patternEvents)
                }
                super.analyzeEvent(e),
                    this.durationChangePatternAnalyzerOn && this.durationChangePatternAnalyzer.checkPatterns(this.patternEvents)
            }
            getMediaElementProps() {
                return {
                    id: "hls-native-video",
                    style: Ze
                }
            }
            loadMediaPlayer(e) {
                return super.loadMediaPlayer(e)
            }
            canPlayThroughEvent(e) {
                super.canPlayThroughEvent(e),
                    this.stallingStartTimestamp = performance.now(),
                    this.config.scheduler.deschedule(this.stallingTimeout),
                    this.stallingTimeout = this.config.scheduler.schedule((() => this.actionsPipe.next(Br.FailPlayerWhenStalled)), 1e3, {
                        repeat: !0
                    })
            }
            subscribeToMediaTag(e) {
                super.subscribeToMediaTag(e),
                    e.mediaTag.pipe(je((e => !(e instanceof HTMLVideoElement)))).subscribe((e => this.failUnsupportedMediaTag(e))).closeBy(this.lifeCycleScope)
            }
            subscribeToPlay(e) {
                super.subscribeToPlay(e);
                const { play: t, url: i } = e;
                t && (t.pipe(je((e => !e))).subscribe((() => {
                    this.config.scheduler.deschedule(this.stallingTimeout)
                }
                )).closeBy(this.lifeCycleScope),
                    t.pipe(Ve(i, ((e, t) => [e, t])), je((([e, t]) => this.isChrome68() && (e || !t)))).subscribe((() => {
                        this.durationChangePatternAnalyzerOn = !0
                    }
                    )).closeBy(this.lifeCycleScope))
            }
            subscribeObservables(e) {
                super.subscribeObservables(e),
                    this.subscribeToStreamId(e),
                    this.subscribeToFirstLatency(e),
                    this.subscribeToServerClientDeltaTime(e)
            }
            disableWallclock() {
                var e;
                this.wallclockTextTrack = null === (e = this.wallclockManager) || void 0 === e ? void 0 : e.disableWallclock(this.wallclockTextTrack)
            }
            subscribeToFirstLatency(e) {
                e.firstLatency.subscribe((e => this.firstLatency = e)).closeBy(this.lifeCycleScope)
            }
            subscribeToServerClientDeltaTime(e) {
                e.serverClientDeltaTime.subscribe((e => this.serverClientDeltaTime = e)).closeBy(this.lifeCycleScope)
            }
            subscribeToStreamId(e) {
                e.streamId.pipe(d(), Xe(2, 1), Ge((([e, t]) => this.videoTrackList.pipe(je((e => e.length > 0)), Qe(1), ze((i => [i, e, t])))))).subscribe((([e, t, i]) => {
                    const s = e.getTrackById(i.toString());
                    s && (s.selected = !0);
                    const r = e.getTrackById(t.toString());
                    r && (r.selected = !1)
                }
                )).closeBy(this.lifeCycleScope)
            }
            initDurationChangeEventPatterns() {
                this.durationChangePatternAnalyzer.addPattern(["emptied,timeupdate,loadstart,durationchange,loadedmetadata,durationchange", "timeupdate,timeupdate,timeupdate,pause,emptied,timeupdate,loadstart,durationchange,loadedmetadata,durationchange"], (() => {
                    this.reloadVideo()
                }
                ))
            }
            initCanPlayPatterns() {
                this.canPlayPatternAnalyzer.addPattern("emptied,timeupdate,emptied,timeupdate,loadstart,suspend,durationchange,loadedmetadata,loadeddata", (() => {
                    this.reloadVideo()
                }
                ))
            }
            isChrome68() {
                const { deviceSupport: e } = this.config;
                return e.IS_CHROME && 0 === function (e = "", t) {
                    let i = e.toString()
                        , s = t.toString();
                    const r = s.split(".")
                        , n = r.indexOf("x");
                    return n > -1 && (s = r.slice(0, n).join("."),
                        i = i.split(".").slice(0, n).join(".")),
                        E(i, s)
                }(e.DeviceProperties.browserVersion, "68.x")
            }
            wireStats(e, t) {
                const i = function (e, t = sr(1e3)) {
                    return t.pipe(qi((() => {
                        const t = e.getEntriesByType("resource");
                        let i;
                        for (let e = t.length - 1; e >= 0; e--) {
                            const r = t[e];
                            if ((s = r) && void 0 !== s.initiatorType && "video" === r.initiatorType && r.name.endsWith(".ts")) {
                                i = r.name;
                                break
                            }
                        }
                        var s;
                        return e.clearResourceTimings(),
                            i
                    }
                    )), De((() => new Fe(1))))
                }((s = window.performance) && "getEntriesByType" in s && "addEventListener" in s && "clearResourceTimings" in s ? window.performance : {
                    getEntriesByType: () => [],
                    addEventListener: () => { }
                    ,
                    clearResourceTimings: () => { }
                });
                var s;
                const r = (() => {
                    const s = new Fe(1);
                    return t.quality.pipe(Qe(1)).subscribe((e => s.next(e))).closeBy(e),
                        i.pipe(qi(_r), d()).subscribe((e => s.next(e))).closeBy(e),
                        s
                }
                )();
                Le([t.manifest, r, t.streamId], (e => e)).pipe(qi((([e, t, i]) => {
                    var s, r;
                    const n = null === (r = null === (s = null == e ? void 0 : e.mediaManifests.find(((e, t, s) => e.id === i || 1 === s.length))) || void 0 === s ? void 0 : s.streams.find((e => e.quality === t))) || void 0 === r ? void 0 : r.streamName;
                    return n ? [n, i] : void 0
                }
                )), ze((([e, t]) => {
                    let i = decodeURIComponent(e)
                        , s = "";
                    const r = i.lastIndexOf("_");
                    r > -1 && (s = i.slice(r, i.length),
                        i = i.slice(0, r));
                    const n = i.lastIndexOf("(");
                    return n > -1 && (i = i.slice(0, n),
                        i += t),
                        i + s
                }
                ))).subscribe((e => this.config.onStats({
                    streamName: `${e}`
                }))).closeBy(e),
                    i.pipe(qi(Rr), Ve(t.streamId, ((e, t) => t))).subscribe((e => {
                        this.config.onStats({
                            streamId: e
                        })
                    }
                    )).closeBy(e),
                    r.subscribe((e => this.config.onStats({
                        currentQuality: e
                    }))).closeBy(e),
                    t.qualityMode.subscribe((e => this.config.onStats({
                        qualityMode: e
                    }))).closeBy(e),
                    t.url.pipe(d(), Ve(t.qualityMode)).subscribe((([, e]) => this.config.onStats({
                        qualityMode: e
                    }))).closeBy(e)
            }
            failUnsupportedMediaTag(e) {
                const t = new be(ee.WrongMediaElement, `mediaTag is ${typeof e} instead of HTMLVideoElement`);
                this.config.onFailure(t)
            }
        }
        const Dr = {
            deltaTime: 0,
            halfRoundTripTime: 0
        };
        const Fr = [ee.WrongMediaElement, ie.NotSupported, ee.MediaStalledCritical, ee.ValidationTimeout, ee.PermissionError]
            , jr = [ee.ValidationTimeout, ee.NetworkError];
        class Ur extends Xs {
            get manifestManager() {
                return this.config.manifestManager
            }
            constructor(e, t) {
                super(e, t),
                    this.manifestQualities = [],
                    this.switchToLowQualityPipe = new ke,
                    this.subscribeToObservables(t),
                    this.subscribeSwitchToLowQuality()
            }
            mapObservables(e) {
                return e.url = Ui(e.url, e.play.pipe(je((e => !e)), ze((() => { }
                )))),
                    e
            }
            subscribeToObservables(e) {
                super.subscribeToObservables(e),
                    this.subscribeToManifestClear(e)
            }
            subscribeToManifestClear(e) {
                const { maxAutoQuality: t, streamId: i, play: s } = e;
                Le([s, t, i], (e => e)).pipe(Xe(2, 1), je((e => {
                    const [[t, i, s], [r, n, a]] = e;
                    return t && !r || i !== n || !this.manifestManager.isInMultiStreamMode && s !== a
                }
                ))).subscribe((() => {
                    this.manifestManager.clear()
                }
                )).closeBy(this.destroyScope)
            }
            destroy() {
                this.resetManifestSchedule && this.config.scheduler.deschedule(this.resetManifestSchedule),
                    super.destroy()
            }
            subscribeToPlay(e) {
                super.subscribeToPlay(e);
                const { play: t } = e
                    , i = t.pipe(Xe(2, 1), De());
                i.pipe(je((([e, t]) => e && !t))).subscribe((() => {
                    this.scheduleHlsStreamsReset()
                }
                )).closeBy(this.destroyScope),
                    i.pipe(je((([e, t]) => !e && t))).subscribe((() => this.descheduleHlsStreamsReset())).closeBy(this.destroyScope)
            }
            getMediaPlayer() {
                return (e, t) => function (e, t) {
                    const i = new _e
                        , s = new Be({
                            state: "IDLE"
                        })
                        , r = new ke;
                    return [Yi(i, s.pipe(ze((e => "PLAYING" === e.state))), e.settings.latency, (e => r.next(e))), ir(i), Zi(i, s, V.Hls), $i(i, e.settings.buffer)].reduce(((e, t) => t(e)), ((e, t) => new Lr(i, e, t, s, r)))(e, t)
                }(e, t)
            }
            shouldResolveUrls(e) {
                const t = this.triggerRestart.pipe(je((() => !this.manifestManager.isManifestAvailable)), ze((() => { }
                )));
                return Ui(e.pipe(je((([e, t]) => e.quality !== t.quality && t.qualityMode !== j.AUTO || e.qualityMode !== t.qualityMode || e.maxQuality !== t.maxQuality || !this.manifestManager.isInMultiStreamMode && e.streamId !== t.streamId)), ze((() => { }
                ))), t)
            }
            resolveMediaStreamUrl(e, t) {
                const { quality: i, qualityMode: s } = t;
                return this.loadNewManifest(e).pipe(ze((e => {
                    const t = qs(i, this.manifestQualities);
                    if (null === t) {
                        const e = new be(te.NoQualitiesAvailable, "No qualities available");
                        throw this.config.onEvent({
                            eventType: e.type,
                            eventReason: e.message
                        }),
                        this.onStats({
                            availableQualities: []
                        }),
                        e
                    }
                    return this.currentQuality = s === j.AUTO && this.isAdaptiveStreamSupported() ? e.streams[0].quality : t,
                        this.onStats({
                            streamHost: new URL(e.streams[0].url).host,
                            masterHost: new URL(e.url).host
                        }),
                        this.onUrlResolved(this.getHlsStreamByQuality(t, s, e))
                }
                )))
            }
            loadNewManifest(e) {
                return this.manifestManager.fetch(e).pipe(qe((([, e]) => this.reportManifestStats(this.manifestManager.manifest, e))), ze((([, , e]) => {
                    const t = this.manifestManager.manifest;
                    (function (e, t = window.fetch) {
                        const i = performance.now();
                        return t(function (e) {
                            return `https://${new URL(e).host}/clock`
                        }(e)).then((e => {
                            if (!e.ok)
                                return Dr;
                            const t = performance.now()
                                , s = Math.round((t - i) / 2);
                            return {
                                deltaTime: t - Number(e.headers.get("x-clockms")),
                                halfRoundTripTime: s
                            }
                        }
                        )).catch((e => Dr))
                    }
                    )(e.url).then((({ deltaTime: e, halfRoundTripTime: t }) => {
                        this.subjects.serverClientDeltaTime.next(e),
                            this.subjects.firstLatency.next(t)
                    }
                    )),
                        this.manifestQualities = t.streams.map((e => e.quality));
                    const i = this.manifestManager.getMasterManifest();
                    return i && this.subjects.manifest.next(i),
                        t
                }
                )), (e => new u((t => e.subscribe((e => t.onNext({
                    type: "next",
                    value: e
                })), (e => {
                    t.onNext({
                        type: "error",
                        error: e
                    }),
                        t.onNext({
                            type: "complete"
                        }),
                        t.onError(e)
                }
                ), (() => {
                    t.onNext({
                        type: "complete"
                    }),
                        t.onComplete()
                }
                ))))), qi((e => {
                    switch (e.type) {
                        case "next":
                            return e.value;
                        case "error":
                            const t = new be(e.error.type || te.FailedLoadingManifest, e.error.message);
                            throw this.config.onEvent({
                                eventType: t.type,
                                eventReason: t.message
                            }),
                            this.onStats({
                                availableQualities: []
                            }),
                            t;
                        default:
                            return null
                    }
                }
                )))
            }
            isFailureCritical(e) {
                return super.isFailureCritical(e) || Fr.includes(e.type)
            }
            onFailure(e) {
                this.canSwitchToLowQuality(e.type) ? this.switchToLowQualityPipe.next() : (this.manifestManager.clear(),
                    super.onFailure(e),
                    this.restartPlayer())
            }
            canSwitchToLowQuality(e) {
                if (!this.manifestManager.isManifestAvailable)
                    return !1;
                const t = this.manifestManager.manifest.streams;
                return !this.config.deviceSupport.IS_ADAPTIVE_HLS_SUPPORTED && jr.includes(e) && this.currentQuality !== L.LOW && t.some((e => e.quality === L.LOW))
            }
            subscribeSwitchToLowQuality() {
                this.switchToLowQualityPipe.pipe(Ve(this.observables.qualityMode, ((e, t) => t))).subscribe((e => {
                    this.currentQuality = L.LOW;
                    const t = this.getHlsStreamByQuality(L.LOW, e, this.manifestManager.manifest);
                    this.subjects.url.next(t)
                }
                )).closeBy(this.destroyScope)
            }
            isAdaptiveStreamSupported() {
                return this.config.deviceSupport.IS_ADAPTIVE_HLS_SUPPORTED && this.manifestManager.manifest.streams.length > 1
            }
            getHlsStreamByQuality(e, t, i) {
                var s;
                if (t === j.AUTO && this.isAdaptiveStreamSupported())
                    return i.url;
                const r = i.streams[i.streams.length - 1].url
                    , n = this.manifestManager.isInMultiStreamMode ? function (e, t) {
                        const i = e.slice(e.indexOf(",") + 1)
                            , s = atob(i).split("\n");
                        let r = `${s.shift()}\n${s.shift()}`
                            , n = 0;
                        for (; n < s.length;) {
                            const e = s[n];
                            if (!(e.indexOf("EXT-X-MEDIA:TYPE=VIDEO") > -1 && e.indexOf(`GROUP-ID="${t}"`) > -1)) {
                                n += 1;
                                continue
                            }
                            const i = e.indexOf("DEFAULT=YES") > -1
                                , a = i ? s.slice(n, n + 3).join("\n") : e;
                            r = r.concat("\n", a),
                                n += i ? 3 : 1
                        }
                        return Or(r)
                    }(i.url, e) : null === (s = i.streams.find((t => t.quality === e))) || void 0 === s ? void 0 : s.url;
                return null != n ? n : r
            }
            scheduleHlsStreamsReset() {
                this.resetManifestSchedule || (this.resetManifestSchedule = this.config.scheduler.schedule((() => {
                    this.manifestManager.clear(),
                        this.resetManifestSchedule = void 0
                }
                ), 3e4))
            }
            descheduleHlsStreamsReset() {
                this.resetManifestSchedule && (this.config.scheduler.deschedule(this.resetManifestSchedule),
                    this.resetManifestSchedule = void 0)
            }
        }
        function Wr(e, t) {
            const i = Object.assign(Object.assign({}, e), {
                manifestManager: new _i((s = wr,
                    r = Or,
                    (e, t) => s(e, t, r)), (i => Fi()(i).pipe(Ve(t.maxAutoQuality, t.qualityMode), ze((([t, i, s]) => {
                        const r = t.length - 1
                            , n = Object.values(L).filter((e => t[r].text.includes(`"${e}"`))).reverse()
                            , a = [...t];
                        return a[r] && i && s === j.AUTO && (a[r].text = function (e, t) {
                            const i = [];
                            if (void 0 !== t) {
                                const e = D[t];
                                for (const t in D)
                                    D.hasOwnProperty(t) && D[t] > e && i.push(t)
                            }
                            const s = e.split("\n");
                            let r = [];
                            if (-1 !== e.indexOf("#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID"))
                                r = s.filter((e => !i.some((t => e.includes(`GROUP-ID="${t}"`))))),
                                    i.forEach((e => {
                                        for (let t = r.length - 1; t >= 0; t--)
                                            r[t].includes(`VIDEO="${e}"`) && r.splice(t, 2)
                                    }
                                    ));
                            else {
                                const e = Ri(s.map(((e, t) => i.some((t => e.includes(`NAME="${t}"`))) ? [t, t + 1] : [])), (e => e));
                                r = s.filter(((t, i) => !e.includes(i)))
                            }
                            return r.join("\n")
                        }(t[r].text, i)),
                            e.onStats({
                                availableQualities: n
                            }),
                            a
                    }
                    )))))
            });
            var s, r;
            return new Ur(i, t)
        }
        var Vr = i(7255);
        function Qr() {
            const e = []
                , t = [];
            function i() {
                return e.length < 2 ? 0 : e[e.length - 1].pts - e[0].pts
            }
            return {
                push: function (s) {
                    e.push(s);
                    const r = i();
                    for (const e of t)
                        e(r)
                },
                shift: function (s) {
                    const r = function (t) {
                        if (0 === e.length)
                            return [];
                        const i = []
                            , s = [];
                        for (let r = 0; r < e.length; r++)
                            t && e[r].pts > t || (i.push(e[r]),
                                s.push(r));
                        for (let r = s.length - 1; r >= 0; r--)
                            e.splice(r, 1);
                        return i.sort(((e, t) => e.pts - t.pts))
                    }(s)
                        , n = i();
                    for (const e of t)
                        e(n);
                    return r
                },
                destroy: function () {
                    e.splice(0),
                        t.splice(0)
                },
                bufferLength: {
                    subscribe: function (e) {
                        t.push(e)
                    },
                    unsubscribe: function (e) {
                        const i = t.indexOf(e);
                        i > -1 && t.splice(i, 1)
                    }
                }
            }
        }
        function Hr(e, t) {
            return new u((i => {
                function s(e) {
                    i.onNext(e)
                }
                return e(s),
                    Re((() => t(s)))
            }
            ))
        }
        function Gr(e) {
            return "PLAYING" === e.state ? e.context : null
        }
        function Yr(e, t) {
            return Math.trunc(e + (t.wallclock - t.pts))
        }
        const qr = e => t => new u((i => {
            let s = !1;
            return t.subscribe((t => {
                s || (i.onNext(t),
                    s = e(t),
                    s && i.onComplete())
            }
            ), i.onError, (() => {
                s || (s = !0,
                    i.onComplete())
            }
            ))
        }
        ))
            , zr = () => e => new u((t => {
                let i;
                return e.subscribe((e => {
                    i = e
                }
                ), t.onError, (() => {
                    void 0 === i ? t.onError(new Error("Never emitted value")) : t.onNext(i),
                        t.onComplete()
                }
                ))
            }
            ));
        function Xr(e) {
            const t = new _e
                , i = new ke
                , s = new Be({
                    state: "IDLE",
                    context: {
                        scope: t,
                        stream: {
                            url: e.url,
                            streamName: e.streamName
                        },
                        configuration: {
                            transport: e.transport ? e.transport : As.createTransport,
                            audioDecoder: os,
                            audioPlayer: t => {
                                var i, s, r;
                                return (0,
                                    us.createAudioPlayer)(e.audioContext, null !== (i = e.initBufferLength) && void 0 !== i ? i : 1e3, t.sampleRate, t.numberOfChannels, null !== (s = e.volume) && void 0 !== s ? s : 1, null === (r = e.muted) || void 0 === r || r, 1)
                            }
                            ,
                            videoDecoder: Vr.$4,
                            videoRenderer: () => Is(e.canvas, Ps)
                        }
                    }
                })
                , r = {
                    latency: new Fe(1),
                    wallclock: new Fe(1),
                    bufferLength: new Fe(1),
                    bitrate: new Fe(1),
                    fps: new Fe(1),
                    droppedFrames: new Fe(1),
                    bandwidth: new Fe(1)
                };
            return i.pipe(je((({ action: e }) => "PLAY" === e)), Ve(s), qi((([, e]) => "IDLE" === e.state ? e.context : null))).pipe(Ge((function (e) {
                return e.configuration.transport(e.scope, e.stream.url).pipe(ze((t => ({
                    scope: e.scope,
                    transport: t,
                    stream: {
                        url: e.stream.url,
                        streamName: e.stream.streamName
                    },
                    configuration: {
                        audioDecoder: e.configuration.audioDecoder,
                        audioPlayer: e.configuration.audioPlayer,
                        videoDecoder: e.configuration.videoDecoder,
                        videoRenderer: e.configuration.videoRenderer
                    }
                }))))
            }
            )), ze((function (e) {
                const t = e.transport.messages.pipe(qi((e => "binary" === e.type ? e.buffer : null)), De())
                    , s = Qr()
                    , r = e.configuration.audioDecoder();
                t.subscribe(r.push).closeBy(e.scope),
                    r.frames.subscribe((e => {
                        s.push(e)
                    }
                    ), (e => {
                        i.next({
                            action: "DESTROY",
                            error: e
                        })
                    }
                    )).closeBy(e.scope);
                const n = Qr()
                    , a = e.configuration.videoDecoder((e => {
                        e instanceof Error ? i.next({
                            action: "DESTROY",
                            error: e
                        }) : n.push(e)
                    }
                    ));
                return t.subscribe(a.push).closeBy(e.scope),
                {
                    scope: e.scope,
                    stream: e.stream,
                    transport: e.transport,
                    audioDecoder: r,
                    audioBuffer: s,
                    videoDecoder: a,
                    videoBuffer: n,
                    configuration: {
                        audioPlayer: e.configuration.audioPlayer,
                        videoRenderer: e.configuration.videoRenderer
                    }
                }
            }
            )), Ge((function (e) {
                const t = e.transport.send({
                    eventType: "PLAY",
                    stream: e.stream.streamName
                })
                    , i = e.transport.messages.pipe(qi((e => "binary" === e.type ? e.buffer : null)), ze((e => new Uint8Array(e))), qi(Ki.extractAtoms), Ge(ns)).pipe(qi((e => "moov" === e.name ? (0,
                        Ki.extractAtoms)(e.data) : null)), Ge(ns), je((e => "trak" === e.name)), qi(Ki.parseAudioMeta), Qe(1)).pipe(ze((t => e.configuration.audioPlayer(t))))
                    , s = e.configuration.videoRenderer();
                if (s instanceof Error)
                    throw s;
                const r = new ds.r
                    , n = Hr(e.videoBuffer.bufferLength.subscribe, e.videoBuffer.bufferLength.unsubscribe)
                    , a = Hr((e => r.addListener(e)), (e => r.removeListener(e))).pipe(qi((e => e)))
                    , o = function (e, t, i, s, r) {
                        const n = new Be(t)
                            , a = new ke;
                        return function (e, t, i, s, r) {
                            return e.pipe(Ge((e => Ue(e).pipe(Ve(t), cs((([e, t]) => e === t ? Ue(void 0) : function (e, t, i, s) {
                                return t({
                                    eventType: "SWITCH_REQUEST",
                                    stream: e
                                }).pipe(qi((([, e]) => {
                                    var t;
                                    if ("SWITCH_COMPLETED" !== e.eventType)
                                        return null;
                                    if (!e.success)
                                        throw new Error(`Failed to switch stream - reason: ${null !== (t = e.description) && void 0 !== t ? t : "unknown"}`);
                                    return e.toStream
                                }
                                )), Ve(i, s), cs((([e, t, i]) => s.pipe(qr((e => e > i + t)), zr(), ze((() => e))))))
                            }(e, i, s, r))), qi((e => e)), Ve(t)))))
                        }(a, n, i, s, r).subscribe((([e]) => n.next(e))).closeBy(e),
                        {
                            stream: n,
                            switch: e => a.next(e)
                        }
                    }(e.scope, e.stream.streamName, e.transport.send, n, a);
                return ls([t, i], (([, t]) => ({
                    scope: e.scope,
                    transport: e.transport,
                    audioDecoder: e.audioDecoder,
                    audioBuffer: e.audioBuffer,
                    audioPlayer: t,
                    videoDecoder: e.videoDecoder,
                    videoBuffer: e.videoBuffer,
                    videoRenderer: s,
                    switcher: o,
                    syncer: r
                })))
            }
            )), Ge((function (e) {
                const t = Hr((t => e.syncer.addListener(t)), (t => e.syncer.removeListener(t)));
                !function (e, t) {
                    e.audioPlayer.pts.subscribe((t => t && e.syncer.setPts(t))),
                        t.subscribe((() => {
                            const t = e.audioBuffer.shift();
                            for (const i of t)
                                e.audioPlayer.pushFrame(i)
                        }
                        )).closeBy(e.scope)
                }(e, t);
                const s = t.pipe(qi((e => e)), ze((t => {
                    const i = e.videoBuffer.shift(t);
                    return [i.at(-1), i.slice(0, -1)]
                }
                )), De());
                return function (e, t) {
                    t.pipe(qi((([e]) => e)), d(((e, t) => e.codedWidth === t.codedWidth && e.codedHeight === t.codedHeight))).subscribe((t => e.videoRenderer.setSize(t.codedWidth, t.codedHeight))).closeBy(e.scope),
                        t.pipe(qi((([e]) => e))).subscribe((t => {
                            const i = new VideoFrame(t.data, {
                                codedHeight: t.codedHeight,
                                codedWidth: t.codedWidth,
                                format: t.format,
                                timestamp: t.pts,
                                layout: t.layout,
                                visibleRect: t.visibleRect
                            });
                            e.videoRenderer.render(i),
                                i.close()
                        }
                        )).closeBy(e.scope)
                }(e, s),
                    function (e, t) {
                        t.pipe(Gi(((e, [t]) => t ? performance.now() : e), void 0), qi((e => e)), ze((e => performance.now() - e > 100)), d()).subscribe((e => i.next({
                            action: "BUFFER",
                            isBuffering: e
                        }))).closeBy(e.scope)
                    }(e, s),
                    function (e, t, i) {
                        var s;
                        t.pipe(qi((([e]) => e ? performance.now() : void 0)), (s = (e, t) => !!t[0] && performance.now() - t[0] < 1e3,
                            e => new u((t => {
                                const i = [];
                                return e.subscribe((e => {
                                    s(0, i.slice()) || t.onNext(i.splice(0, i.length)),
                                        i.push(e)
                                }
                                ), t.onError, t.onComplete)
                            }
                            ))), qi((e => e.filter((t => t - e[0] < 1e3)).length))).subscribe((e => r.fps.next(e))).closeBy(e.scope),
                            t.pipe(qi((([, e]) => e.length)), Gi(((e, t) => e + t), 0)).subscribe((e => r.droppedFrames.next(e))).closeBy(e.scope);
                        const n = t.pipe(qi((([e]) => e)), De());
                        i.pipe(qi((e => e)), Ve(n, Yr)).subscribe((e => r.wallclock.next(e))).closeBy(e.scope),
                            Le([r.wallclock, e.transport.stats.serverTime, sr(1e3)], (([e, t]) => function (e, t, i = Math.round(performance.now())) {
                                return t.serverTime + (i - t.clientTime) - e
                            }(e, t))).subscribe((e => r.latency.next(e))).closeBy(e.scope),
                            Hr(e.videoBuffer.bufferLength.subscribe, e.videoBuffer.bufferLength.unsubscribe).subscribe((e => r.bufferLength.next(e))).closeBy(e.scope),
                            e.transport.stats.bandwidth.subscribe((e => r.bandwidth.next(e))).closeBy(e.scope),
                            e.transport.stats.bitrate.subscribe((e => r.bitrate.next(e))).closeBy(e.scope)
                    }(e, s, t),
                    s.pipe(qi((([e]) => e)), Qe(1)).pipe(ze((() => ({
                        scope: e.scope,
                        transport: e.transport,
                        audioDecoder: e.audioDecoder,
                        audioBuffer: e.audioBuffer,
                        audioPlayer: e.audioPlayer,
                        videoBuffer: e.videoBuffer,
                        videoDecoder: e.videoDecoder,
                        videoRenderer: e.videoRenderer,
                        switcher: e.switcher,
                        syncer: e.syncer
                    }))))
            }
            ))).subscribe((e => s.next({
                state: "PLAYING",
                context: e
            }))).closeBy(t),
                i.pipe(qi((e => "BUFFER" === e.action ? e.isBuffering : null)), Ve(s), ze((([e, t]) => "PLAYING" === t.state || "BUFFERING" === t.state ? e ? {
                    state: "BUFFERING",
                    context: t.context
                } : {
                    state: "PLAYING",
                    context: t.context
                } : t))).subscribe((e => s.next(e))).closeBy(t),
                i.pipe(je((e => "DESTROY" === e.action)), ze((e => "DESTROY" === e.action ? e.error : void 0)), Ve(s)).pipe(qe((([, e]) => {
                    if ("PLAYING" === e.state || "BUFFERING" === e.state) {
                        const { syncer: t, audioBuffer: i, audioPlayer: s, videoDecoder: r, videoBuffer: n, videoRenderer: a, scope: o } = e.context;
                        t.destroy(),
                            i.destroy(),
                            s.destroy(),
                            r.close(),
                            n.destroy(),
                            a.destroy(),
                            o.close()
                    }
                }
                ))).subscribe((([e]) => s.next({
                    state: "DESTROYED",
                    error: e
                }))).closeBy(t),
            {
                state: s.pipe(ze((e => "DESTROYED" === e.state ? {
                    state: e.state,
                    error: e.error
                } : {
                    state: e.state
                }))),
                play: function () {
                    return i.next({
                        action: "PLAY"
                    }),
                        s.pipe(qi(Gr), Qe(1), ze((() => { }
                        )))
                },
                setVolume: function (e) {
                    s.pipe(qi(Gr), Qe(1)).subscribe((({ audioPlayer: t }) => t.volume.set(e)))
                },
                mute: function (e) {
                    s.pipe(qi(Gr), Qe(1)).subscribe((({ audioPlayer: t }) => t.mute.set(e)))
                },
                setPlaybackRate: function (e) {
                    s.pipe(qi(Gr), Qe(1)).subscribe((({ audioPlayer: t }) => t.playbackRate.set(e)))
                },
                destroy: function () {
                    i.next({
                        action: "DESTROY"
                    })
                },
                stream: s.pipe(cs((e => {
                    return "PLAYING" === (t = e).state || "BUFFERING" === t.state ? e.context.switcher.stream : new u((() => Re()));
                    var t
                }
                ))),
                switchStream: function (e) {
                    s.pipe(qi(Gr), Qe(1)).subscribe((({ switcher: t }) => t.switch(e)))
                },
                stats: r
            }
        }
        class $r {
            constructor(e, t, i, s = new Be({
                state: "IDLE"
            }), r = new ke) {
                this.lifeCycleScope = e,
                    this.config = t,
                    this.state = s,
                    this.transition = r,
                    this.parentDiv = document.createElement("div"),
                    this.getPlayerContainer = () => this.parentDiv,
                    this.canvas = document.createElement("canvas"),
                    this.canvas.id = "web-codec-video",
                    Object.assign(this.canvas.style, Ke),
                    this.canvas.width = 960,
                    this.canvas.height = 540;
                const { aspectRatio: n } = i;
                this.aspectRatioWrapper = new Hs(this.canvas, n);
                const a = Le([i.manifest, i.streamId, i.quality], (e => e)).pipe(qi((([{ mediaManifests: e }, t, i]) => {
                    var s, r;
                    const n = (null !== (s = e.find((e => e.id === t))) && void 0 !== s ? s : e[0]).streams;
                    return null !== (r = n.find((e => e.quality === i))) && void 0 !== r ? r : n[n.length - 1]
                }
                )), De((() => new Fe(1))));
                this.handleStateTransitions(i),
                    this.handleManifestChange(a, i),
                    this.handlePlayChange(i.play),
                    this.handleStreamChange(a),
                    this.handlePlaybackRateChange(i.playbackRate),
                    this.handleMuted(i),
                    this.handleVolumeChange(i.volume)
            }
            destroy() {
                this.transition.next({
                    action: "DESTROY"
                }),
                    this.lifeCycleScope.close()
            }
            handleStateTransitions(e) {
                this.transition.pipe(ze((t => {
                    switch (t.action) {
                        case "INIT":
                            return this.processInit(e, t.config);
                        case "PLAY":
                            return this.processPlay(e);
                        case "DESTROY":
                            return this.processDestroy(t.error);
                        default:
                            throw new Error("Invalid action")
                    }
                }
                )), Ge((e => e()))).subscribe((() => { }
                ), (e => this.transition.next({
                    action: "DESTROY",
                    error: ve(e, ee.MediaError)
                }))).closeBy(this.lifeCycleScope)
            }
            processInit(e, t) {
                return () => this.state.pipe(Qe(1), ze((i => {
                    if ("IDLE" !== i.state)
                        return;
                    this.state.next({
                        state: "LOADING"
                    });
                    const s = new _e
                        , r = Xr(t);
                    this.wireFailures(s, r),
                        this.wireStats(s, r, e),
                        r.state.subscribe((({ state: e }) => {
                            const t = "PLAYING" === e ? Y.PLAYING : "BUFFERING" === e ? Y.WAITING : null;
                            t && this.config.onPlaybackEvent({
                                eventType: t,
                                eventReason: t
                            })
                        }
                        )).closeBy(s),
                        Re((() => s.close())).closeBy(this.lifeCycleScope),
                        this.state.next({
                            state: "READY",
                            player: r,
                            scope: s
                        })
                }
                )), qe((() => this.aspectRatioWrapper.setParentElement(this.parentDiv))))
            }
            processPlay(e) {
                return () => this.state.pipe(Qe(1), Ge((t => "READY" !== t.state ? Ue(void 0) : e.play.pipe(je((e => e)), Qe(1), Ge((() => t.player.play())), qe((() => this.state.next(Object.assign(Object.assign({}, t), {
                    state: "PLAYING"
                })))), ze((() => { }
                ))))))
            }
            processDestroy(e) {
                return () => this.state.pipe(Qe(1), ze((t => {
                    "READY" !== t.state && "PLAYING" !== t.state || (this.state.next({
                        state: "STOPPING",
                        error: e
                    }),
                        t.player.destroy(),
                        t.scope.close(),
                        this.state.next({
                            state: "IDLE"
                        })),
                        this.aspectRatioWrapper.destroy(),
                        this.canvas.remove()
                }
                )))
            }
            handleManifestChange(e, t) {
                t.manifest.pipe(Ve(e, t.muted, t.volume), ze((([, e, t, i]) => ({
                    action: "INIT",
                    config: {
                        canvas: this.canvas,
                        audioContext: this.config.audioContext,
                        streamName: e.streamName,
                        url: e.url,
                        initBufferLength: this.config.settings.buffer.init,
                        volume: i,
                        muted: t
                    }
                })))).pipe(Ve(this.state, t.play), ze((([e, t, i]) => {
                    const s = [];
                    return "READY" !== t.state && "PLAYING" !== t.state || s.push({
                        action: "DESTROY"
                    }),
                        s.push(e),
                        i && s.push({
                            action: "PLAY"
                        }),
                        s
                }
                )), cs((e => ns(e)))).subscribe((e => this.transition.next(e))).closeBy(this.lifeCycleScope)
            }
            handlePlayChange(e) {
                e.pipe(ze((e => e ? {
                    action: "PLAY"
                } : {
                    action: "DESTROY"
                }))).subscribe((e => this.transition.next(e))).closeBy(this.lifeCycleScope)
            }
            handleStreamChange(e) {
                e.pipe(Zr(this.state)).subscribe((([e, t]) => t.switchStream(e.streamName))).closeBy(this.lifeCycleScope)
            }
            handlePlaybackRateChange(e) {
                e.pipe(Zr(this.state)).subscribe((([e, t]) => t.setPlaybackRate(e))).closeBy(this.lifeCycleScope)
            }
            handleMuted(e) {
                Le([e.muted, e.volume], (([e, t]) => e || 0 === t)).pipe(Zr(this.state)).subscribe((([e, t]) => t.mute(e))).closeBy(this.lifeCycleScope)
            }
            handleVolumeChange(e) {
                e.pipe(Zr(this.state)).subscribe((([e, t]) => t.setVolume(e))).closeBy(this.lifeCycleScope)
            }
            wireFailures(e, t) {
                t.state.pipe(qi((e => "DESTROYED" === e.state ? e.error : null)), ze((e => {
                    const t = (() => {
                        if ("VideoDecoderError" === e.name)
                            return ee.DecodeError;
                        if ("EncodingError" === e.name)
                            return Object.defineProperty(e, "code", {
                                value: 3
                            }),
                                ee.DecodeError;
                        if (e instanceof As.TransportError) {
                            if ("STREAM_SHUTDOWN" === e.type)
                                return ee.StreamShutdown;
                            if ("NETWORK_ERROR" === e.type)
                                return ee.NetworkError;
                            if ("STREAM_SECURITY_ERROR" === e.type)
                                return J.StreamSecurityError
                        }
                        return se
                    }
                    )();
                    return {
                        action: "DESTROY",
                        error: ve(e, t)
                    }
                }
                ))).subscribe((e => this.transition.next(e))).closeBy(e)
            }
            wireStats(e, t, i) {
                t.stats.latency.subscribe((e => this.config.onStats({
                    latency: e
                }))).closeBy(e),
                    t.stats.wallclock.subscribe((e => this.config.onStats({
                        wallclock: e
                    }))).closeBy(e),
                    t.stats.bufferLength.subscribe((e => this.config.onStats({
                        bufferLength: e
                    }))).closeBy(e),
                    t.stats.bitrate.subscribe((e => this.config.onStats({
                        playbackBitrate: e
                    }))).closeBy(e),
                    t.stats.droppedFrames.subscribe((e => this.config.onStats({
                        droppedFrames: e
                    }))).closeBy(e),
                    t.stats.fps.subscribe((e => this.config.onStats({
                        fps: e
                    }))).closeBy(e),
                    t.stats.bandwidth.subscribe((e => this.config.onStats({
                        bandwidth: e
                    }))).closeBy(e);
                const s = i.manifest.pipe(qi((e => e))).pipe(ze((e => Ri(e.mediaManifests, (e => e.streams)))));
                t.stream.pipe(Ve(s), qi((([e, t]) => t.find((t => t.streamName === e)))), Ve(i.streamId)).subscribe((([e, t]) => this.config.onStats({
                    currentQuality: e.quality,
                    streamName: e.streamName,
                    streamHost: new URL(e.url).host,
                    streamId: t
                }))).closeBy(e),
                    i.qualityMode.subscribe((e => this.config.onStats({
                        qualityMode: e
                    }))).closeBy(e)
            }
        }
        function Zr(e) {
            return t => t.pipe(Ge((t => e.pipe(qi((e => "READY" === e.state || "PLAYING" === e.state ? e.player : void 0)), Qe(1), ze((e => [t, e]))))))
        }
        function Kr(e, t) {
            const i = new _e
                , s = new Be({
                    state: "IDLE"
                })
                , r = new ke
                , n = s.pipe(ze((e => "PLAYING" === e.state)))
                , a = s.pipe(je((e => {
                    var t;
                    return "STOPPING" === e.state && (null === (t = e.error) || void 0 === t ? void 0 : t.type) === ee.MaxLatencyReached
                }
                )), ze((() => { }
                )))
                , o = new Be([])
                , l = [Yi(i, n, e.settings.latency, (e => r.next({
                    action: "DESTROY",
                    error: e
                }))), Js(i, (e => r.next({
                    action: "DESTROY",
                    error: e
                }))), ir(i, o), Zi(i, s, V.Fmp4), $i(i, e.settings.buffer), ar(i, 1e4), hr(i, ((t, i, s) => {
                    const r = []
                        , n = i.pipe(qi((e => e.bandwidth)), d())
                        , o = i.pipe(qi((e => e.bufferLength)), d());
                    if (e.settings.adaptive.bitrateRule.enable) {
                        const s = i.pipe(qi((e => e.playbackBitrate)), d());
                        r.push(ur(n, s, t, e.settings.adaptive.bitrateRule.fadeCoefficient, e.settings.adaptive.bitrateRule.switchCoefficient))
                    }
                    const l = Le([i.pipe(qi((e => e.currentQuality))), s], (e => e)).pipe(ze((([e, t]) => {
                        const i = t.findIndex((([, t]) => t === e));
                        if (i + 1 >= t.length)
                            return Number.MAX_VALUE;
                        const [s] = t[i + 1];
                        return 1.15 * s
                    }
                    )));
                    return Ui(...r, cr(o, 400, t), pr(t, a), dr(n, l, t))
                }
                ), [or], o), fr(i), Hi(t, i)].reduce(((e, t) => t(e)), ((e, t) => new $r(i, e, t, s, r)))
                , c = (() => {
                    const e = new Fe(1);
                    return t.quality.subscribe((t => e.next(t))).closeBy(i),
                        e
                }
                )();
            return l(e, Object.assign(Object.assign({}, t), {
                quality: c
            }))
        }
        function Jr(e, t) {
            const i = Object.assign(Object.assign({}, e), {
                manifestManager: new _i(Li, Fi()),
                mediaPlayerFactory: Kr
            });
            return new Zs(i, t)
        }
        const en = (e, t) => xi(e, t, [{
            name: V.WebCodec,
            factory: Jr
        }, {
            name: V.Fmp4,
            factory: gr
        }, {
            name: V.Hls,
            factory: Wr
        }, {
            name: V.Flipbook,
            factory: Ks
        }])
    }
    )(),
        s
}
)()));
//# sourceMappingURL=https://sourcemaps.egcdn.com/frontend/cvi/evo-video-components/13.20240327.131108-efde613f.video_wf4hfb_v13.js.map
