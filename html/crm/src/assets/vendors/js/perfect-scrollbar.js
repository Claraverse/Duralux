!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.PerfectScrollbar = e());
})(this, function () {
	"use strict";
	function v(t) {
		return getComputedStyle(t);
	}
	function d(t, e) {
		for (var i in e) {
			var l = e[i];
			"number" == typeof l && (l += "px"), (t.style[i] = l);
		}
		return t;
	}
	function f(t) {
		var e = document.createElement("div");
		return (e.className = t), e;
	}
	var i = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
	function s(t, e) {
		if (!i) throw new Error("No element matching method supported");
		return i.call(t, e);
	}
	function r(t) {
		t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
	}
	function n(t, e) {
		return Array.prototype.filter.call(t.children, function (t) {
			return s(t, e);
		});
	}
	var m = {
			main: "ps",
			element: {
				thumb: function (t) {
					return "ps__thumb-" + t;
				},
				rail: function (t) {
					return "ps__rail-" + t;
				},
				consuming: "ps__child--consume",
			},
			state: {
				focus: "ps--focus",
				clicking: "ps--clicking",
				active: function (t) {
					return "ps--active-" + t;
				},
				scrolling: function (t) {
					return "ps--scrolling-" + t;
				},
			},
		},
		o = { x: null, y: null };
	function Y(t, e) {
		var i = t.element.classList,
			l = m.state.scrolling(e);
		i.contains(l) ? clearTimeout(o[e]) : i.add(l);
	}
	function X(t, e) {
		o[e] = setTimeout(function () {
			return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
		}, t.settings.scrollingThreshold);
	}
	var l = function (t) {
			(this.element = t), (this.handlers = {});
		},
		t = { isEmpty: { configurable: !0 } };
	(l.prototype.bind = function (t, e) {
		void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
	}),
		(l.prototype.unbind = function (e, i) {
			var l = this;
			this.handlers[e] = this.handlers[e].filter(function (t) {
				return !(!i || t === i) || (l.element.removeEventListener(e, t, !1), !1);
			});
		}),
		(l.prototype.unbindAll = function () {
			for (var t in this.handlers) this.unbind(t);
		}),
		(t.isEmpty.get = function () {
			var e = this;
			return Object.keys(this.handlers).every(function (t) {
				return 0 === e.handlers[t].length;
			});
		}),
		Object.defineProperties(l.prototype, t);
	var p = function () {
		this.eventElements = [];
	};
	function b(t) {
		if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
		var e = document.createEvent("CustomEvent");
		return e.initCustomEvent(t, !1, !1, void 0), e;
	}
	(p.prototype.eventElement = function (e) {
		var t = this.eventElements.filter(function (t) {
			return t.element === e;
		})[0];
		return t || ((t = new l(e)), this.eventElements.push(t)), t;
	}),
		(p.prototype.bind = function (t, e, i) {
			this.eventElement(t).bind(e, i);
		}),
		(p.prototype.unbind = function (t, e, i) {
			var l = this.eventElement(t);
			l.unbind(e, i), l.isEmpty && this.eventElements.splice(this.eventElements.indexOf(l), 1);
		}),
		(p.prototype.unbindAll = function () {
			this.eventElements.forEach(function (t) {
				return t.unbindAll();
			}),
				(this.eventElements = []);
		}),
		(p.prototype.once = function (t, e, i) {
			var l = this.eventElement(t),
				r = function (t) {
					l.unbind(e, r), i(t);
				};
			l.bind(e, r);
		});
	var e = function (t, e, i, l, r) {
		var n;
		if ((void 0 === l && (l = !0), void 0 === r && (r = !1), "top" === e)) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
		else {
			if ("left" !== e) throw new Error("A proper axis should be provided");
			n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
		}
		!(function (t, e, i, l, r) {
			var n = i[0],
				o = i[1],
				s = i[2],
				a = i[3],
				c = i[4],
				h = i[5];
			void 0 === l && (l = !0);
			void 0 === r && (r = !1);
			var u = t.element;
			(t.reach[a] = null), u[s] < 1 && (t.reach[a] = "start");
			u[s] > t[n] - t[o] - 1 && (t.reach[a] = "end");
			e && (u.dispatchEvent(b("ps-scroll-" + a)), e < 0 ? u.dispatchEvent(b("ps-scroll-" + c)) : 0 < e && u.dispatchEvent(b("ps-scroll-" + h)), l && (Y((d = t), (f = a)), X(d, f)));
			var d, f;
			t.reach[a] && (e || r) && u.dispatchEvent(b("ps-" + a + "-reach-" + t.reach[a]));
		})(t, i, n, l, r);
	};
	function g(t) {
		return parseInt(t, 10) || 0;
	}
	var w = { isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)), supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints, isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent) },
		y = function (t) {
			var e = t.element,
				i = Math.floor(e.scrollTop),
				l = e.getBoundingClientRect();
			(t.containerWidth = Math.ceil(l.width)),
				(t.containerHeight = Math.ceil(l.height)),
				(t.contentWidth = e.scrollWidth),
				(t.contentHeight = e.scrollHeight),
				e.contains(t.scrollbarXRail) ||
					(n(e, m.element.rail("x")).forEach(function (t) {
						return r(t);
					}),
					e.appendChild(t.scrollbarXRail)),
				e.contains(t.scrollbarYRail) ||
					(n(e, m.element.rail("y")).forEach(function (t) {
						return r(t);
					}),
					e.appendChild(t.scrollbarYRail)),
				!t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? ((t.scrollbarXActive = !0), (t.railXWidth = t.containerWidth - t.railXMarginWidth), (t.railXRatio = t.containerWidth / t.railXWidth), (t.scrollbarXWidth = a(t, g((t.railXWidth * t.containerWidth) / t.contentWidth))), (t.scrollbarXLeft = g(((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) / (t.contentWidth - t.containerWidth)))) : (t.scrollbarXActive = !1),
				!t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? ((t.scrollbarYActive = !0), (t.railYHeight = t.containerHeight - t.railYMarginHeight), (t.railYRatio = t.containerHeight / t.railYHeight), (t.scrollbarYHeight = a(t, g((t.railYHeight * t.containerHeight) / t.contentHeight))), (t.scrollbarYTop = g((i * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight)))) : (t.scrollbarYActive = !1),
				t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
				t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
				(function (t, e) {
					var i = { width: e.railXWidth },
						l = Math.floor(t.scrollTop);
					e.isRtl ? (i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth) : (i.left = t.scrollLeft);
					e.isScrollbarXUsingBottom ? (i.bottom = e.scrollbarXBottom - l) : (i.top = e.scrollbarXTop + l);
					d(e.scrollbarXRail, i);
					var r = { top: l, height: e.railYHeight };
					e.isScrollbarYUsingRight ? (e.isRtl ? (r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth) : (r.right = e.scrollbarYRight - t.scrollLeft)) : e.isRtl ? (r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth) : (r.left = e.scrollbarYLeft + t.scrollLeft);
					d(e.scrollbarYRail, r), d(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), d(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth });
				})(e, t),
				t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), (t.scrollbarXWidth = 0), (t.scrollbarXLeft = 0), (e.scrollLeft = 0)),
				t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), (t.scrollbarYHeight = 0), (t.scrollbarYTop = 0), (e.scrollTop = 0));
		};
	function a(t, e) {
		return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
	}
	function c(e, t) {
		var i = t[0],
			l = t[1],
			r = t[2],
			n = t[3],
			o = t[4],
			s = t[5],
			a = t[6],
			c = t[7],
			h = t[8],
			u = e.element,
			d = null,
			f = null,
			p = null;
		function b(t) {
			(u[a] = d + p * (t[r] - f)), Y(e, c), y(e), t.stopPropagation(), t.preventDefault();
		}
		function g() {
			X(e, c), e[h].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", b);
		}
		e.event.bind(e[o], "mousedown", function (t) {
			(d = u[a]), (f = t[r]), (p = (e[l] - e[i]) / (e[n] - e[s])), e.event.bind(e.ownerDocument, "mousemove", b), e.event.once(e.ownerDocument, "mouseup", g), e[h].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault();
		});
	}
	var W = {
			"click-rail": function (i) {
				i.event.bind(i.scrollbarY, "mousedown", function (t) {
					return t.stopPropagation();
				}),
					i.event.bind(i.scrollbarYRail, "mousedown", function (t) {
						var e = t.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top > i.scrollbarYTop ? 1 : -1;
						(i.element.scrollTop += e * i.containerHeight), y(i), t.stopPropagation();
					}),
					i.event.bind(i.scrollbarX, "mousedown", function (t) {
						return t.stopPropagation();
					}),
					i.event.bind(i.scrollbarXRail, "mousedown", function (t) {
						var e = t.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left > i.scrollbarXLeft ? 1 : -1;
						(i.element.scrollLeft += e * i.containerWidth), y(i), t.stopPropagation();
					});
			},
			"drag-thumb": function (t) {
				c(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), c(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
			},
			keyboard: function (n) {
				var o = n.element;
				n.event.bind(n.ownerDocument, "keydown", function (t) {
					if (!((t.isDefaultPrevented && t.isDefaultPrevented()) || t.defaultPrevented) && (s(o, ":hover") || s(n.scrollbarX, ":focus") || s(n.scrollbarY, ":focus"))) {
						var e,
							i = document.activeElement ? document.activeElement : n.ownerDocument.activeElement;
						if (i) {
							if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
							else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
							if (s((e = i), "input,[contenteditable]") || s(e, "select,[contenteditable]") || s(e, "textarea,[contenteditable]") || s(e, "button,[contenteditable]")) return;
						}
						var l = 0,
							r = 0;
						switch (t.which) {
							case 37:
								l = t.metaKey ? -n.contentWidth : t.altKey ? -n.containerWidth : -30;
								break;
							case 38:
								r = t.metaKey ? n.contentHeight : t.altKey ? n.containerHeight : 30;
								break;
							case 39:
								l = t.metaKey ? n.contentWidth : t.altKey ? n.containerWidth : 30;
								break;
							case 40:
								r = t.metaKey ? -n.contentHeight : t.altKey ? -n.containerHeight : -30;
								break;
							case 32:
								r = t.shiftKey ? n.containerHeight : -n.containerHeight;
								break;
							case 33:
								r = n.containerHeight;
								break;
							case 34:
								r = -n.containerHeight;
								break;
							case 36:
								r = n.contentHeight;
								break;
							case 35:
								r = -n.contentHeight;
								break;
							default:
								return;
						}
						(n.settings.suppressScrollX && 0 !== l) ||
							(n.settings.suppressScrollY && 0 !== r) ||
							((o.scrollTop -= r),
							(o.scrollLeft += l),
							y(n),
							(function (t, e) {
								var i = Math.floor(o.scrollTop);
								if (0 === t) {
									if (!n.scrollbarYActive) return !1;
									if ((0 === i && 0 < e) || (i >= n.contentHeight - n.containerHeight && e < 0)) return !n.settings.wheelPropagation;
								}
								var l = o.scrollLeft;
								if (0 === e) {
									if (!n.scrollbarXActive) return !1;
									if ((0 === l && t < 0) || (l >= n.contentWidth - n.containerWidth && 0 < t)) return !n.settings.wheelPropagation;
								}
								return !0;
							})(l, r) && t.preventDefault());
					}
				});
			},
			wheel: function (b) {
				var g = b.element;
				function t(t) {
					var e,
						i,
						l,
						r = ((i = (e = t).deltaX), (l = -1 * e.deltaY), (void 0 !== i && void 0 !== l) || ((i = (-1 * e.wheelDeltaX) / 6), (l = e.wheelDeltaY / 6)), e.deltaMode && 1 === e.deltaMode && ((i *= 10), (l *= 10)), i != i && l != l && ((i = 0), (l = e.wheelDelta)), e.shiftKey ? [-l, -i] : [i, l]),
						n = r[0],
						o = r[1];
					if (
						!(function (t, e, i) {
							if (!w.isWebKit && g.querySelector("select:focus")) return !0;
							if (!g.contains(t)) return !1;
							for (var l = t; l && l !== g; ) {
								if (l.classList.contains(m.element.consuming)) return !0;
								var r = v(l);
								if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
									var n = l.scrollHeight - l.clientHeight;
									if (0 < n && !((0 === l.scrollTop && 0 < i) || (l.scrollTop === n && i < 0))) return !0;
									var o = l.scrollWidth - l.clientWidth;
									if (0 < o && !((0 === l.scrollLeft && e < 0) || (l.scrollLeft === o && 0 < e))) return !0;
								}
								l = l.parentNode;
							}
							return !1;
						})(t.target, n, o)
					) {
						var s,
							a,
							c,
							h,
							u,
							d,
							f,
							p = !1;
						b.settings.useBothWheelAxes ? (b.scrollbarYActive && !b.scrollbarXActive ? (o ? (g.scrollTop -= o * b.settings.wheelSpeed) : (g.scrollTop += n * b.settings.wheelSpeed), (p = !0)) : b.scrollbarXActive && !b.scrollbarYActive && (n ? (g.scrollLeft += n * b.settings.wheelSpeed) : (g.scrollLeft -= o * b.settings.wheelSpeed), (p = !0))) : ((g.scrollTop -= o * b.settings.wheelSpeed), (g.scrollLeft += n * b.settings.wheelSpeed)), y(b), (p = p || ((s = n), (a = o), (c = Math.floor(g.scrollTop)), (h = 0 === g.scrollTop), (u = c + g.offsetHeight === g.scrollHeight), (d = 0 === g.scrollLeft), (f = g.scrollLeft + g.offsetWidth === g.scrollWidth), !(Math.abs(a) > Math.abs(s) ? h || u : d || f) || !b.settings.wheelPropagation)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
					}
				}
				void 0 !== window.onwheel ? b.event.bind(g, "wheel", t) : void 0 !== window.onmousewheel && b.event.bind(g, "mousewheel", t);
			},
			touch: function (s) {
				if (w.supportsTouch || w.supportsIePointer) {
					var a = s.element,
						c = {},
						h = 0,
						u = {},
						i = null;
					w.supportsTouch ? (s.event.bind(a, "touchstart", t), s.event.bind(a, "touchmove", e), s.event.bind(a, "touchend", l)) : w.supportsIePointer && (window.PointerEvent ? (s.event.bind(a, "pointerdown", t), s.event.bind(a, "pointermove", e), s.event.bind(a, "pointerup", l)) : window.MSPointerEvent && (s.event.bind(a, "MSPointerDown", t), s.event.bind(a, "MSPointerMove", e), s.event.bind(a, "MSPointerUp", l)));
				}
				function d(t, e) {
					(a.scrollTop -= e), (a.scrollLeft -= t), y(s);
				}
				function f(t) {
					return t.targetTouches ? t.targetTouches[0] : t;
				}
				function p(t) {
					return !((t.pointerType && "pen" === t.pointerType && 0 === t.buttons) || ((!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)));
				}
				function t(t) {
					if (p(t)) {
						var e = f(t);
						(c.pageX = e.pageX), (c.pageY = e.pageY), (h = new Date().getTime()), null !== i && clearInterval(i);
					}
				}
				function e(t) {
					if (p(t)) {
						var e = f(t),
							i = { pageX: e.pageX, pageY: e.pageY },
							l = i.pageX - c.pageX,
							r = i.pageY - c.pageY;
						if (
							(function (t, e, i) {
								if (!a.contains(t)) return !1;
								for (var l = t; l && l !== a; ) {
									if (l.classList.contains(m.element.consuming)) return !0;
									var r = v(l);
									if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
										var n = l.scrollHeight - l.clientHeight;
										if (0 < n && !((0 === l.scrollTop && 0 < i) || (l.scrollTop === n && i < 0))) return !0;
										var o = l.scrollLeft - l.clientWidth;
										if (0 < o && !((0 === l.scrollLeft && e < 0) || (l.scrollLeft === o && 0 < e))) return !0;
									}
									l = l.parentNode;
								}
								return !1;
							})(t.target, l, r)
						)
							return;
						d(l, r), (c = i);
						var n = new Date().getTime(),
							o = n - h;
						0 < o && ((u.x = l / o), (u.y = r / o), (h = n)),
							(function (t, e) {
								var i = Math.floor(a.scrollTop),
									l = a.scrollLeft,
									r = Math.abs(t),
									n = Math.abs(e);
								if (r < n) {
									if ((e < 0 && i === s.contentHeight - s.containerHeight) || (0 < e && 0 === i)) return 0 === window.scrollY && 0 < e && w.isChrome;
								} else if (n < r && ((t < 0 && l === s.contentWidth - s.containerWidth) || (0 < t && 0 === l))) return !0;
								return !0;
							})(l, r) && t.preventDefault();
					}
				}
				function l() {
					s.settings.swipeEasing &&
						(clearInterval(i),
						(i = setInterval(function () {
							s.isInitialized ? clearInterval(i) : u.x || u.y ? (Math.abs(u.x) < 0.01 && Math.abs(u.y) < 0.01 ? clearInterval(i) : (d(30 * u.x, 30 * u.y), (u.x *= 0.8), (u.y *= 0.8))) : clearInterval(i);
						}, 10)));
				}
			},
		},
		h = function (t, e) {
			var i = this;
			if ((void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
			for (var l in ((this.element = t).classList.add(m.main), (this.settings = { handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !0, wheelSpeed: 1 }), e)) i.settings[l] = e[l];
			(this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
			var r,
				n,
				o = function () {
					return t.classList.add(m.state.focus);
				},
				s = function () {
					return t.classList.remove(m.state.focus);
				};
			(this.isRtl = "rtl" === v(t).direction), (this.isNegativeScroll = ((n = t.scrollLeft), (t.scrollLeft = -1), (r = t.scrollLeft < 0), (t.scrollLeft = n), r)), (this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0), (this.event = new p()), (this.ownerDocument = t.ownerDocument || document), (this.scrollbarXRail = f(m.element.rail("x"))), t.appendChild(this.scrollbarXRail), (this.scrollbarX = f(m.element.thumb("x"))), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", s), (this.scrollbarXActive = null), (this.scrollbarXWidth = null), (this.scrollbarXLeft = null);
			var a = v(this.scrollbarXRail);
			(this.scrollbarXBottom = parseInt(a.bottom, 10)), isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = g(a.top))) : (this.isScrollbarXUsingBottom = !0), (this.railBorderXWidth = g(a.borderLeftWidth) + g(a.borderRightWidth)), d(this.scrollbarXRail, { display: "block" }), (this.railXMarginWidth = g(a.marginLeft) + g(a.marginRight)), d(this.scrollbarXRail, { display: "" }), (this.railXWidth = null), (this.railXRatio = null), (this.scrollbarYRail = f(m.element.rail("y"))), t.appendChild(this.scrollbarYRail), (this.scrollbarY = f(m.element.thumb("y"))), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", s), (this.scrollbarYActive = null), (this.scrollbarYHeight = null), (this.scrollbarYTop = null);
			var c,
				h,
				u = v(this.scrollbarYRail);
			(this.scrollbarYRight = parseInt(u.right, 10)),
				isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = g(u.left))) : (this.isScrollbarYUsingRight = !0),
				(this.scrollbarYOuterWidth = this.isRtl ? ((c = this.scrollbarY), g((h = v(c)).width) + g(h.paddingLeft) + g(h.paddingRight) + g(h.borderLeftWidth) + g(h.borderRightWidth)) : null),
				(this.railBorderYWidth = g(u.borderTopWidth) + g(u.borderBottomWidth)),
				d(this.scrollbarYRail, { display: "block" }),
				(this.railYMarginHeight = g(u.marginTop) + g(u.marginBottom)),
				d(this.scrollbarYRail, { display: "" }),
				(this.railYHeight = null),
				(this.railYRatio = null),
				(this.reach = { x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null }),
				(this.isAlive = !0),
				this.settings.handlers.forEach(function (t) {
					return W[t](i);
				}),
				(this.lastScrollTop = Math.floor(t.scrollTop)),
				(this.lastScrollLeft = t.scrollLeft),
				this.event.bind(this.element, "scroll", function (t) {
					return i.onScroll(t);
				}),
				y(this);
		};
	return (
		(h.prototype.update = function () {
			this.isAlive && ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0), d(this.scrollbarXRail, { display: "block" }), d(this.scrollbarYRail, { display: "block" }), (this.railXMarginWidth = g(v(this.scrollbarXRail).marginLeft) + g(v(this.scrollbarXRail).marginRight)), (this.railYMarginHeight = g(v(this.scrollbarYRail).marginTop) + g(v(this.scrollbarYRail).marginBottom)), d(this.scrollbarXRail, { display: "none" }), d(this.scrollbarYRail, { display: "none" }), y(this), e(this, "top", 0, !1, !0), e(this, "left", 0, !1, !0), d(this.scrollbarXRail, { display: "" }), d(this.scrollbarYRail, { display: "" }));
		}),
		(h.prototype.onScroll = function (t) {
			this.isAlive && (y(this), e(this, "top", this.element.scrollTop - this.lastScrollTop), e(this, "left", this.element.scrollLeft - this.lastScrollLeft), (this.lastScrollTop = Math.floor(this.element.scrollTop)), (this.lastScrollLeft = this.element.scrollLeft));
		}),
		(h.prototype.destroy = function () {
			this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), (this.element = null), (this.scrollbarX = null), (this.scrollbarY = null), (this.scrollbarXRail = null), (this.scrollbarYRail = null), (this.isAlive = !1));
		}),
		(h.prototype.removePsClasses = function () {
			this.element.className = this.element.className
				.split(" ")
				.filter(function (t) {
					return !t.match(/^ps([-_].+|)$/);
				})
				.join(" ");
		}),
		h
	);
});
//# sourceMappingURL=perfect-scrollbar.js.map
