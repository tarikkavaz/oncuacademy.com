globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-pd6afRad37q11nEG1otw8WhuoR0\"",
    "mtime": "2023-04-14T11:07:29.771Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/.nojekyll": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-04-14T11:07:29.770Z",
    "size": 0,
    "path": "../public/.nojekyll"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-bLasO9chxnG5nLZqj+lxss7vMWI\"",
    "mtime": "2023-04-14T11:07:29.769Z",
    "size": 1150,
    "path": "../public/favicon.ico"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"69e4-MVxJy7P6pe9hbmwW4odkuYx7Hbc\"",
    "mtime": "2023-04-14T11:07:29.769Z",
    "size": 27108,
    "path": "../public/favicon.png"
  },
  "/staff/0.jpg": {
    "type": "image/jpeg",
    "etag": "\"f370-JsSZq52/gEGb2CMk6PMbz3mcHj0\"",
    "mtime": "2023-04-14T11:07:29.728Z",
    "size": 62320,
    "path": "../public/staff/0.jpg"
  },
  "/staff/ahmet-oncu.jpg": {
    "type": "image/jpeg",
    "etag": "\"19ef3-dTs0uzSY/exPDSXoPlDq1uZOvtc\"",
    "mtime": "2023-04-14T11:07:29.727Z",
    "size": 106227,
    "path": "../public/staff/ahmet-oncu.jpg"
  },
  "/staff/hai-che.jpg": {
    "type": "image/jpeg",
    "etag": "\"f656-JdMefH1NH8JcOXMXBr/uEI+j/ec\"",
    "mtime": "2023-04-14T11:07:29.726Z",
    "size": 63062,
    "path": "../public/staff/hai-che.jpg"
  },
  "/staff/hande-karadag.jpg": {
    "type": "image/jpeg",
    "etag": "\"11c59-WGH/sz7Ic/7x+z00cKL5szj2aZ4\"",
    "mtime": "2023-04-14T11:07:29.725Z",
    "size": 72793,
    "path": "../public/staff/hande-karadag.jpg"
  },
  "/staff/melek-eyigunlu.jpg": {
    "type": "image/jpeg",
    "etag": "\"c146-rggWI5nzKI2bgfWpnAVPAWq7gGg\"",
    "mtime": "2023-04-14T11:07:29.724Z",
    "size": 49478,
    "path": "../public/staff/melek-eyigunlu.jpg"
  },
  "/staff/okan-pala.jpg": {
    "type": "image/jpeg",
    "etag": "\"b61e-QZRV6xPr6QmUQAY26AuDSNcH3Xk\"",
    "mtime": "2023-04-14T11:07:29.723Z",
    "size": 46622,
    "path": "../public/staff/okan-pala.jpg"
  },
  "/staff/osman-akin.jpg": {
    "type": "image/jpeg",
    "etag": "\"1df69-Q5YtKyx0z7QLNnwspptM+seIa/c\"",
    "mtime": "2023-04-14T11:07:29.722Z",
    "size": 122729,
    "path": "../public/staff/osman-akin.jpg"
  },
  "/staff/sabri-oncu.jpg": {
    "type": "image/jpeg",
    "etag": "\"c90b-rOb9BGncYArHjnIYILO01cgr1lc\"",
    "mtime": "2023-04-14T11:07:29.721Z",
    "size": 51467,
    "path": "../public/staff/sabri-oncu.jpg"
  },
  "/staff/yasemin-oncu.jpg": {
    "type": "image/jpeg",
    "etag": "\"13a91-jguIluGZxzuV5myvdTtkLHmJMuI\"",
    "mtime": "2023-04-14T11:07:29.720Z",
    "size": 80529,
    "path": "../public/staff/yasemin-oncu.jpg"
  },
  "/staff/yusuf-karanci.jpg": {
    "type": "image/jpeg",
    "etag": "\"f886-Ujme5WapQIt838q3VUEHKsSN8oU\"",
    "mtime": "2023-04-14T11:07:29.718Z",
    "size": 63622,
    "path": "../public/staff/yusuf-karanci.jpg"
  },
  "/images/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2023-04-14T11:07:29.768Z",
    "size": 6148,
    "path": "../public/images/.DS_Store"
  },
  "/images/hero.png": {
    "type": "image/png",
    "etag": "\"139598-nbZAUr38BDR5NCyuVDTlengRTGI\"",
    "mtime": "2023-04-14T11:07:29.767Z",
    "size": 1283480,
    "path": "../public/images/hero.png"
  },
  "/images/logo-w.png": {
    "type": "image/png",
    "etag": "\"14471-4x2a9W9MaEI4HYE4pNAWNuGfMtA\"",
    "mtime": "2023-04-14T11:07:29.763Z",
    "size": 83057,
    "path": "../public/images/logo-w.png"
  },
  "/images/logo.png": {
    "type": "image/png",
    "etag": "\"33a85-wjSjffp3kJkm9CLcxmQHroNUfGk\"",
    "mtime": "2023-04-14T11:07:29.763Z",
    "size": 211589,
    "path": "../public/images/logo.png"
  },
  "/images/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bcdd-c/dnBXK8RuzMi9t+Bnt1mY/1AS0\"",
    "mtime": "2023-04-14T11:07:29.762Z",
    "size": 179421,
    "path": "../public/images/logo.svg"
  },
  "/images/mj1.png": {
    "type": "image/png",
    "etag": "\"1314ff-2DiR/845BCAGKnl7MLTCcx5Gzdg\"",
    "mtime": "2023-04-14T11:07:29.760Z",
    "size": 1250559,
    "path": "../public/images/mj1.png"
  },
  "/images/mj2.png": {
    "type": "image/png",
    "etag": "\"13f454-n7iQ1LQfsT3eVd7KXtSU6M8jGUg\"",
    "mtime": "2023-04-14T11:07:29.757Z",
    "size": 1307732,
    "path": "../public/images/mj2.png"
  },
  "/images/mj3.png": {
    "type": "image/png",
    "etag": "\"d40e0-xuy/3MTYNnU744w4pCmGrcwlnRI\"",
    "mtime": "2023-04-14T11:07:29.753Z",
    "size": 868576,
    "path": "../public/images/mj3.png"
  },
  "/images/mj4.png": {
    "type": "image/png",
    "etag": "\"136be0-N32a/WYv1aytSafrgVJ6krUiE88\"",
    "mtime": "2023-04-14T11:07:29.750Z",
    "size": 1272800,
    "path": "../public/images/mj4.png"
  },
  "/images/mj5.png": {
    "type": "image/png",
    "etag": "\"14b123-VHA8TXrbvB7/oVXw0XKZWoLTmcg\"",
    "mtime": "2023-04-14T11:07:29.746Z",
    "size": 1356067,
    "path": "../public/images/mj5.png"
  },
  "/images/mj6.png": {
    "type": "image/png",
    "etag": "\"179338-5YiRkA9NNkQed+H3MNonD/3S/ZQ\"",
    "mtime": "2023-04-14T11:07:29.742Z",
    "size": 1545016,
    "path": "../public/images/mj6.png"
  },
  "/images/mj7.png": {
    "type": "image/png",
    "etag": "\"152c44-FotjFuBAmjHGJ2LgoQAkJxrF1WE\"",
    "mtime": "2023-04-14T11:07:29.738Z",
    "size": 1387588,
    "path": "../public/images/mj7.png"
  },
  "/images/mj8.png": {
    "type": "image/png",
    "etag": "\"102d2b-5H2lRrdGa5wnGEn+7nxKFp0NO/w\"",
    "mtime": "2023-04-14T11:07:29.733Z",
    "size": 1060139,
    "path": "../public/images/mj8.png"
  },
  "/images/share.png": {
    "type": "image/png",
    "etag": "\"736fc-YCKb+KmXVz93UdZGZBi9WbGePwc\"",
    "mtime": "2023-04-14T11:07:29.730Z",
    "size": 472828,
    "path": "../public/images/share.png"
  },
  "/_nuxt/About.07bed20e.js": {
    "type": "application/javascript",
    "etag": "\"49a-22X1ENT1VzrcabVNc6F1HbobILk\"",
    "mtime": "2023-04-14T11:07:29.716Z",
    "size": 1178,
    "path": "../public/_nuxt/About.07bed20e.js"
  },
  "/_nuxt/Careers.ad60d508.js": {
    "type": "application/javascript",
    "etag": "\"95e-O5ngBxsrZ6l0iYm6hfx3vSFsLUo\"",
    "mtime": "2023-04-14T11:07:29.715Z",
    "size": 2398,
    "path": "../public/_nuxt/Careers.ad60d508.js"
  },
  "/_nuxt/Chairs-Message.24339261.js": {
    "type": "application/javascript",
    "etag": "\"c28-QYDPUIc4jafxFpNG8mZqmE0HyTA\"",
    "mtime": "2023-04-14T11:07:29.714Z",
    "size": 3112,
    "path": "../public/_nuxt/Chairs-Message.24339261.js"
  },
  "/_nuxt/Our-Learning-Facilitators.15d23c17.js": {
    "type": "application/javascript",
    "etag": "\"47dc-IkhXbGdwcYd6VynbFsSNvcF5TeM\"",
    "mtime": "2023-04-14T11:07:29.713Z",
    "size": 18396,
    "path": "../public/_nuxt/Our-Learning-Facilitators.15d23c17.js"
  },
  "/_nuxt/_Our-Team.ecfd2d95.js": {
    "type": "application/javascript",
    "etag": "\"47c3-BjudbchCihCYz1zmG6BncIJkJJA\"",
    "mtime": "2023-04-14T11:07:29.712Z",
    "size": 18371,
    "path": "../public/_nuxt/_Our-Team.ecfd2d95.js"
  },
  "/_nuxt/certificate-programs-and-courses.a0c282ce.js": {
    "type": "application/javascript",
    "etag": "\"39b4-tepkkHONG/+Mfc9lJx+E13DuC2Q\"",
    "mtime": "2023-04-14T11:07:29.711Z",
    "size": 14772,
    "path": "../public/_nuxt/certificate-programs-and-courses.a0c282ce.js"
  },
  "/_nuxt/entry.329d11c7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47bb-GoLg+4eHLeHyvPT6E0bYuvOTmY8\"",
    "mtime": "2023-04-14T11:07:29.711Z",
    "size": 18363,
    "path": "../public/_nuxt/entry.329d11c7.css"
  },
  "/_nuxt/entry.dd60f503.js": {
    "type": "application/javascript",
    "etag": "\"2dad3-DvaXs7aACQV+/9tVbPBpJqMsLSU\"",
    "mtime": "2023-04-14T11:07:29.710Z",
    "size": 187091,
    "path": "../public/_nuxt/entry.dd60f503.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-04-14T11:07:29.709Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.4e10024e.js": {
    "type": "application/javascript",
    "etag": "\"1914-8OV/07UdS8FpMwDoXMQalqHlFDs\"",
    "mtime": "2023-04-14T11:07:29.708Z",
    "size": 6420,
    "path": "../public/_nuxt/error-404.4e10024e.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-04-14T11:07:29.707Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.d0d03973.js": {
    "type": "application/javascript",
    "etag": "\"756-uBn7IgC2TonH9Bns6yj9fP962ZM\"",
    "mtime": "2023-04-14T11:07:29.706Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.d0d03973.js"
  },
  "/_nuxt/error-component.f10901cd.js": {
    "type": "application/javascript",
    "etag": "\"45e-jG2XUV72gmdprR6JCaRxqj5Wswg\"",
    "mtime": "2023-04-14T11:07:29.706Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.f10901cd.js"
  },
  "/_nuxt/hero.e848c06e.js": {
    "type": "application/javascript",
    "etag": "\"67-s3w1dhLrkO81vWPS79iefEuyaFY\"",
    "mtime": "2023-04-14T11:07:29.705Z",
    "size": 103,
    "path": "../public/_nuxt/hero.e848c06e.js"
  },
  "/_nuxt/index.ee2795c5.js": {
    "type": "application/javascript",
    "etag": "\"27d9-VOu3OpapzqaqbVZn0k4iNcthvO4\"",
    "mtime": "2023-04-14T11:07:29.704Z",
    "size": 10201,
    "path": "../public/_nuxt/index.ee2795c5.js"
  },
  "/_nuxt/logo.14b58be5.js": {
    "type": "application/javascript",
    "etag": "\"67-NiDsJeMakxLWP+H/idywrizt/qg\"",
    "mtime": "2023-04-14T11:07:29.704Z",
    "size": 103,
    "path": "../public/_nuxt/logo.14b58be5.js"
  },
  "/_nuxt/mj4.bc72f351.js": {
    "type": "application/javascript",
    "etag": "\"66-4G10vOQUqQ40syaqb05kc9UNoFE\"",
    "mtime": "2023-04-14T11:07:29.703Z",
    "size": 102,
    "path": "../public/_nuxt/mj4.bc72f351.js"
  },
  "/_nuxt/okan-pala.5801878c.js": {
    "type": "application/javascript",
    "etag": "\"2b7-eJWx1MJVdEYjcFsZvaGVvRGYrAY\"",
    "mtime": "2023-04-14T11:07:29.702Z",
    "size": 695,
    "path": "../public/_nuxt/okan-pala.5801878c.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_dqhOVz = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_dqhOVz, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_dqhOVz, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
