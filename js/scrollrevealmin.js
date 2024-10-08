// @ts-nocheck
/*! @license ScrollReveal v4.0.4

    Copyright 2018 Fisssion LLC.

    Licensed under the GNU General Public License 3.0 for
    compatible open source projects and non-commercial use.

    For commercial sites, themes, projects, and applications,
    keep your source code private/proprietary by purchasing
    a commercial license from https://scrollrevealjs.org/
*/
var isSitecoreEditing = function () { return !("undefined" == typeof Sitecore || !Sitecore.WebEditSettings || !Sitecore.WebEditSettings.editing); };
if (!isSitecoreEditing())
    var ScrollReveal = function () {
        "use strict";
        var e = { delay: 0, distance: "0", duration: 600, easing: "cubic-bezier(0.5, 0, 0, 1)", interval: 0, opacity: 0, origin: "bottom", rotate: { x: 0, y: 0, z: 0 }, scale: 1, cleanup: !1, container: document.documentElement, desktop: !0, mobile: !0, reset: !1, useDelay: "always", viewFactor: 0, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReset: function () { }, afterReveal: function () { }, beforeReset: function () { }, beforeReveal: function () { } }, t = { success: function () { document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function () { document.body.style.height = "100%"; }); }, failure: function () { return document.documentElement.classList.remove("sr"), { clean: function () { }, destroy: function () { }, reveal: function () { }, sync: function () { }, get noop() { return !0; } }; } };
        function n(e) { return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName; }
        function i(e, t) { if (void 0 === t && (t = document), e instanceof Array)
            return e.filter(n); if (n(e))
            return [e]; if (i = e, r = Object.prototype.toString.call(i), "object" == typeof window.NodeList ? i instanceof window.NodeList : null !== i && "object" == typeof i && "number" == typeof i.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(r) && (0 === i.length || n(i[0])))
            return Array.prototype.slice.call(e); var i, r; if ("string" == typeof e)
            try {
                var o = t.querySelectorAll(e);
                return Array.prototype.slice.call(o);
            }
            catch (e) {
                return [];
            } return []; }
        function r(e) { return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e)); }
        function o(e, t) { if (r(e))
            return Object.keys(e).forEach(function (n) { return t(e[n], n, e); }); if (e instanceof Array)
            return e.forEach(function (n, i) { return t(n, i, e); }); throw new TypeError("Expected either an array or object literal."); }
        function s(e) { for (var t = [], n = arguments.length - 1; 0 < n--;)
            t[n] = arguments[n + 1]; if (this.constructor.debug && console) {
            var i = "%cScrollReveal: " + e;
            t.forEach(function (e) { return i += "\n — " + e; }), console.log(i, "color: #ea654b;");
        } }
        function a() { var e = this, t = { active: [], stale: [] }, n = { active: [], stale: [] }, r = { active: [], stale: [] }; try {
            o(i("[data-sr-id]"), function (e) { var n = parseInt(e.getAttribute("data-sr-id")); t.active.push(n); });
        }
        catch (e) {
            throw e;
        } o(this.store.elements, function (e) { -1 === t.active.indexOf(e.id) && t.stale.push(e.id); }), o(t.stale, function (t) { return delete e.store.elements[t]; }), o(this.store.elements, function (e) { -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === n.active.indexOf(e.sequence.id) && n.active.push(e.sequence.id); }), o(this.store.containers, function (e) { -1 === r.active.indexOf(e.id) && r.stale.push(e.id); }), o(r.stale, function (t) { var n = e.store.containers[t].node; n.removeEventListener("scroll", e.delegate), n.removeEventListener("resize", e.delegate), delete e.store.containers[t]; }), o(this.store.sequences, function (e) { -1 === n.active.indexOf(e.id) && n.stale.push(e.id); }), o(n.stale, function (t) { return delete e.store.sequences[t]; }); }
        function c(e) { var t, n = this; try {
            o(i(e), function (e) { var i = e.getAttribute("data-sr-id"); if (null !== i) {
                t = !0;
                var r = n.store.elements[i];
                r.callbackTimer && window.clearTimeout(r.callbackTimer.clock), e.setAttribute("style", r.styles.inline.generated), e.removeAttribute("data-sr-id"), delete n.store.elements[i];
            } });
        }
        catch (e) {
            return s.call(this, "Clean failed.", e.message);
        } if (t)
            try {
                a.call(this);
            }
            catch (e) {
                return s.call(this, "Clean failed.", e.message);
            } }
        function l(e) { if (e.constructor !== Array)
            throw new TypeError("Expected array."); if (16 === e.length)
            return e; if (6 !== e.length)
            throw new RangeError("Expected array with either 6 or 16 values."); var t = d(); return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t; }
        function d() { for (var e = [], t = 0; t < 16; t++)
            t % 5 == 0 ? e.push(1) : e.push(0); return e; }
        function u(e, t) { for (var n = l(e), i = l(t), r = [], o = 0; o < 4; o++)
            for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) {
                var c = 4 * a, d = [i[c], i[c + 1], i[c + 2], i[c + 3]], u = s[0] * d[0] + s[1] * d[1] + s[2] * d[2] + s[3] * d[3];
                r[o + c] = u;
            } return r; }
        function f(e, t) { var n = d(); return n[0] = e, n[5] = "number" == typeof t ? t : e, n; }
        var h = function () { var e = {}, t = document.documentElement.style; function n(n, i) { if (void 0 === i && (i = t), n && "string" == typeof n) {
            if (e[n])
                return e[n];
            if ("string" == typeof i[n])
                return e[n] = n;
            if ("string" == typeof i["-webkit-" + n])
                return e[n] = "-webkit-" + n;
            throw new RangeError('Unable to find "' + n + '" style property.');
        } throw new TypeError("Expected a string."); } return n.clearCache = function () { return e = {}; }, n; }();
        function p(e, t) { void 0 === t && (t = {}); var n = t.pristine || this.pristine, i = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen, r = e.visible && !e.revealed, o = !e.visible && e.revealed && e.config.reset; return t.reveal || r ? function (e, t) { var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final]; t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant), e.revealed = e.seen = !0, e.node.setAttribute("style", n.filter(function (e) { return "" !== e; }).join(" ")), m.call(this, e, t); }.call(this, e, i) : t.reset || o ? function (e) { var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant]; e.revealed = !1, e.node.setAttribute("style", t.filter(function (e) { return "" !== e; }).join(" ")), m.call(this, e); }.call(this, e) : void 0; }
        function m(e, t) { var n = this, i = t ? e.config.duration + e.config.delay : e.config.duration, r = e.revealed ? e.config.beforeReveal : e.config.beforeReset, o = e.revealed ? e.config.afterReveal : e.config.afterReset, s = 0; e.callbackTimer && (s = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = { start: Date.now(), clock: window.setTimeout(function () { o(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && c.call(n, e.node); }, i - s) }; }
        var y, v = (y = 0, function () { return y++; });
        function g(e, t) { if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset)
            return p.call(this, e, { reset: !0 }); var n = this.store.sequences[e.sequence.id], i = e.sequence.index; if (n) {
            var r = new w(n, "visible", this.store), o = new w(n, "revealed", this.store);
            if (n.models = { visible: r, revealed: o }, !o.body.length) {
                var s = n.members[r.body[0]], a = this.store.elements[s];
                if (a)
                    return E.call(this, n, r.body[0], -1, t), E.call(this, n, r.body[0], 1, t), p.call(this, a, { reveal: !0, pristine: t });
            }
            if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift())
                return E.call(this, n, i, -1, t), p.call(this, e, { reveal: !0, pristine: t });
            if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop())
                return E.call(this, n, i, 1, t), p.call(this, e, { reveal: !0, pristine: t });
        } }
        function b(e) { var t = Math.abs(e); if (isNaN(t))
            throw new RangeError("Invalid sequence interval."); this.id = v(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = { head: !1, foot: !1 }; }
        function w(e, t, n) { var i = this; this.head = [], this.body = [], this.foot = [], o(e.members, function (e, r) { var o = n.elements[e]; o && o[t] && i.body.push(r); }), this.body.length && o(e.members, function (e, r) { var o = n.elements[e]; o && !o[t] && (r < i.body[0] ? i.head.push(r) : i.foot.push(r)); }); }
        function E(e, t, n, i) { var r = this, o = ["head", null, "foot"][1 + n], s = e.members[t + n], a = this.store.elements[s]; e.blocked[o] = !0, setTimeout(function () { e.blocked[o] = !1, a && g.call(r, a, i); }, e.interval); }
        function j() { var e = this; a.call(this), o(this.store.elements, function (e) { var t = [e.styles.inline.generated]; e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final)) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial)), e.node.setAttribute("style", t.filter(function (e) { return "" !== e; }).join(" ")); }), o(this.store.containers, function (t) { var n = t.node === document.documentElement ? window : t.node; n.addEventListener("scroll", e.delegate), n.addEventListener("resize", e.delegate); }), this.delegate(), this.initTimeout = null; }
        function T(e) { return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e); }
        function k(e) { for (var t = [], n = arguments.length - 1; 0 < n--;)
            t[n] = arguments[n + 1]; if (r(e))
            return o(t, function (t) { o(t, function (t, n) { r(t) ? (e[n] && r(e[n]) || (e[n] = {}), k(e[n], t)) : e[n] = t; }); }), e; throw new TypeError("Target must be an object literal."); }
        function O(t, n, r) { var a = this; void 0 === n && (n = {}), void 0 === r && (r = !1); var p, m = [], y = n.interval || e.interval; try {
            y && (p = new b(y));
            var g = i(t);
            if (!g.length)
                throw new Error("Invalid reveal target.");
            o(g.reduce(function (e, t) { var r = {}, s = t.getAttribute("data-sr-id"); s ? (k(r, a.store.elements[s]), r.node.setAttribute("style", r.styles.inline.computed)) : (r.id = v(), r.node = t, r.seen = !1, r.revealed = !1, r.visible = !1); var y = k({}, r.config || a.defaults, n); if (!y.mobile && T() || !y.desktop && !T())
                return s && c.call(a, r), e; var g, b = i(y.container)[0]; if (!b)
                throw new Error("Invalid container."); return b.contains(t) && (null === (g = function (e) { for (var t = [], n = arguments.length - 1; 0 < n--;)
                t[n] = arguments[n + 1]; var i = null; return o(t, function (t) { o(t, function (t) { null === i && t.node === e && (i = t.id); }); }), i; }(b, m, a.store.containers)) && (g = v(), m.push({ id: g, node: b })), r.config = y, r.containerId = g, r.styles = function (e) { var t = window.getComputedStyle(e.node), n = t.position, i = e.config, r = {}, o = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || []; r.computed = o ? o.map(function (e) { return e.trim(); }).join("; ") + ";" : "", r.generated = o.some(function (e) { return e.match(/visibility\s?:\s?visible/i); }) ? r.computed : o.concat(["visibility: visible"]).map(function (e) { return e.trim(); }).join("; ") + ";"; var s, a, c, p, m, y, v, g, b, w, E, j, T, k = parseFloat(t.opacity), O = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity), x = { computed: k !== O ? "opacity: " + k + ";" : "", generated: k !== O ? "opacity: " + O + ";" : "" }, A = []; if (parseFloat(i.distance)) {
                var R = "top" === i.origin || "bottom" === i.origin ? "Y" : "X", q = i.distance;
                "top" !== i.origin && "left" !== i.origin || (q = /^-/.test(q) ? q.substr(1) : "-" + q);
                var P = q.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g), L = P[0];
                switch (P[1]) {
                    case "em":
                        q = parseInt(t.fontSize) * L;
                        break;
                    case "px":
                        q = L;
                        break;
                    case "%":
                        q = "Y" === R ? e.node.getBoundingClientRect().height * L / 100 : e.node.getBoundingClientRect().width * L / 100;
                        break;
                    default: throw new RangeError("Unrecognized or missing distance unit.");
                }
                "Y" === R ? A.push((c = q, (p = d())[13] = c, p)) : A.push((s = q, (a = d())[12] = s, a));
            } i.rotate.x && A.push((m = i.rotate.x, y = Math.PI / 180 * m, (v = d())[5] = v[10] = Math.cos(y), v[6] = v[9] = Math.sin(y), v[9] *= -1, v)), i.rotate.y && A.push((g = i.rotate.y, b = Math.PI / 180 * g, (w = d())[0] = w[10] = Math.cos(b), w[2] = w[8] = Math.sin(b), w[2] *= -1, w)), i.rotate.z && A.push((E = i.rotate.z, j = Math.PI / 180 * E, (T = d())[0] = T[5] = Math.cos(j), T[1] = T[4] = Math.sin(j), T[4] *= -1, T)), 1 !== i.scale && (0 === i.scale ? A.push(f(2e-4)) : A.push(f(i.scale))); var M = {}; if (A.length) {
                M.property = h("transform"), M.computed = { raw: t[M.property], matrix: function (e) { if ("string" == typeof e) {
                        var t = e.match(/matrix(3d)?\(([^)]+)\)/);
                        if (t)
                            return l(t[2].split(", ").map(parseFloat));
                    } return d(); }(t[M.property]) }, A.unshift(M.computed.matrix);
                var S = A.reduce(u);
                M.generated = { initial: M.property + ": matrix3d(" + S.join(", ") + ");", final: M.property + ": matrix3d(" + M.computed.matrix.join(", ") + ");" };
            }
            else
                M.generated = { initial: "", final: "" }; var I = {}; if (x.generated || M.generated.initial) {
                I.property = h("transition"), I.computed = t[I.property], I.fragments = [];
                var N = i.delay, z = i.duration, F = i.easing;
                x.generated && I.fragments.push({ delayed: "opacity " + z / 1e3 + "s " + F + " " + N / 1e3 + "s", instant: "opacity " + z / 1e3 + "s " + F + " 0s" }), M.generated.initial && I.fragments.push({ delayed: M.property + " " + z / 1e3 + "s " + F + " " + N / 1e3 + "s", instant: M.property + " " + z / 1e3 + "s " + F + " 0s" }), I.computed && !I.computed.match(/all 0s/) && I.fragments.unshift({ delayed: I.computed, instant: I.computed });
                var D = I.fragments.reduce(function (e, t, n) { return e.delayed += 0 === n ? t.delayed : ", " + t.delayed, e.instant += 0 === n ? t.instant : ", " + t.instant, e; }, { delayed: "", instant: "" });
                I.generated = { delayed: I.property + ": " + D.delayed + ";", instant: I.property + ": " + D.instant + ";" };
            }
            else
                I.generated = { delayed: "", instant: "" }; return { inline: r, opacity: x, position: n, transform: M, transition: I }; }(r), p && (r.sequence = { id: p.id, index: p.members.length }, p.members.push(r.id)), e.push(r)), e; }, []), function (e) { (a.store.elements[e.id] = e).node.setAttribute("data-sr-id", e.id); });
        }
        catch (t) {
            return s.call(this, "Reveal failed.", t.message);
        } o(m, function (e) { a.store.containers[e.id] = { id: e.id, node: e.node }; }), p && (this.store.sequences[p.id] = p), !0 !== r && (this.store.history.push({ target: t, options: n }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(j.bind(this), 0)); }
        var x, A = Math.sign || function (e) { return (0 < e) - (e < 0) || +e; }, R = (x = Date.now(), function (e) { var t = Date.now(); 16 < t - x ? e(x = t) : setTimeout(function () { return R(e); }, 0); }), q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || R;
        function P(e, t) { for (var n = t ? e.node.clientHeight : e.node.offsetHeight, i = t ? e.node.clientWidth : e.node.offsetWidth, r = 0, o = 0, s = e.node; isNaN(s.offsetTop) || (r += s.offsetTop), isNaN(s.offsetLeft) || (o += s.offsetLeft), s = s.offsetParent;)
            ; return { bounds: { top: r, right: o + i, bottom: r + n, left: o }, height: n, width: i }; }
        var L, M, S, I, N, z, F, D, C = "4.0.4";
        function W(n) { var r; if (void 0 === n && (n = {}), void 0 === this || Object.getPrototypeOf(this) !== W.prototype)
            return new W(n); if (!W.isSupported())
            return s.call(this, "Instantiation failed.", "This browser is not supported."), t.failure(); try {
            r = k({}, z || e, n);
        }
        catch (n) {
            return s.call(this, "Invalid configuration.", n.message), t.failure();
        } try {
            if (!i(r.container)[0])
                throw new Error("Invalid container.");
        }
        catch (n) {
            return s.call(this, n.message), t.failure();
        } return !(z = r).mobile && T() || !z.desktop && !T() ? (s.call(this, "This device is disabled.", "desktop: " + z.desktop, "mobile: " + z.mobile), t.failure()) : (t.success(), this.store = { containers: {}, elements: {}, history: [], sequences: {} }, this.pristine = !0, L = L || function (e, t) { var n = this; void 0 === e && (e = { type: "init" }), void 0 === t && (t = this.store.elements), q(function () { var i = "init" === e.type || "resize" === e.type; o(n.store.containers, function (e) { i && (e.geometry = P.call(n, e, !0)); var t = function (e) { var t, n; return n = e.node === document.documentElement ? (t = window.pageYOffset, window.pageXOffset) : (t = e.node.scrollTop, e.node.scrollLeft), { top: t, left: n }; }.call(n, e); e.scroll && (e.direction = { x: A(t.left - e.scroll.left), y: A(t.top - e.scroll.top) }), e.scroll = t; }), o(t, function (e) { i && (e.geometry = P.call(n, e)), e.visible = function (e) { void 0 === e && (e = {}); var t = this.store.containers[e.containerId]; if (t) {
            var n = Math.max(0, Math.min(1, e.config.viewFactor)), i = e.config.viewOffset, r = e.geometry.bounds.top + e.geometry.height * n, o = e.geometry.bounds.right - e.geometry.width * n, s = e.geometry.bounds.bottom - e.geometry.height * n, a = e.geometry.bounds.left + e.geometry.width * n, c = t.geometry.bounds.top + t.scroll.top + i.top, l = t.geometry.bounds.right + t.scroll.left - i.right, d = t.geometry.bounds.bottom + t.scroll.top - i.bottom, u = t.geometry.bounds.left + t.scroll.left + i.left;
            return r < d && u < o && c < s && a < l || "fixed" === e.styles.position;
        } }.call(n, e); }), o(t, function (e) { e.sequence ? g.call(n, e) : p.call(n, e); }), n.pristine = !1; }); }.bind(this), M = M || function () { var e = this; o(this.store.elements, function (e) { e.node.setAttribute("style", e.styles.inline.generated), e.node.removeAttribute("data-sr-id"); }), o(this.store.containers, function (t) { var n = t.node === document.documentElement ? window : t.node; n.removeEventListener("scroll", e.delegate), n.removeEventListener("resize", e.delegate); }), this.store = { containers: {}, elements: {}, history: [], sequences: {} }; }.bind(this), S = S || O.bind(this), I = I || c.bind(this), N = N || function () { var e = this; o(this.store.history, function (t) { O.call(e, t.target, t.options, !0); }), j.call(this); }.bind(this), Object.defineProperty(this, "delegate", { get: function () { return L; } }), Object.defineProperty(this, "destroy", { get: function () { return M; } }), Object.defineProperty(this, "reveal", { get: function () { return S; } }), Object.defineProperty(this, "clean", { get: function () { return I; } }), Object.defineProperty(this, "sync", { get: function () { return N; } }), Object.defineProperty(this, "defaults", { get: function () { return z; } }), Object.defineProperty(this, "version", { get: function () { return C; } }), Object.defineProperty(this, "noop", { get: function () { return !1; } }), D || (D = this)); }
        return W.isSupported = function () { return ("transform" in (t = document.documentElement.style) || "WebkitTransform" in t) && ("transition" in (e = document.documentElement.style) || "WebkitTransition" in e); var e, t; }, Object.defineProperty(W, "debug", { get: function () { return F || !1; }, set: function (e) { return F = "boolean" == typeof e ? e : F; } }), W(), W;
    }();
