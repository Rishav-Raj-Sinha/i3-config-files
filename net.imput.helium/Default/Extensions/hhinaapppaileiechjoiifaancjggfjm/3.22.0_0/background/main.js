const Ps = "Disallowed", We = "Disabled", Ns = "Error", Os = "Ignored", Cs = "Loading", Is = "Playing", Us = "Paused", Ms = "Scrobbled", _s = "Unknown", J = "Unsupported", Ds = "Loved", zs = "Unloved";
function Je(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, Bs = ne.exports, ze;
function Fs() {
  return ze || (ze = 1, (function(t, e) {
    (function(s, a) {
      a(t);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Bs, function(s) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        s.exports = globalThis.browser;
      else {
        const a = "The message port closed before a response was received.", r = (n) => {
          const g = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(g).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class p extends WeakMap {
            constructor(i, h = void 0) {
              super(h), this.createItem = i;
            }
            get(i) {
              return this.has(i) || this.set(i, this.createItem(i)), super.get(i);
            }
          }
          const j = (c) => c && typeof c == "object" && typeof c.then == "function", S = (c, i) => (...h) => {
            n.runtime.lastError ? c.reject(new Error(n.runtime.lastError.message)) : i.singleCallbackArg || h.length <= 1 && i.singleCallbackArg !== !1 ? c.resolve(h[0]) : c.resolve(h);
          }, v = (c) => c == 1 ? "argument" : "arguments", M = (c, i) => function(w, ...y) {
            if (y.length < i.minArgs)
              throw new Error(`Expected at least ${i.minArgs} ${v(i.minArgs)} for ${c}(), got ${y.length}`);
            if (y.length > i.maxArgs)
              throw new Error(`Expected at most ${i.maxArgs} ${v(i.maxArgs)} for ${c}(), got ${y.length}`);
            return new Promise((k, m) => {
              if (i.fallbackToNoCallback)
                try {
                  w[c](...y, S({
                    resolve: k,
                    reject: m
                  }, i));
                } catch (o) {
                  console.warn(`${c} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, o), w[c](...y), i.fallbackToNoCallback = !1, i.noCallback = !0, k();
                }
              else i.noCallback ? (w[c](...y), k()) : w[c](...y, S({
                resolve: k,
                reject: m
              }, i));
            });
          }, ee = (c, i, h) => new Proxy(i, {
            apply(w, y, k) {
              return h.call(y, c, ...k);
            }
          });
          let B = Function.call.bind(Object.prototype.hasOwnProperty);
          const _ = (c, i = {}, h = {}) => {
            let w = /* @__PURE__ */ Object.create(null), y = {
              has(m, o) {
                return o in c || o in w;
              },
              get(m, o, u) {
                if (o in w)
                  return w[o];
                if (!(o in c))
                  return;
                let d = c[o];
                if (typeof d == "function")
                  if (typeof i[o] == "function")
                    d = ee(c, c[o], i[o]);
                  else if (B(h, o)) {
                    let F = M(o, h[o]);
                    d = ee(c, c[o], F);
                  } else
                    d = d.bind(c);
                else if (typeof d == "object" && d !== null && (B(i, o) || B(h, o)))
                  d = _(d, i[o], h[o]);
                else if (B(h, "*"))
                  d = _(d, i[o], h["*"]);
                else
                  return Object.defineProperty(w, o, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return c[o];
                    },
                    set(F) {
                      c[o] = F;
                    }
                  }), d;
                return w[o] = d, d;
              },
              set(m, o, u, d) {
                return o in w ? w[o] = u : c[o] = u, !0;
              },
              defineProperty(m, o, u) {
                return Reflect.defineProperty(w, o, u);
              },
              deleteProperty(m, o) {
                return Reflect.deleteProperty(w, o);
              }
            }, k = Object.create(c);
            return new Proxy(k, y);
          }, D = (c) => ({
            addListener(i, h, ...w) {
              i.addListener(c.get(h), ...w);
            },
            hasListener(i, h) {
              return i.hasListener(c.get(h));
            },
            removeListener(i, h) {
              i.removeListener(c.get(h));
            }
          }), se = new p((c) => typeof c != "function" ? c : function(h) {
            const w = _(h, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            c(w);
          }), te = new p((c) => typeof c != "function" ? c : function(h, w, y) {
            let k = !1, m, o = new Promise((G) => {
              m = function(O) {
                k = !0, G(O);
              };
            }), u;
            try {
              u = c(h, w, m);
            } catch (G) {
              u = Promise.reject(G);
            }
            const d = u !== !0 && j(u);
            if (u !== !0 && !d && !k)
              return !1;
            const F = (G) => {
              G.then((O) => {
                y(O);
              }, (O) => {
                let pe;
                O && (O instanceof Error || typeof O.message == "string") ? pe = O.message : pe = "An unexpected error occurred", y({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: pe
                });
              }).catch((O) => {
                console.error("Failed to send onMessage rejected reply", O);
              });
            };
            return F(d ? u : o), !0;
          }), ae = ({
            reject: c,
            resolve: i
          }, h) => {
            n.runtime.lastError ? n.runtime.lastError.message === a ? i() : c(new Error(n.runtime.lastError.message)) : h && h.__mozWebExtensionPolyfillReject__ ? c(new Error(h.message)) : i(h);
          }, re = (c, i, h, ...w) => {
            if (w.length < i.minArgs)
              throw new Error(`Expected at least ${i.minArgs} ${v(i.minArgs)} for ${c}(), got ${w.length}`);
            if (w.length > i.maxArgs)
              throw new Error(`Expected at most ${i.maxArgs} ${v(i.maxArgs)} for ${c}(), got ${w.length}`);
            return new Promise((y, k) => {
              const m = ae.bind(null, {
                resolve: y,
                reject: k
              });
              w.push(m), h.sendMessage(...w);
            });
          }, ie = {
            devtools: {
              network: {
                onRequestFinished: D(se)
              }
            },
            runtime: {
              onMessage: D(te),
              onMessageExternal: D(te),
              sendMessage: re.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: re.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, l = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return g.privacy = {
            network: {
              "*": l
            },
            services: {
              "*": l
            },
            websites: {
              "*": l
            }
          }, _(n, ie, g);
        };
        s.exports = r(chrome);
      }
    });
  })(ne)), ne.exports;
}
var qs = Fs();
const b = /* @__PURE__ */ Je(qs), Ve = "*", $s = "[hidden]", Hs = 50;
function U(t, e = "log") {
  const s = console[e];
  if (typeof s != "function")
    throw new TypeError(`Unknown log type: ${e}`);
  s(t);
}
function Be(t, e) {
  if (t && e) {
    const s = Ve.repeat(t.length);
    return e.replace(t, s);
  }
  return e;
}
function Qe(t) {
  return t ? typeof t == "string" ? Ve.repeat(t.length) : Array.isArray(t) ? `[Array(${t.length})]` : $s : t === null ? "null" : t?.toString() ?? "undefined";
}
function z(t, e) {
  return new Promise((s, a) => {
    const r = setTimeout(() => {
      a(new Error("promise timeout"));
    }, t);
    e.then(
      (n) => {
        clearTimeout(r), s(n);
      },
      (n) => {
        clearTimeout(r), a(n);
      }
    );
  });
}
function Gs() {
  return !!(!self.window || (location.href.startsWith("safari-web-extension") || location.href.startsWith("moz-extension")) && location.href.endsWith("generated_background_page.html"));
}
async function Ye(t) {
  const e = await fetch(t, {
    method: "GET"
  });
  return e.ok ? e.text() : null;
}
class Ks {
  events = /* @__PURE__ */ new Map();
  /**
  * Attach event listener
  *
  * @param event - event to listen to
  * @param fn - callback function
  */
  on(e, s) {
    const a = this.events.get(e) || [];
    this.events.set(e, [...a, s]);
  }
  /**
  * Disconnect event listener
  *
  * @param event - event to disconnect from
  * @param fn - callback function to disconnect
  */
  off(e, s) {
    const a = this.events.get(e) || [];
    this.events.set(
      e,
      a.filter((r) => r !== s)
    );
  }
  /**
  * Emit event
  *
  * @param event - event type to emit
  * @param args - arguments to pass to callback functions
  */
  emit(e, ...s) {
    for (const a of this.events.get(e) || [])
      a(...s);
  }
}
function Ze(t) {
  const e = Object.entries(t).reduce(
    (s, [a, r]) => (typeof r == "string" ? s[a] = r : typeof r == "number" ? s[a] = r.toString() : (typeof r > "u" || r === null) && (s[a] = ""), s),
    {}
  );
  return new URLSearchParams(e).toString();
}
async function Ws() {
  return (await b.runtime.getPlatformInfo()).os;
}
async function Js() {
  return (await b.windows.getCurrent()).state === "fullscreen";
}
function Fe(t) {
  b.tabs.update(t, { active: !0 });
}
function Vs() {
  return b.runtime.getManifest().version;
}
function q(t, e) {
  return b.i18n.getMessage(t, e);
}
async function N(t, e) {
  return b.tabs.sendMessage(t, e);
}
function E(t) {
  return (e) => e(t);
}
function Xe(...t) {
  b.runtime.onMessage.addListener(
    (e, s) => {
      let a = !1;
      for (const r of t) {
        const n = r((g) => {
          if (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            e.type === g.type
          )
            return a = !0, g.fn(
              // eslint-disable-next-line
              e.payload,
              s
            );
        });
        if (a)
          return Promise.resolve(n);
      }
    }
  );
}
async function Qs(t) {
  return b.runtime.sendMessage(t);
}
async function Ys(t) {
  return b.runtime.sendMessage(t);
}
const Zs = Promise.resolve().then(() => vt);
class Xs {
  queue = [];
  isActive = !1;
  shouldPrint = Zs.then(
    (e) => e.getOption(e.DEBUG_LOGGING_ENABLED)
  );
  /**
  * Enqueue a log message to be printed.
  * @param text - Debug message
  * @param logType - Log type
  */
  push(e, s) {
    this.queue.push({ text: e, logType: s }), this.start();
  }
  /**
  * Process the queue to print logs in order.
  */
  async start() {
    if (!this.isActive) {
      this.isActive = !0;
      try {
        for (let e = 0; e < 100 && this.queue.length > 0; e++) {
          const s = this.queue.shift();
          if (s && await this.shouldPrint) {
            const a = console[s.logType];
            if (typeof a != "function")
              throw new TypeError(
                `Unknown log type: ${s.logType}`
              );
            const r = `Web Scrobbler: ${s.text?.toString()}`;
            a(r);
          }
        }
        this.isActive = !1;
      } catch {
        this.isActive = !1;
      }
    }
  }
}
const et = new Xs();
function R(t, e = "log") {
  et.push(t, e);
}
var f = /* @__PURE__ */ ((t) => (t.RESULT_OK = "ok", t.RESULT_IGNORE = "ignored", t.ERROR_AUTH = "error-auth", t.ERROR_OTHER = "error-other", t))(f || {});
function st(t, e) {
  for (const s of t)
    if (s[e] === f.RESULT_IGNORE)
      return "ignored";
  for (const s of t)
    if (s[e] !== f.RESULT_OK)
      return "error";
  return "success";
}
const qe = 3e3;
class es {
  // V extends DataModels[K], T extends Record<K, V>
  storage;
  namespace;
  requests = [];
  autoIncrement = 0;
  emitter = new Ks();
  /**
  * interval to ensure the locking doesnt get stuck permanently
  */
  interval = setInterval(() => {
    this.unlock();
  }, qe);
  /**
  * @param storage - StorageArea object
  * @param namespace - Storage namespace
  */
  constructor(e, s) {
    this.storage = e, this.namespace = s;
  }
  unlock() {
    this.requests = this.requests.slice(1), this.emitter.emit("updateLock", this.requests[0]), clearInterval(this.interval), this.interval = setInterval(() => {
      this.unlock();
    }, qe);
  }
  /**
  * Read data from storage, don't respect locking
  * @returns Storage data
  */
  async get() {
    const e = await this.storage.get();
    return e && this.namespace in e ? e[this.namespace] : null;
  }
  /**
  * Read data from storage, respect locking
  * @returns Storage data
  */
  async getLocking() {
    return await new Promise((s) => {
      const a = this.autoIncrement++;
      if (this.requests.push(a), this.requests[0] === a) {
        s(!0);
        return;
      }
      const r = (n) => {
        n === a && (s(!0), this.emitter.off("updateLock", r));
      };
      this.emitter.on("updateLock", r);
    }), this.get();
  }
  /**
  * Save data to storage, don't lock storage
  * @param data - Data to save
  */
  async set(e) {
    const s = {
      [this.namespace]: e
    };
    await this.storage.set(s);
  }
  /**
  * Save data to storage, and lock storage
  * @param data - Data to save
  */
  async setLocking(e) {
    try {
      await this.set(e);
    } catch (s) {
      R(s, "warn");
    }
    this.unlock();
  }
  /**
  * Extend saved data by given one.
  * @param data - Data to add
  */
  async update(e) {
    const s = await this.getLocking(), a = Object.assign(s ?? {}, e);
    await this.setLocking(a);
  }
  /**
  * Log storage data to console output.
  * @param hiddenKeys - Array of keys should be hidden
  */
  /* istanbul ignore next */
  async debugLog(e = []) {
    const s = await this.get(), r = JSON.stringify(s, (n, g) => e.includes(n) ? Qe(g) : g, 2);
    location?.protocol === "chrome-extension:" && R(`storage.${this.namespace} = ${r}`, "info");
  }
  /**
  * Clear storage.
  */
  async clear() {
    await this.storage.remove(this.namespace);
  }
}
const T = 0, $ = 1, ss = "Connectors", ts = "ConnectorsOverrideOptions", as = "customPatterns", rs = "Notifications", tt = "BlockedTags", at = "LocalCache", is = "NativeScrobblerNotification", os = "Blocklists", ns = "Options", ve = "StateManagement", ke = "DisabledTabs", ls = "RegexEdits", we = "ScrobbleCache", cs = "Core", rt = {
  [ss]: $,
  [ts]: $,
  [as]: $,
  [rs]: $,
  [ns]: $,
  LastFM: T,
  LibreFM: T,
  ListenBrainz: T,
  Maloja: T,
  Webhook: T,
  Pleroma: T,
  [is]: T,
  [os]: T,
  [at]: T,
  [ls]: T,
  [we]: T,
  [tt]: T,
  [cs]: T,
  [ve]: T,
  [ke]: T
};
function L(t) {
  switch (rt[t]) {
    case $:
      return ot(t);
    case T:
      return Se(t);
    default:
      throw new Error(`Unknown storage namespace: ${t}`);
  }
}
function it(t) {
  return Se(t);
}
function Se(t) {
  const e = b.storage.local;
  return new es(e, t);
}
function ot(t) {
  const e = b.storage.sync || b.storage.local;
  return new es(e, t);
}
const Re = [
  {
    label: "YouTube",
    matches: ["*://www.youtube.com/*", "*://m.youtube.com/*"],
    js: "youtube.js",
    id: "youtube",
    usesBlocklist: !0
  },
  {
    label: "MySpace",
    matches: ["*://myspace.com/*"],
    js: "myspace.js",
    id: "myspace"
  },
  {
    label: "Bandcamp Daily",
    matches: ["*://daily.bandcamp.com/*"],
    js: "bandcamp-daily.js",
    id: "bandcamp-daily"
  },
  {
    label: "Bandcamp Embed",
    matches: ["*://*.bandcamp.com/EmbeddedPlayer/*"],
    js: "bandcamp-embed.js",
    id: "bandcamp-embed",
    allFrames: !0
  },
  {
    label: "Bandcamp",
    matches: ["*://*.bandcamp.com/*", "*://bandcamp.com/*"],
    js: "bandcamp.js",
    id: "bandcamp"
  },
  {
    label: "BNDCMPR",
    matches: ["*://bndcmpr.co/*"],
    js: "bndcmpr.js",
    id: "bndcmpr",
    allFrames: !0
  },
  {
    label: "Buy Music Club",
    matches: ["*://www.buymusic.club/*"],
    js: "buymusicclub.js",
    id: "buymusicclub"
  },
  {
    label: "Pandora",
    matches: ["*://www.pandora.com/*"],
    js: "pandora.js",
    id: "pandora"
  },
  {
    label: "Pakartot",
    matches: ["*://www.pakartot.lt/*"],
    js: "pakartot.js",
    id: "pakartot"
  },
  {
    label: "Deezer",
    matches: ["*://www.deezer.com/*"],
    js: "deezer.js",
    id: "deezer"
  },
  {
    label: "SoundCloud",
    matches: ["*://soundcloud.com/*", "*://m.soundcloud.com/*"],
    js: "soundcloud.js",
    id: "soundcloud"
  },
  {
    label: "Amazon Music",
    matches: [
      "*://music.amazon.*/*",
      "*://www.amazon.*/gp/dmusic/cloudplayer/*"
    ],
    js: "amazon.js",
    id: "amazon"
  },
  {
    label: "Amazon Echo",
    matches: ["*://alexa.amazon.*/spa/*"],
    js: "amazon-alexa.js",
    id: "amazon-alexa"
  },
  {
    label: "Radio Vas3k Club",
    matches: ["https://radio.vas3k.club/*"],
    js: "vas3kradio.js",
    id: "vas3kradio"
  },
  {
    label: "VK",
    matches: ["*://vk.ru/*", "*://vk.com/*"],
    js: "vk.js",
    id: "vk"
  },
  {
    label: "Megalyrics",
    matches: ["*://megalyrics.ru/*"],
    js: "megalyrics.js",
    id: "megalyrics"
  },
  {
    label: "iHeart",
    matches: ["*://*.iheart.com/*"],
    js: "iheart.js",
    id: "iheart"
  },
  {
    label: "Indie Shuffle",
    matches: ["*://www.indieshuffle.com/*"],
    js: "indieshuffle.js",
    id: "indieshuffle"
  },
  {
    label: "Tuba.FM",
    matches: ["*://fm.tuba.pl/*"],
    js: "tubafm.js",
    id: "tubafm"
  },
  {
    label: "Spotify Embed",
    matches: ["*://open.spotify.com/embed/*"],
    js: "spotify-embed.js",
    id: "spotify-embed",
    allFrames: !0
  },
  {
    label: "Spotify",
    matches: ["*://open.spotify.com/*"],
    js: "spotify.js",
    id: "spotify",
    hasNativeScrobbler: !0
  },
  {
    label: "plug.dj",
    matches: ["*://plug.dj/*"],
    js: "plug.dj.js",
    id: "plug.dj"
  },
  {
    label: "Dandelion Radio",
    matches: ["*://www.dandelionradio.com/player.htm"],
    js: "dandelionradio.js",
    id: "dandelionradio"
  },
  {
    label: "HillyDilly",
    matches: ["*://www.hillydilly.com/*"],
    js: "hillydilly.js",
    id: "hillydilly"
  },
  {
    label: "8tracks",
    matches: ["*://8tracks.com/*"],
    js: "8tracks.js",
    id: "8tracks"
  },
  {
    label: "SoGreatandPowerful",
    matches: ["*://sogreatandpowerful.com/*"],
    js: "sogreatandpowerful.js",
    id: "sogreatandpowerful"
  },
  {
    label: "Radio Cidade",
    matches: [
      "*://radiocidade.fm/player/*",
      "*://play.radiomania.com.br/*",
      "*://*.melodia.com.br/*",
      "*://jb.fm/player/*"
    ],
    js: "radiocidade.js",
    id: "radiocidade"
  },
  {
    label: "Radio Nova",
    matches: ["*://www.nova.fr/*"],
    js: "nova.js",
    id: "nova"
  },
  {
    label: "Radioplus",
    matches: ["*://www.radioplus.be/*", "*://radioplus.be/*"],
    js: "radioplus.js",
    id: "radioplus"
  },
  {
    label: "Радио Premium",
    matches: ["*://rpfm.ru/*"],
    js: "rpfm.js",
    id: "rpfm"
  },
  {
    label: "Douban.FM",
    matches: ["*://douban.fm/*", "*://fm.douban.fm/*"],
    js: "douban.fm.js",
    id: "douban.fm"
  },
  {
    label: "Focus@Will",
    matches: ["*://www.focusatwill.com/*"],
    js: "focusatwill.js",
    id: "focusatwill"
  },
  {
    label: "Subphonic (owncloud plugin)",
    matches: ["*://*/*/apps/subphonic/minisub/*"],
    js: "subphonic.js",
    id: "subphonic"
  },
  {
    label: "Nextcloud music",
    matches: ["*://*/apps/music/*"],
    js: "nextcloud-music.js",
    id: "nextcloud-music"
  },
  {
    label: "Digitally Imported",
    matches: ["*://www.di.fm/*"],
    js: "radiotunes.js",
    id: "di"
  },
  {
    label: "BBC Sounds",
    matches: ["*://*.bbc.co.uk/*"],
    js: "bbc-sounds.js",
    id: "bbc-sounds"
  },
  {
    label: "Gaana",
    matches: ["*://gaana.com/*"],
    js: "gaana.js",
    id: "gaana"
  },
  {
    label: "Яндекс.Музыка",
    matches: [
      "*://music.yandex.ru/*",
      "*://music.yandex.by/*",
      "*://music.yandex.kz/*",
      "*://music.yandex.ua/*",
      "*://music.yandex.com/*"
    ],
    js: "yandex-music.js",
    id: "yandex-music"
  },
  {
    label: "Plex",
    matches: [
      "*://*32400/web/*",
      "*://plex.tv/web/*",
      "*://*.plex.tv/web/*",
      "*://*.plex.tv/desktop*"
    ],
    js: "plex.js",
    id: "plex"
  },
  {
    label: "TuneIn",
    matches: ["*://tunein.com/*"],
    js: "tunein.js",
    id: "tunein"
  },
  {
    label: "Mixcloud",
    matches: ["*://*.mixcloud.com/*"],
    js: "mixcloud.js",
    id: "mixcloud"
  },
  {
    label: "ReverbNation",
    matches: ["*://www.reverbnation.com/*"],
    js: "reverbnation.js",
    id: "reverbnation"
  },
  {
    label: "NRK Radio",
    matches: ["*://radio.nrk.no/*"],
    js: "nrk-radio.js",
    id: "nrk-radio"
  },
  {
    label: "Internet Archive",
    matches: ["*://archive.org/details/*"],
    js: "archive.js",
    id: "archive"
  },
  {
    label: "Odnoklassniki",
    matches: ["*://odnoklassniki.ru/*", "*://ok.ru/*"],
    js: "odnoklassniki.js",
    id: "odnoklassniki"
  },
  {
    label: "Overcast",
    matches: ["*://overcast.fm/*"],
    js: "overcast.js",
    id: "overcast"
  },
  {
    label: "Online Radio Box",
    matches: ["*://onlineradiobox.com/*", "*://p.onlineradiobox.com/*"],
    js: "onlineradiobox.js",
    id: "onlineradiobox"
  },
  {
    label: "163 Music",
    matches: ["*://music.163.com/*"],
    js: "163-music.js",
    id: "163-music"
  },
  {
    label: "Ambient Sleeping Pill",
    matches: ["*://ambientsleepingpill.com/"],
    js: "ambientsleepingpill.js",
    id: "ambientsleepingpill"
  },
  {
    label: "a.m. ambient",
    matches: ["*://amambient.com/"],
    js: "ambientsleepingpill.js",
    id: "amambient"
  },
  {
    label: "Tidal",
    matches: ["*://tidal.com/*"],
    js: "tidal.js",
    id: "tidal"
  },
  {
    label: "Hype Machine Featured Albums",
    matches: ["*://hypem.com/album/*"],
    js: "hypem-albums.js",
    id: "hypem-premieres"
  },
  {
    label: "Hype Machine",
    matches: ["*://hypem.com/*"],
    js: "hypem.js",
    id: "hypem"
  },
  {
    label: "Radionomy",
    matches: ["*://www.radionomy.com/*"],
    js: "radionomy.js",
    id: "radionomy"
  },
  {
    label: "J1 Radio",
    matches: [
      "*://www.j1fm.tokyo/player/*",
      "*://www.j1fm.tokyo/michi/player/*"
    ],
    js: "aiircom.js",
    id: "j1-radio"
  },
  {
    label: "JazzAndRain",
    matches: ["*://*.jazzandrain.com/*"],
    js: "jazzandrain.js",
    id: "jazzandrain"
  },
  {
    label: "RelaxingBeats",
    matches: ["*://*.relaxingbeats.com/*"],
    js: "jazzandrain.js",
    id: "relaxingbeats"
  },
  {
    label: "EpicMusicTime",
    matches: ["*://*.epicmusictime.com/*"],
    js: "jazzandrain.js",
    id: "epicmusictime"
  },
  {
    label: "AccuJazz",
    matches: ["*://www.accuradio.com/pop_player/accujazz/*"],
    js: "accujazz.js",
    id: "accujazz"
  },
  {
    label: "AccuRadio",
    matches: ["*://www.accuradio.com/*"],
    js: "accuradio.js",
    id: "accuradio"
  },
  {
    label: "Imusic.am",
    matches: ["*://imusic.am/*"],
    js: "imusic.am.js",
    id: "imusic.am"
  },
  {
    label: "Earbits",
    matches: ["*://www.earbits.com/*"],
    js: "earbits.js",
    id: "earbits"
  },
  {
    label: "Player.fm",
    matches: ["*://player.fm/*"],
    js: "player.fm.js",
    id: "player.fm"
  },
  {
    label: "Sound Test",
    matches: ["*://sndtst.com/*"],
    js: "sndtst.js",
    id: "sndtst"
  },
  {
    label: "RadioTunes",
    matches: ["*://www.radiotunes.com/*"],
    js: "radiotunes.js",
    id: "radiotunes"
  },
  {
    label: "RockRadio",
    matches: ["*://www.rockradio.com/*"],
    js: "radiotunes.js",
    id: "rockradio"
  },
  {
    label: "ClassicalRadio",
    matches: ["*://www.classicalradio.com/*"],
    js: "radiotunes.js",
    id: "classicalradio"
  },
  {
    label: "Audacy",
    matches: ["*://www.audacy.com/*"],
    js: "audacy.js",
    id: "audacy"
  },
  {
    label: "Audius",
    matches: ["*://audius.co/*"],
    js: "audius.js",
    id: "audius"
  },
  {
    label: "GetWorkDoneMusic",
    matches: ["*://*.getworkdonemusic.com/*"],
    js: "getworkdonemusic.js",
    id: "getworkdonemusic"
  },
  {
    label: "Jamendo",
    matches: ["*://www.jamendo.com/*"],
    js: "jamendo.js",
    id: "jamendo"
  },
  {
    label: "Bandzone.cz",
    matches: ["*://bandzone.cz/*"],
    js: "bandzone.cz.js",
    id: "bandzone.cz"
  },
  {
    label: "Music Player for Google Drive",
    matches: ["*://www.driveplayer.com/*"],
    js: "driveplayer.js",
    id: "driveplayer"
  },
  {
    label: "Kodi",
    js: "kodi.js",
    id: "kodi"
  },
  {
    label: "Superplayer",
    matches: ["*://www.superplayer.fm/*"],
    js: "superplayer.js",
    id: "superplayer"
  },
  {
    label: "RMFON",
    matches: ["*://www.rmfon.pl/*"],
    js: "rmfon.js",
    id: "rmfon"
  },
  {
    label: "Radio 357",
    matches: ["*://radio357.pl/*"],
    js: "radio357.js",
    id: "radio357"
  },
  {
    label: "JazzRadio",
    matches: ["*://www.jazzradio.com/*"],
    js: "radiotunes.js",
    id: "jazzradio"
  },
  {
    label: "Zen Radio",
    matches: ["*://www.zenradio.com/*"],
    js: "radiotunes.js",
    id: "zenradio"
  },
  {
    label: "SomaFM",
    matches: ["*://somafm.com/player/*", "*://somafm.com/player24/*"],
    js: "somafm.js",
    id: "somafm"
  },
  {
    label: "Free Music Archive",
    matches: ["*://*.freemusicarchive.org/*"],
    js: "freemusicarchive.js",
    id: "freemusicarchive"
  },
  {
    label: "Reddit Music Player",
    matches: ["*://musicplayer.io/"],
    js: "redditmusicplayer.js",
    id: "redditmusicplayer"
  },
  {
    label: "Новое Радио",
    matches: ["*://www.novoeradio.by/*"],
    js: "novoeradio.js",
    id: "novoeradio"
  },
  {
    label: "Radio Paradise",
    matches: ["*://radioparadise.com/*"],
    js: "radioparadise.js",
    id: "radioparadise",
    allFrames: !0
  },
  {
    label: "Beatport",
    matches: ["*://www.beatport.com/*"],
    js: "beatport.js",
    id: "beatport"
  },
  {
    label: "Beeline Music",
    matches: ["*://music.beeline.ru/*"],
    js: "beeline-music.js",
    id: "beeline-music"
  },
  {
    label: "wavo",
    matches: ["*://wavo.me/*"],
    js: "wavo.js",
    id: "wavo"
  },
  {
    label: "FluxFM Berlin",
    matches: ["*://www.fluxfm.de/*"],
    js: "fluxfm.js",
    id: "fluxfm"
  },
  {
    label: "Noise FM",
    matches: ["*://noisefm.ru/*", "*://en.noisefm.ru/*"],
    js: "noisefm.js",
    id: "noisefm",
    allFrames: !0
  },
  {
    label: "WWOZ",
    matches: ["*://www.wwoz.org/listen/player/*"],
    js: "wwoz.js",
    id: "wwoz"
  },
  {
    label: "Sonerezh",
    matches: ["*://sonerezh.*/*", "*://*/*sonerezh*"],
    js: "sonerezh.js",
    id: "sonerezh"
  },
  {
    label: "Youradio",
    matches: ["*://www.youradio.cz/*"],
    js: "youradio.js",
    id: "youradio"
  },
  {
    label: "GPMusic",
    matches: ["*://player.gpmusic.co/*"],
    js: "gpmusic.js",
    id: "gpmusic"
  },
  {
    label: "Nightwave Plaza",
    matches: ["*://plaza.one/*"],
    js: "plaza.js",
    id: "plaza"
  },
  {
    label: "Retrowave",
    matches: ["*://retrowave.ru/*"],
    js: "retrowave.js",
    id: "retrowave"
  },
  {
    label: "Genie",
    matches: ["*://www.genie.co.kr/player/fPlayer*"],
    js: "genie.js",
    id: "genie"
  },
  {
    label: "Bugs",
    matches: ["*://music.bugs.co.kr/newPlayer*"],
    js: "bugs.js",
    id: "bugs"
  },
  {
    label: "openfm",
    matches: ["*://open.fm/*"],
    js: "openfm.js",
    id: "openfm"
  },
  {
    label: "Playmoss",
    matches: ["*://playmoss.com/*"],
    js: "playmoss.js",
    id: "playmoss"
  },
  {
    label: "Apidog",
    matches: ["*://apidog.ru/*"],
    js: "apidog.js",
    id: "apidog"
  },
  {
    label: "Pinguin Radio",
    matches: ["*://pinguinradio.com/*"],
    js: "pinguinradio.js",
    id: "pinguinradio"
  },
  {
    label: "JioSaavn",
    matches: ["*://www.jiosaavn.com/*"],
    js: "jiosaavn.js",
    id: "jiosaavn"
  },
  {
    label: "Anghami",
    matches: ["*://*.anghami.com/*"],
    js: "anghami.js",
    id: "anghami"
  },
  {
    label: "Mail.ru Music",
    matches: ["*://my.mail.ru/music", "*://my.mail.ru/music/*"],
    js: "mail.ru.js",
    id: "mail.ru"
  },
  {
    label: "Emby/Jellyfin",
    matches: ["*://*8096/web/*", "*://*8920/web/*", "*://app.emby.media/*"],
    js: "emby.js",
    id: "emby"
  },
  {
    label: "Freegal Music",
    matches: ["*://*.freegalmusic.com/*"],
    js: "freegalmusic.js",
    id: "freegalmusic"
  },
  {
    label: "hoopla",
    matches: ["*://www.hoopladigital.com/*"],
    js: "hoopladigital.js",
    id: "hoopladigital"
  },
  {
    label: "Amplify 817",
    matches: ["*://amplify817.org/*"],
    js: "musicat.js",
    id: "amplify817"
  },
  {
    label: "Capital City Records",
    matches: ["*://capitalcityrecords.ca/*"],
    js: "musicat.js",
    id: "capitalcityrecords"
  },
  {
    label: "Electric Lady Bird",
    matches: ["*://atxlibrary.musicat.co/*"],
    js: "musicat.js",
    id: "musicat-atxlibrary"
  },
  {
    label: "FlipSide",
    matches: ["*://flipside.apl.org/*"],
    js: "musicat.js",
    id: "apl-flipside"
  },
  {
    label: "HUM (Hear Utah Music)",
    matches: ["*://hum.slcpl.org/*"],
    js: "musicat.js",
    id: "slcpl-hum"
  },
  {
    label: "KDL Vibes",
    matches: ["*://vibes.kdl.org/*"],
    js: "musicat.js",
    id: "kdl-vibes"
  },
  {
    label: "Library Music Project",
    matches: ["*://librarymusicproject.com/*"],
    js: "musicat.js",
    id: "librarymusicproject"
  },
  {
    label: "MNspin",
    matches: ["*://hclib.musicat.co/*"],
    js: "musicat.js",
    id: "musicat-hclib"
  },
  {
    label: "Nashville BoomBox",
    matches: ["*://boombox.nashvillepubliclibrary.org/*"],
    js: "musicat.js",
    id: "nashville-library-boombox"
  },
  {
    label: "QC Beats",
    matches: ["*://qcbeats.org/*"],
    js: "musicat.js",
    id: "qcbeats"
  },
  {
    label: "Q-Dance",
    matches: ["*://www.q-dance.com/*"],
    js: "q-dance.js",
    id: "q-dance"
  },
  {
    label: "Sawdust City Sounds",
    matches: ["*://sawdustcitysounds.org/*"],
    js: "musicat.js",
    id: "sawdustcitysounds"
  },
  {
    label: "Seattle PlayBack",
    matches: ["*://playback.spl.org/*"],
    js: "musicat.js",
    id: "spl-playback"
  },
  {
    label: "STACKS",
    matches: ["*://stacks.carnegielibrary.org/*"],
    js: "musicat.js",
    id: "carnegielibrary-stacks"
  },
  {
    label: "Tracks Music Library",
    matches: ["*://tracksmusiclibrary.org/*"],
    js: "musicat.js",
    id: "tracksmusiclibrary"
  },
  {
    label: "Bay Beats",
    matches: ["*://baybeats.sfpl.org/*"],
    js: "musicat.js",
    id: "baybeats"
  },
  {
    label: "Monstercat",
    matches: ["*://www.monstercat.com/*", "*://player.monstercat.com/*"],
    js: "monstercat.js",
    id: "monstercat"
  },
  {
    label: "Listen.moe",
    matches: ["*://listen.moe/*"],
    js: "listen.moe.js",
    id: "listen.moe"
  },
  {
    label: "anime(bits)",
    matches: [
      "*://radio.animebits.moe/",
      "*://radio.animebits.moe/player/*"
    ],
    js: "animebits.js",
    id: "animebits"
  },
  {
    label: "Fair Price Music",
    matches: ["*://www.fairpricemusic.com/*"],
    js: "fairpricemusic.js",
    id: "fairpricemusic"
  },
  {
    label: "Radio ULTRA",
    matches: ["*://player.radioultra.ru/*"],
    js: "radioultra.js",
    id: "radioultra"
  },
  {
    label: "Наше Радио",
    matches: ["*://player.nashe.ru/*"],
    js: "radioultra.js",
    id: "nashe"
  },
  {
    label: "RockFM",
    matches: ["*://player.rockfm.ru/*"],
    js: "radioultra.js",
    id: "rockfm"
  },
  {
    label: "Radio JAZZ",
    matches: ["*://player.radiojazzfm.ru/*"],
    js: "radioultra.js",
    id: "radiojazzfm"
  },
  {
    label: "WO Streaming",
    matches: ["*://*player.wostreaming.net/*"],
    js: "wostreaming.js",
    id: "wostreaming"
  },
  {
    label: "Listen Live",
    matches: ["*://player.listenlive.co/*"],
    js: "listenlive.js",
    id: "listenlive"
  },
  {
    label: "Rayo",
    matches: [
      "*://hellorayo.co.uk/*/play/*",
      "*://hellorayo.co.uk/*/player/*"
    ],
    js: "planetradio.js",
    id: "planetradio"
  },
  {
    label: "Roxx Radio",
    matches: ["*://roxx.gr/radio/*"],
    js: "roxx.js",
    id: "roxx"
  },
  {
    label: "ListenOnRepeat",
    matches: ["*://listenonrepeat.com/*"],
    js: "listenonrepeat.js",
    id: "listenonrepeat"
  },
  {
    label: "Duckburg Radio",
    matches: ["*://*.radio-mb.com/*"],
    js: "radio-mb.js",
    id: "radio-mb"
  },
  {
    label: "Webradio.de",
    matches: ["*://www.webradio.de/*"],
    js: "radioplayer.js",
    id: "webradio.de"
  },
  {
    label: "The Breeze",
    matches: ["*://www.thebreeze.com/*/radioplayer/*"],
    js: "radioplayer.js",
    id: "thebreeze"
  },
  {
    label: "RadioPlayer",
    matches: [
      "*://ukradioplayer.*/*",
      "*://radioplayer.*/*",
      // Generic patterns
      "*://*/radioplayer/*",
      "*://*/radio/player/",
      "*://*/*/radio/player/"
    ],
    js: "radioplayer.js",
    id: "radioplayer"
  },
  {
    label: "deltaradio",
    matches: ["*://www.deltaradio.de/*"],
    js: "deltaradio.de.js",
    id: "deltaradio.de"
  },
  {
    label: "Radio Bob",
    matches: ["*://*.radiobob.de/*"],
    js: "radiobob.js",
    id: "radiobob"
  },
  {
    label: "ByteFM",
    matches: ["*://www.byte.fm/*"],
    js: "byte.fm.js",
    id: "byte.fm"
  },
  {
    label: "Deutschlandfunk Nova",
    matches: ["*://www.deutschlandfunknova.de/*"],
    js: "deutschlandfunknova.js",
    id: "deutschlandfunknova"
  },
  {
    label: "QQ Music",
    matches: ["*://y.qq.com/*"],
    js: "qq-music.js",
    id: "qq-music"
  },
  {
    label: "QQ Video",
    matches: ["*://v.qq.com/x/*"],
    js: "qq-video.js",
    id: "qq-video"
  },
  {
    label: "Naver",
    matches: ["*://playerui.music.naver.com/*"],
    js: "naver.js",
    id: "naver"
  },
  {
    label: "Naver Vibe",
    matches: ["*://vibe.naver.com/*"],
    js: "naver-vibe.js",
    id: "naver-vibe"
  },
  {
    label: "Soribada",
    matches: ["*://www.soribada.com/*"],
    js: "soribada.js",
    id: "soribada"
  },
  {
    label: "Flo",
    matches: ["*://www.music-flo.com/*"],
    js: "music-flo.js",
    id: "music-flo"
  },
  {
    label: "Discogs",
    matches: ["*://www.discogs.com/*"],
    js: "youtube-embed.js",
    id: "youtube-embed",
    allFrames: !0
  },
  {
    label: "NPR",
    matches: ["*://www.npr.org/*"],
    js: "npr.js",
    id: "npr"
  },
  {
    label: "Streamsquid",
    matches: ["*://streamsquid.com/*"],
    js: "streamsquid.js",
    id: "streamsquid"
  },
  {
    label: "Streemlion",
    matches: ["*://listen.streemlion.com/*"],
    js: "streemlion.js",
    id: "streemlion"
  },
  {
    label: "eMusic",
    matches: ["*://www.emusic.com/*"],
    js: "emusic.js",
    id: "emusic"
  },
  {
    label: "LyricsTraining",
    matches: ["*://lyricstraining.com/*"],
    js: "lyricstraining.js",
    id: "lyricstraining"
  },
  {
    label: "Music Walker",
    matches: ["*://arkanath.com/MusicWalker/*"],
    js: "musicwalker.js",
    id: "musicwalker"
  },
  {
    label: "radioeins",
    matches: ["*://www.radioeins.de/livestream/*"],
    js: "radioeins.js",
    id: "radioeins"
  },
  {
    label: "Fritz",
    matches: ["*://www.fritz.de/livestream/*"],
    js: "fritz.js",
    id: "fritz"
  },
  {
    label: "Musicoin",
    matches: ["*://musicoin.org/*"],
    js: "musicoin.js",
    id: "musicoin"
  },
  {
    label: "181.fm",
    matches: ["*://player.181fm.com/*"],
    js: "181.fm.js",
    id: "181.fm"
  },
  {
    label: "Phish.in",
    matches: ["*://phish.in/*"],
    js: "phish.in.js",
    id: "phish.in"
  },
  {
    label: "Rainwave",
    matches: [
      "*://rainwave.cc/*",
      "*://all.rainwave.cc/*",
      "*://game.rainwave.cc/*",
      "*://chiptune.rainwave.cc/*",
      "*://ocr.rainwave.cc/*",
      "*://covers.rainwave.cc/*"
    ],
    js: "rainwave.js",
    id: "rainwave"
  },
  {
    label: "Retro Synthwave",
    matches: ["*://www.retro-synthwave.com/*"],
    js: "retro-synthwave.js",
    id: "retro-synthwave"
  },
  {
    label: "Радиоволна.нет",
    matches: ["*://radiovolna.net/*"],
    js: "radiovolna.js",
    id: "radiovolna"
  },
  {
    label: "Feedbands",
    matches: ["*://feedbands.com/*"],
    js: "feedbands.js",
    id: "feedbands"
  },
  {
    label: "Taazi",
    matches: ["*://taazi.com/*"],
    js: "taazi.js",
    id: "taazi"
  },
  {
    label: "Patari",
    matches: ["*://patari.pk/*"],
    js: "patari.js",
    id: "patari"
  },
  {
    label: "pCloud",
    matches: ["*://my.pcloud.com/*"],
    js: "pcloud.js",
    id: "pcloud"
  },
  {
    label: "JetSetRadio Live",
    matches: ["*://jetsetradio.live/*"],
    js: "jetsetradio.live.js",
    id: "jetsetradio.live"
  },
  {
    label: "Radio France",
    matches: ["*://www.radiofrance.fr/*"],
    js: "radiofrance.js",
    id: "radiofrance"
  },
  {
    label: "RemixRotation",
    matches: ["*://remixrotation.com/*"],
    js: "remixrotation.js",
    id: "remixrotation"
  },
  {
    label: "WFMU",
    matches: ["*://wfmu.org/*", "*://freeform.wfmu.org/*"],
    js: "wfmu.js",
    id: "wfmu"
  },
  {
    label: "SiriusXM",
    matches: [
      "*://www.siriusxm.com/*",
      "*://www.siriusxm.ca/*",
      "*://*.siriusxm.com/player/*"
    ],
    js: "siriusxm-player.js",
    id: "siriusxm-player"
  },
  {
    label: "1ting",
    matches: [
      "*://www.1ting.com/player/*",
      "*://www.1ting.com/p_*",
      "*://www.1ting.com/album*",
      "*://www.1ting.com/rand.php*",
      "*://www.1ting.com/day/*",
      "*://h5.1ting.com/*"
    ],
    js: "1ting.js",
    id: "1ting"
  },
  {
    label: "Douban Artists",
    matches: ["*://music.douban.com/artists/player/*"],
    js: "douban-artists.js",
    id: "douban-artists"
  },
  {
    label: "Kugou",
    matches: ["*://www.kugou.com/song/*"],
    js: "kugou.js",
    id: "kugou"
  },
  {
    label: "Gimme Radio",
    matches: [
      "*://gimmeradio.com/*",
      "*://www.gimmeradio.com/*",
      "*://gimmecountry.com/*",
      "*://www.gimmecountry.com/*",
      "*://gimmemetal.com/*",
      "*://www.gimmemetal.com/*"
    ],
    js: "gimmeradio.js",
    id: "gimmeradio"
  },
  {
    label: "9sky",
    matches: ["*://www.9sky.com/music*", "*://www.9sky.com/mv/detail*"],
    js: "9sky.js",
    id: "9sky"
  },
  {
    label: "Vagalume.FM",
    matches: ["*://vagalume.fm/*", "*://*.vagalume.com.br/*"],
    js: "vagalume.js",
    id: "vagalume"
  },
  {
    label: "Radiooooo",
    matches: ["*://app.radiooooo.com/*", "*://mobile.radiooooo.com/*"],
    js: "radiooooo.js",
    id: "radiooooo"
  },
  {
    label: "LetsLoop",
    matches: ["*://letsloop.com/*"],
    js: "letsloop.js",
    id: "letsloop"
  },
  {
    label: "Mideast Tunes",
    matches: ["*://mideastunes.com/*", "*://map.mideastunes.com/*"],
    js: "mideastunes.js",
    id: "mideastunes"
  },
  {
    label: "mujRozhlas",
    matches: ["*://www.mujrozhlas.cz/*"],
    js: "mujrozhlas.js",
    id: "rozhlas"
  },
  {
    label: "blocSonic",
    matches: ["*://*.blocsonic.com/*"],
    js: "blocsonic.js",
    id: "blocsonic"
  },
  {
    label: "Resonate",
    matches: ["*://stream.resonate.coop/*"],
    js: "resonate.js",
    id: "resonate"
  },
  {
    label: "KEXP",
    matches: ["*://*.kexp.org/*"],
    js: "kexp.js",
    id: "kexp"
  },
  {
    label: "Hotmixradio.fr",
    matches: ["*://www.hotmixradio.fr/*"],
    js: "hotmixradio.js",
    id: "hotmixradio"
  },
  {
    label: "Aphex Twin",
    matches: ["*://aphextwin.warp.net/*"],
    js: "warp-aphextwin.js",
    id: "warp-aphextwin"
  },
  {
    label: "Zachary Seguin Music",
    matches: ["*://music.zacharyseguin.ca/*"],
    js: "musickit.js",
    id: "zacharyseguin"
  },
  {
    label: "Joox",
    matches: ["*://www.joox.com/*"],
    js: "joox.js",
    id: "joox"
  },
  {
    label: "Musish",
    matches: ["*://musi.sh/*"],
    js: "musickit.js",
    id: "musish"
  },
  {
    label: "1001tracklists",
    matches: ["*://www.1001tracklists.com/tracklist/*"],
    js: "1001tracklists.js",
    id: "1001tracklists"
  },
  {
    label: "YouTube Music",
    matches: ["*://music.youtube.com/*"],
    js: "youtube-music.js",
    id: "youtube-music"
  },
  {
    label: "Radiozenders.FM",
    matches: ["*://www.radiozenders.fm/*"],
    js: "radiozenders.js",
    id: "radiozenders"
  },
  {
    label: "Invidious",
    matches: ["*://*.invidio.us/*"],
    js: "invidious.js",
    id: "invidious"
  },
  {
    label: "Piped",
    matches: ["*://piped.video/*"],
    js: "piped.js",
    id: "piped"
  },
  {
    label: "Pretzel",
    matches: ["*://*.pretzel.rocks/*"],
    js: "pretzel.js",
    id: "pretzel"
  },
  {
    label: "Primordial Radio",
    matches: ["*://primordialradio.com/*"],
    js: "primordialradio.js",
    id: "primordialradio"
  },
  {
    label: "Radio Kyivstar",
    matches: ["*://radio.kyivstar.ua/*"],
    js: "kyivstar.js",
    id: "kyivstar"
  },
  {
    label: "Funkwhale",
    js: "funkwhale.js",
    id: "funkwhale"
  },
  {
    label: "9128.live",
    matches: ["*://9128.live/*", "*://embed.radio.co/player/*"],
    js: "radioco.js",
    id: "9128.live",
    allFrames: !0
  },
  {
    label: "Radio.co",
    matches: ["*://embed.radio.co/player/*"],
    js: "radioco.js",
    id: "radioco"
  },
  {
    label: "Super45.fm",
    matches: ["*://super45.fm/"],
    js: "radioco.js",
    id: "super45fm",
    allFrames: !0
  },
  {
    label: "R/a/dio",
    matches: ["*://r-a-d.io/*"],
    js: "r-a-d.io.js",
    id: "r-a-d.io"
  },
  {
    label: "Apple Music",
    matches: ["*://*music.apple.com/*"],
    js: "musickit.js",
    id: "apple-music"
  },
  {
    label: "Primephonic",
    matches: ["*://play.primephonic.com/*"],
    js: "primephonic.js",
    id: "primephonic"
  },
  {
    label: "Watch2Gether",
    matches: ["*://w2g.tv/*"],
    js: "watch2gether.js",
    id: "watch2gether"
  },
  {
    label: "Poolsuite",
    matches: ["*://poolsuite.net/*"],
    js: "poolsuite.js",
    id: "poolsuite"
  },
  {
    label: "GDS.FM",
    matches: ["*://www.gds.fm/*", "*://gds.fm/*"],
    js: "gds.fm.js",
    id: "gds"
  },
  {
    label: "Wynk Music",
    matches: ["*://wynk.in/music*"],
    js: "wynk.js",
    id: "wynk"
  },
  {
    label: "RadioJavan",
    matches: ["*://play.radiojavan.com/*"],
    js: "radiojavan.js",
    id: "radiojavan"
  },
  {
    label: "Audiomack",
    matches: ["*://audiomack.com/*"],
    js: "audiomack.js",
    id: "audiomack"
  },
  {
    label: "Global Player",
    matches: ["*://www.globalplayer.com/*"],
    js: "globalplayer.js",
    id: "globalplayer"
  },
  {
    label: "The Current",
    matches: ["*://www.thecurrent.org/*"],
    js: "thecurrent.js",
    id: "thecurrent"
  },
  {
    label: "pan y rosas discos",
    matches: ["*://www.panyrosasdiscos.net/*"],
    js: "panyrosasdiscos.js",
    id: "panyrosasdiscos"
  },
  {
    label: "GRRIF",
    matches: ["*://*.grrif.ch/*"],
    js: "grrif.js",
    id: "grrif"
  },
  {
    label: "newgrounds",
    matches: ["*://www.newgrounds.com/audio*"],
    js: "newgrounds.js",
    id: "newgrounds"
  },
  {
    label: "Jango",
    matches: ["*://www.jango.com/*"],
    js: "jango.js",
    id: "jango"
  },
  {
    label: "PlayIrish",
    matches: ["*://*.playirish.ie/*"],
    js: "playirish.js",
    id: "playirish"
  },
  {
    label: "Radio Record",
    matches: ["*://www.radiorecord.ru/*"],
    js: "radiorecord.js",
    id: "radiorecord"
  },
  {
    label: "Imago Radio",
    matches: ["*://*.imago.fm/*"],
    js: "imago.js",
    id: "imago"
  },
  {
    label: "Provoda.ch",
    matches: ["*://*.provoda.ch/*"],
    js: "provoda.ch.js",
    id: "provoda.ch"
  },
  {
    label: "Atomic Music Space",
    matches: ["*://stream.atomicmusic.space/*"],
    js: "atomicmusic.space.js",
    id: "atomicmusic.space"
  },
  {
    label: "The-radio.ru",
    matches: ["*://the-radio.ru/*"],
    js: "the-radio.ru.js",
    id: "the-radio.ru"
  },
  {
    label: "HQ Radio",
    matches: ["*://hqradio.ru/*"],
    js: "hqradio.js",
    id: "hqradio"
  },
  {
    label: "Smooth FM",
    matches: ["*://smoothfm.iol.pt/*"],
    js: "smoothfm.js",
    id: "smoothfm"
  },
  {
    label: "Vodafone.fm",
    matches: ["*://vodafone.fm/*"],
    js: "vodafone.fm.js",
    id: "vodafonefm"
  },
  {
    label: "Relisten.net",
    matches: ["*://relisten.net/*"],
    js: "relisten.js",
    id: "relisten"
  },
  {
    label: "UpBeatRadio",
    matches: ["*://upbeatradio.net/*"],
    js: "upbeatradio.js",
    id: "upbeatradio"
  },
  {
    label: "Chillhop",
    matches: ["*://chillhop.com/*"],
    js: "chillhop.js",
    id: "chillhop"
  },
  {
    label: "Chillhop Radio",
    matches: ["*://app.chillhop.com/*"],
    js: "chillhop-radio.js",
    id: "chillhop-radio"
  },
  {
    label: "DatPiff",
    matches: ["*://www.datpiff.com/player/*"],
    js: "datpiff.js",
    id: "datpiff",
    allFrames: !0
  },
  {
    label: "Shuffle",
    matches: ["*://shuffle.one/play*"],
    js: "shuffleone.js",
    id: "shuffleone"
  },
  {
    label: "JB FM",
    matches: ["*://jb.fm/player/*"],
    js: "jb.fm.js",
    id: "jbfm"
  },
  {
    label: "SECTOR Radio",
    matches: ["*://sectorradio.ru/*"],
    js: "sectorradio.js",
    id: "sectorradio"
  },
  {
    label: "LiveOne",
    matches: ["*://*.liveone.com/*"],
    js: "liveone.js",
    id: "liveone"
  },
  {
    label: "PocketCasts",
    matches: ["*://play.pocketcasts.com/*"],
    js: "pocketcasts.js",
    id: "pocketcasts"
  },
  {
    label: "Clyp",
    matches: ["*://clyp.it/*"],
    js: "clyp.js",
    id: "clyp"
  },
  {
    label: "RTBF Radio",
    matches: ["*://www.rtbf.be/radio/*"],
    js: "rtbf.js",
    id: "rtbf"
  },
  {
    label: "TuneTrack",
    matches: ["*://tunetrack.net/*"],
    js: "tunetrack.js",
    id: "tunetrack"
  },
  {
    label: "Musify",
    matches: ["*://*.musify.club/*"],
    js: "musify.js",
    id: "musify"
  },
  {
    label: "Radio Rethink",
    matches: ["*://www.radiorethink.com/*"],
    js: "radiorethink.js",
    id: "radiorethink"
  },
  {
    label: "SoundClick",
    matches: ["*://www.soundclick.com/*"],
    js: "soundclick.js",
    id: "soundclick"
  },
  {
    label: "Napster",
    matches: ["*://app.napster.com/*"],
    js: "napster.js",
    id: "napster"
  },
  {
    label: "abc.net.au",
    matches: ["*://www.abc.net.au/*/*live*/*"],
    js: "abc.net.au.js",
    id: "abcnetau"
  },
  {
    label: "JQBX",
    matches: ["*://app.jqbx.fm/*"],
    js: "jqbx.js",
    id: "jqbx"
  },
  {
    label: "music.jsososo.com",
    matches: ["*://y.jsososo.com/*", "*://music.jsososo.com/*"],
    js: "jsososo.js",
    id: "jsososo"
  },
  {
    label: "Supla",
    matches: ["*://*.supla.fi/*"],
    js: "supla.js",
    id: "supla"
  },
  {
    label: "swr3",
    matches: ["*://www.swr3.de/*", "*://www.swr.de/*"],
    js: "swr3.js",
    id: "swr3"
  },
  {
    label: "Epidemic Sound",
    matches: ["*://*.epidemicsound.com/*"],
    js: "epidemicsound.js",
    id: "epidemicsound"
  },
  {
    label: "Rekt Network",
    matches: ["*://rekt.network/*"],
    js: "rekt.network.js",
    id: "rektnetwork"
  },
  {
    label: "Nightride FM",
    matches: ["*://nightride.fm/*"],
    js: "nightride.fm.js",
    id: "nightridefm"
  },
  {
    label: "Qobuz",
    matches: ["*://*.qobuz.com/*"],
    js: "qobuz.js",
    id: "qobuz"
  },
  {
    label: "TruckersFM",
    matches: ["*://*.truckers.fm/*"],
    js: "truckersfm.js",
    id: "truckersfm"
  },
  {
    id: "winampify",
    label: "Winampify",
    js: "winampify.js",
    matches: ["*://winampify.io/*"]
  },
  {
    label: "detektor.fm",
    matches: ["*://detektor.fm/*"],
    js: "detektorfm.js",
    id: "detektorfm"
  },
  {
    label: "iBroadcast",
    matches: ["*://media.ibroadcast.com/*"],
    js: "ibroadcast.js",
    id: "ibroadcast"
  },
  {
    label: "Radio7",
    matches: ["*://radio7.lv/*"],
    js: "radio7.js",
    id: "radio7lv"
  },
  {
    label: "Radio Nemiers",
    matches: ["*://radionemiers.com/*"],
    js: "radionemiers.js",
    id: "radionemiers"
  },
  {
    label: "TOWER RECORDS MUSIC",
    matches: ["*://music.tower.jp/*"],
    js: "towerrecordsmusic.js",
    id: "towerrecordsmusic"
  },
  {
    label: "Eggs",
    matches: ["*://eggs.mu/*"],
    js: "eggs.js",
    id: "eggs"
  },
  {
    label: "Jamstash",
    matches: ["*://jamstash.com/*"],
    js: "jamstash.js",
    id: "jamstash"
  },
  {
    label: "SubFire",
    matches: ["*://p.subfireplayer.net/*"],
    js: "subfire.js",
    id: "subfire"
  },
  {
    label: "Idagio",
    matches: ["*://app.idagio.com/*"],
    js: "idagio.js",
    id: "idagio"
  },
  {
    label: "Relax FM",
    matches: ["*://relax-fm.ru/*"],
    js: "relaxfm.js",
    id: "relaxfm"
  },
  {
    label: "Laut.fm",
    matches: ["*://laut.fm/*"],
    js: "laut.fm.js",
    id: "laut.fm"
  },
  {
    label: "Magnatune",
    matches: ["*://magnatune.com/*"],
    js: "magnatune.js",
    id: "magnatune"
  },
  {
    label: "Libre.fm",
    matches: ["*://libre.fm/*"],
    js: "librefm.js",
    id: "librefm"
  },
  {
    label: "Brain.fm",
    matches: ["*://my.brain.fm/*"],
    js: "brainfm.js",
    id: "brainfm"
  },
  {
    label: "bullofheaven.com",
    matches: ["*://bullofheaven.com/*"],
    js: "bullofheaven.com.js",
    id: "bullofheavencom"
  },
  {
    label: "All Classical Portland",
    matches: ["*://player.allclassical.org/*"],
    js: "allclassical.org.js",
    id: "allclassicalportland"
  },
  {
    label: "Migu Music",
    matches: ["*://music.migu.cn/*"],
    js: "migu-music.js",
    id: "migu-music"
  },
  {
    label: "Weibo",
    matches: ["*://weibo.com/*", "*://*.weibo.com/*"],
    js: "weibo.js",
    id: "weibo"
  },
  {
    label: "Street Voice",
    matches: ["*://streetvoice.cn/*", "*://streetvoice.com/*"],
    js: "streetvoice.js",
    id: "streetvoice"
  },
  {
    label: "Red Bull",
    matches: ["*://www.redbull.com/*"],
    js: "redbull.js",
    id: "redbull"
  },
  {
    label: "Synology",
    matches: [
      "*://*5000/*",
      "*://*5001/*",
      "*://*/?launchApp=SYNO.SDS.AudioStation.Application*"
    ],
    js: "synology.js",
    id: "synology"
  },
  {
    label: "Ragya",
    matches: ["*://www.ragya.com/*"],
    js: "ragya.js",
    id: "ragya"
  },
  {
    label: "CodeRadio",
    matches: ["*://coderadio.freecodecamp.org/*"],
    js: "coderadio.js",
    id: "coderadio"
  },
  {
    label: "LITT Live",
    matches: ["*://littlive.com/*"],
    js: "littlive.js",
    id: "dashradio"
  },
  {
    label: "Niconico",
    matches: ["*://www.nicovideo.jp/*"],
    js: "nicovideo.js",
    id: "nicovideo"
  },
  {
    label: "Звук",
    matches: ["*://zvuk.com/*"],
    js: "zvuk.js",
    id: "zvuk"
  },
  {
    label: "Navidrome",
    js: "navidrome.js",
    id: "navidrome"
  },
  {
    label: "LMS",
    js: "lms.js",
    id: "lms"
  },
  {
    label: "deep-cut.fm",
    matches: [
      "*://deepcut.fm/*",
      "*://turntable.fm/*",
      "*://deep-cut.fm/*",
      "*://deepcuts.fm/*"
    ],
    js: "deep-cut.fm.js",
    id: "deepcut.fm"
  },
  {
    label: "Burntable",
    matches: ["*://*.burntable.com/*"],
    js: "burntable.js",
    id: "burntable"
  },
  {
    label: "Stingray Music",
    matches: ["*://*.stingray.com/*"],
    js: "stingray.js",
    id: "stingray"
  },
  {
    label: "CBC Music",
    matches: ["*://www.cbc.ca/listen/cbc-music-playlists*"],
    js: "cbcmusic.js",
    id: "cbcmusic"
  },
  {
    label: "Indie88",
    matches: [
      "*://indie88.com/lean-stream-player/*",
      "*://cob.leanplayer.com/CINDFM*"
    ],
    js: "indie88.js",
    id: "indie88"
  },
  {
    label: "Playlist Randomizer",
    matches: [
      "*://www.playlist-randomizer.com/*",
      "*://playlist-randomizer.com/*"
    ],
    js: "playlist-randomizer.js",
    id: "playlist-randomizer"
  },
  {
    label: "QueUp",
    matches: ["*://www.queup.net/*"],
    js: "queup.js",
    id: "queup"
  },
  {
    label: "Live 365",
    matches: ["*://*.live365.com/*"],
    js: "live365.js",
    id: "live365"
  },
  {
    label: "Lounge.fm",
    matches: ["*://www.lounge.fm/*"],
    js: "lounge.fm.js",
    id: "lounge.fm"
  },
  {
    label: "EulerBeats",
    matches: ["*://eulerbeats.com/*"],
    js: "eulerbeats.js",
    id: "eulerbeats"
  },
  {
    label: "FilmMusic.io",
    matches: ["*://*.filmmusic.io/*"],
    js: "filmmusic.io.js",
    id: "filmmusic.io"
  },
  {
    label: "X-Team Radio",
    matches: ["*://radio.x-team.com/*"],
    js: "xteam-radio.js",
    id: "xteam-radio"
  },
  {
    label: "Calm",
    matches: ["*://*.calm.com/*"],
    js: "calm.js",
    id: "calm"
  },
  {
    label: "Keakie",
    matches: ["*://*.keakie.com/*"],
    js: "keakie.js",
    id: "keakie"
  },
  {
    label: "KKBOX",
    matches: ["*://*play.kkbox.com/*"],
    js: "kkbox.js",
    id: "kkbox"
  },
  {
    label: "Thrill Jockey",
    matches: ["*://thrilljockey.com/products/*"],
    js: "thrilljockey.js",
    id: "thrilljockey"
  },
  {
    label: "Radio Horizonte",
    matches: ["*://horizonte.cl/*"],
    js: "mediastream.js",
    id: "horizontecl"
  },
  {
    label: "Sonar FM",
    matches: ["*://sonarfm.cl/*"],
    js: "mediastream.js",
    id: "sonarfmcl"
  },
  {
    label: "Play FM",
    matches: ["*://playfm.cl/*"],
    js: "mediastream.js",
    id: "playfmcl"
  },
  {
    label: "WKM Radio",
    matches: ["*://www.wkmradio.com/*"],
    js: "mediastream.js",
    id: "wkmradio"
  },
  {
    label: "Rockaxis",
    matches: ["*://www.rockaxis.com/*"],
    js: "mediastream.js",
    id: "rockaxis"
  },
  {
    label: "Rock&Pop Chile",
    matches: ["*://www.rockandpop.cl/*"],
    js: "rockandpopcl.js",
    id: "rockandpopcl"
  },
  {
    label: "WYEP",
    matches: ["*://wyep.org/*"],
    js: "wyep.js",
    id: "wyep"
  },
  {
    label: "ZENO",
    matches: ["*://*zeno.fm/*"],
    js: "zeno.js",
    id: "zeno"
  },
  {
    label: "Naxos Music Library",
    matches: ["*://*.naxosmusiclibrary.com/*"],
    js: "naxosmusiclibrary.js",
    id: "naxosmusiclibrary"
  },
  {
    label: "Klassik Radio",
    matches: ["*://*klassikradio.de/*"],
    js: "klassikradio.de.js",
    id: "klassikradio"
  },
  {
    label: "Beetle",
    js: "beetle.js",
    id: "beetle"
  },
  {
    label: "RefNet",
    matches: ["*://listen.refnet.fm/*"],
    js: "refnet.js",
    id: "refnet"
  },
  {
    label: "La Radio du bord de l'eau",
    matches: ["*://*auborddeleau.radio/*"],
    js: "auborddeleau.radio.js",
    id: "auborddeleau.radio",
    allFrames: !0
  },
  {
    label: "Radio Willy",
    matches: ["*://*willy.radio/player/willy/*"],
    js: "willy.radio.js",
    id: "willy.radio"
  },
  {
    label: "NIGHT.FM",
    matches: ["*://*night.fm/*"],
    js: "night.fm.js",
    id: "night.fm"
  },
  {
    label: "Radio Nowy Swiat",
    matches: ["*://nowyswiat.online/*"],
    js: "nowyswiat.js",
    id: "nowyswiat"
  },
  {
    label: "Radiolla",
    matches: ["*://*radiolla.com/*"],
    js: "radiolla.js",
    id: "radiolla"
  },
  {
    label: "Oxigenio.fm",
    matches: ["*://*oxigenio.fm/*"],
    js: "oxigenio.fm.js",
    id: "oxigenio.fm"
  },
  {
    label: "Intergalactic FM",
    matches: ["*://*intergalactic.fm/*"],
    js: "intergalacticfm.js",
    id: "intergalactic.fm"
  },
  {
    label: "Radio Cuca",
    matches: ["*://*radiocuca.es/*"],
    js: "radiocuca.js",
    id: "radiocuca"
  },
  {
    label: "Irama Nusantara",
    matches: ["*://*.iramanusantara.org/*"],
    js: "iramanusantara.js",
    id: "iramanusantara"
  },
  {
    label: "Yammat FM",
    matches: ["*://*yammat.fm/*"],
    js: "yammat.fm.js",
    id: "yammat.fm"
  },
  {
    label: "Husk Recordings",
    matches: ["*://huskrecordings.com/music/*"],
    js: "huskrecordings.js",
    id: "huskrecordings"
  },
  {
    label: "nugs.net",
    matches: ["*://play.nugs.net/*"],
    js: "nugs.js",
    id: "nugs"
  },
  {
    label: "livephish.com",
    matches: ["*://plus.livephish.com/*"],
    js: "livephish.js",
    id: "livephish.com"
  },
  {
    label: "Ishkur's Guide to Electronic Music",
    matches: ["*://music.ishkur.com/*"],
    js: "ishkur.js",
    id: "music.ishkur.com"
  },
  {
    label: "Nonoki",
    matches: ["*://nonoki.com/music/*"],
    js: "nonoki.js",
    id: "nonoki"
  },
  {
    label: "Beatbump",
    matches: ["*://beatbump.io/*"],
    js: "beatbump.js",
    id: "beatbump"
  },
  {
    label: "LINE MUSIC",
    matches: ["*://music.line.me/*"],
    js: "line-music.js",
    id: "linemusic"
  },
  {
    label: "KCRW",
    matches: ["*://www.kcrw.com/*"],
    js: "kcrw.js",
    id: "kcrw"
  },
  {
    label: "World Fusion Radio",
    matches: ["*://worldfusionradio.com/*"],
    js: "worldfusionradio.js",
    id: "worldfusionradio"
  },
  {
    label: "Hardtunes",
    matches: [
      "*://www.hard-tunes.de/*",
      "*://www.hardtunes.com/*",
      "*://www.hardtunes.fr/*",
      "*://www.hardtunes.it/*",
      "*://www.hardtunes.nl/*"
    ],
    js: "hardtunes.js",
    id: "hardtunes"
  },
  {
    label: "KINK",
    matches: ["*://kink.nl/player", "*://kink.nl/player/*"],
    js: "kinknl.js",
    id: "kinknl"
  },
  {
    label: "The Jazz Groove",
    matches: ["*://jazzgroove.org/*"],
    js: "jazzgroove.js",
    id: "jazzgroove"
  },
  {
    label: "XRAY.FM",
    matches: ["*://*.xray.fm/*"],
    js: "xrayfm.js",
    id: "xrayfm"
  },
  {
    label: "DKFM Shoegaze Radio",
    matches: ["*://decayfm.com/*"],
    js: "decayfm.js",
    id: "decayfm"
  },
  {
    label: "QCIndie",
    matches: ["*://www.qcindie.com/listen-live/*"],
    js: "qcindie.js",
    id: "qcindie"
  },
  {
    label: "Colorado Public Radio",
    matches: ["*://www.cpr.org/*"],
    js: "cpr.js",
    id: "cpr"
  },
  {
    label: "Indie 102.3",
    matches: ["*://indie.cpr.org/"],
    js: "cpr-indie.js",
    id: "cpr-indie"
  },
  {
    label: "WXPN",
    matches: ["*://xpn.org/*"],
    js: "xpn.js",
    id: "xpn"
  },
  {
    label: "FRISKY",
    matches: ["*://*.frisky.fm/*"],
    js: "friskyfm.js",
    id: "friskyfm"
  },
  {
    label: "GotRadio",
    matches: ["*://player.gotradio.com/*"],
    js: "gotradio.js",
    id: "gotradio"
  },
  {
    label: "LightningStream",
    matches: [
      "*://*.lightningstream.com/Player*",
      "*://*.lightningstream.com/player*"
    ],
    js: "lightningstream.js",
    id: "lightningstream"
  },
  {
    label: "Securenet Systems",
    matches: [
      "*://radio.securenetsystems.net/*",
      "*://stream*.securenetsystems.net/*"
    ],
    js: "securenetsystems.js",
    id: "securenetsystems"
  },
  {
    label: "WBRU",
    matches: ["*://www.wbru.com/*"],
    js: "radioco.js",
    id: "wbru",
    allFrames: !0
  },
  {
    label: "uwu radio",
    matches: ["*://radio.uwu.network/*"],
    js: "uwu-radio.js",
    id: "uwu-radio"
  },
  {
    label: "MyStreamPlayer",
    matches: ["*://*.mystreamplayer.com/*"],
    js: "mystreamplayer.js",
    id: "mystreamplayer"
  },
  {
    label: "BagelRadio",
    matches: ["*://*.bagelradio.com/*"],
    js: "mystreamplayer.js",
    id: "bagelradio",
    allFrames: !0
  },
  {
    label: "Amazing Radio",
    matches: ["*://amazingradio.com/*", "*://amazingradio.us/*"],
    js: "amazingradio.js",
    id: "amazingradio"
  },
  {
    label: "DR Lyd",
    matches: ["*://www.dr.dk/lyd*"],
    js: "dr-lyd.js",
    id: "dr-lyd"
  },
  {
    label: "lulu.fm",
    matches: ["*://*lulu.fm/*"],
    js: "lulu.fm.js",
    id: "lulufm"
  },
  {
    label: "ROCK ANTENNE",
    matches: ["*://*rockantenne.*/webradio/*"],
    js: "rockantenne.js",
    id: "rockantenne"
  },
  {
    label: "copyparty",
    matches: ["*://127.0.0.1:3923/*", "*://a.ocv.me/*"],
    js: "copyparty.js",
    id: "copyparty"
  },
  {
    label: "Fungjai",
    matches: ["*://*.fungjai.com/*"],
    js: "fungjai.js",
    id: "fungjai"
  },
  {
    label: "Radio Caprice",
    matches: ["*://radcap.ru/*"],
    js: "radcap.js",
    id: "radcap"
  },
  {
    label: "TrackerHub",
    matches: ["*://trackerhub.vercel.app/*", "*://trackerhub.cx/*"],
    js: "trackerhub.js",
    id: "trackerhub"
  },
  {
    label: "Gensokyo Radio",
    matches: ["*://gensokyoradio.net/*"],
    js: "gensokyoradio.js",
    id: "gensokyoradio"
  },
  {
    label: "Stationhead",
    matches: ["*://*stationhead.com/*"],
    js: "stationhead.js",
    id: "stationhead"
  },
  {
    label: "TECHNOBASE.FM",
    matches: [
      "*://*technobase.fm/*",
      "*://*housetime.fm/*",
      "*://*hardbase.fm/*",
      "*://*trancebase.fm/*",
      "*://*coretime.fm/*",
      "*://*clubtime.fm/*",
      "*://*teatime.fm/*",
      "*://*replay.fm/*"
    ],
    js: "technobase.fm.js",
    id: "technobase.fm"
  },
  {
    label: "Telegram A",
    matches: ["*://web.telegram.org/a/*"],
    js: "telegram-a.js",
    id: "telegram-a"
  },
  {
    label: "Telegram K",
    matches: ["*://web.telegram.org/k/*"],
    js: "telegram-k.js",
    id: "telegram-k"
  },
  {
    label: "TuneGenieEmbed",
    matches: ["*://b3.tunegenie.com/*"],
    js: "tunegenie-embed.js",
    id: "tunegenie-embed",
    allFrames: !0
  },
  {
    label: "TuneGenie",
    matches: ["*://*.tunegenie.com/*"],
    js: "tunegenie.js",
    id: "tunegenie"
  },
  {
    label: "RTL+ Musik",
    matches: ["*://plus.rtl.de/*"],
    js: "rtl-plus-musik.js",
    id: "rtl-plus-musik"
  },
  {
    label: "Tomorrowland",
    matches: ["*://www.tomorrowland.com/*"],
    js: "tomorrowland.js",
    id: "tomorrowland"
  },
  {
    label: "hearthis.at",
    matches: ["*://hearthis.at/*"],
    js: "hearthis-at.js",
    id: "hearthis-at"
  },
  {
    label: "Blend",
    matches: ["*://blend.io/*"],
    js: "blend.js",
    id: "blend"
  },
  {
    label: "Radio Italia",
    matches: ["*://www.radioitalia.it/*"],
    js: "radio-italia.js",
    id: "radio-italia"
  },
  {
    label: "Lyden av Norge",
    matches: ["*://www.lydenavnorge.no/*"],
    js: "lyden-av-norge.js",
    id: "lyden-av-norge"
  },
  {
    label: "audio.com",
    matches: ["*://audio.com/*"],
    js: "audio.js",
    id: "audio-com"
  },
  {
    label: "AfroCharts",
    matches: ["*://*.afrocharts.com/*"],
    js: "afrocharts.js",
    id: "afrocharts"
  },
  {
    label: "Ed Banger Records",
    matches: ["*://*.edbangerrecords.com/*"],
    js: "ed-banger-records.js",
    id: "ed-banger-records"
  },
  {
    label: "Hyperpipe",
    matches: ["*://hyperpipe.surge.sh/*"],
    js: "hyperpipe.js",
    id: "hyperpipe"
  },
  {
    label: "Radiofreccia",
    matches: ["*://play.rtl.it/live/*"],
    js: "radiofreccia.js",
    id: "radiofreccia"
  },
  {
    label: "khinsider",
    matches: ["*://downloads.khinsider.com/*"],
    js: "khinsider.js",
    id: "khinsider"
  },
  {
    label: "WDR",
    matches: ["*://*.wdr.de/radio/*"],
    js: "wdr.js",
    id: "wdr"
  },
  {
    label: "radio.de",
    matches: ["*://www.radio.de/*", "*://www.radio.net/*"],
    js: "radio.de.js",
    id: "radiode"
  },
  {
    label: "FMSpins",
    matches: ["*://*.fmspins.com/*"],
    js: "fmspins.js",
    id: "fmspins"
  },
  {
    label: "vk-save",
    matches: ["*://*.vk-save.com/*"],
    js: "vk-save.js",
    id: "vk-save"
  },
  {
    label: "Radio Student",
    matches: ["*://www.radiostudent.hr/*"],
    js: "radiostudent.js",
    id: "radiostudent"
  },
  {
    label: "BiliBili",
    matches: ["*://www.bilibili.com/*"],
    js: "bilibili.js",
    id: "bilibili",
    usesBlocklist: !0
  },
  {
    label: "jam.coop",
    matches: ["*://jam.coop/*"],
    js: "jam.coop.js",
    id: "jam.coop"
  },
  {
    label: "Zing MP3",
    matches: ["*://zingmp3.vn/*"],
    js: "zingmp3.js",
    id: "zingmp3"
  },
  {
    label: "NTS",
    matches: ["*://*nts.live/*"],
    js: "nts.js",
    id: "nts"
  },
  {
    label: "earth.fm",
    matches: ["*://earth.fm/*"],
    js: "earth.fm.js",
    id: "earthfm"
  },
  {
    label: "apt-get's auditorium",
    matches: ["*://tunes.apt-get.xyz/*"],
    js: "apt-get-tunes.js",
    id: "apt-get-tunes"
  },
  {
    label: "AzuraCast",
    js: "azuracast.js",
    id: "azuracast"
  },
  {
    label: "scrobblerad.io",
    matches: ["*://scrobblerad.io/*"],
    js: "scrobbleradio.js",
    id: "scrobbleradio"
  },
  {
    label: "VocaDB",
    matches: ["*://vocadb.net/*"],
    js: "vocadb.js",
    id: "vocadb"
  },
  {
    label: "UtaiteDB",
    matches: ["*://utaitedb.net/*"],
    js: "vocadb.js",
    id: "utaitedb"
  },
  {
    label: "TouhouDB",
    matches: ["*://touhoudb.com/*"],
    js: "vocadb.js",
    id: "touhoudb"
  },
  {
    label: "weareone.fm",
    matches: ["*://weareone.fm/*"],
    js: "weareone.js",
    id: "weareone"
  },
  {
    label: "Bollerwagen",
    matches: ["*://radiobollerwagen.de/*"],
    js: "bollerwagen.js",
    id: "bollerwagen"
  },
  {
    label: "МТС Музыка",
    matches: ["*://music.mts.ru/*"],
    js: "mts-music.js",
    id: "mts-music"
  },
  {
    label: "ChirpRadio",
    matches: ["*://chirpradio.org/*"],
    js: "chirpradio.js",
    id: "chirpradio"
  },
  {
    label: "OnlyHit",
    matches: ["*://onlyhit.us/*"],
    js: "onlyhit.js",
    id: "onlyhit"
  },
  {
    label: "InstantAudio",
    matches: [
      "*://instant.audio/*",
      // North America
      "*://radiosdecuba.com/*",
      "*://radio.ht/*",
      "*://jamaicaradio.net/*",
      "*://emisoras.com.mx/*",
      "*://radiosdepuertorico.com/*",
      "*://radios.com.do/*",
      "*://trinidadradiostations.net/*",
      // Central America
      "*://radios.co.cr/*",
      "*://radios.com.sv/*",
      "*://emisoras.com.gt/*",
      "*://radios.hn/*",
      "*://radios.co.ni/*",
      "*://radios.com.pa/*",
      // South America
      "*://radioarg.com/*",
      "*://radios.com.bo/*",
      "*://radiosaovivo.net/*",
      "*://emisora.cl/*",
      "*://radios.com.co/*",
      "*://radios.com.ec/*",
      "*://emisoras.com.py/*",
      "*://radios.com.pe/*",
      "*://surinaamseradio.com/*",
      "*://radios.com.uy/*",
      "*://radio.co.ve/*",
      // Europe
      "*://radiosonline.be/*",
      "*://ceskaradiaonline.cz/*",
      "*://radio.co.dk/*",
      "*://radiolisten.de/*",
      "*://raadiod.com/*",
      "*://emisora.org.es/*",
      "*://ecouterradioenligne.com/*",
      "*://radiofona.com.gr/*",
      "*://radios.hr/*",
      "*://ieradio.org/*",
      "*://ascoltareradio.com/*",
      "*://latvijasradio.com/*",
      "*://radios.lu/*",
      "*://radijas.org/*",
      "*://radiohallgatas.hu/*",
      "*://nederlandseradio.nl/*",
      "*://nettradionorge.com/*",
      "*://radios.co.at/*",
      "*://onlineradio.pl/*",
      "*://radioonline.com.pt/*",
      "*://radio.org.ro/*",
      "*://radiosonline.ch/*",
      "*://siradio.si/*",
      "*://radiostanice.rs/*",
      "*://nettiradiot.org/*",
      "*://radio.org.se/*",
      "*://internetradiouk.com/*",
      "*://bg-radio.org/*",
      "*://radio.pp.ru/*",
      "*://radioua.net/*",
      // Africa
      "*://radioalgerie.eu/*",
      "*://radio.co.cm/*",
      "*://radio.cd/*",
      "*://radio.co.ci/*",
      "*://radio.com.gh/*",
      "*://radio.or.ke/*",
      "*://radio.mg/*",
      "*://radio.co.ma/*",
      "*://egyptradio.net/*",
      "*://radio.org.ng/*",
      "*://radio.sn/*",
      "*://radiosa.org/*",
      "*://radiotunisienne.org/*",
      "*://radio.co.ug/*",
      // Asia
      "*://radio-bd.com/*",
      "*://radioonline.kr/*",
      "*://radios.hk/*",
      "*://onlineradios.in/*",
      "*://radioonline.co.id/*",
      "*://radioonline.my/*",
      "*://radionp.com/*",
      "*://jpradio.jp/*",
      "*://radio.net.pk/*",
      "*://radio.org.ph/*",
      "*://radiosingapore.org/*",
      "*://radio.com.lk/*",
      "*://vietnamradio.org/*",
      "*://radios.org.il/*",
      "*://radioth.net/*",
      "*://zhibo.fm/*",
      "*://radios.tw/*",
      // Oceania
      "*://radioau.net/*",
      "*://radio.org.nz/*"
    ],
    js: "instantaudio.js",
    id: "instantaudio"
  },
  {
    label: "Basspistol Radio",
    matches: ["*://*.basspistol.com/*"],
    js: "basspistol.js",
    id: "basspistol"
  },
  {
    label: "RadioFreeFedi",
    matches: ["*://radiofreefedi.net/*"],
    js: "radiofreefedi.js",
    id: "radiofreefedi"
  },
  {
    label: "MyTuner",
    matches: ["*://mytuner-radio.com/*"],
    js: "mytuner.js",
    id: "mytuner"
  },
  {
    label: "Mirlo",
    matches: ["*://mirlo.space/*"],
    js: "mirlo.js",
    id: "mirlo"
  },
  {
    label: "Simulator Radio",
    matches: ["*://*.simulatorradio.com/*"],
    js: "simulatorradio.js",
    id: "simulatorradio"
  },
  {
    label: "Echo",
    matches: ["*://echo.sleepyfran.me/*"],
    js: "echo.js",
    id: "echo"
  },
  {
    label: "Gizz Tapes",
    matches: ["*://tapes.kglw.net/*"],
    js: "tapes-kglw.js",
    id: "tapes-kglw"
  },
  {
    label: "Systrum Sistum Radio",
    matches: ["*://systrum.net/*"],
    js: "systrum.js",
    id: "systrum"
  },
  {
    label: "cosine.club",
    matches: ["*://cosine.club/*"],
    js: "cosine.club.js",
    id: "cosine.club"
  },
  {
    label: "The Indie Beat Radio",
    matches: ["*://theindiebeat.fm/*"],
    js: "theindiebeat.js",
    id: "theindiebeat"
  },
  {
    label: "Musique Approximative",
    matches: ["*://*.musiqueapproximative.net/*"],
    js: "musiqueapproximative.js",
    id: "musiqueapproximative"
  },
  {
    label: "Suno AI",
    matches: ["*://suno.com/*"],
    js: "suno.js",
    id: "suno"
  },
  {
    label: "[untitled]",
    matches: ["*://untitled.stream/*"],
    js: "untitled.js",
    id: "[untitled]"
  },
  {
    label: "DAB Music Player",
    matches: ["*://dab.yeet.su/*", "*://dabmusic.xyz/*"],
    js: "dabmusic.js",
    id: "dabmusic"
  },
  {
    label: "GBS-FM",
    matches: ["*://gbs.fm/*"],
    js: "gbs.fm.js",
    id: "gbs"
  },
  {
    label: "Yumi Co. Radio",
    matches: ["*://yumicoradio.net/*"],
    js: "yumicoradio.js",
    id: "yumicoradio"
  },
  {
    label: "Kosmik Dstroyer",
    matches: ["*://kosmik-dstroyer.top/*"],
    js: "kosmik-dstroyer.js",
    id: "kosmik-dstroyer"
  },
  {
    label: "LaTeX 4000",
    matches: ["*://nonacademic.net/*"],
    js: "nonacademic.js",
    id: "nonacademic"
  },
  {
    label: "gravity.fm",
    matches: ["*://gravity.fm/*"],
    js: "gravity.fm.js",
    id: "gravity"
  },
  {
    label: "Archaic Horizon",
    matches: ["*://archaichorizon.com/*", "*://www.archaichorizon.com/*"],
    js: "archaichorizon.js",
    id: "archaichorizon"
  },
  {
    label: "Aonsoku",
    matches: ["*://aonsoku.vercel.app/*"],
    js: "aonsoku.js",
    id: "aonsoku"
  },
  {
    label: "CREAMER NATION",
    matches: ["*://creamernation.men/*"],
    js: "creamernation.js",
    id: "creamer-nation"
  },
  {
    label: "Feishin",
    matches: ["*://feishin.vercel.app/*"],
    js: "feishin.js",
    id: "feishin"
  },
  {
    label: "Ampwall",
    matches: ["*://ampwall.com/*"],
    js: "ampwall.js",
    id: "ampwall"
  },
  {
    label: "Monochrome",
    matches: [
      "*://monochrome.prigoana.com/*",
      "*://monochrome.tf/*",
      "*://monochrome.samidy.com/*",
      "*://monochrome-back.pages.dev/*"
    ],
    js: "monochrome.js",
    id: "monochrome"
  },
  {
    label: "WeeklyBeats",
    matches: ["*://weeklybeats.com/*"],
    js: "weeklybeats.js",
    id: "weeklybeats"
  },
  {
    label: "XRaydio",
    matches: ["*://xraydio.net/*"],
    js: "xraydio.js",
    id: "xraydio"
  },
  {
    label: "Cytu.be",
    matches: ["*://cytu.be/r/*"],
    js: "cytu-be.js",
    id: "cytu-be"
  },
  {
    label: "Telegram Audio Player",
    matches: ["*://teleplay.rv7.nl/*"],
    js: "teleplay.js",
    id: "teleplay"
  },
  {
    label: "Subvert",
    matches: ["*://*.subvert.fm/*"],
    js: "subvert.js",
    id: "subvert"
  },
  {
    label: "Debrid Vault",
    matches: ["*://debridvault.elfhosted.com/*"],
    js: "debridvault.js",
    id: "debridvault"
  },
  {
    label: "Radio Swiss Classic",
    matches: [
      "*://www.radioswissclassic.ch/*",
      "*://www.radioswissjazz.ch/*",
      "*://www.radioswisspop.ch/*"
    ],
    js: "radioswissclassic.js",
    id: "radioswissclassic"
  },
  {
    label: "Rockserwis.fm",
    matches: ["*://rockserwis.fm/*"],
    js: "rockserwis.fm.js",
    id: "rockserwis.fm"
  },
  {
    label: "Bossa Jazz Brasil",
    matches: ["*://bossajazzbrasil.com/ouca-on-line/*"],
    js: "bossajazzbrazil.js",
    id: "bossajazzbrazil"
  },
  {
    label: "Kiss rádio",
    matches: ["*://www.kiss.cz/online/*"],
    js: "kiss.js",
    id: "kiss"
  },
  {
    label: "Radio SAW",
    matches: ["*://www.radiosaw.de/*"],
    js: "radiosaw.js",
    id: "radiosaw"
  },
  {
    label: "Star FM",
    matches: ["*://tv3.lv/starfm/online/*"],
    js: "starfm.js",
    id: "starfm"
  },
  {
    label: "bandwagon",
    matches: ["*://bandwagon.fm/*"],
    js: "bandwagon.js",
    id: "bandwagon"
  },
  {
    label: "Meloradio",
    matches: ["*://player.meloradio.pl/*"],
    js: "meloradio.js",
    id: "meloradio"
  },
  {
    label: "The Indie Beat Television",
    matches: ["*://tv.theindiebeat.fm/*"],
    js: "theindiebeat-owncast.js",
    id: "theindiebeat-tv"
  },
  {
    label: "escradio",
    matches: ["*://www.escradio.com/player/*"],
    js: "escradio.js",
    id: "escradio"
  },
  {
    label: "musicMe",
    matches: ["*://*.musicme.com/*"],
    js: "musicme.js",
    id: "musicme",
    allFrames: !0
  },
  {
    label: "zxART",
    matches: ["*://zxart.ee/*"],
    js: "zxart.js",
    id: "zxart"
  },
  {
    label: "DNA Lounge",
    matches: ["*://www.dnalounge.com/webcast/video.html"],
    js: "dnalounge.js",
    id: "dnalounge"
  },
  {
    label: "The Lot Radio",
    matches: ["*://www.thelotradio.com/shows/*"],
    js: "thelotradio.js",
    id: "thelotradio"
  },
  {
    label: "pixabay",
    matches: [
      "*://pixabay.com/music/*",
      "*://pixabay.com/users/*",
      "*://pixabay.com/playlists/*",
      "*://pixabay.com/accounts/playlists/*"
    ],
    js: "pixabay.js",
    id: "pixabay"
  }
];
function ds(t) {
  return t.replace(/[$()*+.?[\\^{|}]/g, "\\$&");
}
function $e(t) {
  return t.split("*").map(ds).join(".*");
}
function nt(t) {
  if (typeof t != "string")
    return null;
  const e = /^(\*|https?):\/\/([^/]*)(\/.*)/.exec(t);
  if (!e)
    return null;
  const s = e[1], a = e[2], r = e[3];
  let n = "^";
  if (s === "*" ? n += "https?" : n += `${s}`, n += ds("://"), a === "*")
    n += "[^\\/]+";
  else if (a) {
    let g = a;
    a.startsWith("*.") && (n += "([^\\/]+\\.|)", g = g.substr(2)), n += $e(g);
  } else
    return null;
  return n += $e(r), n += "$", new RegExp(n);
}
function lt(t, e) {
  const s = nt(e);
  return s ? s.test(t) : !1;
}
const ct = L(as);
function dt() {
  return ct.get();
}
async function Ee(t) {
  const e = await dt() || {};
  for (const s of Re) {
    const a = s.matches || [];
    e[s.id] && a.push(...e[s.id]);
    for (const r of a)
      if (lt(t, r))
        return s;
  }
  return null;
}
const P = L(ns), H = L(
  ss
), de = L(
  ts
), be = "useNotifications", he = "useUnrecognizedSongNotifications", Te = "showInfobox", Le = "scrobblePodcasts", xe = "autoToggleLove", Pe = "forceRecognize", Ne = "scrobbleRecognizedTracks", Oe = "scrobbleEditedTracksOnly", ms = "scrobblePercent", I = "disabledConnectors", us = "debugLoggingEnabled", gs = "albumGuessingDisabled", bs = "albumGuessingUneditedOnly", hs = "albumGuessingAllTracks", fs = {
  [Pe]: !1,
  [Le]: !0,
  [be]: !0,
  [he]: !1,
  [Ne]: !0,
  [Oe]: !1,
  [us]: !1,
  [ms]: Hs,
  [Te]: !0,
  [xe]: !0,
  [gs]: !1,
  [bs]: !0,
  [hs]: !1,
  [I]: {}
}, mt = {
  [Pe]: !1,
  [Ne]: !0,
  [Oe]: !1,
  [Le]: !0,
  [be]: !0,
  [he]: !1,
  [Te]: !0,
  [xe]: !0
}, W = {
  YouTube: {
    scrobbleMusicOnly: !1,
    scrobbleEntertainmentOnly: !1,
    scrobbleMusicRecognisedOnly: !1,
    enableGetTrackInfoFromYtMusic: !1
  }
};
async function ut() {
  const t = { ...fs, ...await P.get() };
  await P.set(t), P.debugLog([I]);
  const e = {
    ...W,
    ...await H.get()
  };
  for (const s in W) {
    const a = s;
    e[a] = {
      ...W[a],
      ...e[a]
    };
  }
  await H.set(e), H.debugLog(), de.debugLog();
}
async function gt() {
  const t = await P.get();
  if (!t)
    throw new Error("No options data found");
  for (const e of Object.keys(t[I])) {
    let s = !1;
    for (const a of Re)
      if (a.id === e) {
        s = !0;
        break;
      }
    s || delete t[I][e];
  }
}
async function Ce(t, e) {
  if (ws(t), e !== void 0) {
    const a = await ps(e, t);
    if (a !== void 0)
      return a;
  }
  return (await P.get())?.[t];
}
async function bt(t, e) {
  ws(t), await P.update({ [t]: e });
}
async function ht(t, e) {
  return js(t), ys(t, e), (await H.get())?.[t][e];
}
async function ft(t, e, s) {
  js(t), ys(t, e);
  const a = await H.get();
  if (!a?.[t])
    throw new Error(`Connector ${t} not found in storage`);
  a[t][e] = s, await H.set(a);
}
async function ps(t, e) {
  return wt(e) ? (await de.get())?.[t]?.[e] : void 0;
}
async function pt(t, e, s) {
  const a = await de.get();
  if (!a)
    throw new Error("No connectors override data found");
  a[t] || (a[t] = {}), a[t][e] = s, await de.set(a);
}
function ws(t) {
  if (!(t in fs))
    throw new Error(`Unknown option key: ${t}`);
  return !0;
}
function wt(t) {
  return t in mt;
}
function js(t) {
  if (!(t in W))
    throw new Error(`Unknown connector: ${t}`);
  return !0;
}
function ys(t, e) {
  if (!(e in W[t]))
    throw new Error(`Unknown connector option key: ${e}`);
  return !0;
}
async function jt(t) {
  const e = await P.get();
  if (!e)
    throw new Error("No options data found");
  return !e[I][t.id];
}
async function yt(t, e) {
  const s = await P.get();
  if (!s)
    throw new Error("No options data found");
  e ? delete s[I][t.id] : s[I][t.id] = !0, await P.set(s);
}
async function At(t) {
  const e = await P.get();
  if (!e)
    throw new Error("No options data found");
  if (e[I] = {}, !t)
    for (const s of Re)
      e[I][s.id] = !0;
  await P.set(e);
}
ut().then(gt);
const vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALBUM_GUESSING_ALL_TRACKS: hs,
  ALBUM_GUESSING_DISABLED: gs,
  ALBUM_GUESSING_UNEDITED_ONLY: bs,
  AUTO_TOGGLE_LOVE: xe,
  DEBUG_LOGGING_ENABLED: us,
  DISABLED_CONNECTORS: I,
  FORCE_RECOGNIZE: Pe,
  SCROBBLE_EDITED_TRACKS_ONLY: Oe,
  SCROBBLE_PERCENT: ms,
  SCROBBLE_PODCASTS: Le,
  SCROBBLE_RECOGNIZED_TRACKS: Ne,
  USE_INFOBOX: Te,
  USE_NOTIFICATIONS: be,
  USE_UNRECOGNIZED_SONG_NOTIFICATIONS: he,
  getConnectorOption: ht,
  getConnectorOverrideOption: ps,
  getOption: Ce,
  isConnectorEnabled: jt,
  setAllConnectorsEnabled: At,
  setConnectorEnabled: yt,
  setConnectorOption: ft,
  setConnectorOverrideOption: pt,
  setOption: bt
}, Symbol.toStringTag, { value: "Module" }));
class Ie {
  /**
  * Get song artist.
  *
  * @returns Song artist
  */
  getArtist() {
    return this.processed.artist || this.parsed.artist;
  }
  /**
  * Get song title.
  *
  * @returns Song title
  */
  getTrack() {
    return this.processed.track || this.parsed.track;
  }
  /**
  * Get song album.
  *
  * @returns Song album
  */
  getAlbum() {
    return this.processed.album || this.parsed.album;
  }
  /**
  * Return song's album artist (Optional)
  * @returns Album artist
  */
  getAlbumArtist() {
    return this.processed.albumArtist || this.parsed.albumArtist;
  }
  /**
  * Returns song's processed or parsed duration in seconds.
  * Parsed duration (received from connector) is preferred.
  *
  * @returns Song duration
  */
  getDuration() {
    return this.parsed.duration || this.processed.duration;
  }
  /**
  * Return the track art URL associated with the song.
  * Parsed track art (received from connector) is preferred.
  *
  * @returns Track art URL
  */
  getTrackArt() {
    return this.parsed.trackArt || this.metadata.trackArtUrl || null;
  }
  /**
  * Get formatted "Artist - Track" string. Return null if song is empty.
  *
  * @returns Formatted string
  */
  getArtistTrackString() {
    return this.isEmpty() ? null : `${this.getArtist() ?? "undefined"} — ${this.getTrack() ?? "undefined"}`;
  }
  /**
  * Get song unique ID.
  *
  * @returns Unique ID
  */
  getUniqueId() {
    return this.parsed.uniqueID;
  }
  /**
  * Get song source URL.
  *
  * @returns source URL.
  */
  getOriginUrl() {
    return this.parsed.originUrl;
  }
  /**
  * Check if song is empty. Empty song means it's missing
  * either artist or track title.
  *
  * @returns True if song is empty; false otherwise
  */
  isEmpty() {
    return !(this.getArtist() && this.getTrack());
  }
  /**
  * Check if song is valid. The song means valid if it's known by
  * scrobbler service or is corrected by the user.
  *
  * @returns True if song is valid; false otherwise
  */
  isValid() {
    return this.flags.isValid || this.flags.isCorrectedByUser;
  }
  /**
  * Check if song equals another song.
  * @param song - Song instance to compare
  * @returns Check result
  */
  equals(e) {
    if (!e || !(e instanceof Ie))
      return !1;
    const s = this.getUniqueId(), a = e.getUniqueId();
    return s || a ? s === a : this.getArtist() === e.getArtist() && this.getTrack() === e.getTrack() && this.getAlbum() === e.getAlbum();
  }
  /**
  * Get a string representing the song.
  *
  * @returns String representing the object.
  */
  toString() {
    return JSON.stringify(this, null, 2);
  }
  /**
  * Get song data to send it to different context.
  *
  * @returns Object contain song data
  */
  getCloneableData() {
    return {
      parsed: this.parsed,
      noRegex: this.noRegex,
      processed: this.processed,
      metadata: this.metadata,
      flags: this.flags,
      connector: this.connector
    };
  }
  /**
  * Set `Love` status of song.
  *
  * This function is supposed to be used by multiple scrobblers
  * (services). Each service can have different value of `Love` flag;
  * the behavior of the function is to set `Love` to true, if all
  * services have the song with `Love` set to true.
  * @param isLoved - Flag means song is loved or not
  * @param force - Force status assignment
  */
  setLoveStatus(e, s = !1) {
    if (s) {
      this.metadata.userloved = e;
      return;
    }
    e ? this.metadata.userloved === void 0 && (this.metadata.userloved = !0) : this.metadata.userloved = !1;
  }
  /**
  * Custom fields can be defined by user.
  */
  static get USER_FIELDS() {
    return ["artist", "track", "album", "albumArtist"];
  }
  /**
  * Fields used to identify song.
  */
  static get BASE_FIELDS() {
    return ["artist", "track", "album", "albumArtist"];
  }
  /**
  * Fields in a processed song.
  */
  static get PROCESSED_FIELDS() {
    return ["track", "album", "artist", "albumArtist", "duration"];
  }
}
var le = { exports: {} }, kt = le.exports, He;
function St() {
  return He || (He = 1, (function(t) {
    (function(e) {
      function s(l, c) {
        var i = (l & 65535) + (c & 65535), h = (l >> 16) + (c >> 16) + (i >> 16);
        return h << 16 | i & 65535;
      }
      function a(l, c) {
        return l << c | l >>> 32 - c;
      }
      function r(l, c, i, h, w, y) {
        return s(a(s(s(c, l), s(h, y)), w), i);
      }
      function n(l, c, i, h, w, y, k) {
        return r(c & i | ~c & h, l, c, w, y, k);
      }
      function g(l, c, i, h, w, y, k) {
        return r(c & h | i & ~h, l, c, w, y, k);
      }
      function p(l, c, i, h, w, y, k) {
        return r(c ^ i ^ h, l, c, w, y, k);
      }
      function j(l, c, i, h, w, y, k) {
        return r(i ^ (c | ~h), l, c, w, y, k);
      }
      function S(l, c) {
        l[c >> 5] |= 128 << c % 32, l[(c + 64 >>> 9 << 4) + 14] = c;
        var i, h, w, y, k, m = 1732584193, o = -271733879, u = -1732584194, d = 271733878;
        for (i = 0; i < l.length; i += 16)
          h = m, w = o, y = u, k = d, m = n(m, o, u, d, l[i], 7, -680876936), d = n(d, m, o, u, l[i + 1], 12, -389564586), u = n(u, d, m, o, l[i + 2], 17, 606105819), o = n(o, u, d, m, l[i + 3], 22, -1044525330), m = n(m, o, u, d, l[i + 4], 7, -176418897), d = n(d, m, o, u, l[i + 5], 12, 1200080426), u = n(u, d, m, o, l[i + 6], 17, -1473231341), o = n(o, u, d, m, l[i + 7], 22, -45705983), m = n(m, o, u, d, l[i + 8], 7, 1770035416), d = n(d, m, o, u, l[i + 9], 12, -1958414417), u = n(u, d, m, o, l[i + 10], 17, -42063), o = n(o, u, d, m, l[i + 11], 22, -1990404162), m = n(m, o, u, d, l[i + 12], 7, 1804603682), d = n(d, m, o, u, l[i + 13], 12, -40341101), u = n(u, d, m, o, l[i + 14], 17, -1502002290), o = n(o, u, d, m, l[i + 15], 22, 1236535329), m = g(m, o, u, d, l[i + 1], 5, -165796510), d = g(d, m, o, u, l[i + 6], 9, -1069501632), u = g(u, d, m, o, l[i + 11], 14, 643717713), o = g(o, u, d, m, l[i], 20, -373897302), m = g(m, o, u, d, l[i + 5], 5, -701558691), d = g(d, m, o, u, l[i + 10], 9, 38016083), u = g(u, d, m, o, l[i + 15], 14, -660478335), o = g(o, u, d, m, l[i + 4], 20, -405537848), m = g(m, o, u, d, l[i + 9], 5, 568446438), d = g(d, m, o, u, l[i + 14], 9, -1019803690), u = g(u, d, m, o, l[i + 3], 14, -187363961), o = g(o, u, d, m, l[i + 8], 20, 1163531501), m = g(m, o, u, d, l[i + 13], 5, -1444681467), d = g(d, m, o, u, l[i + 2], 9, -51403784), u = g(u, d, m, o, l[i + 7], 14, 1735328473), o = g(o, u, d, m, l[i + 12], 20, -1926607734), m = p(m, o, u, d, l[i + 5], 4, -378558), d = p(d, m, o, u, l[i + 8], 11, -2022574463), u = p(u, d, m, o, l[i + 11], 16, 1839030562), o = p(o, u, d, m, l[i + 14], 23, -35309556), m = p(m, o, u, d, l[i + 1], 4, -1530992060), d = p(d, m, o, u, l[i + 4], 11, 1272893353), u = p(u, d, m, o, l[i + 7], 16, -155497632), o = p(o, u, d, m, l[i + 10], 23, -1094730640), m = p(m, o, u, d, l[i + 13], 4, 681279174), d = p(d, m, o, u, l[i], 11, -358537222), u = p(u, d, m, o, l[i + 3], 16, -722521979), o = p(o, u, d, m, l[i + 6], 23, 76029189), m = p(m, o, u, d, l[i + 9], 4, -640364487), d = p(d, m, o, u, l[i + 12], 11, -421815835), u = p(u, d, m, o, l[i + 15], 16, 530742520), o = p(o, u, d, m, l[i + 2], 23, -995338651), m = j(m, o, u, d, l[i], 6, -198630844), d = j(d, m, o, u, l[i + 7], 10, 1126891415), u = j(u, d, m, o, l[i + 14], 15, -1416354905), o = j(o, u, d, m, l[i + 5], 21, -57434055), m = j(m, o, u, d, l[i + 12], 6, 1700485571), d = j(d, m, o, u, l[i + 3], 10, -1894986606), u = j(u, d, m, o, l[i + 10], 15, -1051523), o = j(o, u, d, m, l[i + 1], 21, -2054922799), m = j(m, o, u, d, l[i + 8], 6, 1873313359), d = j(d, m, o, u, l[i + 15], 10, -30611744), u = j(u, d, m, o, l[i + 6], 15, -1560198380), o = j(o, u, d, m, l[i + 13], 21, 1309151649), m = j(m, o, u, d, l[i + 4], 6, -145523070), d = j(d, m, o, u, l[i + 11], 10, -1120210379), u = j(u, d, m, o, l[i + 2], 15, 718787259), o = j(o, u, d, m, l[i + 9], 21, -343485551), m = s(m, h), o = s(o, w), u = s(u, y), d = s(d, k);
        return [m, o, u, d];
      }
      function v(l) {
        var c, i = "", h = l.length * 32;
        for (c = 0; c < h; c += 8)
          i += String.fromCharCode(l[c >> 5] >>> c % 32 & 255);
        return i;
      }
      function M(l) {
        var c, i = [];
        for (i[(l.length >> 2) - 1] = void 0, c = 0; c < i.length; c += 1)
          i[c] = 0;
        var h = l.length * 8;
        for (c = 0; c < h; c += 8)
          i[c >> 5] |= (l.charCodeAt(c / 8) & 255) << c % 32;
        return i;
      }
      function ee(l) {
        return v(S(M(l), l.length * 8));
      }
      function B(l, c) {
        var i, h = M(l), w = [], y = [], k;
        for (w[15] = y[15] = void 0, h.length > 16 && (h = S(h, l.length * 8)), i = 0; i < 16; i += 1)
          w[i] = h[i] ^ 909522486, y[i] = h[i] ^ 1549556828;
        return k = S(w.concat(M(c)), 512 + c.length * 8), v(S(y.concat(k), 640));
      }
      function _(l) {
        var c = "0123456789abcdef", i = "", h, w;
        for (w = 0; w < l.length; w += 1)
          h = l.charCodeAt(w), i += c.charAt(h >>> 4 & 15) + c.charAt(h & 15);
        return i;
      }
      function D(l) {
        return unescape(encodeURIComponent(l));
      }
      function se(l) {
        return ee(D(l));
      }
      function te(l) {
        return _(se(l));
      }
      function ae(l, c) {
        return B(D(l), D(c));
      }
      function re(l, c) {
        return _(ae(l, c));
      }
      function ie(l, c, i) {
        return c ? i ? ae(c, l) : re(c, l) : i ? se(l) : te(l);
      }
      t.exports ? t.exports = ie : e.md5 = ie;
    })(kt);
  })(le)), le.exports;
}
var Rt = St();
const Et = /* @__PURE__ */ Je(Rt);
class Tt {
  storageRef;
  constructor() {
    this.storageRef = null;
  }
  _init(e) {
    this.storageRef = e;
  }
  /**
  * Remove all data from the storage.
  */
  async clear() {
    if (this.storageRef)
      return await this.storageRef.clear();
  }
  /**
  * Return data from the storage.
  *
  * @returns Storage data
  */
  async getData() {
    return this.storageRef ? await this.storageRef.get() : (U("Storage reference is not initialized", "warn"), null);
  }
  /**
  * Overwrite a given data to the storage.
  *
  * @param data - Data to save
  * @returns Storage data
  */
  async saveData(e) {
    if (!this.storageRef) {
      U("Storage reference is not initialized", "warn");
      return;
    }
    return await this.storageRef.set(e);
  }
  /**
  * Append a given data in the storage.
  *
  * @param data - Data to save
  * @returns Storage data
  */
  async updateData(e) {
    if (!this.storageRef) {
      U("Storage reference is not initialized", "warn");
      return;
    }
    return await this.storageRef.update(e);
  }
}
const Lt = [
  {
    search: {
      track: null,
      artist: null,
      album: "(.*) - Single",
      albumArtist: null
    },
    replace: {
      track: null,
      artist: null,
      album: "$1",
      albumArtist: null
    }
  },
  {
    search: {
      track: null,
      artist: null,
      album: "(.*) - EP",
      albumArtist: null
    },
    replace: {
      track: null,
      artist: null,
      album: "$1",
      albumArtist: null
    }
  }
];
async function xt() {
  const t = L(ls);
  await t.get() || t.set(Lt);
}
class Pt extends Tt {
  MAX_SCROBBLE_CACHE_SIZE = 1e3;
  /**
  * Replace the data for a scrobble in the scrobble cache
  *
  * @param id - ID of the scrobble to modify
  * @param scrobble - data to replace it with
  */
  async replaceScrobble(e, s) {
    const a = await this.getScrobbleCacheStorageLocking();
    if (a) {
      for (let r = 0; r < a.length; r++)
        a[r].id === e && (a[r] = {
          ...s,
          id: e
        });
      await this.saveScrobbleCacheToStorageLocking(a);
    }
  }
  /**
  * Save scrobble to the storage.
  *
  * @param scrobble - {@link CacheScrobbleData} to save
  *
  * @returns the id of the new scrobble
  */
  async pushScrobble(e) {
    const s = await this.getScrobbleCacheStorageLocking();
    if (s === null)
      return await this.saveScrobbleCacheToStorageLocking([
        {
          ...e,
          id: 1
        }
      ]), 1;
    const a = (s.at(-1)?.id ?? 0) + 1;
    return s.push({
      ...e,
      id: a
    }), await this.saveScrobbleCacheToStorageLocking(
      s.slice(-this.MAX_SCROBBLE_CACHE_SIZE)
    ), a;
  }
  async deleteScrobbles(e) {
    const s = await this.getScrobbleCacheStorageLocking();
    if (!s)
      return;
    const a = /* @__PURE__ */ new Map();
    for (const r of e)
      a.set(r, !0);
    await this.saveScrobbleCacheToStorageLocking(
      s.filter((r) => a.get(r.id) !== !0)
    );
  }
}
class Nt extends Pt {
  scrobbleCacheStorage = this.getStorage();
  init() {
    this._init(
      Se(we)
    );
  }
  /** @override */
  async getScrobbleCacheStorage() {
    return this.scrobbleCacheStorage.get();
  }
  /** @override */
  async getScrobbleCacheStorageLocking() {
    return this.scrobbleCacheStorage.getLocking();
  }
  /** @override */
  async saveScrobbleCacheToStorage(e) {
    return await this.scrobbleCacheStorage.set(e);
  }
  /** @override */
  async saveScrobbleCacheToStorageLocking(e) {
    return await this.scrobbleCacheStorage.setLocking(e);
  }
  /** @override */
  getStorage() {
    return L(we);
  }
}
const Ot = new Nt(), Ue = {
  [Ps]: !0,
  [Is]: !0,
  [Us]: !0,
  [Ms]: !0,
  [Cs]: !0,
  [_s]: !0,
  [Os]: !0,
  [Ns]: !0,
  [Ds]: !0,
  [zs]: !0
};
L(ke);
const Y = L(ve), Ct = L(os), A = {
  ENABLE_CONNECTOR: "enableConnector",
  DISABLE_CONNECTOR: "disableConnector",
  DISABLE_UNTIL_CLOSED: "disableUntilClosed",
  ENABLE_CHANNEL: "enableChannel",
  DISABLE_CHANNEL: "disableChannel"
};
async function It(t, e) {
  if (!t)
    return [];
  const s = [];
  for (const r of t)
    s.push(e(r));
  const a = [];
  for (const [r, n] of (await Promise.all(s)).entries())
    n && a.push(t[r]);
  return a;
}
async function Me(t) {
  return It(t, async (e) => {
    try {
      const s = await b.tabs.get(e.tabId);
      return await Ee(s.url ?? ""), !0;
    } catch {
      return !1;
    }
  });
}
async function Ut(t) {
  return N(t, {
    type: "getChannelDetails",
    payload: void 0
  });
}
async function Mt(t, e) {
  const s = (await Ct.get())?.[e.id];
  return !s || !s[t] ? null : s[t];
}
function _t() {
  return Y.unlock();
}
async function V(t) {
  return Y.setLocking(t);
}
async function _e(t, e) {
  const s = zt(t);
  let a = e;
  a || (a = await me());
  const r = await Dt(a);
  return s && !Ue[r.mode] ? s : r;
}
async function Dt(t) {
  try {
    if (!await b.tabs.get(t))
      throw new Error("Tab not found");
    const s = await N(t, {
      type: "getConnectorDetails",
      payload: void 0
    });
    return {
      tabId: t,
      mode: s.mode,
      permanentMode: s.permanentMode,
      song: s.song
    };
  } catch {
    return {
      tabId: t,
      mode: J,
      permanentMode: J,
      song: null
    };
  }
}
function zt(t) {
  for (const e of t)
    if (Ue[e.mode])
      return e;
  return null;
}
async function me() {
  const t = { active: !0, lastFocusedWindow: !0 }, [e] = await b.tabs.query(t);
  return e?.id ?? -1;
}
async function As() {
  const t = await Y.get() ?? De;
  return _e(t.activeTabs);
}
async function fe() {
  return await Y.getLocking() ?? De;
}
async function Bt() {
  return (await Y.get())?.browserPreferredTheme ?? "light";
}
const De = {
  activeTabs: [],
  browserPreferredTheme: "light"
};
function vs(t) {
  N(t, {
    type: "setConnectorState",
    payload: !1
  });
}
function ks(t) {
  N(t, {
    type: "setConnectorState",
    payload: !0
  });
}
function Ft(t) {
  N(t, {
    type: "addToBlocklist",
    payload: void 0
  });
}
function qt(t) {
  N(t, {
    type: "removeFromBlocklist",
    payload: void 0
  });
}
function $t(t) {
  N(t, {
    type: "disableConnectorUntilTabIsClosed",
    payload: void 0
  });
}
class C extends Ie {
  parsed;
  processed;
  noRegex;
  flags;
  metadata;
  connector;
  controllerTabId;
  constructor(e, s) {
    super(), this.parsed = e.parsed, this.processed = e.processed, this.noRegex = e.noRegex, this.flags = e.flags, this.metadata = e.metadata, this.connector = e.connector, this.controllerTabId = s;
  }
  resetData() {
    N(this.controllerTabId, {
      type: "resetData",
      payload: void 0
    });
  }
  resetInfo() {
    N(this.controllerTabId, {
      type: "resetInfo",
      payload: void 0
    });
  }
}
async function Ht(t) {
  Ys({
    type: "currentTab",
    payload: t
  }).catch((e) => {
    console.warn(e);
  }), await Gt(t), Kt(t);
}
async function Gt(t) {
  if (t.mode === J) {
    b.contextMenus?.update(A.ENABLE_CONNECTOR, {
      visible: !1
    }), b.contextMenus?.update(A.DISABLE_CONNECTOR, {
      visible: !1
    }), b.contextMenus?.update(A.DISABLE_UNTIL_CLOSED, {
      visible: !1
    }), b.contextMenus?.update(A.DISABLE_CHANNEL, {
      visible: !1
    }), b.contextMenus?.update(A.ENABLE_CHANNEL, {
      visible: !1
    });
    return;
  }
  const e = await b.tabs.get(t.tabId), s = await Ee(e.url ?? "");
  if (t.mode === We) {
    b.contextMenus?.update(A.ENABLE_CONNECTOR, {
      visible: !0,
      title: q("menuEnableConnector", s?.label)
    }), b.contextMenus?.update(A.DISABLE_CONNECTOR, {
      visible: !1
    }), b.contextMenus?.update(A.DISABLE_UNTIL_CLOSED, {
      visible: !1
    }), b.contextMenus?.update(A.DISABLE_CHANNEL, {
      visible: !1
    }), b.contextMenus?.update(A.ENABLE_CHANNEL, {
      visible: !1
    });
    return;
  }
  b.contextMenus?.update(A.ENABLE_CONNECTOR, {
    visible: !1
  }), b.contextMenus?.update(A.DISABLE_CONNECTOR, {
    visible: !0,
    title: q("menuDisableConnector", s?.label)
  }), b.contextMenus?.update(A.DISABLE_UNTIL_CLOSED, {
    visible: !0,
    title: q("menuDisableUntilTabClosed", s?.label)
  });
  const a = await Ut(t.tabId);
  !a || !a.channelInfo?.id || !a.connector ? (b.contextMenus?.update(A.DISABLE_CHANNEL, {
    visible: !1
  }), b.contextMenus?.update(A.ENABLE_CHANNEL, {
    visible: !1
  })) : await Mt(
    a.channelInfo.id,
    a.connector
  ) ? (b.contextMenus?.update(A.DISABLE_CHANNEL, {
    visible: !1
  }), b.contextMenus?.update(A.ENABLE_CHANNEL, {
    visible: !0,
    title: q("menuEnableChannel", a.channelInfo.label)
  })) : (b.contextMenus?.update(A.DISABLE_CHANNEL, {
    visible: !0,
    title: q("menuDisableChannel", a.channelInfo.label)
  }), b.contextMenus?.update(A.ENABLE_CHANNEL, {
    visible: !1
  }));
}
function oe(t) {
  const e = b.runtime.getURL(t);
  return e.startsWith("safari") ? t : e;
}
async function Kt(t) {
  let e = "";
  if (t.song) {
    const r = new C(t.song, -1);
    e = `${r.getArtist()} - ${r.getTrack()}`;
  }
  const s = await Wt(), a = (r) => `icons/action_${t.mode.toLowerCase()}_${r}_${s}.png`;
  b.action.setIcon({
    path: {
      16: oe(a(16)),
      19: oe(a(19)),
      32: oe(a(32)),
      38: oe(a(38))
    }
  }), b.action.setTitle({
    title: q(`pageAction${t.mode}`, e)
  });
}
async function Wt() {
  return b.notifications ? Bt() : "safari";
}
class Jt {
  storage = L(
    is
  );
  /**
  * Add connector ID to list of connectors that has been notified about.
  *
  * @param id - ID of connector to add
  */
  async saveHasNotified(e) {
    if (!e)
      return;
    let s = await this.storage.getLocking();
    s || (s = {}), s[e] = !0, await this.storage.setLocking(s);
  }
  /**
  * @param id - ID of connector to check
  *
  * @returns true if notification has not been given for connector; false otherwise
  */
  async shouldNotifyAboutNativeScrobbler(e) {
    const s = await this.storage.get();
    return s ? !s[e] : !0;
  }
}
const Vt = b.runtime.getManifest(), Qt = {
  type: "basic",
  iconUrl: b.runtime.getURL(Vt.icons?.["128"] ?? "")
}, ue = b.runtime.getURL("/img/cover_art_default.png"), Yt = b.runtime.getURL("img/cover_art_unknown.png"), Zt = 5e3, Q = {};
let ce = null;
async function Xt() {
  return b?.notifications ? await Ws() === "mac" ? !await Js() : !0 : !1;
}
async function Ss(t) {
  return Ce(be, t.id);
}
function ea(t, e) {
  Q[t] = e;
}
function sa(t) {
  Q[t] && delete Q[t];
}
async function Z(t, e) {
  if (!await Xt())
    throw new Error("Notifications are not available");
  typeof e == "function" && (t.isClickable = !0);
  const s = {
    ...Qt,
    ...t
  };
  let a;
  try {
    a = await b.notifications?.create(
      "",
      s
    );
  } catch (r) {
    if (s.iconUrl === ue)
      throw r;
    s.iconUrl = ue, a = await b.notifications?.create(
      "",
      s
    );
  }
  return typeof e == "function" && ea(a, e), a;
}
async function ta(t) {
  const e = new Jt();
  if (!t.hasNativeScrobbler || !await e.shouldNotifyAboutNativeScrobbler(
    t.id
  ))
    return;
  const s = {
    title: b.i18n.getMessage(
      "notificationNativeScrobbler",
      t.label
    ),
    message: b.i18n.getMessage("notificationNativeScrobblerText")
  };
  try {
    await Z(s, () => {
      b.tabs.create({
        url: b.runtime.getURL(
          "src/ui/options/index.html?p=connectors"
        )
      });
    }), await e.saveHasNotified(t.id);
  } catch (a) {
    R("Unable to show native scrobbler notification: ", "warn"), R(a, "warn");
  }
}
async function aa(t, e, s) {
  if (!await Ss(e))
    return;
  const a = t.metadata.label, r = t.getTrackArt() || ue;
  let n = t.getArtist(), g = t.getTrack();
  const p = t.getAlbum();
  p && (n = `${n ?? "null"}
${p}`);
  const j = t.metadata.userPlayCount;
  if (j) {
    const v = b.i18n.getMessage(
      "infoYourScrobbles",
      j.toString()
    );
    n = `${n ?? "null"}
${v}`;
  }
  const S = {
    iconUrl: r,
    title: g ?? "null",
    message: n ?? "null",
    silent: !0,
    contextMessage: a
  };
  Rs(), ce = setTimeout(() => {
    Z(S, s).then((v) => {
      t.metadata.notificationId = v;
    }).catch((v) => {
      R("Unable to show now playing notification: ", "warn"), R(v, "warn");
    });
  }, Zt);
}
function ra(t) {
  if (!t.metadata.notificationId)
    throw new Error("Notification ID is not set");
  Rs(), ma(t.metadata.notificationId);
}
async function ia(t, e, s) {
  if (!await Ce(
    he,
    e.id
  ))
    return;
  const a = {
    iconUrl: Yt,
    title: b.i18n.getMessage("notificationNotRecognized"),
    message: b.i18n.getMessage("notificationNotRecognizedText")
  };
  try {
    const r = await Z(a, s);
    t.metadata.notificationId = r;
  } catch (r) {
    R("Unable to show song not recognized notification: ", "warn"), R(r, "warn");
  }
}
const oa = 3, je = L(
  rs
);
async function na() {
  return ((await je.get())?.authDisplayCount || 0) < oa;
}
async function la() {
  let t = await je.get();
  t || (t = {
    authDisplayCount: 0
  }), t.authDisplayCount = t.authDisplayCount + 1, await je.set(t);
}
async function ca() {
  if (!await na())
    return;
  const t = {
    title: b.i18n.getMessage("notificationConnectAccounts"),
    message: b.i18n.getMessage("notificationConnectAccountsText")
  };
  try {
    await Z(t, () => {
      b.tabs.create({
        url: b.runtime.getURL(
          "src/ui/options/index.html?p=accounts"
        )
      });
    });
  } catch (e) {
    R("Unable to show auth notification: ", "warn"), R(e, "warn"), b.tabs.create({
      url: b.runtime.getURL("src/ui/options/index.html?p=accounts")
    });
  }
  la();
}
async function da(t, e) {
  if (!await Ss(t.connector))
    return;
  const s = t.getTrackArt() || ue, a = `${t.getTrack()}
${t.getArtist()}`, r = e ? b.i18n.getMessage("pageActionLoved", a) : b.i18n.getMessage("pageActionUnloved", a), n = {
    iconUrl: s,
    title: r,
    message: a
  };
  try {
    await Z(n, null);
  } catch (g) {
    R("Unable to show loved notification: ", "warn"), R(g, "warn");
  }
}
function ma(t) {
  t && b.notifications?.clear(t);
}
function Rs() {
  ce && (clearTimeout(ce), ce = null);
}
b.notifications?.onClicked.addListener((t) => {
  R(`Notification onClicked: ${t}`), Q[t] && Q[t](t);
});
b.notifications?.onClosed.addListener((t) => {
  sa(t);
});
async function ua(t) {
  if (typeof t.id > "u")
    throw new Error(`Could not identify tab: ${JSON.stringify(t)}`);
  let e = t.url;
  if (typeof e > "u" && (e = await b.tabs.get(t.id).then((s) => s.url)), typeof e > "u")
    throw new Error(
      `Could not identify URL of tab: ${JSON.stringify(t)}`
    );
  return ga(t.id, e);
}
async function ga(t, e) {
  if (!await Ee(e))
    return;
  b.scripting.executeScript({
    target: { tabId: t },
    files: ["content/main.js"]
  });
}
async function ba() {
  const t = await b.tabs?.query({});
  for (const e of t ?? [])
    try {
      await ua(e);
    } catch (s) {
      console.warn("Error while injecting into tab: ", s);
    }
}
class X {
  storage;
  userApiUrl = null;
  userToken = null;
  arrayProperties = null;
  constructor() {
    this.storage = this.initStorage(), this.initUserProps(), Xe(
      E({
        type: "updateScrobblerProperties",
        fn: () => {
          this.initUserProps();
        }
      })
    );
  }
  /**
  * Get user property values.
  *
  * Each property is a property used internally in scrobblers.
  * Users can edit custom properties in the extension settings.
  */
  async getUserProperties() {
    const e = await this.storage.get();
    return !e || !("properties" in e) || !e.properties ? {} : e.properties;
  }
  /**
  * Apply user properties.
  *
  * Each property is a property used internally in scrobblers.
  * Users can edit custom properties in the extension settings.
  *
  * @param props - Object contains user properties
  */
  async applyUserProperties(e) {
    this.applyProps(e, this.getUserDefinedProperties());
    let s = await this.storage.get();
    if (s || (s = {}), !s) {
      U("No data in storage", "error");
      return;
    }
    if ((!("properties" in s) || s.properties === void 0) && (s.properties = {}), !("properties" in s) || s.properties === void 0) {
      U("No properties in storage", "error");
      return;
    }
    for (const a in e) {
      const r = e[a];
      r ? s.properties[a] = r : a in s.properties && delete s.properties[a];
    }
    await this.storage.set(s);
  }
  /**
  * Return a list of user-defined scrobbler properties.
  *
  * @returns a list of user-defined scrobbler properties.
  */
  getUserDefinedProperties() {
    return [];
  }
  /**
  * Return a list of user-defined scrobbler array properties.
  *
  * @returns a list of user-defined scrobbler array properties.
  */
  getUserDefinedArrayProperties() {
    return [];
  }
  /**
  * Get array property values
  *
  * Each property is a property used internally in scrobblers.
  * Users can add and remove custom array properties in the extension settings.
  */
  async getArrayProperties() {
    const e = await this.storage.get();
    return !e || !("arrayProperties" in e) || !e.arrayProperties ? [] : e.arrayProperties;
  }
  /**
  * Add array property values
  *
  * Each property is a property used internally in scrobblers.
  * Users can add and remove custom array properties in the extension settings.
  *
  * @param props - The properties to add to the array.
  */
  async addUserArrayProperties(e) {
    let s = await this.storage.get();
    if ((!s || !("arrayProperties" in s) || !s.arrayProperties) && (s = {
      arrayProperties: []
    }), !s || !("arrayProperties" in s) || !s.arrayProperties) {
      U("No data in storage", "error");
      return;
    }
    s.arrayProperties.push(e), this.applyArrayProps(
      s.arrayProperties,
      this.getUserDefinedArrayProperties()
    ), await this.storage.set(s);
  }
  /**
  * Apply array property values
  *
  * Replaces the property array with the one supplied in parameters.
  *
  * @param props - property values to apply
  */
  async applyUserArrayProperties(e) {
    let s = await this.storage.get();
    if ((!s || !("arrayProperties" in s) || !s.arrayProperties) && (s = {
      arrayProperties: []
    }), !s || !("arrayProperties" in s) || !s.arrayProperties) {
      U("No data in storage", "error");
      return;
    }
    s.arrayProperties = e, this.applyArrayProps(
      s.arrayProperties,
      this.getUserDefinedArrayProperties()
    ), await this.storage.set(s);
  }
  /**
  * Remove session info.
  */
  async signOut() {
    const e = await this.storage.get();
    if (!e) {
      U("No data in storage", "error");
      return;
    }
    "sessionID" in e && delete e.sessionID, "sessionName" in e && delete e.sessionName, "arrayProperties" in e && delete e.arrayProperties, await this.storage.set(e);
  }
  /**
  * Get URL to profile page.
  * @returns Profile URL
  */
  async getProfileUrl() {
    const { sessionName: e } = await this.getSession();
    return `${this.getBaseProfileUrl()}${e ?? "undefined"}`;
  }
  /** Scrobbler features. */
  /**
  * Check if service supports loving songs.
  * @returns True if service supports that; false otherwise
  */
  canLoveSong() {
    return !1;
  }
  /**
  * Check if service supports retrieving of song info.
  * @returns True if service supports that; false otherwise
  */
  canLoadSongInfo() {
    return !1;
  }
  /**
  * Apply filters over song object. Override if scrobbler requires custom global filtering.
  *
  * @param song - the song about to be dispatched
  * @returns updated song
  */
  applyFilter(e) {
    return e;
  }
  /** Constants */
  /**
  * Get timeout of all API requests in milliseconds.
  */
  get REQUEST_TIMEOUT() {
    return 15e3;
  }
  /** Misc */
  /**
  * Helper function to show debug output.
  * @param text - Debug message
  * @param logType - Log type
  */
  debugLog(e, s = "log") {
    const a = `${this.getLabel()}: ${e}`;
    U(a, s);
  }
  /** Internal functions */
  initStorage() {
    const e = ["token", "sessionID", "sessionName"];
    e.push(...this.getUserDefinedProperties());
    const s = it(this.getStorageName());
    return s.debugLog(e), s;
  }
  async initUserProps() {
    const e = await this.storage.get();
    if (e && "properties" in e)
      for (const s in e.properties)
        s === "userApiUrl" && "userApiUrl" in e.properties && (this.userApiUrl = e.properties.userApiUrl), s === "userToken" && "userToken" in e.properties && (this.userToken = e.properties.userToken);
    e && "arrayProperties" in e && (this.arrayProperties = e.arrayProperties ?? []);
  }
  applyProps(e, s) {
    for (const a in e) {
      if (!s.includes(a))
        throw new Error(`Unknown property: ${a}`);
      const r = e[a];
      if (r === void 0)
        throw new Error(`Property is not set: ${a}`);
      r && a in this ? this[a] = e[a] : a in this && delete this[a];
    }
  }
  applyArrayProps(e, s) {
    if (!e)
      throw new Error("No props passed to applyArrayProps()");
    if (e.length === 0) {
      this.arrayProperties = [];
      return;
    }
    for (const a of e)
      for (const [r, n] of Object.entries(a)) {
        if (!s.includes(r))
          throw new Error(`Unknown property: ${r}`);
        if (n === void 0)
          throw new Error(`Property is not set: ${r}`);
      }
    this.arrayProperties = e;
  }
}
class Es extends X {
  isLocalOnly = !1;
  /** @override */
  async getAuthUrl() {
    const e = {
      method: "auth.gettoken"
    };
    let s = null, a = await this.storage?.get();
    try {
      s = (await this.sendRequest(
        { method: "GET" },
        e,
        !1
      )).token;
    } catch {
      throw this.debugLog("Error acquiring a token", "warn"), new Error("Error acquiring a token");
    }
    return a || (a = { token: s }), a.token = s, "sessionID" in a && delete a.sessionID, "sessionName" in a && delete a.sessionName, await this.storage.set(a), `${this.getBaseAuthUrl()}?api_key=${this.getApiKey()}&token=${s || ""}`;
  }
  /** @override */
  async getSession() {
    const e = await this.storage.get();
    if (!e)
      throw new Error(f.ERROR_AUTH);
    if (!("token" in e)) {
      if (!("sessionID" in e))
        throw new Error(f.ERROR_AUTH);
      return {
        sessionID: e.sessionID ?? "undefined",
        sessionName: e.sessionName
      };
    }
    const s = e.token || null;
    if (s !== null)
      try {
        const a = await this.tradeTokenForSession(s);
        return delete e.token, e.sessionID = a.sessionID, e.sessionName = a.sessionName, await this.storage.set(e), a;
      } catch {
        throw this.debugLog("Failed to trade token for session", "warn"), await this.signOut(), new Error(f.ERROR_AUTH);
      }
    return {
      sessionID: e.sessionID,
      sessionName: e.sessionName
    };
  }
  /** @override */
  async isReadyForGrantAccess() {
    const e = await this.storage.get();
    return !e || !("token" in e) ? !1 : !!e.token;
  }
  /** @override */
  async sendNowPlaying(e) {
    const { sessionID: s } = await this.getSession(), a = {
      method: "track.updatenowplaying",
      track: e.getTrack(),
      artist: e.getArtist(),
      sk: s
    };
    e.getAlbum() && (a.album = e.getAlbum()), e.getAlbumArtist() && (a.albumArtist = e.getAlbumArtist()), e.getDuration() && (a.duration = `${e.getDuration() ?? ""}`);
    const r = await this.sendRequest({ method: "POST" }, a);
    return this.processResponse(r);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const { sessionID: s } = await this.getSession(), a = {
      method: "track.scrobble",
      sk: s
    };
    for (const [g, p] of e.slice(0, 50).entries())
      a[`timestamp[${g}]`] = p.metadata.startTimestamp.toString(), a[`track[${g}]`] = p.getTrack(), a[`artist[${g}]`] = p.getArtist(), p.getAlbum() && (a[`album[${g}]`] = p.getAlbum()), p.getAlbumArtist() && (a[`albumArtist[${g}]`] = p.getAlbumArtist());
    const r = await this.sendRequest(
      { method: "POST" },
      a
    ), n = this.processResponse(r);
    if (n === f.RESULT_OK) {
      const g = r.scrobbles;
      if (g) {
        const p = g["@attr"].ignored;
        if (Number(p) === 0)
          return new Array(
            Math.min(e.length, 50)
          ).fill(f.RESULT_OK);
        if (!Array.isArray(g.scrobble))
          return new Array(
            Math.min(e.length, 50)
          ).fill(f.RESULT_IGNORE);
        const j = {};
        for (const [v, M] of e.entries())
          j[M.metadata.startTimestamp.toString()] = v;
        const S = new Array(Math.min(e.length, 50));
        for (const v of g.scrobble)
          S[j[v.timestamp]] = v.ignoredMessage.code === "0" ? f.RESULT_OK : f.RESULT_IGNORE;
      } else
        return new Array(
          Math.min(e.length, 50)
        ).fill(f.ERROR_OTHER);
    }
    return new Array(Math.min(e.length, 50)).fill(
      n
    );
  }
  /** @override */
  async toggleLove(e, s) {
    const { sessionID: a } = await this.getSession(), r = {
      method: s ? "track.love" : "track.unlove",
      track: e.getTrack(),
      artist: e.getArtist(),
      sk: a
    }, n = await this.sendRequest({ method: "POST" }, r);
    return this.processResponse(n);
  }
  /** @override */
  canLoveSong() {
    return !0;
  }
  /** Internal functions. */
  /**
  * Execute asynchronous request.
  *
  * API key will be added to params by default and all parameters will be
  * encoded for use in query string internally.
  *
  * @param  options - Fetch options
  * @param  params - Object of key =\> value url parameters
  * @param  signed - Should the request be signed?
  * @returns Parsed response
  */
  async sendRequest(e, s, a = !0) {
    const r = this.makeRequestUrl(s, a), n = fetch(r, e), g = this.REQUEST_TIMEOUT;
    let p = null, j = null;
    try {
      p = await z(g, n), j = await p.json();
    } catch {
      throw new Error(f.ERROR_OTHER);
    }
    const S = JSON.stringify(j, null, 2), v = ha(j, S);
    if (!p.ok)
      throw this.debugLog(`${s.method} response:
${v}`, "error"), "error" in j && j.error === 9 && (await this.signOut(), this.debugLog(
        "error 9 received, triggering signOut so that user grant access again."
      )), new Error(f.ERROR_OTHER);
    return this.debugLog(`${s.method} response:
${v}`), j;
  }
  /**
  * Make a call to API to trade token for session ID.
  * Assume the token was authenticated by the user.
  *
  * @param token - Token provided by scrobbler service
  * @returns Session data
  */
  async tradeTokenForSession(e) {
    const s = { method: "auth.getsession", token: e }, a = await this.sendRequest(
      { method: "GET" },
      s
    );
    if (this.processResponse(a) !== f.RESULT_OK)
      throw new Error(f.ERROR_AUTH);
    const n = a.session.name;
    return { sessionID: a.session.key, sessionName: n };
  }
  /**
  * Create URL of API request based on API params.
  * @param params - Object of key =\> value url parameters
  * @param signed - Should the request be signed?
  * @returns URL of API request
  */
  makeRequestUrl(e, s) {
    e.api_key = this.getApiKey(), e.format = "json", s && (e.api_sig = this.generateSign(e));
    const a = Ze(e);
    return `${this.getApiUrl()}?${a}`;
  }
  /**
  * Compute string for signing request.
  * See http://www.last.fm/api/authspec#8
  * @param params - Parameters of API method
  * @returns Signed parameters
  */
  generateSign(e) {
    const s = Object.keys(e).sort();
    let a = "";
    for (const r of s)
      ["format", "callback"].includes(r) || (a += `${r}${e[r] || ""}`);
    return Et(a + this.getApiSecret());
  }
  /**
  * Process response and return service call result.
  * @param responseData - Response data
  * @returns Response result
  */
  processResponse(e) {
    return e.error ? f.ERROR_OTHER : f.RESULT_OK;
  }
}
function ha(t, e) {
  let s = e;
  const a = [t.token], r = t.session;
  r && (a.push(r.name), a.push(r.key));
  for (const n of a)
    typeof n == "string" ? s = Be(n, s) : typeof n == "number" && (s = Be(n.toString(), s));
  return s;
}
class fa extends Es {
  /** @override */
  getApiUrl() {
    return "https://ws.audioscrobbler.com/2.0/";
  }
  /** @override */
  getApiKey() {
    return "d9bb1870d3269646f740544d9def2c95";
  }
  /** @override */
  getApiSecret() {
    return "2160733a567d4a1a69a73fad54c564b2";
  }
  /** @override */
  getBaseAuthUrl() {
    return "https://www.last.fm/api/auth/";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://last.fm/user/";
  }
  /** @override */
  getId() {
    return "lastfm";
  }
  /** @override */
  getLabel() {
    return "Last.fm";
  }
  /** @override */
  getStatusUrl() {
    return "http://status.last.fm/";
  }
  /** @override */
  getStorageName() {
    return "LastFM";
  }
  /** @override */
  async getSongInfo(e) {
    const s = {
      track: e.getTrack(),
      artist: e.getArtist(),
      method: "track.getinfo"
    };
    try {
      const { sessionName: g } = await this.getSession();
      s.username = g;
    } catch {
    }
    e.getAlbum() && (s.album = e.getAlbum());
    const a = await this.sendRequest(
      { method: "GET" },
      s,
      !1
    );
    if (this.processResponse(a) !== f.RESULT_OK)
      throw new Error("Unable to load song info");
    const n = this.parseSongInfo(a);
    return this.canLoveSong() && n && N(e.controllerTabId, {
      type: "updateLove",
      payload: {
        isLoved: n.userloved || !1
      }
    }), n;
  }
  /** @override */
  canLoadSongInfo() {
    return !0;
  }
  /**
  * Parse service response and return parsed data.
  * @param responseData - Last.fm track.getInfo response data
  * @returns Parsed song info
  */
  parseSongInfo(e) {
    const s = {}, a = e.track, r = e.track.album, n = e.track.artist, g = a.userloved;
    if (g ? s.userloved = g === "1" : s.userloved = void 0, s.artist = n.name, s.artistUrl = n.url, s.track = a.name, s.trackUrl = a.url, s.duration = parseInt(a.duration) / 1e3 || null, r && (s.album = r.title, s.albumUrl = r.url, s.albumMbId = r.mbid, Array.isArray(r.image))) {
      const p = r.image.reduce(
        (S, v) => (S[v.size] = v["#text"], S),
        {}
      ), j = ["extralarge", "large", "medium"];
      for (const S of j) {
        const v = p[S];
        if (v) {
          s.trackArtUrl = v;
          break;
        }
      }
    }
    return s.userPlayCount = parseInt(a.userplaycount) || 0, s;
  }
  /** @override */
  applyFilter(e) {
    if (e.getAlbumArtist()) {
      const s = e.getAlbumArtist() || "";
      e.parsed.albumArtist = s.includes("Various Artists") ? "Various Artists" : s;
    }
    return e;
  }
}
class pa extends Es {
  /** @override */
  getApiUrl() {
    return "https://libre.fm/2.0/";
  }
  /** @override */
  getApiKey() {
    return "r8i1y91hz71tcx7vyrp9hk1alhqp1898";
  }
  /** @override */
  getApiSecret() {
    return "8187db5vg234yq6tm7o62q8mtl1niala";
  }
  /** @override */
  getBaseAuthUrl() {
    return "https://www.libre.fm/api/auth/";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://libre.fm/user/";
  }
  /** @override */
  getLabel() {
    return "Libre.fm";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getStorageName() {
    return "LibreFM";
  }
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  sendRequest(e, s, a) {
    return e.method?.toLowerCase() === "post" && (e.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }, e.body = Ze(s)), super.sendRequest(e, s, a);
  }
}
const wa = "https://listenbrainz.org/settings/", ye = "https://api.listenbrainz.org/1", ja = `${ye}/submit-listens`;
class ya extends X {
  isLocalOnly = !1;
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  async getAuthUrl() {
    const e = await this.storage.get();
    let s;
    return e && "properties" in e && (s = e.properties), s ? await this.storage.set({ isAuthStarted: !0, properties: s }) : await this.storage.set({ isAuthStarted: !0 }), "https://listenbrainz.org/login/musicbrainz?next=%2Fsettings%2F";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://listenbrainz.org/user/";
  }
  /** @override */
  getLabel() {
    return "ListenBrainz";
  }
  /** @override */
  async getProfileUrl() {
    return this.userToken ? "" : await super.getProfileUrl();
  }
  /** @override */
  getStatusUrl() {
    return this.userToken ? "" : "https://listenbrainz.org/current-status";
  }
  /** @override */
  getStorageName() {
    return "ListenBrainz";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async signOut() {
    (this.userApiUrl || this.userToken) && await this.applyUserProperties({
      userApiUrl: null,
      userToken: null
    }), await super.signOut();
  }
  /** @override */
  async getSession() {
    if (this.userToken)
      return { sessionID: this.userToken };
    const e = await this.storage.get();
    if (!e)
      throw this.debugLog("no data", "error"), await this.signOut(), new Error(f.ERROR_AUTH);
    if ("isAuthStarted" in e && e.isAuthStarted)
      try {
        const s = await this.requestSession();
        return e.sessionID = s.sessionID, e.sessionName = s.sessionName, delete e.isAuthStarted, await this.storage.set(e), s;
      } catch {
        throw this.debugLog("Failed to get session", "warn"), await this.signOut(), new Error(f.ERROR_AUTH);
      }
    else if (!("sessionID" in e) || !e.sessionID)
      throw new Error(f.ERROR_AUTH);
    return {
      sessionID: e.sessionID,
      sessionName: e.sessionName
    };
  }
  /** @override */
  async isReadyForGrantAccess() {
    if (this.userToken)
      return !1;
    const e = await this.storage.get();
    return !e || !("isAuthStarted" in e) ? !1 : e.isAuthStarted ?? !1;
  }
  /** @override */
  async sendNowPlaying(e) {
    const { sessionID: s } = await this.getSession(), r = {
      listen_type: "playing_now",
      payload: [
        {
          track_metadata: this.makeTrackMetadata(e)
        }
      ]
    };
    return this.sendScrobbleRequest(r, s);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async scrobble(e, s) {
    const { sessionID: a } = await this.getSession(), r = {
      listen_type: s ? "single" : "import",
      payload: e.slice(0, 50).map((g) => ({
        listened_at: g.metadata.startTimestamp,
        track_metadata: this.makeTrackMetadata(g)
      }))
    }, n = await this.sendScrobbleRequest(r, a);
    return new Array(Math.min(e.length, 50)).fill(
      n
    );
  }
  /** @override */
  async toggleLove(e, s) {
    const a = e.getTrack(), r = e.getArtist();
    if (typeof a != "string" || typeof r != "string")
      throw new Error(
        `Invalid track ${JSON.stringify({ artist: r, track: a })}`
      );
    const n = new URLSearchParams({
      recording_name: a,
      artist_name: r
    });
    let g = {};
    try {
      g = await this.listenBrainzApi(
        "GET",
        `${ye}/metadata/lookup?${n.toString()}`,
        null,
        null
      );
    } catch {
    }
    if (this.debugLog(
      `lookup result: ${JSON.stringify(g, null, 2)}`
    ), !g.recording_mbid)
      return this.debugLog(
        `Could not lookup metadata for song: ${e.toString()}`
      ), {};
    const { sessionID: p } = await this.getSession(), j = {
      recording_mbid: g.recording_mbid,
      score: s ? 1 : 0
    }, S = await this.listenBrainzApi(
      "POST",
      `${ye}/feedback/recording-feedback`,
      j,
      p
    );
    return this.processResult(S);
  }
  /** @override */
  canLoveSong() {
    return !0;
  }
  /** Private methods. */
  async listenBrainzApi(e, s, a, r) {
    const n = {
      method: e,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    a && (n.body = JSON.stringify(a)), r && n.headers && (n.headers.Authorization = `Token ${r}`);
    const g = fetch(s, n), p = this.REQUEST_TIMEOUT;
    let j = null, S = null;
    try {
      S = await z(p, g), j = await S.json();
    } catch {
      throw this.debugLog("Error while sending request", "error"), new Error(f.ERROR_OTHER);
    }
    switch (S.status) {
      case 400:
        throw this.debugLog("Invalid JSON sent", "error"), new Error(f.ERROR_AUTH);
      case 401:
        throw this.debugLog("Invalid Authorization sent", "error"), new Error(f.ERROR_AUTH);
    }
    return this.debugLog(JSON.stringify(j, null, 2)), j;
  }
  async sendScrobbleRequest(e, s) {
    const a = await this.listenBrainzApi(
      "POST",
      this.userApiUrl || ja,
      e,
      s
    );
    return this.processResult(a);
  }
  async requestSession() {
    let e = null;
    try {
      e = await this.fetchSession(wa);
    } catch {
      this.debugLog("request session timeout", "warn");
    }
    if (e) {
      const s = Qe(e.sessionID);
      return this.debugLog(`Session ID: ${s}`), e;
    }
    throw new Error(f.ERROR_AUTH);
  }
  async fetchSession(e) {
    this.debugLog(`Use ${e}`);
    const s = Gs() ? Ye(e) : Qs({
      type: "sendListenBrainzRequest",
      payload: {
        url: e
      }
    }), a = this.REQUEST_TIMEOUT, r = await z(a, s);
    if (r !== null) {
      let n = null;
      const g = r.match(
        /<script id="global-react-props" type="application\/json">(.*?)<\/script>/
      )?.[1];
      g && (n = JSON.parse(
        g
      ));
      const p = n?.current_user.name, j = n?.current_user.auth_token;
      if (j && p)
        return { sessionID: j, sessionName: p };
    }
    return null;
  }
  processResult(e) {
    return e.status !== "ok" ? f.ERROR_OTHER : f.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const s = {
      artist_name: e.getArtist() ?? "",
      track_name: e.getTrack() ?? "",
      additional_info: {
        submission_client: "Web Scrobbler",
        submission_client_version: Vs(),
        music_service_name: e.metadata.label
      }
    }, a = e.getAlbum();
    a && (s.release_name = a);
    const r = e.getOriginUrl();
    r && (s.additional_info.origin_url = r);
    const n = e.getAlbumArtist();
    n && (s.additional_info.release_artist_name = n), r && e.metadata.label === "Spotify" && (s.additional_info.spotify_id = r);
    const g = e.getDuration();
    return g && (s.additional_info.duration = g), s;
  }
}
class Aa extends X {
  isLocalOnly = !0;
  /** @override */
  getStorageName() {
    return "Maloja";
  }
  /** @override */
  getLabel() {
    return "Maloja";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  async getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getSongInfo() {
    return Promise.resolve({});
  }
  toggleLove() {
    return Promise.resolve(f.ERROR_OTHER);
  }
  /** @override */
  async getSession() {
    if (!this.userToken)
      throw new Error(f.ERROR_AUTH);
    return Promise.resolve({ sessionID: this.userToken });
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  sendNowPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const s = [];
    for (const a of e.slice(0, 50)) {
      const r = this.makeTrackMetadata(a);
      s.push(this.sendRequest(r, this.userToken));
    }
    return Promise.all(s);
  }
  /** Private methods */
  async sendRequest(e, s) {
    e.key = s;
    const a = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    }, r = fetch(this.userApiUrl, a), n = this.REQUEST_TIMEOUT;
    let g = null;
    try {
      if (g = await z(n, r), g.status !== 200)
        return f.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), f.ERROR_OTHER;
    }
    return f.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const s = {
      artist: e.getArtist() ?? "",
      title: e.getTrack() ?? "",
      time: e.metadata.startTimestamp
    }, a = e.getAlbum();
    a && (s.album = a);
    const r = e.getAlbumArtist();
    return r && (s.albumartists = [r]), s;
  }
}
class va extends X {
  isLocalOnly = !0;
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getLabel() {
    return "Webhook";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getStorageName() {
    return "Webhook";
  }
  /** @override */
  getSession() {
    return !this.arrayProperties || this.arrayProperties.length === 0 ? Promise.reject(new Error("")) : Promise.resolve({ sessionID: "webhook" });
  }
  /** @override */
  getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getUserDefinedArrayProperties() {
    return ["applicationName", "userApiUrl"];
  }
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  async sendRequest(e) {
    if (!this.arrayProperties || this.arrayProperties.length === 0)
      return f.ERROR_AUTH;
    this.debugLog(
      `Webhook - sendRequest: ${JSON.stringify(e, null, 2)}`
    );
    const s = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    }, a = [];
    for (const n of this.arrayProperties)
      a.push(fetch(n.userApiUrl, s));
    const r = this.REQUEST_TIMEOUT;
    try {
      const n = await z(
        r,
        Promise.all(a)
      );
      for (const g of n)
        if (g.status !== 200)
          return this.debugLog(`Error in ${g.url}.`, "error"), f.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), f.ERROR_OTHER;
    }
    return f.RESULT_OK;
  }
  /** @override */
  async sendNowPlaying(e) {
    return this.sendRequest({
      eventName: "nowplaying",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async sendPaused(e) {
    return this.sendRequest({
      eventName: "paused",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async sendResumedPlaying(e) {
    return this.sendRequest({
      eventName: "resumedplaying",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async scrobble(e, s) {
    const a = await this.sendRequest({
      eventName: "scrobble",
      time: Date.now(),
      // send the first song as a separate argument to avoid breaking older implementations
      data: {
        song: e[0],
        songs: e,
        currentlyPlaying: s
      }
    });
    return new Array(e.length).fill(a);
  }
  /** @override */
  toggleLove(e, s) {
    return this.sendRequest({
      eventName: "loved",
      time: Date.now(),
      data: { song: e, isLoved: s }
    });
  }
}
class ka extends X {
  isLocalOnly = !0;
  /** @override */
  getStorageName() {
    return "Pleroma";
  }
  /** @override */
  getLabel() {
    return "Pleroma";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  async getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getSongInfo() {
    return Promise.resolve({});
  }
  toggleLove() {
    return Promise.resolve(f.ERROR_OTHER);
  }
  /** @override */
  async getSession() {
    if (!this.userToken)
      throw new Error(f.ERROR_AUTH);
    const e = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.userToken}`
      }
    }, s = `https://${this.userApiUrl}/api/v1/accounts/verify_credentials`, a = fetch(s, e), r = this.REQUEST_TIMEOUT;
    let n = null;
    try {
      if (n = await z(r, a), n.status !== 200)
        throw new Error(f.ERROR_AUTH);
      const g = await n.json(), p = g ? g.fqn : "";
      return { sessionID: this.userToken, sessionName: p };
    } catch {
      throw this.debugLog("Error while sending request", "error"), new Error(f.ERROR_AUTH);
    }
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  sendNowPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(f.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const s = [];
    for (const a of e.slice(0, 50)) {
      const r = this.makeTrackMetadata(a);
      s.push(this.sendRequest(r, this.userToken));
    }
    return Promise.all(s);
  }
  /** Private methods */
  async sendRequest(e, s) {
    const a = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${s}`
      },
      body: JSON.stringify(e)
    }, r = `https://${this.userApiUrl}/api/v1/pleroma/scrobble`, n = fetch(r, a), g = this.REQUEST_TIMEOUT;
    let p = null;
    try {
      if (p = await z(g, n), p.status !== 200)
        return f.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), f.ERROR_OTHER;
    }
    return f.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const s = {
      artist: e.getArtist() ?? "",
      title: e.getTrack() ?? "",
      length: e.getDuration(),
      url: e.parsed.originUrl ?? ""
    }, a = e.getAlbum();
    return a && (s.album = a), s;
  }
}
const K = [
  new fa(),
  new pa(),
  new ya(),
  new Aa(),
  new va(),
  new ka()
];
function Ge(t, e) {
  return e.some((s) => s.getLabel() === t.getLabel());
}
class Sa {
  /**
  * Scrobblers that are bound, meaning they have valid session IDs.
  */
  boundScrobblers = [];
  /**
  * Bind all registered scrobblers.
  * @returns Array of bound scrobblers
  */
  async bindAllScrobblers() {
    for (const e of K)
      try {
        await e.getSession(), this.bindScrobbler(e);
      } catch {
        R(`Unable to bind ${e.getLabel()}`, "warn");
      }
    return this.boundScrobblers;
  }
  /**
  * Bind given scrobbler.
  * @param scrobbler - Scrobbler instance
  */
  bindScrobbler(e) {
    Ge(e, this.boundScrobblers) || (this.boundScrobblers.push(e), R(`Bind ${e.getLabel()} scrobbler`));
  }
  /**
  * Unbind given scrobbler.
  * @param scrobbler - Scrobbler instance
  */
  unbindScrobbler(e) {
    if (Ge(e, this.boundScrobblers)) {
      const s = this.boundScrobblers.indexOf(e);
      this.boundScrobblers.splice(s, 1), R(`Unbind ${e.getLabel()} scrobbler`);
    } else
      R(`${e.getLabel()} is not bound`, "error");
  }
  /**
  * Retrieve song info using scrobbler APIs.
  * @param song - Song instance
  * @returns Promise resolved with array of song info objects
  */
  getSongInfo(e) {
    const s = K.filter((a) => a.canLoadSongInfo());
    return R(`Send "get info" request: ${s.length}`), Promise.all(
      s.map(async (a) => {
        try {
          return await a.getSongInfo(e);
        } catch {
          return R(
            `Unable to get song info from ${a.getLabel()}`,
            "warn"
          ), null;
        }
      })
    );
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendNowPlaying(e) {
    return R(`Send "now playing" request: ${this.boundScrobblers.length}`), Promise.all(
      this.boundScrobblers.map(async (s) => {
        try {
          return await s.sendNowPlaying(
            s.applyFilter(e)
          );
        } catch (a) {
          return this.processErrorResult(
            s,
            a
          );
        }
      })
    );
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendPaused(e) {
    const s = this.boundScrobblers.filter(
      (a) => typeof a.sendPaused == "function"
    );
    return s.length === 0 ? Promise.resolve([f.RESULT_OK]) : (R(`Send "paused" request: ${s.length}`), Promise.all(
      s.map(async (a) => {
        try {
          return await a.sendPaused(
            a.applyFilter(e)
          );
        } catch (r) {
          return this.processErrorResult(
            a,
            r
          );
        }
      })
    ));
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendResumedPlaying(e) {
    const s = this.boundScrobblers.filter(
      (a) => typeof a.sendResumedPlaying == "function"
    );
    return s.length === 0 ? Promise.resolve([f.RESULT_OK]) : (R(`Send "paused" request: ${s.length}`), Promise.all(
      s.map(async (a) => {
        try {
          return await a.sendResumedPlaying(
            a.applyFilter(e)
          );
        } catch (r) {
          return this.processErrorResult(
            a,
            r
          );
        }
      })
    ));
  }
  /**
  * Scrobble song to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  async scrobble(e, s) {
    R(`Send "scrobble" request: ${this.boundScrobblers.length}`);
    const a = await Promise.all(
      this.boundScrobblers.map(async (r) => {
        try {
          return await r.scrobble(
            e.map(r.applyFilter),
            s
          );
        } catch (n) {
          return this.processScrobbleErrorResult(
            r,
            n
          );
        }
      })
    );
    for (let r = 0; r < a[0].length; r++)
      await Ot.pushScrobble({
        song: e[r].getCloneableData(),
        status: st(a, r)
      });
    return a;
  }
  /**
  * Toggle song love status.
  * @param song - Song instance
  * @param flag - Flag indicates song is loved
  * @returns Promise that will be resolved then the task will complete
  */
  async toggleLove(e, s) {
    const a = K.filter((n) => n.canLoveSong());
    return R(`Send "${s ? "love" : "unlove"}" request: ${a.length}`), Promise.all(
      a.map(async (n) => {
        try {
          return await n.toggleLove(e, s);
        } catch (g) {
          return this.processErrorResult(
            n,
            g
          );
        }
      })
    );
  }
  /**
  * Get all registered scrobblers.
  * @returns Array of bound scrobblers
  */
  getRegisteredScrobblers() {
    return K;
  }
  /**
  * Get scrobbler by label.
  * @param label - Scrobbler label
  * @returns Found scrobbler object
  */
  getScrobblerByLabel(e) {
    for (const s of K)
      if (s.getLabel() === e)
        return s;
    return null;
  }
  /**
  * Process result received from scrobbler.
  * @param scrobbler - Scrobbler instance
  * @param result - API call result
  * @returns Promise resolved with result object
  */
  async processErrorResult(e, s) {
    const a = s === f.ERROR_OTHER, r = s === f.ERROR_AUTH;
    if (!(a || r))
      throw new Error(`Invalid result: ${s}`);
    return r && (await e.isReadyForGrantAccess() || this.unbindScrobbler(e)), s;
  }
  /**
  * Process result received from scrobbler when scrobbling.
  * Scrobbling has array result so logic is slightly different
  * @param scrobbler - Scrobbler instance
  * @param result - API call result
  * @returns Promise resolved with result object
  */
  async processScrobbleErrorResult(e, s) {
    const a = s[0] === f.ERROR_OTHER, r = s[0] === f.ERROR_AUTH;
    if (!(a || r))
      throw new Error(`Invalid result: ${s[0]}`);
    return r && (await e.isReadyForGrantAccess() || this.unbindScrobbler(e)), s;
  }
}
const x = new Sa();
async function Ra(t) {
  return await x.bindAllScrobblers(), ta(t.connector), x.sendNowPlaying(t);
}
async function Ea(t) {
  return await x.bindAllScrobblers(), x.sendPaused(t);
}
async function Ta(t) {
  return await x.bindAllScrobblers(), x.sendResumedPlaying(t);
}
async function La(t, e) {
  return await x.bindAllScrobblers(), x.scrobble(t, e);
}
async function xa(t) {
  return await x.bindAllScrobblers(), x.getSongInfo(t);
}
async function Pa(t, e) {
  await x.bindAllScrobblers();
  const s = await x.toggleLove(t, e);
  if (s.some((a) => a === f.ERROR_OTHER))
    throw new Error("An error occurred while toggling love for track");
  return s;
}
const Ae = L(ke);
async function ge(t, e) {
  const s = await _e(t, e);
  return Ht(s), s;
}
b.runtime.onStartup.addListener(xs);
b.runtime.onInstalled.addListener(za);
b.tabs.onRemoved.addListener((t) => {
  Oa(t);
});
b.tabs.onUpdated.addListener(
  (t, e, s) => {
    Ia(t, e, s);
  }
);
b.tabs.onActivated.addListener(
  (t) => {
    Ca(t);
  }
);
b.contextMenus?.onClicked.addListener(
  (t) => {
    Ba(t);
  }
);
b.commands?.onCommand.addListener(
  (t) => {
    Na(t);
  }
);
async function Na(t) {
  const e = await As(), s = e.song?.metadata.userloved;
  switch (t) {
    case "toggle-connector":
      e.mode === We ? ks(e.tabId) : vs(e.tabId);
      break;
    case "love-song":
      s || Ke(e.tabId, !0, !0);
      break;
    case "unlove-song":
      s && Ke(e.tabId, !1, !0);
      break;
  }
}
function Ke(t, e, s) {
  N(t ?? -1, {
    type: "toggleLove",
    payload: {
      isLoved: e,
      shouldShowNotification: s
    }
  });
}
async function Oa(t) {
  const e = await fe(), s = await Me(e.activeTabs);
  await V({
    activeTabs: s,
    browserPreferredTheme: e.browserPreferredTheme
  });
  const a = await me();
  ge(s, a);
  const r = await Ae.get();
  r?.[t] && (delete r[t], Ae.set(r));
}
async function Ca(t) {
  await Ts(t.tabId, !0);
}
async function Ia(t, e, s) {
  s?.active && e.status === "complete" && await Ts(t, !1);
}
async function Ts(t, e) {
  const s = await fe();
  let a = e ? s.activeTabs.filter((g) => g.tabId !== t) : s.activeTabs;
  const r = await _e(a, t);
  Ue[r.mode] && r.tabId === t && (e ? a = [r, ...a] : a = a.map(
    (g) => g.tabId === t ? r : g
  ));
  const n = await Me(a);
  await V({
    activeTabs: n,
    browserPreferredTheme: s.browserPreferredTheme
  }), ge(n, t);
}
async function Ls(t, e) {
  if (!t)
    throw new Error("No tabid given");
  let s = !1;
  try {
    const a = await fe(), r = await Me(a.activeTabs);
    for (let p = 0; p < r.length; p++) {
      if (r[p].tabId !== t)
        continue;
      r[p] = e(r[p]), s = !0, await V({
        activeTabs: r,
        browserPreferredTheme: a.browserPreferredTheme
      });
      const j = await me();
      ge(r, j);
      return;
    }
    s = !0;
    const n = [
      e({
        tabId: t,
        mode: J,
        permanentMode: J,
        song: null
      }),
      ...r
    ];
    await V({
      activeTabs: n,
      browserPreferredTheme: a.browserPreferredTheme
    });
    const g = await me();
    ge(r, g);
  } catch {
    s || _t();
  }
}
async function Ua(t, e, s) {
  await Ls(t, (a) => ({
    tabId: a.tabId,
    mode: e,
    permanentMode: s,
    song: a.song
  }));
}
async function Ma(t, e) {
  await Ls(t, (s) => ({
    tabId: s.tabId,
    mode: s.mode,
    permanentMode: s.permanentMode,
    song: e
  }));
}
Xe(
  /**
  * Listener triggered on change of controller mode in a tab.
  */
  E({
    type: "controllerModeChange",
    fn: ({ mode: t, permanentMode: e }, s) => {
      Ua(s.tab?.id, t, e), console.log(`changed mode to ${t} in tab ${s.tab?.id}`);
    }
  }),
  /**
  * Listener triggered on change of currently playing song in a tab.
  */
  E({
    type: "songUpdate",
    fn: (t, e) => {
      Ma(e.tab?.id, t), console.log(`song changed in tab ${e.tab?.id}`), console.log(t);
    }
  }),
  /**
  * Listener called by content script that wants to know the tab ID of the tab it is connected to.
  * Returns the tab ID of the content script.
  */
  E({
    type: "getTabId",
    fn: (t, e) => (console.log("getting tab id"), console.log(t, e.tab?.id), e.tab?.id)
  }),
  /**
  * Listener called by a controller to trigger a now playing notification.
  */
  E({
    type: "showNowPlaying",
    fn: (t, e) => {
      aa(
        new C(t.song, e.tab?.id ?? -1),
        t.connector,
        () => {
          Fe(e.tab?.id ?? -1);
        }
      );
    }
  }),
  /**
  * Listener called by a controller to trigger sending of now playing info.
  */
  E({
    type: "setNowPlaying",
    fn: (t, e) => Ra(
      new C(t.song, e.tab?.id ?? -1)
    )
  }),
  /**
  * Listener called by a controller to trigger sending paused song on every pause.
  */
  E({
    type: "setPaused",
    fn: (t, e) => Ea(
      new C(t.song, e.tab?.id ?? -1)
    )
  }),
  /**
  * Listener called by a controller to trigger sending playing song on every resumed play.
  */
  E({
    type: "setResumedPlaying",
    fn: (t, e) => Ta(
      new C(t.song, e.tab?.id ?? -1)
    )
  }),
  /**
  * Listener called by a controller to trigger a scrobble.
  */
  E({
    type: "scrobble",
    fn: (t, e) => La(
      t.songs.map(
        (s) => new C(s, e.tab?.id ?? -1)
      ),
      t.currentlyPlaying
    )
  }),
  /**
  * Listener called by a controller to trigger getting song info.
  */
  E({
    type: "getSongInfo",
    fn: (t, e) => xa(
      new C(t.song, e.tab?.id ?? -1)
    )
  }),
  /**
  * Listener called by a controller to love or unlove a song.
  */
  E({
    type: "toggleLove",
    fn: (t, e) => {
      const s = new C(t.song, e.tab?.id ?? -1);
      return t.shouldShowNotification && da(s, t.isLoved), Pa(s, t.isLoved);
    }
  }),
  /**
  * Listener called by a content script to attempt signing into musicbrainz.
  * This has to be done in background script, as safari blocks sending necessary cookies in other scripts.
  */
  E({
    type: "sendListenBrainzRequest",
    fn: async (t) => Ye(t.url)
  }),
  /**
  * Listener called by a controller to trigger clearing now playing notification.
  */
  E({
    type: "clearNowPlaying",
    fn: (t, e) => {
      ra(new C(t.song, e.tab?.id ?? -1));
    }
  }),
  /**
  * Listener called by a controller to trigger showing a notification telling the user the song was not recognized.
  */
  E({
    type: "showSongNotRecognized",
    fn: (t, e) => {
      ia(
        new C(t.song, e.tab?.id ?? -1),
        t.connector,
        () => {
          Fe(e.tab?.id ?? -1);
        }
      );
    }
  }),
  /**
  * Listener called by a content script to update the browser preferred theme.
  */
  E({
    type: "updateTheme",
    fn: async (t) => {
      const e = await fe();
      await V({
        activeTabs: e.activeTabs,
        browserPreferredTheme: t
      });
    }
  }),
  /**
  * Listener called by a content script to fetch through background script.
  */
  E({
    type: "fetch",
    fn: async ({ url: t, init: e }) => {
      const s = await fetch(t, e);
      return s.ok ? {
        ok: !0,
        content: await s.text()
      } : {
        ok: !1,
        content: ""
      };
    }
  }),
  /**
  * Listener called by a content script to figure out whether it is currently audible
  */
  E({
    type: "isTabAudible",
    fn: async (t, e) => {
      const s = e.tab?.id;
      return typeof s != "number" ? Promise.resolve(!0) : (await b.tabs.get(s)).audible ?? !0;
    }
  })
);
async function _a() {
  const t = L(cs);
  let e = await t.get();
  e || (e = {
    appVersion: ""
  }), e.appVersion = b.runtime.getManifest().version, await t.set(e), t.debugLog();
}
async function Da() {
  return (await x.bindAllScrobblers()).length > 0;
}
function xs() {
  L(ve).set(De), Ae.set({}), xt(), _a(), Da().then((e) => {
    e || (console.warn("No scrobblers are bound"), ca());
  }), b.contextMenus?.create({
    id: A.ENABLE_CONNECTOR,
    visible: !1,
    contexts: ["action"],
    title: "Error: You should not be seeing this"
  }), b.contextMenus?.create({
    id: A.DISABLE_CONNECTOR,
    visible: !1,
    contexts: ["action"],
    title: "Error: You should not be seeing this"
  }), b.contextMenus?.create({
    id: A.DISABLE_UNTIL_CLOSED,
    visible: !1,
    contexts: ["action"],
    title: "Error: You should not be seeing this"
  }), b.contextMenus.create({
    id: A.ENABLE_CHANNEL,
    visible: !1,
    contexts: ["action"],
    title: "Error: You should not be seeing this"
  }), b.contextMenus.create({
    id: A.DISABLE_CHANNEL,
    visible: !1,
    contexts: ["action"],
    title: "Error: You should not be seeing this"
  });
}
function za() {
  xs(), ba();
}
async function Ba(t) {
  const e = await As();
  switch (t.menuItemId) {
    case A.ENABLE_CONNECTOR: {
      ks(e.tabId);
      break;
    }
    case A.DISABLE_CONNECTOR: {
      vs(e.tabId);
      break;
    }
    case A.DISABLE_UNTIL_CLOSED: {
      $t(e.tabId);
      break;
    }
    case A.ENABLE_CHANNEL: {
      qt(e.tabId);
      break;
    }
    case A.DISABLE_CHANNEL: {
      Ft(e.tabId);
      break;
    }
  }
}
