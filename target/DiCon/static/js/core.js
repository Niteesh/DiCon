deferred("$lib/jquery.js", function() {/*! jQuery v1.7.1 jquery.com | jquery.org/license */
    (function(a, b) {
        function h(a) {
            var b = g[a] = {},c,d;
            a = a.split(/\s+/);
            for (c = 0,d = a.length; c < d; c++)b[a[c]] = !0;
            return b
        }

        function l(a, c, d) {
            if (d === b && a.nodeType === 1) {
                var e = "data-" + c.replace(k, "-$1").toLowerCase();
                d = a.getAttribute(e);
                if (typeof d == "string") {
                    try {
                        d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                    } catch(g) {
                    }
                    f.data(a, c, d)
                } else d = b
            }
            return d
        }

        function m(a) {
            for (var b in a) {
                if (b === "data" && f.isEmptyObject(a[b]))continue;
                if (b !== "toJSON")return!1
            }
            return!0
        }

        function n(a, b, c) {
            var d = b + "defer",e = b + "queue",g = b + "mark",h = f._data(a, d);
            h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
                !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0),h.fire())
            }, 0)
        }

        function J() {
            return!1
        }

        function K() {
            return!0
        }

        function S(a) {
            return!a || !a.parentNode || a.parentNode.nodeType === 11
        }

        function T(a, b, c) {
            b = b || 0;
            if (f.isFunction(b))return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
            if (b.nodeType)return f.grep(a, function(a, d) {
                return a === b === c
            });
            if (typeof b == "string") {
                var d = f.grep(a, function(a) {
                    return a.nodeType === 1
                });
                if (O.test(b))return f.filter(b, d, !c);
                b = f.filter(b, d)
            }
            return f.grep(a, function(a, d) {
                return f.inArray(a, b) >= 0 === c
            })
        }

        function U(a) {
            var b = V.split("|"),c = a.createDocumentFragment();
            if (c.createElement)while (b.length)c.createElement(b.pop());
            return c
        }

        function kb(a, b) {
            return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function lb(a, b) {
            if (b.nodeType !== 1 || !f.hasData(a))return;
            var c,d,e,g = f._data(a),h = f._data(b, g),i = g.events;
            if (i) {
                delete h.handle,h.events = {};
                for (c in i)for (d = 0,e = i[c].length; d < e; d++)f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }

        function mb(a, b) {
            var c;
            if (b.nodeType !== 1)return;
            b.clearAttributes && b.clearAttributes(),b.mergeAttributes && b.mergeAttributes(a),c = b.nodeName.toLowerCase();
            if (c === "object")b.outerHTML = a.outerHTML; else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option")b.selected = a.defaultSelected; else if (c === "input" || c === "textarea")b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked),b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }

        function nb(a) {
            return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
        }

        function ob(a) {
            if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
        }

        function pb(a) {
            var b = (a.nodeName || "").toLowerCase();
            b === "input" ? ob(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), ob)
        }

        function qb(a) {
            var b = c.createElement("div");
            return jb.appendChild(b),b.innerHTML = a.outerHTML,b.firstChild
        }

        function rb(a, b) {
            b.src ? f.ajax({url:b.src,async:!1,dataType:"script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(hb, "/*$0*/")),b.parentNode && b.parentNode.removeChild(b)
        }

        function Eb(a, b, c) {
            var d = b === "width" ? a.offsetWidth : a.offsetHeight,e = b === "width" ? zb : Ab,g = 0,h = e.length;
            if (d > 0) {
                if (c !== "border")for (; g < h; g++)c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0),c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
                return d + "px"
            }
            d = Bb(a, b, b);
            if (d < 0 || d == null)d = a.style[b] || 0;
            d = parseFloat(d) || 0;
            if (c)for (; g < h; g++)d += parseFloat(f.css(a, "padding" + e[g])) || 0,c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0),c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
            return d + "px"
        }

        function _b(a) {
            return function(b, c) {
                typeof b != "string" && (c = b,b = "*");
                if (f.isFunction(c)) {
                    var d = b.toLowerCase().split(Rb),e = 0,g = d.length,h,i,j;
                    for (; e < g; e++)h = d[e],j = /^\+/.test(h),j && (h = h.substr(1) || "*"),i = a[h] = a[h] || [],i[j ? "unshift" : "push"](c)
                }
            }
        }

        function ac(a, c, d, e, f, g) {
            f = f || c.dataTypes[0],g = g || {},g[f] = !0;
            var h = a[f],i = 0,j = h ? h.length : 0,k = a === Vb,l;
            for (; i < j && (k || !l); i++)l = h[i](c, d, e),typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),l = ac(a, c, d, e, l, g)));
            return(k || !l) && !g["*"] && (l = ac(a, c, d, e, "*", g)),l
        }

        function bc(a, c) {
            var d,e,g = f.ajaxSettings.flatOptions || {};
            for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
            e && f.extend(!0, a, e)
        }

        function cc(a, b, c, d) {
            if (f.isArray(b))f.each(b, function(b, e) {
                c || Gb.test(a) ? d(a, e) : cc(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            }); else if (!c && b != null && typeof b == "object")for (var e in b)cc(a + "[" + e + "]", b[e], c, d); else d(a, b)
        }

        function dc(a, c, d) {
            var e = a.contents,f = a.dataTypes,g = a.responseFields,h,i,j,k;
            for (i in g)i in d && (c[g[i]] = d[i]);
            while (f[0] === "*")f.shift(),h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
            if (h)for (i in e)if (e[i] && e[i].test(h)) {
                f.unshift(i);
                break
            }
            if (f[0]in d)j = f[0]; else {
                for (i in d) {
                    if (!f[0] || a.converters[i + " " + f[0]]) {
                        j = i;
                        break
                    }
                    k || (k = i)
                }
                j = j || k
            }
            if (j)return j !== f[0] && f.unshift(j),d[j]
        }

        function ec(a, c) {
            a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d = a.dataTypes,e = {},g,h,i = d.length,j,k = d[0],l,m,n,o,p;
            for (g = 1; g < i; g++) {
                if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
                l = k,k = d[g];
                if (k === "*")k = l; else if (l !== "*" && l !== k) {
                    m = l + " " + k,n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o],o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
            return c
        }

        function kc() {
            try {
                return new a.XMLHttpRequest
            } catch(b) {
            }
        }

        function lc() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch(b) {
            }
        }

        function uc() {
            return setTimeout(vc, 0),tc = f.now()
        }

        function vc() {
            tc = b
        }

        function wc(a, b) {
            var c = {};
            return f.each(sc.concat.apply([], sc.slice(0, b)), function() {
                c[this] = a
            }),c
        }

        function xc(a) {
            if (!mc[a]) {
                var b = c.body,d = f("<" + a + ">").appendTo(b),e = d.css("display");
                d.remove();
                if (e === "none" || e === "") {
                    nc || (nc = c.createElement("iframe"),nc.frameBorder = nc.width = nc.height = 0),b.appendChild(nc);
                    if (!oc || !nc.createElement)oc = (nc.contentWindow || nc.contentDocument).document,oc.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),oc.close();
                    d = oc.createElement(a),oc.body.appendChild(d),e = f.css(d, "display"),b.removeChild(nc)
                }
                mc[a] = e
            }
            return mc[a]
        }

        function Ac(a) {
            return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
        }

        var c = a.document,d = a.navigator,e = a.location,f = function() {
            function J() {
                if (e.isReady)return;
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }

            var e = function(a, b) {
                return new e.fn.init(a, b, h)
            },f = a.jQuery,g = a.$,h,i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j = /\S/,k = /^\s+/,l = /\s+$/,m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,n = /^[\],:{}\s]*$/,o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q = /(?:^|:|,)(?:\s*\[)+/g,r = /(webkit)[ \/]([\w.]+)/,s = /(opera)(?:.*version)?[ \/]([\w.]+)/,t = /(msie) ([\w.]+)/,u = /(mozilla)(?:.*? rv:([\w.]+))?/,v = /-([a-z]|[0-9])/gi,w = /^-ms-/,x = function(a, b) {
                return(b + "").toUpperCase()
            },y = d.userAgent,z,A,B,C = Object.prototype.toString,D = Object.prototype.hasOwnProperty,E = Array.prototype.push,F = Array.prototype.slice,G = String.prototype.trim,H = Array.prototype.indexOf,I = {};
            return e.fn = e.prototype = {constructor:e,init:function(a, d, f) {
                var g,h,j,k;
                if (!a)return this;
                if (a.nodeType)return this.context = this[0] = a,this.length = 1,this;
                if (a === "body" && !d && c.body)return this.context = c,this[0] = c.body,this.selector = a,this.length = 1,this;
                if (typeof a == "string") {
                    a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null,a,null] : g = i.exec(a);
                    if (g && (g[1] || !d)) {
                        if (g[1])return d = d instanceof e ? d[0] : d,k = d ? d.ownerDocument || d : c,j = m.exec(a),j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes),e.merge(this, a);
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2])return f.find(a);
                            this.length = 1,this[0] = h
                        }
                        return this.context = c,this.selector = a,this
                    }
                    return!d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector,this.context = a.context),e.makeArray(a, this))
            },selector:"",jquery:"1.7.1",length:0,size:function() {
                return this.length
            },toArray:function() {
                return F.call(this, 0)
            },get:function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },pushStack:function(a, b, c) {
                var d = this.constructor();
                return e.isArray(a) ? E.apply(d, a) : e.merge(d, a),d.prevObject = this,d.context = this.context,b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),d
            },each:function(a, b) {
                return e.each(this, a, b)
            },ready:function(a) {
                return e.bindReady(),A.add(a),this
            },eq:function(a) {
                return a = +a,a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },first:function() {
                return this.eq(0)
            },last:function() {
                return this.eq(-1)
            },slice:function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },map:function(a) {
                return this.pushStack(e.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },end:function() {
                return this.prevObject || this.constructor(null)
            },push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype = e.fn,e.extend = e.fn.extend = function() {
                var a,c,d,f,g,h,i = arguments[0] || {},j = 1,k = arguments.length,l = !1;
                typeof i == "boolean" && (l = i,i = arguments[1] || {},j = 2),typeof i != "object" && !e.isFunction(i) && (i = {}),k === j && (i = this,--j);
                for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                    d = i[c],f = a[c];
                    if (i === f)continue;
                    l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                }
                return i
            },e.extend({noConflict:function(b) {
                        return a.$ === e && (a.$ = g),b && a.jQuery === e && (a.jQuery = f),e
                    },isReady:!1,readyWait:1,holdReady:function(a) {
                        a ? e.readyWait++ : e.ready(!0)
                    },ready:function(a) {
                        if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                            if (!c.body)return setTimeout(e.ready, 1);
                            e.isReady = !0;
                            if (a !== !0 && --e.readyWait > 0)return;
                            A.fireWith(c, [e]),e.fn.trigger && e(c).trigger("ready").off("ready")
                        }
                    },bindReady:function() {
                        if (A)return;
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete")return setTimeout(e.ready, 1);
                        if (c.addEventListener)c.addEventListener("DOMContentLoaded", B, !1),a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B),a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch(d) {
                            }
                            c.documentElement.doScroll && b && J()
                        }
                    },isFunction:function(a) {
                        return e.type(a) === "function"
                    },isArray:Array.isArray || function(a) {
                        return e.type(a) === "array"
                    },isWindow:function(a) {
                        return a && typeof a == "object" && "setInterval"in a
                    },isNumeric:function(a) {
                        return!isNaN(parseFloat(a)) && isFinite(a)
                    },type:function(a) {
                        return a == null ? String(a) : I[C.call(a)] || "object"
                    },isPlainObject:function(a) {
                        if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return!1;
                        try {
                            if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))return!1
                        } catch(c) {
                            return!1
                        }
                        var d;
                        for (d in a);
                        return d === b || D.call(a, d)
                    },isEmptyObject:function(a) {
                        for (var b in a)return!1;
                        return!0
                    },error:function(a) {
                        throw new Error(a)
                    },parseJSON:function(b) {
                        if (typeof b != "string" || !b)return null;
                        b = e.trim(b);
                        if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
                        if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))return(new Function("return " + b))();
                        e.error("Invalid JSON: " + b)
                    },parseXML:function(c) {
                        var d,f;
                        try {
                            a.DOMParser ? (f = new DOMParser,d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),d.async = "false",d.loadXML(c))
                        } catch(g) {
                            d = b
                        }
                        return(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c),d
                    },noop:function() {
                    },globalEval:function(b) {
                        b && j.test(b) && (a.execScript || function(b) {
                            a.eval.call(a, b)
                        })(b)
                    },camelCase:function(a) {
                        return a.replace(w, "ms-").replace(v, x)
                    },nodeName:function(a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },each:function(a, c, d) {
                        var f,g = 0,h = a.length,i = h === b || e.isFunction(a);
                        if (d) {
                            if (i) {
                                for (f in a)if (c.apply(a[f], d) === !1)break
                            } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
                        } else if (i) {
                            for (f in a)if (c.call(a[f], f, a[f]) === !1)break
                        } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
                        return a
                    },trim:G ? function(a) {
                        return a == null ? "" : G.call(a)
                    } : function(a) {
                        return a == null ? "" : a.toString().replace(k, "").replace(l, "")
                    },makeArray:function(a, b) {
                        var c = b || [];
                        if (a != null) {
                            var d = e.type(a);
                            a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                        }
                        return c
                    },inArray:function(a, b, c) {
                        var d;
                        if (b) {
                            if (H)return H.call(b, a, c);
                            d = b.length,c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                            for (; c < d; c++)if (c in b && b[c] === a)return c
                        }
                        return-1
                    },merge:function(a, c) {
                        var d = a.length,e = 0;
                        if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
                        return a.length = d,a
                    },grep:function(a, b, c) {
                        var d = [],e;
                        c = !!c;
                        for (var f = 0,g = a.length; f < g; f++)e = !!b(a[f], f),c !== e && d.push(a[f]);
                        return d
                    },map:function(a, c, d) {
                        var f,g,h = [],i = 0,j = a.length,k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                        if (k)for (; i < j; i++)f = c(a[i], i, d),f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d),f != null && (h[h.length] = f);
                        return h.concat.apply([], h)
                    },guid:1,proxy:function(a, c) {
                        if (typeof c == "string") {
                            var d = a[c];
                            c = a,a = d
                        }
                        if (!e.isFunction(a))return b;
                        var f = F.call(arguments, 2),g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                        return g.guid = a.guid = a.guid || g.guid || e.guid++,g
                    },access:function(a, c, d, f, g, h) {
                        var i = a.length;
                        if (typeof c == "object") {
                            for (var j in c)e.access(a, j, c[j], f, g, d);
                            return a
                        }
                        if (d !== b) {
                            f = !h && f && e.isFunction(d);
                            for (var k = 0; k < i; k++)g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                            return a
                        }
                        return i ? g(a[0], c) : b
                    },now:function() {
                        return(new Date).getTime()
                    },uaMatch:function(a) {
                        a = a.toLowerCase();
                        var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                        return{browser:b[1] || "",version:b[2] || "0"}
                    },sub:function() {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }

                        e.extend(!0, a, this),a.superclass = this,a.fn = a.prototype = this(),a.fn.constructor = a,a.sub = this.sub,a.fn.init = function(d, f) {
                            return f && f instanceof e && !(f instanceof a) && (f = a(f)),e.fn.init.call(this, d, f, b)
                        },a.fn.init.prototype = a.fn;
                        var b = a(c);
                        return a
                    },browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }),z = e.uaMatch(y),z.browser && (e.browser[z.browser] = !0,e.browser.version = z.version),e.browser.webkit && (e.browser.safari = !0),j.test(" ") && (k = /^[\s\xA0]+/,l = /[\s\xA0]+$/),h = e(c),c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1),e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),e.ready())
            }),e
        }(),g = {};
        f.Callbacks = function(a) {
            a = a ? g[a] || h(a) : {};
            var c = [],d = [],e,i,j,k,l,m = function(b) {
                var d,e,g,h,i;
                for (d = 0,e = b.length; d < e; d++)g = b[d],h = f.type(g),h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            },n = function(b, f) {
                f = f || [],e = !a.memory || [b,f],i = !0,l = j || 0,j = 0,k = c.length;
                for (; c && l < k; l++)if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
                i = !1,c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(),o.fireWith(e[0], e[1])))
            },o = {add:function() {
                if (c) {
                    var a = c.length;
                    m(arguments),i ? k = c.length : e && e !== !0 && (j = a,n(e[0], e[1]))
                }
                return this
            },remove:function() {
                if (c) {
                    var b = arguments,d = 0,e = b.length;
                    for (; d < e; d++)for (var f = 0; f < c.length; f++)if (b[d] === c[f]) {
                        i && f <= k && (k--,f <= l && l--),c.splice(f--, 1);
                        if (a.unique)break
                    }
                }
                return this
            },has:function(a) {
                if (c) {
                    var b = 0,d = c.length;
                    for (; b < d; b++)if (a === c[b])return!0
                }
                return!1
            },empty:function() {
                return c = [],this
            },disable:function() {
                return c = d = e = b,this
            },disabled:function() {
                return!c
            },lock:function() {
                return d = b,(!e || e === !0) && o.disable(),this
            },locked:function() {
                return!d
            },fireWith:function(b, c) {
                return d && (i ? a.once || d.push([b,c]) : (!a.once || !e) && n(b, c)),this
            },fire:function() {
                return o.fireWith(this, arguments),this
            },fired:function() {
                return!!e
            }};
            return o
        };
        var i = [].slice;
        f.extend({Deferred:function(a) {
                    var b = f.Callbacks("once memory"),c = f.Callbacks("once memory"),d = f.Callbacks("memory"),e = "pending",g = {resolve:b,reject:c,notify:d},h = {done:b.add,fail:c.add,progress:d.add,state:function() {
                        return e
                    },isResolved:b.fired,isRejected:c.fired,then:function(a, b, c) {
                        return i.done(a).fail(b).progress(c),this
                    },always:function() {
                        return i.done.apply(i, arguments).fail.apply(i, arguments),this
                    },pipe:function(a, b, c) {
                        return f.Deferred(
                                function(d) {
                                    f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]}, function(a, b) {
                                        var c = b[0],e = b[1],g;
                                        f.isFunction(c) ? i[a](function() {
                                            g = c.apply(this, arguments),g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                        }) : i[a](d[e])
                                    })
                                }).promise()
                    },promise:function(a) {
                        if (a == null)a = h; else for (var b in h)a[b] = h[b];
                        return a
                    }},i = h.promise({}),j;
                    for (j in g)i[j] = g[j].fire,i[j + "With"] = g[j].fireWith;
                    return i.done(
                            function() {
                                e = "resolved"
                            }, c.disable, d.lock).fail(function() {
                        e = "rejected"
                    }, b.disable, d.lock),a && a.call(i, i),i
                },when:function(a) {
                    function l(a) {
                        return function(c) {
                            b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,--g || j.resolveWith(j, b)
                        }
                    }

                    function m(a) {
                        return function(b) {
                            e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,j.notifyWith(k, e)
                        }
                    }

                    var b = i.call(arguments, 0),c = 0,d = b.length,e = new Array(d),g = d,h = d,j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),k = j.promise();
                    if (d > 1) {
                        for (; c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                        g || j.resolveWith(j, b)
                    } else j !== a && j.resolveWith(j, d ? [a] : []);
                    return k
                }}),f.support = function() {
            var b,d,e,g,h,i,j,k,l,m,n,o,p,q = c.createElement("div"),r = c.documentElement;
            q.setAttribute("className", "t"),q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d = q.getElementsByTagName("*"),e = q.getElementsByTagName("a")[0];
            if (!d || !d.length || !e)return{};
            g = c.createElement("select"),h = g.appendChild(c.createElement("option")),i = q.getElementsByTagName("input")[0],b = {leadingWhitespace:q.firstChild.nodeType === 3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href") === "/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value === "on",optSelected:h.selected,getSetAttribute:q.className !== "t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked = !0,b.noCloneChecked = i.cloneNode(!0).checked,g.disabled = !0,b.optDisabled = !h.disabled;
            try {
                delete q.test
            } catch(s) {
                b.deleteExpando = !1
            }
            !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }),q.cloneNode(!0).fireEvent("onclick")),i = c.createElement("input"),i.value = "t",i.setAttribute("type", "radio"),b.radioValue = i.value === "t",i.setAttribute("checked", "checked"),q.appendChild(i),k = c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked = i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML = "",a.getComputedStyle && (j = c.createElement("div"),j.style.width = "0",j.style.marginRight = "0",q.style.width = "2px",q.appendChild(j),b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {marginRight:0}).marginRight, 10) || 0) === 0);
            if (q.attachEvent)for (o in{submit:1,change:1,focusin:1})n = "on" + o,p = n in q,p || (q.setAttribute(n, "return;"),p = typeof q[n] == "function"),b[o + "Bubbles"] = p;
            return k.removeChild(q),k = g = h = j = q = i = null,f(function() {
                var a,d,e,g,h,i,j,k,m,n,o,r = c.getElementsByTagName("body")[0];
                if (!r)return;
                j = 1,k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m = "visibility:hidden;border:0;",n = "style='" + k + "border:5px solid #000;padding:0;'",o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",a = c.createElement("div"),a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px",r.insertBefore(a, r.firstChild),q = c.createElement("div"),a.appendChild(q),q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l = q.getElementsByTagName("td"),p = l[0].offsetHeight === 0,l[0].style.display = "",l[1].style.display = "none",b.reliableHiddenOffsets = p && l[0].offsetHeight === 0,q.innerHTML = "",q.style.width = q.style.paddingLeft = "1px",f.boxModel = b.boxModel = q.offsetWidth === 2,typeof q.style.zoom != "undefined" && (q.style.display = "inline",q.style.zoom = 1,b.inlineBlockNeedsLayout = q.offsetWidth === 2,q.style.display = "",q.innerHTML = "<div style='width:4px;'></div>",b.shrinkWrapBlocks = q.offsetWidth !== 2),q.style.cssText = k + m,q.innerHTML = o,d = q.firstChild,e = d.firstChild,h = d.nextSibling.firstChild.firstChild,i = {doesNotAddBorder:e.offsetTop !== 5,doesAddBorderForTableAndCells:h.offsetTop === 5},e.style.position = "fixed",e.style.top = "20px",i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15,e.style.position = e.style.top = "",d.style.overflow = "hidden",d.style.position = "relative",i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5,i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j,r.removeChild(a),q = a = null,f.extend(b, i)
            }),b
        }();
        var j = /^(?:\{.*\}|\[.*\])$/,k = /([A-Z])/g;
        f.extend({cache:{},uuid:0,expando:"jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a) {
                    return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando],!!a && !m(a)
                },data:function(a, c, d, e) {
                    if (!f.acceptData(a))return;
                    var g,h,i,j = f.expando,k = typeof c == "string",l = a.nodeType,m = l ? f.cache : a,n = l ? a[j] : a[j] && j,o = c === "events";
                    if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)return;
                    n || (l ? a[j] = n = ++f.uuid : n = j),m[n] || (m[n] = {},l || (m[n].toJSON = f.noop));
                    if (typeof c == "object" || typeof c == "function")e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                    return g = h = m[n],e || (h.data || (h.data = {}),h = h.data),d !== b && (h[f.camelCase(c)] = d),o && !h[c] ? g.events : (k ? (i = h[c],i == null && (i = h[f.camelCase(c)])) : i = h,i)
                },removeData:function(a, b, c) {
                    if (!f.acceptData(a))return;
                    var d,e,g,h = f.expando,i = a.nodeType,j = i ? f.cache : a,k = i ? a[h] : h;
                    if (!j[k])return;
                    if (b) {
                        d = c ? j[k] : j[k].data;
                        if (d) {
                            f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b),b in d ? b = [b] : b = b.split(" ")));
                            for (e = 0,g = b.length; e < g; e++)delete d[b[e]];
                            if (!(c ? m : f.isEmptyObject)(d))return
                        }
                    }
                    if (!c) {
                        delete j[k].data;
                        if (!m(j[k]))return
                    }
                    f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
                },_data:function(a, b, c) {
                    return f.data(a, b, c, !0)
                },acceptData:function(a) {
                    if (a.nodeName) {
                        var b = f.noData[a.nodeName.toLowerCase()];
                        if (b)return b !== !0 && a.getAttribute("classid") === b
                    }
                    return!0
                }}),f.fn.extend({data:function(a, c) {
                    var d,e,g,h = null;
                    if (typeof a == "undefined") {
                        if (this.length) {
                            h = f.data(this[0]);
                            if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                                e = this[0].attributes;
                                for (var i = 0,j = e.length; i < j; i++)g = e[i].name,g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)),l(this[0], g, h[g]));
                                f._data(this[0], "parsedAttrs", !0)
                            }
                        }
                        return h
                    }
                    return typeof a == "object" ? this.each(function() {
                        f.data(this, a)
                    }) : (d = a.split("."),d[1] = d[1] ? "." + d[1] : "",c === b ? (h = this.triggerHandler("getData" + d[1] + "!", [d[0]]),h === b && this.length && (h = f.data(this[0], a),h = l(this[0], a, h)),h === b && d[1] ? this.data(d[0]) : h) : this.each(function() {
                        var b = f(this),e = [d[0],c];
                        b.triggerHandler("setData" + d[1] + "!", e),f.data(this, a, c),b.triggerHandler("changeData" + d[1] + "!", e)
                    }))
                },removeData:function(a) {
                    return this.each(function() {
                        f.removeData(this, a)
                    })
                }}),f.extend({_mark:function(a, b) {
                    a && (b = (b || "fx") + "mark",f._data(a, b, (f._data(a, b) || 0) + 1))
                },_unmark:function(a, b, c) {
                    a !== !0 && (c = b,b = a,a = !1);
                    if (b) {
                        c = c || "fx";
                        var d = c + "mark",e = a ? 0 : (f._data(b, d) || 1) - 1;
                        e ? f._data(b, d, e) : (f.removeData(b, d, !0),n(b, c, "mark"))
                    }
                },queue:function(a, b, c) {
                    var d;
                    if (a)return b = (b || "fx") + "queue",d = f._data(a, b),c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)),d || []
                },dequeue:function(a, b) {
                    b = b || "fx";
                    var c = f.queue(a, b),d = c.shift(),e = {};
                    d === "inprogress" && (d = c.shift()),d && (b === "fx" && c.unshift("inprogress"),f._data(a, b + ".run", e),d.call(a, function() {
                        f.dequeue(a, b)
                    }, e)),c.length || (f.removeData(a, b + "queue " + b + ".run", !0),n(a, b, "queue"))
                }}),f.fn.extend({queue:function(a, c) {
                    return typeof a != "string" && (c = a,a = "fx"),c === b ? f.queue(this[0], a) : this.each(function() {
                        var b = f.queue(this, a, c);
                        a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
                    })
                },dequeue:function(a) {
                    return this.each(function() {
                        f.dequeue(this, a)
                    })
                },delay:function(a, b) {
                    return a = f.fx ? f.fx.speeds[a] || a : a,b = b || "fx",this.queue(b, function(b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function() {
                            clearTimeout(d)
                        }
                    })
                },clearQueue:function(a) {
                    return this.queue(a || "fx", [])
                },promise:function(a, c) {
                    function m() {
                        --h || d.resolveWith(e, [e])
                    }

                    typeof a != "string" && (c = a,a = b),a = a || "fx";
                    var d = f.Deferred(),e = this,g = e.length,h = 1,i = a + "defer",j = a + "queue",k = a + "mark",l;
                    while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))h++,l.add(m);
                    return m(),d.promise()
                }});
        var o = /[\n\t\r]/g,p = /\s+/,q = /\r/g,r = /^(?:button|input)$/i,s = /^(?:button|input|object|select|textarea)$/i,t = /^a(?:rea)?$/i,u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v = f.support.getSetAttribute,w,x,y;
        f.fn.extend({attr:function(a, b) {
                    return f.access(this, a, b, !0, f.attr)
                },removeAttr:function(a) {
                    return this.each(function() {
                        f.removeAttr(this, a)
                    })
                },prop:function(a, b) {
                    return f.access(this, a, b, !0, f.prop)
                },removeProp:function(a) {
                    return a = f.propFix[a] || a,this.each(function() {
                        try {
                            this[a] = b,delete this[a]
                        } catch(c) {
                        }
                    })
                },addClass:function(a) {
                    var b,c,d,e,g,h,i;
                    if (f.isFunction(a))return this.each(function(b) {
                        f(this).addClass(a.call(this, b, this.className))
                    });
                    if (a && typeof a == "string") {
                        b = a.split(p);
                        for (c = 0,d = this.length; c < d; c++) {
                            e = this[c];
                            if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                                g = " " + e.className + " ";
                                for (h = 0,i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                                e.className = f.trim(g)
                            }
                        }
                    }
                    return this
                },removeClass:function(a) {
                    var c,d,e,g,h,i,j;
                    if (f.isFunction(a))return this.each(function(b) {
                        f(this).removeClass(a.call(this, b, this.className))
                    });
                    if (a && typeof a == "string" || a === b) {
                        c = (a || "").split(p);
                        for (d = 0,e = this.length; d < e; d++) {
                            g = this[d];
                            if (g.nodeType === 1 && g.className)if (a) {
                                h = (" " + g.className + " ").replace(o, " ");
                                for (i = 0,j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                                g.className = f.trim(h)
                            } else g.className = ""
                        }
                    }
                    return this
                },toggleClass:function(a, b) {
                    var c = typeof a,d = typeof b == "boolean";
                    return f.isFunction(a) ? this.each(function(c) {
                        f(this).toggleClass(a.call(this, c, this.className, b), b)
                    }) : this.each(function() {
                        if (c === "string") {
                            var e,g = 0,h = f(this),i = b,j = a.split(p);
                            while (e = j[g++])i = d ? i : !h.hasClass(e),h[i ? "addClass" : "removeClass"](e)
                        } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className),this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    })
                },hasClass:function(a) {
                    var b = " " + a + " ",c = 0,d = this.length;
                    for (; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)return!0;
                    return!1
                },val:function(a) {
                    var c,d,e,g = this[0];
                    if (!arguments.length) {
                        if (g)return c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type],c && "get"in c && (d = c.get(g, "value")) !== b ? d : (d = g.value,typeof d == "string" ? d.replace(q, "") : d == null ? "" : d);
                        return
                    }
                    return e = f.isFunction(a),this.each(function(d) {
                        var g = f(this),h;
                        if (this.nodeType !== 1)return;
                        e ? h = a.call(this, d, g.val()) : h = a,h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                            return a == null ? "" : a + ""
                        })),c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                        if (!c || !("set"in c) || c.set(this, h, "value") === b)this.value = h
                    })
                }}),f.extend({valHooks:{option:{get:function(a) {
                    var b = a.attributes.value;
                    return!b || b.specified ? a.value : a.text
                }},select:{get:function(a) {
                    var b,c,d,e,g = a.selectedIndex,h = [],i = a.options,j = a.type === "select-one";
                    if (g < 0)return null;
                    c = j ? g : 0,d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j)return b;
                            h.push(b)
                        }
                    }
                    return j && !h.length && i.length ? f(i[g]).val() : h
                },set:function(a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),c.length || (a.selectedIndex = -1),c
                }}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a, c, d, e) {
                    var g,h,i,j = a.nodeType;
                    if (!a || j === 3 || j === 8 || j === 2)return;
                    if (e && c in f.attrFn)return f(a)[c](d);
                    if (typeof a.getAttribute == "undefined")return f.prop(a, c, d);
                    i = j !== 1 || !f.isXMLDoc(a),i && (c = c.toLowerCase(),h = f.attrHooks[c] || (u.test(c) ? x : w));
                    if (d !== b) {
                        if (d === null) {
                            f.removeAttr(a, c);
                            return
                        }
                        return h && "set"in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d),d)
                    }
                    return h && "get"in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c),g === null ? b : g)
                },removeAttr:function(a, b) {
                    var c,d,e,g,h = 0;
                    if (b && a.nodeType === 1) {
                        d = b.toLowerCase().split(p),g = d.length;
                        for (; h < g; h++)e = d[h],e && (c = f.propFix[e] || e,f.attr(a, e, ""),a.removeAttribute(v ? e : c),u.test(e) && c in a && (a[c] = !1))
                    }
                },attrHooks:{type:{set:function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),c && (a.value = c),b
                    }
                }},value:{get:function(a, b) {
                    return w && f.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
                },set:function(a, b, c) {
                    if (w && f.nodeName(a, "button"))return w.set(a, b, c);
                    a.value = b
                }}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a, c, d) {
                    var e,g,h,i = a.nodeType;
                    if (!a || i === 3 || i === 8 || i === 2)return;
                    return h = i !== 1 || !f.isXMLDoc(a),h && (c = f.propFix[c] || c,g = f.propHooks[c]),d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
                },propHooks:{tabIndex:{get:function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }}}}),f.attrHooks.tabindex = f.propHooks.tabIndex,x = {get:function(a, c) {
            var d,e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },set:function(a, b, c) {
            var d;
            return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,d in a && (a[d] = !0),a.setAttribute(c, c.toLowerCase())),c
        }},v || (y = {name:!0,id:!0},w = f.valHooks.button = {get:function(a, c) {
            var d;
            return d = a.getAttributeNode(c),d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },set:function(a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d),a.setAttributeNode(e)),e.nodeValue = b + ""
        }},f.attrHooks.tabindex.set = w.set,f.each(["width","height"], function(a, b) {
            f.attrHooks[b] = f.extend(f.attrHooks[b], {set:function(a, c) {
                        if (c === "")return a.setAttribute(b, "auto"),c
                    }})
        }),f.attrHooks.contenteditable = {get:w.get,set:function(a, b, c) {
            b === "" && (b = "false"),w.set(a, b, c)
        }}),f.support.hrefNormalized || f.each(["href","src","width","height"], function(a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {get:function(a) {
                        var d = a.getAttribute(c, 2);
                        return d === null ? b : d
                    }})
        }),f.support.style || (f.attrHooks.style = {get:function(a) {
            return a.style.cssText.toLowerCase() || b
        },set:function(a, b) {
            return a.style.cssText = "" + b
        }}),f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get:function(a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex,b.parentNode && b.parentNode.selectedIndex),null
                }})),f.support.enctype || (f.propFix.enctype = "encoding"),f.support.checkOn || f.each(["radio","checkbox"], function() {
            f.valHooks[this] = {get:function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }}
        }),f.each(["radio","checkbox"], function() {
            f.valHooks[this] = f.extend(f.valHooks[this], {set:function(a, b) {
                        if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
                    }})
        });
        var z = /^(?:textarea|input|select)$/i,A = /^([^\.]*)?(?:\.(.+))?$/,B = /\bhover(\.\S+)?\b/,C = /^key/,D = /^(?:mouse|contextmenu)|click/,E = /^(?:focusinfocus|focusoutblur)$/,F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G = function(a) {
            var b = F.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(),b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")),b
        },H = function(a, b) {
            var c = a.attributes || {};
            return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
        f.event = {add:function(a, c, d, e, g) {
            var h,i,j,k,l,m,n,o,p,q,r,s;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))return;
            d.handler && (p = d,d = p.handler),d.guid || (d.guid = f.guid++),j = h.events,j || (h.events = j = {}),i = h.handle,i || (h.handle = i = function(a) {
                return typeof f == "undefined" || !!a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
            },i.elem = a),c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [],m = l[1],n = (l[2] || "").split(".").sort(),s = f.event.special[m] || {},m = (g ? s.delegateType : s.bindType) || m,s = f.event.special[m] || {},o = f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")}, p),r = j[m];
                if (!r) {
                    r = j[m] = [],r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                }
                s.add && (s.add.call(a, o),o.handler.guid || (o.handler.guid = d.guid)),g ? r.splice(r.delegateCount++, 0, o) : r.push(o),f.event.global[m] = !0
            }
            a = null
        },global:{},remove:function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;
            if (!g || !(o = g.events))return;
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [],j = k = i[1],l = i[2];
                if (!j) {
                    for (j in o)f.event.remove(a, j + b[h], c, d, !0);
                    continue
                }
                p = f.event.special[j] || {},j = (d ? p.delegateType : p.bindType) || j,r = o[j] || [],m = r.length,l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++)s = r[n],(e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),s.selector && r.delegateCount--,p.remove && p.remove.call(a, s));
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle,q && (q.elem = null),f.removeData(a, ["events","handle"], !0))
        },customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,i = [],j,k,l,m,n,o,p,q,r,s;
                if (E.test(h + f.event.triggered))return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1),k = !0),h.indexOf(".") >= 0 && (i = h.split("."),h = i.shift(),i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h),c.type = h,c.isTrigger = !0,c.exclusive = k,c.namespace = i.join("."),c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,c.target || (c.target = e),d = d != null ? f.makeArray(d) : [],d.unshift(c),p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)return;
                r = [
                    [e,p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,m = E.test(s + h) ? e : e.parentNode,n = null;
                    for (; m; m = m.parentNode)r.push([m,s]),n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a,s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0],c.type = r[l][1],q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),q && q.apply(m, d),q = o && m[o],q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                return c.type = h,!g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o],n && (e[o] = null),f.event.triggered = h,e[h](),f.event.triggered = b,n && (e[o] = n)),c.result
            }
            return
        },dispatch:function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],e = d.delegateCount,g = [].slice.call(arguments, 0),h = !c.exclusive && !c.namespace,i = [],j,k,l,m,n,o,p,q,r,s,t;
            g[0] = c,c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f(this),m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {},q = [],m[0] = l;
                    for (j = 0; j < e; j++)r = d[j],s = r.selector,o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),o[s] && q.push(r);
                    q.length && i.push({elem:l,matches:q})
                }
            }
            d.length > e && i.push({elem:this,matches:d.slice(e)});
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j],c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace))c.data = r.data,c.handleObj = r,n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g),n !== b && (c.result = n,n === !1 && (c.preventDefault(),c.stopPropagation()))
                }
            }
            return c.result
        },props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a, b) {
            return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode),a
        }},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a, d) {
            var e,f,g,h = d.button,i = d.fromElement;
            return a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c,f = e.documentElement,g = e.body,a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),!a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),!a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),a
        }},fix:function(a) {
            if (a[f.expando])return a;
            var d,e,g = a,h = f.event.fixHooks[a.type] || {},i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;)e = i[--d],a[e] = g[e];
            return a.target || (a.target = g.srcElement || c),a.target.nodeType === 3 && (a.target = a.target.parentNode),a.metaKey === b && (a.metaKey = a.ctrlKey),h.filter ? h.filter(a, g) : a
        },special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a, b, c) {
            f.isWindow(this) && (this.onbeforeunload = c)
        },teardown:function(a, b) {
            this.onbeforeunload === b && (this.onbeforeunload = null)
        }}},simulate:function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {type:a,isSimulated:!0,originalEvent:{}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),e.isDefaultPrevented() && c.preventDefault()
        }},f.event.handle = f.event.dispatch,f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        },f.Event = function(a, b) {
            if (!(this instanceof f.Event))return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a,this.type = a.type,this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,b && f.extend(this, b),this.timeStamp = a && a.timeStamp || f.now(),this[f.expando] = !0
        },f.Event.prototype = {preventDefault:function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            if (!a)return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },stopPropagation:function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            if (!a)return;
            a.stopPropagation && a.stopPropagation(),a.cancelBubble = !0
        },stopImmediatePropagation:function() {
            this.isImmediatePropagationStopped = K,this.stopPropagation()
        },isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"}, function(a, b) {
            f.event.special[a] = {delegateType:b,bindType:b,handle:function(a) {
                var c = this,d = a.relatedTarget,e = a.handleObj,g = e.selector,h;
                if (!d || d !== c && !f.contains(c, d))a.type = e.origType,h = e.handler.apply(this, arguments),a.type = b;
                return h
            }}
        }),f.support.submitBubbles || (f.event.special.submit = {setup:function() {
            if (f.nodeName(this, "form"))return!1;
            f.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                }),d._submit_attached = !0)
            })
        },teardown:function() {
            if (f.nodeName(this, "form"))return!1;
            f.event.remove(this, "._submit")
        }}),f.support.changeBubbles || (f.event.special.change = {setup:function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")f.event.add(this, "propertychange._change", function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),f.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1,f.event.simulate("change", this, a, !0))
                });
                return!1
            }
            f.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }),b._change_attached = !0)
            })
        },handle:function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this, arguments)
        },teardown:function() {
            return f.event.remove(this, "._change"),z.test(this.nodeName)
        }}),f.support.focusinBubbles || f.each({focus:"focusin",blur:"focusout"}, function(a, b) {
            var d = 0,e = function(a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
            f.event.special[b] = {setup:function() {
                d++ === 0 && c.addEventListener(a, e, !0)
            },teardown:function() {
                --d === 0 && c.removeEventListener(a, e, !0)
            }}
        }),f.fn.extend({on:function(a, c, d, e, g) {
                    var h,i;
                    if (typeof a == "object") {
                        typeof c != "string" && (d = c,c = b);
                        for (i in a)this.on(i, c, d, a[i], g);
                        return this
                    }
                    d == null && e == null ? (e = c,d = c = b) : e == null && (typeof c == "string" ? (e = d,d = b) : (e = d,d = c,c = b));
                    if (e === !1)e = J; else if (!e)return this;
                    return g === 1 && (h = e,e = function(a) {
                        return f().off(a),h.apply(this, arguments)
                    },e.guid = h.guid || (h.guid = f.guid++)),this.each(function() {
                        f.event.add(this, a, e, d, c)
                    })
                },one:function(a, b, c, d) {
                    return this.on.call(this, a, b, c, d, 1)
                },off:function(a, c, d) {
                    if (a && a.preventDefault && a.handleObj) {
                        var e = a.handleObj;
                        return f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler),this
                    }
                    if (typeof a == "object") {
                        for (var g in a)this.off(g, c, a[g]);
                        return this
                    }
                    if (c === !1 || typeof c == "function")d = c,c = b;
                    return d === !1 && (d = J),this.each(function() {
                        f.event.remove(this, a, d, c)
                    })
                },bind:function(a, b, c) {
                    return this.on(a, null, b, c)
                },unbind:function(a, b) {
                    return this.off(a, null, b)
                },live:function(a, b, c) {
                    return f(this.context).on(a, this.selector, b, c),this
                },die:function(a, b) {
                    return f(this.context).off(a, this.selector || "**", b),this
                },delegate:function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },undelegate:function(a, b, c) {
                    return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
                },trigger:function(a, b) {
                    return this.each(function() {
                        f.event.trigger(a, b, this)
                    })
                },triggerHandler:function(a, b) {
                    if (this[0])return f.event.trigger(a, b, this[0], !0)
                },toggle:function(a) {
                    var b = arguments,c = a.guid || f.guid++,d = 0,e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        return f._data(this, "lastToggle" + a.guid, e + 1),c.preventDefault(),b[e].apply(this, arguments) || !1
                    };
                    e.guid = c;
                    while (d < b.length)b[d++].guid = c;
                    return this.click(e)
                },hover:function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                return c == null && (c = a,a = null),arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            },f.attrFn && (f.attrFn[b] = !0),C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        });
        /*!
         * Sizzle CSS Selector Engine
         *  Copyright 2011, The Dojo Foundation
         *  Released under the MIT, BSD, and GPL Licenses.
         *  More information: http://sizzlejs.com/
         */
        (function() {
            function w(a, b, c, e, f, g) {
                for (var h = 0,i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c,j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function x(a, b, c, e, f, g) {
                for (var h = 0,i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c,j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d = "sizcache" + (Math.random() + "").replace(".", ""),e = 0,g = Object.prototype.toString,h = !1,i = !0,j = /\\/g,k = /\r\n/g,l = /\W/;
            [0,0].sort(function() {
                return i = !1,0
            });
            var m = function(b, d, e, f) {
                e = e || [],d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9)return[];
                if (!b || typeof b != "string")return e;
                var i,j,k,l,n,q,r,t,u = !0,v = m.isXML(d),w = [],x = b;
                do{
                    a.exec(""),i = a.exec(x);
                    if (i) {
                        x = i[3],w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length)b = w.shift(),o.relative[b] && (b += w.shift()),j = y(b, j, f)
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {expr:w.pop(),set:s(f)} : m.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v),j = n.expr ? m.filter(n.expr, n.set) : n.set,w.length > 0 ? k = s(j) : u = !1;
                        while (w.length)q = w.pop(),r = q,o.relative[q] ? r = w.pop() : q = "",r == null && (r = d),o.relative[q](k, r, v)
                    } else k = w = []
                }
                k || (k = j),k || m.error(q || b);
                if (g.call(k) === "[object Array]")if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1)for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
                return l && (m(l, h, e, f),m.uniqueSort(e)),e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i,a.sort(u);
                    if (h)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            },m.matches = function(a, b) {
                return m(a, null, null, b)
            },m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            },m.find = function(a, b, c) {
                var d,e,f,g,h,i;
                if (!a)return[];
                for (e = 0,f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1],g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""),d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []),{set:d,expr:a}
            },m.filter = function(a, c, d, e) {
                var f,g,h,i,j,k,l,n,p,q = a,r = [],s = c,t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h],l = f[1],g = !1,f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\")continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f)g = i = !0; else if (f === !0)continue
                        }
                        if (f)for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s),p = e ^ i,d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),g = !0));
                        if (i !== b) {
                            d || (s = r),a = a.replace(o.match[h], "");
                            if (!g)return[];
                            break
                        }
                    }
                    if (a === q) {
                        if (g != null)break;
                        m.error(a)
                    }
                    q = a
                }
                return s
            },m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                var b,c,d = a.nodeType,e = "";
                if (d) {
                    if (d === 1 || d === 9) {
                        if (typeof a.textContent == "string")return a.textContent;
                        if (typeof a.innerText == "string")return a.innerText.replace(k, "");
                        for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
                    } else if (d === 3 || d === 4)return a.nodeValue
                } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c));
                return e
            },o = m.selectors = {order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a) {
                return a.getAttribute("href")
            },type:function(a) {
                return a.getAttribute("type")
            }},relative:{"+":function(a, b) {
                var c = typeof b == "string",d = c && !l.test(b),e = c && !d;
                d && (b = b.toLowerCase());
                for (var f = 0,g = a.length,h; f < g; f++)if (h = a[f]) {
                    while ((h = h.previousSibling) && h.nodeType !== 1);
                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                }
                e && m.filter(b, a, !0)
            },">":function(a, b) {
                var c,d = typeof b == "string",e = 0,f = a.length;
                if (d && !l.test(b)) {
                    b = b.toLowerCase();
                    for (; e < f; e++) {
                        c = a[e];
                        if (c) {
                            var g = c.parentNode;
                            a[e] = g.nodeName.toLowerCase() === b ? g : !1
                        }
                    }
                } else {
                    for (; e < f; e++)c = a[e],c && (a[e] = d ? c.parentNode : c.parentNode === b);
                    d && m.filter(b, a, !0)
                }
            },"":function(a, b, c) {
                var d,f = e++,g = x;
                typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),d = b,g = w),g("parentNode", b, f, a, d, c)
            },"~":function(a, b, c) {
                var d,f = e++,g = x;
                typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),d = b,g = w),g("previousSibling", b, f, a, d, c)
            }},find:{ID:function(a, b, c) {
                if (typeof b.getElementById != "undefined" && !c) {
                    var d = b.getElementById(a[1]);
                    return d && d.parentNode ? [d] : []
                }
            },NAME:function(a, b) {
                if (typeof b.getElementsByName != "undefined") {
                    var c = [],d = b.getElementsByName(a[1]);
                    for (var e = 0,f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                    return c.length === 0 ? null : c
                }
            },TAG:function(a, b) {
                if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
            }},preFilter:{CLASS:function(a, b, c, d, e, f) {
                a = " " + a[1].replace(j, "") + " ";
                if (f)return a;
                for (var g = 0,h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                return!1
            },ID:function(a) {
                return a[1].replace(j, "")
            },TAG:function(a, b) {
                return a[1].replace(j, "").toLowerCase()
            },CHILD:function(a) {
                if (a[1] === "nth") {
                    a[2] || m.error(a[0]),a[2] = a[2].replace(/^\+|\s*/g, "");
                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                    a[2] = b[1] + (b[2] || 1) - 0,a[3] = b[3] - 0
                } else a[2] && m.error(a[0]);
                return a[0] = e++,a
            },ATTR:function(a, b, c, d, e, f) {
                var g = a[1] = a[1].replace(j, "");
                return!f && o.attrMap[g] && (a[1] = o.attrMap[g]),a[4] = (a[4] || a[5] || "").replace(j, ""),a[2] === "~=" && (a[4] = " " + a[4] + " "),a
            },PSEUDO:function(b, c, d, e, f) {
                if (b[1] === "not") {
                    if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        return d || e.push.apply(e, g),!1
                    }
                    b[3] = m(b[3], null, null, c)
                } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))return!0;
                return b
            },POS:function(a) {
                return a.unshift(!0),a
            }},filters:{enabled:function(a) {
                return a.disabled === !1 && a.type !== "hidden"
            },disabled:function(a) {
                return a.disabled === !0
            },checked:function(a) {
                return a.checked === !0
            },selected:function(a) {
                return a.parentNode && a.parentNode.selectedIndex,a.selected === !0
            },parent:function(a) {
                return!!a.firstChild
            },empty:function(a) {
                return!a.firstChild
            },has:function(a, b, c) {
                return!!m(c[3], a).length
            },header:function(a) {
                return/h\d/i.test(a.nodeName)
            },text:function(a) {
                var b = a.getAttribute("type"),c = a.type;
                return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
            },radio:function(a) {
                return a.nodeName.toLowerCase() === "input" && "radio" === a.type
            },checkbox:function(a) {
                return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
            },file:function(a) {
                return a.nodeName.toLowerCase() === "input" && "file" === a.type
            },password:function(a) {
                return a.nodeName.toLowerCase() === "input" && "password" === a.type
            },submit:function(a) {
                var b = a.nodeName.toLowerCase();
                return(b === "input" || b === "button") && "submit" === a.type
            },image:function(a) {
                return a.nodeName.toLowerCase() === "input" && "image" === a.type
            },reset:function(a) {
                var b = a.nodeName.toLowerCase();
                return(b === "input" || b === "button") && "reset" === a.type
            },button:function(a) {
                var b = a.nodeName.toLowerCase();
                return b === "input" && "button" === a.type || b === "button"
            },input:function(a) {
                return/input|select|textarea|button/i.test(a.nodeName)
            },focus:function(a) {
                return a === a.ownerDocument.activeElement
            }},setFilters:{first:function(a, b) {
                return b === 0
            },last:function(a, b, c, d) {
                return b === d.length - 1
            },even:function(a, b) {
                return b % 2 === 0
            },odd:function(a, b) {
                return b % 2 === 1
            },lt:function(a, b, c) {
                return b < c[3] - 0
            },gt:function(a, b, c) {
                return b > c[3] - 0
            },nth:function(a, b, c) {
                return c[3] - 0 === b
            },eq:function(a, b, c) {
                return c[3] - 0 === b
            }},filter:{PSEUDO:function(a, b, c, d) {
                var e = b[1],f = o.filters[e];
                if (f)return f(a, c, b, d);
                if (e === "contains")return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                if (e === "not") {
                    var g = b[3];
                    for (var h = 0,i = g.length; h < i; h++)if (g[h] === a)return!1;
                    return!0
                }
                m.error(e)
            },CHILD:function(a, b) {
                var c,e,f,g,h,i,j,k = b[1],l = a;
                switch (k) {
                    case"only":
                    case"first":
                        while (l = l.previousSibling)if (l.nodeType === 1)return!1;
                        if (k === "first")return!0;
                        l = a;
                    case"last":
                        while (l = l.nextSibling)if (l.nodeType === 1)return!1;
                        return!0;
                    case"nth":
                        c = b[2],e = b[3];
                        if (c === 1 && e === 0)return!0;
                        f = b[0],g = a.parentNode;
                        if (g && (g[d] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d] = f
                        }
                        return j = a.nodeIndex - e,c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                }
            },ID:function(a, b) {
                return a.nodeType === 1 && a.getAttribute("id") === b
            },TAG:function(a, b) {
                return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
            },CLASS:function(a, b) {
                return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
            },ATTR:function(a, b) {
                var c = b[1],d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),e = d + "",f = b[2],g = b[4];
                return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
            },POS:function(a, b, c, d) {
                var e = b[2],f = o.setFilters[e];
                if (f)return f(a, c, b, d)
            }}},p = o.match.POS,q = function(a, b) {
                return"\\" + (b - 0 + 1)
            };
            for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                return a = Array.prototype.slice.call(a, 0),b ? (b.push.apply(b, a),b) : a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch(t) {
                s = function(a, b) {
                    var c = 0,d = b || [];
                    if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var e = a.length; c < e; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                    return d
                }
            }
            var u,v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                return a === b ? (h = !0,0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
            } : (u = function(a, b) {
                if (a === b)return h = !0,0;
                if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
                var c,d,e = [],f = [],g = a.parentNode,i = b.parentNode,j = g;
                if (g === i)return v(a, b);
                if (!g)return-1;
                if (!i)return 1;
                while (j)e.unshift(j),j = j.parentNode;
                j = i;
                while (j)f.unshift(j),j = j.parentNode;
                c = e.length,d = f.length;
                for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return v(e[k], f[k]);
                return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
            },v = function(a, b, c) {
                if (a === b) {
                    return c;
                    var d
                }
                while (d) {
                    if (d === b)return-1;
                    d = d.nextSibling
                }
                return 1
            }),function() {
                var a = c.createElement("div"),d = "script" + (new Date).getTime(),e = c.documentElement;
                a.innerHTML = "<a name='" + d + "'/>",e.insertBefore(a, e.firstChild),c.getElementById(d) && (o.find.ID = function(a, c, d) {
                    if (typeof c.getElementById != "undefined" && !d) {
                        var e = c.getElementById(a[1]);
                        return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                    }
                },o.filter.ID = function(a, b) {
                    var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && c && c.nodeValue === b
                }),e.removeChild(a),e = a = null
            }(),function() {
                var a = c.createElement("div");
                a.appendChild(c.createComment("")),a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                    var c = b.getElementsByTagName(a[1]);
                    if (a[1] === "*") {
                        var d = [];
                        for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                        c = d
                    }
                    return c
                }),a.innerHTML = "<a href='#'></a>",a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                }),a = null
            }(),c.querySelectorAll && function() {
                var a = m,b = c.createElement("div"),d = "__sizzle__";
                b.innerHTML = "<p class='TEST'></p>";
                if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0)return;
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)return s([], f);
                                if (i.id === h[3])return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch(j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,l = e.getAttribute("id"),n = l || d,p = e.parentNode,q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),q && p && (e = e.parentNode);
                            try {
                                if (!q || p)return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch(r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a)m[e] = a[e];
                b = null
            }(),function() {
                var a = c.documentElement,b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var d = !b.call(c.createElement("div"), "div"),e = !1;
                    try {
                        b.call(c.documentElement, "[test!='']:sizzle")
                    } catch(f) {
                        e = !0
                    }
                    m.matchesSelector = function(a, c) {
                        c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!m.isXML(a))try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11)return f
                            }
                        } catch(g) {
                        }
                        return m(c, null, null, [a]).length > 0
                    }
                }
            }(),function() {
                var a = c.createElement("div");
                a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0)return;
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)return;
                o.order.splice(1, 0, "CLASS"),o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
                },a = null
            }(),c.documentElement.contains ? m.contains = function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                return!!(a.compareDocumentPosition(b) & 16)
            } : m.contains = function() {
                return!1
            },m.isXML = function(a) {
                var b = (a ? a.ownerDocument || a : 0).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            };
            var y = function(a, b, c) {
                var d,e = [],f = "",g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a))f += d[0],a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0,i = g.length; h < i; h++)m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr,m.selectors.attrMap = {},f.find = m,f.expr = m.selectors,f.expr[":"] = f.expr.filters,f.unique = m.uniqueSort,f.text = m.getText,f.isXMLDoc = m.isXML,f.contains = m.contains
        })();
        var L = /Until$/,M = /^(?:parents|prevUntil|prevAll)/,N = /,/,O = /^.[^:#\[\.,]*$/,P = Array.prototype.slice,Q = f.expr.match.POS,R = {children:!0,contents:!0,next:!0,prev:!0};
        f.fn.extend({find:function(a) {
                    var b = this,c,d;
                    if (typeof a != "string")return f(a).filter(function() {
                        for (c = 0,d = b.length; c < d; c++)if (f.contains(b[c], this))return!0
                    });
                    var e = this.pushStack("", "find", a),g,h,i;
                    for (c = 0,d = this.length; c < d; c++) {
                        g = e.length,f.find(a, this[c], e);
                        if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                            e.splice(h--, 1);
                            break
                        }
                    }
                    return e
                },has:function(a) {
                    var b = f(a);
                    return this.filter(function() {
                        for (var a = 0,c = b.length; a < c; a++)if (f.contains(this, b[a]))return!0
                    })
                },not:function(a) {
                    return this.pushStack(T(this, a, !1), "not", a)
                },filter:function(a) {
                    return this.pushStack(T(this, a, !0), "filter", a)
                },is:function(a) {
                    return!!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
                },closest:function(a, b) {
                    var c = [],d,e,g = this[0];
                    if (f.isArray(a)) {
                        var h = 1;
                        while (g && g.ownerDocument && g !== b) {
                            for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector:a[d],elem:g,level:h});
                            g = g.parentNode,h++
                        }
                        return c
                    }
                    var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
                    for (d = 0,e = this.length; d < e; d++) {
                        g = this[d];
                        while (g) {
                            if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                                c.push(g);
                                break
                            }
                            g = g.parentNode;
                            if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
                        }
                    }
                    return c = c.length > 1 ? f.unique(c) : c,this.pushStack(c, "closest", a)
                },index:function(a) {
                    return a ? typeof a == "string" ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
                },add:function(a, b) {
                    var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),d = f.merge(this.get(), c);
                    return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
                },andSelf:function() {
                    return this.add(this.prevObject)
                }}),f.each({parent:function(a) {
                    var b = a.parentNode;
                    return b && b.nodeType !== 11 ? b : null
                },parents:function(a) {
                    return f.dir(a, "parentNode")
                },parentsUntil:function(a, b, c) {
                    return f.dir(a, "parentNode", c)
                },next:function(a) {
                    return f.nth(a, 2, "nextSibling")
                },prev:function(a) {
                    return f.nth(a, 2, "previousSibling")
                },nextAll:function(a) {
                    return f.dir(a, "nextSibling")
                },prevAll:function(a) {
                    return f.dir(a, "previousSibling")
                },nextUntil:function(a, b, c) {
                    return f.dir(a, "nextSibling", c)
                },prevUntil:function(a, b, c) {
                    return f.dir(a, "previousSibling", c)
                },siblings:function(a) {
                    return f.sibling(a.parentNode.firstChild, a)
                },children:function(a) {
                    return f.sibling(a.firstChild)
                },contents:function(a) {
                    return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
                }}, function(a, b) {
            f.fn[a] = function(c, d) {
                var e = f.map(this, b, c);
                return L.test(a) || (d = c),d && typeof d == "string" && (e = f.filter(d, e)),e = this.length > 1 && !R[a] ? f.unique(e) : e,(this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()),this.pushStack(e, a, P.call(arguments).join(","))
            }
        }),f.extend({filter:function(a, b, c) {
                    return c && (a = ":not(" + a + ")"),b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
                },dir:function(a, c, d) {
                    var e = [],g = a[c];
                    while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g),g = g[c];
                    return e
                },nth:function(a, b, c, d) {
                    b = b || 1;
                    var e = 0;
                    for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
                    return a
                },sibling:function(a, b) {
                    var c = [];
                    for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
                    return c
                }});
        var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W = / jQuery\d+="(?:\d+|null)"/g,X = /^\s+/,Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z = /<([\w:]+)/,ab = /<tbody/i,bb = /<|&#?\w+;/,cb = /<(?:script|style)/i,db = /<(?:script|object|embed|option|style)/i,eb = new RegExp("<(?:" + V + ")", "i"),fb = /checked\s*(?:[^=]|=\s*.checked.)/i,gb = /\/(java|ecma)script/i,hb = /^\s*<!(?:\[CDATA\[|\-\-)/,ib = {option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},jb = U(c);
        ib.optgroup = ib.option,ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead,ib.th = ib.td,f.support.htmlSerialize || (ib._default = [1,"div<div>","</div>"]),f.fn.extend({text:function(a) {
                    return f.isFunction(a) ? this.each(function(b) {
                        var c = f(this);
                        c.text(a.call(this, b, c.text()))
                    }) : typeof a != "object" && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) : f.text(this)
                },wrapAll:function(a) {
                    if (f.isFunction(a))return this.each(function(b) {
                        f(this).wrapAll(a.call(this, b))
                    });
                    if (this[0]) {
                        var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]),b.map(
                                function() {
                                    var a = this;
                                    while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                                    return a
                                }).append(this)
                    }
                    return this
                },wrapInner:function(a) {
                    return f.isFunction(a) ? this.each(function(b) {
                        f(this).wrapInner(a.call(this, b))
                    }) : this.each(function() {
                        var b = f(this),c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },wrap:function(a) {
                    var b = f.isFunction(a);
                    return this.each(function(c) {
                        f(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },unwrap:function() {
                    return this.parent().each(
                            function() {
                                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                            }).end()
                },append:function() {
                    return this.domManip(arguments, !0, function(a) {
                        this.nodeType === 1 && this.appendChild(a)
                    })
                },prepend:function() {
                    return this.domManip(arguments, !0, function(a) {
                        this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                    })
                },before:function() {
                    if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this)
                    });
                    if (arguments.length) {
                        var a = f.clean(arguments);
                        return a.push.apply(a, this.toArray()),this.pushStack(a, "before", arguments)
                    }
                },after:function() {
                    if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                    if (arguments.length) {
                        var a = this.pushStack(this, "after", arguments);
                        return a.push.apply(a, f.clean(arguments)),a
                    }
                },remove:function(a, b) {
                    for (var c = 0,d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode && d.parentNode.removeChild(d);
                    return this
                },empty:function() {
                    for (var a = 0,b; (b = this[a]) != null; a++) {
                        b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                        while (b.firstChild)b.removeChild(b.firstChild)
                    }
                    return this
                },clone:function(a, b) {
                    return a = a == null ? !1 : a,b = b == null ? a : b,this.map(function() {
                        return f.clone(this, a, b)
                    })
                },html:function(a) {
                    if (a === b)return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
                    if (typeof a == "string" && !cb.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !ib[(Z.exec(a) || ["",""])[1].toLowerCase()]) {
                        a = a.replace(Y, "<$1></$2>");
                        try {
                            for (var c = 0,d = this.length; c < d; c++)this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML = a)
                        } catch(e) {
                            this.empty().append(a)
                        }
                    } else f.isFunction(a) ? this.each(function(b) {
                        var c = f(this);
                        c.html(a.call(this, b, c.html()))
                    }) : this.empty().append(a);
                    return this
                },replaceWith:function(a) {
                    return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function(b) {
                        var c = f(this),d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    }) : (typeof a != "string" && (a = f(a).detach()),this.each(function() {
                        var b = this.nextSibling,c = this.parentNode;
                        f(this).remove(),b ? f(b).before(a) : f(c).append(a)
                    })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
                },detach:function(a) {
                    return this.remove(a, !0)
                },domManip:function(a, c, d) {
                    var e,g,h,i,j = a[0],k = [];
                    if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && fb.test(j))return this.each(function() {
                        f(this).domManip(a, c, d, !0)
                    });
                    if (f.isFunction(j))return this.each(function(e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() : b),g.domManip(a, c, d)
                    });
                    if (this[0]) {
                        i = j && j.parentNode,f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment:i} : e = f.buildFragment(a, this, k),h = e.fragment,h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                        if (g) {
                            c = c && f.nodeName(g, "tr");
                            for (var l = 0,m = this.length,n = m - 1; l < m; l++)d.call(c ? kb(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                        }
                        k.length && f.each(k, rb)
                    }
                    return this
                }}),f.buildFragment = function(a, b, d) {
            var e,g,h,i,j = a[0];
            return b && b[0] && (i = b[0].ownerDocument || b[0]),i.createDocumentFragment || (i = c),a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !db.test(j) && (f.support.checkClone || !fb.test(j)) && (f.support.html5Clone || !eb.test(j)) && (g = !0,h = f.fragments[j],h && h !== 1 && (e = h)),e || (e = i.createDocumentFragment(),f.clean(a, i, e, d)),g && (f.fragments[j] = h ? e : 1),{fragment:e,cacheable:g}
        },f.fragments = {},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"}, function(a, b) {
            f.fn[a] = function(c) {
                var d = [],e = f(c),g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1)return e[b](this[0]),this;
                for (var h = 0,i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j),d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),f.extend({clone:function(a, b, c) {
                    var d,e,g,h = f.support.html5Clone || !eb.test("<" + a.nodeName) ? a.cloneNode(!0) : qb(a);
                    if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                        mb(a, h),d = nb(a),e = nb(h);
                        for (g = 0; d[g]; ++g)e[g] && mb(d[g], e[g])
                    }
                    if (b) {
                        lb(a, h);
                        if (c) {
                            d = nb(a),e = nb(h);
                            for (g = 0; d[g]; ++g)lb(d[g], e[g])
                        }
                    }
                    return d = e = null,h
                },clean:function(a, b, d, e) {
                    var g;
                    b = b || c,typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                    var h = [],i;
                    for (var j = 0,k; (k = a[j]) != null; j++) {
                        typeof k == "number" && (k += "");
                        if (!k)continue;
                        if (typeof k == "string")if (!bb.test(k))k = b.createTextNode(k); else {
                            k = k.replace(Y, "<$1></$2>");
                            var l = (Z.exec(k) || ["",""])[1].toLowerCase(),m = ib[l] || ib._default,n = m[0],o = b.createElement("div");
                            b === c ? jb.appendChild(o) : U(b).appendChild(o),o.innerHTML = m[1] + k + m[2];
                            while (n--)o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = ab.test(k),q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                                for (i = q.length - 1; i >= 0; --i)f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                            !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),k = o.childNodes
                        }
                        var r;
                        if (!f.support.appendChecked)if (k[0] && typeof (r = k.length) == "number")for (i = 0; i < r; i++)pb(k[i]); else pb(k);
                        k.nodeType ? h.push(k) : h = f.merge(h, k)
                    }
                    if (d) {
                        g = function(a) {
                            return!a.type || gb.test(a.type)
                        };
                        for (j = 0; h[j]; j++)if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]); else {
                            if (h[j].nodeType === 1) {
                                var s = f.grep(h[j].getElementsByTagName("script"), g);
                                h.splice.apply(h, [j + 1,0].concat(s))
                            }
                            d.appendChild(h[j])
                        }
                    }
                    return h
                },cleanData:function(a) {
                    var b,c,d = f.cache,e = f.event.special,g = f.support.deleteExpando;
                    for (var h = 0,i; (i = a[h]) != null; h++) {
                        if (i.nodeName && f.noData[i.nodeName.toLowerCase()])continue;
                        c = i[f.expando];
                        if (c) {
                            b = d[c];
                            if (b && b.events) {
                                for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                                b.handle && (b.handle.elem = null)
                            }
                            g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),delete d[c]
                        }
                    }
                }});
        var sb = /alpha\([^)]*\)/i,tb = /opacity=([^)]*)/,ub = /([A-Z]|^ms)/g,vb = /^-?\d+(?:px)?$/i,wb = /^-?\d/,xb = /^([\-+])=([\-+.\de]+)/,yb = {position:"absolute",visibility:"hidden",display:"block"},zb = ["Left","Right"],Ab = ["Top","Bottom"],Bb,Cb,Db;
        f.fn.css = function(a, c) {
            return arguments.length === 2 && c === b ? this : f.access(this, a, c, !0, function(a, c, d) {
                return d !== b ? f.style(a, c, d) : f.css(a, c)
            })
        },f.extend({cssHooks:{opacity:{get:function(a, b) {
                    if (b) {
                        var c = Bb(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat ? "cssFloat" : "styleFloat"},style:function(a, c, d, e) {
                    if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)return;
                    var g,h,i = f.camelCase(c),j = a.style,k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b)return k && "get"in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
                    h = typeof d,h === "string" && (g = xb.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),h = "number");
                    if (d == null || h === "number" && isNaN(d))return;
                    h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set"in k) || (d = k.set(a, d)) !== b)try {
                        j[c] = d
                    } catch(l) {
                    }
                },css:function(a, c, d) {
                    var e,g;
                    c = f.camelCase(c),g = f.cssHooks[c],c = f.cssProps[c] || c,c === "cssFloat" && (c = "float");
                    if (g && "get"in g && (e = g.get(a, !0, d)) !== b)return e;
                    if (Bb)return Bb(a, c)
                },swap:function(a, b, c) {
                    var d = {};
                    for (var e in b)d[e] = a.style[e],a.style[e] = b[e];
                    c.call(a);
                    for (e in b)a.style[e] = d[e]
                }}),f.curCSS = f.css,f.each(["height","width"], function(a, b) {
            f.cssHooks[b] = {get:function(a, c, d) {
                var e;
                if (c)return a.offsetWidth !== 0 ? Eb(a, b, d) : (f.swap(a, yb, function() {
                    e = Eb(a, b, d)
                }),e)
            },set:function(a, b) {
                if (!vb.test(b))return b;
                b = parseFloat(b);
                if (b >= 0)return b + "px"
            }}
        }),f.support.opacity || (f.cssHooks.opacity = {get:function(a, b) {
            return tb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },set:function(a, b) {
            var c = a.style,d = a.currentStyle,e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(sb, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter)return
            }
            c.filter = sb.test(g) ? g.replace(sb, e) : g + " " + e
        }}),f(function() {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {get:function(a, b) {
                var c;
                return f.swap(a, {display:"inline-block"}, function() {
                    b ? c = Bb(a, "margin-right", "marginRight") : c = a.style.marginRight
                }),c
            }})
        }),c.defaultView && c.defaultView.getComputedStyle && (Cb = function(a, b) {
            var c,d,e;
            return b = b.replace(ub, "-$1").toLowerCase(),(d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),c
        }),c.documentElement.currentStyle && (Db = function(a, b) {
            var c,d,e,f = a.currentStyle && a.currentStyle[b],g = a.style;
            return f === null && g && (e = g[b]) && (f = e),!vb.test(f) && wb.test(f) && (c = g.left,d = a.runtimeStyle && a.runtimeStyle.left,d && (a.runtimeStyle.left = a.currentStyle.left),g.left = b === "fontSize" ? "1em" : f || 0,f = g.pixelLeft + "px",g.left = c,d && (a.runtimeStyle.left = d)),f === "" ? "auto" : f
        }),Bb = Cb || Db,f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
        },f.expr.filters.visible = function(a) {
            return!f.expr.filters.hidden(a)
        });
        var Fb = /%20/g,Gb = /\[\]$/,Hb = /\r?\n/g,Ib = /#.*$/,Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Lb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Mb = /^(?:GET|HEAD)$/,Nb = /^\/\//,Ob = /\?/,Pb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Qb = /^(?:select|textarea)/i,Rb = /\s+/,Sb = /([?&])_=[^&]*/,Tb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Ub = f.fn.load,Vb = {},Wb = {},Xb,Yb,Zb = ["*/"] + ["*"];
        try {
            Xb = e.href
        } catch($b) {
            Xb = c.createElement("a"),Xb.href = "",Xb = Xb.href
        }
        Yb = Tb.exec(Xb.toLowerCase()) || [],f.fn.extend({load:function(a, c, d) {
                    if (typeof a != "string" && Ub)return Ub.apply(this, arguments);
                    if (!this.length)return this;
                    var e = a.indexOf(" ");
                    if (e >= 0) {
                        var g = a.slice(e, a.length);
                        a = a.slice(0, e)
                    }
                    var h = "GET";
                    c && (f.isFunction(c) ? (d = c,c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),h = "POST"));
                    var i = this;
                    return f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a, b, c) {
                                c = a.responseText,a.isResolved() && (a.done(function(a) {
                                    c = a
                                }),i.html(g ? f("<div>").append(c.replace(Pb, "")).find(g) : c)),d && i.each(d, [c,b,a])
                            }}),this
                },serialize:function() {
                    return f.param(this.serializeArray())
                },serializeArray:function() {
                    return this.map(
                            function() {
                                return this.elements ? f.makeArray(this.elements) : this
                            }).filter(
                            function() {
                                return this.name && !this.disabled && (this.checked || Qb.test(this.nodeName) || Kb.test(this.type))
                            }).map(
                            function(a, b) {
                                var c = f(this).val();
                                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                                    return{name:b.name,value:a.replace(Hb, "\r\n")}
                                }) : {name:b.name,value:c.replace(Hb, "\r\n")}
                            }).get()
                }}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            f.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),f.each(["get","post"], function(a, c) {
            f[c] = function(a, d, e, g) {
                return f.isFunction(d) && (g = g || e,e = d,d = b),f.ajax({type:c,url:a,data:d,success:e,dataType:g})
            }
        }),f.extend({getScript:function(a, c) {
                    return f.get(a, b, c, "script")
                },getJSON:function(a, b, c) {
                    return f.get(a, b, c, "json")
                },ajaxSetup:function(a, b) {
                    return b ? bc(a, f.ajaxSettings) : (b = a,a = f.ajaxSettings),bc(a, b),a
                },ajaxSettings:{url:Xb,isLocal:Lb.test(Yb[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Zb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:_b(Vb),ajaxTransport:_b(Wb),ajax:function(a, c) {
                    function w(a, c, l, m) {
                        if (s === 2)return;
                        s = 2,q && clearTimeout(q),p = b,n = m || "",v.readyState = a > 0 ? 4 : 0;
                        var o,r,u,w = c,x = l ? dc(d, v, l) : b,y,z;
                        if (a >= 200 && a < 300 || a === 304) {
                            if (d.ifModified) {
                                if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                                if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                            }
                            if (a === 304)w = "notmodified",o = !0; else try {
                                r = ec(d, x),w = "success",o = !0
                            } catch(A) {
                                w = "parsererror",u = A
                            }
                        } else {
                            u = w;
                            if (!w || a)w = "error",a < 0 && (a = 0)
                        }
                        v.status = a,v.statusText = "" + (c || w),o ? h.resolveWith(e, [r,w,v]) : h.rejectWith(e, [v,w,u]),v.statusCode(j),j = b,t && g.trigger("ajax" + (o ? "Success" : "Error"), [v,d,o ? r : u]),i.fireWith(e, [v,w]),t && (g.trigger("ajaxComplete", [v,d]),--f.active || f.event.trigger("ajaxStop"))
                    }

                    typeof a == "object" && (c = a,a = b),c = c || {};
                    var d = f.ajaxSetup({}, c),e = d.context || d,g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,h = f.Deferred(),i = f.Callbacks("once memory"),j = d.statusCode || {},k,l = {},m = {},n,o,p,q,r,s = 0,t,u,v = {readyState:0,setRequestHeader:function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,l[a] = b
                        }
                        return this
                    },getAllResponseHeaders:function() {
                        return s === 2 ? n : null
                    },getResponseHeader:function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = Jb.exec(n))o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },overrideMimeType:function(a) {
                        return s || (d.mimeType = a),this
                    },abort:function(a) {
                        return a = a || "abort",p && p.abort(a),w(0, a),this
                    }};
                    h.promise(v),v.success = v.done,v.error = v.fail,v.complete = i.add,v.statusCode = function(a) {
                        if (a) {
                            var b;
                            if (s < 2)for (b in a)j[b] = [j[b],a[b]]; else b = a[v.status],v.then(b, b)
                        }
                        return this
                    },d.url = ((a || d.url) + "").replace(Ib, "").replace(Nb, Yb[1] + "//"),d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Rb),d.crossDomain == null && (r = Tb.exec(d.url.toLowerCase()),d.crossDomain = !(!r || r[1] == Yb[1] && r[2] == Yb[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (Yb[3] || (Yb[1] === "http:" ? 80 : 443)))),d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),ac(Vb, d, c, v);
                    if (s === 2)return!1;
                    t = d.global,d.type = d.type.toUpperCase(),d.hasContent = !Mb.test(d.type),t && f.active++ === 0 && f.event.trigger("ajaxStart");
                    if (!d.hasContent) {
                        d.data && (d.url += (Ob.test(d.url) ? "&" : "?") + d.data,delete d.data),k = d.url;
                        if (d.cache === !1) {
                            var x = f.now(),y = d.url.replace(Sb, "$1_=" + x);
                            d.url = y + (y === d.url ? (Ob.test(d.url) ? "&" : "?") + "_=" + x : "")
                        }
                    }
                    (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),d.ifModified && (k = k || d.url,f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + Zb + "; q=0.01" : "") : d.accepts["*"]);
                    for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
                    if (!d.beforeSend || d.beforeSend.call(e, v, d) !== !1 && s !== 2) {
                        for (u in{success:1,error:1,complete:1})v[u](d[u]);
                        p = ac(Wb, d, c, v);
                        if (!p)w(-1, "No Transport"); else {
                            v.readyState = 1,t && g.trigger("ajaxSend", [v,d]),d.async && d.timeout > 0 && (q = setTimeout(function() {
                                v.abort("timeout")
                            }, d.timeout));
                            try {
                                s = 1,p.send(l, w)
                            } catch(z) {
                                if (!(s < 2))throw z;
                                w(-1, z)
                            }
                        }
                        return v
                    }
                    return v.abort(),!1
                },param:function(a, c) {
                    var d = [],e = function(a, b) {
                        b = f.isFunction(b) ? b() : b,d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                    c === b && (c = f.ajaxSettings.traditional);
                    if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function() {
                        e(this.name, this.value)
                    }); else for (var g in a)cc(g, a[g], c, e);
                    return d.join("&").replace(Fb, "+")
                }}),f.extend({active:0,lastModified:{},etag:{}});
        var fc = f.now(),gc = /(\=)\?(&|$)|\?\?/i;
        f.ajaxSetup({jsonp:"callback",jsonpCallback:function() {
                    return f.expando + "_" + fc++
                }}),f.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
            if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (gc.test(b.url) || e && gc.test(b.data))) {
                var g,h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,i = a[h],j = b.url,k = b.data,l = "$1" + h + "$2";
                return b.jsonp !== !1 && (j = j.replace(gc, l),b.url === j && (e && (k = k.replace(gc, l)),b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),b.url = j,b.data = k,a[h] = function(a) {
                    g = [a]
                },d.always(function() {
                    a[h] = i,g && f.isFunction(i) && a[h](g[0])
                }),b.converters["script json"] = function() {
                    return g || f.error(h + " was not called"),g[0]
                },b.dataTypes[0] = "json","script"
            }
        }),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a) {
                    return f.globalEval(a),a
                }}}),f.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1),a.crossDomain && (a.type = "GET",a.global = !1)
        }),f.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var d,e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
                return{send:function(_, f) {
                    d = c.createElement("script"),d.async = "async",a.scriptCharset && (d.charset = a.scriptCharset),d.src = a.url,d.onload = d.onreadystatechange = function(_, a) {
                        if (a || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null,e && d.parentNode && e.removeChild(d),d = b,a || f(200, "success")
                    },e.insertBefore(d, e.firstChild)
                },abort:function() {
                    d && d.onload(0, 1)
                }}
            }
        });
        var hc = a.ActiveXObject ? function() {
            for (var a in jc)jc[a](0, 1)
        } : !1,ic = 0,jc;
        f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return!this.isLocal && kc() || lc()
        } : kc,function(a) {
            f.extend(f.support, {ajax:!!a,cors:!!a && "withCredentials"in a})
        }(f.ajaxSettings.xhr()),f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return{send:function(e, g) {
                    var h = c.xhr(),i,j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),!c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)h.setRequestHeader(j, e[j])
                    } catch(_) {
                    }
                    h.send(c.hasContent && c.data || null),d = function(_, a) {
                        var e,j,k,l,m;
                        try {
                            if (d && (a || h.readyState === 4)) {
                                d = b,i && (h.onreadystatechange = f.noop,hc && delete jc[i]);
                                if (a)h.readyState !== 4 && h.abort(); else {
                                    e = h.status,k = h.getAllResponseHeaders(),l = {},m = h.responseXML,m && m.documentElement && (l.xml = m),l.text = h.responseText;
                                    try {
                                        j = h.statusText
                                    } catch(n) {
                                        j = ""
                                    }
                                    !e && c.isLocal && !c.crossDomain ? e = l.text ? 200 : 404 : e === 1223 && (e = 204)
                                }
                            }
                        } catch(o) {
                            a || g(-1, o)
                        }
                        l && g(e, j, l, k)
                    },!c.async || h.readyState === 4 ? d() : (i = ++ic,hc && (jc || (jc = {},f(a).unload(hc)),jc[i] = d),h.onreadystatechange = d)
                },abort:function() {
                    d && d(0, 1)
                }}
            }
        });
        var mc = {},nc,oc,pc = /^(?:toggle|show|hide)$/,qc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,rc,sc = [
            ["height","marginTop","marginBottom","paddingTop","paddingBottom"],
            ["width","marginLeft","marginRight","paddingLeft","paddingRight"],
            ["opacity"]
        ],tc;
        f.fn.extend({show:function(a, b, c) {
                    var d,e;
                    if (a || a === 0)return this.animate(wc("show", 3), a, b, c);
                    for (var g = 0,h = this.length; g < h; g++)d = this[g],d.style && (e = d.style.display,!f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", xc(d.nodeName)));
                    for (g = 0; g < h; g++) {
                        d = this[g];
                        if (d.style) {
                            e = d.style.display;
                            if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
                        }
                    }
                    return this
                },hide:function(a, b, c) {
                    if (a || a === 0)return this.animate(wc("hide", 3), a, b, c);
                    var d,e,g = 0,h = this.length;
                    for (; g < h; g++)d = this[g],d.style && (e = f.css(d, "display"),e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
                    for (g = 0; g < h; g++)this[g].style && (this[g].style.display = "none");
                    return this
                },_toggle:f.fn.toggle,toggle:function(a, b, c) {
                    var d = typeof a == "boolean";
                    return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                        var b = d ? a : f(this).is(":hidden");
                        f(this)[b ? "show" : "hide"]()
                    }) : this.animate(wc("toggle", 3), a, b, c),this
                },fadeTo:function(a, b, c, d) {
                    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:b}, a, c, d)
                },animate:function(a, b, c, d) {
                    function g() {
                        e.queue === !1 && f._mark(this);
                        var b = f.extend({}, e),c = this.nodeType === 1,d = c && f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;
                        b.animatedProperties = {};
                        for (i in a) {
                            g = f.camelCase(i),i !== g && (a[g] = a[i],delete a[i]),h = a[g],f.isArray(h) ? (b.animatedProperties[g] = h[1],h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                            if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                            c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || xc(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                        }
                        b.overflow != null && (this.style.overflow = "hidden");
                        for (i in a)j = new f.fx(this, b, i),h = a[i],pc.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"),j[o]()) : j[h]()) : (k = qc.exec(h),l = j.cur(),k ? (m = parseFloat(k[2]),n = k[3] || (f.cssNumber[i] ? "" : "px"),n !== "px" && (f.style(this, i, (m || 1) + n),l = (m || 1) / j.cur() * l,f.style(this, i, l + n)),k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l),j.custom(l, m, n)) : j.custom(l, h, ""));
                        return!0
                    }

                    var e = f.speed(b, c, d);
                    return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a),e.queue === !1 ? this.each(g) : this.queue(e.queue, g))
                },stop:function(a, c, d) {
                    return typeof a != "string" && (d = c,c = a,a = b),c && a !== !1 && this.queue(a || "fx", []),this.each(function() {
                        function h(a, b, c) {
                            var e = b[c];
                            f.removeData(a, c, !0),e.stop(d)
                        }

                        var b,c = !1,e = f.timers,g = f._data(this);
                        d || f._unmark(!0, this);
                        if (a == null)for (b in g)g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                        for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(),c = !0,e.splice(b, 1));
                        (!d || !c) && f.dequeue(this, a)
                    })
                }}),f.each({slideDown:wc("show", 1),slideUp:wc("hide", 1),slideToggle:wc("toggle", 1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}}, function(a, b) {
            f.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),f.extend({speed:function(a, b, c) {
                    var d = a && typeof a == "object" ? f.extend({}, a) : {complete:c || !c && b || f.isFunction(a) && a,duration:a,easing:c && b || b && !f.isFunction(b) && b};
                    d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
                    if (d.queue == null || d.queue === !0)d.queue = "fx";
                    return d.old = d.complete,d.complete = function(a) {
                        f.isFunction(d.old) && d.old.call(this),d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
                    },d
                },easing:{linear:function(a, b, c, d) {
                    return c + d * a
                },swing:function(a, b, c, d) {
                    return(-Math.cos(a * Math.PI) / 2 + .5) * d + c
                }},timers:[],fx:function(a, b, c) {
                    this.options = b,this.elem = a,this.prop = c,b.orig = b.orig || {}
                }}),f.fx.prototype = {update:function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),(f.fx.step[this.prop] || f.fx.step._default)(this)
        },cur:function() {
            if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                var a,b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            }
            return this.elem[this.prop]
        },custom:function(a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this,g = f.fx;
            this.startTime = tc || uc(),this.end = c,this.now = this.start = a,this.pos = this.state = 0,this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),h.queue = this.options.queue,h.elem = this.elem,h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            },h() && f.timers.push(h) && !rc && (rc = setInterval(g.tick, g.interval))
        },show:function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),this.options.show = !0,a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),f(this.elem).show()
        },hide:function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),this.options.hide = !0,this.custom(this.cur(), 0)
        },step:function(a) {
            var b,c,d,e = tc || uc(),g = !0,h = this.elem,i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,this.pos = this.state = 1,this.update(),i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["","X","Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),i.hide && f(h).hide();
                    if (i.hide || i.show)for (b in i.animatedProperties)f.style(h, b, i.orig[b]),f.removeData(h, "fxshow" + b, !0),f.removeData(h, "toggle" + b, !0);
                    d = i.complete,d && (i.complete = !1,d.call(h))
                }
                return!1
            }
            return i.duration == Infinity ? this.now = e : (c = e - this.startTime,this.state = c / i.duration,this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),this.now = this.start + (this.end - this.start) * this.pos),this.update(),!0
        }},f.extend(f.fx, {tick:function() {
                    var a,b = f.timers,c = 0;
                    for (; c < b.length; c++)a = b[c],!a() && b[c] === a && b.splice(c--, 1);
                    b.length || f.fx.stop()
                },interval:13,stop:function() {
                    clearInterval(rc),rc = null
                },speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a) {
                    f.style(a.elem, "opacity", a.now)
                },_default:function(a) {
                    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }}}),f.each(["width","height"], function(a, b) {
            f.fx.step[b] = function(a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            }
        }),f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
            return f.grep(f.timers,
                    function(b) {
                        return a === b.elem
                    }).length
        });
        var yc = /^t(?:able|d|h)$/i,zc = /^(?:body|html)$/i;
        "getBoundingClientRect"in c.documentElement ? f.fn.offset = function(a) {
            var b = this[0],c;
            if (a)return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument)return null;
            if (b === b.ownerDocument.body)return f.offset.bodyOffset(b);
            try {
                c = b.getBoundingClientRect()
            } catch(d) {
            }
            var e = b.ownerDocument,g = e.documentElement;
            if (!c || !f.contains(g, b))return c ? {top:c.top,left:c.left} : {top:0,left:0};
            var h = e.body,i = Ac(e),j = g.clientTop || h.clientTop || 0,k = g.clientLeft || h.clientLeft || 0,l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,n = c.top + l - j,o = c.left + m - k;
            return{top:n,left:o}
        } : f.fn.offset = function(a) {
            var b = this[0];
            if (a)return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument)return null;
            if (b === b.ownerDocument.body)return f.offset.bodyOffset(b);
            var c,d = b.offsetParent,e = b,g = b.ownerDocument,h = g.documentElement,i = g.body,j = g.defaultView,k = j ? j.getComputedStyle(b, null) : b.currentStyle,l = b.offsetTop,m = b.offsetLeft;
            while ((b = b.parentNode) && b !== i && b !== h) {
                if (f.support.fixedPosition && k.position === "fixed")break;
                c = j ? j.getComputedStyle(b, null) : b.currentStyle,l -= b.scrollTop,m -= b.scrollLeft,b === d && (l += b.offsetTop,m += b.offsetLeft,f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !yc.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0,m += parseFloat(c.borderLeftWidth) || 0),e = d,d = b.offsetParent),f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0,m += parseFloat(c.borderLeftWidth) || 0),k = c
            }
            if (k.position === "relative" || k.position === "static")l += i.offsetTop,m += i.offsetLeft;
            return f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop),m += Math.max(h.scrollLeft, i.scrollLeft)),{top:l,left:m}
        },f.offset = {bodyOffset:function(a) {
            var b = a.offsetTop,c = a.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,c += parseFloat(f.css(a, "marginLeft")) || 0),{top:b,left:c}
        },setOffset:function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),g = e.offset(),h = f.css(a, "top"),i = f.css(a, "left"),j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h,i]) > -1,k = {},l = {},m,n;
            j ? (l = e.position(),m = l.top,n = l.left) : (m = parseFloat(h) || 0,n = parseFloat(i) || 0),f.isFunction(b) && (b = b.call(a, c, g)),b.top != null && (k.top = b.top - g.top + m),b.left != null && (k.left = b.left - g.left + n),"using"in b ? b.using.call(a, k) : e.css(k)
        }},f.fn.extend({position:function() {
                    if (!this[0])return null;
                    var a = this[0],b = this.offsetParent(),c = this.offset(),d = zc.test(b[0].nodeName) ? {top:0,left:0} : b.offset();
                    return c.top -= parseFloat(f.css(a, "marginTop")) || 0,c.left -= parseFloat(f.css(a, "marginLeft")) || 0,d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0,{top:c.top - d.top,left:c.left - d.left}
                },offsetParent:function() {
                    return this.map(function() {
                        var a = this.offsetParent || c.body;
                        while (a && !zc.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
                        return a
                    })
                }}),f.each(["Left","Top"], function(a, c) {
            var d = "scroll" + c;
            f.fn[d] = function(c) {
                var e,g;
                return c === b ? (e = this[0],e ? (g = Ac(e),g ? "pageXOffset"in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]) : null) : this.each(function() {
                    g = Ac(this),g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
                })
            }
        }),f.each(["Height","Width"], function(a, c) {
            var d = c.toLowerCase();
            f.fn["inner" + c] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
            },f.fn["outer" + c] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
            },f.fn[d] = function(a) {
                var e = this[0];
                if (!e)return a == null ? null : this;
                if (f.isFunction(a))return this.each(function(b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                });
                if (f.isWindow(e)) {
                    var g = e.document.documentElement["client" + c],h = e.document.body;
                    return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
                }
                if (e.nodeType === 9)return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                if (a === b) {
                    var i = f.css(e, d),j = parseFloat(i);
                    return f.isNumeric(j) ? j : i
                }
                return this.css(d, typeof a == "string" ? a : a + "px")
            }
        }),a.jQuery = a.$ = f,typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return f
        })
    })(window)
}),deferred("$lib/jquery.event.drag.js", function() {/*!
 * jquery.event.drag - v 2.0.0
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
    (function($) {
        $.fn.drag = function(a, b, c) {
            var d = typeof a == "string" ? a : "",e = $.isFunction(a) ? a : $.isFunction(b) ? b : null;
            return d.indexOf("drag") !== 0 && (d = "drag" + d),c = (a == e ? b : c) || {},e ? this.bind(d, c, e) : this.trigger(d)
        };
        var a = $.event,b = a.special,c = b.drag = {defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!0,click:!1},datakey:"dragdata",livekey:"livedrag",add:function(b) {
            var d = $.data(this, c.datakey),e = b.data || {};
            d.related += 1,!d.live && b.selector && (d.live = !0,a.add(this, "draginit." + c.livekey, c.delegate)),$.each(c.defaults, function(a, b) {
                e[a] !== undefined && (d[a] = e[a])
            })
        },remove:function() {
            $.data(this, c.datakey).related -= 1
        },setup:function() {
            if ($.data(this, c.datakey))return;
            var b = $.extend({related:0}, c.defaults);
            $.data(this, c.datakey, b),a.add(this, "mousedown", c.init, b),this.attachEvent && this.attachEvent("ondragstart", c.dontstart)
        },teardown:function() {
            if ($.data(this, c.datakey).related)return;
            $.removeData(this, c.datakey),a.remove(this, "mousedown", c.init),a.remove(this, "draginit", c.delegate),c.textselect(!0),this.detachEvent && this.detachEvent("ondragstart", c.dontstart)
        },init:function(d) {
            var e = d.data,f;
            if (e.which > 0 && d.which != e.which)return;
            if ($(d.target).is(e.not))return;
            if (e.handle && !$(d.target).closest(e.handle, d.currentTarget).length)return;
            e.propagates = 1,e.interactions = [c.interaction(this, e)],e.target = d.target,e.pageX = d.pageX,e.pageY = d.pageY,e.dragging = null,f = c.hijack(d, "draginit", e);
            if (!e.propagates)return;
            return f = c.flatten(f),f && f.length && (e.interactions = [],$.each(f, function() {
                e.interactions.push(c.interaction(this, e))
            })),e.propagates = e.interactions.length,e.drop !== !1 && b.drop && b.drop.handler(d, e),c.textselect(!1),a.add(document, "mousemove mouseup", c.handler, e),!1
        },interaction:function(a, b) {
            return{drag:a,callback:new c.callback,droppable:[],offset:$(a)[b.relative ? "position" : "offset"]() || {top:0,left:0}}
        },handler:function(d) {
            var e = d.data;
            switch (d.type) {
                case!e.dragging && "mousemove":
                    if (Math.pow(d.pageX - e.pageX, 2) + Math.pow(d.pageY - e.pageY, 2) < Math.pow(e.distance, 2))break;
                    d.target = e.target,c.hijack(d, "dragstart", e),e.propagates && (e.dragging = !0);
                case"mousemove":
                    if (e.dragging) {
                        c.hijack(d, "drag", e);
                        if (e.propagates) {
                            e.drop !== !1 && b.drop && b.drop.handler(d, e);
                            break
                        }
                        d.type = "mouseup"
                    }
                    ;
                case"mouseup":
                    a.remove(document, "mousemove mouseup", c.handler),e.dragging && (e.drop !== !1 && b.drop && b.drop.handler(d, e),c.hijack(d, "dragend", e)),c.textselect(!0),e.click === !1 && e.dragging && ($.event.triggered = !0,setTimeout(function() {
                        $.event.triggered = !1
                    }, 20),e.dragging = !1)
            }
        },delegate:function(b) {
            var d = [],e,f = $.data(this, "events") || {};
            return $.each(f.live || [], function(f, g) {
                if (g.preType.indexOf("drag") !== 0)return;
                e = $(b.target).closest(g.selector, b.currentTarget)[0];
                if (!e)return;
                a.add(e, g.origType + "." + c.livekey, g.origHandler, g.data),$.inArray(e, d) < 0 && d.push(e)
            }),d.length ? $(d).bind("dragend." + c.livekey, function() {
                a.remove(this, "." + c.livekey)
            }) : !1
        },hijack:function(b, d, e, f, g) {
            if (!e)return;
            var h = {event:b.originalEvent,type:b.type},i = d.indexOf("drop") ? "drag" : "drop",j,k = f || 0,l,m,n,o = isNaN(f) ? e.interactions.length : f;
            b.type = d,b.originalEvent = null,e.results = [];
            do if (l = e.interactions[k]) {
                if (d !== "dragend" && l.cancelled)continue;
                n = c.properties(b, e, l),l.results = [],$(g || l[i] || e.droppable).each(function(f, g) {
                    n.target = g,j = g ? a.handle.call(g, b, n) : null,j === !1 ? (i == "drag" && (l.cancelled = !0,e.propagates -= 1),d == "drop" && (l[i][f] = null)) : d == "dropinit" && l.droppable.push(c.element(j) || g),d == "dragstart" && (l.proxy = $(c.element(j) || l.drag)[0]),l.results.push(j),delete b.result;
                    if (d !== "dropinit")return j
                }),e.results[k] = c.flatten(l.results),d == "dropinit" && (l.droppable = c.flatten(l.droppable)),d == "dragstart" && !l.cancelled && n.update()
            } while (++k < o);
            return b.type = h.type,b.originalEvent = h.event,c.flatten(e.results)
        },properties:function(a, b, d) {
            var e = d.callback;
            return e.drag = d.drag,e.proxy = d.proxy || d.drag,e.startX = b.pageX,e.startY = b.pageY,e.deltaX = a.pageX - b.pageX,e.deltaY = a.pageY - b.pageY,e.originalX = d.offset.left,e.originalY = d.offset.top,e.offsetX = a.pageX - (b.pageX - e.originalX),e.offsetY = a.pageY - (b.pageY - e.originalY),e.drop = c.flatten((d.drop || []).slice()),e.available = c.flatten((d.droppable || []).slice()),e
        },element:function(a) {
            if (a && (a.jquery || a.nodeType == 1))return a
        },flatten:function(a) {
            return $.map(a, function(a) {
                return a && a.jquery ? $.makeArray(a) : a && a.length ? c.flatten(a) : a
            })
        },textselect:function(a) {
            $(document)[a ? "unbind" : "bind"]("selectstart", c.dontstart).attr("unselectable", a ? "off" : "on").css("MozUserSelect", a ? "" : "none")
        },dontstart:function() {
            return!1
        },callback:function() {
        }};
        c.callback.prototype = {update:function() {
            b.drop && this.available.length && $.each(this.available, function(a) {
                b.drop.locate(this, a)
            })
        }},b.draginit = b.dragstart = b.dragend = c
    })(jQuery)
}),"use strict",provide("core/jquery", function(a) {
    using("$lib/jquery.js", function() {
        using("$lib/jquery.event.drag.js", function() {
            a(jQuery.noConflict(!0))
        })
    })
}),"use strict",provide("core/utils", function(a) {
    using("core/jquery", function($) {
        var b = [],c = {isDomObj:function(a) {
            return!!a.nodeType || a === window
        },toArray:function(a, c) {
            return b.slice.call(a, c)
        },merge:function() {
            var a = this.toArray(arguments);
            return a.unshift({}),a[a.length - 1] === !0 && (a.pop(),a.unshift(!0)),$.extend.apply(undefined, a)
        },push:function(a, b, c) {
            return a && Object.keys(b || {}).forEach(function(d) {
                if (a[d] && c)throw Error("utils.push attempted to overwrite '" + d + "' while running in protected mode");
                typeof a[d] == "object" && typeof b[d] == "object" ? this.push(a[d], b[d]) : a[d] = b[d]
            }, this),a
        },isEnumerable:function(a, b) {
            return Object.keys(a).indexOf(b) > -1
        },uniqueArray:function(a) {
            var b = {},c = [];
            for (var d = 0,e = a.length; d < e; ++d) {
                if (b.hasOwnProperty(a[d]))continue;
                c.push(a[d]),b[a[d]] = 1
            }
            return c
        }};
        a(c)
    })
}),"use strict",provide("app/utils/is_ie", function(a) {
    using("core/jquery", function($) {
        a($.browser.msie)
    })
}),"use strict",provide("core/compose", function(a) {
    using("core/utils", "app/utils/is_ie", function(b, c) {
        function e(a, b) {
            if (!d)return;
            var c = Object.create(null);
            Object.keys(a).forEach(function(d) {
                var e = Object.getOwnPropertyDescriptor(a, d);
                e.writable = b,c[d] = e
            }),Object.defineProperties(a, c)
        }

        function f(a, b, c) {
            if (!d) {
                c.call(a);
                return
            }
            var e = Object.getOwnPropertyDescriptor(a, b).writable;
            Object.defineProperty(a, b, {writable:!0}),c.call(a),Object.defineProperty(a, b, {writable:e})
        }

        function g(a, b) {
            a.mixedIn = a.hasOwnProperty("mixedIn") ? a.mixedIn : [],b.forEach(function(b) {
                a.mixedIn.indexOf(b) == -1 && (e(a, !1),b.call(a),a.mixedIn.push(b))
            }),e(a, !0)
        }

        var d = !1;
        a({mixin:g,unlockProperty:f})
    })
}),"use strict",provide("core/fn", function(a) {
    using("core/jquery", "core/utils", "core/compose", function($, b, c) {
        function e(a, b, c) {
            var d;
            return function() {
                var e = this,f = arguments,g = function() {
                    d = null,a.apply(e, f)
                };
                d && c && clearTimeout(d);
                if (c || !d)d = setTimeout(g, b)
            }
        }

        var d = 100,f = {around:function(a, c) {
            return function() {
                var d = b.toArray(arguments);
                return c.apply(this, [a.bind(this)].concat(d))
            }
        },before:function(a, c) {
            return f.around(a, function() {
                var a = b.toArray(arguments),d = a.shift(),e;
                return e = typeof c == "function" ? c : c.obj[c.fnName],e.apply(this, a),d.apply(this, a)
            })
        },after:function(a, c) {
            return f.around(a, function() {
                var a = b.toArray(arguments),d = a.shift(),e,f = (d.unbound || d).apply(this, a);
                return e = typeof c == "function" ? c : c.obj[c.fnName],e.apply(this, a),f
            })
        },compose:function() {
            var a = b.toArray(arguments).reverse(),c = a.shift();
            return a.forEach(function(a) {
                c = f.around(c, function() {
                    var b = [].slice.call(arguments),c = b.shift();
                    return a.call(this, c.apply(this, b))
                })
            }),c
        },debounce:function(a, b) {
            return typeof b != "number" && (b = d),e(a, b, !0)
        },throttle:function(a, b) {
            return typeof b != "number" && (b = d),e(a, b, !1)
        },countThen:function(a, b) {
            return function() {
                if (!--a)return b.apply(this, arguments)
            }
        },withAdvice:function() {
            ["before","after","around"].forEach(function(a) {
                this[a] = function(b, d) {
                    c.unlockProperty(this, b, function() {
                        return typeof this[b] == "function" ? this[b] = f[a](this[b], d) : this[b] = d
                    })
                }
            }, this)
        },delegate:function(a) {
            return function(b, c) {
                var d = $(b.target),e;
                Object.keys(a).forEach(function(f) {
                    if ((e = d.closest(f)).length)return c = c || {},c.el = e[0],a[f].apply(this, [b,c])
                }, this)
            }
        }};
        a(f)
    })
}),"use strict",provide("core/registry", function(a) {
    using("core/utils", "core/fn", function(b, c) {
        function d(a, c) {
            var d,e,f;
            return c = b.toArray(c),typeof c[c.length - 1] == "function" && (f = c.pop()),typeof c[c.length - 1] == "object" && c.pop(),c.length == 2 ? (d = c[0],e = c[1]) : (d = a.node,e = c[0]),{element:d,type:e,callback:f}
        }

        function e(a, b) {
            return a.element == b.element && a.type == b.type && (b.callback == null || a.callback == b.callback)
        }

        function f() {
            function c(b) {
                this.component = b,this.instances = [],this.addInstance = function(a) {
                    this.throwIfInstanceExistsOnNode(a);
                    var b = new f(a);
                    return this.instances.push(b),b
                },this.throwIfInstanceExistsOnNode = function(a) {
                    this.instances.forEach(function(b) {
                        if (b.instance.$node[0] === a.$node[0])throw new Error("Instance of " + a.constructor + " already exists on node " + a.$node[0])
                    })
                },this.removeInstance = function(b) {
                    var c = this.instances.filter(function(a) {
                        return a.instance == b
                    })[0],d = this.instances.indexOf(c);
                    d > -1 && this.instances.splice(d, 1),this.instances.length || a.removeComponentInfo(this)
                }
            }

            function f(b) {
                this.instance = b,this.events = [],this.addTrigger = function() {
                },this.addBind = function(b) {
                    this.events.push(b),a.events.push(b)
                },this.removeBind = function(a) {
                    for (var b = 0,c; c = this.events[b]; b++)e(c, a) && this.events.splice(b, 1)
                }
            }

            var a = this;
            (this.reset = function() {
                this.components = [],this.allInstances = [],this.events = []
            }).call(this),this.addInstance = function(a) {
                var b = this.findComponentInfo(a);
                b || (b = new c(a.constructor),this.components.push(b));
                var d = b.addInstance(a);
                return this.allInstances.push(d),b
            },this.removeInstance = function(a) {
                var b,c = this.findInstanceInfo(a),d = this.findComponentInfo(a);
                d.removeInstance(a);
                var b = this.allInstances.indexOf(c);
                b > -1 && this.allInstances.splice(b, 1)
            },this.removeComponentInfo = function(a) {
                var b = this.components.indexOf(a);
                b > -1 && this.components.splice(b, 1)
            },this.findComponentInfo = function(a) {
                var b = a.attachTo ? a : a.constructor;
                for (var c = 0,d; d = this.components[c]; c++)if (d.component === b)return d;
                return null
            },this.findInstanceInfo = function(a) {
                var b;
                a.node ? b = function(b) {
                    return b.instance === a
                } : b = function(b) {
                    return b.instance.node === a
                };
                var c = this.allInstances.filter(b);
                return c.length ? a.node ? c[0] : c : a.node ? null : []
            },this.trigger = function() {
                var b = d(this, arguments),c = a.findInstanceInfo(this);
                c && c.addTrigger(b)
            },this.on = function(c) {
                var e = b.toArray(arguments, 1),f = a.findInstanceInfo(this),g;
                if (f) {
                    g = c.apply(null, e),g && (e[e.length - 1] = g);
                    var h = d(this, e);
                    f.addBind(h)
                }
            },this.off = function(b, c, e) {
                var f = d(this, arguments),g = a.findInstanceInfo(this);
                g && g.removeBind(f)
            },this.teardown = function() {
                a.removeInstance(this)
            },this.withRegistration = function() {
                this.before("initialize", function() {
                    a.addInstance(this)
                }),this.after("trigger", a.trigger),this.around("on", a.on),this.after("off", a.off),this.after("teardown", {obj:a,fnName:"teardown"})
            }
        }

        a(new f)
    })
}),"use strict",provide("core/component", function(a) {
    using("core/jquery", "core/fn", "core/utils", "core/registry", "core/compose", function($, b, c, d, e) {
        function f(a) {
            a.events.slice().forEach(function(a) {
                var b = [a.type];
                a.element && b.unshift(a.element),typeof a.callback == "function" && b.push(a.callback),this.off.apply(this, b)
            }, a.instance)
        }

        function g() {
            f(d.findInstanceInfo(this)),this.trigger("componentTornDown")
        }

        function h() {
            var a = d.findComponentInfo(this);
            a && a.instances.slice().forEach(function(a) {
                a.instance.teardown()
            })
        }

        function i() {
            this.trigger = function() {
                var a,b,d,e = c.toArray(arguments);
                typeof e[e.length - 1] != "string" && (d = e.pop()),a = e.length == 2 ? $(e.shift()) : this.$node,b = e[0];
                if (window.DEBUG && window.postMessage)try {
                    window.postMessage(d, "*")
                } catch(f) {
                    throw console.log("unserializable data for event", b, ":", d),new Error(["The event",event.type,"on component",this.describe,"was triggered with non-serializable data"].join(" "))
                }
                return typeof this.attr.eventData == "object" && (d = $.extend(!0, {}, this.attr.eventData, d)),a.trigger(b, d)
            },this.on = function() {
                var a,d,e,f,g = c.toArray(arguments);
                typeof g[g.length - 1] == "object" ? f = b.delegate(this.resolveDelegateRules(g.pop())) : f = g.pop(),e = f && f.bind(this),e.target = f,a = g.length == 2 ? $(g.shift()) : this.$node,d = g[0];
                if (typeof e == "undefined")throw new Error("Unable to bind to '" + d + "' because the given callback is undefined");
                return a.on(d, e),e
            },this.off = function() {
                var a,b,d,e = c.toArray(arguments);
                return typeof e[e.length - 1] == "function" && (d = e.pop()),a = e.length == 2 ? $(e.shift()) : this.$node,b = e[0],a.off(b, d)
            },this.resolveDelegateRules = function(a) {
                var b = {};
                return Object.keys(a).forEach(function(c) {
                    if (!this.attr.hasOwnProperty(c))throw new Error('Component "' + this.describe + '" wants to listen on "' + c + '" but no such attribute was defined.');
                    b[this.attr[c]] = a[c]
                }, this),b
            },this.defaultAttrs = function(a) {
                c.push(this.defaults, a, !0) || (this.defaults = a)
            },this.select = function(a) {
                return this.$node.find(this.attr[a])
            },this.initialize = $.noop,this.teardown = g
        }

        function j(a, b) {
            if (!a)throw new Error("Component needs to be attachTo'd a jQuery object, native node or selector string");
            $(a).each(function(a, c) {
                new this(c, b)
            }.bind(this))
        }

        function k() {
            function f(a, b) {
                var d = {},e = 0;
                if (!a)throw new Error("Component needs a node");
                a.jquery ? (this.node = a[0],this.$node = a) : (this.node = a,this.$node = $(a)),this.describe = this.constructor.describe,this.bind = function(a) {
                    var b;
                    if (a.uuid && (b = d[a.uuid]))return b;
                    var f = c.toArray(arguments, 1);
                    return f.unshift(this),b = a.bind.apply(a, f),b.target = a,a.uuid = e++,d[a.uuid] = b,b
                },this.attr = c.merge(this.defaults, b),this.initialize.call(this, b || {}),this.trigger("componentInitialized")
            }

            var a = c.toArray(arguments);
            return f.toString = function() {
                var b = a.map(
                        function(a) {
                            if ($.browser.msie) {
                                var b = a.toString().match(/function (.*?)\s?\(/);
                                return b && b[1] ? b[1] : ""
                            }
                            return a.name
                        }).join(", ").replace(/\s\,/g, "");
                return b
            },f.describe = f.toString(),f.attachTo = j,f.teardownAll = h,a.unshift(i, b.withAdvice, d.withRegistration),e.mixin(f.prototype, a),f
        }

        k.teardownAll = function() {
            d.components.slice().forEach(function(a) {
                a.component.teardownAll()
            })
        },a(k)
    })
}),provide("core/clock", function(a) {
    using("core/component", "core/registry", function(b, c) {
        function g() {
        }

        function h() {
            this.timers = [],this.clockComponent = function() {
                if (!this.currentClock || !c.findInstanceInfo(this.currentClock))this.reset(),this.currentClock = new d(document);
                return this.currentClock
            },this.trigger = function(a, b) {
                this.clockComponent().trigger(a, b)
            },this.reset = function() {
                this.timers = []
            },this.tick = function() {
                this.timers.forEach(function(a) {
                    a.tick(f)
                })
            },this.setTicker = function() {
                this.pause(),this.ticker = window.setInterval(this.tick.bind(this), f)
            },this.init = function() {
                this.clockComponent(),this.ticker || this.setTicker()
            },this.clear = function(a) {
                a && this.timers.splice(this.timers.indexOf(a), 1)
            },this.setTimeoutEvent = function(a, b, c) {
                if (typeof a != "string")return console.error("clock.setTimeoutEvent was passed a function instead of a string.");
                this.init();
                var d = new j(a, b, c);
                return this.timers.push(d),d
            },this.clearTimeout = function(a) {
                a instanceof j && this.clear(a)
            },this.setIntervalEvent = function(a, b, c) {
                if (typeof a != "string")return console.error("clock.setIntervalEvent was passed a function instead of a string.");
                this.init();
                var d = new l(a, b, c);
                return this.timers.push(d),d
            },this.clearInterval = function(a) {
                a instanceof l && this.clear(a)
            },this.resume = this.restart = this.setTicker,this.pause = function(a, b) {
                clearInterval(this.ticker || 0)
            }
        }

        function i() {
            this.callback = function() {
                e.trigger(this.eventName, this.data)
            },this.clear = function() {
                e.clear(this)
            },this.pause = function() {
                this.paused = !0
            },this.resume = function() {
                this.paused = !1
            },this.tickUnlessPaused = this.tick,this.tick = function() {
                if (this.paused)return;
                this.tickUnlessPaused.apply(this, arguments)
            }
        }

        function j(a, b, c) {
            this.countdown = b,this.eventName = a,this.data = c
        }

        function l(a, b, c) {
            this.countdown = this.interval = this.maxInterval = this.initialInterval = b,this.eventName = a,this.data = c
        }

        var d = b(g),e = new h,f = 1e3,k = function() {
            this.tick = function(a) {
                this.countdown -= a,this.countdown <= 0 && (this.clear(),this.callback())
            }
        };
        k.call(j.prototype),i.call(j.prototype);
        var m = function() {
            this.tick = function(a) {
                this.countdown -= a,this.countdown <= 0 && (this.callback(),this.interval < this.maxInterval && (this.interval = Math.min(this.interval * 2, this.maxInterval)),this.countdown = this.interval)
            },this.backoff = function(a) {
                this.maxInterval = a,this.interval > this.maxInterval && (this.interval = a)
            },this.cancelBackoff = function() {
                this.countdown = this.interval = this.maxInterval = this.initialInterval
            }
        };
        m.call(l.prototype),i.call(l.prototype),a(e)
    })
}),"use strict",provide("core/parameterize", function(a) {
    function c(a, c, d) {
        return c ? a.replace(b, function(a, b) {
            if (b) {
                if (c[b])return c[b];
                if (d)throw new Error("Cannot parameterize string, no replacement found for " + b);
                return""
            }
            return a
        }) : a
    }

    var b = /\{\{(.+?)\}\}/g;
    a(c)
}),"use strict",provide("core/i18n", function(a) {
    using("core/parameterize", function(b) {
        a(b)
    })
}),"use strict",provide("core/logger", function(a) {
    using("core/compose", "core/utils", "core/fn", function(b, c, d) {
        function f(a) {
            var b = a.tagName ? a.tagName.toLowerCase() : a.toString(),c = a.className ? "." + a.className : "",d = b + c;
            return a.tagName ? ["'","'"].join(d) : d
        }

        function g(a, b, c) {
            var d,g,h,i,j,k,l,m,n,o;
            typeof c[c.length - 1] == "function" && (h = c.pop(),h = h.unbound || h),typeof c[c.length - 1] == "object" && c.pop(),c.length == 2 ? (g = c[0],d = c[1]) : (g = b.$node[0],d = c[0]),window.DEBUG && console.info.call && (l = DEBUG.events.logFilter,n = l.actions == "all" || l.actions.indexOf(a) > -1,m = function(a) {
                return a.test ? a : new RegExp("^" + a.replace(/\*/g, ".*") + "$")
            },o = l.eventNames == "all" || l.eventNames.some(function(a) {
                return m(a).test(d)
            }),n && o && (k = [e[a],a,"[" + d + "]",f(g),b.constructor.describe],j = h && (i = h.name || h.displayName) && "->  " + i,j && k.push(j),console.info.apply(console, k)))
        }

        function h() {
            this.before("trigger", function() {
                g("trigger", this, c.toArray(arguments))
            }),this.before("on", function() {
                g("on", this, c.toArray(arguments))
            }),this.before("off", function(a) {
                g("off", this, c.toArray(arguments))
            })
        }

        var e = {on:"<-",trigger:"->",off:"x "};
        a(h)
    })
}),deferred("$lib/mustache.js", function() {
    window.Mustache = function() {
        var a = {},b = function() {
        };
        return b.prototype = {otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":!0,"TRANSLATION-HINT":!0},context:{},render:function(a, b, c, d) {
            d || (this.context = b,this.buffer = []);
            if (!this.includes("", a)) {
                if (d)return a;
                this.send(a);
                return
            }
            this.pragmas["TRANSLATION-HINT"] && (b["_TRANSLATION-HINT_mode"] = this.pragmas["TRANSLATION-HINT"].mode),a = this.render_pragmas(a),a = this.render_i18n(a, b, c);
            var e = this.render_section(a, b, c);
            e === !1 && (e = this.render_tags(a, b, c, d));
            if (d)return e;
            this.sendLines(e)
        },send:function(a) {
            a !== "" && this.buffer.push(a)
        },sendLines:function(a) {
            if (a) {
                var b = a.split("\n");
                for (var c = 0; c < b.length; c++)this.send(b[c])
            }
        },render_pragmas:function(a) {
            if (!this.includes("%", a))return a;
            var b = this,c = this.getCachedRegex("render_pragmas", function(a, b) {
                return new RegExp(a + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + b, "g")
            });
            return a.replace(c, function(a, c, d) {
                if (!b.pragmas_implemented[c])throw{message:"This implementation of mustache doesn't understand the '" + c + "' pragma"};
                b.pragmas[c] = {};
                if (d) {
                    var e = d.split("=");
                    b.pragmas[c][e[0]] = e[1]
                }
                return""
            })
        },render_partial:function(a, b, c) {
            a = this.trim(a);
            var d = c,e = a.split("/");
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                typeof b[g] == "object" && (b = b[g]),d = d && d[g]
            }
            if (!d)throw{message:"unknown_partial '" + a + "'"};
            return this.render(d, b, c, !0)
        },render_i18n:function(a, b, c) {
            if (a.indexOf(this.otag + "_i") == -1)return a;
            var d = this,e = this.getCachedRegex("render_i18n", function(a, b) {
                return new RegExp(a + "\\_i" + b + "\\s*([\\s\\S]+?)" + a + "\\/i" + b, "mg")
            });
            return a.replace(e, function(a, c) {
                var e;
                d.pragmas && d.pragmas["TRANSLATION-HINT"] && d.pragmas["TRANSLATION-HINT"].mode ? e = d.pragmas["TRANSLATION-HINT"].mode : b["_TRANSLATION-HINT_mode"] && (e = b["_TRANSLATION-HINT_mode"]);
                var f = c;
                return e && (f = {text:c,mode:e}),_(f)
            })
        },render_section:function(a, b, c) {
            if (!this.includes("#", a) && !this.includes("^", a))return!1;
            var d = this,e = this.getCachedRegex("render_section", function(a, b) {
                return new RegExp("^([\\s\\S]*?)" + a + "(\\^|\\#)\\s*(.+)\\s*" + b + "\n*([\\s\\S]*?)" + a + "\\/\\s*\\3\\s*" + b + "\\s*([\\s\\S]*)$", "g")
            });
            return a.replace(e, function(a, e, f, g, h, i) {
                var j = e ? d.render_tags(e, b, c, !0) : "",k = i ? d.render(i, b, c, !0) : "",l,m = d.find(g, b);
                return f === "^" ? !m || d.is_array(m) && m.length === 0 ? l = d.render(h, b, c, !0) : l = "" : f === "#" && (d.is_array(m) ? l = d.map(m,
                        function(a) {
                            return d.render(h, d.create_context(a), c, !0)
                        }).join("") : d.is_object(m) ? l = d.render(h, d.create_context(m), c, !0) : typeof m == "function" ? l = m.call(b, h, function(a) {
                    return d.render(a, b, c, !0)
                }) : m ? l = d.render(h, b, c, !0) : l = ""),j + l + k
            })
        },render_tags:function(a, b, c, d) {
            var e = this,f = function() {
                return e.getCachedRegex("render_tags", function(a, b) {
                    return new RegExp(a + "(=|!|>|\\{|%)?([^\\/#\\^][^#\\^]*?)\\1?" + b + "+", "g")
                })
            },g = f(),h = function(a, d, h) {
                switch (d) {
                    case"!":
                        return"";
                    case"=":
                        return e.set_delimiters(h),g = f(),"";
                    case">":
                        return e.render_partial(h, b, c);
                    case"{":
                        return e.find(h, b);
                    default:
                        return e.escape(e.find(h, b))
                }
            },i = a.split("\n");
            for (var j = 0; j < i.length; j++)i[j] = i[j].replace(g, h, this),d || this.send(i[j]);
            if (d)return i.join("\n")
        },set_delimiters:function(a) {
            var b = a.split(" ");
            this.otag = this.escape_regex(b[0]),this.ctag = this.escape_regex(b[1])
        },escape_regex:function(a) {
            if (!arguments.callee.sRE) {
                var b = ["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
                arguments.callee.sRE = new RegExp("(\\" + b.join("|\\") + ")", "g")
            }
            return a.replace(arguments.callee.sRE, "\\$1")
        },find:function(a, b) {
            function c(a) {
                return a || a === !1 || a === 0
            }

            a = this.trim(a);
            var d;
            return c(b[a]) ? d = b[a] : c(this.context[a]) && (d = this.context[a]),typeof d == "function" ? d.apply(b) : d !== undefined ? d : ""
        },includes:function(a, b) {
            return b.indexOf(this.otag + a) != -1
        },escape:function(a) {
            return a = String(a === null ? "" : a),a.replace(/&(?!\w+;)|["'<>\\]/g, function(a) {
                switch (a) {
                    case"&":
                        return"&amp;";
                    case'"':
                        return"&quot;";
                    case"'":
                        return"&#39;";
                    case"<":
                        return"&lt;";
                    case">":
                        return"&gt;";
                    default:
                        return a
                }
            })
        },create_context:function(a) {
            if (this.is_object(a))return a;
            var b = ".";
            this.pragmas["IMPLICIT-ITERATOR"] && (b = this.pragmas["IMPLICIT-ITERATOR"].iterator);
            var c = {};
            return c[b] = a,c
        },is_object:function(a) {
            return a && typeof a == "object"
        },is_array:function(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        },trim:function(a) {
            return a.replace(/^\s*|\s*$/g, "")
        },map:function(a, b) {
            if (typeof a.map == "function")return a.map(b);
            var c = [],d = a.length;
            for (var e = 0; e < d; e++)c.push(b(a[e]));
            return c
        },getCachedRegex:function(b, c) {
            var d = a[this.otag];
            d || (d = a[this.otag] = {});
            var e = d[this.ctag];
            e || (e = d[this.ctag] = {});
            var f = e[b];
            return f || (f = e[b] = c(this.otag, this.ctag)),f
        }},{name:"mustache.js",version:"0.3.1-dev-twitter-c-i18n",to_html:function(a, c, d, e) {
            var f = new b;
            e && (f.send = e),f.render(a, c || {}, d);
            if (!e)return f.buffer.join("\n")
        }}
    }()
}),provide("debug/mustache", function(a) {
    using("$lib/mustache.js", function() {
        a(Mustache)
    })
}),"use strict",provide("debug/debug", function(a) {
    using("debug/mustache", "core/jquery", "core/registry", "core/fn", function(b, $, c, d) {
        var e = function() {
            function e(a, b, c) {
                var c = c || {},d = c.obj || window,f = c.path || (d == window ? "window" : ""),h = Object.keys(d);
                h.forEach(function(c) {
                    (g[a] || a)(b, d, c) && console.log([f,".",c].join(""), "->", ["(",typeof d[c],")"].join(""), d[c]),Object.prototype.toString.call(d[c]) == "[object Object]" && d[c] != d && f.split(".").indexOf(c) == -1 && e(a, b, {obj:d[c],path:[f,c].join(".")})
                })
            }

            function f(a, b, c, d) {
                !b || typeof c == b ? e(a, c, d) : console.error([c,"must be",b].join(" "))
            }

            function h(a, b) {
                f("name", "string", a, b)
            }

            function i(a, b) {
                f("nameContains", "string", a, b)
            }

            function j(a, b) {
                f("type", "function", a, b)
            }

            function k(a, b) {
                f("value", null, a, b)
            }

            function l(a, b) {
                f("valueCoerced", null, a, b)
            }

            function m(a, b) {
                e(a, null, b)
            }

            function o() {
                var b = [].slice.call(arguments, 0);
                a.eventNames.length || (a.eventNames = "all"),a.actions = b.length ? b : "all"
            }

            function p() {
                var b = [].slice.call(arguments, 0);
                a.actions.length || (a.actions = "all"),a.eventNames = b.length ? b : "all"
            }

            function q() {
                a.actions = [],a.eventNames = []
            }

            function r() {
                a.actions = "all",a.eventNames = "all"
            }

            function z(a, b, c) {
                $.ajax({url:"/swift/debug/ui/" + a + ".mustache",success:function(d) {
                            t[a] = d,b.call(c, d)
                        },error:function() {
                            throw{status:status}
                        },dataType:"text"})
            }

            function A(a) {
                var c = b.to_html(a, y[s]);
                B(),$(u).fadeIn(),E(function() {
                    this.document.body.innerHTML = c,this.createHandlers()
                })
            }

            function B() {
                u || (u = $("<iframe></iframe>").css({position:"fixed","background-color":"rgba(255,255,255,.85)","border-right":"1px solid rgba(0,0,0,.3)","background-clip":"padding-box","box-shadow":"0 0 10px rgba(0,0,0,.2)",top:0,left:0,width:"400px",height:"100%","z-index":"1000"})[0],u.src = "/swift/debug/ui/frame/frame.html",E(function() {
                    this.remoteHandlers = {highlightComponentNode:F,unhighlightComponentNode:G,highlightEventNode:H,unhighlightEventNode:I,updateEventPersistence:J,updateDontHighlight:K,hideFrame:L}
                }),document.body.appendChild(u))
            }

            function C() {
                c.events.forEach(function(a) {
                    a.index == null && (a.index = v++,$(document).on(a.type, function() {
                        w.indexOf(a.type) < 0 && u.contentWindow.highlightEventInDebugger(a.index, x * 1e3)
                    }))
                })
            }

            function D(a, b) {
                var d,e = c.allInstances[a.index()];
                return b ? d = e.events[b.index()].element : d = e.instance.node,d.body || d
            }

            function E(a) {
                var b = setInterval(function() {
                    u.contentWindow.document.body && (clearInterval(b),a.apply(u.contentWindow))
                }, 100)
            }

            function F(a) {
                M($(a.target).closest("ul"))
            }

            function G(a) {
                N($(a.target).closest("ul"))
            }

            function H(a) {
                var b = $(a.target);
                M(b.closest("ul.component"), b.closest("li"))
            }

            function I(a) {
                var b = $(a.target);
                N(b.closest("ul.component"), b.closest("li"))
            }

            function J(a) {
                x = this.value
            }

            function K() {
                w = this.value.split(", ")
            }

            function L(a) {
                $(u).fadeOut()
            }

            function M(a, b) {
                var c = $(D(a, b)),d,e = b ? " blue" : " #6f2073";
                c[0] == document.body ? d = {"box-shadow":"inset 0 0 40px 5px" + e} : d = {outline:"5px dashed " + e},c.css(d)
            }

            function N(a, b) {
                var c = $(D(a, b));
                c.css(c[0] == document.body ? "box-shadow" : "outline", "")
            }

            function O(a) {
                a && (s = a),t[s] ? A(t[s]) : z(s, A),C()
            }

            var a,g = {name:function(a, b, c) {
                return a == c
            },nameContains:function(a, b, c) {
                return c.indexOf(a) > -1
            },type:function(a, b, c) {
                return b[c]instanceof a
            },value:function(a, b, c) {
                return b[c] === a
            },valueCoerced:function(a, b, c) {
                return b[c] == a
            }},n = document.cookie.indexOf("swift_event_logging=all") == -1 ? [] : "all";
            a = {actions:n,eventNames:n};
            var s = "components",t = {},u,v = 0,w = ["click","mouseenter","mouseleave"],x = 2,y = {components:{instanceInfos:c.allInstances,dontHighlightString:w.join(", "),eventPersistence:x}};
            return $(document).on("keyup", function(a) {
                a.which == 68 && a.target == document.body && O()
            }),$(document).on("componentInitialized", d.debounce(function(a) {
                $(u).is(":visible") && setTimeout(O, 2500)
            }, 100)),$(document).on("componentTornDown", d.debounce(function(a) {
                $(u).is(":visible") && setTimeout(O, 2500)
            }, 100)),{find:{byName:h,byNameContains:i,byType:j,byValue:k,byValueCoerced:l,custom:m},events:{logFilter:a,logByAction:o,logByName:p,logAll:r,logNone:q},ui:O}
        }();
        a(e)
    })
}),"use strict",provide("app/utils/querystring", function(a) {
    function b(a) {
        return encodeURIComponent(a).replace(/\+/g, "%2B")
    }

    function c(a) {
        return decodeURIComponent(a)
    }

    function d(a) {
        var c = [];
        for (var d in a)a[d] !== null && typeof a[d] != "undefined" && c.push(b(d) + "=" + b(a[d]));
        return c.sort().join("&")
    }

    function e(a) {
        var b = {},d,e,f,g;
        if (a) {
            d = a.split("&");
            for (g = 0; f = d[g]; g++)e = f.split("="),e.length == 2 && (b[c(e[0])] = c(e[1]))
        }
        return b
    }

    a({decode:e,encode:d,encodePart:b,decodePart:c})
}),"use strict",provide("app/utils/params", function(a) {
    using("app/utils/querystring", function(b) {
        var c = function(a) {
            var c = a.search.substr(1);
            return b.decode(c)
        },d = function(a) {
            var c = a.href,d = c.indexOf("#"),e = d < 0 ? "" : c.substring(d + 1);
            return b.decode(e)
        },e = function(a) {
            var b = {},e = c(a),f = d(a);
            for (var g in e)e.hasOwnProperty(g) && (b[g] = e[g]);
            for (var g in f)f.hasOwnProperty(g) && (b[g] = f[g]);
            return b
        };
        a({combined:e,fromQuery:c,fromFragment:d})
    })
}),"use strict",provide("app/utils/auth_token", function(a) {
    var b;
    a({get:function() {
                if (!b)throw new Error("authToken should have been set!");
                return b
            },set:function(a) {
                b = a
            },addTo:function(a) {
                return a.authenticity_token = b,a
            }})
}),define("app/data/scribe_transport", ["module","require","exports","core/jquery"], function(a, b, c) {
    function d(a) {
        this.SESSION_BUFFER_KEY = "ScribeTransport",this.SCRIBE_API_ENDPOINT = "/scribe",this.options = {},a && (this.updateOptions(a),this.registerEventHandlers(a))
    }

    "use strict";
    var $ = b("core/jquery");
    d.prototype = {flush:function(a, b) {
        if (!a || !a.length)return;
        b === undefined && (b = !!this.options.sync),this.options.useAjax ? $.ajax({url:this.options.url,data:this.ajaxParams(a),type:"POST",async:!b}) : (new Image).src = this.options.url + "/?q=" + (+(new Date)).toString().slice(-4) + "&" + this.imageParams(a),this.reset()
    },ajaxParams:function(a) {
        if (typeof a == "string")return{log:"[" + a + "]"};
        var b = this.options.encodeParameters;
        return b && typeof b == "function" ? b.apply(this, arguments) : {log:JSON.stringify(a)}
    },imageParams:function(a) {
        if (typeof a == "string")return"log=%5B" + a + "%5D";
        var b = this.options.encodeParameters;
        return b && typeof b == "function" ? b.apply(this, arguments) : "log=" + encodeURIComponent(JSON.stringify(a))
    },reset:function() {
        this.options.bufferEvents && (this.skipUnloadFlush = !1,sessionStorage.removeItem(this.options.bufferKey))
    },getBuffer:function() {
        return sessionStorage.getItem(this.options.bufferKey) || ""
    },send:function(a, b, c) {
        if (!b || !a || this.options.bufferSize < 0)return;
        a._category_ = b;
        if (c || !this.options.bufferEvents || !this.options.bufferSize)this.flush([a], c); else {
            var d = JSON.stringify(a);
            this.options.useAjax || (d = encodeURIComponent(d));
            var e = this.getBuffer(),f = e + (e ? this.SEPARATOR + d : d);
            this.options.bufferSize && this.fullBuffer(f) ? this.options.useAjax ? this.flush(f) : (this.flush(e),sessionStorage.setItem(this.options.bufferKey, d)) : sessionStorage.setItem(this.options.bufferKey, f)
        }
        this.postToConsole(a),Math.random() < this.options.metrics && a.event_info != "debug" && $(document).trigger("debugscribe", a)
    },fullBuffer:function(a) {
        return a.length >= (this.options.useAjax ? this.options.bufferSize * 2083 : 2050 - this.options.url.length)
    },updateOptions:function(a) {
        this.options = $.extend({}, this.options, a),this.options.flushOnUnload === undefined && (this.options.flushOnUnload = !0),this.options.bufferKey || (this.options.bufferKey = this.SESSION_BUFFER_KEY),this.options.bufferSize === 0 && (this.options.bufferEvents = !1),this.options.useAjax === undefined && (this.options.useAjax = !0);
        if (this.options.bufferEvents || this.options.bufferEvents == undefined)try {
            sessionStorage.setItem(this.SESSION_BUFFER_KEY + ".init", "test");
            var b = sessionStorage.getItem(this.SESSION_BUFFER_KEY + ".init") == "test";
            sessionStorage.removeItem(this.SESSION_BUFFER_KEY + ".init"),this.options.bufferEvents = b
        } catch(c) {
            this.options.bufferEvents = !1
        }
        var d = window.location.protocol === "https:" ? "https:" : "http:";
        this.options.url === undefined ? this.options.useAjax ? this.options.url = this.SCRIBE_API_ENDPOINT : this.options.url = d + "//twitter.com" + this.SCRIBE_API_ENDPOINT : this.options.url = this.options.url.replace(/^[a-z]+:/g, d).replace(/\/$/, ""),this.options.bufferEvents && this.options.bufferSize === undefined && (this.options.bufferSize = 20)
    },appHost:function() {
        return window.location.host
    },registerEventHandlers:function() {
        var a = this,b = $(document);
        if (this.options.bufferEvents) {
            b.on("flushscribe." + a.options.bufferKey, function(b) {
                a.flush(a.getBuffer(), !0)
            });
            if (this.options.flushOnUnload) {
                var c = function(b) {
                    a.skipUnloadFlush = !b || !b.match(/http/) || !!b.match(new RegExp("^https?://" + a.appHost(), "gi")),a.skipUnloadFlush && window.setTimeout(function() {
                        a.skipUnloadFlush = !1
                    }, 3e3)
                };
                b.on("mouseup." + this.options.bufferKey, "a", function(a) {
                    if (this.getAttribute("target") || a.button || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey)return;
                    c(this.getAttribute("href"))
                }),b.on("submit." + this.options.bufferKey, "form", function(a) {
                    c(this.getAttribute("action"))
                }),b.on("uiNavigate." + this.options.bufferKey, function(a, b) {
                    c(b.url)
                }),$(window).on("unload." + this.options.bufferKey, function() {
                    a.skipUnloadFlush || a.flush(a.getBuffer(), !0),a.skipUnloadFlush = !1
                })
            }
        }
        this.options.debug && window.postMessage && $(document).keypress(function(a) {
            if (a.charCode == 205 && a.shiftKey && a.altKey) {
                var b = "menubar=no,toolbar=no,personalbar=no,location=no,resizable=yes,status=no,dependent=yes,height=600,width=600,screenX=100,screenY=100,scrollbars=yes",c = window.location.host;
                if (!c || !c.match(/^(staging[0-9]+\.[^\.]+\.twitter.com|twitter\.com|localhost\.twitter\.com\:[0-9]+)$/))c = "twitter.com";
                window.scribeConsole = window.open(window.location.protocol + "//" + c + "/scribe/console", "scribe_console", b)
            }
        }),this.SEPARATOR = this.options.useAjax ? "," : encodeURIComponent(",")
    },postToConsole:function(a) {
        if (this.options.debug && window.scribeConsole && window.scribeConsole.postMessage) {
            var b = window.location.protocol + "//" + window.location.host;
            try {
                window.scribeConsole.postMessage(a, b)
            } catch(c) {
                var d = "ScribeTransport.postToConsole - Scribe Console error or unserializable data [" + a._category_ + "]";
                console.error(d, a)
            }
        }
    },destroy:function() {
        this.flush(this.getBuffer()),$(document).off("flushscribe." + this.options.bufferKey),$(window).off("unload." + this.options.bufferKey),$(document).off("mouseup." + this.options.bufferKey),$(document).off("submit." + this.options.bufferKey),$(document).off("uiNavigate." + this.options.bufferKey)
    }},a.exports = new d
}),define("app/data/client_event", ["module","require","exports","app/data/scribe_transport","core/jquery"], function(a, b, c) {
    function e(a) {
        this.scribeContext = {},this.scribeData = {},this.scribe = function(b, c) {
            var d = a || window.scribeTransport;
            if (!d)throw new Error("You must create a global scribeTransport variable or pass one into this constructor.");
            if (!b || typeof b != "object" || c && typeof c != "object")throw new Error("Invalid terms or data hash argument when calling ClientEvent.scribe().");
            if (this.scribeContext) {
                var e = typeof this.scribeContext == "function" ? this.scribeContext() : this.scribeContext;
                b = $.extend({}, e, b)
            }
            for (var f in b)b[f] = b[f] && ("" + b[f]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g, "_");
            d.options.debug && $.each(["client","page","section","action"], function(a, c) {
                if (!b[c])throw new Error("You must specify a " + c + " term in your client_event.")
            });
            var c = $.extend({}, c);
            if (this.scribeData) {
                var g = typeof this.scribeData == "function" ? this.scribeData() : this.scribeData;
                c = $.extend({}, g, c)
            }
            c.event_namespace = b,c.triggered_on = c.triggered_on || +(new Date),c.format_version = 1,d.send(c, "client_event")
        }
    }

    "use strict";
    var d = b("app/data/scribe_transport"),$ = b("core/jquery");
    a.exports = new e(d)
}),define("app/data/with_scribe", ["module","require","exports","app/data/client_event","core/utils","core/jquery"], function(a, b, c) {
    function f() {
        function a(a) {
            if (!a)return;
            a = a.sourceEventData ? a.sourceEventData : a;
            if (a.scribeContext || a.scribeData)return a
        }

        this.scribe = function() {
            var b = Array.prototype.slice.call(arguments),c,d,f,g,h;
            c = typeof b[0] == "string" ? {action:b[0]} : b[0],b.shift();
            if (b[0]) {
                f = b[0],f.sourceEventData && (f = f.sourceEventData);
                if (f.scribeContext || f.scribeData)g = f.scribeContext,h = f.scribeData;
                (b[0].scribeContext || b[0].scribeData || b[0].sourceEventData || b.length === 2) && b.shift()
            }
            c = e.merge({}, g, c),d = typeof b[0] == "function" ? b[0].bind(this)(f) : b[0],d = e.merge({format_version:1,triggered_on:+(new Date)}, h, d),this.transport(c, d)
        },this.scribeOnEvent = function(b, c, d) {
            this.on(b, function(a, b) {
                b = b || {},this.scribe(c, b.sourceEventData || b, d)
            })
        },this.transport = function(b, c) {
            d.scribe(b, c)
        }
    }

    "use strict";
    var d = b("app/data/client_event"),e = b("core/utils"),$ = b("core/jquery");
    a.exports = f
}),define("app/data/scribe_monitor", ["module","require","exports","core/component","app/data/client_event","app/data/with_scribe","core/utils","core/jquery"], function(a, b, c) {
    function h() {
        this.bufferedScribeDebug = function(a, b) {
            this.scribe(g.merge({component:"buffered"}, a), {event_info:"debug",event_initiator:2})
        },this.imageScribeDebug = function(a, b) {
            b.event_namespace = g.merge({component:"image_beacon"}, a),b.event_initiator = 2,(new Image).src = window.location.protocol + "//" + window.location.host + "/scribe/?ts=" + +(new Date) + "&log%5B%5D=" + encodeURIComponent(JSON.stringify(b))
        },this.asyncAjaxScribeDebug = function(a, b) {
            this.ajaxScribeDebug(a, b, !0)
        },this.syncAjaxScribeDebug = function(a, b) {
            this.ajaxScribeDebug(a, b, !1)
        },this.ajaxScribeDebug = function(a, b, c) {
            b.event_namespace = g.merge({component:c ? "asynchronous_ajax" : "synchronous_ajax"}, a),b.event_initiator = 2,$.ajax({url:"/scribe",data:{log:[JSON.stringify(b)]},type:"POST",async:c})
        };
        var a = ["bufferedScribeDebug","imageScribeDebug","syncAjaxScribeDebug","asyncAjaxScribeDebug"];
        this.after("initialize", function() {
            if (Math.random() <= this.attr.userFraction) {
                this.scribe({component:"buffered_page_impression",action:"debug"}, {event_info:"debug",event_initiator:2});
                var b = {event_namespace:{client:"web",page:e.scribeContext.page,section:e.scribeContext.section,component:"ajax_page_impression",action:"debug"},event_info:"debug",event_initiator:2,_category_:"client_event"};
                $.ajax({url:"/scribe",data:{log:[JSON.stringify(b)]},type:"POST"})
            }
            this.on("debugscribe", function(b, c) {
                if (c["_category_"] == "client_event") {
                    c.event_info = "debug";
                    var d = {client:"web",page:c.event_namespace.page,section:c.event_namespace.section,action:"debug"};
                    this[a[Math.floor(Math.random() * 4)]](d, c)
                }
            })
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/client_event"),f = b("app/data/with_scribe"),g = b("core/utils"),$ = b("core/jquery");
    a.exports = d(h, f)
}),define("app/data/ddg", ["module","require","exports","app/data/client_event","core/jquery"], function(a, b, c) {
    function e(a, b) {
        this.experiments = a || {},this.impressions = {},this.scribeExperiment = function(a, c, d) {
            var e = $.extend({page:"ddg",section:a.experiment_key,component:"",element:""}, c);
            d = d || {},d.experiment_key = a.experiment_key,d.bucket = a.bucket,d.version = a.version,(b || window.clientEvent).scribe(e, d)
        },this.impression = function(a) {
            var b = this.experiments[a];
            b && (a = b.experiment_key,this.impressions[a] || (this.scribeExperiment(b, {action:"experiment"}),this.impressions[a] = !0))
        },this.track = function(a, b, c) {
            if (!b)throw new Error("You must specify an event name to track custom DDG events. Event names should be lower-case, snake_cased strings.");
            var d = this.experiments[a];
            d && this.scribeExperiment(d, {element:b,action:"track"}, c)
        },this.bucket = function(a) {
            var b = this.experiments[a];
            return b ? b.bucket : ""
        }
    }

    "use strict";
    var d = b("app/data/client_event"),$ = b("core/jquery");
    a.exports = new e({}, d)
}),define("app/ui/with_interaction_data", ["module","require","exports","core/utils","core/jquery"], function(a, b, c) {
    function e() {
        this.defaultAttrs({expandoItemSelector:".simple-tweet",repliesContainerSelector:".replies-to",conversationContainerSelector:".in-reply-to",storySocialProofSelector:".js-story-item .js-expando-content",expandoContainerSelector:".replies-to, .in-reply-to, .js-expando-content",streamItemContainerSelector:".js-stream-item",activitySupplimentSelector:".activity-supplement",activityTargetSelector:".activity-truncated-tweet .js-actionable-tweet, .js-activity-list_member_added [data-list-id]",activityItemSelector:".js-activity",itemAvatarSelector:".js-action-profile-avatar, .avatar.size48",itemSmallAvatarSelector:".avatar.size24, .avatar.size32",itemMentionSelector:".twitter-atreply",discoveryStoryItemSelector:".js-story-item",discoveryStoryHeadlineSelector:".js-news-headline a",originalTweetSelector:".js-original-tweet[data-tweet-id]",promotedBadgeSelector:".js-promoted-badge"});
        var a = {feedbackToken:"data-feedback-token",impressionId:"data-impression-id",impressionCookie:"data-impression-cookie",relevanceType:"data-relevance-type"},b = d.merge({tweetId:"data-tweet-id",retweetId:"data-retweet-id",isReplyTo:"data-is-reply-to"}, a),c = d.merge({activityType:"data-activity-type",itemKey:"data-item-key"}, b),e = d.merge({storyType:"data-story-type",query:"data-query",url:"data-url",storySource:"data-source",storyMediaType:"data-card-media-type",itemKey:"data-item-key"}, b);
        this.interactionData = function(a, b) {
            var c = {},e = {},f = a.target ? $(a.target) : $(a);
            b = b || {},this.attr.eventData && (c = this.attr.eventData.scribeContext,e = this.attr.eventData.scribeData);
            var g = d.merge(this.getEventData(f), b);
            c = d.merge({}, c, this.getScribeContext(f, g));
            if (this.attr.itemType == "tweet" && (c.component == "replies" || c.component == "conversation")) {
                var h = f.closest(this.attr.streamItemContainerSelector).find(this.attr.originalTweetSelector);
                h.length && (g.conversationOriginTweetId = h.attr("data-tweet-id"))
            }
            return d.merge({scribeContext:c,scribeData:e}, g)
        },this.getScribeContext = function(a, b) {
            if (this.attr.itemType == "user")return;
            var c = {},d = this.getExpandoComponent(a, b);
            d ? c.component = d : this.attr.itemType == "activity" ? c.component = b.activityType + "_activity" : this.attr.itemType == "story" && (c.component = b.storyType + "_story");
            var e = a.closest(".has-cards").find(".cards-base").data("card-type");
            e !== null && e !== undefined && (c.element = "platform_" + e + "_card");
            if (c.element || c.component)return c
        },this.getExpandoComponent = function(a, b) {
            if (a.closest(this.attr.repliesContainerSelector).length)return"replies";
            if (a.closest(this.attr.conversationContainerSelector).length)return"conversation";
            if (a.closest(this.attr.storySocialProofSelector).length)return b.storySource === "trends" ? "top_tweets" : "social_context"
        },this.getInteractionItemPosition = function(a, b) {
            if (b && b.position >= 0)return b.position;
            var c = this.getItemPosition && this.getItemPosition(a);
            return c >= 0 ? c : (c = this.getExpandoPosition(a),c != -1 ? c : this.getStreamPosition(a))
        },this.getExpandoPosition = function(a) {
            var b = a.closest(this.attr.expandoContainerSelector);
            return b.length ? b.find(this.attr.expandoItemSelector).index(a.closest(this.attr.expandoItemSelector)) : -1
        },this.getStreamPosition = function(a) {
            var b = a.closest(this.attr.genericItemSelector).index();
            if (b != -1)return b
        },this.getEventData = function(c) {
            var d;
            switch (this.attr.itemType) {
                case"activity":
                    return this.getActivityEventData(c);
                case"story":
                    return this.getStoryEventData(c);
                case"user":
                    return this.getDataAttrs(c, a);
                case"tweet":
                    return this.getDataAttrs(c, b);
                default:
                    return console.warn('You must configure your UI component with an "itemType" attribute of activity, story, user, or tweet in order for it to scribe properly.'),{}
            }
        },this.getActivityEventData = function(a) {
            var b = a.closest(this.attr.activityItemSelector).find(this.attr.activityTargetSelector);
            b.length || (b = a);
            var d = this.getDataAttrs(a, c, b);
            return d.activityType === "list_member_added" && (d.activityType = "list"),d.activityType || (d.isReplyTo ? d.activityType = "reply" : d.activityType = d.retweetId ? "retweet" : "mention"),d
        },this.getStoryEventData = function(a) {
            var b = this.getDataAttrs(a, e),c = a.closest(this.attr.discoveryStoryItemSelector),d = c.find(this.attr.discoveryStoryHeadlineSelector).text();
            return b.storyTitle = d.replace(/^\s+|\s+$/g, ""),b
        },this.getDataAttrs = function(a, b, c) {
            var e = {};
            return c = c || a,$.each(b, function(a, b) {
                c.is("[" + b + "]") ? e[a] = c.attr(b) : e[a] = c.closest("[" + b + "]").attr(b)
            }),e.isReplyTo = e.isReplyTo === "true",e = d.merge(e, {position:this.getInteractionItemPosition(a, e),isMentionClick:a.closest(this.attr.itemMentionSelector).length > 0,isPromotedBadgeClick:a.closest(this.attr.promotedBadgeSelector).length > 0,itemType:this.attr.itemType}),a.is(this.attr.itemAvatarSelector) ? e.profileClickTarget = "avatar" : a.is(this.attr.itemSmallAvatarSelector) ? e.profileClickTarget = "mini_avatar" : e.profileClickTarget = "screen_name",e.userId = a.closest("[data-user-id]").attr("data-user-id"),e
        }
    }

    "use strict";
    var d = b("core/utils"),$ = b("core/jquery");
    a.exports = e
}),define("app/utils/scribe_item_types", ["module","require","exports"], function(a, b, c) {
    "use strict",a.exports = {tweet:0,promotedTweet:1,popularTweet:2,retweet:10,user:3,promotedUser:4,message:6,story:7,trend:8,promotedTrend:9,list:11,search:12,savedSearch:13,peopleSearch:14}
}),define("app/utils/scribe_association_types", ["module","require","exports"], function(a, b, c) {
    "use strict",a.exports = {associatedTweet:1,platformCardPublisher:2,platformCardCreator:3,conversationOrigin:4}
}),define("app/data/with_interaction_data_scribe", ["module","require","exports","core/compose","app/data/with_scribe","core/jquery","app/utils/scribe_item_types","app/utils/scribe_association_types","core/utils"], function(a, b, c) {
    function i() {
        d.mixin(this, [e]),this.scribeInteraction = function(a, b, c) {
            var d = [],e = [],i = [],j = {};
            if (!a || !b)return;
            typeof a == "string" && (a = {action:a});
            if (!a.action)return;
            b = h.merge(b, b.sourceEventData),this.insertInteractionData(b, a, d, e, i, j),a = this.getInteractionScribeContext(a, b),c = h.merge({item_ids:d.length ? d : null,item_names:e.length ? e : null,tokens:i.length ? i : null,item_count:1,item_details:j,url:b.url,query:b.query,promoted:!!b.impressionId,message:b.storyTitle}, c, b.scribeData),b.conversationOriginTweetId && (c.associations = c.associations || {},c.associations[g.conversationOrigin] = {association_id:b.conversationOriginTweetId,association_type:f.tweet}),this.scribe(a, b, c)
        },this.insertInteractionData = function(a, b, c, d, e, g, h) {
            var i,j,k,l,m;
            switch (a.itemType) {
                case"user":
                    c.push(a.userId),j = f.user,m = a.userId;
                    break;
                case"tweet":
                    c.push(a.tweetId),j = f.tweet,m = a.tweetId;
                    break;
                case"activity":
                    a.activityType === "follow" ? (c.push(a.userId),j = f.user) : a.listId ? (c.push(a.listId),j = f.list) : (c.push(a.tweetId),j = f.tweet),a.itemKey && d.push(a.itemKey),l = a.activityType,m = a.itemKey;
                    break;
                case"story":
                    a.tweetId || a.userId ? (c.push(a.tweetId || a.userId),j = a.tweetId ? f.tweet : f.user) : j = f.story,a.itemKey && d.push(a.itemKey),l = a.storyType,m = a.itemKey
            }
            a.itemType === "user" || this.isUserTarget(b.action) ? (i = a.userId,k = f.user) : a.listId ? (i = a.listId,k = f.list) : a.retweetId ? (j = f.retweet,i = a.retweetId,k = f.tweet) : a.tweetId ? (i = a.tweetId,k = f.tweet) : k = j,(a.feedbackToken || a.storySource) && e.push(a.feedbackToken || a.storySource),a.impressionId && (j === f.tweet || j === f.user) && (i === c[0] && k === j && k++,j++),a.relevanceType && j === f.tweet && (j = f.popularTweet,k === f.tweet && (k = f.popularTweet));
            if (m) {
                if (h && this.isMundaneType(a, j, k))return;
                g[m] = {item_type:j,target_id:i,target_type:k,item_position:a.position,item_token:a.impressionId,item_description:l}
            }
        },this.isMundaneType = function(a, b, c) {
            return(a.itemType === "user" || a.itemType === "tweet") && (b === f.user || b === f.tweet) && (c === f.user || c === f.tweet)
        },this.isUserTarget = function(a) {
            return["mention_click","profile_click","follow","unfollow","block","unblock","report_as_spam","add_to_list","dm","not_spam","undo_report_as_spam"].indexOf(a) != -1
        },this.getInteractionScribeContext = function(a, b) {
            return a.action == "profile_click" && (a.element = b.isPromotedBadgeClick ? "promoted_badge" : b.profileClickTarget),a
        },this.scribeInteractiveResults = function(a, b, c, d) {
            var e = [],f = [],g = [],i = !1,j = {};
            typeof a == "string" && (a = {action:a});
            if (!a.action || !b)return;
            b.length || (a.action = "no_results"),b.forEach(function(b) {
                i || (i = !!b.impressionId),this.insertInteractionData(b, a, e, f, g, j, !0)
            }.bind(this)),a = this.getInteractionScribeContext(a, c),d = h.merge({item_ids:e.length ? e : null,item_names:f.length ? f : null,tokens:g.length ? g : null,item_count:b.length,item_details:j,promoted:i}, d),this.scribe(a, c, d)
        }
    }

    "use strict";
    var d = b("core/compose"),e = b("app/data/with_scribe"),$ = b("core/jquery"),f = b("app/utils/scribe_item_types"),g = b("app/utils/scribe_association_types"),h = b("core/utils");
    a.exports = i
}),define("app/data/tweet_actions_scribe", ["module","require","exports","core/component","core/jquery","core/utils","app/ui/with_interaction_data","app/data/with_interaction_data_scribe"], function(a, b, c) {
    function h() {
        this.scribeTweet = function(a) {
            return function(b, c) {
                this.scribeInteraction({action:a}, e.merge(c, c.sourceEventData))
            }.bind(this)
        },this.after("initialize", function() {
            this.on("uiReplyButtonTweetSuccess", this.scribeTweet("reply")),this.on("uiDidRetweetSuccess", this.scribeTweet("retweet")),this.on("uiDidDeleteTweet", this.scribeTweet("delete")),this.on("dataDidFavoriteTweet", this.scribeTweet("favorite")),this.on("dataDidUnfavoriteTweet", this.scribeTweet("unfavorite")),this.on("dataDidUnretweet", this.scribeTweet("unretweet"))
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("core/utils"),f = b("app/ui/with_interaction_data"),g = b("app/data/with_interaction_data_scribe");
    a.exports = d(h, f, g)
}),define("app/data/user_actions_scribe", ["module","require","exports","core/component","core/jquery","app/data/with_interaction_data_scribe"], function(a, b, c) {
    function f() {
        this.defaultAttrs({urlToActionMap:{"/i/user/follow":"follow","/i/user/unfollow":"unfollow","/i/user/block":"block","/i/user/unblock":"unblock","/i/user/report_spam":"report_as_spam","/i/user/undo_report_spam":"undo_report_as_spam","/i/user/hide":"dismiss"},userActionToActionMap:{uiMentionAction:"reply",uiDmAction:"dm",uiListAction:"add_to_list",uiNotSpamAction:"not_spam",uiUndoReportSpamAction:"undo_report_as_spam"}}),this.handleUserEvent = function(a, b) {
            this.scribeInteraction(this.attr.urlToActionMap[b.requestUrl], b)
        },this.handleAction = function(a, b) {
            this.scribeInteraction(this.attr.userActionToActionMap[a.type], b)
        },this.after("initialize", function() {
            this.on(document, "dataFollowStateChange dataUserActionSuccess", this.handleUserEvent),this.on(document, "uiMentionAction uiListAction uiDmAction uiNotSpamAction", this.handleAction)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/data/with_interaction_data_scribe");
    a.exports = d(f, e)
}),define("app/data/item_actions_scribe", ["module","require","exports","core/component","core/jquery","app/data/with_interaction_data_scribe","app/utils/scribe_association_types","app/utils/scribe_item_types"], function(a, b, c) {
    function h() {
        this.handleNewerTimelineItems = function(a, b) {
            this.scribeInteractiveResults({element:"newer",action:"results"}, b.items, b)
        },this.handleProfilePopup = function(a, b) {
            var c = b.sourceEventData,d = c.isMentionClick ? "mention_click" : "profile_click";
            c.userId = b.user_id,this.scribeInteraction(d, c)
        },this.scribeItemAction = function(a) {
            var b = this;
            return function(c, d) {
                b.scribeInteraction(a, d)
            }
        },this.scribeCardAction = function(a, b, c) {
            if (!c || !c.tweetHasCard)return;
            var d = this.prepareCustomScribeData(c);
            this.scribeInteraction({element:"platform_" + c.cardType + "_card",action:a}, c, d)
        },this.prepareCustomScribeData = function(a) {
            var b = {associations:{}};
            return b.associations[f.platformCardPublisher] = {association_id:a.publisherUserId,association_type:g.user},b.associations[f.platformCardCreator] = {association_id:a.creatorUserId,association_type:g.user},b.message = a.cardUrl,b
        },this.after("initialize", function() {
            this.on(document, "uiHasInjectedNewTimeline", this.handleNewerTimelineItems),this.on(document, "dataProfilePopupSuccess", this.handleProfilePopup),this.on(document, "uiHashtagClick", this.scribeItemAction("search")),this.on(document, "uiItemLinkClick", this.scribeItemAction("open_link")),this.on(document, "uiItemSelected", this.scribeItemAction("select")),this.on(document, "uiItemDeselected", this.scribeItemAction("deselect")),this.on(document, "uiItemSelected", this.scribeCardAction.bind(this, "show")),this.on(document, "uiItemDeselected", this.scribeCardAction.bind(this, "hide")),this.on(document, "uiMapShow", this.scribeItemAction("show")),this.on(document, "uiMapClick", this.scribeItemAction("click"))
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/data/with_interaction_data_scribe"),f = b("app/utils/scribe_association_types"),g = b("app/utils/scribe_item_types");
    a.exports = d(h, e)
}),define("app/data/navigation_scribe", ["module","require","exports","core/component","app/data/with_scribe"], function(a, b, c) {
    function f() {
        this.scribeNav = function(a, b) {
            this.scribe("navigate", b, {url:b.url})
        },this.after("initialize", function() {
            this.on("uiNavigationLinkClick", this.scribeNav)
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/with_scribe");
    a.exports = d(f, e)
}),define("app/boot/scribing", ["module","require","exports","app/data/scribe_transport","app/data/scribe_monitor","app/data/client_event","app/data/ddg","app/data/tweet_actions_scribe","app/data/user_actions_scribe","app/data/item_actions_scribe","app/data/navigation_scribe"], function(a, b, c) {
    function l(a) {
        d.updateOptions({useAjax:!0,bufferEvents:!0,flushOnUnload:a.environment != "selenium",metrics:a.scribeMetrics / 1e4,bufferSize:a.environment == "selenium" ? 1e3 * a.scribeBufferSize : a.scribeBufferSize,debug:a.environment != "production"}),d.registerEventHandlers(),f.scribeContext = {client:"web",page:a.pageName,section:a.sectionName};
        var b;
        window.sessionStorage && (b = sessionStorage.getItem("ScribeTransport.internal_referer"),b && (sessionStorage.removeItem("ScribeTransport.internal_referer"),b = b.replace(/^\/#!?\/?$/, "/"))),f.scribeData = {internal_referer:b || a.internalReferer,client_version:"swift"},a.loggedIn || (f.scribeData.user_id = 0),g.experiments = a.experiments,a.scribeMetrics && e.attachTo(document, {userFraction:a.scribeMetrics / 1e4}),a.periodicScribeFlush && a.periodicScribeFlush > 0 && setInterval(function() {
            d.flush(d.getBuffer())
        }, a.periodicScribeFlush),h.attachTo(document),i.attachTo(document),j.attachTo(document),k.attachTo(document, a)
    }

    "use strict";
    var d = b("app/data/scribe_transport"),e = b("app/data/scribe_monitor"),f = b("app/data/client_event"),g = b("app/data/ddg"),h = b("app/data/tweet_actions_scribe"),i = b("app/data/user_actions_scribe"),j = b("app/data/item_actions_scribe"),k = b("app/data/navigation_scribe");
    a.exports = l
}),"use strict",provide("app/data/with_auth_token", function(a) {
    using("core/jquery", "app/utils/auth_token", "core/utils", function($, b, c) {
        function d() {
            this.addAuthToken = function(d) {
                if (!b.get())throw"addAuthToken requires a formAuthenticityToken";
                return d = d || {},c.merge(d, {authenticity_token:b.get()})
            },this.getAuthToken = function() {
                return this.attr.formAuthenticityToken
            }
        }

        a(d)
    })
}),"use strict",provide("app/data/with_data", function(a) {
    using("core/jquery", "core/compose", "core/i18n", "app/data/with_auth_token", function($, b, _, c) {
        function d() {
            b.mixin(this, [c]);
            var a = /Success$/,d = /Failure$/;
            this.createSuccessHandler = function(a, b) {
                return function(c) {
                    c.sourceEventData = b,typeof a == "function" ? a(c) : this.trigger(a, c)
                }.bind(this)
            },this.createErrorHandler = function(a, b) {
                return function(c) {
                    var d;
                    try {
                        d = JSON.parse(c.responseText),d && d.message && !this.attr.noShowError && this.trigger("uiShowError", d)
                    } catch(e) {
                        d = {}
                    }
                    d.message || (d.message = _("Internal server error.")),d.sourceEventData = b,typeof a == "function" ? a(d) : this.trigger(a, d)
                }.bind(this)
            },this.sortData = function(a) {
                if (!a || typeof a != "object")return a;
                var b = {},c = Object.keys(a).sort();
                return c.forEach(function(c) {
                    b[c] = a[c]
                }),b
            },this.JSONRequest = function(a, b) {
                ["url","eventData","data","success","error"].forEach(function(b) {
                    if (!a.hasOwnProperty(b))throw new Error("getJSONRequest called without required option: " + b, arguments)
                });
                var c = a.data;
                return["GET","POST"].indexOf(b) < 0 && (c = $.extend({_method:b}, c),b = "POST"),b == "POST" && (c = this.addAuthToken(c)),$.ajax($.extend(a, {url:a.url,data:this.sortData(c),dataType:"json",type:b,success:this.createSuccessHandler(a.success, a.eventData),error:this.createErrorHandler(a.error, a.eventData)}))
            },this.get = function(a) {
                return this.JSONRequest(a, "GET")
            },this.post = function(a) {
                return this.JSONRequest(a, "POST")
            },this.destroy = function(a) {
                return this.JSONRequest(a, "DELETE")
            }
        }

        a(d)
    })
}),"use strict",provide("app/data/promoted_logger", function(a) {
    using("core/component", "core/jquery", "app/data/with_data", function(b, $, c) {
        function e() {
            this.defaultAttrs({tweetHashtagLinkSelector:".tweet .twitter-hashtag",tweetLinkSelector:".tweet .twitter-timeline-link"}),this.logEvent = function(a, b) {
                this.get({url:"/i/promoted_content/log.json",data:a,eventData:{},headers:{"X-PHX":!0},success:"dataLogEventSuccess",error:"dataLogEventError",async:!b})
            },this.logPromotedTrendImpression = function(a, b) {
                var c = b.items,d = b.source;
                if (d == "clock")return;
                var e = c.filter(function(a) {
                    return!!a.promotedTrendId
                });
                if (!e.length)return;
                this.logEvent({event:"i",promoted_trend_id:e[0].promotedTrendId})
            },this.logPromotedTrendClick = function(a, b) {
                if (!b.promotedTrendId)return;
                this.logEvent({event:"c",promoted_trend_id:b.promotedTrendId}, !0)
            },this.logPromotedTweetImpression = function(a, b) {
                var c = b.tweets.filter(function(a) {
                    return a.impressionId
                });
                c.forEach(function(a) {
                    this.logEvent({event:"impression",impression_id:a.impressionId})
                }.bind(this))
            },this.logPromotedTweetLinkClick = function(a) {
                var b = $(a.target).closest("[data-impression-id]").attr("data-impression-id");
                if (!b)return;
                this.logEvent({event:"url_click",impression_id:b}, !0)
            },this.logPromotedTweetHashtagClick = function(a) {
                var b = $(a.target).closest("[data-impression-id]").attr("data-impression-id");
                if (!b)return;
                this.logEvent({event:"hashtag_click",impression_id:b})
            },this.logPromotedUserImpression = function(a, b) {
                var c = b.users.filter(function(a) {
                    return a.impressionId
                });
                c.forEach(function(a) {
                    this.logEvent({event:"impression",impression_id:a.impressionId})
                }.bind(this))
            },this.logPromotedUserClick = function(a, b) {
                var c = b.impressionId;
                if (!c)return;
                b.profileClickTarget === "avatar" ? this.logEvent({event:"profile_image_click",impression_id:c}) : b.isMentionClick ? this.logEvent({event:"user_mention_click",impression_id:c}) : b.isPromotedBadgeClick ? this.logEvent({event:"footer_profile",impression_id:c}) : this.logEvent({event:"screen_name_click",impression_id:c})
            },this.logPromotedUserDismiss = function(a, b) {
                var c = b.impressionId;
                if (!c)return;
                this.logEvent({event:"dismiss",impression_id:c})
            },this.logPromotedTweetDismiss = function(a, b) {
                var c = b.impressionId;
                if (!c)return;
                this.logEvent({event:"dismiss",impression_id:c})
            },this.logPromotedTweetDetails = function(a, b) {
                var c = b.impressionId;
                if (!c)return;
                this.logEvent({event:"view_details",impression_id:c})
            },this.after("initialize", function() {
                this.on("uiTrendsDisplayed", this.logPromotedTrendImpression),this.on("uiTrendSelected", this.logPromotedTrendClick),this.on("uiTweetsDisplayed", this.logPromotedTweetImpression),this.on("click", {tweetLinkSelector:this.logPromotedTweetLinkClick,tweetHashtagLinkSelector:this.logPromotedTweetHashtagClick}),this.on("uiHasExpandedTweet", this.logPromotedTweetDetails),this.on("uiTweetDismissed", this.logPromotedTweetDismiss),this.on("uiUsersDisplayed", this.logPromotedUserImpression),this.on("uiDismissUserRecommendation", this.logPromotedUserDismiss),this.on("uiShowProfilePopup", this.logPromotedUserClick)
            })
        }

        var d = b(e, c);
        a(d)
    })
}),define("app/ui/keyboard_shortcuts", ["module","require","exports","core/component","core/jquery","core/utils"], function(a, b, c) {
    function g() {
        var a = {13:"E",27:"X",190:".",37:"<",39:">"},b = {191:"?"},c = {f:"uiShortcutFavorite",r:"uiShortcutReply",t:"uiShortcutRetweet",j:"uiShortcutSelectNext",k:"uiShortcutSelectPrev",l:"uiShortcutCloseAll",".":"uiShortcutGotoTopOfScreen",X:"uiShortcutEsc",E:"uiShortcutEnter","<":"uiShortcutLeft",">":"uiShortcutRight",gh:"uiShortcutNavigateHome",ga:"uiShortcutNavigateActivity",gc:"uiShortcutNavigateConnect",gr:"uiShortcutNavigateMentions",gd:"uiShortcutNavigateDiscover",gp:"uiShortcutNavigateProfile",gf:"uiShortcutNavigateFavorites",gs:"uiShortcutNavigateSettings",gl:"uiShortcutNavigateLists",m:"uiShortcutShowDirectMessages",n:"uiShortcutShowTweetbox",gu:"uiShortcutShowGotoUser",gm:"uiShortcutShowDirectMessages",sp:"uiShortcutShowSearchPhotos",sv:"uiShortcutShowSearchVideos","?":"uiOpenKeyboardShortcutsDialog"};
        this.lastKey = "",this.isModifier = function(a) {
            return!!(a.shiftKey || a.metaKey || a.ctrlKey || a.altKey)
        },this.charFromKeyCode = function(c, d) {
            return d && b[c] ? b[c] : a[c] || String.fromCharCode(c).toLowerCase()
        },this.verifyKeys = function(a) {
            var b = this.charFromKeyCode(a.keyCode, a.shiftKey),d;
            return(d = c[this.lastKey + b] || c[b]) && b != this.lastKey ? (this.trigger(document, d, {fromShortcut:!0}),this.lastKey = "",!0) : (setTimeout(this.bind(function() {
                this.lastKey = ""
            }), 5e3),this.lastKey = b,!1)
        },this.isTextField = function(a) {
            if (!a || !a.tagName)return!1;
            var b = a.tagName.toLowerCase();
            return b == "textarea" ? !0 : b != "input" ? !1 : ["password","text","email"].indexOf(a.getAttribute("type").toLowerCase()) >= 0
        },this.onKeyUp = function(a) {
            if (this.isTextField(a.target)) {
                a.keyCode == 27 && $(a.target).blur();
                return
            }
            if (this.isModifier(a) && (a.keyCode == 13 || !b[a.keyCode]))return;
            this.verifyKeys(a) && a.preventDefault()
        },this.after("initialize", function() {
            this.on("keyup", this.onKeyUp)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("core/utils"),f = d(g);
    a.exports = f
}),define("app/ui/navigation", ["module","require","exports","core/component","core/jquery","core/utils","core/clock","core/registry"], function(a, b, c) {
    function i() {
        this.routes = {home:"/",activity:"/activity",connect:"/i/connect",mentions:"/mentions",discover:"/i/discover",profile:"/",favorites:"/favorites",settings:"/settings/account",lists:"/lists"},this.defaultAttrs({spinnerContainer:"body",pushStateSelector:"a.js-nav",pageContainer:"#page-container",spinnerClass:"pushing-state"}),this.navigate = function(a) {
            var b = $(a.target),c = b.closest(this.attr.pushStateSelector);
            c.length && (this.trigger("uiNavigate", {href:c.attr("href")}),a.preventDefault())
        },this.updatePage = function(a, b) {
            d.teardownAll(),this.select("pageContainer").html(b.page),using(b.module, function(a) {
                a(b.init_data),this.trigger("uiPageChanged", b.init_data)
            }.bind(this))
        },this.navigateTo = function(a) {
            return function() {
                this.trigger("uiNavigate", {href:this.routes[a]})
            }
        },this.showSpinner = function(a, b) {
            this.select("spinnerContainer").addClass(this.attr.spinnerClass)
        },this.hideSpinner = function(a, b) {
            this.select("spinnerContainer").removeClass(this.attr.spinnerClass)
        },this.onUiNavigate = function(a, b) {
            location.href = b.href
        },this.after("initialize", function() {
            this.attr.pushState ? (this.on("click", this.navigate),this.on("dataPageRefresh", this.updatePage),this.on("dataPageFetch", this.showSpinner),this.on("dataPageRefresh", this.hideSpinner)) : this.on("uiNavigate", this.onUiNavigate),this.on("uiShortcutNavigateHome", this.navigateTo("home")),this.on("uiShortcutNavigateActivity", this.navigateTo("activity")),this.on("uiShortcutNavigateConnect", this.navigateTo("connect")),this.on("uiShortcutNavigateMentions", this.navigateTo("mentions")),this.on("uiShortcutNavigateDiscover", this.navigateTo("discover")),this.on("uiShortcutNavigateProfile", this.navigateTo("profile")),this.on("uiShortcutNavigateFavorites", this.navigateTo("favorites")),this.on("uiShortcutNavigateSettings", this.navigateTo("settings")),this.on("uiShortcutNavigateLists", this.navigateTo("lists")),this.attr.routes && e.push(this.routes, this.attr.routes)
        })
    }

    var d = b("core/component"),$ = b("core/jquery"),e = b("core/utils"),f = b("core/clock"),g = b("core/registry"),h = d(i);
    a.exports = h
}),provide("app/utils/time", function(a) {
    function b(a) {
        this.ms = a
    }

    function c(a) {
        var c = {seconds:new b(a * 1e3),minutes:new b(a * 1e3 * 60),hours:new b(a * 1e3 * 60 * 60),days:new b(a * 1e3 * 60 * 60 * 24)};
        return c.second = c.seconds,c.minute = c.minutes,c.hour = c.hours,c.day = c.days,c
    }

    c.now = function() {
        return(new Date).getTime()
    },b.prototype.fromNow = function() {
        return new Date(c.now() + this.ms)
    },b.prototype.ago = function() {
        return new Date(c.now() - this.ms)
    },b.prototype.getTime = b.prototype.valueOf = function() {
        return this.ms
    },a(c)
}),define("app/data/navigation", ["module","require","exports","core/component","core/jquery","core/utils","app/utils/time"], function(a, b, c) {
    function h() {
        this.defaultAttrs({pageContainer:"#page-container"}),this.pageCache = {},this.pageCacheTTLs = {};
        var a;
        this.navigate = function(a, b) {
            this.attr.initialState && this.createInitialState(),this.getPageData(b.href)
        },this.sweepPageCache = function() {
            var a = f.now();
            for (var b in this.pageCacheTTLs)a > this.pageCacheTTLs[b] && (delete this.pageCache[b],delete this.pageCacheTTLs[b])
        },this.getPageData = function(a, b) {
            var c;
            this.sweepPageCache(),(c = this.pageCache[a]) ? this.pageDataReceived(a, c, b) : (this.trigger("dataPageFetch"),$.ajax({url:a,dataType:"json",success:function(c) {
                        c.init_data && c.page && c.module ? (c.href = a,this.cacheState(a, c),this.pageDataReceived(a, c, b)) : location.href = a
                    }.bind(this),error:function(b) {
                        location.href = a
                    }}))
        },this.fullPath = function() {
            return[location.pathname,location.search].join("")
        },this.updatePageState = function(b) {
            var c = this.pageCache[b ? a : this.fullPath()];
            c && (c.page = this.select("pageContainer").html())
        },this.pageDataReceived = function(a, b, c) {
            this.updatePageState(c),!c && a != this.fullPath() && history.pushState({}, b.title, a),this.trigger("dataPageRefresh", b)
        },this.cacheState = function(a, b) {
            this.pageCache[a] = b,this.pageCacheTTLs[a] = f(b.cache_ttl).seconds.fromNow().getTime()
        },this.onPopState = function(a) {
            if (a.originalEvent.state) {
                if (this.attr.initialState && !this.handledPopstate) {
                    this.handledPopstate = !0;
                    return
                }
                this.getPageData(this.fullPath(), !0)
            }
        },this.createInitialState = function() {
            var a = this.fullPath(),b = e.merge({}, this.attr.initialState, !0);
            b.page = this.select("pageContainer").html(),b.init_data = e.merge({}, this.attr, !0),delete b.init_data.initialState,this.cacheState(a, b),history.replaceState({}, this.title, this.fullPath())
        },this.after("initialize", function() {
            this.on(window, "popstate", this.onPopState),this.on("uiNavigate", this.navigate),a = this.fullPath()
        })
    }

    var d = b("core/component"),$ = b("core/jquery"),e = b("core/utils"),f = b("app/utils/time"),g = d(h);
    a.exports = g
}),deferred("$lib/jquery_autoellipsis.js", function() {/*!

 Copyright (c) 2011 Peter van der Spek

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */
    (function($) {
        function e(a, b) {
            var c = a.data("jqae");
            c || (c = {});
            var d = c.wrapperElement;
            d || (d = a.wrapInner("<div/>").find(">div"));
            var e = d.data("jqae");
            e || (e = {});
            var i = e.originalContent;
            i ? d = e.originalContent.clone(!0).data("jqae", {originalContent:i}).replaceAll(d) : d.data("jqae", {originalContent:d.clone(!0)}),a.data("jqae", {wrapperElement:d,containerWidth:a.innerWidth(),containerHeight:a.innerHeight()});
            var j = !1,k = d;
            b.selector && (k = $(d.find(b.selector).get().reverse())),k.each(function() {
                var c = $(this),e = c.text(),i = !1;
                if (d.innerHeight() - c.innerHeight() > a.innerHeight())c.remove(); else {
                    h(c);
                    if (c.contents().length) {
                        j && (g(c).get(0).nodeValue += b.ellipsis,j = !1);
                        while (d.innerHeight() > a.innerHeight()) {
                            i = f(c);
                            if (!i) {
                                j = !0,c.remove();
                                break
                            }
                            h(c);
                            if (!c.contents().length) {
                                j = !0,c.remove();
                                break
                            }
                            g(c).get(0).nodeValue += b.ellipsis
                        }
                        b.setTitle == "onEllipsis" && i || b.setTitle == "always" ? c.attr("title", e) : b.setTitle != "never" && c.removeAttr("title")
                    }
                }
            })
        }

        function f(a) {
            var b = g(a);
            if (b.length) {
                var c = b.get(0).nodeValue,d = c.lastIndexOf(" ");
                return d > -1 ? (c = $.trim(c.substring(0, d)),b.get(0).nodeValue = c) : b.get(0).nodeValue = "",!0
            }
            return!1
        }

        function g(a) {
            if (a.contents().length) {
                var b = a.contents(),c = b.eq(b.length - 1);
                return c.filter(i).length ? c : g(c)
            }
            a.append("");
            var b = a.contents();
            return b.eq(b.length - 1)
        }

        function h(a) {
            if (a.contents().length) {
                var b = a.contents(),c = b.eq(b.length - 1);
                if (c.filter(i).length) {
                    var d = c.get(0).nodeValue;
                    return d = $.trim(d),d == "" ? (c.remove(),!0) : !1
                }
                while (h(c));
                return c.contents().length ? !1 : (c.remove(),!0)
            }
            return!1
        }

        function i() {
            return this.nodeType === 3
        }

        function j(c, d) {
            a[c] = d,b || (b = window.setInterval(function() {
                l()
            }, 200))
        }

        function k(c) {
            a[c] && (delete a[c],a.length || b && (window.clearInterval(b),b = undefined))
        }

        function l() {
            if (!c) {
                c = !0;
                for (var b in a)$(b).each(function() {
                    var c,d;
                    c = $(this),d = c.data("jqae"),(d.containerWidth != c.innerWidth() || d.containerHeight != c.innerHeight()) && e(c, a[b])
                });
                c = !1
            }
        }

        var a = {},b,c = !1,d = {ellipsis:"...",setTitle:"never",live:!1};
        $.fn.ellipsis = function(a, b) {
            var c,f;
            return c = $(this),typeof a != "string" && (b = a,a = undefined),f = $.extend({}, d, b),f.selector = a,c.each(function() {
                var a = $(this);
                e(a, f)
            }),f.live ? j(c.selector, f) : k(c.selector),this
        }
    })(jQuery)
}),deferred("$lib/jquery_color_picker.js", function() {
    (function($) {
        var a = function() {
            var a = {},b,c = 65,d,e = '<div class="colorpicker round"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" class="round picker_hex" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" class="round" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" class="round" /><span></span></div><button class="colorpicker_submit"></button></div>',f = {eventName:"click",onShow:function() {
            },onBeforeShow:function() {
            },onHide:function() {
            },onChange:function() {
            },onSubmit:function() {
            },color:"ff0000",livePreview:!0,flat:!1,submitText:"Done"},g = function(a, b) {
                var c = N(a);
                $(b).data("colorpicker").fields.eq(1).val(c.r).end().eq(2).val(c.g).end().eq(3).val(c.b).end()
            },h = function(a, b) {
                $(b).data("colorpicker").fields.eq(4).val(a.h).end().eq(5).val(a.s).end().eq(6).val(a.b).end()
            },i = function(a, b) {
                $(b).data("colorpicker").fields.eq(0).val(P(a)).end()
            },j = function(a, b) {
                $(b).data("colorpicker").selector.css("backgroundColor", "#" + P({h:a.h,s:100,b:100})),$(b).data("colorpicker").selectorIndic.css({left:parseInt(150 * a.s / 100, 10),top:parseInt(150 * (100 - a.b) / 100, 10)})
            },k = function(a, b) {
                $(b).data("colorpicker").hue.css("top", parseInt(150 - 150 * a.h / 360, 10))
            },l = function(a, b) {
                $(b).data("colorpicker").currentColor.css("backgroundColor", "#" + P(a))
            },m = function(a, b) {
                $(b).data("colorpicker").newColor.css("backgroundColor", "#" + P(a))
            },n = function(a) {
                var b = a.charCode || a.keyCode || -1;
                if (b > c && b <= 90 || b == 32)return!1;
                var d = $(this).parent().parent();
                d.data("colorpicker").livePreview === !0 && o.apply(this)
            },o = function(a) {
                var b = $(this).parent().parent(),c;
                this.parentNode.className.indexOf("_hex") > 0 ? b.data("colorpicker").color = c = L(J(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? b.data("colorpicker").color = c = H({h:parseInt(b.data("colorpicker").fields.eq(4).val(), 10),s:parseInt(b.data("colorpicker").fields.eq(5).val(), 10),b:parseInt(b.data("colorpicker").fields.eq(6).val(), 10)}) : b.data("colorpicker").color = c = M(I({r:parseInt(b.data("colorpicker").fields.eq(1).val(), 10),g:parseInt(b.data("colorpicker").fields.eq(2).val(), 10),b:parseInt(b.data("colorpicker").fields.eq(3).val(), 10)})),a && (g(c, b.get(0)),i(c, b.get(0)),h(c, b.get(0))),j(c, b.get(0)),k(c, b.get(0)),m(c, b.get(0)),b.data("colorpicker").onChange.apply(b, [c,P(c),N(c)])
            },p = function(a) {
                var b = $(this).parent().parent();
                b.data("colorpicker").fields.parent().removeClass("colorpicker_focus")
            },q = function() {
                c = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65,$(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),$(this).parent().addClass("colorpicker_focus")
            },r = function(a) {
                var b = $(this).parent().find("input").focus(),c = {el:$(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,y:a.pageY,field:b,val:parseInt(b.val(), 10),preview:$(this).parent().parent().data("colorpicker").livePreview};
                $(document).bind("mouseup", c, t),$(document).bind("mousemove", c, s),$(document).bind("mousedown", c, s)
            },s = function(a) {
                return a.data.field.val(Math.max(0, Math.min(a.data.max, parseInt(a.data.val + a.pageY - a.data.y, 10)))),a.data.preview && o.apply(a.data.field.get(0), [!0]),!1
            },t = function(a) {
                return o.apply(a.data.field.get(0), [!0]),a.data.el.removeClass("colorpicker_slider").find("input").focus(),$(document).unbind("mouseup", t),$(document).unbind("mousemove", s),$(document).unbind("mousedown", s),!1
            },u = function(a) {
                var b = {cal:$(this).parent(),y:$(this).offset().top};
                b.preview = b.cal.data("colorpicker").livePreview,$(document).bind("mouseup", b, w),$(document).bind("mousemove", b, v),$(document).bind("mousedown", b, v)
            },v = function(a) {
                return o.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, a.pageY - a.data.y))) / 150, 10)).get(0), [a.data.preview]),!1
            },w = function(a) {
                return g(a.data.cal.data("colorpicker").color, a.data.cal.get(0)),i(a.data.cal.data("colorpicker").color, a.data.cal.get(0)),$(document).unbind("mouseup", w),$(document).unbind("mousemove", v),$(document).unbind("mousedown", v),!1
            },x = function(a) {
                var b = {cal:$(this).parent(),pos:$(this).offset()};
                b.preview = b.cal.data("colorpicker").livePreview,$(document).bind("mouseup", b, z),$(document).bind("mousemove", b, y),$(document).bind("mousedown", b, y)
            },y = function(a) {
                return o.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, a.pageY - a.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, a.pageX - a.data.pos.left)) / 150, 10)).get(0), [a.data.preview]),!1
            },z = function(a) {
                return g(a.data.cal.data("colorpicker").color, a.data.cal.get(0)),i(a.data.cal.data("colorpicker").color, a.data.cal.get(0)),$(document).unbind("mouseup", z),$(document).unbind("mousemove", y),$(document).unbind("mousedown", y),!1
            },A = function(a) {
                $(this).addClass("colorpicker_focus")
            },B = function(a) {
                $(this).removeClass("colorpicker_focus")
            },C = function(a) {
                var b = $(this).parent(),c = b.data("colorpicker").color;
                return b.data("colorpicker").origColor = c,l(c, b.get(0)),b.data("colorpicker").onSubmit(c, P(c), N(c), b.data("colorpicker").el),a.preventDefault(),!1
            },D = function(a) {
                var b = $("#" + $(this).data("colorpickerId"));
                b.data("colorpicker").onBeforeShow.apply(this, [b.get(0)]);
                var c = $(this).offset(),d = G(),e = c.top + this.offsetHeight,f = c.left;
                return e + 176 > d.t + d.h && (e -= this.offsetHeight + 176),f + 356 > d.l + d.w && (f -= 356),b.css({left:f + "px",top:e + "px"}),b.data("colorpicker").onShow.apply(this, [b.get(0)]) != 0 && b.show(),$(document).bind("mousedown", {cal:b}, E),!1
            },E = function(a) {
                if (!F(a.data.cal.get(0), a.target, a.data.cal.get(0))) {
                    var b = P(a.data.cal.data("colorpicker").color);
                    a.data.cal.data("colorpicker").onHide(a.data.cal.get(0), b) != 0 && a.data.cal.hide(),$(document).unbind("mousedown", E)
                }
            },F = function(a, b, c) {
                if (a == b)return!0;
                if (a.contains)return a.contains(b);
                if (a.compareDocumentPosition)return!!(a.compareDocumentPosition(b) & 16);
                var d = b.parentNode;
                while (d && d != c) {
                    if (d == a)return!0;
                    d = d.parentNode
                }
                return!1
            },G = function() {
                var a = document.compatMode == "CSS1Compat";
                return{l:window.pageXOffset || (a ? document.documentElement.scrollLeft : document.body.scrollLeft),t:window.pageYOffset || (a ? document.documentElement.scrollTop : document.body.scrollTop),w:window.innerWidth || (a ? document.documentElement.clientWidth : document.body.clientWidth),h:window.innerHeight || (a ? document.documentElement.clientHeight : document.body.clientHeight)}
            },H = function(a) {
                return{h:Math.min(360, Math.max(0, a.h)),s:Math.min(100, Math.max(0, a.s)),b:Math.min(100, Math.max(0, a.b))}
            },I = function(a) {
                return{r:Math.min(255, Math.max(0, a.r)),g:Math.min(255, Math.max(0, a.g)),b:Math.min(255, Math.max(0, a.b))}
            },J = function(a) {
                var b = 6 - a.length;
                if (b > 0) {
                    var c = [];
                    for (var d = 0; d < b; d++)c.push("0");
                    c.push(a),a = c.join("")
                }
                return a
            },K = function(a) {
                var a = parseInt(a.indexOf("#") > -1 ? a.substring(1) : a, 16);
                return{r:a >> 16,g:(a & 65280) >> 8,b:a & 255}
            },L = function(a) {
                return M(K(a))
            },M = function(a) {
                var b = {h:0,s:0,b:0},c = Math.min(a.r, a.g, a.b),d = Math.max(a.r, a.g, a.b),e = d - c;
                return b.b = d,d == 0,b.s = d != 0 ? 255 * e / d : 0,b.s != 0 ? a.r == d ? b.h = (a.g - a.b) / e : a.g == d ? b.h = 2 + (a.b - a.r) / e : b.h = 4 + (a.r - a.g) / e : b.h = -1,b.h *= 60,b.h < 0 && (b.h += 360),b.s *= 100 / 255,b.b *= 100 / 255,b
            },N = function(a) {
                var b = {},c = Math.round(a.h),d = Math.round(a.s * 255 / 100),e = Math.round(a.b * 255 / 100);
                if (d == 0)b.r = b.g = b.b = e; else {
                    var f = e,g = (255 - d) * e / 255,h = (f - g) * (c % 60) / 60;
                    c == 360 && (c = 0),c < 60 ? (b.r = f,b.b = g,b.g = g + h) : c < 120 ? (b.g = f,b.b = g,b.r = f - h) : c < 180 ? (b.g = f,b.r = g,b.b = g + h) : c < 240 ? (b.b = f,b.r = g,b.g = f - h) : c < 300 ? (b.b = f,b.g = g,b.r = g + h) : c < 360 ? (b.r = f,b.g = g,b.b = f - h) : (b.r = 0,b.g = 0,b.b = 0)
                }
                return{r:Math.round(b.r),g:Math.round(b.g),b:Math.round(b.b)}
            },O = function(a) {
                var b = [a.r.toString(16),a.g.toString(16),a.b.toString(16)];
                return $.each(b, function(a, c) {
                    c.length == 1 && (b[a] = "0" + c)
                }),b.join("")
            },P = function(a) {
                return O(N(a))
            },Q = function() {
                var a = $(this).parent(),b = a.data("colorpicker").origColor;
                a.data("colorpicker").color = b,g(b, a.get(0)),i(b, a.get(0)),h(b, a.get(0)),j(b, a.get(0)),k(b, a.get(0)),m(b, a.get(0))
            };
            return{init:function(a) {
                a = $.extend({}, f, a || {});
                if (typeof a.color == "string")a.color = L(a.color); else if (a.color.r != undefined && a.color.g != undefined && a.color.b != undefined)a.color = M(a.color); else {
                    if (a.color.h == undefined || a.color.s == undefined || a.color.b == undefined)return this;
                    a.color = H(a.color)
                }
                return this.each(function() {
                    if (!$(this).data("colorpickerId")) {
                        var b = $.extend({}, a);
                        b.origColor = a.color;
                        var c = "collorpicker_" + parseInt(Math.random() * 1e3);
                        $(this).data("colorpickerId", c);
                        var d = $(e).attr("id", c);
                        b.flat ? d.appendTo(this).show() : d.appendTo(document.body),b.fields = d.find("input").bind("keyup", n).bind("change", o).bind("blur", p).bind("focus", q),d.find("span").bind("mousedown", r).end().find(">div.colorpicker_current_color").bind("click", Q),b.selector = d.find("div.colorpicker_color").bind("mousedown", x),b.selectorIndic = b.selector.find("div div"),b.el = this,b.hue = d.find("div.colorpicker_hue div"),d.find("div.colorpicker_hue").bind("mousedown", u),b.newColor = d.find("div.colorpicker_new_color"),b.currentColor = d.find("div.colorpicker_current_color"),d.data("colorpicker", b);
                        var f = d.find(".colorpicker_submit");
                        f.bind("mouseenter", A).bind("mouseleave", B).bind("click", C),f.text(b.submitText || "Done"),g(b.color, d.get(0)),h(b.color, d.get(0)),i(b.color, d.get(0)),k(b.color, d.get(0)),j(b.color, d.get(0)),l(b.color, d.get(0)),m(b.color, d.get(0)),b.flat ? d.css({position:"relative",display:"block"}) : $(this).bind(b.eventName, D)
                    }
                })
            },showPicker:function() {
                return this.each(function() {
                    $(this).data("colorpickerId") && D.apply(this)
                })
            },hidePicker:function() {
                return this.each(function() {
                    $(this).data("colorpickerId") && $("#" + $(this).data("colorpickerId")).hide()
                })
            },setColor:function(a) {
                if (typeof a == "string")a = L(a); else if (a.r != undefined && a.g != undefined && a.b != undefined)a = M(a); else {
                    if (a.h == undefined || a.s == undefined || a.b == undefined)return this;
                    a = H(a)
                }
                return this.each(function() {
                    if ($(this).data("colorpickerId")) {
                        var b = $("#" + $(this).data("colorpickerId"));
                        b.data("colorpicker").color = a,b.data("colorpicker").origColor = a,g(a, b.get(0)),h(a, b.get(0)),i(a, b.get(0)),k(a, b.get(0)),j(a, b.get(0)),l(a, b.get(0)),m(a, b.get(0))
                    }
                })
            },rgb2hex:function(a) {
            }}
        }();
        $.fn.extend({ColorPicker:a.init,ColorPickerHide:a.hidePicker,ColorPickerShow:a.showPicker,ColorPickerSetColor:a.setColor})
    })(jQuery)
}),deferred("$lib/jquery.swfobject.js", function() {/*! jQuery SWFObject v1.1.1 MIT/GPL @jon_neal
 * http://jquery.thewikies.com/swfobject
 */
    (function(a, b, c) {
        function d(a, b) {
            var c = (a[0] || 0) - (b[0] || 0);
            return c > 0 || !c && a.length > 0 && d(a.slice(1), b.slice(1))
        }

        function e(a) {
            if (typeof a != h)return a;
            var b = [],c = "";
            for (var d in a)c = typeof a[d] == h ? e(a[d]) : [d,i ? encodeURI(a[d]) : a[d]].join("="),b.push(c);
            return b.join("&")
        }

        function f(a) {
            var b = [];
            for (var c in a)a[c] && b.push([c,'="',a[c],'"'].join(""));
            return b.join(" ")
        }

        function g(a) {
            var b = [];
            for (var c in a)b.push(['<param name="',c,'" value="',e(a[c]),'" />'].join(""));
            return b.join("")
        }

        var h = "object",i = !0;
        try {
            var j = c.description || function() {
                return(new c("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
            }()
        } catch(k) {
            j = "Unavailable"
        }
        var l = j.match(/\d+/g) || [0];
        a[b] = {available:l[0] > 0,activeX:c && !c.name,version:{original:j,array:l,string:l.join("."),major:parseInt(l[0], 10) || 0,minor:parseInt(l[1], 10) || 0,release:parseInt(l[2], 10) || 0},hasVersion:function(a) {
            return a = /string|number/.test(typeof a) ? a.toString().split(".") : /object/.test(typeof a) ? [a.major,a.minor] : a || [0,0],d(l, a)
        },encodeParams:!0,expressInstall:"expressInstall.swf",expressInstallIsActive:!1,create:function(a) {
            if (!a.swf || this.expressInstallIsActive || !this.available && !a.hasVersionFail)return!1;
            if (!this.hasVersion(a.hasVersion || 1)) {
                this.expressInstallIsActive = !0;
                if (typeof a.hasVersionFail == "function" && !a.hasVersionFail.apply(a))return!1;
                a = {swf:a.expressInstall || this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX ? "ActiveX" : "PlugIn",MMdoctitle:document.title.slice(0, 47) + " - Flash Player Installation"}}
            }
            attrs = {data:a.swf,type:"application/x-shockwave-flash",id:a.id || "flash_" + Math.floor(Math.random() * 999999999),width:a.width || 320,height:a.height || 180,style:a.style || ""},i = typeof a.useEncode != "undefined" ? a.useEncode : this.encodeParams,a.movie = a.swf,a.wmode = a.wmode || "opaque",delete a.fallback,delete a.hasVersion,delete a.hasVersionFail,delete a.height,delete a.id,delete a.swf,delete a.useEncode,delete a.width;
            var b = document.createElement("div");
            return b.innerHTML = ["<object ",f(attrs),">",g(a),"</object>"].join(""),b.firstChild
        }},a.fn[b] = function(c) {
            var d = this.find(h).andSelf().filter(h);
            return/string|object/.test(typeof c) && this.each(function() {
                var d = a(this),e;
                c = typeof c == h ? c : {swf:c},c.fallback = this;
                if (e = a[b].create(c))d.children().remove(),d.html(e)
            }),typeof c == "function" && d.each(function() {
                var d = this;
                d.jsInteractionTimeoutMs = d.jsInteractionTimeoutMs || 0,d.jsInteractionTimeoutMs < 660 && (d.clientWidth || d.clientHeight ? c.call(d) : setTimeout(function() {
                    a(d)[b](c)
                }, d.jsInteractionTimeoutMs + 66))
            }),d
        }
    })(jQuery, "flash", navigator.plugins["Shockwave Flash"] || window.ActiveXObject)
}),deferred("$lib/jquery.hashchange.js", function() {
    (function($) {
        var a = function() {
            function c(c, d) {
                var e = arguments.length == 1;
                if (e && b[c])return b[c];
                d = d || document.createElement(a[c] || "div"),c = "on" + c;
                var f = c in d;
                return!f && d.setAttribute && (d.setAttribute(c, "return;"),f = typeof d[c] == "function"),d = null,e ? b[c] = f : f
            }

            var a = {select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},b = {};
            return c
        }();
        $.fn.hashchange = function(b) {
            if (a("hashchange", window) && (document.documentMode === undefined || document.documentMode > 7))this.bind("hashchange", b); else {
                var c = location.hash;
                setInterval(function() {
                    c !== location.hash && (b($.Event("hashchange")),c = location.hash)
                }, 250)
            }
            return this
        }
    })(jQuery)
}),deferred("$lib/bootstrap_tooltip.js", function() {
    !function($) {
        "use strict";
        var a = function(a, b) {
            this.init("tooltip", a, b)
        };
        a.prototype = {constructor:a,init:function(a, b, c) {
            var d,e;
            this.type = a,this.$element = $(b),this.options = this.getOptions(c),this.enabled = !0,this.options.trigger != "manual" && (d = this.options.trigger == "hover" ? "mouseenter" : "focus",e = this.options.trigger == "hover" ? "mouseleave" : "blur",this.$element.on(d, this.options.selector, $.proxy(this.enter, this)),this.$element.on(e, this.options.selector, $.proxy(this.leave, this))),this.options.selector ? this._options = $.extend({}, this.options, {trigger:"manual",selector:""}) : this.fixTitle()
        },getOptions:function(a) {
            return a = $.extend({}, $.fn[this.type].defaults, a, this.$element.data()),a.delay && typeof a.delay == "number" && (a.delay = {show:a.delay,hide:a.delay}),a
        },enter:function(a) {
            var b = $(a.currentTarget)[this.type](this._options).data(this.type);
            !b.options.delay || !b.options.delay.show ? b.show() : (b.hoverState = "in",setTimeout(function() {
                b.hoverState == "in" && b.show()
            }, b.options.delay.show))
        },leave:function(a) {
            var b = $(a.currentTarget)[this.type](this._options).data(this.type);
            !b.options.delay || !b.options.delay.hide ? b.hide() : (b.hoverState = "out",setTimeout(function() {
                b.hoverState == "out" && b.hide()
            }, b.options.delay.hide))
        },show:function() {
            var a,b,c,d,e,f,g;
            if (this.hasContent() && this.enabled) {
                a = this.tip(),this.setContent(),this.options.animation && a.addClass("fade"),f = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,b = /in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b ? this.$element : document.body),c = this.getPosition(b),d = a[0].offsetWidth,e = a[0].offsetHeight;
                switch (b ? f.split(" ")[1] : f) {
                    case"bottom":
                        g = {top:c.top + c.height,left:c.left + c.width / 2 - d / 2};
                        break;
                    case"top":
                        g = {top:c.top - e,left:c.left + c.width / 2 - d / 2};
                        break;
                    case"left":
                        g = {top:c.top + c.height / 2 - e / 2,left:c.left - d};
                        break;
                    case"right":
                        g = {top:c.top + c.height / 2 - e / 2,left:c.left + c.width}
                }
                a.css(g).addClass(f).addClass("in")
            }
        },setContent:function() {
            var a = this.tip();
            a.find(".tooltip-inner").html(this.getTitle()),a.removeClass("fade in top bottom left right")
        },hide:function() {
            function c() {
                var a = setTimeout(function() {
                    b.off($.support.transition.end).remove()
                }, 500);
                b.one($.support.transition.end, function() {
                    clearTimeout(a),b.remove()
                })
            }

            var a = this,b = this.tip();
            b.removeClass("in"),$.support.transition && this.$tip.hasClass("fade") ? c() : b.remove()
        },fixTitle:function() {
            var a = this.$element;
            (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
        },hasContent:function() {
            return this.getTitle()
        },getPosition:function(a) {
            return $.extend({}, a ? {top:0,left:0} : this.$element.offset(), {width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})
        },getTitle:function() {
            var a,b = this.$element,c = this.options;
            return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title),a = (a || "").toString().replace(/(^\s*|\s*$)/, ""),a
        },tip:function() {
            return this.$tip = this.$tip || $(this.options.template)
        },validate:function() {
            this.$element[0].parentNode || (this.hide(),this.$element = null,this.options = null)
        },enable:function() {
            this.enabled = !0
        },disable:function() {
            this.enabled = !1
        },toggleEnabled:function() {
            this.enabled = !this.enabled
        },toggle:function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }},$.fn.tooltip = function(b) {
            return this.each(function() {
                var c = $(this),d = c.data("tooltip"),e = typeof b == "object" && b;
                d || c.data("tooltip", d = new a(this, e)),typeof b == "string" && d[b]()
            })
        },$.fn.tooltip.Constructor = a,$.fn.tooltip.defaults = {animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}
    }(window.jQuery)
}),"use strict",provide("app/jquery_with_plugins", function(a) {
    using("core/jquery", function($) {
        window.jQuery = $,using("$lib/jquery_autoellipsis.js", "$lib/jquery_color_picker.js", "$lib/jquery.event.drag.js", "$lib/jquery.swfobject.js", "$lib/jquery.hashchange.js", "$lib/bootstrap_tooltip.js", function() {
            a($.noConflict(!0))
        })
    })
}),"use strict",provide("app/ui/with_scrollbar_width", function(a) {
    using("core/jquery", function($) {
        function b() {
            this.calculateScrollbarWidth = function() {
                if ($("#scrollbar-width").length > 0)return;
                var a = $('<div class="modal-measure-scrollbar"/>').prependTo($("body")),b = $('<div class="inner"/>').appendTo(a),c = a.width() - b.width();
                a.remove(),$("head").append('<style id="scrollbar-width">            .modal-enabled,            .modal-enabled .global-nav-inner,            .gallery-enabled,            .gallery-enabled .global-nav-inner {              margin-right: ' + c + "px          } </style>")
            }
        }

        a(b)
    })
}),"use strict",provide("app/ui/with_dialog", function(a) {
    using("core/fn", "app/jquery_with_plugins", "core/compose", "app/ui/with_scrollbar_width", function(b, $, c, d) {
        function e() {
            c.mixin(this, [d]),this.center = function(a) {
                var b = $(window),c = {top:parseInt((b.height() - a.outerHeight()) / 2),left:parseInt((b.width() - a.outerWidth()) / 2)};
                return $("body.ie6").length && (c.top += b.scrollTop(),c.left += b.scrollLeft()),c
            },this.windowHeight = function() {
                return $(window).height()
            },this.scrollTop = function() {
                return $(window).scrollTop()
            },this.position = function() {
                var a = this.center(this.$dialog);
                this.attr.top && (a.top = this.attr.top),this.attr.left && (a.left = this.attr.left),this.attr.maxTop && (a.top = Math.min(a.top, this.attr.maxTop)),this.attr.maxLeft && (a.left = Math.min(a.left, this.attr.maxLeft)),$("body").attr("dir") === "rtl" ? this.$dialog.css({top:a.top,right:a.left}) : this.$dialog.css({top:a.top,left:a.left}),this.windowHeight() < this.$dialog.outerHeight() ? (this.$dialog.css("position", "absolute"),this.$dialog.css("top", this.scrollTop() + "px")) : this.attr.fixed === !1 && this.$dialog.css("top", a.top + this.scrollTop())
            },this.resize = function() {
                this.attr.width && this.$dialog.css("width", this.attr.width),this.attr.height && this.$dialog.css("height", this.attr.height)
            },this.applyDraggability = function() {
                if (!this.$dialog.hasClass("draggable"))return;
                var a = this,b = {relative:!0,handle:".modal-header"},c = function(a, b) {
                    $("body").attr("dir") === "rtl" ? this.$dialog.css({top:b.offsetY,right:b.originalX - b.deltaX}) : this.$dialog.css({top:b.offsetY,left:b.offsetX})
                };
                this.$dialog.drag("start", function() {
                    a.$dialog.addClass("unselectable"),$("#doc").addClass("unselectable")
                }),this.$dialog.drag("end", function() {
                    a.$dialog.removeClass("unselectable"),$("#doc").removeClass("unselectable")
                }),this.$dialog.drag(c.bind(this), b)
            },this.isOpen = function() {
                return this.$dialogContainer.is(":visible")
            },this.open = function() {
                this.isOpen() || (this.$dialogContainer.fadeIn("fast"),this.calculateScrollbarWidth(),$("body").addClass("modal-enabled"),this.resize(),this.position(),this.applyDraggability(),this.trigger("uiDialogOpened"))
            },this.afterClose = function() {
                $(".modal-container:visible").length || $("body").removeClass("modal-enabled"),this.trigger("uiDialogHidden")
            },this.closeRequested = function(a) {
                this.trigger("uiDialogCloseRequested"),this.close()
            },this.close = function(a) {
                a && a.preventDefault(),this.$dialogContainer.fadeOut("fast", this.afterClose.bind(this)),this.trigger("uiDialogClosed")
            },this.triggerClicked = function(a) {
                a.preventDefault(),this.open()
            },this.after("initialize", function() {
                this.$dialogContainer = this.$dialog || this.$node,this.$dialog = this.$dialogContainer.find("div.modal"),this.attr.closeSelector = this.attr.closeSelector || ".modal-close, .close-modal-background-target",this.on(this.select("closeSelector"), "click", this.closeRequested),this.on(document, "uiShortcutEsc", this.closeRequested),this.on(document, "uiCloseDialog", this.closeRequested),this.attr.triggerSelector && this.on(this.attr.triggerSelector, "click", this.triggerClicked)
            })
        }

        a(e)
    })
}),"use strict",provide("app/ui/with_position", function(a) {
    using("core/jquery", function($) {
        function b() {
            this.adjacent = function(a, b, c) {
                var d,e;
                c = c || {},d = e = b.offset(),e.gravity = c.gravity,e.weight = c.weight;
                var f = {height:b.outerHeight(),width:b.outerWidth()},g = {height:a.outerHeight(),width:a.outerWidth()},h = {height:$(window).height(),width:$(window).width()},i = {height:$("body").height(),width:$("body").width()};
                return e.gravity || (e.gravity = "vertical"),"vertical,north,south".indexOf(e.gravity) != -1 && ("right,left,center".indexOf(e.weight) == -1 && (e.weight = d.left > h.width / 2 ? "right" : "left"),e.gravity == "vertical" && (e.gravity = d.top + g.height > $(window).scrollTop() + h.height ? "south" : "north"),c.position == "relative" && (d = {left:0,top:0},e.left = 0),e.weight == "right" ? e.left = d.left - g.width + f.width : e.weight == "center" && (e.left = d.left - (g.width - f.width) / 2),e.top = e.gravity == "north" ? d.top + f.height : d.top - g.height),"horizontal,east,west".indexOf(e.gravity) != -1 && ("top,bottom,center".indexOf(e.weight) == -1 && (d.top - g.height / 2 < 0 ? e.weight = "top" : d.top + g.height / 2 > Math.max(h.height, i.height) ? e.weight = "bottom" : e.weight = "center"),e.gravity == "horizontal" && (e.gravity = d.left + f.width / 2 > h.width / 2 ? "east" : "west"),c.position == "relative" && (d = {left:0,top:0},e.top = 0),e.weight == "center" ? e.top = d.top + f.height / 2 - g.height / 2 : e.weight == "bottom" && (e.top = d.top - g.height + f.height),e.left = e.gravity == "west" ? d.left + f.width : d.left - g.width),e
            }
        }

        a(b)
    })
}),"use strict",provide("app/ui/dialogs/keyboard_shortcuts_dialog", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", function(b, c, $, d, e) {
        function g() {
            this.after("initialize", function() {
                this.on("click", this.close),this.on(document, "uiOpenKeyboardShortcutsDialog", this.open)
            })
        }

        var f = b(g, d, e);
        a(f)
    })
}),"use strict",provide("app/ui/dialogs/with_modal_tweet", function(a) {
    using("core/fn", "core/jquery", function(b, $) {
        function c() {
            this.defaultAttrs({modalTweetSelector:".modal-tweet"}),this.addTweet = function(a) {
                this.select("modalTweetSelector").show(),this.select("modalTweetSelector").empty().append(a)
            },this.removeTweet = function() {
                this.select("modalTweetSelector").hide().empty()
            },this.after("initialize", function() {
                this.on(document, "uiDialogHidden", this.removeTweet)
            })
        }

        a(c)
    })
}),"use strict",provide("app/ui/dialogs/retweet_dialog", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", "app/ui/dialogs/with_modal_tweet", function(b, c, $, d, e, f) {
        function h() {
            this.defaults = {cancelSelector:".cancel-action",retweetSelector:".retweet-action"},this.openRetweet = function(a, b) {
                this.attr.sourceEventData = b,this.removeTweet(),this.addTweet($(a.target).clone()),this.open()
            },this.retweet = function() {
                this.trigger("uiDidRetweet", this.attr.sourceEventData)
            },this.retweetSuccess = function(a, b) {
                this.trigger("uiDidRetweetSuccess", this.attr.sourceEventData),this.close()
            },this.after("initialize", function() {
                this.on("click", {cancelSelector:this.close,retweetSelector:this.retweet}),this.on(document, "uiOpenRetweetDialog", this.openRetweet),this.on(document, "dataDidRetweet", this.retweetSuccess)
            })
        }

        var g = b(h, d, e, f);
        a(g)
    })
}),"use strict",provide("app/ui/dialogs/delete_tweet_dialog", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", "app/ui/dialogs/with_modal_tweet", function(b, c, $, d, e, f) {
        function h() {
            this.defaults = {cancelSelector:".cancel-action",deleteSelector:".delete-action"},this.openDeleteTweet = function(a, b) {
                this.attr.sourceEventData = b,this.addTweet($(a.target).clone()),this.id = b.id,this.open()
            },this.deleteTweet = function() {
                this.trigger("uiDidDeleteTweet", {id:this.id,sourceEventData:this.attr.sourceEventData})
            },this.deleteTweetSuccess = function(a, b) {
                this.trigger("uiDidDeleteTweetSuccess", this.attr.sourceEventData),this.close()
            },this.after("initialize", function() {
                this.on("click", {cancelSelector:this.close,deleteSelector:this.deleteTweet}),this.on(document, "uiOpenDeleteDialog", this.openDeleteTweet),this.on(document, "dataDidDeleteTweet", this.deleteTweetSuccess)
            })
        }

        var g = b(h, d, e, f);
        a(g)
    })
}),"use strict",provide("app/utils/with_event_params", function(a) {
    using("core/utils", "core/parameterize", function(b, c) {
        function d() {
            this.rewriteEventName = function(a) {
                var d = b.toArray(arguments, 1),e = typeof d[0] == "string" ? 0 : 1;
                try {
                    d[e] = c(d[e], this.attr.eventParams, !0)
                } catch(f) {
                    throw new Error("Couldn't parameterize the event name")
                }
                a.apply(this, d)
            },this.around("on", this.rewriteEventName),this.around("off", this.rewriteEventName),this.around("trigger", this.rewriteEventName)
        }

        a(d)
    })
}),"use strict",provide("app/ui/dialogs/confirm_dialog", function(a) {
    using("core/component", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", "app/utils/with_event_params", function(b, $, c, d, e) {
        function g() {
            this.defaultAttrs({titleSelector:".modal-title",bodySelector:".modal-body-text",cancelSelector:"#confirm_dialog_cancel_button",submitSelector:"#confirm_dialog_submit_button"}),this.openWithOptions = function(a, b) {
                this.attr.eventParams = {action:b.action},this.attr.top = b.top,this.select("titleSelector").text(b.titleText),this.select("bodySelector").text(b.bodyText),this.select("cancelSelector").text(b.cancelText),this.select("submitSelector").text(b.submitText),this.open()
            },this.submit = function(a, b) {
                this.trigger("ui{{action}}Confirm")
            },this.cancel = function(a, b) {
                this.trigger("ui{{action}}Cancel")
            },this.after("initialize", function() {
                this.on(document, "uiOpenConfirmDialog", this.openWithOptions),this.on(this.select("submitSelector"), "click", this.submit),this.on(this.select("submitSelector"), "click", this.close),this.on(this.select("cancelSelector"), "click", this.cancel),this.on(this.select("cancelSelector"), "click", this.close),this.on("uiDialogCloseRequested", this.cancel)
            })
        }

        var f = b(g, c, d, e);
        a(f)
    })
}),define("app/ui/dialogs/list_membership_dialog", ["module","require","exports","core/component","app/ui/with_position","app/ui/with_dialog","core/jquery"], function(a, b, c) {
    function h() {
        this.defaultAttrs({top:90,contentSelector:".list-membership-content",createListSelector:".create-a-list",membershipSelector:".list-membership-container li"}),this.openListMembershipDialog = function(a, b) {
            this.userId = b.userId,this.userId && this.trigger("uiNeedsListMembershipContent", {userId:this.userId}),this.$content.empty(),this.$node.removeClass("has-content"),this.open()
        },this.addListMembershipContent = function(a, b) {
            this.$node.addClass("has-content"),this.$content.html(b.html)
        },this.handleNoListMembershipContent = function(a, b) {
            this.close(),this.trigger("uiShowError", b)
        },this.toggleListMembership = function(a, b) {
            var c = $(a.target),d = {userId:c.closest("[data-user-id]").attr("data-user-id"),listId:c.closest("[data-list-id]").attr("data-list-id")},e = $("#list_" + d.listId);
            if (!e.is(":visible"))return;
            e.closest(this.attr.membershipSelector).addClass("pending"),e.data("is-checked") ? this.trigger("uiRemoveUserFromList", d) : this.trigger("uiAddUserToList", d)
        },this.updateMembershipState = function(a) {
            return function(b, c) {
                var d = $("#list_" + c.sourceEventData.listId);
                d.closest(this.attr.membershipSelector).removeClass("pending"),d.attr("checked", a ? "checked" : null),d.data("is-checked", a)
            }.bind(this)
        },this.openListCreateDialog = function() {
            this.close(),this.trigger("uiOpenCreateListDialog", {userId:this.userId})
        },this.after("initialize", function(a) {
            this.$content = this.select("contentSelector"),this.on("click", {createListSelector:this.openListCreateDialog,membershipSelector:this.toggleListMembership}),this.on(document, "uiListAction uiOpenListMembershipDialog", this.openListMembershipDialog),this.on(document, "dataGotListMembershipContent", this.addListMembershipContent),this.on(document, "dataFailedToGetListMembershipContent", this.handleNoListMembershipContent),this.on(document, "dataDidAddUserToList dataFailedToRemoveUserFromList", this.updateMembershipState(!0)),this.on(document, "dataDidRemoveUserFromList dataFailedToAddUserToList", this.updateMembershipState(!1))
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/ui/with_position"),f = b("app/ui/with_dialog"),$ = b("core/jquery"),g = d(h, f, e);
    a.exports = g
}),define("app/ui/dialogs/list_create_dialog", ["module","require","exports","core/component","app/ui/with_position","app/ui/with_dialog","core/jquery","core/i18n"], function(a, b, c) {
    function h() {
        this.defaultAttrs({top:90,createListSelector:".update-list-button",nameInputSelector:".list-editor input[name='name']"}),this.openCreateListDialog = function(a, b) {
            this.userId = b.userId,this.open(),this.$nameInput.focus()
        },this.createList = function(a, b) {
            if (this.requestInProgress)return;
            this.requestInProgress = !0,this.trigger("uiCreateList", {name:this.formValue("name"),description:this.formValue("description", {type:"textarea"}),mode:this.formValue("mode", {conditions:":checked"})}),this.$createButton.addClass("disabled")
        },this.createListSuccess = function(a, b) {
            this.close(),this.userId && this.trigger("uiOpenListMembershipDialog", {userId:this.userId}),this.$editor.find("input,textarea").val(""),this.trigger("uiShowMessage", {message:_("List created!")})
        },this.createListComplete = function(a, b) {
            this.requestInProgress = !1,this.toggleCreateButtonDisabled()
        },this.toggleCreateButtonDisabled = function(a, b) {
            this.$createButton[this.$nameInput.val() == "" ? "addClass" : "removeClass"]("disabled")
        },this.formValue = function(a, b) {
            return b = b || {},b.type = b.type || "input",b.conditions = b.conditions || "",this.$editor.find(b.type + "[name='" + a + "']" + b.conditions).val()
        },this.after("initialize", function(a) {
            this.$editor = this.$node.find(".list-editor"),this.$nameInput = this.select("nameInputSelector"),this.$createButton = this.select("createListSelector"),this.on("click", {createListSelector:this.createList}),this.on("focus blur keyup", {nameInputSelector:this.toggleCreateButtonDisabled}),this.on(document, "uiOpenCreateListDialog", this.openCreateListDialog),this.on(document, "dataDidCreateList", this.createListSuccess),this.on(document, "dataDidCreateList dataFailedToCreateList", this.createListComplete),this.$createButton.addClass("disabled")
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/ui/with_position"),f = b("app/ui/with_dialog"),$ = b("core/jquery"),_ = b("core/i18n"),g = d(h, f, e);
    a.exports = g
}),"use strict",provide("app/data/direct_messages", function(a) {
    using("core/component", "core/jquery", "app/data/with_data", "app/data/with_auth_token", function(b, $, c, d) {
        function f() {
            this.pollConversationList = function(a, b) {
                this.requestConversationList(null, {since_id:this.lastMessageId})
            },this.updateLastReceivedId = function(a, b) {
                this.lastMessageId = b.last_message_id
            },this.requestConversationList = function(a, b) {
                this.get({url:"/messages",data:b,eventData:b,success:"dataDMConversationListResult",error:"dataDMError"})
            },this.requestConversation = function(a, b) {
                this.get({url:"/messages/with/" + b.screen_name,data:{},eventData:b,success:"dataDMConversationResult",error:"dataDMError"})
            },this.sendMessage = function(a, b) {
                this.post({url:"/direct_messages/new",data:b,eventData:b,success:"dataDMSuccess",error:"dataDMError"})
            },this.deleteMessage = function(a, b) {
                this.post({url:"/direct_messages/destroy",data:b,eventData:b,success:"dataDMSuccess",error:"dataDMError"})
            },this.after("initialize", function() {
                this.on("uiNeedsDMConversationList", this.requestConversationList),this.on("uiNeedsDMConversation", this.requestConversation),this.on("uiDMDialogSendMessage", this.sendMessage),this.on("uiDMDialogDeleteMessage", this.deleteMessage),this.on("dataRefreshDMs", this.pollConversationList),this.on("dataDMConversationListResult", this.updateLastReceivedId),this.lastMessageId = $("#dm_dialog_conversation_list li.dm-thread").first().attr("data-last-message-id") || 0
            })
        }

        var e = b(f, c, d);
        a(e)
    })
}),"use strict",provide("app/data/direct_messages_scribe", function(a) {
    using("core/component", "app/data/with_scribe", function(b, c) {
        function e() {
            this.after("initialize", function() {
                this.scribeOnEvent("uiDMDialogOpenedNewConversation", "open"),this.scribeOnEvent("uiDMDialogOpenedConversation", "open"),this.scribeOnEvent("uiDMDialogOpenedConversationList", "open"),this.scribeOnEvent("uiDMDialogSendMessage", "send_dm"),this.scribeOnEvent("uiDMDialogDeleteMessage", "delete")
            })
        }

        var d = b(e, c);
        a(d)
    })
}),provide("app/utils/levenshtein", function(a) {
    a(function(a, b) {
        var c,d,e = a.length,f = b.length;
        if (!e)return f;
        if (!f)return e;
        var g = [];
        for (var h = 0; h <= e; h++)g[h] = [],g[h][0] = h;
        for (var i = 0; i <= f; i++)g[0][i] = i;
        for (var h = 1; h <= e; h++) {
            c = a.charAt(h - 1);
            for (var i = 1; i <= f; i++)g[h][i] = Math.min(g[h - 1][i] + 1, g[h][i - 1] + 1, g[h - 1][i - 1] + (c == b.charAt(i - 1) ? 0 : 1))
        }
        return g[e][f]
    })
}),provide("app/utils/storage/core", function(a) {
    using("core/compose", "core/fn", "core/jquery", function(b, c, $) {
        function f() {
            this.initialize = function(a) {
                this.namespace = a,this.prefix = ["__",this.namespace,"__:"].join(""),this.matcher = new RegExp("^" + this.prefix)
            },this.getItem = function(a) {
                return this.decode(window.localStorage.getItem(this.prefix + a))
            },this.setItem = function(a, b) {
                return window.localStorage.setItem(this.prefix + a, this.encode(b))
            },this.removeItem = function(a) {
                return window.localStorage.removeItem(this.prefix + a)
            },this.keys = function() {
                var a = [];
                for (var b = 0,c = window.localStorage.length,d; b < c; b++)d = window.localStorage.key(b),d.match(this.matcher) && a.push(d.replace(this.matcher, ""));
                return a
            },this.clear = function() {
                this.keys().forEach(function(a) {
                    this.removeItem(a)
                }, this)
            },this.clearAll = function() {
                window.localStorage.clear()
            }
        }

        function g() {
            function b(b, c) {
                var d = c.xmlDocument.documentElement;
                a[b] = {};
                while (d.firstChild)d.removeChild(d.firstChild);
                c.save(b)
            }

            function c(a) {
                return document.getElementById("__storage_" + a)
            }

            var a = {};
            this.initialize = function(b) {
                this.namespace = b,(this.dataStore = c(this.namespace)) || this.createStorageElement(),this.xmlDoc = this.dataStore.xmlDocument,this.xmlDocEl = this.xmlDoc.documentElement,a[this.namespace] = a[this.namespace] || {}
            },this.createStorageElement = function() {
                this.dataStore = document.createElement("div"),this.dataStore.id = "__storage_" + this.namespace,this.dataStore.style.display = "none",document.appendChild(this.dataStore),this.dataStore.addBehavior("#default#userData"),this.dataStore.load(this.namespace)
            },this.getNodeByKey = function(b) {
                var c = this.xmlDocEl.childNodes,d;
                if (d = a[this.namespace][b])return d;
                for (var e = 0,f = c.length; e < f; e++) {
                    d = c.item(e);
                    if (d.getAttribute("key") == b)return a[this.namespace][b] = d,d
                }
                return null
            },this.getItem = function(a) {
                var b = this.getNodeByKey(a),c = null;
                return b && (c = b.getAttribute("value")),this.decode(c)
            },this.setItem = function(b, c) {
                var d = this.getNodeByKey(b);
                return d ? d.setAttribute("value", this.encode(c)) : (d = this.xmlDoc.createNode(1, "item", ""),d.setAttribute("key", b),d.setAttribute("value", this.encode(c)),this.xmlDocEl.appendChild(d),a[this.namespace][b] = d),this.dataStore.save(this.namespace),c
            },this.removeItem = function(b) {
                var c = this.getNodeByKey(b);
                c && (this.xmlDocEl.removeChild(c),delete a[this.namespace][b]),this.dataStore.save(this.namespace)
            },this.keys = function() {
                var a = this.xmlDocEl.childNodes.length,b = [];
                for (var c = 0; c < a; c++)b.push(this.xmlDocEl.childNodes[c].getAttribute("key"));
                return b
            },this.clear = function() {
                b(this.namespace, this.dataStore)
            },this.clearAll = function() {
                for (var d in a)b(d, c(d)),a[d] = {}
            }
        }

        function h() {
            this.initialize = $.noop,this.getNodeByKey = function(a) {
                return null
            },this.getItem = function(a) {
                return null
            },this.setItem = function(a, b) {
                return b
            },this.removeItem = function(a) {
                return null
            },this.keys = function() {
                return[]
            },this.clear = $.noop,this.clearAll = $.noop
        }

        function i() {
            this.initialize = function(a) {
                this.namespace = a,d[this.namespace] || (d[this.namespace] = {}),this.store = d[this.namespace]
            },this.getItem = function(a) {
                return this.store[a] ? this.decode(this.store[a]) : undefined
            },this.setItem = function(a, b) {
                return this.store[a] = this.encode(b)
            },this.removeItem = function(a) {
                delete this.store[a]
            },this.keys = function() {
                return Object.keys(this.store)
            },this.clear = function() {
                this.store = d[this.namespace] = {}
            },this.clearAll = function() {
                d = {}
            }
        }

        function j() {
            k() ? f.call(this) : document.documentElement.addBehavior ? h.call(this) : i.call(this)
        }

        function k() {
            if (e === undefined)try {
                window.localStorage.setItem("~~~~", 1),window.localStorage.removeItem("~~~~"),e = !0
            } catch(a) {
                e = !1
            }
            return e
        }

        function l() {
            this.encode = function(a) {
                return JSON.stringify(a)
            },this.decode = function(a) {
                return JSON.parse(a)
            }
        }

        function m() {
            arguments.length && this.initialize.apply(this, arguments)
        }

        var d = {},e;
        b.mixin(m.prototype, [l,j,c.withAdvice]),m.clearAll = m.prototype.clearAll,a(m)
    })
}),deferred("$lib/gibberish-aes.js", function() {
    (function(a) {
        var b = function() {
            var a = 14,c = 8,d = !1,e = function(a) {
                try {
                    return unescape(encodeURIComponent(a))
                } catch(b) {
                    throw"Error on UTF-8 encode"
                }
            },f = function(a) {
                try {
                    return decodeURIComponent(escape(a))
                } catch(b) {
                    throw"Bad Key"
                }
            },g = function(a) {
                var b = [],c,d;
                a.length < 16 && (c = 16 - a.length,b = [c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c]);
                for (d = 0; d < a.length; d++)b[d] = a[d];
                return b
            },h = function(a, b) {
                var c = "",d,e;
                if (b) {
                    d = a[15];
                    if (d > 16)throw"Decryption error: Maybe bad key";
                    if (d == 16)return"";
                    for (e = 0; e < 16 - d; e++)c += String.fromCharCode(a[e])
                } else for (e = 0; e < 16; e++)c += String.fromCharCode(a[e]);
                return c
            },i = function(a) {
                var b = "",c;
                for (c = 0; c < a.length; c++)b += (a[c] < 16 ? "0" : "") + a[c].toString(16);
                return b
            },j = function(a) {
                var b = [];
                return a.replace(/(..)/g, function(a) {
                    b.push(parseInt(a, 16))
                }),b
            },k = function(a) {
                a = e(a);
                var b = [],c;
                for (c = 0; c < a.length; c++)b[c] = a.charCodeAt(c);
                return b
            },l = function(b) {
                switch (b) {
                    case 128:
                        a = 10,c = 4;
                        break;
                    case 192:
                        a = 12,c = 6;
                        break;
                    case 256:
                        a = 14,c = 8;
                        break;
                    default:
                        throw"Invalid Key Size Specified:" + b
                }
            },m = function(a) {
                var b = [],c;
                for (c = 0; c < a; c++)b = b.concat(Math.floor(Math.random() * 256));
                return b
            },n = function(d, e) {
                var f = a >= 12 ? 3 : 2,g = [],h = [],i = [],j = [],k = d.concat(e),l;
                i[0] = b.Hash.MD5(k),j = i[0];
                for (l = 1; l < f; l++)i[l] = b.Hash.MD5(i[l - 1].concat(k)),j = j.concat(i[l]);
                return g = j.slice(0, 4 * c),h = j.slice(4 * c, 4 * c + 16),{key:g,iv:h}
            },o = function(a, b, c) {
                b = x(b);
                var d = Math.ceil(a.length / 16),e = [],f,h = [];
                for (f = 0; f < d; f++)e[f] = g(a.slice(f * 16, f * 16 + 16));
                a.length % 16 === 0 && (e.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),d++);
                for (f = 0; f < e.length; f++)e[f] = f === 0 ? w(e[f], c) : w(e[f], h[f - 1]),h[f] = q(e[f], b);
                return h
            },p = function(a, b, c, d) {
                b = x(b);
                var e = a.length / 16,g = [],i,j = [],k = "";
                for (i = 0; i < e; i++)g.push(a.slice(i * 16, (i + 1) * 16));
                for (i = g.length - 1; i >= 0; i--)j[i] = r(g[i], b),j[i] = i === 0 ? w(j[i], c) : w(j[i], g[i - 1]);
                for (i = 0; i < e - 1; i++)k += h(j[i]);
                return k += h(j[i], !0),d ? k : f(k)
            },q = function(b, c) {
                d = !1;
                var e = v(b, c, 0),f;
                for (f = 1; f < a + 1; f++)e = s(e),e = t(e),f < a && (e = u(e)),e = v(e, c, f);
                return e
            },r = function(b, c) {
                d = !0;
                var e = v(b, c, a),f;
                for (f = a - 1; f > -1; f--)e = t(e),e = s(e),e = v(e, c, f),f > 0 && (e = u(e));
                return e
            },s = function(a) {
                var b = d ? B : A,c = [],e;
                for (e = 0; e < 16; e++)c[e] = b[a[e]];
                return c
            },t = function(a) {
                var b = [],c = d ? [0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3] : [0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11],e;
                for (e = 0; e < 16; e++)b[e] = a[c[e]];
                return b
            },u = function(a) {
                var b = [],c;
                if (!d)for (c = 0; c < 4; c++)b[c * 4] = D[a[c * 4]] ^ E[a[1 + c * 4]] ^ a[2 + c * 4] ^ a[3 + c * 4],b[1 + c * 4] = a[c * 4] ^ D[a[1 + c * 4]] ^ E[a[2 + c * 4]] ^ a[3 + c * 4],b[2 + c * 4] = a[c * 4] ^ a[1 + c * 4] ^ D[a[2 + c * 4]] ^ E[a[3 + c * 4]],b[3 + c * 4] = E[a[c * 4]] ^ a[1 + c * 4] ^ a[2 + c * 4] ^ D[a[3 + c * 4]]; else for (c = 0; c < 4; c++)b[c * 4] = I[a[c * 4]] ^ G[a[1 + c * 4]] ^ H[a[2 + c * 4]] ^ F[a[3 + c * 4]],b[1 + c * 4] = F[a[c * 4]] ^ I[a[1 + c * 4]] ^ G[a[2 + c * 4]] ^ H[a[3 + c * 4]],b[2 + c * 4] = H[a[c * 4]] ^ F[a[1 + c * 4]] ^ I[a[2 + c * 4]] ^ G[a[3 + c * 4]],b[3 + c * 4] = G[a[c * 4]] ^ H[a[1 + c * 4]] ^ F[a[2 + c * 4]] ^ I[a[3 + c * 4]];
                return b
            },v = function(a, b, c) {
                var d = [],e;
                for (e = 0; e < 16; e++)d[e] = a[e] ^ b[c][e];
                return d
            },w = function(a, b) {
                var c = [],d;
                for (d = 0; d < 16; d++)c[d] = a[d] ^ b[d];
                return c
            },x = function(b) {
                var d = [],e = [],f,g,h,i = [],j;
                for (f = 0; f < c; f++)g = [b[4 * f],b[4 * f + 1],b[4 * f + 2],b[4 * f + 3]],d[f] = g;
                for (f = c; f < 4 * (a + 1); f++) {
                    d[f] = [];
                    for (h = 0; h < 4; h++)e[h] = d[f - 1][h];
                    f % c === 0 ? (e = y(z(e)),e[0] ^= C[f / c - 1]) : c > 6 && f % c == 4 && (e = y(e));
                    for (h = 0; h < 4; h++)d[f][h] = d[f - c][h] ^ e[h]
                }
                for (f = 0; f < a + 1; f++) {
                    i[f] = [];
                    for (j = 0; j < 4; j++)i[f].push(d[f * 4 + j][0], d[f * 4 + j][1], d[f * 4 + j][2], d[f * 4 + j][3])
                }
                return i
            },y = function(a) {
                for (var b = 0; b < 4; b++)a[b] = A[a[b]];
                return a
            },z = function(a) {
                var b = a[0],c;
                for (c = 0; c < 4; c++)a[c] = a[c + 1];
                return a[3] = b,a
            },A = [99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],B = [82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],C = [1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],D = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],E = [0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],F = [0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],G = [0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],H = [0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],I = [0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141],J = function(a, b, c) {
                var d = m(8),e = n(k(b), d),f = e.key,g = e.iv,h,i = [
                    [83,97,108,116,101,100,95,95].concat(d)
                ]
                ;
                return c || (a = k(a)),h = o(a, f, g),h = i.concat(h),M.encode(h)
            },K = function(a, b, c) {
                var d = M.decode(a),e = d.slice(8, 16),f = n(k(b), e),g = f.key,h = f.iv;
                return d = d.slice(16, d.length),a = p(d, g, h, c),a
            },L = function(a) {
                function b(a, b) {
                    return a << b | a >>> 32 - b
                }

                function c(a, b) {
                    var c,d,e,f,g;
                    return e = a & 2147483648,f = b & 2147483648,c = a & 1073741824,d = b & 1073741824,g = (a & 1073741823) + (b & 1073741823),c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f
                }

                function d(a, b, c) {
                    return a & b | ~a & c
                }

                function e(a, b, c) {
                    return a & c | b & ~c
                }

                function f(a, b, c) {
                    return a ^ b ^ c
                }

                function g(a, b, c) {
                    return b ^ a | ~c
                }

                function h(a, e, f, g, h, i, j) {
                    return a = c(a, c(c(d(e, f, g), h), j)),c(b(a, i), e)
                }

                function i(a, d, f, g, h, i, j) {
                    return a = c(a, c(c(e(d, f, g), h), j)),c(b(a, i), d)
                }

                function j(a, d, e, g, h, i, j) {
                    return a = c(a, c(c(f(d, e, g), h), j)),c(b(a, i), d)
                }

                function k(a, d, e, f, h, i, j) {
                    return a = c(a, c(c(g(d, e, f), h), j)),c(b(a, i), d)
                }

                function l(a) {
                    var b,c = a.length,d = c + 8,e = (d - d % 64) / 64,f = (e + 1) * 16,g = [],h = 0,i = 0;
                    while (i < c)b = (i - i % 4) / 4,h = i % 4 * 8,g[b] = g[b] | a[i] << h,i++;
                    return b = (i - i % 4) / 4,h = i % 4 * 8,g[b] = g[b] | 128 << h,g[f - 2] = c << 3,g[f - 1] = c >>> 29,g
                }

                function m(a) {
                    var b,c,d = [];
                    for (c = 0; c <= 3; c++)b = a >>> c * 8 & 255,d = d.concat(b);
                    return d
                }

                var n = [],o,p,q,r,s,t,u,v,w,x = 7,y = 12,z = 17,A = 22,B = 5,C = 9,D = 14,E = 20,F = 4,G = 11,H = 16,I = 23,J = 6,K = 10,L = 15,M = 21;
                n = l(a),t = 1732584193,u = 4023233417,v = 2562383102,w = 271733878;
                for (o = 0; o < n.length; o += 16)p = t,q = u,r = v,s = w,t = h(t, u, v, w, n[o + 0], x, 3614090360),w = h(w, t, u, v, n[o + 1], y, 3905402710),v = h(v, w, t, u, n[o + 2], z, 606105819),u = h(u, v, w, t, n[o + 3], A, 3250441966),t = h(t, u, v, w, n[o + 4], x, 4118548399),w = h(w, t, u, v, n[o + 5], y, 1200080426),v = h(v, w, t, u, n[o + 6], z, 2821735955),u = h(u, v, w, t, n[o + 7], A, 4249261313),t = h(t, u, v, w, n[o + 8], x, 1770035416),w = h(w, t, u, v, n[o + 9], y, 2336552879),v = h(v, w, t, u, n[o + 10], z, 4294925233),u = h(u, v, w, t, n[o + 11], A, 2304563134),t = h(t, u, v, w, n[o + 12], x, 1804603682),w = h(w, t, u, v, n[o + 13], y, 4254626195),v = h(v, w, t, u, n[o + 14], z, 2792965006),u = h(u, v, w, t, n[o + 15], A, 1236535329),t = i(t, u, v, w, n[o + 1], B, 4129170786),w = i(w, t, u, v, n[o + 6], C, 3225465664),v = i(v, w, t, u, n[o + 11], D, 643717713),u = i(u, v, w, t, n[o + 0], E, 3921069994),t = i(t, u, v, w, n[o + 5], B, 3593408605),w = i(w, t, u, v, n[o + 10], C, 38016083),v = i(v, w, t, u, n[o + 15], D, 3634488961),u = i(u, v, w, t, n[o + 4], E, 3889429448),t = i(t, u, v, w, n[o + 9], B, 568446438),w = i(w, t, u, v, n[o + 14], C, 3275163606),v = i(v, w, t, u, n[o + 3], D, 4107603335),u = i(u, v, w, t, n[o + 8], E, 1163531501),t = i(t, u, v, w, n[o + 13], B, 2850285829),w = i(w, t, u, v, n[o + 2], C, 4243563512),v = i(v, w, t, u, n[o + 7], D, 1735328473),u = i(u, v, w, t, n[o + 12], E, 2368359562),t = j(t, u, v, w, n[o + 5], F, 4294588738),w = j(w, t, u, v, n[o + 8], G, 2272392833),v = j(v, w, t, u, n[o + 11], H, 1839030562),u = j(u, v, w, t, n[o + 14], I, 4259657740),t = j(t, u, v, w, n[o + 1], F, 2763975236),w = j(w, t, u, v, n[o + 4], G, 1272893353),v = j(v, w, t, u, n[o + 7], H, 4139469664),u = j(u, v, w, t, n[o + 10], I, 3200236656),t = j(t, u, v, w, n[o + 13], F, 681279174),w = j(w, t, u, v, n[o + 0], G, 3936430074),v = j(v, w, t, u, n[o + 3], H, 3572445317),u = j(u, v, w, t, n[o + 6], I, 76029189),t = j(t, u, v, w, n[o + 9], F, 3654602809),w = j(w, t, u, v, n[o + 12], G, 3873151461),v = j(v, w, t, u, n[o + 15], H, 530742520),u = j(u, v, w, t, n[o + 2], I, 3299628645),t = k(t, u, v, w, n[o + 0], J, 4096336452),w = k(w, t, u, v, n[o + 7], K, 1126891415),v = k(v, w, t, u, n[o + 14], L, 2878612391),u = k(u, v, w, t, n[o + 5], M, 4237533241),t = k(t, u, v, w, n[o + 12], J, 1700485571),w = k(w, t, u, v, n[o + 3], K, 2399980690),v = k(v, w, t, u, n[o + 10], L, 4293915773),u = k(u, v, w, t, n[o + 1], M, 2240044497),t = k(t, u, v, w, n[o + 8], J, 1873313359),w = k(w, t, u, v, n[o + 15], K, 4264355552),v = k(v, w, t, u, n[o + 6], L, 2734768916),u = k(u, v, w, t, n[o + 13], M, 1309151649),t = k(t, u, v, w, n[o + 4], J, 4149444226),w = k(w, t, u, v, n[o + 11], K, 3174756917),v = k(v, w, t, u, n[o + 2], L, 718787259),u = k(u, v, w, t, n[o + 9], M, 3951481745),t = c(t, p),u = c(u, q),v = c(v, r),w = c(w, s);
                return m(t).concat(m(u), m(v), m(w))
            },M = function() {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b = a.split(""),c = function(a, c) {
                    var d = [],e = "",f,g;
                    totalChunks = Math.floor(a.length * 16 / 3);
                    for (f = 0; f < a.length * 16; f++)d.push(a[Math.floor(f / 16)][f % 16]);
                    for (f = 0; f < d.length; f += 3)e += b[d[f] >> 2],e += b[(d[f] & 3) << 4 | d[f + 1] >> 4],d[f + 1] !== undefined ? e += b[(d[f + 1] & 15) << 2 | d[f + 2] >> 6] : e += "=",d[f + 2] !== undefined ? e += b[d[f + 2] & 63] : e += "=";
                    g = e.slice(0, 64) + "\n";
                    for (f = 1; f < Math.ceil(e.length / 64); f++)g += e.slice(f * 64, f * 64 + 64) + (Math.ceil(e.length / 64) == f + 1 ? "" : "\n");
                    return g
                },d = function(b) {
                    b = b.replace(/\n/g, "");
                    var c = [],d = [],e = [],f;
                    for (f = 0; f < b.length; f += 4)d[0] = a.indexOf(b.charAt(f)),d[1] = a.indexOf(b.charAt(f + 1)),d[2] = a.indexOf(b.charAt(f + 2)),d[3] = a.indexOf(b.charAt(f + 3)),e[0] = d[0] << 2 | d[1] >> 4,e[1] = (d[1] & 15) << 4 | d[2] >> 2,e[2] = (d[2] & 3) << 6 | d[3],c.push(e[0], e[1], e[2]);
                    return c = c.slice(0, c.length - c.length % 16),c
                };
                return typeof Array.indexOf == "function" && (a = b),{encode:c,decode:d}
            }();
            return{size:l,h2a:j,expandKey:x,encryptBlock:q,decryptBlock:r,Decrypt:d,s2a:k,rawEncrypt:o,dec:K,openSSLKey:n,a2h:i,enc:J,Hash:{MD5:L},Base64:M}
        }();
        a.GibberishAES = b
    })(window)
}),provide("app/utils/crypto/aes", function(a) {
    using("$lib/gibberish-aes.js", function() {
        var b = GibberishAES;
        window.GibberishAES = null,a(b)
    })
}),provide("app/utils/storage/with_crypto", function(a) {
    using("app/utils/crypto/aes", function(b) {
        function c() {
            this.after("initialize", function(a, b) {
                this.secret = b
            }),this.around("getItem", function(a, b) {
                try {
                    return a(b)
                } catch(c) {
                    return this.removeItem(b),null
                }
            }),this.around("decode", function(a, c) {
                return a(b.dec(c, this.secret))
            }),this.around("encode", function(a, c) {
                return b.enc(a(c), this.secret)
            })
        }

        a(c)
    })
}),provide("app/utils/storage/with_expiry", function(a) {
    using("app/utils/storage/core", function(b) {
        function c() {
            this.now = function() {
                return(new Date).getTime()
            },this.after("initialize", function() {
                this.ttl = new b(this.namespace + "_ttl")
            }),this.around("setItem", function(a, b, c, d) {
                return typeof d == "number" ? this.ttl.setItem(b, this.now() + d) : this.ttl.removeItem(b),a(b, c)
            }),this.around("getItem", function(a, b) {
                var c = this.ttl.getItem(b);
                return typeof c == "number" && this.now() > c && this.removeItem(b),a(b)
            }),this.after("removeItem", function(a) {
                this.ttl.removeItem(a)
            }),this.after("clear", function() {
                this.ttl.clear()
            })
        }

        a(c)
    })
}),provide("app/utils/storage/array/with_array", function(a) {
    using(function() {
        function b() {
            this.getArray = function(a) {
                return this.getItem(a) || []
            },this.push = function(a, b) {
                var c = this.getArray(a),d = c.push(b);
                return this.setItem(a, c),d
            },this.pushAll = function(a, b) {
                var c = this.getArray(a);
                return c.push.apply(c, b),this.setItem(a, c),c
            }
        }

        a(b)
    })
}),provide("app/utils/storage/array/with_max_elements", function(a) {
    using("core/compose", "app/utils/storage/array/with_array", function(b, c) {
        function d() {
            b.mixin(this, [c]),this.maxElements = {},this.getMaxElements = function(a) {
                return this.maxElements[a] || 0
            },this.setMaxElements = function(a, b) {
                this.maxElements[a] = b
            },this.before("push", function(a, b) {
                this.makeRoomFor(a, 1)
            }),this.around("pushAll", function(a, b, c) {
                return c = c || [],this.makeRoomFor(b, c.length),a(b, c.slice(Math.max(0, c.length - this.getMaxElements(b))))
            }),this.makeRoomFor = function(a, b) {
                var c = this.getArray(a),d = c.length + b - this.getMaxElements(a);
                d > 0 && (c.splice(0, d),this.setItem(a, c))
            }
        }

        a(d)
    })
}),provide("app/utils/storage/array/with_unique_elements", function(a) {
    using("core/compose", "app/utils/storage/array/with_array", function(b, c) {
        function d() {
            b.mixin(this, [c]),this.before("push", function(a, b) {
                var c = this.getArray(a);
                this.deleteElement(c, b) && this.setItem(a, c)
            }),this.around("pushAll", function(a, b, c) {
                c = c || [];
                var d = this.getArray(b),e = !1,f = [],g = {};
                return c.forEach(function(a) {
                    g[a] || (e = this.deleteElement(d, a) || e,g[a] = !0,f.push(a))
                }, this),e && this.setItem(b, d),a(b, f)
            }),this.deleteElement = function(a, b) {
                var c = -1;
                return(c = a.indexOf(b)) >= 0 ? (a.splice(c, 1),!0) : !1
            }
        }

        a(d)
    })
}),provide("app/utils/storage/custom", function(a) {
    using("core/compose", "app/utils/storage/core", "app/utils/storage/with_crypto", "app/utils/storage/with_expiry", "app/utils/storage/array/with_array", "app/utils/storage/array/with_max_elements", "app/utils/storage/array/with_unique_elements", function(b, c, d, e, f, g, h) {
        function j(a) {
            var j = Object.keys(a).sort().join(","),k;
            if (k = i[j])return k;
            k = function() {
                c.apply(this, arguments)
            },k.prototype = new c;
            var l = [];
            return a.withCrypto && l.push(d),a.withExpiry && l.push(e),a.withArray && l.push(f),a.withUniqueElements && l.push(h),a.withMaxElements && l.push(g),l.length > 0 && b.mixin(k.prototype, l),i[j] = k,k
        }

        var i = {};
        a(j)
    })
}),provide("app/utils/cached_ajax", function(a) {
    using("core/jquery", "app/utils/storage/custom", function($, b) {
        function e(a, b, c, e, f) {
            function i() {
                e && e()
            }

            function j(a) {
                var e = {data:a,time:(new Date).getTime()};
                d.setItem(g, e, b),c && c(a)
            }

            var g = encodeURIComponent(a),h = d.getItem(g);
            if (h && new Date - h.time <= b) {
                c && c(h.data);
                return
            }
            $.ajax({type:"GET",url:a,headers:f || {},success:j.bind(this),error:i.bind(this)})
        }

        var c = b({withExpiry:!0,withCrypto:!0}),d = new c("cached_ajax");
        a(e)
    })
}),"use strict",provide("app/data/autocomplete", function(a) {
    using("core/component", "app/utils/levenshtein", "app/utils/cached_ajax", function(b, c, d) {
        function f() {
            this.defaultAttrs({dataTTL:3e5,maxResults:10,userCount:500,filterByDmAccess:!1,triggerToken:/^@/}),this.isContinuousMatch = function(a, b) {
                var c = new RegExp("^" + b, "i");
                return c.test(a)
            },this.isFuzzyMatch = function(a, b) {
                var c = new RegExp("^" + b.split("").join(".*"), "i");
                return c.test(a)
            },this.levenshteinCompare = function(a, b, d) {
                var e = c(a.screen_name, d),f = c(b.screen_name, d);
                return e == f ? c(a.name, d) - c(b.name, d) : e - f
            },this.sorter = function(a, b) {
                function g(a) {
                    var b = 0;
                    return b += a.screen_name == f ? 16 : 0,b += c(a.name, f) ? 8 : 0,b += c(a.screen_name, f) ? 4 : 0,b += d(a.name, f) ? 2 : 0,b += d(a.screen_name, f) ? 1 : 0,a.score = b,b
                }

                var c = this.isContinuousMatch,d = this.isFuzzyMatch,e = this.levenshteinCompare,f = this.query;
                return g(b) - g(a) || e(a, b, f)
            },this.getMatchesForWord = function(a) {
                var b = a.replace(this.attr.triggerToken, "").toLowerCase();
                if (this.attr.triggerToken && b == a.toLowerCase() || !b)return[];
                var c = this.users.filter(function(a) {
                    return this.attr.filterByDmAccess && !a.can_dm ? !1 : this.isFuzzyMatch(a.name, b) || this.isFuzzyMatch(a.screen_name, b)
                }, this);
                return c.sort(this.sorter.bind({isFuzzyMatch:this.isFuzzyMatch,isContinuousMatch:this.isContinuousMatch,levenshteinCompare:this.levenshteinCompare,query:b})).slice(0, this.attr.maxResults)
            },this.withUsers = function(a) {
                if (this.users) {
                    a();
                    return
                }
                d("/users/autocomplete.json?count=" + this.attr.userCount, this.attr.dataTTL, function(b) {
                    this.users = b.ids,a()
                }.bind(this), null, {"X-PHX":"true"})
            },this.updateAutocomplete = function(a, b) {
                this.withUsers(function() {
                    this.trigger("dataAutocompleteMatches", {matches:this.getMatchesForWord(b.word),word:b.word})
                }.bind(this))
            },this.after("initialize", function() {
                this.on("uiAutocompleteNeedsUpdate", this.updateAutocomplete)
            })
        }

        var e = b(f);
        a(e)
    })
}),"use strict",provide("app/ui/with_timestamp_updating", function(a) {
    using("core/jquery", "core/utils", "core/i18n", function($, b, _) {
        function c() {
            this.defaultAttrs({timestampSelector:".js-relative-timestamp",timestampClass:"js-relative-timestamp"}),this.monthLabels = [_("Jan"),_("Feb"),_("Mar"),_("Apr"),_("May"),_("Jun"),_("Jul"),_("Aug"),_("Sep"),_("Oct"),_("Nov"),_("Dec")],this.currentTimeSecs = function() {
                return new Date / 1e3
            },this.timestampParts = function(a) {
                return{year4:a.getFullYear().toString(),year:a.getFullYear().toString().slice(2),month:this.monthLabels[a.getMonth()],day:a.getDate(),hours24:a.getHours(),hours12:a.getHours() % 12 || 12,minutes:a.getMinutes().toString().replace(/^(\d)$/, "0$1"),amPm:a.getHours() < 12 ? _("AM") : _("PM"),date:a.getDate()}
            },this.updateTimestamps = function() {
                var a = this,b = a.currentTimeSecs();
                this.select("timestampSelector").each(function() {
                    var c = $(this).data("time"),d = b - c,e = "",f = !0;
                    if (d <= 2)e = _("now"); else if (d < 60)e = _("{{number}}s", {number:parseInt(d)}); else {
                        var g = parseInt(d / 60, 10);
                        if (g < 60)e = _("{{number}}m", {number:g}); else if (g < 1440)e = _("{{number}}h", {number:parseInt(g / 60, 10)}); else {
                            var h = a.timestampParts(new Date(c * 1e3));
                            f = !1,g < 525600 ? e = _("{{date}} {{month}}", h) : e = _("{{date}} {{month}} {{year}}", h)
                        }
                    }
                    f || $(this).removeClass(a.attr.timestampClass),$(this).html(e)
                })
            },this.after("initialize", function(a) {
                this.on(document, "uiWantsToRefreshTimestamps", this.updateTimestamps)
            })
        }

        a(c)
    })
}),"use strict",provide("app/ui/direct_message_dialog", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", "app/ui/with_timestamp_updating", function(b, c, $, d, e, f) {
        function i() {
            this.defaultAttrs({dialogSelector:"#dm_dialog",closeSelector:".twttr-dialog-close",classConversationList:"dm-conversation-list",classConversation:"dm-conversation",classNew:"dm-new",viewConversationList:"#dm_dialog_conversation_list",viewConversation:"#dm_dialog_conversation",viewNew:"#dm_dialog_new",linksForConversationListView:"#dm_dialog_new h3 a, #dm_dialog_conversation h3 a",linksForConversationView:".dm-thread",linksForNewView:".dm-new-button",contentSelector:".twttr-dialog-content",tweetBoxSelector:".dm-tweetbox",deleleSelector:".dm-delete",deleteConfirmSelector:".dm-deleting .js-prompt-ok",deleteCancelSelector:".dm-deleting .js-prompt-cancel",autocompleteImage:"img.selected-profile",autocompleteInput:"input.twttr-directmessage-input",errorContainerSelector:".js-dm-error",errorTextSelector:".dm-error-text",errorCloseSelector:".js-dismiss"}),this.openDialog = function(a, b) {
                this.trigger("dataRefreshDMs"),this.renderConversationListView(),this.open()
            },this.openConversation = function(a, b) {
                this.trigger("dataRefreshDMs"),this.renderConversationView(null, b),this.open()
            },this.renderConversationListView = function(a, b) {
                this.renderView(this.attr.classConversationList);
                var c = this.select("viewConversationList");
                if (c.hasClass("needs-refresh")) {
                    c.removeClass("needs-refresh"),this.trigger("uiNeedsDMConversationList", {since_id:0});
                    return
                }
                this.trigger("uiDMDialogOpenedConversationList")
            },this.renderConversationView = function(a, b) {
                var b = b || {},c = b.screen_name || $(b.el).data("thread-id"),d = b.name || $(b.el).find(".fullname").text();
                this.$node.find(".dm_dialog_real_name").text(d),this.select("viewConversation").find(this.attr.contentSelector).empty(),this.renderView(this.attr.classConversation),this.trigger("uiDMDialogOpenedConversation", {recipient:c}),h[c] ? this.updateConversation(null, h[c]) : this.trigger("uiNeedsDMConversation", {screen_name:c}),this.trigger("uiDMBoxReset")
            },this.renderNewView = function(a, b) {
                var c = this.select("autocompleteImage").attr("data-default-img");
                this.trigger("uiDMDialogOpenedNewConversation"),this.renderView(this.attr.classNew),this.trigger("uiDMBoxReset"),this.select("autocompleteImage").attr("src", c),this.select("autocompleteInput").val("").focus()
            },this.renderView = function(a) {
                this.hideError(),this.$dialogContainer.removeClass(this.viewClasses).addClass(a),this.trigger("uiDMBoxReset"),this.attr.eventData || (this.attr.eventData = {});
                var b;
                switch (a) {
                    case this.attr.classNew:
                        b = "dm_new_conversation_dialog";
                        break;
                    case this.attr.classConversation:
                        b = "dm_existing_conversation_dialog";
                        break;
                    case this.attr.classConversationList:
                        b = "dm_conversation_list_dialog"
                }
                this.attr.eventData.scribeContext = {component:b}
            },this.updateConversationList = function(a, b) {
                var c = this.select("viewConversationList"),d = c.find("li");
                b.sourceEventData.since_id ? d.filter(
                        function() {
                            return $.inArray($(this).data("thread-id"), b.threads) > -1
                        }).remove() : d.remove();
                var e = b.html || "";
                c.find(this.attr.contentSelector + " ul").prepend(e);
                var f = c.find(".dm-no-messages");
                c.find("li").length == 0 ? f.addClass("show") : f.removeClass("show")
            },this.updateConversation = function(a, b) {
                h[b.recipient.screen_name] = b,this.$dialogContainer.hasClass(this.attr.classConversation) || this.renderConversationView(null, {screen_name:b.recipient.screen_name,name:b.recipient.name});
                var c = this.select("viewConversation").find(this.attr.contentSelector);
                c.html(b.html);
                if (!c.find(".js-dm-item").length) {
                    this.trigger("dataRefreshDMs"),this.renderConversationListView();
                    return
                }
                var d = c.find(".dm-convo");
                d.length && d.scrollTop(d[0].scrollHeight)
            },this.sendMessage = function(a, b) {
                var c = this.$dialogContainer.hasClass(this.attr.classConversation),d = b.recipient;
                !d && c ? d = this.select("viewConversation").find("div[data-thread-id]").data("thread-id") : d || (d = this.select("viewNew").find("input[type=text]").val().trim());
                if (!d)return;
                this.trigger("uiDMDialogSendMessage", {tweetboxId:b.tweetboxId,screen_name:d.replace(/^@/, ""),text:b.tweetData.status}),this.trigger("uiDMBoxReset"),this.select("viewConversationList").addClass("needs-refresh")
            },this.selectAutocompleteUser = function(a, b) {
                var c = this.select("viewConversationList").find("li[data-thread-id=" + b.screen_name + "]").length;
                c ? this.renderConversationView(null, {screen_name:b.screen_name,name:b.name}) : this.select("autocompleteImage").attr("src", b.profile_image_url)
            },this.deleteMessage = function(a, b) {
                this.select("tweetBoxSelector").addClass("dm-deleting"),this.select("viewConversation").find(".marked-for-deletion").removeClass("marked-for-deletion"),$(a.target).closest(".dm").addClass("marked-for-deletion")
            },this.deleteConfirm = function(a, b) {
                var c = this.select("viewConversation").find(".marked-for-deletion");
                this.trigger("uiDMDialogDeleteMessage", {id:c.attr("data-message-id")}),this.select("viewConversationList").addClass("needs-refresh"),this.select("tweetBoxSelector").removeClass("dm-deleting")
            },this.deleteCancel = function(a, b) {
                this.select("tweetBoxSelector").removeClass("dm-deleting"),this.select("viewConversation").find(".marked-for-deletion").removeClass("marked-for-deletion")
            },this.showError = function(a, b) {
                this.select("errorTextSelector").html(b.message || b.error),this.select("errorContainerSelector").show()
            },this.hideError = function(a, b) {
                this.select("errorContainerSelector").hide()
            },this.after("initialize", function() {
                this.$dialogContainer = this.select("dialogSelector"),this.viewClasses = [this.attr.classConversationList,this.attr.classConversation,this.attr.classNew].join(" "),this.on(document, "uiNeedsDMDialog", this.openDialog),this.on(document, "uiOpenDMConversation", this.openConversation),this.on(document, "dataDMConversationListResult", this.updateConversationList),this.on(document, "dataDMSuccess dataDMConversationResult", this.updateConversation),this.on(document, "uiSendDM", this.sendMessage),this.on(document, "dataDMError", this.showError),this.on("uiSendAutocompleteData", this.selectAutocompleteUser),this.on("click", {linksForConversationListView:this.renderConversationListView,linksForConversationView:this.renderConversationView,linksForNewView:this.renderNewView,deleleSelector:this.deleteMessage,deleteConfirmSelector:this.deleteConfirm,deleteCancelSelector:this.deleteCancel,errorCloseSelector:this.hideError})
            })
        }

        var g = b(i, d, e, f),h = {};
        a(g)
    })
}),provide("lib/twitter-text", function(a) {
    var b = {};
    /*!
     * twitter-text-js 1.4.16
     *
     * Copyright 2011 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this work except in compliance with the License.
     * You may obtain a copy of the License at:
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     */
    (function() {
        function c(a, c) {
            return c = c || "",typeof a != "string" && (a.global && c.indexOf("g") < 0 && (c += "g"),a.ignoreCase && c.indexOf("i") < 0 && (c += "i"),a.multiline && c.indexOf("m") < 0 && (c += "m"),a = a.source),new RegExp(a.replace(/#\{(\w+)\}/g, function(a, c) {
                var d = b.txt.regexen[c] || "";
                return typeof d != "string" && (d = d.source),d
            }), c)
        }

        function d(a, b) {
            return a.replace(/#\{(\w+)\}/g, function(a, c) {
                return b[c] || ""
            })
        }

        function e(a, b, c) {
            var d = String.fromCharCode(b);
            return c !== b && (d += "-" + String.fromCharCode(c)),a.push(d),a
        }

        function p(a) {
            var b = {};
            for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
            return b
        }

        function t(a, b, c) {
            return c ? !a || a.match(b) && RegExp["$&"] === a : typeof a == "string" && a.match(b) && RegExp["$&"] === a
        }

        b.txt = {},b.txt.regexen = {};
        var a = {"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#39;"};
        b.txt.htmlEscape = function(b) {
            return b && b.replace(/[&"'><]/g, function(b) {
                return a[b]
            })
        };
        var f = String.fromCharCode,g = [f(32),f(133),f(160),f(5760),f(6158),f(8232),f(8233),f(8239),f(8287),f(12288)];
        e(g, 9, 13),e(g, 8192, 8202);
        var h = [f(65534),f(65279),f(65535)];
        e(h, 8234, 8238),b.txt.regexen.spaces_group = c(g.join("")),b.txt.regexen.spaces = c("[" + g.join("") + "]"),b.txt.regexen.invalid_chars_group = c(h.join("")),b.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/,b.txt.regexen.atSigns = /[@＠]/,b.txt.regexen.extractMentions = c(/(^|[^a-zA-Z0-9_!#$%&*@＠])(#{atSigns})([a-zA-Z0-9_]{1,20})/g),b.txt.regexen.extractReply = c(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/),b.txt.regexen.listName = /[a-zA-Z][a-zA-Z0-9_\-\u0080-\u00ff]{0,24}/,b.txt.regexen.extractMentionsOrLists = c(/(^|[^a-zA-Z0-9_!#$%&*@＠])(#{atSigns})([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?/g);
        var i = [];
        e(i, 1024, 1279),e(i, 1280, 1319),e(i, 11744, 11775),e(i, 42560, 42655),e(i, 1425, 1469),e(i, 1471, 1471),e(i, 1473, 1474),e(i, 1476, 1477),e(i, 1479, 1479),e(i, 1488, 1514),e(i, 1520, 1522),e(i, 64274, 64296),e(i, 64298, 64310),e(i, 64312, 64316),e(i, 64318, 64318),e(i, 64320, 64321),e(i, 64323, 64324),e(i, 64326, 64335),e(i, 1552, 1562),e(i, 1568, 1631),e(i, 1646, 1747),e(i, 1749, 1756),e(i, 1758, 1768),e(i, 1770, 1775),e(i, 1786, 1788),e(i, 1791, 1791),e(i, 1872, 1919),e(i, 2208, 2208),e(i, 2210, 2220),e(i, 2276, 2302),e(i, 64336, 64433),e(i, 64467, 64829),e(i, 64848, 64911),e(i, 64914, 64967),e(i, 65008, 65019),e(i, 65136, 65140),e(i, 65142, 65276),e(i, 8204, 8204),e(i, 3585, 3642),e(i, 3648, 3662),e(i, 4352, 4607),e(i, 12592, 12677),e(i, 43360, 43391),e(i, 44032, 55215),e(i, 55216, 55295),e(i, 65441, 65500),e(i, 12449, 12538),e(i, 12540, 12542),e(i, 65382, 65439),e(i, 65392, 65392),e(i, 65296, 65305),e(i, 65313, 65338),e(i, 65345, 65370),e(i, 12353, 12438),e(i, 12441, 12446),e(i, 13312, 19903),e(i, 19968, 40959),e(i, 173824, 177983),e(i, 177984, 178207),e(i, 194560, 195103),e(i, 12291, 12291),e(i, 12293, 12293),e(i, 12347, 12347),b.txt.regexen.nonLatinHashtagChars = c(i.join(""));
        var j = [];
        e(j, 192, 214),e(j, 216, 246),e(j, 248, 255),e(j, 256, 591),e(j, 595, 596),e(j, 598, 599),e(j, 601, 601),e(j, 603, 603),e(j, 611, 611),e(j, 616, 616),e(j, 623, 623),e(j, 626, 626),e(j, 649, 649),e(j, 651, 651),e(j, 699, 699),e(j, 7680, 7935),b.txt.regexen.latinAccentChars = c(j.join("")),b.txt.regexen.endScreenNameMatch = c(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/),b.txt.regexen.hashtagAlpha = c(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i),b.txt.regexen.hashtagAlphaNumeric = c(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i),b.txt.regexen.endHashtagMatch = /^(?:[#＃]|:\/\/)/,b.txt.regexen.hashtagBoundary = c(/(?:^|$|[^&\/a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/),b.txt.regexen.autoLinkHashtags = c(/(#{hashtagBoundary})(#|＃)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi),b.txt.regexen.autoLinkUsernamesOrLists = /(^|[^a-zA-Z0-9_!#\$%&*@＠]|RT:?)([@＠]+)([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?/g,b.txt.regexen.autoLinkEmoticon = /(8\-\#|8\-E|\+\-\(|\`\@|\`O|\&lt;\|:~\(|\}:o\{|:\-\[|\&gt;o\&lt;|X\-\/|\[:-\]\-I\-|\/\/\/\/Ö\\\\\\\\|\(\|:\|\/\)|∑:\*\)|\( \| \))/g,b.txt.regexen.validPrecedingChars = c(/(?:[^-\/"'!=A-Za-z0-9_@＠$#＃\.#{invalid_chars_group}]|^)/),b.txt.regexen.invalidDomainChars = d("#{punct}#{spaces_group}#{invalid_chars_group}", b.txt.regexen),b.txt.regexen.validDomainChars = c(/[^#{invalidDomainChars}]/),b.txt.regexen.validSubdomain = c(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/),b.txt.regexen.validDomainName = c(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/),b.txt.regexen.validGTLD = c(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)(?=[^a-zA-Z]|$))/),b.txt.regexen.validCCTLD = c(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)(?=[^a-zA-Z]|$))/),b.txt.regexen.validPunycode = c(/(?:xn--[0-9a-z]+)/),b.txt.regexen.validDomain = c(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/),b.txt.regexen.validAsciiDomain = c(/(?:(?:[a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi),b.txt.regexen.invalidShortDomain = c(/^#{validDomainName}#{validCCTLD}$/),b.txt.regexen.validPortNumber = c(/[0-9]+/),b.txt.regexen.validGeneralUrlPathChars = c(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~|&#{latinAccentChars}]/i),b.txt.regexen.validUrlBalancedParens = c(/\(#{validGeneralUrlPathChars}+\)/i),b.txt.regexen.validUrlPathEndingChars = c(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i),b.txt.regexen.validUrlPath = c("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"),b.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i,b.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i,b.txt.regexen.extractUrl = c("((#{validPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"),b.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i,b.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i,b.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i,b.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i,b.txt.regexen.validateUrlPchar = c("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"),b.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i,b.txt.regexen.validateUrlUserinfo = c("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"),b.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i,b.txt.regexen.validateUrlIpv4 = c(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i),b.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i,b.txt.regexen.validateUrlIp = c("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"),b.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i,b.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i,b.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i,b.txt.regexen.validateUrlDomain = c(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i),b.txt.regexen.validateUrlHost = c("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"),b.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,b.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,b.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,b.txt.regexen.validateUrlUnicodeDomain = c(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i),b.txt.regexen.validateUrlUnicodeHost = c("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"),b.txt.regexen.validateUrlPort = /[0-9]{1,5}/,b.txt.regexen.validateUrlUnicodeAuthority = c("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"),b.txt.regexen.validateUrlAuthority = c("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"),b.txt.regexen.validateUrlPath = c(/(\/#{validateUrlPchar}*)*/i),b.txt.regexen.validateUrlQuery = c(/(#{validateUrlPchar}|\/|\?)*/i),b.txt.regexen.validateUrlFragment = c(/(#{validateUrlPchar}|\/|\?)*/i),b.txt.regexen.validateUrlUnencoded = c("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
        var k = "tweet-url",l = "list-slug",m = "username",n = "hashtag",o = ' rel="nofollow"';
        b.txt.autoLink = function(a, c) {
            return c = p(c || {}),b.txt.autoLinkUsernamesOrLists(b.txt.autoLinkUrlsCustom(b.txt.autoLinkHashtags(a, c), c), c)
        },b.txt.autoLinkUsernamesOrLists = function(a, c) {
            c = p(c || {}),c.urlClass = c.urlClass || k,c.listClass = c.listClass || l,c.usernameClass = c.usernameClass || m,c.usernameUrlBase = c.usernameUrlBase || "https://twitter.com/",c.listUrlBase = c.listUrlBase || "https://twitter.com/";
            if (!c.suppressNoFollow)var e = o;
            var f = "",g = b.txt.splitTags(a);
            for (var h = 0; h < g.length; h++) {
                var i = g[h];
                h !== 0 && (f += h % 2 === 0 ? ">" : "<"),h % 4 !== 0 ? f += i : f += i.replace(b.txt.regexen.autoLinkUsernamesOrLists, function(a, f, g, h, i, j, k) {
                    var l = k.slice(j + a.length),m = {before:f,at:c.usernameIncludeSymbol ? "" : g,at_before_user:c.usernameIncludeSymbol ? g : "",user:b.txt.htmlEscape(h),slashListname:b.txt.htmlEscape(i),extraHtml:e,preChunk:"",postChunk:""};
                    for (var n in c)c.hasOwnProperty(n) && (m[n] = c[n]);
                    if (i && !c.suppressLists) {
                        var o = m.chunk = d("#{user}#{slashListname}", m);
                        return m.list = b.txt.htmlEscape(o.toLowerCase()),d('#{before}#{at}<a class="#{urlClass} #{listClass}" href="#{listUrlBase}#{list}"#{extraHtml}>#{preChunk}#{at_before_user}#{chunk}#{postChunk}</a>', m)
                    }
                    return l && l.match(b.txt.regexen.endScreenNameMatch) ? a : (m.chunk = m.user,m.dataScreenName = c.suppressDataScreenName ? "" : d('data-screen-name="#{chunk}" ', m),d('#{before}#{at}<a class="#{urlClass} #{usernameClass}" #{dataScreenName}href="#{usernameUrlBase}#{chunk}"#{extraHtml}>#{preChunk}#{at_before_user}#{chunk}#{postChunk}</a>', m))
                })
            }
            return f
        },b.txt.autoLinkHashtags = function(a, c) {
            c = p(c || {}),c.urlClass = c.urlClass || k,c.hashtagClass = c.hashtagClass || n,c.hashtagUrlBase = c.hashtagUrlBase || "https://twitter.com/#!/search?q=%23";
            if (!c.suppressNoFollow)var e = o;
            return a.replace(b.txt.regexen.autoLinkHashtags, function(a, f, g, h, i, j) {
                var k = j.slice(i + a.length);
                if (k.match(b.txt.regexen.endHashtagMatch))return a;
                var l = {before:f,hash:b.txt.htmlEscape(g),preText:"",text:b.txt.htmlEscape(h),postText:"",extraHtml:e};
                for (var m in c)c.hasOwnProperty(m) && (l[m] = c[m]);
                return d('#{before}<a href="#{hashtagUrlBase}#{text}" title="##{text}" class="#{urlClass} #{hashtagClass}"#{extraHtml}>#{hash}#{preText}#{text}#{postText}</a>', l)
            })
        },b.txt.autoLinkUrlsCustom = function(a, c) {
            c = p(c || {}),c.suppressNoFollow || (c.rel = "nofollow"),c.urlClass && (c["class"] = c.urlClass,delete c.urlClass);
            var e,f,g;
            if (c.urlEntities) {
                e = {};
                for (f = 0,g = c.urlEntities.length; f < g; f++)e[c.urlEntities[f].url] = c.urlEntities[f]
            }
            return delete c.suppressNoFollow,delete c.suppressDataScreenName,delete c.listClass,delete c.usernameClass,delete c.usernameUrlBase,delete c.listUrlBase,delete c.urlEntities,a.replace(b.txt.regexen.extractUrl, function(a, f, g, h, i, j, k, l, m) {
                var n;
                if (i) {
                    var o = "",p = "";
                    h.match(b.txt.regexen.validTcoUrl) && (h = RegExp.lastMatch,p = RegExp.rightContext);
                    var q = h,r = b.txt.htmlEscape(q);
                    if (e && e[h] && e[h].display_url) {
                        var q = e[h].display_url,s = e[h].expanded_url;
                        c.title || (c.title = s);
                        var t = q.replace(/…/g, "");
                        if (s.indexOf(t) != -1) {
                            var u = s.indexOf(t),v = {displayUrlSansEllipses:t,beforeDisplayUrl:s.substr(0, u),afterDisplayUrl:s.substr(u + t.length),precedingEllipsis:q.match(/^…/) ? "…" : "",followingEllipsis:q.match(/…$/) ? "…" : ""};
                            $.each(v, function(a, c) {
                                v[a] = b.txt.htmlEscape(c)
                            }),v.invisible = "style='font-size:0; line-height:0'",r = d("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v)
                        }
                    }
                    for (var w in c) {
                        var x = c[w].toString();
                        o += d(' #{k}="#{val}" ', {k:w,val:b.txt.htmlEscape(x)})
                    }
                    var y = {before:g,htmlAttrs:o,url:b.txt.htmlEscape(h),linkText:r,after:p};
                    return d('#{before}<a href="#{url}"#{htmlAttrs}>#{linkText}</a>#{after}', y)
                }
                return f
            })
        },b.txt.extractMentions = function(a) {
            var c = [],d = b.txt.extractMentionsWithIndices(a);
            for (var e = 0; e < d.length; e++) {
                var f = d[e].screenName;
                c.push(f)
            }
            return c
        },b.txt.extractMentionsWithIndices = function(a) {
            if (!a)return[];
            var c = [],d = 0;
            return a.replace(b.txt.regexen.extractMentions, function(e, f, g, h, i, j) {
                var k = j.slice(i + e.length);
                if (!k.match(b.txt.regexen.endScreenNameMatch)) {
                    var l = a.indexOf(g + h, d);
                    d = l + h.length + 1,c.push({screenName:h,indices:[l,d]})
                }
            }),c
        },b.txt.extractMentionsOrListsWithIndices = function(a) {
            if (!a)return[];
            var c = [],d = 0;
            return a.replace(b.txt.regexen.extractMentionsOrLists, function(e, f, g, h, i, j, k) {
                var l = k.slice(j + e.length);
                if (!l.match(b.txt.regexen.endScreenNameMatch)) {
                    i = i || "";
                    var m = a.indexOf(g + h + i, d);
                    d = m + h.length + i.length + 1,c.push({screenName:h,listSlug:i,indices:[m,d]})
                }
            }),c
        },b.txt.extractReplies = function(a) {
            if (!a)return null;
            var c = a.match(b.txt.regexen.extractReply);
            return!c || RegExp.rightContext.match(b.txt.regexen.endScreenNameMatch) ? null : c[1]
        },b.txt.extractUrls = function(a) {
            var c = [],d = b.txt.extractUrlsWithIndices(a);
            for (var e = 0; e < d.length; e++)c.push(d[e].url);
            return c
        },b.txt.extractUrlsWithIndices = function(a) {
            if (!a)return[];
            var c = [];
            while (b.txt.regexen.extractUrl.exec(a)) {
                var d = RegExp.$2,e = RegExp.$3,f = RegExp.$4,g = RegExp.$5,h = RegExp.$7,i = b.txt.regexen.extractUrl.lastIndex,j = i - e.length;
                if (!f) {
                    var k = null,l = !1,m = 0;
                    g.replace(b.txt.regexen.validAsciiDomain, function(a) {
                        var d = g.indexOf(a, m);
                        m = d + a.length,k = {url:a,indices:[j + d,j + m]},l = a.match(b.txt.regexen.invalidShortDomain),l || c.push(k)
                    });
                    if (k == null)continue;
                    h && (l && c.push(k),k.url = e.replace(g, k.url),k.indices[1] = i)
                } else e.match(b.txt.regexen.validTcoUrl) && (e = RegExp.lastMatch,i = j + e.length),c.push({url:e,indices:[j,i]})
            }
            return c
        },b.txt.extractHashtags = function(a) {
            var c = [],d = b.txt.extractHashtagsWithIndices(a);
            for (var e = 0; e < d.length; e++)c.push(d[e].hashtag);
            return c
        },b.txt.extractHashtagsWithIndices = function(a) {
            if (!a)return[];
            var c = [],d = 0;
            return a.replace(b.txt.regexen.autoLinkHashtags, function(e, f, g, h, i, j) {
                var k = j.slice(i + e.length);
                if (k.match(b.txt.regexen.endHashtagMatch))return;
                var l = a.indexOf(g + h, d);
                d = l + h.length + 1,c.push({hashtag:h,indices:[l,d]})
            }),c
        },b.txt.modifyIndicesFromUnicodeToUTF16 = function(a, c) {
            b.txt.convertUnicodeIndices(a, c, !1)
        },b.txt.modifyIndicesFromUTF16ToUnicode = function(a, c) {
            b.txt.convertUnicodeIndices(a, c, !0)
        },b.txt.convertUnicodeIndices = function(a, b, c) {
            if (b.length == 0)return;
            var d = 0,e = 0;
            b.sort(function(a, b) {
                return a.indices[0] - b.indices[0]
            });
            var f = 0,g = b[0];
            while (d < a.length) {
                if (g.indices[0] == (c ? d : e)) {
                    var h = g.indices[1] - g.indices[0];
                    g.indices[0] = c ? e : d,g.indices[1] = g.indices[0] + h,f++;
                    if (f == b.length)break;
                    g = b[f]
                }
                var i = a.charCodeAt(d);
                55296 <= i && i <= 56319 && d < a.length - 1 && (i = a.charCodeAt(d + 1),56320 <= i && i <= 57343 && d++),e++,d++
            }
        },b.txt.splitTags = function(a) {
            var b = a.split("<"),c,d = [],e;
            for (var f = 0; f < b.length; f += 1) {
                e = b[f];
                if (!e)d.push(""); else {
                    c = e.split(">");
                    for (var g = 0; g < c.length; g += 1)d.push(c[g])
                }
            }
            return d
        },b.txt.hitHighlight = function(a, c, d) {
            var e = "em";
            c = c || [],d = d || {};
            if (c.length === 0)return a;
            var f = d.tag || e,g = ["<" + f + ">","</" + f + ">"],h = b.txt.splitTags(a),i,j,k,l = "",m = 0,n = h[0],o = 0,p = 0,q = !1,r = n,s = [],t,u,v,w,x;
            for (j = 0; j < c.length; j += 1)for (k = 0; k < c[j].length; k += 1)s.push(c[j][k]);
            for (t = 0; t < s.length; t += 1) {
                u = s[t],v = g[t % 2],w = !1;
                while (n != null && u >= o + n.length)l += r.slice(p),q && u === o + r.length && (l += v,w = !0),h[m + 1] && (l += "<" + h[m + 1] + ">"),o += r.length,p = 0,m += 2,n = h[m],r = n,q = !1;
                !w && n != null ? (x = u - o,l += r.slice(p, x) + v,p = x,t % 2 === 0 ? q = !0 : q = !1) : w || (w = !0,l += v)
            }
            if (n != null) {
                p < r.length && (l += r.slice(p));
                for (t = m + 1; t < h.length; t += 1)l += t % 2 === 0 ? h[t] : "<" + h[t] + ">"
            }
            return l
        };
        var q = 140,r = [f(65534),f(65279),f(65535),f(8234),f(8235),f(8236),f(8237),f(8238)];
        b.txt.isInvalidTweet = function(a) {
            if (!a)return"empty";
            if (a.length > q)return"too_long";
            for (var b = 0; b < r.length; b++)if (a.indexOf(r[b]) >= 0)return"invalid_characters";
            return!1
        },b.txt.isValidTweetText = function(a) {
            return!b.txt.isInvalidTweet(a)
        },b.txt.isValidUsername = function(a) {
            if (!a)return!1;
            var c = b.txt.extractMentions(a);
            return c.length === 1 && c[0] === a.slice(1)
        };
        var s = c(/^#{autoLinkUsernamesOrLists}$/);
        b.txt.isValidList = function(a) {
            var b = a.match(s);
            return!!b && b[1] == "" && !!b[4]
        },b.txt.isValidHashtag = function(a) {
            if (!a)return!1;
            var c = b.txt.extractHashtags(a);
            return c.length === 1 && c[0] === a.slice(1)
        },b.txt.isValidUrl = function(a, c, d) {
            c == null && (c = !0),d == null && (d = !0);
            if (!a)return!1;
            var e = a.match(b.txt.regexen.validateUrlUnencoded);
            if (!e || e[0] !== a)return!1;
            var f = e[1],g = e[2],h = e[3],i = e[4],j = e[5];
            return(!d || t(f, b.txt.regexen.validateUrlScheme) && f.match(/^https?$/i)) && t(h, b.txt.regexen.validateUrlPath) && t(i, b.txt.regexen.validateUrlQuery, !0) && t(j, b.txt.regexen.validateUrlFragment, !0) ? c && t(g, b.txt.regexen.validateUrlUnicodeAuthority) || !c && t(g, b.txt.regexen.validateUrlAuthority) : !1
        },typeof module != "undefined" && module.exports && (module.exports = b.txt)
    })(),a(b.txt)
}),"use strict",provide("app/ui/with_character_counter", function(a) {
    using("core/jquery", "lib/twitter-text", function($, b) {
        function c() {
            var a,c = 0,d = 20;
            this.defaultAttrs({maxLength:140,superwarnLength:130,warnLength:120,superwarnClass:"superwarn",warnClass:"warn"}),this.updateCounter = function() {
                this.$counter.text(this.attr.maxLength - this.getLength()),this.applyStyle()
            },this.getLength = function() {
                var c = this.val();
                a = c.length,this.hasMedia && (a += d + 1);
                var e = b.extractUrls(c),f = e.join("");
                a -= f.length,a += e.length * d;
                var g = f.match(/https:/g);
                return a += g ? g.length : 0,a
            },this.maxReached = function() {
                return this.getLength() > this.attr.maxLength
            },this.applyStyle = function() {
                a >= this.attr.superwarnLength ? this.$counter.addClass(this.attr.superwarnClass).removeClass(this.attr.warnClass) : a >= this.attr.warnLength ? this.$counter.addClass(this.attr.warnClass).removeClass(this.attr.superwarnClass) : this.$counter.removeClass(this.attr.warnClass).removeClass(this.attr.superwarnClass),c > 1 ? this.$node.removeClass("has-link").addClass("has-links") : c == 1 ? this.$node.removeClass("has-links").addClass("has-link") : this.$node.removeClass("has-link has-links")
            },this.after("initialize", function() {
                this.$counter = this.select("counterSelector"),this.on("ui{{type}}TextUpdated", this.updateCounter)
            })
        }

        a(c)
    })
}),provide("app/utils/caret", function(a) {
    function b(a) {
        var b;
        if (document.selection)return a.focus(),b = document.selection.createRange(),b.moveStart("character", -a.value.length),b.text.length;
        if (typeof a.selectionStart == "number")return a.selectionStart;
        throw Error("browser does not support getPosition")
    }

    function c(a, b) {
        if (document.selection) {
            var c = a.createTextRange();
            c.collapse(!0),c.moveEnd("character", b),c.moveStart("character", b),c.select()
        } else {
            if (typeof a.selectionStart != "number")throw Error("browser does not support setPosition");
            a.selectionStart = b,a.selectionEnd = b
        }
    }

    a({getPosition:b,setPosition:c})
}),define("app/ui/with_rtl_tweet_box", ["module","require","exports","core/jquery","lib/twitter-text","app/utils/caret"], function(a, b, c) {
    function f(a, b, c) {
        var d = 0,e = "";
        return b(a).forEach(function(b) {
            e += a.slice(d, b.indices[0]) + c(a.slice(b.indices[0], b.indices[1])),d = b.indices[1]
        }),e + a.slice(d)
    }

    function g() {
        this.defaultAttrs({isRTL:$("body").attr("dir") === "rtl",rtlCharRegex:/[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,dirMarkRegex:/\u200e|\u200f/gm,rtlThreshold:.3}),this.shouldBeRTL = function(a, b, c) {
            var d = a.trim();
            if (!d)return this.attr.isRTL;
            if (!b)return!1;
            var e = d.length - c;
            return e > 0 && b.length / e > this.attr.rtlThreshold
        },this.removeMarkers = function(a) {
            return a.replace(this.attr.dirMarkRegex, "")
        },this.setMarkersAndRTL = function(a, b) {
            var c = b.match(this.attr.rtlCharRegex),e = 0;
            if (c) {
                a = b,a = f(a, d.extractMentionsWithIndices, function(a) {
                    return e += a.length + 1,"‎" + a + "‏"
                });
                var g = this.attr.rtlCharRegex;
                a = f(a, d.extractHashtagsWithIndices, function(a) {
                    return a[1].match(g) ? a : "‎" + a
                }),a = f(a, d.extractUrlsWithIndices, function(a) {
                    return e += a.length + 2,a + "‎"
                })
            }
            return this.isRTL = this.shouldBeRTL(b, c, e),a
        },this.erasePastMarkers = function(a) {
            if (a.which === 8)var b = -1; else {
                if (a.which !== 46)return;
                var b = 0
            }
            var c = e.getPosition(this.$text[0]),d = this.$text.val(),f = 0;
            do{
                var g = d[c + b] || "";
                g && (c += b,f++,d = d.slice(0, c) + d.slice(c + 1))
            } while (g.match(this.attr.dirMarkRegex));
            f > 1 && (this.$text.val(d),e.setPosition(this.$text[0], c),a.preventDefault(),this.detectUpdatedText())
        },this.shadowPlainText = function(a) {
            this.$plainText || (this.$plainText = this.$text.clone().removeAttr("id").hide(),this.$text.removeAttr("name").after(this.$plainText)),this.$plainText.val(a)
        },this.before("notifyTextUpdated", function() {
            var a = this.$text.val(),b = this.removeMarkers(a),c = this.setMarkersAndRTL(a, b);
            if (c !== a) {
                var d = this.$text[0],f = $.contains(document, d),g = f && e.getPosition(d);
                this.$text.val(c),this.prevText = c,f && e.setPosition(d, g + c.length - a.length)
            }
            this.$text.attr("dir", this.isRTL ? "rtl" : "ltr"),this.shadowPlainText(b)
        }),this.around("val", function(a, b) {
            return b == undefined ? this.removeMarkers(this.$text.val()) : a(b)
        }),this.after("initialize", function() {
            this.on(this.select("textSelector"), "keydown", this.erasePastMarkers)
        })
    }

    "use strict";
    var $ = b("core/jquery"),d = b("lib/twitter-text"),e = b("app/utils/caret");
    a.exports = g
}),"use strict",provide("app/ui/tweet_box", function(a) {
    using("core/component", "app/ui/with_character_counter", "app/utils/with_event_params", "core/jquery", "app/utils/caret", "core/utils", "core/i18n", "app/ui/with_rtl_tweet_box", "app/utils/scribe_item_types", function(b, c, d, $, e, f, _, g, h) {
        function j() {
            this.defaultAttrs({textSelector:"textarea.tweet-box",counterSelector:"span.tweet-counter",imageSelector:".photo-selector",thumbContainerSelector:".thumbnail-container",tweetActionSelector:".tweet-action",iframeSelector:".tweet-post-iframe",placeIdSelector:"input[name=place_id]",defaultText:"",cursorPosition:undefined,condensedText:_("Compose new Tweet..."),inReplyToTweetData:{},inReplyToStatusId:undefined,impressionId:undefined,modal:!1,condensable:!0,condensed:!1,pollIntervalInMs:100,suppressFlashMessage:!1,customData:{},position:undefined,itemType:"tweet",component:undefined,eventParams:""}),this.dmRegex = /^(?:d|m|dm)\s+[@＠]?([a-zA-Z0-9_]{1,20}) /,this.dmMode = !1,this.hasMedia = !1,this.condensed = !1,this.draft = "",this.dmScreenName = function() {
                var a = this.val().match(this.dmRegex);
                return a && a[1]
            },this.sendTweet = function(a) {
                a && a.preventDefault(),this.detectUpdatedText();
                if (this.select("tweetActionSelector").hasClass("disabled"))return;
                this.$node.attr("id", this.getTweetboxId());
                var b = {status:this.val(),place_id:this.select("placeIdSelector").val(),in_reply_to_status_id:this.attr.inReplyToStatusId,impression_id:this.attr.impressionId},c = this.hasMedia ? "uiSend{{type}}WithMedia" : "uiSend{{type}}";
                this.trigger(c, {tweetboxId:this.getTweetboxId(),tweetData:b}),this.$node.addClass("tweeting"),this.disable()
            },this.getTweetboxId = function() {
                return this.tweetboxId || (this.tweetboxId = "swift_tweetbox_" + +(new Date)),this.tweetboxId
            },this.overrideTweetBoxOptions = function(a, b) {
                this.attr.inReplyToTweetData = b,b.id && (this.attr.inReplyToStatusId = b.id),b.impressionId && (this.attr.impressionId = b.impressionId),b.defaultText && (this.attr.defaultText = b.defaultText),b.customData && (this.attr.customData = b.customData),b.itemType && (this.attr.itemType = b.itemType),b.scribeContext && b.scribeContext.component && (this.attr.component = b.scribeContext.component),b.position !== undefined && (this.attr.position = b.position),b.cursorPosition !== undefined && (this.attr.cursorPosition = b.cursorPosition)
            },this.resetOverriddenOptions = function(a, b) {
                this.attr.inReplyToTweetData = this.defaults.inReplyToTweetData,this.attr.inReplyToStatusId = this.defaults.inReplyToStatusId,this.attr.impressionId = this.defaults.impressionId,this.attr.defaultText = this.defaults.defaultText,this.attr.cursorPosition = this.defaults.cursorPosition,this.attr.customData = this.defaults.customData,this.attr.position = this.defaults.position,this.attr.itemType = this.defaults.itemType,this.attr.component = this.attr.component
            },this.updateTweetButton = function() {
                var a = !1,b = this.val().trim();
                this.hasMedia ? a = !0 : a = b && b !== this.attr.defaultText;
                if (this.maxReached() || this.$node.hasClass("tweeting"))a = !1;
                a ? this.enable() : this.disable()
            },this.updateTweetButtonText = function(a) {
                this.select("tweetActionSelector").text(a)
            },this.updateTitle = function() {
                var a = this.dmScreenName();
                a && (!this.dmMode || this.dmMode && this.dmUsername != a) ? (this.dmMode = !0,this.dmUsername = a,this.trigger("uiDialogUpdateTitle", {title:_("Message @{{username}}", {username:a})}),this.updateTweetButtonText(_("Send message"))) : this.dmMode && !a && (this.dmMode = !1,this.dmUsername = undefined,this.trigger("uiDialogUpdateTitle", {title:_("What's happening")}),this.updateTweetButtonText(_("Tweet")))
            },this.tweetSent = function(a, b) {
                var c = b.tweetboxId || b.sourceEventData.tweetboxId;
                if (c != this.getTweetboxId())return;
                b.customData = this.attr.customData,b.message && this.trigger("uiShowMessage", {message:b.message});
                if (this.attr.eventParams.type == "Tweet") {
                    var d = "uiTweetboxTweetSuccess";
                    if (this.attr.inReplyToStatusId || this.val().indexOf("@") == 0) {
                        if ((this.attr.inReplyToTweetData || {}).replyLinkClick) {
                            var e = f.merge({}, this.attr.inReplyToTweetData);
                            e.scribeContext && (e.scribeContext.element = ""),this.trigger("uiReplyButtonTweetSuccess", e)
                        }
                        d = "uiTweetboxReplySuccess"
                    } else this.val().match(this.dmRegex) && (d = "uiTweetboxDMSuccess");
                    this.trigger(d, {scribeData:{item_ids:[b.tweet_id]}})
                }
                this.$node.removeClass("tweeting"),this.trigger("ui{{type}}Sent", b),this.reset(),this.condense()
            },this.scribeDataForReply = function() {
                var a = {},b = {item_ids:[this.attr.inReplyToStatusId],item_count:1,item_token:this.attr.impressionId,promoted:!!this.attr.impressionId};
                return a[this.attr.inReplyToStatusId] = {item_type:h[this.attr.itemType],item_position:this.attr.position,target_id:this.attr.inReplyToStatusId},b.item_details = a,{scribeData:b,scribeContext:{component:this.attr.component,element:""}}
            },this.tweetError = function(a, b) {
                var c = b.tweetboxId || b.sourceEventData.tweetboxId;
                if (c != this.getTweetboxId())return;
                !this.attr.suppressFlashMessage && this.trigger("uiShowError", {message:b.error || b.message}),this.$node.removeClass("tweeting"),this.enable(),this.attr.eventParams.type == "Tweet" && this.trigger("uiTweetboxTweetError")
            },this.detectUpdatedText = function() {
                var a = this.$text.val();
                a !== this.prevText && (this.prevText = a,this.notifyTextUpdated())
            },this.pollUpdatedText = function() {
                document.activeElement !== this.$text[0] ? this.stopPollingUpdatedText() : this.detectUpdatedText()
            },this.startPollingUpdatedText = function() {
                this.stopPollingUpdatedText(),this.detectUpdatedText(),this.pollUpdatedTextId = setInterval(this.pollUpdatedText.bind(this), this.attr.pollIntervalInMs)
            },this.stopPollingUpdatedText = function() {
                this.pollUpdatedTextId && (clearInterval(this.pollUpdatedTextId),this.pollUpdatedTextId = null)
            },this.notifyTextUpdated = function() {
                this.trigger("ui{{type}}TextUpdated")
            },this.showPreview = function(a, b) {
                this.$node.addClass("has-preview"),b.imageData && this.$node.addClass("has-thumbnail"),this.hasMedia = !0,this.trigger("ui{{type}}TextUpdated")
            },this.hidePreview = function(a, b) {
                this.$node.removeClass("has-preview has-thumbnail"),this.hasMedia = !1,this.trigger("ui{{type}}TextUpdated")
            },this.enable = function() {
                this.select("tweetActionSelector").removeClass("disabled")
            },this.disable = function() {
                this.select("tweetActionSelector").addClass("disabled")
            },this.reset = function(a) {
                if (a && a.target !== document && !$.contains(a.target, this.node))return;
                this.focus(),this.val(this.condensed ? this.attr.condensedText : this.attr.defaultText),this.setCursorPosition(),this.trigger("ui{{type}}BoxRemoveImage"),this.$text.css("height", ""),this.$node.find("input[type=hidden]").val(""),this.disable()
            },this.val = function(a) {
                if (a == undefined)return this.$text.val();
                var b = this.$text.val(a);
                return this.detectUpdatedText(),b
            },this.setCursorPosition = function() {
                var a = this.attr.cursorPosition;
                a !== undefined && e.setPosition(this.$text.get(0), a)
            },this.focus = function() {
                this.$text.focus(),this.expand()
            },this.expand = function() {
                if (!this.condensed)return;
                this.val(this.draft || this.attr.defaultText),this.draft = "",this.$node.removeClass("condensed"),this.condensed = !1,this.trigger("uiTweetBoxExpanded"),this.trigger("uiPrepareTweetBox")
            },this.condense = function() {
                if (this.condensed || !this.attr.condensable)return;
                this.val() != this.attr.defaultText && this.val() != this.attr.condensedText && (this.draft = this.val()),this.val(this.attr.condensedText),this.$node.addClass("condensed"),this.condensed = !0,this.$text.blur(),this.trigger("uiTweetBoxCondensed")
            },this.condenseOnBlur = function(a) {
                if (this.condensed)return;
                var b = $(a.target);
                !b.closest(this.$node).length && b.closest("body").length && (this.val() == this.attr.defaultText || this.val() == "") && this.condense()
            },this.takeFocus = function() {
                document.activeElement !== this.$text[0] && this.$text.focus()
            },this.prepareTweetBox = function() {
                this.takeFocus()
            },this.after("initialize", function() {
                f.push(this.attr, {eventData:{scribeContext:{element:"tweet_box"}}}, !1),this.$text = this.select("textSelector"),this.on(this.select("tweetActionSelector"), "click", this.sendTweet),this.on(document, "data{{type}}Success", this.tweetSent),this.on(document, "data{{type}}Error", this.tweetError),this.on(this.$text, "focus", this.startPollingUpdatedText),this.on(this.$text, "dragover", this.takeFocus),this.on("ui{{type}}TextUpdated", this.updateTweetButton),this.on("ui{{type}}TextUpdated", this.updateTitle),this.on("ui{{type}}BoxShowPreview", this.showPreview),this.on("ui{{type}}BoxHidePreview", this.hidePreview),this.on(document, "uiDialogOpened ui{{type}}BoxReset", this.reset),this.on("uiPrepare{{type}}Box", this.prepareTweetBox),this.on("uiOfferFocus", this.takeFocus),this.on("uiExpandFocus", this.focus),this.attr.modal && (this.on(document, "uiOverride{{type}}BoxOptions", this.overrideTweetBoxOptions),this.on(document, "uiDialogClosed", this.resetOverriddenOptions)),this.attr.condensed && (this.on(this.$text, "click", this.expand),this.on(document, "click", this.condenseOnBlur),this.condense())
            })
        }

        var i = b(j, c, d, g);
        i.caret = e,a(i)
    })
}),"use strict",provide("app/ui/with_autocomplete_helpers", function(a) {
    using("core/jquery", "app/utils/caret", function($, b) {
        function c() {
            this.defaultAttrs({wordsRegExp:/[^\s]+/g,autocompleteResultsSelector:"ul.autocomplete-results"});
            var a = "",c = {9:function(a) {
                a.trigger("uiAutocompleteItemSelected")
            },13:function(a) {
                a.trigger(a.attr.selectedItemSelector, "uiAutocompleteEnter")
            },27:function(a) {
                a.trigger("uiHideAutocomplete")
            },38:function(a) {
                a.trigger("uiMoveSelectionUp")
            },40:function(a) {
                a.trigger("uiMoveSelectionDown")
            }};
            this.notifyTextChanged = function(d, e) {
                if (d.type == "keydown" && this.resultsVisible() && c[d.which])d.preventDefault(),d.which == 9 && c[d.which](this); else if (d.type != "keydown")if (this.resultsVisible() && c[d.which])c[d.which](this); else {
                    var f = $(d.target).val();
                    f != a && ($(d.target).trigger("uiTextChanged", {text:f,position:b.getPosition(d.target)}),a = f)
                }
            },this.replaceWordAtPosition = function(a, b, c) {
                return a.replace(this.attr.wordsRegExp, function(a, d) {
                    return d <= b && d + a.length >= b ? c : a
                })
            },this.updateWithSelection = function(a, c) {
                this.select("autocompleteResultsSelector").hide();
                var d = this.select("autocompleteInputSelector"),e = b.getPosition(d[0]),f = d.val();
                f = this.replaceWordAtPosition(f, e, "@" + c.screen_name + " ");
                var g = f.indexOf(" ", e) + 1;
                g < 0 && (g = f.length),d.val(f),b.setPosition(d[0], g),d[0].selectionEnd = g
            },this.after("initialize", function() {
                this.on(this.attr.autocompleteInputSelector, "keydown keyup paste", this.notifyTextChanged),this.on("uiSendAutocompleteData", this.updateWithSelection)
            })
        }

        a(c)
    })
}),"use strict",provide("app/utils/string", function(a) {
    function b(a) {
        var b = a.charCodeAt(0);
        return b <= 32 ? !0 : !1
    }

    function c(a) {
        var b = a.charCodeAt(0);
        return b >= 48 && b <= 57 ? !0 : !1
    }

    function d(a, b) {
        var d = 0,e = 0,f = 0,g,h;
        for (; ; e++,f++) {
            g = a.charAt(e),h = b.charAt(f);
            if (!c(g) && !c(h))return d;
            if (!c(g))return-1;
            if (!c(h))return 1;
            g < h ? d === 0 && (d = -1) : g > h && d === 0 && (d = 1)
        }
    }

    var e = {compare:function(a, e) {
        var f = 0,g = 0,h,i,j,k,l;
        if (a === e)return 0;
        typeof a == "number" && (a = a.toString()),typeof e == "number" && (e = e.toString());
        for (; ;) {
            h = i = 0,j = a.charAt(f),k = e.charAt(g);
            while (b(j) || j == "0")j == "0" ? h++ : h = 0,j = a.charAt(++f);
            while (b(k) || k == "0")k == "0" ? i++ : i = 0,k = e.charAt(++g);
            if (c(j) && c(k) && (l = d(a.substring(f), e.substring(g))) != 0)return l;
            if (j === 0 && k === 0)return h - i;
            if (j < k)return-1;
            if (j > k)return 1;
            ++f,++g
        }
    },wordAtPosition:function(a, b, c) {
        c = c || /[^\s]+/g;
        var d = null;
        return a.replace(c, function(a, c) {
            c <= b && c + a.length >= b && (d = a)
        }),d
    }};
    a(e)
}),"use strict",provide("app/ui/autocomplete_dropdown", function(a) {
    using("core/component", "app/ui/with_autocomplete_helpers", "core/jquery", "app/utils/string", function(b, c, $, d) {
        function f() {
            this.defaultAttrs({interestingWordRegexp:/[^\s]+/,wordRegexp:/[^\s]+/g,autoCompleteAttr:"data-autocomplete",itemImageSelector:"img",itemNameSelector:".fullname",itemScreenNameSelector:".username",itemSelector:"li.autocomplete-item",itemTemplateSelector:"ul.autocomplete-results > li.template-row",resultsSelector:"ul.autocomplete-results",firstSelectedItemSelector:"li.autocomplete-item.selected:first",selectedItemSelector:"li.autocomplete-item.selected",all:"*"}),this.hideAutocomplete = function(b, c) {
                this.$results.hide()
            },this.populateAutocomplete = function(b, c) {
                if (!c.matches.length) {
                    this.trigger("uiHideAutocomplete");
                    return
                }
                this.$results.empty(),c.matches.forEach(function(a, b) {
                    var c = this.$templateNode.clone(!1);
                    c.removeClass("template-row"),c.attr(this.attr.autoCompleteAttr, JSON.stringify(a)),c.find(this.attr.itemImageSelector).attr("src", a.profile_image_url),c.find(this.attr.itemNameSelector).html(a.name),c.find(this.attr.itemScreenNameSelector).html(a.screen_name),b == 0 && c.addClass("selected"),c.appendTo(this.$results)
                }.bind(this)),this.$results.show()
            },this.notifyItemSelected = function(a, b) {
                var c = this.select("selectedItemSelector").attr(this.attr.autoCompleteAttr),d = JSON.parse(c);
                this.trigger("uiSendAutocompleteData", d),this.hideAutocomplete()
            },this.selectItem = function(a, b) {
                var c = $(a.target).closest(this.attr.itemSelector);
                this.select("selectedItemSelector").removeClass("selected"),c.addClass("selected"),this.trigger("uiAutocompleteItemSelected")
            },this.wordAtPosition = function(a, b) {
                return d.wordAtPosition(a, b, this.attr.wordRegexp) || ""
            },this.updateAutocomplete = function(a, b) {
                var c = this.wordAtPosition(b.text, b.position);
                if (!c.match(this.attr.interestingWordRegexp)) {
                    this.trigger("uiHideAutocomplete");
                    return
                }
                this.trigger("uiAutocompleteNeedsUpdate", {word:c})
            },this.resultsVisible = function() {
                return this.$results.is(":visible")
            },this.moveSelection = function(a) {
                var b = this.select("selectedItemSelector"),c = this.select("itemSelector"),d;
                if (!b.length) {
                    this.select("firstSelectedItemSelector").addClass("selected");
                    return
                }
                b.removeClass("selected");
                var d = (this.$results.children().index(b[0]) + a) % c.length;
                $(c[Math.max(d, 0)]).addClass("selected")
            },this.moveSelectionUp = function(a) {
                a.preventDefault(),this.moveSelection(-1)
            },this.moveSelectionDown = function(a) {
                a.preventDefault(),this.moveSelection(1)
            },this.after("initialize", function() {
                this.$results = this.select("resultsSelector"),this.$templateNode = this.select("itemTemplateSelector").clone(!1),this.hideAutocomplete(),this.on("click", {itemSelector:this.selectItem,all:this.hideAutocomplete}),this.on("dataAutocompleteMatches", this.populateAutocomplete),this.on("uiAutocompleteItemSelected", this.notifyItemSelected),this.on("uiHideAutocomplete", this.hideAutocomplete),this.on(document, "uiDialogClosed", this.hideAutocomplete),this.on("uiTextChanged", this.updateAutocomplete),this.on("uiMoveSelectionDown", this.moveSelectionDown),this.on("uiMoveSelectionUp", this.moveSelectionUp),this.on("uiAutocompleteEnter", this.selectItem)
            })
        }

        var e = b(f, c);
        a(e)
    })
}),"use strict",provide("app/boot/direct_messages", function(a) {
    using("core/jquery", "core/clock", "core/utils", "app/data/direct_messages", "app/data/direct_messages_scribe", "app/data/autocomplete", "app/ui/direct_message_dialog", "app/ui/tweet_box", "app/ui/autocomplete_dropdown", function($, b, c, d, e, f, g, h, i) {
        function j(a) {
            d.attachTo(document, a),e.attachTo(document, a),g.attachTo("#dm_dialog", a),f.attachTo("#dm_dialog_new .dm-dialog-content", c.push(a, {triggerToken:"",filterByDmAccess:!0})),h.attachTo("#dm_dialog form.tweet-form", {eventParams:{type:"DM"},condensable:!1,condensedText:"",suppressFlashMessage:!0,eventData:{scribeContext:{component:"tweet_box_dm"}}}),i.attachTo("#dm_dialog_new .dm-dialog-content", {autocompleteInputSelector:"input.twttr-directmessage-input"});
            var j = parseInt($("#dm_dialog").data("poll-frequency"), 10) || 0;
            j && b.setIntervalEvent("dataRefreshDMs", j)
        }

        var k = !!$("#dm_dialog").length;
        a(k ? j : $.noop)
    })
}),"use strict",provide("app/data/profile_popup", function(a) {
    using("core/component", "core/jquery", "app/data/with_data", function(b, $, c) {
        function e() {
            this.defaultAttrs({noShowError:!0}),this.userCache = {screenNames:{},ids:{}},this.saveToCache = function(a) {
                this.userCache.ids[a.user_id] = a,this.userCache.screenNames[a.screen_name] = a
            },this.retrieveFromCache = function(a) {
                var b;
                return a.userId ? b = this.userCache.ids[a.userId] : b = this.userCache.screenNames[a.screenName],b
            },this.invalidateCache = function(a, b) {
                var c,d,e;
                b.userId ? (c = b.userId,e = this.userCache.ids[c],d = e && e.screen_name) : (d = b.screenName,e = this.userCache.screenNames[d],c = e && e.user_id),c && delete this.userCache.ids[c],d && delete this.userCache.screenNames[d]
            },this.getProfilePopup = function(a, b) {
                var c = function(a) {
                    this.saveToCache(a),this.trigger("dataProfilePopupSuccess", a)
                }.bind(this),d = function(a) {
                    this.trigger("dataProfilePopupFailure", a)
                }.bind(this),e = {};
                b.screenName ? e.screen_name = b.screenName : b.userId && (e.user_id = b.userId);
                var f = this.retrieveFromCache(b);
                if (f) {
                    f.sourceEventData = b,c(f);
                    return
                }
                this.get({url:"/i/profiles/popup",data:e,eventData:b,success:c,error:d})
            },this.after("initialize", function() {
                this.on("uiWantsProfilePopup", this.getProfilePopup),this.on(document, "dataFollowStateChange dataUserActionSuccess", this.invalidateCache)
            })
        }

        var d = b(e, c);
        a(d)
    })
}),define("app/data/profile_popup_scribe", ["module","require","exports","core/component","app/data/with_interaction_data_scribe","core/utils","app/data/client_event","core/jquery"], function(a, b, c) {
    function h() {
        this.scribeProfilePopupOpen = function(a, b) {
            if (this.clientEvent.scribeContext.page != "profile" || !this.clientEvent.scribeData.profile_id)this.clientEvent.scribeData.profile_id = b.user_id;
            this.scribe({component:"profile_dialog",action:"open"})
        },this.scribeProfilePopupClose = function(a, b) {
            this.clientEvent.scribeData.profile_id && (this.scribe({component:"profile_dialog",action:"close"}),this.clientEvent.scribeContext.page != "profile" && delete this.clientEvent.scribeData.profile_id)
        },this.after("initialize", function() {
            this.clientEvent = g,this.on(document, "dataProfilePopupSuccess", this.scribeProfilePopupOpen),this.on(document, "uiCloseProfilePopup", this.scribeProfilePopupClose)
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/with_interaction_data_scribe"),f = b("core/utils"),g = b("app/data/client_event"),$ = b("core/jquery");
    a.exports = d(h, e)
}),"use strict",provide("app/ui/with_user_actions", function(a) {
    using("core/jquery", "core/compose", "core/i18n", "core/utils", "app/ui/with_interaction_data", function($, b, _, c, d) {
        function e() {
            b.mixin(this, [d]),this.defaultAttrs({followButtonSelector:".follow-button, .follow-link",userInfoSelector:".user-actions",dropdownSelector:".user-dropdown",dropdownItemSelector:".user-dropdown li",dropdownMenuSelector:".dropdown-menu",dropdownThresholdSelector:".dropdown-threshold",followStates:["not-following","following","blocked","pending"],userActionClassesToEvents:{"follow-text":["uiFollowAction"],"cancel-text":["uiCancelFollowRequestAction"],"unfollow-text":["uiUnfollowAction"],"mention-text":["uiMentionAction","mentionUser"],"dm-text":["uiDmAction","dmUser"],"list-text":["uiListAction"],"block-text":["uiBlockAction"],"unblock-text":["uiUnblockAction"],"report-spam-text":["uiReportSpamAction"],"not-spam-text":["uiNotSpamAction"],"hide-suggestion-text":["uiHideSuggestionAction","hideSuggestion"],"retweet-on-text":["uiRetweetOnAction"],"retweet-off-text":["uiRetweetOffAction"],"device-notifications-on-text":["uiDeviceNotificationsOnAction","deviceNotificationsOn"],"device-notifications-off-text":["uiDeviceNotificationsOffAction"]}}),this.getClassNameFromList = function(a, b) {
                var c = b.filter(function(b) {
                    return a.hasClass(b)
                });
                return c.length > 1 && console.log("Element has more than one mutually exclusive class.", c),c[0]
            },this.getUserActionEventNameAndMethod = function(a) {
                var b = this.getClassNameFromList(a, Object.keys(this.attr.userActionClassesToEvents));
                return this.attr.userActionClassesToEvents[b]
            },this.getFollowState = function(a) {
                return this.getClassNameFromList(a, this.attr.followStates)
            },this.getInfoElementFromEvent = function(a) {
                var b = $(a.target);
                return b.closest(this.attr.userInfoSelector)
            },this.findInfoElementForUser = function(a) {
                var b = this.attr.userInfoSelector + "[data-user-id=" + parseInt(a, 10) + "]";
                return this.$node.find(b)
            },this.getEventName = function(a) {
                var b = {"not-following":"uiFollowAction",following:"uiUnfollowAction",blocked:"uiUnblockAction",pending:"uiCancelFollowRequestAction"};
                return b[a]
            },this.addCancelHoverStyleClass = function(a) {
                a.addClass("cancel-hover-style"),a.one("mouseleave", function() {
                    a.removeClass("cancel-hover-style")
                })
            },this.handleFollowButtonClick = function(a) {
                a.preventDefault();
                var b = this.getInfoElementFromEvent(a),c = $(a.target).closest(this.attr.followButtonSelector);
                this.addCancelHoverStyleClass(c);
                var d = this.getFollowState(b),e = this.getEventName(d),f = {originalFollowState:d};
                this.trigger(e, this.interactionData(a, f))
            },this.handleLoggedOutFollowButtonClick = function() {
                this.trigger("uiOpenSigninOrSignupDialog", {signUpOnly:!0})
            },this.handleUserAction = function(a) {
                var b = $(a.target),c = this.getInfoElementFromEvent(a),d = this.getUserActionEventNameAndMethod(b),e = d[0],f = d[1],g = this.getFollowState(c),h = {originalFollowState:g};
                f && (h = this[f](c, e, h)),h && this.trigger(e, this.interactionData(a, h))
            },this.deviceNotificationsOn = function(a, b, c) {
                return this.attr.deviceEnabled ? c : (this.attr.smsDeviceVerified || this.attr.hasPushDevice ? this.trigger("uiOpenConfirmDialog", {titleText:_("Enable mobile notifications for Tweets"),bodyText:_("Before you can receive mobile notifications for @{{screenName}}'s Tweets, you need to enable the Tweet notification setting.", {screenName:a.attr("data-screen-name")}),cancelText:_("Close"),submitText:_("Enable Tweet notifications"),action:this.attr.hasPushDevice ? "ShowPushTweetsNotifications" : "ShowMobileNotifications",top:this.attr.top}) : this.trigger("uiOpenConfirmDialog", {titleText:_("Setup mobile notifications"),bodyText:_("Before you can receive mobile notifications for @{{screenName}}'s Tweets, you need to set up your phone.", {screenName:a.attr("data-screen-name")}),cancelText:_("Cancel"),submitText:_("Set up phone"),action:"ShowMobileNotifications",top:this.attr.top}),!1)
            },this.redirectToMobileNotifications = function() {
                window.location = "/settings/devices"
            },this.redirectToPushNotificationsHelp = function() {
                window.location = "//support.twitter.com/articles/20169887"
            },this.mentionUser = function(a, b, c) {
                this.trigger("uiOpenTweetDialog", {screenName:a.attr("data-screen-name"),title:_("Tweet to {{name}}", {name:a.attr("data-name")})})
            },this.dmUser = function(a, b, c) {
                return this.trigger("uiOpenDMConversation", {screen_name:a.attr("data-screen-name"),name:a.attr("data-name")}),c
            },this.hideSuggestion = function(a, b, d) {
                return c.merge(d, {feedbackToken:a.attr("data-feedback-token")})
            },this.followStateChange = function(a, b) {
                this.updateFollowState(b.userId, b.newState, !0)
            },this.updateFollowState = function(a, b) {
                var c = this.findInfoElementForUser(a),d = this.getFollowState(c);
                d && c.removeClass(d),c.addClass(b)
            },this.follow = function(a, b) {
                var c = this.findInfoElementForUser(b.userId),d = c.data("protected") ? "pending" : "following";
                this.updateFollowState(b.userId, d),c.addClass("including")
            },this.unfollow = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                this.updateFollowState(b.userId, "not-following"),c.removeClass("including notifying")
            },this.cancel = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                this.updateFollowState(b.userId, "not-following")
            },this.block = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                this.updateFollowState(b.userId, "blocked"),c.removeClass("including notifying")
            },this.unblock = function(a, b) {
                this.updateFollowState(b.userId, "not-following")
            },this.retweetsOn = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                c.addClass("including")
            },this.retweetsOff = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                c.removeClass("including")
            },this.notificationsOn = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                c.addClass("notifying")
            },this.notificationsOff = function(a, b) {
                var c = this.findInfoElementForUser(b.userId);
                c.removeClass("notifying")
            },this.toggleDropdown = function(a) {
                a.stopPropagation();
                var b = $(a.target).closest(this.attr.dropdownSelector);
                b.hasClass("open") ? this.hideDropdown(b) : this.showDropdown(b)
            },this.showDropdown = function(a) {
                a.addClass("open"),a.closest(this.attr.userInfoSelector).addClass("dropdown-open");
                var b = a.closest(this.attr.dropdownThresholdSelector);
                if (b.length) {
                    var c = a.find(this.attr.dropdownMenuSelector),d = c.offset().top + c.outerHeight() - (b.offset().top + b.height());
                    d > 0 && b.animate({scrollTop:b.scrollTop() + d})
                }
                this.trigger("click.dropdown"),this.on(document, "click.dropdown", function() {
                    this.hideDropdown(a)
                }),this.trigger("show.dropdown")
            },this.hideDropdown = function(a) {
                a.removeClass("open"),a.closest(this.attr.userInfoSelector).removeClass("dropdown-open"),this.off(document, "click.dropdown"),this.trigger("hide.dropdown")
            },this.after("initialize", function() {
                if (!this.attr.loggedIn) {
                    this.on("click", {followButtonSelector:this.handleLoggedOutFollowButtonClick});
                    return
                }
                this.on("click", {followButtonSelector:this.handleFollowButtonClick,dropdownSelector:this.toggleDropdown,dropdownItemSelector:this.handleUserAction}),this.on(document, "uiFollowStateChange dataFollowStateChange", this.followStateChange),this.on(document, "uiFollowAction", this.follow),this.on(document, "uiUnfollowAction", this.unfollow),this.on(document, "uiCancelFollowRequestAction", this.cancel),this.on(document, "uiBlockAction uiReportSpamAction", this.block),this.on(document, "uiUnblockAction", this.unblock),this.on(document, "uiRetweetOnAction dataRetweetOnAction", this.retweetsOn),this.on(document, "uiRetweetOffAction dataRetweetOffAction", this.retweetsOff),this.on(document, "uiDeviceNotificationsOnAction dataDeviceNotificationsOnAction", this.notificationsOn),this.on(document, "uiDeviceNotificationsOffAction dataDeviceNotificationsOffAction", this.notificationsOff),this.on(document, "uiShowMobileNotificationsConfirm", this.redirectToMobileNotifications),this.on(document, "uiShowPushTweetsNotificationsConfirm", this.redirectToPushNotificationsHelp)
            })
        }

        a(e)
    })
}),define("app/ui/with_item_actions", ["module","require","exports","core/utils","core/jquery","core/compose","app/ui/with_interaction_data"], function(a, b, c) {
    function g() {
        e.mixin(this, [f]),this.defaultAttrs({showWithScreenNameSelector:".show-popup-with-screen-name, .twitter-atreply",showWithIdSelector:".show-popup-with-id, .js-user-profile-link",hashtagSelector:".twitter-hashtag",itemLinkSelector:".twitter-timeline-link"}),this.showProfilePopupWithScreenName = function(a, b) {
            a.preventDefault();
            var c = $(a.target).closest(this.attr.showWithScreenNameSelector).text();
            c[0] === "@" && (c = c.substring(1));
            var d = {screenName:c};
            this.trigger("uiShowProfilePopup", this.interactionData(a, d))
        },this.showProfilePopupWithId = function(a, b) {
            a.preventDefault(),this.trigger("uiShowProfilePopup", this.interactionData(a))
        },this.hashtagClick = function(a, b) {
            var c = $(a.target),d = {query:c.closest(this.attr.hashtagSelector).text()};
            this.trigger("uiHashtagClick", this.interactionData(a, d))
        },this.itemLinkClick = function(a, b) {
            var c = $(a.target).closest(this.attr.itemLinkSelector),d = {url:c.attr("data-expanded-url") || c.attr("href")};
            this.trigger("uiItemLinkClick", this.interactionData(a, d))
        },this.getCustomScribeData = function(a) {
            var b = {},c = $(a.target);
            b.tweetHasCard = c.hasClass("has-cards");
            if (b.tweetHasCard) {
                var d = c.find(".cards-base");
                b.cardType = d.data("card-type"),b.cardUrl = d.data("card-url"),b.publisherUserId = this.getUserIdFromElement(d.find(".source .js-user-profile-link")),b.creatorUserId = this.getUserIdFromElement(d.find(".byline .js-user-profile-link"))
            }
            return b
        },this.getUserIdFromElement = function(a) {
            return a.length ? a.data("user-id") : null
        },this.itemSelected = function(a, b) {
            var c = this.getCustomScribeData(a);
            b.organicExpansion && this.trigger("uiItemSelected", d.merge(this.interactionData(a), c))
        },this.itemDeselected = function(a, b) {
            var c = this.getCustomScribeData(a);
            this.trigger("uiItemDeselected", d.merge(this.interactionData(a), c))
        },this.after("initialize", function() {
            this.on("click", {showWithScreenNameSelector:this.showProfilePopupWithScreenName,showWithIdSelector:this.showProfilePopupWithId,hashtagSelector:this.hashtagClick,itemLinkSelector:this.itemLinkClick}),this.on("uiHasExpandedTweet", this.itemSelected),this.on("uiHasCollapsedTweet", this.itemDeselected)
        })
    }

    "use strict";
    var d = b("core/utils"),$ = b("core/jquery"),e = b("core/compose"),f = b("app/ui/with_interaction_data");
    a.exports = g
}),"use strict",provide("app/ui/profile_popup", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dialog", "app/ui/with_position", "app/ui/with_user_actions", "app/ui/with_item_actions", function(b, c, $, d, e, f, g) {
        function i() {
            this.defaultAttrs({modalSelector:".modal",dialogContentSelector:".profile-modal",profileHeaderSelector:".profile-modal-header",slideDuration:100,top:90,itemType:"user"}),this.slideInContent = function(a) {
                var b = this.$dialog.height();
                this.$contentContainer.html(a),this.$node.addClass("has-content");
                var c = this.$dialog.height();
                this.$dialog.height(b),this.$dialog.animate({height:c}, this.attr.slideDuration)
            },this.clearPopup = function() {
                this.$dialog.height("auto"),this.$contentContainer.empty()
            },this.openProfilePopup = function(a, b) {
                b.screenName && delete b.userId;
                if (b.userId && b.userId === this.currentUserId() || b.screenName && b.screenName === this.currentScreenName())return;
                this.open(),this.clearPopup(),this.$node.removeClass("has-content"),this.$node.attr("data-impression-id", b.impressionId || null),this.$node.attr("data-impression-cookie", b.impressionCookie || null),this.trigger("uiWantsProfilePopup", b)
            },this.closeProfilePopup = function(a) {
                this.trigger("uiCloseProfilePopup", {userId:this.currentUserId(),screenName:this.currentScreenName()})
            },this.fillProfile = function(a, b) {
                this.slideInContent(b.html)
            },this.showError = function(a, b) {
                var c = ['<div class="profile-modal-header error"><p>',b.message,"</p></div>"].join("");
                this.slideInContent(c)
            },this.getHeaderData = function(a) {
                return!this.isOpen() || !this.$node.hasClass("has-content") ? null : this.select("profileHeaderSelector").attr(a)
            },this.currentScreenName = function() {
                return this.getHeaderData("data-screen-name")
            },this.currentUserId = function() {
                return this.getHeaderData("data-user-id")
            },this.after("initialize", function() {
                this.$contentContainer = this.select("dialogContentSelector"),this.on(document, "uiShowProfilePopup", this.openProfilePopup),this.on(document, "dataProfilePopupSuccess", this.fillProfile),this.on(document, "dataProfilePopupFailure", this.showError),this.on("uiDialogHidden", this.clearPopup),this.on(document, "uiOpenConfirmDialog uiOpenTweetDialog uiOpenDMConversation uiListAction uiOpenSigninOrSignupDialog", this.close),this.on("uiDialogClosed", this.closeProfilePopup)
            })
        }

        var h = b(i, d, e, f, g);
        a(h)
    })
}),"use strict",provide("app/data/user", function(a) {
    using("core/component", "core/jquery", "core/utils", "app/data/with_data", "core/i18n", function(b, $, c, d, _) {
        function f() {
            this.updateFollowStatus = function(a, b) {
                function d(d) {
                    this.trigger("dataFollowStateChange", c.merge(d, a, {userId:a.userId,newState:d.new_state,requestUrl:b}))
                }

                function e(b) {
                    var d = a.userId,e = a.originalFollowState;
                    b.new_state && (e = b.new_state),this.trigger("dataFollowStateChange", c.merge(b, {userId:d,newState:e}))
                }

                this.post({url:b,data:{user_id:a.userId,impression_id:a.impressionId},eventData:a,success:d.bind(this),error:e.bind(this)})
            },this.reversibleAjaxCall = function(a, b, c) {
                function d(c) {
                    this.trigger("dataUserActionSuccess", $.extend({}, c, {userId:a.userId,requestUrl:b})),c.message && this.trigger("uiShowMessage", c)
                }

                function e(b) {
                    this.trigger(c, a)
                }

                this.post({url:b,data:{user_id:a.userId,impression_id:a.impressionId},eventData:a,success:d.bind(this),error:e.bind(this)})
            },this.normalAjaxCall = function(a, b) {
                function c(c) {
                    this.trigger("dataUserActionSuccess", $.extend({}, c, {userId:a.userId,requestUrl:b})),c.message && this.trigger("uiShowMessage", c)
                }

                this.post({url:b,data:{user_id:a.userId,token:a.feedbackToken,impression_id:a.impressionId},eventData:a,success:c.bind(this),error:"dataUserActionError"})
            },this.followAction = function(a, b) {
                var c = "/i/user/follow";
                this.updateFollowStatus(b, c)
            },this.unfollowAction = function(a, b) {
                var c = "/i/user/unfollow";
                this.updateFollowStatus(b, c)
            },this.cancelAction = function(a, b) {
                var c = "/i/user/cancel";
                this.updateFollowStatus(b, c)
            },this.blockAction = function(a, b) {
                var c = "/i/user/block";
                this.updateFollowStatus(b, c)
            },this.unblockAction = function(a, b) {
                var c = "/i/user/unblock";
                this.updateFollowStatus(b, c)
            },this.reportSpamAction = function(a, b) {
                this.normalAjaxCall(b, "/i/user/report_spam")
            },this.undoReportSpamAction = function(a, b) {
                var c = "/i/user/undo_report_spam";
                this.updateFollowStatus(b, c)
            },this.hideSuggestionAction = function(a, b) {
                this.normalAjaxCall(b, "/i/user/hide")
            },this.retweetOnAction = function(a, b) {
                this.reversibleAjaxCall(b, "/i/user/retweets_on", "dataRetweetOffAction")
            },this.retweetOffAction = function(a, b) {
                this.reversibleAjaxCall(b, "/i/user/retweets_off", "dataRetweetOnAction")
            },this.deviceNotificationsOnAction = function(a, b) {
                this.reversibleAjaxCall(b, "/i/user/device_notifications_on", "dataDeviceNotificationsOffAction")
            },this.deviceNotificationsOffAction = function(a, b) {
                this.reversibleAjaxCall(b, "/i/user/device_notifications_off", "dataDeviceNotificationsOnAction")
            },this.after("initialize", function() {
                this.on(document, "uiFollowAction", this.followAction),this.on(document, "uiUnfollowAction", this.unfollowAction),this.on(document, "uiCancelFollowRequestAction", this.cancelAction),this.on(document, "uiBlockAction", this.blockAction),this.on(document, "uiUnblockAction", this.unblockAction),this.on(document, "uiReportSpamAction", this.reportSpamAction),this.on(document, "uiUndoReportSpamAction", this.undoReportSpamAction),this.on(document, "uiHideSuggestionAction", this.hideSuggestionAction),this.on(document, "uiRetweetOnAction", this.retweetOnAction),this.on(document, "uiRetweetOffAction", this.retweetOffAction),this.on(document, "uiDeviceNotificationsOnAction", this.deviceNotificationsOnAction),this.on(document, "uiDeviceNotificationsOffAction", this.deviceNotificationsOffAction)
            })
        }

        var e = b(f, d);
        a(e)
    })
}),define("app/data/lists", ["module","require","exports","core/component","app/data/with_data"], function(a, b, c) {
    function f() {
        this.listMembershipContent = function(a, b) {
            this.get({url:"/i/" + b.userId + "/lists",dataType:"json",data:{},eventData:b,success:"dataGotListMembershipContent",error:"dataFailedToGetListMembershipContent"})
        },this.addUserToList = function(a, b) {
            this.post({url:"/i/" + b.userId + "/lists/" + b.listId + "/members",dataType:"json",data:{},eventData:b,success:"dataDidAddUserToList",error:"dataFailedToAddUserToList"})
        },this.removeUserFromList = function(a, b) {
            this.destroy({url:"/i/" + b.userId + "/lists/" + b.listId + "/members",dataType:"json",data:{},eventData:b,success:"dataDidRemoveUserFromList",error:"dataFailedToRemoveUserFromList"})
        },this.createList = function(a, b) {
            this.post({url:"/i/lists/create",dataType:"json",data:b,eventData:b,success:"dataDidCreateList",error:"dataFailedToCreateList"})
        },this.after("initialize", function() {
            this.on("uiNeedsListMembershipContent", this.listMembershipContent),this.on("uiAddUserToList", this.addUserToList),this.on("uiRemoveUserFromList", this.removeUserFromList),this.on("uiCreateList", this.createList)
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/with_data");
    a.exports = d(f, e)
}),"use strict",provide("app/boot/profile_popup", function(a) {
    using("core/jquery", "core/utils", "app/data/profile_popup", "app/data/profile_popup_scribe", "app/ui/profile_popup", "app/data/user", "app/data/lists", function($, b, c, d, e, f, g) {
        function h(a) {
            c.attachTo(document, b.merge(a, {eventData:{scribeContext:{component:"profile_dialog"}}})),f.attachTo(document, a),g.attachTo(document, a),e.attachTo("#profile_popup", b.merge(a, {eventData:{scribeContext:{component:"profile_dialog"}}})),d.attachTo(document, a)
        }

        var i = $("#profile_popup").length > 0;
        a(i ? h : $.noop)
    })
}),"use strict",provide("app/ui/message_drawer", function(a) {
    using("core/component", function(b) {
        function d() {
            this.defaultAttrs({fadeTimeout:2e3,closeSelector:".dismiss",textSelector:".message-text"});
            var a = function() {
                this.$node.css("opacity", 1).animate({opacity:0}, 1e3, function() {
                    this.closeMessage()
                }.bind(this))
            };
            this.showMessage = function(b, c) {
                this.$node.css("opacity", 1),this.select("textSelector").html(c.message),this.select("closeSelector").hide(),this.$node.removeClass("hidden"),clearTimeout(this.messageTimeout),this.$node.stop(),this.messageTimeout = setTimeout(a.bind(this), this.attr.fadeTimeout)
            },this.showError = function(a, b) {
                this.$node.css("opacity", 1),this.select("textSelector").html(b.message),this.select("closeSelector").show(),this.$node.removeClass("hidden")
            },this.closeMessage = function() {
                this.$node.addClass("hidden")
            },this.after("initialize", function() {
                this.on(document, "uiShowMessage", this.showMessage),this.on(document, "uiShowError", this.showError),this.on(this.attr.closeSelector, "click", this.closeMessage)
            })
        }

        var c = b(d);
        a(c)
    })
}),define("app/ui/dialogs/goto_user_dialog", ["module","require","exports","app/ui/autocomplete_dropdown","core/component","app/data/autocomplete","app/ui/with_position","app/ui/with_dialog","core/fn","core/jquery"], function(a, b, c) {
    function k() {
        this.defaultAttrs({inputSelector:"input.username-input",usernameFormSelector:"form.goto-user-form",autoCompleteSelector:".autocomplete-results"}),this.focus = function() {
            this.select("inputSelector").focus()
        },this.gotoUser = function(a) {
            a.preventDefault();
            var b = this.select("inputSelector").val().trim();
            b.substr(0, 1) == "@" && (b = b.substr(1)),this.trigger("uiNavigate", {href:"/" + b})
        },this.escHandler = function(a) {
            a.keyCode == 27 && this.select("autoCompleteSelector").css("display") == "none" && this.close()
        },this.reset = function() {
            this.select("inputSelector").val(""),this.select("inputSelector").blur(),this.trigger(this.select("inputSelector"), "uiHideAutocomplete")
        },this.after("initialize", function() {
            this.on(document, "uiShortcutShowGotoUser", this.open),this.on("uiDialogOpened", this.focus),this.on("uiDialogClosed", this.reset),this.on(this.select("usernameFormSelector"), "submit", this.gotoUser),this.on(this.select("inputSelector"), "keyup", this.escHandler),d.attachTo(this.$node, {autocompleteInputSelector:this.select("inputSelector")}),f.attachTo(this.$node, {triggerToken:""})
        })
    }

    "use strict";
    var d = b("app/ui/autocomplete_dropdown"),e = b("core/component"),f = b("app/data/autocomplete"),g = b("app/ui/with_position"),h = b("app/ui/with_dialog"),i = b("core/fn"),$ = b("core/jquery"),j = e(k, h, g);
    a.exports = j
}),"use strict",provide("app/utils/setup_polling_with_backoff", function(a) {
    using("core/clock", "core/jquery", function(b, $) {
        function e(a, e, f) {
            var g = b.setIntervalEvent(a, e || c);
            return $(window).on("focus", g.cancelBackoff.bind(g)).on("blur", g.backoff.bind(g, f || d)),g
        }

        var c = 3e4,d = 9e4;
        a(e)
    })
}),define("app/ui/page_title", ["module","require","exports","core/component"], function(a, b, c) {
    function f() {
        this.addCount = function(a, b) {
            b.count && (document.title = "(" + b.count + ") " + this.title)
        },this.removeCount = function(a, b) {
            document.title = this.title
        },this.setTitle = function(a, b) {
            var c = b || a.originalEvent.state;
            c && (document.title = this.title = c.title)
        },this.after("initialize", function() {
            this.title = document.title,this.on("uiAddPageCount", this.addCount),this.on("uiHasInjectedNewTimeline", this.removeCount),this.on(document, "dataPageRefresh", this.setTitle)
        })
    }

    var d = b("core/component"),e = d(f);
    a.exports = e
}),"use strict",provide("app/utils/cookie", function(a) {
    using("core/jquery", function($) {
        a(function(b, c, d) {
            var e = $.extend({}, d);
            if (arguments.length > 1 && String(c) !== "[object Object]") {
                if (c === null || c === undefined)e.expires = -1,c = "";
                if (typeof e.expires == "number") {
                    var f = e.expires,g = new Date((new Date).getTime() + f * 24 * 60 * 60 * 1e3);
                    e.expires = g
                }
                return c = String(c),document.cookie = [encodeURIComponent(b),"=",e.raw ? c : encodeURIComponent(c),e.expires ? "; expires=" + e.expires.toUTCString() : "","; path=" + (e.path || "/"),e.domain ? "; domain=" + e.domain : "",e.secure ? "; secure" : ""].join("")
            }
            e = c || {};
            var h,i = e.raw ? function(a) {
                return a
            } : decodeURIComponent;
            return(h = (new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)")).exec(document.cookie)) ? i(h[1]) : null
        })
    })
}),define("app/data/geo", ["module","require","exports","core/component","core/jquery","app/utils/cookie","app/data/with_data"], function(a, b, c) {
    function i() {
        this.isInState = function(a) {
            return a.split(" ").indexOf(this.state) >= 0
        },this.isEnabled = function(a) {
            return!this.isInState("disabled enabling enableIsUnavailable")
        },this.setInitialState = function() {
            this.attr.geoEnabled ? this.state = g.webclientCookie() === "1" ? "enabledTurnedOn" : "enabledTurnedOff" : this.state = "disabled"
        },this.requestState = function(a, b) {
            this.shouldLocate() ? this.locate() : this.sendState(this.state)
        },this.shouldLocate = function() {
            return this.isInState("enabledTurnedOn locateIsUnavailable") || this.isInState("located locationUnknown") && (!this.lastLocationTime || this.now() - this.lastLocationTime > h)
        },this.locate = function(a) {
            this.sendState(a ? "changing" : "locating");
            var b = function(a) {
                this.sendState(this.locateOrEnableState(a) || "locateIsUnavailable")
            }.bind(this),c = function() {
                this.sendState("locateIsUnavailable")
            }.bind(this),d = {override_place_id:a};
            this.post({url:"/account/geo_locate",data:d,eventData:d,success:b,error:c})
        },this.locateOrEnableState = function(a) {
            switch (a.status) {
                case"ok":
                    return this.place_id = a.place_id,this.place_name = a.place_name,this.places_html = a.html,this.lastLocationTime = this.now(),"located";
                case"unknown":
                    return this.lastLocationTime = this.now(),"locationUnknown"
            }
        },this.now = function() {
            return(new Date).getTime()
        },this.sendState = function(a) {
            a && (this.state = a);
            var b = {state:this.state};
            this.state === "located" && (b.place_id = this.place_id,b.place_name = this.place_name,b.places_html = this.places_html),this.trigger("dataGeoState", b)
        },this.turnOn = function() {
            this.isEnabled() && (g.webclientCookie("1"),this.locate())
        },this.turnOff = function() {
            this.isEnabled() && (g.webclientCookie(null),this.sendState("enabledTurnedOff"))
        },this.enable = function(a, b) {
            if (!this.isInState("disabled enableIsUnavailable"))return;
            this.sendState("enabling");
            var c = function(a) {
                g.webclientCookie("1"),this.sendState(this.locateOrEnableState(a) || "enableIsUnavailable")
            }.bind(this),d = function() {
                this.sendState("enableIsUnavailable")
            }.bind(this);
            this.post({url:"/account/geo_locate",data:{enable:"1"},eventData:b,success:c,error:d})
        },this.change = function(a, b) {
            this.isEnabled() && this.locate(b.placeId)
        },this.search = function(a, b) {
            if (this.searching) {
                this.pendingSearchData = b;
                return
            }
            this.pendingSearchData = null;
            var c = function() {
                this.searching = !1;
                if (this.pendingSearchData)return this.search(a, this.pendingSearchData),!0
            }.bind(this),d = b.query.trim(),e = [d,b.placeId,b.isPrefix].join(","),f = function(a) {
                this.searchCache[e] = a,a = $.extend({}, a, {sourceEventData:b}),c() || this.trigger("dataGeoSearchResults", a)
            }.bind(this),g = function() {
                c() || this.trigger("dataGeoSearchResultsUnavailable")
            }.bind(this);
            if (!d) {
                f({html:""});
                return
            }
            var h = this.searchCache[e];
            if (h) {
                f(h);
                return
            }
            this.searching = !0,this.get({url:"/account/geo_search",data:{query:d,place_id:b.placeId,is_prefix:b.isPrefix ? "1" : "0"},eventData:b,success:f,error:g})
        },this.after("initialize", function() {
            this.searchCache = {},this.setInitialState(),this.on("uiRequestGeoState", this.requestState),this.on("uiGeoPickerEnable", this.enable),this.on("uiGeoPickerTurnOn", this.turnOn),this.on("uiGeoPickerTurnOff", this.turnOff),this.on("uiGeoPickerChange", this.change),this.on("uiGeoPickerSearch", this.search)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/utils/cookie"),f = b("app/data/with_data"),g = d(i, f),h = 9e5;
    a.exports = g,g.webclientCookie = function(a) {
        return a === undefined ? e("geo_webclient") : e("geo_webclient", a, {expires:3650,path:"/"})
    }
}),"use strict",provide("app/data/tweet", function(a) {
    using("core/component", "app/data/with_auth_token", "core/jquery", "core/i18n", function(b, c, $, _) {
        function e() {
            this.IFRAME_TIMEOUT = 12e4,this.sendTweet = function(a, b) {
                var c = b.tweetboxId,d = function(a) {
                    a.tweetboxId = c,a.repliedToId = b.tweetData.in_reply_to_status_id,this.trigger("dataTweetSuccess", a)
                },e = function(a) {
                    var b;
                    try {
                        b = JSON.parse(a.responseText)
                    } catch(d) {
                        b = {error:_("Sorry! We did something wrong.")}
                    }
                    b.tweetboxId = c,this.trigger("dataTweetError", b)
                };
                $.ajax({type:"POST",url:"/i/tweet/create",dataType:"json",data:this.addAuthToken(b.tweetData),success:d.bind(this),error:e.bind(this)})
            },this.sendTweetWithMedia = function(a, b) {
                var c = b.tweetboxId,d = b.tweetData,e = this,f,g = function(a) {
                    a.tweetboxId = c,a.repliedToId = b.tweetData.in_reply_to_status_id,clearTimeout(f),a.error ? e.trigger("dataTweetError", a) : e.trigger("dataTweetSuccess", a)
                };
                window[c] = g.bind(this),f = setTimeout(function() {
                    window[c] = function() {
                    },g({error:_("Tweeting a photo timed out.")})
                }, this.IFRAME_TIMEOUT);
                var h = $("#" + b.tweetboxId),i = this.getAuthToken();
                h.find(".auth-token").val(i),h.find(".iframe-callback").val("window.top." + c),h.find(".in-reply-to-status-id").val(d.inReplyToStatusId),h.find(".impression-id").val(d.impressionId),h.submit()
            },this.sendDirectMessage = function(a, b) {
                this.trigger("dataDirectMessageSuccess", b)
            },this.after("initialize", function() {
                this.on("uiSendTweet", this.sendTweet),this.on("uiSendTweetWithMedia", this.sendTweetWithMedia),this.on("uiSendDirectMessage", this.sendDirectMessage)
            })
        }

        var d = b(e, c);
        a(d)
    })
}),"use strict",provide("app/ui/tweet_dialog", function(a) {
    using("core/component", "core/jquery", "core/utils", "app/ui/with_dialog", "app/ui/with_position", "core/i18n", function(b, $, c, d, e, _) {
        function g() {
            this.defaultAttrs({tweetBoxSelector:"form.tweet-form",modalTweetSelector:".modal-tweet",modalTitleSelector:".modal-title"}),this.addTweet = function(a) {
                this.select("modalTweetSelector").show(),a.appendTo(this.select("modalTweetSelector"))
            },this.removeTweet = function() {
                this.select("modalTweetSelector").hide().empty()
            },this.openReply = function(a, b) {
                this.addTweet($(a.target).clone()),this.openTweetDialog(a, c.merge(b, {title:_("Reply to {{screenName}}", {screenName:"@" + b.screenName})}))
            },this.openTweetDialog = function(a, b) {
                this.setTitle(b && b.title || _("What's happening?"));
                if (b) {
                    var c = null;
                    b.screenNames ? c = b.screenNames : b.screenName && (c = [b.screenName]),c && (b.defaultText = "@" + c.join(" @") + " ",b.condensedText = _("Reply to {{screenNames}}", {screenNames:b.defaultText})),this.trigger(document, "uiOverrideTweetBoxOptions", b)
                }
                this.open()
            },this.setTitle = function(a) {
                this.select("modalTitleSelector").text(a)
            },this.updateTitle = function(a, b) {
                b && b.title && this.setTitle(b.title)
            },this.prepareTweetBox = function() {
                this.select("tweetBoxSelector").trigger("uiPrepareTweetBox")
            },this.after("initialize", function() {
                this.on(document, "uiShortcutShowTweetbox", this.openTweetDialog),this.on(document, "uiOpenTweetDialog", this.openTweetDialog),this.on(document, "uiOpenReplyDialog", this.openReply),this.on("uiTweetSent", this.close),this.on("uiDialogOpened", this.prepareTweetBox),this.on("uiDialogClosed", this.removeTweet),this.on("uiDialogUpdateTitle", this.updateTitle)
            })
        }

        var f = b(g, d, e);
        a(f)
    })
}),define("app/ui/new_tweet_button", ["module","require","exports","core/component"], function(a, b, c) {
    function e() {
        this.openTweetDialog = function() {
            this.trigger("uiOpenTweetDialog")
        },this.after("initialize", function() {
            this.on("click", this.openTweetDialog)
        })
    }

    "use strict";
    var d = b("core/component");
    a.exports = d(e)
}),define("app/data/tweet_box_scribe", ["module","require","exports","core/component","app/data/with_scribe"], function(a, b, c) {
    function f() {
        var a = {uiTweetboxTweetError:"failure",uiTweetboxTweetSuccess:"send_tweet",uiTweetboxReplySuccess:"send_reply",uiTweetboxDMSuccess:"send_dm",uiOpenTweetDialog:"compose_tweet",uiImagePickerClick:"click",uiImagePickerAdd:"add",uiImagePickerRemove:"remove",uiImagePickerError:"error",uiGeoPickerOffer:"offer",uiGeoPickerEnable:"enable",uiGeoPickerOpen:"open",uiGeoPickerTurnOn:"on",uiGeoPickerTurnOff:"off",uiGeoPickerChange:"select",uiGeoPickerInteraction:"focus_field"};
        this.after("initialize", function() {
            Object.keys(a).forEach(function(b) {
                this.scribeOnEvent(b, a[b])
            }.bind(this))
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/with_scribe");
    a.exports = d(f, e)
}),"use strict",provide("app/utils/image", function(a) {
    using("app/jquery_with_plugins", "core/utils", function($, b) {
        var c = {photoHelperSwfPath:"/t1/flash/PhotoHelper.swf",photoSelectorSwfPath:"/t1/flash/PhotoSelector.swf",MAX_FILE_SIZE:3145728,validateFileName:function(a) {
            return/(.*)\.(jpg|jpeg|png|gif)/i.test(a)
        },validateImageSize:function(a, b) {
            var c = a.size || a.fileSize,b = b || this.MAX_FILE_SIZE;
            return!c || c <= b
        },getFileName:function(a) {
            if (a.indexOf("/") == -1 && a.indexOf("\\") == -1)return a;
            var b = a.match(/(.*)[\/\\]([^\/\\]+\.\w+)$/);
            return b[2]
        },loadPhotoHelperSwf:function(a, b, c, d, e) {
            return a.flash({swf:this.photoHelperSwfPath,height:d,width:e,wmode:"transparent",AllowScriptAccess:"sameDomain",flashvars:{callbackName:b,errorCallbackName:c}}),a.find("object")
        },loadPhotoSelectorSwf:function(a, b, c, d, e, f) {
            return a.flash({swf:this.photoSelectorSwfPath,height:d,width:e,wmode:"transparent",AllowScriptAccess:"sameDomain",flashvars:{callbackName:b,errorCallbackName:c,buttonWidth:e,buttonHeight:d,maxSizeInBytes:f}}),a.find("object")
        },hasFlash:function() {
            try {
                return $.flash.available && $.flash.hasVersion(10)
            } catch(a) {
                return!1
            }
        },hasFileReader:function() {
            return typeof FileReader != "function" ? !1 : !0
        },hasCanvas:function() {
            var a = document.createElement("canvas");
            return!!a.getContext && !!a.getContext("2d")
        },getFileHandle:function(a) {
            return a.files && a.files[0] ? a.files[0] : !1
        },shouldUseFlash:function() {
            return!this.hasFileReader() && this.hasFlash()
        },mode:function() {
            return this.hasFileReader() ? "html5" : this.hasFlash() ? "flash" : "html4"
        },getDataUri:function(a, b) {
            var c = "data:image/jpeg;base64," + a;
            return b && (c = "url(" + c + ")"),c
        },getFileData:function(a, b, c) {
            var d = new FileReader;
            d.onload = function(b) {
                var d = b.target.result;
                c(a, d)
            },d.readAsDataURL(b)
        }};
        a(c)
    })
}),"use strict",provide("app/utils/image_thumbnail", function(a) {
    using("core/jquery", "app/utils/image", function($, b) {
        var c = {createThumbnail:function(a, c, d) {
            var e = new Image;
            e.onload = function() {
                d(a, e, e.height, e.width)
            },e.src = b.getDataUri(c)
        },getThumbnailOffset:function(a, b, c) {
            var d;
            if (b == a && b >= c && a >= c)return{position:"absolute",height:c,width:c,left:0,top:0};
            if (a < c || b < c)d = {position:"absolute",height:a,width:b,top:(c - a) / 2,left:(c - b) / 2}; else if (b > a) {
                var e = c / a * b;
                d = {position:"absolute",height:c,width:e,left:-(e - c) / 2,top:0}
            } else if (a > b) {
                var f = c / b * a;
                d = {position:"absolute",height:f,width:c,top:-(f - c) / 2,left:0}
            }
            return d
        }};
        a(c)
    })
}),"use strict",provide("app/ui/tweet_box_thumbnails", function(a) {
    using("core/component", "core/jquery", "core/utils", "app/utils/image", "app/utils/image_thumbnail", function(b, $, c, d, e) {
        function g() {
            this.defaults = {thumbSelector:".preview",thumbImageSelector:".preview img",filenameSelector:".preview .filename",dismissSelector:".dismiss",tweetBoxSelector:".tweet-form"},this.showPreview = function(a, b) {
                b.imageData && e.createThumbnail(b.fileName, b.imageData, this.gotThumbnail.bind(this)),this.select("filenameSelector").text(b.fileName)
            },this.hidePreview = function() {
                this.select("filenameSelector").empty(),this.select("thumbImageSelector").remove()
            },this.gotThumbnail = function(a, b, c, d) {
                var f = e.getThumbnailOffset(c, d, 48);
                $(b).css(f),this.select("thumbSelector").append($(b))
            },this.removeImage = function() {
                this.hidePreview(),this.trigger("uiTweetBoxRemoveImage"),this.trigger("uiImagePickerRemove")
            },this.after("initialize", function() {
                c.push(this.attr, {eventData:{scribeContext:{element:"image_picker"}}}, !1);
                var a = this.$node.closest(this.attr.tweetBoxSelector);
                this.on(a, "uiTweetBoxShowPreview", this.showPreview),this.on(a, "uiTweetBoxHidePreview", this.hidePreview),this.on(this.select("dismissSelector"), "click", this.removeImage)
            })
        }

        var f = b(g);
        a(f)
    })
}),"use strict",provide("app/utils/image_resize", function(a) {
    using("app/utils/image", function(b) {
        var c = {resize:function(a, c, d, e) {
            if (!b.hasCanvas())return e(a, c.split(";base64,")[1]);
            var f = new Image,g = document.createElement("canvas"),h = g.getContext("2d");
            f.onload = function() {
                if (f.width == 0 || f.height == 0) {
                    e(a, !1);
                    return
                }
                if (f.width < d && f.height < d) {
                    e(a, c.split(";base64,")[1]);
                    return
                }
                var b,i;
                f.width > f.height ? (b = d,i = f.height / f.width * d) : (i = d,b = f.width / f.height * d),g.width = b,g.height = i,h.drawImage(f, 0, 0, b, i);
                var j = g.toDataURL("image/jpeg");
                e(a, j.split("data:image/jpeg;base64,")[1])
            },f.onerror = function() {
                e(a, !1)
            },f.src = c
        }};
        a(c)
    })
}),"use strict",provide("app/ui/with_image_selection", function(a) {
    using("core/jquery", "app/utils/image", "app/utils/image_resize", "app/utils/image_thumbnail", "core/utils", "core/i18n", function($, b, c, d, e, _) {
        function f() {
            this.resize = c.resize.bind(b),this.getFileData = b.getFileData.bind(b),this.getFileHandle = b.getFileHandle.bind(b),this.getFileName = b.getFileName.bind(b),this.validateFileName = b.validateFileName.bind(b),this.validateImageSize = b.validateImageSize.bind(b),this.defaultAttrs({swfSelector:".swf-container",fileSelector:"input.file-input",fileDataSelector:"input.file-data",buttonSelector:".btn",maxSizeInBytes:3145728}),this.validateImage = function(a, b) {
                return this.validateFileName(a) ? b && !this.validateImageSize(b, this.maxSizeInBytes) ? (this.addFileError("tooLarge"),!1) : !0 : (this.addFileError("notImage"),!1)
            },this.imageSelected = function(a) {
                var b = this.select("fileSelector").get(0),c = this.getFileName(b.value),d = this.getFileHandle(b);
                if (!this.validateImage(c, d))return;
                this.gotFileHandle(c, d)
            },this.gotFileHandle = function(a, b) {
                this.mode() == "html5" ? this.getFileData(a, b, this.gotImageData.bind(this)) : this.gotFileInput(a)
            },this.reset = function() {
                this.resetInput(),this.select("fileDataSelector").replaceWith('<input type="hidden" name="media_data_empty" class="file-data">'),this.trigger("uiTweetBoxHidePreview")
            },this.gotFlashImageData = function(a, b, c) {
                this.showPreview({imageData:c,fileName:a}),this.trigger("uiImagePickerAdd", {message:"flash"}),this.readyFileData(b)
            },this.gotFlashImageError = function(a, b) {
                this.addFileError(a)
            },this.gotResizedImageData = function(a, b) {
                if (!b) {
                    this.addFileError("notImage");
                    return
                }
                this.showPreview({imageData:b,fileName:a}),this.trigger("uiImagePickerAdd", {message:"html5"});
                var c = b.split(",");
                c.length > 1 && (b = c[1]),this.readyFileData(b)
            },this.gotFileInput = function(a) {
                this.showPreview({fileName:a}),this.trigger("uiImagePickerAdd", {message:"html4"}),this.readyFileInput()
            },this.readyFileInput = function() {
                this.select("fileSelector").attr("name", "media[]")
            },this.readyFileData = function(a) {
                this.select("fileDataSelector").attr("name", "media_data[]"),this.select("fileDataSelector").attr("value", a),this.resetInput()
            },this.resetInput = function() {
                this.select("fileSelector").replaceWith('<input type="file" name="media_empty" class="file-input" tabindex="-1">')
            },this.showPreview = function(a) {
                this.trigger("uiTweetBoxShowPreview", a)
            },this.setupFlash = function() {
                var a = "swift_tweetbox_callback_" + +(new Date),b = "swift_tweetbox_error_callback_" + +(new Date);
                window[a] = this.gotFlashImageData.bind(this),window[b] = this.gotFlashImageError.bind(this),setTimeout(function() {
                    this.loadSwf(a, b)
                }.bind(this), 500)
            },this.mode = function() {
                return this.attr.forceHTML5FileUploader && (this._mode = "html5"),this._mode = this._mode || b.mode(),this._mode
            },this.setup = function() {
                this.mode() == "flash" && this.setupFlash()
            },this.after("initialize", function() {
                this.setup(),this.on("change", this.imageSelected)
            })
        }

        a(f)
    })
}),"use strict",provide("app/ui/image_selector", function(a) {
    using("core/component", "core/jquery", "app/utils/image", "app/utils/image_resize", "app/utils/image_thumbnail", "app/ui/with_image_selection", "core/utils", "core/i18n", function(b, $, c, d, e, f, g, _) {
        function i() {
            this.defaults = {swfHeight:30,swfWidth:42,tweetBoxSelector:".tweet-form"},this.resetAndHidePreview = function() {
                this.reset(),this.trigger("uiTweetBoxHidePreview")
            },this.disable = function() {
                this.$node.addClass("disabled"),this.select("buttonSelector").addClass("active disabled")
            },this.enable = function() {
                this.$node.removeClass("disabled"),this.select("buttonSelector").removeClass("active disabled")
            },this.gotImageData = function(a, b) {
                this.resize(a, b, 2048, this.gotResizedImageData.bind(this))
            },this.addFileError = function(a) {
                a == "tooLarge" ? this.trigger("uiShowError", {message:_("The file you selected is greater than the 3MB limit.")}) : (a == "notImage" || a == "ioError") && this.trigger("uiShowError", {message:_("You did not select an image.")}),this.trigger("uiImagePickerError", {message:a}),this.reset()
            },this.loadSwf = function(a, b) {
                c.loadPhotoHelperSwf(this.select("swfSelector"), a, b, this.attr.swfHeight, this.attr.swfWidth)
            },this.imageSelectorClicked = function() {
                this.trigger("uiImagePickerClick")
            },this.after("initialize", function() {
                var a = this.$node.closest(this.attr.tweetBoxSelector);
                this.on(a, "uiTweetBoxHidePreview", this.enable),this.on(a, "uiTweetBoxShowPreview", this.disable),this.on(a, "uiTweetBoxRemoveImage", this.resetAndHidePreview)
            })
        }

        var h = b(i, f);
        a(h)
    })
}),"use strict",provide("app/ui/with_click_outside", function(a) {
    using("core/fn", "core/jquery", function(b, $) {
        function c() {
            this.onClickOutside = function(a, b) {
                b = b.bind(this),this.clickOutsideHandler = function(c, d) {
                    var e = !0;
                    a.each(function() {
                        if ($(c.target).closest(this).length)return e = !1,!1
                    }),e && b(c, d)
                },$(document).on("click", this.clickOutsideHandler)
            },this.offClickOutside = function() {
                this.clickOutsideHandler && ($(document).off("click", this.clickOutsideHandler),this.clickOutsideHandler = null)
            },this.before("teardown", function() {
                this.offClickOutside()
            })
        }

        a(c)
    })
}),define("app/ui/geo_picker", ["module","require","exports","core/component","core/jquery","core/i18n","app/ui/with_click_outside","core/utils"], function(a, b, c) {
    function g() {
        this.defaultAttrs({buttonSelector:"button.geo-picker-btn",placeIdSelector:"input[name=place_id]",statusSelector:"span.geo-status",dropdownContainerSelector:"span.dropdown-container",dropdownSelector:"ul.dropdown-menu",dropdownDisabledSelector:"#geo-disabled-dropdown",enableButtonSelector:"button.geo-turn-on",notNowButtonSelector:"button.geo-not-now",dropdownEnabledSelector:"#geo-enabled-dropdown",querySelector:"li.geo-query-location input",geoSearchSelector:"li.geo-query-location i",dropdownStatusSelector:"li.geo-dropdown-status",searchResultsSelector:"li.geo-search-result",placeResultsSelector:"li.geo-place-result",changePlaceSelector:"li[data-place-id]",turnOffButtonSelector:"li.geo-turn-off-item",focusableSelector:"li.geo-focusable",firstFocusableSelector:"li.geo-focusable:first",focusedSelector:"li.geo-focused"}),this.selectGeoAction = function(a) {
            if (this.select("dropdownSelector").is(":visible")) {
                this.offerFocusAndHideDropdown();
                return
            }
            switch (this.geoState.state) {
                case"disabled":
                case"enableIsUnavailable":
                    this.trigger("uiGeoPickerOffer");
                    break;
                case"locateIsUnavailable":
                case"enabledTurnedOn":
                    this.requestGeoState();
                    break;
                case"enabledTurnedOff":
                    this.turnOn();
                    break;
                case"changing":
                case"locating":
                case"located":
                case"locationUnknown":
                case"locateIsUnavailable":
                    this.trigger("uiGeoPickerOpen")
            }
        },this.offerFocusAndHideDropdown = function() {
            this.trigger("uiOfferFocus"),this.hideDropdown()
        },this.hideDropdown = function() {
            this.offClickOutside(),this.select("dropdownSelector").hide(),this.select("buttonSelector").removeClass("open")
        },this.openDropdown = function(a, b) {
            var c = a.type == "uiGeoPickerOpen" ? this.attr.dropdownEnabledSelector : this.attr.dropdownDisabledSelector;
            this.select("dropdownContainerSelector").html($(c).html());
            var d = this.select("dropdownSelector");
            this.showGeoState(),this.onClickOutside(d.add(this.select("buttonSelector")), this.hideDropdown),this.lastQuery = "",this.geoQueryFieldChanged = !1,d.show().focus(),this.select("buttonSelector").addClass("open"),this.select("querySelector").focus()
        },this.enable = function() {
            this.offerFocusAndHideDropdown(),this.trigger("uiGeoPickerEnable")
        },this.setFocus = function(a) {
            var b = $(a.target);
            this.select("focusedSelector").not(b).removeClass("geo-focused"),b.addClass("geo-focused")
        },this.clearFocus = function(a) {
            $(a.target).removeClass("geo-focused")
        },this.turnOn = function() {
            this.trigger("uiGeoPickerTurnOn")
        },this.turnOff = function() {
            this.offerFocusAndHideDropdown(),this.trigger("uiGeoPickerTurnOff")
        },this.changePlace = function(a) {
            var b = $(a.target),c = b.attr("data-place-id");
            this.offerFocusAndHideDropdown();
            if (!c || c === this.lastPlaceId)return;
            var d = {placeId:c,scribeData:{item_names:[c]}};
            this.lastPlaceId && d.scribeData.item_names.push(this.lastPlaceId),b.hasClass("geo-search-result") && this.lastQueryData && (d.scribeData.query = this.lastQueryData.query),this.trigger("uiGeoPickerChange", d)
        },this.updateState = function(a, b) {
            this.geoState = b,this.showGeoState()
        },this.showGeoState = function() {
            var a = "",b = "",c = !1,d = "",e = this.geoState;
            switch (e.state) {
                case"enabling":
                case"locating":
                    a = _("Getting location...");
                    break;
                case"enableIsUnavailable":
                case"locateIsUnavailable":
                    a = _("Location service unavailable");
                    break;
                case"changing":
                    a = _("Changing location...");
                    break;
                case"locationUnknown":
                    a = _("Unknown location");
                    break;
                case"located":
                    a = e.place_name,b = e.place_id,d = e.places_html,c = !0
            }
            this.$node.toggleClass("active", c),this.select("statusSelector").text(a),this.select("placeResultsSelector").add(this.select("searchResultsSelector")).remove(),this.select("dropdownStatusSelector").text(a).toggle(!c).after(d),this.select("placeIdSelector").val(b),this.lastPlaceId = b
        },this.requestGeoState = function() {
            this.trigger("uiRequestGeoState")
        },this.queryKeyDown = function(a) {
            switch (a.which) {
                case 38:
                    a.preventDefault(),this.moveFocus(-1);
                    break;
                case 40:
                    a.preventDefault(),this.moveFocus(1);
                    break;
                case 13:
                    a.preventDefault();
                    var b = this.select("focusedSelector");
                    if (b.length) {
                        a.stopPropagation(),b.trigger("uiGeoPickerSelect");
                        return
                    }
                    this.searchExactMatch()
            }
            this.searchAutocomplete()
        },this.queryKeyUp = function(a) {
            a.which == 27 && (a.stopPropagation(),this.offerFocusAndHideDropdown())
        },this.searchIfQueryChanged = function(a) {
            var b = this.select("querySelector").val() || "";
            if (a && this.lastQuery === b)return;
            this.lastIsPrefix = a,this.lastQuery = b,this.select("dropdownStatusSelector").text(_("Searching places...")).show(),this.geoQueryFieldChanged || (this.geoQueryFieldChanged = !0,this.trigger("uiGeoPickerInteraction")),this.trigger("uiGeoPickerSearch", {placeId:this.lastPlaceId,query:b,isPrefix:a})
        },this.searchExactMatch = function() {
            this.searchIfQueryChanged(!1)
        },this.searchAutocomplete = function() {
            setTimeout(function() {
                this.searchIfQueryChanged(!0)
            }.bind(this), 0)
        },this.moveFocus = function(a) {
            var b = this.select("focusedSelector"),c = this.select("focusableSelector"),d = c.index(b) + a,e = c.length - 1;
            d < 0 ? d = e : d > e && (d = 0),b.removeClass("geo-focused"),c.eq(d).addClass("geo-focused")
        },this.searchResults = function(a, b) {
            var c = b.sourceEventData;
            if (!c || c.placeId !== this.lastPlaceId || c.query !== this.select("querySelector").val() || c.isPrefix && !this.lastIsPrefix)return;
            this.lastQueryData = c,this.select("searchResultsSelector").remove(),this.select("dropdownStatusSelector").hide().after(b.html)
        },this.searchUnavailable = function(a, b) {
            this.select("dropdownStatusSelector").text(_("Location service unavailable")).show()
        },this.after("initialize", function() {
            f.push(this.attr, {eventData:{scribeContext:{element:"geo_picker"}}}, !1),this.geoState = {},this.on(this.attr.parent, "uiPrepareTweetBox", this.requestGeoState),this.on(document, "dataGeoState", this.updateState),this.on(document, "dataGeoSearchResults", this.searchResults),this.on(document, "dataGeoSearchResultsUnavailable", this.searchUnavailable),this.on("click", {buttonSelector:this.selectGeoAction,enableButtonSelector:this.enable,notNowButtonSelector:this.offerFocusAndHideDropdown,turnOffButtonSelector:this.turnOff,geoSearchSelector:this.searchExactMatch,changePlaceSelector:this.changePlace}),this.on("uiGeoPickerSelect", {turnOffButtonSelector:this.turnOff,changePlaceSelector:this.changePlace}),this.on("mouseover", {focusableSelector:this.setFocus}),this.on("mouseout", {focusableSelector:this.clearFocus}),this.on("keydown", {querySelector:this.queryKeyDown}),this.on("keyup", {dropdownSelector:this.queryKeyUp}),this.on("change paste", {querySelector:this.searchAutocomplete}),this.on("uiGeoPickerOpen uiGeoPickerOffer", this.openDropdown)
        }),this.before("teardown", function() {
            this.hideDropdown()
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),_ = b("core/i18n"),e = b("app/ui/with_click_outside"),f = b("core/utils");
    a.exports = d(g, e)
}),define("app/ui/tweet_box_manager", ["module","require","exports","core/jquery","core/utils","app/ui/tweet_box","app/ui/tweet_box_thumbnails","app/ui/image_selector","app/ui/autocomplete_dropdown","app/data/autocomplete","app/ui/geo_picker","core/utils","core/component"], function(a, b, c) {
    function m() {
        this.createTweetBoxAtTarget = function(a, b) {
            this.createTweetBox(a.target, b)
        },this.createTweetBox = function(a, b) {
            var c = $(a);
            if (!((b.eventData || {}).scribeContext || {}).component)throw new Error("Please specify scribing component for tweet box.");
            c.find(".geo-picker").length > 0 && j.attachTo(c.find(".geo-picker"), d.merge(b, {parent:c}, !0)),e.attachTo(c, d.merge({eventParams:{type:"Tweet"}}, b)),c.find(".photo-selector").length > 0 && (f.attachTo(c.find(".thumbnail-container"), d.merge(b, !0)),g.attachTo(c.find(".photo-selector"), d.merge(b, !0))),h.attachTo(c, {autocompleteInputSelector:"textarea.tweet-box"}),i.attachTo(c)
        },this.after("initialize", function() {
            this.on("uiInitTweetbox", this.createTweetBoxAtTarget),this.attr.initializeOnLoad && this.createTweetBox.apply(this, this.attr.initializeOnLoad)
        })
    }

    var $ = b("core/jquery"),d = b("core/utils"),e = b("app/ui/tweet_box"),f = b("app/ui/tweet_box_thumbnails"),g = b("app/ui/image_selector"),h = b("app/ui/autocomplete_dropdown"),i = b("app/data/autocomplete"),j = b("app/ui/geo_picker"),d = b("core/utils"),k = b("core/component"),l = k(m);
    a.exports = l
}),define("app/boot/tweet_boxes", ["module","require","exports","app/data/geo","app/data/tweet","app/ui/tweet_dialog","app/ui/new_tweet_button","app/data/tweet_box_scribe","app/ui/tweet_box_manager"], function(a, b, c) {
    function j(a) {
        d.attachTo(document, a),e.attachTo(document, a),f.attachTo("#global-tweet-dialog"),g.attachTo("#global-new-tweet-button", {eventData:{scribeContext:{component:"top_bar",element:"tweet_button"}}}),h.attachTo(document, a),i.attachTo(document, {initializeOnLoad:["#global-tweet-dialog form.tweet-form",{eventData:{scribeContext:{component:"tweet_box_dialog"}},modal:!0}]})
    }

    "use strict";
    var d = b("app/data/geo"),e = b("app/data/tweet"),f = b("app/ui/tweet_dialog"),g = b("app/ui/new_tweet_button"),h = b("app/data/tweet_box_scribe"),i = b("app/ui/tweet_box_manager");
    a.exports = j
}),"use strict",provide("app/ui/with_dropdown", function(a) {
    using("core/fn", "core/jquery", function(b, $) {
        function c() {
            this.toggleDisplay = function(a) {
                this.$node.toggleClass("open"),this.$node.hasClass("open") && this.trigger("uiDropdownOpened"),a && a.preventDefault()
            },this.close = function(a) {
                var b = $(this.attr.toggler);
                if (a.target === this.$node || this.$node.has(a.target).length > 0)return;
                this.$node.removeClass("open")
            },this.after("initialize", function() {
                this.on(this.attr.toggler, "click", this.toggleDisplay),this.on(document, "click", this.close)
            })
        }

        a(c)
    })
}),"use strict",provide("app/ui/user_dropdown", function(a) {
    using("core/component", "core/jquery", "app/ui/with_dropdown", "app/utils/storage/core", function(b, $, c, d) {
        function f() {
            this.signout = function() {
                d.clearAll(),this.$signoutForm.submit()
            },this.showDirectMessageDialog = function(a, b) {
                this.trigger("uiNeedsDMDialog"),this.toggleDisplay(),a.preventDefault()
            },this.showKeyboardShortcutsDialog = function(a, b) {
                this.trigger(document, "uiOpenKeyboardShortcutsDialog"),a.preventDefault()
            },this.showConversationNotification = function(a, b) {
                this.unreadThreads = b.threads,this.$node.addClass(this.attr.glowClass),this.$dmCount.addClass(this.attr.glowClass).text(b.threads.length)
            },this.updateConversationNotication = function(a, b) {
                var c = $.inArray(b.recipient, this.unreadThreads);
                if (c === -1)return;
                this.unreadThreads.splice(c, 1);
                var d = parseInt(this.$dmCount.text(), 10) - 1;
                d ? this.$dmCount.text(d) : (this.$node.removeClass(this.attr.glowClass),this.$dmCount.removeClass(this.attr.glowClass).text(""))
            },this.after("initialize", function() {
                this.unreadThreads = [],this.$signoutForm = this.select("signoutForm"),this.on(this.attr.keyboardShortcuts, "click", this.showKeyboardShortcutsDialog),this.$dmCount = this.select("dmCount"),this.on(this.attr.signout, "click", this.signout),this.on(this.attr.directMessages, "click", this.showDirectMessageDialog),this.on(document, "uiDMDialogOpenedConversation", this.updateConversationNotication),this.on(document, "uiDMDialogHasNewConversations", this.showConversationNotification),this.on(document, "click", this.close)
            })
        }

        var e = b(f, c);
        a(e)
    })
}),"use strict",provide("app/ui/signin_dropdown", function(a) {
    using("core/component", "core/fn", "core/jquery", "app/ui/with_dropdown", function(b, $, c, d) {
        function f() {
            this.defaultAttrs({toggler:".dropdown-toggle",usernameSelector:".email-input"}),this.focusUsername = function() {
                this.select("usernameSelector").focus()
            },this.after("initialize", function() {
                this.on("uiDropdownOpened", this.focusUsername)
            })
        }

        var e = b(f, d);
        a(e)
    })
}),"use strict",provide("app/ui/language_dropdown", function(a) {
    using("core/component", "app/ui/with_dropdown", function(b, c) {
        function e() {
            this.defaultAttrs({toggler:".dropdown-toggle"})
        }

        var d = b(e, c);
        a(d)
    })
}),define("app/ui/search_input", ["module","require","exports","core/component"], function(a, b, c) {
    function e() {
        this.defaultAttrs({magnifyingGlassSelector:".js-search-action",inputFieldSelector:"#search-query",hintFieldSelector:"#search-query-hint"}),this.focus = function(a) {
            this.$node.addClass("focus"),this.$input.addClass("focus"),this.$hint.addClass("focus")
        },this.blur = function(a) {
            this.$node.removeClass("focus"),this.$input.removeClass("focus"),this.$hint.removeClass("focus")
        },this.executeTypeaheadSelection = function(a, b) {
            if (b.isClick)return;
            this.trigger("uiNavigate", {href:b.href})
        },this.submitQuery = function(a, b) {
            this.trigger("uiSearchQuery", {query:b.query,source:"search"}),this.trigger("uiNavigate", {href:"/search/" + encodeURIComponent(b.query)})
        },this.searchFormSubmit = function(a, b) {
            a.preventDefault(),this.trigger(this.$input, "uiTypeaheadInputSubmit")
        },this.after("initialize", function() {
            this.$input = this.select("inputFieldSelector"),this.$hint = this.select("hintFieldSelector"),this.on("uiTypeaheadItemSelected", this.executeTypeaheadSelection),this.on("uiTypeaheadSubmitQuery", this.submitQuery),this.on(this.$input, "uiTypeaheadInputFocus", this.focus),this.on(this.$input, "uiTypeaheadInputBlur", this.blur),this.on("submit", this.searchFormSubmit),this.on(this.select("magnifyingGlassSelector"), "click", this.searchFormSubmit)
        })
    }

    "use strict";
    var d = b("core/component");
    a.exports = d(e)
}),define("app/ui/global_nav", ["module","require","exports","core/component"], function(a, b, c) {
    function f() {
        this.defaultAttrs({activeClass:"active",newClass:"new",nav:"li"}),this.updateActive = function(a, b) {
            b && (this.select("nav").removeClass(this.attr.activeClass),this.select("nav").filter("[data-global-action=" + b.section + "]").addClass(this.attr.activeClass),this.removeGlow())
        },this.addGlow = function() {
            this.$node.find("." + this.attr.activeClass).addClass(this.attr.newClass)
        },this.removeGlow = function() {
            this.$node.find("." + this.attr.activeClass).removeClass(this.attr.newClass)
        },this.after("initialize", function() {
            this.on(document, "uiAddPageCount", this.addGlow),this.on(document, "uiHasInjectedNewTimeline", this.removeGlow),this.on(document, "dataPageRefresh", this.updateActive)
        })
    }

    var d = b("core/component"),e = d(f);
    a.exports = e
}),define("app/ui/navigation_links", ["module","require","exports","core/component","core/jquery"], function(a, b, c) {
    function e() {
        this.defaultAttrs({navSelector:"a[data-nav]"}),this.navEvent = function(a) {
            var b = $(a.target).closest("a[data-nav]");
            this.trigger("uiNavigationLinkClick", {scribeContext:{element:b.attr("data-nav")},url:b.attr("href")})
        },this.after("initialize", function() {
            this.on(this.select("navSelector"), "click", this.navEvent)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery");
    a.exports = d(e)
}),define("app/data/typeahead/with_cache", ["module","require","exports","core/fn"], function(a, b, c) {
    function e() {
        this.defaultAttrs({cache_limit:10}),this.getCachedSuggestions = function(a) {
            return this.cache[a] ? this.cache[a].value : null
        },this.deleteCachedSuggestions = function(a) {
            return this.cache[a] ? (this.cache.COUNT > 1 && (a == this.cache.NEWEST.query ? (this.cache.NEWEST = this.cache.NEWEST.before,this.cache.NEWEST.after = null) : a == this.cache.OLDEST.query ? (this.cache.OLDEST = this.cache.OLDEST.after,this.cache.OLDEST.before = null) : (this.cache[a].after.before = this.cache[a].before,this.cache[a].before.after = this.cache[a].after)),delete this.cache[a],this.cache.COUNT -= 1,!0) : !1
        },this.setCachedSuggestions = function(a, b) {
            if (this.cache.LIMIT === 0)return;
            this.deleteCachedSuggestions(a),this.cache.COUNT >= this.cache.LIMIT && this.deleteCachedSuggestions(this.cache.OLDEST.query),this.cache.COUNT == 0 ? (this.cache[a] = {query:a,value:b,before:null,after:null},this.cache.NEWEST = this.cache[a],this.cache.OLDEST = this.cache[a]) : (this.cache[a] = {query:a,value:b,before:this.cache.NEWEST,after:null},this.cache.NEWEST.after = this.cache[a],this.cache.NEWEST = this.cache[a]),this.cache.COUNT += 1
        },this.aroundGetSuggestions = function(a, b, c) {
            var d = c.id + ":" + c.query,e = this.getCachedSuggestions(d);
            if (e) {
                this.triggerSuggestionsEvent(c.id, c.query, e);
                return
            }
            a(b, c)
        },this.afterTriggerSuggestionsEvent = function(a, b, c, d) {
            if (d)return;
            var e = a + ":" + b;
            this.setCachedSuggestions(e, c)
        },this.after("triggerSuggestionsEvent", this.afterTriggerSuggestionsEvent),this.around("getSuggestions", this.aroundGetSuggestions),this.after("initialize", function(a) {
            this.cache = {NEWEST:null,OLDEST:null,COUNT:0,LIMIT:this.attr.cache_limit}
        })
    }

    "use strict";
    var d = b("core/fn");
    a.exports = e
}),define("app/utils/typeahead_helpers", ["module","require","exports"], function(a, b, c) {
    function d(a) {
        return a.trim().toLowerCase().split(/[\s-_]+/)
    }

    "use strict",a.exports = {tokenizeText:d}
}),define("app/data/typeahead/accounts_datasource", ["module","require","exports","core/jquery","app/utils/typeahead_helpers","app/utils/storage/custom","app/data/with_data","core/compose","core/utils"], function(a, b, c) {
    function i(a) {
        this.attr = {ttl_ms:2592e5,localStorageCount:2500,ie8LocalStorageCount:1e3,limit:6,version:3,localQueriesEnabled:!1,remoteQueriesEnabled:!1,blockedIds:[],storageAdjacencyList:"userAdjacencyList",storageHash:"userHash",storageProtocol:"protocol",storageVersion:"userVersion"},this.attr = h.merge(this.attr, a),g.mixin(this, [f]),this.getPrefetchCount = function() {
            return this.isIE8() && this.attr.localStorageCount > this.attr.ie8LocalStorageCount ? this.attr.ie8LocalStorageCount : this.attr.localStorageCount
        },this.isIE7 = function() {
            return $.browser.msie && parseInt($.browser.version, 10) < 8
        },this.isIE8 = function() {
            return $.browser.msie && parseInt($.browser.version, 10) === 8
        },this.getProtocol = function() {
            return window.location.protocol
        },this.loadData = function() {
            if (this.isIE7())return;
            var a = this.storage.getItem(this.attr.storageVersion),b = this.storage.getItem(this.attr.storageProtocol);
            if (a == this.attr.version && b == this.getProtocol()) {
                this.userHash = this.storage.getItem(this.attr.storageHash),this.adjacencyList = this.storage.getItem(this.attr.storageAdjacencyList);
                return
            }
            var c = function(a) {
                this.processAccounts(a)
            };
            this.get({url:"/i/search/typeahead.json",headers:{"X-Phx":!0},data:{prefetch:!0,result_type:"users",count:this.getPrefetchCount()},eventData:{},success:c.bind(this),error:$.noop})
        },this.processAccounts = function(a) {
            a.users.forEach(function(a) {
                a.tokens = a.tokens.map(function(a) {
                    return typeof a == "string" ? a : a.token
                }),this.userHash[a.id] = a,a.tokens.forEach(function(b) {
                    var c = b.charAt(0);
                    this.adjacencyList[c] === undefined && (this.adjacencyList[c] = []),this.adjacencyList[c].indexOf(a.id) === -1 && this.adjacencyList[c].push(a.id)
                }, this)
            }, this),this.storage.setItem(this.attr.storageHash, this.userHash, this.attr.ttl_ms),this.storage.setItem(this.attr.storageAdjacencyList, this.adjacencyList, this.attr.ttl_ms),this.storage.setItem(this.attr.storageVersion, this.attr.version, this.attr.ttl_ms),this.storage.setItem(this.attr.storageProtocol, this.getProtocol(), this.attr.ttl_ms)
        },this.getLocalSuggestions = function(a) {
            if (!this.attr.localQueriesEnabled || this.isIE7())return[];
            var b = d.tokenizeText(a),c = this.getPotentiallyMatchingIds(b),e = this.getAccountsFromIds(c),f = e.filter(this.matcher(b));
            return f.sort(this.sorter),f = f.slice(0, this.attr.limit),f
        },this.getPotentiallyMatchingIds = function(a) {
            var b = [];
            return a.map(function(a) {
                var c = this.adjacencyList[a.charAt(0)];
                c && (b = b.concat(c))
            }, this),b = h.uniqueArray(b),b
        },this.getAccountsFromIds = function(a) {
            var b = [];
            return a.forEach(function(a) {
                var c = this.userHash[a];
                c && b.push(c)
            }, this),b
        },this.matcher = function(a) {
            return function(b) {
                var c = b.tokens,d = [],e = a.every(function(a) {
                    var b = c.filter(function(b) {
                        return b.indexOf(a) === 0
                    });
                    return b.length
                });
                if (e)return b
            }
        },this.sorter = function(a, b) {
            var c = a.rounded_graph_weight !== 0,d = b.rounded_graph_weight !== 0;
            return c && !d ? -1 : d && !c ? 1 : c && d ? b.rounded_graph_weight - a.rounded_graph_weight : b.rounded_score - a.rounded_score
        },this.isBlocked = function(a) {
            return this.attr.blockedIds.indexOf(a.id) !== -1
        },this.getRemoteSuggestions = function(a, b, c) {
            var d = c.accounts || [],e = {};
            return d.forEach(function(a) {
                e[a.id] = !0
            }, this),this.attr.remoteQueriesEnabled && b.users.forEach(function(a) {
                !e[a.id] && !this.isBlocked(a) && d.push(a)
            }, this),c.accounts = d.slice(0, this.attr.limit),c
        },this.requiresRemoteSuggestions = function() {
            return this.attr.remoteQueriesEnabled
        },this.initialize = function() {
            var a = e({withExpiry:!0});
            this.storage = new a("typeahead"),this.adjacencyList = {},this.userHash = {},this.loadData()
        },this.initialize()
    }

    "use strict";
    var $ = b("core/jquery"),d = b("app/utils/typeahead_helpers"),e = b("app/utils/storage/custom"),f = b("app/data/with_data"),g = b("core/compose"),h = b("core/utils");
    a.exports = i
}),define("app/data/typeahead/saved_searches_datasource", ["module","require","exports","core/utils"], function(a, b, c) {
    function e(a) {
        this.attr = {items:[]},this.attr = d.merge(this.attr, a),this.getRemoteSuggestions = function(a, b, c) {
            return c
        },this.requiresRemoteSuggestions = function() {
            return!1
        },this.getLocalSuggestions = function(a) {
            return a ? [] : this.attr.items
        }
    }

    "use strict";
    var d = b("core/utils");
    a.exports = e
}),define("app/data/typeahead/with_external_event_listeners", ["module","require","exports","core/jquery","app/utils/typeahead_helpers"], function(a, b, c) {
    function e() {
        this.onFollowStateChange = function(a, b) {
            switch (b.newState) {
                case"blocked":
                    this.datasources.accounts.attr.blockedIds.indexOf(b.userId) == -1 && this.datasources.accounts.attr.blockedIds.push(b.userId),this.removeAccount(b.userId);
                    break;
                case"not-following":
                    if (b.originalFollowState == "blocked" && this.datasources.accounts.attr.blockedIds.indexOf(b.userId) !== -1) {
                        var c = this.datasources.accounts.attr.blockedIds.indexOf(b.userId);
                        this.datasources.accounts.attr.blockedIds.splice(c, 1)
                    }
                    this.removeAccount(b.userId);
                    break;
                case"following":
                    this.addAccount(b.user)
            }
            this.updateLocalStorage()
        },this.onProfileVisit = function(a, b) {
            this.addAccount(b),this.updateLocalStorage()
        },this.updateLocalStorage = function() {
            this.datasources.accounts.storage.setItem("userHash", this.datasources.accounts.userHash, this.datasources.accounts.attr.ttl),this.datasources.accounts.storage.setItem("adjacencyList", this.datasources.accounts.adjacencyList, this.datasources.accounts.attr.ttl),this.datasources.accounts.storage.setItem("version", this.datasources.accounts.attr.version, this.datasources.accounts.attr.ttl)
        },this.removeAccount = function(a) {
            if (!this.datasources.accounts.userHash[a])return;
            var b = this.datasources.accounts.userHash[a].tokens;
            b.forEach(function(b) {
                var c = this.datasources.accounts.adjacencyList[b.charAt(0)],d = c.indexOf(a);
                c.splice(d, 1)
            }, this),delete this.datasources.accounts.userHash[a]
        },this.addAccount = function(a) {
            a.tokens = ["@" + a.screen_name,a.screen_name].concat(d.tokenizeText(a.name)),this.datasources.accounts.userHash[a.id] = a,a.tokens.forEach(function(b) {
                var c = b.charAt(0);
                if (!this.datasources.accounts.adjacencyList[c]) {
                    this.datasources.accounts.adjacencyList[c] = [a.id];
                    return
                }
                this.datasources.accounts.adjacencyList[c].indexOf(a.id) === -1 && this.datasources.accounts.adjacencyList[c].push(a.id)
            }, this)
        },this.setupEventListeners = function() {
            this.on("dataFollowStateChange", this.onFollowStateChange.bind(this)),this.on("profileVisit", this.onProfileVisit.bind(this))
        }
    }

    "use strict";
    var $ = b("core/jquery"),d = b("app/utils/typeahead_helpers");
    a.exports = e
}),define("app/data/typeahead/topics_datasource", ["module","require","exports","core/jquery","app/utils/typeahead_helpers","app/utils/storage/custom","app/data/with_data","core/compose","core/utils"], function(a, b, c) {
    function i(a) {
        this.attr = {ttl_ms:216e5,limit:4,version:3,prefetchCount:500,storageAdjacencyList:"topcisAdjacencyList",storageHash:"topicsHash",storageVersion:"topicsVersion"},this.attr = h.merge(this.attr, a),g.mixin(this, [f]),this.isIE7 = function() {
            return $.browser.msie && parseInt($.browser.version, 10) < 8
        },this.loadData = function() {
            if (this.isIE7())return;
            var a = this.storage.getItem(this.attr.storageVersion);
            if (a == this.attr.version) {
                this.topicsHash = this.storage.getItem(this.attr.storageHash),this.adjacencyList = this.storage.getItem(this.attr.storageAdjacencyList);
                return
            }
            this.get({url:"/i/search/typeahead.json",headers:{"X-Phx":!0},data:{prefetch:!0,result_type:"topics",count:this.attr.prefetchCount},eventData:{},success:this.processTopics.bind(this),error:$.noop})
        },this.processTopics = function(a) {
            if (!a.topics)return;
            a.topics.forEach(function(a) {
                var b = a.topic;
                this.topicsHash[b] = a,a.tokens.forEach(function(a) {
                    var c = a.token.charAt(0);
                    this.adjacencyList[c] === undefined && (this.adjacencyList[c] = []),this.adjacencyList[c].indexOf(b) === -1 && this.adjacencyList[c].push(b)
                }, this)
            }, this),this.storage.setItem(this.attr.storageHash, this.topicsHash, this.attr.ttl_ms),this.storage.setItem(this.attr.storageAdjacencyList, this.adjacencyList, this.attr.ttl_ms),this.storage.setItem(this.attr.storageVersion, this.attr.version, this.attr.ttl_ms)
        },this.getLocalSuggestions = function(a) {
            if (!this.attr.localQueriesEnabled || this.isIE7())return[];
            var b = this.adjacencyList[a.charAt(0)] || [];
            b = this.getTopicObjectsFromStrings(b);
            var c = b.filter(function(b) {
                return b.topic.indexOf(a) === 0
            }, this);
            return c.sort(function(a, b) {
                return b.rounded_score - a.rounded_score
            }.bind(this)),c = c.slice(0, this.attr.limit),c
        },this.getTopicObjectsFromStrings = function(a) {
            var b = [];
            return a.forEach(function(a) {
                var c = this.topicsHash[a];
                c && b.push(c)
            }, this),b
        },this.getRemoteSuggestions = function(a, b, c) {
            var d = c.topics || [],e = {};
            return d.forEach(function(a) {
                e[a.topic] = !0
            }, this),b.topics.forEach(function(a) {
                e[a.topic] || d.push(a)
            }, this),c.topics = d.slice(0, this.attr.limit),c
        },this.initialize = function() {
            var a = e({withExpiry:!0});
            this.storage = new a("typeahead"),this.topicsHash = {},this.adjacencyList = {},this.loadData()
        },this.initialize()
    }

    "use strict";
    var $ = b("core/jquery"),d = b("app/utils/typeahead_helpers"),e = b("app/utils/storage/custom"),f = b("app/data/with_data"),g = b("core/compose"),h = b("core/utils");
    a.exports = i
}),define("app/data/typeahead/typeahead", ["module","require","exports","core/jquery","core/component","core/fn","app/data/with_data","app/data/typeahead/with_cache","app/data/typeahead/accounts_datasource","app/data/typeahead/saved_searches_datasource","app/data/typeahead/with_external_event_listeners","app/data/typeahead/topics_datasource"], function(a, b, c) {
    function l() {
        this.defaultAttrs({limit:10,remoteDebounceInterval:300}),this.triggerSuggestionsEvent = function(a, b, c, d) {
            this.trigger("dataTypeaheadSuggestionsResults", {suggestions:c,query:b,id:a})
        },this.getLocalSuggestions = function(a, b) {
            var c = {};
            return b.forEach(function(b) {
                if (!this.datasources[b])return;
                var d = this.datasources[b].getLocalSuggestions(a);
                d.length && (c[b] = d)
            }, this),c
        },this.processRemoteSuggestions = function(a) {
            var b = a.sourceEventData,c = b.suggestions || {};
            b.datasources.forEach(function(d) {
                if (this.datasources[d]) {
                    var e = this.datasources[d].getRemoteSuggestions(b.query, a, c);
                    e[d] && e[d].length && (b.suggestions[d] = e[d])
                }
            }, this),this.triggerSuggestionsEvent(b.id, b.query, c, !1)
        },this.getRemoteSuggestions = function(a, b, c, d) {
            var f = d.some(function(a) {
                return this.datasources[a] && this.datasources[a].requiresRemoteSuggestions(b)
            }, this);
            if (!f || !b)return;
            this.request[a] || (this.request[a] = e.debounce(this.executeRemoteRequest.bind(this), this.attr.remoteDebounceInterval)),this.request[a](a, b, c, d)
        },this.executeRemoteRequest = function(a, b, c, d) {
            this.get({url:"/i/search/typeahead.json",headers:{"X-Phx":!0},data:{q:b,count:this.attr.limit},eventData:{id:a,query:b,suggestions:c,datasources:d},success:this.processRemoteSuggestions.bind(this),error:$.noop})
        },this.getSuggestions = function(a, b) {
            if (typeof b == "undefined")throw"No parameters specified";
            if (!b.datasources)throw"No datasources specified";
            if (typeof b.query == "undefined")throw"No query specified";
            if (!b.id)throw"No id specified";
            var c = this.getLocalSuggestions(b.query, b.datasources);
            this.triggerSuggestionsEvent(b.id, b.query, c, !0),this.getRemoteSuggestions(b.id, b.query, c, b.datasources)
        },this.addDatasource = function(a, b, c) {
            var d = c[b] || {};
            if (!d.enabled)return;
            this.datasources[b] = new a(d),b == "accounts" && this.setupEventListeners()
        },this.after("initialize", function(a) {
            this.datasources = {},this.request = {},this.addDatasource(h, "accounts", a),this.addDatasource(i, "savedSearches", a),this.addDatasource(k, "topics", a),this.on("uiNeedsTypeaheadSuggestions", this.getSuggestions)
        })
    }

    "use strict";
    var $ = b("core/jquery"),d = b("core/component"),e = b("core/fn"),f = b("app/data/with_data"),g = b("app/data/typeahead/with_cache"),h = b("app/data/typeahead/accounts_datasource"),i = b("app/data/typeahead/saved_searches_datasource"),j = b("app/data/typeahead/with_external_event_listeners"),k = b("app/data/typeahead/topics_datasource");
    a.exports = d(l, f, g, j)
}),define("app/ui/typeahead/with_accounts", ["module","require","exports","core/jquery","core/i18n"], function(a, b, c) {
    function d() {
        this.defaultAttrs({accountsListSelector:".js-typeahead-accounts",accountsItemSelector:".typeahead-account-item",accountsShortcutSelector:".typeahead-accounts-shortcut"}),this.renderAccounts = function(a, b) {
            this.$accountsList.find(this.attr.accountsItemSelector).remove();
            var c = b.suggestions.accounts || [];
            if (!c.length) {
                this.$accountsList.removeClass("has-results"),this.$accountsList.hide();
                return
            }
            this.updateShortcut(b.query),c.forEach(function(a) {
                var b = this.$accountItemTemplate.clone(!1);
                b.attr("data-user-id", a.id),b.attr("data-user-screenname", a.screen_name);
                var c = b.find("a");
                c.attr("href", "/" + a.screen_name),c.attr("data-search-query", a.id),c.find(".avatar").attr("src", this.getAvatar(a)),c.find(".fullname").text(a.name),c.find(".username b").text(a.screen_name),a.verified && c.find(".verified").removeClass("hidden");
                if (this.attr.deciders.showDebugInfo) {
                    var d = !!a.weight;
                    c.attr("title", (d ? "local" : "remote") + " user, weight/score: " + (d ? a.weight : a.rounded_score))
                }
                b.insertBefore(this.$accountsShortcut)
            }, this),this.$accountsList.addClass("has-results"),this.$accountsList.show()
        },this.getAvatar = function(a) {
            var b = window.location.protocol === "https:" ? a.profile_image_url_https : a.profile_image_url;
            return b.replace(/_normal(\..*)?$/i, "_mini$1")
        },this.updateShortcut = function(a) {
            var b = this.$accountsShortcut.find("a");
            b.attr("href", "/search/users/" + a),b.attr("data-search-query", a),b.html(_("Search all people for <strong>{{query}}</strong>", {query:a}))
        },this.after("initialize", function() {
            this.$accountsList = this.select("accountsListSelector"),this.$accountsShortcut = this.select("accountsShortcutSelector"),this.$accountItemTemplate = this.select("accountsItemSelector").clone(!1),this.$accountsList.hide(),this.on("uiTypeaheadRenderResults", this.renderAccounts)
        })
    }

    "use strict";
    var $ = b("core/jquery"),_ = b("core/i18n");
    a.exports = d
}),define("app/ui/typeahead/with_saved_searches", ["module","require","exports","core/jquery"], function(a, b, c) {
    function d() {
        this.defaultAttrs({savedSearchesListSelector:".saved-searches-list",savedSearchesItemSelector:".saved-search-item"}),this.renderSavedSearches = function(a, b) {
            this.$savedSearchesList.empty();
            var c = b.suggestions.savedSearches || [];
            c.forEach(function(a) {
                var b = this.$savedSearchItemTemplate.clone(!1),c = b.find("a");
                c.attr("href", a.saved_search_path),c.attr("data-search-query", a.query),c.attr("data-query-source", a.search_query_source),c.append($("<span>").text(a.name)),b.appendTo(this.$savedSearchesList)
            }, this)
        },this.after("initialize", function() {
            this.$savedSearchItemTemplate = this.select("savedSearchesItemSelector").clone(!1),this.$savedSearchesList = this.select("savedSearchesListSelector"),this.on("uiTypeaheadRenderResults", this.renderSavedSearches)
        })
    }

    "use strict";
    var $ = b("core/jquery");
    a.exports = d
}),define("app/ui/typeahead/with_topics", ["module","require","exports","core/jquery","core/i18n"], function(a, b, c) {
    function d() {
        this.defaultAttrs({topicsListSelector:".topics-list",topicsItemSelector:".topics-item"}),this.renderTopics = function(a, b) {
            this.$topicsList.empty();
            var c = b.suggestions.topics || [];
            if (!c.length) {
                this.$topicsList.removeClass("has-results"),this.$topicsList.hide();
                return
            }
            c.forEach(function(a) {
                var b = this.$topicsItemTemplate.clone(!1),c = b.find("a");
                c.attr("href", "/search/" + encodeURIComponent(a.topic)),c.attr("data-search-query", a.topic),c.append($("<span>").text(a.topic)),b.appendTo(this.$topicsList)
            }, this),this.$topicsList.addClass("has-results"),this.$topicsList.show()
        },this.after("initialize", function() {
            this.$topicsItemTemplate = this.select("topicsItemSelector").clone(!1),this.$topicsList = this.select("topicsListSelector"),this.$topicsList.hide(),this.on("uiTypeaheadRenderResults", this.renderTopics)
        })
    }

    "use strict";
    var $ = b("core/jquery"),_ = b("core/i18n");
    a.exports = d
}),define("app/ui/typeahead/typeahead_dropdown", ["module","require","exports","core/component","core/jquery","app/ui/typeahead/with_accounts","app/ui/typeahead/with_saved_searches","app/ui/typeahead/with_topics"], function(a, b, c) {
    function h() {
        this.defaultAttrs({inputSelector:"#search-query",dropdownSelector:".dropdown-menu.typeahead",itemsSelector:".typeahead-items li",deciders:{showDebugInfo:!1},datasources:[]}),this.dropdownFocus = function() {
            this.$input.attr("data-focus", !0),this.inputValueUpdated()
        },this.dropdownBlur = function() {
            this.$input.attr("data-focus", !1),this.hide()
        },this.mouseOver = function(a, b) {
            this.select("itemsSelector").removeClass("selected"),$(b.el).addClass("selected")
        },this.moveSelection = function(a) {
            var b = this.select("itemsSelector").filter(":visible"),c = b.filter(".selected");
            c.removeClass("selected");
            var d = b.index(c) + a;
            d = (d + 1) % (b.length + 1) - 1;
            if (d === -1) {
                this.trigger(this.$input, "uiTypeaheadInputFocus");
                return
            }
            d < -1 && (d = b.length - 1),b.eq(d).addClass("selected")
        },this.moveSelectionUp = function(a) {
            this.moveSelection(-1)
        },this.moveSelectionDown = function(a) {
            this.moveSelection(1)
        },this.hide = function(a) {
            this.mouseIsOverDropdown || this.$dropdown.hide()
        },this.inputValueUpdated = function() {
            this.trigger("uiNeedsTypeaheadSuggestions", {datasources:this.attr.datasources,query:this.$input.val(),id:this.getDropdownId()})
        },this.getDropdownId = function() {
            return this.dropdownId || (this.dropdownId = "swift_typeahead_dropdown_" + +(new Date)),this.dropdownId
        },this.triggerSelectionEvent = function(a, b) {
            var c = this.select("itemsSelector"),d = c.filter(".selected").first(),e = d.find("a"),f = c.index(d),g = this.$input.val(),h = e.attr("data-search-query");
            if (!g && !h)return;
            this.trigger("uiTypeaheadItemSelected", {index:f,source:e.data("ds"),query:h,input:g,href:e.attr("href"),isClick:a.originalEvent ? a.originalEvent.type === "click" : !1})
        },this.submitQuery = function(a, b) {
            var c = this.select("itemsSelector").filter(".selected").first();
            if (c.length) {
                this.triggerSelectionEvent(a, b);
                return
            }
            var d = this.$input.val();
            if (d.trim() === "")return;
            this.trigger("uiTypeaheadSubmitQuery", {query:d})
        },this.completeSelection = function(a) {
            if (this.$input.attr("dir") == "rtl" && a.type === "uiTypeaheadInputRight")return;
            if (["lrt",undefined,""].indexOf(this.$input.attr("dir")) !== -1 && a.type === "uiTypeaheadInputLeft")return;
            var b = this.select("itemsSelector").filter(".selected").first(),c = b.find("a");
            if (!b.length) {
                var c = this.select("itemsSelector").first().find("a"),d = c.data("search-query") !== this.$input.val() && ["saved_search","topics"].indexOf(c.data("ds")) !== -1;
                if (!d)return
            }
            this.trigger("uiTypeaheadItemComplete", {value:c.data("search-query"),source:c.data("ds")})
        },this.updateDropdown = function(a, b) {
            if (b.id !== this.getDropdownId() || b.query !== this.$input.val() || !this.$input.attr("data-focus"))return;
            this.trigger("uiTypeaheadRenderResults", b);
            var c = this.attr.datasources.some(function(a) {
                return b.suggestions[a] && b.suggestions[a].length
            });
            c ? this.$dropdown.show() : this.$dropdown.hide()
        },this.mouseEnter = function(a, b) {
            this.mouseIsOverDropdown = !0
        },this.mouseLeave = function(a, b) {
            this.mouseIsOverDropdown = !1
        },this.after("initialize", function() {
            this.$input = this.select("inputSelector"),this.$dropdown = this.select("dropdownSelector"),this.on(document, "dataTypeaheadSuggestionsResults", this.updateDropdown),this.on(this.$input, "uiTypeaheadInputFocus", this.dropdownFocus),this.on(this.$input, "uiTypeaheadInputBlur", this.dropdownBlur),this.on(this.$input, "uiTypeaheadInputSubmit", this.submitQuery),this.on(this.$input, "uiTypeaheadInputEscaped", this.hide),this.on(this.$input, "uiTypeaheadInputChanged", this.inputValueUpdated),this.on(this.$input, "uiTypeaheadInputMoveUp", this.moveSelectionUp),this.on(this.$input, "uiTypeaheadInputMoveDown", this.moveSelectionDown),this.on(this.$input, "uiTypeaheadInputTab uiTypeaheadInputRight uiTypeaheadInputLeft", this.completeSelection),this.on(this.$dropdown, "mouseenter", this.mouseEnter),this.on(this.$dropdown, "mouseleave", this.mouseLeave),this.on("mouseover", {itemsSelector:this.mouseOver}),this.on("click", {itemsSelector:this.triggerSelectionEvent})
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/ui/typeahead/with_accounts"),f = b("app/ui/typeahead/with_saved_searches"),g = b("app/ui/typeahead/with_topics");
    a.exports = d(h, f, e, g)
}),define("app/ui/typeahead/typeahead_input", ["module","require","exports","core/component"], function(a, b, c) {
    function e() {
        var a = {13:{name:"ENTER",event:"uiTypeaheadInputSubmit",on:"keypress"},27:{name:"ESC",event:"uiTypeaheadInputEscaped",on:"keydown"},9:{name:"TAB",event:"uiTypeaheadInputTab",on:"keydown",preventDefault:!0},37:{name:"LEFT",event:"uiTypeaheadInputLeft",on:"keydown"},39:{name:"RIGHT",event:"uiTypeaheadInputRight",on:"keydown"},38:{name:"UP",event:"uiTypeaheadInputMoveUp",on:"keydown",preventDefault:!0},40:{name:"DOWN",event:"uiTypeaheadInputMoveDown",on:"keydown",preventDefault:!0}};
        this.defaultAttrs({inputSelector:"#search-query"}),this.focus = function(a) {
            this.trigger(this.$input, "uiTypeaheadInputFocus")
        },this.blur = function(a) {
            this.trigger(this.$input, "uiTypeaheadInputBlur")
        },this.modifierKeyPressed = function(b) {
            var c = a[b.which || b.keyCode];
            if (c) {
                if (b.type !== c.on)return;
                c.preventDefault && b.preventDefault(),this.trigger(this.$input, c.event)
            } else {
                var d = this.$input.val();
                d = d.trim() == "" ? "" : d,this.setQuery(d)
            }
        },this.completeInput = function(a, b) {
            if (b.source === "account")return;
            this.$input.val(b.value),this.setQuery(b.value),this.focus()
        },this.setQuery = function(a) {
            if (!this.currentQuery || this.currentQuery !== a)this.currentQuery = a,this.trigger(this.$input, "uiTypeaheadInputChanged", {value:this.currentQuery})
        },this.after("initialize", function() {
            this.$input = this.select("inputSelector"),this.on(this.$input, "keyup keydown keypress paste", this.modifierKeyPressed),this.on(this.$input, "focus", this.focus),this.on(this.$input, "blur", this.blur),this.on("uiTypeaheadItemComplete", this.completeInput)
        })
    }

    "use strict";
    var d = b("core/component");
    a.exports = d(e)
}),define("app/data/typeahead_scribe", ["module","require","exports","core/component","core/jquery","app/data/with_scribe","app/utils/scribe_item_types"], function(a, b, c) {
    function g() {
        var a = {account:function(a) {
            var b = {query:a.input,item_ids:[a.query],item_details:{}};
            b.item_details[a.query] = {item_type:f.user,target_id:a.query,item_position:a.index,target_type:f.user},this.scribe("profile_click", a, b)
        },search:function(a) {
            this.scribe("search", a, {query:a.query})
        },topics:function(a) {
            var b = {query:a.input,item_names:[a.query],item_details:{}};
            b.item_details[a.query] = {item_type:f.search,item_position:a.index},this.scribe("search", a, b)
        },account_search:function(a) {
            this.scribe("people_search", a, {query:a.input})
        },saved_search:function(a) {
            var b = {query:a.input,item_names:[a.query],item_details:{}};
            b.item_details[a.query] = {item_type:f.savedSearch,item_position:a.index},this.scribe("search", a, b)
        }};
        this.scribeSelection = function(b, c) {
            a[c.source] && a[c.source].call(this, c)
        },this.after("initialize", function() {
            this.on("uiTypeaheadItemSelected uiSearchQuery", this.scribeSelection)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/data/with_scribe"),f = b("app/utils/scribe_item_types");
    a.exports = d(g, e)
}),define("app/boot/top_bar", ["module","require","exports","app/boot/tweet_boxes","app/ui/user_dropdown","app/ui/signin_dropdown","app/ui/language_dropdown","app/ui/search_input","app/ui/global_nav","app/ui/navigation_links","app/data/typeahead/typeahead","app/ui/typeahead/typeahead_dropdown","app/ui/typeahead/typeahead_input","app/data/typeahead_scribe","core/jquery"], function(a, b, c) {
    function o(a) {
        i.attachTo("#global-actions"),h.attachTo("#global-nav-search", {eventData:{scribeContext:{component:"top_bar_searchbox",element:""}}}),n.attachTo(document),k.attachTo(document, a.typeaheadData),m.attachTo("#global-nav-search"),l.attachTo("#global-nav-search", {datasources:["accounts","savedSearches","topics"],deciders:a.typeaheadData,eventData:{scribeContext:{component:"top_bar_searchbox",element:"typeahead"}}}),a.loggedIn ? (d(a),e.attachTo("#user-dropdown", {signout:"#signout-button",signoutForm:"#signout-form",toggler:"#user-dropdown-toggle",directMessages:".js-dm-dialog",keyboardShortcuts:".js-keyboard-shortcut-trigger",dmCount:".js-direct-message-count",glowClass:"new"})) : (f.attachTo(".js-session"),g.attachTo(".js-language-dropdown")),j.attachTo(".global-nav", {eventData:{scribeContext:{component:"top_bar"}}})
    }

    "use strict";
    var d = b("app/boot/tweet_boxes"),e = b("app/ui/user_dropdown"),f = b("app/ui/signin_dropdown"),g = b("app/ui/language_dropdown"),h = b("app/ui/search_input"),i = b("app/ui/global_nav"),j = b("app/ui/navigation_links"),k = b("app/data/typeahead/typeahead"),l = b("app/ui/typeahead/typeahead_dropdown"),m = b("app/ui/typeahead/typeahead_input"),n = b("app/data/typeahead_scribe"),$ = b("core/jquery");
    a.exports = o
}),define("app/ui/google", ["module","require","exports","core/component"], function(a, b, c) {
    function f() {
        this.defaultAttrs({gaPageName:window.location.pathname}),this.initGoogle = function() {
            window._gaq = window._gaq || [],window._gaq.push(["_setAccount","UA-30775-6"], ["_trackPageview",this.attr.gaPageName], ["_setDomainName","twitter.com"]);
            var a = document.getElementsByTagName("script")[0],b = document.createElement("script");
            b.async = !0,b.src = (document.location.protocol == "https:" ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js",a.parentNode.insertBefore(b, a)
        },this.trackPageChange = function(a, b) {
            window._gaq.push(["_trackPageview",b && b.gaPageName || window.location.pathname])
        },this.after("initialize", function() {
            this.on("uiSwiftLoaded", this.initGoogle),this.on("uiPageChanged", this.trackPageChange)
        })
    }

    "use strict";
    var d = b("core/component"),e = d(f);
    a.exports = e
}),define("app/ui/tooltips", ["module","require","exports","core/component"], function(a, b, c) {
    function e() {
        this.defaultAttrs({tooltipSelector:".js-tooltip"}),this.after("initialize", function() {
            this.$node.tooltip({selector:this.attr.tooltipSelector})
        })
    }

    "use strict";
    var d = b("core/component");
    a.exports = d(e)
}),define("app/ui/facebook_token_iframe", ["module","require","exports","core/component","core/jquery"], function(a, b, c) {
    function e() {
        this.defaultAttrs({delay:3e3}),this.after("initialize", function() {
            setTimeout(function() {
                if (this.$node.find("#facebook-token").length == 0) {
                    var a = $('<iframe id="facebook-token" style="display: none"/>');
                    a.attr("src", "/settings/facebook/token?profile_id=" + this.attr.facebookProfileId),this.$node.append(a),this.$node.trigger("uiFacebookTokenIFrameInserted")
                }
            }.bind(this), this.attr.delay)
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery");
    a.exports = d(e)
}),define("app/ui/impression_cookies", ["module","require","exports","core/component","core/jquery","app/utils/cookie"], function(a, b, c) {
    function f() {
        this.defaultAttrs({sendImpressionCookieSelector:"a[data-send-impression-cookie]"}),this.setCookie = function(a, b) {
            e("ic", a, {expires:b})
        },this.sendImpressionCookie = function(a, b) {
            var c = b.el;
            if (!c || c.hostname != window.location.hostname || !c.pathname || c.pathname.indexOf("/#!/") == 0)return;
            var d = $(c),e = d.closest("[data-impression-cookie]").attr("data-impression-cookie");
            if (!e)return;
            var f = new Date,g = 6e4,h = new Date(f.getTime() + g);
            this.setCookie(e, h)
        },this.after("initialize", function(a) {
            this.on("click", {sendImpressionCookieSelector:this.sendImpressionCookie})
        })
    }

    "use strict";
    var d = b("core/component"),$ = b("core/jquery"),e = b("app/utils/cookie");
    a.exports = d(f)
}),define("app/ui/banners/email_banner", ["module","require","exports","core/component"], function(a, b, c) {
    function e() {
        this.defaultAttrs({resendConfirmationEmailLinkSelector:".resend-confirmation-email-link",resetBounceLinkSelector:".reset-bounce-link"}),this.resendConfirmationEmail = function() {
            this.trigger("uiResendConfirmationEmail")
        },this.resetBounceLink = function() {
            this.trigger("uiResetBounceLink")
        },this.after("initialize", function() {
            this.on("click", {resendConfirmationEmailLinkSelector:this.resendConfirmationEmail,resetBounceLinkSelector:this.resetBounceLink})
        })
    }

    "use strict";
    var d = b("core/component");
    a.exports = d(e)
}),define("app/ui/search_query_source", ["module","require","exports","core/jquery","core/component","app/utils/storage/custom"], function(a, b, c) {
    function f() {
        this.defaultAttrs({querySourceLinkSelector:"a[data-query-source]",querySourceDataAttr:"data-query-source",storageExpiration:6e4}),this.saveQuerySource = function(a) {
            this.storage.setItem("source", {source:{value:a,expire:Date.now() + this.attr.storageExpiration}}, this.attr.storageExpiration)
        },this.catchLinkClick = function(a, b) {
            var c = $(b.el).attr(this.attr.querySourceDataAttr);
            c && this.saveQuerySource(c)
        },this.saveTypedQuery = function(a, b) {
            if (b.source !== "search")return;
            this.saveQuerySource("typed_query")
        },this.after("initialize", function() {
            var a = e({withExpiry:!0});
            this.storage = new a("searchQuerySource"),this.on("click", {querySourceLinkSelector:this.catchLinkClick}),this.on("uiSearchQuery", this.saveTypedQuery)
        })
    }

    "use strict";
    var $ = b("core/jquery"),d = b("core/component"),e = b("app/utils/storage/custom");
    a.exports = d(f)
}),define("app/data/email_banner", ["module","require","exports","core/component","app/data/with_data","core/i18n"], function(a, b, c) {
    function f() {
        this.resendConfirmationEmail = function() {
            var a = function(a) {
                this.trigger("uiShowMessage", {message:a.messageForFlash})
            },b = function() {
                this.trigger("uiShowMessage", {message:_("Oops!  There was an error sending the confirmation email.")})
            };
            this.post({url:"/account/resend_confirmation_email",eventData:null,data:null,success:a.bind(this),error:b.bind(this)})
        },this.resetBounceScore = function() {
            var a = function() {
                this.trigger("uiShowMessage", {message:_("Your email notifications should resume shortly.")})
            },b = function() {
                this.trigger("uiShowMessage", {message:_("Oops! There was an error sending email notifications.")})
            };
            this.post({url:"/bouncers/reset",eventData:null,data:null,success:a.bind(this),error:b.bind(this)})
        },this.after("initialize", function() {
            this.on("uiResendConfirmationEmail", this.resendConfirmationEmail),this.on("uiResetBounceLink", this.resetBounceScore)
        })
    }

    "use strict";
    var d = b("core/component"),e = b("app/data/with_data"),_ = b("core/i18n");
    a.exports = d(f, e)
}),define("app/boot", ["module","require","exports","core/jquery","app/utils/params","app/utils/auth_token","app/boot/scribing","app/data/promoted_logger","app/ui/keyboard_shortcuts","app/ui/navigation","app/data/navigation","app/ui/dialogs/keyboard_shortcuts_dialog","app/ui/dialogs/retweet_dialog","app/ui/dialogs/delete_tweet_dialog","app/ui/dialogs/confirm_dialog","app/ui/dialogs/list_membership_dialog","app/ui/dialogs/list_create_dialog","app/boot/direct_messages","app/boot/profile_popup","app/ui/message_drawer","app/ui/dialogs/goto_user_dialog","app/utils/setup_polling_with_backoff","app/ui/page_title","app/boot/top_bar","app/ui/google","app/ui/tooltips","app/ui/navigation_links","app/ui/facebook_token_iframe","app/ui/impression_cookies","app/ui/banners/email_banner","app/ui/search_query_source","app/data/email_banner"], function(a, b, c) {
    function H(a) {
        window.console || (window.console = {}),F.forEach(function(b) {
            if (a || !console[b])console[b] = G
        })
    }

    "use strict";
    var $ = b("core/jquery"),d = b("app/utils/params"),e = b("app/utils/auth_token"),f = b("app/boot/scribing"),g = b("app/data/promoted_logger"),h = b("app/ui/keyboard_shortcuts"),i = b("app/ui/navigation"),j = b("app/data/navigation"),k = b("app/ui/dialogs/keyboard_shortcuts_dialog"),l = b("app/ui/dialogs/retweet_dialog"),m = b("app/ui/dialogs/delete_tweet_dialog"),n = b("app/ui/dialogs/confirm_dialog"),o = b("app/ui/dialogs/list_membership_dialog"),p = b("app/ui/dialogs/list_create_dialog"),q = b("app/boot/direct_messages"),r = b("app/boot/profile_popup"),s = b("app/ui/message_drawer"),t = b("app/ui/dialogs/goto_user_dialog"),u = b("app/utils/setup_polling_with_backoff"),v = b("app/ui/page_title"),w = b("app/boot/top_bar"),x = b("app/ui/google"),y = b("app/ui/tooltips"),z = b("app/ui/navigation_links"),A = b("app/ui/facebook_token_iframe"),B = b("app/ui/impression_cookies"),C = b("app/ui/banners/email_banner"),D = b("app/ui/search_query_source"),E = b("app/data/email_banner"),F = ["log","warn","debug","info"],G = function() {
    };
    a.exports = function(b) {
        var c = b.environment,d = ["production","preflight"].indexOf(c) > -1;
        H(d);
        if (!d) {
            window._$ = $;
            if (c == "selenium" || c == "webdriver")window.jQuery = $
        }
        e.set(b.formAuthenticityToken),B.attachTo(document),x.attachTo(document),f(b),g.attachTo(document),D.attachTo("body");
        var F = b.pushState && window.history && history.pushState;
        i.attachTo(document, {pushState:F,routes:b.routes}),F && j.attachTo(document, b),v.attachTo(document),n.attachTo("#confirm_dialog"),b.loggedIn && (o.attachTo("#list-membership-dialog", b),p.attachTo("#list-create-dialog", b),q(b),C.attachTo(document),E.attachTo(document)),t.attachTo("#goto-user-dialog", b),r({deviceEnabled:b.deviceEnabled,deviceVerified:b.deviceVerified,formAuthenticityToken:b.formAuthenticityToken,loggedIn:b.loggedIn}),k.attachTo("#keyboard-shortcut-dialog", b),l.attachTo("#retweet-tweet-dialog", b),m.attachTo("#delete-tweet-dialog", b),h.attachTo(document),s.attachTo("#message-drawer"),u("uiWantsToRefreshTimestamps"),w(b),y.attachTo(document),z.attachTo(".dashboard", {eventData:{scribeContext:{component:"dashboard_nav"}}}),b.facebookProfileId && A.attachTo("body", {facebookProfileId:b.facebookProfileId})
    }
}),define("app/utils/ttft", ["module","require","exports","core/jquery","app/data/scribe_transport"], function(a, b, c) {
    function j(a, b) {
        if (!e && window.performance && a) {
            e = !0;
            var c = a;
            c.did_load = b,c.web_timings = $.extend({}, window.performance.timing),c.web_timings.toJSON && delete c.web_timings.toJSON,c.navigation = {type:window.performance.navigation.type,redirectCount:window.performance.navigation.redirectCount},c.referrer = document.referrer,d.send(c, "swift_time_to_first_tweet", !1),using("app/utils/params", function(a) {
                if (a.fromQuery(window.location).show_ttft) {
                    var b = c.web_timings;
                    $(document).trigger("uiShowError", {message:"<table width=80%><thead><th>milestone<th>time<th>cumulative</thead><tbody><tr><td>connect:       <td>" + (b.connectEnd - b.navigationStart) + "<td>" + (b.connectEnd - b.navigationStart) + "</tr>" + "<tr><td>process:       <td>" + (b.responseStart - b.connectEnd) + "<td>" + (b.responseStart - b.navigationStart) + "</tr>" + "<tr><td>response:      <td>" + (b.responseEnd - b.responseStart) + "<td>" + (b.responseEnd - b.navigationStart) + "</tr>" + "<tr><td>render:        <td>" + (c.client_record_time - b.responseEnd) + "<td>" + (c.client_record_time - b.navigationStart) + "</tr>" + "<tr><td>interactivity: <td>" + (c.aq_empty_time - c.client_record_time) + "<td>" + (c.aq_empty_time - b.navigationStart) + "</tr>" + "<tr><td>ajax_complete: <td>" + (c.ajax_complete_time - c.aq_empty_time) + "<td>" + (c.ajax_complete_time - b.navigationStart) + "</tr>" + "<tr><td>ajax_count:    <td>" + c.ajax_count + "</tr>" + "</tbody></table>"})
                }
            });
            try {
                delete window.ttft
            } catch(f) {
                window.ttft = undefined
            }
        }
    }

    function k(a) {
        if (!window.ttftData)return;
        var b = !0;
        for (var c = 0; c < f.length; ++c)if (!(f[c]in window.ttftData)) {
            b = !1;
            break
        }
        (a || b) && j(window.ttftData, b)
    }

    function l(a, b, c) {
        if (c && c.url in i)for (var d = 0; d < i[c.url].length; d++)if (c === i[c.url][d]) {
            i[c.url].splice(d, 1);
            return
        }
        h--;
        if (h == 0 || $.active == 0)p(),n()
    }

    function m(a, b, c) {
        c && c.url && (i[c.url] || (i[c.url] = []),i[c.url].push(c))
    }

    function n() {
        r("ajax_complete_time", (new Date).getTime())
    }

    function o() {
        $(document).bind("ajaxComplete", l),$(document).bind("ajaxSend", m)
    }

    function p() {
        $(document).unbind("ajaxComplete", l),$(document).unbind("ajaxSend", m)
    }

    function q() {
        g = h = $.active,r("ajax_count", g),g == 0 ? n() : (p(),o())
    }

    function r(a, b) {
        window.ttftData && !window.ttftData[a] && (window.ttftData[a] = b),k(!1)
    }

    "use strict";
    var $ = b("core/jquery"),d = b("app/data/scribe_transport"),e = !1,f = ["page","client_record_time","aq_empty_time","ajax_complete_time","ajax_count"],g = 0,h = 0,i = {};
    window.ttft = {recordMilestone:r},k(!1),setTimeout(function() {
        k(!0)
    }, 45e3),a.exports = {startAjaxTracking:q}
});