/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? e(require("jquery"))
    : e(jQuery);
})(function (t) {
  var e,
    n,
    d,
    s,
    r,
    p,
    h,
    f,
    g,
    m,
    y,
    i,
    o,
    v,
    a =
      (((u =
        t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) &&
        u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (f = {}),
        (g = {}),
        (m = {}),
        (y = {}),
        (i = Object.prototype.hasOwnProperty),
        (o = [].slice),
        (v = /\.js$/),
        (p = function (e, t) {
          var n,
            i,
            o = c(e),
            s = o[0];
          return (
            (e = o[1]),
            s && (n = b((s = l(s, t)))),
            s
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((i = t),
                        function (e) {
                          return l(e, i);
                        })
                      )
                    : l(e, t))
              : ((s = (o = c((e = l(e, t))))[0]), (e = o[1]), s && (n = b(s))),
            { f: s ? s + "!" + e : e, n: e, pr: s, p: n }
          );
        }),
        (h = {
          require: function (e) {
            return w(e);
          },
          exports: function (e) {
            var t = f[e];
            return void 0 !== t ? t : (f[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: "",
              exports: f[e],
              config:
                ((t = e),
                function () {
                  return (m && m.config && m.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (s = function (e, t, n, i) {
          var o,
            s,
            r,
            a,
            l,
            c = [],
            u = typeof n;
          if (((i = i || e), "undefined" == u || "function" == u)) {
            for (
              t = !t.length && n.length ? ["require", "exports", "module"] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ("require" === (s = (r = p(t[a], i)).f)) c[a] = h.require(e);
              else if ("exports" === s) (c[a] = h.exports(e)), (l = !0);
              else if ("module" === s) o = c[a] = h.module(e);
              else if (_(f, s) || _(g, s) || _(y, s)) c[a] = b(s);
              else {
                if (!r.p) throw new Error(e + " missing " + s);
                r.p.load(
                  r.n,
                  w(i, !0),
                  (function (t) {
                    return function (e) {
                      f[t] = e;
                    };
                  })(s),
                  {}
                ),
                  (c[a] = f[s]);
              }
            (u = n ? n.apply(f[e], c) : undefined),
              e &&
                (o && o.exports !== d && o.exports !== f[e]
                  ? (f[e] = o.exports)
                  : (u === d && l) || (f[e] = u));
          } else e && (f[e] = n);
        }),
        (e =
          n =
          r =
            function (e, t, n, i, o) {
              if ("string" == typeof e) return h[e] ? h[e](t) : b(p(e, t).f);
              if (!e.splice) {
                if (((m = e).deps && r(m.deps, m.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = d);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = i), (i = o)),
                i
                  ? s(d, e, t, n)
                  : setTimeout(function () {
                      s(d, e, t, n);
                    }, 4),
                r
              );
            }),
        (r.config = function (e) {
          return r(e);
        }),
        (e._defined = f),
        ((a = function (e, t, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name"
            );
          t.splice || ((n = t), (t = [])),
            _(f, e) || _(g, e) || (g[e] = [e, t, n]);
        }).amd = { jQuery: !0 }),
        (u.requirejs = e),
        (u.require = n),
        (u.define = a)),
      u.define("almond", function () {}),
      u.define("jquery", [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
            ),
          e
        );
      }),
      u.define("select2/utils", ["jquery"], function (s) {
        var e = {};
        function c(e) {
          var t,
            n = e.prototype,
            i = [];
          for (t in n)
            "function" == typeof n[t] && "constructor" !== t && i.push(t);
          return i;
        }
        (e.Extend = function (e, t) {
          var n,
            i = {}.hasOwnProperty;
          function o() {
            this.constructor = e;
          }
          for (n in t) i.call(t, n) && (e[n] = t[n]);
          return (
            (o.prototype = t.prototype),
            (e.prototype = new o()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (e.Decorate = function (i, o) {
            var e = c(o),
              t = c(i);
            function s() {
              var e = Array.prototype.unshift,
                t = o.prototype.constructor.length,
                n = i.prototype.constructor;
              0 < t &&
                (e.call(arguments, i.prototype.constructor),
                (n = o.prototype.constructor)),
                n.apply(this, arguments);
            }
            (o.displayName = i.displayName),
              (s.prototype = new (function () {
                this.constructor = s;
              })());
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              s.prototype[r] = i.prototype[r];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              s.prototype[l] = (function (e) {
                var t = function () {};
                e in s.prototype && (t = s.prototype[e]);
                var n = o.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return s;
          });
        var t = function () {
          this.listeners = {};
        };
        return (
          (t.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
          (t.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              0 === (n = null == n ? [] : n).length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments);
          }),
          (t.prototype.invoke = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
          }),
          (e.Observable = t),
          (e.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (e.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (e._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                i = e;
              if (1 !== n.length) {
                for (var o = 0; o < n.length; o++) {
                  var s = n[o];
                  (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i ||
                    (i[s] = {}),
                    o == n.length - 1 && (i[s] = e[t]),
                    (i = i[s]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (e.hasScroll = function (e, t) {
            var n = s(t),
              i = t.style.overflowX,
              o = t.style.overflowY;
            return (
              (i !== o || ("hidden" !== o && "visible" !== o)) &&
              ("scroll" === i ||
                "scroll" === o ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (e.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (e.appendMany = function (e, t) {
            var n;
            "1.7" === s.fn.jquery.substr(0, 3) &&
              ((n = s()),
              s.map(t, function (e) {
                n = n.add(e);
              }),
              (t = n)),
              e.append(t);
          }),
          e
        );
      }),
      u.define("select2/results", ["jquery", "./utils"], function (d, e) {
        function i(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            i.__super__.constructor.call(this);
        }
        return (
          e.Extend(i, e.Observable),
          (i.prototype.render = function () {
            var e = d('<ul class="select2-results__options" role="tree"></ul>');
            return (
              this.options.get("multiple") &&
                e.attr("aria-multiselectable", "true"),
              (this.$results = e)
            );
          }),
          (i.prototype.clear = function () {
            this.$results.empty();
          }),
          (i.prototype.displayMessage = function (e) {
            var t = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var n = d(
                '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
              ),
              i = this.options.get("translations").get(e.message);
            n.append(t(i(e.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n);
          }),
          (i.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (i.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var i = e.results[n],
                  i = this.option(i);
                t.push(i);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
          }),
          (i.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (i.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (i.prototype.highlightFirstItem = function () {
            var e = this.$results.find(
                ".select2-results__option[aria-selected]"
              ),
              t = e.filter("[aria-selected=true]");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible();
          }),
          (i.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var i = d.map(e, function (e) {
                return e.id.toString();
              });
              t.$results
                .find(".select2-results__option[aria-selected]")
                .each(function () {
                  var e = d(this),
                    t = d.data(this, "data"),
                    n = "" + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < d.inArray(n, i))
                    ? e.attr("aria-selected", "true")
                    : e.attr("aria-selected", "false");
                });
            });
          }),
          (i.prototype.showLoading = function (e) {
            this.hideLoading();
            (e = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e),
            }),
              (e = this.option(e));
            (e.className += " loading-results"), this.$results.prepend(e);
          }),
          (i.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (i.prototype.option = function (e) {
            var t = document.createElement("li");
            t.className = "select2-results__option";
            var n,
              i = { role: "treeitem", "aria-selected": "false" };
            for (n in (e.disabled &&
              (delete i["aria-selected"], (i["aria-disabled"] = "true")),
            null == e.id && delete i["aria-selected"],
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((i.role = "group"),
              (i["aria-label"] = e.text),
              delete i["aria-selected"]),
            i)) {
              var o = i[n];
              t.setAttribute(n, o);
            }
            if (e.children) {
              var s = d(t),
                r = document.createElement("strong");
              r.className = "select2-results__group";
              d(r);
              this.template(e, r);
              for (var a = [], l = 0; l < e.children.length; l++) {
                var c = e.children[l],
                  c = this.option(c);
                a.push(c);
              }
              var u = d("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
              });
              u.append(a), s.append(r), s.append(u);
            } else this.template(e, t);
            return d.data(t, "data", e), t;
          }),
          (i.prototype.bind = function (t, e) {
            var o = this,
              n = t.id + "-results";
            this.$results.attr("id", n),
              t.on("results:all", function (e) {
                o.clear(),
                  o.append(e.data),
                  t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("results:append", function (e) {
                o.append(e.data), t.isOpen() && o.setClasses();
              }),
              t.on("query", function (e) {
                o.hideMessages(), o.showLoading(e);
              }),
              t.on("select", function () {
                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("unselect", function () {
                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("open", function () {
                o.$results.attr("aria-expanded", "true"),
                  o.$results.attr("aria-hidden", "false"),
                  o.setClasses(),
                  o.ensureHighlightVisible();
              }),
              t.on("close", function () {
                o.$results.attr("aria-expanded", "false"),
                  o.$results.attr("aria-hidden", "true"),
                  o.$results.removeAttr("aria-activedescendant");
              }),
              t.on("results:toggle", function () {
                var e = o.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              t.on("results:select", function () {
                var e,
                  t = o.getHighlightedResults();
                0 !== t.length &&
                  ((e = t.data("data")),
                  "true" == t.attr("aria-selected")
                    ? o.trigger("close", {})
                    : o.trigger("select", { data: e }));
              }),
              t.on("results:previous", function () {
                var e,
                  t = o.getHighlightedResults(),
                  n = o.$results.find("[aria-selected]"),
                  i = n.index(t);
                0 !== i &&
                  ((e = i - 1),
                  0 === t.length && (e = 0),
                  (i = n.eq(e)).trigger("mouseenter"),
                  (t = o.$results.offset().top),
                  (n = i.offset().top),
                  (i = o.$results.scrollTop() + (n - t)),
                  0 === e
                    ? o.$results.scrollTop(0)
                    : n - t < 0 && o.$results.scrollTop(i));
              }),
              t.on("results:next", function () {
                var e,
                  t = o.getHighlightedResults(),
                  n = o.$results.find("[aria-selected]"),
                  i = n.index(t) + 1;
                i >= n.length ||
                  ((e = n.eq(i)).trigger("mouseenter"),
                  (t = o.$results.offset().top + o.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = o.$results.scrollTop() + n - t),
                  0 === i
                    ? o.$results.scrollTop(0)
                    : t < n && o.$results.scrollTop(e));
              }),
              t.on("results:focus", function (e) {
                e.element.addClass("select2-results__option--highlighted");
              }),
              t.on("results:message", function (e) {
                o.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = o.$results.scrollTop(),
                    n = o.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= o.$results.height();
                  t
                    ? (o.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (o.$results.scrollTop(
                        o.$results.get(0).scrollHeight - o.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option[aria-selected]",
                function (e) {
                  var t = d(this),
                    n = t.data("data");
                  "true" !== t.attr("aria-selected")
                    ? o.trigger("select", { originalEvent: e, data: n })
                    : o.options.get("multiple")
                    ? o.trigger("unselect", { originalEvent: e, data: n })
                    : o.trigger("close", {});
                }
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option[aria-selected]",
                function (e) {
                  var t = d(this).data("data");
                  o
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted"),
                    o.trigger("results:focus", { data: t, element: d(this) });
                }
              );
          }),
          (i.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (i.prototype.destroy = function () {
            this.$results.remove();
          }),
          (i.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              i,
              o = this.getHighlightedResults();
            0 !== o.length &&
              ((e = this.$results.find("[aria-selected]").index(o)),
              (i = this.$results.offset().top),
              (t = o.offset().top),
              (n = this.$results.scrollTop() + (t - i)),
              (i = t - i),
              (n -= 2 * o.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (i > this.$results.outerHeight() || i < 0) &&
                  this.$results.scrollTop(n));
          }),
          (i.prototype.template = function (e, t) {
            var n = this.options.get("templateResult"),
              i = this.options.get("escapeMarkup"),
              n = n(e, t);
            null == n
              ? (t.style.display = "none")
              : "string" == typeof n
              ? (t.innerHTML = i(n))
              : d(t).append(n);
          }),
          i
        );
      }),
      u.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (n, e, o) {
          function i(e, t) {
            (this.$element = e),
              (this.options = t),
              i.__super__.constructor.call(this);
          }
          return (
            e.Extend(i, e.Observable),
            (i.prototype.render = function () {
              var e = n(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != this.$element.data("old-tabindex")
                  ? (this._tabindex = this.$element.data("old-tabindex"))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                e.attr("title", this.$element.attr("title")),
                e.attr("tabindex", this._tabindex),
                (this.$selection = e)
              );
            }),
            (i.prototype.bind = function (e, t) {
              var n = this,
                i = (e.id, e.id + "-results");
              (this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  n.trigger("keypress", e),
                    e.which === o.SPACE && e.preventDefault();
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", i),
                    n._attachCloseHandler(e);
                }),
                e.on("close", function () {
                  n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.focus(),
                    n._detachCloseHandler(e);
                }),
                e.on("enable", function () {
                  n.$selection.attr("tabindex", n._tabindex);
                }),
                e.on("disable", function () {
                  n.$selection.attr("tabindex", "-1");
                });
            }),
            (i.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  n.contains(t.$selection[0], document.activeElement) ||
                  t.trigger("blur", e);
              }, 1);
            }),
            (i.prototype._attachCloseHandler = function (e) {
              n(document.body).on("mousedown.select2." + e.id, function (e) {
                var t = n(e.target).closest(".select2");
                n(".select2.select2-container--open").each(function () {
                  var e = n(this);
                  this != t[0] && e.data("element").select2("close");
                });
              });
            }),
            (i.prototype._detachCloseHandler = function (e) {
              n(document.body).off("mousedown.select2." + e.id);
            }),
            (i.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (i.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (i.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes."
              );
            }),
            i
          );
        }
      ),
      u.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, n, i) {
          function o() {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            n.Extend(o, t),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e.addClass("select2-selection--single"),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                e
              );
            }),
            (o.prototype.bind = function (t, e) {
              var n = this;
              o.__super__.bind.apply(this, arguments);
              var i = t.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", i),
                this.$selection.attr("aria-labelledby", i),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("blur", function (e) {}),
                t.on("focus", function (e) {
                  t.isOpen() || n.$selection.focus();
                }),
                t.on("selection:update", function (e) {
                  n.update(e.data);
                });
            }),
            (o.prototype.clear = function () {
              this.$selection.find(".select2-selection__rendered").empty();
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (o.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((t = e[0]),
                  (n = this.$selection.find(".select2-selection__rendered")),
                  (e = this.display(t, n)),
                  n.empty().append(e),
                  n.prop("title", t.title || t.text))
                : this.clear();
            }),
            o
          );
        }
      ),
      u.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (i, e, a) {
          function o(e, t) {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            a.Extend(o, e),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e.addClass("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (o.prototype.bind = function (e, t) {
              var n = this;
              o.__super__.bind.apply(this, arguments),
                this.$selection.on("click", function (e) {
                  n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (e) {
                    var t;
                    n.options.get("disabled") ||
                      ((t = i(this).parent().data("data")),
                      n.trigger("unselect", { originalEvent: e, data: t }));
                  }
                );
            }),
            (o.prototype.clear = function () {
              this.$selection.find(".select2-selection__rendered").empty();
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
              );
            }),
            (o.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n],
                    o = this.selectionContainer(),
                    s = this.display(i, o);
                  o.append(s),
                    o.prop("title", i.title || i.text),
                    o.data("data", i),
                    t.push(o);
                }
                var r = this.$selection.find(".select2-selection__rendered");
                a.appendMany(r, t);
              }
            }),
            o
          );
        }
      ),
      u.define("select2/selection/placeholder", ["../utils"], function (e) {
        function t(e, t, n) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n);
        }
        return (
          (t.prototype.normalizePlaceholder = function (e, t) {
            return (t = "string" == typeof t ? { id: "", text: t } : t);
          }),
          (t.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            return (
              n.html(this.display(t)),
              n
                .addClass("select2-selection__placeholder")
                .removeClass("select2-selection__choice"),
              n
            );
          }),
          (t.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            e = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(e);
          }),
          t
        );
      }),
      u.define(
        "select2/selection/allowClear",
        ["jquery", "../keys"],
        function (n, i) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error &&
                  console.error(
                    "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                  ),
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    i._handleClear(e);
                  }
                ),
                t.on("keypress", function (e) {
                  i._handleKeyboardClear(e, t);
                });
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.options.get("disabled")) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  for (var i = n.data("data"), o = 0; o < i.length; o++) {
                    var s = { data: i[o] };
                    if ((this.trigger("unselect", s), s.prevented)) return;
                  }
                  this.$element.val(this.placeholder.id).trigger("change"),
                    this.trigger("toggle", {});
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != i.DELETE && t.which != i.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              e.call(this, t),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === t.length ||
                  ((e = n(
                    '<span class="select2-selection__clear">&times;</span>'
                  )).data("data", t),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .prepend(e));
            }),
            e
          );
        }
      ),
      u.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (n, e, s) {
          function t(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (t.prototype.render = function (e) {
              var t = n(
                '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
              );
              (this.$searchContainer = t), (this.$search = t.find("input"));
              e = e.call(this);
              return this._transferTabIndex(), e;
            }),
            (t.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("open", function () {
                  i.$search.trigger("focus");
                }),
                t.on("close", function () {
                  i.$search.val(""),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.trigger("focus");
                }),
                t.on("enable", function () {
                  i.$search.prop("disabled", !1), i._transferTabIndex();
                }),
                t.on("disable", function () {
                  i.$search.prop("disabled", !0);
                }),
                t.on("focus", function (e) {
                  i.$search.trigger("focus");
                }),
                t.on("results:focus", function (e) {
                  i.$search.attr("aria-activedescendant", e.id);
                }),
                this.$selection.on(
                  "focusin",
                  ".select2-search--inline",
                  function (e) {
                    i.trigger("focus", e);
                  }
                ),
                this.$selection.on(
                  "focusout",
                  ".select2-search--inline",
                  function (e) {
                    i._handleBlur(e);
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    e.stopPropagation(),
                      i.trigger("keypress", e),
                      (i._keyUpPrevented = e.isDefaultPrevented()),
                      e.which !== s.BACKSPACE ||
                        "" !== i.$search.val() ||
                        (0 <
                          (t = i.$searchContainer.prev(
                            ".select2-selection__choice"
                          )).length &&
                          ((t = t.data("data")),
                          i.searchRemoveChoice(t),
                          e.preventDefault()));
                  }
                );
              var t = document.documentMode,
                o = t && t <= 11;
              this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  o
                    ? i.$selection.off("input.search input.searchcheck")
                    : i.$selection.off("keyup.search");
                }
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    o && "input" === e.type
                      ? i.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != s.SHIFT &&
                        t != s.CTRL &&
                        t != s.ALT &&
                        t != s.TAB &&
                        i.handleSearch(e);
                  }
                );
            }),
            (t.prototype._transferTabIndex = function (e) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }),
            (t.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (t.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection
                  .find(".select2-selection__rendered")
                  .append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.focus();
            }),
            (t.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1);
            }),
            (t.prototype.searchRemoveChoice = function (e, t) {
              this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (t.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "";
              (e =
                "" !== this.$search.attr("placeholder")
                  ? this.$selection
                      .find(".select2-selection__rendered")
                      .innerWidth()
                  : 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e);
            }),
            t
          );
        }
      ),
      u.define("select2/selection/eventRelay", ["jquery"], function (r) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this,
              o = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
              ],
              s = ["opening", "closing", "selecting", "unselecting"];
            e.call(this, t, n),
              t.on("*", function (e, t) {
                var n;
                -1 !== r.inArray(e, o) &&
                  ((n = r.Event("select2:" + e, { params: (t = t || {}) })),
                  i.$element.trigger(n),
                  -1 !== r.inArray(e, s) &&
                    (t.prevented = n.isDefaultPrevented()));
              });
          }),
          e
        );
      }),
      u.define("select2/translation", ["jquery", "require"], function (t, n) {
        function i(e) {
          this.dict = e || {};
        }
        return (
          (i.prototype.all = function () {
            return this.dict;
          }),
          (i.prototype.get = function (e) {
            return this.dict[e];
          }),
          (i.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (i._cache = {}),
          (i.loadPath = function (e) {
            var t;
            return (
              e in i._cache || ((t = n(e)), (i._cache[e] = t)),
              new i(i._cache[e])
            );
          }),
          i
        );
      }),
      u.define("select2/diacritics", [], function () {
        return {
          "â’¶": "A",
          "ï¼¡": "A",
          "Ã€": "A",
          "Ã": "A",
          "Ã‚": "A",
          "áº¦": "A",
          "áº¤": "A",
          áºª: "A",
          "áº¨": "A",
          Ãƒ: "A",
          "Ä€": "A",
          "Ä‚": "A",
          "áº°": "A",
          "áº®": "A",
          "áº´": "A",
          "áº²": "A",
          "È¦": "A",
          "Ç ": "A",
          "Ã„": "A",
          Çž: "A",
          "áº¢": "A",
          "Ã…": "A",
          Çº: "A",
          "Ç": "A",
          "È€": "A",
          "È‚": "A",
          "áº ": "A",
          "áº¬": "A",
          "áº¶": "A",
          "á¸€": "A",
          "Ä„": "A",
          Èº: "A",
          "â±¯": "A",
          "êœ²": "AA",
          "Ã†": "AE",
          "Ç¼": "AE",
          "Ç¢": "AE",
          "êœ´": "AO",
          "êœ¶": "AU",
          "êœ¸": "AV",
          êœº: "AV",
          "êœ¼": "AY",
          "â’·": "B",
          "ï¼¢": "B",
          "á¸‚": "B",
          "á¸„": "B",
          "á¸†": "B",
          Éƒ: "B",
          "Æ‚": "B",
          "Æ": "B",
          "â’¸": "C",
          "ï¼£": "C",
          "Ä†": "C",
          Äˆ: "C",
          ÄŠ: "C",
          ÄŒ: "C",
          "Ã‡": "C",
          "á¸ˆ": "C",
          "Æ‡": "C",
          "È»": "C",
          "êœ¾": "C",
          "â’¹": "D",
          "ï¼¤": "D",
          "á¸Š": "D",
          ÄŽ: "D",
          "á¸Œ": "D",
          "á¸": "D",
          "á¸’": "D",
          "á¸Ž": "D",
          "Ä": "D",
          "Æ‹": "D",
          ÆŠ: "D",
          "Æ‰": "D",
          "ê¹": "D",
          "Ç±": "DZ",
          "Ç„": "DZ",
          "Ç²": "Dz",
          "Ç…": "Dz",
          "â’º": "E",
          "ï¼¥": "E",
          Ãˆ: "E",
          "Ã‰": "E",
          ÃŠ: "E",
          "á»€": "E",
          "áº¾": "E",
          "á»„": "E",
          "á»‚": "E",
          "áº¼": "E",
          "Ä’": "E",
          "á¸”": "E",
          "á¸–": "E",
          "Ä”": "E",
          "Ä–": "E",
          "Ã‹": "E",
          áºº: "E",
          Äš: "E",
          "È„": "E",
          "È†": "E",
          "áº¸": "E",
          "á»†": "E",
          "È¨": "E",
          "á¸œ": "E",
          "Ä˜": "E",
          "á¸˜": "E",
          "á¸š": "E",
          "Æ": "E",
          ÆŽ: "E",
          "â’»": "F",
          "ï¼¦": "F",
          "á¸ž": "F",
          "Æ‘": "F",
          "ê»": "F",
          "â’¼": "G",
          "ï¼§": "G",
          "Ç´": "G",
          Äœ: "G",
          "á¸ ": "G",
          Äž: "G",
          "Ä ": "G",
          "Ç¦": "G",
          "Ä¢": "G",
          "Ç¤": "G",
          "Æ“": "G",
          "êž ": "G",
          "ê½": "G",
          "ê¾": "G",
          "â’½": "H",
          "ï¼¨": "H",
          "Ä¤": "H",
          "á¸¢": "H",
          "á¸¦": "H",
          Èž: "H",
          "á¸¤": "H",
          "á¸¨": "H",
          "á¸ª": "H",
          "Ä¦": "H",
          "â±§": "H",
          "â±µ": "H",
          "êž": "H",
          "â’¾": "I",
          "ï¼©": "I",
          ÃŒ: "I",
          "Ã": "I",
          ÃŽ: "I",
          "Ä¨": "I",
          Äª: "I",
          "Ä¬": "I",
          "Ä°": "I",
          "Ã": "I",
          "á¸®": "I",
          "á»ˆ": "I",
          "Ç": "I",
          Èˆ: "I",
          ÈŠ: "I",
          "á»Š": "I",
          "Ä®": "I",
          "á¸¬": "I",
          "Æ—": "I",
          "â’¿": "J",
          "ï¼ª": "J",
          "Ä´": "J",
          Éˆ: "J",
          "â“€": "K",
          "ï¼«": "K",
          "á¸°": "K",
          "Ç¨": "K",
          "á¸²": "K",
          "Ä¶": "K",
          "á¸´": "K",
          "Æ˜": "K",
          "â±©": "K",
          "ê€": "K",
          "ê‚": "K",
          "ê„": "K",
          "êž¢": "K",
          "â“": "L",
          "ï¼¬": "L",
          "Ä¿": "L",
          "Ä¹": "L",
          "Ä½": "L",
          "á¸¶": "L",
          "á¸¸": "L",
          "Ä»": "L",
          "á¸¼": "L",
          "á¸º": "L",
          "Å": "L",
          "È½": "L",
          "â±¢": "L",
          "â± ": "L",
          "êˆ": "L",
          "ê†": "L",
          "êž€": "L",
          "Ç‡": "LJ",
          Çˆ: "Lj",
          "â“‚": "M",
          "ï¼­": "M",
          "á¸¾": "M",
          "á¹€": "M",
          "á¹‚": "M",
          "â±®": "M",
          Æœ: "M",
          "â“ƒ": "N",
          "ï¼®": "N",
          "Ç¸": "N",
          Åƒ: "N",
          "Ã‘": "N",
          "á¹„": "N",
          "Å‡": "N",
          "á¹†": "N",
          "Å…": "N",
          "á¹Š": "N",
          "á¹ˆ": "N",
          "È ": "N",
          "Æ": "N",
          "êž": "N",
          "êž¤": "N",
          ÇŠ: "NJ",
          "Ç‹": "Nj",
          "â“„": "O",
          "ï¼¯": "O",
          "Ã’": "O",
          "Ã“": "O",
          "Ã”": "O",
          "á»’": "O",
          "á»": "O",
          "á»–": "O",
          "á»”": "O",
          "Ã•": "O",
          "á¹Œ": "O",
          "È¬": "O",
          "á¹Ž": "O",
          ÅŒ: "O",
          "á¹": "O",
          "á¹’": "O",
          ÅŽ: "O",
          "È®": "O",
          "È°": "O",
          "Ã–": "O",
          Èª: "O",
          "á»Ž": "O",
          "Å": "O",
          "Ç‘": "O",
          ÈŒ: "O",
          ÈŽ: "O",
          "Æ ": "O",
          "á»œ": "O",
          "á»š": "O",
          "á» ": "O",
          "á»ž": "O",
          "á»¢": "O",
          "á»Œ": "O",
          "á»˜": "O",
          Çª: "O",
          "Ç¬": "O",
          "Ã˜": "O",
          "Ç¾": "O",
          "Æ†": "O",
          ÆŸ: "O",
          "êŠ": "O",
          "êŒ": "O",
          "Æ¢": "OI",
          "êŽ": "OO",
          "È¢": "OU",
          "â“…": "P",
          "ï¼°": "P",
          "á¹”": "P",
          "á¹–": "P",
          "Æ¤": "P",
          "â±£": "P",
          "ê": "P",
          "ê’": "P",
          "ê”": "P",
          "â“†": "Q",
          "ï¼±": "Q",
          "ê–": "Q",
          "ê˜": "Q",
          ÉŠ: "Q",
          "â“‡": "R",
          "ï¼²": "R",
          "Å”": "R",
          "á¹˜": "R",
          "Å˜": "R",
          "È": "R",
          "È’": "R",
          "á¹š": "R",
          "á¹œ": "R",
          "Å–": "R",
          "á¹ž": "R",
          ÉŒ: "R",
          "â±¤": "R",
          "êš": "R",
          "êž¦": "R",
          "êž‚": "R",
          "â“ˆ": "S",
          "ï¼³": "S",
          áºž: "S",
          Åš: "S",
          "á¹¤": "S",
          Åœ: "S",
          "á¹ ": "S",
          "Å ": "S",
          "á¹¦": "S",
          "á¹¢": "S",
          "á¹¨": "S",
          "È˜": "S",
          Åž: "S",
          "â±¾": "S",
          "êž¨": "S",
          "êž„": "S",
          "â“‰": "T",
          "ï¼´": "T",
          "á¹ª": "T",
          "Å¤": "T",
          "á¹¬": "T",
          Èš: "T",
          "Å¢": "T",
          "á¹°": "T",
          "á¹®": "T",
          "Å¦": "T",
          "Æ¬": "T",
          "Æ®": "T",
          "È¾": "T",
          "êž†": "T",
          "êœ¨": "TZ",
          "â“Š": "U",
          "ï¼µ": "U",
          "Ã™": "U",
          Ãš: "U",
          "Ã›": "U",
          "Å¨": "U",
          "á¹¸": "U",
          Åª: "U",
          "á¹º": "U",
          "Å¬": "U",
          Ãœ: "U",
          "Ç›": "U",
          "Ç—": "U",
          "Ç•": "U",
          "Ç™": "U",
          "á»¦": "U",
          "Å®": "U",
          "Å°": "U",
          "Ç“": "U",
          "È”": "U",
          "È–": "U",
          "Æ¯": "U",
          "á»ª": "U",
          "á»¨": "U",
          "á»®": "U",
          "á»¬": "U",
          "á»°": "U",
          "á»¤": "U",
          "á¹²": "U",
          "Å²": "U",
          "á¹¶": "U",
          "á¹´": "U",
          "É„": "U",
          "â“‹": "V",
          "ï¼¶": "V",
          "á¹¼": "V",
          "á¹¾": "V",
          "Æ²": "V",
          "êž": "V",
          "É…": "V",
          "ê ": "VY",
          "â“Œ": "W",
          "ï¼·": "W",
          "áº€": "W",
          "áº‚": "W",
          "Å´": "W",
          "áº†": "W",
          "áº„": "W",
          áºˆ: "W",
          "â±²": "W",
          "â“": "X",
          "ï¼¸": "X",
          áºŠ: "X",
          áºŒ: "X",
          "â“Ž": "Y",
          "ï¼¹": "Y",
          "á»²": "Y",
          "Ã": "Y",
          "Å¶": "Y",
          "á»¸": "Y",
          "È²": "Y",
          áºŽ: "Y",
          "Å¸": "Y",
          "á»¶": "Y",
          "á»´": "Y",
          "Æ³": "Y",
          ÉŽ: "Y",
          "á»¾": "Y",
          "â“": "Z",
          "ï¼º": "Z",
          "Å¹": "Z",
          "áº": "Z",
          "Å»": "Z",
          "Å½": "Z",
          "áº’": "Z",
          "áº”": "Z",
          Æµ: "Z",
          "È¤": "Z",
          "â±¿": "Z",
          "â±«": "Z",
          "ê¢": "Z",
          "â“": "a",
          "ï½": "a",
          áºš: "a",
          "Ã ": "a",
          "Ã¡": "a",
          "Ã¢": "a",
          "áº§": "a",
          "áº¥": "a",
          "áº«": "a",
          "áº©": "a",
          "Ã£": "a",
          "Ä": "a",
          Äƒ: "a",
          "áº±": "a",
          "áº¯": "a",
          áºµ: "a",
          "áº³": "a",
          "È§": "a",
          "Ç¡": "a",
          "Ã¤": "a",
          ÇŸ: "a",
          "áº£": "a",
          "Ã¥": "a",
          "Ç»": "a",
          ÇŽ: "a",
          "È": "a",
          Èƒ: "a",
          "áº¡": "a",
          "áº­": "a",
          "áº·": "a",
          "á¸": "a",
          "Ä…": "a",
          "â±¥": "a",
          "É": "a",
          "êœ³": "aa",
          "Ã¦": "ae",
          "Ç½": "ae",
          "Ç£": "ae",
          êœµ: "ao",
          "êœ·": "au",
          "êœ¹": "av",
          "êœ»": "av",
          "êœ½": "ay",
          "â“‘": "b",
          "ï½‚": "b",
          "á¸ƒ": "b",
          "á¸…": "b",
          "á¸‡": "b",
          "Æ€": "b",
          Æƒ: "b",
          "É“": "b",
          "â“’": "c",
          "ï½ƒ": "c",
          "Ä‡": "c",
          "Ä‰": "c",
          "Ä‹": "c",
          "Ä": "c",
          "Ã§": "c",
          "á¸‰": "c",
          Æˆ: "c",
          "È¼": "c",
          "êœ¿": "c",
          "â†„": "c",
          "â““": "d",
          "ï½„": "d",
          "á¸‹": "d",
          "Ä": "d",
          "á¸": "d",
          "á¸‘": "d",
          "á¸“": "d",
          "á¸": "d",
          "Ä‘": "d",
          ÆŒ: "d",
          "É–": "d",
          "É—": "d",
          "êº": "d",
          "Ç³": "dz",
          "Ç†": "dz",
          "â“”": "e",
          "ï½…": "e",
          "Ã¨": "e",
          "Ã©": "e",
          Ãª: "e",
          "á»": "e",
          "áº¿": "e",
          "á»…": "e",
          "á»ƒ": "e",
          "áº½": "e",
          "Ä“": "e",
          "á¸•": "e",
          "á¸—": "e",
          "Ä•": "e",
          "Ä—": "e",
          "Ã«": "e",
          "áº»": "e",
          "Ä›": "e",
          "È…": "e",
          "È‡": "e",
          "áº¹": "e",
          "á»‡": "e",
          "È©": "e",
          "á¸": "e",
          "Ä™": "e",
          "á¸™": "e",
          "á¸›": "e",
          "É‡": "e",
          "É›": "e",
          "Ç": "e",
          "â“•": "f",
          "ï½†": "f",
          "á¸Ÿ": "f",
          "Æ’": "f",
          "ê¼": "f",
          "â“–": "g",
          "ï½‡": "g",
          Çµ: "g",
          "Ä": "g",
          "á¸¡": "g",
          ÄŸ: "g",
          "Ä¡": "g",
          "Ç§": "g",
          "Ä£": "g",
          "Ç¥": "g",
          "É ": "g",
          "êž¡": "g",
          "áµ¹": "g",
          "ê¿": "g",
          "â“—": "h",
          "ï½ˆ": "h",
          "Ä¥": "h",
          "á¸£": "h",
          "á¸§": "h",
          ÈŸ: "h",
          "á¸¥": "h",
          "á¸©": "h",
          "á¸«": "h",
          "áº–": "h",
          "Ä§": "h",
          "â±¨": "h",
          "â±¶": "h",
          "É¥": "h",
          "Æ•": "hv",
          "â“˜": "i",
          "ï½‰": "i",
          "Ã¬": "i",
          "Ã­": "i",
          "Ã®": "i",
          "Ä©": "i",
          "Ä«": "i",
          "Ä­": "i",
          "Ã¯": "i",
          "á¸¯": "i",
          "á»‰": "i",
          "Ç": "i",
          "È‰": "i",
          "È‹": "i",
          "á»‹": "i",
          "Ä¯": "i",
          "á¸­": "i",
          "É¨": "i",
          "Ä±": "i",
          "â“™": "j",
          "ï½Š": "j",
          Äµ: "j",
          "Ç°": "j",
          "É‰": "j",
          "â“š": "k",
          "ï½‹": "k",
          "á¸±": "k",
          "Ç©": "k",
          "á¸³": "k",
          "Ä·": "k",
          "á¸µ": "k",
          "Æ™": "k",
          "â±ª": "k",
          "ê": "k",
          "êƒ": "k",
          "ê…": "k",
          "êž£": "k",
          "â“›": "l",
          "ï½Œ": "l",
          "Å€": "l",
          Äº: "l",
          "Ä¾": "l",
          "á¸·": "l",
          "á¸¹": "l",
          "Ä¼": "l",
          "á¸½": "l",
          "á¸»": "l",
          "Å¿": "l",
          "Å‚": "l",
          Æš: "l",
          "É«": "l",
          "â±¡": "l",
          "ê‰": "l",
          "êž": "l",
          "ê‡": "l",
          "Ç‰": "lj",
          "â“œ": "m",
          "ï½": "m",
          "á¸¿": "m",
          "á¹": "m",
          "á¹ƒ": "m",
          "É±": "m",
          "É¯": "m",
          "â“": "n",
          "ï½Ž": "n",
          "Ç¹": "n",
          "Å„": "n",
          "Ã±": "n",
          "á¹…": "n",
          Åˆ: "n",
          "á¹‡": "n",
          "Å†": "n",
          "á¹‹": "n",
          "á¹‰": "n",
          Æž: "n",
          "É²": "n",
          "Å‰": "n",
          "êž‘": "n",
          "êž¥": "n",
          ÇŒ: "nj",
          "â“ž": "o",
          "ï½": "o",
          "Ã²": "o",
          "Ã³": "o",
          "Ã´": "o",
          "á»“": "o",
          "á»‘": "o",
          "á»—": "o",
          "á»•": "o",
          Ãµ: "o",
          "á¹": "o",
          "È­": "o",
          "á¹": "o",
          "Å": "o",
          "á¹‘": "o",
          "á¹“": "o",
          "Å": "o",
          "È¯": "o",
          "È±": "o",
          "Ã¶": "o",
          "È«": "o",
          "á»": "o",
          "Å‘": "o",
          "Ç’": "o",
          "È": "o",
          "È": "o",
          "Æ¡": "o",
          "á»": "o",
          "á»›": "o",
          "á»¡": "o",
          "á»Ÿ": "o",
          "á»£": "o",
          "á»": "o",
          "á»™": "o",
          "Ç«": "o",
          "Ç­": "o",
          "Ã¸": "o",
          "Ç¿": "o",
          "É”": "o",
          "ê‹": "o",
          "ê": "o",
          Éµ: "o",
          "Æ£": "oi",
          "È£": "ou",
          "ê": "oo",
          "â“Ÿ": "p",
          "ï½": "p",
          "á¹•": "p",
          "á¹—": "p",
          "Æ¥": "p",
          "áµ½": "p",
          "ê‘": "p",
          "ê“": "p",
          "ê•": "p",
          "â“ ": "q",
          "ï½‘": "q",
          "É‹": "q",
          "ê—": "q",
          "ê™": "q",
          "â“¡": "r",
          "ï½’": "r",
          "Å•": "r",
          "á¹™": "r",
          "Å™": "r",
          "È‘": "r",
          "È“": "r",
          "á¹›": "r",
          "á¹": "r",
          "Å—": "r",
          "á¹Ÿ": "r",
          "É": "r",
          "É½": "r",
          "ê›": "r",
          "êž§": "r",
          êžƒ: "r",
          "â“¢": "s",
          "ï½“": "s",
          ÃŸ: "s",
          "Å›": "s",
          "á¹¥": "s",
          "Å": "s",
          "á¹¡": "s",
          "Å¡": "s",
          "á¹§": "s",
          "á¹£": "s",
          "á¹©": "s",
          "È™": "s",
          ÅŸ: "s",
          "È¿": "s",
          "êž©": "s",
          "êž…": "s",
          "áº›": "s",
          "â“£": "t",
          "ï½”": "t",
          "á¹«": "t",
          "áº—": "t",
          "Å¥": "t",
          "á¹­": "t",
          "È›": "t",
          "Å£": "t",
          "á¹±": "t",
          "á¹¯": "t",
          "Å§": "t",
          "Æ­": "t",
          Êˆ: "t",
          "â±¦": "t",
          "êž‡": "t",
          "êœ©": "tz",
          "â“¤": "u",
          "ï½•": "u",
          "Ã¹": "u",
          Ãº: "u",
          "Ã»": "u",
          "Å©": "u",
          "á¹¹": "u",
          "Å«": "u",
          "á¹»": "u",
          "Å­": "u",
          "Ã¼": "u",
          Çœ: "u",
          "Ç˜": "u",
          "Ç–": "u",
          Çš: "u",
          "á»§": "u",
          "Å¯": "u",
          "Å±": "u",
          "Ç”": "u",
          "È•": "u",
          "È—": "u",
          "Æ°": "u",
          "á»«": "u",
          "á»©": "u",
          "á»¯": "u",
          "á»­": "u",
          "á»±": "u",
          "á»¥": "u",
          "á¹³": "u",
          "Å³": "u",
          "á¹·": "u",
          "á¹µ": "u",
          "Ê‰": "u",
          "â“¥": "v",
          "ï½–": "v",
          "á¹½": "v",
          "á¹¿": "v",
          "Ê‹": "v",
          "êŸ": "v",
          ÊŒ: "v",
          "ê¡": "vy",
          "â“¦": "w",
          "ï½—": "w",
          "áº": "w",
          áºƒ: "w",
          Åµ: "w",
          "áº‡": "w",
          "áº…": "w",
          "áº˜": "w",
          "áº‰": "w",
          "â±³": "w",
          "â“§": "x",
          "ï½˜": "x",
          "áº‹": "x",
          "áº": "x",
          "â“¨": "y",
          "ï½™": "y",
          "á»³": "y",
          "Ã½": "y",
          "Å·": "y",
          "á»¹": "y",
          "È³": "y",
          "áº": "y",
          "Ã¿": "y",
          "á»·": "y",
          "áº™": "y",
          "á»µ": "y",
          "Æ´": "y",
          "É": "y",
          "á»¿": "y",
          "â“©": "z",
          "ï½š": "z",
          Åº: "z",
          "áº‘": "z",
          "Å¼": "z",
          "Å¾": "z",
          "áº“": "z",
          "áº•": "z",
          "Æ¶": "z",
          "È¥": "z",
          "É€": "z",
          "â±¬": "z",
          "ê£": "z",
          "Î†": "Î‘",
          Îˆ: "Î•",
          "Î‰": "Î—",
          ÎŠ: "Î™",
          Îª: "Î™",
          ÎŒ: "ÎŸ",
          ÎŽ: "Î¥",
          "Î«": "Î¥",
          "Î": "Î©",
          "Î¬": "Î±",
          "Î­": "Îµ",
          "Î®": "Î·",
          "Î¯": "Î¹",
          ÏŠ: "Î¹",
          "Î": "Î¹",
          ÏŒ: "Î¿",
          "Ï": "Ï…",
          "Ï‹": "Ï…",
          "Î°": "Ï…",
          "Ï‰": "Ï‰",
          "Ï‚": "Ïƒ",
        };
      }),
      u.define("select2/data/base", ["../utils"], function (n) {
        function i(e, t) {
          i.__super__.constructor.call(this);
        }
        return (
          n.Extend(i, n.Observable),
          (i.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes."
            );
          }),
          (i.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes."
            );
          }),
          (i.prototype.bind = function (e, t) {}),
          (i.prototype.destroy = function () {}),
          (i.prototype.generateResultId = function (e, t) {
            e = e.id + "-result-";
            return (
              (e += n.generateChars(4)),
              null != t.id
                ? (e += "-" + t.id.toString())
                : (e += "-" + n.generateChars(4)),
              e
            );
          }),
          i
        );
      }),
      u.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, t, r) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = [],
                n = this;
              this.$element.find(":selected").each(function () {
                var e = r(this),
                  e = n.item(e);
                t.push(e);
              }),
                e(t);
            }),
            (n.prototype.select = function (o) {
              var e,
                s = this;
              if (((o.selected = !0), r(o.element).is("option")))
                return (
                  (o.element.selected = !0),
                  void this.$element.trigger("change")
                );
              this.$element.prop("multiple")
                ? this.current(function (e) {
                    var t = [];
                    (o = [o]).push.apply(o, e);
                    for (var n = 0; n < o.length; n++) {
                      var i = o[n].id;
                      -1 === r.inArray(i, t) && t.push(i);
                    }
                    s.$element.val(t), s.$element.trigger("change");
                  })
                : ((e = o.id),
                  this.$element.val(e),
                  this.$element.trigger("change"));
            }),
            (n.prototype.unselect = function (o) {
              var s = this;
              if (this.$element.prop("multiple")) {
                if (((o.selected = !1), r(o.element).is("option")))
                  return (
                    (o.element.selected = !1),
                    void this.$element.trigger("change")
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n].id;
                    i !== o.id && -1 === r.inArray(i, t) && t.push(i);
                  }
                  s.$element.val(t), s.$element.trigger("change");
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              (this.container = e).on("select", function (e) {
                n.select(e.data);
              }),
                e.on("unselect", function (e) {
                  n.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                r.removeData(this, "data");
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                i = this;
              this.$element.children().each(function () {
                var e = r(this);
                (e.is("option") || e.is("optgroup")) &&
                  ((e = i.item(e)),
                  null !== (e = i.matches(t, e)) && n.push(e));
              }),
                e({ results: n });
            }),
            (n.prototype.addOptions = function (e) {
              t.appendMany(this.$element, e);
            }),
            (n.prototype.option = function (e) {
              var t;
              e.children
                ? ((t = document.createElement("optgroup")).label = e.text)
                : (t = document.createElement("option")).textContent !==
                  undefined
                ? (t.textContent = e.text)
                : (t.innerText = e.text),
                e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
              var n = r(t),
                e = this._normalizeItem(e);
              return (e.element = t), r.data(t, "data", e), n;
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = r.data(e[0], "data"))) return t;
              if (e.is("option"))
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop("disabled"),
                  selected: e.prop("selected"),
                  title: e.prop("title"),
                };
              else if (e.is("optgroup")) {
                for (
                  var t = {
                      text: e.prop("label"),
                      children: [],
                      title: e.prop("title"),
                    },
                    n = e.children("option"),
                    i = [],
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  var s = r(n[o]),
                    s = this.item(s);
                  i.push(s);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                r.data(e[0], "data", t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              r.isPlainObject(e) || (e = { id: e, text: e });
              return (
                null != (e = r.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                r.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        }
      ),
      u.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, c, u) {
          function i(e, t) {
            var n = t.get("data") || [];
            i.__super__.constructor.call(this, e, t),
              this.addOptions(this.convertToOptions(n));
          }
          return (
            c.Extend(i, e),
            (i.prototype.select = function (n) {
              var e;
              0 ===
                (e = this.$element.find("option").filter(function (e, t) {
                  return t.value == n.id.toString();
                })).length && ((e = this.option(n)), this.addOptions(e)),
                i.__super__.select.call(this, n);
            }),
            (i.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find("option"),
                i = n
                  .map(function () {
                    return t.item(u(this)).id;
                  })
                  .get(),
                o = [];
              for (var s = 0; s < e.length; s++) {
                var r,
                  a,
                  l = this._normalizeItem(e[s]);
                0 <= u.inArray(l.id, i)
                  ? ((a = n.filter(
                      (function (e) {
                        return function () {
                          return u(this).val() == e.id;
                        };
                      })(l)
                    )),
                    (r = this.item(a)),
                    (r = u.extend(!0, {}, l, r)),
                    (r = this.option(r)),
                    a.replaceWith(r))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)),
                      c.appendMany(a, l)),
                    o.push(a));
              }
              return o;
            }),
            i
          );
        }
      ),
      u.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, s) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              return s.extend(
                {},
                {
                  data: function (e) {
                    return s.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, n) {
                    e = s.ajax(e);
                    return e.then(t), e.fail(n), e;
                  },
                },
                e,
                !0
              );
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var i = this;
              null != this._request &&
                (s.isFunction(this._request.abort) && this._request.abort(),
                (this._request = null));
              var o = s.extend({ type: "GET" }, this.ajaxOptions);
              function e() {
                var e = o.transport(
                  o,
                  function (e) {
                    e = i.processResults(e, t);
                    i.options.get("debug") &&
                      window.console &&
                      console.error &&
                      ((e && e.results && s.isArray(e.results)) ||
                        console.error(
                          "Select2: The AJAX results did not return an array in the `results` key of the response."
                        )),
                      n(e);
                  },
                  function () {
                    (e.status && "0" === e.status) ||
                      i.trigger("results:message", { message: "errorLoading" });
                  }
                );
                i._request = e;
              }
              "function" == typeof o.url &&
                (o.url = o.url.call(this.$element, t)),
                "function" == typeof o.data &&
                  (o.data = o.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay
                    )))
                  : e();
            }),
            n
          );
        }
      ),
      u.define("select2/data/tags", ["jquery"], function (a) {
        function e(e, t, n) {
          var i = n.get("tags"),
            o = n.get("createTag");
          o !== undefined && (this.createTag = o);
          o = n.get("insertTag");
          if (
            (o !== undefined && (this.insertTag = o),
            e.call(this, t, n),
            a.isArray(i))
          )
            for (var s = 0; s < i.length; s++) {
              var r = i[s],
                r = this._normalizeItem(r),
                r = this.option(r);
              this.$element.append(r);
            }
        }
        return (
          (e.prototype.query = function (e, l, c) {
            var u = this;
            this._removeOldTags(),
              null != l.term && null == l.page
                ? e.call(this, l, function d(e, t) {
                    for (var n = e.results, i = 0; i < n.length; i++) {
                      var o = n[i],
                        s =
                          null != o.children && !d({ results: o.children }, !0);
                      if (o.text === l.term || s)
                        return !t && ((e.data = n), void c(e));
                    }
                    if (t) return !0;
                    var r,
                      a = u.createTag(l);
                    null != a &&
                      ((r = u.option(a)).attr("data-select2-tag", !0),
                      u.addOptions([r]),
                      u.insertTag(n, a)),
                      (e.results = n),
                      c(e);
                  })
                : e.call(this, l, c);
          }),
          (e.prototype.createTag = function (e, t) {
            t = a.trim(t.term);
            return "" === t ? null : { id: t, text: t };
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this._lastTag;
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || a(this).remove();
            });
          }),
          e
        );
      }),
      u.define("select2/data/tokenizer", ["jquery"], function (c) {
        function e(e, t, n) {
          var i = n.get("tokenizer");
          i !== undefined && (this.tokenizer = i), e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find(".select2-search__field"));
          }),
          (e.prototype.query = function (e, t, n) {
            var i = this;
            t.term = t.term || "";
            var o = this.tokenizer(t, this.options, function (e) {
              var t = i._normalizeItem(e);
              i.$element.find("option").filter(function () {
                return c(this).val() === t.id;
              }).length ||
                ((e = i.option(t)).attr("data-select2-tag", !0),
                i._removeOldTags(),
                i.addOptions([e])),
                i.trigger("select", { data: t });
            });
            o.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(o.term), this.$search.focus()),
              (t.term = o.term)),
              e.call(this, t, n);
          }),
          (e.prototype.tokenizer = function (e, t, n, i) {
            for (
              var o = n.get("tokenSeparators") || [],
                s = t.term,
                r = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              r < s.length;

            ) {
              var l = s[r];
              -1 !== c.inArray(l, o)
                ? ((l = s.substr(0, r)),
                  null != (l = a(c.extend({}, t, { term: l })))
                    ? (i(l), (s = s.substr(r + 1) || ""), (r = 0))
                    : r++)
                : r++;
            }
            return { term: s };
          }),
          e
        );
      }),
      u.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          (this.minimumInputLength = n.get("minimumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          (this.maximumInputLength = n.get("maximumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          (this.maximumSelectionLength = n.get("maximumSelectionLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (t, n, i) {
            var o = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < o.maximumSelectionLength && e >= o.maximumSelectionLength
                ? o.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: o.maximumSelectionLength },
                  })
                : t.call(o, n, i);
            });
          }),
          e
        );
      }),
      u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          (this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this);
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define(
        "select2/dropdown/search",
        ["jquery", "../utils"],
        function (o, e) {
          function t() {}
          return (
            (t.prototype.render = function (e) {
              var t = e.call(this),
                e = o(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                );
              return (
                (this.$searchContainer = e),
                (this.$search = e.find("input")),
                t.prepend(e),
                t
              );
            }),
            (t.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                this.$search.on("keydown", function (e) {
                  i.trigger("keypress", e),
                    (i._keyUpPrevented = e.isDefaultPrevented());
                }),
                this.$search.on("input", function (e) {
                  o(this).off("keyup");
                }),
                this.$search.on("keyup input", function (e) {
                  i.handleSearch(e);
                }),
                t.on("open", function () {
                  i.$search.attr("tabindex", 0),
                    i.$search.focus(),
                    window.setTimeout(function () {
                      i.$search.focus();
                    }, 0);
                }),
                t.on("close", function () {
                  i.$search.attr("tabindex", -1), i.$search.val("");
                }),
                t.on("focus", function () {
                  t.isOpen() && i.$search.focus();
                }),
                t.on("results:all", function (e) {
                  (null != e.query.term && "" !== e.query.term) ||
                    (i.showSearch(e)
                      ? i.$searchContainer.removeClass("select2-search--hide")
                      : i.$searchContainer.addClass("select2-search--hide"));
                });
            }),
            (t.prototype.handleSearch = function (e) {
              var t;
              this._keyUpPrevented ||
                ((t = this.$search.val()), this.trigger("query", { term: t })),
                (this._keyUpPrevented = !1);
            }),
            (t.prototype.showSearch = function (e, t) {
              return !0;
            }),
            t
          );
        }
      ),
      u.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n, i);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return (t = "string" == typeof t ? { id: "", text: t } : t);
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
              var o = t[i];
              this.placeholder.id === o.id && n.splice(i, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define("select2/dropdown/infiniteScroll", ["jquery"], function (o) {
        function e(e, t, n, i) {
          (this.lastParams = {}),
            e.call(this, t, n, i),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (e.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                this.$results.append(this.$loadingMore);
          }),
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("query", function (e) {
                (i.lastParams = e), (i.loading = !0);
              }),
              t.on("query:append", function (e) {
                (i.lastParams = e), (i.loading = !0);
              }),
              this.$results.on("scroll", function () {
                var e = o.contains(document.documentElement, i.$loadingMore[0]);
                !i.loading &&
                  e &&
                  ((e = i.$results.offset().top + i.$results.outerHeight(!1)),
                  i.$loadingMore.offset().top +
                    i.$loadingMore.outerHeight(!1) <=
                    e + 50 && i.loadMore());
              });
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = o.extend({}, { page: 1 }, this.lastParams);
            e.page++, this.trigger("query:append", e);
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = o(
                '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
              ),
              t = this.options.get("translations").get("loadingMore");
            return e.html(t(this.lastParams)), e;
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (c, r) {
          function e(e, t, n) {
            (this.$dropdownParent =
              n.get("dropdownParent") || c(document.body)),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this,
                o = !1;
              e.call(this, t, n),
                t.on("open", function () {
                  i._showDropdown(),
                    i._attachPositioningHandler(t),
                    o ||
                      ((o = !0),
                      t.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown();
                      }),
                      t.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown();
                      }));
                }),
                t.on("close", function () {
                  i._hideDropdown(), i._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                });
            }),
            (e.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (e.prototype.position = function (e, t, n) {
              t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = n);
            }),
            (e.prototype.render = function (e) {
              var t = c("<span></span>"),
                e = e.call(this);
              return t.append(e), (this.$dropdownContainer = t);
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                i = "scroll.select2." + t.id,
                o = "resize.select2." + t.id,
                s = "orientationchange.select2." + t.id,
                t = this.$container.parents().filter(r.hasScroll);
              t.each(function () {
                c(this).data("select2-scroll-position", {
                  x: c(this).scrollLeft(),
                  y: c(this).scrollTop(),
                });
              }),
                t.on(i, function (e) {
                  var t = c(this).data("select2-scroll-position");
                  c(this).scrollTop(t.y);
                }),
                c(window).on(i + " " + o + " " + s, function (e) {
                  n._positionDropdown(), n._resizeDropdown();
                });
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = "scroll.select2." + t.id,
                i = "resize.select2." + t.id,
                t = "orientationchange.select2." + t.id;
              this.$container.parents().filter(r.hasScroll).off(n),
                c(window).off(n + " " + i + " " + t);
            }),
            (e.prototype._positionDropdown = function () {
              var e = c(window),
                t = this.$dropdown.hasClass("select2-dropdown--above"),
                n = this.$dropdown.hasClass("select2-dropdown--below"),
                i = null,
                o = this.$container.offset();
              o.bottom = o.top + this.$container.outerHeight(!1);
              var s = { height: this.$container.outerHeight(!1) };
              (s.top = o.top), (s.bottom = o.top + s.height);
              var r = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                e = a < o.top - r,
                a = l > o.bottom + r,
                l = { left: o.left, top: s.bottom },
                o = this.$dropdownParent,
                o = (o =
                  "static" === o.css("position")
                    ? o.offsetParent()
                    : o).offset();
              (l.top -= o.top),
                (l.left -= o.left),
                t || n || (i = "below"),
                a || !e || t ? !e && a && t && (i = "below") : (i = "above"),
                ("above" == i || (t && "below" !== i)) &&
                  (l.top = s.top - o.top - r),
                null != i &&
                  (this.$dropdown
                    .removeClass(
                      "select2-dropdown--below select2-dropdown--above"
                    )
                    .addClass("select2-dropdown--" + i),
                  this.$container
                    .removeClass(
                      "select2-container--below select2-container--above"
                    )
                    .addClass("select2-container--" + i)),
                this.$dropdownContainer.css(l);
            }),
            (e.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e);
            }),
            (e.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            e
          );
        }
      ),
      u.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = Infinity),
            e.call(this, t, n, i);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function o(e) {
                  for (var t = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.children ? (t += o(i.children)) : t++;
                  }
                  return t;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define("select2/dropdown/selectOnClose", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("close", function (e) {
                i._handleSelectOnClose(e);
              });
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ("select" === n._type || "unselect" === n._type) return;
            }
            var n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = n.data("data")).element && n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger("select", { data: n });
          }),
          e
        );
      }),
      u.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("select", function (e) {
                i._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                i._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && n.ctrlKey) ||
              this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = "Please delete " + t + " character";
            return 1 != t && (e += "s"), e;
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more resultsâ€¦";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searchingâ€¦";
          },
        };
      }),
      u.define(
        "select2/defaults",
        [
          "jquery",
          "require",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./i18n/en",
        ],
        function (
          p,
          h,
          f,
          g,
          m,
          y,
          v,
          _,
          w,
          $,
          b,
          t,
          x,
          A,
          C,
          S,
          O,
          E,
          D,
          T,
          q,
          j,
          L,
          k,
          P,
          I,
          M,
          R,
          e
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t, n;
              if (
                (null == (e = p.extend(!0, {}, this.defaults, e)).dataAdapter &&
                  (null != e.ajax
                    ? (e.dataAdapter = C)
                    : null != e.data
                    ? (e.dataAdapter = A)
                    : (e.dataAdapter = x),
                  0 < e.minimumInputLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, E)),
                  0 < e.maximumInputLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, D)),
                  0 < e.maximumSelectionLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, T)),
                  e.tags && (e.dataAdapter = $.Decorate(e.dataAdapter, S)),
                  (null == e.tokenSeparators && null == e.tokenizer) ||
                    (e.dataAdapter = $.Decorate(e.dataAdapter, O)),
                  null != e.query &&
                    ((t = h(e.amdBase + "compat/query")),
                    (e.dataAdapter = $.Decorate(e.dataAdapter, t))),
                  null != e.initSelection &&
                    ((t = h(e.amdBase + "compat/initSelection")),
                    (e.dataAdapter = $.Decorate(e.dataAdapter, t)))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = f),
                  null != e.ajax &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, k)),
                  null != e.placeholder &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, L)),
                  e.selectOnClose &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, M))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = q)
                    : ((n = $.Decorate(q, j)), (e.dropdownAdapter = n)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, I)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, R)),
                  (null == e.dropdownCssClass &&
                    null == e.dropdownCss &&
                    null == e.adaptDropdownCssClass) ||
                    ((n = h(e.amdBase + "compat/dropdownCss")),
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, n))),
                  (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, P))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = m)
                    : (e.selectionAdapter = g),
                  null != e.placeholder &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, y)),
                  e.allowClear &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, v)),
                  e.multiple &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, _)),
                  (null == e.containerCssClass &&
                    null == e.containerCss &&
                    null == e.adaptContainerCssClass) ||
                    ((l = h(e.amdBase + "compat/containerCss")),
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, l))),
                  (e.selectionAdapter = $.Decorate(e.selectionAdapter, w))),
                "string" == typeof e.language &&
                  (0 < e.language.indexOf("-")
                    ? ((c = e.language.split("-")[0]),
                      (e.language = [e.language, c]))
                    : (e.language = [e.language])),
                p.isArray(e.language))
              ) {
                var i = new b();
                e.language.push("en");
                for (var o = e.language, s = 0; s < o.length; s++) {
                  var r = o[s],
                    a = {};
                  try {
                    a = b.loadPath(r);
                  } catch (u) {
                    try {
                      (r = this.defaults.amdLanguageBase + r),
                        (a = b.loadPath(r));
                    } catch (d) {
                      e.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            r +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                      continue;
                    }
                  }
                  i.extend(a);
                }
                e.translations = i;
              } else {
                var l = b.loadPath(this.defaults.amdLanguageBase + "en"),
                  c = new b(e.language);
                c.extend(l), (e.translations = c);
              }
              return e;
            }),
            (n.prototype.reset = function () {
              function r(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdBase: "./",
                amdLanguageBase: "./i18n/",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: $.escapeMarkup,
                language: e,
                matcher: function a(e, t) {
                  if ("" === p.trim(e.term)) return t;
                  if (t.children && 0 < t.children.length) {
                    for (
                      var n = p.extend(!0, {}, t), i = t.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == a(e, t.children[i]) && n.children.splice(i, 1);
                    return 0 < n.children.length ? n : a(e, n);
                  }
                  var o = r(t.text).toUpperCase(),
                    s = r(e.term).toUpperCase();
                  return -1 < o.indexOf(s) ? t : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[p.camelCase(e)] = t;
              n = $._convertData(n);
              p.extend(this.defaults, n);
            }),
            new n()
          );
        }
      ),
      u.define(
        "select2/options",
        ["require", "jquery", "./defaults", "./utils"],
        function (n, s, i, r) {
          function e(e, t) {
            (this.options = e),
              null != t && this.fromElement(t),
              (this.options = i.apply(this.options)),
              t &&
                t.is("input") &&
                ((t = n(this.get("amdBase") + "compat/inputData")),
                (this.options.dataAdapter = r.Decorate(
                  this.options.dataAdapter,
                  t
                )));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ["select2"];
              null == this.options.multiple &&
                (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop("disabled")),
                null == this.options.language &&
                  (e.prop("lang")
                    ? (this.options.language = e.prop("lang").toLowerCase())
                    : e.closest("[lang]").prop("lang") &&
                      (this.options.language = e
                        .closest("[lang]")
                        .prop("lang"))),
                null == this.options.dir &&
                  (e.prop("dir")
                    ? (this.options.dir = e.prop("dir"))
                    : e.closest("[dir]").prop("dir")
                    ? (this.options.dir = e.closest("[dir]").prop("dir"))
                    : (this.options.dir = "ltr")),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                e.data("select2Tags") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  e.data("data", e.data("select2Tags")),
                  e.data("tags", !0)),
                e.data("ajaxUrl") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                    ),
                  e.attr("ajax--url", e.data("ajaxUrl")),
                  e.data("ajax--url", e.data("ajaxUrl")));
              var n,
                i = {},
                i =
                  s.fn.jquery &&
                  "1." == s.fn.jquery.substr(0, 2) &&
                  e[0].dataset
                    ? s.extend(!0, {}, e[0].dataset, e.data())
                    : e.data(),
                o = s.extend(!0, {}, i);
              for (n in (o = r._convertData(o)))
                -1 < s.inArray(n, t) ||
                  (s.isPlainObject(this.options[n])
                    ? s.extend(this.options[n], o[n])
                    : (this.options[n] = o[n]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        }
      ),
      u.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (o, s, n, i) {
          var r = function (e, t) {
            null != e.data("select2") && e.data("select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (this.options = new s((t = t || {}), e)),
              r.__super__.constructor.call(this);
            var n = e.attr("tabindex") || 0;
            e.data("old-tabindex", n), e.attr("tabindex", "-1");
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            (this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n);
            t = this.options.get("dropdownAdapter");
            (this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n);
            n = this.options.get("resultsAdapter");
            (this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var i = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                i.trigger("selection:update", { data: e });
              }),
              e.addClass("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              e.data("select2", this);
          };
          return (
            n.Extend(r, n.Observable),
            (r.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                  ? e.attr("name") + "-" + n.generateChars(2)
                  : n.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (r.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width")
              );
              null != t && e.css("width", t);
            }),
            (r.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t) {
                var i = this._resolveWidth(e, "style");
                return null != i ? i : this._resolveWidth(e, "element");
              }
              if ("element" == t) {
                i = e.outerWidth(!1);
                return i <= 0 ? "auto" : i + "px";
              }
              if ("style" != t) return t;
              e = e.attr("style");
              if ("string" != typeof e) return null;
              for (var o = e.split(";"), s = 0, r = o.length; s < r; s += 1) {
                var a = o[s].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (r.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (r.prototype._registerDomEvents = function () {
              var t = this;
              this.$element.on("change.select2", function () {
                t.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
              }),
                this.$element.on("focus.select2", function (e) {
                  t.trigger("focus", e);
                }),
                (this._syncA = n.bind(this._syncAttributes, this)),
                (this._syncS = n.bind(this._syncSubtree, this)),
                this.$element[0].attachEvent &&
                  this.$element[0].attachEvent("onpropertychange", this._syncA);
              var e =
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver;
              null != e
                ? ((this._observer = new e(function (e) {
                    o.each(e, t._syncA), o.each(e, t._syncS);
                  })),
                  this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1,
                  }))
                : this.$element[0].addEventListener &&
                  (this.$element[0].addEventListener(
                    "DOMAttrModified",
                    t._syncA,
                    !1
                  ),
                  this.$element[0].addEventListener(
                    "DOMNodeInserted",
                    t._syncS,
                    !1
                  ),
                  this.$element[0].addEventListener(
                    "DOMNodeRemoved",
                    t._syncS,
                    !1
                  ));
            }),
            (r.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerSelectionEvents = function () {
              var n = this,
                i = ["toggle", "focus"];
              this.selection.on("toggle", function () {
                n.toggleDropdown();
              }),
                this.selection.on("focus", function (e) {
                  n.focus(e);
                }),
                this.selection.on("*", function (e, t) {
                  -1 === o.inArray(e, i) && n.trigger(e, t);
                });
            }),
            (r.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerEvents = function () {
              var n = this;
              this.on("open", function () {
                n.$container.addClass("select2-container--open");
              }),
                this.on("close", function () {
                  n.$container.removeClass("select2-container--open");
                }),
                this.on("enable", function () {
                  n.$container.removeClass("select2-container--disabled");
                }),
                this.on("disable", function () {
                  n.$container.addClass("select2-container--disabled");
                }),
                this.on("blur", function () {
                  n.$container.removeClass("select2-container--focus");
                }),
                this.on("query", function (t) {
                  n.isOpen() || n.trigger("open", {}),
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:all", { data: e, query: t });
                    });
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (e) {
                    n.trigger("results:append", { data: e, query: t });
                  });
                }),
                this.on("keypress", function (e) {
                  var t = e.which;
                  n.isOpen()
                    ? t === i.ESC || t === i.TAB || (t === i.UP && e.altKey)
                      ? (n.close(), e.preventDefault())
                      : t === i.ENTER
                      ? (n.trigger("results:select", {}), e.preventDefault())
                      : t === i.SPACE && e.ctrlKey
                      ? (n.trigger("results:toggle", {}), e.preventDefault())
                      : t === i.UP
                      ? (n.trigger("results:previous", {}), e.preventDefault())
                      : t === i.DOWN &&
                        (n.trigger("results:next", {}), e.preventDefault())
                    : (t === i.ENTER ||
                        t === i.SPACE ||
                        (t === i.DOWN && e.altKey)) &&
                      (n.open(), e.preventDefault());
                });
            }),
            (r.prototype._syncAttributes = function () {
              this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled")
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {});
            }),
            (r.prototype._syncSubtree = function (e, t) {
              var n = !1,
                i = this;
              if (
                !e ||
                !e.target ||
                "OPTION" === e.target.nodeName ||
                "OPTGROUP" === e.target.nodeName
              ) {
                if (t)
                  if (t.addedNodes && 0 < t.addedNodes.length)
                    for (var o = 0; o < t.addedNodes.length; o++)
                      t.addedNodes[o].selected && (n = !0);
                  else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                else n = !0;
                n &&
                  this.dataAdapter.current(function (e) {
                    i.trigger("selection:update", { data: e });
                  });
              }
            }),
            (r.prototype.trigger = function (e, t) {
              var n = r.__super__.trigger,
                i = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                };
              if ((t === undefined && (t = {}), e in i)) {
                var o = { prevented: !1, name: e, args: t };
                if ((n.call(this, i[e], o), o.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (r.prototype.toggleDropdown = function () {
              this.options.get("disabled") ||
                (this.isOpen() ? this.close() : this.open());
            }),
            (r.prototype.open = function () {
              this.isOpen() || this.trigger("query", {});
            }),
            (r.prototype.close = function () {
              this.isOpen() && this.trigger("close", {});
            }),
            (r.prototype.isOpen = function () {
              return this.$container.hasClass("select2-container--open");
            }),
            (r.prototype.hasFocus = function () {
              return this.$container.hasClass("select2-container--focus");
            }),
            (r.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (r.prototype.enable = function (e) {
              this.options.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                );
              e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
              this.$element.prop("disabled", e);
            }),
            (r.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (r.prototype.val = function (e) {
              if (
                (this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              o.isArray(e) &&
                (e = o.map(e, function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger("change");
            }),
            (r.prototype.destroy = function () {
              this.$container.remove(),
                this.$element[0].detachEvent &&
                  this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer
                  ? (this._observer.disconnect(), (this._observer = null))
                  : this.$element[0].removeEventListener &&
                    (this.$element[0].removeEventListener(
                      "DOMAttrModified",
                      this._syncA,
                      !1
                    ),
                    this.$element[0].removeEventListener(
                      "DOMNodeInserted",
                      this._syncS,
                      !1
                    ),
                    this.$element[0].removeEventListener(
                      "DOMNodeRemoved",
                      this._syncS,
                      !1
                    )),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  this.$element.data("old-tabindex")
                ),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (r.prototype.render = function () {
              var e = o(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")),
                (this.$container = e),
                this.$container.addClass(
                  "select2-container--" + this.options.get("theme")
                ),
                e.data("element", this.$element),
                e
              );
            }),
            r
          );
        }
      ),
      u.define("select2/compat/utils", ["jquery"], function (r) {
        return {
          syncCssClasses: function (e, t, n) {
            var i,
              o = [],
              s = r.trim(e.attr("class"));
            s &&
              r((s = "" + s).split(/\s+/)).each(function () {
                0 === this.indexOf("select2-") && o.push(this);
              }),
              (s = r.trim(t.attr("class"))) &&
                r((s = "" + s).split(/\s+/)).each(function () {
                  0 !== this.indexOf("select2-") &&
                    null != (i = n(this)) &&
                    o.push(i);
                }),
              e.attr("class", o.join(" "));
          },
        };
      }),
      u.define(
        "select2/compat/containerCss",
        ["jquery", "./utils"],
        function (s, r) {
          function a(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                n = this.options.get("containerCssClass") || "";
              s.isFunction(n) && (n = n(this.$element));
              var i,
                o = this.options.get("adaptContainerCssClass");
              (o = o || a),
                -1 !== n.indexOf(":all:") &&
                  ((n = n.replace(":all:", "")),
                  (i = o),
                  (o = function (e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e;
                  }));
              e = this.options.get("containerCss") || {};
              return (
                s.isFunction(e) && (e = e(this.$element)),
                r.syncCssClasses(t, this.$element, o),
                t.css(e),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }
      ),
      u.define(
        "select2/compat/dropdownCss",
        ["jquery", "./utils"],
        function (s, r) {
          function a(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                n = this.options.get("dropdownCssClass") || "";
              s.isFunction(n) && (n = n(this.$element));
              var i,
                o = this.options.get("adaptDropdownCssClass");
              (o = o || a),
                -1 !== n.indexOf(":all:") &&
                  ((n = n.replace(":all:", "")),
                  (i = o),
                  (o = function (e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e;
                  }));
              e = this.options.get("dropdownCss") || {};
              return (
                s.isFunction(e) && (e = e(this.$element)),
                r.syncCssClasses(t, this.$element, o),
                t.css(e),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }
      ),
      u.define("select2/compat/initSelection", ["jquery"], function (i) {
        function e(e, t, n) {
          n.get("debug") &&
            window.console &&
            console.warn &&
            console.warn(
              "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
            ),
            (this.initSelection = n.get("initSelection")),
            (this._isInitialized = !1),
            e.call(this, t, n);
        }
        return (
          (e.prototype.current = function (e, t) {
            var n = this;
            this._isInitialized
              ? e.call(this, t)
              : this.initSelection.call(null, this.$element, function (e) {
                  (n._isInitialized = !0), i.isArray(e) || (e = [e]), t(e);
                });
          }),
          e
        );
      }),
      u.define("select2/compat/inputData", ["jquery"], function (r) {
        function e(e, t, n) {
          (this._currentData = []),
            (this._valueSeparator = n.get("valueSeparator") || ","),
            "hidden" === t.prop("type") &&
              n.get("debug") &&
              console &&
              console.warn &&
              console.warn(
                "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
              ),
            e.call(this, t, n);
        }
        return (
          (e.prototype.current = function (e, t) {
            for (var n = [], i = 0; i < this._currentData.length; i++) {
              var o = this._currentData[i];
              n.push.apply(
                n,
                (function s(e, t) {
                  var n = [];
                  return (
                    e.selected || -1 !== r.inArray(e.id, t)
                      ? ((e.selected = !0), n.push(e))
                      : (e.selected = !1),
                    e.children && n.push.apply(n, s(e.children, t)),
                    n
                  );
                })(o, this.$element.val().split(this._valueSeparator))
              );
            }
            t(n);
          }),
          (e.prototype.select = function (e, t) {
            var n;
            this.options.get("multiple")
              ? ((n = this.$element.val()),
                (n += this._valueSeparator + t.id),
                this.$element.val(n))
              : (this.current(function (e) {
                  r.map(e, function (e) {
                    e.selected = !1;
                  });
                }),
                this.$element.val(t.id)),
              this.$element.trigger("change");
          }),
          (e.prototype.unselect = function (e, o) {
            var s = this;
            (o.selected = !1),
              this.current(function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n];
                  o.id != i.id && t.push(i.id);
                }
                s.$element.val(t.join(s._valueSeparator)),
                  s.$element.trigger("change");
              });
          }),
          (e.prototype.query = function (e, t, n) {
            for (var i = [], o = 0; o < this._currentData.length; o++) {
              var s = this._currentData[o],
                s = this.matches(t, s);
              null !== s && i.push(s);
            }
            n({ results: i });
          }),
          (e.prototype.addOptions = function (e, t) {
            t = r.map(t, function (e) {
              return r.data(e[0], "data");
            });
            this._currentData.push.apply(this._currentData, t);
          }),
          e
        );
      }),
      u.define("select2/compat/matcher", ["jquery"], function (r) {
        return function (s) {
          return function (e, t) {
            var n = r.extend(!0, {}, t);
            if (null == e.term || "" === r.trim(e.term)) return n;
            if (t.children) {
              for (var i = t.children.length - 1; 0 <= i; i--) {
                var o = t.children[i];
                s(e.term, o.text, o) || n.children.splice(i, 1);
              }
              if (0 < n.children.length) return n;
            }
            return s(e.term, t.text, t) ? n : null;
          };
        };
      }),
      u.define("select2/compat/query", [], function () {
        function e(e, t, n) {
          n.get("debug") &&
            window.console &&
            console.warn &&
            console.warn(
              "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
            ),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.callback = n), this.options.get("query").call(null, t);
          }),
          e
        );
      }),
      u.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return (
          (e.prototype.position = function (e, t, n) {
            n.find(".dropdown-wrapper").append(t),
              t.addClass("select2-dropdown--below"),
              n.addClass("select2-container--below");
          }),
          e
        );
      }),
      u.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$dropdown.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      u.define("select2/selection/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$selection.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      /*!
       * jQuery Mousewheel 3.1.13
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       */
      (a = function (u) {
        var d,
          p,
          e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          t =
            "onwheel" in document || 9 <= document.documentMode
              ? ["wheel"]
              : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          h = Array.prototype.slice;
        if (u.event.fixHooks)
          for (var n = e.length; n; )
            u.event.fixHooks[e[--n]] = u.event.mouseHooks;
        var f = (u.event.special.mousewheel = {
          version: "3.1.12",
          setup: function () {
            if (this.addEventListener)
              for (var e = t.length; e; ) this.addEventListener(t[--e], i, !1);
            else this.onmousewheel = i;
            u.data(this, "mousewheel-line-height", f.getLineHeight(this)),
              u.data(this, "mousewheel-page-height", f.getPageHeight(this));
          },
          teardown: function () {
            if (this.removeEventListener)
              for (var e = t.length; e; )
                this.removeEventListener(t[--e], i, !1);
            else this.onmousewheel = null;
            u.removeData(this, "mousewheel-line-height"),
              u.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function (e) {
            var t = u(e),
              e = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
            return (
              e.length || (e = u("body")),
              parseInt(e.css("fontSize"), 10) ||
                parseInt(t.css("fontSize"), 10) ||
                16
            );
          },
          getPageHeight: function (e) {
            return u(e).height();
          },
          settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        function i(e) {
          var t,
            n,
            i = e || window.event,
            o = h.call(arguments, 1),
            s = 0,
            r = 0,
            a = 0,
            l = 0,
            c = 0;
          if (
            (((e = u.event.fix(i)).type = "mousewheel"),
            "detail" in i && (a = -1 * i.detail),
            "wheelDelta" in i && (a = i.wheelDelta),
            "wheelDeltaY" in i && (a = i.wheelDeltaY),
            "wheelDeltaX" in i && (r = -1 * i.wheelDeltaX),
            "axis" in i &&
              i.axis === i.HORIZONTAL_AXIS &&
              ((r = -1 * a), (a = 0)),
            (s = 0 === a ? r : a),
            "deltaY" in i && (s = a = -1 * i.deltaY),
            "deltaX" in i && ((r = i.deltaX), 0 === a && (s = -1 * r)),
            0 !== a || 0 !== r)
          )
            return (
              1 === i.deltaMode
                ? ((s *= t = u.data(this, "mousewheel-line-height")),
                  (a *= t),
                  (r *= t))
                : 2 === i.deltaMode &&
                  ((s *= n = u.data(this, "mousewheel-page-height")),
                  (a *= n),
                  (r *= n)),
              (n = Math.max(Math.abs(a), Math.abs(r))),
              (!p || n < p) && m(i, (p = n)) && (p /= 40),
              m(i, n) && ((s /= 40), (r /= 40), (a /= 40)),
              (s = Math[1 <= s ? "floor" : "ceil"](s / p)),
              (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
              (a = Math[1 <= a ? "floor" : "ceil"](a / p)),
              f.settings.normalizeOffset &&
                this.getBoundingClientRect &&
                ((n = this.getBoundingClientRect()),
                (l = e.clientX - n.left),
                (c = e.clientY - n.top)),
              (e.deltaX = r),
              (e.deltaY = a),
              (e.deltaFactor = p),
              (e.offsetX = l),
              (e.offsetY = c),
              (e.deltaMode = 0),
              o.unshift(e, s, r, a),
              d && clearTimeout(d),
              (d = setTimeout(g, 200)),
              (u.event.dispatch || u.event.handle).apply(this, o)
            );
        }
        function g() {
          p = null;
        }
        function m(e, t) {
          return (
            f.settings.adjustOldDeltas &&
            "mousewheel" === e.type &&
            t % 120 == 0
          );
        }
        u.fn.extend({
          mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
          },
        });
      }),
      "function" == typeof u.define && u.define.amd
        ? u.define("jquery-mousewheel", ["jquery"], a)
        : "object" == typeof exports
        ? (module.exports = a)
        : a(t),
      u.define(
        "jquery.select2",
        ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"],
        function (o, e, s, t) {
          var r;
          return (
            null == o.fn.select2 &&
              ((r = ["open", "close", "destroy"]),
              (o.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = o.extend(!0, {}, t);
                      new s(o(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  i = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = o(this).data("select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, i));
                  }),
                  -1 < o.inArray(t, r) ? this : n
                );
              })),
            null == o.fn.select2.defaults && (o.fn.select2.defaults = t),
            s
          );
        }
      ),
      { define: u.define, require: u.require });
  function _(e, t) {
    return i.call(e, t);
  }
  function l(e, t) {
    var n,
      i,
      o,
      s,
      r,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = m.map,
      f = (h && h["*"]) || {};
    if (e && "." === e.charAt(0))
      if (t) {
        for (
          t = (e = e.split("/")).length - 1,
            m.nodeIdCompat && v.test(e[t]) && (e[t] = e[t].replace(v, "")),
            e = p.slice(0, p.length - 1).concat(e),
            c = 0;
          c < e.length;
          c += 1
        )
          if ("." === (d = e[c])) e.splice(c, 1), --c;
          else if (".." === d) {
            if (1 === c && (".." === e[2] || ".." === e[0])) break;
            0 < c && (e.splice(c - 1, 2), (c -= 2));
          }
        e = e.join("/");
      } else 0 === e.indexOf("./") && (e = e.substring(2));
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (((i = n.slice(0, c).join("/")), p))
          for (u = p.length; 0 < u; --u)
            if ((o = (o = h[p.slice(0, u).join("/")]) && o[i])) {
              (s = o), (r = c);
              break;
            }
        if (s) break;
        !a && f && f[i] && ((a = f[i]), (l = c));
      }
      !s && a && ((s = a), (r = l)),
        s && (n.splice(0, r, s), (e = n.join("/")));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = o.call(arguments, 0);
      return (
        "string" != typeof e[0] && 1 === e.length && e.push(null),
        r.apply(d, e.concat([t, n]))
      );
    };
  }
  function b(e) {
    var t;
    if (
      (_(g, e) && ((t = g[e]), delete g[e], (y[e] = !0), s.apply(d, t)),
      !_(f, e) && !_(y, e))
    )
      throw new Error("No " + e);
    return f[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  var u = a.require("jquery.select2");
  return (t.fn.select2.amd = a), u;
});
