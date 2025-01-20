!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.Sweetalert2 = e());
})(this, function () {
	"use strict";
	function c(t) {
		return (c =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				  })(t);
	}
	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	}
	function a(t, e) {
		for (var o = 0; o < e.length; o++) {
			var n = e[o];
			(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
		}
	}
	function t(t, e, o) {
		return e && a(t.prototype, e), o && a(t, o), t;
	}
	function d() {
		return (d =
			Object.assign ||
			function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var o,
						n = arguments[e];
					for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
				}
				return t;
			}).apply(this, arguments);
	}
	function r(t) {
		return (r = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t);
			  })(t);
	}
	function s(t, e) {
		return (s =
			Object.setPrototypeOf ||
			function (t, e) {
				return (t.__proto__ = e), t;
			})(t, e);
	}
	function i(t, e, o) {
		return (i = (function () {
			if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
				if ("function" == typeof Proxy) return 1;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), 1;
				} catch (t) {
					return;
				}
			}
		})()
			? Reflect.construct
			: function (t, e, o) {
					var n = [null];
					return n.push.apply(n, e), (n = new (Function.bind.apply(t, n))()), o && s(n, o.prototype), n;
			  }).apply(null, arguments);
	}
	function l(t, e, o) {
		return (l =
			"undefined" != typeof Reflect && Reflect.get
				? Reflect.get
				: function (t, e, o) {
						if (
							(t = (function (t, e) {
								for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); );
								return t;
							})(t, e))
						)
							return (e = Object.getOwnPropertyDescriptor(t, e)).get ? e.get.call(o) : e.value;
				  })(t, e, o || t);
	}
	function u(e) {
		return Object.keys(e).map(function (t) {
			return e[t];
		});
	}
	function x(t) {
		return Array.prototype.slice.call(t);
	}
	function w(t) {
		console.error("".concat(I, " ").concat(t));
	}
	function m(t) {
		return t && Promise.resolve(t) === t;
	}
	function p(t) {
		return t instanceof Element || ("object" === c(t) && t.jquery);
	}
	function e(t) {
		var e,
			o = {};
		for (e in t) o[t[e]] = "swal2-" + t[e];
		return o;
	}
	function f(t) {
		var e = D();
		return e ? e.querySelector(t) : null;
	}
	function o(t) {
		return f(".".concat(t));
	}
	function g() {
		return x(N().querySelectorAll(".".concat(Y.icon)));
	}
	function b() {
		var t = g().filter(function (t) {
			return lt(t);
		});
		return t.length ? t[0] : null;
	}
	function h() {
		return o(Y.title);
	}
	function C() {
		return o(Y.content);
	}
	function y() {
		return o(Y.image);
	}
	function P() {
		return o(Y["progress-steps"]);
	}
	function A() {
		return o(Y["validation-message"]);
	}
	function T() {
		return f(".".concat(Y.actions, " .").concat(Y.confirm));
	}
	function B() {
		return f(".".concat(Y.actions, " .").concat(Y.cancel));
	}
	function S() {
		return o(Y.actions);
	}
	function k() {
		return o(Y.header);
	}
	function v() {
		return o(Y.footer);
	}
	function E() {
		return o(Y["timer-progress-bar"]);
	}
	function L() {
		return o(Y.close);
	}
	function O() {
		var t = x(N().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
				return (t = parseInt(t.getAttribute("tabindex"))), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
			}),
			e = x(N().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
				return "-1" !== t.getAttribute("tabindex");
			});
		return (function (t) {
			for (var e = [], o = 0; o < t.length; o++) -1 === e.indexOf(t[o]) && e.push(t[o]);
			return e;
		})(t.concat(e)).filter(function (t) {
			return lt(t);
		});
	}
	function j() {
		return !U() && !document.body.classList.contains(Y["no-backdrop"]);
	}
	function z(t, e) {
		if (e) {
			for (var o = e.split(/\s+/), n = 0; n < o.length; n++) if (!t.classList.contains(o[n])) return;
			return 1;
		}
	}
	function M(t, e, o) {
		var n,
			a = e;
		if (
			(x((n = t).classList).forEach(function (t) {
				-1 === u(Y).indexOf(t) && -1 === u(Z).indexOf(t) && -1 === u(a.showClass).indexOf(t) && n.classList.remove(t);
			}),
			e.customClass && e.customClass[o])
		) {
			if ("string" != typeof e.customClass[o] && !e.customClass[o].forEach) return q("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(c(e.customClass[o]), '"'));
			st(t, e.customClass[o]);
		}
	}
	function H(t) {
		return "function" == typeof t ? t() : t;
	}
	var I = "SweetAlert2:",
		q = function (t) {
			console.warn("".concat(I, " ").concat(t));
		},
		V = [],
		R = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
		Y = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
		Z = e(["success", "warning", "info", "question", "error"]),
		D = function () {
			return document.body.querySelector(".".concat(Y.container));
		},
		N = function () {
			return o(Y.popup);
		},
		U = function () {
			return document.body.classList.contains(Y["toast-shown"]);
		},
		_ = { previousBodyPadding: null };
	function X(t, e) {
		if (!e) return null;
		switch (e) {
			case "select":
			case "textarea":
			case "file":
				return at(t, Y[e]);
			case "checkbox":
				return t.querySelector(".".concat(Y.checkbox, " input"));
			case "radio":
				return t.querySelector(".".concat(Y.radio, " input:checked")) || t.querySelector(".".concat(Y.radio, " input:first-child"));
			case "range":
				return t.querySelector(".".concat(Y.range, " input"));
			default:
				return at(t, Y.input);
		}
	}
	function F(t) {
		var e;
		t.focus(), "file" !== t.type && ((e = t.value), (t.value = ""), (t.value = e));
	}
	function $(t, e, o) {
		t &&
			e &&
			(e = "string" == typeof e ? e.split(/\s+/).filter(Boolean) : e).forEach(function (e) {
				t.forEach
					? t.forEach(function (t) {
							o ? t.classList.add(e) : t.classList.remove(e);
					  })
					: o
					? t.classList.add(e)
					: t.classList.remove(e);
			});
	}
	function W(t, e, o) {
		o || 0 === parseInt(o) ? (t.style[e] = "number" == typeof o ? "".concat(o, "px") : o) : t.style.removeProperty(e);
	}
	function K(t, e) {
		(e = 1 < arguments.length && void 0 !== e ? e : "flex"), (t.style.opacity = ""), (t.style.display = e);
	}
	function Q(t) {
		(t.style.opacity = ""), (t.style.display = "none");
	}
	function J(t, e, o) {
		e ? K(t, o) : Q(t);
	}
	function G(t) {
		var e = window.getComputedStyle(t),
			t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
			e = parseFloat(e.getPropertyValue("transition-duration") || "0");
		return 0 < t || 0 < e;
	}
	function tt(t, e) {
		var e = 1 < arguments.length && void 0 !== e && e,
			o = E();
		lt(o) &&
			(e && ((o.style.transition = "none"), (o.style.width = "100%")),
			setTimeout(function () {
				(o.style.transition = "width ".concat(t / 1e3, "s linear")), (o.style.width = "0%");
			}, 10));
	}
	function et() {
		return "undefined" == typeof window || "undefined" == typeof document;
	}
	function ot(t) {
		we.isVisible() && rt !== t.target.value && we.resetValidationMessage(), (rt = t.target.value);
	}
	function nt(t, e) {
		t instanceof HTMLElement ? e.appendChild(t) : "object" === c(t) ? ut(t, e) : t && (e.innerHTML = t);
	}
	function at(t, e) {
		for (var o = 0; o < t.childNodes.length; o++) if (z(t.childNodes[o], e)) return t.childNodes[o];
	}
	var rt,
		st = function (t, e) {
			$(t, e, !0);
		},
		it = function (t, e) {
			$(t, e, !1);
		},
		lt = function (t) {
			return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
		},
		ct = '\n <div aria-labelledby="'
			.concat(Y.title, '" aria-describedby="')
			.concat(Y.content, '" class="')
			.concat(Y.popup, '" tabindex="-1">\n   <div class="')
			.concat(Y.header, '">\n     <ul class="')
			.concat(Y["progress-steps"], '"></ul>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.error, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.question, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.warning, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.info, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.success, '"></div>\n     <img class="')
			.concat(Y.image, '" />\n     <h2 class="')
			.concat(Y.title, '" id="')
			.concat(Y.title, '"></h2>\n     <button type="button" class="')
			.concat(Y.close, '"></button>\n   </div>\n   <div class="')
			.concat(Y.content, '">\n     <div id="')
			.concat(Y.content, '" class="')
			.concat(Y["html-container"], '"></div>\n     <input class="')
			.concat(Y.input, '" />\n     <input type="file" class="')
			.concat(Y.file, '" />\n     <div class="')
			.concat(Y.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="')
			.concat(Y.select, '"></select>\n     <div class="')
			.concat(Y.radio, '"></div>\n     <label for="')
			.concat(Y.checkbox, '" class="')
			.concat(Y.checkbox, '">\n       <input type="checkbox" />\n       <span class="')
			.concat(Y.label, '"></span>\n     </label>\n     <textarea class="')
			.concat(Y.textarea, '"></textarea>\n     <div class="')
			.concat(Y["validation-message"], '" id="')
			.concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="')
			.concat(Y.actions, '">\n     <button type="button" class="')
			.concat(Y.confirm, '">OK</button>\n     <button type="button" class="')
			.concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="')
			.concat(Y.footer, '"></div>\n   <div class="')
			.concat(Y["timer-progress-bar"], '"></div>\n </div>\n')
			.replace(/(^|\n)\s*/g, ""),
		ut = function (t, e) {
			t.jquery ? dt(e, t) : (e.innerHTML = t.toString());
		},
		dt = function (t, e) {
			if (((t.innerHTML = ""), 0 in e)) for (var o = 0; o in e; o++) t.appendChild(e[o].cloneNode(!0));
			else t.appendChild(e.cloneNode(!0));
		},
		wt = (function () {
			if (et()) return !1;
			var t,
				e = document.createElement("div"),
				o = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
			for (t in o) if (Object.prototype.hasOwnProperty.call(o, t) && void 0 !== e.style[t]) return o[t];
			return !1;
		})();
	function mt(t, e, o) {
		var n;
		J(t, o["show".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Button")], "inline-block"), (t.innerHTML = o["".concat(e, "ButtonText")]), t.setAttribute("aria-label", o["".concat(e, "ButtonAriaLabel")]), (t.className = Y[e]), M(t, o, "".concat(e, "Button")), st(t, o["".concat(e, "ButtonClass")]);
	}
	function pt(t, e) {
		(t.placeholder && !e.inputPlaceholder) || (t.placeholder = e.inputPlaceholder);
	}
	function ft(t, e) {
		var o = X(C(), t);
		if (o)
			for (var n in ((function (t) {
				for (var e = 0; e < t.attributes.length; e++) {
					var o = t.attributes[e].name;
					-1 === ["type", "value", "style"].indexOf(o) && t.removeAttribute(o);
				}
			})(o),
			e))
				("range" === t && "placeholder" === n) || o.setAttribute(n, e[n]);
	}
	var gt = { promise: new WeakMap(), innerParams: new WeakMap(), domCache: new WeakMap() },
		bt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
		ht = function (t) {
			return (t = Y[t] || Y.input), at(C(), t);
		},
		yt = {};
	function kt() {
		return D().getAttribute("data-queue-step");
	}
	function vt(t, e) {
		var o;
		M(k(), e, "header"),
			(function (a) {
				var r = P();
				if (!a.progressSteps || 0 === a.progressSteps.length) return Q(r);
				K(r), (r.innerHTML = "");
				var s = parseInt(void 0 === a.currentProgressStep ? kt() : a.currentProgressStep);
				s >= a.progressSteps.length && q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
					a.progressSteps.forEach(function (t, e) {
						var o,
							n = ((o = t), (n = document.createElement("li")), st(n, Y["progress-step"]), (n.innerHTML = o), n);
						r.appendChild(n), e === s && st(n, Y["active-progress-step"]), e !== a.progressSteps.length - 1 && ((e = t), (t = document.createElement("li")), st(t, Y["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), r.appendChild(t));
					});
			})(e),
			(o = e),
			(t = gt.innerParams.get(t)) && o.icon === t.icon && b() ? M(b(), o, "icon") : (Pt(), o.icon && (-1 !== Object.keys(Z).indexOf(o.icon) ? (K((t = f(".".concat(Y.icon, ".").concat(Z[o.icon])))), Tt(t, o), At(), M(t, o, "icon"), st(t, o.showClass.icon)) : w('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))),
			(function (t) {
				var e = y();
				if (!t.imageUrl) return Q(e);
				K(e), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), W(e, "width", t.imageWidth), W(e, "height", t.imageHeight), (e.className = Y.image), M(e, t, "image");
			})(e),
			(t = e),
			J((o = h()), t.title || t.titleText),
			t.title && nt(t.title, o),
			t.titleText && (o.innerText = t.titleText),
			M(o, t, "title"),
			(t = e),
			((e = L()).innerHTML = t.closeButtonHtml),
			M(e, t, "closeButton"),
			J(e, t.showCloseButton),
			e.setAttribute("aria-label", t.closeButtonAriaLabel);
	}
	function xt(t, e) {
		var n,
			a,
			r,
			o,
			s,
			i,
			l,
			c,
			u = e,
			d = N();
		W(d, "width", u.width),
			W(d, "padding", u.padding),
			u.background && (d.style.background = u.background),
			(i = u),
			((u = d).className = "".concat(Y.popup, " ").concat(lt(u) ? i.showClass.popup : "")),
			i.toast ? (st([document.documentElement, document.body], Y["toast-shown"]), st(u, Y.toast)) : st(u, Y.modal),
			M(u, i, "popup"),
			"string" == typeof i.customClass && st(u, i.customClass),
			i.icon && st(u, Y["icon-".concat(i.icon)]),
			(d = e),
			(u = D()) && ("string" == typeof (o = d.backdrop) ? (u.style.background = o) : o || st([document.documentElement, document.body], Y["no-backdrop"]), !d.backdrop && d.allowOutsideClick && q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), (s = u), (o = d.position) in Y ? st(s, Y[o]) : (q('The "position" parameter is not valid, defaulting to "center"'), st(s, Y.center)), (o = u), !(s = d.grow) || "string" != typeof s || ((s = "grow-".concat(s)) in Y && st(o, Y[s])), M(u, d, "container"), (d = document.body.getAttribute("data-swal2-queue-step")) && (u.setAttribute("data-queue-step", d), document.body.removeAttribute("data-swal2-queue-step"))),
			vt(t, e),
			(i = t),
			(o = e),
			(s = C().querySelector("#".concat(Y.content))),
			o.html ? (nt(o.html, s), K(s, "block")) : o.text ? ((s.textContent = o.text), K(s, "block")) : Q(s),
			(n = o),
			(a = C()),
			(i = gt.innerParams.get(i)),
			(r = !i || n.input !== i.input),
			bt.forEach(function (t) {
				var e = Y[t],
					o = at(a, e);
				ft(t, n.inputAttributes), (o.className = e), r && Q(o);
			}),
			n.input &&
				(r &&
					(function (t) {
						if (!yt[t.input]) return w('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
						var e = ht(t.input),
							o = yt[t.input](e, t);
						K(o),
							setTimeout(function () {
								F(o);
							});
					})(n),
				(c = ht((l = n).input)),
				l.customClass && st(c, l.customClass.input)),
			M(C(), o, "content"),
			(u = e),
			(d = S()),
			(t = T()),
			(s = B()),
			u.showConfirmButton || u.showCancelButton || Q(d),
			M(d, u, "actions"),
			mt(t, "confirm", u),
			mt(s, "cancel", u),
			u.buttonsStyling ? ((i = u), st([(o = t), (d = s)], Y.styled), i.confirmButtonColor && (o.style.backgroundColor = i.confirmButtonColor), i.cancelButtonColor && (d.style.backgroundColor = i.cancelButtonColor), (i = window.getComputedStyle(o).getPropertyValue("background-color")), (o.style.borderLeftColor = i), (o.style.borderRightColor = i)) : (it([t, s], Y.styled), (t.style.backgroundColor = t.style.borderLeftColor = t.style.borderRightColor = ""), (s.style.backgroundColor = s.style.borderLeftColor = s.style.borderRightColor = "")),
			u.reverseButtons && t.parentNode.insertBefore(s, t),
			(s = e),
			J((t = v()), s.footer),
			s.footer && nt(s.footer, t),
			M(t, s, "footer"),
			"function" == typeof e.onRender && e.onRender(N());
	}
	function Ct() {
		return T() && T().click();
	}
	(yt.text =
		yt.email =
		yt.password =
		yt.number =
		yt.tel =
		yt.url =
			function (t, e) {
				return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? (t.value = e.inputValue) : m(e.inputValue) || q('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(c(e.inputValue), '"')), pt(t, e), (t.type = e.input), t;
			}),
		(yt.file = function (t, e) {
			return pt(t, e), t;
		}),
		(yt.range = function (t, e) {
			var o = t.querySelector("input"),
				n = t.querySelector("output");
			return (o.value = e.inputValue), (o.type = e.input), (n.value = e.inputValue), t;
		}),
		(yt.select = function (t, e) {
			var o;
			return (t.innerHTML = ""), e.inputPlaceholder && (((o = document.createElement("option")).innerHTML = e.inputPlaceholder), (o.value = ""), (o.disabled = !0), (o.selected = !0), t.appendChild(o)), t;
		}),
		(yt.radio = function (t) {
			return (t.innerHTML = ""), t;
		}),
		(yt.checkbox = function (t, e) {
			var o = X(C(), "checkbox");
			return (o.value = 1), (o.id = Y.checkbox), (o.checked = Boolean(e.inputValue)), (t.querySelector("span").innerHTML = e.inputPlaceholder), t;
		}),
		(yt.textarea = function (e, t) {
			var o, n;
			return (
				(e.value = t.inputValue),
				pt(e, t),
				"MutationObserver" in window &&
					((o = parseInt(window.getComputedStyle(N()).width)),
					(n = parseInt(window.getComputedStyle(N()).paddingLeft) + parseInt(window.getComputedStyle(N()).paddingRight)),
					new MutationObserver(function () {
						var t = e.offsetWidth + n;
						N().style.width = o < t ? "".concat(t, "px") : null;
					}).observe(e, { attributes: !0, attributeFilter: ["style"] })),
				e
			);
		});
	var Pt = function () {
			for (var t = g(), e = 0; e < t.length; e++) Q(t[e]);
		},
		At = function () {
			for (var t = N(), e = window.getComputedStyle(t).getPropertyValue("background-color"), o = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), n = 0; n < o.length; n++) o[n].style.backgroundColor = e;
		},
		Tt = function (t, e) {
			(t.innerHTML = ""), e.iconHtml ? (t.innerHTML = Bt(e.iconHtml)) : "success" === e.icon ? (t.innerHTML = '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? (t.innerHTML = '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (t.innerHTML = Bt({ question: "?", warning: "!", info: "i" }[e.icon]));
		},
		Bt = function (t) {
			return '<div class="'.concat(Y["icon-content"], '">').concat(t, "</div>");
		},
		St = [];
	function Et() {
		(t = N()) || we.fire();
		var t = N(),
			e = S(),
			o = T();
		K(e), K(o, "inline-block"), st([t, e], Y.loading), (o.disabled = !0), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
	}
	function Lt() {
		if (Mt.timeout)
			return (
				(function () {
					var t = E(),
						e = parseInt(window.getComputedStyle(t).width);
					t.style.removeProperty("transition"), (t.style.width = "100%");
					var o = parseInt(window.getComputedStyle(t).width),
						o = parseInt((e / o) * 100);
					t.style.removeProperty("transition"), (t.style.width = "".concat(o, "%"));
				})(),
				Mt.timeout.stop()
			);
	}
	function Ot() {
		if (Mt.timeout) {
			var t = Mt.timeout.start();
			return tt(t), t;
		}
	}
	function jt(t) {
		return Object.prototype.hasOwnProperty.call(Ht, t);
	}
	function zt(t) {
		return qt[t];
	}
	var Mt = {},
		Ht = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconHtml: void 0, toast: !1, animation: !0, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: void 0, target: "body", backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showCancelButton: !1, preConfirm: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, onBeforeOpen: void 0, onOpen: void 0, onRender: void 0, onClose: void 0, onAfterClose: void 0, onDestroy: void 0, scrollbarPadding: !0 },
		It = ["title", "titleText", "text", "html", "icon", "customClass", "allowOutsideClick", "allowEscapeKey", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep"],
		qt = { animation: 'showClass" and "hideClass' },
		Vt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
		Rt = Object.freeze({
			isValidParameter: jt,
			isUpdatableParameter: function (t) {
				return -1 !== It.indexOf(t);
			},
			isDeprecatedParameter: zt,
			argsToParams: function (o) {
				var n = {};
				return (
					"object" !== c(o[0]) || p(o[0])
						? ["title", "html", "icon"].forEach(function (t, e) {
								"string" == typeof (e = o[e]) || p(e) ? (n[t] = e) : void 0 !== e && w("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(c(e)));
						  })
						: d(n, o[0]),
					n
				);
			},
			isVisible: function () {
				return lt(N());
			},
			clickConfirm: Ct,
			clickCancel: function () {
				return B() && B().click();
			},
			getContainer: D,
			getPopup: N,
			getTitle: h,
			getContent: C,
			getHtmlContainer: function () {
				return o(Y["html-container"]);
			},
			getImage: y,
			getIcon: b,
			getIcons: g,
			getCloseButton: L,
			getActions: S,
			getConfirmButton: T,
			getCancelButton: B,
			getHeader: k,
			getFooter: v,
			getFocusableElements: O,
			getValidationMessage: A,
			isLoading: function () {
				return N().hasAttribute("data-loading");
			},
			fire: function () {
				for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
				return i(this, e);
			},
			mixin: function (e) {
				return (
					(function (t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && s(t, e);
					})(o, this),
					t(o, [
						{
							key: "_main",
							value: function (t) {
								return l(r(o.prototype), "_main", this).call(this, d({}, e, t));
							},
						},
					]),
					o
				);
				function o() {
					return (
						n(this, o),
						!(t = r(o).apply(this, arguments)) || ("object" != typeof t && "function" != typeof t)
							? (function (t) {
									if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return t;
							  })(this)
							: t
					);
					var t;
				}
			},
			queue: function (t) {
				var r = this;
				function s(t, e) {
					(St = []), t(e);
				}
				St = t;
				var i = [];
				return new Promise(function (a) {
					!(function e(o, n) {
						o < St.length
							? (document.body.setAttribute("data-swal2-queue-step", o),
							  r.fire(St[o]).then(function (t) {
									void 0 !== t.value ? (i.push(t.value), e(o + 1, n)) : s(a, { dismiss: t.dismiss });
							  }))
							: s(a, { value: i });
					})(0);
				});
			},
			getQueueStep: kt,
			insertQueueStep: function (t, e) {
				return e && e < St.length ? St.splice(e, 0, t) : St.push(t);
			},
			deleteQueueStep: function (t) {
				void 0 !== St[t] && St.splice(t, 1);
			},
			showLoading: Et,
			enableLoading: Et,
			getTimerLeft: function () {
				return Mt.timeout && Mt.timeout.getTimerLeft();
			},
			stopTimer: Lt,
			resumeTimer: Ot,
			toggleTimer: function () {
				var t = Mt.timeout;
				return t && (t.running ? Lt : Ot)();
			},
			increaseTimer: function (t) {
				if (Mt.timeout) return tt((t = Mt.timeout.increase(t)), !0), t;
			},
			isTimerRunning: function () {
				return Mt.timeout && Mt.timeout.isRunning();
			},
		});
	function Yt() {
		var t,
			e = gt.innerParams.get(this);
		e && ((t = gt.domCache.get(this)), e.showConfirmButton || (Q(t.confirmButton), e.showCancelButton || Q(t.actions)), it([t.popup, t.actions], Y.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), (t.confirmButton.disabled = !1), (t.cancelButton.disabled = !1));
	}
	function Zt() {
		return window.MSInputMethodContext && document.documentMode;
	}
	function Dt() {
		var t = D(),
			e = N();
		t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
	}
	var Nt = { swalPromiseResolve: new WeakMap() };
	function Ut(t, e, o, n) {
		o
			? Xt(t, n)
			: (new Promise(function (t) {
					var e = window.scrollX,
						o = window.scrollY;
					(Mt.restoreFocusTimeout = setTimeout(function () {
						Mt.previousActiveElement && Mt.previousActiveElement.focus ? (Mt.previousActiveElement.focus(), (Mt.previousActiveElement = null)) : document.body && document.body.focus(), t();
					}, 100)),
						void 0 !== e && void 0 !== o && window.scrollTo(e, o);
			  }).then(function () {
					return Xt(t, n);
			  }),
			  Mt.keydownTarget.removeEventListener("keydown", Mt.keydownHandler, { capture: Mt.keydownListenerCapture }),
			  (Mt.keydownHandlerAdded = !1)),
			e.parentNode && e.parentNode.removeChild(e),
			j() &&
				(null !== _.previousBodyPadding && ((document.body.style.paddingRight = "".concat(_.previousBodyPadding, "px")), (_.previousBodyPadding = null)),
				z(document.body, Y.iosfix) && ((e = parseInt(document.body.style.top, 10)), it(document.body, Y.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * e)),
				"undefined" != typeof window && Zt() && window.removeEventListener("resize", Dt),
				x(document.body.children).forEach(function (t) {
					t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
				})),
			it([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"], Y["toast-column"]]);
	}
	function _t(t) {
		var e,
			o,
			n,
			a,
			r,
			s,
			i = N();
		!i ||
			((s = gt.innerParams.get(this)) &&
				!z(i, s.hideClass.popup) &&
				((e = Nt.swalPromiseResolve.get(this)),
				it(i, s.showClass.popup),
				st(i, s.hideClass.popup),
				(r = D()),
				it(r, s.showClass.backdrop),
				st(r, s.hideClass.backdrop),
				(o = i),
				(n = s),
				(r = D()),
				(i = wt && G(o)),
				(s = n.onClose),
				(n = n.onAfterClose),
				null !== s && "function" == typeof s && s(o),
				i
					? ((s = this),
					  (a = o),
					  (i = r),
					  (o = n),
					  (Mt.swalCloseEventFinishedCallback = Ut.bind(null, s, i, U(), o)),
					  a.addEventListener(wt, function (t) {
							t.target === a && (Mt.swalCloseEventFinishedCallback(), delete Mt.swalCloseEventFinishedCallback);
					  }))
					: Ut(this, r, U(), n),
				e(t || {})));
	}
	var Xt = function (t, e) {
		setTimeout(function () {
			"function" == typeof e && e(), t._destroy();
		});
	};
	function Ft(t, e, o) {
		var n = gt.domCache.get(t);
		e.forEach(function (t) {
			n[t].disabled = o;
		});
	}
	function $t(t, e) {
		if (!t) return !1;
		if ("radio" === t.type) for (var o = t.parentNode.parentNode.querySelectorAll("input"), n = 0; n < o.length; n++) o[n].disabled = e;
		else t.disabled = e;
	}
	var Wt =
			(t(Qt, [
				{
					key: "start",
					value: function () {
						return this.running || ((this.running = !0), (this.started = new Date()), (this.id = setTimeout(this.callback, this.remaining))), this.remaining;
					},
				},
				{
					key: "stop",
					value: function () {
						return this.running && ((this.running = !1), clearTimeout(this.id), (this.remaining -= new Date() - this.started)), this.remaining;
					},
				},
				{
					key: "increase",
					value: function (t) {
						var e = this.running;
						return e && this.stop(), (this.remaining += t), e && this.start(), this.remaining;
					},
				},
				{
					key: "getTimerLeft",
					value: function () {
						return this.running && (this.stop(), this.start()), this.remaining;
					},
				},
				{
					key: "isRunning",
					value: function () {
						return this.running;
					},
				},
			]),
			Qt),
		Kt = {
			email: function (t, e) {
				return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
			},
			url: function (t, e) {
				return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
			},
		};
	function Qt(t, e) {
		n(this, Qt), (this.callback = t), (this.remaining = e), (this.running = !1), this.start();
	}
	function Jt(t) {
		var e = N();
		t.target === e && ((t = D()), e.removeEventListener(wt, Jt), (t.style.overflowY = "auto"));
	}
	function Gt(t, e) {
		var o, n, a, r, s, i;
		function l(t) {
			return se[s.input](
				i,
				((e = t),
				(o = []),
				"undefined" != typeof Map && e instanceof Map
					? e.forEach(function (t, e) {
							o.push([e, t]);
					  })
					: Object.keys(e).forEach(function (t) {
							o.push([t, e[t]]);
					  }),
				o),
				s
			);
			var e, o;
		}
		"select" === e.input || "radio" === e.input
			? ((r = t),
			  (s = e),
			  (i = C()),
			  m(s.inputOptions)
					? (Et(),
					  s.inputOptions.then(function (t) {
							r.hideLoading(), l(t);
					  }))
					: "object" === c(s.inputOptions)
					? l(s.inputOptions)
					: w("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(c(s.inputOptions))))
			: -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) &&
			  m(e.inputValue) &&
			  ((n = e),
			  Q((a = (o = t).getInput())),
			  n.inputValue
					.then(function (t) {
						(a.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t)), K(a), a.focus(), o.hideLoading();
					})
					.catch(function (t) {
						w("Error in inputValue promise: ".concat(t)), (a.value = ""), K(a), a.focus(), o.hideLoading();
					}));
	}
	function te(t, e) {
		t.closePopup({ value: e });
	}
	function ee(s, t, e, i) {
		t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), (t.keydownHandlerAdded = !1)),
			e.toast ||
				((t.keydownHandler = function (t) {
					var e,
						o,
						n = s,
						a = t,
						r = i;
					(t = gt.innerParams.get(n)).stopKeydownPropagation && a.stopPropagation(),
						"Enter" === a.key
							? ((n = n), (o = t), !(e = a).isComposing && e.target && n.getInput() && e.target.outerHTML === n.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(o.input) && (Ct(), e.preventDefault()))
							: "Tab" === a.key
							? (function (t) {
									for (var e = t.target, o = O(), n = -1, a = 0; a < o.length; a++)
										if (e === o[a]) {
											n = a;
											break;
										}
									t.shiftKey ? oe(0, n, -1) : oe(0, n, 1), t.stopPropagation(), t.preventDefault();
							  })(a)
							: -1 !== ie.indexOf(a.key)
							? ((o = T()), (e = B()), document.activeElement === o && lt(e) ? e.focus() : document.activeElement === e && lt(o) && o.focus())
							: -1 !== le.indexOf(a.key) && ((a = a), (r = r), H(t.allowEscapeKey) && (a.preventDefault(), r(R.esc)));
				}),
				(t.keydownTarget = e.keydownListenerCapture ? window : N()),
				(t.keydownListenerCapture = e.keydownListenerCapture),
				t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }),
				(t.keydownHandlerAdded = !0));
	}
	function oe(t, e, o) {
		var n = O();
		if (0 < n.length) return (e += o) === n.length ? (e = 0) : -1 === e && (e = n.length - 1), n[e].focus();
		N().focus();
	}
	function ne(t) {
		for (var e in t) t[e] = new WeakMap();
	}
	function ae(e, t, o) {
		t.showLoaderOnConfirm && Et(),
			t.preConfirm
				? (e.resetValidationMessage(),
				  Promise.resolve()
						.then(function () {
							return t.preConfirm(o, t.validationMessage);
						})
						.then(function (t) {
							lt(A()) || !1 === t ? e.hideLoading() : te(e, void 0 === t ? o : t);
						}))
				: te(e, o);
	}
	var re,
		se = {
			select: function (t, e, n) {
				var a = at(t, Y.select);
				e.forEach(function (t) {
					var e = t[0],
						o = t[1];
					((t = document.createElement("option")).value = e), (t.innerHTML = o), n.inputValue.toString() === e.toString() && (t.selected = !0), a.appendChild(t);
				}),
					a.focus();
			},
			radio: function (t, e, a) {
				var r = at(t, Y.radio);
				e.forEach(function (t) {
					var e = t[0],
						o = t[1],
						n = document.createElement("input"),
						t = document.createElement("label");
					(n.type = "radio"), (n.name = Y.radio), (n.value = e), a.inputValue.toString() === e.toString() && (n.checked = !0), ((e = document.createElement("span")).innerHTML = o), (e.className = Y.label), t.appendChild(n), t.appendChild(e), r.appendChild(t);
				}),
					(e = r.querySelectorAll("input")).length && e[0].focus();
			},
		},
		ie = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
		le = ["Escape", "Esc"],
		ce = !1,
		ue = Object.freeze({
			hideLoading: Yt,
			disableLoading: Yt,
			getInput: function (t) {
				var e = gt.innerParams.get(t || this);
				return (t = gt.domCache.get(t || this)) ? X(t.content, e.input) : null;
			},
			close: _t,
			closePopup: _t,
			closeModal: _t,
			closeToast: _t,
			enableButtons: function () {
				Ft(this, ["confirmButton", "cancelButton"], !1);
			},
			disableButtons: function () {
				Ft(this, ["confirmButton", "cancelButton"], !0);
			},
			enableInput: function () {
				return $t(this.getInput(), !1);
			},
			disableInput: function () {
				return $t(this.getInput(), !0);
			},
			showValidationMessage: function (t) {
				var e = gt.domCache.get(this);
				(e.validationMessage.innerHTML = t), (t = window.getComputedStyle(e.popup)), (e.validationMessage.style.marginLeft = "-".concat(t.getPropertyValue("padding-left"))), (e.validationMessage.style.marginRight = "-".concat(t.getPropertyValue("padding-right"))), K(e.validationMessage), (e = this.getInput()) && (e.setAttribute("aria-invalid", !0), e.setAttribute("aria-describedBy", Y["validation-message"]), F(e), st(e, Y.inputerror));
			},
			resetValidationMessage: function () {
				var t = gt.domCache.get(this);
				t.validationMessage && Q(t.validationMessage), (t = this.getInput()) && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), it(t, Y.inputerror));
			},
			getProgressSteps: function () {
				return gt.domCache.get(this).progressSteps;
			},
			_main: function (t) {
				!(function (t) {
					for (var e in t) jt((n = e)) || q('Unknown parameter "'.concat(n, '"')), t.toast && ((o = e), -1 !== Vt.indexOf(o) && q('The parameter "'.concat(o, '" is incompatible with toasts'))), zt((o = e)) && ((e = o), (o = qt[o]), (o = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(o, '" instead.')), -1 === V.indexOf(o) && (V.push(o), q(o)));
					var o, n;
				})(t),
					Mt.currentInstance && Mt.currentInstance._destroy(),
					(Mt.currentInstance = this);
				var e,
					o,
					n,
					a,
					r,
					s,
					i,
					l,
					c = ((l = d({}, Ht.showClass, (u = t).showClass)), (c = d({}, Ht.hideClass, u.hideClass)), ((t = d({}, Ht, u)).showClass = l), (t.hideClass = c), !1 === u.animation && ((t.showClass = { popup: "", backdrop: "swal2-backdrop-show swal2-noanimation" }), (t.hideClass = {})), t);
				(o = e = c).inputValidator ||
					Object.keys(Kt).forEach(function (t) {
						o.input === t && (o.inputValidator = Kt[t]);
					}),
					e.showLoaderOnConfirm && !e.preConfirm && q("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
					(e.animation = H(e.animation)),
					((i = e).target && ("string" != typeof i.target || document.querySelector(i.target)) && ("string" == typeof i.target || i.target.appendChild)) || (q('Target parameter is not valid, defaulting to "body"'), (i.target = "body")),
					"string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")),
					(n = e),
					(a = D()) && (a.parentNode.removeChild(a), it([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]])),
					et()
						? w("SweetAlert2 requires document to initialize")
						: (((l = document.createElement("div")).className = Y.container),
						  (l.innerHTML = ct),
						  (e = "string" == typeof (i = n.target) ? document.querySelector(i) : i).appendChild(l),
						  (a = n),
						  (i = N()).setAttribute("role", a.toast ? "alert" : "dialog"),
						  i.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
						  a.toast || i.setAttribute("aria-modal", "true"),
						  "rtl" === window.getComputedStyle(e).direction && st(D(), Y.rtl),
						  (l = C()),
						  (n = at(l, Y.input)),
						  (a = at(l, Y.file)),
						  (r = l.querySelector(".".concat(Y.range, " input"))),
						  (s = l.querySelector(".".concat(Y.range, " output"))),
						  (i = at(l, Y.select)),
						  (e = l.querySelector(".".concat(Y.checkbox, " input"))),
						  (l = at(l, Y.textarea)),
						  (n.oninput = ot),
						  (a.onchange = ot),
						  (i.onchange = ot),
						  (e.onchange = ot),
						  (l.oninput = ot),
						  (r.oninput = function (t) {
								ot(t), (s.value = r.value);
						  }),
						  (r.onchange = function (t) {
								ot(t), (r.nextSibling.value = r.value);
						  })),
					Object.freeze(c),
					Mt.timeout && (Mt.timeout.stop(), delete Mt.timeout),
					clearTimeout(Mt.restoreFocusTimeout);
				var u,
					y,
					k,
					v,
					t = ((t = { popup: N(), container: D(), content: C(), actions: S(), confirmButton: T(), cancelButton: B(), closeButton: L(), validationMessage: A(), progressSteps: P() }), gt.domCache.set(this, t), t);
				return (
					xt(this, c),
					gt.innerParams.set(this, c),
					(y = this),
					(k = t),
					(v = c),
					new Promise(function (t) {
						function e(t) {
							y.closePopup({ dismiss: t });
						}
						var o, n, a, r, s, i, l, c, u, d, w, m, p, f, g, b, h;
						Nt.swalPromiseResolve.set(y, t),
							(o = Mt),
							(n = v),
							(a = e),
							Q((t = E())),
							n.timer &&
								((o.timeout = new Wt(function () {
									a("timer"), delete o.timeout;
								}, n.timer)),
								n.timerProgressBar &&
									(K(t),
									setTimeout(function () {
										tt(n.timer);
									}))),
							(k.confirmButton.onclick = function () {
								return (
									(e = v),
									(t = y).disableButtons(),
									void (e.input
										? ((n = t),
										  (a = (function (t) {
												var e,
													o = n.getInput();
												if (!o) return null;
												switch (t.input) {
													case "checkbox":
														return o.checked ? 1 : 0;
													case "radio":
														return (e = o).checked ? e.value : null;
													case "file":
														return (e = o).files.length ? (null !== e.getAttribute("multiple") ? e.files : e.files[0]) : null;
													default:
														return t.inputAutoTrim ? o.value.trim() : o.value;
												}
										  })((o = e))),
										  o.inputValidator
												? (n.disableInput(),
												  Promise.resolve()
														.then(function () {
															return o.inputValidator(a, o.validationMessage);
														})
														.then(function (t) {
															n.enableButtons(), n.enableInput(), t ? n.showValidationMessage(t) : ae(n, o, a);
														}))
												: n.getInput().checkValidity()
												? ae(n, o, a)
												: (n.enableButtons(), n.showValidationMessage(o.validationMessage)))
										: ae(t, e, !0))
								);
								var t, e, n, o, a;
							}),
							(k.cancelButton.onclick = function () {
								var t = e;
								y.disableButtons(), t(R.cancel);
							}),
							(k.closeButton.onclick = function () {
								return e(R.close);
							}),
							(u = y),
							(d = k),
							(t = e),
							gt.innerParams.get(u).toast
								? ((b = u),
								  (h = t),
								  (d.popup.onclick = function () {
										var t = gt.innerParams.get(b);
										t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || h(R.close);
								  }))
								: (((g = d).popup.onmousedown = function () {
										g.container.onmouseup = function (t) {
											(g.container.onmouseup = void 0), t.target === g.container && (ce = !0);
										};
								  }),
								  ((f = d).container.onmousedown = function () {
										f.popup.onmouseup = function (t) {
											(f.popup.onmouseup = void 0), (t.target !== f.popup && !f.popup.contains(t.target)) || (ce = !0);
										};
								  }),
								  (w = u),
								  (p = t),
								  ((m = d).container.onclick = function (t) {
										var e = gt.innerParams.get(w);
										ce ? (ce = !1) : t.target === m.container && H(e.allowOutsideClick) && p(R.backdrop);
								  })),
							ee(y, Mt, v, e),
							(v.toast && (v.input || v.footer || v.showCloseButton) ? st : it)(document.body, Y["toast-column"]),
							Gt(y, v),
							(r = v),
							(u = D()),
							(c = N()),
							"function" == typeof r.onBeforeOpen && r.onBeforeOpen(c),
							(t = c),
							st(u, (d = r).showClass.backdrop),
							K(t),
							st(t, d.showClass.popup),
							st([document.documentElement, document.body], Y.shown),
							d.heightAuto && d.backdrop && !d.toast && st([document.documentElement, document.body], Y["height-auto"]),
							(t = u),
							(d = c),
							wt && G(d) ? ((t.style.overflowY = "hidden"), d.addEventListener(wt, Jt)) : (t.style.overflowY = "auto"),
							j() &&
								((s = u),
								(u = r.scrollbarPadding),
								((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)) &&
									!z(document.body, Y.iosfix) &&
									((t = document.body.scrollTop),
									(document.body.style.top = "".concat(-1 * t, "px")),
									st(document.body, Y.iosfix),
									((l = D()).ontouchstart = function (t) {
										i = t.target === l || (!(l.scrollHeight > l.clientHeight) && "INPUT" !== t.target.tagName);
									}),
									(l.ontouchmove = function (t) {
										i && (t.preventDefault(), t.stopPropagation());
									})),
								"undefined" != typeof window && Zt() && (Dt(), window.addEventListener("resize", Dt)),
								x(document.body.children).forEach(function (t) {
									var e, o;
									t === D() || ((e = t), (o = D()), "function" == typeof e.contains && e.contains(o)) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
								}),
								!u ||
									(null === _.previousBodyPadding &&
										document.body.scrollHeight > window.innerHeight &&
										((_.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))),
										(document.body.style.paddingRight = "".concat(
											_.previousBodyPadding +
												(function () {
													var t = document.createElement("div");
													(t.className = Y["scrollbar-measure"]), document.body.appendChild(t);
													var e = t.getBoundingClientRect().width - t.clientWidth;
													return document.body.removeChild(t), e;
												})(),
											"px"
										)))),
								setTimeout(function () {
									s.scrollTop = 0;
								})),
							U() || Mt.previousActiveElement || (Mt.previousActiveElement = document.activeElement),
							"function" == typeof r.onOpen &&
								setTimeout(function () {
									return r.onOpen(c);
								}),
							(t = k),
							(u = v).toast || (H(u.allowEnterKey) ? (u.focusCancel && lt(t.cancelButton) ? t.cancelButton.focus() : u.focusConfirm && lt(t.confirmButton) ? t.confirmButton.focus() : oe(0, -1, 1)) : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()),
							(k.container.scrollTop = 0);
					})
				);
			},
			update: function (e) {
				var t = N(),
					o = gt.innerParams.get(this);
				if (!t || z(t, o.hideClass.popup)) return q("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
				var n = {};
				Object.keys(e).forEach(function (t) {
					we.isUpdatableParameter(t) ? (n[t] = e[t]) : q('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
				}),
					xt(this, (o = d({}, o, n))),
					gt.innerParams.set(this, o),
					Object.defineProperties(this, { params: { value: d({}, this.params, e), writable: !1, enumerable: !0 } });
			},
			_destroy: function () {
				var t = gt.domCache.get(this),
					e = gt.innerParams.get(this);
				e && (t.popup && Mt.swalCloseEventFinishedCallback && (Mt.swalCloseEventFinishedCallback(), delete Mt.swalCloseEventFinishedCallback), Mt.deferDisposalTimer && (clearTimeout(Mt.deferDisposalTimer), delete Mt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Mt.keydownHandler, delete Mt.keydownTarget, ne(gt), ne(Nt));
			},
		});
	function de() {
		if ("undefined" != typeof window) {
			"undefined" == typeof Promise && w("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), (re = this);
			for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
			var n = Object.freeze(this.constructor.argsToParams(e));
			Object.defineProperties(this, { params: { value: n, writable: !1, enumerable: !0, configurable: !0 } }), (n = this._main(this.params)), gt.promise.set(this, n);
		}
	}
	(de.prototype.then = function (t) {
		return gt.promise.get(this).then(t);
	}),
		(de.prototype.finally = function (t) {
			return gt.promise.get(this).finally(t);
		}),
		d(de.prototype, ue),
		d(de, Rt),
		Object.keys(ue).forEach(function (t) {
			de[t] = function () {
				if (re) return re[t].apply(re, arguments);
			};
		}),
		(de.DismissReason = R),
		(de.version = "9.7.1");
	var we = de;
	return (we.default = we);
}),
	void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
	"undefined" != typeof document &&
		(function (t, e) {
			var o = t.createElement("style");
			if ((t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet)) o.styleSheet.disabled || (o.styleSheet.cssText = e);
			else
				try {
					o.innerHTML = e;
				} catch (t) {
					o.innerText = e;
				}
		})(document, '.swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}');
