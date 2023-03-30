(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [979], {
        92167: function(e, t, r) {
            "use strict";
            var n = r(63038);
            t.default = void 0;
            var o, a = (o = r(67294)) && o.__esModule ? o : {
                    default: o
                },
                s = r(21063),
                i = r(34651),
                c = r(7426);
            var l = {};

            function d(e, t, r, n) {
                if (e && s.isLocalURL(t)) {
                    e.prefetch(t, r, n).catch((function(e) {
                        0
                    }));
                    var o = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    l[t + "%" + r + (o ? "%" + o : "")] = !0
                }
            }
            var u = function(e) {
                var t, r = !1 !== e.prefetch,
                    o = i.useRouter(),
                    u = a.default.useMemo((function() {
                        var t = s.resolveHref(o, e.href, !0),
                            r = n(t, 2),
                            a = r[0],
                            i = r[1];
                        return {
                            href: a,
                            as: e.as ? s.resolveHref(o, e.as) : i || a
                        }
                    }), [o, e.href, e.as]),
                    h = u.href,
                    f = u.as,
                    p = e.children,
                    m = e.replace,
                    b = e.shallow,
                    x = e.scroll,
                    v = e.locale;
                "string" === typeof p && (p = a.default.createElement("a", null, p));
                var y = (t = a.default.Children.only(p)) && "object" === typeof t && t.ref,
                    j = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    g = n(j, 2),
                    _ = g[0],
                    k = g[1],
                    N = a.default.useCallback((function(e) {
                        _(e), y && ("function" === typeof y ? y(e) : "object" === typeof y && (y.current = e))
                    }), [y, _]);
                a.default.useEffect((function() {
                    var e = k && r && s.isLocalURL(h),
                        t = "undefined" !== typeof v ? v : o && o.locale,
                        n = l[h + "%" + f + (t ? "%" + t : "")];
                    e && !n && d(o, h, f, {
                        locale: t
                    })
                }), [f, h, k, v, r, o]);
                var w = {
                    ref: N,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, r, n, o, a, i, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && s.isLocalURL(r)) && (e.preventDefault(), null == i && n.indexOf("#") >= 0 && (i = !1), t[o ? "replace" : "push"](r, n, {
                                shallow: a,
                                locale: c,
                                scroll: i
                            }))
                        }(e, o, h, f, m, b, x, v)
                    },
                    onMouseEnter: function(e) {
                        s.isLocalURL(h) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), d(o, h, f, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var O = "undefined" !== typeof v ? v : o && o.locale,
                        L = o && o.isLocaleDomain && s.getDomainLocale(f, O, o && o.locales, o && o.domainLocales);
                    w.href = L || s.addBasePath(s.addLocale(f, O, o && o.defaultLocale))
                }
                return a.default.cloneElement(t, w)
            };
            t.default = u
        },
        42212: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            r(67294);
            var n = r(85893);

            function o(e) {
                var t = e.header,
                    r = void 0 === t ? void 0 : t,
                    o = e.footer,
                    a = void 0 === o ? void 0 : o,
                    s = (e.backgroundImage, e.title),
                    i = void 0 === s ? "" : s,
                    c = e.description,
                    l = void 0 === c ? "" : c,
                    d = e.removePadding,
                    u = void 0 !== d && d,
                    h = e.children,
                    f = e.className;
                return (0, n.jsxs)("div", {
                    className: "relative ".concat(f),
                    style: {
                        borderRadius: "10px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center bottom"
                    },
                    children: [r && (0, n.jsx)(n.Fragment, {
                        children: r
                    }), (0, n.jsxs)("div", {
                        className: !u && "px-2 py-4 sm:p-8",
                        children: [i && (0, n.jsx)("div", {
                            className: "mb-4 text-2xl text-high-emphesis",
                            children: i
                        }), l && (0, n.jsx)("div", {
                            className: "text-base text-secondary",
                            children: l
                        }), h]
                    }), a && (0, n.jsx)(n.Fragment, {
                        children: a
                    })]
                })
            }
        },
        94228: function(e, t, r) {
            "use strict";
            var n = r(85893);
            t.Z = function(e) {
                var t = e.maxWidth,
                    r = void 0 === t || t,
                    o = e.opacity,
                    a = void 0 === o ? "0.6" : o,
                    s = e.children;
                return (0, n.jsxs)("div", {
                    className: "force-gpu relative w-full ".concat(r ? "max-w-2xl" : ""),
                    children: [(0, n.jsx)("div", {
                        style: {
                            filter: "blur(150px) opacity(".concat(a, ")")
                        },
                        className: "absolute top-1/4 -left-1 bg-primary-text bottom-4 w-3/5 rounded-full z-0 hidden sm:block"
                    }), (0, n.jsx)("div", {
                        style: {
                            filter: "blur(150px) opacity(".concat(a, ")")
                        },
                        className: "absolute bottom-1/4 -right-1 bg-secondary-silver top-4 w-3/5 rounded-full z-0 hidden sm:block"
                    }), (0, n.jsx)("div", {
                        className: "relative filter drop-shadow",
                        children: s
                    })]
                })
            }
        },
        23233: function(e, t, r) {
            "use strict";
            var n = r(4942),
                o = r(45987),
                a = r(41664),
                s = r(67294),
                i = r(11163),
                c = r(85893),
                l = ["children", "exact", "activeClassName"];

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t = e.children,
                    r = e.exact,
                    n = void 0 !== r && r,
                    d = e.activeClassName,
                    h = void 0 === d ? "text-high-emphesis" : d,
                    f = (0, o.Z)(e, l),
                    p = (0, i.useRouter)(),
                    m = p.asPath,
                    b = (p.pathname, p.route, p.query, p.basePath, s.Children.only(t)),
                    x = b.props.className || "",
                    v = (n ? (f.as || f.href.pathname || f.href) === m : m.startsWith(f.as || f.href.pathname || f.href)) ? "".concat(x, " ").concat(h).trim() : x;
                return (0, c.jsx)(a.default, u(u({
                    href: f.href
                }, f), {}, {
                    children: s.cloneElement(b, {
                        className: v || null
                    })
                }))
            }
        },
        7627: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var n = r(4752),
                o = r(9008),
                a = (r(67294), r(11163)),
                s = r(23233),
                i = r(42212),
                c = r(90361),
                l = r(94228),
                d = r(29383),
                u = r(85893);

            function h() {
                var e = (0, c.mV)().i18n,
                    t = ((0, a.useRouter)(), (0, n.aQ)().chainId);
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(o.default, {
                        children: [(0, u.jsx)("title", {
                            children: "NitroLocker - A free liquidity locker for the Arbitrum Nitro Ecosystem"
                        }), (0, u.jsx)("meta", {
                            name: "description",
                            content: "NitroShiba Locker"
                        }, "description")]
                    }), (0, u.jsx)("div", {
                        className: "container px-0 mx-auto md:pt-20 pb-6",
                        children: (0, u.jsx)(l.Z, {
                            maxWidth: !1,
                            opacity: "0.3",
                            children: (0, u.jsxs)("div", {
                                className: "grid grid-cols-12 gap-2 min-h-1/2",
                                children: [(0, u.jsxs)("div", {
                                    className: "col-span-12 justify-center flex flex-col md:flex-row  md:mb-6",
                                    children: [(0, u.jsx)(s.Z, {
                                        exact: !0,
                                        href: "/locker",
                                        activeClassName: "font-bold bg-transparent border rounded md:rounded-l md:rounded-none text-high-emphesis border-transparent border-gradient-r-silver-cobalt",
                                        children: (0, u.jsx)("div", {
                                            className: "flex items-center gap-2 justify-start md:justify-center px-16 py-4 text-base font-bold border border-transparent border-gradient-r-silver-primary-alt-bg rounded md:rounded-l-3xl md:rounded-none cursor-pointer",
                                            children: (0, u.jsx)("a", {
                                                children: e._(e._("Search lockers"))
                                            })
                                        })
                                    }), (0, u.jsx)(s.Z, {
                                        exact: !0,
                                        href: "/locker/create",
                                        activeClassName: "font-bold bg-transparent border md:border-l-0 md:border-r-0 rounded md:rounded-none text-high-emphesis border-transparent border-gradient-r-silver-cobalt",
                                        children: (0, u.jsx)("div", {
                                            className: "flex items-center gap-2 justify-start md:justify-center px-16 py-4 text-base font-bold border md:border-l-0 md:border-r-0 rounded md:rounded-none border-transparent border-gradient-r-silver-primary-alt-bg cursor-pointer",
                                            children: (0, u.jsx)("a", {
                                                className: "text-[#b3b4b5]",
                                                children: e._(e._("Create lock"))
                                            })
                                        })
                                    }), (0, u.jsx)(s.Z, {
                                        exact: !0,
                                        href: "/locker/help",
                                        activeClassName: "font-bold bg-transparent border rounded md:rounded-r md:rounded-none text-high-emphesis border-transparent border-gradient-r-silver-cobalt",
                                        children: (0, u.jsx)("div", {
                                            className: "flex items-center gap-2 justify-start md:justify-center px-16 py-4 text-base font-bold border border-transparent rounded md:rounded-r-3xl md:rounded-none border-gradient-r-silver-primary-alt-bg cursor-pointer",
                                            children: (0, u.jsx)("a", {
                                                children: e._(e._("User Guide"))
                                            })
                                        })
                                    })]
                                }), (0, u.jsx)("div", {
                                    className: "col-span-12 justify-center flex w-full",
                                    style: {
                                        minHeight: "30rem"
                                    },
                                    children: (0, u.jsx)(i.Z, {
                                        className: "h-full border border-transparent border-gradient-r-blue-cobalt-primary-alt-bg z-4 w-full lg:w-9/12",
                                        children: (0, u.jsx)("div", {
                                            className: "grid grid-cols-12 gap-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "col-span-12 bg-section-bg px-6 py-4 rounded",
                                                children: [(0, u.jsx)("div", {
                                                    className: "mb-2 text-2xl text-emphesis text-center",
                                                    children: e._(e._("How to use"))
                                                }), (0, u.jsxs)("div", {
                                                    className: "mb-4 text-base text-white",
                                                    children: [(0, u.jsx)("p", {
                                                        children: e._(e._("- Input your token or liquidity pair address, amount of tokens to lock, withdrawer address and when tokens will become unlocked"))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._('- Click on "Approve" to allow the contract to transfer your tokens'))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._('- Click on "Deposit" to lock your tokens into locker contract'))
                                                    })]
                                                }), (0, u.jsx)("div", {
                                                    className: "mb-2 text-2xl text-emphesis text-center",
                                                    children: e._(e._("Health Score (Powered by Leash Protocol)"))
                                                }), (0, u.jsxs)("div", {
                                                    className: "mb-4 text-base text-white",
                                                    children: [(0, u.jsx)("p", {
                                                        children: e._(e._("- The Health Score is the overall quality rating of a liquidity pool locked in the locker contract"))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._("- It measures several aspects of the token contract, the liquidity pool (LP token) and the lock itself, and ranges from 0 to 100%. The higher the score the safer the token should be"))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._("- Scores above 80 are generally considered safe. but the closer to 100% the better. The score is very strict and scoring above 90% is difficult"))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._("- NOTE: The health score does not guarantee the safety of the token contract itself. It should only be used in combination with a fully renounced token contract. \nThis is not financial advice and even a very high score is not an indication that you should buy the token. DYOR!"))
                                                    })]
                                                }), (0, u.jsx)("div", {
                                                    className: "mb-2 text-2xl text-emphesis text-center",
                                                    children: e._(e._("Fees"))
                                                }), " ", (0, u.jsx)("div", {
                                                    className: "mb-4 text-base text-white",
                                                    children: (0, u.jsx)("p", {
                                                        children: e._(e._("- This locker has been developed for the benefit of the entire Arbitrum Nitro ecosystem and is free to use."))
                                                    })
                                                }), (0, u.jsx)("div", {
                                                    className: "mb-2 text-2xl text-emphesis text-center",
                                                    children: e._(e._("Considerations"))
                                                }), " ", (0, u.jsxs)("div", {
                                                    className: "mb-4 text-base text-white",
                                                    children: [(0, u.jsx)("p", {
                                                        children: e._(e._("- You will not be able to withdraw your tokens before the unlock time"))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._("- Locker contract address: {0}", {
                                                            0: d.Lr[t || 42161]
                                                        }))
                                                    }), (0, u.jsx)("p", {
                                                        children: e._(e._("- Always DYOR"))
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        5478: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/locker/help", function() {
                return r(7627)
            }])
        },
        41664: function(e, t, r) {
            e.exports = r(92167)
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return t = 5478, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);