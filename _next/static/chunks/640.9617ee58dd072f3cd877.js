"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [640], {
        96844: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SafeAppProvider = void 0;
            var a = s(26221);
            Object.defineProperty(t, "SafeAppProvider", {
                enumerable: !0,
                get: function() {
                    return a.SafeAppProvider
                }
            })
        },
        26221: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SafeAppProvider = void 0;
            const a = s(17187),
                n = s(11509);
            t.SafeAppProvider = class {
                constructor(e, t) {
                    this.submittedTxs = new Map, this.events = new a.EventEmitter, this.safe = e, this.sdk = t
                }
                async connect() {
                    this.events.emit("connect", {
                        chainId: this.chainId
                    })
                }
                async disconnect() {}
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                get chainId() {
                    return this.safe.chainId
                }
                async request(e) {
                    const {
                        method: t,
                        params: s = []
                    } = e;
                    switch (t) {
                        case "eth_accounts":
                            return [this.safe.safeAddress];
                        case "net_version":
                        case "eth_chainId":
                            return `0x${this.chainId.toString(16)}`;
                        case "eth_sendTransaction":
                            const t = Object.assign({
                                    value: "0",
                                    data: "0x"
                                }, s[0]),
                                i = await this.sdk.txs.send({
                                    txs: [t]
                                });
                            return this.submittedTxs.set(i.safeTxHash, {
                                from: this.safe.safeAddress,
                                hash: i.safeTxHash,
                                gas: 0,
                                gasPrice: "0x00",
                                nonce: 0,
                                input: t.data,
                                value: t.value,
                                to: t.to,
                                blockHash: null,
                                blockNumber: null,
                                transactionIndex: null
                            }), i.safeTxHash;
                        case "eth_blockNumber":
                            return (await this.sdk.eth.getBlockByNumber(["latest"])).number;
                        case "eth_getBalance":
                            return this.sdk.eth.getBalance([n.getLowerCase(s[0]), s[1]]);
                        case "eth_getCode":
                            return this.sdk.eth.getCode([n.getLowerCase(s[0]), s[1]]);
                        case "eth_getTransactionCount":
                            return this.sdk.eth.getTransactionCount([n.getLowerCase(s[0]), s[1]]);
                        case "eth_getStorageAt":
                            return this.sdk.eth.getStorageAt([n.getLowerCase(s[0]), s[1], s[2]]);
                        case "eth_getBlockByNumber":
                            return this.sdk.eth.getBlockByNumber([s[0], s[1]]);
                        case "eth_getBlockByHash":
                            return this.sdk.eth.getBlockByHash([s[0], s[1]]);
                        case "eth_getTransactionByHash":
                            let r = s[0];
                            try {
                                r = (await this.sdk.txs.getBySafeTxHash(r)).txHash || r
                            } catch (a) {}
                            return this.submittedTxs.has(r) ? this.submittedTxs.get(r) : this.sdk.eth.getTransactionByHash([r]).then((e => (e && (e.hash = s[0]), e)));
                        case "eth_getTransactionReceipt":
                            {
                                let e = s[0];
                                try {
                                    e = (await this.sdk.txs.getBySafeTxHash(e)).txHash || e
                                } catch (a) {}
                                return this.sdk.eth.getTransactionReceipt([e]).then((e => (e && (e.transactionHash = s[0]), e)))
                            }
                        case "eth_estimateGas":
                            return 0;
                        case "eth_call":
                            return this.sdk.eth.call([s[0], s[1]]);
                        case "eth_getLogs":
                            return this.sdk.eth.getPastLogs([s[0]]);
                        case "eth_gasPrice":
                            return this.sdk.eth.getGasPrice();
                        default:
                            throw Error(`"${e.method}" not implemented`)
                    }
                }
                send(e, t) {
                    e || t("Undefined request"), this.request(e).then((s => t(null, {
                        jsonrpc: "2.0",
                        id: e.id,
                        result: s
                    }))).catch((e => t(e, null)))
                }
            }
        },
        11509: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLowerCase = void 0, t.getLowerCase = function(e) {
                return e ? e.toLowerCase() : e
            }
        },
        55621: function(e, t, s) {
            var a = this && this.__createBinding || (Object.create ? function(e, t, s, a) {
                    void 0 === a && (a = s), Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: function() {
                            return t[s]
                        }
                    })
                } : function(e, t, s, a) {
                    void 0 === a && (a = s), e[a] = t[s]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || a(t, e, s)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(36750);
            t.default = class {
                constructor(e = null, t = !1) {
                    this.allowedOrigins = null, this.callbacks = new Map, this.debugMode = !1, this.isValidMessage = ({
                        origin: e,
                        data: t,
                        source: s
                    }) => {
                        const a = !t,
                            n = s === window.parent,
                            i = ("undefined" !== typeof t.version && parseInt(t.version.split(".")[0])) >= 1;
                        let r = !0;
                        return Array.isArray(this.allowedOrigins) && (r = void 0 !== this.allowedOrigins.find((t => t.test(e)))), !a && n && i && r
                    }, this.logIncomingMessage = e => {
                        console.info(`Safe Apps SDK v1: A message was received from origin ${e.origin}. `, e.data)
                    }, this.onParentMessage = e => {
                        this.isValidMessage(e) && (this.debugMode && this.logIncomingMessage(e), this.handleIncomingMessage(e.data))
                    }, this.handleIncomingMessage = e => {
                        const {
                            id: t
                        } = e, s = this.callbacks.get(t);
                        s && (s(e), this.callbacks.delete(t))
                    }, this.send = (e, t) => {
                        const s = i.MessageFormatter.makeRequest(e, t);
                        if ("undefined" === typeof window) throw new Error("Window doesn't exist");
                        return window.parent.postMessage(s, "*"), new Promise(((e, t) => {
                            this.callbacks.set(s.id, (s => {
                                s.success ? e(s) : t(new Error(s.error))
                            }))
                        }))
                    }, this.allowedOrigins = e, this.debugMode = t, window.addEventListener("message", this.onParentMessage)
                }
            }, n(s(92628), t)
        },
        36750: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MessageFormatter = void 0;
            const a = s(56036),
                n = s(78855);
            class i {}
            t.MessageFormatter = i, i.makeRequest = (e, t) => ({
                id: n.generateRequestId(),
                method: e,
                params: t,
                env: {
                    sdkVersion: a.getSDKVersion()
                }
            }), i.makeResponse = (e, t, s) => ({
                id: e,
                success: !0,
                version: s,
                data: t
            }), i.makeErrorResponse = (e, t, s) => ({
                id: e,
                success: !1,
                error: t,
                version: s
            })
        },
        92628: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Methods = void 0,
                function(e) {
                    e.sendTransactions = "sendTransactions", e.rpcCall = "rpcCall", e.getSafeInfo = "getSafeInfo", e.getTxBySafeTxHash = "getTxBySafeTxHash", e.getSafeBalances = "getSafeBalances"
                }(t.Methods || (t.Methods = {}))
        },
        78855: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateRequestId = void 0;
            const s = e => e.toString(16).padStart(2, "0");
            t.generateRequestId = () => "undefined" !== typeof window ? (e => {
                const t = new Uint8Array((e || 40) / 2);
                return window.crypto.getRandomValues(t), Array.from(t, s).join("")
            })(10) : (new Date).getTime().toString(36)
        },
        71068: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RPC_CALLS = void 0, t.RPC_CALLS = {
                eth_call: "eth_call",
                eth_gasPrice: "eth_gasPrice",
                eth_getLogs: "eth_getLogs",
                eth_getBalance: "eth_getBalance",
                eth_getCode: "eth_getCode",
                eth_getBlockByHash: "eth_getBlockByHash",
                eth_getBlockByNumber: "eth_getBlockByNumber",
                eth_getStorageAt: "eth_getStorageAt",
                eth_getTransactionByHash: "eth_getTransactionByHash",
                eth_getTransactionReceipt: "eth_getTransactionReceipt",
                eth_getTransactionCount: "eth_getTransactionCount"
            }
        },
        60770: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Eth = void 0;
            const a = s(71068),
                n = s(92628),
                i = {
                    defaultBlockParam: (e = "latest") => e,
                    returnFullTxObjectParam: (e = !1) => e,
                    blockNumberToHex: e => Number.isInteger(e) ? `0x${e.toString(16)}` : e
                };
            t.Eth = class {
                constructor(e) {
                    this.communicator = e, this.call = this.buildRequest({
                        call: a.RPC_CALLS.eth_call,
                        formatters: [null, i.defaultBlockParam]
                    }), this.getBalance = this.buildRequest({
                        call: a.RPC_CALLS.eth_getBalance,
                        formatters: [null, i.defaultBlockParam]
                    }), this.getCode = this.buildRequest({
                        call: a.RPC_CALLS.eth_getCode,
                        formatters: [null, i.defaultBlockParam]
                    }), this.getStorageAt = this.buildRequest({
                        call: a.RPC_CALLS.eth_getStorageAt,
                        formatters: [null, i.blockNumberToHex, i.defaultBlockParam]
                    }), this.getPastLogs = this.buildRequest({
                        call: a.RPC_CALLS.eth_getLogs
                    }), this.getBlockByHash = this.buildRequest({
                        call: a.RPC_CALLS.eth_getBlockByHash,
                        formatters: [null, i.returnFullTxObjectParam]
                    }), this.getBlockByNumber = this.buildRequest({
                        call: a.RPC_CALLS.eth_getBlockByNumber,
                        formatters: [i.blockNumberToHex, i.returnFullTxObjectParam]
                    }), this.getTransactionByHash = this.buildRequest({
                        call: a.RPC_CALLS.eth_getTransactionByHash
                    }), this.getTransactionReceipt = this.buildRequest({
                        call: a.RPC_CALLS.eth_getTransactionReceipt
                    }), this.getTransactionCount = this.buildRequest({
                        call: a.RPC_CALLS.eth_getTransactionCount,
                        formatters: [null, i.defaultBlockParam]
                    }), this.getGasPrice = this.buildRequest({
                        call: a.RPC_CALLS.eth_gasPrice
                    })
                }
                buildRequest(e) {
                    const {
                        call: t,
                        formatters: s
                    } = e;
                    return async e => {
                        s && Array.isArray(e) && s.forEach(((t, s) => {
                            t && (e[s] = t(e[s]))
                        }));
                        const a = {
                            call: t,
                            params: e || []
                        };
                        return (await this.communicator.send(n.Methods.rpcCall, a)).data
                    }
                }
            }
        },
        85822: function(e, t, s) {
            var a = this && this.__createBinding || (Object.create ? function(e, t, s, a) {
                    void 0 === a && (a = s), Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: function() {
                            return t[s]
                        }
                    })
                } : function(e, t, s, a) {
                    void 0 === a && (a = s), e[a] = t[s]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || a(t, e, s)
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSDKVersion = void 0;
            const r = i(s(15381));
            t.default = r.default, n(s(15381), t), n(s(73302), t), n(s(92628), t), n(s(36750), t);
            var o = s(56036);
            Object.defineProperty(t, "getSDKVersion", {
                enumerable: !0,
                get: function() {
                    return o.getSDKVersion
                }
            })
        },
        26016: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Safe = void 0;
            const a = s(92628);
            t.Safe = class {
                constructor(e) {
                    this.communicator = e
                }
                async getInfo() {
                    return (await this.communicator.send(a.Methods.getSafeInfo, void 0)).data
                }
                async experimental_getBalances({
                    currency: e = "usd"
                } = {}) {
                    return (await this.communicator.send(a.Methods.getSafeBalances, {
                        currency: e
                    })).data
                }
            }
        },
        15381: function(e, t, s) {
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = a(s(55621)),
                i = s(44931),
                r = s(60770),
                o = s(26016);
            t.default = class {
                constructor(e = {}) {
                    const {
                        whitelistedDomains: t = null,
                        debug: s = !1
                    } = e;
                    this.communicator = new n.default(t, s), this.eth = new r.Eth(this.communicator), this.txs = new i.TXs(this.communicator), this.safe = new o.Safe(this.communicator)
                }
            }
        },
        44931: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TXs = void 0;
            const a = s(92628);
            t.TXs = class {
                constructor(e) {
                    this.communicator = e
                }
                async getBySafeTxHash(e) {
                    if (!e) throw new Error("Invalid safeTxHash");
                    return (await this.communicator.send(a.Methods.getTxBySafeTxHash, {
                        safeTxHash: e
                    })).data
                }
                async send({
                    txs: e,
                    params: t
                }) {
                    if (!e || !e.length) throw new Error("No transactions were passed");
                    const s = {
                        txs: e,
                        params: t
                    };
                    return (await this.communicator.send(a.Methods.sendTransactions, s)).data
                }
            }
        },
        23672: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Operation = void 0,
                function(e) {
                    e[e.CALL = 0] = "CALL", e[e.DELEGATE = 1] = "DELEGATE"
                }(t.Operation || (t.Operation = {}))
        },
        73302: function(e, t, s) {
            var a = this && this.__createBinding || (Object.create ? function(e, t, s, a) {
                    void 0 === a && (a = s), Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: function() {
                            return t[s]
                        }
                    })
                } : function(e, t, s, a) {
                    void 0 === a && (a = s), e[a] = t[s]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || a(t, e, s)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(s(24644), t), n(s(49741), t), n(s(23672), t), n(s(52350), t)
        },
        52350: function(e, t, s) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            s(92628)
        },
        49741: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        24644: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        56036: function(e, t, s) {
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSDKVersion = void 0;
            const n = a(s(72010));
            t.getSDKVersion = () => n.default.version.slice(0, 5)
        },
        40188: function(e, t, s) {
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SafeAppConnector = void 0;
            const n = s(26939),
                i = a(s(85822)),
                r = s(96844);
            class o extends n.AbstractConnector {
                constructor() {
                    super(...arguments), this.sdk = new i.default
                }
                async activate() {
                    if (!(await this.isSafeApp())) throw new Error("The app is loaded outside safe context");
                    return {
                        provider: await this.getProvider(),
                        chainId: await this.getChainId(),
                        account: await this.getAccount()
                    }
                }
                async getSafeInfo() {
                    return this.safe || (this.safe = await this.sdk.safe.getInfo()), this.safe
                }
                async getProvider() {
                    if (!this.provider) {
                        const e = await this.getSafeInfo();
                        this.provider = new r.SafeAppProvider(e, this.sdk)
                    }
                    return this.provider
                }
                async getChainId() {
                    return (await this.getProvider()).chainId
                }
                async getAccount() {
                    return (await this.getSafeInfo()).safeAddress
                }
                deactivate() {}
                async isSafeApp() {
                    return !!(await Promise.race([this.getSafeInfo(), new Promise((e => setTimeout(e, 300)))]))
                }
            }
            t.SafeAppConnector = o
        },
        15495: function(e, t, s) {
            t.$y = t.P = void 0;
            var a = s(40188);
            Object.defineProperty(t, "P", {
                enumerable: !0,
                get: function() {
                    return a.SafeAppConnector
                }
            });
            var n = s(17546);
            Object.defineProperty(t, "$y", {
                enumerable: !0,
                get: function() {
                    return n.useSafeAppConnection
                }
            })
        },
        17546: function(e, t, s) {
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useSafeAppConnection = void 0;
            const n = a(s(67294)),
                i = s(77044);
            t.useSafeAppConnection = function(e) {
                const {
                    activate: t,
                    active: s
                } = i.useWeb3React(), [a, r] = n.default.useState(!1);
                return n.default.useEffect((() => {
                    e.isSafeApp().then((s => {
                        s ? t(e, void 0, !0).catch((() => {
                            r(!0)
                        })) : r(!0)
                    }))
                }), [t]), n.default.useEffect((() => {
                    s && r(!0)
                }), [s]), a
            }
        },
        24640: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s(15495),
                n = new a.P;

            function i() {
                (0, a.$y)(n);
                return null
            }
        },
        72010: function(e) {
            e.exports = JSON.parse('{"name":"@gnosis.pm/safe-apps-sdk","version":"4.2.0","description":"SDK developed to integrate third-party apps with Safe-Multisig app.","main":"dist/src/index.js","typings":"dist/src/index.d.ts","_files":["dist/**/*","README.md"],"keywords":["Gnosis","sdk","apps"],"scripts":{"test":"jest","format-dist":"sed -i \'s/\\"files\\":/\\"_files\\":/\' dist/package.json","build":"yarn rimraf dist && tsc && yarn format-dist","lint":"tslint -p tsconfig.json"},"author":"Gnosis (https://gnosis.io)","license":"MIT","dependencies":{},"devDependencies":{"@types/jest":"^26.0.24","@types/node":"^16.4.10","rimraf":"^3.0.2"},"repository":{"type":"git","url":"git+https://github.com/gnosis/safe-apps-sdk.git"},"bugs":{"url":"https://github.com/gnosis/safe-apps-sdk/issues"},"homepage":"https://github.com/gnosis/safe-apps-sdk#readme","publishConfig":{"access":"public"}}')
        }
    }
]);